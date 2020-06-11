// Compiled by ClojureScript 1.10.520 {}
goog.provide('game_of_life_cljs.core');
goog.require('cljs.core');
goog.require('clojure.set');
game_of_life_cljs.core.alive_class = "alive_cell";
game_of_life_cljs.core.dead_class = "cell";
game_of_life_cljs.core.game_container_id = "game_container";
game_of_life_cljs.core.startbutton_id = "startbutton";
game_of_life_cljs.core.stopbutton_id = "stopbutton";
game_of_life_cljs.core.grid_dimensions = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(45),(30)]);
game_of_life_cljs.core.get_class_by_id = (function game_of_life_cljs$core$get_class_by_id(id){
var selected = document.getElementById(id);
return selected.className;
});
game_of_life_cljs.core.make_key = (function game_of_life_cljs$core$make_key(x,y){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join('');
});
game_of_life_cljs.core.set_cell_class = (function game_of_life_cljs$core$set_cell_class(var_args){
var G__8870 = arguments.length;
switch (G__8870) {
case 3:
return game_of_life_cljs.core.set_cell_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return game_of_life_cljs.core.set_cell_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

game_of_life_cljs.core.set_cell_class.cljs$core$IFn$_invoke$arity$3 = (function (x,y,class$){
var selected = document.getElementById([cljs.core.str.cljs$core$IFn$_invoke$arity$1(x),"_",cljs.core.str.cljs$core$IFn$_invoke$arity$1(y)].join(''));
return selected.className = class$;
});

game_of_life_cljs.core.set_cell_class.cljs$core$IFn$_invoke$arity$2 = (function (id,class$){
var selected = document.getElementById(id);
return selected.className = class$;
});

game_of_life_cljs.core.set_cell_class.cljs$lang$maxFixedArity = 3;

game_of_life_cljs.core.make_dead = (function game_of_life_cljs$core$make_dead(x,y){
return game_of_life_cljs.core.set_cell_class.call(null,x,y,game_of_life_cljs.core.dead_class);
});
game_of_life_cljs.core.make_alive = (function game_of_life_cljs$core$make_alive(x,y){
return game_of_life_cljs.core.set_cell_class.call(null,x,y,game_of_life_cljs.core.alive_class);
});
if((typeof game_of_life_cljs !== 'undefined') && (typeof game_of_life_cljs.core !== 'undefined') && (typeof game_of_life_cljs.core.grid !== 'undefined')){
} else {
game_of_life_cljs.core.grid = cljs.core.atom.call(null,(function (){var numx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(game_of_life_cljs.core.grid_dimensions);
var numy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(game_of_life_cljs.core.grid_dimensions);
return cljs.core.reduce.call(null,((function (numx,numy){
return (function (red,x){
return cljs.core.reduce.call(null,((function (numx,numy){
return (function (red2,y){
return cljs.core.assoc.call(null,red2,game_of_life_cljs.core.make_key.call(null,x,y),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"alive","alive",1424929930)],[false]));
});})(numx,numy))
,red,cljs.core.range.call(null,numy));
});})(numx,numy))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.range.call(null,numx));
})());
}
if((typeof game_of_life_cljs !== 'undefined') && (typeof game_of_life_cljs.core !== 'undefined') && (typeof game_of_life_cljs.core.counter !== 'undefined')){
} else {
game_of_life_cljs.core.counter = cljs.core.atom.call(null,(0));
}
cljs.core.add_watch.call(null,game_of_life_cljs.core.counter,new cljs.core.Keyword(null,"key","key",-1516042587),(function (k,r,os,ns){
var selected = document.getElementById("counter");
return selected.innerHTML = ["Iteration ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns)].join('');
}));
/**
 * Get the cells that changes their state
 */
game_of_life_cljs.core.get_state_difference = (function game_of_life_cljs$core$get_state_difference(prev,current){
return cljs.core.into.call(null,cljs.core.PersistentHashMap.EMPTY,clojure.set.difference.call(null,cljs.core.set.call(null,current),cljs.core.set.call(null,prev)));
});
/**
 * Rerender grid cells that changed
 */
game_of_life_cljs.core.rerender_grid = (function game_of_life_cljs$core$rerender_grid(cells){
var seq__8872 = cljs.core.seq.call(null,cells);
var chunk__8873 = null;
var count__8874 = (0);
var i__8875 = (0);
while(true){
if((i__8875 < count__8874)){
var cell = cljs.core._nth.call(null,chunk__8873,i__8875);
game_of_life_cljs.core.set_cell_class.call(null,cljs.core.first.call(null,cell),(cljs.core.truth_(new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cell)))?game_of_life_cljs.core.alive_class:game_of_life_cljs.core.dead_class));


var G__8876 = seq__8872;
var G__8877 = chunk__8873;
var G__8878 = count__8874;
var G__8879 = (i__8875 + (1));
seq__8872 = G__8876;
chunk__8873 = G__8877;
count__8874 = G__8878;
i__8875 = G__8879;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8872);
if(temp__5457__auto__){
var seq__8872__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8872__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__8872__$1);
var G__8880 = cljs.core.chunk_rest.call(null,seq__8872__$1);
var G__8881 = c__4550__auto__;
var G__8882 = cljs.core.count.call(null,c__4550__auto__);
var G__8883 = (0);
seq__8872 = G__8880;
chunk__8873 = G__8881;
count__8874 = G__8882;
i__8875 = G__8883;
continue;
} else {
var cell = cljs.core.first.call(null,seq__8872__$1);
game_of_life_cljs.core.set_cell_class.call(null,cljs.core.first.call(null,cell),(cljs.core.truth_(new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cell)))?game_of_life_cljs.core.alive_class:game_of_life_cljs.core.dead_class));


var G__8884 = cljs.core.next.call(null,seq__8872__$1);
var G__8885 = null;
var G__8886 = (0);
var G__8887 = (0);
seq__8872 = G__8884;
chunk__8873 = G__8885;
count__8874 = G__8886;
i__8875 = G__8887;
continue;
}
} else {
return null;
}
}
break;
}
});
cljs.core.add_watch.call(null,game_of_life_cljs.core.grid,new cljs.core.Keyword(null,"key2","key2",1144654858),(function (k,r,os,ns){
return game_of_life_cljs.core.rerender_grid.call(null,game_of_life_cljs.core.get_state_difference.call(null,os,ns));
}));
game_of_life_cljs.core.switch_state = (function game_of_life_cljs$core$switch_state(id){
return cljs.core.reset_BANG_.call(null,game_of_life_cljs.core.grid,cljs.core.assoc.call(null,cljs.core.deref.call(null,game_of_life_cljs.core.grid),id,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"alive","alive",1424929930)],[((cljs.core._EQ_.call(null,game_of_life_cljs.core.get_class_by_id.call(null,id),game_of_life_cljs.core.dead_class))?true:false)])));
});
/**
 * Create element and append to a particular dom
 */
game_of_life_cljs.core.create_element = (function game_of_life_cljs$core$create_element(mainElement,content,id,class$){
var element = document.createElement("div");
mainElement.appendChild(element);

element.className = class$;

element.id = id;

return element.onclick = ((function (element){
return (function (){
return game_of_life_cljs.core.switch_state.call(null,id);
});})(element))
;
});
/**
 * Generate neighbors lattice around {0 0} cell
 */
game_of_life_cljs.core.cell_neighbors_relative = cljs.core.reduce.call(null,(function (red,x){
return cljs.core.into.call(null,red,cljs.core.filter.call(null,(function (p__8889){
var map__8890 = p__8889;
var map__8890__$1 = (((((!((map__8890 == null))))?(((((map__8890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8890):map__8890);
var x__$1 = cljs.core.get.call(null,map__8890__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.call(null,map__8890__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (!(((cljs.core._EQ_.call(null,(0),x__$1)) && (cljs.core._EQ_.call(null,(0),y)))));
}),cljs.core.map.call(null,(function (p1__8888_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"x","x",2099068185)],[p1__8888_SHARP_,x]);
}),cljs.core.list((-1),(0),(1)))));
}),cljs.core.PersistentVector.EMPTY,cljs.core.list((-1),(0),(1)));
game_of_life_cljs.core.get_cell_num_alive_neighbors = (function game_of_life_cljs$core$get_cell_num_alive_neighbors(x,y){
var maxx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(game_of_life_cljs.core.grid_dimensions);
var maxy = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(game_of_life_cljs.core.grid_dimensions);
var neighbors = cljs.core.reduce.call(null,((function (maxx,maxy){
return (function (red,p__8892){
var map__8893 = p__8892;
var map__8893__$1 = (((((!((map__8893 == null))))?(((((map__8893.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__8893.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__8893):map__8893);
var x_shift = cljs.core.get.call(null,map__8893__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y_shift = cljs.core.get.call(null,map__8893__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.conj.call(null,red,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[(x + x_shift),(y + y_shift)]));
});})(maxx,maxy))
,cljs.core.PersistentVector.EMPTY,game_of_life_cljs.core.cell_neighbors_relative);
return cljs.core.reduce.call(null,((function (maxx,maxy,neighbors){
return (function (red,c){
return (red + (cljs.core.truth_(new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,cljs.core.deref.call(null,game_of_life_cljs.core.grid),game_of_life_cljs.core.make_key.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(c),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(c)))))?(1):(0)));
});})(maxx,maxy,neighbors))
,(0),neighbors);
});
game_of_life_cljs.core.id_to_coord = (function game_of_life_cljs$core$id_to_coord(id){
var pair = cljs.core.map.call(null,parseInt,clojure.string.split.call(null,id,/_/));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)],[cljs.core.first.call(null,pair),cljs.core.second.call(null,pair)]);
});
game_of_life_cljs.core.make_next_generation = (function game_of_life_cljs$core$make_next_generation(){
var alive_map = cljs.core.PersistentHashMap.fromArrays([(0),(1),(2),(3),(4)],[false,false,true,true,false]);
var dead_map = cljs.core.PersistentHashMap.fromArrays([(0),(1),(2),(3),(4)],[false,false,false,true,false]);
return cljs.core.reduce.call(null,((function (alive_map,dead_map){
return (function (red,c){
var cell = cljs.core.into.call(null,cljs.core.second.call(null,c),game_of_life_cljs.core.id_to_coord.call(null,cljs.core.first.call(null,c)));
var num_alive = game_of_life_cljs.core.get_cell_num_alive_neighbors.call(null,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cell));
return cljs.core.assoc.call(null,red,cljs.core.first.call(null,c),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"alive","alive",1424929930)],[cljs.core.get.call(null,(cljs.core.truth_(new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(cell))?alive_map:dead_map),num_alive,new cljs.core.Keyword(null,"alive","alive",1424929930).cljs$core$IFn$_invoke$arity$1(cell))]));
});})(alive_map,dead_map))
,cljs.core.PersistentArrayMap.EMPTY,cljs.core.deref.call(null,game_of_life_cljs.core.grid));
});
game_of_life_cljs.core.make_update = (function game_of_life_cljs$core$make_update(){
cljs.core.reset_BANG_.call(null,game_of_life_cljs.core.grid,game_of_life_cljs.core.make_next_generation.call(null));

return cljs.core.swap_BANG_.call(null,game_of_life_cljs.core.counter,cljs.core.inc);
});
game_of_life_cljs.core.toggle_show = (function game_of_life_cljs$core$toggle_show(element){
var display = element.style.display;
if(cljs.core._EQ_.call(null,display,"none")){
return element.style.display = "block";
} else {
return element.style.display = "none";
}
});
game_of_life_cljs.core.run = (function game_of_life_cljs$core$run(){
var periodic_update = setInterval(game_of_life_cljs.core.make_update,(300));
var cancel_update = ((function (periodic_update){
return (function (){
return clearInterval(periodic_update);
});})(periodic_update))
;
var start_button = document.getElementById(game_of_life_cljs.core.startbutton_id);
var stop_button = document.getElementById(game_of_life_cljs.core.stopbutton_id);
var toggle_buttons = ((function (periodic_update,cancel_update,start_button,stop_button){
return (function (){
game_of_life_cljs.core.toggle_show.call(null,start_button);

return game_of_life_cljs.core.toggle_show.call(null,stop_button);
});})(periodic_update,cancel_update,start_button,stop_button))
;
toggle_buttons.call(null);

start_button.onclick = game_of_life_cljs.core.run;

return stop_button.onclick = ((function (periodic_update,cancel_update,start_button,stop_button,toggle_buttons){
return (function (){
toggle_buttons.call(null);

return cancel_update.call(null);
});})(periodic_update,cancel_update,start_button,stop_button,toggle_buttons))
;
});
if((typeof game_of_life_cljs !== 'undefined') && (typeof game_of_life_cljs.core !== 'undefined') && (typeof game_of_life_cljs.core.creator !== 'undefined')){
} else {
game_of_life_cljs.core.creator = (function (){var mainElement = document.getElementById(game_of_life_cljs.core.game_container_id);
var start_button = document.getElementById(game_of_life_cljs.core.startbutton_id);
var seq__8895 = cljs.core.seq.call(null,cljs.core.sort.call(null,((function (mainElement,start_button){
return (function (lcell,rcell){
var l = game_of_life_cljs.core.id_to_coord.call(null,cljs.core.first.call(null,lcell));
var r = game_of_life_cljs.core.id_to_coord.call(null,cljs.core.first.call(null,rcell));
return (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(l) < new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))) || (((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(l),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(r))) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(l) < new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(r))))));
});})(mainElement,start_button))
,cljs.core.deref.call(null,game_of_life_cljs.core.grid)));
var chunk__8896 = null;
var count__8897 = (0);
var i__8898 = (0);
while(true){
if((i__8898 < count__8897)){
var cell = cljs.core._nth.call(null,chunk__8896,i__8898);
game_of_life_cljs.core.create_element.call(null,mainElement,"",cljs.core.first.call(null,cell),game_of_life_cljs.core.dead_class);

start_button.onclick = game_of_life_cljs.core.run;


var G__8899 = seq__8895;
var G__8900 = chunk__8896;
var G__8901 = count__8897;
var G__8902 = (i__8898 + (1));
seq__8895 = G__8899;
chunk__8896 = G__8900;
count__8897 = G__8901;
i__8898 = G__8902;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__8895);
if(temp__5457__auto__){
var seq__8895__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__8895__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__8895__$1);
var G__8903 = cljs.core.chunk_rest.call(null,seq__8895__$1);
var G__8904 = c__4550__auto__;
var G__8905 = cljs.core.count.call(null,c__4550__auto__);
var G__8906 = (0);
seq__8895 = G__8903;
chunk__8896 = G__8904;
count__8897 = G__8905;
i__8898 = G__8906;
continue;
} else {
var cell = cljs.core.first.call(null,seq__8895__$1);
game_of_life_cljs.core.create_element.call(null,mainElement,"",cljs.core.first.call(null,cell),game_of_life_cljs.core.dead_class);

start_button.onclick = game_of_life_cljs.core.run;


var G__8907 = cljs.core.next.call(null,seq__8895__$1);
var G__8908 = null;
var G__8909 = (0);
var G__8910 = (0);
seq__8895 = G__8907;
chunk__8896 = G__8908;
count__8897 = G__8909;
i__8898 = G__8910;
continue;
}
} else {
return null;
}
}
break;
}
})();
}
game_of_life_cljs.core.on_reload = (function game_of_life_cljs$core$on_reload(){
return null;
});

//# sourceMappingURL=core.js.map
