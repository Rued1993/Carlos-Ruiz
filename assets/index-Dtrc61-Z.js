(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const a of o.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ph="170",Bd=0,vc=1,kd=2,su=1,ou=2,yn=3,ts=0,Mi=1,Ci=2,Tn=0,Ws=1,Go=2,_c=3,Mc=4,Hd=5,fs=100,Gd=101,Vd=102,Wd=103,Xd=104,qd=200,Yd=201,Kd=202,$d=203,Rl=204,Cl=205,jd=206,Zd=207,Jd=208,Qd=209,tp=210,ep=211,ip=212,np=213,sp=214,Ll=0,Pl=1,Dl=2,$s=3,Il=4,Nl=5,Ul=6,Ol=7,Dh=0,op=1,rp=2,An=0,ru=1,au=2,lu=3,Ma=4,ap=5,hu=6,cu=7,fu=300,js=301,Zs=302,zl=303,Fl=304,ya=306,ta=1e3,ps=1001,Bl=1002,de=1003,lp=1004,nr=1005,qi=1006,Pa=1007,bn=1008,Pn=1009,uu=1010,du=1011,Vo=1012,Ih=1013,xs=1014,En=1015,cn=1016,Nh=1017,Uh=1018,Js=1020,pu=35902,mu=1021,gu=1022,en=1023,xu=1024,vu=1025,Xs=1026,Qs=1027,_u=1028,Oh=1029,Mu=1030,zh=1031,Fh=1033,Vr=33776,Wr=33777,Xr=33778,qr=33779,kl=35840,Hl=35841,Gl=35842,Vl=35843,Wl=36196,Xl=37492,ql=37496,Yl=37808,Kl=37809,$l=37810,jl=37811,Zl=37812,Jl=37813,Ql=37814,th=37815,eh=37816,ih=37817,nh=37818,sh=37819,oh=37820,rh=37821,Yr=36492,ah=36494,lh=36495,yu=36283,hh=36284,ch=36285,fh=36286,hp=3200,cp=3201,Bh=0,fp=1,Xn="",si="srgb",oo="srgb-linear",Sa="linear",ye="srgb",Ss=7680,yc=519,up=512,dp=513,pp=514,Su=515,mp=516,gp=517,xp=518,vp=519,uh=35044,Sc="300 es",wn=2e3,ea=2001;class ro{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,a=s.length;o<a;o++)s[o].call(this,t);t.target=null}}}const fi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Kr=Math.PI/180,dh=180/Math.PI;function Kn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(fi[n&255]+fi[n>>8&255]+fi[n>>16&255]+fi[n>>24&255]+"-"+fi[t&255]+fi[t>>8&255]+"-"+fi[t>>16&15|64]+fi[t>>24&255]+"-"+fi[e&63|128]+fi[e>>8&255]+"-"+fi[e>>16&255]+fi[e>>24&255]+fi[i&255]+fi[i>>8&255]+fi[i>>16&255]+fi[i>>24&255]).toLowerCase()}function Ai(n,t,e){return Math.max(t,Math.min(e,n))}function _p(n,t){return(n%t+t)%t}function Da(n,t,e){return(1-e)*n+e*t}function hn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function we(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Nt{constructor(t=0,e=0){Nt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ai(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,a=this.y-t.y;return this.x=o*i-a*s+t.x,this.y=o*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $t{constructor(t,e,i,s,o,a,l,r,h){$t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,a,l,r,h)}set(t,e,i,s,o,a,l,r,h){const f=this.elements;return f[0]=t,f[1]=s,f[2]=l,f[3]=e,f[4]=o,f[5]=r,f[6]=i,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,a=i[0],l=i[3],r=i[6],h=i[1],f=i[4],c=i[7],u=i[2],d=i[5],p=i[8],x=s[0],g=s[3],m=s[6],y=s[1],S=s[4],v=s[7],D=s[2],T=s[5],w=s[8];return o[0]=a*x+l*y+r*D,o[3]=a*g+l*S+r*T,o[6]=a*m+l*v+r*w,o[1]=h*x+f*y+c*D,o[4]=h*g+f*S+c*T,o[7]=h*m+f*v+c*w,o[2]=u*x+d*y+p*D,o[5]=u*g+d*S+p*T,o[8]=u*m+d*v+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],a=t[4],l=t[5],r=t[6],h=t[7],f=t[8];return e*a*f-e*l*h-i*o*f+i*l*r+s*o*h-s*a*r}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],a=t[4],l=t[5],r=t[6],h=t[7],f=t[8],c=f*a-l*h,u=l*r-f*o,d=h*o-a*r,p=e*c+i*u+s*d;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=c*x,t[1]=(s*h-f*i)*x,t[2]=(l*i-s*a)*x,t[3]=u*x,t[4]=(f*e-s*r)*x,t[5]=(s*o-l*e)*x,t[6]=d*x,t[7]=(i*r-h*e)*x,t[8]=(a*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,a,l){const r=Math.cos(o),h=Math.sin(o);return this.set(i*r,i*h,-i*(r*a+h*l)+a+t,-s*h,s*r,-s*(-h*a+r*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Ia.makeScale(t,e)),this}rotate(t){return this.premultiply(Ia.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ia.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ia=new $t;function bu(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ia(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Mp(){const n=ia("canvas");return n.style.display="block",n}const bc={};function Ao(n){n in bc||(bc[n]=!0,console.warn(n))}function yp(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function Sp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function bp(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ae={enabled:!0,workingColorSpace:oo,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ye&&(n.r=Rn(n.r),n.g=Rn(n.g),n.b=Rn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ye&&(n.r=qs(n.r),n.g=qs(n.g),n.b=qs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Xn?Sa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Rn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function qs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Ec=[.64,.33,.3,.6,.15,.06],wc=[.2126,.7152,.0722],Tc=[.3127,.329],Ac=new $t().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Rc=new $t().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ae.define({[oo]:{primaries:Ec,whitePoint:Tc,transfer:Sa,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:wc,workingColorSpaceConfig:{unpackColorSpace:si},outputColorSpaceConfig:{drawingBufferColorSpace:si}},[si]:{primaries:Ec,whitePoint:Tc,transfer:ye,toXYZ:Ac,fromXYZ:Rc,luminanceCoefficients:wc,outputColorSpaceConfig:{drawingBufferColorSpace:si}}});let bs;class Ep{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{bs===void 0&&(bs=ia("canvas")),bs.width=t.width,bs.height=t.height;const i=bs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=bs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ia("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let a=0;a<o.length;a++)o[a]=Rn(o[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Rn(e[i]/255)*255):e[i]=Rn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let wp=0;class Eu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:wp++}),this.uuid=Kn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?o.push(Na(s[a].image)):o.push(Na(s[a]))}else o=Na(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Na(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Ep.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tp=0;class yi extends ro{constructor(t=yi.DEFAULT_IMAGE,e=yi.DEFAULT_MAPPING,i=ps,s=ps,o=qi,a=bn,l=en,r=Pn,h=yi.DEFAULT_ANISOTROPY,f=Xn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=Kn(),this.name="",this.source=new Eu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=r,this.offset=new Nt(0,0),this.repeat=new Nt(1,1),this.center=new Nt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new $t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==fu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ta:t.x=t.x-Math.floor(t.x);break;case ps:t.x=t.x<0?0:1;break;case Bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ta:t.y=t.y-Math.floor(t.y);break;case ps:t.y=t.y<0?0:1;break;case Bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}yi.DEFAULT_IMAGE=null;yi.DEFAULT_MAPPING=fu;yi.DEFAULT_ANISOTROPY=1;class Re{constructor(t=0,e=0,i=0,s=1){Re.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*o,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*o,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*o,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const r=t.elements,h=r[0],f=r[4],c=r[8],u=r[1],d=r[5],p=r[9],x=r[2],g=r[6],m=r[10];if(Math.abs(f-u)<.01&&Math.abs(c-x)<.01&&Math.abs(p-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(c+x)<.1&&Math.abs(p+g)<.1&&Math.abs(h+d+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(h+1)/2,v=(d+1)/2,D=(m+1)/2,T=(f+u)/4,w=(c+x)/4,R=(p+g)/4;return S>v&&S>D?S<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(S),s=T/i,o=w/i):v>D?v<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),i=T/s,o=R/s):D<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(D),i=w/o,s=R/o),this.set(i,s,o,e),this}let y=Math.sqrt((g-p)*(g-p)+(c-x)*(c-x)+(u-f)*(u-f));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(c-x)/y,this.z=(u-f)/y,this.w=Math.acos((h+d+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ap extends ro{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Re(0,0,t,e),this.scissorTest=!1,this.viewport=new Re(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:qi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new yi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Eu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Yi extends Ap{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class wu extends yi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Rp extends yi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=de,this.minFilter=de,this.wrapR=ps,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class jo{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,a,l){let r=i[s+0],h=i[s+1],f=i[s+2],c=i[s+3];const u=o[a+0],d=o[a+1],p=o[a+2],x=o[a+3];if(l===0){t[e+0]=r,t[e+1]=h,t[e+2]=f,t[e+3]=c;return}if(l===1){t[e+0]=u,t[e+1]=d,t[e+2]=p,t[e+3]=x;return}if(c!==x||r!==u||h!==d||f!==p){let g=1-l;const m=r*u+h*d+f*p+c*x,y=m>=0?1:-1,S=1-m*m;if(S>Number.EPSILON){const D=Math.sqrt(S),T=Math.atan2(D,m*y);g=Math.sin(g*T)/D,l=Math.sin(l*T)/D}const v=l*y;if(r=r*g+u*v,h=h*g+d*v,f=f*g+p*v,c=c*g+x*v,g===1-l){const D=1/Math.sqrt(r*r+h*h+f*f+c*c);r*=D,h*=D,f*=D,c*=D}}t[e]=r,t[e+1]=h,t[e+2]=f,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,s,o,a){const l=i[s],r=i[s+1],h=i[s+2],f=i[s+3],c=o[a],u=o[a+1],d=o[a+2],p=o[a+3];return t[e]=l*p+f*c+r*d-h*u,t[e+1]=r*p+f*u+h*c-l*d,t[e+2]=h*p+f*d+l*u-r*c,t[e+3]=f*p-l*c-r*u-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,a=t._order,l=Math.cos,r=Math.sin,h=l(i/2),f=l(s/2),c=l(o/2),u=r(i/2),d=r(s/2),p=r(o/2);switch(a){case"XYZ":this._x=u*f*c+h*d*p,this._y=h*d*c-u*f*p,this._z=h*f*p+u*d*c,this._w=h*f*c-u*d*p;break;case"YXZ":this._x=u*f*c+h*d*p,this._y=h*d*c-u*f*p,this._z=h*f*p-u*d*c,this._w=h*f*c+u*d*p;break;case"ZXY":this._x=u*f*c-h*d*p,this._y=h*d*c+u*f*p,this._z=h*f*p+u*d*c,this._w=h*f*c-u*d*p;break;case"ZYX":this._x=u*f*c-h*d*p,this._y=h*d*c+u*f*p,this._z=h*f*p-u*d*c,this._w=h*f*c+u*d*p;break;case"YZX":this._x=u*f*c+h*d*p,this._y=h*d*c+u*f*p,this._z=h*f*p-u*d*c,this._w=h*f*c-u*d*p;break;case"XZY":this._x=u*f*c-h*d*p,this._y=h*d*c-u*f*p,this._z=h*f*p+u*d*c,this._w=h*f*c+u*d*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],a=e[1],l=e[5],r=e[9],h=e[2],f=e[6],c=e[10],u=i+l+c;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-r)*d,this._y=(o-h)*d,this._z=(a-s)*d}else if(i>l&&i>c){const d=2*Math.sqrt(1+i-l-c);this._w=(f-r)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(o+h)/d}else if(l>c){const d=2*Math.sqrt(1+l-i-c);this._w=(o-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(r+f)/d}else{const d=2*Math.sqrt(1+c-i-l);this._w=(a-s)/d,this._x=(o+h)/d,this._y=(r+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ai(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,a=t._w,l=e._x,r=e._y,h=e._z,f=e._w;return this._x=i*f+a*l+s*h-o*r,this._y=s*f+a*r+o*l-i*h,this._z=o*f+a*h+i*r-s*l,this._w=a*f-i*l-s*r-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,a=this._w;let l=a*t._w+i*t._x+s*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=i,this._y=s,this._z=o,this;const r=1-l*l;if(r<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*o+e*this._z,this.normalize(),this}const h=Math.sqrt(r),f=Math.atan2(h,l),c=Math.sin((1-e)*f)/h,u=Math.sin(e*f)/h;return this._w=a*c+this._w*u,this._x=i*c+this._x*u,this._y=s*c+this._y*u,this._z=o*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,i=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Cc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Cc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,a=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*a,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*a,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,a=t.y,l=t.z,r=t.w,h=2*(a*s-l*i),f=2*(l*e-o*s),c=2*(o*i-a*e);return this.x=e+r*h+a*c-l*f,this.y=i+r*f+l*h-o*c,this.z=s+r*c+o*f-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,a=e.x,l=e.y,r=e.z;return this.x=s*r-o*l,this.y=o*a-i*r,this.z=i*l-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ua.copy(this).projectOnVector(t),this.sub(Ua)}reflect(t){return this.sub(Ua.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ai(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ua=new P,Cc=new jo;class Zo{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(ji.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(ji.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=ji.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=o.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,ji):ji.fromBufferAttribute(o,a),ji.applyMatrix4(t.matrixWorld),this.expandByPoint(ji);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),sr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),sr.copy(i.boundingBox)),sr.applyMatrix4(t.matrixWorld),this.union(sr)}const s=t.children;for(let o=0,a=s.length;o<a;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,ji),ji.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(mo),or.subVectors(this.max,mo),Es.subVectors(t.a,mo),ws.subVectors(t.b,mo),Ts.subVectors(t.c,mo),zn.subVectors(ws,Es),Fn.subVectors(Ts,ws),ns.subVectors(Es,Ts);let e=[0,-zn.z,zn.y,0,-Fn.z,Fn.y,0,-ns.z,ns.y,zn.z,0,-zn.x,Fn.z,0,-Fn.x,ns.z,0,-ns.x,-zn.y,zn.x,0,-Fn.y,Fn.x,0,-ns.y,ns.x,0];return!Oa(e,Es,ws,Ts,or)||(e=[1,0,0,0,1,0,0,0,1],!Oa(e,Es,ws,Ts,or))?!1:(rr.crossVectors(zn,Fn),e=[rr.x,rr.y,rr.z],Oa(e,Es,ws,Ts,or))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,ji).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(ji).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const mn=[new P,new P,new P,new P,new P,new P,new P,new P],ji=new P,sr=new Zo,Es=new P,ws=new P,Ts=new P,zn=new P,Fn=new P,ns=new P,mo=new P,or=new P,rr=new P,ss=new P;function Oa(n,t,e,i,s){for(let o=0,a=n.length-3;o<=a;o+=3){ss.fromArray(n,o);const l=s.x*Math.abs(ss.x)+s.y*Math.abs(ss.y)+s.z*Math.abs(ss.z),r=t.dot(ss),h=e.dot(ss),f=i.dot(ss);if(Math.max(-Math.max(r,h,f),Math.min(r,h,f))>l)return!1}return!0}const Cp=new Zo,go=new P,za=new P;class Jo{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):Cp.setFromPoints(t).getCenter(i);let s=0;for(let o=0,a=t.length;o<a;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;go.subVectors(t,this.center);const e=go.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(go,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(za.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(go.copy(t.center).add(za)),this.expandByPoint(go.copy(t.center).sub(za))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const gn=new P,Fa=new P,ar=new P,Bn=new P,Ba=new P,lr=new P,ka=new P;class kh{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,gn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=gn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(gn.copy(this.origin).addScaledVector(this.direction,e),gn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Fa.copy(t).add(e).multiplyScalar(.5),ar.copy(e).sub(t).normalize(),Bn.copy(this.origin).sub(Fa);const o=t.distanceTo(e)*.5,a=-this.direction.dot(ar),l=Bn.dot(this.direction),r=-Bn.dot(ar),h=Bn.lengthSq(),f=Math.abs(1-a*a);let c,u,d,p;if(f>0)if(c=a*r-l,u=a*l-r,p=o*f,c>=0)if(u>=-p)if(u<=p){const x=1/f;c*=x,u*=x,d=c*(c+a*u+2*l)+u*(a*c+u+2*r)+h}else u=o,c=Math.max(0,-(a*u+l)),d=-c*c+u*(u+2*r)+h;else u=-o,c=Math.max(0,-(a*u+l)),d=-c*c+u*(u+2*r)+h;else u<=-p?(c=Math.max(0,-(-a*o+l)),u=c>0?-o:Math.min(Math.max(-o,-r),o),d=-c*c+u*(u+2*r)+h):u<=p?(c=0,u=Math.min(Math.max(-o,-r),o),d=u*(u+2*r)+h):(c=Math.max(0,-(a*o+l)),u=c>0?o:Math.min(Math.max(-o,-r),o),d=-c*c+u*(u+2*r)+h);else u=a>0?-o:o,c=Math.max(0,-(a*u+l)),d=-c*c+u*(u+2*r)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(Fa).addScaledVector(ar,u),d}intersectSphere(t,e){gn.subVectors(t.center,this.origin);const i=gn.dot(this.direction),s=gn.dot(gn)-i*i,o=t.radius*t.radius;if(s>o)return null;const a=Math.sqrt(o-s),l=i-a,r=i+a;return r<0?null:l<0?this.at(r,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,a,l,r;const h=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),f>=0?(o=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(o=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),i>a||o>s||((o>i||isNaN(i))&&(i=o),(a<s||isNaN(s))&&(s=a),c>=0?(l=(t.min.z-u.z)*c,r=(t.max.z-u.z)*c):(l=(t.max.z-u.z)*c,r=(t.min.z-u.z)*c),i>r||l>s)||((l>i||i!==i)&&(i=l),(r<s||s!==s)&&(s=r),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,gn)!==null}intersectTriangle(t,e,i,s,o){Ba.subVectors(e,t),lr.subVectors(i,t),ka.crossVectors(Ba,lr);let a=this.direction.dot(ka),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Bn.subVectors(this.origin,t);const r=l*this.direction.dot(lr.crossVectors(Bn,lr));if(r<0)return null;const h=l*this.direction.dot(Ba.cross(Bn));if(h<0||r+h>a)return null;const f=-l*Bn.dot(ka);return f<0?null:this.at(f/a,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(t,e,i,s,o,a,l,r,h,f,c,u,d,p,x,g){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,a,l,r,h,f,c,u,d,p,x,g)}set(t,e,i,s,o,a,l,r,h,f,c,u,d,p,x,g){const m=this.elements;return m[0]=t,m[4]=e,m[8]=i,m[12]=s,m[1]=o,m[5]=a,m[9]=l,m[13]=r,m[2]=h,m[6]=f,m[10]=c,m[14]=u,m[3]=d,m[7]=p,m[11]=x,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/As.setFromMatrixColumn(t,0).length(),o=1/As.setFromMatrixColumn(t,1).length(),a=1/As.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,a=Math.cos(i),l=Math.sin(i),r=Math.cos(s),h=Math.sin(s),f=Math.cos(o),c=Math.sin(o);if(t.order==="XYZ"){const u=a*f,d=a*c,p=l*f,x=l*c;e[0]=r*f,e[4]=-r*c,e[8]=h,e[1]=d+p*h,e[5]=u-x*h,e[9]=-l*r,e[2]=x-u*h,e[6]=p+d*h,e[10]=a*r}else if(t.order==="YXZ"){const u=r*f,d=r*c,p=h*f,x=h*c;e[0]=u+x*l,e[4]=p*l-d,e[8]=a*h,e[1]=a*c,e[5]=a*f,e[9]=-l,e[2]=d*l-p,e[6]=x+u*l,e[10]=a*r}else if(t.order==="ZXY"){const u=r*f,d=r*c,p=h*f,x=h*c;e[0]=u-x*l,e[4]=-a*c,e[8]=p+d*l,e[1]=d+p*l,e[5]=a*f,e[9]=x-u*l,e[2]=-a*h,e[6]=l,e[10]=a*r}else if(t.order==="ZYX"){const u=a*f,d=a*c,p=l*f,x=l*c;e[0]=r*f,e[4]=p*h-d,e[8]=u*h+x,e[1]=r*c,e[5]=x*h+u,e[9]=d*h-p,e[2]=-h,e[6]=l*r,e[10]=a*r}else if(t.order==="YZX"){const u=a*r,d=a*h,p=l*r,x=l*h;e[0]=r*f,e[4]=x-u*c,e[8]=p*c+d,e[1]=c,e[5]=a*f,e[9]=-l*f,e[2]=-h*f,e[6]=d*c+p,e[10]=u-x*c}else if(t.order==="XZY"){const u=a*r,d=a*h,p=l*r,x=l*h;e[0]=r*f,e[4]=-c,e[8]=h*f,e[1]=u*c+x,e[5]=a*f,e[9]=d*c-p,e[2]=p*c-d,e[6]=l*f,e[10]=x*c+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Lp,t,Pp)}lookAt(t,e,i){const s=this.elements;return Ii.subVectors(t,e),Ii.lengthSq()===0&&(Ii.z=1),Ii.normalize(),kn.crossVectors(i,Ii),kn.lengthSq()===0&&(Math.abs(i.z)===1?Ii.x+=1e-4:Ii.z+=1e-4,Ii.normalize(),kn.crossVectors(i,Ii)),kn.normalize(),hr.crossVectors(Ii,kn),s[0]=kn.x,s[4]=hr.x,s[8]=Ii.x,s[1]=kn.y,s[5]=hr.y,s[9]=Ii.y,s[2]=kn.z,s[6]=hr.z,s[10]=Ii.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,a=i[0],l=i[4],r=i[8],h=i[12],f=i[1],c=i[5],u=i[9],d=i[13],p=i[2],x=i[6],g=i[10],m=i[14],y=i[3],S=i[7],v=i[11],D=i[15],T=s[0],w=s[4],R=s[8],M=s[12],_=s[1],C=s[5],N=s[9],O=s[13],H=s[2],$=s[6],q=s[10],Y=s[14],V=s[3],it=s[7],rt=s[11],xt=s[15];return o[0]=a*T+l*_+r*H+h*V,o[4]=a*w+l*C+r*$+h*it,o[8]=a*R+l*N+r*q+h*rt,o[12]=a*M+l*O+r*Y+h*xt,o[1]=f*T+c*_+u*H+d*V,o[5]=f*w+c*C+u*$+d*it,o[9]=f*R+c*N+u*q+d*rt,o[13]=f*M+c*O+u*Y+d*xt,o[2]=p*T+x*_+g*H+m*V,o[6]=p*w+x*C+g*$+m*it,o[10]=p*R+x*N+g*q+m*rt,o[14]=p*M+x*O+g*Y+m*xt,o[3]=y*T+S*_+v*H+D*V,o[7]=y*w+S*C+v*$+D*it,o[11]=y*R+S*N+v*q+D*rt,o[15]=y*M+S*O+v*Y+D*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],a=t[1],l=t[5],r=t[9],h=t[13],f=t[2],c=t[6],u=t[10],d=t[14],p=t[3],x=t[7],g=t[11],m=t[15];return p*(+o*r*c-s*h*c-o*l*u+i*h*u+s*l*d-i*r*d)+x*(+e*r*d-e*h*u+o*a*u-s*a*d+s*h*f-o*r*f)+g*(+e*h*c-e*l*d-o*a*c+i*a*d+o*l*f-i*h*f)+m*(-s*l*f-e*r*c+e*l*u+s*a*c-i*a*u+i*r*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],a=t[4],l=t[5],r=t[6],h=t[7],f=t[8],c=t[9],u=t[10],d=t[11],p=t[12],x=t[13],g=t[14],m=t[15],y=c*g*h-x*u*h+x*r*d-l*g*d-c*r*m+l*u*m,S=p*u*h-f*g*h-p*r*d+a*g*d+f*r*m-a*u*m,v=f*x*h-p*c*h+p*l*d-a*x*d-f*l*m+a*c*m,D=p*c*r-f*x*r-p*l*u+a*x*u+f*l*g-a*c*g,T=e*y+i*S+s*v+o*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=y*w,t[1]=(x*u*o-c*g*o-x*s*d+i*g*d+c*s*m-i*u*m)*w,t[2]=(l*g*o-x*r*o+x*s*h-i*g*h-l*s*m+i*r*m)*w,t[3]=(c*r*o-l*u*o-c*s*h+i*u*h+l*s*d-i*r*d)*w,t[4]=S*w,t[5]=(f*g*o-p*u*o+p*s*d-e*g*d-f*s*m+e*u*m)*w,t[6]=(p*r*o-a*g*o-p*s*h+e*g*h+a*s*m-e*r*m)*w,t[7]=(a*u*o-f*r*o+f*s*h-e*u*h-a*s*d+e*r*d)*w,t[8]=v*w,t[9]=(p*c*o-f*x*o-p*i*d+e*x*d+f*i*m-e*c*m)*w,t[10]=(a*x*o-p*l*o+p*i*h-e*x*h-a*i*m+e*l*m)*w,t[11]=(f*l*o-a*c*o-f*i*h+e*c*h+a*i*d-e*l*d)*w,t[12]=D*w,t[13]=(f*x*s-p*c*s+p*i*u-e*x*u-f*i*g+e*c*g)*w,t[14]=(p*l*s-a*x*s-p*i*r+e*x*r+a*i*g-e*l*g)*w,t[15]=(a*c*s-f*l*s+f*i*r-e*c*r-a*i*u+e*l*u)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,a=t.x,l=t.y,r=t.z,h=o*a,f=o*l;return this.set(h*a+i,h*l-s*r,h*r+s*l,0,h*l+s*r,f*l+i,f*r-s*a,0,h*r-s*l,f*r+s*a,o*r*r+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,a){return this.set(1,i,o,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,a=e._y,l=e._z,r=e._w,h=o+o,f=a+a,c=l+l,u=o*h,d=o*f,p=o*c,x=a*f,g=a*c,m=l*c,y=r*h,S=r*f,v=r*c,D=i.x,T=i.y,w=i.z;return s[0]=(1-(x+m))*D,s[1]=(d+v)*D,s[2]=(p-S)*D,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(u+m))*T,s[6]=(g+y)*T,s[7]=0,s[8]=(p+S)*w,s[9]=(g-y)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=As.set(s[0],s[1],s[2]).length();const a=As.set(s[4],s[5],s[6]).length(),l=As.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Zi.copy(this);const h=1/o,f=1/a,c=1/l;return Zi.elements[0]*=h,Zi.elements[1]*=h,Zi.elements[2]*=h,Zi.elements[4]*=f,Zi.elements[5]*=f,Zi.elements[6]*=f,Zi.elements[8]*=c,Zi.elements[9]*=c,Zi.elements[10]*=c,e.setFromRotationMatrix(Zi),i.x=o,i.y=a,i.z=l,this}makePerspective(t,e,i,s,o,a,l=wn){const r=this.elements,h=2*o/(e-t),f=2*o/(i-s),c=(e+t)/(e-t),u=(i+s)/(i-s);let d,p;if(l===wn)d=-(a+o)/(a-o),p=-2*a*o/(a-o);else if(l===ea)d=-a/(a-o),p=-a*o/(a-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return r[0]=h,r[4]=0,r[8]=c,r[12]=0,r[1]=0,r[5]=f,r[9]=u,r[13]=0,r[2]=0,r[6]=0,r[10]=d,r[14]=p,r[3]=0,r[7]=0,r[11]=-1,r[15]=0,this}makeOrthographic(t,e,i,s,o,a,l=wn){const r=this.elements,h=1/(e-t),f=1/(i-s),c=1/(a-o),u=(e+t)*h,d=(i+s)*f;let p,x;if(l===wn)p=(a+o)*c,x=-2*c;else if(l===ea)p=o*c,x=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return r[0]=2*h,r[4]=0,r[8]=0,r[12]=-u,r[1]=0,r[5]=2*f,r[9]=0,r[13]=-d,r[2]=0,r[6]=0,r[10]=x,r[14]=-p,r[3]=0,r[7]=0,r[11]=0,r[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const As=new P,Zi=new Ne,Lp=new P(0,0,0),Pp=new P(1,1,1),kn=new P,hr=new P,Ii=new P,Lc=new Ne,Pc=new jo;class on{constructor(t=0,e=0,i=0,s=on.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],a=s[4],l=s[8],r=s[1],h=s[5],f=s[9],c=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Ai(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,o)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ai(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(r,h)):(this._y=Math.atan2(-c,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ai(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(r,o));break;case"ZYX":this._y=Math.asin(-Ai(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(r,o)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Ai(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-c,o)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-Ai(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Lc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Lc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Pc.setFromEuler(this),this.setFromQuaternion(Pc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}on.DEFAULT_ORDER="XYZ";class Tu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Dp=0;const Dc=new P,Rs=new jo,xn=new Ne,cr=new P,xo=new P,Ip=new P,Np=new jo,Ic=new P(1,0,0),Nc=new P(0,1,0),Uc=new P(0,0,1),Oc={type:"added"},Up={type:"removed"},Cs={type:"childadded",child:null},Ha={type:"childremoved",child:null};class Ke extends ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Dp++}),this.uuid=Kn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ke.DEFAULT_UP.clone();const t=new P,e=new on,i=new jo,s=new P(1,1,1);function o(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new $t}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=Ke.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Tu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(t,e){return Rs.setFromAxisAngle(t,e),this.quaternion.premultiply(Rs),this}rotateX(t){return this.rotateOnAxis(Ic,t)}rotateY(t){return this.rotateOnAxis(Nc,t)}rotateZ(t){return this.rotateOnAxis(Uc,t)}translateOnAxis(t,e){return Dc.copy(t).applyQuaternion(this.quaternion),this.position.add(Dc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Ic,t)}translateY(t){return this.translateOnAxis(Nc,t)}translateZ(t){return this.translateOnAxis(Uc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?cr.copy(t):cr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?xn.lookAt(xo,cr,this.up):xn.lookAt(cr,xo,this.up),this.quaternion.setFromRotationMatrix(xn),s&&(xn.extractRotation(s.matrixWorld),Rs.setFromRotationMatrix(xn),this.quaternion.premultiply(Rs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Oc),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Up),Ha.child=t,this.dispatchEvent(Ha),Ha.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Oc),Cs.child=t,this.dispatchEvent(Cs),Cs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,t,Ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(xo,Np,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,a=s.length;o<a;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,r){return l[r.uuid]===void 0&&(l[r.uuid]=r.toJSON(t)),r.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const r=l.shapes;if(Array.isArray(r))for(let h=0,f=r.length;h<f;h++){const c=r[h];o(t.shapes,c)}else o(t.shapes,r)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let r=0,h=this.material.length;r<h;r++)l.push(o(t.materials,this.material[r]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const r=this.animations[l];s.animations.push(o(t.animations,r))}}if(e){const l=a(t.geometries),r=a(t.materials),h=a(t.textures),f=a(t.images),c=a(t.shapes),u=a(t.skeletons),d=a(t.animations),p=a(t.nodes);l.length>0&&(i.geometries=l),r.length>0&&(i.materials=r),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),p.length>0&&(i.nodes=p)}return i.object=s,i;function a(l){const r=[];for(const h in l){const f=l[h];delete f.metadata,r.push(f)}return r}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Ke.DEFAULT_UP=new P(0,1,0);Ke.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ke.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ji=new P,vn=new P,Ga=new P,_n=new P,Ls=new P,Ps=new P,zc=new P,Va=new P,Wa=new P,Xa=new P,qa=new Re,Ya=new Re,Ka=new Re;class zi{constructor(t=new P,e=new P,i=new P){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Ji.subVectors(t,e),s.cross(Ji);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Ji.subVectors(s,e),vn.subVectors(i,e),Ga.subVectors(t,e);const a=Ji.dot(Ji),l=Ji.dot(vn),r=Ji.dot(Ga),h=vn.dot(vn),f=vn.dot(Ga),c=a*h-l*l;if(c===0)return o.set(0,0,0),null;const u=1/c,d=(h*r-l*f)*u,p=(a*f-l*r)*u;return o.set(1-d-p,p,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,_n)===null?!1:_n.x>=0&&_n.y>=0&&_n.x+_n.y<=1}static getInterpolation(t,e,i,s,o,a,l,r){return this.getBarycoord(t,e,i,s,_n)===null?(r.x=0,r.y=0,"z"in r&&(r.z=0),"w"in r&&(r.w=0),null):(r.setScalar(0),r.addScaledVector(o,_n.x),r.addScaledVector(a,_n.y),r.addScaledVector(l,_n.z),r)}static getInterpolatedAttribute(t,e,i,s,o,a){return qa.setScalar(0),Ya.setScalar(0),Ka.setScalar(0),qa.fromBufferAttribute(t,e),Ya.fromBufferAttribute(t,i),Ka.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(qa,o.x),a.addScaledVector(Ya,o.y),a.addScaledVector(Ka,o.z),a}static isFrontFacing(t,e,i,s){return Ji.subVectors(i,e),vn.subVectors(t,e),Ji.cross(vn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ji.subVectors(this.c,this.b),vn.subVectors(this.a,this.b),Ji.cross(vn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return zi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return zi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return zi.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return zi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return zi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let a,l;Ls.subVectors(s,i),Ps.subVectors(o,i),Va.subVectors(t,i);const r=Ls.dot(Va),h=Ps.dot(Va);if(r<=0&&h<=0)return e.copy(i);Wa.subVectors(t,s);const f=Ls.dot(Wa),c=Ps.dot(Wa);if(f>=0&&c<=f)return e.copy(s);const u=r*c-f*h;if(u<=0&&r>=0&&f<=0)return a=r/(r-f),e.copy(i).addScaledVector(Ls,a);Xa.subVectors(t,o);const d=Ls.dot(Xa),p=Ps.dot(Xa);if(p>=0&&d<=p)return e.copy(o);const x=d*h-r*p;if(x<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(i).addScaledVector(Ps,l);const g=f*p-d*c;if(g<=0&&c-f>=0&&d-p>=0)return zc.subVectors(o,s),l=(c-f)/(c-f+(d-p)),e.copy(s).addScaledVector(zc,l);const m=1/(g+x+u);return a=x*m,l=u*m,e.copy(i).addScaledVector(Ls,a).addScaledVector(Ps,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Au={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hn={h:0,s:0,l:0},fr={h:0,s:0,l:0};function $a(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class St{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=si){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ae.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ae.workingColorSpace){return this.r=t,this.g=e,this.b=i,ae.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ae.workingColorSpace){if(t=_p(t,1),e=Ai(e,0,1),i=Ai(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,a=2*i-o;this.r=$a(a,o,t+1/3),this.g=$a(a,o,t),this.b=$a(a,o,t-1/3)}return ae.toWorkingColorSpace(this,s),this}setStyle(t,e=si){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],a=o.length;if(a===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=si){const i=Au[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Rn(t.r),this.g=Rn(t.g),this.b=Rn(t.b),this}copyLinearToSRGB(t){return this.r=qs(t.r),this.g=qs(t.g),this.b=qs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=si){return ae.fromWorkingColorSpace(ui.copy(this),t),Math.round(Ai(ui.r*255,0,255))*65536+Math.round(Ai(ui.g*255,0,255))*256+Math.round(Ai(ui.b*255,0,255))}getHexString(t=si){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ae.workingColorSpace){ae.fromWorkingColorSpace(ui.copy(this),e);const i=ui.r,s=ui.g,o=ui.b,a=Math.max(i,s,o),l=Math.min(i,s,o);let r,h;const f=(l+a)/2;if(l===a)r=0,h=0;else{const c=a-l;switch(h=f<=.5?c/(a+l):c/(2-a-l),a){case i:r=(s-o)/c+(s<o?6:0);break;case s:r=(o-i)/c+2;break;case o:r=(i-s)/c+4;break}r/=6}return t.h=r,t.s=h,t.l=f,t}getRGB(t,e=ae.workingColorSpace){return ae.fromWorkingColorSpace(ui.copy(this),e),t.r=ui.r,t.g=ui.g,t.b=ui.b,t}getStyle(t=si){ae.fromWorkingColorSpace(ui.copy(this),t);const e=ui.r,i=ui.g,s=ui.b;return t!==si?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Hn),this.setHSL(Hn.h+t,Hn.s+e,Hn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Hn),t.getHSL(fr);const i=Da(Hn.h,fr.h,e),s=Da(Hn.s,fr.s,e),o=Da(Hn.l,fr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ui=new St;St.NAMES=Au;let Op=0;class Nn extends ro{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Op++}),this.uuid=Kn(),this.name="",this.blending=Ws,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Rl,this.blendDst=Cl,this.blendEquation=fs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=$s,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ss,this.stencilZFail=Ss,this.stencilZPass=Ss,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Ws&&(i.blending=this.blending),this.side!==ts&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Rl&&(i.blendSrc=this.blendSrc),this.blendDst!==Cl&&(i.blendDst=this.blendDst),this.blendEquation!==fs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==$s&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ss&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ss&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ss&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const a=[];for(const l in o){const r=o[l];delete r.metadata,a.push(r)}return a}if(e){const o=s(t.textures),a=s(t.images);o.length>0&&(i.textures=o),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class be extends Nn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const We=new P,ur=new Nt;class Si{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=uh,this.updateRanges=[],this.gpuType=En,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)ur.fromBufferAttribute(this,e),ur.applyMatrix3(t),this.setXY(e,ur.x,ur.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix3(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyMatrix4(t),this.setXYZ(e,We.x,We.y,We.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.applyNormalMatrix(t),this.setXYZ(e,We.x,We.y,We.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)We.fromBufferAttribute(this,e),We.transformDirection(t),this.setXYZ(e,We.x,We.y,We.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=hn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=hn(e,this.array)),e}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=hn(e,this.array)),e}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=hn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=hn(e,this.array)),e}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),o=we(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==uh&&(t.usage=this.usage),t}}class Ru extends Si{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Cu extends Si{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ae extends Si{constructor(t,e,i){super(new Float32Array(t),e,i)}}let zp=0;const Vi=new Ne,ja=new Ke,Ds=new P,Ni=new Zo,vo=new Zo,ei=new P;class je extends ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=Kn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(bu(t)?Cu:Ru)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new $t().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Vi.makeRotationFromQuaternion(t),this.applyMatrix4(Vi),this}rotateX(t){return Vi.makeRotationX(t),this.applyMatrix4(Vi),this}rotateY(t){return Vi.makeRotationY(t),this.applyMatrix4(Vi),this}rotateZ(t){return Vi.makeRotationZ(t),this.applyMatrix4(Vi),this}translate(t,e,i){return Vi.makeTranslation(t,e,i),this.applyMatrix4(Vi),this}scale(t,e,i){return Vi.makeScale(t,e,i),this.applyMatrix4(Vi),this}lookAt(t){return ja.lookAt(t),ja.updateMatrix(),this.applyMatrix4(ja.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ds).negate(),this.translate(Ds.x,Ds.y,Ds.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Ae(i,3))}else{for(let i=0,s=e.count;i<s;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Zo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Ni.setFromBufferAttribute(o),this.morphTargetsRelative?(ei.addVectors(this.boundingBox.min,Ni.min),this.boundingBox.expandByPoint(ei),ei.addVectors(this.boundingBox.max,Ni.max),this.boundingBox.expandByPoint(ei)):(this.boundingBox.expandByPoint(Ni.min),this.boundingBox.expandByPoint(Ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Jo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const i=this.boundingSphere.center;if(Ni.setFromBufferAttribute(t),e)for(let o=0,a=e.length;o<a;o++){const l=e[o];vo.setFromBufferAttribute(l),this.morphTargetsRelative?(ei.addVectors(Ni.min,vo.min),Ni.expandByPoint(ei),ei.addVectors(Ni.max,vo.max),Ni.expandByPoint(ei)):(Ni.expandByPoint(vo.min),Ni.expandByPoint(vo.max))}Ni.getCenter(i);let s=0;for(let o=0,a=t.count;o<a;o++)ei.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(ei));if(e)for(let o=0,a=e.length;o<a;o++){const l=e[o],r=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)ei.fromBufferAttribute(l,h),r&&(Ds.fromBufferAttribute(t,h),ei.add(Ds)),s=Math.max(s,i.distanceToSquared(ei))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Si(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],r=[];for(let R=0;R<i.count;R++)l[R]=new P,r[R]=new P;const h=new P,f=new P,c=new P,u=new Nt,d=new Nt,p=new Nt,x=new P,g=new P;function m(R,M,_){h.fromBufferAttribute(i,R),f.fromBufferAttribute(i,M),c.fromBufferAttribute(i,_),u.fromBufferAttribute(o,R),d.fromBufferAttribute(o,M),p.fromBufferAttribute(o,_),f.sub(h),c.sub(h),d.sub(u),p.sub(u);const C=1/(d.x*p.y-p.x*d.y);isFinite(C)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(c,-d.y).multiplyScalar(C),g.copy(c).multiplyScalar(d.x).addScaledVector(f,-p.x).multiplyScalar(C),l[R].add(x),l[M].add(x),l[_].add(x),r[R].add(g),r[M].add(g),r[_].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:t.count}]);for(let R=0,M=y.length;R<M;++R){const _=y[R],C=_.start,N=_.count;for(let O=C,H=C+N;O<H;O+=3)m(t.getX(O+0),t.getX(O+1),t.getX(O+2))}const S=new P,v=new P,D=new P,T=new P;function w(R){D.fromBufferAttribute(s,R),T.copy(D);const M=l[R];S.copy(M),S.sub(D.multiplyScalar(D.dot(M))).normalize(),v.crossVectors(T,M);const C=v.dot(r[R])<0?-1:1;a.setXYZW(R,S.x,S.y,S.z,C)}for(let R=0,M=y.length;R<M;++R){const _=y[R],C=_.start,N=_.count;for(let O=C,H=C+N;O<H;O+=3)w(t.getX(O+0)),w(t.getX(O+1)),w(t.getX(O+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Si(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new P,o=new P,a=new P,l=new P,r=new P,h=new P,f=new P,c=new P;if(t)for(let u=0,d=t.count;u<d;u+=3){const p=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),f.subVectors(a,o),c.subVectors(s,o),f.cross(c),l.fromBufferAttribute(i,p),r.fromBufferAttribute(i,x),h.fromBufferAttribute(i,g),l.add(f),r.add(f),h.add(f),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(x,r.x,r.y,r.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),o.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,o),c.subVectors(s,o),f.cross(c),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ei.fromBufferAttribute(t,e),ei.normalize(),t.setXYZ(e,ei.x,ei.y,ei.z)}toNonIndexed(){function t(l,r){const h=l.array,f=l.itemSize,c=l.normalized,u=new h.constructor(r.length*f);let d=0,p=0;for(let x=0,g=r.length;x<g;x++){l.isInterleavedBufferAttribute?d=r[x]*l.data.stride+l.offset:d=r[x]*f;for(let m=0;m<f;m++)u[p++]=h[d++]}return new Si(u,f,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new je,i=this.index.array,s=this.attributes;for(const l in s){const r=s[l],h=t(r,i);e.setAttribute(l,h)}const o=this.morphAttributes;for(const l in o){const r=[],h=o[l];for(let f=0,c=h.length;f<c;f++){const u=h[f],d=t(u,i);r.push(d)}e.morphAttributes[l]=r}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,r=a.length;l<r;l++){const h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const r=this.parameters;for(const h in r)r[h]!==void 0&&(t[h]=r[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const r in i){const h=i[r];t.data.attributes[r]=h.toJSON(t.data)}const s={};let o=!1;for(const r in this.morphAttributes){const h=this.morphAttributes[r],f=[];for(let c=0,u=h.length;c<u;c++){const d=h[c];f.push(d.toJSON(t.data))}f.length>0&&(s[r]=f,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const f=s[h];this.setAttribute(h,f.clone(e))}const o=t.morphAttributes;for(const h in o){const f=[],c=o[h];for(let u=0,d=c.length;u<d;u++)f.push(c[u].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,f=a.length;h<f;h++){const c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const r=t.boundingSphere;return r!==null&&(this.boundingSphere=r.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Fc=new Ne,os=new kh,dr=new Jo,Bc=new P,pr=new P,mr=new P,gr=new P,Za=new P,xr=new P,kc=new P,vr=new P;class At extends Ke{constructor(t=new je,e=new be){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(o&&l){xr.set(0,0,0);for(let r=0,h=o.length;r<h;r++){const f=l[r],c=o[r];f!==0&&(Za.fromBufferAttribute(c,t),a?xr.addScaledVector(Za,f):xr.addScaledVector(Za.sub(e),f))}e.add(xr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),dr.copy(i.boundingSphere),dr.applyMatrix4(o),os.copy(t.ray).recast(t.near),!(dr.containsPoint(os.origin)===!1&&(os.intersectSphere(dr,Bc)===null||os.origin.distanceToSquared(Bc)>(t.far-t.near)**2))&&(Fc.copy(o).invert(),os.copy(t.ray).applyMatrix4(Fc),!(i.boundingBox!==null&&os.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,os)))}_computeIntersections(t,e,i){let s;const o=this.geometry,a=this.material,l=o.index,r=o.attributes.position,h=o.attributes.uv,f=o.attributes.uv1,c=o.attributes.normal,u=o.groups,d=o.drawRange;if(l!==null)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],y=Math.max(g.start,d.start),S=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,D=S;v<D;v+=3){const T=l.getX(v),w=l.getX(v+1),R=l.getX(v+2);s=_r(this,m,t,i,h,f,c,T,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const y=l.getX(g),S=l.getX(g+1),v=l.getX(g+2);s=_r(this,a,t,i,h,f,c,y,S,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(r!==void 0)if(Array.isArray(a))for(let p=0,x=u.length;p<x;p++){const g=u[p],m=a[g.materialIndex],y=Math.max(g.start,d.start),S=Math.min(r.count,Math.min(g.start+g.count,d.start+d.count));for(let v=y,D=S;v<D;v+=3){const T=v,w=v+1,R=v+2;s=_r(this,m,t,i,h,f,c,T,w,R),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const p=Math.max(0,d.start),x=Math.min(r.count,d.start+d.count);for(let g=p,m=x;g<m;g+=3){const y=g,S=g+1,v=g+2;s=_r(this,a,t,i,h,f,c,y,S,v),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function Fp(n,t,e,i,s,o,a,l){let r;if(t.side===Mi?r=i.intersectTriangle(a,o,s,!0,l):r=i.intersectTriangle(s,o,a,t.side===ts,l),r===null)return null;vr.copy(l),vr.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(vr);return h<e.near||h>e.far?null:{distance:h,point:vr.clone(),object:n}}function _r(n,t,e,i,s,o,a,l,r,h){n.getVertexPosition(l,pr),n.getVertexPosition(r,mr),n.getVertexPosition(h,gr);const f=Fp(n,t,e,i,pr,mr,gr,kc);if(f){const c=new P;zi.getBarycoord(kc,pr,mr,gr,c),s&&(f.uv=zi.getInterpolatedAttribute(s,l,r,h,c,new Nt)),o&&(f.uv1=zi.getInterpolatedAttribute(o,l,r,h,c,new Nt)),a&&(f.normal=zi.getInterpolatedAttribute(a,l,r,h,c,new P),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:l,b:r,c:h,normal:new P,materialIndex:0};zi.getNormal(pr,mr,gr,u.normal),f.face=u,f.barycoord=c}return f}class Jt extends je{constructor(t=1,e=1,i=1,s=1,o=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:a};const l=this;s=Math.floor(s),o=Math.floor(o),a=Math.floor(a);const r=[],h=[],f=[],c=[];let u=0,d=0;p("z","y","x",-1,-1,i,e,t,a,o,0),p("z","y","x",1,-1,i,e,-t,a,o,1),p("x","z","y",1,1,t,i,e,s,a,2),p("x","z","y",1,-1,t,i,-e,s,a,3),p("x","y","z",1,-1,t,e,i,s,o,4),p("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(r),this.setAttribute("position",new Ae(h,3)),this.setAttribute("normal",new Ae(f,3)),this.setAttribute("uv",new Ae(c,2));function p(x,g,m,y,S,v,D,T,w,R,M){const _=v/w,C=D/R,N=v/2,O=D/2,H=T/2,$=w+1,q=R+1;let Y=0,V=0;const it=new P;for(let rt=0;rt<q;rt++){const xt=rt*C-O;for(let qt=0;qt<$;qt++){const me=qt*_-N;it[x]=me*y,it[g]=xt*S,it[m]=H,h.push(it.x,it.y,it.z),it[x]=0,it[g]=0,it[m]=T>0?1:-1,f.push(it.x,it.y,it.z),c.push(qt/w),c.push(1-rt/R),Y+=1}}for(let rt=0;rt<R;rt++)for(let xt=0;xt<w;xt++){const qt=u+xt+$*rt,me=u+xt+$*(rt+1),j=u+(xt+1)+$*(rt+1),at=u+(xt+1)+$*rt;r.push(qt,me,at),r.push(me,j,at),V+=6}l.addGroup(d,V,M),d+=V,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function to(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function vi(n){const t={};for(let e=0;e<n.length;e++){const i=to(n[e]);for(const s in i)t[s]=i[s]}return t}function Bp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Lu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ae.workingColorSpace}const Wo={clone:to,merge:vi};var kp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Hp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mi extends Nn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=kp,this.fragmentShader=Hp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=to(t.uniforms),this.uniformsGroups=Bp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class Pu extends Ke{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Gn=new P,Hc=new Nt,Gc=new Nt;class Oi extends Pu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=dh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Kr*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return dh*2*Math.atan(Math.tan(Kr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Gn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z),Gn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Gn.x,Gn.y).multiplyScalar(-t/Gn.z)}getViewSize(t,e){return this.getViewBounds(t,Hc,Gc),e.subVectors(Gc,Hc)}setViewOffset(t,e,i,s,o,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Kr*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const r=a.fullWidth,h=a.fullHeight;o+=a.offsetX*s/r,e-=a.offsetY*i/h,s*=a.width/r,i*=a.height/h}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Is=-90,Ns=1;class Gp extends Ke{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Oi(Is,Ns,t,e);s.layers=this.layers,this.add(s);const o=new Oi(Is,Ns,t,e);o.layers=this.layers,this.add(o);const a=new Oi(Is,Ns,t,e);a.layers=this.layers,this.add(a);const l=new Oi(Is,Ns,t,e);l.layers=this.layers,this.add(l);const r=new Oi(Is,Ns,t,e);r.layers=this.layers,this.add(r);const h=new Oi(Is,Ns,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,a,l,r]=e;for(const h of e)this.remove(h);if(t===wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),r.up.set(0,1,0),r.lookAt(0,0,-1);else if(t===ea)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),r.up.set(0,-1,0),r.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,a,l,r,h,f]=this.children,c=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,l),t.setRenderTarget(i,3,s),t.render(e,r),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(c,u,d),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Du extends yi{constructor(t,e,i,s,o,a,l,r,h,f){t=t!==void 0?t:[],e=e!==void 0?e:js,super(t,e,i,s,o,a,l,r,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Vp extends Yi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Du(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:qi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),o=new mi({name:"CubemapFromEquirect",uniforms:to(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mi,blending:Tn});o.uniforms.tEquirect.value=e;const a=new At(s,o),l=e.minFilter;return e.minFilter===bn&&(e.minFilter=qi),new Gp(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(o)}}const Ja=new P,Wp=new P,Xp=new $t;class hs{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=Ja.subVectors(i,e).cross(Wp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(Ja),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Xp.getNormalMatrix(t),s=this.coplanarPoint(Ja).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const rs=new Jo,Mr=new P;class Hh{constructor(t=new hs,e=new hs,i=new hs,s=new hs,o=new hs,a=new hs){this.planes=[t,e,i,s,o,a]}set(t,e,i,s,o,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(o),l[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=wn){const i=this.planes,s=t.elements,o=s[0],a=s[1],l=s[2],r=s[3],h=s[4],f=s[5],c=s[6],u=s[7],d=s[8],p=s[9],x=s[10],g=s[11],m=s[12],y=s[13],S=s[14],v=s[15];if(i[0].setComponents(r-o,u-h,g-d,v-m).normalize(),i[1].setComponents(r+o,u+h,g+d,v+m).normalize(),i[2].setComponents(r+a,u+f,g+p,v+y).normalize(),i[3].setComponents(r-a,u-f,g-p,v-y).normalize(),i[4].setComponents(r-l,u-c,g-x,v-S).normalize(),e===wn)i[5].setComponents(r+l,u+c,g+x,v+S).normalize();else if(e===ea)i[5].setComponents(l,c,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),rs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),rs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(rs)}intersectsSprite(t){return rs.center.set(0,0,0),rs.radius=.7071067811865476,rs.applyMatrix4(t.matrixWorld),this.intersectsSphere(rs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Mr.x=s.normal.x>0?t.max.x:t.min.x,Mr.y=s.normal.y>0?t.max.y:t.min.y,Mr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Mr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Iu(){let n=null,t=!1,e=null,i=null;function s(o,a){e(o,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function qp(n){const t=new WeakMap;function e(l,r){const h=l.array,f=l.usage,c=h.byteLength,u=n.createBuffer();n.bindBuffer(r,u),n.bufferData(r,h,f),l.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:c}}function i(l,r,h){const f=r.array,c=r.updateRanges;if(n.bindBuffer(h,l),c.length===0)n.bufferSubData(h,0,f);else{c.sort((d,p)=>d.start-p.start);let u=0;for(let d=1;d<c.length;d++){const p=c[u],x=c[d];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++u,c[u]=x)}c.length=u+1;for(let d=0,p=c.length;d<p;d++){const x=c[d];n.bufferSubData(h,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}r.clearUpdateRanges()}r.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const r=t.get(l);r&&(n.deleteBuffer(r.buffer),t.delete(l))}function a(l,r){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,r));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,r),h.version=l.version}}return{get:s,remove:o,update:a}}class Cn extends je{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,a=e/2,l=Math.floor(i),r=Math.floor(s),h=l+1,f=r+1,c=t/l,u=e/r,d=[],p=[],x=[],g=[];for(let m=0;m<f;m++){const y=m*u-a;for(let S=0;S<h;S++){const v=S*c-o;p.push(v,-y,0),x.push(0,0,1),g.push(S/l),g.push(1-m/r)}}for(let m=0;m<r;m++)for(let y=0;y<l;y++){const S=y+h*m,v=y+h*(m+1),D=y+1+h*(m+1),T=y+1+h*m;d.push(S,v,T),d.push(v,D,T)}this.setIndex(d),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Cn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Kp=`#ifdef USE_ALPHAHASH
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
#endif`,$p=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,jp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
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
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,e0=`#ifdef USE_BATCHING
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
#endif`,i0=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,n0=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,s0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,o0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,r0=`#ifdef USE_IRIDESCENCE
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
#endif`,a0=`#ifdef USE_BUMPMAP
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,h0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,f0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,u0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,m0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,g0=`#define PI 3.141592653589793
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
} // validated`,x0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,v0=`vec3 transformedNormal = objectNormal;
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
#endif`,_0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,M0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,S0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b0="gl_FragColor = linearToOutputTexel( gl_FragColor );",E0=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,w0=`#ifdef USE_ENVMAP
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
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,A0=`#ifdef USE_ENVMAP
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
#endif`,R0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,L0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,D0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,I0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,N0=`#ifdef USE_GRADIENTMAP
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
}`,U0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,z0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,F0=`uniform bool receiveShadow;
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
#endif`,B0=`#ifdef USE_ENVMAP
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
#endif`,k0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,G0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,V0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,W0=`PhysicalMaterial material;
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
#endif`,X0=`struct PhysicalMaterial {
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
}`,q0=`
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
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
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
#endif`,K0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,j0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Z0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,J0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Q0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,tm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,em=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,im=`#if defined( USE_POINTS_UV )
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
#endif`,nm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,rm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,am=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lm=`#ifdef USE_MORPHTARGETS
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
#endif`,hm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,fm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,um=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,pm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mm=`#ifdef USE_NORMALMAP
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
#endif`,gm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_m=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ym=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Sm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Em=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Am=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Cm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Pm=`float getShadowMask() {
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
}`,Dm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Im=`#ifdef USE_SKINNING
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
#endif`,Nm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Um=`#ifdef USE_SKINNING
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
#endif`,Om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,zm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Fm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,km=`#ifdef USE_TRANSMISSION
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
#endif`,Hm=`#ifdef USE_TRANSMISSION
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
#endif`,Gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ym=`uniform sampler2D t2D;
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
}`,Km=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,$m=`#ifdef ENVMAP_TYPE_CUBE
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jm=`#include <common>
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
}`,Qm=`#if DEPTH_PACKING == 3200
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
}`,tg=`#define DISTANCE
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
}`,eg=`#define DISTANCE
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
}`,ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,ng=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sg=`uniform float scale;
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
}`,og=`uniform vec3 diffuse;
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
}`,rg=`#include <common>
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
}`,ag=`uniform vec3 diffuse;
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
}`,lg=`#define LAMBERT
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
}`,hg=`#define LAMBERT
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
}`,cg=`#define MATCAP
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
}`,fg=`#define MATCAP
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
}`,ug=`#define NORMAL
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
}`,dg=`#define NORMAL
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
}`,pg=`#define PHONG
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
}`,mg=`#define PHONG
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
}`,gg=`#define STANDARD
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
}`,xg=`#define STANDARD
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
}`,vg=`#define TOON
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
}`,_g=`#define TOON
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
}`,Mg=`uniform float size;
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
}`,yg=`uniform vec3 diffuse;
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
}`,Sg=`#include <common>
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
}`,bg=`uniform vec3 color;
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
}`,Eg=`uniform float rotation;
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
}`,wg=`uniform vec3 diffuse;
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
}`,Zt={alphahash_fragment:Yp,alphahash_pars_fragment:Kp,alphamap_fragment:$p,alphamap_pars_fragment:jp,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:t0,batching_pars_vertex:e0,batching_vertex:i0,begin_vertex:n0,beginnormal_vertex:s0,bsdfs:o0,iridescence_fragment:r0,bumpmap_pars_fragment:a0,clipping_planes_fragment:l0,clipping_planes_pars_fragment:h0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:f0,color_fragment:u0,color_pars_fragment:d0,color_pars_vertex:p0,color_vertex:m0,common:g0,cube_uv_reflection_fragment:x0,defaultnormal_vertex:v0,displacementmap_pars_vertex:_0,displacementmap_vertex:M0,emissivemap_fragment:y0,emissivemap_pars_fragment:S0,colorspace_fragment:b0,colorspace_pars_fragment:E0,envmap_fragment:w0,envmap_common_pars_fragment:T0,envmap_pars_fragment:A0,envmap_pars_vertex:R0,envmap_physical_pars_fragment:B0,envmap_vertex:C0,fog_vertex:L0,fog_pars_vertex:P0,fog_fragment:D0,fog_pars_fragment:I0,gradientmap_pars_fragment:N0,lightmap_pars_fragment:U0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:z0,lights_pars_begin:F0,lights_toon_fragment:k0,lights_toon_pars_fragment:H0,lights_phong_fragment:G0,lights_phong_pars_fragment:V0,lights_physical_fragment:W0,lights_physical_pars_fragment:X0,lights_fragment_begin:q0,lights_fragment_maps:Y0,lights_fragment_end:K0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:j0,logdepthbuf_pars_vertex:Z0,logdepthbuf_vertex:J0,map_fragment:Q0,map_pars_fragment:tm,map_particle_fragment:em,map_particle_pars_fragment:im,metalnessmap_fragment:nm,metalnessmap_pars_fragment:sm,morphinstance_vertex:om,morphcolor_vertex:rm,morphnormal_vertex:am,morphtarget_pars_vertex:lm,morphtarget_vertex:hm,normal_fragment_begin:cm,normal_fragment_maps:fm,normal_pars_fragment:um,normal_pars_vertex:dm,normal_vertex:pm,normalmap_pars_fragment:mm,clearcoat_normal_fragment_begin:gm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:vm,iridescence_pars_fragment:_m,opaque_fragment:Mm,packing:ym,premultiplied_alpha_fragment:Sm,project_vertex:bm,dithering_fragment:Em,dithering_pars_fragment:wm,roughnessmap_fragment:Tm,roughnessmap_pars_fragment:Am,shadowmap_pars_fragment:Rm,shadowmap_pars_vertex:Cm,shadowmap_vertex:Lm,shadowmask_pars_fragment:Pm,skinbase_vertex:Dm,skinning_pars_vertex:Im,skinning_vertex:Nm,skinnormal_vertex:Um,specularmap_fragment:Om,specularmap_pars_fragment:zm,tonemapping_fragment:Fm,tonemapping_pars_fragment:Bm,transmission_fragment:km,transmission_pars_fragment:Hm,uv_pars_fragment:Gm,uv_pars_vertex:Vm,uv_vertex:Wm,worldpos_vertex:Xm,background_vert:qm,background_frag:Ym,backgroundCube_vert:Km,backgroundCube_frag:$m,cube_vert:jm,cube_frag:Zm,depth_vert:Jm,depth_frag:Qm,distanceRGBA_vert:tg,distanceRGBA_frag:eg,equirect_vert:ig,equirect_frag:ng,linedashed_vert:sg,linedashed_frag:og,meshbasic_vert:rg,meshbasic_frag:ag,meshlambert_vert:lg,meshlambert_frag:hg,meshmatcap_vert:cg,meshmatcap_frag:fg,meshnormal_vert:ug,meshnormal_frag:dg,meshphong_vert:pg,meshphong_frag:mg,meshphysical_vert:gg,meshphysical_frag:xg,meshtoon_vert:vg,meshtoon_frag:_g,points_vert:Mg,points_frag:yg,shadow_vert:Sg,shadow_frag:bg,sprite_vert:Eg,sprite_frag:wg},ct={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new $t}},envmap:{envMap:{value:null},envMapRotation:{value:new $t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new $t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new $t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new $t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new $t},normalScale:{value:new Nt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new $t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new $t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new $t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new $t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0},uvTransform:{value:new $t}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Nt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new $t},alphaMap:{value:null},alphaMapTransform:{value:new $t},alphaTest:{value:0}}},ln={basic:{uniforms:vi([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:Zt.meshbasic_vert,fragmentShader:Zt.meshbasic_frag},lambert:{uniforms:vi([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new St(0)}}]),vertexShader:Zt.meshlambert_vert,fragmentShader:Zt.meshlambert_frag},phong:{uniforms:vi([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:Zt.meshphong_vert,fragmentShader:Zt.meshphong_frag},standard:{uniforms:vi([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag},toon:{uniforms:vi([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new St(0)}}]),vertexShader:Zt.meshtoon_vert,fragmentShader:Zt.meshtoon_frag},matcap:{uniforms:vi([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:Zt.meshmatcap_vert,fragmentShader:Zt.meshmatcap_frag},points:{uniforms:vi([ct.points,ct.fog]),vertexShader:Zt.points_vert,fragmentShader:Zt.points_frag},dashed:{uniforms:vi([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Zt.linedashed_vert,fragmentShader:Zt.linedashed_frag},depth:{uniforms:vi([ct.common,ct.displacementmap]),vertexShader:Zt.depth_vert,fragmentShader:Zt.depth_frag},normal:{uniforms:vi([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:Zt.meshnormal_vert,fragmentShader:Zt.meshnormal_frag},sprite:{uniforms:vi([ct.sprite,ct.fog]),vertexShader:Zt.sprite_vert,fragmentShader:Zt.sprite_frag},background:{uniforms:{uvTransform:{value:new $t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Zt.background_vert,fragmentShader:Zt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new $t}},vertexShader:Zt.backgroundCube_vert,fragmentShader:Zt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Zt.cube_vert,fragmentShader:Zt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Zt.equirect_vert,fragmentShader:Zt.equirect_frag},distanceRGBA:{uniforms:vi([ct.common,ct.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Zt.distanceRGBA_vert,fragmentShader:Zt.distanceRGBA_frag},shadow:{uniforms:vi([ct.lights,ct.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:Zt.shadow_vert,fragmentShader:Zt.shadow_frag}};ln.physical={uniforms:vi([ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new $t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new $t},clearcoatNormalScale:{value:new Nt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new $t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new $t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new $t},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new $t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new $t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new $t},transmissionSamplerSize:{value:new Nt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new $t},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new $t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new $t},anisotropyVector:{value:new Nt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new $t}}]),vertexShader:Zt.meshphysical_vert,fragmentShader:Zt.meshphysical_frag};const yr={r:0,b:0,g:0},as=new on,Tg=new Ne;function Ag(n,t,e,i,s,o,a){const l=new St(0);let r=o===!0?0:1,h,f,c=null,u=0,d=null;function p(y){let S=y.isScene===!0?y.background:null;return S&&S.isTexture&&(S=(y.backgroundBlurriness>0?e:t).get(S)),S}function x(y){let S=!1;const v=p(y);v===null?m(l,r):v&&v.isColor&&(m(v,1),S=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,a):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(y,S){const v=p(S);v&&(v.isCubeTexture||v.mapping===ya)?(f===void 0&&(f=new At(new Jt(1,1,1),new mi({name:"BackgroundCubeMaterial",uniforms:to(ln.backgroundCube.uniforms),vertexShader:ln.backgroundCube.vertexShader,fragmentShader:ln.backgroundCube.fragmentShader,side:Mi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),as.copy(S.backgroundRotation),as.x*=-1,as.y*=-1,as.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(as.y*=-1,as.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Tg.makeRotationFromEuler(as)),f.material.toneMapped=ae.getTransfer(v.colorSpace)!==ye,(c!==v||u!==v.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,c=v,u=v.version,d=n.toneMapping),f.layers.enableAll(),y.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new At(new Cn(2,2),new mi({name:"BackgroundMaterial",uniforms:to(ln.background.uniforms),vertexShader:ln.background.vertexShader,fragmentShader:ln.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=ae.getTransfer(v.colorSpace)!==ye,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||u!==v.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,c=v,u=v.version,d=n.toneMapping),h.layers.enableAll(),y.unshift(h,h.geometry,h.material,0,0,null))}function m(y,S){y.getRGB(yr,Lu(n)),i.buffers.color.setClear(yr.r,yr.g,yr.b,S,a)}return{getClearColor:function(){return l},setClearColor:function(y,S=1){l.set(y),r=S,m(l,r)},getClearAlpha:function(){return r},setClearAlpha:function(y){r=y,m(l,r)},render:x,addToRenderList:g}}function Rg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let o=s,a=!1;function l(_,C,N,O,H){let $=!1;const q=c(O,N,C);o!==q&&(o=q,h(o.object)),$=d(_,O,N,H),$&&p(_,O,N,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(_,C,N,O),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function r(){return n.createVertexArray()}function h(_){return n.bindVertexArray(_)}function f(_){return n.deleteVertexArray(_)}function c(_,C,N){const O=N.wireframe===!0;let H=i[_.id];H===void 0&&(H={},i[_.id]=H);let $=H[C.id];$===void 0&&($={},H[C.id]=$);let q=$[O];return q===void 0&&(q=u(r()),$[O]=q),q}function u(_){const C=[],N=[],O=[];for(let H=0;H<e;H++)C[H]=0,N[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:O,object:_,attributes:{},index:null}}function d(_,C,N,O){const H=o.attributes,$=C.attributes;let q=0;const Y=N.getAttributes();for(const V in Y)if(Y[V].location>=0){const rt=H[V];let xt=$[V];if(xt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(xt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(xt=_.instanceColor)),rt===void 0||rt.attribute!==xt||xt&&rt.data!==xt.data)return!0;q++}return o.attributesNum!==q||o.index!==O}function p(_,C,N,O){const H={},$=C.attributes;let q=0;const Y=N.getAttributes();for(const V in Y)if(Y[V].location>=0){let rt=$[V];rt===void 0&&(V==="instanceMatrix"&&_.instanceMatrix&&(rt=_.instanceMatrix),V==="instanceColor"&&_.instanceColor&&(rt=_.instanceColor));const xt={};xt.attribute=rt,rt&&rt.data&&(xt.data=rt.data),H[V]=xt,q++}o.attributes=H,o.attributesNum=q,o.index=O}function x(){const _=o.newAttributes;for(let C=0,N=_.length;C<N;C++)_[C]=0}function g(_){m(_,0)}function m(_,C){const N=o.newAttributes,O=o.enabledAttributes,H=o.attributeDivisors;N[_]=1,O[_]===0&&(n.enableVertexAttribArray(_),O[_]=1),H[_]!==C&&(n.vertexAttribDivisor(_,C),H[_]=C)}function y(){const _=o.newAttributes,C=o.enabledAttributes;for(let N=0,O=C.length;N<O;N++)C[N]!==_[N]&&(n.disableVertexAttribArray(N),C[N]=0)}function S(_,C,N,O,H,$,q){q===!0?n.vertexAttribIPointer(_,C,N,H,$):n.vertexAttribPointer(_,C,N,O,H,$)}function v(_,C,N,O){x();const H=O.attributes,$=N.getAttributes(),q=C.defaultAttributeValues;for(const Y in $){const V=$[Y];if(V.location>=0){let it=H[Y];if(it===void 0&&(Y==="instanceMatrix"&&_.instanceMatrix&&(it=_.instanceMatrix),Y==="instanceColor"&&_.instanceColor&&(it=_.instanceColor)),it!==void 0){const rt=it.normalized,xt=it.itemSize,qt=t.get(it);if(qt===void 0)continue;const me=qt.buffer,j=qt.type,at=qt.bytesPerElement,bt=j===n.INT||j===n.UNSIGNED_INT||it.gpuType===Ih;if(it.isInterleavedBufferAttribute){const ft=it.data,Dt=ft.stride,Bt=it.offset;if(ft.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)m(V.location+Ut,ft.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)g(V.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,me);for(let Ut=0;Ut<V.locationSize;Ut++)S(V.location+Ut,xt/V.locationSize,j,rt,Dt*at,(Bt+xt/V.locationSize*Ut)*at,bt)}else{if(it.isInstancedBufferAttribute){for(let ft=0;ft<V.locationSize;ft++)m(V.location+ft,it.meshPerAttribute);_.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ft=0;ft<V.locationSize;ft++)g(V.location+ft);n.bindBuffer(n.ARRAY_BUFFER,me);for(let ft=0;ft<V.locationSize;ft++)S(V.location+ft,xt/V.locationSize,j,rt,xt*at,xt/V.locationSize*ft*at,bt)}}else if(q!==void 0){const rt=q[Y];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(V.location,rt);break;case 3:n.vertexAttrib3fv(V.location,rt);break;case 4:n.vertexAttrib4fv(V.location,rt);break;default:n.vertexAttrib1fv(V.location,rt)}}}}y()}function D(){R();for(const _ in i){const C=i[_];for(const N in C){const O=C[N];for(const H in O)f(O[H].object),delete O[H];delete C[N]}delete i[_]}}function T(_){if(i[_.id]===void 0)return;const C=i[_.id];for(const N in C){const O=C[N];for(const H in O)f(O[H].object),delete O[H];delete C[N]}delete i[_.id]}function w(_){for(const C in i){const N=i[C];if(N[_.id]===void 0)continue;const O=N[_.id];for(const H in O)f(O[H].object),delete O[H];delete N[_.id]}}function R(){M(),a=!0,o!==s&&(o=s,h(o.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:R,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:y}}function Cg(n,t,e){let i;function s(h){i=h}function o(h,f){n.drawArrays(i,h,f),e.update(f,i,1)}function a(h,f,c){c!==0&&(n.drawArraysInstanced(i,h,f,c),e.update(f,i,c))}function l(h,f,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,c);let d=0;for(let p=0;p<c;p++)d+=f[p];e.update(d,i,1)}function r(h,f,c,u){if(c===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let p=0;p<h.length;p++)a(h[p],f[p],u[p]);else{d.multiDrawArraysInstancedWEBGL(i,h,0,f,0,u,0,c);let p=0;for(let x=0;x<c;x++)p+=f[x]*u[x];e.update(p,i,1)}}this.setMode=s,this.render=o,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=r}function Lg(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==en&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const R=w===cn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Pn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==En&&!R)}function r(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const f=r(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const c=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),m=n.getParameter(n.MAX_VERTEX_ATTRIBS),y=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=p>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:r,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:g,maxAttributes:m,maxVertexUniforms:y,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:D,maxSamples:T}}function Pg(n){const t=this;let e=null,i=0,s=!1,o=!1;const a=new hs,l=new $t,r={value:null,needsUpdate:!1};this.uniform=r,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){const d=c.length!==0||u||i!==0||s;return s=u,i=c.length,d},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(c,u){e=f(c,u,0)},this.setState=function(c,u,d){const p=c.clippingPlanes,x=c.clipIntersection,g=c.clipShadows,m=n.get(c);if(!s||p===null||p.length===0||o&&!g)o?f(null):h();else{const y=o?0:i,S=y*4;let v=m.clippingState||null;r.value=v,v=f(p,u,S,d);for(let D=0;D!==S;++D)v[D]=e[D];m.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=y}};function h(){r.value!==e&&(r.value=e,r.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(c,u,d,p){const x=c!==null?c.length:0;let g=null;if(x!==0){if(g=r.value,p!==!0||g===null){const m=d+x*4,y=u.matrixWorldInverse;l.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let S=0,v=d;S!==x;++S,v+=4)a.copy(c[S]).applyMatrix4(y,l),a.normal.toArray(g,v),g[v+3]=a.constant}r.value=g,r.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function Dg(n){let t=new WeakMap;function e(a,l){return l===zl?a.mapping=js:l===Fl&&(a.mapping=Zs),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===zl||l===Fl)if(t.has(a)){const r=t.get(a).texture;return e(r,a.mapping)}else{const r=a.image;if(r&&r.height>0){const h=new Vp(r.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const r=t.get(l);r!==void 0&&(t.delete(l),r.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Gh extends Pu{constructor(t=-1,e=1,i=1,s=-1,o=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,a=i+t,l=s+e,r=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,a=o+h*this.view.width,l-=f*this.view.offsetY,r=l-f*this.view.height}this.projectionMatrix.makeOrthographic(o,a,l,r,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Gs=4,Vc=[.125,.215,.35,.446,.526,.582],us=20,Qa=new Gh,Wc=new St;let tl=null,el=0,il=0,nl=!1;const cs=(1+Math.sqrt(5))/2,Us=1/cs,Xc=[new P(-cs,Us,0),new P(cs,Us,0),new P(-Us,0,cs),new P(Us,0,cs),new P(0,cs,-Us),new P(0,cs,Us),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class qc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=$c(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(tl,el,il),this._renderer.xr.enabled=nl,t.scissorTest=!1,Sr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===js||t.mapping===Zs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),tl=this._renderer.getRenderTarget(),el=this._renderer.getActiveCubeFace(),il=this._renderer.getActiveMipmapLevel(),nl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:qi,minFilter:qi,generateMipmaps:!1,type:cn,format:en,colorSpace:oo,depthBuffer:!1},s=Yc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yc(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Ig(o)),this._blurMaterial=Ng(o,t,e)}return s}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,Qa)}_sceneToCubeUV(t,e,i,s){const l=new Oi(90,1,e,i),r=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,u=f.toneMapping;f.getClearColor(Wc),f.toneMapping=An,f.autoClear=!1;const d=new be({name:"PMREM.Background",side:Mi,depthWrite:!1,depthTest:!1}),p=new At(new Jt,d);let x=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(Wc),x=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(l.up.set(0,r[m],0),l.lookAt(h[m],0,0)):y===1?(l.up.set(0,0,r[m]),l.lookAt(0,h[m],0)):(l.up.set(0,r[m],0),l.lookAt(0,0,h[m]));const S=this._cubeSize;Sr(s,y*S,m>2?S:0,S,S),f.setRenderTarget(s),x&&f.render(p,l),f.render(t,l)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=u,f.autoClear=c,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===js||t.mapping===Zs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=$c()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kc());const o=s?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const r=this._cubeSize;Sr(e,0,0,3*r,2*r),i.setRenderTarget(e),i.render(a,Qa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const a=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=Xc[(s-o-1)%Xc.length];this._blur(t,o-1,o,a,l)}e.autoClear=i}_blur(t,e,i,s,o){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",o),this._halfBlur(a,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,a,l){const r=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,c=new At(this._lodPlanes[s],h),u=h.uniforms,d=this._sizeLods[i]-1,p=isFinite(o)?Math.PI/(2*d):2*Math.PI/(2*us-1),x=o/p,g=isFinite(o)?1+Math.floor(f*x):us;g>us&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${us}`);const m=[];let y=0;for(let w=0;w<us;++w){const R=w/x,M=Math.exp(-R*R/2);m.push(M),w===0?y+=M:w<g&&(y+=2*M)}for(let w=0;w<m.length;w++)m[w]=m[w]/y;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=m,u.latitudinal.value=a==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:S}=this;u.dTheta.value=p,u.mipInt.value=S-i;const v=this._sizeLods[s],D=3*v*(s>S-Gs?s-S+Gs:0),T=4*(this._cubeSize-v);Sr(e,D,T,3*v,2*v),r.setRenderTarget(e),r.render(c,Qa)}}function Ig(n){const t=[],e=[],i=[];let s=n;const o=n-Gs+1+Vc.length;for(let a=0;a<o;a++){const l=Math.pow(2,s);e.push(l);let r=1/l;a>n-Gs?r=Vc[a-n+Gs-1]:a===0&&(r=0),i.push(r);const h=1/(l-2),f=-h,c=1+h,u=[f,f,c,f,c,c,f,f,c,c,f,c],d=6,p=6,x=3,g=2,m=1,y=new Float32Array(x*p*d),S=new Float32Array(g*p*d),v=new Float32Array(m*p*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,R=T>2?0:-1,M=[w,R,0,w+2/3,R,0,w+2/3,R+1,0,w,R,0,w+2/3,R+1,0,w,R+1,0];y.set(M,x*p*T),S.set(u,g*p*T);const _=[T,T,T,T,T,T];v.set(_,m*p*T)}const D=new je;D.setAttribute("position",new Si(y,x)),D.setAttribute("uv",new Si(S,g)),D.setAttribute("faceIndex",new Si(v,m)),t.push(D),s>Gs&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Yc(n,t,e){const i=new Yi(n,t,e);return i.texture.mapping=ya,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Sr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function Ng(n,t,e){const i=new Float32Array(us),s=new P(0,1,0);return new mi({name:"SphericalGaussianBlur",defines:{n:us,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Kc(){return new mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Vh(),fragmentShader:`

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
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function $c(){return new mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Vh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Tn,depthTest:!1,depthWrite:!1})}function Vh(){return`

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
	`}function Ug(n){let t=new WeakMap,e=null;function i(l){if(l&&l.isTexture){const r=l.mapping,h=r===zl||r===Fl,f=r===js||r===Zs;if(h||f){let c=t.get(l);const u=c!==void 0?c.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==u)return e===null&&(e=new qc(n)),c=h?e.fromEquirectangular(l,c):e.fromCubemap(l,c),c.texture.pmremVersion=l.pmremVersion,t.set(l,c),c.texture;if(c!==void 0)return c.texture;{const d=l.image;return h&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new qc(n)),c=h?e.fromEquirectangular(l):e.fromCubemap(l),c.texture.pmremVersion=l.pmremVersion,t.set(l,c),l.addEventListener("dispose",o),c.texture):null}}}return l}function s(l){let r=0;const h=6;for(let f=0;f<h;f++)l[f]!==void 0&&r++;return r===h}function o(l){const r=l.target;r.removeEventListener("dispose",o);const h=t.get(r);h!==void 0&&(t.delete(r),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function Og(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Ao("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function zg(n,t,e,i){const s={},o=new WeakMap;function a(c){const u=c.target;u.index!==null&&t.remove(u.index);for(const p in u.attributes)t.remove(u.attributes[p]);for(const p in u.morphAttributes){const x=u.morphAttributes[p];for(let g=0,m=x.length;g<m;g++)t.remove(x[g])}u.removeEventListener("dispose",a),delete s[u.id];const d=o.get(u);d&&(t.remove(d),o.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function l(c,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function r(c){const u=c.attributes;for(const p in u)t.update(u[p],n.ARRAY_BUFFER);const d=c.morphAttributes;for(const p in d){const x=d[p];for(let g=0,m=x.length;g<m;g++)t.update(x[g],n.ARRAY_BUFFER)}}function h(c){const u=[],d=c.index,p=c.attributes.position;let x=0;if(d!==null){const y=d.array;x=d.version;for(let S=0,v=y.length;S<v;S+=3){const D=y[S+0],T=y[S+1],w=y[S+2];u.push(D,T,T,w,w,D)}}else if(p!==void 0){const y=p.array;x=p.version;for(let S=0,v=y.length/3-1;S<v;S+=3){const D=S+0,T=S+1,w=S+2;u.push(D,T,T,w,w,D)}}else return;const g=new(bu(u)?Cu:Ru)(u,1);g.version=x;const m=o.get(c);m&&t.remove(m),o.set(c,g)}function f(c){const u=o.get(c);if(u){const d=c.index;d!==null&&u.version<d.version&&h(c)}else h(c);return o.get(c)}return{get:l,update:r,getWireframeAttribute:f}}function Fg(n,t,e){let i;function s(u){i=u}let o,a;function l(u){o=u.type,a=u.bytesPerElement}function r(u,d){n.drawElements(i,d,o,u*a),e.update(d,i,1)}function h(u,d,p){p!==0&&(n.drawElementsInstanced(i,d,o,u*a,p),e.update(d,i,p))}function f(u,d,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,o,u,0,p);let g=0;for(let m=0;m<p;m++)g+=d[m];e.update(g,i,1)}function c(u,d,p,x){if(p===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<u.length;m++)h(u[m]/a,d[m],x[m]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,o,u,0,x,0,p);let m=0;for(let y=0;y<p;y++)m+=d[y]*x[y];e.update(m,i,1)}}this.setMode=s,this.setIndex=l,this.render=r,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=c}function Bg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,a,l){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=l*(o/3);break;case n.LINES:e.lines+=l*(o/2);break;case n.LINE_STRIP:e.lines+=l*(o-1);break;case n.LINE_LOOP:e.lines+=l*o;break;case n.POINTS:e.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function kg(n,t,e){const i=new WeakMap,s=new Re;function o(a,l,r){const h=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,c=f!==void 0?f.length:0;let u=i.get(l);if(u===void 0||u.count!==c){let _=function(){R.dispose(),i.delete(l),l.removeEventListener("dispose",_)};var d=_;u!==void 0&&u.texture.dispose();const p=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],y=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let v=0;p===!0&&(v=1),x===!0&&(v=2),g===!0&&(v=3);let D=l.attributes.position.count*v,T=1;D>t.maxTextureSize&&(T=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const w=new Float32Array(D*T*4*c),R=new wu(w,D,T,c);R.type=En,R.needsUpdate=!0;const M=v*4;for(let C=0;C<c;C++){const N=m[C],O=y[C],H=S[C],$=D*T*4*C;for(let q=0;q<N.count;q++){const Y=q*M;p===!0&&(s.fromBufferAttribute(N,q),w[$+Y+0]=s.x,w[$+Y+1]=s.y,w[$+Y+2]=s.z,w[$+Y+3]=0),x===!0&&(s.fromBufferAttribute(O,q),w[$+Y+4]=s.x,w[$+Y+5]=s.y,w[$+Y+6]=s.z,w[$+Y+7]=0),g===!0&&(s.fromBufferAttribute(H,q),w[$+Y+8]=s.x,w[$+Y+9]=s.y,w[$+Y+10]=s.z,w[$+Y+11]=H.itemSize===4?s.w:1)}}u={count:c,texture:R,size:new Nt(D,T)},i.set(l,u),l.addEventListener("dispose",_)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)r.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let p=0;for(let g=0;g<h.length;g++)p+=h[g];const x=l.morphTargetsRelative?1:1-p;r.getUniforms().setValue(n,"morphTargetBaseInfluence",x),r.getUniforms().setValue(n,"morphTargetInfluences",h)}r.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),r.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:o}}function Hg(n,t,e,i){let s=new WeakMap;function o(r){const h=i.render.frame,f=r.geometry,c=t.get(r,f);if(s.get(c)!==h&&(t.update(c),s.set(c,h)),r.isInstancedMesh&&(r.hasEventListener("dispose",l)===!1&&r.addEventListener("dispose",l),s.get(r)!==h&&(e.update(r.instanceMatrix,n.ARRAY_BUFFER),r.instanceColor!==null&&e.update(r.instanceColor,n.ARRAY_BUFFER),s.set(r,h))),r.isSkinnedMesh){const u=r.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return c}function a(){s=new WeakMap}function l(r){const h=r.target;h.removeEventListener("dispose",l),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:a}}class Nu extends yi{constructor(t,e,i,s,o,a,l,r,h,f=Xs){if(f!==Xs&&f!==Qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Xs&&(i=xs),i===void 0&&f===Qs&&(i=Js),super(null,s,o,a,l,r,f,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:de,this.minFilter=r!==void 0?r:de,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Uu=new yi,jc=new Nu(1,1),Ou=new wu,zu=new Rp,Fu=new Du,Zc=[],Jc=[],Qc=new Float32Array(16),tf=new Float32Array(9),ef=new Float32Array(4);function ao(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=Zc[s];if(o===void 0&&(o=new Float32Array(s),Zc[s]=o),t!==0){i.toArray(o,0);for(let a=1,l=0;a!==t;++a)l+=e,n[a].toArray(o,l)}return o}function Qe(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ti(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function ba(n,t){let e=Jc[t];e===void 0&&(e=new Int32Array(t),Jc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Gg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Vg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2fv(this.addr,t),ti(e,t)}}function Wg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Qe(e,t))return;n.uniform3fv(this.addr,t),ti(e,t)}}function Xg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4fv(this.addr,t),ti(e,t)}}function qg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ti(e,t)}else{if(Qe(e,i))return;ef.set(i),n.uniformMatrix2fv(this.addr,!1,ef),ti(e,i)}}function Yg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ti(e,t)}else{if(Qe(e,i))return;tf.set(i),n.uniformMatrix3fv(this.addr,!1,tf),ti(e,i)}}function Kg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(Qe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ti(e,t)}else{if(Qe(e,i))return;Qc.set(i),n.uniformMatrix4fv(this.addr,!1,Qc),ti(e,i)}}function $g(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2iv(this.addr,t),ti(e,t)}}function Zg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3iv(this.addr,t),ti(e,t)}}function Jg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4iv(this.addr,t),ti(e,t)}}function Qg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function t1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Qe(e,t))return;n.uniform2uiv(this.addr,t),ti(e,t)}}function e1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Qe(e,t))return;n.uniform3uiv(this.addr,t),ti(e,t)}}function i1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Qe(e,t))return;n.uniform4uiv(this.addr,t),ti(e,t)}}function n1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(jc.compareFunction=Su,o=jc):o=Uu,e.setTexture2D(t||o,s)}function s1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||zu,s)}function o1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Fu,s)}function r1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Ou,s)}function a1(n){switch(n){case 5126:return Gg;case 35664:return Vg;case 35665:return Wg;case 35666:return Xg;case 35674:return qg;case 35675:return Yg;case 35676:return Kg;case 5124:case 35670:return $g;case 35667:case 35671:return jg;case 35668:case 35672:return Zg;case 35669:case 35673:return Jg;case 5125:return Qg;case 36294:return t1;case 36295:return e1;case 36296:return i1;case 35678:case 36198:case 36298:case 36306:case 35682:return n1;case 35679:case 36299:case 36307:return s1;case 35680:case 36300:case 36308:case 36293:return o1;case 36289:case 36303:case 36311:case 36292:return r1}}function l1(n,t){n.uniform1fv(this.addr,t)}function h1(n,t){const e=ao(t,this.size,2);n.uniform2fv(this.addr,e)}function c1(n,t){const e=ao(t,this.size,3);n.uniform3fv(this.addr,e)}function f1(n,t){const e=ao(t,this.size,4);n.uniform4fv(this.addr,e)}function u1(n,t){const e=ao(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function d1(n,t){const e=ao(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function p1(n,t){const e=ao(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function m1(n,t){n.uniform1iv(this.addr,t)}function g1(n,t){n.uniform2iv(this.addr,t)}function x1(n,t){n.uniform3iv(this.addr,t)}function v1(n,t){n.uniform4iv(this.addr,t)}function _1(n,t){n.uniform1uiv(this.addr,t)}function M1(n,t){n.uniform2uiv(this.addr,t)}function y1(n,t){n.uniform3uiv(this.addr,t)}function S1(n,t){n.uniform4uiv(this.addr,t)}function b1(n,t,e){const i=this.cache,s=t.length,o=ba(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),ti(i,o));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||Uu,o[a])}function E1(n,t,e){const i=this.cache,s=t.length,o=ba(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),ti(i,o));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||zu,o[a])}function w1(n,t,e){const i=this.cache,s=t.length,o=ba(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),ti(i,o));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Fu,o[a])}function T1(n,t,e){const i=this.cache,s=t.length,o=ba(e,s);Qe(i,o)||(n.uniform1iv(this.addr,o),ti(i,o));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Ou,o[a])}function A1(n){switch(n){case 5126:return l1;case 35664:return h1;case 35665:return c1;case 35666:return f1;case 35674:return u1;case 35675:return d1;case 35676:return p1;case 5124:case 35670:return m1;case 35667:case 35671:return g1;case 35668:case 35672:return x1;case 35669:case 35673:return v1;case 5125:return _1;case 36294:return M1;case 36295:return y1;case 36296:return S1;case 35678:case 36198:case 36298:case 36306:case 35682:return b1;case 35679:case 36299:case 36307:return E1;case 35680:case 36300:case 36308:case 36293:return w1;case 36289:case 36303:case 36311:case 36292:return T1}}class R1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=a1(e.type)}}class C1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=A1(e.type)}}class L1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,a=s.length;o!==a;++o){const l=s[o];l.setValue(t,e[l.id],i)}}}const sl=/(\w+)(\])?(\[|\.)?/g;function nf(n,t){n.seq.push(t),n.map[t.id]=t}function P1(n,t,e){const i=n.name,s=i.length;for(sl.lastIndex=0;;){const o=sl.exec(i),a=sl.lastIndex;let l=o[1];const r=o[2]==="]",h=o[3];if(r&&(l=l|0),h===void 0||h==="["&&a+2===s){nf(e,h===void 0?new R1(l,n,t):new C1(l,n,t));break}else{let c=e.map[l];c===void 0&&(c=new L1(l),nf(e,c)),e=c}}}class $r{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),a=t.getUniformLocation(e,o.name);P1(o,a,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,a=e.length;o!==a;++o){const l=e[o],r=i[l.id];r.needsUpdate!==!1&&l.setValue(t,r.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function sf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const D1=37297;let I1=0;function N1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let a=s;a<o;a++){const l=a+1;i.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return i.join(`
`)}const of=new $t;function U1(n){ae._getMatrix(of,ae.workingColorSpace,n);const t=`mat3( ${of.elements.map(e=>e.toFixed(4))} )`;switch(ae.getTransfer(n)){case Sa:return[t,"LinearTransferOETF"];case ye:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function rf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+N1(n.getShaderSource(t),a)}else return s}function O1(n,t){const e=U1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function z1(n,t){let e;switch(t){case ru:e="Linear";break;case au:e="Reinhard";break;case lu:e="Cineon";break;case Ma:e="ACESFilmic";break;case hu:e="AgX";break;case cu:e="Neutral";break;case ap:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const br=new P;function F1(){ae.getLuminanceCoefficients(br);const n=br.x.toFixed(4),t=br.y.toFixed(4),e=br.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function B1(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ro).join(`
`)}function k1(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function H1(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),a=o.name;let l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),e[a]={type:o.type,location:n.getAttribLocation(t,a),locationSize:l}}return e}function Ro(n){return n!==""}function af(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function lf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const G1=/^[ \t]*#include +<([\w\d./]+)>/gm;function ph(n){return n.replace(G1,W1)}const V1=new Map;function W1(n,t){let e=Zt[t];if(e===void 0){const i=V1.get(t);if(i!==void 0)e=Zt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return ph(e)}const X1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function hf(n){return n.replace(X1,q1)}function q1(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function cf(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Y1(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===su?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===ou?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===yn&&(t="SHADOWMAP_TYPE_VSM"),t}function K1(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case js:case Zs:t="ENVMAP_TYPE_CUBE";break;case ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function $1(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Zs:t="ENVMAP_MODE_REFRACTION";break}return t}function j1(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Dh:t="ENVMAP_BLENDING_MULTIPLY";break;case op:t="ENVMAP_BLENDING_MIX";break;case rp:t="ENVMAP_BLENDING_ADD";break}return t}function Z1(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function J1(n,t,e,i){const s=n.getContext(),o=e.defines;let a=e.vertexShader,l=e.fragmentShader;const r=Y1(e),h=K1(e),f=$1(e),c=j1(e),u=Z1(e),d=B1(e),p=k1(o),x=s.createProgram();let g,m,y=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ro).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Ro).join(`
`),m.length>0&&(m+=`
`)):(g=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+r:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ro).join(`
`),m=[cf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+c:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+r:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==An?"#define TONE_MAPPING":"",e.toneMapping!==An?Zt.tonemapping_pars_fragment:"",e.toneMapping!==An?z1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Zt.colorspace_pars_fragment,O1("linearToOutputTexel",e.outputColorSpace),F1(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Ro).join(`
`)),a=ph(a),a=af(a,e),a=lf(a,e),l=ph(l),l=af(l,e),l=lf(l,e),a=hf(a),l=hf(l),e.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",e.glslVersion===Sc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Sc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const S=y+g+a,v=y+m+l,D=sf(s,s.VERTEX_SHADER,S),T=sf(s,s.FRAGMENT_SHADER,v);s.attachShader(x,D),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(C){if(n.debug.checkShaderErrors){const N=s.getProgramInfoLog(x).trim(),O=s.getShaderInfoLog(D).trim(),H=s.getShaderInfoLog(T).trim();let $=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,D,T);else{const Y=rf(s,D,"vertex"),V=rf(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+N+`
`+Y+`
`+V)}else N!==""?console.warn("THREE.WebGLProgram: Program Info Log:",N):(O===""||H==="")&&(q=!1);q&&(C.diagnostics={runnable:$,programLog:N,vertexShader:{log:O,prefix:g},fragmentShader:{log:H,prefix:m}})}s.deleteShader(D),s.deleteShader(T),R=new $r(s,x),M=H1(s,x)}let R;this.getUniforms=function(){return R===void 0&&w(this),R};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let _=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=s.getProgramParameter(x,D1)),_},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=I1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=T,this}let Q1=0;class tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(o)===!1&&(a.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new ex(t),e.set(t,i)),i}}class ex{constructor(t){this.id=Q1++,this.code=t,this.usedTimes=0}}function ix(n,t,e,i,s,o,a){const l=new Tu,r=new tx,h=new Set,f=[],c=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return h.add(M),M===0?"uv":`uv${M}`}function g(M,_,C,N,O){const H=N.fog,$=O.geometry,q=M.isMeshStandardMaterial?N.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),V=Y&&Y.mapping===ya?Y.image.height:null,it=p[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xt=rt!==void 0?rt.length:0;let qt=0;$.morphAttributes.position!==void 0&&(qt=1),$.morphAttributes.normal!==void 0&&(qt=2),$.morphAttributes.color!==void 0&&(qt=3);let me,j,at,bt;if(it){const Me=ln[it];me=Me.vertexShader,j=Me.fragmentShader}else me=M.vertexShader,j=M.fragmentShader,r.update(M),at=r.getVertexShaderID(M),bt=r.getFragmentShaderID(M);const ft=n.getRenderTarget(),Dt=n.state.buffers.depth.getReversed(),Bt=O.isInstancedMesh===!0,Ut=O.isBatchedMesh===!0,Vt=!!M.map,Xt=!!M.matcap,Ee=!!Y,F=!!M.aoMap,Ze=!!M.lightMap,ie=!!M.bumpMap,ne=!!M.normalMap,Ct=!!M.displacementMap,Ce=!!M.emissiveMap,It=!!M.metalnessMap,A=!!M.roughnessMap,b=M.anisotropy>0,G=M.clearcoat>0,Q=M.dispersion>0,et=M.iridescence>0,Z=M.sheen>0,Lt=M.transmission>0,dt=b&&!!M.anisotropyMap,vt=G&&!!M.clearcoatMap,ce=G&&!!M.clearcoatNormalMap,lt=G&&!!M.clearcoatRoughnessMap,_t=et&&!!M.iridescenceMap,Ft=et&&!!M.iridescenceThicknessMap,kt=Z&&!!M.sheenColorMap,Mt=Z&&!!M.sheenRoughnessMap,re=!!M.specularMap,jt=!!M.specularColorMap,Pe=!!M.specularIntensityMap,z=Lt&&!!M.transmissionMap,ut=Lt&&!!M.thicknessMap,K=!!M.gradientMap,tt=!!M.alphaMap,gt=M.alphaTest>0,pt=!!M.alphaHash,Yt=!!M.extensions;let ke=An;M.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ke=n.toneMapping);const ci={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:me,fragmentShader:j,defines:M.defines,customVertexShaderID:at,customFragmentShaderID:bt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&O._colorsTexture!==null,instancing:Bt,instancingColor:Bt&&O.instanceColor!==null,instancingMorph:Bt&&O.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:oo,alphaToCoverage:!!M.alphaToCoverage,map:Vt,matcap:Xt,envMap:Ee,envMapMode:Ee&&Y.mapping,envMapCubeUVHeight:V,aoMap:F,lightMap:Ze,bumpMap:ie,normalMap:ne,displacementMap:u&&Ct,emissiveMap:Ce,normalMapObjectSpace:ne&&M.normalMapType===fp,normalMapTangentSpace:ne&&M.normalMapType===Bh,metalnessMap:It,roughnessMap:A,anisotropy:b,anisotropyMap:dt,clearcoat:G,clearcoatMap:vt,clearcoatNormalMap:ce,clearcoatRoughnessMap:lt,dispersion:Q,iridescence:et,iridescenceMap:_t,iridescenceThicknessMap:Ft,sheen:Z,sheenColorMap:kt,sheenRoughnessMap:Mt,specularMap:re,specularColorMap:jt,specularIntensityMap:Pe,transmission:Lt,transmissionMap:z,thicknessMap:ut,gradientMap:K,opaque:M.transparent===!1&&M.blending===Ws&&M.alphaToCoverage===!1,alphaMap:tt,alphaTest:gt,alphaHash:pt,combine:M.combine,mapUv:Vt&&x(M.map.channel),aoMapUv:F&&x(M.aoMap.channel),lightMapUv:Ze&&x(M.lightMap.channel),bumpMapUv:ie&&x(M.bumpMap.channel),normalMapUv:ne&&x(M.normalMap.channel),displacementMapUv:Ct&&x(M.displacementMap.channel),emissiveMapUv:Ce&&x(M.emissiveMap.channel),metalnessMapUv:It&&x(M.metalnessMap.channel),roughnessMapUv:A&&x(M.roughnessMap.channel),anisotropyMapUv:dt&&x(M.anisotropyMap.channel),clearcoatMapUv:vt&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:ce&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:Ft&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:kt&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(M.sheenRoughnessMap.channel),specularMapUv:re&&x(M.specularMap.channel),specularColorMapUv:jt&&x(M.specularColorMap.channel),specularIntensityMapUv:Pe&&x(M.specularIntensityMap.channel),transmissionMapUv:z&&x(M.transmissionMap.channel),thicknessMapUv:ut&&x(M.thicknessMap.channel),alphaMapUv:tt&&x(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ne||b),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!$.attributes.uv&&(Vt||tt),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Dt,skinning:O.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:qt,numDirLights:_.directional.length,numPointLights:_.point.length,numSpotLights:_.spot.length,numSpotLightMaps:_.spotLightMap.length,numRectAreaLights:_.rectArea.length,numHemiLights:_.hemi.length,numDirLightShadows:_.directionalShadowMap.length,numPointLightShadows:_.pointShadowMap.length,numSpotLightShadows:_.spotShadowMap.length,numSpotLightShadowsWithMaps:_.numSpotLightShadowsWithMaps,numLightProbes:_.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:ke,decodeVideoTexture:Vt&&M.map.isVideoTexture===!0&&ae.getTransfer(M.map.colorSpace)===ye,decodeVideoTextureEmissive:Ce&&M.emissiveMap.isVideoTexture===!0&&ae.getTransfer(M.emissiveMap.colorSpace)===ye,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Ci,flipSided:M.side===Mi,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Yt&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Yt&&M.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ci.vertexUv1s=h.has(1),ci.vertexUv2s=h.has(2),ci.vertexUv3s=h.has(3),h.clear(),ci}function m(M){const _=[];if(M.shaderID?_.push(M.shaderID):(_.push(M.customVertexShaderID),_.push(M.customFragmentShaderID)),M.defines!==void 0)for(const C in M.defines)_.push(C),_.push(M.defines[C]);return M.isRawShaderMaterial===!1&&(y(_,M),S(_,M),_.push(n.outputColorSpace)),_.push(M.customProgramCacheKey),_.join()}function y(M,_){M.push(_.precision),M.push(_.outputColorSpace),M.push(_.envMapMode),M.push(_.envMapCubeUVHeight),M.push(_.mapUv),M.push(_.alphaMapUv),M.push(_.lightMapUv),M.push(_.aoMapUv),M.push(_.bumpMapUv),M.push(_.normalMapUv),M.push(_.displacementMapUv),M.push(_.emissiveMapUv),M.push(_.metalnessMapUv),M.push(_.roughnessMapUv),M.push(_.anisotropyMapUv),M.push(_.clearcoatMapUv),M.push(_.clearcoatNormalMapUv),M.push(_.clearcoatRoughnessMapUv),M.push(_.iridescenceMapUv),M.push(_.iridescenceThicknessMapUv),M.push(_.sheenColorMapUv),M.push(_.sheenRoughnessMapUv),M.push(_.specularMapUv),M.push(_.specularColorMapUv),M.push(_.specularIntensityMapUv),M.push(_.transmissionMapUv),M.push(_.thicknessMapUv),M.push(_.combine),M.push(_.fogExp2),M.push(_.sizeAttenuation),M.push(_.morphTargetsCount),M.push(_.morphAttributeCount),M.push(_.numDirLights),M.push(_.numPointLights),M.push(_.numSpotLights),M.push(_.numSpotLightMaps),M.push(_.numHemiLights),M.push(_.numRectAreaLights),M.push(_.numDirLightShadows),M.push(_.numPointLightShadows),M.push(_.numSpotLightShadows),M.push(_.numSpotLightShadowsWithMaps),M.push(_.numLightProbes),M.push(_.shadowMapType),M.push(_.toneMapping),M.push(_.numClippingPlanes),M.push(_.numClipIntersection),M.push(_.depthPacking)}function S(M,_){l.disableAll(),_.supportsVertexTextures&&l.enable(0),_.instancing&&l.enable(1),_.instancingColor&&l.enable(2),_.instancingMorph&&l.enable(3),_.matcap&&l.enable(4),_.envMap&&l.enable(5),_.normalMapObjectSpace&&l.enable(6),_.normalMapTangentSpace&&l.enable(7),_.clearcoat&&l.enable(8),_.iridescence&&l.enable(9),_.alphaTest&&l.enable(10),_.vertexColors&&l.enable(11),_.vertexAlphas&&l.enable(12),_.vertexUv1s&&l.enable(13),_.vertexUv2s&&l.enable(14),_.vertexUv3s&&l.enable(15),_.vertexTangents&&l.enable(16),_.anisotropy&&l.enable(17),_.alphaHash&&l.enable(18),_.batching&&l.enable(19),_.dispersion&&l.enable(20),_.batchingColor&&l.enable(21),M.push(l.mask),l.disableAll(),_.fog&&l.enable(0),_.useFog&&l.enable(1),_.flatShading&&l.enable(2),_.logarithmicDepthBuffer&&l.enable(3),_.reverseDepthBuffer&&l.enable(4),_.skinning&&l.enable(5),_.morphTargets&&l.enable(6),_.morphNormals&&l.enable(7),_.morphColors&&l.enable(8),_.premultipliedAlpha&&l.enable(9),_.shadowMapEnabled&&l.enable(10),_.doubleSided&&l.enable(11),_.flipSided&&l.enable(12),_.useDepthPacking&&l.enable(13),_.dithering&&l.enable(14),_.transmission&&l.enable(15),_.sheen&&l.enable(16),_.opaque&&l.enable(17),_.pointsUvs&&l.enable(18),_.decodeVideoTexture&&l.enable(19),_.decodeVideoTextureEmissive&&l.enable(20),_.alphaToCoverage&&l.enable(21),M.push(l.mask)}function v(M){const _=p[M.type];let C;if(_){const N=ln[_];C=Wo.clone(N.uniforms)}else C=M.uniforms;return C}function D(M,_){let C;for(let N=0,O=f.length;N<O;N++){const H=f[N];if(H.cacheKey===_){C=H,++C.usedTimes;break}}return C===void 0&&(C=new J1(n,_,M,o),f.push(C)),C}function T(M){if(--M.usedTimes===0){const _=f.indexOf(M);f[_]=f[f.length-1],f.pop(),M.destroy()}}function w(M){r.remove(M)}function R(){r.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:v,acquireProgram:D,releaseProgram:T,releaseShaderCache:w,programs:f,dispose:R}}function nx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,r){n.get(a)[l]=r}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function sx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ff(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function uf(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function a(c,u,d,p,x,g){let m=n[t];return m===void 0?(m={id:c.id,object:c,geometry:u,material:d,groupOrder:p,renderOrder:c.renderOrder,z:x,group:g},n[t]=m):(m.id=c.id,m.object=c,m.geometry=u,m.material=d,m.groupOrder=p,m.renderOrder=c.renderOrder,m.z=x,m.group=g),t++,m}function l(c,u,d,p,x,g){const m=a(c,u,d,p,x,g);d.transmission>0?i.push(m):d.transparent===!0?s.push(m):e.push(m)}function r(c,u,d,p,x,g){const m=a(c,u,d,p,x,g);d.transmission>0?i.unshift(m):d.transparent===!0?s.unshift(m):e.unshift(m)}function h(c,u){e.length>1&&e.sort(c||sx),i.length>1&&i.sort(u||ff),s.length>1&&s.sort(u||ff)}function f(){for(let c=t,u=n.length;c<u;c++){const d=n[c];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:l,unshift:r,finish:f,sort:h}}function ox(){let n=new WeakMap;function t(i,s){const o=n.get(i);let a;return o===void 0?(a=new uf,n.set(i,[a])):s>=o.length?(a=new uf,o.push(a)):a=o[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function rx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new St};break;case"SpotLight":e={position:new P,direction:new P,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new P,halfWidth:new P,halfHeight:new P};break}return n[t.id]=e,e}}}function ax(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Nt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let lx=0;function hx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function cx(n){const t=new rx,e=ax(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new P);const s=new P,o=new Ne,a=new Ne;function l(h){let f=0,c=0,u=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let d=0,p=0,x=0,g=0,m=0,y=0,S=0,v=0,D=0,T=0,w=0;h.sort(hx);for(let M=0,_=h.length;M<_;M++){const C=h[M],N=C.color,O=C.intensity,H=C.distance,$=C.shadow&&C.shadow.map?C.shadow.map.texture:null;if(C.isAmbientLight)f+=N.r*O,c+=N.g*O,u+=N.b*O;else if(C.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(C.sh.coefficients[q],O);w++}else if(C.isDirectionalLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),C.castShadow){const Y=C.shadow,V=e.get(C);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=C.shadow.matrix,y++}i.directional[d]=q,d++}else if(C.isSpotLight){const q=t.get(C);q.position.setFromMatrixPosition(C.matrixWorld),q.color.copy(N).multiplyScalar(O),q.distance=H,q.coneCos=Math.cos(C.angle),q.penumbraCos=Math.cos(C.angle*(1-C.penumbra)),q.decay=C.decay,i.spot[x]=q;const Y=C.shadow;if(C.map&&(i.spotLightMap[D]=C.map,D++,Y.updateMatrices(C),C.castShadow&&T++),i.spotLightMatrix[x]=Y.matrix,C.castShadow){const V=e.get(C);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=$,v++}x++}else if(C.isRectAreaLight){const q=t.get(C);q.color.copy(N).multiplyScalar(O),q.halfWidth.set(C.width*.5,0,0),q.halfHeight.set(0,C.height*.5,0),i.rectArea[g]=q,g++}else if(C.isPointLight){const q=t.get(C);if(q.color.copy(C.color).multiplyScalar(C.intensity),q.distance=C.distance,q.decay=C.decay,C.castShadow){const Y=C.shadow,V=e.get(C);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,i.pointShadow[p]=V,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=C.shadow.matrix,S++}i.point[p]=q,p++}else if(C.isHemisphereLight){const q=t.get(C);q.skyColor.copy(C.color).multiplyScalar(O),q.groundColor.copy(C.groundColor).multiplyScalar(O),i.hemi[m]=q,m++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=c,i.ambient[2]=u;const R=i.hash;(R.directionalLength!==d||R.pointLength!==p||R.spotLength!==x||R.rectAreaLength!==g||R.hemiLength!==m||R.numDirectionalShadows!==y||R.numPointShadows!==S||R.numSpotShadows!==v||R.numSpotMaps!==D||R.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=p,i.hemi.length=m,i.directionalShadow.length=y,i.directionalShadowMap.length=y,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=y,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+D-T,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,R.directionalLength=d,R.pointLength=p,R.spotLength=x,R.rectAreaLength=g,R.hemiLength=m,R.numDirectionalShadows=y,R.numPointShadows=S,R.numSpotShadows=v,R.numSpotMaps=D,R.numLightProbes=w,i.version=lx++)}function r(h,f){let c=0,u=0,d=0,p=0,x=0;const g=f.matrixWorldInverse;for(let m=0,y=h.length;m<y;m++){const S=h[m];if(S.isDirectionalLight){const v=i.directional[c];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),c++}else if(S.isSpotLight){const v=i.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(g),d++}else if(S.isRectAreaLight){const v=i.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),a.identity(),o.copy(S.matrixWorld),o.premultiply(g),a.extractRotation(o),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),p++}else if(S.isPointLight){const v=i.point[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(g),u++}else if(S.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(g),x++}}}return{setup:l,setupView:r,state:i}}function df(n){const t=new cx(n),e=[],i=[];function s(f){h.camera=f,e.length=0,i.length=0}function o(f){e.push(f)}function a(f){i.push(f)}function l(){t.setup(e)}function r(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:l,setupLightsView:r,pushLight:o,pushShadow:a}}function fx(n){let t=new WeakMap;function e(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new df(n),t.set(s,[l])):o>=a.length?(l=new df(n),a.push(l)):l=a[o],l}function i(){t=new WeakMap}return{get:e,dispose:i}}class ux extends Nn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class dx extends Nn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`;function gx(n,t,e){let i=new Hh;const s=new Nt,o=new Nt,a=new Re,l=new ux({depthPacking:cp}),r=new dx,h={},f=e.maxTextureSize,c={[ts]:Mi,[Mi]:ts,[Ci]:Ci},u=new mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Nt},radius:{value:4}},vertexShader:px,fragmentShader:mx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const p=new je;p.setAttribute("position",new Si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new At(p,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=su;let m=this.type;this.render=function(T,w,R){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const M=n.getRenderTarget(),_=n.getActiveCubeFace(),C=n.getActiveMipmapLevel(),N=n.state;N.setBlending(Tn),N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const O=m!==yn&&this.type===yn,H=m===yn&&this.type!==yn;for(let $=0,q=T.length;$<q;$++){const Y=T[$],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const it=V.getFrameExtents();if(s.multiply(it),o.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(o.x=Math.floor(f/it.x),s.x=o.x*it.x,V.mapSize.x=o.x),s.y>f&&(o.y=Math.floor(f/it.y),s.y=o.y*it.y,V.mapSize.y=o.y)),V.map===null||O===!0||H===!0){const xt=this.type!==yn?{minFilter:de,magFilter:de}:{};V.map!==null&&V.map.dispose(),V.map=new Yi(s.x,s.y,xt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const rt=V.getViewportCount();for(let xt=0;xt<rt;xt++){const qt=V.getViewport(xt);a.set(o.x*qt.x,o.y*qt.y,o.x*qt.z,o.y*qt.w),N.viewport(a),V.updateMatrices(Y,xt),i=V.getFrustum(),v(w,R,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===yn&&y(V,R),V.needsUpdate=!1}m=this.type,g.needsUpdate=!1,n.setRenderTarget(M,_,C)};function y(T,w){const R=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Yi(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,R,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,R,d,x,null)}function S(T,w,R,M){let _=null;const C=R.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(C!==void 0)_=C;else if(_=R.isPointLight===!0?r:l,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const N=_.uuid,O=w.uuid;let H=h[N];H===void 0&&(H={},h[N]=H);let $=H[O];$===void 0&&($=_.clone(),H[O]=$,w.addEventListener("dispose",D)),_=$}if(_.visible=w.visible,_.wireframe=w.wireframe,M===yn?_.side=w.shadowSide!==null?w.shadowSide:w.side:_.side=w.shadowSide!==null?w.shadowSide:c[w.side],_.alphaMap=w.alphaMap,_.alphaTest=w.alphaTest,_.map=w.map,_.clipShadows=w.clipShadows,_.clippingPlanes=w.clippingPlanes,_.clipIntersection=w.clipIntersection,_.displacementMap=w.displacementMap,_.displacementScale=w.displacementScale,_.displacementBias=w.displacementBias,_.wireframeLinewidth=w.wireframeLinewidth,_.linewidth=w.linewidth,R.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const N=n.properties.get(_);N.light=R}return _}function v(T,w,R,M,_){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&_===yn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,T.matrixWorld);const O=t.update(T),H=T.material;if(Array.isArray(H)){const $=O.groups;for(let q=0,Y=$.length;q<Y;q++){const V=$[q],it=H[V.materialIndex];if(it&&it.visible){const rt=S(T,it,M,_);T.onBeforeShadow(n,T,w,R,O,rt,V),n.renderBufferDirect(R,null,O,rt,T,V),T.onAfterShadow(n,T,w,R,O,rt,V)}}}else if(H.visible){const $=S(T,H,M,_);T.onBeforeShadow(n,T,w,R,O,$,null),n.renderBufferDirect(R,null,O,$,T,null),T.onAfterShadow(n,T,w,R,O,$,null)}}const N=T.children;for(let O=0,H=N.length;O<H;O++)v(N[O],w,R,M,_)}function D(T){T.target.removeEventListener("dispose",D);for(const R in h){const M=h[R],_=T.target.uuid;_ in M&&(M[_].dispose(),delete M[_])}}}const xx={[Ll]:Pl,[Dl]:Ul,[Il]:Ol,[$s]:Nl,[Pl]:Ll,[Ul]:Dl,[Ol]:Il,[Nl]:$s};function vx(n,t){function e(){let z=!1;const ut=new Re;let K=null;const tt=new Re(0,0,0,0);return{setMask:function(gt){K!==gt&&!z&&(n.colorMask(gt,gt,gt,gt),K=gt)},setLocked:function(gt){z=gt},setClear:function(gt,pt,Yt,ke,ci){ci===!0&&(gt*=ke,pt*=ke,Yt*=ke),ut.set(gt,pt,Yt,ke),tt.equals(ut)===!1&&(n.clearColor(gt,pt,Yt,ke),tt.copy(ut))},reset:function(){z=!1,K=null,tt.set(-1,0,0,0)}}}function i(){let z=!1,ut=!1,K=null,tt=null,gt=null;return{setReversed:function(pt){if(ut!==pt){const Yt=t.get("EXT_clip_control");ut?Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.ZERO_TO_ONE_EXT):Yt.clipControlEXT(Yt.LOWER_LEFT_EXT,Yt.NEGATIVE_ONE_TO_ONE_EXT);const ke=gt;gt=null,this.setClear(ke)}ut=pt},getReversed:function(){return ut},setTest:function(pt){pt?ft(n.DEPTH_TEST):Dt(n.DEPTH_TEST)},setMask:function(pt){K!==pt&&!z&&(n.depthMask(pt),K=pt)},setFunc:function(pt){if(ut&&(pt=xx[pt]),tt!==pt){switch(pt){case Ll:n.depthFunc(n.NEVER);break;case Pl:n.depthFunc(n.ALWAYS);break;case Dl:n.depthFunc(n.LESS);break;case $s:n.depthFunc(n.LEQUAL);break;case Il:n.depthFunc(n.EQUAL);break;case Nl:n.depthFunc(n.GEQUAL);break;case Ul:n.depthFunc(n.GREATER);break;case Ol:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}tt=pt}},setLocked:function(pt){z=pt},setClear:function(pt){gt!==pt&&(ut&&(pt=1-pt),n.clearDepth(pt),gt=pt)},reset:function(){z=!1,K=null,tt=null,gt=null,ut=!1}}}function s(){let z=!1,ut=null,K=null,tt=null,gt=null,pt=null,Yt=null,ke=null,ci=null;return{setTest:function(Me){z||(Me?ft(n.STENCIL_TEST):Dt(n.STENCIL_TEST))},setMask:function(Me){ut!==Me&&!z&&(n.stencilMask(Me),ut=Me)},setFunc:function(Me,Ki,dn){(K!==Me||tt!==Ki||gt!==dn)&&(n.stencilFunc(Me,Ki,dn),K=Me,tt=Ki,gt=dn)},setOp:function(Me,Ki,dn){(pt!==Me||Yt!==Ki||ke!==dn)&&(n.stencilOp(Me,Ki,dn),pt=Me,Yt=Ki,ke=dn)},setLocked:function(Me){z=Me},setClear:function(Me){ci!==Me&&(n.clearStencil(Me),ci=Me)},reset:function(){z=!1,ut=null,K=null,tt=null,gt=null,pt=null,Yt=null,ke=null,ci=null}}}const o=new e,a=new i,l=new s,r=new WeakMap,h=new WeakMap;let f={},c={},u=new WeakMap,d=[],p=null,x=!1,g=null,m=null,y=null,S=null,v=null,D=null,T=null,w=new St(0,0,0),R=0,M=!1,_=null,C=null,N=null,O=null,H=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Y>=2);let it=null,rt={};const xt=n.getParameter(n.SCISSOR_BOX),qt=n.getParameter(n.VIEWPORT),me=new Re().fromArray(xt),j=new Re().fromArray(qt);function at(z,ut,K,tt){const gt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(z,pt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Yt=0;Yt<K;Yt++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,tt,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(ut+Yt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return pt}const bt={};bt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),bt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),bt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),bt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ft(n.DEPTH_TEST),a.setFunc($s),ie(!1),ne(vc),ft(n.CULL_FACE),F(Tn);function ft(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function Dt(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function Bt(z,ut){return c[z]!==ut?(n.bindFramebuffer(z,ut),c[z]=ut,z===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=ut),z===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ut(z,ut){let K=d,tt=!1;if(z){K=u.get(ut),K===void 0&&(K=[],u.set(ut,K));const gt=z.textures;if(K.length!==gt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Yt=gt.length;pt<Yt;pt++)K[pt]=n.COLOR_ATTACHMENT0+pt;K.length=gt.length,tt=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,tt=!0);tt&&n.drawBuffers(K)}function Vt(z){return p!==z?(n.useProgram(z),p=z,!0):!1}const Xt={[fs]:n.FUNC_ADD,[Gd]:n.FUNC_SUBTRACT,[Vd]:n.FUNC_REVERSE_SUBTRACT};Xt[Wd]=n.MIN,Xt[Xd]=n.MAX;const Ee={[qd]:n.ZERO,[Yd]:n.ONE,[Kd]:n.SRC_COLOR,[Rl]:n.SRC_ALPHA,[tp]:n.SRC_ALPHA_SATURATE,[Jd]:n.DST_COLOR,[jd]:n.DST_ALPHA,[$d]:n.ONE_MINUS_SRC_COLOR,[Cl]:n.ONE_MINUS_SRC_ALPHA,[Qd]:n.ONE_MINUS_DST_COLOR,[Zd]:n.ONE_MINUS_DST_ALPHA,[ep]:n.CONSTANT_COLOR,[ip]:n.ONE_MINUS_CONSTANT_COLOR,[np]:n.CONSTANT_ALPHA,[sp]:n.ONE_MINUS_CONSTANT_ALPHA};function F(z,ut,K,tt,gt,pt,Yt,ke,ci,Me){if(z===Tn){x===!0&&(Dt(n.BLEND),x=!1);return}if(x===!1&&(ft(n.BLEND),x=!0),z!==Hd){if(z!==g||Me!==M){if((m!==fs||v!==fs)&&(n.blendEquation(n.FUNC_ADD),m=fs,v=fs),Me)switch(z){case Ws:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Go:n.blendFunc(n.ONE,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case Ws:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Go:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case _c:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Mc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}y=null,S=null,D=null,T=null,w.set(0,0,0),R=0,g=z,M=Me}return}gt=gt||ut,pt=pt||K,Yt=Yt||tt,(ut!==m||gt!==v)&&(n.blendEquationSeparate(Xt[ut],Xt[gt]),m=ut,v=gt),(K!==y||tt!==S||pt!==D||Yt!==T)&&(n.blendFuncSeparate(Ee[K],Ee[tt],Ee[pt],Ee[Yt]),y=K,S=tt,D=pt,T=Yt),(ke.equals(w)===!1||ci!==R)&&(n.blendColor(ke.r,ke.g,ke.b,ci),w.copy(ke),R=ci),g=z,M=!1}function Ze(z,ut){z.side===Ci?Dt(n.CULL_FACE):ft(n.CULL_FACE);let K=z.side===Mi;ut&&(K=!K),ie(K),z.blending===Ws&&z.transparent===!1?F(Tn):F(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),a.setFunc(z.depthFunc),a.setTest(z.depthTest),a.setMask(z.depthWrite),o.setMask(z.colorWrite);const tt=z.stencilWrite;l.setTest(tt),tt&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Ce(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):Dt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ie(z){_!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),_=z)}function ne(z){z!==Bd?(ft(n.CULL_FACE),z!==C&&(z===vc?n.cullFace(n.BACK):z===kd?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Dt(n.CULL_FACE),C=z}function Ct(z){z!==N&&(q&&n.lineWidth(z),N=z)}function Ce(z,ut,K){z?(ft(n.POLYGON_OFFSET_FILL),(O!==ut||H!==K)&&(n.polygonOffset(ut,K),O=ut,H=K)):Dt(n.POLYGON_OFFSET_FILL)}function It(z){z?ft(n.SCISSOR_TEST):Dt(n.SCISSOR_TEST)}function A(z){z===void 0&&(z=n.TEXTURE0+$-1),it!==z&&(n.activeTexture(z),it=z)}function b(z,ut,K){K===void 0&&(it===null?K=n.TEXTURE0+$-1:K=it);let tt=rt[K];tt===void 0&&(tt={type:void 0,texture:void 0},rt[K]=tt),(tt.type!==z||tt.texture!==ut)&&(it!==K&&(n.activeTexture(K),it=K),n.bindTexture(z,ut||bt[z]),tt.type=z,tt.texture=ut)}function G(){const z=rt[it];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function Q(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Lt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function vt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ce(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ft(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function kt(z){me.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),me.copy(z))}function Mt(z){j.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),j.copy(z))}function re(z,ut){let K=h.get(ut);K===void 0&&(K=new WeakMap,h.set(ut,K));let tt=K.get(z);tt===void 0&&(tt=n.getUniformBlockIndex(ut,z.name),K.set(z,tt))}function jt(z,ut){const tt=h.get(ut).get(z);r.get(ut)!==tt&&(n.uniformBlockBinding(ut,tt,z.__bindingPointIndex),r.set(ut,tt))}function Pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},it=null,rt={},c={},u=new WeakMap,d=[],p=null,x=!1,g=null,m=null,y=null,S=null,v=null,D=null,T=null,w=new St(0,0,0),R=0,M=!1,_=null,C=null,N=null,O=null,H=null,me.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),o.reset(),a.reset(),l.reset()}return{buffers:{color:o,depth:a,stencil:l},enable:ft,disable:Dt,bindFramebuffer:Bt,drawBuffers:Ut,useProgram:Vt,setBlending:F,setMaterial:Ze,setFlipSided:ie,setCullFace:ne,setLineWidth:Ct,setPolygonOffset:Ce,setScissorTest:It,activeTexture:A,bindTexture:b,unbindTexture:G,compressedTexImage2D:Q,compressedTexImage3D:et,texImage2D:_t,texImage3D:Ft,updateUBOMapping:re,uniformBlockBinding:jt,texStorage2D:ce,texStorage3D:lt,texSubImage2D:Z,texSubImage3D:Lt,compressedTexSubImage2D:dt,compressedTexSubImage3D:vt,scissor:kt,viewport:Mt,reset:Pe}}function pf(n,t,e,i){const s=_x(i);switch(e){case mu:return n*t;case xu:return n*t;case vu:return n*t*2;case _u:return n*t/s.components*s.byteLength;case Oh:return n*t/s.components*s.byteLength;case Mu:return n*t*2/s.components*s.byteLength;case zh:return n*t*2/s.components*s.byteLength;case gu:return n*t*3/s.components*s.byteLength;case en:return n*t*4/s.components*s.byteLength;case Fh:return n*t*4/s.components*s.byteLength;case Vr:case Wr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Xr:case qr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Hl:case Vl:return Math.max(n,16)*Math.max(t,8)/4;case kl:case Gl:return Math.max(n,8)*Math.max(t,8)/2;case Wl:case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Kl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case $l:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case jl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Zl:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case th:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case eh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ih:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case nh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case sh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case oh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Yr:case ah:case lh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case yu:case hh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case ch:case fh:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _x(n){switch(n){case Pn:case uu:return{byteLength:1,components:1};case Vo:case du:case cn:return{byteLength:2,components:1};case Nh:case Uh:return{byteLength:2,components:4};case xs:case Ih:case En:return{byteLength:4,components:1};case pu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Mx(n,t,e,i,s,o,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,r=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Nt,f=new WeakMap;let c;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(A,b){return d?new OffscreenCanvas(A,b):ia("canvas")}function x(A,b,G){let Q=1;const et=It(A);if((et.width>G||et.height>G)&&(Q=G/Math.max(et.width,et.height)),Q<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(Q*et.width),Lt=Math.floor(Q*et.height);c===void 0&&(c=p(Z,Lt));const dt=b?p(Z,Lt):c;return dt.width=Z,dt.height=Lt,dt.getContext("2d").drawImage(A,0,0,Z,Lt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Lt+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function g(A){return A.generateMipmaps}function m(A){n.generateMipmap(A)}function y(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(A,b,G,Q,et=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=b;if(b===n.RED&&(G===n.FLOAT&&(Z=n.R32F),G===n.HALF_FLOAT&&(Z=n.R16F),G===n.UNSIGNED_BYTE&&(Z=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.R8UI),G===n.UNSIGNED_SHORT&&(Z=n.R16UI),G===n.UNSIGNED_INT&&(Z=n.R32UI),G===n.BYTE&&(Z=n.R8I),G===n.SHORT&&(Z=n.R16I),G===n.INT&&(Z=n.R32I)),b===n.RG&&(G===n.FLOAT&&(Z=n.RG32F),G===n.HALF_FLOAT&&(Z=n.RG16F),G===n.UNSIGNED_BYTE&&(Z=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RG8UI),G===n.UNSIGNED_SHORT&&(Z=n.RG16UI),G===n.UNSIGNED_INT&&(Z=n.RG32UI),G===n.BYTE&&(Z=n.RG8I),G===n.SHORT&&(Z=n.RG16I),G===n.INT&&(Z=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),G===n.UNSIGNED_INT&&(Z=n.RGB32UI),G===n.BYTE&&(Z=n.RGB8I),G===n.SHORT&&(Z=n.RGB16I),G===n.INT&&(Z=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),G===n.UNSIGNED_INT&&(Z=n.RGBA32UI),G===n.BYTE&&(Z=n.RGBA8I),G===n.SHORT&&(Z=n.RGBA16I),G===n.INT&&(Z=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),b===n.RGBA){const Lt=et?Sa:ae.getTransfer(Q);G===n.FLOAT&&(Z=n.RGBA32F),G===n.HALF_FLOAT&&(Z=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Z=Lt===ye?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(A,b){let G;return A?b===null||b===xs||b===Js?G=n.DEPTH24_STENCIL8:b===En?G=n.DEPTH32F_STENCIL8:b===Vo&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===xs||b===Js?G=n.DEPTH_COMPONENT24:b===En?G=n.DEPTH_COMPONENT32F:b===Vo&&(G=n.DEPTH_COMPONENT16),G}function D(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==de&&A.minFilter!==qi?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){const b=A.target;b.removeEventListener("dispose",T),R(b),b.isVideoTexture&&f.delete(b)}function w(A){const b=A.target;b.removeEventListener("dispose",w),_(b)}function R(A){const b=i.get(A);if(b.__webglInit===void 0)return;const G=A.source,Q=u.get(G);if(Q){const et=Q[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(A),Object.keys(Q).length===0&&u.delete(G)}i.remove(A)}function M(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const G=A.source,Q=u.get(G);delete Q[b.__cacheKey],a.memory.textures--}function _(A){const b=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(b.__webglFramebuffer[Q]))for(let et=0;et<b.__webglFramebuffer[Q].length;et++)n.deleteFramebuffer(b.__webglFramebuffer[Q][et]);else n.deleteFramebuffer(b.__webglFramebuffer[Q]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[Q])}else{if(Array.isArray(b.__webglFramebuffer))for(let Q=0;Q<b.__webglFramebuffer.length;Q++)n.deleteFramebuffer(b.__webglFramebuffer[Q]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let Q=0;Q<b.__webglColorRenderbuffer.length;Q++)b.__webglColorRenderbuffer[Q]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[Q]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=A.textures;for(let Q=0,et=G.length;Q<et;Q++){const Z=i.get(G[Q]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(G[Q])}i.remove(A)}let C=0;function N(){C=0}function O(){const A=C;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),C+=1,A}function H(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function $(A,b){const G=i.get(A);if(A.isVideoTexture&&Ct(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const Q=A.image;if(Q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,A,b);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function q(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function Y(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,b);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function V(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){at(G,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const it={[ta]:n.REPEAT,[ps]:n.CLAMP_TO_EDGE,[Bl]:n.MIRRORED_REPEAT},rt={[de]:n.NEAREST,[lp]:n.NEAREST_MIPMAP_NEAREST,[nr]:n.NEAREST_MIPMAP_LINEAR,[qi]:n.LINEAR,[Pa]:n.LINEAR_MIPMAP_NEAREST,[bn]:n.LINEAR_MIPMAP_LINEAR},xt={[up]:n.NEVER,[vp]:n.ALWAYS,[dp]:n.LESS,[Su]:n.LEQUAL,[pp]:n.EQUAL,[xp]:n.GEQUAL,[mp]:n.GREATER,[gp]:n.NOTEQUAL};function qt(A,b){if(b.type===En&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===qi||b.magFilter===Pa||b.magFilter===nr||b.magFilter===bn||b.minFilter===qi||b.minFilter===Pa||b.minFilter===nr||b.minFilter===bn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,it[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,it[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,it[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,rt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,rt[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,xt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===de||b.minFilter!==nr&&b.minFilter!==bn||b.type===En&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function me(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));const Q=b.source;let et=u.get(Q);et===void 0&&(et={},u.set(Q,et));const Z=H(b);if(Z!==A.__cacheKey){et[Z]===void 0&&(et[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),et[Z].usedTimes++;const Lt=et[A.__cacheKey];Lt!==void 0&&(et[A.__cacheKey].usedTimes--,Lt.usedTimes===0&&M(b)),A.__cacheKey=Z,A.__webglTexture=et[Z].texture}return G}function j(A,b,G){let Q=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(Q=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(Q=n.TEXTURE_3D);const et=me(A,b),Z=b.source;e.bindTexture(Q,A.__webglTexture,n.TEXTURE0+G);const Lt=i.get(Z);if(Z.version!==Lt.__version||et===!0){e.activeTexture(n.TEXTURE0+G);const dt=ae.getPrimaries(ae.workingColorSpace),vt=b.colorSpace===Xn?null:ae.getPrimaries(b.colorSpace),ce=b.colorSpace===Xn||dt===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ce);let lt=x(b.image,!1,s.maxTextureSize);lt=Ce(b,lt);const _t=o.convert(b.format,b.colorSpace),Ft=o.convert(b.type);let kt=S(b.internalFormat,_t,Ft,b.colorSpace,b.isVideoTexture);qt(Q,b);let Mt;const re=b.mipmaps,jt=b.isVideoTexture!==!0,Pe=Lt.__version===void 0||et===!0,z=Z.dataReady,ut=D(b,lt);if(b.isDepthTexture)kt=v(b.format===Qs,b.type),Pe&&(jt?e.texStorage2D(n.TEXTURE_2D,1,kt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,kt,lt.width,lt.height,0,_t,Ft,null));else if(b.isDataTexture)if(re.length>0){jt&&Pe&&e.texStorage2D(n.TEXTURE_2D,ut,kt,re[0].width,re[0].height);for(let K=0,tt=re.length;K<tt;K++)Mt=re[K],jt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,_t,Ft,Mt.data):e.texImage2D(n.TEXTURE_2D,K,kt,Mt.width,Mt.height,0,_t,Ft,Mt.data);b.generateMipmaps=!1}else jt?(Pe&&e.texStorage2D(n.TEXTURE_2D,ut,kt,lt.width,lt.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,_t,Ft,lt.data)):e.texImage2D(n.TEXTURE_2D,0,kt,lt.width,lt.height,0,_t,Ft,lt.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){jt&&Pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,kt,re[0].width,re[0].height,lt.depth);for(let K=0,tt=re.length;K<tt;K++)if(Mt=re[K],b.format!==en)if(_t!==null)if(jt){if(z)if(b.layerUpdates.size>0){const gt=pf(Mt.width,Mt.height,b.format,b.type);for(const pt of b.layerUpdates){const Yt=Mt.data.subarray(pt*gt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,pt,Mt.width,Mt.height,1,_t,Yt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,lt.depth,_t,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,kt,Mt.width,Mt.height,lt.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else jt?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,lt.depth,_t,Ft,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,kt,Mt.width,Mt.height,lt.depth,0,_t,Ft,Mt.data)}else{jt&&Pe&&e.texStorage2D(n.TEXTURE_2D,ut,kt,re[0].width,re[0].height);for(let K=0,tt=re.length;K<tt;K++)Mt=re[K],b.format!==en?_t!==null?jt?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,_t,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,kt,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):jt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,_t,Ft,Mt.data):e.texImage2D(n.TEXTURE_2D,K,kt,Mt.width,Mt.height,0,_t,Ft,Mt.data)}else if(b.isDataArrayTexture)if(jt){if(Pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,kt,lt.width,lt.height,lt.depth),z)if(b.layerUpdates.size>0){const K=pf(lt.width,lt.height,b.format,b.type);for(const tt of b.layerUpdates){const gt=lt.data.subarray(tt*K/lt.data.BYTES_PER_ELEMENT,(tt+1)*K/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,_t,Ft,gt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,_t,Ft,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,kt,lt.width,lt.height,lt.depth,0,_t,Ft,lt.data);else if(b.isData3DTexture)jt?(Pe&&e.texStorage3D(n.TEXTURE_3D,ut,kt,lt.width,lt.height,lt.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,_t,Ft,lt.data)):e.texImage3D(n.TEXTURE_3D,0,kt,lt.width,lt.height,lt.depth,0,_t,Ft,lt.data);else if(b.isFramebufferTexture){if(Pe)if(jt)e.texStorage2D(n.TEXTURE_2D,ut,kt,lt.width,lt.height);else{let K=lt.width,tt=lt.height;for(let gt=0;gt<ut;gt++)e.texImage2D(n.TEXTURE_2D,gt,kt,K,tt,0,_t,Ft,null),K>>=1,tt>>=1}}else if(re.length>0){if(jt&&Pe){const K=It(re[0]);e.texStorage2D(n.TEXTURE_2D,ut,kt,K.width,K.height)}for(let K=0,tt=re.length;K<tt;K++)Mt=re[K],jt?z&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,_t,Ft,Mt):e.texImage2D(n.TEXTURE_2D,K,kt,_t,Ft,Mt);b.generateMipmaps=!1}else if(jt){if(Pe){const K=It(lt);e.texStorage2D(n.TEXTURE_2D,ut,kt,K.width,K.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Ft,lt)}else e.texImage2D(n.TEXTURE_2D,0,kt,_t,Ft,lt);g(b)&&m(Q),Lt.__version=Z.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function at(A,b,G){if(b.image.length!==6)return;const Q=me(A,b),et=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const Z=i.get(et);if(et.version!==Z.__version||Q===!0){e.activeTexture(n.TEXTURE0+G);const Lt=ae.getPrimaries(ae.workingColorSpace),dt=b.colorSpace===Xn?null:ae.getPrimaries(b.colorSpace),vt=b.colorSpace===Xn||Lt===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const ce=b.isCompressedTexture||b.image[0].isCompressedTexture,lt=b.image[0]&&b.image[0].isDataTexture,_t=[];for(let tt=0;tt<6;tt++)!ce&&!lt?_t[tt]=x(b.image[tt],!0,s.maxCubemapSize):_t[tt]=lt?b.image[tt].image:b.image[tt],_t[tt]=Ce(b,_t[tt]);const Ft=_t[0],kt=o.convert(b.format,b.colorSpace),Mt=o.convert(b.type),re=S(b.internalFormat,kt,Mt,b.colorSpace),jt=b.isVideoTexture!==!0,Pe=Z.__version===void 0||Q===!0,z=et.dataReady;let ut=D(b,Ft);qt(n.TEXTURE_CUBE_MAP,b);let K;if(ce){jt&&Pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,re,Ft.width,Ft.height);for(let tt=0;tt<6;tt++){K=_t[tt].mipmaps;for(let gt=0;gt<K.length;gt++){const pt=K[gt];b.format!==en?kt!==null?jt?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,pt.width,pt.height,kt,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,re,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,0,0,pt.width,pt.height,kt,Mt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt,re,pt.width,pt.height,0,kt,Mt,pt.data)}}}else{if(K=b.mipmaps,jt&&Pe){K.length>0&&ut++;const tt=It(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,re,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,_t[tt].width,_t[tt].height,kt,Mt,_t[tt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,re,_t[tt].width,_t[tt].height,0,kt,Mt,_t[tt].data);for(let gt=0;gt<K.length;gt++){const Yt=K[gt].image[tt].image;jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,Yt.width,Yt.height,kt,Mt,Yt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,re,Yt.width,Yt.height,0,kt,Mt,Yt.data)}}else{jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,kt,Mt,_t[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,re,kt,Mt,_t[tt]);for(let gt=0;gt<K.length;gt++){const pt=K[gt];jt?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,0,0,kt,Mt,pt.image[tt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+tt,gt+1,re,kt,Mt,pt.image[tt])}}}g(b)&&m(n.TEXTURE_CUBE_MAP),Z.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function bt(A,b,G,Q,et,Z){const Lt=o.convert(G.format,G.colorSpace),dt=o.convert(G.type),vt=S(G.internalFormat,Lt,dt,G.colorSpace),ce=i.get(b),lt=i.get(G);if(lt.__renderTarget=b,!ce.__hasExternalTextures){const _t=Math.max(1,b.width>>Z),Ft=Math.max(1,b.height>>Z);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,vt,_t,Ft,b.depth,0,Lt,dt,null):e.texImage2D(et,Z,vt,_t,Ft,0,Lt,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),ne(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,Q,et,lt.__webglTexture,0,ie(b)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,Q,et,lt.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(A,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){const Q=b.depthTexture,et=Q&&Q.isDepthTexture?Q.type:null,Z=v(b.stencilBuffer,et),Lt=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=ie(b);ne(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,Z,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Z,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Z,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Lt,n.RENDERBUFFER,A)}else{const Q=b.textures;for(let et=0;et<Q.length;et++){const Z=Q[et],Lt=o.convert(Z.format,Z.colorSpace),dt=o.convert(Z.type),vt=S(Z.internalFormat,Lt,dt,Z.colorSpace),ce=ie(b);G&&ne(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ce,vt,b.width,b.height):ne(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ce,vt,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,vt,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Dt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const Q=i.get(b.depthTexture);Q.__renderTarget=b,(!Q.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const et=Q.__webglTexture,Z=ie(b);if(b.depthTexture.format===Xs)ne(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(b.depthTexture.format===Qs)ne(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Bt(A){const b=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const Q=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),Q){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,Q.removeEventListener("dispose",et)};Q.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=Q}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Dt(b.__webglFramebuffer,A)}else if(G){b.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[Q]),b.__webglDepthbuffer[Q]===void 0)b.__webglDepthbuffer[Q]=n.createRenderbuffer(),ft(b.__webglDepthbuffer[Q],A,!1);else{const et=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[Q];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ft(b.__webglDepthbuffer,A,!1);else{const Q=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,Q,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(A,b,G){const Q=i.get(A);b!==void 0&&bt(Q.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Bt(A)}function Vt(A){const b=A.texture,G=i.get(A),Q=i.get(b);A.addEventListener("dispose",w);const et=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Lt=et.length>1;if(Lt||(Q.__webglTexture===void 0&&(Q.__webglTexture=n.createTexture()),Q.__version=b.version,a.memory.textures++),Z){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let vt=0;vt<b.mipmaps.length;vt++)G.__webglFramebuffer[dt][vt]=n.createFramebuffer()}else G.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)G.__webglFramebuffer[dt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Lt)for(let dt=0,vt=et.length;dt<vt;dt++){const ce=i.get(et[dt]);ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&ne(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const vt=et[dt];G.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);const ce=o.convert(vt.format,vt.colorSpace),lt=o.convert(vt.type),_t=S(vt.internalFormat,ce,lt,vt.colorSpace,A.isXRRenderTarget===!0),Ft=ie(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ft,_t,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,Q.__webglTexture),qt(n.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)bt(G.__webglFramebuffer[dt][vt],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,vt);else bt(G.__webglFramebuffer[dt],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(b)&&m(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Lt){for(let dt=0,vt=et.length;dt<vt;dt++){const ce=et[dt],lt=i.get(ce);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),qt(n.TEXTURE_2D,ce),bt(G.__webglFramebuffer,A,ce,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),g(ce)&&m(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,Q.__webglTexture),qt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let vt=0;vt<b.mipmaps.length;vt++)bt(G.__webglFramebuffer[vt],A,b,n.COLOR_ATTACHMENT0,dt,vt);else bt(G.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,dt,0);g(b)&&m(dt),e.unbindTexture()}A.depthBuffer&&Bt(A)}function Xt(A){const b=A.textures;for(let G=0,Q=b.length;G<Q;G++){const et=b[G];if(g(et)){const Z=y(A),Lt=i.get(et).__webglTexture;e.bindTexture(Z,Lt),m(Z),e.unbindTexture()}}}const Ee=[],F=[];function Ze(A){if(A.samples>0){if(ne(A)===!1){const b=A.textures,G=A.width,Q=A.height;let et=n.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Lt=i.get(A),dt=b.length>1;if(dt)for(let vt=0;vt<b.length;vt++)e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglFramebuffer);for(let vt=0;vt<b.length;vt++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[vt]);const ce=i.get(b[vt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ce,0)}n.blitFramebuffer(0,0,G,Q,0,0,G,Q,et,n.NEAREST),r===!0&&(Ee.length=0,F.length=0,Ee.push(n.COLOR_ATTACHMENT0+vt),A.depthBuffer&&A.resolveDepthBuffer===!1&&(Ee.push(Z),F.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ee))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let vt=0;vt<b.length;vt++){e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.RENDERBUFFER,Lt.__webglColorRenderbuffer[vt]);const ce=i.get(b[vt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Lt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+vt,n.TEXTURE_2D,ce,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Lt.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&r){const b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function ie(A){return Math.min(s.maxSamples,A.samples)}function ne(A){const b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Ct(A){const b=a.render.frame;f.get(A)!==b&&(f.set(A,b),A.update())}function Ce(A,b){const G=A.colorSpace,Q=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==oo&&G!==Xn&&(ae.getTransfer(G)===ye?(Q!==en||et!==Pn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function It(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=O,this.resetTextureUnits=N,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Xt,this.updateMultisampleRenderTarget=Ze,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=bt,this.useMultisampledRTT=ne}function yx(n,t){function e(i,s=Xn){let o;const a=ae.getTransfer(s);if(i===Pn)return n.UNSIGNED_BYTE;if(i===Nh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Uh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===pu)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===uu)return n.BYTE;if(i===du)return n.SHORT;if(i===Vo)return n.UNSIGNED_SHORT;if(i===Ih)return n.INT;if(i===xs)return n.UNSIGNED_INT;if(i===En)return n.FLOAT;if(i===cn)return n.HALF_FLOAT;if(i===mu)return n.ALPHA;if(i===gu)return n.RGB;if(i===en)return n.RGBA;if(i===xu)return n.LUMINANCE;if(i===vu)return n.LUMINANCE_ALPHA;if(i===Xs)return n.DEPTH_COMPONENT;if(i===Qs)return n.DEPTH_STENCIL;if(i===_u)return n.RED;if(i===Oh)return n.RED_INTEGER;if(i===Mu)return n.RG;if(i===zh)return n.RG_INTEGER;if(i===Fh)return n.RGBA_INTEGER;if(i===Vr||i===Wr||i===Xr||i===qr)if(a===ye)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===Vr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===Vr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wr)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===kl||i===Hl||i===Gl||i===Vl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===kl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Hl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Gl)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Vl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Wl||i===Xl||i===ql)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Wl||i===Xl)return a===ye?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ql)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Yl||i===Kl||i===$l||i===jl||i===Zl||i===Jl||i===Ql||i===th||i===eh||i===ih||i===nh||i===sh||i===oh||i===rh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===Yl)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Kl)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===$l)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===jl)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Zl)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Jl)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ql)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===th)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===eh)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ih)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===nh)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===sh)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===oh)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rh)return a===ye?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Yr||i===ah||i===lh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Yr)return a===ye?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ah)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===yu||i===hh||i===ch||i===fh)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Yr)return o.COMPRESSED_RED_RGTC1_EXT;if(i===hh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===ch)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===fh)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Js?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Sx extends Oi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Se extends Ke{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bx={type:"move"};class ol{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,a=null;const l=this._targetRay,r=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i),m=this._getHandJoint(h,x);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const f=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],u=f.position.distanceTo(c.position),d=.02,p=.005;h.inputState.pinching&&u>d+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=d-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else r!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(r.matrix.fromArray(o.transform.matrix),r.matrix.decompose(r.position,r.rotation,r.scale),r.matrixWorldNeedsUpdate=!0,o.linearVelocity?(r.hasLinearVelocity=!0,r.linearVelocity.copy(o.linearVelocity)):r.hasLinearVelocity=!1,o.angularVelocity?(r.hasAngularVelocity=!0,r.angularVelocity.copy(o.angularVelocity)):r.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return l!==null&&(l.visible=s!==null),r!==null&&(r.visible=o!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,wx=`
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

}`;class Tx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new yi,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new mi({vertexShader:Ex,fragmentShader:wx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new Cn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ax extends ro{constructor(t,e){super();const i=this;let s=null,o=1,a=null,l="local-floor",r=1,h=null,f=null,c=null,u=null,d=null,p=null;const x=new Tx,g=e.getContextAttributes();let m=null,y=null;const S=[],v=[],D=new Nt;let T=null;const w=new Oi;w.viewport=new Re;const R=new Oi;R.viewport=new Re;const M=[w,R],_=new Sx;let C=null,N=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let at=S[j];return at===void 0&&(at=new ol,S[j]=at),at.getTargetRaySpace()},this.getControllerGrip=function(j){let at=S[j];return at===void 0&&(at=new ol,S[j]=at),at.getGripSpace()},this.getHand=function(j){let at=S[j];return at===void 0&&(at=new ol,S[j]=at),at.getHandSpace()};function O(j){const at=v.indexOf(j.inputSource);if(at===-1)return;const bt=S[at];bt!==void 0&&(bt.update(j.inputSource,j.frame,h||a),bt.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",O),s.removeEventListener("selectstart",O),s.removeEventListener("selectend",O),s.removeEventListener("squeeze",O),s.removeEventListener("squeezestart",O),s.removeEventListener("squeezeend",O),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let j=0;j<S.length;j++){const at=v[j];at!==null&&(v[j]=null,S[j].disconnect(at))}C=null,N=null,x.reset(),t.setRenderTarget(m),d=null,u=null,c=null,s=null,y=null,me.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){o=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(m=t.getRenderTarget(),s.addEventListener("select",O),s.addEventListener("selectstart",O),s.addEventListener("selectend",O),s.addEventListener("squeeze",O),s.addEventListener("squeezestart",O),s.addEventListener("squeezeend",O),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const at={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:o};d=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),y=new Yi(d.framebufferWidth,d.framebufferHeight,{format:en,type:Pn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let at=null,bt=null,ft=null;g.depth&&(ft=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=g.stencil?Qs:Xs,bt=g.stencil?Js:xs);const Dt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:o};c=new XRWebGLBinding(s,e),u=c.createProjectionLayer(Dt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),y=new Yi(u.textureWidth,u.textureHeight,{format:en,type:Pn,depthTexture:new Nu(u.textureWidth,u.textureHeight,bt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(r),h=null,a=await s.requestReferenceSpace(l),me.setContext(s),me.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(j){for(let at=0;at<j.removed.length;at++){const bt=j.removed[at],ft=v.indexOf(bt);ft>=0&&(v[ft]=null,S[ft].disconnect(bt))}for(let at=0;at<j.added.length;at++){const bt=j.added[at];let ft=v.indexOf(bt);if(ft===-1){for(let Bt=0;Bt<S.length;Bt++)if(Bt>=v.length){v.push(bt),ft=Bt;break}else if(v[Bt]===null){v[Bt]=bt,ft=Bt;break}if(ft===-1)break}const Dt=S[ft];Dt&&Dt.connect(bt)}}const q=new P,Y=new P;function V(j,at,bt){q.setFromMatrixPosition(at.matrixWorld),Y.setFromMatrixPosition(bt.matrixWorld);const ft=q.distanceTo(Y),Dt=at.projectionMatrix.elements,Bt=bt.projectionMatrix.elements,Ut=Dt[14]/(Dt[10]-1),Vt=Dt[14]/(Dt[10]+1),Xt=(Dt[9]+1)/Dt[5],Ee=(Dt[9]-1)/Dt[5],F=(Dt[8]-1)/Dt[0],Ze=(Bt[8]+1)/Bt[0],ie=Ut*F,ne=Ut*Ze,Ct=ft/(-F+Ze),Ce=Ct*-F;if(at.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ce),j.translateZ(Ct),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Dt[10]===-1)j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const It=Ut+Ct,A=Vt+Ct,b=ie-Ce,G=ne+(ft-Ce),Q=Xt*Vt/A*It,et=Ee*Vt/A*It;j.projectionMatrix.makePerspective(b,G,Q,et,It,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function it(j,at){at===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(at.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let at=j.near,bt=j.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(bt=x.depthFar)),_.near=R.near=w.near=at,_.far=R.far=w.far=bt,(C!==_.near||N!==_.far)&&(s.updateRenderState({depthNear:_.near,depthFar:_.far}),C=_.near,N=_.far),w.layers.mask=j.layers.mask|2,R.layers.mask=j.layers.mask|4,_.layers.mask=w.layers.mask|R.layers.mask;const ft=j.parent,Dt=_.cameras;it(_,ft);for(let Bt=0;Bt<Dt.length;Bt++)it(Dt[Bt],ft);Dt.length===2?V(_,w,R):_.projectionMatrix.copy(w.projectionMatrix),rt(j,_,ft)};function rt(j,at,bt){bt===null?j.matrix.copy(at.matrixWorld):(j.matrix.copy(bt.matrixWorld),j.matrix.invert(),j.matrix.multiply(at.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(at.projectionMatrix),j.projectionMatrixInverse.copy(at.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=dh*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(u===null&&d===null))return r},this.setFoveation=function(j){r=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(_)};let xt=null;function qt(j,at){if(f=at.getViewerPose(h||a),p=at,f!==null){const bt=f.views;d!==null&&(t.setRenderTargetFramebuffer(y,d.framebuffer),t.setRenderTarget(y));let ft=!1;bt.length!==_.cameras.length&&(_.cameras.length=0,ft=!0);for(let Bt=0;Bt<bt.length;Bt++){const Ut=bt[Bt];let Vt=null;if(d!==null)Vt=d.getViewport(Ut);else{const Ee=c.getViewSubImage(u,Ut);Vt=Ee.viewport,Bt===0&&(t.setRenderTargetTextures(y,Ee.colorTexture,u.ignoreDepthValues?void 0:Ee.depthStencilTexture),t.setRenderTarget(y))}let Xt=M[Bt];Xt===void 0&&(Xt=new Oi,Xt.layers.enable(Bt),Xt.viewport=new Re,M[Bt]=Xt),Xt.matrix.fromArray(Ut.transform.matrix),Xt.matrix.decompose(Xt.position,Xt.quaternion,Xt.scale),Xt.projectionMatrix.fromArray(Ut.projectionMatrix),Xt.projectionMatrixInverse.copy(Xt.projectionMatrix).invert(),Xt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),Bt===0&&(_.matrix.copy(Xt.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ft===!0&&_.cameras.push(Xt)}const Dt=s.enabledFeatures;if(Dt&&Dt.includes("depth-sensing")){const Bt=c.getDepthInformation(bt[0]);Bt&&Bt.isValid&&Bt.texture&&x.init(t,Bt,s.renderState)}}for(let bt=0;bt<S.length;bt++){const ft=v[bt],Dt=S[bt];ft!==null&&Dt!==void 0&&Dt.update(ft,at,h||a)}xt&&xt(j,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),p=null}const me=new Iu;me.setAnimationLoop(qt),this.setAnimationLoop=function(j){xt=j},this.dispose=function(){}}}const ls=new on,Rx=new Ne;function Cx(n,t){function e(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function i(g,m){m.color.getRGB(g.fogColor.value,Lu(n)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function s(g,m,y,S,v){m.isMeshBasicMaterial||m.isMeshLambertMaterial?o(g,m):m.isMeshToonMaterial?(o(g,m),c(g,m)):m.isMeshPhongMaterial?(o(g,m),f(g,m)):m.isMeshStandardMaterial?(o(g,m),u(g,m),m.isMeshPhysicalMaterial&&d(g,m,v)):m.isMeshMatcapMaterial?(o(g,m),p(g,m)):m.isMeshDepthMaterial?o(g,m):m.isMeshDistanceMaterial?(o(g,m),x(g,m)):m.isMeshNormalMaterial?o(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&l(g,m)):m.isPointsMaterial?r(g,m,y,S):m.isSpriteMaterial?h(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function o(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,e(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===Mi&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,e(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===Mi&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,e(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,e(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=t.get(m),S=y.envMap,v=y.envMapRotation;S&&(g.envMap.value=S,ls.copy(v),ls.x*=-1,ls.y*=-1,ls.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ls.y*=-1,ls.z*=-1),g.envMapRotation.value.setFromMatrix4(Rx.makeRotationFromEuler(ls)),g.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform))}function l(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function r(g,m,y,S){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=S*.5,m.map&&(g.map.value=m.map,e(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function h(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,e(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,e(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function f(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function c(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function u(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function d(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Mi&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function x(g,m){const y=t.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Lx(n,t,e,i){let s={},o={},a=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function r(y,S){const v=S.program;i.uniformBlockBinding(y,v)}function h(y,S){let v=s[y.id];v===void 0&&(p(y),v=f(y),s[y.id]=v,y.addEventListener("dispose",g));const D=S.program;i.updateUBOMapping(y,D);const T=t.render.frame;o[y.id]!==T&&(u(y),o[y.id]=T)}function f(y){const S=c();y.__bindingPointIndex=S;const v=n.createBuffer(),D=y.__size,T=y.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,D,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function c(){for(let y=0;y<l;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){const S=s[y.id],v=y.uniforms,D=y.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let T=0,w=v.length;T<w;T++){const R=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,_=R.length;M<_;M++){const C=R[M];if(d(C,T,M,D)===!0){const N=C.__offset,O=Array.isArray(C.value)?C.value:[C.value];let H=0;for(let $=0;$<O.length;$++){const q=O[$],Y=x(q);typeof q=="number"||typeof q=="boolean"?(C.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,N+H,C.__data)):q.isMatrix3?(C.__data[0]=q.elements[0],C.__data[1]=q.elements[1],C.__data[2]=q.elements[2],C.__data[3]=0,C.__data[4]=q.elements[3],C.__data[5]=q.elements[4],C.__data[6]=q.elements[5],C.__data[7]=0,C.__data[8]=q.elements[6],C.__data[9]=q.elements[7],C.__data[10]=q.elements[8],C.__data[11]=0):(q.toArray(C.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,N,C.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(y,S,v,D){const T=y.value,w=S+"_"+v;if(D[w]===void 0)return typeof T=="number"||typeof T=="boolean"?D[w]=T:D[w]=T.clone(),!0;{const R=D[w];if(typeof T=="number"||typeof T=="boolean"){if(R!==T)return D[w]=T,!0}else if(R.equals(T)===!1)return R.copy(T),!0}return!1}function p(y){const S=y.uniforms;let v=0;const D=16;for(let w=0,R=S.length;w<R;w++){const M=Array.isArray(S[w])?S[w]:[S[w]];for(let _=0,C=M.length;_<C;_++){const N=M[_],O=Array.isArray(N.value)?N.value:[N.value];for(let H=0,$=O.length;H<$;H++){const q=O[H],Y=x(q),V=v%D,it=V%Y.boundary,rt=V+it;v+=it,rt!==0&&D-rt<Y.storage&&(v+=D-rt),N.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),N.__offset=v,v+=Y.storage}}}const T=v%D;return T>0&&(v+=D-T),y.__size=v,y.__cache={},this}function x(y){const S={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(S.boundary=4,S.storage=4):y.isVector2?(S.boundary=8,S.storage=8):y.isVector3||y.isColor?(S.boundary=16,S.storage=12):y.isVector4?(S.boundary=16,S.storage=16):y.isMatrix3?(S.boundary=48,S.storage=48):y.isMatrix4?(S.boundary=64,S.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),S}function g(y){const S=y.target;S.removeEventListener("dispose",g);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function m(){for(const y in s)n.deleteBuffer(s[y]);a=[],s={},o={}}return{bind:r,update:h,dispose:m}}class Px{constructor(t={}){const{canvas:e=Mp(),context:i=null,depth:s=!0,stencil:o=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:r=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const p=new Uint32Array(4),x=new Int32Array(4);let g=null,m=null;const y=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=si,this.toneMapping=An,this.toneMappingExposure=1;const v=this;let D=!1,T=0,w=0,R=null,M=-1,_=null;const C=new Re,N=new Re;let O=null;const H=new St(0);let $=0,q=e.width,Y=e.height,V=1,it=null,rt=null;const xt=new Re(0,0,q,Y),qt=new Re(0,0,q,Y);let me=!1;const j=new Hh;let at=!1,bt=!1;const ft=new Ne,Dt=new Ne,Bt=new P,Ut=new Re,Vt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xt=!1;function Ee(){return R===null?V:1}let F=i;function Ze(E,B){return e.getContext(E,B)}try{const E={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:r,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ph}`),e.addEventListener("webglcontextlost",tt,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),F===null){const B="webgl2";if(F=Ze(B,E),F===null)throw Ze(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ie,ne,Ct,Ce,It,A,b,G,Q,et,Z,Lt,dt,vt,ce,lt,_t,Ft,kt,Mt,re,jt,Pe,z;function ut(){ie=new Og(F),ie.init(),jt=new yx(F,ie),ne=new Lg(F,ie,t,jt),Ct=new vx(F,ie),ne.reverseDepthBuffer&&u&&Ct.buffers.depth.setReversed(!0),Ce=new Bg(F),It=new nx,A=new Mx(F,ie,Ct,It,ne,jt,Ce),b=new Dg(v),G=new Ug(v),Q=new qp(F),Pe=new Rg(F,Q),et=new zg(F,Q,Ce,Pe),Z=new Hg(F,et,Q,Ce),kt=new kg(F,ne,A),lt=new Pg(It),Lt=new ix(v,b,G,ie,ne,Pe,lt),dt=new Cx(v,It),vt=new ox,ce=new fx(ie),Ft=new Ag(v,b,G,Ct,Z,d,r),_t=new gx(v,Z,ne),z=new Lx(F,Ce,ne,Ct),Mt=new Cg(F,ie,Ce),re=new Fg(F,ie,Ce),Ce.programs=Lt.programs,v.capabilities=ne,v.extensions=ie,v.properties=It,v.renderLists=vt,v.shadowMap=_t,v.state=Ct,v.info=Ce}ut();const K=new Ax(v,F);this.xr=K,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const E=ie.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ie.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(q,Y,!1))},this.getSize=function(E){return E.set(q,Y)},this.setSize=function(E,B,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,Y=B,e.width=Math.floor(E*V),e.height=Math.floor(B*V),W===!0&&(e.style.width=E+"px",e.style.height=B+"px"),this.setViewport(0,0,E,B)},this.getDrawingBufferSize=function(E){return E.set(q*V,Y*V).floor()},this.setDrawingBufferSize=function(E,B,W){q=E,Y=B,V=W,e.width=Math.floor(E*W),e.height=Math.floor(B*W),this.setViewport(0,0,E,B)},this.getCurrentViewport=function(E){return E.copy(C)},this.getViewport=function(E){return E.copy(xt)},this.setViewport=function(E,B,W,X){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,B,W,X),Ct.viewport(C.copy(xt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(qt)},this.setScissor=function(E,B,W,X){E.isVector4?qt.set(E.x,E.y,E.z,E.w):qt.set(E,B,W,X),Ct.scissor(N.copy(qt).multiplyScalar(V).round())},this.getScissorTest=function(){return me},this.setScissorTest=function(E){Ct.setScissorTest(me=E)},this.setOpaqueSort=function(E){it=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(Ft.getClearColor())},this.setClearColor=function(){Ft.setClearColor.apply(Ft,arguments)},this.getClearAlpha=function(){return Ft.getClearAlpha()},this.setClearAlpha=function(){Ft.setClearAlpha.apply(Ft,arguments)},this.clear=function(E=!0,B=!0,W=!0){let X=0;if(E){let k=!1;if(R!==null){const ht=R.texture.format;k=ht===Fh||ht===zh||ht===Oh}if(k){const ht=R.texture.type,mt=ht===Pn||ht===xs||ht===Vo||ht===Js||ht===Nh||ht===Uh,Et=Ft.getClearColor(),wt=Ft.getClearAlpha(),Ht=Et.r,Kt=Et.g,Tt=Et.b;mt?(p[0]=Ht,p[1]=Kt,p[2]=Tt,p[3]=wt,F.clearBufferuiv(F.COLOR,0,p)):(x[0]=Ht,x[1]=Kt,x[2]=Tt,x[3]=wt,F.clearBufferiv(F.COLOR,0,x))}else X|=F.COLOR_BUFFER_BIT}B&&(X|=F.DEPTH_BUFFER_BIT),W&&(X|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",tt,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),vt.dispose(),ce.dispose(),It.dispose(),b.dispose(),G.dispose(),Z.dispose(),Pe.dispose(),z.dispose(),Lt.dispose(),K.dispose(),K.removeEventListener("sessionstart",cc),K.removeEventListener("sessionend",fc),is.stop()};function tt(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const E=Ce.autoReset,B=_t.enabled,W=_t.autoUpdate,X=_t.needsUpdate,k=_t.type;ut(),Ce.autoReset=E,_t.enabled=B,_t.autoUpdate=W,_t.needsUpdate=X,_t.type=k}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Yt(E){const B=E.target;B.removeEventListener("dispose",Yt),ke(B)}function ke(E){ci(E),It.remove(E)}function ci(E){const B=It.get(E).programs;B!==void 0&&(B.forEach(function(W){Lt.releaseProgram(W)}),E.isShaderMaterial&&Lt.releaseShaderCache(E))}this.renderBufferDirect=function(E,B,W,X,k,ht){B===null&&(B=Vt);const mt=k.isMesh&&k.matrixWorld.determinant()<0,Et=Od(E,B,W,X,k);Ct.setMaterial(X,mt);let wt=W.index,Ht=1;if(X.wireframe===!0){if(wt=et.getWireframeAttribute(W),wt===void 0)return;Ht=2}const Kt=W.drawRange,Tt=W.attributes.position;let pe=Kt.start*Ht,De=(Kt.start+Kt.count)*Ht;ht!==null&&(pe=Math.max(pe,ht.start*Ht),De=Math.min(De,(ht.start+ht.count)*Ht)),wt!==null?(pe=Math.max(pe,0),De=Math.min(De,wt.count)):Tt!=null&&(pe=Math.max(pe,0),De=Math.min(De,Tt.count));const Ue=De-pe;if(Ue<0||Ue===1/0)return;Pe.setup(k,X,Et,W,wt);let Ei,xe=Mt;if(wt!==null&&(Ei=Q.get(wt),xe=re,xe.setIndex(Ei)),k.isMesh)X.wireframe===!0?(Ct.setLineWidth(X.wireframeLinewidth*Ee()),xe.setMode(F.LINES)):xe.setMode(F.TRIANGLES);else if(k.isLine){let Pt=X.linewidth;Pt===void 0&&(Pt=1),Ct.setLineWidth(Pt*Ee()),k.isLineSegments?xe.setMode(F.LINES):k.isLineLoop?xe.setMode(F.LINE_LOOP):xe.setMode(F.LINE_STRIP)}else k.isPoints?xe.setMode(F.POINTS):k.isSprite&&xe.setMode(F.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)xe.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(ie.get("WEBGL_multi_draw"))xe.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const Pt=k._multiDrawStarts,pn=k._multiDrawCounts,ve=k._multiDrawCount,$i=wt?Q.get(wt).bytesPerElement:1,ys=It.get(X).currentProgram.getUniforms();for(let Di=0;Di<ve;Di++)ys.setValue(F,"_gl_DrawID",Di),xe.render(Pt[Di]/$i,pn[Di])}else if(k.isInstancedMesh)xe.renderInstances(pe,Ue,k.count);else if(W.isInstancedBufferGeometry){const Pt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,pn=Math.min(W.instanceCount,Pt);xe.renderInstances(pe,Ue,pn)}else xe.render(pe,Ue)};function Me(E,B,W){E.transparent===!0&&E.side===Ci&&E.forceSinglePass===!1?(E.side=Mi,E.needsUpdate=!0,ir(E,B,W),E.side=ts,E.needsUpdate=!0,ir(E,B,W),E.side=Ci):ir(E,B,W)}this.compile=function(E,B,W=null){W===null&&(W=E),m=ce.get(W),m.init(B),S.push(m),W.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),E!==W&&E.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(m.pushLight(k),k.castShadow&&m.pushShadow(k))}),m.setupLights();const X=new Set;return E.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const ht=k.material;if(ht)if(Array.isArray(ht))for(let mt=0;mt<ht.length;mt++){const Et=ht[mt];Me(Et,W,k),X.add(Et)}else Me(ht,W,k),X.add(ht)}),S.pop(),m=null,X},this.compileAsync=function(E,B,W=null){const X=this.compile(E,B,W);return new Promise(k=>{function ht(){if(X.forEach(function(mt){It.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){k(E);return}setTimeout(ht,10)}ie.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let Ki=null;function dn(E){Ki&&Ki(E)}function cc(){is.stop()}function fc(){is.start()}const is=new Iu;is.setAnimationLoop(dn),typeof self<"u"&&is.setContext(self),this.setAnimationLoop=function(E){Ki=E,K.setAnimationLoop(E),E===null?is.stop():is.start()},K.addEventListener("sessionstart",cc),K.addEventListener("sessionend",fc),this.render=function(E,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,B,R),m=ce.get(E,S.length),m.init(B),S.push(m),Dt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),j.setFromProjectionMatrix(Dt),bt=this.localClippingEnabled,at=lt.init(this.clippingPlanes,bt),g=vt.get(E,y.length),g.init(),y.push(g),K.enabled===!0&&K.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&La(ht,B,-1/0,v.sortObjects)}La(E,B,0,v.sortObjects),g.finish(),v.sortObjects===!0&&g.sort(it,rt),Xt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Xt&&Ft.addToRenderList(g,E),this.info.render.frame++,at===!0&&lt.beginShadows();const W=m.state.shadowsArray;_t.render(W,E,B),at===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,k=g.transmissive;if(m.setupLights(),B.isArrayCamera){const ht=B.cameras;if(k.length>0)for(let mt=0,Et=ht.length;mt<Et;mt++){const wt=ht[mt];dc(X,k,E,wt)}Xt&&Ft.render(E);for(let mt=0,Et=ht.length;mt<Et;mt++){const wt=ht[mt];uc(g,E,wt,wt.viewport)}}else k.length>0&&dc(X,k,E,B),Xt&&Ft.render(E),uc(g,E,B);R!==null&&(A.updateMultisampleRenderTarget(R),A.updateRenderTargetMipmap(R)),E.isScene===!0&&E.onAfterRender(v,E,B),Pe.resetDefaultState(),M=-1,_=null,S.pop(),S.length>0?(m=S[S.length-1],at===!0&&lt.setGlobalState(v.clippingPlanes,m.state.camera)):m=null,y.pop(),y.length>0?g=y[y.length-1]:g=null};function La(E,B,W,X){if(E.visible===!1)return;if(E.layers.test(B.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(B);else if(E.isLight)m.pushLight(E),E.castShadow&&m.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){X&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Dt);const mt=Z.update(E),Et=E.material;Et.visible&&g.push(E,mt,Et,W,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const mt=Z.update(E),Et=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ut.copy(mt.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(Dt)),Array.isArray(Et)){const wt=mt.groups;for(let Ht=0,Kt=wt.length;Ht<Kt;Ht++){const Tt=wt[Ht],pe=Et[Tt.materialIndex];pe&&pe.visible&&g.push(E,mt,pe,W,Ut.z,Tt)}}else Et.visible&&g.push(E,mt,Et,W,Ut.z,null)}}const ht=E.children;for(let mt=0,Et=ht.length;mt<Et;mt++)La(ht[mt],B,W,X)}function uc(E,B,W,X){const k=E.opaque,ht=E.transmissive,mt=E.transparent;m.setupLightsView(W),at===!0&&lt.setGlobalState(v.clippingPlanes,W),X&&Ct.viewport(C.copy(X)),k.length>0&&er(k,B,W),ht.length>0&&er(ht,B,W),mt.length>0&&er(mt,B,W),Ct.buffers.depth.setTest(!0),Ct.buffers.depth.setMask(!0),Ct.buffers.color.setMask(!0),Ct.setPolygonOffset(!1)}function dc(E,B,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[X.id]===void 0&&(m.state.transmissionRenderTarget[X.id]=new Yi(1,1,{generateMipmaps:!0,type:ie.has("EXT_color_buffer_half_float")||ie.has("EXT_color_buffer_float")?cn:Pn,minFilter:bn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ae.workingColorSpace}));const ht=m.state.transmissionRenderTarget[X.id],mt=X.viewport||C;ht.setSize(mt.z,mt.w);const Et=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(H),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Xt&&Ft.render(W);const wt=v.toneMapping;v.toneMapping=An;const Ht=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),m.setupLightsView(X),at===!0&&lt.setGlobalState(v.clippingPlanes,X),er(E,W,X),A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht),ie.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Tt=0,pe=B.length;Tt<pe;Tt++){const De=B[Tt],Ue=De.object,Ei=De.geometry,xe=De.material,Pt=De.group;if(xe.side===Ci&&Ue.layers.test(X.layers)){const pn=xe.side;xe.side=Mi,xe.needsUpdate=!0,pc(Ue,W,X,Ei,xe,Pt),xe.side=pn,xe.needsUpdate=!0,Kt=!0}}Kt===!0&&(A.updateMultisampleRenderTarget(ht),A.updateRenderTargetMipmap(ht))}v.setRenderTarget(Et),v.setClearColor(H,$),Ht!==void 0&&(X.viewport=Ht),v.toneMapping=wt}function er(E,B,W){const X=B.isScene===!0?B.overrideMaterial:null;for(let k=0,ht=E.length;k<ht;k++){const mt=E[k],Et=mt.object,wt=mt.geometry,Ht=X===null?mt.material:X,Kt=mt.group;Et.layers.test(W.layers)&&pc(Et,B,W,wt,Ht,Kt)}}function pc(E,B,W,X,k,ht){E.onBeforeRender(v,B,W,X,k,ht),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),k.onBeforeRender(v,B,W,X,E,ht),k.transparent===!0&&k.side===Ci&&k.forceSinglePass===!1?(k.side=Mi,k.needsUpdate=!0,v.renderBufferDirect(W,B,X,k,E,ht),k.side=ts,k.needsUpdate=!0,v.renderBufferDirect(W,B,X,k,E,ht),k.side=Ci):v.renderBufferDirect(W,B,X,k,E,ht),E.onAfterRender(v,B,W,X,k,ht)}function ir(E,B,W){B.isScene!==!0&&(B=Vt);const X=It.get(E),k=m.state.lights,ht=m.state.shadowsArray,mt=k.state.version,Et=Lt.getParameters(E,k.state,ht,B,W),wt=Lt.getProgramCacheKey(Et);let Ht=X.programs;X.environment=E.isMeshStandardMaterial?B.environment:null,X.fog=B.fog,X.envMap=(E.isMeshStandardMaterial?G:b).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?B.environmentRotation:E.envMapRotation,Ht===void 0&&(E.addEventListener("dispose",Yt),Ht=new Map,X.programs=Ht);let Kt=Ht.get(wt);if(Kt!==void 0){if(X.currentProgram===Kt&&X.lightsStateVersion===mt)return gc(E,Et),Kt}else Et.uniforms=Lt.getUniforms(E),E.onBeforeCompile(Et,v),Kt=Lt.acquireProgram(Et,wt),Ht.set(wt,Kt),X.uniforms=Et.uniforms;const Tt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Tt.clippingPlanes=lt.uniform),gc(E,Et),X.needsLights=Fd(E),X.lightsStateVersion=mt,X.needsLights&&(Tt.ambientLightColor.value=k.state.ambient,Tt.lightProbe.value=k.state.probe,Tt.directionalLights.value=k.state.directional,Tt.directionalLightShadows.value=k.state.directionalShadow,Tt.spotLights.value=k.state.spot,Tt.spotLightShadows.value=k.state.spotShadow,Tt.rectAreaLights.value=k.state.rectArea,Tt.ltc_1.value=k.state.rectAreaLTC1,Tt.ltc_2.value=k.state.rectAreaLTC2,Tt.pointLights.value=k.state.point,Tt.pointLightShadows.value=k.state.pointShadow,Tt.hemisphereLights.value=k.state.hemi,Tt.directionalShadowMap.value=k.state.directionalShadowMap,Tt.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Tt.spotShadowMap.value=k.state.spotShadowMap,Tt.spotLightMatrix.value=k.state.spotLightMatrix,Tt.spotLightMap.value=k.state.spotLightMap,Tt.pointShadowMap.value=k.state.pointShadowMap,Tt.pointShadowMatrix.value=k.state.pointShadowMatrix),X.currentProgram=Kt,X.uniformsList=null,Kt}function mc(E){if(E.uniformsList===null){const B=E.currentProgram.getUniforms();E.uniformsList=$r.seqWithValue(B.seq,E.uniforms)}return E.uniformsList}function gc(E,B){const W=It.get(E);W.outputColorSpace=B.outputColorSpace,W.batching=B.batching,W.batchingColor=B.batchingColor,W.instancing=B.instancing,W.instancingColor=B.instancingColor,W.instancingMorph=B.instancingMorph,W.skinning=B.skinning,W.morphTargets=B.morphTargets,W.morphNormals=B.morphNormals,W.morphColors=B.morphColors,W.morphTargetsCount=B.morphTargetsCount,W.numClippingPlanes=B.numClippingPlanes,W.numIntersection=B.numClipIntersection,W.vertexAlphas=B.vertexAlphas,W.vertexTangents=B.vertexTangents,W.toneMapping=B.toneMapping}function Od(E,B,W,X,k){B.isScene!==!0&&(B=Vt),A.resetTextureUnits();const ht=B.fog,mt=X.isMeshStandardMaterial?B.environment:null,Et=R===null?v.outputColorSpace:R.isXRRenderTarget===!0?R.texture.colorSpace:oo,wt=(X.isMeshStandardMaterial?G:b).get(X.envMap||mt),Ht=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,Kt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Tt=!!W.morphAttributes.position,pe=!!W.morphAttributes.normal,De=!!W.morphAttributes.color;let Ue=An;X.toneMapped&&(R===null||R.isXRRenderTarget===!0)&&(Ue=v.toneMapping);const Ei=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,xe=Ei!==void 0?Ei.length:0,Pt=It.get(X),pn=m.state.lights;if(at===!0&&(bt===!0||E!==_)){const Gi=E===_&&X.id===M;lt.setState(X,E,Gi)}let ve=!1;X.version===Pt.__version?(Pt.needsLights&&Pt.lightsStateVersion!==pn.state.version||Pt.outputColorSpace!==Et||k.isBatchedMesh&&Pt.batching===!1||!k.isBatchedMesh&&Pt.batching===!0||k.isBatchedMesh&&Pt.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&Pt.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&Pt.instancing===!1||!k.isInstancedMesh&&Pt.instancing===!0||k.isSkinnedMesh&&Pt.skinning===!1||!k.isSkinnedMesh&&Pt.skinning===!0||k.isInstancedMesh&&Pt.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Pt.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Pt.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Pt.instancingMorph===!1&&k.morphTexture!==null||Pt.envMap!==wt||X.fog===!0&&Pt.fog!==ht||Pt.numClippingPlanes!==void 0&&(Pt.numClippingPlanes!==lt.numPlanes||Pt.numIntersection!==lt.numIntersection)||Pt.vertexAlphas!==Ht||Pt.vertexTangents!==Kt||Pt.morphTargets!==Tt||Pt.morphNormals!==pe||Pt.morphColors!==De||Pt.toneMapping!==Ue||Pt.morphTargetsCount!==xe)&&(ve=!0):(ve=!0,Pt.__version=X.version);let $i=Pt.currentProgram;ve===!0&&($i=ir(X,B,k));let ys=!1,Di=!1,uo=!1;const Oe=$i.getUniforms(),rn=Pt.uniforms;if(Ct.useProgram($i.program)&&(ys=!0,Di=!0,uo=!0),X.id!==M&&(M=X.id,Di=!0),ys||_!==E){Ct.buffers.depth.getReversed()?(ft.copy(E.projectionMatrix),Sp(ft),bp(ft),Oe.setValue(F,"projectionMatrix",ft)):Oe.setValue(F,"projectionMatrix",E.projectionMatrix),Oe.setValue(F,"viewMatrix",E.matrixWorldInverse);const Un=Oe.map.cameraPosition;Un!==void 0&&Un.setValue(F,Bt.setFromMatrixPosition(E.matrixWorld)),ne.logarithmicDepthBuffer&&Oe.setValue(F,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Oe.setValue(F,"isOrthographic",E.isOrthographicCamera===!0),_!==E&&(_=E,Di=!0,uo=!0)}if(k.isSkinnedMesh){Oe.setOptional(F,k,"bindMatrix"),Oe.setOptional(F,k,"bindMatrixInverse");const Gi=k.skeleton;Gi&&(Gi.boneTexture===null&&Gi.computeBoneTexture(),Oe.setValue(F,"boneTexture",Gi.boneTexture,A))}k.isBatchedMesh&&(Oe.setOptional(F,k,"batchingTexture"),Oe.setValue(F,"batchingTexture",k._matricesTexture,A),Oe.setOptional(F,k,"batchingIdTexture"),Oe.setValue(F,"batchingIdTexture",k._indirectTexture,A),Oe.setOptional(F,k,"batchingColorTexture"),k._colorsTexture!==null&&Oe.setValue(F,"batchingColorTexture",k._colorsTexture,A));const po=W.morphAttributes;if((po.position!==void 0||po.normal!==void 0||po.color!==void 0)&&kt.update(k,W,$i),(Di||Pt.receiveShadow!==k.receiveShadow)&&(Pt.receiveShadow=k.receiveShadow,Oe.setValue(F,"receiveShadow",k.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(rn.envMap.value=wt,rn.flipEnvMap.value=wt.isCubeTexture&&wt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&B.environment!==null&&(rn.envMapIntensity.value=B.environmentIntensity),Di&&(Oe.setValue(F,"toneMappingExposure",v.toneMappingExposure),Pt.needsLights&&zd(rn,uo),ht&&X.fog===!0&&dt.refreshFogUniforms(rn,ht),dt.refreshMaterialUniforms(rn,X,V,Y,m.state.transmissionRenderTarget[E.id]),$r.upload(F,mc(Pt),rn,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&($r.upload(F,mc(Pt),rn,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Oe.setValue(F,"center",k.center),Oe.setValue(F,"modelViewMatrix",k.modelViewMatrix),Oe.setValue(F,"normalMatrix",k.normalMatrix),Oe.setValue(F,"modelMatrix",k.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Gi=X.uniformsGroups;for(let Un=0,On=Gi.length;Un<On;Un++){const xc=Gi[Un];z.update(xc,$i),z.bind(xc,$i)}}return $i}function zd(E,B){E.ambientLightColor.needsUpdate=B,E.lightProbe.needsUpdate=B,E.directionalLights.needsUpdate=B,E.directionalLightShadows.needsUpdate=B,E.pointLights.needsUpdate=B,E.pointLightShadows.needsUpdate=B,E.spotLights.needsUpdate=B,E.spotLightShadows.needsUpdate=B,E.rectAreaLights.needsUpdate=B,E.hemisphereLights.needsUpdate=B}function Fd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return R},this.setRenderTargetTextures=function(E,B,W){It.get(E.texture).__webglTexture=B,It.get(E.depthTexture).__webglTexture=W;const X=It.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||ie.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,B){const W=It.get(E);W.__webglFramebuffer=B,W.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(E,B=0,W=0){R=E,T=B,w=W;let X=!0,k=null,ht=!1,mt=!1;if(E){const wt=It.get(E);if(wt.__useDefaultFramebuffer!==void 0)Ct.bindFramebuffer(F.FRAMEBUFFER,null),X=!1;else if(wt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(wt.__hasExternalTextures)A.rebindTextures(E,It.get(E.texture).__webglTexture,It.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Tt=E.depthTexture;if(wt.__boundDepthTexture!==Tt){if(Tt!==null&&It.has(Tt)&&(E.width!==Tt.image.width||E.height!==Tt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Ht=E.texture;(Ht.isData3DTexture||Ht.isDataArrayTexture||Ht.isCompressedArrayTexture)&&(mt=!0);const Kt=It.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Kt[B])?k=Kt[B][W]:k=Kt[B],ht=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?k=It.get(E).__webglMultisampledFramebuffer:Array.isArray(Kt)?k=Kt[W]:k=Kt,C.copy(E.viewport),N.copy(E.scissor),O=E.scissorTest}else C.copy(xt).multiplyScalar(V).floor(),N.copy(qt).multiplyScalar(V).floor(),O=me;if(Ct.bindFramebuffer(F.FRAMEBUFFER,k)&&X&&Ct.drawBuffers(E,k),Ct.viewport(C),Ct.scissor(N),Ct.setScissorTest(O),ht){const wt=It.get(E.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+B,wt.__webglTexture,W)}else if(mt){const wt=It.get(E.texture),Ht=B||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,wt.__webglTexture,W||0,Ht)}M=-1},this.readRenderTargetPixels=function(E,B,W,X,k,ht,mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Et=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){Ct.bindFramebuffer(F.FRAMEBUFFER,Et);try{const wt=E.texture,Ht=wt.format,Kt=wt.type;if(!ne.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ne.textureTypeReadable(Kt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=E.width-X&&W>=0&&W<=E.height-k&&F.readPixels(B,W,X,k,jt.convert(Ht),jt.convert(Kt),ht)}finally{const wt=R!==null?It.get(R).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,wt)}}},this.readRenderTargetPixelsAsync=async function(E,B,W,X,k,ht,mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Et=It.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(Et=Et[mt]),Et){const wt=E.texture,Ht=wt.format,Kt=wt.type;if(!ne.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ne.textureTypeReadable(Kt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=E.width-X&&W>=0&&W<=E.height-k){Ct.bindFramebuffer(F.FRAMEBUFFER,Et);const Tt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.bufferData(F.PIXEL_PACK_BUFFER,ht.byteLength,F.STREAM_READ),F.readPixels(B,W,X,k,jt.convert(Ht),jt.convert(Kt),0);const pe=R!==null?It.get(R).__webglFramebuffer:null;Ct.bindFramebuffer(F.FRAMEBUFFER,pe);const De=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await yp(F,De,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Tt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ht),F.deleteBuffer(Tt),F.deleteSync(De),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,B=null,W=0){E.isTexture!==!0&&(Ao("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),k=Math.floor(E.image.width*X),ht=Math.floor(E.image.height*X),mt=B!==null?B.x:0,Et=B!==null?B.y:0;A.setTexture2D(E,0),F.copyTexSubImage2D(F.TEXTURE_2D,W,0,0,mt,Et,k,ht),Ct.unbindTexture()},this.copyTextureToTexture=function(E,B,W=null,X=null,k=0){E.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],B=arguments[2],k=arguments[3]||0,W=null);let ht,mt,Et,wt,Ht,Kt,Tt,pe,De;const Ue=E.isCompressedTexture?E.mipmaps[k]:E.image;W!==null?(ht=W.max.x-W.min.x,mt=W.max.y-W.min.y,Et=W.isBox3?W.max.z-W.min.z:1,wt=W.min.x,Ht=W.min.y,Kt=W.isBox3?W.min.z:0):(ht=Ue.width,mt=Ue.height,Et=Ue.depth||1,wt=0,Ht=0,Kt=0),X!==null?(Tt=X.x,pe=X.y,De=X.z):(Tt=0,pe=0,De=0);const Ei=jt.convert(B.format),xe=jt.convert(B.type);let Pt;B.isData3DTexture?(A.setTexture3D(B,0),Pt=F.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(A.setTexture2DArray(B,0),Pt=F.TEXTURE_2D_ARRAY):(A.setTexture2D(B,0),Pt=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,B.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,B.unpackAlignment);const pn=F.getParameter(F.UNPACK_ROW_LENGTH),ve=F.getParameter(F.UNPACK_IMAGE_HEIGHT),$i=F.getParameter(F.UNPACK_SKIP_PIXELS),ys=F.getParameter(F.UNPACK_SKIP_ROWS),Di=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ue.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ue.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,wt),F.pixelStorei(F.UNPACK_SKIP_ROWS,Ht),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Kt);const uo=E.isDataArrayTexture||E.isData3DTexture,Oe=B.isDataArrayTexture||B.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const rn=It.get(E),po=It.get(B),Gi=It.get(rn.__renderTarget),Un=It.get(po.__renderTarget);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,Gi.__webglFramebuffer),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,Un.__webglFramebuffer);for(let On=0;On<Et;On++)uo&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.get(E).__webglTexture,k,Kt+On),E.isDepthTexture?(Oe&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,It.get(B).__webglTexture,k,De+On),F.blitFramebuffer(wt,Ht,ht,mt,Tt,pe,ht,mt,F.DEPTH_BUFFER_BIT,F.NEAREST)):Oe?F.copyTexSubImage3D(Pt,k,Tt,pe,De+On,wt,Ht,ht,mt):F.copyTexSubImage2D(Pt,k,Tt,pe,De+On,wt,Ht,ht,mt);Ct.bindFramebuffer(F.READ_FRAMEBUFFER,null),Ct.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else Oe?E.isDataTexture||E.isData3DTexture?F.texSubImage3D(Pt,k,Tt,pe,De,ht,mt,Et,Ei,xe,Ue.data):B.isCompressedArrayTexture?F.compressedTexSubImage3D(Pt,k,Tt,pe,De,ht,mt,Et,Ei,Ue.data):F.texSubImage3D(Pt,k,Tt,pe,De,ht,mt,Et,Ei,xe,Ue):E.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,k,Tt,pe,ht,mt,Ei,xe,Ue.data):E.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,k,Tt,pe,Ue.width,Ue.height,Ei,Ue.data):F.texSubImage2D(F.TEXTURE_2D,k,Tt,pe,ht,mt,Ei,xe,Ue);F.pixelStorei(F.UNPACK_ROW_LENGTH,pn),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ve),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$i),F.pixelStorei(F.UNPACK_SKIP_ROWS,ys),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Di),k===0&&B.generateMipmaps&&F.generateMipmap(Pt),Ct.unbindTexture()},this.copyTextureToTexture3D=function(E,B,W=null,X=null,k=0){return E.isTexture!==!0&&(Ao("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],B=arguments[3],k=arguments[4]||0),Ao('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,B,W,X,k)},this.initRenderTarget=function(E){It.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Ct.unbindTexture()},this.resetState=function(){T=0,w=0,R=null,Ct.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ae._getDrawingBufferColorSpace(t),e.unpackColorSpace=ae._getUnpackColorSpace()}}class Wh{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=i}clone(){return new Wh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Dx extends Ke{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new on,this.environmentIntensity=1,this.environmentRotation=new on,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Ix{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=uh,this.updateRanges=[],this.version=0,this.uuid=Kn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Kn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const xi=new P;class na{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)xi.fromBufferAttribute(this,e),xi.applyMatrix4(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)xi.fromBufferAttribute(this,e),xi.applyNormalMatrix(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)xi.fromBufferAttribute(this,e),xi.transformDirection(t),this.setXYZ(e,xi.x,xi.y,xi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=hn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=we(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=we(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=hn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=hn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=hn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=hn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=we(e,this.array),i=we(i,this.array),s=we(s,this.array),o=we(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Si(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new na(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Xh extends Nn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Os;const _o=new P,zs=new P,Fs=new P,Bs=new Nt,Mo=new Nt,Bu=new Ne,Er=new P,yo=new P,wr=new P,mf=new Nt,rl=new Nt,gf=new Nt;class ku extends Ke{constructor(t=new Xh){if(super(),this.isSprite=!0,this.type="Sprite",Os===void 0){Os=new je;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new Ix(e,5);Os.setIndex([0,1,2,0,2,3]),Os.setAttribute("position",new na(i,3,0,!1)),Os.setAttribute("uv",new na(i,2,3,!1))}this.geometry=Os,this.material=t,this.center=new Nt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),zs.setFromMatrixScale(this.matrixWorld),Bu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Fs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&zs.multiplyScalar(-Fs.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const a=this.center;Tr(Er.set(-.5,-.5,0),Fs,a,zs,s,o),Tr(yo.set(.5,-.5,0),Fs,a,zs,s,o),Tr(wr.set(.5,.5,0),Fs,a,zs,s,o),mf.set(0,0),rl.set(1,0),gf.set(1,1);let l=t.ray.intersectTriangle(Er,yo,wr,!1,_o);if(l===null&&(Tr(yo.set(-.5,.5,0),Fs,a,zs,s,o),rl.set(0,1),l=t.ray.intersectTriangle(Er,wr,yo,!1,_o),l===null))return;const r=t.ray.origin.distanceTo(_o);r<t.near||r>t.far||e.push({distance:r,point:_o.clone(),uv:zi.getInterpolation(_o,Er,yo,wr,mf,rl,gf,new Nt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Tr(n,t,e,i,s,o){Bs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Mo.x=o*Bs.x-s*Bs.y,Mo.y=s*Bs.x+o*Bs.y):Mo.copy(Bs),n.copy(t),n.x+=Mo.x,n.y+=Mo.y,n.applyMatrix4(Bu)}class qh extends Nn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const sa=new P,oa=new P,xf=new Ne,So=new kh,Ar=new Jo,al=new P,vf=new P;class Nx extends Ke{constructor(t=new je,e=new qh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)sa.fromBufferAttribute(e,s-1),oa.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=sa.distanceTo(oa);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(s),Ar.radius+=o,t.ray.intersectsSphere(Ar)===!1)return;xf.copy(s).invert(),So.copy(t.ray).applyMatrix4(xf);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),r=l*l,h=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const d=Math.max(0,a.start),p=Math.min(f.count,a.start+a.count);for(let x=d,g=p-1;x<g;x+=h){const m=f.getX(x),y=f.getX(x+1),S=Rr(this,t,So,r,m,y);S&&e.push(S)}if(this.isLineLoop){const x=f.getX(p-1),g=f.getX(d),m=Rr(this,t,So,r,x,g);m&&e.push(m)}}else{const d=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let x=d,g=p-1;x<g;x+=h){const m=Rr(this,t,So,r,x,x+1);m&&e.push(m)}if(this.isLineLoop){const x=Rr(this,t,So,r,p-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Rr(n,t,e,i,s,o){const a=n.geometry.attributes.position;if(sa.fromBufferAttribute(a,s),oa.fromBufferAttribute(a,o),e.distanceSqToSegment(sa,oa,al,vf)>i)return;al.applyMatrix4(n.matrixWorld);const r=t.ray.origin.distanceTo(al);if(!(r<t.near||r>t.far))return{distance:r,point:vf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const _f=new P,Mf=new P;class Hu extends Nx{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)_f.fromBufferAttribute(e,s),Mf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+_f.distanceTo(Mf);t.setAttribute("lineDistance",new Ae(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ea extends Nn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const yf=new Ne,mh=new kh,Cr=new Jo,Lr=new P;class Yh extends Ke{constructor(t=new je,e=new Ea){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Cr.copy(i.boundingSphere),Cr.applyMatrix4(s),Cr.radius+=o,t.ray.intersectsSphere(Cr)===!1)return;yf.copy(s).invert(),mh.copy(t.ray).applyMatrix4(yf);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),r=l*l,h=i.index,c=i.attributes.position;if(h!==null){const u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let p=u,x=d;p<x;p++){const g=h.getX(p);Lr.fromBufferAttribute(c,g),Sf(Lr,g,r,s,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let p=u,x=d;p<x;p++)Lr.fromBufferAttribute(c,p),Sf(Lr,p,r,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,a=s.length;o<a;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Sf(n,t,e,i,s,o,a){const l=mh.distanceSqToPoint(n);if(l<e){const r=new P;mh.closestPointToPoint(n,r),r.applyMatrix4(i);const h=s.ray.origin.distanceTo(r);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(l),point:r,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Bi extends yi{constructor(t,e,i,s,o,a,l,r,h){super(t,e,i,s,o,a,l,r,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Dn extends je{constructor(t=1,e=1,i=1,s=32,o=1,a=!1,l=0,r=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:a,thetaStart:l,thetaLength:r};const h=this;s=Math.floor(s),o=Math.floor(o);const f=[],c=[],u=[],d=[];let p=0;const x=[],g=i/2;let m=0;y(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new Ae(c,3)),this.setAttribute("normal",new Ae(u,3)),this.setAttribute("uv",new Ae(d,2));function y(){const v=new P,D=new P;let T=0;const w=(e-t)/i;for(let R=0;R<=o;R++){const M=[],_=R/o,C=_*(e-t)+t;for(let N=0;N<=s;N++){const O=N/s,H=O*r+l,$=Math.sin(H),q=Math.cos(H);D.x=C*$,D.y=-_*i+g,D.z=C*q,c.push(D.x,D.y,D.z),v.set($,w,q).normalize(),u.push(v.x,v.y,v.z),d.push(O,1-_),M.push(p++)}x.push(M)}for(let R=0;R<s;R++)for(let M=0;M<o;M++){const _=x[M][R],C=x[M+1][R],N=x[M+1][R+1],O=x[M][R+1];(t>0||M!==0)&&(f.push(_,C,O),T+=3),(e>0||M!==o-1)&&(f.push(C,N,O),T+=3)}h.addGroup(m,T,0),m+=T}function S(v){const D=p,T=new Nt,w=new P;let R=0;const M=v===!0?t:e,_=v===!0?1:-1;for(let N=1;N<=s;N++)c.push(0,g*_,0),u.push(0,_,0),d.push(.5,.5),p++;const C=p;for(let N=0;N<=s;N++){const H=N/s*r+l,$=Math.cos(H),q=Math.sin(H);w.x=M*q,w.y=g*_,w.z=M*$,c.push(w.x,w.y,w.z),u.push(0,_,0),T.x=$*.5+.5,T.y=q*.5*_+.5,d.push(T.x,T.y),p++}for(let N=0;N<s;N++){const O=D+N,H=C+N;v===!0?f.push(H,H+1,O):f.push(H+1,H,O),R+=3}h.addGroup(m,R,v===!0?1:2),m+=R}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Pr=new P,Dr=new P,ll=new P,Ir=new zi;class Ux extends je{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),o=Math.cos(Kr*e),a=t.getIndex(),l=t.getAttribute("position"),r=a?a.count:l.count,h=[0,0,0],f=["a","b","c"],c=new Array(3),u={},d=[];for(let p=0;p<r;p+=3){a?(h[0]=a.getX(p),h[1]=a.getX(p+1),h[2]=a.getX(p+2)):(h[0]=p,h[1]=p+1,h[2]=p+2);const{a:x,b:g,c:m}=Ir;if(x.fromBufferAttribute(l,h[0]),g.fromBufferAttribute(l,h[1]),m.fromBufferAttribute(l,h[2]),Ir.getNormal(ll),c[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,c[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,c[2]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let y=0;y<3;y++){const S=(y+1)%3,v=c[y],D=c[S],T=Ir[f[y]],w=Ir[f[S]],R=`${v}_${D}`,M=`${D}_${v}`;M in u&&u[M]?(ll.dot(u[M].normal)<=o&&(d.push(T.x,T.y,T.z),d.push(w.x,w.y,w.z)),u[M]=null):R in u||(u[R]={index0:h[y],index1:h[S],normal:ll.clone()})}}for(const p in u)if(u[p]){const{index0:x,index1:g}=u[p];Pr.fromBufferAttribute(l,x),Dr.fromBufferAttribute(l,g),d.push(Pr.x,Pr.y,Pr.z),d.push(Dr.x,Dr.y,Dr.z)}this.setAttribute("position",new Ae(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Kh extends je{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const r=Math.min(a+l,Math.PI);let h=0;const f=[],c=new P,u=new P,d=[],p=[],x=[],g=[];for(let m=0;m<=i;m++){const y=[],S=m/i;let v=0;m===0&&a===0?v=.5/e:m===i&&r===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const T=D/e;c.x=-t*Math.cos(s+T*o)*Math.sin(a+S*l),c.y=t*Math.cos(a+S*l),c.z=t*Math.sin(s+T*o)*Math.sin(a+S*l),p.push(c.x,c.y,c.z),u.copy(c).normalize(),x.push(u.x,u.y,u.z),g.push(T+v,1-S),y.push(h++)}f.push(y)}for(let m=0;m<i;m++)for(let y=0;y<e;y++){const S=f[m][y+1],v=f[m][y],D=f[m+1][y],T=f[m+1][y+1];(m!==0||a>0)&&d.push(S,v,T),(m!==i-1||r<Math.PI)&&d.push(v,D,T)}this.setIndex(d),this.setAttribute("position",new Ae(p,3)),this.setAttribute("normal",new Ae(x,3)),this.setAttribute("uv",new Ae(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class $h extends je{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const a=[],l=[],r=[],h=[],f=new P,c=new P,u=new P;for(let d=0;d<=i;d++)for(let p=0;p<=s;p++){const x=p/s*o,g=d/i*Math.PI*2;c.x=(t+e*Math.cos(g))*Math.cos(x),c.y=(t+e*Math.cos(g))*Math.sin(x),c.z=e*Math.sin(g),l.push(c.x,c.y,c.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),u.subVectors(c,f).normalize(),r.push(u.x,u.y,u.z),h.push(p/s),h.push(d/i)}for(let d=1;d<=i;d++)for(let p=1;p<=s;p++){const x=(s+1)*d+p-1,g=(s+1)*(d-1)+p-1,m=(s+1)*(d-1)+p,y=(s+1)*d+p;a.push(x,g,y),a.push(g,m,y)}this.setIndex(a),this.setAttribute("position",new Ae(l,3)),this.setAttribute("normal",new Ae(r,3)),this.setAttribute("uv",new Ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new $h(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Ox extends mi{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class bf extends Nn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class gi extends Nn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Bh,this.normalScale=new Nt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new on,this.combine=Dh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class jh extends Ke{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class zx extends jh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const hl=new Ne,Ef=new P,wf=new P;class Gu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Nt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Hh,this._frameExtents=new Nt(1,1),this._viewportCount=1,this._viewports=[new Re(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ef.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ef),wf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(wf),e.updateMatrixWorld(),hl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(hl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Tf=new Ne,bo=new P,cl=new P;class Fx extends Gu{constructor(){super(new Oi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Nt(4,2),this._viewportCount=6,this._viewports=[new Re(2,1,1,1),new Re(0,1,1,1),new Re(3,1,1,1),new Re(1,1,1,1),new Re(3,0,1,1),new Re(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),bo.setFromMatrixPosition(t.matrixWorld),i.position.copy(bo),cl.copy(i.position),cl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(cl),i.updateMatrixWorld(),s.makeTranslation(-bo.x,-bo.y,-bo.z),Tf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tf)}}class Bx extends jh{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Fx}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class kx extends Gu{constructor(){super(new Gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Hx extends jh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ke.DEFAULT_UP),this.updateMatrix(),this.target=new Ke,this.shadow=new kx}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Gx{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Af(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Af();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Af(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ph}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ph);function Gt(n,t,e=0){let i=n*374761393+t*668265263+e*2147483647|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function Vx(n,t,e,i=0){let s=n*374761393+t*668265263+e*1274126177+i*2147483647|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,s=Math.imul(s,2246822519),s^=s>>>13,(s>>>0)/4294967296}const Io=n=>n*n*(3-2*n);function Wx(n,t,e){const i=Math.floor(n),s=Math.floor(t),o=Io(n-i),a=Io(t-s),l=Gt(i,s,e),r=Gt(i+1,s,e),h=Gt(i,s+1,e),f=Gt(i+1,s+1,e);return(l+(r-l)*o)*(1-a)+(h+(f-h)*o)*a}function ks(n,t,e,i){const s=Math.floor(n),o=Math.floor(t),a=Math.floor(e),l=Io(n-s),r=Io(t-o),h=Io(e-a),f=(u,d,p)=>u+(d-u)*p,c=(u,d,p)=>Vx(s+u,o+d,a+p,i);return f(f(f(c(0,0,0),c(1,0,0),l),f(c(0,1,0),c(1,1,0),l),r),f(f(c(0,0,1),c(1,0,1),l),f(c(0,1,1),c(1,1,1),l),r),h)}function ii(n,t,e,i=4){let s=.5,o=1,a=0,l=0;for(let r=0;r<i;r++)a+=Wx(n*o,t*o,e+r*101)*s,l+=s,s*=.5,o*=2;return a/l}const Le=16,Qo=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","planks","cobble","water","glass","coal_ore","iron_ore","gold_ore","diamond_ore","bedrock","snow","snow_side","cactus_side","cactus_top","bricks","table_top","table_side","torch","furnace_top","furnace_front","command","obsidian","netherrack","soul_sand","glowstone","lava","nether_bricks","end_stone","end_frame_top","end_frame_side","end_frame_eye","portal","end_portal","purpur","end_bricks","chest_top","chest_side","chest_open"],No=Object.fromEntries(Qo.map((n,t)=>[n,t])),Uo=Qo.length,Vu=n=>Math.max(0,Math.min(255,n));function Ot(n,t,e,i,s){const o=(Gt(e,i,s)-.5)*2*t;return n.map(a=>Vu(a+o))}const Rf=(n,t)=>Ot([95,159,53],22,n,t,1),fl=(n,t)=>Ot([134,96,67],18,n,t,2),jr=(n,t)=>Ot([125,125,125],20,n,t,4),ul=(n,t)=>Ot([168,134,82],8,n,t,9).map(e=>t%4===3?e-30:e);function Nr(n,t){return(e,i)=>Gt(Math.floor(e/2)+3,Math.floor(i/2),t)>.72?Ot(n,14,e,i,t+1):jr(e,i)}const Zh={grass_top:Rf,dirt:fl,grass_side:(n,t)=>t<4+(Gt(n,0,3)>.5?1:0)?Rf(n,t):fl(n,t),stone:jr,sand:(n,t)=>Ot([219,207,142],12,n,t,5),log_side:(n,t)=>Ot([102,81,49],10,n,0,6).map(e=>e-(n%4===0?14:0)),log_top:(n,t)=>{const e=Math.max(Math.abs(n-7.5),Math.abs(t-7.5));return Ot(e%4<2?[170,135,82]:[140,110,66],8,n,t,7)},leaves:(n,t)=>Ot([56,118,29],30,n,t,8),planks:ul,cobble:(n,t)=>{const e=Gt(Math.floor(n/4),Math.floor(t/4),10),i=n%4===3||t%4===3;return Ot([110+e*40,110+e*40,110+e*40],10,n,t,11).map(s=>i?s-35:s)},water:(n,t)=>{const e=Gt(n>>1,t>>1,12)>.8?25:0;return[...Ot([36+e,86+e,200+e/2],8,n,t,12),175]},glass:(n,t)=>{const e=n===0||t===0||n===15||t===15,i=n===3&&t>=3&&t<=5||n===4&&t===3||n===11&&t>=10&&t<=11;return e?[215,235,245,230]:i?[255,255,255,190]:[200,225,240,0]},coal_ore:Nr([30,30,30],20),iron_ore:Nr([216,175,147],30),gold_ore:Nr([250,220,60],40),diamond_ore:Nr([70,235,225],50),bedrock:(n,t)=>Ot([55,55,55],32,n,t,60),snow:(n,t)=>Ot([240,245,250],7,n,t,61),snow_side:(n,t)=>t<4?Ot([240,245,250],7,n,t,61):fl(n,t),cactus_side:(n,t)=>(n===4||n===11)&&t%5===2?[230,230,200]:Ot([36,118,48],10,n,0,62).map(e=>n%5===2?e-18:e),cactus_top:(n,t)=>{const e=Math.max(Math.abs(n-7.5),Math.abs(t-7.5));return Ot(e<3?[30,100,40]:[52,140,60],8,n,t,63)},bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?Ot([170,168,160],8,n,t,64):Ot([150,72,58],14,n,t,65),table_top:(n,t)=>n===0||t===0||n===15||t===15||n===7||n===8||t===7||t===8?Ot([92,60,30],8,n,t,66):ul(n,t),torch:(n,t)=>n<7||n>8?[0,0,0,0]:t<2?n===7?[255,235,120,255]:[255,160,40,255]:t<4?[255,200,60,255]:Ot([122,86,44],10,n,t,70),command:(n,t)=>{const e=n===0||t===0||n===15||t===15,i=n===4+(t-4)&&t>=4&&t<=7||n===4+(11-t)&&t>=8&&t<=11||t===10&&n>=9&&n<=12;return e?[74,34,8,255]:i?[42,18,4,255]:Ot([196,114,58],18,n,t,75)},obsidian:(n,t)=>Gt(n,t,80)>.93?Ot([90,40,150],20,n,t,81):Ot([22,14,36],10,n,t,82),netherrack:(n,t)=>{const e=Gt(Math.floor(n/2),Math.floor(t/3),83)>.8;return Ot(e?[150,60,55]:[112,40,42],22,n,t,84)},soul_sand:(n,t)=>{const e=(n%5===1||n%5===2)&&(t%5===1||t%5===2)&&Gt(Math.floor(n/5),Math.floor(t/5),85)>.45;return Ot(e?[48,36,30]:[88,70,56],12,n,t,86)},glowstone:(n,t)=>{const e=Gt(Math.floor(n/3),Math.floor(t/3),87);return Ot(e>.55?[255,226,140]:[206,150,74],22,n,t,88)},lava:(n,t)=>{const e=Gt(Math.floor(n/2),Math.floor(t/2),89);return Ot(e>.7?[255,214,70]:e>.35?[248,140,24]:[214,80,14],14,n,t,90)},nether_bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?Ot([28,12,16],6,n,t,91):Ot([62,24,30],12,n,t,92),end_stone:(n,t)=>Ot([222,222,156],16,n,t,93).map((e,i)=>Gt(n>>1,t>>1,94)>.85?e-24:e),end_frame_top:(n,t)=>n<2||t<2||n>13||t>13?Ot([50,100,84],10,n,t,95):Ot([96,150,124],10,n,t,96),end_frame_side:(n,t)=>t<4?Ot([60,112,94],10,n,t,97):Ot([218,218,150],14,n,t,98),end_frame_eye:(n,t)=>{const e=Math.hypot(n-7.5,t-7.5);return e<2.3?[14,20,18]:e<4.4?[96,216,150]:n<2||t<2||n>13||t>13?Ot([50,100,84],10,n,t,95):Ot([96,150,124],10,n,t,96)},portal:(n,t)=>{const e=Math.sin(n*.9+t*.45)*.5+Math.sin(t*.8-n*.3)*.5;return[90+e*50+Gt(n,t,99)*30,20+e*14,190+e*40,175]},end_portal:(n,t)=>Gt(n,t,100)>.9?[150,255,230,255]:[6,16,22+Gt(n,t,101)*20,240],purpur:(n,t)=>{const e=n%8<1||t%8<1;return Ot(e?[140,96,140]:[172,128,172],10,n,t,110)},end_bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?Ot([186,186,128],6,n,t,111):Ot([226,226,164],10,n,t,112),chest_top:(n,t)=>n<1||t<1||n>14||t>14?Ot([80,52,20],6,n,t,113):Ot([160,112,50],10,n,t,114),chest_side:(n,t)=>n>=7&&n<=8&&t>=5&&t<=8?[214,214,214]:t===6||t===7?Ot([96,62,24],6,n,t,115):n<1||n>14||t>14?Ot([80,52,20],6,n,t,116):Ot([160,112,50],10,n,t,117),chest_open:(n,t)=>n<2||t<2||n>13||t>13?Ot([120,82,34],8,n,t,118):Ot([30,18,10],8,n,t,119),furnace_top:(n,t)=>n===0||t===0||n===15||t===15?Ot([70,70,70],8,n,t,71):jr(n,t).map(e=>e-20),furnace_front:(n,t)=>n===0||t===0||n===15?Ot([70,70,70],8,n,t,72):n>=4&&n<=11&&t>=8&&t<=13?t>10&&n>5&&n<10&&Gt(n,t,73)>.4?[255,150+Gt(n,t,74)*80|0,30,255]:[25,25,25,255]:n>=4&&n<=11&&t>=3&&t<=5?[30,30,30,255]:jr(n,t).map(i=>i-15),table_side:(n,t)=>t<3?Ot([92,60,30],8,n,t,67):n===7||n===8?Ot([120,90,50],8,n,t,68):ul(n,t)},dl={};function Wu(n){if(dl[n])return dl[n];let t=0,e=0,i=0,s=0;for(let o=0;o<Le;o++)for(let a=0;a<Le;a++){const l=Zh[n](a,o);l[3]!==0&&(t+=l[0],e+=l[1],i+=l[2],s++)}return dl[n]=[t/s/255,e/s/255,i/s/255]}function Xx(){const n=document.createElement("canvas");n.width=Le*Uo,n.height=Le;const t=n.getContext("2d"),e=t.createImageData(n.width,Le);Qo.forEach((s,o)=>{for(let a=0;a<Le;a++)for(let l=0;l<Le;l++){const r=Zh[s](l,a),h=(a*n.width+o*Le+l)*4;e.data[h]=r[0],e.data[h+1]=r[1],e.data[h+2]=r[2],e.data[h+3]=r[3]===void 0?255:r[3]}}),t.putImageData(e,0,0);const i=new Bi(n);return i.magFilter=de,i.minFilter=de,i.colorSpace=si,i.generateMipmaps=!1,{canvas:n,texture:i}}const ra={stone:3.4,cobble:4.2,bricks:4,bedrock:4.5,coal_ore:3.4,iron_ore:3.4,gold_ore:3.4,diamond_ore:3.4,planks:2.4,table_top:2.4,table_side:2.4,log_side:3.2,log_top:2.2,leaves:3.6,dirt:2.2,grass_top:2.6,grass_side:2.4,sand:1.4,snow:1,snow_side:1.4,water:.9,glass:0,torch:0,cactus_side:2.6,cactus_top:2,furnace_top:2.6,furnace_front:3,command:2.6};function Cf(n,t,e){const i=Math.floor(n),s=Math.floor(t),o=n-i,a=t-s,l=o*o*(3-2*o),r=a*a*(3-2*a),h=Gt(i,s,e),f=Gt(i+1,s,e),c=Gt(i,s+1,e),u=Gt(i+1,s+1,e);return(h+(f-h)*l)*(1-r)+(c+(u-c)*l)*r}function qx(n){const e=64/Le,i=document.createElement("canvas");i.width=64*Uo,i.height=64;const s=i.getContext("2d"),o=s.createImageData(i.width,64),a=document.createElement("canvas");a.width=i.width,a.height=64;const l=a.getContext("2d"),r=l.createImageData(a.width,64);Qo.forEach((u,d)=>{const p=Array.from({length:Le*Le},(S,v)=>Zh[u](v%Le,Math.floor(v/Le))),x=(S,v)=>p[Math.max(0,Math.min(Le-1,v))*Le+Math.max(0,Math.min(Le-1,S))],g=new Float32Array(4096);for(let S=0;S<64;S++)for(let v=0;v<64;v++){const D=(v+.5)/e-.5,T=(S+.5)/e-.5,w=Math.floor(D),R=Math.floor(T),M=D-w,_=T-R,C=x(Math.floor(v/e),Math.floor(S/e)),N=x(w,R),O=x(w+1,R),H=x(w,R+1),$=x(w+1,R+1),q=[0,1,2].map(it=>{const rt=(N[it]*(1-M)+O[it]*M)*(1-_)+(H[it]*(1-M)+$[it]*M)*_;let xt=C[it]*.5+rt*.5;const qt=(Gt(v+d*97,S,1234)-.5)*16+(Cf(v*.35+d*13,S*.35,77)-.5)*22+(Cf(v*.09,S*.09+d*5,91)-.5)*18;return Vu(xt+qt)}),Y=C[3]===void 0?255:C[3],V=(S*i.width+d*64+v)*4;o.data[V]=q[0],o.data[V+1]=q[1],o.data[V+2]=q[2],o.data[V+3]=Y,g[S*64+v]=(q[0]*.3+q[1]*.59+q[2]*.11)/255}const m=ra[u]===void 0?2:ra[u],y=(S,v)=>g[(v+64)%64*64+(S+64)%64];for(let S=0;S<64;S++)for(let v=0;v<64;v++){const D=y(v+1,S-1)+2*y(v+1,S)+y(v+1,S+1)-(y(v-1,S-1)+2*y(v-1,S)+y(v-1,S+1)),T=y(v-1,S+1)+2*y(v,S+1)+y(v+1,S+1)-(y(v-1,S-1)+2*y(v,S-1)+y(v+1,S-1));let w=-D*m,R=T*m,M=1;const _=Math.hypot(w,R,M);w/=_,R/=_,M/=_;const C=(S*a.width+d*64+v)*4;r.data[C]=(w*.5+.5)*255,r.data[C+1]=(R*.5+.5)*255,r.data[C+2]=(M*.5+.5)*255,r.data[C+3]=255}}),s.putImageData(o,0,0),l.putImageData(r,0,0);const h=n?n.capabilities.getMaxAnisotropy():4,f=new Bi(i);f.colorSpace=si,f.magFilter=qi,f.minFilter=bn,f.generateMipmaps=!0,f.anisotropy=Math.min(8,h);const c=new Bi(a);return c.magFilter=qi,c.minFilter=bn,c.generateMipmaps=!0,c.anisotropy=Math.min(8,h),{map:f,normalMap:c}}function Yx(n){const t=n.getContext("2d"),e=n.width,i=t.getImageData(0,0,e,Le).data,s=document.createElement("canvas");s.width=e,s.height=Le;const o=s.getContext("2d"),a=o.createImageData(e,Le);Qo.forEach((r,h)=>{const f=(ra[r]===void 0?2:ra[r])*.45,c=(u,d)=>{const p=((d+Le)%Le*e+h*Le+(u+Le)%Le)*4;return(i[p]*.3+i[p+1]*.59+i[p+2]*.11)/255};for(let u=0;u<Le;u++)for(let d=0;d<Le;d++){const p=c(d+1,u)-c(d-1,u),x=c(d,u+1)-c(d,u-1);let g=-p*f,m=x*f,y=1;const S=Math.hypot(g,m,y);g/=S,m/=S,y/=S;const v=(u*e+h*Le+d)*4;a.data[v]=(g*.5+.5)*255,a.data[v+1]=(m*.5+.5)*255,a.data[v+2]=(y*.5+.5)*255,a.data[v+3]=255}}),o.putImageData(a,0,0);const l=new Bi(s);return l.magFilter=de,l.minFilter=de,l.generateMipmaps=!1,l}const Xu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class lo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Kx=new Gh(-1,1,1,-1,0,1);class $x extends je{constructor(){super(),this.setAttribute("position",new Ae([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ae([0,2,0,0,2,0],2))}}const jx=new $x;class Jh{constructor(t){this._mesh=new At(jx,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Kx)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class qu extends lo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof mi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Wo.clone(t.uniforms),this.material=new mi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Jh(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Lf extends lo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Zx extends lo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Jx{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Nt);this._width=i.width,this._height=i.height,e=new Yi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:cn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new qu(Xu),this.copyPass.material.blending=Tn,this.clock=new Gx}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const l=this.renderer.getContext(),r=this.renderer.state.buffers.stencil;r.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),r.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Lf!==void 0&&(a instanceof Lf?i=!0:a instanceof Zx&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Nt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Qx extends lo{constructor(t,e,i=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new St}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let o,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const tv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new St(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class eo extends lo{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Nt(t.x,t.y):new Nt(256,256),this.clearColor=new St(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Yi(o,a,{type:cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new Yi(o,a,{type:cn});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Yi(o,a,{type:cn});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),o=Math.round(o/2),a=Math.round(a/2)}const l=tv;this.highPassUniforms=Wo.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mi({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const r=[3,5,7,9,11];o=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(r[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Nt(1/o,1/a),o=Math.round(o/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=Xu;this.copyUniforms=Wo.clone(f.uniforms),this.blendMaterial=new mi({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Go,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new St,this.oldClearAlpha=1,this.basic=new be,this.fsQuad=new Jh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new Nt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let r=0;r<this.nMips;r++)this.fsQuad.material=this.separableBlurMaterials[r],this.separableBlurMaterials[r].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[r].uniforms.direction.value=eo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[r]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[r].uniforms.colorTexture.value=this.renderTargetsHorizontal[r].texture,this.separableBlurMaterials[r].uniforms.direction.value=eo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[r]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[r];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new mi({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Nt(.5,.5)},direction:{value:new Nt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(t){return new mi({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}eo.BlurDirectionX=new Nt(1,0);eo.BlurDirectionY=new Nt(0,1);const ev={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class iv extends lo{constructor(){super();const t=ev;this.uniforms=Wo.clone(t.uniforms),this.material=new Ox({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Jh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ae.getTransfer(this._outputColorSpace)===ye&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ru?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===au?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===lu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ma?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===hu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const se=0,L={GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,PLANKS:7,COBBLE:8,WATER:9,GLASS:10,COAL_ORE:11,IRON_ORE:12,GOLD_ORE:13,DIAMOND_ORE:14,BEDROCK:15,SNOW:16,CACTUS:17,BRICKS:18,TABLE:19,TORCH:20,FURNACE:21,COMMAND:22,OBSIDIAN:23,NETHER_PORTAL:24,NETHERRACK:25,SOUL_SAND:26,GLOWSTONE:27,LAVA:28,NETHER_BRICKS:29,END_STONE:30,END_FRAME:31,END_FRAME_EYE:32,END_PORTAL:33,PURPUR:34,END_BRICKS:35,CHEST:36,CHEST_OPEN:37},I={STICK:100,COAL:101,IRON:102,GOLD:103,DIAMOND:104,APPLE:150,PORK:151,BEEF:152,COOKED_PORK:153,STEAK:154,STAR:105,PEARL:106,LIGHTER:107,EYE:108,ELYTRA:109,CHICKEN:155,COOKED_CHICKEN:156},$e={};function ee(n,t,e,i,s=null,o=0,a={}){$e[n]={id:n,name:t,tiles:e,hardness:i,tool:s,lvl:o,opaque:!0,liquid:!1,...a}}ee(L.GRASS,"Hierba",["grass_top","dirt","grass_side"],.6,"shovel");ee(L.DIRT,"Tierra",["dirt","dirt","dirt"],.5,"shovel");ee(L.STONE,"Piedra",["stone","stone","stone"],1.5,"pick",1);ee(L.SAND,"Arena",["sand","sand","sand"],.5,"shovel");ee(L.LOG,"Tronco",["log_top","log_top","log_side"],2,"axe");ee(L.LEAVES,"Hojas",["leaves","leaves","leaves"],.2);ee(L.PLANKS,"Tablones",["planks","planks","planks"],2,"axe");ee(L.COBBLE,"Adoquín",["cobble","cobble","cobble"],2,"pick",1);ee(L.WATER,"Agua",["water","water","water"],100,null,0,{opaque:!1,liquid:!0,transparent:!0});ee(L.GLASS,"Cristal",["glass","glass","glass"],.3,null,0,{opaque:!1,transparent:!0});ee(L.COAL_ORE,"Mena de carbón",["coal_ore","coal_ore","coal_ore"],3,"pick",1);ee(L.IRON_ORE,"Mena de hierro",["iron_ore","iron_ore","iron_ore"],3,"pick",2);ee(L.GOLD_ORE,"Mena de oro",["gold_ore","gold_ore","gold_ore"],3,"pick",3);ee(L.DIAMOND_ORE,"Mena de diamante",["diamond_ore","diamond_ore","diamond_ore"],3,"pick",3);ee(L.BEDROCK,"Lecho de roca",["bedrock","bedrock","bedrock"],1/0);ee(L.SNOW,"Nieve",["snow","dirt","snow_side"],.3,"shovel");ee(L.CACTUS,"Cactus",["cactus_top","cactus_top","cactus_side"],.4);ee(L.BRICKS,"Ladrillos",["bricks","bricks","bricks"],2,"pick",1);ee(L.TABLE,"Mesa de crafteo",["table_top","planks","table_side"],2.5,"axe");ee(L.TORCH,"Antorcha",["torch","torch","torch"],.05,null,0,{opaque:!1,torch:!0,flat:!0,emit:10});ee(L.COMMAND,"Bloque de comandos",["command","command","command"],5,"pick",3);ee(L.OBSIDIAN,"Obsidiana",["obsidian","obsidian","obsidian"],50,"pick",4);ee(L.NETHER_PORTAL,"Portal del Nether",["portal","portal","portal"],1/0,null,0,{opaque:!1,transparent:!0,portal:!0,glow:!0});ee(L.NETHERRACK,"Netherrack",["netherrack","netherrack","netherrack"],.4,"pick");ee(L.SOUL_SAND,"Arena de almas",["soul_sand","soul_sand","soul_sand"],.5,"shovel");ee(L.GLOWSTONE,"Piedra luminosa",["glowstone","glowstone","glowstone"],.3,null,0,{glow:!0,emit:10});ee(L.LAVA,"Lava",["lava","lava","lava"],1/0,null,0,{opaque:!1,liquid:!0,glow:!0,emit:10});ee(L.NETHER_BRICKS,"Ladrillos del Nether",["nether_bricks","nether_bricks","nether_bricks"],2,"pick",1);ee(L.END_STONE,"Piedra del End",["end_stone","end_stone","end_stone"],3,"pick",1);ee(L.END_FRAME,"Marco del portal del End",["end_frame_top","end_stone","end_frame_side"],1/0);ee(L.END_FRAME_EYE,"Marco del End con ojo",["end_frame_eye","end_stone","end_frame_side"],1/0);ee(L.END_PORTAL,"Portal del End",["end_portal","end_portal","end_portal"],1/0,null,0,{opaque:!1,transparent:!0,portal:!0,glow:!0});ee(L.PURPUR,"Purpur",["purpur","purpur","purpur"],1.5,"pick",1);ee(L.END_BRICKS,"Ladrillos del End",["end_bricks","end_bricks","end_bricks"],2,"pick",1);ee(L.CHEST,"Cofre",["chest_top","chest_top","chest_side"],2.5,"axe");ee(L.CHEST_OPEN,"Cofre abierto",["chest_open","chest_top","chest_side"],2.5,"axe");ee(L.FURNACE,"Horno",["furnace_top","stone","furnace_front"],3,"pick",1);const an=new Uint8Array(256),Xo=new Uint8Array(256),un=new Uint8Array(256),Yu=new Uint8Array(256),Zr=new Uint8Array(256);for(const n of Object.values($e))an[n.id]=n.opaque?1:0,Xo[n.id]=n.liquid||n.torch||n.portal?0:1,n.portal&&(Yu[n.id]=1),n.emit&&(Zr[n.id]=n.emit),un[n.id]=n.liquid?1:0;const es={};function ri(n,t,e={}){es[n]={id:n,name:t,stack:64,...e}}ri(I.STICK,"Palo");ri(I.COAL,"Carbón");ri(I.IRON,"Lingote de hierro");ri(I.GOLD,"Lingote de oro");ri(I.DIAMOND,"Diamante");ri(I.STAR,"Estrella de la tormenta");ri(I.PEARL,"Perla de Ender");ri(I.LIGHTER,"Encendedor",{stack:1,uses:64});ri(I.EYE,"Ojo de Ender");ri(I.ELYTRA,"Élitros",{stack:1});ri(I.CHICKEN,"Pollo crudo",{food:4});ri(I.COOKED_CHICKEN,"Pollo asado",{food:12});ri(I.APPLE,"Manzana",{food:8});ri(I.PORK,"Cerdo crudo",{food:6});ri(I.BEEF,"Ternera cruda",{food:6});ri(I.COOKED_PORK,"Cerdo asado",{food:14});ri(I.STEAK,"Filete",{food:16});const Ku=[{n:"de madera",color:[176,140,84],speed:2,dur:59,lvl:1,mat:L.PLANKS},{n:"de piedra",color:[140,140,140],speed:4,dur:131,lvl:2,mat:L.COBBLE},{n:"de hierro",color:[225,225,225],speed:6,dur:250,lvl:3,mat:I.IRON},{n:"de diamante",color:[90,235,225],speed:8,dur:1561,lvl:4,mat:I.DIAMOND}],nv=[{t:"pick",name:"Pico",base:110,dmg:2,rows:["MMM"," S "," S "]},{t:"axe",name:"Hacha",base:120,dmg:3,rows:["MM","MS"," S"]},{t:"shovel",name:"Pala",base:130,dmg:2,rows:["M","S","S"]},{t:"sword",name:"Espada",base:140,dmg:4,rows:["M","M","S"]}],$u=[];function Hi(n,t,e,i=1){$u.push({pattern:n,key:t,out:e,n:i})}nv.forEach(n=>Ku.forEach((t,e)=>{const i=n.base+e;ri(i,`${n.name} ${t.n}`,{stack:1,tool:{type:n.t,tier:e,speed:t.speed,dur:t.dur,lvl:t.lvl,dmg:n.dmg+e},color:t.color}),Hi(n.rows,{M:t.mat,S:I.STICK},i)}));Hi(["L"],{L:L.LOG},L.PLANKS,4);Hi(["P","P"],{P:L.PLANKS},I.STICK,4);Hi(["PP","PP"],{P:L.PLANKS},L.TABLE);Hi(["SS","SS"],{S:L.SAND},L.GLASS,4);Hi(["CC","CC"],{C:L.COBBLE},L.BRICKS,4);Hi(["CCC","C C","CCC"],{C:L.COBBLE},L.FURNACE);Hi(["C","S"],{C:I.COAL,S:I.STICK},L.TORCH,4);Hi(["CCC","CDC","CCC"],{C:L.COBBLE,D:I.DIAMOND},L.OBSIDIAN,2);Hi(["I","C"],{I:I.IRON,C:I.COAL},I.LIGHTER);Hi(["P","C"],{P:I.PEARL,C:I.COAL},I.EYE);Hi(["OOO","ODO","OOO"],{O:L.OBSIDIAN,D:I.DIAMOND},L.END_FRAME,4);Hi(["DGD","GCG","DGD"],{D:I.DIAMOND,G:I.GOLD,C:I.COAL},L.COMMAND);const sv={[L.IRON_ORE]:[I.IRON,1],[L.GOLD_ORE]:[I.GOLD,1],[L.COBBLE]:[L.STONE,1],[L.SAND]:[L.GLASS,1],[L.LOG]:[I.COAL,1],[I.PORK]:[I.COOKED_PORK,1],[I.BEEF]:[I.STEAK,1],[I.CHICKEN]:[I.COOKED_CHICKEN,1]},Pf={[I.COAL]:80,[L.LOG]:15,[L.PLANKS]:15,[L.TABLE]:15,[I.STICK]:5},ju=8;function wa(n){return $e[n]||es[n]}function Sn(n){const t=wa(n);return $e[n]?64:t.stack}const ov=n=>!!$e[n],Zu=n=>!$e[n]||!!$e[n].flat;function rv(n,t){let e=t,i=-1,s=t,o=-1;for(let r=0;r<t;r++)for(let h=0;h<t;h++)n[r*t+h]&&(e=Math.min(e,r),i=Math.max(i,r),s=Math.min(s,h),o=Math.max(o,h));if(i<0)return null;const a=i-e+1,l=o-s+1;for(const r of $u)if(!(r.pattern.length!==a||r.pattern[0].length!==l))for(const h of[!1,!0]){let f=!0;for(let c=0;c<a&&f;c++)for(let u=0;u<l;u++){const d=r.pattern[c][h?l-1-u:u],p=d===" "?0:r.key[d];if(n[(e+c)*t+s+u]!==p){f=!1;break}}if(f)return r}return null}function vs(n){return n&&es[n.id]&&es[n.id].tool}function Ju(n,t){const e=$e[n];if(!e.lvl)return!0;const i=vs(t);return!!i&&i.type==="pick"&&i.lvl>=e.lvl}function av(n,t){const e=$e[n];if(e.hardness===1/0)return 1/0;const i=vs(t),s=i&&e.tool&&i.type===e.tool,o=Ju(n,t),a=s?i.speed:1;return e.hardness*(o?1.5:5)/a}function Qu(n,t){if(!Ju(n,t))return null;switch(n){case L.GRASS:return[L.DIRT,1];case L.STONE:return[L.COBBLE,1];case L.COAL_ORE:return[I.COAL,1];case L.DIAMOND_ORE:return[I.DIAMOND,1];case L.LEAVES:return Math.random()<.1?[I.APPLE,1]:null;case L.CHEST_OPEN:return[L.CHEST,1];case L.GLASS:case L.WATER:case L.LAVA:case L.NETHER_PORTAL:case L.END_PORTAL:case L.END_FRAME:case L.END_FRAME_EYE:return null;default:return[n,1]}}let Qh=null;const pl=new Map,ml=new Map,gl=new Map;function lv(n){Qh=n}function hv(n){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");e.imageSmoothingEnabled=!1;const i=$e[n],s=(o,a,l)=>{e.save(),e.setTransform(...a),e.drawImage(Qh,No[o]*16,0,16,16,0,0,16,16),l&&(e.fillStyle=`rgba(0,0,0,${l})`,e.fillRect(0,0,16,16)),e.restore()};return s(i.tiles[0],[.875,.4375,-.875,.4375,16,4],0),s(i.tiles[2],[.875,.4375,0,.875,2,11],.22),s(i.tiles[2],[.875,-.4375,0,.875,16,18],.42),t}function zt(n,t,e){n.fillStyle=e;for(const[i,s]of t)n.fillRect(i,s,1,1)}const td=n=>`rgb(${n[0]},${n[1]},${n[2]})`,cv=(n,t)=>td(n.map(e=>Math.max(0,Math.min(255,e*t))));function fv(n){const t=document.createElement("canvas");t.width=t.height=16;const e=t.getContext("2d"),i="#7a5a30",s=()=>{for(let a=2;a<=11;a++)zt(e,[[a,15-a]],i)},o=es[n]||{};if(n===L.TORCH){for(let a=6;a<=14;a++)zt(e,[[7,a],[8,a]],a%2?"#7a5630":"#6a4a28");zt(e,[[7,4],[8,4],[7,5],[8,5]],"#ffc83c"),zt(e,[[7,3],[8,3]],"#ff9a28"),zt(e,[[7,2]],"#ffeb78")}else if(o.tool){const a=Ku[o.tool.tier].color,l=cv(a,.7),r=td(a);s();const h=o.tool.type;if(h==="pick")zt(e,[[5,2],[6,1],[7,1],[8,1],[9,1],[10,2],[11,3],[12,4],[12,5],[4,3],[3,4],[3,5]],r),zt(e,[[6,2],[7,2],[8,2],[9,2],[10,3],[11,4]],l);else if(h==="axe")zt(e,[[7,2],[8,2],[9,2],[6,3],[7,3],[8,3],[9,3],[10,3],[8,4],[9,4],[10,4],[9,5]],r),zt(e,[[7,4],[8,5],[10,5]],l);else if(h==="shovel")zt(e,[[11,2],[12,2],[10,3],[11,3],[12,3],[13,3],[11,4],[12,4],[13,4],[12,5],[13,5],[12,1],[13,2]],r),zt(e,[[11,4],[12,5]],l);else{for(let f=0;f<9;f++)zt(e,[[5+f,10-f],[6+f,10-f]],f%2?r:l);zt(e,[[12,1],[13,2],[13,1]],r),zt(e,[[4,9],[5,10],[6,11],[3,8],[4,11],[5,12]],"#5a4020")}}else if(n===I.STICK)s(),zt(e,[[12,3]],i);else if(n===I.COAL)zt(e,[[5,5],[6,4],[7,4],[8,4],[9,5],[10,6],[10,7],[9,9],[8,10],[6,10],[5,9],[4,7],[4,6],[6,5],[7,5],[8,5],[9,6],[9,7],[8,9],[7,9],[6,9],[5,8],[5,6],[6,6],[7,6],[8,6],[8,7],[8,8],[7,8],[6,8],[5,7],[6,7],[7,7]],"#262626"),zt(e,[[7,5],[6,6]],"#555");else if(n===I.IRON||n===I.GOLD){const a=n===I.IRON?"#d8d8d8":"#f2d230",l=n===I.IRON?"#9a9a9a":"#b89412";for(let r=5;r<=10;r++)for(let h=3;h<=12;h++)zt(e,[[h,r]],r>=9?l:a);zt(e,[[3,5],[12,5],[3,10],[12,10]],"rgba(0,0,0,0)")}else if(n===I.DIAMOND)zt(e,[[7,3],[8,3],[6,4],[7,4],[8,4],[9,4],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[6,6],[7,6],[8,6],[9,6],[7,7],[8,7],[7,8]],"#5aebe1"),zt(e,[[7,4],[6,5],[7,6]],"#c8fffa"),zt(e,[[9,5],[8,6],[8,7],[7,8]],"#2aa8a0");else if(n===I.APPLE){zt(e,[[5,5],[6,4],[7,5],[8,4],[9,4],[10,5],[4,6],[11,6],[4,7],[11,7],[5,9],[6,10],[9,10],[10,9],[11,8],[4,8]],"#d22");for(let a=5;a<=9;a++)for(let l=5;l<=10;l++)zt(e,[[l,a]],"#e33");zt(e,[[6,5],[6,6]],"#fcc"),zt(e,[[8,2],[9,3]],"#5a3a10"),zt(e,[[9,2],[10,2]],"#3a3")}else if(n===I.PORK||n===I.BEEF){const a=n===I.PORK?"#f0a0a0":"#b83a3a",l=n===I.PORK?"#c87070":"#8a2020";for(let r=4;r<=11;r++)for(let h=3+(r<6?2:0);h<=12-(r>9?2:0);h++)zt(e,[[h,r]],(h+r)%5===0?l:a);zt(e,[[10,5],[11,5],[11,6]],"#f6f0e0")}else if(n===I.STAR)zt(e,[[7,1],[8,1],[7,2],[8,2],[7,3],[8,3],[1,6],[2,6],[3,6],[4,6],[11,6],[12,6],[13,6],[14,6],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[3,6],[5,9],[6,9],[9,9],[10,9],[4,11],[5,11],[10,11],[11,11],[4,12],[11,12],[3,13],[12,13],[6,6],[7,6],[8,6],[9,6],[7,4],[8,4]],"#fff1a8"),zt(e,[[7,6],[8,6],[7,7],[8,7]],"#ffffff"),zt(e,[[5,8],[10,8],[6,9],[9,9]],"#e8c640");else if(n===I.ELYTRA){for(let a=-1;a<=1;a+=2)for(let l=0;l<7;l++)for(let r=0;r<9-l;r++){const h=8+a*(l+1)-(a<0?1:0),f=3+r+Math.floor(l/2);zt(e,[[h,f]],(l+r)%3===0?"#9aa4b0":"#7e8a98")}zt(e,[[7,3],[8,3],[7,4],[8,4],[7,5],[8,5]],"#52606e")}else if(n===I.LIGHTER){for(let a=7;a<=13;a++)for(let l=4;l<=10;l++)zt(e,[[l,a]],a<9?"#9a9a9a":"#6a6a6a");zt(e,[[8,6],[9,5],[9,4],[8,3],[9,2]],"#ff9a28"),zt(e,[[9,4],[9,3]],"#ffe070"),zt(e,[[6,8],[7,8]],"#d8d8d8")}else if(n===I.EYE){for(let a=3;a<=12;a++)for(let l=3;l<=12;l++)Math.hypot(l-7.5,a-7.5)<4.6&&zt(e,[[l,a]],Math.hypot(l-7.5,a-7.5)<2?"#101a14":"#3fae78");zt(e,[[5,5],[6,5],[5,6]],"#a8ffd8")}else if(n===I.PEARL){for(let a=3;a<=12;a++)for(let l=3;l<=12;l++)Math.hypot(l-7.5,a-7.5)<4.6&&zt(e,[[l,a]],Math.hypot(l-7.5,a-7.5)<3?"#1f8f6a":"#0e5a44");zt(e,[[6,5],[7,5],[5,6],[6,6]],"#a8ffd8"),zt(e,[[9,9],[10,8]],"#52d8a8")}else if(n===I.CHICKEN||n===I.COOKED_CHICKEN){const a=n===I.CHICKEN?"#f2c4b0":"#c8883a",l=n===I.CHICKEN?"#d49a84":"#8a5420";for(let r=4;r<=10;r++)for(let h=4;h<=11;h++)Math.hypot(h-7.5,r-7)<4&&zt(e,[[h,r]],(h+r)%4===0?l:a);zt(e,[[10,10],[11,11],[12,12],[12,11],[11,12]],"#f6f0e0")}else if(n===I.COOKED_PORK||n===I.STEAK){const a=n===I.STEAK?"#8a4a22":"#c8884c",l=n===I.STEAK?"#5e2e12":"#a06030";for(let r=4;r<=11;r++)for(let h=3+(r<6?2:0);h<=12-(r>9?2:0);h++)zt(e,[[h,r]],(h+r)%4===0?l:a);zt(e,[[10,5],[11,5],[11,6]],"#f6f0e0"),zt(e,[[5,6],[6,7],[7,8],[8,9]],l)}else zt(e,[[7,7]],"#fff");return t}function ed(n){if(gl.has(n))return gl.get(n);const t=$e[n]&&!$e[n].flat?hv(n):fv(n);return gl.set(n,t),t}function id(n){return pl.has(n)||pl.set(n,ed(n).toDataURL()),pl.get(n)}function tc(n){if(!ml.has(n)){const t=new Bi(ed(n));t.magFilter=de,t.minFilter=de,t.generateMipmaps=!1,t.colorSpace=si,ml.set(n,t)}return ml.get(n)}function xl(n,t,e){const i=document.createElement("canvas");i.width=9,i.height=9;const s=i.getContext("2d");return n.forEach((o,a)=>[...o].forEach((l,r)=>{const h=t(l,r);h&&(s.fillStyle=h,s.fillRect(r,a,1,1))})),i.toDataURL()}const uv=[".##...##.","#RR#.#RR#","#RHRRRRR#","#RRRRRRR#",".#RRRRR#.","..#RRR#..","...#R#...","....#....","........."],dv=["......##.",".....#CC#","....#CHC#","...#CCC#.","..#CCC#..",".#CCC#...","#WW##....","#WW#.....",".##......"],pv=["..#####..",".#BBBBB#.","#BHBBBBB#","#BHBBBBB#","#BBBBBBB#","#BBBBBBB#",".#BBBBB#.","..#####..","........."];function mv(){const n=i=>xl(uv,(s,o)=>{if(s===".")return null;const a=i==="empty"||i==="half"&&o>4;return s==="#"?"#1a0505":a?"#4a3a3a":s==="H"?"#ff9c9c":"#e02222"}),t=i=>xl(dv,(s,o)=>s==="."?null:s==="#"?"#2a1405":s==="W"?i==="empty"?"#555":"#f4efe4":i==="empty"||i==="half"&&o>4?"#4a3d30":s==="H"?"#e8a05a":"#c8782b"),e=i=>xl(pv,s=>s==="."?null:s==="#"?"#0a2a5a":i==="empty"?"rgba(120,170,230,0.25)":s==="H"?"#d8f0ff":"#5aa8f0");return{heart:{full:n("full"),half:n("half"),empty:n("empty")},food:{full:t("full"),half:t("half"),empty:t("empty")},bubble:{full:e("full"),empty:e("empty")}}}function gv(n){const t=document.createElement("canvas");t.width=t.height=16;const e=No[n];return t.getContext("2d").drawImage(Qh,e*16,0,16,16,0,0,16,16),t.toDataURL()}const Xe=(n,t)=>new gi(t?{color:n,map:t}:{color:n});function Ur(n){const t=document.createElement("canvas");t.width=t.height=8,n(t.getContext("2d"));const e=new Bi(t);return e.magFilter=de,e.minFilter=de,e.generateMipmaps=!1,e.colorSpace=si,e}function Or(n,t,e,i,s,o,a){const l=new Se;l.position.set(s,o,a);const r=new At(new Jt(n,t,e),i);return r.position.y=-t/2,l.add(r),l}class xv{constructor(t){const e="#e0ac8c",i="#3a2412",a=Ur(p=>{p.fillStyle=e,p.fillRect(0,0,8,8),p.fillStyle=i,p.fillRect(0,0,8,2),p.fillRect(0,2,1,2),p.fillRect(7,2,1,2),p.fillStyle="#fff",p.fillRect(1,3,2,1),p.fillRect(5,3,2,1),p.fillStyle="#3a56c8",p.fillRect(2,3,1,1),p.fillRect(5,3,1,1),p.fillStyle="#a0603c",p.fillRect(3,5,2,1)}),l=Ur(p=>{p.fillStyle=i,p.fillRect(0,0,8,8)}),r=Ur(p=>{p.fillStyle=e,p.fillRect(0,0,8,8),p.fillStyle=i,p.fillRect(0,0,8,2)}),h=Ur(p=>{p.fillStyle=i,p.fillRect(0,0,8,8)}),f=Xe(14724236);this.group=new Se;const c=new Se;this.group.add(c),this.head=new Se,this.head.position.set(0,1.5,0);const u=new At(new Jt(.5,.5,.5),[Xe(16777215,r),Xe(16777215,r),Xe(16777215,l),f,Xe(16777215,a),Xe(16777215,h)]);u.position.y=.25,this.head.add(u),c.add(this.head);const d=new At(new Jt(.5,.75,.25),Xe(2794936));d.position.y=1.125,c.add(d),this.legL=Or(.25,.75,.25,Xe(3817372),-.125,.75,0),this.legR=Or(.25,.75,.25,Xe(3817372),.125,.75,0),this.legL.children[0].material=Xe(3817372),c.add(this.legL,this.legR),this.armL=Or(.22,.72,.22,[Xe(2794936),Xe(2794936),Xe(2794936),f,Xe(2794936),Xe(2794936)],-.36,1.48,0),this.armR=Or(.22,.72,.22,[Xe(2794936),Xe(2794936),Xe(2794936),f,Xe(2794936),Xe(2794936)],.36,1.48,0),c.add(this.armL,this.armR),this.itemMat=new be({transparent:!0,side:Ci,alphaTest:.1}),this.item=new At(new Cn(.55,.55),this.itemMat),this.item.position.set(0,-.68,.22),this.item.rotation.set(0,0,0),this.armR.add(this.item),this.item.visible=!1,this.heldId=-1,this.t=0,t.add(this.group),this.group.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),this.group.visible=!1}setHeld(t){t!==this.heldId&&(this.heldId=t,this.item.visible=!!t,t&&(this.itemMat.map=tc(t),this.itemMat.needsUpdate=!0))}update(t,e,i,s){this.group.position.copy(e.pos),this.group.rotation.y=e.yaw+Math.PI;const o=Math.hypot(e.vel.x,e.vel.z),a=o>.3&&(e.onGround||e.inWater);this.t+=t*(a?4+o*1.2:0);const l=a?Math.sin(this.t)*.9:0;this.legL.rotation.x=l,this.legR.rotation.x=-l,this.armL.rotation.x=-l*.8;let r=l*.8;i>0?r=-Math.sin(Math.min(1,i)*Math.PI)*1.8-.5:this.heldId&&(r=-.5+l*.3),this.armR.rotation.x=r,this.head.rotation.x=-e.pitch;const h=Math.sin(performance.now()/700)*.02;this.armL.rotation.z=-.04-h,this.armR.rotation.z=.04+h,e.flying&&(this.group.rotation.x=0)}}const vv={clear:0,rain:.65,storm:1},gh={clear:"Despejado",rain:"Lluvia",storm:"Tormenta"},ai=(n,t)=>n+Math.random()*(t-n),Eo=1800,di=22;class _v{constructor(t,e){this.scene=t,this.hooks=e,this.state="clear",this.timer=ai(90,240),this.intensity=0,this.t=Math.random()*100,this.wind={x:0,z:0,s:.12},this.lightningT=6,this.bolts=[],this.thunder=[],this.boss=!1,this.pos=new Float32Array(Eo*3);for(let o=0;o<Eo;o++)this.pos[o*3]=ai(-di,di),this.pos[o*3+1]=ai(-8,22),this.pos[o*3+2]=ai(-di,di);const i=new je;this.linePos=new Float32Array(Eo*6),i.setAttribute("position",new Si(this.linePos,3)),this.rain=new Hu(i,new qh({color:11453674,transparent:!0,opacity:.55,fog:!1,depthWrite:!1})),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain);const s=new je;this.ptPos=new Float32Array(Eo*3),s.setAttribute("position",new Si(this.ptPos,3)),this.snow=new Yh(s,new Ea({color:16777215,size:3.5,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1})),this.snow.frustumCulled=!1,this.snow.visible=!1,t.add(this.snow),this.boltMat=new be({color:15922431,fog:!1})}set(t){this.state=t,this.timer=t==="clear"?ai(120,360):t==="rain"?ai(90,200):ai(80,170)}cycle(){const t=["clear","rain","storm"];return this.set(t[(t.indexOf(this.state)+1)%3]),this.state}next(){const t=Math.random();return this.state==="clear"?t<.65?"rain":t<.85?"storm":"clear":this.state==="rain"?t<.55?"clear":"storm":t<.5?"rain":"clear"}toJSON(){return{state:this.state,timer:this.timer,intensity:this.intensity}}load(t){t&&(this.state=t.state,this.timer=t.timer,this.intensity=t.intensity)}update(t,e,i,s,o){const a=this.hooks.world();this.t+=t,this.timer-=t,this.timer<=0&&this.set(this.next());const l=vv[this.state];this.intensity+=Math.sign(l-this.intensity)*Math.min(Math.abs(l-this.intensity),t*.08);const r=this.intensity,h=Math.sin(this.t*.02)*1.6+.8,f=.55+.45*Math.sin(this.t*.35)*Math.sin(this.t*.13+1),u=.12+((this.state==="storm"?1:this.state==="rain"?.45:.12)-.12)*Math.min(1,r*1.5+(this.state==="clear",0))*f;this.wind.s+=(u-this.wind.s)*Math.min(1,t*1.5),this.wind.x=Math.cos(h)*this.wind.s,this.wind.z=Math.sin(h)*this.wind.s;const d=i.position,p=r>.04&&!o;if(this.rain.visible=p&&!s,this.snow.visible=p&&s,p){const g=Math.floor(Eo*Math.min(1,r*(this.state==="storm"?1:.8))),m=s?2.4:26,y=s?1.5:9,S=this.wind.x*y,v=this.wind.z*y;for(let D=0;D<g;D++){let T=this.pos[D*3]+S*t,w=this.pos[D*3+1]-m*t*(s?1:.85+D%7*.05),R=this.pos[D*3+2]+v*t;s&&(T+=Math.sin(this.t*1.3+D)*t*.6,R+=Math.cos(this.t*1.1+D*.7)*t*.6),T>di?T-=2*di:T<-di&&(T+=2*di),R>di?R-=2*di:R<-di&&(R+=2*di);const M=d.x+T,_=d.z+R,C=a?a.topY(Math.floor(M),Math.floor(_)):-1;if((w+d.y<C+1||w<-14)&&(w=ai(10,24),T=ai(-di,di),R=ai(-di,di)),this.pos[D*3]=T,this.pos[D*3+1]=w,this.pos[D*3+2]=R,s)this.ptPos[D*3]=d.x+T,this.ptPos[D*3+1]=d.y+w,this.ptPos[D*3+2]=d.z+R;else{const N=D*6,O=.9;this.linePos[N]=d.x+T,this.linePos[N+1]=d.y+w,this.linePos[N+2]=d.z+R,this.linePos[N+3]=d.x+T-S*.06,this.linePos[N+4]=d.y+w+O,this.linePos[N+5]=d.z+R-v*.06}}s?(this.snow.geometry.setDrawRange(0,g),this.snow.geometry.attributes.position.needsUpdate=!0):(this.rain.geometry.setDrawRange(0,g*2),this.rain.geometry.attributes.position.needsUpdate=!0),this.rain.material.opacity=.35+.3*r}this.state==="storm"&&r>.7&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=this.boss?ai(2.5,6):ai(4,14),this.strike(e)));const x=this.hooks.sky();x.wet=r,x.flash=Math.max(0,x.flash-t*2.2);for(let g=this.bolts.length-1;g>=0;g--){const m=this.bolts[g];m.life-=t,m.group.visible=m.life>.12||Math.floor(m.life*40)%2===0,m.life<=0&&(this.scene.remove(m.group),m.group.traverse(y=>y.geometry&&y.geometry.dispose()),this.bolts.splice(g,1))}for(let g=this.thunder.length-1;g>=0;g--)this.thunder[g].delay-=t,this.thunder[g].delay<=0&&(this.hooks.sound("thunder",this.thunder[g].vol),this.thunder.splice(g,1))}strike(t,e,i){const s=this.hooks.world(),o=Math.random()*Math.PI*2,a=e?6:ai(18,110),l=Math.floor(i?i.x+ai(-2,2):t.pos.x+Math.cos(o)*a),r=Math.floor(i?i.z+ai(-2,2):t.pos.z+Math.sin(o)*a),h=s.topY(l,r),f=h>=0,c=f?h+1:30,u=Math.hypot(l-t.pos.x,r-t.pos.z);if(this.hooks.sky().flash=Math.min(1,1.15-u/220),this.thunder.push({delay:u/55,vol:Math.max(.25,1-u/150)}),!f||u>150)return;const d=new Se;let p=l+.5,x=r+.5,g=c+85;const m=16;for(let y=1;y<=m;y++){const S=c+85-(c+85-c)*y/m,v=3.2*(1-y/m),D=y===m?l+.5:l+.5+ai(-v,v),T=y===m?r+.5:r+.5+ai(-v,v),w=new P(p,g,x),R=new P(D,S,T),M=w.distanceTo(R),_=new At(new Dn(.16,.16,M,4),this.boltMat);_.position.copy(w).add(R).multiplyScalar(.5),_.quaternion.setFromUnitVectors(new P(0,1,0),R.clone().sub(w).normalize()),d.add(_),p=D,g=S,x=T}this.scene.add(d),this.bolts.push({group:d,life:.45}),this.hooks.burst(l+.5,c+.3,r+.5),this.hooks.strikeMobs(l+.5,r+.5),u<3.5&&this.hooks.hurtPlayer(8)}}function _s(n,t,e,i=28){const s={onGround:!1,hitX:!1,hitZ:!1};t.vel.y=Math.max(-50,t.vel.y-i*e);const o=()=>{for(let a=Math.floor(t.pos.y);a<=Math.floor(t.pos.y+t.h-.001);a++)for(let l=Math.floor(t.pos.z-t.hw);l<=Math.floor(t.pos.z+t.hw);l++)for(let r=Math.floor(t.pos.x-t.hw);r<=Math.floor(t.pos.x+t.hw);r++)if(n.isSolid(r,a,l))return!0;return!1};for(const a of["x","z","y"]){const l=t.vel[a]*e;l&&(t.pos[a]+=l,o()&&(t.pos[a]-=l,a==="y"&&t.vel.y<0&&(s.onGround=!0),a==="x"&&(s.hitX=!0),a==="z"&&(s.hitZ=!0),t.vel[a]=0))}return s}class Mv{constructor(t,e){this.scene=t,this.world=e,this.list=[]}spawn(t,e,i,s,o=1,a=!0){const l=new Xh({map:tc(s),transparent:!0,alphaTest:.1}),r=new ku(l),h=$e[s]?.32:.42;r.scale.set(h,h,h),this.scene.add(r);const f=Math.random()*Math.PI*2;this.list.push({id:s,n:o,sprite:r,base:h,age:0,hw:.12,h:.25,pos:new P(t,e,i),vel:new P(a?Math.cos(f)*1.6:0,a?4:0,a?Math.sin(f)*1.6:0)})}update(t,e,i,s){for(let o=this.list.length-1;o>=0;o--){const a=this.list[o];a.age+=t,_s(this.world,a,t,22).onGround&&(a.vel.x*=.8,a.vel.z*=.8);const r=Math.sin(a.age*3)*.05+.22;a.sprite.position.set(a.pos.x,a.pos.y+r,a.pos.z);const h=e.pos.x-a.pos.x,f=e.pos.z-a.pos.z,c=e.pos.y+.9-a.pos.y,u=Math.hypot(h,c,f);if(a.age>.6&&u<2.2&&i.canAdd(a.id)&&(a.vel.x=h*6,a.vel.z=f*6,a.vel.y=Math.max(a.vel.y,c*5),a.pos.x+=h*t*6,a.pos.z+=f*t*6,u<.9)){const d=i.add(a.id,a.n);if(d===0){this.remove(o),s(a);continue}a.n=d}(a.age>300||a.pos.y<-10)&&this.remove(o)}}remove(t){const e=this.list[t];this.scene.remove(e.sprite),e.sprite.material.dispose(),this.list.splice(t,1)}clear(){for(;this.list.length;)this.remove(0)}}class yv{constructor(t,e){this.world=e,this.pool=[];const i=new Jt(.12,.12,.12);for(let s=0;s<90;s++){const o=new At(i,new be({color:16777215}));o.visible=!1,t.add(o),this.pool.push({mesh:o,life:0,vel:new P})}this.next=0}burst(t,e,i,s,o=10,a=3){for(let l=0;l<o;l++){const r=this.pool[this.next++%this.pool.length];r.life=.5+Math.random()*.4,r.mesh.visible=!0,r.mesh.position.set(t+(Math.random()-.5),e+(Math.random()-.5),i+(Math.random()-.5)),r.mesh.material.color.setRGB(s[0]*(.7+Math.random()*.3),s[1]*(.7+Math.random()*.3),s[2]*(.7+Math.random()*.3)),r.vel.set((Math.random()-.5)*a,Math.random()*a*.9,(Math.random()-.5)*a)}}blockBreak(t,e,i,s){const o=$e[s];o&&this.burst(t+.5,e+.5,i+.5,Wu(o.tiles[2]),14,3.2)}update(t){for(const e of this.pool)if(!(e.life<=0)){if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.vel.y-=16*t,e.mesh.position.addScaledVector(e.vel,t)}}}const J=16,fe=128,li=30,wi=(n,t)=>(n+32768)*65536+(t+32768),Df=n=>Math.floor(n/65536)-32768,If=n=>n%65536-32768,xh=[{dir:[-1,0,0],shade:.9,ax:0,corners:[{p:[0,1,0],uv:[0,1]},{p:[0,0,0],uv:[0,0]},{p:[0,1,1],uv:[1,1]},{p:[0,0,1],uv:[1,0]}]},{dir:[1,0,0],shade:.9,ax:0,corners:[{p:[1,1,1],uv:[0,1]},{p:[1,0,1],uv:[0,0]},{p:[1,1,0],uv:[1,1]},{p:[1,0,0],uv:[1,0]}]},{dir:[0,-1,0],shade:.75,ax:1,bottom:!0,corners:[{p:[1,0,1],uv:[1,0]},{p:[0,0,1],uv:[0,0]},{p:[1,0,0],uv:[1,1]},{p:[0,0,0],uv:[0,1]}]},{dir:[0,1,0],shade:1,ax:1,top:!0,corners:[{p:[0,1,1],uv:[1,1]},{p:[1,1,1],uv:[0,1]},{p:[0,1,0],uv:[1,0]},{p:[1,1,0],uv:[0,0]}]},{dir:[0,0,-1],shade:.82,ax:2,corners:[{p:[1,0,0],uv:[0,0]},{p:[0,0,0],uv:[1,0]},{p:[1,1,0],uv:[0,1]},{p:[0,1,0],uv:[1,1]}]},{dir:[0,0,1],shade:.82,ax:2,corners:[{p:[0,0,1],uv:[0,0]},{p:[1,0,1],uv:[1,0]},{p:[0,1,1],uv:[0,1]},{p:[1,1,1],uv:[1,1]}]}];for(const n of xh)n.tan=[0,1,2].filter(t=>t!==n.ax);const Nf=[.5,.68,.84,1],Oo=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function qn(n,t,e){const i=ii(n*.0022,t*.0022,e,4),s=ii(n*.0055,t*.0055,e+31,3),o=1-Math.abs(2*ii(n*.011,t*.011,e+37,3)-1),a=ii(n*.013,t*.013,e+7,3),l=ii(n*.05,t*.05,e+9,2);let r,h=0;if(i<.4)r=li-2-(.4-i)*80+l*3;else{const d=Math.min(1,(i-.4)/.5);r=li+1+d*10+a*12+l*3,h=Oo(.52,.78,s)*Oo(.45,.6,i),r+=h*(o*62+14)}if(i>=.4&&h<.5){const d=Math.abs(ii(n*.0032+11,t*.0032-7,e+61,2)-.5);if(d<.016){const p=Oo(.016,.004,d);r=r*(1-p)+(li-2)*p}}r=Math.max(6,Math.min(fe-8,Math.floor(r)));const f=ii(n*.0035,t*.0035,e+500,2),c=ii(n*.004,t*.004,e+900,2);let u;return r<=li-1?u="ocean":h>.3?u="mountains":f<.34?u="snow":f>.64?u=c>.55?"jungle":"desert":u=f>.55&&c>.6?"jungle":"plains",{h:r,biome:u,m:h,t:f,hm:c}}const Sv=(n,t,e)=>qn(n,t,e).h;function Uf(n,t,e){return qn(n,t,e).biome}function ec(){return Array.from({length:10},(n,t)=>{const e=t/10*Math.PI*2;return{x:Math.round(Math.cos(e)*36),z:Math.round(Math.sin(e)*36),top:78+t%5*7}})}class bv{constructor(t,e,i=1337,s=new Map,o="overworld"){this.dim=o,this.scene=t,this.materials=e,this.seed=i,this.saved=s,this.chunks=new Map,this.tops=new Map,this.meshes=new Map,this.dirty=new Set,this.modified=new Set,this.unsaved=new Set,this.unloadT=0,this.torches=new Map,this._lm=null,this.onChunkMeshed=null}idx(t,e,i){return(e*J+i)*J+t}generateChunk(t,e){const i=wi(t,e);if(this.saved.has(i)){let f=new Uint8Array(this.saved.get(i));if(f.length!==J*J*fe){const c=new Uint8Array(J*J*fe);c.set(f.subarray(0,Math.min(f.length,c.length))),f=c}return this.chunks.set(i,f),this.modified.add(i),this.computeTops(i,f),this.scanTorches(i,f),f}if(this.dim==="nether")return this.genNether(t,e,i);if(this.dim==="end")return this.genEnd(t,e,i);const s=this.seed,o=new Uint8Array(J*J*fe),a=t*J,l=e*J;for(let f=0;f<J;f++)for(let c=0;c<J;c++){const u=a+c,d=l+f,p=qn(u,d,s),x=p.h,g=p.biome;let m=L.GRASS,y=L.DIRT;g==="ocean"||x<=li+1||g==="desert"?(m=L.SAND,y=L.SAND):g==="snow"?m=L.SNOW:g==="mountains"&&(x>92?(m=L.SNOW,y=L.SNOW):x>64&&(m=L.STONE,y=L.STONE));for(let S=0;S<=x&&S<fe;S++){let v=L.STONE;if(S===x)v=m;else if(S>=x-3)v=y;else{const D=Gt(u*31+S,d*17-S,s+77+S);S<64&&D<.025?v=L.COAL_ORE:S<48&&D>.975&&D<.99?v=L.IRON_ORE:S<28&&D>.99&&D<.996?v=L.GOLD_ORE:S<16&&D>.996&&(v=L.DIAMOND_ORE)}if((S===0||S===1&&Gt(u,d,s+3)<.5)&&(v=L.BEDROCK),S>2&&S<x-1&&v!==L.BEDROCK){const D=ks(u*.045,S*.07,d*.045,s+11),T=ks(u*.045+50,S*.07+50,d*.045+50,s+13),w=ks(u*.025,S*.045,d*.025,s+17);(Math.abs(D-.5)<.055&&Math.abs(T-.5)<.055||w>.8)&&(v=se)}o[this.idx(c,S,f)]=v}for(let S=x+1;S<=li;S++)o[this.idx(c,S,f)]=L.WATER}const r=(f,c,u,d,p)=>{const x=f-a,g=u-l;if(x<0||g<0||x>=J||g>=J||c>=fe||c<0)return;const m=this.idx(x,c,g);p&&o[m]!==se||(o[m]=d)},h=this.villagesNear(a,l);for(let f=l-3;f<l+J+3;f++)for(let c=a-3;c<a+J+3;c++){const u=Gt(c,f,s+99);if(u>.06)continue;const d=qn(c,f,s),p=d.h,x=d.biome;if(p<=li+1||x==="ocean"||x==="mountains"||h.some(D=>Math.abs(D.x-c)<26&&Math.abs(D.z-f)<26))continue;if(x==="desert"){if(u<.004){const D=1+Math.floor(Gt(c,f,s+6)*3);for(let T=1;T<=D;T++)r(c,p+T,f,L.CACTUS,!1)}continue}const g=ii(c*.012,f*.012,s+800,2)>.58;if(u>(x==="jungle"?.055:g?.03:x==="snow"?.007:.005))continue;const y=x==="jungle",S=y?8+Math.floor(Gt(c,f,s+5)*6):4+Math.floor(Gt(c,f,s+5)*3),v=y?3:2;for(let D=-2;D<=1;D++){const T=D<=-1?v:v-1;for(let w=-T;w<=T;w++)for(let R=-T;R<=T;R++)T>=2&&Math.abs(R)===T&&Math.abs(w)===T||r(c+R,p+S+D,f+w,L.LEAVES,!0)}for(let D=1;D<=S;D++)r(c,p+D,f,L.LOG,!1)}for(const f of h)this.buildVillage(f,r);return this.chunks.set(i,o),this.computeTops(i,o),this.scanTorches(i,o),o}villageAt(t,e){const i=t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);const s=this.seed;let o=null;if(Gt(t,e,s+444)<.3){const a=t*128+28+Math.floor(Gt(t,e,s+445)*72),l=e*128+28+Math.floor(Gt(t,e,s+446)*72),r=qn(a,l,s);r.biome!=="ocean"&&r.biome!=="mountains"&&r.h>li+1&&r.h<li+20&&[[12,0],[-12,0],[0,12],[0,-12],[10,10],[-10,-10]].every(([f,c])=>{const u=qn(a+f,l+c,s);return Math.abs(u.h-r.h)<=3&&u.biome!=="ocean"})&&(o={x:a,z:l,H:r.h,biome:r.biome})}return this.vcache.set(i,o),o}villagesNear(t,e){const i=[];for(let s=Math.floor((t-40)/128);s<=Math.floor((t+J+40)/128);s++)for(let o=Math.floor((e-40)/128);o<=Math.floor((e+J+40)/128);o++){const a=this.villageAt(s,o);a&&i.push(a)}return i}buildVillage(t,e){const i=this.seed,s=t.H,o=t.biome==="desert"?L.SAND:L.PLANKS,a=L.PLANKS;for(let r=-2;r<=2;r++)for(let h=-2;h<=2;h++){const f=Math.abs(r)===2||Math.abs(h)===2;for(let c=s-3;c<=s;c++)e(t.x+r,c,t.z+h,f?L.COBBLE:L.WATER,!1);for(let c=s+1;c<=s+6;c++)e(t.x+r,c,t.z+h,0,!1);f&&e(t.x+r,s+1,t.z+h,L.COBBLE,!1)}for(const[r,h]of[[-2,-2],[2,-2],[-2,2],[2,2]])for(let f=s+2;f<=s+4;f++)e(t.x+r,f,t.z+h,L.LOG,!1);for(let r=-2;r<=2;r++)for(let h=-2;h<=2;h++)e(t.x+r,s+5,t.z+h,L.PLANKS,!1);[[-14,-8],[14,-8],[-14,10],[14,10],[0,-16],[0,17]].forEach(([r,h],f)=>{if(Gt(t.x+r,t.z+h,i+5)<.12&&f>3)return;const c=t.x+r,u=t.z+h,d=Math.abs(r)>Math.abs(h)?-Math.sign(r):0,p=d?0:-Math.sign(h);for(let x=0;x<40;x++){const g=c+d*(4+x),m=u+p*(4+x);if(Math.abs(g-t.x)<3&&Math.abs(m-t.z)<3)break;e(g,s,m,L.COBBLE,!1);for(let y=s+1;y<=s+3;y++)e(g,y,m,0,!1)}for(let x=-4;x<=4;x++)for(let g=-4;g<=4;g++){const m=c+x,y=u+g,S=Sv(m,y,i);for(let v=Math.max(1,S-1);v<=s-1;v++)e(m,v,y,L.COBBLE,!1);for(let v=s+1;v<=s+9;v++)e(m,v,y,0,!1);Math.abs(x)<=3&&Math.abs(g)<=3&&e(m,s,y,a,!1)}for(let x=-3;x<=3;x++)for(let g=-3;g<=3;g++){if(Math.abs(x)!==3&&Math.abs(g)!==3)continue;const m=Math.abs(x)===3&&Math.abs(g)===3;for(let y=s+1;y<=s+3;y++){let S=m?L.LOG:o;!m&&(Math.abs(x)===3&&g===0||Math.abs(g)===3&&x===0)&&y===s+2&&(S=L.GLASS),x===d*3&&g===p*3&&y<=s+2&&(S=0),e(c+x,y,u+g,S,!1)}}for(let x=4,g=s+4;x>=0;x--,g++)for(let m=-x;m<=x;m++)for(let y=-x;y<=x;y++)e(c+m,g,u+y,x===0?L.LOG:L.PLANKS,!1);e(c-2,s+1,u-2,L.TORCH,!1),e(c+2,s+1,u-2,L.TABLE,!1),e(c+2,s+1,u+2,L.FURNACE,!1),e(c-2,s+1,u+2,L.TORCH,!1),e(c+d*4+p,s+1,u+p*4+d,L.TORCH,!1)})}scanTorches(t,e){let i=null;const s=J*J;for(let o=0;o<e.length;o++){const a=e[o];if(!(!a||!Zr[a])){if(a===L.LAVA){const l=o%J,r=Math.floor(o/J)%J;if(l+r&1||e[o+s]!==0)continue}(i||(i=new Set)).add(o)}}i?this.torches.set(t,i):this.torches.delete(t)}genNether(t,e,i){const s=this.seed+7001,o=new Uint8Array(J*J*fe),a=t*J,l=e*J;for(let f=0;f<J;f++)for(let c=0;c<J;c++){const u=a+c,d=l+f;for(let p=0;p<fe;p++){let x=0;if(p===0||p===fe-1||p===1&&Gt(u,d,s+1)<.5||p===fe-2&&Gt(u,d,s+2)<.5)x=L.BEDROCK;else{const g=ks(u*.022,p*.04,d*.022,s+301)*.65+ks(u*.06,p*.09,d*.06,s+302)*.35,m=Math.abs(p-62)/62;g+.62*m*m>.72||p>=fe-3?x=L.NETHERRACK:x=p<=31?L.LAVA:se}o[this.idx(c,p,f)]=x}}const r=J*J;for(let f=0;f<J;f++)for(let c=0;c<J;c++){const u=a+c,d=l+f,p=ks(u*.05,0,d*.05,s+303)>.56;for(let x=2;x<fe-3;x++){const g=this.idx(c,x,f);if(o[g]!==L.NETHERRACK)continue;const m=o[g+r],y=o[g-r];m===se&&x>32&&p?o[g]=L.SOUL_SAND:y===se&&x>84&&Gt(u*7+x,d*3,s+310)<.02?o[g]=L.GLOWSTONE:Gt(u*13+x,d*5-x,s+311)<.006&&(o[g]=L.GOLD_ORE)}}const h={data:o,x0:a,z0:l};for(const f of this.fortressesNear(a,l))this.buildFortress(f,h);return this.chunks.set(i,o),this.computeTops(i,o),this.scanTorches(i,o),o}_fill(t,e,i,s,o,a,l,r){const h=Math.max(Math.min(e,o),t.x0),f=Math.min(Math.max(e,o),t.x0+J-1),c=Math.max(Math.min(s,l),t.z0),u=Math.min(Math.max(s,l),t.z0+J-1),d=Math.max(Math.min(i,a),0),p=Math.min(Math.max(i,a),fe-1);for(let x=d;x<=p;x++)for(let g=c;g<=u;g++)for(let m=h;m<=f;m++)t.data[this.idx(m-t.x0,x,g-t.z0)]=r}fortressAt(t,e){const i="f"+t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);const s=this.seed;let o=null;return Gt(t,e,s+4400)<.6&&(o={x:t*224+112+Math.floor((Gt(t,e,s+4401)-.5)*80),z:e*224+112+Math.floor((Gt(t,e,s+4402)-.5)*80),y:68}),this.vcache.set(i,o),o}fortressesNear(t,e){const i=[];for(let s=Math.floor((t-70)/224);s<=Math.floor((t+J+70)/224);s++)for(let o=Math.floor((e-70)/224);o<=Math.floor((e+J+70)/224);o++){const a=this.fortressAt(s,o);a&&Math.abs(a.x-t-8)<80&&Math.abs(a.z-e-8)<80&&i.push(a)}return i}buildFortress(t,e){const i=(l,r,h,f,c,u,d)=>this._fill(e,t.x+l,t.y+r,t.z+h,t.x+f,t.y+c,t.z+u,d),o=L.NETHER_BRICKS;i(-8,1,-8,8,9,8,se),i(-8,-2,-8,8,0,8,o),i(-8,8,-8,8,8,8,o),i(-8,1,-8,-8,7,8,o),i(8,1,-8,8,7,8,o),i(-8,1,-8,8,7,-8,o),i(-8,1,8,8,7,8,o);for(const[l,r]of[[-5,-5],[5,-5],[-5,5],[5,5]])i(l,1,r,l,7,r,o),i(l,7,r,l,7,r,L.GLOWSTONE);i(-1,8,-1,1,8,1,L.GLOWSTONE);const a=[[1,0],[-1,0],[0,1],[0,-1]];for(const[l,r]of a){const h=-r,f=l;this._fill(e,t.x+l*8-h*1,t.y+1,t.z+r*8-f*1,t.x+l*8+h*1,t.y+4,t.z+r*8+f*1,se);for(let d=9;d<=49;d++){const p=t.x+l*d,x=t.z+r*d;if(this._fill(e,p-h*1,t.y+1,x-f*1,p+h*1,t.y+6,x+f*1,se),this._fill(e,p-h*2,t.y,x-f*2,p+h*2,t.y,x+f*2,o),this._fill(e,p-h*2,t.y+1,x-f*2,p-h*2,t.y+2,x-f*2,o),this._fill(e,p+h*2,t.y+1,x+f*2,p+h*2,t.y+2,x+f*2,o),d%8===0&&(this._fill(e,p-h*2,t.y+1,x-f*2,p-h*2,t.y+5,x-f*2,o),this._fill(e,p+h*2,t.y+1,x+f*2,p+h*2,t.y+5,x+f*2,o),this._fill(e,p-h*2,t.y+5,x-f*2,p+h*2,t.y+5,x+f*2,o)),d%8===4)for(const g of[-2,2])this._fill(e,p+h*g,t.y-46,x+f*g,p+h*g,t.y-1,x+f*g,o)}const c=t.x+l*54,u=t.z+r*54;this._fill(e,c-4,t.y+1,u-4,c+4,t.y+13,u+4,se),this._fill(e,c-4,t.y-3,u-4,c+4,t.y,u+4,o),this._fill(e,c-4,t.y+1,u-4,c-4,t.y+12,u+4,o),this._fill(e,c+4,t.y+1,u-4,c+4,t.y+12,u+4,o),this._fill(e,c-4,t.y+1,u-4,c+4,t.y+12,u-4,o),this._fill(e,c-4,t.y+1,u+4,c+4,t.y+12,u+4,o),this._fill(e,c-4,t.y+13,u-4,c+4,t.y+13,u+4,o),this._fill(e,c-l*4-h*1,t.y+1,u-r*4-f*1,c-l*4+h*1,t.y+4,u-r*4+f*1,se),this._fill(e,c-2,t.y+7,u-2,c+2,t.y+7,u+2,o),this._fill(e,c-1,t.y+7,u-1,c-1,t.y+7,u,se);for(let d=0;d<6;d++)this._fill(e,c-3,t.y+1,u-3+d,c-3,t.y+1+d,u-3+d,o);this._fill(e,c-3,t.y+7,u-3,c-3,t.y+7,u+2,se),this._fill(e,c,t.y+12,u,c,t.y+12,u,L.GLOWSTONE),this._fill(e,c+2,t.y+1,u+2,c+2,t.y+1,u+2,L.CHEST),this._fill(e,c-2,t.y+8,u+2,c-2,t.y+8,u+2,L.CHEST)}this._fill(e,t.x-7,t.y+1,t.z-7,t.x-7,t.y+1,t.z-7,L.CHEST),this._fill(e,t.x+7,t.y+1,t.z+7,t.x+7,t.y+1,t.z+7,L.CHEST),this._fill(e,t.x+7,t.y+1,t.z-7,t.x+7,t.y+1,t.z-7,L.CHEST)}endIsland(t,e){const i=this.seed+9001,s=Math.hypot(t,e);if(s<54)return{top:64+Math.floor(ii(t*.08,e*.08,i+700,2)*3)-(s>46?Math.floor(s-46):0),bottom:0};if(s>240){const o=ii(t*.011,e*.011,i+701,3);if(o>.63)return{top:58+Math.floor((o-.63)*60)+Math.floor(ii(t*.06,e*.06,i+702,2)*3),n:o}}return null}endCityAt(t,e){const i="e"+t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);let s=null;const o=this.seed;if(Gt(t,e,o+5500)<.7){let a=null;for(let l=8;l<160;l+=10)for(let r=8;r<160;r+=10){const h=t*160+l,f=e*160+r;if(Math.hypot(h,f)<270)continue;const c=this.endIsland(h,f);c&&c.n>.66&&(!a||c.n>a.n)&&(a={x:h,z:f,n:c.n,top:c.top})}a&&(s={x:a.x,z:a.z,y:a.top,ship:Gt(t,e,o+5501)<.55})}return this.vcache.set(i,s),s}endCitiesNear(t,e){const i=[];for(let s=Math.floor((t-30)/160);s<=Math.floor((t+J+30)/160);s++)for(let o=Math.floor((e-30)/160);o<=Math.floor((e+J+30)/160);o++){const a=this.endCityAt(s,o);a&&Math.abs(a.x-t-8)<50&&Math.abs(a.z-e-8)<50&&i.push(a)}return i}buildEndCity(t,e){const i=(a,l,r,h,f,c,u)=>this._fill(e,t.x+a,t.y+l,t.z+r,t.x+h,t.y+f,t.z+c,u),s=L.PURPUR,o=L.END_BRICKS;i(-6,-12,-6,6,0,6,s),i(-5,1,-5,5,21,5,se);for(let a=0;a<3;a++){const l=1+a*6;i(-4,l,-4,4,l,4,s);for(let r=l+1;r<=l+5;r++){const h=r===l+3?o:s;i(-4,r,-4,4,r,-4,h),i(-4,r,4,4,r,4,h),i(-4,r,-4,-4,r,4,h),i(4,r,-4,4,r,4,h)}for(const[r,h]of[[0,-4],[0,4],[-4,0],[4,0]])i(r===0?-1:r,l+2,h===0?-1:h,r===0?1:r,l+4,h===0?1:h,L.GLASS);i(-3,l+5,-3,-3,l+5,-3,L.GLOWSTONE),i(3,l+5,3,3,l+5,3,L.GLOWSTONE);for(let r=0;r<6;r++)i(-3+r,l+1,-3,-3+r,l+1+r,-3,s);i(-3,l+6,-3,1,l+6,-2,se)}i(-4,19,-4,4,19,4,s),i(-3,19,-3,-3,19,-3,s);for(const[a,l]of[[-4,-4],[4,-4],[-4,4],[4,4]])i(a,20,l,a,23,l,s),i(a,24,l,a,24,l,L.GLOWSTONE);i(-1,2,-1,1,4,-4,se),i(-1,2,-4,1,4,-4,se),i(2,2,2,2,2,2,L.CHEST),i(-2,8,2,-2,8,2,L.CHEST),i(2,14,2,2,14,2,L.CHEST),t.ship&&(i(5,13,-1,9,13,1,s),i(10,13,-3,22,13,3,s),i(10,14,-3,22,14,-3,o),i(10,14,3,22,14,3,o),i(22,14,-3,22,14,3,o),i(20,13,-2,24,13,2,s),i(25,14,0,25,15,0,o),i(15,14,0,15,19,0,o),i(14,17,0,16,17,0,o),i(21,14,0,21,14,0,o),i(21,15,0,21,15,0,L.CHEST),i(10,12,-2,20,11,2,s))}genEnd(t,e,i){const s=this.seed+9001,o=new Uint8Array(J*J*fe),a=t*J,l=e*J;for(let h=0;h<J;h++)for(let f=0;f<J;f++){const c=a+f,u=l+h,d=Math.hypot(c,u);let p=-1,x=0;if(d<54)p=64+Math.floor(ii(c*.08,u*.08,s+700,2)*3)-(d>46?Math.floor(d-46):0),x=p-((54-d)*.75+3+ii(c*.05,u*.05,s+703,2)*5);else if(d>240){const g=ii(c*.011,u*.011,s+701,3);g>.63&&(p=58+Math.floor((g-.63)*60)+Math.floor(ii(c*.06,u*.06,s+702,2)*3),x=p-((g-.63)*230+2))}if(p>0)for(let g=Math.max(1,Math.floor(x));g<=p&&g<fe;g++)o[this.idx(f,g,h)]=L.END_STONE}for(const h of ec())for(let f=-2;f<=2;f++)for(let c=-2;c<=2;c++){if(f*f+c*c>5)continue;const u=h.x+f-a,d=h.z+c-l;if(!(u<0||d<0||u>=J||d>=J)){for(let p=62;p<=h.top;p++)o[this.idx(u,p,d)]=L.OBSIDIAN;f===0&&c===0&&(o[this.idx(u,h.top+1,d)]=L.BEDROCK)}}const r={data:o,x0:a,z0:l};for(const h of this.endCitiesNear(a,l))this.buildEndCity(h,r);return this.chunks.set(i,o),this.computeTops(i,o),this.scanTorches(i,o),o}computeTops(t,e){let i=0;for(let o=e.length-1;o>=0;o--)if(e[o]){i=Math.floor(o/(J*J));break}this.hi||(this.hi=new Map),this.hi.set(t,i);const s=new Int16Array(J*J).fill(-1);for(let o=0;o<J;o++)for(let a=0;a<J;a++){let l=fe-1;for(;l>=0&&!an[e[this.idx(a,l,o)]];)l--;s[o*J+a]=l}this.tops.set(t,s)}getBlock(t,e,i){if(e<0||e>=fe)return se;const s=Math.floor(t/J),o=Math.floor(i/J),a=this.chunks.get(wi(s,o));return a?a[(e*J+(i-o*J))*J+(t-s*J)]:se}topY(t,e){const i=Math.floor(t/J),s=Math.floor(e/J),o=this.tops.get(wi(i,s));return o?o[(e-s*J)*J+(t-i*J)]:-1}skyLit(t,e,i){if(this.dim!=="overworld")return 1;const s=Math.floor(t/J),o=Math.floor(i/J),a=this.tops.get(wi(s,o));return a?e>a[(i-o*J)*J+(t-s*J)]?1:0:1}isSolid(t,e,i){if(e<0)return!0;if(e>=fe)return!1;const s=Math.floor(t/J),o=Math.floor(i/J),a=this.chunks.get(wi(s,o));return a?Xo[a[(e*J+(i-o*J))*J+(t-s*J)]]===1:!0}isLiquid(t,e,i){return un[this.getBlock(t,e,i)]===1}setBlock(t,e,i,s){if(e<0||e>=fe)return!1;const o=Math.floor(t/J),a=Math.floor(i/J),l=wi(o,a),r=this.chunks.get(l);if(!r)return!1;const h=t-o*J,f=i-a*J,c=this.idx(h,e,f),u=r[c];if(r[c]=s,s&&e>this.hi.get(l)&&this.hi.set(l,e),this.modified.add(l),this.unsaved.add(l),Zr[u]||Zr[s]){this.scanTorches(l,r);for(let m=-1;m<=1;m++)for(let y=-1;y<=1;y++)this.dirty.add(wi(o+m,a+y))}const d=this.tops.get(l),p=f*J+h;if(an[s])e>d[p]&&(d[p]=e);else if(e===d[p]){let m=e-1;for(;m>=0&&!an[r[this.idx(h,m,f)]];)m--;d[p]=m}this.dirty.add(l);const x=h===0?-1:h===J-1?1:0,g=f===0?-1:f===J-1?1:0;return x&&this.dirty.add(wi(o+x,a)),g&&this.dirty.add(wi(o,a+g)),x&&g&&this.dirty.add(wi(o+x,a+g)),!0}raycast(t,e,i=6,s=!1){let o=Math.floor(t.x),a=Math.floor(t.y),l=Math.floor(t.z);const r=[Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)],h=[Math.abs(1/e.x),Math.abs(1/e.y),Math.abs(1/e.z)],f=(p,x)=>x>0?Math.floor(p)+1-p:p-Math.floor(p),c=[r[0]===0?1/0:f(t.x,r[0])*h[0],r[1]===0?1/0:f(t.y,r[1])*h[1],r[2]===0?1/0:f(t.z,r[2])*h[2]];let u=[0,0,0],d=0;for(;d<=i;){const p=this.getBlock(o,a,l);if(p!==se&&(s||!un[p]&&!Yu[p]))return{x:o,y:a,z:l,id:p,normal:u,dist:d};const x=c[0]<c[1]?c[0]<c[2]?0:2:c[1]<c[2]?1:2;d=c[x],c[x]+=h[x],u=[0,0,0],u[x]=-r[x],x===0?o+=r[0]:x===1?a+=r[1]:l+=r[2]}return null}update(t,e,i,s=2){const o=Math.floor(t/J),a=Math.floor(e/J),l=[],r=[];for(let c=-i-1;c<=i+1;c++)for(let u=-i-1;u<=i+1;u++){const d=o+u,p=a+c,x=wi(d,p),g=u*u+c*c;if(!this.chunks.has(x))l.push({cx:d,cz:p,d:g});else if(Math.abs(u)<=i&&Math.abs(c)<=i){const m=this.dirty.has(x);(!this.meshes.has(x)||m)&&r.push({cx:d,cz:p,d:m?g-1e4:g})}}l.sort((c,u)=>c.d-u.d);for(let c=0;c<Math.min(s*2,l.length);c++)this.generateChunk(l[c].cx,l[c].cz);r.sort((c,u)=>c.d-u.d);let h=0,f=0;for(const c of r){let u=!0;for(let d=-1;d<=1&&u;d++)for(let p=-1;p<=1;p++)if(!this.chunks.has(wi(c.cx+d,c.cz+p))){u=!1;break}if(!u){f++;continue}h<(c.d<-5e3?6:s)?(this.buildMesh(c.cx,c.cz),h++):f++}for(const[c,u]of this.meshes)(Math.abs(Df(c)-o)>i+2||Math.abs(If(c)-a)>i+2)&&(this.disposeMesh(u),this.meshes.delete(c));if((this.unloadT-=1)<=0){this.unloadT=60;for(const c of[...this.chunks.keys()])if(Math.abs(Df(c)-o)>i+5||Math.abs(If(c)-a)>i+5){if(this.modified.has(c))continue;this.chunks.delete(c),this.tops.delete(c)}}return l.length+f}disposeMesh(t){for(const e of[t.opaque,t.trans])e&&(this.scene.remove(e),e.geometry.dispose())}buildMesh(t,e){const i=wi(t,e),s=this.chunks.get(i);if(!s)return;const o=t*J,a=e*J,l=[{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]},{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]}],r=(M,_,C)=>{const N=M-o,O=C-a;return N>=0&&O>=0&&N<J&&O<J&&_>=0&&_<fe?s[(_*J+O)*J+N]:this.getBlock(M,_,C)},h=new Float32Array(J*J*3);for(let M=0;M<J;M++)for(let _=0;_<J;_++){const C=o+_,N=a+M,O=ii(C*.004,N*.004,this.seed+900,2),H=ii(C*.0035,N*.0035,this.seed+500,2),$=Oo(.35,.7,O),q=Oo(.42,.28,H),Y=(M*J+_)*3;h[Y]=(1.15*(1-$)+.78*$)*(1-.18*q),h[Y+1]=1*(1-$)+1.1*$,h[Y+2]=.6*(1-$)+.8*$+.3*q}const f=.0015,c=[0,0,0],u=[0,0,0,0],d=[0,0,0,0],p=[0,0,0,0],x=J*3,g=o-J,m=a-J;let y=null;const S=[];for(let M=-1;M<=1;M++)for(let _=-1;_<=1;_++){const C=this.torches.get(wi(t+M,e+_));if(C)for(const N of C)S.push([(t+M)*J+N%J,Math.floor(N/(J*J)),(e+_)*J+Math.floor(N/J)%J])}if(S.length){y=this._lm||(this._lm=new Uint8Array(x*x*fe)),y.fill(0);const M=(N,O,H)=>(O*x+(H-m))*x+(N-g),_=[];for(const[N,O,H]of S)y[M(N,O,H)]=10,_.push(N,O,H);const C=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1];for(let N=0;N<_.length;N+=3){const O=_[N],H=_[N+1],$=_[N+2],q=y[M(O,H,$)]-1;if(!(q<=0))for(let Y=0;Y<18;Y+=3){const V=O+C[Y],it=H+C[Y+1],rt=$+C[Y+2];if(it<0||it>=fe||V<g||V>=g+x||rt<m||rt>=m+x||an[r(V,it,rt)])continue;const xt=M(V,it,rt);y[xt]<q&&(y[xt]=q,_.push(V,it,rt))}}}const v=(M,_,C)=>!y||_<0||_>=fe||M<g||M>=g+x||C<m||C>=m+x?0:Math.pow(y[(_*x+(C-m))*x+(M-g)]/10,1.7),D=Math.min(fe-1,(this.hi.get(i)||fe)+1);for(let M=0;M<=D;M++)for(let _=0;_<J;_++)for(let C=0;C<J;C++){const N=s[(M*J+_)*J+C];if(N===se)continue;const O=$e[N],H=O.transparent?l[1]:l[0],$=o+C,q=a+_;if(O.torch){const Y=(No.torch+.4375)/Uo,V=(No.torch+9/16)/Uo;for(const it of xh){if(it.bottom)continue;const rt=H.pos.length/3;for(const xt of it.corners)H.pos.push(C+7/16+xt.p[0]*2/16,M+xt.p[1]*10/16,_+7/16+xt.p[2]*2/16),H.nor.push(it.dir[0],it.dir[1],it.dir[2]),H.uv.push(Y+(V-Y)*xt.uv[0],6/16+10/16*xt.uv[1]),H.col.push(.9,.9,.9),H.bl.push(1),H.sw.push(0),H.sk.push(1);H.ind.push(rt,rt+1,rt+2,rt+2,rt+1,rt+3)}continue}for(const Y of xh){const V=$+Y.dir[0],it=M+Y.dir[1],rt=q+Y.dir[2],xt=r(V,it,rt);if(an[xt]||xt===N&&(O.transparent||O.liquid))continue;const qt=No[Y.top?O.tiles[0]:Y.bottom?O.tiles[1]:O.tiles[2]],[me,j]=Y.tan;let at=1,bt=1,ft=1;if(N===L.LEAVES||N===L.GRASS&&Y.top){const Vt=(_*J+C)*3;at=h[Vt],bt=h[Vt+1],ft=h[Vt+2]}const Dt=it<fe?this.skyLit(V,it,rt):1,Bt=v(V,it,rt);for(let Vt=0;Vt<4;Vt++){const Xt=Y.corners[Vt].p,Ee=Xt[me]*2-1,F=Xt[j]*2-1;c[0]=V,c[1]=it,c[2]=rt,c[me]+=Ee;const Ze=an[r(c[0],c[1],c[2])],ie=Ze?Dt:this.skyLit(c[0],c[1],c[2]),ne=Ze?Bt:v(c[0],c[1],c[2]);c[0]=V,c[1]=it,c[2]=rt,c[j]+=F;const Ct=an[r(c[0],c[1],c[2])],Ce=Ct?Dt:this.skyLit(c[0],c[1],c[2]),It=Ct?Bt:v(c[0],c[1],c[2]);c[0]=V,c[1]=it,c[2]=rt,c[me]+=Ee,c[j]+=F;const A=an[r(c[0],c[1],c[2])],b=Ze&&Ct||A?Dt:this.skyLit(c[0],c[1],c[2]),G=Ze&&Ct||A?Bt:v(c[0],c[1],c[2]);p[Vt]=(Bt+ne+It+G)/4,u[Vt]=Ze&&Ct?0:3-(Ze+Ct+A),d[Vt]=(Dt+ie+Ce+b)/4}const Ut=H.pos.length/3;for(let Vt=0;Vt<4;Vt++){const Xt=Y.corners[Vt];let Ee=Xt.p[1];(N===L.WATER||N===L.LAVA)&&Ee===1&&r($,M+1,q)!==N&&(Ee=.88),H.pos.push(C+Xt.p[0],M+Ee,_+Xt.p[2]),H.nor.push(Y.dir[0],Y.dir[1],Y.dir[2]),H.uv.push((qt+(Xt.uv[0]?1-f:f))/Uo,Xt.uv[1]?1-f:f);const F=Y.shade*Nf[u[Vt]]*(.3+.7*d[Vt]);H.col.push(F*at,F*bt,F*ft),H.bl.push(O.glow?1:Y.shade*Nf[u[Vt]]*p[Vt]),H.sw.push(N===L.LEAVES?1:N===L.WATER||N===L.LAVA?2:0),H.sk.push(d[Vt])}u[0]+u[3]>u[1]+u[2]?H.ind.push(Ut,Ut+1,Ut+3,Ut,Ut+3,Ut+2):H.ind.push(Ut,Ut+1,Ut+2,Ut+2,Ut+1,Ut+3)}}const T=this.meshes.get(i);T&&this.disposeMesh(T);const w={opaque:null,trans:null},R=(M,_,C,N)=>{if(!M.ind.length)return null;const O=new je;O.setAttribute("position",new Ae(M.pos,3)),O.setAttribute("normal",new Ae(M.nor,3)),O.setAttribute("uv",new Ae(M.uv,2)),O.setAttribute("color",new Ae(M.col,3)),O.setAttribute("blight",new Ae(M.bl,1)),O.setAttribute("sway",new Ae(M.sw,1)),O.setAttribute("skyl",new Ae(M.sk,1)),O.setIndex(M.ind),O.computeBoundingSphere();const H=new At(O,_);return H.position.set(o,0,a),H.renderOrder=C,H.castShadow=N,H.receiveShadow=!0,this.scene.add(H),H};w.opaque=R(l[0],this.materials.opaque,0,!0),w.trans=R(l[1],this.materials.trans,1,!1),this.meshes.set(i,w),this.dirty.delete(i),this.onChunkMeshed&&this.onChunkMeshed(t,e)}}const ds=(n,t)=>new gi(t?{color:n,map:t}:{color:n});function Ie(n,t,e,i,s,o,a,l){const r=new Se;r.position.set(o,a,l);const h=new At(new Jt(t,e,i),ds(s));return h.position.y=-e/2,r.add(h),n.add(r),r}function ot(n,t,e,i,s,o,a,l,r){const h=new At(new Jt(t,e,i),ds(s,r));return h.position.set(o,a,l),n.add(h),h}function Ev(n){const t=document.createElement("canvas");t.width=t.height=8,n(t.getContext("2d"));const e=new Bi(t);return e.magFilter=de,e.minFilter=de,e.generateMipmaps=!1,e}const io={pig:{hw:.4,h:.9,hp:10,speed:1.4,hostile:!1,name:"Cerdo",build(n,t){ot(n,.6,.5,.95,15769768,0,.62,0),t.head=ot(n,.5,.45,.45,16034480,0,.78,.65),ot(n,.26,.2,.1,14189196,0,.72,.92),t.legs=[[-.18,.5],[.18,.5],[-.18,-.5],[.18,-.5]].map(([e,i])=>Ie(n,.2,.37,.2,15242140,e,.37,i))},drops:()=>[[I.PORK,1+Math.floor(Math.random()*2)]]},cow:{hw:.45,h:1.4,hp:10,speed:1.2,hostile:!1,name:"Vaca",build(n,t){ot(n,.75,.7,1.2,4863268,0,.95,0),ot(n,.77,.3,.5,15658734,0,.95,-.15),t.head=ot(n,.5,.5,.45,4863268,0,1.15,.8),ot(n,.3,.2,.1,14272688,0,1.05,1.05),ot(n,.08,.15,.08,14540253,-.22,1.45,.75),ot(n,.08,.15,.08,14540253,.22,1.45,.75),t.legs=[[-.22,.45],[.22,.45],[-.22,-.45],[.22,-.45]].map(([e,i])=>Ie(n,.24,.6,.24,4008990,e,.6,i))},drops:()=>[[I.BEEF,1+Math.floor(Math.random()*3)]]},sheep:{hw:.42,h:1.2,hp:8,speed:1.2,hostile:!1,name:"Oveja",xp:1,build(n,t){ot(n,.85,.75,1.15,15658734,0,.9,0),t.head=ot(n,.4,.42,.42,9076080,0,1.05,.72),t.legs=[[-.2,.4],[.2,.4],[-.2,-.4],[.2,-.4]].map(([e,i])=>Ie(n,.2,.5,.2,9076080,e,.5,i))},drops:()=>[[I.BEEF,1+Math.floor(Math.random()*2)]]},chicken:{hw:.22,h:.7,hp:4,speed:1.3,hostile:!1,name:"Gallina",xp:1,build(n,t){ot(n,.34,.34,.5,16053492,0,.42,0),t.head=ot(n,.2,.26,.2,16316664,0,.68,.24),ot(n,.1,.07,.12,15769632,0,.64,.38),ot(n,.06,.1,.06,13639712,0,.55,.33),ot(n,.06,.26,.4,15263976,-.2,.44,0),ot(n,.06,.26,.4,15263976,.2,.44,0),t.legs=[-.08,.08].map(e=>Ie(n,.05,.25,.05,15769632,e,.25,0))},drops:()=>[[I.CHICKEN,1]]},skeleton:{hw:.3,h:1.9,hp:20,speed:2.2,hostile:!0,name:"Esqueleto",ranged:!0,xp:5,build(n,t){t.legs=[Ie(n,.18,.85,.18,14211276,-.12,.85,0),Ie(n,.18,.85,.18,14211276,.12,.85,0)],ot(n,.5,.8,.2,14211276,0,1.25,0);for(const s of[1,1.2,1.4])ot(n,.52,.07,.22,5592396,0,s,0);t.arms=[Ie(n,.14,.75,.14,14211276,-.34,1.62,0),Ie(n,.14,.75,.14,14211276,.34,1.62,0)],t.arms[1].rotation.x=-1.3,t.arms[0].rotation.x=-1.3,t.head=ot(n,.5,.5,.5,14211276,0,1.9,0),ot(n,.1,.1,.02,1052688,-.12,1.93,.26),ot(n,.1,.1,.02,1052688,.12,1.93,.26),ot(n,.2,.05,.02,1052688,0,1.78,.26),ot(n,.06,.5,.2,6965800,.42,1.28,.28)},drops:()=>Math.random()<.6?[[I.COAL,1]]:[[I.STICK,2]]},spider:{hw:.55,h:.75,hp:16,speed:4.2,hostile:!0,name:"Araña",xp:4,build(n,t){ot(n,.7,.5,.7,2761760,0,.5,.3),ot(n,.9,.6,1.1,3353124,0,.55,-.55),t.head=ot(n,.5,.45,.45,2761760,0,.5,.8);for(const i of[-.12,.12])ot(n,.1,.1,.03,13637656,i,.58,1.04),ot(n,.06,.06,.03,13637656,i*1.8,.5,1.04);t.legs=[];for(let i=0;i<4;i++)for(const s of[-1,1]){const o=ot(n,.9,.08,.08,2761760,s*.62,.38,.55-i*.38);o.rotation.z=s*-.55,o.rotation.y=s*(i-1.5)*.25}},drops:()=>Math.random()<.5?[[I.STICK,1]]:[]},enderman:{hw:.3,h:2.9,hp:40,speed:5,hostile:!1,name:"Enderman",xp:8,enderman:!0,build(n,t){t.legs=[Ie(n,.18,1.5,.18,1182232,-.12,1.5,0),Ie(n,.18,1.5,.18,1182232,.12,1.5,0)],ot(n,.5,.95,.26,1182232,0,1.98,0),t.arms=[Ie(n,.13,1.35,.13,1182232,-.34,2.45,0),Ie(n,.13,1.35,.13,1182232,.34,2.45,0)],t.head=ot(n,.5,.42,.5,1182232,0,2.7,0);for(const i of[-.13,.13])ot(n,.14,.05,.03,14708991,i,2.72,.26)},drops:()=>Math.random()<.65?[[I.PEARL,1]]:[]},slime:{hw:.42,h:.85,hp:8,speed:0,hostile:!0,name:"Slime",hopper:!0,xp:2,build(n,t){const e=new gi({color:6348896,emissive:1064976,transparent:!0,opacity:.8}),i=new At(new Jt(.84,.84,.84),e);i.position.y=.42,n.add(i),ot(n,.4,.4,.4,3119663,0,.42,0),ot(n,.14,.14,.05,1060880,-.2,.55,.43),ot(n,.14,.14,.05,1060880,.2,.55,.43)},drops:()=>[]},piglin:{hw:.3,h:1.8,hp:24,speed:2.7,hostile:!0,name:"Piglin zombificado",damage:5,xp:6,piglin:!0,build(n,t){t.legs=[Ie(n,.26,.75,.26,5917240,-.14,.75,0),Ie(n,.26,.75,.26,5917240,.14,.75,0)],ot(n,.56,.75,.3,8022608,0,1.125,0),ot(n,.58,.14,.32,15253568,0,1.45,0),t.arms=[Ie(n,.22,.72,.22,13208184,-.38,1.45,0),Ie(n,.22,.72,.22,13208184,.38,1.45,0)],t.arms.forEach(s=>s.rotation.x=-Math.PI/2.3),ot(n,.1,.55,.1,15253568,.4,1,.45),t.head=ot(n,.6,.5,.5,13208184,0,1.78,0),ot(n,.34,.22,.12,11563103,0,1.72,.3),ot(n,.06,.08,.04,2101264,-.07,1.72,.37),ot(n,.06,.08,.04,2101264,.07,1.72,.37),ot(n,.12,.28,.06,13208184,-.37,1.8,0).rotation.z=.5,ot(n,.12,.28,.06,13208184,.37,1.8,0).rotation.z=-.5,ot(n,.08,.06,.03,16724e3,-.14,1.88,.26),ot(n,.08,.06,.03,16724e3,.14,1.88,.26)},drops:()=>Math.random()<.6?[[I.GOLD,1]]:[]},blaze:{hw:.35,h:1.7,hp:20,speed:2.4,hostile:!0,name:"Blaze",fly:!0,ranged:!1,xp:7,build(n,t){const e=new gi({color:15773728,emissive:10506240}),i=new gi({color:16742928,emissive:12595200});t.head=new At(new Jt(.55,.55,.55),e),t.head.position.y=1.4,n.add(t.head);for(const s of[-.13,.13])ot(n,.12,.1,.03,2101248,s,1.45,.29);ot(n,.22,.06,.03,2101248,0,1.28,.29),t.rods=[];for(let s=0;s<3;s++){const o=new Se;o.position.y=.35+s*.38,n.add(o);for(let a=0;a<4;a++){const l=a/4*Math.PI*2,r=new At(new Jt(.12,.5,.12),s%2?i:e);r.position.set(Math.cos(l)*.5,0,Math.sin(l)*.5),o.add(r)}t.rods.push(o)}ot(n,.2,.25,.2,16752672,0,.9,0)},drops:()=>Math.random()<.8?[[I.COAL,1+Math.floor(Math.random()*2)]]:[]},magmacube:{hw:.5,h:1,hp:18,speed:0,hostile:!0,name:"Cubo de magma",hopper:!0,xp:5,build(n,t){const e=new gi({color:11547664,emissive:8003584}),i=new be({color:16752672}),s=new At(new Jt(1,1,1),e);s.position.y=.5,n.add(s);for(const[o,a,l]of[[0,.7,.51],[.3,.3,.51],[-.3,.45,.51],[.51,.5,.2],[-.51,.5,-.1]])ot(n,.3,.12,.05,16752672,o,a,l);ot(n,.15,.12,.04,2101248,-.22,.65,.52),ot(n,.15,.12,.04,2101248,.22,.65,.52),ot(n,.4,.1,.04,i,0,.35,.52)},drops:()=>Math.random()<.6?[[I.COAL,1]]:[]},witherskeleton:{hw:.35,h:2.4,hp:30,speed:2.9,hostile:!0,name:"Esqueleto Wither",damage:6,reach:1.7,effect:["poison",5],xp:9,build(n,t){t.legs=[Ie(n,.2,1.1,.2,2302755,-.14,1.1,0),Ie(n,.2,1.1,.2,2302755,.14,1.1,0)],ot(n,.56,.95,.24,2302755,0,1.6,0);for(const s of[1.3,1.55,1.8])ot(n,.58,.07,.26,921102,0,s,0);t.arms=[Ie(n,.16,1,.16,2302755,-.38,2.05,0),Ie(n,.16,1,.16,2302755,.38,2.05,0)],t.arms[0].rotation.x=t.arms[1].rotation.x=-1.2,ot(n,.1,.7,.06,3815994,.45,1.5,.5),ot(n,.3,.06,.06,3815994,.45,1.85,.5),t.head=ot(n,.58,.58,.58,2302755,0,2.2,0),ot(n,.12,.1,.02,12632256,-.14,2.25,.3),ot(n,.12,.1,.02,12632256,.14,2.25,.3),ot(n,.24,.05,.02,328965,0,2.05,.3)},drops:()=>[[I.COAL,1+Math.floor(Math.random()*2)]]},ghast:{hw:1.2,h:2.6,hp:14,speed:1.6,hostile:!0,name:"Ghast",fly:!0,flyKind:"ghast",xp:10,build(n,t){ds(16053492),ot(n,2.4,2.4,2.4,16053492,0,1.4,0),t.eyeL=ot(n,.6,.15,.05,4208696,-.5,1.6,1.22),t.eyeR=ot(n,.6,.15,.05,4208696,.5,1.6,1.22),ot(n,.4,.2,.05,4208696,0,.95,1.22);for(const e of[-.8,0,.8])for(const i of[-.8,0,.8])ot(n,.3,1.4+Math.abs(e*i),.3,14474460,e,.1,i)},drops:()=>[[I.COAL,1+Math.floor(Math.random()*2)],...Math.random()<.4?[[I.GOLD,1]]:[]]},hoglin:{hw:.6,h:1.5,hp:32,speed:3.2,hostile:!0,name:"Hoglin",damage:7,reach:1.9,xp:8,build(n,t){ot(n,1,.95,1.5,9067066,0,1,0),ot(n,.7,.4,.9,5913128,0,1.55,-.1),t.head=ot(n,.85,.75,.8,10119754,0,.95,1),ot(n,.5,.35,.3,12618346,0,.8,1.45);for(const e of[-.3,.3])ot(n,.1,.35,.1,15788240,e,1.15,1.5).rotation.x=-.4,ot(n,.14,.12,.04,1052688,e*.9,1.12,1.42),ot(n,.2,.28,.12,8014384,e*1.7,1.3,.85).rotation.z=e*1.5;t.legs=[[-.35,.55],[.35,.55],[-.35,-.55],[.35,-.55]].map(([e,i])=>Ie(n,.3,.55,.3,6963240,e,.55,i))},drops:()=>[[I.PORK,2+Math.floor(Math.random()*3)]]},shulker:{hw:.5,h:1,hp:22,speed:0,hostile:!0,name:"Shulker",static:!0,shulker:!0,xp:8,build(n,t){ot(n,1,.5,1,8014474,0,.25,0),t.lid=new Se,t.lid.position.set(0,.5,-.5),n.add(t.lid);const e=ds(10316974),i=new At(new Jt(1,.5,1),e);i.position.set(0,.25,.5),t.lid.add(i),t.eye=ot(n,.3,.3,.3,15790240,0,.55,0),t.eye.material.emissive=new St(7368768)},drops:()=>Math.random()<.35?[[I.PEARL,1]]:[]},endermite:{hw:.22,h:.35,hp:8,speed:4.6,hostile:!0,name:"Endermite",damage:2,reach:.9,xp:3,build(n,t){ot(n,.32,.26,.26,5909114,0,.14,.2),ot(n,.4,.3,.3,6961802,0,.16,-.05),ot(n,.26,.22,.26,4857960,0,.12,-.3),ot(n,.06,.06,.03,14708991,-.07,.2,.34),ot(n,.06,.06,.03,14708991,.07,.2,.34)},drops:()=>[]},phantom:{hw:.6,h:.6,hp:18,speed:3,hostile:!0,name:"Phantom",fly:!0,flyKind:"phantom",xp:7,build(n,t){ot(n,.5,.35,1.1,4083590,0,.3,0),ot(n,.3,.2,.3,4083590,0,.3,.7),ot(n,.12,.1,.04,7405424,-.12,.34,.86),ot(n,.12,.1,.04,7405424,.12,.34,.86),t.wings=[-1,1].map(i=>{const s=new Se;s.position.set(i*.25,.4,.1),n.add(s);const o=new At(new Jt(1.5,.06,.8),ds(3227758));return o.position.x=i*.75,s.add(o),{g:s,s:i}}),ot(n,.2,.15,.9,4083590,0,.28,-.9)},drops:()=>[]},zombie:{hw:.3,h:1.8,hp:20,speed:2.5,hostile:!0,name:"Zombi",damage:3,build(n,t){t.legs=[Ie(n,.26,.75,.26,2899612,-.14,.75,0),Ie(n,.26,.75,.26,2899612,.14,.75,0)],ot(n,.54,.75,.28,2794936,0,1.125,0),t.arms=[Ie(n,.22,.72,.22,5147194,-.38,1.45,0),Ie(n,.22,.72,.22,5147194,.38,1.45,0)],t.arms.forEach(e=>e.rotation.x=-Math.PI/2.2),t.head=ot(n,.5,.5,.5,5147194,0,1.75,0),ot(n,.1,.07,.02,1052688,-.12,1.78,.26),ot(n,.1,.07,.02,1052688,.12,1.78,.26)},drops:()=>Math.random()<.15?[[I.IRON,1]]:[]},creeper:{hw:.3,h:1.7,hp:20,speed:2.3,hostile:!0,name:"Creeper",creeper:!0,build(n,t){t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,r])=>Ie(n,.26,.45,.26,4099646,l,.45,r*.5)),t.body=ot(n,.5,.85,.3,5154894,0,.88,0);const i=Ev(l=>{l.fillStyle="#4ea84e",l.fillRect(0,0,8,8),l.fillStyle="#0c1a0c",l.fillRect(1,2,2,2),l.fillRect(5,2,2,2),l.fillRect(3,4,2,2),l.fillRect(2,5,1,2),l.fillRect(5,5,1,2)}),s=ds(5154894),o=[s,s,s,s,ds(16777215,i),s],a=new At(new Jt(.5,.5,.5),o);a.position.set(0,1.55,0),n.add(a),t.head=a},drops:()=>[]}},Of=["zombie","zombie","zombie","creeper","creeper","skeleton","skeleton","skeleton","spider","spider","enderman"],zf=["zombie","zombie","creeper","skeleton","skeleton","spider"];class wv{constructor(t,e,i,s,o){this.type=t,this.def=io[t],this.pos=new P(e,i,s),this.vel=new P,this.hw=this.def.hw,this.h=this.def.h,this.hp=this.def.hp,this.yaw=Math.random()*Math.PI*2,this.group=new Se,this.parts={},this.def.build(this.group,this.parts),this.model=new Se,this.model.add(this.group),o.add(this.model),this.group.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.wanderT=0,this.wanderDir=0,this.moving=!1,this.cool=0,this.flash=0,this.fuse=0,this.walkT=0,this.age=0,this.onGround=!1,this.sound=3+Math.random()*10}materials(){const t=[];return this.group.traverse(e=>{e.material&&(Array.isArray(e.material)?t.push(...e.material):t.push(e.material))}),t}hit(t,e,i){this.def.shulker&&(this.lid||0)<.4&&(t*=.3),this.hp-=t,this.flash=.3,this.provoked=!0,this.aggro=!0;const s=this.pos.x-e,o=this.pos.z-i,a=Math.hypot(s,o)||1;this.vel.x=s/a*6,this.vel.z=o/a*6,this.vel.y=5}dispose(t){t.remove(this.model),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())})}}function qo(n,t,e,i){let s=0,o=1/0;for(const a of["x","y","z"]){if(Math.abs(t[a])<1e-9){if(n[a]<e[a]||n[a]>i[a])return-1;continue}let l=(e[a]-n[a])/t[a],r=(i[a]-n[a])/t[a];if(l>r&&([l,r]=[r,l]),s=Math.max(s,l),o=Math.min(o,r),s>o)return-1}return s}class Tv{constructor(t,e,i){this.scene=t,this.world=e,this.hooks=i,this.list=[],this.spawnT=0,this.arrows=[],this.dim="overworld"}add(t,e,i,s){const o=new wv(t,e,i,s,this.scene);return this.list.push(o),o}clear(){for(const t of this.list)t.dispose(this.scene);this.list=[];for(const t of this.arrows)this.scene.remove(t.mesh);this.arrows=[]}raycast(t,e,i){let s=null;for(const o of this.list){const a=qo(t,e,{x:o.pos.x-o.hw,y:o.pos.y,z:o.pos.z-o.hw},{x:o.pos.x+o.hw,y:o.pos.y+o.h,z:o.pos.z+o.hw});a>=0&&a<=i&&(!s||a<s.dist)&&(s={mob:o,dist:a})}return s}damage(t,e,i,s){t.hit(e,i,s),this.hooks.sound("hit"),t.hp<=0&&this.kill(t)}kill(t){for(const[e,i]of t.def.drops())this.hooks.drop(t.pos.x,t.pos.y+.5,t.pos.z,e,i);this.hooks.killed&&this.hooks.killed(t.type,t.def.xp||2),this.hooks.puff(t.pos.x,t.pos.y+t.h/2,t.pos.z),t.dispose(this.scene),this.list.splice(this.list.indexOf(t),1)}update(t,e,i,s,o){const a=this.world;for(let l=this.list.length-1;l>=0;l--){const r=this.list[l];r.age+=t,r.cool=Math.max(0,r.cool-t),r.flash=Math.max(0,r.flash-t);const h=e.pos.x-r.pos.x,f=e.pos.z-r.pos.z,c=Math.hypot(h,f),u=e.pos.y-r.pos.y;let d=r.def.hostile&&i==="survival"&&!e.dead;if(r.type==="spider"&&s>.5&&!r.provoked&&(d=!1),r.def.enderman&&i==="survival"&&!e.dead&&!r.aggro&&c<24){const w=e.lookDir(),R=r.pos.x-e.pos.x,M=r.pos.y+2.6-(e.pos.y+1.62),_=r.pos.z-e.pos.z,C=Math.hypot(R,M,_);(w.x*R+w.y*M+w.z*_)/C>.985&&(r.aggro=!0)}r.def.enderman&&r.aggro&&i==="survival"&&!e.dead&&(d=!0);let p=null,x=r.def.speed;r.type==="hoglin"&&d&&c<10&&(x*=1.9),r.def.static&&(d=d&&!0),d&&c<26&&Math.abs(u)<14?(p=Math.atan2(-h,-f),r.def.ranged&&c<6&&(p+=Math.PI)):(r.wanderT-=t,r.wanderT<=0&&(r.wanderT=2+Math.random()*4,r.wanderDir=Math.random()<.4?null:Math.random()*Math.PI*2),r.wanderDir!==null&&r.wanderDir!==void 0&&(p=r.wanderDir),x*=.6);let g=!1;const m=r.def.ranged&&d&&c>=6&&c<12;if(p!==null){let w=p-r.yaw;if(w=Math.atan2(Math.sin(w),Math.cos(w)),r.yaw+=Math.max(-8*t,Math.min(8*t,w)),g=!m,m){const R=Math.atan2(-h,-f)-r.yaw;r.yaw+=Math.atan2(Math.sin(R),Math.cos(R))*Math.min(1,t*10)}}if(r.def.creeper){d&&c<3&&Math.abs(u)<2?(r.fuse+=t,r.fuse-t<=0&&this.hooks.sound("hiss"),g=!1):r.fuse=Math.max(0,r.fuse-t*2);const w=1+(r.fuse>0?Math.sin(r.fuse*30)*.04+r.fuse*.15:0);if(r.group.scale.set(w,w,w),r.fuse>=1.5){this.hooks.explode(r.pos.x,r.pos.y+.8,r.pos.z,3.2),r.dispose(this.scene),this.list.splice(l,1);continue}}const y=a.isLiquid(Math.floor(r.pos.x),Math.floor(r.pos.y+.2),Math.floor(r.pos.z)),S=-Math.sin(r.yaw),v=-Math.cos(r.yaw);if(g&&r.knock===void 0?(r.vel.x+=(S*x-r.vel.x)*Math.min(1,t*8),r.vel.z+=(v*x-r.vel.z)*Math.min(1,t*8)):(!r.def.hopper||r.onGround)&&(r.vel.x*=Math.max(0,1-t*6),r.vel.z*=Math.max(0,1-t*6)),r.def.hopper&&(g=!1,r.hopT=(r.hopT===void 0?.5:r.hopT)-t,r.onGround&&r.hopT<=0&&d&&(r.hopT=1+Math.random()*.8,r.vel.y=7.5,r.vel.x=h/(c||1)*3.4,r.vel.z=f/(c||1)*3.4,r.yaw=Math.atan2(-h,-f))),r.moving=g,y&&(r.vel.y=Math.max(r.vel.y,0)+14*t,r.vel.y=Math.min(r.vel.y,2.5)),r.def.fly)this.flyMob(r,t,e,d,h,f,u,c),r.onGround=!1;else{const w=_s(a,r,t);r.onGround=w.onGround,(w.hitX||w.hitZ)&&w.onGround&&g&&(r.vel.y=7.4)}if((r.type==="zombie"||r.type==="piglin"||r.type==="witherskeleton"||r.type==="hoglin"||r.type==="endermite")&&d&&c<(r.def.reach||1.2)&&Math.abs(u)<1.8&&r.cool<=0&&(r.cool=r.type==="endermite"?.8:1,this.hooks.hurtPlayer(r.def.damage,h/(c||1)*(r.type==="hoglin"?9:5),f/(c||1)*(r.type==="hoglin"?9:5)),r.def.effect&&this.hooks.effect(r.def.effect[0],r.def.effect[1])),(r.type==="spider"||r.def.hopper||r.def.enderman)&&d&&c<(r.type==="spider"?1.7:r.def.hopper?1.3:1.5)&&Math.abs(u)<1.8&&r.cool<=0&&(r.cool=r.type==="spider"?.9:1,this.hooks.hurtPlayer(r.type==="spider"||r.type==="slime"?2:r.type==="magmacube"?3:6,h/(c||1)*4,f/(c||1)*4),r.type==="magmacube"&&this.hooks.effect("burn",3)),r.def.shulker){r.lid=r.lid===void 0?0:r.lid;const w=d&&c<18?1:0;r.lid+=(w-r.lid)*Math.min(1,t*4),r.parts.lid.rotation.x=-r.lid*1.1,w&&r.lid>.8&&r.cool<=0&&!e.dead&&(r.cool=3.2,this.shootArrow(new P(r.pos.x,r.pos.y+.7,r.pos.z),new P(h,u+.9,f).normalize(),!1,"bullet")),r.vel.x=r.vel.z=0}if(r.def.ranged&&d&&c<22&&r.cool<=0){const w=new P(r.pos.x,r.pos.y+1.6,r.pos.z),R=new P(e.pos.x,e.pos.y+1.2,e.pos.z),M=R.clone().sub(w),_=M.length();M.normalize(),a.raycast(w,M,_)||(r.cool=2.2,this.shootArrow(w,M.multiplyScalar(1).setY(M.y+.04*_/10)))}if(r.def.enderman&&r.aggro&&(r.tpT=(r.tpT===void 0?4:r.tpT)-t,r.tpT<=0&&c>3)){r.tpT=5+Math.random()*3;const w=Math.random()*Math.PI*2,R=4+Math.random()*5,M=Math.floor(e.pos.x+Math.cos(w)*R),_=Math.floor(e.pos.z+Math.sin(w)*R),C=a.topY(M,_);C>0&&!a.isSolid(M,C+1,_)&&(this.hooks.tp(r.pos.x,r.pos.y+1,r.pos.z),r.pos.set(M+.5,C+1,_+.5),r.vel.set(0,0,0),this.hooks.tp(r.pos.x,r.pos.y+1,r.pos.z))}if(r.type==="chicken"&&r.vel.y<-2&&(r.vel.y=-2),(r.type==="zombie"||r.type==="skeleton")&&s>.75&&a.skyLit(Math.floor(r.pos.x),Math.floor(r.pos.y+1),Math.floor(r.pos.z))&&!y&&(r.burn=(r.burn||0)+t,r.burn>1&&(r.burn=0,r.hit(2,r.pos.x,r.pos.z),r.vel.set(0,0,0),r.hp<=0))){this.kill(r);continue}r.sound-=t,r.sound<=0&&(r.sound=6+Math.random()*12,c<16&&this.hooks.sound(r.type==="pig"?"oink":r.type==="cow"||r.type==="sheep"?"moo":r.type==="chicken"?"pop":r.type==="zombie"||r.type==="skeleton"||r.type==="spider"?"groan":"")),r.parts.rods&&r.parts.rods.forEach((w,R)=>w.rotation.y+=t*(2+R)),r.walkT+=t*(g?9:0);const D=g?Math.sin(r.walkT)*.7:0;r.parts.legs&&r.parts.legs.forEach((w,R)=>w.rotation.x=R%2?-D:D),r.model.position.copy(r.pos),r.model.rotation.y=r.yaw+Math.PI;const T=r.flash>0||r.fuse>0&&Math.floor(r.fuse*8)%2===0;for(const w of r.materials())w.emissive&&w.emissive.setRGB(T?r.fuse>0?.8:.5:0,T&&r.fuse>0?.8:0,T&&r.fuse>0?.8:0);(c>o*16+24||r.pos.y<-20)&&(r.dispose(this.scene),this.list.splice(l,1))}for(let l=this.arrows.length-1;l>=0;l--){const r=this.arrows[l];if(r.life-=t,r.vel.y-=(r.fire||r.bullet?0:7)*t,r.bullet){const u=new P(e.pos.x,e.pos.y+1,e.pos.z).sub(r.mesh.position).normalize().multiplyScalar(5);r.vel.lerp(u,Math.min(1,t*2.2))}r.mesh.position.addScaledVector(r.vel,t),r.mesh.lookAt(r.mesh.position.clone().add(r.vel));const h=r.mesh.position,f=Math.hypot(h.x-e.pos.x,h.y-(e.pos.y+.9),h.z-e.pos.z)<.75,c=f||r.life<=0||a.isSolid(Math.floor(h.x),Math.floor(h.y),Math.floor(h.z));r.big&&c?(this.hooks.explode(h.x,h.y,h.z,2.6,.4),Math.hypot(h.x-e.pos.x,h.y-e.pos.y,h.z-e.pos.z)<4.5&&this.hooks.effect("burn",4)):f&&!e.dead&&(this.hooks.hurtPlayer(r.bullet||r.fire?3:4,r.vel.x*.25,r.vel.z*.25),r.fire&&this.hooks.effect("burn",4),r.bullet&&this.hooks.effect("levitate",5)),c&&(this.scene.remove(r.mesh),this.arrows.splice(l,1))}this.spawnT-=t,this.spawnT<=0&&(this.spawnT=1.5,this.trySpawn(e,i,s))}flyMob(t,e,i,s,o,a,l,r){const h=t.def.flyKind;if(h==="ghast"||h==="phantom")return this.flyMob2(t,e,i,s,o,a,l,r,h);const f=this.world;let c=0,u=0;s&&r>12?(c=o/(r||1),u=a/(r||1)):s&&r<6&&(c=-o/(r||1),u=-a/(r||1));const d=s?i.pos.y+3+Math.sin(t.age*1.4)*.8:t.pos.y+Math.sin(t.age)*.4;t.vel.x+=(c*t.def.speed-t.vel.x)*Math.min(1,e*3),t.vel.z+=(u*t.def.speed-t.vel.z)*Math.min(1,e*3),t.vel.y+=((d-t.pos.y)*1.2-t.vel.y)*Math.min(1,e*3);const p=t.pos.x+t.vel.x*e,x=t.pos.y+t.vel.y*e,g=t.pos.z+t.vel.z*e;if(f.isSolid(Math.floor(p),Math.floor(x+1),Math.floor(g))||t.pos.set(p,x,g),s)if(t.yaw=Math.atan2(-o,-a),t.burst=t.burst||0,t.burst>0){if(t.burstT-=e,t.burstT<=0){t.burst--,t.burstT=.28;const m=new P(t.pos.x,t.pos.y+1.4,t.pos.z),y=new P(i.pos.x,i.pos.y+1,i.pos.z),S=y.sub(m).normalize();this.shootArrow(m,S,!0)}}else t.cool<=0&&r<26&&!f.raycast(new P(t.pos.x,t.pos.y+1.4,t.pos.z),new P(o,l,a).normalize(),r)&&(t.cool=4,t.burst=3,t.burstT=0,this.hooks.sound("hiss"))}flyMob2(t,e,i,s,o,a,l,r,h){const f=this.world;let c,u,d;const p=(y,S,v,D)=>{t.vel.x+=(y-t.vel.x)*Math.min(1,e*D),t.vel.y+=(S-t.vel.y)*Math.min(1,e*D),t.vel.z+=(v-t.vel.z)*Math.min(1,e*D)};if(h==="ghast"){if(c=d=0,s&&r>21?(c=o/r,d=a/r):s&&r<12&&(c=-o/r,d=-a/r),u=s?i.pos.y+7+Math.sin(t.age)*1.2:t.pos.y,p(c*t.def.speed,(u-t.pos.y)*.8,d*t.def.speed,2),s)if(t.yaw=Math.atan2(-o,-a),t.tele>0){if(t.tele-=e,t.flash=.12,t.tele<=0){const S=new P(t.pos.x,t.pos.y+1.4,t.pos.z),v=new P(i.pos.x+i.vel.x*.4,i.pos.y+1,i.pos.z+i.vel.z*.4).sub(S).normalize();this.shootArrow(S,v,!0,"big")}}else t.cool<=0&&r<42&&!f.raycast(new P(t.pos.x,t.pos.y+1.4,t.pos.z),new P(o,l,a).normalize(),r)&&(t.cool=4.8,t.tele=.9,this.hooks.sound("hiss"))}else{if(!s)p(Math.cos(t.age)*1.5,Math.sin(t.age*.7)*.5,Math.sin(t.age)*1.5,2);else{if(t.swoop=t.swoop===void 0?3:t.swoop-e,!t.diving&&t.swoop<=0&&(t.diving=!0,t.diveT=1.9,t.swoop=4+Math.random()*3),t.diving){const y=new P(i.pos.x-t.pos.x,i.pos.y+1-t.pos.y,i.pos.z-t.pos.z),S=y.length()||1;p(y.x/S*11,y.y/S*11,y.z/S*11,6),t.diveT-=e,S<1.7&&t.cool<=0&&!i.dead&&(t.cool=1.2,this.hooks.hurtPlayer(4,y.x*1.5,y.z*1.5),t.diving=!1),t.diveT<=0&&(t.diving=!1)}else{const y=t.age*.9;c=i.pos.x+Math.cos(y)*9,d=i.pos.z+Math.sin(y)*9,u=i.pos.y+8,p((c-t.pos.x)*.7,(u-t.pos.y)*.9,(d-t.pos.z)*.7,2)}t.yaw=Math.atan2(-t.vel.x,-t.vel.z)}t.parts.wings&&t.parts.wings.forEach(y=>y.g.rotation.z=y.s*Math.sin(t.age*9)*.5)}const x=t.pos.x+t.vel.x*e,g=t.pos.y+t.vel.y*e,m=t.pos.z+t.vel.z*e;f.isSolid(Math.floor(x),Math.floor(g+.5),Math.floor(m))?(t.vel.x*=-.3,t.vel.z*=-.3,t.diving=!1):t.pos.set(x,g,m)}shootArrow(t,e,i=!1,s=null){const o=s==="big",a=s==="bullet",l=a?new At(new Jt(.34,.34,.34),new be({color:16052384})):i?new At(new Jt(o?1.1:.4,o?1.1:.4,o?1.1:.4),new be({color:o?16765040:16747040})):new At(new Jt(.07,.07,.8),new gi({color:9071162,emissive:2102280}));l.position.copy(t),this.scene.add(l),this.arrows.push({mesh:l,vel:e.normalize().multiplyScalar(a?5:o?12:i?15:22),life:a?8:i?7:4,fire:i,big:o,bullet:a}),this.hooks.sound("shoot",.5)}trySpawnDim(t,e){if(e!=="survival")return;const i=this.world;if(this.list.length>=(this.dim==="nether"?14:10))return;if(Math.random()<.55)for(let h=0;h<8;h++){const f=Math.floor(t.pos.x+(Math.random()-.5)*44),c=Math.floor(t.pos.z+(Math.random()-.5)*44);for(let u=Math.min(fe-6,Math.floor(t.pos.y)+12);u>Math.max(3,Math.floor(t.pos.y)-16);u--){const d=i.getBlock(f,u-1,c),p=this.dim==="nether"&&d===L.NETHER_BRICKS,x=this.dim==="end"&&(d===L.PURPUR||d===L.END_BRICKS);if((p||x)&&!i.isSolid(f,u,c)&&!i.isSolid(f,u+1,c)&&!i.isSolid(f,u+2,c)){if(Math.hypot(f-t.pos.x,c-t.pos.z)<9)break;this.add(p?Math.random()<.65?"witherskeleton":"blaze":Math.random()<.75?"shulker":"endermite",f+.5,u,c+.5);return}}}const o=Math.random()*Math.PI*2,a=14+Math.random()*18,l=Math.floor(t.pos.x+Math.cos(o)*a),r=Math.floor(t.pos.z+Math.sin(o)*a);for(let h=Math.min(fe-6,Math.floor(t.pos.y)+22);h>4;h--)if(i.isSolid(l,h-1,r)&&!i.isLiquid(l,h-1,r)&&!i.isSolid(l,h,r)&&!i.isSolid(l,h+1,r)&&!i.isLiquid(l,h,r)){const f=Math.random();if(this.dim==="nether"){const c=f<.26?"piglin":f<.4?"blaze":f<.58?"magmacube":f<.72?"witherskeleton":f<.86?"hoglin":"ghast";this.add(c,l+.5,c==="blaze"?h+2:c==="ghast"?h+8:h,r+.5)}else{const c=f<.34?"enderman":f<.58?"shulker":f<.78?"endermite":"phantom";this.add(c,l+.5,c==="phantom"?h+8:h,r+.5)}return}}trySpawn(t,e,i){if(this.dim!=="overworld")return this.trySpawnDim(t,e);const s=this.world,o=this.list.filter(r=>!r.def.hostile).length,a=this.list.length-o,l=(r,h)=>{const f=Math.random()*Math.PI*2,c=r+Math.random()*(h-r),u=Math.floor(t.pos.x+Math.cos(f)*c),d=Math.floor(t.pos.z+Math.sin(f)*c);return[u,d]};if(o<10&&i>.45){const[r,h]=l(16,40),f=s.topY(r,h);if(f>0){const c=s.getBlock(r,f,h);(c===L.GRASS||c===L.SNOW)&&!s.isSolid(r,f+1,h)&&!s.isLiquid(r,f+1,h)&&this.add(["pig","cow","sheep","chicken"][Math.floor(Math.random()*4)],r+.5,f+1,h+.5)}}if(!(e!=="survival"||a>=8)){if(i<.3){const[r,h]=l(20,36),f=s.topY(r,h);f>0&&!s.isSolid(r,f+1,h)&&!s.isLiquid(r,f+1,h)&&an[s.getBlock(r,f,h)]&&this.add(Of[Math.floor(Math.random()*Of.length)],r+.5,f+1,h+.5)}else if(a<4){const r=Math.random()*Math.PI*2,h=14+Math.random()*14,f=Math.floor(t.pos.x+Math.cos(r)*h),c=Math.floor(t.pos.z+Math.sin(r)*h),u=s.topY(f,c);if(u<8)return;const d=3+Math.floor(Math.random()*Math.max(1,u-8));s.getBlock(f,d,c)===0&&s.getBlock(f,d+1,c)===0&&s.isSolid(f,d-1,c)&&!s.skyLit(f,d,c)&&this.add(zf[Math.floor(Math.random()*zf.length)],f+.5,d,c+.5)}}}}const He=(n,t)=>n+Math.random()*(t-n),Av=[1,1.3,1.75],Rv=[18,20,15],Cv=[4.2,3.2,2.4],Lv=[1,2,3],Pv=[5,6,8],Dv=[5,4,3],Ff=[3.2,4.6,6.2];function Iv(){const n=document.createElement("canvas");n.width=n.height=16;const t=n.getContext("2d");for(let i=0;i<16;i++)for(let s=0;s<16;s++){const o=Math.sin(s*12.9+i*78.2)*43758.5%1,a=190+Math.abs(o)*30;t.fillStyle=`rgb(${a|0},${a*.58|0},${a*.28|0})`,t.fillRect(s,i,1,1)}t.fillStyle="#4a2208",t.fillRect(0,0,16,1),t.fillRect(0,15,16,1),t.fillRect(0,0,1,16),t.fillRect(15,0,1,16),t.fillStyle="#2a1204";for(let i=0;i<4;i++)t.fillRect(4+i,4+i,2,1),t.fillRect(4+i,11-i,2,1);t.fillRect(9,10,4,1);const e=new Bi(n);return e.magFilter=de,e.minFilter=de,e.generateMipmaps=!1,e.colorSpace=si,e}class Nv{constructor(t,e,i){this.scene=t,this.h=e,this.pos=i.clone(),this.name="TORMENTA WITHER",this.type="storm",this.maxHp=360,this.hp=360,this.phase=1,this.scale=1,this.scaleT=1,this.t=0,this.yaw=0,this.flash=0,this.devourT=1,this.atkT=3,this.beamT=3,this.beamOn=!1,this.minionT=10,this.meleeT=0,this.beamHurtT=0,this.shell=1,this.dead=!1,this.skulls=[],this.root=new Se,this.body=new Se,this.root.add(this.body),this.dark=new gi({color:1511967}),this.dark2=new gi({color:2760758}),this.glow=new be({color:12611839}),this.build(),this.beam=new At(new Dn(.14,.14,1,6),new be({color:11559167,transparent:!0,opacity:.6,fog:!1,depthWrite:!1})),this.beam.visible=!1,t.add(this.beam),this.skullGeo=new Jt(.9,.9,.9),this.skullMat=new gi({color:2102576,emissive:5906576}),t.add(this.root),this.root.position.copy(i)}build(){const{dark:t,dark2:e,glow:i,body:s}=this,o=(r,h,f,c,u,d,p,x=s)=>{const g=new At(new Jt(r,h,f),c);return g.position.set(u,d,p),x.add(g),g};o(5,5,5,t,0,0,0);for(let r=0;r<28;r++){const h=He(1,2.6),f=Math.floor(Math.random()*3),c=Math.random()<.5?-1:1,u=[He(-2.5,2.5),He(-2.5,2.5),He(-2.5,2.5)];u[f]=c*(2.5+h*.2),o(h,h*He(.7,1.3),h,Math.random()<.5?t:e,u[0],u[1],u[2]).rotation.set(He(-.3,.3),He(-.3,.3),He(-.3,.3))}for(let r=0;r<6;r++)o(.9,He(2,3.6),.9,e,He(-2,2),3.2,He(-3,0)).rotation.z=He(-.4,.4);this.heads=[];const a=(r,h,f,c,u)=>{const d=new Se;d.position.set(h,f,c),d.rotation.y=u,s.add(d),o(r,r,r,e,0,0,0,d);for(const x of[-1,1])o(r*.24,r*.12,.12,i,x*r*.24,r*.12,r/2+.03,d);const p=new Se;p.position.set(0,-r*.42,r*.05),d.add(p),o(r*.92,r*.3,r*.86,t,0,-r*.1,0,p);for(let x=-2;x<=2;x++)o(r*.08,r*.14,r*.08,i,x*r*.18,r*.05,r*.42,p);this.heads.push({g:d,jaw:p,size:r})};a(3.6,0,4,2.2,0),a(2.6,-3.9,3,1.3,-.35),a(2.6,3.9,3,1.3,.35),this.tents=[];const l=(r,h,f,c,u,d,p,x,g)=>{const m=[];for(let y=0;y<p;y++){const S=x*(1-y/p*.72),v=new At(new Jt(S,S,S),y===p-1&&g?i:y%2?t:e);s.add(v),m.push({m:v,s:S})}this.tents.push({b:new P(r,h,f),d:new P(c,u,d).normalize(),segs:m,ph:Math.random()*6})};for(let r=0;r<6;r++)l(He(-2,2),-2.4,He(-2,1.5),He(-.2,.2),-1,He(-.3,.1),9,1.5,!1);l(-2.4,-.4,2.2,-.4,-.1,1,8,1.2,!0),l(2.4,-.4,2.2,.4,-.1,1,8,1.2,!0),l(0,-1.8,2.5,0,-.5,1,8,1.2,!0),this.cmd=new At(new Jt(1.7,1.7,1.7),new be({map:Iv()})),this.cmd.position.set(0,.2,2.55),s.add(this.cmd),this.shellG=new Se,this.shellG.position.set(0,.2,2.8),s.add(this.shellG),o(3.1,3.1,.8,e,0,0,0,this.shellG);for(const[r,h]of[[-1.4,0],[1.4,0],[0,1.4],[0,-1.4]])o(r?.3:2.8,h?.3:2.8,.2,i,r,h,.45,this.shellG)}headWorld(t){const e=new P;return this.heads[t%3].g.getWorldPosition(e),e}corePos(){return this.pos.clone()}raycast(t,e,i){const s=this.scale,o=this.pos,a=qo(t,e,{x:o.x-3.1*s,y:o.y-2.8*s,z:o.z-3.1*s},{x:o.x+3.1*s,y:o.y+5.4*s,z:o.z+3.1*s});if(a<0||a>i)return null;const l=new P(o.x,o.y+.2*s,o.z),r=new P(t.x,t.y,t.z),h=Math.max(0,l.clone().sub(r).dot(e)),f=r.addScaledVector(e,h);return{dist:a,crit:this.phase===3&&f.distanceTo(l)<2.1*s}}hit(t,e){if(this.dead)return;if(this.hp-=t*(e?3:1),this.flash=.15,this.h.burst(this.pos.x+He(-2,2),this.pos.y+He(-1,3),this.pos.z+He(-2,2),e?[1,.7,.2]:[.5,.2,.8],e?16:8,4),this.hp<=0)return this.die();const i=this.hp/this.maxHp,s=i>.66?1:i>.33?2:3;s>this.phase&&(this.phase=s,this.scaleT=Av[s-1],this.h.sound("roar",1),this.h.strikeNear(this.pos.x,this.pos.z),this.h.toast(s===2?"¡La tormenta crece y devora todo!":"¡FASE FINAL! El bloque de comandos está expuesto: ¡golpéalo!"),this.atkT=1.5)}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y,this.pos.z,7,.25),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y,this.pos.z,"storm"),this.h.toast("¡Has derrotado a la Tormenta Wither!"),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.scene.remove(this.beam),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.skulls)this.scene.remove(t.mesh);this.skulls=[]}update(t,e,i){if(this.dead)return;this.t+=t,this.flash=Math.max(0,this.flash-t);const s=this.phase-1;this.scale+=(this.scaleT-this.scale)*Math.min(1,t*1.2);const o=this.scale;this.root.scale.setScalar(o);const a=e.pos.x,l=e.pos.z;let r=a-this.pos.x,h=l-this.pos.z;const f=Math.hypot(r,h)||1;r/=f,h/=f;const c=3.5+1.2*this.phase,u=Rv[s];f>u+1?(this.pos.x+=r*c*t,this.pos.z+=h*c*t):f<u-3&&(this.pos.x-=r*c*.6*t,this.pos.z-=h*c*.6*t),this.pos.x+=-h*1.6*t*Math.sin(this.t*.3),this.pos.z+=r*1.6*t*Math.sin(this.t*.3);const d=e.pos.y+8+2*o;this.pos.y+=(d-this.pos.y)*Math.min(1,t*.8);const p=Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw;this.yaw+=Math.atan2(Math.sin(p),Math.cos(p))*Math.min(1,t*2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*.8)*.4,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((v,D)=>{v.jaw.rotation.x=.15+Math.sin(this.t*2.6+D*1.7)*.22+(this.beamOn?.35:0)});for(const v of this.tents)v.segs.forEach((D,T)=>{const w=T*.32;D.m.position.set(v.b.x+v.d.x*T*1.45+Math.sin(this.t*1.4+v.ph+T*.6)*w,v.b.y+v.d.y*T*1.45-T*.05,v.b.z+v.d.z*T*1.45+Math.cos(this.t*1.1+v.ph*1.3+T*.5)*w)});this.shell+=((this.phase>=3?0:1)-this.shell)*Math.min(1,t*2.5),this.shellG.scale.setScalar(Math.max(.001,this.shell));const x=this.flash>0?.5:0;this.dark.emissive.setRGB(x,x*.4,x),this.dark2.emissive.setRGB(x,x*.4,x);const g=.8+Math.sin(this.t*4)*.2;if(this.cmd.material.color.setScalar(this.phase>=3?1.2*g+.2:.55),this.devourT-=t,this.devourT<=0){this.devourT=.35;const v=3.4*o,D=Math.floor(this.pos.x),T=Math.floor(this.pos.y+.8*o),w=Math.floor(this.pos.z),R=Math.ceil(v);let M=0;for(let _=-R;_<=R&&M<150;_++)for(let C=-R;C<=R;C++)for(let N=-R;N<=R;N++){if(_*_+C*C+N*N>v*v)continue;const O=i.getBlock(D+_,T+C,w+N);O&&O!==L.BEDROCK&&Math.random()<.7&&(i.setBlock(D+_,T+C,w+N,0),M++)}M>6&&this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.25,.1,.35],6,4)}this.beamT-=t,this.beamT<=0&&(this.beamOn=!this.beamOn,this.beamT=this.beamOn?Pv[s]:Dv[s],this.beamOn&&this.h.sound("roar",.6));const m=new P(this.pos.x-e.pos.x,this.pos.y+1-(e.pos.y+1),this.pos.z-e.pos.z),y=m.length(),S=this.beamOn&&y<48&&!e.dead;if(this.beam.visible=S,S){const v=m.clone().normalize();e.push.x=v.x*Ff[s],e.push.z=v.z*Ff[s],e.push.y=v.y*11;const D=this.headWorld(0),T=new P(e.pos.x,e.pos.y+1,e.pos.z),w=D.distanceTo(T);this.beam.scale.set(1+Math.sin(this.t*30)*.3,w,1+Math.sin(this.t*30)*.3),this.beam.position.copy(D).add(T).multiplyScalar(.5),this.beam.quaternion.setFromUnitVectors(new P(0,1,0),T.clone().sub(D).normalize()),this.beamHurtT-=t,y<5.5*o&&this.beamHurtT<=0&&(this.beamHurtT=.5,this.h.hurtPlayer(2,0,0))}if(this.meleeT-=t,y<6.5*o&&this.meleeT<=0&&!e.dead&&(this.meleeT=1.3,this.h.hurtPlayer(5,-m.x/y*6,-m.z/y*6)),this.atkT-=t,this.atkT<=0&&!e.dead){this.atkT=Cv[s];for(let v=0;v<Lv[s];v++)this.shoot(e,v)}for(let v=this.skulls.length-1;v>=0;v--){const D=this.skulls[v];D.life-=t,D.mesh.position.addScaledVector(D.vel,t),D.mesh.rotation.x+=t*4,D.mesh.rotation.y+=t*3;const T=D.mesh.position;(Math.hypot(T.x-e.pos.x,T.y-(e.pos.y+.9),T.z-e.pos.z)<1.4||D.life<=0||i.isSolid(Math.floor(T.x),Math.floor(T.y),Math.floor(T.z)))&&(this.h.explode(T.x,T.y,T.z,2.2+.4*this.phase,.5),this.scene.remove(D.mesh),this.skulls.splice(v,1))}this.phase>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=this.phase===2?14:10,this.h.minions()<5&&this.h.spawnMinion()))}shoot(t,e){const i=this.headWorld(e),o=new P(t.pos.x+t.vel.x*.5,t.pos.y+1,t.pos.z+t.vel.z*.5).sub(i).normalize();o.x+=He(-.06,.06)*(e+1),o.y+=He(-.04,.04),o.z+=He(-.06,.06)*(e+1),o.normalize();const a=new At(this.skullGeo,this.skullMat);a.position.copy(i),this.scene.add(a),this.skulls.push({mesh:a,vel:o.multiplyScalar(16),life:7}),this.h.sound("shoot",1)}}const Ve=(n,t)=>n+Math.random()*(t-n),he=(n=0,t=0,e=0)=>new P(n,t,e),hi=n=>Math.atan2(Math.sin(n),Math.cos(n));class bi{constructor(t,e,i,s){this.scene=t,this.h=e,this.pos=i.clone(),Object.assign(this,s),this.hp=this.maxHp,this.phase=1,this.t=0,this.yaw=0,this.flash=0,this.dead=!1,this.scale=s.scale||1,this.root=new Se,this.body=new Se,this.root.add(this.body),this.flashMats=[],this.proj=[],this.clouds=[],this.extra=[],this.waves=[],this.vel=new P,t.add(this.root),this.root.position.copy(i),this.root.scale.setScalar(this.scale)}mat(t,e=0,i=!1){if(i)return new be({color:t});const s=new gi({color:t,emissive:e});return this.flashMats.push(s),s}box(t,e,i,s,o,a,l,r=this.body){const h=new At(new Jt(t,e,i),s);return h.position.set(o,a,l),r.add(h),h}group(t,e,i,s=this.body){const o=new Se;return o.position.set(t,e,i),s.add(o),o}world(t){const e=he();return t.getWorldPosition(e),e}raycast(t,e,i){const s=this.hitbox,o=this.scale,a=this.pos,l=qo(t,e,{x:a.x-s.hx*o,y:a.y+(s.oy-s.hy)*o,z:a.z-s.hz*o},{x:a.x+s.hx*o,y:a.y+(s.oy+s.hy)*o,z:a.z+s.hz*o});let r=l>=0&&l<=i?{dist:l,crit:!1}:null;for(const h of this.targets||[]){const f=h.pos,c=h.half,u=qo(t,e,{x:f.x-c,y:f.y-c,z:f.z-c},{x:f.x+c,y:f.y+c,z:f.z+c});u>=0&&u<=i&&(!r||u<r.dist)&&(r={dist:u,crit:!1,target:h})}return r}damageMul(){return 1}hit(t,e,i){if(this.dead)return;if(i&&i.target&&i.target.onHit){i.target.onHit();return}if(this.hp-=t*this.damageMul(),this.flash=.15,this.h.burst(this.pos.x+Ve(-1,1),this.pos.y+this.hitbox.oy*this.scale+Ve(-1,1),this.pos.z+Ve(-1,1),this.burstColor||[.6,.2,.8],8,4),this.hp<=0)return this.die();const s=this.phaseFor(this.hp/this.maxHp);s>this.phase&&(this.phase=s,this.onPhase(s)),this.onHit&&this.onHit()}phaseFor(){return 1}onPhase(){}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z,5,.2),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y+1,this.pos.z,this.type),this.h.toast(`¡Has derrotado a ${this.name}!`),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.proj)this.scene.remove(t.mesh);for(const t of this.extra)this.scene.remove(t);for(const t of this.waves)this.scene.remove(t.mesh);this.proj=[],this.waves=[]}shootProj(t,e,i={}){const s=i.size||.9,o=new At(new Jt(s,s,s),new gi({color:i.color||2102576,emissive:i.emissive||5906576}));o.position.copy(t),this.scene.add(o),this.proj.push({mesh:o,vel:e.clone().normalize().multiplyScalar(i.speed||16),life:i.life||7,o:i}),this.h.sound("shoot",1)}updateProj(t,e,i){for(let s=this.proj.length-1;s>=0;s--){const o=this.proj[s],a=o.o;o.life-=t,o.mesh.position.addScaledVector(o.vel,t),o.mesh.rotation.x+=t*4,o.mesh.rotation.y+=t*3;const l=o.mesh.position;if(o.reflected){const h=he(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z);if(l.distanceTo(h)<(this.hitbox.hx+.8)*this.scale||o.life<=0){if(this.h.explode(l.x,l.y,l.z,2,0),this.h.burst(l.x,l.y,l.z,[1,.6,.2],24,6),this.scene.remove(o.mesh),this.proj.splice(s,1),l.distanceTo(h)<(this.hitbox.hx+.8)*this.scale&&(this.h.toast("¡Rebotada! Gran golpe"),this.hit(o.o.reflectDmg||70,!0),this.dead))return;continue}continue}(Math.hypot(l.x-e.pos.x,l.y-(e.pos.y+.9),l.z-e.pos.z)<1.4||o.life<=0||i.isSolid(Math.floor(l.x),Math.floor(l.y),Math.floor(l.z)))&&(this.h.explode(l.x,l.y,l.z,a.radius||2.2,a.ds||.5),a.effect&&Math.hypot(l.x-e.pos.x,l.y-e.pos.y,l.z-e.pos.z)<(a.radius||2.2)*1.8&&this.h.effect(a.effect[0],a.effect[1]),a.cloud&&this.clouds.push({x:l.x,y:l.y,z:l.z,t:4,tick:0}),this.scene.remove(o.mesh),this.proj.splice(s,1))}for(let s=this.clouds.length-1;s>=0;s--){const o=this.clouds[s];o.t-=t,o.tick-=t,o.tick<=0&&(o.tick=.45,this.h.burst(o.x+Ve(-2,2),o.y+Ve(0,1.5),o.z+Ve(-2,2),[.8,.3,.9],5,1.2),Math.hypot(o.x-e.pos.x,o.z-e.pos.z)<3.3&&Math.abs(o.y-e.pos.y)<3&&!e.dead&&this.h.hurtPlayer(2,0,0)),o.t<=0&&this.clouds.splice(s,1)}}applyFlash(){const t=this.flash>0?.5:0;for(const e of this.flashMats)e.userData.baseE===void 0&&(e.userData.baseE=e.emissive.clone());for(const e of this.flashMats)e.emissive.copy(e.userData.baseE).addScalar(t)}addWave(t,e,i,s){const o=new At(new $h(1,.16,6,44),new be({color:s.color||16744496,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}));o.rotation.x=Math.PI/2,o.position.set(t,e+.35,i),this.scene.add(o),this.waves.push({x:t,y:e,z:i,r:1,max:s.max||16,speed:s.speed||11,dmg:s.dmg||8,effect:s.effect,mesh:o,hit:!1})}updateWaves(t,e){for(let i=this.waves.length-1;i>=0;i--){const s=this.waves[i];s.r+=s.speed*t,s.mesh.scale.set(s.r,s.r,1),s.mesh.material.opacity=.85*Math.max(0,1-s.r/s.max);const o=Math.hypot(e.pos.x-s.x,e.pos.z-s.z);!s.hit&&!e.dead&&Math.abs(o-s.r)<1.5&&e.pos.y<s.y+1.15&&(s.hit=!0,this.h.hurtPlayer(s.dmg,(e.pos.x-s.x)/(o||1)*8,(e.pos.z-s.z)/(o||1)*8),s.effect&&this.h.effect(s.effect[0],s.effect[1])),s.r>=s.max&&(this.scene.remove(s.mesh),this.waves.splice(i,1))}}walk(t,e,i,s,o,a){this.vel.x+=(i/o*a-this.vel.x)*Math.min(1,t*5),this.vel.z+=(s/o*a-this.vel.z)*Math.min(1,t*5);const l=_s(e,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t,30);return(l.hitX||l.hitZ)&&l.onGround&&(this.vel.y=11),this.onGround=l.onGround,l}update(t,e,i){this.dead||(this.t+=t,this.flash=Math.max(0,this.flash-t),this.tick(t,e,i),this.updateProj(t,e,i),this.updateWaves(t,e),this.applyFlash())}}class Uv extends bi{constructor(t,e,i,s){super(t,e,i,{name:"ENDER DRAGON",type:"dragon",maxHp:300,hitbox:{hx:4.5,hy:2.4,hz:5,oy:.5},scale:1.4,burstColor:[.7,.2,.9]}),this.arena=s||null,this.center=s?he(s.cx,s.cy,s.cz):i.clone(),this.theta=Math.random()*6,this.state="circle",this.diveT=12,this.fireT=4,this.breath=0,this.diveTime=0,this.diveTarget=he();const o=this.mat(1380378),a=this.mat(2365998),l=this.mat(14696703,14696703,!0);this.box(2.4,2,6,o,0,0,0);for(let r=0;r<6;r++)this.box(.4,.8,.5,a,0,1.3,-2.4+r*.95);this.neck=[];for(let r=0;r<3;r++)this.neck.push(this.box(1.3-r*.1,1.3-r*.1,1.5,a,0,.3+r*.35,3.3+r*1.3));this.head=this.group(0,1.6,7.3),this.box(2,1.3,2.2,o,0,0,0,this.head),this.box(1.2,.7,1.6,a,0,-.15,1.6,this.head),this.jaw=this.group(0,-.6,.4,this.head),this.box(1.5,.35,2.2,o,0,0,.9,this.jaw);for(const r of[-.7,.7])this.box(.5,.25,.1,l,r,.2,1.1,this.head),this.box(.25,.8,.3,a,r*1.2,.9,-.4,this.head).rotation.z=r*.4;this.wings=[];for(const r of[-1,1]){const h=this.group(r*1.2,.8,.5);this.box(5,.22,2.4,a,r*2.5,0,0,h);const f=this.group(r*5,0,0,h);this.box(5,.16,2,o,r*2.5,0,.4,f),this.box(.15,.15,3.4,a,r*2.5,.12,.4,f),this.wings.push({w:h,o:f,sx:r})}this.tail=[];for(let r=0;r<8;r++)this.tail.push(this.box(1.5-r*.14,1.2-r*.1,1.6,r%2?o:a,0,0,-3.6-r*1.5));for(const[r,h]of[[-1,1.8],[1,1.8],[-1,-1.8],[1,-1.8]])this.box(.6,1.4,.6,a,r,-1.4,h);this.crystals=[];for(let r=0;r<4;r++){const h=r/4*Math.PI*2+.4,f=new Se,c=new be({color:16736464}),u=new At(new Jt(1.3,1.3,1.3),c),d=new At(new Jt(1.3,1.3,1.3),new be({color:16765168}));d.rotation.set(.7,.7,0),d.scale.setScalar(.7),f.add(u,d);const p=new At(new Dn(.07,.07,1,5),new be({color:16744672,transparent:!0,opacity:.6,fog:!1}));if(this.arena&&this.arena.pillars){const x=this.arena.pillars[(r*2+1)%this.arena.pillars.length];f.position.set(x.x+.5,x.top+3.5,x.z+.5)}else f.position.set(i.x+Math.cos(h)*14,i.y-6+3,i.z+Math.sin(h)*14);t.add(f,p),this.extra.push(f,p),this.crystals.push({g:f,beam:p,alive:!0})}this.h.toast("¡Destruye los 4 cristales para poder dañar al Dragón!")}aliveCrystals(){return this.crystals.filter(t=>t.alive).length}damageMul(){return this.aliveCrystals()?.25:1}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Dragón entra en furia!"),this.diveT=3}raycast(t,e,i){let s=super.raycast(t,e,i);return this.crystals.forEach((o,a)=>{if(!o.alive)return;const l=o.g.position,r=qo(t,e,{x:l.x-1,y:l.y-1,z:l.z-1},{x:l.x+1,y:l.y+1,z:l.z+1});r>=0&&r<=i&&(!s||r<s.dist)&&(s={dist:r,crit:!1,crystal:a})}),s}hit(t,e,i){if(i&&i.crystal!==void 0){const s=this.crystals[i.crystal];if(!s.alive)return;s.alive=!1,this.scene.remove(s.g,s.beam),this.h.explode(s.g.position.x,s.g.position.y,s.g.position.z,2.2,.35),this.h.burst(s.g.position.x,s.g.position.y,s.g.position.z,[1,.4,.8],24,6),this.h.toast(this.aliveCrystals()?`Cristal destruido (${this.aliveCrystals()} restantes)`:"¡Cristales destruidos! Ahora es vulnerable");return}super.hit(t,e,i)}tick(t,e,i){const s=this.phase;this.center.x+=(e.pos.x-this.center.x)*t*.1,this.center.z+=(e.pos.z-this.center.z)*t*.1;const o=this.aliveCrystals();o&&(this.hp=Math.min(this.maxHp,this.hp+t*2*o));const a=this.pos.clone();if(this.state==="circle"){this.theta+=t*(.32+.1*s);const h=24,f=this.center.x+Math.cos(this.theta)*h,c=this.center.z+Math.sin(this.theta)*h,u=Math.max(e.pos.y+12,this.center.y)+Math.sin(this.t*.9)*2,d=Math.min(1,t*1.6);if(this.pos.x+=(f-this.pos.x)*d,this.pos.z+=(c-this.pos.z)*d,this.pos.y+=(u-this.pos.y)*d,this.diveT-=t,this.fireT-=t,this.diveT<=0&&!e.dead&&(this.state="dive",this.diveTime=0,this.diveTarget.set(e.pos.x,e.pos.y+1,e.pos.z),this.diveT=s===1?13:8,this.h.sound("roar",.7)),this.fireT<=0&&!e.dead){this.fireT=s===1?5:3;const p=this.world(this.head);this.shootProj(p,he(e.pos.x,e.pos.y+1,e.pos.z).sub(p),{speed:17,size:1.1,color:4198496,emissive:12595440,radius:2.6,ds:.55,cloud:!0})}}else if(this.state==="dive"){this.diveTime+=t;const h=this.diveTarget.clone().sub(this.pos),f=h.length();this.pos.addScaledVector(h.normalize(),28*t),Math.hypot(this.pos.x-e.pos.x,this.pos.y-(e.pos.y+1),this.pos.z-e.pos.z)<4.2&&!e.dead&&!this.hitDive&&(this.hitDive=!0,this.h.hurtPlayer(9,h.x*8,h.z*8)),(f<3||this.diveTime>3)&&(this.state="circle",this.hitDive=!1)}const l=this.pos.clone().sub(a);l.lengthSq()>1e-5&&(this.yaw+=hi(Math.atan2(l.x,l.z)-this.yaw)*Math.min(1,t*3)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=this.state==="dive"?0:-hi(Math.atan2(l.x,l.z)-this.yaw)*.5,this.root.rotation.x=this.state==="dive"?.5:0;const r=Math.sin(this.t*(this.state==="dive"?7:3.2));for(const h of this.wings)h.w.rotation.z=h.sx*r*.6,h.o.rotation.z=h.sx*r*.45;this.tail.forEach((h,f)=>{h.position.x=Math.sin(this.t*2-f*.6)*f*.35,h.position.y=Math.sin(this.t*1.5-f*.5)*f*.12}),this.jaw.rotation.x=.1+(this.state==="dive"?.5:.18+Math.sin(this.t*2)*.12);for(const h of this.crystals)if(h.alive){h.g.rotation.y+=t*1.2,h.g.position.y+=Math.sin(this.t*2+h.g.position.x)*t*.4;const f=h.g.position,c=this.pos.clone().setY(this.pos.y+1),u=f.distanceTo(c);h.beam.scale.set(1,u,1),h.beam.position.copy(f).add(c).multiplyScalar(.5),h.beam.quaternion.setFromUnitVectors(he(0,1,0),c.clone().sub(f).normalize()),h.beam.visible=this.hp<this.maxHp}else h.beam.visible=!1}}class Ov extends bi{constructor(t,e,i){super(t,e,i,{name:"WITHER",type:"wither",maxHp:300,hitbox:{hx:2.2,hy:2.8,hz:2.2,oy:1},scale:1.6,burstColor:[.2,.2,.25]}),this.fireT=2.5,this.minionT=12,this.noBreak=0;const s=this.mat(1447450),o=this.mat(3816e3),a=this.mat(15266047,0,!0);this.box(.45,3,.45,o,0,0,0);for(let r=0;r<3;r++)this.box(2.6-r*.4,.2,.35,o,0,.9-r*.55,0);this.box(.5,1.2,.5,s,0,-1.9,-.5).rotation.x=.3,this.heads=[];const l=(r,h,f,c)=>{const u=this.group(h,f,c);this.box(r,r,r,s,0,0,0,u);for(const d of[-1,1])this.box(r*.22,r*.16,.1,a,d*r*.22,r*.1,r/2+.03,u);this.box(r*.5,r*.14,.1,a,0,-r*.25,r/2+.03,u),this.heads.push(u)};l(1.3,0,2.1,0),l(1,-1.35,1.7,.1),l(1,1.35,1.7,.1),this.aura=new At(new Jt(3.6,4.8,3.6),new be({color:8433919,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.aura.position.y=.6,this.body.add(this.aura),this.h.explode(i.x,i.y,i.z,4,.25),this.h.toast("¡El Wither ha despertado!")}phaseFor(t){return t>.5?1:2}damageMul(){return this.phase===2?.6:1}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Wither está acorazado! Te perseguirá de cerca"),this.aura.material.opacity=.28,this.fireT=1}onHit(){if(this.t-this.noBreak<.6)return;this.noBreak=this.t;const t=this.scale,e=Math.floor(this.pos.x),i=Math.floor(this.pos.y+t),s=Math.floor(this.pos.z);for(let o=-3;o<=3;o++)for(let a=-2;a<=4;a++)for(let l=-3;l<=3;l++){const r=this.h.world().getBlock(e+o,i+a,s+l);r&&r!==L.BEDROCK&&Math.random()<.6&&this.h.world().setBlock(e+o,i+a,s+l,0)}}tick(t,e){const i=this.phase,s=e.pos.x,o=e.pos.z,a=s-this.pos.x,l=o-this.pos.z,r=Math.hypot(a,l)||1,h=i===1?16:7,f=i===1?4.5:7;if(r>h+1?(this.pos.x+=a/r*f*t,this.pos.z+=l/r*f*t):r<h-3&&(this.pos.x-=a/r*f*.7*t,this.pos.z-=l/r*f*.7*t),this.pos.y+=(e.pos.y+(i===1?7:3.5)-this.pos.y)*Math.min(1,t*.9),this.yaw+=hi(Math.atan2(a,l)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.3)*.5,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((c,u)=>{c.rotation.y=Math.sin(this.t*1.1+u*2)*.35,c.rotation.x=Math.sin(this.t*.9+u)*.1}),this.fireT-=t,this.fireT<=0&&!e.dead){this.fireT=i===1?2.3:1.6;const c=i===1?1:3;for(let u=0;u<c;u++){const d=this.world(this.heads[u%3]),p=he(e.pos.x+e.vel.x*.4,e.pos.y+1,e.pos.z+e.vel.z*.4),x=p.sub(d).normalize();x.x+=Ve(-.05,.05)*u,x.z+=Ve(-.05,.05)*u,this.shootProj(d,x,{speed:15,size:i===1?.8:1,color:i===1?1118484:2109536,emissive:i===1?3158080:4223231,radius:i===1?1.9:2.3,ds:.4,effect:["poison",6]})}}i===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<5&&this.h.spawnMinion("skeleton")))}}class zv extends bi{constructor(t,e,i){super(t,e,i,{name:"WARDEN",type:"warden",maxHp:360,hitbox:{hx:.9,hy:1.6,hz:.9,oy:1.6},scale:1.25,burstColor:[.1,.6,.6]}),this.vel=he(),this.hw=.55*1.25,this.hh=3.4,this.hwb=.7,this.pos.copy(i),this.state="emerge",this.emerge=2.4,this.boomT=3,this.charge=0,this.meleeT=0,this.angry=!1,this.walk=0;const s=this.mat(862768),o=this.mat(1325634),a=this.mat(3926216,0,!0);this.legL=this.leg(-.4,s),this.legR=this.leg(.4,s),this.box(1.5,1.5,.9,o,0,2.15,0),this.chest=this.box(.7,.6,.12,a,0,2.2,.48);for(const l of[1.75,2,2.45])this.box(1.55,.1,.95,s,0,l,0);this.armL=this.arm(-1.1,o),this.armR=this.arm(1.1,o),this.head=this.group(0,3.25,.05),this.box(1.5,1,.95,o,0,0,0,this.head);for(const l of[-1,1])this.box(.18,.9,.18,s,l*.5,.85,-.1,this.head).rotation.z=-l*.35,this.box(.6,.55,.12,a,l*.95,.15,-.1,this.head);this.box(.9,.12,.1,a,0,-.1,.5,this.head),this.boomBeam=new At(new Dn(.5,.5,1,8),new be({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.boomBeam),this.extra.push(this.boomBeam),this.h.toast("El Warden emerge de la oscuridad…"),this.h.sound("roar",1)}leg(t,e){const i=this.group(t,1.5,0);return this.box(.7,1.5,.75,e,0,-.75,0,i),i}arm(t,e){const i=this.group(t,2.8,0);return this.box(.7,2.6,.7,e,0,-1.3,0,i),i}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Warden ruge enfurecido!"),this.boomT=1}damageMul(){return this.state==="emerge"?0:1}tick(t,e,i){const s=this.phase;if(this.state==="emerge"){this.emerge-=t,this.root.position.set(this.pos.x,this.pos.y-Math.max(0,this.emerge)*1.2,this.pos.z),this.h.darkness(.6),this.emerge<=0&&(this.state="hunt");return}const o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1,r=e.pos.y-this.pos.y;this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*5);const h=this.charge>0?.4:s===1?3.4:5;this.vel.x+=(o/l*h-this.vel.x)*Math.min(1,t*6),this.vel.z+=(a/l*h-this.vel.z)*Math.min(1,t*6),l<2.2&&(this.vel.x*=.2,this.vel.z*=.2);const f={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},c=_s(i,f,t);(c.hitX||c.hitZ)&&c.onGround&&(this.vel.y=9),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.2,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;const u=Math.sin(this.walk)*.55;this.legL.rotation.x=u,this.legR.rotation.x=-u,this.armL.rotation.x=-u*.7,this.armR.rotation.x=u*.7,this.head.rotation.x=Math.sin(this.t*2)*.05,this.chest.scale.setScalar(1+(this.charge>0?.6+Math.sin(this.t*25)*.3:Math.sin(this.t*4)*.1)),this.meleeT-=t,l<3.8&&Math.abs(r)<3&&this.meleeT<=0&&!e.dead&&this.charge<=0&&(this.meleeT=1.5,this.armR.rotation.x=-2,this.h.hurtPlayer(s===1?12:15,o/l*9,a/l*9),this.h.sound("hit",1)),this.boomT-=t,this.charge>0?(this.charge-=t,this.h.sound("hiss",.4),this.charge<=0&&this.sonicBoom(e,i)):this.boomT<=0&&l>4.5&&l<30&&!e.dead&&(this.charge=1.5,this.boomT=s===1?5:3.2,this.h.sound("roar",.5)),this.boomBeam.material.opacity=Math.max(0,this.boomBeam.material.opacity-t*3),this.h.darkness(l<28?.35+.15*Math.sin(this.t*3):0)}sonicBoom(t,e){const i=this.pos.clone().setY(this.pos.y+2.6*this.scale),s=he(t.pos.x,t.pos.y+1,t.pos.z),o=s.clone().sub(i),a=o.length();o.normalize(),this.boomBeam.material.opacity=.85,this.boomBeam.scale.set(1,a,1),this.boomBeam.position.copy(i).add(s).multiplyScalar(.5),this.boomBeam.quaternion.setFromUnitVectors(he(0,1,0),o),this.h.sound("explode",.8),e.raycast(i,o,a)||this.h.hurtPlayer(this.phase===1?12:15,o.x*8,o.z*8),this.h.burst(t.pos.x,t.pos.y+1,t.pos.z,[.4,1,.9],14,5)}dispose(){this.h.darkness(0),super.dispose()}}class Fv extends bi{constructor(t,e,i){super(t,e,i,{name:"GUARDIÁN ANCESTRAL",type:"guardian",maxHp:240,hitbox:{hx:1.8,hy:1.8,hz:1.8,oy:0},scale:2.4,burstColor:[.3,.9,.8]}),this.laserT=4,this.charge=0,this.beam=null,this.thorns=0;const s=this.mat(8032114),o=this.mat(6189912),a=this.mat(14715472),l=this.mat(6353120,0,!0);this.box(1.5,1.5,1.5,s,0,0,0);for(let h=0;h<6;h++)this.box(.4,.4,.05,a,Ve(-.6,.6),Ve(-.6,.6),-.78);this.spikes=[];const r=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,-1]];for(const[h,f,c]of r)for(let u=0;u<3;u++){const d=this.group(h*.75+(h?0:Ve(-.5,.5)),f*.75+(f?0:Ve(-.5,.5)),c*.75+(c?0:Ve(-.5,.5)));d.lookAt(d.position.clone().add(he(h,f,c))),this.box(.14,.14,.9,o,0,0,.45,d),this.box(.1,.1,.2,l,0,0,.95,d),this.spikes.push(d)}this.eye=this.group(0,0,.78),this.box(.95,.95,.12,this.mat(15790304),0,0,0,this.eye),this.iris=this.box(.5,.5,.14,this.mat(13119520,5244936),0,0,.04,this.eye),this.box(.18,.18,.16,this.mat(1050632),0,0,.06,this.eye),this.box(.5,.5,.9,o,0,0,-1.1).scale.set(1,.6,1),this.laser=new At(new Dn(.1,.1,1,6),new be({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Guardián Ancestral te observa… ¡cuidado con su láser!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Guardián se enfurece! Su láser es más rápido")}onHit(){const t=this.h.player();t&&Math.hypot(t.pos.x-this.pos.x,t.pos.z-this.pos.z)<7.5&&!t.dead&&this.h.hurtPlayer(2,0,0)}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1;if(this.charge<=0){const d=s===1?14:11,p=s===1?3:4.4;l>d+1?(this.pos.x+=o/l*p*t,this.pos.z+=a/l*p*t):l<d-3&&(this.pos.x-=o/l*p*.7*t,this.pos.z-=a/l*p*.7*t),this.pos.y+=(e.pos.y+4-this.pos.y)*Math.min(1,t*.8)}this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw;const r=1+Math.sin(this.t*1.6)*.12+(this.charge>0?.35:0);this.spikes.forEach(d=>d.scale.setScalar(r)),this.iris.scale.setScalar(this.charge>0?1.5+Math.sin(this.t*30)*.2:1),this.laserT-=t;const h=this.world(this.eye),f=he(e.pos.x,e.pos.y+1,e.pos.z),c=f.clone().sub(h),u=c.length();if(c.normalize(),this.charge>0){const d=s===1?2.6:1.7,p=1-this.charge/d;this.charge-=t,this.laser.material.opacity=.25+p*.6,this.laser.scale.set(.5+p*3.2,u,.5+p*3.2),this.laser.position.copy(h).add(f).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(he(0,1,0),c),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.6),!i.raycast(h,c,u)&&!e.dead&&(this.h.hurtPlayer(9,c.x*3,c.z*3),this.h.effect("fatigue",25),this.h.toast("¡Fatiga de minería!")),this.laserT=s===1?6:3.5)}else this.laser.material.opacity=0,this.laserT<=0&&u<40&&!e.dead&&(this.charge=s===1?2.6:1.7,this.h.sound("hiss",.6))}}class Bv extends bi{constructor(t,e,i){super(t,e,i,{name:"DEVASTADOR",type:"ravager",maxHp:280,hitbox:{hx:1.4,hy:1.5,hz:1.9,oy:1.4},scale:1.5,burstColor:[.5,.4,.3]}),this.vel=he(),this.state="stalk",this.timer=4,this.dirx=0,this.dirz=1,this.hitDone=!1,this.walk=0,this.stunMul=1;const s=this.mat(4867392),o=this.mat(6182478),a=this.mat(14210244),l=this.mat(11542560,3147784);this.box(2.2,1.7,3.1,s,0,1.9,0),this.box(1.6,.9,1.6,o,0,3,-.6),this.neck=this.group(0,2.3,1.4),this.box(1,1,1.2,o,0,.1,.4,this.neck),this.head=this.group(0,.2,1.2,this.neck),this.box(1.7,1.45,1.6,s,0,0,.5,this.head);for(const r of[-1,1])this.box(.25,1,.25,a,r*.7,1,.2,this.head).rotation.z=-r*.3,this.box(.2,.6,.2,a,r*.55,-.55,1.2,this.head),this.box(.3,.2,.1,l,r*.45,.2,1.32,this.head);this.legs=[[-.8,1.2],[.8,1.2],[-.8,-1.2],[.8,-1.2]].map(([r,h])=>{const f=this.group(r,1.2,h);return this.box(.8,1.2,.8,o,0,-.6,0,f),f}),this.hw=1.2,this.hh=3.2,this.h.toast("¡El Devastador ruge! Esquiva sus embestidas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Devastador se enfurece!"),this.timer=1}damageMul(){return this.state==="stun"?1.7:1}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1;this.timer-=t;let r=0;if(this.state==="stalk")r=s===1?3.6:4.8,this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*4),this.timer<=0&&!e.dead&&l<40&&(this.state="windup",this.timer=1,this.h.sound("roar",.9));else if(this.state==="windup")this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*6),this.neck.rotation.x=-.6*Math.min(1,(1-this.timer)*2),this.timer<=0&&(this.state="charge",this.timer=1.9,this.hitDone=!1,this.dirx=o/l,this.dirz=a/l,this.yaw=Math.atan2(this.dirx,this.dirz),l<9&&!e.dead&&this.h.hurtPlayer(4,this.dirx*10,this.dirz*10));else if(this.state==="charge"){r=15,this.vel.x=this.dirx*r,this.vel.z=this.dirz*r,this.neck.rotation.x=.5,l<3.4&&!this.hitDone&&!e.dead&&Math.abs(e.pos.y-this.pos.y)<3.5&&(this.hitDone=!0,this.h.hurtPlayer(11,this.dirx*12,this.dirz*12));const u=Math.floor(this.pos.x+this.dirx*2.2),d=Math.floor(this.pos.z+this.dirz*2.2),p=Math.floor(this.pos.y);for(let x=-1;x<=1;x++)for(let g=-1;g<=1;g++)for(let m=0;m<3;m++){const y=i.getBlock(u+x,p+m,d+g);y&&y!==L.BEDROCK&&y!==L.STONE&&y!==L.COBBLE&&i.setBlock(u+x,p+m,d+g,0)}this.timer<=0&&(this.state="stun",this.timer=2.2,this.h.sound("hit",1),this.h.burst(this.pos.x,this.pos.y+2,this.pos.z,[.8,.8,.3],14,4))}else this.state==="stun"&&(this.neck.rotation.x=.9,this.timer<=0&&(this.state="stalk",this.timer=s===1?5:3,this.neck.rotation.x=0));this.state!=="charge"&&(this.vel.x+=(o/l*r-this.vel.x)*Math.min(1,t*5),this.vel.z+=(a/l*r-this.vel.z)*Math.min(1,t*5)),(this.state==="stun"||this.state==="windup")&&(this.vel.x*=.85,this.vel.z*=.85);const h={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},f=_s(i,h,t);(f.hitX||f.hitZ)&&f.onGround&&this.state!=="stun"&&(this.vel.y=10),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*1.6;const c=Math.sin(this.walk)*.5;this.legs.forEach((u,d)=>u.rotation.x=d%2?-c:c),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class kv extends bi{constructor(t,e,i){super(t,e,i,{name:"INVOCADOR",type:"evoker",maxHp:220,hitbox:{hx:.9,hy:1.4,hz:.9,oy:1.6},scale:1.7,burstColor:[.9,.8,.2]}),this.fangT=3,this.vexT=7,this.tpT=6,this.vex=[],this.fangs=[],this.targets=[];const s=this.mat(7105648),o=this.mat(14202928),a=this.mat(14264458),l=this.mat(3158068);this.box(.95,1.6,.65,s,0,1,0),this.box(1,.18,.7,o,0,.25,0),this.box(.98,.14,.68,o,0,1,0),this.head=this.group(0,2.05,0),this.box(.55,.65,.55,a,0,.15,0,this.head),this.box(.14,.28,.16,a,0,.05,.34,this.head);for(const r of[-1,1])this.box(.16,.08,.04,this.mat(16777215,0,!0),r*.14,.25,.28,this.head),this.box(.2,.05,.05,l,r*.14,.34,.28,this.head);this.arms=this.box(1,.3,.45,s,0,1.5,.4),this.armL=this.group(-.62,1.7,.1),this.armR=this.group(.62,1.7,.1);for(const r of[this.armL,this.armR])this.box(.28,.9,.28,s,0,-.45,0,r);this.arms.visible=!0,this.h.toast("El Invocador alza los brazos… ¡cuidado con los colmillos y los vex!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Invocador desata un círculo de colmillos!"),this.fangT=1}raycast(t,e,i){return this.targets=this.vex.map(s=>({pos:s.pos,half:.7,onHit:()=>this.killVex(s)})),super.raycast(t,e,i)}killVex(t){this.h.burst(t.pos.x,t.pos.y,t.pos.z,[.5,.7,1],14,4),this.h.sound("hit",1),this.scene.remove(t.mesh),this.vex.splice(this.vex.indexOf(t),1)}spawnFang(t,e,i,s,o){const a=s.topY(Math.floor(t),Math.floor(e));if(a<0)return;const l=new Se,r=new gi({color:15788224,emissive:4208664});for(let h=0;h<3;h++){const f=new At(new Jt(.5-h*.14,.7,.5-h*.14),r);f.position.y=.35+h*.6,l.add(f)}l.position.set(t,a+1,e),l.scale.y=.01,l.visible=!1,this.scene.add(l),this.fangs.push({x:t,z:e,y:a+1,g:l,t:-i,hit:!1})}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1;this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*5);const r=13;l>r+2?(this.pos.x+=o/l*3.5*t,this.pos.z+=a/l*3.5*t):l<r-4&&(this.pos.x-=o/l*3*t,this.pos.z-=a/l*3*t),this.pos.y+=(e.pos.y+3.2-this.pos.y)*Math.min(1,t*1.2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.7)*.35,this.pos.z),this.root.rotation.y=this.yaw;const h=this.fangT<1||this.vexT<1;if(this.armL.rotation.x=this.armR.rotation.x=h?-2.4+Math.sin(this.t*14)*.2:0,this.arms.visible=!h,this.tpT-=t,this.tpT<=0){this.tpT=s===1?8:5,this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5);const f=Math.random()*Math.PI*2,c=11+Math.random()*4;this.pos.set(e.pos.x+Math.cos(f)*c,e.pos.y+3+Math.random()*2,e.pos.z+Math.sin(f)*c),this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5),this.h.sound("pop",1)}if(this.fangT-=t,this.fangT<=0&&!e.dead){this.fangT=s===1?4.2:3,this.h.sound("shoot",.8);for(let f=1;f<=12;f++)this.spawnFang(this.pos.x+o/l*f*1.4+Math.sin(f)*.2,this.pos.z+a/l*f*1.4,f*.07,i,e);if(s===2)for(let f=0;f<12;f++){const c=f/12*Math.PI*2;this.spawnFang(e.pos.x+Math.cos(c)*3,e.pos.z+Math.sin(c)*3,.9,i,e)}}for(let f=this.fangs.length-1;f>=0;f--){const c=this.fangs[f];c.t+=t,c.t>=0&&(c.g.visible=!0,c.g.scale.y=Math.min(1,c.t*6),!c.hit&&c.t>.12&&Math.hypot(c.x-e.pos.x,c.z-e.pos.z)<1.2&&Math.abs(c.y-e.pos.y)<2.2&&!e.dead&&(c.hit=!0,this.h.hurtPlayer(6,0,0)),c.t>1.1&&(this.scene.remove(c.g),this.fangs.splice(f,1)))}if(this.vexT-=t,this.vexT<=0&&!e.dead){this.vexT=s===1?10:7,this.h.sound("pop",1);const f=s===1?3:5;for(let c=0;c<f;c++){const u=new Se,d=new gi({color:9416928,emissive:2109520,transparent:!0,opacity:.85}),p=new At(new Jt(.5,.7,.5),d),x=new At(new Jt(.7,.05,.4),d),g=x.clone();x.position.set(-.55,.2,-.1),g.position.set(.55,.2,-.1),u.add(p,x,g);for(const y of[-.1,.1]){const S=new At(new Jt(.08,.08,.05),new be({color:16719904}));S.position.set(y,.15,.27),u.add(S)}const m=he(this.pos.x+Ve(-2,2),this.pos.y+1+Ve(0,2),this.pos.z+Ve(-2,2));u.position.copy(m),this.scene.add(u),this.vex.push({mesh:u,pos:m,w1:x,w2:g,life:28,cool:1})}}for(let f=this.vex.length-1;f>=0;f--){const c=this.vex[f];c.life-=t,c.cool-=t;const u=he(e.pos.x,e.pos.y+1,e.pos.z).sub(c.pos),d=u.length();c.pos.addScaledVector(u.normalize(),6.2*t),c.pos.y+=Math.sin(this.t*6+f)*t*1.5,c.mesh.position.copy(c.pos),c.mesh.rotation.y=Math.atan2(u.x,u.z),c.w1.rotation.z=Math.sin(this.t*25)*.7,c.w2.rotation.z=-c.w1.rotation.z,d<1.2&&c.cool<=0&&!e.dead&&(c.cool=.9,this.h.hurtPlayer(3,0,0)),c.life<=0&&(this.scene.remove(c.mesh),this.vex.splice(f,1))}}dispose(){for(const t of this.vex)this.scene.remove(t.mesh);for(const t of this.fangs)this.scene.remove(t.g);this.vex=[],this.fangs=[],super.dispose()}}class Hv extends bi{constructor(t,e,i){super(t,e,i,{name:"GHAST GIGANTE",type:"ghast",maxHp:200,hitbox:{hx:2.2,hy:2.2,hz:2.2,oy:0},scale:1.8,burstColor:[1,1,1]}),this.fireT=3,this.tele=0,this.theta=Math.random()*6,this.targets=[];const s=this.mat(15921906),o=this.mat(14474460),a=this.mat(4208696);this.box(4,4,4,s,0,0,0),this.eyeL=this.box(.9,.25,.1,a,-.9,.2,2.03),this.eyeR=this.box(.9,.25,.1,a,.9,.2,2.03),this.mouth=this.box(.7,.35,.1,a,0,-.9,2.03),this.tents=[];for(const l of[-1.4,0,1.4])for(const r of[-1.4,0,1.4]){const h=2.2+Math.abs(l*r)*.5+(l===0&&r===0?.6:0),f=this.box(.55,h,.55,o,l,-2-h/2,r);this.tents.push({m:f,base:-2-h/2,ph:Math.random()*6})}this.redEye=this.mat(16719904,0,!0),this.h.toast("¡Un Ghast gigante! Golpea sus bolas de fuego para devolvérselas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Ghast llora de rabia y dispara más rápido!")}raycast(t,e,i){return this.targets=this.proj.filter(s=>!s.reflected).map(s=>({pos:s.mesh.position,half:1.25,onHit:()=>this.reflect(s)})),super.raycast(t,e,i)}reflect(t){t.reflected=!0,t.o={...t.o,reflectDmg:70},t.life=6,t.vel=he(this.pos.x,this.pos.y,this.pos.z).sub(t.mesh.position).normalize().multiplyScalar(22),this.h.sound("hit",1)}tick(t,e){const i=this.phase;this.theta+=t*(.18+.05*i);const s=22,o=e.pos.x+Math.cos(this.theta)*s,a=e.pos.z+Math.sin(this.theta)*s,l=e.pos.y+11,r=Math.min(1,t*.7);if(this.pos.x+=(o-this.pos.x)*r,this.pos.z+=(a-this.pos.z)*r,this.pos.y+=(l-this.pos.y)*r,this.yaw+=hi(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t)*.7,this.pos.z),this.root.rotation.y=this.yaw,this.tents.forEach((h,f)=>{h.m.rotation.z=Math.sin(this.t*1.6+h.ph)*.18,h.m.rotation.x=Math.cos(this.t*1.3+h.ph)*.18}),this.fireT-=t,this.fireT<=0&&this.tele<=0&&!e.dead&&(this.tele=1.1,this.h.sound("hiss",.7)),this.tele>0){if(this.tele-=t,this.eyeL.material=this.eyeR.material=this.redEye,this.eyeL.scale.y=this.eyeR.scale.y=2.2,this.mouth.scale.set(1.6,3.4,1),this.tele<=0){this.fireT=i===1?3.6:2.2;const h=he(this.pos.x,this.pos.y,this.pos.z),f=he(e.pos.x+e.vel.x*.5,e.pos.y+1,e.pos.z+e.vel.z*.5).sub(h);this.shootProj(h,f,{speed:13,size:2,color:16769184,emissive:16736272,radius:3.6,ds:.6,effect:["burn",5],life:9})}}else this.eyeL.material=this.eyeR.material=this.mouth.material,this.eyeL.scale.y=this.eyeR.scale.y=1,this.mouth.scale.set(1,1,1)}}class Gv extends bi{constructor(t,e,i){super(t,e,i,{name:"HEROBRINE",type:"herobrine",maxHp:400,hitbox:{hx:.5,hy:1,hz:.5,oy:1},scale:1.35,burstColor:[1,1,1]}),this.vel=he(),this.hw=.4,this.hh=2.4,this.tpT=5,this.boltT=4,this.walk=0,this.meleeT=0,this.minionT=8;const s=this.mat(14724236),o=this.mat(2794936),a=this.mat(3817372),l=this.mat(16777215,0,!0);this.head=this.group(0,1.5,0),this.box(.5,.5,.5,s,0,.25,0,this.head),this.box(.5,.14,.5,this.mat(3810322),0,.46,0,this.head);for(const r of[-1,1])this.box(.16,.1,.06,l,r*.13,.3,.26,this.head);this.box(.5,.75,.25,o,0,1.125,0),this.legL=this.group(-.125,.75,0),this.box(.25,.75,.25,a,0,-.375,0,this.legL),this.legR=this.group(.125,.75,0),this.box(.25,.75,.25,a,0,-.375,0,this.legR),this.armL=this.group(-.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armL),this.armR=this.group(.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armR),this.aura=new Bx(16777215,0,14),this.root.add(this.aura),this.aura.position.y=1.5,this.h.toast("Una figura de ojos blancos te observa…"),this.h.sound("roar",.6)}phaseFor(t){return t>.6?1:t>.25?2:3}onPhase(t){this.h.sound("roar",1),t===2&&(this.h.toast("Las luces se apagan…"),this.tpT=1),t===3&&(this.h.toast("¡HEROBRINE LEVITA! Cuidado con sus rayos"),this.vel.y=6)}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1;this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*6),this.h.darkness(s>=2?.55+Math.sin(this.t*5)*.1:.15);const r=s===1?3.4:4.4;if(s<3){this.vel.x+=(o/l*r*(l>2.4?1:0)-this.vel.x)*Math.min(1,t*6),this.vel.z+=(a/l*r*(l>2.4?1:0)-this.vel.z)*Math.min(1,t*6);const f=_s(i,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t);(f.hitX||f.hitZ)&&f.onGround&&(this.vel.y=9)}else{const f=e.pos.y+5,c=14;this.pos.y+=(f-this.pos.y)*Math.min(1,t*1.5),l>c?(this.pos.x+=o/l*5*t,this.pos.z+=a/l*5*t):l<c-4&&(this.pos.x-=o/l*4*t,this.pos.z-=a/l*4*t)}this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.4;const h=Math.sin(this.walk)*.8;if(this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h,this.armR.rotation.x=s===3?-1.4:h,this.root.position.set(this.pos.x,this.pos.y+(s===3?Math.sin(this.t*2)*.4:0),this.pos.z),this.root.rotation.y=this.yaw,this.aura.intensity=s>=3?3+Math.sin(this.t*12):0,this.tpT-=t,this.tpT<=0&&!e.dead){this.tpT=s===1?6.5:s===2?4:5,this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5);const f=e.lookDir(),c=Math.hypot(f.x,f.z)||1,u=Math.floor(e.pos.x-f.x/c*4),d=Math.floor(e.pos.z-f.z/c*4),p=i.topY(u,d);s<3&&p>0?(this.pos.set(u+.5,p+1,d+.5),this.vel.set(0,0,0)):this.pos.set(u+.5,e.pos.y+5,d+.5),this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5),this.h.sound("pop",1)}if(this.meleeT-=t,l<2.6&&Math.abs(e.pos.y-this.pos.y)<2.5&&this.meleeT<=0&&!e.dead&&s<3&&(this.meleeT=1.1,this.h.hurtPlayer(s===1?8:11,o/l*7,a/l*7),this.h.sound("hit",1)),this.boltT-=t,this.boltT<=0&&!e.dead){this.boltT=s===1?6:s===2?3.8:2.4;const f=e.pos.x,c=e.pos.z;if(this.h.burst(f,e.pos.y+.5,c,[1,1,.6],18,2),setTimeout(()=>{this.dead||this.h.strikeNear(f,c)},900),s===3){const u=he(this.pos.x,this.pos.y+2,this.pos.z),d=he(e.pos.x,e.pos.y+1,e.pos.z).sub(u);this.shootProj(u,d,{speed:18,size:.9,color:16777215,emissive:16777215,radius:2.2,ds:.45,effect:["burn",3]})}}s>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=11,this.h.minions()<5&&this.h.spawnMinion("zombie")))}dispose(){this.h.darkness(0),super.dispose()}}class Vv extends bi{constructor(t,e,i){super(t,e,i,{name:"REY SLIME",type:"slimeking",maxHp:260,hitbox:{hx:2.6,hy:2.6,hz:2.6,oy:2.6},scale:1.4,burstColor:[.4,1,.4]}),this.vel=he(),this.hw=3.2,this.hh=5.4,this.jumpT=2.5,this.onGround=!1,this.splitAt=[.75,.5,.25],this.squash=1;const s=new gi({color:6348896,emissive:1064976,transparent:!0,opacity:.72});this.flashMats.push(s);const o=this.mat(3119663,536584);this.slime=this.group(0,0,0),this.box(5,5,5,s,0,2.6,0,this.slime),this.box(2.2,2.2,2.2,o,0,2.6,0,this.slime);const a=this.mat(1060880,0,!0);for(const r of[-1,1])this.box(.7,.7,.2,a,r*1.2,3.1,2.55,this.slime);this.box(1.5,.3,.2,a,0,1.8,2.55,this.slime);const l=this.mat(15777840,3153920);this.box(3.4,.6,3.4,l,0,5.4,0,this.slime);for(const[r,h]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4],[0,1.6],[0,-1.6]])this.box(.5,.9,.5,l,r,6,h,this.slime);this.h.toast("El Rey Slime salta hacia ti. ¡Se divide al perder vida!")}phaseFor(t){return t>.5?1:t>.25?2:3}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Slime salta más rápido!")}onHit(){const t=this.hp/this.maxHp;for(;this.splitAt.length&&t<this.splitAt[0];){this.splitAt.shift();for(let e=0;e<4;e++)this.h.spawnMinion("slime");this.h.toast("¡Se divide en slimes!")}}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1;if(this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*4),this.jumpT-=t,this.onGround&&(this.vel.x*=.8,this.vel.z*=.8,this.jumpT<=0&&!e.dead)){this.jumpT=s===1?2.6:s===2?1.8:1.2;const h=Math.min(l,22)/1.35*.95;this.vel.y=17,this.vel.x=o/l*h,this.vel.z=a/l*h,this.onGround=!1,this.squash=1.4,this.h.sound("pop",1)}const r=_s(i,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t,34);if(r.onGround&&!this.onGround){this.onGround=!0,this.squash=.6,this.h.sound("explode",.7);const h=s===1?8:11,f=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z);this.h.burst(this.pos.x,this.pos.y+.3,this.pos.z,[.4,1,.4],36,8),f<h&&Math.abs(e.pos.y-this.pos.y)<3&&!e.dead&&this.h.hurtPlayer(s===1?8:12,(e.pos.x-this.pos.x)/(f||1)*9,(e.pos.z-this.pos.z)/(f||1)*9);const c=Math.floor(this.pos.x),u=Math.floor(this.pos.z),d=Math.floor(this.pos.y)-1;for(let p=-3;p<=3;p++)for(let x=-3;x<=3;x++)p*p+x*x<=9&&i.getBlock(c+p,d,u+x)&&i.getBlock(c+p,d,u+x)!==L.BEDROCK&&Math.random()<.6&&i.setBlock(c+p,d,u+x,0)}(r.hitX||r.hitZ)&&(this.vel.x*=-.2,this.vel.z*=-.2),this.squash+=(1-this.squash)*Math.min(1,t*8),this.slime.scale.set(1/Math.sqrt(this.squash),this.squash,1/Math.sqrt(this.squash)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,l<3.2&&Math.abs(e.pos.y-this.pos.y)<4&&!e.dead&&(this.contactT=(this.contactT||0)-t)<=0&&(this.contactT=1,this.h.hurtPlayer(5,o/l*6,a/l*6))}}class Wv extends bi{constructor(t,e,i){super(t,e,i,{name:"REY BLAZE",type:"blazeking",maxHp:280,hitbox:{hx:1.4,hy:1.7,hz:1.4,oy:1.4},scale:1.8,burstColor:[1,.6,.1]}),this.theta=Math.random()*6,this.volleyT=3,this.waveT=6,this.minionT=12;const s=this.mat(15773728,10506240),o=this.mat(16742928,12595200),a=this.mat(2101248,0,!0);this.head=this.box(1.5,1.5,1.5,s,0,2.2,0);for(const l of[-.35,.35])this.box(.34,.26,.06,a,l,2.35,.77,this.body);this.box(.7,.16,.06,a,0,1.85,.77);for(let l=0;l<5;l++){const r=l/5*Math.PI*2;this.box(.25,.7,.25,o,Math.cos(r)*.6,3.15,Math.sin(r)*.6).rotation.z=Math.cos(r)*.3}this.core=this.box(.8,.8,.8,this.mat(16769136,0,!0),0,1,0),this.rings=[];for(let l=0;l<3;l++){const r=this.group(0,.2+l*.7,0);for(let h=0;h<6;h++){const f=h/6*Math.PI*2;this.box(.22,1.5,.22,l%2?o:s,Math.cos(f)*(1.1+l*.1),0,Math.sin(f)*(1.1+l*.1),r)}this.rings.push(r)}this.h.toast("¡El Rey Blaze arde sobre el Nether! Salta sus ondas de fuego")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Blaze llama a sus blazes!"),this.minionT=1}tick(t,e,i){const s=this.phase;this.theta+=t*(.32+.1*s);const o=15,a=e.pos.x+Math.cos(this.theta)*o,l=e.pos.z+Math.sin(this.theta)*o,r=e.pos.y+8+Math.sin(this.t*1.1)*1.5,h=Math.min(1,t*.9);if(this.pos.x+=(a-this.pos.x)*h,this.pos.z+=(l-this.pos.z)*h,this.pos.y+=(r-this.pos.y)*h,this.yaw+=hi(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw)*Math.min(1,t*4),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.rings.forEach((f,c)=>f.rotation.y+=t*(1.6+c*.7)*(c%2?-1:1)),this.core.scale.setScalar(1+Math.sin(this.t*6)*.15),this.volleyT-=t,this.volleyT<=0&&!e.dead){this.volleyT=s===1?3.6:2.5;const f=he(this.pos.x,this.pos.y+3,this.pos.z),c=he(e.pos.x,e.pos.y+1,e.pos.z).sub(f).normalize(),u=s===1?5:7;for(let d=0;d<u;d++){const p=(d-(u-1)/2)*.16,x=c.clone();x.x=c.x*Math.cos(p)-c.z*Math.sin(p),x.z=c.x*Math.sin(p)+c.z*Math.cos(p),this.shootProj(f,x,{speed:13,size:.75,color:16756800,emissive:16732176,radius:1.8,ds:.28,effect:["burn",4]})}}this.waveT-=t,this.waveT<=0&&!e.dead&&(this.waveT=s===1?7.5:5,this.addWave(this.pos.x,e.pos.y,this.pos.z,{max:30,speed:12,dmg:9,color:16738832,effect:["burn",4]}),this.h.sound("roar",.6)),s===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<6&&(this.h.spawnMinion("blaze"),this.h.spawnMinion("blaze"))))}}class Xv extends bi{constructor(t,e,i){super(t,e,i,{name:"REY PIGLIN",type:"piglinking",maxHp:340,hitbox:{hx:1,hy:1.9,hz:1,oy:1.9},scale:1.9,burstColor:[.9,.7,.2]}),this.hw=.9,this.hh=7,this.state="walk",this.timer=3,this.slamT=9,this.cryT=12,this.axeT=5,this.spinT=7,this.walkA=0;const s=this.mat(13208184),o=this.mat(15253568,3154944),a=this.mat(5917240),l=this.mat(8022608),r=this.mat(16724e3,0,!0);this.legL=this.group(-.28,1.5,0),this.box(.5,1.5,.5,a,0,-.75,0,this.legL),this.legR=this.group(.28,1.5,0),this.box(.5,1.5,.5,a,0,-.75,0,this.legR),this.box(1.2,1.5,.6,l,0,2.25,0),this.box(1.3,.35,.7,o,0,2.85,0),this.box(1.25,.25,.65,o,0,1.7,0),this.armL=this.group(-.82,2.85,0),this.box(.45,1.5,.45,s,0,-.75,0,this.armL),this.armR=this.group(.82,2.85,0),this.box(.45,1.5,.45,s,0,-.75,0,this.armR),this.box(.2,2.2,.2,this.mat(6965802),0,-1.4,.4,this.armR),this.box(1.1,.7,.18,this.mat(10132122),.5,-2.2,.4,this.armR),this.head=this.group(0,3.35,0),this.box(1.2,1,1,s,0,.1,0,this.head),this.box(.7,.45,.25,this.mat(11563103),0,-.05,.6,this.head);for(const h of[-1,1])this.box(.14,.14,.05,r,h*.3,.3,.52,this.head),this.box(.25,.6,.12,s,h*.78,.35,0,this.head).rotation.z=h*.6,this.box(.12,.3,.1,this.mat(15788240),h*.2,-.3,.7,this.head);this.box(1.3,.3,1.1,o,0,.65,0,this.head);for(let h=-1;h<=1;h++)this.box(.25,.4,.2,o,h*.45,.95,0,this.head);this.h.toast("El Rey Piglin golpea su hacha: ¡oro y furia!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Piglin gira como un torbellino!"),this.spinT=2}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1;this.timer-=t,this.slamT-=t,this.cryT-=t,this.axeT-=t,this.spinT-=t,this.state!=="spin"&&(this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*4));let r=s===1?3.4:4.4;if(this.state==="walk"){if(this.timer<=0&&l<6.5&&!e.dead)this.state="windup",this.timer=.65;else if(this.slamT<=0&&l<22&&this.onGround)this.vel.y=14,this.vel.x=o/l*Math.min(l,14)*.7,this.vel.z=a/l*Math.min(l,14)*.7,this.state="slam",this.slamT=s===1?9:6,this.slammed=!1,this.h.sound("roar",.7);else if(this.spinT<=0&&s===2&&l<8)this.state="spin",this.timer=1.8,this.spinT=7,this.spinHit=0;else if(this.axeT<=0&&l>7&&!e.dead){this.axeT=s===1?5.5:3.8;const f=he(this.pos.x,this.pos.y+4,this.pos.z);this.shootProj(f,he(e.pos.x,e.pos.y+1,e.pos.z).sub(f),{speed:15,size:1,color:15253568,emissive:8413200,radius:1.5,ds:.22}),this.armR.rotation.x=-2.4}if(this.cryT<=0&&(this.cryT=14,this.h.sound("roar",1),this.h.toast("¡El Rey Piglin llama a su guardia!"),this.h.minions()<6))for(let f=0;f<3;f++)this.h.spawnMinion("piglin")}else this.state==="windup"?(r=0,this.armR.rotation.x=-2.6*Math.min(1,(.65-this.timer)*2),this.timer<=0&&(this.state="walk",this.timer=s===1?2.6:1.8,l<7.5&&!e.dead&&this.h.hurtPlayer(13,o/l*12,a/l*12),this.h.sound("hit",1),this.armR.rotation.x=.6)):this.state==="slam"?(r=0,this.onGround&&this.vel.y<=0&&this.t>.2&&(this.state="walk",this.timer=1.5,this.h.burst(this.pos.x,this.pos.y+.4,this.pos.z,[.6,.4,.3],30,8),this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:14,speed:12,dmg:9,color:15253568}),this.h.sound("explode",.8))):this.state==="spin"&&(r=1.2,this.yaw+=t*14,this.spinHit-=t,this.armR.rotation.x=-1.6,l<5&&this.spinHit<=0&&!e.dead&&(this.spinHit=.45,this.h.hurtPlayer(7,o/l*9,a/l*9)),this.timer<=0&&(this.state="walk"));this.walk(t,i,o,a,l,r),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.4;const h=Math.sin(this.walkA)*.6;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h*.7,this.state==="walk"&&(this.armR.rotation.x+=(h*.7-this.armR.rotation.x)*Math.min(1,t*6)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class qv extends bi{constructor(t,e,i){super(t,e,i,{name:"ENDERMAN TITÁN",type:"endertitan",maxHp:380,hitbox:{hx:.45,hy:1.5,hz:.45,oy:1.5},scale:3.6,burstColor:[.7,.2,1]}),this.hw=1.2,this.hh=10,this.tpT=4,this.rockT=3,this.sweepT=0,this.mite=12,this.gaze=0,this.gazeCool=0;const s=this.mat(1182232),o=this.mat(14708991,0,!0);this.legL=this.group(-.12,1.5,0),this.box(.18,1.5,.18,s,0,-.75,0,this.legL),this.legR=this.group(.12,1.5,0),this.box(.18,1.5,.18,s,0,-.75,0,this.legR),this.box(.5,.95,.26,s,0,1.98,0),this.armL=this.group(-.34,2.45,0),this.box(.13,1.35,.13,s,0,-.67,0,this.armL),this.armR=this.group(.34,2.45,0),this.box(.13,1.35,.13,s,0,-.67,0,this.armR),this.head=this.group(0,2.7,0),this.box(.5,.42,.5,s,0,0,0,this.head);for(const a of[-.13,.13])this.box(.15,.06,.03,o,a,.02,.26,this.head);this.jaw=this.group(0,-.22,0,this.head),this.box(.44,.1,.44,s,0,0,0,this.jaw),this.h.toast("El Enderman Titán se alza… ¡no le mires a los ojos!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Titán grita y convoca endermites!"),this.mite=1}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1;if(this.tpT-=t,this.rockT-=t,this.sweepT-=t,this.mite-=t,this.gazeCool-=t,this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*4),this.tpT<=0&&!e.dead){this.tpT=s===1?5.2:3.4,this.h.burst(this.pos.x,this.pos.y+4,this.pos.z,[.8,.3,1],30,6);const p=Math.random()*Math.PI*2,x=7+Math.random()*3,g=Math.floor(e.pos.x+Math.cos(p)*x),m=Math.floor(e.pos.z+Math.sin(p)*x),y=i.topY(g,m);y>0&&(this.pos.set(g+.5,y+1,m+.5),this.vel.set(0,0,0),this.sweepT=.8,this.h.burst(this.pos.x,this.pos.y+4,this.pos.z,[.8,.3,1],30,6),this.h.sound("pop",1))}if(this.sweepT>0?(this.armR.rotation.x=-2.2,this.armL.rotation.x=-2.2,this.sweepT-t<=0&&l<9&&!e.dead&&(this.h.hurtPlayer(12,o/l*11,a/l*11),this.h.sound("hit",1))):(this.armR.rotation.x+=(Math.sin(this.t*1.5)*.1-this.armR.rotation.x)*Math.min(1,t*5),this.armL.rotation.x=this.armR.rotation.x),this.rockT<=0&&l>5&&!e.dead){this.rockT=s===1?3.8:2.6;const p=s===1?1:2;for(let x=0;x<p;x++){const g=he(this.pos.x,this.pos.y+9,this.pos.z),m=he(e.pos.x+e.vel.x*.5,e.pos.y+1,e.pos.z+e.vel.z*.5).sub(g);m.x+=Ve(-.08,.08)*x,this.shootProj(g,m,{speed:15,size:1.8,color:14211232,emissive:3153984,radius:2.4,ds:.42})}this.jaw.rotation.x=.8}else this.jaw.rotation.x*=.92;const r=e.lookDir(),h=this.pos.x-e.pos.x,f=this.pos.y+9.4-(e.pos.y+1.6),c=this.pos.z-e.pos.z,u=Math.hypot(h,f,c)||1;if((r.x*h+r.y*f+r.z*c)/u>.985&&u<45?this.gaze+=t:this.gaze=Math.max(0,this.gaze-t*2),this.gaze>1.6&&this.gazeCool<=0&&!e.dead&&(this.gaze=0,this.gazeCool=6,this.h.sound("roar",1),this.h.hurtPlayer(5,0,0),this.h.effect("levitate",3),this.h.toast("¡Su mirada te eleva!")),s===2&&this.mite<=0&&(this.mite=12,this.h.minions()<7))for(let p=0;p<3;p++)this.h.spawnMinion("endermite");this.walk(t,i,o,a,l,l>14?3.5:0);const d=Math.sin(this.t*3)*.25;this.legL.rotation.x=d,this.legR.rotation.x=-d,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class Yv extends bi{constructor(t,e,i){super(t,e,i,{name:"SEÑOR DEL VACÍO",type:"voidlord",maxHp:300,hitbox:{hx:2,hy:2.2,hz:2,oy:0},scale:1.8,burstColor:[.5,.1,.9]}),this.rifts=[],this.riftT=3,this.laserT=6,this.charge=0,this.tpT=9,this.minionT=14;const s=this.mat(459790),o=this.mat(11555071,0,!0),a=this.mat(2363448,1574960),l=this.group(0,0,0);l.rotation.set(.6,.6,0),this.core=l,this.box(2.4,2.4,2.4,s,0,0,0,l),this.box(2.6,.14,2.6,o,0,0,0,l),this.box(.14,2.6,2.6,o,0,0,0,l),this.box(2.6,2.6,.14,o,0,0,0,l),this.eye=this.box(.9,.9,.2,this.mat(16736511,0,!0),0,0,1.3),this.body.add(this.eye),this.orbs=[];for(let r=0;r<5;r++){const h=this.box(.5,1.1,.5,a,0,0,0);h.rotation.z=.5,this.orbs.push(h)}this.laser=new At(new Dn(.1,.1,1,6),new be({color:13660415,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Señor del Vacío abre grietas bajo tus pies… ¡muévete!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El vacío se desborda! Su gravedad te atrae")}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1,r=16;if(l>r+2?(this.pos.x+=o/l*4*t,this.pos.z+=a/l*4*t):l<r-5&&(this.pos.x-=o/l*3*t,this.pos.z-=a/l*3*t),this.pos.y+=(e.pos.y+7-this.pos.y)*Math.min(1,t*.9),this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw,this.core.rotation.y+=t*.8,this.core.rotation.x+=t*.3,this.orbs.forEach((d,p)=>{const x=this.t*1.1+p/5*Math.PI*2;d.position.set(Math.cos(x)*2.8,Math.sin(this.t*2+p)*.6,Math.sin(x)*2.8),d.rotation.y=x}),this.riftT-=t,this.riftT<=0&&!e.dead){this.riftT=s===1?4.2:2.8;const d=s===1?1:2;for(let p=0;p<d;p++){const x=e.pos.x+(p?Ve(-5,5):0),g=e.pos.z+(p?Ve(-5,5):0),m=new At(new Dn(3,3,.25,24),new be({color:8401151,transparent:!0,opacity:.25,fog:!1,depthWrite:!1})),y=i.topY(Math.floor(x),Math.floor(g));m.position.set(x,(y>0?y:e.pos.y-1)+1.2,g),this.scene.add(m),this.rifts.push({x,z:g,y:m.position.y,t:-1.2,m,tick:0})}}for(let d=this.rifts.length-1;d>=0;d--){const p=this.rifts[d];p.t+=t,p.t<0?p.m.material.opacity=.18+Math.sin(this.t*14)*.08:(p.m.material.opacity=.7,p.m.material.color.setHex(1706032),p.tick-=t,p.tick<=0&&(p.tick=.45,this.h.burst(p.x+Ve(-2,2),p.y,p.z+Ve(-2,2),[.6,.2,1],5,3)),Math.hypot(e.pos.x-p.x,e.pos.z-p.z)<3.1&&Math.abs(e.pos.y+.5-p.y)<2.2&&!e.dead&&(p.dmgT=(p.dmgT||0)-t,p.dmgT<=0&&(p.dmgT=.5,this.h.hurtPlayer(3,0,0),this.h.effect("levitate",2))),p.t>5&&(this.scene.remove(p.m),this.rifts.splice(d,1)))}this.laserT-=t;const h=he(this.pos.x,this.pos.y,this.pos.z),f=he(e.pos.x,e.pos.y+1,e.pos.z),c=f.clone().sub(h),u=c.length();if(c.normalize(),this.charge>0){const d=s===1?2.1:1.5,p=1-this.charge/d;this.charge-=t,this.laser.material.opacity=.2+p*.7,this.laser.scale.set(.5+p*3,u,.5+p*3),this.laser.position.copy(h).add(f).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(he(0,1,0),c),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.7),!i.raycast(h,c,u)&&!e.dead&&this.h.hurtPlayer(10,c.x*6,c.z*6),this.laserT=s===1?6.5:4)}else this.laser.material.opacity=0,this.laserT<=0&&u<45&&!e.dead&&(this.charge=s===1?2.1:1.5,this.h.sound("hiss",.7));if(s===2&&u<36&&(e.push.x=(this.pos.x-e.pos.x)/l*3.2,e.push.z=(this.pos.z-e.pos.z)/l*3.2),this.tpT-=t,this.tpT<=0&&!e.dead){this.tpT=s===1?10:7,this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.6,.2,1],30,6);const d=Math.random()*Math.PI*2;this.pos.set(e.pos.x+Math.cos(d)*16,e.pos.y+8,e.pos.z+Math.sin(d)*16),this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.6,.2,1],30,6),this.h.sound("pop",1)}s===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=15,this.h.minions()<6&&(this.h.spawnMinion("shulker"),this.h.spawnMinion("shulker"))))}dispose(){for(const t of this.rifts)this.scene.remove(t.m);this.rifts=[],super.dispose()}}class Kv extends bi{constructor(t,e,i){super(t,e,i,{name:"CREEPER TITÁN",type:"creepertitan",maxHp:320,hitbox:{hx:.6,hy:1.8,hz:.6,oy:1.8},scale:2.6,burstColor:[.3,.9,.3]}),this.hw=1.15,this.hh=9,this.fuse=0,this.stun=0,this.mT=12,this.walkA=0,this.green=this.mat(5154894,1060880),this.green2=this.mat(4099646,532488),this.legs=[[-.28,.3],[.28,.3],[-.28,-.3],[.28,-.3]].map(([h,f])=>{const c=this.group(h,.9,f);return this.box(.5,.9,.5,this.green2,0,-.45,0,c),c}),this.box(1,1.6,.6,this.green,0,1.7,0);const s=document.createElement("canvas");s.width=s.height=8;const o=s.getContext("2d");o.fillStyle="#4ea84e",o.fillRect(0,0,8,8),o.fillStyle="#0c1a0c",o.fillRect(1,2,2,2),o.fillRect(5,2,2,2),o.fillRect(3,4,2,2),o.fillRect(2,5,1,2),o.fillRect(5,5,1,2);const a=new Bi(s);a.magFilter=de,a.minFilter=de,a.generateMipmaps=!1,a.colorSpace=si;const l=new gi({map:a,emissive:1060880});this.flashMats.push(l);const r=new At(new Jt(1,1,1),[this.green,this.green,this.green,this.green,l,this.green]);r.position.set(0,3.1,0),this.body.add(r),this.head=r,this.h.toast("¡El Creeper Titán sisea! Aléjate cuando se hinche")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡Un rayo lo carga! Su explosión será colosal"),this.h.strikeNear(this.pos.x,this.pos.z),this.green.emissive.setHex(1061119),this.green2.emissive.setHex(532672),this.flashMats.forEach(t=>t.userData.baseE=void 0)}damageMul(){return this.stun>0?1.8:1}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1;this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*3),this.mT-=t;let r=s===1?2.8:3.6;if(this.stun>0)this.stun-=t,r=0,this.root.rotation.z=Math.sin(this.t*20)*.02;else if(this.fuse>0){this.fuse-=t,r=.8;const f=s===1?3.2:2.2,c=1-this.fuse/f;this.body.scale.setScalar(1+c*.28),this.flash=Math.floor(this.fuse*10)%2===0?.12:0,Math.floor(c*20)%4===0&&this.h.sound("hiss",.3),this.fuse<=0&&(this.body.scale.setScalar(1),this.h.explode(this.pos.x,this.pos.y+3.2,this.pos.z,s===1?9:12,.95),this.h.burst(this.pos.x,this.pos.y+3,this.pos.z,[1,.7,.2],60,12),this.stun=3.6,this.h.toast("¡Está aturdido! Golpéalo ahora"))}else l<15&&!e.dead&&(this.fuse=s===1?3.2:2.2);this.walk(t,i,o,a,l,r),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.1;const h=Math.sin(this.walkA)*.5;this.legs.forEach((f,c)=>f.rotation.x=c%2?-h:h),this.mT<=0&&this.stun<=0&&(this.mT=14,this.h.minions()<6&&(this.h.spawnMinion("creeper"),this.h.spawnMinion("creeper"))),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class $v extends bi{constructor(t,e,i){super(t,e,i,{name:"GÓLEM COLOSAL",type:"colossus",maxHp:420,hitbox:{hx:1.8,hy:2.1,hz:.8,oy:2.1},scale:2,burstColor:[.8,.8,.8]}),this.hw=1.5,this.hh=8,this.state="walk",this.timer=3,this.poundT=6,this.rockT=7,this.novaT=9,this.walkA=0;const s=this.mat(13158600,1052688),o=this.mat(10132122),a=this.mat(4880954);this.legL=this.group(-.4,1.4,0),this.box(.7,1.4,.7,o,0,-.7,0,this.legL),this.legR=this.group(.4,1.4,0),this.box(.7,1.4,.7,o,0,-.7,0,this.legR),this.box(1.9,1.6,1.1,s,0,2.2,0),this.box(1.2,.8,.9,o,0,1.4,0);for(const[l,r]of[[-.5,2.6],[.6,2]])this.box(.4,.8,.12,a,l,r,.58);this.armL=this.group(-1.2,2.9,0),this.box(.6,2.4,.6,s,0,-1.2,0,this.armL),this.box(.8,.8,.8,o,0,-2.5,0,this.armL),this.armR=this.group(1.2,2.9,0),this.box(.6,2.4,.6,s,0,-1.2,0,this.armR),this.box(.8,.8,.8,o,0,-2.5,0,this.armR),this.head=this.group(0,3.4,.1),this.box(.8,.9,.8,s,0,.3,0,this.head),this.box(.2,.4,.25,o,0,.2,.5,this.head),this.eyes=[-1,1].map(l=>this.box(.18,.1,.04,this.mat(15790208,0,!0),l*.2,.5,.42,this.head)),this.h.toast("El Gólem Colosal despierta: ¡salta sus ondas de choque!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡Sus ojos arden en rojo!"),this.eyes.forEach(t=>t.material.color.setHex(16719904)),this.novaT=1.5}damageMul(){return .85}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(o,a)||1;this.timer-=t,this.poundT-=t,this.rockT-=t,this.novaT-=t,this.yaw+=hi(Math.atan2(o,a)-this.yaw)*Math.min(1,t*3);let r=s===1?2.4:3.2;if(this.state==="walk")if(this.timer<=0&&l<8.5&&!e.dead)this.state="punch",this.timer=.8;else if(this.poundT<=0&&l<18)this.state="pound",this.timer=1.1,this.poundT=s===1?7:4.5;else if(this.rockT<=0&&l>9){this.rockT=s===1?7:4.5;const f=he(this.pos.x,this.pos.y+6,this.pos.z);this.shootProj(f,he(e.pos.x,e.pos.y+1,e.pos.z).sub(f),{speed:14,size:1.6,color:9079434,emissive:2105376,radius:2.2,ds:.4}),this.armR.rotation.x=-2.6}else s===2&&this.novaT<=0&&this.onGround&&(this.novaT=8,this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:20,speed:13,dmg:9,color:14737663}),this.h.sound("roar",.7));else this.state==="punch"?(r=0,this.armR.rotation.x=-2.8*Math.min(1,(.8-this.timer)*1.8),this.timer<=0&&(this.state="walk",this.timer=s===1?2.4:1.6,l<9.5&&!e.dead&&this.h.hurtPlayer(14,o/l*13,a/l*13),this.h.sound("hit",1),this.armR.rotation.x=.8)):this.state==="pound"&&(r=0,this.armL.rotation.x=this.armR.rotation.x=-3*Math.min(1,(1.1-this.timer)*1.2),this.timer<=0&&(this.state="walk",this.timer=1.4,this.armL.rotation.x=this.armR.rotation.x=.7,this.h.sound("explode",.8),this.h.burst(this.pos.x,this.pos.y+.4,this.pos.z,[.6,.6,.6],36,9),this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:s===1?16:22,speed:12,dmg:10,color:16777215})));this.walk(t,i,o,a,l,r),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.3;const h=Math.sin(this.walkA)*.5;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.state==="walk"&&(this.armL.rotation.x+=(-h*.6-this.armL.rotation.x)*Math.min(1,t*5),this.armR.rotation.x+=(h*.6-this.armR.rotation.x)*Math.min(1,t*5)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}const ho={storm:{name:"Tormenta Wither",color:"#b060ff",hp:360,desc:"Colosal masa con tres cabezas. Rayo tractor, cráneos explosivos y un bloque de comandos como punto débil.",icon:"🌀"},dragon:{name:"Ender Dragon",color:"#e040ff",hp:300,desc:"Vuela en círculos, pica en picado y lanza aliento. Destruye sus 4 cristales para poder herirlo.",icon:"🐉",make:(n,t,e,i)=>new Uv(n,t,e,i),up:16},wither:{name:"Wither",color:"#9aa8c8",hp:300,desc:"Lanza cráneos negros que envenenan. Con poca vida se acoraza y te persigue de cerca.",icon:"💀",make:(n,t,e)=>new Ov(n,t,e),up:8},warden:{name:"Warden",color:"#3be8c8",hp:360,desc:"Ciego pero letal. Golpes devastadores y explosión sónica a distancia. Oscurece la pantalla.",icon:"👁",make:(n,t,e)=>new zv(n,t,e),up:0,ground:!0},guardian:{name:"Guardián Ancestral",color:"#70fff0",hp:240,desc:"Su láser carga y causa fatiga de minería. Sus espinas devuelven daño al golpearlo.",icon:"🐟",make:(n,t,e)=>new Fv(n,t,e),up:6}};Object.assign(ho,{ravager:{name:"Devastador",color:"#b09070",hp:280,desc:"Bestia blindada que ruge y embiste arrasando todo. Tras cada embestida queda aturdido: ¡ataca entonces!",icon:"🐗",make:(n,t,e)=>new Bv(n,t,e),ground:!0,dist:16},evoker:{name:"Invocador",color:"#e0c040",hp:220,desc:"Hechicero que se teletransporta, lanza hileras de colmillos y llama a vex voladores (se pueden golpear).",icon:"🧙",make:(n,t,e)=>new kv(n,t,e),up:4,dist:14},ghast:{name:"Ghast Gigante",color:"#f4f4f4",hp:200,desc:"Flota llorando y escupe enormes bolas de fuego. ¡Golpéalas para devolvérselas y hacerle un daño brutal!",icon:"👻",make:(n,t,e)=>new Hv(n,t,e),up:14,dist:26},herobrine:{name:"Herobrine",color:"#ffffff",hp:400,desc:"Ojos blancos, teletransportes a tu espalda, rayos y oscuridad. Con poca vida levita. El jefe final.",icon:"👤",make:(n,t,e)=>new Gv(n,t,e),ground:!0,dist:14},slimeking:{name:"Rey Slime",color:"#60e060",hp:260,desc:"Gigantesco, salta y aplasta con ondas expansivas. Se divide en slimes al perder vida.",icon:"🟢",make:(n,t,e)=>new Vv(n,t,e),ground:!0,dist:18}});Object.assign(ho,{blazeking:{name:"Rey Blaze",color:"#ff9a20",hp:280,desc:"Señor del fuego del Nether: abanicos de bolas de fuego, ondas de llamas que hay que saltar y blazes de refuerzo.",icon:"🔥",make:(n,t,e)=>new Wv(n,t,e),up:8,dist:20},piglinking:{name:"Rey Piglin",color:"#e8c040",hp:340,desc:"Hacha gigante, saltos que parten el suelo, torbellino de oro y una guardia de piglins.",icon:"🪓",make:(n,t,e)=>new Xv(n,t,e),ground:!0,dist:16},endertitan:{name:"Enderman Titán",color:"#c060ff",hp:380,desc:"Gigantesco: se teletransporta, barre con los brazos y lanza rocas. ¡No le mires a los ojos!",icon:"🕴",make:(n,t,e)=>new qv(n,t,e),ground:!0,dist:24},voidlord:{name:"Señor del Vacío",color:"#a050ff",hp:300,desc:"Abre grietas que dañan y elevan, dispara un láser con carga y su gravedad te arrastra en la fase final.",icon:"🌀",make:(n,t,e)=>new Yv(n,t,e),up:6,dist:20},creepertitan:{name:"Creeper Titán",color:"#60e060",hp:320,desc:"Se hincha y explota con un radio colosal. Tras estallar queda aturdido: es tu momento.",icon:"💥",make:(n,t,e)=>new Kv(n,t,e),ground:!0,dist:30},colossus:{name:"Gólem Colosal",color:"#d0d0e0",hp:420,desc:"Puñetazos devastadores, golpes al suelo que lanzan ondas de choque y rocas. Furia roja en la fase 2.",icon:"🗿",make:(n,t,e)=>new $v(n,t,e),ground:!0,dist:22}});const jv=["storm","dragon","wither","warden","guardian","ravager","evoker","ghast","herobrine","slimeking","colossus","creepertitan","blazeking","piglinking","endertitan","voidlord"],Hs=[{id:"logs",group:"Aprendiz",title:"Primeros pasos",desc:"Recoge 3 troncos",ev:"collect",target:L.LOG,n:3,reward:[[I.APPLE,4]],xp:8},{id:"table",group:"Aprendiz",title:"Carpintero",desc:"Fabrica una mesa de crafteo",ev:"craft",target:L.TABLE,n:1,reward:[[L.PLANKS,16]],xp:8},{id:"pick",group:"Aprendiz",title:"Minero",desc:"Fabrica un pico de piedra",ev:"craft",target:111,n:1,reward:[[I.COAL,8]],xp:10},{id:"torch",group:"Aprendiz",title:"Luz en la oscuridad",desc:"Fabrica 4 antorchas",ev:"craft",target:L.TORCH,n:4,reward:[[I.COAL,8]],xp:10},{id:"iron",group:"Aprendiz",title:"Fundidor",desc:"Consigue un lingote de hierro",ev:"collect",target:I.IRON,n:1,reward:[[I.COAL,16]],xp:15},{id:"diamond",group:"Aprendiz",title:"¡Diamantes!",desc:"Consigue un diamante",ev:"collect",target:I.DIAMOND,n:1,reward:[[I.GOLD,6]],xp:25},{id:"k_zombie",group:"Cazador",title:"Cazador de zombis",desc:"Derrota 3 zombis",ev:"kill",target:"zombie",n:3,reward:[[I.STEAK,4]],xp:15},{id:"k_skeleton",group:"Cazador",title:"Huesos rotos",desc:"Derrota 3 esqueletos",ev:"kill",target:"skeleton",n:3,reward:[[I.STEAK,4]],xp:18},{id:"k_creeper",group:"Cazador",title:"Silencio…",desc:"Derrota 2 creepers",ev:"kill",target:"creeper",n:2,reward:[[I.GOLD,4]],xp:18},{id:"k_spider",group:"Cazador",title:"Aracnofobia",desc:"Derrota 2 arañas",ev:"kill",target:"spider",n:2,reward:[[I.GOLD,4]],xp:16},{id:"pearl",group:"Cazador",title:"Ojos que miran",desc:"Consigue una perla de Ender",ev:"collect",target:I.PEARL,n:1,reward:[[I.DIAMOND,3]],xp:30},{id:"obsidian",group:"Dimensiones",title:"Cristal volcánico",desc:"Consigue obsidiana (8 adoquines + 1 diamante = 2)",ev:"collect",target:L.OBSIDIAN,n:1,reward:[[I.COAL,12]],xp:20},{id:"d_nether",group:"Dimensiones",title:"Una puerta al infierno",desc:"Entra al Nether (marco 4x5 de obsidiana + encendedor)",ev:"dim",target:"nether",n:1,reward:[[I.GOLD,8],[I.DIAMOND,4]],xp:80},{id:"k_blaze",group:"Dimensiones",title:"Fuego cruzado",desc:"Derrota a 2 blazes",ev:"kill",target:"blaze",n:2,reward:[[I.DIAMOND,4]],xp:40},{id:"k_piglin",group:"Dimensiones",title:"Oro maldito",desc:"Derrota a 3 piglins zombificados",ev:"kill",target:"piglin",n:3,reward:[[I.GOLD,8]],xp:35},{id:"k_wskel",group:"Dimensiones",title:"Huesos negros",desc:"Derrota a 2 esqueletos Wither",ev:"kill",target:"witherskeleton",n:2,reward:[[I.DIAMOND,4]],xp:50},{id:"k_ghast",group:"Dimensiones",title:"Lágrimas de fuego",desc:"Derrota a un Ghast",ev:"kill",target:"ghast",n:1,reward:[[I.GOLD,10]],xp:50},{id:"k_shulker",group:"Dimensiones",title:"Caja sorpresa",desc:"Derrota a 2 shulkers",ev:"kill",target:"shulker",n:2,reward:[[I.PEARL,2]],xp:60},{id:"chests",group:"Dimensiones",title:"Cazatesoros",desc:"Abre 3 cofres de fortalezas o ciudades del End",ev:"chest",target:"x",n:3,reward:[[I.DIAMOND,4],[I.GOLD,8]],xp:70},{id:"elytra",group:"Dimensiones",title:"¡A volar!",desc:"Consigue unos élitros (naves de las ciudades del End)",ev:"collect",target:I.ELYTRA,n:1,reward:[[I.STAR,1]],xp:120},{id:"d_end",group:"Dimensiones",title:"El fin de todo",desc:"Entra al End (12 marcos con ojo de Ender)",ev:"dim",target:"end",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:150},{id:"b_storm",group:"Jefes",title:"Domador de la tormenta",desc:"Derrota a la Tormenta Wither",ev:"boss",target:"storm",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:150},{id:"b_dragon",group:"Jefes",title:"¿El final?",desc:"Derrota al Ender Dragon",ev:"boss",target:"dragon",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:150},{id:"b_wither",group:"Jefes",title:"Más allá de los huesos",desc:"Derrota al Wither",ev:"boss",target:"wither",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:150},{id:"b_warden",group:"Jefes",title:"Silencio absoluto",desc:"Derrota al Warden",ev:"boss",target:"warden",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:150},{id:"b_guardian",group:"Jefes",title:"La mirada del océano",desc:"Derrota al Guardián Ancestral",ev:"boss",target:"guardian",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:150},{id:"b_ravager",group:"Jefes",title:"Contra la embestida",desc:"Derrota al Devastador",ev:"boss",target:"ravager",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:150},{id:"b_evoker",group:"Jefes",title:"Colmillos y vex",desc:"Derrota al Invocador",ev:"boss",target:"evoker",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:150},{id:"b_ghast",group:"Jefes",title:"Devuélvesela",desc:"Derrota al Ghast Gigante",ev:"boss",target:"ghast",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:150},{id:"b_slime",group:"Jefes",title:"Aplastado",desc:"Derrota al Rey Slime",ev:"boss",target:"slimeking",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:150},{id:"b_hero",group:"Jefes",title:"Más allá del mito",desc:"Derrota a Herobrine",ev:"boss",target:"herobrine",n:1,reward:[[I.STAR,2],[I.DIAMOND,16]],xp:250},{id:"b_colossus",group:"Jefes",title:"Hierro contra hierro",desc:"Derrota al Gólem Colosal",ev:"boss",target:"colossus",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:160},{id:"b_creepert",group:"Jefes",title:"Silencio… colosal",desc:"Derrota al Creeper Titán",ev:"boss",target:"creepertitan",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:160},{id:"b_blazek",group:"Jefes",title:"Rey de las llamas",desc:"Derrota al Rey Blaze",ev:"boss",target:"blazeking",n:1,reward:[[I.STAR,1],[I.DIAMOND,8]],xp:160},{id:"b_piglink",group:"Jefes",title:"Corona de oro",desc:"Derrota al Rey Piglin",ev:"boss",target:"piglinking",n:1,reward:[[I.STAR,2],[I.DIAMOND,10]],xp:180},{id:"b_endert",group:"Jefes",title:"No mires a los ojos",desc:"Derrota al Enderman Titán",ev:"boss",target:"endertitan",n:1,reward:[[I.STAR,2],[I.DIAMOND,12]],xp:200},{id:"b_voidl",group:"Jefes",title:"Al borde del vacío",desc:"Derrota al Señor del Vacío",ev:"boss",target:"voidlord",n:1,reward:[[I.STAR,2],[I.DIAMOND,12]],xp:200},{id:"master",group:"Jefes",title:"★ LEYENDA DE LOS JEFES ★",desc:"Derrota a los 16 jefes de Minecraft",ev:"bossall",target:null,n:16,reward:[[I.STAR,5],[I.DIAMOND,32],[I.GOLD,32]],xp:500}];class Zv{constructor(t){this.h=t,this.progress={},this.done={},this.bosses=new Set}event(t,e,i=1){for(const s of Hs)this.done[s.id]||s.ev!==t||s.target!==null&&s.target!==e||(this.progress[s.id]=Math.min(s.n,(this.progress[s.id]||0)+i),this.progress[s.id]>=s.n&&this.complete(s));if(t==="boss"){this.bosses.add(e);const s=Hs.find(o=>o.id==="master");this.done.master||(this.progress.master=this.bosses.size,this.bosses.size>=s.n&&this.complete(s))}}complete(t){this.done[t.id]=!0,this.progress[t.id]=t.n,this.h.reward(t.reward),this.h.xp(t.xp),this.h.sound("craft"),this.h.toast(t.id==="master"?"🏆 ¡ERES UNA LEYENDA! Has derrotado a todos los jefes":`✔ Misión completada: ${t.title}`)}active(t=3){return Hs.filter(e=>!this.done[e.id]).slice(0,t)}total(){return Hs.length}completed(){return Hs.filter(t=>this.done[t.id]).length}toJSON(){return{progress:this.progress,done:this.done,bosses:[...this.bosses]}}load(t){t&&(this.progress=t.progress||{},this.done=t.done||{},this.bosses=new Set(t.bosses||[]))}}const wo=420,To=24;class Jv{constructor(t){this.pos=new Float32Array(wo*3),this.vel=new Float32Array(wo*3);for(let i=0;i<wo;i++)this.reset(i,!0);const e=new je;e.setAttribute("position",new Si(new Float32Array(wo*3),3)),this.pts=new Yh(e,new Ea({color:16747056,size:3,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1,blending:Go})),this.pts.frustumCulled=!1,this.pts.visible=!1,t.add(this.pts),this.t=0}reset(t,e){this.pos[t*3]=(Math.random()-.5)*2*To,this.pos[t*3+1]=e?(Math.random()-.5)*2*To:-To,this.pos[t*3+2]=(Math.random()-.5)*2*To,this.vel[t*3]=(Math.random()-.5)*.6,this.vel[t*3+1]=.4+Math.random()*1.2,this.vel[t*3+2]=(Math.random()-.5)*.6}update(t,e,i){const s=i==="nether"||i==="end";if(this.pts.visible=s,!s)return;this.t+=t;const o=i==="nether",a=this.pts.geometry.attributes.position.array;this.pts.material.color.set(o?16742952:11567359),this.pts.material.size=o?3:2.5;for(let l=0;l<wo;l++){const r=l*3;this.pos[r]+=(this.vel[r]+Math.sin(this.t+l)*.3)*t,this.pos[r+1]+=this.vel[r+1]*(o?1:.5)*t,this.pos[r+2]+=(this.vel[r+2]+Math.cos(this.t*.8+l)*.3)*t,this.pos[r+1]>To&&this.reset(l,!1),a[r]=e.position.x+this.pos[r],a[r+1]=e.position.y+this.pos[r+1],a[r+2]=e.position.z+this.pos[r+2]}this.pts.geometry.attributes.position.needsUpdate=!0}}const Bf=["✕ Cruz","◯ Círculo","▢ Cuadrado","△ Triángulo","L1","R1","L2","R2","Share","Options","L3","R3","Cruceta ↑","Cruceta ↓","Cruceta ←","Cruceta →","Botón PS","Panel táctil"],nd=[{id:"jump",label:"Saltar / nadar / subir",def:0},{id:"drop",label:"Tirar objeto · Atrás en menús",def:1},{id:"fall",label:"Descender (vuelo) · Clic derecho en menús",def:2},{id:"inventory",label:"Inventario",def:3},{id:"prev",label:"Ranura anterior",def:4},{id:"next",label:"Ranura siguiente",def:5},{id:"use",label:"Usar / colocar / comer",def:6},{id:"attack",label:"Romper / atacar",def:7},{id:"summon",label:"Invocar jefes y mobs",def:8},{id:"pause",label:"Pausa",def:9},{id:"sprint",label:"Correr (alternar)",def:10},{id:"camera",label:"Cambiar cámara",def:11},{id:"fly",label:"Volar (creativo)",def:12},{id:"quests",label:"Misiones",def:13},{id:"weather",label:"Cambiar clima",def:14},{id:"debug",label:"Datos de depuración (F3)",def:15},{id:"mode",label:"Creativo / Supervivencia",def:17},{id:"config",label:"Configurar el mando",def:16}],vh=()=>({map:Object.fromEntries(nd.map(n=>[n.id,n.def])),deadzone:.16,lookX:3.4,lookY:2.6,curve:1.7,invertY:!1,rumble:!0});class Qv{constructor(t){this.cfg=t,this.prev=[],this.connected=!1,this.id="",this.listening=null,this.last={connected:!1,down:[],edge:[],axes:[]}}pad(){const t=navigator.getGamepads?navigator.getGamepads():[];let e=null;for(const i of t)if(i&&i.connected){if(i.mapping==="standard")return i;e=e||i}return e}poll(){const t=this.pad();if(!t)return this.connected=!1,this.last={connected:!1,down:[],edge:[],axes:[],any:!1},this.last;this.connected=!0,this.id=t.id;const e=[],i=[];for(let a=0;a<t.buttons.length;a++){const l=t.buttons[a],r=!!(l.pressed||l.value>.5);e[a]=r,i[a]=r&&!this.prev[a]}this.prev=e;const s=Array.from(t.axes),o=Math.hypot(s[0]||0,s[1]||0)>this.cfg.deadzone+.1||Math.hypot(s[2]||0,s[3]||0)>this.cfg.deadzone+.1;if(this.listening){const a=i.findIndex(Boolean);if(a>=0){const l=this.listening;this.listening=null,l(a)}return this.last={connected:!0,down:e,edge:[],axes:s,any:!0,busy:!0,gp:t},this.last}return this.last={connected:!0,down:e,edge:i,axes:s,any:i.some(Boolean)||o,gp:t},this.last}listen(t){this.listening=t}stick(t,e,i,s=this.cfg.curve){const o=t[e]||0,a=t[i]||0,l=Math.hypot(o,a),r=this.cfg.deadzone;if(l<r)return{x:0,y:0,m:0};const h=(Math.min(1,l)-r)/(1-r),f=Math.pow(h,s)/l;return{x:o*f,y:a*f,m:h}}down(t){return!!this.last.down[this.cfg.map[t]]}edge(t){return!!this.last.edge[this.cfg.map[t]]}rumble(t,e,i){if(!this.cfg.rumble||!this.connected)return;const s=this.last.gp,o=s&&(s.vibrationActuator||s.hapticActuators&&s.hapticActuators[0]);try{s&&s.vibrationActuator&&s.vibrationActuator.playEffect?s.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:i,weakMagnitude:e,strongMagnitude:t}):o&&o.pulse&&o.pulse(t,i)}catch{}}}const Vn=.3,kf=1.8,vl=1.62,Hf=28,t_=8.6,e_=4.4,i_=7,n_=12;class s_{constructor(t,e){this.world=t,this.camera=e,this.pos=new P(0,40,0),this.vel=new P,this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headUnder=!1,this.keys=new Set,this.mode="survival",this.hp=20,this.food=20,this.air=10,this.fallStart=null,this.foodTimer=0,this.regenTimer=0,this.airTimer=0,this.starveTimer=0,this.invuln=0,this.dead=!1,this.stepDist=0,this.events={onHurt:null,onLand:null,onStep:null,onSplash:null,onDeath:null,onVoid:null},this.inLava=!1,this.analog=null,this.canGlide=!1,this.gliding=!1,this.prevSpace=!1,this.spawn=new P,this.wind={x:0,z:0},this.push={x:0,y:0,z:0},this.effects={poison:0,fatigue:0,burn:0,levitate:0},this.poisonT=0,this.burnT=0}collides(t,e,i){const s=this.world;for(let o=Math.floor(e);o<=Math.floor(e+kf-.001);o++)for(let a=Math.floor(i-Vn);a<=Math.floor(i+Vn);a++)for(let l=Math.floor(t-Vn);l<=Math.floor(t+Vn);l++)if(s.isSolid(l,o,a))return!0;return!1}intersectsBlock(t,e,i){return this.pos.x+Vn>t&&this.pos.x-Vn<t+1&&this.pos.y+kf>e&&this.pos.y<e+1&&this.pos.z+Vn>i&&this.pos.z-Vn<i+1}get eye(){return new P(this.pos.x,this.pos.y+vl,this.pos.z)}lookDir(){return new P(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}damage(t,e=0,i=0){this.mode==="creative"||this.dead||this.invuln>0||(this.hp=Math.max(0,this.hp-t),this.invuln=.5,this.vel.x+=e,this.vel.z+=i,(e||i)&&(this.vel.y=Math.max(this.vel.y,5)),this.events.onHurt&&this.events.onHurt(t),this.hp<=0&&(this.dead=!0,this.events.onDeath&&this.events.onDeath()))}heal(t){this.hp=Math.min(20,this.hp+t)}eat(t){this.food=Math.min(20,this.food+t)}respawn(){this.hp=20,this.food=20,this.air=10,this.dead=!1,this.invuln=2,this.effects.poison=0,this.effects.fatigue=0,this.effects.burn=0,this.effects.levitate=0,this.pos.copy(this.spawn),this.vel.set(0,0,0),this.fallStart=null}update(t){if(t=Math.min(t,.05),this.dead){this.camera.position.set(this.pos.x,this.pos.y+.4,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,.6,"YXZ");return}const e=this.keys,i=this.world;this.invuln=Math.max(0,this.invuln-t);const s=Math.floor(this.pos.x),o=Math.floor(this.pos.z),a=this.inWater;this.inWater=i.isLiquid(s,Math.floor(this.pos.y+.3),o),this.inLava=i.getBlock(s,Math.floor(this.pos.y+.3),o)===L.LAVA||i.getBlock(s,Math.floor(this.pos.y+1.2),o)===L.LAVA,this.inLava&&this.mode==="survival"&&(this.effects.burn=Math.max(this.effects.burn,6),this.damage(4));const l=i.getBlock(s,Math.floor(this.pos.y-.15),o)===L.SOUL_SAND;this.headUnder=i.isLiquid(s,Math.floor(this.pos.y+vl),o),this.inWater&&!a&&this.vel.y<-4&&this.events.onSplash&&this.events.onSplash();const r=this.analog&&(Math.abs(this.analog.x)>.001||Math.abs(this.analog.y)>.001)?this.analog:null,h=r?r.y:(e.has("KeyW")?1:0)-(e.has("KeyS")?1:0),f=r?r.x:(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),c=e.has("ShiftLeft")&&h>0&&!(this.mode==="survival"&&this.food<=6);let u=this.flying?n_:c?i_:e_;this.inWater&&!this.flying&&(u*=.6),l&&!this.flying&&(u*=.55);const d=Math.sin(this.yaw),p=Math.cos(this.yaw);let x=-d*h+p*f,g=-p*h-d*f;const m=Math.hypot(x,g);m>0&&(!r||m>1)&&(x/=m,g/=m),this.gliding||(this.vel.x=x*u+(this.inWater?0:this.wind.x),this.vel.z=g*u+(this.inWater?0:this.wind.z));const y=e.has("Space");if(y&&!this.prevSpace&&!this.onGround&&!this.inWater&&!this.flying&&this.canGlide&&!this.gliding){this.gliding=!0;const R=this.lookDir();this.vel.set(R.x*9,Math.max(R.y*9,-2),R.z*9)}if(this.prevSpace=y,this.gliding&&(this.onGround||this.inWater||this.flying||!this.canGlide)&&(this.gliding=!1),this.gliding){const R=this.lookDir(),M=Math.min(1,t*1.4);this.vel.x+=(R.x*22-this.vel.x)*M,this.vel.z+=(R.z*22-this.vel.z)*M,this.vel.y+=(R.y*20-1.6-this.vel.y)*Math.min(1,t*1.1),this.fallStart=null}else this.flying?(this.vel.y=((e.has("Space")?1:0)-(e.has("KeyQ")?1:0))*u,this.fallStart=null):this.inWater?(this.vel.y-=Hf*.25*t,this.vel.y=Math.max(this.vel.y,-3)*(1-2*t),e.has("Space")&&(this.vel.y=Math.min(this.vel.y+22*t,3.6)),this.fallStart=null):(this.vel.y-=Hf*t,this.vel.y<-50&&(this.vel.y=-50),e.has("Space")&&this.onGround&&(this.vel.y=t_,this.onGround=!1));this.vel.x+=this.push.x,this.vel.z+=this.push.z,this.vel.y+=this.push.y*t,this.effects.levitate>0&&(this.effects.levitate-=t,this.vel.y=Math.min(this.vel.y+24*t,3.2),this.fallStart=null);const S=this.onGround,v=2,D=t/v;this.onGround=!1;const T=this.pos.x,w=this.pos.z;for(let R=0;R<v;R++)for(const M of["x","z","y"]){const _=this.vel[M]*D;_!==0&&(this.pos[M]+=_,this.collides(this.pos.x,this.pos.y,this.pos.z)&&(this.pos[M]-=_,M==="y"&&this.vel.y<0&&(this.onGround=!0),this.vel[M]=0))}if(!this.onGround&&!this.inWater&&!this.flying&&(this.fallStart===null||this.pos.y>this.fallStart)&&(this.fallStart=this.pos.y),this.onGround&&!S&&this.fallStart!==null){const R=this.fallStart-this.pos.y;R>3&&this.mode==="survival"&&this.damage(Math.floor(R-3)),R>1.2&&this.events.onLand&&this.events.onLand(R),this.fallStart=null}if(this.onGround&&(this.fallStart=null),this.onGround&&!this.flying&&(this.stepDist+=Math.hypot(this.pos.x-T,this.pos.z-w),this.stepDist>(c?2.2:1.7)&&(this.stepDist=0,this.events.onStep&&this.events.onStep())),this.pos.y<-30&&(this.events.onVoid?this.events.onVoid():(this.pos.y=70,this.vel.set(0,0,0),this.damage(4))),this.effects.fatigue>0&&(this.effects.fatigue-=t),this.effects.burn>0&&(this.inWater&&!this.inLava?this.effects.burn=0:(this.effects.burn-=t,this.burnT+=t,this.burnT>=.8&&(this.burnT=0,this.mode==="survival"&&this.damage(1)))),this.effects.poison>0&&(this.effects.poison-=t,this.poisonT+=t,this.poisonT>=1&&(this.poisonT=0,this.mode==="survival"&&this.hp>1&&(this.hp-=1,this.events.onHurt&&this.events.onHurt(1)))),this.mode==="survival"){this.headUnder?(this.airTimer+=t,this.airTimer>=1&&(this.airTimer=0,this.air>0?this.air--:this.damage(2))):(this.airTimer=0,this.air=Math.min(10,this.air+t*6));const R=Math.hypot(this.vel.x,this.vel.z)>.1;this.foodTimer+=t*(c?3:R?1:.25),this.foodTimer>22&&(this.foodTimer=0,this.food=Math.max(0,this.food-1)),this.regenTimer+=t,this.food>=18&&this.hp<20&&this.regenTimer>3?(this.regenTimer=0,this.heal(1),this.foodTimer+=6):this.food<=0&&this.regenTimer>4&&(this.regenTimer=0,this.hp>1&&this.damage(1))}else this.air=10,this.hp=20,this.food=20;this.camera.position.set(this.pos.x,this.pos.y+vl,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}class o_{constructor(){this.slots=Array(36).fill(null),this.selected=0}held(){return this.slots[this.selected]}add(t,e=1){const i=Sn(t);for(const s of this.slots)if(s&&s.id===t&&s.n<i){const o=Math.min(e,i-s.n);if(s.n+=o,e-=o,!e)return 0}for(let s=0;s<36&&e>0;s++)if(!this.slots[s]){const o=Math.min(e,i);this.slots[s]={id:t,n:o,d:0},e-=o}return e}canAdd(t){const e=Sn(t);return this.slots.some(i=>!i||i.id===t&&i.n<e)}consumeHeld(t=1){const e=this.slots[this.selected];e&&(e.n-=t,e.n<=0&&(this.slots[this.selected]=null))}wearHeld(t=1){const e=this.slots[this.selected],i=vs(e);return i?(e.d=(e.d||0)+t,e.d>=i.dur?(this.slots[this.selected]=null,!0):!1):!1}toJSON(){return{slots:this.slots,selected:this.selected}}load(t){t&&(this.slots=t.slots,this.selected=t.selected||0)}}const r_=600,Gf=new St(1,1,1),a_=new St(2316488),l_=new St(7370367),h_=new St(14542591),c_=new St(8900331),f_=new St(461596),u_=new St(16747088),_l=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function d_(){const e=Array.from({length:64},()=>Math.random()),i=(r,h)=>e[(h%8+8)%8*8+(r%8+8)%8],s=document.createElement("canvas");s.width=s.height=64;const o=s.getContext("2d"),a=o.createImageData(64,64);for(let r=0;r<64;r++)for(let h=0;h<64;h++){const f=h/64*8,c=r/64*8,u=Math.floor(f),d=Math.floor(c),p=f-u,x=c-d,g=p*p*(3-2*p),m=x*x*(3-2*x),y=(i(u,d)*(1-g)+i(u+1,d)*g)*(1-m)+(i(u,d+1)*(1-g)+i(u+1,d+1)*g)*m,S=(r*64+h)*4,v=y>.56?215:0;a.data[S]=a.data[S+1]=a.data[S+2]=255,a.data[S+3]=v}o.putImageData(a,0,0);const l=new Bi(s);return l.wrapS=l.wrapT=ta,l.magFilter=de,l.minFilter=de,l.generateMipmaps=!1,l}function Vf(n){const t=document.createElement("canvas");t.width=t.height=16,n(t.getContext("2d"));const e=new Bi(t);return e.magFilter=de,e.minFilter=de,e.generateMipmaps=!1,e}class p_{constructor(t,e,i){this.scene=t,this.camera=e,this.materials=i,this.time=.08,this.dim="overworld",this.daylight=1,this.wet=0,this.flash=0,this.cloudX=0,this.cloudZ=0,this.root=new Se,t.add(this.root),this.domeMat=new mi({side:Mi,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{top:{value:new St(4884696)},hor:{value:new St(10147056)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = normalize(vP).y; float t = smoothstep(-0.02, 0.6, h); gl_FragColor = vec4(mix(hor, top, t), 1.0); }"}),this.dome=new At(new Kh(420,24,14),this.domeMat),this.dome.renderOrder=-30,this.root.add(this.dome);const s=document.createElement("canvas");s.width=s.height=128;const o=s.getContext("2d"),a=o.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,240,180,0.9)"),a.addColorStop(.25,"rgba(255,200,110,0.35)"),a.addColorStop(1,"rgba(255,180,80,0)"),o.fillStyle=a,o.fillRect(0,0,128,128),this.glow=new ku(new Xh({map:new Bi(s),blending:Go,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),this.glow.scale.set(260,260,1),this.glow.renderOrder=-11,this.root.add(this.glow);const l=Vf(u=>{u.fillStyle="#fff6b0",u.fillRect(0,0,16,16),u.fillStyle="#ffe14a",u.fillRect(2,2,12,12),u.fillStyle="#fffbe0",u.fillRect(5,5,6,6)}),r=Vf(u=>{u.fillStyle="#e8ecf2",u.fillRect(0,0,16,16),u.fillStyle="#b8bfcc",u.fillRect(3,4,3,3),u.fillRect(9,8,4,3),u.fillRect(5,11,2,2)}),h=(u,d)=>{const p=new At(new Cn(d,d),new be({map:u,transparent:!0,fog:!1,depthWrite:!1,depthTest:!1}));return p.renderOrder=-10,this.root.add(p),p};this.sun=h(l,60),this.moon=h(r,40);const f=new Float32Array(900*3);for(let u=0;u<900;u++){const d=Math.random()*2-1,p=Math.random()*Math.PI*2,x=Math.sqrt(1-d*d);f[u*3]=Math.cos(p)*x*300,f[u*3+1]=d*300,f[u*3+2]=Math.sin(p)*x*300}const c=new je;c.setAttribute("position",new Si(f,3)),this.starMat=new Ea({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,fog:!1,depthWrite:!1}),this.stars=new Yh(c,this.starMat),this.stars.renderOrder=-11,this.root.add(this.stars),this.cloudTex=d_(),this.cloudMat=new be({map:this.cloudTex,transparent:!0,fog:!1,depthWrite:!1,side:Ci}),this.clouds=new At(new Cn(900,900),this.cloudMat),this.clouds.rotation.x=-Math.PI/2,t.add(this.clouds),this.cloudMat2=new be({map:this.cloudTex.clone(),transparent:!0,fog:!1,depthWrite:!1,side:Ci}),this.cloudMat2.map.needsUpdate=!0,this.clouds2=new At(new Cn(900,900),this.cloudMat2),this.clouds2.rotation.x=-Math.PI/2,t.add(this.clouds2),this.hemi=new zx(12572927,8022608,2),this.sunLight=new Hx(16773853,2.8),this.shadowExt=64,this.shadowOn=!1,t.add(this.hemi,this.sunLight,this.sunLight.target),this.lightDir=new P(.5,1,.3).normalize(),this.sky=new St,this.tint=new St}setShadows(t,e,i){const s=this.sunLight,o=s.shadow.mapSize.x!==e||this.shadowExt!==i;if(this.shadowOn=t,this.shadowExt=i,t){s.shadow.mapSize.set(e,e);const a=s.shadow.camera;a.left=-i,a.right=i,a.top=i,a.bottom=-i,a.near=10,a.far=340,a.updateProjectionMatrix(),s.shadow.bias=-4e-4,s.shadow.normalBias=.35*(i/64)*(2048/e)**.5,s.shadow.radius=2,o&&s.shadow.map&&(s.shadow.map.dispose(),s.shadow.map=null)}}updateOther(t,e,i,s){const o=this.dim==="nether";this.daylight=0,this.wet=0,this.flash=0;const a=o?new St(5903368):new St(1838894),l=o?new St(1836291):new St(262666);s&&o&&(a.set(11024392),l.set(6297600)),this.sky.copy(o?new St(3804166):new St(1182236)),s&&o&&this.sky.set(11024392),this.scene.background=this.sky,this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:i*(o?.18:.5),this.scene.fog.far=s?o?5:18:i*(o?.75:1.1),this.domeMat.uniforms.hor.value.copy(a),this.domeMat.uniforms.top.value.copy(l),this.root.position.copy(this.camera.position),this.sun.visible=this.moon.visible=this.glow.visible=!1,this.clouds.visible=this.clouds2.visible=!1,this.stars.visible=!o,this.starMat.opacity=o?0:1,this.starMat.size=2.4,this.stars.rotation.y+=t*.01,this.hemi.color.set(o?16747098:11047167),this.hemi.groundColor.set(o?6955016:2628672),this.hemi.intensity=o?1.9:1.1,this.sunLight.color.set(o?16738864:10125567),this.sunLight.intensity=o?.35:.7,this.sunLight.castShadow=!1,this.lightDir.set(.3,1,.2).normalize(),this.sunLight.target.position.copy(e),this.sunLight.position.set(e.x+30,e.y+100,e.z+20)}setDimension(t){this.dim=t;const e=t==="overworld";this.sun.visible=this.moon.visible=this.glow.visible=e,this.clouds.visible=e,this.stars.visible=!0,this.starMat.size=1.6}update(t,e,i,s,o={x:0,z:0,s:.12}){if(this.dim!=="overworld")return this.updateOther(t,e,i,s);this.time=(this.time+t/r_)%1;const a=this.time*Math.PI*2,l=Math.sin(a),r=Math.cos(a),h=_l(-.12,.25,l),f=this.wet,c=this.flash;this.daylight=h*(1-.55*f),this.sky.copy(f_).lerp(c_,this.daylight);const u=Math.max(0,1-Math.abs(l)*4.5)*.7;this.sky.lerp(u_,u*(1-f)),f>0&&this.sky.lerp(l_.clone().multiplyScalar(.12+.88*h),f*.8),c>0&&this.sky.lerp(h_,c*.7),s&&this.sky.set(1718906).multiplyScalar(.4+this.daylight*.6),this.scene.background=this.sky;const d=h*(1-f);this.domeMat.uniforms.hor.value.copy(this.sky).lerp(Gf,.22*d),this.domeMat.uniforms.top.value.copy(this.sky).multiplyScalar(.7).lerp(a_,.3*d),this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:i*.6,this.scene.fog.far=s?18:i*(1-.3*f),s||(this.scene.fog.near=i*(.6-.25*f)),.2+.8*this.daylight;const p=_l(-.04,.3,l)*(1-.65*f),x=_l(0,-.3,l)*(1-.7*f),g=Math.max(0,1-Math.abs(l)*3.2)*(1-f),m=new P(r,l,.28).normalize(),y=l>-.04;this.lightDir.copy(y?m:m.clone().negate()),this.sunLight.color.setRGB(1,.95-.38*g,.88-.62*g),y||this.sunLight.color.setRGB(.55,.66,1),this.sunLight.intensity=(y?3.4*p:.6*x)+c*2.5,this.hemi.color.copy(this.sky).lerp(Gf,.6),this.hemi.groundColor.setRGB(.42,.36,.28).multiplyScalar(.4+.6*this.daylight),this.hemi.intensity=.3+2.5*this.daylight+.3*x+c*3;const S=this.shadowOn?2*this.shadowExt/Math.max(256,this.sunLight.shadow.mapSize.x):1,v=Math.round(e.x/S)*S,D=Math.round(e.y/S)*S,T=Math.round(e.z/S)*S;this.sunLight.target.position.set(v,D,T),this.sunLight.position.set(v+this.lightDir.x*160,D+this.lightDir.y*160,T+this.lightDir.z*160),this.sunLight.castShadow=this.shadowOn&&this.sunLight.intensity>.05,this.classic&&(this.sunLight.intensity=0,this.sunLight.castShadow=!1,this.hemi.color.set(16777215),this.hemi.groundColor.set(16777215),this.hemi.intensity=(.2+.8*this.daylight)*3.1+c*3),this.root.position.copy(this.camera.position);const w=220;this.sun.position.set(r*w,l*w,30),this.glow.position.set(r*w*.98,l*w*.98,30),this.glow.material.opacity=Math.max(0,Math.min(1,(l+.15)*1.6))*(1-f)*(s?0:1),this.moon.position.set(-r*w,-l*w,30),this.sun.lookAt(this.camera.position),this.moon.lookAt(this.camera.position),this.stars.rotation.z=a,this.starMat.opacity=Math.max(0,1-this.daylight*1.6)*(s?0:1)*(1-f),this.sun.material.opacity=this.moon.material.opacity=1-f*.95;const R=1.2+o.s*10;this.cloudX+=o.x/(o.s||1)*R*t,this.cloudZ+=o.z/(o.s||1)*R*t;const M=768,_=(.3+.7*h)*(1-.5*f);for(const[C,N,O,H]of[[this.clouds,this.cloudMat,150,1],[this.clouds2,this.cloudMat2,142,.7]])C.position.set(e.x,O,e.z),N.map.repeat.set(900/M,900/M),N.map.offset.set((e.x+this.cloudX*H)/M+(H<1?.37:0),-(e.z+this.cloudZ*H)/M),N.color.setScalar(_*(H<1?.8:1));this.cloudMat.opacity=.9,this.cloudMat2.opacity=Math.min(.95,f*1.1),this.clouds2.visible=f>.05}}const ge=n=>document.getElementById(n);function Mn(n,t={}){const e=document.createElement("div");if(e.className="slot"+(t.active?" active":""),t.group&&(e.dataset.g=t.group,e.dataset.i=t.index),n){const i=document.createElement("img");if(i.src=id(n.id),Zu(n.id)&&(i.className="flat"),e.appendChild(i),e.title=wa(n.id).name,n.n>1){const o=document.createElement("span");o.className="n",o.textContent=n.n,e.appendChild(o)}const s=vs(n);if(s&&n.d>0){const o=document.createElement("div");o.className="dur";const a=Math.max(0,1-n.d/s.dur);o.innerHTML=`<i style="width:${a*100}%;background:${a>.5?"#6f6":a>.2?"#fd4":"#f55"}"></i>`,e.appendChild(o)}}if(t.key){const i=document.createElement("span");i.className="k",i.textContent=t.key,e.appendChild(i)}return e}class m_{constructor(t){this.g=t,this.cursor=null,this.craft=[],this.size=2,this.isOpen=!1,this.toastT=0,this.furnace=null,this.sprites=mv();const e=ge("inv");e.addEventListener("mousedown",i=>this.onDown(i)),e.addEventListener("contextmenu",i=>i.preventDefault()),document.addEventListener("mousemove",i=>{const s=ge("cursorItem");s.style.left=i.clientX+"px",s.style.top=i.clientY+"px"})}toast(t){const e=ge("toast");e.textContent=t,e.style.opacity=1,clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.style.opacity=0,1600)}renderHotbar(){const t=ge("hotbar");t.innerHTML="";for(let e=0;e<9;e++){const i=Mn(this.g.inv.slots[e],{active:e===this.g.inv.selected,key:e+1});i.onclick=()=>{this.g.inv.selected=e,this.g.onSelect()},t.appendChild(i)}}renderStats(){const t=this.g.player,e=this.g.getMode()==="survival",i=this.sprites;ge("bars").style.visibility=e?"visible":"hidden";const s=(h,f)=>{let c="";for(let u=0;u<10;u++)c+=`<img class="hs" src="${f[h>=u*2+2?"full":h===u*2+1?"half":"empty"]}">`;return c},o=Math.ceil(t.hp),a=Math.ceil(t.food),l=o+","+a+","+Math.ceil(t.air)+","+t.headUnder+","+e+","+(o<=6?Math.floor(performance.now()/250)%2:0);if(l===this._statKey)return;this._statKey=l,ge("hearts").innerHTML=s(o,i.heart),ge("hearts").classList.toggle("low",o<=6),ge("food").innerHTML=s(a,i.food);const r=Math.ceil(t.air);ge("air").innerHTML=t.headUnder&&e?Array.from({length:10},(h,f)=>`<img class="hs" src="${r>f?i.bubble.full:i.bubble.empty}">`).join(""):""}open(t,e=null){this.furnace=t==="furnace"?e:null,t==="furnace"&&(t=2),this.size=t,this.craft=Array(t*t).fill(null),this.isOpen=!0;const i=this.g.getMode()==="creative";ge("inv").classList.remove("hidden"),ge("invTitle").textContent=this.furnace?"Horno":i?"Creativo":t===3?"Mesa de crafteo":"Inventario",ge("craftArea").classList.toggle("hidden",i||!!this.furnace),ge("furnaceArea").classList.toggle("hidden",!this.furnace),ge("paletteWrap").classList.toggle("hidden",!i||!!this.furnace),ge("craftGrid").style.gridTemplateColumns=`repeat(${t}, 46px)`,this.render()}close(){if(!this.isOpen)return;this.isOpen=!1,this.furnace=null;const t=e=>{if(!e)return;const i=this.g.inv.add(e.id,e.n);i&&this.g.dropItem(e.id,i)};this.craft.forEach(t),this.craft=[],t(this.cursor),this.cursor=null,ge("inv").classList.add("hidden"),ge("cursorItem").classList.add("hidden"),this.renderHotbar()}recipe(){const t=rv(this.craft.map(e=>e?e.id:0),this.size);return t?{id:t.out,n:t.n,d:0}:null}render(){const t=this.g,e=ge("invMain");e.innerHTML="";for(let o=9;o<36;o++)e.appendChild(Mn(t.inv.slots[o],{group:"inv",index:o}));const i=ge("invHot");i.innerHTML="";for(let o=0;o<9;o++)i.appendChild(Mn(t.inv.slots[o],{group:"inv",index:o,active:o===t.inv.selected}));if(this.furnace){const o=this.furnace;ge("fIn").innerHTML="",ge("fIn").appendChild(Mn(o.slots[0],{group:"furnace",index:0})),ge("fFuel").innerHTML="",ge("fFuel").appendChild(Mn(o.slots[1],{group:"furnace",index:1})),ge("fOut").innerHTML="",ge("fOut").appendChild(Mn(o.slots[2],{group:"furnace",index:2})),this.furnaceBars()}else if(t.getMode()==="creative"){const o=ge("palette");o.innerHTML="",[...Object.keys($e).map(Number),...Object.keys(es).map(Number)].forEach(l=>o.appendChild(Mn({id:l,n:1,d:0},{group:"pal",index:l})))}else{const o=ge("craftGrid");o.innerHTML="",this.craft.forEach((l,r)=>o.appendChild(Mn(l,{group:"craft",index:r})));const a=ge("craftOut");a.innerHTML="",a.appendChild(Mn(this.recipe(),{group:"out",index:0}))}const s=ge("cursorItem");this.cursor?(s.classList.remove("hidden"),s.innerHTML=`<img src="${id(this.cursor.id)}">${this.cursor.n>1?`<span class="n">${this.cursor.n}</span>`:""}`):s.classList.add("hidden"),this.renderHotbar()}furnaceBars(){const t=this.furnace;t&&(ge("fFlame").style.height=(t.burn>0?Math.min(100,t.burn/t.burnMax*100):0)+"%",ge("fArrow").style.width=Math.min(100,t.cook/ju*100)+"%")}arr(t){return t==="inv"?this.g.inv.slots:t==="furnace"?this.furnace.slots:this.craft}onDown(t){const e=t.target.closest(".slot"),i=t.button===2;if(!e||!e.dataset.g){this.g.getMode()==="creative"&&t.target.closest("#paletteWrap")?(this.cursor=null,this.render()):!t.target.closest(".panel")&&this.cursor&&(this.g.dropItem(this.cursor.id,i?1:this.cursor.n),i&&this.cursor.n>1?this.cursor.n--:this.cursor=null,this.render());return}const s=e.dataset.g,o=+e.dataset.i;if(s==="pal"){this.cursor={id:o,n:i?1:Sn(o),d:0},this.render();return}if(s==="out"){const h=this.recipe();if(!h||this.cursor&&!(this.cursor.id===h.id&&this.cursor.n+h.n<=Sn(h.id)))return;this.cursor?this.cursor.n+=h.n:this.cursor={...h},this.craft=this.craft.map(f=>f&&f.n>1?{...f,n:f.n-1}:null),this.g.sound("craft"),this.g.onCraft&&this.g.onCraft(h.id,h.n),this.render();return}const a=this.arr(s),l=a[o],r=this.cursor;if(s==="furnace"&&o===2){if(!l)return;r?r.id===l.id&&r.n+l.n<=Sn(r.id)&&(r.n+=l.n,a[2]=null):(this.cursor=l,a[2]=null),this.render();return}if(i){if(r)l?l.id===r.id&&l.n<Sn(r.id)?(l.n++,r.n--,r.n<=0&&(this.cursor=null)):(a[o]=r,this.cursor=l):(a[o]={...r,n:1},r.n--,r.n<=0&&(this.cursor=null));else if(l){const h=Math.ceil(l.n/2);this.cursor={...l,n:h},l.n-=h,l.n<=0&&(a[o]=null)}}else if(!r)a[o]=null,this.cursor=l;else if(!l)a[o]=r,this.cursor=null;else if(l.id===r.id&&Sn(r.id)>1){const h=Math.min(r.n,Sn(r.id)-l.n);l.n+=h,r.n-=h,r.n<=0&&(this.cursor=null)}else a[o]=r,this.cursor=l;this.render()}}let Fe=null,aa=null,$n=null,sd=.5;function Ta(){if(Fe)return!0;try{Fe=new(window.AudioContext||window.webkitAudioContext),$n=Fe.createGain(),$n.gain.value=sd,$n.connect(Fe.destination),aa=Fe.createBuffer(1,Fe.sampleRate,Fe.sampleRate);const n=aa.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=Math.random()*2-1;return!0}catch{return!1}}function no(){Ta()&&Fe.state==="suspended"&&Fe.resume()}function g_(n){sd=n,$n&&($n.gain.value=n)}function Ui(n,t,e,i,s=0){if(!Ta())return;const o=Fe.currentTime,a=Fe.createBufferSource();a.buffer=aa;const l=Fe.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(t,o),s&&l.frequency.exponentialRampToValueAtTime(Math.max(40,t*s),o+n),l.Q.value=e;const r=Fe.createGain();r.gain.setValueAtTime(i,o),r.gain.exponentialRampToValueAtTime(.001,o+n),a.connect(l),l.connect(r),r.connect($n),a.start(o,Math.random()*.5,n)}function Qi(n,t,e,i,s){if(!Ta())return;const o=Fe.currentTime,a=Fe.createOscillator();a.type=n,a.frequency.setValueAtTime(t,o),a.frequency.exponentialRampToValueAtTime(e,o+i);const l=Fe.createGain();l.gain.setValueAtTime(s,o),l.gain.exponentialRampToValueAtTime(.001,o+i),a.connect(l),l.connect($n),a.start(o),a.stop(o+i)}let zr=null;function x_(){if(zr||!Ta())return zr;const n=(t,e,i)=>{const s=Fe.createBufferSource();s.buffer=aa,s.loop=!0;const o=Fe.createBiquadFilter();o.type=t,o.frequency.value=e,o.Q.value=i;const a=Fe.createGain();return a.gain.value=0,s.connect(o),o.connect(a),a.connect($n),s.start(0,Math.random()*.5),{f:o,g:a}};return zr={rain:n("highpass",1800,.3),rainLow:n("lowpass",5e3,.3),wind:n("bandpass",420,.9)},zr}function Wf(n,t,e=0){if(!Fe||Fe.state!=="running")return;const i=x_();if(!i)return;const s=Fe.currentTime;i.rain.g.gain.setTargetAtTime(n*.16,s,.3),i.rainLow.g.gain.setTargetAtTime(n*.12,s,.3),i.wind.g.gain.setTargetAtTime(t*.5,s,.4),i.wind.f.frequency.setTargetAtTime(300+380*(.5+.5*Math.sin(e))+t*200,s,.3)}function _h(n,t=1){if(Fe)switch(n){case"break":Ui(.16,1400,1,.9,.4);break;case"place":Ui(.09,900,1,.7);break;case"step":Ui(.07,500,1,.25);break;case"hit":Ui(.08,2200,1,.5);break;case"hurt":Qi("square",330,110,.22,.25);break;case"pop":Qi("sine",500,1100,.1,.2);break;case"eat":Ui(.07,1800,2,.6),setTimeout(()=>Ui(.07,1600,2,.6),110);break;case"splash":Ui(.3,2500,.5,.6,.2);break;case"hiss":Ui(.6,6e3,.5,.4);break;case"explode":Ui(1.1,900,.7,1.4,.1),Qi("sine",90,30,.8,.9);break;case"craft":Qi("triangle",400,800,.15,.25);break;case"die":Qi("sawtooth",300,40,.8,.3);break;case"oink":Qi("sawtooth",220,150,.15,.12);break;case"moo":Qi("sawtooth",130,100,.5,.12);break;case"thunder":Ui(3.2,380,.7,1.6*t,.12),setTimeout(()=>Ui(1.6,220,.8,.9*t,.2),450),Qi("sine",60,25,2,.5*t);break;case"roar":Ui(1.5,500,.8,.9*t,.15),Qi("sawtooth",95,32,1.5,.45*t);break;case"shoot":Ui(.3,3200,.8,.45*t,.25),Qi("sine",700,180,.25,.2*t);break;case"groan":Qi("sawtooth",110,70,.6,.14);break}}const v_="minecraft-web",ki="kv";let Fr=null;function co(){return Fr||(Fr=new Promise((n,t)=>{const e=indexedDB.open(v_,1);e.onupgradeneeded=()=>e.result.createObjectStore(ki),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Fr)}const Ys=n=>new Promise((t,e)=>{n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),Aa=n=>new Promise((t,e)=>{n.oncomplete=t,n.onerror=()=>e(n.error),n.onabort=()=>e(n.error)});async function tr(n){return await Ys(n.get("index"))||[]}async function __(){const t=(await co()).transaction(ki,"readwrite"),e=t.objectStore(ki),i=await Ys(e.get("meta"));if(i){const s=await Ys(e.getAllKeys()),o=await tr(e),a="w"+Date.now().toString(36);for(const l of s)typeof l=="string"&&l.startsWith("c:")&&(e.put(await Ys(e.get(l)),`w:${a}:${l}`),e.delete(l));e.put(i,`w:${a}:meta`),e.delete("meta"),o.unshift({id:a,name:"Mundo antiguo",mode:i.mode,seed:i.seed,updated:Date.now(),created:Date.now(),played:0,level:0,thumb:null}),e.put(o,"index")}await Aa(t)}async function od(){try{await __();const t=(await co()).transaction(ki).objectStore(ki);return(await tr(t)).sort((e,i)=>i.updated-e.updated)}catch{return[]}}async function rd(n){const e=(await co()).transaction(ki).objectStore(ki),i=IDBKeyRange.bound(`w:${n}:`,`w:${n}:￿`),s=await Ys(e.getAllKeys(i)),o=await Ys(e.getAll(i)),a={meta:null,chunks:new Map,nether:new Map,end:new Map};return s.forEach((l,r)=>{const h=l.slice(`w:${n}:`.length);h==="meta"?a.meta=o[r]:h.startsWith("c:")?a.chunks.set(Number(h.slice(2)),o[r]):h.startsWith("n:")?a.nether.set(Number(h.slice(2)),o[r]):h.startsWith("e:")&&a.end.set(Number(h.slice(2)),o[r])}),a}function ad(){return"w"+Date.now().toString(36)+Math.floor(Math.random()*1296).toString(36)}async function ld(n,t,e,i){try{const o=(await co()).transaction(ki,"readwrite"),a=o.objectStore(ki);a.put(t,`w:${n}:meta`);for(const[f,c]of e)a.put(c,`w:${n}:${typeof f=="number"?"c:"+f:f}`);const l=await tr(a),r=l.findIndex(f=>f.id===n),h={...r>=0?l[r]:{},...i,id:n,updated:Date.now()};return r>=0?l[r]=h:l.push(h),a.put(l,"index"),await Aa(o),!0}catch{return!1}}async function M_(n){const e=(await co()).transaction(ki,"readwrite"),i=e.objectStore(ki);i.delete(IDBKeyRange.bound(`w:${n}:`,`w:${n}:￿`)),i.put((await tr(i)).filter(s=>s.id!==n),"index"),await Aa(e)}async function y_(n,t){const i=(await co()).transaction(ki,"readwrite"),s=i.objectStore(ki),o=await tr(s),a=o.find(l=>l.id===n);a&&(a.name=t),s.put(o,"index"),await Aa(i)}const S_=n=>{let t="";for(let e=0;e<n.length;e+=32768)t+=String.fromCharCode.apply(null,n.subarray(e,e+32768));return btoa(t)},b_=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));async function hd(n,t,e){return new Response(n.pipeThrough(new t(e)))}async function cd(n){const t=await od(),e=t.find(l=>l.id===n),i=await rd(n),s=[...[...i.chunks].map(([l,r])=>["c:"+l,r]),...[...i.nether].map(([l,r])=>["n:"+l,r]),...[...i.end].map(([l,r])=>["e:"+l,r])],o=JSON.stringify({v:3,summary:e,meta:i.meta,chunks:s.map(([l,r])=>[l,S_(new Uint8Array(r))])}),a=new Blob([o]);return typeof CompressionStream>"u"?a:(await hd(a.stream(),CompressionStream,"gzip")).blob()}async function E_(n){let t;try{t=await(await hd(n.stream(),DecompressionStream,"gzip")).text()}catch{t=await n.text()}const e=JSON.parse(t);if(!e||!e.meta)throw new Error("Archivo no válido");const i=ad();return await ld(i,e.meta,e.chunks.map(([s,o])=>[s,b_(o)]),{...e.summary||{},name:(e.summary&&e.summary.name||"Mundo")+" (importado)",created:Date.now()}),i}const st=n=>document.getElementById(n),In=st("game"),pi=new Px({canvas:In,antialias:!0,powerPreference:"high-performance"});pi.setPixelRatio(Math.min(devicePixelRatio,2));const ni=new Dx;ni.fog=new Wh(8900331,50,90);const oi=new Oi(75,1,.05,500);ni.add(oi);const{canvas:fd,texture:la}=Xx();lv(fd);document.documentElement.style.setProperty("--dirt",`url(${gv("dirt")})`);const w_={value:new St(1,1,1)},ha={uTime:{value:0},uWind:{value:.12}};function Xf(n){return n.onBeforeCompile=t=>{t.uniforms.uTime=ha.uTime,t.uniforms.uWind=ha.uWind,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
attribute float blight;
attribute float sway;
attribute float skyl;
uniform float uTime;
uniform float uWind;
varying float vBL;
varying float vSK;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vBL = blight; vSK = skyl;
vec4 wp = modelMatrix * vec4(position, 1.0);
float sw = (sway > 1.5 ? 0.0 : sway) * uWind;
transformed.x += sin(uTime * 1.7 + wp.x * 0.9 + wp.z * 0.6 + wp.y * 0.5) * 0.075 * sw;
transformed.z += cos(uTime * 1.3 + wp.z * 0.8 + wp.x * 0.4) * 0.075 * sw;
transformed.y += sin(uTime * 2.1 + wp.x * 0.7 + wp.z * 0.7) * 0.03 * sw;
transformed.y += (sway > 1.5 ? 1.0 : 0.0) * sin(uTime * 1.9 + wp.x * 1.2 + wp.z * 1.0) * 0.045;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
varying float vBL;
varying float vSK;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance += vec3(1.0, 0.78, 0.5) * vBL * 1.5 * sampledDiffuseColor.rgb;`).replace("#include <lights_fragment_end>",`#include <lights_fragment_end>
reflectedLight.directDiffuse *= vSK;
reflectedLight.directSpecular *= vSK;`)},n.customProgramCacheKey=()=>"chunk-pbr",n}const ca=Yx(fd);let Br=null;const jn={opaque:Xf(new bf({map:la,normalMap:ca,vertexColors:!0,roughness:.94,metalness:0})),trans:Xf(new bf({map:la,normalMap:ca,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ci,roughness:.1,metalness:.05})),tint:w_};function qf(n){n&&(n.magFilter=de,n.minFilter=de,n.generateMipmaps=!1,n.anisotropy=1,n.needsUpdate=!0)}function T_(n,t=!1){n&&!Br&&(Br=qx(pi)),t&&(qf(la),qf(ca));for(const e of[jn.opaque,jn.trans])e.flatShading=t,e.map=n?Br.map:la,e.normalMap=t?null:n?Br.normalMap:ca,e.roughness=t?1:e===jn.trans?.1:.94,e.needsUpdate=!0}pi.toneMapping=Ma;pi.toneMappingExposure=1.45;pi.shadowMap.type=ou;const Mh=[{name:"Bajo",shadows:!1,size:0,ext:0,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Medio",shadows:!0,size:1024,ext:48,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Alto",shadows:!0,size:2048,ext:64,bloom:!0,hd:!0,msaa:2,pr:1.25,grade:!0},{name:"Ultra (hiperrealista)",shadows:!0,size:4096,ext:80,bloom:!0,hd:!0,msaa:4,pr:2,grade:!0},{name:"Clásico (píxel)",shadows:!1,size:0,ext:0,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1,classic:!0}],ud={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.85},uSat:{value:1.04},uGrain:{value:.035},uContrast:{value:1.06}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; uniform float uTime, uVig, uSat, uGrain, uContrast; varying vec2 vUv;float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));c.rgb = mix(vec3(l), c.rgb, uSat); c.rgb = (c.rgb - 0.18) * uContrast + 0.18; vec2 d = vUv - 0.5; c.rgb *= 1.0 - dot(d, d) * uVig;c.rgb += (h(vUv * 1000.0 + uTime) - 0.5) * uGrain; gl_FragColor = c; }"};let Ti=null,Yf=null,Kf=null,dd=!1;function pd(){const n=Mh[_e.quality];_e.quality,pi.setPixelRatio(Math.min(devicePixelRatio,n.pr)),pi.shadowMap.enabled=n.shadows,Li&&Li.setShadows(n.shadows,n.size||1024,n.ext||48);for(const i of[jn.opaque,jn.trans])i.needsUpdate=!0;T_(n.hd,!!n.classic),n.classic&&(pi.shadowMap.enabled=!1,pi.shadowMap.needsUpdate=!0),pi.toneMapping=n.classic?An:Ma,Li&&(Li.classic=!!n.classic);const t=n.bloom||n.grade||n.msaa;if(Ti&&(Ti.dispose(),Ti=null),t){const i=innerWidth,s=innerHeight,o=pi.getPixelRatio(),a=new Yi(i*o,s*o,{type:cn,samples:n.msaa});Ti=new Jx(pi,a),Ti.addPass(new Qx(ni,oi)),n.bloom&&(Yf=new eo(new Nt(i,s),.42,.55,.88),Ti.addPass(Yf)),dd=n.grade,n.grade&&(Kf=new qu(ud),Ti.addPass(Kf)),Ti.addPass(new iv),Ti.setSize(i,s)}const e=document.getElementById("bQuality");e&&(e.textContent="Gráficos: "+n.name),lc()}const _e={radius:8,fov:75,sens:1,vol:.5,cam:0,quality:2};try{Object.assign(_e,JSON.parse(localStorage.getItem("mcweb-settings")||"{}"))}catch{}{const n=vh();_e.pad=Object.assign(n,_e.pad||{}),_e.pad.map=Object.assign(vh().map,_e.pad&&_e.pad.map||{})}const Yn=()=>{try{localStorage.setItem("mcweb-settings",JSON.stringify(_e))}catch{}},md=new Set(["storm","dragon","wither","herobrine"]),$f={colossus:[[I.STAR,1],[I.IRON,24],[I.DIAMOND,8],[I.GOLD,6]],creepertitan:[[I.STAR,1],[I.COAL,32],[I.DIAMOND,8],[I.GOLD,8]],blazeking:[[I.STAR,1],[I.COAL,24],[I.DIAMOND,8],[I.GOLD,10]],piglinking:[[I.STAR,2],[I.GOLD,32],[I.DIAMOND,10]],endertitan:[[I.STAR,2],[I.PEARL,6],[I.DIAMOND,12]],voidlord:[[I.STAR,2],[I.PEARL,4],[I.DIAMOND,12],[I.GOLD,12]],ravager:[[I.STAR,1],[I.DIAMOND,8],[I.GOLD,10]],evoker:[[I.STAR,1],[I.DIAMOND,6],[I.GOLD,8],[I.PEARL,1]],ghast:[[I.STAR,1],[I.DIAMOND,6],[I.COAL,16]],herobrine:[[I.STAR,3],[I.DIAMOND,16],[I.GOLD,16],[I.PEARL,2]],slimeking:[[I.STAR,1],[I.DIAMOND,6],[I.GOLD,6]],storm:[[I.STAR,1],[L.COMMAND,1],[I.DIAMOND,8],[I.GOLD,12]],dragon:[[I.STAR,2],[I.PEARL,4],[I.DIAMOND,12],[I.GOLD,10]],wither:[[I.STAR,1],[I.DIAMOND,6],[I.GOLD,10]],warden:[[I.STAR,1],[I.DIAMOND,10],[I.GOLD,16]],guardian:[[I.STAR,1],[I.PEARL,1],[I.DIAMOND,6],[I.GOLD,8]]},fa=["Primera persona","Tercera persona (detrás)","Tercera persona (delante)"],ua=new Hu(new Ux(new Jt(1.005,1.005,1.005)),new qh({color:0}));ua.visible=!1;ni.add(ua);const gd=(()=>{let n=12345;const t=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296,e=[];for(let i=0;i<6;i++){let s=8,o=8;const a=t()*6.28;for(let l=0;l<12;l++)s+=Math.cos(a+(t()-.5)*1.3),o+=Math.sin(a+(t()-.5)*1.3),e.push([Math.round(s),Math.round(o),l])}return Array.from({length:10},(i,s)=>{const o=document.createElement("canvas");o.width=o.height=16;const a=o.getContext("2d");a.fillStyle="rgba(0,0,0,0.8)";for(const[r,h,f]of e)f<=(s+1)*1.25&&a.fillRect(r,h,1,1);const l=new Bi(o);return l.magFilter=de,l.minFilter=de,l.generateMipmaps=!1,l})})(),zo=new At(new Jt(1.01,1.01,1.01),new be({map:gd[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));zo.visible=!1;ni.add(zo);const yh=new be({transparent:!0,side:Ci,depthTest:!1,fog:!1}),da=new At(new Cn(.55,.55),yh),Fo=new At(new Jt(.12,.12,.5),new be({color:14264191,depthTest:!1,fog:!1})),Yo=new Se;Yo.add(da,Fo);oi.add(Yo);da.renderOrder=Fo.renderOrder=999;let Rt="menu",le="survival",Jr=_e.radius,Xi=_e.cam|0;const fn=new Map;let so,Ml=0,Wt,ue=null,qe=null,Sh,Je,sn=null,nn=0,Zn=0,Jn=0,yl=0,Sl=0,jf=2,pa=null,ic="Mundo",nc=0,xd=0,sc=null,Ks=!1;const bh=n=>6+n*4;function Co(n){for(Zn+=n;Zn>=bh(nn);)Zn-=bh(nn),nn++,yt&&yt.toast("¡Nivel "+nn+"!"),Te("pop")}let nt,U,te,Li,Ye,_i,Ri,yt,Ln=1,Eh,oe=null,Qn=!1,tn={},Qt="overworld",ma={nether:new Map,end:new Map},Wn=0,Bo=0,ga=!1;const wh={overworld:"Overworld",nether:"El Nether",end:"El End"},vd=(n,t,e)=>(Qt==="overworld"?"":Qt+":")+n+","+t+","+e,Be={left:!1,right:!1},Wi={key:"",progress:0};let Fi=0,kr=0,Lo=0,xa=0,Zf=-2,bl=0,El=0;function Pi(n){const t=st("overlay");if(t.classList.toggle("ingame",n==="pause"||n==="death"),!n){t.classList.add("hidden");return}t.classList.remove("hidden");for(const e of["menu","pause","death"])st(e).classList.toggle("hidden",e!==n)}const Te=n=>{_h(n),oe&&(n==="hurt"?oe.rumble(.6,.35,180):n==="explode"?oe.rumble(1,.7,450):n==="roar"?oe.rumble(.8,.5,600):n==="hit"?oe.rumble(.25,.5,70):n==="break"?oe.rumble(.15,.35,60):n==="thunder"&&oe.rumble(.7,.2,500))};function fo(){try{const n=In.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}function A_(n){for(let t=0;t<600;t+=5)for(let e=0;e<12;e++){const i=Math.round(Math.cos(e/12*Math.PI*2)*t),s=Math.round(Math.sin(e/12*Math.PI*2)*t),o=qn(i,s,n);if(o.h>li+3&&o.h<li+16&&o.biome!=="ocean"&&o.biome!=="mountains")return[i,s]}return[0,0]}function oc(n,t){for(let e=0;e<12;e++)for(let i=-e;i<=e;i++)for(let s=-e;s<=e;s++){if(Math.max(Math.abs(i),Math.abs(s))!==e)continue;const o=n+i,a=t+s,l=nt.topY(o,a);if(l<li)continue;const r=nt.getBlock(o,l,a);if((r===L.GRASS||r===L.SAND||r===L.SNOW)&&!nt.isSolid(o,l+1,a)&&!nt.isSolid(o,l+2,a))return new P(o+.5,l+1,a+.5)}return new P(n+.5,Math.max(nt.topY(n,t),li)+2,t+.5)}function Th(n,t,e=null){const i=U.eye,s=U.lookDir();_i.spawn(i.x+s.x*.5,i.y-.3,i.z+s.z*.5,n,t,!1);const o=_i.list[_i.list.length-1];o.vel.set(s.x*5,2.5,s.z*5),o.age=-1.2}function wl(n,t,e,i,s=1){Te("explode");{const h=Math.hypot(U.pos.x-n,U.pos.y-t,U.pos.z-e);h<40&&oe.rumble(Math.min(1,1.2-h/40),.8,500)}const o=Math.ceil(i)+1;for(let h=-o;h<=o;h++)for(let f=-o;f<=o;f++)for(let c=-o;c<=o;c++){if(Math.hypot(h,f,c)>i*(.7+Math.random()*.3))continue;const d=Math.floor(n)+h,p=Math.floor(t)+f,x=Math.floor(e)+c,g=nt.getBlock(d,p,x);if(!(g===se||g===L.BEDROCK||un[g])&&(nt.setBlock(d,p,x,se),le==="survival"&&Math.random()<.2)){const m=Qu(g,null);m&&_i.spawn(d+.5,p+.5,x+.5,m[0],m[1])}}Ri.burst(n,t,e,[.5,.5,.5],40,7),Ri.burst(n,t,e,[.9,.5,.1],20,6);const a=U.pos.x-n,l=U.pos.z-e,r=Math.hypot(a,U.pos.y+.9-t,l);r<i*2&&U.damage(Math.round((1-r/(i*2))*22*s),a/(Math.hypot(a,l)||1)*9,l/(Math.hypot(a,l)||1)*9);for(const h of[...Ye.list])Math.hypot(h.pos.x-n,h.pos.y-t,h.pos.z-e)<i*2&&Ye.damage(h,14,n,e)}function Ah(n){const t=nt.getBlock(n.x,n.y,n.z);if(t===se||$e[t].hardness===1/0)return;const e=te.held();if(nt.setBlock(n.x,n.y,n.z,se),t===L.FURNACE){const i=vd(n.x,n.y,n.z),s=fn.get(i);if(s){for(const o of s.slots)o&&_i.spawn(n.x+.5,n.y+.5,n.z+.5,o.id,o.n);fn.delete(i)}}if(t===L.OBSIDIAN&&U_(n.x,n.y,n.z),(t===L.COAL_ORE||t===L.IRON_ORE||t===L.GOLD_ORE||t===L.DIAMOND_ORE)&&Co(t===L.DIAMOND_ORE?8:3),Ri.blockBreak(n.x,n.y,n.z,t),Te("break"),le==="survival"){const i=Qu(t,e);i&&_i.spawn(n.x+.5,n.y+.4,n.z+.5,i[0],i[1]),vs(e)&&$e[t].hardness>0&&(te.wearHeld(1)&&(Te("break"),yt.toast("¡Se ha roto la herramienta!")),yt.renderHotbar())}nt.getBlock(n.x,n.y+1,n.z)===L.CACTUS&&$e[t].cactusOk}function rc(){const n=U.eye,t=U.lookDir(),e=nt.raycast(n,t,le==="creative"?7:5.5);if(Fi=Math.max(Fi,.001),e&&e.id===L.TABLE&&!U.keys.has("ShiftLeft")){_a(3);return}if(e&&e.id===L.FURNACE&&!U.keys.has("ShiftLeft")){const h=vd(e.x,e.y,e.z);fn.has(h)||fn.set(h,{slots:[null,null,null],burn:0,burnMax:1,cook:0}),_a("furnace",fn.get(h));return}if(e&&e.id===L.END_FRAME){Td(e);return}if(e&&e.id===L.CHEST&&!U.keys.has("ShiftLeft")){Ed(e);return}const i=te.held();if(!i)return;if(i.id===I.LIGHTER){e&&wd(e);return}const s=es[i.id]&&es[i.id].food;if(s){le==="survival"&&U.food<20&&(U.eat(s),te.consumeHeld(1),Te("eat"),yt.renderHotbar());return}if(!ov(i.id)||!e)return;const o=e.x+e.normal[0],a=e.y+e.normal[1],l=e.z+e.normal[2];if(a<0||a>=fe)return;const r=nt.getBlock(o,a,l);if(!(r!==se&&!un[r])&&!(Xo[i.id]&&U.intersectsBlock(o,a,l))&&!(Xo[i.id]&&Ye.list.some(h=>Math.abs(h.pos.x-(o+.5))<h.hw+.5&&Math.abs(h.pos.z-(l+.5))<h.hw+.5&&h.pos.y<a+1&&h.pos.y+h.h>a))){if(i.id===L.COMMAND){if(ue||qe){yt.toast("Ya hay una tormenta en curso");return}nt.setBlock(o,a,l,i.id),Te("place"),le==="survival"&&(te.consumeHeld(1),yt.renderHotbar()),k_(o,a,l);return}nt.setBlock(o,a,l,i.id),Te("place"),le==="survival"&&(te.consumeHeld(1),yt.renderHotbar())}}function R_(n){const t=ho[n];st("bossFill").style.background=`linear-gradient(${t.color}, #25103a)`,st("bossbar").style.setProperty("--bc",t.color)}function Ko(n,t,e,i,s){const o=ho[n],a=new P(t,e,i);ue=n==="storm"?new Nv(ni,Sh,a):o.make(ni,Sh,a,s),R_(n),md.has(n)&&(Wt.set("storm"),Wt.boss=!0,Wt.timer=9999),Te("roar")}function _d(n){if(ue||qe)return yt.toast("Ya hay un jefe activo"),!1;const t=ho[n],e=U.lookDir(),i=Math.hypot(e.x,e.z)||1,s=e.x/i,o=e.z/i,a=t.dist||(n==="warden"?12:n==="guardian"?16:n==="wither"?20:26),l=U.pos.x+s*a,r=U.pos.z+o*a;let h;if(t.ground){const f=ac(Math.floor(l),Math.floor(r));h=f!==null?f:U.pos.y}else h=U.pos.y+(t.up===void 0?10:t.up)+(n==="storm"?10:0);return n==="dragon"&&Qt==="end"?(Ko("dragon",.5,100,.5,{cx:0,cy:64,cz:0,pillars:ec()}),ga=!0):Ko(n,l,h,r),yt.toast("¡"+t.name+" ha sido invocado!"),!0}function ac(n,t){if(Qt==="overworld"){const e=nt.topY(n,t);return e>0?e+1:null}for(let e=Math.min(fe-6,Math.floor(U.pos.y)+12);e>4;e--)if(nt.isSolid(n,e-1,t)&&!un[nt.getBlock(n,e-1,t)]&&!nt.isSolid(n,e,t)&&!nt.isSolid(n,e+1,t)&&!un[nt.getBlock(n,e,t)])return e;return null}function Md(n){const t=U.lookDir(),e=Math.hypot(t.x,t.z)||1;for(let i=6;i<=10;i+=2){const s=Math.floor(U.pos.x+t.x/e*i),o=Math.floor(U.pos.z+t.z/e*i),a=ac(s,o);if(a!==null){Ye.add(n,s+.5,io[n].fly?a+4:a,o+.5);return}}Ye.add(n,U.pos.x+3,U.pos.y+1,U.pos.z)}function C_(){ue&&(ue.dispose(),ue=null),qe=null,Wt.boss=!1,Jn=0,st("bossbar").classList.add("hidden"),yt.toast("Jefe descartado")}function ms(n){Rt==="play"&&(Rt="panel",sn=n,U.keys.clear(),Be.left=Be.right=!1,document.exitPointerLock(),st(n).classList.remove("hidden"),n==="summon"?L_():n==="padcfg"?Vs():P_())}function gs(n){sn&&(st(sn).classList.add("hidden"),sn=null,n?(Rt="play",fo()):(Rt="pause",Pi("pause")))}function L_(){st("bossCards").innerHTML=jv.map(n=>{const t=ho[n],e=Je.bosses.has(n);return`<div class="card" style="border-left:6px solid ${t.color}"><h4><span>${t.icon} ${t.name}</span><span class="tag">${t.hp} HP</span></h4><p>${t.desc}</p><button class="btn" data-boss="${n}">${e?"✔ ":""}Invocar</button></div>`}).join(""),st("mobBtns").innerHTML=Object.keys(io).map(n=>`<button class="btn" data-mob="${n}">${io[n].name}</button>`).join("")}function P_(){st("questTitle").textContent=`Misiones — ${Je.completed()}/${Je.total()} completadas`;let n="",t="";for(const e of Hs){e.group!==t&&(t=e.group,n+=`<div class="grp">${t.toUpperCase()}</div>`);const i=Je.done[e.id],s=Je.progress[e.id]||0,o=e.reward.map(([a,l])=>`${l}× ${wa(a).name}`).join(", ");n+=`<div class="q ${i?"done":""}"><span class="ck">${i?"✔":"○"}</span><div><b>${e.title}</b>${e.desc}<div class="bar"><i style="width:${s/e.n*100}%"></i></div></div><div class="rw">${s}/${e.n}<br>${o}<br>+${e.xp} XP</div></div>`}st("questList").innerHTML=n}st("bossCards").addEventListener("click",n=>{const t=n.target.closest("[data-boss]");t&&Rt==="panel"&&(gs(!0),_d(t.dataset.boss))});st("mobBtns").addEventListener("click",n=>{const t=n.target.closest("[data-mob]");t&&Rt==="panel"&&(Md(t.dataset.mob),yt.toast(io[t.dataset.mob].name+" invocado"))});st("bDespawn").onclick=()=>{C_()};st("dimBtns").addEventListener("click",n=>{const t=n.target.closest("[data-dim]");t&&Rt==="panel"&&(gs(!0),Ra(t.dataset.dim))});const ze=st("minimap").getContext("2d"),Jf=ze.createImageData(64,64),yd={};for(const n of Object.values($e)){const t=Wu(n.tiles[0]);yd[n.id]=[t[0]*255,t[1]*255,t[2]*255]}function D_(){const n=Math.floor(U.pos.x),t=Math.floor(U.pos.z),e=Jf.data;for(let s=0;s<64;s++)for(let o=0;o<64;o++){const a=n+o-32,l=t+s-32,r=(s*64+o)*4;let h=nt.topY(a,l);if(Qt!=="overworld"&&h>=0)for(h=Math.min(fe-3,Math.floor(U.pos.y)+6);h>0&&!nt.isSolid(a,h,l)&&nt.getBlock(a,h,l)!==L.LAVA;)h--;let f;if(h<0)f=[20,20,30];else if(Qt==="overworld"&&h<li&&nt.getBlock(a,li,l)===L.WATER)f=[38+h,84+h,190];else{const c=yd[nt.getBlock(a,h,l)]||[90,90,90],u=Math.max(.6,Math.min(1.25,.9+(h-U.pos.y)*.012));f=[c[0]*u,c[1]*u,c[2]*u]}e[r]=f[0],e[r+1]=f[1],e[r+2]=f[2],e[r+3]=255}ze.putImageData(Jf,0,0),ze.imageSmoothingEnabled=!1,ze.drawImage(st("minimap"),0,0,64,64,0,0,128,128);const i=(s,o,a,l)=>{const r=(s-n+32)*2,h=(o-t+32)*2;r<2||h<2||r>126||h>126||(ze.fillStyle=a,ze.fillRect(r-l,h-l,l*2,l*2))};for(const s of Ye.list)i(s.pos.x,s.pos.z,s.def.hostile?"#ff4040":"#ffffff",1.5);if(ue){const s=3+Math.sin(performance.now()/150)*1.2,o=ue.pos.x,a=ue.pos.z,l=Math.max(6,Math.min(122,(o-n+32)*2)),r=Math.max(6,Math.min(122,(a-t+32)*2));ze.fillStyle="#d050ff",ze.fillRect(l-s,r-s,s*2,s*2),ze.strokeStyle="#fff",ze.strokeRect(l-s,r-s,s*2,s*2)}ze.save(),ze.translate(64+(U.pos.x-n)*2,64+(U.pos.z-t)*2),ze.rotate(-U.yaw+Math.PI),ze.fillStyle="#fff",ze.strokeStyle="#000",ze.beginPath(),ze.moveTo(0,6),ze.lineTo(4.5,-4.5),ze.lineTo(0,-2),ze.lineTo(-4.5,-4.5),ze.closePath(),ze.fill(),ze.stroke(),ze.restore()}function I_(){st("tracker").innerHTML=Je.active(3).map(n=>`<div class="qt"><b>${n.title}</b>${n.desc} (${Je.progress[n.id]||0}/${n.n})<div class="qb"><i style="width:${(Je.progress[n.id]||0)/n.n*100}%"></i></div></div>`).join("")}function Rh(n,t){const e=new Se;e.visible=!1,ni.add(e);const i=new bv(e,jn,n==="overworld"?Ln:n==="nether"?Ln+500:Ln+900,t||new Map,n);return i.group=e,i}function N_(n,t,e,i=3){return new Promise(s=>{const o=()=>{n.update(t,e,i,12)>0?setTimeout(o,0):s()};o()})}function Sd(n,t,e){for(const i of[0,2]){const s=i===0?[1,0,0]:[0,0,1],o=(u,d)=>nt.getBlock(n+s[0]*u,t+d,e+s[2]*u);let a=0;for(;a>-22&&o(0,a-1)===se;)a--;if(o(0,a-1)!==L.OBSIDIAN)continue;let l=0;for(;l<22&&o(0,l+1)===se;)l++;if(o(0,l+1)!==L.OBSIDIAN)continue;let r=0;for(;r>-22&&o(r-1,0)===se;)r--;if(o(r-1,0)!==L.OBSIDIAN)continue;let h=0;for(;h<22&&o(h+1,0)===se;)h++;if(o(h+1,0)!==L.OBSIDIAN||l-a+1<3||h-r+1<2)continue;let f=!0;for(let u=r;u<=h&&f;u++)for(let d=a;d<=l;d++)if(o(u,d)!==se){f=!1;break}for(let u=r;u<=h&&f;u++)(o(u,a-1)!==L.OBSIDIAN||o(u,l+1)!==L.OBSIDIAN)&&(f=!1);for(let u=a;u<=l&&f;u++)(o(r-1,u)!==L.OBSIDIAN||o(h+1,u)!==L.OBSIDIAN)&&(f=!1);if(!f)continue;const c=[];for(let u=r;u<=h;u++)for(let d=a;d<=l;d++)c.push([n+s[0]*u,t+d,e+s[2]*u]);return c}return null}function bd(n){const t=[],e=Math.random,i=(s,o,a,l=1)=>{e()<l&&t.push([s,o+Math.floor(e()*(a-o+1))])};return Qt==="nether"?(i(I.GOLD,2,8),i(I.IRON,1,5,.7),i(I.DIAMOND,1,2,.3),i(L.OBSIDIAN,2,4,.4),i(I.COAL,3,8,.6),i(I.EYE,1,1,.15),i(I.COOKED_PORK,2,4,.4)):Qt==="end"?(i(I.DIAMOND,2,6,.7),i(I.GOLD,3,9),i(I.IRON,2,6,.8),i(I.PEARL,1,3,.5),i(I.EYE,1,2,.3),i(L.PURPUR,6,16,.7),nt.getBlock(n.x,n.y-1,n.z)===L.END_BRICKS?t.push([I.ELYTRA,1]):i(I.ELYTRA,1,1,.06)):(i(I.GOLD,1,4),i(I.IRON,1,4),i(I.COAL,2,6)),t}function Ed(n){nt.setBlock(n.x,n.y,n.z,L.CHEST_OPEN),Te("craft");for(const[t,e]of bd(n))_i.spawn(n.x+.5,n.y+1,n.z+.5,t,e);Ri.burst(n.x+.5,n.y+1,n.z+.5,[1,.85,.3],14,4),yt.toast("¡Cofre abierto!"),Je.event("chest","x")}function wd(n){if(Qt==="end")return yt.toast("El fuego no prende aquí"),!1;const t=n.x+n.normal[0],e=n.y+n.normal[1],i=n.z+n.normal[2],s=nt.getBlock(t,e,i)===se?Sd(t,e,i):null;if(!s)return yt.toast("Marco de obsidiana no válido (mínimo 2x3 interior)"),!1;for(const[o,a,l]of s)nt.setBlock(o,a,l,L.NETHER_PORTAL);if(Te("hiss"),Te("craft"),yt.toast("¡El portal del Nether se activa!"),le==="survival"){const o=te.held();o.d=(o.d||0)+1,o.d>=64&&(te.slots[te.selected]=null),yt.renderHotbar()}return!0}function U_(n,t,e){const i=[[n,t,e]],s=new Set;for(;i.length;){const[o,a,l]=i.pop();for(const[r,h,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const c=o+r,u=a+h,d=l+f,p=c+","+u+","+d;s.has(p)||(s.add(p),nt.getBlock(c,u,d)===L.NETHER_PORTAL&&(nt.setBlock(c,u,d,se),i.push([c,u,d])))}}}function Td(n){const t=te.held();if(!t||t.id!==I.EYE){yt.toast("Necesitas un Ojo de Ender");return}nt.setBlock(n.x,n.y,n.z,L.END_FRAME_EYE),Te("place"),le==="survival"&&(te.consumeHeld(1),yt.renderHotbar());const e=[];for(let i=-2;i<=2;i++)for(let s=-2;s<=2;s++)Math.max(Math.abs(i),Math.abs(s))===2&&!(Math.abs(i)===2&&Math.abs(s)===2)&&e.push([i,s]);for(const[i,s]of e){const o=n.x-i,a=n.z-s;if(e.every(([l,r])=>nt.getBlock(o+l,n.y,a+r)===L.END_FRAME_EYE)){for(let l=-1;l<=1;l++)for(let r=-1;r<=1;r++)nt.setBlock(o+l,n.y,a+r,L.END_PORTAL);Te("roar"),yt.toast("¡El portal del End se abre!");return}}}function Ad(n,t,e){for(let i=n-2;i<=n+5;i++)for(let s=e-2;s<=e+4;s++){const o=nt.getBlock(i,t,s);(o===se||un[o]||!Xo[o])&&nt.setBlock(i,t,s,L.OBSIDIAN);for(let a=t+1;a<=t+6;a++)nt.getBlock(i,a,s)!==se&&nt.setBlock(i,a,s,se)}for(let i=0;i<4;i++)for(let s=0;s<5;s++){const o=(i===0||i===3)&&(s===0||s===4),a=i===0||i===3||s===0||s===4;o||nt.setBlock(n+i,t+s,e,a?L.OBSIDIAN:L.NETHER_PORTAL)}nt.setBlock(n-1,t+1,e+2,L.TORCH),nt.setBlock(n+4,t+1,e+2,L.TORCH)}function O_(n,t){let e=null,i=1e9;const s=Qt==="nether"?20:2,o=Qt==="nether"?fe-6:fe-2;for(let a=n-24;a<=n+24;a++)for(let l=t-24;l<=t+24;l++)if(nt.chunks.has((Math.floor(a/16)+32768)*65536+(Math.floor(l/16)+32768))){for(let r=s;r<=o;r++)if(nt.getBlock(a,r,l)===L.NETHER_PORTAL){const h=Math.hypot(a-n,l-t);h<i&&(i=h,e=[a,r,l])}}return e}function z_(n){const[t,e,i]=n;let s=e;for(;nt.getBlock(t,s-1,i)===L.NETHER_PORTAL;)s--;for(const[o,a]of[[0,2],[0,-2],[2,0],[-2,0],[0,1],[0,-1],[1,0],[-1,0],[2,2],[-2,-2]]){const l=t+o,r=i+a;for(const h of[s,s+1,s-1])if(nt.isSolid(l,h-1,r)&&!nt.isSolid(l,h,r)&&!nt.isSolid(l,h+1,r)&&!un[nt.getBlock(l,h,r)]&&nt.getBlock(l,h,r)!==L.NETHER_PORTAL)return new P(l+.5,h,r+.5)}return new P(t+.5,s+1,i+2.5)}function F_(){const n=nt.topY(0,0);if(!(n<0)){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){const i=Math.max(Math.abs(t),Math.abs(e))===2;i&&Math.abs(t)===2&&Math.abs(e)===2||nt.setBlock(t,n+1,e,i?L.BEDROCK:L.END_PORTAL)}for(const[t,e]of[[-2,0],[2,0],[0,-2],[0,2]])nt.setBlock(t,n+2,e,L.TORCH);yt.toast("Se abre el portal de salida en el centro de la isla")}}async function Ra(n,t={}){if(!nt||Rt==="loading"||n===Qt&&!t.force)return;const e=Qt;Rt="loading",U.keys.clear(),Be.left=Be.right=!1,st("travelTxt").textContent="Viajando a "+wh[n]+"…",st("travel").classList.remove("hidden"),await new Promise(a=>setTimeout(a,40)),ue&&(ue.dispose(),ue=null,Wt.boss=!1,Jn=0,st("bossbar").classList.add("hidden")),qe=null,Ye.clear(),_i.clear();let i,s;t.arrive?(i=Math.floor(t.arrive.x),s=Math.floor(t.arrive.z)):n==="end"?(i=0,s=30):n==="nether"?(i=Math.floor(U.pos.x/8),s=Math.floor(U.pos.z/8)):e==="nether"?(i=Math.floor(U.pos.x*8),s=Math.floor(U.pos.z*8)):(i=Math.floor(U.spawn.x),s=Math.floor(U.spawn.z)),tn[n]||(tn[n]=Rh(n,n==="nether"?ma.nether:n==="end"?ma.end:new Map)),nt.group.visible=!1,nt=tn[n],nt.group.visible=!0,Qt=n,U.world=nt,_i.world=nt,Ri.world=nt,Ye.world=nt,Ye.dim=n,Li.setDimension(n),Jn=0,await N_(nt,i,s,3);let o;if(n==="end"){const a=nt.topY(i,s);o=new P(.5,(a>0?a:64)+1,30.5)}else if(t.respawn)o=oc(i,s);else{const a=O_(i,s);if(a)o=z_(a);else{let l;if(n==="overworld"){const r=nt.topY(i,s);l=Math.max(r>0?r:li,li)}else{l=64;for(let r=100;r>36;r--){const h=nt.getBlock(i,r,s);if(nt.isSolid(i,r,s)&&h!==L.LAVA&&!nt.isSolid(i,r+1,s)&&!nt.isSolid(i,r+2,s)&&!un[nt.getBlock(i,r+1,s)]){l=r;break}}}Ad(i,l,s),o=new P(i+1.5,l+1,s+2.5)}}U.pos.copy(o),U.vel.set(0,0,0),U.fallStart=null,U.yaw=Math.PI,Rt="play",st("travel").classList.add("hidden"),Bo=3,Wn=0,yt.toast("Has llegado a "+wh[n]),Je.event("dim",n),n==="end"&&!ga&&!Je.bosses.has("dragon")&&(ga=!0,setTimeout(()=>{Qt==="end"&&!ue&&Ko("dragon",.5,100,.5,{cx:0,cy:64,cz:0,pillars:ec()})},1500)),Ks=!0}function B_(n){Bo=Math.max(0,Bo-n);const t=Math.floor(U.pos.x),e=Math.floor(U.pos.z),i=nt.getBlock(t,Math.floor(U.pos.y+.2),e),s=nt.getBlock(t,Math.floor(U.pos.y+1.2),e),o=i===L.NETHER_PORTAL||s===L.NETHER_PORTAL?"nether":i===L.END_PORTAL||s===L.END_PORTAL?"end":null,a=le==="creative"?.6:3;o&&Bo<=0&&Rt==="play"?(Wn+=n,Wn>=a&&(Wn=0,Ra(o==="nether"?Qt==="nether"?"overworld":"nether":Qt==="end"?"overworld":"end"))):Wn=Math.max(0,Wn-n*2);const l=st("portalfx");l.style.opacity=Math.min(1,Wn/a)*.9,l.style.background=o==="end"?"radial-gradient(ellipse at center, rgba(20,60,70,.5), rgba(2,10,14,.95))":""}function k_(n,t,e){qe={x:n,y:t,z:e,t:5,s:0},Te("roar"),Wt.set("storm"),Wt.boss=!0,yt.toast("El bloque de comandos late… ¡aléjate!")}function H_(n){if(qe.t-=n,qe.s-=n,Wt.timer=9999,qe.s<=0&&(qe.s=.9,Wt.strike(U,!1,{x:qe.x,z:qe.z}),Ri.burst(qe.x+.5,qe.y+1,qe.z+.5,[.7,.3,1],20,5)),qe.t<=0){const t=qe;qe=null,nt.setBlock(t.x,t.y,t.z,se),Ko("storm",t.x+.5,t.y+14,t.z+.5),Te("roar"),yt.toast("¡LA TORMENTA WITHER HA DESPERTADO!")}}function G_(){const n=U.eye,t=U.lookDir(),e=ue&&ue.raycast(n,t,7),i=nt.raycast(n,t,7);if(e&&(!i||e.dist<i.dist)){const r=vs(te.held());return ue.hit(le==="creative"?12:r?r.dmg:1,e.crit,e),Te("hit"),e.crit&&yt.toast("¡Golpe crítico al bloque de comandos!"),le==="survival"&&r&&(te.wearHeld(1),yt.renderHotbar()),!0}const s=Ye.raycast(n,t,3.6),o=nt.raycast(n,t,3.6);if(!s||o&&o.dist<s.dist)return!1;const a=vs(te.held()),l=le==="creative"?20:a?a.dmg:1;return Ye.damage(s.mob,l,U.pos.x,U.pos.z),Ri.burst(s.mob.pos.x,s.mob.pos.y+s.mob.h*.6,s.mob.pos.z,[.8,.1,.1],6,2.5),le==="survival"&&a&&(te.wearHeld(1),yt.renderHotbar()),!0}function V_(n){const t=U.eye,e=U.lookDir(),i=nt.raycast(t,e,le==="creative"?7:5.5);ua.visible=!!i,i&&ua.position.set(i.x+.5,i.y+.5,i.z+.5),kr=Math.max(0,kr-n),Lo=Math.max(0,Lo-n),xa=Math.max(0,xa-n);let s=0;if(Be.left&&i){const o=i.x+","+i.y+","+i.z;if(o!==Wi.key&&(Wi.key=o,Wi.progress=0),Fi=Fi>0?Fi:.001,le==="creative")kr<=0&&(Ah(i),kr=.2);else{const a=av(i.id,te.held())*(U.effects.fatigue>0?3:1);Wi.progress+=n/a,s=Math.min(1,Wi.progress),Math.floor(Wi.progress*6)!==Math.floor((Wi.progress-n/a)*6)&&Te("hit"),Wi.progress>=1&&(Ah(i),Wi.key="",Wi.progress=0,s=0)}zo.position.set(i.x+.5,i.y+.5,i.z+.5)}else Wi.key="",Wi.progress=0;zo.visible=s>0,s>0&&(zo.material.map=gd[Math.min(9,Math.floor(s*10))]),st("breakbar").classList.toggle("hidden",s<=0),st("breakbar").firstElementChild.style.width=s*100+"%",Be.right&&Lo<=0&&(Lo=.22,rc())}function W_(n){for(const t of fn.values()){const[e,i,s]=t.slots,o=e&&sv[e.id],a=o&&(!s||s.id===o[0]&&s.n+o[1]<=Sn(o[0]));t.burn>0&&(t.burn-=n),a?(t.burn<=0&&i&&Pf[i.id]&&(t.burn=t.burnMax=Pf[i.id],i.n--,i.n<=0&&(t.slots[1]=null)),t.burn>0?(t.cook+=n,t.cook>=ju&&(t.cook=0,e.n--,e.n<=0&&(t.slots[0]=null),s?s.n+=o[1]:t.slots[2]={id:o[0],n:o[1],d:0})):t.cook=Math.max(0,t.cook-n*2)):t.cook=0}}function va(n){Xi=n,_e.cam=n,Yn(),st("bCam").textContent="Cámara: "+fa[n],yt&&yt.toast("Cámara: "+fa[n])}function X_(){if(U.dead){so.group.visible=!1;return}if(so.group.visible=Xi!==0,Yo.visible=Xi===0,Xi===0)return;const n=U.eye,t=U.lookDir().multiplyScalar(Xi===1?-1:1),e=nt.raycast(n,t,4.2),i=e?Math.max(.3,e.dist-.3):4.2;oi.position.copy(n).addScaledVector(t,i),Xi===1?oi.rotation.set(U.pitch,U.yaw,0,"YXZ"):oi.rotation.set(-U.pitch,U.yaw+Math.PI,0,"YXZ")}function Rd(n){const t=te.held(),e=t?t.id:0;so.setHeld(e),e!==Zf&&(Zf=e,e&&(yh.map=tc(e),yh.needsUpdate=!0),da.visible=!!e,Fo.visible=!e,da.scale.setScalar(Zu(e)?.7:.6)),Fi>0&&(Fi+=n*3.5,Fi>=1&&(Fi=Be.left?.001:0));const i=Math.sin(Math.min(1,Fi)*Math.PI);Yo.position.set(.5-i*.12,-.5+i*.08-Math.sin(performance.now()/400)*.004,-.85-i*.1),Yo.rotation.set(-i*.9,-.35,-i*.2),e||(Fo.position.set(0,-.1,-.1),Fo.rotation.set(.4,0,0))}function _a(n,t=null){Rt==="play"&&(Rt="inv",U.keys.clear(),Be.left=Be.right=!1,document.exitPointerLock(),yt.open(n,t))}function Qf(n){yt.close(),n?(Rt="play",fo()):(Rt="pause",Pi("pause"))}function $o(){yt.renderHotbar();const n=te.held();n&&yt.toast(wa(n.id).name)}function q_(){Jn=0,ue&&(ue.dispose(),ue=null,Wt.boss=!1,Wt.set("rain"),st("bossbar").classList.add("hidden"),yt.toast("La tormenta se retira…")),qe=null,Rt="dead",Te("die"),U.keys.clear(),Be.left=Be.right=!1;for(let n=0;n<36;n++){const t=te.slots[n];t&&(_i.spawn(U.pos.x,U.pos.y+1,U.pos.z,t.id,t.n),te.slots[n]=null)}yt.renderHotbar(),document.exitPointerLock(),Pi("death")}async function Ms(){if(!nt||!pa)return!1;const n={v:3,gen:2,dim:Qt,seed:Ln,mode:le,time:Li.time,pos:U.pos.toArray(),yaw:U.yaw,pitch:U.pitch,hp:U.hp,food:U.food,spawn:U.spawn.toArray(),inv:te.toJSON(),furnaces:[...fn.entries()],weather:Wt.toJSON(),quests:Je.toJSON(),xp:{l:nn,p:Zn}},t=[];for(const[i,s]of Object.entries(tn))for(const o of s.unsaved)s.chunks.has(o)&&t.push([i==="overworld"?o:(i==="nether"?"n:":"e:")+o,new Uint8Array(s.chunks.get(o))]);const e=await ld(pa,n,t,{name:ic,mode:le,seed:Ln,created:xd,played:Math.floor(nc),level:nn,thumb:sc});if(e)for(const i of Object.values(tn))i.unsaved.clear();return e}function Y_(){try{const n=document.createElement("canvas");n.width=160,n.height=90,n.getContext("2d").drawImage(In,0,0,160,90),sc=n.toDataURL("image/jpeg",.6)}catch{}}async function K_(){Ks=!0,await new Promise(t=>setTimeout(t,120));const n=await Ms();return yt.toast(n?"💾 Partida guardada":"⚠ No se pudo guardar"),n}async function tu({id:n,name:t,seed:e,mode:i,saved:s,meta:o,created:a,played:l,nether:r,end:h}){Rt="loading",le=i,Ln=e,pa=n,ic=t||"Mundo",xd=a||Date.now(),nc=l||0,sc=null,Pi("menu"),st("msg").textContent="Generando mundo…",st("menuBody").classList.add("hidden"),fn.clear();for(const u of Object.values(tn))ni.remove(u.group);tn={},ma={nether:r||new Map,end:h||new Map},ga=!1,Wn=0,Bo=0,Qt=o&&o.dim||"overworld",tn.overworld=Rh("overworld",s),Qt!=="overworld"&&(tn[Qt]=Rh(Qt,ma[Qt])),nt=tn[Qt],nt.group.visible=!0,te=new o_,U=new s_(nt,oi),U.mode=le,so||(so=new xv(ni)),Li=new p_(ni,oi,jn),Li.setDimension(Qt),Eh||(Eh=new Jv(ni)),pd(),Wt=new _v(ni,{world:()=>nt,sky:()=>Li,sound:(u,d)=>_h(u,d),burst:(u,d,p)=>{Ri.burst(u,d,p,[1,1,.8],24,6),Ri.burst(u,d,p,[.3,.3,.35],14,4)},hurtPlayer:u=>U.damage(u),strikeMobs:(u,d)=>{for(const p of[...Ye.list])Math.hypot(p.pos.x-u,p.pos.z-d)<3.5&&Ye.damage(p,12,u,d)}}),Sh={world:()=>nt,explode:(u,d,p,x,g)=>wl(u,d,p,x,g),toast:u=>yt.toast(u),sound:(u,d)=>_h(u,d),burst:(u,d,p,x,g,m)=>Ri.burst(u,d,p,x,g,m),hurtPlayer:(u,d,p)=>U.damage(u,d,p),strikeNear:(u,d)=>Wt.strike(U,!1,{x:u,z:d}),minions:()=>Ye.list.filter(u=>u.def.hostile).length,effect:(u,d)=>{le==="survival"&&(U.effects[u]=Math.max(U.effects[u],d))},darkness:u=>{Jn=u},player:()=>U,spawnMinion:u=>{for(let d=0;d<6;d++){const p=Math.random()*Math.PI*2,x=10+Math.random()*8,g=Math.floor(U.pos.x+Math.cos(p)*x),m=Math.floor(U.pos.z+Math.sin(p)*x),y=ac(g,m);if(y!==null){const S=u||(Qt==="nether"?"piglin":Qt==="end"?"endermite":Math.random()<.6?"zombie":"creeper");Ye.add(S,g+.5,io[S].fly?y+4:y,m+.5);return}}},loot:(u,d,p,x="storm")=>{for(const[g,m]of $f[x]||$f.storm)_i.spawn(u,d,p,g,m)},done:()=>{const u=ue?ue.type:"storm";Je.event("boss",u),Co(100),Te("craft"),u==="dragon"&&Qt==="end"&&setTimeout(F_,1200),ue=null,Wt.boss=!1,Jn=0,Wt.state==="storm"&&Wt.set("rain"),st("bossbar").classList.add("hidden")}},ue=null,qe=null,sn=null,Jn=0,Je=new Zv({reward:u=>{for(const[d,p]of u){const x=te.add(d,p);x&&Th(d,x)}yt.renderHotbar()},toast:u=>yt.toast(u),xp:Co,sound:Te}),_i=new Mv(ni,nt),Ri=new yv(ni,nt),Ye=new Tv(ni,nt,{effect:(u,d)=>{le==="survival"&&(U.effects[u]=Math.max(U.effects[u]||0,d))},killed:(u,d)=>{Je.event("kill",u),Co(d)},tp:(u,d,p)=>{Ri.burst(u,d,p,[.7,.2,1],14,3),Te("pop")},hurtPlayer:(u,d,p)=>U.damage(u,d,p),explode:wl,drop:(u,d,p,x,g)=>_i.spawn(u,d,p,x,g),sound:Te,puff:(u,d,p)=>Ri.burst(u,d,p,[.9,.9,.9],12,3)}),yt=new m_({inv:te,player:U,getMode:()=>le,dropItem:Th,sound:Te,onSelect:$o,onCraft:(u,d)=>Je.event("craft",u,d)}),nn=0,Zn=0,U.events.onHurt=()=>{Te("hurt");const u=st("vignette");u.classList.add("hurt"),setTimeout(()=>u.classList.remove("hurt"),120)},U.events.onStep=()=>Te("step"),U.events.onLand=u=>Te(u>3?"hurt":"place"),U.events.onSplash=()=>Te("splash"),U.events.onDeath=q_,U.events.onVoid=()=>{if(Qt==="end"){U.damage(6);const u=nt.topY(0,30);U.pos.set(.5,(u>0?u:64)+1,30.5),U.vel.set(0,0,0),yt.toast("Caíste al vacío…")}else U.pos.y=70,U.vel.set(0,0,0),U.damage(4)},Ye.dim=Qt;let f,c;if(o?(Wt.load(o.weather),Je.load(o.quests),o.xp&&(nn=o.xp.l,Zn=o.xp.p),te.load(o.inv),(o.furnaces||[]).forEach(([u,d])=>fn.set(u,d)),Li.time=o.time,U.hp=o.hp,U.food=o.food,U.yaw=o.yaw,U.pitch=o.pitch,U.spawn.fromArray(o.spawn),U.pos.fromArray(o.pos),f=Math.floor(o.pos[0]),c=Math.floor(o.pos[2])):([f,c]=A_(Ln),U.pos.set(f+.5,70,c+.5)),await new Promise(u=>{const d=()=>{const p=nt.update(f,c,3,10);st("msg").textContent="Generando mundo… "+Math.max(0,100-p*2)+"%",p>0?setTimeout(d,0):u()};d()}),o)U.vel.set(0,0,0);else{const u=oc(f,c);U.pos.copy(u),U.spawn.copy(u)}yt.renderHotbar(),yt.renderStats(),Rd(0),va(Xi),window.__game={get world(){return nt},player:U,inv:te,sky:Li,mobs:Ye,drops:_i,ui:yt,camera:oi,scene:ni,renderer:pi,get mode(){return le},set mode(u){le=u,U.mode=u},get state(){return Rt},set state(u){Rt=u},explode:wl,saveGame:Ms,openInventory:_a,mouse:Be,useItem:rc,breakBlock:Ah,furnaces:fn,setCam:va,get weather(){return Wt},get boss(){return ue},summon:(u,d,p)=>Ko("storm",u,d,p),summonBoss:_d,summonMob:Md,get quests(){return Je},materials:jn,renderer:pi,get composer(){return Ti},changeDimension:Ra,get dim(){return Qt},get dims(){return tn},lightPortal:wd,findPortalFrame:Sd,useEyeOnFrame:Td,buildNetherPortal:Ad,openPanel:ms,closePanel:gs,addXp:Co,terrainInfo:qn,openChest:Ed,rollLoot:bd,get xp(){return[nn,Zn]}},Rt="play",Pi(null),fo(),setTimeout(()=>{document.pointerLockElement!==In&&Rt==="play"&&!Qn&&(Rt="pause",Pi("pause"))},1500)}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===In?(Rt==="pause"||Rt==="play")&&(Rt="play",Pi(null)):(U&&U.keys.clear(),Be.left=Be.right=!1,Rt==="play"&&!Qn&&(Rt="pause",Pi("pause")))});document.addEventListener("mousemove",n=>{Rt!=="play"||document.pointerLockElement!==In||(U.yaw-=n.movementX*.0022*_e.sens,U.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,U.pitch-n.movementY*.0022*_e.sens)))});document.addEventListener("keydown",n=>{if(n.isTrusted&&(Qn=!1),no(),Rt==="panel"){n.code==="Escape"?gs(!1):n.code==="KeyB"&&sn==="summon"||n.code==="KeyM"&&sn==="quests"?gs(!0):n.code==="KeyP"&&sn==="padcfg"&&gs(!1);return}if(Rt==="inv"){n.code==="KeyE"?(n.preventDefault(),Qf(!0)):n.code==="Escape"&&Qf(!1);return}if(Rt==="play"){if(n.code.startsWith("Digit")){const t=+n.code.slice(5)-1;t>=0&&t<9&&(te.selected=t,$o());return}switch(n.code){case"KeyE":_a(2);return;case"KeyB":ms("summon");return;case"KeyP":ms("padcfg");return;case"KeyM":ms("quests");return;case"F3":n.preventDefault(),st("info").classList.toggle("hidden");return;case"KeyT":if(!n.repeat){const t=Wt.cycle();yt.toast("Clima: "+gh[t])}return;case"KeyV":case"F5":n.preventDefault(),n.repeat||va((Xi+1)%3);return;case"KeyF":le==="creative"&&!n.repeat&&(U.flying=!U.flying,U.vel.y=0,yt.toast(U.flying?"Vuelo activado":"Vuelo desactivado"));return;case"KeyG":n.repeat||(le=le==="creative"?"survival":"creative",U.mode=le,le==="survival"&&(U.flying=!1),yt.renderStats(),yt.toast("Modo "+(le==="creative"?"creativo":"supervivencia")));return;case"KeyQ":if(le==="survival"&&!n.repeat){const t=te.held();t&&(Th(t.id,1),te.consumeHeld(1),yt.renderHotbar());return}break}(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),U.keys.add(n.code)}});document.addEventListener("keyup",n=>U&&U.keys.delete(n.code));document.addEventListener("wheel",n=>{Rt==="play"&&(te.selected=(te.selected+Math.sign(n.deltaY)+9)%9,$o())});In.addEventListener("contextmenu",n=>n.preventDefault());function Cd(){Be.left=!0,Fi=Fi||.001,xa<=0&&G_()&&(xa=.4,Be.left=!1)}function Ld(){Be.right=!0,Lo=.22,rc()}document.addEventListener("mousedown",n=>{if(n.isTrusted&&(Qn=!1),n.isTrusted&&Rt==="play"&&document.pointerLockElement!==In){fo();return}Rt!=="play"||document.pointerLockElement!==In||(n.button===0?Cd():n.button===2&&Ld())});document.addEventListener("mouseup",n=>{n.button===0&&(Be.left=!1),n.button===2&&(Be.right=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&Rt!=="menu"&&Ms()});addEventListener("beforeunload",()=>{nt&&Rt!=="menu"&&Ms()});function lc(){pi.setSize(innerWidth,innerHeight,!1),Ti&&Ti.setSize(innerWidth,innerHeight),oi.aspect=innerWidth/innerHeight,oi.updateProjectionMatrix()}addEventListener("resize",lc);lc();function hc(){no(),Pi(null),Rt="play",fo()}st("bResume").onclick=hc;st("bPPad").onclick=()=>{Pi(null),Rt="play",ms("padcfg")};st("bSave").onclick=async()=>{Ks=!0,await new Promise(n=>setTimeout(n,120)),await Ms(),location.reload()};st("bSaveNow").onclick=async()=>{await K_(),st("bSaveNow").textContent="💾 Guardado ✔",setTimeout(()=>st("bSaveNow").textContent="💾 Guardar partida",1500)};st("bExport").onclick=async()=>{await Ms();const n=await cd(pa),t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=ic.replace(/[^\w\-]+/g,"_")+".mcw",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3)};st("bRespawn").onclick=async()=>{if(no(),Pi(null),Qt!=="overworld"&&(Rt="play",await Ra("overworld",{respawn:!0})),U.respawn(),Qt==="overworld"){const n=oc(Math.floor(U.spawn.x),Math.floor(U.spawn.z));U.pos.copy(n)}Rt="play",yt.renderStats(),fo()};st("bCam").onclick=()=>va((Xi+1)%3);st("bQuality").onclick=()=>{_e.quality=(_e.quality+1)%Mh.length,Yn(),pd(),yt&&yt.toast("Gráficos: "+Mh[_e.quality].name)};st("bPSummon").onclick=()=>{Pi(null),Rt="play",ms("summon")};st("bPQuests").onclick=()=>{Pi(null),Rt="play",ms("quests")};const Ca=(n,t,e,i,s)=>{const o=st(n),a=st(t);o.value=_e[e],a.textContent=i(_e[e]),s&&s(_e[e]),o.oninput=l=>{_e[e]=+l.target.value,a.textContent=i(_e[e]),s&&s(_e[e]),Yn()}};Ca("rRadius","vRadius","radius",n=>n,n=>Jr=n);Ca("rFov","vFov","fov",n=>n);Ca("rSens","vSens","sens",n=>n.toFixed(1));Ca("rVol","vVol","vol",n=>Math.round(n*100),n=>g_(n));st("bCam").textContent="Cámara: "+fa[Xi];oe=new Qv(_e.pad);const Po=new Set,Ge={x:innerWidth/2,y:innerHeight/2};let Do=!1,ko=!1,Ho=!1,eu="",Hr=null;const Ch=(n,t,e)=>Math.max(t,Math.min(e,n)),Pd=n=>{document.dispatchEvent(new KeyboardEvent("keydown",{code:n,bubbles:!0})),document.dispatchEvent(new KeyboardEvent("keyup",{code:n,bubbles:!0}))};function Qr(n,t){t?Po.has(n)||(Po.add(n),U.keys.add(n)):Po.has(n)&&(Po.delete(n),U.keys.delete(n))}function Lh(){if(U){for(const n of[...Po])Qr(n,!1);U.analog=null,Do=!1,ko&&(ko=!1,Be.left=!1),Ho&&(Ho=!1,Be.right=!1)}}function Dd(){if(Rt==="play"){Rt="pause",Pi("pause");try{document.exitPointerLock()}catch{}}else Rt==="pause"?hc():Id()}function Id(){Rt==="inv"?Pd("KeyE"):Rt==="panel"?gs(sn!=="padcfg"):Rt==="pause"&&hc()}function Nd(){return[...document.querySelectorAll("button, input[type=range], .slot[data-g]")].filter(n=>{if(n.disabled||n.offsetParent===null)return!1;const t=n.getBoundingClientRect();return t.width>0&&t.height>0&&t.bottom>0&&t.top<innerHeight&&t.right>0&&t.left<innerWidth})}function $_(){const n=Nd();if(!n.length)return;const e=(n.find(i=>i.classList.contains("primary"))||n.find(i=>i.dataset.g==="inv"&&i.parentElement.id==="invHot")||n[0]).getBoundingClientRect();Ge.x=e.left+e.width/2,Ge.y=e.top+e.height/2}function j_(n){let t=null,e=1e9;for(const i of Nd()){const s=i.getBoundingClientRect(),o=s.left+s.width/2,a=s.top+s.height/2,l=o-Ge.x,r=a-Ge.y,h=l*n[0]+r*n[1];if(h<5)continue;const f=h+Math.abs(l*n[1]-r*n[0])*2.4;f<e&&(e=f,t=[o,a])}t&&(Ge.x=t[0],Ge.y=t[1])}function iu(n){const t=document.elementFromPoint(Ge.x,Ge.y);if(!t)return;no();const e=t.closest&&t.closest("input[type=range]");if(e&&n===0){const s=e.getBoundingClientRect(),o=Ch((Ge.x-s.left)/s.width,0,1),a=+e.min,l=+e.max,r=+e.step||1;e.value=Math.round((a+o*(l-a))/r)*r,e.dispatchEvent(new Event("input",{bubbles:!0}));return}const i={bubbles:!0,cancelable:!0,clientX:Ge.x,clientY:Ge.y,button:n,view:window};t.dispatchEvent(new MouseEvent("mousedown",i)),t.dispatchEvent(new MouseEvent("mouseup",i)),n===0?t.dispatchEvent(new MouseEvent("click",i)):t.dispatchEvent(new MouseEvent("contextmenu",i))}function Z_(n,t){const e=st("padcursor");e.classList.remove("hidden");const i=Rt+"|"+[...document.querySelectorAll("#overlay > div:not(.hidden)")].map(h=>h.id).join(",")+"|"+(sn||"");i!==eu&&(eu=i,$_());const s=oe.stick(n.axes,0,1,1.25),o=oe.stick(n.axes,2,3,1);let a=!1;s.m>0&&(Ge.x=Ch(Ge.x+s.x*t*1100,0,innerWidth-1),Ge.y=Ch(Ge.y+s.y*t*1100,0,innerHeight-1),a=!0),e.style.left=Ge.x+"px",e.style.top=Ge.y+"px";const l=document.elementFromPoint(Ge.x,Ge.y),r=l&&l.closest?l.closest("button, .slot[data-g], input"):null;if(r!==Hr&&(Hr&&Hr.classList.remove("padhover"),Hr=r,r&&r.classList.add("padhover")),a&&l&&l.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0,clientX:Ge.x,clientY:Ge.y})),o.m>0){let h=l;for(;h&&h!==document.body;){if(h.scrollHeight>h.clientHeight+4&&/(auto|scroll)/.test(getComputedStyle(h).overflowY)){h.scrollTop+=o.y*t*800;break}h=h.parentElement}}[[12,[0,-1]],[13,[0,1]],[14,[-1,0]],[15,[1,0]]].forEach(([h,f])=>{n.edge[h]&&j_(f)}),oe.edge("jump")&&iu(0),oe.edge("fall")&&iu(2),(oe.edge("drop")||oe.edge("inventory")&&Rt==="inv")&&Id(),oe.edge("pause")&&Dd()}function J_(n,t){const e=oe.stick(n.axes,0,1,1),i=oe.stick(n.axes,2,3),s=_e.pad;U.analog=e.m>0?{x:e.x,y:-e.y}:null,oe.edge("sprint")&&(Do=!Do),e.m<.2&&(Do=!1),Qr("ShiftLeft",Do&&e.y<-.2),i.m>0&&(U.yaw-=i.x*s.lookX*_e.sens*t,U.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,U.pitch-i.y*s.lookY*_e.sens*t*(s.invertY?-1:1)))),Qr("Space",oe.down("jump")),Qr("KeyQ",oe.down("fall")&&U.flying);const o=oe.down("attack"),a=oe.down("use");o&&!ko&&Cd(),!o&&ko&&(Be.left=!1),ko=o,a&&!Ho&&Ld(),!a&&Ho&&(Be.right=!1),Ho=a,oe.edge("prev")&&(te.selected=(te.selected+8)%9,$o()),oe.edge("next")&&(te.selected=(te.selected+1)%9,$o());const l={inventory:"KeyE",drop:"KeyQ",summon:"KeyB",quests:"KeyM",camera:"KeyV",fly:"KeyF",weather:"KeyT",debug:"F3",mode:"KeyG",config:"KeyP"};for(const[r,h]of Object.entries(l))oe.edge(r)&&Pd(h);oe.edge("pause")&&Dd()}function Q_(n){const t=oe.poll(),e=st("padcursor");if(!t.connected){Lh(),e.classList.add("hidden");return}t.busy||(t.any&&!Qn&&(Qn=!0),sn==="padcfg"&&tM(t),Rt==="play"&&nt&&U?(e.classList.add("hidden"),(Qn||t.any)&&J_(t,n)):(Lh(),["menu","pause","inv","panel","dead"].includes(Rt)?Z_(t,n):e.classList.add("hidden")))}addEventListener("gamepadconnected",n=>{Qn=!0,yt&&yt.toast("🎮 Mando conectado"),st("msg")&&Rt==="menu"&&(st("msg").textContent="🎮 Mando conectado: mueve el cursor con el stick izquierdo y pulsa ✕")});addEventListener("gamepaddisconnected",()=>{Lh(),yt&&yt.toast("🎮 Mando desconectado")});function Vs(){const n=_e.pad,t=st("padStatus");t.className=oe.connected?"ok":"bad",t.textContent=oe.connected?"✔ Conectado: "+oe.id:"✖ No hay mando: conéctalo por USB/Bluetooth y pulsa cualquier botón (los navegadores no lo ven hasta entonces).",st("padMap").innerHTML=nd.map(i=>`<div class="prow"><span>${i.label}</span><b>${Bf[n.map[i.id]]||"Botón "+n.map[i.id]}</b><button data-pa="${i.id}">Cambiar</button></div>`).join("");const e=(i,s,o,a)=>{const l=st(i);l.value=n[o],st(s).textContent=a(n[o]),l.oninput=r=>{n[o]=+r.target.value,st(s).textContent=a(n[o]),Yn()}};e("pLookX","vLookX","lookX",i=>i.toFixed(1)),e("pLookY","vLookY","lookY",i=>i.toFixed(1)),e("pDead","vDead","deadzone",i=>i.toFixed(2)),e("pCurve","vCurve","curve",i=>i.toFixed(1)),st("pInvert").textContent="Invertir Y: "+(n.invertY?"sí":"no"),st("pRumble").textContent="Vibración: "+(n.rumble?"sí":"no"),st("padTest").innerHTML=Bf.map((i,s)=>`<span class="chip" data-b="${s}">${i}</span>`).join("")+'<div class="axis" data-ax="0"><i></i></div><div class="axis" data-ax="1"><i></i></div><div class="axis" data-ax="2"><i></i></div><div class="axis" data-ax="3"><i></i></div>'}function tM(n){document.querySelectorAll("#padTest .chip").forEach(e=>e.classList.toggle("on",!!n.down[+e.dataset.b])),document.querySelectorAll("#padTest .axis").forEach(e=>{const i=n.axes[+e.dataset.ax]||0;e.firstElementChild.style.left=(i+1)/2*(e.clientWidth-8)+"px"});const t=st("padStatus");t&&oe.connected&&!t.classList.contains("ok")&&Vs()}st("padcfg").addEventListener("click",n=>{const t=_e.pad,e=n.target.closest("button");if(e){if(e.dataset.pa){if(!oe.connected){yt.toast("Conecta el mando y pulsa un botón");return}const i=e.dataset.pa;e.textContent="Pulsa un botón…",e.classList.add("listen"),oe.listen(s=>{const o=t.map[i],a=Object.keys(t.map).find(l=>l!==i&&t.map[l]===s);a&&(t.map[a]=o),t.map[i]=s,Yn(),Vs()})}else if(e.id==="pInvert")t.invertY=!t.invertY,Yn(),Vs();else if(e.id==="pRumble")t.rumble=!t.rumble,Yn(),Vs(),t.rumble&&oe.rumble(.6,.6,250);else if(e.id==="pReset"){const i=vh();Object.assign(t,i),t.map=i.map,Yn(),Vs()}}});let nu=performance.now(),Gr=0,Tl=0,Al=0;function Ud(n){requestAnimationFrame(Ud);const t=Math.min(.1,(n-nu)/1e3);if(nu=n,Q_(t),!(!nt||Rt==="menu"||Rt==="loading")){if(Gr+=t,Tl++,Gr>=.5&&(Al=Math.round(Tl/Gr),Gr=0,Tl=0),Rt!=="pause"){{const r=te.held();U.canGlide=!!(r&&r.id===I.ELYTRA)}U.update(t),so.update(t,U,Fi),X_(),W_(t);const e=Math.floor(U.pos.x),i=Math.floor(U.pos.z),s=Qt==="overworld",o=s&&Uf(e,i,Ln)==="snow";s?Wt.update(t,U,oi,o,U.headUnder):(Wt.rain.visible=Wt.snow.visible=!1,Wt.wind.x=Wt.wind.z=0,Wt.wind.s=.12,Wt.intensity=0);const a=s?nt.skyLit(e,Math.floor(U.pos.y+1.6),i):0;if(U.wind.x=Wt.wind.x*1.4*a*(Wt.state==="clear"?0:1),U.wind.z=Wt.wind.z*1.4*a*(Wt.state==="clear"?0:1),ha.uTime.value+=t,ha.uWind.value=.25+Wt.wind.s*2.2,s?Wf(Wt.intensity*(.25+.75*a)*(U.headUnder?.2:1),Wt.wind.s*(.3+.7*a)*(Wt.state==="clear"?.25:1),Wt.t*.4):Wf(0,.18,Wt.t*.2),Li.update(t,oi.position,Jr*16,U.headUnder,Wt.wind),Eh.update(t,oi,Qt),B_(t),jf=nt.update(U.pos.x,U.pos.z,Jr,jf)>40?4:2,U.push.x=U.push.y=U.push.z=0,qe&&H_(t),ue&&(md.has(ue.type)&&(Wt.timer=9999,Wt.boss=!0),ue.update(t,U,nt),ue&&(st("bossbar").classList.remove("hidden"),st("bossFill").style.width=Math.max(0,ue.hp/ue.maxHp*100)+"%",st("bossPhase").textContent="Fase "+ue.phase,st("bossName").firstChild.nodeValue!==ue.name+" "&&(st("bossName").firstChild.nodeValue=ue.name+" "))),Ye.update(t,U,le,Li.daylight,Jr),_i.update(t,U,te,r=>{Te("pop"),yt.renderHotbar(),Je.event("collect",r.id,r.n)}),Ri.update(t),Rt==="play"&&V_(t),Rd(t),st("water").classList.toggle("hidden",!U.headUnder),oi.fov+=(_e.fov+(U.keys.has("ShiftLeft")&&U.keys.has("KeyW")?7:0)-oi.fov)*Math.min(1,t*8),yt.isOpen&&yt.furnace&&(yt.furnaceBars(),Ml-=t,Ml<=0&&(Ml=.5,yt.render())),oi.updateProjectionMatrix(),El-=t,El<=0){El=.2,yt.renderStats();const r=(Li.time*24+6)%24,h=Math.floor(r),f=Math.floor((r-h)*60);st("info").textContent=`${Al} FPS · ${le==="creative"?"Creativo":"Supervivencia"}
XYZ ${U.pos.x.toFixed(1)} ${U.pos.y.toFixed(1)} ${U.pos.z.toFixed(1)}
Bioma: ${Uf(Math.floor(U.pos.x),Math.floor(U.pos.z),Ln)} · ${String(h).padStart(2,"0")}:${String(f).padStart(2,"0")}
Mobs: ${Ye.list.length} · Clima: ${gh[Wt.state]}${o?" (nieve)":""} · Viento ${(Wt.wind.s*20).toFixed(0)} km/h${U.flying?" · [VUELO]":""}`,st("cam").textContent="📷 "+fa[Xi]+"  [V]",st("mmInfo").textContent=`${Math.floor(U.pos.x)}, ${Math.floor(U.pos.y)}, ${Math.floor(U.pos.z)}
${String(h).padStart(2,"0")}:${String(f).padStart(2,"0")} · ${Qt==="overworld"?gh[Wt.state]:wh[Qt]}
📷 ${["1ª persona","3ª detrás","3ª delante"][Xi]} · ${Al} FPS`,st("xpFill").style.width=Zn/bh(nn)*100+"%",st("xpLvl").textContent=nn,st("xp").style.visibility=le==="survival"?"visible":"hidden";const c=[];U.effects.poison>0&&c.push(`<span style="border-color:#7a2">☠ Veneno ${Math.ceil(U.effects.poison)}s</span>`),U.effects.fatigue>0&&c.push(`<span style="border-color:#6cf">⛏ Fatiga ${Math.ceil(U.effects.fatigue)}s</span>`),U.effects.burn>0&&c.push(`<span style="border-color:#f80">🔥 Fuego ${Math.ceil(U.effects.burn)}s</span>`),U.effects.levitate>0&&c.push(`<span style="border-color:#fff">☁ Levitación ${Math.ceil(U.effects.levitate)}s</span>`),st("effects").innerHTML=c.join(""),st("darkness").style.opacity=Jn}yl-=t,yl<=0&&(yl=.4,D_()),Sl-=t,Sl<=0&&(Sl=.5,I_()),nc+=t,bl+=t,bl>25&&(bl=0,Ks=!0)}dd&&(ud.uniforms.uTime.value=n%1e4/1e3),Ti?Ti.render(t):pi.render(ni,oi),Ks&&(Ks=!1,Y_(),Ms())}}requestAnimationFrame(Ud);(async function(){const t=a=>(a>=3600?Math.floor(a/3600)+" h ":"")+Math.floor(a%3600/60)+" min",e=a=>{let l=7;for(const r of a)l=Math.imul(l,31)+r.charCodeAt(0)|0;return Math.abs(l)%9e5+1};async function i(){const a=await od();return st("worldsBox").classList.toggle("hidden",!a.length),st("worldList").innerHTML=a.map(l=>`<div class="wcard" data-id="${l.id}"><img src="${l.thumb||""}" alt=""><div><b>${(l.name||"Mundo").replace(/</g,"&lt;")}</b><small>${l.mode==="creative"?"Creativo":"Supervivencia"} · nivel ${l.level||0} · ${t(l.played||0)} · ${new Date(l.updated).toLocaleString()}</small></div><div class="wb"><button class="play" data-act="play">▶ Jugar</button><button data-act="export" title="Exportar">⬇</button><button data-act="rename" title="Renombrar">✎</button><button data-act="del" title="Borrar">🗑</button></div></div>`).join(""),a}let s=await i();st("msg").textContent=s.length?"Elige un mundo o crea uno nuevo":"Elige cómo jugar";const o=a=>{no();const l=st("wName").value.trim()||`Mundo ${s.length+1}`,r=st("wSeed").value.trim(),h=r?/^\d+$/.test(r)?Number(r)%9e5+1:e(r):1+Math.floor(Math.random()*9e5);tu({id:ad(),name:l,seed:h,mode:a,saved:new Map,meta:null})};st("bSurvival").onclick=()=>o("survival"),st("bCreative").onclick=()=>o("creative"),st("worldList").addEventListener("click",async a=>{const l=a.target.closest("button"),r=a.target.closest(".wcard");if(!l||!r)return;const h=r.dataset.id,f=s.find(c=>c.id===h);if(l.dataset.act==="play"){no(),st("msg").textContent="Cargando mundo…";const c=await rd(h);if(!c.meta){st("msg").textContent="No se pudo leer este mundo";return}tu({id:h,name:f.name,seed:c.meta.seed,mode:c.meta.mode,saved:c.chunks,nether:c.nether,end:c.end,meta:c.meta,created:f.created,played:f.played})}else if(l.dataset.act==="del")confirm(`¿Borrar "${f.name}" para siempre?`)&&(await M_(h),s=await i());else if(l.dataset.act==="rename"){const c=prompt("Nuevo nombre",f.name);c&&c.trim()&&(await y_(h,c.trim().slice(0,28)),s=await i())}else if(l.dataset.act==="export"){const c=await cd(h),u=document.createElement("a");u.href=URL.createObjectURL(c),u.download=(f.name||"mundo").replace(/[^\w\-]+/g,"_")+".mcw",u.click(),setTimeout(()=>URL.revokeObjectURL(u.href),4e3)}}),st("bImport").onclick=()=>st("fImport").click(),st("fImport").onchange=async a=>{const l=a.target.files[0];if(l){try{await E_(l),s=await i(),st("msg").textContent="✔ Partida importada"}catch{st("msg").textContent="⚠ Archivo no válido"}a.target.value=""}},window.__menu={refresh:async()=>s=await i()}})();
