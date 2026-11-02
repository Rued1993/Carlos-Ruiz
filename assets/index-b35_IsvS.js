(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="170",Vu=0,hc=1,Wu=2,Fh=1,Xu=2,ei=3,Pi=0,nn=1,fn=2,Ei=0,xs=1,Ua=2,uc=3,fc=4,qu=5,Gi=100,Yu=101,$u=102,Ku=103,ju=104,Zu=200,Ju=201,Qu=202,tf=203,Na=204,Oa=205,ef=206,nf=207,sf=208,rf=209,of=210,af=211,lf=212,cf=213,hf=214,Fa=0,Ba=1,za=2,bs=3,ka=4,Ha=5,Ga=6,Va=7,Il=0,uf=1,ff=2,bi=0,df=1,pf=2,mf=3,gf=4,_f=5,vf=6,xf=7,Bh=300,Ts=301,ws=302,Wa=303,Xa=304,Ao=306,oo=1e3,Wi=1001,qa=1002,fe=1003,Mf=1004,fr=1005,Vn=1006,Bo=1007,Xi=1008,ai=1009,zh=1010,kh=1011,Qs=1012,Ul=1013,Yi=1014,ii=1015,rr=1016,Nl=1017,Ol=1018,As=1020,Hh=35902,Gh=1021,Vh=1022,Nn=1023,Wh=1024,Xh=1025,Ms=1026,Rs=1027,qh=1028,Fl=1029,Yh=1030,Bl=1031,zl=1033,jr=33776,Zr=33777,Jr=33778,Qr=33779,Ya=35840,$a=35841,Ka=35842,ja=35843,Za=36196,Ja=37492,Qa=37496,tl=37808,el=37809,nl=37810,il=37811,sl=37812,rl=37813,ol=37814,al=37815,ll=37816,cl=37817,hl=37818,ul=37819,fl=37820,dl=37821,to=36492,pl=36494,ml=36495,$h=36283,gl=36284,_l=36285,vl=36286,yf=3200,Sf=3201,Kh=0,Ef=1,yi="",$e="srgb",Ls="srgb-linear",Ro="linear",ce="srgb",Qi=7680,dc=519,bf=512,Tf=513,wf=514,jh=515,Af=516,Rf=517,Cf=518,Pf=519,xl=35044,pc="300 es",si=2e3,ao=2001;class Ds{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const Xe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],eo=Math.PI/180,Ml=180/Math.PI;function Ti(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Xe[i&255]+Xe[i>>8&255]+Xe[i>>16&255]+Xe[i>>24&255]+"-"+Xe[t&255]+Xe[t>>8&255]+"-"+Xe[t>>16&15|64]+Xe[t>>24&255]+"-"+Xe[e&63|128]+Xe[e>>8&255]+"-"+Xe[e>>16&255]+Xe[e>>24&255]+Xe[n&255]+Xe[n>>8&255]+Xe[n>>16&255]+Xe[n>>24&255]).toLowerCase()}function hn(i,t,e){return Math.max(t,Math.min(e,i))}function Lf(i,t){return(i%t+t)%t}function zo(i,t,e){return(1-e)*i+e*t}function Gn(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function he(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class qt{constructor(t=0,e=0){qt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(hn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*n-o*s+t.x,this.y=r*s+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,n,s,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c)}set(t,e,n,s,r,o,a,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],E=s[1],b=s[4],M=s[7],P=s[2],A=s[5],T=s[8];return r[0]=o*_+a*E+l*P,r[3]=o*m+a*b+l*A,r[6]=o*d+a*M+l*T,r[1]=c*_+h*E+u*P,r[4]=c*m+h*b+u*A,r[7]=c*d+h*M+u*T,r[2]=f*_+p*E+g*P,r[5]=f*m+p*b+g*A,r[8]=f*d+p*M+g*T,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8];return e*o*h-e*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=h*o-a*c,f=a*l-h*r,p=c*r-o*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(a*n-s*o)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(o*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ko.makeScale(t,e)),this}rotate(t){return this.premultiply(ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new kt;function Zh(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function lo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Df(){const i=lo("canvas");return i.style.display="block",i}const mc={};function Xs(i){i in mc||(mc[i]=!0,console.warn(i))}function If(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Uf(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Nf(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:Ls,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(i.r=ri(i.r),i.g=ri(i.g),i.b=ri(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(i.r=ys(i.r),i.g=ys(i.g),i.b=ys(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===yi?Ro:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function ri(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function ys(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const gc=[.64,.33,.3,.6,.15,.06],_c=[.2126,.7152,.0722],vc=[.3127,.329],xc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Mc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Ls]:{primaries:gc,whitePoint:vc,transfer:Ro,toXYZ:xc,fromXYZ:Mc,luminanceCoefficients:_c,workingColorSpaceConfig:{unpackColorSpace:$e},outputColorSpaceConfig:{drawingBufferColorSpace:$e}},[$e]:{primaries:gc,whitePoint:vc,transfer:ce,toXYZ:xc,fromXYZ:Mc,luminanceCoefficients:_c,outputColorSpaceConfig:{drawingBufferColorSpace:$e}}});let ts;class Of{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ts===void 0&&(ts=lo("canvas")),ts.width=t.width,ts.height=t.height;const n=ts.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ts}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=lo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=ri(r[o]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(ri(e[n]/255)*255):e[n]=ri(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ff=0;class Jh{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ff++}),this.uuid=Ti(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ho(s[o].image)):r.push(Ho(s[o]))}else r=Ho(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function Ho(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Of.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bf=0;class sn extends Ds{constructor(t=sn.DEFAULT_IMAGE,e=sn.DEFAULT_MAPPING,n=Wi,s=Wi,r=Vn,o=Xi,a=Nn,l=ai,c=sn.DEFAULT_ANISOTROPY,h=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bf++}),this.uuid=Ti(),this.name="",this.source=new Jh(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new qt(0,0),this.repeat=new qt(1,1),this.center=new qt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Bh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case oo:t.x=t.x-Math.floor(t.x);break;case Wi:t.x=t.x<0?0:1;break;case qa:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case oo:t.y=t.y-Math.floor(t.y);break;case Wi:t.y=t.y<0?0:1;break;case qa:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}sn.DEFAULT_IMAGE=null;sn.DEFAULT_MAPPING=Bh;sn.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,n=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*n+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(c+1)/2,M=(p+1)/2,P=(d+1)/2,A=(h+f)/4,T=(u+_)/4,R=(g+m)/4;return b>M&&b>P?b<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(b),s=A/n,r=T/n):M>P?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=A/s,r=R/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=T/r,s=R/r),this.set(n,s,r,e),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(f-h)/E,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class zf extends Ds{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new sn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Jh(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class $i extends zf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Qh extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fe,this.minFilter=fe,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class kf extends sn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=fe,this.minFilter=fe,this.wrapR=Wi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class or{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(a===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-a;const d=l*f+c*p+h*g+u*_,E=d>=0?1:-1,b=1-d*d;if(b>Number.EPSILON){const P=Math.sqrt(b),A=Math.atan2(P,d*E);m=Math.sin(m*A)/P,a=Math.sin(a*A)/P}const M=a*E;if(l=l*m+f*M,c=c*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],f=r[o+1],p=r[o+2],g=r[o+3];return t[e]=a*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-a*p,t[e+2]=c*g+h*p+a*f-l*u,t[e+3]=h*g-a*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+a+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(hn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+n*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*o+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=o*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(yc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(yc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*n),h=2*(a*e-r*s),u=2*(r*n-o*e);return this.x=e+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Go.copy(this).projectOnVector(t),this.sub(Go)}reflect(t){return this.sub(Go.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(hn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Go=new L,yc=new or;class ar{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Ln.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Ln.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Ln.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,Ln):Ln.fromBufferAttribute(r,o),Ln.applyMatrix4(t.matrixWorld),this.expandByPoint(Ln);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),dr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),dr.copy(n.boundingBox)),dr.applyMatrix4(t.matrixWorld),this.union(dr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ln),Ln.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Os),pr.subVectors(this.max,Os),es.subVectors(t.a,Os),ns.subVectors(t.b,Os),is.subVectors(t.c,Os),di.subVectors(ns,es),pi.subVectors(is,ns),Ui.subVectors(es,is);let e=[0,-di.z,di.y,0,-pi.z,pi.y,0,-Ui.z,Ui.y,di.z,0,-di.x,pi.z,0,-pi.x,Ui.z,0,-Ui.x,-di.y,di.x,0,-pi.y,pi.x,0,-Ui.y,Ui.x,0];return!Vo(e,es,ns,is,pr)||(e=[1,0,0,0,1,0,0,0,1],!Vo(e,es,ns,is,pr))?!1:(mr.crossVectors(di,pi),e=[mr.x,mr.y,mr.z],Vo(e,es,ns,is,pr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ln).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ln).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Kn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Kn=[new L,new L,new L,new L,new L,new L,new L,new L],Ln=new L,dr=new ar,es=new L,ns=new L,is=new L,di=new L,pi=new L,Ui=new L,Os=new L,pr=new L,mr=new L,Ni=new L;function Vo(i,t,e,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Ni.fromArray(i,r);const a=s.x*Math.abs(Ni.x)+s.y*Math.abs(Ni.y)+s.z*Math.abs(Ni.z),l=t.dot(Ni),c=e.dot(Ni),h=n.dot(Ni);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const Hf=new ar,Fs=new L,Wo=new L;class lr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Hf.setFromPoints(t).getCenter(n);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Fs.subVectors(t,this.center);const e=Fs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Fs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Fs.copy(t.center).add(Wo)),this.expandByPoint(Fs.copy(t.center).sub(Wo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const jn=new L,Xo=new L,gr=new L,mi=new L,qo=new L,_r=new L,Yo=new L;class kl{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(jn.copy(this.origin).addScaledVector(this.direction,e),jn.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Xo.copy(t).add(e).multiplyScalar(.5),gr.copy(e).sub(t).normalize(),mi.copy(this.origin).sub(Xo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(gr),a=mi.dot(this.direction),l=-mi.dot(gr),c=mi.lengthSq(),h=Math.abs(1-o*o);let u,f,p,g;if(h>0)if(u=o*l-a,f=o*a-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+o*f+2*a)+f*(o*u+f+2*l)+c}else f=r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-o*r+a)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(o*r+a)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=o>0?-r:r,u=Math.max(0,-(o*f+a)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Xo).addScaledVector(gr,f),p}intersectSphere(t,e){jn.subVectors(t.center,this.origin);const n=jn.dot(this.direction),s=jn.dot(jn)-n*n,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,o=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,o=(t.min.y-f.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(a=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,jn)!==null}intersectTriangle(t,e,n,s,r){qo.subVectors(e,t),_r.subVectors(n,t),Yo.crossVectors(qo,_r);let o=this.direction.dot(Yo),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;mi.subVectors(this.origin,t);const l=a*this.direction.dot(_r.crossVectors(mi,_r));if(l<0)return null;const c=a*this.direction.dot(qo.cross(mi));if(c<0||l+c>o)return null;const h=-a*mi.dot(Yo);return h<0?null:this.at(h/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,s,r,o,a,l,c,h,u,f,p,g,_,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,_,m)}set(t,e,n,s,r,o,a,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ss.setFromMatrixColumn(t,0).length(),r=1/ss.setFromMatrixColumn(t,1).length(),o=1/ss.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-a*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=o*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*a,e[4]=g*a-p,e[8]=o*c,e[1]=o*u,e[5]=o*h,e[9]=-a,e[2]=p*a-g,e[6]=_+f*a,e[10]=o*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*a,e[4]=-o*u,e[8]=g+p*a,e[1]=p+g*a,e[5]=o*h,e[9]=_-f*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const f=o*h,p=o*u,g=a*h,_=a*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=o*h,e[9]=-a*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=o*l,p=o*c,g=a*l,_=a*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=o*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=a*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Gf,t,Vf)}lookAt(t,e,n){const s=this.elements;return mn.subVectors(t,e),mn.lengthSq()===0&&(mn.z=1),mn.normalize(),gi.crossVectors(n,mn),gi.lengthSq()===0&&(Math.abs(n.z)===1?mn.x+=1e-4:mn.z+=1e-4,mn.normalize(),gi.crossVectors(n,mn)),gi.normalize(),vr.crossVectors(mn,gi),s[0]=gi.x,s[4]=vr.x,s[8]=mn.x,s[1]=gi.y,s[5]=vr.y,s[9]=mn.y,s[2]=gi.z,s[6]=vr.z,s[10]=mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],E=n[3],b=n[7],M=n[11],P=n[15],A=s[0],T=s[4],R=s[8],y=s[12],v=s[1],C=s[5],U=s[9],F=s[13],q=s[2],W=s[6],V=s[10],Y=s[14],z=s[3],st=s[7],pt=s[11],yt=s[15];return r[0]=o*A+a*v+l*q+c*z,r[4]=o*T+a*C+l*W+c*st,r[8]=o*R+a*U+l*V+c*pt,r[12]=o*y+a*F+l*Y+c*yt,r[1]=h*A+u*v+f*q+p*z,r[5]=h*T+u*C+f*W+p*st,r[9]=h*R+u*U+f*V+p*pt,r[13]=h*y+u*F+f*Y+p*yt,r[2]=g*A+_*v+m*q+d*z,r[6]=g*T+_*C+m*W+d*st,r[10]=g*R+_*U+m*V+d*pt,r[14]=g*y+_*F+m*Y+d*yt,r[3]=E*A+b*v+M*q+P*z,r[7]=E*T+b*C+M*W+P*st,r[11]=E*R+b*U+M*V+P*pt,r[15]=E*y+b*F+M*Y+P*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*a*f+n*c*f+s*a*p-n*l*p)+_*(+e*l*p-e*c*f+r*o*f-s*o*p+s*c*h-r*l*h)+m*(+e*c*u-e*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+d*(-s*a*h-e*l*u+e*a*f+s*o*u-n*o*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],E=u*m*c-_*f*c+_*l*p-a*m*p-u*l*d+a*f*d,b=g*f*c-h*m*c-g*l*p+o*m*p+h*l*d-o*f*d,M=h*_*c-g*u*c+g*a*p-o*_*p-h*a*d+o*u*d,P=g*u*l-h*_*l-g*a*f+o*_*f+h*a*m-o*u*m,A=e*E+n*b+s*M+r*P;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const T=1/A;return t[0]=E*T,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*T,t[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*d+n*l*d)*T,t[3]=(u*l*r-a*f*r-u*s*c+n*f*c+a*s*p-n*l*p)*T,t[4]=b*T,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*T,t[6]=(g*l*r-o*m*r-g*s*c+e*m*c+o*s*d-e*l*d)*T,t[7]=(o*f*r-h*l*r+h*s*c-e*f*c-o*s*p+e*l*p)*T,t[8]=M*T,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*T,t[10]=(o*_*r-g*a*r+g*n*c-e*_*c-o*n*d+e*a*d)*T,t[11]=(h*a*r-o*u*r-h*n*c+e*u*c+o*n*p-e*a*p)*T,t[12]=P*T,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*T,t[14]=(g*a*s-o*_*s-g*n*l+e*_*l+o*n*m-e*a*m)*T,t[15]=(o*u*s-h*a*s+h*n*l-e*u*l-o*n*f+e*a*f)*T,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,o=t.x,a=t.y,l=t.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,o){return this.set(1,n,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,h=o+o,u=a+a,f=r*c,p=r*h,g=r*u,_=o*h,m=o*u,d=a*u,E=l*c,b=l*h,M=l*u,P=n.x,A=n.y,T=n.z;return s[0]=(1-(_+d))*P,s[1]=(p+M)*P,s[2]=(g-b)*P,s[3]=0,s[4]=(p-M)*A,s[5]=(1-(f+d))*A,s[6]=(m+E)*A,s[7]=0,s[8]=(g+b)*T,s[9]=(m-E)*T,s[10]=(1-(f+_))*T,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ss.set(s[0],s[1],s[2]).length();const o=ss.set(s[4],s[5],s[6]).length(),a=ss.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Dn.copy(this);const c=1/r,h=1/o,u=1/a;return Dn.elements[0]*=c,Dn.elements[1]*=c,Dn.elements[2]*=c,Dn.elements[4]*=h,Dn.elements[5]*=h,Dn.elements[6]*=h,Dn.elements[8]*=u,Dn.elements[9]*=u,Dn.elements[10]*=u,e.setFromRotationMatrix(Dn),n.x=r,n.y=o,n.z=a,this}makePerspective(t,e,n,s,r,o,a=si){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(a===si)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ao)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,o,a=si){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(o-r),f=(e+t)*c,p=(n+s)*h;let g,_;if(a===si)g=(o+r)*u,_=-2*u;else if(a===ao)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ss=new L,Dn=new ye,Gf=new L(0,0,0),Vf=new L(1,1,1),gi=new L,vr=new L,mn=new L,Sc=new ye,Ec=new or;class qn{constructor(t=0,e=0,n=0,s=qn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(hn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-hn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(hn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-hn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(hn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-hn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Sc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Sc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ec.setFromEuler(this),this.setFromQuaternion(Ec,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qn.DEFAULT_ORDER="XYZ";class tu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Wf=0;const bc=new L,rs=new or,Zn=new ye,xr=new L,Bs=new L,Xf=new L,qf=new or,Tc=new L(1,0,0),wc=new L(0,1,0),Ac=new L(0,0,1),Rc={type:"added"},Yf={type:"removed"},os={type:"childadded",child:null},$o={type:"childremoved",child:null};class Ne extends Ds{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Wf++}),this.uuid=Ti(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ne.DEFAULT_UP.clone();const t=new L,e=new qn,n=new or,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new kt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Ne.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.multiply(rs),this}rotateOnWorldAxis(t,e){return rs.setFromAxisAngle(t,e),this.quaternion.premultiply(rs),this}rotateX(t){return this.rotateOnAxis(Tc,t)}rotateY(t){return this.rotateOnAxis(wc,t)}rotateZ(t){return this.rotateOnAxis(Ac,t)}translateOnAxis(t,e){return bc.copy(t).applyQuaternion(this.quaternion),this.position.add(bc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Tc,t)}translateY(t){return this.translateOnAxis(wc,t)}translateZ(t){return this.translateOnAxis(Ac,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Zn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?xr.copy(t):xr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Bs.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Zn.lookAt(Bs,xr,this.up):Zn.lookAt(xr,Bs,this.up),this.quaternion.setFromRotationMatrix(Zn),s&&(Zn.extractRotation(s.matrixWorld),rs.setFromRotationMatrix(Zn),this.quaternion.premultiply(rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Rc),os.child=t,this.dispatchEvent(os),os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Yf),$o.child=t,this.dispatchEvent($o),$o.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Zn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Zn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Zn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Rc),os.child=t,this.dispatchEvent(os),os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,t,Xf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Bs,qf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),h=o(t.images),u=o(t.shapes),f=o(t.skeletons),p=o(t.animations),g=o(t.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ne.DEFAULT_UP=new L(0,1,0);Ne.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ne.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const In=new L,Jn=new L,Ko=new L,Qn=new L,as=new L,ls=new L,Cc=new L,jo=new L,Zo=new L,Jo=new L,Qo=new Pe,ta=new Pe,ea=new Pe;class xn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),In.subVectors(t,e),s.cross(In);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){In.subVectors(s,e),Jn.subVectors(n,e),Ko.subVectors(t,e);const o=In.dot(In),a=In.dot(Jn),l=In.dot(Ko),c=Jn.dot(Jn),h=Jn.dot(Ko),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-a*h)*f,g=(o*h-a*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,Qn)===null?!1:Qn.x>=0&&Qn.y>=0&&Qn.x+Qn.y<=1}static getInterpolation(t,e,n,s,r,o,a,l){return this.getBarycoord(t,e,n,s,Qn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qn.x),l.addScaledVector(o,Qn.y),l.addScaledVector(a,Qn.z),l)}static getInterpolatedAttribute(t,e,n,s,r,o){return Qo.setScalar(0),ta.setScalar(0),ea.setScalar(0),Qo.fromBufferAttribute(t,e),ta.fromBufferAttribute(t,n),ea.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(Qo,r.x),o.addScaledVector(ta,r.y),o.addScaledVector(ea,r.z),o}static isFrontFacing(t,e,n,s){return In.subVectors(n,e),Jn.subVectors(t,e),In.cross(Jn).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return In.subVectors(this.c,this.b),Jn.subVectors(this.a,this.b),In.cross(Jn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return xn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return xn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return xn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return xn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return xn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let o,a;as.subVectors(s,n),ls.subVectors(r,n),jo.subVectors(t,n);const l=as.dot(jo),c=ls.dot(jo);if(l<=0&&c<=0)return e.copy(n);Zo.subVectors(t,s);const h=as.dot(Zo),u=ls.dot(Zo);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return o=l/(l-h),e.copy(n).addScaledVector(as,o);Jo.subVectors(t,r);const p=as.dot(Jo),g=ls.dot(Jo);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),e.copy(n).addScaledVector(ls,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return Cc.subVectors(r,s),a=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(Cc,a);const d=1/(m+_+f);return o=_*d,a=f*d,e.copy(n).addScaledVector(as,o).addScaledVector(ls,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const eu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},_i={h:0,s:0,l:0},Mr={h:0,s:0,l:0};function na(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Pt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=$e){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=Lf(t,1),e=hn(e,0,1),n=hn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,o=2*n-r;this.r=na(o,r,t+1/3),this.g=na(o,r,t),this.b=na(o,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=$e){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=$e){const n=eu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ri(t.r),this.g=ri(t.g),this.b=ri(t.b),this}copyLinearToSRGB(t){return this.r=ys(t.r),this.g=ys(t.g),this.b=ys(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=$e){return Qt.fromWorkingColorSpace(qe.copy(this),t),Math.round(hn(qe.r*255,0,255))*65536+Math.round(hn(qe.g*255,0,255))*256+Math.round(hn(qe.b*255,0,255))}getHexString(t=$e){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(qe.copy(this),e);const n=qe.r,s=qe.g,r=qe.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(qe.copy(this),e),t.r=qe.r,t.g=qe.g,t.b=qe.b,t}getStyle(t=$e){Qt.fromWorkingColorSpace(qe.copy(this),t);const e=qe.r,n=qe.g,s=qe.b;return t!==$e?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(_i),this.setHSL(_i.h+t,_i.s+e,_i.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(_i),t.getHSL(Mr);const n=zo(_i.h,Mr.h,e),s=zo(_i.s,Mr.s,e),r=zo(_i.l,Mr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const qe=new Pt;Pt.NAMES=eu;let $f=0;class Di extends Ds{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$f++}),this.uuid=Ti(),this.name="",this.blending=xs,this.side=Pi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Na,this.blendDst=Oa,this.blendEquation=Gi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=dc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Qi,this.stencilZFail=Qi,this.stencilZPass=Qi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==xs&&(n.blending=this.blending),this.side!==Pi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Na&&(n.blendSrc=this.blendSrc),this.blendDst!==Oa&&(n.blendDst=this.blendDst),this.blendEquation!==Gi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==dc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Qi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Qi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Qi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class we extends Di{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const De=new L,yr=new qt;class dn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=xl,this.updateRanges=[],this.gpuType=ii,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)yr.fromBufferAttribute(this,e),yr.applyMatrix3(t),this.setXY(e,yr.x,yr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix3(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyMatrix4(t),this.setXYZ(e,De.x,De.y,De.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.applyNormalMatrix(t),this.setXYZ(e,De.x,De.y,De.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)De.fromBufferAttribute(this,e),De.transformDirection(t),this.setXYZ(e,De.x,De.y,De.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Gn(e,this.array)),e}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Gn(e,this.array)),e}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Gn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Gn(e,this.array)),e}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==xl&&(t.usage=this.usage),t}}class nu extends dn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class iu extends dn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Ce extends dn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Kf=0;const Sn=new ye,ia=new Ne,cs=new L,gn=new ar,zs=new ar,ze=new L;class Ve extends Ds{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Kf++}),this.uuid=Ti(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Zh(t)?iu:nu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new kt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Sn.makeRotationFromQuaternion(t),this.applyMatrix4(Sn),this}rotateX(t){return Sn.makeRotationX(t),this.applyMatrix4(Sn),this}rotateY(t){return Sn.makeRotationY(t),this.applyMatrix4(Sn),this}rotateZ(t){return Sn.makeRotationZ(t),this.applyMatrix4(Sn),this}translate(t,e,n){return Sn.makeTranslation(t,e,n),this.applyMatrix4(Sn),this}scale(t,e,n){return Sn.makeScale(t,e,n),this.applyMatrix4(Sn),this}lookAt(t){return ia.lookAt(t),ia.updateMatrix(),this.applyMatrix4(ia.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cs).negate(),this.translate(cs.x,cs.y,cs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ce(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];gn.setFromBufferAttribute(r),this.morphTargetsRelative?(ze.addVectors(this.boundingBox.min,gn.min),this.boundingBox.expandByPoint(ze),ze.addVectors(this.boundingBox.max,gn.max),this.boundingBox.expandByPoint(ze)):(this.boundingBox.expandByPoint(gn.min),this.boundingBox.expandByPoint(gn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(gn.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];zs.setFromBufferAttribute(a),this.morphTargetsRelative?(ze.addVectors(gn.min,zs.min),gn.expandByPoint(ze),ze.addVectors(gn.max,zs.max),gn.expandByPoint(ze)):(gn.expandByPoint(zs.min),gn.expandByPoint(zs.max))}gn.getCenter(n);let s=0;for(let r=0,o=t.count;r<o;r++)ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(ze));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)ze.fromBufferAttribute(a,c),l&&(cs.fromBufferAttribute(t,c),ze.add(cs)),s=Math.max(s,n.distanceToSquared(ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new dn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<n.count;R++)a[R]=new L,l[R]=new L;const c=new L,h=new L,u=new L,f=new qt,p=new qt,g=new qt,_=new L,m=new L;function d(R,y,v){c.fromBufferAttribute(n,R),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,v),f.fromBufferAttribute(r,R),p.fromBufferAttribute(r,y),g.fromBufferAttribute(r,v),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const C=1/(p.x*g.y-g.x*p.y);isFinite(C)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(C),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(C),a[R].add(_),a[y].add(_),a[v].add(_),l[R].add(m),l[y].add(m),l[v].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:t.count}]);for(let R=0,y=E.length;R<y;++R){const v=E[R],C=v.start,U=v.count;for(let F=C,q=C+U;F<q;F+=3)d(t.getX(F+0),t.getX(F+1),t.getX(F+2))}const b=new L,M=new L,P=new L,A=new L;function T(R){P.fromBufferAttribute(s,R),A.copy(P);const y=a[R];b.copy(y),b.sub(P.multiplyScalar(P.dot(y))).normalize(),M.crossVectors(A,y);const C=M.dot(l[R])<0?-1:1;o.setXYZW(R,b.x,b.y,b.z,C)}for(let R=0,y=E.length;R<y;++R){const v=E[R],C=v.start,U=v.count;for(let F=C,q=C+U;F<q;F+=3)T(t.getX(F+0)),T(t.getX(F+1)),T(t.getX(F+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new dn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,o=new L,a=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),o.fromBufferAttribute(e,f+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)ze.fromBufferAttribute(t,e),ze.normalize(),t.setXYZ(e,ze.x,ze.y,ze.z)}toNonIndexed(){function t(a,l){const c=a.array,h=a.itemSize,u=a.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new dn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ve,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,n);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pc=new ye,Oi=new kl,Sr=new lr,Lc=new L,Er=new L,br=new L,Tr=new L,sa=new L,wr=new L,Dc=new L,Ar=new L;class Vt extends Ne{constructor(t=new Ve,e=new we){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){wr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(sa.fromBufferAttribute(u,t),o?wr.addScaledVector(sa,h):wr.addScaledVector(sa.sub(e),h))}e.add(wr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Sr.copy(n.boundingSphere),Sr.applyMatrix4(r),Oi.copy(t.ray).recast(t.near),!(Sr.containsPoint(Oi.origin)===!1&&(Oi.intersectSphere(Sr,Lc)===null||Oi.origin.distanceToSquared(Lc)>(t.far-t.near)**2))&&(Pc.copy(r).invert(),Oi.copy(t.ray).applyMatrix4(Pc),!(n.boundingBox!==null&&Oi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Oi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,P=b;M<P;M+=3){const A=a.getX(M),T=a.getX(M+1),R=a.getX(M+2);s=Rr(this,d,t,n,c,h,u,A,T,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=a.getX(m),b=a.getX(m+1),M=a.getX(m+2);s=Rr(this,o,t,n,c,h,u,E,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=o[m.materialIndex],E=Math.max(m.start,p.start),b=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,P=b;M<P;M+=3){const A=M,T=M+1,R=M+2;s=Rr(this,d,t,n,c,h,u,A,T,R),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const E=m,b=m+1,M=m+2;s=Rr(this,o,t,n,c,h,u,E,b,M),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function jf(i,t,e,n,s,r,o,a){let l;if(t.side===nn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,t.side===Pi,a),l===null)return null;Ar.copy(a),Ar.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Ar);return c<e.near||c>e.far?null:{distance:c,point:Ar.clone(),object:i}}function Rr(i,t,e,n,s,r,o,a,l,c){i.getVertexPosition(a,Er),i.getVertexPosition(l,br),i.getVertexPosition(c,Tr);const h=jf(i,t,e,n,Er,br,Tr,Dc);if(h){const u=new L;xn.getBarycoord(Dc,Er,br,Tr,u),s&&(h.uv=xn.getInterpolatedAttribute(s,a,l,c,u,new qt)),r&&(h.uv1=xn.getInterpolatedAttribute(r,a,l,c,u,new qt)),o&&(h.normal=xn.getInterpolatedAttribute(o,a,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new L,materialIndex:0};xn.getNormal(Er,br,Tr,f.normal),h.face=f,h.barycoord=u}return h}class Me extends Ve{constructor(t=1,e=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,o,r,0),g("z","y","x",1,-1,n,e,-t,o,r,1),g("x","z","y",1,1,t,n,e,s,o,2),g("x","z","y",1,-1,t,n,-e,s,o,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ce(c,3)),this.setAttribute("normal",new Ce(h,3)),this.setAttribute("uv",new Ce(u,2));function g(_,m,d,E,b,M,P,A,T,R,y){const v=M/T,C=P/R,U=M/2,F=P/2,q=A/2,W=T+1,V=R+1;let Y=0,z=0;const st=new L;for(let pt=0;pt<V;pt++){const yt=pt*C-F;for(let Ot=0;Ot<W;Ot++){const te=Ot*v-U;st[_]=te*E,st[m]=yt*b,st[d]=q,c.push(st.x,st.y,st.z),st[_]=0,st[m]=0,st[d]=A>0?1:-1,h.push(st.x,st.y,st.z),u.push(Ot/T),u.push(1-pt/R),Y+=1}}for(let pt=0;pt<R;pt++)for(let yt=0;yt<T;yt++){const Ot=f+yt+W*pt,te=f+yt+W*(pt+1),$=f+(yt+1)+W*(pt+1),et=f+(yt+1)+W*pt;l.push(Ot,te,et),l.push(te,$,et),z+=6}a.addGroup(p,z,y),p+=z,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Me(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Cs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function tn(i){const t={};for(let e=0;e<i.length;e++){const n=Cs(i[e]);for(const s in n)t[s]=n[s]}return t}function Zf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function su(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const Jf={clone:Cs,merge:tn};var Qf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,td=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class li extends Di{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Qf,this.fragmentShader=td,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Cs(t.uniforms),this.uniformsGroups=Zf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class ru extends Ne{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=si}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const vi=new L,Ic=new qt,Uc=new qt;class bn extends ru{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ml*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(eo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(eo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){vi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(vi.x,vi.y).multiplyScalar(-t/vi.z),vi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(vi.x,vi.y).multiplyScalar(-t/vi.z)}getViewSize(t,e){return this.getViewBounds(t,Ic,Uc),e.subVectors(Uc,Ic)}setViewOffset(t,e,n,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(eo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const hs=-90,us=1;class ed extends Ne{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new bn(hs,us,t,e);s.layers=this.layers,this.add(s);const r=new bn(hs,us,t,e);r.layers=this.layers,this.add(r);const o=new bn(hs,us,t,e);o.layers=this.layers,this.add(o);const a=new bn(hs,us,t,e);a.layers=this.layers,this.add(a);const l=new bn(hs,us,t,e);l.layers=this.layers,this.add(l);const c=new bn(hs,us,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===si)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===ao)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,o),t.setRenderTarget(n,2,s),t.render(e,a),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ou extends sn{constructor(t,e,n,s,r,o,a,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Ts,super(t,e,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class nd extends $i{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new ou(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Me(5,5,5),r=new li({name:"CubemapFromEquirect",uniforms:Cs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:nn,blending:Ei});r.uniforms.tEquirect.value=e;const o=new Vt(s,r),a=e.minFilter;return e.minFilter===Xi&&(e.minFilter=Vn),new ed(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,s);t.setRenderTarget(r)}}const ra=new L,id=new L,sd=new kt;class ki{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=ra.subVectors(n,e).cross(id.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(ra),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||sd.getNormalMatrix(t),s=this.coplanarPoint(ra).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Fi=new lr,Cr=new L;class Hl{constructor(t=new ki,e=new ki,n=new ki,s=new ki,r=new ki,o=new ki){this.planes=[t,e,n,s,r,o]}set(t,e,n,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=si){const n=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],E=s[13],b=s[14],M=s[15];if(n[0].setComponents(l-r,f-c,m-p,M-d).normalize(),n[1].setComponents(l+r,f+c,m+p,M+d).normalize(),n[2].setComponents(l+o,f+h,m+g,M+E).normalize(),n[3].setComponents(l-o,f-h,m-g,M-E).normalize(),n[4].setComponents(l-a,f-u,m-_,M-b).normalize(),e===si)n[5].setComponents(l+a,f+u,m+_,M+b).normalize();else if(e===ao)n[5].setComponents(a,u,_,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Fi)}intersectsSprite(t){return Fi.center.set(0,0,0),Fi.radius=.7071067811865476,Fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Fi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Cr.x=s.normal.x>0?t.max.x:t.min.x,Cr.y=s.normal.y>0?t.max.y:t.min.y,Cr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Cr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function au(){let i=null,t=!1,e=null,n=null;function s(r,o){e(r,o),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function rd(i){const t=new WeakMap;function e(a,l){const c=a.array,h=a.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(i.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class oi extends Ve{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=t/a,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const E=d*f-o;for(let b=0;b<c;b++){const M=b*u-r;g.push(M,-E,0),_.push(0,0,1),m.push(b/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let E=0;E<a;E++){const b=E+c*d,M=E+c*(d+1),P=E+1+c*(d+1),A=E+1+c*d;p.push(b,M,A),p.push(M,P,A)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oi(t.width,t.height,t.widthSegments,t.heightSegments)}}var od=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,ad=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ld=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,cd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,ud=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,fd=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,dd=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,pd=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,md=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,gd=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,_d=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,vd=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,xd=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Md=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,yd=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Sd=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ed=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,bd=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Td=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,wd=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ad=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Rd=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Cd=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Pd=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Ld=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Dd=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Id=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ud=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Nd=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Od="gl_FragColor = linearToOutputTexel( gl_FragColor );",Fd=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Bd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,zd=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,kd=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hd=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Gd=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Vd=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Wd=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Xd=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,qd=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Yd=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,$d=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Kd=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,jd=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Zd=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Jd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Qd=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,tp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,ep=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,np=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,ip=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,sp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,rp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,op=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ap=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,lp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,up=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,fp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,dp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,pp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,mp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,gp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,_p=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Mp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yp=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ep=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,bp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Tp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,wp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ap=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Rp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Cp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Pp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Dp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Ip=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Up=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Np=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Op=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Bp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,zp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Hp=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Gp=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Vp=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Wp=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Xp=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,qp=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Yp=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$p=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,Kp=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zp=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Jp=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Qp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,tm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,em=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,nm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,im=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,sm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const rm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,om=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,am=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,lm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,hm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,um=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,fm=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,dm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,pm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,gm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,_m=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vm=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Mm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ym=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sm=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Em=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,bm=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,wm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Am=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Rm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Pm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lm=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Dm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Im=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Nm=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Fm=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Bm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Gt={alphahash_fragment:od,alphahash_pars_fragment:ad,alphamap_fragment:ld,alphamap_pars_fragment:cd,alphatest_fragment:hd,alphatest_pars_fragment:ud,aomap_fragment:fd,aomap_pars_fragment:dd,batching_pars_vertex:pd,batching_vertex:md,begin_vertex:gd,beginnormal_vertex:_d,bsdfs:vd,iridescence_fragment:xd,bumpmap_pars_fragment:Md,clipping_planes_fragment:yd,clipping_planes_pars_fragment:Sd,clipping_planes_pars_vertex:Ed,clipping_planes_vertex:bd,color_fragment:Td,color_pars_fragment:wd,color_pars_vertex:Ad,color_vertex:Rd,common:Cd,cube_uv_reflection_fragment:Pd,defaultnormal_vertex:Ld,displacementmap_pars_vertex:Dd,displacementmap_vertex:Id,emissivemap_fragment:Ud,emissivemap_pars_fragment:Nd,colorspace_fragment:Od,colorspace_pars_fragment:Fd,envmap_fragment:Bd,envmap_common_pars_fragment:zd,envmap_pars_fragment:kd,envmap_pars_vertex:Hd,envmap_physical_pars_fragment:Jd,envmap_vertex:Gd,fog_vertex:Vd,fog_pars_vertex:Wd,fog_fragment:Xd,fog_pars_fragment:qd,gradientmap_pars_fragment:Yd,lightmap_pars_fragment:$d,lights_lambert_fragment:Kd,lights_lambert_pars_fragment:jd,lights_pars_begin:Zd,lights_toon_fragment:Qd,lights_toon_pars_fragment:tp,lights_phong_fragment:ep,lights_phong_pars_fragment:np,lights_physical_fragment:ip,lights_physical_pars_fragment:sp,lights_fragment_begin:rp,lights_fragment_maps:op,lights_fragment_end:ap,logdepthbuf_fragment:lp,logdepthbuf_pars_fragment:cp,logdepthbuf_pars_vertex:hp,logdepthbuf_vertex:up,map_fragment:fp,map_pars_fragment:dp,map_particle_fragment:pp,map_particle_pars_fragment:mp,metalnessmap_fragment:gp,metalnessmap_pars_fragment:_p,morphinstance_vertex:vp,morphcolor_vertex:xp,morphnormal_vertex:Mp,morphtarget_pars_vertex:yp,morphtarget_vertex:Sp,normal_fragment_begin:Ep,normal_fragment_maps:bp,normal_pars_fragment:Tp,normal_pars_vertex:wp,normal_vertex:Ap,normalmap_pars_fragment:Rp,clearcoat_normal_fragment_begin:Cp,clearcoat_normal_fragment_maps:Pp,clearcoat_pars_fragment:Lp,iridescence_pars_fragment:Dp,opaque_fragment:Ip,packing:Up,premultiplied_alpha_fragment:Np,project_vertex:Op,dithering_fragment:Fp,dithering_pars_fragment:Bp,roughnessmap_fragment:zp,roughnessmap_pars_fragment:kp,shadowmap_pars_fragment:Hp,shadowmap_pars_vertex:Gp,shadowmap_vertex:Vp,shadowmask_pars_fragment:Wp,skinbase_vertex:Xp,skinning_pars_vertex:qp,skinning_vertex:Yp,skinnormal_vertex:$p,specularmap_fragment:Kp,specularmap_pars_fragment:jp,tonemapping_fragment:Zp,tonemapping_pars_fragment:Jp,transmission_fragment:Qp,transmission_pars_fragment:tm,uv_pars_fragment:em,uv_pars_vertex:nm,uv_vertex:im,worldpos_vertex:sm,background_vert:rm,background_frag:om,backgroundCube_vert:am,backgroundCube_frag:lm,cube_vert:cm,cube_frag:hm,depth_vert:um,depth_frag:fm,distanceRGBA_vert:dm,distanceRGBA_frag:pm,equirect_vert:mm,equirect_frag:gm,linedashed_vert:_m,linedashed_frag:vm,meshbasic_vert:xm,meshbasic_frag:Mm,meshlambert_vert:ym,meshlambert_frag:Sm,meshmatcap_vert:Em,meshmatcap_frag:bm,meshnormal_vert:Tm,meshnormal_frag:wm,meshphong_vert:Am,meshphong_frag:Rm,meshphysical_vert:Cm,meshphysical_frag:Pm,meshtoon_vert:Lm,meshtoon_frag:Dm,points_vert:Im,points_frag:Um,shadow_vert:Nm,shadow_frag:Om,sprite_vert:Fm,sprite_frag:Bm},ot={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new qt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new qt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},Hn={basic:{uniforms:tn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Gt.meshbasic_vert,fragmentShader:Gt.meshbasic_frag},lambert:{uniforms:tn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Gt.meshlambert_vert,fragmentShader:Gt.meshlambert_frag},phong:{uniforms:tn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30}}]),vertexShader:Gt.meshphong_vert,fragmentShader:Gt.meshphong_frag},standard:{uniforms:tn([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag},toon:{uniforms:tn([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new Pt(0)}}]),vertexShader:Gt.meshtoon_vert,fragmentShader:Gt.meshtoon_frag},matcap:{uniforms:tn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Gt.meshmatcap_vert,fragmentShader:Gt.meshmatcap_frag},points:{uniforms:tn([ot.points,ot.fog]),vertexShader:Gt.points_vert,fragmentShader:Gt.points_frag},dashed:{uniforms:tn([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Gt.linedashed_vert,fragmentShader:Gt.linedashed_frag},depth:{uniforms:tn([ot.common,ot.displacementmap]),vertexShader:Gt.depth_vert,fragmentShader:Gt.depth_frag},normal:{uniforms:tn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Gt.meshnormal_vert,fragmentShader:Gt.meshnormal_frag},sprite:{uniforms:tn([ot.sprite,ot.fog]),vertexShader:Gt.sprite_vert,fragmentShader:Gt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Gt.background_vert,fragmentShader:Gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Gt.backgroundCube_vert,fragmentShader:Gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Gt.cube_vert,fragmentShader:Gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Gt.equirect_vert,fragmentShader:Gt.equirect_frag},distanceRGBA:{uniforms:tn([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Gt.distanceRGBA_vert,fragmentShader:Gt.distanceRGBA_frag},shadow:{uniforms:tn([ot.lights,ot.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:Gt.shadow_vert,fragmentShader:Gt.shadow_frag}};Hn.physical={uniforms:tn([Hn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new qt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new qt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new qt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Gt.meshphysical_vert,fragmentShader:Gt.meshphysical_frag};const Pr={r:0,b:0,g:0},Bi=new qn,zm=new ye;function km(i,t,e,n,s,r,o){const a=new Pt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(E){let b=E.isScene===!0?E.background:null;return b&&b.isTexture&&(b=(E.backgroundBlurriness>0?e:t).get(b)),b}function _(E){let b=!1;const M=g(E);M===null?d(a,l):M&&M.isColor&&(d(M,1),b=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,o):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||b)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,b){const M=g(b);M&&(M.isCubeTexture||M.mapping===Ao)?(h===void 0&&(h=new Vt(new Me(1,1,1),new li({name:"BackgroundCubeMaterial",uniforms:Cs(Hn.backgroundCube.uniforms),vertexShader:Hn.backgroundCube.vertexShader,fragmentShader:Hn.backgroundCube.fragmentShader,side:nn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,A,T){this.matrixWorld.copyPosition(T.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Bi.copy(b.backgroundRotation),Bi.x*=-1,Bi.y*=-1,Bi.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Bi.y*=-1,Bi.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(zm.makeRotationFromEuler(Bi)),h.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ce,(u!==M||f!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Vt(new oi(2,2),new li({name:"BackgroundMaterial",uniforms:Cs(Hn.background.uniforms),vertexShader:Hn.background.vertexShader,fragmentShader:Hn.background.fragmentShader,side:Pi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(M.colorSpace)!==ce,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||f!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,f=M.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function d(E,b){E.getRGB(Pr,su(i)),n.buffers.color.setClear(Pr.r,Pr.g,Pr.b,b,o)}return{getClearColor:function(){return a},setClearColor:function(E,b=1){a.set(E),l=b,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,d(a,l)},render:_,addToRenderList:m}}function Hm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,o=!1;function a(v,C,U,F,q){let W=!1;const V=u(F,U,C);r!==V&&(r=V,c(r.object)),W=p(v,F,U,q),W&&g(v,F,U,q),q!==null&&t.update(q,i.ELEMENT_ARRAY_BUFFER),(W||o)&&(o=!1,M(v,C,U,F),q!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return i.createVertexArray()}function c(v){return i.bindVertexArray(v)}function h(v){return i.deleteVertexArray(v)}function u(v,C,U){const F=U.wireframe===!0;let q=n[v.id];q===void 0&&(q={},n[v.id]=q);let W=q[C.id];W===void 0&&(W={},q[C.id]=W);let V=W[F];return V===void 0&&(V=f(l()),W[F]=V),V}function f(v){const C=[],U=[],F=[];for(let q=0;q<e;q++)C[q]=0,U[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:U,attributeDivisors:F,object:v,attributes:{},index:null}}function p(v,C,U,F){const q=r.attributes,W=C.attributes;let V=0;const Y=U.getAttributes();for(const z in Y)if(Y[z].location>=0){const pt=q[z];let yt=W[z];if(yt===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(yt=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(yt=v.instanceColor)),pt===void 0||pt.attribute!==yt||yt&&pt.data!==yt.data)return!0;V++}return r.attributesNum!==V||r.index!==F}function g(v,C,U,F){const q={},W=C.attributes;let V=0;const Y=U.getAttributes();for(const z in Y)if(Y[z].location>=0){let pt=W[z];pt===void 0&&(z==="instanceMatrix"&&v.instanceMatrix&&(pt=v.instanceMatrix),z==="instanceColor"&&v.instanceColor&&(pt=v.instanceColor));const yt={};yt.attribute=pt,pt&&pt.data&&(yt.data=pt.data),q[z]=yt,V++}r.attributes=q,r.attributesNum=V,r.index=F}function _(){const v=r.newAttributes;for(let C=0,U=v.length;C<U;C++)v[C]=0}function m(v){d(v,0)}function d(v,C){const U=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;U[v]=1,F[v]===0&&(i.enableVertexAttribArray(v),F[v]=1),q[v]!==C&&(i.vertexAttribDivisor(v,C),q[v]=C)}function E(){const v=r.newAttributes,C=r.enabledAttributes;for(let U=0,F=C.length;U<F;U++)C[U]!==v[U]&&(i.disableVertexAttribArray(U),C[U]=0)}function b(v,C,U,F,q,W,V){V===!0?i.vertexAttribIPointer(v,C,U,q,W):i.vertexAttribPointer(v,C,U,F,q,W)}function M(v,C,U,F){_();const q=F.attributes,W=U.getAttributes(),V=C.defaultAttributeValues;for(const Y in W){const z=W[Y];if(z.location>=0){let st=q[Y];if(st===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(st=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(st=v.instanceColor)),st!==void 0){const pt=st.normalized,yt=st.itemSize,Ot=t.get(st);if(Ot===void 0)continue;const te=Ot.buffer,$=Ot.type,et=Ot.bytesPerElement,at=$===i.INT||$===i.UNSIGNED_INT||st.gpuType===Ul;if(st.isInterleavedBufferAttribute){const rt=st.data,Tt=rt.stride,Rt=st.offset;if(rt.isInstancedInterleavedBuffer){for(let It=0;It<z.locationSize;It++)d(z.location+It,rt.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let It=0;It<z.locationSize;It++)m(z.location+It);i.bindBuffer(i.ARRAY_BUFFER,te);for(let It=0;It<z.locationSize;It++)b(z.location+It,yt/z.locationSize,$,pt,Tt*et,(Rt+yt/z.locationSize*It)*et,at)}else{if(st.isInstancedBufferAttribute){for(let rt=0;rt<z.locationSize;rt++)d(z.location+rt,st.meshPerAttribute);v.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let rt=0;rt<z.locationSize;rt++)m(z.location+rt);i.bindBuffer(i.ARRAY_BUFFER,te);for(let rt=0;rt<z.locationSize;rt++)b(z.location+rt,yt/z.locationSize,$,pt,yt*et,yt/z.locationSize*rt*et,at)}}else if(V!==void 0){const pt=V[Y];if(pt!==void 0)switch(pt.length){case 2:i.vertexAttrib2fv(z.location,pt);break;case 3:i.vertexAttrib3fv(z.location,pt);break;case 4:i.vertexAttrib4fv(z.location,pt);break;default:i.vertexAttrib1fv(z.location,pt)}}}}E()}function P(){R();for(const v in n){const C=n[v];for(const U in C){const F=C[U];for(const q in F)h(F[q].object),delete F[q];delete C[U]}delete n[v]}}function A(v){if(n[v.id]===void 0)return;const C=n[v.id];for(const U in C){const F=C[U];for(const q in F)h(F[q].object),delete F[q];delete C[U]}delete n[v.id]}function T(v){for(const C in n){const U=n[C];if(U[v.id]===void 0)continue;const F=U[v.id];for(const q in F)h(F[q].object),delete F[q];delete U[v.id]}}function R(){y(),o=!0,r!==s&&(r=s,c(r.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:R,resetDefaultState:y,dispose:P,releaseStatesOfGeometry:A,releaseStatesOfProgram:T,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function Gm(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function a(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Vm(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const T=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(T){return!(T!==Nn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(T){const R=T===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(T!==ai&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==ii&&!R)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),b=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,A=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:E,maxVaryings:b,maxFragmentUniforms:M,vertexTextures:P,maxSamples:A}}function Wm(i){const t=this;let e=null,n=0,s=!1,r=!1;const o=new ki,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,b=E*4;let M=d.clippingState||null;l.value=M,M=h(g,f,b,p);for(let P=0;P!==b;++P)M[P]=e[P];d.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,E=f.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<d)&&(m=new Float32Array(d));for(let b=0,M=p;b!==_;++b,M+=4)o.copy(u[b]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function Xm(i){let t=new WeakMap;function e(o,a){return a===Wa?o.mapping=Ts:a===Xa&&(o.mapping=ws),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Wa||a===Xa)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new nd(l.height);return c.fromEquirectangularTexture(i,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class lu extends ru{constructor(t=-1,e=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,o=n+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const vs=4,Nc=[.125,.215,.35,.446,.526,.582],Vi=20,oa=new lu,Oc=new Pt;let aa=null,la=0,ca=0,ha=!1;const Hi=(1+Math.sqrt(5))/2,fs=1/Hi,Fc=[new L(-Hi,fs,0),new L(Hi,fs,0),new L(-fs,0,Hi),new L(fs,0,Hi),new L(0,Hi,-fs),new L(0,Hi,fs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Bc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Hc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(aa,la,ca),this._renderer.xr.enabled=ha,t.scissorTest=!1,Lr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ts||t.mapping===ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),aa=this._renderer.getRenderTarget(),la=this._renderer.getActiveCubeFace(),ca=this._renderer.getActiveMipmapLevel(),ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Vn,minFilter:Vn,generateMipmaps:!1,type:rr,format:Nn,colorSpace:Ls,depthBuffer:!1},s=zc(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zc(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qm(r)),this._blurMaterial=Ym(r,t,e)}return s}_compileMaterial(t){const e=new Vt(this._lodPlanes[0],t);this._renderer.compile(e,oa)}_sceneToCubeUV(t,e,n,s){const a=new bn(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(Oc),h.toneMapping=bi,h.autoClear=!1;const p=new we({name:"PMREM.Background",side:nn,depthWrite:!1,depthTest:!1}),g=new Vt(new Me,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(Oc),_=!0);for(let d=0;d<6;d++){const E=d%3;E===0?(a.up.set(0,l[d],0),a.lookAt(c[d],0,0)):E===1?(a.up.set(0,0,l[d]),a.lookAt(0,c[d],0)):(a.up.set(0,l[d],0),a.lookAt(0,0,c[d]));const b=this._cubeSize;Lr(s,E*b,d>2?b:0,b,b),h.setRenderTarget(s),_&&h.render(g,a),h.render(t,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Ts||t.mapping===ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Hc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=kc());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Vt(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Lr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(o,oa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Fc[(s-r-1)%Fc.length];this._blur(t,r-1,r,o,a)}e.autoClear=n}_blur(t,e,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,s,"latitudinal",r),this._halfBlur(o,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Vt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Vi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Vi;m>Vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Vi}`);const d=[];let E=0;for(let T=0;T<Vi;++T){const R=T/_,y=Math.exp(-R*R/2);d.push(y),T===0?E+=y:T<m&&(E+=2*y)}for(let T=0;T<d.length;T++)d[T]=d[T]/E;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=o==="latitudinal",a&&(f.poleAxis.value=a);const{_lodMax:b}=this;f.dTheta.value=g,f.mipInt.value=b-n;const M=this._sizeLods[s],P=3*M*(s>b-vs?s-b+vs:0),A=4*(this._cubeSize-M);Lr(e,P,A,3*M,2*M),l.setRenderTarget(e),l.render(u,oa)}}function qm(i){const t=[],e=[],n=[];let s=i;const r=i-vs+1+Nc.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>i-vs?l=Nc[o-i+vs-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,E=new Float32Array(_*g*p),b=new Float32Array(m*g*p),M=new Float32Array(d*g*p);for(let A=0;A<p;A++){const T=A%3*2/3-1,R=A>2?0:-1,y=[T,R,0,T+2/3,R,0,T+2/3,R+1,0,T,R,0,T+2/3,R+1,0,T,R+1,0];E.set(y,_*g*A),b.set(f,m*g*A);const v=[A,A,A,A,A,A];M.set(v,d*g*A)}const P=new Ve;P.setAttribute("position",new dn(E,_)),P.setAttribute("uv",new dn(b,m)),P.setAttribute("faceIndex",new dn(M,d)),t.push(P),s>vs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function zc(i,t,e){const n=new $i(i,t,e);return n.texture.mapping=Ao,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Lr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function Ym(i,t,e){const n=new Float32Array(Vi),s=new L(0,1,0);return new li({name:"SphericalGaussianBlur",defines:{n:Vi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function kc(){return new li({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Hc(){return new li({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Gl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Gl(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $m(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Wa||l===Xa,h=l===Ts||l===ws;if(c||h){let u=t.get(a);const f=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==f)return e===null&&(e=new Bc(i)),u=c?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new Bc(i)),u=c?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function Km(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&Xs("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function jm(i,t,e,n){const s={},r=new WeakMap;function o(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",o),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function a(u,f){return s[f.id]===!0||(f.addEventListener("dispose",o),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let b=0,M=E.length;b<M;b+=3){const P=E[b+0],A=E[b+1],T=E[b+2];f.push(P,A,A,T,T,P)}}else if(g!==void 0){const E=g.array;_=g.version;for(let b=0,M=E.length/3-1;b<M;b+=3){const P=b+0,A=b+1,T=b+2;f.push(P,A,A,T,T,P)}}else return;const m=new(Zh(f)?iu:nu)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function Zm(i,t,e){let n;function s(f){n=f}let r,o;function a(f){r=f.type,o=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*o),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*o,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/o,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let E=0;E<g;E++)d+=p[E]*_[E];e.update(d,n,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function Jm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(r/3);break;case i.LINES:e.lines+=a*(r/2);break;case i.LINE_STRIP:e.lines+=a*(r-1);break;case i.LINE_LOOP:e.lines+=a*r;break;case i.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function Qm(i,t,e){const n=new WeakMap,s=new Pe;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(a);if(f===void 0||f.count!==u){let v=function(){R.dispose(),n.delete(a),a.removeEventListener("dispose",v)};var p=v;f!==void 0&&f.texture.dispose();const g=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,m=a.morphAttributes.color!==void 0,d=a.morphAttributes.position||[],E=a.morphAttributes.normal||[],b=a.morphAttributes.color||[];let M=0;g===!0&&(M=1),_===!0&&(M=2),m===!0&&(M=3);let P=a.attributes.position.count*M,A=1;P>t.maxTextureSize&&(A=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const T=new Float32Array(P*A*4*u),R=new Qh(T,P,A,u);R.type=ii,R.needsUpdate=!0;const y=M*4;for(let C=0;C<u;C++){const U=d[C],F=E[C],q=b[C],W=P*A*4*C;for(let V=0;V<U.count;V++){const Y=V*y;g===!0&&(s.fromBufferAttribute(U,V),T[W+Y+0]=s.x,T[W+Y+1]=s.y,T[W+Y+2]=s.z,T[W+Y+3]=0),_===!0&&(s.fromBufferAttribute(F,V),T[W+Y+4]=s.x,T[W+Y+5]=s.y,T[W+Y+6]=s.z,T[W+Y+7]=0),m===!0&&(s.fromBufferAttribute(q,V),T[W+Y+8]=s.x,T[W+Y+9]=s.y,T[W+Y+10]=s.z,T[W+Y+11]=q.itemSize===4?s.w:1)}}f={count:u,texture:R,size:new qt(P,A)},n.set(a,f),a.addEventListener("dispose",v)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=a.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function t0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class cu extends sn{constructor(t,e,n,s,r,o,a,l,c,h=Ms){if(h!==Ms&&h!==Rs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Ms&&(n=Yi),n===void 0&&h===Rs&&(n=As),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:fe,this.minFilter=l!==void 0?l:fe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const hu=new sn,Gc=new cu(1,1),uu=new Qh,fu=new kf,du=new ou,Vc=[],Wc=[],Xc=new Float32Array(16),qc=new Float32Array(9),Yc=new Float32Array(4);function Is(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Vc[s];if(r===void 0&&(r=new Float32Array(s),Vc[s]=r),t!==0){n.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(r,a)}return r}function Oe(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Fe(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Co(i,t){let e=Wc[t];e===void 0&&(e=new Int32Array(t),Wc[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function e0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function n0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2fv(this.addr,t),Fe(e,t)}}function i0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Oe(e,t))return;i.uniform3fv(this.addr,t),Fe(e,t)}}function s0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4fv(this.addr,t),Fe(e,t)}}function r0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Yc.set(n),i.uniformMatrix2fv(this.addr,!1,Yc),Fe(e,n)}}function o0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;qc.set(n),i.uniformMatrix3fv(this.addr,!1,qc),Fe(e,n)}}function a0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Oe(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Fe(e,t)}else{if(Oe(e,n))return;Xc.set(n),i.uniformMatrix4fv(this.addr,!1,Xc),Fe(e,n)}}function l0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function c0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2iv(this.addr,t),Fe(e,t)}}function h0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3iv(this.addr,t),Fe(e,t)}}function u0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4iv(this.addr,t),Fe(e,t)}}function f0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function d0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Oe(e,t))return;i.uniform2uiv(this.addr,t),Fe(e,t)}}function p0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Oe(e,t))return;i.uniform3uiv(this.addr,t),Fe(e,t)}}function m0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Oe(e,t))return;i.uniform4uiv(this.addr,t),Fe(e,t)}}function g0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Gc.compareFunction=jh,r=Gc):r=hu,e.setTexture2D(t||r,s)}function _0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||fu,s)}function v0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||du,s)}function x0(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||uu,s)}function M0(i){switch(i){case 5126:return e0;case 35664:return n0;case 35665:return i0;case 35666:return s0;case 35674:return r0;case 35675:return o0;case 35676:return a0;case 5124:case 35670:return l0;case 35667:case 35671:return c0;case 35668:case 35672:return h0;case 35669:case 35673:return u0;case 5125:return f0;case 36294:return d0;case 36295:return p0;case 36296:return m0;case 35678:case 36198:case 36298:case 36306:case 35682:return g0;case 35679:case 36299:case 36307:return _0;case 35680:case 36300:case 36308:case 36293:return v0;case 36289:case 36303:case 36311:case 36292:return x0}}function y0(i,t){i.uniform1fv(this.addr,t)}function S0(i,t){const e=Is(t,this.size,2);i.uniform2fv(this.addr,e)}function E0(i,t){const e=Is(t,this.size,3);i.uniform3fv(this.addr,e)}function b0(i,t){const e=Is(t,this.size,4);i.uniform4fv(this.addr,e)}function T0(i,t){const e=Is(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function w0(i,t){const e=Is(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function A0(i,t){const e=Is(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function R0(i,t){i.uniform1iv(this.addr,t)}function C0(i,t){i.uniform2iv(this.addr,t)}function P0(i,t){i.uniform3iv(this.addr,t)}function L0(i,t){i.uniform4iv(this.addr,t)}function D0(i,t){i.uniform1uiv(this.addr,t)}function I0(i,t){i.uniform2uiv(this.addr,t)}function U0(i,t){i.uniform3uiv(this.addr,t)}function N0(i,t){i.uniform4uiv(this.addr,t)}function O0(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||hu,r[o])}function F0(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||fu,r[o])}function B0(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||du,r[o])}function z0(i,t,e){const n=this.cache,s=t.length,r=Co(e,s);Oe(n,r)||(i.uniform1iv(this.addr,r),Fe(n,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||uu,r[o])}function k0(i){switch(i){case 5126:return y0;case 35664:return S0;case 35665:return E0;case 35666:return b0;case 35674:return T0;case 35675:return w0;case 35676:return A0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return L0;case 5125:return D0;case 36294:return I0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return F0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}class H0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=M0(e.type)}}class G0{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=k0(e.type)}}class V0{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],n)}}}const ua=/(\w+)(\])?(\[|\.)?/g;function $c(i,t){i.seq.push(t),i.map[t.id]=t}function W0(i,t,e){const n=i.name,s=n.length;for(ua.lastIndex=0;;){const r=ua.exec(n),o=ua.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){$c(e,c===void 0?new H0(a,i,t):new G0(a,i,t));break}else{let u=e.map[a];u===void 0&&(u=new V0(a),$c(e,u)),e=u}}}class no{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);W0(r,o,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&n.push(o)}return n}}function Kc(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const X0=37297;let q0=0;function Y0(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const jc=new kt;function $0(i){Qt._getMatrix(jc,Qt.workingColorSpace,i);const t=`mat3( ${jc.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case Ro:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Zc(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Y0(i.getShaderSource(t),o)}else return s}function K0(i,t){const e=$0(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function j0(i,t){let e;switch(t){case df:e="Linear";break;case pf:e="Reinhard";break;case mf:e="Cineon";break;case gf:e="ACESFilmic";break;case vf:e="AgX";break;case xf:e="Neutral";break;case _f:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Dr=new L;function Z0(){Qt.getLuminanceCoefficients(Dr);const i=Dr.x.toFixed(4),t=Dr.y.toFixed(4),e=Dr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function J0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qs).join(`
`)}function Q0(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function tg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function qs(i){return i!==""}function Jc(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Qc(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const eg=/^[ \t]*#include +<([\w\d./]+)>/gm;function yl(i){return i.replace(eg,ig)}const ng=new Map;function ig(i,t){let e=Gt[t];if(e===void 0){const n=ng.get(t);if(n!==void 0)e=Gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return yl(e)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function th(i){return i.replace(sg,rg)}function rg(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function eh(i){let t=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function og(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fh?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Xu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ei&&(t="SHADOWMAP_TYPE_VSM"),t}function ag(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ts:case ws:t="ENVMAP_TYPE_CUBE";break;case Ao:t="ENVMAP_TYPE_CUBE_UV";break}return t}function lg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case ws:t="ENVMAP_MODE_REFRACTION";break}return t}function cg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Il:t="ENVMAP_BLENDING_MULTIPLY";break;case uf:t="ENVMAP_BLENDING_MIX";break;case ff:t="ENVMAP_BLENDING_ADD";break}return t}function hg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function ug(i,t,e,n){const s=i.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=og(e),c=ag(e),h=lg(e),u=cg(e),f=hg(e),p=J0(e),g=Q0(r),_=s.createProgram();let m,d,E=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(qs).join(`
`),d.length>0&&(d+=`
`)):(m=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qs).join(`
`),d=[eh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==bi?"#define TONE_MAPPING":"",e.toneMapping!==bi?Gt.tonemapping_pars_fragment:"",e.toneMapping!==bi?j0("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Gt.colorspace_pars_fragment,K0("linearToOutputTexel",e.outputColorSpace),Z0(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qs).join(`
`)),o=yl(o),o=Jc(o,e),o=Qc(o,e),a=yl(a),a=Jc(a,e),a=Qc(a,e),o=th(o),a=th(a),e.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===pc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===pc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const b=E+m+o,M=E+d+a,P=Kc(s,s.VERTEX_SHADER,b),A=Kc(s,s.FRAGMENT_SHADER,M);s.attachShader(_,P),s.attachShader(_,A),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function T(C){if(i.debug.checkShaderErrors){const U=s.getProgramInfoLog(_).trim(),F=s.getShaderInfoLog(P).trim(),q=s.getShaderInfoLog(A).trim();let W=!0,V=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(W=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,A);else{const Y=Zc(s,P,"vertex"),z=Zc(s,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+Y+`
`+z)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(F===""||q==="")&&(V=!1);V&&(C.diagnostics={runnable:W,programLog:U,vertexShader:{log:F,prefix:m},fragmentShader:{log:q,prefix:d}})}s.deleteShader(P),s.deleteShader(A),R=new no(s,_),y=tg(s,_)}let R;this.getUniforms=function(){return R===void 0&&T(this),R};let y;this.getAttributes=function(){return y===void 0&&T(this),y};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(_,X0)),v},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=q0++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=A,this}let fg=0;class dg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new pg(t),e.set(t,n)),n}}class pg{constructor(t){this.id=fg++,this.code=t,this.usedTimes=0}}function mg(i,t,e,n,s,r,o){const a=new tu,l=new dg,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(y){return c.add(y),y===0?"uv":`uv${y}`}function m(y,v,C,U,F){const q=U.fog,W=F.geometry,V=y.isMeshStandardMaterial?U.environment:null,Y=(y.isMeshStandardMaterial?e:t).get(y.envMap||V),z=Y&&Y.mapping===Ao?Y.image.height:null,st=g[y.type];y.precision!==null&&(p=s.getMaxPrecision(y.precision),p!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",p,"instead."));const pt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,yt=pt!==void 0?pt.length:0;let Ot=0;W.morphAttributes.position!==void 0&&(Ot=1),W.morphAttributes.normal!==void 0&&(Ot=2),W.morphAttributes.color!==void 0&&(Ot=3);let te,$,et,at;if(st){const oe=Hn[st];te=oe.vertexShader,$=oe.fragmentShader}else te=y.vertexShader,$=y.fragmentShader,l.update(y),et=l.getVertexShaderID(y),at=l.getFragmentShaderID(y);const rt=i.getRenderTarget(),Tt=i.state.buffers.depth.getReversed(),Rt=F.isInstancedMesh===!0,It=F.isBatchedMesh===!0,me=!!y.map,Kt=!!y.matcap,le=!!Y,O=!!y.aoMap,on=!!y.lightMap,Wt=!!y.bumpMap,$t=!!y.normalMap,wt=!!y.displacementMap,ge=!!y.emissiveMap,At=!!y.metalnessMap,w=!!y.roughnessMap,x=y.anisotropy>0,B=y.clearcoat>0,Z=y.dispersion>0,tt=y.iridescence>0,K=y.sheen>0,St=y.transmission>0,ct=x&&!!y.anisotropyMap,mt=B&&!!y.clearcoatMap,Jt=B&&!!y.clearcoatNormalMap,nt=B&&!!y.clearcoatRoughnessMap,gt=tt&&!!y.iridescenceMap,Ct=tt&&!!y.iridescenceThicknessMap,Lt=K&&!!y.sheenColorMap,_t=K&&!!y.sheenRoughnessMap,Zt=!!y.specularMap,Ht=!!y.specularColorMap,de=!!y.specularIntensityMap,D=St&&!!y.transmissionMap,lt=St&&!!y.thicknessMap,X=!!y.gradientMap,J=!!y.alphaMap,ft=y.alphaTest>0,ht=!!y.alphaHash,Ft=!!y.extensions;let Ae=bi;y.toneMapped&&(rt===null||rt.isXRRenderTarget===!0)&&(Ae=i.toneMapping);const We={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:te,fragmentShader:$,defines:y.defines,customVertexShaderID:et,customFragmentShaderID:at,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:p,batching:It,batchingColor:It&&F._colorsTexture!==null,instancing:Rt,instancingColor:Rt&&F.instanceColor!==null,instancingMorph:Rt&&F.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:rt===null?i.outputColorSpace:rt.isXRRenderTarget===!0?rt.texture.colorSpace:Ls,alphaToCoverage:!!y.alphaToCoverage,map:me,matcap:Kt,envMap:le,envMapMode:le&&Y.mapping,envMapCubeUVHeight:z,aoMap:O,lightMap:on,bumpMap:Wt,normalMap:$t,displacementMap:f&&wt,emissiveMap:ge,normalMapObjectSpace:$t&&y.normalMapType===Ef,normalMapTangentSpace:$t&&y.normalMapType===Kh,metalnessMap:At,roughnessMap:w,anisotropy:x,anisotropyMap:ct,clearcoat:B,clearcoatMap:mt,clearcoatNormalMap:Jt,clearcoatRoughnessMap:nt,dispersion:Z,iridescence:tt,iridescenceMap:gt,iridescenceThicknessMap:Ct,sheen:K,sheenColorMap:Lt,sheenRoughnessMap:_t,specularMap:Zt,specularColorMap:Ht,specularIntensityMap:de,transmission:St,transmissionMap:D,thicknessMap:lt,gradientMap:X,opaque:y.transparent===!1&&y.blending===xs&&y.alphaToCoverage===!1,alphaMap:J,alphaTest:ft,alphaHash:ht,combine:y.combine,mapUv:me&&_(y.map.channel),aoMapUv:O&&_(y.aoMap.channel),lightMapUv:on&&_(y.lightMap.channel),bumpMapUv:Wt&&_(y.bumpMap.channel),normalMapUv:$t&&_(y.normalMap.channel),displacementMapUv:wt&&_(y.displacementMap.channel),emissiveMapUv:ge&&_(y.emissiveMap.channel),metalnessMapUv:At&&_(y.metalnessMap.channel),roughnessMapUv:w&&_(y.roughnessMap.channel),anisotropyMapUv:ct&&_(y.anisotropyMap.channel),clearcoatMapUv:mt&&_(y.clearcoatMap.channel),clearcoatNormalMapUv:Jt&&_(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:nt&&_(y.clearcoatRoughnessMap.channel),iridescenceMapUv:gt&&_(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ct&&_(y.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(y.sheenColorMap.channel),sheenRoughnessMapUv:_t&&_(y.sheenRoughnessMap.channel),specularMapUv:Zt&&_(y.specularMap.channel),specularColorMapUv:Ht&&_(y.specularColorMap.channel),specularIntensityMapUv:de&&_(y.specularIntensityMap.channel),transmissionMapUv:D&&_(y.transmissionMap.channel),thicknessMapUv:lt&&_(y.thicknessMap.channel),alphaMapUv:J&&_(y.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&($t||x),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:F.isPoints===!0&&!!W.attributes.uv&&(me||J),fog:!!q,useFog:y.fog===!0,fogExp2:!!q&&q.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Tt,skinning:F.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Ot,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:i.shadowMap.enabled&&C.length>0,shadowMapType:i.shadowMap.type,toneMapping:Ae,decodeVideoTexture:me&&y.map.isVideoTexture===!0&&Qt.getTransfer(y.map.colorSpace)===ce,decodeVideoTextureEmissive:ge&&y.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(y.emissiveMap.colorSpace)===ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===fn,flipSided:y.side===nn,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Ft&&y.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ft&&y.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return We.vertexUv1s=c.has(1),We.vertexUv2s=c.has(2),We.vertexUv3s=c.has(3),c.clear(),We}function d(y){const v=[];if(y.shaderID?v.push(y.shaderID):(v.push(y.customVertexShaderID),v.push(y.customFragmentShaderID)),y.defines!==void 0)for(const C in y.defines)v.push(C),v.push(y.defines[C]);return y.isRawShaderMaterial===!1&&(E(v,y),b(v,y),v.push(i.outputColorSpace)),v.push(y.customProgramCacheKey),v.join()}function E(y,v){y.push(v.precision),y.push(v.outputColorSpace),y.push(v.envMapMode),y.push(v.envMapCubeUVHeight),y.push(v.mapUv),y.push(v.alphaMapUv),y.push(v.lightMapUv),y.push(v.aoMapUv),y.push(v.bumpMapUv),y.push(v.normalMapUv),y.push(v.displacementMapUv),y.push(v.emissiveMapUv),y.push(v.metalnessMapUv),y.push(v.roughnessMapUv),y.push(v.anisotropyMapUv),y.push(v.clearcoatMapUv),y.push(v.clearcoatNormalMapUv),y.push(v.clearcoatRoughnessMapUv),y.push(v.iridescenceMapUv),y.push(v.iridescenceThicknessMapUv),y.push(v.sheenColorMapUv),y.push(v.sheenRoughnessMapUv),y.push(v.specularMapUv),y.push(v.specularColorMapUv),y.push(v.specularIntensityMapUv),y.push(v.transmissionMapUv),y.push(v.thicknessMapUv),y.push(v.combine),y.push(v.fogExp2),y.push(v.sizeAttenuation),y.push(v.morphTargetsCount),y.push(v.morphAttributeCount),y.push(v.numDirLights),y.push(v.numPointLights),y.push(v.numSpotLights),y.push(v.numSpotLightMaps),y.push(v.numHemiLights),y.push(v.numRectAreaLights),y.push(v.numDirLightShadows),y.push(v.numPointLightShadows),y.push(v.numSpotLightShadows),y.push(v.numSpotLightShadowsWithMaps),y.push(v.numLightProbes),y.push(v.shadowMapType),y.push(v.toneMapping),y.push(v.numClippingPlanes),y.push(v.numClipIntersection),y.push(v.depthPacking)}function b(y,v){a.disableAll(),v.supportsVertexTextures&&a.enable(0),v.instancing&&a.enable(1),v.instancingColor&&a.enable(2),v.instancingMorph&&a.enable(3),v.matcap&&a.enable(4),v.envMap&&a.enable(5),v.normalMapObjectSpace&&a.enable(6),v.normalMapTangentSpace&&a.enable(7),v.clearcoat&&a.enable(8),v.iridescence&&a.enable(9),v.alphaTest&&a.enable(10),v.vertexColors&&a.enable(11),v.vertexAlphas&&a.enable(12),v.vertexUv1s&&a.enable(13),v.vertexUv2s&&a.enable(14),v.vertexUv3s&&a.enable(15),v.vertexTangents&&a.enable(16),v.anisotropy&&a.enable(17),v.alphaHash&&a.enable(18),v.batching&&a.enable(19),v.dispersion&&a.enable(20),v.batchingColor&&a.enable(21),y.push(a.mask),a.disableAll(),v.fog&&a.enable(0),v.useFog&&a.enable(1),v.flatShading&&a.enable(2),v.logarithmicDepthBuffer&&a.enable(3),v.reverseDepthBuffer&&a.enable(4),v.skinning&&a.enable(5),v.morphTargets&&a.enable(6),v.morphNormals&&a.enable(7),v.morphColors&&a.enable(8),v.premultipliedAlpha&&a.enable(9),v.shadowMapEnabled&&a.enable(10),v.doubleSided&&a.enable(11),v.flipSided&&a.enable(12),v.useDepthPacking&&a.enable(13),v.dithering&&a.enable(14),v.transmission&&a.enable(15),v.sheen&&a.enable(16),v.opaque&&a.enable(17),v.pointsUvs&&a.enable(18),v.decodeVideoTexture&&a.enable(19),v.decodeVideoTextureEmissive&&a.enable(20),v.alphaToCoverage&&a.enable(21),y.push(a.mask)}function M(y){const v=g[y.type];let C;if(v){const U=Hn[v];C=Jf.clone(U.uniforms)}else C=y.uniforms;return C}function P(y,v){let C;for(let U=0,F=h.length;U<F;U++){const q=h[U];if(q.cacheKey===v){C=q,++C.usedTimes;break}}return C===void 0&&(C=new ug(i,v,y,r),h.push(C)),C}function A(y){if(--y.usedTimes===0){const v=h.indexOf(y);h[v]=h[h.length-1],h.pop(),y.destroy()}}function T(y){l.remove(y)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:M,acquireProgram:P,releaseProgram:A,releaseShaderCache:T,programs:h,dispose:R}}function gg(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function _g(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function nh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function ih(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function o(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function a(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=o(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||_g),n.length>1&&n.sort(f||nh),s.length>1&&s.sort(f||nh)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function vg(){let i=new WeakMap;function t(n,s){const r=i.get(n);let o;return r===void 0?(o=new ih,i.set(n,[o])):s>=r.length?(o=new ih,r.push(o)):o=r[s],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function xg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new Pt};break;case"SpotLight":e={position:new L,direction:new L,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":e={color:new Pt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function Mg(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new qt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let yg=0;function Sg(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function Eg(i){const t=new xg,e=Mg(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ye,o=new ye;function a(c){let h=0,u=0,f=0;for(let y=0;y<9;y++)n.probe[y].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,E=0,b=0,M=0,P=0,A=0,T=0;c.sort(Sg);for(let y=0,v=c.length;y<v;y++){const C=c[y],U=C.color,F=C.intensity,q=C.distance,W=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)h+=U.r*F,u+=U.g*F,f+=U.b*F;else if(C.isLightProbe){for(let V=0;V<9;V++)n.probe[V].addScaledVector(C.sh.coefficients[V],F);T++}else if(C.isDirectionalLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,z=e.get(C);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=W,n.directionalShadowMatrix[p]=C.shadow.matrix,E++}n.directional[p]=V,p++}else if(C.isSpotLight){const V=t.get(C);V.position.setFromMatrixPosition(C.matrixWorld),V.color.copy(U).multiplyScalar(F),V.distance=q,V.coneCos=Math.cos(C.angle),V.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),V.decay=C.decay,n.spot[_]=V;const Y=C.shadow;if(C.map&&(n.spotLightMap[P]=C.map,P++,Y.updateMatrices(C),C.castShadow&&A++),n.spotLightMatrix[_]=Y.matrix,C.castShadow){const z=e.get(C);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,n.spotShadow[_]=z,n.spotShadowMap[_]=W,M++}_++}else if(C.isRectAreaLight){const V=t.get(C);V.color.copy(U).multiplyScalar(F),V.halfWidth.set(C.width*.5,0,0),V.halfHeight.set(0,C.height*.5,0),n.rectArea[m]=V,m++}else if(C.isPointLight){const V=t.get(C);if(V.color.copy(C.color).multiplyScalar(C.intensity),V.distance=C.distance,V.decay=C.decay,C.castShadow){const Y=C.shadow,z=e.get(C);z.shadowIntensity=Y.intensity,z.shadowBias=Y.bias,z.shadowNormalBias=Y.normalBias,z.shadowRadius=Y.radius,z.shadowMapSize=Y.mapSize,z.shadowCameraNear=Y.camera.near,z.shadowCameraFar=Y.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=W,n.pointShadowMatrix[g]=C.shadow.matrix,b++}n.point[g]=V,g++}else if(C.isHemisphereLight){const V=t.get(C);V.skyColor.copy(C.color).multiplyScalar(F),V.groundColor.copy(C.groundColor).multiplyScalar(F),n.hemi[d]=V,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const R=n.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==_||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==E||R.numPointShadows!==b||R.numSpotShadows!==M||R.numSpotMaps!==P||R.numLightProbes!==T)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=b,n.pointShadowMap.length=b,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=b,n.spotLightMatrix.length=M+P-A,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=A,n.numLightProbes=T,R.directionalLength=p,R.pointLength=g,R.spotLength=_,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=E,R.numPointShadows=b,R.numSpotShadows=M,R.numSpotMaps=P,R.numLightProbes=T,n.version=yg++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,E=c.length;d<E;d++){const b=c[d];if(b.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(b.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(b.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(b.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(b.width*.5,0,0),M.halfHeight.set(0,b.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(b.isPointLight){const M=n.point[f];M.position.setFromMatrixPosition(b.matrixWorld),M.position.applyMatrix4(m),f++}else if(b.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(b.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function sh(i){const t=new Eg(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function o(h){n.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function bg(i){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new sh(i),t.set(s,[a])):r>=o.length?(a=new sh(i),o.push(a)):a=o[r],a}function n(){t=new WeakMap}return{get:e,dispose:n}}class Tg extends Di{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=yf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class wg extends Di{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Ag=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Rg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Cg(i,t,e){let n=new Hl;const s=new qt,r=new qt,o=new Pe,a=new Tg({depthPacking:Sf}),l=new wg,c={},h=e.maxTextureSize,u={[Pi]:nn,[nn]:Pi,[fn]:fn},f=new li({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new qt},radius:{value:4}},vertexShader:Ag,fragmentShader:Rg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ve;g.setAttribute("position",new dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Vt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fh;let d=this.type;this.render=function(A,T,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;const y=i.getRenderTarget(),v=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),U=i.state;U.setBlending(Ei),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const F=d!==ei&&this.type===ei,q=d===ei&&this.type!==ei;for(let W=0,V=A.length;W<V;W++){const Y=A[W],z=Y.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;s.copy(z.mapSize);const st=z.getFrameExtents();if(s.multiply(st),r.copy(z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/st.x),s.x=r.x*st.x,z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/st.y),s.y=r.y*st.y,z.mapSize.y=r.y)),z.map===null||F===!0||q===!0){const yt=this.type!==ei?{minFilter:fe,magFilter:fe}:{};z.map!==null&&z.map.dispose(),z.map=new $i(s.x,s.y,yt),z.map.texture.name=Y.name+".shadowMap",z.camera.updateProjectionMatrix()}i.setRenderTarget(z.map),i.clear();const pt=z.getViewportCount();for(let yt=0;yt<pt;yt++){const Ot=z.getViewport(yt);o.set(r.x*Ot.x,r.y*Ot.y,r.x*Ot.z,r.y*Ot.w),U.viewport(o),z.updateMatrices(Y,yt),n=z.getFrustum(),M(T,R,z.camera,Y,this.type)}z.isPointLightShadow!==!0&&this.type===ei&&E(z,R),z.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(y,v,C)};function E(A,T){const R=t.update(_);f.defines.VSM_SAMPLES!==A.blurSamples&&(f.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new $i(s.x,s.y)),f.uniforms.shadow_pass.value=A.map.texture,f.uniforms.resolution.value=A.mapSize,f.uniforms.radius.value=A.radius,i.setRenderTarget(A.mapPass),i.clear(),i.renderBufferDirect(T,null,R,f,_,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,i.setRenderTarget(A.map),i.clear(),i.renderBufferDirect(T,null,R,p,_,null)}function b(A,T,R,y){let v=null;const C=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(C!==void 0)v=C;else if(v=R.isPointLight===!0?l:a,i.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const U=v.uuid,F=T.uuid;let q=c[U];q===void 0&&(q={},c[U]=q);let W=q[F];W===void 0&&(W=v.clone(),q[F]=W,T.addEventListener("dispose",P)),v=W}if(v.visible=T.visible,v.wireframe=T.wireframe,y===ei?v.side=T.shadowSide!==null?T.shadowSide:T.side:v.side=T.shadowSide!==null?T.shadowSide:u[T.side],v.alphaMap=T.alphaMap,v.alphaTest=T.alphaTest,v.map=T.map,v.clipShadows=T.clipShadows,v.clippingPlanes=T.clippingPlanes,v.clipIntersection=T.clipIntersection,v.displacementMap=T.displacementMap,v.displacementScale=T.displacementScale,v.displacementBias=T.displacementBias,v.wireframeLinewidth=T.wireframeLinewidth,v.linewidth=T.linewidth,R.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=i.properties.get(v);U.light=R}return v}function M(A,T,R,y,v){if(A.visible===!1)return;if(A.layers.test(T.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&v===ei)&&(!A.frustumCulled||n.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const F=t.update(A),q=A.material;if(Array.isArray(q)){const W=F.groups;for(let V=0,Y=W.length;V<Y;V++){const z=W[V],st=q[z.materialIndex];if(st&&st.visible){const pt=b(A,st,y,v);A.onBeforeShadow(i,A,T,R,F,pt,z),i.renderBufferDirect(R,null,F,pt,A,z),A.onAfterShadow(i,A,T,R,F,pt,z)}}}else if(q.visible){const W=b(A,q,y,v);A.onBeforeShadow(i,A,T,R,F,W,null),i.renderBufferDirect(R,null,F,W,A,null),A.onAfterShadow(i,A,T,R,F,W,null)}}const U=A.children;for(let F=0,q=U.length;F<q;F++)M(U[F],T,R,y,v)}function P(A){A.target.removeEventListener("dispose",P);for(const R in c){const y=c[R],v=A.target.uuid;v in y&&(y[v].dispose(),delete y[v])}}}const Pg={[Fa]:Ba,[za]:Ga,[ka]:Va,[bs]:Ha,[Ba]:Fa,[Ga]:za,[Va]:ka,[Ha]:bs};function Lg(i,t){function e(){let D=!1;const lt=new Pe;let X=null;const J=new Pe(0,0,0,0);return{setMask:function(ft){X!==ft&&!D&&(i.colorMask(ft,ft,ft,ft),X=ft)},setLocked:function(ft){D=ft},setClear:function(ft,ht,Ft,Ae,We){We===!0&&(ft*=Ae,ht*=Ae,Ft*=Ae),lt.set(ft,ht,Ft,Ae),J.equals(lt)===!1&&(i.clearColor(ft,ht,Ft,Ae),J.copy(lt))},reset:function(){D=!1,X=null,J.set(-1,0,0,0)}}}function n(){let D=!1,lt=!1,X=null,J=null,ft=null;return{setReversed:function(ht){if(lt!==ht){const Ft=t.get("EXT_clip_control");lt?Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.ZERO_TO_ONE_EXT):Ft.clipControlEXT(Ft.LOWER_LEFT_EXT,Ft.NEGATIVE_ONE_TO_ONE_EXT);const Ae=ft;ft=null,this.setClear(Ae)}lt=ht},getReversed:function(){return lt},setTest:function(ht){ht?rt(i.DEPTH_TEST):Tt(i.DEPTH_TEST)},setMask:function(ht){X!==ht&&!D&&(i.depthMask(ht),X=ht)},setFunc:function(ht){if(lt&&(ht=Pg[ht]),J!==ht){switch(ht){case Fa:i.depthFunc(i.NEVER);break;case Ba:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case bs:i.depthFunc(i.LEQUAL);break;case ka:i.depthFunc(i.EQUAL);break;case Ha:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Va:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}J=ht}},setLocked:function(ht){D=ht},setClear:function(ht){ft!==ht&&(lt&&(ht=1-ht),i.clearDepth(ht),ft=ht)},reset:function(){D=!1,X=null,J=null,ft=null,lt=!1}}}function s(){let D=!1,lt=null,X=null,J=null,ft=null,ht=null,Ft=null,Ae=null,We=null;return{setTest:function(oe){D||(oe?rt(i.STENCIL_TEST):Tt(i.STENCIL_TEST))},setMask:function(oe){lt!==oe&&!D&&(i.stencilMask(oe),lt=oe)},setFunc:function(oe,Cn,Yn){(X!==oe||J!==Cn||ft!==Yn)&&(i.stencilFunc(oe,Cn,Yn),X=oe,J=Cn,ft=Yn)},setOp:function(oe,Cn,Yn){(ht!==oe||Ft!==Cn||Ae!==Yn)&&(i.stencilOp(oe,Cn,Yn),ht=oe,Ft=Cn,Ae=Yn)},setLocked:function(oe){D=oe},setClear:function(oe){We!==oe&&(i.clearStencil(oe),We=oe)},reset:function(){D=!1,lt=null,X=null,J=null,ft=null,ht=null,Ft=null,Ae=null,We=null}}}const r=new e,o=new n,a=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,b=null,M=null,P=null,A=null,T=new Pt(0,0,0),R=0,y=!1,v=null,C=null,U=null,F=null,q=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,Y=0;const z=i.getParameter(i.VERSION);z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(z)[1]),V=Y>=1):z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),V=Y>=2);let st=null,pt={};const yt=i.getParameter(i.SCISSOR_BOX),Ot=i.getParameter(i.VIEWPORT),te=new Pe().fromArray(yt),$=new Pe().fromArray(Ot);function et(D,lt,X,J){const ft=new Uint8Array(4),ht=i.createTexture();i.bindTexture(D,ht),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ft=0;Ft<X;Ft++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(lt,0,i.RGBA,1,1,J,0,i.RGBA,i.UNSIGNED_BYTE,ft):i.texImage2D(lt+Ft,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ft);return ht}const at={};at[i.TEXTURE_2D]=et(i.TEXTURE_2D,i.TEXTURE_2D,1),at[i.TEXTURE_CUBE_MAP]=et(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),at[i.TEXTURE_2D_ARRAY]=et(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),at[i.TEXTURE_3D]=et(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),rt(i.DEPTH_TEST),o.setFunc(bs),Wt(!1),$t(hc),rt(i.CULL_FACE),O(Ei);function rt(D){h[D]!==!0&&(i.enable(D),h[D]=!0)}function Tt(D){h[D]!==!1&&(i.disable(D),h[D]=!1)}function Rt(D,lt){return u[D]!==lt?(i.bindFramebuffer(D,lt),u[D]=lt,D===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=lt),D===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=lt),!0):!1}function It(D,lt){let X=p,J=!1;if(D){X=f.get(lt),X===void 0&&(X=[],f.set(lt,X));const ft=D.textures;if(X.length!==ft.length||X[0]!==i.COLOR_ATTACHMENT0){for(let ht=0,Ft=ft.length;ht<Ft;ht++)X[ht]=i.COLOR_ATTACHMENT0+ht;X.length=ft.length,J=!0}}else X[0]!==i.BACK&&(X[0]=i.BACK,J=!0);J&&i.drawBuffers(X)}function me(D){return g!==D?(i.useProgram(D),g=D,!0):!1}const Kt={[Gi]:i.FUNC_ADD,[Yu]:i.FUNC_SUBTRACT,[$u]:i.FUNC_REVERSE_SUBTRACT};Kt[Ku]=i.MIN,Kt[ju]=i.MAX;const le={[Zu]:i.ZERO,[Ju]:i.ONE,[Qu]:i.SRC_COLOR,[Na]:i.SRC_ALPHA,[of]:i.SRC_ALPHA_SATURATE,[sf]:i.DST_COLOR,[ef]:i.DST_ALPHA,[tf]:i.ONE_MINUS_SRC_COLOR,[Oa]:i.ONE_MINUS_SRC_ALPHA,[rf]:i.ONE_MINUS_DST_COLOR,[nf]:i.ONE_MINUS_DST_ALPHA,[af]:i.CONSTANT_COLOR,[lf]:i.ONE_MINUS_CONSTANT_COLOR,[cf]:i.CONSTANT_ALPHA,[hf]:i.ONE_MINUS_CONSTANT_ALPHA};function O(D,lt,X,J,ft,ht,Ft,Ae,We,oe){if(D===Ei){_===!0&&(Tt(i.BLEND),_=!1);return}if(_===!1&&(rt(i.BLEND),_=!0),D!==qu){if(D!==m||oe!==y){if((d!==Gi||M!==Gi)&&(i.blendEquation(i.FUNC_ADD),d=Gi,M=Gi),oe)switch(D){case xs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ua:i.blendFunc(i.ONE,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case xs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ua:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case uc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}E=null,b=null,P=null,A=null,T.set(0,0,0),R=0,m=D,y=oe}return}ft=ft||lt,ht=ht||X,Ft=Ft||J,(lt!==d||ft!==M)&&(i.blendEquationSeparate(Kt[lt],Kt[ft]),d=lt,M=ft),(X!==E||J!==b||ht!==P||Ft!==A)&&(i.blendFuncSeparate(le[X],le[J],le[ht],le[Ft]),E=X,b=J,P=ht,A=Ft),(Ae.equals(T)===!1||We!==R)&&(i.blendColor(Ae.r,Ae.g,Ae.b,We),T.copy(Ae),R=We),m=D,y=!1}function on(D,lt){D.side===fn?Tt(i.CULL_FACE):rt(i.CULL_FACE);let X=D.side===nn;lt&&(X=!X),Wt(X),D.blending===xs&&D.transparent===!1?O(Ei):O(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),o.setFunc(D.depthFunc),o.setTest(D.depthTest),o.setMask(D.depthWrite),r.setMask(D.colorWrite);const J=D.stencilWrite;a.setTest(J),J&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),ge(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?rt(i.SAMPLE_ALPHA_TO_COVERAGE):Tt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Wt(D){v!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),v=D)}function $t(D){D!==Vu?(rt(i.CULL_FACE),D!==C&&(D===hc?i.cullFace(i.BACK):D===Wu?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Tt(i.CULL_FACE),C=D}function wt(D){D!==U&&(V&&i.lineWidth(D),U=D)}function ge(D,lt,X){D?(rt(i.POLYGON_OFFSET_FILL),(F!==lt||q!==X)&&(i.polygonOffset(lt,X),F=lt,q=X)):Tt(i.POLYGON_OFFSET_FILL)}function At(D){D?rt(i.SCISSOR_TEST):Tt(i.SCISSOR_TEST)}function w(D){D===void 0&&(D=i.TEXTURE0+W-1),st!==D&&(i.activeTexture(D),st=D)}function x(D,lt,X){X===void 0&&(st===null?X=i.TEXTURE0+W-1:X=st);let J=pt[X];J===void 0&&(J={type:void 0,texture:void 0},pt[X]=J),(J.type!==D||J.texture!==lt)&&(st!==X&&(i.activeTexture(X),st=X),i.bindTexture(D,lt||at[D]),J.type=D,J.texture=lt)}function B(){const D=pt[st];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function Z(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function St(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ct(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function mt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Jt(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function nt(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function gt(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ct(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Lt(D){te.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),te.copy(D))}function _t(D){$.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),$.copy(D))}function Zt(D,lt){let X=c.get(lt);X===void 0&&(X=new WeakMap,c.set(lt,X));let J=X.get(D);J===void 0&&(J=i.getUniformBlockIndex(lt,D.name),X.set(D,J))}function Ht(D,lt){const J=c.get(lt).get(D);l.get(lt)!==J&&(i.uniformBlockBinding(lt,J,D.__bindingPointIndex),l.set(lt,J))}function de(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},st=null,pt={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,E=null,b=null,M=null,P=null,A=null,T=new Pt(0,0,0),R=0,y=!1,v=null,C=null,U=null,F=null,q=null,te.set(0,0,i.canvas.width,i.canvas.height),$.set(0,0,i.canvas.width,i.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:rt,disable:Tt,bindFramebuffer:Rt,drawBuffers:It,useProgram:me,setBlending:O,setMaterial:on,setFlipSided:Wt,setCullFace:$t,setLineWidth:wt,setPolygonOffset:ge,setScissorTest:At,activeTexture:w,bindTexture:x,unbindTexture:B,compressedTexImage2D:Z,compressedTexImage3D:tt,texImage2D:gt,texImage3D:Ct,updateUBOMapping:Zt,uniformBlockBinding:Ht,texStorage2D:Jt,texStorage3D:nt,texSubImage2D:K,texSubImage3D:St,compressedTexSubImage2D:ct,compressedTexSubImage3D:mt,scissor:Lt,viewport:_t,reset:de}}function rh(i,t,e,n){const s=Dg(n);switch(e){case Gh:return i*t;case Wh:return i*t;case Xh:return i*t*2;case qh:return i*t/s.components*s.byteLength;case Fl:return i*t/s.components*s.byteLength;case Yh:return i*t*2/s.components*s.byteLength;case Bl:return i*t*2/s.components*s.byteLength;case Vh:return i*t*3/s.components*s.byteLength;case Nn:return i*t*4/s.components*s.byteLength;case zl:return i*t*4/s.components*s.byteLength;case jr:case Zr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Jr:case Qr:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case $a:case ja:return Math.max(i,16)*Math.max(t,8)/4;case Ya:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case Za:case Ja:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Qa:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case el:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case il:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case rl:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case cl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case fl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case to:case pl:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case $h:case gl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case _l:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Dg(i){switch(i){case ai:case zh:return{byteLength:1,components:1};case Qs:case kh:case rr:return{byteLength:2,components:1};case Nl:case Ol:return{byteLength:2,components:4};case Yi:case Ul:case ii:return{byteLength:4,components:1};case Hh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function Ig(i,t,e,n,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new qt,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):lo("canvas")}function _(w,x,B){let Z=1;const tt=At(w);if((tt.width>B||tt.height>B)&&(Z=B/Math.max(tt.width,tt.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const K=Math.floor(Z*tt.width),St=Math.floor(Z*tt.height);u===void 0&&(u=g(K,St));const ct=x?g(K,St):u;return ct.width=K,ct.height=St,ct.getContext("2d").drawImage(w,0,0,K,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+K+"x"+St+")."),ct}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function E(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(w,x,B,Z,tt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let K=x;if(x===i.RED&&(B===i.FLOAT&&(K=i.R32F),B===i.HALF_FLOAT&&(K=i.R16F),B===i.UNSIGNED_BYTE&&(K=i.R8)),x===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.R8UI),B===i.UNSIGNED_SHORT&&(K=i.R16UI),B===i.UNSIGNED_INT&&(K=i.R32UI),B===i.BYTE&&(K=i.R8I),B===i.SHORT&&(K=i.R16I),B===i.INT&&(K=i.R32I)),x===i.RG&&(B===i.FLOAT&&(K=i.RG32F),B===i.HALF_FLOAT&&(K=i.RG16F),B===i.UNSIGNED_BYTE&&(K=i.RG8)),x===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RG8UI),B===i.UNSIGNED_SHORT&&(K=i.RG16UI),B===i.UNSIGNED_INT&&(K=i.RG32UI),B===i.BYTE&&(K=i.RG8I),B===i.SHORT&&(K=i.RG16I),B===i.INT&&(K=i.RG32I)),x===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGB8UI),B===i.UNSIGNED_SHORT&&(K=i.RGB16UI),B===i.UNSIGNED_INT&&(K=i.RGB32UI),B===i.BYTE&&(K=i.RGB8I),B===i.SHORT&&(K=i.RGB16I),B===i.INT&&(K=i.RGB32I)),x===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),B===i.UNSIGNED_INT&&(K=i.RGBA32UI),B===i.BYTE&&(K=i.RGBA8I),B===i.SHORT&&(K=i.RGBA16I),B===i.INT&&(K=i.RGBA32I)),x===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),x===i.RGBA){const St=tt?Ro:Qt.getTransfer(Z);B===i.FLOAT&&(K=i.RGBA32F),B===i.HALF_FLOAT&&(K=i.RGBA16F),B===i.UNSIGNED_BYTE&&(K=St===ce?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&t.get("EXT_color_buffer_float"),K}function M(w,x){let B;return w?x===null||x===Yi||x===As?B=i.DEPTH24_STENCIL8:x===ii?B=i.DEPTH32F_STENCIL8:x===Qs&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Yi||x===As?B=i.DEPTH_COMPONENT24:x===ii?B=i.DEPTH_COMPONENT32F:x===Qs&&(B=i.DEPTH_COMPONENT16),B}function P(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==fe&&w.minFilter!==Vn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function A(w){const x=w.target;x.removeEventListener("dispose",A),R(x),x.isVideoTexture&&h.delete(x)}function T(w){const x=w.target;x.removeEventListener("dispose",T),v(x)}function R(w){const x=n.get(w);if(x.__webglInit===void 0)return;const B=w.source,Z=f.get(B);if(Z){const tt=Z[x.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&y(w),Object.keys(Z).length===0&&f.delete(B)}n.remove(w)}function y(w){const x=n.get(w);i.deleteTexture(x.__webglTexture);const B=w.source,Z=f.get(B);delete Z[x.__cacheKey],o.memory.textures--}function v(w){const x=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let tt=0;tt<x.__webglFramebuffer[Z].length;tt++)i.deleteFramebuffer(x.__webglFramebuffer[Z][tt]);else i.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)i.deleteFramebuffer(x.__webglFramebuffer[Z]);else i.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&i.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&i.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&i.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const B=w.textures;for(let Z=0,tt=B.length;Z<tt;Z++){const K=n.get(B[Z]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),o.memory.textures--),n.remove(B[Z])}n.remove(w)}let C=0;function U(){C=0}function F(){const w=C;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),C+=1,w}function q(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function W(w,x){const B=n.get(w);if(w.isVideoTexture&&wt(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{$(B,w,x);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+x)}function V(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){$(B,w,x);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+x)}function Y(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){$(B,w,x);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+x)}function z(w,x){const B=n.get(w);if(w.version>0&&B.__version!==w.version){et(B,w,x);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+x)}const st={[oo]:i.REPEAT,[Wi]:i.CLAMP_TO_EDGE,[qa]:i.MIRRORED_REPEAT},pt={[fe]:i.NEAREST,[Mf]:i.NEAREST_MIPMAP_NEAREST,[fr]:i.NEAREST_MIPMAP_LINEAR,[Vn]:i.LINEAR,[Bo]:i.LINEAR_MIPMAP_NEAREST,[Xi]:i.LINEAR_MIPMAP_LINEAR},yt={[bf]:i.NEVER,[Pf]:i.ALWAYS,[Tf]:i.LESS,[jh]:i.LEQUAL,[wf]:i.EQUAL,[Cf]:i.GEQUAL,[Af]:i.GREATER,[Rf]:i.NOTEQUAL};function Ot(w,x){if(x.type===ii&&t.has("OES_texture_float_linear")===!1&&(x.magFilter===Vn||x.magFilter===Bo||x.magFilter===fr||x.magFilter===Xi||x.minFilter===Vn||x.minFilter===Bo||x.minFilter===fr||x.minFilter===Xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,st[x.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,st[x.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,st[x.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,pt[x.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,pt[x.minFilter]),x.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,yt[x.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===fe||x.minFilter!==fr&&x.minFilter!==Xi||x.type===ii&&t.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function te(w,x){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",A));const Z=x.source;let tt=f.get(Z);tt===void 0&&(tt={},f.set(Z,tt));const K=q(x);if(K!==w.__cacheKey){tt[K]===void 0&&(tt[K]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,B=!0),tt[K].usedTimes++;const St=tt[w.__cacheKey];St!==void 0&&(tt[w.__cacheKey].usedTimes--,St.usedTimes===0&&y(x)),w.__cacheKey=K,w.__webglTexture=tt[K].texture}return B}function $(w,x,B){let Z=i.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=i.TEXTURE_3D);const tt=te(w,x),K=x.source;e.bindTexture(Z,w.__webglTexture,i.TEXTURE0+B);const St=n.get(K);if(K.version!==St.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const ct=Qt.getPrimaries(Qt.workingColorSpace),mt=x.colorSpace===yi?null:Qt.getPrimaries(x.colorSpace),Jt=x.colorSpace===yi||ct===mt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Jt);let nt=_(x.image,!1,s.maxTextureSize);nt=ge(x,nt);const gt=r.convert(x.format,x.colorSpace),Ct=r.convert(x.type);let Lt=b(x.internalFormat,gt,Ct,x.colorSpace,x.isVideoTexture);Ot(Z,x);let _t;const Zt=x.mipmaps,Ht=x.isVideoTexture!==!0,de=St.__version===void 0||tt===!0,D=K.dataReady,lt=P(x,nt);if(x.isDepthTexture)Lt=M(x.format===Rs,x.type),de&&(Ht?e.texStorage2D(i.TEXTURE_2D,1,Lt,nt.width,nt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,gt,Ct,null));else if(x.isDataTexture)if(Zt.length>0){Ht&&de&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Zt[0].width,Zt[0].height);for(let X=0,J=Zt.length;X<J;X++)_t=Zt[X],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(i.TEXTURE_2D,X,Lt,_t.width,_t.height,0,gt,Ct,_t.data);x.generateMipmaps=!1}else Ht?(de&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,nt.width,nt.height),D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,nt.width,nt.height,gt,Ct,nt.data)):e.texImage2D(i.TEXTURE_2D,0,Lt,nt.width,nt.height,0,gt,Ct,nt.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){Ht&&de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,Zt[0].width,Zt[0].height,nt.depth);for(let X=0,J=Zt.length;X<J;X++)if(_t=Zt[X],x.format!==Nn)if(gt!==null)if(Ht){if(D)if(x.layerUpdates.size>0){const ft=rh(_t.width,_t.height,x.format,x.type);for(const ht of x.layerUpdates){const Ft=_t.data.subarray(ht*ft/_t.data.BYTES_PER_ELEMENT,(ht+1)*ft/_t.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,ht,_t.width,_t.height,1,gt,Ft)}x.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,nt.depth,gt,_t.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,X,Lt,_t.width,_t.height,nt.depth,0,_t.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ht?D&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,X,0,0,0,_t.width,_t.height,nt.depth,gt,Ct,_t.data):e.texImage3D(i.TEXTURE_2D_ARRAY,X,Lt,_t.width,_t.height,nt.depth,0,gt,Ct,_t.data)}else{Ht&&de&&e.texStorage2D(i.TEXTURE_2D,lt,Lt,Zt[0].width,Zt[0].height);for(let X=0,J=Zt.length;X<J;X++)_t=Zt[X],x.format!==Nn?gt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,_t.data):e.compressedTexImage2D(i.TEXTURE_2D,X,Lt,_t.width,_t.height,0,_t.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ht?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,_t.width,_t.height,gt,Ct,_t.data):e.texImage2D(i.TEXTURE_2D,X,Lt,_t.width,_t.height,0,gt,Ct,_t.data)}else if(x.isDataArrayTexture)if(Ht){if(de&&e.texStorage3D(i.TEXTURE_2D_ARRAY,lt,Lt,nt.width,nt.height,nt.depth),D)if(x.layerUpdates.size>0){const X=rh(nt.width,nt.height,x.format,x.type);for(const J of x.layerUpdates){const ft=nt.data.subarray(J*X/nt.data.BYTES_PER_ELEMENT,(J+1)*X/nt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,J,nt.width,nt.height,1,gt,Ct,ft)}x.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(x.isData3DTexture)Ht?(de&&e.texStorage3D(i.TEXTURE_3D,lt,Lt,nt.width,nt.height,nt.depth),D&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,nt.width,nt.height,nt.depth,gt,Ct,nt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,nt.width,nt.height,nt.depth,0,gt,Ct,nt.data);else if(x.isFramebufferTexture){if(de)if(Ht)e.texStorage2D(i.TEXTURE_2D,lt,Lt,nt.width,nt.height);else{let X=nt.width,J=nt.height;for(let ft=0;ft<lt;ft++)e.texImage2D(i.TEXTURE_2D,ft,Lt,X,J,0,gt,Ct,null),X>>=1,J>>=1}}else if(Zt.length>0){if(Ht&&de){const X=At(Zt[0]);e.texStorage2D(i.TEXTURE_2D,lt,Lt,X.width,X.height)}for(let X=0,J=Zt.length;X<J;X++)_t=Zt[X],Ht?D&&e.texSubImage2D(i.TEXTURE_2D,X,0,0,gt,Ct,_t):e.texImage2D(i.TEXTURE_2D,X,Lt,gt,Ct,_t);x.generateMipmaps=!1}else if(Ht){if(de){const X=At(nt);e.texStorage2D(i.TEXTURE_2D,lt,Lt,X.width,X.height)}D&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,gt,Ct,nt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,gt,Ct,nt);m(x)&&d(Z),St.__version=K.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function et(w,x,B){if(x.image.length!==6)return;const Z=te(w,x),tt=x.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const K=n.get(tt);if(tt.version!==K.__version||Z===!0){e.activeTexture(i.TEXTURE0+B);const St=Qt.getPrimaries(Qt.workingColorSpace),ct=x.colorSpace===yi?null:Qt.getPrimaries(x.colorSpace),mt=x.colorSpace===yi||St===ct?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,x.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,x.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,mt);const Jt=x.isCompressedTexture||x.image[0].isCompressedTexture,nt=x.image[0]&&x.image[0].isDataTexture,gt=[];for(let J=0;J<6;J++)!Jt&&!nt?gt[J]=_(x.image[J],!0,s.maxCubemapSize):gt[J]=nt?x.image[J].image:x.image[J],gt[J]=ge(x,gt[J]);const Ct=gt[0],Lt=r.convert(x.format,x.colorSpace),_t=r.convert(x.type),Zt=b(x.internalFormat,Lt,_t,x.colorSpace),Ht=x.isVideoTexture!==!0,de=K.__version===void 0||Z===!0,D=tt.dataReady;let lt=P(x,Ct);Ot(i.TEXTURE_CUBE_MAP,x);let X;if(Jt){Ht&&de&&e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Zt,Ct.width,Ct.height);for(let J=0;J<6;J++){X=gt[J].mipmaps;for(let ft=0;ft<X.length;ft++){const ht=X[ft];x.format!==Nn?Lt!==null?Ht?D&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ht.width,ht.height,Lt,ht.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Zt,ht.width,ht.height,0,ht.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,0,0,ht.width,ht.height,Lt,_t,ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft,Zt,ht.width,ht.height,0,Lt,_t,ht.data)}}}else{if(X=x.mipmaps,Ht&&de){X.length>0&&lt++;const J=At(gt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,lt,Zt,J.width,J.height)}for(let J=0;J<6;J++)if(nt){Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,gt[J].width,gt[J].height,Lt,_t,gt[J].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,gt[J].width,gt[J].height,0,Lt,_t,gt[J].data);for(let ft=0;ft<X.length;ft++){const Ft=X[ft].image[J].image;Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Ft.width,Ft.height,Lt,_t,Ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Zt,Ft.width,Ft.height,0,Lt,_t,Ft.data)}}else{Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,Lt,_t,gt[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Zt,Lt,_t,gt[J]);for(let ft=0;ft<X.length;ft++){const ht=X[ft];Ht?D&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,0,0,Lt,_t,ht.image[J]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+J,ft+1,Zt,Lt,_t,ht.image[J])}}}m(x)&&d(i.TEXTURE_CUBE_MAP),K.__version=tt.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function at(w,x,B,Z,tt,K){const St=r.convert(B.format,B.colorSpace),ct=r.convert(B.type),mt=b(B.internalFormat,St,ct,B.colorSpace),Jt=n.get(x),nt=n.get(B);if(nt.__renderTarget=x,!Jt.__hasExternalTextures){const gt=Math.max(1,x.width>>K),Ct=Math.max(1,x.height>>K);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,K,mt,gt,Ct,x.depth,0,St,ct,null):e.texImage2D(tt,K,mt,gt,Ct,0,St,ct,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),$t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,tt,nt.__webglTexture,0,Wt(x)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,tt,nt.__webglTexture,K),e.bindFramebuffer(i.FRAMEBUFFER,null)}function rt(w,x,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),x.depthBuffer){const Z=x.depthTexture,tt=Z&&Z.isDepthTexture?Z.type:null,K=M(x.stencilBuffer,tt),St=x.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ct=Wt(x);$t(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct,K,x.width,x.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct,K,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,K,x.width,x.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,St,i.RENDERBUFFER,w)}else{const Z=x.textures;for(let tt=0;tt<Z.length;tt++){const K=Z[tt],St=r.convert(K.format,K.colorSpace),ct=r.convert(K.type),mt=b(K.internalFormat,St,ct,K.colorSpace),Jt=Wt(x);B&&$t(x)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Jt,mt,x.width,x.height):$t(x)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Jt,mt,x.width,x.height):i.renderbufferStorage(i.RENDERBUFFER,mt,x.width,x.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Tt(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Z=n.get(x.depthTexture);Z.__renderTarget=x,(!Z.__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),W(x.depthTexture,0);const tt=Z.__webglTexture,K=Wt(x);if(x.depthTexture.format===Ms)$t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(x.depthTexture.format===Rs)$t(x)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,K):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Rt(w){const x=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const tt=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",tt)};Z.addEventListener("dispose",tt),x.__depthDisposeCallback=tt}x.__boundDepthTexture=Z}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");Tt(x.__webglFramebuffer,w)}else if(B){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=i.createRenderbuffer(),rt(x.__webglDepthbuffer[Z],w,!1);else{const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=x.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,K)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=i.createRenderbuffer(),rt(x.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=x.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,Z,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(w,x,B){const Z=n.get(w);x!==void 0&&at(Z.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Rt(w)}function me(w){const x=w.texture,B=n.get(w),Z=n.get(x);w.addEventListener("dispose",T);const tt=w.textures,K=w.isWebGLCubeRenderTarget===!0,St=tt.length>1;if(St||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=x.version,o.memory.textures++),K){B.__webglFramebuffer=[];for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer[ct]=[];for(let mt=0;mt<x.mipmaps.length;mt++)B.__webglFramebuffer[ct][mt]=i.createFramebuffer()}else B.__webglFramebuffer[ct]=i.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){B.__webglFramebuffer=[];for(let ct=0;ct<x.mipmaps.length;ct++)B.__webglFramebuffer[ct]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(St)for(let ct=0,mt=tt.length;ct<mt;ct++){const Jt=n.get(tt[ct]);Jt.__webglTexture===void 0&&(Jt.__webglTexture=i.createTexture(),o.memory.textures++)}if(w.samples>0&&$t(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ct=0;ct<tt.length;ct++){const mt=tt[ct];B.__webglColorRenderbuffer[ct]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ct]);const Jt=r.convert(mt.format,mt.colorSpace),nt=r.convert(mt.type),gt=b(mt.internalFormat,Jt,nt,mt.colorSpace,w.isXRRenderTarget===!0),Ct=Wt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,gt,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ct,i.RENDERBUFFER,B.__webglColorRenderbuffer[ct])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),rt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){e.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ot(i.TEXTURE_CUBE_MAP,x);for(let ct=0;ct<6;ct++)if(x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)at(B.__webglFramebuffer[ct][mt],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,mt);else at(B.__webglFramebuffer[ct],w,x,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ct,0);m(x)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let ct=0,mt=tt.length;ct<mt;ct++){const Jt=tt[ct],nt=n.get(Jt);e.bindTexture(i.TEXTURE_2D,nt.__webglTexture),Ot(i.TEXTURE_2D,Jt),at(B.__webglFramebuffer,w,Jt,i.COLOR_ATTACHMENT0+ct,i.TEXTURE_2D,0),m(Jt)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ct=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ct=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ct,Z.__webglTexture),Ot(ct,x),x.mipmaps&&x.mipmaps.length>0)for(let mt=0;mt<x.mipmaps.length;mt++)at(B.__webglFramebuffer[mt],w,x,i.COLOR_ATTACHMENT0,ct,mt);else at(B.__webglFramebuffer,w,x,i.COLOR_ATTACHMENT0,ct,0);m(x)&&d(ct),e.unbindTexture()}w.depthBuffer&&Rt(w)}function Kt(w){const x=w.textures;for(let B=0,Z=x.length;B<Z;B++){const tt=x[B];if(m(tt)){const K=E(w),St=n.get(tt).__webglTexture;e.bindTexture(K,St),d(K),e.unbindTexture()}}}const le=[],O=[];function on(w){if(w.samples>0){if($t(w)===!1){const x=w.textures,B=w.width,Z=w.height;let tt=i.COLOR_BUFFER_BIT;const K=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,St=n.get(w),ct=x.length>1;if(ct)for(let mt=0;mt<x.length;mt++)e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let mt=0;mt<x.length;mt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ct){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const Jt=n.get(x[mt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Jt,0)}i.blitFramebuffer(0,0,B,Z,0,0,B,Z,tt,i.NEAREST),l===!0&&(le.length=0,O.length=0,le.push(i.COLOR_ATTACHMENT0+mt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(le.push(K),O.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,le))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ct)for(let mt=0;mt<x.length;mt++){e.bindFramebuffer(i.FRAMEBUFFER,St.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.RENDERBUFFER,St.__webglColorRenderbuffer[mt]);const Jt=n.get(x[mt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,St.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+mt,i.TEXTURE_2D,Jt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[x])}}}function Wt(w){return Math.min(s.maxSamples,w.samples)}function $t(w){const x=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function wt(w){const x=o.render.frame;h.get(w)!==x&&(h.set(w,x),w.update())}function ge(w,x){const B=w.colorSpace,Z=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Ls&&B!==yi&&(Qt.getTransfer(B)===ce?(Z!==Nn||tt!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),x}function At(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=F,this.resetTextureUnits=U,this.setTexture2D=W,this.setTexture2DArray=V,this.setTexture3D=Y,this.setTextureCube=z,this.rebindTextures=It,this.setupRenderTarget=me,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=Rt,this.setupFrameBufferTexture=at,this.useMultisampledRTT=$t}function Ug(i,t){function e(n,s=yi){let r;const o=Qt.getTransfer(s);if(n===ai)return i.UNSIGNED_BYTE;if(n===Nl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hh)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===zh)return i.BYTE;if(n===kh)return i.SHORT;if(n===Qs)return i.UNSIGNED_SHORT;if(n===Ul)return i.INT;if(n===Yi)return i.UNSIGNED_INT;if(n===ii)return i.FLOAT;if(n===rr)return i.HALF_FLOAT;if(n===Gh)return i.ALPHA;if(n===Vh)return i.RGB;if(n===Nn)return i.RGBA;if(n===Wh)return i.LUMINANCE;if(n===Xh)return i.LUMINANCE_ALPHA;if(n===Ms)return i.DEPTH_COMPONENT;if(n===Rs)return i.DEPTH_STENCIL;if(n===qh)return i.RED;if(n===Fl)return i.RED_INTEGER;if(n===Yh)return i.RG;if(n===Bl)return i.RG_INTEGER;if(n===zl)return i.RGBA_INTEGER;if(n===jr||n===Zr||n===Jr||n===Qr)if(o===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===jr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===jr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Zr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Qr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Ya||n===$a||n===Ka||n===ja)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Ya)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===$a)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ja)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Za||n===Ja||n===Qa)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Za||n===Ja)return o===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Qa)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===el||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===fl||n===dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===el)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===nl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===il)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===sl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===rl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ol)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===al)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===cl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ul)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===dl)return o===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===to||n===pl||n===ml)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===to)return o===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===pl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===$h||n===gl||n===_l||n===vl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===to)return r.COMPRESSED_RED_RGTC1_EXT;if(n===gl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===vl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===As?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class Ng extends bn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Te extends Ne{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Og={type:"move"};class fa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Te,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Te,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Te,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Og)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Te;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const Fg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Bg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class zg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new sn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new li({vertexShader:Fg,fragmentShader:Bg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Vt(new oi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class kg extends Ds{constructor(t,e){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=new zg,m=e.getContextAttributes();let d=null,E=null;const b=[],M=[],P=new qt;let A=null;const T=new bn;T.viewport=new Pe;const R=new bn;R.viewport=new Pe;const y=[T,R],v=new Ng;let C=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let et=b[$];return et===void 0&&(et=new fa,b[$]=et),et.getTargetRaySpace()},this.getControllerGrip=function($){let et=b[$];return et===void 0&&(et=new fa,b[$]=et),et.getGripSpace()},this.getHand=function($){let et=b[$];return et===void 0&&(et=new fa,b[$]=et),et.getHandSpace()};function F($){const et=M.indexOf($.inputSource);if(et===-1)return;const at=b[et];at!==void 0&&(at.update($.inputSource,$.frame,c||o),at.dispatchEvent({type:$.type,data:$.inputSource}))}function q(){s.removeEventListener("select",F),s.removeEventListener("selectstart",F),s.removeEventListener("selectend",F),s.removeEventListener("squeeze",F),s.removeEventListener("squeezestart",F),s.removeEventListener("squeezeend",F),s.removeEventListener("end",q),s.removeEventListener("inputsourceschange",W);for(let $=0;$<b.length;$++){const et=M[$];et!==null&&(M[$]=null,b[$].disconnect(et))}C=null,U=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,E=null,te.stop(),n.isPresenting=!1,t.setPixelRatio(A),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){a=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",F),s.addEventListener("selectstart",F),s.addEventListener("selectend",F),s.addEventListener("squeeze",F),s.addEventListener("squeezestart",F),s.addEventListener("squeezeend",F),s.addEventListener("end",q),s.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await e.makeXRCompatible(),A=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const et={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,et),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new $i(p.framebufferWidth,p.framebufferHeight,{format:Nn,type:ai,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let et=null,at=null,rt=null;m.depth&&(rt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,et=m.stencil?Rs:Ms,at=m.stencil?As:Yi);const Tt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(Tt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),E=new $i(f.textureWidth,f.textureHeight,{format:Nn,type:ai,depthTexture:new cu(f.textureWidth,f.textureHeight,at,void 0,void 0,void 0,void 0,void 0,void 0,et),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),te.setContext(s),te.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function W($){for(let et=0;et<$.removed.length;et++){const at=$.removed[et],rt=M.indexOf(at);rt>=0&&(M[rt]=null,b[rt].disconnect(at))}for(let et=0;et<$.added.length;et++){const at=$.added[et];let rt=M.indexOf(at);if(rt===-1){for(let Rt=0;Rt<b.length;Rt++)if(Rt>=M.length){M.push(at),rt=Rt;break}else if(M[Rt]===null){M[Rt]=at,rt=Rt;break}if(rt===-1)break}const Tt=b[rt];Tt&&Tt.connect(at)}}const V=new L,Y=new L;function z($,et,at){V.setFromMatrixPosition(et.matrixWorld),Y.setFromMatrixPosition(at.matrixWorld);const rt=V.distanceTo(Y),Tt=et.projectionMatrix.elements,Rt=at.projectionMatrix.elements,It=Tt[14]/(Tt[10]-1),me=Tt[14]/(Tt[10]+1),Kt=(Tt[9]+1)/Tt[5],le=(Tt[9]-1)/Tt[5],O=(Tt[8]-1)/Tt[0],on=(Rt[8]+1)/Rt[0],Wt=It*O,$t=It*on,wt=rt/(-O+on),ge=wt*-O;if(et.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(ge),$.translateZ(wt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),Tt[10]===-1)$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse);else{const At=It+wt,w=me+wt,x=Wt-ge,B=$t+(rt-ge),Z=Kt*me/w*At,tt=le*me/w*At;$.projectionMatrix.makePerspective(x,B,Z,tt,At,w),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function st($,et){et===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(et.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let et=$.near,at=$.far;_.texture!==null&&(_.depthNear>0&&(et=_.depthNear),_.depthFar>0&&(at=_.depthFar)),v.near=R.near=T.near=et,v.far=R.far=T.far=at,(C!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),C=v.near,U=v.far),T.layers.mask=$.layers.mask|2,R.layers.mask=$.layers.mask|4,v.layers.mask=T.layers.mask|R.layers.mask;const rt=$.parent,Tt=v.cameras;st(v,rt);for(let Rt=0;Rt<Tt.length;Rt++)st(Tt[Rt],rt);Tt.length===2?z(v,T,R):v.projectionMatrix.copy(T.projectionMatrix),pt($,v,rt)};function pt($,et,at){at===null?$.matrix.copy(et.matrixWorld):($.matrix.copy(at.matrixWorld),$.matrix.invert(),$.matrix.multiply(et.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(et.projectionMatrix),$.projectionMatrixInverse.copy(et.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=Ml*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=$)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(v)};let yt=null;function Ot($,et){if(h=et.getViewerPose(c||o),g=et,h!==null){const at=h.views;p!==null&&(t.setRenderTargetFramebuffer(E,p.framebuffer),t.setRenderTarget(E));let rt=!1;at.length!==v.cameras.length&&(v.cameras.length=0,rt=!0);for(let Rt=0;Rt<at.length;Rt++){const It=at[Rt];let me=null;if(p!==null)me=p.getViewport(It);else{const le=u.getViewSubImage(f,It);me=le.viewport,Rt===0&&(t.setRenderTargetTextures(E,le.colorTexture,f.ignoreDepthValues?void 0:le.depthStencilTexture),t.setRenderTarget(E))}let Kt=y[Rt];Kt===void 0&&(Kt=new bn,Kt.layers.enable(Rt),Kt.viewport=new Pe,y[Rt]=Kt),Kt.matrix.fromArray(It.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(It.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(me.x,me.y,me.width,me.height),Rt===0&&(v.matrix.copy(Kt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),rt===!0&&v.cameras.push(Kt)}const Tt=s.enabledFeatures;if(Tt&&Tt.includes("depth-sensing")){const Rt=u.getDepthInformation(at[0]);Rt&&Rt.isValid&&Rt.texture&&_.init(t,Rt,s.renderState)}}for(let at=0;at<b.length;at++){const rt=M[at],Tt=b[at];rt!==null&&Tt!==void 0&&Tt.update(rt,et,c||o)}yt&&yt($,et),et.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:et}),g=null}const te=new au;te.setAnimationLoop(Ot),this.setAnimationLoop=function($){yt=$},this.dispose=function(){}}}const zi=new qn,Hg=new ye;function Gg(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,su(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,E,b,M){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,M)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,E,b):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===nn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===nn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const E=t.get(d),b=E.envMap,M=E.envMapRotation;b&&(m.envMap.value=b,zi.copy(M),zi.x*=-1,zi.y*=-1,zi.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(zi.y*=-1,zi.z*=-1),m.envMapRotation.value.setFromMatrix4(Hg.makeRotationFromEuler(zi)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,E,b){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*E,m.scale.value=b*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,E){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===nn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const E=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function Vg(i,t,e,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,b){const M=b.program;n.uniformBlockBinding(E,M)}function c(E,b){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));const P=b.program;n.updateUBOMapping(E,P);const A=t.render.frame;r[E.id]!==A&&(f(E),r[E.id]=A)}function h(E){const b=u();E.__bindingPointIndex=b;const M=i.createBuffer(),P=E.__size,A=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,P,A),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,b,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(E){const b=s[E.id],M=E.uniforms,P=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,b);for(let A=0,T=M.length;A<T;A++){const R=Array.isArray(M[A])?M[A]:[M[A]];for(let y=0,v=R.length;y<v;y++){const C=R[y];if(p(C,A,y,P)===!0){const U=C.__offset,F=Array.isArray(C.value)?C.value:[C.value];let q=0;for(let W=0;W<F.length;W++){const V=F[W],Y=_(V);typeof V=="number"||typeof V=="boolean"?(C.__data[0]=V,i.bufferSubData(i.UNIFORM_BUFFER,U+q,C.__data)):V.isMatrix3?(C.__data[0]=V.elements[0],C.__data[1]=V.elements[1],C.__data[2]=V.elements[2],C.__data[3]=0,C.__data[4]=V.elements[3],C.__data[5]=V.elements[4],C.__data[6]=V.elements[5],C.__data[7]=0,C.__data[8]=V.elements[6],C.__data[9]=V.elements[7],C.__data[10]=V.elements[8],C.__data[11]=0):(V.toArray(C.__data,q),q+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,U,C.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,b,M,P){const A=E.value,T=b+"_"+M;if(P[T]===void 0)return typeof A=="number"||typeof A=="boolean"?P[T]=A:P[T]=A.clone(),!0;{const R=P[T];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return P[T]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(E){const b=E.uniforms;let M=0;const P=16;for(let T=0,R=b.length;T<R;T++){const y=Array.isArray(b[T])?b[T]:[b[T]];for(let v=0,C=y.length;v<C;v++){const U=y[v],F=Array.isArray(U.value)?U.value:[U.value];for(let q=0,W=F.length;q<W;q++){const V=F[q],Y=_(V),z=M%P,st=z%Y.boundary,pt=z+st;M+=st,pt!==0&&P-pt<Y.storage&&(M+=P-pt),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=M,M+=Y.storage}}}const A=M%P;return A>0&&(M+=P-A),E.__size=M,E.__cache={},this}function _(E){const b={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(b.boundary=4,b.storage=4):E.isVector2?(b.boundary=8,b.storage=8):E.isVector3||E.isColor?(b.boundary=16,b.storage=12):E.isVector4?(b.boundary=16,b.storage=16):E.isMatrix3?(b.boundary=48,b.storage=48):E.isMatrix4?(b.boundary=64,b.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),b}function m(E){const b=E.target;b.removeEventListener("dispose",m);const M=o.indexOf(b.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[b.id]),delete s[b.id],delete r[b.id]}function d(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:d}}class Wg{constructor(t={}){const{canvas:e=Df(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=o;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const E=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=$e,this.toneMapping=bi,this.toneMappingExposure=1;const M=this;let P=!1,A=0,T=0,R=null,y=-1,v=null;const C=new Pe,U=new Pe;let F=null;const q=new Pt(0);let W=0,V=e.width,Y=e.height,z=1,st=null,pt=null;const yt=new Pe(0,0,V,Y),Ot=new Pe(0,0,V,Y);let te=!1;const $=new Hl;let et=!1,at=!1;const rt=new ye,Tt=new ye,Rt=new L,It=new Pe,me={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function le(){return R===null?z:1}let O=n;function on(S,I){return e.getContext(S,I)}try{const S={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Dl}`),e.addEventListener("webglcontextlost",J,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",ht,!1),O===null){const I="webgl2";if(O=on(I,S),O===null)throw on(I)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let Wt,$t,wt,ge,At,w,x,B,Z,tt,K,St,ct,mt,Jt,nt,gt,Ct,Lt,_t,Zt,Ht,de,D;function lt(){Wt=new Km(O),Wt.init(),Ht=new Ug(O,Wt),$t=new Vm(O,Wt,t,Ht),wt=new Lg(O,Wt),$t.reverseDepthBuffer&&f&&wt.buffers.depth.setReversed(!0),ge=new Jm(O),At=new gg,w=new Ig(O,Wt,wt,At,$t,Ht,ge),x=new Xm(M),B=new $m(M),Z=new rd(O),de=new Hm(O,Z),tt=new jm(O,Z,ge,de),K=new t0(O,tt,Z,ge),Lt=new Qm(O,$t,w),nt=new Wm(At),St=new mg(M,x,B,Wt,$t,de,nt),ct=new Gg(M,At),mt=new vg,Jt=new bg(Wt),Ct=new km(M,x,B,wt,K,p,l),gt=new Cg(M,K,$t),D=new Vg(O,ge,$t,wt),_t=new Gm(O,Wt,ge),Zt=new Zm(O,Wt,ge),ge.programs=St.programs,M.capabilities=$t,M.extensions=Wt,M.properties=At,M.renderLists=mt,M.shadowMap=gt,M.state=wt,M.info=ge}lt();const X=new kg(M,O);this.xr=X,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const S=Wt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=Wt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(S){S!==void 0&&(z=S,this.setSize(V,Y,!1))},this.getSize=function(S){return S.set(V,Y)},this.setSize=function(S,I,k=!0){if(X.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}V=S,Y=I,e.width=Math.floor(S*z),e.height=Math.floor(I*z),k===!0&&(e.style.width=S+"px",e.style.height=I+"px"),this.setViewport(0,0,S,I)},this.getDrawingBufferSize=function(S){return S.set(V*z,Y*z).floor()},this.setDrawingBufferSize=function(S,I,k){V=S,Y=I,z=k,e.width=Math.floor(S*k),e.height=Math.floor(I*k),this.setViewport(0,0,S,I)},this.getCurrentViewport=function(S){return S.copy(C)},this.getViewport=function(S){return S.copy(yt)},this.setViewport=function(S,I,k,H){S.isVector4?yt.set(S.x,S.y,S.z,S.w):yt.set(S,I,k,H),wt.viewport(C.copy(yt).multiplyScalar(z).round())},this.getScissor=function(S){return S.copy(Ot)},this.setScissor=function(S,I,k,H){S.isVector4?Ot.set(S.x,S.y,S.z,S.w):Ot.set(S,I,k,H),wt.scissor(U.copy(Ot).multiplyScalar(z).round())},this.getScissorTest=function(){return te},this.setScissorTest=function(S){wt.setScissorTest(te=S)},this.setOpaqueSort=function(S){st=S},this.setTransparentSort=function(S){pt=S},this.getClearColor=function(S){return S.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor.apply(Ct,arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha.apply(Ct,arguments)},this.clear=function(S=!0,I=!0,k=!0){let H=0;if(S){let N=!1;if(R!==null){const it=R.texture.format;N=it===zl||it===Bl||it===Fl}if(N){const it=R.texture.type,ut=it===ai||it===Yi||it===Qs||it===As||it===Nl||it===Ol,vt=Ct.getClearColor(),xt=Ct.getClearAlpha(),Ut=vt.r,Bt=vt.g,Mt=vt.b;ut?(g[0]=Ut,g[1]=Bt,g[2]=Mt,g[3]=xt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Ut,_[1]=Bt,_[2]=Mt,_[3]=xt,O.clearBufferiv(O.COLOR,0,_))}else H|=O.COLOR_BUFFER_BIT}I&&(H|=O.DEPTH_BUFFER_BIT),k&&(H|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(H)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",J,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",ht,!1),mt.dispose(),Jt.dispose(),At.dispose(),x.dispose(),B.dispose(),K.dispose(),de.dispose(),D.dispose(),St.dispose(),X.dispose(),X.removeEventListener("sessionstart",nc),X.removeEventListener("sessionend",ic),Ii.stop()};function J(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const S=ge.autoReset,I=gt.enabled,k=gt.autoUpdate,H=gt.needsUpdate,N=gt.type;lt(),ge.autoReset=S,gt.enabled=I,gt.autoUpdate=k,gt.needsUpdate=H,gt.type=N}function ht(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ft(S){const I=S.target;I.removeEventListener("dispose",Ft),Ae(I)}function Ae(S){We(S),At.remove(S)}function We(S){const I=At.get(S).programs;I!==void 0&&(I.forEach(function(k){St.releaseProgram(k)}),S.isShaderMaterial&&St.releaseShaderCache(S))}this.renderBufferDirect=function(S,I,k,H,N,it){I===null&&(I=me);const ut=N.isMesh&&N.matrixWorld.determinant()<0,vt=ku(S,I,k,H,N);wt.setMaterial(H,ut);let xt=k.index,Ut=1;if(H.wireframe===!0){if(xt=tt.getWireframeAttribute(k),xt===void 0)return;Ut=2}const Bt=k.drawRange,Mt=k.attributes.position;let ee=Bt.start*Ut,pe=(Bt.start+Bt.count)*Ut;it!==null&&(ee=Math.max(ee,it.start*Ut),pe=Math.min(pe,(it.start+it.count)*Ut)),xt!==null?(ee=Math.max(ee,0),pe=Math.min(pe,xt.count)):Mt!=null&&(ee=Math.max(ee,0),pe=Math.min(pe,Mt.count));const _e=pe-ee;if(_e<0||_e===1/0)return;de.setup(N,H,vt,k,xt);let an,se=_t;if(xt!==null&&(an=Z.get(xt),se=Zt,se.setIndex(an)),N.isMesh)H.wireframe===!0?(wt.setLineWidth(H.wireframeLinewidth*le()),se.setMode(O.LINES)):se.setMode(O.TRIANGLES);else if(N.isLine){let Et=H.linewidth;Et===void 0&&(Et=1),wt.setLineWidth(Et*le()),N.isLineSegments?se.setMode(O.LINES):N.isLineLoop?se.setMode(O.LINE_LOOP):se.setMode(O.LINE_STRIP)}else N.isPoints?se.setMode(O.POINTS):N.isSprite&&se.setMode(O.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)se.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(Wt.get("WEBGL_multi_draw"))se.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const Et=N._multiDrawStarts,$n=N._multiDrawCounts,re=N._multiDrawCount,Pn=xt?Z.get(xt).bytesPerElement:1,Ji=At.get(H).currentProgram.getUniforms();for(let pn=0;pn<re;pn++)Ji.setValue(O,"_gl_DrawID",pn),se.render(Et[pn]/Pn,$n[pn])}else if(N.isInstancedMesh)se.renderInstances(ee,_e,N.count);else if(k.isInstancedBufferGeometry){const Et=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,$n=Math.min(k.instanceCount,Et);se.renderInstances(ee,_e,$n)}else se.render(ee,_e)};function oe(S,I,k){S.transparent===!0&&S.side===fn&&S.forceSinglePass===!1?(S.side=nn,S.needsUpdate=!0,ur(S,I,k),S.side=Pi,S.needsUpdate=!0,ur(S,I,k),S.side=fn):ur(S,I,k)}this.compile=function(S,I,k=null){k===null&&(k=S),d=Jt.get(k),d.init(I),b.push(d),k.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),S!==k&&S.traverseVisible(function(N){N.isLight&&N.layers.test(I.layers)&&(d.pushLight(N),N.castShadow&&d.pushShadow(N))}),d.setupLights();const H=new Set;return S.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const it=N.material;if(it)if(Array.isArray(it))for(let ut=0;ut<it.length;ut++){const vt=it[ut];oe(vt,k,N),H.add(vt)}else oe(it,k,N),H.add(it)}),b.pop(),d=null,H},this.compileAsync=function(S,I,k=null){const H=this.compile(S,I,k);return new Promise(N=>{function it(){if(H.forEach(function(ut){At.get(ut).currentProgram.isReady()&&H.delete(ut)}),H.size===0){N(S);return}setTimeout(it,10)}Wt.get("KHR_parallel_shader_compile")!==null?it():setTimeout(it,10)})};let Cn=null;function Yn(S){Cn&&Cn(S)}function nc(){Ii.stop()}function ic(){Ii.start()}const Ii=new au;Ii.setAnimationLoop(Yn),typeof self<"u"&&Ii.setContext(self),this.setAnimationLoop=function(S){Cn=S,X.setAnimationLoop(S),S===null?Ii.stop():Ii.start()},X.addEventListener("sessionstart",nc),X.addEventListener("sessionend",ic),this.render=function(S,I){if(I!==void 0&&I.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),I.parent===null&&I.matrixWorldAutoUpdate===!0&&I.updateMatrixWorld(),X.enabled===!0&&X.isPresenting===!0&&(X.cameraAutoUpdate===!0&&X.updateCamera(I),I=X.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,I,R),d=Jt.get(S,b.length),d.init(I),b.push(d),Tt.multiplyMatrices(I.projectionMatrix,I.matrixWorldInverse),$.setFromProjectionMatrix(Tt),at=this.localClippingEnabled,et=nt.init(this.clippingPlanes,at),m=mt.get(S,E.length),m.init(),E.push(m),X.enabled===!0&&X.isPresenting===!0){const it=M.xr.getDepthSensingMesh();it!==null&&Fo(it,I,-1/0,M.sortObjects)}Fo(S,I,0,M.sortObjects),m.finish(),M.sortObjects===!0&&m.sort(st,pt),Kt=X.enabled===!1||X.isPresenting===!1||X.hasDepthSensing()===!1,Kt&&Ct.addToRenderList(m,S),this.info.render.frame++,et===!0&&nt.beginShadows();const k=d.state.shadowsArray;gt.render(k,S,I),et===!0&&nt.endShadows(),this.info.autoReset===!0&&this.info.reset();const H=m.opaque,N=m.transmissive;if(d.setupLights(),I.isArrayCamera){const it=I.cameras;if(N.length>0)for(let ut=0,vt=it.length;ut<vt;ut++){const xt=it[ut];rc(H,N,S,xt)}Kt&&Ct.render(S);for(let ut=0,vt=it.length;ut<vt;ut++){const xt=it[ut];sc(m,S,xt,xt.viewport)}}else N.length>0&&rc(H,N,S,I),Kt&&Ct.render(S),sc(m,S,I);R!==null&&(w.updateMultisampleRenderTarget(R),w.updateRenderTargetMipmap(R)),S.isScene===!0&&S.onAfterRender(M,S,I),de.resetDefaultState(),y=-1,v=null,b.pop(),b.length>0?(d=b[b.length-1],et===!0&&nt.setGlobalState(M.clippingPlanes,d.state.camera)):d=null,E.pop(),E.length>0?m=E[E.length-1]:m=null};function Fo(S,I,k,H){if(S.visible===!1)return;if(S.layers.test(I.layers)){if(S.isGroup)k=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(I);else if(S.isLight)d.pushLight(S),S.castShadow&&d.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||$.intersectsSprite(S)){H&&It.setFromMatrixPosition(S.matrixWorld).applyMatrix4(Tt);const ut=K.update(S),vt=S.material;vt.visible&&m.push(S,ut,vt,k,It.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||$.intersectsObject(S))){const ut=K.update(S),vt=S.material;if(H&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),It.copy(S.boundingSphere.center)):(ut.boundingSphere===null&&ut.computeBoundingSphere(),It.copy(ut.boundingSphere.center)),It.applyMatrix4(S.matrixWorld).applyMatrix4(Tt)),Array.isArray(vt)){const xt=ut.groups;for(let Ut=0,Bt=xt.length;Ut<Bt;Ut++){const Mt=xt[Ut],ee=vt[Mt.materialIndex];ee&&ee.visible&&m.push(S,ut,ee,k,It.z,Mt)}}else vt.visible&&m.push(S,ut,vt,k,It.z,null)}}const it=S.children;for(let ut=0,vt=it.length;ut<vt;ut++)Fo(it[ut],I,k,H)}function sc(S,I,k,H){const N=S.opaque,it=S.transmissive,ut=S.transparent;d.setupLightsView(k),et===!0&&nt.setGlobalState(M.clippingPlanes,k),H&&wt.viewport(C.copy(H)),N.length>0&&hr(N,I,k),it.length>0&&hr(it,I,k),ut.length>0&&hr(ut,I,k),wt.buffers.depth.setTest(!0),wt.buffers.depth.setMask(!0),wt.buffers.color.setMask(!0),wt.setPolygonOffset(!1)}function rc(S,I,k,H){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[H.id]===void 0&&(d.state.transmissionRenderTarget[H.id]=new $i(1,1,{generateMipmaps:!0,type:Wt.has("EXT_color_buffer_half_float")||Wt.has("EXT_color_buffer_float")?rr:ai,minFilter:Xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const it=d.state.transmissionRenderTarget[H.id],ut=H.viewport||C;it.setSize(ut.z,ut.w);const vt=M.getRenderTarget();M.setRenderTarget(it),M.getClearColor(q),W=M.getClearAlpha(),W<1&&M.setClearColor(16777215,.5),M.clear(),Kt&&Ct.render(k);const xt=M.toneMapping;M.toneMapping=bi;const Ut=H.viewport;if(H.viewport!==void 0&&(H.viewport=void 0),d.setupLightsView(H),et===!0&&nt.setGlobalState(M.clippingPlanes,H),hr(S,k,H),w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it),Wt.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Mt=0,ee=I.length;Mt<ee;Mt++){const pe=I[Mt],_e=pe.object,an=pe.geometry,se=pe.material,Et=pe.group;if(se.side===fn&&_e.layers.test(H.layers)){const $n=se.side;se.side=nn,se.needsUpdate=!0,oc(_e,k,H,an,se,Et),se.side=$n,se.needsUpdate=!0,Bt=!0}}Bt===!0&&(w.updateMultisampleRenderTarget(it),w.updateRenderTargetMipmap(it))}M.setRenderTarget(vt),M.setClearColor(q,W),Ut!==void 0&&(H.viewport=Ut),M.toneMapping=xt}function hr(S,I,k){const H=I.isScene===!0?I.overrideMaterial:null;for(let N=0,it=S.length;N<it;N++){const ut=S[N],vt=ut.object,xt=ut.geometry,Ut=H===null?ut.material:H,Bt=ut.group;vt.layers.test(k.layers)&&oc(vt,I,k,xt,Ut,Bt)}}function oc(S,I,k,H,N,it){S.onBeforeRender(M,I,k,H,N,it),S.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),N.onBeforeRender(M,I,k,H,S,it),N.transparent===!0&&N.side===fn&&N.forceSinglePass===!1?(N.side=nn,N.needsUpdate=!0,M.renderBufferDirect(k,I,H,N,S,it),N.side=Pi,N.needsUpdate=!0,M.renderBufferDirect(k,I,H,N,S,it),N.side=fn):M.renderBufferDirect(k,I,H,N,S,it),S.onAfterRender(M,I,k,H,N,it)}function ur(S,I,k){I.isScene!==!0&&(I=me);const H=At.get(S),N=d.state.lights,it=d.state.shadowsArray,ut=N.state.version,vt=St.getParameters(S,N.state,it,I,k),xt=St.getProgramCacheKey(vt);let Ut=H.programs;H.environment=S.isMeshStandardMaterial?I.environment:null,H.fog=I.fog,H.envMap=(S.isMeshStandardMaterial?B:x).get(S.envMap||H.environment),H.envMapRotation=H.environment!==null&&S.envMap===null?I.environmentRotation:S.envMapRotation,Ut===void 0&&(S.addEventListener("dispose",Ft),Ut=new Map,H.programs=Ut);let Bt=Ut.get(xt);if(Bt!==void 0){if(H.currentProgram===Bt&&H.lightsStateVersion===ut)return lc(S,vt),Bt}else vt.uniforms=St.getUniforms(S),S.onBeforeCompile(vt,M),Bt=St.acquireProgram(vt,xt),Ut.set(xt,Bt),H.uniforms=vt.uniforms;const Mt=H.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Mt.clippingPlanes=nt.uniform),lc(S,vt),H.needsLights=Gu(S),H.lightsStateVersion=ut,H.needsLights&&(Mt.ambientLightColor.value=N.state.ambient,Mt.lightProbe.value=N.state.probe,Mt.directionalLights.value=N.state.directional,Mt.directionalLightShadows.value=N.state.directionalShadow,Mt.spotLights.value=N.state.spot,Mt.spotLightShadows.value=N.state.spotShadow,Mt.rectAreaLights.value=N.state.rectArea,Mt.ltc_1.value=N.state.rectAreaLTC1,Mt.ltc_2.value=N.state.rectAreaLTC2,Mt.pointLights.value=N.state.point,Mt.pointLightShadows.value=N.state.pointShadow,Mt.hemisphereLights.value=N.state.hemi,Mt.directionalShadowMap.value=N.state.directionalShadowMap,Mt.directionalShadowMatrix.value=N.state.directionalShadowMatrix,Mt.spotShadowMap.value=N.state.spotShadowMap,Mt.spotLightMatrix.value=N.state.spotLightMatrix,Mt.spotLightMap.value=N.state.spotLightMap,Mt.pointShadowMap.value=N.state.pointShadowMap,Mt.pointShadowMatrix.value=N.state.pointShadowMatrix),H.currentProgram=Bt,H.uniformsList=null,Bt}function ac(S){if(S.uniformsList===null){const I=S.currentProgram.getUniforms();S.uniformsList=no.seqWithValue(I.seq,S.uniforms)}return S.uniformsList}function lc(S,I){const k=At.get(S);k.outputColorSpace=I.outputColorSpace,k.batching=I.batching,k.batchingColor=I.batchingColor,k.instancing=I.instancing,k.instancingColor=I.instancingColor,k.instancingMorph=I.instancingMorph,k.skinning=I.skinning,k.morphTargets=I.morphTargets,k.morphNormals=I.morphNormals,k.morphColors=I.morphColors,k.morphTargetsCount=I.morphTargetsCount,k.numClippingPlanes=I.numClippingPlanes,k.numIntersection=I.numClipIntersection,k.vertexAlphas=I.vertexAlphas,k.vertexTangents=I.vertexTangents,k.toneMapping=I.toneMapping}function ku(S,I,k,H,N){I.isScene!==!0&&(I=me),w.resetTextureUnits();const it=I.fog,ut=H.isMeshStandardMaterial?I.environment:null,vt=R===null?M.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:Ls,xt=(H.isMeshStandardMaterial?B:x).get(H.envMap||ut),Ut=H.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Bt=!!k.attributes.tangent&&(!!H.normalMap||H.anisotropy>0),Mt=!!k.morphAttributes.position,ee=!!k.morphAttributes.normal,pe=!!k.morphAttributes.color;let _e=bi;H.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(_e=M.toneMapping);const an=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,se=an!==void 0?an.length:0,Et=At.get(H),$n=d.state.lights;if(et===!0&&(at===!0||S!==v)){const yn=S===v&&H.id===y;nt.setState(H,S,yn)}let re=!1;H.version===Et.__version?(Et.needsLights&&Et.lightsStateVersion!==$n.state.version||Et.outputColorSpace!==vt||N.isBatchedMesh&&Et.batching===!1||!N.isBatchedMesh&&Et.batching===!0||N.isBatchedMesh&&Et.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&Et.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&Et.instancing===!1||!N.isInstancedMesh&&Et.instancing===!0||N.isSkinnedMesh&&Et.skinning===!1||!N.isSkinnedMesh&&Et.skinning===!0||N.isInstancedMesh&&Et.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&Et.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&Et.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&Et.instancingMorph===!1&&N.morphTexture!==null||Et.envMap!==xt||H.fog===!0&&Et.fog!==it||Et.numClippingPlanes!==void 0&&(Et.numClippingPlanes!==nt.numPlanes||Et.numIntersection!==nt.numIntersection)||Et.vertexAlphas!==Ut||Et.vertexTangents!==Bt||Et.morphTargets!==Mt||Et.morphNormals!==ee||Et.morphColors!==pe||Et.toneMapping!==_e||Et.morphTargetsCount!==se)&&(re=!0):(re=!0,Et.__version=H.version);let Pn=Et.currentProgram;re===!0&&(Pn=ur(H,I,N));let Ji=!1,pn=!1,Us=!1;const ve=Pn.getUniforms(),zn=Et.uniforms;if(wt.useProgram(Pn.program)&&(Ji=!0,pn=!0,Us=!0),H.id!==y&&(y=H.id,pn=!0),Ji||v!==S){wt.buffers.depth.getReversed()?(rt.copy(S.projectionMatrix),Uf(rt),Nf(rt),ve.setValue(O,"projectionMatrix",rt)):ve.setValue(O,"projectionMatrix",S.projectionMatrix),ve.setValue(O,"viewMatrix",S.matrixWorldInverse);const ui=ve.map.cameraPosition;ui!==void 0&&ui.setValue(O,Rt.setFromMatrixPosition(S.matrixWorld)),$t.logarithmicDepthBuffer&&ve.setValue(O,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(H.isMeshPhongMaterial||H.isMeshToonMaterial||H.isMeshLambertMaterial||H.isMeshBasicMaterial||H.isMeshStandardMaterial||H.isShaderMaterial)&&ve.setValue(O,"isOrthographic",S.isOrthographicCamera===!0),v!==S&&(v=S,pn=!0,Us=!0)}if(N.isSkinnedMesh){ve.setOptional(O,N,"bindMatrix"),ve.setOptional(O,N,"bindMatrixInverse");const yn=N.skeleton;yn&&(yn.boneTexture===null&&yn.computeBoneTexture(),ve.setValue(O,"boneTexture",yn.boneTexture,w))}N.isBatchedMesh&&(ve.setOptional(O,N,"batchingTexture"),ve.setValue(O,"batchingTexture",N._matricesTexture,w),ve.setOptional(O,N,"batchingIdTexture"),ve.setValue(O,"batchingIdTexture",N._indirectTexture,w),ve.setOptional(O,N,"batchingColorTexture"),N._colorsTexture!==null&&ve.setValue(O,"batchingColorTexture",N._colorsTexture,w));const Ns=k.morphAttributes;if((Ns.position!==void 0||Ns.normal!==void 0||Ns.color!==void 0)&&Lt.update(N,k,Pn),(pn||Et.receiveShadow!==N.receiveShadow)&&(Et.receiveShadow=N.receiveShadow,ve.setValue(O,"receiveShadow",N.receiveShadow)),H.isMeshGouraudMaterial&&H.envMap!==null&&(zn.envMap.value=xt,zn.flipEnvMap.value=xt.isCubeTexture&&xt.isRenderTargetTexture===!1?-1:1),H.isMeshStandardMaterial&&H.envMap===null&&I.environment!==null&&(zn.envMapIntensity.value=I.environmentIntensity),pn&&(ve.setValue(O,"toneMappingExposure",M.toneMappingExposure),Et.needsLights&&Hu(zn,Us),it&&H.fog===!0&&ct.refreshFogUniforms(zn,it),ct.refreshMaterialUniforms(zn,H,z,Y,d.state.transmissionRenderTarget[S.id]),no.upload(O,ac(Et),zn,w)),H.isShaderMaterial&&H.uniformsNeedUpdate===!0&&(no.upload(O,ac(Et),zn,w),H.uniformsNeedUpdate=!1),H.isSpriteMaterial&&ve.setValue(O,"center",N.center),ve.setValue(O,"modelViewMatrix",N.modelViewMatrix),ve.setValue(O,"normalMatrix",N.normalMatrix),ve.setValue(O,"modelMatrix",N.matrixWorld),H.isShaderMaterial||H.isRawShaderMaterial){const yn=H.uniformsGroups;for(let ui=0,fi=yn.length;ui<fi;ui++){const cc=yn[ui];D.update(cc,Pn),D.bind(cc,Pn)}}return Pn}function Hu(S,I){S.ambientLightColor.needsUpdate=I,S.lightProbe.needsUpdate=I,S.directionalLights.needsUpdate=I,S.directionalLightShadows.needsUpdate=I,S.pointLights.needsUpdate=I,S.pointLightShadows.needsUpdate=I,S.spotLights.needsUpdate=I,S.spotLightShadows.needsUpdate=I,S.rectAreaLights.needsUpdate=I,S.hemisphereLights.needsUpdate=I}function Gu(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return A},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(S,I,k){At.get(S.texture).__webglTexture=I,At.get(S.depthTexture).__webglTexture=k;const H=At.get(S);H.__hasExternalTextures=!0,H.__autoAllocateDepthBuffer=k===void 0,H.__autoAllocateDepthBuffer||Wt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),H.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,I){const k=At.get(S);k.__webglFramebuffer=I,k.__useDefaultFramebuffer=I===void 0},this.setRenderTarget=function(S,I=0,k=0){R=S,A=I,T=k;let H=!0,N=null,it=!1,ut=!1;if(S){const xt=At.get(S);if(xt.__useDefaultFramebuffer!==void 0)wt.bindFramebuffer(O.FRAMEBUFFER,null),H=!1;else if(xt.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(xt.__hasExternalTextures)w.rebindTextures(S,At.get(S.texture).__webglTexture,At.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const Mt=S.depthTexture;if(xt.__boundDepthTexture!==Mt){if(Mt!==null&&At.has(Mt)&&(S.width!==Mt.image.width||S.height!==Mt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const Ut=S.texture;(Ut.isData3DTexture||Ut.isDataArrayTexture||Ut.isCompressedArrayTexture)&&(ut=!0);const Bt=At.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Bt[I])?N=Bt[I][k]:N=Bt[I],it=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?N=At.get(S).__webglMultisampledFramebuffer:Array.isArray(Bt)?N=Bt[k]:N=Bt,C.copy(S.viewport),U.copy(S.scissor),F=S.scissorTest}else C.copy(yt).multiplyScalar(z).floor(),U.copy(Ot).multiplyScalar(z).floor(),F=te;if(wt.bindFramebuffer(O.FRAMEBUFFER,N)&&H&&wt.drawBuffers(S,N),wt.viewport(C),wt.scissor(U),wt.setScissorTest(F),it){const xt=At.get(S.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+I,xt.__webglTexture,k)}else if(ut){const xt=At.get(S.texture),Ut=I||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,xt.__webglTexture,k||0,Ut)}y=-1},this.readRenderTargetPixels=function(S,I,k,H,N,it,ut){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let vt=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){wt.bindFramebuffer(O.FRAMEBUFFER,vt);try{const xt=S.texture,Ut=xt.format,Bt=xt.type;if(!$t.textureFormatReadable(Ut)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!$t.textureTypeReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}I>=0&&I<=S.width-H&&k>=0&&k<=S.height-N&&O.readPixels(I,k,H,N,Ht.convert(Ut),Ht.convert(Bt),it)}finally{const xt=R!==null?At.get(R).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,xt)}}},this.readRenderTargetPixelsAsync=async function(S,I,k,H,N,it,ut){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let vt=At.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&ut!==void 0&&(vt=vt[ut]),vt){const xt=S.texture,Ut=xt.format,Bt=xt.type;if(!$t.textureFormatReadable(Ut))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!$t.textureTypeReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(I>=0&&I<=S.width-H&&k>=0&&k<=S.height-N){wt.bindFramebuffer(O.FRAMEBUFFER,vt);const Mt=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.bufferData(O.PIXEL_PACK_BUFFER,it.byteLength,O.STREAM_READ),O.readPixels(I,k,H,N,Ht.convert(Ut),Ht.convert(Bt),0);const ee=R!==null?At.get(R).__webglFramebuffer:null;wt.bindFramebuffer(O.FRAMEBUFFER,ee);const pe=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await If(O,pe,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Mt),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,it),O.deleteBuffer(Mt),O.deleteSync(pe),it}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,I=null,k=0){S.isTexture!==!0&&(Xs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),I=arguments[0]||null,S=arguments[1]);const H=Math.pow(2,-k),N=Math.floor(S.image.width*H),it=Math.floor(S.image.height*H),ut=I!==null?I.x:0,vt=I!==null?I.y:0;w.setTexture2D(S,0),O.copyTexSubImage2D(O.TEXTURE_2D,k,0,0,ut,vt,N,it),wt.unbindTexture()},this.copyTextureToTexture=function(S,I,k=null,H=null,N=0){S.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture function signature has changed."),H=arguments[0]||null,S=arguments[1],I=arguments[2],N=arguments[3]||0,k=null);let it,ut,vt,xt,Ut,Bt,Mt,ee,pe;const _e=S.isCompressedTexture?S.mipmaps[N]:S.image;k!==null?(it=k.max.x-k.min.x,ut=k.max.y-k.min.y,vt=k.isBox3?k.max.z-k.min.z:1,xt=k.min.x,Ut=k.min.y,Bt=k.isBox3?k.min.z:0):(it=_e.width,ut=_e.height,vt=_e.depth||1,xt=0,Ut=0,Bt=0),H!==null?(Mt=H.x,ee=H.y,pe=H.z):(Mt=0,ee=0,pe=0);const an=Ht.convert(I.format),se=Ht.convert(I.type);let Et;I.isData3DTexture?(w.setTexture3D(I,0),Et=O.TEXTURE_3D):I.isDataArrayTexture||I.isCompressedArrayTexture?(w.setTexture2DArray(I,0),Et=O.TEXTURE_2D_ARRAY):(w.setTexture2D(I,0),Et=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,I.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,I.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,I.unpackAlignment);const $n=O.getParameter(O.UNPACK_ROW_LENGTH),re=O.getParameter(O.UNPACK_IMAGE_HEIGHT),Pn=O.getParameter(O.UNPACK_SKIP_PIXELS),Ji=O.getParameter(O.UNPACK_SKIP_ROWS),pn=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,_e.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,_e.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,xt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ut),O.pixelStorei(O.UNPACK_SKIP_IMAGES,Bt);const Us=S.isDataArrayTexture||S.isData3DTexture,ve=I.isDataArrayTexture||I.isData3DTexture;if(S.isRenderTargetTexture||S.isDepthTexture){const zn=At.get(S),Ns=At.get(I),yn=At.get(zn.__renderTarget),ui=At.get(Ns.__renderTarget);wt.bindFramebuffer(O.READ_FRAMEBUFFER,yn.__webglFramebuffer),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,ui.__webglFramebuffer);for(let fi=0;fi<vt;fi++)Us&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.get(S).__webglTexture,N,Bt+fi),S.isDepthTexture?(ve&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,At.get(I).__webglTexture,N,pe+fi),O.blitFramebuffer(xt,Ut,it,ut,Mt,ee,it,ut,O.DEPTH_BUFFER_BIT,O.NEAREST)):ve?O.copyTexSubImage3D(Et,N,Mt,ee,pe+fi,xt,Ut,it,ut):O.copyTexSubImage2D(Et,N,Mt,ee,pe+fi,xt,Ut,it,ut);wt.bindFramebuffer(O.READ_FRAMEBUFFER,null),wt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else ve?S.isDataTexture||S.isData3DTexture?O.texSubImage3D(Et,N,Mt,ee,pe,it,ut,vt,an,se,_e.data):I.isCompressedArrayTexture?O.compressedTexSubImage3D(Et,N,Mt,ee,pe,it,ut,vt,an,_e.data):O.texSubImage3D(Et,N,Mt,ee,pe,it,ut,vt,an,se,_e):S.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,N,Mt,ee,it,ut,an,se,_e.data):S.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,N,Mt,ee,_e.width,_e.height,an,_e.data):O.texSubImage2D(O.TEXTURE_2D,N,Mt,ee,it,ut,an,se,_e);O.pixelStorei(O.UNPACK_ROW_LENGTH,$n),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,re),O.pixelStorei(O.UNPACK_SKIP_PIXELS,Pn),O.pixelStorei(O.UNPACK_SKIP_ROWS,Ji),O.pixelStorei(O.UNPACK_SKIP_IMAGES,pn),N===0&&I.generateMipmaps&&O.generateMipmap(Et),wt.unbindTexture()},this.copyTextureToTexture3D=function(S,I,k=null,H=null,N=0){return S.isTexture!==!0&&(Xs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,H=arguments[1]||null,S=arguments[2],I=arguments[3],N=arguments[4]||0),Xs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(S,I,k,H,N)},this.initRenderTarget=function(S){At.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),wt.unbindTexture()},this.resetState=function(){A=0,T=0,R=null,wt.reset(),de.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return si}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class Vl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pt(t),this.near=e,this.far=n}clone(){return new Vl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Xg extends Ne{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qn,this.environmentIntensity=1,this.environmentRotation=new qn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class qg{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=xl,this.updateRanges=[],this.version=0,this.uuid=Ti()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Ti()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qe=new L;class co{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=Gn(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=he(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=he(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=Gn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=Gn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=Gn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=Gn(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=he(e,this.array),n=he(n,this.array),s=he(s,this.array),r=he(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new dn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new co(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Wl extends Di{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let ds;const ks=new L,ps=new L,ms=new L,gs=new qt,Hs=new qt,pu=new ye,Ir=new L,Gs=new L,Ur=new L,oh=new qt,da=new qt,ah=new qt;class mu extends Ne{constructor(t=new Wl){if(super(),this.isSprite=!0,this.type="Sprite",ds===void 0){ds=new Ve;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new qg(e,5);ds.setIndex([0,1,2,0,2,3]),ds.setAttribute("position",new co(n,3,0,!1)),ds.setAttribute("uv",new co(n,2,3,!1))}this.geometry=ds,this.material=t,this.center=new qt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ps.setFromMatrixScale(this.matrixWorld),pu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),ms.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ps.multiplyScalar(-ms.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;Nr(Ir.set(-.5,-.5,0),ms,o,ps,s,r),Nr(Gs.set(.5,-.5,0),ms,o,ps,s,r),Nr(Ur.set(.5,.5,0),ms,o,ps,s,r),oh.set(0,0),da.set(1,0),ah.set(1,1);let a=t.ray.intersectTriangle(Ir,Gs,Ur,!1,ks);if(a===null&&(Nr(Gs.set(-.5,.5,0),ms,o,ps,s,r),da.set(0,1),a=t.ray.intersectTriangle(Ir,Ur,Gs,!1,ks),a===null))return;const l=t.ray.origin.distanceTo(ks);l<t.near||l>t.far||e.push({distance:l,point:ks.clone(),uv:xn.getInterpolation(ks,Ir,Gs,Ur,oh,da,ah,new qt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Nr(i,t,e,n,s,r){gs.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(Hs.x=r*gs.x-s*gs.y,Hs.y=s*gs.x+r*gs.y):Hs.copy(gs),i.copy(t),i.x+=Hs.x,i.y+=Hs.y,i.applyMatrix4(pu)}class Xl extends Di{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Pt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const ho=new L,uo=new L,lh=new ye,Vs=new kl,Or=new lr,pa=new L,ch=new L;class Yg extends Ne{constructor(t=new Ve,e=new Xl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)ho.fromBufferAttribute(e,s-1),uo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=ho.distanceTo(uo);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Or.copy(n.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;lh.copy(s).invert(),Vs.copy(t.ray).applyMatrix4(lh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=h.getX(_),E=h.getX(_+1),b=Fr(this,t,Vs,l,d,E);b&&e.push(b)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=Fr(this,t,Vs,l,_,m);d&&e.push(d)}}else{const p=Math.max(0,o.start),g=Math.min(f.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const d=Fr(this,t,Vs,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=Fr(this,t,Vs,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fr(i,t,e,n,s,r){const o=i.geometry.attributes.position;if(ho.fromBufferAttribute(o,s),uo.fromBufferAttribute(o,r),e.distanceSqToSegment(ho,uo,pa,ch)>n)return;pa.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(pa);if(!(l<t.near||l>t.far))return{distance:l,point:ch.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const hh=new L,uh=new L;class gu extends Yg{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)hh.fromBufferAttribute(e,s),uh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+hh.distanceTo(uh);t.setAttribute("lineDistance",new Ce(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ql extends Di{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const fh=new ye,Sl=new kl,Br=new lr,zr=new L;class _u extends Ne{constructor(t=new Ve,e=new ql){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Br.copy(n.boundingSphere),Br.applyMatrix4(s),Br.radius+=r,t.ray.intersectsSphere(Br)===!1)return;fh.copy(s).invert(),Sl.copy(t.ray).applyMatrix4(fh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);zr.fromBufferAttribute(u,m),dh(zr,m,l,s,t,e,this)}}else{const f=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=f,_=p;g<_;g++)zr.fromBufferAttribute(u,g),dh(zr,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function dh(i,t,e,n,s,r,o){const a=Sl.distanceSqToPoint(i);if(a<e){const l=new L;Sl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:o})}}class ci extends sn{constructor(t,e,n,s,r,o,a,l,c){super(t,e,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Zi extends Ve{constructor(t=1,e=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;E(),o===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(h),this.setAttribute("position",new Ce(u,3)),this.setAttribute("normal",new Ce(f,3)),this.setAttribute("uv",new Ce(p,2));function E(){const M=new L,P=new L;let A=0;const T=(e-t)/n;for(let R=0;R<=r;R++){const y=[],v=R/r,C=v*(e-t)+t;for(let U=0;U<=s;U++){const F=U/s,q=F*l+a,W=Math.sin(q),V=Math.cos(q);P.x=C*W,P.y=-v*n+m,P.z=C*V,u.push(P.x,P.y,P.z),M.set(W,T,V).normalize(),f.push(M.x,M.y,M.z),p.push(F,1-v),y.push(g++)}_.push(y)}for(let R=0;R<s;R++)for(let y=0;y<r;y++){const v=_[y][R],C=_[y+1][R],U=_[y+1][R+1],F=_[y][R+1];(t>0||y!==0)&&(h.push(v,C,F),A+=3),(e>0||y!==r-1)&&(h.push(C,U,F),A+=3)}c.addGroup(d,A,0),d+=A}function b(M){const P=g,A=new qt,T=new L;let R=0;const y=M===!0?t:e,v=M===!0?1:-1;for(let U=1;U<=s;U++)u.push(0,m*v,0),f.push(0,v,0),p.push(.5,.5),g++;const C=g;for(let U=0;U<=s;U++){const q=U/s*l+a,W=Math.cos(q),V=Math.sin(q);T.x=y*V,T.y=m*v,T.z=y*W,u.push(T.x,T.y,T.z),f.push(0,v,0),A.x=W*.5+.5,A.y=V*.5*v+.5,p.push(A.x,A.y),g++}for(let U=0;U<s;U++){const F=P+U,q=C+U;M===!0?h.push(q,q+1,F):h.push(q+1,q,F),R+=3}c.addGroup(d,R,M===!0?1:2),d+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Zi(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const kr=new L,Hr=new L,ma=new L,Gr=new xn;class $g extends Ve{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(eo*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){o?(c[0]=o.getX(g),c[1]=o.getX(g+1),c[2]=o.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:d}=Gr;if(_.fromBufferAttribute(a,c[0]),m.fromBufferAttribute(a,c[1]),d.fromBufferAttribute(a,c[2]),Gr.getNormal(ma),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let E=0;E<3;E++){const b=(E+1)%3,M=u[E],P=u[b],A=Gr[h[E]],T=Gr[h[b]],R=`${M}_${P}`,y=`${P}_${M}`;y in f&&f[y]?(ma.dot(f[y].normal)<=r&&(p.push(A.x,A.y,A.z),p.push(T.x,T.y,T.z)),f[y]=null):R in f||(f[R]={index0:c[E],index1:c[b],normal:ma.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];kr.fromBufferAttribute(a,_),Hr.fromBufferAttribute(a,m),p.push(kr.x,kr.y,kr.z),p.push(Hr.x,Hr.y,Hr.z)}this.setAttribute("position",new Ce(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Yl extends Ve{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new L,f=new L,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const E=[],b=d/n;let M=0;d===0&&o===0?M=.5/e:d===n&&l===Math.PI&&(M=-.5/e);for(let P=0;P<=e;P++){const A=P/e;u.x=-t*Math.cos(s+A*r)*Math.sin(o+b*a),u.y=t*Math.cos(o+b*a),u.z=t*Math.sin(s+A*r)*Math.sin(o+b*a),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(A+M,1-b),E.push(c++)}h.push(E)}for(let d=0;d<n;d++)for(let E=0;E<e;E++){const b=h[d][E+1],M=h[d][E],P=h[d+1][E],A=h[d+1][E+1];(d!==0||o>0)&&p.push(b,M,A),(d!==n-1||l<Math.PI)&&p.push(M,P,A)}this.setIndex(p),this.setAttribute("position",new Ce(g,3)),this.setAttribute("normal",new Ce(_,3)),this.setAttribute("uv",new Ce(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yl(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class wi extends Di{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new qt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qn,this.combine=Il,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vu extends Ne{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const ga=new ye,ph=new L,mh=new L;class Kg{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new qt(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hl,this._frameExtents=new qt(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ph.setFromMatrixPosition(t.matrixWorld),e.position.copy(ph),mh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(mh),e.updateMatrixWorld(),ga.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ga),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(ga)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class jg extends Kg{constructor(){super(new lu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Zg extends vu{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ne.DEFAULT_UP),this.updateMatrix(),this.target=new Ne,this.shadow=new jg}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Jg extends vu{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);function Je(i,t,e=0){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function Qg(i,t,e,n=0){let s=i*374761393+t*668265263+e*1274126177+n*2147483647|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,s=Math.imul(s,2246822519),s^=s>>>13,(s>>>0)/4294967296}const Ks=i=>i*i*(3-2*i);function t_(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=Ks(i-n),o=Ks(t-s),a=Je(n,s,e),l=Je(n+1,s,e),c=Je(n,s+1,e),h=Je(n+1,s+1,e);return(a+(l-a)*r)*(1-o)+(c+(h-c)*r)*o}function _a(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),o=Math.floor(e),a=Ks(i-s),l=Ks(t-r),c=Ks(e-o),h=(f,p,g)=>f+(p-f)*g,u=(f,p,g)=>Qg(s+f,r+p,o+g,n);return h(h(h(u(0,0,0),u(1,0,0),a),h(u(0,1,0),u(1,1,0),a),l),h(h(u(0,0,1),u(1,0,1),a),h(u(0,1,1),u(1,1,1),a),l),c)}function fo(i,t,e,n=4){let s=.5,r=1,o=0,a=0;for(let l=0;l<n;l++)o+=t_(i*r,t*r,e+l*101)*s,a+=s,s*=.5,r*=2;return o/a}const Mi=16,$l=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","planks","cobble","water","glass","coal_ore","iron_ore","gold_ore","diamond_ore","bedrock","snow","snow_side","cactus_side","cactus_top","bricks","table_top","table_side","torch","furnace_top","furnace_front","command"],js=Object.fromEntries($l.map((i,t)=>[i,t])),io=$l.length,e_=i=>Math.max(0,Math.min(255,i));function xe(i,t,e,n,s){const r=(Je(e,n,s)-.5)*2*t;return i.map(o=>e_(o+r))}const gh=(i,t)=>xe([95,159,53],22,i,t,1),va=(i,t)=>xe([134,96,67],18,i,t,2),so=(i,t)=>xe([125,125,125],20,i,t,4),xa=(i,t)=>xe([168,134,82],8,i,t,9).map(e=>t%4===3?e-30:e);function Vr(i,t){return(e,n)=>Je(Math.floor(e/2)+3,Math.floor(n/2),t)>.72?xe(i,14,e,n,t+1):so(e,n)}const xu={grass_top:gh,dirt:va,grass_side:(i,t)=>t<4+(Je(i,0,3)>.5?1:0)?gh(i,t):va(i,t),stone:so,sand:(i,t)=>xe([219,207,142],12,i,t,5),log_side:(i,t)=>xe([102,81,49],10,i,0,6).map(e=>e-(i%4===0?14:0)),log_top:(i,t)=>{const e=Math.max(Math.abs(i-7.5),Math.abs(t-7.5));return xe(e%4<2?[170,135,82]:[140,110,66],8,i,t,7)},leaves:(i,t)=>xe([56,118,29],30,i,t,8),planks:xa,cobble:(i,t)=>{const e=Je(Math.floor(i/4),Math.floor(t/4),10),n=i%4===3||t%4===3;return xe([110+e*40,110+e*40,110+e*40],10,i,t,11).map(s=>n?s-35:s)},water:(i,t)=>{const e=Je(i>>1,t>>1,12)>.8?25:0;return[...xe([36+e,86+e,200+e/2],8,i,t,12),175]},glass:(i,t)=>{const e=i===0||t===0||i===15||t===15,n=i===3&&t>=3&&t<=5||i===4&&t===3||i===11&&t>=10&&t<=11;return e?[215,235,245,230]:n?[255,255,255,190]:[200,225,240,0]},coal_ore:Vr([30,30,30],20),iron_ore:Vr([216,175,147],30),gold_ore:Vr([250,220,60],40),diamond_ore:Vr([70,235,225],50),bedrock:(i,t)=>xe([55,55,55],32,i,t,60),snow:(i,t)=>xe([240,245,250],7,i,t,61),snow_side:(i,t)=>t<4?xe([240,245,250],7,i,t,61):va(i,t),cactus_side:(i,t)=>(i===4||i===11)&&t%5===2?[230,230,200]:xe([36,118,48],10,i,0,62).map(e=>i%5===2?e-18:e),cactus_top:(i,t)=>{const e=Math.max(Math.abs(i-7.5),Math.abs(t-7.5));return xe(e<3?[30,100,40]:[52,140,60],8,i,t,63)},bricks:(i,t)=>t%4===3||(i+Math.floor(t/4)%2*4)%8===7?xe([170,168,160],8,i,t,64):xe([150,72,58],14,i,t,65),table_top:(i,t)=>i===0||t===0||i===15||t===15||i===7||i===8||t===7||t===8?xe([92,60,30],8,i,t,66):xa(i,t),torch:(i,t)=>i<7||i>8?[0,0,0,0]:t<2?i===7?[255,235,120,255]:[255,160,40,255]:t<4?[255,200,60,255]:xe([122,86,44],10,i,t,70),command:(i,t)=>{const e=i===0||t===0||i===15||t===15,n=i===4+(t-4)&&t>=4&&t<=7||i===4+(11-t)&&t>=8&&t<=11||t===10&&i>=9&&i<=12;return e?[74,34,8,255]:n?[42,18,4,255]:xe([196,114,58],18,i,t,75)},furnace_top:(i,t)=>i===0||t===0||i===15||t===15?xe([70,70,70],8,i,t,71):so(i,t).map(e=>e-20),furnace_front:(i,t)=>i===0||t===0||i===15?xe([70,70,70],8,i,t,72):i>=4&&i<=11&&t>=8&&t<=13?t>10&&i>5&&i<10&&Je(i,t,73)>.4?[255,150+Je(i,t,74)*80|0,30,255]:[25,25,25,255]:i>=4&&i<=11&&t>=3&&t<=5?[30,30,30,255]:so(i,t).map(n=>n-15),table_side:(i,t)=>t<3?xe([92,60,30],8,i,t,67):i===7||i===8?xe([120,90,50],8,i,t,68):xa(i,t)},Ma={};function Mu(i){if(Ma[i])return Ma[i];let t=0,e=0,n=0,s=0;for(let r=0;r<Mi;r++)for(let o=0;o<Mi;o++){const a=xu[i](o,r);a[3]!==0&&(t+=a[0],e+=a[1],n+=a[2],s++)}return Ma[i]=[t/s/255,e/s/255,n/s/255]}function n_(){const i=document.createElement("canvas");i.width=Mi*io,i.height=Mi;const t=i.getContext("2d"),e=t.createImageData(i.width,Mi);$l.forEach((s,r)=>{for(let o=0;o<Mi;o++)for(let a=0;a<Mi;a++){const l=xu[s](a,o),c=(o*i.width+r*Mi+a)*4;e.data[c]=l[0],e.data[c+1]=l[1],e.data[c+2]=l[2],e.data[c+3]=l[3]===void 0?255:l[3]}}),t.putImageData(e,0,0);const n=new ci(i);return n.magFilter=fe,n.minFilter=fe,n.colorSpace=$e,n.generateMipmaps=!1,{canvas:i,texture:n}}const Tn=0,Q={GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,PLANKS:7,COBBLE:8,WATER:9,GLASS:10,COAL_ORE:11,IRON_ORE:12,GOLD_ORE:13,DIAMOND_ORE:14,BEDROCK:15,SNOW:16,CACTUS:17,BRICKS:18,TABLE:19,TORCH:20,FURNACE:21,COMMAND:22},j={STICK:100,COAL:101,IRON:102,GOLD:103,DIAMOND:104,APPLE:150,PORK:151,BEEF:152,COOKED_PORK:153,STEAK:154,STAR:105,PEARL:106,CHICKEN:155,COOKED_CHICKEN:156},Be={};function Le(i,t,e,n,s=null,r=0,o={}){Be[i]={id:i,name:t,tiles:e,hardness:n,tool:s,lvl:r,opaque:!0,liquid:!1,...o}}Le(Q.GRASS,"Hierba",["grass_top","dirt","grass_side"],.6,"shovel");Le(Q.DIRT,"Tierra",["dirt","dirt","dirt"],.5,"shovel");Le(Q.STONE,"Piedra",["stone","stone","stone"],1.5,"pick",1);Le(Q.SAND,"Arena",["sand","sand","sand"],.5,"shovel");Le(Q.LOG,"Tronco",["log_top","log_top","log_side"],2,"axe");Le(Q.LEAVES,"Hojas",["leaves","leaves","leaves"],.2);Le(Q.PLANKS,"Tablones",["planks","planks","planks"],2,"axe");Le(Q.COBBLE,"Adoquín",["cobble","cobble","cobble"],2,"pick",1);Le(Q.WATER,"Agua",["water","water","water"],100,null,0,{opaque:!1,liquid:!0,transparent:!0});Le(Q.GLASS,"Cristal",["glass","glass","glass"],.3,null,0,{opaque:!1,transparent:!0});Le(Q.COAL_ORE,"Mena de carbón",["coal_ore","coal_ore","coal_ore"],3,"pick",1);Le(Q.IRON_ORE,"Mena de hierro",["iron_ore","iron_ore","iron_ore"],3,"pick",2);Le(Q.GOLD_ORE,"Mena de oro",["gold_ore","gold_ore","gold_ore"],3,"pick",3);Le(Q.DIAMOND_ORE,"Mena de diamante",["diamond_ore","diamond_ore","diamond_ore"],3,"pick",3);Le(Q.BEDROCK,"Lecho de roca",["bedrock","bedrock","bedrock"],1/0);Le(Q.SNOW,"Nieve",["snow","dirt","snow_side"],.3,"shovel");Le(Q.CACTUS,"Cactus",["cactus_top","cactus_top","cactus_side"],.4);Le(Q.BRICKS,"Ladrillos",["bricks","bricks","bricks"],2,"pick",1);Le(Q.TABLE,"Mesa de crafteo",["table_top","planks","table_side"],2.5,"axe");Le(Q.TORCH,"Antorcha",["torch","torch","torch"],.05,null,0,{opaque:!1,torch:!0,flat:!0,emit:10});Le(Q.COMMAND,"Bloque de comandos",["command","command","command"],5,"pick",3);Le(Q.FURNACE,"Horno",["furnace_top","stone","furnace_front"],3,"pick",1);const kn=new Uint8Array(256),po=new Uint8Array(256),tr=new Uint8Array(256);for(const i of Object.values(Be))kn[i.id]=i.opaque?1:0,po[i.id]=i.liquid||i.torch?0:1,tr[i.id]=i.liquid?1:0;const Li={};function rn(i,t,e={}){Li[i]={id:i,name:t,stack:64,...e}}rn(j.STICK,"Palo");rn(j.COAL,"Carbón");rn(j.IRON,"Lingote de hierro");rn(j.GOLD,"Lingote de oro");rn(j.DIAMOND,"Diamante");rn(j.STAR,"Estrella de la tormenta");rn(j.PEARL,"Perla de Ender");rn(j.CHICKEN,"Pollo crudo",{food:4});rn(j.COOKED_CHICKEN,"Pollo asado",{food:12});rn(j.APPLE,"Manzana",{food:8});rn(j.PORK,"Cerdo crudo",{food:6});rn(j.BEEF,"Ternera cruda",{food:6});rn(j.COOKED_PORK,"Cerdo asado",{food:14});rn(j.STEAK,"Filete",{food:16});const yu=[{n:"de madera",color:[176,140,84],speed:2,dur:59,lvl:1,mat:Q.PLANKS},{n:"de piedra",color:[140,140,140],speed:4,dur:131,lvl:2,mat:Q.COBBLE},{n:"de hierro",color:[225,225,225],speed:6,dur:250,lvl:3,mat:j.IRON},{n:"de diamante",color:[90,235,225],speed:8,dur:1561,lvl:4,mat:j.DIAMOND}],i_=[{t:"pick",name:"Pico",base:110,dmg:2,rows:["MMM"," S "," S "]},{t:"axe",name:"Hacha",base:120,dmg:3,rows:["MM","MS"," S"]},{t:"shovel",name:"Pala",base:130,dmg:2,rows:["M","S","S"]},{t:"sword",name:"Espada",base:140,dmg:4,rows:["M","M","S"]}],Su=[];function hi(i,t,e,n=1){Su.push({pattern:i,key:t,out:e,n})}i_.forEach(i=>yu.forEach((t,e)=>{const n=i.base+e;rn(n,`${i.name} ${t.n}`,{stack:1,tool:{type:i.t,tier:e,speed:t.speed,dur:t.dur,lvl:t.lvl,dmg:i.dmg+e},color:t.color}),hi(i.rows,{M:t.mat,S:j.STICK},n)}));hi(["L"],{L:Q.LOG},Q.PLANKS,4);hi(["P","P"],{P:Q.PLANKS},j.STICK,4);hi(["PP","PP"],{P:Q.PLANKS},Q.TABLE);hi(["SS","SS"],{S:Q.SAND},Q.GLASS,4);hi(["CC","CC"],{C:Q.COBBLE},Q.BRICKS,4);hi(["CCC","C C","CCC"],{C:Q.COBBLE},Q.FURNACE);hi(["C","S"],{C:j.COAL,S:j.STICK},Q.TORCH,4);hi(["DGD","GCG","DGD"],{D:j.DIAMOND,G:j.GOLD,C:j.COAL},Q.COMMAND);const s_={[Q.IRON_ORE]:[j.IRON,1],[Q.GOLD_ORE]:[j.GOLD,1],[Q.COBBLE]:[Q.STONE,1],[Q.SAND]:[Q.GLASS,1],[Q.LOG]:[j.COAL,1],[j.PORK]:[j.COOKED_PORK,1],[j.BEEF]:[j.STEAK,1],[j.CHICKEN]:[j.COOKED_CHICKEN,1]},_h={[j.COAL]:80,[Q.LOG]:15,[Q.PLANKS]:15,[Q.TABLE]:15,[j.STICK]:5},Eu=8;function Po(i){return Be[i]||Li[i]}function ni(i){const t=Po(i);return Be[i]?64:t.stack}const r_=i=>!!Be[i],bu=i=>!Be[i]||!!Be[i].flat;function o_(i,t){let e=t,n=-1,s=t,r=-1;for(let l=0;l<t;l++)for(let c=0;c<t;c++)i[l*t+c]&&(e=Math.min(e,l),n=Math.max(n,l),s=Math.min(s,c),r=Math.max(r,c));if(n<0)return null;const o=n-e+1,a=r-s+1;for(const l of Su)if(!(l.pattern.length!==o||l.pattern[0].length!==a))for(const c of[!1,!0]){let h=!0;for(let u=0;u<o&&h;u++)for(let f=0;f<a;f++){const p=l.pattern[u][c?a-1-f:f],g=p===" "?0:l.key[p];if(i[(e+u)*t+s+f]!==g){h=!1;break}}if(h)return l}return null}function Ki(i){return i&&Li[i.id]&&Li[i.id].tool}function Tu(i,t){const e=Be[i];if(!e.lvl)return!0;const n=Ki(t);return!!n&&n.type==="pick"&&n.lvl>=e.lvl}function a_(i,t){const e=Be[i];if(e.hardness===1/0)return 1/0;const n=Ki(t),s=n&&e.tool&&n.type===e.tool,r=Tu(i,t),o=s?n.speed:1;return e.hardness*(r?1.5:5)/o}function wu(i,t){if(!Tu(i,t))return null;switch(i){case Q.GRASS:return[Q.DIRT,1];case Q.STONE:return[Q.COBBLE,1];case Q.COAL_ORE:return[j.COAL,1];case Q.DIAMOND_ORE:return[j.DIAMOND,1];case Q.LEAVES:return Math.random()<.1?[j.APPLE,1]:null;case Q.GLASS:case Q.WATER:return null;default:return[i,1]}}let Kl=null;const ya=new Map,Sa=new Map,Ea=new Map;function l_(i){Kl=i}function c_(i){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");e.imageSmoothingEnabled=!1;const n=Be[i],s=(r,o,a)=>{e.save(),e.setTransform(...o),e.drawImage(Kl,js[r]*16,0,16,16,0,0,16,16),a&&(e.fillStyle=`rgba(0,0,0,${a})`,e.fillRect(0,0,16,16)),e.restore()};return s(n.tiles[0],[.875,.4375,-.875,.4375,16,4],0),s(n.tiles[2],[.875,.4375,0,.875,2,11],.22),s(n.tiles[2],[.875,-.4375,0,.875,16,18],.42),t}function zt(i,t,e){i.fillStyle=e;for(const[n,s]of t)i.fillRect(n,s,1,1)}const Au=i=>`rgb(${i[0]},${i[1]},${i[2]})`,h_=(i,t)=>Au(i.map(e=>Math.max(0,Math.min(255,e*t))));function u_(i){const t=document.createElement("canvas");t.width=t.height=16;const e=t.getContext("2d"),n="#7a5a30",s=()=>{for(let o=2;o<=11;o++)zt(e,[[o,15-o]],n)},r=Li[i]||{};if(i===Q.TORCH){for(let o=6;o<=14;o++)zt(e,[[7,o],[8,o]],o%2?"#7a5630":"#6a4a28");zt(e,[[7,4],[8,4],[7,5],[8,5]],"#ffc83c"),zt(e,[[7,3],[8,3]],"#ff9a28"),zt(e,[[7,2]],"#ffeb78")}else if(r.tool){const o=yu[r.tool.tier].color,a=h_(o,.7),l=Au(o);s();const c=r.tool.type;if(c==="pick")zt(e,[[5,2],[6,1],[7,1],[8,1],[9,1],[10,2],[11,3],[12,4],[12,5],[4,3],[3,4],[3,5]],l),zt(e,[[6,2],[7,2],[8,2],[9,2],[10,3],[11,4]],a);else if(c==="axe")zt(e,[[7,2],[8,2],[9,2],[6,3],[7,3],[8,3],[9,3],[10,3],[8,4],[9,4],[10,4],[9,5]],l),zt(e,[[7,4],[8,5],[10,5]],a);else if(c==="shovel")zt(e,[[11,2],[12,2],[10,3],[11,3],[12,3],[13,3],[11,4],[12,4],[13,4],[12,5],[13,5],[12,1],[13,2]],l),zt(e,[[11,4],[12,5]],a);else{for(let h=0;h<9;h++)zt(e,[[5+h,10-h],[6+h,10-h]],h%2?l:a);zt(e,[[12,1],[13,2],[13,1]],l),zt(e,[[4,9],[5,10],[6,11],[3,8],[4,11],[5,12]],"#5a4020")}}else if(i===j.STICK)s(),zt(e,[[12,3]],n);else if(i===j.COAL)zt(e,[[5,5],[6,4],[7,4],[8,4],[9,5],[10,6],[10,7],[9,9],[8,10],[6,10],[5,9],[4,7],[4,6],[6,5],[7,5],[8,5],[9,6],[9,7],[8,9],[7,9],[6,9],[5,8],[5,6],[6,6],[7,6],[8,6],[8,7],[8,8],[7,8],[6,8],[5,7],[6,7],[7,7]],"#262626"),zt(e,[[7,5],[6,6]],"#555");else if(i===j.IRON||i===j.GOLD){const o=i===j.IRON?"#d8d8d8":"#f2d230",a=i===j.IRON?"#9a9a9a":"#b89412";for(let l=5;l<=10;l++)for(let c=3;c<=12;c++)zt(e,[[c,l]],l>=9?a:o);zt(e,[[3,5],[12,5],[3,10],[12,10]],"rgba(0,0,0,0)")}else if(i===j.DIAMOND)zt(e,[[7,3],[8,3],[6,4],[7,4],[8,4],[9,4],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[6,6],[7,6],[8,6],[9,6],[7,7],[8,7],[7,8]],"#5aebe1"),zt(e,[[7,4],[6,5],[7,6]],"#c8fffa"),zt(e,[[9,5],[8,6],[8,7],[7,8]],"#2aa8a0");else if(i===j.APPLE){zt(e,[[5,5],[6,4],[7,5],[8,4],[9,4],[10,5],[4,6],[11,6],[4,7],[11,7],[5,9],[6,10],[9,10],[10,9],[11,8],[4,8]],"#d22");for(let o=5;o<=9;o++)for(let a=5;a<=10;a++)zt(e,[[a,o]],"#e33");zt(e,[[6,5],[6,6]],"#fcc"),zt(e,[[8,2],[9,3]],"#5a3a10"),zt(e,[[9,2],[10,2]],"#3a3")}else if(i===j.PORK||i===j.BEEF){const o=i===j.PORK?"#f0a0a0":"#b83a3a",a=i===j.PORK?"#c87070":"#8a2020";for(let l=4;l<=11;l++)for(let c=3+(l<6?2:0);c<=12-(l>9?2:0);c++)zt(e,[[c,l]],(c+l)%5===0?a:o);zt(e,[[10,5],[11,5],[11,6]],"#f6f0e0")}else if(i===j.STAR)zt(e,[[7,1],[8,1],[7,2],[8,2],[7,3],[8,3],[1,6],[2,6],[3,6],[4,6],[11,6],[12,6],[13,6],[14,6],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[3,6],[5,9],[6,9],[9,9],[10,9],[4,11],[5,11],[10,11],[11,11],[4,12],[11,12],[3,13],[12,13],[6,6],[7,6],[8,6],[9,6],[7,4],[8,4]],"#fff1a8"),zt(e,[[7,6],[8,6],[7,7],[8,7]],"#ffffff"),zt(e,[[5,8],[10,8],[6,9],[9,9]],"#e8c640");else if(i===j.PEARL){for(let o=3;o<=12;o++)for(let a=3;a<=12;a++)Math.hypot(a-7.5,o-7.5)<4.6&&zt(e,[[a,o]],Math.hypot(a-7.5,o-7.5)<3?"#1f8f6a":"#0e5a44");zt(e,[[6,5],[7,5],[5,6],[6,6]],"#a8ffd8"),zt(e,[[9,9],[10,8]],"#52d8a8")}else if(i===j.CHICKEN||i===j.COOKED_CHICKEN){const o=i===j.CHICKEN?"#f2c4b0":"#c8883a",a=i===j.CHICKEN?"#d49a84":"#8a5420";for(let l=4;l<=10;l++)for(let c=4;c<=11;c++)Math.hypot(c-7.5,l-7)<4&&zt(e,[[c,l]],(c+l)%4===0?a:o);zt(e,[[10,10],[11,11],[12,12],[12,11],[11,12]],"#f6f0e0")}else if(i===j.COOKED_PORK||i===j.STEAK){const o=i===j.STEAK?"#8a4a22":"#c8884c",a=i===j.STEAK?"#5e2e12":"#a06030";for(let l=4;l<=11;l++)for(let c=3+(l<6?2:0);c<=12-(l>9?2:0);c++)zt(e,[[c,l]],(c+l)%4===0?a:o);zt(e,[[10,5],[11,5],[11,6]],"#f6f0e0"),zt(e,[[5,6],[6,7],[7,8],[8,9]],a)}else zt(e,[[7,7]],"#fff");return t}function Ru(i){if(Ea.has(i))return Ea.get(i);const t=Be[i]&&!Be[i].flat?c_(i):u_(i);return Ea.set(i,t),t}function Cu(i){return ya.has(i)||ya.set(i,Ru(i).toDataURL()),ya.get(i)}function jl(i){if(!Sa.has(i)){const t=new ci(Ru(i));t.magFilter=fe,t.minFilter=fe,t.generateMipmaps=!1,t.colorSpace=$e,Sa.set(i,t)}return Sa.get(i)}function ba(i,t,e){const n=document.createElement("canvas");n.width=9,n.height=9;const s=n.getContext("2d");return i.forEach((r,o)=>[...r].forEach((a,l)=>{const c=t(a,l);c&&(s.fillStyle=c,s.fillRect(l,o,1,1))})),n.toDataURL()}const f_=[".##...##.","#RR#.#RR#","#RHRRRRR#","#RRRRRRR#",".#RRRRR#.","..#RRR#..","...#R#...","....#....","........."],d_=["......##.",".....#CC#","....#CHC#","...#CCC#.","..#CCC#..",".#CCC#...","#WW##....","#WW#.....",".##......"],p_=["..#####..",".#BBBBB#.","#BHBBBBB#","#BHBBBBB#","#BBBBBBB#","#BBBBBBB#",".#BBBBB#.","..#####..","........."];function m_(){const i=n=>ba(f_,(s,r)=>{if(s===".")return null;const o=n==="empty"||n==="half"&&r>4;return s==="#"?"#1a0505":o?"#4a3a3a":s==="H"?"#ff9c9c":"#e02222"}),t=n=>ba(d_,(s,r)=>s==="."?null:s==="#"?"#2a1405":s==="W"?n==="empty"?"#555":"#f4efe4":n==="empty"||n==="half"&&r>4?"#4a3d30":s==="H"?"#e8a05a":"#c8782b"),e=n=>ba(p_,s=>s==="."?null:s==="#"?"#0a2a5a":n==="empty"?"rgba(120,170,230,0.25)":s==="H"?"#d8f0ff":"#5aa8f0");return{heart:{full:i("full"),half:i("half"),empty:i("empty")},food:{full:t("full"),half:t("half"),empty:t("empty")},bubble:{full:e("full"),empty:e("empty")}}}function g_(i){const t=document.createElement("canvas");t.width=t.height=16;const e=js[i];return t.getContext("2d").drawImage(Kl,e*16,0,16,16,0,0,16,16),t.toDataURL()}const Ie=(i,t)=>new wi(t?{color:i,map:t}:{color:i});function Wr(i){const t=document.createElement("canvas");t.width=t.height=8,i(t.getContext("2d"));const e=new ci(t);return e.magFilter=fe,e.minFilter=fe,e.generateMipmaps=!1,e.colorSpace=$e,e}function Xr(i,t,e,n,s,r,o){const a=new Te;a.position.set(s,r,o);const l=new Vt(new Me(i,t,e),n);return l.position.y=-t/2,a.add(l),a}class __{constructor(t){const e="#e0ac8c",n="#3a2412",o=Wr(g=>{g.fillStyle=e,g.fillRect(0,0,8,8),g.fillStyle=n,g.fillRect(0,0,8,2),g.fillRect(0,2,1,2),g.fillRect(7,2,1,2),g.fillStyle="#fff",g.fillRect(1,3,2,1),g.fillRect(5,3,2,1),g.fillStyle="#3a56c8",g.fillRect(2,3,1,1),g.fillRect(5,3,1,1),g.fillStyle="#a0603c",g.fillRect(3,5,2,1)}),a=Wr(g=>{g.fillStyle=n,g.fillRect(0,0,8,8)}),l=Wr(g=>{g.fillStyle=e,g.fillRect(0,0,8,8),g.fillStyle=n,g.fillRect(0,0,8,2)}),c=Wr(g=>{g.fillStyle=n,g.fillRect(0,0,8,8)}),h=Ie(14724236);this.group=new Te;const u=new Te;this.group.add(u),this.head=new Te,this.head.position.set(0,1.5,0);const f=new Vt(new Me(.5,.5,.5),[Ie(16777215,l),Ie(16777215,l),Ie(16777215,a),h,Ie(16777215,o),Ie(16777215,c)]);f.position.y=.25,this.head.add(f),u.add(this.head);const p=new Vt(new Me(.5,.75,.25),Ie(2794936));p.position.y=1.125,u.add(p),this.legL=Xr(.25,.75,.25,Ie(3817372),-.125,.75,0),this.legR=Xr(.25,.75,.25,Ie(3817372),.125,.75,0),this.legL.children[0].material=Ie(3817372),u.add(this.legL,this.legR),this.armL=Xr(.22,.72,.22,[Ie(2794936),Ie(2794936),Ie(2794936),h,Ie(2794936),Ie(2794936)],-.36,1.48,0),this.armR=Xr(.22,.72,.22,[Ie(2794936),Ie(2794936),Ie(2794936),h,Ie(2794936),Ie(2794936)],.36,1.48,0),u.add(this.armL,this.armR),this.itemMat=new we({transparent:!0,side:fn,alphaTest:.1}),this.item=new Vt(new oi(.55,.55),this.itemMat),this.item.position.set(0,-.68,.22),this.item.rotation.set(0,0,0),this.armR.add(this.item),this.item.visible=!1,this.heldId=-1,this.t=0,t.add(this.group),this.group.visible=!1}setHeld(t){t!==this.heldId&&(this.heldId=t,this.item.visible=!!t,t&&(this.itemMat.map=jl(t),this.itemMat.needsUpdate=!0))}update(t,e,n,s){this.group.position.copy(e.pos),this.group.rotation.y=e.yaw+Math.PI;const r=Math.hypot(e.vel.x,e.vel.z),o=r>.3&&(e.onGround||e.inWater);this.t+=t*(o?4+r*1.2:0);const a=o?Math.sin(this.t)*.9:0;this.legL.rotation.x=a,this.legR.rotation.x=-a,this.armL.rotation.x=-a*.8;let l=a*.8;n>0?l=-Math.sin(Math.min(1,n)*Math.PI)*1.8-.5:this.heldId&&(l=-.5+a*.3),this.armR.rotation.x=l,this.head.rotation.x=-e.pitch;const c=Math.sin(performance.now()/700)*.02;this.armL.rotation.z=-.04-c,this.armR.rotation.z=.04+c,e.flying&&(this.group.rotation.x=0)}}const v_={clear:0,rain:.65,storm:1},El={clear:"Despejado",rain:"Lluvia",storm:"Tormenta"},ke=(i,t)=>i+Math.random()*(t-i),Ws=1800,Ye=22;class x_{constructor(t,e){this.scene=t,this.hooks=e,this.state="clear",this.timer=ke(90,240),this.intensity=0,this.t=Math.random()*100,this.wind={x:0,z:0,s:.12},this.lightningT=6,this.bolts=[],this.thunder=[],this.boss=!1,this.pos=new Float32Array(Ws*3);for(let r=0;r<Ws;r++)this.pos[r*3]=ke(-Ye,Ye),this.pos[r*3+1]=ke(-8,22),this.pos[r*3+2]=ke(-Ye,Ye);const n=new Ve;this.linePos=new Float32Array(Ws*6),n.setAttribute("position",new dn(this.linePos,3)),this.rain=new gu(n,new Xl({color:11453674,transparent:!0,opacity:.55,fog:!1,depthWrite:!1})),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain);const s=new Ve;this.ptPos=new Float32Array(Ws*3),s.setAttribute("position",new dn(this.ptPos,3)),this.snow=new _u(s,new ql({color:16777215,size:3.5,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1})),this.snow.frustumCulled=!1,this.snow.visible=!1,t.add(this.snow),this.boltMat=new we({color:15922431,fog:!1})}set(t){this.state=t,this.timer=t==="clear"?ke(120,360):t==="rain"?ke(90,200):ke(80,170)}cycle(){const t=["clear","rain","storm"];return this.set(t[(t.indexOf(this.state)+1)%3]),this.state}next(){const t=Math.random();return this.state==="clear"?t<.65?"rain":t<.85?"storm":"clear":this.state==="rain"?t<.55?"clear":"storm":t<.5?"rain":"clear"}toJSON(){return{state:this.state,timer:this.timer,intensity:this.intensity}}load(t){t&&(this.state=t.state,this.timer=t.timer,this.intensity=t.intensity)}update(t,e,n,s,r){const o=this.hooks.world();this.t+=t,this.timer-=t,this.timer<=0&&this.set(this.next());const a=v_[this.state];this.intensity+=Math.sign(a-this.intensity)*Math.min(Math.abs(a-this.intensity),t*.08);const l=this.intensity,c=Math.sin(this.t*.02)*1.6+.8,h=.55+.45*Math.sin(this.t*.35)*Math.sin(this.t*.13+1),f=.12+((this.state==="storm"?1:this.state==="rain"?.45:.12)-.12)*Math.min(1,l*1.5+(this.state==="clear",0))*h;this.wind.s+=(f-this.wind.s)*Math.min(1,t*1.5),this.wind.x=Math.cos(c)*this.wind.s,this.wind.z=Math.sin(c)*this.wind.s;const p=n.position,g=l>.04&&!r;if(this.rain.visible=g&&!s,this.snow.visible=g&&s,g){const m=Math.floor(Ws*Math.min(1,l*(this.state==="storm"?1:.8))),d=s?2.4:26,E=s?1.5:9,b=this.wind.x*E,M=this.wind.z*E;for(let P=0;P<m;P++){let A=this.pos[P*3]+b*t,T=this.pos[P*3+1]-d*t*(s?1:.85+P%7*.05),R=this.pos[P*3+2]+M*t;s&&(A+=Math.sin(this.t*1.3+P)*t*.6,R+=Math.cos(this.t*1.1+P*.7)*t*.6),A>Ye?A-=2*Ye:A<-Ye&&(A+=2*Ye),R>Ye?R-=2*Ye:R<-Ye&&(R+=2*Ye);const y=p.x+A,v=p.z+R,C=o?o.topY(Math.floor(y),Math.floor(v)):-1;if((T+p.y<C+1||T<-14)&&(T=ke(10,24),A=ke(-Ye,Ye),R=ke(-Ye,Ye)),this.pos[P*3]=A,this.pos[P*3+1]=T,this.pos[P*3+2]=R,s)this.ptPos[P*3]=p.x+A,this.ptPos[P*3+1]=p.y+T,this.ptPos[P*3+2]=p.z+R;else{const U=P*6,F=.9;this.linePos[U]=p.x+A,this.linePos[U+1]=p.y+T,this.linePos[U+2]=p.z+R,this.linePos[U+3]=p.x+A-b*.06,this.linePos[U+4]=p.y+T+F,this.linePos[U+5]=p.z+R-M*.06}}s?(this.snow.geometry.setDrawRange(0,m),this.snow.geometry.attributes.position.needsUpdate=!0):(this.rain.geometry.setDrawRange(0,m*2),this.rain.geometry.attributes.position.needsUpdate=!0),this.rain.material.opacity=.35+.3*l}this.state==="storm"&&l>.7&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=this.boss?ke(2.5,6):ke(4,14),this.strike(e)));const _=this.hooks.sky();_.wet=l,_.flash=Math.max(0,_.flash-t*2.2);for(let m=this.bolts.length-1;m>=0;m--){const d=this.bolts[m];d.life-=t,d.group.visible=d.life>.12||Math.floor(d.life*40)%2===0,d.life<=0&&(this.scene.remove(d.group),d.group.traverse(E=>E.geometry&&E.geometry.dispose()),this.bolts.splice(m,1))}for(let m=this.thunder.length-1;m>=0;m--)this.thunder[m].delay-=t,this.thunder[m].delay<=0&&(this.hooks.sound("thunder",this.thunder[m].vol),this.thunder.splice(m,1))}strike(t,e,n){const s=this.hooks.world(),r=Math.random()*Math.PI*2,o=e?6:ke(18,110),a=Math.floor(n?n.x+ke(-2,2):t.pos.x+Math.cos(r)*o),l=Math.floor(n?n.z+ke(-2,2):t.pos.z+Math.sin(r)*o),c=s.topY(a,l),h=c>=0,u=h?c+1:30,f=Math.hypot(a-t.pos.x,l-t.pos.z);if(this.hooks.sky().flash=Math.min(1,1.15-f/220),this.thunder.push({delay:f/55,vol:Math.max(.25,1-f/150)}),!h||f>150)return;const p=new Te;let g=a+.5,_=l+.5,m=u+85;const d=16;for(let E=1;E<=d;E++){const b=u+85-(u+85-u)*E/d,M=3.2*(1-E/d),P=E===d?a+.5:a+.5+ke(-M,M),A=E===d?l+.5:l+.5+ke(-M,M),T=new L(g,m,_),R=new L(P,b,A),y=T.distanceTo(R),v=new Vt(new Zi(.16,.16,y,4),this.boltMat);v.position.copy(T).add(R).multiplyScalar(.5),v.quaternion.setFromUnitVectors(new L(0,1,0),R.clone().sub(T).normalize()),p.add(v),g=P,m=b,_=A}this.scene.add(p),this.bolts.push({group:p,life:.45}),this.hooks.burst(a+.5,u+.3,l+.5),this.hooks.strikeMobs(a+.5,l+.5),f<3.5&&this.hooks.hurtPlayer(8)}}function Zl(i,t,e,n=28){const s={onGround:!1,hitX:!1,hitZ:!1};t.vel.y=Math.max(-50,t.vel.y-n*e);const r=()=>{for(let o=Math.floor(t.pos.y);o<=Math.floor(t.pos.y+t.h-.001);o++)for(let a=Math.floor(t.pos.z-t.hw);a<=Math.floor(t.pos.z+t.hw);a++)for(let l=Math.floor(t.pos.x-t.hw);l<=Math.floor(t.pos.x+t.hw);l++)if(i.isSolid(l,o,a))return!0;return!1};for(const o of["x","z","y"]){const a=t.vel[o]*e;a&&(t.pos[o]+=a,r()&&(t.pos[o]-=a,o==="y"&&t.vel.y<0&&(s.onGround=!0),o==="x"&&(s.hitX=!0),o==="z"&&(s.hitZ=!0),t.vel[o]=0))}return s}class M_{constructor(t,e){this.scene=t,this.world=e,this.list=[]}spawn(t,e,n,s,r=1,o=!0){const a=new Wl({map:jl(s),transparent:!0,alphaTest:.1}),l=new mu(a),c=Be[s]?.32:.42;l.scale.set(c,c,c),this.scene.add(l);const h=Math.random()*Math.PI*2;this.list.push({id:s,n:r,sprite:l,base:c,age:0,hw:.12,h:.25,pos:new L(t,e,n),vel:new L(o?Math.cos(h)*1.6:0,o?4:0,o?Math.sin(h)*1.6:0)})}update(t,e,n,s){for(let r=this.list.length-1;r>=0;r--){const o=this.list[r];o.age+=t,Zl(this.world,o,t,22).onGround&&(o.vel.x*=.8,o.vel.z*=.8);const l=Math.sin(o.age*3)*.05+.22;o.sprite.position.set(o.pos.x,o.pos.y+l,o.pos.z);const c=e.pos.x-o.pos.x,h=e.pos.z-o.pos.z,u=e.pos.y+.9-o.pos.y,f=Math.hypot(c,u,h);if(o.age>.6&&f<2.2&&n.canAdd(o.id)&&(o.vel.x=c*6,o.vel.z=h*6,o.vel.y=Math.max(o.vel.y,u*5),o.pos.x+=c*t*6,o.pos.z+=h*t*6,f<.9)){const p=n.add(o.id,o.n);if(p===0){this.remove(r),s(o);continue}o.n=p}(o.age>300||o.pos.y<-10)&&this.remove(r)}}remove(t){const e=this.list[t];this.scene.remove(e.sprite),e.sprite.material.dispose(),this.list.splice(t,1)}clear(){for(;this.list.length;)this.remove(0)}}class y_{constructor(t,e){this.world=e,this.pool=[];const n=new Me(.12,.12,.12);for(let s=0;s<90;s++){const r=new Vt(n,new we({color:16777215}));r.visible=!1,t.add(r),this.pool.push({mesh:r,life:0,vel:new L})}this.next=0}burst(t,e,n,s,r=10,o=3){for(let a=0;a<r;a++){const l=this.pool[this.next++%this.pool.length];l.life=.5+Math.random()*.4,l.mesh.visible=!0,l.mesh.position.set(t+(Math.random()-.5),e+(Math.random()-.5),n+(Math.random()-.5)),l.mesh.material.color.setRGB(s[0]*(.7+Math.random()*.3),s[1]*(.7+Math.random()*.3),s[2]*(.7+Math.random()*.3)),l.vel.set((Math.random()-.5)*o,Math.random()*o*.9,(Math.random()-.5)*o)}}blockBreak(t,e,n,s){const r=Be[s];r&&this.burst(t+.5,e+.5,n+.5,Mu(r.tiles[2]),14,3.2)}update(t){for(const e of this.pool)if(!(e.life<=0)){if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.vel.y-=16*t,e.mesh.position.addScaledVector(e.vel,t)}}}const dt=16,cn=80,Ai=25,ln=(i,t)=>(i+32768)*65536+(t+32768),vh=i=>Math.floor(i/65536)-32768,xh=i=>i%65536-32768,bl=[{dir:[-1,0,0],shade:.8,ax:0,corners:[{p:[0,1,0],uv:[0,1]},{p:[0,0,0],uv:[0,0]},{p:[0,1,1],uv:[1,1]},{p:[0,0,1],uv:[1,0]}]},{dir:[1,0,0],shade:.8,ax:0,corners:[{p:[1,1,1],uv:[0,1]},{p:[1,0,1],uv:[0,0]},{p:[1,1,0],uv:[1,1]},{p:[1,0,0],uv:[1,0]}]},{dir:[0,-1,0],shade:.5,ax:1,bottom:!0,corners:[{p:[1,0,1],uv:[1,0]},{p:[0,0,1],uv:[0,0]},{p:[1,0,0],uv:[1,1]},{p:[0,0,0],uv:[0,1]}]},{dir:[0,1,0],shade:1,ax:1,top:!0,corners:[{p:[0,1,1],uv:[1,1]},{p:[1,1,1],uv:[0,1]},{p:[0,1,0],uv:[1,0]},{p:[1,1,0],uv:[0,0]}]},{dir:[0,0,-1],shade:.65,ax:2,corners:[{p:[1,0,0],uv:[0,0]},{p:[0,0,0],uv:[1,0]},{p:[1,1,0],uv:[0,1]},{p:[0,1,0],uv:[1,1]}]},{dir:[0,0,1],shade:.65,ax:2,corners:[{p:[0,0,1],uv:[0,0]},{p:[1,0,1],uv:[1,0]},{p:[0,1,1],uv:[0,1]},{p:[1,1,1],uv:[1,1]}]}];for(const i of bl)i.tan=[0,1,2].filter(t=>t!==i.ax);const Mh=[.5,.68,.84,1];function mo(i,t,e){const n=fo(i*.0035,t*.0035,e+500,2);return n<.36?"snow":n>.64?"desert":"plains"}function Tl(i,t,e){const n=fo(i*.008,t*.008,e,3),s=fo(i*.04,t*.04,e+7,3);return Math.floor(12+n*30+s*6)}class S_{constructor(t,e,n=1337,s=new Map){this.scene=t,this.materials=e,this.seed=n,this.saved=s,this.chunks=new Map,this.tops=new Map,this.meshes=new Map,this.dirty=new Set,this.modified=new Set,this.unsaved=new Set,this.unloadT=0,this.torches=new Map,this._lm=null,this.onChunkMeshed=null}idx(t,e,n){return(e*dt+n)*dt+t}generateChunk(t,e){const n=ln(t,e);if(this.saved.has(n)){const l=new Uint8Array(this.saved.get(n));return this.chunks.set(n,l),this.modified.add(n),this.computeTops(n,l),this.scanTorches(n,l),l}const s=this.seed,r=new Uint8Array(dt*dt*cn),o=t*dt,a=e*dt;for(let l=0;l<dt;l++)for(let c=0;c<dt;c++){const h=o+c,u=a+l,f=Tl(h,u,s),p=mo(h,u,s),g=f<=Ai+1;let _=Q.GRASS,m=Q.DIRT;g||p==="desert"?(_=Q.SAND,m=Q.SAND):p==="snow"&&(_=Q.SNOW);for(let d=0;d<=f&&d<cn;d++){let E=Q.STONE;if(d===f)E=_;else if(d>=f-3)E=m;else{const b=Je(h*31+d,u*17-d,s+77+d);d<50&&b<.025?E=Q.COAL_ORE:d<40&&b>.975&&b<.99?E=Q.IRON_ORE:d<24&&b>.99&&b<.996?E=Q.GOLD_ORE:d<14&&b>.996&&(E=Q.DIAMOND_ORE)}if((d===0||d===1&&Je(h,u,s+3)<.5)&&(E=Q.BEDROCK),d>2&&d<f-1&&E!==Q.BEDROCK){const b=_a(h*.045,d*.07,u*.045,s+11),M=_a(h*.045+50,d*.07+50,u*.045+50,s+13),P=_a(h*.025,d*.045,u*.025,s+17);(Math.abs(b-.5)<.055&&Math.abs(M-.5)<.055||P>.8)&&(E=Tn)}r[this.idx(c,d,l)]=E}for(let d=f+1;d<=Ai;d++)r[this.idx(c,d,l)]=Q.WATER}for(let l=a-2;l<a+dt+2;l++)for(let c=o-2;c<o+dt+2;c++){const h=Je(c,l,s+99);if(h>.04)continue;const u=mo(c,l,s),f=Tl(c,l,s);if(f<=Ai+1)continue;const p=fo(c*.012,l*.012,s+800,2)>.58,g=(d,E,b,M,P)=>{const A=d-o,T=b-a;if(A<0||T<0||A>=dt||T>=dt||E>=cn||E<0)return;const R=this.idx(A,E,T);P&&r[R]!==Tn||(r[R]=M)};if(u==="desert"){if(h<.004){const d=1+Math.floor(Je(c,l,s+6)*3);for(let E=1;E<=d;E++)g(c,f+E,l,Q.CACTUS,!1)}continue}if(h>(p?.03:u==="snow"?.007:.005))continue;const m=4+Math.floor(Je(c,l,s+5)*3);for(let d=-2;d<=1;d++){const E=d<=-1?2:1;for(let b=-E;b<=E;b++)for(let M=-E;M<=E;M++)E===2&&Math.abs(M)===2&&Math.abs(b)===2||g(c+M,f+m+d,l+b,Q.LEAVES,!0)}for(let d=1;d<=m;d++)g(c,f+d,l,Q.LOG,!1)}return this.chunks.set(n,r),this.computeTops(n,r),r}scanTorches(t,e){let n=null;for(let s=0;s<e.length;s++)e[s]===Q.TORCH&&(n||(n=new Set)).add(s);n?this.torches.set(t,n):this.torches.delete(t)}computeTops(t,e){const n=new Int16Array(dt*dt).fill(-1);for(let s=0;s<dt;s++)for(let r=0;r<dt;r++){let o=cn-1;for(;o>=0&&!kn[e[this.idx(r,o,s)]];)o--;n[s*dt+r]=o}this.tops.set(t,n)}getBlock(t,e,n){if(e<0||e>=cn)return Tn;const s=Math.floor(t/dt),r=Math.floor(n/dt),o=this.chunks.get(ln(s,r));return o?o[(e*dt+(n-r*dt))*dt+(t-s*dt)]:Tn}topY(t,e){const n=Math.floor(t/dt),s=Math.floor(e/dt),r=this.tops.get(ln(n,s));return r?r[(e-s*dt)*dt+(t-n*dt)]:-1}skyLit(t,e,n){const s=Math.floor(t/dt),r=Math.floor(n/dt),o=this.tops.get(ln(s,r));return o?e>o[(n-r*dt)*dt+(t-s*dt)]?1:0:1}isSolid(t,e,n){if(e<0)return!0;if(e>=cn)return!1;const s=Math.floor(t/dt),r=Math.floor(n/dt),o=this.chunks.get(ln(s,r));return o?po[o[(e*dt+(n-r*dt))*dt+(t-s*dt)]]===1:!0}isLiquid(t,e,n){return tr[this.getBlock(t,e,n)]===1}setBlock(t,e,n,s){if(e<0||e>=cn)return!1;const r=Math.floor(t/dt),o=Math.floor(n/dt),a=ln(r,o),l=this.chunks.get(a);if(!l)return!1;const c=t-r*dt,h=n-o*dt,u=this.idx(c,e,h),f=l[u];if(l[u]=s,this.modified.add(a),this.unsaved.add(a),f===Q.TORCH||s===Q.TORCH){let d=this.torches.get(a);s===Q.TORCH?(d||this.torches.set(a,d=new Set),d.add(u)):d&&(d.delete(u),d.size||this.torches.delete(a));for(let E=-1;E<=1;E++)for(let b=-1;b<=1;b++)this.dirty.add(ln(r+E,o+b))}const p=this.tops.get(a),g=h*dt+c;if(kn[s])e>p[g]&&(p[g]=e);else if(e===p[g]){let d=e-1;for(;d>=0&&!kn[l[this.idx(c,d,h)]];)d--;p[g]=d}this.dirty.add(a);const _=c===0?-1:c===dt-1?1:0,m=h===0?-1:h===dt-1?1:0;return _&&this.dirty.add(ln(r+_,o)),m&&this.dirty.add(ln(r,o+m)),_&&m&&this.dirty.add(ln(r+_,o+m)),!0}raycast(t,e,n=6,s=!1){let r=Math.floor(t.x),o=Math.floor(t.y),a=Math.floor(t.z);const l=[Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)],c=[Math.abs(1/e.x),Math.abs(1/e.y),Math.abs(1/e.z)],h=(g,_)=>_>0?Math.floor(g)+1-g:g-Math.floor(g),u=[l[0]===0?1/0:h(t.x,l[0])*c[0],l[1]===0?1/0:h(t.y,l[1])*c[1],l[2]===0?1/0:h(t.z,l[2])*c[2]];let f=[0,0,0],p=0;for(;p<=n;){const g=this.getBlock(r,o,a);if(g!==Tn&&(s||!tr[g]))return{x:r,y:o,z:a,id:g,normal:f,dist:p};const _=u[0]<u[1]?u[0]<u[2]?0:2:u[1]<u[2]?1:2;p=u[_],u[_]+=c[_],f=[0,0,0],f[_]=-l[_],_===0?r+=l[0]:_===1?o+=l[1]:a+=l[2]}return null}update(t,e,n,s=2){const r=Math.floor(t/dt),o=Math.floor(e/dt),a=[],l=[];for(let u=-n-1;u<=n+1;u++)for(let f=-n-1;f<=n+1;f++){const p=r+f,g=o+u,_=ln(p,g),m=f*f+u*u;if(!this.chunks.has(_))a.push({cx:p,cz:g,d:m});else if(Math.abs(f)<=n&&Math.abs(u)<=n){const d=this.dirty.has(_);(!this.meshes.has(_)||d)&&l.push({cx:p,cz:g,d:d?m-1e4:m})}}a.sort((u,f)=>u.d-f.d);for(let u=0;u<Math.min(s*2,a.length);u++)this.generateChunk(a[u].cx,a[u].cz);l.sort((u,f)=>u.d-f.d);let c=0,h=0;for(const u of l){let f=!0;for(let p=-1;p<=1&&f;p++)for(let g=-1;g<=1;g++)if(!this.chunks.has(ln(u.cx+p,u.cz+g))){f=!1;break}if(!f){h++;continue}c<(u.d<-5e3?6:s)?(this.buildMesh(u.cx,u.cz),c++):h++}for(const[u,f]of this.meshes)(Math.abs(vh(u)-r)>n+2||Math.abs(xh(u)-o)>n+2)&&(this.disposeMesh(f),this.meshes.delete(u));if((this.unloadT-=1)<=0){this.unloadT=60;for(const u of[...this.chunks.keys()])if(Math.abs(vh(u)-r)>n+5||Math.abs(xh(u)-o)>n+5){if(this.modified.has(u))continue;this.chunks.delete(u),this.tops.delete(u)}}return a.length+h}disposeMesh(t){for(const e of[t.opaque,t.trans])e&&(this.scene.remove(e),e.geometry.dispose())}buildMesh(t,e){const n=ln(t,e),s=this.chunks.get(n);if(!s)return;const r=t*dt,o=e*dt,a=[{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],ind:[]},{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],ind:[]}],l=(T,R,y)=>{const v=T-r,C=y-o;return v>=0&&C>=0&&v<dt&&C<dt&&R>=0&&R<cn?s[(R*dt+C)*dt+v]:this.getBlock(T,R,y)},c=.0015,h=[0,0,0],u=[0,0,0,0],f=[0,0,0,0],p=[0,0,0,0],g=dt*3,_=r-dt,m=o-dt;let d=null;const E=[];for(let T=-1;T<=1;T++)for(let R=-1;R<=1;R++){const y=this.torches.get(ln(t+T,e+R));if(y)for(const v of y)E.push([(t+T)*dt+v%dt,Math.floor(v/(dt*dt)),(e+R)*dt+Math.floor(v/dt)%dt])}if(E.length){d=this._lm||(this._lm=new Uint8Array(g*g*cn)),d.fill(0);const T=(v,C,U)=>(C*g+(U-m))*g+(v-_),R=[];for(const[v,C,U]of E)d[T(v,C,U)]=10,R.push(v,C,U);const y=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1];for(let v=0;v<R.length;v+=3){const C=R[v],U=R[v+1],F=R[v+2],q=d[T(C,U,F)]-1;if(!(q<=0))for(let W=0;W<18;W+=3){const V=C+y[W],Y=U+y[W+1],z=F+y[W+2];if(Y<0||Y>=cn||V<_||V>=_+g||z<m||z>=m+g||kn[l(V,Y,z)])continue;const st=T(V,Y,z);d[st]<q&&(d[st]=q,R.push(V,Y,z))}}}const b=(T,R,y)=>!d||R<0||R>=cn||T<_||T>=_+g||y<m||y>=m+g?0:Math.pow(d[(R*g+(y-m))*g+(T-_)]/10,1.7);for(let T=0;T<cn;T++)for(let R=0;R<dt;R++)for(let y=0;y<dt;y++){const v=s[(T*dt+R)*dt+y];if(v===Tn)continue;const C=Be[v],U=C.transparent?a[1]:a[0],F=r+y,q=o+R;if(C.torch){const W=(js.torch+.4375)/io,V=(js.torch+9/16)/io;for(const Y of bl){if(Y.bottom)continue;const z=U.pos.length/3;for(const st of Y.corners)U.pos.push(y+7/16+st.p[0]*2/16,T+st.p[1]*10/16,R+7/16+st.p[2]*2/16),U.nor.push(Y.dir[0],Y.dir[1],Y.dir[2]),U.uv.push(W+(V-W)*st.uv[0],6/16+10/16*st.uv[1]),U.col.push(.8,.8,.8),U.bl.push(1),U.sw.push(0);U.ind.push(z,z+1,z+2,z+2,z+1,z+3)}continue}for(const W of bl){const V=F+W.dir[0],Y=T+W.dir[1],z=q+W.dir[2],st=l(V,Y,z);if(kn[st]||st===v&&C.transparent)continue;const pt=js[W.top?C.tiles[0]:W.bottom?C.tiles[1]:C.tiles[2]],[yt,Ot]=W.tan,te=Y<cn?this.skyLit(V,Y,z):1,$=b(V,Y,z);for(let at=0;at<4;at++){const rt=W.corners[at].p,Tt=rt[yt]*2-1,Rt=rt[Ot]*2-1;h[0]=V,h[1]=Y,h[2]=z,h[yt]+=Tt;const It=kn[l(h[0],h[1],h[2])],me=It?te:this.skyLit(h[0],h[1],h[2]),Kt=It?$:b(h[0],h[1],h[2]);h[0]=V,h[1]=Y,h[2]=z,h[Ot]+=Rt;const le=kn[l(h[0],h[1],h[2])],O=le?te:this.skyLit(h[0],h[1],h[2]),on=le?$:b(h[0],h[1],h[2]);h[0]=V,h[1]=Y,h[2]=z,h[yt]+=Tt,h[Ot]+=Rt;const Wt=kn[l(h[0],h[1],h[2])],$t=It&&le||Wt?te:this.skyLit(h[0],h[1],h[2]),wt=It&&le||Wt?$:b(h[0],h[1],h[2]);p[at]=($+Kt+on+wt)/4,u[at]=It&&le?0:3-(It+le+Wt),f[at]=(te+me+O+$t)/4}const et=U.pos.length/3;for(let at=0;at<4;at++){const rt=W.corners[at];let Tt=rt.p[1];v===Q.WATER&&Tt===1&&l(F,T+1,q)!==Q.WATER&&(Tt=.88),U.pos.push(y+rt.p[0],T+Tt,R+rt.p[2]),U.nor.push(W.dir[0],W.dir[1],W.dir[2]),U.uv.push((pt+(rt.uv[0]?1-c:c))/io,rt.uv[1]?1-c:c);const Rt=W.shade*Mh[u[at]]*(.3+.7*f[at]);U.col.push(Rt,Rt,Rt),U.bl.push(W.shade*Mh[u[at]]*p[at]),U.sw.push(v===Q.LEAVES?1:v===Q.WATER?2:0)}u[0]+u[3]>u[1]+u[2]?U.ind.push(et,et+1,et+3,et,et+3,et+2):U.ind.push(et,et+1,et+2,et+2,et+1,et+3)}}const M=this.meshes.get(n);M&&this.disposeMesh(M);const P={opaque:null,trans:null},A=(T,R,y)=>{if(!T.ind.length)return null;const v=new Ve;v.setAttribute("position",new Ce(T.pos,3)),v.setAttribute("normal",new Ce(T.nor,3)),v.setAttribute("uv",new Ce(T.uv,2)),v.setAttribute("color",new Ce(T.col,3)),v.setAttribute("blight",new Ce(T.bl,1)),v.setAttribute("sway",new Ce(T.sw,1)),v.setIndex(T.ind),v.computeBoundingSphere();const C=new Vt(v,R);return C.position.set(r,0,o),C.renderOrder=y,this.scene.add(C),C};P.opaque=A(a[0],this.materials.opaque,0),P.trans=A(a[1],this.materials.trans,1),this.meshes.set(n,P),this.dirty.delete(n),this.onChunkMeshed&&this.onChunkMeshed(t,e)}}const go=(i,t)=>new wi(t?{color:i,map:t}:{color:i});function He(i,t,e,n,s,r,o,a){const l=new Te;l.position.set(r,o,a);const c=new Vt(new Me(t,e,n),go(s));return c.position.y=-e/2,l.add(c),i.add(l),l}function Xt(i,t,e,n,s,r,o,a,l){const c=new Vt(new Me(t,e,n),go(s,l));return c.position.set(r,o,a),i.add(c),c}function E_(i){const t=document.createElement("canvas");t.width=t.height=8,i(t.getContext("2d"));const e=new ci(t);return e.magFilter=fe,e.minFilter=fe,e.generateMipmaps=!1,e}const _o={pig:{hw:.4,h:.9,hp:10,speed:1.4,hostile:!1,name:"Cerdo",build(i,t){Xt(i,.6,.5,.95,15769768,0,.62,0),t.head=Xt(i,.5,.45,.45,16034480,0,.78,.65),Xt(i,.26,.2,.1,14189196,0,.72,.92),t.legs=[[-.18,.5],[.18,.5],[-.18,-.5],[.18,-.5]].map(([e,n])=>He(i,.2,.37,.2,15242140,e,.37,n))},drops:()=>[[j.PORK,1+Math.floor(Math.random()*2)]]},cow:{hw:.45,h:1.4,hp:10,speed:1.2,hostile:!1,name:"Vaca",build(i,t){Xt(i,.75,.7,1.2,4863268,0,.95,0),Xt(i,.77,.3,.5,15658734,0,.95,-.15),t.head=Xt(i,.5,.5,.45,4863268,0,1.15,.8),Xt(i,.3,.2,.1,14272688,0,1.05,1.05),Xt(i,.08,.15,.08,14540253,-.22,1.45,.75),Xt(i,.08,.15,.08,14540253,.22,1.45,.75),t.legs=[[-.22,.45],[.22,.45],[-.22,-.45],[.22,-.45]].map(([e,n])=>He(i,.24,.6,.24,4008990,e,.6,n))},drops:()=>[[j.BEEF,1+Math.floor(Math.random()*3)]]},sheep:{hw:.42,h:1.2,hp:8,speed:1.2,hostile:!1,name:"Oveja",xp:1,build(i,t){Xt(i,.85,.75,1.15,15658734,0,.9,0),t.head=Xt(i,.4,.42,.42,9076080,0,1.05,.72),t.legs=[[-.2,.4],[.2,.4],[-.2,-.4],[.2,-.4]].map(([e,n])=>He(i,.2,.5,.2,9076080,e,.5,n))},drops:()=>[[j.BEEF,1+Math.floor(Math.random()*2)]]},chicken:{hw:.22,h:.7,hp:4,speed:1.3,hostile:!1,name:"Gallina",xp:1,build(i,t){Xt(i,.34,.34,.5,16053492,0,.42,0),t.head=Xt(i,.2,.26,.2,16316664,0,.68,.24),Xt(i,.1,.07,.12,15769632,0,.64,.38),Xt(i,.06,.1,.06,13639712,0,.55,.33),Xt(i,.06,.26,.4,15263976,-.2,.44,0),Xt(i,.06,.26,.4,15263976,.2,.44,0),t.legs=[-.08,.08].map(e=>He(i,.05,.25,.05,15769632,e,.25,0))},drops:()=>[[j.CHICKEN,1]]},skeleton:{hw:.3,h:1.9,hp:20,speed:2.2,hostile:!0,name:"Esqueleto",ranged:!0,xp:5,build(i,t){t.legs=[He(i,.18,.85,.18,14211276,-.12,.85,0),He(i,.18,.85,.18,14211276,.12,.85,0)],Xt(i,.5,.8,.2,14211276,0,1.25,0);for(const s of[1,1.2,1.4])Xt(i,.52,.07,.22,5592396,0,s,0);t.arms=[He(i,.14,.75,.14,14211276,-.34,1.62,0),He(i,.14,.75,.14,14211276,.34,1.62,0)],t.arms[1].rotation.x=-1.3,t.arms[0].rotation.x=-1.3,t.head=Xt(i,.5,.5,.5,14211276,0,1.9,0),Xt(i,.1,.1,.02,1052688,-.12,1.93,.26),Xt(i,.1,.1,.02,1052688,.12,1.93,.26),Xt(i,.2,.05,.02,1052688,0,1.78,.26),Xt(i,.06,.5,.2,6965800,.42,1.28,.28)},drops:()=>Math.random()<.6?[[j.COAL,1]]:[[j.STICK,2]]},spider:{hw:.55,h:.75,hp:16,speed:4.2,hostile:!0,name:"Araña",xp:4,build(i,t){Xt(i,.7,.5,.7,2761760,0,.5,.3),Xt(i,.9,.6,1.1,3353124,0,.55,-.55),t.head=Xt(i,.5,.45,.45,2761760,0,.5,.8);for(const n of[-.12,.12])Xt(i,.1,.1,.03,13637656,n,.58,1.04),Xt(i,.06,.06,.03,13637656,n*1.8,.5,1.04);t.legs=[];for(let n=0;n<4;n++)for(const s of[-1,1]){const r=Xt(i,.9,.08,.08,2761760,s*.62,.38,.55-n*.38);r.rotation.z=s*-.55,r.rotation.y=s*(n-1.5)*.25}},drops:()=>Math.random()<.5?[[j.STICK,1]]:[]},enderman:{hw:.3,h:2.9,hp:40,speed:5,hostile:!1,name:"Enderman",xp:8,enderman:!0,build(i,t){t.legs=[He(i,.18,1.5,.18,1182232,-.12,1.5,0),He(i,.18,1.5,.18,1182232,.12,1.5,0)],Xt(i,.5,.95,.26,1182232,0,1.98,0),t.arms=[He(i,.13,1.35,.13,1182232,-.34,2.45,0),He(i,.13,1.35,.13,1182232,.34,2.45,0)],t.head=Xt(i,.5,.42,.5,1182232,0,2.7,0);for(const n of[-.13,.13])Xt(i,.14,.05,.03,14708991,n,2.72,.26)},drops:()=>Math.random()<.65?[[j.PEARL,1]]:[]},zombie:{hw:.3,h:1.8,hp:20,speed:2.5,hostile:!0,name:"Zombi",damage:3,build(i,t){t.legs=[He(i,.26,.75,.26,2899612,-.14,.75,0),He(i,.26,.75,.26,2899612,.14,.75,0)],Xt(i,.54,.75,.28,2794936,0,1.125,0),t.arms=[He(i,.22,.72,.22,5147194,-.38,1.45,0),He(i,.22,.72,.22,5147194,.38,1.45,0)],t.arms.forEach(e=>e.rotation.x=-Math.PI/2.2),t.head=Xt(i,.5,.5,.5,5147194,0,1.75,0),Xt(i,.1,.07,.02,1052688,-.12,1.78,.26),Xt(i,.1,.07,.02,1052688,.12,1.78,.26)},drops:()=>Math.random()<.15?[[j.IRON,1]]:[]},creeper:{hw:.3,h:1.7,hp:20,speed:2.3,hostile:!0,name:"Creeper",creeper:!0,build(i,t){t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([a,l])=>He(i,.26,.45,.26,4099646,a,.45,l*.5)),t.body=Xt(i,.5,.85,.3,5154894,0,.88,0);const n=E_(a=>{a.fillStyle="#4ea84e",a.fillRect(0,0,8,8),a.fillStyle="#0c1a0c",a.fillRect(1,2,2,2),a.fillRect(5,2,2,2),a.fillRect(3,4,2,2),a.fillRect(2,5,1,2),a.fillRect(5,5,1,2)}),s=go(5154894),r=[s,s,s,s,go(16777215,n),s],o=new Vt(new Me(.5,.5,.5),r);o.position.set(0,1.55,0),i.add(o),t.head=o},drops:()=>[]}},yh=["zombie","zombie","zombie","creeper","creeper","skeleton","skeleton","skeleton","spider","spider","enderman"],Sh=["zombie","zombie","creeper","skeleton","skeleton","spider"];class b_{constructor(t,e,n,s,r){this.type=t,this.def=_o[t],this.pos=new L(e,n,s),this.vel=new L,this.hw=this.def.hw,this.h=this.def.h,this.hp=this.def.hp,this.yaw=Math.random()*Math.PI*2,this.group=new Te,this.parts={},this.def.build(this.group,this.parts),this.model=new Te,this.model.add(this.group),r.add(this.model),this.wanderT=0,this.wanderDir=0,this.moving=!1,this.cool=0,this.flash=0,this.fuse=0,this.walkT=0,this.age=0,this.onGround=!1,this.sound=3+Math.random()*10}materials(){const t=[];return this.group.traverse(e=>{e.material&&(Array.isArray(e.material)?t.push(...e.material):t.push(e.material))}),t}hit(t,e,n){this.hp-=t,this.flash=.3,this.provoked=!0,this.aggro=!0;const s=this.pos.x-e,r=this.pos.z-n,o=Math.hypot(s,r)||1;this.vel.x=s/o*6,this.vel.z=r/o*6,this.vel.y=5}dispose(t){t.remove(this.model),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(n=>n.dispose())})}}function Lo(i,t,e,n){let s=0,r=1/0;for(const o of["x","y","z"]){if(Math.abs(t[o])<1e-9){if(i[o]<e[o]||i[o]>n[o])return-1;continue}let a=(e[o]-i[o])/t[o],l=(n[o]-i[o])/t[o];if(a>l&&([a,l]=[l,a]),s=Math.max(s,a),r=Math.min(r,l),s>r)return-1}return s}class T_{constructor(t,e,n){this.scene=t,this.world=e,this.hooks=n,this.list=[],this.spawnT=0,this.arrows=[]}add(t,e,n,s){const r=new b_(t,e,n,s,this.scene);return this.list.push(r),r}clear(){for(const t of this.list)t.dispose(this.scene);this.list=[];for(const t of this.arrows)this.scene.remove(t.mesh);this.arrows=[]}raycast(t,e,n){let s=null;for(const r of this.list){const o=Lo(t,e,{x:r.pos.x-r.hw,y:r.pos.y,z:r.pos.z-r.hw},{x:r.pos.x+r.hw,y:r.pos.y+r.h,z:r.pos.z+r.hw});o>=0&&o<=n&&(!s||o<s.dist)&&(s={mob:r,dist:o})}return s}damage(t,e,n,s){t.hit(e,n,s),this.hooks.sound("hit"),t.hp<=0&&this.kill(t)}kill(t){for(const[e,n]of t.def.drops())this.hooks.drop(t.pos.x,t.pos.y+.5,t.pos.z,e,n);this.hooks.killed&&this.hooks.killed(t.type,t.def.xp||2),this.hooks.puff(t.pos.x,t.pos.y+t.h/2,t.pos.z),t.dispose(this.scene),this.list.splice(this.list.indexOf(t),1)}update(t,e,n,s,r){const o=this.world;for(let a=this.list.length-1;a>=0;a--){const l=this.list[a];l.age+=t,l.cool=Math.max(0,l.cool-t),l.flash=Math.max(0,l.flash-t);const c=e.pos.x-l.pos.x,h=e.pos.z-l.pos.z,u=Math.hypot(c,h),f=e.pos.y-l.pos.y;let p=l.def.hostile&&n==="survival"&&!e.dead;if(l.type==="spider"&&s>.5&&!l.provoked&&(p=!1),l.def.enderman&&n==="survival"&&!e.dead&&!l.aggro&&u<24){const R=e.lookDir(),y=l.pos.x-e.pos.x,v=l.pos.y+2.6-(e.pos.y+1.62),C=l.pos.z-e.pos.z,U=Math.hypot(y,v,C);(R.x*y+R.y*v+R.z*C)/U>.985&&(l.aggro=!0)}l.def.enderman&&l.aggro&&n==="survival"&&!e.dead&&(p=!0);let g=null,_=l.def.speed;p&&u<26&&Math.abs(f)<14?(g=Math.atan2(-c,-h),l.def.ranged&&u<6&&(g+=Math.PI)):(l.wanderT-=t,l.wanderT<=0&&(l.wanderT=2+Math.random()*4,l.wanderDir=Math.random()<.4?null:Math.random()*Math.PI*2),l.wanderDir!==null&&l.wanderDir!==void 0&&(g=l.wanderDir),_*=.6);let m=!1;const d=l.def.ranged&&p&&u>=6&&u<12;if(g!==null){let R=g-l.yaw;if(R=Math.atan2(Math.sin(R),Math.cos(R)),l.yaw+=Math.max(-8*t,Math.min(8*t,R)),m=!d,d){const y=Math.atan2(-c,-h)-l.yaw;l.yaw+=Math.atan2(Math.sin(y),Math.cos(y))*Math.min(1,t*10)}}if(l.def.creeper){p&&u<3&&Math.abs(f)<2?(l.fuse+=t,l.fuse-t<=0&&this.hooks.sound("hiss"),m=!1):l.fuse=Math.max(0,l.fuse-t*2);const R=1+(l.fuse>0?Math.sin(l.fuse*30)*.04+l.fuse*.15:0);if(l.group.scale.set(R,R,R),l.fuse>=1.5){this.hooks.explode(l.pos.x,l.pos.y+.8,l.pos.z,3.2),l.dispose(this.scene),this.list.splice(a,1);continue}}const E=o.isLiquid(Math.floor(l.pos.x),Math.floor(l.pos.y+.2),Math.floor(l.pos.z)),b=-Math.sin(l.yaw),M=-Math.cos(l.yaw);m&&l.knock===void 0?(l.vel.x+=(b*_-l.vel.x)*Math.min(1,t*8),l.vel.z+=(M*_-l.vel.z)*Math.min(1,t*8)):(l.vel.x*=Math.max(0,1-t*6),l.vel.z*=Math.max(0,1-t*6)),l.moving=m,E&&(l.vel.y=Math.max(l.vel.y,0)+14*t,l.vel.y=Math.min(l.vel.y,2.5));const P=Zl(o,l,t);if(l.onGround=P.onGround,(P.hitX||P.hitZ)&&P.onGround&&m&&(l.vel.y=7.4),l.type==="zombie"&&p&&u<1.2&&Math.abs(f)<1.6&&l.cool<=0&&(l.cool=1,this.hooks.hurtPlayer(l.def.damage,c/(u||1)*5,h/(u||1)*5)),(l.type==="spider"||l.def.enderman)&&p&&u<(l.type==="spider"?1.7:1.5)&&Math.abs(f)<1.8&&l.cool<=0&&(l.cool=l.type==="spider"?.9:1,this.hooks.hurtPlayer(l.type==="spider"?2:6,c/(u||1)*4,h/(u||1)*4)),l.def.ranged&&p&&u<22&&l.cool<=0){const R=new L(l.pos.x,l.pos.y+1.6,l.pos.z),y=new L(e.pos.x,e.pos.y+1.2,e.pos.z),v=y.clone().sub(R),C=v.length();v.normalize(),o.raycast(R,v,C)||(l.cool=2.2,this.shootArrow(R,v.multiplyScalar(1).setY(v.y+.04*C/10)))}if(l.def.enderman&&l.aggro&&(l.tpT=(l.tpT===void 0?4:l.tpT)-t,l.tpT<=0&&u>3)){l.tpT=5+Math.random()*3;const R=Math.random()*Math.PI*2,y=4+Math.random()*5,v=Math.floor(e.pos.x+Math.cos(R)*y),C=Math.floor(e.pos.z+Math.sin(R)*y),U=o.topY(v,C);U>0&&!o.isSolid(v,U+1,C)&&(this.hooks.tp(l.pos.x,l.pos.y+1,l.pos.z),l.pos.set(v+.5,U+1,C+.5),l.vel.set(0,0,0),this.hooks.tp(l.pos.x,l.pos.y+1,l.pos.z))}if(l.type==="chicken"&&l.vel.y<-2&&(l.vel.y=-2),(l.type==="zombie"||l.type==="skeleton")&&s>.75&&o.skyLit(Math.floor(l.pos.x),Math.floor(l.pos.y+1),Math.floor(l.pos.z))&&!E&&(l.burn=(l.burn||0)+t,l.burn>1&&(l.burn=0,l.hit(2,l.pos.x,l.pos.z),l.vel.set(0,0,0),l.hp<=0))){this.kill(l);continue}l.sound-=t,l.sound<=0&&(l.sound=6+Math.random()*12,u<16&&this.hooks.sound(l.type==="pig"?"oink":l.type==="cow"||l.type==="sheep"?"moo":l.type==="chicken"?"pop":l.type==="zombie"||l.type==="skeleton"||l.type==="spider"?"groan":"")),l.walkT+=t*(m?9:0);const A=m?Math.sin(l.walkT)*.7:0;l.parts.legs&&l.parts.legs.forEach((R,y)=>R.rotation.x=y%2?-A:A),l.model.position.copy(l.pos),l.model.rotation.y=l.yaw+Math.PI;const T=l.flash>0||l.fuse>0&&Math.floor(l.fuse*8)%2===0;for(const R of l.materials())R.emissive&&R.emissive.setRGB(T?l.fuse>0?.8:.5:0,T&&l.fuse>0?.8:0,T&&l.fuse>0?.8:0);(u>r*16+24||l.pos.y<-20)&&(l.dispose(this.scene),this.list.splice(a,1))}for(let a=this.arrows.length-1;a>=0;a--){const l=this.arrows[a];l.life-=t,l.vel.y-=7*t,l.mesh.position.addScaledVector(l.vel,t),l.mesh.lookAt(l.mesh.position.clone().add(l.vel));const c=l.mesh.position,h=Math.hypot(c.x-e.pos.x,c.y-(e.pos.y+.9),c.z-e.pos.z)<.75;h&&!e.dead&&this.hooks.hurtPlayer(4,l.vel.x*.25,l.vel.z*.25),(h||l.life<=0||o.isSolid(Math.floor(c.x),Math.floor(c.y),Math.floor(c.z)))&&(this.scene.remove(l.mesh),this.arrows.splice(a,1))}this.spawnT-=t,this.spawnT<=0&&(this.spawnT=1.5,this.trySpawn(e,n,s))}shootArrow(t,e){const n=new Vt(new Me(.07,.07,.8),new wi({color:9071162,emissive:2102280}));n.position.copy(t),this.scene.add(n),this.arrows.push({mesh:n,vel:e.normalize().multiplyScalar(22),life:4}),this.hooks.sound("shoot",.5)}trySpawn(t,e,n){const s=this.world,r=this.list.filter(l=>!l.def.hostile).length,o=this.list.length-r,a=(l,c)=>{const h=Math.random()*Math.PI*2,u=l+Math.random()*(c-l),f=Math.floor(t.pos.x+Math.cos(h)*u),p=Math.floor(t.pos.z+Math.sin(h)*u);return[f,p]};if(r<10&&n>.45){const[l,c]=a(16,40),h=s.topY(l,c);if(h>0){const u=s.getBlock(l,h,c);(u===Q.GRASS||u===Q.SNOW)&&!s.isSolid(l,h+1,c)&&!s.isLiquid(l,h+1,c)&&this.add(["pig","cow","sheep","chicken"][Math.floor(Math.random()*4)],l+.5,h+1,c+.5)}}if(!(e!=="survival"||o>=8)){if(n<.3){const[l,c]=a(20,36),h=s.topY(l,c);h>0&&!s.isSolid(l,h+1,c)&&!s.isLiquid(l,h+1,c)&&kn[s.getBlock(l,h,c)]&&this.add(yh[Math.floor(Math.random()*yh.length)],l+.5,h+1,c+.5)}else if(o<4){const l=Math.random()*Math.PI*2,c=14+Math.random()*14,h=Math.floor(t.pos.x+Math.cos(l)*c),u=Math.floor(t.pos.z+Math.sin(l)*c),f=s.topY(h,u);if(f<8)return;const p=3+Math.floor(Math.random()*Math.max(1,f-8));s.getBlock(h,p,u)===0&&s.getBlock(h,p+1,u)===0&&s.isSolid(h,p-1,u)&&!s.skyLit(h,p,u)&&this.add(Sh[Math.floor(Math.random()*Sh.length)],h+.5,p,u+.5)}}}}const Re=(i,t)=>i+Math.random()*(t-i),w_=[1,1.3,1.75],A_=[18,20,15],R_=[4.2,3.2,2.4],C_=[1,2,3],P_=[5,6,8],L_=[5,4,3],Eh=[3.2,4.6,6.2];function D_(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");for(let n=0;n<16;n++)for(let s=0;s<16;s++){const r=Math.sin(s*12.9+n*78.2)*43758.5%1,o=190+Math.abs(r)*30;t.fillStyle=`rgb(${o|0},${o*.58|0},${o*.28|0})`,t.fillRect(s,n,1,1)}t.fillStyle="#4a2208",t.fillRect(0,0,16,1),t.fillRect(0,15,16,1),t.fillRect(0,0,1,16),t.fillRect(15,0,1,16),t.fillStyle="#2a1204";for(let n=0;n<4;n++)t.fillRect(4+n,4+n,2,1),t.fillRect(4+n,11-n,2,1);t.fillRect(9,10,4,1);const e=new ci(i);return e.magFilter=fe,e.minFilter=fe,e.generateMipmaps=!1,e.colorSpace=$e,e}class I_{constructor(t,e,n){this.scene=t,this.h=e,this.pos=n.clone(),this.name="TORMENTA WITHER",this.type="storm",this.maxHp=360,this.hp=360,this.phase=1,this.scale=1,this.scaleT=1,this.t=0,this.yaw=0,this.flash=0,this.devourT=1,this.atkT=3,this.beamT=3,this.beamOn=!1,this.minionT=10,this.meleeT=0,this.beamHurtT=0,this.shell=1,this.dead=!1,this.skulls=[],this.root=new Te,this.body=new Te,this.root.add(this.body),this.dark=new wi({color:1511967}),this.dark2=new wi({color:2760758}),this.glow=new we({color:12611839}),this.build(),this.beam=new Vt(new Zi(.14,.14,1,6),new we({color:11559167,transparent:!0,opacity:.6,fog:!1,depthWrite:!1})),this.beam.visible=!1,t.add(this.beam),this.skullGeo=new Me(.9,.9,.9),this.skullMat=new wi({color:2102576,emissive:5906576}),t.add(this.root),this.root.position.copy(n)}build(){const{dark:t,dark2:e,glow:n,body:s}=this,r=(l,c,h,u,f,p,g,_=s)=>{const m=new Vt(new Me(l,c,h),u);return m.position.set(f,p,g),_.add(m),m};r(5,5,5,t,0,0,0);for(let l=0;l<28;l++){const c=Re(1,2.6),h=Math.floor(Math.random()*3),u=Math.random()<.5?-1:1,f=[Re(-2.5,2.5),Re(-2.5,2.5),Re(-2.5,2.5)];f[h]=u*(2.5+c*.2),r(c,c*Re(.7,1.3),c,Math.random()<.5?t:e,f[0],f[1],f[2]).rotation.set(Re(-.3,.3),Re(-.3,.3),Re(-.3,.3))}for(let l=0;l<6;l++)r(.9,Re(2,3.6),.9,e,Re(-2,2),3.2,Re(-3,0)).rotation.z=Re(-.4,.4);this.heads=[];const o=(l,c,h,u,f)=>{const p=new Te;p.position.set(c,h,u),p.rotation.y=f,s.add(p),r(l,l,l,e,0,0,0,p);for(const _ of[-1,1])r(l*.24,l*.12,.12,n,_*l*.24,l*.12,l/2+.03,p);const g=new Te;g.position.set(0,-l*.42,l*.05),p.add(g),r(l*.92,l*.3,l*.86,t,0,-l*.1,0,g);for(let _=-2;_<=2;_++)r(l*.08,l*.14,l*.08,n,_*l*.18,l*.05,l*.42,g);this.heads.push({g:p,jaw:g,size:l})};o(3.6,0,4,2.2,0),o(2.6,-3.9,3,1.3,-.35),o(2.6,3.9,3,1.3,.35),this.tents=[];const a=(l,c,h,u,f,p,g,_,m)=>{const d=[];for(let E=0;E<g;E++){const b=_*(1-E/g*.72),M=new Vt(new Me(b,b,b),E===g-1&&m?n:E%2?t:e);s.add(M),d.push({m:M,s:b})}this.tents.push({b:new L(l,c,h),d:new L(u,f,p).normalize(),segs:d,ph:Math.random()*6})};for(let l=0;l<6;l++)a(Re(-2,2),-2.4,Re(-2,1.5),Re(-.2,.2),-1,Re(-.3,.1),9,1.5,!1);a(-2.4,-.4,2.2,-.4,-.1,1,8,1.2,!0),a(2.4,-.4,2.2,.4,-.1,1,8,1.2,!0),a(0,-1.8,2.5,0,-.5,1,8,1.2,!0),this.cmd=new Vt(new Me(1.7,1.7,1.7),new we({map:D_()})),this.cmd.position.set(0,.2,2.55),s.add(this.cmd),this.shellG=new Te,this.shellG.position.set(0,.2,2.8),s.add(this.shellG),r(3.1,3.1,.8,e,0,0,0,this.shellG);for(const[l,c]of[[-1.4,0],[1.4,0],[0,1.4],[0,-1.4]])r(l?.3:2.8,c?.3:2.8,.2,n,l,c,.45,this.shellG)}headWorld(t){const e=new L;return this.heads[t%3].g.getWorldPosition(e),e}corePos(){return this.pos.clone()}raycast(t,e,n){const s=this.scale,r=this.pos,o=Lo(t,e,{x:r.x-3.1*s,y:r.y-2.8*s,z:r.z-3.1*s},{x:r.x+3.1*s,y:r.y+5.4*s,z:r.z+3.1*s});if(o<0||o>n)return null;const a=new L(r.x,r.y+.2*s,r.z),l=new L(t.x,t.y,t.z),c=Math.max(0,a.clone().sub(l).dot(e)),h=l.addScaledVector(e,c);return{dist:o,crit:this.phase===3&&h.distanceTo(a)<2.1*s}}hit(t,e){if(this.dead)return;if(this.hp-=t*(e?3:1),this.flash=.15,this.h.burst(this.pos.x+Re(-2,2),this.pos.y+Re(-1,3),this.pos.z+Re(-2,2),e?[1,.7,.2]:[.5,.2,.8],e?16:8,4),this.hp<=0)return this.die();const n=this.hp/this.maxHp,s=n>.66?1:n>.33?2:3;s>this.phase&&(this.phase=s,this.scaleT=w_[s-1],this.h.sound("roar",1),this.h.strikeNear(this.pos.x,this.pos.z),this.h.toast(s===2?"¡La tormenta crece y devora todo!":"¡FASE FINAL! El bloque de comandos está expuesto: ¡golpéalo!"),this.atkT=1.5)}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y,this.pos.z,7,.25),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y,this.pos.z,"storm"),this.h.toast("¡Has derrotado a la Tormenta Wither!"),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.scene.remove(this.beam),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.skulls)this.scene.remove(t.mesh);this.skulls=[]}update(t,e,n){if(this.dead)return;this.t+=t,this.flash=Math.max(0,this.flash-t);const s=this.phase-1;this.scale+=(this.scaleT-this.scale)*Math.min(1,t*1.2);const r=this.scale;this.root.scale.setScalar(r);const o=e.pos.x,a=e.pos.z;let l=o-this.pos.x,c=a-this.pos.z;const h=Math.hypot(l,c)||1;l/=h,c/=h;const u=3.5+1.2*this.phase,f=A_[s];h>f+1?(this.pos.x+=l*u*t,this.pos.z+=c*u*t):h<f-3&&(this.pos.x-=l*u*.6*t,this.pos.z-=c*u*.6*t),this.pos.x+=-c*1.6*t*Math.sin(this.t*.3),this.pos.z+=l*1.6*t*Math.sin(this.t*.3);const p=e.pos.y+8+2*r;this.pos.y+=(p-this.pos.y)*Math.min(1,t*.8);const g=Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw;this.yaw+=Math.atan2(Math.sin(g),Math.cos(g))*Math.min(1,t*2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*.8)*.4,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((M,P)=>{M.jaw.rotation.x=.15+Math.sin(this.t*2.6+P*1.7)*.22+(this.beamOn?.35:0)});for(const M of this.tents)M.segs.forEach((P,A)=>{const T=A*.32;P.m.position.set(M.b.x+M.d.x*A*1.45+Math.sin(this.t*1.4+M.ph+A*.6)*T,M.b.y+M.d.y*A*1.45-A*.05,M.b.z+M.d.z*A*1.45+Math.cos(this.t*1.1+M.ph*1.3+A*.5)*T)});this.shell+=((this.phase>=3?0:1)-this.shell)*Math.min(1,t*2.5),this.shellG.scale.setScalar(Math.max(.001,this.shell));const _=this.flash>0?.5:0;this.dark.emissive.setRGB(_,_*.4,_),this.dark2.emissive.setRGB(_,_*.4,_);const m=.8+Math.sin(this.t*4)*.2;if(this.cmd.material.color.setScalar(this.phase>=3?1.2*m+.2:.55),this.devourT-=t,this.devourT<=0){this.devourT=.35;const M=3.4*r,P=Math.floor(this.pos.x),A=Math.floor(this.pos.y+.8*r),T=Math.floor(this.pos.z),R=Math.ceil(M);let y=0;for(let v=-R;v<=R&&y<150;v++)for(let C=-R;C<=R;C++)for(let U=-R;U<=R;U++){if(v*v+C*C+U*U>M*M)continue;const F=n.getBlock(P+v,A+C,T+U);F&&F!==Q.BEDROCK&&Math.random()<.7&&(n.setBlock(P+v,A+C,T+U,0),y++)}y>6&&this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.25,.1,.35],6,4)}this.beamT-=t,this.beamT<=0&&(this.beamOn=!this.beamOn,this.beamT=this.beamOn?P_[s]:L_[s],this.beamOn&&this.h.sound("roar",.6));const d=new L(this.pos.x-e.pos.x,this.pos.y+1-(e.pos.y+1),this.pos.z-e.pos.z),E=d.length(),b=this.beamOn&&E<48&&!e.dead;if(this.beam.visible=b,b){const M=d.clone().normalize();e.push.x=M.x*Eh[s],e.push.z=M.z*Eh[s],e.push.y=M.y*11;const P=this.headWorld(0),A=new L(e.pos.x,e.pos.y+1,e.pos.z),T=P.distanceTo(A);this.beam.scale.set(1+Math.sin(this.t*30)*.3,T,1+Math.sin(this.t*30)*.3),this.beam.position.copy(P).add(A).multiplyScalar(.5),this.beam.quaternion.setFromUnitVectors(new L(0,1,0),A.clone().sub(P).normalize()),this.beamHurtT-=t,E<5.5*r&&this.beamHurtT<=0&&(this.beamHurtT=.5,this.h.hurtPlayer(2,0,0))}if(this.meleeT-=t,E<6.5*r&&this.meleeT<=0&&!e.dead&&(this.meleeT=1.3,this.h.hurtPlayer(5,-d.x/E*6,-d.z/E*6)),this.atkT-=t,this.atkT<=0&&!e.dead){this.atkT=R_[s];for(let M=0;M<C_[s];M++)this.shoot(e,M)}for(let M=this.skulls.length-1;M>=0;M--){const P=this.skulls[M];P.life-=t,P.mesh.position.addScaledVector(P.vel,t),P.mesh.rotation.x+=t*4,P.mesh.rotation.y+=t*3;const A=P.mesh.position;(Math.hypot(A.x-e.pos.x,A.y-(e.pos.y+.9),A.z-e.pos.z)<1.4||P.life<=0||n.isSolid(Math.floor(A.x),Math.floor(A.y),Math.floor(A.z)))&&(this.h.explode(A.x,A.y,A.z,2.2+.4*this.phase,.5),this.scene.remove(P.mesh),this.skulls.splice(M,1))}this.phase>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=this.phase===2?14:10,this.h.minions()<5&&this.h.spawnMinion()))}shoot(t,e){const n=this.headWorld(e),r=new L(t.pos.x+t.vel.x*.5,t.pos.y+1,t.pos.z+t.vel.z*.5).sub(n).normalize();r.x+=Re(-.06,.06)*(e+1),r.y+=Re(-.04,.04),r.z+=Re(-.06,.06)*(e+1),r.normalize();const o=new Vt(this.skullGeo,this.skullMat);o.position.copy(n),this.scene.add(o),this.skulls.push({mesh:o,vel:r.multiplyScalar(16),life:7}),this.h.sound("shoot",1)}}const vn=(i,t)=>i+Math.random()*(t-i),On=(i=0,t=0,e=0)=>new L(i,t,e),er=i=>Math.atan2(Math.sin(i),Math.cos(i));class Do{constructor(t,e,n,s){this.scene=t,this.h=e,this.pos=n.clone(),Object.assign(this,s),this.hp=this.maxHp,this.phase=1,this.t=0,this.yaw=0,this.flash=0,this.dead=!1,this.scale=s.scale||1,this.root=new Te,this.body=new Te,this.root.add(this.body),this.flashMats=[],this.proj=[],this.clouds=[],this.extra=[],t.add(this.root),this.root.position.copy(n),this.root.scale.setScalar(this.scale)}mat(t,e=0,n=!1){if(n)return new we({color:t});const s=new wi({color:t,emissive:e});return this.flashMats.push(s),s}box(t,e,n,s,r,o,a,l=this.body){const c=new Vt(new Me(t,e,n),s);return c.position.set(r,o,a),l.add(c),c}group(t,e,n,s=this.body){const r=new Te;return r.position.set(t,e,n),s.add(r),r}world(t){const e=On();return t.getWorldPosition(e),e}raycast(t,e,n){const s=this.hitbox,r=this.scale,o=this.pos,a=Lo(t,e,{x:o.x-s.hx*r,y:o.y+(s.oy-s.hy)*r,z:o.z-s.hz*r},{x:o.x+s.hx*r,y:o.y+(s.oy+s.hy)*r,z:o.z+s.hz*r});return a>=0&&a<=n?{dist:a,crit:!1}:null}damageMul(){return 1}hit(t,e,n){if(this.dead)return;if(this.hp-=t*this.damageMul(),this.flash=.15,this.h.burst(this.pos.x+vn(-1,1),this.pos.y+this.hitbox.oy*this.scale+vn(-1,1),this.pos.z+vn(-1,1),this.burstColor||[.6,.2,.8],8,4),this.hp<=0)return this.die();const s=this.phaseFor(this.hp/this.maxHp);s>this.phase&&(this.phase=s,this.onPhase(s)),this.onHit&&this.onHit()}phaseFor(){return 1}onPhase(){}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z,5,.2),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y+1,this.pos.z,this.type),this.h.toast(`¡Has derrotado a ${this.name}!`),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.proj)this.scene.remove(t.mesh);for(const t of this.extra)this.scene.remove(t);this.proj=[]}shootProj(t,e,n={}){const s=n.size||.9,r=new Vt(new Me(s,s,s),new wi({color:n.color||2102576,emissive:n.emissive||5906576}));r.position.copy(t),this.scene.add(r),this.proj.push({mesh:r,vel:e.clone().normalize().multiplyScalar(n.speed||16),life:n.life||7,o:n}),this.h.sound("shoot",1)}updateProj(t,e,n){for(let s=this.proj.length-1;s>=0;s--){const r=this.proj[s],o=r.o;r.life-=t,r.mesh.position.addScaledVector(r.vel,t),r.mesh.rotation.x+=t*4,r.mesh.rotation.y+=t*3;const a=r.mesh.position;(Math.hypot(a.x-e.pos.x,a.y-(e.pos.y+.9),a.z-e.pos.z)<1.4||r.life<=0||n.isSolid(Math.floor(a.x),Math.floor(a.y),Math.floor(a.z)))&&(this.h.explode(a.x,a.y,a.z,o.radius||2.2,o.ds||.5),o.effect&&Math.hypot(a.x-e.pos.x,a.y-e.pos.y,a.z-e.pos.z)<(o.radius||2.2)*1.8&&this.h.effect(o.effect[0],o.effect[1]),o.cloud&&this.clouds.push({x:a.x,y:a.y,z:a.z,t:4,tick:0}),this.scene.remove(r.mesh),this.proj.splice(s,1))}for(let s=this.clouds.length-1;s>=0;s--){const r=this.clouds[s];r.t-=t,r.tick-=t,r.tick<=0&&(r.tick=.45,this.h.burst(r.x+vn(-2,2),r.y+vn(0,1.5),r.z+vn(-2,2),[.8,.3,.9],5,1.2),Math.hypot(r.x-e.pos.x,r.z-e.pos.z)<3.3&&Math.abs(r.y-e.pos.y)<3&&!e.dead&&this.h.hurtPlayer(2,0,0)),r.t<=0&&this.clouds.splice(s,1)}}applyFlash(){const t=this.flash>0?.5:0;for(const e of this.flashMats)e.userData.baseE===void 0&&(e.userData.baseE=e.emissive.clone());for(const e of this.flashMats)e.emissive.copy(e.userData.baseE).addScalar(t)}update(t,e,n){this.dead||(this.t+=t,this.flash=Math.max(0,this.flash-t),this.tick(t,e,n),this.updateProj(t,e,n),this.applyFlash())}}class U_ extends Do{constructor(t,e,n){super(t,e,n,{name:"ENDER DRAGON",type:"dragon",maxHp:300,hitbox:{hx:4.5,hy:2.4,hz:5,oy:.5},scale:1.4,burstColor:[.7,.2,.9]}),this.center=n.clone(),this.theta=Math.random()*6,this.state="circle",this.diveT=12,this.fireT=4,this.breath=0,this.diveTime=0,this.diveTarget=On();const s=this.mat(1380378),r=this.mat(2365998),o=this.mat(14696703,14696703,!0);this.box(2.4,2,6,s,0,0,0);for(let a=0;a<6;a++)this.box(.4,.8,.5,r,0,1.3,-2.4+a*.95);this.neck=[];for(let a=0;a<3;a++)this.neck.push(this.box(1.3-a*.1,1.3-a*.1,1.5,r,0,.3+a*.35,3.3+a*1.3));this.head=this.group(0,1.6,7.3),this.box(2,1.3,2.2,s,0,0,0,this.head),this.box(1.2,.7,1.6,r,0,-.15,1.6,this.head),this.jaw=this.group(0,-.6,.4,this.head),this.box(1.5,.35,2.2,s,0,0,.9,this.jaw);for(const a of[-.7,.7])this.box(.5,.25,.1,o,a,.2,1.1,this.head),this.box(.25,.8,.3,r,a*1.2,.9,-.4,this.head).rotation.z=a*.4;this.wings=[];for(const a of[-1,1]){const l=this.group(a*1.2,.8,.5);this.box(5,.22,2.4,r,a*2.5,0,0,l);const c=this.group(a*5,0,0,l);this.box(5,.16,2,s,a*2.5,0,.4,c),this.box(.15,.15,3.4,r,a*2.5,.12,.4,c),this.wings.push({w:l,o:c,sx:a})}this.tail=[];for(let a=0;a<8;a++)this.tail.push(this.box(1.5-a*.14,1.2-a*.1,1.6,a%2?s:r,0,0,-3.6-a*1.5));for(const[a,l]of[[-1,1.8],[1,1.8],[-1,-1.8],[1,-1.8]])this.box(.6,1.4,.6,r,a,-1.4,l);this.crystals=[];for(let a=0;a<4;a++){const l=a/4*Math.PI*2+.4,c=new Te,h=new we({color:16736464}),u=new Vt(new Me(1.3,1.3,1.3),h),f=new Vt(new Me(1.3,1.3,1.3),new we({color:16765168}));f.rotation.set(.7,.7,0),f.scale.setScalar(.7),c.add(u,f);const p=new Vt(new Zi(.07,.07,1,5),new we({color:16744672,transparent:!0,opacity:.6,fog:!1}));c.position.set(n.x+Math.cos(l)*14,n.y-6+3,n.z+Math.sin(l)*14),t.add(c,p),this.extra.push(c,p),this.crystals.push({g:c,beam:p,alive:!0})}this.h.toast("¡Destruye los 4 cristales para poder dañar al Dragón!")}aliveCrystals(){return this.crystals.filter(t=>t.alive).length}damageMul(){return this.aliveCrystals()?.25:1}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Dragón entra en furia!"),this.diveT=3}raycast(t,e,n){let s=super.raycast(t,e,n);return this.crystals.forEach((r,o)=>{if(!r.alive)return;const a=r.g.position,l=Lo(t,e,{x:a.x-1,y:a.y-1,z:a.z-1},{x:a.x+1,y:a.y+1,z:a.z+1});l>=0&&l<=n&&(!s||l<s.dist)&&(s={dist:l,crit:!1,crystal:o})}),s}hit(t,e,n){if(n&&n.crystal!==void 0){const s=this.crystals[n.crystal];if(!s.alive)return;s.alive=!1,this.scene.remove(s.g,s.beam),this.h.explode(s.g.position.x,s.g.position.y,s.g.position.z,2.2,.35),this.h.burst(s.g.position.x,s.g.position.y,s.g.position.z,[1,.4,.8],24,6),this.h.toast(this.aliveCrystals()?`Cristal destruido (${this.aliveCrystals()} restantes)`:"¡Cristales destruidos! Ahora es vulnerable");return}super.hit(t,e,n)}tick(t,e,n){const s=this.phase;this.center.x+=(e.pos.x-this.center.x)*t*.1,this.center.z+=(e.pos.z-this.center.z)*t*.1;const r=this.aliveCrystals();r&&(this.hp=Math.min(this.maxHp,this.hp+t*2*r));const o=this.pos.clone();if(this.state==="circle"){this.theta+=t*(.32+.1*s);const c=24,h=this.center.x+Math.cos(this.theta)*c,u=this.center.z+Math.sin(this.theta)*c,f=Math.max(e.pos.y+12,this.center.y)+Math.sin(this.t*.9)*2,p=Math.min(1,t*1.6);if(this.pos.x+=(h-this.pos.x)*p,this.pos.z+=(u-this.pos.z)*p,this.pos.y+=(f-this.pos.y)*p,this.diveT-=t,this.fireT-=t,this.diveT<=0&&!e.dead&&(this.state="dive",this.diveTime=0,this.diveTarget.set(e.pos.x,e.pos.y+1,e.pos.z),this.diveT=s===1?13:8,this.h.sound("roar",.7)),this.fireT<=0&&!e.dead){this.fireT=s===1?5:3;const g=this.world(this.head);this.shootProj(g,On(e.pos.x,e.pos.y+1,e.pos.z).sub(g),{speed:17,size:1.1,color:4198496,emissive:12595440,radius:2.6,ds:.55,cloud:!0})}}else if(this.state==="dive"){this.diveTime+=t;const c=this.diveTarget.clone().sub(this.pos),h=c.length();this.pos.addScaledVector(c.normalize(),28*t),Math.hypot(this.pos.x-e.pos.x,this.pos.y-(e.pos.y+1),this.pos.z-e.pos.z)<4.2&&!e.dead&&!this.hitDive&&(this.hitDive=!0,this.h.hurtPlayer(9,c.x*8,c.z*8)),(h<3||this.diveTime>3)&&(this.state="circle",this.hitDive=!1)}const a=this.pos.clone().sub(o);a.lengthSq()>1e-5&&(this.yaw+=er(Math.atan2(a.x,a.z)-this.yaw)*Math.min(1,t*3)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=this.state==="dive"?0:-er(Math.atan2(a.x,a.z)-this.yaw)*.5,this.root.rotation.x=this.state==="dive"?.5:0;const l=Math.sin(this.t*(this.state==="dive"?7:3.2));for(const c of this.wings)c.w.rotation.z=c.sx*l*.6,c.o.rotation.z=c.sx*l*.45;this.tail.forEach((c,h)=>{c.position.x=Math.sin(this.t*2-h*.6)*h*.35,c.position.y=Math.sin(this.t*1.5-h*.5)*h*.12}),this.jaw.rotation.x=.1+(this.state==="dive"?.5:.18+Math.sin(this.t*2)*.12);for(const c of this.crystals)if(c.alive){c.g.rotation.y+=t*1.2,c.g.position.y+=Math.sin(this.t*2+c.g.position.x)*t*.4;const h=c.g.position,u=this.pos.clone().setY(this.pos.y+1),f=h.distanceTo(u);c.beam.scale.set(1,f,1),c.beam.position.copy(h).add(u).multiplyScalar(.5),c.beam.quaternion.setFromUnitVectors(On(0,1,0),u.clone().sub(h).normalize()),c.beam.visible=this.hp<this.maxHp}else c.beam.visible=!1}}class N_ extends Do{constructor(t,e,n){super(t,e,n,{name:"WITHER",type:"wither",maxHp:300,hitbox:{hx:2.2,hy:2.8,hz:2.2,oy:1},scale:1.6,burstColor:[.2,.2,.25]}),this.fireT=2.5,this.minionT=12,this.noBreak=0;const s=this.mat(1447450),r=this.mat(3816e3),o=this.mat(15266047,0,!0);this.box(.45,3,.45,r,0,0,0);for(let l=0;l<3;l++)this.box(2.6-l*.4,.2,.35,r,0,.9-l*.55,0);this.box(.5,1.2,.5,s,0,-1.9,-.5).rotation.x=.3,this.heads=[];const a=(l,c,h,u)=>{const f=this.group(c,h,u);this.box(l,l,l,s,0,0,0,f);for(const p of[-1,1])this.box(l*.22,l*.16,.1,o,p*l*.22,l*.1,l/2+.03,f);this.box(l*.5,l*.14,.1,o,0,-l*.25,l/2+.03,f),this.heads.push(f)};a(1.3,0,2.1,0),a(1,-1.35,1.7,.1),a(1,1.35,1.7,.1),this.aura=new Vt(new Me(3.6,4.8,3.6),new we({color:8433919,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.aura.position.y=.6,this.body.add(this.aura),this.h.explode(n.x,n.y,n.z,4,.25),this.h.toast("¡El Wither ha despertado!")}phaseFor(t){return t>.5?1:2}damageMul(){return this.phase===2?.6:1}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Wither está acorazado! Te perseguirá de cerca"),this.aura.material.opacity=.28,this.fireT=1}onHit(){if(this.t-this.noBreak<.6)return;this.noBreak=this.t;const t=this.scale,e=Math.floor(this.pos.x),n=Math.floor(this.pos.y+t),s=Math.floor(this.pos.z);for(let r=-3;r<=3;r++)for(let o=-2;o<=4;o++)for(let a=-3;a<=3;a++){const l=this.h.world().getBlock(e+r,n+o,s+a);l&&l!==Q.BEDROCK&&Math.random()<.6&&this.h.world().setBlock(e+r,n+o,s+a,0)}}tick(t,e){const n=this.phase,s=e.pos.x,r=e.pos.z,o=s-this.pos.x,a=r-this.pos.z,l=Math.hypot(o,a)||1,c=n===1?16:7,h=n===1?4.5:7;if(l>c+1?(this.pos.x+=o/l*h*t,this.pos.z+=a/l*h*t):l<c-3&&(this.pos.x-=o/l*h*.7*t,this.pos.z-=a/l*h*.7*t),this.pos.y+=(e.pos.y+(n===1?7:3.5)-this.pos.y)*Math.min(1,t*.9),this.yaw+=er(Math.atan2(o,a)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.3)*.5,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((u,f)=>{u.rotation.y=Math.sin(this.t*1.1+f*2)*.35,u.rotation.x=Math.sin(this.t*.9+f)*.1}),this.fireT-=t,this.fireT<=0&&!e.dead){this.fireT=n===1?2.3:1.6;const u=n===1?1:3;for(let f=0;f<u;f++){const p=this.world(this.heads[f%3]),g=On(e.pos.x+e.vel.x*.4,e.pos.y+1,e.pos.z+e.vel.z*.4),_=g.sub(p).normalize();_.x+=vn(-.05,.05)*f,_.z+=vn(-.05,.05)*f,this.shootProj(p,_,{speed:15,size:n===1?.8:1,color:n===1?1118484:2109536,emissive:n===1?3158080:4223231,radius:n===1?1.9:2.3,ds:.4,effect:["poison",6]})}}n===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<5&&this.h.spawnMinion("skeleton")))}}class O_ extends Do{constructor(t,e,n){super(t,e,n,{name:"WARDEN",type:"warden",maxHp:360,hitbox:{hx:.9,hy:1.6,hz:.9,oy:1.6},scale:1.25,burstColor:[.1,.6,.6]}),this.vel=On(),this.hw=.55*1.25,this.hh=3.4,this.hwb=.7,this.pos.copy(n),this.state="emerge",this.emerge=2.4,this.boomT=3,this.charge=0,this.meleeT=0,this.angry=!1,this.walk=0;const s=this.mat(862768),r=this.mat(1325634),o=this.mat(3926216,0,!0);this.legL=this.leg(-.4,s),this.legR=this.leg(.4,s),this.box(1.5,1.5,.9,r,0,2.15,0),this.chest=this.box(.7,.6,.12,o,0,2.2,.48);for(const a of[1.75,2,2.45])this.box(1.55,.1,.95,s,0,a,0);this.armL=this.arm(-1.1,r),this.armR=this.arm(1.1,r),this.head=this.group(0,3.25,.05),this.box(1.5,1,.95,r,0,0,0,this.head);for(const a of[-1,1])this.box(.18,.9,.18,s,a*.5,.85,-.1,this.head).rotation.z=-a*.35,this.box(.6,.55,.12,o,a*.95,.15,-.1,this.head);this.box(.9,.12,.1,o,0,-.1,.5,this.head),this.boomBeam=new Vt(new Zi(.5,.5,1,8),new we({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.boomBeam),this.extra.push(this.boomBeam),this.h.toast("El Warden emerge de la oscuridad…"),this.h.sound("roar",1)}leg(t,e){const n=this.group(t,1.5,0);return this.box(.7,1.5,.75,e,0,-.75,0,n),n}arm(t,e){const n=this.group(t,2.8,0);return this.box(.7,2.6,.7,e,0,-1.3,0,n),n}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Warden ruge enfurecido!"),this.boomT=1}damageMul(){return this.state==="emerge"?0:1}tick(t,e,n){const s=this.phase;if(this.state==="emerge"){this.emerge-=t,this.root.position.set(this.pos.x,this.pos.y-Math.max(0,this.emerge)*1.2,this.pos.z),this.h.darkness(.6),this.emerge<=0&&(this.state="hunt");return}const r=e.pos.x-this.pos.x,o=e.pos.z-this.pos.z,a=Math.hypot(r,o)||1,l=e.pos.y-this.pos.y;this.yaw+=er(Math.atan2(r,o)-this.yaw)*Math.min(1,t*5);const c=this.charge>0?.4:s===1?3.4:5;this.vel.x+=(r/a*c-this.vel.x)*Math.min(1,t*6),this.vel.z+=(o/a*c-this.vel.z)*Math.min(1,t*6),a<2.2&&(this.vel.x*=.2,this.vel.z*=.2);const h={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},u=Zl(n,h,t);(u.hitX||u.hitZ)&&u.onGround&&(this.vel.y=9),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.2,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;const f=Math.sin(this.walk)*.55;this.legL.rotation.x=f,this.legR.rotation.x=-f,this.armL.rotation.x=-f*.7,this.armR.rotation.x=f*.7,this.head.rotation.x=Math.sin(this.t*2)*.05,this.chest.scale.setScalar(1+(this.charge>0?.6+Math.sin(this.t*25)*.3:Math.sin(this.t*4)*.1)),this.meleeT-=t,a<3.8&&Math.abs(l)<3&&this.meleeT<=0&&!e.dead&&this.charge<=0&&(this.meleeT=1.5,this.armR.rotation.x=-2,this.h.hurtPlayer(s===1?12:15,r/a*9,o/a*9),this.h.sound("hit",1)),this.boomT-=t,this.charge>0?(this.charge-=t,this.h.sound("hiss",.4),this.charge<=0&&this.sonicBoom(e,n)):this.boomT<=0&&a>4.5&&a<30&&!e.dead&&(this.charge=1.5,this.boomT=s===1?5:3.2,this.h.sound("roar",.5)),this.boomBeam.material.opacity=Math.max(0,this.boomBeam.material.opacity-t*3),this.h.darkness(a<28?.35+.15*Math.sin(this.t*3):0)}sonicBoom(t,e){const n=this.pos.clone().setY(this.pos.y+2.6*this.scale),s=On(t.pos.x,t.pos.y+1,t.pos.z),r=s.clone().sub(n),o=r.length();r.normalize(),this.boomBeam.material.opacity=.85,this.boomBeam.scale.set(1,o,1),this.boomBeam.position.copy(n).add(s).multiplyScalar(.5),this.boomBeam.quaternion.setFromUnitVectors(On(0,1,0),r),this.h.sound("explode",.8),e.raycast(n,r,o)||this.h.hurtPlayer(this.phase===1?12:15,r.x*8,r.z*8),this.h.burst(t.pos.x,t.pos.y+1,t.pos.z,[.4,1,.9],14,5)}dispose(){this.h.darkness(0),super.dispose()}}class F_ extends Do{constructor(t,e,n){super(t,e,n,{name:"GUARDIÁN ANCESTRAL",type:"guardian",maxHp:240,hitbox:{hx:1.8,hy:1.8,hz:1.8,oy:0},scale:2.4,burstColor:[.3,.9,.8]}),this.laserT=4,this.charge=0,this.beam=null,this.thorns=0;const s=this.mat(8032114),r=this.mat(6189912),o=this.mat(14715472),a=this.mat(6353120,0,!0);this.box(1.5,1.5,1.5,s,0,0,0);for(let c=0;c<6;c++)this.box(.4,.4,.05,o,vn(-.6,.6),vn(-.6,.6),-.78);this.spikes=[];const l=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,-1]];for(const[c,h,u]of l)for(let f=0;f<3;f++){const p=this.group(c*.75+(c?0:vn(-.5,.5)),h*.75+(h?0:vn(-.5,.5)),u*.75+(u?0:vn(-.5,.5)));p.lookAt(p.position.clone().add(On(c,h,u))),this.box(.14,.14,.9,r,0,0,.45,p),this.box(.1,.1,.2,a,0,0,.95,p),this.spikes.push(p)}this.eye=this.group(0,0,.78),this.box(.95,.95,.12,this.mat(15790304),0,0,0,this.eye),this.iris=this.box(.5,.5,.14,this.mat(13119520,5244936),0,0,.04,this.eye),this.box(.18,.18,.16,this.mat(1050632),0,0,.06,this.eye),this.box(.5,.5,.9,r,0,0,-1.1).scale.set(1,.6,1),this.laser=new Vt(new Zi(.1,.1,1,6),new we({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Guardián Ancestral te observa… ¡cuidado con su láser!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Guardián se enfurece! Su láser es más rápido")}onHit(){const t=this.h.player();t&&Math.hypot(t.pos.x-this.pos.x,t.pos.z-this.pos.z)<7.5&&!t.dead&&this.h.hurtPlayer(2,0,0)}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,o=e.pos.z-this.pos.z,a=Math.hypot(r,o)||1;if(this.charge<=0){const p=s===1?14:11,g=s===1?3:4.4;a>p+1?(this.pos.x+=r/a*g*t,this.pos.z+=o/a*g*t):a<p-3&&(this.pos.x-=r/a*g*.7*t,this.pos.z-=o/a*g*.7*t),this.pos.y+=(e.pos.y+4-this.pos.y)*Math.min(1,t*.8)}this.yaw+=er(Math.atan2(r,o)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw;const l=1+Math.sin(this.t*1.6)*.12+(this.charge>0?.35:0);this.spikes.forEach(p=>p.scale.setScalar(l)),this.iris.scale.setScalar(this.charge>0?1.5+Math.sin(this.t*30)*.2:1),this.laserT-=t;const c=this.world(this.eye),h=On(e.pos.x,e.pos.y+1,e.pos.z),u=h.clone().sub(c),f=u.length();if(u.normalize(),this.charge>0){const p=s===1?2.6:1.7,g=1-this.charge/p;this.charge-=t,this.laser.material.opacity=.25+g*.6,this.laser.scale.set(.5+g*3.2,f,.5+g*3.2),this.laser.position.copy(c).add(h).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(On(0,1,0),u),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.6),!n.raycast(c,u,f)&&!e.dead&&(this.h.hurtPlayer(9,u.x*3,u.z*3),this.h.effect("fatigue",25),this.h.toast("¡Fatiga de minería!")),this.laserT=s===1?6:3.5)}else this.laser.material.opacity=0,this.laserT<=0&&f<40&&!e.dead&&(this.charge=s===1?2.6:1.7,this.h.sound("hiss",.6))}}const Io={storm:{name:"Tormenta Wither",color:"#b060ff",hp:360,desc:"Colosal masa con tres cabezas. Rayo tractor, cráneos explosivos y un bloque de comandos como punto débil.",icon:"🌀"},dragon:{name:"Ender Dragon",color:"#e040ff",hp:300,desc:"Vuela en círculos, pica en picado y lanza aliento. Destruye sus 4 cristales para poder herirlo.",icon:"🐉",make:(i,t,e)=>new U_(i,t,e),up:16},wither:{name:"Wither",color:"#9aa8c8",hp:300,desc:"Lanza cráneos negros que envenenan. Con poca vida se acoraza y te persigue de cerca.",icon:"💀",make:(i,t,e)=>new N_(i,t,e),up:8},warden:{name:"Warden",color:"#3be8c8",hp:360,desc:"Ciego pero letal. Golpes devastadores y explosión sónica a distancia. Oscurece la pantalla.",icon:"👁",make:(i,t,e)=>new O_(i,t,e),up:0,ground:!0},guardian:{name:"Guardián Ancestral",color:"#70fff0",hp:240,desc:"Su láser carga y causa fatiga de minería. Sus espinas devuelven daño al golpearlo.",icon:"🐟",make:(i,t,e)=>new F_(i,t,e),up:6}},B_=["storm","dragon","wither","warden","guardian"],_s=[{id:"logs",group:"Aprendiz",title:"Primeros pasos",desc:"Recoge 3 troncos",ev:"collect",target:Q.LOG,n:3,reward:[[j.APPLE,4]],xp:8},{id:"table",group:"Aprendiz",title:"Carpintero",desc:"Fabrica una mesa de crafteo",ev:"craft",target:Q.TABLE,n:1,reward:[[Q.PLANKS,16]],xp:8},{id:"pick",group:"Aprendiz",title:"Minero",desc:"Fabrica un pico de piedra",ev:"craft",target:111,n:1,reward:[[j.COAL,8]],xp:10},{id:"torch",group:"Aprendiz",title:"Luz en la oscuridad",desc:"Fabrica 4 antorchas",ev:"craft",target:Q.TORCH,n:4,reward:[[j.COAL,8]],xp:10},{id:"iron",group:"Aprendiz",title:"Fundidor",desc:"Consigue un lingote de hierro",ev:"collect",target:j.IRON,n:1,reward:[[j.COAL,16]],xp:15},{id:"diamond",group:"Aprendiz",title:"¡Diamantes!",desc:"Consigue un diamante",ev:"collect",target:j.DIAMOND,n:1,reward:[[j.GOLD,6]],xp:25},{id:"k_zombie",group:"Cazador",title:"Cazador de zombis",desc:"Derrota 3 zombis",ev:"kill",target:"zombie",n:3,reward:[[j.STEAK,4]],xp:15},{id:"k_skeleton",group:"Cazador",title:"Huesos rotos",desc:"Derrota 3 esqueletos",ev:"kill",target:"skeleton",n:3,reward:[[j.STEAK,4]],xp:18},{id:"k_creeper",group:"Cazador",title:"Silencio…",desc:"Derrota 2 creepers",ev:"kill",target:"creeper",n:2,reward:[[j.GOLD,4]],xp:18},{id:"k_spider",group:"Cazador",title:"Aracnofobia",desc:"Derrota 2 arañas",ev:"kill",target:"spider",n:2,reward:[[j.GOLD,4]],xp:16},{id:"pearl",group:"Cazador",title:"Ojos que miran",desc:"Consigue una perla de Ender",ev:"collect",target:j.PEARL,n:1,reward:[[j.DIAMOND,3]],xp:30},{id:"b_storm",group:"Jefes",title:"Domador de la tormenta",desc:"Derrota a la Tormenta Wither",ev:"boss",target:"storm",n:1,reward:[[j.STAR,1],[j.DIAMOND,8]],xp:150},{id:"b_dragon",group:"Jefes",title:"¿El final?",desc:"Derrota al Ender Dragon",ev:"boss",target:"dragon",n:1,reward:[[j.STAR,1],[j.DIAMOND,8]],xp:150},{id:"b_wither",group:"Jefes",title:"Más allá de los huesos",desc:"Derrota al Wither",ev:"boss",target:"wither",n:1,reward:[[j.STAR,1],[j.DIAMOND,8]],xp:150},{id:"b_warden",group:"Jefes",title:"Silencio absoluto",desc:"Derrota al Warden",ev:"boss",target:"warden",n:1,reward:[[j.STAR,1],[j.DIAMOND,8]],xp:150},{id:"b_guardian",group:"Jefes",title:"La mirada del océano",desc:"Derrota al Guardián Ancestral",ev:"boss",target:"guardian",n:1,reward:[[j.STAR,1],[j.DIAMOND,8]],xp:150},{id:"master",group:"Jefes",title:"★ LEYENDA DE LOS JEFES ★",desc:"Derrota a los 5 jefes de Minecraft",ev:"bossall",target:null,n:5,reward:[[j.STAR,5],[j.DIAMOND,32],[j.GOLD,32]],xp:500}];class z_{constructor(t){this.h=t,this.progress={},this.done={},this.bosses=new Set}event(t,e,n=1){for(const s of _s)this.done[s.id]||s.ev!==t||s.target!==null&&s.target!==e||(this.progress[s.id]=Math.min(s.n,(this.progress[s.id]||0)+n),this.progress[s.id]>=s.n&&this.complete(s));if(t==="boss"){this.bosses.add(e);const s=_s.find(r=>r.id==="master");this.done.master||(this.progress.master=this.bosses.size,this.bosses.size>=s.n&&this.complete(s))}}complete(t){this.done[t.id]=!0,this.progress[t.id]=t.n,this.h.reward(t.reward),this.h.xp(t.xp),this.h.sound("craft"),this.h.toast(t.id==="master"?"🏆 ¡ERES UNA LEYENDA! Has derrotado a todos los jefes":`✔ Misión completada: ${t.title}`)}active(t=3){return _s.filter(e=>!this.done[e.id]).slice(0,t)}total(){return _s.length}completed(){return _s.filter(t=>this.done[t.id]).length}toJSON(){return{progress:this.progress,done:this.done,bosses:[...this.bosses]}}load(t){t&&(this.progress=t.progress||{},this.done=t.done||{},this.bosses=new Set(t.bosses||[]))}}const xi=.3,bh=1.8,Ta=1.62,Th=28,k_=8.6,H_=4.4,G_=7,V_=12;class W_{constructor(t,e){this.world=t,this.camera=e,this.pos=new L(0,40,0),this.vel=new L,this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headUnder=!1,this.keys=new Set,this.mode="survival",this.hp=20,this.food=20,this.air=10,this.fallStart=null,this.foodTimer=0,this.regenTimer=0,this.airTimer=0,this.starveTimer=0,this.invuln=0,this.dead=!1,this.stepDist=0,this.events={onHurt:null,onLand:null,onStep:null,onSplash:null,onDeath:null},this.spawn=new L,this.wind={x:0,z:0},this.push={x:0,y:0,z:0},this.effects={poison:0,fatigue:0},this.poisonT=0}collides(t,e,n){const s=this.world;for(let r=Math.floor(e);r<=Math.floor(e+bh-.001);r++)for(let o=Math.floor(n-xi);o<=Math.floor(n+xi);o++)for(let a=Math.floor(t-xi);a<=Math.floor(t+xi);a++)if(s.isSolid(a,r,o))return!0;return!1}intersectsBlock(t,e,n){return this.pos.x+xi>t&&this.pos.x-xi<t+1&&this.pos.y+bh>e&&this.pos.y<e+1&&this.pos.z+xi>n&&this.pos.z-xi<n+1}get eye(){return new L(this.pos.x,this.pos.y+Ta,this.pos.z)}lookDir(){return new L(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}damage(t,e=0,n=0){this.mode==="creative"||this.dead||this.invuln>0||(this.hp=Math.max(0,this.hp-t),this.invuln=.5,this.vel.x+=e,this.vel.z+=n,(e||n)&&(this.vel.y=Math.max(this.vel.y,5)),this.events.onHurt&&this.events.onHurt(t),this.hp<=0&&(this.dead=!0,this.events.onDeath&&this.events.onDeath()))}heal(t){this.hp=Math.min(20,this.hp+t)}eat(t){this.food=Math.min(20,this.food+t)}respawn(){this.hp=20,this.food=20,this.air=10,this.dead=!1,this.invuln=2,this.effects.poison=0,this.effects.fatigue=0,this.pos.copy(this.spawn),this.vel.set(0,0,0),this.fallStart=null}update(t){if(t=Math.min(t,.05),this.dead){this.camera.position.set(this.pos.x,this.pos.y+.4,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,.6,"YXZ");return}const e=this.keys,n=this.world;this.invuln=Math.max(0,this.invuln-t);const s=Math.floor(this.pos.x),r=Math.floor(this.pos.z),o=this.inWater;this.inWater=n.isLiquid(s,Math.floor(this.pos.y+.3),r),this.headUnder=n.isLiquid(s,Math.floor(this.pos.y+Ta),r),this.inWater&&!o&&this.vel.y<-4&&this.events.onSplash&&this.events.onSplash();const a=(e.has("KeyW")?1:0)-(e.has("KeyS")?1:0),l=(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),c=e.has("ShiftLeft")&&a>0&&!(this.mode==="survival"&&this.food<=6);let h=this.flying?V_:c?G_:H_;this.inWater&&!this.flying&&(h*=.6);const u=Math.sin(this.yaw),f=Math.cos(this.yaw);let p=-u*a+f*l,g=-f*a-u*l;const _=Math.hypot(p,g);_>0&&(p/=_,g/=_),this.vel.x=p*h+(this.inWater?0:this.wind.x),this.vel.z=g*h+(this.inWater?0:this.wind.z),this.flying?(this.vel.y=((e.has("Space")?1:0)-(e.has("KeyQ")?1:0))*h,this.fallStart=null):this.inWater?(this.vel.y-=Th*.25*t,this.vel.y=Math.max(this.vel.y,-3)*(1-2*t),e.has("Space")&&(this.vel.y=Math.min(this.vel.y+22*t,3.6)),this.fallStart=null):(this.vel.y-=Th*t,this.vel.y<-50&&(this.vel.y=-50),e.has("Space")&&this.onGround&&(this.vel.y=k_,this.onGround=!1)),this.vel.x+=this.push.x,this.vel.z+=this.push.z,this.vel.y+=this.push.y*t;const m=this.onGround,d=2,E=t/d;this.onGround=!1;const b=this.pos.x,M=this.pos.z;for(let P=0;P<d;P++)for(const A of["x","z","y"]){const T=this.vel[A]*E;T!==0&&(this.pos[A]+=T,this.collides(this.pos.x,this.pos.y,this.pos.z)&&(this.pos[A]-=T,A==="y"&&this.vel.y<0&&(this.onGround=!0),this.vel[A]=0))}if(!this.onGround&&!this.inWater&&!this.flying&&(this.fallStart===null||this.pos.y>this.fallStart)&&(this.fallStart=this.pos.y),this.onGround&&!m&&this.fallStart!==null){const P=this.fallStart-this.pos.y;P>3&&this.mode==="survival"&&this.damage(Math.floor(P-3)),P>1.2&&this.events.onLand&&this.events.onLand(P),this.fallStart=null}if(this.onGround&&(this.fallStart=null),this.onGround&&!this.flying&&(this.stepDist+=Math.hypot(this.pos.x-b,this.pos.z-M),this.stepDist>(c?2.2:1.7)&&(this.stepDist=0,this.events.onStep&&this.events.onStep())),this.pos.y<-30&&(this.pos.y=70,this.vel.set(0,0,0),this.damage(4)),this.effects.fatigue>0&&(this.effects.fatigue-=t),this.effects.poison>0&&(this.effects.poison-=t,this.poisonT+=t,this.poisonT>=1&&(this.poisonT=0,this.mode==="survival"&&this.hp>1&&(this.hp-=1,this.events.onHurt&&this.events.onHurt(1)))),this.mode==="survival"){this.headUnder?(this.airTimer+=t,this.airTimer>=1&&(this.airTimer=0,this.air>0?this.air--:this.damage(2))):(this.airTimer=0,this.air=Math.min(10,this.air+t*6));const P=Math.hypot(this.vel.x,this.vel.z)>.1;this.foodTimer+=t*(c?3:P?1:.25),this.foodTimer>22&&(this.foodTimer=0,this.food=Math.max(0,this.food-1)),this.regenTimer+=t,this.food>=18&&this.hp<20&&this.regenTimer>3?(this.regenTimer=0,this.heal(1),this.foodTimer+=6):this.food<=0&&this.regenTimer>4&&(this.regenTimer=0,this.hp>1&&this.damage(1))}else this.air=10,this.hp=20,this.food=20;this.camera.position.set(this.pos.x,this.pos.y+Ta,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}class X_{constructor(){this.slots=Array(36).fill(null),this.selected=0}held(){return this.slots[this.selected]}add(t,e=1){const n=ni(t);for(const s of this.slots)if(s&&s.id===t&&s.n<n){const r=Math.min(e,n-s.n);if(s.n+=r,e-=r,!e)return 0}for(let s=0;s<36&&e>0;s++)if(!this.slots[s]){const r=Math.min(e,n);this.slots[s]={id:t,n:r,d:0},e-=r}return e}canAdd(t){const e=ni(t);return this.slots.some(n=>!n||n.id===t&&n.n<e)}consumeHeld(t=1){const e=this.slots[this.selected];e&&(e.n-=t,e.n<=0&&(this.slots[this.selected]=null))}wearHeld(t=1){const e=this.slots[this.selected],n=Ki(e);return n?(e.d=(e.d||0)+t,e.d>=n.dur?(this.slots[this.selected]=null,!0):!1):!1}toJSON(){return{slots:this.slots,selected:this.selected}}load(t){t&&(this.slots=t.slots,this.selected=t.selected||0)}}const q_=600,Y_=new Pt(1,1,1),$_=new Pt(2316488),K_=new Pt(7370367),j_=new Pt(14542591),Z_=new Pt(8900331),J_=new Pt(461596),Q_=new Pt(16747088),tv=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function ev(){const e=Array.from({length:64},()=>Math.random()),n=(l,c)=>e[(c%8+8)%8*8+(l%8+8)%8],s=document.createElement("canvas");s.width=s.height=64;const r=s.getContext("2d"),o=r.createImageData(64,64);for(let l=0;l<64;l++)for(let c=0;c<64;c++){const h=c/64*8,u=l/64*8,f=Math.floor(h),p=Math.floor(u),g=h-f,_=u-p,m=g*g*(3-2*g),d=_*_*(3-2*_),E=(n(f,p)*(1-m)+n(f+1,p)*m)*(1-d)+(n(f,p+1)*(1-m)+n(f+1,p+1)*m)*d,b=(l*64+c)*4,M=E>.56?215:0;o.data[b]=o.data[b+1]=o.data[b+2]=255,o.data[b+3]=M}r.putImageData(o,0,0);const a=new ci(s);return a.wrapS=a.wrapT=oo,a.magFilter=fe,a.minFilter=fe,a.generateMipmaps=!1,a}function wh(i){const t=document.createElement("canvas");t.width=t.height=16,i(t.getContext("2d"));const e=new ci(t);return e.magFilter=fe,e.minFilter=fe,e.generateMipmaps=!1,e}class nv{constructor(t,e,n){this.scene=t,this.camera=e,this.materials=n,this.time=.08,this.daylight=1,this.wet=0,this.flash=0,this.cloudX=0,this.cloudZ=0,this.root=new Te,t.add(this.root),this.domeMat=new li({side:nn,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{top:{value:new Pt(4884696)},hor:{value:new Pt(10147056)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = normalize(vP).y; float t = smoothstep(-0.02, 0.6, h); gl_FragColor = vec4(mix(hor, top, t), 1.0); }"}),this.dome=new Vt(new Yl(420,24,14),this.domeMat),this.dome.renderOrder=-30,this.root.add(this.dome);const s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d"),o=r.createRadialGradient(64,64,0,64,64,64);o.addColorStop(0,"rgba(255,240,180,0.9)"),o.addColorStop(.25,"rgba(255,200,110,0.35)"),o.addColorStop(1,"rgba(255,180,80,0)"),r.fillStyle=o,r.fillRect(0,0,128,128),this.glow=new mu(new Wl({map:new ci(s),blending:Ua,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),this.glow.scale.set(260,260,1),this.glow.renderOrder=-11,this.root.add(this.glow);const a=wh(f=>{f.fillStyle="#fff6b0",f.fillRect(0,0,16,16),f.fillStyle="#ffe14a",f.fillRect(2,2,12,12),f.fillStyle="#fffbe0",f.fillRect(5,5,6,6)}),l=wh(f=>{f.fillStyle="#e8ecf2",f.fillRect(0,0,16,16),f.fillStyle="#b8bfcc",f.fillRect(3,4,3,3),f.fillRect(9,8,4,3),f.fillRect(5,11,2,2)}),c=(f,p)=>{const g=new Vt(new oi(p,p),new we({map:f,transparent:!0,fog:!1,depthWrite:!1,depthTest:!1}));return g.renderOrder=-10,this.root.add(g),g};this.sun=c(a,60),this.moon=c(l,40);const h=new Float32Array(900*3);for(let f=0;f<900;f++){const p=Math.random()*2-1,g=Math.random()*Math.PI*2,_=Math.sqrt(1-p*p);h[f*3]=Math.cos(g)*_*300,h[f*3+1]=p*300,h[f*3+2]=Math.sin(g)*_*300}const u=new Ve;u.setAttribute("position",new dn(h,3)),this.starMat=new ql({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,fog:!1,depthWrite:!1}),this.stars=new _u(u,this.starMat),this.stars.renderOrder=-11,this.root.add(this.stars),this.cloudTex=ev(),this.cloudMat=new we({map:this.cloudTex,transparent:!0,fog:!1,depthWrite:!1,side:fn}),this.clouds=new Vt(new oi(900,900),this.cloudMat),this.clouds.rotation.x=-Math.PI/2,t.add(this.clouds),this.cloudMat2=new we({map:this.cloudTex.clone(),transparent:!0,fog:!1,depthWrite:!1,side:fn}),this.cloudMat2.map.needsUpdate=!0,this.clouds2=new Vt(new oi(900,900),this.cloudMat2),this.clouds2.rotation.x=-Math.PI/2,t.add(this.clouds2),this.ambient=new Jg(16777215,1),this.sunLight=new Zg(16777215,.6),this.sunLight.position.set(.5,1,.3),t.add(this.ambient,this.sunLight),this.sky=new Pt,this.tint=new Pt}update(t,e,n,s,r={x:0,z:0,s:.12}){this.time=(this.time+t/q_)%1;const o=this.time*Math.PI*2,a=Math.sin(o),l=Math.cos(o),c=tv(-.12,.25,a),h=this.wet,u=this.flash;this.daylight=c*(1-.55*h),this.sky.copy(J_).lerp(Z_,this.daylight);const f=Math.max(0,1-Math.abs(a)*4.5)*.7;this.sky.lerp(Q_,f*(1-h)),h>0&&this.sky.lerp(K_.clone().multiplyScalar(.12+.88*c),h*.8),u>0&&this.sky.lerp(j_,u*.7),s&&this.sky.set(1718906).multiplyScalar(.4+this.daylight*.6),this.scene.background=this.sky;const p=c*(1-h);this.domeMat.uniforms.hor.value.copy(this.sky).lerp(Y_,.22*p),this.domeMat.uniforms.top.value.copy(this.sky).multiplyScalar(.7).lerp($_,.3*p),this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:n*.6,this.scene.fog.far=s?18:n*(1-.3*h),s||(this.scene.fog.near=n*(.6-.25*h));const g=.2+.8*this.daylight;this.tint.setRGB(g*(.85+.15*this.daylight),g*(.88+.12*this.daylight),.3+.7*g),this.tint.addScalar(u*.65),this.materials.tint.value.copy(this.tint),this.ambient.intensity=.35+.65*this.daylight+u*.8,this.sunLight.intensity=.15+.5*this.daylight,this.root.position.copy(this.camera.position);const _=220;this.sun.position.set(l*_,a*_,30),this.glow.position.set(l*_*.98,a*_*.98,30),this.glow.material.opacity=Math.max(0,Math.min(1,(a+.15)*1.6))*(1-h)*(s?0:1),this.moon.position.set(-l*_,-a*_,30),this.sun.lookAt(this.camera.position),this.moon.lookAt(this.camera.position),this.stars.rotation.z=o,this.starMat.opacity=Math.max(0,1-this.daylight*1.6)*(s?0:1)*(1-h),this.sun.material.opacity=this.moon.material.opacity=1-h*.95;const m=1.2+r.s*10;this.cloudX+=r.x/(r.s||1)*m*t,this.cloudZ+=r.z/(r.s||1)*m*t;const d=768,E=(.3+.7*c)*(1-.5*h);for(const[b,M,P,A]of[[this.clouds,this.cloudMat,92,1],[this.clouds2,this.cloudMat2,86,.7]])b.position.set(e.x,P,e.z),M.map.repeat.set(900/d,900/d),M.map.offset.set((e.x+this.cloudX*A)/d+(A<1?.37:0),-(e.z+this.cloudZ*A)/d),M.color.setScalar(E*(A<1?.8:1));this.cloudMat.opacity=.9,this.cloudMat2.opacity=Math.min(.95,h*1.1),this.clouds2.visible=h>.05}}const ne=i=>document.getElementById(i);function ti(i,t={}){const e=document.createElement("div");if(e.className="slot"+(t.active?" active":""),t.group&&(e.dataset.g=t.group,e.dataset.i=t.index),i){const n=document.createElement("img");if(n.src=Cu(i.id),bu(i.id)&&(n.className="flat"),e.appendChild(n),e.title=Po(i.id).name,i.n>1){const r=document.createElement("span");r.className="n",r.textContent=i.n,e.appendChild(r)}const s=Ki(i);if(s&&i.d>0){const r=document.createElement("div");r.className="dur";const o=Math.max(0,1-i.d/s.dur);r.innerHTML=`<i style="width:${o*100}%;background:${o>.5?"#6f6":o>.2?"#fd4":"#f55"}"></i>`,e.appendChild(r)}}if(t.key){const n=document.createElement("span");n.className="k",n.textContent=t.key,e.appendChild(n)}return e}class iv{constructor(t){this.g=t,this.cursor=null,this.craft=[],this.size=2,this.isOpen=!1,this.toastT=0,this.furnace=null,this.sprites=m_();const e=ne("inv");e.addEventListener("mousedown",n=>this.onDown(n)),e.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("mousemove",n=>{const s=ne("cursorItem");s.style.left=n.clientX+"px",s.style.top=n.clientY+"px"})}toast(t){const e=ne("toast");e.textContent=t,e.style.opacity=1,clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.style.opacity=0,1600)}renderHotbar(){const t=ne("hotbar");t.innerHTML="";for(let e=0;e<9;e++){const n=ti(this.g.inv.slots[e],{active:e===this.g.inv.selected,key:e+1});n.onclick=()=>{this.g.inv.selected=e,this.g.onSelect()},t.appendChild(n)}}renderStats(){const t=this.g.player,e=this.g.getMode()==="survival",n=this.sprites;ne("bars").style.visibility=e?"visible":"hidden";const s=(c,h)=>{let u="";for(let f=0;f<10;f++)u+=`<img class="hs" src="${h[c>=f*2+2?"full":c===f*2+1?"half":"empty"]}">`;return u},r=Math.ceil(t.hp),o=Math.ceil(t.food),a=r+","+o+","+Math.ceil(t.air)+","+t.headUnder+","+e+","+(r<=6?Math.floor(performance.now()/250)%2:0);if(a===this._statKey)return;this._statKey=a,ne("hearts").innerHTML=s(r,n.heart),ne("hearts").classList.toggle("low",r<=6),ne("food").innerHTML=s(o,n.food);const l=Math.ceil(t.air);ne("air").innerHTML=t.headUnder&&e?Array.from({length:10},(c,h)=>`<img class="hs" src="${l>h?n.bubble.full:n.bubble.empty}">`).join(""):""}open(t,e=null){this.furnace=t==="furnace"?e:null,t==="furnace"&&(t=2),this.size=t,this.craft=Array(t*t).fill(null),this.isOpen=!0;const n=this.g.getMode()==="creative";ne("inv").classList.remove("hidden"),ne("invTitle").textContent=this.furnace?"Horno":n?"Creativo":t===3?"Mesa de crafteo":"Inventario",ne("craftArea").classList.toggle("hidden",n||!!this.furnace),ne("furnaceArea").classList.toggle("hidden",!this.furnace),ne("paletteWrap").classList.toggle("hidden",!n||!!this.furnace),ne("craftGrid").style.gridTemplateColumns=`repeat(${t}, 46px)`,this.render()}close(){if(!this.isOpen)return;this.isOpen=!1,this.furnace=null;const t=e=>{if(!e)return;const n=this.g.inv.add(e.id,e.n);n&&this.g.dropItem(e.id,n)};this.craft.forEach(t),this.craft=[],t(this.cursor),this.cursor=null,ne("inv").classList.add("hidden"),ne("cursorItem").classList.add("hidden"),this.renderHotbar()}recipe(){const t=o_(this.craft.map(e=>e?e.id:0),this.size);return t?{id:t.out,n:t.n,d:0}:null}render(){const t=this.g,e=ne("invMain");e.innerHTML="";for(let r=9;r<36;r++)e.appendChild(ti(t.inv.slots[r],{group:"inv",index:r}));const n=ne("invHot");n.innerHTML="";for(let r=0;r<9;r++)n.appendChild(ti(t.inv.slots[r],{group:"inv",index:r,active:r===t.inv.selected}));if(this.furnace){const r=this.furnace;ne("fIn").innerHTML="",ne("fIn").appendChild(ti(r.slots[0],{group:"furnace",index:0})),ne("fFuel").innerHTML="",ne("fFuel").appendChild(ti(r.slots[1],{group:"furnace",index:1})),ne("fOut").innerHTML="",ne("fOut").appendChild(ti(r.slots[2],{group:"furnace",index:2})),this.furnaceBars()}else if(t.getMode()==="creative"){const r=ne("palette");r.innerHTML="",[...Object.keys(Be).map(Number),...Object.keys(Li).map(Number)].forEach(a=>r.appendChild(ti({id:a,n:1,d:0},{group:"pal",index:a})))}else{const r=ne("craftGrid");r.innerHTML="",this.craft.forEach((a,l)=>r.appendChild(ti(a,{group:"craft",index:l})));const o=ne("craftOut");o.innerHTML="",o.appendChild(ti(this.recipe(),{group:"out",index:0}))}const s=ne("cursorItem");this.cursor?(s.classList.remove("hidden"),s.innerHTML=`<img src="${Cu(this.cursor.id)}">${this.cursor.n>1?`<span class="n">${this.cursor.n}</span>`:""}`):s.classList.add("hidden"),this.renderHotbar()}furnaceBars(){const t=this.furnace;t&&(ne("fFlame").style.height=(t.burn>0?Math.min(100,t.burn/t.burnMax*100):0)+"%",ne("fArrow").style.width=Math.min(100,t.cook/Eu*100)+"%")}arr(t){return t==="inv"?this.g.inv.slots:t==="furnace"?this.furnace.slots:this.craft}onDown(t){const e=t.target.closest(".slot"),n=t.button===2;if(!e||!e.dataset.g){this.g.getMode()==="creative"&&t.target.closest("#paletteWrap")?(this.cursor=null,this.render()):!t.target.closest(".panel")&&this.cursor&&(this.g.dropItem(this.cursor.id,n?1:this.cursor.n),n&&this.cursor.n>1?this.cursor.n--:this.cursor=null,this.render());return}const s=e.dataset.g,r=+e.dataset.i;if(s==="pal"){this.cursor={id:r,n:n?1:ni(r),d:0},this.render();return}if(s==="out"){const c=this.recipe();if(!c||this.cursor&&!(this.cursor.id===c.id&&this.cursor.n+c.n<=ni(c.id)))return;this.cursor?this.cursor.n+=c.n:this.cursor={...c},this.craft=this.craft.map(h=>h&&h.n>1?{...h,n:h.n-1}:null),this.g.sound("craft"),this.g.onCraft&&this.g.onCraft(c.id,c.n),this.render();return}const o=this.arr(s),a=o[r],l=this.cursor;if(s==="furnace"&&r===2){if(!a)return;l?l.id===a.id&&l.n+a.n<=ni(l.id)&&(l.n+=a.n,o[2]=null):(this.cursor=a,o[2]=null),this.render();return}if(n){if(l)a?a.id===l.id&&a.n<ni(l.id)?(a.n++,l.n--,l.n<=0&&(this.cursor=null)):(o[r]=l,this.cursor=a):(o[r]={...l,n:1},l.n--,l.n<=0&&(this.cursor=null));else if(a){const c=Math.ceil(a.n/2);this.cursor={...a,n:c},a.n-=c,a.n<=0&&(o[r]=null)}}else if(!l)o[r]=null,this.cursor=a;else if(!a)o[r]=l,this.cursor=null;else if(a.id===l.id&&ni(l.id)>1){const c=Math.min(l.n,ni(l.id)-a.n);a.n+=c,l.n-=c,l.n<=0&&(this.cursor=null)}else o[r]=l,this.cursor=a;this.render()}}let be=null,vo=null,Ri=null,Pu=.5;function Uo(){if(be)return!0;try{be=new(window.AudioContext||window.webkitAudioContext),Ri=be.createGain(),Ri.gain.value=Pu,Ri.connect(be.destination),vo=be.createBuffer(1,be.sampleRate,be.sampleRate);const i=vo.getChannelData(0);for(let t=0;t<i.length;t++)i[t]=Math.random()*2-1;return!0}catch{return!1}}function nr(){Uo()&&be.state==="suspended"&&be.resume()}function sv(i){Pu=i,Ri&&(Ri.gain.value=i)}function _n(i,t,e,n,s=0){if(!Uo())return;const r=be.currentTime,o=be.createBufferSource();o.buffer=vo;const a=be.createBiquadFilter();a.type="lowpass",a.frequency.setValueAtTime(t,r),s&&a.frequency.exponentialRampToValueAtTime(Math.max(40,t*s),r+i),a.Q.value=e;const l=be.createGain();l.gain.setValueAtTime(n,r),l.gain.exponentialRampToValueAtTime(.001,r+i),o.connect(a),a.connect(l),l.connect(Ri),o.start(r,Math.random()*.5,i)}function Un(i,t,e,n,s){if(!Uo())return;const r=be.currentTime,o=be.createOscillator();o.type=i,o.frequency.setValueAtTime(t,r),o.frequency.exponentialRampToValueAtTime(e,r+n);const a=be.createGain();a.gain.setValueAtTime(s,r),a.gain.exponentialRampToValueAtTime(.001,r+n),o.connect(a),a.connect(Ri),o.start(r),o.stop(r+n)}let qr=null;function rv(){if(qr||!Uo())return qr;const i=(t,e,n)=>{const s=be.createBufferSource();s.buffer=vo,s.loop=!0;const r=be.createBiquadFilter();r.type=t,r.frequency.value=e,r.Q.value=n;const o=be.createGain();return o.gain.value=0,s.connect(r),r.connect(o),o.connect(Ri),s.start(0,Math.random()*.5),{f:r,g:o}};return qr={rain:i("highpass",1800,.3),rainLow:i("lowpass",5e3,.3),wind:i("bandpass",420,.9)},qr}function ov(i,t,e=0){if(!be||be.state!=="running")return;const n=rv();if(!n)return;const s=be.currentTime;n.rain.g.gain.setTargetAtTime(i*.16,s,.3),n.rainLow.g.gain.setTargetAtTime(i*.12,s,.3),n.wind.g.gain.setTargetAtTime(t*.5,s,.4),n.wind.f.frequency.setTargetAtTime(300+380*(.5+.5*Math.sin(e))+t*200,s,.3)}function wl(i,t=1){if(be)switch(i){case"break":_n(.16,1400,1,.9,.4);break;case"place":_n(.09,900,1,.7);break;case"step":_n(.07,500,1,.25);break;case"hit":_n(.08,2200,1,.5);break;case"hurt":Un("square",330,110,.22,.25);break;case"pop":Un("sine",500,1100,.1,.2);break;case"eat":_n(.07,1800,2,.6),setTimeout(()=>_n(.07,1600,2,.6),110);break;case"splash":_n(.3,2500,.5,.6,.2);break;case"hiss":_n(.6,6e3,.5,.4);break;case"explode":_n(1.1,900,.7,1.4,.1),Un("sine",90,30,.8,.9);break;case"craft":Un("triangle",400,800,.15,.25);break;case"die":Un("sawtooth",300,40,.8,.3);break;case"oink":Un("sawtooth",220,150,.15,.12);break;case"moo":Un("sawtooth",130,100,.5,.12);break;case"thunder":_n(3.2,380,.7,1.6*t,.12),setTimeout(()=>_n(1.6,220,.8,.9*t,.2),450),Un("sine",60,25,2,.5*t);break;case"roar":_n(1.5,500,.8,.9*t,.15),Un("sawtooth",95,32,1.5,.45*t);break;case"shoot":_n(.3,3200,.8,.45*t,.25),Un("sine",700,180,.25,.2*t);break;case"groan":Un("sawtooth",110,70,.6,.14);break}}const av="minecraft-web",ji="kv";let Yr=null;function Jl(){return Yr||(Yr=new Promise((i,t)=>{const e=indexedDB.open(av,1);e.onupgradeneeded=()=>e.result.createObjectStore(ji),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}),Yr)}const Ah=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)});async function lv(){try{const t=(await Jl()).transaction(ji).objectStore(ji),e=await Ah(t.getAllKeys()),n=await Ah(t.getAll()),s={meta:null,chunks:new Map};return e.forEach((r,o)=>{r==="meta"?s.meta=n[o]:typeof r=="string"&&r.startsWith("c:")&&s.chunks.set(Number(r.slice(2)),n[o])}),s}catch{return{meta:null,chunks:new Map}}}async function cv(i,t){try{const n=(await Jl()).transaction(ji,"readwrite"),s=n.objectStore(ji);s.put(i,"meta");for(const[r,o]of t)s.put(o,"c:"+r);return await new Promise((r,o)=>{n.oncomplete=r,n.onerror=()=>o(n.error)}),!0}catch{return!1}}async function hv(){try{const t=(await Jl()).transaction(ji,"readwrite");t.objectStore(ji).clear(),await new Promise(e=>t.oncomplete=e)}catch{}}const bt=i=>document.getElementById(i),Bn=bt("game"),No=new Wg({canvas:Bn,antialias:!0,powerPreference:"high-performance"});No.setPixelRatio(Math.min(devicePixelRatio,2));const en=new Xg;en.fog=new Vl(8900331,50,90);const Ke=new bn(75,1,.05,500);en.add(Ke);const{canvas:uv,texture:Rh}=n_();l_(uv);document.documentElement.style.setProperty("--dirt",`url(${g_("dirt")})`);const Lu={value:new Pt(1,1,1)},xo={uTime:{value:0},uWind:{value:.12}};function Ch(i){return i.onBeforeCompile=t=>{t.uniforms.uTint=Lu,t.uniforms.uTime=xo.uTime,t.uniforms.uWind=xo.uWind,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float blight;
attribute float sway;
uniform vec3 uTint;
uniform float uTime;
uniform float uWind;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vec4 wp = modelMatrix * vec4(position, 1.0);
float sw = (sway > 1.5 ? 0.0 : sway) * uWind;
transformed.x += sin(uTime * 1.7 + wp.x * 0.9 + wp.z * 0.6 + wp.y * 0.5) * 0.075 * sw;
transformed.z += cos(uTime * 1.3 + wp.z * 0.8 + wp.x * 0.4) * 0.075 * sw;
transformed.y += sin(uTime * 2.1 + wp.x * 0.7 + wp.z * 0.7) * 0.03 * sw;
transformed.y += (sway > 1.5 ? 1.0 : 0.0) * sin(uTime * 1.9 + wp.x * 1.2 + wp.z * 1.0) * 0.045;`).replace("#include <color_vertex>",`#include <color_vertex>
#ifdef USE_COLOR
vColor = color * uTint + vec3(1.0, 0.8, 0.5) * blight;
#endif`)},i.customProgramCacheKey=()=>"chunk-light",i}const Ph={opaque:Ch(new we({map:Rh,vertexColors:!0})),trans:Ch(new we({map:Rh,vertexColors:!0,transparent:!0,depthWrite:!1,side:fn})),tint:Lu},un={radius:6,fov:75,sens:1,vol:.5,cam:0};try{Object.assign(un,JSON.parse(localStorage.getItem("mcweb-settings")||"{}"))}catch{}const Du=()=>{try{localStorage.setItem("mcweb-settings",JSON.stringify(un))}catch{}},Lh={storm:[[j.STAR,1],[Q.COMMAND,1],[j.DIAMOND,8],[j.GOLD,12]],dragon:[[j.STAR,2],[j.PEARL,4],[j.DIAMOND,12],[j.GOLD,10]],wither:[[j.STAR,1],[j.DIAMOND,6],[j.GOLD,10]],warden:[[j.STAR,1],[j.DIAMOND,10],[j.GOLD,16]],guardian:[[j.STAR,1],[j.PEARL,1],[j.DIAMOND,6],[j.GOLD,8]]},Mo=["Primera persona","Tercera persona (detrás)","Tercera persona (delante)"],yo=new gu(new $g(new Me(1.005,1.005,1.005)),new Xl({color:0}));yo.visible=!1;en.add(yo);const Iu=(()=>{let i=12345;const t=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296,e=[];for(let n=0;n<6;n++){let s=8,r=8;const o=t()*6.28;for(let a=0;a<12;a++)s+=Math.cos(o+(t()-.5)*1.3),r+=Math.sin(o+(t()-.5)*1.3),e.push([Math.round(s),Math.round(r),a])}return Array.from({length:10},(n,s)=>{const r=document.createElement("canvas");r.width=r.height=16;const o=r.getContext("2d");o.fillStyle="rgba(0,0,0,0.8)";for(const[l,c,h]of e)h<=(s+1)*1.25&&o.fillRect(l,c,1,1);const a=new ci(r);return a.magFilter=fe,a.minFilter=fe,a.generateMipmaps=!1,a})})(),Zs=new Vt(new Me(1.01,1.01,1.01),new we({map:Iu[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));Zs.visible=!1;en.add(Zs);const Al=new we({transparent:!0,side:fn,depthTest:!1,fog:!1}),So=new Vt(new oi(.55,.55),Al),Js=new Vt(new Me(.12,.12,.5),new we({color:14264191,depthTest:!1,fog:!1})),ir=new Te;ir.add(So,Js);Ke.add(ir);So.renderOrder=Js.renderOrder=999;let Yt="menu",ae="survival",ro=un.radius,An=un.cam|0;const Xn=new Map;let Ps,wa=0,jt,ie=null,Ue=null,Rl,je,qi=null,Wn=0,Ci=0,Ss=0,Aa=0,Ra=0;const Cl=i=>6+i*4;function Ys(i){for(Ci+=i;Ci>=Cl(Wn);)Ci-=Cl(Wn),Wn++,Nt&&Nt.toast("¡Nivel "+Wn+"!"),Ee("pop")}let Dt,G,ue,Si,Ze,Rn,wn,Nt,Es=1;const Ge={left:!1,right:!1},En={key:"",progress:0};let Mn=0,$r=0,$s=0,Eo=0,Dh=-2,Ca=0,Pa=0;function Fn(i){const t=bt("overlay");if(t.classList.toggle("ingame",i==="pause"||i==="death"),!i){t.classList.add("hidden");return}t.classList.remove("hidden");for(const e of["menu","pause","death"])bt(e).classList.toggle("hidden",e!==i)}const Ee=i=>wl(i);function fv(i){for(let t=0;t<600;t+=5)for(let e=0;e<12;e++){const n=Math.round(Math.cos(e/12*Math.PI*2)*t),s=Math.round(Math.sin(e/12*Math.PI*2)*t);if(Tl(n,s,i)>Ai+3)return[n,s]}return[0,0]}function dv(i,t){for(let e=0;e<12;e++)for(let n=-e;n<=e;n++)for(let s=-e;s<=e;s++){if(Math.max(Math.abs(n),Math.abs(s))!==e)continue;const r=i+n,o=t+s,a=Dt.topY(r,o);if(a<Ai)continue;const l=Dt.getBlock(r,a,o);if((l===Q.GRASS||l===Q.SAND||l===Q.SNOW)&&!Dt.isSolid(r,a+1,o)&&!Dt.isSolid(r,a+2,o))return new L(r+.5,a+1,o+.5)}return new L(i+.5,Math.max(Dt.topY(i,t),Ai)+2,t+.5)}function Pl(i,t,e=null){const n=G.eye,s=G.lookDir();Rn.spawn(n.x+s.x*.5,n.y-.3,n.z+s.z*.5,i,t,!1);const r=Rn.list[Rn.list.length-1];r.vel.set(s.x*5,2.5,s.z*5),r.age=-1.2}function La(i,t,e,n,s=1){Ee("explode");const r=Math.ceil(n)+1;for(let c=-r;c<=r;c++)for(let h=-r;h<=r;h++)for(let u=-r;u<=r;u++){if(Math.hypot(c,h,u)>n*(.7+Math.random()*.3))continue;const p=Math.floor(i)+c,g=Math.floor(t)+h,_=Math.floor(e)+u,m=Dt.getBlock(p,g,_);if(!(m===Tn||m===Q.BEDROCK||tr[m])&&(Dt.setBlock(p,g,_,Tn),ae==="survival"&&Math.random()<.2)){const d=wu(m,null);d&&Rn.spawn(p+.5,g+.5,_+.5,d[0],d[1])}}wn.burst(i,t,e,[.5,.5,.5],40,7),wn.burst(i,t,e,[.9,.5,.1],20,6);const o=G.pos.x-i,a=G.pos.z-e,l=Math.hypot(o,G.pos.y+.9-t,a);l<n*2&&G.damage(Math.round((1-l/(n*2))*22*s),o/(Math.hypot(o,a)||1)*9,a/(Math.hypot(o,a)||1)*9);for(const c of[...Ze.list])Math.hypot(c.pos.x-i,c.pos.y-t,c.pos.z-e)<n*2&&Ze.damage(c,14,i,e)}function Ll(i){const t=Dt.getBlock(i.x,i.y,i.z);if(t===Tn||t===Q.BEDROCK)return;const e=ue.held();if(Dt.setBlock(i.x,i.y,i.z,Tn),t===Q.FURNACE){const n=i.x+","+i.y+","+i.z,s=Xn.get(n);if(s){for(const r of s.slots)r&&Rn.spawn(i.x+.5,i.y+.5,i.z+.5,r.id,r.n);Xn.delete(n)}}if((t===Q.COAL_ORE||t===Q.IRON_ORE||t===Q.GOLD_ORE||t===Q.DIAMOND_ORE)&&Ys(t===Q.DIAMOND_ORE?8:3),wn.blockBreak(i.x,i.y,i.z,t),Ee("break"),ae==="survival"){const n=wu(t,e);n&&Rn.spawn(i.x+.5,i.y+.4,i.z+.5,n[0],n[1]),Ki(e)&&Be[t].hardness>0&&(ue.wearHeld(1)&&(Ee("break"),Nt.toast("¡Se ha roto la herramienta!")),Nt.renderHotbar())}Dt.getBlock(i.x,i.y+1,i.z)===Q.CACTUS&&Be[t].cactusOk}function Ql(){const i=G.eye,t=G.lookDir(),e=Dt.raycast(i,t,ae==="creative"?7:5.5);if(Mn=Math.max(Mn,.001),e&&e.id===Q.TABLE&&!G.keys.has("ShiftLeft")){wo(3);return}if(e&&e.id===Q.FURNACE&&!G.keys.has("ShiftLeft")){const c=e.x+","+e.y+","+e.z;Xn.has(c)||Xn.set(c,{slots:[null,null,null],burn:0,burnMax:1,cook:0}),wo("furnace",Xn.get(c));return}const n=ue.held();if(!n)return;const s=Li[n.id]&&Li[n.id].food;if(s){ae==="survival"&&G.food<20&&(G.eat(s),ue.consumeHeld(1),Ee("eat"),Nt.renderHotbar());return}if(!r_(n.id)||!e)return;const r=e.x+e.normal[0],o=e.y+e.normal[1],a=e.z+e.normal[2];if(o<0||o>=cn)return;const l=Dt.getBlock(r,o,a);if(!(l!==Tn&&!tr[l])&&!(po[n.id]&&G.intersectsBlock(r,o,a))&&!(po[n.id]&&Ze.list.some(c=>Math.abs(c.pos.x-(r+.5))<c.hw+.5&&Math.abs(c.pos.z-(a+.5))<c.hw+.5&&c.pos.y<o+1&&c.pos.y+c.h>o))){if(n.id===Q.COMMAND){if(ie||Ue){Nt.toast("Ya hay una tormenta en curso");return}Dt.setBlock(r,o,a,n.id),Ee("place"),ae==="survival"&&(ue.consumeHeld(1),Nt.renderHotbar()),Mv(r,o,a);return}Dt.setBlock(r,o,a,n.id),Ee("place"),ae==="survival"&&(ue.consumeHeld(1),Nt.renderHotbar())}}function pv(i){const t=Io[i];bt("bossFill").style.background=`linear-gradient(${t.color}, #25103a)`,bt("bossbar").style.setProperty("--bc",t.color)}function tc(i,t,e,n){const s=Io[i],r=new L(t,e,n);ie=i==="storm"?new I_(en,Rl,r):s.make(en,Rl,r),pv(i),(i==="storm"||i==="dragon"||i==="wither")&&(jt.set("storm"),jt.boss=!0,jt.timer=9999),Ee("roar")}function Uu(i){if(ie||Ue)return Nt.toast("Ya hay un jefe activo"),!1;const t=Io[i],e=G.lookDir(),n=Math.hypot(e.x,e.z)||1,s=e.x/n,r=e.z/n,o=i==="warden"?12:i==="guardian"?16:i==="wither"?20:26,a=G.pos.x+s*o,l=G.pos.z+r*o;let c;if(t.ground){const h=Dt.topY(Math.floor(a),Math.floor(l));c=h>0?h+1:G.pos.y}else c=G.pos.y+(t.up===void 0?10:t.up)+(i==="storm"?10:0);return tc(i,a,c,l),Nt.toast("¡"+t.name+" ha sido invocado!"),!0}function Nu(i){const t=G.lookDir(),e=Math.hypot(t.x,t.z)||1;for(let n=6;n<=10;n+=2){const s=Math.floor(G.pos.x+t.x/e*n),r=Math.floor(G.pos.z+t.z/e*n),o=Dt.topY(s,r);if(o>0){Ze.add(i,s+.5,o+1,r+.5);return}}Ze.add(i,G.pos.x+3,G.pos.y+1,G.pos.z)}function mv(){ie&&(ie.dispose(),ie=null),Ue=null,jt.boss=!1,Ss=0,bt("bossbar").classList.add("hidden"),Nt.toast("Jefe descartado")}function sr(i){Yt==="play"&&(Yt="panel",qi=i,G.keys.clear(),Ge.left=Ge.right=!1,document.exitPointerLock(),bt(i).classList.remove("hidden"),i==="summon"?gv():_v())}function bo(i){qi&&(bt(qi).classList.add("hidden"),qi=null,i?(Yt="play",Bn.requestPointerLock()):(Yt="pause",Fn("pause")))}function gv(){bt("bossCards").innerHTML=B_.map(i=>{const t=Io[i],e=je.bosses.has(i);return`<div class="card" style="border-left:6px solid ${t.color}"><h4><span>${t.icon} ${t.name}</span><span class="tag">${t.hp} HP</span></h4><p>${t.desc}</p><button class="btn" data-boss="${i}">${e?"✔ ":""}Invocar</button></div>`}).join(""),bt("mobBtns").innerHTML=Object.keys(_o).map(i=>`<button class="btn" data-mob="${i}">${_o[i].name}</button>`).join("")}function _v(){bt("questTitle").textContent=`Misiones — ${je.completed()}/${je.total()} completadas`;let i="",t="";for(const e of _s){e.group!==t&&(t=e.group,i+=`<div class="grp">${t.toUpperCase()}</div>`);const n=je.done[e.id],s=je.progress[e.id]||0,r=e.reward.map(([o,a])=>`${a}× ${Po(o).name}`).join(", ");i+=`<div class="q ${n?"done":""}"><span class="ck">${n?"✔":"○"}</span><div><b>${e.title}</b>${e.desc}<div class="bar"><i style="width:${s/e.n*100}%"></i></div></div><div class="rw">${s}/${e.n}<br>${r}<br>+${e.xp} XP</div></div>`}bt("questList").innerHTML=i}bt("bossCards").addEventListener("click",i=>{const t=i.target.closest("[data-boss]");t&&Yt==="panel"&&(bo(!0),Uu(t.dataset.boss))});bt("mobBtns").addEventListener("click",i=>{const t=i.target.closest("[data-mob]");t&&Yt==="panel"&&(Nu(t.dataset.mob),Nt.toast(_o[t.dataset.mob].name+" invocado"))});bt("bDespawn").onclick=()=>{mv()};const Se=bt("minimap").getContext("2d"),Ih=Se.createImageData(64,64),Ou={};for(const i of Object.values(Be)){const t=Mu(i.tiles[0]);Ou[i.id]=[t[0]*255,t[1]*255,t[2]*255]}function vv(){const i=Math.floor(G.pos.x),t=Math.floor(G.pos.z),e=Ih.data;for(let s=0;s<64;s++)for(let r=0;r<64;r++){const o=i+r-32,a=t+s-32,l=Dt.topY(o,a),c=(s*64+r)*4;let h;if(l<0)h=[20,20,30];else if(l<Ai&&Dt.getBlock(o,Ai,a)===Q.WATER)h=[38+l,84+l,190];else{const u=Ou[Dt.getBlock(o,l,a)]||[90,90,90],f=Math.max(.6,Math.min(1.25,.9+(l-G.pos.y)*.012));h=[u[0]*f,u[1]*f,u[2]*f]}e[c]=h[0],e[c+1]=h[1],e[c+2]=h[2],e[c+3]=255}Se.putImageData(Ih,0,0),Se.imageSmoothingEnabled=!1,Se.drawImage(bt("minimap"),0,0,64,64,0,0,128,128);const n=(s,r,o,a)=>{const l=(s-i+32)*2,c=(r-t+32)*2;l<2||c<2||l>126||c>126||(Se.fillStyle=o,Se.fillRect(l-a,c-a,a*2,a*2))};for(const s of Ze.list)n(s.pos.x,s.pos.z,s.def.hostile?"#ff4040":"#ffffff",1.5);if(ie){const s=3+Math.sin(performance.now()/150)*1.2,r=ie.pos.x,o=ie.pos.z,a=Math.max(6,Math.min(122,(r-i+32)*2)),l=Math.max(6,Math.min(122,(o-t+32)*2));Se.fillStyle="#d050ff",Se.fillRect(a-s,l-s,s*2,s*2),Se.strokeStyle="#fff",Se.strokeRect(a-s,l-s,s*2,s*2)}Se.save(),Se.translate(64+(G.pos.x-i)*2,64+(G.pos.z-t)*2),Se.rotate(-G.yaw+Math.PI),Se.fillStyle="#fff",Se.strokeStyle="#000",Se.beginPath(),Se.moveTo(0,6),Se.lineTo(4.5,-4.5),Se.lineTo(0,-2),Se.lineTo(-4.5,-4.5),Se.closePath(),Se.fill(),Se.stroke(),Se.restore()}function xv(){bt("tracker").innerHTML=je.active(3).map(i=>`<div class="qt"><b>${i.title}</b>${i.desc} (${je.progress[i.id]||0}/${i.n})<div class="qb"><i style="width:${(je.progress[i.id]||0)/i.n*100}%"></i></div></div>`).join("")}function Mv(i,t,e){Ue={x:i,y:t,z:e,t:5,s:0},Ee("roar"),jt.set("storm"),jt.boss=!0,Nt.toast("El bloque de comandos late… ¡aléjate!")}function yv(i){if(Ue.t-=i,Ue.s-=i,jt.timer=9999,Ue.s<=0&&(Ue.s=.9,jt.strike(G,!1,{x:Ue.x,z:Ue.z}),wn.burst(Ue.x+.5,Ue.y+1,Ue.z+.5,[.7,.3,1],20,5)),Ue.t<=0){const t=Ue;Ue=null,Dt.setBlock(t.x,t.y,t.z,Tn),tc("storm",t.x+.5,t.y+14,t.z+.5),Ee("roar"),Nt.toast("¡LA TORMENTA WITHER HA DESPERTADO!")}}function Sv(){const i=G.eye,t=G.lookDir(),e=ie&&ie.raycast(i,t,7),n=Dt.raycast(i,t,7);if(e&&(!n||e.dist<n.dist)){const l=Ki(ue.held());return ie.hit(ae==="creative"?12:l?l.dmg:1,e.crit,e),Ee("hit"),e.crit&&Nt.toast("¡Golpe crítico al bloque de comandos!"),ae==="survival"&&l&&(ue.wearHeld(1),Nt.renderHotbar()),!0}const s=Ze.raycast(i,t,3.6),r=Dt.raycast(i,t,3.6);if(!s||r&&r.dist<s.dist)return!1;const o=Ki(ue.held()),a=ae==="creative"?20:o?o.dmg:1;return Ze.damage(s.mob,a,G.pos.x,G.pos.z),wn.burst(s.mob.pos.x,s.mob.pos.y+s.mob.h*.6,s.mob.pos.z,[.8,.1,.1],6,2.5),ae==="survival"&&o&&(ue.wearHeld(1),Nt.renderHotbar()),!0}function Ev(i){const t=G.eye,e=G.lookDir(),n=Dt.raycast(t,e,ae==="creative"?7:5.5);yo.visible=!!n,n&&yo.position.set(n.x+.5,n.y+.5,n.z+.5),$r=Math.max(0,$r-i),$s=Math.max(0,$s-i),Eo=Math.max(0,Eo-i);let s=0;if(Ge.left&&n){const r=n.x+","+n.y+","+n.z;if(r!==En.key&&(En.key=r,En.progress=0),Mn=Mn>0?Mn:.001,ae==="creative")$r<=0&&(Ll(n),$r=.2);else{const o=a_(n.id,ue.held())*(G.effects.fatigue>0?3:1);En.progress+=i/o,s=Math.min(1,En.progress),Math.floor(En.progress*6)!==Math.floor((En.progress-i/o)*6)&&Ee("hit"),En.progress>=1&&(Ll(n),En.key="",En.progress=0,s=0)}Zs.position.set(n.x+.5,n.y+.5,n.z+.5)}else En.key="",En.progress=0;Zs.visible=s>0,s>0&&(Zs.material.map=Iu[Math.min(9,Math.floor(s*10))]),bt("breakbar").classList.toggle("hidden",s<=0),bt("breakbar").firstElementChild.style.width=s*100+"%",Ge.right&&$s<=0&&($s=.22,Ql())}function bv(i){for(const t of Xn.values()){const[e,n,s]=t.slots,r=e&&s_[e.id],o=r&&(!s||s.id===r[0]&&s.n+r[1]<=ni(r[0]));t.burn>0&&(t.burn-=i),o?(t.burn<=0&&n&&_h[n.id]&&(t.burn=t.burnMax=_h[n.id],n.n--,n.n<=0&&(t.slots[1]=null)),t.burn>0?(t.cook+=i,t.cook>=Eu&&(t.cook=0,e.n--,e.n<=0&&(t.slots[0]=null),s?s.n+=r[1]:t.slots[2]={id:r[0],n:r[1],d:0})):t.cook=Math.max(0,t.cook-i*2)):t.cook=0}}function To(i){An=i,un.cam=i,Du(),bt("bCam").textContent="Cámara: "+Mo[i],Nt&&Nt.toast("Cámara: "+Mo[i])}function Tv(){if(G.dead){Ps.group.visible=!1;return}if(Ps.group.visible=An!==0,ir.visible=An===0,An===0)return;const i=G.eye,t=G.lookDir().multiplyScalar(An===1?-1:1),e=Dt.raycast(i,t,4.2),n=e?Math.max(.3,e.dist-.3):4.2;Ke.position.copy(i).addScaledVector(t,n),An===1?Ke.rotation.set(G.pitch,G.yaw,0,"YXZ"):Ke.rotation.set(-G.pitch,G.yaw+Math.PI,0,"YXZ")}function Fu(i){const t=ue.held(),e=t?t.id:0;Ps.setHeld(e),e!==Dh&&(Dh=e,e&&(Al.map=jl(e),Al.needsUpdate=!0),So.visible=!!e,Js.visible=!e,So.scale.setScalar(bu(e)?.7:.6)),Mn>0&&(Mn+=i*3.5,Mn>=1&&(Mn=Ge.left?.001:0));const n=Math.sin(Math.min(1,Mn)*Math.PI);ir.position.set(.5-n*.12,-.5+n*.08-Math.sin(performance.now()/400)*.004,-.85-n*.1),ir.rotation.set(-n*.9,-.35,-n*.2),e||(Js.position.set(0,-.1,-.1),Js.rotation.set(.4,0,0))}function wo(i,t=null){Yt==="play"&&(Yt="inv",G.keys.clear(),Ge.left=Ge.right=!1,document.exitPointerLock(),Nt.open(i,t))}function Uh(i){Nt.close(),i?(Yt="play",Bn.requestPointerLock()):(Yt="pause",Fn("pause"))}function ec(){Nt.renderHotbar();const i=ue.held();i&&Nt.toast(Po(i.id).name)}function wv(){Ss=0,ie&&(ie.dispose(),ie=null,jt.boss=!1,jt.set("rain"),bt("bossbar").classList.add("hidden"),Nt.toast("La tormenta se retira…")),Ue=null,Yt="dead",Ee("die"),G.keys.clear(),Ge.left=Ge.right=!1;for(let i=0;i<36;i++){const t=ue.slots[i];t&&(Rn.spawn(G.pos.x,G.pos.y+1,G.pos.z,t.id,t.n),ue.slots[i]=null)}Nt.renderHotbar(),document.exitPointerLock(),Fn("death")}async function cr(){if(!Dt)return;const i={v:1,seed:Es,mode:ae,time:Si.time,pos:G.pos.toArray(),yaw:G.yaw,pitch:G.pitch,hp:G.hp,food:G.food,spawn:G.spawn.toArray(),inv:ue.toJSON(),furnaces:[...Xn.entries()],weather:jt.toJSON(),quests:je.toJSON(),xp:{l:Wn,p:Ci}},t=[...Dt.unsaved].filter(n=>Dt.chunks.has(n)).map(n=>[n,new Uint8Array(Dt.chunks.get(n))]);await cv(i,t)&&Dt.unsaved.clear()}async function Nh({seed:i,mode:t,saved:e,meta:n}){Yt="loading",ae=t,Es=i,Fn("menu"),bt("msg").textContent="Generando mundo…";for(const o of["bContinue","bSurvival","bCreative"])bt(o).classList.add("hidden");Xn.clear(),Dt=new S_(en,Ph,Es,e),ue=new X_,G=new W_(Dt,Ke),G.mode=ae,Ps||(Ps=new __(en)),Si=new nv(en,Ke,Ph),jt=new x_(en,{world:()=>Dt,sky:()=>Si,sound:(o,a)=>wl(o,a),burst:(o,a,l)=>{wn.burst(o,a,l,[1,1,.8],24,6),wn.burst(o,a,l,[.3,.3,.35],14,4)},hurtPlayer:o=>G.damage(o),strikeMobs:(o,a)=>{for(const l of[...Ze.list])Math.hypot(l.pos.x-o,l.pos.z-a)<3.5&&Ze.damage(l,12,o,a)}}),Rl={world:()=>Dt,explode:(o,a,l,c,h)=>La(o,a,l,c,h),toast:o=>Nt.toast(o),sound:(o,a)=>wl(o,a),burst:(o,a,l,c,h,u)=>wn.burst(o,a,l,c,h,u),hurtPlayer:(o,a,l)=>G.damage(o,a,l),strikeNear:(o,a)=>jt.strike(G,!1,{x:o,z:a}),minions:()=>Ze.list.filter(o=>o.def.hostile).length,effect:(o,a)=>{ae==="survival"&&(G.effects[o]=Math.max(G.effects[o],a))},darkness:o=>{Ss=o},player:()=>G,spawnMinion:o=>{for(let a=0;a<6;a++){const l=Math.random()*Math.PI*2,c=10+Math.random()*8,h=Math.floor(G.pos.x+Math.cos(l)*c),u=Math.floor(G.pos.z+Math.sin(l)*c),f=Dt.topY(h,u);if(f>0&&!Dt.isSolid(h,f+1,u)){Ze.add(o||(Math.random()<.6?"zombie":"creeper"),h+.5,f+1,u+.5);return}}},loot:(o,a,l,c="storm")=>{for(const[h,u]of Lh[c]||Lh.storm)Rn.spawn(o,a,l,h,u)},done:()=>{const o=ie?ie.type:"storm";je.event("boss",o),Ys(100),Ee("craft"),ie=null,jt.boss=!1,Ss=0,jt.state==="storm"&&jt.set("rain"),bt("bossbar").classList.add("hidden")}},ie=null,Ue=null,qi=null,Ss=0,je=new z_({reward:o=>{for(const[a,l]of o){const c=ue.add(a,l);c&&Pl(a,c)}Nt.renderHotbar()},toast:o=>Nt.toast(o),xp:Ys,sound:Ee}),Rn=new M_(en,Dt),wn=new y_(en,Dt),Ze=new T_(en,Dt,{killed:(o,a)=>{je.event("kill",o),Ys(a)},tp:(o,a,l)=>{wn.burst(o,a,l,[.7,.2,1],14,3),Ee("pop")},hurtPlayer:(o,a,l)=>G.damage(o,a,l),explode:La,drop:(o,a,l,c,h)=>Rn.spawn(o,a,l,c,h),sound:Ee,puff:(o,a,l)=>wn.burst(o,a,l,[.9,.9,.9],12,3)}),Nt=new iv({inv:ue,player:G,getMode:()=>ae,dropItem:Pl,sound:Ee,onSelect:ec,onCraft:(o,a)=>je.event("craft",o,a)}),Wn=0,Ci=0,G.events.onHurt=()=>{Ee("hurt");const o=bt("vignette");o.classList.add("hurt"),setTimeout(()=>o.classList.remove("hurt"),120)},G.events.onStep=()=>Ee("step"),G.events.onLand=o=>Ee(o>3?"hurt":"place"),G.events.onSplash=()=>Ee("splash"),G.events.onDeath=wv;let s,r;if(n?(jt.load(n.weather),je.load(n.quests),n.xp&&(Wn=n.xp.l,Ci=n.xp.p),ue.load(n.inv),(n.furnaces||[]).forEach(([o,a])=>Xn.set(o,a)),Si.time=n.time,G.hp=n.hp,G.food=n.food,G.yaw=n.yaw,G.pitch=n.pitch,G.spawn.fromArray(n.spawn),G.pos.fromArray(n.pos),s=Math.floor(n.pos[0]),r=Math.floor(n.pos[2])):([s,r]=fv(Es),G.pos.set(s+.5,70,r+.5)),await new Promise(o=>{const a=()=>{const l=Dt.update(s,r,3,10);bt("msg").textContent="Generando mundo… "+Math.max(0,100-l*2)+"%",l>0?setTimeout(a,0):o()};a()}),n)G.vel.set(0,0,0);else{const o=dv(s,r);G.pos.copy(o),G.spawn.copy(o)}Nt.renderHotbar(),Nt.renderStats(),Fu(0),To(An),window.__game={world:Dt,player:G,inv:ue,sky:Si,mobs:Ze,drops:Rn,ui:Nt,camera:Ke,scene:en,renderer:No,get mode(){return ae},set mode(o){ae=o,G.mode=o},get state(){return Yt},set state(o){Yt=o},explode:La,saveGame:cr,openInventory:wo,mouse:Ge,useItem:Ql,breakBlock:Ll,furnaces:Xn,setCam:To,get weather(){return jt},get boss(){return ie},summon:(o,a,l)=>tc("storm",o,a,l),summonBoss:Uu,summonMob:Nu,get quests(){return je},openPanel:sr,closePanel:bo,addXp:Ys,get xp(){return[Wn,Ci]}},Yt="play",Fn(null),Bn.requestPointerLock(),setTimeout(()=>{document.pointerLockElement!==Bn&&Yt==="play"&&(Yt="pause",Fn("pause"))},1500)}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Bn?(Yt==="pause"||Yt==="play")&&(Yt="play",Fn(null)):(G&&G.keys.clear(),Ge.left=Ge.right=!1,Yt==="play"&&(Yt="pause",Fn("pause")))});document.addEventListener("mousemove",i=>{Yt!=="play"||document.pointerLockElement!==Bn||(G.yaw-=i.movementX*.0022*un.sens,G.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,G.pitch-i.movementY*.0022*un.sens)))});document.addEventListener("keydown",i=>{if(nr(),Yt==="panel"){i.code==="Escape"?bo(!1):(i.code==="KeyB"&&qi==="summon"||i.code==="KeyM"&&qi==="quests")&&bo(!0);return}if(Yt==="inv"){i.code==="KeyE"?(i.preventDefault(),Uh(!0)):i.code==="Escape"&&Uh(!1);return}if(Yt==="play"){if(i.code.startsWith("Digit")){const t=+i.code.slice(5)-1;t>=0&&t<9&&(ue.selected=t,ec());return}switch(i.code){case"KeyE":wo(2);return;case"KeyB":sr("summon");return;case"KeyM":sr("quests");return;case"F3":i.preventDefault(),bt("info").classList.toggle("hidden");return;case"KeyT":if(!i.repeat){const t=jt.cycle();Nt.toast("Clima: "+El[t])}return;case"KeyV":case"F5":i.preventDefault(),i.repeat||To((An+1)%3);return;case"KeyF":ae==="creative"&&!i.repeat&&(G.flying=!G.flying,G.vel.y=0,Nt.toast(G.flying?"Vuelo activado":"Vuelo desactivado"));return;case"KeyG":i.repeat||(ae=ae==="creative"?"survival":"creative",G.mode=ae,ae==="survival"&&(G.flying=!1),Nt.renderStats(),Nt.toast("Modo "+(ae==="creative"?"creativo":"supervivencia")));return;case"KeyQ":if(ae==="survival"&&!i.repeat){const t=ue.held();t&&(Pl(t.id,1),ue.consumeHeld(1),Nt.renderHotbar());return}break}(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),G.keys.add(i.code)}});document.addEventListener("keyup",i=>G&&G.keys.delete(i.code));document.addEventListener("wheel",i=>{Yt==="play"&&(ue.selected=(ue.selected+Math.sign(i.deltaY)+9)%9,ec())});Bn.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("mousedown",i=>{Yt!=="play"||document.pointerLockElement!==Bn||(i.button===0?(Ge.left=!0,Mn=Mn||.001,Eo<=0&&Sv()&&(Eo=.4,Ge.left=!1)):i.button===2&&(Ge.right=!0,$s=.22,Ql()))});document.addEventListener("mouseup",i=>{i.button===0&&(Ge.left=!1),i.button===2&&(Ge.right=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&Yt!=="menu"&&cr()});addEventListener("beforeunload",()=>{Dt&&Yt!=="menu"&&cr()});function Bu(){No.setSize(innerWidth,innerHeight,!1),Ke.aspect=innerWidth/innerHeight,Ke.updateProjectionMatrix()}addEventListener("resize",Bu);Bu();bt("bResume").onclick=()=>{nr(),Bn.requestPointerLock()};bt("bSave").onclick=async()=>{await cr(),location.reload()};bt("bRespawn").onclick=()=>{nr(),G.respawn(),Yt="play",Fn(null),Nt.renderStats(),Bn.requestPointerLock()};bt("bCam").onclick=()=>To((An+1)%3);bt("bPSummon").onclick=()=>{Fn(null),Yt="play",sr("summon")};bt("bPQuests").onclick=()=>{Fn(null),Yt="play",sr("quests")};const Oo=(i,t,e,n,s)=>{const r=bt(i),o=bt(t);r.value=un[e],o.textContent=n(un[e]),s&&s(un[e]),r.oninput=a=>{un[e]=+a.target.value,o.textContent=n(un[e]),s&&s(un[e]),Du()}};Oo("rRadius","vRadius","radius",i=>i,i=>ro=i);Oo("rFov","vFov","fov",i=>i);Oo("rSens","vSens","sens",i=>i.toFixed(1));Oo("rVol","vVol","vol",i=>Math.round(i*100),i=>sv(i));bt("bCam").textContent="Cámara: "+Mo[An];let Oh=performance.now(),Kr=0,Da=0,Ia=0;function zu(i){requestAnimationFrame(zu);const t=Math.min(.1,(i-Oh)/1e3);if(Oh=i,!(!Dt||Yt==="menu"||Yt==="loading")){if(Kr+=t,Da++,Kr>=.5&&(Ia=Math.round(Da/Kr),Kr=0,Da=0),Yt!=="pause"){G.update(t),Ps.update(t,G,Mn),Tv(),bv(t);const e=Math.floor(G.pos.x),n=Math.floor(G.pos.z),s=mo(e,n,Es)==="snow";jt.update(t,G,Ke,s,G.headUnder);const r=Dt.skyLit(e,Math.floor(G.pos.y+1.6),n);if(G.wind.x=jt.wind.x*1.4*r*(jt.state==="clear"?0:1),G.wind.z=jt.wind.z*1.4*r*(jt.state==="clear"?0:1),xo.uTime.value+=t,xo.uWind.value=.25+jt.wind.s*2.2,ov(jt.intensity*(.25+.75*r)*(G.headUnder?.2:1),jt.wind.s*(.3+.7*r)*(jt.state==="clear"?.25:1),jt.t*.4),Si.update(t,Ke.position,ro*16,G.headUnder,jt.wind),Dt.update(G.pos.x,G.pos.z,ro,2),G.push.x=G.push.y=G.push.z=0,Ue&&yv(t),ie&&((ie.type==="storm"||ie.type==="dragon"||ie.type==="wither")&&(jt.timer=9999,jt.boss=!0),ie.update(t,G,Dt),ie&&(bt("bossbar").classList.remove("hidden"),bt("bossFill").style.width=Math.max(0,ie.hp/ie.maxHp*100)+"%",bt("bossPhase").textContent="Fase "+ie.phase,bt("bossName").firstChild.nodeValue!==ie.name+" "&&(bt("bossName").firstChild.nodeValue=ie.name+" "))),Ze.update(t,G,ae,Si.daylight,ro),Rn.update(t,G,ue,o=>{Ee("pop"),Nt.renderHotbar(),je.event("collect",o.id,o.n)}),wn.update(t),Yt==="play"&&Ev(t),Fu(t),bt("water").classList.toggle("hidden",!G.headUnder),Ke.fov+=(un.fov+(G.keys.has("ShiftLeft")&&G.keys.has("KeyW")?7:0)-Ke.fov)*Math.min(1,t*8),Nt.isOpen&&Nt.furnace&&(Nt.furnaceBars(),wa-=t,wa<=0&&(wa=.5,Nt.render())),Ke.updateProjectionMatrix(),Pa-=t,Pa<=0){Pa=.2,Nt.renderStats();const o=(Si.time*24+6)%24,a=Math.floor(o),l=Math.floor((o-a)*60);bt("info").textContent=`${Ia} FPS · ${ae==="creative"?"Creativo":"Supervivencia"}
XYZ ${G.pos.x.toFixed(1)} ${G.pos.y.toFixed(1)} ${G.pos.z.toFixed(1)}
Bioma: ${mo(Math.floor(G.pos.x),Math.floor(G.pos.z),Es)} · ${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")}
Mobs: ${Ze.list.length} · Clima: ${El[jt.state]}${s?" (nieve)":""} · Viento ${(jt.wind.s*20).toFixed(0)} km/h${G.flying?" · [VUELO]":""}`,bt("cam").textContent="📷 "+Mo[An]+"  [V]",bt("mmInfo").textContent=`${Math.floor(G.pos.x)}, ${Math.floor(G.pos.y)}, ${Math.floor(G.pos.z)}
${String(a).padStart(2,"0")}:${String(l).padStart(2,"0")} · ${El[jt.state]}
📷 ${["1ª persona","3ª detrás","3ª delante"][An]} · ${Ia} FPS`,bt("xpFill").style.width=Ci/Cl(Wn)*100+"%",bt("xpLvl").textContent=Wn,bt("xp").style.visibility=ae==="survival"?"visible":"hidden";const c=[];G.effects.poison>0&&c.push(`<span style="border-color:#7a2">☠ Veneno ${Math.ceil(G.effects.poison)}s</span>`),G.effects.fatigue>0&&c.push(`<span style="border-color:#6cf">⛏ Fatiga ${Math.ceil(G.effects.fatigue)}s</span>`),bt("effects").innerHTML=c.join(""),bt("darkness").style.opacity=Ss}Aa-=t,Aa<=0&&(Aa=.4,vv()),Ra-=t,Ra<=0&&(Ra=.5,xv()),Ca+=t,Ca>20&&(Ca=0,cr())}No.render(en,Ke)}}requestAnimationFrame(zu);(async function(){const t=await lv();bt("msg").textContent="Elige cómo jugar",t.meta&&bt("bContinue").classList.remove("hidden");const e=async n=>{nr(),await hv(),Nh({seed:1+Math.floor(Math.random()*9e5),mode:n,saved:new Map,meta:null})};bt("bSurvival").onclick=()=>e("survival"),bt("bCreative").onclick=()=>e("creative"),bt("bContinue").onclick=()=>{nr(),Nh({seed:t.meta.seed,mode:t.meta.mode,saved:t.chunks,meta:t.meta})}})();
