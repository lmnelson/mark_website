/**
 * Copyright (c) 2007-2014 Ariel Flesler - aflesler<a>gmail<d>com | http://flesler.blogspot.com
 * Licensed under MIT
 * @author Ariel Flesler
 * @version 1.4.12
 */
!function(t){"function"==typeof define&&define.amd?define(["jquery"],t):t(jQuery)}(function(t){function e(e){return t.isFunction(e)||"object"==typeof e?e:{top:e,left:e}}var n=t.scrollTo=function(e,n,o){return t(window).scrollTo(e,n,o)};return n.defaults={axis:"xy",duration:parseFloat(t.fn.jquery)>=1.3?0:1,limit:!0},n.window=function(){return t(window)._scrollable()},t.fn._scrollable=function(){return this.map(function(){var e=this,n=!e.nodeName||-1!=t.inArray(e.nodeName.toLowerCase(),["iframe","#document","html","body"]);if(!n)return e;var o=(e.contentWindow||e).document||e.ownerDocument||e;return/webkit/i.test(navigator.userAgent)||"BackCompat"==o.compatMode?o.body:o.documentElement})},t.fn.scrollTo=function(o,i,r){return"object"==typeof i&&(r=i,i=0),"function"==typeof r&&(r={onAfter:r}),"max"==o&&(o=9e9),r=t.extend({},n.defaults,r),i=i||r.duration,r.queue=r.queue&&r.axis.length>1,r.queue&&(i/=2),r.offset=e(r.offset),r.over=e(r.over),this._scrollable().each(function(){function a(t){f.animate(l,i,r.easing,t&&function(){t.call(this,u,r)})}if(null!=o){var s,c=this,f=t(c),u=o,l={},d=f.is("html,body");switch(typeof u){case"number":case"string":if(/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(u)){u=e(u);break}if(u=d?t(u):t(u,this),!u.length)return;case"object":(u.is||u.style)&&(s=(u=t(u)).offset())}var m=t.isFunction(r.offset)&&r.offset(c,u)||r.offset;t.each(r.axis.split(""),function(t,e){var o="x"==e?"Left":"Top",i=o.toLowerCase(),h="scroll"+o,w=c[h],v=n.max(c,e);if(s)l[h]=s[i]+(d?0:w-f.offset()[i]),r.margin&&(l[h]-=parseInt(u.css("margin"+o))||0,l[h]-=parseInt(u.css("border"+o+"Width"))||0),l[h]+=m[i]||0,r.over[i]&&(l[h]+=u["x"==e?"width":"height"]()*r.over[i]);else{var p=u[i];l[h]=p.slice&&"%"==p.slice(-1)?parseFloat(p)/100*v:p}r.limit&&/^\d+$/.test(l[h])&&(l[h]=l[h]<=0?0:Math.min(l[h],v)),!t&&r.queue&&(w!=l[h]&&a(r.onAfterFirst),delete l[h])}),a(r.onAfter)}}).end()},n.max=function(e,n){var o="x"==n?"Width":"Height",i="scroll"+o;if(!t(e).is("html,body"))return e[i]-t(e)[o.toLowerCase()]();var r="client"+o,a=e.ownerDocument.documentElement,s=e.ownerDocument.body;return Math.max(a[i],s[i])-Math.min(a[r],s[r])},n}),Retina=function(){return{init:function(){var t=window.devicePixelRatio?window.devicePixelRatio:1;t>1&&$("img").each(function(t,e){if(e=$(e),e.attr("data-src2x")){var n=e.attr("src").split(".").join(e.attr("data-src2x")+".");e.attr("src",n)}})}}}(),Retina.init();