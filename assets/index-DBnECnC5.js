(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qh="170",y0=0,Wc=1,b0=2,Id=1,Nd=2,Rn=3,as=0,Ci=1,Ri=2,On=0,eo=1,$o=2,Xc=3,qc=4,S0=5,xs=100,E0=101,w0=102,T0=103,A0=104,R0=200,C0=201,L0=202,D0=203,$l=204,Zl=205,P0=206,I0=207,N0=208,O0=209,U0=210,z0=211,k0=212,B0=213,F0=214,Jl=0,Ql=1,th=2,ro=3,eh=4,ih=5,nh=6,sh=7,tc=0,H0=1,G0=2,Un=0,Od=1,Ud=2,zd=3,ka=4,V0=5,kd=6,Bd=7,Fd=300,ao=301,lo=302,oh=303,rh=304,Ba=306,ma=1e3,Ms=1001,ah=1002,_e=1003,W0=1004,pr=1005,$i=1006,ja=1007,Dn=1008,Fn=1009,Hd=1010,Gd=1011,Zo=1012,ec=1013,Ts=1014,Pn=1015,xn=1016,ic=1017,nc=1018,ho=1020,Vd=35902,Wd=1021,Xd=1022,an=1023,qd=1024,Yd=1025,io=1026,co=1027,Kd=1028,sc=1029,jd=1030,oc=1031,rc=1033,ta=33776,ea=33777,ia=33778,na=33779,lh=35840,hh=35841,ch=35842,fh=35843,dh=36196,uh=37492,ph=37496,mh=37808,gh=37809,xh=37810,vh=37811,_h=37812,Mh=37813,yh=37814,bh=37815,Sh=37816,Eh=37817,wh=37818,Th=37819,Ah=37820,Rh=37821,sa=36492,Ch=36494,Lh=36495,$d=36283,Dh=36284,Ph=36285,Ih=36286,X0=3200,q0=3201,ac=0,Y0=1,Jn="",oi="srgb",go="srgb-linear",Fa="linear",Ce="srgb",Ps=7680,Yc=519,K0=512,j0=513,$0=514,Zd=515,Z0=516,J0=517,Q0=518,tp=519,Nh=35044,Kc="300 es",In=2e3,ga=2001;class xo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const _i=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],oa=Math.PI/180,Oh=180/Math.PI;function es(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(_i[n&255]+_i[n>>8&255]+_i[n>>16&255]+_i[n>>24&255]+"-"+_i[t&255]+_i[t>>8&255]+"-"+_i[t>>16&15|64]+_i[t>>24&255]+"-"+_i[e&63|128]+_i[e>>8&255]+"-"+_i[e>>16&255]+_i[e>>24&255]+_i[i&255]+_i[i>>8&255]+_i[i>>16&255]+_i[i>>24&255]).toLowerCase()}function Ni(n,t,e){return Math.max(t,Math.min(e,n))}function ep(n,t){return(n%t+t)%t}function $a(n,t,e){return(1-e)*n+e*t}function pn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function De(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ni(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qt{constructor(t,e,i,s,o,r,l,a,h){Qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,l,a,h)}set(t,e,i,s,o,r,l,a,h){const f=this.elements;return f[0]=t,f[1]=s,f[2]=l,f[3]=e,f[4]=o,f[5]=a,f[6]=i,f[7]=r,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],l=i[3],a=i[6],h=i[1],f=i[4],c=i[7],d=i[2],u=i[5],g=i[8],x=s[0],m=s[3],p=s[6],M=s[1],b=s[4],v=s[7],D=s[2],E=s[5],w=s[8];return o[0]=r*x+l*M+a*D,o[3]=r*m+l*b+a*E,o[6]=r*p+l*v+a*w,o[1]=h*x+f*M+c*D,o[4]=h*m+f*b+c*E,o[7]=h*p+f*v+c*w,o[2]=d*x+u*M+g*D,o[5]=d*m+u*b+g*E,o[8]=d*p+u*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],l=t[5],a=t[6],h=t[7],f=t[8];return e*r*f-e*l*h-i*o*f+i*l*a+s*o*h-s*r*a}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],l=t[5],a=t[6],h=t[7],f=t[8],c=f*r-l*h,d=l*a-f*o,u=h*o-r*a,g=e*c+i*d+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return t[0]=c*x,t[1]=(s*h-f*i)*x,t[2]=(l*i-s*r)*x,t[3]=d*x,t[4]=(f*e-s*a)*x,t[5]=(s*o-l*e)*x,t[6]=u*x,t[7]=(i*a-h*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,l){const a=Math.cos(o),h=Math.sin(o);return this.set(i*a,i*h,-i*(a*r+h*l)+r+t,-s*h,s*a,-s*(-h*r+a*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Za.makeScale(t,e)),this}rotate(t){return this.premultiply(Za.makeRotation(-t)),this}translate(t,e){return this.premultiply(Za.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Qt;function Jd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function xa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function ip(){const n=xa("canvas");return n.style.display="block",n}const jc={};function ko(n){n in jc||(jc[n]=!0,console.warn(n))}function np(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function sp(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function op(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const xe={enabled:!0,workingColorSpace:go,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===Ce&&(n.r=zn(n.r),n.g=zn(n.g),n.b=zn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===Ce&&(n.r=no(n.r),n.g=no(n.g),n.b=no(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Jn?Fa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function no(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const $c=[.64,.33,.3,.6,.15,.06],Zc=[.2126,.7152,.0722],Jc=[.3127,.329],Qc=new Qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),tf=new Qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);xe.define({[go]:{primaries:$c,whitePoint:Jc,transfer:Fa,toXYZ:Qc,fromXYZ:tf,luminanceCoefficients:Zc,workingColorSpaceConfig:{unpackColorSpace:oi},outputColorSpaceConfig:{drawingBufferColorSpace:oi}},[oi]:{primaries:$c,whitePoint:Jc,transfer:Ce,toXYZ:Qc,fromXYZ:tf,luminanceCoefficients:Zc,outputColorSpaceConfig:{drawingBufferColorSpace:oi}}});let Is;class rp{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Is===void 0&&(Is=xa("canvas")),Is.width=t.width,Is.height=t.height;const i=Is.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Is}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=xa("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=zn(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(zn(e[i]/255)*255):e[i]=zn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ap=0;class Qd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,l=s.length;r<l;r++)s[r].isDataTexture?o.push(Ja(s[r].image)):o.push(Ja(s[r]))}else o=Ja(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?rp.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let lp=0;class Li extends xo{constructor(t=Li.DEFAULT_IMAGE,e=Li.DEFAULT_MAPPING,i=Ms,s=Ms,o=$i,r=Dn,l=an,a=Fn,h=Li.DEFAULT_ANISOTROPY,f=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=es(),this.name="",this.source=new Qd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=a,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Fd)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case ma:t.x=t.x-Math.floor(t.x);break;case Ms:t.x=t.x<0?0:1;break;case ah:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case ma:t.y=t.y-Math.floor(t.y);break;case Ms:t.y=t.y<0?0:1;break;case ah:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Li.DEFAULT_IMAGE=null;Li.DEFAULT_MAPPING=Fd;Li.DEFAULT_ANISOTROPY=1;class Pe{constructor(t=0,e=0,i=0,s=1){Pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const a=t.elements,h=a[0],f=a[4],c=a[8],d=a[1],u=a[5],g=a[9],x=a[2],m=a[6],p=a[10];if(Math.abs(f-d)<.01&&Math.abs(c-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(c+x)<.1&&Math.abs(g+m)<.1&&Math.abs(h+u+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const b=(h+1)/2,v=(u+1)/2,D=(p+1)/2,E=(f+d)/4,w=(c+x)/4,C=(g+m)/4;return b>v&&b>D?b<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(b),s=E/i,o=w/i):v>D?v<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),i=E/s,o=C/s):D<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(D),i=w/o,s=C/o),this.set(i,s,o,e),this}let M=Math.sqrt((m-g)*(m-g)+(c-x)*(c-x)+(d-f)*(d-f));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(c-x)/M,this.z=(d-f)/M,this.w=Math.acos((h+u+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hp extends xo{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Pe(0,0,t,e),this.scissorTest=!1,this.viewport=new Pe(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:$i,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Li(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let l=0;l<r;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Qd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends hp{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class tu extends Li{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class cp extends Li{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=Ms,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ar{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,l){let a=i[s+0],h=i[s+1],f=i[s+2],c=i[s+3];const d=o[r+0],u=o[r+1],g=o[r+2],x=o[r+3];if(l===0){t[e+0]=a,t[e+1]=h,t[e+2]=f,t[e+3]=c;return}if(l===1){t[e+0]=d,t[e+1]=u,t[e+2]=g,t[e+3]=x;return}if(c!==x||a!==d||h!==u||f!==g){let m=1-l;const p=a*d+h*u+f*g+c*x,M=p>=0?1:-1,b=1-p*p;if(b>Number.EPSILON){const D=Math.sqrt(b),E=Math.atan2(D,p*M);m=Math.sin(m*E)/D,l=Math.sin(l*E)/D}const v=l*M;if(a=a*m+d*v,h=h*m+u*v,f=f*m+g*v,c=c*m+x*v,m===1-l){const D=1/Math.sqrt(a*a+h*h+f*f+c*c);a*=D,h*=D,f*=D,c*=D}}t[e]=a,t[e+1]=h,t[e+2]=f,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,s,o,r){const l=i[s],a=i[s+1],h=i[s+2],f=i[s+3],c=o[r],d=o[r+1],u=o[r+2],g=o[r+3];return t[e]=l*g+f*c+a*u-h*d,t[e+1]=a*g+f*d+h*c-l*u,t[e+2]=h*g+f*u+l*d-a*c,t[e+3]=f*g-l*c-a*d-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,l=Math.cos,a=Math.sin,h=l(i/2),f=l(s/2),c=l(o/2),d=a(i/2),u=a(s/2),g=a(o/2);switch(r){case"XYZ":this._x=d*f*c+h*u*g,this._y=h*u*c-d*f*g,this._z=h*f*g+d*u*c,this._w=h*f*c-d*u*g;break;case"YXZ":this._x=d*f*c+h*u*g,this._y=h*u*c-d*f*g,this._z=h*f*g-d*u*c,this._w=h*f*c+d*u*g;break;case"ZXY":this._x=d*f*c-h*u*g,this._y=h*u*c+d*f*g,this._z=h*f*g+d*u*c,this._w=h*f*c-d*u*g;break;case"ZYX":this._x=d*f*c-h*u*g,this._y=h*u*c+d*f*g,this._z=h*f*g-d*u*c,this._w=h*f*c+d*u*g;break;case"YZX":this._x=d*f*c+h*u*g,this._y=h*u*c+d*f*g,this._z=h*f*g-d*u*c,this._w=h*f*c-d*u*g;break;case"XZY":this._x=d*f*c-h*u*g,this._y=h*u*c-d*f*g,this._z=h*f*g+d*u*c,this._w=h*f*c+d*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],l=e[5],a=e[9],h=e[2],f=e[6],c=e[10],d=i+l+c;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-a)*u,this._y=(o-h)*u,this._z=(r-s)*u}else if(i>l&&i>c){const u=2*Math.sqrt(1+i-l-c);this._w=(f-a)/u,this._x=.25*u,this._y=(s+r)/u,this._z=(o+h)/u}else if(l>c){const u=2*Math.sqrt(1+l-i-c);this._w=(o-h)/u,this._x=(s+r)/u,this._y=.25*u,this._z=(a+f)/u}else{const u=2*Math.sqrt(1+c-i-l);this._w=(r-s)/u,this._x=(o+h)/u,this._y=(a+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ni(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,l=e._x,a=e._y,h=e._z,f=e._w;return this._x=i*f+r*l+s*h-o*a,this._y=s*f+r*a+o*l-i*h,this._z=o*f+r*h+i*a-s*l,this._w=r*f-i*l-s*a-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let l=r*t._w+i*t._x+s*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const a=1-l*l;if(a<=Number.EPSILON){const u=1-e;return this._w=u*r+e*this._w,this._x=u*i+e*this._x,this._y=u*s+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}const h=Math.sqrt(a),f=Math.atan2(h,l),c=Math.sin((1-e)*f)/h,d=Math.sin(e*f)/h;return this._w=r*c+this._w*d,this._x=i*c+this._x*d,this._y=s*c+this._y*d,this._z=o*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ef.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ef.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,l=t.z,a=t.w,h=2*(r*s-l*i),f=2*(l*e-o*s),c=2*(o*i-r*e);return this.x=e+a*h+r*c-l*f,this.y=i+a*f+l*h-o*c,this.z=s+a*c+o*f-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,l=e.y,a=e.z;return this.x=s*a-o*l,this.y=o*r-i*a,this.z=i*l-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Qa.copy(this).projectOnVector(t),this.sub(Qa)}reflect(t){return this.sub(Qa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Ni(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Qa=new I,ef=new ar;class lr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,l=o.count;r<l;r++)t.isMesh===!0?t.getVertexPosition(r,en):en.fromBufferAttribute(o,r),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mr.copy(i.boundingBox)),mr.applyMatrix4(t.matrixWorld),this.union(mr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Eo),gr.subVectors(this.max,Eo),Ns.subVectors(t.a,Eo),Os.subVectors(t.b,Eo),Us.subVectors(t.c,Eo),Xn.subVectors(Os,Ns),qn.subVectors(Us,Os),hs.subVectors(Ns,Us);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-hs.z,hs.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,hs.z,0,-hs.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-hs.y,hs.x,0];return!tl(e,Ns,Os,Us,gr)||(e=[1,0,0,0,1,0,0,0,1],!tl(e,Ns,Os,Us,gr))?!1:(xr.crossVectors(Xn,qn),e=[xr.x,xr.y,xr.z],tl(e,Ns,Os,Us,gr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Sn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Sn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Sn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Sn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Sn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Sn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Sn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Sn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Sn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Sn=[new I,new I,new I,new I,new I,new I,new I,new I],en=new I,mr=new lr,Ns=new I,Os=new I,Us=new I,Xn=new I,qn=new I,hs=new I,Eo=new I,gr=new I,xr=new I,cs=new I;function tl(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){cs.fromArray(n,o);const l=s.x*Math.abs(cs.x)+s.y*Math.abs(cs.y)+s.z*Math.abs(cs.z),a=t.dot(cs),h=e.dot(cs),f=i.dot(cs);if(Math.max(-Math.max(a,h,f),Math.min(a,h,f))>l)return!1}return!0}const fp=new lr,wo=new I,el=new I;class hr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):fp.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;wo.subVectors(t,this.center);const e=wo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(wo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(el.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(wo.copy(t.center).add(el)),this.expandByPoint(wo.copy(t.center).sub(el))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const En=new I,il=new I,vr=new I,Yn=new I,nl=new I,_r=new I,sl=new I;class lc{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,En)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=En.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(En.copy(this.origin).addScaledVector(this.direction,e),En.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){il.copy(t).add(e).multiplyScalar(.5),vr.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(il);const o=t.distanceTo(e)*.5,r=-this.direction.dot(vr),l=Yn.dot(this.direction),a=-Yn.dot(vr),h=Yn.lengthSq(),f=Math.abs(1-r*r);let c,d,u,g;if(f>0)if(c=r*a-l,d=r*l-a,g=o*f,c>=0)if(d>=-g)if(d<=g){const x=1/f;c*=x,d*=x,u=c*(c+r*d+2*l)+d*(r*c+d+2*a)+h}else d=o,c=Math.max(0,-(r*d+l)),u=-c*c+d*(d+2*a)+h;else d=-o,c=Math.max(0,-(r*d+l)),u=-c*c+d*(d+2*a)+h;else d<=-g?(c=Math.max(0,-(-r*o+l)),d=c>0?-o:Math.min(Math.max(-o,-a),o),u=-c*c+d*(d+2*a)+h):d<=g?(c=0,d=Math.min(Math.max(-o,-a),o),u=d*(d+2*a)+h):(c=Math.max(0,-(r*o+l)),d=c>0?o:Math.min(Math.max(-o,-a),o),u=-c*c+d*(d+2*a)+h);else d=r>0?-o:o,c=Math.max(0,-(r*d+l)),u=-c*c+d*(d+2*a)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(il).addScaledVector(vr,d),u}intersectSphere(t,e){En.subVectors(t.center,this.origin);const i=En.dot(this.direction),s=En.dot(En)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),l=i-r,a=i+r;return a<0?null:l<0?this.at(a,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,l,a;const h=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),f>=0?(o=(t.min.y-d.y)*f,r=(t.max.y-d.y)*f):(o=(t.max.y-d.y)*f,r=(t.min.y-d.y)*f),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),c>=0?(l=(t.min.z-d.z)*c,a=(t.max.z-d.z)*c):(l=(t.max.z-d.z)*c,a=(t.min.z-d.z)*c),i>a||l>s)||((l>i||i!==i)&&(i=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,En)!==null}intersectTriangle(t,e,i,s,o){nl.subVectors(e,t),_r.subVectors(i,t),sl.crossVectors(nl,_r);let r=this.direction.dot(sl),l;if(r>0){if(s)return null;l=1}else if(r<0)l=-1,r=-r;else return null;Yn.subVectors(this.origin,t);const a=l*this.direction.dot(_r.crossVectors(Yn,_r));if(a<0)return null;const h=l*this.direction.dot(nl.cross(Yn));if(h<0||a+h>r)return null;const f=-l*Yn.dot(sl);return f<0?null:this.at(f/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ue{constructor(t,e,i,s,o,r,l,a,h,f,c,d,u,g,x,m){Ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,l,a,h,f,c,d,u,g,x,m)}set(t,e,i,s,o,r,l,a,h,f,c,d,u,g,x,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=o,p[5]=r,p[9]=l,p[13]=a,p[2]=h,p[6]=f,p[10]=c,p[14]=d,p[3]=u,p[7]=g,p[11]=x,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ue().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/zs.setFromMatrixColumn(t,0).length(),o=1/zs.setFromMatrixColumn(t,1).length(),r=1/zs.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),l=Math.sin(i),a=Math.cos(s),h=Math.sin(s),f=Math.cos(o),c=Math.sin(o);if(t.order==="XYZ"){const d=r*f,u=r*c,g=l*f,x=l*c;e[0]=a*f,e[4]=-a*c,e[8]=h,e[1]=u+g*h,e[5]=d-x*h,e[9]=-l*a,e[2]=x-d*h,e[6]=g+u*h,e[10]=r*a}else if(t.order==="YXZ"){const d=a*f,u=a*c,g=h*f,x=h*c;e[0]=d+x*l,e[4]=g*l-u,e[8]=r*h,e[1]=r*c,e[5]=r*f,e[9]=-l,e[2]=u*l-g,e[6]=x+d*l,e[10]=r*a}else if(t.order==="ZXY"){const d=a*f,u=a*c,g=h*f,x=h*c;e[0]=d-x*l,e[4]=-r*c,e[8]=g+u*l,e[1]=u+g*l,e[5]=r*f,e[9]=x-d*l,e[2]=-r*h,e[6]=l,e[10]=r*a}else if(t.order==="ZYX"){const d=r*f,u=r*c,g=l*f,x=l*c;e[0]=a*f,e[4]=g*h-u,e[8]=d*h+x,e[1]=a*c,e[5]=x*h+d,e[9]=u*h-g,e[2]=-h,e[6]=l*a,e[10]=r*a}else if(t.order==="YZX"){const d=r*a,u=r*h,g=l*a,x=l*h;e[0]=a*f,e[4]=x-d*c,e[8]=g*c+u,e[1]=c,e[5]=r*f,e[9]=-l*f,e[2]=-h*f,e[6]=u*c+g,e[10]=d-x*c}else if(t.order==="XZY"){const d=r*a,u=r*h,g=l*a,x=l*h;e[0]=a*f,e[4]=-c,e[8]=h*f,e[1]=d*c+x,e[5]=r*f,e[9]=u*c-g,e[2]=g*c-u,e[6]=l*f,e[10]=x*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(dp,t,up)}lookAt(t,e,i){const s=this.elements;return ki.subVectors(t,e),ki.lengthSq()===0&&(ki.z=1),ki.normalize(),Kn.crossVectors(i,ki),Kn.lengthSq()===0&&(Math.abs(i.z)===1?ki.x+=1e-4:ki.z+=1e-4,ki.normalize(),Kn.crossVectors(i,ki)),Kn.normalize(),Mr.crossVectors(ki,Kn),s[0]=Kn.x,s[4]=Mr.x,s[8]=ki.x,s[1]=Kn.y,s[5]=Mr.y,s[9]=ki.y,s[2]=Kn.z,s[6]=Mr.z,s[10]=ki.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],l=i[4],a=i[8],h=i[12],f=i[1],c=i[5],d=i[9],u=i[13],g=i[2],x=i[6],m=i[10],p=i[14],M=i[3],b=i[7],v=i[11],D=i[15],E=s[0],w=s[4],C=s[8],y=s[12],S=s[1],P=s[5],F=s[9],H=s[13],Y=s[2],K=s[6],W=s[10],et=s[14],G=s[3],st=s[7],ht=s[11],At=s[15];return o[0]=r*E+l*S+a*Y+h*G,o[4]=r*w+l*P+a*K+h*st,o[8]=r*C+l*F+a*W+h*ht,o[12]=r*y+l*H+a*et+h*At,o[1]=f*E+c*S+d*Y+u*G,o[5]=f*w+c*P+d*K+u*st,o[9]=f*C+c*F+d*W+u*ht,o[13]=f*y+c*H+d*et+u*At,o[2]=g*E+x*S+m*Y+p*G,o[6]=g*w+x*P+m*K+p*st,o[10]=g*C+x*F+m*W+p*ht,o[14]=g*y+x*H+m*et+p*At,o[3]=M*E+b*S+v*Y+D*G,o[7]=M*w+b*P+v*K+D*st,o[11]=M*C+b*F+v*W+D*ht,o[15]=M*y+b*H+v*et+D*At,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],l=t[5],a=t[9],h=t[13],f=t[2],c=t[6],d=t[10],u=t[14],g=t[3],x=t[7],m=t[11],p=t[15];return g*(+o*a*c-s*h*c-o*l*d+i*h*d+s*l*u-i*a*u)+x*(+e*a*u-e*h*d+o*r*d-s*r*u+s*h*f-o*a*f)+m*(+e*h*c-e*l*u-o*r*c+i*r*u+o*l*f-i*h*f)+p*(-s*l*f-e*a*c+e*l*d+s*r*c-i*r*d+i*a*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],l=t[5],a=t[6],h=t[7],f=t[8],c=t[9],d=t[10],u=t[11],g=t[12],x=t[13],m=t[14],p=t[15],M=c*m*h-x*d*h+x*a*u-l*m*u-c*a*p+l*d*p,b=g*d*h-f*m*h-g*a*u+r*m*u+f*a*p-r*d*p,v=f*x*h-g*c*h+g*l*u-r*x*u-f*l*p+r*c*p,D=g*c*a-f*x*a-g*l*d+r*x*d+f*l*m-r*c*m,E=e*M+i*b+s*v+o*D;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/E;return t[0]=M*w,t[1]=(x*d*o-c*m*o-x*s*u+i*m*u+c*s*p-i*d*p)*w,t[2]=(l*m*o-x*a*o+x*s*h-i*m*h-l*s*p+i*a*p)*w,t[3]=(c*a*o-l*d*o-c*s*h+i*d*h+l*s*u-i*a*u)*w,t[4]=b*w,t[5]=(f*m*o-g*d*o+g*s*u-e*m*u-f*s*p+e*d*p)*w,t[6]=(g*a*o-r*m*o-g*s*h+e*m*h+r*s*p-e*a*p)*w,t[7]=(r*d*o-f*a*o+f*s*h-e*d*h-r*s*u+e*a*u)*w,t[8]=v*w,t[9]=(g*c*o-f*x*o-g*i*u+e*x*u+f*i*p-e*c*p)*w,t[10]=(r*x*o-g*l*o+g*i*h-e*x*h-r*i*p+e*l*p)*w,t[11]=(f*l*o-r*c*o-f*i*h+e*c*h+r*i*u-e*l*u)*w,t[12]=D*w,t[13]=(f*x*s-g*c*s+g*i*d-e*x*d-f*i*m+e*c*m)*w,t[14]=(g*l*s-r*x*s-g*i*a+e*x*a+r*i*m-e*l*m)*w,t[15]=(r*c*s-f*l*s+f*i*a-e*c*a-r*i*d+e*l*d)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,l=t.y,a=t.z,h=o*r,f=o*l;return this.set(h*r+i,h*l-s*a,h*a+s*l,0,h*l+s*a,f*l+i,f*a-s*r,0,h*a-s*l,f*a+s*r,o*a*a+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,l=e._z,a=e._w,h=o+o,f=r+r,c=l+l,d=o*h,u=o*f,g=o*c,x=r*f,m=r*c,p=l*c,M=a*h,b=a*f,v=a*c,D=i.x,E=i.y,w=i.z;return s[0]=(1-(x+p))*D,s[1]=(u+v)*D,s[2]=(g-b)*D,s[3]=0,s[4]=(u-v)*E,s[5]=(1-(d+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+b)*w,s[9]=(m-M)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=zs.set(s[0],s[1],s[2]).length();const r=zs.set(s[4],s[5],s[6]).length(),l=zs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const h=1/o,f=1/r,c=1/l;return nn.elements[0]*=h,nn.elements[1]*=h,nn.elements[2]*=h,nn.elements[4]*=f,nn.elements[5]*=f,nn.elements[6]*=f,nn.elements[8]*=c,nn.elements[9]*=c,nn.elements[10]*=c,e.setFromRotationMatrix(nn),i.x=o,i.y=r,i.z=l,this}makePerspective(t,e,i,s,o,r,l=In){const a=this.elements,h=2*o/(e-t),f=2*o/(i-s),c=(e+t)/(e-t),d=(i+s)/(i-s);let u,g;if(l===In)u=-(r+o)/(r-o),g=-2*r*o/(r-o);else if(l===ga)u=-r/(r-o),g=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=f,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=g,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,o,r,l=In){const a=this.elements,h=1/(e-t),f=1/(i-s),c=1/(r-o),d=(e+t)*h,u=(i+s)*f;let g,x;if(l===In)g=(r+o)*c,x=-2*c;else if(l===ga)g=o*c,x=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=2*h,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*f,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=x,a[14]=-g,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const zs=new I,nn=new Ue,dp=new I(0,0,0),up=new I(1,1,1),Kn=new I,Mr=new I,ki=new I,nf=new Ue,sf=new ar;class hn{constructor(t=0,e=0,i=0,s=hn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],l=s[8],a=s[1],h=s[5],f=s[9],c=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Ni(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Ni(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(a,h)):(this._y=Math.atan2(-c,o),this._z=0);break;case"ZXY":this._x=Math.asin(Ni(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,u),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(a,o));break;case"ZYX":this._y=Math.asin(-Ni(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(a,o)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Ni(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-c,o)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-Ni(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nf.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nf,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return sf.setFromEuler(this),this.setFromQuaternion(sf,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}hn.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let pp=0;const of=new I,ks=new ar,wn=new Ue,yr=new I,To=new I,mp=new I,gp=new ar,rf=new I(1,0,0),af=new I(0,1,0),lf=new I(0,0,1),hf={type:"added"},xp={type:"removed"},Bs={type:"childadded",child:null},ol={type:"childremoved",child:null};class ei extends xo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=ei.DEFAULT_UP.clone();const t=new I,e=new hn,i=new ar,s=new I(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ue},normalMatrix:{value:new Qt}}),this.matrix=new Ue,this.matrixWorld=new Ue,this.matrixAutoUpdate=ei.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.multiply(ks),this}rotateOnWorldAxis(t,e){return ks.setFromAxisAngle(t,e),this.quaternion.premultiply(ks),this}rotateX(t){return this.rotateOnAxis(rf,t)}rotateY(t){return this.rotateOnAxis(af,t)}rotateZ(t){return this.rotateOnAxis(lf,t)}translateOnAxis(t,e){return of.copy(t).applyQuaternion(this.quaternion),this.position.add(of.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(rf,t)}translateY(t){return this.translateOnAxis(af,t)}translateZ(t){return this.translateOnAxis(lf,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(wn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yr.copy(t):yr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),To.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wn.lookAt(To,yr,this.up):wn.lookAt(yr,To,this.up),this.quaternion.setFromRotationMatrix(wn),s&&(wn.extractRotation(s.matrixWorld),ks.setFromRotationMatrix(wn),this.quaternion.premultiply(ks.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(hf),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(xp),ol.child=t,this.dispatchEvent(ol),ol.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),wn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),wn.multiply(t.parent.matrixWorld)),t.applyMatrix4(wn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(hf),Bs.child=t,this.dispatchEvent(Bs),Bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,t,mp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(To,gp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let h=0,f=a.length;h<f;h++){const c=a[h];o(t.shapes,c)}else o(t.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,h=this.material.length;a<h;a++)l.push(o(t.materials,this.material[a]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];s.animations.push(o(t.animations,a))}}if(e){const l=r(t.geometries),a=r(t.materials),h=r(t.textures),f=r(t.images),c=r(t.shapes),d=r(t.skeletons),u=r(t.animations),g=r(t.nodes);l.length>0&&(i.geometries=l),a.length>0&&(i.materials=a),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(l){const a=[];for(const h in l){const f=l[h];delete f.metadata,a.push(f)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}ei.DEFAULT_UP=new I(0,1,0);ei.DEFAULT_MATRIX_AUTO_UPDATE=!0;ei.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new I,Tn=new I,rl=new I,An=new I,Fs=new I,Hs=new I,cf=new I,al=new I,ll=new I,hl=new I,cl=new Pe,fl=new Pe,dl=new Pe;class Gi{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),sn.subVectors(t,e),s.cross(sn);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){sn.subVectors(s,e),Tn.subVectors(i,e),rl.subVectors(t,e);const r=sn.dot(sn),l=sn.dot(Tn),a=sn.dot(rl),h=Tn.dot(Tn),f=Tn.dot(rl),c=r*h-l*l;if(c===0)return o.set(0,0,0),null;const d=1/c,u=(h*a-l*f)*d,g=(r*f-l*a)*d;return o.set(1-u-g,g,u)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,An)===null?!1:An.x>=0&&An.y>=0&&An.x+An.y<=1}static getInterpolation(t,e,i,s,o,r,l,a){return this.getBarycoord(t,e,i,s,An)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(o,An.x),a.addScaledVector(r,An.y),a.addScaledVector(l,An.z),a)}static getInterpolatedAttribute(t,e,i,s,o,r){return cl.setScalar(0),fl.setScalar(0),dl.setScalar(0),cl.fromBufferAttribute(t,e),fl.fromBufferAttribute(t,i),dl.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(cl,o.x),r.addScaledVector(fl,o.y),r.addScaledVector(dl,o.z),r}static isFrontFacing(t,e,i,s){return sn.subVectors(i,e),Tn.subVectors(t,e),sn.cross(Tn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Tn.subVectors(this.a,this.b),sn.cross(Tn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Gi.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Gi.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return Gi.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return Gi.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Gi.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,l;Fs.subVectors(s,i),Hs.subVectors(o,i),al.subVectors(t,i);const a=Fs.dot(al),h=Hs.dot(al);if(a<=0&&h<=0)return e.copy(i);ll.subVectors(t,s);const f=Fs.dot(ll),c=Hs.dot(ll);if(f>=0&&c<=f)return e.copy(s);const d=a*c-f*h;if(d<=0&&a>=0&&f<=0)return r=a/(a-f),e.copy(i).addScaledVector(Fs,r);hl.subVectors(t,o);const u=Fs.dot(hl),g=Hs.dot(hl);if(g>=0&&u<=g)return e.copy(o);const x=u*h-a*g;if(x<=0&&h>=0&&g<=0)return l=h/(h-g),e.copy(i).addScaledVector(Hs,l);const m=f*g-u*c;if(m<=0&&c-f>=0&&u-g>=0)return cf.subVectors(o,s),l=(c-f)/(c-f+(u-g)),e.copy(s).addScaledVector(cf,l);const p=1/(m+x+d);return r=x*p,l=d*p,e.copy(i).addScaledVector(Fs,r).addScaledVector(Hs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const iu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},jn={h:0,s:0,l:0},br={h:0,s:0,l:0};function ul(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class St{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=oi){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,xe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=xe.workingColorSpace){return this.r=t,this.g=e,this.b=i,xe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=xe.workingColorSpace){if(t=ep(t,1),e=Ni(e,0,1),i=Ni(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=ul(r,o,t+1/3),this.g=ul(r,o,t),this.b=ul(r,o,t-1/3)}return xe.toWorkingColorSpace(this,s),this}setStyle(t,e=oi){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],l=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=oi){const i=iu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=zn(t.r),this.g=zn(t.g),this.b=zn(t.b),this}copyLinearToSRGB(t){return this.r=no(t.r),this.g=no(t.g),this.b=no(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=oi){return xe.fromWorkingColorSpace(Mi.copy(this),t),Math.round(Ni(Mi.r*255,0,255))*65536+Math.round(Ni(Mi.g*255,0,255))*256+Math.round(Ni(Mi.b*255,0,255))}getHexString(t=oi){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=xe.workingColorSpace){xe.fromWorkingColorSpace(Mi.copy(this),e);const i=Mi.r,s=Mi.g,o=Mi.b,r=Math.max(i,s,o),l=Math.min(i,s,o);let a,h;const f=(l+r)/2;if(l===r)a=0,h=0;else{const c=r-l;switch(h=f<=.5?c/(r+l):c/(2-r-l),r){case i:a=(s-o)/c+(s<o?6:0);break;case s:a=(o-i)/c+2;break;case o:a=(i-s)/c+4;break}a/=6}return t.h=a,t.s=h,t.l=f,t}getRGB(t,e=xe.workingColorSpace){return xe.fromWorkingColorSpace(Mi.copy(this),e),t.r=Mi.r,t.g=Mi.g,t.b=Mi.b,t}getStyle(t=oi){xe.fromWorkingColorSpace(Mi.copy(this),t);const e=Mi.r,i=Mi.g,s=Mi.b;return t!==oi?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(jn),this.setHSL(jn.h+t,jn.s+e,jn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(jn),t.getHSL(br);const i=$a(jn.h,br.h,e),s=$a(jn.s,br.s,e),o=$a(jn.l,br.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mi=new St;St.NAMES=iu;let vp=0;class Gn extends xo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:vp++}),this.uuid=es(),this.name="",this.blending=eo,this.side=as,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=$l,this.blendDst=Zl,this.blendEquation=xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new St(0,0,0),this.blendAlpha=0,this.depthFunc=ro,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ps,this.stencilZFail=Ps,this.stencilZPass=Ps,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==eo&&(i.blending=this.blending),this.side!==as&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==$l&&(i.blendSrc=this.blendSrc),this.blendDst!==Zl&&(i.blendDst=this.blendDst),this.blendEquation!==xs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ro&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Yc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ps&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Ps&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Ps&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const l in o){const a=o[l];delete a.metadata,r.push(a)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class ce extends Gn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Qe=new I,Sr=new Ft;class Ei{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Nh,this.updateRanges=[],this.gpuType=Pn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)Sr.fromBufferAttribute(this,e),Sr.applyMatrix3(t),this.setXY(e,Sr.x,Sr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix3(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyMatrix4(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.applyNormalMatrix(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Qe.fromBufferAttribute(this,e),Qe.transformDirection(t),this.setXYZ(e,Qe.x,Qe.y,Qe.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=pn(e,this.array)),e}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=pn(e,this.array)),e}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=pn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=pn(e,this.array)),e}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array),o=De(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Nh&&(t.usage=this.usage),t}}class nu extends Ei{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class su extends Ei{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Je extends Ei{constructor(t,e,i){super(new Float32Array(t),e,i)}}let _p=0;const qi=new Ue,pl=new ei,Gs=new I,Bi=new lr,Ao=new lr,ci=new I;class ii extends xo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:_p++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Jd(t)?su:nu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Qt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return qi.makeRotationFromQuaternion(t),this.applyMatrix4(qi),this}rotateX(t){return qi.makeRotationX(t),this.applyMatrix4(qi),this}rotateY(t){return qi.makeRotationY(t),this.applyMatrix4(qi),this}rotateZ(t){return qi.makeRotationZ(t),this.applyMatrix4(qi),this}translate(t,e,i){return qi.makeTranslation(t,e,i),this.applyMatrix4(qi),this}scale(t,e,i){return qi.makeScale(t,e,i),this.applyMatrix4(qi),this}lookAt(t){return pl.lookAt(t),pl.updateMatrix(),this.applyMatrix4(pl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gs).negate(),this.translate(Gs.x,Gs.y,Gs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Je(i,3))}else{for(let i=0,s=e.count;i<s;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new lr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Bi.setFromBufferAttribute(o),this.morphTargetsRelative?(ci.addVectors(this.boundingBox.min,Bi.min),this.boundingBox.expandByPoint(ci),ci.addVectors(this.boundingBox.max,Bi.max),this.boundingBox.expandByPoint(ci)):(this.boundingBox.expandByPoint(Bi.min),this.boundingBox.expandByPoint(Bi.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new hr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Bi.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const l=e[o];Ao.setFromBufferAttribute(l),this.morphTargetsRelative?(ci.addVectors(Bi.min,Ao.min),Bi.expandByPoint(ci),ci.addVectors(Bi.max,Ao.max),Bi.expandByPoint(ci)):(Bi.expandByPoint(Ao.min),Bi.expandByPoint(Ao.max))}Bi.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)ci.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(ci));if(e)for(let o=0,r=e.length;o<r;o++){const l=e[o],a=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)ci.fromBufferAttribute(l,h),a&&(Gs.fromBufferAttribute(t,h),ci.add(Gs)),s=Math.max(s,i.distanceToSquared(ci))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ei(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),l=[],a=[];for(let C=0;C<i.count;C++)l[C]=new I,a[C]=new I;const h=new I,f=new I,c=new I,d=new Ft,u=new Ft,g=new Ft,x=new I,m=new I;function p(C,y,S){h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),c.fromBufferAttribute(i,S),d.fromBufferAttribute(o,C),u.fromBufferAttribute(o,y),g.fromBufferAttribute(o,S),f.sub(h),c.sub(h),u.sub(d),g.sub(d);const P=1/(u.x*g.y-g.x*u.y);isFinite(P)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(c,-u.y).multiplyScalar(P),m.copy(c).multiplyScalar(u.x).addScaledVector(f,-g.x).multiplyScalar(P),l[C].add(x),l[y].add(x),l[S].add(x),a[C].add(m),a[y].add(m),a[S].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,y=M.length;C<y;++C){const S=M[C],P=S.start,F=S.count;for(let H=P,Y=P+F;H<Y;H+=3)p(t.getX(H+0),t.getX(H+1),t.getX(H+2))}const b=new I,v=new I,D=new I,E=new I;function w(C){D.fromBufferAttribute(s,C),E.copy(D);const y=l[C];b.copy(y),b.sub(D.multiplyScalar(D.dot(y))).normalize(),v.crossVectors(E,y);const P=v.dot(a[C])<0?-1:1;r.setXYZW(C,b.x,b.y,b.z,P)}for(let C=0,y=M.length;C<y;++C){const S=M[C],P=S.start,F=S.count;for(let H=P,Y=P+F;H<Y;H+=3)w(t.getX(H+0)),w(t.getX(H+1)),w(t.getX(H+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ei(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);const s=new I,o=new I,r=new I,l=new I,a=new I,h=new I,f=new I,c=new I;if(t)for(let d=0,u=t.count;d<u;d+=3){const g=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,g),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),f.subVectors(r,o),c.subVectors(s,o),f.cross(c),l.fromBufferAttribute(i,g),a.fromBufferAttribute(i,x),h.fromBufferAttribute(i,m),l.add(f),a.add(f),h.add(f),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),f.subVectors(r,o),c.subVectors(s,o),f.cross(c),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ci.fromBufferAttribute(t,e),ci.normalize(),t.setXYZ(e,ci.x,ci.y,ci.z)}toNonIndexed(){function t(l,a){const h=l.array,f=l.itemSize,c=l.normalized,d=new h.constructor(a.length*f);let u=0,g=0;for(let x=0,m=a.length;x<m;x++){l.isInterleavedBufferAttribute?u=a[x]*l.data.stride+l.offset:u=a[x]*f;for(let p=0;p<f;p++)d[g++]=h[u++]}return new Ei(d,f,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new ii,i=this.index.array,s=this.attributes;for(const l in s){const a=s[l],h=t(a,i);e.setAttribute(l,h)}const o=this.morphAttributes;for(const l in o){const a=[],h=o[l];for(let f=0,c=h.length;f<c;f++){const d=h[f],u=t(d,i);a.push(u)}e.morphAttributes[l]=a}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let l=0,a=r.length;l<a;l++){const h=r[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const h in a)a[h]!==void 0&&(t[h]=a[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const a in i){const h=i[a];t.data.attributes[a]=h.toJSON(t.data)}const s={};let o=!1;for(const a in this.morphAttributes){const h=this.morphAttributes[a],f=[];for(let c=0,d=h.length;c<d;c++){const u=h[c];f.push(u.toJSON(t.data))}f.length>0&&(s[a]=f,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const f=s[h];this.setAttribute(h,f.clone(e))}const o=t.morphAttributes;for(const h in o){const f=[],c=o[h];for(let d=0,u=c.length;d<u;d++)f.push(c[d].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,f=r.length;h<f;h++){const c=r[h];this.addGroup(c.start,c.count,c.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ff=new Ue,fs=new lc,Er=new hr,df=new I,wr=new I,Tr=new I,Ar=new I,ml=new I,Rr=new I,uf=new I,Cr=new I;class _t extends ei{constructor(t=new ii,e=new ce){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(o&&l){Rr.set(0,0,0);for(let a=0,h=o.length;a<h;a++){const f=l[a],c=o[a];f!==0&&(ml.fromBufferAttribute(c,t),r?Rr.addScaledVector(ml,f):Rr.addScaledVector(ml.sub(e),f))}e.add(Rr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Er.copy(i.boundingSphere),Er.applyMatrix4(o),fs.copy(t.ray).recast(t.near),!(Er.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Er,df)===null||fs.origin.distanceToSquared(df)>(t.far-t.near)**2))&&(ff.copy(o).invert(),fs.copy(t.ray).applyMatrix4(ff),!(i.boundingBox!==null&&fs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,fs)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,l=o.index,a=o.attributes.position,h=o.attributes.uv,f=o.attributes.uv1,c=o.attributes.normal,d=o.groups,u=o.drawRange;if(l!==null)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=r[m.materialIndex],M=Math.max(m.start,u.start),b=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=M,D=b;v<D;v+=3){const E=l.getX(v),w=l.getX(v+1),C=l.getX(v+2);s=Lr(this,p,t,i,h,f,c,E,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){const M=l.getX(m),b=l.getX(m+1),v=l.getX(m+2);s=Lr(this,r,t,i,h,f,c,M,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(r))for(let g=0,x=d.length;g<x;g++){const m=d[g],p=r[m.materialIndex],M=Math.max(m.start,u.start),b=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=M,D=b;v<D;v+=3){const E=v,w=v+1,C=v+2;s=Lr(this,p,t,i,h,f,c,E,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=g,p=x;m<p;m+=3){const M=m,b=m+1,v=m+2;s=Lr(this,r,t,i,h,f,c,M,b,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function Mp(n,t,e,i,s,o,r,l){let a;if(t.side===Ci?a=i.intersectTriangle(r,o,s,!0,l):a=i.intersectTriangle(s,o,r,t.side===as,l),a===null)return null;Cr.copy(l),Cr.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Cr);return h<e.near||h>e.far?null:{distance:h,point:Cr.clone(),object:n}}function Lr(n,t,e,i,s,o,r,l,a,h){n.getVertexPosition(l,wr),n.getVertexPosition(a,Tr),n.getVertexPosition(h,Ar);const f=Mp(n,t,e,i,wr,Tr,Ar,uf);if(f){const c=new I;Gi.getBarycoord(uf,wr,Tr,Ar,c),s&&(f.uv=Gi.getInterpolatedAttribute(s,l,a,h,c,new Ft)),o&&(f.uv1=Gi.getInterpolatedAttribute(o,l,a,h,c,new Ft)),r&&(f.normal=Gi.getInterpolatedAttribute(r,l,a,h,c,new I),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:l,b:a,c:h,normal:new I,materialIndex:0};Gi.getNormal(wr,Tr,Ar,d.normal),f.face=d,f.barycoord=c}return f}class Kt extends ii{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const l=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const a=[],h=[],f=[],c=[];let d=0,u=0;g("z","y","x",-1,-1,i,e,t,r,o,0),g("z","y","x",1,-1,i,e,-t,r,o,1),g("x","z","y",1,1,t,i,e,s,r,2),g("x","z","y",1,-1,t,i,-e,s,r,3),g("x","y","z",1,-1,t,e,i,s,o,4),g("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(a),this.setAttribute("position",new Je(h,3)),this.setAttribute("normal",new Je(f,3)),this.setAttribute("uv",new Je(c,2));function g(x,m,p,M,b,v,D,E,w,C,y){const S=v/w,P=D/C,F=v/2,H=D/2,Y=E/2,K=w+1,W=C+1;let et=0,G=0;const st=new I;for(let ht=0;ht<W;ht++){const At=ht*P-H;for(let Vt=0;Vt<K;Vt++){const le=Vt*S-F;st[x]=le*M,st[m]=At*b,st[p]=Y,h.push(st.x,st.y,st.z),st[x]=0,st[m]=0,st[p]=E>0?1:-1,f.push(st.x,st.y,st.z),c.push(Vt/w),c.push(1-ht/C),et+=1}}for(let ht=0;ht<C;ht++)for(let At=0;At<w;At++){const Vt=d+At+K*ht,le=d+At+K*(ht+1),Z=d+(At+1)+K*(ht+1),rt=d+(At+1)+K*ht;a.push(Vt,le,rt),a.push(le,Z,rt),G+=6}l.addGroup(u,G,y),u+=G,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Kt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function fo(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ti(n){const t={};for(let e=0;e<n.length;e++){const i=fo(n[e]);for(const s in i)t[s]=i[s]}return t}function yp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ou(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:xe.workingColorSpace}const Jo={clone:fo,merge:Ti};var bp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Sp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Si extends Gn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=bp,this.fragmentShader=Sp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=fo(t.uniforms),this.uniformsGroups=yp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class ru extends ei{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ue,this.projectionMatrix=new Ue,this.projectionMatrixInverse=new Ue,this.coordinateSystem=In}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const $n=new I,pf=new Ft,mf=new Ft;class Hi extends ru{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Oh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(oa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Oh*2*Math.atan(Math.tan(oa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set($n.x,$n.y).multiplyScalar(-t/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set($n.x,$n.y).multiplyScalar(-t/$n.z)}getViewSize(t,e){return this.getViewBounds(t,pf,mf),e.subVectors(mf,pf)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(oa*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,h=r.fullHeight;o+=r.offsetX*s/a,e-=r.offsetY*i/h,s*=r.width/a,i*=r.height/h}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Vs=-90,Ws=1;class Ep extends ei{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Hi(Vs,Ws,t,e);s.layers=this.layers,this.add(s);const o=new Hi(Vs,Ws,t,e);o.layers=this.layers,this.add(o);const r=new Hi(Vs,Ws,t,e);r.layers=this.layers,this.add(r);const l=new Hi(Vs,Ws,t,e);l.layers=this.layers,this.add(l);const a=new Hi(Vs,Ws,t,e);a.layers=this.layers,this.add(a);const h=new Hi(Vs,Ws,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,l,a]=e;for(const h of e)this.remove(h);if(t===In)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===ga)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,l,a,h,f]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,l),t.setRenderTarget(i,3,s),t.render(e,a),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(c,d,u),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class au extends Li{constructor(t,e,i,s,o,r,l,a,h,f){t=t!==void 0?t:[],e=e!==void 0?e:ao,super(t,e,i,s,o,r,l,a,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class wp extends Ji{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new au(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:$i}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Kt(5,5,5),o=new Si({name:"CubemapFromEquirect",uniforms:fo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ci,blending:On});o.uniforms.tEquirect.value=e;const r=new _t(s,o),l=e.minFilter;return e.minFilter===Dn&&(e.minFilter=$i),new Ep(1,10,this).update(t,r),e.minFilter=l,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const gl=new I,Tp=new I,Ap=new Qt;class ms{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=gl.subVectors(i,e).cross(Tp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(gl),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||Ap.getNormalMatrix(t),s=this.coplanarPoint(gl).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ds=new hr,Dr=new I;class hc{constructor(t=new ms,e=new ms,i=new ms,s=new ms,o=new ms,r=new ms){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(o),l[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=In){const i=this.planes,s=t.elements,o=s[0],r=s[1],l=s[2],a=s[3],h=s[4],f=s[5],c=s[6],d=s[7],u=s[8],g=s[9],x=s[10],m=s[11],p=s[12],M=s[13],b=s[14],v=s[15];if(i[0].setComponents(a-o,d-h,m-u,v-p).normalize(),i[1].setComponents(a+o,d+h,m+u,v+p).normalize(),i[2].setComponents(a+r,d+f,m+g,v+M).normalize(),i[3].setComponents(a-r,d-f,m-g,v-M).normalize(),i[4].setComponents(a-l,d-c,m-x,v-b).normalize(),e===In)i[5].setComponents(a+l,d+c,m+x,v+b).normalize();else if(e===ga)i[5].setComponents(l,c,x,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ds.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ds.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ds)}intersectsSprite(t){return ds.center.set(0,0,0),ds.radius=.7071067811865476,ds.applyMatrix4(t.matrixWorld),this.intersectsSphere(ds)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Dr.x=s.normal.x>0?t.max.x:t.min.x,Dr.y=s.normal.y>0?t.max.y:t.min.y,Dr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Dr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function lu(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function Rp(n){const t=new WeakMap;function e(l,a){const h=l.array,f=l.usage,c=h.byteLength,d=n.createBuffer();n.bindBuffer(a,d),n.bufferData(a,h,f),l.onUploadCallback();let u;if(h instanceof Float32Array)u=n.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=n.SHORT;else if(h instanceof Uint32Array)u=n.UNSIGNED_INT;else if(h instanceof Int32Array)u=n.INT;else if(h instanceof Int8Array)u=n.BYTE;else if(h instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:c}}function i(l,a,h){const f=a.array,c=a.updateRanges;if(n.bindBuffer(h,l),c.length===0)n.bufferSubData(h,0,f);else{c.sort((u,g)=>u.start-g.start);let d=0;for(let u=1;u<c.length;u++){const g=c[d],x=c[u];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++d,c[d]=x)}c.length=d+1;for(let u=0,g=c.length;u<g;u++){const x=c[u];n.bufferSubData(h,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=t.get(l);a&&(n.deleteBuffer(a.buffer),t.delete(l))}function r(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,a));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,a),h.version=l.version}}return{get:s,remove:o,update:r}}class kn extends ii{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,l=Math.floor(i),a=Math.floor(s),h=l+1,f=a+1,c=t/l,d=e/a,u=[],g=[],x=[],m=[];for(let p=0;p<f;p++){const M=p*d-r;for(let b=0;b<h;b++){const v=b*c-o;g.push(v,-M,0),x.push(0,0,1),m.push(b/l),m.push(1-p/a)}}for(let p=0;p<a;p++)for(let M=0;M<l;M++){const b=M+h*p,v=M+h*(p+1),D=M+1+h*(p+1),E=M+1+h*p;u.push(b,v,E),u.push(v,D,E)}this.setIndex(u),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new kn(t.width,t.height,t.widthSegments,t.heightSegments)}}var Cp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lp=`#ifdef USE_ALPHAHASH
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
#endif`,Dp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Np=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Op=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,zp=`#ifdef USE_BATCHING
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
#endif`,kp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Bp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Fp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Hp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Gp=`#ifdef USE_IRIDESCENCE
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
#endif`,Vp=`#ifdef USE_BUMPMAP
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
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,qp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Yp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,$p=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Zp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Jp=`#define PI 3.141592653589793
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
} // validated`,Qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,tm=`vec3 transformedNormal = objectNormal;
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
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,im=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,om="gl_FragColor = linearToOutputTexel( gl_FragColor );",rm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,am=`#ifdef USE_ENVMAP
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
#endif`,lm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,hm=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fm=`#ifdef USE_ENVMAP
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
#endif`,dm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,um=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,pm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,mm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,gm=`#ifdef USE_GRADIENTMAP
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
}`,xm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,vm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mm=`uniform bool receiveShadow;
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
#endif`,ym=`#ifdef USE_ENVMAP
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
#endif`,bm=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Sm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Em=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,wm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Tm=`PhysicalMaterial material;
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
#endif`,Am=`struct PhysicalMaterial {
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
}`,Rm=`
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
#endif`,Cm=`#if defined( RE_IndirectDiffuse )
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
#endif`,Lm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Om=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,zm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,km=`#if defined( USE_POINTS_UV )
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
#endif`,Bm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Vm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`#ifdef USE_MORPHTARGETS
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
#endif`,Xm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Ym=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Km=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,$m=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Zm=`#ifdef USE_NORMALMAP
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
#endif`,Jm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Qm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,t1=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,e1=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,i1=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,n1=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,s1=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,o1=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,r1=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,a1=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,l1=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,h1=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,c1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,f1=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,d1=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,u1=`float getShadowMask() {
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
}`,p1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,m1=`#ifdef USE_SKINNING
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
#endif`,g1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,x1=`#ifdef USE_SKINNING
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
#endif`,v1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,M1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,y1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,b1=`#ifdef USE_TRANSMISSION
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
#endif`,S1=`#ifdef USE_TRANSMISSION
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
#endif`,E1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,w1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,T1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,A1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const R1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,C1=`uniform sampler2D t2D;
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
}`,L1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,D1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,P1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,I1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,N1=`#include <common>
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
}`,O1=`#if DEPTH_PACKING == 3200
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
}`,U1=`#define DISTANCE
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
}`,z1=`#define DISTANCE
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
}`,k1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,B1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,F1=`uniform float scale;
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
}`,H1=`uniform vec3 diffuse;
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
}`,G1=`#include <common>
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
}`,V1=`uniform vec3 diffuse;
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
}`,W1=`#define LAMBERT
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
}`,X1=`#define LAMBERT
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
}`,q1=`#define MATCAP
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
}`,Y1=`#define MATCAP
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
}`,K1=`#define NORMAL
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
}`,j1=`#define NORMAL
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
}`,$1=`#define PHONG
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
}`,Z1=`#define PHONG
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
}`,J1=`#define STANDARD
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
}`,Q1=`#define STANDARD
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
}`,tg=`#define TOON
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
}`,eg=`#define TOON
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
}`,ig=`uniform float size;
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
}`,ng=`uniform vec3 diffuse;
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
}`,sg=`#include <common>
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
}`,og=`uniform vec3 color;
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
}`,rg=`uniform float rotation;
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
}`,ag=`uniform vec3 diffuse;
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
}`,se={alphahash_fragment:Cp,alphahash_pars_fragment:Lp,alphamap_fragment:Dp,alphamap_pars_fragment:Pp,alphatest_fragment:Ip,alphatest_pars_fragment:Np,aomap_fragment:Op,aomap_pars_fragment:Up,batching_pars_vertex:zp,batching_vertex:kp,begin_vertex:Bp,beginnormal_vertex:Fp,bsdfs:Hp,iridescence_fragment:Gp,bumpmap_pars_fragment:Vp,clipping_planes_fragment:Wp,clipping_planes_pars_fragment:Xp,clipping_planes_pars_vertex:qp,clipping_planes_vertex:Yp,color_fragment:Kp,color_pars_fragment:jp,color_pars_vertex:$p,color_vertex:Zp,common:Jp,cube_uv_reflection_fragment:Qp,defaultnormal_vertex:tm,displacementmap_pars_vertex:em,displacementmap_vertex:im,emissivemap_fragment:nm,emissivemap_pars_fragment:sm,colorspace_fragment:om,colorspace_pars_fragment:rm,envmap_fragment:am,envmap_common_pars_fragment:lm,envmap_pars_fragment:hm,envmap_pars_vertex:cm,envmap_physical_pars_fragment:ym,envmap_vertex:fm,fog_vertex:dm,fog_pars_vertex:um,fog_fragment:pm,fog_pars_fragment:mm,gradientmap_pars_fragment:gm,lightmap_pars_fragment:xm,lights_lambert_fragment:vm,lights_lambert_pars_fragment:_m,lights_pars_begin:Mm,lights_toon_fragment:bm,lights_toon_pars_fragment:Sm,lights_phong_fragment:Em,lights_phong_pars_fragment:wm,lights_physical_fragment:Tm,lights_physical_pars_fragment:Am,lights_fragment_begin:Rm,lights_fragment_maps:Cm,lights_fragment_end:Lm,logdepthbuf_fragment:Dm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Im,logdepthbuf_vertex:Nm,map_fragment:Om,map_pars_fragment:Um,map_particle_fragment:zm,map_particle_pars_fragment:km,metalnessmap_fragment:Bm,metalnessmap_pars_fragment:Fm,morphinstance_vertex:Hm,morphcolor_vertex:Gm,morphnormal_vertex:Vm,morphtarget_pars_vertex:Wm,morphtarget_vertex:Xm,normal_fragment_begin:qm,normal_fragment_maps:Ym,normal_pars_fragment:Km,normal_pars_vertex:jm,normal_vertex:$m,normalmap_pars_fragment:Zm,clearcoat_normal_fragment_begin:Jm,clearcoat_normal_fragment_maps:Qm,clearcoat_pars_fragment:t1,iridescence_pars_fragment:e1,opaque_fragment:i1,packing:n1,premultiplied_alpha_fragment:s1,project_vertex:o1,dithering_fragment:r1,dithering_pars_fragment:a1,roughnessmap_fragment:l1,roughnessmap_pars_fragment:h1,shadowmap_pars_fragment:c1,shadowmap_pars_vertex:f1,shadowmap_vertex:d1,shadowmask_pars_fragment:u1,skinbase_vertex:p1,skinning_pars_vertex:m1,skinning_vertex:g1,skinnormal_vertex:x1,specularmap_fragment:v1,specularmap_pars_fragment:_1,tonemapping_fragment:M1,tonemapping_pars_fragment:y1,transmission_fragment:b1,transmission_pars_fragment:S1,uv_pars_fragment:E1,uv_pars_vertex:w1,uv_vertex:T1,worldpos_vertex:A1,background_vert:R1,background_frag:C1,backgroundCube_vert:L1,backgroundCube_frag:D1,cube_vert:P1,cube_frag:I1,depth_vert:N1,depth_frag:O1,distanceRGBA_vert:U1,distanceRGBA_frag:z1,equirect_vert:k1,equirect_frag:B1,linedashed_vert:F1,linedashed_frag:H1,meshbasic_vert:G1,meshbasic_frag:V1,meshlambert_vert:W1,meshlambert_frag:X1,meshmatcap_vert:q1,meshmatcap_frag:Y1,meshnormal_vert:K1,meshnormal_frag:j1,meshphong_vert:$1,meshphong_frag:Z1,meshphysical_vert:J1,meshphysical_frag:Q1,meshtoon_vert:tg,meshtoon_frag:eg,points_vert:ig,points_frag:ng,shadow_vert:sg,shadow_frag:og,sprite_vert:rg,sprite_frag:ag},dt={common:{diffuse:{value:new St(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Qt}},envmap:{envMap:{value:null},envMapRotation:{value:new Qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Qt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new St(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new St(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0},uvTransform:{value:new Qt}},sprite:{diffuse:{value:new St(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Qt},alphaMap:{value:null},alphaMapTransform:{value:new Qt},alphaTest:{value:0}}},dn={basic:{uniforms:Ti([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.fog]),vertexShader:se.meshbasic_vert,fragmentShader:se.meshbasic_frag},lambert:{uniforms:Ti([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new St(0)}}]),vertexShader:se.meshlambert_vert,fragmentShader:se.meshlambert_frag},phong:{uniforms:Ti([dt.common,dt.specularmap,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,dt.lights,{emissive:{value:new St(0)},specular:{value:new St(1118481)},shininess:{value:30}}]),vertexShader:se.meshphong_vert,fragmentShader:se.meshphong_frag},standard:{uniforms:Ti([dt.common,dt.envmap,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.roughnessmap,dt.metalnessmap,dt.fog,dt.lights,{emissive:{value:new St(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag},toon:{uniforms:Ti([dt.common,dt.aomap,dt.lightmap,dt.emissivemap,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.gradientmap,dt.fog,dt.lights,{emissive:{value:new St(0)}}]),vertexShader:se.meshtoon_vert,fragmentShader:se.meshtoon_frag},matcap:{uniforms:Ti([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,dt.fog,{matcap:{value:null}}]),vertexShader:se.meshmatcap_vert,fragmentShader:se.meshmatcap_frag},points:{uniforms:Ti([dt.points,dt.fog]),vertexShader:se.points_vert,fragmentShader:se.points_frag},dashed:{uniforms:Ti([dt.common,dt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:se.linedashed_vert,fragmentShader:se.linedashed_frag},depth:{uniforms:Ti([dt.common,dt.displacementmap]),vertexShader:se.depth_vert,fragmentShader:se.depth_frag},normal:{uniforms:Ti([dt.common,dt.bumpmap,dt.normalmap,dt.displacementmap,{opacity:{value:1}}]),vertexShader:se.meshnormal_vert,fragmentShader:se.meshnormal_frag},sprite:{uniforms:Ti([dt.sprite,dt.fog]),vertexShader:se.sprite_vert,fragmentShader:se.sprite_frag},background:{uniforms:{uvTransform:{value:new Qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:se.background_vert,fragmentShader:se.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Qt}},vertexShader:se.backgroundCube_vert,fragmentShader:se.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:se.cube_vert,fragmentShader:se.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:se.equirect_vert,fragmentShader:se.equirect_frag},distanceRGBA:{uniforms:Ti([dt.common,dt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:se.distanceRGBA_vert,fragmentShader:se.distanceRGBA_frag},shadow:{uniforms:Ti([dt.lights,dt.fog,{color:{value:new St(0)},opacity:{value:1}}]),vertexShader:se.shadow_vert,fragmentShader:se.shadow_frag}};dn.physical={uniforms:Ti([dn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Qt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Qt},sheen:{value:0},sheenColor:{value:new St(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Qt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Qt},attenuationDistance:{value:0},attenuationColor:{value:new St(0)},specularColor:{value:new St(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Qt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Qt}}]),vertexShader:se.meshphysical_vert,fragmentShader:se.meshphysical_frag};const Pr={r:0,b:0,g:0},us=new hn,lg=new Ue;function hg(n,t,e,i,s,o,r){const l=new St(0);let a=o===!0?0:1,h,f,c=null,d=0,u=null;function g(M){let b=M.isScene===!0?M.background:null;return b&&b.isTexture&&(b=(M.backgroundBlurriness>0?e:t).get(b)),b}function x(M){let b=!1;const v=g(M);v===null?p(l,a):v&&v.isColor&&(p(v,1),b=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||b)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,b){const v=g(b);v&&(v.isCubeTexture||v.mapping===Ba)?(f===void 0&&(f=new _t(new Kt(1,1,1),new Si({name:"BackgroundCubeMaterial",uniforms:fo(dn.backgroundCube.uniforms),vertexShader:dn.backgroundCube.vertexShader,fragmentShader:dn.backgroundCube.fragmentShader,side:Ci,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,E,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),us.copy(b.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=b.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(lg.makeRotationFromEuler(us)),f.material.toneMapped=xe.getTransfer(v.colorSpace)!==Ce,(c!==v||d!==v.version||u!==n.toneMapping)&&(f.material.needsUpdate=!0,c=v,d=v.version,u=n.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new _t(new kn(2,2),new Si({name:"BackgroundMaterial",uniforms:fo(dn.background.uniforms),vertexShader:dn.background.vertexShader,fragmentShader:dn.background.fragmentShader,side:as,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=b.backgroundIntensity,h.material.toneMapped=xe.getTransfer(v.colorSpace)!==Ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||d!==v.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,c=v,d=v.version,u=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,b){M.getRGB(Pr,ou(n)),i.buffers.color.setClear(Pr.r,Pr.g,Pr.b,b,r)}return{getClearColor:function(){return l},setClearColor:function(M,b=1){l.set(M),a=b,p(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,p(l,a)},render:x,addToRenderList:m}}function cg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function l(S,P,F,H,Y){let K=!1;const W=c(H,F,P);o!==W&&(o=W,h(o.object)),K=u(S,H,F,Y),K&&g(S,H,F,Y),Y!==null&&t.update(Y,n.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,v(S,P,F,H),Y!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(Y).buffer))}function a(){return n.createVertexArray()}function h(S){return n.bindVertexArray(S)}function f(S){return n.deleteVertexArray(S)}function c(S,P,F){const H=F.wireframe===!0;let Y=i[S.id];Y===void 0&&(Y={},i[S.id]=Y);let K=Y[P.id];K===void 0&&(K={},Y[P.id]=K);let W=K[H];return W===void 0&&(W=d(a()),K[H]=W),W}function d(S){const P=[],F=[],H=[];for(let Y=0;Y<e;Y++)P[Y]=0,F[Y]=0,H[Y]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:F,attributeDivisors:H,object:S,attributes:{},index:null}}function u(S,P,F,H){const Y=o.attributes,K=P.attributes;let W=0;const et=F.getAttributes();for(const G in et)if(et[G].location>=0){const ht=Y[G];let At=K[G];if(At===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(At=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(At=S.instanceColor)),ht===void 0||ht.attribute!==At||At&&ht.data!==At.data)return!0;W++}return o.attributesNum!==W||o.index!==H}function g(S,P,F,H){const Y={},K=P.attributes;let W=0;const et=F.getAttributes();for(const G in et)if(et[G].location>=0){let ht=K[G];ht===void 0&&(G==="instanceMatrix"&&S.instanceMatrix&&(ht=S.instanceMatrix),G==="instanceColor"&&S.instanceColor&&(ht=S.instanceColor));const At={};At.attribute=ht,ht&&ht.data&&(At.data=ht.data),Y[G]=At,W++}o.attributes=Y,o.attributesNum=W,o.index=H}function x(){const S=o.newAttributes;for(let P=0,F=S.length;P<F;P++)S[P]=0}function m(S){p(S,0)}function p(S,P){const F=o.newAttributes,H=o.enabledAttributes,Y=o.attributeDivisors;F[S]=1,H[S]===0&&(n.enableVertexAttribArray(S),H[S]=1),Y[S]!==P&&(n.vertexAttribDivisor(S,P),Y[S]=P)}function M(){const S=o.newAttributes,P=o.enabledAttributes;for(let F=0,H=P.length;F<H;F++)P[F]!==S[F]&&(n.disableVertexAttribArray(F),P[F]=0)}function b(S,P,F,H,Y,K,W){W===!0?n.vertexAttribIPointer(S,P,F,Y,K):n.vertexAttribPointer(S,P,F,H,Y,K)}function v(S,P,F,H){x();const Y=H.attributes,K=F.getAttributes(),W=P.defaultAttributeValues;for(const et in K){const G=K[et];if(G.location>=0){let st=Y[et];if(st===void 0&&(et==="instanceMatrix"&&S.instanceMatrix&&(st=S.instanceMatrix),et==="instanceColor"&&S.instanceColor&&(st=S.instanceColor)),st!==void 0){const ht=st.normalized,At=st.itemSize,Vt=t.get(st);if(Vt===void 0)continue;const le=Vt.buffer,Z=Vt.type,rt=Vt.bytesPerElement,Mt=Z===n.INT||Z===n.UNSIGNED_INT||st.gpuType===ec;if(st.isInterleavedBufferAttribute){const ft=st.data,Et=ft.stride,yt=st.offset;if(ft.isInstancedInterleavedBuffer){for(let Ht=0;Ht<G.locationSize;Ht++)p(G.location+Ht,ft.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ht=0;Ht<G.locationSize;Ht++)m(G.location+Ht);n.bindBuffer(n.ARRAY_BUFFER,le);for(let Ht=0;Ht<G.locationSize;Ht++)b(G.location+Ht,At/G.locationSize,Z,ht,Et*rt,(yt+At/G.locationSize*Ht)*rt,Mt)}else{if(st.isInstancedBufferAttribute){for(let ft=0;ft<G.locationSize;ft++)p(G.location+ft,st.meshPerAttribute);S.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=st.meshPerAttribute*st.count)}else for(let ft=0;ft<G.locationSize;ft++)m(G.location+ft);n.bindBuffer(n.ARRAY_BUFFER,le);for(let ft=0;ft<G.locationSize;ft++)b(G.location+ft,At/G.locationSize,Z,ht,At*rt,At/G.locationSize*ft*rt,Mt)}}else if(W!==void 0){const ht=W[et];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(G.location,ht);break;case 3:n.vertexAttrib3fv(G.location,ht);break;case 4:n.vertexAttrib4fv(G.location,ht);break;default:n.vertexAttrib1fv(G.location,ht)}}}}M()}function D(){C();for(const S in i){const P=i[S];for(const F in P){const H=P[F];for(const Y in H)f(H[Y].object),delete H[Y];delete P[F]}delete i[S]}}function E(S){if(i[S.id]===void 0)return;const P=i[S.id];for(const F in P){const H=P[F];for(const Y in H)f(H[Y].object),delete H[Y];delete P[F]}delete i[S.id]}function w(S){for(const P in i){const F=i[P];if(F[S.id]===void 0)continue;const H=F[S.id];for(const Y in H)f(H[Y].object),delete H[Y];delete F[S.id]}}function C(){y(),r=!0,o!==s&&(o=s,h(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:C,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:E,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function fg(n,t,e){let i;function s(h){i=h}function o(h,f){n.drawArrays(i,h,f),e.update(f,i,1)}function r(h,f,c){c!==0&&(n.drawArraysInstanced(i,h,f,c),e.update(f,i,c))}function l(h,f,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,c);let u=0;for(let g=0;g<c;g++)u+=f[g];e.update(u,i,1)}function a(h,f,c,d){if(c===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<h.length;g++)r(h[g],f[g],d[g]);else{u.multiDrawArraysInstancedWEBGL(i,h,0,f,0,d,0,c);let g=0;for(let x=0;x<c;x++)g+=f[x]*d[x];e.update(g,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=l,this.renderMultiDrawInstances=a}function dg(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==an&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const C=w===xn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Fn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Pn&&!C)}function a(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const f=a(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const c=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),b=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=g>0,E=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:a,textureFormatReadable:r,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:b,maxFragmentUniforms:v,vertexTextures:D,maxSamples:E}}function ug(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new ms,l=new Qt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const u=c.length!==0||d||i!==0||s;return s=d,i=c.length,u},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(c,d){e=f(c,d,0)},this.setState=function(c,d,u){const g=c.clippingPlanes,x=c.clipIntersection,m=c.clipShadows,p=n.get(c);if(!s||g===null||g.length===0||o&&!m)o?f(null):h();else{const M=o?0:i,b=M*4;let v=p.clippingState||null;a.value=v,v=f(g,d,b,u);for(let D=0;D!==b;++D)v[D]=e[D];p.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function h(){a.value!==e&&(a.value=e,a.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(c,d,u,g){const x=c!==null?c.length:0;let m=null;if(x!==0){if(m=a.value,g!==!0||m===null){const p=u+x*4,M=d.matrixWorldInverse;l.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let b=0,v=u;b!==x;++b,v+=4)r.copy(c[b]).applyMatrix4(M,l),r.normal.toArray(m,v),m[v+3]=r.constant}a.value=m,a.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function pg(n){let t=new WeakMap;function e(r,l){return l===oh?r.mapping=ao:l===rh&&(r.mapping=lo),r}function i(r){if(r&&r.isTexture){const l=r.mapping;if(l===oh||l===rh)if(t.has(r)){const a=t.get(r).texture;return e(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const h=new wp(a.height);return h.fromEquirectangularTexture(n,r),t.set(r,h),r.addEventListener("dispose",s),e(h.texture,r.mapping)}else return null}}return r}function s(r){const l=r.target;l.removeEventListener("dispose",s);const a=t.get(l);a!==void 0&&(t.delete(l),a.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class cc extends ru{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,l=s+e,a=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,r=o+h*this.view.width,l-=f*this.view.offsetY,a=l-f*this.view.height}this.projectionMatrix.makeOrthographic(o,r,l,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Js=4,gf=[.125,.215,.35,.446,.526,.582],vs=20,xl=new cc,xf=new St;let vl=null,_l=0,Ml=0,yl=!1;const gs=(1+Math.sqrt(5))/2,Xs=1/gs,vf=[new I(-gs,Xs,0),new I(gs,Xs,0),new I(-Xs,0,gs),new I(Xs,0,gs),new I(0,gs,-Xs),new I(0,gs,Xs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class _f{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){vl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=bf(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=yf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(vl,_l,Ml),this._renderer.xr.enabled=yl,t.scissorTest=!1,Ir(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ao||t.mapping===lo?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),vl=this._renderer.getRenderTarget(),_l=this._renderer.getActiveCubeFace(),Ml=this._renderer.getActiveMipmapLevel(),yl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:$i,minFilter:$i,generateMipmaps:!1,type:xn,format:an,colorSpace:go,depthBuffer:!1},s=Mf(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Mf(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=mg(o)),this._blurMaterial=gg(o,t,e)}return s}_compileMaterial(t){const e=new _t(this._lodPlanes[0],t);this._renderer.compile(e,xl)}_sceneToCubeUV(t,e,i,s){const l=new Hi(90,1,e,i),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,d=f.toneMapping;f.getClearColor(xf),f.toneMapping=Un,f.autoClear=!1;const u=new ce({name:"PMREM.Background",side:Ci,depthWrite:!1,depthTest:!1}),g=new _t(new Kt,u);let x=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,x=!0):(u.color.copy(xf),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(l.up.set(0,a[p],0),l.lookAt(h[p],0,0)):M===1?(l.up.set(0,0,a[p]),l.lookAt(0,h[p],0)):(l.up.set(0,a[p],0),l.lookAt(0,0,h[p]));const b=this._cubeSize;Ir(s,M*b,p>2?b:0,b,b),f.setRenderTarget(s),x&&f.render(g,l),f.render(t,l)}g.geometry.dispose(),g.material.dispose(),f.toneMapping=d,f.autoClear=c,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===ao||t.mapping===lo;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=bf()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=yf());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new _t(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const a=this._cubeSize;Ir(e,0,0,3*a,2*a),i.setRenderTarget(e),i.render(r,xl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=vf[(s-o-1)%vf.length];this._blur(t,o-1,o,r,l)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,l){const a=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,c=new _t(this._lodPlanes[s],h),d=h.uniforms,u=this._sizeLods[i]-1,g=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*vs-1),x=o/g,m=isFinite(o)?1+Math.floor(f*x):vs;m>vs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vs}`);const p=[];let M=0;for(let w=0;w<vs;++w){const C=w/x,y=Math.exp(-C*C/2);p.push(y),w===0?M+=y:w<m&&(M+=2*y)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=r==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:b}=this;d.dTheta.value=g,d.mipInt.value=b-i;const v=this._sizeLods[s],D=3*v*(s>b-Js?s-b+Js:0),E=4*(this._cubeSize-v);Ir(e,D,E,3*v,2*v),a.setRenderTarget(e),a.render(c,xl)}}function mg(n){const t=[],e=[],i=[];let s=n;const o=n-Js+1+gf.length;for(let r=0;r<o;r++){const l=Math.pow(2,s);e.push(l);let a=1/l;r>n-Js?a=gf[r-n+Js-1]:r===0&&(a=0),i.push(a);const h=1/(l-2),f=-h,c=1+h,d=[f,f,c,f,c,c,f,f,c,c,f,c],u=6,g=6,x=3,m=2,p=1,M=new Float32Array(x*g*u),b=new Float32Array(m*g*u),v=new Float32Array(p*g*u);for(let E=0;E<u;E++){const w=E%3*2/3-1,C=E>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(y,x*g*E),b.set(d,m*g*E);const S=[E,E,E,E,E,E];v.set(S,p*g*E)}const D=new ii;D.setAttribute("position",new Ei(M,x)),D.setAttribute("uv",new Ei(b,m)),D.setAttribute("faceIndex",new Ei(v,p)),t.push(D),s>Js&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Mf(n,t,e){const i=new Ji(n,t,e);return i.texture.mapping=Ba,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ir(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function gg(n,t,e){const i=new Float32Array(vs),s=new I(0,1,0);return new Si({name:"SphericalGaussianBlur",defines:{n:vs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function yf(){return new Si({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function bf(){return new Si({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function xg(n){let t=new WeakMap,e=null;function i(l){if(l&&l.isTexture){const a=l.mapping,h=a===oh||a===rh,f=a===ao||a===lo;if(h||f){let c=t.get(l);const d=c!==void 0?c.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==d)return e===null&&(e=new _f(n)),c=h?e.fromEquirectangular(l,c):e.fromCubemap(l,c),c.texture.pmremVersion=l.pmremVersion,t.set(l,c),c.texture;if(c!==void 0)return c.texture;{const u=l.image;return h&&u&&u.height>0||f&&u&&s(u)?(e===null&&(e=new _f(n)),c=h?e.fromEquirectangular(l):e.fromCubemap(l),c.texture.pmremVersion=l.pmremVersion,t.set(l,c),l.addEventListener("dispose",o),c.texture):null}}}return l}function s(l){let a=0;const h=6;for(let f=0;f<h;f++)l[f]!==void 0&&a++;return a===h}function o(l){const a=l.target;a.removeEventListener("dispose",o);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function vg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&ko("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _g(n,t,e,i){const s={},o=new WeakMap;function r(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const g in d.attributes)t.remove(d.attributes[g]);for(const g in d.morphAttributes){const x=d.morphAttributes[g];for(let m=0,p=x.length;m<p;m++)t.remove(x[m])}d.removeEventListener("dispose",r),delete s[d.id];const u=o.get(d);u&&(t.remove(u),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(c,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function a(c){const d=c.attributes;for(const g in d)t.update(d[g],n.ARRAY_BUFFER);const u=c.morphAttributes;for(const g in u){const x=u[g];for(let m=0,p=x.length;m<p;m++)t.update(x[m],n.ARRAY_BUFFER)}}function h(c){const d=[],u=c.index,g=c.attributes.position;let x=0;if(u!==null){const M=u.array;x=u.version;for(let b=0,v=M.length;b<v;b+=3){const D=M[b+0],E=M[b+1],w=M[b+2];d.push(D,E,E,w,w,D)}}else if(g!==void 0){const M=g.array;x=g.version;for(let b=0,v=M.length/3-1;b<v;b+=3){const D=b+0,E=b+1,w=b+2;d.push(D,E,E,w,w,D)}}else return;const m=new(Jd(d)?su:nu)(d,1);m.version=x;const p=o.get(c);p&&t.remove(p),o.set(c,m)}function f(c){const d=o.get(c);if(d){const u=c.index;u!==null&&d.version<u.version&&h(c)}else h(c);return o.get(c)}return{get:l,update:a,getWireframeAttribute:f}}function Mg(n,t,e){let i;function s(d){i=d}let o,r;function l(d){o=d.type,r=d.bytesPerElement}function a(d,u){n.drawElements(i,u,o,d*r),e.update(u,i,1)}function h(d,u,g){g!==0&&(n.drawElementsInstanced(i,u,o,d*r,g),e.update(u,i,g))}function f(d,u,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,o,d,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];e.update(m,i,1)}function c(d,u,g,x){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)h(d[p]/r,u[p],x[p]);else{m.multiDrawElementsInstancedWEBGL(i,u,0,o,d,0,x,0,g);let p=0;for(let M=0;M<g;M++)p+=u[M]*x[M];e.update(p,i,1)}}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=c}function yg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,l){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=l*(o/3);break;case n.LINES:e.lines+=l*(o/2);break;case n.LINE_STRIP:e.lines+=l*(o-1);break;case n.LINE_LOOP:e.lines+=l*o;break;case n.POINTS:e.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function bg(n,t,e){const i=new WeakMap,s=new Pe;function o(r,l,a){const h=r.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,c=f!==void 0?f.length:0;let d=i.get(l);if(d===void 0||d.count!==c){let y=function(){w.dispose(),i.delete(l),l.removeEventListener("dispose",y)};d!==void 0&&d.texture.dispose();const u=l.morphAttributes.position!==void 0,g=l.morphAttributes.normal!==void 0,x=l.morphAttributes.color!==void 0,m=l.morphAttributes.position||[],p=l.morphAttributes.normal||[],M=l.morphAttributes.color||[];let b=0;u===!0&&(b=1),g===!0&&(b=2),x===!0&&(b=3);let v=l.attributes.position.count*b,D=1;v>t.maxTextureSize&&(D=Math.ceil(v/t.maxTextureSize),v=t.maxTextureSize);const E=new Float32Array(v*D*4*c),w=new tu(E,v,D,c);w.type=Pn,w.needsUpdate=!0;const C=b*4;for(let S=0;S<c;S++){const P=m[S],F=p[S],H=M[S],Y=v*D*4*S;for(let K=0;K<P.count;K++){const W=K*C;u===!0&&(s.fromBufferAttribute(P,K),E[Y+W+0]=s.x,E[Y+W+1]=s.y,E[Y+W+2]=s.z,E[Y+W+3]=0),g===!0&&(s.fromBufferAttribute(F,K),E[Y+W+4]=s.x,E[Y+W+5]=s.y,E[Y+W+6]=s.z,E[Y+W+7]=0),x===!0&&(s.fromBufferAttribute(H,K),E[Y+W+8]=s.x,E[Y+W+9]=s.y,E[Y+W+10]=s.z,E[Y+W+11]=H.itemSize===4?s.w:1)}}d={count:c,texture:w,size:new Ft(v,D)},i.set(l,d),l.addEventListener("dispose",y)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)a.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let u=0;for(let x=0;x<h.length;x++)u+=h[x];const g=l.morphTargetsRelative?1:1-u;a.getUniforms().setValue(n,"morphTargetBaseInfluence",g),a.getUniforms().setValue(n,"morphTargetInfluences",h)}a.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),a.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function Sg(n,t,e,i){let s=new WeakMap;function o(a){const h=i.render.frame,f=a.geometry,c=t.get(a,f);if(s.get(c)!==h&&(t.update(c),s.set(c,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",l)===!1&&a.addEventListener("dispose",l),s.get(a)!==h&&(e.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,n.ARRAY_BUFFER),s.set(a,h))),a.isSkinnedMesh){const d=a.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return c}function r(){s=new WeakMap}function l(a){const h=a.target;h.removeEventListener("dispose",l),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:r}}class hu extends Li{constructor(t,e,i,s,o,r,l,a,h,f=io){if(f!==io&&f!==co)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===io&&(i=Ts),i===void 0&&f===co&&(i=ho),super(null,s,o,r,l,a,f,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:_e,this.minFilter=a!==void 0?a:_e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const cu=new Li,Sf=new hu(1,1),fu=new tu,du=new cp,uu=new au,Ef=[],wf=[],Tf=new Float32Array(16),Af=new Float32Array(9),Rf=new Float32Array(4);function vo(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=Ef[s];if(o===void 0&&(o=new Float32Array(s),Ef[s]=o),t!==0){i.toArray(o,0);for(let r=1,l=0;r!==t;++r)l+=e,n[r].toArray(o,l)}return o}function li(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function hi(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Ha(n,t){let e=wf[t];e===void 0&&(e=new Int32Array(t),wf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function Eg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function wg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(li(e,t))return;n.uniform2fv(this.addr,t),hi(e,t)}}function Tg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(li(e,t))return;n.uniform3fv(this.addr,t),hi(e,t)}}function Ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(li(e,t))return;n.uniform4fv(this.addr,t),hi(e,t)}}function Rg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(li(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),hi(e,t)}else{if(li(e,i))return;Rf.set(i),n.uniformMatrix2fv(this.addr,!1,Rf),hi(e,i)}}function Cg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(li(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),hi(e,t)}else{if(li(e,i))return;Af.set(i),n.uniformMatrix3fv(this.addr,!1,Af),hi(e,i)}}function Lg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(li(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),hi(e,t)}else{if(li(e,i))return;Tf.set(i),n.uniformMatrix4fv(this.addr,!1,Tf),hi(e,i)}}function Dg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Pg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(li(e,t))return;n.uniform2iv(this.addr,t),hi(e,t)}}function Ig(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(li(e,t))return;n.uniform3iv(this.addr,t),hi(e,t)}}function Ng(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(li(e,t))return;n.uniform4iv(this.addr,t),hi(e,t)}}function Og(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ug(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(li(e,t))return;n.uniform2uiv(this.addr,t),hi(e,t)}}function zg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(li(e,t))return;n.uniform3uiv(this.addr,t),hi(e,t)}}function kg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(li(e,t))return;n.uniform4uiv(this.addr,t),hi(e,t)}}function Bg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(Sf.compareFunction=Zd,o=Sf):o=cu,e.setTexture2D(t||o,s)}function Fg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||du,s)}function Hg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||uu,s)}function Gg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||fu,s)}function Vg(n){switch(n){case 5126:return Eg;case 35664:return wg;case 35665:return Tg;case 35666:return Ag;case 35674:return Rg;case 35675:return Cg;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Ng;case 5125:return Og;case 36294:return Ug;case 36295:return zg;case 36296:return kg;case 35678:case 36198:case 36298:case 36306:case 35682:return Bg;case 35679:case 36299:case 36307:return Fg;case 35680:case 36300:case 36308:case 36293:return Hg;case 36289:case 36303:case 36311:case 36292:return Gg}}function Wg(n,t){n.uniform1fv(this.addr,t)}function Xg(n,t){const e=vo(t,this.size,2);n.uniform2fv(this.addr,e)}function qg(n,t){const e=vo(t,this.size,3);n.uniform3fv(this.addr,e)}function Yg(n,t){const e=vo(t,this.size,4);n.uniform4fv(this.addr,e)}function Kg(n,t){const e=vo(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function jg(n,t){const e=vo(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function $g(n,t){const e=vo(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Zg(n,t){n.uniform1iv(this.addr,t)}function Jg(n,t){n.uniform2iv(this.addr,t)}function Qg(n,t){n.uniform3iv(this.addr,t)}function tx(n,t){n.uniform4iv(this.addr,t)}function ex(n,t){n.uniform1uiv(this.addr,t)}function ix(n,t){n.uniform2uiv(this.addr,t)}function nx(n,t){n.uniform3uiv(this.addr,t)}function sx(n,t){n.uniform4uiv(this.addr,t)}function ox(n,t,e){const i=this.cache,s=t.length,o=Ha(e,s);li(i,o)||(n.uniform1iv(this.addr,o),hi(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||cu,o[r])}function rx(n,t,e){const i=this.cache,s=t.length,o=Ha(e,s);li(i,o)||(n.uniform1iv(this.addr,o),hi(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||du,o[r])}function ax(n,t,e){const i=this.cache,s=t.length,o=Ha(e,s);li(i,o)||(n.uniform1iv(this.addr,o),hi(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||uu,o[r])}function lx(n,t,e){const i=this.cache,s=t.length,o=Ha(e,s);li(i,o)||(n.uniform1iv(this.addr,o),hi(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||fu,o[r])}function hx(n){switch(n){case 5126:return Wg;case 35664:return Xg;case 35665:return qg;case 35666:return Yg;case 35674:return Kg;case 35675:return jg;case 35676:return $g;case 5124:case 35670:return Zg;case 35667:case 35671:return Jg;case 35668:case 35672:return Qg;case 35669:case 35673:return tx;case 5125:return ex;case 36294:return ix;case 36295:return nx;case 36296:return sx;case 35678:case 36198:case 36298:case 36306:case 35682:return ox;case 35679:case 36299:case 36307:return rx;case 35680:case 36300:case 36308:case 36293:return ax;case 36289:case 36303:case 36311:case 36292:return lx}}class cx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Vg(e.type)}}class fx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=hx(e.type)}}class dx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const l=s[o];l.setValue(t,e[l.id],i)}}}const bl=/(\w+)(\])?(\[|\.)?/g;function Cf(n,t){n.seq.push(t),n.map[t.id]=t}function ux(n,t,e){const i=n.name,s=i.length;for(bl.lastIndex=0;;){const o=bl.exec(i),r=bl.lastIndex;let l=o[1];const a=o[2]==="]",h=o[3];if(a&&(l=l|0),h===void 0||h==="["&&r+2===s){Cf(e,h===void 0?new cx(l,n,t):new fx(l,n,t));break}else{let c=e.map[l];c===void 0&&(c=new dx(l),Cf(e,c)),e=c}}}class ra{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);ux(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const l=e[o],a=i[l.id];a.needsUpdate!==!1&&l.setValue(t,a.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function Lf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const px=37297;let mx=0;function gx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const l=r+1;i.push(`${l===t?">":" "} ${l}: ${e[r]}`)}return i.join(`
`)}const Df=new Qt;function xx(n){xe._getMatrix(Df,xe.workingColorSpace,n);const t=`mat3( ${Df.elements.map(e=>e.toFixed(4))} )`;switch(xe.getTransfer(n)){case Fa:return[t,"LinearTransferOETF"];case Ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Pf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+gx(n.getShaderSource(t),r)}else return s}function vx(n,t){const e=xx(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _x(n,t){let e;switch(t){case Od:e="Linear";break;case Ud:e="Reinhard";break;case zd:e="Cineon";break;case ka:e="ACESFilmic";break;case kd:e="AgX";break;case Bd:e="Neutral";break;case V0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Nr=new I;function Mx(){xe.getLuminanceCoefficients(Nr);const n=Nr.x.toFixed(4),t=Nr.y.toFixed(4),e=Nr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function yx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bo).join(`
`)}function bx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Sx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:l}}return e}function Bo(n){return n!==""}function If(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nf(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Ex=/^[ \t]*#include +<([\w\d./]+)>/gm;function Uh(n){return n.replace(Ex,Tx)}const wx=new Map;function Tx(n,t){let e=se[t];if(e===void 0){const i=wx.get(t);if(i!==void 0)e=se[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Uh(e)}const Ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Of(n){return n.replace(Ax,Rx)}function Rx(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function Uf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Cx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Id?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Nd?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Rn&&(t="SHADOWMAP_TYPE_VSM"),t}function Lx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case ao:case lo:t="ENVMAP_TYPE_CUBE";break;case Ba:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Dx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case lo:t="ENVMAP_MODE_REFRACTION";break}return t}function Px(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case tc:t="ENVMAP_BLENDING_MULTIPLY";break;case H0:t="ENVMAP_BLENDING_MIX";break;case G0:t="ENVMAP_BLENDING_ADD";break}return t}function Ix(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Nx(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,l=e.fragmentShader;const a=Cx(e),h=Lx(e),f=Dx(e),c=Px(e),d=Ix(e),u=yx(e),g=bx(o),x=s.createProgram();let m,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bo).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(Bo).join(`
`),p.length>0&&(p+=`
`)):(m=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bo).join(`
`),p=[Uf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Un?"#define TONE_MAPPING":"",e.toneMapping!==Un?se.tonemapping_pars_fragment:"",e.toneMapping!==Un?_x("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",se.colorspace_pars_fragment,vx("linearToOutputTexel",e.outputColorSpace),Mx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bo).join(`
`)),r=Uh(r),r=If(r,e),r=Nf(r,e),l=Uh(l),l=If(l,e),l=Nf(l,e),r=Of(r),l=Of(l),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Kc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Kc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const b=M+m+r,v=M+p+l,D=Lf(s,s.VERTEX_SHADER,b),E=Lf(s,s.FRAGMENT_SHADER,v);s.attachShader(x,D),s.attachShader(x,E),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(n.debug.checkShaderErrors){const F=s.getProgramInfoLog(x).trim(),H=s.getShaderInfoLog(D).trim(),Y=s.getShaderInfoLog(E).trim();let K=!0,W=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(K=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,D,E);else{const et=Pf(s,D,"vertex"),G=Pf(s,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+F+`
`+et+`
`+G)}else F!==""?console.warn("THREE.WebGLProgram: Program Info Log:",F):(H===""||Y==="")&&(W=!1);W&&(P.diagnostics={runnable:K,programLog:F,vertexShader:{log:H,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(D),s.deleteShader(E),C=new ra(s,x),y=Sx(s,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let S=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return S===!1&&(S=s.getProgramParameter(x,px)),S},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=mx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=E,this}let Ox=0;class Ux{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new zx(t),e.set(t,i)),i}}class zx{constructor(t){this.id=Ox++,this.code=t,this.usedTimes=0}}function kx(n,t,e,i,s,o,r){const l=new eu,a=new Ux,h=new Set,f=[],c=s.logarithmicDepthBuffer,d=s.vertexTextures;let u=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return h.add(y),y===0?"uv":`uv${y}`}function m(y,S,P,F,H){const Y=F.fog,K=H.geometry,W=y.isMeshStandardMaterial?F.environment:null,et=(y.isMeshStandardMaterial?e:t).get(y.envMap||W),G=et&&et.mapping===Ba?et.image.height:null,st=g[y.type];y.precision!==null&&(u=s.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const ht=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,At=ht!==void 0?ht.length:0;let Vt=0;K.morphAttributes.position!==void 0&&(Vt=1),K.morphAttributes.normal!==void 0&&(Vt=2),K.morphAttributes.color!==void 0&&(Vt=3);let le,Z,rt,Mt;if(st){const Re=dn[st];le=Re.vertexShader,Z=Re.fragmentShader}else le=y.vertexShader,Z=y.fragmentShader,a.update(y),rt=a.getVertexShaderID(y),Mt=a.getFragmentShaderID(y);const ft=n.getRenderTarget(),Et=n.state.buffers.depth.getReversed(),yt=H.isInstancedMesh===!0,Ht=H.isBatchedMesh===!0,pe=!!y.map,ie=!!y.matcap,Le=!!et,k=!!y.aoMap,Di=!!y.lightMap,$t=!!y.bumpMap,fe=!!y.normalMap,Bt=!!y.displacementMap,Ae=!!y.emissiveMap,kt=!!y.metalnessMap,L=!!y.roughnessMap,T=y.anisotropy>0,V=y.clearcoat>0,it=y.dispersion>0,ot=y.iridescence>0,Q=y.sheen>0,Ot=y.transmission>0,mt=T&&!!y.anisotropyMap,bt=V&&!!y.clearcoatMap,ve=V&&!!y.clearcoatNormalMap,at=V&&!!y.clearcoatRoughnessMap,wt=ot&&!!y.iridescenceMap,Gt=ot&&!!y.iridescenceThicknessMap,Wt=Q&&!!y.sheenColorMap,Tt=Q&&!!y.sheenRoughnessMap,me=!!y.specularMap,ne=!!y.specularColorMap,Ne=!!y.specularIntensityMap,O=Ot&&!!y.transmissionMap,pt=Ot&&!!y.thicknessMap,j=!!y.gradientMap,nt=!!y.alphaMap,vt=y.alphaTest>0,gt=!!y.alphaHash,Zt=!!y.extensions;let Ye=Un;y.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(Ye=n.toneMapping);const vi={shaderID:st,shaderType:y.type,shaderName:y.name,vertexShader:le,fragmentShader:Z,defines:y.defines,customVertexShaderID:rt,customFragmentShaderID:Mt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Ht,batchingColor:Ht&&H._colorsTexture!==null,instancing:yt,instancingColor:yt&&H.instanceColor!==null,instancingMorph:yt&&H.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:go,alphaToCoverage:!!y.alphaToCoverage,map:pe,matcap:ie,envMap:Le,envMapMode:Le&&et.mapping,envMapCubeUVHeight:G,aoMap:k,lightMap:Di,bumpMap:$t,normalMap:fe,displacementMap:d&&Bt,emissiveMap:Ae,normalMapObjectSpace:fe&&y.normalMapType===Y0,normalMapTangentSpace:fe&&y.normalMapType===ac,metalnessMap:kt,roughnessMap:L,anisotropy:T,anisotropyMap:mt,clearcoat:V,clearcoatMap:bt,clearcoatNormalMap:ve,clearcoatRoughnessMap:at,dispersion:it,iridescence:ot,iridescenceMap:wt,iridescenceThicknessMap:Gt,sheen:Q,sheenColorMap:Wt,sheenRoughnessMap:Tt,specularMap:me,specularColorMap:ne,specularIntensityMap:Ne,transmission:Ot,transmissionMap:O,thicknessMap:pt,gradientMap:j,opaque:y.transparent===!1&&y.blending===eo&&y.alphaToCoverage===!1,alphaMap:nt,alphaTest:vt,alphaHash:gt,combine:y.combine,mapUv:pe&&x(y.map.channel),aoMapUv:k&&x(y.aoMap.channel),lightMapUv:Di&&x(y.lightMap.channel),bumpMapUv:$t&&x(y.bumpMap.channel),normalMapUv:fe&&x(y.normalMap.channel),displacementMapUv:Bt&&x(y.displacementMap.channel),emissiveMapUv:Ae&&x(y.emissiveMap.channel),metalnessMapUv:kt&&x(y.metalnessMap.channel),roughnessMapUv:L&&x(y.roughnessMap.channel),anisotropyMapUv:mt&&x(y.anisotropyMap.channel),clearcoatMapUv:bt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ve&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:wt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Gt&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Wt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:Tt&&x(y.sheenRoughnessMap.channel),specularMapUv:me&&x(y.specularMap.channel),specularColorMapUv:ne&&x(y.specularColorMap.channel),specularIntensityMapUv:Ne&&x(y.specularIntensityMap.channel),transmissionMapUv:O&&x(y.transmissionMap.channel),thicknessMapUv:pt&&x(y.thicknessMap.channel),alphaMapUv:nt&&x(y.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(fe||T),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(pe||nt),fog:!!Y,useFog:y.fog===!0,fogExp2:!!Y&&Y.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Et,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:At,morphTextureStride:Vt,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Ye,decodeVideoTexture:pe&&y.map.isVideoTexture===!0&&xe.getTransfer(y.map.colorSpace)===Ce,decodeVideoTextureEmissive:Ae&&y.emissiveMap.isVideoTexture===!0&&xe.getTransfer(y.emissiveMap.colorSpace)===Ce,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ri,flipSided:y.side===Ci,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:Zt&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Zt&&y.extensions.multiDraw===!0||Ht)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return vi.vertexUv1s=h.has(1),vi.vertexUv2s=h.has(2),vi.vertexUv3s=h.has(3),h.clear(),vi}function p(y){const S=[];if(y.shaderID?S.push(y.shaderID):(S.push(y.customVertexShaderID),S.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)S.push(P),S.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(M(S,y),b(S,y),S.push(n.outputColorSpace)),S.push(y.customProgramCacheKey),S.join()}function M(y,S){y.push(S.precision),y.push(S.outputColorSpace),y.push(S.envMapMode),y.push(S.envMapCubeUVHeight),y.push(S.mapUv),y.push(S.alphaMapUv),y.push(S.lightMapUv),y.push(S.aoMapUv),y.push(S.bumpMapUv),y.push(S.normalMapUv),y.push(S.displacementMapUv),y.push(S.emissiveMapUv),y.push(S.metalnessMapUv),y.push(S.roughnessMapUv),y.push(S.anisotropyMapUv),y.push(S.clearcoatMapUv),y.push(S.clearcoatNormalMapUv),y.push(S.clearcoatRoughnessMapUv),y.push(S.iridescenceMapUv),y.push(S.iridescenceThicknessMapUv),y.push(S.sheenColorMapUv),y.push(S.sheenRoughnessMapUv),y.push(S.specularMapUv),y.push(S.specularColorMapUv),y.push(S.specularIntensityMapUv),y.push(S.transmissionMapUv),y.push(S.thicknessMapUv),y.push(S.combine),y.push(S.fogExp2),y.push(S.sizeAttenuation),y.push(S.morphTargetsCount),y.push(S.morphAttributeCount),y.push(S.numDirLights),y.push(S.numPointLights),y.push(S.numSpotLights),y.push(S.numSpotLightMaps),y.push(S.numHemiLights),y.push(S.numRectAreaLights),y.push(S.numDirLightShadows),y.push(S.numPointLightShadows),y.push(S.numSpotLightShadows),y.push(S.numSpotLightShadowsWithMaps),y.push(S.numLightProbes),y.push(S.shadowMapType),y.push(S.toneMapping),y.push(S.numClippingPlanes),y.push(S.numClipIntersection),y.push(S.depthPacking)}function b(y,S){l.disableAll(),S.supportsVertexTextures&&l.enable(0),S.instancing&&l.enable(1),S.instancingColor&&l.enable(2),S.instancingMorph&&l.enable(3),S.matcap&&l.enable(4),S.envMap&&l.enable(5),S.normalMapObjectSpace&&l.enable(6),S.normalMapTangentSpace&&l.enable(7),S.clearcoat&&l.enable(8),S.iridescence&&l.enable(9),S.alphaTest&&l.enable(10),S.vertexColors&&l.enable(11),S.vertexAlphas&&l.enable(12),S.vertexUv1s&&l.enable(13),S.vertexUv2s&&l.enable(14),S.vertexUv3s&&l.enable(15),S.vertexTangents&&l.enable(16),S.anisotropy&&l.enable(17),S.alphaHash&&l.enable(18),S.batching&&l.enable(19),S.dispersion&&l.enable(20),S.batchingColor&&l.enable(21),y.push(l.mask),l.disableAll(),S.fog&&l.enable(0),S.useFog&&l.enable(1),S.flatShading&&l.enable(2),S.logarithmicDepthBuffer&&l.enable(3),S.reverseDepthBuffer&&l.enable(4),S.skinning&&l.enable(5),S.morphTargets&&l.enable(6),S.morphNormals&&l.enable(7),S.morphColors&&l.enable(8),S.premultipliedAlpha&&l.enable(9),S.shadowMapEnabled&&l.enable(10),S.doubleSided&&l.enable(11),S.flipSided&&l.enable(12),S.useDepthPacking&&l.enable(13),S.dithering&&l.enable(14),S.transmission&&l.enable(15),S.sheen&&l.enable(16),S.opaque&&l.enable(17),S.pointsUvs&&l.enable(18),S.decodeVideoTexture&&l.enable(19),S.decodeVideoTextureEmissive&&l.enable(20),S.alphaToCoverage&&l.enable(21),y.push(l.mask)}function v(y){const S=g[y.type];let P;if(S){const F=dn[S];P=Jo.clone(F.uniforms)}else P=y.uniforms;return P}function D(y,S){let P;for(let F=0,H=f.length;F<H;F++){const Y=f[F];if(Y.cacheKey===S){P=Y,++P.usedTimes;break}}return P===void 0&&(P=new Nx(n,S,y,o),f.push(P)),P}function E(y){if(--y.usedTimes===0){const S=f.indexOf(y);f[S]=f[f.length-1],f.pop(),y.destroy()}}function w(y){a.remove(y)}function C(){a.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:D,releaseProgram:E,releaseShaderCache:w,programs:f,dispose:C}}function Bx(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let l=n.get(r);return l===void 0&&(l={},n.set(r,l)),l}function i(r){n.delete(r)}function s(r,l,a){n.get(r)[l]=a}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Fx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function kf(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(c,d,u,g,x,m){let p=n[t];return p===void 0?(p={id:c.id,object:c,geometry:d,material:u,groupOrder:g,renderOrder:c.renderOrder,z:x,group:m},n[t]=p):(p.id=c.id,p.object=c,p.geometry=d,p.material=u,p.groupOrder=g,p.renderOrder=c.renderOrder,p.z=x,p.group=m),t++,p}function l(c,d,u,g,x,m){const p=r(c,d,u,g,x,m);u.transmission>0?i.push(p):u.transparent===!0?s.push(p):e.push(p)}function a(c,d,u,g,x,m){const p=r(c,d,u,g,x,m);u.transmission>0?i.unshift(p):u.transparent===!0?s.unshift(p):e.unshift(p)}function h(c,d){e.length>1&&e.sort(c||Fx),i.length>1&&i.sort(d||zf),s.length>1&&s.sort(d||zf)}function f(){for(let c=t,d=n.length;c<d;c++){const u=n[c];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:l,unshift:a,finish:f,sort:h}}function Hx(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new kf,n.set(i,[r])):s>=o.length?(r=new kf,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function Gx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new St};break;case"SpotLight":e={position:new I,direction:new I,color:new St,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new St,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new St,groundColor:new St};break;case"RectAreaLight":e={color:new St,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Vx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Wx=0;function Xx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function qx(n){const t=new Gx,e=Vx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const s=new I,o=new Ue,r=new Ue;function l(h){let f=0,c=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let u=0,g=0,x=0,m=0,p=0,M=0,b=0,v=0,D=0,E=0,w=0;h.sort(Xx);for(let y=0,S=h.length;y<S;y++){const P=h[y],F=P.color,H=P.intensity,Y=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=F.r*H,c+=F.g*H,d+=F.b*H;else if(P.isLightProbe){for(let W=0;W<9;W++)i.probe[W].addScaledVector(P.sh.coefficients[W],H);w++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const et=P.shadow,G=e.get(P);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,i.directionalShadow[u]=G,i.directionalShadowMap[u]=K,i.directionalShadowMatrix[u]=P.shadow.matrix,M++}i.directional[u]=W,u++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(F).multiplyScalar(H),W.distance=Y,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,i.spot[x]=W;const et=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,et.updateMatrices(P),P.castShadow&&E++),i.spotLightMatrix[x]=et.matrix,P.castShadow){const G=e.get(P);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,i.spotShadow[x]=G,i.spotShadowMap[x]=K,v++}x++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(F).multiplyScalar(H),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=W,m++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const et=P.shadow,G=e.get(P);G.shadowIntensity=et.intensity,G.shadowBias=et.bias,G.shadowNormalBias=et.normalBias,G.shadowRadius=et.radius,G.shadowMapSize=et.mapSize,G.shadowCameraNear=et.camera.near,G.shadowCameraFar=et.camera.far,i.pointShadow[g]=G,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=P.shadow.matrix,b++}i.point[g]=W,g++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(H),W.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[p]=W,p++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=dt.LTC_FLOAT_1,i.rectAreaLTC2=dt.LTC_FLOAT_2):(i.rectAreaLTC1=dt.LTC_HALF_1,i.rectAreaLTC2=dt.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=c,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==u||C.pointLength!==g||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==b||C.numSpotShadows!==v||C.numSpotMaps!==D||C.numLightProbes!==w)&&(i.directional.length=u,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=b,i.pointShadowMap.length=b,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=b,i.spotLightMatrix.length=v+D-E,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=E,i.numLightProbes=w,C.directionalLength=u,C.pointLength=g,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=b,C.numSpotShadows=v,C.numSpotMaps=D,C.numLightProbes=w,i.version=Wx++)}function a(h,f){let c=0,d=0,u=0,g=0,x=0;const m=f.matrixWorldInverse;for(let p=0,M=h.length;p<M;p++){const b=h[p];if(b.isDirectionalLight){const v=i.directional[c];v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),c++}else if(b.isSpotLight){const v=i.spot[u];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(b.isRectAreaLight){const v=i.rectArea[g];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(b.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(b.width*.5,0,0),v.halfHeight.set(0,b.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),g++}else if(b.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(b.matrixWorld),v.position.applyMatrix4(m),d++}else if(b.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(b.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:l,setupView:a,state:i}}function Bf(n){const t=new qx(n),e=[],i=[];function s(f){h.camera=f,e.length=0,i.length=0}function o(f){e.push(f)}function r(f){i.push(f)}function l(){t.setup(e)}function a(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:l,setupLightsView:a,pushLight:o,pushShadow:r}}function Yx(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let l;return r===void 0?(l=new Bf(n),t.set(s,[l])):o>=r.length?(l=new Bf(n),r.push(l)):l=r[o],l}function i(){t=new WeakMap}return{get:e,dispose:i}}class Kx extends Gn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=X0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class jx extends Gn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const $x=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Zx=`uniform sampler2D shadow_pass;
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
}`;function Jx(n,t,e){let i=new hc;const s=new Ft,o=new Ft,r=new Pe,l=new Kx({depthPacking:q0}),a=new jx,h={},f=e.maxTextureSize,c={[as]:Ci,[Ci]:as,[Ri]:Ri},d=new Si({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:$x,fragmentShader:Zx}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const g=new ii;g.setAttribute("position",new Ei(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new _t(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Id;let p=this.type;this.render=function(E,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const y=n.getRenderTarget(),S=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),F=n.state;F.setBlending(On),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const H=p!==Rn&&this.type===Rn,Y=p===Rn&&this.type!==Rn;for(let K=0,W=E.length;K<W;K++){const et=E[K],G=et.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;s.copy(G.mapSize);const st=G.getFrameExtents();if(s.multiply(st),o.copy(G.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(o.x=Math.floor(f/st.x),s.x=o.x*st.x,G.mapSize.x=o.x),s.y>f&&(o.y=Math.floor(f/st.y),s.y=o.y*st.y,G.mapSize.y=o.y)),G.map===null||H===!0||Y===!0){const At=this.type!==Rn?{minFilter:_e,magFilter:_e}:{};G.map!==null&&G.map.dispose(),G.map=new Ji(s.x,s.y,At),G.map.texture.name=et.name+".shadowMap",G.camera.updateProjectionMatrix()}n.setRenderTarget(G.map),n.clear();const ht=G.getViewportCount();for(let At=0;At<ht;At++){const Vt=G.getViewport(At);r.set(o.x*Vt.x,o.y*Vt.y,o.x*Vt.z,o.y*Vt.w),F.viewport(r),G.updateMatrices(et,At),i=G.getFrustum(),v(w,C,G.camera,et,this.type)}G.isPointLightShadow!==!0&&this.type===Rn&&M(G,C),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(y,S,P)};function M(E,w){const C=t.update(x);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,u.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new Ji(s.x,s.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,n.setRenderTarget(E.mapPass),n.clear(),n.renderBufferDirect(w,null,C,d,x,null),u.uniforms.shadow_pass.value=E.mapPass.texture,u.uniforms.resolution.value=E.mapSize,u.uniforms.radius.value=E.radius,n.setRenderTarget(E.map),n.clear(),n.renderBufferDirect(w,null,C,u,x,null)}function b(E,w,C,y){let S=null;const P=C.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(P!==void 0)S=P;else if(S=C.isPointLight===!0?a:l,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const F=S.uuid,H=w.uuid;let Y=h[F];Y===void 0&&(Y={},h[F]=Y);let K=Y[H];K===void 0&&(K=S.clone(),Y[H]=K,w.addEventListener("dispose",D)),S=K}if(S.visible=w.visible,S.wireframe=w.wireframe,y===Rn?S.side=w.shadowSide!==null?w.shadowSide:w.side:S.side=w.shadowSide!==null?w.shadowSide:c[w.side],S.alphaMap=w.alphaMap,S.alphaTest=w.alphaTest,S.map=w.map,S.clipShadows=w.clipShadows,S.clippingPlanes=w.clippingPlanes,S.clipIntersection=w.clipIntersection,S.displacementMap=w.displacementMap,S.displacementScale=w.displacementScale,S.displacementBias=w.displacementBias,S.wireframeLinewidth=w.wireframeLinewidth,S.linewidth=w.linewidth,C.isPointLight===!0&&S.isMeshDistanceMaterial===!0){const F=n.properties.get(S);F.light=C}return S}function v(E,w,C,y,S){if(E.visible===!1)return;if(E.layers.test(w.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&S===Rn)&&(!E.frustumCulled||i.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,E.matrixWorld);const H=t.update(E),Y=E.material;if(Array.isArray(Y)){const K=H.groups;for(let W=0,et=K.length;W<et;W++){const G=K[W],st=Y[G.materialIndex];if(st&&st.visible){const ht=b(E,st,y,S);E.onBeforeShadow(n,E,w,C,H,ht,G),n.renderBufferDirect(C,null,H,ht,E,G),E.onAfterShadow(n,E,w,C,H,ht,G)}}}else if(Y.visible){const K=b(E,Y,y,S);E.onBeforeShadow(n,E,w,C,H,K,null),n.renderBufferDirect(C,null,H,K,E,null),E.onAfterShadow(n,E,w,C,H,K,null)}}const F=E.children;for(let H=0,Y=F.length;H<Y;H++)v(F[H],w,C,y,S)}function D(E){E.target.removeEventListener("dispose",D);for(const C in h){const y=h[C],S=E.target.uuid;S in y&&(y[S].dispose(),delete y[S])}}}const Qx={[Jl]:Ql,[th]:nh,[eh]:sh,[ro]:ih,[Ql]:Jl,[nh]:th,[sh]:eh,[ih]:ro};function tv(n,t){function e(){let O=!1;const pt=new Pe;let j=null;const nt=new Pe(0,0,0,0);return{setMask:function(vt){j!==vt&&!O&&(n.colorMask(vt,vt,vt,vt),j=vt)},setLocked:function(vt){O=vt},setClear:function(vt,gt,Zt,Ye,vi){vi===!0&&(vt*=Ye,gt*=Ye,Zt*=Ye),pt.set(vt,gt,Zt,Ye),nt.equals(pt)===!1&&(n.clearColor(vt,gt,Zt,Ye),nt.copy(pt))},reset:function(){O=!1,j=null,nt.set(-1,0,0,0)}}}function i(){let O=!1,pt=!1,j=null,nt=null,vt=null;return{setReversed:function(gt){if(pt!==gt){const Zt=t.get("EXT_clip_control");pt?Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.ZERO_TO_ONE_EXT):Zt.clipControlEXT(Zt.LOWER_LEFT_EXT,Zt.NEGATIVE_ONE_TO_ONE_EXT);const Ye=vt;vt=null,this.setClear(Ye)}pt=gt},getReversed:function(){return pt},setTest:function(gt){gt?ft(n.DEPTH_TEST):Et(n.DEPTH_TEST)},setMask:function(gt){j!==gt&&!O&&(n.depthMask(gt),j=gt)},setFunc:function(gt){if(pt&&(gt=Qx[gt]),nt!==gt){switch(gt){case Jl:n.depthFunc(n.NEVER);break;case Ql:n.depthFunc(n.ALWAYS);break;case th:n.depthFunc(n.LESS);break;case ro:n.depthFunc(n.LEQUAL);break;case eh:n.depthFunc(n.EQUAL);break;case ih:n.depthFunc(n.GEQUAL);break;case nh:n.depthFunc(n.GREATER);break;case sh:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=gt}},setLocked:function(gt){O=gt},setClear:function(gt){vt!==gt&&(pt&&(gt=1-gt),n.clearDepth(gt),vt=gt)},reset:function(){O=!1,j=null,nt=null,vt=null,pt=!1}}}function s(){let O=!1,pt=null,j=null,nt=null,vt=null,gt=null,Zt=null,Ye=null,vi=null;return{setTest:function(Re){O||(Re?ft(n.STENCIL_TEST):Et(n.STENCIL_TEST))},setMask:function(Re){pt!==Re&&!O&&(n.stencilMask(Re),pt=Re)},setFunc:function(Re,Qi,yn){(j!==Re||nt!==Qi||vt!==yn)&&(n.stencilFunc(Re,Qi,yn),j=Re,nt=Qi,vt=yn)},setOp:function(Re,Qi,yn){(gt!==Re||Zt!==Qi||Ye!==yn)&&(n.stencilOp(Re,Qi,yn),gt=Re,Zt=Qi,Ye=yn)},setLocked:function(Re){O=Re},setClear:function(Re){vi!==Re&&(n.clearStencil(Re),vi=Re)},reset:function(){O=!1,pt=null,j=null,nt=null,vt=null,gt=null,Zt=null,Ye=null,vi=null}}}const o=new e,r=new i,l=new s,a=new WeakMap,h=new WeakMap;let f={},c={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,M=null,b=null,v=null,D=null,E=null,w=new St(0,0,0),C=0,y=!1,S=null,P=null,F=null,H=null,Y=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,et=0;const G=n.getParameter(n.VERSION);G.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=et>=1):G.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=et>=2);let st=null,ht={};const At=n.getParameter(n.SCISSOR_BOX),Vt=n.getParameter(n.VIEWPORT),le=new Pe().fromArray(At),Z=new Pe().fromArray(Vt);function rt(O,pt,j,nt){const vt=new Uint8Array(4),gt=n.createTexture();n.bindTexture(O,gt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Zt=0;Zt<j;Zt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(pt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,vt):n.texImage2D(pt+Zt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,vt);return gt}const Mt={};Mt[n.TEXTURE_2D]=rt(n.TEXTURE_2D,n.TEXTURE_2D,1),Mt[n.TEXTURE_CUBE_MAP]=rt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[n.TEXTURE_2D_ARRAY]=rt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Mt[n.TEXTURE_3D]=rt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),l.setClear(0),ft(n.DEPTH_TEST),r.setFunc(ro),$t(!1),fe(Wc),ft(n.CULL_FACE),k(On);function ft(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function Et(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function yt(O,pt){return c[O]!==pt?(n.bindFramebuffer(O,pt),c[O]=pt,O===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=pt),O===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=pt),!0):!1}function Ht(O,pt){let j=u,nt=!1;if(O){j=d.get(pt),j===void 0&&(j=[],d.set(pt,j));const vt=O.textures;if(j.length!==vt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let gt=0,Zt=vt.length;gt<Zt;gt++)j[gt]=n.COLOR_ATTACHMENT0+gt;j.length=vt.length,nt=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,nt=!0);nt&&n.drawBuffers(j)}function pe(O){return g!==O?(n.useProgram(O),g=O,!0):!1}const ie={[xs]:n.FUNC_ADD,[E0]:n.FUNC_SUBTRACT,[w0]:n.FUNC_REVERSE_SUBTRACT};ie[T0]=n.MIN,ie[A0]=n.MAX;const Le={[R0]:n.ZERO,[C0]:n.ONE,[L0]:n.SRC_COLOR,[$l]:n.SRC_ALPHA,[U0]:n.SRC_ALPHA_SATURATE,[N0]:n.DST_COLOR,[P0]:n.DST_ALPHA,[D0]:n.ONE_MINUS_SRC_COLOR,[Zl]:n.ONE_MINUS_SRC_ALPHA,[O0]:n.ONE_MINUS_DST_COLOR,[I0]:n.ONE_MINUS_DST_ALPHA,[z0]:n.CONSTANT_COLOR,[k0]:n.ONE_MINUS_CONSTANT_COLOR,[B0]:n.CONSTANT_ALPHA,[F0]:n.ONE_MINUS_CONSTANT_ALPHA};function k(O,pt,j,nt,vt,gt,Zt,Ye,vi,Re){if(O===On){x===!0&&(Et(n.BLEND),x=!1);return}if(x===!1&&(ft(n.BLEND),x=!0),O!==S0){if(O!==m||Re!==y){if((p!==xs||v!==xs)&&(n.blendEquation(n.FUNC_ADD),p=xs,v=xs),Re)switch(O){case eo:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $o:n.blendFunc(n.ONE,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case eo:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case $o:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Xc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case qc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,b=null,D=null,E=null,w.set(0,0,0),C=0,m=O,y=Re}return}vt=vt||pt,gt=gt||j,Zt=Zt||nt,(pt!==p||vt!==v)&&(n.blendEquationSeparate(ie[pt],ie[vt]),p=pt,v=vt),(j!==M||nt!==b||gt!==D||Zt!==E)&&(n.blendFuncSeparate(Le[j],Le[nt],Le[gt],Le[Zt]),M=j,b=nt,D=gt,E=Zt),(Ye.equals(w)===!1||vi!==C)&&(n.blendColor(Ye.r,Ye.g,Ye.b,vi),w.copy(Ye),C=vi),m=O,y=!1}function Di(O,pt){O.side===Ri?Et(n.CULL_FACE):ft(n.CULL_FACE);let j=O.side===Ci;pt&&(j=!j),$t(j),O.blending===eo&&O.transparent===!1?k(On):k(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),o.setMask(O.colorWrite);const nt=O.stencilWrite;l.setTest(nt),nt&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ae(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):Et(n.SAMPLE_ALPHA_TO_COVERAGE)}function $t(O){S!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),S=O)}function fe(O){O!==y0?(ft(n.CULL_FACE),O!==P&&(O===Wc?n.cullFace(n.BACK):O===b0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Et(n.CULL_FACE),P=O}function Bt(O){O!==F&&(W&&n.lineWidth(O),F=O)}function Ae(O,pt,j){O?(ft(n.POLYGON_OFFSET_FILL),(H!==pt||Y!==j)&&(n.polygonOffset(pt,j),H=pt,Y=j)):Et(n.POLYGON_OFFSET_FILL)}function kt(O){O?ft(n.SCISSOR_TEST):Et(n.SCISSOR_TEST)}function L(O){O===void 0&&(O=n.TEXTURE0+K-1),st!==O&&(n.activeTexture(O),st=O)}function T(O,pt,j){j===void 0&&(st===null?j=n.TEXTURE0+K-1:j=st);let nt=ht[j];nt===void 0&&(nt={type:void 0,texture:void 0},ht[j]=nt),(nt.type!==O||nt.texture!==pt)&&(st!==j&&(n.activeTexture(j),st=j),n.bindTexture(O,pt||Mt[O]),nt.type=O,nt.texture=pt)}function V(){const O=ht[st];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function it(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ot(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ot(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function mt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function bt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ve(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function wt(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Gt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Wt(O){le.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),le.copy(O))}function Tt(O){Z.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),Z.copy(O))}function me(O,pt){let j=h.get(pt);j===void 0&&(j=new WeakMap,h.set(pt,j));let nt=j.get(O);nt===void 0&&(nt=n.getUniformBlockIndex(pt,O.name),j.set(O,nt))}function ne(O,pt){const nt=h.get(pt).get(O);a.get(pt)!==nt&&(n.uniformBlockBinding(pt,nt,O.__bindingPointIndex),a.set(pt,nt))}function Ne(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},st=null,ht={},c={},d=new WeakMap,u=[],g=null,x=!1,m=null,p=null,M=null,b=null,v=null,D=null,E=null,w=new St(0,0,0),C=0,y=!1,S=null,P=null,F=null,H=null,Y=null,le.set(0,0,n.canvas.width,n.canvas.height),Z.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),l.reset()}return{buffers:{color:o,depth:r,stencil:l},enable:ft,disable:Et,bindFramebuffer:yt,drawBuffers:Ht,useProgram:pe,setBlending:k,setMaterial:Di,setFlipSided:$t,setCullFace:fe,setLineWidth:Bt,setPolygonOffset:Ae,setScissorTest:kt,activeTexture:L,bindTexture:T,unbindTexture:V,compressedTexImage2D:it,compressedTexImage3D:ot,texImage2D:wt,texImage3D:Gt,updateUBOMapping:me,uniformBlockBinding:ne,texStorage2D:ve,texStorage3D:at,texSubImage2D:Q,texSubImage3D:Ot,compressedTexSubImage2D:mt,compressedTexSubImage3D:bt,scissor:Wt,viewport:Tt,reset:Ne}}function Ff(n,t,e,i){const s=ev(i);switch(e){case Wd:return n*t;case qd:return n*t;case Yd:return n*t*2;case Kd:return n*t/s.components*s.byteLength;case sc:return n*t/s.components*s.byteLength;case jd:return n*t*2/s.components*s.byteLength;case oc:return n*t*2/s.components*s.byteLength;case Xd:return n*t*3/s.components*s.byteLength;case an:return n*t*4/s.components*s.byteLength;case rc:return n*t*4/s.components*s.byteLength;case ta:case ea:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ia:case na:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case hh:case fh:return Math.max(n,16)*Math.max(t,8)/4;case lh:case ch:return Math.max(n,8)*Math.max(t,8)/2;case dh:case uh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case ph:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case mh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case gh:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case xh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case vh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case _h:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case Mh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case yh:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case bh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case Sh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Eh:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case wh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Th:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Ah:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Rh:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case sa:case Ch:case Lh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case $d:case Dh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ph:case Ih:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function ev(n){switch(n){case Fn:case Hd:return{byteLength:1,components:1};case Zo:case Gd:case xn:return{byteLength:2,components:1};case ic:case nc:return{byteLength:2,components:4};case Ts:case ec:case Pn:return{byteLength:4,components:1};case Vd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function iv(n,t,e,i,s,o,r){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ft,f=new WeakMap;let c;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(L,T){return u?new OffscreenCanvas(L,T):xa("canvas")}function x(L,T,V){let it=1;const ot=kt(L);if((ot.width>V||ot.height>V)&&(it=V/Math.max(ot.width,ot.height)),it<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(it*ot.width),Ot=Math.floor(it*ot.height);c===void 0&&(c=g(Q,Ot));const mt=T?g(Q,Ot):c;return mt.width=Q,mt.height=Ot,mt.getContext("2d").drawImage(L,0,0,Q,Ot),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Q+"x"+Ot+")."),mt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),L;return L}function m(L){return L.generateMipmaps}function p(L){n.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function b(L,T,V,it,ot=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=T;if(T===n.RED&&(V===n.FLOAT&&(Q=n.R32F),V===n.HALF_FLOAT&&(Q=n.R16F),V===n.UNSIGNED_BYTE&&(Q=n.R8)),T===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.R8UI),V===n.UNSIGNED_SHORT&&(Q=n.R16UI),V===n.UNSIGNED_INT&&(Q=n.R32UI),V===n.BYTE&&(Q=n.R8I),V===n.SHORT&&(Q=n.R16I),V===n.INT&&(Q=n.R32I)),T===n.RG&&(V===n.FLOAT&&(Q=n.RG32F),V===n.HALF_FLOAT&&(Q=n.RG16F),V===n.UNSIGNED_BYTE&&(Q=n.RG8)),T===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RG8UI),V===n.UNSIGNED_SHORT&&(Q=n.RG16UI),V===n.UNSIGNED_INT&&(Q=n.RG32UI),V===n.BYTE&&(Q=n.RG8I),V===n.SHORT&&(Q=n.RG16I),V===n.INT&&(Q=n.RG32I)),T===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),V===n.UNSIGNED_INT&&(Q=n.RGB32UI),V===n.BYTE&&(Q=n.RGB8I),V===n.SHORT&&(Q=n.RGB16I),V===n.INT&&(Q=n.RGB32I)),T===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),V===n.UNSIGNED_INT&&(Q=n.RGBA32UI),V===n.BYTE&&(Q=n.RGBA8I),V===n.SHORT&&(Q=n.RGBA16I),V===n.INT&&(Q=n.RGBA32I)),T===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),T===n.RGBA){const Ot=ot?Fa:xe.getTransfer(it);V===n.FLOAT&&(Q=n.RGBA32F),V===n.HALF_FLOAT&&(Q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Q=Ot===Ce?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(L,T){let V;return L?T===null||T===Ts||T===ho?V=n.DEPTH24_STENCIL8:T===Pn?V=n.DEPTH32F_STENCIL8:T===Zo&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===Ts||T===ho?V=n.DEPTH_COMPONENT24:T===Pn?V=n.DEPTH_COMPONENT32F:T===Zo&&(V=n.DEPTH_COMPONENT16),V}function D(L,T){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==_e&&L.minFilter!==$i?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function E(L){const T=L.target;T.removeEventListener("dispose",E),C(T),T.isVideoTexture&&f.delete(T)}function w(L){const T=L.target;T.removeEventListener("dispose",w),S(T)}function C(L){const T=i.get(L);if(T.__webglInit===void 0)return;const V=L.source,it=d.get(V);if(it){const ot=it[T.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&y(L),Object.keys(it).length===0&&d.delete(V)}i.remove(L)}function y(L){const T=i.get(L);n.deleteTexture(T.__webglTexture);const V=L.source,it=d.get(V);delete it[T.__cacheKey],r.memory.textures--}function S(L){const T=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let it=0;it<6;it++){if(Array.isArray(T.__webglFramebuffer[it]))for(let ot=0;ot<T.__webglFramebuffer[it].length;ot++)n.deleteFramebuffer(T.__webglFramebuffer[it][ot]);else n.deleteFramebuffer(T.__webglFramebuffer[it]);T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer[it])}else{if(Array.isArray(T.__webglFramebuffer))for(let it=0;it<T.__webglFramebuffer.length;it++)n.deleteFramebuffer(T.__webglFramebuffer[it]);else n.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&n.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&n.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let it=0;it<T.__webglColorRenderbuffer.length;it++)T.__webglColorRenderbuffer[it]&&n.deleteRenderbuffer(T.__webglColorRenderbuffer[it]);T.__webglDepthRenderbuffer&&n.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const V=L.textures;for(let it=0,ot=V.length;it<ot;it++){const Q=i.get(V[it]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),r.memory.textures--),i.remove(V[it])}i.remove(L)}let P=0;function F(){P=0}function H(){const L=P;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function Y(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function K(L,T){const V=i.get(L);if(L.isVideoTexture&&Bt(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const it=L.image;if(it===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(it.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Z(V,L,T);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+T)}function W(L,T){const V=i.get(L);if(L.version>0&&V.__version!==L.version){Z(V,L,T);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+T)}function et(L,T){const V=i.get(L);if(L.version>0&&V.__version!==L.version){Z(V,L,T);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+T)}function G(L,T){const V=i.get(L);if(L.version>0&&V.__version!==L.version){rt(V,L,T);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+T)}const st={[ma]:n.REPEAT,[Ms]:n.CLAMP_TO_EDGE,[ah]:n.MIRRORED_REPEAT},ht={[_e]:n.NEAREST,[W0]:n.NEAREST_MIPMAP_NEAREST,[pr]:n.NEAREST_MIPMAP_LINEAR,[$i]:n.LINEAR,[ja]:n.LINEAR_MIPMAP_NEAREST,[Dn]:n.LINEAR_MIPMAP_LINEAR},At={[K0]:n.NEVER,[tp]:n.ALWAYS,[j0]:n.LESS,[Zd]:n.LEQUAL,[$0]:n.EQUAL,[Q0]:n.GEQUAL,[Z0]:n.GREATER,[J0]:n.NOTEQUAL};function Vt(L,T){if(T.type===Pn&&t.has("OES_texture_float_linear")===!1&&(T.magFilter===$i||T.magFilter===ja||T.magFilter===pr||T.magFilter===Dn||T.minFilter===$i||T.minFilter===ja||T.minFilter===pr||T.minFilter===Dn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,st[T.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,st[T.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,st[T.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,ht[T.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,ht[T.minFilter]),T.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,At[T.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===_e||T.minFilter!==pr&&T.minFilter!==Dn||T.type===Pn&&t.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||i.get(T).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,s.getMaxAnisotropy())),i.get(T).__currentAnisotropy=T.anisotropy}}}function le(L,T){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",E));const it=T.source;let ot=d.get(it);ot===void 0&&(ot={},d.set(it,ot));const Q=Y(T);if(Q!==L.__cacheKey){ot[Q]===void 0&&(ot[Q]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,V=!0),ot[Q].usedTimes++;const Ot=ot[L.__cacheKey];Ot!==void 0&&(ot[L.__cacheKey].usedTimes--,Ot.usedTimes===0&&y(T)),L.__cacheKey=Q,L.__webglTexture=ot[Q].texture}return V}function Z(L,T,V){let it=n.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(it=n.TEXTURE_2D_ARRAY),T.isData3DTexture&&(it=n.TEXTURE_3D);const ot=le(L,T),Q=T.source;e.bindTexture(it,L.__webglTexture,n.TEXTURE0+V);const Ot=i.get(Q);if(Q.version!==Ot.__version||ot===!0){e.activeTexture(n.TEXTURE0+V);const mt=xe.getPrimaries(xe.workingColorSpace),bt=T.colorSpace===Jn?null:xe.getPrimaries(T.colorSpace),ve=T.colorSpace===Jn||mt===bt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);let at=x(T.image,!1,s.maxTextureSize);at=Ae(T,at);const wt=o.convert(T.format,T.colorSpace),Gt=o.convert(T.type);let Wt=b(T.internalFormat,wt,Gt,T.colorSpace,T.isVideoTexture);Vt(it,T);let Tt;const me=T.mipmaps,ne=T.isVideoTexture!==!0,Ne=Ot.__version===void 0||ot===!0,O=Q.dataReady,pt=D(T,at);if(T.isDepthTexture)Wt=v(T.format===co,T.type),Ne&&(ne?e.texStorage2D(n.TEXTURE_2D,1,Wt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Wt,at.width,at.height,0,wt,Gt,null));else if(T.isDataTexture)if(me.length>0){ne&&Ne&&e.texStorage2D(n.TEXTURE_2D,pt,Wt,me[0].width,me[0].height);for(let j=0,nt=me.length;j<nt;j++)Tt=me[j],ne?O&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,Tt.width,Tt.height,wt,Gt,Tt.data):e.texImage2D(n.TEXTURE_2D,j,Wt,Tt.width,Tt.height,0,wt,Gt,Tt.data);T.generateMipmaps=!1}else ne?(Ne&&e.texStorage2D(n.TEXTURE_2D,pt,Wt,at.width,at.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,wt,Gt,at.data)):e.texImage2D(n.TEXTURE_2D,0,Wt,at.width,at.height,0,wt,Gt,at.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){ne&&Ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Wt,me[0].width,me[0].height,at.depth);for(let j=0,nt=me.length;j<nt;j++)if(Tt=me[j],T.format!==an)if(wt!==null)if(ne){if(O)if(T.layerUpdates.size>0){const vt=Ff(Tt.width,Tt.height,T.format,T.type);for(const gt of T.layerUpdates){const Zt=Tt.data.subarray(gt*vt/Tt.data.BYTES_PER_ELEMENT,(gt+1)*vt/Tt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,gt,Tt.width,Tt.height,1,wt,Zt)}T.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Tt.width,Tt.height,at.depth,wt,Tt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Wt,Tt.width,Tt.height,at.depth,0,Tt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ne?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,Tt.width,Tt.height,at.depth,wt,Gt,Tt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,Wt,Tt.width,Tt.height,at.depth,0,wt,Gt,Tt.data)}else{ne&&Ne&&e.texStorage2D(n.TEXTURE_2D,pt,Wt,me[0].width,me[0].height);for(let j=0,nt=me.length;j<nt;j++)Tt=me[j],T.format!==an?wt!==null?ne?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,Tt.width,Tt.height,wt,Tt.data):e.compressedTexImage2D(n.TEXTURE_2D,j,Wt,Tt.width,Tt.height,0,Tt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ne?O&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,Tt.width,Tt.height,wt,Gt,Tt.data):e.texImage2D(n.TEXTURE_2D,j,Wt,Tt.width,Tt.height,0,wt,Gt,Tt.data)}else if(T.isDataArrayTexture)if(ne){if(Ne&&e.texStorage3D(n.TEXTURE_2D_ARRAY,pt,Wt,at.width,at.height,at.depth),O)if(T.layerUpdates.size>0){const j=Ff(at.width,at.height,T.format,T.type);for(const nt of T.layerUpdates){const vt=at.data.subarray(nt*j/at.data.BYTES_PER_ELEMENT,(nt+1)*j/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,wt,Gt,vt)}T.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,wt,Gt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Wt,at.width,at.height,at.depth,0,wt,Gt,at.data);else if(T.isData3DTexture)ne?(Ne&&e.texStorage3D(n.TEXTURE_3D,pt,Wt,at.width,at.height,at.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,wt,Gt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Wt,at.width,at.height,at.depth,0,wt,Gt,at.data);else if(T.isFramebufferTexture){if(Ne)if(ne)e.texStorage2D(n.TEXTURE_2D,pt,Wt,at.width,at.height);else{let j=at.width,nt=at.height;for(let vt=0;vt<pt;vt++)e.texImage2D(n.TEXTURE_2D,vt,Wt,j,nt,0,wt,Gt,null),j>>=1,nt>>=1}}else if(me.length>0){if(ne&&Ne){const j=kt(me[0]);e.texStorage2D(n.TEXTURE_2D,pt,Wt,j.width,j.height)}for(let j=0,nt=me.length;j<nt;j++)Tt=me[j],ne?O&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,wt,Gt,Tt):e.texImage2D(n.TEXTURE_2D,j,Wt,wt,Gt,Tt);T.generateMipmaps=!1}else if(ne){if(Ne){const j=kt(at);e.texStorage2D(n.TEXTURE_2D,pt,Wt,j.width,j.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,wt,Gt,at)}else e.texImage2D(n.TEXTURE_2D,0,Wt,wt,Gt,at);m(T)&&p(it),Ot.__version=Q.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function rt(L,T,V){if(T.image.length!==6)return;const it=le(L,T),ot=T.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+V);const Q=i.get(ot);if(ot.version!==Q.__version||it===!0){e.activeTexture(n.TEXTURE0+V);const Ot=xe.getPrimaries(xe.workingColorSpace),mt=T.colorSpace===Jn?null:xe.getPrimaries(T.colorSpace),bt=T.colorSpace===Jn||Ot===mt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,T.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,T.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,bt);const ve=T.isCompressedTexture||T.image[0].isCompressedTexture,at=T.image[0]&&T.image[0].isDataTexture,wt=[];for(let nt=0;nt<6;nt++)!ve&&!at?wt[nt]=x(T.image[nt],!0,s.maxCubemapSize):wt[nt]=at?T.image[nt].image:T.image[nt],wt[nt]=Ae(T,wt[nt]);const Gt=wt[0],Wt=o.convert(T.format,T.colorSpace),Tt=o.convert(T.type),me=b(T.internalFormat,Wt,Tt,T.colorSpace),ne=T.isVideoTexture!==!0,Ne=Q.__version===void 0||it===!0,O=ot.dataReady;let pt=D(T,Gt);Vt(n.TEXTURE_CUBE_MAP,T);let j;if(ve){ne&&Ne&&e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,me,Gt.width,Gt.height);for(let nt=0;nt<6;nt++){j=wt[nt].mipmaps;for(let vt=0;vt<j.length;vt++){const gt=j[vt];T.format!==an?Wt!==null?ne?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,gt.width,gt.height,Wt,gt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,me,gt.width,gt.height,0,gt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ne?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,0,0,gt.width,gt.height,Wt,Tt,gt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt,me,gt.width,gt.height,0,Wt,Tt,gt.data)}}}else{if(j=T.mipmaps,ne&&Ne){j.length>0&&pt++;const nt=kt(wt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,pt,me,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){ne?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,wt[nt].width,wt[nt].height,Wt,Tt,wt[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,me,wt[nt].width,wt[nt].height,0,Wt,Tt,wt[nt].data);for(let vt=0;vt<j.length;vt++){const Zt=j[vt].image[nt].image;ne?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Zt.width,Zt.height,Wt,Tt,Zt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,me,Zt.width,Zt.height,0,Wt,Tt,Zt.data)}}else{ne?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Wt,Tt,wt[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,me,Wt,Tt,wt[nt]);for(let vt=0;vt<j.length;vt++){const gt=j[vt];ne?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,0,0,Wt,Tt,gt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,vt+1,me,Wt,Tt,gt.image[nt])}}}m(T)&&p(n.TEXTURE_CUBE_MAP),Q.__version=ot.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Mt(L,T,V,it,ot,Q){const Ot=o.convert(V.format,V.colorSpace),mt=o.convert(V.type),bt=b(V.internalFormat,Ot,mt,V.colorSpace),ve=i.get(T),at=i.get(V);if(at.__renderTarget=T,!ve.__hasExternalTextures){const wt=Math.max(1,T.width>>Q),Gt=Math.max(1,T.height>>Q);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,Q,bt,wt,Gt,T.depth,0,Ot,mt,null):e.texImage2D(ot,Q,bt,wt,Gt,0,Ot,mt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),fe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,it,ot,at.__webglTexture,0,$t(T)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,it,ot,at.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(L,T,V){if(n.bindRenderbuffer(n.RENDERBUFFER,L),T.depthBuffer){const it=T.depthTexture,ot=it&&it.isDepthTexture?it.type:null,Q=v(T.stencilBuffer,ot),Ot=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,mt=$t(T);fe(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,mt,Q,T.width,T.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,mt,Q,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,Q,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ot,n.RENDERBUFFER,L)}else{const it=T.textures;for(let ot=0;ot<it.length;ot++){const Q=it[ot],Ot=o.convert(Q.format,Q.colorSpace),mt=o.convert(Q.type),bt=b(Q.internalFormat,Ot,mt,Q.colorSpace),ve=$t(T);V&&fe(T)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ve,bt,T.width,T.height):fe(T)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ve,bt,T.width,T.height):n.renderbufferStorage(n.RENDERBUFFER,bt,T.width,T.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Et(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const it=i.get(T.depthTexture);it.__renderTarget=T,(!it.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),K(T.depthTexture,0);const ot=it.__webglTexture,Q=$t(T);if(T.depthTexture.format===io)fe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ot,0);else if(T.depthTexture.format===co)fe(T)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ot,0);else throw new Error("Unknown depthTexture format")}function yt(L){const T=i.get(L),V=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const it=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),it){const ot=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,it.removeEventListener("dispose",ot)};it.addEventListener("dispose",ot),T.__depthDisposeCallback=ot}T.__boundDepthTexture=it}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");Et(T.__webglFramebuffer,L)}else if(V){T.__webglDepthbuffer=[];for(let it=0;it<6;it++)if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer[it]),T.__webglDepthbuffer[it]===void 0)T.__webglDepthbuffer[it]=n.createRenderbuffer(),ft(T.__webglDepthbuffer[it],L,!1);else{const ot=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=T.__webglDepthbuffer[it];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=n.createRenderbuffer(),ft(T.__webglDepthbuffer,L,!1);else{const it=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=T.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,ot),n.framebufferRenderbuffer(n.FRAMEBUFFER,it,n.RENDERBUFFER,ot)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ht(L,T,V){const it=i.get(L);T!==void 0&&Mt(it.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&yt(L)}function pe(L){const T=L.texture,V=i.get(L),it=i.get(T);L.addEventListener("dispose",w);const ot=L.textures,Q=L.isWebGLCubeRenderTarget===!0,Ot=ot.length>1;if(Ot||(it.__webglTexture===void 0&&(it.__webglTexture=n.createTexture()),it.__version=T.version,r.memory.textures++),Q){V.__webglFramebuffer=[];for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer[mt]=[];for(let bt=0;bt<T.mipmaps.length;bt++)V.__webglFramebuffer[mt][bt]=n.createFramebuffer()}else V.__webglFramebuffer[mt]=n.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){V.__webglFramebuffer=[];for(let mt=0;mt<T.mipmaps.length;mt++)V.__webglFramebuffer[mt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Ot)for(let mt=0,bt=ot.length;mt<bt;mt++){const ve=i.get(ot[mt]);ve.__webglTexture===void 0&&(ve.__webglTexture=n.createTexture(),r.memory.textures++)}if(L.samples>0&&fe(L)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let mt=0;mt<ot.length;mt++){const bt=ot[mt];V.__webglColorRenderbuffer[mt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[mt]);const ve=o.convert(bt.format,bt.colorSpace),at=o.convert(bt.type),wt=b(bt.internalFormat,ve,at,bt.colorSpace,L.isXRRenderTarget===!0),Gt=$t(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Gt,wt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+mt,n.RENDERBUFFER,V.__webglColorRenderbuffer[mt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,it.__webglTexture),Vt(n.TEXTURE_CUBE_MAP,T);for(let mt=0;mt<6;mt++)if(T.mipmaps&&T.mipmaps.length>0)for(let bt=0;bt<T.mipmaps.length;bt++)Mt(V.__webglFramebuffer[mt][bt],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,bt);else Mt(V.__webglFramebuffer[mt],L,T,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+mt,0);m(T)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ot){for(let mt=0,bt=ot.length;mt<bt;mt++){const ve=ot[mt],at=i.get(ve);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),Vt(n.TEXTURE_2D,ve),Mt(V.__webglFramebuffer,L,ve,n.COLOR_ATTACHMENT0+mt,n.TEXTURE_2D,0),m(ve)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let mt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(mt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(mt,it.__webglTexture),Vt(mt,T),T.mipmaps&&T.mipmaps.length>0)for(let bt=0;bt<T.mipmaps.length;bt++)Mt(V.__webglFramebuffer[bt],L,T,n.COLOR_ATTACHMENT0,mt,bt);else Mt(V.__webglFramebuffer,L,T,n.COLOR_ATTACHMENT0,mt,0);m(T)&&p(mt),e.unbindTexture()}L.depthBuffer&&yt(L)}function ie(L){const T=L.textures;for(let V=0,it=T.length;V<it;V++){const ot=T[V];if(m(ot)){const Q=M(L),Ot=i.get(ot).__webglTexture;e.bindTexture(Q,Ot),p(Q),e.unbindTexture()}}}const Le=[],k=[];function Di(L){if(L.samples>0){if(fe(L)===!1){const T=L.textures,V=L.width,it=L.height;let ot=n.COLOR_BUFFER_BIT;const Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ot=i.get(L),mt=T.length>1;if(mt)for(let bt=0;bt<T.length;bt++)e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let bt=0;bt<T.length;bt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),mt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ot.__webglColorRenderbuffer[bt]);const ve=i.get(T[bt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ve,0)}n.blitFramebuffer(0,0,V,it,0,0,V,it,ot,n.NEAREST),a===!0&&(Le.length=0,k.length=0,Le.push(n.COLOR_ATTACHMENT0+bt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Le.push(Q),k.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,k)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Le))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),mt)for(let bt=0;bt<T.length;bt++){e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.RENDERBUFFER,Ot.__webglColorRenderbuffer[bt]);const ve=i.get(T[bt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ot.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+bt,n.TEXTURE_2D,ve,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ot.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&a){const T=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[T])}}}function $t(L){return Math.min(s.maxSamples,L.samples)}function fe(L){const T=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Bt(L){const T=r.render.frame;f.get(L)!==T&&(f.set(L,T),L.update())}function Ae(L,T){const V=L.colorSpace,it=L.format,ot=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==go&&V!==Jn&&(xe.getTransfer(V)===Ce?(it!==an||ot!==Fn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),T}function kt(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=H,this.resetTextureUnits=F,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=et,this.setTextureCube=G,this.rebindTextures=Ht,this.setupRenderTarget=pe,this.updateRenderTargetMipmap=ie,this.updateMultisampleRenderTarget=Di,this.setupDepthRenderbuffer=yt,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=fe}function nv(n,t){function e(i,s=Jn){let o;const r=xe.getTransfer(s);if(i===Fn)return n.UNSIGNED_BYTE;if(i===ic)return n.UNSIGNED_SHORT_4_4_4_4;if(i===nc)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Vd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Hd)return n.BYTE;if(i===Gd)return n.SHORT;if(i===Zo)return n.UNSIGNED_SHORT;if(i===ec)return n.INT;if(i===Ts)return n.UNSIGNED_INT;if(i===Pn)return n.FLOAT;if(i===xn)return n.HALF_FLOAT;if(i===Wd)return n.ALPHA;if(i===Xd)return n.RGB;if(i===an)return n.RGBA;if(i===qd)return n.LUMINANCE;if(i===Yd)return n.LUMINANCE_ALPHA;if(i===io)return n.DEPTH_COMPONENT;if(i===co)return n.DEPTH_STENCIL;if(i===Kd)return n.RED;if(i===sc)return n.RED_INTEGER;if(i===jd)return n.RG;if(i===oc)return n.RG_INTEGER;if(i===rc)return n.RGBA_INTEGER;if(i===ta||i===ea||i===ia||i===na)if(r===Ce)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===ta)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===ea)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===ia)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===na)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===ta)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===ea)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===ia)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===na)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===lh||i===hh||i===ch||i===fh)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===lh)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===hh)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===ch)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===fh)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===dh||i===uh||i===ph)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===dh||i===uh)return r===Ce?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===ph)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===mh||i===gh||i===xh||i===vh||i===_h||i===Mh||i===yh||i===bh||i===Sh||i===Eh||i===wh||i===Th||i===Ah||i===Rh)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===mh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===gh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===xh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===vh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===_h)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Mh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===yh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===bh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Sh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Eh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===wh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Th)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Ah)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Rh)return r===Ce?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===sa||i===Ch||i===Lh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===sa)return r===Ce?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Ch)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Lh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===$d||i===Dh||i===Ph||i===Ih)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===sa)return o.COMPRESSED_RED_RGTC1_EXT;if(i===Dh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ph)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Ih)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ho?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class sv extends Hi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class we extends ei{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ov={type:"move"};class Sl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const l=this._targetRay,a=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),p=this._getHandJoint(h,x);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=f.position.distanceTo(c.position),u=.02,g=.005;h.inputState.pinching&&d>u+g?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=u-g&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(ov)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=o!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new we;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const rv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,av=`
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

}`;class lv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Li,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Si({vertexShader:rv,fragmentShader:av,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new _t(new kn(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hv extends xo{constructor(t,e){super();const i=this;let s=null,o=1,r=null,l="local-floor",a=1,h=null,f=null,c=null,d=null,u=null,g=null;const x=new lv,m=e.getContextAttributes();let p=null,M=null;const b=[],v=[],D=new Ft;let E=null;const w=new Hi;w.viewport=new Pe;const C=new Hi;C.viewport=new Pe;const y=[w,C],S=new sv;let P=null,F=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Z){let rt=b[Z];return rt===void 0&&(rt=new Sl,b[Z]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(Z){let rt=b[Z];return rt===void 0&&(rt=new Sl,b[Z]=rt),rt.getGripSpace()},this.getHand=function(Z){let rt=b[Z];return rt===void 0&&(rt=new Sl,b[Z]=rt),rt.getHandSpace()};function H(Z){const rt=v.indexOf(Z.inputSource);if(rt===-1)return;const Mt=b[rt];Mt!==void 0&&(Mt.update(Z.inputSource,Z.frame,h||r),Mt.dispatchEvent({type:Z.type,data:Z.inputSource}))}function Y(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",K);for(let Z=0;Z<b.length;Z++){const rt=v[Z];rt!==null&&(v[Z]=null,b[Z].disconnect(rt))}P=null,F=null,x.reset(),t.setRenderTarget(p),u=null,d=null,c=null,s=null,M=null,le.stop(),i.isPresenting=!1,t.setPixelRatio(E),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Z){o=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Z){l=Z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(Z){h=Z},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Z){if(s=Z,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),E=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Ji(u.framebufferWidth,u.framebufferHeight,{format:an,type:Fn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Mt=null,ft=null;m.depth&&(ft=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?co:io,Mt=m.stencil?ho:Ts);const Et={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:o};c=new XRWebGLBinding(s,e),d=c.createProjectionLayer(Et),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ji(d.textureWidth,d.textureHeight,{format:an,type:Fn,depthTexture:new hu(d.textureWidth,d.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(a),h=null,r=await s.requestReferenceSpace(l),le.setContext(s),le.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function K(Z){for(let rt=0;rt<Z.removed.length;rt++){const Mt=Z.removed[rt],ft=v.indexOf(Mt);ft>=0&&(v[ft]=null,b[ft].disconnect(Mt))}for(let rt=0;rt<Z.added.length;rt++){const Mt=Z.added[rt];let ft=v.indexOf(Mt);if(ft===-1){for(let yt=0;yt<b.length;yt++)if(yt>=v.length){v.push(Mt),ft=yt;break}else if(v[yt]===null){v[yt]=Mt,ft=yt;break}if(ft===-1)break}const Et=b[ft];Et&&Et.connect(Mt)}}const W=new I,et=new I;function G(Z,rt,Mt){W.setFromMatrixPosition(rt.matrixWorld),et.setFromMatrixPosition(Mt.matrixWorld);const ft=W.distanceTo(et),Et=rt.projectionMatrix.elements,yt=Mt.projectionMatrix.elements,Ht=Et[14]/(Et[10]-1),pe=Et[14]/(Et[10]+1),ie=(Et[9]+1)/Et[5],Le=(Et[9]-1)/Et[5],k=(Et[8]-1)/Et[0],Di=(yt[8]+1)/yt[0],$t=Ht*k,fe=Ht*Di,Bt=ft/(-k+Di),Ae=Bt*-k;if(rt.matrixWorld.decompose(Z.position,Z.quaternion,Z.scale),Z.translateX(Ae),Z.translateZ(Bt),Z.matrixWorld.compose(Z.position,Z.quaternion,Z.scale),Z.matrixWorldInverse.copy(Z.matrixWorld).invert(),Et[10]===-1)Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const kt=Ht+Bt,L=pe+Bt,T=$t-Ae,V=fe+(ft-Ae),it=ie*pe/L*kt,ot=Le*pe/L*kt;Z.projectionMatrix.makePerspective(T,V,it,ot,kt,L),Z.projectionMatrixInverse.copy(Z.projectionMatrix).invert()}}function st(Z,rt){rt===null?Z.matrixWorld.copy(Z.matrix):Z.matrixWorld.multiplyMatrices(rt.matrixWorld,Z.matrix),Z.matrixWorldInverse.copy(Z.matrixWorld).invert()}this.updateCamera=function(Z){if(s===null)return;let rt=Z.near,Mt=Z.far;x.texture!==null&&(x.depthNear>0&&(rt=x.depthNear),x.depthFar>0&&(Mt=x.depthFar)),S.near=C.near=w.near=rt,S.far=C.far=w.far=Mt,(P!==S.near||F!==S.far)&&(s.updateRenderState({depthNear:S.near,depthFar:S.far}),P=S.near,F=S.far),w.layers.mask=Z.layers.mask|2,C.layers.mask=Z.layers.mask|4,S.layers.mask=w.layers.mask|C.layers.mask;const ft=Z.parent,Et=S.cameras;st(S,ft);for(let yt=0;yt<Et.length;yt++)st(Et[yt],ft);Et.length===2?G(S,w,C):S.projectionMatrix.copy(w.projectionMatrix),ht(Z,S,ft)};function ht(Z,rt,Mt){Mt===null?Z.matrix.copy(rt.matrixWorld):(Z.matrix.copy(Mt.matrixWorld),Z.matrix.invert(),Z.matrix.multiply(rt.matrixWorld)),Z.matrix.decompose(Z.position,Z.quaternion,Z.scale),Z.updateMatrixWorld(!0),Z.projectionMatrix.copy(rt.projectionMatrix),Z.projectionMatrixInverse.copy(rt.projectionMatrixInverse),Z.isPerspectiveCamera&&(Z.fov=Oh*2*Math.atan(1/Z.projectionMatrix.elements[5]),Z.zoom=1)}this.getCamera=function(){return S},this.getFoveation=function(){if(!(d===null&&u===null))return a},this.setFoveation=function(Z){a=Z,d!==null&&(d.fixedFoveation=Z),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=Z)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(S)};let At=null;function Vt(Z,rt){if(f=rt.getViewerPose(h||r),g=rt,f!==null){const Mt=f.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let ft=!1;Mt.length!==S.cameras.length&&(S.cameras.length=0,ft=!0);for(let yt=0;yt<Mt.length;yt++){const Ht=Mt[yt];let pe=null;if(u!==null)pe=u.getViewport(Ht);else{const Le=c.getViewSubImage(d,Ht);pe=Le.viewport,yt===0&&(t.setRenderTargetTextures(M,Le.colorTexture,d.ignoreDepthValues?void 0:Le.depthStencilTexture),t.setRenderTarget(M))}let ie=y[yt];ie===void 0&&(ie=new Hi,ie.layers.enable(yt),ie.viewport=new Pe,y[yt]=ie),ie.matrix.fromArray(Ht.transform.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale),ie.projectionMatrix.fromArray(Ht.projectionMatrix),ie.projectionMatrixInverse.copy(ie.projectionMatrix).invert(),ie.viewport.set(pe.x,pe.y,pe.width,pe.height),yt===0&&(S.matrix.copy(ie.matrix),S.matrix.decompose(S.position,S.quaternion,S.scale)),ft===!0&&S.cameras.push(ie)}const Et=s.enabledFeatures;if(Et&&Et.includes("depth-sensing")){const yt=c.getDepthInformation(Mt[0]);yt&&yt.isValid&&yt.texture&&x.init(t,yt,s.renderState)}}for(let Mt=0;Mt<b.length;Mt++){const ft=v[Mt],Et=b[Mt];ft!==null&&Et!==void 0&&Et.update(ft,rt,h||r)}At&&At(Z,rt),rt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:rt}),g=null}const le=new lu;le.setAnimationLoop(Vt),this.setAnimationLoop=function(Z){At=Z},this.dispose=function(){}}}const ps=new hn,cv=new Ue;function fv(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,ou(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,b,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?o(m,p):p.isMeshToonMaterial?(o(m,p),c(m,p)):p.isMeshPhongMaterial?(o(m,p),f(m,p)):p.isMeshStandardMaterial?(o(m,p),d(m,p),p.isMeshPhysicalMaterial&&u(m,p,v)):p.isMeshMatcapMaterial?(o(m,p),g(m,p)):p.isMeshDepthMaterial?o(m,p):p.isMeshDistanceMaterial?(o(m,p),x(m,p)):p.isMeshNormalMaterial?o(m,p):p.isLineBasicMaterial?(r(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?a(m,p,M,b):p.isSpriteMaterial?h(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function o(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ci&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ci&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=t.get(p),b=M.envMap,v=M.envMapRotation;b&&(m.envMap.value=b,ps.copy(v),ps.x*=-1,ps.y*=-1,ps.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ps.y*=-1,ps.z*=-1),m.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(ps)),m.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function r(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function a(m,p,M,b){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=b*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function c(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ci&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function x(m,p){const M=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function dv(n,t,e,i){let s={},o={},r=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function a(M,b){const v=b.program;i.uniformBlockBinding(M,v)}function h(M,b){let v=s[M.id];v===void 0&&(g(M),v=f(M),s[M.id]=v,M.addEventListener("dispose",m));const D=b.program;i.updateUBOMapping(M,D);const E=t.render.frame;o[M.id]!==E&&(d(M),o[M.id]=E)}function f(M){const b=c();M.__bindingPointIndex=b;const v=n.createBuffer(),D=M.__size,E=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,D,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,b,v),v}function c(){for(let M=0;M<l;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const b=s[M.id],v=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,b);for(let E=0,w=v.length;E<w;E++){const C=Array.isArray(v[E])?v[E]:[v[E]];for(let y=0,S=C.length;y<S;y++){const P=C[y];if(u(P,E,y,D)===!0){const F=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let Y=0;for(let K=0;K<H.length;K++){const W=H[K],et=x(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,F+Y,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,Y),Y+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,F,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(M,b,v,D){const E=M.value,w=b+"_"+v;if(D[w]===void 0)return typeof E=="number"||typeof E=="boolean"?D[w]=E:D[w]=E.clone(),!0;{const C=D[w];if(typeof E=="number"||typeof E=="boolean"){if(C!==E)return D[w]=E,!0}else if(C.equals(E)===!1)return C.copy(E),!0}return!1}function g(M){const b=M.uniforms;let v=0;const D=16;for(let w=0,C=b.length;w<C;w++){const y=Array.isArray(b[w])?b[w]:[b[w]];for(let S=0,P=y.length;S<P;S++){const F=y[S],H=Array.isArray(F.value)?F.value:[F.value];for(let Y=0,K=H.length;Y<K;Y++){const W=H[Y],et=x(W),G=v%D,st=G%et.boundary,ht=G+st;v+=st,ht!==0&&D-ht<et.storage&&(v+=D-ht),F.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=v,v+=et.storage}}}const E=v%D;return E>0&&(v+=D-E),M.__size=v,M.__cache={},this}function x(M){const b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=48,b.storage=48):M.isMatrix4?(b.boundary=64,b.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),b}function m(M){const b=M.target;b.removeEventListener("dispose",m);const v=r.indexOf(b.__bindingPointIndex);r.splice(v,1),n.deleteBuffer(s[b.id]),delete s[b.id],delete o[b.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:a,update:h,dispose:p}}class uv{constructor(t={}){const{canvas:e=ip(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,p=null;const M=[],b=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=oi,this.toneMapping=Un,this.toneMappingExposure=1;const v=this;let D=!1,E=0,w=0,C=null,y=-1,S=null;const P=new Pe,F=new Pe;let H=null;const Y=new St(0);let K=0,W=e.width,et=e.height,G=1,st=null,ht=null;const At=new Pe(0,0,W,et),Vt=new Pe(0,0,W,et);let le=!1;const Z=new hc;let rt=!1,Mt=!1;const ft=new Ue,Et=new Ue,yt=new I,Ht=new Pe,pe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ie=!1;function Le(){return C===null?G:1}let k=i;function Di(R,U){return e.getContext(R,U)}try{const R={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qh}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",vt,!1),e.addEventListener("webglcontextcreationerror",gt,!1),k===null){const U="webgl2";if(k=Di(U,R),k===null)throw Di(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let $t,fe,Bt,Ae,kt,L,T,V,it,ot,Q,Ot,mt,bt,ve,at,wt,Gt,Wt,Tt,me,ne,Ne,O;function pt(){$t=new vg(k),$t.init(),ne=new nv(k,$t),fe=new dg(k,$t,t,ne),Bt=new tv(k,$t),fe.reverseDepthBuffer&&d&&Bt.buffers.depth.setReversed(!0),Ae=new yg(k),kt=new Bx,L=new iv(k,$t,Bt,kt,fe,ne,Ae),T=new pg(v),V=new xg(v),it=new Rp(k),Ne=new cg(k,it),ot=new _g(k,it,Ae,Ne),Q=new Sg(k,ot,it,Ae),Wt=new bg(k,fe,L),at=new ug(kt),Ot=new kx(v,T,V,$t,fe,Ne,at),mt=new fv(v,kt),bt=new Hx,ve=new Yx($t),Gt=new hg(v,T,V,Bt,Q,u,a),wt=new Jx(v,Q,fe),O=new dv(k,Ae,fe,Bt),Tt=new fg(k,$t,Ae),me=new Mg(k,$t,Ae),Ae.programs=Ot.programs,v.capabilities=fe,v.extensions=$t,v.properties=kt,v.renderLists=bt,v.shadowMap=wt,v.state=Bt,v.info=Ae}pt();const j=new hv(v,k);this.xr=j,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=$t.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=$t.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(R){R!==void 0&&(G=R,this.setSize(W,et,!1))},this.getSize=function(R){return R.set(W,et)},this.setSize=function(R,U,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=R,et=U,e.width=Math.floor(R*G),e.height=Math.floor(U*G),X===!0&&(e.style.width=R+"px",e.style.height=U+"px"),this.setViewport(0,0,R,U)},this.getDrawingBufferSize=function(R){return R.set(W*G,et*G).floor()},this.setDrawingBufferSize=function(R,U,X){W=R,et=U,G=X,e.width=Math.floor(R*X),e.height=Math.floor(U*X),this.setViewport(0,0,R,U)},this.getCurrentViewport=function(R){return R.copy(P)},this.getViewport=function(R){return R.copy(At)},this.setViewport=function(R,U,X,q){R.isVector4?At.set(R.x,R.y,R.z,R.w):At.set(R,U,X,q),Bt.viewport(P.copy(At).multiplyScalar(G).round())},this.getScissor=function(R){return R.copy(Vt)},this.setScissor=function(R,U,X,q){R.isVector4?Vt.set(R.x,R.y,R.z,R.w):Vt.set(R,U,X,q),Bt.scissor(F.copy(Vt).multiplyScalar(G).round())},this.getScissorTest=function(){return le},this.setScissorTest=function(R){Bt.setScissorTest(le=R)},this.setOpaqueSort=function(R){st=R},this.setTransparentSort=function(R){ht=R},this.getClearColor=function(R){return R.copy(Gt.getClearColor())},this.setClearColor=function(){Gt.setClearColor.apply(Gt,arguments)},this.getClearAlpha=function(){return Gt.getClearAlpha()},this.setClearAlpha=function(){Gt.setClearAlpha.apply(Gt,arguments)},this.clear=function(R=!0,U=!0,X=!0){let q=0;if(R){let z=!1;if(C!==null){const lt=C.texture.format;z=lt===rc||lt===oc||lt===sc}if(z){const lt=C.texture.type,xt=lt===Fn||lt===Ts||lt===Zo||lt===ho||lt===ic||lt===nc,Dt=Gt.getClearColor(),Pt=Gt.getClearAlpha(),qt=Dt.r,Jt=Dt.g,It=Dt.b;xt?(g[0]=qt,g[1]=Jt,g[2]=It,g[3]=Pt,k.clearBufferuiv(k.COLOR,0,g)):(x[0]=qt,x[1]=Jt,x[2]=It,x[3]=Pt,k.clearBufferiv(k.COLOR,0,x))}else q|=k.COLOR_BUFFER_BIT}U&&(q|=k.DEPTH_BUFFER_BIT),X&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",vt,!1),e.removeEventListener("webglcontextcreationerror",gt,!1),bt.dispose(),ve.dispose(),kt.dispose(),T.dispose(),V.dispose(),Q.dispose(),Ne.dispose(),O.dispose(),Ot.dispose(),j.dispose(),j.removeEventListener("sessionstart",Uc),j.removeEventListener("sessionend",zc),ls.stop()};function nt(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function vt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const R=Ae.autoReset,U=wt.enabled,X=wt.autoUpdate,q=wt.needsUpdate,z=wt.type;pt(),Ae.autoReset=R,wt.enabled=U,wt.autoUpdate=X,wt.needsUpdate=q,wt.type=z}function gt(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Zt(R){const U=R.target;U.removeEventListener("dispose",Zt),Ye(U)}function Ye(R){vi(R),kt.remove(R)}function vi(R){const U=kt.get(R).programs;U!==void 0&&(U.forEach(function(X){Ot.releaseProgram(X)}),R.isShaderMaterial&&Ot.releaseShaderCache(R))}this.renderBufferDirect=function(R,U,X,q,z,lt){U===null&&(U=pe);const xt=z.isMesh&&z.matrixWorld.determinant()<0,Dt=v0(R,U,X,q,z);Bt.setMaterial(q,xt);let Pt=X.index,qt=1;if(q.wireframe===!0){if(Pt=ot.getWireframeAttribute(X),Pt===void 0)return;qt=2}const Jt=X.drawRange,It=X.attributes.position;let Me=Jt.start*qt,Oe=(Jt.start+Jt.count)*qt;lt!==null&&(Me=Math.max(Me,lt.start*qt),Oe=Math.min(Oe,(lt.start+lt.count)*qt)),Pt!==null?(Me=Math.max(Me,0),Oe=Math.min(Oe,Pt.count)):It!=null&&(Me=Math.max(Me,0),Oe=Math.min(Oe,It.count));const ke=Oe-Me;if(ke<0||ke===1/0)return;Ne.setup(z,q,Dt,X,Pt);let Pi,be=Tt;if(Pt!==null&&(Pi=it.get(Pt),be=me,be.setIndex(Pi)),z.isMesh)q.wireframe===!0?(Bt.setLineWidth(q.wireframeLinewidth*Le()),be.setMode(k.LINES)):be.setMode(k.TRIANGLES);else if(z.isLine){let Ut=q.linewidth;Ut===void 0&&(Ut=1),Bt.setLineWidth(Ut*Le()),z.isLineSegments?be.setMode(k.LINES):z.isLineLoop?be.setMode(k.LINE_LOOP):be.setMode(k.LINE_STRIP)}else z.isPoints?be.setMode(k.POINTS):z.isSprite&&be.setMode(k.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)be.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if($t.get("WEBGL_multi_draw"))be.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Ut=z._multiDrawStarts,bn=z._multiDrawCounts,Se=z._multiDrawCount,tn=Pt?it.get(Pt).bytesPerElement:1,Ds=kt.get(q).currentProgram.getUniforms();for(let zi=0;zi<Se;zi++)Ds.setValue(k,"_gl_DrawID",zi),be.render(Ut[zi]/tn,bn[zi])}else if(z.isInstancedMesh)be.renderInstances(Me,ke,z.count);else if(X.isInstancedBufferGeometry){const Ut=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,bn=Math.min(X.instanceCount,Ut);be.renderInstances(Me,ke,bn)}else be.render(Me,ke)};function Re(R,U,X){R.transparent===!0&&R.side===Ri&&R.forceSinglePass===!1?(R.side=Ci,R.needsUpdate=!0,ur(R,U,X),R.side=as,R.needsUpdate=!0,ur(R,U,X),R.side=Ri):ur(R,U,X)}this.compile=function(R,U,X=null){X===null&&(X=R),p=ve.get(X),p.init(U),b.push(p),X.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),R!==X&&R.traverseVisible(function(z){z.isLight&&z.layers.test(U.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const q=new Set;return R.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const lt=z.material;if(lt)if(Array.isArray(lt))for(let xt=0;xt<lt.length;xt++){const Dt=lt[xt];Re(Dt,X,z),q.add(Dt)}else Re(lt,X,z),q.add(lt)}),b.pop(),p=null,q},this.compileAsync=function(R,U,X=null){const q=this.compile(R,U,X);return new Promise(z=>{function lt(){if(q.forEach(function(xt){kt.get(xt).currentProgram.isReady()&&q.delete(xt)}),q.size===0){z(R);return}setTimeout(lt,10)}$t.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let Qi=null;function yn(R){Qi&&Qi(R)}function Uc(){ls.stop()}function zc(){ls.start()}const ls=new lu;ls.setAnimationLoop(yn),typeof self<"u"&&ls.setContext(self),this.setAnimationLoop=function(R){Qi=R,j.setAnimationLoop(R),R===null?ls.stop():ls.start()},j.addEventListener("sessionstart",Uc),j.addEventListener("sessionend",zc),this.render=function(R,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(U),U=j.getCamera()),R.isScene===!0&&R.onBeforeRender(v,R,U,C),p=ve.get(R,b.length),p.init(U),b.push(p),Et.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),Z.setFromProjectionMatrix(Et),Mt=this.localClippingEnabled,rt=at.init(this.clippingPlanes,Mt),m=bt.get(R,M.length),m.init(),M.push(m),j.enabled===!0&&j.isPresenting===!0){const lt=v.xr.getDepthSensingMesh();lt!==null&&Ka(lt,U,-1/0,v.sortObjects)}Ka(R,U,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(st,ht),ie=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,ie&&Gt.addToRenderList(m,R),this.info.render.frame++,rt===!0&&at.beginShadows();const X=p.state.shadowsArray;wt.render(X,R,U),rt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,z=m.transmissive;if(p.setupLights(),U.isArrayCamera){const lt=U.cameras;if(z.length>0)for(let xt=0,Dt=lt.length;xt<Dt;xt++){const Pt=lt[xt];Bc(q,z,R,Pt)}ie&&Gt.render(R);for(let xt=0,Dt=lt.length;xt<Dt;xt++){const Pt=lt[xt];kc(m,R,Pt,Pt.viewport)}}else z.length>0&&Bc(q,z,R,U),ie&&Gt.render(R),kc(m,R,U);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),R.isScene===!0&&R.onAfterRender(v,R,U),Ne.resetDefaultState(),y=-1,S=null,b.pop(),b.length>0?(p=b[b.length-1],rt===!0&&at.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function Ka(R,U,X,q){if(R.visible===!1)return;if(R.layers.test(U.layers)){if(R.isGroup)X=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(U);else if(R.isLight)p.pushLight(R),R.castShadow&&p.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||Z.intersectsSprite(R)){q&&Ht.setFromMatrixPosition(R.matrixWorld).applyMatrix4(Et);const xt=Q.update(R),Dt=R.material;Dt.visible&&m.push(R,xt,Dt,X,Ht.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||Z.intersectsObject(R))){const xt=Q.update(R),Dt=R.material;if(q&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),Ht.copy(R.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Ht.copy(xt.boundingSphere.center)),Ht.applyMatrix4(R.matrixWorld).applyMatrix4(Et)),Array.isArray(Dt)){const Pt=xt.groups;for(let qt=0,Jt=Pt.length;qt<Jt;qt++){const It=Pt[qt],Me=Dt[It.materialIndex];Me&&Me.visible&&m.push(R,xt,Me,X,Ht.z,It)}}else Dt.visible&&m.push(R,xt,Dt,X,Ht.z,null)}}const lt=R.children;for(let xt=0,Dt=lt.length;xt<Dt;xt++)Ka(lt[xt],U,X,q)}function kc(R,U,X,q){const z=R.opaque,lt=R.transmissive,xt=R.transparent;p.setupLightsView(X),rt===!0&&at.setGlobalState(v.clippingPlanes,X),q&&Bt.viewport(P.copy(q)),z.length>0&&dr(z,U,X),lt.length>0&&dr(lt,U,X),xt.length>0&&dr(xt,U,X),Bt.buffers.depth.setTest(!0),Bt.buffers.depth.setMask(!0),Bt.buffers.color.setMask(!0),Bt.setPolygonOffset(!1)}function Bc(R,U,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new Ji(1,1,{generateMipmaps:!0,type:$t.has("EXT_color_buffer_half_float")||$t.has("EXT_color_buffer_float")?xn:Fn,minFilter:Dn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:xe.workingColorSpace}));const lt=p.state.transmissionRenderTarget[q.id],xt=q.viewport||P;lt.setSize(xt.z,xt.w);const Dt=v.getRenderTarget();v.setRenderTarget(lt),v.getClearColor(Y),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),ie&&Gt.render(X);const Pt=v.toneMapping;v.toneMapping=Un;const qt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),rt===!0&&at.setGlobalState(v.clippingPlanes,q),dr(R,X,q),L.updateMultisampleRenderTarget(lt),L.updateRenderTargetMipmap(lt),$t.has("WEBGL_multisampled_render_to_texture")===!1){let Jt=!1;for(let It=0,Me=U.length;It<Me;It++){const Oe=U[It],ke=Oe.object,Pi=Oe.geometry,be=Oe.material,Ut=Oe.group;if(be.side===Ri&&ke.layers.test(q.layers)){const bn=be.side;be.side=Ci,be.needsUpdate=!0,Fc(ke,X,q,Pi,be,Ut),be.side=bn,be.needsUpdate=!0,Jt=!0}}Jt===!0&&(L.updateMultisampleRenderTarget(lt),L.updateRenderTargetMipmap(lt))}v.setRenderTarget(Dt),v.setClearColor(Y,K),qt!==void 0&&(q.viewport=qt),v.toneMapping=Pt}function dr(R,U,X){const q=U.isScene===!0?U.overrideMaterial:null;for(let z=0,lt=R.length;z<lt;z++){const xt=R[z],Dt=xt.object,Pt=xt.geometry,qt=q===null?xt.material:q,Jt=xt.group;Dt.layers.test(X.layers)&&Fc(Dt,U,X,Pt,qt,Jt)}}function Fc(R,U,X,q,z,lt){R.onBeforeRender(v,U,X,q,z,lt),R.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),z.onBeforeRender(v,U,X,q,R,lt),z.transparent===!0&&z.side===Ri&&z.forceSinglePass===!1?(z.side=Ci,z.needsUpdate=!0,v.renderBufferDirect(X,U,q,z,R,lt),z.side=as,z.needsUpdate=!0,v.renderBufferDirect(X,U,q,z,R,lt),z.side=Ri):v.renderBufferDirect(X,U,q,z,R,lt),R.onAfterRender(v,U,X,q,z,lt)}function ur(R,U,X){U.isScene!==!0&&(U=pe);const q=kt.get(R),z=p.state.lights,lt=p.state.shadowsArray,xt=z.state.version,Dt=Ot.getParameters(R,z.state,lt,U,X),Pt=Ot.getProgramCacheKey(Dt);let qt=q.programs;q.environment=R.isMeshStandardMaterial?U.environment:null,q.fog=U.fog,q.envMap=(R.isMeshStandardMaterial?V:T).get(R.envMap||q.environment),q.envMapRotation=q.environment!==null&&R.envMap===null?U.environmentRotation:R.envMapRotation,qt===void 0&&(R.addEventListener("dispose",Zt),qt=new Map,q.programs=qt);let Jt=qt.get(Pt);if(Jt!==void 0){if(q.currentProgram===Jt&&q.lightsStateVersion===xt)return Gc(R,Dt),Jt}else Dt.uniforms=Ot.getUniforms(R),R.onBeforeCompile(Dt,v),Jt=Ot.acquireProgram(Dt,Pt),qt.set(Pt,Jt),q.uniforms=Dt.uniforms;const It=q.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(It.clippingPlanes=at.uniform),Gc(R,Dt),q.needsLights=M0(R),q.lightsStateVersion=xt,q.needsLights&&(It.ambientLightColor.value=z.state.ambient,It.lightProbe.value=z.state.probe,It.directionalLights.value=z.state.directional,It.directionalLightShadows.value=z.state.directionalShadow,It.spotLights.value=z.state.spot,It.spotLightShadows.value=z.state.spotShadow,It.rectAreaLights.value=z.state.rectArea,It.ltc_1.value=z.state.rectAreaLTC1,It.ltc_2.value=z.state.rectAreaLTC2,It.pointLights.value=z.state.point,It.pointLightShadows.value=z.state.pointShadow,It.hemisphereLights.value=z.state.hemi,It.directionalShadowMap.value=z.state.directionalShadowMap,It.directionalShadowMatrix.value=z.state.directionalShadowMatrix,It.spotShadowMap.value=z.state.spotShadowMap,It.spotLightMatrix.value=z.state.spotLightMatrix,It.spotLightMap.value=z.state.spotLightMap,It.pointShadowMap.value=z.state.pointShadowMap,It.pointShadowMatrix.value=z.state.pointShadowMatrix),q.currentProgram=Jt,q.uniformsList=null,Jt}function Hc(R){if(R.uniformsList===null){const U=R.currentProgram.getUniforms();R.uniformsList=ra.seqWithValue(U.seq,R.uniforms)}return R.uniformsList}function Gc(R,U){const X=kt.get(R);X.outputColorSpace=U.outputColorSpace,X.batching=U.batching,X.batchingColor=U.batchingColor,X.instancing=U.instancing,X.instancingColor=U.instancingColor,X.instancingMorph=U.instancingMorph,X.skinning=U.skinning,X.morphTargets=U.morphTargets,X.morphNormals=U.morphNormals,X.morphColors=U.morphColors,X.morphTargetsCount=U.morphTargetsCount,X.numClippingPlanes=U.numClippingPlanes,X.numIntersection=U.numClipIntersection,X.vertexAlphas=U.vertexAlphas,X.vertexTangents=U.vertexTangents,X.toneMapping=U.toneMapping}function v0(R,U,X,q,z){U.isScene!==!0&&(U=pe),L.resetTextureUnits();const lt=U.fog,xt=q.isMeshStandardMaterial?U.environment:null,Dt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:go,Pt=(q.isMeshStandardMaterial?V:T).get(q.envMap||xt),qt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Jt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),It=!!X.morphAttributes.position,Me=!!X.morphAttributes.normal,Oe=!!X.morphAttributes.color;let ke=Un;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(ke=v.toneMapping);const Pi=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,be=Pi!==void 0?Pi.length:0,Ut=kt.get(q),bn=p.state.lights;if(rt===!0&&(Mt===!0||R!==S)){const Xi=R===S&&q.id===y;at.setState(q,R,Xi)}let Se=!1;q.version===Ut.__version?(Ut.needsLights&&Ut.lightsStateVersion!==bn.state.version||Ut.outputColorSpace!==Dt||z.isBatchedMesh&&Ut.batching===!1||!z.isBatchedMesh&&Ut.batching===!0||z.isBatchedMesh&&Ut.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Ut.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Ut.instancing===!1||!z.isInstancedMesh&&Ut.instancing===!0||z.isSkinnedMesh&&Ut.skinning===!1||!z.isSkinnedMesh&&Ut.skinning===!0||z.isInstancedMesh&&Ut.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ut.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ut.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ut.instancingMorph===!1&&z.morphTexture!==null||Ut.envMap!==Pt||q.fog===!0&&Ut.fog!==lt||Ut.numClippingPlanes!==void 0&&(Ut.numClippingPlanes!==at.numPlanes||Ut.numIntersection!==at.numIntersection)||Ut.vertexAlphas!==qt||Ut.vertexTangents!==Jt||Ut.morphTargets!==It||Ut.morphNormals!==Me||Ut.morphColors!==Oe||Ut.toneMapping!==ke||Ut.morphTargetsCount!==be)&&(Se=!0):(Se=!0,Ut.__version=q.version);let tn=Ut.currentProgram;Se===!0&&(tn=ur(q,U,z));let Ds=!1,zi=!1,bo=!1;const Be=tn.getUniforms(),cn=Ut.uniforms;if(Bt.useProgram(tn.program)&&(Ds=!0,zi=!0,bo=!0),q.id!==y&&(y=q.id,zi=!0),Ds||S!==R){Bt.buffers.depth.getReversed()?(ft.copy(R.projectionMatrix),sp(ft),op(ft),Be.setValue(k,"projectionMatrix",ft)):Be.setValue(k,"projectionMatrix",R.projectionMatrix),Be.setValue(k,"viewMatrix",R.matrixWorldInverse);const Vn=Be.map.cameraPosition;Vn!==void 0&&Vn.setValue(k,yt.setFromMatrixPosition(R.matrixWorld)),fe.logarithmicDepthBuffer&&Be.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&Be.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),S!==R&&(S=R,zi=!0,bo=!0)}if(z.isSkinnedMesh){Be.setOptional(k,z,"bindMatrix"),Be.setOptional(k,z,"bindMatrixInverse");const Xi=z.skeleton;Xi&&(Xi.boneTexture===null&&Xi.computeBoneTexture(),Be.setValue(k,"boneTexture",Xi.boneTexture,L))}z.isBatchedMesh&&(Be.setOptional(k,z,"batchingTexture"),Be.setValue(k,"batchingTexture",z._matricesTexture,L),Be.setOptional(k,z,"batchingIdTexture"),Be.setValue(k,"batchingIdTexture",z._indirectTexture,L),Be.setOptional(k,z,"batchingColorTexture"),z._colorsTexture!==null&&Be.setValue(k,"batchingColorTexture",z._colorsTexture,L));const So=X.morphAttributes;if((So.position!==void 0||So.normal!==void 0||So.color!==void 0)&&Wt.update(z,X,tn),(zi||Ut.receiveShadow!==z.receiveShadow)&&(Ut.receiveShadow=z.receiveShadow,Be.setValue(k,"receiveShadow",z.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(cn.envMap.value=Pt,cn.flipEnvMap.value=Pt.isCubeTexture&&Pt.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&U.environment!==null&&(cn.envMapIntensity.value=U.environmentIntensity),zi&&(Be.setValue(k,"toneMappingExposure",v.toneMappingExposure),Ut.needsLights&&_0(cn,bo),lt&&q.fog===!0&&mt.refreshFogUniforms(cn,lt),mt.refreshMaterialUniforms(cn,q,G,et,p.state.transmissionRenderTarget[R.id]),ra.upload(k,Hc(Ut),cn,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ra.upload(k,Hc(Ut),cn,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&Be.setValue(k,"center",z.center),Be.setValue(k,"modelViewMatrix",z.modelViewMatrix),Be.setValue(k,"normalMatrix",z.normalMatrix),Be.setValue(k,"modelMatrix",z.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Xi=q.uniformsGroups;for(let Vn=0,Wn=Xi.length;Vn<Wn;Vn++){const Vc=Xi[Vn];O.update(Vc,tn),O.bind(Vc,tn)}}return tn}function _0(R,U){R.ambientLightColor.needsUpdate=U,R.lightProbe.needsUpdate=U,R.directionalLights.needsUpdate=U,R.directionalLightShadows.needsUpdate=U,R.pointLights.needsUpdate=U,R.pointLightShadows.needsUpdate=U,R.spotLights.needsUpdate=U,R.spotLightShadows.needsUpdate=U,R.rectAreaLights.needsUpdate=U,R.hemisphereLights.needsUpdate=U}function M0(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(R,U,X){kt.get(R.texture).__webglTexture=U,kt.get(R.depthTexture).__webglTexture=X;const q=kt.get(R);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||$t.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(R,U){const X=kt.get(R);X.__webglFramebuffer=U,X.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(R,U=0,X=0){C=R,E=U,w=X;let q=!0,z=null,lt=!1,xt=!1;if(R){const Pt=kt.get(R);if(Pt.__useDefaultFramebuffer!==void 0)Bt.bindFramebuffer(k.FRAMEBUFFER,null),q=!1;else if(Pt.__webglFramebuffer===void 0)L.setupRenderTarget(R);else if(Pt.__hasExternalTextures)L.rebindTextures(R,kt.get(R.texture).__webglTexture,kt.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const It=R.depthTexture;if(Pt.__boundDepthTexture!==It){if(It!==null&&kt.has(It)&&(R.width!==It.image.width||R.height!==It.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(R)}}const qt=R.texture;(qt.isData3DTexture||qt.isDataArrayTexture||qt.isCompressedArrayTexture)&&(xt=!0);const Jt=kt.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(Jt[U])?z=Jt[U][X]:z=Jt[U],lt=!0):R.samples>0&&L.useMultisampledRTT(R)===!1?z=kt.get(R).__webglMultisampledFramebuffer:Array.isArray(Jt)?z=Jt[X]:z=Jt,P.copy(R.viewport),F.copy(R.scissor),H=R.scissorTest}else P.copy(At).multiplyScalar(G).floor(),F.copy(Vt).multiplyScalar(G).floor(),H=le;if(Bt.bindFramebuffer(k.FRAMEBUFFER,z)&&q&&Bt.drawBuffers(R,z),Bt.viewport(P),Bt.scissor(F),Bt.setScissorTest(H),lt){const Pt=kt.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+U,Pt.__webglTexture,X)}else if(xt){const Pt=kt.get(R.texture),qt=U||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Pt.__webglTexture,X||0,qt)}y=-1},this.readRenderTargetPixels=function(R,U,X,q,z,lt,xt){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Dt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xt!==void 0&&(Dt=Dt[xt]),Dt){Bt.bindFramebuffer(k.FRAMEBUFFER,Dt);try{const Pt=R.texture,qt=Pt.format,Jt=Pt.type;if(!fe.textureFormatReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!fe.textureTypeReadable(Jt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=R.width-q&&X>=0&&X<=R.height-z&&k.readPixels(U,X,q,z,ne.convert(qt),ne.convert(Jt),lt)}finally{const Pt=C!==null?kt.get(C).__webglFramebuffer:null;Bt.bindFramebuffer(k.FRAMEBUFFER,Pt)}}},this.readRenderTargetPixelsAsync=async function(R,U,X,q,z,lt,xt){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Dt=kt.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&xt!==void 0&&(Dt=Dt[xt]),Dt){const Pt=R.texture,qt=Pt.format,Jt=Pt.type;if(!fe.textureFormatReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!fe.textureTypeReadable(Jt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=R.width-q&&X>=0&&X<=R.height-z){Bt.bindFramebuffer(k.FRAMEBUFFER,Dt);const It=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,It),k.bufferData(k.PIXEL_PACK_BUFFER,lt.byteLength,k.STREAM_READ),k.readPixels(U,X,q,z,ne.convert(qt),ne.convert(Jt),0);const Me=C!==null?kt.get(C).__webglFramebuffer:null;Bt.bindFramebuffer(k.FRAMEBUFFER,Me);const Oe=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await np(k,Oe,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,It),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,lt),k.deleteBuffer(It),k.deleteSync(Oe),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(R,U=null,X=0){R.isTexture!==!0&&(ko("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,R=arguments[1]);const q=Math.pow(2,-X),z=Math.floor(R.image.width*q),lt=Math.floor(R.image.height*q),xt=U!==null?U.x:0,Dt=U!==null?U.y:0;L.setTexture2D(R,0),k.copyTexSubImage2D(k.TEXTURE_2D,X,0,0,xt,Dt,z,lt),Bt.unbindTexture()},this.copyTextureToTexture=function(R,U,X=null,q=null,z=0){R.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,R=arguments[1],U=arguments[2],z=arguments[3]||0,X=null);let lt,xt,Dt,Pt,qt,Jt,It,Me,Oe;const ke=R.isCompressedTexture?R.mipmaps[z]:R.image;X!==null?(lt=X.max.x-X.min.x,xt=X.max.y-X.min.y,Dt=X.isBox3?X.max.z-X.min.z:1,Pt=X.min.x,qt=X.min.y,Jt=X.isBox3?X.min.z:0):(lt=ke.width,xt=ke.height,Dt=ke.depth||1,Pt=0,qt=0,Jt=0),q!==null?(It=q.x,Me=q.y,Oe=q.z):(It=0,Me=0,Oe=0);const Pi=ne.convert(U.format),be=ne.convert(U.type);let Ut;U.isData3DTexture?(L.setTexture3D(U,0),Ut=k.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(L.setTexture2DArray(U,0),Ut=k.TEXTURE_2D_ARRAY):(L.setTexture2D(U,0),Ut=k.TEXTURE_2D),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,U.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,U.unpackAlignment);const bn=k.getParameter(k.UNPACK_ROW_LENGTH),Se=k.getParameter(k.UNPACK_IMAGE_HEIGHT),tn=k.getParameter(k.UNPACK_SKIP_PIXELS),Ds=k.getParameter(k.UNPACK_SKIP_ROWS),zi=k.getParameter(k.UNPACK_SKIP_IMAGES);k.pixelStorei(k.UNPACK_ROW_LENGTH,ke.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ke.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,Pt),k.pixelStorei(k.UNPACK_SKIP_ROWS,qt),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Jt);const bo=R.isDataArrayTexture||R.isData3DTexture,Be=U.isDataArrayTexture||U.isData3DTexture;if(R.isRenderTargetTexture||R.isDepthTexture){const cn=kt.get(R),So=kt.get(U),Xi=kt.get(cn.__renderTarget),Vn=kt.get(So.__renderTarget);Bt.bindFramebuffer(k.READ_FRAMEBUFFER,Xi.__webglFramebuffer),Bt.bindFramebuffer(k.DRAW_FRAMEBUFFER,Vn.__webglFramebuffer);for(let Wn=0;Wn<Dt;Wn++)bo&&k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,kt.get(R).__webglTexture,z,Jt+Wn),R.isDepthTexture?(Be&&k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,kt.get(U).__webglTexture,z,Oe+Wn),k.blitFramebuffer(Pt,qt,lt,xt,It,Me,lt,xt,k.DEPTH_BUFFER_BIT,k.NEAREST)):Be?k.copyTexSubImage3D(Ut,z,It,Me,Oe+Wn,Pt,qt,lt,xt):k.copyTexSubImage2D(Ut,z,It,Me,Oe+Wn,Pt,qt,lt,xt);Bt.bindFramebuffer(k.READ_FRAMEBUFFER,null),Bt.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else Be?R.isDataTexture||R.isData3DTexture?k.texSubImage3D(Ut,z,It,Me,Oe,lt,xt,Dt,Pi,be,ke.data):U.isCompressedArrayTexture?k.compressedTexSubImage3D(Ut,z,It,Me,Oe,lt,xt,Dt,Pi,ke.data):k.texSubImage3D(Ut,z,It,Me,Oe,lt,xt,Dt,Pi,be,ke):R.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,z,It,Me,lt,xt,Pi,be,ke.data):R.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,z,It,Me,ke.width,ke.height,Pi,ke.data):k.texSubImage2D(k.TEXTURE_2D,z,It,Me,lt,xt,Pi,be,ke);k.pixelStorei(k.UNPACK_ROW_LENGTH,bn),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Se),k.pixelStorei(k.UNPACK_SKIP_PIXELS,tn),k.pixelStorei(k.UNPACK_SKIP_ROWS,Ds),k.pixelStorei(k.UNPACK_SKIP_IMAGES,zi),z===0&&U.generateMipmaps&&k.generateMipmap(Ut),Bt.unbindTexture()},this.copyTextureToTexture3D=function(R,U,X=null,q=null,z=0){return R.isTexture!==!0&&(ko("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,R=arguments[2],U=arguments[3],z=arguments[4]||0),ko('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(R,U,X,q,z)},this.initRenderTarget=function(R){kt.get(R).__webglFramebuffer===void 0&&L.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?L.setTextureCube(R,0):R.isData3DTexture?L.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?L.setTexture2DArray(R,0):L.setTexture2D(R,0),Bt.unbindTexture()},this.resetState=function(){E=0,w=0,C=null,Bt.reset(),Ne.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return In}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=xe._getDrawingBufferColorSpace(t),e.unpackColorSpace=xe._getUnpackColorSpace()}}class dc{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new St(t),this.near=e,this.far=i}clone(){return new dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class pv extends ei{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new hn,this.environmentIntensity=1,this.environmentRotation=new hn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class mv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Nh,this.updateRanges=[],this.version=0,this.uuid=es()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=es()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=es()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const wi=new I;class va{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)wi.fromBufferAttribute(this,e),wi.applyMatrix4(t),this.setXYZ(e,wi.x,wi.y,wi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)wi.fromBufferAttribute(this,e),wi.applyNormalMatrix(t),this.setXYZ(e,wi.x,wi.y,wi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)wi.fromBufferAttribute(this,e),wi.transformDirection(t),this.setXYZ(e,wi.x,wi.y,wi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=pn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=De(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=De(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=pn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=pn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=pn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=pn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),i=De(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=De(e,this.array),i=De(i,this.array),s=De(s,this.array),o=De(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ei(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new va(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ga extends Gn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let qs;const Ro=new I,Ys=new I,Ks=new I,js=new Ft,Co=new Ft,pu=new Ue,Or=new I,Lo=new I,Ur=new I,Hf=new Ft,El=new Ft,Gf=new Ft;class uc extends ei{constructor(t=new Ga){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new ii;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new mv(e,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new va(i,3,0,!1)),qs.setAttribute("uv",new va(i,2,3,!1))}this.geometry=qs,this.material=t,this.center=new Ft(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),pu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ks.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-Ks.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const r=this.center;zr(Or.set(-.5,-.5,0),Ks,r,Ys,s,o),zr(Lo.set(.5,-.5,0),Ks,r,Ys,s,o),zr(Ur.set(.5,.5,0),Ks,r,Ys,s,o),Hf.set(0,0),El.set(1,0),Gf.set(1,1);let l=t.ray.intersectTriangle(Or,Lo,Ur,!1,Ro);if(l===null&&(zr(Lo.set(-.5,.5,0),Ks,r,Ys,s,o),El.set(0,1),l=t.ray.intersectTriangle(Or,Ur,Lo,!1,Ro),l===null))return;const a=t.ray.origin.distanceTo(Ro);a<t.near||a>t.far||e.push({distance:a,point:Ro.clone(),uv:Gi.getInterpolation(Ro,Or,Lo,Ur,Hf,El,Gf,new Ft),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function zr(n,t,e,i,s,o){js.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(Co.x=o*js.x-s*js.y,Co.y=s*js.x+o*js.y):Co.copy(js),n.copy(t),n.x+=Co.x,n.y+=Co.y,n.applyMatrix4(pu)}class pc extends Gn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new St(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const _a=new I,Ma=new I,Vf=new Ue,Do=new lc,kr=new hr,wl=new I,Wf=new I;class gv extends ei{constructor(t=new ii,e=new pc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)_a.fromBufferAttribute(e,s-1),Ma.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=_a.distanceTo(Ma);t.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),kr.copy(i.boundingSphere),kr.applyMatrix4(s),kr.radius+=o,t.ray.intersectsSphere(kr)===!1)return;Vf.copy(s).invert(),Do.copy(t.ray).applyMatrix4(Vf);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,h=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const u=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=u,m=g-1;x<m;x+=h){const p=f.getX(x),M=f.getX(x+1),b=Br(this,t,Do,a,p,M);b&&e.push(b)}if(this.isLineLoop){const x=f.getX(g-1),m=f.getX(u),p=Br(this,t,Do,a,x,m);p&&e.push(p)}}else{const u=Math.max(0,r.start),g=Math.min(d.count,r.start+r.count);for(let x=u,m=g-1;x<m;x+=h){const p=Br(this,t,Do,a,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=Br(this,t,Do,a,g-1,u);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Br(n,t,e,i,s,o){const r=n.geometry.attributes.position;if(_a.fromBufferAttribute(r,s),Ma.fromBufferAttribute(r,o),e.distanceSqToSegment(_a,Ma,wl,Wf)>i)return;wl.applyMatrix4(n.matrixWorld);const a=t.ray.origin.distanceTo(wl);if(!(a<t.near||a>t.far))return{distance:a,point:Wf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Xf=new I,qf=new I;class mu extends gv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)Xf.fromBufferAttribute(e,s),qf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Xf.distanceTo(qf);t.setAttribute("lineDistance",new Je(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Va extends Gn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new St(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Yf=new Ue,zh=new lc,Fr=new hr,Hr=new I;class mc extends ei{constructor(t=new ii,e=new Va){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Fr.copy(i.boundingSphere),Fr.applyMatrix4(s),Fr.radius+=o,t.ray.intersectsSphere(Fr)===!1)return;Yf.copy(s).invert(),zh.copy(t.ray).applyMatrix4(Yf);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,h=i.index,c=i.attributes.position;if(h!==null){const d=Math.max(0,r.start),u=Math.min(h.count,r.start+r.count);for(let g=d,x=u;g<x;g++){const m=h.getX(g);Hr.fromBufferAttribute(c,m),Kf(Hr,m,a,s,t,e,this)}}else{const d=Math.max(0,r.start),u=Math.min(c.count,r.start+r.count);for(let g=d,x=u;g<x;g++)Hr.fromBufferAttribute(c,g),Kf(Hr,g,a,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Kf(n,t,e,i,s,o,r){const l=zh.distanceSqToPoint(n);if(l<e){const a=new I;zh.closestPointToPoint(n,a),a.applyMatrix4(i);const h=s.ray.origin.distanceTo(a);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(l),point:a,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Ui extends Li{constructor(t,e,i,s,o,r,l,a,h){super(t,e,i,s,o,r,l,a,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class _n extends ii{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:l,thetaLength:a};const h=this;s=Math.floor(s),o=Math.floor(o);const f=[],c=[],d=[],u=[];let g=0;const x=[],m=i/2;let p=0;M(),r===!1&&(t>0&&b(!0),e>0&&b(!1)),this.setIndex(f),this.setAttribute("position",new Je(c,3)),this.setAttribute("normal",new Je(d,3)),this.setAttribute("uv",new Je(u,2));function M(){const v=new I,D=new I;let E=0;const w=(e-t)/i;for(let C=0;C<=o;C++){const y=[],S=C/o,P=S*(e-t)+t;for(let F=0;F<=s;F++){const H=F/s,Y=H*a+l,K=Math.sin(Y),W=Math.cos(Y);D.x=P*K,D.y=-S*i+m,D.z=P*W,c.push(D.x,D.y,D.z),v.set(K,w,W).normalize(),d.push(v.x,v.y,v.z),u.push(H,1-S),y.push(g++)}x.push(y)}for(let C=0;C<s;C++)for(let y=0;y<o;y++){const S=x[y][C],P=x[y+1][C],F=x[y+1][C+1],H=x[y][C+1];(t>0||y!==0)&&(f.push(S,P,H),E+=3),(e>0||y!==o-1)&&(f.push(P,F,H),E+=3)}h.addGroup(p,E,0),p+=E}function b(v){const D=g,E=new Ft,w=new I;let C=0;const y=v===!0?t:e,S=v===!0?1:-1;for(let F=1;F<=s;F++)c.push(0,m*S,0),d.push(0,S,0),u.push(.5,.5),g++;const P=g;for(let F=0;F<=s;F++){const Y=F/s*a+l,K=Math.cos(Y),W=Math.sin(Y);w.x=y*W,w.y=m*S,w.z=y*K,c.push(w.x,w.y,w.z),d.push(0,S,0),E.x=K*.5+.5,E.y=W*.5*S+.5,u.push(E.x,E.y),g++}for(let F=0;F<s;F++){const H=D+F,Y=P+F;v===!0?f.push(Y,Y+1,H):f.push(Y+1,Y,H),C+=3}h.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Gr=new I,Vr=new I,Tl=new I,Wr=new Gi;class xv extends ii{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),o=Math.cos(oa*e),r=t.getIndex(),l=t.getAttribute("position"),a=r?r.count:l.count,h=[0,0,0],f=["a","b","c"],c=new Array(3),d={},u=[];for(let g=0;g<a;g+=3){r?(h[0]=r.getX(g),h[1]=r.getX(g+1),h[2]=r.getX(g+2)):(h[0]=g,h[1]=g+1,h[2]=g+2);const{a:x,b:m,c:p}=Wr;if(x.fromBufferAttribute(l,h[0]),m.fromBufferAttribute(l,h[1]),p.fromBufferAttribute(l,h[2]),Wr.getNormal(Tl),c[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,c[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,c[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let M=0;M<3;M++){const b=(M+1)%3,v=c[M],D=c[b],E=Wr[f[M]],w=Wr[f[b]],C=`${v}_${D}`,y=`${D}_${v}`;y in d&&d[y]?(Tl.dot(d[y].normal)<=o&&(u.push(E.x,E.y,E.z),u.push(w.x,w.y,w.z)),d[y]=null):C in d||(d[C]={index0:h[M],index1:h[b],normal:Tl.clone()})}}for(const g in d)if(d[g]){const{index0:x,index1:m}=d[g];Gr.fromBufferAttribute(l,x),Vr.fromBufferAttribute(l,m),u.push(Gr.x,Gr.y,Gr.z),u.push(Vr.x,Vr.y,Vr.z)}this.setAttribute("position",new Je(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ss extends ii{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const a=Math.min(r+l,Math.PI);let h=0;const f=[],c=new I,d=new I,u=[],g=[],x=[],m=[];for(let p=0;p<=i;p++){const M=[],b=p/i;let v=0;p===0&&r===0?v=.5/e:p===i&&a===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const E=D/e;c.x=-t*Math.cos(s+E*o)*Math.sin(r+b*l),c.y=t*Math.cos(r+b*l),c.z=t*Math.sin(s+E*o)*Math.sin(r+b*l),g.push(c.x,c.y,c.z),d.copy(c).normalize(),x.push(d.x,d.y,d.z),m.push(E+v,1-b),M.push(h++)}f.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const b=f[p][M+1],v=f[p][M],D=f[p+1][M],E=f[p+1][M+1];(p!==0||r>0)&&u.push(b,v,E),(p!==i-1||a<Math.PI)&&u.push(v,D,E)}this.setIndex(u),this.setAttribute("position",new Je(g,3)),this.setAttribute("normal",new Je(x,3)),this.setAttribute("uv",new Je(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ss(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class gc extends ii{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],l=[],a=[],h=[],f=new I,c=new I,d=new I;for(let u=0;u<=i;u++)for(let g=0;g<=s;g++){const x=g/s*o,m=u/i*Math.PI*2;c.x=(t+e*Math.cos(m))*Math.cos(x),c.y=(t+e*Math.cos(m))*Math.sin(x),c.z=e*Math.sin(m),l.push(c.x,c.y,c.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),d.subVectors(c,f).normalize(),a.push(d.x,d.y,d.z),h.push(g/s),h.push(u/i)}for(let u=1;u<=i;u++)for(let g=1;g<=s;g++){const x=(s+1)*u+g-1,m=(s+1)*(u-1)+g-1,p=(s+1)*(u-1)+g,M=(s+1)*u+g;r.push(x,m,M),r.push(m,p,M)}this.setIndex(r),this.setAttribute("position",new Je(l,3)),this.setAttribute("normal",new Je(a,3)),this.setAttribute("uv",new Je(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class vv extends Si{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class jf extends Gn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new St(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xi extends Gn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new St(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new St(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ac,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new hn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class xc extends ei{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new St(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class _v extends xc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.groundColor=new St(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Al=new Ue,$f=new I,Zf=new I;class gu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.map=null,this.mapPass=null,this.matrix=new Ue,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hc,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new Pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;$f.setFromMatrixPosition(t.matrixWorld),e.position.copy($f),Zf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Zf),e.updateMatrixWorld(),Al.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Al),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Al)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const Jf=new Ue,Po=new I,Rl=new I;class Mv extends gu{constructor(){super(new Hi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ft(4,2),this._viewportCount=6,this._viewports=[new Pe(2,1,1,1),new Pe(0,1,1,1),new Pe(3,1,1,1),new Pe(1,1,1,1),new Pe(3,0,1,1),new Pe(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Po.setFromMatrixPosition(t.matrixWorld),i.position.copy(Po),Rl.copy(i.position),Rl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(Rl),i.updateMatrixWorld(),s.makeTranslation(-Po.x,-Po.y,-Po.z),Jf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Jf)}}class yv extends xc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Mv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class bv extends gu{constructor(){super(new cc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Sv extends xc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(ei.DEFAULT_UP),this.updateMatrix(),this.target=new ei,this.shadow=new bv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class Ev{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Qf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Qf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Qf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qh);function zt(n,t,e=0){let i=n*374761393+t*668265263+e*2147483647|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function wv(n,t,e,i=0){let s=n*374761393+t*668265263+e*1274126177+i*2147483647|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,s=Math.imul(s,2246822519),s^=s>>>13,(s>>>0)/4294967296}const Vo=n=>n*n*(3-2*n);function Tv(n,t,e){const i=Math.floor(n),s=Math.floor(t),o=Vo(n-i),r=Vo(t-s),l=zt(i,s,e),a=zt(i+1,s,e),h=zt(i,s+1,e),f=zt(i+1,s+1,e);return(l+(a-l)*o)*(1-r)+(h+(f-h)*o)*r}function $s(n,t,e,i){const s=Math.floor(n),o=Math.floor(t),r=Math.floor(e),l=Vo(n-s),a=Vo(t-o),h=Vo(e-r),f=(d,u,g)=>d+(u-d)*g,c=(d,u,g)=>wv(s+d,o+u,r+g,i);return f(f(f(c(0,0,0),c(1,0,0),l),f(c(0,1,0),c(1,1,0),l),a),f(f(c(0,0,1),c(1,0,1),l),f(c(0,1,1),c(1,1,1),l),a),h)}function fi(n,t,e,i=4){let s=.5,o=1,r=0,l=0;for(let a=0;a<i;a++)r+=Tv(n*o,t*o,e+a*101)*s,l+=s,s*=.5,o*=2;return r/l}const Ie=16,cr=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","planks","cobble","water","glass","coal_ore","iron_ore","gold_ore","diamond_ore","bedrock","snow","snow_side","cactus_side","cactus_top","bricks","table_top","table_side","torch","furnace_top","furnace_front","command","obsidian","netherrack","soul_sand","glowstone","lava","nether_bricks","end_stone","end_frame_top","end_frame_side","end_frame_eye","portal","end_portal","purpur","end_bricks","chest_top","chest_side","chest_open","sandstone","mossy_cobble","ancient_debris_top","ancient_debris_side","gold_block"],ys=Object.fromEntries(cr.map((n,t)=>[n,t])),Qs=cr.length,xu=n=>Math.max(0,Math.min(255,n));function Lt(n,t,e,i,s){const o=(zt(e,i,s)-.5)*2*t;return n.map(r=>xu(r+o))}const td=(n,t)=>Lt([95,159,53],22,n,t,1),Cl=(n,t)=>Lt([134,96,67],18,n,t,2),aa=(n,t)=>Lt([125,125,125],20,n,t,4),Ll=(n,t)=>Lt([168,134,82],8,n,t,9).map(e=>t%4===3?e-30:e);function Xr(n,t){return(e,i)=>zt(Math.floor(e/2)+3,Math.floor(i/2),t)>.72?Lt(n,14,e,i,t+1):aa(e,i)}const vc={grass_top:td,dirt:Cl,grass_side:(n,t)=>t<4+(zt(n,0,3)>.5?1:0)?td(n,t):Cl(n,t),stone:aa,sand:(n,t)=>Lt([219,207,142],12,n,t,5),log_side:(n,t)=>Lt([102,81,49],10,n,0,6).map(e=>e-(n%4===0?14:0)),log_top:(n,t)=>{const e=Math.max(Math.abs(n-7.5),Math.abs(t-7.5));return Lt(e%4<2?[170,135,82]:[140,110,66],8,n,t,7)},leaves:(n,t)=>Lt([56,118,29],30,n,t,8),planks:Ll,cobble:(n,t)=>{const e=zt(Math.floor(n/4),Math.floor(t/4),10),i=n%4===3||t%4===3;return Lt([110+e*40,110+e*40,110+e*40],10,n,t,11).map(s=>i?s-35:s)},water:(n,t)=>{const e=zt(n>>1,t>>1,12)>.8?25:0;return[...Lt([36+e,86+e,200+e/2],8,n,t,12),175]},glass:(n,t)=>{const e=n===0||t===0||n===15||t===15,i=n===3&&t>=3&&t<=5||n===4&&t===3||n===11&&t>=10&&t<=11;return e?[215,235,245,230]:i?[255,255,255,190]:[200,225,240,0]},coal_ore:Xr([30,30,30],20),iron_ore:Xr([216,175,147],30),gold_ore:Xr([250,220,60],40),diamond_ore:Xr([70,235,225],50),bedrock:(n,t)=>Lt([55,55,55],32,n,t,60),snow:(n,t)=>Lt([240,245,250],7,n,t,61),snow_side:(n,t)=>t<4?Lt([240,245,250],7,n,t,61):Cl(n,t),cactus_side:(n,t)=>(n===4||n===11)&&t%5===2?[230,230,200]:Lt([36,118,48],10,n,0,62).map(e=>n%5===2?e-18:e),cactus_top:(n,t)=>{const e=Math.max(Math.abs(n-7.5),Math.abs(t-7.5));return Lt(e<3?[30,100,40]:[52,140,60],8,n,t,63)},bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?Lt([170,168,160],8,n,t,64):Lt([150,72,58],14,n,t,65),table_top:(n,t)=>n===0||t===0||n===15||t===15||n===7||n===8||t===7||t===8?Lt([92,60,30],8,n,t,66):Ll(n,t),torch:(n,t)=>n<7||n>8?[0,0,0,0]:t<2?n===7?[255,235,120,255]:[255,160,40,255]:t<4?[255,200,60,255]:Lt([122,86,44],10,n,t,70),command:(n,t)=>{const e=n===0||t===0||n===15||t===15,i=n===4+(t-4)&&t>=4&&t<=7||n===4+(11-t)&&t>=8&&t<=11||t===10&&n>=9&&n<=12;return e?[74,34,8,255]:i?[42,18,4,255]:Lt([196,114,58],18,n,t,75)},obsidian:(n,t)=>zt(n,t,80)>.93?Lt([90,40,150],20,n,t,81):Lt([22,14,36],10,n,t,82),netherrack:(n,t)=>{const e=zt(Math.floor(n/2),Math.floor(t/3),83)>.8;return Lt(e?[150,60,55]:[112,40,42],22,n,t,84)},soul_sand:(n,t)=>{const e=(n%5===1||n%5===2)&&(t%5===1||t%5===2)&&zt(Math.floor(n/5),Math.floor(t/5),85)>.45;return Lt(e?[48,36,30]:[88,70,56],12,n,t,86)},glowstone:(n,t)=>{const e=zt(Math.floor(n/3),Math.floor(t/3),87);return Lt(e>.55?[255,226,140]:[206,150,74],22,n,t,88)},lava:(n,t)=>{const e=zt(Math.floor(n/2),Math.floor(t/2),89);return Lt(e>.7?[255,214,70]:e>.35?[248,140,24]:[214,80,14],14,n,t,90)},nether_bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?Lt([28,12,16],6,n,t,91):Lt([62,24,30],12,n,t,92),end_stone:(n,t)=>Lt([222,222,156],16,n,t,93).map((e,i)=>zt(n>>1,t>>1,94)>.85?e-24:e),end_frame_top:(n,t)=>n<2||t<2||n>13||t>13?Lt([50,100,84],10,n,t,95):Lt([96,150,124],10,n,t,96),end_frame_side:(n,t)=>t<4?Lt([60,112,94],10,n,t,97):Lt([218,218,150],14,n,t,98),end_frame_eye:(n,t)=>{const e=Math.hypot(n-7.5,t-7.5);return e<2.3?[14,20,18]:e<4.4?[96,216,150]:n<2||t<2||n>13||t>13?Lt([50,100,84],10,n,t,95):Lt([96,150,124],10,n,t,96)},portal:(n,t)=>{const e=Math.sin(n*.9+t*.45)*.5+Math.sin(t*.8-n*.3)*.5;return[90+e*50+zt(n,t,99)*30,20+e*14,190+e*40,175]},end_portal:(n,t)=>zt(n,t,100)>.9?[150,255,230,255]:[6,16,22+zt(n,t,101)*20,240],purpur:(n,t)=>{const e=n%8<1||t%8<1;return Lt(e?[140,96,140]:[172,128,172],10,n,t,110)},end_bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?Lt([186,186,128],6,n,t,111):Lt([226,226,164],10,n,t,112),chest_top:(n,t)=>n<1||t<1||n>14||t>14?Lt([80,52,20],6,n,t,113):Lt([160,112,50],10,n,t,114),chest_side:(n,t)=>n>=7&&n<=8&&t>=5&&t<=8?[214,214,214]:t===6||t===7?Lt([96,62,24],6,n,t,115):n<1||n>14||t>14?Lt([80,52,20],6,n,t,116):Lt([160,112,50],10,n,t,117),chest_open:(n,t)=>n<2||t<2||n>13||t>13?Lt([120,82,34],8,n,t,118):Lt([30,18,10],8,n,t,119),sandstone:(n,t)=>{const e=t%5===4;return Lt(e?[196,178,120]:[216,200,140],9,n,t,120)},mossy_cobble:(n,t)=>{const e=zt(Math.floor(n/4),Math.floor(t/4),121),i=n%4===3||t%4===3;return zt(n>>1,t>>1,122)>.55?Lt([70,120,50],14,n,t,123).map(o=>i?o-25:o):Lt([110+e*40,110+e*40,110+e*40],10,n,t,11).map(o=>i?o-35:o)},ancient_debris_top:(n,t)=>{const e=Math.max(Math.abs(n-7.5),Math.abs(t-7.5));return e>5.5?Lt([92,66,58],8,n,t,124):e>3?Lt([126,92,80],8,n,t,125):Lt([70,48,44],8,n,t,126)},ancient_debris_side:(n,t)=>{const e=t%5===2;return Lt(e?[70,48,44]:[112,80,70],9,n,t,127)},gold_block:(n,t)=>{const e=n<1||t<1||n>14||t>14;return n===2&&t<6||t===2&&n<6?[255,252,200]:e?Lt([200,150,20],6,n,t,128):Lt([250,214,60],10,n,t,129)},furnace_top:(n,t)=>n===0||t===0||n===15||t===15?Lt([70,70,70],8,n,t,71):aa(n,t).map(e=>e-20),furnace_front:(n,t)=>n===0||t===0||n===15?Lt([70,70,70],8,n,t,72):n>=4&&n<=11&&t>=8&&t<=13?t>10&&n>5&&n<10&&zt(n,t,73)>.4?[255,150+zt(n,t,74)*80|0,30,255]:[25,25,25,255]:n>=4&&n<=11&&t>=3&&t<=5?[30,30,30,255]:aa(n,t).map(i=>i-15),table_side:(n,t)=>t<3?Lt([92,60,30],8,n,t,67):n===7||n===8?Lt([120,90,50],8,n,t,68):Ll(n,t)},Dl={};function vu(n){if(Dl[n])return Dl[n];let t=0,e=0,i=0,s=0;for(let o=0;o<Ie;o++)for(let r=0;r<Ie;r++){const l=vc[n](r,o);l[3]!==0&&(t+=l[0],e+=l[1],i+=l[2],s++)}return Dl[n]=[t/s/255,e/s/255,i/s/255]}function Av(){const n=document.createElement("canvas");n.width=Ie*Qs,n.height=Ie;const t=n.getContext("2d"),e=t.createImageData(n.width,Ie);cr.forEach((s,o)=>{for(let r=0;r<Ie;r++)for(let l=0;l<Ie;l++){const a=vc[s](l,r),h=(r*n.width+o*Ie+l)*4;e.data[h]=a[0],e.data[h+1]=a[1],e.data[h+2]=a[2],e.data[h+3]=a[3]===void 0?255:a[3]}}),t.putImageData(e,0,0);const i=new Ui(n);return i.magFilter=_e,i.minFilter=_e,i.colorSpace=oi,i.generateMipmaps=!1,{canvas:n,texture:i}}const ya={stone:3.4,cobble:4.2,bricks:4,bedrock:4.5,coal_ore:3.4,iron_ore:3.4,gold_ore:3.4,diamond_ore:3.4,planks:2.4,table_top:2.4,table_side:2.4,log_side:3.2,log_top:2.2,leaves:3.6,dirt:2.2,grass_top:2.6,grass_side:2.4,sand:1.4,snow:1,snow_side:1.4,water:.9,glass:0,torch:0,cactus_side:2.6,cactus_top:2,furnace_top:2.6,furnace_front:3,command:2.6};function ed(n,t,e){const i=Math.floor(n),s=Math.floor(t),o=n-i,r=t-s,l=o*o*(3-2*o),a=r*r*(3-2*r),h=zt(i,s,e),f=zt(i+1,s,e),c=zt(i,s+1,e),d=zt(i+1,s+1,e);return(h+(f-h)*l)*(1-a)+(c+(d-c)*l)*a}function Rv(n){const e=64/Ie,i=document.createElement("canvas");i.width=64*Qs,i.height=64;const s=i.getContext("2d"),o=s.createImageData(i.width,64),r=document.createElement("canvas");r.width=i.width,r.height=64;const l=r.getContext("2d"),a=l.createImageData(r.width,64);cr.forEach((d,u)=>{const g=Array.from({length:Ie*Ie},(b,v)=>vc[d](v%Ie,Math.floor(v/Ie))),x=(b,v)=>g[Math.max(0,Math.min(Ie-1,v))*Ie+Math.max(0,Math.min(Ie-1,b))],m=new Float32Array(4096);for(let b=0;b<64;b++)for(let v=0;v<64;v++){const D=(v+.5)/e-.5,E=(b+.5)/e-.5,w=Math.floor(D),C=Math.floor(E),y=D-w,S=E-C,P=x(Math.floor(v/e),Math.floor(b/e)),F=x(w,C),H=x(w+1,C),Y=x(w,C+1),K=x(w+1,C+1),W=[0,1,2].map(st=>{const ht=(F[st]*(1-y)+H[st]*y)*(1-S)+(Y[st]*(1-y)+K[st]*y)*S;let At=P[st]*.5+ht*.5;const Vt=(zt(v+u*97,b,1234)-.5)*16+(ed(v*.35+u*13,b*.35,77)-.5)*22+(ed(v*.09,b*.09+u*5,91)-.5)*18;return xu(At+Vt)}),et=P[3]===void 0?255:P[3],G=(b*i.width+u*64+v)*4;o.data[G]=W[0],o.data[G+1]=W[1],o.data[G+2]=W[2],o.data[G+3]=et,m[b*64+v]=(W[0]*.3+W[1]*.59+W[2]*.11)/255}const p=ya[d]===void 0?2:ya[d],M=(b,v)=>m[(v+64)%64*64+(b+64)%64];for(let b=0;b<64;b++)for(let v=0;v<64;v++){const D=M(v+1,b-1)+2*M(v+1,b)+M(v+1,b+1)-(M(v-1,b-1)+2*M(v-1,b)+M(v-1,b+1)),E=M(v-1,b+1)+2*M(v,b+1)+M(v+1,b+1)-(M(v-1,b-1)+2*M(v,b-1)+M(v+1,b-1));let w=-D*p,C=E*p,y=1;const S=Math.hypot(w,C,y);w/=S,C/=S,y/=S;const P=(b*r.width+u*64+v)*4;a.data[P]=(w*.5+.5)*255,a.data[P+1]=(C*.5+.5)*255,a.data[P+2]=(y*.5+.5)*255,a.data[P+3]=255}}),s.putImageData(o,0,0),l.putImageData(a,0,0);const h=n?n.capabilities.getMaxAnisotropy():4,f=new Ui(i);f.colorSpace=oi,f.magFilter=$i,f.minFilter=Dn,f.generateMipmaps=!0,f.anisotropy=Math.min(8,h);const c=new Ui(r);return c.magFilter=$i,c.minFilter=Dn,c.generateMipmaps=!0,c.anisotropy=Math.min(8,h),{map:f,normalMap:c}}function Cv(n){const t=n.getContext("2d"),e=n.width,i=t.getImageData(0,0,e,Ie).data,s=document.createElement("canvas");s.width=e,s.height=Ie;const o=s.getContext("2d"),r=o.createImageData(e,Ie);cr.forEach((a,h)=>{const f=(ya[a]===void 0?2:ya[a])*.45,c=(d,u)=>{const g=((u+Ie)%Ie*e+h*Ie+(d+Ie)%Ie)*4;return(i[g]*.3+i[g+1]*.59+i[g+2]*.11)/255};for(let d=0;d<Ie;d++)for(let u=0;u<Ie;u++){const g=c(u+1,d)-c(u-1,d),x=c(u,d+1)-c(u,d-1);let m=-g*f,p=x*f,M=1;const b=Math.hypot(m,p,M);m/=b,p/=b,M/=b;const v=(d*e+h*Ie+u)*4;r.data[v]=(m*.5+.5)*255,r.data[v+1]=(p*.5+.5)*255,r.data[v+2]=(M*.5+.5)*255,r.data[v+3]=255}}),o.putImageData(r,0,0);const l=new Ui(s);return l.magFilter=_e,l.minFilter=_e,l.generateMipmaps=!1,l}const _u={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class _o{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Lv=new cc(-1,1,1,-1,0,1);class Dv extends ii{constructor(){super(),this.setAttribute("position",new Je([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Je([0,2,0,0,2,0],2))}}const Pv=new Dv;class _c{constructor(t){this._mesh=new _t(Pv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,Lv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Mu extends _o{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Si?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Jo.clone(t.uniforms),this.material=new Si({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new _c(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class id extends _o{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,l;this.inverse?(r=0,l=1):(r=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class Iv extends _o{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Nv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new Ft);this._width=i.width,this._height=i.height,e=new Ji(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:xn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Mu(_u),this.copyPass.material.blending=On,this.clock=new Ev}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}id!==void 0&&(r instanceof id?i=!0:r instanceof Iv&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ft);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Ov extends _o{constructor(t,e,i=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new St}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const Uv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new St(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class uo extends _o{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new Ft(t.x,t.y):new Ft(256,256),this.clearColor=new St(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ji(o,r,{type:xn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const d=new Ji(o,r,{type:xn});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new Ji(o,r,{type:xn});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),o=Math.round(o/2),r=Math.round(r/2)}const l=Uv;this.highPassUniforms=Jo.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Si({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const a=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new Ft(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=_u;this.copyUniforms=Jo.clone(f.uniforms),this.blendMaterial=new Si({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:$o,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new St,this.oldClearAlpha=1,this.basic=new ce,this.fsQuad=new _c(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new Ft(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=uo.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[a]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=uo.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[a]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Si({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ft(.5,.5)},direction:{value:new Ft(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Si({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}uo.BlurDirectionX=new Ft(1,0);uo.BlurDirectionY=new Ft(0,1);const zv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class kv extends _o{constructor(){super();const t=zv;this.uniforms=Jo.clone(t.uniforms),this.material=new vv({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new _c(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},xe.getTransfer(this._outputColorSpace)===Ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Od?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Ud?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===zd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ka?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Bd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const jt=0,_={GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,PLANKS:7,COBBLE:8,WATER:9,GLASS:10,COAL_ORE:11,IRON_ORE:12,GOLD_ORE:13,DIAMOND_ORE:14,BEDROCK:15,SNOW:16,CACTUS:17,BRICKS:18,TABLE:19,TORCH:20,FURNACE:21,COMMAND:22,OBSIDIAN:23,NETHER_PORTAL:24,NETHERRACK:25,SOUL_SAND:26,GLOWSTONE:27,LAVA:28,NETHER_BRICKS:29,END_STONE:30,END_FRAME:31,END_FRAME_EYE:32,END_PORTAL:33,PURPUR:34,END_BRICKS:35,CHEST:36,CHEST_OPEN:37,SANDSTONE:38,MOSSY_COBBLE:39,ANCIENT_DEBRIS:40,GOLD_BLOCK:41},A={STICK:100,COAL:101,IRON:102,GOLD:103,DIAMOND:104,APPLE:150,PORK:151,BEEF:152,COOKED_PORK:153,STEAK:154,STAR:105,PEARL:106,LIGHTER:107,EYE:108,ELYTRA:109,DONUT:160,DUFF:161,SENZU:162,DBALL:163,NETHERITE:170,SCRAP:171,LEATHER:172,CHICKEN:155,COOKED_CHICKEN:156},Te={};function Xt(n,t,e,i,s=null,o=0,r={}){Te[n]={id:n,name:t,tiles:e,hardness:i,tool:s,lvl:o,opaque:!0,liquid:!1,...r}}Xt(_.GRASS,"Hierba",["grass_top","dirt","grass_side"],.6,"shovel");Xt(_.DIRT,"Tierra",["dirt","dirt","dirt"],.5,"shovel");Xt(_.STONE,"Piedra",["stone","stone","stone"],1.5,"pick",1);Xt(_.SAND,"Arena",["sand","sand","sand"],.5,"shovel");Xt(_.LOG,"Tronco",["log_top","log_top","log_side"],2,"axe");Xt(_.LEAVES,"Hojas",["leaves","leaves","leaves"],.2);Xt(_.PLANKS,"Tablones",["planks","planks","planks"],2,"axe");Xt(_.COBBLE,"Adoquín",["cobble","cobble","cobble"],2,"pick",1);Xt(_.WATER,"Agua",["water","water","water"],100,null,0,{opaque:!1,liquid:!0,transparent:!0});Xt(_.GLASS,"Cristal",["glass","glass","glass"],.3,null,0,{opaque:!1,transparent:!0});Xt(_.COAL_ORE,"Mena de carbón",["coal_ore","coal_ore","coal_ore"],3,"pick",1);Xt(_.IRON_ORE,"Mena de hierro",["iron_ore","iron_ore","iron_ore"],3,"pick",2);Xt(_.GOLD_ORE,"Mena de oro",["gold_ore","gold_ore","gold_ore"],3,"pick",3);Xt(_.DIAMOND_ORE,"Mena de diamante",["diamond_ore","diamond_ore","diamond_ore"],3,"pick",3);Xt(_.BEDROCK,"Lecho de roca",["bedrock","bedrock","bedrock"],1/0);Xt(_.SNOW,"Nieve",["snow","dirt","snow_side"],.3,"shovel");Xt(_.CACTUS,"Cactus",["cactus_top","cactus_top","cactus_side"],.4);Xt(_.BRICKS,"Ladrillos",["bricks","bricks","bricks"],2,"pick",1);Xt(_.TABLE,"Mesa de crafteo",["table_top","planks","table_side"],2.5,"axe");Xt(_.TORCH,"Antorcha",["torch","torch","torch"],.05,null,0,{opaque:!1,torch:!0,flat:!0,emit:10});Xt(_.COMMAND,"Bloque de comandos",["command","command","command"],5,"pick",3);Xt(_.OBSIDIAN,"Obsidiana",["obsidian","obsidian","obsidian"],50,"pick",4);Xt(_.NETHER_PORTAL,"Portal del Nether",["portal","portal","portal"],1/0,null,0,{opaque:!1,transparent:!0,portal:!0,glow:!0});Xt(_.NETHERRACK,"Netherrack",["netherrack","netherrack","netherrack"],.4,"pick");Xt(_.SOUL_SAND,"Arena de almas",["soul_sand","soul_sand","soul_sand"],.5,"shovel");Xt(_.GLOWSTONE,"Piedra luminosa",["glowstone","glowstone","glowstone"],.3,null,0,{glow:!0,emit:10});Xt(_.LAVA,"Lava",["lava","lava","lava"],1/0,null,0,{opaque:!1,liquid:!0,glow:!0,emit:10});Xt(_.NETHER_BRICKS,"Ladrillos del Nether",["nether_bricks","nether_bricks","nether_bricks"],2,"pick",1);Xt(_.END_STONE,"Piedra del End",["end_stone","end_stone","end_stone"],3,"pick",1);Xt(_.END_FRAME,"Marco del portal del End",["end_frame_top","end_stone","end_frame_side"],1/0);Xt(_.END_FRAME_EYE,"Marco del End con ojo",["end_frame_eye","end_stone","end_frame_side"],1/0);Xt(_.END_PORTAL,"Portal del End",["end_portal","end_portal","end_portal"],1/0,null,0,{opaque:!1,transparent:!0,portal:!0,glow:!0});Xt(_.PURPUR,"Purpur",["purpur","purpur","purpur"],1.5,"pick",1);Xt(_.END_BRICKS,"Ladrillos del End",["end_bricks","end_bricks","end_bricks"],2,"pick",1);Xt(_.CHEST,"Cofre",["chest_top","chest_top","chest_side"],2.5,"axe");Xt(_.CHEST_OPEN,"Cofre abierto",["chest_open","chest_top","chest_side"],2.5,"axe");Xt(_.SANDSTONE,"Arenisca",["sandstone","sandstone","sandstone"],.8,"pick",1);Xt(_.MOSSY_COBBLE,"Adoquín musgoso",["mossy_cobble","mossy_cobble","mossy_cobble"],2,"pick",1);Xt(_.ANCIENT_DEBRIS,"Restos antiguos",["ancient_debris_top","ancient_debris_top","ancient_debris_side"],30,"pick",4);Xt(_.GOLD_BLOCK,"Bloque de oro",["gold_block","gold_block","gold_block"],3,"pick",3);Xt(_.FURNACE,"Horno",["furnace_top","stone","furnace_front"],3,"pick",1);const ye=new Array(256).fill(null),Mc=[_.PLANKS,_.COBBLE,_.STONE,_.BRICKS,_.SANDSTONE],Bv=["madera","adoquín","piedra","ladrillo","arenisca"],Qo=n=>42+n,yu=n=>47+n,bu=[_.PLANKS,_.COBBLE,_.BRICKS,_.SANDSTONE],Fv=["madera","adoquín","ladrillo","arenisca"],ba=(n,t)=>52+n*4+t,yc=68,Es=69,Su=73,bc=77,Eu=81;Mc.forEach((n,t)=>{const e=Te[n];for(const i of[!1,!0]){const s=i?yu(t):Qo(t);Xt(s,"Losa de "+Bv[t],e.tiles,e.hardness,e.tool,e.lvl,{opaque:!1,hidden:i,dropAs:Qo(t)}),ye[s]={kind:"slab",top:i,m:t}}});bu.forEach((n,t)=>{const e=Te[n];for(let i=0;i<4;i++){const s=ba(t,i);Xt(s,"Escaleras de "+Fv[t],e.tiles,e.hardness,e.tool,e.lvl,{opaque:!1,hidden:i>0,dropAs:ba(t,0)}),ye[s]={kind:"stairs",o:i,m:t}}});Xt(yc,"Valla",Te[_.PLANKS].tiles,2,"axe",0,{opaque:!1,flat:!0});ye[yc]={kind:"fence"};for(let n=0;n<4;n++)for(const[t,e,i]of[[Es,!1,!1],[Su,!0,!1],[bc,!1,!0],[Eu,!0,!0]]){const s=t+n;Xt(s,"Puerta de madera",Te[_.PLANKS].tiles,2,"axe",0,{opaque:!1,flat:!0,hidden:s!==Es,dropAs:Es}),ye[s]={kind:"door",o:n,open:e,hi:i}}function Pl(n,t,e){const i=ye[n];if(i.kind==="slab")return[i.top?[0,.5,0,1,1,1]:[0,0,0,1,.5,1]];if(i.kind==="stairs")return[[0,0,0,1,.5,1],[[0,.5,0,1,1,.5],[.5,.5,0,1,1,1],[0,.5,.5,1,1,1],[0,.5,0,.5,1,1]][i.o]];if(i.kind==="fence"){const r=e?1.5:1,l=[[.375,0,.375,.625,r,.625]];return t(0,-1)&&l.push(e?[.4375,0,0,.5625,1.5,.375]:[.4375,.375,0,.5625,.5625,.375],...e?[]:[[.4375,.6875,0,.5625,.875,.375]]),t(0,1)&&l.push(e?[.4375,0,.625,.5625,1.5,1]:[.4375,.375,.625,.5625,.5625,1],...e?[]:[[.4375,.6875,.625,.5625,.875,1]]),t(-1,0)&&l.push(e?[0,0,.4375,.375,1.5,.5625]:[0,.375,.4375,.375,.5625,.5625],...e?[]:[[0,.6875,.4375,.375,.875,.5625]]),t(1,0)&&l.push(e?[.625,0,.4375,1,1.5,.5625]:[.625,.375,.4375,1,.5625,.5625],...e?[]:[[.625,.6875,.4375,1,.875,.5625]]),l}const s=i.open?(i.o+3)%4:i.o,o=.1875;return[[[0,0,0,1,1,o],[1-o,0,0,1,1,1],[0,0,1-o,1,1,1],[0,0,0,o,1,1]][s]]}const rn=new Uint8Array(256),tr=new Uint8Array(256),Mn=new Uint8Array(256),wu=new Uint8Array(256),la=new Uint8Array(256),ha=new Uint8Array(256);for(const n of Object.values(Te))rn[n.id]=n.opaque?1:0,ha[n.id]=n.opaque||ye[n.id]&&ye[n.id].kind!=="fence"?1:0,tr[n.id]=n.liquid||n.torch||n.portal?0:1,n.portal&&(wu[n.id]=1),n.emit&&(la[n.id]=n.emit),Mn[n.id]=n.liquid?1:0;const Fe={};function ze(n,t,e={}){Fe[n]={id:n,name:t,stack:64,...e}}ze(A.STICK,"Palo");ze(A.COAL,"Carbón");ze(A.IRON,"Lingote de hierro");ze(A.GOLD,"Lingote de oro");ze(A.DIAMOND,"Diamante");ze(A.STAR,"Estrella de la tormenta");ze(A.PEARL,"Perla de Ender");ze(A.LIGHTER,"Encendedor",{stack:1,uses:64});ze(A.EYE,"Ojo de Ender");ze(A.ELYTRA,"Élitros",{stack:1});ze(A.DONUT,"Dona rosquilla",{food:12});ze(A.DUFF,"Cerveza Duff",{food:5});ze(A.SENZU,"Semilla del ermitaño",{food:20,heal:!0});ze(A.DBALL,"Esfera del dragón",{stack:7});ze(A.NETHERITE,"Lingote de netherita");ze(A.SCRAP,"Fragmento de netherita");ze(A.LEATHER,"Cuero");ze(A.CHICKEN,"Pollo crudo",{food:4});ze(A.COOKED_CHICKEN,"Pollo asado",{food:12});ze(A.APPLE,"Manzana",{food:8});ze(A.PORK,"Cerdo crudo",{food:6});ze(A.BEEF,"Ternera cruda",{food:6});ze(A.COOKED_PORK,"Cerdo asado",{food:14});ze(A.STEAK,"Filete",{food:16});const Tu=[{n:"de madera",color:[176,140,84],speed:2,dur:59,lvl:1,mat:_.PLANKS,dmgB:0},{n:"de piedra",color:[140,140,140],speed:4,dur:131,lvl:2,mat:_.COBBLE,dmgB:1},{n:"de hierro",color:[225,225,225],speed:6,dur:250,lvl:3,mat:A.IRON,dmgB:2},{n:"de diamante",color:[90,235,225],speed:8,dur:1561,lvl:4,mat:A.DIAMOND,dmgB:3},{n:"de oro",color:[250,215,60],speed:12,dur:32,lvl:1,mat:A.GOLD,dmgB:0},{n:"de netherita",color:[78,68,76],speed:9,dur:2031,lvl:5,mat:A.NETHERITE,dmgB:4}],Sc=[{n:"de cuero",color:[160,100,60],pts:[1,3,2,1],dur:80,mat:A.LEATHER},{n:"de oro",color:[250,215,60],pts:[2,5,3,1],dur:90,mat:A.GOLD},{n:"de hierro",color:[225,225,225],pts:[2,6,5,2],dur:240,mat:A.IRON},{n:"de diamante",color:[90,235,225],pts:[3,8,6,3],dur:528,mat:A.DIAMOND},{n:"de netherita",color:[78,68,76],pts:[4,9,7,4],dur:592,mat:A.NETHERITE}],Hv=[{t:"head",name:"Casco",rows:["MMM","M M"],dm:1},{t:"chest",name:"Peto",rows:["M M","MMM","MMM"],dm:1.45},{t:"legs",name:"Grebas",rows:["MMM","M M","M M"],dm:1.35},{t:"feet",name:"Botas",rows:["M M","M M"],dm:1.15}],er=(n,t)=>200+n*10+t,Gv=[{t:"pick",name:"Pico",base:110,dmg:2,rows:["MMM"," S "," S "]},{t:"axe",name:"Hacha",base:120,dmg:3,rows:["MM","MS"," S"]},{t:"shovel",name:"Pala",base:130,dmg:2,rows:["M","S","S"]},{t:"sword",name:"Espada",base:140,dmg:4,rows:["M","M","S"]}],Au=[];function je(n,t,e,i=1){Au.push({pattern:n,key:t,out:e,n:i})}Gv.forEach(n=>Tu.forEach((t,e)=>{const i=n.base+e;ze(i,`${n.name} ${t.n}`,{stack:1,tool:{type:n.t,tier:e,speed:t.speed,dur:t.dur,lvl:t.lvl,dmg:n.dmg+t.dmgB},color:t.color}),e===5?je(["T","N"],{T:n.base+3,N:A.NETHERITE},i):je(n.rows,{M:t.mat,S:A.STICK},i)}));Hv.forEach((n,t)=>Sc.forEach((e,i)=>{const s=er(t,i);ze(s,`${n.name} ${e.n}`,{stack:1,armor:{slot:t,pts:e.pts[t],tier:i,dur:Math.round(e.dur*n.dm)},color:e.color}),i===4?je(["A","N"],{A:er(t,3),N:A.NETHERITE},s):je(n.rows,{M:e.mat},s)}));je(["SG","GS"],{S:A.SCRAP,G:A.GOLD},A.NETHERITE);Mc.forEach((n,t)=>{je(["MMM"],{M:n},Qo(t),6),je(["S","S"],{S:Qo(t)},n)});bu.forEach((n,t)=>je(["M  ","MM ","MMM"],{M:n},ba(t,0),4));je(["PSP","PSP"],{P:_.PLANKS,S:A.STICK},yc,3);je(["PP","PP","PP"],{P:_.PLANKS},Es,3);je(["L"],{L:_.LOG},_.PLANKS,4);je(["P","P"],{P:_.PLANKS},A.STICK,4);je(["PP","PP"],{P:_.PLANKS},_.TABLE);je(["SS","SS"],{S:_.SAND},_.GLASS,4);je(["CC","CC"],{C:_.COBBLE},_.BRICKS,4);je(["CCC","C C","CCC"],{C:_.COBBLE},_.FURNACE);je(["C","S"],{C:A.COAL,S:A.STICK},_.TORCH,4);je(["CCC","CDC","CCC"],{C:_.COBBLE,D:A.DIAMOND},_.OBSIDIAN,2);je(["I","C"],{I:A.IRON,C:A.COAL},A.LIGHTER);je(["P","C"],{P:A.PEARL,C:A.COAL},A.EYE);je(["OOO","ODO","OOO"],{O:_.OBSIDIAN,D:A.DIAMOND},_.END_FRAME,4);je(["DGD","GCG","DGD"],{D:A.DIAMOND,G:A.GOLD,C:A.COAL},_.COMMAND);const Vv={[_.IRON_ORE]:[A.IRON,1],[_.GOLD_ORE]:[A.GOLD,1],[_.COBBLE]:[_.STONE,1],[_.SAND]:[_.GLASS,1],[_.LOG]:[A.COAL,1],[A.PORK]:[A.COOKED_PORK,1],[A.BEEF]:[A.STEAK,1],[A.CHICKEN]:[A.COOKED_CHICKEN,1],[_.ANCIENT_DEBRIS]:[A.SCRAP,1]},nd={[A.COAL]:80,[_.LOG]:15,[_.PLANKS]:15,[_.TABLE]:15,[A.STICK]:5},Ru=8;function po(n){return Te[n]||Fe[n]}function Cn(n){const t=po(n);return Te[n]?64:t.stack}const Wv=n=>!!Te[n],Cu=n=>!Te[n]||!!Te[n].flat;function Xv(n,t){let e=t,i=-1,s=t,o=-1;for(let a=0;a<t;a++)for(let h=0;h<t;h++)n[a*t+h]&&(e=Math.min(e,a),i=Math.max(i,a),s=Math.min(s,h),o=Math.max(o,h));if(i<0)return null;const r=i-e+1,l=o-s+1;for(const a of Au)if(!(a.pattern.length!==r||a.pattern[0].length!==l))for(const h of[!1,!0]){let f=!0;for(let c=0;c<r&&f;c++)for(let d=0;d<l;d++){const u=a.pattern[c][h?l-1-d:d],g=u===" "?0:a.key[u];if(n[(e+c)*t+s+d]!==g){f=!1;break}}if(f)return a}return null}function As(n){return n&&Fe[n.id]&&Fe[n.id].tool}function Lu(n,t){const e=Te[n];if(!e.lvl)return!0;const i=As(t);return!!i&&i.type==="pick"&&i.lvl>=e.lvl}function qv(n,t){const e=Te[n];if(e.hardness===1/0)return 1/0;const i=As(t),s=i&&e.tool&&i.type===e.tool,o=Lu(n,t),r=s?i.speed:1;return e.hardness*(o?1.5:5)/r}function Du(n,t){if(!Lu(n,t))return null;if(Te[n]&&Te[n].dropAs)return[Te[n].dropAs,1];switch(n){case _.GRASS:return[_.DIRT,1];case _.STONE:return[_.COBBLE,1];case _.COAL_ORE:return[A.COAL,1];case _.DIAMOND_ORE:return[A.DIAMOND,1];case _.LEAVES:return Math.random()<.1?[A.APPLE,1]:null;case _.CHEST_OPEN:return[_.CHEST,1];case _.GOLD_BLOCK:return[A.GOLD,9];case _.GLASS:case _.WATER:case _.LAVA:case _.NETHER_PORTAL:case _.END_PORTAL:case _.END_FRAME:case _.END_FRAME_EYE:return null;default:return[n,1]}}let Sa=null;const Il=new Map,Nl=new Map,Ol=new Map;function Yv(n){Sa=n}function Kv(n){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");e.imageSmoothingEnabled=!1;const i=Te[n],s=(r,l,a)=>{e.save(),e.setTransform(...l),e.drawImage(Sa,ys[r]*16,0,16,16,0,0,16,16),a&&(e.fillStyle=`rgba(0,0,0,${a})`,e.fillRect(0,0,16,16)),e.restore()},o=ye[n];if(o&&(o.kind==="slab"||o.kind==="stairs")){if(s(i.tiles[0],[.875,.4375,-.875,.4375,16,11],0),s(i.tiles[2],[.875,.4375,0,.4375,2,18],.22),s(i.tiles[2],[.875,-.4375,0,.4375,16,25],.42),o.kind==="stairs"){const r=document.createElement("canvas");r.width=r.height=32;const l=r.getContext("2d");l.imageSmoothingEnabled=!1;const a=(h,f,c)=>{l.save(),l.setTransform(...f),l.drawImage(Sa,ys[h]*16,0,16,16,0,0,16,16),c&&(l.fillStyle=`rgba(0,0,0,${c})`,l.fillRect(0,0,16,16)),l.restore()};a(i.tiles[0],[.875,.4375,-.875,.4375,16,4],0),a(i.tiles[2],[.875,.4375,0,.875,2,11],.22),a(i.tiles[2],[.875,-.4375,0,.875,16,18],.42),e.clearRect(16,0,16,32),e.drawImage(r,16,0,16,32,16,0,16,32)}return t}return s(i.tiles[0],[.875,.4375,-.875,.4375,16,4],0),s(i.tiles[2],[.875,.4375,0,.875,2,11],.22),s(i.tiles[2],[.875,-.4375,0,.875,16,18],.42),t}function ut(n,t,e){n.fillStyle=e;for(const[i,s]of t)n.fillRect(i,s,1,1)}const kh=n=>`rgb(${n[0]},${n[1]},${n[2]})`,Ul=(n,t)=>kh(n.map(e=>Math.max(0,Math.min(255,e*t))));function jv(n){const t=document.createElement("canvas");t.width=t.height=16;const e=t.getContext("2d"),i="#7a5a30",s=()=>{for(let r=2;r<=11;r++)ut(e,[[r,15-r]],i)},o=Fe[n]||{};if(ye[n]&&ye[n].kind==="fence"){for(const r of[3,11])for(let l=2;l<=14;l++)ut(e,[[r,l],[r+1,l]],l%3?"#a8803f":"#8a6a30");for(const r of[5,6,10,11])for(let l=3;l<=12;l++)ut(e,[[l,r]],"#b8904a")}else if(ye[n]&&ye[n].kind==="door"){for(let r=1;r<=14;r++)for(let l=4;l<=11;l++)ut(e,[[l,r]],r===1||r===14||l===4||l===11?"#6a4a22":r===7||l===7||l===8?"#8a6a30":"#b8904a");ut(e,[[10,8],[10,9]],"#e8e8e8")}else if(n===_.TORCH){for(let r=6;r<=14;r++)ut(e,[[7,r],[8,r]],r%2?"#7a5630":"#6a4a28");ut(e,[[7,4],[8,4],[7,5],[8,5]],"#ffc83c"),ut(e,[[7,3],[8,3]],"#ff9a28"),ut(e,[[7,2]],"#ffeb78")}else if(o.armor){const r=Sc[o.armor.tier].color,l=kh(r),a=Ul(r,.68),h=Ul(r,1.2),f=(c,d,u)=>{for(let g=d;g<=u;g++)ut(e,[[g,c]],c>9?a:(g+c)%5===0?h:l)};if(o.armor.slot===0){f(3,5,10),f(4,4,11);for(const c of[5,6,7])f(c,3,12);f(8,3,4),f(8,11,12),f(9,3,4),f(9,11,12)}else if(o.armor.slot===1){f(3,2,5),f(3,10,13),f(4,2,13),f(5,2,4),f(5,11,13),f(5,6,9);for(let c=6;c<=13;c++)f(c,4,11),c<10&&(f(c,2,3),f(c,12,13))}else if(o.armor.slot===2){for(let c=3;c<=6;c++)f(c,4,11);for(let c=7;c<=13;c++)f(c,4,7),f(c,8,11)}else{for(let c=8;c<=12;c++)f(c,3,7),f(c,9,13);f(13,2,7),f(13,9,14)}o.armor.tier===4&&ut(e,[[7,5],[8,5]],"#8a5ac8")}else if(n===A.DONUT){for(let r=3;r<=12;r++)for(let l=3;l<=12;l++){const a=Math.hypot(l-7.5,r-7.5);a<5&&a>1.8&&ut(e,[[l,r]],a>3.6?"#d89a50":"#ff7ab0")}ut(e,[[5,5],[9,4],[10,8],[6,10],[4,8],[8,11]],"#fff"),ut(e,[[7,4],[11,7],[5,7]],"#4ac0ff")}else if(n===A.DUFF){for(let r=3;r<=13;r++)for(let l=5;l<=10;l++)ut(e,[[l,r]],r<4||r>12?"#b8b8b8":r>=7&&r<=9?"#f4f4f4":"#1a5fc0");ut(e,[[6,8],[7,8],[9,8]],"#d02020")}else if(n===A.SENZU){for(let r=3;r<=12;r++)for(let l=4;l<=11;l++){const a=Math.hypot((l-7.5)*1.25+(r-7.5)*.4,(r-7.5)*.9);a<4.2&&ut(e,[[l,r]],a<2?"#8ae860":"#4fb830")}ut(e,[[6,5],[7,5]],"#d8ffb0")}else if(n===A.DBALL){for(let r=2;r<=13;r++)for(let l=2;l<=13;l++){const a=Math.hypot(l-7.5,r-7.5);a<5.6&&ut(e,[[l,r]],a<3.2?"#ffb020":"#e07808")}ut(e,[[7,6],[8,6],[6,7],[9,7],[7,9],[8,9]],"#d02010"),ut(e,[[7,7],[8,7],[7,8],[8,8]],"#fff0a0"),ut(e,[[5,4],[6,4]],"#fff0c0")}else if(n===A.NETHERITE){for(let r=5;r<=10;r++)for(let l=3;l<=12;l++)ut(e,[[l,r]],r>=9?"#2a2228":(l+r)%4===0?"#6a5a66":"#4e444c");ut(e,[[5,6],[6,6],[10,8]],"#c8a850")}else if(n===A.SCRAP)ut(e,[[6,5],[7,5],[8,5],[5,6],[6,6],[7,6],[8,6],[9,6],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[6,8],[7,8],[8,8],[9,8],[7,9],[8,9]],"#4a3a40"),ut(e,[[6,6],[7,6]],"#8a7480");else if(n===A.LEATHER){for(let r=4;r<=11;r++)for(let l=3;l<=12;l++)ut(e,[[l,r]],(l+r)%3===0?"#a8683a":"#8a5230");ut(e,[[3,4],[12,4],[3,11],[12,11]],"rgba(0,0,0,0)"),ut(e,[[5,7],[7,7],[9,7]],"#d8b080")}else if(o.tool){const r=Tu[o.tool.tier].color,l=Ul(r,.7),a=kh(r);s();const h=o.tool.type;if(h==="pick")ut(e,[[5,2],[6,1],[7,1],[8,1],[9,1],[10,2],[11,3],[12,4],[12,5],[4,3],[3,4],[3,5]],a),ut(e,[[6,2],[7,2],[8,2],[9,2],[10,3],[11,4]],l);else if(h==="axe")ut(e,[[7,2],[8,2],[9,2],[6,3],[7,3],[8,3],[9,3],[10,3],[8,4],[9,4],[10,4],[9,5]],a),ut(e,[[7,4],[8,5],[10,5]],l);else if(h==="shovel")ut(e,[[11,2],[12,2],[10,3],[11,3],[12,3],[13,3],[11,4],[12,4],[13,4],[12,5],[13,5],[12,1],[13,2]],a),ut(e,[[11,4],[12,5]],l);else{for(let f=0;f<9;f++)ut(e,[[5+f,10-f],[6+f,10-f]],f%2?a:l);ut(e,[[12,1],[13,2],[13,1]],a),ut(e,[[4,9],[5,10],[6,11],[3,8],[4,11],[5,12]],"#5a4020")}}else if(n===A.STICK)s(),ut(e,[[12,3]],i);else if(n===A.COAL)ut(e,[[5,5],[6,4],[7,4],[8,4],[9,5],[10,6],[10,7],[9,9],[8,10],[6,10],[5,9],[4,7],[4,6],[6,5],[7,5],[8,5],[9,6],[9,7],[8,9],[7,9],[6,9],[5,8],[5,6],[6,6],[7,6],[8,6],[8,7],[8,8],[7,8],[6,8],[5,7],[6,7],[7,7]],"#262626"),ut(e,[[7,5],[6,6]],"#555");else if(n===A.IRON||n===A.GOLD){const r=n===A.IRON?"#d8d8d8":"#f2d230",l=n===A.IRON?"#9a9a9a":"#b89412";for(let a=5;a<=10;a++)for(let h=3;h<=12;h++)ut(e,[[h,a]],a>=9?l:r);ut(e,[[3,5],[12,5],[3,10],[12,10]],"rgba(0,0,0,0)")}else if(n===A.DIAMOND)ut(e,[[7,3],[8,3],[6,4],[7,4],[8,4],[9,4],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[6,6],[7,6],[8,6],[9,6],[7,7],[8,7],[7,8]],"#5aebe1"),ut(e,[[7,4],[6,5],[7,6]],"#c8fffa"),ut(e,[[9,5],[8,6],[8,7],[7,8]],"#2aa8a0");else if(n===A.APPLE){ut(e,[[5,5],[6,4],[7,5],[8,4],[9,4],[10,5],[4,6],[11,6],[4,7],[11,7],[5,9],[6,10],[9,10],[10,9],[11,8],[4,8]],"#d22");for(let r=5;r<=9;r++)for(let l=5;l<=10;l++)ut(e,[[l,r]],"#e33");ut(e,[[6,5],[6,6]],"#fcc"),ut(e,[[8,2],[9,3]],"#5a3a10"),ut(e,[[9,2],[10,2]],"#3a3")}else if(n===A.PORK||n===A.BEEF){const r=n===A.PORK?"#f0a0a0":"#b83a3a",l=n===A.PORK?"#c87070":"#8a2020";for(let a=4;a<=11;a++)for(let h=3+(a<6?2:0);h<=12-(a>9?2:0);h++)ut(e,[[h,a]],(h+a)%5===0?l:r);ut(e,[[10,5],[11,5],[11,6]],"#f6f0e0")}else if(n===A.STAR)ut(e,[[7,1],[8,1],[7,2],[8,2],[7,3],[8,3],[1,6],[2,6],[3,6],[4,6],[11,6],[12,6],[13,6],[14,6],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[3,6],[5,9],[6,9],[9,9],[10,9],[4,11],[5,11],[10,11],[11,11],[4,12],[11,12],[3,13],[12,13],[6,6],[7,6],[8,6],[9,6],[7,4],[8,4]],"#fff1a8"),ut(e,[[7,6],[8,6],[7,7],[8,7]],"#ffffff"),ut(e,[[5,8],[10,8],[6,9],[9,9]],"#e8c640");else if(n===A.ELYTRA){for(let r=-1;r<=1;r+=2)for(let l=0;l<7;l++)for(let a=0;a<9-l;a++){const h=8+r*(l+1)-(r<0?1:0),f=3+a+Math.floor(l/2);ut(e,[[h,f]],(l+a)%3===0?"#9aa4b0":"#7e8a98")}ut(e,[[7,3],[8,3],[7,4],[8,4],[7,5],[8,5]],"#52606e")}else if(n===A.LIGHTER){for(let r=7;r<=13;r++)for(let l=4;l<=10;l++)ut(e,[[l,r]],r<9?"#9a9a9a":"#6a6a6a");ut(e,[[8,6],[9,5],[9,4],[8,3],[9,2]],"#ff9a28"),ut(e,[[9,4],[9,3]],"#ffe070"),ut(e,[[6,8],[7,8]],"#d8d8d8")}else if(n===A.EYE){for(let r=3;r<=12;r++)for(let l=3;l<=12;l++)Math.hypot(l-7.5,r-7.5)<4.6&&ut(e,[[l,r]],Math.hypot(l-7.5,r-7.5)<2?"#101a14":"#3fae78");ut(e,[[5,5],[6,5],[5,6]],"#a8ffd8")}else if(n===A.PEARL){for(let r=3;r<=12;r++)for(let l=3;l<=12;l++)Math.hypot(l-7.5,r-7.5)<4.6&&ut(e,[[l,r]],Math.hypot(l-7.5,r-7.5)<3?"#1f8f6a":"#0e5a44");ut(e,[[6,5],[7,5],[5,6],[6,6]],"#a8ffd8"),ut(e,[[9,9],[10,8]],"#52d8a8")}else if(n===A.CHICKEN||n===A.COOKED_CHICKEN){const r=n===A.CHICKEN?"#f2c4b0":"#c8883a",l=n===A.CHICKEN?"#d49a84":"#8a5420";for(let a=4;a<=10;a++)for(let h=4;h<=11;h++)Math.hypot(h-7.5,a-7)<4&&ut(e,[[h,a]],(h+a)%4===0?l:r);ut(e,[[10,10],[11,11],[12,12],[12,11],[11,12]],"#f6f0e0")}else if(n===A.COOKED_PORK||n===A.STEAK){const r=n===A.STEAK?"#8a4a22":"#c8884c",l=n===A.STEAK?"#5e2e12":"#a06030";for(let a=4;a<=11;a++)for(let h=3+(a<6?2:0);h<=12-(a>9?2:0);h++)ut(e,[[h,a]],(h+a)%4===0?l:r);ut(e,[[10,5],[11,5],[11,6]],"#f6f0e0"),ut(e,[[5,6],[6,7],[7,8],[8,9]],l)}else ut(e,[[7,7]],"#fff");return t}function Pu(n){if(Ol.has(n))return Ol.get(n);const t=Te[n]&&!Te[n].flat?Kv(n):jv(n);return Ol.set(n,t),t}function Iu(n){return Il.has(n)||Il.set(n,Pu(n).toDataURL()),Il.get(n)}function Ec(n){if(!Nl.has(n)){const t=new Ui(Pu(n));t.magFilter=_e,t.minFilter=_e,t.generateMipmaps=!1,t.colorSpace=oi,Nl.set(n,t)}return Nl.get(n)}function zl(n,t,e){const i=document.createElement("canvas");i.width=9,i.height=9;const s=i.getContext("2d");return n.forEach((o,r)=>[...o].forEach((l,a)=>{const h=t(l,a);h&&(s.fillStyle=h,s.fillRect(a,r,1,1))})),i.toDataURL()}const $v=[".##...##.","#RR#.#RR#","#RHRRRRR#","#RRRRRRR#",".#RRRRR#.","..#RRR#..","...#R#...","....#....","........."],Zv=["......##.",".....#CC#","....#CHC#","...#CCC#.","..#CCC#..",".#CCC#...","#WW##....","#WW#.....",".##......"],Jv=["..#####..",".#BBBBB#.","#BHBBBBB#","#BHBBBBB#","#BBBBBBB#","#BBBBBBB#",".#BBBBB#.","..#####..","........."];function Qv(){const n=i=>zl($v,(s,o)=>{if(s===".")return null;const r=i==="empty"||i==="half"&&o>4;return s==="#"?"#1a0505":r?"#4a3a3a":s==="H"?"#ff9c9c":"#e02222"}),t=i=>zl(Zv,(s,o)=>s==="."?null:s==="#"?"#2a1405":s==="W"?i==="empty"?"#555":"#f4efe4":i==="empty"||i==="half"&&o>4?"#4a3d30":s==="H"?"#e8a05a":"#c8782b"),e=i=>zl(Jv,s=>s==="."?null:s==="#"?"#0a2a5a":i==="empty"?"rgba(120,170,230,0.25)":s==="H"?"#d8f0ff":"#5aa8f0");return{heart:{full:n("full"),half:n("half"),empty:n("empty")},food:{full:t("full"),half:t("half"),empty:t("empty")},bubble:{full:e("full"),empty:e("empty")}}}function t_(n){const t=document.createElement("canvas");t.width=t.height=16;const e=ys[n];return t.getContext("2d").drawImage(Sa,e*16,0,16,16,0,0,16,16),t.toDataURL()}const ti=(n,t)=>new xi(t?{color:n,map:t}:{color:n});function qr(n){const t=document.createElement("canvas");t.width=t.height=8,n(t.getContext("2d"));const e=new Ui(t);return e.magFilter=_e,e.minFilter=_e,e.generateMipmaps=!1,e.colorSpace=oi,e}function Yr(n,t,e,i,s,o,r){const l=new we;l.position.set(s,o,r);const a=new _t(new Kt(n,t,e),i);return a.position.y=-t/2,l.add(a),l}class Nu{constructor(t,e={}){const i="#e0ac8c",s="#3a2412",o=e.shirt!==void 0?e.shirt:2794936,r=3817372,l=qr(p=>{p.fillStyle=i,p.fillRect(0,0,8,8),p.fillStyle=s,p.fillRect(0,0,8,2),p.fillRect(0,2,1,2),p.fillRect(7,2,1,2),p.fillStyle="#fff",p.fillRect(1,3,2,1),p.fillRect(5,3,2,1),p.fillStyle="#3a56c8",p.fillRect(2,3,1,1),p.fillRect(5,3,1,1),p.fillStyle="#a0603c",p.fillRect(3,5,2,1)}),a=qr(p=>{p.fillStyle=s,p.fillRect(0,0,8,8)}),h=qr(p=>{p.fillStyle=i,p.fillRect(0,0,8,8),p.fillStyle=s,p.fillRect(0,0,8,2)}),f=qr(p=>{p.fillStyle=s,p.fillRect(0,0,8,8)}),c=ti(14724236);this.group=new we;const d=new we;this.group.add(d),this.head=new we,this.head.position.set(0,1.5,0);const u=new _t(new Kt(.5,.5,.5),[ti(16777215,h),ti(16777215,h),ti(16777215,a),c,ti(16777215,l),ti(16777215,f)]);u.position.y=.25,this.head.add(u),d.add(this.head);const g=new _t(new Kt(.5,.75,.25),ti(o));g.position.y=1.125,d.add(g),this.legL=Yr(.25,.75,.25,ti(r),-.125,.75,0),this.legR=Yr(.25,.75,.25,ti(r),.125,.75,0),this.legL.children[0].material=ti(r),d.add(this.legL,this.legR),this.armL=Yr(.22,.72,.22,[ti(o),ti(o),ti(o),c,ti(o),ti(o)],-.36,1.48,0),this.armR=Yr(.22,.72,.22,[ti(o),ti(o),ti(o),c,ti(o),ti(o)],.36,1.48,0),d.add(this.armL,this.armR),this.itemMat=new ce({transparent:!0,side:Ri,alphaTest:.1}),this.item=new _t(new kn(.55,.55),this.itemMat),this.item.position.set(0,-.68,.22),this.item.rotation.set(0,0,0),this.armR.add(this.item),this.item.visible=!1,this.heldId=-1;const x=()=>new xi({color:16777215});this.armorMats=[x(),x(),x(),x()];const m=(p,M,b,v,D,E,w,C)=>{const y=new _t(new Kt(p,M,b),v);return y.position.set(E,w,C),y.visible=!1,D.add(y),y};this.armorMeshes=[[m(.58,.58,.58,this.armorMats[0],this.head,0,.25,0)],[m(.56,.78,.31,this.armorMats[1],d,0,1.125,0),m(.26,.5,.26,this.armorMats[1],this.armL,0,-.2,0),m(.26,.5,.26,this.armorMats[1],this.armR,0,-.2,0)],[m(.52,.28,.3,this.armorMats[2],d,0,.78,0),m(.28,.5,.28,this.armorMats[2],this.legL,0,-.25,0),m(.28,.5,.28,this.armorMats[2],this.legR,0,-.25,0)],[m(.29,.28,.31,this.armorMats[3],this.legL,0,-.61,.01),m(.29,.28,.31,this.armorMats[3],this.legR,0,-.61,.01)]],this.armorKey="",this.t=0,t.add(this.group),this.group.traverse(p=>{p.isMesh&&(p.castShadow=!0,p.receiveShadow=!0)}),this.group.visible=!1}setArmor(t){const e=t.map(i=>i?i.id:0).join(",");e!==this.armorKey&&(this.armorKey=e,t.forEach((i,s)=>{const o=i&&Fe[i.id]&&Fe[i.id].armor;for(const r of this.armorMeshes[s])r.visible=!!o;if(o){const r=Sc[o.tier].color;this.armorMats[s].color.setRGB(r[0]/255,r[1]/255,r[2]/255)}}))}setHeld(t){t!==this.heldId&&(this.heldId=t,this.item.visible=!!t,t&&(this.itemMat.map=Ec(t),this.itemMat.needsUpdate=!0))}update(t,e,i,s){this.group.position.copy(e.pos),this.group.rotation.y=e.yaw+Math.PI;const o=Math.hypot(e.vel.x,e.vel.z),r=o>.3&&(e.onGround||e.inWater);this.t+=t*(r?4+o*1.2:0);const l=r?Math.sin(this.t)*.9:0;this.legL.rotation.x=l,this.legR.rotation.x=-l,this.armL.rotation.x=-l*.8;let a=l*.8;i>0?a=-Math.sin(Math.min(1,i)*Math.PI)*1.8-.5:this.heldId&&(a=-.5+l*.3),this.armR.rotation.x=a,this.head.rotation.x=-e.pitch;const h=Math.sin(performance.now()/700)*.02;this.armL.rotation.z=-.04-h,this.armR.rotation.z=.04+h,e.flying&&(this.group.rotation.x=0)}}const e_={clear:0,rain:.65,storm:1},Bh={clear:"Despejado",rain:"Lluvia",storm:"Tormenta"},gi=(n,t)=>n+Math.random()*(t-n),Io=1800,yi=22;class i_{constructor(t,e){this.scene=t,this.hooks=e,this.state="clear",this.timer=gi(90,240),this.intensity=0,this.t=Math.random()*100,this.wind={x:0,z:0,s:.12},this.lightningT=6,this.bolts=[],this.thunder=[],this.boss=!1,this.pos=new Float32Array(Io*3);for(let o=0;o<Io;o++)this.pos[o*3]=gi(-yi,yi),this.pos[o*3+1]=gi(-8,22),this.pos[o*3+2]=gi(-yi,yi);const i=new ii;this.linePos=new Float32Array(Io*6),i.setAttribute("position",new Ei(this.linePos,3)),this.rain=new mu(i,new pc({color:11453674,transparent:!0,opacity:.55,fog:!1,depthWrite:!1})),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain);const s=new ii;this.ptPos=new Float32Array(Io*3),s.setAttribute("position",new Ei(this.ptPos,3)),this.snow=new mc(s,new Va({color:16777215,size:3.5,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1})),this.snow.frustumCulled=!1,this.snow.visible=!1,t.add(this.snow),this.boltMat=new ce({color:15922431,fog:!1})}set(t){this.state=t,this.timer=t==="clear"?gi(120,360):t==="rain"?gi(90,200):gi(80,170)}cycle(){const t=["clear","rain","storm"];return this.set(t[(t.indexOf(this.state)+1)%3]),this.state}next(){const t=Math.random();return this.state==="clear"?t<.65?"rain":t<.85?"storm":"clear":this.state==="rain"?t<.55?"clear":"storm":t<.5?"rain":"clear"}toJSON(){return{state:this.state,timer:this.timer,intensity:this.intensity}}load(t){t&&(this.state=t.state,this.timer=t.timer,this.intensity=t.intensity)}update(t,e,i,s,o){const r=this.hooks.world();this.t+=t,this.timer-=t,this.timer<=0&&this.set(this.next());const l=e_[this.state];this.intensity+=Math.sign(l-this.intensity)*Math.min(Math.abs(l-this.intensity),t*.08);const a=this.intensity,h=Math.sin(this.t*.02)*1.6+.8,f=.55+.45*Math.sin(this.t*.35)*Math.sin(this.t*.13+1),d=.12+((this.state==="storm"?1:this.state==="rain"?.45:.12)-.12)*Math.min(1,a*1.5+(this.state==="clear",0))*f;this.wind.s+=(d-this.wind.s)*Math.min(1,t*1.5),this.wind.x=Math.cos(h)*this.wind.s,this.wind.z=Math.sin(h)*this.wind.s;const u=i.position,g=a>.04&&!o;if(this.rain.visible=g&&!s,this.snow.visible=g&&s,g){const m=Math.floor(Io*Math.min(1,a*(this.state==="storm"?1:.8))),p=s?2.4:26,M=s?1.5:9,b=this.wind.x*M,v=this.wind.z*M;for(let D=0;D<m;D++){let E=this.pos[D*3]+b*t,w=this.pos[D*3+1]-p*t*(s?1:.85+D%7*.05),C=this.pos[D*3+2]+v*t;s&&(E+=Math.sin(this.t*1.3+D)*t*.6,C+=Math.cos(this.t*1.1+D*.7)*t*.6),E>yi?E-=2*yi:E<-yi&&(E+=2*yi),C>yi?C-=2*yi:C<-yi&&(C+=2*yi);const y=u.x+E,S=u.z+C,P=r?r.topY(Math.floor(y),Math.floor(S)):-1;if((w+u.y<P+1||w<-14)&&(w=gi(10,24),E=gi(-yi,yi),C=gi(-yi,yi)),this.pos[D*3]=E,this.pos[D*3+1]=w,this.pos[D*3+2]=C,s)this.ptPos[D*3]=u.x+E,this.ptPos[D*3+1]=u.y+w,this.ptPos[D*3+2]=u.z+C;else{const F=D*6,H=.9;this.linePos[F]=u.x+E,this.linePos[F+1]=u.y+w,this.linePos[F+2]=u.z+C,this.linePos[F+3]=u.x+E-b*.06,this.linePos[F+4]=u.y+w+H,this.linePos[F+5]=u.z+C-v*.06}}s?(this.snow.geometry.setDrawRange(0,m),this.snow.geometry.attributes.position.needsUpdate=!0):(this.rain.geometry.setDrawRange(0,m*2),this.rain.geometry.attributes.position.needsUpdate=!0),this.rain.material.opacity=.35+.3*a}this.state==="storm"&&a>.7&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=this.boss?gi(2.5,6):gi(4,14),this.strike(e)));const x=this.hooks.sky();x.wet=a,x.flash=Math.max(0,x.flash-t*2.2);for(let m=this.bolts.length-1;m>=0;m--){const p=this.bolts[m];p.life-=t,p.group.visible=p.life>.12||Math.floor(p.life*40)%2===0,p.life<=0&&(this.scene.remove(p.group),p.group.traverse(M=>M.geometry&&M.geometry.dispose()),this.bolts.splice(m,1))}for(let m=this.thunder.length-1;m>=0;m--)this.thunder[m].delay-=t,this.thunder[m].delay<=0&&(this.hooks.sound("thunder",this.thunder[m].vol),this.thunder.splice(m,1))}strike(t,e,i){const s=this.hooks.world(),o=Math.random()*Math.PI*2,r=e?6:gi(18,110),l=Math.floor(i?i.x+gi(-2,2):t.pos.x+Math.cos(o)*r),a=Math.floor(i?i.z+gi(-2,2):t.pos.z+Math.sin(o)*r),h=s.topY(l,a),f=h>=0,c=f?h+1:30,d=Math.hypot(l-t.pos.x,a-t.pos.z);if(this.hooks.sky().flash=Math.min(1,1.15-d/220),this.thunder.push({delay:d/55,vol:Math.max(.25,1-d/150)}),!f||d>150)return;const u=new we;let g=l+.5,x=a+.5,m=c+85;const p=16;for(let M=1;M<=p;M++){const b=c+85-(c+85-c)*M/p,v=3.2*(1-M/p),D=M===p?l+.5:l+.5+gi(-v,v),E=M===p?a+.5:a+.5+gi(-v,v),w=new I(g,m,x),C=new I(D,b,E),y=w.distanceTo(C),S=new _t(new _n(.16,.16,y,4),this.boltMat);S.position.copy(w).add(C).multiplyScalar(.5),S.quaternion.setFromUnitVectors(new I(0,1,0),C.clone().sub(w).normalize()),u.add(S),g=D,m=b,x=E}this.scene.add(u),this.bolts.push({group:u,life:.45}),this.hooks.burst(l+.5,c+.3,a+.5),this.hooks.strikeMobs(l+.5,a+.5),d<3.5&&this.hooks.hurtPlayer(8)}}function Rs(n,t,e,i=28){const s={onGround:!1,hitX:!1,hitZ:!1};t.vel.y=Math.max(-50,t.vel.y-i*e);const o=()=>n.bodyHits(t.pos.x,t.pos.y,t.pos.z,t.hw,t.h);for(const r of["x","z","y"]){const l=t.vel[r]*e;l&&(t.pos[r]+=l,o()&&(t.pos[r]-=l,r==="y"&&t.vel.y<0&&(s.onGround=!0),r==="x"&&(s.hitX=!0),r==="z"&&(s.hitZ=!0),t.vel[r]=0))}return s}class n_{constructor(t,e){this.scene=t,this.world=e,this.list=[]}spawn(t,e,i,s,o=1,r=!0){const l=new Ga({map:Ec(s),transparent:!0,alphaTest:.1}),a=new uc(l),h=Te[s]?.32:.42;a.scale.set(h,h,h),this.scene.add(a);const f=Math.random()*Math.PI*2;this.list.push({id:s,n:o,sprite:a,base:h,age:0,hw:.12,h:.25,pos:new I(t,e,i),vel:new I(r?Math.cos(f)*1.6:0,r?4:0,r?Math.sin(f)*1.6:0)})}update(t,e,i,s){for(let o=this.list.length-1;o>=0;o--){const r=this.list[o];r.age+=t,Rs(this.world,r,t,22).onGround&&(r.vel.x*=.8,r.vel.z*=.8);const a=Math.sin(r.age*3)*.05+.22;r.sprite.position.set(r.pos.x,r.pos.y+a,r.pos.z);const h=e.pos.x-r.pos.x,f=e.pos.z-r.pos.z,c=e.pos.y+.9-r.pos.y,d=Math.hypot(h,c,f);if(r.age>.6&&d<2.2&&i.canAdd(r.id)&&(r.vel.x=h*6,r.vel.z=f*6,r.vel.y=Math.max(r.vel.y,c*5),r.pos.x+=h*t*6,r.pos.z+=f*t*6,d<.9)){const u=i.add(r.id,r.n);if(u===0){this.remove(o),s(r);continue}r.n=u}(r.age>300||r.pos.y<-10)&&this.remove(o)}}remove(t){const e=this.list[t];this.scene.remove(e.sprite),e.sprite.material.dispose(),this.list.splice(t,1)}clear(){for(;this.list.length;)this.remove(0)}}class s_{constructor(t,e){this.world=e,this.pool=[];const i=new Kt(.12,.12,.12);for(let s=0;s<90;s++){const o=new _t(i,new ce({color:16777215}));o.visible=!1,t.add(o),this.pool.push({mesh:o,life:0,vel:new I})}this.next=0}burst(t,e,i,s,o=10,r=3){for(let l=0;l<o;l++){const a=this.pool[this.next++%this.pool.length];a.life=.5+Math.random()*.4,a.mesh.visible=!0,a.mesh.position.set(t+(Math.random()-.5),e+(Math.random()-.5),i+(Math.random()-.5)),a.mesh.material.color.setRGB(s[0]*(.7+Math.random()*.3),s[1]*(.7+Math.random()*.3),s[2]*(.7+Math.random()*.3)),a.vel.set((Math.random()-.5)*r,Math.random()*r*.9,(Math.random()-.5)*r)}}blockBreak(t,e,i,s){const o=Te[s];o&&this.burst(t+.5,e+.5,i+.5,vu(o.tiles[2]),14,3.2)}update(t){for(const e of this.pool)if(!(e.life<=0)){if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.vel.y-=16*t,e.mesh.position.addScaledVector(e.vel,t)}}}const $=16,re=128,ri=30,si=(n,t)=>(n+32768)*65536+(t+32768),sd=n=>Math.floor(n/65536)-32768,od=n=>n%65536-32768,ca=[{dir:[-1,0,0],shade:.9,ax:0,corners:[{p:[0,1,0],uv:[0,1]},{p:[0,0,0],uv:[0,0]},{p:[0,1,1],uv:[1,1]},{p:[0,0,1],uv:[1,0]}]},{dir:[1,0,0],shade:.9,ax:0,corners:[{p:[1,1,1],uv:[0,1]},{p:[1,0,1],uv:[0,0]},{p:[1,1,0],uv:[1,1]},{p:[1,0,0],uv:[1,0]}]},{dir:[0,-1,0],shade:.75,ax:1,bottom:!0,corners:[{p:[1,0,1],uv:[1,0]},{p:[0,0,1],uv:[0,0]},{p:[1,0,0],uv:[1,1]},{p:[0,0,0],uv:[0,1]}]},{dir:[0,1,0],shade:1,ax:1,top:!0,corners:[{p:[0,1,1],uv:[1,1]},{p:[1,1,1],uv:[0,1]},{p:[0,1,0],uv:[1,0]},{p:[1,1,0],uv:[0,0]}]},{dir:[0,0,-1],shade:.82,ax:2,corners:[{p:[1,0,0],uv:[0,0]},{p:[0,0,0],uv:[1,0]},{p:[1,1,0],uv:[0,1]},{p:[0,1,0],uv:[1,1]}]},{dir:[0,0,1],shade:.82,ax:2,corners:[{p:[0,0,1],uv:[0,0]},{p:[1,0,1],uv:[1,0]},{p:[0,1,1],uv:[0,1]},{p:[1,1,1],uv:[1,1]}]}];for(const n of ca){n.tan=[0,1,2].filter(t=>t!==n.ax);for(const[t,e]of[["u",0],["v",1]])for(const i of n.tan){const s=n.corners.every(r=>r.uv[e]===r.p[i]),o=n.corners.every(r=>r.uv[e]===1-r.p[i]);(s||o)&&(n[t+"A"]=i,n[t+"I"]=o)}}const rd=[.5,.68,.84,1],Wo=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Ln(n,t,e){const i=fi(n*.0022,t*.0022,e,4),s=fi(n*.0055,t*.0055,e+31,3),o=1-Math.abs(2*fi(n*.011,t*.011,e+37,3)-1),r=fi(n*.013,t*.013,e+7,3),l=fi(n*.05,t*.05,e+9,2);let a,h=0;if(i<.4)a=ri-2-(.4-i)*80+l*3;else{const u=Math.min(1,(i-.4)/.5);a=ri+1+u*10+r*12+l*3,h=Wo(.52,.78,s)*Wo(.45,.6,i),a+=h*(o*62+14)}if(i>=.4&&h<.5){const u=Math.abs(fi(n*.0032+11,t*.0032-7,e+61,2)-.5);if(u<.016){const g=Wo(.016,.004,u);a=a*(1-g)+(ri-2)*g}}a=Math.max(6,Math.min(re-8,Math.floor(a)));const f=fi(n*.0035,t*.0035,e+500,2),c=fi(n*.004,t*.004,e+900,2);let d;return a<=ri-1?d="ocean":h>.3?d="mountains":f<.34?d="snow":f>.64?d=c>.55?"jungle":"desert":d=f>.55&&c>.6?"jungle":"plains",{h:a,biome:d,m:h,t:f,hm:c}}const ad=(n,t,e)=>Ln(n,t,e).h;function ld(n,t,e){return Ln(n,t,e).biome}function wc(){return Array.from({length:10},(n,t)=>{const e=t/10*Math.PI*2;return{x:Math.round(Math.cos(e)*36),z:Math.round(Math.sin(e)*36),top:78+t%5*7}})}class o_{constructor(t,e,i=1337,s=new Map,o="overworld"){this.dim=o,this.scene=t,this.materials=e,this.seed=i,this.saved=s,this.chunks=new Map,this.tops=new Map,this.meshes=new Map,this.dirty=new Set,this.modified=new Set,this.unsaved=new Set,this.unloadT=0,this.torches=new Map,this._lm=null,this.onChunkMeshed=null}useWorkers(t){this.pool=t,this.inflightGen=new Set,this.inflightMesh=new Set,this.jobTok=new Map,this.tokN=0,this.lastPcx=0,this.lastPcz=0}idx(t,e,i){return(e*$+i)*$+t}generateChunk(t,e){const i=si(t,e);if(this.saved.has(i)){let c=new Uint8Array(this.saved.get(i));if(c.length!==$*$*re){const d=new Uint8Array($*$*re);d.set(c.subarray(0,Math.min(c.length,d.length))),c=d}return this.chunks.set(i,c),this.modified.add(i),this.computeTops(i,c),this.scanTorches(i,c),c}if(this.kind==="oneblock"&&this.dim==="overworld"){const c=new Uint8Array($*$*re);return t===0&&e===0&&(c[this.idx(0,64,0)]=_.GRASS),this.chunks.set(i,c),this.computeTops(i,c),c}if(this.dim==="nether")return this.genNether(t,e,i);if(this.dim==="end")return this.genEnd(t,e,i);const s=this.seed,o=new Uint8Array($*$*re),r=t*$,l=e*$;for(let c=0;c<$;c++)for(let d=0;d<$;d++){const u=r+d,g=l+c,x=Ln(u,g,s),m=x.h,p=x.biome;let M=_.GRASS,b=_.DIRT;p==="ocean"||m<=ri+1||p==="desert"?(M=_.SAND,b=_.SAND):p==="snow"?M=_.SNOW:p==="mountains"&&(m>92?(M=_.SNOW,b=_.SNOW):m>64&&(M=_.STONE,b=_.STONE));for(let v=0;v<=m&&v<re;v++){let D=_.STONE;if(v===m)D=M;else if(v>=m-3)D=b;else{const E=zt(u*31+v,g*17-v,s+77+v);v<64&&E<.025?D=_.COAL_ORE:v<48&&E>.975&&E<.99?D=_.IRON_ORE:v<28&&E>.99&&E<.996?D=_.GOLD_ORE:v<16&&E>.996&&(D=_.DIAMOND_ORE)}if((v===0||v===1&&zt(u,g,s+3)<.5)&&(D=_.BEDROCK),v>2&&v<m-1&&D!==_.BEDROCK){const E=$s(u*.045,v*.07,g*.045,s+11),w=$s(u*.045+50,v*.07+50,g*.045+50,s+13),C=$s(u*.025,v*.045,g*.025,s+17);(Math.abs(E-.5)<.055&&Math.abs(w-.5)<.055||C>.8)&&(D=jt)}o[this.idx(d,v,c)]=D}for(let v=m+1;v<=ri;v++)o[this.idx(d,v,c)]=_.WATER}const a=(c,d,u,g,x)=>{const m=c-r,p=u-l;if(m<0||p<0||m>=$||p>=$||d>=re||d<0)return;const M=this.idx(m,d,p);x&&o[M]!==jt||(o[M]=g)},h=this.villagesNear(r,l),f=this.structuresNear(r,l);for(let c=l-3;c<l+$+3;c++)for(let d=r-3;d<r+$+3;d++){const u=zt(d,c,s+99);if(u>.06)continue;const g=Ln(d,c,s),x=g.h,m=g.biome;if(x<=ri+1||m==="ocean"||m==="mountains"||h.some(E=>Math.abs(E.x-d)<26&&Math.abs(E.z-c)<26)||f.some(E=>Math.abs(E.x-d)<14&&Math.abs(E.z-c)<14))continue;if(m==="desert"){if(u<.004){const E=1+Math.floor(zt(d,c,s+6)*3);for(let w=1;w<=E;w++)a(d,x+w,c,_.CACTUS,!1)}continue}const p=fi(d*.012,c*.012,s+800,2)>.58;if(u>(m==="jungle"?.055:p?.03:m==="snow"?.007:.005))continue;const b=m==="jungle",v=b?8+Math.floor(zt(d,c,s+5)*6):4+Math.floor(zt(d,c,s+5)*3),D=b?3:2;for(let E=-2;E<=1;E++){const w=E<=-1?D:D-1;for(let C=-w;C<=w;C++)for(let y=-w;y<=w;y++)w>=2&&Math.abs(y)===w&&Math.abs(C)===w||a(d+y,x+v+E,c+C,_.LEAVES,!0)}for(let E=1;E<=v;E++)a(d,x+E,c,_.LOG,!1)}for(const c of h)this.buildVillage(c,a);{const c={data:o,x0:r,z0:l};for(const d of f)this.buildStructure(d,c)}return this.chunks.set(i,o),this.computeTops(i,o),this.scanTorches(i,o),o}structureAt(t,e){const i="s"+t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);const s=this.seed;let o=null;if(zt(t,e,s+7700)<.75){const r=t*176+36+Math.floor(zt(t,e,s+7701)*104),l=e*176+36+Math.floor(zt(t,e,s+7702)*104),a=Ln(r,l,s);if(a.biome!=="ocean"&&a.biome!=="mountains"&&a.h>ri+1&&a.h<ri+26){const h=zt(t,e,s+7703);let f=null;a.biome==="desert"?f=h<.6?"pyramid":"ruin":a.biome==="jungle"?f=h<.6?"jungle":"ruin":a.biome==="snow"?f=h<.6?"igloo":"ruin":f=h<.5?"outpost":"ruin";let c=!1;for(let d=Math.floor((r-70)/128);d<=Math.floor((r+70)/128);d++)for(let u=Math.floor((l-70)/128);u<=Math.floor((l+70)/128);u++){const g=this.villageAt(d,u);g&&Math.abs(g.x-r)<70&&Math.abs(g.z-l)<70&&(c=!0)}c||(o={type:f,x:r,z:l,H:a.h})}}return this.vcache.set(i,o),o}structuresNear(t,e){const i=[];for(let s=Math.floor((t-24)/176);s<=Math.floor((t+$+24)/176);s++)for(let o=Math.floor((e-24)/176);o<=Math.floor((e+$+24)/176);o++){const r=this.structureAt(s,o);r&&Math.abs(r.x-t-8)<36&&Math.abs(r.z-e-8)<36&&i.push(r)}return i}_mix(t,e,i,s,o,r,l,a,h,f,c){const d=Math.max(Math.min(e,o),t.x0),u=Math.min(Math.max(e,o),t.x0+$-1),g=Math.max(Math.min(s,l),t.z0),x=Math.min(Math.max(s,l),t.z0+$-1);for(let m=Math.max(0,Math.min(i,r));m<=Math.min(re-1,Math.max(i,r));m++)for(let p=g;p<=x;p++)for(let M=d;M<=u;M++)t.data[this.idx(M-t.x0,m,p-t.z0)]=zt(M*3+m,p*5-m,this.seed+c)<f?h:a}buildStructure(t,e){const i=(h,f,c,d,u,g,x)=>this._fill(e,t.x+h,t.H+f,t.z+c,t.x+d,t.H+u,t.z+g,x),s=(h,f,c,d,u,g,x,m,p,M)=>this._mix(e,t.x+h,t.H+f,t.z+c,t.x+d,t.H+u,t.z+g,x,m,p,M),o=_.SANDSTONE,r=_.CHEST,l=_.TORCH,a=jt;if(t.type==="pyramid"){i(-10,-8,-10,10,0,10,o);for(let h=0;h<=10;h++)i(-10+h,1+h,-10+h,10-h,1+h,10-h,o);i(-7,1,-7,7,8,7,a),i(-1,1,6,1,3,13,a),i(-2,0,11,2,0,13,o),i(-2,-3,-2,2,0,2,a),i(0,-4,0,0,-4,0,_.GOLD_BLOCK);for(const[h,f]of[[-2,0],[2,0],[0,-2],[0,2]])i(h,-3,f,h,-3,f,r);for(const[h,f]of[[-6,-6],[6,-6],[-6,6],[6,6]])i(h,1,f,h,4,f,o),i(h,5,f,h,5,f,l);for(const h of[-4,0,4])i(h,1,-6,h,1,-6,_.CHEST)}else if(t.type==="jungle"){s(-7,-5,-6,7,-1,6,_.COBBLE,_.MOSSY_COBBLE,.4,1),s(-7,0,-6,7,5,6,_.COBBLE,_.MOSSY_COBBLE,.55,2),i(-6,1,-5,6,4,5,a),s(-5,6,-4,5,10,4,_.COBBLE,_.MOSSY_COBBLE,.6,3),i(-4,6,-3,4,9,3,a),s(-3,11,-2,3,12,2,_.COBBLE,_.MOSSY_COBBLE,.6,4),i(-1,1,5,1,3,7,a),s(-3,0,7,3,0,9,_.COBBLE,_.MOSSY_COBBLE,.5,5),i(-4,1,-4,-4,1,-4,r),i(4,1,-4,4,1,-4,r),i(0,6,-3,0,6,-3,r);for(const[h,f]of[[-5,-4],[5,-4],[-5,4],[5,4]])i(h,2,f,h,2,f,l);for(let h=0;h<5;h++)i(-3,1,-2+h,-3,1+h,-2+h,_.MOSSY_COBBLE);i(-3,5,-2,-3,5,2,a)}else if(t.type==="igloo"){for(let h=-5;h<=5;h++)for(let f=-5;f<=5;f++)for(let c=-3;c<=5;c++){const d=Math.hypot(h,c,f);let u=-1;c<0?Math.hypot(h,f)<=4.2&&(u=_.SNOW):d<=3.1?u=c===0?_.PLANKS:a:d<=4.3&&(u=_.SNOW),u>=0&&i(h,c,f,h,c,f,u)}i(-2,0,2,2,3,7,_.SNOW),i(-1,0,2,1,0,7,_.PLANKS),i(-1,1,2,1,2,7,a),i(-2,1,-2,-2,1,-2,_.TABLE),i(2,1,-2,2,1,-2,_.FURNACE),i(0,1,2,0,1,2,r),i(0,1,-3,0,1,-3,l),i(2,1,2,2,1,2,l)}else if(t.type==="outpost"){i(-4,-5,-4,4,0,4,_.COBBLE),i(-3,1,-3,3,22,3,a);for(let h=1;h<=17;h++)i(-3,h,-3,3,h,-3,_.PLANKS),i(-3,h,3,3,h,3,_.PLANKS),i(-3,h,-3,-3,h,3,_.PLANKS),i(3,h,-3,3,h,3,_.PLANKS);for(const[h,f]of[[-3,-3],[3,-3],[-3,3],[3,3]])i(h,1,f,h,18,f,_.LOG);for(const h of[4,10,15])for(const[f,c]of[[0,-3],[0,3],[-3,0],[3,0]])i(f===0?-1:f,h,c===0?-1:c,f===0?1:f,h+1,c===0?1:c,_.GLASS);i(-1,1,3,1,3,3,a);for(const h of[1,7,13]){i(-2,h+6,-2,2,h+6,2,_.PLANKS);for(let f=0;f<5;f++)i(-2+f,h+1,-2,-2+f,h+1+f,-2,_.PLANKS);i(-2,h+6,-2,0,h+6,-2,a),i(-2,h+6,-1,-1,h+6,-1,a)}i(-4,19,-4,4,19,4,_.PLANKS);for(const[h,f]of[[-4,-4],[4,-4],[-4,4],[4,4]])i(h,20,f,h,21,f,_.LOG),i(h,22,f,h,22,f,l);i(-3,20,-3,-3,20,3,_.PLANKS),i(3,20,-3,3,20,3,_.PLANKS),i(-3,20,-3,3,20,-3,_.PLANKS),i(-3,20,3,3,20,3,_.PLANKS),i(2,1,2,2,1,2,r),i(-2,14,2,-2,14,2,r),i(2,8,-1,2,8,-1,r),i(0,18,0,0,18,0,l)}else if(t.type==="ruin"){for(let h=0;h<4;h++)for(let f=0;f<5;f++)(h===0||h===3||f===0||f===4)&&!((h===0||h===3)&&(f===0||f===4))&&zt(t.x+h*7,t.z+f*11,this.seed+7710)<.72&&i(h,f,0,h,f,0,_.OBSIDIAN);for(let h=0;h<9;h++){const f=Math.floor(zt(t.x+h,t.z,this.seed+7711)*9)-4,c=Math.floor(zt(t.x,t.z+h,this.seed+7712)*7)-3;i(f,0,c,f,0,c,h%3?_.NETHERRACK:_.MOSSY_COBBLE)}i(-2,1,1,-2,1,1,_.GOLD_BLOCK),i(2,0,2,2,0,2,r),i(1,0,3,1,0,3,_.NETHERRACK)}}villageAt(t,e){const i=t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);const s=this.seed;let o=null;if(zt(t,e,s+444)<.3){const r=t*128+28+Math.floor(zt(t,e,s+445)*72),l=e*128+28+Math.floor(zt(t,e,s+446)*72),a=Ln(r,l,s);a.biome!=="ocean"&&a.biome!=="mountains"&&a.h>ri+1&&a.h<ri+20&&[[12,0],[-12,0],[0,12],[0,-12],[10,10],[-10,-10]].every(([f,c])=>{const d=Ln(r+f,l+c,s);return Math.abs(d.h-a.h)<=3&&d.biome!=="ocean"})&&(o={x:r,z:l,H:a.h,biome:a.biome})}return this.vcache.set(i,o),o}villagesNear(t,e){const i=[];for(let s=Math.floor((t-40)/128);s<=Math.floor((t+$+40)/128);s++)for(let o=Math.floor((e-40)/128);o<=Math.floor((e+$+40)/128);o++){const r=this.villageAt(s,o);r&&i.push(r)}return i}buildVillage(t,e){const i=this.seed,s=t.H,o=t.biome==="desert"?_.SAND:_.PLANKS,r=_.PLANKS;for(let u=-2;u<=2;u++)for(let g=-2;g<=2;g++){const x=Math.abs(u)===2||Math.abs(g)===2;for(let m=s-3;m<=s;m++)e(t.x+u,m,t.z+g,x?_.COBBLE:_.WATER,!1);for(let m=s+1;m<=s+6;m++)e(t.x+u,m,t.z+g,0,!1);x&&e(t.x+u,s+1,t.z+g,_.COBBLE,!1)}for(const[u,g]of[[-2,-2],[2,-2],[-2,2],[2,2]])for(let x=s+2;x<=s+4;x++)e(t.x+u,x,t.z+g,_.LOG,!1);for(let u=-2;u<=2;u++)for(let g=-2;g<=2;g++)e(t.x+u,s+5,t.z+g,_.PLANKS,!1);[[-14,-8],[14,-8],[-14,10],[14,10],[0,-16],[0,17],[-16,-24],[16,-24]].forEach(([u,g],x)=>{if(zt(t.x+u,t.z+g,i+5)<(x>5?.45:.12)&&x>3)return;const m=t.x+u,p=t.z+g,M=Math.abs(u)>Math.abs(g)?-Math.sign(u):0,b=M?0:-Math.sign(g);for(let v=0;v<40;v++){const D=m+M*(4+v),E=p+b*(4+v);if(Math.abs(D-t.x)<3&&Math.abs(E-t.z)<3)break;e(D,s,E,_.COBBLE,!1);for(let w=s+1;w<=s+3;w++)e(D,w,E,0,!1)}for(let v=-4;v<=4;v++)for(let D=-4;D<=4;D++){const E=m+v,w=p+D,C=ad(E,w,i);for(let y=Math.max(1,C-1);y<=s-1;y++)e(E,y,w,_.COBBLE,!1);for(let y=s+1;y<=s+9;y++)e(E,y,w,0,!1);Math.abs(v)<=3&&Math.abs(D)<=3&&e(E,s,w,r,!1)}for(let v=-3;v<=3;v++)for(let D=-3;D<=3;D++){if(Math.abs(v)!==3&&Math.abs(D)!==3)continue;const E=Math.abs(v)===3&&Math.abs(D)===3;for(let w=s+1;w<=s+3;w++){let C=E?_.LOG:o;!E&&(Math.abs(v)===3&&D===0||Math.abs(D)===3&&v===0)&&w===s+2&&(C=_.GLASS),v===M*3&&D===b*3&&w<=s+2&&(C=0),e(m+v,w,p+D,C,!1)}}for(let v=4,D=s+4;v>=0;v--,D++)for(let E=-v;E<=v;E++)for(let w=-v;w<=v;w++)e(m+E,D,p+w,v===0?_.LOG:_.PLANKS,!1);e(m-2,s+1,p-2,_.TORCH,!1),e(m+2,s+1,p-2,_.TABLE,!1),e(m+2,s+1,p+2,_.FURNACE,!1),e(m-2,s+1,p+2,_.TORCH,!1),e(m+M*4+b,s+1,p+b*4+M,_.TORCH,!1);for(let v=6;v<40;v+=7){const D=m+M*(4+v),E=p+b*(4+v);if(Math.abs(D-t.x)<4&&Math.abs(E-t.z)<4)break;const w=D+b*2,C=E+M*2;for(let y=s;y<=s+3;y++)e(w,y,C,y===s?_.COBBLE:_.LOG,!1);e(w,s+4,C,_.TORCH,!1)}});const a=(u,g,x,m,p)=>{for(let M=-x-1;M<=x+1;M++)for(let b=-m-1;b<=m+1;b++){const v=u+M,D=g+b,E=ad(v,D,i);for(let w=Math.max(1,E-1);w<=s-1;w++)e(v,w,D,_.COBBLE,!1);for(let w=s+1;w<=s+p.h+6;w++)e(v,w,D,0,!1);Math.abs(M)<=x&&Math.abs(b)<=m&&e(v,s,D,p.floor||_.PLANKS,!1)}for(let M=-x;M<=x;M++)for(let b=-m;b<=m;b++){if(Math.abs(M)!==x&&Math.abs(b)!==m)continue;const v=Math.abs(M)===x&&Math.abs(b)===m;for(let D=s+1;D<=s+p.h;D++){let E=v?_.LOG:p.wall;!v&&D===s+2&&(Math.abs(M)===x&&b%3===0||Math.abs(b)===m&&M%3===0)&&(E=_.GLASS),M===p.door[0]*x&&b===p.door[1]*m&&D<=s+2&&(E=0),e(u+M,D,g+b,E,!1)}}for(let M=-x-1;M<=x+1;M++)for(let b=-m-1;b<=m+1;b++)e(u+M,s+p.h+1,g+b,p.roof,!1);p.inside(u,g)},h=t.x-30,f=t.z;a(h,f,4,3,{h:4,wall:_.COBBLE,roof:_.PLANKS,floor:_.COBBLE,door:[1,0],inside:(u,g)=>{e(u-3,s+1,g-2,_.FURNACE,!1),e(u-3,s+1,g+2,_.FURNACE,!1),e(u-3,s+1,g,_.CHEST,!1),e(u,s+1,g-2,_.TABLE,!1),e(u+2,s+1,g+2,_.TORCH,!1),e(u-1,s+1,g+2,_.TORCH,!1)}});const c=t.x+32,d=t.z-2;a(c,d,5,3,{h:5,wall:_.COBBLE,roof:_.PLANKS,floor:_.COBBLE,door:[-1,0],inside:(u,g)=>{e(u+4,s+1,g,_.GOLD_BLOCK,!1),e(u+4,s+2,g,_.TORCH,!1),e(u+4,s+1,g-2,_.CHEST,!1),e(u-2,s+1,g-2,_.TORCH,!1),e(u-2,s+1,g+2,_.TORCH,!1);for(let x=s+6;x<=s+16;x++)for(let m=6;m<=9;m++)for(let p=-2;p<=1;p++){const M=m===6||m===9||p===-2||p===1;e(u+m,x,g+p,M?x===s+11?_.GLASS:_.COBBLE:0,!1)}for(let x=6;x<=9;x++)for(let m=-2;m<=1;m++)e(u+x,s+17,g+m,_.COBBLE,!1);e(u+7,s+18,g,_.GLOWSTONE,!1)}}),a(t.x,t.z+30,4,3,{h:4,wall:_.PLANKS,roof:_.LOG,door:[0,-1],inside:(u,g)=>{for(const[x,m]of[[-3,-2],[3,-2],[-3,2],[3,2]])e(u+x,s+1,g+m,_.TABLE,!1);e(u,s+1,g+2,_.CHEST,!1),e(u-2,s+1,g,_.CHEST,!1),e(u,s+1,g-2,_.TORCH,!1),e(u+2,s+1,g,_.TORCH,!1)}})}scanTorches(t,e){let i=null;const s=$*$;for(let o=0;o<e.length;o++){const r=e[o];if(!(!r||!la[r])){if(r===_.LAVA){const l=o%$,a=Math.floor(o/$)%$;if(l+a&1||e[o+s]!==0)continue}(i||(i=new Set)).add(o)}}i?this.torches.set(t,i):this.torches.delete(t)}genNether(t,e,i){const s=this.seed+7001,o=new Uint8Array($*$*re),r=t*$,l=e*$;for(let f=0;f<$;f++)for(let c=0;c<$;c++){const d=r+c,u=l+f;for(let g=0;g<re;g++){let x=0;if(g===0||g===re-1||g===1&&zt(d,u,s+1)<.5||g===re-2&&zt(d,u,s+2)<.5)x=_.BEDROCK;else{const m=$s(d*.022,g*.04,u*.022,s+301)*.65+$s(d*.06,g*.09,u*.06,s+302)*.35,p=Math.abs(g-62)/62;m+.62*p*p>.72||g>=re-3?x=_.NETHERRACK:x=g<=31?_.LAVA:jt}o[this.idx(c,g,f)]=x}}const a=$*$;for(let f=0;f<$;f++)for(let c=0;c<$;c++){const d=r+c,u=l+f,g=$s(d*.05,0,u*.05,s+303)>.56;for(let x=2;x<re-3;x++){const m=this.idx(c,x,f);if(o[m]!==_.NETHERRACK)continue;const p=o[m+a],M=o[m-a];p===jt&&x>32&&g?o[m]=_.SOUL_SAND:M===jt&&x>84&&zt(d*7+x,u*3,s+310)<.02?o[m]=_.GLOWSTONE:x<27&&zt(d*11+x,u*7-x,s+312)<.0045?o[m]=_.ANCIENT_DEBRIS:zt(d*13+x,u*5-x,s+311)<.006&&(o[m]=_.GOLD_ORE)}}const h={data:o,x0:r,z0:l};for(const f of this.fortressesNear(r,l))this.buildFortress(f,h);return this.chunks.set(i,o),this.computeTops(i,o),this.scanTorches(i,o),o}_fill(t,e,i,s,o,r,l,a){const h=Math.max(Math.min(e,o),t.x0),f=Math.min(Math.max(e,o),t.x0+$-1),c=Math.max(Math.min(s,l),t.z0),d=Math.min(Math.max(s,l),t.z0+$-1),u=Math.max(Math.min(i,r),0),g=Math.min(Math.max(i,r),re-1);for(let x=u;x<=g;x++)for(let m=c;m<=d;m++)for(let p=h;p<=f;p++)t.data[this.idx(p-t.x0,x,m-t.z0)]=a}fortressAt(t,e){const i="f"+t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);const s=this.seed;let o=null;return zt(t,e,s+4400)<.6&&(o={x:t*224+112+Math.floor((zt(t,e,s+4401)-.5)*80),z:e*224+112+Math.floor((zt(t,e,s+4402)-.5)*80),y:68}),this.vcache.set(i,o),o}fortressesNear(t,e){const i=[];for(let s=Math.floor((t-70)/224);s<=Math.floor((t+$+70)/224);s++)for(let o=Math.floor((e-70)/224);o<=Math.floor((e+$+70)/224);o++){const r=this.fortressAt(s,o);r&&Math.abs(r.x-t-8)<80&&Math.abs(r.z-e-8)<80&&i.push(r)}return i}buildFortress(t,e){const i=(l,a,h,f,c,d,u)=>this._fill(e,t.x+l,t.y+a,t.z+h,t.x+f,t.y+c,t.z+d,u),o=_.NETHER_BRICKS;i(-8,1,-8,8,9,8,jt),i(-8,-2,-8,8,0,8,o),i(-8,8,-8,8,8,8,o),i(-8,1,-8,-8,7,8,o),i(8,1,-8,8,7,8,o),i(-8,1,-8,8,7,-8,o),i(-8,1,8,8,7,8,o);for(const[l,a]of[[-5,-5],[5,-5],[-5,5],[5,5]])i(l,1,a,l,7,a,o),i(l,7,a,l,7,a,_.GLOWSTONE);i(-1,8,-1,1,8,1,_.GLOWSTONE);const r=[[1,0],[-1,0],[0,1],[0,-1]];for(const[l,a]of r){const h=-a,f=l;this._fill(e,t.x+l*8-h*1,t.y+1,t.z+a*8-f*1,t.x+l*8+h*1,t.y+4,t.z+a*8+f*1,jt);for(let u=9;u<=49;u++){const g=t.x+l*u,x=t.z+a*u;if(this._fill(e,g-h*1,t.y+1,x-f*1,g+h*1,t.y+6,x+f*1,jt),this._fill(e,g-h*2,t.y,x-f*2,g+h*2,t.y,x+f*2,o),this._fill(e,g-h*2,t.y+1,x-f*2,g-h*2,t.y+2,x-f*2,o),this._fill(e,g+h*2,t.y+1,x+f*2,g+h*2,t.y+2,x+f*2,o),u%8===0&&(this._fill(e,g-h*2,t.y+1,x-f*2,g-h*2,t.y+5,x-f*2,o),this._fill(e,g+h*2,t.y+1,x+f*2,g+h*2,t.y+5,x+f*2,o),this._fill(e,g-h*2,t.y+5,x-f*2,g+h*2,t.y+5,x+f*2,o)),u%8===4)for(const m of[-2,2])this._fill(e,g+h*m,t.y-46,x+f*m,g+h*m,t.y-1,x+f*m,o)}const c=t.x+l*54,d=t.z+a*54;this._fill(e,c-4,t.y+1,d-4,c+4,t.y+13,d+4,jt),this._fill(e,c-4,t.y-3,d-4,c+4,t.y,d+4,o),this._fill(e,c-4,t.y+1,d-4,c-4,t.y+12,d+4,o),this._fill(e,c+4,t.y+1,d-4,c+4,t.y+12,d+4,o),this._fill(e,c-4,t.y+1,d-4,c+4,t.y+12,d-4,o),this._fill(e,c-4,t.y+1,d+4,c+4,t.y+12,d+4,o),this._fill(e,c-4,t.y+13,d-4,c+4,t.y+13,d+4,o),this._fill(e,c-l*4-h*1,t.y+1,d-a*4-f*1,c-l*4+h*1,t.y+4,d-a*4+f*1,jt),this._fill(e,c-2,t.y+7,d-2,c+2,t.y+7,d+2,o),this._fill(e,c-1,t.y+7,d-1,c-1,t.y+7,d,jt);for(let u=0;u<6;u++)this._fill(e,c-3,t.y+1,d-3+u,c-3,t.y+1+u,d-3+u,o);this._fill(e,c-3,t.y+7,d-3,c-3,t.y+7,d+2,jt),this._fill(e,c,t.y+12,d,c,t.y+12,d,_.GLOWSTONE),this._fill(e,c+2,t.y+1,d+2,c+2,t.y+1,d+2,_.CHEST),this._fill(e,c-2,t.y+8,d+2,c-2,t.y+8,d+2,_.CHEST)}this._fill(e,t.x-7,t.y+1,t.z-7,t.x-7,t.y+1,t.z-7,_.CHEST),this._fill(e,t.x+7,t.y+1,t.z+7,t.x+7,t.y+1,t.z+7,_.CHEST),this._fill(e,t.x+7,t.y+1,t.z-7,t.x+7,t.y+1,t.z-7,_.CHEST)}endIsland(t,e){const i=this.seed+9001,s=Math.hypot(t,e);if(s<54)return{top:64+Math.floor(fi(t*.08,e*.08,i+700,2)*3)-(s>46?Math.floor(s-46):0),bottom:0};if(s>240){const o=fi(t*.011,e*.011,i+701,3);if(o>.63)return{top:58+Math.floor((o-.63)*60)+Math.floor(fi(t*.06,e*.06,i+702,2)*3),n:o}}return null}endCityAt(t,e){const i="e"+t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);let s=null;const o=this.seed;if(zt(t,e,o+5500)<.7){let r=null;for(let l=8;l<160;l+=10)for(let a=8;a<160;a+=10){const h=t*160+l,f=e*160+a;if(Math.hypot(h,f)<270)continue;const c=this.endIsland(h,f);c&&c.n>.66&&(!r||c.n>r.n)&&(r={x:h,z:f,n:c.n,top:c.top})}r&&(s={x:r.x,z:r.z,y:r.top,ship:zt(t,e,o+5501)<.55})}return this.vcache.set(i,s),s}endCitiesNear(t,e){const i=[];for(let s=Math.floor((t-30)/160);s<=Math.floor((t+$+30)/160);s++)for(let o=Math.floor((e-30)/160);o<=Math.floor((e+$+30)/160);o++){const r=this.endCityAt(s,o);r&&Math.abs(r.x-t-8)<50&&Math.abs(r.z-e-8)<50&&i.push(r)}return i}buildEndCity(t,e){const i=(r,l,a,h,f,c,d)=>this._fill(e,t.x+r,t.y+l,t.z+a,t.x+h,t.y+f,t.z+c,d),s=_.PURPUR,o=_.END_BRICKS;i(-6,-12,-6,6,0,6,s),i(-5,1,-5,5,21,5,jt);for(let r=0;r<3;r++){const l=1+r*6;i(-4,l,-4,4,l,4,s);for(let a=l+1;a<=l+5;a++){const h=a===l+3?o:s;i(-4,a,-4,4,a,-4,h),i(-4,a,4,4,a,4,h),i(-4,a,-4,-4,a,4,h),i(4,a,-4,4,a,4,h)}for(const[a,h]of[[0,-4],[0,4],[-4,0],[4,0]])i(a===0?-1:a,l+2,h===0?-1:h,a===0?1:a,l+4,h===0?1:h,_.GLASS);i(-3,l+5,-3,-3,l+5,-3,_.GLOWSTONE),i(3,l+5,3,3,l+5,3,_.GLOWSTONE);for(let a=0;a<6;a++)i(-3+a,l+1,-3,-3+a,l+1+a,-3,s);i(-3,l+6,-3,1,l+6,-2,jt)}i(-4,19,-4,4,19,4,s),i(-3,19,-3,-3,19,-3,s);for(const[r,l]of[[-4,-4],[4,-4],[-4,4],[4,4]])i(r,20,l,r,23,l,s),i(r,24,l,r,24,l,_.GLOWSTONE);i(-1,2,-1,1,4,-4,jt),i(-1,2,-4,1,4,-4,jt),i(2,2,2,2,2,2,_.CHEST),i(-2,8,2,-2,8,2,_.CHEST),i(2,14,2,2,14,2,_.CHEST),t.ship&&(i(5,13,-1,9,13,1,s),i(10,13,-3,22,13,3,s),i(10,14,-3,22,14,-3,o),i(10,14,3,22,14,3,o),i(22,14,-3,22,14,3,o),i(20,13,-2,24,13,2,s),i(25,14,0,25,15,0,o),i(15,14,0,15,19,0,o),i(14,17,0,16,17,0,o),i(21,14,0,21,14,0,o),i(21,15,0,21,15,0,_.CHEST),i(10,12,-2,20,11,2,s))}genEnd(t,e,i){const s=this.seed+9001,o=new Uint8Array($*$*re),r=t*$,l=e*$;for(let h=0;h<$;h++)for(let f=0;f<$;f++){const c=r+f,d=l+h,u=Math.hypot(c,d);let g=-1,x=0;if(u<54)g=64+Math.floor(fi(c*.08,d*.08,s+700,2)*3)-(u>46?Math.floor(u-46):0),x=g-((54-u)*.75+3+fi(c*.05,d*.05,s+703,2)*5);else if(u>240){const m=fi(c*.011,d*.011,s+701,3);m>.63&&(g=58+Math.floor((m-.63)*60)+Math.floor(fi(c*.06,d*.06,s+702,2)*3),x=g-((m-.63)*230+2))}if(g>0)for(let m=Math.max(1,Math.floor(x));m<=g&&m<re;m++)o[this.idx(f,m,h)]=_.END_STONE}for(const h of wc())for(let f=-2;f<=2;f++)for(let c=-2;c<=2;c++){if(f*f+c*c>5)continue;const d=h.x+f-r,u=h.z+c-l;if(!(d<0||u<0||d>=$||u>=$)){for(let g=62;g<=h.top;g++)o[this.idx(d,g,u)]=_.OBSIDIAN;f===0&&c===0&&(o[this.idx(d,h.top+1,u)]=_.BEDROCK)}}const a={data:o,x0:r,z0:l};for(const h of this.endCitiesNear(r,l))this.buildEndCity(h,a);return this.chunks.set(i,o),this.computeTops(i,o),this.scanTorches(i,o),o}computeTops(t,e){const i=this.edits&&this.edits.get(t);if(i)for(const[r,l]of i)e[r]=l;let s=0;for(let r=e.length-1;r>=0;r--)if(e[r]){s=Math.floor(r/($*$));break}this.hi||(this.hi=new Map),this.hi.set(t,s);const o=new Int16Array($*$).fill(-1);for(let r=0;r<$;r++)for(let l=0;l<$;l++){let a=re-1;for(;a>=0&&!ha[e[this.idx(l,a,r)]];)a--;o[r*$+l]=a}this.tops.set(t,o)}getBlock(t,e,i){if(e<0||e>=re)return jt;const s=Math.floor(t/$),o=Math.floor(i/$),r=this.chunks.get(si(s,o));return r?r[(e*$+(i-o*$))*$+(t-s*$)]:jt}topY(t,e){const i=Math.floor(t/$),s=Math.floor(e/$),o=this.tops.get(si(i,s));return o?o[(e-s*$)*$+(t-i*$)]:-1}skyLit(t,e,i){if(this.dim!=="overworld")return 1;const s=Math.floor(t/$),o=Math.floor(i/$),r=this.tops.get(si(s,o));return r?e>r[(i-o*$)*$+(t-s*$)]?1:0:1}isSolid(t,e,i){if(e<0)return!0;if(e>=re)return!1;const s=Math.floor(t/$),o=Math.floor(i/$),r=this.chunks.get(si(s,o));return r?tr[r[(e*$+(i-o*$))*$+(t-s*$)]]===1:!0}bodyHits(t,e,i,s,o){for(let r=Math.floor(e);r<=Math.floor(e+o-.001);r++)for(let l=Math.floor(i-s);l<=Math.floor(i+s);l++)for(let a=Math.floor(t-s);a<=Math.floor(t+s);a++){const h=this.getBlock(a,r,l);if(!ye[h]){if(this.isSolid(a,r,l))return!0;continue}const c=1e-4;for(const d of Pl(h,(u,g)=>{const x=this.getBlock(a+u,r,l+g);return rn[x]||ye[x]&&ye[x].kind==="fence"},!0))if(a+d[0]<t+s-c&&a+d[3]>t-s+c&&r+d[1]<e+o-c&&r+d[4]>e+c&&l+d[2]<i+s-c&&l+d[5]>i-s+c)return!0}return!1}_shapeRay(t,e,i,s,o,r,l){let a=null;for(const h of Pl(s,(f,c)=>{const d=this.getBlock(t+f,e,i+c);return rn[d]||ye[d]&&ye[d].kind==="fence"},!1)){let f=0,c=l,d=-1,u=0;for(let g=0;g<3;g++){const x=[o.x-t,o.y-e,o.z-i][g],m=[r.x,r.y,r.z][g];if(Math.abs(m)<1e-9){if(x<h[g]||x>h[g+3]){c=-1;break}continue}let p=(h[g]-x)/m,M=(h[g+3]-x)/m,b=-1;if(p>M){const v=p;p=M,M=v,b=1}if(p>f&&(f=p,d=g,u=b),M<c&&(c=M),f>c){c=-1;break}}if(!(c<0||f>c)&&(!a||f<a.t)){const g=[0,0,0];d>=0?g[d]=u:g[1]=1,a={t:f,normal:g}}}return a}isLiquid(t,e,i){return Mn[this.getBlock(t,e,i)]===1}setBlock(t,e,i,s){if(e<0||e>=re)return!1;const o=Math.floor(t/$),r=Math.floor(i/$),l=si(o,r),a=this.chunks.get(l);if(!a){if(this.edits&&this.silent){let p=this.edits.get(l);p||this.edits.set(l,p=new Map),p.set(this.idx(t-o*$,e,i-r*$),s)}return!1}const h=t-o*$,f=i-r*$,c=this.idx(h,e,f),d=a[c];if(this.edits){let p=this.edits.get(l);p||this.edits.set(l,p=new Map),p.set(c,s)}if(this.onEdit&&!this.silent&&this.onEdit(t,e,i,s),a[c]=s,s&&e>this.hi.get(l)&&this.hi.set(l,e),this.modified.add(l),this.unsaved.add(l),la[d]||la[s]){this.scanTorches(l,a);for(let p=-1;p<=1;p++)for(let M=-1;M<=1;M++)this.dirty.add(si(o+p,r+M))}const u=this.tops.get(l),g=f*$+h;if(ha[s])e>u[g]&&(u[g]=e);else if(e===u[g]){let p=e-1;for(;p>=0&&!ha[a[this.idx(h,p,f)]];)p--;u[g]=p}this.dirty.add(l);const x=h===0?-1:h===$-1?1:0,m=f===0?-1:f===$-1?1:0;return x&&this.dirty.add(si(o+x,r)),m&&this.dirty.add(si(o,r+m)),x&&m&&this.dirty.add(si(o+x,r+m)),!0}raycast(t,e,i=6,s=!1){let o=Math.floor(t.x),r=Math.floor(t.y),l=Math.floor(t.z);const a=[Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)],h=[Math.abs(1/e.x),Math.abs(1/e.y),Math.abs(1/e.z)],f=(g,x)=>x>0?Math.floor(g)+1-g:g-Math.floor(g),c=[a[0]===0?1/0:f(t.x,a[0])*h[0],a[1]===0?1/0:f(t.y,a[1])*h[1],a[2]===0?1/0:f(t.z,a[2])*h[2]];let d=[0,0,0],u=0;for(;u<=i;){const g=this.getBlock(o,r,l);if(g!==jt&&(s||!Mn[g]&&!wu[g])){if(!ye[g])return{x:o,y:r,z:l,id:g,normal:d,dist:u};const m=this._shapeRay(o,r,l,g,t,e,i);if(m&&m.t<=i)return{x:o,y:r,z:l,id:g,normal:m.normal,dist:m.t}}const x=c[0]<c[1]?c[0]<c[2]?0:2:c[1]<c[2]?1:2;u=c[x],c[x]+=h[x],d=[0,0,0],d[x]=-a[x],x===0?o+=a[0]:x===1?r+=a[1]:l+=a[2]}return null}update(t,e,i,s=2){const o=Math.floor(t/$),r=Math.floor(e/$),l=[],a=[];this.lastPcx=o,this.lastPcz=r,this.pool&&this.pool.failed&&(this.pool=null);for(let c=-i-1;c<=i+1;c++)for(let d=-i-1;d<=i+1;d++){const u=o+d,g=r+c,x=si(u,g),m=d*d+c*c;if(!this.chunks.has(x))l.push({cx:u,cz:g,d:m});else if(Math.abs(d)<=i&&Math.abs(c)<=i){const p=this.dirty.has(x);(!this.meshes.has(x)||p)&&a.push({cx:u,cz:g,d:p?m-1e4:m})}}if(l.sort((c,d)=>c.d-d.d),this.pool){let c=0;for(const d of l){const u=si(d.cx,d.cz);if(this.saved.has(u)){c++<s*2&&this.generateChunk(d.cx,d.cz);continue}if(!this.inflightGen.has(u)){if(this.inflightGen.size>=24)break;this.inflightGen.add(u),this.pool.request({t:"gen",dim:this.dim,seed:this.seed,kind:this.kind||"normal",cx:d.cx,cz:d.cz},[],g=>{this.inflightGen.delete(u),!this.chunks.has(u)&&(this.chunks.set(u,g.data),this.computeTops(u,g.data),this.scanTorches(u,g.data))})}}}else for(let c=0;c<Math.min(s*2,l.length);c++)this.generateChunk(l[c].cx,l[c].cz);a.sort((c,d)=>c.d-d.d);let h=0,f=0;for(const c of a){let d=!0;for(let x=-1;x<=1&&d;x++)for(let m=-1;m<=1;m++)if(!this.chunks.has(si(c.cx+x,c.cz+m))){d=!1;break}if(!d){f++;continue}const u=c.d<-5e3,g=si(c.cx,c.cz);if(this.pool&&!u){if(f++,this.inflightMesh.has(g)||this.inflightMesh.size>=10)continue;const x=[];for(let p=-1;p<=1;p++)for(let M=-1;M<=1;M++)x.push(new Uint8Array(this.chunks.get(si(c.cx+M,c.cz+p))));const m=++this.tokN;this.jobTok.set(g,m),this.inflightMesh.add(g),this.dirty.delete(g),this.pool.request({t:"mesh",dim:this.dim,seed:this.seed,cx:c.cx,cz:c.cz,bufs:x},x.map(p=>p.buffer),p=>{this.inflightMesh.delete(g),this.jobTok.get(g)===m&&(this.jobTok.delete(g),!(Math.abs(c.cx-this.lastPcx)>i+2||Math.abs(c.cz-this.lastPcz)>i+2)&&(this._applyLists(c.cx,c.cz,p.lists),this.dirty.delete(g),this.onChunkMeshed&&this.onChunkMeshed(c.cx,c.cz)))})}else h<(u?6:s)?(this.buildMesh(c.cx,c.cz),h++):f++}for(const[c,d]of this.meshes)(Math.abs(sd(c)-o)>i+2||Math.abs(od(c)-r)>i+2)&&(this.disposeMesh(d),this.meshes.delete(c),this.jobTok&&this.jobTok.delete(c));if((this.unloadT-=1)<=0){this.unloadT=60;for(const c of[...this.chunks.keys()])if(Math.abs(sd(c)-o)>i+5||Math.abs(od(c)-r)>i+5){if(this.modified.has(c))continue;this.chunks.delete(c),this.tops.delete(c)}}return l.length+f}disposeMesh(t){for(const e of[t.opaque,t.trans])e&&(this.scene.remove(e),e.geometry.dispose())}buildMesh(t,e){const i=si(t,e);this.chunks.get(i)&&(this.jobTok&&this.jobTok.delete(i),this._applyLists(t,e,this.meshLists(t,e)))}meshLists(t,e){const i=si(t,e),s=this.chunks.get(i);if(!s)return null;const o=t*$,r=e*$,l=[{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]},{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]}],a=(E,w,C)=>{const y=E-o,S=C-r;return y>=0&&S>=0&&y<$&&S<$&&w>=0&&w<re?s[(w*$+S)*$+y]:this.getBlock(E,w,C)},h=new Float32Array($*$*3);for(let E=0;E<$;E++)for(let w=0;w<$;w++){const C=o+w,y=r+E,S=fi(C*.004,y*.004,this.seed+900,2),P=fi(C*.0035,y*.0035,this.seed+500,2),F=Wo(.35,.7,S),H=Wo(.42,.28,P),Y=(E*$+w)*3;h[Y]=(1.15*(1-F)+.78*F)*(1-.18*H),h[Y+1]=1*(1-F)+1.1*F,h[Y+2]=.6*(1-F)+.8*F+.3*H}const f=.0015,c=[0,0,0],d=[0,0,0,0],u=[0,0,0,0],g=[0,0,0,0],x=$*3,m=o-$,p=r-$;let M=null;const b=[];for(let E=-1;E<=1;E++)for(let w=-1;w<=1;w++){const C=this.torches.get(si(t+E,e+w));if(C)for(const y of C)b.push([(t+E)*$+y%$,Math.floor(y/($*$)),(e+w)*$+Math.floor(y/$)%$])}if(b.length){M=this._lm||(this._lm=new Uint8Array(x*x*re)),M.fill(0);const E=(y,S,P)=>(S*x+(P-p))*x+(y-m),w=[];for(const[y,S,P]of b)M[E(y,S,P)]=10,w.push(y,S,P);const C=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1];for(let y=0;y<w.length;y+=3){const S=w[y],P=w[y+1],F=w[y+2],H=M[E(S,P,F)]-1;if(!(H<=0))for(let Y=0;Y<18;Y+=3){const K=S+C[Y],W=P+C[Y+1],et=F+C[Y+2];if(W<0||W>=re||K<m||K>=m+x||et<p||et>=p+x||rn[a(K,W,et)])continue;const G=E(K,W,et);M[G]<H&&(M[G]=H,w.push(K,W,et))}}}const v=(E,w,C)=>!M||w<0||w>=re||E<m||E>=m+x||C<p||C>=p+x?0:Math.pow(M[(w*x+(C-p))*x+(E-m)]/10,1.7),D=Math.min(re-1,(this.hi.get(i)||re)+1);for(let E=0;E<=D;E++)for(let w=0;w<$;w++)for(let C=0;C<$;C++){const y=s[(E*$+w)*$+C];if(y===jt)continue;const S=Te[y],P=S.transparent?l[1]:l[0],F=o+C,H=r+w;if(ye[y]){const K=(G,st)=>{const ht=a(F+G,E,H+st);return rn[ht]||ye[ht]&&ye[ht].kind==="fence"},W=Math.max(this.skyLit(F,E,H),E+1<re?this.skyLit(F,E+1,H):1),et=v(F,E,H);for(const G of Pl(y,K,!1))for(const st of ca){const ht=st.dir;if((ht[0]?ht[0]<0?G[0]===0:G[3]===1:ht[1]?ht[1]<0?G[1]===0:G[4]===1:ht[2]<0?G[2]===0:G[5]===1)&&rn[a(F+ht[0],E+ht[1],H+ht[2])])continue;const Vt=ys[st.top?S.tiles[0]:st.bottom?S.tiles[1]:S.tiles[2]],le=P.pos.length/3;for(const Z of st.corners){const rt=G[0]+(G[3]-G[0])*Z.p[0],Mt=G[1]+(G[4]-G[1])*Z.p[1],ft=G[2]+(G[5]-G[2])*Z.p[2],Et=[rt,Mt,ft];P.pos.push(C+rt,E+Mt,w+ft),P.nor.push(ht[0],ht[1],ht[2]);const yt=Et[st.uA],Ht=Et[st.vA];P.uv.push((Vt+Math.min(1-f,Math.max(f,st.uI?1-yt:yt)))/Qs,Math.min(1-f,Math.max(f,st.vI?1-Ht:Ht)));const pe=st.shade*(.3+.7*W);P.col.push(pe,pe,pe),P.bl.push(st.shade*et),P.sw.push(0),P.sk.push(W)}P.ind.push(le,le+1,le+2,le+2,le+1,le+3)}continue}if(S.torch){const K=(ys.torch+.4375)/Qs,W=(ys.torch+9/16)/Qs;for(const et of ca){if(et.bottom)continue;const G=P.pos.length/3;for(const st of et.corners)P.pos.push(C+7/16+st.p[0]*2/16,E+st.p[1]*10/16,w+7/16+st.p[2]*2/16),P.nor.push(et.dir[0],et.dir[1],et.dir[2]),P.uv.push(K+(W-K)*st.uv[0],6/16+10/16*st.uv[1]),P.col.push(.9,.9,.9),P.bl.push(1),P.sw.push(0),P.sk.push(1);P.ind.push(G,G+1,G+2,G+2,G+1,G+3)}continue}for(const K of ca){const W=F+K.dir[0],et=E+K.dir[1],G=H+K.dir[2],st=a(W,et,G);if(rn[st]||st===y&&(S.transparent||S.liquid))continue;const ht=ys[K.top?S.tiles[0]:K.bottom?S.tiles[1]:S.tiles[2]],[At,Vt]=K.tan;let le=1,Z=1,rt=1;if(y===_.LEAVES||y===_.GRASS&&K.top){const yt=(w*$+C)*3;le=h[yt],Z=h[yt+1],rt=h[yt+2]}const Mt=et<re?this.skyLit(W,et,G):1,ft=v(W,et,G);for(let yt=0;yt<4;yt++){const Ht=K.corners[yt].p,pe=Ht[At]*2-1,ie=Ht[Vt]*2-1;c[0]=W,c[1]=et,c[2]=G,c[At]+=pe;const Le=rn[a(c[0],c[1],c[2])],k=Le?Mt:this.skyLit(c[0],c[1],c[2]),Di=Le?ft:v(c[0],c[1],c[2]);c[0]=W,c[1]=et,c[2]=G,c[Vt]+=ie;const $t=rn[a(c[0],c[1],c[2])],fe=$t?Mt:this.skyLit(c[0],c[1],c[2]),Bt=$t?ft:v(c[0],c[1],c[2]);c[0]=W,c[1]=et,c[2]=G,c[At]+=pe,c[Vt]+=ie;const Ae=rn[a(c[0],c[1],c[2])],kt=Le&&$t||Ae?Mt:this.skyLit(c[0],c[1],c[2]),L=Le&&$t||Ae?ft:v(c[0],c[1],c[2]);g[yt]=(ft+Di+Bt+L)/4,d[yt]=Le&&$t?0:3-(Le+$t+Ae),u[yt]=(Mt+k+fe+kt)/4}const Et=P.pos.length/3;for(let yt=0;yt<4;yt++){const Ht=K.corners[yt];let pe=Ht.p[1];(y===_.WATER||y===_.LAVA)&&pe===1&&a(F,E+1,H)!==y&&(pe=.88),P.pos.push(C+Ht.p[0],E+pe,w+Ht.p[2]),P.nor.push(K.dir[0],K.dir[1],K.dir[2]),P.uv.push((ht+(Ht.uv[0]?1-f:f))/Qs,Ht.uv[1]?1-f:f);const ie=K.shade*rd[d[yt]]*(.3+.7*u[yt]);P.col.push(ie*le,ie*Z,ie*rt),P.bl.push(S.glow?1:K.shade*rd[d[yt]]*g[yt]),P.sw.push(y===_.LEAVES?1:y===_.WATER||y===_.LAVA?2:0),P.sk.push(u[yt])}d[0]+d[3]>d[1]+d[2]?P.ind.push(Et,Et+1,Et+3,Et,Et+3,Et+2):P.ind.push(Et,Et+1,Et+2,Et+2,Et+1,Et+3)}}return l.map(E=>({n:E.ind.length,pos:Float32Array.from(E.pos),nor:Float32Array.from(E.nor),uv:Float32Array.from(E.uv),col:Float32Array.from(E.col),bl:Float32Array.from(E.bl),sw:Float32Array.from(E.sw),sk:Float32Array.from(E.sk),ind:Uint32Array.from(E.ind)}))}_applyLists(t,e,i){const s=si(t,e),o=t*$,r=e*$,l=this.meshes.get(s);l&&this.disposeMesh(l);const a={opaque:null,trans:null},h=Ei,f=(c,d,u,g)=>{if(!c.n)return null;const x=new ii;x.setAttribute("position",new h(c.pos,3)),x.setAttribute("normal",new h(c.nor,3)),x.setAttribute("uv",new h(c.uv,2)),x.setAttribute("color",new h(c.col,3)),x.setAttribute("blight",new h(c.bl,1)),x.setAttribute("sway",new h(c.sw,1)),x.setAttribute("skyl",new h(c.sk,1)),x.setIndex(new h(c.ind,1)),x.computeBoundingSphere();const m=new _t(x,d);return m.position.set(o,0,r),m.renderOrder=u,m.castShadow=g,m.receiveShadow=!0,this.scene.add(m),m};a.opaque=f(i[0],this.materials.opaque,0,!0),a.trans=f(i[1],this.materials.trans,1,!1),this.meshes.set(s,a),this.dirty.delete(s),this.onChunkMeshed&&this.onChunkMeshed(t,e)}}const _s=(n,t)=>new xi(t?{color:n,map:t}:{color:n});function Ct(n,t,e,i,s,o,r,l){const a=new we;a.position.set(o,r,l);const h=new _t(new Kt(t,e,i),_s(s));return h.position.y=-e/2,a.add(h),n.add(a),a}function B(n,t,e,i,s,o,r,l,a){const h=new _t(new Kt(t,e,i),_s(s,a));return h.position.set(o,r,l),n.add(h),h}function r_(n){const t=document.createElement("canvas");t.width=t.height=8,n(t.getContext("2d"));const e=new Ui(t);return e.magFilter=_e,e.minFilter=_e,e.generateMipmaps=!1,e}const mo={pig:{hw:.4,h:.9,hp:10,speed:1.4,hostile:!1,name:"Cerdo",build(n,t){B(n,.6,.5,.95,15769768,0,.62,0),t.head=B(n,.5,.45,.45,16034480,0,.78,.65),B(n,.26,.2,.1,14189196,0,.72,.92),t.legs=[[-.18,.5],[.18,.5],[-.18,-.5],[.18,-.5]].map(([e,i])=>Ct(n,.2,.37,.2,15242140,e,.37,i))},drops:()=>[[A.PORK,1+Math.floor(Math.random()*2)]]},cow:{hw:.45,h:1.4,hp:10,speed:1.2,hostile:!1,name:"Vaca",build(n,t){B(n,.75,.7,1.2,4863268,0,.95,0),B(n,.77,.3,.5,15658734,0,.95,-.15),t.head=B(n,.5,.5,.45,4863268,0,1.15,.8),B(n,.3,.2,.1,14272688,0,1.05,1.05),B(n,.08,.15,.08,14540253,-.22,1.45,.75),B(n,.08,.15,.08,14540253,.22,1.45,.75),t.legs=[[-.22,.45],[.22,.45],[-.22,-.45],[.22,-.45]].map(([e,i])=>Ct(n,.24,.6,.24,4008990,e,.6,i))},drops:()=>[[A.BEEF,1+Math.floor(Math.random()*3)],...Math.random()<.7?[[A.LEATHER,1+Math.floor(Math.random()*2)]]:[]]},sheep:{hw:.42,h:1.2,hp:8,speed:1.2,hostile:!1,name:"Oveja",xp:1,build(n,t){B(n,.85,.75,1.15,15658734,0,.9,0),t.head=B(n,.4,.42,.42,9076080,0,1.05,.72),t.legs=[[-.2,.4],[.2,.4],[-.2,-.4],[.2,-.4]].map(([e,i])=>Ct(n,.2,.5,.2,9076080,e,.5,i))},drops:()=>[[A.BEEF,1+Math.floor(Math.random()*2)]]},chicken:{hw:.22,h:.7,hp:4,speed:1.3,hostile:!1,name:"Gallina",xp:1,build(n,t){B(n,.34,.34,.5,16053492,0,.42,0),t.head=B(n,.2,.26,.2,16316664,0,.68,.24),B(n,.1,.07,.12,15769632,0,.64,.38),B(n,.06,.1,.06,13639712,0,.55,.33),B(n,.06,.26,.4,15263976,-.2,.44,0),B(n,.06,.26,.4,15263976,.2,.44,0),t.legs=[-.08,.08].map(e=>Ct(n,.05,.25,.05,15769632,e,.25,0))},drops:()=>[[A.CHICKEN,1]]},skeleton:{hw:.3,h:1.9,hp:20,speed:2.2,hostile:!0,name:"Esqueleto",ranged:!0,xp:5,build(n,t){t.legs=[Ct(n,.18,.85,.18,14211276,-.12,.85,0),Ct(n,.18,.85,.18,14211276,.12,.85,0)],B(n,.5,.8,.2,14211276,0,1.25,0);for(const s of[1,1.2,1.4])B(n,.52,.07,.22,5592396,0,s,0);t.arms=[Ct(n,.14,.75,.14,14211276,-.34,1.62,0),Ct(n,.14,.75,.14,14211276,.34,1.62,0)],t.arms[1].rotation.x=-1.3,t.arms[0].rotation.x=-1.3,t.head=B(n,.5,.5,.5,14211276,0,1.9,0),B(n,.1,.1,.02,1052688,-.12,1.93,.26),B(n,.1,.1,.02,1052688,.12,1.93,.26),B(n,.2,.05,.02,1052688,0,1.78,.26),B(n,.06,.5,.2,6965800,.42,1.28,.28)},drops:()=>Math.random()<.6?[[A.COAL,1]]:[[A.STICK,2]]},spider:{hw:.55,h:.75,hp:16,speed:4.2,hostile:!0,name:"Araña",xp:4,build(n,t){B(n,.7,.5,.7,2761760,0,.5,.3),B(n,.9,.6,1.1,3353124,0,.55,-.55),t.head=B(n,.5,.45,.45,2761760,0,.5,.8);for(const i of[-.12,.12])B(n,.1,.1,.03,13637656,i,.58,1.04),B(n,.06,.06,.03,13637656,i*1.8,.5,1.04);t.legs=[];for(let i=0;i<4;i++)for(const s of[-1,1]){const o=B(n,.9,.08,.08,2761760,s*.62,.38,.55-i*.38);o.rotation.z=s*-.55,o.rotation.y=s*(i-1.5)*.25}},drops:()=>Math.random()<.5?[[A.STICK,1]]:[]},enderman:{hw:.3,h:2.9,hp:40,speed:5,hostile:!1,name:"Enderman",xp:8,enderman:!0,build(n,t){t.legs=[Ct(n,.18,1.5,.18,1182232,-.12,1.5,0),Ct(n,.18,1.5,.18,1182232,.12,1.5,0)],B(n,.5,.95,.26,1182232,0,1.98,0),t.arms=[Ct(n,.13,1.35,.13,1182232,-.34,2.45,0),Ct(n,.13,1.35,.13,1182232,.34,2.45,0)],t.head=B(n,.5,.42,.5,1182232,0,2.7,0);for(const i of[-.13,.13])B(n,.14,.05,.03,14708991,i,2.72,.26)},drops:()=>Math.random()<.65?[[A.PEARL,1]]:[]},slime:{hw:.42,h:.85,hp:8,speed:0,hostile:!0,name:"Slime",hopper:!0,xp:2,build(n,t){const e=new xi({color:6348896,emissive:1064976,transparent:!0,opacity:.8}),i=new _t(new Kt(.84,.84,.84),e);i.position.y=.42,n.add(i),B(n,.4,.4,.4,3119663,0,.42,0),B(n,.14,.14,.05,1060880,-.2,.55,.43),B(n,.14,.14,.05,1060880,.2,.55,.43)},drops:()=>[]},piglin:{hw:.3,h:1.8,hp:24,speed:2.7,hostile:!0,name:"Piglin zombificado",damage:5,xp:6,piglin:!0,build(n,t){t.legs=[Ct(n,.26,.75,.26,5917240,-.14,.75,0),Ct(n,.26,.75,.26,5917240,.14,.75,0)],B(n,.56,.75,.3,8022608,0,1.125,0),B(n,.58,.14,.32,15253568,0,1.45,0),t.arms=[Ct(n,.22,.72,.22,13208184,-.38,1.45,0),Ct(n,.22,.72,.22,13208184,.38,1.45,0)],t.arms.forEach(s=>s.rotation.x=-Math.PI/2.3),B(n,.1,.55,.1,15253568,.4,1,.45),t.head=B(n,.6,.5,.5,13208184,0,1.78,0),B(n,.34,.22,.12,11563103,0,1.72,.3),B(n,.06,.08,.04,2101264,-.07,1.72,.37),B(n,.06,.08,.04,2101264,.07,1.72,.37),B(n,.12,.28,.06,13208184,-.37,1.8,0).rotation.z=.5,B(n,.12,.28,.06,13208184,.37,1.8,0).rotation.z=-.5,B(n,.08,.06,.03,16724e3,-.14,1.88,.26),B(n,.08,.06,.03,16724e3,.14,1.88,.26)},drops:()=>Math.random()<.6?[[A.GOLD,1]]:[]},blaze:{hw:.35,h:1.7,hp:20,speed:2.4,hostile:!0,name:"Blaze",fly:!0,ranged:!1,xp:7,build(n,t){const e=new xi({color:15773728,emissive:10506240}),i=new xi({color:16742928,emissive:12595200});t.head=new _t(new Kt(.55,.55,.55),e),t.head.position.y=1.4,n.add(t.head);for(const s of[-.13,.13])B(n,.12,.1,.03,2101248,s,1.45,.29);B(n,.22,.06,.03,2101248,0,1.28,.29),t.rods=[];for(let s=0;s<3;s++){const o=new we;o.position.y=.35+s*.38,n.add(o);for(let r=0;r<4;r++){const l=r/4*Math.PI*2,a=new _t(new Kt(.12,.5,.12),s%2?i:e);a.position.set(Math.cos(l)*.5,0,Math.sin(l)*.5),o.add(a)}t.rods.push(o)}B(n,.2,.25,.2,16752672,0,.9,0)},drops:()=>Math.random()<.8?[[A.COAL,1+Math.floor(Math.random()*2)]]:[]},magmacube:{hw:.5,h:1,hp:18,speed:0,hostile:!0,name:"Cubo de magma",hopper:!0,xp:5,build(n,t){const e=new xi({color:11547664,emissive:8003584}),i=new ce({color:16752672}),s=new _t(new Kt(1,1,1),e);s.position.y=.5,n.add(s);for(const[o,r,l]of[[0,.7,.51],[.3,.3,.51],[-.3,.45,.51],[.51,.5,.2],[-.51,.5,-.1]])B(n,.3,.12,.05,16752672,o,r,l);B(n,.15,.12,.04,2101248,-.22,.65,.52),B(n,.15,.12,.04,2101248,.22,.65,.52),B(n,.4,.1,.04,i,0,.35,.52)},drops:()=>Math.random()<.6?[[A.COAL,1]]:[]},witherskeleton:{hw:.35,h:2.4,hp:30,speed:2.9,hostile:!0,name:"Esqueleto Wither",damage:6,reach:1.7,effect:["poison",5],xp:9,build(n,t){t.legs=[Ct(n,.2,1.1,.2,2302755,-.14,1.1,0),Ct(n,.2,1.1,.2,2302755,.14,1.1,0)],B(n,.56,.95,.24,2302755,0,1.6,0);for(const s of[1.3,1.55,1.8])B(n,.58,.07,.26,921102,0,s,0);t.arms=[Ct(n,.16,1,.16,2302755,-.38,2.05,0),Ct(n,.16,1,.16,2302755,.38,2.05,0)],t.arms[0].rotation.x=t.arms[1].rotation.x=-1.2,B(n,.1,.7,.06,3815994,.45,1.5,.5),B(n,.3,.06,.06,3815994,.45,1.85,.5),t.head=B(n,.58,.58,.58,2302755,0,2.2,0),B(n,.12,.1,.02,12632256,-.14,2.25,.3),B(n,.12,.1,.02,12632256,.14,2.25,.3),B(n,.24,.05,.02,328965,0,2.05,.3)},drops:()=>[[A.COAL,1+Math.floor(Math.random()*2)]]},ghast:{hw:1.2,h:2.6,hp:14,speed:1.6,hostile:!0,name:"Ghast",fly:!0,flyKind:"ghast",xp:10,build(n,t){_s(16053492),B(n,2.4,2.4,2.4,16053492,0,1.4,0),t.eyeL=B(n,.6,.15,.05,4208696,-.5,1.6,1.22),t.eyeR=B(n,.6,.15,.05,4208696,.5,1.6,1.22),B(n,.4,.2,.05,4208696,0,.95,1.22);for(const e of[-.8,0,.8])for(const i of[-.8,0,.8])B(n,.3,1.4+Math.abs(e*i),.3,14474460,e,.1,i)},drops:()=>[[A.COAL,1+Math.floor(Math.random()*2)],...Math.random()<.4?[[A.GOLD,1]]:[]]},hoglin:{hw:.6,h:1.5,hp:32,speed:3.2,hostile:!0,name:"Hoglin",damage:7,reach:1.9,xp:8,build(n,t){B(n,1,.95,1.5,9067066,0,1,0),B(n,.7,.4,.9,5913128,0,1.55,-.1),t.head=B(n,.85,.75,.8,10119754,0,.95,1),B(n,.5,.35,.3,12618346,0,.8,1.45);for(const e of[-.3,.3])B(n,.1,.35,.1,15788240,e,1.15,1.5).rotation.x=-.4,B(n,.14,.12,.04,1052688,e*.9,1.12,1.42),B(n,.2,.28,.12,8014384,e*1.7,1.3,.85).rotation.z=e*1.5;t.legs=[[-.35,.55],[.35,.55],[-.35,-.55],[.35,-.55]].map(([e,i])=>Ct(n,.3,.55,.3,6963240,e,.55,i))},drops:()=>[[A.PORK,2+Math.floor(Math.random()*3)]]},shulker:{hw:.5,h:1,hp:22,speed:0,hostile:!0,name:"Shulker",static:!0,shulker:!0,xp:8,build(n,t){B(n,1,.5,1,8014474,0,.25,0),t.lid=new we,t.lid.position.set(0,.5,-.5),n.add(t.lid);const e=_s(10316974),i=new _t(new Kt(1,.5,1),e);i.position.set(0,.25,.5),t.lid.add(i),t.eye=B(n,.3,.3,.3,15790240,0,.55,0),t.eye.material.emissive=new St(7368768)},drops:()=>Math.random()<.35?[[A.PEARL,1]]:[]},endermite:{hw:.22,h:.35,hp:8,speed:4.6,hostile:!0,name:"Endermite",damage:2,reach:.9,xp:3,build(n,t){B(n,.32,.26,.26,5909114,0,.14,.2),B(n,.4,.3,.3,6961802,0,.16,-.05),B(n,.26,.22,.26,4857960,0,.12,-.3),B(n,.06,.06,.03,14708991,-.07,.2,.34),B(n,.06,.06,.03,14708991,.07,.2,.34)},drops:()=>[]},phantom:{hw:.6,h:.6,hp:18,speed:3,hostile:!0,name:"Phantom",fly:!0,flyKind:"phantom",xp:7,build(n,t){B(n,.5,.35,1.1,4083590,0,.3,0),B(n,.3,.2,.3,4083590,0,.3,.7),B(n,.12,.1,.04,7405424,-.12,.34,.86),B(n,.12,.1,.04,7405424,.12,.34,.86),t.wings=[-1,1].map(i=>{const s=new we;s.position.set(i*.25,.4,.1),n.add(s);const o=new _t(new Kt(1.5,.06,.8),_s(3227758));return o.position.x=i*.75,s.add(o),{g:s,s:i}}),B(n,.2,.15,.9,4083590,0,.28,-.9)},drops:()=>[]},villager:{hw:.32,h:1.95,hp:20,speed:1.2,hostile:!1,name:"Aldeano",villager:!0,talk:["Hrmm.","¿Quieres comerciar?","¡Buenos días!","Hrm… hrm."],xp:0,build(n,t){t.legs=[Ct(n,.3,.8,.3,7031338,-.15,.8,0),Ct(n,.3,.8,.3,7031338,.15,.8,0)],B(n,.7,1,.45,9068084,0,1.3,0),B(n,.74,.3,.5,15261904,0,1.55,0),B(n,.9,.3,.5,7031338,0,1.5,.34),t.head=B(n,.55,.6,.55,13145466,0,2,0),B(n,.16,.34,.2,13145466,0,1.92,.36),B(n,.58,.1,.1,3811866,0,2.2,.28),B(n,.1,.1,.03,1731114,-.14,2.05,.28),B(n,.1,.1,.03,1731114,.14,2.05,.28)},drops:()=>[]},crewmate:{hw:.34,h:1.65,hp:20,speed:1.5,hostile:!1,name:"Tripulante",talk:["Sus…","¿Quién es el impostor?","¡Ya hice mis tareas!","Eso es muy sospechoso…","Vi a alguien salir del conducto."],xp:2,build(n,t,e){const i=hd[(e.variant||0)%hd.length];t.legs=[Ct(n,.28,.5,.3,i,-.18,.5,0),Ct(n,.28,.5,.3,i,.18,.5,0)],B(n,.74,.85,.52,i,0,.95,0),B(n,.62,.22,.46,i,0,1.46,0),B(n,.22,.6,.42,i,0,.95,-.4),B(n,.5,.3,.1,10408678,0,1.25,.28).material.emissive=new St(4881040),B(n,.18,.08,.06,15268095,-.12,1.32,.34)},drops:()=>Math.random()<.25?[[A.COAL,1]]:[]},impostor:{hw:.34,h:1.65,hp:34,speed:3.3,hostile:!0,name:"Impostor",melee:!0,damage:8,reach:1.7,cd:1.1,teleports:!0,tpCool:6,xp:12,build(n,t){t.legs=[Ct(n,.28,.5,.3,12914961,-.18,.5,0),Ct(n,.28,.5,.3,12914961,.18,.5,0)],B(n,.74,.85,.52,12914961,0,.95,0),B(n,.62,.22,.46,12914961,0,1.46,0),B(n,.22,.6,.42,9047052,0,.95,-.4),B(n,.5,.3,.1,10408678,0,1.25,.28).material.emissive=new St(4881040),B(n,.18,.08,.06,15268095,-.12,1.32,.34),B(n,.08,.5,.06,13684952,.5,.95,.34),B(n,.14,.08,.1,3158064,.5,.68,.34)},drops:()=>Math.random()<.5?[[A.COAL,2]]:[[A.IRON,1]]},homer:{hw:.42,h:1.95,hp:40,speed:2,hostile:!1,neutral:!0,melee:!0,damage:6,reach:1.6,name:"Homer",talk:["¡D'oh!","Mmm… rosquillas.","¡Woohoo!","¿Dónde está Bart?","Para todo en la vida hay una cerveza."],xp:6,build(n,t){t.legs=[Ct(n,.32,.8,.34,5930688,-.18,.8,0),Ct(n,.32,.8,.34,5930688,.18,.8,0)],B(n,.86,1,.55,16053492,0,1.3,0),B(n,.7,.3,.5,5930688,0,.88,0),t.arms=[Ct(n,.26,.8,.26,16767247,-.55,1.75,0),Ct(n,.26,.8,.26,16767247,.55,1.75,0)],t.head=B(n,.66,.62,.62,16767247,0,2.05,0),B(n,.5,.18,.2,11049064,0,1.92,.34),B(n,.14,.14,.14,16777215,-.15,2.12,.34),B(n,.14,.14,.14,16777215,.15,2.12,.34),B(n,.05,.05,.04,1052688,-.15,2.12,.42),B(n,.05,.05,.04,1052688,.15,2.12,.42),B(n,.22,.18,.2,16767247,0,2,.42),B(n,.03,.14,.03,2105376,-.06,2.42,.05),B(n,.03,.14,.03,2105376,.06,2.42,.05)},drops:()=>[[A.DONUT,1+Math.floor(Math.random()*3)],...Math.random()<.35?[[A.DUFF,1]]:[]]},bart:{hw:.26,h:1.4,hp:22,speed:4.2,hostile:!0,melee:!0,damage:3,reach:1.15,cd:.8,name:"Bart",talk:["¡Ay, caramba!","¡Cómete mis shorts!","No fui yo.","¡Eeeeeso!"],xp:5,build(n,t){t.legs=[Ct(n,.2,.55,.22,16767247,-.1,.55,0),Ct(n,.2,.55,.22,16767247,.1,.55,0)],B(n,.5,.2,.34,2776256,0,.62,0),B(n,.5,.55,.34,15228960,0,.98,0),t.arms=[Ct(n,.18,.5,.2,16767247,-.34,1.2,0),Ct(n,.18,.5,.2,16767247,.34,1.2,0)],t.head=B(n,.46,.46,.42,16767247,0,1.5,0);for(let i=-2;i<=2;i++)B(n,.08,.2+(i%2?.08:0),.08,16767247,i*.1,1.84,0).rotation.z=-i*.15;B(n,.1,.1,.1,16777215,-.12,1.55,.24),B(n,.1,.1,.1,16777215,.12,1.55,.24),B(n,.04,.04,.03,1052688,-.12,1.55,.3),B(n,.04,.04,.03,1052688,.12,1.55,.3)},drops:()=>[[A.DONUT,1]]},marge:{hw:.34,h:2.7,hp:24,speed:1.4,hostile:!1,name:"Marge",talk:["Hmmmm…","¡Homero!","Eso no está bien.","Niños, a cenar."],xp:2,build(n,t){t.legs=[Ct(n,.28,.7,.3,16767247,-.14,.7,0),Ct(n,.28,.7,.3,16767247,.14,.7,0)],B(n,.7,.9,.45,3842144,0,1.15,0),B(n,.74,.5,.5,3842144,0,.8,0),t.arms=[Ct(n,.2,.7,.22,16767247,-.46,1.55,0),Ct(n,.2,.7,.22,16767247,.46,1.55,0)],t.head=B(n,.56,.52,.52,16767247,0,1.85,0),B(n,.6,1.1,.56,3108816,0,2.5,0),B(n,.5,.4,.5,3108816,0,3.2,0);for(let s=-2;s<=2;s++)B(n,.07,.07,.07,16777215,s*.1,1.55,.26);B(n,.12,.12,.12,16777215,-.12,1.9,.28),B(n,.12,.12,.12,16777215,.12,1.9,.28),B(n,.04,.04,.03,1052688,-.12,1.9,.34),B(n,.04,.04,.03,1052688,.12,1.9,.34)},drops:()=>[[A.DONUT,1]]},lisa:{hw:.28,h:1.7,hp:20,speed:1.8,hostile:!1,name:"Lisa",talk:["La inteligencia importa.","Tocaré mi saxofón.","Ser vegetariana es lo correcto.","¡Bart, no!"],xp:2,build(n,t){t.legs=[Ct(n,.2,.55,.22,16767247,-.1,.55,0),Ct(n,.2,.55,.22,16767247,.1,.55,0)],B(n,.54,.7,.34,13646378,0,.95,0),B(n,.6,.3,.36,13646378,0,.7,0),t.arms=[Ct(n,.16,.5,.18,16767247,-.36,1.25,0),Ct(n,.16,.5,.18,16767247,.36,1.25,0)],t.head=B(n,.48,.46,.44,16767247,0,1.55,0);for(let i=0;i<7;i++){const s=i/7*Math.PI*2;B(n,.1,.3,.1,16767247,Math.cos(s)*.25,1.9,Math.sin(s)*.25).rotation.z=-Math.cos(s)*.6}B(n,.1,.1,.1,16777215,-.12,1.6,.24),B(n,.1,.1,.1,16777215,.12,1.6,.24)},drops:()=>[]},maggie:{hw:.2,h:.75,hp:12,speed:.9,hostile:!1,name:"Maggie",talk:["*chupete*","¡Pi pi pi!"],xp:1,build(n,t){t.legs=[Ct(n,.14,.2,.16,8040680,-.09,.2,.1),Ct(n,.14,.2,.16,8040680,.09,.2,.1)],B(n,.34,.34,.3,8040680,0,.4,0),t.head=B(n,.34,.3,.3,16767247,0,.7,.04);for(const i of[-.07,.07])B(n,.06,.06,.03,1052688,i,.72,.2);B(n,.08,.06,.06,14692400,0,.62,.22),B(n,.05,.16,.05,16767247,0,.92,.04),B(n,.05,.12,.05,16767247,.06,.9,.04).rotation.z=-.4},drops:()=>[]},flanders:{hw:.3,h:1.9,hp:24,speed:1.6,hostile:!1,name:"Flanders",talk:["¡Hola holita, vecinito!","Okily dokily.","¡Qué diddly día!","Hola, Homero."],xp:2,build(n,t){t.legs=[Ct(n,.26,.8,.28,4872842,-.14,.8,0),Ct(n,.26,.8,.28,4872842,.14,.8,0)],B(n,.6,.85,.4,4889146,0,1.2,0),t.arms=[Ct(n,.2,.75,.22,4889146,-.4,1.6,0),Ct(n,.2,.75,.22,4889146,.4,1.6,0)],t.head=B(n,.5,.5,.46,16767247,0,1.93,0),B(n,.3,.07,.06,1710618,0,1.83,.26),B(n,.5,.1,.46,2759184,0,2.2,0),B(n,.4,.14,.04,13625584,0,1.97,.26)},drops:()=>[]},saibaman:{hw:.24,h:1.15,hp:14,speed:3.8,hostile:!0,name:"Saibaman",creeper:!0,explodeR:2.4,fuseTime:1.1,xp:8,build(n,t){t.legs=[Ct(n,.14,.5,.16,5152832,-.12,.5,0),Ct(n,.14,.5,.16,5152832,.12,.5,0)],B(n,.4,.5,.24,5152832,0,.78,0),t.arms=[Ct(n,.1,.5,.12,5152832,-.27,.98,0),Ct(n,.1,.5,.12,5152832,.27,.98,0)],t.head=B(n,.5,.42,.42,5152832,0,1.15,0),B(n,.1,.1,.04,15786016,-.12,1.2,.22),B(n,.1,.1,.04,15786016,.12,1.2,.22),B(n,.16,.05,.04,1056784,0,1.06,.22);for(const[i,s]of[[.1,.8],[-.1,.65]])B(n,.1,.1,.03,2779682,i,s,.13);B(n,.08,.2,.08,5152832,0,1.46,0)},drops:()=>Math.random()<.08?[[A.DBALL,1]]:[]},dog:{hw:.3,h:.85,hp:10,speed:5.2,hostile:!0,melee:!0,damage:3,reach:1.1,cd:.8,name:"Perro de Burns",xp:3,build(n,t){B(n,.4,.4,.9,9079440,0,.55,0),t.head=B(n,.34,.34,.4,9079440,0,.72,.6),B(n,.2,.15,.2,3158064,0,.64,.84),B(n,.1,.16,.08,3158064,-.14,.95,.55),B(n,.1,.16,.08,3158064,.14,.95,.55),B(n,.12,.12,.35,9079440,0,.7,-.6).rotation.x=.7,t.legs=[[-.14,.3],[.14,.3],[-.14,-.3],[.14,-.3]].map(([i,s])=>Ct(n,.12,.35,.12,6974064,i,.35,s))},drops:()=>[]},zombie:{hw:.3,h:1.8,hp:20,speed:2.5,hostile:!0,name:"Zombi",damage:3,build(n,t){t.legs=[Ct(n,.26,.75,.26,2899612,-.14,.75,0),Ct(n,.26,.75,.26,2899612,.14,.75,0)],B(n,.54,.75,.28,2794936,0,1.125,0),t.arms=[Ct(n,.22,.72,.22,5147194,-.38,1.45,0),Ct(n,.22,.72,.22,5147194,.38,1.45,0)],t.arms.forEach(e=>e.rotation.x=-Math.PI/2.2),t.head=B(n,.5,.5,.5,5147194,0,1.75,0),B(n,.1,.07,.02,1052688,-.12,1.78,.26),B(n,.1,.07,.02,1052688,.12,1.78,.26)},drops:()=>Math.random()<.15?[[A.IRON,1]]:[]},creeper:{hw:.3,h:1.7,hp:20,speed:2.3,hostile:!0,name:"Creeper",creeper:!0,build(n,t){t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,a])=>Ct(n,.26,.45,.26,4099646,l,.45,a*.5)),t.body=B(n,.5,.85,.3,5154894,0,.88,0);const i=r_(l=>{l.fillStyle="#4ea84e",l.fillRect(0,0,8,8),l.fillStyle="#0c1a0c",l.fillRect(1,2,2,2),l.fillRect(5,2,2,2),l.fillRect(3,4,2,2),l.fillRect(2,5,1,2),l.fillRect(5,5,1,2)}),s=_s(5154894),o=[s,s,s,s,_s(16777215,i),s],r=new _t(new Kt(.5,.5,.5),o);r.position.set(0,1.55,0),n.add(r),t.head=r},drops:()=>[]}},hd=[12914961,1257169,1146669,15553722,15695118,16119127,4147022,14082288,7024571,7424286,3735260,5304121],cd=["zombie","zombie","zombie","creeper","creeper","skeleton","skeleton","skeleton","spider","spider","enderman","impostor","impostor","saibaman","saibaman","bart"],fd=["crewmate","crewmate","crewmate","homer","marge","lisa","maggie","flanders"],dd=["zombie","zombie","creeper","skeleton","skeleton","spider"];class a_{constructor(t,e,i,s,o){this.type=t,this.def=mo[t],this.pos=new I(e,i,s),this.vel=new I,this.hw=this.def.hw,this.h=this.def.h,this.hp=this.def.hp,this.yaw=Math.random()*Math.PI*2,this.variant=Math.floor(Math.random()*12),this.group=new we,this.parts={},this.def.build(this.group,this.parts,this),this.model=new we,this.model.add(this.group),o.add(this.model),this.group.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),this.wanderT=0,this.wanderDir=0,this.moving=!1,this.cool=0,this.flash=0,this.fuse=0,this.walkT=0,this.age=0,this.onGround=!1,this.sound=3+Math.random()*10}materials(){const t=[];return this.group.traverse(e=>{e.material&&(Array.isArray(e.material)?t.push(...e.material):t.push(e.material))}),t}hit(t,e,i){this.def.shulker&&(this.lid||0)<.4&&(t*=.3),this.hp-=t,this.flash=.3,this.provoked=!0,this.aggro=!0;const s=this.pos.x-e,o=this.pos.z-i,r=Math.hypot(s,o)||1;this.vel.x=s/r*6,this.vel.z=o/r*6,this.vel.y=5}dispose(t){t.remove(this.model),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())})}}function ir(n,t,e,i){let s=0,o=1/0;for(const r of["x","y","z"]){if(Math.abs(t[r])<1e-9){if(n[r]<e[r]||n[r]>i[r])return-1;continue}let l=(e[r]-n[r])/t[r],a=(i[r]-n[r])/t[r];if(l>a&&([l,a]=[a,l]),s=Math.max(s,l),o=Math.min(o,a),s>o)return-1}return s}class l_{constructor(t,e,i){this.scene=t,this.world=e,this.hooks=i,this.list=[],this.spawnT=0,this.arrows=[],this.dim="overworld"}add(t,e,i,s){const o=new a_(t,e,i,s,this.scene);return this.list.push(o),o}clear(){for(const t of this.list)t.dispose(this.scene);this.list=[];for(const t of this.arrows)this.scene.remove(t.mesh);this.arrows=[]}raycast(t,e,i){let s=null;for(const o of this.list){const r=ir(t,e,{x:o.pos.x-o.hw,y:o.pos.y,z:o.pos.z-o.hw},{x:o.pos.x+o.hw,y:o.pos.y+o.h,z:o.pos.z+o.hw});r>=0&&r<=i&&(!s||r<s.dist)&&(s={mob:o,dist:r})}return s}damage(t,e,i,s){t.hit(e,i,s),this.hooks.sound("hit"),t.hp<=0&&this.kill(t)}kill(t){for(const[e,i]of t.def.drops())this.hooks.drop(t.pos.x,t.pos.y+.5,t.pos.z,e,i);this.hooks.killed&&this.hooks.killed(t.type,t.def.xp||2),this.hooks.puff(t.pos.x,t.pos.y+t.h/2,t.pos.z),t.dispose(this.scene),this.list.splice(this.list.indexOf(t),1)}update(t,e,i,s,o){const r=this.world;for(let l=this.list.length-1;l>=0;l--){const a=this.list[l];a.age+=t,a.cool=Math.max(0,a.cool-t),a.flash=Math.max(0,a.flash-t);const h=e.pos.x-a.pos.x,f=e.pos.z-a.pos.z,c=Math.hypot(h,f),d=e.pos.y-a.pos.y;let u=a.def.hostile&&i==="survival"&&!e.dead;if(a.type==="spider"&&s>.5&&!a.provoked&&(u=!1),a.def.enderman&&i==="survival"&&!e.dead&&!a.aggro&&c<24){const w=e.lookDir(),C=a.pos.x-e.pos.x,y=a.pos.y+2.6-(e.pos.y+1.62),S=a.pos.z-e.pos.z,P=Math.hypot(C,y,S);(w.x*C+w.y*y+w.z*S)/P>.985&&(a.aggro=!0)}(a.def.enderman||a.def.neutral)&&a.aggro&&i==="survival"&&!e.dead&&(u=!0);let g=null,x=a.def.speed;a.type==="hoglin"&&u&&c<10&&(x*=1.9),a.def.static&&(u=u&&!0),u&&c<26&&Math.abs(d)<14?(g=Math.atan2(-h,-f),a.def.ranged&&c<6&&(g+=Math.PI)):(a.wanderT-=t,a.wanderT<=0&&(a.wanderT=2+Math.random()*4,a.wanderDir=Math.random()<.4?null:Math.random()*Math.PI*2),a.wanderDir!==null&&a.wanderDir!==void 0&&(g=a.wanderDir),x*=.6);let m=!1;const p=a.def.ranged&&u&&c>=6&&c<12;if(g!==null){let w=g-a.yaw;if(w=Math.atan2(Math.sin(w),Math.cos(w)),a.yaw+=Math.max(-8*t,Math.min(8*t,w)),m=!p,p){const C=Math.atan2(-h,-f)-a.yaw;a.yaw+=Math.atan2(Math.sin(C),Math.cos(C))*Math.min(1,t*10)}}if(a.def.creeper){u&&c<(a.def.explodeR?2.2:3)&&Math.abs(d)<2?(a.fuse+=t,a.fuse-t<=0&&this.hooks.sound("hiss"),m=!1):a.fuse=Math.max(0,a.fuse-t*2);const w=1+(a.fuse>0?Math.sin(a.fuse*30)*.04+a.fuse*.15:0);if(a.group.scale.set(w,w,w),a.fuse>=(a.def.fuseTime||1.5)){this.hooks.explode(a.pos.x,a.pos.y+.8,a.pos.z,a.def.explodeR||3.2),a.dispose(this.scene),this.list.splice(l,1);continue}}const M=r.isLiquid(Math.floor(a.pos.x),Math.floor(a.pos.y+.2),Math.floor(a.pos.z)),b=-Math.sin(a.yaw),v=-Math.cos(a.yaw);if(m&&a.knock===void 0?(a.vel.x+=(b*x-a.vel.x)*Math.min(1,t*8),a.vel.z+=(v*x-a.vel.z)*Math.min(1,t*8)):(!a.def.hopper||a.onGround)&&(a.vel.x*=Math.max(0,1-t*6),a.vel.z*=Math.max(0,1-t*6)),a.def.hopper&&(m=!1,a.hopT=(a.hopT===void 0?.5:a.hopT)-t,a.onGround&&a.hopT<=0&&u&&(a.hopT=1+Math.random()*.8,a.vel.y=7.5,a.vel.x=h/(c||1)*3.4,a.vel.z=f/(c||1)*3.4,a.yaw=Math.atan2(-h,-f))),a.moving=m,M&&(a.vel.y=Math.max(a.vel.y,0)+14*t,a.vel.y=Math.min(a.vel.y,2.5)),a.def.fly)this.flyMob(a,t,e,u,h,f,d,c),a.onGround=!1;else{const w=Rs(r,a,t);a.onGround=w.onGround,(w.hitX||w.hitZ)&&w.onGround&&m&&(a.vel.y=7.4)}if((a.def.melee||a.type==="zombie"||a.type==="piglin"||a.type==="witherskeleton"||a.type==="hoglin"||a.type==="endermite")&&u&&c<(a.def.reach||1.2)&&Math.abs(d)<1.8&&a.cool<=0&&(a.cool=a.def.cd||(a.type==="endermite"?.8:1),this.hooks.hurtPlayer(a.def.damage,h/(c||1)*(a.type==="hoglin"?9:5),f/(c||1)*(a.type==="hoglin"?9:5)),a.def.effect&&this.hooks.effect(a.def.effect[0],a.def.effect[1])),(a.type==="spider"||a.def.hopper||a.def.enderman)&&u&&c<(a.type==="spider"?1.7:a.def.hopper?1.3:1.5)&&Math.abs(d)<1.8&&a.cool<=0&&(a.cool=a.type==="spider"?.9:1,this.hooks.hurtPlayer(a.type==="spider"||a.type==="slime"?2:a.type==="magmacube"?3:6,h/(c||1)*4,f/(c||1)*4),a.type==="magmacube"&&this.hooks.effect("burn",3)),a.def.shulker){a.lid=a.lid===void 0?0:a.lid;const w=u&&c<18?1:0;a.lid+=(w-a.lid)*Math.min(1,t*4),a.parts.lid.rotation.x=-a.lid*1.1,w&&a.lid>.8&&a.cool<=0&&!e.dead&&(a.cool=3.2,this.shootArrow(new I(a.pos.x,a.pos.y+.7,a.pos.z),new I(h,d+.9,f).normalize(),!1,"bullet")),a.vel.x=a.vel.z=0}if(a.def.ranged&&u&&c<22&&a.cool<=0){const w=new I(a.pos.x,a.pos.y+1.6,a.pos.z),C=new I(e.pos.x,e.pos.y+1.2,e.pos.z),y=C.clone().sub(w),S=y.length();y.normalize(),r.raycast(w,y,S)||(a.cool=2.2,this.shootArrow(w,y.multiplyScalar(1).setY(y.y+.04*S/10)))}if((a.def.enderman&&a.aggro||a.def.teleports&&u)&&(a.tpT=(a.tpT===void 0?4:a.tpT)-t,a.tpT<=0&&c>3)){a.tpT=(a.def.tpCool||5)+Math.random()*3;const w=Math.random()*Math.PI*2,C=4+Math.random()*5,y=Math.floor(e.pos.x+Math.cos(w)*C),S=Math.floor(e.pos.z+Math.sin(w)*C),P=r.topY(y,S);P>0&&!r.isSolid(y,P+1,S)&&(this.hooks.tp(a.pos.x,a.pos.y+1,a.pos.z),a.pos.set(y+.5,P+1,S+.5),a.vel.set(0,0,0),this.hooks.tp(a.pos.x,a.pos.y+1,a.pos.z))}if(a.type==="chicken"&&a.vel.y<-2&&(a.vel.y=-2),(a.type==="zombie"||a.type==="skeleton")&&s>.75&&r.skyLit(Math.floor(a.pos.x),Math.floor(a.pos.y+1),Math.floor(a.pos.z))&&!M&&(a.burn=(a.burn||0)+t,a.burn>1&&(a.burn=0,a.hit(2,a.pos.x,a.pos.z),a.vel.set(0,0,0),a.hp<=0))){this.kill(a);continue}a.sound-=t,a.sound<=0&&(a.sound=6+Math.random()*12,c<16&&this.hooks.sound(a.type==="pig"?"oink":a.type==="cow"||a.type==="sheep"?"moo":a.type==="chicken"?"pop":a.type==="zombie"||a.type==="skeleton"||a.type==="spider"?"groan":"")),a.parts.rods&&a.parts.rods.forEach((w,C)=>w.rotation.y+=t*(2+C)),a.walkT+=t*(m?9:0);const D=m?Math.sin(a.walkT)*.7:0;a.parts.legs&&a.parts.legs.forEach((w,C)=>w.rotation.x=C%2?-D:D),a.model.position.copy(a.pos),a.model.rotation.y=a.yaw+Math.PI;const E=a.flash>0||a.fuse>0&&Math.floor(a.fuse*8)%2===0;for(const w of a.materials())w.emissive&&w.emissive.setRGB(E?a.fuse>0?.8:.5:0,E&&a.fuse>0?.8:0,E&&a.fuse>0?.8:0);(c>o*16+24||a.pos.y<-20)&&(a.dispose(this.scene),this.list.splice(l,1))}for(let l=this.arrows.length-1;l>=0;l--){const a=this.arrows[l];if(a.life-=t,a.vel.y-=(a.fire||a.bullet?0:7)*t,a.bullet){const d=new I(e.pos.x,e.pos.y+1,e.pos.z).sub(a.mesh.position).normalize().multiplyScalar(5);a.vel.lerp(d,Math.min(1,t*2.2))}a.mesh.position.addScaledVector(a.vel,t),a.mesh.lookAt(a.mesh.position.clone().add(a.vel));const h=a.mesh.position,f=Math.hypot(h.x-e.pos.x,h.y-(e.pos.y+.9),h.z-e.pos.z)<.75,c=f||a.life<=0||r.isSolid(Math.floor(h.x),Math.floor(h.y),Math.floor(h.z));a.big&&c?(this.hooks.explode(h.x,h.y,h.z,2.6,.4),Math.hypot(h.x-e.pos.x,h.y-e.pos.y,h.z-e.pos.z)<4.5&&this.hooks.effect("burn",4)):f&&!e.dead&&(this.hooks.hurtPlayer(a.bullet||a.fire?3:4,a.vel.x*.25,a.vel.z*.25),a.fire&&this.hooks.effect("burn",4),a.bullet&&this.hooks.effect("levitate",5)),c&&(this.scene.remove(a.mesh),this.arrows.splice(l,1))}this.spawnT-=t,this.spawnT<=0&&(this.spawnT=1.5,this.trySpawn(e,i,s))}flyMob(t,e,i,s,o,r,l,a){const h=t.def.flyKind;if(h==="ghast"||h==="phantom")return this.flyMob2(t,e,i,s,o,r,l,a,h);const f=this.world;let c=0,d=0;s&&a>12?(c=o/(a||1),d=r/(a||1)):s&&a<6&&(c=-o/(a||1),d=-r/(a||1));const u=s?i.pos.y+3+Math.sin(t.age*1.4)*.8:t.pos.y+Math.sin(t.age)*.4;t.vel.x+=(c*t.def.speed-t.vel.x)*Math.min(1,e*3),t.vel.z+=(d*t.def.speed-t.vel.z)*Math.min(1,e*3),t.vel.y+=((u-t.pos.y)*1.2-t.vel.y)*Math.min(1,e*3);const g=t.pos.x+t.vel.x*e,x=t.pos.y+t.vel.y*e,m=t.pos.z+t.vel.z*e;if(f.isSolid(Math.floor(g),Math.floor(x+1),Math.floor(m))||t.pos.set(g,x,m),s)if(t.yaw=Math.atan2(-o,-r),t.burst=t.burst||0,t.burst>0){if(t.burstT-=e,t.burstT<=0){t.burst--,t.burstT=.28;const p=new I(t.pos.x,t.pos.y+1.4,t.pos.z),M=new I(i.pos.x,i.pos.y+1,i.pos.z),b=M.sub(p).normalize();this.shootArrow(p,b,!0)}}else t.cool<=0&&a<26&&!f.raycast(new I(t.pos.x,t.pos.y+1.4,t.pos.z),new I(o,l,r).normalize(),a)&&(t.cool=4,t.burst=3,t.burstT=0,this.hooks.sound("hiss"))}flyMob2(t,e,i,s,o,r,l,a,h){const f=this.world;let c,d,u;const g=(M,b,v,D)=>{t.vel.x+=(M-t.vel.x)*Math.min(1,e*D),t.vel.y+=(b-t.vel.y)*Math.min(1,e*D),t.vel.z+=(v-t.vel.z)*Math.min(1,e*D)};if(h==="ghast"){if(c=u=0,s&&a>21?(c=o/a,u=r/a):s&&a<12&&(c=-o/a,u=-r/a),d=s?i.pos.y+7+Math.sin(t.age)*1.2:t.pos.y,g(c*t.def.speed,(d-t.pos.y)*.8,u*t.def.speed,2),s)if(t.yaw=Math.atan2(-o,-r),t.tele>0){if(t.tele-=e,t.flash=.12,t.tele<=0){const b=new I(t.pos.x,t.pos.y+1.4,t.pos.z),v=new I(i.pos.x+i.vel.x*.4,i.pos.y+1,i.pos.z+i.vel.z*.4).sub(b).normalize();this.shootArrow(b,v,!0,"big")}}else t.cool<=0&&a<42&&!f.raycast(new I(t.pos.x,t.pos.y+1.4,t.pos.z),new I(o,l,r).normalize(),a)&&(t.cool=4.8,t.tele=.9,this.hooks.sound("hiss"))}else{if(!s)g(Math.cos(t.age)*1.5,Math.sin(t.age*.7)*.5,Math.sin(t.age)*1.5,2);else{if(t.swoop=t.swoop===void 0?3:t.swoop-e,!t.diving&&t.swoop<=0&&(t.diving=!0,t.diveT=1.9,t.swoop=4+Math.random()*3),t.diving){const M=new I(i.pos.x-t.pos.x,i.pos.y+1-t.pos.y,i.pos.z-t.pos.z),b=M.length()||1;g(M.x/b*11,M.y/b*11,M.z/b*11,6),t.diveT-=e,b<1.7&&t.cool<=0&&!i.dead&&(t.cool=1.2,this.hooks.hurtPlayer(4,M.x*1.5,M.z*1.5),t.diving=!1),t.diveT<=0&&(t.diving=!1)}else{const M=t.age*.9;c=i.pos.x+Math.cos(M)*9,u=i.pos.z+Math.sin(M)*9,d=i.pos.y+8,g((c-t.pos.x)*.7,(d-t.pos.y)*.9,(u-t.pos.z)*.7,2)}t.yaw=Math.atan2(-t.vel.x,-t.vel.z)}t.parts.wings&&t.parts.wings.forEach(M=>M.g.rotation.z=M.s*Math.sin(t.age*9)*.5)}const x=t.pos.x+t.vel.x*e,m=t.pos.y+t.vel.y*e,p=t.pos.z+t.vel.z*e;f.isSolid(Math.floor(x),Math.floor(m+.5),Math.floor(p))?(t.vel.x*=-.3,t.vel.z*=-.3,t.diving=!1):t.pos.set(x,m,p)}shootArrow(t,e,i=!1,s=null){const o=s==="big",r=s==="bullet",l=r?new _t(new Kt(.34,.34,.34),new ce({color:16052384})):i?new _t(new Kt(o?1.1:.4,o?1.1:.4,o?1.1:.4),new ce({color:o?16765040:16747040})):new _t(new Kt(.07,.07,.8),new xi({color:9071162,emissive:2102280}));l.position.copy(t),this.scene.add(l),this.arrows.push({mesh:l,vel:e.normalize().multiplyScalar(r?5:o?12:i?15:22),life:r?8:i?7:4,fire:i,big:o,bullet:r}),this.hooks.sound("shoot",.5)}trySpawnDim(t,e){if(e!=="survival")return;const i=this.world;if(this.list.length>=(this.dim==="nether"?14:10))return;if(Math.random()<.55)for(let h=0;h<8;h++){const f=Math.floor(t.pos.x+(Math.random()-.5)*44),c=Math.floor(t.pos.z+(Math.random()-.5)*44);for(let d=Math.min(re-6,Math.floor(t.pos.y)+12);d>Math.max(3,Math.floor(t.pos.y)-16);d--){const u=i.getBlock(f,d-1,c),g=this.dim==="nether"&&u===_.NETHER_BRICKS,x=this.dim==="end"&&(u===_.PURPUR||u===_.END_BRICKS);if((g||x)&&!i.isSolid(f,d,c)&&!i.isSolid(f,d+1,c)&&!i.isSolid(f,d+2,c)){if(Math.hypot(f-t.pos.x,c-t.pos.z)<9)break;this.add(g?Math.random()<.65?"witherskeleton":"blaze":Math.random()<.75?"shulker":"endermite",f+.5,d,c+.5);return}}}const o=Math.random()*Math.PI*2,r=14+Math.random()*18,l=Math.floor(t.pos.x+Math.cos(o)*r),a=Math.floor(t.pos.z+Math.sin(o)*r);for(let h=Math.min(re-6,Math.floor(t.pos.y)+22);h>4;h--)if(i.isSolid(l,h-1,a)&&!i.isLiquid(l,h-1,a)&&!i.isSolid(l,h,a)&&!i.isSolid(l,h+1,a)&&!i.isLiquid(l,h,a)){const f=Math.random();if(this.dim==="nether"){const c=f<.26?"piglin":f<.4?"blaze":f<.58?"magmacube":f<.72?"witherskeleton":f<.86?"hoglin":"ghast";this.add(c,l+.5,c==="blaze"?h+2:c==="ghast"?h+8:h,a+.5)}else{const c=f<.34?"enderman":f<.58?"shulker":f<.78?"endermite":"phantom";this.add(c,l+.5,c==="phantom"?h+8:h,a+.5)}return}}trySpawn(t,e,i){if(this.dim!=="overworld")return this.trySpawnDim(t,e);const s=this.world,o=this.list.filter(a=>!a.def.hostile).length,r=this.list.length-o,l=(a,h)=>{const f=Math.random()*Math.PI*2,c=a+Math.random()*(h-a),d=Math.floor(t.pos.x+Math.cos(f)*c),u=Math.floor(t.pos.z+Math.sin(f)*c);return[d,u]};if(this.list.filter(a=>a.type==="villager").length<5&&Math.random()<.45)for(let a=0;a<10;a++){const h=Math.floor(t.pos.x+(Math.random()-.5)*52),f=Math.floor(t.pos.z+(Math.random()-.5)*52);for(let c=Math.min(re-6,Math.floor(t.pos.y)+10);c>Math.max(3,Math.floor(t.pos.y)-10);c--){if(s.getBlock(h,c-1,f)!==_.PLANKS||s.isSolid(h,c,f)||s.isSolid(h,c+1,f)||s.isSolid(h,c+2,f))continue;let d=!1;for(let u=-4;u<=4&&!d;u++)for(let g=-4;g<=4;g++){const x=s.getBlock(h+u,c,f+g);if(x===_.TABLE||x===_.FURNACE||x===_.CHEST){d=!0;break}}if(d&&Math.hypot(h-t.pos.x,f-t.pos.z)>8){this.add("villager",h+.5,c,f+.5);return}break}}if(o<10&&i>.45){const[a,h]=l(16,40),f=s.topY(a,h);if(f>0){const c=s.getBlock(a,f,h);(c===_.GRASS||c===_.SNOW)&&!s.isSolid(a,f+1,h)&&!s.isLiquid(a,f+1,h)&&this.add(Math.random()<.28?fd[Math.floor(Math.random()*fd.length)]:["pig","cow","sheep","chicken"][Math.floor(Math.random()*4)],a+.5,f+1,h+.5)}}if(!(e!=="survival"||r>=8)){if(i<.3){const[a,h]=l(20,36),f=s.topY(a,h);f>0&&!s.isSolid(a,f+1,h)&&!s.isLiquid(a,f+1,h)&&rn[s.getBlock(a,f,h)]&&this.add(cd[Math.floor(Math.random()*cd.length)],a+.5,f+1,h+.5)}else if(r<4){const a=Math.random()*Math.PI*2,h=14+Math.random()*14,f=Math.floor(t.pos.x+Math.cos(a)*h),c=Math.floor(t.pos.z+Math.sin(a)*h),d=s.topY(f,c);if(d<8)return;const u=3+Math.floor(Math.random()*Math.max(1,d-8));s.getBlock(f,u,c)===0&&s.getBlock(f,u+1,c)===0&&s.isSolid(f,u-1,c)&&!s.skyLit(f,u,c)&&this.add(dd[Math.floor(Math.random()*dd.length)],f+.5,u,c+.5)}}}}const Ke=(n,t)=>n+Math.random()*(t-n),h_=[1,1.3,1.75],c_=[18,20,15],f_=[4.2,3.2,2.4],d_=[1,2,3],u_=[5,6,8],p_=[5,4,3],ud=[3.2,4.6,6.2];function m_(){const n=document.createElement("canvas");n.width=n.height=16;const t=n.getContext("2d");for(let i=0;i<16;i++)for(let s=0;s<16;s++){const o=Math.sin(s*12.9+i*78.2)*43758.5%1,r=190+Math.abs(o)*30;t.fillStyle=`rgb(${r|0},${r*.58|0},${r*.28|0})`,t.fillRect(s,i,1,1)}t.fillStyle="#4a2208",t.fillRect(0,0,16,1),t.fillRect(0,15,16,1),t.fillRect(0,0,1,16),t.fillRect(15,0,1,16),t.fillStyle="#2a1204";for(let i=0;i<4;i++)t.fillRect(4+i,4+i,2,1),t.fillRect(4+i,11-i,2,1);t.fillRect(9,10,4,1);const e=new Ui(n);return e.magFilter=_e,e.minFilter=_e,e.generateMipmaps=!1,e.colorSpace=oi,e}class g_{constructor(t,e,i){this.scene=t,this.h=e,this.pos=i.clone(),this.name="TORMENTA WITHER",this.type="storm",this.maxHp=360,this.hp=360,this.phase=1,this.scale=1,this.scaleT=1,this.t=0,this.yaw=0,this.flash=0,this.devourT=1,this.atkT=3,this.beamT=3,this.beamOn=!1,this.minionT=10,this.meleeT=0,this.beamHurtT=0,this.shell=1,this.dead=!1,this.skulls=[],this.root=new we,this.body=new we,this.root.add(this.body),this.dark=new xi({color:1511967}),this.dark2=new xi({color:2760758}),this.glow=new ce({color:12611839}),this.build(),this.beam=new _t(new _n(.14,.14,1,6),new ce({color:11559167,transparent:!0,opacity:.6,fog:!1,depthWrite:!1})),this.beam.visible=!1,t.add(this.beam),this.skullGeo=new Kt(.9,.9,.9),this.skullMat=new xi({color:2102576,emissive:5906576}),t.add(this.root),this.root.position.copy(i)}build(){const{dark:t,dark2:e,glow:i,body:s}=this,o=(a,h,f,c,d,u,g,x=s)=>{const m=new _t(new Kt(a,h,f),c);return m.position.set(d,u,g),x.add(m),m};o(5,5,5,t,0,0,0);for(let a=0;a<28;a++){const h=Ke(1,2.6),f=Math.floor(Math.random()*3),c=Math.random()<.5?-1:1,d=[Ke(-2.5,2.5),Ke(-2.5,2.5),Ke(-2.5,2.5)];d[f]=c*(2.5+h*.2),o(h,h*Ke(.7,1.3),h,Math.random()<.5?t:e,d[0],d[1],d[2]).rotation.set(Ke(-.3,.3),Ke(-.3,.3),Ke(-.3,.3))}for(let a=0;a<6;a++)o(.9,Ke(2,3.6),.9,e,Ke(-2,2),3.2,Ke(-3,0)).rotation.z=Ke(-.4,.4);this.heads=[];const r=(a,h,f,c,d)=>{const u=new we;u.position.set(h,f,c),u.rotation.y=d,s.add(u),o(a,a,a,e,0,0,0,u);for(const x of[-1,1])o(a*.24,a*.12,.12,i,x*a*.24,a*.12,a/2+.03,u);const g=new we;g.position.set(0,-a*.42,a*.05),u.add(g),o(a*.92,a*.3,a*.86,t,0,-a*.1,0,g);for(let x=-2;x<=2;x++)o(a*.08,a*.14,a*.08,i,x*a*.18,a*.05,a*.42,g);this.heads.push({g:u,jaw:g,size:a})};r(3.6,0,4,2.2,0),r(2.6,-3.9,3,1.3,-.35),r(2.6,3.9,3,1.3,.35),this.tents=[];const l=(a,h,f,c,d,u,g,x,m)=>{const p=[];for(let M=0;M<g;M++){const b=x*(1-M/g*.72),v=new _t(new Kt(b,b,b),M===g-1&&m?i:M%2?t:e);s.add(v),p.push({m:v,s:b})}this.tents.push({b:new I(a,h,f),d:new I(c,d,u).normalize(),segs:p,ph:Math.random()*6})};for(let a=0;a<6;a++)l(Ke(-2,2),-2.4,Ke(-2,1.5),Ke(-.2,.2),-1,Ke(-.3,.1),9,1.5,!1);l(-2.4,-.4,2.2,-.4,-.1,1,8,1.2,!0),l(2.4,-.4,2.2,.4,-.1,1,8,1.2,!0),l(0,-1.8,2.5,0,-.5,1,8,1.2,!0),this.cmd=new _t(new Kt(1.7,1.7,1.7),new ce({map:m_()})),this.cmd.position.set(0,.2,2.55),s.add(this.cmd),this.shellG=new we,this.shellG.position.set(0,.2,2.8),s.add(this.shellG),o(3.1,3.1,.8,e,0,0,0,this.shellG);for(const[a,h]of[[-1.4,0],[1.4,0],[0,1.4],[0,-1.4]])o(a?.3:2.8,h?.3:2.8,.2,i,a,h,.45,this.shellG)}headWorld(t){const e=new I;return this.heads[t%3].g.getWorldPosition(e),e}corePos(){return this.pos.clone()}raycast(t,e,i){const s=this.scale,o=this.pos,r=ir(t,e,{x:o.x-3.1*s,y:o.y-2.8*s,z:o.z-3.1*s},{x:o.x+3.1*s,y:o.y+5.4*s,z:o.z+3.1*s});if(r<0||r>i)return null;const l=new I(o.x,o.y+.2*s,o.z),a=new I(t.x,t.y,t.z),h=Math.max(0,l.clone().sub(a).dot(e)),f=a.addScaledVector(e,h);return{dist:r,crit:this.phase===3&&f.distanceTo(l)<2.1*s}}hit(t,e){if(this.dead)return;if(this.hp-=t*(e?3:1),this.flash=.15,this.h.burst(this.pos.x+Ke(-2,2),this.pos.y+Ke(-1,3),this.pos.z+Ke(-2,2),e?[1,.7,.2]:[.5,.2,.8],e?16:8,4),this.hp<=0)return this.die();const i=this.hp/this.maxHp,s=i>.66?1:i>.33?2:3;s>this.phase&&(this.phase=s,this.scaleT=h_[s-1],this.h.sound("roar",1),this.h.strikeNear(this.pos.x,this.pos.z),this.h.toast(s===2?"¡La tormenta crece y devora todo!":"¡FASE FINAL! El bloque de comandos está expuesto: ¡golpéalo!"),this.atkT=1.5)}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y,this.pos.z,7,.25),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y,this.pos.z,"storm"),this.h.toast("¡Has derrotado a la Tormenta Wither!"),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.scene.remove(this.beam),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.skulls)this.scene.remove(t.mesh);this.skulls=[]}update(t,e,i){if(this.dead)return;this.t+=t,this.flash=Math.max(0,this.flash-t);const s=this.phase-1;this.scale+=(this.scaleT-this.scale)*Math.min(1,t*1.2);const o=this.scale;this.root.scale.setScalar(o);const r=e.pos.x,l=e.pos.z;let a=r-this.pos.x,h=l-this.pos.z;const f=Math.hypot(a,h)||1;a/=f,h/=f;const c=3.5+1.2*this.phase,d=c_[s];f>d+1?(this.pos.x+=a*c*t,this.pos.z+=h*c*t):f<d-3&&(this.pos.x-=a*c*.6*t,this.pos.z-=h*c*.6*t),this.pos.x+=-h*1.6*t*Math.sin(this.t*.3),this.pos.z+=a*1.6*t*Math.sin(this.t*.3);const u=e.pos.y+8+2*o;this.pos.y+=(u-this.pos.y)*Math.min(1,t*.8);const g=Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw;this.yaw+=Math.atan2(Math.sin(g),Math.cos(g))*Math.min(1,t*2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*.8)*.4,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((v,D)=>{v.jaw.rotation.x=.15+Math.sin(this.t*2.6+D*1.7)*.22+(this.beamOn?.35:0)});for(const v of this.tents)v.segs.forEach((D,E)=>{const w=E*.32;D.m.position.set(v.b.x+v.d.x*E*1.45+Math.sin(this.t*1.4+v.ph+E*.6)*w,v.b.y+v.d.y*E*1.45-E*.05,v.b.z+v.d.z*E*1.45+Math.cos(this.t*1.1+v.ph*1.3+E*.5)*w)});this.shell+=((this.phase>=3?0:1)-this.shell)*Math.min(1,t*2.5),this.shellG.scale.setScalar(Math.max(.001,this.shell));const x=this.flash>0?.5:0;this.dark.emissive.setRGB(x,x*.4,x),this.dark2.emissive.setRGB(x,x*.4,x);const m=.8+Math.sin(this.t*4)*.2;if(this.cmd.material.color.setScalar(this.phase>=3?1.2*m+.2:.55),this.devourT-=t,this.devourT<=0){this.devourT=.35;const v=3.4*o,D=Math.floor(this.pos.x),E=Math.floor(this.pos.y+.8*o),w=Math.floor(this.pos.z),C=Math.ceil(v);let y=0;for(let S=-C;S<=C&&y<150;S++)for(let P=-C;P<=C;P++)for(let F=-C;F<=C;F++){if(S*S+P*P+F*F>v*v)continue;const H=i.getBlock(D+S,E+P,w+F);H&&H!==_.BEDROCK&&Math.random()<.7&&(i.setBlock(D+S,E+P,w+F,0),y++)}y>6&&this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.25,.1,.35],6,4)}this.beamT-=t,this.beamT<=0&&(this.beamOn=!this.beamOn,this.beamT=this.beamOn?u_[s]:p_[s],this.beamOn&&this.h.sound("roar",.6));const p=new I(this.pos.x-e.pos.x,this.pos.y+1-(e.pos.y+1),this.pos.z-e.pos.z),M=p.length(),b=this.beamOn&&M<48&&!e.dead;if(this.beam.visible=b,b){const v=p.clone().normalize();e.push.x=v.x*ud[s],e.push.z=v.z*ud[s],e.push.y=v.y*11;const D=this.headWorld(0),E=new I(e.pos.x,e.pos.y+1,e.pos.z),w=D.distanceTo(E);this.beam.scale.set(1+Math.sin(this.t*30)*.3,w,1+Math.sin(this.t*30)*.3),this.beam.position.copy(D).add(E).multiplyScalar(.5),this.beam.quaternion.setFromUnitVectors(new I(0,1,0),E.clone().sub(D).normalize()),this.beamHurtT-=t,M<5.5*o&&this.beamHurtT<=0&&(this.beamHurtT=.5,this.h.hurtPlayer(2,0,0))}if(this.meleeT-=t,M<6.5*o&&this.meleeT<=0&&!e.dead&&(this.meleeT=1.3,this.h.hurtPlayer(5,-p.x/M*6,-p.z/M*6)),this.atkT-=t,this.atkT<=0&&!e.dead){this.atkT=f_[s];for(let v=0;v<d_[s];v++)this.shoot(e,v)}for(let v=this.skulls.length-1;v>=0;v--){const D=this.skulls[v];D.life-=t,D.mesh.position.addScaledVector(D.vel,t),D.mesh.rotation.x+=t*4,D.mesh.rotation.y+=t*3;const E=D.mesh.position;(Math.hypot(E.x-e.pos.x,E.y-(e.pos.y+.9),E.z-e.pos.z)<1.4||D.life<=0||i.isSolid(Math.floor(E.x),Math.floor(E.y),Math.floor(E.z)))&&(this.h.explode(E.x,E.y,E.z,2.2+.4*this.phase,.5),this.scene.remove(D.mesh),this.skulls.splice(v,1))}this.phase>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=this.phase===2?14:10,this.h.minions()<5&&this.h.spawnMinion()))}shoot(t,e){const i=this.headWorld(e),o=new I(t.pos.x+t.vel.x*.5,t.pos.y+1,t.pos.z+t.vel.z*.5).sub(i).normalize();o.x+=Ke(-.06,.06)*(e+1),o.y+=Ke(-.04,.04),o.z+=Ke(-.06,.06)*(e+1),o.normalize();const r=new _t(this.skullGeo,this.skullMat);r.position.copy(i),this.scene.add(r),this.skulls.push({mesh:r,vel:o.multiplyScalar(16),life:7}),this.h.sound("shoot",1)}}const Ge=(n,t)=>n+Math.random()*(t-n),ee=(n=0,t=0,e=0)=>new I(n,t,e),ni=n=>Math.atan2(Math.sin(n),Math.cos(n));class mi{constructor(t,e,i,s){this.scene=t,this.h=e,this.pos=i.clone(),Object.assign(this,s),this.hp=this.maxHp,this.phase=1,this.t=0,this.yaw=0,this.flash=0,this.dead=!1,this.scale=s.scale||1,this.root=new we,this.body=new we,this.root.add(this.body),this.flashMats=[],this.proj=[],this.clouds=[],this.extra=[],this.waves=[],this.vel=new I,t.add(this.root),this.root.position.copy(i),this.root.scale.setScalar(this.scale)}mat(t,e=0,i=!1){if(i)return new ce({color:t});const s=new xi({color:t,emissive:e});return this.flashMats.push(s),s}box(t,e,i,s,o,r,l,a=this.body){const h=new _t(new Kt(t,e,i),s);return h.position.set(o,r,l),a.add(h),h}group(t,e,i,s=this.body){const o=new we;return o.position.set(t,e,i),s.add(o),o}world(t){const e=ee();return t.getWorldPosition(e),e}raycast(t,e,i){const s=this.hitbox,o=this.scale,r=this.pos,l=ir(t,e,{x:r.x-s.hx*o,y:r.y+(s.oy-s.hy)*o,z:r.z-s.hz*o},{x:r.x+s.hx*o,y:r.y+(s.oy+s.hy)*o,z:r.z+s.hz*o});let a=l>=0&&l<=i?{dist:l,crit:!1}:null;for(const h of this.targets||[]){const f=h.pos,c=h.half,d=ir(t,e,{x:f.x-c,y:f.y-c,z:f.z-c},{x:f.x+c,y:f.y+c,z:f.z+c});d>=0&&d<=i&&(!a||d<a.dist)&&(a={dist:d,crit:!1,target:h})}return a}damageMul(){return 1}hit(t,e,i){if(this.dead)return;if(i&&i.target&&i.target.onHit){i.target.onHit();return}if(this.hp-=t*this.damageMul(),this.flash=.15,this.h.burst(this.pos.x+Ge(-1,1),this.pos.y+this.hitbox.oy*this.scale+Ge(-1,1),this.pos.z+Ge(-1,1),this.burstColor||[.6,.2,.8],8,4),this.hp<=0)return this.die();const s=this.phaseFor(this.hp/this.maxHp);s>this.phase&&(this.phase=s,this.onPhase(s)),this.onHit&&this.onHit()}phaseFor(){return 1}onPhase(){}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z,5,.2),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y+1,this.pos.z,this.type),this.h.toast(`¡Has derrotado a ${this.name}!`),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.proj)this.scene.remove(t.mesh);for(const t of this.extra)this.scene.remove(t);for(const t of this.waves)this.scene.remove(t.mesh);this.proj=[],this.waves=[]}shootProj(t,e,i={}){const s=i.size||.9,o=new _t(new Kt(s,s,s),new xi({color:i.color||2102576,emissive:i.emissive||5906576}));o.position.copy(t),this.scene.add(o),this.proj.push({mesh:o,vel:e.clone().normalize().multiplyScalar(i.speed||16),life:i.life||7,o:i}),this.h.sound("shoot",1)}updateProj(t,e,i){for(let s=this.proj.length-1;s>=0;s--){const o=this.proj[s],r=o.o;o.life-=t,o.mesh.position.addScaledVector(o.vel,t),o.mesh.rotation.x+=t*4,o.mesh.rotation.y+=t*3;const l=o.mesh.position;if(o.reflected){const h=ee(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z);if(l.distanceTo(h)<(this.hitbox.hx+.8)*this.scale||o.life<=0){if(this.h.explode(l.x,l.y,l.z,2,0),this.h.burst(l.x,l.y,l.z,[1,.6,.2],24,6),this.scene.remove(o.mesh),this.proj.splice(s,1),l.distanceTo(h)<(this.hitbox.hx+.8)*this.scale&&(this.h.toast("¡Rebotada! Gran golpe"),this.hit(o.o.reflectDmg||70,!0),this.dead))return;continue}continue}(Math.hypot(l.x-e.pos.x,l.y-(e.pos.y+.9),l.z-e.pos.z)<1.4||o.life<=0||i.isSolid(Math.floor(l.x),Math.floor(l.y),Math.floor(l.z)))&&(this.h.explode(l.x,l.y,l.z,r.radius||2.2,r.ds||.5),r.effect&&Math.hypot(l.x-e.pos.x,l.y-e.pos.y,l.z-e.pos.z)<(r.radius||2.2)*1.8&&this.h.effect(r.effect[0],r.effect[1]),r.cloud&&this.clouds.push({x:l.x,y:l.y,z:l.z,t:4,tick:0}),this.scene.remove(o.mesh),this.proj.splice(s,1))}for(let s=this.clouds.length-1;s>=0;s--){const o=this.clouds[s];o.t-=t,o.tick-=t,o.tick<=0&&(o.tick=.45,this.h.burst(o.x+Ge(-2,2),o.y+Ge(0,1.5),o.z+Ge(-2,2),[.8,.3,.9],5,1.2),Math.hypot(o.x-e.pos.x,o.z-e.pos.z)<3.3&&Math.abs(o.y-e.pos.y)<3&&!e.dead&&this.h.hurtPlayer(2,0,0)),o.t<=0&&this.clouds.splice(s,1)}}applyFlash(){const t=this.flash>0?.5:0;for(const e of this.flashMats)e.userData.baseE===void 0&&(e.userData.baseE=e.emissive.clone());for(const e of this.flashMats)e.emissive.copy(e.userData.baseE).addScalar(t)}addWave(t,e,i,s){const o=new _t(new gc(1,.16,6,44),new ce({color:s.color||16744496,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}));o.rotation.x=Math.PI/2,o.position.set(t,e+.35,i),this.scene.add(o),this.waves.push({x:t,y:e,z:i,r:1,max:s.max||16,speed:s.speed||11,dmg:s.dmg||8,effect:s.effect,mesh:o,hit:!1})}updateWaves(t,e){for(let i=this.waves.length-1;i>=0;i--){const s=this.waves[i];s.r+=s.speed*t,s.mesh.scale.set(s.r,s.r,1),s.mesh.material.opacity=.85*Math.max(0,1-s.r/s.max);const o=Math.hypot(e.pos.x-s.x,e.pos.z-s.z);!s.hit&&!e.dead&&Math.abs(o-s.r)<1.5&&e.pos.y<s.y+1.15&&(s.hit=!0,this.h.hurtPlayer(s.dmg,(e.pos.x-s.x)/(o||1)*8,(e.pos.z-s.z)/(o||1)*8),s.effect&&this.h.effect(s.effect[0],s.effect[1])),s.r>=s.max&&(this.scene.remove(s.mesh),this.waves.splice(i,1))}}walk(t,e,i,s,o,r){this.vel.x+=(i/o*r-this.vel.x)*Math.min(1,t*5),this.vel.z+=(s/o*r-this.vel.z)*Math.min(1,t*5);const l=Rs(e,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t,30);return(l.hitX||l.hitZ)&&l.onGround&&(this.vel.y=11),this.onGround=l.onGround,l}update(t,e,i){this.dead||(this.t+=t,this.flash=Math.max(0,this.flash-t),this.tick(t,e,i),this.updateProj(t,e,i),this.updateWaves(t,e),this.applyFlash())}}class x_ extends mi{constructor(t,e,i,s){super(t,e,i,{name:"ENDER DRAGON",type:"dragon",maxHp:300,hitbox:{hx:4.5,hy:2.4,hz:5,oy:.5},scale:1.4,burstColor:[.7,.2,.9]}),this.arena=s||null,this.center=s?ee(s.cx,s.cy,s.cz):i.clone(),this.theta=Math.random()*6,this.state="circle",this.diveT=12,this.fireT=4,this.breath=0,this.diveTime=0,this.diveTarget=ee();const o=this.mat(1380378),r=this.mat(2365998),l=this.mat(14696703,14696703,!0);this.box(2.4,2,6,o,0,0,0);for(let a=0;a<6;a++)this.box(.4,.8,.5,r,0,1.3,-2.4+a*.95);this.neck=[];for(let a=0;a<3;a++)this.neck.push(this.box(1.3-a*.1,1.3-a*.1,1.5,r,0,.3+a*.35,3.3+a*1.3));this.head=this.group(0,1.6,7.3),this.box(2,1.3,2.2,o,0,0,0,this.head),this.box(1.2,.7,1.6,r,0,-.15,1.6,this.head),this.jaw=this.group(0,-.6,.4,this.head),this.box(1.5,.35,2.2,o,0,0,.9,this.jaw);for(const a of[-.7,.7])this.box(.5,.25,.1,l,a,.2,1.1,this.head),this.box(.25,.8,.3,r,a*1.2,.9,-.4,this.head).rotation.z=a*.4;this.wings=[];for(const a of[-1,1]){const h=this.group(a*1.2,.8,.5);this.box(5,.22,2.4,r,a*2.5,0,0,h);const f=this.group(a*5,0,0,h);this.box(5,.16,2,o,a*2.5,0,.4,f),this.box(.15,.15,3.4,r,a*2.5,.12,.4,f),this.wings.push({w:h,o:f,sx:a})}this.tail=[];for(let a=0;a<8;a++)this.tail.push(this.box(1.5-a*.14,1.2-a*.1,1.6,a%2?o:r,0,0,-3.6-a*1.5));for(const[a,h]of[[-1,1.8],[1,1.8],[-1,-1.8],[1,-1.8]])this.box(.6,1.4,.6,r,a,-1.4,h);this.crystals=[];for(let a=0;a<4;a++){const h=a/4*Math.PI*2+.4,f=new we,c=new ce({color:16736464}),d=new _t(new Kt(1.3,1.3,1.3),c),u=new _t(new Kt(1.3,1.3,1.3),new ce({color:16765168}));u.rotation.set(.7,.7,0),u.scale.setScalar(.7),f.add(d,u);const g=new _t(new _n(.07,.07,1,5),new ce({color:16744672,transparent:!0,opacity:.6,fog:!1}));if(this.arena&&this.arena.pillars){const x=this.arena.pillars[(a*2+1)%this.arena.pillars.length];f.position.set(x.x+.5,x.top+3.5,x.z+.5)}else f.position.set(i.x+Math.cos(h)*14,i.y-6+3,i.z+Math.sin(h)*14);t.add(f,g),this.extra.push(f,g),this.crystals.push({g:f,beam:g,alive:!0})}this.h.toast("¡Destruye los 4 cristales para poder dañar al Dragón!")}aliveCrystals(){return this.crystals.filter(t=>t.alive).length}damageMul(){return this.aliveCrystals()?.25:1}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Dragón entra en furia!"),this.diveT=3}raycast(t,e,i){let s=super.raycast(t,e,i);return this.crystals.forEach((o,r)=>{if(!o.alive)return;const l=o.g.position,a=ir(t,e,{x:l.x-1,y:l.y-1,z:l.z-1},{x:l.x+1,y:l.y+1,z:l.z+1});a>=0&&a<=i&&(!s||a<s.dist)&&(s={dist:a,crit:!1,crystal:r})}),s}hit(t,e,i){if(i&&i.crystal!==void 0){const s=this.crystals[i.crystal];if(!s.alive)return;s.alive=!1,this.scene.remove(s.g,s.beam),this.h.explode(s.g.position.x,s.g.position.y,s.g.position.z,2.2,.35),this.h.burst(s.g.position.x,s.g.position.y,s.g.position.z,[1,.4,.8],24,6),this.h.toast(this.aliveCrystals()?`Cristal destruido (${this.aliveCrystals()} restantes)`:"¡Cristales destruidos! Ahora es vulnerable");return}super.hit(t,e,i)}tick(t,e,i){const s=this.phase;this.center.x+=(e.pos.x-this.center.x)*t*.1,this.center.z+=(e.pos.z-this.center.z)*t*.1;const o=this.aliveCrystals();o&&(this.hp=Math.min(this.maxHp,this.hp+t*2*o));const r=this.pos.clone();if(this.state==="circle"){this.theta+=t*(.32+.1*s);const h=24,f=this.center.x+Math.cos(this.theta)*h,c=this.center.z+Math.sin(this.theta)*h,d=Math.max(e.pos.y+12,this.center.y)+Math.sin(this.t*.9)*2,u=Math.min(1,t*1.6);if(this.pos.x+=(f-this.pos.x)*u,this.pos.z+=(c-this.pos.z)*u,this.pos.y+=(d-this.pos.y)*u,this.diveT-=t,this.fireT-=t,this.diveT<=0&&!e.dead&&(this.state="dive",this.diveTime=0,this.diveTarget.set(e.pos.x,e.pos.y+1,e.pos.z),this.diveT=s===1?13:8,this.h.sound("roar",.7)),this.fireT<=0&&!e.dead){this.fireT=s===1?5:3;const g=this.world(this.head);this.shootProj(g,ee(e.pos.x,e.pos.y+1,e.pos.z).sub(g),{speed:17,size:1.1,color:4198496,emissive:12595440,radius:2.6,ds:.55,cloud:!0})}}else if(this.state==="dive"){this.diveTime+=t;const h=this.diveTarget.clone().sub(this.pos),f=h.length();this.pos.addScaledVector(h.normalize(),28*t),Math.hypot(this.pos.x-e.pos.x,this.pos.y-(e.pos.y+1),this.pos.z-e.pos.z)<4.2&&!e.dead&&!this.hitDive&&(this.hitDive=!0,this.h.hurtPlayer(9,h.x*8,h.z*8)),(f<3||this.diveTime>3)&&(this.state="circle",this.hitDive=!1)}const l=this.pos.clone().sub(r);l.lengthSq()>1e-5&&(this.yaw+=ni(Math.atan2(l.x,l.z)-this.yaw)*Math.min(1,t*3)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=this.state==="dive"?0:-ni(Math.atan2(l.x,l.z)-this.yaw)*.5,this.root.rotation.x=this.state==="dive"?.5:0;const a=Math.sin(this.t*(this.state==="dive"?7:3.2));for(const h of this.wings)h.w.rotation.z=h.sx*a*.6,h.o.rotation.z=h.sx*a*.45;this.tail.forEach((h,f)=>{h.position.x=Math.sin(this.t*2-f*.6)*f*.35,h.position.y=Math.sin(this.t*1.5-f*.5)*f*.12}),this.jaw.rotation.x=.1+(this.state==="dive"?.5:.18+Math.sin(this.t*2)*.12);for(const h of this.crystals)if(h.alive){h.g.rotation.y+=t*1.2,h.g.position.y+=Math.sin(this.t*2+h.g.position.x)*t*.4;const f=h.g.position,c=this.pos.clone().setY(this.pos.y+1),d=f.distanceTo(c);h.beam.scale.set(1,d,1),h.beam.position.copy(f).add(c).multiplyScalar(.5),h.beam.quaternion.setFromUnitVectors(ee(0,1,0),c.clone().sub(f).normalize()),h.beam.visible=this.hp<this.maxHp}else h.beam.visible=!1}}class v_ extends mi{constructor(t,e,i){super(t,e,i,{name:"WITHER",type:"wither",maxHp:300,hitbox:{hx:2.2,hy:2.8,hz:2.2,oy:1},scale:1.6,burstColor:[.2,.2,.25]}),this.fireT=2.5,this.minionT=12,this.noBreak=0;const s=this.mat(1447450),o=this.mat(3816e3),r=this.mat(15266047,0,!0);this.box(.45,3,.45,o,0,0,0);for(let a=0;a<3;a++)this.box(2.6-a*.4,.2,.35,o,0,.9-a*.55,0);this.box(.5,1.2,.5,s,0,-1.9,-.5).rotation.x=.3,this.heads=[];const l=(a,h,f,c)=>{const d=this.group(h,f,c);this.box(a,a,a,s,0,0,0,d);for(const u of[-1,1])this.box(a*.22,a*.16,.1,r,u*a*.22,a*.1,a/2+.03,d);this.box(a*.5,a*.14,.1,r,0,-a*.25,a/2+.03,d),this.heads.push(d)};l(1.3,0,2.1,0),l(1,-1.35,1.7,.1),l(1,1.35,1.7,.1),this.aura=new _t(new Kt(3.6,4.8,3.6),new ce({color:8433919,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.aura.position.y=.6,this.body.add(this.aura),this.h.explode(i.x,i.y,i.z,4,.25),this.h.toast("¡El Wither ha despertado!")}phaseFor(t){return t>.5?1:2}damageMul(){return this.phase===2?.6:1}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Wither está acorazado! Te perseguirá de cerca"),this.aura.material.opacity=.28,this.fireT=1}onHit(){if(this.t-this.noBreak<.6)return;this.noBreak=this.t;const t=this.scale,e=Math.floor(this.pos.x),i=Math.floor(this.pos.y+t),s=Math.floor(this.pos.z);for(let o=-3;o<=3;o++)for(let r=-2;r<=4;r++)for(let l=-3;l<=3;l++){const a=this.h.world().getBlock(e+o,i+r,s+l);a&&a!==_.BEDROCK&&Math.random()<.6&&this.h.world().setBlock(e+o,i+r,s+l,0)}}tick(t,e){const i=this.phase,s=e.pos.x,o=e.pos.z,r=s-this.pos.x,l=o-this.pos.z,a=Math.hypot(r,l)||1,h=i===1?16:7,f=i===1?4.5:7;if(a>h+1?(this.pos.x+=r/a*f*t,this.pos.z+=l/a*f*t):a<h-3&&(this.pos.x-=r/a*f*.7*t,this.pos.z-=l/a*f*.7*t),this.pos.y+=(e.pos.y+(i===1?7:3.5)-this.pos.y)*Math.min(1,t*.9),this.yaw+=ni(Math.atan2(r,l)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.3)*.5,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((c,d)=>{c.rotation.y=Math.sin(this.t*1.1+d*2)*.35,c.rotation.x=Math.sin(this.t*.9+d)*.1}),this.fireT-=t,this.fireT<=0&&!e.dead){this.fireT=i===1?2.3:1.6;const c=i===1?1:3;for(let d=0;d<c;d++){const u=this.world(this.heads[d%3]),g=ee(e.pos.x+e.vel.x*.4,e.pos.y+1,e.pos.z+e.vel.z*.4),x=g.sub(u).normalize();x.x+=Ge(-.05,.05)*d,x.z+=Ge(-.05,.05)*d,this.shootProj(u,x,{speed:15,size:i===1?.8:1,color:i===1?1118484:2109536,emissive:i===1?3158080:4223231,radius:i===1?1.9:2.3,ds:.4,effect:["poison",6]})}}i===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<5&&this.h.spawnMinion("skeleton")))}}class __ extends mi{constructor(t,e,i){super(t,e,i,{name:"WARDEN",type:"warden",maxHp:360,hitbox:{hx:.9,hy:1.6,hz:.9,oy:1.6},scale:1.25,burstColor:[.1,.6,.6]}),this.vel=ee(),this.hw=.55*1.25,this.hh=3.4,this.hwb=.7,this.pos.copy(i),this.state="emerge",this.emerge=2.4,this.boomT=3,this.charge=0,this.meleeT=0,this.angry=!1,this.walk=0;const s=this.mat(862768),o=this.mat(1325634),r=this.mat(3926216,0,!0);this.legL=this.leg(-.4,s),this.legR=this.leg(.4,s),this.box(1.5,1.5,.9,o,0,2.15,0),this.chest=this.box(.7,.6,.12,r,0,2.2,.48);for(const l of[1.75,2,2.45])this.box(1.55,.1,.95,s,0,l,0);this.armL=this.arm(-1.1,o),this.armR=this.arm(1.1,o),this.head=this.group(0,3.25,.05),this.box(1.5,1,.95,o,0,0,0,this.head);for(const l of[-1,1])this.box(.18,.9,.18,s,l*.5,.85,-.1,this.head).rotation.z=-l*.35,this.box(.6,.55,.12,r,l*.95,.15,-.1,this.head);this.box(.9,.12,.1,r,0,-.1,.5,this.head),this.boomBeam=new _t(new _n(.5,.5,1,8),new ce({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.boomBeam),this.extra.push(this.boomBeam),this.h.toast("El Warden emerge de la oscuridad…"),this.h.sound("roar",1)}leg(t,e){const i=this.group(t,1.5,0);return this.box(.7,1.5,.75,e,0,-.75,0,i),i}arm(t,e){const i=this.group(t,2.8,0);return this.box(.7,2.6,.7,e,0,-1.3,0,i),i}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Warden ruge enfurecido!"),this.boomT=1}damageMul(){return this.state==="emerge"?0:1}tick(t,e,i){const s=this.phase;if(this.state==="emerge"){this.emerge-=t,this.root.position.set(this.pos.x,this.pos.y-Math.max(0,this.emerge)*1.2,this.pos.z),this.h.darkness(.6),this.emerge<=0&&(this.state="hunt");return}const o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1,a=e.pos.y-this.pos.y;this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*5);const h=this.charge>0?.4:s===1?3.4:5;this.vel.x+=(o/l*h-this.vel.x)*Math.min(1,t*6),this.vel.z+=(r/l*h-this.vel.z)*Math.min(1,t*6),l<2.2&&(this.vel.x*=.2,this.vel.z*=.2);const f={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},c=Rs(i,f,t);(c.hitX||c.hitZ)&&c.onGround&&(this.vel.y=9),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.2,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;const d=Math.sin(this.walk)*.55;this.legL.rotation.x=d,this.legR.rotation.x=-d,this.armL.rotation.x=-d*.7,this.armR.rotation.x=d*.7,this.head.rotation.x=Math.sin(this.t*2)*.05,this.chest.scale.setScalar(1+(this.charge>0?.6+Math.sin(this.t*25)*.3:Math.sin(this.t*4)*.1)),this.meleeT-=t,l<3.8&&Math.abs(a)<3&&this.meleeT<=0&&!e.dead&&this.charge<=0&&(this.meleeT=1.5,this.armR.rotation.x=-2,this.h.hurtPlayer(s===1?12:15,o/l*9,r/l*9),this.h.sound("hit",1)),this.boomT-=t,this.charge>0?(this.charge-=t,this.h.sound("hiss",.4),this.charge<=0&&this.sonicBoom(e,i)):this.boomT<=0&&l>4.5&&l<30&&!e.dead&&(this.charge=1.5,this.boomT=s===1?5:3.2,this.h.sound("roar",.5)),this.boomBeam.material.opacity=Math.max(0,this.boomBeam.material.opacity-t*3),this.h.darkness(l<28?.35+.15*Math.sin(this.t*3):0)}sonicBoom(t,e){const i=this.pos.clone().setY(this.pos.y+2.6*this.scale),s=ee(t.pos.x,t.pos.y+1,t.pos.z),o=s.clone().sub(i),r=o.length();o.normalize(),this.boomBeam.material.opacity=.85,this.boomBeam.scale.set(1,r,1),this.boomBeam.position.copy(i).add(s).multiplyScalar(.5),this.boomBeam.quaternion.setFromUnitVectors(ee(0,1,0),o),this.h.sound("explode",.8),e.raycast(i,o,r)||this.h.hurtPlayer(this.phase===1?12:15,o.x*8,o.z*8),this.h.burst(t.pos.x,t.pos.y+1,t.pos.z,[.4,1,.9],14,5)}dispose(){this.h.darkness(0),super.dispose()}}class M_ extends mi{constructor(t,e,i){super(t,e,i,{name:"GUARDIÁN ANCESTRAL",type:"guardian",maxHp:240,hitbox:{hx:1.8,hy:1.8,hz:1.8,oy:0},scale:2.4,burstColor:[.3,.9,.8]}),this.laserT=4,this.charge=0,this.beam=null,this.thorns=0;const s=this.mat(8032114),o=this.mat(6189912),r=this.mat(14715472),l=this.mat(6353120,0,!0);this.box(1.5,1.5,1.5,s,0,0,0);for(let h=0;h<6;h++)this.box(.4,.4,.05,r,Ge(-.6,.6),Ge(-.6,.6),-.78);this.spikes=[];const a=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,-1]];for(const[h,f,c]of a)for(let d=0;d<3;d++){const u=this.group(h*.75+(h?0:Ge(-.5,.5)),f*.75+(f?0:Ge(-.5,.5)),c*.75+(c?0:Ge(-.5,.5)));u.lookAt(u.position.clone().add(ee(h,f,c))),this.box(.14,.14,.9,o,0,0,.45,u),this.box(.1,.1,.2,l,0,0,.95,u),this.spikes.push(u)}this.eye=this.group(0,0,.78),this.box(.95,.95,.12,this.mat(15790304),0,0,0,this.eye),this.iris=this.box(.5,.5,.14,this.mat(13119520,5244936),0,0,.04,this.eye),this.box(.18,.18,.16,this.mat(1050632),0,0,.06,this.eye),this.box(.5,.5,.9,o,0,0,-1.1).scale.set(1,.6,1),this.laser=new _t(new _n(.1,.1,1,6),new ce({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Guardián Ancestral te observa… ¡cuidado con su láser!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Guardián se enfurece! Su láser es más rápido")}onHit(){const t=this.h.player();t&&Math.hypot(t.pos.x-this.pos.x,t.pos.z-this.pos.z)<7.5&&!t.dead&&this.h.hurtPlayer(2,0,0)}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;if(this.charge<=0){const u=s===1?14:11,g=s===1?3:4.4;l>u+1?(this.pos.x+=o/l*g*t,this.pos.z+=r/l*g*t):l<u-3&&(this.pos.x-=o/l*g*.7*t,this.pos.z-=r/l*g*.7*t),this.pos.y+=(e.pos.y+4-this.pos.y)*Math.min(1,t*.8)}this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw;const a=1+Math.sin(this.t*1.6)*.12+(this.charge>0?.35:0);this.spikes.forEach(u=>u.scale.setScalar(a)),this.iris.scale.setScalar(this.charge>0?1.5+Math.sin(this.t*30)*.2:1),this.laserT-=t;const h=this.world(this.eye),f=ee(e.pos.x,e.pos.y+1,e.pos.z),c=f.clone().sub(h),d=c.length();if(c.normalize(),this.charge>0){const u=s===1?2.6:1.7,g=1-this.charge/u;this.charge-=t,this.laser.material.opacity=.25+g*.6,this.laser.scale.set(.5+g*3.2,d,.5+g*3.2),this.laser.position.copy(h).add(f).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(ee(0,1,0),c),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.6),!i.raycast(h,c,d)&&!e.dead&&(this.h.hurtPlayer(9,c.x*3,c.z*3),this.h.effect("fatigue",25),this.h.toast("¡Fatiga de minería!")),this.laserT=s===1?6:3.5)}else this.laser.material.opacity=0,this.laserT<=0&&d<40&&!e.dead&&(this.charge=s===1?2.6:1.7,this.h.sound("hiss",.6))}}class y_ extends mi{constructor(t,e,i){super(t,e,i,{name:"DEVASTADOR",type:"ravager",maxHp:280,hitbox:{hx:1.4,hy:1.5,hz:1.9,oy:1.4},scale:1.5,burstColor:[.5,.4,.3]}),this.vel=ee(),this.state="stalk",this.timer=4,this.dirx=0,this.dirz=1,this.hitDone=!1,this.walk=0,this.stunMul=1;const s=this.mat(4867392),o=this.mat(6182478),r=this.mat(14210244),l=this.mat(11542560,3147784);this.box(2.2,1.7,3.1,s,0,1.9,0),this.box(1.6,.9,1.6,o,0,3,-.6),this.neck=this.group(0,2.3,1.4),this.box(1,1,1.2,o,0,.1,.4,this.neck),this.head=this.group(0,.2,1.2,this.neck),this.box(1.7,1.45,1.6,s,0,0,.5,this.head);for(const a of[-1,1])this.box(.25,1,.25,r,a*.7,1,.2,this.head).rotation.z=-a*.3,this.box(.2,.6,.2,r,a*.55,-.55,1.2,this.head),this.box(.3,.2,.1,l,a*.45,.2,1.32,this.head);this.legs=[[-.8,1.2],[.8,1.2],[-.8,-1.2],[.8,-1.2]].map(([a,h])=>{const f=this.group(a,1.2,h);return this.box(.8,1.2,.8,o,0,-.6,0,f),f}),this.hw=1.2,this.hh=3.2,this.h.toast("¡El Devastador ruge! Esquiva sus embestidas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Devastador se enfurece!"),this.timer=1}damageMul(){return this.state==="stun"?1.7:1}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.timer-=t;let a=0;if(this.state==="stalk")a=s===1?3.6:4.8,this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*4),this.timer<=0&&!e.dead&&l<40&&(this.state="windup",this.timer=1,this.h.sound("roar",.9));else if(this.state==="windup")this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*6),this.neck.rotation.x=-.6*Math.min(1,(1-this.timer)*2),this.timer<=0&&(this.state="charge",this.timer=1.9,this.hitDone=!1,this.dirx=o/l,this.dirz=r/l,this.yaw=Math.atan2(this.dirx,this.dirz),l<9&&!e.dead&&this.h.hurtPlayer(4,this.dirx*10,this.dirz*10));else if(this.state==="charge"){a=15,this.vel.x=this.dirx*a,this.vel.z=this.dirz*a,this.neck.rotation.x=.5,l<3.4&&!this.hitDone&&!e.dead&&Math.abs(e.pos.y-this.pos.y)<3.5&&(this.hitDone=!0,this.h.hurtPlayer(11,this.dirx*12,this.dirz*12));const d=Math.floor(this.pos.x+this.dirx*2.2),u=Math.floor(this.pos.z+this.dirz*2.2),g=Math.floor(this.pos.y);for(let x=-1;x<=1;x++)for(let m=-1;m<=1;m++)for(let p=0;p<3;p++){const M=i.getBlock(d+x,g+p,u+m);M&&M!==_.BEDROCK&&M!==_.STONE&&M!==_.COBBLE&&i.setBlock(d+x,g+p,u+m,0)}this.timer<=0&&(this.state="stun",this.timer=2.2,this.h.sound("hit",1),this.h.burst(this.pos.x,this.pos.y+2,this.pos.z,[.8,.8,.3],14,4))}else this.state==="stun"&&(this.neck.rotation.x=.9,this.timer<=0&&(this.state="stalk",this.timer=s===1?5:3,this.neck.rotation.x=0));this.state!=="charge"&&(this.vel.x+=(o/l*a-this.vel.x)*Math.min(1,t*5),this.vel.z+=(r/l*a-this.vel.z)*Math.min(1,t*5)),(this.state==="stun"||this.state==="windup")&&(this.vel.x*=.85,this.vel.z*=.85);const h={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},f=Rs(i,h,t);(f.hitX||f.hitZ)&&f.onGround&&this.state!=="stun"&&(this.vel.y=10),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*1.6;const c=Math.sin(this.walk)*.5;this.legs.forEach((d,u)=>d.rotation.x=u%2?-c:c),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class b_ extends mi{constructor(t,e,i){super(t,e,i,{name:"INVOCADOR",type:"evoker",maxHp:220,hitbox:{hx:.9,hy:1.4,hz:.9,oy:1.6},scale:1.7,burstColor:[.9,.8,.2]}),this.fangT=3,this.vexT=7,this.tpT=6,this.vex=[],this.fangs=[],this.targets=[];const s=this.mat(7105648),o=this.mat(14202928),r=this.mat(14264458),l=this.mat(3158068);this.box(.95,1.6,.65,s,0,1,0),this.box(1,.18,.7,o,0,.25,0),this.box(.98,.14,.68,o,0,1,0),this.head=this.group(0,2.05,0),this.box(.55,.65,.55,r,0,.15,0,this.head),this.box(.14,.28,.16,r,0,.05,.34,this.head);for(const a of[-1,1])this.box(.16,.08,.04,this.mat(16777215,0,!0),a*.14,.25,.28,this.head),this.box(.2,.05,.05,l,a*.14,.34,.28,this.head);this.arms=this.box(1,.3,.45,s,0,1.5,.4),this.armL=this.group(-.62,1.7,.1),this.armR=this.group(.62,1.7,.1);for(const a of[this.armL,this.armR])this.box(.28,.9,.28,s,0,-.45,0,a);this.arms.visible=!0,this.h.toast("El Invocador alza los brazos… ¡cuidado con los colmillos y los vex!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Invocador desata un círculo de colmillos!"),this.fangT=1}raycast(t,e,i){return this.targets=this.vex.map(s=>({pos:s.pos,half:.7,onHit:()=>this.killVex(s)})),super.raycast(t,e,i)}killVex(t){this.h.burst(t.pos.x,t.pos.y,t.pos.z,[.5,.7,1],14,4),this.h.sound("hit",1),this.scene.remove(t.mesh),this.vex.splice(this.vex.indexOf(t),1)}spawnFang(t,e,i,s,o){const r=s.topY(Math.floor(t),Math.floor(e));if(r<0)return;const l=new we,a=new xi({color:15788224,emissive:4208664});for(let h=0;h<3;h++){const f=new _t(new Kt(.5-h*.14,.7,.5-h*.14),a);f.position.y=.35+h*.6,l.add(f)}l.position.set(t,r+1,e),l.scale.y=.01,l.visible=!1,this.scene.add(l),this.fangs.push({x:t,z:e,y:r+1,g:l,t:-i,hit:!1})}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*5);const a=13;l>a+2?(this.pos.x+=o/l*3.5*t,this.pos.z+=r/l*3.5*t):l<a-4&&(this.pos.x-=o/l*3*t,this.pos.z-=r/l*3*t),this.pos.y+=(e.pos.y+3.2-this.pos.y)*Math.min(1,t*1.2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.7)*.35,this.pos.z),this.root.rotation.y=this.yaw;const h=this.fangT<1||this.vexT<1;if(this.armL.rotation.x=this.armR.rotation.x=h?-2.4+Math.sin(this.t*14)*.2:0,this.arms.visible=!h,this.tpT-=t,this.tpT<=0){this.tpT=s===1?8:5,this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5);const f=Math.random()*Math.PI*2,c=11+Math.random()*4;this.pos.set(e.pos.x+Math.cos(f)*c,e.pos.y+3+Math.random()*2,e.pos.z+Math.sin(f)*c),this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5),this.h.sound("pop",1)}if(this.fangT-=t,this.fangT<=0&&!e.dead){this.fangT=s===1?4.2:3,this.h.sound("shoot",.8);for(let f=1;f<=12;f++)this.spawnFang(this.pos.x+o/l*f*1.4+Math.sin(f)*.2,this.pos.z+r/l*f*1.4,f*.07,i,e);if(s===2)for(let f=0;f<12;f++){const c=f/12*Math.PI*2;this.spawnFang(e.pos.x+Math.cos(c)*3,e.pos.z+Math.sin(c)*3,.9,i,e)}}for(let f=this.fangs.length-1;f>=0;f--){const c=this.fangs[f];c.t+=t,c.t>=0&&(c.g.visible=!0,c.g.scale.y=Math.min(1,c.t*6),!c.hit&&c.t>.12&&Math.hypot(c.x-e.pos.x,c.z-e.pos.z)<1.2&&Math.abs(c.y-e.pos.y)<2.2&&!e.dead&&(c.hit=!0,this.h.hurtPlayer(6,0,0)),c.t>1.1&&(this.scene.remove(c.g),this.fangs.splice(f,1)))}if(this.vexT-=t,this.vexT<=0&&!e.dead){this.vexT=s===1?10:7,this.h.sound("pop",1);const f=s===1?3:5;for(let c=0;c<f;c++){const d=new we,u=new xi({color:9416928,emissive:2109520,transparent:!0,opacity:.85}),g=new _t(new Kt(.5,.7,.5),u),x=new _t(new Kt(.7,.05,.4),u),m=x.clone();x.position.set(-.55,.2,-.1),m.position.set(.55,.2,-.1),d.add(g,x,m);for(const M of[-.1,.1]){const b=new _t(new Kt(.08,.08,.05),new ce({color:16719904}));b.position.set(M,.15,.27),d.add(b)}const p=ee(this.pos.x+Ge(-2,2),this.pos.y+1+Ge(0,2),this.pos.z+Ge(-2,2));d.position.copy(p),this.scene.add(d),this.vex.push({mesh:d,pos:p,w1:x,w2:m,life:28,cool:1})}}for(let f=this.vex.length-1;f>=0;f--){const c=this.vex[f];c.life-=t,c.cool-=t;const d=ee(e.pos.x,e.pos.y+1,e.pos.z).sub(c.pos),u=d.length();c.pos.addScaledVector(d.normalize(),6.2*t),c.pos.y+=Math.sin(this.t*6+f)*t*1.5,c.mesh.position.copy(c.pos),c.mesh.rotation.y=Math.atan2(d.x,d.z),c.w1.rotation.z=Math.sin(this.t*25)*.7,c.w2.rotation.z=-c.w1.rotation.z,u<1.2&&c.cool<=0&&!e.dead&&(c.cool=.9,this.h.hurtPlayer(3,0,0)),c.life<=0&&(this.scene.remove(c.mesh),this.vex.splice(f,1))}}dispose(){for(const t of this.vex)this.scene.remove(t.mesh);for(const t of this.fangs)this.scene.remove(t.g);this.vex=[],this.fangs=[],super.dispose()}}class S_ extends mi{constructor(t,e,i){super(t,e,i,{name:"GHAST GIGANTE",type:"ghast",maxHp:200,hitbox:{hx:2.2,hy:2.2,hz:2.2,oy:0},scale:1.8,burstColor:[1,1,1]}),this.fireT=3,this.tele=0,this.theta=Math.random()*6,this.targets=[];const s=this.mat(15921906),o=this.mat(14474460),r=this.mat(4208696);this.box(4,4,4,s,0,0,0),this.eyeL=this.box(.9,.25,.1,r,-.9,.2,2.03),this.eyeR=this.box(.9,.25,.1,r,.9,.2,2.03),this.mouth=this.box(.7,.35,.1,r,0,-.9,2.03),this.tents=[];for(const l of[-1.4,0,1.4])for(const a of[-1.4,0,1.4]){const h=2.2+Math.abs(l*a)*.5+(l===0&&a===0?.6:0),f=this.box(.55,h,.55,o,l,-2-h/2,a);this.tents.push({m:f,base:-2-h/2,ph:Math.random()*6})}this.redEye=this.mat(16719904,0,!0),this.h.toast("¡Un Ghast gigante! Golpea sus bolas de fuego para devolvérselas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Ghast llora de rabia y dispara más rápido!")}raycast(t,e,i){return this.targets=this.proj.filter(s=>!s.reflected).map(s=>({pos:s.mesh.position,half:1.25,onHit:()=>this.reflect(s)})),super.raycast(t,e,i)}reflect(t){t.reflected=!0,t.o={...t.o,reflectDmg:70},t.life=6,t.vel=ee(this.pos.x,this.pos.y,this.pos.z).sub(t.mesh.position).normalize().multiplyScalar(22),this.h.sound("hit",1)}tick(t,e){const i=this.phase;this.theta+=t*(.18+.05*i);const s=22,o=e.pos.x+Math.cos(this.theta)*s,r=e.pos.z+Math.sin(this.theta)*s,l=e.pos.y+11,a=Math.min(1,t*.7);if(this.pos.x+=(o-this.pos.x)*a,this.pos.z+=(r-this.pos.z)*a,this.pos.y+=(l-this.pos.y)*a,this.yaw+=ni(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t)*.7,this.pos.z),this.root.rotation.y=this.yaw,this.tents.forEach((h,f)=>{h.m.rotation.z=Math.sin(this.t*1.6+h.ph)*.18,h.m.rotation.x=Math.cos(this.t*1.3+h.ph)*.18}),this.fireT-=t,this.fireT<=0&&this.tele<=0&&!e.dead&&(this.tele=1.1,this.h.sound("hiss",.7)),this.tele>0){if(this.tele-=t,this.eyeL.material=this.eyeR.material=this.redEye,this.eyeL.scale.y=this.eyeR.scale.y=2.2,this.mouth.scale.set(1.6,3.4,1),this.tele<=0){this.fireT=i===1?3.6:2.2;const h=ee(this.pos.x,this.pos.y,this.pos.z),f=ee(e.pos.x+e.vel.x*.5,e.pos.y+1,e.pos.z+e.vel.z*.5).sub(h);this.shootProj(h,f,{speed:13,size:2,color:16769184,emissive:16736272,radius:3.6,ds:.6,effect:["burn",5],life:9})}}else this.eyeL.material=this.eyeR.material=this.mouth.material,this.eyeL.scale.y=this.eyeR.scale.y=1,this.mouth.scale.set(1,1,1)}}class E_ extends mi{constructor(t,e,i){super(t,e,i,{name:"HEROBRINE",type:"herobrine",maxHp:400,hitbox:{hx:.5,hy:1,hz:.5,oy:1},scale:1.35,burstColor:[1,1,1]}),this.vel=ee(),this.hw=.4,this.hh=2.4,this.tpT=5,this.boltT=4,this.walk=0,this.meleeT=0,this.minionT=8;const s=this.mat(14724236),o=this.mat(2794936),r=this.mat(3817372),l=this.mat(16777215,0,!0);this.head=this.group(0,1.5,0),this.box(.5,.5,.5,s,0,.25,0,this.head),this.box(.5,.14,.5,this.mat(3810322),0,.46,0,this.head);for(const a of[-1,1])this.box(.16,.1,.06,l,a*.13,.3,.26,this.head);this.box(.5,.75,.25,o,0,1.125,0),this.legL=this.group(-.125,.75,0),this.box(.25,.75,.25,r,0,-.375,0,this.legL),this.legR=this.group(.125,.75,0),this.box(.25,.75,.25,r,0,-.375,0,this.legR),this.armL=this.group(-.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armL),this.armR=this.group(.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armR),this.aura=new yv(16777215,0,14),this.root.add(this.aura),this.aura.position.y=1.5,this.h.toast("Una figura de ojos blancos te observa…"),this.h.sound("roar",.6)}phaseFor(t){return t>.6?1:t>.25?2:3}onPhase(t){this.h.sound("roar",1),t===2&&(this.h.toast("Las luces se apagan…"),this.tpT=1),t===3&&(this.h.toast("¡HEROBRINE LEVITA! Cuidado con sus rayos"),this.vel.y=6)}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*6),this.h.darkness(s>=2?.55+Math.sin(this.t*5)*.1:.15);const a=s===1?3.4:4.4;if(s<3){this.vel.x+=(o/l*a*(l>2.4?1:0)-this.vel.x)*Math.min(1,t*6),this.vel.z+=(r/l*a*(l>2.4?1:0)-this.vel.z)*Math.min(1,t*6);const f=Rs(i,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t);(f.hitX||f.hitZ)&&f.onGround&&(this.vel.y=9)}else{const f=e.pos.y+5,c=14;this.pos.y+=(f-this.pos.y)*Math.min(1,t*1.5),l>c?(this.pos.x+=o/l*5*t,this.pos.z+=r/l*5*t):l<c-4&&(this.pos.x-=o/l*4*t,this.pos.z-=r/l*4*t)}this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.4;const h=Math.sin(this.walk)*.8;if(this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h,this.armR.rotation.x=s===3?-1.4:h,this.root.position.set(this.pos.x,this.pos.y+(s===3?Math.sin(this.t*2)*.4:0),this.pos.z),this.root.rotation.y=this.yaw,this.aura.intensity=s>=3?3+Math.sin(this.t*12):0,this.tpT-=t,this.tpT<=0&&!e.dead){this.tpT=s===1?6.5:s===2?4:5,this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5);const f=e.lookDir(),c=Math.hypot(f.x,f.z)||1,d=Math.floor(e.pos.x-f.x/c*4),u=Math.floor(e.pos.z-f.z/c*4),g=i.topY(d,u);s<3&&g>0?(this.pos.set(d+.5,g+1,u+.5),this.vel.set(0,0,0)):this.pos.set(d+.5,e.pos.y+5,u+.5),this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5),this.h.sound("pop",1)}if(this.meleeT-=t,l<2.6&&Math.abs(e.pos.y-this.pos.y)<2.5&&this.meleeT<=0&&!e.dead&&s<3&&(this.meleeT=1.1,this.h.hurtPlayer(s===1?8:11,o/l*7,r/l*7),this.h.sound("hit",1)),this.boltT-=t,this.boltT<=0&&!e.dead){this.boltT=s===1?6:s===2?3.8:2.4;const f=e.pos.x,c=e.pos.z;if(this.h.burst(f,e.pos.y+.5,c,[1,1,.6],18,2),setTimeout(()=>{this.dead||this.h.strikeNear(f,c)},900),s===3){const d=ee(this.pos.x,this.pos.y+2,this.pos.z),u=ee(e.pos.x,e.pos.y+1,e.pos.z).sub(d);this.shootProj(d,u,{speed:18,size:.9,color:16777215,emissive:16777215,radius:2.2,ds:.45,effect:["burn",3]})}}s>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=11,this.h.minions()<5&&this.h.spawnMinion("zombie")))}dispose(){this.h.darkness(0),super.dispose()}}class w_ extends mi{constructor(t,e,i){super(t,e,i,{name:"REY SLIME",type:"slimeking",maxHp:260,hitbox:{hx:2.6,hy:2.6,hz:2.6,oy:2.6},scale:1.4,burstColor:[.4,1,.4]}),this.vel=ee(),this.hw=3.2,this.hh=5.4,this.jumpT=2.5,this.onGround=!1,this.splitAt=[.75,.5,.25],this.squash=1;const s=new xi({color:6348896,emissive:1064976,transparent:!0,opacity:.72});this.flashMats.push(s);const o=this.mat(3119663,536584);this.slime=this.group(0,0,0),this.box(5,5,5,s,0,2.6,0,this.slime),this.box(2.2,2.2,2.2,o,0,2.6,0,this.slime);const r=this.mat(1060880,0,!0);for(const a of[-1,1])this.box(.7,.7,.2,r,a*1.2,3.1,2.55,this.slime);this.box(1.5,.3,.2,r,0,1.8,2.55,this.slime);const l=this.mat(15777840,3153920);this.box(3.4,.6,3.4,l,0,5.4,0,this.slime);for(const[a,h]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4],[0,1.6],[0,-1.6]])this.box(.5,.9,.5,l,a,6,h,this.slime);this.h.toast("El Rey Slime salta hacia ti. ¡Se divide al perder vida!")}phaseFor(t){return t>.5?1:t>.25?2:3}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Slime salta más rápido!")}onHit(){const t=this.hp/this.maxHp;for(;this.splitAt.length&&t<this.splitAt[0];){this.splitAt.shift();for(let e=0;e<4;e++)this.h.spawnMinion("slime");this.h.toast("¡Se divide en slimes!")}}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;if(this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*4),this.jumpT-=t,this.onGround&&(this.vel.x*=.8,this.vel.z*=.8,this.jumpT<=0&&!e.dead)){this.jumpT=s===1?2.6:s===2?1.8:1.2;const h=Math.min(l,22)/1.35*.95;this.vel.y=17,this.vel.x=o/l*h,this.vel.z=r/l*h,this.onGround=!1,this.squash=1.4,this.h.sound("pop",1)}const a=Rs(i,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t,34);if(a.onGround&&!this.onGround){this.onGround=!0,this.squash=.6,this.h.sound("explode",.7);const h=s===1?8:11,f=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z);this.h.burst(this.pos.x,this.pos.y+.3,this.pos.z,[.4,1,.4],36,8),f<h&&Math.abs(e.pos.y-this.pos.y)<3&&!e.dead&&this.h.hurtPlayer(s===1?8:12,(e.pos.x-this.pos.x)/(f||1)*9,(e.pos.z-this.pos.z)/(f||1)*9);const c=Math.floor(this.pos.x),d=Math.floor(this.pos.z),u=Math.floor(this.pos.y)-1;for(let g=-3;g<=3;g++)for(let x=-3;x<=3;x++)g*g+x*x<=9&&i.getBlock(c+g,u,d+x)&&i.getBlock(c+g,u,d+x)!==_.BEDROCK&&Math.random()<.6&&i.setBlock(c+g,u,d+x,0)}(a.hitX||a.hitZ)&&(this.vel.x*=-.2,this.vel.z*=-.2),this.squash+=(1-this.squash)*Math.min(1,t*8),this.slime.scale.set(1/Math.sqrt(this.squash),this.squash,1/Math.sqrt(this.squash)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,l<3.2&&Math.abs(e.pos.y-this.pos.y)<4&&!e.dead&&(this.contactT=(this.contactT||0)-t)<=0&&(this.contactT=1,this.h.hurtPlayer(5,o/l*6,r/l*6))}}class T_ extends mi{constructor(t,e,i){super(t,e,i,{name:"REY BLAZE",type:"blazeking",maxHp:280,hitbox:{hx:1.4,hy:1.7,hz:1.4,oy:1.4},scale:1.8,burstColor:[1,.6,.1]}),this.theta=Math.random()*6,this.volleyT=3,this.waveT=6,this.minionT=12;const s=this.mat(15773728,10506240),o=this.mat(16742928,12595200),r=this.mat(2101248,0,!0);this.head=this.box(1.5,1.5,1.5,s,0,2.2,0);for(const l of[-.35,.35])this.box(.34,.26,.06,r,l,2.35,.77,this.body);this.box(.7,.16,.06,r,0,1.85,.77);for(let l=0;l<5;l++){const a=l/5*Math.PI*2;this.box(.25,.7,.25,o,Math.cos(a)*.6,3.15,Math.sin(a)*.6).rotation.z=Math.cos(a)*.3}this.core=this.box(.8,.8,.8,this.mat(16769136,0,!0),0,1,0),this.rings=[];for(let l=0;l<3;l++){const a=this.group(0,.2+l*.7,0);for(let h=0;h<6;h++){const f=h/6*Math.PI*2;this.box(.22,1.5,.22,l%2?o:s,Math.cos(f)*(1.1+l*.1),0,Math.sin(f)*(1.1+l*.1),a)}this.rings.push(a)}this.h.toast("¡El Rey Blaze arde sobre el Nether! Salta sus ondas de fuego")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Blaze llama a sus blazes!"),this.minionT=1}tick(t,e,i){const s=this.phase;this.theta+=t*(.32+.1*s);const o=15,r=e.pos.x+Math.cos(this.theta)*o,l=e.pos.z+Math.sin(this.theta)*o,a=e.pos.y+8+Math.sin(this.t*1.1)*1.5,h=Math.min(1,t*.9);if(this.pos.x+=(r-this.pos.x)*h,this.pos.z+=(l-this.pos.z)*h,this.pos.y+=(a-this.pos.y)*h,this.yaw+=ni(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw)*Math.min(1,t*4),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.rings.forEach((f,c)=>f.rotation.y+=t*(1.6+c*.7)*(c%2?-1:1)),this.core.scale.setScalar(1+Math.sin(this.t*6)*.15),this.volleyT-=t,this.volleyT<=0&&!e.dead){this.volleyT=s===1?3.6:2.5;const f=ee(this.pos.x,this.pos.y+3,this.pos.z),c=ee(e.pos.x,e.pos.y+1,e.pos.z).sub(f).normalize(),d=s===1?5:7;for(let u=0;u<d;u++){const g=(u-(d-1)/2)*.16,x=c.clone();x.x=c.x*Math.cos(g)-c.z*Math.sin(g),x.z=c.x*Math.sin(g)+c.z*Math.cos(g),this.shootProj(f,x,{speed:13,size:.75,color:16756800,emissive:16732176,radius:1.8,ds:.28,effect:["burn",4]})}}this.waveT-=t,this.waveT<=0&&!e.dead&&(this.waveT=s===1?7.5:5,this.addWave(this.pos.x,e.pos.y,this.pos.z,{max:30,speed:12,dmg:9,color:16738832,effect:["burn",4]}),this.h.sound("roar",.6)),s===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<6&&(this.h.spawnMinion("blaze"),this.h.spawnMinion("blaze"))))}}class A_ extends mi{constructor(t,e,i){super(t,e,i,{name:"REY PIGLIN",type:"piglinking",maxHp:340,hitbox:{hx:1,hy:1.9,hz:1,oy:1.9},scale:1.9,burstColor:[.9,.7,.2]}),this.hw=.9,this.hh=7,this.state="walk",this.timer=3,this.slamT=9,this.cryT=12,this.axeT=5,this.spinT=7,this.walkA=0;const s=this.mat(13208184),o=this.mat(15253568,3154944),r=this.mat(5917240),l=this.mat(8022608),a=this.mat(16724e3,0,!0);this.legL=this.group(-.28,1.5,0),this.box(.5,1.5,.5,r,0,-.75,0,this.legL),this.legR=this.group(.28,1.5,0),this.box(.5,1.5,.5,r,0,-.75,0,this.legR),this.box(1.2,1.5,.6,l,0,2.25,0),this.box(1.3,.35,.7,o,0,2.85,0),this.box(1.25,.25,.65,o,0,1.7,0),this.armL=this.group(-.82,2.85,0),this.box(.45,1.5,.45,s,0,-.75,0,this.armL),this.armR=this.group(.82,2.85,0),this.box(.45,1.5,.45,s,0,-.75,0,this.armR),this.box(.2,2.2,.2,this.mat(6965802),0,-1.4,.4,this.armR),this.box(1.1,.7,.18,this.mat(10132122),.5,-2.2,.4,this.armR),this.head=this.group(0,3.35,0),this.box(1.2,1,1,s,0,.1,0,this.head),this.box(.7,.45,.25,this.mat(11563103),0,-.05,.6,this.head);for(const h of[-1,1])this.box(.14,.14,.05,a,h*.3,.3,.52,this.head),this.box(.25,.6,.12,s,h*.78,.35,0,this.head).rotation.z=h*.6,this.box(.12,.3,.1,this.mat(15788240),h*.2,-.3,.7,this.head);this.box(1.3,.3,1.1,o,0,.65,0,this.head);for(let h=-1;h<=1;h++)this.box(.25,.4,.2,o,h*.45,.95,0,this.head);this.h.toast("El Rey Piglin golpea su hacha: ¡oro y furia!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Piglin gira como un torbellino!"),this.spinT=2}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.timer-=t,this.slamT-=t,this.cryT-=t,this.axeT-=t,this.spinT-=t,this.state!=="spin"&&(this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*4));let a=s===1?3.4:4.4;if(this.state==="walk"){if(this.timer<=0&&l<6.5&&!e.dead)this.state="windup",this.timer=.65;else if(this.slamT<=0&&l<22&&this.onGround)this.vel.y=14,this.vel.x=o/l*Math.min(l,14)*.7,this.vel.z=r/l*Math.min(l,14)*.7,this.state="slam",this.slamT=s===1?9:6,this.slammed=!1,this.h.sound("roar",.7);else if(this.spinT<=0&&s===2&&l<8)this.state="spin",this.timer=1.8,this.spinT=7,this.spinHit=0;else if(this.axeT<=0&&l>7&&!e.dead){this.axeT=s===1?5.5:3.8;const f=ee(this.pos.x,this.pos.y+4,this.pos.z);this.shootProj(f,ee(e.pos.x,e.pos.y+1,e.pos.z).sub(f),{speed:15,size:1,color:15253568,emissive:8413200,radius:1.5,ds:.22}),this.armR.rotation.x=-2.4}if(this.cryT<=0&&(this.cryT=14,this.h.sound("roar",1),this.h.toast("¡El Rey Piglin llama a su guardia!"),this.h.minions()<6))for(let f=0;f<3;f++)this.h.spawnMinion("piglin")}else this.state==="windup"?(a=0,this.armR.rotation.x=-2.6*Math.min(1,(.65-this.timer)*2),this.timer<=0&&(this.state="walk",this.timer=s===1?2.6:1.8,l<7.5&&!e.dead&&this.h.hurtPlayer(13,o/l*12,r/l*12),this.h.sound("hit",1),this.armR.rotation.x=.6)):this.state==="slam"?(a=0,this.onGround&&this.vel.y<=0&&this.t>.2&&(this.state="walk",this.timer=1.5,this.h.burst(this.pos.x,this.pos.y+.4,this.pos.z,[.6,.4,.3],30,8),this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:14,speed:12,dmg:9,color:15253568}),this.h.sound("explode",.8))):this.state==="spin"&&(a=1.2,this.yaw+=t*14,this.spinHit-=t,this.armR.rotation.x=-1.6,l<5&&this.spinHit<=0&&!e.dead&&(this.spinHit=.45,this.h.hurtPlayer(7,o/l*9,r/l*9)),this.timer<=0&&(this.state="walk"));this.walk(t,i,o,r,l,a),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.4;const h=Math.sin(this.walkA)*.6;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h*.7,this.state==="walk"&&(this.armR.rotation.x+=(h*.7-this.armR.rotation.x)*Math.min(1,t*6)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class R_ extends mi{constructor(t,e,i){super(t,e,i,{name:"ENDERMAN TITÁN",type:"endertitan",maxHp:380,hitbox:{hx:.45,hy:1.5,hz:.45,oy:1.5},scale:3.6,burstColor:[.7,.2,1]}),this.hw=1.2,this.hh=10,this.tpT=4,this.rockT=3,this.sweepT=0,this.mite=12,this.gaze=0,this.gazeCool=0;const s=this.mat(1182232),o=this.mat(14708991,0,!0);this.legL=this.group(-.12,1.5,0),this.box(.18,1.5,.18,s,0,-.75,0,this.legL),this.legR=this.group(.12,1.5,0),this.box(.18,1.5,.18,s,0,-.75,0,this.legR),this.box(.5,.95,.26,s,0,1.98,0),this.armL=this.group(-.34,2.45,0),this.box(.13,1.35,.13,s,0,-.67,0,this.armL),this.armR=this.group(.34,2.45,0),this.box(.13,1.35,.13,s,0,-.67,0,this.armR),this.head=this.group(0,2.7,0),this.box(.5,.42,.5,s,0,0,0,this.head);for(const r of[-.13,.13])this.box(.15,.06,.03,o,r,.02,.26,this.head);this.jaw=this.group(0,-.22,0,this.head),this.box(.44,.1,.44,s,0,0,0,this.jaw),this.h.toast("El Enderman Titán se alza… ¡no le mires a los ojos!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Titán grita y convoca endermites!"),this.mite=1}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;if(this.tpT-=t,this.rockT-=t,this.sweepT-=t,this.mite-=t,this.gazeCool-=t,this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*4),this.tpT<=0&&!e.dead){this.tpT=s===1?5.2:3.4,this.h.burst(this.pos.x,this.pos.y+4,this.pos.z,[.8,.3,1],30,6);const g=Math.random()*Math.PI*2,x=7+Math.random()*3,m=Math.floor(e.pos.x+Math.cos(g)*x),p=Math.floor(e.pos.z+Math.sin(g)*x),M=i.topY(m,p);M>0&&(this.pos.set(m+.5,M+1,p+.5),this.vel.set(0,0,0),this.sweepT=.8,this.h.burst(this.pos.x,this.pos.y+4,this.pos.z,[.8,.3,1],30,6),this.h.sound("pop",1))}if(this.sweepT>0?(this.armR.rotation.x=-2.2,this.armL.rotation.x=-2.2,this.sweepT-t<=0&&l<9&&!e.dead&&(this.h.hurtPlayer(12,o/l*11,r/l*11),this.h.sound("hit",1))):(this.armR.rotation.x+=(Math.sin(this.t*1.5)*.1-this.armR.rotation.x)*Math.min(1,t*5),this.armL.rotation.x=this.armR.rotation.x),this.rockT<=0&&l>5&&!e.dead){this.rockT=s===1?3.8:2.6;const g=s===1?1:2;for(let x=0;x<g;x++){const m=ee(this.pos.x,this.pos.y+9,this.pos.z),p=ee(e.pos.x+e.vel.x*.5,e.pos.y+1,e.pos.z+e.vel.z*.5).sub(m);p.x+=Ge(-.08,.08)*x,this.shootProj(m,p,{speed:15,size:1.8,color:14211232,emissive:3153984,radius:2.4,ds:.42})}this.jaw.rotation.x=.8}else this.jaw.rotation.x*=.92;const a=e.lookDir(),h=this.pos.x-e.pos.x,f=this.pos.y+9.4-(e.pos.y+1.6),c=this.pos.z-e.pos.z,d=Math.hypot(h,f,c)||1;if((a.x*h+a.y*f+a.z*c)/d>.985&&d<45?this.gaze+=t:this.gaze=Math.max(0,this.gaze-t*2),this.gaze>1.6&&this.gazeCool<=0&&!e.dead&&(this.gaze=0,this.gazeCool=6,this.h.sound("roar",1),this.h.hurtPlayer(5,0,0),this.h.effect("levitate",3),this.h.toast("¡Su mirada te eleva!")),s===2&&this.mite<=0&&(this.mite=12,this.h.minions()<7))for(let g=0;g<3;g++)this.h.spawnMinion("endermite");this.walk(t,i,o,r,l,l>14?3.5:0);const u=Math.sin(this.t*3)*.25;this.legL.rotation.x=u,this.legR.rotation.x=-u,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class C_ extends mi{constructor(t,e,i){super(t,e,i,{name:"SEÑOR DEL VACÍO",type:"voidlord",maxHp:300,hitbox:{hx:2,hy:2.2,hz:2,oy:0},scale:1.8,burstColor:[.5,.1,.9]}),this.rifts=[],this.riftT=3,this.laserT=6,this.charge=0,this.tpT=9,this.minionT=14;const s=this.mat(459790),o=this.mat(11555071,0,!0),r=this.mat(2363448,1574960),l=this.group(0,0,0);l.rotation.set(.6,.6,0),this.core=l,this.box(2.4,2.4,2.4,s,0,0,0,l),this.box(2.6,.14,2.6,o,0,0,0,l),this.box(.14,2.6,2.6,o,0,0,0,l),this.box(2.6,2.6,.14,o,0,0,0,l),this.eye=this.box(.9,.9,.2,this.mat(16736511,0,!0),0,0,1.3),this.body.add(this.eye),this.orbs=[];for(let a=0;a<5;a++){const h=this.box(.5,1.1,.5,r,0,0,0);h.rotation.z=.5,this.orbs.push(h)}this.laser=new _t(new _n(.1,.1,1,6),new ce({color:13660415,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Señor del Vacío abre grietas bajo tus pies… ¡muévete!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El vacío se desborda! Su gravedad te atrae")}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1,a=16;if(l>a+2?(this.pos.x+=o/l*4*t,this.pos.z+=r/l*4*t):l<a-5&&(this.pos.x-=o/l*3*t,this.pos.z-=r/l*3*t),this.pos.y+=(e.pos.y+7-this.pos.y)*Math.min(1,t*.9),this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw,this.core.rotation.y+=t*.8,this.core.rotation.x+=t*.3,this.orbs.forEach((u,g)=>{const x=this.t*1.1+g/5*Math.PI*2;u.position.set(Math.cos(x)*2.8,Math.sin(this.t*2+g)*.6,Math.sin(x)*2.8),u.rotation.y=x}),this.riftT-=t,this.riftT<=0&&!e.dead){this.riftT=s===1?4.2:2.8;const u=s===1?1:2;for(let g=0;g<u;g++){const x=e.pos.x+(g?Ge(-5,5):0),m=e.pos.z+(g?Ge(-5,5):0),p=new _t(new _n(3,3,.25,24),new ce({color:8401151,transparent:!0,opacity:.25,fog:!1,depthWrite:!1})),M=i.topY(Math.floor(x),Math.floor(m));p.position.set(x,(M>0?M:e.pos.y-1)+1.2,m),this.scene.add(p),this.rifts.push({x,z:m,y:p.position.y,t:-1.2,m:p,tick:0})}}for(let u=this.rifts.length-1;u>=0;u--){const g=this.rifts[u];g.t+=t,g.t<0?g.m.material.opacity=.18+Math.sin(this.t*14)*.08:(g.m.material.opacity=.7,g.m.material.color.setHex(1706032),g.tick-=t,g.tick<=0&&(g.tick=.45,this.h.burst(g.x+Ge(-2,2),g.y,g.z+Ge(-2,2),[.6,.2,1],5,3)),Math.hypot(e.pos.x-g.x,e.pos.z-g.z)<3.1&&Math.abs(e.pos.y+.5-g.y)<2.2&&!e.dead&&(g.dmgT=(g.dmgT||0)-t,g.dmgT<=0&&(g.dmgT=.5,this.h.hurtPlayer(3,0,0),this.h.effect("levitate",2))),g.t>5&&(this.scene.remove(g.m),this.rifts.splice(u,1)))}this.laserT-=t;const h=ee(this.pos.x,this.pos.y,this.pos.z),f=ee(e.pos.x,e.pos.y+1,e.pos.z),c=f.clone().sub(h),d=c.length();if(c.normalize(),this.charge>0){const u=s===1?2.1:1.5,g=1-this.charge/u;this.charge-=t,this.laser.material.opacity=.2+g*.7,this.laser.scale.set(.5+g*3,d,.5+g*3),this.laser.position.copy(h).add(f).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(ee(0,1,0),c),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.7),!i.raycast(h,c,d)&&!e.dead&&this.h.hurtPlayer(10,c.x*6,c.z*6),this.laserT=s===1?6.5:4)}else this.laser.material.opacity=0,this.laserT<=0&&d<45&&!e.dead&&(this.charge=s===1?2.1:1.5,this.h.sound("hiss",.7));if(s===2&&d<36&&(e.push.x=(this.pos.x-e.pos.x)/l*3.2,e.push.z=(this.pos.z-e.pos.z)/l*3.2),this.tpT-=t,this.tpT<=0&&!e.dead){this.tpT=s===1?10:7,this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.6,.2,1],30,6);const u=Math.random()*Math.PI*2;this.pos.set(e.pos.x+Math.cos(u)*16,e.pos.y+8,e.pos.z+Math.sin(u)*16),this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.6,.2,1],30,6),this.h.sound("pop",1)}s===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=15,this.h.minions()<6&&(this.h.spawnMinion("shulker"),this.h.spawnMinion("shulker"))))}dispose(){for(const t of this.rifts)this.scene.remove(t.m);this.rifts=[],super.dispose()}}class L_ extends mi{constructor(t,e,i){super(t,e,i,{name:"CREEPER TITÁN",type:"creepertitan",maxHp:320,hitbox:{hx:.6,hy:1.8,hz:.6,oy:1.8},scale:2.6,burstColor:[.3,.9,.3]}),this.hw=1.15,this.hh=9,this.fuse=0,this.stun=0,this.mT=12,this.walkA=0,this.green=this.mat(5154894,1060880),this.green2=this.mat(4099646,532488),this.legs=[[-.28,.3],[.28,.3],[-.28,-.3],[.28,-.3]].map(([h,f])=>{const c=this.group(h,.9,f);return this.box(.5,.9,.5,this.green2,0,-.45,0,c),c}),this.box(1,1.6,.6,this.green,0,1.7,0);const s=document.createElement("canvas");s.width=s.height=8;const o=s.getContext("2d");o.fillStyle="#4ea84e",o.fillRect(0,0,8,8),o.fillStyle="#0c1a0c",o.fillRect(1,2,2,2),o.fillRect(5,2,2,2),o.fillRect(3,4,2,2),o.fillRect(2,5,1,2),o.fillRect(5,5,1,2);const r=new Ui(s);r.magFilter=_e,r.minFilter=_e,r.generateMipmaps=!1,r.colorSpace=oi;const l=new xi({map:r,emissive:1060880});this.flashMats.push(l);const a=new _t(new Kt(1,1,1),[this.green,this.green,this.green,this.green,l,this.green]);a.position.set(0,3.1,0),this.body.add(a),this.head=a,this.h.toast("¡El Creeper Titán sisea! Aléjate cuando se hinche")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡Un rayo lo carga! Su explosión será colosal"),this.h.strikeNear(this.pos.x,this.pos.z),this.green.emissive.setHex(1061119),this.green2.emissive.setHex(532672),this.flashMats.forEach(t=>t.userData.baseE=void 0)}damageMul(){return this.stun>0?1.8:1}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*3),this.mT-=t;let a=s===1?2.8:3.6;if(this.stun>0)this.stun-=t,a=0,this.root.rotation.z=Math.sin(this.t*20)*.02;else if(this.fuse>0){this.fuse-=t,a=.8;const f=s===1?3.2:2.2,c=1-this.fuse/f;this.body.scale.setScalar(1+c*.28),this.flash=Math.floor(this.fuse*10)%2===0?.12:0,Math.floor(c*20)%4===0&&this.h.sound("hiss",.3),this.fuse<=0&&(this.body.scale.setScalar(1),this.h.explode(this.pos.x,this.pos.y+3.2,this.pos.z,s===1?9:12,.95),this.h.burst(this.pos.x,this.pos.y+3,this.pos.z,[1,.7,.2],60,12),this.stun=3.6,this.h.toast("¡Está aturdido! Golpéalo ahora"))}else l<15&&!e.dead&&(this.fuse=s===1?3.2:2.2);this.walk(t,i,o,r,l,a),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.1;const h=Math.sin(this.walkA)*.5;this.legs.forEach((f,c)=>f.rotation.x=c%2?-h:h),this.mT<=0&&this.stun<=0&&(this.mT=14,this.h.minions()<6&&(this.h.spawnMinion("creeper"),this.h.spawnMinion("creeper"))),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class D_ extends mi{constructor(t,e,i){super(t,e,i,{name:"GÓLEM COLOSAL",type:"colossus",maxHp:420,hitbox:{hx:1.8,hy:2.1,hz:.8,oy:2.1},scale:2,burstColor:[.8,.8,.8]}),this.hw=1.5,this.hh=8,this.state="walk",this.timer=3,this.poundT=6,this.rockT=7,this.novaT=9,this.walkA=0;const s=this.mat(13158600,1052688),o=this.mat(10132122),r=this.mat(4880954);this.legL=this.group(-.4,1.4,0),this.box(.7,1.4,.7,o,0,-.7,0,this.legL),this.legR=this.group(.4,1.4,0),this.box(.7,1.4,.7,o,0,-.7,0,this.legR),this.box(1.9,1.6,1.1,s,0,2.2,0),this.box(1.2,.8,.9,o,0,1.4,0);for(const[l,a]of[[-.5,2.6],[.6,2]])this.box(.4,.8,.12,r,l,a,.58);this.armL=this.group(-1.2,2.9,0),this.box(.6,2.4,.6,s,0,-1.2,0,this.armL),this.box(.8,.8,.8,o,0,-2.5,0,this.armL),this.armR=this.group(1.2,2.9,0),this.box(.6,2.4,.6,s,0,-1.2,0,this.armR),this.box(.8,.8,.8,o,0,-2.5,0,this.armR),this.head=this.group(0,3.4,.1),this.box(.8,.9,.8,s,0,.3,0,this.head),this.box(.2,.4,.25,o,0,.2,.5,this.head),this.eyes=[-1,1].map(l=>this.box(.18,.1,.04,this.mat(15790208,0,!0),l*.2,.5,.42,this.head)),this.h.toast("El Gólem Colosal despierta: ¡salta sus ondas de choque!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡Sus ojos arden en rojo!"),this.eyes.forEach(t=>t.material.color.setHex(16719904)),this.novaT=1.5}damageMul(){return .85}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.timer-=t,this.poundT-=t,this.rockT-=t,this.novaT-=t,this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*3);let a=s===1?2.4:3.2;if(this.state==="walk")if(this.timer<=0&&l<8.5&&!e.dead)this.state="punch",this.timer=.8;else if(this.poundT<=0&&l<18)this.state="pound",this.timer=1.1,this.poundT=s===1?7:4.5;else if(this.rockT<=0&&l>9){this.rockT=s===1?7:4.5;const f=ee(this.pos.x,this.pos.y+6,this.pos.z);this.shootProj(f,ee(e.pos.x,e.pos.y+1,e.pos.z).sub(f),{speed:14,size:1.6,color:9079434,emissive:2105376,radius:2.2,ds:.4}),this.armR.rotation.x=-2.6}else s===2&&this.novaT<=0&&this.onGround&&(this.novaT=8,this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:20,speed:13,dmg:9,color:14737663}),this.h.sound("roar",.7));else this.state==="punch"?(a=0,this.armR.rotation.x=-2.8*Math.min(1,(.8-this.timer)*1.8),this.timer<=0&&(this.state="walk",this.timer=s===1?2.4:1.6,l<9.5&&!e.dead&&this.h.hurtPlayer(14,o/l*13,r/l*13),this.h.sound("hit",1),this.armR.rotation.x=.8)):this.state==="pound"&&(a=0,this.armL.rotation.x=this.armR.rotation.x=-3*Math.min(1,(1.1-this.timer)*1.2),this.timer<=0&&(this.state="walk",this.timer=1.4,this.armL.rotation.x=this.armR.rotation.x=.7,this.h.sound("explode",.8),this.h.burst(this.pos.x,this.pos.y+.4,this.pos.z,[.6,.6,.6],36,9),this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:s===1?16:22,speed:12,dmg:10,color:16777215})));this.walk(t,i,o,r,l,a),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.3;const h=Math.sin(this.walkA)*.5;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.state==="walk"&&(this.armL.rotation.x+=(-h*.6-this.armL.rotation.x)*Math.min(1,t*5),this.armR.rotation.x+=(h*.6-this.armR.rotation.x)*Math.min(1,t*5)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class P_ extends mi{constructor(t,e,i){super(t,e,i,{name:"GOKU",type:"goku",maxHp:450,hitbox:{hx:.5,hy:1,hz:.4,oy:1},scale:1.6,burstColor:[1,.8,.2]}),this.hw=.5,this.hh=3.2,this.state="walk",this.timer=2,this.kameT=7,this.tpT=5,this.comboT=3,this.genkiT=20,this.walkA=0,this.beam=null,this.aim=ee();const s=this.mat(15777936),o=this.mat(15759888),r=this.mat(2117824),l=this.mat(1381658),a=this.mat(1381658);this.hairMat=a,this.hairBlk=[],this.legL=this.group(-.2,.95,0),this.box(.34,.95,.38,o,0,-.48,0,this.legL),this.legR=this.group(.2,.95,0),this.box(.34,.95,.38,o,0,-.48,0,this.legR),this.box(.36,.2,.42,r,-.2,.1,.02),this.box(.36,.2,.42,r,.2,.1,.02),this.box(.8,.8,.45,o,0,1.4,0),this.box(.82,.14,.47,r,0,1.05,0),this.armL=this.group(-.58,1.72,0),this.box(.3,.7,.3,o,0,-.35,0,this.armL),this.box(.28,.4,.28,s,0,-.9,0,this.armL),this.armR=this.group(.58,1.72,0),this.box(.3,.7,.3,o,0,-.35,0,this.armR),this.box(.28,.4,.28,s,0,-.9,0,this.armR),this.head=this.group(0,2,0),this.box(.52,.52,.5,s,0,.26,0,this.head);for(const h of[-.13,.13])this.box(.1,.07,.04,l,h,.3,.26,this.head),this.box(.14,.04,.04,l,h,.38,.26,this.head);this.box(.54,.2,.52,a,0,.6,-.02,this.head);for(let h=0;h<7;h++){const f=(h-3)*.28,c=this.box(.16,.6+h%2*.3,.16,a,(h-3)*.1,.9,(h%3-1)*.08,this.head);c.rotation.z=-f*.6,c.rotation.x=(h%3-1)*.2,this.hairBlk.push(c)}this.aura=new _t(new Ss(1.5,12,10),new ce({color:16769088,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.aura.position.y=1.4,this.body.add(this.aura),this.h.toast("¡GOKU quiere pelear! Esquiva el Kamehameha: ¡salta o rodea!")}phaseFor(t){return t>.6?1:t>.25?2:3}onPhase(t){this.h.sound("roar",1),t===2?(this.h.toast("¡SUPER SAIYAJIN!"),this.hairMat.color.setHex(16767008),this.hairMat.emissive.setHex(8411136),this.aura.material.opacity=.22,this.h.explode(this.pos.x,this.pos.y+1,this.pos.z,3,.1)):(this.h.toast("¡GENKI DAMA! Aguanta o golpéalo antes de que la lance"),this.genkiT=.5)}tele(t){const e=Math.random()*6.28,i=4.5;this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.6,.9,1],18,5),this.pos.x=t.pos.x+Math.cos(e)*i,this.pos.z=t.pos.z+Math.sin(e)*i,this.pos.y=t.pos.y+.5,this.vel.set(0,0,0),this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.6,.9,1],18,5),this.h.sound("hiss",.8)}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.timer-=t,this.kameT-=t,this.tpT-=t,this.comboT-=t,this.genkiT-=t,this.state!=="kame"&&(this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*6));let a=s===1?4.2:5.6;if(this.state==="walk")s===3&&this.genkiT<=0&&!e.dead?(this.state="genki",this.timer=4.5,this.genkiT=18,this.ball=new _t(new Ss(1,14,12),new ce({color:8440063,fog:!1})),this.ball.position.set(this.pos.x,this.pos.y+7,this.pos.z),this.scene.add(this.ball),this.extra.push(this.ball),this.vel.set(0,0,0)):this.kameT<=0&&l>5&&!e.dead?(this.state="kame",this.timer=1.5,this.kameT=s===1?8:5.5,this.h.sound("hiss",1)):this.tpT<=0&&l>3?(this.tpT=s===1?6:3.5,this.tele(e)):this.comboT<=0&&l<3.8&&!e.dead&&(this.state="combo",this.timer=1.2,this.hitN=0,this.comboT=s===1?4:2.5);else if(this.state==="kame"){a=0;const f=1-this.timer/1.5;this.armL.rotation.x=this.armR.rotation.x=-1.4,this.aim.set(o,e.pos.y+1-(this.pos.y+2.6),r).normalize(),this.beam||(this.beam=new _t(new _n(1,1,1,10,1,!0),new ce({color:7391487,transparent:!0,opacity:.55,fog:!1,depthWrite:!1,side:Ri})),this.scene.add(this.beam),this.charge=new _t(new Ss(1,10,8),new ce({color:10543359,fog:!1})),this.scene.add(this.charge),this.extra.push(this.beam,this.charge),this.beam.visible=!1);const c=ee(this.pos.x+Math.sin(this.yaw)*1.2,this.pos.y+2.6,this.pos.z+Math.cos(this.yaw)*1.2);this.charge.position.copy(c),this.charge.scale.setScalar(.2+f*.7),this.charge.visible=!0,this.timer<=0&&(this.state="fire",this.timer=1.2,this.fireDir=this.aim.clone(),this.fireFrom=c.clone(),this.charge.visible=!1,this.beam.visible=!0,this.hitBeam=!1,this.h.sound("explode",.9))}else if(this.state==="fire"){a=0;const f=60,c=this.fireDir,d=this.fireFrom.clone().addScaledVector(c,f/2);this.beam.position.copy(d),this.beam.scale.set(.9+Math.sin(this.t*40)*.12,f,.9+Math.sin(this.t*40)*.12),this.beam.quaternion.setFromUnitVectors(ee(0,1,0),c);const u=ee(e.pos.x,e.pos.y+.9,e.pos.z).sub(this.fireFrom),g=u.dot(c),x=u.clone().addScaledVector(c,-g).length();!this.hitBeam&&!e.dead&&g>0&&g<f&&x<1.6&&(this.hitBeam=!0,this.h.hurtPlayer(s===1?14:18,c.x*12,c.z*12),this.h.explode(e.pos.x,e.pos.y+1,e.pos.z,3,.15)),this.timer<=0&&(this.state="walk",this.beam.visible=!1,this.timer=1.2,this.armL.rotation.x=this.armR.rotation.x=0)}else if(this.state==="combo")a=6,this.armR.rotation.x=Math.sin(this.t*25)*1.4,this.armL.rotation.x=-Math.sin(this.t*25)*1.4,this.timer<1.2-(this.hitN+1)*.28&&this.hitN<4&&(this.hitN++,l<4.2&&!e.dead&&this.h.hurtPlayer(4,o/l*5,r/l*5),this.h.sound("hit",.8)),this.timer<=0&&(this.state="walk",this.timer=1.5,this.armL.rotation.x=this.armR.rotation.x=0);else if(this.state==="genki"){a=0,this.armL.rotation.x=this.armR.rotation.x=-3;const f=1-this.timer/4.5;if(this.ball.position.set(this.pos.x,this.pos.y+6.5,this.pos.z),this.ball.scale.setScalar(.6+f*3.4),Math.random()<t*20&&this.h.burst(this.pos.x+Ge(-4,4),this.pos.y+Ge(1,6),this.pos.z+Ge(-4,4),[.6,.85,1],3,2),this.timer<=0){const c=this.ball.position.clone();this.scene.remove(this.ball),this.extra=this.extra.filter(d=>d!==this.ball),this.ball=null,this.shootProj(c,ee(e.pos.x,e.pos.y+1,e.pos.z).sub(c),{speed:20,size:4.5,color:8440063,emissive:4231423,radius:7,ds:1.3}),this.state="walk",this.timer=2,this.armL.rotation.x=this.armR.rotation.x=0}}this.walk(t,i,o,r,l,this.state==="walk"&&l<2.5?0:a),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.5;const h=Math.sin(this.walkA)*.6;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.state==="walk"&&(this.armL.rotation.x=-h*.7,this.armR.rotation.x=h*.7),s>=2&&(this.aura.material.opacity=.2+Math.sin(this.t*14)*.06,this.aura.scale.setScalar(1+Math.sin(this.t*9)*.08)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class I_ extends mi{constructor(t,e,i){super(t,e,i,{name:"SR. BURNS",type:"burns",maxHp:260,hitbox:{hx:.45,hy:.95,hz:.35,oy:.95},scale:1.7,burstColor:[.5,1,.3]}),this.hw=.4,this.hh=3.2,this.state="walk",this.timer=2,this.dogT=6,this.barrelT=4,this.waveT=9,this.shieldT=14,this.shield=0,this.walkA=0;const s=this.mat(15260848),o=this.mat(3485740),r=this.mat(15790312),l=this.mat(1052688);this.mat(6348848,3186704),this.legL=this.group(-.15,.85,0),this.box(.26,.85,.3,o,0,-.42,0,this.legL),this.legR=this.group(.15,.85,0),this.box(.26,.85,.3,o,0,-.42,0,this.legR),this.box(.62,.9,.34,o,0,1.3,0),this.box(.2,.6,.05,r,0,1.4,.19),this.armL=this.group(-.45,1.65,0),this.box(.2,.9,.22,o,0,-.45,0,this.armL),this.armR=this.group(.45,1.65,0),this.box(.2,.9,.22,o,0,-.45,0,this.armR),this.box(.2,.2,.2,s,0,-.95,0,this.armR),this.box(.2,.2,.2,s,0,-.95,0,this.armL),this.head=this.group(0,1.95,0),this.box(.46,.5,.4,s,0,.25,0,this.head),this.box(.14,.18,.14,s,0,.2,.26,this.head);for(const a of[-.11,.11])this.box(.1,.1,.04,l,a,.32,.21,this.head);this.box(.1,.08,.04,l,0,.08,.2,this.head),this.box(.14,.16,.1,s,-.3,.2,0,this.head),this.box(.14,.16,.1,s,.3,.2,0,this.head),this.shieldMesh=new _t(new Ss(1.5,14,10),new ce({color:7405392,transparent:!0,opacity:.28,fog:!1,depthWrite:!1})),this.shieldMesh.position.y=1.2,this.shieldMesh.visible=!1,this.body.add(this.shieldMesh),this.barrels=[],this.h.toast("Sr. Burns: «Excelente…» ¡Cuidado con los perros y los barriles radiactivos!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡Sr. Burns activa el reactor! Ondas nucleares"),this.waveT=1.5}damageMul(){return this.shield>0?.1:1}onHit(){this.shield>0&&Math.random()<.3&&this.h.toast("¡Escudo de Sr. Burns! Espera a que baje")}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;if(this.dogT-=t,this.barrelT-=t,this.waveT-=t,this.shieldT-=t,this.timer-=t,this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*4),this.shield>0?(this.shield-=t,this.shieldMesh.visible=!0,this.shieldMesh.material.opacity=.2+Math.sin(this.t*12)*.08,this.shield<=0&&(this.shieldMesh.visible=!1)):this.shieldT<=0&&(this.shield=4,this.shieldT=s===1?16:11,this.h.toast("Sr. Burns: «Excelente…»")),this.dogT<=0&&(this.dogT=s===1?11:8,this.h.minions()<7&&(this.h.spawnMinion("dog"),this.h.spawnMinion("dog")),this.h.sound("roar",.5)),this.barrelT<=0&&!e.dead){this.barrelT=s===1?5:3.4;const f=ee(this.pos.x,this.pos.y+3.2,this.pos.z);this.shootProj(f,ee(e.pos.x,e.pos.y+1,e.pos.z).sub(f),{speed:14,size:.9,color:5296160,emissive:4259600,radius:2.2,ds:.3,effect:["poison",5],cloud:!0}),this.armR.rotation.x=-2.2}this.waveT<=0&&!e.dead&&(this.waveT=s===1?10:6,this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:22,speed:11,dmg:8,color:7405360,effect:["poison",4]}),this.h.sound("explode",.6));const a=l<8?-1:l>14?1:0;this.walk(t,i,o*(a||1e-4),r*(a||1e-4),l,a?3.2:0),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.6;const h=Math.sin(this.walkA)*.5;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h*.6,this.armR.rotation.x+=(h*.6-this.armR.rotation.x)*Math.min(1,t*5),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class N_ extends mi{constructor(t,e,i){super(t,e,i,{name:"IMPOSTOR SUPREMO",type:"impostor",maxHp:340,hitbox:{hx:.8,hy:1.1,hz:.6,oy:1.1},scale:1.9,burstColor:[1,.2,.2]}),this.hw=.7,this.hh=3.6,this.state="walk",this.timer=2,this.lungeT=4,this.ventT=8,this.lightsT=14,this.reactorT=10,this.meetT=16,this.walkA=0,this.lights=0;const s=this.mat(12589080,3146756),o=this.mat(9047823),r=this.mat(10479871,3166304),l=this.mat(14737640,3158064);this.legL=this.group(-.3,.8,0),this.box(.5,.8,.55,o,0,-.4,0,this.legL),this.legR=this.group(.3,.8,0),this.box(.5,.8,.55,o,0,-.4,0,this.legR),this.box(1.3,1.5,.95,s,0,1.5,0),this.box(.8,1,.45,o,0,1.5,-.65),this.box(.9,.5,.1,r,0,1.85,.52),this.box(1,.65,.05,this.mat(4235456,1060928),0,1.85,.5),this.armR=this.group(.8,1.5,.1),this.box(.3,.3,.9,s,0,0,.45,this.armR),this.box(.08,.08,1,l,0,0,1.4,this.armR),this.armL=this.group(-.8,1.5,.1),this.box(.3,.3,.9,s,0,0,.45,this.armL),this.h.toast("El Impostor Supremo te ha encontrado… ¡SUS!")}phaseFor(t){return t>.55?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡REUNIÓN DE EMERGENCIA! El impostor se enfurece"),this.meetT=1,this.lightsT=3}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.timer-=t,this.lungeT-=t,this.ventT-=t,this.lightsT-=t,this.reactorT-=t,this.meetT-=t,this.state!=="lunge"&&(this.yaw+=ni(Math.atan2(o,r)-this.yaw)*Math.min(1,t*5));let a=s===1?4:5.2;if(this.lights>0&&(this.lights-=t,this.h.darkness(.75),this.lights<=0&&this.h.darkness(0)),this.state==="walk")if(this.timer<=0&&l<3.8&&!e.dead)this.state="stab",this.timer=.45;else if(this.lungeT<=0&&l>5&&l<20&&this.onGround)this.state="lunge",this.timer=.9,this.lungeT=s===1?5.5:3.6,this.vel.x=o/l*20,this.vel.z=r/l*20,this.vel.y=6,this.lungeHit=!1,this.h.sound("hiss",1);else if(this.ventT<=0){this.ventT=s===1?9:5.5,this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[.7,.1,.1],20,4);const f=Math.random()*6.28;this.pos.x=e.pos.x+Math.cos(f)*6,this.pos.z=e.pos.z+Math.sin(f)*6,this.pos.y=e.pos.y+.5,this.vel.set(0,0,0),this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[.7,.1,.1],20,4)}else if(this.lightsT<=0&&this.lights<=0){if(this.lightsT=s===1?20:13,this.lights=6,this.h.toast("¡Se apagaron las luces! Los impostores atacan"),this.h.minions()<7)for(let f=0;f<3;f++)this.h.spawnMinion("impostor")}else this.reactorT<=0&&this.onGround?(this.reactorT=s===1?11:7,this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:18,speed:11,dmg:8,color:16724016}),this.h.sound("roar",.6)):s===2&&this.meetT<=0&&!e.dead&&(this.meetT=14,this.h.toast("¡Reunión de emergencia! Te arrastran"),this.state="meet",this.timer=1.2);else if(this.state==="stab")a=0,this.armR.rotation.x=-1.6,this.timer<=0&&(this.state="walk",this.timer=1.4,l<4.2&&!e.dead&&this.h.hurtPlayer(11,o/l*9,r/l*9),this.h.sound("hit",1),this.armR.rotation.x=.4);else if(this.state==="lunge")a=0,this.armR.rotation.x=-1.4,!this.lungeHit&&l<3.2&&!e.dead&&(this.lungeHit=!0,this.h.hurtPlayer(13,o/l*12,r/l*12)),this.timer<=0&&(this.state="walk",this.timer=1.8,this.armR.rotation.x=0);else if(this.state==="meet"){a=0;const f=this.h.player();f.vel.x-=o/l*22*t,f.vel.z-=r/l*22*t,this.timer<=0&&(this.state="walk",this.timer=1.2)}this.walk(t,i,o,r,l,this.state==="walk"?a:0),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.4;const h=Math.sin(this.walkA)*.6;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}dispose(){this.h.darkness(0),super.dispose()}}const Cs={storm:{name:"Tormenta Wither",color:"#b060ff",hp:360,desc:"Colosal masa con tres cabezas. Rayo tractor, cráneos explosivos y un bloque de comandos como punto débil.",icon:"🌀"},dragon:{name:"Ender Dragon",color:"#e040ff",hp:300,desc:"Vuela en círculos, pica en picado y lanza aliento. Destruye sus 4 cristales para poder herirlo.",icon:"🐉",make:(n,t,e,i)=>new x_(n,t,e,i),up:16},wither:{name:"Wither",color:"#9aa8c8",hp:300,desc:"Lanza cráneos negros que envenenan. Con poca vida se acoraza y te persigue de cerca.",icon:"💀",make:(n,t,e)=>new v_(n,t,e),up:8},warden:{name:"Warden",color:"#3be8c8",hp:360,desc:"Ciego pero letal. Golpes devastadores y explosión sónica a distancia. Oscurece la pantalla.",icon:"👁",make:(n,t,e)=>new __(n,t,e),up:0,ground:!0},guardian:{name:"Guardián Ancestral",color:"#70fff0",hp:240,desc:"Su láser carga y causa fatiga de minería. Sus espinas devuelven daño al golpearlo.",icon:"🐟",make:(n,t,e)=>new M_(n,t,e),up:6}};Object.assign(Cs,{ravager:{name:"Devastador",color:"#b09070",hp:280,desc:"Bestia blindada que ruge y embiste arrasando todo. Tras cada embestida queda aturdido: ¡ataca entonces!",icon:"🐗",make:(n,t,e)=>new y_(n,t,e),ground:!0,dist:16},evoker:{name:"Invocador",color:"#e0c040",hp:220,desc:"Hechicero que se teletransporta, lanza hileras de colmillos y llama a vex voladores (se pueden golpear).",icon:"🧙",make:(n,t,e)=>new b_(n,t,e),up:4,dist:14},ghast:{name:"Ghast Gigante",color:"#f4f4f4",hp:200,desc:"Flota llorando y escupe enormes bolas de fuego. ¡Golpéalas para devolvérselas y hacerle un daño brutal!",icon:"👻",make:(n,t,e)=>new S_(n,t,e),up:14,dist:26},herobrine:{name:"Herobrine",color:"#ffffff",hp:400,desc:"Ojos blancos, teletransportes a tu espalda, rayos y oscuridad. Con poca vida levita. El jefe final.",icon:"👤",make:(n,t,e)=>new E_(n,t,e),ground:!0,dist:14},slimeking:{name:"Rey Slime",color:"#60e060",hp:260,desc:"Gigantesco, salta y aplasta con ondas expansivas. Se divide en slimes al perder vida.",icon:"🟢",make:(n,t,e)=>new w_(n,t,e),ground:!0,dist:18}});Object.assign(Cs,{blazeking:{name:"Rey Blaze",color:"#ff9a20",hp:280,desc:"Señor del fuego del Nether: abanicos de bolas de fuego, ondas de llamas que hay que saltar y blazes de refuerzo.",icon:"🔥",make:(n,t,e)=>new T_(n,t,e),up:8,dist:20},piglinking:{name:"Rey Piglin",color:"#e8c040",hp:340,desc:"Hacha gigante, saltos que parten el suelo, torbellino de oro y una guardia de piglins.",icon:"🪓",make:(n,t,e)=>new A_(n,t,e),ground:!0,dist:16},endertitan:{name:"Enderman Titán",color:"#c060ff",hp:380,desc:"Gigantesco: se teletransporta, barre con los brazos y lanza rocas. ¡No le mires a los ojos!",icon:"🕴",make:(n,t,e)=>new R_(n,t,e),ground:!0,dist:24},voidlord:{name:"Señor del Vacío",color:"#a050ff",hp:300,desc:"Abre grietas que dañan y elevan, dispara un láser con carga y su gravedad te arrastra en la fase final.",icon:"🌀",make:(n,t,e)=>new C_(n,t,e),up:6,dist:20},creepertitan:{name:"Creeper Titán",color:"#60e060",hp:320,desc:"Se hincha y explota con un radio colosal. Tras estallar queda aturdido: es tu momento.",icon:"💥",make:(n,t,e)=>new L_(n,t,e),ground:!0,dist:30},colossus:{name:"Gólem Colosal",color:"#d0d0e0",hp:420,desc:"Puñetazos devastadores, golpes al suelo que lanzan ondas de choque y rocas. Furia roja en la fase 2.",icon:"🗿",make:(n,t,e)=>new D_(n,t,e),ground:!0,dist:22}});Object.assign(Cs,{goku:{name:"Goku",color:"#ff9a20",hp:450,desc:"Kamehameha, teletransporte instantáneo y combos. Se vuelve Super Saiyajin y al final lanza la Genki Dama.",icon:"🟠",make:(n,t,e)=>new P_(n,t,e),ground:!0,dist:20},burns:{name:"Sr. Burns",color:"#60e030",hp:260,desc:"Suelta perros, lanza barriles radiactivos que envenenan, se protege con un escudo y activa ondas nucleares.",icon:"☢",make:(n,t,e)=>new I_(n,t,e),ground:!0,dist:18},impostor:{name:"Impostor Supremo",color:"#ff3030",hp:340,desc:"Embiste con el cuchillo, se teletransporta por los conductos, apaga las luces y llama a más impostores. «¡SUS!»",icon:"🔴",make:(n,t,e)=>new N_(n,t,e),ground:!0,dist:16}});const O_=["storm","dragon","wither","warden","guardian","ravager","evoker","ghast","herobrine","slimeking","colossus","creepertitan","blazeking","piglinking","endertitan","voidlord","goku","burns","impostor"],Zs=[{id:"logs",group:"Aprendiz",title:"Primeros pasos",desc:"Recoge 3 troncos",ev:"collect",target:_.LOG,n:3,reward:[[A.APPLE,4]],xp:8},{id:"table",group:"Aprendiz",title:"Carpintero",desc:"Fabrica una mesa de crafteo",ev:"craft",target:_.TABLE,n:1,reward:[[_.PLANKS,16]],xp:8},{id:"pick",group:"Aprendiz",title:"Minero",desc:"Fabrica un pico de piedra",ev:"craft",target:111,n:1,reward:[[A.COAL,8]],xp:10},{id:"a_iron",group:"Aprendiz",title:"Armado hasta los dientes",desc:"Fabrica un peto de hierro",ev:"craft",target:212,n:1,reward:[[A.DIAMOND,2]],xp:30},{id:"a_gold",group:"Aprendiz",title:"Fiebre del oro",desc:"Fabrica una espada de oro",ev:"craft",target:144,n:1,reward:[[A.GOLD,6]],xp:20},{id:"a_nether",group:"Dimensiones",title:"Forjado en el Nether",desc:"Consigue un lingote de netherita (restos antiguos + oro)",ev:"collect",target:A.NETHERITE,n:1,reward:[[A.DIAMOND,6]],xp:120},{id:"torch",group:"Aprendiz",title:"Luz en la oscuridad",desc:"Fabrica 4 antorchas",ev:"craft",target:_.TORCH,n:4,reward:[[A.COAL,8]],xp:10},{id:"iron",group:"Aprendiz",title:"Fundidor",desc:"Consigue un lingote de hierro",ev:"collect",target:A.IRON,n:1,reward:[[A.COAL,16]],xp:15},{id:"diamond",group:"Aprendiz",title:"¡Diamantes!",desc:"Consigue un diamante",ev:"collect",target:A.DIAMOND,n:1,reward:[[A.GOLD,6]],xp:25},{id:"k_zombie",group:"Cazador",title:"Cazador de zombis",desc:"Derrota 3 zombis",ev:"kill",target:"zombie",n:3,reward:[[A.STEAK,4]],xp:15},{id:"k_skeleton",group:"Cazador",title:"Huesos rotos",desc:"Derrota 3 esqueletos",ev:"kill",target:"skeleton",n:3,reward:[[A.STEAK,4]],xp:18},{id:"k_creeper",group:"Cazador",title:"Silencio…",desc:"Derrota 2 creepers",ev:"kill",target:"creeper",n:2,reward:[[A.GOLD,4]],xp:18},{id:"k_spider",group:"Cazador",title:"Aracnofobia",desc:"Derrota 2 arañas",ev:"kill",target:"spider",n:2,reward:[[A.GOLD,4]],xp:16},{id:"pearl",group:"Cazador",title:"Ojos que miran",desc:"Consigue una perla de Ender",ev:"collect",target:A.PEARL,n:1,reward:[[A.DIAMOND,3]],xp:30},{id:"obsidian",group:"Dimensiones",title:"Cristal volcánico",desc:"Consigue obsidiana (8 adoquines + 1 diamante = 2)",ev:"collect",target:_.OBSIDIAN,n:1,reward:[[A.COAL,12]],xp:20},{id:"d_nether",group:"Dimensiones",title:"Una puerta al infierno",desc:"Entra al Nether (marco 4x5 de obsidiana + encendedor)",ev:"dim",target:"nether",n:1,reward:[[A.GOLD,8],[A.DIAMOND,4]],xp:80},{id:"k_blaze",group:"Dimensiones",title:"Fuego cruzado",desc:"Derrota a 2 blazes",ev:"kill",target:"blaze",n:2,reward:[[A.DIAMOND,4]],xp:40},{id:"k_piglin",group:"Dimensiones",title:"Oro maldito",desc:"Derrota a 3 piglins zombificados",ev:"kill",target:"piglin",n:3,reward:[[A.GOLD,8]],xp:35},{id:"k_wskel",group:"Dimensiones",title:"Huesos negros",desc:"Derrota a 2 esqueletos Wither",ev:"kill",target:"witherskeleton",n:2,reward:[[A.DIAMOND,4]],xp:50},{id:"k_ghast",group:"Dimensiones",title:"Lágrimas de fuego",desc:"Derrota a un Ghast",ev:"kill",target:"ghast",n:1,reward:[[A.GOLD,10]],xp:50},{id:"k_shulker",group:"Dimensiones",title:"Caja sorpresa",desc:"Derrota a 2 shulkers",ev:"kill",target:"shulker",n:2,reward:[[A.PEARL,2]],xp:60},{id:"chests",group:"Dimensiones",title:"Cazatesoros",desc:"Abre 3 cofres de fortalezas o ciudades del End",ev:"chest",target:"x",n:3,reward:[[A.DIAMOND,4],[A.GOLD,8]],xp:70},{id:"elytra",group:"Dimensiones",title:"¡A volar!",desc:"Consigue unos élitros (naves de las ciudades del End)",ev:"collect",target:A.ELYTRA,n:1,reward:[[A.STAR,1]],xp:120},{id:"d_end",group:"Dimensiones",title:"El fin de todo",desc:"Entra al End (12 marcos con ojo de Ender)",ev:"dim",target:"end",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:150},{id:"b_storm",group:"Jefes",title:"Domador de la tormenta",desc:"Derrota a la Tormenta Wither",ev:"boss",target:"storm",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:150},{id:"b_dragon",group:"Jefes",title:"¿El final?",desc:"Derrota al Ender Dragon",ev:"boss",target:"dragon",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:150},{id:"b_wither",group:"Jefes",title:"Más allá de los huesos",desc:"Derrota al Wither",ev:"boss",target:"wither",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:150},{id:"b_warden",group:"Jefes",title:"Silencio absoluto",desc:"Derrota al Warden",ev:"boss",target:"warden",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:150},{id:"b_guardian",group:"Jefes",title:"La mirada del océano",desc:"Derrota al Guardián Ancestral",ev:"boss",target:"guardian",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:150},{id:"b_ravager",group:"Jefes",title:"Contra la embestida",desc:"Derrota al Devastador",ev:"boss",target:"ravager",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:150},{id:"b_evoker",group:"Jefes",title:"Colmillos y vex",desc:"Derrota al Invocador",ev:"boss",target:"evoker",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:150},{id:"b_ghast",group:"Jefes",title:"Devuélvesela",desc:"Derrota al Ghast Gigante",ev:"boss",target:"ghast",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:150},{id:"b_slime",group:"Jefes",title:"Aplastado",desc:"Derrota al Rey Slime",ev:"boss",target:"slimeking",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:150},{id:"b_hero",group:"Jefes",title:"Más allá del mito",desc:"Derrota a Herobrine",ev:"boss",target:"herobrine",n:1,reward:[[A.STAR,2],[A.DIAMOND,16]],xp:250},{id:"b_colossus",group:"Jefes",title:"Hierro contra hierro",desc:"Derrota al Gólem Colosal",ev:"boss",target:"colossus",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:160},{id:"b_creepert",group:"Jefes",title:"Silencio… colosal",desc:"Derrota al Creeper Titán",ev:"boss",target:"creepertitan",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:160},{id:"b_blazek",group:"Jefes",title:"Rey de las llamas",desc:"Derrota al Rey Blaze",ev:"boss",target:"blazeking",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:160},{id:"b_piglink",group:"Jefes",title:"Corona de oro",desc:"Derrota al Rey Piglin",ev:"boss",target:"piglinking",n:1,reward:[[A.STAR,2],[A.DIAMOND,10]],xp:180},{id:"b_endert",group:"Jefes",title:"No mires a los ojos",desc:"Derrota al Enderman Titán",ev:"boss",target:"endertitan",n:1,reward:[[A.STAR,2],[A.DIAMOND,12]],xp:200},{id:"b_voidl",group:"Jefes",title:"Al borde del vacío",desc:"Derrota al Señor del Vacío",ev:"boss",target:"voidlord",n:1,reward:[[A.STAR,2],[A.DIAMOND,12]],xp:200},{id:"b_goku",group:"Jefes",title:"¡Es más de 9000!",desc:"Derrota a Goku",ev:"boss",target:"goku",n:1,reward:[[A.STAR,2],[A.DIAMOND,12]],xp:250},{id:"b_burns",group:"Jefes",title:"Excelente…",desc:"Derrota al Sr. Burns",ev:"boss",target:"burns",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:180},{id:"b_impostor",group:"Jefes",title:"Eyectado",desc:"Derrota al Impostor Supremo",ev:"boss",target:"impostor",n:1,reward:[[A.STAR,1],[A.DIAMOND,8]],xp:180},{id:"k_impostor",group:"Cazador",title:"Sospechoso",desc:"Derrota a 3 impostores",ev:"kill",target:"impostor",n:3,reward:[[A.GOLD,8]],xp:40},{id:"k_saiba",group:"Cazador",title:"Semillas del Saiyajin",desc:"Derrota a 2 saibamen",ev:"kill",target:"saibaman",n:2,reward:[[A.SENZU,1]],xp:40},{id:"d_balls",group:"Dimensiones",title:"¡Sal, Shenron!",desc:"Reúne las 7 Bolas de Dragón",ev:"collect",target:A.DBALL,n:7,reward:[[A.DIAMOND,6]],xp:300},{id:"master",group:"Jefes",title:"★ LEYENDA DE LOS JEFES ★",desc:"Derrota a los 19 jefes (Minecraft y crossovers)",ev:"bossall",target:null,n:19,reward:[[A.STAR,5],[A.DIAMOND,32],[A.GOLD,32]],xp:500}];class U_{constructor(t){this.h=t,this.progress={},this.done={},this.bosses=new Set}event(t,e,i=1){for(const s of Zs)this.done[s.id]||s.ev!==t||s.target!==null&&s.target!==e||(this.progress[s.id]=Math.min(s.n,(this.progress[s.id]||0)+i),this.progress[s.id]>=s.n&&this.complete(s));if(t==="boss"){this.bosses.add(e);const s=Zs.find(o=>o.id==="master");this.done.master||(this.progress.master=this.bosses.size,this.bosses.size>=s.n&&this.complete(s))}}complete(t){this.done[t.id]=!0,this.progress[t.id]=t.n,this.h.reward(t.reward),this.h.xp(t.xp),this.h.sound("craft"),this.h.toast(t.id==="master"?"🏆 ¡ERES UNA LEYENDA! Has derrotado a todos los jefes":`✔ Misión completada: ${t.title}`)}active(t=3){return Zs.filter(e=>!this.done[e.id]).slice(0,t)}total(){return Zs.length}completed(){return Zs.filter(t=>this.done[t.id]).length}toJSON(){return{progress:this.progress,done:this.done,bosses:[...this.bosses]}}load(t){t&&(this.progress=t.progress||{},this.done=t.done||{},this.bosses=new Set(t.bosses||[]))}}const No=420,Oo=24;class z_{constructor(t){this.pos=new Float32Array(No*3),this.vel=new Float32Array(No*3);for(let i=0;i<No;i++)this.reset(i,!0);const e=new ii;e.setAttribute("position",new Ei(new Float32Array(No*3),3)),this.pts=new mc(e,new Va({color:16747056,size:3,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1,blending:$o})),this.pts.frustumCulled=!1,this.pts.visible=!1,t.add(this.pts),this.t=0}reset(t,e){this.pos[t*3]=(Math.random()-.5)*2*Oo,this.pos[t*3+1]=e?(Math.random()-.5)*2*Oo:-Oo,this.pos[t*3+2]=(Math.random()-.5)*2*Oo,this.vel[t*3]=(Math.random()-.5)*.6,this.vel[t*3+1]=.4+Math.random()*1.2,this.vel[t*3+2]=(Math.random()-.5)*.6}update(t,e,i){const s=i==="nether"||i==="end";if(this.pts.visible=s,!s)return;this.t+=t;const o=i==="nether",r=this.pts.geometry.attributes.position.array;this.pts.material.color.set(o?16742952:11567359),this.pts.material.size=o?3:2.5;for(let l=0;l<No;l++){const a=l*3;this.pos[a]+=(this.vel[a]+Math.sin(this.t+l)*.3)*t,this.pos[a+1]+=this.vel[a+1]*(o?1:.5)*t,this.pos[a+2]+=(this.vel[a+2]+Math.cos(this.t*.8+l)*.3)*t,this.pos[a+1]>Oo&&this.reset(l,!1),r[a]=e.position.x+this.pos[a],r[a+1]=e.position.y+this.pos[a+1],r[a+2]=e.position.z+this.pos[a+2]}this.pts.geometry.attributes.position.needsUpdate=!0}}class k_{constructor(t=Math.max(1,Math.min(3,(navigator.hardwareConcurrency||4)-1))){this.workers=[],this.cbs=new Map,this.nextId=1,this.rr=0;for(let e=0;e<t;e++){const i=new Worker(new URL(""+new URL("chunkworker-CtdZebhY.js",import.meta.url).href,import.meta.url),{type:"module"});i.onmessage=s=>{const o=this.cbs.get(s.data.id);o&&(this.cbs.delete(s.data.id),o(s.data))},i.onerror=s=>{console.error("chunk worker",s.message),this.failed=!0},this.workers.push(i)}}request(t,e,i){const s=this.nextId++;this.cbs.set(s,i),this.workers[this.rr++%this.workers.length].postMessage({...t,id:s},e)}}class B_{constructor(){this.ws=null,this.id=0,this.handlers={},this.open=!1}on(t,e){this.handlers[t]=e}connect(t,e){return new Promise((i,s)=>{let o=!1;const r=h=>{o||(o=!0,s(new Error(h)))};let l;try{l=new WebSocket(t)}catch{return r("Dirección no válida")}this.ws=l;const a=setTimeout(()=>{r("El servidor no responde");try{l.close()}catch{}},8e3);l.onopen=()=>{this.open=!0,l.send(JSON.stringify({t:"join",name:e}))},l.onerror=()=>r("No se pudo conectar (¿está el servidor encendido?)"),l.onclose=()=>{this.open=!1,r("Conexión cerrada"),o&&this.handlers.close&&this.handlers.close()},l.onmessage=h=>{let f;try{f=JSON.parse(h.data)}catch{return}if(f.t==="welcome"&&!o){o=!0,clearTimeout(a),this.id=f.id,i(f);return}if(f.t==="full"){r("Servidor lleno");return}const c=this.handlers[f.t];c&&c(f)}})}send(t){this.ws&&this.ws.readyState===1&&this.ws.send(JSON.stringify(t))}close(){try{this.ws&&this.ws.close()}catch{}}}const pd=["✕ Cruz","◯ Círculo","▢ Cuadrado","△ Triángulo","L1","R1","L2","R2","Share","Options","L3","R3","Cruceta ↑","Cruceta ↓","Cruceta ←","Cruceta →","Botón PS","Panel táctil"],Ou=[{id:"jump",label:"Saltar / nadar / subir",def:0},{id:"drop",label:"Tirar objeto · Atrás en menús",def:1},{id:"fall",label:"Descender (vuelo) · Clic derecho en menús",def:2},{id:"inventory",label:"Inventario",def:3},{id:"prev",label:"Ranura anterior",def:4},{id:"next",label:"Ranura siguiente",def:5},{id:"use",label:"Usar / colocar / comer",def:6},{id:"attack",label:"Romper / atacar",def:7},{id:"summon",label:"Invocar jefes y mobs",def:8},{id:"pause",label:"Pausa",def:9},{id:"sprint",label:"Correr (alternar)",def:10},{id:"camera",label:"Cambiar cámara",def:11},{id:"fly",label:"Volar (creativo)",def:12},{id:"quests",label:"Misiones",def:13},{id:"weather",label:"Cambiar clima",def:14},{id:"debug",label:"Datos de depuración (F3)",def:15},{id:"mode",label:"Creativo / Supervivencia",def:17},{id:"config",label:"Configurar el mando",def:16}],Fh=()=>({map:Object.fromEntries(Ou.map(n=>[n.id,n.def])),deadzone:.16,lookX:3.4,lookY:2.6,curve:1.7,invertY:!1,rumble:!0});class F_{constructor(t){this.cfg=t,this.prev=[],this.connected=!1,this.id="",this.listening=null,this.last={connected:!1,down:[],edge:[],axes:[]}}pad(){const t=navigator.getGamepads?navigator.getGamepads():[];let e=null;for(const i of t)if(i&&i.connected){if(i.mapping==="standard")return i;e=e||i}return e}poll(){const t=this.pad();if(!t)return this.connected=!1,this.last={connected:!1,down:[],edge:[],axes:[],any:!1},this.last;this.connected=!0,this.id=t.id;const e=[],i=[];for(let r=0;r<t.buttons.length;r++){const l=t.buttons[r],a=!!(l.pressed||l.value>.5);e[r]=a,i[r]=a&&!this.prev[r]}this.prev=e;const s=Array.from(t.axes),o=Math.hypot(s[0]||0,s[1]||0)>this.cfg.deadzone+.1||Math.hypot(s[2]||0,s[3]||0)>this.cfg.deadzone+.1;if(this.listening){const r=i.findIndex(Boolean);if(r>=0){const l=this.listening;this.listening=null,l(r)}return this.last={connected:!0,down:e,edge:[],axes:s,any:!0,busy:!0,gp:t},this.last}return this.last={connected:!0,down:e,edge:i,axes:s,any:i.some(Boolean)||o,gp:t},this.last}listen(t){this.listening=t}stick(t,e,i,s=this.cfg.curve){const o=t[e]||0,r=t[i]||0,l=Math.hypot(o,r),a=this.cfg.deadzone;if(l<a)return{x:0,y:0,m:0};const h=(Math.min(1,l)-a)/(1-a),f=Math.pow(h,s)/l;return{x:o*f,y:r*f,m:h}}down(t){return!!this.last.down[this.cfg.map[t]]}edge(t){return!!this.last.edge[this.cfg.map[t]]}rumble(t,e,i){if(!this.cfg.rumble||!this.connected)return;const s=this.last.gp,o=s&&(s.vibrationActuator||s.hapticActuators&&s.hapticActuators[0]);try{s&&s.vibrationActuator&&s.vibrationActuator.playEffect?s.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:i,weakMagnitude:e,strongMagnitude:t}):o&&o.pulse&&o.pulse(t,i)}catch{}}}const Uo=.3,md=1.8,kl=1.62,gd=28,H_=8.6,G_=4.4,V_=7,W_=12;class X_{constructor(t,e){this.world=t,this.camera=e,this.pos=new I(0,40,0),this.vel=new I,this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headUnder=!1,this.keys=new Set,this.mode="survival",this.hp=20,this.food=20,this.air=10,this.fallStart=null,this.foodTimer=0,this.regenTimer=0,this.airTimer=0,this.starveTimer=0,this.invuln=0,this.dead=!1,this.stepDist=0,this.events={onHurt:null,onLand:null,onStep:null,onSplash:null,onDeath:null,onVoid:null,onArmor:null},this.armorPts=0,this.inLava=!1,this.analog=null,this.canGlide=!1,this.gliding=!1,this.prevSpace=!1,this.spawn=new I,this.wind={x:0,z:0},this.push={x:0,y:0,z:0},this.effects={poison:0,fatigue:0,burn:0,levitate:0},this.poisonT=0,this.burnT=0}collides(t,e,i){return this.world.bodyHits(t,e,i,Uo,md)}intersectsBlock(t,e,i){return this.pos.x+Uo>t&&this.pos.x-Uo<t+1&&this.pos.y+md>e&&this.pos.y<e+1&&this.pos.z+Uo>i&&this.pos.z-Uo<i+1}get eye(){return new I(this.pos.x,this.pos.y+kl,this.pos.z)}lookDir(){return new I(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}damage(t,e=0,i=0){this.mode==="creative"||this.dead||this.invuln>0||(this.armorPts>0&&(t*=Math.pow(.96,this.armorPts),t>.3&&this.events.onArmor&&this.events.onArmor()),this.hp=Math.max(0,this.hp-t),this.invuln=.5,this.vel.x+=e,this.vel.z+=i,(e||i)&&(this.vel.y=Math.max(this.vel.y,5)),this.events.onHurt&&this.events.onHurt(t),this.hp<=0&&(this.dead=!0,this.events.onDeath&&this.events.onDeath()))}heal(t){this.hp=Math.min(20,this.hp+t)}eat(t){this.food=Math.min(20,this.food+t)}respawn(){this.hp=20,this.food=20,this.air=10,this.dead=!1,this.invuln=2,this.effects.poison=0,this.effects.fatigue=0,this.effects.burn=0,this.effects.levitate=0,this.pos.copy(this.spawn),this.vel.set(0,0,0),this.fallStart=null}update(t){if(t=Math.min(t,.05),this.dead){this.camera.position.set(this.pos.x,this.pos.y+.4,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,.6,"YXZ");return}const e=this.keys,i=this.world;this.invuln=Math.max(0,this.invuln-t);const s=Math.floor(this.pos.x),o=Math.floor(this.pos.z),r=this.inWater;this.inWater=i.isLiquid(s,Math.floor(this.pos.y+.3),o),this.inLava=i.getBlock(s,Math.floor(this.pos.y+.3),o)===_.LAVA||i.getBlock(s,Math.floor(this.pos.y+1.2),o)===_.LAVA,this.inLava&&this.mode==="survival"&&(this.effects.burn=Math.max(this.effects.burn,6),this.damage(4));const l=i.getBlock(s,Math.floor(this.pos.y-.15),o)===_.SOUL_SAND;this.headUnder=i.isLiquid(s,Math.floor(this.pos.y+kl),o),this.inWater&&!r&&this.vel.y<-4&&this.events.onSplash&&this.events.onSplash();const a=this.analog&&(Math.abs(this.analog.x)>.001||Math.abs(this.analog.y)>.001)?this.analog:null,h=a?a.y:(e.has("KeyW")?1:0)-(e.has("KeyS")?1:0),f=a?a.x:(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),c=e.has("ShiftLeft")&&h>0&&!(this.mode==="survival"&&this.food<=6);let d=this.flying?W_:c?V_:G_;this.inWater&&!this.flying&&(d*=.6),l&&!this.flying&&(d*=.55);const u=Math.sin(this.yaw),g=Math.cos(this.yaw);let x=-u*h+g*f,m=-g*h-u*f;const p=Math.hypot(x,m);p>0&&(!a||p>1)&&(x/=p,m/=p),this.gliding||(this.vel.x=x*d+(this.inWater?0:this.wind.x),this.vel.z=m*d+(this.inWater?0:this.wind.z));const M=e.has("Space");if(M&&!this.prevSpace&&!this.onGround&&!this.inWater&&!this.flying&&this.canGlide&&!this.gliding){this.gliding=!0;const C=this.lookDir();this.vel.set(C.x*9,Math.max(C.y*9,-2),C.z*9)}if(this.prevSpace=M,this.gliding&&(this.onGround||this.inWater||this.flying||!this.canGlide)&&(this.gliding=!1),this.gliding){const C=this.lookDir(),y=Math.min(1,t*1.4);this.vel.x+=(C.x*22-this.vel.x)*y,this.vel.z+=(C.z*22-this.vel.z)*y,this.vel.y+=(C.y*20-1.6-this.vel.y)*Math.min(1,t*1.1),this.fallStart=null}else this.flying?(this.vel.y=((e.has("Space")?1:0)-(e.has("KeyQ")?1:0))*d,this.fallStart=null):this.inWater?(this.vel.y-=gd*.25*t,this.vel.y=Math.max(this.vel.y,-3)*(1-2*t),e.has("Space")&&(this.vel.y=Math.min(this.vel.y+22*t,3.6)),this.fallStart=null):(this.vel.y-=gd*t,this.vel.y<-50&&(this.vel.y=-50),e.has("Space")&&this.onGround&&(this.vel.y=H_,this.onGround=!1));this.vel.x+=this.push.x,this.vel.z+=this.push.z,this.vel.y+=this.push.y*t,this.effects.levitate>0&&(this.effects.levitate-=t,this.vel.y=Math.min(this.vel.y+24*t,3.2),this.fallStart=null);const b=this.onGround,v=2,D=t/v;this.onGround=!1;const E=this.pos.x,w=this.pos.z;for(let C=0;C<v;C++)for(const y of["x","z","y"]){const S=this.vel[y]*D;if(S!==0&&(this.pos[y]+=S,this.collides(this.pos.x,this.pos.y,this.pos.z))){if(y!=="y"&&(b||this.onGround)&&!this.flying&&!this.inWater){const P=this.pos.y;if(this.pos.y+=.51,!this.collides(this.pos.x,this.pos.y,this.pos.z))continue;this.pos.y=P}this.pos[y]-=S,y==="y"&&this.vel.y<0&&(this.onGround=!0),this.vel[y]=0}}if(!this.onGround&&!this.inWater&&!this.flying&&(this.fallStart===null||this.pos.y>this.fallStart)&&(this.fallStart=this.pos.y),this.onGround&&!b&&this.fallStart!==null){const C=this.fallStart-this.pos.y;C>3&&this.mode==="survival"&&this.damage(Math.floor(C-3)),C>1.2&&this.events.onLand&&this.events.onLand(C),this.fallStart=null}if(this.onGround&&(this.fallStart=null),this.onGround&&!this.flying&&(this.stepDist+=Math.hypot(this.pos.x-E,this.pos.z-w),this.stepDist>(c?2.2:1.7)&&(this.stepDist=0,this.events.onStep&&this.events.onStep())),this.pos.y<-30&&(this.events.onVoid?this.events.onVoid():(this.pos.y=70,this.vel.set(0,0,0),this.damage(4))),this.effects.fatigue>0&&(this.effects.fatigue-=t),this.effects.burn>0&&(this.inWater&&!this.inLava?this.effects.burn=0:(this.effects.burn-=t,this.burnT+=t,this.burnT>=.8&&(this.burnT=0,this.mode==="survival"&&this.damage(1)))),this.effects.poison>0&&(this.effects.poison-=t,this.poisonT+=t,this.poisonT>=1&&(this.poisonT=0,this.mode==="survival"&&this.hp>1&&(this.hp-=1,this.events.onHurt&&this.events.onHurt(1)))),this.mode==="survival"){this.headUnder?(this.airTimer+=t,this.airTimer>=1&&(this.airTimer=0,this.air>0?this.air--:this.damage(2))):(this.airTimer=0,this.air=Math.min(10,this.air+t*6));const C=Math.hypot(this.vel.x,this.vel.z)>.1;this.foodTimer+=t*(c?3:C?1:.25),this.foodTimer>22&&(this.foodTimer=0,this.food=Math.max(0,this.food-1)),this.regenTimer+=t,this.food>=18&&this.hp<20&&this.regenTimer>3?(this.regenTimer=0,this.heal(1),this.foodTimer+=6):this.food<=0&&this.regenTimer>4&&(this.regenTimer=0,this.hp>1&&this.damage(1))}else this.air=10,this.hp=20,this.food=20;this.camera.position.set(this.pos.x,this.pos.y+kl,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}class q_{constructor(){this.slots=Array(36).fill(null),this.selected=0,this.armor=[null,null,null,null]}held(){return this.slots[this.selected]}add(t,e=1){const i=Cn(t);for(const s of this.slots)if(s&&s.id===t&&s.n<i){const o=Math.min(e,i-s.n);if(s.n+=o,e-=o,!e)return 0}for(let s=0;s<36&&e>0;s++)if(!this.slots[s]){const o=Math.min(e,i);this.slots[s]={id:t,n:o,d:0},e-=o}return e}canAdd(t){const e=Cn(t);return this.slots.some(i=>!i||i.id===t&&i.n<e)}consumeHeld(t=1){const e=this.slots[this.selected];e&&(e.n-=t,e.n<=0&&(this.slots[this.selected]=null))}wearHeld(t=1){const e=this.slots[this.selected],i=As(e);return i?(e.d=(e.d||0)+t,e.d>=i.dur?(this.slots[this.selected]=null,!0):!1):!1}count(t){let e=0;for(const i of this.slots)i&&i.id===t&&(e+=i.n);return e}take(t,e){for(let i=0;i<36&&e>0;i++){const s=this.slots[i];if(s&&s.id===t){const o=Math.min(e,s.n);s.n-=o,e-=o,s.n<=0&&(this.slots[i]=null)}}return e===0}armorPoints(){let t=0;for(const e of this.armor)e&&Fe[e.id]&&Fe[e.id].armor&&(t+=Fe[e.id].armor.pts);return t}wearArmor(t=1){const e=[];return this.armor.forEach((i,s)=>{i&&(i.d=(i.d||0)+t,i.d>=Fe[i.id].armor.dur&&(this.armor[s]=null,e.push(s)))}),e}toJSON(){return{slots:this.slots,selected:this.selected,armor:this.armor}}load(t){t&&(this.slots=t.slots,this.selected=t.selected||0,this.armor=t.armor||[null,null,null,null])}}const Y_=600,xd=new St(1,1,1),K_=new St(2316488),j_=new St(7370367),$_=new St(14542591),Z_=new St(8900331),J_=new St(461596),Q_=new St(16747088),Bl=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function tM(){const e=Array.from({length:64},()=>Math.random()),i=(a,h)=>e[(h%8+8)%8*8+(a%8+8)%8],s=document.createElement("canvas");s.width=s.height=64;const o=s.getContext("2d"),r=o.createImageData(64,64);for(let a=0;a<64;a++)for(let h=0;h<64;h++){const f=h/64*8,c=a/64*8,d=Math.floor(f),u=Math.floor(c),g=f-d,x=c-u,m=g*g*(3-2*g),p=x*x*(3-2*x),M=(i(d,u)*(1-m)+i(d+1,u)*m)*(1-p)+(i(d,u+1)*(1-m)+i(d+1,u+1)*m)*p,b=(a*64+h)*4,v=M>.56?215:0;r.data[b]=r.data[b+1]=r.data[b+2]=255,r.data[b+3]=v}o.putImageData(r,0,0);const l=new Ui(s);return l.wrapS=l.wrapT=ma,l.magFilter=_e,l.minFilter=_e,l.generateMipmaps=!1,l}function vd(n){const t=document.createElement("canvas");t.width=t.height=16,n(t.getContext("2d"));const e=new Ui(t);return e.magFilter=_e,e.minFilter=_e,e.generateMipmaps=!1,e}class eM{constructor(t,e,i){this.scene=t,this.camera=e,this.materials=i,this.time=.08,this.dim="overworld",this.daylight=1,this.wet=0,this.flash=0,this.cloudX=0,this.cloudZ=0,this.root=new we,t.add(this.root),this.domeMat=new Si({side:Ci,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{top:{value:new St(4884696)},hor:{value:new St(10147056)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = normalize(vP).y; float t = smoothstep(-0.02, 0.6, h); gl_FragColor = vec4(mix(hor, top, t), 1.0); }"}),this.dome=new _t(new Ss(420,24,14),this.domeMat),this.dome.renderOrder=-30,this.root.add(this.dome);const s=document.createElement("canvas");s.width=s.height=128;const o=s.getContext("2d"),r=o.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,240,180,0.9)"),r.addColorStop(.25,"rgba(255,200,110,0.35)"),r.addColorStop(1,"rgba(255,180,80,0)"),o.fillStyle=r,o.fillRect(0,0,128,128),this.glow=new uc(new Ga({map:new Ui(s),blending:$o,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),this.glow.scale.set(260,260,1),this.glow.renderOrder=-11,this.root.add(this.glow);const l=vd(d=>{d.fillStyle="#fff6b0",d.fillRect(0,0,16,16),d.fillStyle="#ffe14a",d.fillRect(2,2,12,12),d.fillStyle="#fffbe0",d.fillRect(5,5,6,6)}),a=vd(d=>{d.fillStyle="#e8ecf2",d.fillRect(0,0,16,16),d.fillStyle="#b8bfcc",d.fillRect(3,4,3,3),d.fillRect(9,8,4,3),d.fillRect(5,11,2,2)}),h=(d,u)=>{const g=new _t(new kn(u,u),new ce({map:d,transparent:!0,fog:!1,depthWrite:!1,depthTest:!1}));return g.renderOrder=-10,this.root.add(g),g};this.sun=h(l,60),this.moon=h(a,40);const f=new Float32Array(900*3);for(let d=0;d<900;d++){const u=Math.random()*2-1,g=Math.random()*Math.PI*2,x=Math.sqrt(1-u*u);f[d*3]=Math.cos(g)*x*300,f[d*3+1]=u*300,f[d*3+2]=Math.sin(g)*x*300}const c=new ii;c.setAttribute("position",new Ei(f,3)),this.starMat=new Va({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,fog:!1,depthWrite:!1}),this.stars=new mc(c,this.starMat),this.stars.renderOrder=-11,this.root.add(this.stars),this.cloudTex=tM(),this.cloudMat=new ce({map:this.cloudTex,transparent:!0,fog:!1,depthWrite:!1,side:Ri}),this.clouds=new _t(new kn(900,900),this.cloudMat),this.clouds.rotation.x=-Math.PI/2,t.add(this.clouds),this.cloudMat2=new ce({map:this.cloudTex.clone(),transparent:!0,fog:!1,depthWrite:!1,side:Ri}),this.cloudMat2.map.needsUpdate=!0,this.clouds2=new _t(new kn(900,900),this.cloudMat2),this.clouds2.rotation.x=-Math.PI/2,t.add(this.clouds2),this.hemi=new _v(12572927,8022608,2),this.sunLight=new Sv(16773853,2.8),this.shadowExt=64,this.shadowOn=!1,t.add(this.hemi,this.sunLight,this.sunLight.target),this.lightDir=new I(.5,1,.3).normalize(),this.sky=new St,this.tint=new St}setShadows(t,e,i){const s=this.sunLight,o=s.shadow.mapSize.x!==e||this.shadowExt!==i;if(this.shadowOn=t,this.shadowExt=i,t){s.shadow.mapSize.set(e,e);const r=s.shadow.camera;r.left=-i,r.right=i,r.top=i,r.bottom=-i,r.near=10,r.far=340,r.updateProjectionMatrix(),s.shadow.bias=-4e-4,s.shadow.normalBias=.35*(i/64)*(2048/e)**.5,s.shadow.radius=2,o&&s.shadow.map&&(s.shadow.map.dispose(),s.shadow.map=null)}}updateOther(t,e,i,s){const o=this.dim==="nether";this.daylight=0,this.wet=0,this.flash=0;const r=o?new St(5903368):new St(1838894),l=o?new St(1836291):new St(262666);s&&o&&(r.set(11024392),l.set(6297600)),this.sky.copy(o?new St(3804166):new St(1182236)),s&&o&&this.sky.set(11024392),this.scene.background=this.sky,this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:i*(o?.18:.5),this.scene.fog.far=s?o?5:18:i*(o?.75:1.1),this.domeMat.uniforms.hor.value.copy(r),this.domeMat.uniforms.top.value.copy(l),this.root.position.copy(this.camera.position),this.sun.visible=this.moon.visible=this.glow.visible=!1,this.clouds.visible=this.clouds2.visible=!1,this.stars.visible=!o,this.starMat.opacity=o?0:1,this.starMat.size=2.4,this.stars.rotation.y+=t*.01,this.hemi.color.set(o?16747098:11047167),this.hemi.groundColor.set(o?6955016:2628672),this.hemi.intensity=o?1.9:1.1,this.sunLight.color.set(o?16738864:10125567),this.sunLight.intensity=o?.35:.7,this.sunLight.castShadow=!1,this.lightDir.set(.3,1,.2).normalize(),this.sunLight.target.position.copy(e),this.sunLight.position.set(e.x+30,e.y+100,e.z+20)}setDimension(t){this.dim=t;const e=t==="overworld";this.sun.visible=this.moon.visible=this.glow.visible=e,this.clouds.visible=e,this.stars.visible=!0,this.starMat.size=1.6}update(t,e,i,s,o={x:0,z:0,s:.12}){if(this.dim!=="overworld")return this.updateOther(t,e,i,s);this.time=(this.time+t/Y_)%1;const r=this.time*Math.PI*2,l=Math.sin(r),a=Math.cos(r),h=Bl(-.12,.25,l),f=this.wet,c=this.flash;this.daylight=h*(1-.55*f),this.sky.copy(J_).lerp(Z_,this.daylight);const d=Math.max(0,1-Math.abs(l)*4.5)*.7;this.sky.lerp(Q_,d*(1-f)),f>0&&this.sky.lerp(j_.clone().multiplyScalar(.12+.88*h),f*.8),c>0&&this.sky.lerp($_,c*.7),s&&this.sky.set(1718906).multiplyScalar(.4+this.daylight*.6),this.scene.background=this.sky;const u=h*(1-f);this.domeMat.uniforms.hor.value.copy(this.sky).lerp(xd,.22*u),this.domeMat.uniforms.top.value.copy(this.sky).multiplyScalar(.7).lerp(K_,.3*u),this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:i*.6,this.scene.fog.far=s?18:i*(1-.3*f),s||(this.scene.fog.near=i*(.6-.25*f)),.2+.8*this.daylight;const g=Bl(-.04,.3,l)*(1-.65*f),x=Bl(0,-.3,l)*(1-.7*f),m=Math.max(0,1-Math.abs(l)*3.2)*(1-f),p=new I(a,l,.28).normalize(),M=l>-.04;this.lightDir.copy(M?p:p.clone().negate()),this.sunLight.color.setRGB(1,.95-.38*m,.88-.62*m),M||this.sunLight.color.setRGB(.55,.66,1),this.sunLight.intensity=(M?3.4*g:.6*x)+c*2.5,this.hemi.color.copy(this.sky).lerp(xd,.6),this.hemi.groundColor.setRGB(.42,.36,.28).multiplyScalar(.4+.6*this.daylight),this.hemi.intensity=.3+2.5*this.daylight+.3*x+c*3;const b=this.shadowOn?2*this.shadowExt/Math.max(256,this.sunLight.shadow.mapSize.x):1,v=Math.round(e.x/b)*b,D=Math.round(e.y/b)*b,E=Math.round(e.z/b)*b;this.sunLight.target.position.set(v,D,E),this.sunLight.position.set(v+this.lightDir.x*160,D+this.lightDir.y*160,E+this.lightDir.z*160),this.sunLight.castShadow=this.shadowOn&&this.sunLight.intensity>.05,this.classic&&(this.sunLight.intensity=0,this.sunLight.castShadow=!1,this.hemi.color.set(16777215),this.hemi.groundColor.set(16777215),this.hemi.intensity=(.2+.8*this.daylight)*3.1+c*3),this.root.position.copy(this.camera.position);const w=220;this.sun.position.set(a*w,l*w,30),this.glow.position.set(a*w*.98,l*w*.98,30),this.glow.material.opacity=Math.max(0,Math.min(1,(l+.15)*1.6))*(1-f)*(s?0:1),this.moon.position.set(-a*w,-l*w,30),this.sun.lookAt(this.camera.position),this.moon.lookAt(this.camera.position),this.stars.rotation.z=r,this.starMat.opacity=Math.max(0,1-this.daylight*1.6)*(s?0:1)*(1-f),this.sun.material.opacity=this.moon.material.opacity=1-f*.95;const C=1.2+o.s*10;this.cloudX+=o.x/(o.s||1)*C*t,this.cloudZ+=o.z/(o.s||1)*C*t;const y=768,S=(.3+.7*h)*(1-.5*f);for(const[P,F,H,Y]of[[this.clouds,this.cloudMat,150,1],[this.clouds2,this.cloudMat2,142,.7]])P.position.set(e.x,H,e.z),F.map.repeat.set(900/y,900/y),F.map.offset.set((e.x+this.cloudX*Y)/y+(Y<1?.37:0),-(e.z+this.cloudZ*Y)/y),F.color.setScalar(S*(Y<1?.8:1));this.cloudMat.opacity=.9,this.cloudMat2.opacity=Math.min(.95,f*1.1),this.clouds2.visible=f>.05}}const iM=n=>As(n)||(Fe[n.id]&&Fe[n.id].armor?{dur:Fe[n.id].armor.dur}:null),ge=n=>document.getElementById(n);function fn(n,t={}){const e=document.createElement("div");if(e.className="slot"+(t.active?" active":""),t.group&&(e.dataset.g=t.group,e.dataset.i=t.index),n){const i=document.createElement("img");if(i.src=Iu(n.id),Cu(n.id)&&(i.className="flat"),e.appendChild(i),e.title=po(n.id).name,n.n>1){const o=document.createElement("span");o.className="n",o.textContent=n.n,e.appendChild(o)}const s=iM(n);if(s&&n.d>0){const o=document.createElement("div");o.className="dur";const r=Math.max(0,1-n.d/s.dur);o.innerHTML=`<i style="width:${r*100}%;background:${r>.5?"#6f6":r>.2?"#fd4":"#f55"}"></i>`,e.appendChild(o)}}if(t.key){const i=document.createElement("span");i.className="k",i.textContent=t.key,e.appendChild(i)}return e}class nM{constructor(t){this.g=t,this.cursor=null,this.craft=[],this.size=2,this.isOpen=!1,this.toastT=0,this.furnace=null,this.sprites=Qv();const e=ge("inv");e.addEventListener("mousedown",i=>this.onDown(i)),e.addEventListener("contextmenu",i=>i.preventDefault()),document.addEventListener("mousemove",i=>{const s=ge("cursorItem");s.style.left=i.clientX+"px",s.style.top=i.clientY+"px"})}toast(t){const e=ge("toast");e.textContent=t,e.style.opacity=1,clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.style.opacity=0,1600)}renderHotbar(){const t=ge("hotbar");t.innerHTML="";for(let e=0;e<9;e++){const i=fn(this.g.inv.slots[e],{active:e===this.g.inv.selected,key:e+1});i.onclick=()=>{this.g.inv.selected=e,this.g.onSelect()},t.appendChild(i)}}renderStats(){const t=this.g.player,e=this.g.getMode()==="survival",i=this.sprites;ge("bars").style.visibility=e?"visible":"hidden";const s=(h,f)=>{let c="";for(let d=0;d<10;d++)c+=`<img class="hs" src="${f[h>=d*2+2?"full":h===d*2+1?"half":"empty"]}">`;return c},o=Math.ceil(t.hp),r=Math.ceil(t.food),l=o+","+r+","+Math.ceil(t.air)+","+t.headUnder+","+e+","+(o<=6?Math.floor(performance.now()/250)%2:0);if(l===this._statKey)return;this._statKey=l,ge("hearts").innerHTML=s(o,i.heart),ge("hearts").classList.toggle("low",o<=6),ge("food").innerHTML=s(r,i.food);const a=Math.ceil(t.air);ge("air").innerHTML=t.headUnder&&e?Array.from({length:10},(h,f)=>`<img class="hs" src="${a>f?i.bubble.full:i.bubble.empty}">`).join(""):""}open(t,e=null){this.furnace=t==="furnace"?e:null,t==="furnace"&&(t=2),this.size=t,this.craft=Array(t*t).fill(null),this.isOpen=!0;const i=this.g.getMode()==="creative";ge("inv").classList.remove("hidden"),ge("invTitle").textContent=this.furnace?"Horno":i?"Creativo":t===3?"Mesa de crafteo":"Inventario",ge("craftArea").classList.toggle("hidden",i||!!this.furnace),ge("furnaceArea").classList.toggle("hidden",!this.furnace),ge("paletteWrap").classList.toggle("hidden",!i||!!this.furnace),ge("craftGrid").style.gridTemplateColumns=`repeat(${t}, 46px)`,this.render()}close(){if(!this.isOpen)return;this.isOpen=!1,this.furnace=null;const t=e=>{if(!e)return;const i=this.g.inv.add(e.id,e.n);i&&this.g.dropItem(e.id,i)};this.craft.forEach(t),this.craft=[],t(this.cursor),this.cursor=null,ge("inv").classList.add("hidden"),ge("cursorItem").classList.add("hidden"),this.renderHotbar()}recipe(){const t=Xv(this.craft.map(e=>e?e.id:0),this.size);return t?{id:t.out,n:t.n,d:0}:null}render(){const t=this.g,e=ge("armorSlots");e.innerHTML="";for(let r=0;r<4;r++)e.appendChild(fn(t.inv.armor[r],{group:"armor",index:r}));{const r=t.inv.armorPoints();ge("armorPts").textContent="Defensa "+r+" · "+Math.round((1-Math.pow(.96,r))*100)+"% menos daño"}ge("armorRow").classList.toggle("hidden",!!this.furnace);const i=ge("invMain");i.innerHTML="";for(let r=9;r<36;r++)i.appendChild(fn(t.inv.slots[r],{group:"inv",index:r}));const s=ge("invHot");s.innerHTML="";for(let r=0;r<9;r++)s.appendChild(fn(t.inv.slots[r],{group:"inv",index:r,active:r===t.inv.selected}));if(this.furnace){const r=this.furnace;ge("fIn").innerHTML="",ge("fIn").appendChild(fn(r.slots[0],{group:"furnace",index:0})),ge("fFuel").innerHTML="",ge("fFuel").appendChild(fn(r.slots[1],{group:"furnace",index:1})),ge("fOut").innerHTML="",ge("fOut").appendChild(fn(r.slots[2],{group:"furnace",index:2})),this.furnaceBars()}else if(t.getMode()==="creative"){const r=ge("palette");r.innerHTML="",[...Object.keys(Te).map(Number).filter(a=>!Te[a].hidden),...Object.keys(Fe).map(Number)].forEach(a=>r.appendChild(fn({id:a,n:1,d:0},{group:"pal",index:a})))}else{const r=ge("craftGrid");r.innerHTML="",this.craft.forEach((a,h)=>r.appendChild(fn(a,{group:"craft",index:h})));const l=ge("craftOut");l.innerHTML="",l.appendChild(fn(this.recipe(),{group:"out",index:0}))}const o=ge("cursorItem");this.cursor?(o.classList.remove("hidden"),o.innerHTML=`<img src="${Iu(this.cursor.id)}">${this.cursor.n>1?`<span class="n">${this.cursor.n}</span>`:""}`):o.classList.add("hidden"),this.renderHotbar()}furnaceBars(){const t=this.furnace;t&&(ge("fFlame").style.height=(t.burn>0?Math.min(100,t.burn/t.burnMax*100):0)+"%",ge("fArrow").style.width=Math.min(100,t.cook/Ru*100)+"%")}arr(t){return t==="inv"?this.g.inv.slots:t==="armor"?this.g.inv.armor:t==="furnace"?this.furnace.slots:this.craft}onDown(t){const e=t.target.closest(".slot"),i=t.button===2;if(!e||!e.dataset.g){this.g.getMode()==="creative"&&t.target.closest("#paletteWrap")?(this.cursor=null,this.render()):!t.target.closest(".panel")&&this.cursor&&(this.g.dropItem(this.cursor.id,i?1:this.cursor.n),i&&this.cursor.n>1?this.cursor.n--:this.cursor=null,this.render());return}const s=e.dataset.g,o=+e.dataset.i;if(s==="pal"){this.cursor={id:o,n:i?1:Cn(o),d:0},this.render();return}if(s==="out"){const h=this.recipe();if(!h||this.cursor&&!(this.cursor.id===h.id&&this.cursor.n+h.n<=Cn(h.id)))return;this.cursor?this.cursor.n+=h.n:this.cursor={...h},this.craft=this.craft.map(f=>f&&f.n>1?{...f,n:f.n-1}:null),this.g.sound("craft"),this.g.onCraft&&this.g.onCraft(h.id,h.n),this.render();return}const r=this.arr(s),l=r[o],a=this.cursor;if(!(s==="armor"&&a&&!(Fe[a.id]&&Fe[a.id].armor&&Fe[a.id].armor.slot===o))){if(s==="armor"&&this.g.onArmorChange&&setTimeout(()=>this.g.onArmorChange(),0),s==="furnace"&&o===2){if(!l)return;a?a.id===l.id&&a.n+l.n<=Cn(a.id)&&(a.n+=l.n,r[2]=null):(this.cursor=l,r[2]=null),this.render();return}if(i){if(a)l?l.id===a.id&&l.n<Cn(a.id)?(l.n++,a.n--,a.n<=0&&(this.cursor=null)):(r[o]=a,this.cursor=l):(r[o]={...a,n:1},a.n--,a.n<=0&&(this.cursor=null));else if(l){const h=Math.ceil(l.n/2);this.cursor={...l,n:h},l.n-=h,l.n<=0&&(r[o]=null)}}else if(!a)r[o]=null,this.cursor=l;else if(!l)r[o]=a,this.cursor=null;else if(l.id===a.id&&Cn(a.id)>1){const h=Math.min(a.n,Cn(a.id)-l.n);l.n+=h,a.n-=h,a.n<=0&&(this.cursor=null)}else r[o]=a,this.cursor=l;this.render()}}}let We=null,Ea=null,is=null,Uu=.5;function Wa(){if(We)return!0;try{We=new(window.AudioContext||window.webkitAudioContext),is=We.createGain(),is.gain.value=Uu,is.connect(We.destination),Ea=We.createBuffer(1,We.sampleRate,We.sampleRate);const n=Ea.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=Math.random()*2-1;return!0}catch{return!1}}function ws(){Wa()&&We.state==="suspended"&&We.resume()}function sM(n){Uu=n,is&&(is.gain.value=n)}function Fi(n,t,e,i,s=0){if(!Wa())return;const o=We.currentTime,r=We.createBufferSource();r.buffer=Ea;const l=We.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(t,o),s&&l.frequency.exponentialRampToValueAtTime(Math.max(40,t*s),o+n),l.Q.value=e;const a=We.createGain();a.gain.setValueAtTime(i,o),a.gain.exponentialRampToValueAtTime(.001,o+n),r.connect(l),l.connect(a),a.connect(is),r.start(o,Math.random()*.5,n)}function on(n,t,e,i,s){if(!Wa())return;const o=We.currentTime,r=We.createOscillator();r.type=n,r.frequency.setValueAtTime(t,o),r.frequency.exponentialRampToValueAtTime(e,o+i);const l=We.createGain();l.gain.setValueAtTime(s,o),l.gain.exponentialRampToValueAtTime(.001,o+i),r.connect(l),l.connect(is),r.start(o),r.stop(o+i)}let Kr=null;function oM(){if(Kr||!Wa())return Kr;const n=(t,e,i)=>{const s=We.createBufferSource();s.buffer=Ea,s.loop=!0;const o=We.createBiquadFilter();o.type=t,o.frequency.value=e,o.Q.value=i;const r=We.createGain();return r.gain.value=0,s.connect(o),o.connect(r),r.connect(is),s.start(0,Math.random()*.5),{f:o,g:r}};return Kr={rain:n("highpass",1800,.3),rainLow:n("lowpass",5e3,.3),wind:n("bandpass",420,.9)},Kr}function _d(n,t,e=0){if(!We||We.state!=="running")return;const i=oM();if(!i)return;const s=We.currentTime;i.rain.g.gain.setTargetAtTime(n*.16,s,.3),i.rainLow.g.gain.setTargetAtTime(n*.12,s,.3),i.wind.g.gain.setTargetAtTime(t*.5,s,.4),i.wind.f.frequency.setTargetAtTime(300+380*(.5+.5*Math.sin(e))+t*200,s,.3)}function Hh(n,t=1){if(We)switch(n){case"break":Fi(.16,1400,1,.9,.4);break;case"place":Fi(.09,900,1,.7);break;case"step":Fi(.07,500,1,.25);break;case"hit":Fi(.08,2200,1,.5);break;case"hurt":on("square",330,110,.22,.25);break;case"pop":on("sine",500,1100,.1,.2);break;case"eat":Fi(.07,1800,2,.6),setTimeout(()=>Fi(.07,1600,2,.6),110);break;case"splash":Fi(.3,2500,.5,.6,.2);break;case"hiss":Fi(.6,6e3,.5,.4);break;case"explode":Fi(1.1,900,.7,1.4,.1),on("sine",90,30,.8,.9);break;case"craft":on("triangle",400,800,.15,.25);break;case"die":on("sawtooth",300,40,.8,.3);break;case"oink":on("sawtooth",220,150,.15,.12);break;case"moo":on("sawtooth",130,100,.5,.12);break;case"thunder":Fi(3.2,380,.7,1.6*t,.12),setTimeout(()=>Fi(1.6,220,.8,.9*t,.2),450),on("sine",60,25,2,.5*t);break;case"roar":Fi(1.5,500,.8,.9*t,.15),on("sawtooth",95,32,1.5,.45*t);break;case"shoot":Fi(.3,3200,.8,.45*t,.25),on("sine",700,180,.25,.2*t);break;case"groan":on("sawtooth",110,70,.6,.14);break}}const rM="minecraft-web",Wi="kv";let jr=null;function Mo(){return jr||(jr=new Promise((n,t)=>{const e=indexedDB.open(rM,1);e.onupgradeneeded=()=>e.result.createObjectStore(Wi),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),jr)}const so=n=>new Promise((t,e)=>{n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),Xa=n=>new Promise((t,e)=>{n.oncomplete=t,n.onerror=()=>e(n.error),n.onabort=()=>e(n.error)});async function fr(n){return await so(n.get("index"))||[]}async function aM(){const t=(await Mo()).transaction(Wi,"readwrite"),e=t.objectStore(Wi),i=await so(e.get("meta"));if(i){const s=await so(e.getAllKeys()),o=await fr(e),r="w"+Date.now().toString(36);for(const l of s)typeof l=="string"&&l.startsWith("c:")&&(e.put(await so(e.get(l)),`w:${r}:${l}`),e.delete(l));e.put(i,`w:${r}:meta`),e.delete("meta"),o.unshift({id:r,name:"Mundo antiguo",mode:i.mode,seed:i.seed,updated:Date.now(),created:Date.now(),played:0,level:0,thumb:null}),e.put(o,"index")}await Xa(t)}async function zu(){try{await aM();const t=(await Mo()).transaction(Wi).objectStore(Wi);return(await fr(t)).sort((e,i)=>i.updated-e.updated)}catch{return[]}}async function ku(n){const e=(await Mo()).transaction(Wi).objectStore(Wi),i=IDBKeyRange.bound(`w:${n}:`,`w:${n}:￿`),s=await so(e.getAllKeys(i)),o=await so(e.getAll(i)),r={meta:null,chunks:new Map,nether:new Map,end:new Map};return s.forEach((l,a)=>{const h=l.slice(`w:${n}:`.length);h==="meta"?r.meta=o[a]:h.startsWith("c:")?r.chunks.set(Number(h.slice(2)),o[a]):h.startsWith("n:")?r.nether.set(Number(h.slice(2)),o[a]):h.startsWith("e:")&&r.end.set(Number(h.slice(2)),o[a])}),r}function Bu(){return"w"+Date.now().toString(36)+Math.floor(Math.random()*1296).toString(36)}async function Fu(n,t,e,i){try{const o=(await Mo()).transaction(Wi,"readwrite"),r=o.objectStore(Wi);r.put(t,`w:${n}:meta`);for(const[f,c]of e)r.put(c,`w:${n}:${typeof f=="number"?"c:"+f:f}`);const l=await fr(r),a=l.findIndex(f=>f.id===n),h={...a>=0?l[a]:{},...i,id:n,updated:Date.now()};return a>=0?l[a]=h:l.push(h),r.put(l,"index"),await Xa(o),!0}catch{return!1}}async function lM(n){const e=(await Mo()).transaction(Wi,"readwrite"),i=e.objectStore(Wi);i.delete(IDBKeyRange.bound(`w:${n}:`,`w:${n}:￿`)),i.put((await fr(i)).filter(s=>s.id!==n),"index"),await Xa(e)}async function hM(n,t){const i=(await Mo()).transaction(Wi,"readwrite"),s=i.objectStore(Wi),o=await fr(s),r=o.find(l=>l.id===n);r&&(r.name=t),s.put(o,"index"),await Xa(i)}const cM=n=>{let t="";for(let e=0;e<n.length;e+=32768)t+=String.fromCharCode.apply(null,n.subarray(e,e+32768));return btoa(t)},fM=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));async function Hu(n,t,e){return new Response(n.pipeThrough(new t(e)))}async function Gu(n){const t=await zu(),e=t.find(l=>l.id===n),i=await ku(n),s=[...[...i.chunks].map(([l,a])=>["c:"+l,a]),...[...i.nether].map(([l,a])=>["n:"+l,a]),...[...i.end].map(([l,a])=>["e:"+l,a])],o=JSON.stringify({v:3,summary:e,meta:i.meta,chunks:s.map(([l,a])=>[l,cM(new Uint8Array(a))])}),r=new Blob([o]);return typeof CompressionStream>"u"?r:(await Hu(r.stream(),CompressionStream,"gzip")).blob()}async function dM(n){let t;try{t=await(await Hu(n.stream(),DecompressionStream,"gzip")).text()}catch{t=await n.text()}const e=JSON.parse(t);if(!e||!e.meta)throw new Error("Archivo no válido");const i=Bu();return await Fu(i,e.meta,e.chunks.map(([s,o])=>[s,fM(o)]),{...e.summary||{},name:(e.summary&&e.summary.name||"Mundo")+" (importado)",created:Date.now()}),i}const J=n=>document.getElementById(n),Hn=J("game"),bi=new uv({canvas:Hn,antialias:!0,powerPreference:"high-performance"});bi.setPixelRatio(Math.min(devicePixelRatio,2));const Ve=new pv;Ve.fog=new dc(8900331,50,90);const di=new Hi(75,1,.05,500);Ve.add(di);const{canvas:Vu,texture:wa}=Av();Yv(Vu);document.documentElement.style.setProperty("--dirt",`url(${t_("dirt")})`);const uM={value:new St(1,1,1)},Ta={uTime:{value:0},uWind:{value:.12}};function Md(n){return n.onBeforeCompile=t=>{t.uniforms.uTime=Ta.uTime,t.uniforms.uWind=Ta.uWind,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
reflectedLight.directSpecular *= vSK;`)},n.customProgramCacheKey=()=>"chunk-pbr",n}const Aa=Cv(Vu);let $r=null;const ns={opaque:Md(new jf({map:wa,normalMap:Aa,vertexColors:!0,roughness:.94,metalness:0})),trans:Md(new jf({map:wa,normalMap:Aa,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ri,roughness:.1,metalness:.05})),tint:uM};function yd(n){n&&(n.magFilter=_e,n.minFilter=_e,n.generateMipmaps=!1,n.anisotropy=1,n.needsUpdate=!0)}function pM(n,t=!1){n&&!$r&&($r=Rv(bi)),t&&(yd(wa),yd(Aa));for(const e of[ns.opaque,ns.trans])e.flatShading=t,e.map=n?$r.map:wa,e.normalMap=t?null:n?$r.normalMap:Aa,e.roughness=t?1:e===ns.trans?.1:.94,e.needsUpdate=!0}bi.toneMapping=ka;bi.toneMappingExposure=1.45;bi.shadowMap.type=Nd;const Gh=[{name:"Bajo",shadows:!1,size:0,ext:0,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Medio",shadows:!0,size:1024,ext:48,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Alto",shadows:!0,size:2048,ext:64,bloom:!0,hd:!0,msaa:2,pr:1.25,grade:!0},{name:"Ultra (hiperrealista)",shadows:!0,size:4096,ext:80,bloom:!0,hd:!0,msaa:4,pr:2,grade:!0},{name:"Clásico (píxel)",shadows:!1,size:0,ext:0,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1,classic:!0}],Wu={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.85},uSat:{value:1.04},uGrain:{value:.035},uContrast:{value:1.06}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; uniform float uTime, uVig, uSat, uGrain, uContrast; varying vec2 vUv;float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));c.rgb = mix(vec3(l), c.rgb, uSat); c.rgb = (c.rgb - 0.18) * uContrast + 0.18; vec2 d = vUv - 0.5; c.rgb *= 1.0 - dot(d, d) * uVig;c.rgb += (h(vUv * 1000.0 + uTime) - 0.5) * uGrain; gl_FragColor = c; }"};let Ii=null,bd=null,Sd=null,Xu=!1;function qu(){const n=Gh[Ee.quality];Ee.quality,bi.setPixelRatio(Math.min(devicePixelRatio,n.pr)),bi.shadowMap.enabled=n.shadows,ui&&ui.setShadows(n.shadows,n.size||1024,n.ext||48);for(const i of[ns.opaque,ns.trans])i.needsUpdate=!0;pM(n.hd,!!n.classic),n.classic&&(bi.shadowMap.enabled=!1,bi.shadowMap.needsUpdate=!0),bi.toneMapping=n.classic?Un:ka,ui&&(ui.classic=!!n.classic);const t=n.bloom||n.grade||n.msaa;if(Ii&&(Ii.dispose(),Ii=null),t){const i=innerWidth,s=innerHeight,o=bi.getPixelRatio(),r=new Ji(i*o,s*o,{type:xn,samples:n.msaa});Ii=new Nv(bi,r),Ii.addPass(new Ov(Ve,di)),n.bloom&&(bd=new uo(new Ft(i,s),.42,.55,.88),Ii.addPass(bd)),Xu=n.grade,n.grade&&(Sd=new Mu(Wu),Ii.addPass(Sd)),Ii.addPass(new kv),Ii.setSize(i,s)}const e=document.getElementById("bQuality");e&&(e.textContent="Gráficos: "+n.name),Nc()}const Ee={radius:8,fov:75,sens:1,vol:.5,cam:0,quality:2};try{Object.assign(Ee,JSON.parse(localStorage.getItem("mcweb-settings")||"{}"))}catch{}{const n=Fh();Ee.pad=Object.assign(n,Ee.pad||{}),Ee.pad.map=Object.assign(Fh().map,Ee.pad&&Ee.pad.map||{})}const Qn=()=>{try{localStorage.setItem("mcweb-settings",JSON.stringify(Ee))}catch{}},Yu=new Set(["storm","dragon","wither","herobrine"]),Ed={goku:[[A.STAR,2],[A.DBALL,3],[A.SENZU,3],[A.DIAMOND,12],[A.NETHERITE,1]],burns:[[A.GOLD,24],[_.GOLD_BLOCK,4],[A.DIAMOND,6],[A.DONUT,6],[A.DUFF,6]],impostor:[[A.STAR,1],[A.DIAMOND,8],[A.GOLD,12],[A.SCRAP,2],[A.PEARL,2]],colossus:[[A.STAR,1],[A.IRON,24],[A.DIAMOND,8],[A.GOLD,6]],creepertitan:[[A.STAR,1],[A.COAL,32],[A.DIAMOND,8],[A.GOLD,8]],blazeking:[[A.STAR,1],[A.COAL,24],[A.DIAMOND,8],[A.GOLD,10]],piglinking:[[A.STAR,2],[A.GOLD,32],[A.DIAMOND,10]],endertitan:[[A.STAR,2],[A.PEARL,6],[A.DIAMOND,12]],voidlord:[[A.STAR,2],[A.PEARL,4],[A.DIAMOND,12],[A.GOLD,12]],ravager:[[A.STAR,1],[A.DIAMOND,8],[A.GOLD,10]],evoker:[[A.STAR,1],[A.DIAMOND,6],[A.GOLD,8],[A.PEARL,1]],ghast:[[A.STAR,1],[A.DIAMOND,6],[A.COAL,16]],herobrine:[[A.STAR,3],[A.DIAMOND,16],[A.GOLD,16],[A.PEARL,2]],slimeking:[[A.STAR,1],[A.DIAMOND,6],[A.GOLD,6]],storm:[[A.STAR,1],[_.COMMAND,1],[A.DIAMOND,8],[A.GOLD,12]],dragon:[[A.STAR,2],[A.PEARL,4],[A.DIAMOND,12],[A.GOLD,10]],wither:[[A.STAR,1],[A.DIAMOND,6],[A.GOLD,10]],warden:[[A.STAR,1],[A.DIAMOND,10],[A.GOLD,16]],guardian:[[A.STAR,1],[A.PEARL,1],[A.DIAMOND,6],[A.GOLD,8]]},Ra=["Primera persona","Tercera persona (detrás)","Tercera persona (delante)"],Ca=new mu(new xv(new Kt(1.005,1.005,1.005)),new pc({color:0}));Ca.visible=!1;Ve.add(Ca);const Ku=(()=>{let n=12345;const t=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296,e=[];for(let i=0;i<6;i++){let s=8,o=8;const r=t()*6.28;for(let l=0;l<12;l++)s+=Math.cos(r+(t()-.5)*1.3),o+=Math.sin(r+(t()-.5)*1.3),e.push([Math.round(s),Math.round(o),l])}return Array.from({length:10},(i,s)=>{const o=document.createElement("canvas");o.width=o.height=16;const r=o.getContext("2d");r.fillStyle="rgba(0,0,0,0.8)";for(const[a,h,f]of e)f<=(s+1)*1.25&&r.fillRect(a,h,1,1);const l=new Ui(o);return l.magFilter=_e,l.minFilter=_e,l.generateMipmaps=!1,l})})(),Xo=new _t(new Kt(1.01,1.01,1.01),new ce({map:Ku[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));Xo.visible=!1;Ve.add(Xo);const Vh=new ce({transparent:!0,side:Ri,depthTest:!1,fog:!1}),La=new _t(new kn(.55,.55),Vh),qo=new _t(new Kt(.12,.12,.5),new ce({color:14264191,depthTest:!1,fog:!1})),nr=new we;nr.add(La,qo);di.add(nr);La.renderOrder=qo.renderOrder=999;let Nt="menu",oe="survival",fa=Ee.radius,ji=Ee.cam|0;const vn=new Map;let mn,Fl=0,Yt,ue=null,$e=null,Wh,ai,Zi=null,ln=0,ss=0,os=0,Hl=0,Gl=0,wd=2,Da=null,Tc="Mundo",Ac=0,ju=0,Rc=null,oo=!1;const Xh=n=>6+n*4;function bs(n){for(ss+=n;ss>=Xh(ln);)ss-=Xh(ln),ln++,ct&&ct.toast("¡Nivel "+ln+"!"),he("pop")}let tt,N,Rt,ui,Xe,pi,Ai,ct,Bn=1,qh,de=null,rs=!1,Ki={},te="overworld",Pa={nether:new Map,end:new Map},Zn=0,Yo=0,Ia=!1;const Yh={overworld:"Overworld",nether:"El Nether",end:"El End"},$u=(n,t,e)=>(te==="overworld"?"":te+":")+n+","+t+","+e,qe={left:!1,right:!1},Yi={key:"",progress:0};let Vi=0,Zr=0,Fo=0,Na=0,Td=-2,Vl=0,Wl=0;function Oi(n){const t=J("overlay");if(t.classList.toggle("ingame",n==="pause"||n==="death"),!n){t.classList.add("hidden");return}t.classList.remove("hidden");for(const e of["menu","pause","death"])J(e).classList.toggle("hidden",e!==n)}const he=n=>{Hh(n),de&&(n==="hurt"?de.rumble(.6,.35,180):n==="explode"?de.rumble(1,.7,450):n==="roar"?de.rumble(.8,.5,600):n==="hit"?de.rumble(.25,.5,70):n==="break"?de.rumble(.15,.35,60):n==="thunder"&&de.rumble(.7,.2,500))};function yo(){try{const n=Hn.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}function mM(n){for(let t=0;t<600;t+=5)for(let e=0;e<12;e++){const i=Math.round(Math.cos(e/12*Math.PI*2)*t),s=Math.round(Math.sin(e/12*Math.PI*2)*t),o=Ln(i,s,n);if(o.h>ri+3&&o.h<ri+16&&o.biome!=="ocean"&&o.biome!=="mountains")return[i,s]}return[0,0]}function Cc(n,t){for(let e=0;e<12;e++)for(let i=-e;i<=e;i++)for(let s=-e;s<=e;s++){if(Math.max(Math.abs(i),Math.abs(s))!==e)continue;const o=n+i,r=t+s,l=tt.topY(o,r);if(l<ri)continue;const a=tt.getBlock(o,l,r);if((a===_.GRASS||a===_.SAND||a===_.SNOW)&&!tt.isSolid(o,l+1,r)&&!tt.isSolid(o,l+2,r))return new I(o+.5,l+1,r+.5)}return new I(n+.5,Math.max(tt.topY(n,t),ri)+2,t+.5)}function Kh(n,t,e=null){const i=N.eye,s=N.lookDir();pi.spawn(i.x+s.x*.5,i.y-.3,i.z+s.z*.5,n,t,!1);const o=pi.list[pi.list.length-1];o.vel.set(s.x*5,2.5,s.z*5),o.age=-1.2}function Xl(n,t,e,i,s=1){he("explode");{const h=Math.hypot(N.pos.x-n,N.pos.y-t,N.pos.z-e);h<40&&de.rumble(Math.min(1,1.2-h/40),.8,500)}const o=Math.ceil(i)+1;for(let h=-o;h<=o;h++)for(let f=-o;f<=o;f++)for(let c=-o;c<=o;c++){if(Math.hypot(h,f,c)>i*(.7+Math.random()*.3))continue;const u=Math.floor(n)+h,g=Math.floor(t)+f,x=Math.floor(e)+c,m=tt.getBlock(u,g,x);if(!(m===jt||m===_.BEDROCK||Mn[m])&&(tt.setBlock(u,g,x,jt),oe==="survival"&&Math.random()<.2)){const p=Du(m,null);p&&pi.spawn(u+.5,g+.5,x+.5,p[0],p[1])}}Ai.burst(n,t,e,[.5,.5,.5],40,7),Ai.burst(n,t,e,[.9,.5,.1],20,6);const r=N.pos.x-n,l=N.pos.z-e,a=Math.hypot(r,N.pos.y+.9-t,l);a<i*2&&N.damage(Math.round((1-a/(i*2))*22*s),r/(Math.hypot(r,l)||1)*9,l/(Math.hypot(r,l)||1)*9);for(const h of[...Xe.list])Math.hypot(h.pos.x-n,h.pos.y-t,h.pos.z-e)<i*2&&Xe.damage(h,14,n,e)}const sr=[{name:"Llanura",until:30,blocks:[_.GRASS,_.GRASS,_.DIRT,_.DIRT,_.LOG,_.LOG,_.LEAVES,_.SAND],mobs:["pig","cow","chicken","sheep"]},{name:"Bosque y cueva",until:90,blocks:[_.STONE,_.STONE,_.COBBLE,_.LOG,_.PLANKS,_.COAL_ORE,_.COAL_ORE,_.IRON_ORE,_.GRAVEL||_.SAND,_.DIRT],mobs:["zombie","skeleton","spider","pig","creeper"]},{name:"Desierto y nieve",until:170,blocks:[_.SAND,_.SANDSTONE,_.SANDSTONE,_.CACTUS,_.SNOW,_.SNOW,_.IRON_ORE,_.GOLD_ORE,_.GLASS],mobs:["zombie","skeleton","creeper","villager","crewmate"]},{name:"Mina profunda",until:270,blocks:[_.STONE,_.STONE,_.COBBLE,_.MOSSY_COBBLE,_.COAL_ORE,_.IRON_ORE,_.GOLD_ORE,_.DIAMOND_ORE,_.GOLD_BLOCK,_.BRICKS],mobs:["zombie","skeleton","creeper","spider","slime","saibaman"]},{name:"Nether",until:400,blocks:[_.NETHERRACK,_.NETHERRACK,_.SOUL_SAND,_.GLOWSTONE,_.NETHER_BRICKS,_.ANCIENT_DEBRIS,_.OBSIDIAN,_.GOLD_ORE],mobs:["piglin","blaze","magmacube","witherskeleton","hoglin","impostor"]},{name:"El End",until:550,blocks:[_.END_STONE,_.END_STONE,_.PURPUR,_.END_BRICKS,_.OBSIDIAN,_.DIAMOND_ORE,_.CHEST],mobs:["enderman","endermite","shulker","phantom","saibaman"]},{name:"CAOS CROSSOVER",until:1/0,blocks:null,mobs:["impostor","crewmate","homer","bart","marge","lisa","flanders","saibaman","dog","creeper","enderman","blaze"]}],gM={100:"evoker",220:"impostor",300:"ghast",420:"burns",520:"wither",650:"blazeking",800:"goku",1e3:"dragon"},Ad=new Set(["impostor","burns","goku"]),Oa=()=>sr.findIndex(n=>gn.count<n.until);function Zu(){const n=sr[Oa()];if(!n.blocks){const t=Object.keys(Te).map(Number).filter(e=>e!==_.BEDROCK&&e!==_.COMMAND&&e!==_.WATER&&e!==_.LAVA&&!Te[e].liquid&&e!==_.NETHER_PORTAL&&e!==_.END_PORTAL&&e!==_.END_FRAME_EYE&&e!==_.CHEST_OPEN);return t[Math.floor(Math.random()*t.length)]}return n.blocks[Math.floor(Math.random()*n.blocks.length)]||_.STONE}function xM(){tt.getBlock(0,64,0)===jt&&tt.setBlock(0,64,0,gn.count===0?_.GRASS:Zu())}function Ju(){const n=Oa(),t=sr[n],e=n?sr[n-1].until:0;J("obPhase").textContent="⬛ "+t.name,J("obCount").textContent=gn.count+" bloques"+(t.until<1/0?" / "+t.until:""),J("obFill").style.width=(t.until<1/0?Math.min(100,(gn.count-e)/(t.until-e)*100):100)+"%"}function vM(n=26){for(let t=-n;t<=n;t++)for(let e=-n;e<=n;e++)t*t+e*e<=n*n&&tt.getBlock(t,63,e)===jt&&!(t===0&&e===0)&&tt.setBlock(t,63,e,t+e&1?_.STONE:_.COBBLE)}function _M(){const n=Oa();gn.count++;const t=Oa(),e=sr[t];setTimeout(()=>{tt.getBlock(0,64,0)===jt&&tt.setBlock(0,64,0,Zu())},0),t!==n&&(ct.toast("★ Nueva fase: "+e.name+" ★"),he("levelup"),bs(30));const i=()=>.5+(Math.random()-.5)*1.2;if(gn.count%8===0&&oe==="survival"){const o=e.mobs[Math.floor(Math.random()*e.mobs.length)];Xe.list.length<14&&Xe.add(o,i(),65.2,i())}if(gn.count%25===0){const o=Ic({x:0,y:64,z:0});for(const[r,l]of o)pi.spawn(.5,65.8,.5,r,l);ct.toast("🎁 ¡Recompensa de One Block!")}const s=gM[gn.count];s&&!ue&&!$e&&(Ad.has(s)&&(vM(),ct.toast("Se forma una arena de piedra…")),setTimeout(()=>{ue||N.lookDir&&Dc(s)},Ad.has(s)?600:100)),Ju()}function jh(n){const t=tt.getBlock(n.x,n.y,n.z);if(t===jt||Te[t].hardness===1/0)return;const e=Rt.held();if(tt.setBlock(n.x,n.y,n.z,jt),un==="oneblock"&&te==="overworld"&&n.x===0&&n.y===64&&n.z===0&&_M(),t===_.FURNACE){const s=$u(n.x,n.y,n.z),o=vn.get(s);if(o){for(const r of o.slots)r&&pi.spawn(n.x+.5,n.y+.5,n.z+.5,r.id,r.n);vn.delete(s)}}t===_.OBSIDIAN&&UM(n.x,n.y,n.z);let i=!1;{const s=ye[t];if(s&&s.kind==="door"){const o=s.hi?n.y-1:n.y+1;ye[tt.getBlock(n.x,o,n.z)]&&ye[tt.getBlock(n.x,o,n.z)].kind==="door"&&tt.setBlock(n.x,o,n.z,jt),s.hi&&(i=!0)}}if((t===_.COAL_ORE||t===_.IRON_ORE||t===_.GOLD_ORE||t===_.DIAMOND_ORE)&&bs(t===_.DIAMOND_ORE?8:3),Ai.blockBreak(n.x,n.y,n.z,t),he("break"),oe==="survival"){const s=i?null:Du(t,e);if(s)if(un==="oneblock"&&n.x===0&&n.y===64&&n.z===0){const o=Rt.add(s[0],s[1]);o&&pi.spawn(.5,65.6,.5,s[0],o),ct.renderHotbar(),he("pop")}else pi.spawn(n.x+.5,n.y+.4,n.z+.5,s[0],s[1]);As(e)&&Te[t].hardness>0&&(Rt.wearHeld(1)&&(he("break"),ct.toast("¡Se ha roto la herramienta!")),ct.renderHotbar())}tt.getBlock(n.x,n.y+1,n.z)===_.CACTUS&&Te[t].cactusOk}function Lc(){const n=N.eye,t=N.lookDir(),e=tt.raycast(n,t,oe==="creative"?7:5.5);if(Vi=Math.max(Vi,.001),e&&e.id===_.TABLE&&!N.keys.has("ShiftLeft")){za(3);return}if(e&&e.id===_.FURNACE&&!N.keys.has("ShiftLeft")){const c=$u(e.x,e.y,e.z);vn.has(c)||vn.set(c,{slots:[null,null,null],burn:0,burnMax:1,cook:0}),za("furnace",vn.get(c));return}if(e&&ye[e.id]&&ye[e.id].kind==="door"&&!N.keys.has("ShiftLeft")){MM(e.x,e.y,e.z);return}if(e&&e.id===_.END_FRAME){l0(e);return}if(e&&e.id===_.CHEST&&!N.keys.has("ShiftLeft")){r0(e);return}if(!N.keys.has("ShiftLeft")){const c=Xe.raycast(n,t,4.5),d=tt.raycast(n,t,4.5);if(c&&(!d||d.dist>c.dist)&&c.mob.def.talk){const u=c.mob.def;if(u.villager){Nn("trade");return}ct.toast(u.name+": «"+u.talk[Math.floor(Math.random()*u.talk.length)]+"»"),he("hit");return}}const i=Rt.held();if(!i)return;if(i.id===A.LIGHTER){e&&a0(e);return}if(Fe[i.id]&&Fe[i.id].armor){const c=Fe[i.id].armor,d=Rt.armor[c.slot];Rt.armor[c.slot]={...i},Rt.slots[Rt.selected]=d?{...d}:null,he("craft"),ct.renderHotbar(),mn.setArmor(Rt.armor),ct.toast("Equipado: "+Fe[i.id].name);return}if(i.id===A.DBALL){NM();return}const s=Fe[i.id]&&Fe[i.id].food;if(s){const c=Fe[i.id].heal;oe==="survival"&&(N.food<20||c&&N.hp<20)&&(N.eat(s),c&&(N.hp=20,Ai.burst(N.pos.x,N.pos.y+1,N.pos.z,[.5,1,.4],18,4)),Rt.consumeHeld(1),he("eat"),ct.renderHotbar());return}if(!Wv(i.id)||!e)return;let o=e.x+e.normal[0],r=e.y+e.normal[1],l=e.z+e.normal[2],a=i.id;if(r<0||r>=re)return;const h=ye[i.id];if(h){const c=n.clone().addScaledVector(t,e.dist),d=t,u=Math.abs(d.x)>Math.abs(d.z)?d.x>0?1:3:d.z>0?2:0;if(h.kind==="slab"){const g=ye[e.id];if(g&&g.kind==="slab"&&g.m===h.m&&(!g.top&&e.normal[1]===1||g.top&&e.normal[1]===-1)){tt.setBlock(e.x,e.y,e.z,Mc[h.m]),he("place"),oe==="survival"&&(Rt.consumeHeld(1),ct.renderHotbar());return}a=(e.normal[1]===-1?!0:e.normal[1]===1?!1:c.y-Math.floor(c.y)>.5)?yu(h.m):Qo(h.m)}else if(h.kind==="stairs")a=ba(h.m,u);else if(h.kind==="door"){if(tt.getBlock(o,r+1,l)!==jt||r+1>=re)return;a=Es+u}}const f=tt.getBlock(o,r,l);if(!(f!==jt&&!Mn[f])&&!(tr[i.id]&&!(h&&h.kind==="slab")&&N.intersectsBlock(o,r,l))&&!(tr[i.id]&&Xe.list.some(c=>Math.abs(c.pos.x-(o+.5))<c.hw+.5&&Math.abs(c.pos.z-(l+.5))<c.hw+.5&&c.pos.y<r+1&&c.pos.y+c.h>r))){if(i.id===_.COMMAND){if(ue||$e){ct.toast("Ya hay una tormenta en curso");return}tt.setBlock(o,r,l,i.id),he("place"),oe==="survival"&&(Rt.consumeHeld(1),ct.renderHotbar()),HM(o,r,l);return}tt.setBlock(o,r,l,a),h&&h.kind==="door"&&tt.setBlock(o,r+1,l,bc+(a-Es)),he("place"),oe==="survival"&&(Rt.consumeHeld(1),ct.renderHotbar())}}function MM(n,t,e){const i=tt.getBlock(n,t,e),s=ye[i],o=s.hi?t-1:t+1,r=tt.getBlock(n,o,e),l=(a,h)=>(h.open?h.hi?bc:Es:h.hi?Eu:Su)+h.o;tt.setBlock(n,t,e,l(i,s)),ye[r]&&ye[r].kind==="door"&&tt.setBlock(n,o,e,l(r,ye[r])),he(s.open?"place":"break")}function yM(n){const t=Cs[n];J("bossFill").style.background=`linear-gradient(${t.color}, #25103a)`,J("bossbar").style.setProperty("--bc",t.color)}function or(n,t,e,i,s){const o=Cs[n],r=new I(t,e,i);ue=n==="storm"?new g_(Ve,Wh,r):o.make(Ve,Wh,r,s),yM(n),Yu.has(n)&&(Yt.set("storm"),Yt.boss=!0,Yt.timer=9999),he("roar")}function Dc(n){if(ue||$e)return ct.toast("Ya hay un jefe activo"),!1;const t=Cs[n],e=N.lookDir(),i=Math.hypot(e.x,e.z)||1,s=e.x/i,o=e.z/i,r=t.dist||(n==="warden"?12:n==="guardian"?16:n==="wither"?20:26),l=N.pos.x+s*r,a=N.pos.z+o*r;let h;if(t.ground){const f=Pc(Math.floor(l),Math.floor(a));h=f!==null?f:N.pos.y}else h=N.pos.y+(t.up===void 0?10:t.up)+(n==="storm"?10:0);return n==="dragon"&&te==="end"?(or("dragon",.5,100,.5,{cx:0,cy:64,cz:0,pillars:wc()}),Ia=!0):or(n,l,h,a),ct.toast("¡"+t.name+" ha sido invocado!"),!0}function Pc(n,t){if(te==="overworld"){const e=tt.topY(n,t);return e>0?e+1:null}for(let e=Math.min(re-6,Math.floor(N.pos.y)+12);e>4;e--)if(tt.isSolid(n,e-1,t)&&!Mn[tt.getBlock(n,e-1,t)]&&!tt.isSolid(n,e,t)&&!tt.isSolid(n,e+1,t)&&!Mn[tt.getBlock(n,e,t)])return e;return null}function Qu(n){const t=N.lookDir(),e=Math.hypot(t.x,t.z)||1;for(let i=6;i<=10;i+=2){const s=Math.floor(N.pos.x+t.x/e*i),o=Math.floor(N.pos.z+t.z/e*i),r=Pc(s,o);if(r!==null){Xe.add(n,s+.5,mo[n].fly?r+4:r,o+.5);return}}Xe.add(n,N.pos.x+3,N.pos.y+1,N.pos.z)}function bM(){ue&&(ue.dispose(),ue=null),$e=null,Yt.boss=!1,os=0,J("bossbar").classList.add("hidden"),ct.toast("Jefe descartado")}function Nn(n){Nt==="play"&&(Nt="panel",Zi=n,N.keys.clear(),qe.left=qe.right=!1,document.exitPointerLock(),J(n).classList.remove("hidden"),n==="chatp"?(J("chatIn").value="",setTimeout(()=>J("chatIn").focus(),30)):n==="summon"?SM():n==="trade"?e0():n==="padcfg"?to():EM())}function ts(n){Zi&&(J(Zi).classList.add("hidden"),Zi=null,n?(Nt="play",yo()):(Nt="pause",Oi("pause")))}function SM(){J("bossCards").innerHTML=O_.map(n=>{const t=Cs[n],e=ai.bosses.has(n);return`<div class="card" style="border-left:6px solid ${t.color}"><h4><span>${t.icon} ${t.name}</span><span class="tag">${t.hp} HP</span></h4><p>${t.desc}</p><button class="btn" data-boss="${n}">${e?"✔ ":""}Invocar</button></div>`}).join(""),J("mobBtns").innerHTML=Object.keys(mo).map(n=>`<button class="btn" data-mob="${n}">${mo[n].name}</button>`).join("")}const t0=[{give:[[A.COAL,12]],get:[A.IRON,2]},{give:[[A.IRON,6]],get:[A.GOLD,3]},{give:[[A.GOLD,6]],get:[A.DIAMOND,1]},{give:[[A.GOLD,2]],get:[A.DONUT,3]},{give:[[A.DIAMOND,2]],get:[A.SENZU,1]},{give:[[A.DIAMOND,3]],get:[A.EYE,2]},{give:[[A.IRON,24]],get:[er(1,2),1]},{give:[[A.DIAMOND,24]],get:[er(1,3),1]},{give:[[A.DIAMOND,5],[A.GOLD,10]],get:[A.NETHERITE,1]},{give:[[A.DIAMOND,30]],get:[A.ELYTRA,1]},{give:[[A.DIAMOND,12],[A.STAR,1]],get:[A.DBALL,1]},{give:[[A.DIAMOND,1]],get:[_.TORCH,32]}];function e0(){J("tradeInfo").textContent=oe==="creative"?"(creativo: gratis)":"",J("tradeList").innerHTML=t0.map((n,t)=>{const e=oe==="creative"||n.give.every(([i,s])=>Rt.count(i)>=s);return`<div class="card"><h4><span>${po(n.get[0]).name} ×${n.get[1]}</span></h4><p>Precio: ${n.give.map(([i,s])=>s+"× "+po(i).name).join(" + ")}</p><button class="btn" data-trade="${t}" ${e?"":'disabled style="opacity:.5"'}>Comprar</button></div>`}).join("")}J("tradeList").addEventListener("click",n=>{const t=n.target.closest("[data-trade]");if(!t||Nt!=="panel")return;const e=t0[+t.dataset.trade];if(oe!=="creative"){if(!e.give.every(([s,o])=>Rt.count(s)>=o))return;for(const[s,o]of e.give)Rt.take(s,o)}const i=Rt.add(e.get[0],e.get[1]);i&&pi.spawn(N.pos.x,N.pos.y+1,N.pos.z,e.get[0],i),he("craft"),ct.renderHotbar(),e0()});function EM(){J("questTitle").textContent=`Misiones — ${ai.completed()}/${ai.total()} completadas`;let n="",t="";for(const e of Zs){e.group!==t&&(t=e.group,n+=`<div class="grp">${t.toUpperCase()}</div>`);const i=ai.done[e.id],s=ai.progress[e.id]||0,o=e.reward.map(([r,l])=>`${l}× ${po(r).name}`).join(", ");n+=`<div class="q ${i?"done":""}"><span class="ck">${i?"✔":"○"}</span><div><b>${e.title}</b>${e.desc}<div class="bar"><i style="width:${s/e.n*100}%"></i></div></div><div class="rw">${s}/${e.n}<br>${o}<br>+${e.xp} XP</div></div>`}J("questList").innerHTML=n}J("bossCards").addEventListener("click",n=>{const t=n.target.closest("[data-boss]");t&&Nt==="panel"&&(ts(!0),Dc(t.dataset.boss))});J("mobBtns").addEventListener("click",n=>{const t=n.target.closest("[data-mob]");t&&Nt==="panel"&&(Qu(t.dataset.mob),ct.toast(mo[t.dataset.mob].name+" invocado"))});J("bDespawn").onclick=()=>{bM()};J("dimBtns").addEventListener("click",n=>{const t=n.target.closest("[data-dim]");t&&Nt==="panel"&&(ts(!0),qa(t.dataset.dim))});const He=J("minimap").getContext("2d"),Rd=He.createImageData(64,64),i0={};for(const n of Object.values(Te)){const t=vu(n.tiles[0]);i0[n.id]=[t[0]*255,t[1]*255,t[2]*255]}function wM(){const n=Math.floor(N.pos.x),t=Math.floor(N.pos.z),e=Rd.data;for(let s=0;s<64;s++)for(let o=0;o<64;o++){const r=n+o-32,l=t+s-32,a=(s*64+o)*4;let h=tt.topY(r,l);if(te!=="overworld"&&h>=0)for(h=Math.min(re-3,Math.floor(N.pos.y)+6);h>0&&!tt.isSolid(r,h,l)&&tt.getBlock(r,h,l)!==_.LAVA;)h--;let f;if(h<0)f=[20,20,30];else if(te==="overworld"&&h<ri&&tt.getBlock(r,ri,l)===_.WATER)f=[38+h,84+h,190];else{const c=i0[tt.getBlock(r,h,l)]||[90,90,90],d=Math.max(.6,Math.min(1.25,.9+(h-N.pos.y)*.012));f=[c[0]*d,c[1]*d,c[2]*d]}e[a]=f[0],e[a+1]=f[1],e[a+2]=f[2],e[a+3]=255}He.putImageData(Rd,0,0),He.imageSmoothingEnabled=!1,He.drawImage(J("minimap"),0,0,64,64,0,0,128,128);const i=(s,o,r,l)=>{const a=(s-n+32)*2,h=(o-t+32)*2;a<2||h<2||a>126||h>126||(He.fillStyle=r,He.fillRect(a-l,h-l,l*2,l*2))};for(const s of Xe.list)i(s.pos.x,s.pos.z,s.def.hostile?"#ff4040":"#ffffff",1.5);if(ue){const s=3+Math.sin(performance.now()/150)*1.2,o=ue.pos.x,r=ue.pos.z,l=Math.max(6,Math.min(122,(o-n+32)*2)),a=Math.max(6,Math.min(122,(r-t+32)*2));He.fillStyle="#d050ff",He.fillRect(l-s,a-s,s*2,s*2),He.strokeStyle="#fff",He.strokeRect(l-s,a-s,s*2,s*2)}He.save(),He.translate(64+(N.pos.x-n)*2,64+(N.pos.z-t)*2),He.rotate(-N.yaw+Math.PI),He.fillStyle="#fff",He.strokeStyle="#000",He.beginPath(),He.moveTo(0,6),He.lineTo(4.5,-4.5),He.lineTo(0,-2),He.lineTo(-4.5,-4.5),He.closePath(),He.fill(),He.stroke(),He.restore()}function TM(){J("tracker").innerHTML=ai.active(3).map(n=>`<div class="qt"><b>${n.title}</b>${n.desc} (${ai.progress[n.id]||0}/${n.n})<div class="qb"><i style="width:${(ai.progress[n.id]||0)/n.n*100}%"></i></div></div>`).join("")}let un="normal",gn={count:0},zo=null,ae=null;const n0=(n,t)=>(Math.floor(n/16)+32768)*65536+(Math.floor(t/16)+32768);function AM(n){ae.edits={};for(const[t,e,i,s,o]of n){const r=ae.edits[t]||(ae.edits[t]=new Map),l=n0(e,s);let a=r.get(l);a||r.set(l,a=new Map),a.set((i*16+(s-Math.floor(s/16)*16))*16+(e-Math.floor(e/16)*16),o)}}function da(n,t=""){const e=document.createElement("div");t&&(e.className=t),e.innerHTML=n;const i=J("chatLog");for(i.appendChild(e);i.children.length>8;)i.firstChild.remove();setTimeout(()=>{e.style.opacity=0,setTimeout(()=>e.remove(),1e3)},12e3)}const ql=n=>String(n).replace(/[&<>"]/g,t=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"})[t]);function RM(n){const t=document.createElement("canvas");t.width=256,t.height=48;const e=t.getContext("2d");e.fillStyle="rgba(0,0,0,.55)",e.fillRect(0,0,256,48),e.fillStyle="#fff",e.font="bold 28px sans-serif",e.textAlign="center",e.textBaseline="middle",e.fillText(n,128,26);const i=new Ui(t);i.colorSpace=oi;const s=new uc(new Ga({map:i,transparent:!0,depthTest:!1}));return s.scale.set(1.6,.3,1),s.position.y=2.2,s.renderOrder=999,s}function s0(n,t,e){if(!ae||ae.remotes.has(n))return;const i=new St().setHSL((e||0)/360,.65,.45),s=new Nu(Ve,{shirt:i.getHex()});s.group.visible=!0,s.group.add(RM(t)),ae.remotes.set(n,{id:n,name:t,model:s,target:new I,pos:new I,yaw:0,pitch:0,dim:"overworld",vel:new I,fake:{pos:new I,vel:new I,yaw:0,pitch:0,onGround:!0,inWater:!1,flying:!1},init:!1})}function CM(n){const t=ae&&ae.remotes.get(n);t&&(Ve.remove(t.model.group),ae.remotes.delete(n))}function LM(){const n=ae.net;n.on("players",t=>{for(const e of t.list){const i=ae.remotes.get(e.id);i&&(i.target.set(e.p[0],e.p[1],e.p[2]),i.yaw=e.yaw,i.pitch=e.pitch,i.dim=e.dim,i.model.setHeld(e.held||0),i.init||(i.pos.copy(i.target),i.init=!0))}}),n.on("join",t=>s0(t.id,t.name,t.color)),n.on("leave",t=>CM(t.id)),n.on("edit",t=>{const e=Ki[t.dim];if(e)e.silent=!0,e.setBlock(t.x,t.y,t.z,t.id),e.silent=!1;else{ae.edits[t.dim]=ae.edits[t.dim]||new Map;const i=n0(t.x,t.z);let s=ae.edits[t.dim].get(i);s||ae.edits[t.dim].set(i,s=new Map),s.set((t.y*16+(t.z-Math.floor(t.z/16)*16))*16+(t.x-Math.floor(t.x/16)*16),t.id)}}),n.on("chat",t=>{da("<b>"+ql(t.name)+"</b>: "+ql(t.text))}),n.on("sys",t=>da(ql(t.text),"sys")),n.on("time",t=>{ui&&Math.abs(ui.time-t.time)>.01&&(ui.time=t.time)}),n.on("close",()=>{ae&&(da("Conexión perdida con el servidor","sys"),ct&&ct.toast("Conexión perdida: vuelve al menú"))})}function DM(n){if(ae){if(ae.posT-=n,ae.posT<=0){ae.posT=.1;const t=Rt.held();ae.net.send({t:"pos",p:[N.pos.x,N.pos.y,N.pos.z],yaw:N.yaw,pitch:N.pitch,dim:te,held:t?t.id:0})}for(const t of ae.remotes.values()){const e=t.dim===te&&t.init;if(t.model.group.visible=e,!e)continue;const i=t.pos.clone();t.pos.lerp(t.target,Math.min(1,n*10)),t.fake.vel.set((t.pos.x-i.x)/Math.max(n,.001),0,(t.pos.z-i.z)/Math.max(n,.001)),t.fake.pos.copy(t.pos),t.fake.yaw=t.yaw,t.fake.pitch=t.pitch,t.fake.onGround=Math.abs(t.target.y-t.pos.y)<.2,t.model.update(n,t.fake,0)}}}function PM(n){ae&&n.trim()&&ae.net.send({t:"chat",text:n.trim()})}function $h(n,t){const e=ae?ae.edits[n]||(ae.edits[n]=new Map):null,i=new we;i.visible=!1,Ve.add(i);const s=new o_(i,ns,n==="overworld"?Bn:n==="nether"?Bn+500:Bn+900,t||new Map,n);if(s.group=i,s.kind=un,ae&&(s.edits=e,s.onEdit=(o,r,l,a)=>ae.net.send({t:"edit",dim:n,x:o,y:r,z:l,id:a})),!zo&&typeof Worker<"u"&&!/[?&]noworker/.test(location.search))try{zo=new k_}catch{zo=null}return zo&&s.useWorkers(zo),s}function IM(n,t,e,i=3){return new Promise(s=>{const o=()=>{n.update(t,e,i,12)>0?setTimeout(o,0):s()};o()})}function o0(n,t,e){for(const i of[0,2]){const s=i===0?[1,0,0]:[0,0,1],o=(d,u)=>tt.getBlock(n+s[0]*d,t+u,e+s[2]*d);let r=0;for(;r>-22&&o(0,r-1)===jt;)r--;if(o(0,r-1)!==_.OBSIDIAN)continue;let l=0;for(;l<22&&o(0,l+1)===jt;)l++;if(o(0,l+1)!==_.OBSIDIAN)continue;let a=0;for(;a>-22&&o(a-1,0)===jt;)a--;if(o(a-1,0)!==_.OBSIDIAN)continue;let h=0;for(;h<22&&o(h+1,0)===jt;)h++;if(o(h+1,0)!==_.OBSIDIAN||l-r+1<3||h-a+1<2)continue;let f=!0;for(let d=a;d<=h&&f;d++)for(let u=r;u<=l;u++)if(o(d,u)!==jt){f=!1;break}for(let d=a;d<=h&&f;d++)(o(d,r-1)!==_.OBSIDIAN||o(d,l+1)!==_.OBSIDIAN)&&(f=!1);for(let d=r;d<=l&&f;d++)(o(a-1,d)!==_.OBSIDIAN||o(h+1,d)!==_.OBSIDIAN)&&(f=!1);if(!f)continue;const c=[];for(let d=a;d<=h;d++)for(let u=r;u<=l;u++)c.push([n+s[0]*d,t+u,e+s[2]*d]);return c}return null}function Ic(n){const t=[],e=Math.random,i=(o,r,l,a=1)=>{e()<a&&t.push([o,r+Math.floor(e()*(l-r+1))])},s=(o,r)=>{e()<r&&t.push([er(Math.floor(e()*4),o[Math.floor(e()*o.length)]),1])};return e()<.07&&t.push([A.DBALL,1]),te==="nether"?(i(A.GOLD,2,8),i(A.IRON,1,5,.7),i(A.DIAMOND,1,2,.3),i(_.OBSIDIAN,2,4,.4),i(A.COAL,3,8,.6),i(A.EYE,1,1,.15),i(A.COOKED_PORK,2,4,.4),s([1,2],.5),e()<.12&&t.push([A.SCRAP,1])):te==="end"?(s([2,3],.55),i(A.DIAMOND,2,6,.7),i(A.GOLD,3,9),i(A.IRON,2,6,.8),i(A.PEARL,1,3,.5),i(A.EYE,1,2,.3),i(_.PURPUR,6,16,.7),tt.getBlock(n.x,n.y-1,n.z)===_.END_BRICKS?t.push([A.ELYTRA,1]):i(A.ELYTRA,1,1,.06)):(i(A.GOLD,1,4),i(A.IRON,1,4),i(A.COAL,2,6),s([0,1,2],.4),i(A.DONUT,1,3,.3),i(_.GOLD_BLOCK,1,1,.1)),t}const ua=[];function NM(){if(Rt.count(A.DBALL)<7){ct.toast("Necesitas las 7 esferas del dragón ("+Rt.count(A.DBALL)+"/7)");return}Rt.take(A.DBALL,7),he("roar"),he("thunder");for(let r=0;r<3;r++)setTimeout(()=>Yt.strike(N,!1,{x:N.pos.x+(Math.random()-.5)*20,z:N.pos.z+(Math.random()-.5)*20}),r*500);const n=new we,t=new ce({color:3983440}),e=new ce({color:15261792}),i=[];for(let r=0;r<34;r++){const l=new _t(new Kt(1.5-r*.025,1.5-r*.025,1.5-r*.025),r%3?t:e);n.add(l),i.push(l)}const s=new _t(new Kt(3,2.2,3.4),t),o=new ce({color:16719904});for(const r of[-.9,.9]){const l=new _t(new Kt(.5,.4,.3),o);l.position.set(r,.4,1.7),s.add(l);const a=new _t(new Kt(.3,1.8,.3),t);a.position.set(r*1.2,1.6,-.4),s.add(a)}n.add(s),Ve.add(n),ua.push({g:n,segs:i,head:s,t:0,life:8,x:N.pos.x,y:N.pos.y,z:N.pos.z}),ct.toast("¡Sal, Shenlong! Pide tu deseo…"),setTimeout(()=>{Rt.add(A.DIAMOND,32),Rt.add(A.SENZU,5),Rt.add(A.NETHERITE,4),Rt.add(A.ELYTRA,1),N.hp=20,N.food=20,bs(250),ct.renderHotbar(),ct.toast("¡Deseo concedido! Vida completa, 32 diamantes, 4 netherita, élitros y 5 semillas")},3500)}function OM(n){for(let t=ua.length-1;t>=0;t--){const e=ua[t];e.t+=n;const i=Math.min(1,e.t/2)*Math.min(1,(e.life-e.t)/2);e.segs.forEach((r,l)=>{const a=e.t*.9+l*.32,h=4+l*.12;r.position.set(e.x+Math.cos(a)*h,e.y+l*1.1*i-2,e.z+Math.sin(a)*h)});const s=e.segs.length-1,o=e.t*.9+s*.32;e.head.position.set(e.x+Math.cos(o)*(4+s*.12),e.y+(s+1.5)*1.1*i-2,e.z+Math.sin(o)*(4+s*.12)),e.head.rotation.y=-o+Math.PI,e.g.visible=i>.02,e.t>=e.life&&(Ve.remove(e.g),ua.splice(t,1))}}function r0(n){tt.setBlock(n.x,n.y,n.z,_.CHEST_OPEN),he("craft");for(const[t,e]of Ic(n))pi.spawn(n.x+.5,n.y+1,n.z+.5,t,e);Ai.burst(n.x+.5,n.y+1,n.z+.5,[1,.85,.3],14,4),ct.toast("¡Cofre abierto!"),ai.event("chest","x")}function a0(n){if(te==="end")return ct.toast("El fuego no prende aquí"),!1;const t=n.x+n.normal[0],e=n.y+n.normal[1],i=n.z+n.normal[2],s=tt.getBlock(t,e,i)===jt?o0(t,e,i):null;if(!s)return ct.toast("Marco de obsidiana no válido (mínimo 2x3 interior)"),!1;for(const[o,r,l]of s)tt.setBlock(o,r,l,_.NETHER_PORTAL);if(he("hiss"),he("craft"),ct.toast("¡El portal del Nether se activa!"),oe==="survival"){const o=Rt.held();o.d=(o.d||0)+1,o.d>=64&&(Rt.slots[Rt.selected]=null),ct.renderHotbar()}return!0}function UM(n,t,e){const i=[[n,t,e]],s=new Set;for(;i.length;){const[o,r,l]=i.pop();for(const[a,h,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const c=o+a,d=r+h,u=l+f,g=c+","+d+","+u;s.has(g)||(s.add(g),tt.getBlock(c,d,u)===_.NETHER_PORTAL&&(tt.setBlock(c,d,u,jt),i.push([c,d,u])))}}}function l0(n){const t=Rt.held();if(!t||t.id!==A.EYE){ct.toast("Necesitas un Ojo de Ender");return}tt.setBlock(n.x,n.y,n.z,_.END_FRAME_EYE),he("place"),oe==="survival"&&(Rt.consumeHeld(1),ct.renderHotbar());const e=[];for(let i=-2;i<=2;i++)for(let s=-2;s<=2;s++)Math.max(Math.abs(i),Math.abs(s))===2&&!(Math.abs(i)===2&&Math.abs(s)===2)&&e.push([i,s]);for(const[i,s]of e){const o=n.x-i,r=n.z-s;if(e.every(([l,a])=>tt.getBlock(o+l,n.y,r+a)===_.END_FRAME_EYE)){for(let l=-1;l<=1;l++)for(let a=-1;a<=1;a++)tt.setBlock(o+l,n.y,r+a,_.END_PORTAL);he("roar"),ct.toast("¡El portal del End se abre!");return}}}function h0(n,t,e){for(let i=n-2;i<=n+5;i++)for(let s=e-2;s<=e+4;s++){const o=tt.getBlock(i,t,s);(o===jt||Mn[o]||!tr[o])&&tt.setBlock(i,t,s,_.OBSIDIAN);for(let r=t+1;r<=t+6;r++)tt.getBlock(i,r,s)!==jt&&tt.setBlock(i,r,s,jt)}for(let i=0;i<4;i++)for(let s=0;s<5;s++){const o=(i===0||i===3)&&(s===0||s===4),r=i===0||i===3||s===0||s===4;o||tt.setBlock(n+i,t+s,e,r?_.OBSIDIAN:_.NETHER_PORTAL)}tt.setBlock(n-1,t+1,e+2,_.TORCH),tt.setBlock(n+4,t+1,e+2,_.TORCH)}function zM(n,t){let e=null,i=1e9;const s=te==="nether"?20:2,o=te==="nether"?re-6:re-2;for(let r=n-24;r<=n+24;r++)for(let l=t-24;l<=t+24;l++)if(tt.chunks.has((Math.floor(r/16)+32768)*65536+(Math.floor(l/16)+32768))){for(let a=s;a<=o;a++)if(tt.getBlock(r,a,l)===_.NETHER_PORTAL){const h=Math.hypot(r-n,l-t);h<i&&(i=h,e=[r,a,l])}}return e}function kM(n){const[t,e,i]=n;let s=e;for(;tt.getBlock(t,s-1,i)===_.NETHER_PORTAL;)s--;for(const[o,r]of[[0,2],[0,-2],[2,0],[-2,0],[0,1],[0,-1],[1,0],[-1,0],[2,2],[-2,-2]]){const l=t+o,a=i+r;for(const h of[s,s+1,s-1])if(tt.isSolid(l,h-1,a)&&!tt.isSolid(l,h,a)&&!tt.isSolid(l,h+1,a)&&!Mn[tt.getBlock(l,h,a)]&&tt.getBlock(l,h,a)!==_.NETHER_PORTAL)return new I(l+.5,h,a+.5)}return new I(t+.5,s+1,i+2.5)}function BM(){const n=tt.topY(0,0);if(!(n<0)){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){const i=Math.max(Math.abs(t),Math.abs(e))===2;i&&Math.abs(t)===2&&Math.abs(e)===2||tt.setBlock(t,n+1,e,i?_.BEDROCK:_.END_PORTAL)}for(const[t,e]of[[-2,0],[2,0],[0,-2],[0,2]])tt.setBlock(t,n+2,e,_.TORCH);ct.toast("Se abre el portal de salida en el centro de la isla")}}async function qa(n,t={}){if(!tt||Nt==="loading"||n===te&&!t.force)return;const e=te;Nt="loading",N.keys.clear(),qe.left=qe.right=!1,J("travelTxt").textContent="Viajando a "+Yh[n]+"…",J("travel").classList.remove("hidden"),await new Promise(r=>setTimeout(r,40)),ue&&(ue.dispose(),ue=null,Yt.boss=!1,os=0,J("bossbar").classList.add("hidden")),$e=null,Xe.clear(),pi.clear();let i,s;t.arrive?(i=Math.floor(t.arrive.x),s=Math.floor(t.arrive.z)):n==="end"?(i=0,s=30):n==="nether"?(i=Math.floor(N.pos.x/8),s=Math.floor(N.pos.z/8)):e==="nether"?(i=Math.floor(N.pos.x*8),s=Math.floor(N.pos.z*8)):(i=Math.floor(N.spawn.x),s=Math.floor(N.spawn.z)),Ki[n]||(Ki[n]=$h(n,n==="nether"?Pa.nether:n==="end"?Pa.end:new Map)),tt.group.visible=!1,tt=Ki[n],tt.group.visible=!0,te=n,N.world=tt,pi.world=tt,Ai.world=tt,Xe.world=tt,Xe.dim=n,ui.setDimension(n),os=0,await IM(tt,i,s,3);let o;if(n==="end"){const r=tt.topY(i,s);o=new I(.5,(r>0?r:64)+1,30.5)}else if(t.respawn)o=Cc(i,s);else{const r=zM(i,s);if(r)o=kM(r);else{let l;if(n==="overworld"){const a=tt.topY(i,s);l=Math.max(a>0?a:ri,ri)}else{l=64;for(let a=100;a>36;a--){const h=tt.getBlock(i,a,s);if(tt.isSolid(i,a,s)&&h!==_.LAVA&&!tt.isSolid(i,a+1,s)&&!tt.isSolid(i,a+2,s)&&!Mn[tt.getBlock(i,a+1,s)]){l=a;break}}}h0(i,l,s),o=new I(i+1.5,l+1,s+2.5)}}N.pos.copy(o),N.vel.set(0,0,0),N.fallStart=null,N.yaw=Math.PI,Nt="play",J("travel").classList.add("hidden"),Yo=3,Zn=0,ct.toast("Has llegado a "+Yh[n]),ai.event("dim",n),n==="end"&&!Ia&&!ai.bosses.has("dragon")&&(Ia=!0,setTimeout(()=>{te==="end"&&!ue&&or("dragon",.5,100,.5,{cx:0,cy:64,cz:0,pillars:wc()})},1500)),oo=!0}function FM(n){Yo=Math.max(0,Yo-n);const t=Math.floor(N.pos.x),e=Math.floor(N.pos.z),i=tt.getBlock(t,Math.floor(N.pos.y+.2),e),s=tt.getBlock(t,Math.floor(N.pos.y+1.2),e),o=i===_.NETHER_PORTAL||s===_.NETHER_PORTAL?"nether":i===_.END_PORTAL||s===_.END_PORTAL?"end":null,r=oe==="creative"?.6:3;o&&Yo<=0&&Nt==="play"?(Zn+=n,Zn>=r&&(Zn=0,qa(o==="nether"?te==="nether"?"overworld":"nether":te==="end"?"overworld":"end"))):Zn=Math.max(0,Zn-n*2);const l=J("portalfx");l.style.opacity=Math.min(1,Zn/r)*.9,l.style.background=o==="end"?"radial-gradient(ellipse at center, rgba(20,60,70,.5), rgba(2,10,14,.95))":""}function HM(n,t,e){$e={x:n,y:t,z:e,t:5,s:0},he("roar"),Yt.set("storm"),Yt.boss=!0,ct.toast("El bloque de comandos late… ¡aléjate!")}function GM(n){if($e.t-=n,$e.s-=n,Yt.timer=9999,$e.s<=0&&($e.s=.9,Yt.strike(N,!1,{x:$e.x,z:$e.z}),Ai.burst($e.x+.5,$e.y+1,$e.z+.5,[.7,.3,1],20,5)),$e.t<=0){const t=$e;$e=null,tt.setBlock(t.x,t.y,t.z,jt),or("storm",t.x+.5,t.y+14,t.z+.5),he("roar"),ct.toast("¡LA TORMENTA WITHER HA DESPERTADO!")}}function VM(){const n=N.eye,t=N.lookDir(),e=ue&&ue.raycast(n,t,7),i=tt.raycast(n,t,7);if(e&&(!i||e.dist<i.dist)){const a=As(Rt.held());return ue.hit(oe==="creative"?12:a?a.dmg:1,e.crit,e),he("hit"),e.crit&&ct.toast("¡Golpe crítico al bloque de comandos!"),oe==="survival"&&a&&(Rt.wearHeld(1),ct.renderHotbar()),!0}const s=Xe.raycast(n,t,3.6),o=tt.raycast(n,t,3.6);if(!s||o&&o.dist<s.dist)return!1;const r=As(Rt.held()),l=oe==="creative"?20:r?r.dmg:1;return Xe.damage(s.mob,l,N.pos.x,N.pos.z),Ai.burst(s.mob.pos.x,s.mob.pos.y+s.mob.h*.6,s.mob.pos.z,[.8,.1,.1],6,2.5),oe==="survival"&&r&&(Rt.wearHeld(1),ct.renderHotbar()),!0}function WM(n){const t=N.eye,e=N.lookDir(),i=tt.raycast(t,e,oe==="creative"?7:5.5);Ca.visible=!!i,i&&Ca.position.set(i.x+.5,i.y+.5,i.z+.5),Zr=Math.max(0,Zr-n),Fo=Math.max(0,Fo-n),Na=Math.max(0,Na-n);let s=0;if(qe.left&&i){const o=i.x+","+i.y+","+i.z;if(o!==Yi.key&&(Yi.key=o,Yi.progress=0),Vi=Vi>0?Vi:.001,oe==="creative")Zr<=0&&(jh(i),Zr=.2);else{const r=qv(i.id,Rt.held())*(N.effects.fatigue>0?3:1);Yi.progress+=n/r,s=Math.min(1,Yi.progress),Math.floor(Yi.progress*6)!==Math.floor((Yi.progress-n/r)*6)&&he("hit"),Yi.progress>=1&&(jh(i),Yi.key="",Yi.progress=0,s=0)}Xo.position.set(i.x+.5,i.y+.5,i.z+.5)}else Yi.key="",Yi.progress=0;Xo.visible=s>0,s>0&&(Xo.material.map=Ku[Math.min(9,Math.floor(s*10))]),J("breakbar").classList.toggle("hidden",s<=0),J("breakbar").firstElementChild.style.width=s*100+"%",qe.right&&Fo<=0&&(Fo=.22,Lc())}function XM(n){for(const t of vn.values()){const[e,i,s]=t.slots,o=e&&Vv[e.id],r=o&&(!s||s.id===o[0]&&s.n+o[1]<=Cn(o[0]));t.burn>0&&(t.burn-=n),r?(t.burn<=0&&i&&nd[i.id]&&(t.burn=t.burnMax=nd[i.id],i.n--,i.n<=0&&(t.slots[1]=null)),t.burn>0?(t.cook+=n,t.cook>=Ru&&(t.cook=0,e.n--,e.n<=0&&(t.slots[0]=null),s?s.n+=o[1]:t.slots[2]={id:o[0],n:o[1],d:0})):t.cook=Math.max(0,t.cook-n*2)):t.cook=0}}function Ua(n){ji=n,Ee.cam=n,Qn(),J("bCam").textContent="Cámara: "+Ra[n],ct&&ct.toast("Cámara: "+Ra[n])}function qM(){if(N.dead){mn.group.visible=!1;return}if(mn.group.visible=ji!==0,nr.visible=ji===0,ji===0)return;const n=N.eye,t=N.lookDir().multiplyScalar(ji===1?-1:1),e=tt.raycast(n,t,4.2),i=e?Math.max(.3,e.dist-.3):4.2;di.position.copy(n).addScaledVector(t,i),ji===1?di.rotation.set(N.pitch,N.yaw,0,"YXZ"):di.rotation.set(-N.pitch,N.yaw+Math.PI,0,"YXZ")}function c0(n){const t=Rt.held(),e=t?t.id:0;mn.setHeld(e),e!==Td&&(Td=e,e&&(Vh.map=Ec(e),Vh.needsUpdate=!0),La.visible=!!e,qo.visible=!e,La.scale.setScalar(Cu(e)?.7:.6)),Vi>0&&(Vi+=n*3.5,Vi>=1&&(Vi=qe.left?.001:0));const i=Math.sin(Math.min(1,Vi)*Math.PI);nr.position.set(.5-i*.12,-.5+i*.08-Math.sin(performance.now()/400)*.004,-.85-i*.1),nr.rotation.set(-i*.9,-.35,-i*.2),e||(qo.position.set(0,-.1,-.1),qo.rotation.set(.4,0,0))}function za(n,t=null){Nt==="play"&&(Nt="inv",N.keys.clear(),qe.left=qe.right=!1,document.exitPointerLock(),ct.open(n,t))}function Cd(n){ct.close(),n?(Nt="play",yo()):(Nt="pause",Oi("pause"))}function rr(){ct.renderHotbar();const n=Rt.held();n&&ct.toast(po(n.id).name)}function YM(){os=0,ue&&(ue.dispose(),ue=null,Yt.boss=!1,Yt.set("rain"),J("bossbar").classList.add("hidden"),ct.toast("La tormenta se retira…")),$e=null,Nt="dead",he("die"),N.keys.clear(),qe.left=qe.right=!1;for(let n=0;n<36;n++){const t=Rt.slots[n];t&&(pi.spawn(N.pos.x,N.pos.y+1,N.pos.z,t.id,t.n),Rt.slots[n]=null)}ct.renderHotbar(),document.exitPointerLock(),Oi("death")}async function Ls(){if(!tt||!Da)return!1;const n={v:3,gen:2,dim:te,seed:Bn,mode:oe,time:ui.time,pos:N.pos.toArray(),yaw:N.yaw,pitch:N.pitch,kind:un,ob:gn,hp:N.hp,food:N.food,spawn:N.spawn.toArray(),inv:Rt.toJSON(),furnaces:[...vn.entries()],weather:Yt.toJSON(),quests:ai.toJSON(),xp:{l:ln,p:ss}},t=[];for(const[i,s]of Object.entries(Ki))for(const o of s.unsaved)s.chunks.has(o)&&t.push([i==="overworld"?o:(i==="nether"?"n:":"e:")+o,new Uint8Array(s.chunks.get(o))]);const e=await Fu(Da,n,t,{name:Tc,mode:oe,seed:Bn,created:ju,played:Math.floor(Ac),level:ln,thumb:Rc});if(e)for(const i of Object.values(Ki))i.unsaved.clear();return e}function KM(){try{const n=document.createElement("canvas");n.width=160,n.height=90,n.getContext("2d").drawImage(Hn,0,0,160,90),Rc=n.toDataURL("image/jpeg",.6)}catch{}}async function jM(){if(oo=!0,await new Promise(t=>setTimeout(t,120)),ae)return ct.toast("Multijugador: el servidor guarda el mundo"),!0;const n=await Ls();return ct.toast(n?"💾 Partida guardada":"⚠ No se pudo guardar"),n}async function Yl({id:n,name:t,seed:e,mode:i,saved:s,meta:o,created:r,played:l,nether:a,end:h,kind:f,net:c,welcome:d}){if(ae){ae.net.close();for(const x of ae.remotes.values())Ve.remove(x.model.group)}ae=c?{net:c,edits:{},remotes:new Map,posT:0}:null,ae&&AM(d.edits),Nt="loading",oe=i,Bn=e,un=f||o&&o.kind||"normal",gn={count:o&&o.ob&&o.ob.count||0},J("ob").classList.toggle("hidden",un!=="oneblock"),Da=n,Tc=t||"Mundo",ju=r||Date.now(),Ac=l||0,Rc=null,Oi("menu"),J("msg").textContent="Generando mundo…",J("menuBody").classList.add("hidden"),vn.clear();for(const x of Object.values(Ki))Ve.remove(x.group);Ki={},Pa={nether:a||new Map,end:h||new Map},Ia=!1,Zn=0,Yo=0,te=o&&o.dim||"overworld",Ki.overworld=$h("overworld",s),te!=="overworld"&&(Ki[te]=$h(te,Pa[te])),tt=Ki[te],tt.group.visible=!0,Rt=new q_,N=new X_(tt,di),N.mode=oe,mn||(mn=new Nu(Ve)),ui=new eM(Ve,di,ns),ui.setDimension(te),qh||(qh=new z_(Ve)),qu(),Yt=new i_(Ve,{world:()=>tt,sky:()=>ui,sound:(x,m)=>Hh(x,m),burst:(x,m,p)=>{Ai.burst(x,m,p,[1,1,.8],24,6),Ai.burst(x,m,p,[.3,.3,.35],14,4)},hurtPlayer:x=>N.damage(x),strikeMobs:(x,m)=>{for(const p of[...Xe.list])Math.hypot(p.pos.x-x,p.pos.z-m)<3.5&&Xe.damage(p,12,x,m)}}),Wh={world:()=>tt,explode:(x,m,p,M,b)=>Xl(x,m,p,M,b),toast:x=>ct.toast(x),sound:(x,m)=>Hh(x,m),burst:(x,m,p,M,b,v)=>Ai.burst(x,m,p,M,b,v),hurtPlayer:(x,m,p)=>N.damage(x,m,p),strikeNear:(x,m)=>Yt.strike(N,!1,{x,z:m}),minions:()=>Xe.list.filter(x=>x.def.hostile).length,effect:(x,m)=>{oe==="survival"&&(N.effects[x]=Math.max(N.effects[x],m))},darkness:x=>{os=x},player:()=>N,spawnMinion:x=>{for(let m=0;m<6;m++){const p=Math.random()*Math.PI*2,M=10+Math.random()*8,b=Math.floor(N.pos.x+Math.cos(p)*M),v=Math.floor(N.pos.z+Math.sin(p)*M),D=Pc(b,v);if(D!==null){const E=x||(te==="nether"?"piglin":te==="end"?"endermite":Math.random()<.6?"zombie":"creeper");Xe.add(E,b+.5,mo[E].fly?D+4:D,v+.5);return}}},loot:(x,m,p,M="storm")=>{for(const[b,v]of Ed[M]||Ed.storm)pi.spawn(x,m,p,b,v)},done:()=>{const x=ue?ue.type:"storm";ai.event("boss",x),bs(100),he("craft"),x==="dragon"&&te==="end"&&setTimeout(BM,1200),ue=null,Yt.boss=!1,os=0,Yt.state==="storm"&&Yt.set("rain"),J("bossbar").classList.add("hidden")}},ue=null,$e=null,Zi=null,os=0,ai=new U_({reward:x=>{for(const[m,p]of x){const M=Rt.add(m,p);M&&Kh(m,M)}ct.renderHotbar()},toast:x=>ct.toast(x),xp:bs,sound:he}),pi=new n_(Ve,tt),Ai=new s_(Ve,tt),Xe=new l_(Ve,tt,{effect:(x,m)=>{oe==="survival"&&(N.effects[x]=Math.max(N.effects[x]||0,m))},killed:(x,m)=>{ai.event("kill",x),bs(m)},tp:(x,m,p)=>{Ai.burst(x,m,p,[.7,.2,1],14,3),he("pop")},hurtPlayer:(x,m,p)=>N.damage(x,m,p),explode:Xl,drop:(x,m,p,M,b)=>pi.spawn(x,m,p,M,b),sound:he,puff:(x,m,p)=>Ai.burst(x,m,p,[.9,.9,.9],12,3)}),ct=new nM({inv:Rt,player:N,getMode:()=>oe,dropItem:Kh,sound:he,onSelect:rr,onCraft:(x,m)=>ai.event("craft",x,m),onArmorChange:()=>mn&&mn.setArmor(Rt.armor)}),ln=0,ss=0,N.events.onHurt=()=>{he("hurt");const x=J("vignette");x.classList.add("hurt"),setTimeout(()=>x.classList.remove("hurt"),120)},N.events.onStep=()=>he("step"),N.events.onLand=x=>he(x>3?"hurt":"place"),N.events.onSplash=()=>he("splash"),N.events.onDeath=YM,N.events.onArmor=()=>{Rt.wearArmor(1).length&&ct.toast("¡Se ha roto una pieza de tu armadura!"),ct.isOpen&&ct.render()},N.events.onVoid=()=>{if(un==="oneblock"&&te==="overworld")N.pos.set(.5,65.01,.5),N.vel.set(0,0,0),oe==="survival"&&N.damage(3),ct.toast("Volviste al bloque…");else if(te==="end"){N.damage(6);const x=tt.topY(0,30);N.pos.set(.5,(x>0?x:64)+1,30.5),N.vel.set(0,0,0),ct.toast("Caíste al vacío…")}else N.pos.y=70,N.vel.set(0,0,0),N.damage(4)},Xe.dim=te;let u,g;if(o?(Yt.load(o.weather),ai.load(o.quests),o.xp&&(ln=o.xp.l,ss=o.xp.p),Rt.load(o.inv),(o.furnaces||[]).forEach(([x,m])=>vn.set(x,m)),ui.time=o.time,N.hp=o.hp,N.food=o.food,N.yaw=o.yaw,N.pitch=o.pitch,N.spawn.fromArray(o.spawn),N.pos.fromArray(o.pos),u=Math.floor(o.pos[0]),g=Math.floor(o.pos[2])):un==="oneblock"?(u=0,g=0,N.pos.set(.5,66,.5)):([u,g]=mM(Bn),N.pos.set(u+.5,70,g+.5)),await new Promise(x=>{const m=()=>{const p=tt.update(u,g,3,10);J("msg").textContent="Generando mundo… "+Math.max(0,100-p*2)+"%",p>0?setTimeout(m,0):x()};m()}),un==="oneblock"&&(xM(),o||(N.pos.set(.5,65.01,.5),N.spawn.copy(N.pos)),Ju()),!o&&un!=="oneblock"){const x=Cc(u,g);N.pos.copy(x),N.spawn.copy(x)}else N.vel.set(0,0,0);if(ct.renderHotbar(),ct.renderStats(),c0(0),Ua(ji),window.__game={get mp(){return ae},get world(){return tt},player:N,inv:Rt,sky:ui,mobs:Xe,drops:pi,ui:ct,camera:di,scene:Ve,renderer:bi,get mode(){return oe},set mode(x){oe=x,N.mode=x},get state(){return Nt},set state(x){Nt=x},explode:Xl,saveGame:Ls,openInventory:za,mouse:qe,useItem:Lc,breakBlock:jh,furnaces:vn,setCam:Ua,get weather(){return Yt},get boss(){return ue},summon:(x,m,p)=>or("storm",x,m,p),summonBoss:Dc,summonMob:Qu,get quests(){return ai},materials:ns,renderer:bi,get composer(){return Ii},changeDimension:qa,get dim(){return te},get dims(){return Ki},lightPortal:a0,findPortalFrame:o0,useEyeOnFrame:l0,buildNetherPortal:h0,openPanel:Nn,closePanel:ts,addXp:bs,terrainInfo:Ln,openChest:r0,rollLoot:Ic,get xp(){return[ln,ss]}},ae){LM();for(const x of d.players)s0(x.id,x.name,x.color);ui.time=d.time,da("Conectado · "+(d.players.length+1)+" jugador(es). Enter = chat","sys")}Nt="play",Oi(null),yo(),setTimeout(()=>{document.pointerLockElement!==Hn&&Nt==="play"&&!rs&&(Nt="pause",Oi("pause"))},1500)}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Hn?(Nt==="pause"||Nt==="play")&&(Nt="play",Oi(null)):(N&&N.keys.clear(),qe.left=qe.right=!1,Nt==="play"&&!rs&&(Nt="pause",Oi("pause")))});document.addEventListener("mousemove",n=>{Nt!=="play"||document.pointerLockElement!==Hn||(N.yaw-=n.movementX*.0022*Ee.sens,N.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,N.pitch-n.movementY*.0022*Ee.sens)))});document.addEventListener("keydown",n=>{if(n.isTrusted&&(rs=!1),ws(),Nt==="panel"){if(Zi==="chatp"&&n.code==="Enter"){n.preventDefault(),PM(J("chatIn").value),ts(!0);return}n.code==="Escape"?ts(!1):n.code==="KeyB"&&Zi==="summon"||n.code==="KeyM"&&Zi==="quests"?ts(!0):n.code==="KeyP"&&Zi==="padcfg"&&ts(!1);return}if(Nt==="inv"){n.code==="KeyE"?(n.preventDefault(),Cd(!0)):n.code==="Escape"&&Cd(!1);return}if(Nt==="play"){if(n.code.startsWith("Digit")){const t=+n.code.slice(5)-1;t>=0&&t<9&&(Rt.selected=t,rr());return}switch(n.code){case"KeyE":za(2);return;case"KeyB":Nn("summon");return;case"KeyP":Nn("padcfg");return;case"Enter":ae&&(n.preventDefault(),Nn("chatp"));return;case"KeyM":Nn("quests");return;case"F3":n.preventDefault(),J("info").classList.toggle("hidden");return;case"KeyT":if(!n.repeat){const t=Yt.cycle();ct.toast("Clima: "+Bh[t])}return;case"KeyV":case"F5":n.preventDefault(),n.repeat||Ua((ji+1)%3);return;case"KeyF":oe==="creative"&&!n.repeat&&(N.flying=!N.flying,N.vel.y=0,ct.toast(N.flying?"Vuelo activado":"Vuelo desactivado"));return;case"KeyG":n.repeat||(oe=oe==="creative"?"survival":"creative",N.mode=oe,oe==="survival"&&(N.flying=!1),ct.renderStats(),ct.toast("Modo "+(oe==="creative"?"creativo":"supervivencia")));return;case"KeyQ":if(oe==="survival"&&!n.repeat){const t=Rt.held();t&&(Kh(t.id,1),Rt.consumeHeld(1),ct.renderHotbar());return}break}(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),N.keys.add(n.code)}});document.addEventListener("keyup",n=>N&&N.keys.delete(n.code));document.addEventListener("wheel",n=>{Nt==="play"&&(Rt.selected=(Rt.selected+Math.sign(n.deltaY)+9)%9,rr())});Hn.addEventListener("contextmenu",n=>n.preventDefault());function f0(){qe.left=!0,Vi=Vi||.001,Na<=0&&VM()&&(Na=.4,qe.left=!1)}function d0(){qe.right=!0,Fo=.22,Lc()}document.addEventListener("mousedown",n=>{if(n.isTrusted&&(rs=!1),n.isTrusted&&Nt==="play"&&document.pointerLockElement!==Hn){yo();return}Nt!=="play"||document.pointerLockElement!==Hn||(n.button===0?f0():n.button===2&&d0())});document.addEventListener("mouseup",n=>{n.button===0&&(qe.left=!1),n.button===2&&(qe.right=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&Nt!=="menu"&&Ls()});addEventListener("beforeunload",()=>{tt&&Nt!=="menu"&&Ls()});function Nc(){bi.setSize(innerWidth,innerHeight,!1),Ii&&Ii.setSize(innerWidth,innerHeight),di.aspect=innerWidth/innerHeight,di.updateProjectionMatrix()}addEventListener("resize",Nc);Nc();function Oc(){ws(),Oi(null),Nt="play",yo()}J("bResume").onclick=Oc;J("bPPad").onclick=()=>{Oi(null),Nt="play",Nn("padcfg")};J("bSave").onclick=async()=>{oo=!0,await new Promise(n=>setTimeout(n,120)),await Ls(),location.reload()};J("bSaveNow").onclick=async()=>{await jM(),J("bSaveNow").textContent="💾 Guardado ✔",setTimeout(()=>J("bSaveNow").textContent="💾 Guardar partida",1500)};J("bExport").onclick=async()=>{await Ls();const n=await Gu(Da),t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=Tc.replace(/[^\w\-]+/g,"_")+".mcw",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3)};J("bRespawn").onclick=async()=>{if(ws(),Oi(null),te!=="overworld"&&(Nt="play",await qa("overworld",{respawn:!0})),N.respawn(),te==="overworld"){const n=Cc(Math.floor(N.spawn.x),Math.floor(N.spawn.z));N.pos.copy(n)}Nt="play",ct.renderStats(),yo()};J("bCam").onclick=()=>Ua((ji+1)%3);J("bQuality").onclick=()=>{Ee.quality=(Ee.quality+1)%Gh.length,Qn(),qu(),ct&&ct.toast("Gráficos: "+Gh[Ee.quality].name)};J("bPSummon").onclick=()=>{Oi(null),Nt="play",Nn("summon")};J("bPQuests").onclick=()=>{Oi(null),Nt="play",Nn("quests")};const Ya=(n,t,e,i,s)=>{const o=J(n),r=J(t);o.value=Ee[e],r.textContent=i(Ee[e]),s&&s(Ee[e]),o.oninput=l=>{Ee[e]=+l.target.value,r.textContent=i(Ee[e]),s&&s(Ee[e]),Qn()}};Ya("rRadius","vRadius","radius",n=>n,n=>fa=n);Ya("rFov","vFov","fov",n=>n);Ya("rSens","vSens","sens",n=>n.toFixed(1));Ya("rVol","vVol","vol",n=>Math.round(n*100),n=>sM(n));J("bCam").textContent="Cámara: "+Ra[ji];de=new F_(Ee.pad);const Ho=new Set,Ze={x:innerWidth/2,y:innerHeight/2};let Go=!1,Ko=!1,jo=!1,Ld="",Jr=null;const Zh=(n,t,e)=>Math.max(t,Math.min(e,n)),u0=n=>{document.dispatchEvent(new KeyboardEvent("keydown",{code:n,bubbles:!0})),document.dispatchEvent(new KeyboardEvent("keyup",{code:n,bubbles:!0}))};function pa(n,t){t?Ho.has(n)||(Ho.add(n),N.keys.add(n)):Ho.has(n)&&(Ho.delete(n),N.keys.delete(n))}function Jh(){if(N){for(const n of[...Ho])pa(n,!1);N.analog=null,Go=!1,Ko&&(Ko=!1,qe.left=!1),jo&&(jo=!1,qe.right=!1)}}function p0(){if(Nt==="play"){Nt="pause",Oi("pause");try{document.exitPointerLock()}catch{}}else Nt==="pause"?Oc():m0()}function m0(){Nt==="inv"?u0("KeyE"):Nt==="panel"?ts(Zi!=="padcfg"):Nt==="pause"&&Oc()}function g0(){return[...document.querySelectorAll("button, input[type=range], .slot[data-g]")].filter(n=>{if(n.disabled||n.offsetParent===null)return!1;const t=n.getBoundingClientRect();return t.width>0&&t.height>0&&t.bottom>0&&t.top<innerHeight&&t.right>0&&t.left<innerWidth})}function $M(){const n=g0();if(!n.length)return;const e=(n.find(i=>i.classList.contains("primary"))||n.find(i=>i.dataset.g==="inv"&&i.parentElement.id==="invHot")||n[0]).getBoundingClientRect();Ze.x=e.left+e.width/2,Ze.y=e.top+e.height/2}function ZM(n){let t=null,e=1e9;for(const i of g0()){const s=i.getBoundingClientRect(),o=s.left+s.width/2,r=s.top+s.height/2,l=o-Ze.x,a=r-Ze.y,h=l*n[0]+a*n[1];if(h<5)continue;const f=h+Math.abs(l*n[1]-a*n[0])*2.4;f<e&&(e=f,t=[o,r])}t&&(Ze.x=t[0],Ze.y=t[1])}function Dd(n){const t=document.elementFromPoint(Ze.x,Ze.y);if(!t)return;ws();const e=t.closest&&t.closest("input[type=range]");if(e&&n===0){const s=e.getBoundingClientRect(),o=Zh((Ze.x-s.left)/s.width,0,1),r=+e.min,l=+e.max,a=+e.step||1;e.value=Math.round((r+o*(l-r))/a)*a,e.dispatchEvent(new Event("input",{bubbles:!0}));return}const i={bubbles:!0,cancelable:!0,clientX:Ze.x,clientY:Ze.y,button:n,view:window};t.dispatchEvent(new MouseEvent("mousedown",i)),t.dispatchEvent(new MouseEvent("mouseup",i)),n===0?t.dispatchEvent(new MouseEvent("click",i)):t.dispatchEvent(new MouseEvent("contextmenu",i))}function JM(n,t){const e=J("padcursor");e.classList.remove("hidden");const i=Nt+"|"+[...document.querySelectorAll("#overlay > div:not(.hidden)")].map(h=>h.id).join(",")+"|"+(Zi||"");i!==Ld&&(Ld=i,$M());const s=de.stick(n.axes,0,1,1.25),o=de.stick(n.axes,2,3,1);let r=!1;s.m>0&&(Ze.x=Zh(Ze.x+s.x*t*1100,0,innerWidth-1),Ze.y=Zh(Ze.y+s.y*t*1100,0,innerHeight-1),r=!0),e.style.left=Ze.x+"px",e.style.top=Ze.y+"px";const l=document.elementFromPoint(Ze.x,Ze.y),a=l&&l.closest?l.closest("button, .slot[data-g], input"):null;if(a!==Jr&&(Jr&&Jr.classList.remove("padhover"),Jr=a,a&&a.classList.add("padhover")),r&&l&&l.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0,clientX:Ze.x,clientY:Ze.y})),o.m>0){let h=l;for(;h&&h!==document.body;){if(h.scrollHeight>h.clientHeight+4&&/(auto|scroll)/.test(getComputedStyle(h).overflowY)){h.scrollTop+=o.y*t*800;break}h=h.parentElement}}[[12,[0,-1]],[13,[0,1]],[14,[-1,0]],[15,[1,0]]].forEach(([h,f])=>{n.edge[h]&&ZM(f)}),de.edge("jump")&&Dd(0),de.edge("fall")&&Dd(2),(de.edge("drop")||de.edge("inventory")&&Nt==="inv")&&m0(),de.edge("pause")&&p0()}function QM(n,t){const e=de.stick(n.axes,0,1,1),i=de.stick(n.axes,2,3),s=Ee.pad;N.analog=e.m>0?{x:e.x,y:-e.y}:null,de.edge("sprint")&&(Go=!Go),e.m<.2&&(Go=!1),pa("ShiftLeft",Go&&e.y<-.2),i.m>0&&(N.yaw-=i.x*s.lookX*Ee.sens*t,N.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,N.pitch-i.y*s.lookY*Ee.sens*t*(s.invertY?-1:1)))),pa("Space",de.down("jump")),pa("KeyQ",de.down("fall")&&N.flying);const o=de.down("attack"),r=de.down("use");o&&!Ko&&f0(),!o&&Ko&&(qe.left=!1),Ko=o,r&&!jo&&d0(),!r&&jo&&(qe.right=!1),jo=r,de.edge("prev")&&(Rt.selected=(Rt.selected+8)%9,rr()),de.edge("next")&&(Rt.selected=(Rt.selected+1)%9,rr());const l={inventory:"KeyE",drop:"KeyQ",summon:"KeyB",quests:"KeyM",camera:"KeyV",fly:"KeyF",weather:"KeyT",debug:"F3",mode:"KeyG",config:"KeyP"};for(const[a,h]of Object.entries(l))de.edge(a)&&u0(h);de.edge("pause")&&p0()}function t2(n){const t=de.poll(),e=J("padcursor");if(!t.connected){Jh(),e.classList.add("hidden");return}t.busy||(t.any&&!rs&&(rs=!0),Zi==="padcfg"&&e2(t),Nt==="play"&&tt&&N?(e.classList.add("hidden"),(rs||t.any)&&QM(t,n)):(Jh(),["menu","pause","inv","panel","dead"].includes(Nt)?JM(t,n):e.classList.add("hidden")))}addEventListener("gamepadconnected",n=>{rs=!0,ct&&ct.toast("🎮 Mando conectado"),J("msg")&&Nt==="menu"&&(J("msg").textContent="🎮 Mando conectado: mueve el cursor con el stick izquierdo y pulsa ✕")});addEventListener("gamepaddisconnected",()=>{Jh(),ct&&ct.toast("🎮 Mando desconectado")});function to(){const n=Ee.pad,t=J("padStatus");t.className=de.connected?"ok":"bad",t.textContent=de.connected?"✔ Conectado: "+de.id:"✖ No hay mando: conéctalo por USB/Bluetooth y pulsa cualquier botón (los navegadores no lo ven hasta entonces).",J("padMap").innerHTML=Ou.map(i=>`<div class="prow"><span>${i.label}</span><b>${pd[n.map[i.id]]||"Botón "+n.map[i.id]}</b><button data-pa="${i.id}">Cambiar</button></div>`).join("");const e=(i,s,o,r)=>{const l=J(i);l.value=n[o],J(s).textContent=r(n[o]),l.oninput=a=>{n[o]=+a.target.value,J(s).textContent=r(n[o]),Qn()}};e("pLookX","vLookX","lookX",i=>i.toFixed(1)),e("pLookY","vLookY","lookY",i=>i.toFixed(1)),e("pDead","vDead","deadzone",i=>i.toFixed(2)),e("pCurve","vCurve","curve",i=>i.toFixed(1)),J("pInvert").textContent="Invertir Y: "+(n.invertY?"sí":"no"),J("pRumble").textContent="Vibración: "+(n.rumble?"sí":"no"),J("padTest").innerHTML=pd.map((i,s)=>`<span class="chip" data-b="${s}">${i}</span>`).join("")+'<div class="axis" data-ax="0"><i></i></div><div class="axis" data-ax="1"><i></i></div><div class="axis" data-ax="2"><i></i></div><div class="axis" data-ax="3"><i></i></div>'}function e2(n){document.querySelectorAll("#padTest .chip").forEach(e=>e.classList.toggle("on",!!n.down[+e.dataset.b])),document.querySelectorAll("#padTest .axis").forEach(e=>{const i=n.axes[+e.dataset.ax]||0;e.firstElementChild.style.left=(i+1)/2*(e.clientWidth-8)+"px"});const t=J("padStatus");t&&de.connected&&!t.classList.contains("ok")&&to()}J("padcfg").addEventListener("click",n=>{const t=Ee.pad,e=n.target.closest("button");if(e){if(e.dataset.pa){if(!de.connected){ct.toast("Conecta el mando y pulsa un botón");return}const i=e.dataset.pa;e.textContent="Pulsa un botón…",e.classList.add("listen"),de.listen(s=>{const o=t.map[i],r=Object.keys(t.map).find(l=>l!==i&&t.map[l]===s);r&&(t.map[r]=o),t.map[i]=s,Qn(),to()})}else if(e.id==="pInvert")t.invertY=!t.invertY,Qn(),to();else if(e.id==="pRumble")t.rumble=!t.rumble,Qn(),to(),t.rumble&&de.rumble(.6,.6,250);else if(e.id==="pReset"){const i=Fh();Object.assign(t,i),t.map=i.map,Qn(),to()}}});let Pd=performance.now(),Qr=0,Kl=0,jl=0;function x0(n){requestAnimationFrame(x0);const t=Math.min(.1,(n-Pd)/1e3);if(Pd=n,t2(t),!(!tt||Nt==="menu"||Nt==="loading")){if(Qr+=t,Kl++,Qr>=.5&&(jl=Math.round(Kl/Qr),Qr=0,Kl=0),Nt!=="pause"){{const a=Rt.held();N.canGlide=!!(a&&a.id===A.ELYTRA),N.armorPts=Rt.armorPoints(),mn.setArmor(Rt.armor),OM(t)}N.update(t),mn.update(t,N,Vi),DM(t),qM(),XM(t);const e=Math.floor(N.pos.x),i=Math.floor(N.pos.z),s=te==="overworld",o=s&&ld(e,i,Bn)==="snow";s?Yt.update(t,N,di,o,N.headUnder):(Yt.rain.visible=Yt.snow.visible=!1,Yt.wind.x=Yt.wind.z=0,Yt.wind.s=.12,Yt.intensity=0);const r=s?tt.skyLit(e,Math.floor(N.pos.y+1.6),i):0;if(N.wind.x=Yt.wind.x*1.4*r*(Yt.state==="clear"?0:1),N.wind.z=Yt.wind.z*1.4*r*(Yt.state==="clear"?0:1),Ta.uTime.value+=t,Ta.uWind.value=.25+Yt.wind.s*2.2,s?_d(Yt.intensity*(.25+.75*r)*(N.headUnder?.2:1),Yt.wind.s*(.3+.7*r)*(Yt.state==="clear"?.25:1),Yt.t*.4):_d(0,.18,Yt.t*.2),ui.update(t,di.position,fa*16,N.headUnder,Yt.wind),qh.update(t,di,te),FM(t),wd=tt.update(N.pos.x,N.pos.z,fa,wd)>40?4:2,N.push.x=N.push.y=N.push.z=0,$e&&GM(t),ue&&(Yu.has(ue.type)&&(Yt.timer=9999,Yt.boss=!0),ue.update(t,N,tt),ue&&(J("bossbar").classList.remove("hidden"),J("bossFill").style.width=Math.max(0,ue.hp/ue.maxHp*100)+"%",J("bossPhase").textContent="Fase "+ue.phase,J("bossName").firstChild.nodeValue!==ue.name+" "&&(J("bossName").firstChild.nodeValue=ue.name+" "))),Xe.update(t,N,oe,ui.daylight,fa),pi.update(t,N,Rt,a=>{he("pop"),ct.renderHotbar(),ai.event("collect",a.id,a.n)}),Ai.update(t),Nt==="play"&&WM(t),c0(t),J("water").classList.toggle("hidden",!N.headUnder),di.fov+=(Ee.fov+(N.keys.has("ShiftLeft")&&N.keys.has("KeyW")?7:0)-di.fov)*Math.min(1,t*8),ct.isOpen&&ct.furnace&&(ct.furnaceBars(),Fl-=t,Fl<=0&&(Fl=.5,ct.render())),di.updateProjectionMatrix(),Wl-=t,Wl<=0){Wl=.2,ct.renderStats();const a=(ui.time*24+6)%24,h=Math.floor(a),f=Math.floor((a-h)*60);J("info").textContent=`${jl} FPS · ${oe==="creative"?"Creativo":"Supervivencia"}
XYZ ${N.pos.x.toFixed(1)} ${N.pos.y.toFixed(1)} ${N.pos.z.toFixed(1)}
Bioma: ${ld(Math.floor(N.pos.x),Math.floor(N.pos.z),Bn)} · ${String(h).padStart(2,"0")}:${String(f).padStart(2,"0")}
Mobs: ${Xe.list.length} · Clima: ${Bh[Yt.state]}${o?" (nieve)":""} · Viento ${(Yt.wind.s*20).toFixed(0)} km/h${N.flying?" · [VUELO]":""}`,J("cam").textContent="📷 "+Ra[ji]+"  [V]",J("mmInfo").textContent=`${Math.floor(N.pos.x)}, ${Math.floor(N.pos.y)}, ${Math.floor(N.pos.z)}
${String(h).padStart(2,"0")}:${String(f).padStart(2,"0")} · ${te==="overworld"?Bh[Yt.state]:Yh[te]}
📷 ${["1ª persona","3ª detrás","3ª delante"][ji]} · ${jl} FPS`,J("xpFill").style.width=ss/Xh(ln)*100+"%",J("xpLvl").textContent=ln,J("xp").style.visibility=oe==="survival"?"visible":"hidden";const c=[];N.effects.poison>0&&c.push(`<span style="border-color:#7a2">☠ Veneno ${Math.ceil(N.effects.poison)}s</span>`),N.effects.fatigue>0&&c.push(`<span style="border-color:#6cf">⛏ Fatiga ${Math.ceil(N.effects.fatigue)}s</span>`),N.effects.burn>0&&c.push(`<span style="border-color:#f80">🔥 Fuego ${Math.ceil(N.effects.burn)}s</span>`),N.effects.levitate>0&&c.push(`<span style="border-color:#fff">☁ Levitación ${Math.ceil(N.effects.levitate)}s</span>`),J("effects").innerHTML=c.join(""),J("darkness").style.opacity=os}Hl-=t,Hl<=0&&(Hl=.4,wM()),Gl-=t,Gl<=0&&(Gl=.5,TM()),Ac+=t,Vl+=t,Vl>25&&(Vl=0,oo=!0)}Xu&&(Wu.uniforms.uTime.value=n%1e4/1e3),Ii?Ii.render(t):bi.render(Ve,di),oo&&(oo=!1,KM(),Ls())}}requestAnimationFrame(x0);(async function(){const t=r=>(r>=3600?Math.floor(r/3600)+" h ":"")+Math.floor(r%3600/60)+" min",e=r=>{let l=7;for(const a of r)l=Math.imul(l,31)+a.charCodeAt(0)|0;return Math.abs(l)%9e5+1};async function i(){const r=await zu();return J("worldsBox").classList.toggle("hidden",!r.length),J("worldList").innerHTML=r.map(l=>`<div class="wcard" data-id="${l.id}"><img src="${l.thumb||""}" alt=""><div><b>${(l.name||"Mundo").replace(/</g,"&lt;")}</b><small>${l.mode==="creative"?"Creativo":"Supervivencia"} · nivel ${l.level||0} · ${t(l.played||0)} · ${new Date(l.updated).toLocaleString()}</small></div><div class="wb"><button class="play" data-act="play">▶ Jugar</button><button data-act="export" title="Exportar">⬇</button><button data-act="rename" title="Renombrar">✎</button><button data-act="del" title="Borrar">🗑</button></div></div>`).join(""),r}let s=await i();J("msg").textContent=s.length?"Elige un mundo o crea uno nuevo":"Elige cómo jugar";const o=(r,l)=>{ws();const a=J("wName").value.trim()||`Mundo ${s.length+1}`,h=J("wSeed").value.trim(),f=h?/^\d+$/.test(h)?Number(h)%9e5+1:e(h):1+Math.floor(Math.random()*9e5);Yl({id:Bu(),name:a,seed:f,mode:r,saved:new Map,meta:null,kind:l})};J("bSurvival").onclick=()=>o("survival"),J("bCreative").onclick=()=>o("creative"),J("bOneBlock").onclick=()=>o("survival","oneblock");try{J("mpUrl").value=localStorage.getItem("mcweb-mpurl")||"",J("mpName").value=localStorage.getItem("mcweb-mpname")||""}catch{}J("bMulti").onclick=async()=>{ws();let r=J("mpUrl").value.trim();if(!r){J("msg").textContent="Escribe la dirección del servidor";return}/^wss?:\/\//.test(r)||(r=(location.protocol==="https:"?"wss://":"ws://")+r);const l=J("mpName").value.trim()||"Jugador"+Math.floor(Math.random()*900+100);try{localStorage.setItem("mcweb-mpurl",J("mpUrl").value.trim()),localStorage.setItem("mcweb-mpname",J("mpName").value.trim())}catch{}J("msg").textContent="Conectando…";const a=new B_;try{const h=await a.connect(r,l);Yl({id:null,name:"Multijugador",seed:h.seed,mode:h.mode,saved:new Map,meta:null,net:a,welcome:h})}catch(h){J("msg").textContent="⚠ "+h.message+(location.protocol==="https:"&&r.startsWith("ws://")?" (esta página es https: usa wss:// o abre el juego en http://)":"")}},J("worldList").addEventListener("click",async r=>{const l=r.target.closest("button"),a=r.target.closest(".wcard");if(!l||!a)return;const h=a.dataset.id,f=s.find(c=>c.id===h);if(l.dataset.act==="play"){ws(),J("msg").textContent="Cargando mundo…";const c=await ku(h);if(!c.meta){J("msg").textContent="No se pudo leer este mundo";return}Yl({id:h,name:f.name,kind:c.meta.kind,seed:c.meta.seed,mode:c.meta.mode,saved:c.chunks,nether:c.nether,end:c.end,meta:c.meta,created:f.created,played:f.played})}else if(l.dataset.act==="del")confirm(`¿Borrar "${f.name}" para siempre?`)&&(await lM(h),s=await i());else if(l.dataset.act==="rename"){const c=prompt("Nuevo nombre",f.name);c&&c.trim()&&(await hM(h,c.trim().slice(0,28)),s=await i())}else if(l.dataset.act==="export"){const c=await Gu(h),d=document.createElement("a");d.href=URL.createObjectURL(c),d.download=(f.name||"mundo").replace(/[^\w\-]+/g,"_")+".mcw",d.click(),setTimeout(()=>URL.revokeObjectURL(d.href),4e3)}}),J("bImport").onclick=()=>J("fImport").click(),J("fImport").onchange=async r=>{const l=r.target.files[0];if(l){try{await dM(l),s=await i(),J("msg").textContent="✔ Partida importada"}catch{J("msg").textContent="⚠ Archivo no válido"}r.target.value=""}},window.__menu={refresh:async()=>s=await i()}})();
