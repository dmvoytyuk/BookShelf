var Fe=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},qr={exports:{}};(function(t,e){(function(n,r){t.exports=r(n)})(typeof Fe<"u"?Fe:window||Fe.window||Fe.global,function(n){var r={},i="iziToast";document.querySelector("body");var s=!!/Mobi/.test(navigator.userAgent),o=/Chrome/.test(navigator.userAgent)&&/Google Inc/.test(navigator.vendor),l=typeof InstallTrigger<"u",u="ontouchstart"in document.documentElement,h=["bottomRight","bottomLeft","bottomCenter","topRight","topLeft","topCenter","center"],p={info:{color:"blue",icon:"ico-info"},success:{color:"green",icon:"ico-success"},warning:{color:"orange",icon:"ico-warning"},error:{color:"red",icon:"ico-error"},question:{color:"yellow",icon:"ico-question"}},f=568,T={};r.children={};var O={id:null,class:"",title:"",titleColor:"",titleSize:"",titleLineHeight:"",message:"",messageColor:"",messageSize:"",messageLineHeight:"",backgroundColor:"",theme:"light",color:"",icon:"",iconText:"",iconColor:"",iconUrl:null,image:"",imageWidth:50,maxWidth:null,zindex:null,layout:1,balloon:!1,close:!0,closeOnEscape:!1,closeOnClick:!1,displayMode:0,position:"bottomRight",target:"",targetFirst:!0,timeout:5e3,rtl:!1,animateInside:!0,drag:!0,pauseOnHover:!0,resetOnHover:!1,progressBar:!0,progressBarColor:"",progressBarEasing:"linear",overlay:!1,overlayClose:!1,overlayColor:"rgba(0, 0, 0, 0.6)",transitionIn:"fadeInUp",transitionOut:"fadeOut",transitionInMobile:"fadeInUp",transitionOutMobile:"fadeOutDown",buttons:{},inputs:{},onOpening:function(){},onOpened:function(){},onClosing:function(){},onClosed:function(){}};if("remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)}),typeof window.CustomEvent!="function"){var v=function(y,m){m=m||{bubbles:!1,cancelable:!1,detail:void 0};var a=document.createEvent("CustomEvent");return a.initCustomEvent(y,m.bubbles,m.cancelable,m.detail),a};v.prototype=window.Event.prototype,window.CustomEvent=v}var _=function(y,m,a){if(Object.prototype.toString.call(y)==="[object Object]")for(var c in y)Object.prototype.hasOwnProperty.call(y,c)&&m.call(a,y[c],c,y);else if(y)for(var E=0,I=y.length;E<I;E++)m.call(a,y[E],E,y)},C=function(y,m){var a={};return _(y,function(c,E){a[E]=y[E]}),_(m,function(c,E){a[E]=m[E]}),a},P=function(y){var m=document.createDocumentFragment(),a=document.createElement("div");for(a.innerHTML=y;a.firstChild;)m.appendChild(a.firstChild);return m},M=function(y){var m=btoa(encodeURIComponent(y));return m.replace(/=/g,"")},D=function(y){return y.substring(0,1)=="#"||y.substring(0,3)=="rgb"||y.substring(0,3)=="hsl"},de=function(y){try{return btoa(atob(y))==y}catch{return!1}},z=function(){return{move:function(y,m,a,c){var E,I=.3,g=180;c!==0&&(y.classList.add(i+"-dragged"),y.style.transform="translateX("+c+"px)",c>0?(E=(g-c)/g,E<I&&m.hide(C(a,{transitionOut:"fadeOutRight",transitionOutMobile:"fadeOutRight"}),y,"drag")):(E=(g+c)/g,E<I&&m.hide(C(a,{transitionOut:"fadeOutLeft",transitionOutMobile:"fadeOutLeft"}),y,"drag")),y.style.opacity=E,E<I&&((o||l)&&(y.style.left=c+"px"),y.parentNode.style.opacity=I,this.stopMoving(y,null)))},startMoving:function(y,m,a,c){c=c||window.event;var E=u?c.touches[0].clientX:c.clientX,I=y.style.transform.replace("px)","");I=I.replace("translateX(","");var g=E-I;a.transitionIn&&y.classList.remove(a.transitionIn),a.transitionInMobile&&y.classList.remove(a.transitionInMobile),y.style.transition="",u?document.ontouchmove=function(w){w.preventDefault(),w=w||window.event;var R=w.touches[0].clientX,N=R-g;z.move(y,m,a,N)}:document.onmousemove=function(w){w.preventDefault(),w=w||window.event;var R=w.clientX,N=R-g;z.move(y,m,a,N)}},stopMoving:function(y,m){u?document.ontouchmove=function(){}:document.onmousemove=function(){},y.style.opacity="",y.style.transform="",y.classList.contains(i+"-dragged")&&(y.classList.remove(i+"-dragged"),y.style.transition="transform 0.4s ease, opacity 0.4s ease",setTimeout(function(){y.style.transition=""},400))}}}();return r.setSetting=function(y,m,a){r.children[y][m]=a},r.getSetting=function(y,m){return r.children[y][m]},r.destroy=function(){_(document.querySelectorAll("."+i+"-overlay"),function(y,m){y.remove()}),_(document.querySelectorAll("."+i+"-wrapper"),function(y,m){y.remove()}),_(document.querySelectorAll("."+i),function(y,m){y.remove()}),this.children={},document.removeEventListener(i+"-opened",{},!1),document.removeEventListener(i+"-opening",{},!1),document.removeEventListener(i+"-closing",{},!1),document.removeEventListener(i+"-closed",{},!1),document.removeEventListener("keyup",{},!1),T={}},r.settings=function(y){r.destroy(),T=y,O=C(O,y||{})},_(p,function(y,m){r[m]=function(a){var c=C(T,a||{});c=C(y,c||{}),this.show(c)}}),r.progress=function(y,m,a){var c=this,E=m.getAttribute("data-iziToast-ref"),I=C(this.children[E],y||{}),g=m.querySelector("."+i+"-progressbar div");return{start:function(){typeof I.time.REMAINING>"u"&&(m.classList.remove(i+"-reseted"),g!==null&&(g.style.transition="width "+I.timeout+"ms "+I.progressBarEasing,g.style.width="0%"),I.time.START=new Date().getTime(),I.time.END=I.time.START+I.timeout,I.time.TIMER=setTimeout(function(){clearTimeout(I.time.TIMER),m.classList.contains(i+"-closing")||(c.hide(I,m,"timeout"),typeof a=="function"&&a.apply(c))},I.timeout),c.setSetting(E,"time",I.time))},pause:function(){if(typeof I.time.START<"u"&&!m.classList.contains(i+"-paused")&&!m.classList.contains(i+"-reseted")){if(m.classList.add(i+"-paused"),I.time.REMAINING=I.time.END-new Date().getTime(),clearTimeout(I.time.TIMER),c.setSetting(E,"time",I.time),g!==null){var w=window.getComputedStyle(g),R=w.getPropertyValue("width");g.style.transition="none",g.style.width=R}typeof a=="function"&&setTimeout(function(){a.apply(c)},10)}},resume:function(){typeof I.time.REMAINING<"u"?(m.classList.remove(i+"-paused"),g!==null&&(g.style.transition="width "+I.time.REMAINING+"ms "+I.progressBarEasing,g.style.width="0%"),I.time.END=new Date().getTime()+I.time.REMAINING,I.time.TIMER=setTimeout(function(){clearTimeout(I.time.TIMER),m.classList.contains(i+"-closing")||(c.hide(I,m,"timeout"),typeof a=="function"&&a.apply(c))},I.time.REMAINING),c.setSetting(E,"time",I.time)):this.start()},reset:function(){clearTimeout(I.time.TIMER),delete I.time.REMAINING,c.setSetting(E,"time",I.time),m.classList.add(i+"-reseted"),m.classList.remove(i+"-paused"),g!==null&&(g.style.transition="none",g.style.width="100%"),typeof a=="function"&&setTimeout(function(){a.apply(c)},10)}}},r.hide=function(y,m,a){typeof m!="object"&&(m=document.querySelector(m));var c=this,E=C(this.children[m.getAttribute("data-iziToast-ref")],y||{});E.closedBy=a||null,delete E.time.REMAINING,m.classList.add(i+"-closing"),function(){var w=document.querySelector("."+i+"-overlay");if(w!==null){var R=w.getAttribute("data-iziToast-ref");R=R.split(",");var N=R.indexOf(String(E.ref));N!==-1&&R.splice(N,1),w.setAttribute("data-iziToast-ref",R.join()),R.length===0&&(w.classList.remove("fadeIn"),w.classList.add("fadeOut"),setTimeout(function(){w.remove()},700))}}(),E.transitionIn&&m.classList.remove(E.transitionIn),E.transitionInMobile&&m.classList.remove(E.transitionInMobile),s||window.innerWidth<=f?E.transitionOutMobile&&m.classList.add(E.transitionOutMobile):E.transitionOut&&m.classList.add(E.transitionOut);var I=m.parentNode.offsetHeight;m.parentNode.style.height=I+"px",m.style.pointerEvents="none",(!s||window.innerWidth>f)&&(m.parentNode.style.transitionDelay="0.2s");try{var g=new CustomEvent(i+"-closing",{detail:E,bubbles:!0,cancelable:!0});document.dispatchEvent(g)}catch(w){console.warn(w)}setTimeout(function(){m.parentNode.style.height="0px",m.parentNode.style.overflow="",setTimeout(function(){delete c.children[E.ref],m.parentNode.remove();try{var w=new CustomEvent(i+"-closed",{detail:E,bubbles:!0,cancelable:!0});document.dispatchEvent(w)}catch(R){console.warn(R)}typeof E.onClosed<"u"&&E.onClosed.apply(null,[E,m,a])},1e3)},200),typeof E.onClosing<"u"&&E.onClosing.apply(null,[E,m,a])},r.show=function(y){var m=this,a=C(T,y||{});if(a=C(O,a),a.time={},a.id===null&&(a.id=M(a.title+a.message+a.color)),a.displayMode===1||a.displayMode=="once")try{if(document.querySelectorAll("."+i+"#"+a.id).length>0)return!1}catch{console.warn("["+i+"] Could not find an element with this selector: #"+a.id+". Try to set an valid id.")}if(a.displayMode===2||a.displayMode=="replace")try{_(document.querySelectorAll("."+i+"#"+a.id),function(g,w){m.hide(a,g,"replaced")})}catch{console.warn("["+i+"] Could not find an element with this selector: #"+a.id+". Try to set an valid id.")}a.ref=new Date().getTime()+Math.floor(Math.random()*1e7+1),r.children[a.ref]=a;var c={body:document.querySelector("body"),overlay:document.createElement("div"),toast:document.createElement("div"),toastBody:document.createElement("div"),toastTexts:document.createElement("div"),toastCapsule:document.createElement("div"),cover:document.createElement("div"),buttons:document.createElement("div"),inputs:document.createElement("div"),icon:a.iconUrl?document.createElement("img"):document.createElement("i"),wrapper:null};c.toast.setAttribute("data-iziToast-ref",a.ref),c.toast.appendChild(c.toastBody),c.toastCapsule.appendChild(c.toast),function(){if(c.toast.classList.add(i),c.toast.classList.add(i+"-opening"),c.toastCapsule.classList.add(i+"-capsule"),c.toastBody.classList.add(i+"-body"),c.toastTexts.classList.add(i+"-texts"),s||window.innerWidth<=f?a.transitionInMobile&&c.toast.classList.add(a.transitionInMobile):a.transitionIn&&c.toast.classList.add(a.transitionIn),a.class){var g=a.class.split(" ");_(g,function(w,R){c.toast.classList.add(w)})}a.id&&(c.toast.id=a.id),a.rtl&&(c.toast.classList.add(i+"-rtl"),c.toast.setAttribute("dir","rtl")),a.layout>1&&c.toast.classList.add(i+"-layout"+a.layout),a.balloon&&c.toast.classList.add(i+"-balloon"),a.maxWidth&&(isNaN(a.maxWidth)?c.toast.style.maxWidth=a.maxWidth:c.toast.style.maxWidth=a.maxWidth+"px"),(a.theme!==""||a.theme!=="light")&&c.toast.classList.add(i+"-theme-"+a.theme),a.color&&(D(a.color)?c.toast.style.background=a.color:c.toast.classList.add(i+"-color-"+a.color)),a.backgroundColor&&(c.toast.style.background=a.backgroundColor,a.balloon&&(c.toast.style.borderColor=a.backgroundColor))}(),function(){a.image&&(c.cover.classList.add(i+"-cover"),c.cover.style.width=a.imageWidth+"px",de(a.image.replace(/ /g,""))?c.cover.style.backgroundImage="url(data:image/png;base64,"+a.image.replace(/ /g,"")+")":c.cover.style.backgroundImage="url("+a.image+")",a.rtl?c.toastBody.style.marginRight=a.imageWidth+10+"px":c.toastBody.style.marginLeft=a.imageWidth+10+"px",c.toast.appendChild(c.cover))}(),function(){a.close?(c.buttonClose=document.createElement("button"),c.buttonClose.type="button",c.buttonClose.classList.add(i+"-close"),c.buttonClose.addEventListener("click",function(g){g.target,m.hide(a,c.toast,"button")}),c.toast.appendChild(c.buttonClose)):a.rtl?c.toast.style.paddingLeft="18px":c.toast.style.paddingRight="18px"}(),function(){a.progressBar&&(c.progressBar=document.createElement("div"),c.progressBarDiv=document.createElement("div"),c.progressBar.classList.add(i+"-progressbar"),c.progressBarDiv.style.background=a.progressBarColor,c.progressBar.appendChild(c.progressBarDiv),c.toast.appendChild(c.progressBar)),a.timeout&&(a.pauseOnHover&&!a.resetOnHover&&(c.toast.addEventListener("mouseenter",function(g){m.progress(a,c.toast).pause()}),c.toast.addEventListener("mouseleave",function(g){m.progress(a,c.toast).resume()})),a.resetOnHover&&(c.toast.addEventListener("mouseenter",function(g){m.progress(a,c.toast).reset()}),c.toast.addEventListener("mouseleave",function(g){m.progress(a,c.toast).start()})))}(),function(){a.iconUrl?(c.icon.setAttribute("class",i+"-icon"),c.icon.setAttribute("src",a.iconUrl)):a.icon&&(c.icon.setAttribute("class",i+"-icon "+a.icon),a.iconText&&c.icon.appendChild(document.createTextNode(a.iconText)),a.iconColor&&(c.icon.style.color=a.iconColor)),(a.icon||a.iconUrl)&&(a.rtl?c.toastBody.style.paddingRight="33px":c.toastBody.style.paddingLeft="33px",c.toastBody.appendChild(c.icon))}(),function(){a.title.length>0&&(c.strong=document.createElement("strong"),c.strong.classList.add(i+"-title"),c.strong.appendChild(P(a.title)),c.toastTexts.appendChild(c.strong),a.titleColor&&(c.strong.style.color=a.titleColor),a.titleSize&&(isNaN(a.titleSize)?c.strong.style.fontSize=a.titleSize:c.strong.style.fontSize=a.titleSize+"px"),a.titleLineHeight&&(isNaN(a.titleSize)?c.strong.style.lineHeight=a.titleLineHeight:c.strong.style.lineHeight=a.titleLineHeight+"px")),a.message.length>0&&(c.p=document.createElement("p"),c.p.classList.add(i+"-message"),c.p.appendChild(P(a.message)),c.toastTexts.appendChild(c.p),a.messageColor&&(c.p.style.color=a.messageColor),a.messageSize&&(isNaN(a.titleSize)?c.p.style.fontSize=a.messageSize:c.p.style.fontSize=a.messageSize+"px"),a.messageLineHeight&&(isNaN(a.titleSize)?c.p.style.lineHeight=a.messageLineHeight:c.p.style.lineHeight=a.messageLineHeight+"px")),a.title.length>0&&a.message.length>0&&(a.rtl?c.strong.style.marginLeft="10px":a.layout!==2&&!a.rtl&&(c.strong.style.marginRight="10px"))}(),c.toastBody.appendChild(c.toastTexts);var E;(function(){a.inputs.length>0&&(c.inputs.classList.add(i+"-inputs"),_(a.inputs,function(g,w){c.inputs.appendChild(P(g[0])),E=c.inputs.childNodes,E[w].classList.add(i+"-inputs-child"),g[3]&&setTimeout(function(){E[w].focus()},300),E[w].addEventListener(g[1],function(R){var N=g[2];return N(m,c.toast,this,R)})}),c.toastBody.appendChild(c.inputs))})(),function(){a.buttons.length>0&&(c.buttons.classList.add(i+"-buttons"),_(a.buttons,function(g,w){c.buttons.appendChild(P(g[0]));var R=c.buttons.childNodes;R[w].classList.add(i+"-buttons-child"),g[2]&&setTimeout(function(){R[w].focus()},300),R[w].addEventListener("click",function(N){N.preventDefault();var $r=g[1];return $r(m,c.toast,this,N,E)})})),c.toastBody.appendChild(c.buttons)}(),a.message.length>0&&(a.inputs.length>0||a.buttons.length>0)&&(c.p.style.marginBottom="0"),(a.inputs.length>0||a.buttons.length>0)&&(a.rtl?c.toastTexts.style.marginLeft="10px":c.toastTexts.style.marginRight="10px",a.inputs.length>0&&a.buttons.length>0&&(a.rtl?c.inputs.style.marginLeft="8px":c.inputs.style.marginRight="8px")),function(){c.toastCapsule.style.visibility="hidden",setTimeout(function(){var g=c.toast.offsetHeight,w=c.toast.currentStyle||window.getComputedStyle(c.toast),R=w.marginTop;R=R.split("px"),R=parseInt(R[0]);var N=w.marginBottom;N=N.split("px"),N=parseInt(N[0]),c.toastCapsule.style.visibility="",c.toastCapsule.style.height=g+N+R+"px",setTimeout(function(){c.toastCapsule.style.height="auto",a.target&&(c.toastCapsule.style.overflow="visible")},500),a.timeout&&m.progress(a,c.toast).start()},100)}(),function(){var g=a.position;if(a.target)c.wrapper=document.querySelector(a.target),c.wrapper.classList.add(i+"-target"),a.targetFirst?c.wrapper.insertBefore(c.toastCapsule,c.wrapper.firstChild):c.wrapper.appendChild(c.toastCapsule);else{if(h.indexOf(a.position)==-1){console.warn("["+i+`] Incorrect position.
It can be › `+h);return}s||window.innerWidth<=f?a.position=="bottomLeft"||a.position=="bottomRight"||a.position=="bottomCenter"?g=i+"-wrapper-bottomCenter":a.position=="topLeft"||a.position=="topRight"||a.position=="topCenter"?g=i+"-wrapper-topCenter":g=i+"-wrapper-center":g=i+"-wrapper-"+g,c.wrapper=document.querySelector("."+i+"-wrapper."+g),c.wrapper||(c.wrapper=document.createElement("div"),c.wrapper.classList.add(i+"-wrapper"),c.wrapper.classList.add(g),document.body.appendChild(c.wrapper)),a.position=="topLeft"||a.position=="topCenter"||a.position=="topRight"?c.wrapper.insertBefore(c.toastCapsule,c.wrapper.firstChild):c.wrapper.appendChild(c.toastCapsule)}isNaN(a.zindex)?console.warn("["+i+"] Invalid zIndex."):c.wrapper.style.zIndex=a.zindex}(),function(){a.overlay&&(document.querySelector("."+i+"-overlay.fadeIn")!==null?(c.overlay=document.querySelector("."+i+"-overlay"),c.overlay.setAttribute("data-iziToast-ref",c.overlay.getAttribute("data-iziToast-ref")+","+a.ref),!isNaN(a.zindex)&&a.zindex!==null&&(c.overlay.style.zIndex=a.zindex-1)):(c.overlay.classList.add(i+"-overlay"),c.overlay.classList.add("fadeIn"),c.overlay.style.background=a.overlayColor,c.overlay.setAttribute("data-iziToast-ref",a.ref),!isNaN(a.zindex)&&a.zindex!==null&&(c.overlay.style.zIndex=a.zindex-1),document.querySelector("body").appendChild(c.overlay)),a.overlayClose?(c.overlay.removeEventListener("click",{}),c.overlay.addEventListener("click",function(g){m.hide(a,c.toast,"overlay")})):c.overlay.removeEventListener("click",{}))}(),function(){if(a.animateInside){c.toast.classList.add(i+"-animateInside");var g=[200,100,300];(a.transitionIn=="bounceInLeft"||a.transitionIn=="bounceInRight")&&(g=[400,200,400]),a.title.length>0&&setTimeout(function(){c.strong.classList.add("slideIn")},g[0]),a.message.length>0&&setTimeout(function(){c.p.classList.add("slideIn")},g[1]),(a.icon||a.iconUrl)&&setTimeout(function(){c.icon.classList.add("revealIn")},g[2]);var w=150;a.buttons.length>0&&c.buttons&&setTimeout(function(){_(c.buttons.childNodes,function(R,N){setTimeout(function(){R.classList.add("revealIn")},w),w=w+150})},a.inputs.length>0?150:0),a.inputs.length>0&&c.inputs&&(w=150,_(c.inputs.childNodes,function(R,N){setTimeout(function(){R.classList.add("revealIn")},w),w=w+150}))}}(),a.onOpening.apply(null,[a,c.toast]);try{var I=new CustomEvent(i+"-opening",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(I)}catch(g){console.warn(g)}setTimeout(function(){c.toast.classList.remove(i+"-opening"),c.toast.classList.add(i+"-opened");try{var g=new CustomEvent(i+"-opened",{detail:a,bubbles:!0,cancelable:!0});document.dispatchEvent(g)}catch(w){console.warn(w)}a.onOpened.apply(null,[a,c.toast])},1e3),a.drag&&(u?(c.toast.addEventListener("touchstart",function(g){z.startMoving(this,m,a,g)},!1),c.toast.addEventListener("touchend",function(g){z.stopMoving(this,g)},!1)):(c.toast.addEventListener("mousedown",function(g){g.preventDefault(),z.startMoving(this,m,a,g)},!1),c.toast.addEventListener("mouseup",function(g){g.preventDefault(),z.stopMoving(this,g)},!1))),a.closeOnEscape&&document.addEventListener("keyup",function(g){g=g||window.event,g.keyCode==27&&m.hide(a,c.toast,"esc")}),a.closeOnClick&&c.toast.addEventListener("click",function(g){m.hide(a,c.toast,"toast")}),m.toast=c.toast},r})})(qr);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xn=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Gr=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},Un={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,p=s>>2,f=(s&3)<<4|l>>4;let T=(l&15)<<2|h>>6,O=h&63;u||(O=64,o||(T=64)),r.push(n[p],n[f],n[T],n[O])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(xn(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Gr(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const f=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||f==null)throw new Kr;const T=s<<2|l>>4;if(r.push(T),h!==64){const O=l<<4&240|h>>2;if(r.push(O),f!==64){const v=h<<6&192|f;r.push(v)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Kr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Jr=function(t){const e=xn(t);return Un.encodeByteArray(e,!0)},Bn=function(t){return Jr(t).replace(/\./g,"")},Fn=function(t){try{return Un.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xr(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yr=()=>Xr().__FIREBASE_DEFAULTS__,Qr=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Zr=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Fn(t[1]);return e&&JSON.parse(e)},Mt=()=>{try{return Yr()||Qr()||Zr()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},ei=t=>{var e,n;return(n=(e=Mt())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Hn=()=>{var t;return(t=Mt())===null||t===void 0?void 0:t.config},jn=t=>{var e;return(e=Mt())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function ni(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(L())}function ri(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function ii(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function si(){const t=L();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function oi(){try{return typeof indexedDB=="object"}catch{return!1}}function ai(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ci="FirebaseError";class re extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=ci,Object.setPrototypeOf(this,re.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Pe.prototype.create)}}class Pe{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?li(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new re(i,l,r)}}function li(t,e){return t.replace(ui,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ui=/\{\$([^}]+)}/g;function di(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Ke(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Qt(s)&&Qt(o)){if(!Ke(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Qt(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ke(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function be(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ie(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function hi(t,e){const n=new fi(t,e);return n.subscribe.bind(n)}class fi{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");pi(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=dt),i.error===void 0&&(i.error=dt),i.complete===void 0&&(i.complete=dt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pi(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function dt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function j(t){return t&&t._delegate?t._delegate:t}class ge{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new ti;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(yi(e))try{this.getOrInitializeService({instanceIdentifier:se})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=se){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=se){return this.instances.has(e)}getOptions(e=se){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:gi(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=se){return this.component?this.component.multipleInstances?e:se:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function gi(t){return t===se?void 0:t}function yi(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new mi(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(A||(A={}));const vi={debug:A.DEBUG,verbose:A.VERBOSE,info:A.INFO,warn:A.WARN,error:A.ERROR,silent:A.SILENT},Ei=A.INFO,wi={[A.DEBUG]:"log",[A.VERBOSE]:"log",[A.INFO]:"info",[A.WARN]:"warn",[A.ERROR]:"error"},bi=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=wi[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Vn{constructor(e){this.name=e,this._logLevel=Ei,this._logHandler=bi,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in A))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?vi[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,A.DEBUG,...e),this._logHandler(this,A.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,A.VERBOSE,...e),this._logHandler(this,A.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,A.INFO,...e),this._logHandler(this,A.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,A.WARN,...e),this._logHandler(this,A.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,A.ERROR,...e),this._logHandler(this,A.ERROR,...e)}}const Ii=(t,e)=>e.some(n=>t instanceof n);let Zt,en;function Ti(){return Zt||(Zt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Si(){return en||(en=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const zn=new WeakMap,bt=new WeakMap,Wn=new WeakMap,ht=new WeakMap,xt=new WeakMap;function Ci(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(te(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&zn.set(n,t)}).catch(()=>{}),xt.set(e,t),e}function Ri(t){if(bt.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});bt.set(t,e)}let It={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return bt.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Wn.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return te(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ai(t){It=t(It)}function Oi(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(ft(this),e,...n);return Wn.set(r,e.sort?e.sort():[e]),te(r)}:Si().includes(t)?function(...e){return t.apply(ft(this),e),te(zn.get(this))}:function(...e){return te(t.apply(ft(this),e))}}function Pi(t){return typeof t=="function"?Oi(t):(t instanceof IDBTransaction&&Ri(t),Ii(t,Ti())?new Proxy(t,It):t)}function te(t){if(t instanceof IDBRequest)return Ci(t);if(ht.has(t))return ht.get(t);const e=Pi(t);return e!==t&&(ht.set(t,e),xt.set(e,t)),e}const ft=t=>xt.get(t);function ki(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=te(o);return r&&o.addEventListener("upgradeneeded",u=>{r(te(o.result),u.oldVersion,u.newVersion,te(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const Ni=["get","getKey","getAll","getAllKeys","count"],Li=["put","add","delete","clear"],pt=new Map;function tn(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(pt.get(e))return pt.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=Li.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||Ni.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return pt.set(e,s),s}Ai(t=>({...t,get:(e,n,r)=>tn(e,n)||t.get(e,n,r),has:(e,n)=>!!tn(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Mi(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function Mi(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Tt="@firebase/app",nn="0.9.28";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae=new Vn("@firebase/app"),xi="@firebase/app-compat",Ui="@firebase/analytics-compat",Bi="@firebase/analytics",Fi="@firebase/app-check-compat",Hi="@firebase/app-check",ji="@firebase/auth",Vi="@firebase/auth-compat",zi="@firebase/database",Wi="@firebase/database-compat",$i="@firebase/functions",qi="@firebase/functions-compat",Gi="@firebase/installations",Ki="@firebase/installations-compat",Ji="@firebase/messaging",Xi="@firebase/messaging-compat",Yi="@firebase/performance",Qi="@firebase/performance-compat",Zi="@firebase/remote-config",es="@firebase/remote-config-compat",ts="@firebase/storage",ns="@firebase/storage-compat",rs="@firebase/firestore",is="@firebase/firestore-compat",ss="firebase",os="10.8.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const St="[DEFAULT]",as={[Tt]:"fire-core",[xi]:"fire-core-compat",[Bi]:"fire-analytics",[Ui]:"fire-analytics-compat",[Hi]:"fire-app-check",[Fi]:"fire-app-check-compat",[ji]:"fire-auth",[Vi]:"fire-auth-compat",[zi]:"fire-rtdb",[Wi]:"fire-rtdb-compat",[$i]:"fire-fn",[qi]:"fire-fn-compat",[Gi]:"fire-iid",[Ki]:"fire-iid-compat",[Ji]:"fire-fcm",[Xi]:"fire-fcm-compat",[Yi]:"fire-perf",[Qi]:"fire-perf-compat",[Zi]:"fire-rc",[es]:"fire-rc-compat",[ts]:"fire-gcs",[ns]:"fire-gcs-compat",[rs]:"fire-fst",[is]:"fire-fst-compat","fire-js":"fire-js",[ss]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Je=new Map,Ct=new Map;function cs(t,e){try{t.container.addComponent(e)}catch(n){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Se(t){const e=t.name;if(Ct.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;Ct.set(e,t);for(const n of Je.values())cs(n,t);return!0}function $n(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ls={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ne=new Pe("app","Firebase",ls);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ge("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ne.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ne=os;function ds(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:St,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw ne.create("bad-app-name",{appName:String(i)});if(n||(n=Hn()),!n)throw ne.create("no-options");const s=Je.get(i);if(s){if(Ke(n,s.options)&&Ke(r,s.config))return s;throw ne.create("duplicate-app",{appName:i})}const o=new _i(i);for(const u of Ct.values())o.addComponent(u);const l=new us(n,r,o);return Je.set(i,l),l}function hs(t=St){const e=Je.get(t);if(!e&&t===St&&Hn())return ds();if(!e)throw ne.create("no-app",{appName:t});return e}function fe(t,e,n){var r;let i=(r=as[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(l.join(" "));return}Se(new ge(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fs="firebase-heartbeat-database",ps=1,Ce="firebase-heartbeat-store";let mt=null;function qn(){return mt||(mt=ki(fs,ps,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ce)}catch(n){console.warn(n)}}}}).catch(t=>{throw ne.create("idb-open",{originalErrorMessage:t.message})})),mt}async function ms(t){try{const n=(await qn()).transaction(Ce),r=await n.objectStore(Ce).get(Gn(t));return await n.done,r}catch(e){if(e instanceof re)ae.warn(e.message);else{const n=ne.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ae.warn(n.message)}}}async function rn(t,e){try{const r=(await qn()).transaction(Ce,"readwrite");await r.objectStore(Ce).put(e,Gn(t)),await r.done}catch(n){if(n instanceof re)ae.warn(n.message);else{const r=ne.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});ae.warn(r.message)}}}function Gn(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gs=1024,ys=30*24*60*60*1e3;class _s{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Es(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=sn();if(!(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null))&&!(this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s)))return this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(o=>{const l=new Date(o.date).valueOf();return Date.now()-l<=ys}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){var e;if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=sn(),{heartbeatsToSend:r,unsentEntries:i}=vs(this._heartbeatsCache.heartbeats),s=Bn(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function sn(){return new Date().toISOString().substring(0,10)}function vs(t,e=gs){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),on(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),on(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Es{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return oi()?ai().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await ms(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return rn(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function on(t){return Bn(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t){Se(new ge("platform-logger",e=>new Di(e),"PRIVATE")),Se(new ge("heartbeat",e=>new _s(e),"PRIVATE")),fe(Tt,nn,t),fe(Tt,nn,"esm2017"),fe("fire-js","")}ws("");var bs="firebase",Is="10.8.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */fe(bs,Is,"app");function Ut(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function Kn(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Ts=Kn,Jn=new Pe("auth","Firebase",Kn());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xe=new Vn("@firebase/auth");function Ss(t,...e){Xe.logLevel<=A.WARN&&Xe.warn(`Auth (${Ne}): ${t}`,...e)}function je(t,...e){Xe.logLevel<=A.ERROR&&Xe.error(`Auth (${Ne}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function U(t,...e){throw Bt(t,...e)}function F(t,...e){return Bt(t,...e)}function Cs(t,e,n){const r=Object.assign(Object.assign({},Ts()),{[e]:n});return new Pe("auth","Firebase",r).create(e,{appName:t.name})}function Bt(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Jn.create(t,...e)}function b(t,e,...n){if(!t)throw Bt(e,...n)}function W(t){const e="INTERNAL ASSERTION FAILED: "+t;throw je(e),new Error(e)}function G(t,e){t||W(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function Rs(){return an()==="http:"||an()==="https:"}function an(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Rs()||ri()||"connection"in navigator)?navigator.onLine:!0}function Os(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le{constructor(e,n){this.shortDelay=e,this.longDelay=n,G(n>e,"Short delay should be less than long delay!"),this.isMobile=ni()||ii()}get(){return As()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ft(t,e){G(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xn{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;W("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;W("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;W("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ks=new Le(3e4,6e4);function ie(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function K(t,e,n,r,i={}){return Yn(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=ke(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();return u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode),Xn.fetch()(Qn(t,t.config.apiHost,n,l),Object.assign({method:e,headers:u,referrerPolicy:"no-referrer"},s))})}async function Yn(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},Ps),e);try{const i=new Ls(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw He(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw He(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw He(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw He(t,"user-disabled",o);const p=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw Cs(t,p,h);U(t,p)}}catch(i){if(i instanceof re)throw i;U(t,"network-request-failed",{message:String(i)})}}async function De(t,e,n,r,i={}){const s=await K(t,e,n,r,i);return"mfaPendingCredential"in s&&U(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Qn(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ft(t.config,i):`${t.config.apiScheme}://${i}`}function Ns(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class Ls{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(F(this.auth,"network-request-failed")),ks.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function He(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=F(t,e,r);return i.customData._tokenResponse=n,i}function cn(t){return t!==void 0&&t.enterprise!==void 0}class Ds{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return Ns(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}}async function Ms(t,e){return K(t,"GET","/v2/recaptchaConfig",ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function xs(t,e){return K(t,"POST","/v1/accounts:delete",e)}async function Us(t,e){return K(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Te(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function Bs(t,e=!1){const n=j(t),r=await n.getIdToken(e),i=Ht(r);b(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Te(gt(i.auth_time)),issuedAtTime:Te(gt(i.iat)),expirationTime:Te(gt(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function gt(t){return Number(t)*1e3}function Ht(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return je("JWT malformed, contained fewer than 3 sections"),null;try{const i=Fn(n);return i?JSON.parse(i):(je("Failed to decode base64 JWT payload"),null)}catch(i){return je("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Fs(t){const e=Ht(t);return b(e,"internal-error"),b(typeof e.exp<"u","internal-error"),b(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ye(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof re&&Hs(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Hs({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class js{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zn{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Te(this.lastLoginAt),this.creationTime=Te(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ye(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ye(t,Us(n,{idToken:r}));b(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ws(s.providerUserInfo):[],l=zs(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),p=u?h:!1,f={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new Zn(s.createdAt,s.lastLoginAt),isAnonymous:p};Object.assign(t,f)}async function Vs(t){const e=j(t);await Ye(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function zs(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ws(t){return t.map(e=>{var{providerId:n}=e,r=Ut(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $s(t,e){const n=await Yn(t,{},async()=>{const r=ke({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Qn(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/x-www-form-urlencoded",Xn.fetch()(o,{method:"POST",headers:l,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function qs(t,e){return K(t,"POST","/v2/accounts:revokeToken",ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){b(e.idToken,"internal-error"),b(typeof e.idToken<"u","internal-error"),b(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Fs(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return b(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await $s(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Re;return r&&(b(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(b(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(b(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Re,this.toJSON())}_performRefresh(){return W("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e){b(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class oe{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Ut(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new js(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Zn(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ye(this,this.stsTokenManager.getToken(this.auth,e));return b(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return Bs(this,e)}reload(){return Vs(this)}_assign(e){this!==e&&(b(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new oe(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){b(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ye(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ye(this,xs(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,p;const f=(r=n.displayName)!==null&&r!==void 0?r:void 0,T=(i=n.email)!==null&&i!==void 0?i:void 0,O=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,_=(l=n.tenantId)!==null&&l!==void 0?l:void 0,C=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,P=(h=n.createdAt)!==null&&h!==void 0?h:void 0,M=(p=n.lastLoginAt)!==null&&p!==void 0?p:void 0,{uid:D,emailVerified:de,isAnonymous:z,providerData:y,stsTokenManager:m}=n;b(D&&m,e,"internal-error");const a=Re.fromJSON(this.name,m);b(typeof D=="string",e,"internal-error"),J(f,e.name),J(T,e.name),b(typeof de=="boolean",e,"internal-error"),b(typeof z=="boolean",e,"internal-error"),J(O,e.name),J(v,e.name),J(_,e.name),J(C,e.name),J(P,e.name),J(M,e.name);const c=new oe({uid:D,auth:e,email:T,emailVerified:de,displayName:f,isAnonymous:z,photoURL:v,phoneNumber:O,tenantId:_,stsTokenManager:a,createdAt:P,lastLoginAt:M});return y&&Array.isArray(y)&&(c.providerData=y.map(E=>Object.assign({},E))),C&&(c._redirectEventId=C),c}static async _fromIdTokenResponse(e,n,r=!1){const i=new Re;i.updateFromServerResponse(n);const s=new oe({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Ye(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ln=new Map;function $(t){G(t instanceof Function,"Expected a class definition");let e=ln.get(t);return e?(G(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,ln.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}er.type="NONE";const un=er;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ve(t,e,n){return`firebase:${t}:${e}:${n}`}class pe{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Ve(this.userKey,i.apiKey,s),this.fullPersistenceKey=Ve("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oe._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new pe($(un),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||$(un);const o=Ve(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const p=await h._get(o);if(p){const f=oe._fromJSON(e,p);h!==s&&(l=f),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new pe(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new pe(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dn(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(rr(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(tr(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(sr(e))return"Blackberry";if(or(e))return"Webos";if(jt(e))return"Safari";if((e.includes("chrome/")||nr(e))&&!e.includes("edge/"))return"Chrome";if(ir(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function tr(t=L()){return/firefox\//i.test(t)}function jt(t=L()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function nr(t=L()){return/crios\//i.test(t)}function rr(t=L()){return/iemobile/i.test(t)}function ir(t=L()){return/android/i.test(t)}function sr(t=L()){return/blackberry/i.test(t)}function or(t=L()){return/webos/i.test(t)}function nt(t=L()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Gs(t=L()){var e;return nt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ks(){return si()&&document.documentMode===10}function ar(t=L()){return nt(t)||ir(t)||or(t)||sr(t)||/windows phone/i.test(t)||rr(t)}function Js(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cr(t,e=[]){let n;switch(t){case"Browser":n=dn(L());break;case"Worker":n=`${dn(L())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ne}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xs{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ys(t,e={}){return K(t,"GET","/v2/passwordPolicy",ie(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qs=6;class Zs{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:Qs,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eo{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hn(this),this.idTokenSubscription=new hn(this),this.beforeStateQueue=new Xs(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Jn,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=$(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await pe.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return b(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ye(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Os()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?j(e):null;return n&&b(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&b(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence($(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Ys(this),n=new Zs(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Pe("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await qs(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&$(e)||this._popupRedirectResolver;b(n,this,"argument-error"),this.redirectPersistenceManager=await pe.create(this,[$(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(b(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return b(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=cr(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&Ss(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function ue(t){return j(t)}class hn{constructor(e){this.auth=e,this.observer=null,this.addObserver=hi(n=>this.observer=n)}get next(){return b(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let rt={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function to(t){rt=t}function lr(t){return rt.loadJS(t)}function no(){return rt.recaptchaEnterpriseScript}function ro(){return rt.gapiScript}function io(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const so="recaptcha-enterprise",oo="NO_RECAPTCHA";class ao{constructor(e){this.type=so,this.auth=ue(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{Ms(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new Ds(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;cn(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(oo)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&cn(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=no();u.length!==0&&(u+=l),lr(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function fn(t,e,n,r=!1){const i=new ao(t);let s;try{s=await i.verify(n)}catch{s=await i.verify(n,!0)}const o=Object.assign({},e);return r?Object.assign(o,{captchaResp:s}):Object.assign(o,{captchaResponse:s}),Object.assign(o,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(o,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),o}async function At(t,e,n,r){var i;if(!((i=t._getRecaptchaConfig())===null||i===void 0)&&i.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const s=await fn(t,e,n,n==="getOobCode");return r(t,s)}else return r(t,e).catch(async s=>{if(s.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const o=await fn(t,e,n,n==="getOobCode");return r(t,o)}else return Promise.reject(s)})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function co(t,e){const n=$n(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Ke(s,e??{}))return i;U(i,"already-initialized")}return n.initialize({options:e})}function lo(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map($);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function uo(t,e,n){const r=ue(t);b(r._canInitEmulator,r,"emulator-config-failed"),b(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=ur(e),{host:o,port:l}=ho(e),u=l===null?"":`:${l}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||fo()}function ur(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function ho(t){const e=ur(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:pn(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:pn(o)}}}function pn(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function fo(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vt{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return W("not implemented")}_getIdTokenResponse(e){return W("not implemented")}_linkToIdToken(e,n){return W("not implemented")}_getReauthenticationResolver(e){return W("not implemented")}}async function po(t,e){return K(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mo(t,e){return De(t,"POST","/v1/accounts:signInWithPassword",ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function go(t,e){return De(t,"POST","/v1/accounts:signInWithEmailLink",ie(t,e))}async function yo(t,e){return De(t,"POST","/v1/accounts:signInWithEmailLink",ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae extends Vt{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ae(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ae(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return At(e,n,"signInWithPassword",mo);case"emailLink":return go(e,{email:this._email,oobCode:this._password});default:U(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return At(e,r,"signUpPassword",po);case"emailLink":return yo(e,{idToken:n,email:this._email,oobCode:this._password});default:U(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(t,e){return De(t,"POST","/v1/accounts:signInWithIdp",ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _o="http://localhost";class ce extends Vt{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ce(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):U("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Ut(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ce(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return me(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,me(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,me(e,n)}buildRequest(){const e={requestUri:_o,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=ke(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vo(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Eo(t){const e=be(Ie(t)).link,n=e?be(Ie(e)).deep_link_id:null,r=be(Ie(t)).deep_link_id;return(r?be(Ie(r)).link:null)||r||n||e||t}class zt{constructor(e){var n,r,i,s,o,l;const u=be(Ie(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,p=(r=u.oobCode)!==null&&r!==void 0?r:null,f=vo((i=u.mode)!==null&&i!==void 0?i:null);b(h&&p&&f,"argument-error"),this.apiKey=h,this.operation=f,this.code=p,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Eo(e);try{return new zt(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(){this.providerId=ve.PROVIDER_ID}static credential(e,n){return Ae._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=zt.parseLink(n);return b(r,"argument-error"),Ae._fromEmailAndCode(e,r.code,r.tenantId)}}ve.PROVIDER_ID="password";ve.EMAIL_PASSWORD_SIGN_IN_METHOD="password";ve.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me extends dr{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Y extends Me{constructor(){super("facebook.com")}static credential(e){return ce._fromParams({providerId:Y.PROVIDER_ID,signInMethod:Y.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Y.credentialFromTaggedObject(e)}static credentialFromError(e){return Y.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Y.credential(e.oauthAccessToken)}catch{return null}}}Y.FACEBOOK_SIGN_IN_METHOD="facebook.com";Y.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q extends Me{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ce._fromParams({providerId:Q.PROVIDER_ID,signInMethod:Q.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return Q.credentialFromTaggedObject(e)}static credentialFromError(e){return Q.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return Q.credential(n,r)}catch{return null}}}Q.GOOGLE_SIGN_IN_METHOD="google.com";Q.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z extends Me{constructor(){super("github.com")}static credential(e){return ce._fromParams({providerId:Z.PROVIDER_ID,signInMethod:Z.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Z.credentialFromTaggedObject(e)}static credentialFromError(e){return Z.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Z.credential(e.oauthAccessToken)}catch{return null}}}Z.GITHUB_SIGN_IN_METHOD="github.com";Z.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee extends Me{constructor(){super("twitter.com")}static credential(e,n){return ce._fromParams({providerId:ee.PROVIDER_ID,signInMethod:ee.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ee.credentialFromTaggedObject(e)}static credentialFromError(e){return ee.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ee.credential(n,r)}catch{return null}}}ee.TWITTER_SIGN_IN_METHOD="twitter.com";ee.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wo(t,e){return De(t,"POST","/v1/accounts:signUp",ie(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await oe._fromIdTokenResponse(e,r,i),o=mn(r);return new le({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=mn(r);return new le({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function mn(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe extends re{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Qe.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new Qe(e,n,r,i)}}function hr(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Qe._fromErrorAndOperation(t,s,e,r):s})}async function bo(t,e,n=!1){const r=await ye(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return le._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Io(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await ye(t,hr(r,i,e,t),n);b(s.idToken,r,"internal-error");const o=Ht(s.idToken);b(o,r,"internal-error");const{sub:l}=o;return b(t.uid===l,r,"user-mismatch"),le._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&U(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fr(t,e,n=!1){const r="signIn",i=await hr(t,r,e),s=await le._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function To(t,e){return fr(ue(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pr(t){const e=ue(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rl(t,e,n){const r=ue(t),o=await At(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",wo).catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&pr(t),u}),l=await le._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function il(t,e,n){return To(j(t),ve.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&pr(t),r})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function So(t,e){return K(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sl(t,{displayName:e,photoURL:n}){if(e===void 0&&n===void 0)return;const r=j(t),s={idToken:await r.getIdToken(),displayName:e,photoUrl:n,returnSecureToken:!0},o=await ye(r,So(r.auth,s));r.displayName=o.displayName||null,r.photoURL=o.photoUrl||null;const l=r.providerData.find(({providerId:u})=>u==="password");l&&(l.displayName=r.displayName,l.photoURL=r.photoURL),await r._updateTokensIfNecessary(o)}function Co(t,e,n,r){return j(t).onIdTokenChanged(e,n,r)}function Ro(t,e,n){return j(t).beforeAuthStateChanged(e,n)}function ol(t,e,n,r){return j(t).onAuthStateChanged(e,n,r)}function al(t){return j(t).signOut()}const Ze="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mr{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Ze,"1"),this.storage.removeItem(Ze),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ao(){const t=L();return jt(t)||nt(t)}const Oo=1e3,Po=10;class gr extends mr{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Ao()&&Js(),this.fallbackToPolling=ar(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ks()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Po):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Oo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}gr.type="LOCAL";const ko=gr;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr extends mr{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}yr.type="SESSION";const _r=yr;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function No(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class it{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new it(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await No(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}it.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wt(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lo{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=Wt("",20);i.port1.start();const p=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(f){const T=f;if(T.data.eventId===h)switch(T.data.status){case"ack":clearTimeout(p),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(T.data.response);break;default:clearTimeout(p),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(){return window}function Do(t){H().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vr(){return typeof H().WorkerGlobalScope<"u"&&typeof H().importScripts=="function"}async function Mo(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function xo(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function Uo(){return vr()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Er="firebaseLocalStorageDb",Bo=1,et="firebaseLocalStorage",wr="fbase_key";class xe{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function st(t,e){return t.transaction([et],e?"readwrite":"readonly").objectStore(et)}function Fo(){const t=indexedDB.deleteDatabase(Er);return new xe(t).toPromise()}function Ot(){const t=indexedDB.open(Er,Bo);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(et,{keyPath:wr})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(et)?e(r):(r.close(),await Fo(),e(await Ot()))})})}async function gn(t,e,n){const r=st(t,!0).put({[wr]:e,value:n});return new xe(r).toPromise()}async function Ho(t,e){const n=st(t,!1).get(e),r=await new xe(n).toPromise();return r===void 0?null:r.value}function yn(t,e){const n=st(t,!0).delete(e);return new xe(n).toPromise()}const jo=800,Vo=3;class br{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ot(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Vo)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return vr()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=it._getInstance(Uo()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await Mo(),!this.activeServiceWorker)return;this.sender=new Lo(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||xo()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ot();return await gn(e,Ze,"1"),await yn(e,Ze),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>gn(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Ho(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yn(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=st(i,!1).getAll();return new xe(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),jo)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}br.type="LOCAL";const zo=br;new Le(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wo(t,e){return e?$(e):(b(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t extends Vt{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return me(e,this._buildIdpRequest())}_linkToIdToken(e,n){return me(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return me(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function $o(t){return fr(t.auth,new $t(t),t.bypassAuthState)}function qo(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),Io(n,new $t(t),t.bypassAuthState)}async function Go(t){const{auth:e,user:n}=t;return b(n,e,"internal-error"),bo(n,new $t(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return $o;case"linkViaPopup":case"linkViaRedirect":return Go;case"reauthViaPopup":case"reauthViaRedirect":return qo;default:U(this.auth,"internal-error")}}resolve(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){G(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ko=new Le(2e3,1e4);class he extends Ir{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,he.currentPopupAction&&he.currentPopupAction.cancel(),he.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return b(e,this.auth,"internal-error"),e}async onExecution(){G(this.filter.length===1,"Popup operations only handle one event");const e=Wt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(F(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(F(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,he.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(F(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,Ko.get())};e()}}he.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jo="pendingRedirect",ze=new Map;class Xo extends Ir{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=ze.get(this.auth._key());if(!e){try{const r=await Yo(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}ze.set(this.auth._key(),e)}return this.bypassAuthState||ze.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Yo(t,e){const n=ea(e),r=Zo(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Qo(t,e){ze.set(t._key(),e)}function Zo(t){return $(t._redirectPersistence)}function ea(t){return Ve(Jo,t.config.apiKey,t.name)}async function ta(t,e,n=!1){const r=ue(t),i=Wo(r,e),o=await new Xo(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const na=10*60*1e3;class ra{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!ia(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!Tr(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(F(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=na&&this.cachedEventUids.clear(),this.cachedEventUids.has(_n(e))}saveEventToCache(e){this.cachedEventUids.add(_n(e)),this.lastProcessedEventTime=Date.now()}}function _n(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Tr({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function ia(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Tr(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sa(t,e={}){return K(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oa=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,aa=/^https?/;async function ca(t){if(t.config.emulator)return;const{authorizedDomains:e}=await sa(t);for(const n of e)try{if(la(n))return}catch{}U(t,"unauthorized-domain")}function la(t){const e=Rt(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!aa.test(n))return!1;if(oa.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ua=new Le(3e4,6e4);function vn(){const t=H().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function da(t){return new Promise((e,n)=>{var r,i,s;function o(){vn(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{vn(),n(F(t,"network-request-failed"))},timeout:ua.get()})}if(!((i=(r=H().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=H().gapi)===null||s===void 0)&&s.load)o();else{const l=io("iframefcb");return H()[l]=()=>{gapi.load?o():n(F(t,"network-request-failed"))},lr(`${ro()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw We=null,e})}let We=null;function ha(t){return We=We||da(t),We}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fa=new Le(5e3,15e3),pa="__/auth/iframe",ma="emulator/auth/iframe",ga={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ya=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function _a(t){const e=t.config;b(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ft(e,ma):`https://${t.config.authDomain}/${pa}`,r={apiKey:e.apiKey,appName:t.name,v:Ne},i=ya.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${ke(r).slice(1)}`}async function va(t){const e=await ha(t),n=H().gapi;return b(n,t,"internal-error"),e.open({where:document.body,url:_a(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:ga,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=F(t,"network-request-failed"),l=H().setTimeout(()=>{s(o)},fa.get());function u(){H().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ea={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},wa=500,ba=600,Ia="_blank",Ta="http://localhost";class En{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Sa(t,e,n,r=wa,i=ba){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},Ea),{width:r.toString(),height:i.toString(),top:s,left:o}),h=L().toLowerCase();n&&(l=nr(h)?Ia:n),tr(h)&&(e=e||Ta,u.scrollbars="yes");const p=Object.entries(u).reduce((T,[O,v])=>`${T}${O}=${v},`,"");if(Gs(h)&&l!=="_self")return Ca(e||"",l),new En(null);const f=window.open(e||"",l,p);b(f,t,"popup-blocked");try{f.focus()}catch{}return new En(f)}function Ca(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ra="__/auth/handler",Aa="emulator/auth/handler",Oa=encodeURIComponent("fac");async function wn(t,e,n,r,i,s){b(t.config.authDomain,t,"auth-domain-config-required"),b(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ne,eventId:i};if(e instanceof dr){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",di(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[p,f]of Object.entries(s||{}))o[p]=f}if(e instanceof Me){const p=e.getScopes().filter(f=>f!=="");p.length>0&&(o.scopes=p.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const p of Object.keys(l))l[p]===void 0&&delete l[p];const u=await t._getAppCheckToken(),h=u?`#${Oa}=${encodeURIComponent(u)}`:"";return`${Pa(t)}?${ke(l).slice(1)}${h}`}function Pa({config:t}){return t.emulator?Ft(t,Aa):`https://${t.authDomain}/${Ra}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yt="webStorageSupport";class ka{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=_r,this._completeRedirectFn=ta,this._overrideRedirectResult=Qo}async _openPopup(e,n,r,i){var s;G((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await wn(e,n,r,Rt(),i);return Sa(e,o,Wt())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await wn(e,n,r,Rt(),i);return Do(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(G(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await va(e),r=new ra(e);return n.register("authEvent",i=>(b(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(yt,{type:yt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[yt];o!==void 0&&n(!!o),U(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=ca(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ar()||jt()||nt()}}const Na=ka;var bn="@firebase/auth",In="1.6.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class La{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){b(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Da(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function Ma(t){Se(new ge("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;b(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:cr(t)},h=new eo(r,i,s,u);return lo(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Se(new ge("auth-internal",e=>{const n=ue(e.getProvider("auth").getImmediate());return(r=>new La(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),fe(bn,In,Da(t)),fe(bn,In,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xa=5*60,Ua=jn("authIdTokenMaxAge")||xa;let Tn=null;const Ba=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>Ua)return;const i=n==null?void 0:n.token;Tn!==i&&(Tn=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function cl(t=hs()){const e=$n(t,"auth");if(e.isInitialized())return e.getImmediate();const n=co(t,{popupRedirectResolver:Na,persistence:[zo,ko,_r]}),r=jn("authTokenSyncURL");if(r){const s=Ba(r);Ro(n,s,()=>s(n.currentUser)),Co(n,o=>s(o))}const i=ei("auth");return i&&uo(n,`http://${i}`),n}function Fa(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}to({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=F("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Fa().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});Ma("Browser");function Sr(t,e){return function(){return t.apply(e,arguments)}}const{toString:Ha}=Object.prototype,{getPrototypeOf:qt}=Object,ot=(t=>e=>{const n=Ha.call(e);return t[n]||(t[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),V=t=>(t=t.toLowerCase(),e=>ot(e)===t),at=t=>e=>typeof e===t,{isArray:Ee}=Array,Oe=at("undefined");function ja(t){return t!==null&&!Oe(t)&&t.constructor!==null&&!Oe(t.constructor)&&x(t.constructor.isBuffer)&&t.constructor.isBuffer(t)}const Cr=V("ArrayBuffer");function Va(t){let e;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&Cr(t.buffer),e}const za=at("string"),x=at("function"),Rr=at("number"),ct=t=>t!==null&&typeof t=="object",Wa=t=>t===!0||t===!1,$e=t=>{if(ot(t)!=="object")return!1;const e=qt(t);return(e===null||e===Object.prototype||Object.getPrototypeOf(e)===null)&&!(Symbol.toStringTag in t)&&!(Symbol.iterator in t)},$a=V("Date"),qa=V("File"),Ga=V("Blob"),Ka=V("FileList"),Ja=t=>ct(t)&&x(t.pipe),Xa=t=>{let e;return t&&(typeof FormData=="function"&&t instanceof FormData||x(t.append)&&((e=ot(t))==="formdata"||e==="object"&&x(t.toString)&&t.toString()==="[object FormData]"))},Ya=V("URLSearchParams"),Qa=t=>t.trim?t.trim():t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function Ue(t,e,{allOwnKeys:n=!1}={}){if(t===null||typeof t>"u")return;let r,i;if(typeof t!="object"&&(t=[t]),Ee(t))for(r=0,i=t.length;r<i;r++)e.call(null,t[r],r,t);else{const s=n?Object.getOwnPropertyNames(t):Object.keys(t),o=s.length;let l;for(r=0;r<o;r++)l=s[r],e.call(null,t[l],l,t)}}function Ar(t,e){e=e.toLowerCase();const n=Object.keys(t);let r=n.length,i;for(;r-- >0;)if(i=n[r],e===i.toLowerCase())return i;return null}const Or=t=>!Oe(t)&&t!=={};function Pt(){const{caseless:t}=Or(this)&&this||{},e={},n=(r,i)=>{const s=t&&Ar(e,i)||i;$e(e[s])&&$e(r)?e[s]=Pt(e[s],r):$e(r)?e[s]=Pt({},r):Ee(r)?e[s]=r.slice():e[s]=r};for(let r=0,i=arguments.length;r<i;r++)arguments[r]&&Ue(arguments[r],n);return e}const Za=(t,e,n,{allOwnKeys:r}={})=>(Ue(e,(i,s)=>{n&&x(i)?t[s]=Sr(i,n):t[s]=i},{allOwnKeys:r}),t),ec=t=>(t.charCodeAt(0)===65279&&(t=t.slice(1)),t),tc=(t,e,n,r)=>{t.prototype=Object.create(e.prototype,r),t.prototype.constructor=t,Object.defineProperty(t,"super",{value:e.prototype}),n&&Object.assign(t.prototype,n)},nc=(t,e,n,r)=>{let i,s,o;const l={};if(e=e||{},t==null)return e;do{for(i=Object.getOwnPropertyNames(t),s=i.length;s-- >0;)o=i[s],(!r||r(o,t,e))&&!l[o]&&(e[o]=t[o],l[o]=!0);t=n!==!1&&qt(t)}while(t&&(!n||n(t,e))&&t!==Object.prototype);return e},rc=(t,e,n)=>{t=String(t),(n===void 0||n>t.length)&&(n=t.length),n-=e.length;const r=t.indexOf(e,n);return r!==-1&&r===n},ic=t=>{if(!t)return null;if(Ee(t))return t;let e=t.length;if(!Rr(e))return null;const n=new Array(e);for(;e-- >0;)n[e]=t[e];return n},sc=(t=>e=>t&&e instanceof t)(typeof Uint8Array<"u"&&qt(Uint8Array)),oc=(t,e)=>{const r=(t&&t[Symbol.iterator]).call(t);let i;for(;(i=r.next())&&!i.done;){const s=i.value;e.call(t,s[0],s[1])}},ac=(t,e)=>{let n;const r=[];for(;(n=t.exec(e))!==null;)r.push(n);return r},cc=V("HTMLFormElement"),lc=t=>t.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,i){return r.toUpperCase()+i}),Sn=(({hasOwnProperty:t})=>(e,n)=>t.call(e,n))(Object.prototype),uc=V("RegExp"),Pr=(t,e)=>{const n=Object.getOwnPropertyDescriptors(t),r={};Ue(n,(i,s)=>{let o;(o=e(i,s,t))!==!1&&(r[s]=o||i)}),Object.defineProperties(t,r)},dc=t=>{Pr(t,(e,n)=>{if(x(t)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=t[n];if(x(r)){if(e.enumerable=!1,"writable"in e){e.writable=!1;return}e.set||(e.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},hc=(t,e)=>{const n={},r=i=>{i.forEach(s=>{n[s]=!0})};return Ee(t)?r(t):r(String(t).split(e)),n},fc=()=>{},pc=(t,e)=>(t=+t,Number.isFinite(t)?t:e),_t="abcdefghijklmnopqrstuvwxyz",Cn="0123456789",kr={DIGIT:Cn,ALPHA:_t,ALPHA_DIGIT:_t+_t.toUpperCase()+Cn},mc=(t=16,e=kr.ALPHA_DIGIT)=>{let n="";const{length:r}=e;for(;t--;)n+=e[Math.random()*r|0];return n};function gc(t){return!!(t&&x(t.append)&&t[Symbol.toStringTag]==="FormData"&&t[Symbol.iterator])}const yc=t=>{const e=new Array(10),n=(r,i)=>{if(ct(r)){if(e.indexOf(r)>=0)return;if(!("toJSON"in r)){e[i]=r;const s=Ee(r)?[]:{};return Ue(r,(o,l)=>{const u=n(o,i+1);!Oe(u)&&(s[l]=u)}),e[i]=void 0,s}}return r};return n(t,0)},_c=V("AsyncFunction"),vc=t=>t&&(ct(t)||x(t))&&x(t.then)&&x(t.catch),d={isArray:Ee,isArrayBuffer:Cr,isBuffer:ja,isFormData:Xa,isArrayBufferView:Va,isString:za,isNumber:Rr,isBoolean:Wa,isObject:ct,isPlainObject:$e,isUndefined:Oe,isDate:$a,isFile:qa,isBlob:Ga,isRegExp:uc,isFunction:x,isStream:Ja,isURLSearchParams:Ya,isTypedArray:sc,isFileList:Ka,forEach:Ue,merge:Pt,extend:Za,trim:Qa,stripBOM:ec,inherits:tc,toFlatObject:nc,kindOf:ot,kindOfTest:V,endsWith:rc,toArray:ic,forEachEntry:oc,matchAll:ac,isHTMLForm:cc,hasOwnProperty:Sn,hasOwnProp:Sn,reduceDescriptors:Pr,freezeMethods:dc,toObjectSet:hc,toCamelCase:lc,noop:fc,toFiniteNumber:pc,findKey:Ar,global:{},isContextDefined:Or,ALPHABET:kr,generateString:mc,isSpecCompliantForm:gc,toJSONObject:yc,isAsyncFn:_c,isThenable:vc};function S(t,e,n,r,i){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=t,this.name="AxiosError",e&&(this.code=e),n&&(this.config=n),r&&(this.request=r),i&&(this.response=i)}d.inherits(S,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:d.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Nr=S.prototype,Lr={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(t=>{Lr[t]={value:t}});Object.defineProperties(S,Lr);Object.defineProperty(Nr,"isAxiosError",{value:!0});S.from=(t,e,n,r,i,s)=>{const o=Object.create(Nr);return d.toFlatObject(t,o,function(u){return u!==Error.prototype},l=>l!=="isAxiosError"),S.call(o,t.message,e,n,r,i),o.cause=t,o.name=t.name,s&&Object.assign(o,s),o};const Ec=null;function kt(t){return d.isPlainObject(t)||d.isArray(t)}function Dr(t){return d.endsWith(t,"[]")?t.slice(0,-2):t}function Rn(t,e,n){return t?t.concat(e).map(function(i,s){return i=Dr(i),!n&&s?"["+i+"]":i}).join(n?".":""):e}function wc(t){return d.isArray(t)&&!t.some(kt)}const bc=d.toFlatObject(d,{},null,function(e){return/^is[A-Z]/.test(e)});function lt(t,e,n){if(!d.isObject(t))throw new TypeError("target must be an object");e=e||new FormData,n=d.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(_,C){return!d.isUndefined(C[_])});const r=n.metaTokens,i=n.visitor||p,s=n.dots,o=n.indexes,u=(n.Blob||typeof Blob<"u"&&Blob)&&d.isSpecCompliantForm(e);if(!d.isFunction(i))throw new TypeError("visitor must be a function");function h(v){if(v===null)return"";if(d.isDate(v))return v.toISOString();if(!u&&d.isBlob(v))throw new S("Blob is not supported. Use a Buffer instead.");return d.isArrayBuffer(v)||d.isTypedArray(v)?u&&typeof Blob=="function"?new Blob([v]):Buffer.from(v):v}function p(v,_,C){let P=v;if(v&&!C&&typeof v=="object"){if(d.endsWith(_,"{}"))_=r?_:_.slice(0,-2),v=JSON.stringify(v);else if(d.isArray(v)&&wc(v)||(d.isFileList(v)||d.endsWith(_,"[]"))&&(P=d.toArray(v)))return _=Dr(_),P.forEach(function(D,de){!(d.isUndefined(D)||D===null)&&e.append(o===!0?Rn([_],de,s):o===null?_:_+"[]",h(D))}),!1}return kt(v)?!0:(e.append(Rn(C,_,s),h(v)),!1)}const f=[],T=Object.assign(bc,{defaultVisitor:p,convertValue:h,isVisitable:kt});function O(v,_){if(!d.isUndefined(v)){if(f.indexOf(v)!==-1)throw Error("Circular reference detected in "+_.join("."));f.push(v),d.forEach(v,function(P,M){(!(d.isUndefined(P)||P===null)&&i.call(e,P,d.isString(M)?M.trim():M,_,T))===!0&&O(P,_?_.concat(M):[M])}),f.pop()}}if(!d.isObject(t))throw new TypeError("data must be an object");return O(t),e}function An(t){const e={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(t).replace(/[!'()~]|%20|%00/g,function(r){return e[r]})}function Gt(t,e){this._pairs=[],t&&lt(t,this,e)}const Mr=Gt.prototype;Mr.append=function(e,n){this._pairs.push([e,n])};Mr.toString=function(e){const n=e?function(r){return e.call(this,r,An)}:An;return this._pairs.map(function(i){return n(i[0])+"="+n(i[1])},"").join("&")};function Ic(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function xr(t,e,n){if(!e)return t;const r=n&&n.encode||Ic,i=n&&n.serialize;let s;if(i?s=i(e,n):s=d.isURLSearchParams(e)?e.toString():new Gt(e,n).toString(r),s){const o=t.indexOf("#");o!==-1&&(t=t.slice(0,o)),t+=(t.indexOf("?")===-1?"?":"&")+s}return t}class Tc{constructor(){this.handlers=[]}use(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(e){this.handlers[e]&&(this.handlers[e]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(e){d.forEach(this.handlers,function(r){r!==null&&e(r)})}}const On=Tc,Ur={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Sc=typeof URLSearchParams<"u"?URLSearchParams:Gt,Cc=typeof FormData<"u"?FormData:null,Rc=typeof Blob<"u"?Blob:null,Ac={isBrowser:!0,classes:{URLSearchParams:Sc,FormData:Cc,Blob:Rc},protocols:["http","https","file","blob","url","data"]},Br=typeof window<"u"&&typeof document<"u",Oc=(t=>Br&&["ReactNative","NativeScript","NS"].indexOf(t)<0)(typeof navigator<"u"&&navigator.product),Pc=(()=>typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")(),kc=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:Br,hasStandardBrowserEnv:Oc,hasStandardBrowserWebWorkerEnv:Pc},Symbol.toStringTag,{value:"Module"})),B={...kc,...Ac};function Nc(t,e){return lt(t,new B.classes.URLSearchParams,Object.assign({visitor:function(n,r,i,s){return B.isNode&&d.isBuffer(n)?(this.append(r,n.toString("base64")),!1):s.defaultVisitor.apply(this,arguments)}},e))}function Lc(t){return d.matchAll(/\w+|\[(\w*)]/g,t).map(e=>e[0]==="[]"?"":e[1]||e[0])}function Dc(t){const e={},n=Object.keys(t);let r;const i=n.length;let s;for(r=0;r<i;r++)s=n[r],e[s]=t[s];return e}function Fr(t){function e(n,r,i,s){let o=n[s++];if(o==="__proto__")return!0;const l=Number.isFinite(+o),u=s>=n.length;return o=!o&&d.isArray(i)?i.length:o,u?(d.hasOwnProp(i,o)?i[o]=[i[o],r]:i[o]=r,!l):((!i[o]||!d.isObject(i[o]))&&(i[o]=[]),e(n,r,i[o],s)&&d.isArray(i[o])&&(i[o]=Dc(i[o])),!l)}if(d.isFormData(t)&&d.isFunction(t.entries)){const n={};return d.forEachEntry(t,(r,i)=>{e(Lc(r),i,n,0)}),n}return null}function Mc(t,e,n){if(d.isString(t))try{return(e||JSON.parse)(t),d.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}const Kt={transitional:Ur,adapter:["xhr","http"],transformRequest:[function(e,n){const r=n.getContentType()||"",i=r.indexOf("application/json")>-1,s=d.isObject(e);if(s&&d.isHTMLForm(e)&&(e=new FormData(e)),d.isFormData(e))return i?JSON.stringify(Fr(e)):e;if(d.isArrayBuffer(e)||d.isBuffer(e)||d.isStream(e)||d.isFile(e)||d.isBlob(e))return e;if(d.isArrayBufferView(e))return e.buffer;if(d.isURLSearchParams(e))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),e.toString();let l;if(s){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Nc(e,this.formSerializer).toString();if((l=d.isFileList(e))||r.indexOf("multipart/form-data")>-1){const u=this.env&&this.env.FormData;return lt(l?{"files[]":e}:e,u&&new u,this.formSerializer)}}return s||i?(n.setContentType("application/json",!1),Mc(e)):e}],transformResponse:[function(e){const n=this.transitional||Kt.transitional,r=n&&n.forcedJSONParsing,i=this.responseType==="json";if(e&&d.isString(e)&&(r&&!this.responseType||i)){const o=!(n&&n.silentJSONParsing)&&i;try{return JSON.parse(e)}catch(l){if(o)throw l.name==="SyntaxError"?S.from(l,S.ERR_BAD_RESPONSE,this,null,this.response):l}}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:B.classes.FormData,Blob:B.classes.Blob},validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};d.forEach(["delete","get","head","post","put","patch"],t=>{Kt.headers[t]={}});const Jt=Kt,xc=d.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),Uc=t=>{const e={};let n,r,i;return t&&t.split(`
`).forEach(function(o){i=o.indexOf(":"),n=o.substring(0,i).trim().toLowerCase(),r=o.substring(i+1).trim(),!(!n||e[n]&&xc[n])&&(n==="set-cookie"?e[n]?e[n].push(r):e[n]=[r]:e[n]=e[n]?e[n]+", "+r:r)}),e},Pn=Symbol("internals");function we(t){return t&&String(t).trim().toLowerCase()}function qe(t){return t===!1||t==null?t:d.isArray(t)?t.map(qe):String(t)}function Bc(t){const e=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(t);)e[r[1]]=r[2];return e}const Fc=t=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(t.trim());function vt(t,e,n,r,i){if(d.isFunction(r))return r.call(this,e,n);if(i&&(e=n),!!d.isString(e)){if(d.isString(r))return e.indexOf(r)!==-1;if(d.isRegExp(r))return r.test(e)}}function Hc(t){return t.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(e,n,r)=>n.toUpperCase()+r)}function jc(t,e){const n=d.toCamelCase(" "+e);["get","set","has"].forEach(r=>{Object.defineProperty(t,r+n,{value:function(i,s,o){return this[r].call(this,e,i,s,o)},configurable:!0})})}class ut{constructor(e){e&&this.set(e)}set(e,n,r){const i=this;function s(l,u,h){const p=we(u);if(!p)throw new Error("header name must be a non-empty string");const f=d.findKey(i,p);(!f||i[f]===void 0||h===!0||h===void 0&&i[f]!==!1)&&(i[f||u]=qe(l))}const o=(l,u)=>d.forEach(l,(h,p)=>s(h,p,u));return d.isPlainObject(e)||e instanceof this.constructor?o(e,n):d.isString(e)&&(e=e.trim())&&!Fc(e)?o(Uc(e),n):e!=null&&s(n,e,r),this}get(e,n){if(e=we(e),e){const r=d.findKey(this,e);if(r){const i=this[r];if(!n)return i;if(n===!0)return Bc(i);if(d.isFunction(n))return n.call(this,i,r);if(d.isRegExp(n))return n.exec(i);throw new TypeError("parser must be boolean|regexp|function")}}}has(e,n){if(e=we(e),e){const r=d.findKey(this,e);return!!(r&&this[r]!==void 0&&(!n||vt(this,this[r],r,n)))}return!1}delete(e,n){const r=this;let i=!1;function s(o){if(o=we(o),o){const l=d.findKey(r,o);l&&(!n||vt(r,r[l],l,n))&&(delete r[l],i=!0)}}return d.isArray(e)?e.forEach(s):s(e),i}clear(e){const n=Object.keys(this);let r=n.length,i=!1;for(;r--;){const s=n[r];(!e||vt(this,this[s],s,e,!0))&&(delete this[s],i=!0)}return i}normalize(e){const n=this,r={};return d.forEach(this,(i,s)=>{const o=d.findKey(r,s);if(o){n[o]=qe(i),delete n[s];return}const l=e?Hc(s):String(s).trim();l!==s&&delete n[s],n[l]=qe(i),r[l]=!0}),this}concat(...e){return this.constructor.concat(this,...e)}toJSON(e){const n=Object.create(null);return d.forEach(this,(r,i)=>{r!=null&&r!==!1&&(n[i]=e&&d.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([e,n])=>e+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(e){return e instanceof this?e:new this(e)}static concat(e,...n){const r=new this(e);return n.forEach(i=>r.set(i)),r}static accessor(e){const r=(this[Pn]=this[Pn]={accessors:{}}).accessors,i=this.prototype;function s(o){const l=we(o);r[l]||(jc(i,o),r[l]=!0)}return d.isArray(e)?e.forEach(s):s(e),this}}ut.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);d.reduceDescriptors(ut.prototype,({value:t},e)=>{let n=e[0].toUpperCase()+e.slice(1);return{get:()=>t,set(r){this[n]=r}}});d.freezeMethods(ut);const q=ut;function Et(t,e){const n=this||Jt,r=e||n,i=q.from(r.headers);let s=r.data;return d.forEach(t,function(l){s=l.call(n,s,i.normalize(),e?e.status:void 0)}),i.normalize(),s}function Hr(t){return!!(t&&t.__CANCEL__)}function Be(t,e,n){S.call(this,t??"canceled",S.ERR_CANCELED,e,n),this.name="CanceledError"}d.inherits(Be,S,{__CANCEL__:!0});function Vc(t,e,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?t(n):e(new S("Request failed with status code "+n.status,[S.ERR_BAD_REQUEST,S.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}const zc=B.hasStandardBrowserEnv?{write(t,e,n,r,i,s){const o=[t+"="+encodeURIComponent(e)];d.isNumber(n)&&o.push("expires="+new Date(n).toGMTString()),d.isString(r)&&o.push("path="+r),d.isString(i)&&o.push("domain="+i),s===!0&&o.push("secure"),document.cookie=o.join("; ")},read(t){const e=document.cookie.match(new RegExp("(^|;\\s*)("+t+")=([^;]*)"));return e?decodeURIComponent(e[3]):null},remove(t){this.write(t,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Wc(t){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(t)}function $c(t,e){return e?t.replace(/\/?\/$/,"")+"/"+e.replace(/^\/+/,""):t}function jr(t,e){return t&&!Wc(e)?$c(t,e):e}const qc=B.hasStandardBrowserEnv?function(){const e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function i(s){let o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){const l=d.isString(o)?i(o):o;return l.protocol===r.protocol&&l.host===r.host}}():function(){return function(){return!0}}();function Gc(t){const e=/^([-+\w]{1,25})(:?\/\/|:)/.exec(t);return e&&e[1]||""}function Kc(t,e){t=t||10;const n=new Array(t),r=new Array(t);let i=0,s=0,o;return e=e!==void 0?e:1e3,function(u){const h=Date.now(),p=r[s];o||(o=h),n[i]=u,r[i]=h;let f=s,T=0;for(;f!==i;)T+=n[f++],f=f%t;if(i=(i+1)%t,i===s&&(s=(s+1)%t),h-o<e)return;const O=p&&h-p;return O?Math.round(T*1e3/O):void 0}}function kn(t,e){let n=0;const r=Kc(50,250);return i=>{const s=i.loaded,o=i.lengthComputable?i.total:void 0,l=s-n,u=r(l),h=s<=o;n=s;const p={loaded:s,total:o,progress:o?s/o:void 0,bytes:l,rate:u||void 0,estimated:u&&o&&h?(o-s)/u:void 0,event:i};p[e?"download":"upload"]=!0,t(p)}}const Jc=typeof XMLHttpRequest<"u",Xc=Jc&&function(t){return new Promise(function(n,r){let i=t.data;const s=q.from(t.headers).normalize();let{responseType:o,withXSRFToken:l}=t,u;function h(){t.cancelToken&&t.cancelToken.unsubscribe(u),t.signal&&t.signal.removeEventListener("abort",u)}let p;if(d.isFormData(i)){if(B.hasStandardBrowserEnv||B.hasStandardBrowserWebWorkerEnv)s.setContentType(!1);else if((p=s.getContentType())!==!1){const[_,...C]=p?p.split(";").map(P=>P.trim()).filter(Boolean):[];s.setContentType([_||"multipart/form-data",...C].join("; "))}}let f=new XMLHttpRequest;if(t.auth){const _=t.auth.username||"",C=t.auth.password?unescape(encodeURIComponent(t.auth.password)):"";s.set("Authorization","Basic "+btoa(_+":"+C))}const T=jr(t.baseURL,t.url);f.open(t.method.toUpperCase(),xr(T,t.params,t.paramsSerializer),!0),f.timeout=t.timeout;function O(){if(!f)return;const _=q.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),P={data:!o||o==="text"||o==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:_,config:t,request:f};Vc(function(D){n(D),h()},function(D){r(D),h()},P),f=null}if("onloadend"in f?f.onloadend=O:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(O)},f.onabort=function(){f&&(r(new S("Request aborted",S.ECONNABORTED,t,f)),f=null)},f.onerror=function(){r(new S("Network Error",S.ERR_NETWORK,t,f)),f=null},f.ontimeout=function(){let C=t.timeout?"timeout of "+t.timeout+"ms exceeded":"timeout exceeded";const P=t.transitional||Ur;t.timeoutErrorMessage&&(C=t.timeoutErrorMessage),r(new S(C,P.clarifyTimeoutError?S.ETIMEDOUT:S.ECONNABORTED,t,f)),f=null},B.hasStandardBrowserEnv&&(l&&d.isFunction(l)&&(l=l(t)),l||l!==!1&&qc(T))){const _=t.xsrfHeaderName&&t.xsrfCookieName&&zc.read(t.xsrfCookieName);_&&s.set(t.xsrfHeaderName,_)}i===void 0&&s.setContentType(null),"setRequestHeader"in f&&d.forEach(s.toJSON(),function(C,P){f.setRequestHeader(P,C)}),d.isUndefined(t.withCredentials)||(f.withCredentials=!!t.withCredentials),o&&o!=="json"&&(f.responseType=t.responseType),typeof t.onDownloadProgress=="function"&&f.addEventListener("progress",kn(t.onDownloadProgress,!0)),typeof t.onUploadProgress=="function"&&f.upload&&f.upload.addEventListener("progress",kn(t.onUploadProgress)),(t.cancelToken||t.signal)&&(u=_=>{f&&(r(!_||_.type?new Be(null,t,f):_),f.abort(),f=null)},t.cancelToken&&t.cancelToken.subscribe(u),t.signal&&(t.signal.aborted?u():t.signal.addEventListener("abort",u)));const v=Gc(T);if(v&&B.protocols.indexOf(v)===-1){r(new S("Unsupported protocol "+v+":",S.ERR_BAD_REQUEST,t));return}f.send(i||null)})},Nt={http:Ec,xhr:Xc};d.forEach(Nt,(t,e)=>{if(t){try{Object.defineProperty(t,"name",{value:e})}catch{}Object.defineProperty(t,"adapterName",{value:e})}});const Nn=t=>`- ${t}`,Yc=t=>d.isFunction(t)||t===null||t===!1,Vr={getAdapter:t=>{t=d.isArray(t)?t:[t];const{length:e}=t;let n,r;const i={};for(let s=0;s<e;s++){n=t[s];let o;if(r=n,!Yc(n)&&(r=Nt[(o=String(n)).toLowerCase()],r===void 0))throw new S(`Unknown adapter '${o}'`);if(r)break;i[o||"#"+s]=r}if(!r){const s=Object.entries(i).map(([l,u])=>`adapter ${l} `+(u===!1?"is not supported by the environment":"is not available in the build"));let o=e?s.length>1?`since :
`+s.map(Nn).join(`
`):" "+Nn(s[0]):"as no adapter specified";throw new S("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:Nt};function wt(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Be(null,t)}function Ln(t){return wt(t),t.headers=q.from(t.headers),t.data=Et.call(t,t.transformRequest),["post","put","patch"].indexOf(t.method)!==-1&&t.headers.setContentType("application/x-www-form-urlencoded",!1),Vr.getAdapter(t.adapter||Jt.adapter)(t).then(function(r){return wt(t),r.data=Et.call(t,t.transformResponse,r),r.headers=q.from(r.headers),r},function(r){return Hr(r)||(wt(t),r&&r.response&&(r.response.data=Et.call(t,t.transformResponse,r.response),r.response.headers=q.from(r.response.headers))),Promise.reject(r)})}const Dn=t=>t instanceof q?t.toJSON():t;function _e(t,e){e=e||{};const n={};function r(h,p,f){return d.isPlainObject(h)&&d.isPlainObject(p)?d.merge.call({caseless:f},h,p):d.isPlainObject(p)?d.merge({},p):d.isArray(p)?p.slice():p}function i(h,p,f){if(d.isUndefined(p)){if(!d.isUndefined(h))return r(void 0,h,f)}else return r(h,p,f)}function s(h,p){if(!d.isUndefined(p))return r(void 0,p)}function o(h,p){if(d.isUndefined(p)){if(!d.isUndefined(h))return r(void 0,h)}else return r(void 0,p)}function l(h,p,f){if(f in e)return r(h,p);if(f in t)return r(void 0,h)}const u={url:s,method:s,data:s,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,withXSRFToken:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:l,headers:(h,p)=>i(Dn(h),Dn(p),!0)};return d.forEach(Object.keys(Object.assign({},t,e)),function(p){const f=u[p]||i,T=f(t[p],e[p],p);d.isUndefined(T)&&f!==l||(n[p]=T)}),n}const zr="1.6.7",Xt={};["object","boolean","number","function","string","symbol"].forEach((t,e)=>{Xt[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});const Mn={};Xt.transitional=function(e,n,r){function i(s,o){return"[Axios v"+zr+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return(s,o,l)=>{if(e===!1)throw new S(i(o," has been removed"+(n?" in "+n:"")),S.ERR_DEPRECATED);return n&&!Mn[o]&&(Mn[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,l):!0}};function Qc(t,e,n){if(typeof t!="object")throw new S("options must be an object",S.ERR_BAD_OPTION_VALUE);const r=Object.keys(t);let i=r.length;for(;i-- >0;){const s=r[i],o=e[s];if(o){const l=t[s],u=l===void 0||o(l,s,t);if(u!==!0)throw new S("option "+s+" must be "+u,S.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new S("Unknown option "+s,S.ERR_BAD_OPTION)}}const Lt={assertOptions:Qc,validators:Xt},X=Lt.validators;class tt{constructor(e){this.defaults=e,this.interceptors={request:new On,response:new On}}async request(e,n){try{return await this._request(e,n)}catch(r){if(r instanceof Error){let i;Error.captureStackTrace?Error.captureStackTrace(i={}):i=new Error;const s=i.stack?i.stack.replace(/^.+\n/,""):"";r.stack?s&&!String(r.stack).endsWith(s.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+s):r.stack=s}throw r}}_request(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=_e(this.defaults,n);const{transitional:r,paramsSerializer:i,headers:s}=n;r!==void 0&&Lt.assertOptions(r,{silentJSONParsing:X.transitional(X.boolean),forcedJSONParsing:X.transitional(X.boolean),clarifyTimeoutError:X.transitional(X.boolean)},!1),i!=null&&(d.isFunction(i)?n.paramsSerializer={serialize:i}:Lt.assertOptions(i,{encode:X.function,serialize:X.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=s&&d.merge(s.common,s[n.method]);s&&d.forEach(["delete","get","head","post","put","patch","common"],v=>{delete s[v]}),n.headers=q.concat(o,s);const l=[];let u=!0;this.interceptors.request.forEach(function(_){typeof _.runWhen=="function"&&_.runWhen(n)===!1||(u=u&&_.synchronous,l.unshift(_.fulfilled,_.rejected))});const h=[];this.interceptors.response.forEach(function(_){h.push(_.fulfilled,_.rejected)});let p,f=0,T;if(!u){const v=[Ln.bind(this),void 0];for(v.unshift.apply(v,l),v.push.apply(v,h),T=v.length,p=Promise.resolve(n);f<T;)p=p.then(v[f++],v[f++]);return p}T=l.length;let O=n;for(f=0;f<T;){const v=l[f++],_=l[f++];try{O=v(O)}catch(C){_.call(this,C);break}}try{p=Ln.call(this,O)}catch(v){return Promise.reject(v)}for(f=0,T=h.length;f<T;)p=p.then(h[f++],h[f++]);return p}getUri(e){e=_e(this.defaults,e);const n=jr(e.baseURL,e.url);return xr(n,e.params,e.paramsSerializer)}}d.forEach(["delete","get","head","options"],function(e){tt.prototype[e]=function(n,r){return this.request(_e(r||{},{method:e,url:n,data:(r||{}).data}))}});d.forEach(["post","put","patch"],function(e){function n(r){return function(s,o,l){return this.request(_e(l||{},{method:e,headers:r?{"Content-Type":"multipart/form-data"}:{},url:s,data:o}))}}tt.prototype[e]=n(),tt.prototype[e+"Form"]=n(!0)});const Ge=tt;class Yt{constructor(e){if(typeof e!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(s){n=s});const r=this;this.promise.then(i=>{if(!r._listeners)return;let s=r._listeners.length;for(;s-- >0;)r._listeners[s](i);r._listeners=null}),this.promise.then=i=>{let s;const o=new Promise(l=>{r.subscribe(l),s=l}).then(i);return o.cancel=function(){r.unsubscribe(s)},o},e(function(s,o,l){r.reason||(r.reason=new Be(s,o,l),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]}unsubscribe(e){if(!this._listeners)return;const n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}static source(){let e;return{token:new Yt(function(i){e=i}),cancel:e}}}const Zc=Yt;function el(t){return function(n){return t.apply(null,n)}}function tl(t){return d.isObject(t)&&t.isAxiosError===!0}const Dt={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(Dt).forEach(([t,e])=>{Dt[e]=t});const nl=Dt;function Wr(t){const e=new Ge(t),n=Sr(Ge.prototype.request,e);return d.extend(n,Ge.prototype,e,{allOwnKeys:!0}),d.extend(n,e,null,{allOwnKeys:!0}),n.create=function(i){return Wr(_e(t,i))},n}const k=Wr(Jt);k.Axios=Ge;k.CanceledError=Be;k.CancelToken=Zc;k.isCancel=Hr;k.VERSION=zr;k.toFormData=lt;k.AxiosError=S;k.Cancel=k.CanceledError;k.all=function(e){return Promise.all(e)};k.spread=el;k.isAxiosError=tl;k.mergeConfig=_e;k.AxiosHeaders=q;k.formToJSON=t=>Fr(d.isHTMLForm(t)?new FormData(t):t);k.getAdapter=Vr.getAdapter;k.HttpStatusCode=nl;k.default=k;const ll=k;export{il as a,ll as b,rl as c,cl as g,ds as i,ol as o,al as s,sl as u};
//# sourceMappingURL=vendor-a5748273.js.map
