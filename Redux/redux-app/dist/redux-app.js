const e=new WeakMap,t=t=>"function"==typeof t&&e.has(t),n=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,s=function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;for(;t!==n;){const n=t.nextSibling;e.removeChild(t),t=n}},r={},i={},o=`{{lit-${String(Math.random()).slice(2)}}}`,a=`\x3c!--${o}--\x3e`,c=new RegExp(`${o}|${a}`),l="$lit$";class d{constructor(e,t){this.parts=[],this.element=t;const n=[],s=[],r=document.createTreeWalker(t.content,133,null,!1);let i=0,a=-1,d=0;const{strings:u,values:{length:m}}=e;for(;d<m;){const e=r.nextNode();if(null!==e){if(a++,1===e.nodeType){if(e.hasAttributes()){const t=e.attributes,{length:n}=t;let s=0;for(let e=0;e<n;e++)h(t[e].name,l)&&s++;for(;s-- >0;){const t=u[d],n=f.exec(t)[2],s=n.toLowerCase()+l,r=e.getAttribute(s);e.removeAttribute(s);const i=r.split(c);this.parts.push({type:"attribute",index:a,name:n,strings:i}),d+=i.length-1}}"TEMPLATE"===e.tagName&&(s.push(e),r.currentNode=e.content)}else if(3===e.nodeType){const t=e.data;if(t.indexOf(o)>=0){const s=e.parentNode,r=t.split(c),i=r.length-1;for(let t=0;t<i;t++){let n,i=r[t];if(""===i)n=p();else{const e=f.exec(i);null!==e&&h(e[2],l)&&(i=i.slice(0,e.index)+e[1]+e[2].slice(0,-l.length)+e[3]),n=document.createTextNode(i)}s.insertBefore(n,e),this.parts.push({type:"node",index:++a})}""===r[i]?(s.insertBefore(p(),e),n.push(e)):e.data=r[i],d+=i}}else if(8===e.nodeType)if(e.data===o){const t=e.parentNode;null!==e.previousSibling&&a!==i||(a++,t.insertBefore(p(),e)),i=a,this.parts.push({type:"node",index:a}),null===e.nextSibling?e.data="":(n.push(e),a--),d++}else{let t=-1;for(;-1!==(t=e.data.indexOf(o,t+1));)this.parts.push({type:"node",index:-1}),d++}}else r.currentNode=s.pop()}for(const e of n)e.parentNode.removeChild(e)}}const h=(e,t)=>{const n=e.length-t.length;return n>=0&&e.slice(n)===t},u=e=>-1!==e.index,p=()=>document.createComment(""),f=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=\/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;class m{constructor(e,t,n){this.__parts=[],this.template=e,this.processor=t,this.options=n}update(e){let t=0;for(const n of this.__parts)void 0!==n&&n.setValue(e[t]),t++;for(const e of this.__parts)void 0!==e&&e.commit()}_clone(){const e=n?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),t=[],s=this.template.parts,r=document.createTreeWalker(e,133,null,!1);let i,o=0,a=0,c=r.nextNode();for(;o<s.length;)if(i=s[o],u(i)){for(;a<i.index;)a++,"TEMPLATE"===c.nodeName&&(t.push(c),r.currentNode=c.content),null===(c=r.nextNode())&&(r.currentNode=t.pop(),c=r.nextNode());if("node"===i.type){const e=this.processor.handleTextExpression(this.options);e.insertAfterNode(c.previousSibling),this.__parts.push(e)}else this.__parts.push(...this.processor.handleAttributeExpressions(c,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return n&&(document.adoptNode(e),customElements.upgrade(e)),e}}class _{constructor(e,t,n,s){this.strings=e,this.values=t,this.type=n,this.processor=s}getHTML(){const e=this.strings.length-1;let t="",n=!1;for(let s=0;s<e;s++){const e=this.strings[s],r=e.lastIndexOf("\x3c!--");n=(r>-1||n)&&-1===e.indexOf("--\x3e",r+1);const i=f.exec(e);t+=null===i?e+(n?o:a):e.substr(0,i.index)+i[1]+i[2]+l+i[3]+o}return t+=this.strings[e]}getTemplateElement(){const e=document.createElement("template");return e.innerHTML=this.getHTML(),e}}const y=e=>null===e||!("object"==typeof e||"function"==typeof e),g=e=>Array.isArray(e)||!(!e||!e[Symbol.iterator]);class b{constructor(e,t,n){this.dirty=!0,this.element=e,this.name=t,this.strings=n,this.parts=[];for(let e=0;e<n.length-1;e++)this.parts[e]=this._createPart()}_createPart(){return new v(this)}_getValue(){const e=this.strings,t=e.length-1;let n="";for(let s=0;s<t;s++){n+=e[s];const t=this.parts[s];if(void 0!==t){const e=t.value;if(y(e)||!g(e))n+="string"==typeof e?e:String(e);else for(const t of e)n+="string"==typeof t?t:String(t)}}return n+=e[t]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class v{constructor(e){this.value=void 0,this.committer=e}setValue(e){e===r||y(e)&&e===this.value||(this.value=e,t(e)||(this.committer.dirty=!0))}commit(){for(;t(this.value);){const e=this.value;this.value=r,e(this)}this.value!==r&&this.committer.commit()}}class w{constructor(e){this.value=void 0,this.__pendingValue=void 0,this.options=e}appendInto(e){this.startNode=e.appendChild(p()),this.endNode=e.appendChild(p())}insertAfterNode(e){this.startNode=e,this.endNode=e.nextSibling}appendIntoPart(e){e.__insert(this.startNode=p()),e.__insert(this.endNode=p())}insertAfterPart(e){e.__insert(this.startNode=p()),this.endNode=e.endNode,e.endNode=this.startNode}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}const e=this.__pendingValue;e!==r&&(y(e)?e!==this.value&&this.__commitText(e):e instanceof _?this.__commitTemplateResult(e):e instanceof Node?this.__commitNode(e):g(e)?this.__commitIterable(e):e===i?(this.value=i,this.clear()):this.__commitText(e))}__insert(e){this.endNode.parentNode.insertBefore(e,this.endNode)}__commitNode(e){this.value!==e&&(this.clear(),this.__insert(e),this.value=e)}__commitText(e){const t=this.startNode.nextSibling,n="string"==typeof(e=null==e?"":e)?e:String(e);t===this.endNode.previousSibling&&3===t.nodeType?t.data=n:this.__commitNode(document.createTextNode(n)),this.value=e}__commitTemplateResult(e){const t=this.options.templateFactory(e);if(this.value instanceof m&&this.value.template===t)this.value.update(e.values);else{const n=new m(t,e.processor,this.options),s=n._clone();n.update(e.values),this.__commitNode(s),this.value=n}}__commitIterable(e){Array.isArray(this.value)||(this.value=[],this.clear());const t=this.value;let n,s=0;for(const r of e)void 0===(n=t[s])&&(n=new w(this.options),t.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(t[s-1])),n.setValue(r),n.commit(),s++;s<t.length&&(t.length=s,this.clear(n&&n.endNode))}clear(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.startNode;s(this.startNode.parentNode,e.nextSibling,this.endNode)}}class S{constructor(e,t,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=e,this.name=t,this.strings=n}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=!!this.__pendingValue;this.value!==e&&(e?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=e),this.__pendingValue=r}}class x extends b{constructor(e,t,n){super(e,t,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new N(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class N extends v{}let P=!1;try{const e={get capture(){return P=!0,!1}};window.addEventListener("test",e,e),window.removeEventListener("test",e,e)}catch(e){}class C{constructor(e,t,n){this.value=void 0,this.__pendingValue=void 0,this.element=e,this.eventName=t,this.eventContext=n,this.__boundHandleEvent=(e=>this.handleEvent(e))}setValue(e){this.__pendingValue=e}commit(){for(;t(this.__pendingValue);){const e=this.__pendingValue;this.__pendingValue=r,e(this)}if(this.__pendingValue===r)return;const e=this.__pendingValue,n=this.value,s=null==e||null!=n&&(e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive),i=null!=e&&(null==n||s);s&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),i&&(this.__options=E(e),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=e,this.__pendingValue=r}handleEvent(e){"function"==typeof this.value?this.value.call(this.eventContext||this.element,e):this.value.handleEvent(e)}}const E=e=>e&&(P?{capture:e.capture,passive:e.passive,once:e.once}:e.capture);const A=new class{handleAttributeExpressions(e,t,n,s){const r=t[0];return"."===r?new x(e,t.slice(1),n).parts:"@"===r?[new C(e,t.slice(1),s.eventContext)]:"?"===r?[new S(e,t.slice(1),n)]:new b(e,t,n).parts}handleTextExpression(e){return new w(e)}};function T(e){let t=O.get(e.type);void 0===t&&(t={stringsArray:new WeakMap,keyString:new Map},O.set(e.type,t));let n=t.stringsArray.get(e.strings);if(void 0!==n)return n;const s=e.strings.join(o);return void 0===(n=t.keyString.get(s))&&(n=new d(e,e.getTemplateElement()),t.keyString.set(s,n)),t.stringsArray.set(e.strings,n),n}const O=new Map,R=new WeakMap;(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.1");const V=function(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),s=1;s<t;s++)n[s-1]=arguments[s];return new _(e,n,"html",A)},k=133;function j(e,t){const{element:{content:n},parts:s}=e,r=document.createTreeWalker(n,k,null,!1);let i=I(s),o=s[i],a=-1,c=0;const l=[];let d=null;for(;r.nextNode();){a++;const e=r.currentNode;for(e.previousSibling===d&&(d=null),t.has(e)&&(l.push(e),null===d&&(d=e)),null!==d&&c++;void 0!==o&&o.index===a;)o.index=null!==d?-1:o.index-c,o=s[i=I(s,i)]}l.forEach(e=>e.parentNode.removeChild(e))}const M=e=>{let t=11===e.nodeType?0:1;const n=document.createTreeWalker(e,k,null,!1);for(;n.nextNode();)t++;return t},I=function(e){for(let t=(arguments.length>1&&void 0!==arguments[1]?arguments[1]:-1)+1;t<e.length;t++){const n=e[t];if(u(n))return t}return-1};const U=(e,t)=>`${e}--${t}`;let z=!0;void 0===window.ShadyCSS?z=!1:void 0===window.ShadyCSS.prepareTemplateDom&&(console.warn("Incompatible ShadyCSS version detected. Please update to at least @webcomponents/webcomponentsjs@2.0.2 and @webcomponents/shadycss@1.3.1."),z=!1);const B=e=>t=>{const n=U(t.type,e);let s=O.get(n);void 0===s&&(s={stringsArray:new WeakMap,keyString:new Map},O.set(n,s));let r=s.stringsArray.get(t.strings);if(void 0!==r)return r;const i=t.strings.join(o);if(void 0===(r=s.keyString.get(i))){const n=t.getTemplateElement();z&&window.ShadyCSS.prepareTemplateDom(n,e),r=new d(t,n),s.keyString.set(i,r)}return s.stringsArray.set(t.strings,r),r},$=["html","svg"],q=new Set,L=(e,t,n)=>{q.add(e);const s=n?n.element:document.createElement("template"),r=t.querySelectorAll("style"),{length:i}=r;if(0===i)return void window.ShadyCSS.prepareTemplateStyles(s,e);const o=document.createElement("style");for(let e=0;e<i;e++){const t=r[e];t.parentNode.removeChild(t),o.textContent+=t.textContent}(e=>{$.forEach(t=>{const n=O.get(U(t,e));void 0!==n&&n.keyString.forEach(e=>{const{element:{content:t}}=e,n=new Set;Array.from(t.querySelectorAll("style")).forEach(e=>{n.add(e)}),j(e,n)})})})(e);const a=s.content;n?function(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;const{element:{content:s},parts:r}=e;if(null==n)return void s.appendChild(t);const i=document.createTreeWalker(s,k,null,!1);let o=I(r),a=0,c=-1;for(;i.nextNode();)for(c++,i.currentNode===n&&(a=M(t),n.parentNode.insertBefore(t,n));-1!==o&&r[o].index===c;){if(a>0){for(;-1!==o;)r[o].index+=a,o=I(r,o);return}o=I(r,o)}}(n,o,a.firstChild):a.insertBefore(o,a.firstChild),window.ShadyCSS.prepareTemplateStyles(s,e);const c=a.querySelector("style");if(window.ShadyCSS.nativeShadow&&null!==c)t.insertBefore(c.cloneNode(!0),t.firstChild);else if(n){a.insertBefore(o,a.firstChild);const e=new Set;e.add(o),j(n,e)}};window.JSCompiler_renameProperty=((e,t)=>e);const F={toAttribute(e,t){switch(t){case Boolean:return e?"":null;case Object:case Array:return null==e?e:JSON.stringify(e)}return e},fromAttribute(e,t){switch(t){case Boolean:return null!==e;case Number:return null===e?null:Number(e);case Object:case Array:return JSON.parse(e)}return e}},D=(e,t)=>t!==e&&(t==t||e==e),H={attribute:!0,type:String,converter:F,reflect:!1,hasChanged:D},W=Promise.resolve(!0),J=1,Y=4,K=8,G=16,Q=32;class X extends HTMLElement{constructor(){super(),this._updateState=0,this._instanceProperties=void 0,this._updatePromise=W,this._hasConnectedResolver=void 0,this._changedProperties=new Map,this._reflectingProperties=void 0,this.initialize()}static get observedAttributes(){this.finalize();const e=[];return this._classProperties.forEach((t,n)=>{const s=this._attributeNameForProperty(n,t);void 0!==s&&(this._attributeToPropertyMap.set(s,n),e.push(s))}),e}static _ensureClassProperties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_classProperties",this))){this._classProperties=new Map;const e=Object.getPrototypeOf(this)._classProperties;void 0!==e&&e.forEach((e,t)=>this._classProperties.set(t,e))}}static createProperty(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:H;if(this._ensureClassProperties(),this._classProperties.set(e,t),t.noAccessor||this.prototype.hasOwnProperty(e))return;const n="symbol"==typeof e?Symbol():`__${e}`;Object.defineProperty(this.prototype,e,{get(){return this[n]},set(t){const s=this[e];this[n]=t,this._requestUpdate(e,s)},configurable:!0,enumerable:!0})}static finalize(){if(this.hasOwnProperty(JSCompiler_renameProperty("finalized",this))&&this.finalized)return;const e=Object.getPrototypeOf(this);if("function"==typeof e.finalize&&e.finalize(),this.finalized=!0,this._ensureClassProperties(),this._attributeToPropertyMap=new Map,this.hasOwnProperty(JSCompiler_renameProperty("properties",this))){const e=this.properties,t=[...Object.getOwnPropertyNames(e),..."function"==typeof Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e):[]];for(const n of t)this.createProperty(n,e[n])}}static _attributeNameForProperty(e,t){const n=t.attribute;return!1===n?void 0:"string"==typeof n?n:"string"==typeof e?e.toLowerCase():void 0}static _valueHasChanged(e,t){return(arguments.length>2&&void 0!==arguments[2]?arguments[2]:D)(e,t)}static _propertyValueFromAttribute(e,t){const n=t.type,s=t.converter||F,r="function"==typeof s?s:s.fromAttribute;return r?r(e,n):e}static _propertyValueToAttribute(e,t){if(void 0===t.reflect)return;const n=t.type,s=t.converter;return(s&&s.toAttribute||F.toAttribute)(e,n)}initialize(){this._saveInstanceProperties(),this._requestUpdate()}_saveInstanceProperties(){this.constructor._classProperties.forEach((e,t)=>{if(this.hasOwnProperty(t)){const e=this[t];delete this[t],this._instanceProperties||(this._instanceProperties=new Map),this._instanceProperties.set(t,e)}})}_applyInstanceProperties(){this._instanceProperties.forEach((e,t)=>this[t]=e),this._instanceProperties=void 0}connectedCallback(){this._updateState=this._updateState|Q,this._hasConnectedResolver&&(this._hasConnectedResolver(),this._hasConnectedResolver=void 0)}disconnectedCallback(){}attributeChangedCallback(e,t,n){t!==n&&this._attributeToProperty(e,n)}_propertyToAttribute(e,t){let n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:H;const s=this.constructor,r=s._attributeNameForProperty(e,n);if(void 0!==r){const e=s._propertyValueToAttribute(t,n);if(void 0===e)return;this._updateState=this._updateState|K,null==e?this.removeAttribute(r):this.setAttribute(r,e),this._updateState=this._updateState&~K}}_attributeToProperty(e,t){if(this._updateState&K)return;const n=this.constructor,s=n._attributeToPropertyMap.get(e);if(void 0!==s){const e=n._classProperties.get(s)||H;this._updateState=this._updateState|G,this[s]=n._propertyValueFromAttribute(t,e),this._updateState=this._updateState&~G}}_requestUpdate(e,t){let n=!0;if(void 0!==e){const s=this.constructor,r=s._classProperties.get(e)||H;s._valueHasChanged(this[e],t,r.hasChanged)?(this._changedProperties.has(e)||this._changedProperties.set(e,t),!0!==r.reflect||this._updateState&G||(void 0===this._reflectingProperties&&(this._reflectingProperties=new Map),this._reflectingProperties.set(e,r))):n=!1}!this._hasRequestedUpdate&&n&&this._enqueueUpdate()}requestUpdate(e,t){return this._requestUpdate(e,t),this.updateComplete}async _enqueueUpdate(){let e,t;this._updateState=this._updateState|Y;const n=this._updatePromise;this._updatePromise=new Promise((n,s)=>{e=n,t=s});try{await n}catch(e){}this._hasConnected||await new Promise(e=>this._hasConnectedResolver=e);try{const e=this.performUpdate();null!=e&&await e}catch(e){t(e)}e(!this._hasRequestedUpdate)}get _hasConnected(){return this._updateState&Q}get _hasRequestedUpdate(){return this._updateState&Y}get hasUpdated(){return this._updateState&J}performUpdate(){this._instanceProperties&&this._applyInstanceProperties();let e=!1;const t=this._changedProperties;try{(e=this.shouldUpdate(t))&&this.update(t)}catch(t){throw e=!1,t}finally{this._markUpdated()}e&&(this._updateState&J||(this._updateState=this._updateState|J,this.firstUpdated(t)),this.updated(t))}_markUpdated(){this._changedProperties=new Map,this._updateState=this._updateState&~Y}get updateComplete(){return this._updatePromise}shouldUpdate(e){return!0}update(e){void 0!==this._reflectingProperties&&this._reflectingProperties.size>0&&(this._reflectingProperties.forEach((e,t)=>this._propertyToAttribute(t,this[t],e)),this._reflectingProperties=void 0)}updated(e){}firstUpdated(e){}}X.finalized=!0;const Z="adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype;(window.litElementVersions||(window.litElementVersions=[])).push("2.2.0");const ee=e=>e.flat?e.flat(1/0):function e(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];for(let s=0,r=t.length;s<r;s++){const r=t[s];Array.isArray(r)?e(r,n):n.push(r)}return n}(e);class te extends X{static finalize(){super.finalize(),this._styles=this.hasOwnProperty(JSCompiler_renameProperty("styles",this))?this._getUniqueStyles():this._styles||[]}static _getUniqueStyles(){const e=this.styles,t=[];if(Array.isArray(e)){ee(e).reduceRight((e,t)=>(e.add(t),e),new Set).forEach(e=>t.unshift(e))}else e&&t.push(e);return t}initialize(){super.initialize(),this.renderRoot=this.createRenderRoot(),window.ShadowRoot&&this.renderRoot instanceof window.ShadowRoot&&this.adoptStyles()}createRenderRoot(){return this.attachShadow({mode:"open"})}adoptStyles(){const e=this.constructor._styles;0!==e.length&&(void 0===window.ShadyCSS||window.ShadyCSS.nativeShadow?Z?this.renderRoot.adoptedStyleSheets=e.map(e=>e.styleSheet):this._needsShimAdoptedStyleSheets=!0:window.ShadyCSS.ScopingShim.prepareAdoptedCssText(e.map(e=>e.cssText),this.localName))}connectedCallback(){super.connectedCallback(),this.hasUpdated&&void 0!==window.ShadyCSS&&window.ShadyCSS.styleElement(this)}update(e){super.update(e);const t=this.render();t instanceof _&&this.constructor.render(t,this.renderRoot,{scopeName:this.localName,eventContext:this}),this._needsShimAdoptedStyleSheets&&(this._needsShimAdoptedStyleSheets=!1,this.constructor._styles.forEach(e=>{const t=document.createElement("style");t.textContent=e.cssText,this.renderRoot.appendChild(t)}))}render(){}}te.finalized=!0,te.render=((e,t,n)=>{if(!n||"object"!=typeof n||!n.scopeName)throw new Error("The `scopeName` option is required.");const r=n.scopeName,i=R.has(t),o=z&&11===t.nodeType&&!!t.host,a=o&&!q.has(r),c=a?document.createDocumentFragment():t;if(((e,t,n)=>{let r=R.get(t);void 0===r&&(s(t,t.firstChild),R.set(t,r=new w(Object.assign({templateFactory:T},n))),r.appendInto(t)),r.setValue(e),r.commit()})(e,c,Object.assign({templateFactory:B(r)},n)),a){const e=R.get(c);R.delete(c);const n=e.value instanceof m?e.value.template:void 0;L(r,c,n),s(t,t.firstChild),t.appendChild(c),R.set(t,e)}!i&&o&&window.ShadyCSS.styleElement(t.host)});const ne=e=>t=>(class extends t{connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._storeUnsubscribe=e.subscribe(()=>this.stateChanged(e.getState())),this.stateChanged(e.getState())}disconnectedCallback(){this._storeUnsubscribe(),super.disconnectedCallback&&super.disconnectedCallback()}stateChanged(e){}});var se=function(e){var t,n=e.Symbol;return"function"==typeof n?n.observable?t=n.observable:(t=n("observable"),n.observable=t):t="@@observable",t}("undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof module?module:Function("return this")()),re=function(){return Math.random().toString(36).substring(7).split("").join(".")},ie={INIT:"@@redux/INIT"+re(),REPLACE:"@@redux/REPLACE"+re(),PROBE_UNKNOWN_ACTION:function(){return"@@redux/PROBE_UNKNOWN_ACTION"+re()}};function oe(){}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ce(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,s)}return n}function le(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ce(n,!0).forEach(function(t){ae(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ce(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}"production"!==process.env.NODE_ENV&&"string"==typeof oe.name&&"isCrushed"!==oe.name&&function(e){"undefined"!=typeof console&&"function"==typeof console.error&&console.error(e);try{throw new Error(e)}catch(e){}}('You are currently using minified code outside of NODE_ENV === "production". This means that you are running a slower development build of Redux. You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) to ensure you have the correct code for your production build.');const de={contador:0,nombre:"Redux App"},he=function e(t,n,s){var r;if("function"==typeof n&&"function"==typeof s||"function"==typeof s&&"function"==typeof arguments[3])throw new Error("It looks like you are passing several store enhancers to createStore(). This is not supported. Instead, compose them together to a single function.");if("function"==typeof n&&void 0===s&&(s=n,n=void 0),void 0!==s){if("function"!=typeof s)throw new Error("Expected the enhancer to be a function.");return s(e)(t,n)}if("function"!=typeof t)throw new Error("Expected the reducer to be a function.");var i=t,o=n,a=[],c=a,l=!1;function d(){c===a&&(c=a.slice())}function h(){if(l)throw new Error("You may not call store.getState() while the reducer is executing. The reducer has already received the state as an argument. Pass it down from the top reducer instead of reading it from the store.");return o}function u(e){if("function"!=typeof e)throw new Error("Expected the listener to be a function.");if(l)throw new Error("You may not call store.subscribe() while the reducer is executing. If you would like to be notified after the store has been updated, subscribe from a component and invoke store.getState() in the callback to access the latest state. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");var t=!0;return d(),c.push(e),function(){if(t){if(l)throw new Error("You may not unsubscribe from a store listener while the reducer is executing. See https://redux.js.org/api-reference/store#subscribe(listener) for more details.");t=!1,d();var n=c.indexOf(e);c.splice(n,1)}}}function p(e){if(!function(e){if("object"!=typeof e||null===e)return!1;for(var t=e;null!==Object.getPrototypeOf(t);)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}(e))throw new Error("Actions must be plain objects. Use custom middleware for async actions.");if(void 0===e.type)throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');if(l)throw new Error("Reducers may not dispatch actions.");try{l=!0,o=i(o,e)}finally{l=!1}for(var t=a=c,n=0;n<t.length;n++)(0,t[n])();return e}return p({type:ie.INIT}),(r={dispatch:p,subscribe:u,getState:h,replaceReducer:function(e){if("function"!=typeof e)throw new Error("Expected the nextReducer to be a function.");i=e,p({type:ie.REPLACE})}})[se]=function(){var e,t=u;return(e={subscribe:function(e){if("object"!=typeof e||null===e)throw new TypeError("Expected the observer to be an object.");function n(){e.next&&e.next(h())}return n(),{unsubscribe:t(n)}}})[se]=function(){return this},e},r}(function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:de,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"INCREMENTAR":return le({},e,{contador:e.contador+1});case"DECREMENTAR":return le({},e,{contador:e.contador-1});case"CAMBIAR_NOMBRE":return le({},e,{nombre:t.nombre});default:return e}}),ue=()=>({type:"INCREMENTAR"}),pe=()=>({type:"DECREMENTAR"}),fe=e=>({type:"CAMBIAR_NOMBRE",nombre:e});customElements.define("my-buttons",class extends te{render(){return V`<button @click="${this._incrementar}">Incrementar</button> <button @click="${this._decrementar}">Decrementar</button>`}_incrementar(){he.dispatch(ue())}_decrementar(){he.dispatch(pe())}});customElements.define("my-input",class extends(ne(he)(te)){static get properties(){return{nombre:{type:String}}}stateChanged(e){console.log("stateChanged my-input",e),this.nombre=e.nombre}render(){return V`<div><br><input .value="${this.nombre}" @input="${this._cambiarNombre}"> <button @click="${this._guardar}">Guardar</button></div>`}_cambiarNombre(e){this.nombre=e.target.value}_guardar(){he.dispatch(fe(this.nombre))}});customElements.define("redux-app",class extends(ne(he)(te)){static get properties(){return{nombre:{type:String},contador:{type:Number}}}stateChanged(e){console.log("stateChanged redux-app",e),this.nombre=e.nombre,this.contador=e.contador}render(){return V`<h1>${this.nombre}</h1><p>Contador: ${this.contador}</p><my-buttons></my-buttons><my-input></my-input>`}});
//# sourceMappingURL=redux-app.js.map