; /* /bitrix/js/main/core/core.min.js?153815138575710*/
; /* /bitrix/js/main/core/core_promise.min.js?15381513852478*/
; /* /bitrix/js/main/core/core_ajax.min.js?153815138523760*/
; /* /bitrix/js/main/json/json2.min.js?14183931673467*/
; /* /bitrix/js/main/core/core_ls.min.js?14328944187365*/
; /* /bitrix/js/main/core/core_fx.min.js?14909536449768*/
; /* /bitrix/js/main/core/core_popup.js?153563059370773*/
; /* /bitrix/js/main/core/core_date.min.js?152648531538300*/

; /* Start:"a:4:{s:4:"full";s:48:"/bitrix/js/main/core/core.min.js?153815138575710";s:6:"source";s:28:"/bitrix/js/main/core/core.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
if(typeof WeakMap==="undefined"){(function(){var e=Date.now()%1e9;var t=function(t){this.name="__bx"+(Math.random()*1e9>>>0)+e++};t.prototype={set:function(e,t){if(!this.isValid(e)){throw new TypeError("Invalid value used as weak map key")}var n=e[this.name];if(n&&n[0]===e){n[1]=t}else{Object.defineProperty(e,this.name,{value:[e,t],writable:true})}return this},get:function(e){if(!this.isValid(e)){return undefined}var t=e[this.name];return t&&t[0]===e?t[1]:undefined},delete:function(e){if(!this.isValid(e)){return false}var t=e[this.name];if(!t){return false}var n=t[0]===e;t[0]=t[1]=undefined;return n},has:function(e){if(!this.isValid(e)){return false}var t=e[this.name];return t&&t[0]===e},isValid:function(e){return e&&(typeof e==="object"||typeof e==="function")}};window.WeakMap=t})()}if(!Object.values){Object.values=function e(t){var n=[];for(var i in t){if(t.hasOwnProperty(i)&&t.propertyIsEnumerable(i)){n.push(t[i])}}return n}}(function(window){if(!!window.BX&&!!window.BX.extend)return;var _bxtmp;if(!!window.BX){_bxtmp=window.BX}window.BX=function(e,t){if(BX.type.isNotEmptyString(e)){var n;if(!!t&&null!=NODECACHE[e])n=NODECACHE[e];n=n||document.getElementById(e);if(!!t)NODECACHE[e]=n;return n}else if(BX.type.isDomNode(e))return e;else if(BX.type.isFunction(e))return BX.ready(e);return null};BX.debugEnableFlag=true;BX.message=function(e){if(BX.type.isString(e)){if(typeof BX.message[e]=="undefined"){BX.onCustomEvent("onBXMessageNotFound",[e]);if(typeof BX.message[e]=="undefined"){BX.debug("message undefined: "+e);BX.message[e]=""}}return BX.message[e]}else{for(var t in e){if(e.hasOwnProperty(t)){BX.message[t]=e[t]}}return true}};if(!!_bxtmp){for(var i in _bxtmp){if(_bxtmp.hasOwnProperty(i)){if(!BX[i]){BX[i]=_bxtmp[i]}else if(i=="message"){for(var j in _bxtmp[i]){if(_bxtmp[i].hasOwnProperty(j)){BX.message[j]=_bxtmp[i][j]}}}}}_bxtmp=null}var __readyHandler=null,readyBound=false,readyList=[],proxyList=new WeakMap,deferList=new WeakMap,NODECACHE={},deniedEvents=[],eventsList=new WeakMap,customEvents=new WeakMap,customEventsCnt=0,garbageCollectors=[],cssList=[],cssInit=false,jsList=[],jsInit=false,bSafari=navigator.userAgent.toLowerCase().indexOf("webkit")!=-1,bOpera=navigator.userAgent.toLowerCase().indexOf("opera")!=-1,bFirefox=navigator.userAgent.toLowerCase().indexOf("firefox")!=-1,bChrome=navigator.userAgent.toLowerCase().indexOf("chrome")!=-1,bIE=document.attachEvent&&!bOpera,r={script:/<script([^>]*)>/gi,script_end:/<\/script>/gi,script_src:/src=["\']([^"\']+)["\']/i,script_type:/type=["\']([^"\']+)["\']/i,space:/\s+/,ltrim:/^[\s\r\n]+/g,rtrim:/[\s\r\n]+$/g,style:/<link.*?(rel="stylesheet"|type="text\/css")[^>]*>/i,style_href:/href=["\']([^"\']+)["\']/i},eventTypes={click:"MouseEvent",dblclick:"MouseEvent",mousedown:"MouseEvent",mousemove:"MouseEvent",mouseout:"MouseEvent",mouseover:"MouseEvent",mouseup:"MouseEvent",focus:"MouseEvent",blur:"MouseEvent"},lastWait=[],CHECK_FORM_ELEMENTS={tagName:/^INPUT|SELECT|TEXTAREA|BUTTON$/i},PRELOADING=1,PRELOADED=2,LOADING=3,LOADED=4,assets={},isAsync=null;BX.MSLEFT=1;BX.MSMIDDLE=2;BX.MSRIGHT=4;BX.AM_PM_UPPER=1;BX.AM_PM_LOWER=2;BX.AM_PM_NONE=false;BX.ext=function(e){for(var t in e){if(e.hasOwnProperty(t)){this[t]=e[t]}}};BX.extend=function(e,t){var n=function(){};n.prototype=t.prototype;e.prototype=new n;e.prototype.constructor=e;e.superclass=t.prototype;if(t.prototype.constructor==Object.prototype.constructor){t.prototype.constructor=t}};BX.namespace=function(e){var t=e.split(".");var n=BX;if(t[0]==="BX"){t=t.slice(1)}for(var i=0;i<t.length;i++){if(typeof n[t[i]]==="undefined"){n[t[i]]={}}n=n[t[i]]}return n};BX.getClass=function(e){if(!BX.type.isNotEmptyString(e)){return null}var t=null;var n=window;var i=e.split(".");for(var r=0;r<i.length;r++){var o=i[r];if(!n[o]){return null}n=n[o];t=n}return t};BX.debug=function(){if(BX.debugStatus()){if(window.console&&window.console.log){window.console.log("BX.debug: ",arguments.length>0?arguments:arguments[0]);if(arguments[0]instanceof Error&&arguments[0].stack){window.console.log("BX.debug error stack trace",arguments[0].stack)}}if(window.console&&window.console.trace)console.trace()}};BX.debugEnable=function(e){e=typeof e=="boolean"?e:true;BX.debugEnableFlag=e};BX.debugStatus=function(){return BX.debugEnableFlag};BX.is_subclass_of=function(e,t){if(e instanceof t)return true;if(t.superclass)return BX.is_subclass_of(e,t.superclass);return false};BX.clearNodeCache=function(){NODECACHE={};return false};BX.bitrix_sessid=function(){return BX.message("bitrix_sessid")};BX.create=function(e,t,n){n=n||document;if(null==t&&typeof e=="object"&&e.constructor!==String){t=e;e=e.tag}var i;if(BX.browser.IsIE()&&!BX.browser.IsIE9()&&null!=t&&null!=t.props&&(t.props.name||t.props.id)){i=n.createElement("<"+e+(t.props.name?' name="'+t.props.name+'"':"")+(t.props.id?' id="'+t.props.id+'"':"")+">")}else{i=n.createElement(e)}return t?BX.adjust(i,t):i};BX.adjust=function(e,t){var n,i;if(!e.nodeType)return null;if(e.nodeType==9)e=e.body;if(t.attrs){for(n in t.attrs){if(t.attrs.hasOwnProperty(n)){if(n=="class"||n=="className")e.className=t.attrs[n];else if(n=="for")e.htmlFor=t.attrs[n];else if(t.attrs[n]=="")e.removeAttribute(n);else e.setAttribute(n,t.attrs[n])}}}if(t.style){for(n in t.style){if(t.style.hasOwnProperty(n)){e.style[n]=t.style[n]}}}if(t.props){for(n in t.props){if(t.props.hasOwnProperty(n)){e[n]=t.props[n]}}}if(t.events){for(n in t.events){if(t.events.hasOwnProperty(n)){BX.bind(e,n,t.events[n])}}}if(t.dataset){for(n in t.dataset){if(t.dataset.hasOwnProperty(n)){e.dataset[n]=t.dataset[n]}}}if(t.children&&t.children.length>0){for(n=0,i=t.children.length;n<i;n++){if(BX.type.isNotEmptyString(t.children[n]))e.innerHTML+=t.children[n];else if(BX.type.isElementNode(t.children[n]))e.appendChild(t.children[n])}}else if(t.text){BX.cleanNode(e);e.appendChild((e.ownerDocument||document).createTextNode(t.text))}else if(typeof t.html!=="undefined"){e.innerHTML=t.html}return e};BX.remove=function(e){if(e&&null!=e.parentNode)e.parentNode.removeChild(e);e=null;return null};BX.cleanNode=function(e,t){e=BX(e);t=!!t;if(e&&e.childNodes){while(e.childNodes.length>0)e.removeChild(e.firstChild)}if(e&&t){e=BX.remove(e)}return e};BX.html=function(e,t,n){if(typeof t=="undefined")return e.innerHTML;if(typeof n=="undefined")n={};t=BX.processHTML(t.toString());var i=[];var r=[];if(typeof t.STYLE!="undefined"&&t.STYLE.length>0){for(var o in t.STYLE)i.push(t.STYLE[o])}if(typeof t.SCRIPT!="undefined"&&t.SCRIPT.length>0){for(var o in t.SCRIPT){if(t.SCRIPT[o].isInternal)r.push(t.SCRIPT[o].JS);else i.push(t.SCRIPT[o].JS)}}if(n.htmlFirst&&typeof t.HTML!="undefined"&&e){e.innerHTML=t.HTML}var s=new BX.Promise;var a=function(){if(!n.htmlFirst&&typeof t.HTML!="undefined"&&e){e.innerHTML=t.HTML}for(var i in r){BX.evalGlobal(r[i])}if(BX.type.isFunction(n.callback)){n.callback()}s.fulfill()};if(i.length>0){BX.load(i,a)}else{a()}return s};BX.insertAfter=function(e,t){t.parentNode.insertBefore(e,t.nextSibling)};BX.prepend=function(e,t){t.insertBefore(e,t.firstChild)};BX.append=function(e,t){t.appendChild(e)};BX.addClass=function(e,t){var n;e=BX(e);t=BX.util.trim(t);if(t=="")return e;if(e){if(!e.className){e.className=t}else if(!!e.classList&&t.indexOf(" ")<0){e.classList.add(t)}else{n=(t||"").split(r.space);var i=" "+e.className+" ";for(var o=0,s=n.length;o<s;o++){if(i.indexOf(" "+n[o]+" ")<0){e.className+=" "+n[o]}}}}return e};BX.removeClass=function(e,t){e=BX(e);if(e){if(e.className&&!!t){if(BX.type.isString(t)){if(!!e.classList&&t.indexOf(" ")<0){e.classList.remove(t)}else{var n=t.split(r.space),i=" "+e.className+" ";for(var o=0,s=n.length;o<s;o++){i=i.replace(" "+n[o]+" "," ")}e.className=BX.util.trim(i)}}else{e.className=""}}}return e};BX.toggleClass=function(e,t){var n;e=BX(e);if(BX.type.isArray(t)){n=" "+e.className+" ";for(var i=0,r=t.length;i<r;i++){if(BX.hasClass(e,t[i])){n=(" "+n+" ").replace(" "+t[i]+" "," ");n+=" "+t[i>=r-1?0:i+1];i--;break}}if(i==r)e.className+=" "+t[0];else e.className=n;e.className=BX.util.trim(e.className)}else if(BX.type.isNotEmptyString(t)){if(!!e.classList){e.classList.toggle(t)}else{n=e.className;if(BX.hasClass(e,t)){n=(" "+n+" ").replace(" "+t+" "," ")}else{n+=" "+t}e.className=BX.util.trim(n)}}return e};BX.hasClass=function(e,t){e=BX(e);if(!e||!BX.type.isDomNode(e)){BX.debug(e);return false}if(!e.className||!t){return false}if(!!e.classList&&!!t&&t.indexOf(" ")<0){return e.classList.contains(BX.util.trim(t))}else return(" "+e.className+" ").indexOf(" "+t+" ")>=0};BX.setOpacity=function(e,t){if(e.style.filter!=null){e.style.zoom="100%";if(t==100){e.style.filter=""}else{e.style.filter="alpha(opacity="+t.toString()+")"}}else if(e.style.opacity!=null){e.style.opacity=(t/100).toString()}else if(e.style.MozOpacity!=null){e.style.MozOpacity=(t/100).toString()}};BX.hoverEvents=function(e){if(e)return BX.adjust(e,{events:BX.hoverEvents()});else return{mouseover:BX.hoverEventsHover,mouseout:BX.hoverEventsHout}};BX.hoverEventsHover=function(){BX.addClass(this,"bx-hover");this.BXHOVER=true};BX.hoverEventsHout=function(){BX.removeClass(this,"bx-hover");this.BXHOVER=false};BX.focusEvents=function(e){if(e)return BX.adjust(e,{events:BX.focusEvents()});else return{mouseover:BX.focusEventsFocus,mouseout:BX.focusEventsBlur}};BX.focusEventsFocus=function(){BX.addClass(this,"bx-focus");this.BXFOCUS=true};BX.focusEventsBlur=function(){BX.removeClass(this,"bx-focus");this.BXFOCUS=false};BX.setUnselectable=function(e){e.style.userSelect=e.style.MozUserSelect=e.style.WebkitUserSelect=e.style.KhtmlUserSelect=e.style="none";e.setAttribute("unSelectable","on")};BX.setSelectable=function(e){e.style.userSelect=e.style.MozUserSelect=e.style.WebkitUserSelect=e.style.KhtmlUserSelect=e.style="";e.removeAttribute("unSelectable")};BX.styleIEPropertyName=function(e){if(e=="float")e=BX.browser.IsIE()?"styleFloat":"cssFloat";else{var t=BX.browser.isPropertySupported(e);if(t){e=t}else{var n=/(\-([a-z]){1})/g;if(n.test(e)){e=e.replace(n,function(){return arguments[2].toUpperCase()})}}}return e};BX.style=function(e,t,n){if(!BX.type.isElementNode(e))return null;if(n==null){var i;if(e.currentStyle)i=e.currentStyle[BX.styleIEPropertyName(t)];else if(window.getComputedStyle){var r=BX.browser.isPropertySupported(t,true);if(!!r)t=r;i=BX.GetContext(e).getComputedStyle(e,null).getPropertyValue(t)}if(!i)i="";return i}else{e.style[BX.styleIEPropertyName(t)]=n;return e}};BX.focus=function(e){try{e.focus();return true}catch(e){return false}};BX.firstChild=function(e){var t=e.firstChild;while(t&&!BX.type.isElementNode(t)){t=t.nextSibling}return t};BX.lastChild=function(e){var t=e.lastChild;while(t&&!BX.type.isElementNode(t)){t=t.previousSibling}return t};BX.previousSibling=function(e){var t=e.previousSibling;while(t&&!BX.type.isElementNode(t)){t=t.previousSibling}return t};BX.nextSibling=function(e){var t=e.nextSibling;while(t&&!BX.type.isElementNode(t)){t=t.nextSibling}return t};BX.findChildrenByClassName=function(e,t,n){if(!e||!e.childNodes)return null;var r=[];if(typeof e.getElementsByClassName=="undefined"){n=n!==false;r=BX.findChildren(e,{className:t},n)}else{var o=e.getElementsByClassName(t);for(i=0,l=o.length;i<l;i++){r[i]=o[i]}}return r};BX.findChildByClassName=function(e,t,n){if(!e||!e.childNodes)return null;var i=null;if(typeof e.getElementsByClassName=="undefined"){n=n!==false;i=BX.findChild(e,{className:t},n)}else{var r=e.getElementsByClassName(t);if(r&&typeof r[0]!="undefined"){i=r[0]}else{i=null}}return i};BX.findChildren=function(e,t,n){return BX.findChild(e,t,n,true)};BX.findChild=function(e,t,n,i){if(!e||!e.childNodes)return null;n=!!n;i=!!i;var r=e.childNodes.length,o=[];for(var s=0;s<r;s++){var a=e.childNodes[s];if(_checkNode(a,t)){if(i)o.push(a);else return a}if(n==true){var l=BX.findChild(a,t,n,i);if(l){if(i)o=BX.util.array_merge(o,l);else return l}}}if(i||o.length>0)return o;else return null};BX.findParent=function(e,t,n){if(!e)return null;var i=e;while(i.parentNode){var r=i.parentNode;if(_checkNode(r,t))return r;i=r;if(!!n&&(BX.type.isFunction(n)||typeof n=="object")){if(BX.type.isElementNode(n)){if(i==n)break}else{if(_checkNode(i,n))break}}}return null};BX.findNextSibling=function(e,t){if(!e)return null;var n=e;while(n.nextSibling){var i=n.nextSibling;if(_checkNode(i,t))return i;n=i}return null};BX.findPreviousSibling=function(e,t){if(!e)return null;var n=e;while(n.previousSibling){var i=n.previousSibling;if(_checkNode(i,t))return i;n=i}return null};BX.checkNode=function(e,t){return _checkNode(e,t)};BX.findFormElements=function(e){if(BX.type.isString(e))e=document.forms[e]||BX(e);var t=[];if(BX.type.isElementNode(e)){if(e.tagName.toUpperCase()=="FORM"){t=e.elements}else{t=BX.findChildren(e,CHECK_FORM_ELEMENTS,true)}}return t};BX.isParentForNode=function(e,t){if(!BX.type.isDomNode(e)||!BX.type.isDomNode(t))return false;while(true){if(e==t)return true;if(t&&t.parentNode)t=t.parentNode;else break}return false};BX.clone=function(e,t){var n,i,r;if(t!==false)t=true;if(e===null)return null;if(BX.type.isDomNode(e)){n=e.cloneNode(t)}else if(typeof e=="object"){if(BX.type.isArray(e)){n=[];for(i=0,r=e.length;i<r;i++){if(typeof e[i]=="object"&&t)n[i]=BX.clone(e[i],t);else n[i]=e[i]}}else{n={};if(e.constructor){if(BX.type.isDate(e))n=new Date(e);else n=new e.constructor}for(i in e){if(typeof e[i]=="object"&&t)n[i]=BX.clone(e[i],t);else n[i]=e[i]}}}else{n=e}return n};BX.getCaretPosition=function(e){var t=0;if(e.selectionStart||e.selectionStart==0){t=e.selectionStart}else if(document.selection){e.focus();var n=document.selection.createRange();n.moveStart("character",-e.value.length);t=n.text.length}return t};BX.setCaretPosition=function(e,t){if(!BX.isNodeInDom(e)||BX.isNodeHidden(e)||e.disabled){return}if(e.setSelectionRange){e.focus();e.setSelectionRange(t,t)}else if(e.createTextRange){var n=e.createTextRange();n.collapse(true);n.moveEnd("character",t);n.moveStart("character",t);n.select()}};BX.merge=function(){var e=Array.prototype.slice.call(arguments);if(e.length<2)return{};var t=e.shift();for(var n=0;n<e.length;n++){for(var i in e[n]){if(typeof e[n]=="undefined"||e[n]==null)continue;if(e[n].hasOwnProperty(i)){if(typeof e[n][i]=="undefined"||e[n][i]==null)continue;if(typeof e[n][i]=="object"&&!BX.type.isDomNode(e[n][i])&&typeof e[n][i]["isUIWidget"]=="undefined"){var r="length"in e[n][i];if(typeof t[i]!="object")t[i]=r?[]:{};if(r)BX.util.array_merge(t[i],e[n][i]);else BX.merge(t[i],e[n][i])}else t[i]=e[n][i]}}}return t};BX.mergeEx=function(){var e=Array.prototype.slice.call(arguments);if(e.length<2){return{}}var t=e.shift();for(var n=0;n<e.length;n++){for(var i in e[n]){if(typeof e[n]=="undefined"||e[n]==null||!e[n].hasOwnProperty(i)){continue}if(BX.type.isPlainObject(e[n][i])&&BX.type.isPlainObject(t[i])){BX.mergeEx(t[i],e[n][i])}else{t[i]=BX.type.isPlainObject(e[n][i])?BX.clone(e[n][i]):e[n][i]}}}return t};BX.bind=function(e,t,n){if(!e||typeof e!=="object"){return}if(t==="mousewheel"){BX.bind(e,"DOMMouseScroll",n)}else if(t==="transitionend"){BX.bind(e,"webkitTransitionEnd",n);BX.bind(e,"msTransitionEnd",n);BX.bind(e,"oTransitionEnd",n)}else if(t==="bxchange"){BX.bind(e,"change",n);BX.bind(e,"cut",n);BX.bind(e,"paste",n);BX.bind(e,"drop",n);BX.bind(e,"keyup",n);return}else if(t==="fullscreenchange"){if(document.cancelFullScreen)BX.bind(e,"fullscreenchange",n);else if(document.mozCancelFullScreen)BX.bind(e,"mozfullscreenchange",n);else if(document.webkitCancelFullScreen)BX.bind(e,"webkitfullscreenchange",n)}if(e.addEventListener){e.addEventListener(t,n,false)}else if(e.attachEvent){e.attachEvent("on"+t,BX.proxy(n,e))}else{try{e["on"+t]=n}catch(e){BX.debug(e)}}var i=eventsList.get(e)||{};if(!BX.type.isArray(i[t])){i[t]=[]}i[t].push(n);eventsList.set(e,i)};BX.unbind=function(e,t,n){if(!e){return}if(t==="mousewheel"){BX.unbind(e,"DOMMouseScroll",n)}else if(t==="transitionend"){BX.unbind(e,"webkitTransitionEnd",n);BX.unbind(e,"msTransitionEnd",n);BX.unbind(e,"oTransitionEnd",n)}else if(t==="bxchange"){BX.unbind(e,"change",n);BX.unbind(e,"cut",n);BX.unbind(e,"paste",n);BX.unbind(e,"drop",n);BX.unbind(e,"keyup",n);return}if(e.removeEventListener){e.removeEventListener(t,n,false)}else if(e.detachEvent){e.detachEvent("on"+t,BX.proxy(n,e))}else{e["on"+t]=null}var i=eventsList.get(e);if(i&&BX.type.isArray(i[t])){i[t]=i[t].filter(function(e){return e!==n})}};BX.getEventButton=function(e){e=e||window.event;var t=0;if(typeof e.which!="undefined"){switch(e.which){case 1:t=t|BX.MSLEFT;break;case 2:t=t|BX.MSMIDDLE;break;case 3:t=t|BX.MSRIGHT;break}}else if(typeof e.button!="undefined"){t=event.button}return t||BX.MSLEFT};BX.unbindAll=function(e){var t=eventsList.get(e);if(!e){return}eventsList.delete(e);for(var n in t){t[n].forEach(function(t){BX.unbind(e,n,t)})}};var captured_events=null,_bind=null;BX.CaptureEvents=function(e,t){if(_bind)return;_bind=BX.bind;captured_events=[];BX.bind=function(n,i,r){if(n===e&&i===t)captured_events.push(r);_bind.apply(this,arguments)}};BX.CaptureEventsGet=function(){if(_bind){BX.bind=_bind;var e=captured_events;_bind=null;captured_events=null;return e}return null};BX.fireEvent=function(e,t){var n=false,i=null;if(BX.type.isDomNode(e)){n=true;if(document.createEventObject){if(eventTypes[t]!="MouseEvent"){i=document.createEventObject();i.type=t;n=e.fireEvent("on"+t,i)}if(e[t]){e[t]()}}else{i=null;switch(eventTypes[t]){case"MouseEvent":i=document.createEvent("MouseEvent");try{i.initMouseEvent(t,true,true,top,1,0,0,0,0,0,0,0,0,0,null)}catch(e){i.initMouseEvent(t,true,true,window,1,0,0,0,0,0,0,0,0,0,null)}break;default:i=document.createEvent("Event");i.initEvent(t,true,true)}n=e.dispatchEvent(i)}}return n};BX.getWheelData=function(e){e=e||window.event;e.wheelData=e.detail?e.detail*-1:e.wheelDelta/40;return e.wheelData};BX.proxy_context=null;BX.delegate=function(e,t){if(!e||!t)return e;return function(){var n=BX.proxy_context;BX.proxy_context=this;var i=e.apply(t,arguments);BX.proxy_context=n;return i}};BX.delegateLater=function(e,t,n){return function(){if(t[e]){var i=BX.proxy_context;BX.proxy_context=this;var r=t[e].apply(n||t,arguments);BX.proxy_context=i;return r}return null}};BX.proxy=function(e,t){return getObjectDelegate(e,t,proxyList)};BX.defer=function(e,t){if(!!t)return BX.defer_proxy(e,t);else return function(){var t=arguments;setTimeout(function(){e.apply(this,t)},10)}};BX.defer_proxy=function(e,t){return getObjectDelegate(e,t,deferList,BX.defer)};function getObjectDelegate(e,t,n,i){if(!BX.type.isFunction(e)||!BX.type.isMapKey(t)){return e}var r=n.get(t);if(!r){r=new WeakMap;n.set(t,r)}var o=r.get(e);if(!o){o=i?i(BX.delegate(e,t)):BX.delegate(e,t);r.set(e,o)}return o}BX.bindOnce=function(e,t,n){return BX.bind(e,t,BX.once(e,t,n))};BX.once=function(e,t,n){var i=function(){BX.unbind(e,t,i);n.apply(this,arguments)};return i};BX.bindDelegate=function(e,t,n,i){var r=BX.delegateEvent(n,i);BX.bind(e,t,r);return r};BX.delegateEvent=function(e,t){return function(n){n=n||window.event;var i=n.target||n.srcElement;while(i!=this){if(_checkNode(i,e)){return t.call(i,n)}if(i&&i.parentNode)i=i.parentNode;else break}return null}};BX.False=function(){return false};BX.DoNothing=function(){};BX.denyEvent=function(e,t){deniedEvents.push([e,t,e["on"+t]]);e["on"+t]=BX.DoNothing};BX.allowEvent=function(e,t){for(var n=0,i=deniedEvents.length;n<i;n++){if(deniedEvents[n][0]==e&&deniedEvents[n][1]==t){e["on"+t]=deniedEvents[n][2];BX.util.deleteFromArray(deniedEvents,n);return}}};BX.fixEventPageXY=function(e){BX.fixEventPageX(e);BX.fixEventPageY(e);return e};BX.fixEventPageX=function(e){if(e.pageX==null&&e.clientX!=null){e.pageX=e.clientX+(document.documentElement&&document.documentElement.scrollLeft||document.body&&document.body.scrollLeft||0)-(document.documentElement.clientLeft||0)}return e};BX.fixEventPageY=function(e){if(e.pageY==null&&e.clientY!=null){e.pageY=e.clientY+(document.documentElement&&document.documentElement.scrollTop||document.body&&document.body.scrollTop||0)-(document.documentElement.clientTop||0)}return e};BX.PreventDefault=function(e){if(!e)e=window.event;if(e.stopPropagation){e.preventDefault();e.stopPropagation()}else{e.cancelBubble=true;e.returnValue=false}return false};BX.eventReturnFalse=function(e){e=e||window.event;if(e&&e.preventDefault)e.preventDefault();else e.returnValue=false;return false};BX.eventCancelBubble=function(e){e=e||window.event;if(e&&e.stopPropagation)e.stopPropagation();else e.cancelBubble=true};BX.addCustomEvent=function(e,t,n){if(BX.type.isString(e)){n=t;t=e;e=window}if(!BX.type.isFunction(n)||!BX.type.isNotEmptyString(t)||!BX.type.isMapKey(e)){return}t=t.toLowerCase();var i=customEvents.get(e)||{};i[t]=BX.type.isArray(i[t])?i[t]:[];n["__bxSort"]=++customEventsCnt;i[t].push(n);customEvents.set(e,i)};BX.removeCustomEvent=function(e,t,n){if(BX.type.isString(e)){n=t;t=e;e=window}t=t.toLowerCase();var i=customEvents.get(e);if(i&&BX.type.isArray(i[t])){for(var r=i[t].length-1;r>=0;r--){if(i[t][r]===n){i[t].splice(r,1)}}}};BX.removeAllCustomEvents=function(e,t){if(BX.type.isString(e)){t=e;e=window}t=t.toLowerCase();var n=customEvents.get(e);if(n){delete n[t]}};BX.onCustomEvent=function(e,t,n,i){if(BX.type.isString(e)){i=n;n=t;t=e;e=window}if(!n){n=[]}t=t.toLowerCase();var r=customEvents.get(window);var o=r&&BX.type.isArray(r[t])?r[t]:[];var s=[];if(e!==window&&BX.type.isMapKey(e)){var a=customEvents.get(e);if(a&&BX.type.isArray(a[t])){s=a[t]}}var l=o.concat(s);l.sort(function(e,t){return e["__bxSort"]-t["__bxSort"]});l.forEach(function(t){if(o.indexOf(t)!==-1||s.indexOf(t)!==-1){t.apply(e,i===true?BX.clone(n):n)}})};BX.bindDebouncedChange=function(e,t,n,i,r){r=r||window;i=i||300;var o="bx-dc-previous-value";BX.data(e,o,e.value);var s=function(t,n){var i=BX.data(e,o);if(typeof i=="undefined"||i!=n){if(typeof r!="object")t(n);else t.apply(r,[n])}};var a=BX.debounce(function(){var n=e.value;s(t,n);BX.data(e,o,n)},i);BX.bind(e,"keyup",a);BX.bind(e,"change",a);BX.bind(e,"input",a);if(BX.type.isFunction(n)){var l=function(){s(n,e.value)};BX.bind(e,"keyup",l);BX.bind(e,"change",l);BX.bind(e,"input",l)}};BX.parseJSON=function(data,context){var result=null;if(BX.type.isNotEmptyString(data)){try{if(data.indexOf("\n")>=0)eval("result = "+data);else result=new Function("return "+data)()}catch(e){BX.onCustomEvent(context,"onParseJSONFailure",[data,context])}}else if(BX.type.isPlainObject(data)){return data}return result};BX.isReady=false;BX.ready=function(e){bindReady();if(!BX.type.isFunction(e)){BX.debug("READY: not a function! ",e)}else{if(BX.isReady)e.call(document);else if(readyList)readyList.push(e)}};BX.submit=function(e,t,n,i){t=t||"save";if(!e["BXFormSubmit_"+t]){e["BXFormSubmit_"+t]=e.appendChild(BX.create("INPUT",{props:{type:"submit",name:t,value:n||"Y"},style:{display:"none"}}))}if(e.sessid)e.sessid.value=BX.bitrix_sessid();setTimeout(BX.delegate(function(){BX.fireEvent(this,"click");if(i)i()},e["BXFormSubmit_"+t]),10)};BX.debounce=function(e,t,n){var i=0;return function(){n=n||this;var r=arguments;clearTimeout(i);i=setTimeout(function(){e.apply(n,r)},t)}};BX.throttle=function(e,t,n){var i=0,r=null,o;return function(){n=n||this;r=arguments;o=true;if(!i){var s=function(){if(o){e.apply(n,r);o=false;i=setTimeout(s,t)}else{i=null}};s()}}};BX.browser={IsIE:function(){return bIE},IsIE6:function(){return/MSIE 6/i.test(navigator.userAgent)},IsIE7:function(){return/MSIE 7/i.test(navigator.userAgent)},IsIE8:function(){return/MSIE 8/i.test(navigator.userAgent)},IsIE9:function(){return!!document.documentMode&&document.documentMode>=9},IsIE10:function(){return!!document.documentMode&&document.documentMode>=10},IsIE11:function(){return BX.browser.DetectIeVersion()>=11},IsOpera:function(){return bOpera},IsSafari:function(){return bSafari},IsFirefox:function(){return bFirefox},IsChrome:function(){return bChrome},IsMac:function(){return/Macintosh/i.test(navigator.userAgent)},IsAndroid:function(){return/Android/i.test(navigator.userAgent)},IsIOS:function(){return/(iPad;)|(iPhone;)/i.test(navigator.userAgent)},IsMobile:function(){return/(ipad|iphone|android|mobile|touch)/i.test(navigator.userAgent)},DetectIeVersion:function(){if(BX.browser.IsOpera()||BX.browser.IsSafari()||BX.browser.IsFirefox()||BX.browser.IsChrome()){return-1}var e=-1;if(!!window.MSStream&&!window.ActiveXObject&&"ActiveXObject"in window){e=11}else if(BX.browser.IsIE10()){e=10}else if(BX.browser.IsIE9()){e=9}else if(BX.browser.IsIE()){e=8}if(e==-1||e==8){var t;if(navigator.appName=="Microsoft Internet Explorer"){t=new RegExp("MSIE ([0-9]+[.0-9]*)");if(t.exec(navigator.userAgent)!=null)e=parseFloat(RegExp.$1)}else if(navigator.appName=="Netscape"){e=11;t=new RegExp("Trident/.*rv:([0-9]+[.0-9]*)");if(t.exec(navigator.userAgent)!=null)e=parseFloat(RegExp.$1)}}return e},DetectAndroidVersion:function(){var e=new RegExp("Android ([0-9]+[.0-9]*)");if(e.exec(navigator.userAgent)!=null)return parseFloat(RegExp.$1);else return 0},IsDoctype:function(e){e=e||document;if(e.compatMode)return e.compatMode=="CSS1Compat";return e.documentElement&&e.documentElement.clientHeight},SupportLocalStorage:function(){return!!BX.localStorage&&!!BX.localStorage.checkBrowser()},addGlobalClass:function(){var e="bx-core";if(BX.hasClass(document.documentElement,e)){return}if(BX.browser.IsIOS()){e+=" bx-ios"}else if(BX.browser.IsMac()){e+=" bx-mac"}else if(BX.browser.IsAndroid()){e+=" bx-android"}e+=BX.browser.IsMobile()?" bx-touch":" bx-no-touch";e+=BX.browser.isRetina()?" bx-retina":" bx-no-retina";var t=-1;if(/AppleWebKit/.test(navigator.userAgent)){e+=" bx-chrome"}else if((t=BX.browser.DetectIeVersion())>0){e+=" bx-ie bx-ie"+t;if(t>7&&t<10&&!BX.browser.IsDoctype()){e+=" bx-quirks"}}else if(/Opera/.test(navigator.userAgent)){e+=" bx-opera"}else if(/Gecko/.test(navigator.userAgent)){e+=" bx-firefox"}BX.addClass(document.documentElement,e)},isPropertySupported:function(e,t){if(!BX.type.isNotEmptyString(e))return false;var n=e.indexOf("-")>-1?f(e):e;t=!!t;var i=n.charAt(0).toUpperCase()+n.slice(1);var r=(n+" "+["Webkit","Moz","O","ms"].join(i+" ")+i).split(" ");var o=document.body||document.documentElement;for(var s=0;s<r.length;s++){var a=r[s];if(o.style[a]!==undefined){var l=a==n?"":"-"+a.substr(0,a.length-n.length).toLowerCase()+"-";return t?l+u(n):a}}function u(e){return e.replace(/([A-Z])/g,function(){return"-"+arguments[1].toLowerCase()})}function f(e){var t=/(\-([a-z]){1})/g;if(t.test(e))return e.replace(t,function(){return arguments[2].toUpperCase()});else return e}return false},addGlobalFeatures:function(e,t){if(!BX.type.isArray(e))return;var n=[];for(var i=0;i<e.length;i++){var r=!!BX.browser.isPropertySupported(e[i]);n.push("bx-"+(r?"":"no-")+e[i].toLowerCase())}BX.addClass(document.documentElement,n.join(" "))},isRetina:function(){return window.devicePixelRatio&&window.devicePixelRatio>=2}};BX.show=function(e,t){if(e.BXDISPLAY||!_checkDisplay(e,t)){e.style.display=e.BXDISPLAY}};BX.hide=function(e,t){if(!e.BXDISPLAY)_checkDisplay(e,t);e.style.display="none"};BX.toggle=function(e,t){if(!t&&BX.type.isElementNode(e)){var n=true;if(e.BXDISPLAY)n=!_checkDisplay(e);else n=e.style.display=="none";if(n)BX.show(e);else BX.hide(e)}else if(BX.type.isArray(t)){for(var i=0,r=t.length;i<r;i++){if(e==t[i]){e=t[i==r-1?0:i+1];break}}if(i==r)e=t[0]}return e};BX.util={array_values:function(e){if(!BX.type.isArray(e))return BX.util._array_values_ob(e);var t=[];for(var n=0,i=e.length;n<i;n++)if(e[n]!==null&&typeof e[n]!="undefined")t.push(e[n]);return t},_array_values_ob:function(e){var t=[];for(var n in e)if(e[n]!==null&&typeof e[n]!="undefined")t.push(e[n]);return t},array_keys:function(e){if(!BX.type.isArray(e))return BX.util._array_keys_ob(e);var t=[];for(var n=0,i=e.length;n<i;n++)if(e[n]!==null&&typeof e[n]!="undefined")t.push(n);return t},_array_keys_ob:function(e){var t=[];for(var n in e)if(e[n]!==null&&typeof e[n]!="undefined")t.push(n);return t},object_keys:function(e){var t=[];for(var n in e){if(e.hasOwnProperty(n)){t.push(n)}}return t},array_merge:function(e,t){if(!BX.type.isArray(e))e=[];if(!BX.type.isArray(t))t=[];var n=e.length,i=0;if(typeof t.length==="number"){for(var r=t.length;i<r;i++){e[n++]=t[i]}}else{while(t[i]!==undefined){e[n++]=t[i++]}}e.length=n;return e},array_flip:function(e){var t={};for(var n in e){t[e[n]]=n}return t},array_diff:function(e,t,n){n=BX.type.isFunction(n)?n:null;var i,r,o,s,a={},l=[];for(i=0,r=t.length;i<r;i++){o=t[i];s=n?n(o):o;a[s]=true}for(i=0,r=e.length;i<r;i++){o=e[i];s=n?n(o):o;if(typeof a[s]==="undefined"){l.push(o)}}return l},array_unique:function(e){var t=0,n,i=e.length;if(i<2)return e;for(;t<i-1;t++){for(n=t+1;n<i;n++){if(e[t]==e[n]){e.splice(n--,1);i--}}}return e},in_array:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return true}return false},array_search:function(e,t){for(var n=0;n<t.length;n++){if(t[n]==e)return n}return-1},object_search_key:function(e,t){if(typeof t[e]!="undefined")return t[e];for(var n in t){if(typeof t[n]=="object"){var i=BX.util.object_search_key(e,t[n]);if(i!==false)return i}}return false},trim:function(e){if(BX.type.isString(e))return e.replace(r.ltrim,"").replace(r.rtrim,"");else return e},urlencode:function(e){return encodeURIComponent(e)},deleteFromArray:function(e,t){return e.slice(0,t).concat(e.slice(t+1))},insertIntoArray:function(e,t,n){return e.slice(0,t).concat([n]).concat(e.slice(t))},htmlspecialchars:function(e){if(typeof e!="string"||!e.replace)return e;return e.replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/</g,"&lt;").replace(/>/g,"&gt;")},htmlspecialcharsback:function(e){if(typeof e!="string"||!e.replace)return e;return e.replace(/\&quot;/g,'"').replace(/&#39;/g,"'").replace(/\&lt;/g,"<").replace(/\&gt;/g,">").replace(/\&amp;/g,"&").replace(/\&nbsp;/g," ")},preg_quote:function(e,t){if(!e.replace)return e;return e.replace(new RegExp("[.\\\\+*?\\[\\^\\]$(){}=!<>|:\\"+(t||"")+"-]","g"),"\\$&")},jsencode:function(e){if(!e||!e.replace)return e;var t=[{c:"\\\\",r:"\\\\"},{c:"\\t",r:"\\t"},{c:"\\n",r:"\\n"},{c:"\\r",r:"\\r"},{c:'"',r:'\\"'},{c:"'",r:"\\'"},{c:"<",r:"\\x3C"},{c:">",r:"\\x3E"},{c:"\\u2028",r:"\\u2028"},{c:"\\u2029",r:"\\u2029"}];for(var n=0;n<t.length;n++)e=e.replace(new RegExp(t[n].c,"g"),t[n].r);return e},getCssName:function(e){if(!BX.type.isNotEmptyString(e)){return""}return e.replace(/[A-Z]/g,function(e){return"-"+e.toLowerCase()})},getJsName:function(e){var t=/\-([a-z]){1}/g;if(t.test(e)){return e.replace(t,function(e,t){return t.toUpperCase()})}return e},nl2br:function(e){if(!e||!e.replace)return e;return e.replace(/([^>])\n/g,"$1<br/>")},str_pad:function(e,t,n,i){n=n||" ";i=i||"right";e=e.toString();if(i=="left")return BX.util.str_pad_left(e,t,n);else return BX.util.str_pad_right(e,t,n)},str_pad_left:function(e,t,n){var i=e.length,r=n.length;if(i>=t)return e;for(;i<t;i+=r)e=n+e;return e},str_pad_right:function(e,t,n){var i=e.length,r=n.length;if(i>=t)return e;for(;i<t;i+=r)e+=n;return e},strip_tags:function(e){return e.split(/<[^>]+>/g).join("")},strip_php_tags:function(e){return e.replace(/<\?(.|[\r\n])*?\?>/g,"")},popup:function(e,t,n){var i,r;if(BX.browser.IsOpera()){i=document.body.offsetWidth;r=document.body.offsetHeight}else{i=screen.width;r=screen.height}return window.open(e,"","status=no,scrollbars=yes,resizable=yes,width="+t+",height="+n+",top="+Math.floor((r-n)/2-14)+",left="+Math.floor((i-t)/2-5))},shuffle:function(e){var t,n;var i=e.length;while(0!==i){n=Math.floor(Math.random()*i);i-=1;t=e[i];e[i]=e[n];e[n]=t}return e},objectSort:function(e,t,n){n=n=="asc"?"asc":"desc";var i=[],r;for(r in e){if(e.hasOwnProperty(r)&&e[r][t]){i.push([r,e[r][t]])}}if(n=="asc"){i.sort(function(e,t){var n,i;if(BX.type.isDate(e[1])){n=e[1].getTime()}else if(!isNaN(e[1])){n=parseInt(e[1])}else{n=e[1].toString().toLowerCase()}if(BX.type.isDate(t[1])){i=t[1].getTime()}else if(!isNaN(t[1])){i=parseInt(t[1])}else{i=t[1].toString().toLowerCase()}if(n>i)return 1;else if(n<i)return-1;else return 0})}else{i.sort(function(e,t){var n,i;if(BX.type.isDate(e[1])){n=e[1].getTime()}else if(!isNaN(e[1])){n=parseInt(e[1])}else{n=e[1].toString().toLowerCase()}if(BX.type.isDate(t[1])){i=t[1].getTime()}else if(!isNaN(t[1])){i=parseInt(t[1])}else{i=t[1].toString().toLowerCase()}if(n<i)return 1;else if(n>i)return-1;else return 0})}var o=Array();for(r=0;r<i.length;r++){o.push(e[i[r][0]])}return o},objectMerge:function(){return BX.mergeEx.apply(window,arguments)},objectClone:function(e){return BX.clone(e,true)},hex2rgb:function(e){var t=e.replace(/[# ]/g,"").replace(/^(.)(.)(.)$/,"$1$1$2$2$3$3").match(/.{2}/g);for(var n=0;n<3;n++){t[n]=parseInt(t[n],16)}return{r:t[0],g:t[1],b:t[2]}},remove_url_param:function(e,t){if(BX.type.isArray(t)){for(var n=0;n<t.length;n++){e=BX.util.remove_url_param(e,t[n])}}else{var i,r;if((i=e.indexOf("?"))>=0&&i!=e.length-1){r=e.substr(i+1);e=e.substr(0,i+1);r=r.replace(new RegExp("(^|&)"+t+"=[^&#]*","i"),"");r=r.replace(/^&/,"");if(BX.type.isNotEmptyString(r)){e=e+r}else{e=e.substr(0,e.length-1)}}}return e},add_url_param:function(e,t){var n;var i="";var r="";var o;for(n in t){e=this.remove_url_param(e,n);i+=(i!=""?"&":"")+n+"="+t[n]}if((o=e.indexOf("#"))>=0){r=e.substr(o);e=e.substr(0,o)}if((o=e.indexOf("?"))>=0){e=e+(o!=e.length-1?"&":"")+i+r}else{e=e+"?"+i+r}return e},buildQueryString:function(e){var t="";for(var n in e){var i=e[n];if(BX.type.isArray(i)){i.forEach(function(e,i){t+=encodeURIComponent(n+"["+i+"]")+"="+encodeURIComponent(e)+"&"})}else{t+=encodeURIComponent(n)+"="+encodeURIComponent(i)+"&"}}if(t.length>0){t=t.substr(0,t.length-1)}return t},even:function(e){return parseInt(e)%2==0},hashCode:function(e){if(!BX.type.isNotEmptyString(e)){return 0}var t=0;for(var n=0;n<e.length;n++){var i=e.charCodeAt(n);t=(t<<5)-t+i;t=t&t}return t},getRandomString:function(e){var t="0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";var n=t.length;e=parseInt(e);if(isNaN(e)||e<=0){e=8}var i="";for(var r=0;r<e;r++){i+=t.charAt(Math.floor(Math.random()*n))}return i},number_format:function(e,t,n,i){var r,o,s,a,l,u="";t=Math.abs(t);if(isNaN(t)||t<0){t=2}n=n||",";if(typeof i==="undefined")i=".";e=(+e||0).toFixed(t);if(e<0){u="-";e=-e}r=parseInt(e,10)+"";o=r.length>3?r.length%3:0;l=o?r.substr(0,o)+i:"";s=r.substr(o).replace(/(\d{3})(?=\d)/g,"$1"+i);a=t?n+Math.abs(e-r).toFixed(t).replace(/-/,"0").slice(2):"";return u+l+s+a},getExtension:function(e){e=e||"";var t=e.split("?")[0].split(".");return t[t.length-1].toLowerCase()},addObjectToForm:function(e,t,n){if(!BX.type.isString(n)){n=""}for(var i in e){if(!e.hasOwnProperty(i)){continue}var r=e[i];var o=n!==""?n+"["+i+"]":i;if(BX.type.isArray(r)){var s={};for(var a=0;a<r.length;a++){s[a]=r[a]}BX.util.addObjectToForm(s,t,o)}else if(BX.type.isPlainObject(r)){BX.util.addObjectToForm(r,t,o)}else{r=BX.type.isFunction(r.toString)?r.toString():"";if(r!==""){t.appendChild(BX.create("INPUT",{attrs:{type:"hidden",name:o,value:r}}))}}}},observe:function(e,t){console.error("BX.util.observe: function is no longer supported by browser.");return false},escapeRegExp:function(e){return e.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}};BX.type={isString:function(e){return e===""?true:e?typeof e=="string"||e instanceof String:false},isNotEmptyString:function(e){return BX.type.isString(e)?e.length>0:false},isBoolean:function(e){return e===true||e===false},isNumber:function(e){return e===0?true:e?typeof e=="number"||e instanceof Number:false},isFunction:function(e){return e===null?false:typeof e=="function"||e instanceof Function},isElementNode:function(e){return e&&typeof e=="object"&&"nodeType"in e&&e.nodeType==1&&e.tagName&&e.tagName.toUpperCase()!="SCRIPT"&&e.tagName.toUpperCase()!="STYLE"&&e.tagName.toUpperCase()!="LINK"},isDomNode:function(e){return e&&typeof e=="object"&&"nodeType"in e},isArray:function(e){return e&&Object.prototype.toString.call(e)=="[object Array]"},isDate:function(e){return e&&Object.prototype.toString.call(e)=="[object Date]"},isPlainObject:function(e){if(!e||typeof e!=="object"||e.nodeType){return false}var t=Object.prototype.hasOwnProperty;try{if(e.constructor&&!t.call(e,"constructor")&&!t.call(e.constructor.prototype,"isPrototypeOf")){return false}}catch(e){return false}var n;for(n in e){}return typeof n==="undefined"||t.call(e,n)},isNotEmptyObject:function(e){for(var t in e){if(e.hasOwnProperty(t))return true}return false},stringToInt:function(e){var t=parseInt(e);return!isNaN(t)?t:0},isMapKey:function(e){return e&&(typeof e==="object"||typeof e==="function")}};BX.validation={checkIfEmail:function(e){var t="[=a-z0-9_+~'!$&*^`|#%/?{}-]";return new RegExp("^\\s*"+t+"+(\\."+t+"+)*@([a-z0-9-]+\\.)+[a-z0-9-]{2,20}\\s*$","i").test(e)},checkIfPhone:function(e){var t=new RegExp(typeof BX.PhoneNumber==="undefined"?BX.PhoneNumber.getValidNumberPattern():"^\\s*\\+?s*[0-9(-)\\s]+\\s*$","i");return t.test(e)}};BX.prop={get:function(e,t,n){return e&&e.hasOwnProperty(t)?e[t]:n},getObject:function(e,t,n){return e&&BX.type.isPlainObject(e[t])?e[t]:n},getElementNode:function(e,t,n){return e&&BX.type.isElementNode(e[t])?e[t]:n},getArray:function(e,t,n){return e&&BX.type.isArray(e[t])?e[t]:n},getFunction:function(e,t,n){return e&&BX.type.isFunction(e[t])?e[t]:n},getNumber:function(e,t,n){if(!(e&&e.hasOwnProperty(t))){return n}var i=e[t];if(BX.type.isNumber(i)){return i}i=parseFloat(i);return!isNaN(i)?i:n},getInteger:function(e,t,n){if(!(e&&e.hasOwnProperty(t))){return n}var i=e[t];if(BX.type.isNumber(i)){return i}i=parseInt(i);return!isNaN(i)?i:n},getBoolean:function(e,t,n){if(!(e&&e.hasOwnProperty(t))){return n}var i=e[t];return BX.type.isBoolean(i)?i:BX.type.isString(i)?i.toLowerCase()==="true":!!i},getString:function(e,t,n){if(!(e&&e.hasOwnProperty(t))){return n}var i=e[t];return BX.type.isString(i)?i:i?i.toString():""},extractDate:function(e){if(!BX.type.isDate(e)){e=new Date}e.setHours(0);e.setMinutes(0);e.setSeconds(0);e.setMilliseconds(0);return e}};BX.isNodeInDom=function(e,t){return e===(t||document)?true:e.parentNode?BX.isNodeInDom(e.parentNode):false};BX.isNodeHidden=function(e){if(e===document)return false;else if(BX.style(e,"display")=="none")return true;else return e.parentNode?BX.isNodeHidden(e.parentNode):true};BX.evalPack=function(e){while(e.length>0){var t=e.shift();if(t.TYPE=="SCRIPT_EXT"||t.TYPE=="SCRIPT_SRC"){BX.loadScript(t.DATA,function(){BX.evalPack(e)});return}else if(t.TYPE=="SCRIPT"){BX.evalGlobal(t.DATA)}}};BX.evalGlobal=function(e){if(e){var t=document.getElementsByTagName("head")[0]||document.documentElement,n=document.createElement("script");n.type="text/javascript";if(!BX.browser.IsIE()){n.appendChild(document.createTextNode(e))}else{n.text=e}t.insertBefore(n,t.firstChild);t.removeChild(n)}};BX.processHTML=function(e,t){var n,i,o,s,a,l=[],u=[];var f=[];var c=r.script.lastIndex=r.script_end.lastIndex=0;while((n=r.script.exec(e))!==null){r.script_end.lastIndex=r.script.lastIndex;var d=r.script_end.exec(e);if(d===null){break}var p=false;if((a=n[1].match(r.script_type))!==null){if(a[1]=="text/html"||a[1]=="text/template")p=true}if(p){f.push([c,r.script_end.lastIndex-c])}else{f.push([c,n.index-c]);var h=t||n[1].indexOf("bxrunfirst")!="-1";if((o=n[1].match(r.script_src))!==null){l.push({bRunFirst:h,isInternal:false,JS:o[1]})}else{var m=n.index+n[0].length;var B=e.substr(m,d.index-m);l.push({bRunFirst:h,isInternal:true,JS:B})}}c=d.index+9;r.script.lastIndex=c}f.push([c,c===0?e.length:e.length-c]);var y="";for(var g=0,X=f.length;g<X;g++){y+=e.substr(f[g][0],f[g][1])}while((i=y.match(r.style))!==null){if((s=i[0].match(r.style_href))!==null&&i[0].indexOf('media="')<0){u.push(s[1])}y=y.replace(i[0],"")}return{HTML:y,SCRIPT:l,STYLE:u}};BX.garbage=function(e,t){garbageCollectors.push({callback:e,context:t})};BX.GetDocElement=function(e){e=e||document;return BX.browser.IsDoctype(e)?e.documentElement:e.body};BX.GetContext=function(e){if(BX.type.isElementNode(e))return e.ownerDocument.parentWindow||e.ownerDocument.defaultView||window;else if(BX.type.isDomNode(e))return e.parentWindow||e.defaultView||window;else return window};BX.GetWindowInnerSize=function(e){var t,n;e=e||document;if(window.innerHeight){t=BX.GetContext(e).innerWidth;n=BX.GetContext(e).innerHeight}else if(e.documentElement&&(e.documentElement.clientHeight||e.documentElement.clientWidth)){t=e.documentElement.clientWidth;n=e.documentElement.clientHeight}else if(e.body){t=e.body.clientWidth;n=e.body.clientHeight}return{innerWidth:t,innerHeight:n}};BX.GetWindowScrollPos=function(e){var t,n;e=e||document;if(window.pageYOffset){t=BX.GetContext(e).pageXOffset;n=BX.GetContext(e).pageYOffset}else if(e.documentElement&&(e.documentElement.scrollTop||e.documentElement.scrollLeft)){t=e.documentElement.scrollLeft;n=e.documentElement.scrollTop}else if(e.body){t=e.body.scrollLeft;n=e.body.scrollTop}return{scrollLeft:t,scrollTop:n}};BX.GetWindowScrollSize=function(e){var t,n;if(!e)e=document;if(e.compatMode&&e.compatMode=="CSS1Compat"){t=e.documentElement.scrollWidth;n=e.documentElement.scrollHeight}else{if(e.body.scrollHeight>e.body.offsetHeight)n=e.body.scrollHeight;else n=e.body.offsetHeight;if(e.body.scrollWidth>e.body.offsetWidth||e.compatMode&&e.compatMode=="BackCompat"||e.documentElement&&!e.documentElement.clientWidth)t=e.body.scrollWidth;else t=e.body.offsetWidth}return{scrollWidth:t,scrollHeight:n}};BX.GetWindowSize=function(e){var t=this.GetWindowInnerSize(e);var n=this.GetWindowScrollPos(e);var i=this.GetWindowScrollSize(e);return{innerWidth:t.innerWidth,innerHeight:t.innerHeight,scrollLeft:n.scrollLeft,scrollTop:n.scrollTop,scrollWidth:i.scrollWidth,scrollHeight:i.scrollHeight}};BX.scrollTop=function(e,t){if(typeof t!="undefined"){if(e==window){throw new Error("scrollTop() for window is not implemented")}else e.scrollTop=parseInt(t)}else{if(e==window)return BX.GetWindowScrollPos().scrollTop;return e.scrollTop}};BX.scrollLeft=function(e,t){if(typeof t!="undefined"){if(e==window){throw new Error("scrollLeft() for window is not implemented")}else e.scrollLeft=parseInt(t)}else{if(e==window)return BX.GetWindowScrollPos().scrollLeft;return e.scrollLeft}};BX.hide_object=function(e){e=BX(e);e.style.position="absolute";e.style.top="-1000px";e.style.left="-1000px";e.style.height="10px";e.style.width="10px"};BX.is_relative=function(e){var t=BX.style(e,"position");return t=="relative"||t=="absolute"};BX.is_float=function(e){var t=BX.style(e,"float");return t=="right"||t=="left"};BX.is_fixed=function(e){var t=BX.style(e,"position");return t=="fixed"};BX.pos=function(e,t){var n={top:0,right:0,bottom:0,left:0,width:0,height:0};t=!!t;if(!e)return n;if(typeof e.getBoundingClientRect!="undefined"&&e.ownerDocument==document&&!t){var i={};try{i=e.getBoundingClientRect()}catch(t){i={top:e.offsetTop,left:e.offsetLeft,width:e.offsetWidth,height:e.offsetHeight,right:e.offsetLeft+e.offsetWidth,bottom:e.offsetTop+e.offsetHeight}}var r=document.documentElement;var o=document.body;n.top=i.top+(r.scrollTop||o.scrollTop);n.left=i.left+(r.scrollLeft||o.scrollLeft);n.width=i.right-i.left;n.height=i.bottom-i.top;n.right=i.right+(r.scrollLeft||o.scrollLeft);n.bottom=i.bottom+(r.scrollTop||o.scrollTop)}else{var s=0,a=0,l=e.offsetWidth,u=e.offsetHeight;var f=true;for(;e!=null;e=e.offsetParent){if(!f&&t&&BX.is_relative(e))break;s+=e.offsetLeft;a+=e.offsetTop;if(f){f=false;continue}var c=parseInt(BX.style(e,"border-left-width")),d=parseInt(BX.style(e,"border-top-width"));if(!isNaN(c)&&c>0)s+=c;if(!isNaN(d)&&d>0)a+=d}n.top=a;n.left=s;n.width=l;n.height=u;n.right=n.left+l;n.bottom=n.top+u}for(var p in n){if(n.hasOwnProperty(p)){n[p]=Math.round(n[p])}}return n};BX.width=function(e,t){if(typeof t!="undefined")BX.style(e,"width",parseInt(t)+"px");else{if(e==window)return window.innerWidth;return BX.pos(e).width}};BX.height=function(e,t){if(typeof t!="undefined")BX.style(e,"height",parseInt(t)+"px");else{if(e==window)return window.innerHeight;return BX.pos(e).height}};BX.align=function(e,t,n,i){if(i)i=i.toLowerCase();else i="";var r=document;if(BX.type.isElementNode(e)){r=e.ownerDocument;e=BX.pos(e)}var o=e["left"],s=e["bottom"];var a=BX.GetWindowScrollPos(r);var l=BX.GetWindowInnerSize(r);if(l.innerWidth+a.scrollLeft-(e["left"]+t)<0){if(e["right"]-t>=0)o=e["right"]-t;else o=a.scrollLeft}if(l.innerHeight+a.scrollTop-(e["bottom"]+n)<0||~i.indexOf("top")){if(e["top"]-n>=0||~i.indexOf("top"))s=e["top"]-n;else s=a.scrollTop}return{left:o,top:s}};BX.scrollToNode=function(e){var t=BX(e);if(t.scrollIntoView)t.scrollIntoView(true);else{var n=BX.pos(t);window.scrollTo(n.left,n.top)}};BX.showWait=function(e,t){e=BX(e)||document.body||document.documentElement;t=t||BX.message("JS_CORE_LOADING");var n=e.id||Math.random();var i=e.bxmsg=document.body.appendChild(BX.create("DIV",{props:{id:"wait_"+n},style:{background:'url("/bitrix/js/main/core/images/wait.gif") no-repeat scroll 10px center #fcf7d1',border:"1px solid #E1B52D",color:"black",fontFamily:"Verdana,Arial,sans-serif",fontSize:"11px",padding:"10px 30px 10px 37px",position:"absolute",zIndex:"10000",textAlign:"center"},text:t}));setTimeout(BX.delegate(_adjustWait,e),10);lastWait[lastWait.length]=i;return i};BX.closeWait=function(e,t){if(e&&!t)t=e.bxmsg;if(e&&!t&&BX.hasClass(e,"bx-core-waitwindow"))t=e;if(e&&!t)t=BX("wait_"+e.id);if(!t)t=lastWait.pop();if(t&&t.parentNode){for(var n=0,i=lastWait.length;n<i;n++){if(t==lastWait[n]){lastWait=BX.util.deleteFromArray(lastWait,n);break}}t.parentNode.removeChild(t);if(e)e.bxmsg=null;BX.cleanNode(t,true)}};BX.setJSList=function(e){if(BX.type.isArray(e)){e=e.map(function(e){return normalizeUrl(e)});jsList=jsList.concat(e)}};BX.getJSList=function(){initJsList();return jsList};BX.setCSSList=function(e){if(BX.type.isArray(e)){e=e.map(function(e){return normalizeUrl(e)});cssList=cssList.concat(e)}};BX.getCSSList=function(){initCssList();return cssList};BX.getJSPath=function(e){return e.replace(/^(http[s]*:)*\/\/[^\/]+/i,"")};BX.getCSSPath=function(e){return e.replace(/^(http[s]*:)*\/\/[^\/]+/i,"")};BX.getCDNPath=function(e){return e};BX.loadScript=function(e,t,n){if(BX.type.isString(e)){e=[e]}return BX.load(e,t,n)};BX.loadCSS=function(e,t,n){if(BX.type.isString(e)){e=[e]}if(BX.type.isArray(e)){e=e.map(function(e){return{url:e,ext:"css"}});BX.load(e,null,t)}};BX.load=function(e,t,n){if(!BX.isReady){var i=arguments;BX.ready(function(){BX.load.apply(this,i)});return null}n=n||document;if(isAsync===null){isAsync="async"in n.createElement("script")||"MozAppearance"in n.documentElement.style||window.opera}return isAsync?loadAsync(e,t,n):loadAsyncEmulation(e,t,n)};BX.convert={toNumber:function(e){if(BX.type.isNumber(e)){return e}e=Number(e);return!isNaN(e)?e:0},nodeListToArray:function(e){try{return Array.prototype.slice.call(e,0)}catch(r){var t=[];for(var n=0,i=e.length;n<i;n++){t.push(e[n])}return t}}};function loadAsync(e,t,n){if(!BX.type.isArray(e)){return}function i(e){e=e||assets;for(var t in e){if(e.hasOwnProperty(t)&&e[t].state!==LOADED){return false}}return true}if(!BX.type.isFunction(t)){t=null}var r={},o,s;for(s=0;s<e.length;s++){o=e[s];o=getAsset(o);r[o.name]=o}var a=false;for(s=0;s<e.length;s++){o=e[s];o=getAsset(o);load(o,function(){if(i(r)){if(!a){t&&t();a=true}}},n)}}function loadAsyncEmulation(e,t,n){function i(e){e.state=PRELOADED;if(BX.type.isArray(e.onpreload)&&e.onpreload){for(var t=0;t<e.onpreload.length;t++){e.onpreload[t].call()}}}function r(e){if(e.state===undefined){e.state=PRELOADING;e.onpreload=[];loadAsset({url:e.url,type:"cache",ext:e.ext},function(){i(e)},n)}}if(!BX.type.isArray(e)){return}if(!BX.type.isFunction(t)){t=null}var o=[].slice.call(e,1);for(var s=0;s<o.length;s++){r(getAsset(o[s]))}load(getAsset(e[0]),e.length===1?t:function(){loadAsyncEmulation.apply(null,[o,t,n])},n)}function load(e,t,n){t=t||BX.DoNothing;if(e.state===LOADED){t();return}if(e.state===PRELOADING){e.onpreload.push(function(){load(e,t,n)});return}e.state=LOADING;loadAsset(e,function(){e.state=LOADED;t()},n)}function loadAsset(e,t,n){t=t||BX.DoNothing;function i(e){s.onload=s.onreadystatechange=s.onerror=null;t()}function r(i){i=i||window.event;if(i.type==="load"||/loaded|complete/.test(s.readyState)&&(!n.documentMode||n.documentMode<9)){window.clearTimeout(e.errorTimeout);window.clearTimeout(e.cssTimeout);s.onload=s.onreadystatechange=s.onerror=null;t()}}function o(){if(e.state!==LOADED&&e.cssRetries<=20){for(var t=0,i=n.styleSheets.length;t<i;t++){if(n.styleSheets[t].href===s.href){r({type:"load"});return}}e.cssRetries++;e.cssTimeout=window.setTimeout(o,250)}}var s;var a=BX.type.isNotEmptyString(e.ext)?e.ext:BX.util.getExtension(e.url);if(a==="css"){s=n.createElement("link");s.type="text/"+(e.type||"css");s.rel="stylesheet";s.href=e.url;e.cssRetries=0;e.cssTimeout=window.setTimeout(o,500)}else{s=n.createElement("script");s.type="text/"+(e.type||"javascript");s.src=e.url}s.onload=s.onreadystatechange=r;s.onerror=i;s.async=false;s.defer=false;e.errorTimeout=window.setTimeout(function(){i({type:"timeout"})},7e3);if(a==="css"){cssList.push(normalizeMinUrl(normalizeUrl(e.url)))}else{jsList.push(normalizeMinUrl(normalizeUrl(e.url)))}var l=null;var u=n.head||n.getElementsByTagName("head")[0];if(a==="css"&&(l=getTemplateLink(u))!==null){l.parentNode.insertBefore(s,l)}else{u.insertBefore(s,u.lastChild)}}function getAsset(e){var t={};if(typeof e==="object"){t=e;t.name=t.name?t.name:BX.util.hashCode(e.url)}else{t={name:BX.util.hashCode(e),url:e}}var n=BX.type.isNotEmptyString(t.ext)?t.ext:BX.util.getExtension(t.url);if(n==="css"&&isCssLoaded(t.url)||isScriptLoaded(t.url)){t.state=LOADED}var i=assets[t.name];if(i&&i.url===t.url){return i}assets[t.name]=t;return t}function normalizeUrl(e){if(!BX.type.isNotEmptyString(e)){return""}e=BX.getJSPath(e);e=e.replace(/\?[0-9]*$/,"");return e}function normalizeMinUrl(e){if(!BX.type.isNotEmptyString(e)){return""}var t=e.indexOf(".min");return t>=0?e.substr(0,t)+e.substr(t+4):e}function isCssLoaded(e){initCssList();e=normalizeUrl(e);var t=normalizeMinUrl(e);return e!==t&&BX.util.in_array(t,cssList)||BX.util.in_array(e,cssList)}function initCssList(){if(!cssInit){var e=document.getElementsByTagName("link");if(!!e&&e.length>0){for(var t=0;t<e.length;t++){var n=e[t].getAttribute("href");if(BX.type.isNotEmptyString(n)){n=normalizeMinUrl(normalizeUrl(n));cssList.push(n)}}}cssInit=true}}function getTemplateLink(e){var t=function(t){var n=e.getElementsByTagName(t);for(var i=0,r=n.length;i<r;i++){var o=n[i].getAttribute("data-template-style");if(BX.type.isNotEmptyString(o)&&o=="true"){return n[i]}}return null};var n=t("link");if(n===null){n=t("style")}return n}function isScriptLoaded(e){initJsList();e=normalizeUrl(e);var t=normalizeMinUrl(e);return e!==t&&BX.util.in_array(t,jsList)||BX.util.in_array(e,jsList)}function initJsList(){if(!jsInit){var e=document.getElementsByTagName("script");if(!!e&&e.length>0){for(var t=0;t<e.length;t++){var n=e[t].getAttribute("src");if(BX.type.isNotEmptyString(n)){n=normalizeMinUrl(normalizeUrl(n));jsList.push(n)}}}jsInit=true}}BX.reload=function(e,t){if(e===true){t=true;e=null}var n=e||top.location.href;var i=n.indexOf("#"),r="";if(i!=-1){r=n.substr(i);n=n.substr(0,i)}if(t&&n.indexOf("clear_cache=Y")<0)n+=(n.indexOf("?")==-1?"?":"&")+"clear_cache=Y";if(r){if(t&&(r.substr(0,5)=="view/"||r.substr(0,6)=="#view/")&&r.indexOf("clear_cache%3DY")<0)r+=(r.indexOf("%3F")==-1?"%3F":"%26")+"clear_cache%3DY";n=n.replace(/(\?|\&)_r=[\d]*/,"");n+=(n.indexOf("?")==-1?"?":"&")+"_r="+Math.round(Math.random()*1e4)+r}top.location.href=n};BX.clearCache=function(){BX.showWait();BX.reload(true)};BX.template=function(e,t,n){BX.ready(function(){_processTpl(BX(e),t,n)})};BX.isAmPmMode=function(e){if(e===true){return BX.message.AMPM_MODE}return BX.message.AMPM_MODE!==false};BX.formatDate=function(e,t){e=e||new Date;var n=e.getHours()||e.getMinutes()||e.getSeconds(),i=!!t?t:n?BX.message("FORMAT_DATETIME"):BX.message("FORMAT_DATE");return i.replace(/YYYY/gi,e.getFullYear()).replace(/MMMM/gi,BX.util.str_pad_left((e.getMonth()+1).toString(),2,"0")).replace(/MM/gi,BX.util.str_pad_left((e.getMonth()+1).toString(),2,"0")).replace(/DD/gi,BX.util.str_pad_left(e.getDate().toString(),2,"0")).replace(/HH/gi,BX.util.str_pad_left(e.getHours().toString(),2,"0")).replace(/MI/gi,BX.util.str_pad_left(e.getMinutes().toString(),2,"0")).replace(/SS/gi,BX.util.str_pad_left(e.getSeconds().toString(),2,"0"))};BX.formatName=function(e,t,n){e=e||{};t=t||"";var i={TITLE:e["TITLE"]||"",NAME:e["NAME"]||"",LAST_NAME:e["LAST_NAME"]||"",SECOND_NAME:e["SECOND_NAME"]||"",LOGIN:e["LOGIN"]||"",NAME_SHORT:e["NAME"]?e["NAME"].substr(0,1)+".":"",LAST_NAME_SHORT:e["LAST_NAME"]?e["LAST_NAME"].substr(0,1)+".":"",SECOND_NAME_SHORT:e["SECOND_NAME"]?e["SECOND_NAME"].substr(0,1)+".":"",EMAIL:e["EMAIL"]||"",ID:e["ID"]||"",NOBR:"","/NOBR":""},r=t;for(var o in i){if(i.hasOwnProperty(o)){r=r.replace("#"+o+"#",i[o])}}r=r.replace(/([\s]+)/gi," ").trim();if(r==""){r=n=="Y"?i["LOGIN"]:"";r=r==""?"Noname":r}return r};BX.getNumMonth=function(e){var t=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"];var n=["january","february","march","april","may","june","july","august","september","october","november","december"];var r=e.toUpperCase();for(i=1;i<=12;i++){if(r==BX.message("MON_"+i).toUpperCase()||r==BX.message("MONTH_"+i).toUpperCase()||r==t[i-1].toUpperCase()||r==n[i-1].toUpperCase()){return i}}return e};BX.parseDate=function(e,t,n,i){if(BX.type.isNotEmptyString(e)){if(!n)n=BX.message("FORMAT_DATE");if(!i)i=BX.message("FORMAT_DATETIME");var r="";for(l=1;l<=12;l++){r=r+"|"+BX.message("MON_"+l)}var o=new RegExp("([0-9]+|[a-z]+"+r+")","ig");var s=e.match(o),a=n.match(/(DD|MI|MMMM|MM|M|YYYY)/gi),l,u,f=[],c=[],d={};if(!s)return null;if(s.length>a.length){a=i.match(/(DD|MI|MMMM|MM|M|YYYY|HH|H|SS|TT|T|GG|G)/gi)}for(l=0,u=s.length;l<u;l++){if(BX.util.trim(s[l])!=""){f[f.length]=s[l]}}for(l=0,u=a.length;l<u;l++){if(BX.util.trim(a[l])!=""){c[c.length]=a[l]}}var p=BX.util.array_search("MMMM",c);if(p>0){f[p]=BX.getNumMonth(f[p]);c[p]="MM"}else{p=BX.util.array_search("M",c);if(p>0){f[p]=BX.getNumMonth(f[p]);c[p]="MM"}}for(l=0,u=c.length;l<u;l++){var h=c[l].toUpperCase();d[h]=h=="T"||h=="TT"?f[l]:parseInt(f[l],10)}if(d["DD"]>0&&d["MM"]>0&&d["YYYY"]>0){var m=new Date;if(t){m.setUTCDate(1);m.setUTCFullYear(d["YYYY"]);m.setUTCMonth(d["MM"]-1);m.setUTCDate(d["DD"]);m.setUTCHours(0,0,0,0)}else{m.setDate(1);m.setFullYear(d["YYYY"]);m.setMonth(d["MM"]-1);m.setDate(d["DD"]);m.setHours(0,0,0,0)}if((!isNaN(d["HH"])||!isNaN(d["GG"])||!isNaN(d["H"])||!isNaN(d["G"]))&&!isNaN(d["MI"])){if(!isNaN(d["H"])||!isNaN(d["G"])){var B=(d["T"]||d["TT"]||"am").toUpperCase()=="PM";var y=parseInt(d["H"]||d["G"]||0,10);if(B){d["HH"]=y+(y==12?0:12)}else{d["HH"]=y<12?y:0}}else{d["HH"]=parseInt(d["HH"]||d["GG"]||0,10)}if(isNaN(d["SS"]))d["SS"]=0;if(t){m.setUTCHours(d["HH"],d["MI"],d["SS"])}else{m.setHours(d["HH"],d["MI"],d["SS"])}}return m}}return null};BX.selectUtils={addNewOption:function(e,t,n,i,r){e=BX(e);if(e){var o=e.length;if(r!==false){for(var s=0;s<o;s++){if(e[s].value==t){return}}}e.options[o]=new Option(n,t,false,false)}if(i===true){this.sortSelect(e)}},deleteOption:function(e,t){e=BX(e);if(e){for(var n=0;n<e.length;n++){if(e[n].value==t){e.remove(n);break}}}},deleteSelectedOptions:function(e){e=BX(e);if(e){var t=0;while(t<e.length){if(e[t].selected){e[t].selected=false;e.remove(t)}else{t++}}}},deleteAllOptions:function(e){e=BX(e);if(e){for(var t=e.length-1;t>=0;t--){e.remove(t)}}},optionCompare:function(e,t){var n=e.optText.toLowerCase();var i=t.optText.toLowerCase();if(n>i)return 1;if(n<i)return-1;return 0},sortSelect:function(e){e=BX(e);if(e){var t=[];var n=e.options.length;var i;for(i=0;i<n;i++){t[i]={optText:e[i].text,optValue:e[i].value}}t.sort(this.optionCompare);e.length=0;n=t.length;for(i=0;i<n;i++){e[i]=new Option(t[i].optText,t[i].optValue,false,false)}}},selectAllOptions:function(e){e=BX(e);if(e){var t=e.length;for(var n=0;n<t;n++){e[n].selected=true}}},selectOption:function(e,t){e=BX(e);if(e){var n=e.length;for(var i=0;i<n;i++){e[i].selected=e[i].value==t}}},addSelectedOptions:function(e,t,n,i){e=BX(e);if(!e)return;var r=e.length;for(var o=0;o<r;o++)if(e[o].selected)this.addNewOption(t,e[o].value,e[o].text,i,n)},moveOptionsUp:function(e){e=BX(e);if(!e)return;var t=e.length;for(var n=0;n<t;n++){if(e[n].selected&&n>0&&e[n-1].selected==false){var i=new Option(e[n].text,e[n].value);e[n]=new Option(e[n-1].text,e[n-1].value);e[n].selected=false;e[n-1]=i;e[n-1].selected=true}}},moveOptionsDown:function(e){e=BX(e);if(!e)return;var t=e.length;for(var n=t-1;n>=0;n--){if(e[n].selected&&n<t-1&&e[n+1].selected==false){var i=new Option(e[n].text,e[n].value);e[n]=new Option(e[n+1].text,e[n+1].value);e[n].selected=false;e[n+1]=i;e[n+1].selected=true}}}};BX.getEventTarget=function(e){if(e.target){return e.target}else if(e.srcElement){return e.srcElement}return null};BX.hint=function(e,t,n,i){if(null==n){n=t;t=""}if(null==e.BXHINT){e.BXHINT=new BX.CHint({parent:e,hint:n,title:t,id:i});e.BXHINT.Show()}};BX.hint_replace=function(e,t,n){if(null==n){n=t;t=""}if(!e||!e.parentNode||!n)return null;var i=new BX.CHint({hint:n,title:t});i.CreateParent();e.parentNode.insertBefore(i.PARENT,e);e.parentNode.removeChild(e);i.PARENT.style.marginLeft="5px";return e};BX.CHint=function(e){this.PARENT=BX(e.parent);this.HINT=e.hint;this.HINT_TITLE=e.title;this.PARAMS={};for(var t in this.defaultSettings){if(null==e[t])this.PARAMS[t]=this.defaultSettings[t];else this.PARAMS[t]=e[t]}if(null!=e.id)this.ID=e.id;this.timer=null;this.bInited=false;this.msover=true;if(this.PARAMS.showOnce){this.__show();this.msover=false;this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)}else if(this.PARENT){BX.bind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.bind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}BX.addCustomEvent("onMenuOpen",BX.delegate(this.disable,this));BX.addCustomEvent("onMenuClose",BX.delegate(this.enable,this))};BX.CHint.prototype.defaultSettings={show_timeout:1e3,hide_timeout:500,dx:2,showOnce:false,preventHide:true,min_width:250};BX.CHint.prototype.CreateParent=function(e,t){if(this.PARENT){BX.unbind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}if(!t)t={};var n="icon";if(t.type&&(t.type=="link"||t.type=="icon"))n=t.type;if(e)n="element";if(n=="icon"){e=BX.create("IMG",{props:{src:t.iconSrc?t.iconSrc:"/bitrix/js/main/core/images/hint.gif"}})}else if(n=="link"){e=BX.create("A",{props:{href:"javascript:void(0)"},html:"[?]"})}this.PARENT=e;BX.bind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.bind(this.PARENT,"mouseout",BX.proxy(this.Hide,this));return this.PARENT};BX.CHint.prototype.Show=function(){this.msover=true;if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__show,this),this.PARAMS.show_timeout)};BX.CHint.prototype.Hide=function(){this.msover=false;if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)};BX.CHint.prototype.__show=function(){if(!this.msover||this.disabled)return;if(!this.bInited)this.Init();if(this.prepareAdjustPos()){this.DIV.style.display="block";this.adjustPos();BX.bind(window,"scroll",BX.proxy(this.__onscroll,this));if(this.PARAMS.showOnce){this.timer=setTimeout(BX.proxy(this.__hide,this),this.PARAMS.hide_timeout)}}};BX.CHint.prototype.__onscroll=function(){if(!BX.admin||!BX.admin.panel||!BX.admin.panel.isFixed())return;if(this.scrollTimer)clearTimeout(this.scrollTimer);this.DIV.style.display="none";this.scrollTimer=setTimeout(BX.proxy(this.Reopen,this),this.PARAMS.show_timeout)};BX.CHint.prototype.Reopen=function(){if(null!=this.timer)clearTimeout(this.timer);this.timer=setTimeout(BX.proxy(this.__show,this),50)};BX.CHint.prototype.__hide=function(){if(this.msover)return;if(!this.bInited)return;BX.unbind(window,"scroll",BX.proxy(this.Reopen,this));if(this.PARAMS.showOnce){this.Destroy()}else{this.DIV.style.display="none"}};BX.CHint.prototype.__hide_immediately=function(){this.msover=false;this.__hide()};BX.CHint.prototype.Init=function(){this.DIV=document.body.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip"},style:{display:"none"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-top-border"},html:'<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'}),this.CONTENT=BX.create("DIV",{props:{className:"bx-panel-tooltip-content"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-underlay"},children:[BX.create("DIV",{props:{className:"bx-panel-tooltip-underlay-bg"}})]})]}),BX.create("DIV",{props:{className:"bx-panel-tooltip-bottom-border"},html:'<div class="bx-panel-tooltip-corner bx-panel-tooltip-left-corner"></div><div class="bx-panel-tooltip-border"></div><div class="bx-panel-tooltip-corner bx-panel-tooltip-right-corner"></div>'})]}));if(this.ID){this.CONTENT.insertBefore(BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-panel-tooltip-close"},events:{click:BX.delegate(this.Close,this)}}),this.CONTENT.firstChild)}if(this.HINT_TITLE){this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-title"},text:this.HINT_TITLE}))}if(this.HINT){this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-text"}})).appendChild(BX.create("SPAN",{html:this.HINT}))}if(this.PARAMS.preventHide){BX.bind(this.DIV,"mouseout",BX.proxy(this.Hide,this));BX.bind(this.DIV,"mouseover",BX.proxy(this.Show,this))}this.bInited=true};BX.CHint.prototype.setContent=function(e){this.HINT=e;if(this.CONTENT_TEXT)this.CONTENT_TEXT.innerHTML=this.HINT;else this.CONTENT_TEXT=this.CONTENT.appendChild(BX.create("DIV",{props:{className:"bx-panel-tooltip-text"}})).appendChild(BX.create("SPAN",{html:this.HINT}))};BX.CHint.prototype.prepareAdjustPos=function(){this._wnd={scrollPos:BX.GetWindowScrollPos(),scrollSize:BX.GetWindowScrollSize()};return BX.style(this.PARENT,"display")!="none"};BX.CHint.prototype.getAdjustPos=function(){var e={},t=BX.pos(this.PARENT),n=0;e.top=t.bottom+this.PARAMS.dx;if(BX.admin&&BX.admin.panel.DIV){n=BX.admin.panel.DIV.offsetHeight+this.PARAMS.dx;if(BX.admin.panel.isFixed()){n+=this._wnd.scrollPos.scrollTop}}if(e.top<n)e.top=n;else{if(e.top+this.DIV.offsetHeight>this._wnd.scrollSize.scrollHeight)e.top=t.top-this.PARAMS.dx-this.DIV.offsetHeight}e.left=t.left;if(t.left<this.PARAMS.dx)t.left=this.PARAMS.dx;else{var i=this.DIV.offsetWidth;var r=this._wnd.scrollSize.scrollWidth-i-this.PARAMS.dx;if(e.left>r)e.left=r}return e};BX.CHint.prototype.adjustWidth=function(){if(this.bWidthAdjusted)return;var e=this.DIV.offsetWidth,t=this.DIV.offsetHeight;if(e>this.PARAMS.min_width)e=Math.round(Math.sqrt(1.618*e*t));if(e<this.PARAMS.min_width)e=this.PARAMS.min_width;this.DIV.style.width=e+"px";if(this._adjustWidthInt)clearInterval(this._adjustWidthInt);this._adjustWidthInt=setInterval(BX.delegate(this._adjustWidthInterval,this),5);this.bWidthAdjusted=true};BX.CHint.prototype._adjustWidthInterval=function(){if(!this.DIV||this.DIV.style.display=="none")clearInterval(this._adjustWidthInt);var e=20,t=1500,n=this.DIV.offsetWidth,i=this.CONTENT_TEXT.offsetWidth;if(n>0&&i>0&&n-i<e&&n<t){this.DIV.style.width=n+e+"px";return}clearInterval(this._adjustWidthInt)};BX.CHint.prototype.adjustPos=function(){this.adjustWidth();var e=this.getAdjustPos();this.DIV.style.top=e.top+"px";this.DIV.style.left=e.left+"px"};BX.CHint.prototype.Close=function(){if(this.ID&&BX.WindowManager)BX.WindowManager.saveWindowOptions(this.ID,{display:"off"});this.__hide_immediately();this.Destroy()};BX.CHint.prototype.Destroy=function(){if(this.PARENT){BX.unbind(this.PARENT,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.PARENT,"mouseout",BX.proxy(this.Hide,this))}if(this.DIV){BX.unbind(this.DIV,"mouseover",BX.proxy(this.Show,this));BX.unbind(this.DIV,"mouseout",BX.proxy(this.Hide,this));BX.cleanNode(this.DIV,true)}};BX.CHint.prototype.enable=function(){this.disabled=false};BX.CHint.prototype.disable=function(){this.__hide_immediately();this.disabled=true};if(document.addEventListener){__readyHandler=function(){document.removeEventListener("DOMContentLoaded",__readyHandler,false);runReady()}}else if(document.attachEvent){__readyHandler=function(){if(document.readyState==="complete"){document.detachEvent("onreadystatechange",__readyHandler);runReady()}}}function bindReady(){if(!readyBound){readyBound=true;if(document.readyState==="complete"){return runReady()}if(document.addEventListener){document.addEventListener("DOMContentLoaded",__readyHandler,false);window.addEventListener("load",runReady,false)}else if(document.attachEvent){document.attachEvent("onreadystatechange",__readyHandler);window.attachEvent("onload",runReady);var e=false;try{e=window.frameElement==null}catch(e){}if(document.documentElement.doScroll&&e)doScrollCheck()}}return null}function runReady(){if(!BX.isReady){if(!document.body)return setTimeout(runReady,15);BX.isReady=true;if(readyList&&readyList.length>0){var e,t=0;while(readyList&&(e=readyList[t++])){try{e.call(document)}catch(e){BX.debug("BX.ready error: ",e)}}readyList=null}}return null}function doScrollCheck(){if(BX.isReady)return;try{document.documentElement.doScroll("left")}catch(e){setTimeout(doScrollCheck,1);return}runReady()}function _adjustWait(){if(!this.bxmsg)return;var e=BX.pos(this),t=e.top;if(t<BX.GetDocElement().scrollTop)t=BX.GetDocElement().scrollTop+5;this.bxmsg.style.top=t+5+"px";if(this==BX.GetDocElement()){this.bxmsg.style.right="5px"}else{this.bxmsg.style.left=e.right-this.bxmsg.offsetWidth-5+"px"}}function _checkDisplay(e,t){if(typeof t!="undefined")e.BXDISPLAY=t;var n=e.style.display||BX.style(e,"display");if(n!="none"){e.BXDISPLAY=e.BXDISPLAY||n;return true}else{e.BXDISPLAY=e.BXDISPLAY||"block";return false}}function _processTpl(e,t,n){if(e){if(n)e.parentNode.removeChild(e);var i={},r=BX.findChildren(e,{attribute:"data-role"},true);for(var o=0,s=r.length;o<s;o++){i[r[o].getAttribute("data-role")]=r[o]}t.apply(e,[i])}}function _checkNode(e,t){t=t||{};if(BX.type.isFunction(t))return t.call(window,e);if(!t.allowTextNodes&&!BX.type.isElementNode(e))return false;var n,i,r;for(n in t){if(t.hasOwnProperty(n)){switch(n){case"tag":case"tagName":if(BX.type.isString(t[n])){if(e.tagName.toUpperCase()!=t[n].toUpperCase())return false}else if(t[n]instanceof RegExp){if(!t[n].test(e.tagName))return false}break;case"class":case"className":if(BX.type.isString(t[n])){if(!BX.hasClass(e,t[n]))return false}else if(t[n]instanceof RegExp){if(!BX.type.isString(e.className)||!t[n].test(e.className))return false}break;case"attr":case"attrs":case"attribute":if(BX.type.isString(t[n])){if(!e.getAttribute(t[n]))return false}else if(BX.type.isArray(t[n])){for(i=0,r=t[n].length;i<r;i++){if(t[n]&&!e.getAttribute(t[n]))return false}}else{for(i in t[n]){if(t[n].hasOwnProperty(i)){var o=e.getAttribute(i);if(t[n][i]instanceof RegExp){if(!BX.type.isString(o)||!t[n][i].test(o)){return false}}else{if(o!=""+t[n][i]){return false}}}}}break;case"property":case"props":if(BX.type.isString(t[n])){if(!e[t[n]])return false}else if(BX.type.isArray(t[n])){for(i=0,r=t[n].length;i<r;i++){if(t[n]&&!e[t[n]])return false}}else{for(i in t[n]){if(BX.type.isString(t[n][i])){if(e[i]!=t[n][i])return false}else if(t[n][i]instanceof RegExp){if(!BX.type.isString(e[i])||!t[n][i].test(e[i]))return false}}}break;case"callback":return t[n](e)}}}return true}function Trash(){var e,t;for(e=0,t=garbageCollectors.length;e<t;e++){try{garbageCollectors[e].callback.apply(garbageCollectors[e].context||window);delete garbageCollectors[e];garbageCollectors[e]=null}catch(e){}}}if(window.attachEvent)window.attachEvent("onunload",Trash);else if(window.addEventListener)window.addEventListener("unload",Trash,false);else window.onunload=Trash;BX(BX.DoNothing);window.BX=BX;BX.browser.addGlobalClass();BX.data=function(e,t,n){if(typeof e=="undefined")return undefined;if(typeof t=="undefined")return undefined;if(typeof n!="undefined"){dataStorage.set(e,t,n)}else{var i;if((i=dataStorage.get(e,t))!=undefined){return i}else{if("getAttribute"in e){i=e.getAttribute("data-"+t.toString());if(i===null){return undefined}return i}}return undefined}};BX.DataStorage=function(){this.keyOffset=1;this.data={};this.uniqueTag="BX-"+Math.random();this.resolve=function(e,t){if(typeof e[this.uniqueTag]=="undefined")if(t){try{Object.defineProperty(e,this.uniqueTag,{value:this.keyOffset++})}catch(t){e[this.uniqueTag]=this.keyOffset++}}else return undefined;return e[this.uniqueTag]};this.get=function(e,t){if(e!=document&&!BX.type.isElementNode(e)||typeof t=="undefined")return undefined;e=this.resolve(e,false);if(typeof e=="undefined"||typeof this.data[e]=="undefined")return undefined;return this.data[e][t]};this.set=function(e,t,n){if(e!=document&&!BX.type.isElementNode(e)||typeof n=="undefined")return;var i=this.resolve(e,true);if(typeof this.data[i]=="undefined")this.data[i]={};this.data[i][t]=n}};var dataStorage=new BX.DataStorage;BX.LazyLoad={images:[],imageStatus:{hidden:-2,error:-1,undefined:0,inited:1,loaded:2},imageTypes:{image:1,background:2},registerImage:function(e,t){if(BX.type.isNotEmptyString(e)){this.images.push({id:e,node:null,src:null,type:null,func:BX.type.isFunction(t)?t:null,status:this.imageStatus.undefined})}},registerImages:function(e,t){if(BX.type.isArray(e)){for(var n=0,i=e.length;n<i;n++){this.registerImage(e[n],t)}}},showImages:function(e){var t=null;var n=false;e=e!==false;for(var i=0,r=this.images.length;i<r;i++){t=this.images[i];if(t.status==this.imageStatus.undefined){this.initImage(t)}if(t.status!==this.imageStatus.inited){continue}if(!t.node||!t.node.parentNode){t.node=null;t.status=this.imageStatus.error;continue}n=true;if(e&&t.func){n=t.func(t)}if(n===true&&this.isElementVisibleOnScreen(t.node)){if(t.type==this.imageTypes.image){t.node.src=t.src}else{t.node.style.backgroundImage="url('"+t.src+"')"}t.node.setAttribute("data-src","");t.status=this.imageStatus.loaded}}},initImage:function(e){e.status=this.imageStatus.error;var t=BX(e.id);if(t){var n=t.getAttribute("data-src");if(BX.type.isNotEmptyString(n)){e.node=t;e.src=n;e.status=this.imageStatus.inited;e.type=e.node.tagName.toLowerCase()=="img"?this.imageTypes.image:this.imageTypes.background}}},isElementVisibleOnScreen:function(e){var t=this.getElementCoords(e);var n=window.pageYOffset||document.documentElement.scrollTop;var i=n+document.documentElement.clientHeight;t.bottom=t.top+e.offsetHeight;var r=t.top>n&&t.top<i;var o=t.bottom<i&&t.bottom>n;return r||o},isElementVisibleOn2Screens:function(e){var t=this.getElementCoords(e);var n=document.documentElement.clientHeight;var i=window.pageYOffset||document.documentElement.scrollTop;var r=i+n;t.bottom=t.top+e.offsetHeight;i-=n;r+=n;var o=t.top>i&&t.top<r;var s=t.bottom<r&&t.bottom>i;return o||s},getElementCoords:function(e){var t=e.getBoundingClientRect();return{originTop:t.top,originLeft:t.left,top:t.top+window.pageYOffset,left:t.left+window.pageXOffset}},onScroll:function(){BX.LazyLoad.showImages()},clearImages:function(){this.images=[]}};BX.getCookie=function(e){var t=document.cookie.match(new RegExp("(?:^|; )"+e.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g,"\\$1")+"=([^;]*)"));return t?decodeURIComponent(t[1]):undefined};BX.setCookie=function(e,t,n){n=n||{};var i=n.expires;if(typeof i=="number"&&i){var r=new Date;r.setTime(r.getTime()+i*1e3);i=n.expires=r}if(i&&i.toUTCString){n.expires=i.toUTCString()}t=encodeURIComponent(t);var o=e+"="+t;for(var s in n){if(!n.hasOwnProperty(s)){continue}o+="; "+s;var a=n[s];if(a!==true){o+="="+a}}document.cookie=o;return true};BX.FixFontSize=function(e){var t,n,i;this.node=null;this.prevWindowSize=0;this.prevWrapperSize=0;this.mainWrapper=null;this.textWrapper=null;this.objList=e.objList;this.minFontSizeList=[];this.minFontSize=0;if(e.onresize){this.prevWindowSize=window.innerWidth||document.documentElement.clientWidth;BX.bind(window,"resize",BX.proxy(BX.throttle(this.onResize,350),this))}if(e.onAdaptiveResize){t=this.objList[0].scaleBy||this.objList[0].node;n=getComputedStyle(t);this.prevWrapperSize=parseInt(n["width"])-parseInt(n["paddingLeft"])-parseInt(n["paddingRight"]);BX.bind(window,"resize",BX.proxy(BX.throttle(this.onAdaptiveResize,350),this))}this.createTestNodes();this.decrease()};BX.FixFontSize.prototype={createTestNodes:function(){this.textWrapper=BX.create("div",{style:{display:"inline-block",whiteSpace:"nowrap"}});this.mainWrapper=BX.create("div",{style:{height:0,overflow:"hidden"},children:[this.textWrapper]})},insertTestNodes:function(){document.body.appendChild(this.mainWrapper)},removeTestNodes:function(){document.body.removeChild(this.mainWrapper)},decrease:function(){var e,t,n,i;this.insertTestNodes();for(var r=this.objList.length-1;r>=0;r--){n=this.objList[r].scaleBy||this.objList[r].node;i=getComputedStyle(n);e=parseInt(i["width"])-parseInt(i["paddingLeft"])-parseInt(i["paddingRight"]);t=parseInt(getComputedStyle(this.objList[r].node)["font-size"]);this.textWrapperSetStyle(this.objList[r].node);if(this.textWrapperInsertText(this.objList[r].node)){while(this.textWrapper.offsetWidth>e&&t>0){this.textWrapper.style.fontSize=--t+"px"}if(this.objList[r].smallestValue){this.minFontSize=this.minFontSize?Math.min(this.minFontSize,t):t;this.minFontSizeList.push(this.objList[r].node)}else{this.objList[r].node.style.fontSize=t+"px"}}}if(this.minFontSizeList.length>0)this.setMinFont();this.removeTestNodes()},increase:function(){this.insertTestNodes();var e,t,n,i;this.insertTestNodes();for(var r=this.objList.length-1;r>=0;r--){n=this.objList[r].scaleBy||this.objList[r].node;i=getComputedStyle(n);e=parseInt(i["width"])-parseInt(i["paddingLeft"])-parseInt(i["paddingRight"]);t=parseInt(getComputedStyle(this.objList[r].node)["font-size"]);this.textWrapperSetStyle(this.objList[r].node);if(this.textWrapperInsertText(this.objList[r].node)){while(this.textWrapper.offsetWidth<e&&t<this.objList[r].maxFontSize){this.textWrapper.style.fontSize=++t+"px"}t--;if(this.objList[r].smallestValue){this.minFontSize=this.minFontSize?Math.min(this.minFontSize,t):t;this.minFontSizeList.push(this.objList[r].node)}else{this.objList[r].node.style.fontSize=t+"px"}}}if(this.minFontSizeList.length>0)this.setMinFont();this.removeTestNodes()},setMinFont:function(){for(var e=this.minFontSizeList.length-1;e>=0;e--){this.minFontSizeList[e].style.fontSize=this.minFontSize+"px"}this.minFontSize=0},onResize:function(){var e=window.innerWidth||document.documentElement.clientWidth;if(this.prevWindowSize>e)this.decrease();else if(this.prevWindowSize<e)this.increase();this.prevWindowSize=e},onAdaptiveResize:function(){var e=this.objList[0].scaleBy||this.objList[0].node,t=getComputedStyle(e),n=parseInt(t["width"])-parseInt(t["paddingLeft"])-parseInt(t["paddingRight"]);if(this.prevWrapperSize>n)this.decrease();else if(this.prevWrapperSize<n)this.increase();this.prevWrapperSize=n},textWrapperInsertText:function(e){if(e.textContent){this.textWrapper.textContent=e.textContent;return true}else if(e.innerText){this.textWrapper.innerText=e.innerText;return true}else{return false}},textWrapperSetStyle:function(e){this.textWrapper.style.fontFamily=getComputedStyle(e)["font-family"];this.textWrapper.style.fontSize=getComputedStyle(e)["font-size"];this.textWrapper.style.fontStyle=getComputedStyle(e)["font-style"];this.textWrapper.style.fontWeight=getComputedStyle(e)["font-weight"];this.textWrapper.style.lineHeight=getComputedStyle(e)["line-height"]}};BX.FixFontSize.init=function(e){return new BX.FixFontSize(e)};if(typeof BX.ParamBag==="undefined"){BX.ParamBag=function(){this._params={}};BX.ParamBag.prototype={initialize:function(e){this._params=e?e:{}},getParam:function(e,t){var n=this._params;return typeof n[e]!="undefined"?n[e]:t},setParam:function(e,t){this._params[e]=t},clear:function(){this._params={}}};BX.ParamBag.create=function(e){var t=new BX.ParamBag;t.initialize(e);return t}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:55:"/bitrix/js/main/core/core_promise.min.js?15381513852478";s:6:"source";s:36:"/bitrix/js/main/core/core_promise.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(t){if(!t.BX){t.BX={}}else if(t.BX.Promise){return}var e=t.BX;e.Promise=function(t,e){this.state=null;this.value=null;this.reason=null;this.next=null;this.ctx=e||this;this.onFulfilled=[];this.onRejected=[]};e.Promise.prototype.fulfill=function(t){this.checkState();this.value=t;this.state=true;this.execute()};e.Promise.prototype.reject=function(t){this.checkState();this.reason=t;this.state=false;this.execute()};e.Promise.prototype.then=function(t,i){if(typeof t=="function"||t instanceof Function){this.onFulfilled.push(t)}if(typeof i=="function"||i instanceof Function){this.onRejected.push(i)}if(this.next===null){this.next=new e.Promise(null,this.ctx)}if(this.state!==null){this.execute()}return this.next};e.Promise.prototype.catch=function(t){if(typeof t=="function"||t instanceof Function){this.onRejected.push(t)}if(this.next===null){this.next=new e.Promise(null,this.ctx)}if(this.state!==null){this.execute()}return this.next};e.Promise.prototype.setAutoResolve=function(t,e){this.timer=setTimeout(function(){if(this.state===null){this[t?"fulfill":"reject"]()}}.bind(this),e||15)};e.Promise.prototype.cancelAutoResolve=function(){clearTimeout(this.timer)};e.Promise.prototype.resolve=function(t){var e=this;if(this===t){this.reject(new TypeError("Promise cannot fulfill or reject itself"))}else if(t&&t.toString()==="[object BX.Promise]"){t.then(function(t){e.fulfill(t)},function(t){e.reject(t)})}else{this.fulfill(t)}};e.Promise.prototype.toString=function(){return"[object BX.Promise]"};e.Promise.prototype.execute=function(){if(this.state===null){return}var i=undefined;var n=undefined;var o=undefined;var s;if(this.state===true){if(this.onFulfilled.length){try{for(s=0;s<this.onFulfilled.length;s++){o=this.onFulfilled[s].apply(this.ctx,[this.value]);if(typeof o!="undefined"){i=o}}}catch(i){if("console"in t){console.dir(i)}if(typeof e.debug!=="undefined"){e.debug(i)}n=i}}else{i=this.value}}else if(this.state===false){if(this.onRejected.length){try{for(s=0;s<this.onRejected.length;s++){o=this.onRejected[s].apply(this.ctx,[this.reason]);if(typeof o!="undefined"){i=o}}}catch(i){if("console"in t){console.dir(i)}if(typeof e.debug!=="undefined"){e.debug(i)}n=i}}else{n=this.reason}}if(this.next!==null){if(typeof n!="undefined"){this.next.reject(n)}else if(typeof i!="undefined"){this.next.resolve(i)}}};e.Promise.prototype.checkState=function(){if(this.state!==null){throw new Error("You can not do fulfill() or reject() multiple times")}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/bitrix/js/main/core/core_ajax.min.js?153815138523760";s:6:"source";s:33:"/bitrix/js/main/core/core_ajax.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(e){if(e.BX.ajax)return;var a=e.BX,t={},r={method:"GET",dataType:"html",timeout:0,async:true,processData:true,scriptsRunFirst:false,emulateOnload:true,skipAuthCheck:false,start:true,cache:true,preparePost:true,headers:false,lsTimeout:30,lsForce:false},s=null,i={},n=[],o={url_utf:/[^\034-\254]+/g,script_self:/\/bitrix\/js\/main\/core\/core(_ajax)*.js$/i,script_self_window:/\/bitrix\/js\/main\/core\/core_window.js$/i,script_self_admin:/\/bitrix\/js\/main\/core\/core_admin.js$/i,script_onload:/window.onload/g};a.ajax=function(e){var s,i;if(!e||!e.url||!a.type.isString(e.url)){return false}for(var n in t)if(typeof e[n]=="undefined")e[n]=t[n];t={};for(n in r)if(typeof e[n]=="undefined")e[n]=r[n];e.method=e.method.toUpperCase();if(!a.localStorage)e.lsId=null;if(a.browser.IsIE()){var u=o.url_utf.exec(e.url);if(u){do{e.url=e.url.replace(u,a.util.urlencode(u));u=o.url_utf.exec(e.url)}while(u)}}if(e.dataType=="json")e.emulateOnload=false;if(!e.cache&&e.method=="GET")e.url=a.ajax._uncache(e.url);if(e.method=="POST"&&e.preparePost){e.data=a.ajax.prepareData(e.data)}var l=true;if(e.lsId&&!e.lsForce){var c=a.localStorage.get("ajax-"+e.lsId);if(c!==null){l=false;var f=function(t){if(t.key=="ajax-"+e.lsId&&t.value!="BXAJAXWAIT"){var r=t.value,s=!!t.oldValue&&r==null;if(!s)a.ajax.__run(e,r);else if(e.onfailure)e.onfailure("timeout");a.removeCustomEvent("onLocalStorageChange",f)}};if(c=="BXAJAXWAIT"){a.addCustomEvent("onLocalStorageChange",f)}else{setTimeout(function(){f({key:"ajax-"+e.lsId,value:c})},10)}}}if(l){e.xhr=a.ajax.xhr();if(!e.xhr)return;if(e.lsId){a.localStorage.set("ajax-"+e.lsId,"BXAJAXWAIT",e.lsTimeout)}e.xhr.open(e.method,e.url,e.async);if(!e.skipBxHeader&&!a.ajax.isCrossDomain(e.url)){e.xhr.setRequestHeader("Bx-ajax","true")}if(e.method=="POST"&&e.preparePost){e.xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded")}if(typeof e.headers=="object"){for(n=0;n<e.headers.length;n++)e.xhr.setRequestHeader(e.headers[n].name,e.headers[n].value)}if(!!e.onprogress){a.bind(e.xhr,"progress",e.onprogress)}var d=false;var p=e.xhr.onreadystatechange=function(t){if(d)return;if(t==="timeout"){if(e.onfailure){e.onfailure("timeout")}a.onCustomEvent(e.xhr,"onAjaxFailure",["timeout","",e]);e.xhr.onreadystatechange=a.DoNothing;e.xhr.abort();if(e.async){e.xhr=null}}else{if(e.xhr.readyState==4||t=="run"){s=a.ajax.xhrSuccess(e.xhr)?"success":"error";d=true;e.xhr.onreadystatechange=a.DoNothing;if(s=="success"){var r=!!e.skipAuthCheck||a.ajax.isCrossDomain(e.url)?false:e.xhr.getResponseHeader("X-Bitrix-Ajax-Status");if(!!r&&r=="Authorize"){if(e.onfailure){e.onfailure("auth",e.xhr.status)}a.onCustomEvent(e.xhr,"onAjaxFailure",["auth",e.xhr.status,e])}else{var i=e.xhr.responseText;if(e.lsId){a.localStorage.set("ajax-"+e.lsId,i,e.lsTimeout)}a.ajax.__run(e,i)}}else{if(e.onfailure){e.onfailure("status",e.xhr.status)}a.onCustomEvent(e.xhr,"onAjaxFailure",["status",e.xhr.status,e])}if(e.async){e.xhr=null}}}};if(e.async&&e.timeout>0){setTimeout(function(){if(e.xhr&&!d){p("timeout")}},e.timeout*1e3)}if(e.start){e.xhr.send(e.data);if(!e.async){p("run")}}return e.xhr}};a.ajax.xhr=function(){if(e.XMLHttpRequest){try{return new XMLHttpRequest}catch(e){}}else if(e.ActiveXObject){try{return new e.ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(e){}try{return new e.ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(e){}try{return new e.ActiveXObject("Msxml2.XMLHTTP")}catch(e){}try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(e){}throw new Error("This browser does not support XMLHttpRequest.")}return null};a.ajax.isCrossDomain=function(t,r){r=r||e.location;if(t.indexOf("//")===0){t=r.protocol+t}if(t.indexOf("http")!==0){return false}var s=e.document.createElement("a");s.href=t;return s.protocol!==r.protocol||s.hostname!==r.hostname||a.ajax.getHostPort(s.protocol,s.host)!==a.ajax.getHostPort(r.protocol,r.host)};a.ajax.getHostPort=function(e,a){var t=/:(\d+)$/.exec(a);if(t){return t[1]}else{if(e==="http:"){return"80"}else if(e==="https:"){return"443"}}return""};a.ajax.__prepareOnload=function(t){if(t.length>0){a.ajax["onload_"+s]=null;for(var r=0,i=t.length;r<i;r++){if(t[r].isInternal){t[r].JS=t[r].JS.replace(o.script_onload,"BX.ajax.onload_"+s)}}}a.CaptureEventsGet();a.CaptureEvents(e,"load")};a.ajax.__runOnload=function(){if(null!=a.ajax["onload_"+s]){a.ajax["onload_"+s].apply(e);a.ajax["onload_"+s]=null}var t=a.CaptureEventsGet();if(t){for(var r=0;r<t.length;r++)t[r].apply(e)}};a.ajax.__run=function(e,t){if(!e.processData){if(e.onsuccess){e.onsuccess(t)}a.onCustomEvent(e.xhr,"onAjaxSuccess",[t,e])}else{t=a.ajax.processRequestData(t,e)}};a.ajax._onParseJSONFailure=function(e){this.jsonFailure=true;this.jsonResponse=e;this.jsonProactive=/^\[WAF\]/.test(e)};a.ajax.processRequestData=function(e,t){var r,i=[],n=[];switch(t.dataType.toUpperCase()){case"JSON":a.addCustomEvent(t.xhr,"onParseJSONFailure",a.proxy(a.ajax._onParseJSONFailure,t));r=a.parseJSON(e,t.xhr);a.removeCustomEvent(t.xhr,"onParseJSONFailure",a.proxy(a.ajax._onParseJSONFailure,t));if(!!r&&a.type.isArray(r["bxjs"])){for(var o=0;o<r["bxjs"].length;o++){if(a.type.isNotEmptyString(r["bxjs"][o])){i.push({isInternal:false,JS:r["bxjs"][o],bRunFirst:t.scriptsRunFirst})}else{i.push(r["bxjs"][o])}}}if(!!r&&a.type.isArray(r["bxcss"])){n=r["bxcss"]}break;case"SCRIPT":i.push({isInternal:true,JS:e,bRunFirst:t.scriptsRunFirst});r=e;break;default:var u=a.processHTML(e,t.scriptsRunFirst);r=u.HTML;i=u.SCRIPT;n=u.STYLE;break}var l=false;if(null==s){s=parseInt(Math.random()*1e6);l=true}if(n.length>0)a.loadCSS(n);if(t.emulateOnload)a.ajax.__prepareOnload(i);var c=a.DoNothing;if(t.emulateOnload||l){c=a.defer(function(){if(t.emulateOnload)a.ajax.__runOnload();if(l)s=null;a.onCustomEvent(t.xhr,"onAjaxSuccessFinish",[t])})}try{if(!!t.jsonFailure){throw{type:"json_failure",data:t.jsonResponse,bProactive:t.jsonProactive}}t.scripts=i;a.ajax.processScripts(t.scripts,true);if(t.onsuccess){t.onsuccess(r)}a.onCustomEvent(t.xhr,"onAjaxSuccess",[r,t]);a.ajax.processScripts(t.scripts,false,c)}catch(e){if(t.onfailure)t.onfailure("processing",e);a.onCustomEvent(t.xhr,"onAjaxFailure",["processing",e,t])}};a.ajax.processScripts=function(e,t,r){var s=[],i="";r=r||a.DoNothing;for(var n=0,o=e.length;n<o;n++){if(typeof t!="undefined"&&t!=!!e[n].bRunFirst)continue;if(e[n].isInternal)i+=";"+e[n].JS;else s.push(e[n].JS)}s=a.util.array_unique(s);var u=i.length>0?function(){a.evalGlobal(i)}:a.DoNothing;if(s.length>0){a.load(s,function(){u();r()})}else{u();r()}};a.ajax.prepareData=function(e,t){var r="";if(a.type.isString(e))r=e;else if(null!=e){for(var s in e){if(e.hasOwnProperty(s)){if(r.length>0)r+="&";var i=a.util.urlencode(s);if(t)i=t+"["+i+"]";if(typeof e[s]=="object")r+=a.ajax.prepareData(e[s],i);else r+=i+"="+a.util.urlencode(e[s])}}}return r};a.ajax.xhrSuccess=function(e){return e.status>=200&&e.status<300||e.status===304||e.status===1223||e.status===0};a.ajax.Setup=function(e,a){a=!!a;for(var s in e){if(a)t[s]=e[s];else r[s]=e[s]}};a.ajax.replaceLocalStorageValue=function(e,t,r){if(!!a.localStorage)a.localStorage.set("ajax-"+e,t,r)};a.ajax._uncache=function(e){return e+((e.indexOf("?")!==-1?"&":"?")+"_="+(new Date).getTime())};a.ajax.get=function(e,t,r){if(a.type.isFunction(t)){r=t;t=""}t=a.ajax.prepareData(t);if(t){e+=(e.indexOf("?")!==-1?"&":"?")+t;t=""}return a.ajax({method:"GET",dataType:"html",url:e,data:"",onsuccess:r})};a.ajax.getCaptcha=function(e){return a.ajax.loadJSON("/bitrix/tools/ajax_captcha.php",e)};a.ajax.insertToNode=function(e,r){r=a(r);if(!!r){var s={cancel:false};a.onCustomEvent("onAjaxInsertToNode",[{url:e,node:r,eventArgs:s}]);if(s.cancel===true){return}var i=null;if(!t.denyShowWait){i=a.showWait(r);delete t.denyShowWait}return a.ajax.get(e,function(e){r.innerHTML=e;a.closeWait(r,i)})}};a.ajax.post=function(e,t,r){t=a.ajax.prepareData(t);return a.ajax({method:"POST",dataType:"html",url:e,data:t,onsuccess:r})};a.ajax.promise=function(e){var t=new a.Promise;e.onsuccess=function(e){t.fulfill(e)};e.onfailure=function(e,a){t.reject({reason:e,data:a})};e.onprogress=function(e){if(e.position==0&&e.totalSize==0){t.reject({reason:"progress",data:e})}};var r=a.ajax(e);if(!r){t.reject({reason:"init",data:false})}return t};a.ajax.loadScriptAjax=function(e,t,r){if(a.type.isArray(e)){for(var s=0,n=e.length;s<n;s++){a.ajax.loadScriptAjax(e[s],t,r)}}else{var u=e.replace(/\.js\?.*/,".js");if(o.script_self.test(u))return;if(o.script_self_window.test(u)&&a.CWindow)return;if(o.script_self_admin.test(u)&&a.admin)return;if(typeof i[u]=="undefined"){if(!!r){i[u]="";return a.loadScript(e)}else{return a.ajax({url:e,method:"GET",dataType:"script",processData:true,emulateOnload:false,scriptsRunFirst:true,async:false,start:true,onsuccess:function(e){i[u]=e;if(t)t(e)}})}}else if(t){t(i[u])}}};a.ajax.loadJSON=function(e,t,r,s){if(a.type.isFunction(t)){s=r;r=t;t=""}t=a.ajax.prepareData(t);if(t){e+=(e.indexOf("?")!==-1?"&":"?")+t;t=""}return a.ajax({method:"GET",dataType:"json",url:e,onsuccess:r,onfailure:s})};var u=function(e){var a={};if(typeof e.analyticsLabel!=="undefined"){a.analyticsLabel=e.analyticsLabel}if(typeof e.mode!=="undefined"){a.mode=e.mode}if(e.navigation){if(e.navigation.page){a.nav="page-"+e.navigation.page}if(e.navigation.size){if(a.nav){a.nav+="-"}else{a.nav=""}a.nav+="size-"+e.navigation.size}}return a};var l=function(e){e=a.type.isPlainObject(e)?e:{};if(e.data instanceof FormData){e.preparePost=false;e.data.append("sessid",a.bitrix_sessid());if(a.message.SITE_ID){e.data.append("SITE_ID",a.message.SITE_ID)}if(typeof e.signedParameters!=="undefined"){e.data.append("signedParameters",e.signedParameters)}}else{e.data=a.type.isPlainObject(e.data)?e.data:{};if(a.message.SITE_ID){e.data.SITE_ID=a.message.SITE_ID}e.data.sessid=a.bitrix_sessid();if(typeof e.signedParameters!=="undefined"){e.data.signedParameters=e.signedParameters}}if(!e.method){e.method="POST"}return e};var c=function(e,t){t=t||false;var r=a.clone(e);var s=a.ajax.promise(e);return s.then(function(e){if(!t&&a.type.isPlainObject(e)&&a.type.isArray(e.errors)){var s=false;e.errors.forEach(function(e){if(e.code==="invalid_csrf"&&e.customData.csrf){a.message({bitrix_sessid:e.customData.csrf});r.data.sessid=a.bitrix_sessid();s=true}});if(s){return c(r,true)}}if(!a.type.isPlainObject(e)||e.status!=="success"){var i=new a.Promise;i.reject(e);return i}return e}).catch(function(e){var t=new a.Promise;if(a.type.isPlainObject(e)&&e.status&&e.hasOwnProperty("data")){t.reject(e)}else{t.reject({status:"error",data:{ajaxRejectData:e},errors:[{code:"NETWORK_ERROR",message:"Network error"}]})}return t})};a.ajax.runAction=function(e,t){t=l(t);var r=u(t);r.action=e;var s=a.util.add_url_param("/bitrix/services/main/ajax.php",r);return c({method:t.method,dataType:"json",url:s,data:t.data,timeout:t.timeout,preparePost:t.preparePost,headers:t.headers})};a.ajax.runComponentAction=function(e,t,r){r=l(r);r.mode=r.mode||"ajax";var s=u(r);s.c=e;s.action=t;var i=a.util.add_url_param("/bitrix/services/main/ajax.php",s);return c({method:r.method,dataType:"json",url:i,data:r.data,timeout:r.timeout,preparePost:r.preparePost,headers:r.headers})};a.ajax.load=function(e,t){if(!a.type.isArray(e))e=[e];var r=0;if(!a.type.isFunction(t))t=a.DoNothing;var s=function(e){if(a.type.isFunction(this.callback))this.callback(e);if(++r>=n)t()};for(var i=0,n=e.length;i<n;i++){switch(e[i].type.toUpperCase()){case"SCRIPT":a.loadScript([e[i].url],a.proxy(s,e[i]));break;case"CSS":a.loadCSS([e[i].url]);if(++r>=n)t();break;case"JSON":a.ajax.loadJSON(e[i].url,a.proxy(s,e[i]));break;default:a.ajax.get(e[i].url,"",a.proxy(s,e[i]));break}}};a.ajax.submit=function(e,t){if(!e.target){if(null==e.BXFormTarget){var r="formTarget_"+Math.random();e.BXFormTarget=document.body.appendChild(a.create("IFRAME",{props:{name:r,id:r,src:"javascript:void(0)"},style:{display:"none"}}))}e.target=e.BXFormTarget.name}e.BXFormCallback=t;a.bind(e.BXFormTarget,"load",a.proxy(a.ajax._submit_callback,e));a.submit(e);return false};a.ajax.submitComponentForm=function(t,r,s){if(!t.target){if(null==t.BXFormTarget){var i="formTarget_"+Math.random();t.BXFormTarget=document.body.appendChild(a.create("IFRAME",{props:{name:i,id:i,src:"javascript:void(0)"},style:{display:"none"}}))}t.target=t.BXFormTarget.name}if(!!s)var n=a.showWait(r);t.BXFormCallback=function(t){if(!!s)a.closeWait(n);var i=function(){if(!!e.bxcompajaxframeonload){setTimeout(function(){e.bxcompajaxframeonload();e.bxcompajaxframeonload=null},10)}};a(r).innerHTML=t;a.onCustomEvent("onAjaxSuccess",[null,null,i])};a.bind(t.BXFormTarget,"load",a.proxy(a.ajax._submit_callback,t));return true};a.ajax._submit_callback=function(){try{if(this.BXFormTarget.contentWindow.location.href.indexOf("http")!=0)return}catch(e){return}if(this.BXFormCallback)this.BXFormCallback.apply(this,[this.BXFormTarget.contentWindow.document.body.innerHTML]);a.unbindAll(this.BXFormTarget)};a.ajax.prepareForm=function(e,a){a=!!a?a:{};var t,r,s,i=[],n=e.elements.length,o=0,u=0;if(!!e){for(t=0;t<n;t++){s=e.elements[t];if(s.disabled)continue;if(!s.type)continue;switch(s.type.toLowerCase()){case"text":case"textarea":case"password":case"number":case"hidden":case"select-one":i.push({name:s.name,value:s.value});u+=s.name.length+s.value.length;break;case"file":if(!!s.files){for(r=0;r<s.files.length;r++){o++;i.push({name:s.name,value:s.files[r],file:true});u+=s.files[r].size}}break;case"radio":case"checkbox":if(s.checked){i.push({name:s.name,value:s.value});u+=s.name.length+s.value.length}break;case"select-multiple":for(var l=0;l<s.options.length;l++){if(s.options[l].selected){i.push({name:s.name,value:s.options[l].value});u+=s.name.length+s.options[l].length}}break;default:break}}t=0;u=0;var c=a,f,d,p,h;while(t<i.length){var x=i[t].name.indexOf("[");if(h){c[i[t].name]={};c[i[t].name][h.replace(/\[|\]/gi,"")]=i[t].value;c=a;h=null;t++}else if(x==-1){c[i[t].name]=i[t].value;c=a;t++}else{f=i[t].name.substring(0,x);d=i[t].name.substring(x+1);p=d.indexOf("]");if(p==-1){if(!c[f])c[f]=[];c=a;t++}else if(p==0){if(!c[f])c[f]=[];c=c[f];i[t].name=""+c.length;if(d.substring(p+1).indexOf("[")===0)h=d.substring(0,p)+d.substring(p+1)}else{if(!c[f])c[f]={};c=c[f];i[t].name=d.substring(0,p)+d.substring(p+1)}}}}return{data:a,filesCount:o,roughSize:u}};a.ajax.submitAjax=function(t,r){r=r!==null&&typeof r=="object"?r:{};r.url=r["url"]||t.getAttribute("action");var s=r["data"]||{};r.data=a.ajax.prepareForm(t).data;for(var i in s){if(s.hasOwnProperty(i)){r.data[i]=s[i]}}if(!e["FormData"]){a.ajax(r)}else{var n=function(e){var a=Object.prototype.toString.call(e);return a=="[object File]"||a=="[object Blob]"},o=function(e,a,t){if(!!t&&typeof t=="object"&&!n(t)){for(var r in t){if(t.hasOwnProperty(r)){o(e,a==""?r:a+"["+r+"]",t[r])}}}else e.append(a,!!t?t:"")},u=function(e){var t={};if(null!=e){if(typeof e=="object"){for(var r in e){if(e.hasOwnProperty(r)){var s=a.util.urlencode(r);if(typeof e[r]=="object"&&e[r]["file"]!==true)t[s]=u(e[r]);else if(e[r]["file"]===true)t[s]=e[r]["value"];else t[s]=a.util.urlencode(e[r])}}}else t=a.util.urlencode(e)}return t},l=new e.FormData;if(r.method!=="POST"){r.data=a.ajax.prepareData(r.data);if(r.data){r.url+=(r.url.indexOf("?")!==-1?"&":"?")+r.data;r.data=""}}else{if(r.preparePost===true)r.data=u(r.data);o(l,"",r.data);r.data=l}r.preparePost=false;r.start=false;var c=a.ajax(r);if(!!r["onprogress"])c.upload.addEventListener("progress",function(e){var a=null;if(e.lengthComputable&&(e.total||e["totalSize"])){a=e.loaded*100/(e.total||e["totalSize"])}r["onprogress"](e,a)});c.send(l)}};a.ajax.UpdatePageData=function(e){if(e.TITLE)a.ajax.UpdatePageTitle(e.TITLE);if(e.WINDOW_TITLE||e.TITLE)a.ajax.UpdateWindowTitle(e.WINDOW_TITLE||e.TITLE);if(e.NAV_CHAIN)a.ajax.UpdatePageNavChain(e.NAV_CHAIN);if(e.CSS&&e.CSS.length>0)a.loadCSS(e.CSS);if(e.SCRIPTS&&e.SCRIPTS.length>0){var t=function(r,s,i){if(!!s&&a.type.isArray(s.scripts)){for(var n=0,o=e.SCRIPTS.length;n<o;n++){s.scripts.push({isInternal:false,JS:e.SCRIPTS[n]})}}else{a.loadScript(e.SCRIPTS,i)}a.removeCustomEvent("onAjaxSuccess",t)};a.addCustomEvent("onAjaxSuccess",t)}else{var r=function(e,t,s){if(a.type.isFunction(s)){s()}a.removeCustomEvent("onAjaxSuccess",r)};a.addCustomEvent("onAjaxSuccess",r)}};a.ajax.UpdatePageTitle=function(e){var t=a("pagetitle");if(t){t.removeChild(t.firstChild);if(!t.firstChild)t.appendChild(document.createTextNode(e));else t.insertBefore(document.createTextNode(e),t.firstChild)}};a.ajax.UpdateWindowTitle=function(e){document.title=e};a.ajax.UpdatePageNavChain=function(e){var t=a("navigation");if(t){t.innerHTML=e}};a.userOptions={options:null,bSend:false,delay:5e3,path:"/bitrix/admin/user_options.php?"};a.userOptions.setAjaxPath=function(e){a.userOptions.path=e.indexOf("?")==-1?e+"?":e+"&"};a.userOptions.save=function(e,t,r,s,i){if(null==a.userOptions.options)a.userOptions.options={};i=!!i;a.userOptions.options[e+"."+t+"."+r]=[e,t,r,s,i];var n=a.userOptions.__get();if(n!="")document.cookie=a.message("COOKIE_PREFIX")+"_LAST_SETTINGS="+encodeURIComponent(n)+"&sessid="+a.bitrix_sessid()+"; expires=Thu, 31 Dec 2020 23:59:59 GMT; path=/;";if(!a.userOptions.bSend){a.userOptions.bSend=true;setTimeout(function(){a.userOptions.send(null)},a.userOptions.delay)}};a.userOptions.send=function(e){var t=a.userOptions.__get();a.userOptions.options=null;a.userOptions.bSend=false;if(t!=""){document.cookie=a.message("COOKIE_PREFIX")+"_LAST_SETTINGS=; path=/;";a.ajax({method:"GET",dataType:"html",processData:false,cache:false,url:a.userOptions.path+t+"&sessid="+a.bitrix_sessid(),onsuccess:e})}};a.userOptions.del=function(e,t,r,s){a.ajax.get(a.userOptions.path+"action=delete&c="+e+"&n="+t+(r==true?"&common=Y":"")+"&sessid="+a.bitrix_sessid(),s)};a.userOptions.__get=function(){if(!a.userOptions.options)return"";var e="",t=-1,r="",s,i;for(i in a.userOptions.options){if(a.userOptions.options.hasOwnProperty(i)){s=a.userOptions.options[i];if(r!=s[0]+"."+s[1]){t++;e+="&p["+t+"][c]="+a.util.urlencode(s[0]);e+="&p["+t+"][n]="+a.util.urlencode(s[1]);if(s[4]==true)e+="&p["+t+"][d]=Y";r=s[0]+"."+s[1]}var n=s[2];var o=s[3];if(n===null){e+="&p["+t+"][v]="+a.util.urlencode(o)}else{e+="&p["+t+"][v]["+a.util.urlencode(n)+"]="+a.util.urlencode(o)}}}return e.substr(1)};a.ajax.history={expected_hash:"",obParams:null,obFrame:null,obImage:null,obTimer:null,bInited:false,bHashCollision:false,bPushState:!!(history.pushState&&a.type.isFunction(history.pushState)),startState:null,init:function(t){if(a.ajax.history.bInited)return;this.obParams=t;var r=this.obParams.getState();if(a.ajax.history.bPushState){a.ajax.history.expected_hash=e.location.pathname;if(e.location.search)a.ajax.history.expected_hash+=e.location.search;a.ajax.history.put(r,a.ajax.history.expected_hash,"",true);setTimeout(function(){a.bind(e,"popstate",a.ajax.history.__hashListener)},500)}else{a.ajax.history.expected_hash=e.location.hash;if(!a.ajax.history.expected_hash||a.ajax.history.expected_hash=="#")a.ajax.history.expected_hash="__bx_no_hash__";f.put(a.ajax.history.expected_hash,r);a.ajax.history.obTimer=setTimeout(a.ajax.history.__hashListener,500);if(a.browser.IsIE()){a.ajax.history.obFrame=document.createElement("IFRAME");a.hide_object(a.ajax.history.obFrame);document.body.appendChild(a.ajax.history.obFrame);a.ajax.history.obFrame.contentWindow.document.open();a.ajax.history.obFrame.contentWindow.document.write(a.ajax.history.expected_hash);a.ajax.history.obFrame.contentWindow.document.close()}else if(a.browser.IsOpera()){a.ajax.history.obImage=document.createElement("IMG");a.hide_object(a.ajax.history.obImage);document.body.appendChild(a.ajax.history.obImage);a.ajax.history.obImage.setAttribute("src","javascript:location.href = 'javascript:BX.ajax.history.__hashListener();';")}}a.ajax.history.bInited=true},__hashListener:function(t){t=t||e.event||{state:false};if(a.ajax.history.bPushState){a.ajax.history.obParams.setState(t.state||a.ajax.history.startState)}else{if(a.ajax.history.obTimer){e.clearTimeout(a.ajax.history.obTimer);a.ajax.history.obTimer=null}var r;if(null!=a.ajax.history.obFrame)r=a.ajax.history.obFrame.contentWindow.document.body.innerText;else r=e.location.hash;if(!r||r=="#")r="__bx_no_hash__";if(r.indexOf("#")==0)r=r.substring(1);if(r!=a.ajax.history.expected_hash){var s=f.get(r);if(s){a.ajax.history.obParams.setState(s);a.ajax.history.expected_hash=r;if(null!=a.ajax.history.obFrame){var i=r=="__bx_no_hash__"?"":r;if(e.location.hash!=i&&e.location.hash!="#"+i)e.location.hash=i}}}a.ajax.history.obTimer=setTimeout(a.ajax.history.__hashListener,500)}},put:function(t,r,s,i){if(this.bPushState){if(!i){history.pushState(t,"",r)}else{a.ajax.history.startState=t}}else{if(typeof s!="undefined")r=s;else r="view"+r;f.put(r,t);a.ajax.history.expected_hash=r;e.location.hash=a.util.urlencode(r);if(null!=a.ajax.history.obFrame){a.ajax.history.obFrame.contentWindow.document.open();a.ajax.history.obFrame.contentWindow.document.write(r);a.ajax.history.obFrame.contentWindow.document.close()}}},checkRedirectStart:function(t,r){var s=e.location.hash;if(s.substring(0,1)=="#")s=s.substring(1);var i=s.substring(0,5);if(i=="view/"||i=="view%"){a.ajax.history.bHashCollision=true;document.write("<"+'div id="__ajax_hash_collision_'+r+'" style="display: none;">')}},checkRedirectFinish:function(t,r){document.write("</div>");var s=e.location.hash;if(s.substring(0,1)=="#")s=s.substring(1);a.ready(function(){var e=s.substring(0,5);if(e=="view/"||e=="view%"){var i=a("__ajax_hash_collision_"+r);var n=i.firstChild;a.cleanNode(n);i.style.display="block";if(e!="view%")s=a.util.urlencode(s);s+=(s.indexOf("%3F")==-1?"%3F":"%26")+t+"="+r;var o="/bitrix/tools/ajax_redirector.php?hash="+s;a.ajax.insertToNode(o,n)}})}};a.ajax.component=function(e){this.node=e};a.ajax.component.prototype.getState=function(){var t={node:this.node,title:e.document.title,data:a(this.node).innerHTML};var r=a("navigation");if(null!=r)t.nav_chain=r.innerHTML;a.onCustomEvent(a(t.node),"onComponentAjaxHistoryGetState",[t]);return t};a.ajax.component.prototype.setState=function(e){a(e.node).innerHTML=e.data;a.ajax.UpdatePageTitle(e.title);if(e.nav_chain){a.ajax.UpdatePageNavChain(e.nav_chain)}a.onCustomEvent(a(e.node),"onComponentAjaxHistorySetState",[e])};var f={arHistory:{},put:function(e,a){this.arHistory[e]=a},get:function(e){return this.arHistory[e]}};a.ajax.FormData=function(){this.elements=[];this.files=[];this.features={};this.isSupported();this.log("BX FormData init")};a.ajax.FormData.isSupported=function(){var e=new a.ajax.FormData;var t=e.features.supported;e=null;return t};a.ajax.FormData.prototype.log=function(e){if(false){try{if(a.browser.IsIE())e=JSON.stringify(e);console.log(e)}catch(e){}}};a.ajax.FormData.prototype.isSupported=function(){var a={};a.fileReader=e.FileReader&&e.FileReader.prototype.readAsBinaryString;a.readFormData=a.sendFormData=!!e.FormData;a.supported=!!(a.readFormData&&a.sendFormData);this.features=a;this.log("features:");this.log(a);return a.supported};a.ajax.FormData.prototype.append=function(e,a){if(typeof a==="object"){this.files.push({name:e,value:a})}else{this.elements.push({name:e,value:a})}};a.ajax.FormData.prototype.send=function(e,t,r,s){this.log("FD send");this.xhr=a.ajax({method:"POST",dataType:"html",url:e,onsuccess:t,onfailure:s,start:false,preparePost:false});if(r){this.xhr.upload.addEventListener("progress",function(e){if(e.lengthComputable)r(e.loaded/(e.total||e.totalSize))},false)}if(this.features.readFormData&&this.features.sendFormData){var i=new FormData;this.log("use browser formdata");for(var n in this.elements){if(this.elements.hasOwnProperty(n))i.append(this.elements[n].name,this.elements[n].value)}for(n in this.files){if(this.files.hasOwnProperty(n))i.append(this.files[n].name,this.files[n].value)}this.xhr.send(i)}return this.xhr};a.addCustomEvent("onAjaxFailure",a.debug)})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:48:"/bitrix/js/main/json/json2.min.js?14183931673467";s:6:"source";s:33:"/bitrix/js/main/json/json2.min.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/

var JSON;if(!JSON){JSON={};}
(function(){'use strict';function f(n){return n<10?'0'+n:n;}
if(typeof Date.prototype.toJSON!=='function'){Date.prototype.toJSON=function(key){return isFinite(this.valueOf())?this.getUTCFullYear()+'-'+
f(this.getUTCMonth()+1)+'-'+
f(this.getUTCDate())+'T'+
f(this.getUTCHours())+':'+
f(this.getUTCMinutes())+':'+
f(this.getUTCSeconds())+'Z':null;};String.prototype.toJSON=Number.prototype.toJSON=Boolean.prototype.toJSON=function(key){return this.valueOf();};}
var cx=/[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,escapable=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,gap,indent,meta={'\b':'\\b','\t':'\\t','\n':'\\n','\f':'\\f','\r':'\\r','"':'\\"','\\':'\\\\'},rep;function quote(string){escapable.lastIndex=0;return escapable.test(string)?'"'+string.replace(escapable,function(a){var c=meta[a];return typeof c==='string'?c:'\\u'+('0000'+a.charCodeAt(0).toString(16)).slice(-4);})+'"':'"'+string+'"';}
function str(key,holder){var i,k,v,length,mind=gap,partial,value=holder[key];if(value&&typeof value==='object'&&typeof value.toJSON==='function'){value=value.toJSON(key);}
if(typeof rep==='function'){value=rep.call(holder,key,value);}
switch(typeof value){case'string':return quote(value);case'number':return isFinite(value)?String(value):'null';case'boolean':case'null':return String(value);case'object':if(!value){return'null';}
gap+=indent;partial=[];if(Object.prototype.toString.apply(value)==='[object Array]'){length=value.length;for(i=0;i<length;i+=1){partial[i]=str(i,value)||'null';}
v=partial.length===0?'[]':gap?'[\n'+gap+partial.join(',\n'+gap)+'\n'+mind+']':'['+partial.join(',')+']';gap=mind;return v;}
if(rep&&typeof rep==='object'){length=rep.length;for(i=0;i<length;i+=1){if(typeof rep[i]==='string'){k=rep[i];v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}else{for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=str(k,value);if(v){partial.push(quote(k)+(gap?': ':':')+v);}}}}
v=partial.length===0?'{}':gap?'{\n'+gap+partial.join(',\n'+gap)+'\n'+mind+'}':'{'+partial.join(',')+'}';gap=mind;return v;}}
if(typeof JSON.stringify!=='function'){JSON.stringify=function(value,replacer,space){var i;gap='';indent='';if(typeof space==='number'){for(i=0;i<space;i+=1){indent+=' ';}}else if(typeof space==='string'){indent=space;}
rep=replacer;if(replacer&&typeof replacer!=='function'&&(typeof replacer!=='object'||typeof replacer.length!=='number')){throw new Error('JSON.stringify');}
return str('',{'':value});};}
if(typeof JSON.parse!=='function'){JSON.parse=function(text,reviver){var j;function walk(holder,key){var k,v,value=holder[key];if(value&&typeof value==='object'){for(k in value){if(Object.prototype.hasOwnProperty.call(value,k)){v=walk(value,k);if(v!==undefined){value[k]=v;}else{delete value[k];}}}}
return reviver.call(holder,key,value);}
text=String(text);cx.lastIndex=0;if(cx.test(text)){text=text.replace(cx,function(a){return'\\u'+
('0000'+a.charCodeAt(0).toString(16)).slice(-4);});}
if(/^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,'@').replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,']').replace(/(?:^|:|,)(?:\s*\[)+/g,''))){j=eval('('+text+')');return typeof reviver==='function'?walk({'':j},''):j;}
throw new SyntaxError('JSON.parse');};}}());
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"/bitrix/js/main/core/core_ls.min.js?14328944187365";s:6:"source";s:31:"/bitrix/js/main/core/core_ls.js";s:3:"min";s:35:"/bitrix/js/main/core/core_ls.min.js";s:3:"map";s:35:"/bitrix/js/main/core/core_ls.map.js";}"*/
(function(e){if(e.BX.localStorage)return;var t=e.BX,r=null,o=null,a="_bxCurrentKey",i=false;t.localStorage=function(){this.keyChanges={};t.bind(t.browser.IsIE()&&!t.browser.IsIE9()?document:e,"storage",t.proxy(this._onchange,this));setInterval(t.delegate(this._clear,this),5e3)};t.localStorage.checkBrowser=function(){return i};t.localStorage.set=function(e,r,o){return t.localStorage.instance().set(e,r,o)};t.localStorage.get=function(e){return t.localStorage.instance().get(e)};t.localStorage.remove=function(e){return t.localStorage.instance().remove(e)};t.localStorage.instance=function(){if(!r){var e=t.localStorage.checkBrowser();if(e=="native")r=new t.localStorage;else if(e=="ie8")r=new t.localStorageIE8;else if(e=="ie7")r=new t.localStorageIE7;else{r={set:t.DoNothing,get:function(){return null},remove:t.DoNothing}}}return r};t.localStorage.prototype.prefix=function(){if(!o){o="bx"+t.message("USER_ID")+"-"+(t.message.SITE_ID?t.message("SITE_ID"):"admin")+"-"}return o};t.localStorage.prototype._onchange=function(r){r=r||e.event;if(!r.key)return;if(t.browser.DetectIeVersion()>0&&this.keyChanges[r.key]){this.keyChanges[r.key]=false;return}if(!!r.key&&r.key.substring(0,this.prefix().length)==this.prefix()){var o={key:r.key.substring(this.prefix().length,r.key.length),value:!!r.newValue?this._decode(r.newValue.substring(11,r.newValue.length)):null,oldValue:!!r.oldValue?this._decode(r.oldValue.substring(11,r.oldValue.length)):null};switch(o.key){case"BXGCE":if(o.value){t.onCustomEvent(o.value.e,o.value.p)}break;default:if(r.newValue)t.onCustomEvent(e,"onLocalStorageSet",[o]);if(r.oldValue&&!r.newValue)t.onCustomEvent(e,"onLocalStorageRemove",[o]);t.onCustomEvent(e,"onLocalStorageChange",[o]);break}}};t.localStorage.prototype._clear=function(){var e=+new Date,t,r;for(r=0;r<localStorage.length;r++){t=localStorage.key(r);if(t.substring(0,2)=="bx"){var o=localStorage.getItem(t).split(":",1)*1e3;if(e>=o)localStorage.removeItem(t)}}};t.localStorage.prototype._encode=function(e){if(typeof e=="object")e=JSON.stringify(e);else e=e.toString();return e};t.localStorage.prototype._decode=function(e){var t=null;if(!!e){try{t=JSON.parse(e)}catch(r){t=e}}return t};t.localStorage.prototype._trigger_error=function(e,r,o,a){t.onCustomEvent(this,"onLocalStorageError",[e,{key:r,value:o,ttl:a}])};t.localStorage.prototype.set=function(e,t,r){if(!r||r<=0)r=60;if(e==undefined||e==null||t==undefined)return false;this.keyChanges[this.prefix()+e]=true;try{localStorage.setItem(this.prefix()+e,Math.round(+new Date/1e3)+r+":"+this._encode(t))}catch(o){this._trigger_error(o,e,t,r)}};t.localStorage.prototype.get=function(e){var t=localStorage.getItem(this.prefix()+e);if(t){var r=t.split(":",1)*1e3;if(+new Date<=r){t=t.substring(11,t.length);return this._decode(t)}}return null};t.localStorage.prototype.remove=function(e){this.keyChanges[this.prefix()+e]=true;localStorage.removeItem(this.prefix()+e)};t.localStorageIE7=function(){this.NS="BXLocalStorage";this.__current_state={};this.keyChanges={};t.ready(t.delegate(this._Init,this))};t.extend(t.localStorageIE7,t.localStorage);t.localStorageIE7.prototype._Init=function(){this.storage_element=document.body.appendChild(t.create("DIV"));this.storage_element.addBehavior("#default#userData");this.storage_element.load(this.NS);var e=this.storage_element.xmlDocument,r=e.firstChild.attributes.length;for(var o=0;o<r;o++){if(!!e.firstChild.attributes[o]){var a=e.firstChild.attributes[o].nodeName;if(a.substring(0,this.prefix().length)==this.prefix()){this.__current_state[a]=e.firstChild.attributes[o].nodeValue}}}setInterval(t.delegate(this._Listener,this),500);setInterval(t.delegate(this._clear,this),5e3)};t.localStorageIE7.prototype._Listener=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument,r=t.firstChild.attributes.length,o,a,i;var l={},s=[];for(o=0;o<r;o++){if(!!t.firstChild.attributes[o]){a=t.firstChild.attributes[o].nodeName;if(a.substring(0,this.prefix().length)==this.prefix()){i=t.firstChild.attributes[o].nodeValue;if(this.__current_state[a]!=i){s.push({key:a,newValue:i,oldValue:this.__current_state[a]})}l[a]=i;delete this.__current_state[a]}}}for(o in this.__current_state){if(this.__current_state.hasOwnProperty(o)){s.push({key:o,newValue:undefined,oldValue:this.__current_state[o]})}}this.__current_state=l;for(o=0;o<s.length;o++){this._onchange(s[o])}};t.localStorageIE7.prototype._clear=function(){this.storage_element.load(this.NS);var e=this.storage_element.xmlDocument,t=e.firstChild.attributes.length,r=+new Date,o,a,i,l;for(o=0;o<t;o++){if(!!e.firstChild.attributes[o]){a=e.firstChild.attributes[o].nodeName;if(a.substring(0,2)=="bx"){i=e.firstChild.attributes[o].nodeValue;l=i.split(":",1)*1e3;if(r>=l){e.firstChild.removeAttribute(a)}}}}this.storage_element.save(this.NS)};t.localStorageIE7.prototype.set=function(e,t,r){if(!r||r<=0)r=60;try{this.storage_element.load(this.NS);var o=this.storage_element.xmlDocument;this.keyChanges[this.prefix()+e]=true;o.firstChild.setAttribute(this.prefix()+e,Math.round(+new Date/1e3)+r+":"+this._encode(t));this.storage_element.save(this.NS)}catch(a){this._trigger_error(a,e,t,r)}};t.localStorageIE7.prototype.get=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument;var r=t.firstChild.getAttribute(this.prefix()+e);if(r){var o=r.split(":",1)*1e3;if(+new Date<=o){r=r.substring(11,r.length);return this._decode(r)}}return null};t.localStorageIE7.prototype.remove=function(e){this.storage_element.load(this.NS);var t=this.storage_element.xmlDocument;t.firstChild.removeAttribute(this.prefix()+e);this.keyChanges[this.prefix()+e]=true;this.storage_element.save(this.NS)};t.localStorageIE8=function(){this.key=a;this.currentKey=null;this.currentValue=null;t.localStorageIE8.superclass.constructor.apply(this)};t.extend(t.localStorageIE8,t.localStorage);t.localStorageIE8.prototype._onchange=function(e){if(null==this.currentKey){this.currentKey=localStorage.getItem(this.key);if(this.currentKey){this.currentValue=localStorage.getItem(this.prefix()+this.currentKey)}}else{e={key:this.prefix()+this.currentKey,newValue:localStorage.getItem(this.prefix()+this.currentKey),oldValue:this.currentValue};this.currentKey=null;this.currentValue=null;if(this.keyChanges[e.key]){this.keyChanges[e.key]=false;return}t.localStorageIE8.superclass._onchange.apply(this,[e])}};t.localStorageIE8.prototype.set=function(e,r,o){this.currentKey=null;this.keyChanges[this.prefix()+e]=true;try{localStorage.setItem(this.key,e);t.localStorageIE8.superclass.set.apply(this,arguments)}catch(a){this._trigger_error(a,e,r,o)}};t.localStorageIE8.prototype.remove=function(e){this.currentKey=null;this.keyChanges[this.prefix()+e]=true;localStorage.setItem(this.key,e);t.localStorageIE8.superclass.remove.apply(this,arguments)};t.onGlobalCustomEvent=function(e,r,o){if(!!t.localStorage.checkBrowser())t.localStorage.set("BXGCE",{e:e,p:r},1);if(!o)t.onCustomEvent(e,r)};try{i=!!localStorage.setItem}catch(l){}if(i){i="native";var s=t.browser.IsIE()&&!t.browser.IsIE9()?document:e,n=function(r){if(typeof(r||e.event).key=="undefined")i="ie8";t.unbind(s,"storage",n);t.localStorage.instance()};t.bind(s,"storage",n);try{localStorage.setItem(a,null)}catch(l){i=false;t.localStorage.instance()}}else if(t.browser.IsIE7()){i="ie7";t.localStorage.instance()}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"/bitrix/js/main/core/core_fx.min.js?14909536449768";s:6:"source";s:31:"/bitrix/js/main/core/core_fx.js";s:3:"min";s:35:"/bitrix/js/main/core/core_fx.min.js";s:3:"map";s:35:"/bitrix/js/main/core/core_fx.map.js";}"*/
(function(t){var i={time:1,step:.05,type:"linear",allowFloat:false};BX.fx=function(t){this.options=t;if(null!=this.options.time)this.options.originalTime=this.options.time;if(null!=this.options.step)this.options.originalStep=this.options.step;if(!this.__checkOptions())return false;this.__go=BX.delegate(this.go,this);this.PARAMS={}};BX.fx.prototype.__checkOptions=function(){if(typeof this.options.start!=typeof this.options.finish)return false;if(null==this.options.time)this.options.time=i.time;if(null==this.options.step)this.options.step=i.step;if(null==this.options.type)this.options.type=i.type;if(null==this.options.allowFloat)this.options.allowFloat=i.allowFloat;this.options.time*=1e3;this.options.step*=1e3;if(typeof this.options.start!="object"){this.options.start={_param:this.options.start};this.options.finish={_param:this.options.finish}}var e;for(e in this.options.start){if(null==this.options.finish[e]){this.options.start[e]=null;delete this.options.start[e]}}if(!BX.type.isFunction(this.options.type)){if(BX.type.isFunction(t[this.options.type]))this.options.type=t[this.options.type];else if(BX.type.isFunction(BX.fx.RULES[this.options.type]))this.options.type=BX.fx.RULES[this.options.type];else this.options.type=BX.fx.RULES[i.type]}return true};BX.fx.prototype.go=function(){var t=(new Date).valueOf();if(t<this.PARAMS.timeFinish){for(var i in this.PARAMS.current){this.PARAMS.current[i][0]=this.options.type.apply(this,[{start_value:this.PARAMS.start[i][0],finish_value:this.PARAMS.finish[i][0],current_value:this.PARAMS.current[i][0],current_time:t-this.PARAMS.timeStart,total_time:this.options.time}])}this._callback(this.options.callback);if(!this.paused)this.PARAMS.timer=setTimeout(this.__go,this.options.step)}else{this.stop()}};BX.fx.prototype._callback=function(t){var i={};t=t||this.options.callback;for(var e in this.PARAMS.current){i[e]=(this.options.allowFloat?this.PARAMS.current[e][0]:Math.round(this.PARAMS.current[e][0]))+this.PARAMS.current[e][1]}return t.apply(this,[null!=i["_param"]?i._param:i])};BX.fx.prototype.start=function(){var t,i,e;this.PARAMS.start={};this.PARAMS.current={};this.PARAMS.finish={};for(t in this.options.start){i=+this.options.start[t];e=(this.options.start[t]+"").substring((i+"").length);this.PARAMS.start[t]=[i,e];this.PARAMS.current[t]=[i,e];this.PARAMS.finish[t]=[+this.options.finish[t],e]}this._callback(this.options.callback_start);this._callback(this.options.callback);this.PARAMS.timeStart=(new Date).valueOf();this.PARAMS.timeFinish=this.PARAMS.timeStart+this.options.time;this.PARAMS.timer=setTimeout(BX.delegate(this.go,this),this.options.step);return this};BX.fx.prototype.pause=function(){if(this.paused){this.PARAMS.timer=setTimeout(this.__go,this.options.step);this.paused=false}else{clearTimeout(this.PARAMS.timer);this.paused=true}};BX.fx.prototype.stop=function(t){t=!!t;if(this.PARAMS.timer)clearTimeout(this.PARAMS.timer);if(null!=this.options.originalTime)this.options.time=this.options.originalTime;if(null!=this.options.originalStep)this.options.step=this.options.originalStep;this.PARAMS.current=this.PARAMS.finish;if(!t){this._callback(this.options.callback);this._callback(this.options.callback_complete)}};BX.fx.RULES={linear:function(t){return t.start_value+t.current_time/t.total_time*(t.finish_value-t.start_value)},decelerated:function(t){return t.start_value+Math.sqrt(t.current_time/t.total_time)*(t.finish_value-t.start_value)},accelerated:function(t){var i=t.current_time/t.total_time;return t.start_value+i*i*(t.finish_value-t.start_value)}};BX.fx.hide=function(t,i,e){t=BX(t);if(typeof i=="object"&&null==e){e=i;i=e.type}if(!e)e={};if(!BX.type.isNotEmptyString(i)){t.style.display="none";return}var s=BX.fx.EFFECTS[i](t,e,0);s.callback_complete=function(){if(e.hide!==false)t.style.display="none";if(e.callback_complete)e.callback_complete.apply(this,arguments)};return new BX.fx(s).start()};BX.fx.show=function(t,i,e){t=BX(t);if(typeof i=="object"&&null==e){e=i;i=e.type}if(!e)e={};if(!BX.type.isNotEmptyString(i)){t.style.display="block";return}var s=BX.fx.EFFECTS[i](t,e,1);s.callback_complete=function(){if(e.show!==false)t.style.display="block";if(e.callback_complete)e.callback_complete.apply(this,arguments)};return new BX.fx(s).start()};BX.fx.EFFECTS={scroll:function(t,e,s){if(!e.direction)e.direction="vertical";var n=e.direction=="horizontal"?"width":"height";var o=parseInt(BX.style(t,n));if(isNaN(o)){o=BX.pos(t)[n]}if(s==0)var a=o,r=e.min_height?parseInt(e.min_height):0;else var r=o,a=e.min_height?parseInt(e.min_height):0;return{start:a,finish:r,time:e.time||i.time,type:"linear",callback_start:function(){if(BX.style(t,"position")=="static")t.style.position="relative";t.style.overflow="hidden";t.style[n]=a+"px";t.style.display="block"},callback:function(i){t.style[n]=i+"px"}}},fade:function(t,e,s){var n={time:e.time||i.time,type:s==0?"decelerated":"linear",start:s==0?1:0,finish:s==0?0:1,allowFloat:true};if(BX.browser.IsIE()&&!BX.browser.IsIE9()){n.start*=100;n.finish*=100;n.allowFloat=false;n.callback_start=function(){t.style.display="block";t.style.filter+="progid:DXImageTransform.Microsoft.Alpha(opacity="+n.start+")"};n.callback=function(i){(t.filters["DXImageTransform.Microsoft.alpha"]||t.filters.alpha).opacity=i}}else{n.callback_start=function(){t.style.display="block"};n.callback=function(i){t.style.opacity=t.style.KhtmlOpacity=t.style.MozOpacity=i}}return n},fold:function(t,e,s){if(s!=0)return;var n=BX.pos(t);var o=n.height/(n.width+n.height);var a={time:e.time||i.time,callback_complete:e.callback_complete,hide:e.hide};e.type="scroll";e.direction="vertical";e.min_height=e.min_height||10;e.hide=false;e.time=o*a.time;e.callback_complete=function(){t.style.whiteSpace="nowrap";e.direction="horizontal";e.min_height=null;e.time=a.time-e.time;e.hide=a.hide;e.callback_complete=a.callback_complete;BX.fx.hide(t,e)};return BX.fx.EFFECTS.scroll(t,e,s)},scale:function(t,e,s){var n={width:parseInt(BX.style(t,"width")),height:parseInt(BX.style(t,"height"))};if(isNaN(n.width)||isNaN(n.height)){var o=BX.pos(t);n={width:o.width,height:o.height}}if(s==0)var a=n,r={width:0,height:0};else var r=n,a={width:0,height:0};return{start:a,finish:r,time:e.time||i.time,type:"linear",callback_start:function(){t.style.position="relative";t.style.overflow="hidden";t.style.display="block";t.style.height=a.height+"px";t.style.width=a.width+"px"},callback:function(i){t.style.height=i.height+"px";t.style.width=i.width+"px"}}}};var e={arStack:{},arRules:{},globalAnimationId:0};BX.fx.colorAnimate=function(t,i,s){if(t==null)return;animationId=t.getAttribute("data-animation-id");if(animationId==null){animationId=e.globalAnimationId;t.setAttribute("data-animation-id",e.globalAnimationId++)}var n=i.split(/\s*,\s*/);for(var o=0;o<n.length;o++){i=n[o];if(!e.arRules[i])continue;var a=0;if(!e.arStack[animationId]){e.arStack[animationId]={}}else if(e.arStack[animationId][i]){a=e.arStack[animationId][i].i;clearInterval(e.arStack[animationId][i].tId)}if(a==0&&s||a==e.arRules[i][3]&&!s)continue;e.arStack[animationId][i]={i:a,element:t,tId:setInterval('BX.fx.colorAnimate.run("'+animationId+'","'+i+'")',e.arRules[i][4]),back:Boolean(s)}}};BX.fx.colorAnimate.addRule=function(t,i,s,n,o,a,r){e.arRules[t]=[BX.util.hex2rgb(i),BX.util.hex2rgb(s),n.replace(/\-(.)/g,function(){return arguments[1].toUpperCase()}),o,a||1,r||false]};BX.fx.colorAnimate.run=function(t,i){element=e.arStack[t][i].element;e.arStack[t][i].i+=e.arStack[t][i].back?-1:1;var s=e.arStack[t][i].i/e.arRules[i][3];var n=1-s;var o=e.arRules[i][0];var a=e.arRules[i][1];element.style[e.arRules[i][2]]="rgb("+Math.floor(o["r"]*n+a["r"]*s)+","+Math.floor(o["g"]*n+a["g"]*s)+","+Math.floor(o["b"]*n+a["b"]*s)+")";if(e.arStack[t][i].i==e.arRules[i][3]||e.arStack[t][i].i==0){clearInterval(e.arStack[t][i].tId);if(e.arRules[i][5])BX.fx.colorAnimate(e.arStack[t][i].element,i,true)}};BX.easing=function(t){this.options=t;this.timer=null};BX.easing.prototype.animate=function(){if(!this.options||!this.options.start||!this.options.finish||typeof this.options.start!="object"||typeof this.options.finish!="object")return null;for(var t in this.options.start){if(typeof this.options.finish[t]=="undefined"){delete this.options.start[t]}}this.options.progress=function(t){var i={};for(var e in this.start)i[e]=Math.round(this.start[e]+(this.finish[e]-this.start[e])*t);if(this.step){this.step(i)}};this.animateProgress()};BX.easing.prototype.stop=function(t){if(this.timer){cancelAnimationFrame(this.timer);this.timer=null;if(t){this.options.complete&&this.options.complete()}}};BX.easing.prototype.animateProgress=function(){if(!t.requestAnimationFrame){this.options.progress(1);this.options.complete&&this.options.complete();return}var i=null;var e=this.options.transition||BX.easing.transitions.linear;var s=this.options.duration||1e3;var n=BX.proxy(function(t){if(i===null){i=t}var o=(t-i)/s;if(o>1){o=1}this.options.progress(e(o));if(o==1){this.stop(true)}else{this.timer=requestAnimationFrame(n)}},this);this.timer=requestAnimationFrame(n)};BX.easing.makeEaseInOut=function(t){return function(i){if(i<.5)return t(2*i)/2;else return(2-t(2*(1-i)))/2}};BX.easing.makeEaseOut=function(t){return function(i){return 1-t(1-i)}};BX.easing.transitions={linear:function(t){return t},quad:function(t){return Math.pow(t,2)},cubic:function(t){return Math.pow(t,3)},quart:function(t){return Math.pow(t,4)},quint:function(t){return Math.pow(t,5)},circ:function(t){return 1-Math.sin(Math.acos(t))},back:function(t){return Math.pow(t,2)*((1.5+1)*t-1.5)},elastic:function(t){return Math.pow(2,10*(t-1))*Math.cos(20*Math.PI*1.5/3*t)},bounce:function(t){for(var i=0,e=1;1;i+=e,e/=2){if(t>=(7-4*i)/11){return-Math.pow((11-6*i-11*t)/4,2)+Math.pow(e,2)}}}}})(window);
/* End */
;
; /* Start:"a:4:{s:4:"full";s:50:"/bitrix/js/main/core/core_popup.js?153563059370773";s:6:"source";s:34:"/bitrix/js/main/core/core_popup.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
;(function(window) {

"use strict";

if (BX.PopupWindowManager)
{
	return;
}

BX.PopupWindowManager =
{
	_popups : [],
	_currentPopup : null,

	create : function(uniquePopupId, bindElement, params)
	{
		var index = -1;
		if ((index = this._getPopupIndex(uniquePopupId)) !== -1)
		{
			return this._popups[index];
		}

		var popupWindow = new BX.PopupWindow(uniquePopupId, bindElement, params);
		BX.addCustomEvent(popupWindow, "onPopupShow", BX.delegate(this.onPopupShow, this));
		BX.addCustomEvent(popupWindow, "onPopupClose", BX.delegate(this.onPopupClose, this));

		return popupWindow;
	},

	onPopupWindowIsInitialized : function(uniquePopupId, popupWindow)
	{
		BX.addCustomEvent(popupWindow, "onPopupDestroy", BX.delegate(this.onPopupDestroy, this));
		this._popups.push(popupWindow);
	},

	onPopupShow : function(popupWindow)
	{
		if (this._currentPopup !== null)
		{
			this._currentPopup.close();
		}

		this._currentPopup = popupWindow;
	},

	onPopupClose : function(popupWindow)
	{
		this._currentPopup = null;
	},

	onPopupDestroy : function(popupWindow)
	{
		var index;
		if ((index = this._getPopupIndex(popupWindow.uniquePopupId)) !== -1)
		{
			this._popups = BX.util.deleteFromArray(this._popups, index);
		}
	},

	getCurrentPopup : function()
	{
		return this._currentPopup;
	},

	isPopupExists : function(uniquePopupId)
	{
		return this._getPopupIndex(uniquePopupId) !== -1
	},

	isAnyPopupShown : function()
	{
		for(var i = 0, length = this._popups.length; i < length; i++)
		{
			if(this._popups[i].isShown())
			{
				return true;
			}
		}
		return false;
	},

	_getPopupIndex : function(uniquePopupId)
	{
		var index = -1;

		for (var i = 0; i < this._popups.length; i++)
		{
			if (this._popups[i].uniquePopupId === uniquePopupId)
			{
				return i;
			}
		}

		return index;
	},

	getMaxZIndex : function()
	{
		var zIndex = 0, ii;
		for (ii = 0; ii < this._popups.length; ii++)
		{
			zIndex = Math.max(zIndex, this._popups[ii].params.zIndex);
		}
		return zIndex;
	}
};
BX.addCustomEvent("onPopupWindowIsInitialized", BX.proxy(BX.PopupWindowManager.onPopupWindowIsInitialized, BX.PopupWindowManager));
/**
 *
 * @param {string} uniquePopupId
 * @param {Element|object|null} bindElement
 * @param params
 * @constructor
 */
BX.PopupWindow = function(uniquePopupId, bindElement, params)
{
	params = params || {};
	this.params = params;

	BX.onCustomEvent("onPopupWindowInit", [uniquePopupId, bindElement, params]);

	this.uniquePopupId = uniquePopupId;
	this.params.zIndex = BX.type.isNumber(params.zIndex) ? parseInt(params.zIndex) : 0;
	this.params.zIndexAbsolute = BX.type.isNumber(params.zIndexAbsolute) ? parseInt(params.zIndexAbsolute) : 0;
	this.buttons = params.buttons && BX.type.isArray(params.buttons) ? params.buttons : [];
	this.offsetTop = BX.PopupWindow.getOption("offsetTop");
	this.offsetLeft = BX.PopupWindow.getOption("offsetLeft");
	this.firstShow = false;
	this.bordersWidth = 20;
	this.bindElementPos = null;
	this.closeIcon = null;
	this.resizeIcon = null;
	this.angle = null;
	this.overlay = null;
	this.titleBar = null;
	this.bindOptions = typeof(params.bindOptions) === "object" ? params.bindOptions : {};
	this.animationOptions = typeof(params.animationOptions) === "object" ? params.animationOptions : {};
	this.autoHide = params.autoHide === true;
	this.autoHideHandler = BX.type.isFunction(params.autoHideHandler) ? params.autoHideHandler : null;
	this.handleAutoHide = this.handleAutoHide.bind(this);
	this.handleOverlayClick = this.handleOverlayClick.bind(this);
	this.isAutoHideBinded = false;
	this.closeByEsc = params.closeByEsc === true;
	this.isCloseByEscBinded = false;

	this.width = null;
	this.height = null;
	this.minWidth = null;
	this.minHeight = null;
	this.maxWidth = null;
	this.maxHeight = null;

	if (params.parentPopup instanceof BX.PopupWindow)
	{
		this.parentPopup = params.parentPopup;
		this.appendContainer = params.parentPopup.contentContainer;

		params.offsetTop = (params.offsetTop? params.offsetTop: 0) - (BX.PopupWindow.fullscreenStatus? 0: this.parentPopup.popupContainer.offsetTop);
		params.offsetLeft = (params.offsetLeft? params.offsetLeft: 0) - (BX.PopupWindow.fullscreenStatus? 0: this.parentPopup.popupContainer.offsetLeft);
	}
	else
	{
		this.parentPopup = null;
		this.appendContainer = document.body;
	}

	this.dragOptions = {
		cursor: "",
		callback: BX.DoNothing,
		eventName: ""
	};
	this.dragged = false;
	this.dragPageX = 0;
	this.dragPageY = 0;

	this.animationShowClassName = '';
	this.animationCloseClassName = '';
	this.animationCloseEventType = false;

	if (typeof(this.animationOptions.show) === "object")
	{
		this.animationShowClassName = '';

		if (BX.type.isNotEmptyString(this.animationOptions.show.className))
		{
			this.animationShowClassName = this.animationOptions.show.className;
		}
		else if (BX.type.isNotEmptyString(this.animationOptions.show.type))
		{
			switch(this.animationOptions.show.type)
			{
				case 'opacity-transform':
					this.animationShowClassName = 'popup-window-show-animation-opacity-transform';
					break;
				case 'opacity':
					this.animationShowClassName = 'popup-window-show-animation-opacity';
					break;
				default:
					this.animationShowClassName = 'popup-window-show-animation-opacity';
			}
		}
	}

	if (typeof(this.animationOptions.close) === "object")
	{
		this.animationCloseClassName = '';
		this.animationCloseEventType = '';

		if (BX.type.isNotEmptyString(this.animationOptions.close.className))
		{
			this.animationCloseClassName = this.animationOptions.close.className;

			if (
				BX.type.isNotEmptyString(this.animationOptions.close.eventType)
				|| BX.util.in_array(this.animationOptions.close.eventType, ['animation', 'transition'])
			)
			{
				this.animationCloseEventType = this.animationOptions.close.eventType;
			}
		}
		else if (BX.type.isNotEmptyString(this.animationOptions.close.type))
		{
			switch(this.animationOptions.close.type)
			{
				case 'opacity-transform':
					this.animationCloseClassName = 'popup-window-close-animation-opacity-transform';
					this.animationCloseEventType = 'animation';
					break;
				case 'opacity':
					this.animationCloseClassName = 'popup-window-close-animation-opacity';
					this.animationCloseEventType = 'animation';
					break;
				default:
					this.animationCloseClassName = '';
					this.animationCloseEventType = '';
			}
		}
	}

	if (params.events)
	{
		for (var eventName in params.events)
		{
			BX.addCustomEvent(this, eventName, params.events[eventName]);
		}
	}

	var popupClassName = "popup-window";

	/*if (params.lightShadow)
		popupClassName += " popup-window-light";*/

	if (params.contentColor && BX.type.isNotEmptyString(params.contentColor))
	{
		popupClassName += " popup-window-content-" + params.contentColor;
	}

	if (params.contentNoPaddings)
	{
		popupClassName += " popup-window-content-no-paddings";
	}

	if (params.noAllPaddings)
	{
		popupClassName += " popup-window-no-paddings";
	}

	if (params.titleBar)
	{
		popupClassName += " popup-window-with-titlebar";
	}

	if (params.className && BX.type.isNotEmptyString(params.className))
	{
		popupClassName += " " + params.className;
	}

	if (params.darkMode)
	{
		popupClassName += ' popup-window-dark';
	}

	this.popupContainer = document.createElement("div");
	var titleBarID = "popup-window-titlebar-" + uniquePopupId;

	if(params.titleBar)
	{
		this.titleBar = BX.create("div", {
			props : {
				className: "popup-window-titlebar",
				id: titleBarID
			}
		});
	}

	if (params.closeIcon)
	{
		this.closeIcon = BX.create("span", {
			props : { className: "popup-window-close-icon" + (params.titleBar ? " popup-window-titlebar-close-icon" : "") },
			style : (typeof(params.closeIcon) === "object" ? params.closeIcon : {} ),
			events : { click : BX.proxy(this._onCloseIconClick, this) }
		});

		if (BX.browser.IsIE())
		{
			BX.adjust(this.closeIcon, { attrs: { hidefocus: "true" } });
		}
	}

	this.contentContainer = BX.create("div",{
		props:{
			id: "popup-window-content-" +  uniquePopupId,
			className: "popup-window-content"
		}
	});

	BX.adjust(this.popupContainer, {
		props : {
			id : uniquePopupId,
			className : popupClassName
		},
		style : {
			zIndex: this.getZindex(),
			position: "absolute",
			display: "none",
			top: "0px",
			left: "0px"
		},
		children : [this.titleBar, this.contentContainer, this.closeIcon]
	});

	this.appendContainer.appendChild(this.popupContainer);

	this.buttonsContainer = null;

	if (params.angle)
	{
		this.setAngle(params.angle);
	}

	if (params.overlay)
	{
		this.setOverlay(params.overlay);
	}

	this.setOffset(params);
	this.setBindElement(bindElement);
	this.setTitleBar(params.titleBar);
	this.setContent(params.content);
	this.setButtons(params.buttons);
	this.setWidth(params.width);
	this.setHeight(params.height);
	this.setMinWidth(params.minWidth);
	this.setMinHeight(params.minHeight);
	this.setMaxWidth(params.maxWidth);
	this.setMaxHeight(params.maxHeight);
	this.setResizeMode(params.resizable);

	if (params.bindOnResize !== false)
	{
		BX.bind(window, "resize", BX.proxy(this._onResizeWindow, this));
	}
	BX.onCustomEvent("onPopupWindowIsInitialized", [uniquePopupId, this]);
};

/**
 *
 * @param {Element|string} content
 */
BX.PopupWindow.prototype.setContent = function(content)
{
	if (!this.contentContainer || !content)
	{
		return;
	}

	if (BX.type.isElementNode(content))
	{
		BX.cleanNode(this.contentContainer);
		this.contentContainer.appendChild(content.parentNode ? content.parentNode.removeChild(content) : content );
		content.style.display = "block";
	}
	else if (BX.type.isString(content))
	{
		this.contentContainer.innerHTML = content;
	}
	else
	{
		this.contentContainer.innerHTML = "&nbsp;";
	}
};

/**
 *
 * @param {BX.PopupWindowButton[]} buttons
 */
BX.PopupWindow.prototype.setButtons = function(buttons)
{
	this.buttons = buttons && BX.type.isArray(buttons) ? buttons : [];

	if (this.buttonsContainer)
	{
		BX.remove(this.buttonsContainer);
	}

	if (this.buttons.length > 0 && this.contentContainer)
	{
		var newButtons = [];
		for (var i = 0; i < this.buttons.length; i++)
		{
			var button = this.buttons[i];
			if (button === null || !BX.is_subclass_of(button, BX.PopupWindowButton))
			{
				continue;
			}

			button.popupWindow = this;
			newButtons.push(button.render());
		}

		this.buttonsContainer = this.contentContainer.parentNode.appendChild(
			BX.create("div",{
				props : { className : "popup-window-buttons" },
				children : newButtons
			})
		);
	}
};

/**
 *
 * @returns {BX.PopupWindowButton[]}
 */
BX.PopupWindow.prototype.getButtons = function()
{
	return this.buttons;
};

/**
 *
 * @param {string} id
 * @returns {BX.PopupWindowButton}
 */
BX.PopupWindow.prototype.getButton = function(id)
{
	for (var i = 0; i < this.buttons.length; i++)
	{
		var button = this.buttons[i];
		if (button.getId() === id)
		{
			return button;
		}
	}

	return null;
};

/**
 *
 * @param {Element|Event|object} bindElement
 */
BX.PopupWindow.prototype.setBindElement = function(bindElement)
{
	if (!bindElement || typeof(bindElement) !== "object")
	{
		return;
	}

	if (BX.type.isDomNode(bindElement) || (BX.type.isNumber(bindElement.top) && BX.type.isNumber(bindElement.left)))
	{
		this.bindElement = bindElement;
	}
	else if (BX.type.isNumber(bindElement.clientX) && BX.type.isNumber(bindElement.clientY))
	{
		BX.fixEventPageXY(bindElement);
		this.bindElement = { left : bindElement.pageX, top : bindElement.pageY, bottom : bindElement.pageY };
	}
};

/**
 *
 * @param bindElement
 * @returns {object} position
 */
BX.PopupWindow.prototype.getBindElementPos = function(bindElement)
{
	if (BX.type.isDomNode(bindElement))
	{
		return BX.pos(bindElement, false);
	}
	else if (bindElement && typeof(bindElement) === "object")
	{
		if (!BX.type.isNumber(bindElement.bottom))
		{
			bindElement.bottom = bindElement.top;
		}

		return bindElement;
	}
	else
	{
		var windowSize =  BX.GetWindowInnerSize();
		var windowScroll = BX.GetWindowScrollPos();
		var popupWidth = this.popupContainer.offsetWidth;
		var popupHeight = this.popupContainer.offsetHeight;

		this.bindOptions.forceTop = true;

		return {
			left : windowSize.innerWidth/2 - popupWidth/2 + windowScroll.scrollLeft,
			top : windowSize.innerHeight/2 - popupHeight/2 + windowScroll.scrollTop,
			bottom : windowSize.innerHeight/2 - popupHeight/2 + windowScroll.scrollTop,

			//for optimisation purposes
			windowSize : windowSize,
			windowScroll : windowScroll,
			popupWidth : popupWidth,
			popupHeight : popupHeight
		};
	}
};

/**
 *
 * @param {Object|bool} params
 * @param {Number} [params.offset = 0]
 * @param {string} [params.position = "top"]
 */
BX.PopupWindow.prototype.setAngle = function(params)
{
	if (params === false && this.angle !== null)
	{
		BX.remove(this.angle.element);
		this.angle = null;
		return;
	}

	var className = "popup-window-angly";
	if (this.angle === null)
	{
		var position = this.bindOptions.position && this.bindOptions.position === "top" ? "bottom" : "top";
		var angleMinLeft = BX.PopupWindow.getOption(position === "top" ? "angleMinTop" : "angleMinBottom");
		var defaultOffset = BX.type.isNumber(params.offset) ? params.offset : 0;

		var angleLeftOffset = BX.PopupWindow.getOption("angleLeftOffset", null);
		if (defaultOffset > 0 && BX.type.isNumber(angleLeftOffset))
		{
			defaultOffset += angleLeftOffset - BX.PopupWindow.defaultOptions.angleLeftOffset;
		}

		this.angle = {
			element : BX.create("div", { props : { className: className + " " + className +"-" + position }}),
			position : position,
			offset : 0,
			defaultOffset : Math.max(defaultOffset, angleMinLeft)
			//Math.max(BX.type.isNumber(params.offset) ? params.offset : 0, angleMinLeft)
		};

		this.popupContainer.appendChild(this.angle.element);
	}

	if (typeof(params) === "object" && params.position && BX.util.in_array(params.position, ["top", "right", "bottom", "left", "hide"]))
	{
		BX.removeClass(this.angle.element, className + "-" +  this.angle.position);
		BX.addClass(this.angle.element, className + "-" +  params.position);
		this.angle.position = params.position;
	}

	if (typeof(params) === "object" && BX.type.isNumber(params.offset))
	{
		var offset = params.offset;
		var minOffset, maxOffset;
		if (this.angle.position === "top")
		{
			minOffset = BX.PopupWindow.getOption("angleMinTop");
			maxOffset = this.popupContainer.offsetWidth - BX.PopupWindow.getOption("angleMaxTop");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.left = this.angle.offset + "px";
			this.angle.element.style.marginLeft = 0;
		}
		else if (this.angle.position === "bottom")
		{
			minOffset = BX.PopupWindow.getOption("angleMinBottom");
			maxOffset = this.popupContainer.offsetWidth - BX.PopupWindow.getOption("angleMaxBottom");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.marginLeft = this.angle.offset + "px";
			this.angle.element.style.left = 0;
		}
		else if (this.angle.position === "right")
		{
			minOffset = BX.PopupWindow.getOption("angleMinRight");
			maxOffset = this.popupContainer.offsetHeight - BX.PopupWindow.getOption("angleMaxRight");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.top = this.angle.offset + "px";
		}
		else if (this.angle.position === "left")
		{
			minOffset = BX.PopupWindow.getOption("angleMinLeft");
			maxOffset = this.popupContainer.offsetHeight - BX.PopupWindow.getOption("angleMaxLeft");
			maxOffset = maxOffset < minOffset ? Math.max(minOffset, offset) : maxOffset;

			this.angle.offset = Math.min(Math.max(minOffset, offset), maxOffset);
			this.angle.element.style.top = this.angle.offset + "px";
		}
	}
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getWidth = function()
{
	return this.width;
};

/**
 *
 * @param {Number} width
 */
BX.PopupWindow.prototype.setWidth = function(width)
{
	this.setWidthProperty("width", width);
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getHeight = function()
{
	return this.height;
};

/**
 *
 * @param {Number} height
 */
BX.PopupWindow.prototype.setHeight = function(height)
{
	this.setHeightProperty("height", height);
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getMinWidth = function()
{
	return this.minWidth;
};

BX.PopupWindow.prototype.setMinWidth = function(width)
{
	this.setWidthProperty("minWidth", width);
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getMinHeight = function()
{
	return this.minHeight;
};

BX.PopupWindow.prototype.setMinHeight = function(height)
{
	this.setHeightProperty("minHeight", height);
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getMaxWidth = function()
{
	return this.maxWidth;
};

BX.PopupWindow.prototype.setMaxWidth = function(width)
{
	this.setWidthProperty("maxWidth", width);
};

/**
 *
 * @returns {Number|null}
 */
BX.PopupWindow.prototype.getMaxHeight = function()
{
	return this.maxHeight;
};

BX.PopupWindow.prototype.setMaxHeight = function(height)
{
	this.setHeightProperty("maxHeight", height);
};

BX.PopupWindow.prototype.setWidthProperty = function(property, width)
{
	var props = ["width", "minWidth", "maxWidth"];
	if (props.indexOf(property) === -1)
	{
		return;
	}

	if (BX.type.isNumber(width) && width >= 0)
	{
		this[property] = width;
		this.contentContainer.style[property] = width + "px";
		this.contentContainer.style.overflowX = "auto";
		this.getPopupContainer().classList.add("popup-window-fixed-width");

		if (this.titleBar)
		{
			this.titleBar.style[property] = width + "px";
		}
	}
	else if (width === null || width === false)
	{
		this[property] = null;
		this.contentContainer.style.removeProperty(BX.util.getCssName(property));

		var hasOtherProps = props.some(function(prop) {
			return this.contentContainer.style.getPropertyValue(BX.util.getCssName(prop)) !== ""
		}, this);

		if (!hasOtherProps)
		{
			this.contentContainer.style.removeProperty("overflow-x");
			this.getPopupContainer().classList.remove("popup-window-fixed-width");
		}

		if (this.titleBar)
		{
			this.titleBar.style.removeProperty(BX.util.getCssName(property));
		}
	}
};

BX.PopupWindow.prototype.setHeightProperty = function(property, height) {
	var props = ["height", "minHeight", "maxHeight"];
	if (props.indexOf(property) === -1)
	{
		return;
	}

	if (BX.type.isNumber(height) && height >= 0)
	{
		this[property] = height;
		this.contentContainer.style[property] = height + "px";
		this.contentContainer.style.overflowY = "auto";
		this.getPopupContainer().classList.add("popup-window-fixed-height");
	}
	else if (height === null || height === false)
	{
		this[property] = null;
		this.contentContainer.style.removeProperty(BX.util.getCssName(property));

		var hasOtherProps = props.some(function(prop) {
			return this.contentContainer.style.getPropertyValue(BX.util.getCssName(prop)) !== ""
		}, this);

		if (!hasOtherProps)
		{
			this.contentContainer.style.removeProperty("overflow-y");
			this.getPopupContainer().classList.remove("popup-window-fixed-height");
		}
	}
};

/**
 *
 * @param {object|boolean} options
 * @param {Number} [options.minWidth = 0] deprecated
 * @param {Number} [options.minHeight = 0] deprecated
 */
BX.PopupWindow.prototype.setResizeMode = function(options)
{
	if (options === true || BX.type.isPlainObject(options))
	{
		if (!this.resizeIcon)
		{
			this.resizeIcon = BX.create("div", {
				props: {
					className: "popup-window-resize"
				},
				events: {
					mousedown: BX.proxy(this.onResizeMouseDown, this)
				}
			});

			this.popupContainer.appendChild(this.resizeIcon);
		}

		//Compatibility
		this.setMinWidth(options.minWidth);
		this.setMinHeight(options.minHeight);
	}
	else if (options === false && this.resizeIcon)
	{
		BX.remove(this.resizeIcon);
		this.resizeIcon = null;
	}
};

/**
 *
 * @return {HTMLElement}
 */
BX.PopupWindow.prototype.getPopupContainer = function()
{
	return this.popupContainer;
};

BX.PopupWindow.prototype.onTitleMouseDown = function(event)
{
	this._startDrag(
		event,
		{
			cursor: "move",
			callback: BX.proxy(this.move, this),
			eventName: "Drag"
		}
	);
};

BX.PopupWindow.prototype.onResizeMouseDown = function(event)
{
	this._startDrag(
		event,
		{
			cursor: "nwse-resize",
			eventName: "Resize",
			callback: BX.proxy(this._resize, this)
		}
	);

	this.resizeContentPos = BX.pos(this.contentContainer);
	this.resizeContentOffset = this.resizeContentPos.left - BX.pos(this.popupContainer).left;
};

BX.PopupWindow.prototype._resize = function(offsetX, offsetY, pageX, pageY)
{
	var width = pageX - this.resizeContentPos.left;
	var height = pageY - this.resizeContentPos.top;

	var scrollWidth = BX.GetWindowScrollSize().scrollWidth;
	if (this.resizeContentPos.left + width + this.resizeContentOffset >= scrollWidth)
	{
		width = scrollWidth - this.resizeContentPos.left - this.resizeContentOffset;
	}

	width = Math.max(width, this.getMinWidth());
	height = Math.max(height, this.getMinHeight());

	if (this.getMaxWidth() !== null)
	{
		width = Math.min(width, this.getMaxWidth());
	}

	if (this.getMaxHeight() !== null)
	{
		height = Math.min(height, this.getMaxHeight());
	}

	this.setWidth(width);
	this.setHeight(height);
};

BX.PopupWindow.prototype.isTopAngle = function()
{
	return this.angle !== null && this.angle.position === "top";
};

BX.PopupWindow.prototype.isBottomAngle = function()
{
	return this.angle !== null && this.angle.position === "bottom";
};

BX.PopupWindow.prototype.isTopOrBottomAngle = function()
{
	return this.angle !== null && BX.util.in_array(this.angle.position, ["top", "bottom"]);
};

BX.PopupWindow.prototype.getAngleHeight = function()
{
	return (this.isTopOrBottomAngle() ? BX.PopupWindow.getOption("angleTopOffset") : 0);
};

/**
 *
 * @param {object} params
 * @param {Number} [params.offsetLeft]
 * @param {Number} [params.offsetTop]
 */
BX.PopupWindow.prototype.setOffset = function(params)
{
	if (!BX.type.isPlainObject(params))
	{
		return;
	}

	if (BX.type.isNumber(params.offsetLeft))
	{
		this.offsetLeft = params.offsetLeft + BX.PopupWindow.getOption("offsetLeft");
	}

	if (BX.type.isNumber(params.offsetTop))
	{
		this.offsetTop = params.offsetTop + BX.PopupWindow.getOption("offsetTop");
	}
};

/**
 *
 * @param {object|string} params
 * @param {Element} [params.content]
 */
BX.PopupWindow.prototype.setTitleBar = function(params)
{
	if (!this.titleBar)
	{
		return;
	}

	if (typeof(params) === "object" && BX.type.isDomNode(params.content))
	{
		this.titleBar.innerHTML = "";
		this.titleBar.appendChild(params.content);
	}
	else if (typeof(params) === "string")
	{
		this.titleBar.innerHTML = "";
		this.titleBar.appendChild(
			BX.create("span", {
				props : {
					className: "popup-window-titlebar-text"
				},
				text : params
			})
		);
	}

	if (this.params.draggable)
	{
		this.titleBar.style.cursor = "move";
		BX.bind(this.titleBar, "mousedown", BX.proxy(this.onTitleMouseDown, this));
	}
};

/**
 *
 * @param {bool} enable
 */
BX.PopupWindow.prototype.setClosingByEsc = function(enable)
{
	enable = BX.type.isBoolean(enable) ? enable : true;
	if (enable)
	{
		this.closeByEsc = true;
		if (!this.isCloseByEscBinded)
		{
			BX.bind(document, "keyup", BX.proxy(this._onKeyUp, this));
			this.isCloseByEscBinded = true;
		}
	}
	else
	{
		this.closeByEsc = false;
		if (this.isCloseByEscBinded)
		{
			BX.unbind(document, "keyup", BX.proxy(this._onKeyUp, this));
			this.isCloseByEscBinded = false;
		}
	}
};

/**
 *
 * @param {bool} enable
 */
BX.PopupWindow.prototype.setAutoHide = function(enable)
{
	enable = BX.type.isBoolean(enable) ? enable : true;
	if (enable)
	{
		this.autoHide = true;
		if (this.isShown())
		{
			this.bindAutoHide();
		}
	}
	else
	{
		this.autoHide = false;
		this.unbindAutoHide();
	}
};

/**
 * @private
 */
BX.PopupWindow.prototype.bindAutoHide = function()
{
	if (!this.isAutoHideBinded)
	{
		this.isAutoHideBinded = true;
		BX.bind(this.popupContainer, "click", this.cancelBubble);

		if (this.overlay && this.overlay.element)
		{
			BX.bind(this.overlay.element, "click", this.handleOverlayClick);
		}
		else
		{
			BX.bind(document, "click", this.handleAutoHide);
		}
	}
};

/**
 * @private
 */
BX.PopupWindow.prototype.unbindAutoHide = function()
{
	if (this.isAutoHideBinded)
	{
		this.isAutoHideBinded = false;
		BX.unbind(this.popupContainer, "click", this.cancelBubble);

		if (this.overlay && this.overlay.element)
		{
			BX.unbind(this.overlay.element, "click", this.handleOverlayClick);
		}
		else
		{
			BX.unbind(document, "click", this.handleAutoHide);
		}
	}
};

/**
 * @private
 * @param event
 */
BX.PopupWindow.prototype.handleAutoHide = function(event)
{
	if (this.autoHideHandler !== null)
	{
		if (this.autoHideHandler(event))
		{
			this.close(event);
		}
	}
	else
	{
		this.close(event);
	}
};

BX.PopupWindow.prototype.handleOverlayClick = function(event)
{
	this.close(event);
	event.stopPropagation();
};

/**
 *
 * @param {object} params
 * @param {Number} [params.opacity]
 * @param {string} [params.backgroundColor]
 */
BX.PopupWindow.prototype.setOverlay = function(params)
{
	if (this.overlay === null)
	{
		this.overlay = {
			element : BX.create("div", {
				props : {
					className: "popup-window-overlay", id : "popup-window-overlay-" + this.uniquePopupId
				}
			})
		};

		this.adjustOverlayZindex();
		this.resizeOverlay();

		this.appendContainer.appendChild(this.overlay.element);
	}

	if (params && params.hasOwnProperty('opacity') && BX.type.isNumber(params.opacity) && params.opacity >= 0 && params.opacity <= 100)
	{
		if (BX.browser.IsIE() && !BX.browser.IsIE9())
		{
			this.overlay.element.style.filter =  "alpha(opacity=" + params.opacity +")";
		}
		else
		{
			this.overlay.element.style.filter = "none";
			this.overlay.element.style.opacity = parseFloat(params.opacity/100).toPrecision(3);
		}
	}

	if (params && params.backgroundColor)
	{
		this.overlay.element.style.backgroundColor = params.backgroundColor;
	}
};

BX.PopupWindow.prototype.removeOverlay = function()
{
	if (this.overlay !== null && this.overlay.element !== null)
	{
		BX.remove(this.overlay.element);
	}

	if (this.overlayTimeout)
	{
		clearInterval(this.overlayTimeout);
		this.overlayTimeout = null;
	}

	this.overlay = null;
};

BX.PopupWindow.prototype.hideOverlay = function()
{
	if (this.overlay !== null && this.overlay.element !== null)
	{
		if (this.overlayTimeout)
		{
			clearInterval(this.overlayTimeout);
			this.overlayTimeout = null;
		}

		this.overlay.element.style.display = "none";
	}
};

BX.PopupWindow.prototype.showOverlay = function()
{
	if (this.overlay !== null && this.overlay.element !== null)
	{
		this.overlay.element.style.display = "block";

		var popupHeight = this.popupContainer.offsetHeight;
		this.overlayTimeout = setInterval(function() {
			if (popupHeight !== this.popupContainer.offsetHeight)
			{
				this.resizeOverlay();
				popupHeight = this.popupContainer.offsetHeight;
			}

		}.bind(this), 1000);
	}
};

BX.PopupWindow.prototype.resizeOverlay = function()
{
	if (this.overlay !== null && this.overlay.element !== null)
	{
		if (this.parentPopup)
		{
			this.overlay.element.style.width = this.parentPopup.popupContainer.offsetWidth + "px";
			this.overlay.element.style.height = this.parentPopup.popupContainer.offsetHeight + "px";
		}
		else
		{
			var windowSize = BX.GetWindowScrollSize();
			var scrollHeight = Math.max(
				document.body.scrollHeight, document.documentElement.scrollHeight,
				document.body.offsetHeight, document.documentElement.offsetHeight,
				document.body.clientHeight, document.documentElement.clientHeight
			);

			this.overlay.element.style.width = windowSize.scrollWidth + "px";
			this.overlay.element.style.height = scrollHeight + "px";
		}
	}
};

BX.PopupWindow.prototype.getZindex = function()
{
	if (this.overlay !== null)
	{
		return (this.params.zIndexAbsolute > 0 ? this.params.zIndexAbsolute : BX.PopupWindow.getOption("popupOverlayZindex") + this.params.zIndex);
	}
	else
	{
		return (this.params.zIndexAbsolute > 0 ? this.params.zIndexAbsolute : BX.PopupWindow.getOption("popupZindex") + this.params.zIndex);
	}
};

BX.PopupWindow.prototype.adjustOverlayZindex = function()
{
	if (this.overlay !== null && this.overlay.element !== null)
	{
		this.overlay.element.style.zIndex = parseInt(this.popupContainer.style.zIndex) - 1;
	}
};

BX.PopupWindow.prototype.show = function()
{
	if (!this.firstShow)
	{
		BX.onCustomEvent(this, "onPopupFirstShow", [this]);
		this.firstShow = true;
	}
	BX.onCustomEvent(this, "onPopupShow", [this]);

	this.showOverlay();
	this.popupContainer.style.display = "block";

	this.showAnimation();

	this.adjustPosition();

	BX.onCustomEvent(this, "onAfterPopupShow", [this]);

	if (this.closeByEsc && !this.isCloseByEscBinded)
	{
		BX.bind(document, "keyup", BX.proxy(this._onKeyUp, this));
		this.isCloseByEscBinded = true;
	}

	if (this.autoHide && !this.isAutoHideBinded)
	{
		setTimeout(
			BX.proxy(function() {
				if (this.isShown())
				{
					this.bindAutoHide();
				}
			}, this), 100
		);
	}
};

BX.PopupWindow.prototype.showAnimation = function()
{
	if (BX.type.isNotEmptyString(this.animationCloseClassName))
	{
		BX.removeClass(this.popupContainer, this.animationCloseClassName);
	}

	if (BX.type.isNotEmptyString(this.animationShowClassName))
	{
		BX.addClass(this.popupContainer, this.animationShowClassName);
	}
};

BX.PopupWindow.prototype.closeAnimation = function()
{
	if (BX.type.isNotEmptyString(this.animationShowClassName))
	{
		BX.removeClass(this.popupContainer, this.animationShowClassName);
	}

	if (BX.type.isNotEmptyString(this.animationCloseClassName))
	{
		BX.addClass(this.popupContainer, this.animationCloseClassName);
	}
};

BX.PopupWindow.prototype.isShown = function()
{
   return this.popupContainer.style.display === "block";
};

BX.PopupWindow.prototype.cancelBubble = function(event)
{
	event = event || window.event;

	if (event.stopPropagation)
	{
		event.stopPropagation();
	}
	else
	{
		event.cancelBubble = true;
	}
};

/**
 *
 * @param {Event} [event]
 * @return {void}
 */
BX.PopupWindow.prototype.close = function(event)
{
	if (!this.isShown())
	{
		return;
	}

	if (event && !(BX.getEventButton(event) & BX.MSLEFT))
	{
		return;
	}

	BX.onCustomEvent(this, "onPopupClose", [this, event]);

	this.hideOverlay();

	this.closeAnimation();

	var popupCloseFunction = BX.proxy(function() {
		this.popupContainer.style.display = "none";

		if (this.animationCloseEventType === 'animation')
		{
			BX.unbind(this.popupContainer, 'animationend', popupCloseFunction);
			BX.unbind(this.popupContainer, 'webkitAnimationEnd', popupCloseFunction);
			BX.unbind(this.popupContainer, 'oanimationend', popupCloseFunction);
			BX.unbind(this.popupContainer, 'oAnimationEnd', popupCloseFunction);
			BX.unbind(this.popupContainer, 'MSAnimationEnd', popupCloseFunction);
		}
		else if (this.animationCloseEventType === 'transition')
		{
			BX.unbind(this.popupContainer, 'transitionend', popupCloseFunction);
			BX.unbind(this.popupContainer, 'webkitTransitionEnd', popupCloseFunction);
			BX.unbind(this.popupContainer, 'otransitionend', popupCloseFunction);
			BX.unbind(this.popupContainer, 'oTransitionEnd', popupCloseFunction);
			BX.unbind(this.popupContainer, 'MSTransitionEnd', popupCloseFunction);
		}
	}, this);

	if (BX.type.isNotEmptyString(this.animationCloseEventType))
	{
		if (this.animationCloseEventType === 'animation')
		{
			BX.bind(this.popupContainer, 'animationend', popupCloseFunction);
			BX.bind(this.popupContainer, 'webkitAnimationEnd', popupCloseFunction);
			BX.bind(this.popupContainer, 'oanimationend', popupCloseFunction);
			BX.bind(this.popupContainer, 'oAnimationEnd', popupCloseFunction);
			BX.bind(this.popupContainer, 'MSAnimationEnd', popupCloseFunction);
		}
		else if (this.animationCloseEventType === 'transition')
		{
			BX.bind(this.popupContainer, 'transitionend', popupCloseFunction);
			BX.bind(this.popupContainer, 'webkitTransitionEnd', popupCloseFunction);
			BX.bind(this.popupContainer, 'otransitionend', popupCloseFunction);
			BX.bind(this.popupContainer, 'oTransitionEnd', popupCloseFunction);
			BX.bind(this.popupContainer, 'MSTransitionEnd', popupCloseFunction);
		}
	}
	else
	{
		popupCloseFunction();
	}

	if (this.isCloseByEscBinded)
	{
		BX.unbind(document, "keyup", BX.proxy(this._onKeyUp, this));
		this.isCloseByEscBinded = false;
	}

	setTimeout(BX.proxy(this._close, this), 0);
};

BX.PopupWindow.prototype._close = function()
{
	if (this.autoHide)
	{
		this.unbindAutoHide();
	}
};

BX.PopupWindow.prototype._onCloseIconClick = function(event)
{
	event = event || window.event;
	this.close(event);
	BX.PreventDefault(event);
};

BX.PopupWindow.prototype._onKeyUp = function(event)
{
	event = event || window.event;
	if (event.keyCode === 27)
	{
		_checkEscPressed(this.getZindex(), BX.proxy(this.close, this));
	}
};

BX.PopupWindow.prototype.destroy = function()
{
	BX.onCustomEvent(this, "onPopupDestroy", [this]);
	BX.unbindAll(this);
	BX.unbind(document, "keyup", BX.proxy(this._onKeyUp, this));
	BX.unbind(document, "click", BX.proxy(this.close, this));
	BX.unbind(document, "mousemove", BX.proxy(this._moveDrag, this));
	BX.unbind(document, "mouseup", BX.proxy(this._stopDrag, this));
	BX.unbind(window, "resize", BX.proxy(this._onResizeWindow, this));
	BX.remove(this.popupContainer);
	this.removeOverlay();
};

BX.PopupWindow.prototype.enterFullScreen = function()
{
	if (BX.PopupWindow.fullscreenStatus)
	{
		if (document.cancelFullScreen)
		{
			document.cancelFullScreen();
		}
		else if (document.mozCancelFullScreen)
		{
			document.mozCancelFullScreen();
		}
		else if (document.webkitCancelFullScreen)
		{
			document.webkitCancelFullScreen();
		}
	}
	else
	{
		if (BX.browser.IsChrome() || BX.browser.IsSafari())
		{
			this.contentContainer.webkitRequestFullScreen(this.contentContainer.ALLOW_KEYBOARD_INPUT);
			BX.bind(window, "webkitfullscreenchange", this.fullscreenBind = BX.proxy(this.eventFullScreen, this));
		}
		else if (BX.browser.IsFirefox())
		{
			this.contentContainer.mozRequestFullScreen(this.contentContainer.ALLOW_KEYBOARD_INPUT);
			BX.bind(window, "mozfullscreenchange", this.fullscreenBind = BX.proxy(this.eventFullScreen, this));
		}
	}
};

BX.PopupWindow.prototype.eventFullScreen = function(event)
{
	if (BX.PopupWindow.fullscreenStatus)
	{
		if (BX.browser.IsChrome() || BX.browser.IsSafari())
		{
			BX.unbind(window, "webkitfullscreenchange", this.fullscreenBind);
		}
		else if (BX.browser.IsFirefox())
		{
			BX.unbind(window, "mozfullscreenchange", this.fullscreenBind);
		}

		BX.removeClass(this.contentContainer, "popup-window-fullscreen", [this.contentContainer]);

		BX.PopupWindow.fullscreenStatus = false;
		BX.onCustomEvent(this, "onPopupFullscreenLeave");
		this.adjustPosition();
	}
	else
	{
		BX.addClass(this.contentContainer, "popup-window-fullscreen");
		BX.PopupWindow.fullscreenStatus = true;
		BX.onCustomEvent(this, "onPopupFullscreenEnter", [this.contentContainer]);
		this.adjustPosition();
	}
};

/**
 *
 * @param {object} [bindOptions]
 * @param {bool} [bindOptions.forceBindPosition]
 * @param {bool} [bindOptions.forceLeft]
 * @param {bool} [bindOptions.forceTop]
 * @param {string} [bindOptions.position = "bottom"]
 */
BX.PopupWindow.prototype.adjustPosition = function(bindOptions)
{
	if (bindOptions && typeof(bindOptions) === "object")
	{
		this.bindOptions = bindOptions;
	}

	var bindElementPos = this.getBindElementPos(this.bindElement);

	if (
		!this.bindOptions.forceBindPosition &&
		this.bindElementPos !== null &&
		bindElementPos.top === this.bindElementPos.top &&
		bindElementPos.left === this.bindElementPos.left
	)
	{
		return;
	}

	this.bindElementPos = bindElementPos;

	var windowSize = bindElementPos.windowSize ? bindElementPos.windowSize : BX.GetWindowInnerSize();
	var windowScroll = bindElementPos.windowScroll ? bindElementPos.windowScroll : BX.GetWindowScrollPos();
	var popupWidth = bindElementPos.popupWidth ? bindElementPos.popupWidth : this.popupContainer.offsetWidth;
	var popupHeight = bindElementPos.popupHeight ? bindElementPos.popupHeight : this.popupContainer.offsetHeight;

	var angleTopOffset = BX.PopupWindow.getOption("angleTopOffset");

	var left = this.bindElementPos.left + this.offsetLeft -
				(this.isTopOrBottomAngle() ? BX.PopupWindow.getOption("angleLeftOffset") : 0);

	if (
		!this.bindOptions.forceLeft &&
		(left + popupWidth + this.bordersWidth) >= (windowSize.innerWidth + windowScroll.scrollLeft) &&
		(windowSize.innerWidth + windowScroll.scrollLeft - popupWidth - this.bordersWidth) > 0)
	{
		var bindLeft = left;
		left = windowSize.innerWidth + windowScroll.scrollLeft - popupWidth - this.bordersWidth;
		if (this.isTopOrBottomAngle())
		{
			this.setAngle({ offset : bindLeft - left + this.angle.defaultOffset});
		}
	}
	else if (this.isTopOrBottomAngle())
	{
		this.setAngle({ offset : this.angle.defaultOffset + (left < 0 ? left : 0) });
	}

	if (left < 0)
	{
		left = 0;
	}

	var top = 0;

	if (this.bindOptions.position && this.bindOptions.position === "top")
	{

		top = this.bindElementPos.top - popupHeight - this.offsetTop - (this.isBottomAngle() ? angleTopOffset : 0);
		if (top < 0 || (!this.bindOptions.forceTop && top < windowScroll.scrollTop))
		{
			top = this.bindElementPos.bottom + this.offsetTop;
			if (this.angle !== null)
			{
				top += angleTopOffset;
				this.setAngle({ position: "top"});
			}
		}
		else if (this.isTopAngle())
		{
			top = top - angleTopOffset + BX.PopupWindow.getOption("positionTopXOffset");
			this.setAngle({ position: "bottom"});
		}
		else
		{
			top += BX.PopupWindow.getOption("positionTopXOffset");
		}
	}
	else
	{

		top = this.bindElementPos.bottom + this.offsetTop + this.getAngleHeight();

		if (
			!this.bindOptions.forceTop &&
			(top + popupHeight) > (windowSize.innerHeight + windowScroll.scrollTop) &&
			(this.bindElementPos.top - popupHeight - this.getAngleHeight()) >= 0) //Can we place the PopupWindow above the bindElement?
		{
			//The PopupWindow doesn't place below the bindElement. We should place it above.
			top = this.bindElementPos.top - popupHeight;

			if (this.isTopOrBottomAngle())
			{
				top -= angleTopOffset;
				this.setAngle({ position: "bottom"});
			}

			top += BX.PopupWindow.getOption("positionTopXOffset");

		}
		else if (this.isBottomAngle())
		{
			top += angleTopOffset;
			this.setAngle({ position: "top"});
		}
	}

	if (!this.parentPopup && top < 0)
	{
		top = 0;
	}

	BX.adjust(this.popupContainer, { style: {
		top: top + "px",
		left: left + "px",
		zIndex: this.getZindex()
	}});

	this.adjustOverlayZindex();
};

BX.PopupWindow.prototype._onResizeWindow = function(event)
{
	if (this.isShown())
	{
		this.adjustPosition();
		if (this.overlay !== null)
		{
			this.resizeOverlay();
		}
	}
};

BX.PopupWindow.prototype.move = function(offsetX, offsetY, pageX, pageY)
{
	var left = parseInt(this.popupContainer.style.left) + offsetX;
	var top = parseInt(this.popupContainer.style.top) + offsetY;

	if (typeof(this.params.draggable) === "object" && this.params.draggable.restrict)
	{
		//Left side
		if (!this.parentPopup && left < 0)
		{
			left = 0;
		}

		//Right side
		var scrollSize = BX.GetWindowScrollSize();
		var floatWidth = this.popupContainer.offsetWidth;
		var floatHeight = this.popupContainer.offsetHeight;

		if (left > (scrollSize.scrollWidth - floatWidth))
		{
			left = scrollSize.scrollWidth - floatWidth;
		}

		if (top > (scrollSize.scrollHeight - floatHeight))
		{
			top = scrollSize.scrollHeight - floatHeight;
		}

		//Top side
		if (!this.parentPopup && top < 0)
		{
			top = 0;
		}
	}

	this.popupContainer.style.left = left + "px";
	this.popupContainer.style.top = top + "px";
};

BX.PopupWindow.prototype._startDrag = function(event, options)
{
	event = event || window.event;
	BX.fixEventPageXY(event);

	options = options || {};
	if (BX.type.isNotEmptyString(options.cursor))
	{
		this.dragOptions.cursor = options.cursor;
	}

	if (BX.type.isNotEmptyString(options.eventName))
	{
		this.dragOptions.eventName = options.eventName;
	}

	if (BX.type.isFunction(options.callback))
	{
		this.dragOptions.callback = options.callback;
	}

	this.dragPageX = event.pageX;
	this.dragPageY = event.pageY;
	this.dragged = false;

	BX.bind(document, "mousemove", BX.proxy(this._moveDrag, this));
	BX.bind(document, "mouseup", BX.proxy(this._stopDrag, this));

	if (document.body.setCapture)
	{
		document.body.setCapture();
	}

	document.body.ondrag = BX.False;
	document.body.onselectstart = BX.False;
	document.body.style.cursor = this.dragOptions.cursor;
	document.body.style.MozUserSelect = "none";
	this.popupContainer.style.MozUserSelect = "none";

	return BX.PreventDefault(event);
};

BX.PopupWindow.prototype._moveDrag = function(event)
{
	event = event || window.event;
	BX.fixEventPageXY(event);

	if (this.dragPageX === event.pageX && this.dragPageY === event.pageY)
	{
		return;
	}

	this.dragOptions.callback(
		event.pageX - this.dragPageX,
		event.pageY - this.dragPageY,
		event.pageX,
		event.pageY
	);

	this.dragPageX = event.pageX;
	this.dragPageY = event.pageY;

	if (!this.dragged)
	{
		BX.onCustomEvent(this, "onPopup" + this.dragOptions.eventName + "Start", [this]);
		this.dragged = true;
	}

	BX.onCustomEvent(this, "onPopup" + this.dragOptions.eventName, [this]);
};

BX.PopupWindow.prototype._stopDrag = function(event)
{
	if(document.body.releaseCapture)
	{
		document.body.releaseCapture();
	}

	BX.unbind(document, "mousemove", BX.proxy(this._moveDrag, this));
	BX.unbind(document, "mouseup", BX.proxy(this._stopDrag, this));

	//document.onmousedown = null;
	document.body.ondrag = null;
	document.body.onselectstart = null;
	document.body.style.cursor = "";
	document.body.style.MozUserSelect = "";
	this.popupContainer.style.MozUserSelect = "";

	BX.onCustomEvent(this, "onPopup" + this.dragOptions.eventName + "End", [this]);
	this.dragged = false;

	return BX.PreventDefault(event);
};

BX.PopupWindow.options = {};
BX.PopupWindow.defaultOptions = {

	angleLeftOffset : 40, /*left offset for popup about target */

	positionTopXOffset : -11, /* when popup position is 'top' offset distance between popup body and target node */

	angleTopOffset : 10,    /* offset distance between popup body and target node if use angle, sum with positionTopXOffset  */

	popupZindex : 1000,
	popupOverlayZindex : 1100,

	angleMinLeft : 10,
	angleMaxLeft : 10,

	angleMinRight : 10,
	angleMaxRight : 10,

	angleMinBottom : 23, /**/
	angleMaxBottom : 25,

	angleMinTop : 23,
	angleMaxTop : 25,

	offsetLeft : 0,
	offsetTop: 0
};

BX.PopupWindow.setOptions = function(options)
{
	if (!options || typeof(options) !== "object")
	{
		return;
	}

	for (var option in options)
	{
		BX.PopupWindow.options[option] = options[option];
	}
};

BX.PopupWindow.getOption = function(option, defaultValue)
{
	if (typeof(BX.PopupWindow.options[option]) !== "undefined")
	{
		return BX.PopupWindow.options[option];
	}
	else if (typeof(defaultValue) !== "undefined")
	{
		return defaultValue;
	}
	else
	{
		return BX.PopupWindow.defaultOptions[option];
	}
};

/**
 *
 * @param {object} params
 * @param {string} [params.text]
 * @param {string} [params.id]
 * @param {string} [params.className]
 * @param {object} [params.events]
 * @constructor
 */
BX.PopupWindowButton = function(params)
{
	this.popupWindow = null;

	this.params = params || {};

	this.text = this.params.text || "";
	this.id = this.params.id || "";
	this.className = this.params.className || "";
	this.events = this.params.events || {};

	this.contextEvents = {};
	for (var eventName in this.events)
	{
		this.contextEvents[eventName] = BX.proxy(this.events[eventName], this);
	}

	this.buttonNode = BX.create(
		"span",
		{
			props : { className : "popup-window-button" + (this.className.length > 0 ? " " + this.className : ""), id : this.id },
			events : this.contextEvents,
			text : this.text
		}
	);
};

BX.PopupWindowButton.prototype.render = function()
{
	return this.buttonNode;
};

BX.PopupWindowButton.prototype.getId = function()
{
	return this.id;
};

BX.PopupWindowButton.prototype.getName = function()
{
	return this.name;
};

/**
 *
 * @returns {Element}
 */
BX.PopupWindowButton.prototype.getContainer = function()
{
	return this.buttonNode;
};

BX.PopupWindowButton.prototype.setName = function(name)
{
	this.text = name || "";
	if (this.buttonNode)
	{
		BX.cleanNode(this.buttonNode);
		BX.adjust(this.buttonNode, { text : this.text} );
	}
};

BX.PopupWindowButton.prototype.setClassName = function(className)
{
	if (this.buttonNode)
	{
		if (BX.type.isString(this.className) && (this.className !== ""))
		{
			BX.removeClass(this.buttonNode, this.className);
		}

		BX.addClass(this.buttonNode, className)
	}

	this.className = className;
};

BX.PopupWindowButton.prototype.addClassName = function(className)
{
	if (this.buttonNode)
	{
		BX.addClass(this.buttonNode, className);
		this.className = this.buttonNode.className;
	}
};

BX.PopupWindowButton.prototype.removeClassName = function(className)
{
	if (this.buttonNode)
	{
		BX.removeClass(this.buttonNode, className);
		this.className = this.buttonNode.className;
	}
};

BX.PopupWindowButtonLink = function(params)
{
	BX.PopupWindowButtonLink.superclass.constructor.apply(this, arguments);

	this.buttonNode = BX.create(
		"span",
		{
			props : { className : "popup-window-button popup-window-button-link" + (this.className.length > 0 ? " " + this.className : ""), id : this.id },
			text : this.text,
			events : this.contextEvents
		}
	);

};

BX.extend(BX.PopupWindowButtonLink, BX.PopupWindowButton);

BX.PopupWindowCustomButton = function(params)
{
	BX.PopupWindowCustomButton.superclass.constructor.apply(this, arguments);

	this.buttonNode = BX.create(
		"span",
		{
			props : { className :  (this.className.length > 0 ? " " + this.className : ""), id : this.id },
			events : this.contextEvents,
			text : this.text
		}
	);
};

BX.extend(BX.PopupWindowCustomButton, BX.PopupWindowButton);

BX.PopupMenu = {

	Data : {},
	currentItem : null,

	show : function(id, bindElement, menuItems, params)
	{
		if (this.currentItem !== null)
		{
			this.currentItem.popupWindow.close();
		}

		this.currentItem = this.create(id, bindElement, menuItems, params);
		this.currentItem.popupWindow.show();
	},

	create : function(id, bindElement, menuItems, params)
	{
		if (!this.Data[id])
		{
			this.Data[id] = new BX.PopupMenuWindow(id, bindElement, menuItems, params);
			BX.addCustomEvent(this.Data[id], 'onPopupMenuDestroy', this.onPopupDestroy.bind(this));
		}
		return this.Data[id];
	},

	getCurrentMenu : function()
	{
		return this.currentItem;
	},

	getMenuById : function(id)
	{
		return this.Data[id] ? this.Data[id] : null;
	},

	onPopupDestroy: function(popupMenuWindow)
	{
		this.destroy(popupMenuWindow.id);
	},

	destroy : function(id)
	{
		var menu = this.getMenuById(id);
		if (menu)
		{
			if (this.currentItem === menu)
			{
				this.currentItem = null;
			}
			menu.popupWindow.destroy();
			delete this.Data[id];
		}
	}
};

BX.PopupMenuWindow = function(id, bindElement, menuItems, params)
{
	this.id = id;
	this.bindElement = bindElement;

	/**
	 *
	 * @type {BX.PopupMenuItem[]}
	 */
	this.menuItems = [];
	this.itemsContainer = null;
	this.params = params && typeof(params) === "object" ? params : {};
	this.parentMenuWindow = null;
	this.parentMenuItem = null;

	if (menuItems && BX.type.isArray(menuItems))
	{
		for (var i = 0; i < menuItems.length; i++)
		{
			this.addMenuItemInternal(menuItems[i], null);
		}
	}

	this.layout = {
		menuContainer: null,
		itemsContainer: null
	};

	this.popupWindow = this.__createPopup();
};

BX.PopupMenuWindow.prototype.__createPopup = function()
{
	var domItems = [];
	for (var i = 0; i < this.menuItems.length; i++)
	{
		var item = this.menuItems[i];
		var itemLayout = item.getLayout();
		domItems.push(itemLayout.item);
	}

	var defaults = {
		closeByEsc: false,
		angle: false,
		autoHide: true,
		offsetTop: 1,
		offsetLeft: 0,
		animationOptions: {
			show: {
				type: "opacity"
			},
			close: {
				type: "opacity"
			}
		}
	};

	var options = BX.mergeEx(defaults, this.params);

	//Override user params
	options.noAllPaddings = true;
	options.darkMode = false;
	options.autoHideHandler = this.handleAutoHide.bind(this);
	options.content = (this.layout.menuContainer = BX.create("div", {
		props : {
			className : "menu-popup"
		},
		children: [
			(this.layout.itemsContainer = this.itemsContainer = BX.create("div", {
				props : {
					className : "menu-popup-items"
				},
				children: domItems
			}))
		]
	}));

	//Make internal event handlers first in the queue.
	options.events = {
		onPopupClose: this.onMenuWindowClose.bind(this),
		onPopupDestroy: this.onMenuWindowDestroy.bind(this)
	};

	var popupWindow = new BX.PopupWindow("menu-popup-" + this.id, this.bindElement, options);
	if (this.params && this.params.events)
	{
		for (var eventName in this.params.events)
		{
			if (this.params.events.hasOwnProperty(eventName))
			{
				BX.addCustomEvent(popupWindow, eventName, this.params.events[eventName]);
			}
		}
	}

	return popupWindow;
};

/**
 *
 * @returns {BX.PopupWindow}
 */
BX.PopupMenuWindow.prototype.getPopupWindow = function()
{
	return this.popupWindow;
};

BX.PopupMenuWindow.prototype.show = function()
{
	this.popupWindow.show();
};

BX.PopupMenuWindow.prototype.close = function()
{
	this.popupWindow.close();
};

BX.PopupMenuWindow.prototype.destroy = function()
{
	BX.onCustomEvent(this, "onPopupMenuDestroy", [this]);
	this.popupWindow.destroy();
};

BX.PopupMenuWindow.prototype.onMenuWindowClose = function()
{
	for (var i = 0; i < this.menuItems.length; i++)
	{
		var item = this.menuItems[i];
		item.closeSubMenu();
	}
};

BX.PopupMenuWindow.prototype.onMenuWindowDestroy = function()
{
	for (var i = 0; i < this.menuItems.length; i++)
	{
		var item = this.menuItems[i];
		item.destroySubMenu();
	}
};

/**
 * @private
 * @param {Event} event
 * @return {boolean}
 */
BX.PopupMenuWindow.prototype.handleAutoHide = function(event)
{
	return !this.containsTarget(event.target);
};

/**
 *
 * @param {Element} target
 * @return {boolean}
 */
BX.PopupMenuWindow.prototype.containsTarget = function(target)
{
	var el = this.getPopupWindow().getPopupContainer();
	if (this.getPopupWindow().isShown() && (target === el || el.contains(target)))
	{
		return true;
	}

	return this.getMenuItems().some(function(/*BX.PopupMenuItem*/item) {

		return item.getSubMenu() && item.getSubMenu().containsTarget(target);

	});
};

/**
 *
 * @param {BX.PopupMenuWindow} parentMenuWindow
 */
BX.PopupMenuWindow.prototype.setParentMenuWindow = function(parentMenuWindow)
{
	if (parentMenuWindow instanceof BX.PopupMenuWindow)
	{
		this.parentMenuWindow = parentMenuWindow;
	}
};

/**
 *
 * @returns {BX.PopupMenuWindow|null}
 */
BX.PopupMenuWindow.prototype.getParentMenuWindow = function()
{
	return this.parentMenuWindow;
};

BX.PopupMenuWindow.prototype.getRootMenuWindow = function()
{
	var root = null;
	var parent = this.getParentMenuWindow();
	while (parent !== null)
	{
		root = parent;
		parent = parent.getParentMenuWindow();
	}

	return root;
};

/**
 *
 * @param {BX.PopupMenuItem} parentMenuItem
 */
BX.PopupMenuWindow.prototype.setParentMenuItem = function(parentMenuItem)
{
	if (parentMenuItem instanceof BX.PopupMenuItem)
	{
		this.parentMenuItem = parentMenuItem;
	}
};

/**
 *
 * @returns {BX.PopupMenuItem}
 */
BX.PopupMenuWindow.prototype.getParentMenuItem = function()
{
	return this.parentMenuItem;
};

/**
 *
 * @param menuItemJson
 * @param targetItemId
 * @returns {BX.PopupMenuItem}
 */
BX.PopupMenuWindow.prototype.addMenuItem = function(menuItemJson, targetItemId)
{
	var menuItem = this.addMenuItemInternal(menuItemJson, targetItemId);
	if (!menuItem)
	{
		return null;
	}

	var itemLayout = menuItem.getLayout();
	var targetItem = this.getMenuItem(targetItemId);
	if (targetItem !== null)
	{
		var targetLayout = targetItem.getLayout();
		this.itemsContainer.insertBefore(itemLayout.item, targetLayout.item);
	}
	else
	{
		this.itemsContainer.appendChild(itemLayout.item);
	}

	return menuItem;
};

/**
 *
 * @param menuItemJson
 * @param targetItemId
 * @returns {BX.PopupMenuItem}
 */
BX.PopupMenuWindow.prototype.addMenuItemInternal = function(menuItemJson, targetItemId)
{
	if (
		!menuItemJson ||
		(!menuItemJson.delimiter && !BX.type.isNotEmptyString(menuItemJson.text)) ||
		(menuItemJson.id && this.getMenuItem(menuItemJson.id) !== null)
	)
	{
		return null;
	}

	if (BX.type.isNumber(this.params.menuShowDelay))
	{
		menuItemJson.menuShowDelay = this.params.menuShowDelay;
	}

	var menuItem = new BX.PopupMenuItem(menuItemJson);
	menuItem.setMenuWindow(this);

	var position = this.getMenuItemPosition(targetItemId);
	if (position >= 0)
	{
		this.menuItems = BX.util.insertIntoArray(this.menuItems, position, menuItem);
	}
	else
	{
		this.menuItems.push(menuItem);
	}

	return menuItem;
};

BX.PopupMenuWindow.prototype.removeMenuItem = function(itemId)
{
	var item = this.getMenuItem(itemId);
	if (!item)
	{
		return;
	}

	for (var position = 0; position < this.menuItems.length; position++)
	{
		if (this.menuItems[position] === item)
		{
			item.destroySubMenu();
			this.menuItems = BX.util.deleteFromArray(this.menuItems, position);
			break;
		}
	}

	if (!this.menuItems.length)
	{
		var menuWindow = item.getMenuWindow();
		if (menuWindow)
		{
			var parentMenuItem = menuWindow.getParentMenuItem();
			if (parentMenuItem)
			{
				parentMenuItem.destroySubMenu();
			}
			else
			{
				menuWindow.destroy();
			}
		}
	}

	item.layout.item.parentNode.removeChild(item.layout.item);
	item.layout = {
		item: null,
		text: null
	};
};

/**
 *
 * @param itemId
 * @returns {BX.PopupMenuItem}
 */
BX.PopupMenuWindow.prototype.getMenuItem = function(itemId)
{
	for (var i = 0; i < this.menuItems.length; i++)
	{
		if (this.menuItems[i].id && this.menuItems[i].id === itemId)
		{
			return this.menuItems[i];
		}
	}

	return null;
};

/**
 *
 * @returns {BX.PopupMenuItem[]}
 */
BX.PopupMenuWindow.prototype.getMenuItems = function()
{
	return this.menuItems;
};

/**
 *
 * @param itemId
 * @returns {Number}
 */
BX.PopupMenuWindow.prototype.getMenuItemPosition = function(itemId)
{
	if (itemId)
	{
		for (var i = 0; i < this.menuItems.length; i++)
		{
			if (this.menuItems[i].id && this.menuItems[i].id === itemId)
			{
				return i;
			}
		}
	}

	return -1;
};

/**
 *
 * @param {Object} options
 * @param {string} [options.id]
 * @param {string} [options.text]
 * @param {string} [options.title = ""]
 * @param {boolean} [options.disabled = false]
 * @param {string} [options.href = null]
 * @param {string} [options.target = null]
 * @param {string} [options.className = null]
 * @param {boolean} [options.delimiter = false]
 * @param {Number} [options.menuShowDelay = 300]
 * @param {Number} [options.subMenuOffsetX = 4]
 * @param {object} [options.events]
 * @param {object} [options.dataset]
 * @param {function|string} [options.onclick = null]
 * @param {array[]} [options.items = []]
 * @constructor
 */
BX.PopupMenuItem = function(options)
{
	options = options || {};
	this.options = options;

	this.id = options.id || BX.util.getRandomString().toLowerCase();
	this.text = BX.type.isNotEmptyString(options.text) ? options.text : "";
	this.title = BX.type.isNotEmptyString(options.title) ? options.title : "";
	this.delimiter = options.delimiter === true;
	this.href = BX.type.isNotEmptyString(options.href) ? options.href : null;
	this.target = BX.type.isNotEmptyString(options.target) ? options.target : null;
	this.dataset = BX.type.isPlainObject(options.dataset) ? options.dataset : null;
	this.className = BX.type.isNotEmptyString(options.className) ? options.className : null;
	this.menuShowDelay = BX.type.isNumber(options.menuShowDelay) ? options.menuShowDelay : 300;
	this.subMenuOffsetX = BX.type.isNumber(options.subMenuOffsetX) ? options.subMenuOffsetX : 4;
	this._items = BX.type.isArray(options.items) ? options.items : [];
	this.disabled = options.disabled === true;

	/**
	 *
	 * @type {function|string}
	 */
	this.onclick =
		BX.type.isNotEmptyString(options.onclick) || BX.type.isFunction(options.onclick)
			? options.onclick
			: null
	;

	if (BX.type.isPlainObject(options.events))
	{
		for (var eventName in options.events)
		{
			BX.addCustomEvent(this, eventName, options.events[eventName]);
		}
	}

	/**
	 *
	 * @type {BX.PopupMenuWindow}
	 */
	this.menuWindow = null;

	/**
	 *
	 * @type {BX.PopupMenuWindow}
	 */
	this.subMenuWindow = null;

	/**
	 *
	 * @type {{item: Element, text: Element}}
	 */
	this.layout = {
		item: null,
		text: null
	};

	this.getLayout(); //compatibility

	//compatibility
	//now use this.options
	this.events = {};
	this.items = [];
	for (var property in options)
	{
		if (options.hasOwnProperty(property) && typeof(this[property]) === "undefined")
		{
			this[property] = options[property];
		}
	}
};

BX.PopupMenuItem.prototype = {

	getLayout: function()
	{
		if (this.layout.item)
		{
			return this.layout;
		}

		if (this.delimiter)
		{
			if (BX.type.isNotEmptyString(this.text))
			{
				this.layout.item = BX.create("span", {
					props: {
						className: "popup-window-delimiter-section"
					},
					children: [
						(this.layout.text = BX.create("span", {
							props : {
								className: "popup-window-delimiter-text"
							},
							html : this.text
						}))
					]
				});

			}
			else
			{
				this.layout.item = BX.create("span", {
					props: {
						className: "popup-window-delimiter"
					}
				});
			}
		}
		else
		{
			this.layout.item = BX.create(this.href ? "a" : "span", {
				props : {
					className: [
						"menu-popup-item",
						(this.className ? this.className : "menu-popup-no-icon"),
						(this.hasSubMenu() ? "menu-popup-item-submenu" : "")
					].join(" ")
				},

				attrs : {
					title : this.title,
					onclick: BX.type.isString(this.onclick) ? this.onclick : "", // compatibility
					target : this.target ? this.target : ""
				},

				dataset: this.dataset,

				events :
					BX.type.isFunction(this.onclick)
						? { click : BX.delegate(this.onItemClick, this) }
						: null
				,

				children : [
					BX.create("span", { props : { className: "menu-popup-item-icon"} }),
					(this.layout.text = BX.create("span", {
						props : {
							className: "menu-popup-item-text"
						},
						html : this.text
					}))
				]
			});

			if (this.href)
			{
				this.layout.item.href = this.href;
			}

			if (this.isDisabled())
			{
				this.disable();
			}

			BX.bind(this.layout.item, "mouseenter", this.onItemMouseEnter.bind(this));
			BX.bind(this.layout.item, "mouseleave", this.onItemMouseLeave.bind(this));
		}

		return this.layout;
	},

	getContainer: function()
	{
		return this.getLayout().item;
	},

	getTextContainer: function()
	{
		return this.getLayout().text;
	},

	onItemClick: function(event)
	{
		this.onclick.call(this.menuWindow, event, this); //compatibility
	},

	onItemMouseEnter: function(event)
	{
		if (this.isDisabled())
		{
			return;
		}

		BX.onCustomEvent(this, "onMouseEnter");

		if (this.subMenuTimeout)
		{
			clearTimeout(this.subMenuTimeout);
		}

		if (this.hasSubMenu())
		{
			this.subMenuTimeout = setTimeout(function() {
				this.showSubMenu();
			}.bind(this), this.menuShowDelay);
		}
		else
		{
			this.subMenuTimeout = setTimeout(function() {
				this.closeSiblings();
			}.bind(this), this.menuShowDelay);
		}
	},

	onItemMouseLeave: function(event)
	{
		if (this.isDisabled())
		{
			return;
		}

		BX.onCustomEvent(this, "onMouseLeave");

		if (this.subMenuTimeout)
		{
			clearTimeout(this.subMenuTimeout);
		}
	},

	hasSubMenu: function()
	{
		return this.subMenuWindow !== null || this._items.length;
	},

	showSubMenu: function()
	{
		this.addSubMenu(this._items);

		if (this.subMenuWindow)
		{
			BX.addClass(this.layout.item, "menu-popup-item-open");

			this.closeSiblings();
			this.closeChildren();

			var popupWindow = this.subMenuWindow.getPopupWindow();
			if (!popupWindow.isShown())
			{
				BX.onCustomEvent(this, "onSubMenuShow");
				popupWindow.show();
			}

			this.adjustSubMenu();
		}
	},

	addSubMenu: function(items)
	{
		if (this.subMenuWindow !== null || !BX.type.isArray(items) || !items.length)
		{
			return;
		}

		var rootMenuWindow = this.getMenuWindow().getRootMenuWindow() || this.getMenuWindow();
		var options = rootMenuWindow.params;

		//Override root menu options
		options.autoHide = false;
		options.menuShowDelay = this.menuShowDelay;
		options.zIndexAbsolute = this.getMenuWindow().getPopupWindow().getZindex() + 2;
		options.bindOptions = {
			forceTop: true,
			forceLeft: true,
			forceBindPosition: true
		};

		delete options.zIndex;
		delete options.events;
		delete options.angle;
		delete options.overlay;

		this.subMenuWindow = new BX.PopupMenuWindow("popup-submenu-" + this.id, this.layout.item, items, options);
		this.subMenuWindow.setParentMenuWindow(this.getMenuWindow());
		this.subMenuWindow.setParentMenuItem(this);

		BX.addClass(this.layout.item, "menu-popup-item-submenu");
	},

	closeSubMenu: function()
	{
		if (this.subMenuWindow)
		{
			BX.removeClass(this.layout.item, "menu-popup-item-open");

			this.closeChildren();

			var popupWindow = this.subMenuWindow.getPopupWindow();
			if (popupWindow.isShown())
			{
				BX.onCustomEvent(this, "onSubMenuClose");
			}

			this.subMenuWindow.close();
		}
	},

	closeSiblings: function()
	{
		var siblings = this.menuWindow.getMenuItems();
		for (var i = 0; i < siblings.length; i++)
		{
			if (siblings[i] !== this)
			{
				siblings[i].closeSubMenu();
			}
		}
	},

	closeChildren: function()
	{
		if (this.subMenuWindow)
		{
			var children = this.subMenuWindow.getMenuItems();
			for (var i = 0; i < children.length; i++)
			{
				children[i].closeSubMenu();
			}
		}
	},

	destroySubMenu: function()
	{
		if (this.subMenuWindow)
		{
			BX.removeClass(this.layout.item, "menu-popup-item-open menu-popup-item-submenu");
			this.destroyChildren();
			this.subMenuWindow.destroy();

			this.subMenuWindow = null;
			this._items = [];
		}
	},

	destroyChildren: function()
	{
		if (this.subMenuWindow)
		{
			var children = this.subMenuWindow.getMenuItems();
			for (var i = 0; i < children.length; i++)
			{
				children[i].destroySubMenu();
			}
		}
	},

	adjustSubMenu: function()
	{
		if (!this.subMenuWindow || !this.layout.item)
		{
			return;
		}

		var popupWindow = this.subMenuWindow.getPopupWindow();
		var itemRect = this.layout.item.getBoundingClientRect();

		var offsetLeft = itemRect.width + this.subMenuOffsetX;
		var offsetTop = itemRect.height + this.getPopupPadding();
		var angleOffset = itemRect.height / 2 - this.getPopupPadding();
		var anglePosition = "left";

		var popupWidth = popupWindow.getPopupContainer().offsetWidth;
		var popupHeight = popupWindow.getPopupContainer().offsetHeight;
		var popupBottom = itemRect.top + popupHeight;

		var clientWidth = document.documentElement.clientWidth;
		var clientHeight = document.documentElement.clientHeight;

		// let's try to fit a submenu to the browser viewport
		var exceeded = popupBottom - clientHeight;
		if (exceeded > 0)
		{
			var roundOffset = Math.ceil(exceeded / itemRect.height) * itemRect.height;
			if (roundOffset > itemRect.top)
			{
				// it cannot be higher than the browser viewport.
				roundOffset -= Math.ceil((roundOffset - itemRect.top) / itemRect.height) * itemRect.height;
			}

			if (itemRect.bottom > (popupBottom - roundOffset))
			{
				// let's sync bottom boundaries.
				roundOffset -= itemRect.bottom - (popupBottom - roundOffset) + this.getPopupPadding();
			}

			offsetTop += roundOffset;
			angleOffset += roundOffset;
		}


		if ((itemRect.left + offsetLeft + popupWidth) > clientWidth)
		{
			var left = itemRect.left - popupWidth - this.subMenuOffsetX;
			if (left > 0)
			{
				offsetLeft = -popupWidth - this.subMenuOffsetX;
				anglePosition = "right";
			}
		}

		popupWindow.setBindElement(this.layout.item);
		popupWindow.setOffset({ offsetLeft: offsetLeft, offsetTop: -offsetTop });
		popupWindow.setAngle({ position: anglePosition, offset: angleOffset });
		popupWindow.adjustPosition();
	},

	/**
	 *
	 * @returns {Number}
	 */
	getPopupPadding: function() {
		if (!BX.type.isNumber(this.popupPadding))
		{
			if (this.subMenuWindow)
			{
				var menuContainer = this.subMenuWindow.layout.menuContainer;
				this.popupPadding = parseInt(BX.style(menuContainer, "paddingTop"), 10);
			}
			else
			{
				this.popupPadding = 0;
			}
		}

		return this.popupPadding;
	},

	/**
	 *
	 * @returns {BX.PopupMenuWindow|null}
	 */
	getSubMenu: function()
	{
		return this.subMenuWindow;
	},

	getId: function()
	{
		return this.id;
	},

	/**
	 *
	 * @param {BX.PopupMenuWindow} menuWindow
	 */
	setMenuWindow: function(menuWindow)
	{
		this.menuWindow = menuWindow;
	},

	/**
	 *
	 * @returns {BX.PopupMenuWindow}
	 */
	getMenuWindow: function()
	{
		return this.menuWindow;
	},

	getMenuShowDelay: function()
	{
		return this.menuShowDelay;
	},

	enable: function()
	{
		this.disabled = false;
		this.getContainer().classList.remove("menu-popup-item-disabled");
	},

	disable: function()
	{
		this.disabled = true;
		this.closeSubMenu();
		this.getContainer().classList.add("menu-popup-item-disabled");
	},

	/**
	 *
	 * @return {boolean}
	 */
	isDisabled: function()
	{
		return this.disabled;
	}

};

// TODO: copypaste/update/enhance CSS and images from calendar to MAIN CORE
// this.values = [{ID: 1, NAME : '111', DESCRIPTION: '111', URL: 'href://...'}]

window.BXInputPopup = function(params)
{
	this.id = params.id || 'bx-inp-popup-' + Math.round(Math.random() * 1000000);
	this.handler = params.handler || false;
	this.values = params.values || false;
	this.pInput = params.input;
	this.bValues = !!this.values;
	this.defaultValue = params.defaultValue || '';
	this.openTitle = params.openTitle || '';
	this.className = params.className || '';
	this.noMRclassName = params.noMRclassName || 'ec-no-rm';
	this.emptyClassName = params.noMRclassName || 'ec-label';

	var _this = this;
	this.curInd = false;

	if (this.bValues)
	{
		this.pInput.onfocus = this.pInput.onclick = function(e)
		{
			if (this.value == _this.defaultValue)
			{
				this.value = '';
				this.className = _this.className;
			}
			_this.ShowPopup();
			return BX.PreventDefault(e);
		};
		this.pInput.onblur = function()
		{
			if (_this.bShowed)
				setTimeout(function(){_this.ClosePopup(true);}, 200);
			_this.OnChange();
		};
	}
	else
	{
		this.pInput.className = this.noMRclassName;
		this.pInput.onblur = BX.proxy(this.OnChange, this);
	}
}

BXInputPopup.prototype = {
ShowPopup: function()
{
	if (this.bShowed)
		return;

	var _this = this;
	if (!this.oPopup)
	{
		var
			pRow,
			pWnd = BX.create("DIV", {props:{className: "bxecpl-loc-popup " + this.className}});

		for (var i = 0, l = this.values.length; i < l; i++)
		{
			pRow = pWnd.appendChild(BX.create("DIV", {
				props: {id: 'bxecmr_' + i},
				text: this.values[i].NAME,
				events: {
					mouseover: function(){BX.addClass(this, 'bxecplloc-over');},
					mouseout: function(){BX.removeClass(this, 'bxecplloc-over');},
					click: function()
					{
						var ind = this.id.substr('bxecmr_'.length);
						_this.pInput.value = _this.values[ind].NAME;
						_this.curInd = ind;
						_this.OnChange();
						_this.ClosePopup(true);
					}
				}
			}));

			if (this.values[i].DESCRIPTION)
				pRow.title = this.values[i].DESCRIPTION;
			if (this.values[i].CLASS_NAME)
				BX.addClass(pRow, this.values[i].CLASS_NAME);

			if (this.values[i].URL)
				pRow.appendChild(BX.create('A', {props: {href: this.values[i].URL, className: 'bxecplloc-view', target: '_blank', title: this.openTitle}}));
		}

		this.oPopup = new BX.PopupWindow(this.id, this.pInput, {
			autoHide : true,
			offsetTop : 1,
			offsetLeft : 0,
			lightShadow : true,
			closeByEsc : true,
			content : pWnd
		});

		BX.addCustomEvent(this.oPopup, 'onPopupClose', BX.proxy(this.ClosePopup, this));
	}

	this.oPopup.show();
	this.pInput.select();

	this.bShowed = true;
	BX.onCustomEvent(this, 'onInputPopupShow', [this]);
},

ClosePopup: function(bClosePopup)
{
	this.bShowed = false;

	if (this.pInput.value == '')
		this.OnChange();

	BX.onCustomEvent(this, 'onInputPopupClose', [this]);

	if (bClosePopup === true)
		this.oPopup.close();
},

OnChange: function()
{
	var val = this.pInput.value;
	if (this.bValues)
	{
		if (this.pInput.value == '' || this.pInput.value == this.defaultValue)
		{
			this.pInput.value = this.defaultValue;
			this.pInput.className = this.emptyClassName;
			val = '';
		}
		else
		{
			this.pInput.className = '';
		}
	}

	if (isNaN(parseInt(this.curInd)) || this.curInd !==false && val != this.values[this.curInd].NAME)
		this.curInd = false;
	else
		this.curInd = parseInt(this.curInd);

	BX.onCustomEvent(this, 'onInputPopupChanged', [this, this.curInd, val]);
	if (this.handler && typeof this.handler == 'function')
		this.handler({ind: this.curInd, value: val});
},

Set: function(ind, val, bOnChange)
{
	this.curInd = ind;
	if (this.curInd !== false)
		this.pInput.value = this.values[this.curInd].NAME;
	else
		this.pInput.value = val;

	if (bOnChange !== false)
		this.OnChange();
},

Get: function(ind)
{
	var
		id = false;
	if (typeof ind == 'undefined')
		ind = this.curInd;

	if (ind !== false && this.values[ind])
		id = this.values[ind].ID;
	return id;
},

GetIndex: function(id)
{
	for (var i = 0, l = this.values.length; i < l; i++)
		if (this.values[i].ID == id)
			return i;
	return false;
},

Deactivate: function(bDeactivate)
{
	if (this.pInput.value == '' || this.pInput.value == this.defaultValue)
	{
		if (bDeactivate)
		{
			this.pInput.value = '';
			this.pInput.className = this.noMRclassName;
		}
		else if (this.oEC.bUseMR)
		{
			this.pInput.value = this.defaultValue;
			this.pInput.className = this.emptyClassName;
		}
	}
	this.pInput.disabled = bDeactivate;
}
};

/************** utility *************/

var _escCallbackIndex = -1,
	_escCallback = null;

function _checkEscPressed(zIndex, callback)
{
	if(zIndex === false)
	{
		if(_escCallback && _escCallback.length > 0)
		{
			for(var i=0;i<_escCallback.length; i++)
			{
				_escCallback[i]();
			}

			_escCallback = null;
			_escCallbackIndex = -1;
		}
	}
	else
	{
		if(_escCallback === null)
		{
			_escCallback = [];
			_escCallbackIndex = -1;
			BX.defer(_checkEscPressed)(false);
		}

		if(zIndex > _escCallbackIndex)
		{
			_escCallbackIndex = zIndex;
			_escCallback = [callback];
		}
		else if(zIndex == _escCallbackIndex)
		{
			_escCallback.push(callback)
		}
	}
}


})(window);


/* End */
;
; /* Start:"a:4:{s:4:"full";s:53:"/bitrix/js/main/core/core_date.min.js?152648531538300";s:6:"source";s:33:"/bitrix/js/main/core/core_date.js";s:3:"min";s:0:"";s:3:"map";s:0:"";}"*/
(function(){if(BX.date)return;BX.date={};BX.date.format=function(e,t,a,i){var r=BX.type.isDate(t)?new Date(t.getTime()):BX.type.isNumber(t)?new Date(t*1e3):new Date;var s=BX.type.isDate(a)?new Date(a.getTime()):BX.type.isNumber(a)?new Date(a*1e3):new Date;var n=!!i;if(BX.type.isArray(e))return c(e,r,s,n);else if(!BX.type.isNotEmptyString(e))return"";var o=/\\?(sago|iago|isago|Hago|dago|mago|Yago|sdiff|idiff|Hdiff|ddiff|mdiff|Ydiff|sshort|ishort|Hshort|dshort|mhort|Yshort|yesterday|today|tommorow|tomorrow|[a-z])/gi;var l={d:function(){return BX.util.str_pad_left(d(r).toString(),2,"0")},D:function(){return BX.message("DOW_"+B(r))},j:function(){return d(r)},l:function(){return BX.message("DAY_OF_WEEK_"+B(r))},N:function(){return B(r)||7},S:function(){if(d(r)%10==1&&d(r)!=11)return"st";else if(d(r)%10==2&&d(r)!=12)return"nd";else if(d(r)%10==3&&d(r)!=13)return"rd";else return"th"},w:function(){return B(r)},z:function(){var e=new Date(p(r),0,1);var t=new Date(p(r),h(r),d(r));return Math.ceil((t-e)/(24*3600*1e3))},W:function(){var e=new Date(r.getTime());var t=(B(r)+6)%7;v(e,d(e)-t+3);var a=e.getTime();M(e,0,1);if(B(e)!=4)M(e,0,1+(4-B(e)+7)%7);var i=1+Math.ceil((a-e)/(7*24*3600*1e3));return BX.util.str_pad_left(i.toString(),2,"0")},F:function(){return BX.message("MONTH_"+(h(r)+1)+"_S")},f:function(){return BX.message("MONTH_"+(h(r)+1))},m:function(){return BX.util.str_pad_left((h(r)+1).toString(),2,"0")},M:function(){return BX.message("MON_"+(h(r)+1))},n:function(){return h(r)+1},t:function(){var e=n?new Date(Date.UTC(p(r),h(r)+1,0)):new Date(p(r),h(r)+1,0);return d(e)},L:function(){var e=p(r);return e%4==0&&e%100!=0||e%400==0?1:0},o:function(){var e=new Date(r.getTime());v(e,d(e)-(B(r)+6)%7+3);return p(e)},Y:function(){return p(r)},y:function(){return p(r).toString().slice(2)},a:function(){return f(r)>11?"pm":"am"},A:function(){return f(r)>11?"PM":"AM"},B:function(){var e=(r.getUTCHours()+1)%24+r.getUTCMinutes()/60+r.getUTCSeconds()/3600;return BX.util.str_pad_left(Math.floor(e*1e3/24).toString(),3,"0")},g:function(){return f(r)%12||12},G:function(){return f(r)},h:function(){return BX.util.str_pad_left((f(r)%12||12).toString(),2,"0")},H:function(){return BX.util.str_pad_left(f(r).toString(),2,"0")},i:function(){return BX.util.str_pad_left(m(r).toString(),2,"0")},s:function(){return BX.util.str_pad_left(D(r).toString(),2,"0")},u:function(){return BX.util.str_pad_left((T(r)*1e3).toString(),6,"0")},e:function(){if(n)return"UTC";return""},I:function(){if(n)return 0;var e=new Date(p(r),0,1);var t=Date.UTC(p(r),0,1);var a=new Date(p(r),6,0);var i=Date.UTC(p(r),6,0);return 0+(e-t!==a-i)},O:function(){if(n)return"+0000";var e=r.getTimezoneOffset();var t=Math.abs(e);return(e>0?"-":"+")+BX.util.str_pad_left((Math.floor(t/60)*100+t%60).toString(),4,"0")},P:function(){if(n)return"+00:00";var e=this.O();return e.substr(0,3)+":"+e.substr(3)},Z:function(){if(n)return 0;return-r.getTimezoneOffset()*60},c:function(){return"Y-m-d\\TH:i:sP".replace(o,O)},r:function(){return"D, d M Y H:i:s O".replace(o,O)},U:function(){return Math.floor(r.getTime()/1e3)},sago:function(){return X(g((s-r)/1e3),{0:"FD_SECOND_AGO_0",1:"FD_SECOND_AGO_1","10_20":"FD_SECOND_AGO_10_20",MOD_1:"FD_SECOND_AGO_MOD_1",MOD_2_4:"FD_SECOND_AGO_MOD_2_4",MOD_OTHER:"FD_SECOND_AGO_MOD_OTHER"})},sdiff:function(){return X(g((s-r)/1e3),{0:"FD_SECOND_DIFF_0",1:"FD_SECOND_DIFF_1","10_20":"FD_SECOND_DIFF_10_20",MOD_1:"FD_SECOND_DIFF_MOD_1",MOD_2_4:"FD_SECOND_DIFF_MOD_2_4",MOD_OTHER:"FD_SECOND_DIFF_MOD_OTHER"})},sshort:function(){return BX.message("FD_SECOND_SHORT").replace(/#VALUE#/g,g((s-r)/1e3))},iago:function(){return X(g((s-r)/60/1e3),{0:"FD_MINUTE_AGO_0",1:"FD_MINUTE_AGO_1","10_20":"FD_MINUTE_AGO_10_20",MOD_1:"FD_MINUTE_AGO_MOD_1",MOD_2_4:"FD_MINUTE_AGO_MOD_2_4",MOD_OTHER:"FD_MINUTE_AGO_MOD_OTHER"})},idiff:function(){return X(g((s-r)/60/1e3),{0:"FD_MINUTE_DIFF_0",1:"FD_MINUTE_DIFF_1","10_20":"FD_MINUTE_DIFF_10_20",MOD_1:"FD_MINUTE_DIFF_MOD_1",MOD_2_4:"FD_MINUTE_DIFF_MOD_2_4",MOD_OTHER:"FD_MINUTE_DIFF_MOD_OTHER"})},isago:function(){var e=g((s-r)/60/1e3);var t=X(e,{0:"FD_MINUTE_0",1:"FD_MINUTE_1","10_20":"FD_MINUTE_10_20",MOD_1:"FD_MINUTE_MOD_1",MOD_2_4:"FD_MINUTE_MOD_2_4",MOD_OTHER:"FD_MINUTE_MOD_OTHER"});t+=" ";var a=g((s-r)/1e3)-e*60;t+=X(a,{0:"FD_SECOND_AGO_0",1:"FD_SECOND_AGO_1","10_20":"FD_SECOND_AGO_10_20",MOD_1:"FD_SECOND_AGO_MOD_1",MOD_2_4:"FD_SECOND_AGO_MOD_2_4",MOD_OTHER:"FD_SECOND_AGO_MOD_OTHER"});return t},ishort:function(){return BX.message("FD_MINUTE_SHORT").replace(/#VALUE#/g,g((s-r)/60/1e3))},Hago:function(){return X(g((s-r)/60/60/1e3),{0:"FD_HOUR_AGO_0",1:"FD_HOUR_AGO_1","10_20":"FD_HOUR_AGO_10_20",MOD_1:"FD_HOUR_AGO_MOD_1",MOD_2_4:"FD_HOUR_AGO_MOD_2_4",MOD_OTHER:"FD_HOUR_AGO_MOD_OTHER"})},Hdiff:function(){return X(g((s-r)/60/60/1e3),{0:"FD_HOUR_DIFF_0",1:"FD_HOUR_DIFF_1","10_20":"FD_HOUR_DIFF_10_20",MOD_1:"FD_HOUR_DIFF_MOD_1",MOD_2_4:"FD_HOUR_DIFF_MOD_2_4",MOD_OTHER:"FD_HOUR_DIFF_MOD_OTHER"})},Hshort:function(){return BX.message("FD_HOUR_SHORT").replace(/#VALUE#/g,g((s-r)/60/60/1e3))},yesterday:function(){return BX.message("FD_YESTERDAY")},today:function(){return BX.message("FD_TODAY")},tommorow:function(){return BX.message("FD_TOMORROW")},tomorrow:function(){return BX.message("FD_TOMORROW")},dago:function(){return X(g((s-r)/60/60/24/1e3),{0:"FD_DAY_AGO_0",1:"FD_DAY_AGO_1","10_20":"FD_DAY_AGO_10_20",MOD_1:"FD_DAY_AGO_MOD_1",MOD_2_4:"FD_DAY_AGO_MOD_2_4",MOD_OTHER:"FD_DAY_AGO_MOD_OTHER"})},ddiff:function(){return X(g((s-r)/60/60/24/1e3),{0:"FD_DAY_DIFF_0",1:"FD_DAY_DIFF_1","10_20":"FD_DAY_DIFF_10_20",MOD_1:"FD_DAY_DIFF_MOD_1",MOD_2_4:"FD_DAY_DIFF_MOD_2_4",MOD_OTHER:"FD_DAY_DIFF_MOD_OTHER"})},dshort:function(){return BX.message("FD_DAY_SHORT").replace(/#VALUE#/g,g((s-r)/60/60/24/1e3))},mago:function(){return X(g((s-r)/60/60/24/31/1e3),{0:"FD_MONTH_AGO_0",1:"FD_MONTH_AGO_1","10_20":"FD_MONTH_AGO_10_20",MOD_1:"FD_MONTH_AGO_MOD_1",MOD_2_4:"FD_MONTH_AGO_MOD_2_4",MOD_OTHER:"FD_MONTH_AGO_MOD_OTHER"})},mdiff:function(){return X(g((s-r)/60/60/24/31/1e3),{0:"FD_MONTH_DIFF_0",1:"FD_MONTH_DIFF_1","10_20":"FD_MONTH_DIFF_10_20",MOD_1:"FD_MONTH_DIFF_MOD_1",MOD_2_4:"FD_MONTH_DIFF_MOD_2_4",MOD_OTHER:"FD_MONTH_DIFF_MOD_OTHER"})},mshort:function(){return BX.message("FD_MONTH_SHORT").replace(/#VALUE#/g,g((s-r)/60/60/24/31/1e3))},Yago:function(){return X(g((s-r)/60/60/24/365/1e3),{0:"FD_YEARS_AGO_0",1:"FD_YEARS_AGO_1","10_20":"FD_YEARS_AGO_10_20",MOD_1:"FD_YEARS_AGO_MOD_1",MOD_2_4:"FD_YEARS_AGO_MOD_2_4",MOD_OTHER:"FD_YEARS_AGO_MOD_OTHER"})},Ydiff:function(){return X(g((s-r)/60/60/24/365/1e3),{0:"FD_YEARS_DIFF_0",1:"FD_YEARS_DIFF_1","10_20":"FD_YEARS_DIFF_10_20",MOD_1:"FD_YEARS_DIFF_MOD_1",MOD_2_4:"FD_YEARS_DIFF_MOD_2_4",MOD_OTHER:"FD_YEARS_DIFF_MOD_OTHER"})},Yshort:function(){return X(g((s-r)/60/60/24/365/1e3),{0:"FD_YEARS_SHORT_0",1:"FD_YEARS_SHORT_1","10_20":"FD_YEARS_SHORT_10_20",MOD_1:"FD_YEARS_SHORT_MOD_1",MOD_2_4:"FD_YEARS_SHORT_MOD_2_4",MOD_OTHER:"FD_YEARS_SHORT_MOD_OTHER"})},x:function(){var e=BX.isAmPmMode(true);var t=e===BX.AM_PM_LOWER?"g:i a":e===BX.AM_PM_UPPER?"g:i A":"H:i";return BX.date.format([["tomorrow","tomorrow, "+t],["-",BX.date.convertBitrixFormat(BX.message("FORMAT_DATETIME")).replace(/:s/g,"")],["s","sago"],["i","iago"],["today","today, "+e],["yesterday","yesterday, "+e],["",BX.date.convertBitrixFormat(BX.message("FORMAT_DATETIME")).replace(/:s/g,"")]],r,s,n)},X:function(){var e=BX.isAmPmMode(true);var t=e===BX.AM_PM_LOWER?"g:i a":e===BX.AM_PM_UPPER?"g:i A":"H:i";var a=BX.date.format([["tomorrow","tomorrow"],["-",BX.date.convertBitrixFormat(BX.message("FORMAT_DATE"))],["today","today"],["yesterday","yesterday"],["",BX.date.convertBitrixFormat(BX.message("FORMAT_DATE"))]],r,s,n);var i=BX.date.format([["tomorrow",t],["today",t],["yesterday",t],["",""]],r,s,n);if(i.length>0)return BX.message("FD_DAY_AT_TIME").replace(/#DAY#/g,a).replace(/#TIME#/g,i);else return a},Q:function(){var e=g((s-r)/60/60/24/1e3);if(e==0)return BX.message("FD_DAY_DIFF_1").replace(/#VALUE#/g,1);else return BX.date.format([["d","ddiff"],["m","mdiff"],["","Ydiff"]],r,s)}};var _=false;if(e[0]&&e[0]=="^"){_=true;e=e.substr(1)}var u=e.replace(o,O);if(_){u=u.replace(/\s*00:00:00\s*/g,"").replace(/(\d\d:\d\d)(:00)/g,"$1").replace(/(\s*00:00\s*)(?!:)/g,"")}return u;function c(e,t,a,i){var r=g((a-t)/1e3);for(var s=0;s<e.length;s++){var n=e[s][0];var o=e[s][1];var l=null;if(n=="s"){if(r<60)return BX.date.format(o,t,a,i)}else if((l=/^s(\d+)\>?(\d+)?/.exec(n))!=null){if(l[1]&&l[2]){if(r<l[1]&&r>l[2]){return BX.date.format(o,t,a,i)}}else if(r<l[1]){return BX.date.format(o,t,a,i)}}else if(n=="i"){if(r<60*60)return BX.date.format(o,t,a,i)}else if((l=/^i(\d+)\>?(\d+)?/.exec(n))!=null){if(l[1]&&l[2]){if(r<l[1]*60&&r>l[2]*60){return BX.date.format(o,t,a,i)}}else if(r<l[1]*60){return BX.date.format(o,t,a,i)}}else if(n=="H"){if(r<24*60*60)return BX.date.format(o,t,a,i)}else if((l=/^H(\d+)\>?(\d+)?/.exec(n))!=null){if(l[1]&&l[2]){if(r<l[1]*60*60&&r>l[2]*60*60){return BX.date.format(o,t,a,i)}}else if(r<l[1]*60*60){return BX.date.format(o,t,a,i)}}else if(n=="d"){if(r<31*24*60*60)return BX.date.format(o,t,a,i)}else if((l=/^d(\d+)\>?(\d+)?/.exec(n))!=null){if(l[1]&&l[2]){if(r<l[1]*24*60*60&&r>l[2]*24*60*60){return BX.date.format(o,t,a,i)}}else if(r<l[1]*24*60*60){return BX.date.format(o,t,a,i)}}else if(n=="m"){if(r<365*24*60*60)return BX.date.format(o,t,a,i)}else if((l=/^m(\d+)\>?(\d+)?/.exec(n))!=null){if(l[1]&&l[2]){if(r<l[1]*31*24*60*60&&r>l[2]*31*24*60*60){return BX.date.format(o,t,a,i)}}else if(r<l[1]*31*24*60*60){return BX.date.format(o,t,a,i)}}else if(n=="now"){if(t.getTime()==a.getTime()){return BX.date.format(o,t,a,i)}}else if(n=="today"){var _=p(a),u=h(a),c=d(a);var f=i?new Date(Date.UTC(_,u,c,0,0,0,0)):new Date(_,u,c,0,0,0,0);var m=i?new Date(Date.UTC(_,u,c+1,0,0,0,0)):new Date(_,u,c+1,0,0,0,0);if(t>=f&&t<m)return BX.date.format(o,t,a,i)}else if(n=="todayFuture"){var _=p(a),u=h(a),c=d(a);var f=a.getTime();var m=i?new Date(Date.UTC(_,u,c+1,0,0,0,0)):new Date(_,u,c+1,0,0,0,0);if(t>=f&&t<m)return BX.date.format(o,t,a,i)}else if(n=="yesterday"){_=p(a);u=h(a);c=d(a);var D=i?new Date(Date.UTC(_,u,c-1,0,0,0,0)):new Date(_,u,c-1,0,0,0,0);var T=i?new Date(Date.UTC(_,u,c,0,0,0,0)):new Date(_,u,c,0,0,0,0);if(t>=D&&t<T)return BX.date.format(o,t,a,i)}else if(n=="tommorow"||n=="tomorrow"){_=p(a);u=h(a);c=d(a);var B=i?new Date(Date.UTC(_,u,c+1,0,0,0,0)):new Date(_,u,c+1,0,0,0,0);var v=i?new Date(Date.UTC(_,u,c+2,0,0,0,0)):new Date(_,u,c+2,0,0,0,0);if(t>=B&&t<v)return BX.date.format(o,t,a,i)}else if(n=="-"){if(r<0)return BX.date.format(o,t,a,i)}}return e.length>0?BX.date.format(e[e.length-1][1],t,a,i):""}function p(e){return n?e.getUTCFullYear():e.getFullYear()}function d(e){return n?e.getUTCDate():e.getDate()}function h(e){return n?e.getUTCMonth():e.getMonth()}function f(e){return n?e.getUTCHours():e.getHours()}function m(e){return n?e.getUTCMinutes():e.getMinutes()}function D(e){return n?e.getUTCSeconds():e.getSeconds()}function T(e){return n?e.getUTCMilliseconds():e.getMilliseconds()}function B(e){return n?e.getUTCDay():e.getDay()}function v(e,t){return n?e.setUTCDate(t):e.setDate(t)}function M(e,t,a){return n?e.setUTCMonth(t,a):e.setMonth(t,a)}function X(e,t){var a=e<100?Math.abs(e):Math.abs(e%100);var i=a%10;var r="";if(a==0)r=BX.message(t["0"]);else if(a==1)r=BX.message(t["1"]);else if(a>=10&&a<=20)r=BX.message(t["10_20"]);else if(i==1)r=BX.message(t["MOD_1"]);else if(2<=i&&i<=4)r=BX.message(t["MOD_2_4"]);else r=BX.message(t["MOD_OTHER"]);return r.replace(/#VALUE#/g,e)}function O(e,t){if(l[e])return l[e]();else return t}function g(e){return e>=0?Math.floor(e):Math.ceil(e)}};BX.date.convertBitrixFormat=function(e){if(!BX.type.isNotEmptyString(e))return"";return e.replace("YYYY","Y").replace("MMMM","F").replace("MM","m").replace("M","M").replace("DD","d").replace("G","g").replace(/GG/i,"G").replace("H","h").replace(/HH/i,"H").replace("MI","i").replace("SS","s").replace("TT","A").replace("T","a")};BX.date.convertToUTC=function(e){if(!BX.type.isDate(e))return null;return new Date(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))};BX.date.getNewDate=function(e){return new Date(BX.date.getBrowserTimestamp(e))};BX.date.getBrowserTimestamp=function(e){e=parseInt(e,10);var t=new Date(e*1e3).getTimezoneOffset()*60;return(parseInt(e,10)+parseInt(BX.message("SERVER_TZ_OFFSET"))+t)*1e3};BX.date.getServerTimestamp=function(e){e=parseInt(e,10);var t=new Date(e).getTimezoneOffset()*60;return Math.round(e/1e3-(parseInt(BX.message("SERVER_TZ_OFFSET"),10)+parseInt(t,10)))};BX.date.formatLastActivityDate=function(e,t,a){var i=BX.isAmPmMode(true);var r=i===BX.AM_PM_LOWER?"g:i a":i===BX.AM_PM_UPPER?"g:i A":"H:i";var s=[["tomorrow","#01#"+r],["now","#02#"],["todayFuture","#03#"+r],["yesterday","#04#"+r],["-",BX.date.convertBitrixFormat(BX.message("FORMAT_DATETIME")).replace(/:s/g,"")],["s60","sago"],["i60","iago"],["H5","Hago"],["H24","#03#"+r],["d31","dago"],["m12>1","mago"],["m12>0","dago"],["","#05#"]];var n=BX.date.format(s,e,t,a);if((match=/^#(\d+)#(.*)/.exec(n))!=null){switch(match[1]){case"01":n=BX.message("FD_LAST_SEEN_TOMORROW").replace("#TIME#",match[2]);break;case"02":n=BX.message("FD_LAST_SEEN_NOW");break;case"03":n=BX.message("FD_LAST_SEEN_TODAY").replace("#TIME#",match[2]);break;case"04":n=BX.message("FD_LAST_SEEN_YESTERDAY").replace("#TIME#",match[2]);break;case"05":n=BX.message("FD_LAST_SEEN_MORE_YEAR");break;default:n=match[2];break}}return n};var e=null;BX.calendar=function(e){return BX.calendar.get().Show(e)};BX.calendar.get=function(){if(!e)e=new BX.JCCalendar;return e};BX.calendar.InsertDaysBack=function(e,t){if(t!=""){var a=new Date;if(t>0){a.setTime(a.valueOf()-t*864e5)}e.value=BX.date.format(BX.date.convertBitrixFormat(BX.message("FORMAT_DATE")),a,null)}else{e.value=""}};BX.calendar.ValueToString=function(e,t,a){return BX.date.format(BX.date.convertBitrixFormat(BX.message(t?"FORMAT_DATETIME":"FORMAT_DATE")),e,null,!!a)};BX.calendar.ValueToStringFormat=function(e,t,a){return BX.date.format(BX.date.convertBitrixFormat(t),e,null,!!a)};BX.CalendarPeriod={Init:function(e,t,a){if((e.value!=""||t.value!="")&&a.value=="")a.value="interval";a.onchange()},ChangeDirectOpts:function(e,t){var a=BX.findChild(t,{className:"adm-select adm-calendar-direction"},true);if(e=="week"){a.options[0].text=BX.message("JSADM_CALEND_PREV_WEEK");a.options[1].text=BX.message("JSADM_CALEND_CURR_WEEK");a.options[2].text=BX.message("JSADM_CALEND_NEXT_WEEK")}else{a.options[0].text=BX.message("JSADM_CALEND_PREV");a.options[1].text=BX.message("JSADM_CALEND_CURR");a.options[2].text=BX.message("JSADM_CALEND_NEXT")}},SaveAndClearInput:function(e){if(!window.SavedPeriodValues)window.SavedPeriodValues={};window.SavedPeriodValues[e.id]=e.value;e.value=""},RestoreInput:function(e){if(!window.SavedPeriodValues||!window.SavedPeriodValues[e.id])return;e.value=window.SavedPeriodValues[e.id];delete window.SavedPeriodValues[e.id]},OnChangeP:function(e){var t=e.parentNode.parentNode;var a,i,r,s;a=i=r=s=false;var n=BX.findChild(t,{className:"adm-input-wrap adm-calendar-inp adm-calendar-first"});var o=BX.findChild(t,{className:"adm-input-wrap adm-calendar-second"});var l=BX.findChild(t,{className:"adm-select-wrap adm-calendar-direction"});var _=BX.findChild(t,{className:"adm-calendar-separate"});var u=BX.findChild(t,{className:"adm-input adm-calendar-from"},true);var c=BX.findChild(t,{className:"adm-input adm-calendar-to"},true);switch(e.value){case"day":case"week":case"month":case"quarter":case"year":r=true;BX.CalendarPeriod.OnChangeD(l.children[0]);break;case"before":i=true;break;case"after":a=true;break;case"exact":a=true;break;case"interval":a=i=s=true;BX.CalendarPeriod.RestoreInput(u);BX.CalendarPeriod.RestoreInput(c);break;case"":BX.CalendarPeriod.SaveAndClearInput(u);BX.CalendarPeriod.SaveAndClearInput(c);break;default:break}BX.CalendarPeriod.ChangeDirectOpts(e.value,t);n.style.display=a?"inline-block":"none";o.style.display=i?"inline-block":"none";l.style.display=r?"inline-block":"none";_.style.display=s?"inline-block":"none"},OnChangeD:function(e){var t=e.parentNode.parentNode;var a=BX.findChild(t,{className:"adm-input adm-calendar-from"},true);var i=BX.findChild(t,{className:"adm-input adm-calendar-to"},true);var r=BX.findChild(t,{className:"adm-select adm-calendar-period"},true);var s=0;switch(e.value){case"previous":s=-1;break;case"next":s=1;break;case"current":default:break}var n=false;var o=false;var l=new Date;var _=l.getFullYear();var u=l.getMonth();var c=l.getDate();var p=l.getDay();if(p==0)p=7;switch(r.value){case"day":n=new Date(_,u,c+s,0,0,0);o=new Date(_,u,c+s,23,59,59);break;case"week":n=new Date(_,u,c-p+1+s*7,0,0,0);o=new Date(_,u,c+(7-p)+s*7,23,59,59);break;case"month":n=new Date(_,u+s,1,0,0,0);o=new Date(_,u+1+s,0,23,59,59);break;case"quarter":var d=Math.floor(u/3)+s;n=new Date(_,3*d,1,0,0,0);o=new Date(_,3*(d+1),0,23,59,59);break;case"year":n=new Date(_+s,0,1,0,0,0);o=new Date(_+1+s,0,0,23,59,59);break;default:break}var h=window[a.name+"_bTime"]?BX.message("FORMAT_DATETIME"):BX.message("FORMAT_DATE");if(n){a.value=BX.formatDate(n,h);BX.addClass(a,"adm-calendar-inp-setted")}if(o){i.value=BX.formatDate(o,h);BX.addClass(i,"adm-calendar-inp-setted")}}};BX.JCCalendar=function(){this.params={};this.bAmPm=BX.isAmPmMode();this.popup=null;this.popup_month=null;this.popup_year=null;this.month_popup_classname="";this.year_popup_classname="";this.value=null;this.control_id=Math.random();this._layers={};this._current_layer=null;this.DIV=null;this.PARTS={};this.weekStart=0;this.numRows=6;this._create=function(e){this.popup=new BX.PopupWindow("calendar_popup_"+this.control_id,e.node,{closeByEsc:true,autoHide:false,content:this._get_content(),zIndex:3e3,bindOptions:{forceBindPosition:true}});BX.bind(this.popup.popupContainer,"click",this.popup.cancelBubble)};this._auto_hide_disable=function(){BX.unbind(document,"click",BX.proxy(this._auto_hide,this))};this._auto_hide_enable=function(){BX.bind(document,"click",BX.proxy(this._auto_hide,this))};this._auto_hide=function(e){this._auto_hide_disable();this.popup.close()};this._get_content=function(){var e=BX.delegate(function(e){e=e||window.event;this.SetDate(new Date(parseInt(BX.proxy_context.getAttribute("data-date"))),e.type=="dblclick")},this);this.DIV=BX.create("DIV",{props:{className:"bx-calendar"},children:[BX.create("DIV",{props:{className:"bx-calendar-header"},children:[BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-left-arrow"},events:{click:BX.proxy(this._prev,this)}}),BX.create("SPAN",{props:{className:"bx-calendar-header-content"},children:[this.PARTS.MONTH=BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-top-month"},events:{click:BX.proxy(this._menu_month,this)}}),this.PARTS.YEAR=BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-top-year"},events:{click:BX.proxy(this._menu_year,this)}})]}),BX.create("A",{attrs:{href:"javascript:void(0)"},props:{className:"bx-calendar-right-arrow"},events:{click:BX.proxy(this._next,this)}})]}),this.PARTS.WEEK=BX.create("DIV",{props:{className:"bx-calendar-name-day-wrap"}}),this.PARTS.LAYERS=BX.create("DIV",{props:{className:"bx-calendar-cell-block"},events:{click:BX.delegateEvent({className:"bx-calendar-cell"},e),dblclick:BX.delegateEvent({className:"bx-calendar-cell"},e)}}),this.PARTS.TIME=BX.create("DIV",{props:{className:"bx-calendar-set-time-wrap"},events:{click:BX.delegateEvent({attr:"data-action"},BX.delegate(this._time_actions,this))},html:'<a href="javascript:void(0)" data-action="time_show" class="bx-calendar-set-time"><i></i>'+BX.message("CAL_TIME_SET")+'</a><div class="bx-calendar-form-block"><span class="bx-calendar-form-text">'+BX.message("CAL_TIME")+'</span><span class="bx-calendar-form"><input type="text" class="bx-calendar-form-input" maxwidth="2" onkeyup="BX.calendar.get()._check_time()" /><span class="bx-calendar-form-separator"></span><input type="text" class="bx-calendar-form-input" maxwidth="2" onkeyup="BX.calendar.get()._check_time()" />'+(this.bAmPm?'<span class="bx-calendar-AM-PM-block"><span class="bx-calendar-AM-PM-text" data-action="time_ampm"></span><span class="bx-calendar-form-arrow-r"><a href="javascript:void(0)" class="bx-calendar-form-arrow-top" data-action="time_ampm_up"><i></i></a><a href="javascript:void(0)" class="bx-calendar-form-arrow-bottom" data-action="time_ampm_down"><i></i></a></span></span>':"")+'</span><a href="javascript:void(0)" data-action="time_hide" class="bx-calendar-form-close"><i></i></a></div>'}),BX.create("DIV",{props:{className:"bx-calendar-button-block"},events:{click:BX.delegateEvent({attr:"data-action"},BX.delegate(this._button_actions,this))},html:'<a href="javascript:void(0)" class="bx-calendar-button bx-calendar-button-select" data-action="submit"><span class="bx-calendar-button-left"></span><span class="bx-calendar-button-text">'+BX.message("CAL_BUTTON")+'</span><span class="bx-calendar-button-right"></span></a><a href="javascript:void(0)" class="bx-calendar-button bx-calendar-button-cancel" data-action="cancel"><span class="bx-calendar-button-left"></span><span class="bx-calendar-button-text">'+BX.message("JS_CORE_WINDOW_CLOSE")+'</span><span class="bx-calendar-button-right"></span></a>'})]});this.PARTS.TIME_INPUT_H=BX.findChild(this.PARTS.TIME,{tag:"INPUT"},true);this.PARTS.TIME_INPUT_M=this.PARTS.TIME_INPUT_H.nextSibling.nextSibling;if(this.bAmPm)this.PARTS.TIME_AMPM=this.PARTS.TIME_INPUT_M.nextSibling.firstChild;var t=new BX.JCSpinner({input:this.PARTS.TIME_INPUT_H,callback_change:BX.proxy(this._check_time,this),bSaveValue:false}).Show();t.className="bx-calendar-form-arrow-l";this.PARTS.TIME_INPUT_H.parentNode.insertBefore(t,this.PARTS.TIME_INPUT_H);t=new BX.JCSpinner({input:this.PARTS.TIME_INPUT_M,callback_change:BX.proxy(this._check_time,this),bSaveValue:true}).Show();t.className="bx-calendar-form-arrow-r";if(!this.PARTS.TIME_INPUT_M.nextSibling)this.PARTS.TIME_INPUT_M.parentNode.appendChild(t);else this.PARTS.TIME_INPUT_M.parentNode.insertBefore(t,this.PARTS.TIME_INPUT_M.nextSibling);for(var a=0;a<7;a++){this.PARTS.WEEK.appendChild(BX.create("SPAN",{props:{className:"bx-calendar-name-day"},text:BX.message("DOW_"+(a+this.weekStart)%7)}))}return this.DIV};this._time_actions=function(){switch(BX.proxy_context.getAttribute("data-action")){case"time_show":BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened");this.popup.adjustPosition();break;case"time_hide":BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");this.popup.adjustPosition();break;case"time_ampm":this.PARTS.TIME_AMPM.innerHTML=this.PARTS.TIME_AMPM.innerHTML=="AM"?"PM":"AM";break;case"time_ampm_up":this._check_time({bSaveValue:false},null,12);return;break;case"time_ampm_down":this._check_time({bSaveValue:false},null,-12);return;break}this._check_time()};this._button_actions=function(){switch(BX.proxy_context.getAttribute("data-action")){case"submit":this.SaveValue();break;case"cancel":this.Close();break}};this._check_time=function(e,t,a){var i=parseInt(this.PARTS.TIME_INPUT_H.value.substring(0,5),10)||0,r=parseInt(this.PARTS.TIME_INPUT_M.value.substring(0,5),10)||0,s=false;if(!!e&&!e.bSaveValue){this.value.setUTCHours(this.value.getUTCHours()+a)}else if(!isNaN(i)){if(this.bAmPm){if(i!=12&&this.PARTS.TIME_AMPM.innerHTML=="PM"){i+=12}}s=true;this.value.setUTCHours(i%24)}if(!isNaN(r)){s=true;this.value.setUTCMinutes(r%60)}if(s){this.SetValue(this.value)}};this._set_layer=function(){var e=parseInt(this.value.getUTCFullYear()+""+BX.util.str_pad_left(this.value.getUTCMonth()+"",2,"0"));if(!this._layers[e]){this._layers[e]=this._create_layer();this._layers[e].BXLAYERID=e}if(this._current_layer){var t=new Date(this.value.valueOf());t.setUTCHours(0);t.setUTCMinutes(0);var a=BX.findChild(this._layers[e],{tag:"A",className:"bx-calendar-active"},true),i=BX.findChild(this._layers[e],{tag:"A",attr:{"data-date":t.valueOf()+""}},true);if(a){BX.removeClass(a,"bx-calendar-active")}if(i){BX.addClass(i,"bx-calendar-active")}this._replace_layer(this._current_layer,this._layers[e])}else{this.PARTS.LAYERS.appendChild(this._layers[e])}this._current_layer=this._layers[e]};this._replace_layer=function(e,t){if(e!=t){if(!BX.browser.IsIE()||BX.browser.IsDoctype()){var a=e.BXLAYERID>t.BXLAYERID?1:-1;var i=0;var r=-a*e.offsetHeight;e.style.position="relative";e.style.top="0px";e.style.zIndex=5;t.style.position="absolute";t.style.top=r+"px";t.style.zIndex=6;this.PARTS.LAYERS.appendChild(t);var s=15;var n;(n=function(){r+=a*s;i+=a*s;if(a*r<0){e.style.top=i+"px";t.style.top=r+"px";setTimeout(n,10)}else{e.parentNode.removeChild(e);t.style.top="0px";t.style.position="static";t.style.zIndex=0}})()}else{this.PARTS.LAYERS.replaceChild(t,e)}}};this._create_layer=function(){var e=BX.create("DIV",{props:{className:"bx-calendar-layer"}});var t=new Date(this.value);t.setUTCHours(0);t.setUTCMinutes(0);t.setUTCDate(1);if(t.getUTCDay()!=this.weekStart){var a=t.getUTCDay()-this.weekStart;a+=a<0?7:0;t.setUTCDate(t.getUTCDate()-a)}var i=this.value.getUTCMonth(),r=this.value.getUTCDate(),s="";for(var n=0;n<this.numRows;n++){s+='<div class="bx-calendar-range'+(n==this.numRows-1?" bx-calendar-range-noline":"")+'">';for(var o=0;o<7;o++){a=t.getUTCDate();var l=t.getUTCDay();var _="bx-calendar-cell";if(i!=t.getUTCMonth())_+=" bx-calendar-date-hidden";else if(r==a)_+=" bx-calendar-active";if(l==0||l==6)_+=" bx-calendar-weekend";s+='<a href="javascript:void(0)" class="'+_+'" data-date="'+t.valueOf()+'">'+a+"</a>";t.setUTCDate(t.getUTCDate()+1)}s+="</div>"}e.innerHTML=s;return e};this._prev=function(){this.SetMonth(this.value.getUTCMonth()-1)};this._next=function(){this.SetMonth(this.value.getUTCMonth()+1)};this._menu_month_content=function(){var e="",t=this.value.getMonth(),a;for(a=0;a<12;a++){e+='<span class="bx-calendar-month'+(a==t?" bx-calendar-month-active":"")+'" data-bx-month="'+a+'">'+BX.message("MONTH_"+(a+1))+"</span>"}return'<div class="bx-calendar-month-popup"><div class="bx-calendar-month-title" data-bx-month="'+this.value.getUTCMonth()+'">'+BX.message("MONTH_"+(this.value.getUTCMonth()+1))+'</div><div class="bx-calendar-month-content">'+e+"</div></div>"};this._menu_month=function(){if(!this.popup_month){this.popup_month=new BX.PopupWindow("calendar_popup_month_"+this.control_id,this.PARTS.MONTH,{content:this._menu_month_content(),zIndex:3001,closeByEsc:true,autoHide:true,offsetTop:-29,offsetLeft:-1,className:this.month_popup_classname,events:{onPopupShow:BX.delegate(function(){if(this.popup_year){this.popup_year.close()}},this)}});BX.bind(this.popup_month.popupContainer,"click",BX.proxy(this.month_popup_click,this));this.popup_month.BXMONTH=this.value.getUTCMonth()}else if(this.popup_month.BXMONTH!=this.value.getUTCMonth()){this.popup_month.setContent(this._menu_month_content());this.popup_month.BXMONTH=this.value.getUTCMonth()}this.popup_month.show()};this.month_popup_click=function(e){var t=e.target||e.srcElement;if(t&&t.getAttribute&&t.getAttribute("data-bx-month")){this.SetMonth(parseInt(t.getAttribute("data-bx-month")));this.popup_month.close()}};this._menu_year_content=function(){var e='<div class="bx-calendar-year-popup"><div class="bx-calendar-year-title" data-bx-year="'+this.value.getUTCFullYear()+'">'+this.value.getUTCFullYear()+'</div><div class="bx-calendar-year-content" id="bx-calendar-year-content">';for(var t=-3;t<=3;t++){e+='<span class="bx-calendar-year-number'+(t==0?" bx-calendar-year-active":"")+'" data-bx-year="'+(this.value.getUTCFullYear()-t)+'">'+(this.value.getUTCFullYear()-t)+"</span>"}e+='</div><input data-bx-year-input="Y" type="text" class="bx-calendar-year-input" maxlength="4" /></div>';return e};this._menu_year=function(){if(!this.popup_year){this.popup_year=new BX.PopupWindow("calendar_popup_year_"+this.control_id,this.PARTS.YEAR,{content:this._menu_year_content(),zIndex:3001,closeByEsc:true,autoHide:true,offsetTop:-29,offsetLeft:-1,className:this.year_popup_classname,events:{onPopupShow:BX.delegate(function(){if(this.popup_month){this.popup_month.close()}},this)}});BX.bind(this.popup_year.popupContainer,"click",BX.proxy(this.year_popup_click,this));BX.bind(this.popup_year.popupContainer,"keyup",BX.proxy(this.year_popup_keyup,this));this.popup_year.BXYEAR=this.value.getUTCFullYear()}else if(this.popup_year.BXYEAR!=this.value.getUTCFullYear()){this.popup_year.setContent(this._menu_year_content());this.popup_year.BXYEAR=this.value.getUTCFullYear()}this.popup_year.show()};this.year_popup_click=function(e){var t=e.target||e.srcElement;if(t&&t.getAttribute&&t.getAttribute("data-bx-year")){this.SetYear(parseInt(t.getAttribute("data-bx-year")));this.popup_year.close()}};this.year_popup_keyup=function(e){var t=e.target||e.srcElement;if(t&&t.getAttribute&&t.getAttribute("data-bx-year-input")=="Y"){var a=parseInt(t.value);if(a>=1900&&a<=2100){this.SetYear(a);this.popup_year.close()}}};this._check_date=function(e){var t=e;if(BX.type.isString(e)){t=BX.parseDate(e,true)}if(!BX.type.isDate(t)||isNaN(t.valueOf())){t=BX.date.convertToUTC(new Date);if(this.params.bHideTime){t.setUTCHours(0);t.setUTCMinutes(0)}}t.setUTCMilliseconds(0);t.setUTCSeconds(0);t.BXCHECKED=true;return t}};BX.JCCalendar.prototype.Show=function(e){if(!BX.isReady){BX.ready(BX.delegate(function(){this.Show(e)},this));return}e.node=e.node||document.body;if(BX.type.isNotEmptyString(e.node)){var t=BX(e.node);if(!t){t=document.getElementsByName(e.node);if(t&&t.length>0){t=t[0]}}e.node=t}if(!e.node)return;if(!!e.field){if(BX.type.isString(e.field)){t=BX(e.field);if(!!t){e.field=t}else{if(e.form){if(BX.type.isString(e.form)){e.form=document.forms[e.form]}}if(BX.type.isDomNode(e.form)&&!!e.form[e.field]){e.field=e.form[e.field]}else{t=document.getElementsByName(e.field);if(t&&t.length>0){t=t[0];e.field=t}}}if(BX.type.isString(e.field)){e.field=BX(e.field)}}}var a=!this.popup||!this.popup.isShown()||this.params.node!=e.node;this.params=e;this.params.bTime=typeof this.params.bTime=="undefined"?true:!!this.params.bTime;this.params.bHideTime=typeof this.params.bHideTime=="undefined"?true:!!this.params.bHideTime;this.params.bUseSecond=typeof this.params.bUseSecond=="undefined"?true:!!this.params.bUseSecond;this.weekStart=parseInt(this.params.weekStart||this.params.weekStart||BX.message("WEEK_START"));if(isNaN(this.weekStart))this.weekStart=1;if(!this.popup){this._create(this.params)}else{this.popup.setBindElement(this.params.node)}var i=!!this.params.bHideTime;if(this.params.value){this.SetValue(this.params.value);i=this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0}else if(this.params.field){this.SetValue(this.params.field.value);i=this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0}else if(!!this.params.currentTime){this.SetValue(this.params.currentTime)}else{this.SetValue()}if(!!this.params.bTime)BX.removeClass(this.DIV,"bx-calendar-time-disabled");else BX.addClass(this.DIV,"bx-calendar-time-disabled");if(!!i)BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");else BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened");if(a){this._auto_hide_disable();this.popup.show();setTimeout(BX.proxy(this._auto_hide_enable,this),0)}this.params.bSetFocus=typeof this.params.bSetFocus=="undefined"?true:!!this.params.bSetFocus;if(this.params.bSetFocus){e.node.blur()}else{BX.bind(e.node,"keyup",BX.defer(function(){this.SetValue(e.node.value);if(!!this.params.bTime){if(this.value.getUTCHours()<=0&&this.value.getUTCMinutes()<=0)BX.removeClass(this.PARTS.TIME,"bx-calendar-set-time-opened");else BX.addClass(this.PARTS.TIME,"bx-calendar-set-time-opened")}},this))}return this};BX.JCCalendar.prototype.SetDay=function(e){this.value.setUTCDate(e);return this.SetValue(this.value)};BX.JCCalendar.prototype.SetMonth=function(e){if(this.popup_month)this.popup_month.close();this.value.setUTCMonth(e);if(e<0)e+=12;else if(e>=12)e-=12;while(this.value.getUTCMonth()>e){this.value.setUTCDate(this.value.getUTCDate()-1)}return this.SetValue(this.value)};BX.JCCalendar.prototype.SetYear=function(e){if(this.popup_year)this.popup_year.close();this.value.setUTCFullYear(e);return this.SetValue(this.value)};BX.JCCalendar.prototype.SetDate=function(e,t){e=this._check_date(e);e.setUTCHours(this.value.getUTCHours());e.setUTCMinutes(this.value.getUTCMinutes());e.setUTCSeconds(this.value.getUTCSeconds());if(this.params.bTime&&!t){return this.SetValue(e)}else{this.SetValue(e);this.SaveValue()}};BX.JCCalendar.prototype.SetValue=function(e){this.value=e&&e.BXCHECKED?e:this._check_date(e);this.PARTS.MONTH.innerHTML=BX.message("MONTH_"+(this.value.getUTCMonth()+1));this.PARTS.YEAR.innerHTML=this.value.getUTCFullYear();if(!!this.params.bTime){var t=this.value.getUTCHours();if(this.bAmPm){if(t>=12){this.PARTS.TIME_AMPM.innerHTML="PM";if(t!=12)t-=12}else{this.PARTS.TIME_AMPM.innerHTML="AM";if(t==0)t=12}}this.PARTS.TIME_INPUT_H.value=BX.util.str_pad_left(t.toString(),2,"0");this.PARTS.TIME_INPUT_M.value=BX.util.str_pad_left(this.value.getUTCMinutes().toString(),2,"0")}this._set_layer();return this};BX.JCCalendar.prototype.SaveValue=function(){if(this.popup_month)this.popup_month.close();if(this.popup_year)this.popup_year.close();var e=true;if(!!this.params.callback){var t=this.params.callback.apply(this,[new Date(this.value.valueOf()+this.value.getTimezoneOffset()*6e4)]);if(t===false)e=false}if(e){var a=!!this.params.bTime&&BX.hasClass(this.PARTS.TIME,"bx-calendar-set-time-opened");if(this.params.field){var i=BX.message(a?"FORMAT_DATETIME":"FORMAT_DATE");if(a&&!this.params.bUseSecond){i=i.replace(":SS","")}this.params.field.value=BX.calendar.ValueToStringFormat(this.value,i,true);BX.fireEvent(this.params.field,"change")}this.popup.close();if(!!this.params.callback_after){this.params.callback_after.apply(this,[new Date(this.value.valueOf()+this.value.getTimezoneOffset()*6e4),a])}}return this};BX.JCCalendar.prototype.Close=function(){if(!!this.popup)this.popup.close();return this};BX.JCSpinner=function(e){e=e||{};this.params={input:e.input||null,delta:e.delta||1,timeout_start:e.timeout_start||1e3,timeout_cont:e.timeout_cont||150,callback_start:e.callback_start||null,callback_change:e.callback_change||null,callback_finish:e.callback_finish||null,bSaveValue:typeof e.bSaveValue=="undefined"?!!e.input:!!e.bSaveValue};this.mousedown=false;this.direction=1};BX.JCSpinner.prototype.Show=function(){this.node=BX.create("span",{events:{mousedown:BX.delegateEvent({attr:"data-dir"},BX.delegate(this.Start,this))},html:'<a href="javascript:void(0)" class="bx-calendar-form-arrow bx-calendar-form-arrow-top" data-dir="1"><i></i></a><a href="javascript:void(0)" class="bx-calendar-form-arrow bx-calendar-form-arrow-bottom" data-dir="-1"><i></i></a>'});return this.node};BX.JCSpinner.prototype.Start=function(){this.mousedown=true;this.direction=BX.proxy_context.getAttribute("data-dir")>0?1:-1;BX.bind(document,"mouseup",BX.proxy(this.MouseUp,this));this.ChangeValue(true)};BX.JCSpinner.prototype.ChangeValue=function(e){if(!this.mousedown)return;if(this.params.input){var t=parseInt(this.params.input.value,10)+this.params.delta*this.direction;if(this.params.bSaveValue)this.params.input.value=t;if(!!e&&this.params.callback_start)this.params.callback_start(this.params,t,this.direction);if(this.params.callback_change)this.params.callback_change(this.params,t,this.direction);setTimeout(BX.proxy(this.ChangeValue,this),!!e?this.params.timeout_start:this.params.timeout_cont)}};BX.JCSpinner.prototype.MouseUp=function(){this.mousedown=false;BX.unbind(document,"mouseup",BX.proxy(this.MouseUp,this));if(this.params.callback_finish)this.params.callback_finish(this.params,this.params.input.value)};window.jsCalendar={Show:function(e,t,a,i,r,s,n,o){return BX.calendar({node:e,field:t,form:n,bTime:!!r,currentTime:s,bHideTimebar:!!o})},ValueToString:BX.calendar.ValueToString};BX.CClockSelector=function(e){this.params=e;this.params.popup_buttons=this.params.popup_buttons||[new BX.PopupWindowButton({text:BX.message("CAL_BUTTON"),className:"popup-window-button-create",events:{click:BX.proxy(this.setValue,this)}})];this.isReady=false;this.WND=new BX.PopupWindow(this.params.popup_id||"clock_selector_popup",this.params.node,this.params.popup_config||{titleBar:BX.message("CAL_TIME"),offsetLeft:-45,offsetTop:-135,autoHide:true,closeIcon:true,closeByEsc:true,zIndex:this.params.zIndex});this.SHOW=false;BX.addCustomEvent(this.WND,"onPopupClose",BX.delegate(this.onPopupClose,this));this.obClocks={};this.CLOCK_ID=this.params.clock_id||"clock_selector"};BX.CClockSelector.prototype.Show=function(){if(!this.isReady){BX.addCustomEvent("onClockRegister",BX.proxy(this.onClockRegister,this));return BX.ajax.get("/bitrix/tools/clock_selector.php",{start_time:this.params.start_time,clock_id:this.CLOCK_ID,sessid:BX.bitrix_sessid()},BX.delegate(this.Ready,this))}this.WND.setButtons(this.params.popup_buttons);this.WND.show();this.SHOW=true;if(window["bxClock_"+this.obClocks[this.CLOCK_ID]]){setTimeout("window['bxClock_"+this.obClocks[this.CLOCK_ID]+"'].CalculateCoordinates()",40)}return true};BX.CClockSelector.prototype.onClockRegister=function(e){if(e[this.CLOCK_ID]){this.obClocks[this.CLOCK_ID]=e[this.CLOCK_ID];BX.removeCustomEvent("onClockRegister",BX.proxy(this.onClockRegister,this))}};BX.CClockSelector.prototype.Ready=function(e){this.content=this.CreateContent(e);this.WND.setContent(this.content);this.isReady=true;setTimeout(BX.proxy(this.Show,this),30)};BX.CClockSelector.prototype.CreateContent=function(e){return BX.create("DIV",{events:{click:BX.PreventDefault},html:'<div class="bx-tm-popup-clock">'+e+"</div>"})};BX.CClockSelector.prototype.setValue=function(e){if(this.params.callback){var t=BX.findChild(this.content,{tagName:"INPUT"},true);this.params.callback.apply(this.params.node,[t.value])}return BX.PreventDefault(e)};BX.CClockSelector.prototype.closeWnd=function(e){this.WND.close();return e||window.event?BX.PreventDefault(e):true};BX.CClockSelector.prototype.setNode=function(e){this.WND.setBindElement(e)};BX.CClockSelector.prototype.setTime=function(e){this.params.start_time=e;if(window["bxClock_"+this.obClocks[this.CLOCK_ID]]){window["bxClock_"+this.obClocks[this.CLOCK_ID]].SetTime(parseInt(e/3600),parseInt(e%3600/60))}};BX.CClockSelector.prototype.setCallback=function(e){this.params.callback=e};BX.CClockSelector.prototype.onPopupClose=function(){this.SHOW=false}})();
/* End */
;
//# sourceMappingURL=kernel_main.map.js