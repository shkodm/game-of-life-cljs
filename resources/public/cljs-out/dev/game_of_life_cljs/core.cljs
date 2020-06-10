(ns ^:figwheel-hooks game-of-life-cljs.core
  (:require
   [clojure.set :as s]
   ))

(def alive-class
  (str "alive_cell"))

(def dead-class
  (str "cell"))

(def grid-dimensions
  (hash-map :x 45 :y 30))

(defn get-class-by-id
  [id]
  (let [selected (.getElementById js/document id)]
    (.-className selected)))

(defn make-key
  [x y]
  (str x "_" y))

(defn set-cell-class
  ([x y class]
  (let [selected (.getElementById js/document (str x "_" y))]
  (set! (.-className selected) class)))
  ([id class]
  (let [selected (.getElementById js/document id)]
  (set! (.-className selected) class))))

(defn make-dead [x y]
  (set-cell-class x y dead-class))
;
(defn make-alive [x y]
  (set-cell-class x y alive-class))

;; rendering and state
(defonce grid (atom (let
                        [numx (:x grid-dimensions)
                         numy (:y grid-dimensions)]
                        (reduce (fn [red, x]
            (reduce (fn [red2, y]
                      (assoc red2 (make-key x y) (hash-map :alive false)))
                    red
                    (range numy)))
          {}
          (range numx)))))

(defonce counter (atom 0))

(add-watch counter :key (fn [k r os ns]
                               (let [selected (.getElementById js/document "counter")]
                                 (set! (.-innerHTML selected) (str "Iteration " ns)))))

(defn get-state-difference
  ;; Get the cells that changes their state
  [prev current]
  (into (hash-map) (s/difference (set current) (set prev))))

(defn rerender-grid
  [cells]
  (doseq [cell cells]
    (set-cell-class (first cell) (if (:alive (second cell)) alive-class dead-class))))


(add-watch grid :key2 (fn [k r os ns]
                       (rerender-grid (get-state-difference os ns))))


(defn switch-state
  [id]
  (reset! grid (assoc @grid id (hash-map :alive (if (= (get-class-by-id id) dead-class) true false)))))

;; https://github.com/onitica/clojurescript-game-of-life/blob/51b8fce8ef20aa5aa90f4e836e281f9b74bd922a/src-cljs/game_of_life/game.cljs
(defn create-element [mainElement content id class]
  ;; Create element and append to a particular dom
  (let [element (.createElement js/document "div")]
    (.appendChild mainElement element)
    (set! (.-className element) class)
    (set!  (.-id element) id)
    (set! (.-onclick element) #(switch-state id))
    )
)

(def cell-neighbors-relative
  (reduce (fn [red, x]
            (into red (filter (fn [{x :x y :y}] (not (and (= 0 x) (= 0 y)))) (map #(hash-map :y % :x x)  '(-1 0 1)))))
          []
          '(-1 0 1)))

(defn get-cell-num-alive-neighbors
  [x y]
  (let [maxx (:x grid-dimensions)
        maxy (:y grid-dimensions)
        neighbors (reduce (fn [red {x_shift :x y_shift :y}]
                                      (conj red (hash-map :x (+ x x_shift) :y (+ y y_shift))
                                            ))
                          []
                          cell-neighbors-relative
                        )]
    (reduce (fn [red c]
              (+ red (if (:alive (get @grid (make-key (:x c) (:y c))) ) 1 0 ))) 0 neighbors)
))

(defn id-to-coord
  [id]
  (let [pair (map js/parseInt (clojure.string/split id #"_"))]
    (hash-map :x (first pair) :y (second pair))))

(defn make-next-generation
  []
  (let [alive-map (hash-map
                   0 false
                   1 false
                   2 true
                   3 true
                   4 false)
        dead-map (hash-map
                  0 false
                  1 false
                  2 false
                  3 true
                  4 false)]
    (reduce (fn [red, c]
              (let [cell (into (second c) (id-to-coord (first c)))
                    num-alive (get-cell-num-alive-neighbors (:x cell) (:y cell))]
            (assoc red (first c) (hash-map :alive (get (if (:alive cell) alive-map dead-map) num-alive (:alive cell)) ))))
            {}
            @grid)
 ))

;; here we create a map and swap with previous state
(defn make-update []
  (reset! grid (make-next-generation))
  (swap! counter inc)
)

(defn toggle-show
  [element]
  (let [display (.-display (.-style element))]
    (if (= display "none")
      (set! (.-display (.-style element)) "block")
      (set! (.-display (.-style element)) "none"))))

(defn run []
  (let [periodic-update (js/setInterval make-update 300)
        cancel-update #(js/clearInterval periodic-update)
        start-button (.getElementById js/document "startbutton")
        stop-button (.getElementById js/document "stopbutton")
        toggle-buttons (fn [] (toggle-show start-button) (toggle-show stop-button))]
    (toggle-buttons)
    (set! (.-onclick start-button) run)
    (set! (.-onclick stop-button) (fn [] (toggle-buttons) (cancel-update)))))

;; NOTE: This is in order to not duplicate element creation on reloading
(defonce creator
  (let [mainElement (.getElementById js/document "game_container")
        start-button (.getElementById js/document "startbutton")]
    (doseq [cell (sort (fn [lcell, rcell]
                         (let [l (id-to-coord (first lcell))
                               r (id-to-coord (first rcell))]
                           (or (<  (:y l) (:y r))
                               (and (= (:y l) (:y r)) (< (:x l) (:x r)))))) @grid)]
      (create-element mainElement "" (first cell) dead-class)
      (set! (.-onclick start-button) run))))


(defn ^:after-load on-reload []
)
