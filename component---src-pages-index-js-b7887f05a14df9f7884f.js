webpackJsonp([35783957827783],{113:function(t,e,n){"use strict";function o(t){return t}function r(t,e,n){function r(t,e){var n=N.hasOwnProperty(e)?N[e]:null;v.hasOwnProperty(e)&&u("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&u("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function a(t,n){if(n){u("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),u(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var o=t.prototype,a=o.__reactAutoBindPairs;n.hasOwnProperty(c)&&_.mixins(t,n.mixins);for(var i in n)if(n.hasOwnProperty(i)&&i!==c){var s=n[i],l=o.hasOwnProperty(i);if(r(l,i),_.hasOwnProperty(i))_[i](t,s);else{var p=N.hasOwnProperty(i),d="function"==typeof s,E=d&&!p&&!l&&n.autobind!==!1;if(E)a.push(i,s),o[i]=s;else if(l){var h=N[i];u(p&&("DEFINE_MANY_MERGED"===h||"DEFINE_MANY"===h),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",h,i),"DEFINE_MANY_MERGED"===h?o[i]=f(o[i],s):"DEFINE_MANY"===h&&(o[i]=m(o[i],s))}else o[i]=s}}}else;}function l(t,e){if(e)for(var n in e){var o=e[n];if(e.hasOwnProperty(n)){var r=n in _;u(!r,'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n);var a=n in t;if(a){var i=g.hasOwnProperty(n)?g[n]:null;return u("DEFINE_MANY_MERGED"===i,"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=f(t[n],o))}t[n]=o}}}function p(t,e){u(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects.");for(var n in e)e.hasOwnProperty(n)&&(u(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function f(t,e){return function(){var n=t.apply(this,arguments),o=e.apply(this,arguments);if(null==n)return o;if(null==o)return n;var r={};return p(r,n),p(r,o),r}}function m(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function d(t,e){var n=e.bind(t);return n}function E(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var o=e[n],r=e[n+1];t[o]=d(t,r)}}function h(t){var e=o(function(t,o,r){this.__reactAutoBindPairs.length&&E(this),this.props=t,this.context=o,this.refs=s,this.updater=r||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;u("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=a});e.prototype=new I,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],y.forEach(a.bind(null,e)),a(e,D),a(e,t),a(e,b),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),u(e.prototype.render,"createClass(...): Class specification must implement a `render` method.");for(var r in N)e.prototype[r]||(e.prototype[r]=null);return e}var y=[],N={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},g={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},_={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)a(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=i({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=i({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=f(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=i({},t.propTypes,e)},statics:function(t,e){l(t,e)},autobind:function(){}},D={componentDidMount:function(){this.__isMounted=!0}},b={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},I=function(){};return i(I.prototype,t.prototype,v),h}var a,i=n(2),s=n(39),u=n(1),c="mixins";a={},t.exports=r},2:function(t,e){"use strict";function n(t){if(null===t||void 0===t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function o(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var o=Object.getOwnPropertyNames(e).map(function(t){return e[t]});if("0123456789"!==o.join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach(function(t){r[t]=t}),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}var r=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable;t.exports=o()?Object.assign:function(t,e){for(var o,s,u=n(t),c=1;c<arguments.length;c++){o=Object(arguments[c]);for(var l in o)a.call(o,l)&&(u[l]=o[l]);if(r){s=r(o);for(var p=0;p<s.length;p++)i.call(o,s[p])&&(u[s[p]]=o[s[p]])}}return u}},614:function(t,e,n){t.exports=n.p+"static/holub.2c095a12.jpg"},258:function(t,e,n){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}e.__esModule=!0;var r=n(5),a=o(r),i=n(353),s=o(i),u=n(614),c=o(u),l=function(){return a.default.createElement("div",{className:s.default.home},a.default.createElement("h1",null,"Olena Holub"),a.default.createElement("div",{className:s.default.photo},a.default.createElement("img",{src:c.default,alt:"Olena Holub"})),a.default.createElement("div",{className:s.default.about},a.default.createElement("p",null,"Hi! My name is Olena Holub! I have an experience in developing web apps using Python framework Django and Django Rest Framework for building REST architecture. Also I have experience in developing front-end, using such technologies as HTML, CSS, SASS, JavaScript, React and Bootstrap. I've used PostgreSQL, SQLite and MySQL. I'm able to work in team, using Agile/Scrum methodologies for work organization. I use Linux as main OS and Git as a VCS.")))};e.default=l,t.exports=e.default},353:function(t,e){t.exports={home:"src-styles----home-module---home---3dSiC",photo:"src-styles----home-module---photo---39i0t",about:"src-styles----home-module---about---1xelI"}}});
//# sourceMappingURL=component---src-pages-index-js-b7887f05a14df9f7884f.js.map