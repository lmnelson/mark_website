/*
Sticky Elements Shortcut for jQuery Waypoints - v2.0.2
Copyright (c) 2011-2013 Caleb Troughton
Dual licensed under the MIT license and GPL license.
https://github.com/imakewebthings/jquery-waypoints/blob/master/licenses.txt
*/
(function(){!function(t,n){return"function"==typeof define&&define.amd?define(["jquery","waypoints"],n):n(t.jQuery)}(this,function(t){var n,e;return n={wrapper:'<div class="sticky-wrapper" />',stuckClass:"stuck"},e=function(n,e){return n.wrap(e.wrapper),n.each(function(){var n;return n=t(this),n.parent().height(n.outerHeight()),!0}),n.parent()},t.waypoints("extendFn","sticky",function(r){var i,a;return r=t.extend({},t.fn.waypoint.defaults,n,r),i=e(this,r),a=r.handler,r.handler=function(n){var e,i;return e=t(this).children(":first"),i="down"===n||"right"===n,e.toggleClass(r.stuckClass,i),null!=a?a.call(this,n):void 0},i.waypoint(r),this})})}).call(this);