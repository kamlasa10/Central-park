!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(k,e){"use strict";function v(e){return null!=e&&e===e.window}var t=[],S=k.document,i=Object.getPrototypeOf,a=t.slice,g=t.concat,l=t.push,o=t.indexOf,n={},r=n.toString,y=n.hasOwnProperty,s=y.toString,c=s.call(Object),m={},w=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType},d={type:!0,src:!0,noModule:!0};function b(e,t,n){var i,o=(t=t||S).createElement("script");if(o.text=e,n)for(i in d)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[r.call(e)]||"object":typeof e}var C=function(e,t){return new C.fn.init(e,t)},u=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;function p(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!w(e)&&!v(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}C.fn=C.prototype={jquery:"3.3.1",constructor:C,length:0,toArray:function(){return a.call(this)},get:function(e){return null==e?a.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=C.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return C.each(this,e)},map:function(n){return this.pushStack(C.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(a.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:l,sort:t.sort,splice:t.splice},C.extend=C.fn.extend=function(){var e,t,n,i,o,r,s=arguments[0]||{},a=1,l=arguments.length,c=!1;for("boolean"==typeof s&&(c=s,s=arguments[a]||{},a++),"object"==typeof s||w(s)||(s={}),a===l&&(s=this,a--);a<l;a++)if(null!=(e=arguments[a]))for(t in e)n=s[t],s!==(i=e[t])&&(c&&i&&(C.isPlainObject(i)||(o=Array.isArray(i)))?(r=o?(o=!1,n&&Array.isArray(n)?n:[]):n&&C.isPlainObject(n)?n:{},s[t]=C.extend(c,r,i)):void 0!==i&&(s[t]=i));return s},C.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==r.call(e)||(t=i(e))&&("function"!=typeof(n=y.call(t,"constructor")&&t.constructor)||s.call(n)!==c))},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){b(e)},each:function(e,t){var n,i=0;if(p(e))for(n=e.length;i<n&&!1!==t.call(e[i],i,e[i]);i++);else for(i in e)if(!1===t.call(e[i],i,e[i]))break;return e},trim:function(e){return null==e?"":(e+"").replace(u,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?C.merge(n,"string"==typeof e?[e]:e):l.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:o.call(t,e,n)},merge:function(e,t){for(var n=+t.length,i=0,o=e.length;i<n;i++)e[o++]=t[i];return e.length=o,e},grep:function(e,t,n){for(var i=[],o=0,r=e.length,s=!n;o<r;o++)!t(e[o],o)!=s&&i.push(e[o]);return i},map:function(e,t,n){var i,o,r=0,s=[];if(p(e))for(i=e.length;r<i;r++)null!=(o=t(e[r],r,n))&&s.push(o);else for(r in e)null!=(o=t(e[r],r,n))&&s.push(o);return g.apply([],s)},guid:1,support:m}),"function"==typeof Symbol&&(C.fn[Symbol.iterator]=t[Symbol.iterator]),C.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var f=function(n){function u(e,t,n){var i="0x"+t-65536;return i!=i||n?t:i<0?String.fromCharCode(65536+i):String.fromCharCode(i>>10|55296,1023&i|56320)}function o(){T()}var e,f,b,r,s,h,p,v,x,l,c,T,k,a,S,g,d,y,m,C="sizzle"+ +new Date,w=n.document,$=0,i=0,A=se(),E=se(),D=se(),j=function(e,t){return e===t&&(c=!0),0},H={}.hasOwnProperty,t=[],N=t.pop,L=t.push,O=t.push,P=t.slice,q=function(e,t){for(var n=0,i=e.length;n<i;n++)if(e[n]===t)return n;return-1},M="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",I="[\\x20\\t\\r\\n\\f]",z="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",W="\\["+I+"*("+z+")(?:"+I+"*([*^$|!~]?=)"+I+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+z+"))|)"+I+"*\\]",R=":("+z+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",F=new RegExp(I+"+","g"),B=new RegExp("^"+I+"+|((?:^|[^\\\\])(?:\\\\.)*)"+I+"+$","g"),U=new RegExp("^"+I+"*,"+I+"*"),X=new RegExp("^"+I+"*([>+~]|"+I+")"+I+"*"),_=new RegExp("="+I+"*([^\\]'\"]*?)"+I+"*\\]","g"),Y=new RegExp(R),V=new RegExp("^"+z+"$"),G={ID:new RegExp("^#("+z+")"),CLASS:new RegExp("^\\.("+z+")"),TAG:new RegExp("^("+z+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+R),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+I+"*(even|odd|(([+-]|)(\\d*)n|)"+I+"*(?:([+-]|)"+I+"*(\\d+)|))"+I+"*\\)|)","i"),bool:new RegExp("^(?:"+M+")$","i"),needsContext:new RegExp("^"+I+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+I+"*((?:-\\d)?\\d*)"+I+"*\\)|)(?=[^-]|$)","i")},Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\([\\da-f]{1,6}"+I+"?|("+I+")|.)","ig"),ne=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"�":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=ge(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{O.apply(t=P.call(w.childNodes),w.childNodes),t[w.childNodes.length].nodeType}catch(n){O={apply:t.length?function(e,t){L.apply(e,P.call(t))}:function(e,t){for(var n=e.length,i=0;e[n++]=t[i++];);e.length=n-1}}}function re(e,t,n,i){var o,r,s,a,l,c,d,u=t&&t.ownerDocument,p=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==p&&9!==p&&11!==p)return n;if(!i&&((t?t.ownerDocument||t:w)!==k&&T(t),t=t||k,S)){if(11!==p&&(l=Z.exec(e)))if(o=l[1]){if(9===p){if(!(s=t.getElementById(o)))return n;if(s.id===o)return n.push(s),n}else if(u&&(s=u.getElementById(o))&&m(t,s)&&s.id===o)return n.push(s),n}else{if(l[2])return O.apply(n,t.getElementsByTagName(e)),n;if((o=l[3])&&f.getElementsByClassName&&t.getElementsByClassName)return O.apply(n,t.getElementsByClassName(o)),n}if(f.qsa&&!D[e+" "]&&(!g||!g.test(e))){if(1!==p)u=t,d=e;else if("object"!==t.nodeName.toLowerCase()){for((a=t.getAttribute("id"))?a=a.replace(ne,ie):t.setAttribute("id",a=C),r=(c=h(e)).length;r--;)c[r]="#"+a+" "+ve(c[r]);d=c.join(","),u=ee.test(e)&&fe(t.parentNode)||t}if(d)try{return O.apply(n,u.querySelectorAll(d)),n}catch(e){}finally{a===C&&t.removeAttribute("id")}}}return v(e.replace(B,"$1"),t,n,i)}function se(){var n=[];function i(e,t){return n.push(e+" ")>b.cacheLength&&delete i[n.shift()],i[e+" "]=t}return i}function ae(e){return e[C]=!0,e}function le(e){var t=k.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function ce(e,t){for(var n=e.split("|"),i=n.length;i--;)b.attrHandle[n[i]]=t}function de(e,t){var n=t&&e,i=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(i)return i;if(n)for(;n=n.nextSibling;)if(n===t)return-1;return e?1:-1}function ue(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&oe(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function pe(s){return ae(function(r){return r=+r,ae(function(e,t){for(var n,i=s([],e.length,r),o=i.length;o--;)e[n=i[o]]&&(e[n]=!(t[n]=e[n]))})})}function fe(e){return e&&void 0!==e.getElementsByTagName&&e}for(e in f=re.support={},s=re.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},T=re.setDocument=function(e){var t,n,i=e?e.ownerDocument||e:w;return i!==k&&9===i.nodeType&&i.documentElement&&(a=(k=i).documentElement,S=!s(k),w!==k&&(n=k.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",o,!1):n.attachEvent&&n.attachEvent("onunload",o)),f.attributes=le(function(e){return e.className="i",!e.getAttribute("className")}),f.getElementsByTagName=le(function(e){return e.appendChild(k.createComment("")),!e.getElementsByTagName("*").length}),f.getElementsByClassName=K.test(k.getElementsByClassName),f.getById=le(function(e){return a.appendChild(e).id=C,!k.getElementsByName||!k.getElementsByName(C).length}),f.getById?(b.filter.ID=function(e){var t=e.replace(te,u);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&S){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,u);return function(e){var t=void 0!==e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if(void 0!==t.getElementById&&S){var n,i,o,r=t.getElementById(e);if(r){if((n=r.getAttributeNode("id"))&&n.value===e)return[r];for(o=t.getElementsByName(e),i=0;r=o[i++];)if((n=r.getAttributeNode("id"))&&n.value===e)return[r]}return[]}}),b.find.TAG=f.getElementsByTagName?function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):f.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,i=[],o=0,r=t.getElementsByTagName(e);if("*"!==e)return r;for(;n=r[o++];)1===n.nodeType&&i.push(n);return i},b.find.CLASS=f.getElementsByClassName&&function(e,t){if(void 0!==t.getElementsByClassName&&S)return t.getElementsByClassName(e)},d=[],g=[],(f.qsa=K.test(k.querySelectorAll))&&(le(function(e){a.appendChild(e).innerHTML="<a id='"+C+"'></a><select id='"+C+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&g.push("[*^$]="+I+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||g.push("\\["+I+"*(?:value|"+M+")"),e.querySelectorAll("[id~="+C+"-]").length||g.push("~="),e.querySelectorAll(":checked").length||g.push(":checked"),e.querySelectorAll("a#"+C+"+*").length||g.push(".#.+[+~]")}),le(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=k.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&g.push("name"+I+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&g.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&g.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),g.push(",.*:")})),(f.matchesSelector=K.test(y=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&le(function(e){f.disconnectedMatch=y.call(e,"*"),y.call(e,"[s!='']:x"),d.push("!=",R)}),g=g.length&&new RegExp(g.join("|")),d=d.length&&new RegExp(d.join("|")),t=K.test(a.compareDocumentPosition),m=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,i=t&&t.parentNode;return e===i||!(!i||1!==i.nodeType||!(n.contains?n.contains(i):e.compareDocumentPosition&&16&e.compareDocumentPosition(i)))}:function(e,t){if(t)for(;t=t.parentNode;)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return c=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!f.sortDetached&&t.compareDocumentPosition(e)===n?e===k||e.ownerDocument===w&&m(w,e)?-1:t===k||t.ownerDocument===w&&m(w,t)?1:l?q(l,e)-q(l,t):0:4&n?-1:1)}:function(e,t){if(e===t)return c=!0,0;var n,i=0,o=e.parentNode,r=t.parentNode,s=[e],a=[t];if(!o||!r)return e===k?-1:t===k?1:o?-1:r?1:l?q(l,e)-q(l,t):0;if(o===r)return de(e,t);for(n=e;n=n.parentNode;)s.unshift(n);for(n=t;n=n.parentNode;)a.unshift(n);for(;s[i]===a[i];)i++;return i?de(s[i],a[i]):s[i]===w?-1:a[i]===w?1:0}),k},re.matches=function(e,t){return re(e,null,null,t)},re.matchesSelector=function(e,t){if((e.ownerDocument||e)!==k&&T(e),t=t.replace(_,"='$1']"),f.matchesSelector&&S&&!D[t+" "]&&(!d||!d.test(t))&&(!g||!g.test(t)))try{var n=y.call(e,t);if(n||f.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){}return 0<re(t,k,null,[e]).length},re.contains=function(e,t){return(e.ownerDocument||e)!==k&&T(e),m(e,t)},re.attr=function(e,t){(e.ownerDocument||e)!==k&&T(e);var n=b.attrHandle[t.toLowerCase()],i=n&&H.call(b.attrHandle,t.toLowerCase())?n(e,t,!S):void 0;return void 0!==i?i:f.attributes||!S?e.getAttribute(t):(i=e.getAttributeNode(t))&&i.specified?i.value:null},re.escape=function(e){return(e+"").replace(ne,ie)},re.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},re.uniqueSort=function(e){var t,n=[],i=0,o=0;if(c=!f.detectDuplicates,l=!f.sortStable&&e.slice(0),e.sort(j),c){for(;t=e[o++];)t===e[o]&&(i=n.push(o));for(;i--;)e.splice(n[i],1)}return l=null,e},r=re.getText=function(e){var t,n="",i=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=r(e)}else if(3===o||4===o)return e.nodeValue}else for(;t=e[i++];)n+=r(t);return n},(b=re.selectors={cacheLength:50,createPseudo:ae,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,u),e[3]=(e[3]||e[4]||e[5]||"").replace(te,u),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||re.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&re.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&Y.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,u).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=A[e+" "];return t||(t=new RegExp("(^|"+I+")"+e+"("+I+"|$)"))&&A(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,i,o){return function(e){var t=re.attr(e,n);return null==t?"!="===i:!i||(t+="","="===i?t===o:"!="===i?t!==o:"^="===i?o&&0===t.indexOf(o):"*="===i?o&&-1<t.indexOf(o):"$="===i?o&&t.slice(-o.length)===o:"~="===i?-1<(" "+t.replace(F," ")+" ").indexOf(o):"|="===i&&(t===o||t.slice(0,o.length+1)===o+"-"))}},CHILD:function(h,e,t,v,g){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),w="of-type"===e;return 1===v&&0===g?function(e){return!!e.parentNode}:function(e,t,n){var i,o,r,s,a,l,c=y!=m?"nextSibling":"previousSibling",d=e.parentNode,u=w&&e.nodeName.toLowerCase(),p=!n&&!w,f=!1;if(d){if(y){for(;c;){for(s=e;s=s[c];)if(w?s.nodeName.toLowerCase()===u:1===s.nodeType)return!1;l=c="only"===h&&!l&&"nextSibling"}return!0}if(l=[m?d.firstChild:d.lastChild],m&&p){for(f=(a=(i=(o=(r=(s=d)[C]||(s[C]={}))[s.uniqueID]||(r[s.uniqueID]={}))[h]||[])[0]===$&&i[1])&&i[2],s=a&&d.childNodes[a];s=++a&&s&&s[c]||(f=a=0)||l.pop();)if(1===s.nodeType&&++f&&s===e){o[h]=[$,a,f];break}}else if(p&&(f=a=(i=(o=(r=(s=e)[C]||(s[C]={}))[s.uniqueID]||(r[s.uniqueID]={}))[h]||[])[0]===$&&i[1]),!1===f)for(;(s=++a&&s&&s[c]||(f=a=0)||l.pop())&&((w?s.nodeName.toLowerCase()!==u:1!==s.nodeType)||!++f||(p&&((o=(r=s[C]||(s[C]={}))[s.uniqueID]||(r[s.uniqueID]={}))[h]=[$,f]),s!==e)););return(f-=g)===v||f%v==0&&0<=f/v}}},PSEUDO:function(e,r){var t,s=b.pseudos[e]||b.setFilters[e.toLowerCase()]||re.error("unsupported pseudo: "+e);return s[C]?s(r):1<s.length?(t=[e,e,"",r],b.setFilters.hasOwnProperty(e.toLowerCase())?ae(function(e,t){for(var n,i=s(e,r),o=i.length;o--;)e[n=q(e,i[o])]=!(t[n]=i[o])}):function(e){return s(e,0,t)}):s}},pseudos:{not:ae(function(e){var i=[],o=[],a=p(e.replace(B,"$1"));return a[C]?ae(function(e,t,n,i){for(var o,r=a(e,null,i,[]),s=e.length;s--;)(o=r[s])&&(e[s]=!(t[s]=o))}):function(e,t,n){return i[0]=e,a(i,null,n,o),i[0]=null,!o.pop()}}),has:ae(function(t){return function(e){return 0<re(t,e).length}}),contains:ae(function(t){return t=t.replace(te,u),function(e){return-1<(e.textContent||e.innerText||r(e)).indexOf(t)}}),lang:ae(function(n){return V.test(n||"")||re.error("unsupported lang: "+n),n=n.replace(te,u).toLowerCase(),function(e){var t;do{if(t=S?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===k.activeElement&&(!k.hasFocus||k.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ue(!1),disabled:ue(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:pe(function(){return[0]}),last:pe(function(e,t){return[t-1]}),eq:pe(function(e,t,n){return[n<0?n+t:n]}),even:pe(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:pe(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:pe(function(e,t,n){for(var i=n<0?n+t:n;0<=--i;)e.push(i);return e}),gt:pe(function(e,t,n){for(var i=n<0?n+t:n;++i<t;)e.push(i);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=function(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=function(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}(e);function he(){}function ve(e){for(var t=0,n=e.length,i="";t<n;t++)i+=e[t].value;return i}function ge(a,e,t){var l=e.dir,c=e.next,d=c||l,u=t&&"parentNode"===d,p=i++;return e.first?function(e,t,n){for(;e=e[l];)if(1===e.nodeType||u)return a(e,t,n);return!1}:function(e,t,n){var i,o,r,s=[$,p];if(n){for(;e=e[l];)if((1===e.nodeType||u)&&a(e,t,n))return!0}else for(;e=e[l];)if(1===e.nodeType||u)if(o=(r=e[C]||(e[C]={}))[e.uniqueID]||(r[e.uniqueID]={}),c&&c===e.nodeName.toLowerCase())e=e[l]||e;else{if((i=o[d])&&i[0]===$&&i[1]===p)return s[2]=i[2];if((o[d]=s)[2]=a(e,t,n))return!0}return!1}}function ye(o){return 1<o.length?function(e,t,n){for(var i=o.length;i--;)if(!o[i](e,t,n))return!1;return!0}:o[0]}function me(e,t,n,i,o){for(var r,s=[],a=0,l=e.length,c=null!=t;a<l;a++)(r=e[a])&&(n&&!n(r,i,o)||(s.push(r),c&&t.push(a)));return s}function we(f,h,v,g,y,e){return g&&!g[C]&&(g=we(g)),y&&!y[C]&&(y=we(y,e)),ae(function(e,t,n,i){var o,r,s,a=[],l=[],c=t.length,d=e||function(e,t,n){for(var i=0,o=t.length;i<o;i++)re(e,t[i],n);return n}(h||"*",n.nodeType?[n]:n,[]),u=!f||!e&&h?d:me(d,a,f,n,i),p=v?y||(e?f:c||g)?[]:t:u;if(v&&v(u,p,n,i),g)for(o=me(p,l),g(o,[],n,i),r=o.length;r--;)(s=o[r])&&(p[l[r]]=!(u[l[r]]=s));if(e){if(y||f){if(y){for(o=[],r=p.length;r--;)(s=p[r])&&o.push(u[r]=s);y(null,p=[],o,i)}for(r=p.length;r--;)(s=p[r])&&-1<(o=y?q(e,s):a[r])&&(e[o]=!(t[o]=s))}}else p=me(p===t?p.splice(c,p.length):p),y?y(null,t,p,i):O.apply(t,p)})}function be(g,y){function e(e,t,n,i,o){var r,s,a,l=0,c="0",d=e&&[],u=[],p=x,f=e||w&&b.find.TAG("*",o),h=$+=null==p?1:Math.random()||.1,v=f.length;for(o&&(x=t===k||t||o);c!==v&&null!=(r=f[c]);c++){if(w&&r){for(s=0,t||r.ownerDocument===k||(T(r),n=!S);a=g[s++];)if(a(r,t||k,n)){i.push(r);break}o&&($=h)}m&&((r=!a&&r)&&l--,e&&d.push(r))}if(l+=c,m&&c!==l){for(s=0;a=y[s++];)a(d,u,t,n);if(e){if(0<l)for(;c--;)d[c]||u[c]||(u[c]=N.call(i));u=me(u)}O.apply(i,u),o&&!e&&0<u.length&&1<l+y.length&&re.uniqueSort(i)}return o&&($=h,x=p),d}var m=0<y.length,w=0<g.length;return m?ae(e):e}return he.prototype=b.filters=b.pseudos,b.setFilters=new he,h=re.tokenize=function(e,t){var n,i,o,r,s,a,l,c=E[e+" "];if(c)return t?0:c.slice(0);for(s=e,a=[],l=b.preFilter;s;){for(r in n&&!(i=U.exec(s))||(i&&(s=s.slice(i[0].length)||s),a.push(o=[])),n=!1,(i=X.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length)),b.filter)!(i=G[r].exec(s))||l[r]&&!(i=l[r](i))||(n=i.shift(),o.push({value:n,type:r,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?re.error(e):E(e,a).slice(0)},p=re.compile=function(e,t){var n,i=[],o=[],r=D[e+" "];if(!r){for(n=(t=t||h(e)).length;n--;)(r=function e(t){for(var o,n,i,r=t.length,s=b.relative[t[0].type],a=s||b.relative[" "],l=s?1:0,c=ge(function(e){return e===o},a,!0),d=ge(function(e){return-1<q(o,e)},a,!0),u=[function(e,t,n){var i=!s&&(n||t!==x)||((o=t).nodeType?c:d)(e,t,n);return o=null,i}];l<r;l++)if(n=b.relative[t[l].type])u=[ge(ye(u),n)];else{if((n=b.filter[t[l].type].apply(null,t[l].matches))[C]){for(i=++l;i<r&&!b.relative[t[i].type];i++);return we(1<l&&ye(u),1<l&&ve(t.slice(0,l-1).concat({value:" "===t[l-2].type?"*":""})).replace(B,"$1"),n,l<i&&e(t.slice(l,i)),i<r&&e(t=t.slice(i)),i<r&&ve(t))}u.push(n)}return ye(u)}(t[n]))[C]?i.push(r):o.push(r);(r=D(e,be(o,i))).selector=e}return r},v=re.select=function(e,t,n,i){var o,r,s,a,l,c="function"==typeof e&&e,d=!i&&h(e=c.selector||e);if(n=n||[],1===d.length){if(2<(r=d[0]=d[0].slice(0)).length&&"ID"===(s=r[0]).type&&9===t.nodeType&&S&&b.relative[r[1].type]){if(!(t=(b.find.ID(s.matches[0].replace(te,u),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(r.shift().value.length)}for(o=G.needsContext.test(e)?0:r.length;o--&&(s=r[o],!b.relative[a=s.type]);)if((l=b.find[a])&&(i=l(s.matches[0].replace(te,u),ee.test(r[0].type)&&fe(t.parentNode)||t))){if(r.splice(o,1),!(e=i.length&&ve(r)))return O.apply(n,i),n;break}}return(c||p(e,d))(i,t,!S,n,!t||ee.test(e)&&fe(t.parentNode)||t),n},f.sortStable=C.split("").sort(j).join("")===C,f.detectDuplicates=!!c,T(),f.sortDetached=le(function(e){return 1&e.compareDocumentPosition(k.createElement("fieldset"))}),le(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||ce("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),f.attributes&&le(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||ce("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),le(function(e){return null==e.getAttribute("disabled")})||ce(M,function(e,t,n){var i;if(!n)return!0===e[t]?t.toLowerCase():(i=e.getAttributeNode(t))&&i.specified?i.value:null}),re}(k);C.find=f,C.expr=f.selectors,C.expr[":"]=C.expr.pseudos,C.uniqueSort=C.unique=f.uniqueSort,C.text=f.getText,C.isXMLDoc=f.isXML,C.contains=f.contains,C.escapeSelector=f.escape;function h(e,t,n){for(var i=[],o=void 0!==n;(e=e[t])&&9!==e.nodeType;)if(1===e.nodeType){if(o&&C(e).is(n))break;i.push(e)}return i}function T(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}var $=C.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var E=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function D(e,n,i){return w(n)?C.grep(e,function(e,t){return!!n.call(e,t,e)!==i}):n.nodeType?C.grep(e,function(e){return e===n!==i}):"string"!=typeof n?C.grep(e,function(e){return-1<o.call(n,e)!==i}):C.filter(n,e,i)}C.filter=function(e,t,n){var i=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===i.nodeType?C.find.matchesSelector(i,e)?[i]:[]:C.find.matches(e,C.grep(t,function(e){return 1===e.nodeType}))},C.fn.extend({find:function(e){var t,n,i=this.length,o=this;if("string"!=typeof e)return this.pushStack(C(e).filter(function(){for(t=0;t<i;t++)if(C.contains(o[t],this))return!0}));for(n=this.pushStack([]),t=0;t<i;t++)C.find(e,o[t],n);return 1<i?C.uniqueSort(n):n},filter:function(e){return this.pushStack(D(this,e||[],!1))},not:function(e){return this.pushStack(D(this,e||[],!0))},is:function(e){return!!D(this,"string"==typeof e&&$.test(e)?C(e):e||[],!1).length}});var j,H=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(C.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||j,"string"!=typeof e)return e.nodeType?(this[0]=e,this.length=1,this):w(e)?void 0!==n.ready?n.ready(e):e(C):C.makeArray(e,this);if(!(i="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:H.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof C?t[0]:t,C.merge(this,C.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:S,!0)),E.test(i[1])&&C.isPlainObject(t))for(i in t)w(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=S.getElementById(i[2]))&&(this[0]=o,this.length=1),this}).prototype=C.fn,j=C(S);var N=/^(?:parents|prev(?:Until|All))/,L={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){for(;(e=e[t])&&1!==e.nodeType;);return e}C.fn.extend({has:function(e){var t=C(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(C.contains(this,t[e]))return!0})},closest:function(e,t){var n,i=0,o=this.length,r=[],s="string"!=typeof e&&C(e);if(!$.test(e))for(;i<o;i++)for(n=this[i];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(s?-1<s.index(n):1===n.nodeType&&C.find.matchesSelector(n,e))){r.push(n);break}return this.pushStack(1<r.length?C.uniqueSort(r):r)},index:function(e){return e?"string"==typeof e?o.call(C(e),this[0]):o.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(C.uniqueSort(C.merge(this.get(),C(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),C.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return A(e,"iframe")?e.contentDocument:(A(e,"template")&&(e=e.content||e),C.merge([],e.childNodes))}},function(i,o){C.fn[i]=function(e,t){var n=C.map(this,o,e);return"Until"!==i.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=C.filter(t,n)),1<this.length&&(L[i]||C.uniqueSort(n),N.test(i)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function q(e){return e}function M(e){throw e}function I(e,t,n,i){var o;try{e&&w(o=e.promise)?o.call(e).done(t).fail(n):e&&w(o=e.then)?o.call(e,t,n):t.apply(void 0,[e].slice(i))}catch(e){n.apply(void 0,[e])}}C.Callbacks=function(i){var e,n;i="string"==typeof i?(e=i,n={},C.each(e.match(P)||[],function(e,t){n[t]=!0}),n):C.extend({},i);function o(){for(a=a||i.once,s=r=!0;c.length;d=-1)for(t=c.shift();++d<l.length;)!1===l[d].apply(t[0],t[1])&&i.stopOnFalse&&(d=l.length,t=!1);i.memory||(t=!1),r=!1,a&&(l=t?[]:"")}var r,t,s,a,l=[],c=[],d=-1,u={add:function(){return l&&(t&&!r&&(d=l.length-1,c.push(t)),function n(e){C.each(e,function(e,t){w(t)?i.unique&&u.has(t)||l.push(t):t&&t.length&&"string"!==x(t)&&n(t)})}(arguments),t&&!r&&o()),this},remove:function(){return C.each(arguments,function(e,t){for(var n;-1<(n=C.inArray(t,l,n));)l.splice(n,1),n<=d&&d--}),this},has:function(e){return e?-1<C.inArray(e,l):0<l.length},empty:function(){return l=l&&[],this},disable:function(){return a=c=[],l=t="",this},disabled:function(){return!l},lock:function(){return a=c=[],t||r||(l=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],c.push(t),r||o()),this},fire:function(){return u.fireWith(this,arguments),this},fired:function(){return!!s}};return u},C.extend({Deferred:function(e){var r=[["notify","progress",C.Callbacks("memory"),C.Callbacks("memory"),2],["resolve","done",C.Callbacks("once memory"),C.Callbacks("once memory"),0,"resolved"],["reject","fail",C.Callbacks("once memory"),C.Callbacks("once memory"),1,"rejected"]],o="pending",s={state:function(){return o},always:function(){return a.done(arguments).fail(arguments),this},catch:function(e){return s.then(null,e)},pipe:function(){var o=arguments;return C.Deferred(function(i){C.each(r,function(e,t){var n=w(o[t[4]])&&o[t[4]];a[t[1]](function(){var e=n&&n.apply(this,arguments);e&&w(e.promise)?e.promise().progress(i.notify).done(i.resolve).fail(i.reject):i[t[0]+"With"](this,n?[e]:arguments)})}),o=null}).promise()},then:function(t,n,i){var l=0;function c(o,r,s,a){return function(){function e(){var e,t;if(!(o<l)){if((e=s.apply(n,i))===r.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,w(t)?a?t.call(e,c(l,r,q,a),c(l,r,M,a)):(l++,t.call(e,c(l,r,q,a),c(l,r,M,a),c(l,r,q,r.notifyWith))):(s!==q&&(n=void 0,i=[e]),(a||r.resolveWith)(n,i))}}var n=this,i=arguments,t=a?e:function(){try{e()}catch(e){C.Deferred.exceptionHook&&C.Deferred.exceptionHook(e,t.stackTrace),l<=o+1&&(s!==M&&(n=void 0,i=[e]),r.rejectWith(n,i))}};o?t():(C.Deferred.getStackHook&&(t.stackTrace=C.Deferred.getStackHook()),k.setTimeout(t))}}return C.Deferred(function(e){r[0][3].add(c(0,e,w(i)?i:q,e.notifyWith)),r[1][3].add(c(0,e,w(t)?t:q)),r[2][3].add(c(0,e,w(n)?n:M))}).promise()},promise:function(e){return null!=e?C.extend(e,s):s}},a={};return C.each(r,function(e,t){var n=t[2],i=t[5];s[t[1]]=n.add,i&&n.add(function(){o=i},r[3-e][2].disable,r[3-e][3].disable,r[0][2].lock,r[0][3].lock),n.add(t[3].fire),a[t[0]]=function(){return a[t[0]+"With"](this===a?void 0:this,arguments),this},a[t[0]+"With"]=n.fireWith}),s.promise(a),e&&e.call(a,a),a},when:function(e){function t(t){return function(e){o[t]=this,r[t]=1<arguments.length?a.call(arguments):e,--n||s.resolveWith(o,r)}}var n=arguments.length,i=n,o=Array(i),r=a.call(arguments),s=C.Deferred();if(n<=1&&(I(e,s.done(t(i)).resolve,s.reject,!n),"pending"===s.state()||w(r[i]&&r[i].then)))return s.then();for(;i--;)I(r[i],t(i),s.reject);return s.promise()}});var z=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;C.Deferred.exceptionHook=function(e,t){k.console&&k.console.warn&&e&&z.test(e.name)&&k.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},C.readyException=function(e){k.setTimeout(function(){throw e})};var W=C.Deferred();function R(){S.removeEventListener("DOMContentLoaded",R),k.removeEventListener("load",R),C.ready()}C.fn.ready=function(e){return W.then(e).catch(function(e){C.readyException(e)}),this},C.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--C.readyWait:C.isReady)||((C.isReady=!0)!==e&&0<--C.readyWait||W.resolveWith(S,[C]))}}),C.ready.then=W.then,"complete"===S.readyState||"loading"!==S.readyState&&!S.documentElement.doScroll?k.setTimeout(C.ready):(S.addEventListener("DOMContentLoaded",R),k.addEventListener("load",R));var F=function(e,t,n,i,o,r,s){var a=0,l=e.length,c=null==n;if("object"===x(n))for(a in o=!0,n)F(e,t,a,n[a],!0,r,s);else if(void 0!==i&&(o=!0,w(i)||(s=!0),c&&(t=s?(t.call(e,i),null):(c=t,function(e,t,n){return c.call(C(e),n)})),t))for(;a<l;a++)t(e[a],n,s?i:i.call(e[a],a,t(e[a],n)));return o?e:c?t.call(e):l?t(e[0],n):r},B=/^-ms-/,U=/-([a-z])/g;function X(e,t){return t.toUpperCase()}function _(e){return e.replace(B,"ms-").replace(U,X)}function Y(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}function V(){this.expando=C.expando+V.uid++}V.uid=1,V.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var i,o=this.cache(e);if("string"==typeof t)o[_(t)]=n;else for(i in t)o[_(i)]=t[i];return o},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][_(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,i=e[this.expando];if(void 0!==i){if(void 0!==t){n=(t=Array.isArray(t)?t.map(_):(t=_(t))in i?[t]:t.match(P)||[]).length;for(;n--;)delete i[t[n]]}void 0!==t&&!C.isEmptyObject(i)||(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!C.isEmptyObject(t)}};var G=new V,Q=new V,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var i,o;if(void 0===n&&1===e.nodeType)if(i="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(i))){try{n="true"===(o=n)||"false"!==o&&("null"===o?null:o===+o+""?+o:J.test(o)?JSON.parse(o):o)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}C.extend({hasData:function(e){return Q.hasData(e)||G.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return G.access(e,t,n)},_removeData:function(e,t){G.remove(e,t)}}),C.fn.extend({data:function(n,e){var t,i,o,r=this[0],s=r&&r.attributes;if(void 0!==n)return"object"==typeof n?this.each(function(){Q.set(this,n)}):F(this,function(e){var t;if(r&&void 0===e){if(void 0!==(t=Q.get(r,n)))return t;if(void 0!==(t=Z(r,n)))return t}else this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0);if(this.length&&(o=Q.get(r),1===r.nodeType&&!G.get(r,"hasDataAttrs"))){for(t=s.length;t--;)s[t]&&0===(i=s[t].name).indexOf("data-")&&(i=_(i.slice(5)),Z(r,i,o[i]));G.set(r,"hasDataAttrs",!0)}return o},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),C.extend({queue:function(e,t,n){var i;if(e)return t=(t||"fx")+"queue",i=G.get(e,t),n&&(!i||Array.isArray(n)?i=G.access(e,t,C.makeArray(n)):i.push(n)),i||[]},dequeue:function(e,t){t=t||"fx";var n=C.queue(e,t),i=n.length,o=n.shift(),r=C._queueHooks(e,t);"inprogress"===o&&(o=n.shift(),i--),o&&("fx"===t&&n.unshift("inprogress"),delete r.stop,o.call(e,function(){C.dequeue(e,t)},r)),!i&&r&&r.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return G.get(e,n)||G.access(e,n,{empty:C.Callbacks("once memory").add(function(){G.remove(e,[t+"queue",n])})})}}),C.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?C.queue(this[0],t):void 0===n?this:this.each(function(){var e=C.queue(this,t,n);C._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&C.dequeue(this,t)})},dequeue:function(e){return this.each(function(){C.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){function n(){--o||r.resolveWith(s,[s])}var i,o=1,r=C.Deferred(),s=this,a=this.length;for("string"!=typeof e&&(t=e,e=void 0),e=e||"fx";a--;)(i=G.get(s[a],e+"queueHooks"))&&i.empty&&(o++,i.empty.add(n));return n(),r.promise(t)}});function ee(e,t,n,i){var o,r,s={};for(r in t)s[r]=e.style[r],e.style[r]=t[r];for(r in o=n.apply(e,i||[]),t)e.style[r]=s[r];return o}var te=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ne=new RegExp("^(?:([+-])=|)("+te+")([a-z%]*)$","i"),ie=["Top","Right","Bottom","Left"],oe=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&C.contains(e.ownerDocument,e)&&"none"===C.css(e,"display")};function re(e,t,n,i){var o,r,s=20,a=i?function(){return i.cur()}:function(){return C.css(e,t,"")},l=a(),c=n&&n[3]||(C.cssNumber[t]?"":"px"),d=(C.cssNumber[t]||"px"!==c&&+l)&&ne.exec(C.css(e,t));if(d&&d[3]!==c){for(l/=2,c=c||d[3],d=+l||1;s--;)C.style(e,t,d+c),(1-r)*(1-(r=a()/l||.5))<=0&&(s=0),d/=r;d*=2,C.style(e,t,d+c),n=n||[]}return n&&(d=+d||+l||0,o=n[1]?d+(n[1]+1)*n[2]:+n[2],i&&(i.unit=c,i.start=d,i.end=o)),o}var se={};function ae(e,t){for(var n,i,o,r,s,a,l,c=[],d=0,u=e.length;d<u;d++)(i=e[d]).style&&(n=i.style.display,t?("none"===n&&(c[d]=G.get(i,"display")||null,c[d]||(i.style.display="")),""===i.style.display&&oe(i)&&(c[d]=(l=a=s=r=void 0,s=(o=i).ownerDocument,a=o.nodeName,(l=se[a])||(r=s.body.appendChild(s.createElement(a)),l=C.css(r,"display"),r.parentNode.removeChild(r),"none"===l&&(l="block"),se[a]=l)))):"none"!==n&&(c[d]="none",G.set(i,"display",n)));for(d=0;d<u;d++)null!=c[d]&&(e[d].style.display=c[d]);return e}C.fn.extend({show:function(){return ae(this,!0)},hide:function(){return ae(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){oe(this)?C(this).show():C(this).hide()})}});var le=/^(?:checkbox|radio)$/i,ce=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,de=/^$|^module$|\/(?:java|ecma)script/i,ue={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function pe(e,t){var n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[];return void 0===t||t&&A(e,t)?C.merge([e],n):n}function fe(e,t){for(var n=0,i=e.length;n<i;n++)G.set(e[n],"globalEval",!t||G.get(t[n],"globalEval"))}ue.optgroup=ue.option,ue.tbody=ue.tfoot=ue.colgroup=ue.caption=ue.thead,ue.th=ue.td;var he,ve,ge=/<|&#?\w+;/;function ye(e,t,n,i,o){for(var r,s,a,l,c,d,u=t.createDocumentFragment(),p=[],f=0,h=e.length;f<h;f++)if((r=e[f])||0===r)if("object"===x(r))C.merge(p,r.nodeType?[r]:r);else if(ge.test(r)){for(s=s||u.appendChild(t.createElement("div")),a=(ce.exec(r)||["",""])[1].toLowerCase(),l=ue[a]||ue._default,s.innerHTML=l[1]+C.htmlPrefilter(r)+l[2],d=l[0];d--;)s=s.lastChild;C.merge(p,s.childNodes),(s=u.firstChild).textContent=""}else p.push(t.createTextNode(r));for(u.textContent="",f=0;r=p[f++];)if(i&&-1<C.inArray(r,i))o&&o.push(r);else if(c=C.contains(r.ownerDocument,r),s=pe(u.appendChild(r),"script"),c&&fe(s),n)for(d=0;r=s[d++];)de.test(r.type||"")&&n.push(r);return u}he=S.createDocumentFragment().appendChild(S.createElement("div")),(ve=S.createElement("input")).setAttribute("type","radio"),ve.setAttribute("checked","checked"),ve.setAttribute("name","t"),he.appendChild(ve),m.checkClone=he.cloneNode(!0).cloneNode(!0).lastChild.checked,he.innerHTML="<textarea>x</textarea>",m.noCloneChecked=!!he.cloneNode(!0).lastChild.defaultValue;var me=S.documentElement,we=/^key/,be=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,xe=/^([^.]*)(?:\.(.+)|)/;function Te(){return!0}function ke(){return!1}function Se(){try{return S.activeElement}catch(e){}}function Ce(e,t,n,i,o,r){var s,a;if("object"==typeof t){for(a in"string"!=typeof n&&(i=i||n,n=void 0),t)Ce(e,a,n,i,t[a],r);return e}if(null==i&&null==o?(o=n,i=n=void 0):null==o&&("string"==typeof n?(o=i,i=void 0):(o=i,i=n,n=void 0)),!1===o)o=ke;else if(!o)return e;return 1===r&&(s=o,(o=function(e){return C().off(e),s.apply(this,arguments)}).guid=s.guid||(s.guid=C.guid++)),e.each(function(){C.event.add(this,t,o,i,n)})}C.event={global:{},add:function(t,e,n,i,o){var r,s,a,l,c,d,u,p,f,h,v,g=G.get(t);if(g)for(n.handler&&(n=(r=n).handler,o=r.selector),o&&C.find.matchesSelector(me,o),n.guid||(n.guid=C.guid++),(l=g.events)||(l=g.events={}),(s=g.handle)||(s=g.handle=function(e){return void 0!==C&&C.event.triggered!==e.type?C.event.dispatch.apply(t,arguments):void 0}),c=(e=(e||"").match(P)||[""]).length;c--;)f=v=(a=xe.exec(e[c])||[])[1],h=(a[2]||"").split(".").sort(),f&&(u=C.event.special[f]||{},f=(o?u.delegateType:u.bindType)||f,u=C.event.special[f]||{},d=C.extend({type:f,origType:v,data:i,handler:n,guid:n.guid,selector:o,needsContext:o&&C.expr.match.needsContext.test(o),namespace:h.join(".")},r),(p=l[f])||((p=l[f]=[]).delegateCount=0,u.setup&&!1!==u.setup.call(t,i,h,s)||t.addEventListener&&t.addEventListener(f,s)),u.add&&(u.add.call(t,d),d.handler.guid||(d.handler.guid=n.guid)),o?p.splice(p.delegateCount++,0,d):p.push(d),C.event.global[f]=!0)},remove:function(e,t,n,i,o){var r,s,a,l,c,d,u,p,f,h,v,g=G.hasData(e)&&G.get(e);if(g&&(l=g.events)){for(c=(t=(t||"").match(P)||[""]).length;c--;)if(f=v=(a=xe.exec(t[c])||[])[1],h=(a[2]||"").split(".").sort(),f){for(u=C.event.special[f]||{},p=l[f=(i?u.delegateType:u.bindType)||f]||[],a=a[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),s=r=p.length;r--;)d=p[r],!o&&v!==d.origType||n&&n.guid!==d.guid||a&&!a.test(d.namespace)||i&&i!==d.selector&&("**"!==i||!d.selector)||(p.splice(r,1),d.selector&&p.delegateCount--,u.remove&&u.remove.call(e,d));s&&!p.length&&(u.teardown&&!1!==u.teardown.call(e,h,g.handle)||C.removeEvent(e,f,g.handle),delete l[f])}else for(f in l)C.event.remove(e,f+t[c],n,i,!0);C.isEmptyObject(l)&&G.remove(e,"handle events")}},dispatch:function(e){var t,n,i,o,r,s,a=C.event.fix(e),l=new Array(arguments.length),c=(G.get(this,"events")||{})[a.type]||[],d=C.event.special[a.type]||{};for(l[0]=a,t=1;t<arguments.length;t++)l[t]=arguments[t];if(a.delegateTarget=this,!d.preDispatch||!1!==d.preDispatch.call(this,a)){for(s=C.event.handlers.call(this,a,c),t=0;(o=s[t++])&&!a.isPropagationStopped();)for(a.currentTarget=o.elem,n=0;(r=o.handlers[n++])&&!a.isImmediatePropagationStopped();)a.rnamespace&&!a.rnamespace.test(r.namespace)||(a.handleObj=r,a.data=r.data,void 0!==(i=((C.event.special[r.origType]||{}).handle||r.handler).apply(o.elem,l))&&!1===(a.result=i)&&(a.preventDefault(),a.stopPropagation()));return d.postDispatch&&d.postDispatch.call(this,a),a.result}},handlers:function(e,t){var n,i,o,r,s,a=[],l=t.delegateCount,c=e.target;if(l&&c.nodeType&&!("click"===e.type&&1<=e.button))for(;c!==this;c=c.parentNode||this)if(1===c.nodeType&&("click"!==e.type||!0!==c.disabled)){for(r=[],s={},n=0;n<l;n++)void 0===s[o=(i=t[n]).selector+" "]&&(s[o]=i.needsContext?-1<C(o,this).index(c):C.find(o,this,null,[c]).length),s[o]&&r.push(i);r.length&&a.push({elem:c,handlers:r})}return c=this,l<t.length&&a.push({elem:c,handlers:t.slice(l)}),a},addProp:function(t,e){Object.defineProperty(C.Event.prototype,t,{enumerable:!0,configurable:!0,get:w(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[C.expando]?e:new C.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&A(this,"input"))return this.click(),!1},_default:function(e){return A(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},C.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},C.Event=function(e,t){if(!(this instanceof C.Event))return new C.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Te:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&C.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[C.expando]=!0},C.Event.prototype={constructor:C.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Te,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Te,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Te,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},C.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&be.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},C.event.addProp),C.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,o){C.event.special[e]={delegateType:o,bindType:o,handle:function(e){var t,n=e.relatedTarget,i=e.handleObj;return n&&(n===this||C.contains(this,n))||(e.type=i.origType,t=i.handler.apply(this,arguments),e.type=o),t}}}),C.fn.extend({on:function(e,t,n,i){return Ce(this,e,t,n,i)},one:function(e,t,n,i){return Ce(this,e,t,n,i,1)},off:function(e,t,n){var i,o;if(e&&e.preventDefault&&e.handleObj)return i=e.handleObj,C(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler),this;if("object"!=typeof e)return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){C.event.remove(this,e,n,t)});for(o in e)this.off(o,t,e[o]);return this}});var $e=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,Ee=/checked\s*(?:[^=]|=\s*.checked.)/i,De=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&C(e).children("tbody")[0]||e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Ne(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,i,o,r,s,a,l,c;if(1===t.nodeType){if(G.hasData(e)&&(r=G.access(e),s=G.set(t,r),c=r.events))for(o in delete s.handle,s.events={},c)for(n=0,i=c[o].length;n<i;n++)C.event.add(t,o,c[o][n]);Q.hasData(e)&&(a=Q.access(e),l=C.extend({},a),Q.set(t,l))}}function Oe(n,i,o,r){i=g.apply([],i);var e,t,s,a,l,c,d=0,u=n.length,p=u-1,f=i[0],h=w(f);if(h||1<u&&"string"==typeof f&&!m.checkClone&&Ee.test(f))return n.each(function(e){var t=n.eq(e);h&&(i[0]=f.call(this,e,t.html())),Oe(t,i,o,r)});if(u&&(t=(e=ye(i,n[0].ownerDocument,!1,n,r)).firstChild,1===e.childNodes.length&&(e=t),t||r)){for(a=(s=C.map(pe(e,"script"),He)).length;d<u;d++)l=e,d!==p&&(l=C.clone(l,!0,!0),a&&C.merge(s,pe(l,"script"))),o.call(n[d],l,d);if(a)for(c=s[s.length-1].ownerDocument,C.map(s,Ne),d=0;d<a;d++)l=s[d],de.test(l.type||"")&&!G.access(l,"globalEval")&&C.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?C._evalUrl&&C._evalUrl(l.src):b(l.textContent.replace(De,""),c,l))}return n}function Pe(e,t,n){for(var i,o=t?C.filter(t,e):e,r=0;null!=(i=o[r]);r++)n||1!==i.nodeType||C.cleanData(pe(i)),i.parentNode&&(n&&C.contains(i.ownerDocument,i)&&fe(pe(i,"script")),i.parentNode.removeChild(i));return e}C.extend({htmlPrefilter:function(e){return e.replace($e,"<$1></$2>")},clone:function(e,t,n){var i,o,r,s,a,l,c,d=e.cloneNode(!0),u=C.contains(e.ownerDocument,e);if(!(m.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||C.isXMLDoc(e)))for(s=pe(d),i=0,o=(r=pe(e)).length;i<o;i++)a=r[i],l=s[i],c=void 0,"input"===(c=l.nodeName.toLowerCase())&&le.test(a.type)?l.checked=a.checked:"input"!==c&&"textarea"!==c||(l.defaultValue=a.defaultValue);if(t)if(n)for(r=r||pe(e),s=s||pe(d),i=0,o=r.length;i<o;i++)Le(r[i],s[i]);else Le(e,d);return 0<(s=pe(d,"script")).length&&fe(s,!u&&pe(e,"script")),d},cleanData:function(e){for(var t,n,i,o=C.event.special,r=0;void 0!==(n=e[r]);r++)if(Y(n)){if(t=n[G.expando]){if(t.events)for(i in t.events)o[i]?C.event.remove(n,i):C.removeEvent(n,i,t.handle);n[G.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),C.fn.extend({detach:function(e){return Pe(this,e,!0)},remove:function(e){return Pe(this,e)},text:function(e){return F(this,function(e){return void 0===e?C.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Oe(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return Oe(this,arguments,function(e){var t;1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(t=je(this,e)).insertBefore(e,t.firstChild)})},before:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Oe(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(C.cleanData(pe(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return C.clone(this,e,t)})},html:function(e){return F(this,function(e){var t=this[0]||{},n=0,i=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ue[(ce.exec(e)||["",""])[1].toLowerCase()]){e=C.htmlPrefilter(e);try{for(;n<i;n++)1===(t=this[n]||{}).nodeType&&(C.cleanData(pe(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return Oe(this,arguments,function(e){var t=this.parentNode;C.inArray(this,n)<0&&(C.cleanData(pe(this)),t&&t.replaceChild(e,this))},n)}}),C.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,s){C.fn[e]=function(e){for(var t,n=[],i=C(e),o=i.length-1,r=0;r<=o;r++)t=r===o?this:this.clone(!0),C(i[r])[s](t),l.apply(n,t.get());return this.pushStack(n)}});var qe,Me,Ie,ze,We,Re,Fe,Be=new RegExp("^("+te+")(?!px)[a-z%]+$","i"),Ue=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=k),t.getComputedStyle(e)},Xe=new RegExp(ie.join("|"),"i");function _e(){var e;Fe&&(Re.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",Fe.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",me.appendChild(Re).appendChild(Fe),e=k.getComputedStyle(Fe),qe="1%"!==e.top,We=12===Ye(e.marginLeft),Fe.style.right="60%",ze=36===Ye(e.right),Me=36===Ye(e.width),Fe.style.position="absolute",Ie=36===Fe.offsetWidth||"absolute",me.removeChild(Re),Fe=null)}function Ye(e){return Math.round(parseFloat(e))}function Ve(e,t,n){var i,o,r,s,a=e.style;return(n=n||Ue(e))&&(""!==(s=n.getPropertyValue(t)||n[t])||C.contains(e.ownerDocument,e)||(s=C.style(e,t)),!m.pixelBoxStyles()&&Be.test(s)&&Xe.test(t)&&(i=a.width,o=a.minWidth,r=a.maxWidth,a.minWidth=a.maxWidth=a.width=s,s=n.width,a.width=i,a.minWidth=o,a.maxWidth=r)),void 0!==s?s+"":s}function Ge(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}Re=S.createElement("div"),(Fe=S.createElement("div")).style&&(Fe.style.backgroundClip="content-box",Fe.cloneNode(!0).style.backgroundClip="",m.clearCloneStyle="content-box"===Fe.style.backgroundClip,C.extend(m,{boxSizingReliable:function(){return _e(),Me},pixelBoxStyles:function(){return _e(),ze},pixelPosition:function(){return _e(),qe},reliableMarginLeft:function(){return _e(),We},scrollboxSize:function(){return _e(),Ie}}));var Qe=/^(none|table(?!-c[ea]).+)/,Je=/^--/,Ke={position:"absolute",visibility:"hidden",display:"block"},Ze={letterSpacing:"0",fontWeight:"400"},et=["Webkit","Moz","ms"],tt=S.createElement("div").style;function nt(e){return C.cssProps[e]||(C.cssProps[e]=function(e){if(e in tt)return e;for(var t=e[0].toUpperCase()+e.slice(1),n=et.length;n--;)if((e=et[n]+t)in tt)return e}(e)||e)}function it(e,t,n){var i=ne.exec(t);return i?Math.max(0,i[2]-(n||0))+(i[3]||"px"):t}function ot(e,t,n,i,o,r){var s="width"===t?1:0,a=0,l=0;if(n===(i?"border":"content"))return 0;for(;s<4;s+=2)"margin"===n&&(l+=C.css(e,n+ie[s],!0,o)),i?("content"===n&&(l-=C.css(e,"padding"+ie[s],!0,o)),"margin"!==n&&(l-=C.css(e,"border"+ie[s]+"Width",!0,o))):(l+=C.css(e,"padding"+ie[s],!0,o),"padding"!==n?l+=C.css(e,"border"+ie[s]+"Width",!0,o):a+=C.css(e,"border"+ie[s]+"Width",!0,o));return!i&&0<=r&&(l+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-r-l-a-.5))),l}function rt(e,t,n){var i=Ue(e),o=Ve(e,t,i),r="border-box"===C.css(e,"boxSizing",!1,i),s=r;if(Be.test(o)){if(!n)return o;o="auto"}return s=s&&(m.boxSizingReliable()||o===e.style[t]),"auto"!==o&&(parseFloat(o)||"inline"!==C.css(e,"display",!1,i))||(o=e["offset"+t[0].toUpperCase()+t.slice(1)],s=!0),(o=parseFloat(o)||0)+ot(e,t,n||(r?"border":"content"),s,i,o)+"px"}function st(e,t,n,i,o){return new st.prototype.init(e,t,n,i,o)}C.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Ve(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,i){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var o,r,s,a=_(t),l=Je.test(t),c=e.style;if(l||(t=nt(a)),s=C.cssHooks[t]||C.cssHooks[a],void 0===n)return s&&"get"in s&&void 0!==(o=s.get(e,!1,i))?o:c[t];"string"==(r=typeof n)&&(o=ne.exec(n))&&o[1]&&(n=re(e,t,o),r="number"),null!=n&&n==n&&("number"===r&&(n+=o&&o[3]||(C.cssNumber[a]?"":"px")),m.clearCloneStyle||""!==n||0!==t.indexOf("background")||(c[t]="inherit"),s&&"set"in s&&void 0===(n=s.set(e,n,i))||(l?c.setProperty(t,n):c[t]=n))}},css:function(e,t,n,i){var o,r,s,a=_(t);return Je.test(t)||(t=nt(a)),(s=C.cssHooks[t]||C.cssHooks[a])&&"get"in s&&(o=s.get(e,!0,n)),void 0===o&&(o=Ve(e,t,i)),"normal"===o&&t in Ze&&(o=Ze[t]),""===n||n?(r=parseFloat(o),!0===n||isFinite(r)?r||0:o):o}}),C.each(["height","width"],function(e,a){C.cssHooks[a]={get:function(e,t,n){if(t)return!Qe.test(C.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?rt(e,a,n):ee(e,Ke,function(){return rt(e,a,n)})},set:function(e,t,n){var i,o=Ue(e),r="border-box"===C.css(e,"boxSizing",!1,o),s=n&&ot(e,a,n,r,o);return r&&m.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+a[0].toUpperCase()+a.slice(1)]-parseFloat(o[a])-ot(e,a,"border",!1,o)-.5)),s&&(i=ne.exec(t))&&"px"!==(i[3]||"px")&&(e.style[a]=t,t=C.css(e,a)),it(0,t,s)}}}),C.cssHooks.marginLeft=Ge(m.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Ve(e,"marginLeft"))||e.getBoundingClientRect().left-ee(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),C.each({margin:"",padding:"",border:"Width"},function(o,r){C.cssHooks[o+r]={expand:function(e){for(var t=0,n={},i="string"==typeof e?e.split(" "):[e];t<4;t++)n[o+ie[t]+r]=i[t]||i[t-2]||i[0];return n}},"margin"!==o&&(C.cssHooks[o+r].set=it)}),C.fn.extend({css:function(e,t){return F(this,function(e,t,n){var i,o,r={},s=0;if(Array.isArray(t)){for(i=Ue(e),o=t.length;s<o;s++)r[t[s]]=C.css(e,t[s],!1,i);return r}return void 0!==n?C.style(e,t,n):C.css(e,t)},e,t,1<arguments.length)}}),(C.Tween=st).prototype={constructor:st,init:function(e,t,n,i,o,r){this.elem=e,this.prop=n,this.easing=o||C.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=i,this.unit=r||(C.cssNumber[n]?"":"px")},cur:function(){var e=st.propHooks[this.prop];return e&&e.get?e.get(this):st.propHooks._default.get(this)},run:function(e){var t,n=st.propHooks[this.prop];return this.options.duration?this.pos=t=C.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):st.propHooks._default.set(this),this}},st.prototype.init.prototype=st.prototype,st.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=C.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){C.fx.step[e.prop]?C.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[C.cssProps[e.prop]]&&!C.cssHooks[e.prop]?e.elem[e.prop]=e.now:C.style(e.elem,e.prop,e.now+e.unit)}}},st.propHooks.scrollTop=st.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},C.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},C.fx=st.prototype.init,C.fx.step={};var at,lt,ct,dt,ut=/^(?:toggle|show|hide)$/,pt=/queueHooks$/;function ft(){lt&&(!1===S.hidden&&k.requestAnimationFrame?k.requestAnimationFrame(ft):k.setTimeout(ft,C.fx.interval),C.fx.tick())}function ht(){return k.setTimeout(function(){at=void 0}),at=Date.now()}function vt(e,t){var n,i=0,o={height:e};for(t=t?1:0;i<4;i+=2-t)o["margin"+(n=ie[i])]=o["padding"+n]=e;return t&&(o.opacity=o.width=e),o}function gt(e,t,n){for(var i,o=(yt.tweeners[t]||[]).concat(yt.tweeners["*"]),r=0,s=o.length;r<s;r++)if(i=o[r].call(n,t,e))return i}function yt(r,e,t){var n,s,i=0,o=yt.prefilters.length,a=C.Deferred().always(function(){delete l.elem}),l=function(){if(s)return!1;for(var e=at||ht(),t=Math.max(0,c.startTime+c.duration-e),n=1-(t/c.duration||0),i=0,o=c.tweens.length;i<o;i++)c.tweens[i].run(n);return a.notifyWith(r,[c,n,t]),n<1&&o?t:(o||a.notifyWith(r,[c,1,0]),a.resolveWith(r,[c]),!1)},c=a.promise({elem:r,props:C.extend({},e),opts:C.extend(!0,{specialEasing:{},easing:C.easing._default},t),originalProperties:e,originalOptions:t,startTime:at||ht(),duration:t.duration,tweens:[],createTween:function(e,t){var n=C.Tween(r,c.opts,e,t,c.opts.specialEasing[e]||c.opts.easing);return c.tweens.push(n),n},stop:function(e){var t=0,n=e?c.tweens.length:0;if(s)return this;for(s=!0;t<n;t++)c.tweens[t].run(1);return e?(a.notifyWith(r,[c,1,0]),a.resolveWith(r,[c,e])):a.rejectWith(r,[c,e]),this}}),d=c.props;for(function(e,t){var n,i,o,r,s;for(n in e)if(o=t[i=_(n)],r=e[n],Array.isArray(r)&&(o=r[1],r=e[n]=r[0]),n!==i&&(e[i]=r,delete e[n]),(s=C.cssHooks[i])&&"expand"in s)for(n in r=s.expand(r),delete e[i],r)n in e||(e[n]=r[n],t[n]=o);else t[i]=o}(d,c.opts.specialEasing);i<o;i++)if(n=yt.prefilters[i].call(c,r,d,c.opts))return w(n.stop)&&(C._queueHooks(c.elem,c.opts.queue).stop=n.stop.bind(n)),n;return C.map(d,gt,c),w(c.opts.start)&&c.opts.start.call(r,c),c.progress(c.opts.progress).done(c.opts.done,c.opts.complete).fail(c.opts.fail).always(c.opts.always),C.fx.timer(C.extend(l,{elem:r,anim:c,queue:c.opts.queue})),c}C.Animation=C.extend(yt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return re(n.elem,e,ne.exec(t),n),n}]},tweener:function(e,t){for(var n,i=0,o=(e=w(e)?(t=e,["*"]):e.match(P)).length;i<o;i++)n=e[i],yt.tweeners[n]=yt.tweeners[n]||[],yt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var i,o,r,s,a,l,c,d,u="width"in t||"height"in t,p=this,f={},h=e.style,v=e.nodeType&&oe(e),g=G.get(e,"fxshow");for(i in n.queue||(null==(s=C._queueHooks(e,"fx")).unqueued&&(s.unqueued=0,a=s.empty.fire,s.empty.fire=function(){s.unqueued||a()}),s.unqueued++,p.always(function(){p.always(function(){s.unqueued--,C.queue(e,"fx").length||s.empty.fire()})})),t)if(o=t[i],ut.test(o)){if(delete t[i],r=r||"toggle"===o,o===(v?"hide":"show")){if("show"!==o||!g||void 0===g[i])continue;v=!0}f[i]=g&&g[i]||C.style(e,i)}if((l=!C.isEmptyObject(t))||!C.isEmptyObject(f))for(i in u&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(c=g&&g.display)&&(c=G.get(e,"display")),"none"===(d=C.css(e,"display"))&&(c?d=c:(ae([e],!0),c=e.style.display||c,d=C.css(e,"display"),ae([e]))),("inline"===d||"inline-block"===d&&null!=c)&&"none"===C.css(e,"float")&&(l||(p.done(function(){h.display=c}),null==c&&(d=h.display,c="none"===d?"":d)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),l=!1,f)l||(g?"hidden"in g&&(v=g.hidden):g=G.access(e,"fxshow",{display:c}),r&&(g.hidden=!v),v&&ae([e],!0),p.done(function(){for(i in v||ae([e]),G.remove(e,"fxshow"),f)C.style(e,i,f[i])})),l=gt(v?g[i]:0,i,p),i in g||(g[i]=l.start,v&&(l.end=l.start,l.start=0))}],prefilter:function(e,t){t?yt.prefilters.unshift(e):yt.prefilters.push(e)}}),C.speed=function(e,t,n){var i=e&&"object"==typeof e?C.extend({},e):{complete:n||!n&&t||w(e)&&e,duration:e,easing:n&&t||t&&!w(t)&&t};return C.fx.off?i.duration=0:"number"!=typeof i.duration&&(i.duration in C.fx.speeds?i.duration=C.fx.speeds[i.duration]:i.duration=C.fx.speeds._default),null!=i.queue&&!0!==i.queue||(i.queue="fx"),i.old=i.complete,i.complete=function(){w(i.old)&&i.old.call(this),i.queue&&C.dequeue(this,i.queue)},i},C.fn.extend({fadeTo:function(e,t,n,i){return this.filter(oe).css("opacity",0).show().end().animate({opacity:t},e,n,i)},animate:function(t,e,n,i){function o(){var e=yt(this,C.extend({},t),s);(r||G.get(this,"finish"))&&e.stop(!0)}var r=C.isEmptyObject(t),s=C.speed(e,n,i);return o.finish=o,r||!1===s.queue?this.each(o):this.queue(s.queue,o)},stop:function(o,e,r){function s(e){var t=e.stop;delete e.stop,t(r)}return"string"!=typeof o&&(r=e,e=o,o=void 0),e&&!1!==o&&this.queue(o||"fx",[]),this.each(function(){var e=!0,t=null!=o&&o+"queueHooks",n=C.timers,i=G.get(this);if(t)i[t]&&i[t].stop&&s(i[t]);else for(t in i)i[t]&&i[t].stop&&pt.test(t)&&s(i[t]);for(t=n.length;t--;)n[t].elem!==this||null!=o&&n[t].queue!==o||(n[t].anim.stop(r),e=!1,n.splice(t,1));!e&&r||C.dequeue(this,o)})},finish:function(s){return!1!==s&&(s=s||"fx"),this.each(function(){var e,t=G.get(this),n=t[s+"queue"],i=t[s+"queueHooks"],o=C.timers,r=n?n.length:0;for(t.finish=!0,C.queue(this,s,[]),i&&i.stop&&i.stop.call(this,!0),e=o.length;e--;)o[e].elem===this&&o[e].queue===s&&(o[e].anim.stop(!0),o.splice(e,1));for(e=0;e<r;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),C.each(["toggle","show","hide"],function(e,i){var o=C.fn[i];C.fn[i]=function(e,t,n){return null==e||"boolean"==typeof e?o.apply(this,arguments):this.animate(vt(i,!0),e,t,n)}}),C.each({slideDown:vt("show"),slideUp:vt("hide"),slideToggle:vt("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,i){C.fn[e]=function(e,t,n){return this.animate(i,e,t,n)}}),C.timers=[],C.fx.tick=function(){var e,t=0,n=C.timers;for(at=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||C.fx.stop(),at=void 0},C.fx.timer=function(e){C.timers.push(e),C.fx.start()},C.fx.interval=13,C.fx.start=function(){lt||(lt=!0,ft())},C.fx.stop=function(){lt=null},C.fx.speeds={slow:600,fast:200,_default:400},C.fn.delay=function(i,e){return i=C.fx&&C.fx.speeds[i]||i,e=e||"fx",this.queue(e,function(e,t){var n=k.setTimeout(e,i);t.stop=function(){k.clearTimeout(n)}})},ct=S.createElement("input"),dt=S.createElement("select").appendChild(S.createElement("option")),ct.type="checkbox",m.checkOn=""!==ct.value,m.optSelected=dt.selected,(ct=S.createElement("input")).value="t",ct.type="radio",m.radioValue="t"===ct.value;var mt,wt=C.expr.attrHandle;C.fn.extend({attr:function(e,t){return F(this,C.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){C.removeAttr(this,e)})}}),C.extend({attr:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return void 0===e.getAttribute?C.prop(e,t,n):(1===r&&C.isXMLDoc(e)||(o=C.attrHooks[t.toLowerCase()]||(C.expr.match.bool.test(t)?mt:void 0)),void 0!==n?null===n?void C.removeAttr(e,t):o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:(e.setAttribute(t,n+""),n):!(o&&"get"in o&&null!==(i=o.get(e,t)))&&null==(i=C.find.attr(e,t))?void 0:i)},attrHooks:{type:{set:function(e,t){if(!m.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,i=0,o=t&&t.match(P);if(o&&1===e.nodeType)for(;n=o[i++];)e.removeAttribute(n)}}),mt={set:function(e,t,n){return!1===t?C.removeAttr(e,n):e.setAttribute(n,n),n}},C.each(C.expr.match.bool.source.match(/\w+/g),function(e,t){var s=wt[t]||C.find.attr;wt[t]=function(e,t,n){var i,o,r=t.toLowerCase();return n||(o=wt[r],wt[r]=i,i=null!=s(e,t,n)?r:null,wt[r]=o),i}});var bt=/^(?:input|select|textarea|button)$/i,xt=/^(?:a|area)$/i;function Tt(e){return(e.match(P)||[]).join(" ")}function kt(e){return e.getAttribute&&e.getAttribute("class")||""}function St(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}C.fn.extend({prop:function(e,t){return F(this,C.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[C.propFix[e]||e]})}}),C.extend({prop:function(e,t,n){var i,o,r=e.nodeType;if(3!==r&&8!==r&&2!==r)return 1===r&&C.isXMLDoc(e)||(t=C.propFix[t]||t,o=C.propHooks[t]),void 0!==n?o&&"set"in o&&void 0!==(i=o.set(e,n,t))?i:e[t]=n:o&&"get"in o&&null!==(i=o.get(e,t))?i:e[t]},propHooks:{tabIndex:{get:function(e){var t=C.find.attr(e,"tabindex");return t?parseInt(t,10):bt.test(e.nodeName)||xt.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),m.optSelected||(C.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),C.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){C.propFix[this.toLowerCase()]=this}),C.fn.extend({addClass:function(t){var e,n,i,o,r,s,a,l=0;if(w(t))return this.each(function(e){C(this).addClass(t.call(this,e,kt(this)))});if((e=St(t)).length)for(;n=this[l++];)if(o=kt(n),i=1===n.nodeType&&" "+Tt(o)+" "){for(s=0;r=e[s++];)i.indexOf(" "+r+" ")<0&&(i+=r+" ");o!==(a=Tt(i))&&n.setAttribute("class",a)}return this},removeClass:function(t){var e,n,i,o,r,s,a,l=0;if(w(t))return this.each(function(e){C(this).removeClass(t.call(this,e,kt(this)))});if(!arguments.length)return this.attr("class","");if((e=St(t)).length)for(;n=this[l++];)if(o=kt(n),i=1===n.nodeType&&" "+Tt(o)+" "){for(s=0;r=e[s++];)for(;-1<i.indexOf(" "+r+" ");)i=i.replace(" "+r+" "," ");o!==(a=Tt(i))&&n.setAttribute("class",a)}return this},toggleClass:function(o,t){var r=typeof o,s="string"==r||Array.isArray(o);return"boolean"==typeof t&&s?t?this.addClass(o):this.removeClass(o):w(o)?this.each(function(e){C(this).toggleClass(o.call(this,e,kt(this),t),t)}):this.each(function(){var e,t,n,i;if(s)for(t=0,n=C(this),i=St(o);e=i[t++];)n.hasClass(e)?n.removeClass(e):n.addClass(e);else void 0!==o&&"boolean"!=r||((e=kt(this))&&G.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",!e&&!1!==o&&G.get(this,"__className__")||""))})},hasClass:function(e){for(var t,n=0,i=" "+e+" ";t=this[n++];)if(1===t.nodeType&&-1<(" "+Tt(kt(t))+" ").indexOf(i))return!0;return!1}});var Ct=/\r/g;C.fn.extend({val:function(n){var i,e,o,t=this[0];return arguments.length?(o=w(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=o?n.call(this,e,C(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=C.map(t,function(e){return null==e?"":e+""})),(i=C.valHooks[this.type]||C.valHooks[this.nodeName.toLowerCase()])&&"set"in i&&void 0!==i.set(this,t,"value")||(this.value=t))})):t?(i=C.valHooks[t.type]||C.valHooks[t.nodeName.toLowerCase()])&&"get"in i&&void 0!==(e=i.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(Ct,""):null==e?"":e:void 0}}),C.extend({valHooks:{option:{get:function(e){var t=C.find.attr(e,"value");return null!=t?t:Tt(C.text(e))}},select:{get:function(e){for(var t,n,i=e.options,o=e.selectedIndex,r="select-one"===e.type,s=r?null:[],a=r?o+1:i.length,l=o<0?a:r?o:0;l<a;l++)if(((n=i[l]).selected||l===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=C(n).val(),r)return t;s.push(t)}return s},set:function(e,t){for(var n,i,o=e.options,r=C.makeArray(t),s=o.length;s--;)((i=o[s]).selected=-1<C.inArray(C.valHooks.option.get(i),r))&&(n=!0);return n||(e.selectedIndex=-1),r}}}}),C.each(["radio","checkbox"],function(){C.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<C.inArray(C(e).val(),t)}},m.checkOn||(C.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),m.focusin="onfocusin"in k;function $t(e){e.stopPropagation()}var At=/^(?:focusinfocus|focusoutblur)$/;C.extend(C.event,{trigger:function(e,t,n,i){var o,r,s,a,l,c,d,u=[n||S],p=y.call(e,"type")?e.type:e,f=y.call(e,"namespace")?e.namespace.split("."):[],h=d=r=n=n||S;if(3!==n.nodeType&&8!==n.nodeType&&!At.test(p+C.event.triggered)&&(-1<p.indexOf(".")&&(p=(f=p.split(".")).shift(),f.sort()),a=p.indexOf(":")<0&&"on"+p,(e=e[C.expando]?e:new C.Event(p,"object"==typeof e&&e)).isTrigger=i?2:3,e.namespace=f.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+f.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:C.makeArray(t,[e]),c=C.event.special[p]||{},i||!c.trigger||!1!==c.trigger.apply(n,t))){if(!i&&!c.noBubble&&!v(n)){for(s=c.delegateType||p,At.test(s+p)||(h=h.parentNode);h;h=h.parentNode)u.push(h),r=h;r===(n.ownerDocument||S)&&u.push(r.defaultView||r.parentWindow||k)}for(o=0;(h=u[o++])&&!e.isPropagationStopped();)d=h,e.type=1<o?s:c.bindType||p,(l=(G.get(h,"events")||{})[e.type]&&G.get(h,"handle"))&&l.apply(h,t),(l=a&&h[a])&&l.apply&&Y(h)&&(e.result=l.apply(h,t),!1===e.result&&e.preventDefault());return e.type=p,i||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(u.pop(),t)||!Y(n)||a&&w(n[p])&&!v(n)&&((r=n[a])&&(n[a]=null),C.event.triggered=p,e.isPropagationStopped()&&d.addEventListener(p,$t),n[p](),e.isPropagationStopped()&&d.removeEventListener(p,$t),C.event.triggered=void 0,r&&(n[a]=r)),e.result}},simulate:function(e,t,n){var i=C.extend(new C.Event,n,{type:e,isSimulated:!0});C.event.trigger(i,null,t)}}),C.fn.extend({trigger:function(e,t){return this.each(function(){C.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return C.event.trigger(e,t,n,!0)}}),m.focusin||C.each({focus:"focusin",blur:"focusout"},function(n,i){function o(e){C.event.simulate(i,e.target,C.event.fix(e))}C.event.special[i]={setup:function(){var e=this.ownerDocument||this,t=G.access(e,i);t||e.addEventListener(n,o,!0),G.access(e,i,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this,t=G.access(e,i)-1;t?G.access(e,i,t):(e.removeEventListener(n,o,!0),G.remove(e,i))}}});var Et=k.location,Dt=Date.now(),jt=/\?/;C.parseXML=function(e){var t;if(!e||"string"!=typeof e)return null;try{t=(new k.DOMParser).parseFromString(e,"text/xml")}catch(e){t=void 0}return t&&!t.getElementsByTagName("parsererror").length||C.error("Invalid XML: "+e),t};var Ht=/\[\]$/,Nt=/\r?\n/g,Lt=/^(?:submit|button|image|reset|file)$/i,Ot=/^(?:input|select|textarea|keygen)/i;C.param=function(e,t){function n(e,t){var n=w(t)?t():t;o[o.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)}var i,o=[];if(Array.isArray(e)||e.jquery&&!C.isPlainObject(e))C.each(e,function(){n(this.name,this.value)});else for(i in e)!function n(i,e,o,r){var t;if(Array.isArray(e))C.each(e,function(e,t){o||Ht.test(i)?r(i,t):n(i+"["+("object"==typeof t&&null!=t?e:"")+"]",t,o,r)});else if(o||"object"!==x(e))r(i,e);else for(t in e)n(i+"["+t+"]",e[t],o,r)}(i,e[i],t,n);return o.join("&")},C.fn.extend({serialize:function(){return C.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=C.prop(this,"elements");return e?C.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!C(this).is(":disabled")&&Ot.test(this.nodeName)&&!Lt.test(e)&&(this.checked||!le.test(e))}).map(function(e,t){var n=C(this).val();return null==n?null:Array.isArray(n)?C.map(n,function(e){return{name:t.name,value:e.replace(Nt,"\r\n")}}):{name:t.name,value:n.replace(Nt,"\r\n")}}).get()}});var Pt=/%20/g,qt=/#.*$/,Mt=/([?&])_=[^&]*/,It=/^(.*?):[ \t]*([^\r\n]*)$/gm,zt=/^(?:GET|HEAD)$/,Wt=/^\/\//,Rt={},Ft={},Bt="*/".concat("*"),Ut=S.createElement("a");function Xt(r){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,i=0,o=e.toLowerCase().match(P)||[];if(w(t))for(;n=o[i++];)"+"===n[0]?(n=n.slice(1)||"*",(r[n]=r[n]||[]).unshift(t)):(r[n]=r[n]||[]).push(t)}}function _t(t,o,r,s){var a={},l=t===Ft;function c(e){var i;return a[e]=!0,C.each(t[e]||[],function(e,t){var n=t(o,r,s);return"string"!=typeof n||l||a[n]?l?!(i=n):void 0:(o.dataTypes.unshift(n),c(n),!1)}),i}return c(o.dataTypes[0])||!a["*"]&&c("*")}function Yt(e,t){var n,i,o=C.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((o[n]?e:i=i||{})[n]=t[n]);return i&&C.extend(!0,e,i),e}Ut.href=Et.href,C.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Et.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(Et.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Bt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":C.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Yt(Yt(e,C.ajaxSettings),t):Yt(C.ajaxSettings,e)},ajaxPrefilter:Xt(Rt),ajaxTransport:Xt(Ft),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var d,u,p,n,f,i,h,v,o,r,g=C.ajaxSetup({},t),y=g.context||g,m=g.context&&(y.nodeType||y.jquery)?C(y):C.event,w=C.Deferred(),b=C.Callbacks("once memory"),x=g.statusCode||{},s={},a={},l="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n)for(n={};t=It.exec(p);)n[t[1].toLowerCase()]=t[2];t=n[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=a[e.toLowerCase()]=a[e.toLowerCase()]||e,s[e]=t),this},overrideMimeType:function(e){return null==h&&(g.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||l;return d&&d.abort(t),c(0,t),this}};if(w.promise(T),g.url=((e||g.url||Et.href)+"").replace(Wt,Et.protocol+"//"),g.type=t.method||t.type||g.method||g.type,g.dataTypes=(g.dataType||"*").toLowerCase().match(P)||[""],null==g.crossDomain){i=S.createElement("a");try{i.href=g.url,i.href=i.href,g.crossDomain=Ut.protocol+"//"+Ut.host!=i.protocol+"//"+i.host}catch(e){g.crossDomain=!0}}if(g.data&&g.processData&&"string"!=typeof g.data&&(g.data=C.param(g.data,g.traditional)),_t(Rt,g,t,T),h)return T;for(o in(v=C.event&&g.global)&&0==C.active++&&C.event.trigger("ajaxStart"),g.type=g.type.toUpperCase(),g.hasContent=!zt.test(g.type),u=g.url.replace(qt,""),g.hasContent?g.data&&g.processData&&0===(g.contentType||"").indexOf("application/x-www-form-urlencoded")&&(g.data=g.data.replace(Pt,"+")):(r=g.url.slice(u.length),g.data&&(g.processData||"string"==typeof g.data)&&(u+=(jt.test(u)?"&":"?")+g.data,delete g.data),!1===g.cache&&(u=u.replace(Mt,"$1"),r=(jt.test(u)?"&":"?")+"_="+Dt+++r),g.url=u+r),g.ifModified&&(C.lastModified[u]&&T.setRequestHeader("If-Modified-Since",C.lastModified[u]),C.etag[u]&&T.setRequestHeader("If-None-Match",C.etag[u])),(g.data&&g.hasContent&&!1!==g.contentType||t.contentType)&&T.setRequestHeader("Content-Type",g.contentType),T.setRequestHeader("Accept",g.dataTypes[0]&&g.accepts[g.dataTypes[0]]?g.accepts[g.dataTypes[0]]+("*"!==g.dataTypes[0]?", "+Bt+"; q=0.01":""):g.accepts["*"]),g.headers)T.setRequestHeader(o,g.headers[o]);if(g.beforeSend&&(!1===g.beforeSend.call(y,T,g)||h))return T.abort();if(l="abort",b.add(g.complete),T.done(g.success),T.fail(g.error),d=_t(Ft,g,t,T)){if(T.readyState=1,v&&m.trigger("ajaxSend",[T,g]),h)return T;g.async&&0<g.timeout&&(f=k.setTimeout(function(){T.abort("timeout")},g.timeout));try{h=!1,d.send(s,c)}catch(e){if(h)throw e;c(-1,e)}}else c(-1,"No Transport");function c(e,t,n,i){var o,r,s,a,l,c=t;h||(h=!0,f&&k.clearTimeout(f),d=void 0,p=i||"",T.readyState=0<e?4:0,o=200<=e&&e<300||304===e,n&&(a=function(e,t,n){for(var i,o,r,s,a=e.contents,l=e.dataTypes;"*"===l[0];)l.shift(),void 0===i&&(i=e.mimeType||t.getResponseHeader("Content-Type"));if(i)for(o in a)if(a[o]&&a[o].test(i)){l.unshift(o);break}if(l[0]in n)r=l[0];else{for(o in n){if(!l[0]||e.converters[o+" "+l[0]]){r=o;break}s=s||o}r=r||s}if(r)return r!==l[0]&&l.unshift(r),n[r]}(g,T,n)),a=function(e,t,n,i){var o,r,s,a,l,c={},d=e.dataTypes.slice();if(d[1])for(s in e.converters)c[s.toLowerCase()]=e.converters[s];for(r=d.shift();r;)if(e.responseFields[r]&&(n[e.responseFields[r]]=t),!l&&i&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),l=r,r=d.shift())if("*"===r)r=l;else if("*"!==l&&l!==r){if(!(s=c[l+" "+r]||c["* "+r]))for(o in c)if((a=o.split(" "))[1]===r&&(s=c[l+" "+a[0]]||c["* "+a[0]])){!0===s?s=c[o]:!0!==c[o]&&(r=a[0],d.unshift(a[1]));break}if(!0!==s)if(s&&e.throws)t=s(t);else try{t=s(t)}catch(e){return{state:"parsererror",error:s?e:"No conversion from "+l+" to "+r}}}return{state:"success",data:t}}(g,a,T,o),o?(g.ifModified&&((l=T.getResponseHeader("Last-Modified"))&&(C.lastModified[u]=l),(l=T.getResponseHeader("etag"))&&(C.etag[u]=l)),204===e||"HEAD"===g.type?c="nocontent":304===e?c="notmodified":(c=a.state,r=a.data,o=!(s=a.error))):(s=c,!e&&c||(c="error",e<0&&(e=0))),T.status=e,T.statusText=(t||c)+"",o?w.resolveWith(y,[r,c,T]):w.rejectWith(y,[T,c,s]),T.statusCode(x),x=void 0,v&&m.trigger(o?"ajaxSuccess":"ajaxError",[T,g,o?r:s]),b.fireWith(y,[T,c]),v&&(m.trigger("ajaxComplete",[T,g]),--C.active||C.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return C.get(e,t,n,"json")},getScript:function(e,t){return C.get(e,void 0,t,"script")}}),C.each(["get","post"],function(e,o){C[o]=function(e,t,n,i){return w(t)&&(i=i||n,n=t,t=void 0),C.ajax(C.extend({url:e,type:o,dataType:i,data:t,success:n},C.isPlainObject(e)&&e))}}),C._evalUrl=function(e){return C.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,throws:!0})},C.fn.extend({wrapAll:function(e){var t;return this[0]&&(w(e)&&(e=e.call(this[0])),t=C(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){for(var e=this;e.firstElementChild;)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return w(n)?this.each(function(e){C(this).wrapInner(n.call(this,e))}):this.each(function(){var e=C(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=w(t);return this.each(function(e){C(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){C(this).replaceWith(this.childNodes)}),this}}),C.expr.pseudos.hidden=function(e){return!C.expr.pseudos.visible(e)},C.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},C.ajaxSettings.xhr=function(){try{return new k.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=C.ajaxSettings.xhr();m.cors=!!Gt&&"withCredentials"in Gt,m.ajax=Gt=!!Gt,C.ajaxTransport(function(o){var r,s;if(m.cors||Gt&&!o.crossDomain)return{send:function(e,t){var n,i=o.xhr();if(i.open(o.type,o.url,o.async,o.username,o.password),o.xhrFields)for(n in o.xhrFields)i[n]=o.xhrFields[n];for(n in o.mimeType&&i.overrideMimeType&&i.overrideMimeType(o.mimeType),o.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)i.setRequestHeader(n,e[n]);r=function(e){return function(){r&&(r=s=i.onload=i.onerror=i.onabort=i.ontimeout=i.onreadystatechange=null,"abort"===e?i.abort():"error"===e?"number"!=typeof i.status?t(0,"error"):t(i.status,i.statusText):t(Vt[i.status]||i.status,i.statusText,"text"!==(i.responseType||"text")||"string"!=typeof i.responseText?{binary:i.response}:{text:i.responseText},i.getAllResponseHeaders()))}},i.onload=r(),s=i.onerror=i.ontimeout=r("error"),void 0!==i.onabort?i.onabort=s:i.onreadystatechange=function(){4===i.readyState&&k.setTimeout(function(){r&&s()})},r=r("abort");try{i.send(o.hasContent&&o.data||null)}catch(e){if(r)throw e}},abort:function(){r&&r()}}}),C.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),C.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return C.globalEval(e),e}}}),C.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),C.ajaxTransport("script",function(n){var i,o;if(n.crossDomain)return{send:function(e,t){i=C("<script>").prop({charset:n.scriptCharset,src:n.url}).on("load error",o=function(e){i.remove(),o=null,e&&t("error"===e.type?404:200,e.type)}),S.head.appendChild(i[0])},abort:function(){o&&o()}}});var Qt,Jt=[],Kt=/(=)\?(?=&|$)|\?\?/;C.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Jt.pop()||C.expando+"_"+Dt++;return this[e]=!0,e}}),C.ajaxPrefilter("json jsonp",function(e,t,n){var i,o,r,s=!1!==e.jsonp&&(Kt.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kt.test(e.data)&&"data");if(s||"jsonp"===e.dataTypes[0])return i=e.jsonpCallback=w(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,s?e[s]=e[s].replace(Kt,"$1"+i):!1!==e.jsonp&&(e.url+=(jt.test(e.url)?"&":"?")+e.jsonp+"="+i),e.converters["script json"]=function(){return r||C.error(i+" was not called"),r[0]},e.dataTypes[0]="json",o=k[i],k[i]=function(){r=arguments},n.always(function(){void 0===o?C(k).removeProp(i):k[i]=o,e[i]&&(e.jsonpCallback=t.jsonpCallback,Jt.push(i)),r&&w(o)&&o(r[0]),r=o=void 0}),"script"}),m.createHTMLDocument=((Qt=S.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===Qt.childNodes.length),C.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(m.createHTMLDocument?((i=(t=S.implementation.createHTMLDocument("")).createElement("base")).href=S.location.href,t.head.appendChild(i)):t=S),r=!n&&[],(o=E.exec(e))?[t.createElement(o[1])]:(o=ye([e],t,r),r&&r.length&&C(r).remove(),C.merge([],o.childNodes)));var i,o,r},C.fn.load=function(e,t,n){var i,o,r,s=this,a=e.indexOf(" ");return-1<a&&(i=Tt(e.slice(a)),e=e.slice(0,a)),w(t)?(n=t,t=void 0):t&&"object"==typeof t&&(o="POST"),0<s.length&&C.ajax({url:e,type:o||"GET",dataType:"html",data:t}).done(function(e){r=arguments,s.html(i?C("<div>").append(C.parseHTML(e)).find(i):e)}).always(n&&function(e,t){s.each(function(){n.apply(this,r||[e.responseText,t,e])})}),this},C.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){C.fn[t]=function(e){return this.on(t,e)}}),C.expr.pseudos.animated=function(t){return C.grep(C.timers,function(e){return t===e.elem}).length},C.offset={setOffset:function(e,t,n){var i,o,r,s,a,l,c=C.css(e,"position"),d=C(e),u={};"static"===c&&(e.style.position="relative"),a=d.offset(),r=C.css(e,"top"),l=C.css(e,"left"),o=("absolute"===c||"fixed"===c)&&-1<(r+l).indexOf("auto")?(s=(i=d.position()).top,i.left):(s=parseFloat(r)||0,parseFloat(l)||0),w(t)&&(t=t.call(e,n,C.extend({},a))),null!=t.top&&(u.top=t.top-a.top+s),null!=t.left&&(u.left=t.left-a.left+o),"using"in t?t.using.call(e,u):d.css(u)}},C.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){C.offset.setOffset(this,t,e)});var e,n,i=this[0];return i?i.getClientRects().length?(e=i.getBoundingClientRect(),n=i.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,i=this[0],o={top:0,left:0};if("fixed"===C.css(i,"position"))t=i.getBoundingClientRect();else{for(t=this.offset(),n=i.ownerDocument,e=i.offsetParent||n.documentElement;e&&(e===n.body||e===n.documentElement)&&"static"===C.css(e,"position");)e=e.parentNode;e&&e!==i&&1===e.nodeType&&((o=C(e).offset()).top+=C.css(e,"borderTopWidth",!0),o.left+=C.css(e,"borderLeftWidth",!0))}return{top:t.top-o.top-C.css(i,"marginTop",!0),left:t.left-o.left-C.css(i,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){for(var e=this.offsetParent;e&&"static"===C.css(e,"position");)e=e.offsetParent;return e||me})}}),C.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,o){var r="pageYOffset"===o;C.fn[t]=function(e){return F(this,function(e,t,n){var i;return v(e)?i=e:9===e.nodeType&&(i=e.defaultView),void 0===n?i?i[o]:e[t]:void(i?i.scrollTo(r?i.pageXOffset:n,r?n:i.pageYOffset):e[t]=n)},t,e,arguments.length)}}),C.each(["top","left"],function(e,n){C.cssHooks[n]=Ge(m.pixelPosition,function(e,t){if(t)return t=Ve(e,n),Be.test(t)?C(e).position()[n]+"px":t})}),C.each({Height:"height",Width:"width"},function(s,a){C.each({padding:"inner"+s,content:a,"":"outer"+s},function(i,r){C.fn[r]=function(e,t){var n=arguments.length&&(i||"boolean"!=typeof e),o=i||(!0===e||!0===t?"margin":"border");return F(this,function(e,t,n){var i;return v(e)?0===r.indexOf("outer")?e["inner"+s]:e.document.documentElement["client"+s]:9===e.nodeType?(i=e.documentElement,Math.max(e.body["scroll"+s],i["scroll"+s],e.body["offset"+s],i["offset"+s],i["client"+s])):void 0===n?C.css(e,t,o):C.style(e,t,n,o)},a,n?e:void 0,n)}})}),C.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){C.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}}),C.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),C.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,i){return this.on(t,e,n,i)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),C.proxy=function(e,t){var n,i,o;if("string"==typeof t&&(n=e[t],t=e,e=n),w(e))return i=a.call(arguments,2),(o=function(){return e.apply(t||this,i.concat(a.call(arguments)))}).guid=e.guid=e.guid||C.guid++,o},C.holdReady=function(e){e?C.readyWait++:C.ready(!0)},C.isArray=Array.isArray,C.parseJSON=JSON.parse,C.nodeName=A,C.isFunction=w,C.isWindow=v,C.camelCase=_,C.type=x,C.now=Date.now,C.isNumeric=function(e){var t=C.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return C});var Zt=k.jQuery,en=k.$;return C.noConflict=function(e){return k.$===C&&(k.$=en),e&&k.jQuery===C&&(k.jQuery=Zt),C},e||(k.jQuery=k.$=C),C}),function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"undefined"!=typeof exports?module.exports=e(require("jquery")):e(jQuery)}(function(c){"use strict";var o,s=window.Slick||{};o=0,(s=function(e,t){var n,i=this;i.defaults={accessibility:!0,adaptiveHeight:!1,appendArrows:c(e),appendDots:c(e),arrows:!0,asNavFor:null,prevArrow:'<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',nextArrow:'<button class="slick-next" aria-label="Next" type="button">Next</button>',autoplay:!1,autoplaySpeed:3e3,centerMode:!1,centerPadding:"50px",cssEase:"ease",customPaging:function(e,t){return c('<button type="button" />').text(t+1)},dots:!1,dotsClass:"slick-dots",draggable:!0,easing:"linear",edgeFriction:.35,fade:!1,focusOnSelect:!1,focusOnChange:!1,infinite:!0,initialSlide:0,lazyLoad:"ondemand",mobileFirst:!1,pauseOnHover:!0,pauseOnFocus:!0,pauseOnDotsHover:!1,respondTo:"window",responsive:null,rows:1,rtl:!1,slide:"",slidesPerRow:1,slidesToShow:1,slidesToScroll:1,speed:500,swipe:!0,swipeToSlide:!1,touchMove:!0,touchThreshold:5,useCSS:!0,useTransform:!0,variableWidth:!1,vertical:!1,verticalSwiping:!1,waitForAnimate:!0,zIndex:1e3},i.initials={animating:!1,dragging:!1,autoPlayTimer:null,currentDirection:0,currentLeft:null,currentSlide:0,direction:1,$dots:null,listWidth:null,listHeight:null,loadIndex:0,$nextArrow:null,$prevArrow:null,scrolling:!1,slideCount:null,slideWidth:null,$slideTrack:null,$slides:null,sliding:!1,slideOffset:0,swipeLeft:null,swiping:!1,$list:null,touchObject:{},transformsEnabled:!1,unslicked:!1},c.extend(i,i.initials),i.activeBreakpoint=null,i.animType=null,i.animProp=null,i.breakpoints=[],i.breakpointSettings=[],i.cssTransitions=!1,i.focussed=!1,i.interrupted=!1,i.hidden="hidden",i.paused=!0,i.positionProp=null,i.respondTo=null,i.rowCount=1,i.shouldClick=!0,i.$slider=c(e),i.$slidesCache=null,i.transformType=null,i.transitionType=null,i.visibilityChange="visibilitychange",i.windowWidth=0,i.windowTimer=null,n=c(e).data("slick")||{},i.options=c.extend({},i.defaults,t,n),i.currentSlide=i.options.initialSlide,i.originalSettings=i.options,void 0!==document.mozHidden?(i.hidden="mozHidden",i.visibilityChange="mozvisibilitychange"):void 0!==document.webkitHidden&&(i.hidden="webkitHidden",i.visibilityChange="webkitvisibilitychange"),i.autoPlay=c.proxy(i.autoPlay,i),i.autoPlayClear=c.proxy(i.autoPlayClear,i),i.autoPlayIterator=c.proxy(i.autoPlayIterator,i),i.changeSlide=c.proxy(i.changeSlide,i),i.clickHandler=c.proxy(i.clickHandler,i),i.selectHandler=c.proxy(i.selectHandler,i),i.setPosition=c.proxy(i.setPosition,i),i.swipeHandler=c.proxy(i.swipeHandler,i),i.dragHandler=c.proxy(i.dragHandler,i),i.keyHandler=c.proxy(i.keyHandler,i),i.instanceUid=o++,i.htmlExpr=/^(?:\s*(<[\w\W]+>)[^>]*)$/,i.registerBreakpoints(),i.init(!0)}).prototype.activateADA=function(){this.$slideTrack.find(".slick-active").attr({"aria-hidden":"false"}).find("a, input, button, select").attr({tabindex:"0"})},s.prototype.addSlide=s.prototype.slickAdd=function(e,t,n){var i=this;if("boolean"==typeof t)n=t,t=null;else if(t<0||t>=i.slideCount)return!1;i.unload(),"number"==typeof t?0===t&&0===i.$slides.length?c(e).appendTo(i.$slideTrack):n?c(e).insertBefore(i.$slides.eq(t)):c(e).insertAfter(i.$slides.eq(t)):!0===n?c(e).prependTo(i.$slideTrack):c(e).appendTo(i.$slideTrack),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slides.each(function(e,t){c(t).attr("data-slick-index",e)}),i.$slidesCache=i.$slides,i.reinit()},s.prototype.animateHeight=function(){var e,t=this;1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical&&(e=t.$slides.eq(t.currentSlide).outerHeight(!0),t.$list.animate({height:e},t.options.speed))},s.prototype.animateSlide=function(e,t){var n={},i=this;i.animateHeight(),!0===i.options.rtl&&!1===i.options.vertical&&(e=-e),!1===i.transformsEnabled?!1===i.options.vertical?i.$slideTrack.animate({left:e},i.options.speed,i.options.easing,t):i.$slideTrack.animate({top:e},i.options.speed,i.options.easing,t):!1===i.cssTransitions?(!0===i.options.rtl&&(i.currentLeft=-i.currentLeft),c({animStart:i.currentLeft}).animate({animStart:e},{duration:i.options.speed,easing:i.options.easing,step:function(e){e=Math.ceil(e),!1===i.options.vertical?n[i.animType]="translate("+e+"px, 0px)":n[i.animType]="translate(0px,"+e+"px)",i.$slideTrack.css(n)},complete:function(){t&&t.call()}})):(i.applyTransition(),e=Math.ceil(e),!1===i.options.vertical?n[i.animType]="translate3d("+e+"px, 0px, 0px)":n[i.animType]="translate3d(0px,"+e+"px, 0px)",i.$slideTrack.css(n),t&&setTimeout(function(){i.disableTransition(),t.call()},i.options.speed))},s.prototype.getNavTarget=function(){var e=this.options.asNavFor;return e&&null!==e&&(e=c(e).not(this.$slider)),e},s.prototype.asNavFor=function(t){var e=this.getNavTarget();null!==e&&"object"==typeof e&&e.each(function(){var e=c(this).slick("getSlick");e.unslicked||e.slideHandler(t,!0)})},s.prototype.applyTransition=function(e){var t=this,n={};!1===t.options.fade?n[t.transitionType]=t.transformType+" "+t.options.speed+"ms "+t.options.cssEase:n[t.transitionType]="opacity "+t.options.speed+"ms "+t.options.cssEase,!1===t.options.fade?t.$slideTrack.css(n):t.$slides.eq(e).css(n)},s.prototype.autoPlay=function(){var e=this;e.autoPlayClear(),e.slideCount>e.options.slidesToShow&&(e.autoPlayTimer=setInterval(e.autoPlayIterator,e.options.autoplaySpeed))},s.prototype.autoPlayClear=function(){this.autoPlayTimer&&clearInterval(this.autoPlayTimer)},s.prototype.autoPlayIterator=function(){var e=this,t=e.currentSlide+e.options.slidesToScroll;e.paused||e.interrupted||e.focussed||(!1===e.options.infinite&&(1===e.direction&&e.currentSlide+1===e.slideCount-1?e.direction=0:0===e.direction&&(t=e.currentSlide-e.options.slidesToScroll,e.currentSlide-1==0&&(e.direction=1))),e.slideHandler(t))},s.prototype.buildArrows=function(){var e=this;!0===e.options.arrows&&(e.$prevArrow=c(e.options.prevArrow).addClass("slick-arrow"),e.$nextArrow=c(e.options.nextArrow).addClass("slick-arrow"),e.slideCount>e.options.slidesToShow?(e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"),e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.prependTo(e.options.appendArrows),e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.appendTo(e.options.appendArrows),!0!==e.options.infinite&&e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true")):e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({"aria-disabled":"true",tabindex:"-1"}))},s.prototype.buildDots=function(){var e,t,n=this;if(!0===n.options.dots){for(n.$slider.addClass("slick-dotted"),t=c("<ul />").addClass(n.options.dotsClass),e=0;e<=n.getDotCount();e+=1)t.append(c("<li />").append(n.options.customPaging.call(this,n,e)));n.$dots=t.appendTo(n.options.appendDots),n.$dots.find("li").first().addClass("slick-active")}},s.prototype.buildOut=function(){var e=this;e.$slides=e.$slider.children(e.options.slide+":not(.slick-cloned)").addClass("slick-slide"),e.slideCount=e.$slides.length,e.$slides.each(function(e,t){c(t).attr("data-slick-index",e).data("originalStyling",c(t).attr("style")||"")}),e.$slider.addClass("slick-slider"),e.$slideTrack=0===e.slideCount?c('<div class="slick-track"/>').appendTo(e.$slider):e.$slides.wrapAll('<div class="slick-track"/>').parent(),e.$list=e.$slideTrack.wrap('<div class="slick-list"/>').parent(),e.$slideTrack.css("opacity",0),!0!==e.options.centerMode&&!0!==e.options.swipeToSlide||(e.options.slidesToScroll=1),c("img[data-lazy]",e.$slider).not("[src]").addClass("slick-loading"),e.setupInfinite(),e.buildArrows(),e.buildDots(),e.updateDots(),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),!0===e.options.draggable&&e.$list.addClass("draggable")},s.prototype.buildRows=function(){var e,t,n,i=this,o=document.createDocumentFragment(),r=i.$slider.children();if(1<i.options.rows){for(n=i.options.slidesPerRow*i.options.rows,t=Math.ceil(r.length/n),e=0;e<t;e++){for(var s=document.createElement("div"),a=0;a<i.options.rows;a++){for(var l=document.createElement("div"),c=0;c<i.options.slidesPerRow;c++){var d=e*n+(a*i.options.slidesPerRow+c);r.get(d)&&l.appendChild(r.get(d))}s.appendChild(l)}o.appendChild(s)}i.$slider.empty().append(o),i.$slider.children().children().children().css({width:100/i.options.slidesPerRow+"%",display:"inline-block"})}},s.prototype.checkResponsive=function(e,t){var n,i,o,r=this,s=!1,a=r.$slider.width(),l=window.innerWidth||c(window).width();if("window"===r.respondTo?o=l:"slider"===r.respondTo?o=a:"min"===r.respondTo&&(o=Math.min(l,a)),r.options.responsive&&r.options.responsive.length&&null!==r.options.responsive){for(n in i=null,r.breakpoints)r.breakpoints.hasOwnProperty(n)&&(!1===r.originalSettings.mobileFirst?o<r.breakpoints[n]&&(i=r.breakpoints[n]):o>r.breakpoints[n]&&(i=r.breakpoints[n]));null!==i?null!==r.activeBreakpoint&&i===r.activeBreakpoint&&!t||(r.activeBreakpoint=i,"unslick"===r.breakpointSettings[i]?r.unslick(i):(r.options=c.extend({},r.originalSettings,r.breakpointSettings[i]),!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e)),s=i):null!==r.activeBreakpoint&&(r.activeBreakpoint=null,r.options=r.originalSettings,!0===e&&(r.currentSlide=r.options.initialSlide),r.refresh(e),s=i),e||!1===s||r.$slider.trigger("breakpoint",[r,s])}},s.prototype.changeSlide=function(e,t){var n,i,o=this,r=c(e.currentTarget);switch(r.is("a")&&e.preventDefault(),r.is("li")||(r=r.closest("li")),n=o.slideCount%o.options.slidesToScroll!=0?0:(o.slideCount-o.currentSlide)%o.options.slidesToScroll,e.data.message){case"previous":i=0==n?o.options.slidesToScroll:o.options.slidesToShow-n,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide-i,!1,t);break;case"next":i=0==n?o.options.slidesToScroll:n,o.slideCount>o.options.slidesToShow&&o.slideHandler(o.currentSlide+i,!1,t);break;case"index":var s=0===e.data.index?0:e.data.index||r.index()*o.options.slidesToScroll;o.slideHandler(o.checkNavigable(s),!1,t),r.children().trigger("focus");break;default:return}},s.prototype.checkNavigable=function(e){var t=this.getNavigableIndexes(),n=0;if(e>t[t.length-1])e=t[t.length-1];else for(var i in t){if(e<t[i]){e=n;break}n=t[i]}return e},s.prototype.cleanUpEvents=function(){var e=this;e.options.dots&&null!==e.$dots&&(c("li",e.$dots).off("click.slick",e.changeSlide).off("mouseenter.slick",c.proxy(e.interrupt,e,!0)).off("mouseleave.slick",c.proxy(e.interrupt,e,!1)),!0===e.options.accessibility&&e.$dots.off("keydown.slick",e.keyHandler)),e.$slider.off("focus.slick blur.slick"),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow&&e.$prevArrow.off("click.slick",e.changeSlide),e.$nextArrow&&e.$nextArrow.off("click.slick",e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow&&e.$prevArrow.off("keydown.slick",e.keyHandler),e.$nextArrow&&e.$nextArrow.off("keydown.slick",e.keyHandler))),e.$list.off("touchstart.slick mousedown.slick",e.swipeHandler),e.$list.off("touchmove.slick mousemove.slick",e.swipeHandler),e.$list.off("touchend.slick mouseup.slick",e.swipeHandler),e.$list.off("touchcancel.slick mouseleave.slick",e.swipeHandler),e.$list.off("click.slick",e.clickHandler),c(document).off(e.visibilityChange,e.visibility),e.cleanUpSlideEvents(),!0===e.options.accessibility&&e.$list.off("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().off("click.slick",e.selectHandler),c(window).off("orientationchange.slick.slick-"+e.instanceUid,e.orientationChange),c(window).off("resize.slick.slick-"+e.instanceUid,e.resize),c("[draggable!=true]",e.$slideTrack).off("dragstart",e.preventDefault),c(window).off("load.slick.slick-"+e.instanceUid,e.setPosition)},s.prototype.cleanUpSlideEvents=function(){var e=this;e.$list.off("mouseenter.slick",c.proxy(e.interrupt,e,!0)),e.$list.off("mouseleave.slick",c.proxy(e.interrupt,e,!1))},s.prototype.cleanUpRows=function(){var e;1<this.options.rows&&((e=this.$slides.children().children()).removeAttr("style"),this.$slider.empty().append(e))},s.prototype.clickHandler=function(e){!1===this.shouldClick&&(e.stopImmediatePropagation(),e.stopPropagation(),e.preventDefault())},s.prototype.destroy=function(e){var t=this;t.autoPlayClear(),t.touchObject={},t.cleanUpEvents(),c(".slick-cloned",t.$slider).detach(),t.$dots&&t.$dots.remove(),t.$prevArrow&&t.$prevArrow.length&&(t.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.prevArrow)&&t.$prevArrow.remove()),t.$nextArrow&&t.$nextArrow.length&&(t.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display",""),t.htmlExpr.test(t.options.nextArrow)&&t.$nextArrow.remove()),t.$slides&&(t.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function(){c(this).attr("style",c(this).data("originalStyling"))}),t.$slideTrack.children(this.options.slide).detach(),t.$slideTrack.detach(),t.$list.detach(),t.$slider.append(t.$slides)),t.cleanUpRows(),t.$slider.removeClass("slick-slider"),t.$slider.removeClass("slick-initialized"),t.$slider.removeClass("slick-dotted"),t.unslicked=!0,e||t.$slider.trigger("destroy",[t])},s.prototype.disableTransition=function(e){var t={};t[this.transitionType]="",!1===this.options.fade?this.$slideTrack.css(t):this.$slides.eq(e).css(t)},s.prototype.fadeSlide=function(e,t){var n=this;!1===n.cssTransitions?(n.$slides.eq(e).css({zIndex:n.options.zIndex}),n.$slides.eq(e).animate({opacity:1},n.options.speed,n.options.easing,t)):(n.applyTransition(e),n.$slides.eq(e).css({opacity:1,zIndex:n.options.zIndex}),t&&setTimeout(function(){n.disableTransition(e),t.call()},n.options.speed))},s.prototype.fadeSlideOut=function(e){var t=this;!1===t.cssTransitions?t.$slides.eq(e).animate({opacity:0,zIndex:t.options.zIndex-2},t.options.speed,t.options.easing):(t.applyTransition(e),t.$slides.eq(e).css({opacity:0,zIndex:t.options.zIndex-2}))},s.prototype.filterSlides=s.prototype.slickFilter=function(e){var t=this;null!==e&&(t.$slidesCache=t.$slides,t.unload(),t.$slideTrack.children(this.options.slide).detach(),t.$slidesCache.filter(e).appendTo(t.$slideTrack),t.reinit())},s.prototype.focusHandler=function(){var n=this;n.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick","*",function(e){e.stopImmediatePropagation();var t=c(this);setTimeout(function(){n.options.pauseOnFocus&&(n.focussed=t.is(":focus"),n.autoPlay())},0)})},s.prototype.getCurrent=s.prototype.slickCurrentSlide=function(){return this.currentSlide},s.prototype.getDotCount=function(){var e=this,t=0,n=0,i=0;if(!0===e.options.infinite)if(e.slideCount<=e.options.slidesToShow)++i;else for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else if(!0===e.options.centerMode)i=e.slideCount;else if(e.options.asNavFor)for(;t<e.slideCount;)++i,t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;else i=1+Math.ceil((e.slideCount-e.options.slidesToShow)/e.options.slidesToScroll);return i-1},s.prototype.getLeft=function(e){var t,n,i,o,r=this,s=0;return r.slideOffset=0,n=r.$slides.first().outerHeight(!0),!0===r.options.infinite?(r.slideCount>r.options.slidesToShow&&(r.slideOffset=r.slideWidth*r.options.slidesToShow*-1,o=-1,!0===r.options.vertical&&!0===r.options.centerMode&&(2===r.options.slidesToShow?o=-1.5:1===r.options.slidesToShow&&(o=-2)),s=n*r.options.slidesToShow*o),r.slideCount%r.options.slidesToScroll!=0&&e+r.options.slidesToScroll>r.slideCount&&r.slideCount>r.options.slidesToShow&&(s=e>r.slideCount?(r.slideOffset=(r.options.slidesToShow-(e-r.slideCount))*r.slideWidth*-1,(r.options.slidesToShow-(e-r.slideCount))*n*-1):(r.slideOffset=r.slideCount%r.options.slidesToScroll*r.slideWidth*-1,r.slideCount%r.options.slidesToScroll*n*-1))):e+r.options.slidesToShow>r.slideCount&&(r.slideOffset=(e+r.options.slidesToShow-r.slideCount)*r.slideWidth,s=(e+r.options.slidesToShow-r.slideCount)*n),r.slideCount<=r.options.slidesToShow&&(s=r.slideOffset=0),!0===r.options.centerMode&&r.slideCount<=r.options.slidesToShow?r.slideOffset=r.slideWidth*Math.floor(r.options.slidesToShow)/2-r.slideWidth*r.slideCount/2:!0===r.options.centerMode&&!0===r.options.infinite?r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)-r.slideWidth:!0===r.options.centerMode&&(r.slideOffset=0,r.slideOffset+=r.slideWidth*Math.floor(r.options.slidesToShow/2)),t=!1===r.options.vertical?e*r.slideWidth*-1+r.slideOffset:e*n*-1+s,!0===r.options.variableWidth&&(i=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow),t=!0===r.options.rtl?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,!0===r.options.centerMode&&(i=r.slideCount<=r.options.slidesToShow||!1===r.options.infinite?r.$slideTrack.children(".slick-slide").eq(e):r.$slideTrack.children(".slick-slide").eq(e+r.options.slidesToShow+1),t=!0===r.options.rtl?i[0]?-1*(r.$slideTrack.width()-i[0].offsetLeft-i.width()):0:i[0]?-1*i[0].offsetLeft:0,t+=(r.$list.width()-i.outerWidth())/2)),t},s.prototype.getOption=s.prototype.slickGetOption=function(e){return this.options[e]},s.prototype.getNavigableIndexes=function(){for(var e=this,t=0,n=0,i=[],o=!1===e.options.infinite?e.slideCount:(t=-1*e.options.slidesToScroll,n=-1*e.options.slidesToScroll,2*e.slideCount);t<o;)i.push(t),t=n+e.options.slidesToScroll,n+=e.options.slidesToScroll<=e.options.slidesToShow?e.options.slidesToScroll:e.options.slidesToShow;return i},s.prototype.getSlick=function(){return this},s.prototype.getSlideCount=function(){var n,i=this,o=!0===i.options.centerMode?i.slideWidth*Math.floor(i.options.slidesToShow/2):0;return!0===i.options.swipeToSlide?(i.$slideTrack.find(".slick-slide").each(function(e,t){if(t.offsetLeft-o+c(t).outerWidth()/2>-1*i.swipeLeft)return n=t,!1}),Math.abs(c(n).attr("data-slick-index")-i.currentSlide)||1):i.options.slidesToScroll},s.prototype.goTo=s.prototype.slickGoTo=function(e,t){this.changeSlide({data:{message:"index",index:parseInt(e)}},t)},s.prototype.init=function(e){var t=this;c(t.$slider).hasClass("slick-initialized")||(c(t.$slider).addClass("slick-initialized"),t.buildRows(),t.buildOut(),t.setProps(),t.startLoad(),t.loadSlider(),t.initializeEvents(),t.updateArrows(),t.updateDots(),t.checkResponsive(!0),t.focusHandler()),e&&t.$slider.trigger("init",[t]),!0===t.options.accessibility&&t.initADA(),t.options.autoplay&&(t.paused=!1,t.autoPlay())},s.prototype.initADA=function(){var n=this,i=Math.ceil(n.slideCount/n.options.slidesToShow),o=n.getNavigableIndexes().filter(function(e){return 0<=e&&e<n.slideCount});n.$slides.add(n.$slideTrack.find(".slick-cloned")).attr({"aria-hidden":"true",tabindex:"-1"}).find("a, input, button, select").attr({tabindex:"-1"}),null!==n.$dots&&(n.$slides.not(n.$slideTrack.find(".slick-cloned")).each(function(e){var t=o.indexOf(e);c(this).attr({role:"tabpanel",id:"slick-slide"+n.instanceUid+e,tabindex:-1}),-1!==t&&c(this).attr({"aria-describedby":"slick-slide-control"+n.instanceUid+t})}),n.$dots.attr("role","tablist").find("li").each(function(e){var t=o[e];c(this).attr({role:"presentation"}),c(this).find("button").first().attr({role:"tab",id:"slick-slide-control"+n.instanceUid+e,"aria-controls":"slick-slide"+n.instanceUid+t,"aria-label":e+1+" of "+i,"aria-selected":null,tabindex:"-1"})}).eq(n.currentSlide).find("button").attr({"aria-selected":"true",tabindex:"0"}).end());for(var e=n.currentSlide,t=e+n.options.slidesToShow;e<t;e++)n.$slides.eq(e).attr("tabindex",0);n.activateADA()},s.prototype.initArrowEvents=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.off("click.slick").on("click.slick",{message:"previous"},e.changeSlide),e.$nextArrow.off("click.slick").on("click.slick",{message:"next"},e.changeSlide),!0===e.options.accessibility&&(e.$prevArrow.on("keydown.slick",e.keyHandler),e.$nextArrow.on("keydown.slick",e.keyHandler)))},s.prototype.initDotEvents=function(){var e=this;!0===e.options.dots&&(c("li",e.$dots).on("click.slick",{message:"index"},e.changeSlide),!0===e.options.accessibility&&e.$dots.on("keydown.slick",e.keyHandler)),!0===e.options.dots&&!0===e.options.pauseOnDotsHover&&c("li",e.$dots).on("mouseenter.slick",c.proxy(e.interrupt,e,!0)).on("mouseleave.slick",c.proxy(e.interrupt,e,!1))},s.prototype.initSlideEvents=function(){var e=this;e.options.pauseOnHover&&(e.$list.on("mouseenter.slick",c.proxy(e.interrupt,e,!0)),e.$list.on("mouseleave.slick",c.proxy(e.interrupt,e,!1)))},s.prototype.initializeEvents=function(){var e=this;e.initArrowEvents(),e.initDotEvents(),e.initSlideEvents(),e.$list.on("touchstart.slick mousedown.slick",{action:"start"},e.swipeHandler),e.$list.on("touchmove.slick mousemove.slick",{action:"move"},e.swipeHandler),e.$list.on("touchend.slick mouseup.slick",{action:"end"},e.swipeHandler),e.$list.on("touchcancel.slick mouseleave.slick",{action:"end"},e.swipeHandler),e.$list.on("click.slick",e.clickHandler),c(document).on(e.visibilityChange,c.proxy(e.visibility,e)),!0===e.options.accessibility&&e.$list.on("keydown.slick",e.keyHandler),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().on("click.slick",e.selectHandler),c(window).on("orientationchange.slick.slick-"+e.instanceUid,c.proxy(e.orientationChange,e)),c(window).on("resize.slick.slick-"+e.instanceUid,c.proxy(e.resize,e)),c("[draggable!=true]",e.$slideTrack).on("dragstart",e.preventDefault),c(window).on("load.slick.slick-"+e.instanceUid,e.setPosition),c(e.setPosition)},s.prototype.initUI=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.show(),e.$nextArrow.show()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.show()},s.prototype.keyHandler=function(e){var t=this;e.target.tagName.match("TEXTAREA|INPUT|SELECT")||(37===e.keyCode&&!0===t.options.accessibility?t.changeSlide({data:{message:!0===t.options.rtl?"next":"previous"}}):39===e.keyCode&&!0===t.options.accessibility&&t.changeSlide({data:{message:!0===t.options.rtl?"previous":"next"}}))},s.prototype.lazyLoad=function(){function e(e){c("img[data-lazy]",e).each(function(){var e=c(this),t=c(this).attr("data-lazy"),n=c(this).attr("data-srcset"),i=c(this).attr("data-sizes")||r.$slider.attr("data-sizes"),o=document.createElement("img");o.onload=function(){e.animate({opacity:0},100,function(){n&&(e.attr("srcset",n),i&&e.attr("sizes",i)),e.attr("src",t).animate({opacity:1},200,function(){e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")}),r.$slider.trigger("lazyLoaded",[r,e,t])})},o.onerror=function(){e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),r.$slider.trigger("lazyLoadError",[r,e,t])},o.src=t})}var t,n,i,r=this;if(!0===r.options.centerMode?i=!0===r.options.infinite?(n=r.currentSlide+(r.options.slidesToShow/2+1))+r.options.slidesToShow+2:(n=Math.max(0,r.currentSlide-(r.options.slidesToShow/2+1)),r.options.slidesToShow/2+1+2+r.currentSlide):(n=r.options.infinite?r.options.slidesToShow+r.currentSlide:r.currentSlide,i=Math.ceil(n+r.options.slidesToShow),!0===r.options.fade&&(0<n&&n--,i<=r.slideCount&&i++)),t=r.$slider.find(".slick-slide").slice(n,i),"anticipated"===r.options.lazyLoad)for(var o=n-1,s=i,a=r.$slider.find(".slick-slide"),l=0;l<r.options.slidesToScroll;l++)o<0&&(o=r.slideCount-1),t=(t=t.add(a.eq(o))).add(a.eq(s)),o--,s++;e(t),r.slideCount<=r.options.slidesToShow?e(r.$slider.find(".slick-slide")):r.currentSlide>=r.slideCount-r.options.slidesToShow?e(r.$slider.find(".slick-cloned").slice(0,r.options.slidesToShow)):0===r.currentSlide&&e(r.$slider.find(".slick-cloned").slice(-1*r.options.slidesToShow))},s.prototype.loadSlider=function(){var e=this;e.setPosition(),e.$slideTrack.css({opacity:1}),e.$slider.removeClass("slick-loading"),e.initUI(),"progressive"===e.options.lazyLoad&&e.progressiveLazyLoad()},s.prototype.next=s.prototype.slickNext=function(){this.changeSlide({data:{message:"next"}})},s.prototype.orientationChange=function(){this.checkResponsive(),this.setPosition()},s.prototype.pause=s.prototype.slickPause=function(){this.autoPlayClear(),this.paused=!0},s.prototype.play=s.prototype.slickPlay=function(){var e=this;e.autoPlay(),e.options.autoplay=!0,e.paused=!1,e.focussed=!1,e.interrupted=!1},s.prototype.postSlide=function(e){var t=this;t.unslicked||(t.$slider.trigger("afterChange",[t,e]),t.animating=!1,t.slideCount>t.options.slidesToShow&&t.setPosition(),t.swipeLeft=null,t.options.autoplay&&t.autoPlay(),!0===t.options.accessibility&&(t.initADA(),t.options.focusOnChange&&c(t.$slides.get(t.currentSlide)).attr("tabindex",0).focus()))},s.prototype.prev=s.prototype.slickPrev=function(){this.changeSlide({data:{message:"previous"}})},s.prototype.preventDefault=function(e){e.preventDefault()},s.prototype.progressiveLazyLoad=function(e){e=e||1;var t,n,i,o,r,s=this,a=c("img[data-lazy]",s.$slider);a.length?(t=a.first(),n=t.attr("data-lazy"),i=t.attr("data-srcset"),o=t.attr("data-sizes")||s.$slider.attr("data-sizes"),(r=document.createElement("img")).onload=function(){i&&(t.attr("srcset",i),o&&t.attr("sizes",o)),t.attr("src",n).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"),!0===s.options.adaptiveHeight&&s.setPosition(),s.$slider.trigger("lazyLoaded",[s,t,n]),s.progressiveLazyLoad()},r.onerror=function(){e<3?setTimeout(function(){s.progressiveLazyLoad(e+1)},500):(t.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"),s.$slider.trigger("lazyLoadError",[s,t,n]),s.progressiveLazyLoad())},r.src=n):s.$slider.trigger("allImagesLoaded",[s])},s.prototype.refresh=function(e){var t,n=this,i=n.slideCount-n.options.slidesToShow;!n.options.infinite&&n.currentSlide>i&&(n.currentSlide=i),n.slideCount<=n.options.slidesToShow&&(n.currentSlide=0),t=n.currentSlide,n.destroy(!0),c.extend(n,n.initials,{currentSlide:t}),n.init(),e||n.changeSlide({data:{message:"index",index:t}},!1)},s.prototype.registerBreakpoints=function(){var e,t,n,i=this,o=i.options.responsive||null;if("array"===c.type(o)&&o.length){for(e in i.respondTo=i.options.respondTo||"window",o)if(n=i.breakpoints.length-1,o.hasOwnProperty(e)){for(t=o[e].breakpoint;0<=n;)i.breakpoints[n]&&i.breakpoints[n]===t&&i.breakpoints.splice(n,1),n--;i.breakpoints.push(t),i.breakpointSettings[t]=o[e].settings}i.breakpoints.sort(function(e,t){return i.options.mobileFirst?e-t:t-e})}},s.prototype.reinit=function(){var e=this;e.$slides=e.$slideTrack.children(e.options.slide).addClass("slick-slide"),e.slideCount=e.$slides.length,e.currentSlide>=e.slideCount&&0!==e.currentSlide&&(e.currentSlide=e.currentSlide-e.options.slidesToScroll),e.slideCount<=e.options.slidesToShow&&(e.currentSlide=0),e.registerBreakpoints(),e.setProps(),e.setupInfinite(),e.buildArrows(),e.updateArrows(),e.initArrowEvents(),e.buildDots(),e.updateDots(),e.initDotEvents(),e.cleanUpSlideEvents(),e.initSlideEvents(),e.checkResponsive(!1,!0),!0===e.options.focusOnSelect&&c(e.$slideTrack).children().on("click.slick",e.selectHandler),e.setSlideClasses("number"==typeof e.currentSlide?e.currentSlide:0),e.setPosition(),e.focusHandler(),e.paused=!e.options.autoplay,e.autoPlay(),e.$slider.trigger("reInit",[e])},s.prototype.resize=function(){var e=this;c(window).width()!==e.windowWidth&&(clearTimeout(e.windowDelay),e.windowDelay=window.setTimeout(function(){e.windowWidth=c(window).width(),e.checkResponsive(),e.unslicked||e.setPosition()},50))},s.prototype.removeSlide=s.prototype.slickRemove=function(e,t,n){var i=this;if(e="boolean"==typeof e?!0===(t=e)?0:i.slideCount-1:!0===t?--e:e,i.slideCount<1||e<0||e>i.slideCount-1)return!1;i.unload(),!0===n?i.$slideTrack.children().remove():i.$slideTrack.children(this.options.slide).eq(e).remove(),i.$slides=i.$slideTrack.children(this.options.slide),i.$slideTrack.children(this.options.slide).detach(),i.$slideTrack.append(i.$slides),i.$slidesCache=i.$slides,i.reinit()},s.prototype.setCSS=function(e){var t,n,i=this,o={};!0===i.options.rtl&&(e=-e),t="left"==i.positionProp?Math.ceil(e)+"px":"0px",n="top"==i.positionProp?Math.ceil(e)+"px":"0px",o[i.positionProp]=e,!1===i.transformsEnabled||(!(o={})===i.cssTransitions?o[i.animType]="translate("+t+", "+n+")":o[i.animType]="translate3d("+t+", "+n+", 0px)"),i.$slideTrack.css(o)},s.prototype.setDimensions=function(){var e=this;!1===e.options.vertical?!0===e.options.centerMode&&e.$list.css({padding:"0px "+e.options.centerPadding}):(e.$list.height(e.$slides.first().outerHeight(!0)*e.options.slidesToShow),!0===e.options.centerMode&&e.$list.css({padding:e.options.centerPadding+" 0px"})),e.listWidth=e.$list.width(),e.listHeight=e.$list.height(),!1===e.options.vertical&&!1===e.options.variableWidth?(e.slideWidth=Math.ceil(e.listWidth/e.options.slidesToShow),e.$slideTrack.width(Math.ceil(e.slideWidth*e.$slideTrack.children(".slick-slide").length))):!0===e.options.variableWidth?e.$slideTrack.width(5e3*e.slideCount):(e.slideWidth=Math.ceil(e.listWidth),e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0)*e.$slideTrack.children(".slick-slide").length)));var t=e.$slides.first().outerWidth(!0)-e.$slides.first().width();!1===e.options.variableWidth&&e.$slideTrack.children(".slick-slide").width(e.slideWidth-t)},s.prototype.setFade=function(){var n,i=this;i.$slides.each(function(e,t){n=i.slideWidth*e*-1,!0===i.options.rtl?c(t).css({position:"relative",right:n,top:0,zIndex:i.options.zIndex-2,opacity:0}):c(t).css({position:"relative",left:n,top:0,zIndex:i.options.zIndex-2,opacity:0})}),i.$slides.eq(i.currentSlide).css({zIndex:i.options.zIndex-1,opacity:1})},s.prototype.setHeight=function(){var e,t=this;1===t.options.slidesToShow&&!0===t.options.adaptiveHeight&&!1===t.options.vertical&&(e=t.$slides.eq(t.currentSlide).outerHeight(!0),t.$list.css("height",e))},s.prototype.setOption=s.prototype.slickSetOption=function(){var e,t,n,i,o,r=this,s=!1;if("object"===c.type(arguments[0])?(n=arguments[0],s=arguments[1],o="multiple"):"string"===c.type(arguments[0])&&(i=arguments[1],s=arguments[2],"responsive"===(n=arguments[0])&&"array"===c.type(arguments[1])?o="responsive":void 0!==arguments[1]&&(o="single")),"single"===o)r.options[n]=i;else if("multiple"===o)c.each(n,function(e,t){r.options[e]=t});else if("responsive"===o)for(t in i)if("array"!==c.type(r.options.responsive))r.options.responsive=[i[t]];else{for(e=r.options.responsive.length-1;0<=e;)r.options.responsive[e].breakpoint===i[t].breakpoint&&r.options.responsive.splice(e,1),e--;r.options.responsive.push(i[t])}s&&(r.unload(),r.reinit())},s.prototype.setPosition=function(){var e=this;e.setDimensions(),e.setHeight(),!1===e.options.fade?e.setCSS(e.getLeft(e.currentSlide)):e.setFade(),e.$slider.trigger("setPosition",[e])},s.prototype.setProps=function(){var e=this,t=document.body.style;e.positionProp=!0===e.options.vertical?"top":"left","top"===e.positionProp?e.$slider.addClass("slick-vertical"):e.$slider.removeClass("slick-vertical"),void 0===t.WebkitTransition&&void 0===t.MozTransition&&void 0===t.msTransition||!0===e.options.useCSS&&(e.cssTransitions=!0),e.options.fade&&("number"==typeof e.options.zIndex?e.options.zIndex<3&&(e.options.zIndex=3):e.options.zIndex=e.defaults.zIndex),void 0!==t.OTransform&&(e.animType="OTransform",e.transformType="-o-transform",e.transitionType="OTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.MozTransform&&(e.animType="MozTransform",e.transformType="-moz-transform",e.transitionType="MozTransition",void 0===t.perspectiveProperty&&void 0===t.MozPerspective&&(e.animType=!1)),void 0!==t.webkitTransform&&(e.animType="webkitTransform",e.transformType="-webkit-transform",e.transitionType="webkitTransition",void 0===t.perspectiveProperty&&void 0===t.webkitPerspective&&(e.animType=!1)),void 0!==t.msTransform&&(e.animType="msTransform",e.transformType="-ms-transform",e.transitionType="msTransition",void 0===t.msTransform&&(e.animType=!1)),void 0!==t.transform&&!1!==e.animType&&(e.animType="transform",e.transformType="transform",e.transitionType="transition"),e.transformsEnabled=e.options.useTransform&&null!==e.animType&&!1!==e.animType},s.prototype.setSlideClasses=function(e){var t,n,i,o,r=this,s=r.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden","true");r.$slides.eq(e).addClass("slick-current"),!0===r.options.centerMode?(i=r.options.slidesToShow%2==0?1:0,o=Math.floor(r.options.slidesToShow/2),!0===r.options.infinite&&(o<=e&&e<=r.slideCount-1-o?r.$slides.slice(e-o+i,e+o+1).addClass("slick-active").attr("aria-hidden","false"):(t=r.options.slidesToShow+e,s.slice(t-o+1+i,t+o+2).addClass("slick-active").attr("aria-hidden","false")),0===e?s.eq(s.length-1-r.options.slidesToShow).addClass("slick-center"):e===r.slideCount-1&&s.eq(r.options.slidesToShow).addClass("slick-center")),r.$slides.eq(e).addClass("slick-center")):0<=e&&e<=r.slideCount-r.options.slidesToShow?r.$slides.slice(e,e+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false"):s.length<=r.options.slidesToShow?s.addClass("slick-active").attr("aria-hidden","false"):(n=r.slideCount%r.options.slidesToShow,t=!0===r.options.infinite?r.options.slidesToShow+e:e,r.options.slidesToShow==r.options.slidesToScroll&&r.slideCount-e<r.options.slidesToShow?s.slice(t-(r.options.slidesToShow-n),t+n).addClass("slick-active").attr("aria-hidden","false"):s.slice(t,t+r.options.slidesToShow).addClass("slick-active").attr("aria-hidden","false")),"ondemand"!==r.options.lazyLoad&&"anticipated"!==r.options.lazyLoad||r.lazyLoad()},s.prototype.setupInfinite=function(){var e,t,n,i=this;if(!0===i.options.fade&&(i.options.centerMode=!1),!0===i.options.infinite&&!1===i.options.fade&&(t=null,i.slideCount>i.options.slidesToShow)){for(n=!0===i.options.centerMode?i.options.slidesToShow+1:i.options.slidesToShow,e=i.slideCount;e>i.slideCount-n;--e)t=e-1,c(i.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t-i.slideCount).prependTo(i.$slideTrack).addClass("slick-cloned");for(e=0;e<n+i.slideCount;e+=1)t=e,c(i.$slides[t]).clone(!0).attr("id","").attr("data-slick-index",t+i.slideCount).appendTo(i.$slideTrack).addClass("slick-cloned");i.$slideTrack.find(".slick-cloned").find("[id]").each(function(){c(this).attr("id","")})}},s.prototype.interrupt=function(e){e||this.autoPlay(),this.interrupted=e},s.prototype.selectHandler=function(e){var t=c(e.target).is(".slick-slide")?c(e.target):c(e.target).parents(".slick-slide"),n=(n=parseInt(t.attr("data-slick-index")))||0;this.slideCount<=this.options.slidesToShow?this.slideHandler(n,!1,!0):this.slideHandler(n)},s.prototype.slideHandler=function(e,t,n){var i,o,r,s,a,l,c=this;if(t=t||!1,!(!0===c.animating&&!0===c.options.waitForAnimate||!0===c.options.fade&&c.currentSlide===e))if(!1===t&&c.asNavFor(e),i=e,l=c.getLeft(i),s=c.getLeft(c.currentSlide),c.currentLeft=null===c.swipeLeft?s:c.swipeLeft,!1===c.options.infinite&&!1===c.options.centerMode&&(e<0||e>c.getDotCount()*c.options.slidesToScroll))!1===c.options.fade&&(i=c.currentSlide,!0!==n?c.animateSlide(s,function(){c.postSlide(i)}):c.postSlide(i));else if(!1===c.options.infinite&&!0===c.options.centerMode&&(e<0||e>c.slideCount-c.options.slidesToScroll))!1===c.options.fade&&(i=c.currentSlide,!0!==n?c.animateSlide(s,function(){c.postSlide(i)}):c.postSlide(i));else{if(c.options.autoplay&&clearInterval(c.autoPlayTimer),o=i<0?c.slideCount%c.options.slidesToScroll!=0?c.slideCount-c.slideCount%c.options.slidesToScroll:c.slideCount+i:i>=c.slideCount?c.slideCount%c.options.slidesToScroll!=0?0:i-c.slideCount:i,c.animating=!0,c.$slider.trigger("beforeChange",[c,c.currentSlide,o]),r=c.currentSlide,c.currentSlide=o,c.setSlideClasses(c.currentSlide),c.options.asNavFor&&(a=(a=c.getNavTarget()).slick("getSlick")).slideCount<=a.options.slidesToShow&&a.setSlideClasses(c.currentSlide),c.updateDots(),c.updateArrows(),!0===c.options.fade)return!0!==n?(c.fadeSlideOut(r),c.fadeSlide(o,function(){c.postSlide(o)})):c.postSlide(o),void c.animateHeight();!0!==n?c.animateSlide(l,function(){c.postSlide(o)}):c.postSlide(o)}},s.prototype.startLoad=function(){var e=this;!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&(e.$prevArrow.hide(),e.$nextArrow.hide()),!0===e.options.dots&&e.slideCount>e.options.slidesToShow&&e.$dots.hide(),e.$slider.addClass("slick-loading")},s.prototype.swipeDirection=function(){var e,t=this,n=t.touchObject.startX-t.touchObject.curX,i=t.touchObject.startY-t.touchObject.curY,o=Math.atan2(i,n);return(e=Math.round(180*o/Math.PI))<0&&(e=360-Math.abs(e)),e<=45&&0<=e||e<=360&&315<=e?!1===t.options.rtl?"left":"right":135<=e&&e<=225?!1===t.options.rtl?"right":"left":!0===t.options.verticalSwiping?35<=e&&e<=135?"down":"up":"vertical"},s.prototype.swipeEnd=function(e){var t,n,i=this;if(i.dragging=!1,i.swiping=!1,i.scrolling)return i.scrolling=!1;if(i.interrupted=!1,i.shouldClick=!(10<i.touchObject.swipeLength),void 0===i.touchObject.curX)return!1;if(!0===i.touchObject.edgeHit&&i.$slider.trigger("edge",[i,i.swipeDirection()]),i.touchObject.swipeLength>=i.touchObject.minSwipe){switch(n=i.swipeDirection()){case"left":case"down":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide+i.getSlideCount()):i.currentSlide+i.getSlideCount(),i.currentDirection=0;break;case"right":case"up":t=i.options.swipeToSlide?i.checkNavigable(i.currentSlide-i.getSlideCount()):i.currentSlide-i.getSlideCount(),i.currentDirection=1}"vertical"!=n&&(i.slideHandler(t),i.touchObject={},i.$slider.trigger("swipe",[i,n]))}else i.touchObject.startX!==i.touchObject.curX&&(i.slideHandler(i.currentSlide),i.touchObject={})},s.prototype.swipeHandler=function(e){var t=this;if(!(!1===t.options.swipe||"ontouchend"in document&&!1===t.options.swipe||!1===t.options.draggable&&-1!==e.type.indexOf("mouse")))switch(t.touchObject.fingerCount=e.originalEvent&&void 0!==e.originalEvent.touches?e.originalEvent.touches.length:1,t.touchObject.minSwipe=t.listWidth/t.options.touchThreshold,!0===t.options.verticalSwiping&&(t.touchObject.minSwipe=t.listHeight/t.options.touchThreshold),e.data.action){case"start":t.swipeStart(e);break;case"move":t.swipeMove(e);break;case"end":t.swipeEnd(e)}},s.prototype.swipeMove=function(e){var t,n,i,o,r,s=this,a=void 0!==e.originalEvent?e.originalEvent.touches:null;return!(!s.dragging||s.scrolling||a&&1!==a.length)&&(t=s.getLeft(s.currentSlide),s.touchObject.curX=void 0!==a?a[0].pageX:e.clientX,s.touchObject.curY=void 0!==a?a[0].pageY:e.clientY,s.touchObject.swipeLength=Math.round(Math.sqrt(Math.pow(s.touchObject.curX-s.touchObject.startX,2))),r=Math.round(Math.sqrt(Math.pow(s.touchObject.curY-s.touchObject.startY,2))),!s.options.verticalSwiping&&!s.swiping&&4<r?!(s.scrolling=!0):(!0===s.options.verticalSwiping&&(s.touchObject.swipeLength=r),n=s.swipeDirection(),void 0!==e.originalEvent&&4<s.touchObject.swipeLength&&(s.swiping=!0,e.preventDefault()),o=(!1===s.options.rtl?1:-1)*(s.touchObject.curX>s.touchObject.startX?1:-1),!0===s.options.verticalSwiping&&(o=s.touchObject.curY>s.touchObject.startY?1:-1),i=s.touchObject.swipeLength,(s.touchObject.edgeHit=!1)===s.options.infinite&&(0===s.currentSlide&&"right"===n||s.currentSlide>=s.getDotCount()&&"left"===n)&&(i=s.touchObject.swipeLength*s.options.edgeFriction,s.touchObject.edgeHit=!0),!1===s.options.vertical?s.swipeLeft=t+i*o:s.swipeLeft=t+i*(s.$list.height()/s.listWidth)*o,!0===s.options.verticalSwiping&&(s.swipeLeft=t+i*o),!0!==s.options.fade&&!1!==s.options.touchMove&&(!0===s.animating?(s.swipeLeft=null,!1):void s.setCSS(s.swipeLeft))))},s.prototype.swipeStart=function(e){var t,n=this;if(n.interrupted=!0,1!==n.touchObject.fingerCount||n.slideCount<=n.options.slidesToShow)return!(n.touchObject={});void 0!==e.originalEvent&&void 0!==e.originalEvent.touches&&(t=e.originalEvent.touches[0]),n.touchObject.startX=n.touchObject.curX=void 0!==t?t.pageX:e.clientX,n.touchObject.startY=n.touchObject.curY=void 0!==t?t.pageY:e.clientY,n.dragging=!0},s.prototype.unfilterSlides=s.prototype.slickUnfilter=function(){var e=this;null!==e.$slidesCache&&(e.unload(),e.$slideTrack.children(this.options.slide).detach(),e.$slidesCache.appendTo(e.$slideTrack),e.reinit())},s.prototype.unload=function(){var e=this;c(".slick-cloned",e.$slider).remove(),e.$dots&&e.$dots.remove(),e.$prevArrow&&e.htmlExpr.test(e.options.prevArrow)&&e.$prevArrow.remove(),e.$nextArrow&&e.htmlExpr.test(e.options.nextArrow)&&e.$nextArrow.remove(),e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden","true").css("width","")},s.prototype.unslick=function(e){this.$slider.trigger("unslick",[this,e]),this.destroy()},s.prototype.updateArrows=function(){var e=this;Math.floor(e.options.slidesToShow/2),!0===e.options.arrows&&e.slideCount>e.options.slidesToShow&&!e.options.infinite&&(e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false"),0===e.currentSlide?(e.$prevArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$nextArrow.removeClass("slick-disabled").attr("aria-disabled","false")):(e.currentSlide>=e.slideCount-e.options.slidesToShow&&!1===e.options.centerMode||e.currentSlide>=e.slideCount-1&&!0===e.options.centerMode)&&(e.$nextArrow.addClass("slick-disabled").attr("aria-disabled","true"),e.$prevArrow.removeClass("slick-disabled").attr("aria-disabled","false")))},s.prototype.updateDots=function(){var e=this;null!==e.$dots&&(e.$dots.find("li").removeClass("slick-active").end(),e.$dots.find("li").eq(Math.floor(e.currentSlide/e.options.slidesToScroll)).addClass("slick-active"))},s.prototype.visibility=function(){this.options.autoplay&&(document[this.hidden]?this.interrupted=!0:this.interrupted=!1)},c.fn.slick=function(){for(var e,t=this,n=arguments[0],i=Array.prototype.slice.call(arguments,1),o=t.length,r=0;r<o;r++)if("object"==typeof n||void 0===n?t[r].slick=new s(t[r],n):e=t[r].slick[n].apply(t[r].slick,i),void 0!==e)return e;return t}});;

window.addEventListener("DOMContentLoaded", () => {
  (function ($) {
    const mainWrap = $(".main__wrap");
    const popupClose = $(".popup__close");
    const overlay = $(".overlay");
    const modalLinks = $(".modal-link");
    const sliderFor = $(".gallery__big-imgs");
    const sliderNav = $(".gallery__small-imgs");
    const featuresSlider = $(".features");
    const anchorLinks = $(".hash-link");
    const otherSlider = $(".other__wrap");
    const paperSlider = $(".paper__wrap");
    const nav = $(".navigation");
    const header = $(".header");
    const section = $("section");
    const burgerBtn = $(".burger-btn");
    let prevCoords = 0;
    let currentLanguage = "uk";
    const viewSlider = $('.view__content')
    const preview = $('.preview')

    viewSlider.on('click', (e) => {
      if(e.target.tagName === 'IMG') {
        closeAllOverlay()
        overlay.addClass('overlay--show')
        preview.addClass('preview--show')
        preview.css('display', 'block')
        const src = e.target.getAttribute('src')

        preview.find('img').attr('src', src)
      }
    })

    function closeAllOverlay() {
      $('.popup').each(function() {
        $(this).hide()
      })
    }

    $('.map__item-wrap img').each(function () {
      var $img = $(this);
      var imgClass = $img.attr('class');
      var imgURL = $img.attr('src');
      $.get(imgURL, function(data) {
        var $svg = $(data).find('svg');
        if(typeof imgClass !== 'undefined') {
          $svg = $svg.attr('class', imgClass+' replaced-svg');
        }
        $svg = $svg.removeAttr('xmlns:a');
        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
          $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
        }
        $img.replaceWith($svg);
      }, 'xml');
    })

    $(".map__info-btn").on("click", function () {
      $(this).toggleClass("map__info-btn--show")
      $('.map__info-wrap').toggleClass('map__info-wrap--show')
    });

    $(".language__btn").each(function () {
      $(this).on("click", (e) => {

        if(currentLanguage === $(this).data('language')) {
          e.preventDefault()
          return
        }

        $(".language__btn").each(function () {
          $(this).removeClass("language__btn--current")
        });

        const language = $(this).data("language");
        currentLanguage = language;

        $(`[data-language="${language}"]`).each(function () {
          $(this).addClass("language__btn--current")
        })
      })
    })

    if (document.documentElement.clientWidth > 575) {
      /**Докручивание скролла */
      function debounce(f, t) {
        return function (args) {
          let previousCall = this.lastCall;
          this.lastCall = Date.now();
          if (previousCall && this.lastCall - previousCall <= t) {
            clearTimeout(this.lastCallTimer);
          }
          this.lastCallTimer = setTimeout(() => f(args), t);
        };
      }
      window.currentSection = "main";
      const SCROLL_CORRECTION_TIMEOUT = 1200;
      let alignSectionToScreen = (args) => {
        if(window.section < -550) {
          document
              .querySelector(`[data-section-name="${window.currentSection}"]`).nextElementSibling
              .scrollIntoView({ behavior: "smooth" })
        } else {
          document
              .querySelector(`[data-section-name="${window.currentSection}"]`)
              .scrollIntoView({ behavior: "smooth" })
        }
      };
      // debounce: call the logger when two seconds have elapsed since the last call
      let debouncedLogger = debounce(
        alignSectionToScreen,
        SCROLL_CORRECTION_TIMEOUT
      );
      debouncedLogger();
      window.addEventListener("scroll", () => {
        debouncedLogger();
      });
      /**Докручивание скролла END*/
      /**Переключение меню при скроле */

      let sections = $("section"),
        nav_height = header.outerHeight();

      let screenChange = new Event("screenChange", { bubbles: false });

      $(window).on("scroll", function () {
        var cur_pos = $(this).scrollTop();

        sections.each(function () {
          var top = $(this).offset().top + (nav_height - 80),
            bottom = top + $(this).outerHeight();

          if (cur_pos >= top && cur_pos <= bottom) {
            let currentMenuPoint = document.querySelector(
              `.navigation [data-name=${$(this).data("sectionName")}]`
            );
            let currentScreenName = currentMenuPoint.dataset.name;
            window.currentSection = currentScreenName;
            try {
              window.section = document.querySelector(`[data-section-name="${window.currentSection}"]`).getBoundingClientRect().y
              window.nextSection = document.querySelector(`[data-section-name="${window.currentSection}"]`).nextElementSibling.getBoundingClientRect().y
            } catch {}
            window.currentScreenName = currentScreenName;
            window.currentScreen = +currentMenuPoint.dataset.number;
          }
        });
      });
      /**Переключение меню при скроле NED*/
    }

    if (document.documentElement.clientWidth <= 760) {
      $(".slider-control__item--arrows").append($(".other__control"));
    }

    if (document.documentElement.clientWidth <= 480) {
      $(".features__title").each(function (i) {
        if (i) {
          $(this).remove();
        }
      });

      $(".features__link").each(function (i) {
        if (i < $(".features__item").length - 1) {
          $(this).remove();
        }
      });
    }

    if (document.documentElement.clientWidth <= 510) {
      $(".view__wrap-right-content").each(function () {
        const wrap = $('<div class="view__block"></div>');
        wrap.append($('<a href="#" class="btn view__btn">Подробнее</a>'));
        $(this).append(wrap);
      });
    }

    burgerBtn.on("click", (e) => {
      e.preventDefault();

      burgerBtn.toggleClass("burger-btn--open");

      if ($(".navigation__content").hasClass("navigation--show")) {
        $(".header__info").css("display", "flex");
      } else {
        $(".header__info").css("display", "none");
      }

      $(".navigation__content").toggleClass("navigation--show");
    });

    $(document).on("click", ".submit__form", (e) => {
      const $form = $(e.target.closest("[data-popup]"));
      e.preventDefault();
      const inputs = $form.find($(".popup__input"));
      const isValid = validateForm(inputs);

      if (isValid) {
        sendAjaxForm("static/mail.php", $form);
      }
    });

    function removeFormTextWarn(input) {
      input.parent().find(".form__warn").remove();
    }

    function removeNodeByDelay(node, delay) {
      setTimeout(() => {
        node.remove();
      }, delay);
    }

    function validateForm(inputs) {
      let isValid = true;
      inputs.each(function () {
        $(this).on("input", (e) => {
          if ($(e.target).val().replace(/\s+/g, "")) {
            removeFormTextWarn($(this));
            isValid = false;
            return;
          } else {
            removeFormTextWarn($(this));
            $(this)
              .parent()
              .append('<div class="form__warn">Это поле обязательное</div>');
            isValid = false;
            return;
          }
        });

        if (!$(this).val().replace(/\s+/g, "")) {
          removeFormTextWarn($(this));
          $(this)
            .parent()
            .append('<div class="form__warn">Это поле обязательное</div>');
          isValid = false;
        }
      });

      return isValid;
    }

    function sendAjaxForm(url, selectorForm) {
      const status = {
        sucess: "Спасибо за заявку мы с вами свяжемся в ближайшее время",
        error: "Ошибка на сервере повторите попытку позже",
      };

      $.ajax({
        url: url, //url страницы (action_ajax_form.php)
        type: "POST", //метод отправки
        dataType: "html", //формат данных
        data: $(selectorForm).serialize(), // Сеарилизуем объект
        success: function (response) {
          //Данные отправлены успешно
          $(selectorForm).append(
            `<div class="form__status">${status.sucess}</div>`
          );
          const msg = $(selectorForm).find(".form__status");
          removeNodeByDelay(msg, 5000);
          $(selectorForm)[0].reset();
        },
        error: function (response) {
          // Данные не отправлены
          $(selectorForm).append(
            `<div class="form__status">${status.error}</div>`
          );
          const msg = $(selectorForm).find(".form__status");

          removeNodeByDelay(msg, 5000);
          $(selectorForm)[0].reset();
        },
      });
    }

    $(window).on("scroll", (e) => {
      if (header.offset().top > 60) {
        header.addClass("header--scrolled");
      } else {
        header.removeClass("header--scrolled");
      }

      const position = $(this).scrollTop();

      section.each(function () {
        const topPos = $(this).offset().top - 500,
          bottomPos = topPos + $(this).outerHeight();

        if (position >= topPos && position <= bottomPos) {
          nav.find(".navigation__link").removeClass("navigation__link--active");
          const sectionName =
            $(this).attr("id") === "other" ? "about" : $(this).attr("id");
          nav
            .find('a[href="#' + sectionName + '"]')
            .addClass("navigation__link--active");
        }
      });

      /* SIDEBAR SCROLL COLOR CHANGE */
      let activeSection = $(".navigation__link--active")
        .children("a")
        .attr("href");
    });

    nav.find(".navigation__link").each(function (_, item) {
      $(this).on("click", (e) => {
        $("html,body")
          .stop()
          .animate(
            {
              scrollTop:
                $(this.hash).offset().top - (header.outerHeight() - 80),
            },
            800
          );
        e.preventDefault();
        nav.find(".navigation__content").removeClass("navigation--show");
      });
    });

    anchorLinks.each(function (_, item) {
      $(this).on("click", (e) => {
        const hash = $(this.hash) ? $(this.hash).offset().top : 0;
        $("html,body")
          .stop()
          .animate({ scrollTop: hash - (header.outerHeight() - 80) }, 1500);
        e.preventDefault();
        nav.find(".navigation__content").removeClass("navigation--show");
      });
    });

    function tabs(
      triggerSelector,
      contentSelector,
      activeClass,
      subTabsSelector,
      activeSubClass
    ) {
      const tabs = $(triggerSelector);
      const content = $(contentSelector);
      const active = activeClass;
      const subTabs = $(subTabsSelector);
      const activeSub = activeSubClass;

      tabs.each(function (i) {
        $(this).parent().attr("data-idx", i);

        subTabs
          .eq(i)
          .children()
          .each(function (j) {
            $(this).attr("data-sub-tab", j);

            $(this).on("click", (e) => {
              e.preventDefault();
            });
          });

        $(this).on("click", (e) => {
          e.preventDefault();
          showTab($(this).parent().attr("data-idx"), 0);
        });
      });

      function showTab(idx, i = 0) {
        hideTabs();
        const el = $(`[data-idx="${idx}"]`);

        el.addClass(activeClass);
        content.eq(idx).show();
        sliderView(content.eq(idx), idx);
      }

      function hideTabs() {
        tabs.each(function () {
          $(this).parent().removeClass(activeClass);
        });

        content.each(function () {
          $(this).hide();
        });
      }

      hideTabs(true);
      showTab(0, true, 0);
    }

    modalLinks.each(function () {
      $(this).on("click", (e) => {
        e.preventDefault();
        overlay.addClass("overlay--show");
        overlay.find(".popup__callback").css("display", "flex");
      });
    });

    function sliderView(el, idx) {
      const subTabs = $("[data-sub-tab]");
      const listSubTab = $(".view__sub-list").eq(idx);

      listSubTab.children().removeClass("view__sub-item--active");

      listSubTab.children().eq(0).addClass("view__sub-item--active");

      el.on("init beforeChange", (_, slick, currentSlide, nextSlide = 0) => {
        subTabs.each(function () {
          $(this).removeClass("view__sub-item--active");
        });

        listSubTab.children().eq(nextSlide).addClass("view__sub-item--active");
      });

      el.on("init afterChange", (_, slick, currentSlide = 0, nextSlide) => {
        const wrap = $(".view__content");
        const wrapNext = $(slick.$slides[currentSlide + 1] || slick.$slides[0]);
        const wrapPrev = $(
          slick.$slides[currentSlide - 1] ||
            slick.$slides[slick.$slides.length - 1]
        );
        const btnPrev = wrap.find(".view__control-btn--prev span");
        const btnNext = wrap.find(".view__control-btn--next span");

        btnNext.text(wrapNext.find(".view__wrap-title").text());
        btnPrev.text(wrapPrev.find(".view__wrap-title").text());
      });

      if (el.hasClass("slick-initialized")) {
        el.slick("setPosition");
        return;
      }

      const slider = el.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplaySpeed: 2000,
        arrows: false,
      });

      listSubTab.find(".view__sub-tab").each(function (i) {
        $(this).on("click", (e) => {
          e.preventDefault();

          slider.slick("slickGoTo", i);
        });
      });

      if (document.documentElement.clientWidth <= 510) {
        slider.on("setPosition", function (event, slick) {
          slick.$slides.css("height", slick.$slideTrack.height() + "px");
        });
      }

      $(".view__control-btn--prev").click(function () {
        el.slick("slickPrev");
      });

      $(".view__control-btn--next").click(function () {
        el.slick("slickNext");
      });
    }

    tabs(
      ".view__tab",
      ".view__wrap",
      "view__tabs-item--active",
      ".view__sub-list",
      "view__sub-item--active"
    );

    popupClose.on("click", (e) => {
      e.preventDefault();
      overlay.removeClass("overlay--show");
      overlay.find(".popup__callback").css("display", "none");
      overlay.find('.preview').css('display', 'none')
    });

    sliderFor.on("init", (_, slick, currentSlide = 0, nextSlide) => {
      if (document.documentElement.clientWidth <= 800) {
        slick.$slides.each(function () {
          const source = $(this).data("gallerySrc");
          $(this).attr("src", source);
        });
      }
    });

    sliderNav.on("init", (_, slick, currentSlide = 0, nextSlide) => {
      if (document.documentElement.clientWidth <= 800) {
        slick.$slides.each(function () {
          const source = $(this).data("gallerySrc");
          $(this).attr("src", source);
        });
      }

      $(".gallery__current").text(currentSlide + 1 + "/");
      $(".gallery__total").text(slick.$slides.length);
    });

    sliderNav.on("afterChange", (_, slick, currentSlide = 0, nextSlide) => {
      $(".gallery__current").text(currentSlide + 1 + "/");
      $(".gallery__total").text(slick.$slides.length);
    });

    sliderFor.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      asNavFor: sliderNav,
    });
    sliderNav.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      asNavFor: sliderFor,
      focusOnSelect: true,
      arrows: false,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
          },
        },
      ],
    });

    mainWrap.on("init afterChange", (_, slick, current = 0) => {
      $(".promo__control-img img").css("display", "none");

      current += 1;

      if (current > slick.$slides.length - 1) {
        current = 0;
      }

      $(".promo__control-img img").eq(current).css("display", "block");
    });

    mainWrap.slick({
      arrows: false,
      dots: true,
    });

    featuresSlider.on(
      "init afterChange",
      (_, slick, currentSlide = 0, nextSlide) => {
        $(".layout__slider-text--current").text(currentSlide + 1 + "/");
        $(".layout__slider-text--total").text(slick.$slides.length);
      }
    );

    featuresSlider.slick({
      arrows: false,
    });

    if (document.documentElement.clientWidth <= 480) {
      featuresSlider.slick("unslick");
    }

    otherSlider.on(
      "init afterChange",
      (_, slick, currentSlide = 0, nextSlide) => {
        if (document.documentElement.clientWidth < 760) {
          const title = $(slick.$slides[currentSlide]).find(".other__title");
          const otherRight = $(slick.$slides[currentSlide]).find(
            ".other__right"
          );
          otherRight.append(title);
        }
        $(".other__current").text(currentSlide + 1 + "/");
        $(".other__total").text(slick.$slides.length);
        $(".slider-control__text--current").text(currentSlide + 1);
        $(".slider-control__text--total").text(slick.$slides.length);
      }
    );

    otherSlider.slick({
      arrows: false,
      dots: true,
      appendDots: $(".slider-control__item--dots"),
    });

    paperSlider.on("init afterChange", () => {
      paperSlider.on("setPosition", function (event, slick) {
        slick.$slides.css("height", slick.$slideTrack.height() + "px");
      });
    });

    paperSlider.slick({
      arrows: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 650,
          settings: {
            slidesToShow: 1,
          },
        },
      ],
    });

    $(".promo__control-content").click(function () {
      mainWrap.slick("slickNext");
    });

    $(".promo__control-btn--next").click(function () {
      mainWrap.slick("slickNext");
    });

    $(".promo__control-btn--prev").click(function () {
      mainWrap.slick("slickPrev");
    });

    $(".gallery__control-btn--prev").click(function () {
      sliderNav.slick("slickPrev");
    });

    $(".gallery__control-btn--next").click(function () {
      sliderNav.slick("slickNext");
    });

    $(".features__btn-prev").click(function () {
      featuresSlider.slick("slickPrev");
    });

    $(".features__btn-next").click(function () {
      featuresSlider.slick("slickNext");
    });

    $(".other__btn-prev").click(function () {
      otherSlider.slick("slickPrev");
    });

    $(".other__btn-next").click(function () {
      otherSlider.slick("slickNext");
    });

    $(".paper__btn-prev").click(function () {
      paperSlider.slick("slickPrev");
    });

    $(".paper__btn-next").click(function () {
      paperSlider.slick("slickNext");
    });

    let map;
    let map2;

    const infrastructure = {
      pharmacy: [
        {
          position: { lat: 50.5478458, lng: 30.2089071 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5504478, lng: 30.2090057 },
          icon: "assets/images/marker.svg",
        },
      ],
      bank: [

        {
          position: { lat: 50.5490812, lng: 30.2078007 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5511714, lng: 30.2118802 },
          icon: "assets/images/marker.svg",
        },
      ],
      shop: [
        {
          position: { lat: 50.5490659, lng: 30.2057488 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5515581, lng: 30.2126756 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5531882, lng: 30.2136539 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5551882, lng: 30.2136539 },
          icon: "assets/images/marker.svg",
          category:'shop',
        },
      ],
      post: [
        {
          position: { lat: 50.5507493, lng: 30.2064472 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5458633, lng: 30.2143231 },
          icon: "assets/images/marker.svg",
        },
      ],
      market: [

        {
          position: { lat: 50.547468, lng: 30.2166466 },
          icon: "assets/images/marker.svg",
        },
      ],
      parks: [
        {
          position: { lat: 50.5480098, lng: 30.2170865 },
          icon: "assets/images/marker.svg",
          category:'parks'
        },
      ],
      train: [
        {
          position: { lat: 50.548879, lng: 30.2202844 },
          icon: "assets/images/marker.svg",
          category:'train'
        },
      ],

      learning: [
        {
          position: { lat: 50.5529675, lng: 30.2154544 },
          icon: "assets/images/marker.svg",
        },
        {
          position: { lat: 50.5506204, lng: 30.2132308 },
          icon: "assets/images/marker.svg",
          category:'learning'
        },
      ],
      maill: [
        {
          position: { lat: 50.5490833, lng: 30.2165326 },
          icon: "assets/images/marker.svg",
          category:'maill'
        },
      ],
      stadium: [
        {
          position: { lat: 50.5540467, lng: 30.2132308 },
          icon: "assets/images/marker.svg",
          category:'stadium'
        },
      ]
    }

    map = new google.maps.Map(document.querySelector(".map__wrap"), {
      center: { lat: 50.5512484, lng: 30.2116098 },
      zoom: 16,
      styles: [
        {
          stylers: [
            {
              saturation: -100,
            },
            {
              gamma: 1,
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.business",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.business",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
        {
          featureType: "water",
          stylers: [
            {
              visibility: "on",
            },
            {
              saturation: 50,
            },
            {
              gamma: 0,
            },
            {
              hue: "#50a5d1",
            },
          ],
        },
        {
          featureType: "administrative.neighborhood",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#333333",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text",
          stylers: [
            {
              weight: 0.5,
            },
            {
              color: "#333333",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "labels.icon",
          stylers: [
            {
              gamma: 1,
            },
            {
              saturation: 50,
            },
          ],
        },
      ],
    });


    let markers2 = [
        {
          position: { lat: 50.548071, lng: 30.211061 },
          icon: "assets/images/mark-icon.svg",
        },
      {
        position: { lat: 50.5478458, lng: 30.2089071 },
        icon: "assets/images/marker-pharmacy.svg",
        category: 'pharmacy'
      },
      {
        position: { lat: 50.5504478, lng: 30.2090057 },
        icon: "assets/images/marker-ambulance.svg",
        category: 'ambulance'
      },

      {
        position: { lat: 50.5490812, lng: 30.2078007 },
        icon: "assets/images/marker-bank.svg",
        category: 'bank'
      },
      {
        position: { lat: 50.5511714, lng: 30.2118802 },
        icon: "assets/images/marker-bank.svg",
        category: 'bank'
      },
      {
        position: { lat: 50.5490659, lng: 30.2057488 },
        icon: "assets/images/marker-market.svg",
        category: 'market'
      },
      {
        position: { lat: 50.5515581, lng: 30.2126756 },
        icon: "assets/images/marker-market.svg",
        category: 'market'
      },
      {
        position: { lat: 50.5531882, lng: 30.2136539 },
        icon: "assets/images/marker-market.svg",
        category: 'market'
      },
      {
        position: { lat: 50.5551882, lng: 30.2136539 },
        icon: "assets/images/marker-market.svg",
        category: 'market',
      },
      {
        position: { lat: 50.5507493, lng: 30.2064472 },
        icon: "assets/images/marker-post.svg",
        category: 'post'
      },
      {
        position: { lat: 50.5458633, lng: 30.2143231 },
        icon: "assets/images/marker-post.svg",
        category: 'post'
      },

      {
        position: { lat: 50.547468, lng: 30.2166466 },
        icon: "assets/images/marker-market.svg",
        category: 'market'
      },
      {
        position: { lat: 50.547468, lng: 30.2166466 },
        icon: "assets/images/marker-market2.svg",
        category: 'market2'
      },
      {
        position: { lat: 50.5480098, lng: 30.2170865 },
        icon: "assets/images/marker-tree.svg",
        category:'parks'
      },
      {
        position: { lat: 50.548879, lng: 30.2202844 },
        icon: "assets/images/marker-train.svg",
        category:'train'
      },
      {
        position: { lat: 50.5529675, lng: 30.2154544 },
        icon: "assets/images/marker-school.svg",
        category: 'learning'
      },
      {
        position: { lat: 50.5506204, lng: 30.2132308 },
        icon: "assets/images/marker-school.svg",
        category:'learning'
      },
      {
        position: { lat: 50.5490833, lng: 30.2165326 },
        icon: "assets/images/marker-mall.svg",
        category:'mall'
      },
      {
        position: { lat: 50.5540467, lng: 30.2132308 },
        icon: "assets/images/marker-stadium.svg",
        category:'stadium'
      }
    ]
    let markersOnMap = [];
    let activeCategories = new Set();
    function setMapOnAll(map) {
        markers2.forEach(function (newMark) {
          let marker = new google.maps.Marker(newMark);
          const infowindow = new google.maps.InfoWindow({
            content: `new Content` + Math.random() * 10
          });
          marker.addListener("click", (e) => {
            
          });
          marker.setMap(map);
          marker.category = newMark.category;
          activeCategories.add(newMark.category)
          markersOnMap.push(marker);
        })
    }

    function clearMarkers() {
      setMapOnAll(null);
    }

    function deleteMarkers() {
      clearMarkers();
    }

    $("[data-map]").each(function () {
      $(this).on("click", (e) => {
        e.preventDefault();
        $(this).closest(".map__item").toggleClass('map__item--active')

        if($(this).closest(".map__item").hasClass('map__item--active')) {
          markers2[$(this).data('map')] = infrastructure[$(this).data('map')]
          activeCategories.add(this.dataset.map);
          // console.log(activeCategories)
          // setMapOnAll(map)
          // return
        }else {
          activeCategories.delete(this.dataset.map);
        }


        delete markers2[$(this).data('map')]
        newFilterMarkers(markersOnMap, activeCategories)
        // deleteMarkers()
      })
    })
  function newFilterMarkers(markersArray, categoriesArray) {
    console.log(markersArray, categoriesArray)
    markersArray.forEach(mark=>{
      if (categoriesArray.has(mark.category) ){
        mark.setVisible(true)
      }else {
        mark.setVisible(false)
      }

      if(!mark.category) mark.setVisible(true)

    })

  }

    $('.map__item').each(function () {
      $(this).addClass('map__item--active')
     markers2[$(this).find('[data-map]').data('map')] =  infrastructure[$(this).find('[data-map]').data('map')]
      setMapOnAll(map)
    })

    map2 = new google.maps.Map(document.querySelector(".contacts__map"), {
      center: { lat: 50.5527543, lng: 30.210192 },
      zoom: 16,
      styles: [
        {
          stylers: [
            {
              saturation: -100,
            },
            {
              gamma: 1,
            },
          ],
        },
        {
          elementType: "labels.text.stroke",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.business",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.business",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels.text",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "poi.place_of_worship",
          elementType: "labels.icon",
          stylers: [
            {
              visibility: "off",
            },
          ],
        },
        {
          featureType: "road",
          elementType: "geometry",
          stylers: [
            {
              visibility: "simplified",
            },
          ],
        },
        {
          featureType: "water",
          stylers: [
            {
              visibility: "on",
            },
            {
              saturation: 50,
            },
            {
              gamma: 0,
            },
            {
              hue: "#50a5d1",
            },
          ],
        },
        {
          featureType: "administrative.neighborhood",
          elementType: "labels.text.fill",
          stylers: [
            {
              color: "#333333",
            },
          ],
        },
        {
          featureType: "road.local",
          elementType: "labels.text",
          stylers: [
            {
              weight: 0.5,
            },
            {
              color: "#333333",
            },
          ],
        },
        {
          featureType: "transit.station",
          elementType: "labels.icon",
          stylers: [
            {
              gamma: 1,
            },
            {
              saturation: 50,
            },
          ],
        },
      ],
    });

    const markers = [
      {
        position: { lat: 50.548071, lng: 30.211061 },
        icon: "assets/images/mark-icon.svg",
      },

    ];

    markers.forEach((item) => {
      let marker = new google.maps.Marker(item);
      marker.setMap(map2);
    });

    (function(d, s){
      var js = d.createElement(s);
      window.WepsterInit = {
        hash: 'nfaFGJ679nhpsGC23'};
      js.src = 'https://my.wepster.com/init.js';
      document.getElementsByTagName('head')[0].appendChild(js);
    }(document, 'script'));

    (function () {
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());

      gtag('config', 'UA-175160820-1');
    })()
  })(jQuery);
});
