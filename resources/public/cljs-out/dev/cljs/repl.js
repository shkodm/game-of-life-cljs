// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__15206){
var map__15207 = p__15206;
var map__15207__$1 = (((((!((map__15207 == null))))?(((((map__15207.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15207.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15207):map__15207);
var m = map__15207__$1;
var n = cljs.core.get.call(null,map__15207__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__15207__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4131__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return [(function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15209_15241 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15210_15242 = null;
var count__15211_15243 = (0);
var i__15212_15244 = (0);
while(true){
if((i__15212_15244 < count__15211_15243)){
var f_15245 = cljs.core._nth.call(null,chunk__15210_15242,i__15212_15244);
cljs.core.println.call(null,"  ",f_15245);


var G__15246 = seq__15209_15241;
var G__15247 = chunk__15210_15242;
var G__15248 = count__15211_15243;
var G__15249 = (i__15212_15244 + (1));
seq__15209_15241 = G__15246;
chunk__15210_15242 = G__15247;
count__15211_15243 = G__15248;
i__15212_15244 = G__15249;
continue;
} else {
var temp__5457__auto___15250 = cljs.core.seq.call(null,seq__15209_15241);
if(temp__5457__auto___15250){
var seq__15209_15251__$1 = temp__5457__auto___15250;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15209_15251__$1)){
var c__4550__auto___15252 = cljs.core.chunk_first.call(null,seq__15209_15251__$1);
var G__15253 = cljs.core.chunk_rest.call(null,seq__15209_15251__$1);
var G__15254 = c__4550__auto___15252;
var G__15255 = cljs.core.count.call(null,c__4550__auto___15252);
var G__15256 = (0);
seq__15209_15241 = G__15253;
chunk__15210_15242 = G__15254;
count__15211_15243 = G__15255;
i__15212_15244 = G__15256;
continue;
} else {
var f_15257 = cljs.core.first.call(null,seq__15209_15251__$1);
cljs.core.println.call(null,"  ",f_15257);


var G__15258 = cljs.core.next.call(null,seq__15209_15251__$1);
var G__15259 = null;
var G__15260 = (0);
var G__15261 = (0);
seq__15209_15241 = G__15258;
chunk__15210_15242 = G__15259;
count__15211_15243 = G__15260;
i__15212_15244 = G__15261;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_15262 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_15262);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_15262)))?cljs.core.second.call(null,arglists_15262):arglists_15262));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__15213_15263 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__15214_15264 = null;
var count__15215_15265 = (0);
var i__15216_15266 = (0);
while(true){
if((i__15216_15266 < count__15215_15265)){
var vec__15227_15267 = cljs.core._nth.call(null,chunk__15214_15264,i__15216_15266);
var name_15268 = cljs.core.nth.call(null,vec__15227_15267,(0),null);
var map__15230_15269 = cljs.core.nth.call(null,vec__15227_15267,(1),null);
var map__15230_15270__$1 = (((((!((map__15230_15269 == null))))?(((((map__15230_15269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15230_15269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15230_15269):map__15230_15269);
var doc_15271 = cljs.core.get.call(null,map__15230_15270__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15272 = cljs.core.get.call(null,map__15230_15270__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15268);

cljs.core.println.call(null," ",arglists_15272);

if(cljs.core.truth_(doc_15271)){
cljs.core.println.call(null," ",doc_15271);
} else {
}


var G__15273 = seq__15213_15263;
var G__15274 = chunk__15214_15264;
var G__15275 = count__15215_15265;
var G__15276 = (i__15216_15266 + (1));
seq__15213_15263 = G__15273;
chunk__15214_15264 = G__15274;
count__15215_15265 = G__15275;
i__15216_15266 = G__15276;
continue;
} else {
var temp__5457__auto___15277 = cljs.core.seq.call(null,seq__15213_15263);
if(temp__5457__auto___15277){
var seq__15213_15278__$1 = temp__5457__auto___15277;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15213_15278__$1)){
var c__4550__auto___15279 = cljs.core.chunk_first.call(null,seq__15213_15278__$1);
var G__15280 = cljs.core.chunk_rest.call(null,seq__15213_15278__$1);
var G__15281 = c__4550__auto___15279;
var G__15282 = cljs.core.count.call(null,c__4550__auto___15279);
var G__15283 = (0);
seq__15213_15263 = G__15280;
chunk__15214_15264 = G__15281;
count__15215_15265 = G__15282;
i__15216_15266 = G__15283;
continue;
} else {
var vec__15232_15284 = cljs.core.first.call(null,seq__15213_15278__$1);
var name_15285 = cljs.core.nth.call(null,vec__15232_15284,(0),null);
var map__15235_15286 = cljs.core.nth.call(null,vec__15232_15284,(1),null);
var map__15235_15287__$1 = (((((!((map__15235_15286 == null))))?(((((map__15235_15286.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15235_15286.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15235_15286):map__15235_15286);
var doc_15288 = cljs.core.get.call(null,map__15235_15287__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_15289 = cljs.core.get.call(null,map__15235_15287__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_15285);

cljs.core.println.call(null," ",arglists_15289);

if(cljs.core.truth_(doc_15288)){
cljs.core.println.call(null," ",doc_15288);
} else {
}


var G__15290 = cljs.core.next.call(null,seq__15213_15278__$1);
var G__15291 = null;
var G__15292 = (0);
var G__15293 = (0);
seq__15213_15263 = G__15290;
chunk__15214_15264 = G__15291;
count__15215_15265 = G__15292;
i__15216_15266 = G__15293;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__15237 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__15238 = null;
var count__15239 = (0);
var i__15240 = (0);
while(true){
if((i__15240 < count__15239)){
var role = cljs.core._nth.call(null,chunk__15238,i__15240);
var temp__5457__auto___15294__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___15294__$1)){
var spec_15295 = temp__5457__auto___15294__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15295));
} else {
}


var G__15296 = seq__15237;
var G__15297 = chunk__15238;
var G__15298 = count__15239;
var G__15299 = (i__15240 + (1));
seq__15237 = G__15296;
chunk__15238 = G__15297;
count__15239 = G__15298;
i__15240 = G__15299;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__15237);
if(temp__5457__auto____$1){
var seq__15237__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__15237__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__15237__$1);
var G__15300 = cljs.core.chunk_rest.call(null,seq__15237__$1);
var G__15301 = c__4550__auto__;
var G__15302 = cljs.core.count.call(null,c__4550__auto__);
var G__15303 = (0);
seq__15237 = G__15300;
chunk__15238 = G__15301;
count__15239 = G__15302;
i__15240 = G__15303;
continue;
} else {
var role = cljs.core.first.call(null,seq__15237__$1);
var temp__5457__auto___15304__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___15304__$2)){
var spec_15305 = temp__5457__auto___15304__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_15305));
} else {
}


var G__15306 = cljs.core.next.call(null,seq__15237__$1);
var G__15307 = null;
var G__15308 = (0);
var G__15309 = (0);
seq__15237 = G__15306;
chunk__15238 = G__15307;
count__15239 = G__15308;
i__15240 = G__15309;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof EvalError))?new cljs.core.Symbol("js","EvalError","js/EvalError",1793498501,null):(((t instanceof RangeError))?new cljs.core.Symbol("js","RangeError","js/RangeError",1703848089,null):(((t instanceof ReferenceError))?new cljs.core.Symbol("js","ReferenceError","js/ReferenceError",-198403224,null):(((t instanceof SyntaxError))?new cljs.core.Symbol("js","SyntaxError","js/SyntaxError",-1527651665,null):(((t instanceof URIError))?new cljs.core.Symbol("js","URIError","js/URIError",505061350,null):(((t instanceof Error))?new cljs.core.Symbol("js","Error","js/Error",-1692659266,null):null
)))))))], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5457__auto__)){
var ed = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__15310 = cljs.core.conj.call(null,via,t);
var G__15311 = cljs.core.ex_cause.call(null,t);
via = G__15310;
t = G__15311;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5457__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var root_msg = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5457__auto__)){
var data = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5457__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5457__auto__)){
var phase = temp__5457__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__15314 = datafied_throwable;
var map__15314__$1 = (((((!((map__15314 == null))))?(((((map__15314.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15314.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15314):map__15314);
var via = cljs.core.get.call(null,map__15314__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__15314__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__15314__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__15315 = cljs.core.last.call(null,via);
var map__15315__$1 = (((((!((map__15315 == null))))?(((((map__15315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15315):map__15315);
var type = cljs.core.get.call(null,map__15315__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__15315__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__15315__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__15316 = data;
var map__15316__$1 = (((((!((map__15316 == null))))?(((((map__15316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15316.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15316):map__15316);
var problems = cljs.core.get.call(null,map__15316__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__15316__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__15316__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__15317 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__15317__$1 = (((((!((map__15317 == null))))?(((((map__15317.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15317.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15317):map__15317);
var top_data = map__15317__$1;
var source = cljs.core.get.call(null,map__15317__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__15322 = phase;
var G__15322__$1 = (((G__15322 instanceof cljs.core.Keyword))?G__15322.fqn:null);
switch (G__15322__$1) {
case "read-source":
var map__15323 = data;
var map__15323__$1 = (((((!((map__15323 == null))))?(((((map__15323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15323):map__15323);
var line = cljs.core.get.call(null,map__15323__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__15323__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__15325 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__15325__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__15325,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15325);
var G__15325__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__15325__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15325__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__15325__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15325__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__15326 = top_data;
var G__15326__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__15326,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__15326);
var G__15326__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__15326__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__15326__$1);
var G__15326__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__15326__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15326__$2);
var G__15326__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__15326__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15326__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__15326__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15326__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__15327 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__15327,(0),null);
var method = cljs.core.nth.call(null,vec__15327,(1),null);
var file = cljs.core.nth.call(null,vec__15327,(2),null);
var line = cljs.core.nth.call(null,vec__15327,(3),null);
var G__15330 = top_data;
var G__15330__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__15330,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__15330);
var G__15330__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__15330__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__15330__$1);
var G__15330__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__15330__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__15330__$2);
var G__15330__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__15330__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__15330__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__15330__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__15330__$4;
}

break;
case "execution":
var vec__15331 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__15331,(0),null);
var method = cljs.core.nth.call(null,vec__15331,(1),null);
var file = cljs.core.nth.call(null,vec__15331,(2),null);
var line = cljs.core.nth.call(null,vec__15331,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__15331,source__$1,method,file,line,G__15322,G__15322__$1,map__15314,map__15314__$1,via,trace,phase,map__15315,map__15315__$1,type,message,data,map__15316,map__15316__$1,problems,fn,caller,map__15317,map__15317__$1,top_data,source){
return (function (p1__15313_SHARP_){
var or__4131__auto__ = (p1__15313_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__15313_SHARP_);
}
});})(vec__15331,source__$1,method,file,line,G__15322,G__15322__$1,map__15314,map__15314__$1,via,trace,phase,map__15315,map__15315__$1,type,message,data,map__15316,map__15316__$1,problems,fn,caller,map__15317,map__15317__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__15334 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__15334__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__15334,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__15334);
var G__15334__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__15334__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__15334__$1);
var G__15334__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
}
})())?cljs.core.assoc.call(null,G__15334__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__15334__$2);
var G__15334__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__15334__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__15334__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__15334__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__15334__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15322__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__15338){
var map__15339 = p__15338;
var map__15339__$1 = (((((!((map__15339 == null))))?(((((map__15339.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__15339.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__15339):map__15339);
var triage_data = map__15339__$1;
var phase = cljs.core.get.call(null,map__15339__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__15339__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__15339__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__15339__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__15339__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__15339__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__15339__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__15339__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = source;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4131__auto__ = line;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4131__auto__ = class$;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__15341 = phase;
var G__15341__$1 = (((G__15341 instanceof cljs.core.Keyword))?G__15341.fqn:null);
switch (G__15341__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15342_15351 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15343_15352 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15344_15353 = true;
var _STAR_print_fn_STAR__temp_val__15345_15354 = ((function (_STAR_print_newline_STAR__orig_val__15342_15351,_STAR_print_fn_STAR__orig_val__15343_15352,_STAR_print_newline_STAR__temp_val__15344_15353,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15342_15351,_STAR_print_fn_STAR__orig_val__15343_15352,_STAR_print_newline_STAR__temp_val__15344_15353,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15344_15353;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15345_15354;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__15342_15351,_STAR_print_fn_STAR__orig_val__15343_15352,_STAR_print_newline_STAR__temp_val__15344_15353,_STAR_print_fn_STAR__temp_val__15345_15354,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__15342_15351,_STAR_print_fn_STAR__orig_val__15343_15352,_STAR_print_newline_STAR__temp_val__15344_15353,_STAR_print_fn_STAR__temp_val__15345_15354,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__15336_SHARP_){
return cljs.core.dissoc.call(null,p1__15336_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__15342_15351,_STAR_print_fn_STAR__orig_val__15343_15352,_STAR_print_newline_STAR__temp_val__15344_15353,_STAR_print_fn_STAR__temp_val__15345_15354,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__15342_15351,_STAR_print_fn_STAR__orig_val__15343_15352,_STAR_print_newline_STAR__temp_val__15344_15353,_STAR_print_fn_STAR__temp_val__15345_15354,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15343_15352;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15342_15351;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__15346_15355 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__15347_15356 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__15348_15357 = true;
var _STAR_print_fn_STAR__temp_val__15349_15358 = ((function (_STAR_print_newline_STAR__orig_val__15346_15355,_STAR_print_fn_STAR__orig_val__15347_15356,_STAR_print_newline_STAR__temp_val__15348_15357,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__15346_15355,_STAR_print_fn_STAR__orig_val__15347_15356,_STAR_print_newline_STAR__temp_val__15348_15357,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__15348_15357;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__15349_15358;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__15346_15355,_STAR_print_fn_STAR__orig_val__15347_15356,_STAR_print_newline_STAR__temp_val__15348_15357,_STAR_print_fn_STAR__temp_val__15349_15358,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__15346_15355,_STAR_print_fn_STAR__orig_val__15347_15356,_STAR_print_newline_STAR__temp_val__15348_15357,_STAR_print_fn_STAR__temp_val__15349_15358,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__15337_SHARP_){
return cljs.core.dissoc.call(null,p1__15337_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__15346_15355,_STAR_print_fn_STAR__orig_val__15347_15356,_STAR_print_newline_STAR__temp_val__15348_15357,_STAR_print_fn_STAR__temp_val__15349_15358,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__15346_15355,_STAR_print_fn_STAR__orig_val__15347_15356,_STAR_print_newline_STAR__temp_val__15348_15357,_STAR_print_fn_STAR__temp_val__15349_15358,sb__4661__auto__,G__15341,G__15341__$1,loc,class_name,simple_class,cause_type,format,map__15339,map__15339__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__15347_15356;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__15346_15355;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__15341__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
