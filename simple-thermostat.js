!function(){const t={DEBUG:!1};try{if(process)return process.env=Object.assign({},process.env),void Object.assign(process.env,t)}catch(t){}globalThis.process={env:t}}();var t="simple-thermostat";const e=window,i=e.ShadowRoot&&(void 0===e.ShadyCSS||e.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,n=Symbol(),s=new WeakMap;class o{constructor(t,e,i){if(this._$cssResult$=!0,i!==n)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=e}get styleSheet(){let t=this.o;const e=this.t;if(i&&void 0===t){const i=void 0!==e&&1===e.length;i&&(t=s.get(e)),void 0===t&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),i&&s.set(e,t))}return t}toString(){return this.cssText}}const a=(t,n)=>{i?t.adoptedStyleSheets=n.map((t=>t instanceof CSSStyleSheet?t:t.styleSheet)):n.forEach((i=>{const n=document.createElement("style"),s=e.litNonce;void 0!==s&&n.setAttribute("nonce",s),n.textContent=i.cssText,t.appendChild(n)}))},r=i?t=>t:t=>t instanceof CSSStyleSheet?(t=>{let e="";for(const i of t.cssRules)e+=i.cssText;return(t=>new o("string"==typeof t?t:t+"",void 0,n))(e)})(t):t;var l;const c=window,d=c.trustedTypes,h=d?d.emptyScript:"",u=c.reactiveElementPolyfillSupport,p={toAttribute(t,e){switch(e){case Boolean:t=t?h:null;break;case Object:case Array:t=null==t?t:JSON.stringify(t)}return t},fromAttribute(t,e){let i=t;switch(e){case Boolean:i=null!==t;break;case Number:i=null===t?null:Number(t);break;case Object:case Array:try{i=JSON.parse(t)}catch(t){i=null}}return i}},f=(t,e)=>e!==t&&(e==e||t==t),v={attribute:!0,type:String,converter:p,reflect:!1,hasChanged:f};class g extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this.u()}static addInitializer(t){var e;this.finalize(),(null!==(e=this.h)&&void 0!==e?e:this.h=[]).push(t)}static get observedAttributes(){this.finalize();const t=[];return this.elementProperties.forEach(((e,i)=>{const n=this._$Ep(i,e);void 0!==n&&(this._$Ev.set(n,i),t.push(n))})),t}static createProperty(t,e=v){if(e.state&&(e.attribute=!1),this.finalize(),this.elementProperties.set(t,e),!e.noAccessor&&!this.prototype.hasOwnProperty(t)){const i="symbol"==typeof t?Symbol():"__"+t,n=this.getPropertyDescriptor(t,i,e);void 0!==n&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,e,i){return{get(){return this[e]},set(n){const s=this[t];this[e]=n,this.requestUpdate(t,s,i)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||v}static finalize(){if(this.hasOwnProperty("finalized"))return!1;this.finalized=!0;const t=Object.getPrototypeOf(this);if(t.finalize(),void 0!==t.h&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){const t=this.properties,e=[...Object.getOwnPropertyNames(t),...Object.getOwnPropertySymbols(t)];for(const i of e)this.createProperty(i,t[i])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){const e=[];if(Array.isArray(t)){const i=new Set(t.flat(1/0).reverse());for(const t of i)e.unshift(r(t))}else void 0!==t&&e.push(r(t));return e}static _$Ep(t,e){const i=e.attribute;return!1===i?void 0:"string"==typeof i?i:"string"==typeof t?t.toLowerCase():void 0}u(){var t;this._$E_=new Promise((t=>this.enableUpdating=t)),this._$AL=new Map,this._$Eg(),this.requestUpdate(),null===(t=this.constructor.h)||void 0===t||t.forEach((t=>t(this)))}addController(t){var e,i;(null!==(e=this._$ES)&&void 0!==e?e:this._$ES=[]).push(t),void 0!==this.renderRoot&&this.isConnected&&(null===(i=t.hostConnected)||void 0===i||i.call(t))}removeController(t){var e;null===(e=this._$ES)||void 0===e||e.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach(((t,e)=>{this.hasOwnProperty(e)&&(this._$Ei.set(e,this[e]),delete this[e])}))}createRenderRoot(){var t;const e=null!==(t=this.shadowRoot)&&void 0!==t?t:this.attachShadow(this.constructor.shadowRootOptions);return a(e,this.constructor.elementStyles),e}connectedCallback(){var t;void 0===this.renderRoot&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostConnected)||void 0===e?void 0:e.call(t)}))}enableUpdating(t){}disconnectedCallback(){var t;null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostDisconnected)||void 0===e?void 0:e.call(t)}))}attributeChangedCallback(t,e,i){this._$AK(t,i)}_$EO(t,e,i=v){var n;const s=this.constructor._$Ep(t,i);if(void 0!==s&&!0===i.reflect){const o=(void 0!==(null===(n=i.converter)||void 0===n?void 0:n.toAttribute)?i.converter:p).toAttribute(e,i.type);this._$El=t,null==o?this.removeAttribute(s):this.setAttribute(s,o),this._$El=null}}_$AK(t,e){var i;const n=this.constructor,s=n._$Ev.get(t);if(void 0!==s&&this._$El!==s){const t=n.getPropertyOptions(s),o="function"==typeof t.converter?{fromAttribute:t.converter}:void 0!==(null===(i=t.converter)||void 0===i?void 0:i.fromAttribute)?t.converter:p;this._$El=s,this[s]=o.fromAttribute(e,t.type),this._$El=null}}requestUpdate(t,e,i){let n=!0;void 0!==t&&(((i=i||this.constructor.getPropertyOptions(t)).hasChanged||f)(this[t],e)?(this._$AL.has(t)||this._$AL.set(t,e),!0===i.reflect&&this._$El!==t&&(void 0===this._$EC&&(this._$EC=new Map),this._$EC.set(t,i))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(t){Promise.reject(t)}const t=this.scheduleUpdate();return null!=t&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach(((t,e)=>this[e]=t)),this._$Ei=void 0);let e=!1;const i=this._$AL;try{e=this.shouldUpdate(i),e?(this.willUpdate(i),null===(t=this._$ES)||void 0===t||t.forEach((t=>{var e;return null===(e=t.hostUpdate)||void 0===e?void 0:e.call(t)})),this.update(i)):this._$Ek()}catch(t){throw e=!1,this._$Ek(),t}e&&this._$AE(i)}willUpdate(t){}_$AE(t){var e;null===(e=this._$ES)||void 0===e||e.forEach((t=>{var e;return null===(e=t.hostUpdated)||void 0===e?void 0:e.call(t)})),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){void 0!==this._$EC&&(this._$EC.forEach(((t,e)=>this._$EO(e,this[e],t))),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}}var m;g.finalized=!0,g.elementProperties=new Map,g.elementStyles=[],g.shadowRootOptions={mode:"open"},null==u||u({ReactiveElement:g}),(null!==(l=c.reactiveElementVersions)&&void 0!==l?l:c.reactiveElementVersions=[]).push("1.6.1");const y=window,b=y.trustedTypes,$=b?b.createPolicy("lit-html",{createHTML:t=>t}):void 0,_=`lit$${(Math.random()+"").slice(9)}$`,w="?"+_,x=`<${w}>`,A=document,S=(t="")=>A.createComment(t),E=t=>null===t||"object"!=typeof t&&"function"!=typeof t,O=Array.isArray,k=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,C=/-->/g,j=/>/g,z=RegExp(">|[ \t\n\f\r](?:([^\\s\"'>=/]+)([ \t\n\f\r]*=[ \t\n\f\r]*(?:[^ \t\n\f\r\"'`<>=]|(\"|')|))|$)","g"),P=/'/g,T=/"/g,N=/^(?:script|style|textarea|title)$/i,H=(t=>(e,...i)=>({_$litType$:t,strings:e,values:i}))(1),I=Symbol.for("lit-noChange"),R=Symbol.for("lit-nothing"),U=new WeakMap,M=A.createTreeWalker(A,129,null,!1),V=(t,e)=>{const i=t.length-1,n=[];let s,o=2===e?"<svg>":"",a=k;for(let e=0;e<i;e++){const i=t[e];let r,l,c=-1,d=0;for(;d<i.length&&(a.lastIndex=d,l=a.exec(i),null!==l);)d=a.lastIndex,a===k?"!--"===l[1]?a=C:void 0!==l[1]?a=j:void 0!==l[2]?(N.test(l[2])&&(s=RegExp("</"+l[2],"g")),a=z):void 0!==l[3]&&(a=z):a===z?">"===l[0]?(a=null!=s?s:k,c=-1):void 0===l[1]?c=-2:(c=a.lastIndex-l[2].length,r=l[1],a=void 0===l[3]?z:'"'===l[3]?T:P):a===T||a===P?a=z:a===C||a===j?a=k:(a=z,s=void 0);const h=a===z&&t[e+1].startsWith("/>")?" ":"";o+=a===k?i+x:c>=0?(n.push(r),i.slice(0,c)+"$lit$"+i.slice(c)+_+h):i+_+(-2===c?(n.push(void 0),e):h)}const r=o+(t[i]||"<?>")+(2===e?"</svg>":"");if(!Array.isArray(t)||!t.hasOwnProperty("raw"))throw Error("invalid template strings array");return[void 0!==$?$.createHTML(r):r,n]};class F{constructor({strings:t,_$litType$:e},i){let n;this.parts=[];let s=0,o=0;const a=t.length-1,r=this.parts,[l,c]=V(t,e);if(this.el=F.createElement(l,i),M.currentNode=this.el.content,2===e){const t=this.el.content,e=t.firstChild;e.remove(),t.append(...e.childNodes)}for(;null!==(n=M.nextNode())&&r.length<a;){if(1===n.nodeType){if(n.hasAttributes()){const t=[];for(const e of n.getAttributeNames())if(e.endsWith("$lit$")||e.startsWith(_)){const i=c[o++];if(t.push(e),void 0!==i){const t=n.getAttribute(i.toLowerCase()+"$lit$").split(_),e=/([.?@])?(.*)/.exec(i);r.push({type:1,index:s,name:e[2],strings:t,ctor:"."===e[1]?q:"?"===e[1]?G:"@"===e[1]?K:W})}else r.push({type:6,index:s})}for(const e of t)n.removeAttribute(e)}if(N.test(n.tagName)){const t=n.textContent.split(_),e=t.length-1;if(e>0){n.textContent=b?b.emptyScript:"";for(let i=0;i<e;i++)n.append(t[i],S()),M.nextNode(),r.push({type:2,index:++s});n.append(t[e],S())}}}else if(8===n.nodeType)if(n.data===w)r.push({type:2,index:s});else{let t=-1;for(;-1!==(t=n.data.indexOf(_,t+1));)r.push({type:7,index:s}),t+=_.length-1}s++}}static createElement(t,e){const i=A.createElement("template");return i.innerHTML=t,i}}function L(t,e,i=t,n){var s,o,a,r;if(e===I)return e;let l=void 0!==n?null===(s=i._$Co)||void 0===s?void 0:s[n]:i._$Cl;const c=E(e)?void 0:e._$litDirective$;return(null==l?void 0:l.constructor)!==c&&(null===(o=null==l?void 0:l._$AO)||void 0===o||o.call(l,!1),void 0===c?l=void 0:(l=new c(t),l._$AT(t,i,n)),void 0!==n?(null!==(a=(r=i)._$Co)&&void 0!==a?a:r._$Co=[])[n]=l:i._$Cl=l),void 0!==l&&(e=L(t,l._$AS(t,e.values),l,n)),e}class D{constructor(t,e){this.u=[],this._$AN=void 0,this._$AD=t,this._$AM=e}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}v(t){var e;const{el:{content:i},parts:n}=this._$AD,s=(null!==(e=null==t?void 0:t.creationScope)&&void 0!==e?e:A).importNode(i,!0);M.currentNode=s;let o=M.nextNode(),a=0,r=0,l=n[0];for(;void 0!==l;){if(a===l.index){let e;2===l.type?e=new B(o,o.nextSibling,this,t):1===l.type?e=new l.ctor(o,l.name,l.strings,this,t):6===l.type&&(e=new Y(o,this,t)),this.u.push(e),l=n[++r]}a!==(null==l?void 0:l.index)&&(o=M.nextNode(),a++)}return s}p(t){let e=0;for(const i of this.u)void 0!==i&&(void 0!==i.strings?(i._$AI(t,i,e),e+=i.strings.length-2):i._$AI(t[e])),e++}}class B{constructor(t,e,i,n){var s;this.type=2,this._$AH=R,this._$AN=void 0,this._$AA=t,this._$AB=e,this._$AM=i,this.options=n,this._$Cm=null===(s=null==n?void 0:n.isConnected)||void 0===s||s}get _$AU(){var t,e;return null!==(e=null===(t=this._$AM)||void 0===t?void 0:t._$AU)&&void 0!==e?e:this._$Cm}get parentNode(){let t=this._$AA.parentNode;const e=this._$AM;return void 0!==e&&11===t.nodeType&&(t=e.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,e=this){t=L(this,t,e),E(t)?t===R||null==t||""===t?(this._$AH!==R&&this._$AR(),this._$AH=R):t!==this._$AH&&t!==I&&this.g(t):void 0!==t._$litType$?this.$(t):void 0!==t.nodeType?this.T(t):(t=>O(t)||"function"==typeof(null==t?void 0:t[Symbol.iterator]))(t)?this.k(t):this.g(t)}O(t,e=this._$AB){return this._$AA.parentNode.insertBefore(t,e)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}g(t){this._$AH!==R&&E(this._$AH)?this._$AA.nextSibling.data=t:this.T(A.createTextNode(t)),this._$AH=t}$(t){var e;const{values:i,_$litType$:n}=t,s="number"==typeof n?this._$AC(t):(void 0===n.el&&(n.el=F.createElement(n.h,this.options)),n);if((null===(e=this._$AH)||void 0===e?void 0:e._$AD)===s)this._$AH.p(i);else{const t=new D(s,this),e=t.v(this.options);t.p(i),this.T(e),this._$AH=t}}_$AC(t){let e=U.get(t.strings);return void 0===e&&U.set(t.strings,e=new F(t)),e}k(t){O(this._$AH)||(this._$AH=[],this._$AR());const e=this._$AH;let i,n=0;for(const s of t)n===e.length?e.push(i=new B(this.O(S()),this.O(S()),this,this.options)):i=e[n],i._$AI(s),n++;n<e.length&&(this._$AR(i&&i._$AB.nextSibling,n),e.length=n)}_$AR(t=this._$AA.nextSibling,e){var i;for(null===(i=this._$AP)||void 0===i||i.call(this,!1,!0,e);t&&t!==this._$AB;){const e=t.nextSibling;t.remove(),t=e}}setConnected(t){var e;void 0===this._$AM&&(this._$Cm=t,null===(e=this._$AP)||void 0===e||e.call(this,t))}}class W{constructor(t,e,i,n,s){this.type=1,this._$AH=R,this._$AN=void 0,this.element=t,this.name=e,this._$AM=n,this.options=s,i.length>2||""!==i[0]||""!==i[1]?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=R}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(t,e=this,i,n){const s=this.strings;let o=!1;if(void 0===s)t=L(this,t,e,0),o=!E(t)||t!==this._$AH&&t!==I,o&&(this._$AH=t);else{const n=t;let a,r;for(t=s[0],a=0;a<s.length-1;a++)r=L(this,n[i+a],e,a),r===I&&(r=this._$AH[a]),o||(o=!E(r)||r!==this._$AH[a]),r===R?t=R:t!==R&&(t+=(null!=r?r:"")+s[a+1]),this._$AH[a]=r}o&&!n&&this.j(t)}j(t){t===R?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,null!=t?t:"")}}class q extends W{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===R?void 0:t}}const J=b?b.emptyScript:"";class G extends W{constructor(){super(...arguments),this.type=4}j(t){t&&t!==R?this.element.setAttribute(this.name,J):this.element.removeAttribute(this.name)}}class K extends W{constructor(t,e,i,n,s){super(t,e,i,n,s),this.type=5}_$AI(t,e=this){var i;if((t=null!==(i=L(this,t,e,0))&&void 0!==i?i:R)===I)return;const n=this._$AH,s=t===R&&n!==R||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,o=t!==R&&(n===R||s);s&&this.element.removeEventListener(this.name,this,n),o&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var e,i;"function"==typeof this._$AH?this._$AH.call(null!==(i=null===(e=this.options)||void 0===e?void 0:e.host)&&void 0!==i?i:this.element,t):this._$AH.handleEvent(t)}}class Y{constructor(t,e,i){this.element=t,this.type=6,this._$AN=void 0,this._$AM=e,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(t){L(this,t)}}const Z=y.litHtmlPolyfillSupport;null==Z||Z(F,B),(null!==(m=y.litHtmlVersions)&&void 0!==m?m:y.litHtmlVersions=[]).push("2.6.1");var Q,X;class tt extends g{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,e;const i=super.createRenderRoot();return null!==(t=(e=this.renderOptions).renderBefore)&&void 0!==t||(e.renderBefore=i.firstChild),i}update(t){const e=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=((t,e,i)=>{var n,s;const o=null!==(n=null==i?void 0:i.renderBefore)&&void 0!==n?n:e;let a=o._$litPart$;if(void 0===a){const t=null!==(s=null==i?void 0:i.renderBefore)&&void 0!==s?s:null;o._$litPart$=a=new B(e.insertBefore(S(),t),t,void 0,null!=i?i:{})}return a._$AI(t),a})(e,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),null===(t=this._$Do)||void 0===t||t.setConnected(!1)}render(){return I}}tt.finalized=!0,tt._$litElement$=!0,null===(Q=globalThis.litElementHydrateSupport)||void 0===Q||Q.call(globalThis,{LitElement:tt});const et=globalThis.litElementPolyfillSupport;null==et||et({LitElement:tt}),(null!==(X=globalThis.litElementVersions)&&void 0!==X?X:globalThis.litElementVersions=[]).push("3.2.2");const it=(t,e)=>"method"===e.kind&&e.descriptor&&!("value"in e.descriptor)?{...e,finisher(i){i.createProperty(e.key,t)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:e.key,initializer(){"function"==typeof e.initializer&&(this[e.key]=e.initializer.call(this))},finisher(i){i.createProperty(e.key,t)}};function nt(t){return(e,i)=>void 0!==i?((t,e,i)=>{e.constructor.createProperty(i,t)})(t,e,i):it(t,e)}var st;null===(st=window.HTMLSlotElement)||void 0===st||st.prototype.assignedElements,console.warn("The main 'lit-element' module entrypoint is deprecated. Please update your imports to use the 'lit' package: 'lit' and 'lit/decorators.ts' or import from 'lit-element/lit-element.ts'. See https://lit.dev/msg/deprecated-import-path for more information.");var ot=((t,...e)=>{const i=1===t.length?t[0]:e.reduce(((e,i,n)=>e+(t=>{if(!0===t._$cssResult$)return t.cssText;if("number"==typeof t)return t;throw Error("Value passed to 'css' function must be a 'css' function result: "+t+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+t[n+1]),t[0]);return new o(i,t,n)})`:host {
  --st-default-spacing: 4px;
}
ha-card {
  -webkit-font-smoothing: var(--ha-font-smoothing);
  font-size: var(--ha-font-size-m);
  font-weight: var(--ha-font-weight-normal);
  line-height: var(--ha-line-height-normal);

  padding-bottom: calc(var(--st-default-spacing) * 2);

  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);

  --auto-color: green;
  --heat_cool-color: springgreen;
  --cool-color: #2b9af9;
  --heat-color: #ff8100;
  --manual-color: #44739e;
  --off-color: #8a8a8a;
  --fan_only-color: #8a8a8a;
  --dry-color: #efbd07;
}

ha-card.no-header {
  padding: calc(var(--st-default-spacing) * 4) 0;
  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 4) 0;
}

.body {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: minmax(min-content, auto);
  align-items: center;
  justify-items: center;
  place-items: center;
  padding: 0 calc(var(--st-default-spacing) * 4);
  padding: 0 calc(var(--st-spacing, var(--st-default-spacing)) * 4);
  padding-bottom: calc(var(--st-default-spacing) * 2);
  padding-bottom: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}

.toggle-label {
  color: var(--primary-text-color);
  color: var(--st-toggle-label-color, var(--primary-text-color));
  margin-right: calc(var(--st-default-spacing) * 2);
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  font-size: 16px;
  font-size: var(
    --st-font-size-toggle-label,
    var(--ha-font-size-l, 16px)
  );
}

.faults {
  display: flex;
  flex-direction: row;
  margin-left: calc(var(--st-default-spacing) * 2);
  margin-left: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
}
.fault-icon {
  padding: 2px;
  cursor: pointer;
  color: var(--secondary-background-color);
  color: var(--st-fault-inactive-color, var(--secondary-background-color));
}
.fault-icon.active {
    color: var(--accent-color);
    color: var(--st-fault-active-color, var(--accent-color));
  }
.fault-icon.hide {
    display: none;
  }

.sensors {
  display: grid;
  grid-gap: var(--st-default-spacing);
  grid-gap: var(--st-spacing, var(--st-default-spacing));
  font-size: 16px;
  font-size: var(
    --st-font-size-sensors,
    var(--ha-font-size-l, 16px)
  );
}
.sensors.as-list {
  grid-auto-flow: column;
  grid-template-columns: min-content;
}

.sensors.as-table.without-labels {
    grid: auto-flow / 100%;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.sensors.as-table.with-labels {
    grid: auto-flow / auto auto;
    align-items: start;
    justify-items: start;
    place-items: start;
  }

.sensor-value {
  display: flex;
  align-items: center;
  padding-bottom: 4px;
}
.sensor-heading {
  font-weight: 300;
  padding-right: 8px;
  padding-bottom: 4px;
  white-space: nowrap;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.sensors:empty {
  display: none;
}
header {
  display: flex;
  flex-direction: row;
  align-items: center;

  padding: calc(var(--st-default-spacing) * 6)
    calc(var(--st-default-spacing) * 4)
    calc(var(--st-default-spacing) * 4);

  padding: calc(var(--st-spacing, var(--st-default-spacing)) * 6)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4)
    calc(var(--st-spacing, var(--st-default-spacing)) * 4);
}
.header__icon {
  margin-right: calc(var(--st-default-spacing) * 2);
  margin-right: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  color: #44739e;
  color: var(--state-icon-color, #44739e);
}
.header__title {
  font-size: 24px;
  font-size: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  line-height: 24px;
  line-height: var(--st-font-size-title, var(--ha-card-header-font-size, 24px));
  -webkit-font-smoothing: var(--ha-font-smoothing);
  font-weight: normal;
  margin: 0;
  align-self: left;
}
.current-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  overflow: hidden;
  flex-wrap: wrap;
}
.current-wrapper.row {
    flex-direction: row-reverse;
  }
.current--value {
  display: flex;
  align-items: center;
  margin: 0;
  font-weight: 400;
  line-height: var(--ha-font-size-4xl);
  line-height: var(--st-font-size-l, var(--ha-font-size-4xl));
  font-size: var(--ha-font-size-4xl);
  font-size: var(--st-font-size-l, var(--ha-font-size-4xl));
}
@media (min-width: 768px) {
.current--value {
    font-size: var(--ha-font-size-5xl);
    font-size: var(--st-font-size-xl, var(--ha-font-size-5xl));
    line-height: var(--ha-font-size-5xl);
    line-height: var(--st-font-size-xl, var(--ha-font-size-5xl));
}
  }
.current--value.updating {
    color: var(--error-color);
  }
.current--unit {
  font-size: var(--ha-font-size-xl);
  font-size: var(--st-font-size-m, var(--ha-font-size-xl));
}
.thermostat-trigger {
  padding: 0px;
}

/* Compact mode: built-in version of the old card_mod overrides */
ha-card.compact {
  --st-font-size-xl: 20px;
  --st-font-size-l: 20px;
  --st-font-size-m: 0px;
  --st-font-size-title: 14px;
  --st-font-size-sensors: 14px;
  --st-spacing: 0px;
  border: 0px;
  /* Give back the height stepper_pull removes, so only the chevron gap shrinks */
  padding-top: 0px;
  padding-top: var(--st-compact-stepper-pull, 0px);
  padding-bottom: 0px;
  padding-bottom: var(--st-compact-stepper-pull, 0px);
}
ha-card.compact.compact-idle {
  background: transparent;
}
ha-card.compact .current-wrapper {
  gap: 0px;
}
ha-card.compact .current--value {
  margin: 0px;
  padding: 0px;
  line-height: 0.8;
}
ha-card.compact ha-icon-button {
  margin-top: calc(-12px - 0px);
  margin-top: calc(-12px - var(--st-compact-stepper-pull, 0px));
  margin-bottom: calc(-12px - 0px);
  margin-bottom: calc(-12px - var(--st-compact-stepper-pull, 0px));
  transform: scale(0.85);
}
.clickable {
  cursor: pointer;
}
.modes {
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: column;
  grid-gap: 2px;
  margin-top: calc(var(--st-default-spacing) * 2);
  margin-top: calc(var(--st-spacing, var(--st-default-spacing)) * 2);
  padding: var(--st-default-spacing);
  padding: var(--st-spacing, var(--st-default-spacing));
}
.modes.heading {
    grid-template-columns: min-content;
  }
.mode-title {
  padding: 0 16px;
  align-self: center;
  justify-self: center;
  place-self: center;
  font-size: 16px;
  font-size: var(
    --st-font-size-sensors,
    var(--ha-font-size-l, 16px)
  );
  font-weight: 300;
  white-space: nowrap;
}
.mode-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  min-height: 24px;
  padding: var(--st-default-spacing) 0;
  padding: var(--st-spacing, var(--st-default-spacing)) 0;
  background: var(--secondary-background-color);
  background: var(--st-mode-background, var(--secondary-background-color));
  color: var(--secondary-text-color);
  cursor: pointer;
  border-radius: var(--st-default-spacing);
  border-radius: var(--st-spacing, var(--st-default-spacing));
}
.mode-item:hover {
    color: var(--primary-text-color);
    color: var(--st-mode-active-color, var(--primary-text-color));
  }
.mode-item.active,
  .mode-item.active:hover {
    background: var(--primary-color);
    background: var(--st-mode-active-background, var(--primary-color));
    color: var(--text-primary-color);
    color: var(--st-mode-active-color, var(--text-primary-color));
  }
.mode-item.active.off {
    background: var(--off-color);
    background: var(--st-mode-active-background, var(--off-color));
  }
.mode-item.active.heat {
    background: var(--heat-color);
    background: var(--st-mode-active-background, var(--heat-color));
  }
.mode-item.active.cool {
    background: var(--cool-color);
    background: var(--st-mode-active-background, var(--cool-color));
  }
.mode-item.active.heat_cool {
    background: var(--heat_cool-color);
    background: var(--st-mode-active-background, var(--heat_cool-color));
  }
.mode-item.active.auto {
    background: var(--auto-color);
    background: var(--st-mode-active-background, var(--auto-color));
  }
.mode-item.active.dry {
    background: var(--dry-color);
    background: var(--st-mode-active-background, var(--dry-color));
  }
.mode-item.active.fan_only {
    background: var(--fan_only-color);
    background: var(--st-mode-active-background, var(--fan_only-color));
  }
.mode-icon {
  --iron-icon-width: 24px;
  --iron-icon-height: 24px;
  display: block;
}
ha-switch {
  padding: 16px 6px;
}
.side-by-side {
  display: flex;
  align-items: center;
}
.side-by-side > * {
  flex: 1;
  padding-right: 4px;
}
`;function at(t,e,i,n={}){n=n||{},i=null==i?{}:i;const s=new Event(e,{bubbles:void 0===n.bubbles||n.bubbles,cancelable:Boolean(n.cancelable),composed:void 0===n.composed||n.composed});return s.detail=i,t.dispatchEvent(s),s}!function(t,e){void 0===e&&(e={});var i=e.insertAt;if(t&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],s=document.createElement("style");s.type="text/css","top"===i&&n.firstChild?n.insertBefore(s,n.firstChild):n.appendChild(s),s.styleSheet?s.styleSheet.cssText=t:s.appendChild(document.createTextNode(t))}}(ot);const rt=[0,1],lt=[.5,1],ct=["column","row"],dt=["climate"],ht={header:{},layout:{mode:{}}};function ut(t,e){var i={};for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.indexOf(n)<0&&(i[n]=t[n]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(n=Object.getOwnPropertySymbols(t);s<n.length;s++)e.indexOf(n[s])<0&&Object.prototype.propertyIsEnumerable.call(t,n[s])&&(i[n[s]]=t[n[s]])}return i}function pt(t,e,i,n){var s,o=arguments.length,a=o<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,i):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(t,e,i,n);else for(var r=t.length-1;r>=0;r--)(s=t[r])&&(a=(o<3?s(a):o>3?s(e,i,a):s(e,i))||a);return o>3&&a&&Object.defineProperty(e,i,a),a}const ft=(t,e,i,n)=>{if("length"===i||"prototype"===i)return;if("arguments"===i||"caller"===i)return;const s=Object.getOwnPropertyDescriptor(t,i),o=Object.getOwnPropertyDescriptor(e,i);!vt(s,o)&&n||Object.defineProperty(t,i,o)},vt=function(t,e){return void 0===t||t.configurable||t.writable===e.writable&&t.enumerable===e.enumerable&&t.configurable===e.configurable&&(t.writable||t.value===e.value)},gt=(t,e)=>{const i=Object.getPrototypeOf(e);i!==Object.getPrototypeOf(t)&&Object.setPrototypeOf(t,i)},mt=(t,e)=>`/* Wrapped ${t}*/\n${e}`,yt=Object.getOwnPropertyDescriptor(Function.prototype,"toString"),bt=Object.getOwnPropertyDescriptor(Function.prototype.toString,"name"),$t=(t,e,i)=>{const n=""===i?"":`with ${i.trim()}() `,s=mt.bind(null,n,e.toString());Object.defineProperty(s,"name",bt),Object.defineProperty(t,"toString",{...yt,value:s})};const _t=(t,e={})=>{if("function"!=typeof t)throw new TypeError(`Expected the first argument to be a function, got \`${typeof t}\``);const{wait:i=0,maxWait:n=Number.POSITIVE_INFINITY,before:s=!1,after:o=!0}=e;if(!s&&!o)throw new Error("Both `before` and `after` are false, function wouldn't be called.");let a,r,l;const c=function(...e){const c=this,d=()=>{r=void 0,a&&(clearTimeout(a),a=void 0),o&&(l=t.apply(c,e))},h=s&&!a;return clearTimeout(a),a=setTimeout((()=>{a=void 0,r&&(clearTimeout(r),r=void 0),o&&(l=t.apply(c,e))}),i),n>0&&n!==Number.POSITIVE_INFINITY&&!r&&(r=setTimeout(d,n)),h&&(l=t.apply(c,e)),l};return function(t,e,{ignoreNonConfigurable:i=!1}={}){const{name:n}=t;for(const n of Reflect.ownKeys(e))ft(t,e,n,i);gt(t,e),$t(t,e,n)}(c,t),c.cancel=()=>{a&&(clearTimeout(a),a=void 0),r&&(clearTimeout(r),r=void 0)},c};function wt(t,{decimals:e=1,fallback:i="N/A"}={}){return null===t||""===t||["boolean","undefined"].includes(typeof t)?i:Number(t).toFixed(e)}function xt({header:t,toggleEntityChanged:e,entity:i,openEntityPopover:n}){var s,o;if(!1===t)return R;const a=i.attributes.hvac_action||i.state;let r=t.icon;"object"==typeof t.icon&&(r=null!==(s=null==r?void 0:r[a])&&void 0!==s&&s);const l=null!==(o=null==t?void 0:t.name)&&void 0!==o&&o;return H`<header><div style="display:flex" class="clickable" @click="${()=>n()}">${function(t){return t?H`<ha-icon class="header__icon" .icon="${t}"></ha-icon>`:R}(r)} ${function(t){return t?H`<h2 class="header__title">${t}</h2>`:R}(l)}</div>${function(t,e){if(0===t.length)return R;const i=t.map((({icon:t,hide_inactive:i,state:n})=>H`<ha-icon class="fault-icon ${"on"===n.state?"active":i?" hide":""}" icon="${t||n.attributes.icon}" @click="${()=>e(n.entity_id)}"></ha-icon>`));return H`<div class="faults">${i}</div>`}(t.faults,n)} ${function(t,e,i){var n;return t?H`<div style="margin-left:auto"><span class="clickable toggle-label" @click="${()=>e(t.entity.entity_id)}">${t.label}</span><ha-switch .checked="${"on"===(null===(n=t.entity)||void 0===n?void 0:n.state)}" @change="${i}"></ha-switch></div>`:R}(t.toggle,n,e)}</header>`}"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self&&self;var At,St,Et=(At=function(t,e){!function(t){function e(t){var i,n,s=new Error(t);return i=s,n=e.prototype,Object.setPrototypeOf?Object.setPrototypeOf(i,n):i.__proto__=n,s}function i(t,i,n){var s=i.slice(0,n).split(/\n/),o=s.length,a=s[o-1].length+1;throw e(t+=" at line "+o+" col "+a+":\n\n  "+i.split(/\n/)[o-1]+"\n  "+Array(a).join(" ")+"^")}e.prototype=Object.create(Error.prototype,{name:{value:"Squirrelly Error",enumerable:!1}});var n=new Function("return this")().Promise,s=!1;try{s=new Function("return (async function(){}).constructor")()}catch(t){if(!(t instanceof SyntaxError))throw t}function o(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function a(t,e,i){for(var n in e)o(e,n)&&(null==e[n]||"object"!=typeof e[n]||"storage"!==n&&"prefixes"!==n||i?t[n]=e[n]:t[n]=a({},e[n]));return t}var r=/^async +/,l=/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})*}|(?!\${)[^\\`])*`/g,c=/'(?:\\[\s\w"'\\`]|[^\n\r'\\])*?'/g,d=/"(?:\\[\s\w"'\\`]|[^\n\r"\\])*?"/g,h=/[.*+\-?^${}()|[\]\\]/g;function u(t){return h.test(t)?t.replace(h,"\\$&"):t}function p(t,n){n.rmWhitespace&&(t=t.replace(/[\r\n]+/g,"\n").replace(/^\s+|\s+$/gm,"")),l.lastIndex=0,c.lastIndex=0,d.lastIndex=0;var s=n.prefixes,o=[s.h,s.b,s.i,s.r,s.c,s.e].reduce((function(t,e){return t&&e?t+"|"+u(e):e?u(e):t}),""),a=new RegExp("([|()]|=>)|('|\"|`|\\/\\*)|\\s*((\\/)?(-|_)?"+u(n.tags[1])+")","g"),h=new RegExp("([^]*?)"+u(n.tags[0])+"(-|_)?\\s*("+o+")?\\s*","g"),p=0,f=!1;function v(e,s){var o,u={f:[]},v=0,g="c";function m(e){var s=t.slice(p,e),o=s.trim();if("f"===g)"safe"===o?u.raw=!0:n.async&&r.test(o)?(o=o.replace(r,""),u.f.push([o,"",!0])):u.f.push([o,""]);else if("fp"===g)u.f[u.f.length-1][1]+=o;else if("err"===g){if(o){var a=s.search(/\S/);i("invalid syntax",t,p+a)}}else u[g]=o;p=e+1}for("h"===s||"b"===s||"c"===s?g="n":"r"===s&&(u.raw=!0,s="i"),a.lastIndex=p;null!==(o=a.exec(t));){var y=o[1],b=o[2],$=o[3],_=o[4],w=o[5],x=o.index;if(y)"("===y?(0===v&&("n"===g?(m(x),g="p"):"f"===g&&(m(x),g="fp")),v++):")"===y?0==--v&&"c"!==g&&(m(x),g="err"):0===v&&"|"===y?(m(x),g="f"):"=>"===y&&(m(x),p+=1,g="res");else if(b)if("/*"===b){var A=t.indexOf("*/",a.lastIndex);-1===A&&i("unclosed comment",t,o.index),a.lastIndex=A+2}else"'"===b?(c.lastIndex=o.index,c.exec(t)?a.lastIndex=c.lastIndex:i("unclosed string",t,o.index)):'"'===b?(d.lastIndex=o.index,d.exec(t)?a.lastIndex=d.lastIndex:i("unclosed string",t,o.index)):"`"===b&&(l.lastIndex=o.index,l.exec(t)?a.lastIndex=l.lastIndex:i("unclosed string",t,o.index));else if($)return m(x),p=x+o[0].length,h.lastIndex=p,f=w,_&&"h"===s&&(s="s"),u.t=s,u}return i("unclosed tag",t,e),u}var g=function o(a,l){a.b=[],a.d=[];var c,d=!1,u=[];function g(t,e){t&&(t=function(t,e,i,n){var s,o;return"string"==typeof e.autoTrim?s=o=e.autoTrim:Array.isArray(e.autoTrim)&&(s=e.autoTrim[1],o=e.autoTrim[0]),(i||!1===i)&&(s=i),(n||!1===n)&&(o=n),"slurp"===s&&"slurp"===o?t.trim():("_"===s||"slurp"===s?t=String.prototype.trimLeft?t.trimLeft():t.replace(/^[\s\uFEFF\xA0]+/,""):"-"!==s&&"nl"!==s||(t=t.replace(/^(?:\n|\r|\r\n)/,"")),"_"===o||"slurp"===o?t=String.prototype.trimRight?t.trimRight():t.replace(/[\s\uFEFF\xA0]+$/,""):"-"!==o&&"nl"!==o||(t=t.replace(/(?:\n|\r|\r\n)$/,"")),t)}(t,n,f,e))&&(t=t.replace(/\\|'/g,"\\$&").replace(/\r\n|\n|\r/g,"\\n"),u.push(t))}for(;null!==(c=h.exec(t));){var m,y=c[1],b=c[2],$=c[3]||"";for(var _ in s)if(s[_]===$){m=_;break}g(y,b),p=c.index+c[0].length,m||i("unrecognized tag type: "+$,t,p);var w=v(c.index,m),x=w.t;if("h"===x){var A=w.n||"";n.async&&r.test(A)&&(w.a=!0,w.n=A.replace(r,"")),w=o(w),u.push(w)}else if("c"===x){if(a.n===w.n)return d?(d.d=u,a.b.push(d)):a.d=u,a;i("Helper start and end don't match",t,c.index+c[0].length)}else if("b"===x){d?(d.d=u,a.b.push(d)):a.d=u;var S=w.n||"";n.async&&r.test(S)&&(w.a=!0,w.n=S.replace(r,"")),d=w,u=[]}else if("s"===x){var E=w.n||"";n.async&&r.test(E)&&(w.a=!0,w.n=E.replace(r,"")),u.push(w)}else u.push(w)}if(!l)throw e('unclosed helper "'+a.n+'"');return g(t.slice(p,t.length),!1),a.d=u,a}({f:[]},!0);if(n.plugins)for(var m=0;m<n.plugins.length;m++){var y=n.plugins[m];y.processAST&&(g.d=y.processAST(g.d,n))}return g.d}function f(t,e){var i=p(t,e),n="var tR='';"+(e.useWith?"with("+e.varName+"||{}){":"")+b(i,e)+"if(cb){cb(null,tR)} return tR"+(e.useWith?"}":"");if(e.plugins)for(var s=0;s<e.plugins.length;s++){var o=e.plugins[s];o.processFnString&&(n=o.processFnString(n,e))}return n}function v(t,e){for(var i=0;i<e.length;i++){var n=e[i][0],s=e[i][1];t=(e[i][2]?"await ":"")+"c.l('F','"+n+"')("+t,s&&(t+=","+s),t+=")"}return t}function g(t,e,i,n,s,o){var a="{exec:"+(s?"async ":"")+y(i,e,t)+",params:["+n+"]";return o&&(a+=",name:'"+o+"'"),s&&(a+=",async:true"),a+"}"}function m(t,e){for(var i="[",n=0;n<t.length;n++){var s=t[n];i+=g(e,s.res||"",s.d,s.p||"",s.a,s.n),n<t.length&&(i+=",")}return i+"]"}function y(t,e,i){return"function("+e+"){var tR='';"+b(t,i)+"return tR}"}function b(t,e){for(var i=0,n=t.length,s="";i<n;i++){var o=t[i];if("string"==typeof o)s+="tR+='"+o+"';";else{var a=o.t,r=o.c||"",l=o.f,c=o.n||"",d=o.p||"",h=o.res||"",u=o.b,p=!!o.a;if("i"===a){e.defaultFilter&&(r="c.l('F','"+e.defaultFilter+"')("+r+")");var f=v(r,l);!o.raw&&e.autoEscape&&(f="c.l('F','e')("+f+")"),s+="tR+="+f+";"}else if("h"===a)if(e.storage.nativeHelpers.get(c))s+=e.storage.nativeHelpers.get(c)(o,e);else{var y=(p?"await ":"")+"c.l('H','"+c+"')("+g(e,h,o.d,d,p);y+=u?","+m(u,e):",[]",s+="tR+="+v(y+=",c)",l)+";"}else"s"===a?s+="tR+="+v((p?"await ":"")+"c.l('H','"+c+"')({params:["+d+"]},[],c)",l)+";":"e"===a&&(s+=r+"\n")}}return s}var $=function(){function t(t){this.cache=t}return t.prototype.define=function(t,e){this.cache[t]=e},t.prototype.get=function(t){return this.cache[t]},t.prototype.remove=function(t){delete this.cache[t]},t.prototype.reset=function(){this.cache={}},t.prototype.load=function(t){a(this.cache,t,!0)},t}();function _(t,i,n,s){if(i&&i.length>0)throw e((s?"Native":"")+"Helper '"+t+"' doesn't accept blocks");if(n&&n.length>0)throw e((s?"Native":"")+"Helper '"+t+"' doesn't accept filters")}var w={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"};function x(t){return w[t]}var A=new $({}),S=new $({each:function(t,e){var i="",n=t.params[0];if(_("each",e,!1),t.async)return new Promise((function(e){!function t(e,i,n,s,o){n(e[i],i).then((function(a){s+=a,i===e.length-1?o(s):t(e,i+1,n,s,o)}))}(n,0,t.exec,i,e)}));for(var s=0;s<n.length;s++)i+=t.exec(n[s],s);return i},foreach:function(t,e){var i=t.params[0];if(_("foreach",e,!1),t.async)return new Promise((function(e){!function t(e,i,n,s,o,a){s(i[n],e[i[n]]).then((function(r){o+=r,n===i.length-1?a(o):t(e,i,n+1,s,o,a)}))}(i,Object.keys(i),0,t.exec,"",e)}));var n="";for(var s in i)o(i,s)&&(n+=t.exec(s,i[s]));return n},include:function(t,i,n){_("include",i,!1);var s=n.storage.templates.get(t.params[0]);if(!s)throw e('Could not fetch template "'+t.params[0]+'"');return s(t.params[1],n)},extends:function(t,i,n){var s=t.params[1]||{};s.content=t.exec();for(var o=0;o<i.length;o++){var a=i[o];s[a.name]=a.exec()}var r=n.storage.templates.get(t.params[0]);if(!r)throw e('Could not fetch template "'+t.params[0]+'"');return r(s,n)},useScope:function(t,e){return _("useScope",e,!1),t.exec(t.params[0])}}),E=new $({if:function(t,e){_("if",!1,t.f,!0);var i="if("+t.p+"){"+b(t.d,e)+"}";if(t.b)for(var n=0;n<t.b.length;n++){var s=t.b[n];"else"===s.n?i+="else{"+b(s.d,e)+"}":"elif"===s.n&&(i+="else if("+s.p+"){"+b(s.d,e)+"}")}return i},try:function(t,i){if(_("try",!1,t.f,!0),!t.b||1!==t.b.length||"catch"!==t.b[0].n)throw e("native helper 'try' only accepts 1 block, 'catch'");var n="try{"+b(t.d,i)+"}",s=t.b[0];return n+"catch"+(s.res?"("+s.res+")":"")+"{"+b(s.d,i)+"}"},block:function(t,e){return _("block",t.b,t.f,!0),"if(!"+e.varName+"["+t.p+"]){tR+=("+y(t.d,"",e)+")()}else{tR+="+e.varName+"["+t.p+"]}"}}),O=new $({e:function(t){var e=String(t);return/[&<>"']/.test(e)?e.replace(/[&<>"']/g,x):e}}),k={varName:"it",autoTrim:[!1,"nl"],autoEscape:!0,defaultFilter:!1,tags:["{{","}}"],l:function(t,i){if("H"===t){var n=this.storage.helpers.get(i);if(n)return n;throw e("Can't find helper '"+i+"'")}if("F"===t){var s=this.storage.filters.get(i);if(s)return s;throw e("Can't find filter '"+i+"'")}},async:!1,storage:{helpers:S,nativeHelpers:E,filters:O,templates:A},prefixes:{h:"@",b:"#",i:"",r:"*",c:"/",e:"!"},cache:!1,plugins:[],useWith:!1};function C(t,e){var i={};return a(i,k),e&&a(i,e),t&&a(i,t),i.l.bind(i),i}function j(t,i){var n=C(i||{}),o=Function;if(n.async){if(!s)throw e("This environment doesn't support async/await");o=s}try{return new o(n.varName,"c","cb",f(t,n))}catch(i){throw i instanceof SyntaxError?e("Bad template syntax\n\n"+i.message+"\n"+Array(i.message.length+1).join("=")+"\n"+f(t,n)):i}}function z(t,e){var i;return e.cache&&e.name&&e.storage.templates.get(e.name)?e.storage.templates.get(e.name):(i="function"==typeof t?t:j(t,e),e.cache&&e.name&&e.storage.templates.define(e.name,i),i)}k.l.bind(k),t.compile=j,t.compileScope=b,t.compileScopeIntoFunction=y,t.compileToString=f,t.defaultConfig=k,t.filters=O,t.getConfig=C,t.helpers=S,t.nativeHelpers=E,t.parse=p,t.render=function(t,i,s,o){var a=C(s||{});if(!a.async)return z(t,a)(i,a);if(!o){if("function"==typeof n)return new n((function(e,n){try{e(z(t,a)(i,a))}catch(t){n(t)}}));throw e("Please provide a callback function, this env doesn't support Promises")}try{z(t,a)(i,a,o)}catch(t){return o(t)}},t.templates=A,Object.defineProperty(t,"__esModule",{value:!0})}(e)},At(St={exports:{}},St.exports),St.exports);const Ot=2;class kt{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,e,i){this._$Ct=t,this._$AM=e,this._$Ci=i}_$AS(t,e){return this.update(t,e)}update(t,e){return this.render(...e)}}class Ct extends kt{constructor(t){if(super(t),this.it=R,t.type!==Ot)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===R||null==t)return this._t=void 0,this.it=t;if(t===I)return t;if("string"!=typeof t)throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const e=[t];return e.raw=e,this._t={_$litType$:this.constructor.resultType,strings:e,values:[]}}}Ct.directiveName="unsafeHTML",Ct.resultType=1;const jt=(t=>(...e)=>({_$litDirective$:t,values:e}))(Ct),zt=t=>`<ha-icon icon="${t}"></ha-icon>`;function Pt(t,e){var i,n;const{type:s,labels:o}=null!==(n=null===(i=null==t?void 0:t.layout)||void 0===i?void 0:i.sensors)&&void 0!==n?n:{type:"table",labels:!0};return H`<div class="sensors ${[o?"with-labels":"without-labels","list"===s?"as-list":"as-table"].join(" ")}">${e}</div>`}function Tt({hide:t=!1,hass:e,state:i,details:n,localize:s,openEntityPopover:o}){var a,r;if(t||void 0===i)return;const{type:l,heading:c,icon:d,unit:h,decimals:u}=n;let p;if(process.env.DEBUG&&console.log("ST: infoItem",{state:i,details:n}),"relativetime"===l)p=H`<div class="sensor-value"><ha-relative-time .datetime="${i}" .hass="${e}"></ha-relative-time></div>`;else if("object"==typeof i){const[t]=i.entity_id.split("."),e=["component",t,"state",null!==(r=null===(a=i.attributes)||void 0===a?void 0:a.device_class)&&void 0!==r?r:"_",""].join(".");let n=s(i.state,e);"number"==typeof u&&(n=wt(n,{decimals:u})),p=H`<div class="sensor-value clickable" @click="${()=>o(i.entity_id)}">${n} ${h||i.attributes.unit_of_measurement}</div>`}else{let t="number"==typeof u?wt(i,{decimals:u}):i;p=H`<div class="sensor-value">${t}${h}</div>`}if(!1===c)return p;const f=d?H`<ha-icon icon="${d}"></ha-icon>`:H`${c}:`;return H`<div class="sensor-heading">${f}</div>${p}`}var Nt;function Ht({state:t,mode:e,modeOptions:i,localize:n,setMode:s}){var o;const{type:a,hide_when_off:r,mode:l="none",list:c,name:d}=e;if(0===c.length||r&&t===Nt.OFF)return null;let h=`state_attributes.climate.${a}_mode.`;"hvac"===a&&(h="component.climate.state._.");const u=d||n(`ui.card.climate.${"hvac"==a?"operation":`${a}_mode`}`),p=null===(o=null==i?void 0:i.headings)||void 0===o||o;return H`<div class="modes ${p?"heading":""}">${p?H`<div class="mode-title">${u}</div>`:""} ${c.map((({value:t,icon:e,name:o})=>H`<div class="mode-item ${t===l?"active "+l:""}" @click="${()=>s(a,t)}">${(t=>t?!1===(null==i?void 0:i.icons)?null:H`<ha-icon class="mode-icon" .icon="${t}"></ha-icon>`:null)(e)} ${(t=>!1===t||!1===(null==i?void 0:i.names)?null:n(t,h))(o)}</div>`))}</div>`}Et.defaultConfig.autoEscape=!1,Et.filters.define("icon",zt),Et.filters.define("join",((t,e=", ")=>t.join(e))),Et.filters.define("css",((t,e)=>`<span style="${Object.entries(e).reduce(((t,[e,i])=>`${t}${e}:${i};`),"")}">${t}</span>`)),Et.filters.define("debug",(t=>{try{return JSON.stringify(t)}catch(e){return`Not able to read valid JSON object from: ${t}`}})),function(t){t.OFF="off",t.HEAT="heat",t.COOL="cool",t.HEAT_COOL="heat_cool",t.AUTO="auto",t.DRY="dry",t.FAN_ONLY="fan_only"}(Nt||(Nt={}));const It={auto:"mdi:radiator",cooling:"mdi:snowflake",fan:"mdi:fan",heating:"mdi:radiator",idle:"mdi:radiator-disabled",off:"mdi:radiator-off"},Rt={auto:"hass:autorenew",cool:"hass:snowflake",dry:"hass:water-percent",fan_only:"hass:fan",heat_cool:"hass:autorenew",heat:"hass:fire",off:"hass:power"};function Ut(t,e){var i;const n=e.states[t.entity];let s="";return s=!0===(null==t?void 0:t.name)?n.attributes.name:null!==(i=null==t?void 0:t.name)&&void 0!==i?i:"",{entity:n,label:s}}function Mt(t,e){return Array.isArray(t)?t.map((t=>{var{entity:i}=t,n=ut(t,["entity"]);return Object.assign(Object.assign({},n),{state:e.states[i],entity:i})})):[]}const Vt="dual",Ft="single";const Lt="dual";function Dt(t,e){if(!1===t)return{};if(t){return Object.keys(t).reduce(((i,n)=>{const s=t[n];return(null==s?void 0:s.hide)?i:Object.assign(Object.assign({},i),{[n]:null==e?void 0:e[n]})}),{})}const i=function(t){return"number"==typeof t.target_temp_high&&"number"==typeof t.target_temp_low?Vt:Ft}(e);return i===Lt?{target_temp_low:e.target_temp_low,target_temp_high:e.target_temp_high}:{temperature:e.temperature}}var Bt;!function(t){t.HVAC="hvac",t.FAN="fan",t.PRESET="preset",t.SWING="swing"}(Bt||(Bt={}));const Wt=Object.values(Bt),qt=[Bt.HVAC,Bt.PRESET],Jt="hass:chevron-up",Gt="hass:chevron-down",Kt="mdi:plus",Yt="mdi:minus",Zt={temperature:!1,state:!1};function Qt(t,e,i={}){return e[`${t}_modes`].filter((t=>function(t,e){var i;if("object"==typeof e[t])return!1!==e[t].include;return null===(i=null==e?void 0:e[t])||void 0===i||i}(t,i))).map((t=>{const e="object"==typeof i[t]?i[t]:{};return Object.assign({icon:Rt[t],value:t,name:t},e)}))}class Xt extends tt{constructor(){super(...arguments),this.modes=[],this._hass={},this.sensors=[],this.showSensors=!0,this.name="",this.stepSize=.5,this._values={},this._updatingValues=!1,this._hide=Zt,this._compactIdle=!1,this._debouncedSetTemperature=_t((t=>{const{domain:e,service:i,data:n={}}=this.service;this._hass.callService(e,i,Object.assign(Object.assign({entity_id:this.config.entity},n),t))}),{wait:500}),this.localize=(t,e="")=>{const i=this._hass.selectedLanguage||this._hass.language||"en",n=`${e}${t}`;return this._hass.resources&&this._hass.resources[i]&&this._hass.resources[i][n]||t},this.toggleEntityChanged=t=>{var e,i,n,s;if(!this.header||!(null===(e=null==this?void 0:this.header)||void 0===e?void 0:e.toggle))return;const o=t.target;this._hass.callService("homeassistant",o.checked?"turn_on":"turn_off",{entity_id:null===(s=null===(n=null===(i=this.header)||void 0===i?void 0:i.toggle)||void 0===n?void 0:n.entity)||void 0===s?void 0:s.entity_id})},this.setMode=(t,e)=>{t&&e?(this._hass.callService("climate",`set_${t}_mode`,{entity_id:this.config.entity,[`${t}_mode`]:e}),at(this,"haptic","light")):at(this,"haptic","failure")},this.openEntityPopover=(t=null)=>{at(this,"hass-more-info",{entityId:t||this.config.entity})}}static get styles(){return ot}static getConfigElement(){return window.document.createElement(`${t}-editor`)}setConfig(t){this.config=Object.assign({decimals:1},t)}updated(){super.connectedCallback();const t=Array.from(this.renderRoot.querySelectorAll("[with-hass]"));for(const e of Array.from(t))Array.from(e.attributes).forEach((t=>{t.name.startsWith("fwd-")&&(e[t.name.replace("fwd-","")]=t.value)})),e.hass=this._hass}set hass(t){var e,i,n,s,o,a;if(!this.config.entity)return;const r=t.states[this.config.entity];if(void 0===typeof r||!r)return;if(this._hass=t,this.entity!==r&&(this.entity=r),this.header=function(t,e,i){if(!1===t)return!1;let n;n="string"==typeof(null==t?void 0:t.name)?t.name:!1!==(null==t?void 0:t.name)&&e.attributes.friendly_name;let s=e.attributes.hvac_action?It:Rt;return void 0!==(null==t?void 0:t.icon)&&(s=t.icon),{name:n,icon:s,toggle:(null==t?void 0:t.toggle)?Ut(t.toggle,i):null,faults:Mt(null==t?void 0:t.faults,i)}}(this.config.header,r,t),this.config.compact){const n="object"==typeof this.config.compact&&this.config.compact.action_entity||this.config.entity;this._compactIdle="idle"===(null===(i=null===(e=t.states[n])||void 0===e?void 0:e.attributes)||void 0===i?void 0:i.hvac_action)}this.service=null!==(s=null===(n=this.config)||void 0===n?void 0:n.service)&&void 0!==s&&s||{domain:"climate",service:"set_temperature"};const l=r.attributes;let c=Dt(null!==(a=null===(o=this.config)||void 0===o?void 0:o.setpoints)&&void 0!==a?a:null,l);this._updatingValues&&function(t,e){const i=Object.keys(t);return i.length===Object.keys(e).length&&!i.some((i=>(null==t?void 0:t[i])!==(null==e?void 0:e[i])))}(c,this._values)?this._updatingValues=!1:this._updatingValues||(this._values=c);const d=t=>Wt.includes(t)&&l[`${t}_modes`],h=t=>t.filter(d).map((t=>({type:t,hide_when_off:!1,list:Qt(t,l)})));let u=[];if(!1===this.config.control)u=[];else if(Array.isArray(this.config.control))u=h(this.config.control);else if("object"==typeof this.config.control){const t=Object.entries(this.config.control);u=t.length>0?t.filter((([t])=>d(t))).map((([t,e])=>{const{_name:i,_hide_when_off:n}=e,s=ut(e,["_name","_hide_when_off"]);return{type:t,hide_when_off:n,name:i,list:Qt(t,l,s)}})):h(qt)}else u=h(qt);if(this.modes=u.map((t=>{if(t.type===Bt.HVAC){const e=[],i=Object.values(Nt);return t.list.forEach((t=>{const n=i.indexOf(t.value);e[n]=t})),Object.assign(Object.assign({},t),{list:e,mode:r.state})}const e=l[`${t.type}_mode`];return Object.assign(Object.assign({},t),{mode:e})})),this.config.step_size&&(this.stepSize=+this.config.step_size),this.config.hide&&(this._hide=Object.assign(Object.assign({},this._hide),this.config.hide)),!1===this.config.sensors)this.showSensors=!1;else if(3===this.config.version){this.sensors=[];const t=this.config.sensors.map(((t,e)=>{var i,n;const s=null!==(i=null==t?void 0:t.entity)&&void 0!==i?i:this.config.entity;let o=this.entity;return(null==t?void 0:t.entity)&&(o=this._hass.states[t.entity]),{id:null!==(n=null==t?void 0:t.id)&&void 0!==n?n:String(e),label:null==t?void 0:t.label,template:t.template,show:!1!==(null==t?void 0:t.show),entityId:s,context:o}})),e=t.map((t=>t.id)),i=[];e.includes("state")||i.push({id:"state",label:"{{ui.operation}}",template:"{{state.text}}",entityId:this.config.entity,context:this.entity}),e.includes("temperature")||i.push({id:"temperature",label:"{{ui.currently}}",template:"{{current_temperature|formatNumber}}",entityId:this.config.entity,context:this.entity}),this.sensors=[...i,...t]}else this.config.sensors&&(this.sensors=this.config.sensors.map((e=>{var i,{name:n,entity:s,attribute:o,unit:a=""}=e,r=ut(e,["name","entity","attribute","unit"]);let l;const c=[n];return s?(l=t.states[s],c.push(null===(i=null==l?void 0:l.attributes)||void 0===i?void 0:i.friendly_name),o&&(l=l.attributes[o])):o&&o in this.entity.attributes&&(l=this.entity.attributes[o],c.push(o)),c.push(s),Object.assign(Object.assign({},r),{name:c.find((t=>!!t)),state:l,entity:s,unit:a})})))}render({_hide:t,_values:e,_updatingValues:i,config:n,entity:s}=this){var o,a,r;const l=[];if(this.stepSize<1&&0===this.config.decimals&&l.push(H`<hui-warning>Decimals is set to 0 and step_size is lower than 1. Decrementing a setpoint will likely not work.</hui-warning>`),!s)return H`<hui-warning>Entity not available: ${n.entity}</hui-warning>`;const{attributes:{min_temp:c=null,max_temp:d=null,hvac_action:h}}=s,u=this.getUnit(),p=null!==(r=null===(a=null===(o=this.config)||void 0===o?void 0:o.layout)||void 0===a?void 0:a.step)&&void 0!==r?r:"column",f="row"===p,v="object"==typeof this.config.compact&&Number(this.config.compact.stepper_pull)||0,g=[!this.header&&"no-header",h,this.config.compact&&"compact",this.config.compact&&this._compactIdle&&"compact-idle"].filter((t=>!!t));let m;return 3===this.config.version?(m=this.sensors.filter((t=>!1!==t.show)).map((t=>function({context:t,entityId:e,template:i="{{state.text}}",label:n,hass:s,variables:o={},config:a,localize:r,openEntityPopover:l}){var c,d,h,u;const{state:p,attributes:f}=t,[v]=e.split("."),g=s.selectedLanguage||s.language,m="ui.card.climate.",y=Object.entries(null!==(d=null===(c=s.resources)||void 0===c?void 0:c[g])&&void 0!==d?d:{}).reduce(((t,[e,i])=>(e.startsWith(m)&&(t[e.replace(m,"")]=i),t)),{}),b=Object.assign(Object.assign({},f),{state:{raw:p,text:r(p,`component.${v}.state._.`)},ui:y,v:o});Et.filters.define("formatNumber",((t,e={decimals:a.decimals})=>String(wt(t,e)))),Et.filters.define("relativetime",((t,e={})=>`<ha-relative-time fwd-datetime=${t} with-hass></ha-relative-time>`)),Et.filters.define("translate",((t,e="")=>r(t,e||"climate"!==v&&"humidifier"!==v?e:`state_attributes.${v}.${t}`)));const $=t=>Et.render(t,b,{useWith:!0}),_=$(i);if(!1===n||!1===(null===(u=null===(h=null==a?void 0:a.layout)||void 0===h?void 0:h.sensors)||void 0===u?void 0:u.labels))return H`<div class="sensor-value">${jt(_)}</div>`;const w=n||"{{friendly_name}}",x=w.match(/^(mdi|hass):.*/)?zt(w):$(w);return H`<div class="sensor-heading">${jt(x)}</div><div class="sensor-value">${jt(_)}</div>`}(Object.assign(Object.assign({},t),{variables:this.config.variables,hass:this._hass,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover})))),m=Pt(this.config,m)):m=this.showSensors?function({_hide:t,entity:e,unit:i,hass:n,sensors:s,config:o,localize:a,openEntityPopover:r}){var l,c,d,h,u,p,f;const{state:v,attributes:{hvac_action:g,current_temperature:m}}=e,y=null===(d=null===(c=null===(l=null==o?void 0:o.layout)||void 0===l?void 0:l.sensors)||void 0===c?void 0:c.labels)||void 0===d||d;let b=a(v,"component.climate.state._.");g&&(b=[a(g,"state_attributes.climate.hvac_action."),` (${b})`].join(""));const $=[Tt({hide:t.temperature,state:`${wt(m,o)}${i||""}`,hass:n,details:{heading:!!y&&(null!==(u=null===(h=null==o?void 0:o.label)||void 0===h?void 0:h.temperature)&&void 0!==u?u:a("ui.card.climate.currently"))}}),Tt({hide:t.state,state:b,hass:n,details:{heading:!!y&&(null!==(f=null===(p=null==o?void 0:o.label)||void 0===p?void 0:p.state)&&void 0!==f?f:a("ui.panel.lovelace.editor.card.generic.state"))}}),...s.map((t=>{var{name:e,state:i}=t,s=ut(t,["name","state"]);return Tt({state:i,hass:n,localize:a,openEntityPopover:r,details:Object.assign(Object.assign({},s),{heading:y&&e})})}))||null].filter((t=>null!==t));return Pt(o,$)}({_hide:this._hide,unit:u,hass:this._hass,entity:this.entity,sensors:this.sensors,config:this.config,localize:this.localize,openEntityPopover:this.openEntityPopover}):"",H`<ha-card class="${g.join(" ")}" style="${v?`--st-compact-stepper-pull: ${v}px`:R}">${l} ${xt({header:this.header,toggleEntityChanged:this.toggleEntityChanged,entity:this.entity,openEntityPopover:this.openEntityPopover})}<section class="body">${m} ${Object.entries(e).map((([t,e])=>{const s=["string","number"].includes(typeof e),o=!1!==u&&s;return H`<div class="current-wrapper ${p}"><ha-icon-button ?disabled="${null!==d&&e>=d}" class="thermostat-trigger" @click="${()=>this.setTemperature(this.stepSize,t)}"><ha-icon .icon="${f?Kt:Jt}"></ha-icon></ha-icon-button><h3 @click="${()=>this.openEntityPopover()}" class="current--value ${i?"updating":R}">${wt(e,n)} ${o?H`<span class="current--unit">${u}</span>`:R}</h3><ha-icon-button ?disabled="${null!==c&&e<=c}" class="thermostat-trigger" @click="${()=>this.setTemperature(-this.stepSize,t)}"><ha-icon .icon="${f?Yt:Gt}"></ha-icon></ha-icon-button></div>`}))}</section>${this.modes.map((t=>{var e,i,n;return Ht({state:s.state,mode:t,localize:this.localize,modeOptions:null!==(n=null===(i=null===(e=this.config)||void 0===e?void 0:e.layout)||void 0===i?void 0:i.mode)&&void 0!==n?n:{},setMode:this.setMode})}))}</ha-card>`}setTemperature(t,e){this._updatingValues=!0;const i=this._values[e],n=Number(i)+t,{decimals:s}=this.config;this._values=Object.assign(Object.assign({},this._values),{[e]:+wt(n,{decimals:s})}),this._debouncedSetTemperature(this._values)}getCardSize(){return 3}getUnit(){var t,e,i,n;return["boolean","string"].includes(typeof this.config.unit)?null===(t=this.config)||void 0===t?void 0:t.unit:null!==(n=null===(i=null===(e=this._hass.config)||void 0===e?void 0:e.unit_system)||void 0===i?void 0:i.temperature)&&void 0!==n&&n}}pt([nt()],Xt.prototype,"config",void 0),pt([nt()],Xt.prototype,"header",void 0),pt([nt()],Xt.prototype,"service",void 0),pt([nt()],Xt.prototype,"modes",void 0),pt([nt()],Xt.prototype,"entity",void 0),pt([nt()],Xt.prototype,"sensors",void 0),pt([nt()],Xt.prototype,"showSensors",void 0),pt([nt()],Xt.prototype,"name",void 0),pt([nt({type:Object})],Xt.prototype,"_values",void 0),pt([nt()],Xt.prototype,"_updatingValues",void 0),pt([nt()],Xt.prototype,"_hide",void 0),pt([nt()],Xt.prototype,"_compactIdle",void 0),customElements.define(t,Xt),customElements.define(`${t}-editor`,class extends tt{static get styles(){return ot}static get properties(){return{hass:{},config:{}}}static getStubConfig(){return Object.assign({},ht)}setConfig(t){this.config=t||Object.assign({},ht)}_openLink(){window.open("https://github.com/nervetattoo/simple-thermostat/blob/master/README.md")}render(){var t,e,i,n,s,o,a,r,l,c,d,h,u,p,f,v,g,m,y,b,$,_,w,x,A;return this.hass?H`<div class="card-config"><div class="overall-config"><div class="side-by-side"><ha-entity-picker label="Entity (required)" .hass="${this.hass}" .value="${this.config.entity}" .configValue="${"entity"}" .includeDomains="${dt}" @change="${this.valueChanged}" allow-custom-entity></ha-entity-picker></div><ha-formfield label="Show header?"><ha-switch .checked="${!1!==this.config.header}" @change="${this.toggleHeader}"></ha-switch></ha-formfield><ha-formfield label="Show mode names?"><ha-switch .checked="${!1!==(null===(i=null===(e=null===(t=this.config)||void 0===t?void 0:t.layout)||void 0===e?void 0:e.mode)||void 0===i?void 0:i.names)}" .configValue="${"layout.mode.names"}" @change="${this.valueChanged}"></ha-switch></ha-formfield><ha-formfield label="Show mode icons?"><ha-switch .checked="${!1!==(null===(o=null===(s=null===(n=this.config)||void 0===n?void 0:n.layout)||void 0===s?void 0:s.mode)||void 0===o?void 0:o.icons)}" .configValue="${"layout.mode.icons"}" @change="${this.valueChanged}"></ha-switch></ha-formfield><ha-formfield label="Show mode headings?"><ha-switch .checked="${!1!==(null===(l=null===(r=null===(a=this.config)||void 0===a?void 0:a.layout)||void 0===r?void 0:r.mode)||void 0===l?void 0:l.headings)}" .configValue="${"layout.mode.headings"}" @change="${this.valueChanged}"></ha-switch></ha-formfield>${!1!==this.config.header?H`<div class="side-by-side"><ha-textfield label="Name (optional)" .value="${null!==(d=null===(c=this.config.header)||void 0===c?void 0:c.name)&&void 0!==d?d:""}" .configValue="${"header.name"}" @input="${this.valueChanged}"></ha-textfield><ha-icon-input label="Icon (optional)" .value="${null===(h=this.config.header)||void 0===h?void 0:h.icon}" .configValue="${"header.icon"}" @value-changed="${this.valueChanged}"></ha-icon-input></div><div class="side-by-side"><ha-entity-picker label="Toggle Entity (optional)" .hass="${this.hass}" .value="${null===(f=null===(p=null===(u=this.config)||void 0===u?void 0:u.header)||void 0===p?void 0:p.toggle)||void 0===f?void 0:f.entity}" .configValue="${"header.toggle.entity"}" @change="${this.valueChanged}" allow-custom-entity></ha-entity-picker><ha-textfield label="Toggle entity label" .value="${null!==(y=null===(m=null===(g=null===(v=this.config)||void 0===v?void 0:v.header)||void 0===g?void 0:g.toggle)||void 0===m?void 0:m.name)&&void 0!==y?y:""}" .configValue="${"header.toggle.name"}" @input="${this.valueChanged}"></ha-textfield></div>`:""}<div class="side-by-side"><ha-textfield label="Fallback Text (optional)" .value="${null!==(b=this.config.fallback)&&void 0!==b?b:""}" .configValue="${"fallback"}" @input="${this.valueChanged}"></ha-textfield></div><div class="side-by-side"><ha-select label="Decimals (optional)" .value="${String(null!==($=this.config.decimals)&&void 0!==$?$:"")}" .configValue="${"decimals"}" @selected="${this.valueChanged}" @closed="${t=>t.stopPropagation()}">${Object.values(rt).map((t=>H`<ha-list-item .value="${String(t)}">${t}</ha-list-item>`))}</ha-select><ha-textfield label="Unit (optional)" .value="${null!==(_=this.config.unit)&&void 0!==_?_:""}" .configValue="${"unit"}" @input="${this.valueChanged}"></ha-textfield></div><div class="side-by-side"><ha-select label="Step Layout (optional)" .value="${null!==(x=null===(w=this.config.layout)||void 0===w?void 0:w.step)&&void 0!==x?x:""}" .configValue="${"layout.step"}" @selected="${this.valueChanged}" @closed="${t=>t.stopPropagation()}">${Object.values(ct).map((t=>H`<ha-list-item .value="${t}">${t}</ha-list-item>`))}</ha-select><ha-select label="Step Size (optional)" .value="${String(null!==(A=this.config.step_size)&&void 0!==A?A:"")}" .configValue="${"step_size"}" @selected="${this.valueChanged}" @closed="${t=>t.stopPropagation()}">${Object.values(lt).map((t=>H`<ha-list-item .value="${String(t)}">${t}</ha-list-item>`))}</ha-select></div><div class="side-by-side"><mwc-button @click="${this._openLink}">Configuration Options</mwc-button>Settings for label, control, sensors, faults and hiding UI elements can only be configured in the code editor</div></div></div>`:H``}valueChanged(t){if(!this.config||!this.hass)return;const{target:e}=t,i=(n=this.config,JSON.parse(JSON.stringify(n)));var n;e.configValue&&(""===e.value?delete i[e.configValue]:function(t,e,i){const n=e.split(".");let s=t;for(;n.length-1;){var o=n.shift();s.hasOwnProperty(o)||(s[o]={}),s=s[o]}s[n[0]]=i}(i,e.configValue,void 0!==e.checked?e.checked:e.value)),at(this,"config-changed",{config:i})}toggleHeader(t){this.config.header=!!t.target.checked&&{},at(this,"config-changed",{config:this.config})}}),console.info(`%c${t}: 2.2.2`,"font-weight: bold"),window.customCards=window.customCards||[],window.customCards.push({type:t,name:"Simple Thermostat",preview:!1,description:"A different take on the thermostat card"});
