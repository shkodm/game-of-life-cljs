// Compiled by ClojureScript 1.10.520 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__17480){
var map__17481 = p__17480;
var map__17481__$1 = (((((!((map__17481 == null))))?(((((map__17481.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17481.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17481):map__17481);
var m = map__17481__$1;
var n = cljs.core.get.call(null,map__17481__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__17481__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__17483_17515 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17484_17516 = null;
var count__17485_17517 = (0);
var i__17486_17518 = (0);
while(true){
if((i__17486_17518 < count__17485_17517)){
var f_17519 = cljs.core._nth.call(null,chunk__17484_17516,i__17486_17518);
cljs.core.println.call(null,"  ",f_17519);


var G__17520 = seq__17483_17515;
var G__17521 = chunk__17484_17516;
var G__17522 = count__17485_17517;
var G__17523 = (i__17486_17518 + (1));
seq__17483_17515 = G__17520;
chunk__17484_17516 = G__17521;
count__17485_17517 = G__17522;
i__17486_17518 = G__17523;
continue;
} else {
var temp__5457__auto___17524 = cljs.core.seq.call(null,seq__17483_17515);
if(temp__5457__auto___17524){
var seq__17483_17525__$1 = temp__5457__auto___17524;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17483_17525__$1)){
var c__4550__auto___17526 = cljs.core.chunk_first.call(null,seq__17483_17525__$1);
var G__17527 = cljs.core.chunk_rest.call(null,seq__17483_17525__$1);
var G__17528 = c__4550__auto___17526;
var G__17529 = cljs.core.count.call(null,c__4550__auto___17526);
var G__17530 = (0);
seq__17483_17515 = G__17527;
chunk__17484_17516 = G__17528;
count__17485_17517 = G__17529;
i__17486_17518 = G__17530;
continue;
} else {
var f_17531 = cljs.core.first.call(null,seq__17483_17525__$1);
cljs.core.println.call(null,"  ",f_17531);


var G__17532 = cljs.core.next.call(null,seq__17483_17525__$1);
var G__17533 = null;
var G__17534 = (0);
var G__17535 = (0);
seq__17483_17515 = G__17532;
chunk__17484_17516 = G__17533;
count__17485_17517 = G__17534;
i__17486_17518 = G__17535;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_17536 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4131__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_17536);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_17536)))?cljs.core.second.call(null,arglists_17536):arglists_17536));
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
var seq__17487_17537 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__17488_17538 = null;
var count__17489_17539 = (0);
var i__17490_17540 = (0);
while(true){
if((i__17490_17540 < count__17489_17539)){
var vec__17501_17541 = cljs.core._nth.call(null,chunk__17488_17538,i__17490_17540);
var name_17542 = cljs.core.nth.call(null,vec__17501_17541,(0),null);
var map__17504_17543 = cljs.core.nth.call(null,vec__17501_17541,(1),null);
var map__17504_17544__$1 = (((((!((map__17504_17543 == null))))?(((((map__17504_17543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17504_17543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17504_17543):map__17504_17543);
var doc_17545 = cljs.core.get.call(null,map__17504_17544__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17546 = cljs.core.get.call(null,map__17504_17544__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17542);

cljs.core.println.call(null," ",arglists_17546);

if(cljs.core.truth_(doc_17545)){
cljs.core.println.call(null," ",doc_17545);
} else {
}


var G__17547 = seq__17487_17537;
var G__17548 = chunk__17488_17538;
var G__17549 = count__17489_17539;
var G__17550 = (i__17490_17540 + (1));
seq__17487_17537 = G__17547;
chunk__17488_17538 = G__17548;
count__17489_17539 = G__17549;
i__17490_17540 = G__17550;
continue;
} else {
var temp__5457__auto___17551 = cljs.core.seq.call(null,seq__17487_17537);
if(temp__5457__auto___17551){
var seq__17487_17552__$1 = temp__5457__auto___17551;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17487_17552__$1)){
var c__4550__auto___17553 = cljs.core.chunk_first.call(null,seq__17487_17552__$1);
var G__17554 = cljs.core.chunk_rest.call(null,seq__17487_17552__$1);
var G__17555 = c__4550__auto___17553;
var G__17556 = cljs.core.count.call(null,c__4550__auto___17553);
var G__17557 = (0);
seq__17487_17537 = G__17554;
chunk__17488_17538 = G__17555;
count__17489_17539 = G__17556;
i__17490_17540 = G__17557;
continue;
} else {
var vec__17506_17558 = cljs.core.first.call(null,seq__17487_17552__$1);
var name_17559 = cljs.core.nth.call(null,vec__17506_17558,(0),null);
var map__17509_17560 = cljs.core.nth.call(null,vec__17506_17558,(1),null);
var map__17509_17561__$1 = (((((!((map__17509_17560 == null))))?(((((map__17509_17560.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17509_17560.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17509_17560):map__17509_17560);
var doc_17562 = cljs.core.get.call(null,map__17509_17561__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_17563 = cljs.core.get.call(null,map__17509_17561__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_17559);

cljs.core.println.call(null," ",arglists_17563);

if(cljs.core.truth_(doc_17562)){
cljs.core.println.call(null," ",doc_17562);
} else {
}


var G__17564 = cljs.core.next.call(null,seq__17487_17552__$1);
var G__17565 = null;
var G__17566 = (0);
var G__17567 = (0);
seq__17487_17537 = G__17564;
chunk__17488_17538 = G__17565;
count__17489_17539 = G__17566;
i__17490_17540 = G__17567;
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

var seq__17511 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__17512 = null;
var count__17513 = (0);
var i__17514 = (0);
while(true){
if((i__17514 < count__17513)){
var role = cljs.core._nth.call(null,chunk__17512,i__17514);
var temp__5457__auto___17568__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17568__$1)){
var spec_17569 = temp__5457__auto___17568__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17569));
} else {
}


var G__17570 = seq__17511;
var G__17571 = chunk__17512;
var G__17572 = count__17513;
var G__17573 = (i__17514 + (1));
seq__17511 = G__17570;
chunk__17512 = G__17571;
count__17513 = G__17572;
i__17514 = G__17573;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__17511);
if(temp__5457__auto____$1){
var seq__17511__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__17511__$1)){
var c__4550__auto__ = cljs.core.chunk_first.call(null,seq__17511__$1);
var G__17574 = cljs.core.chunk_rest.call(null,seq__17511__$1);
var G__17575 = c__4550__auto__;
var G__17576 = cljs.core.count.call(null,c__4550__auto__);
var G__17577 = (0);
seq__17511 = G__17574;
chunk__17512 = G__17575;
count__17513 = G__17576;
i__17514 = G__17577;
continue;
} else {
var role = cljs.core.first.call(null,seq__17511__$1);
var temp__5457__auto___17578__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___17578__$2)){
var spec_17579 = temp__5457__auto___17578__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_17579));
} else {
}


var G__17580 = cljs.core.next.call(null,seq__17511__$1);
var G__17581 = null;
var G__17582 = (0);
var G__17583 = (0);
seq__17511 = G__17580;
chunk__17512 = G__17581;
count__17513 = G__17582;
i__17514 = G__17583;
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
var G__17584 = cljs.core.conj.call(null,via,t);
var G__17585 = cljs.core.ex_cause.call(null,t);
via = G__17584;
t = G__17585;
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
var map__17588 = datafied_throwable;
var map__17588__$1 = (((((!((map__17588 == null))))?(((((map__17588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17588):map__17588);
var via = cljs.core.get.call(null,map__17588__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__17588__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__17588__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__17589 = cljs.core.last.call(null,via);
var map__17589__$1 = (((((!((map__17589 == null))))?(((((map__17589.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17589.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17589):map__17589);
var type = cljs.core.get.call(null,map__17589__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__17589__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__17589__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__17590 = data;
var map__17590__$1 = (((((!((map__17590 == null))))?(((((map__17590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17590):map__17590);
var problems = cljs.core.get.call(null,map__17590__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__17590__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__17590__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__17591 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__17591__$1 = (((((!((map__17591 == null))))?(((((map__17591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17591):map__17591);
var top_data = map__17591__$1;
var source = cljs.core.get.call(null,map__17591__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__17596 = phase;
var G__17596__$1 = (((G__17596 instanceof cljs.core.Keyword))?G__17596.fqn:null);
switch (G__17596__$1) {
case "read-source":
var map__17597 = data;
var map__17597__$1 = (((((!((map__17597 == null))))?(((((map__17597.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17597.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17597):map__17597);
var line = cljs.core.get.call(null,map__17597__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17597__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__17599 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__17599__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17599,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17599);
var G__17599__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17599__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17599__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17599__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17599__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__17600 = top_data;
var G__17600__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__17600,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__17600);
var G__17600__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__17600__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__17600__$1);
var G__17600__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17600__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17600__$2);
var G__17600__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17600__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17600__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17600__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17600__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__17601 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17601,(0),null);
var method = cljs.core.nth.call(null,vec__17601,(1),null);
var file = cljs.core.nth.call(null,vec__17601,(2),null);
var line = cljs.core.nth.call(null,vec__17601,(3),null);
var G__17604 = top_data;
var G__17604__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__17604,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__17604);
var G__17604__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__17604__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__17604__$1);
var G__17604__$3 = (cljs.core.truth_((function (){var and__4120__auto__ = source__$1;
if(cljs.core.truth_(and__4120__auto__)){
return method;
} else {
return and__4120__auto__;
}
})())?cljs.core.assoc.call(null,G__17604__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__17604__$2);
var G__17604__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__17604__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__17604__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__17604__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__17604__$4;
}

break;
case "execution":
var vec__17605 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__17605,(0),null);
var method = cljs.core.nth.call(null,vec__17605,(1),null);
var file = cljs.core.nth.call(null,vec__17605,(2),null);
var line = cljs.core.nth.call(null,vec__17605,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,((function (vec__17605,source__$1,method,file,line,G__17596,G__17596__$1,map__17588,map__17588__$1,via,trace,phase,map__17589,map__17589__$1,type,message,data,map__17590,map__17590__$1,problems,fn,caller,map__17591,map__17591__$1,top_data,source){
return (function (p1__17587_SHARP_){
var or__4131__auto__ = (p1__17587_SHARP_ == null);
if(or__4131__auto__){
return or__4131__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__17587_SHARP_);
}
});})(vec__17605,source__$1,method,file,line,G__17596,G__17596__$1,map__17588,map__17588__$1,via,trace,phase,map__17589,map__17589__$1,type,message,data,map__17590,map__17590__$1,problems,fn,caller,map__17591,map__17591__$1,top_data,source))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4131__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return line;
}
})();
var G__17608 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__17608__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__17608,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__17608);
var G__17608__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__17608__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__17608__$1);
var G__17608__$3 = (cljs.core.truth_((function (){var or__4131__auto__ = fn;
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
})())?cljs.core.assoc.call(null,G__17608__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4131__auto__ = fn;
if(cljs.core.truth_(or__4131__auto__)){
return or__4131__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__17608__$2);
var G__17608__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__17608__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__17608__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__17608__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__17608__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17596__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__17612){
var map__17613 = p__17612;
var map__17613__$1 = (((((!((map__17613 == null))))?(((((map__17613.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__17613.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__17613):map__17613);
var triage_data = map__17613__$1;
var phase = cljs.core.get.call(null,map__17613__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__17613__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__17613__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__17613__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__17613__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__17613__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__17613__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__17613__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__17615 = phase;
var G__17615__$1 = (((G__17615 instanceof cljs.core.Keyword))?G__17615.fqn:null);
switch (G__17615__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4661__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__17616_17625 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17617_17626 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17618_17627 = true;
var _STAR_print_fn_STAR__temp_val__17619_17628 = ((function (_STAR_print_newline_STAR__orig_val__17616_17625,_STAR_print_fn_STAR__orig_val__17617_17626,_STAR_print_newline_STAR__temp_val__17618_17627,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__17616_17625,_STAR_print_fn_STAR__orig_val__17617_17626,_STAR_print_newline_STAR__temp_val__17618_17627,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17618_17627;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17619_17628;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__17616_17625,_STAR_print_fn_STAR__orig_val__17617_17626,_STAR_print_newline_STAR__temp_val__17618_17627,_STAR_print_fn_STAR__temp_val__17619_17628,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__17616_17625,_STAR_print_fn_STAR__orig_val__17617_17626,_STAR_print_newline_STAR__temp_val__17618_17627,_STAR_print_fn_STAR__temp_val__17619_17628,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__17610_SHARP_){
return cljs.core.dissoc.call(null,p1__17610_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__17616_17625,_STAR_print_fn_STAR__orig_val__17617_17626,_STAR_print_newline_STAR__temp_val__17618_17627,_STAR_print_fn_STAR__temp_val__17619_17628,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__17616_17625,_STAR_print_fn_STAR__orig_val__17617_17626,_STAR_print_newline_STAR__temp_val__17618_17627,_STAR_print_fn_STAR__temp_val__17619_17628,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17617_17626;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17616_17625;
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
var _STAR_print_newline_STAR__orig_val__17620_17629 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__17621_17630 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__17622_17631 = true;
var _STAR_print_fn_STAR__temp_val__17623_17632 = ((function (_STAR_print_newline_STAR__orig_val__17620_17629,_STAR_print_fn_STAR__orig_val__17621_17630,_STAR_print_newline_STAR__temp_val__17622_17631,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (x__4662__auto__){
return sb__4661__auto__.append(x__4662__auto__);
});})(_STAR_print_newline_STAR__orig_val__17620_17629,_STAR_print_fn_STAR__orig_val__17621_17630,_STAR_print_newline_STAR__temp_val__17622_17631,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
;
cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__17622_17631;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__17623_17632;

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),((function (_STAR_print_newline_STAR__orig_val__17620_17629,_STAR_print_fn_STAR__orig_val__17621_17630,_STAR_print_newline_STAR__temp_val__17622_17631,_STAR_print_fn_STAR__temp_val__17623_17632,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (probs){
return cljs.core.map.call(null,((function (_STAR_print_newline_STAR__orig_val__17620_17629,_STAR_print_fn_STAR__orig_val__17621_17630,_STAR_print_newline_STAR__temp_val__17622_17631,_STAR_print_fn_STAR__temp_val__17623_17632,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec){
return (function (p1__17611_SHARP_){
return cljs.core.dissoc.call(null,p1__17611_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
});})(_STAR_print_newline_STAR__orig_val__17620_17629,_STAR_print_fn_STAR__orig_val__17621_17630,_STAR_print_newline_STAR__temp_val__17622_17631,_STAR_print_fn_STAR__temp_val__17623_17632,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
,probs);
});})(_STAR_print_newline_STAR__orig_val__17620_17629,_STAR_print_fn_STAR__orig_val__17621_17630,_STAR_print_newline_STAR__temp_val__17622_17631,_STAR_print_fn_STAR__temp_val__17623_17632,sb__4661__auto__,G__17615,G__17615__$1,loc,class_name,simple_class,cause_type,format,map__17613,map__17613__$1,triage_data,phase,source,line,column,symbol,class$,cause,spec))
)
);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__17621_17630;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__17620_17629;
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4661__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__17615__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
