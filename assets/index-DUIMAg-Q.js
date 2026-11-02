(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ql="170",Hf=0,Bc=1,Gf=2,xu=1,Mu=2,pi=3,Hi=0,un=1,_n=2,xi=0,Rs=1,wa=2,kc=3,Hc=4,Vf=5,Ji=100,Wf=101,Xf=102,qf=103,Yf=104,$f=200,Kf=201,jf=202,Zf=203,tl=204,el=205,Jf=206,Qf=207,td=208,ed=209,nd=210,id=211,sd=212,rd=213,ad=214,nl=0,il=1,sl=2,Is=3,rl=4,al=5,ol=6,ll=7,tc=0,od=1,ld=2,Fi=0,yu=1,Su=2,bu=3,ec=4,cd=5,Eu=6,Tu=7,wu=300,Us=301,Ns=302,cl=303,hl=304,Ya=306,Aa=1e3,ts=1001,ul=1002,ue=1003,hd=1004,Dr=1005,Un=1006,eo=1007,gi=1008,Si=1009,Au=1010,Ru=1011,_r=1012,nc=1013,is=1014,_i=1015,si=1016,ic=1017,sc=1018,Os=1020,Cu=35902,Pu=1021,Lu=1022,$n=1023,Du=1024,Iu=1025,Cs=1026,Fs=1027,Uu=1028,rc=1029,Nu=1030,ac=1031,oc=1033,_a=33776,va=33777,xa=33778,Ma=33779,fl=35840,dl=35841,pl=35842,ml=35843,gl=36196,_l=37492,vl=37496,xl=37808,Ml=37809,yl=37810,Sl=37811,bl=37812,El=37813,Tl=37814,wl=37815,Al=37816,Rl=37817,Cl=37818,Pl=37819,Ll=37820,Dl=37821,ya=36492,Il=36494,Ul=36495,Ou=36283,Nl=36284,Ol=36285,Fl=36286,ud=3200,fd=3201,lc=0,dd=1,Ni="",Ke="srgb",Gs="srgb-linear",$a="linear",ce="srgb",ls=7680,Gc=519,pd=512,md=513,gd=514,Fu=515,_d=516,vd=517,xd=518,Md=519,zl=35044,Vc="300 es",vi=2e3,Ra=2001;class Vs{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const Qe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Sa=Math.PI/180,Bl=180/Math.PI;function zi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Qe[i&255]+Qe[i>>8&255]+Qe[i>>16&255]+Qe[i>>24&255]+"-"+Qe[t&255]+Qe[t>>8&255]+"-"+Qe[t>>16&15|64]+Qe[t>>24&255]+"-"+Qe[e&63|128]+Qe[e>>8&255]+"-"+Qe[e>>16&255]+Qe[e>>24&255]+Qe[n&255]+Qe[n>>8&255]+Qe[n>>16&255]+Qe[n>>24&255]).toLowerCase()}function gn(i,t,e){return Math.max(t,Math.min(e,i))}function yd(i,t){return(i%t+t)%t}function no(i,t,e){return(1-e)*i+e*t}function ni(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function de(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Ct{constructor(t=0,e=0){Ct.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(gn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Xt{constructor(t,e,n,s,r,a,o,l,c){Xt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c)}set(t,e,n,s,r,a,o,l,c){const h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],g=n[8],_=s[0],m=s[3],d=s[6],b=s[1],y=s[4],v=s[7],P=s[2],T=s[5],A=s[8];return r[0]=a*_+o*b+l*P,r[3]=a*m+o*y+l*T,r[6]=a*d+o*v+l*A,r[1]=c*_+h*b+u*P,r[4]=c*m+h*y+u*T,r[7]=c*d+h*v+u*A,r[2]=f*_+p*b+g*P,r[5]=f*m+p*y+g*T,r[8]=f*d+p*v+g*A,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,g=e*u+n*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=u*_,t[1]=(s*c-h*n)*_,t[2]=(o*n-s*a)*_,t[3]=f*_,t[4]=(h*e-s*l)*_,t[5]=(s*r-o*e)*_,t[6]=p*_,t[7]=(n*l-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return this.premultiply(io.makeScale(t,e)),this}rotate(t){return this.premultiply(io.makeRotation(-t)),this}translate(t,e){return this.premultiply(io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const io=new Xt;function zu(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ca(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Sd(){const i=Ca("canvas");return i.style.display="block",i}const Wc={};function ar(i){i in Wc||(Wc[i]=!0,console.warn(i))}function bd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function Ed(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Td(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Qt={enabled:!0,workingColorSpace:Gs,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ce&&(i.r=Mi(i.r),i.g=Mi(i.g),i.b=Mi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ce&&(i.r=Ps(i.r),i.g=Ps(i.g),i.b=Ps(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Ni?$a:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function Mi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ps(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const Xc=[.64,.33,.3,.6,.15,.06],qc=[.2126,.7152,.0722],Yc=[.3127,.329],$c=new Xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kc=new Xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Qt.define({[Gs]:{primaries:Xc,whitePoint:Yc,transfer:$a,toXYZ:$c,fromXYZ:Kc,luminanceCoefficients:qc,workingColorSpaceConfig:{unpackColorSpace:Ke},outputColorSpaceConfig:{drawingBufferColorSpace:Ke}},[Ke]:{primaries:Xc,whitePoint:Yc,transfer:ce,toXYZ:$c,fromXYZ:Kc,luminanceCoefficients:qc,outputColorSpaceConfig:{drawingBufferColorSpace:Ke}}});let cs;class wd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{cs===void 0&&(cs=Ca("canvas")),cs.width=t.width,cs.height=t.height;const n=cs.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ca("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Mi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Mi(e[n]/255)*255):e[n]=Mi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Ad=0;class Bu{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ad++}),this.uuid=zi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(so(s[a].image)):r.push(so(s[a]))}else r=so(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function so(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?wd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Rd=0;class fn extends Vs{constructor(t=fn.DEFAULT_IMAGE,e=fn.DEFAULT_MAPPING,n=ts,s=ts,r=Un,a=gi,o=$n,l=Si,c=fn.DEFAULT_ANISOTROPY,h=Ni){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Rd++}),this.uuid=zi(),this.name="",this.source=new Bu(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ct(0,0),this.repeat=new Ct(1,1),this.center=new Ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==wu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Aa:t.x=t.x-Math.floor(t.x);break;case ts:t.x=t.x<0?0:1;break;case ul:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Aa:t.y=t.y-Math.floor(t.y);break;case ts:t.y=t.y<0?0:1;break;case ul:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}fn.DEFAULT_IMAGE=null;fn.DEFAULT_MAPPING=wu;fn.DEFAULT_ANISOTROPY=1;class pe{constructor(t=0,e=0,n=0,s=1){pe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const l=t.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],g=l[9],_=l[2],m=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(c+1)/2,v=(p+1)/2,P=(d+1)/2,T=(h+f)/4,A=(u+_)/4,C=(g+m)/4;return y>v&&y>P?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=A/n):v>P?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=C/s):P<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),n=A/r,s=C/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(u-_)/b,this.z=(f-h)/b,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Cd extends Vs{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new pe(0,0,t,e),this.scissorTest=!1,this.viewport=new pe(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Un,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new fn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new Bu(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fn extends Cd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class ku extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ue,this.minFilter=ue,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Pd extends fn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=ue,this.minFilter=ue,this.wrapR=ts,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Er{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const f=r[a+0],p=r[a+1],g=r[a+2],_=r[a+3];if(o===0){t[e+0]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u;return}if(o===1){t[e+0]=f,t[e+1]=p,t[e+2]=g,t[e+3]=_;return}if(u!==_||l!==f||c!==p||h!==g){let m=1-o;const d=l*f+c*p+h*g+u*_,b=d>=0?1:-1,y=1-d*d;if(y>Number.EPSILON){const P=Math.sqrt(y),T=Math.atan2(P,d*b);m=Math.sin(m*T)/P,o=Math.sin(o*T)/P}const v=o*b;if(l=l*m+f*v,c=c*m+p*v,h=h*m+g*v,u=u*m+_*v,m===1-o){const P=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=P,c*=P,h*=P,u*=P}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=u}static multiplyQuaternionsFlat(t,e,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],g=r[a+3];return t[e]=o*g+h*u+l*p-c*f,t[e+1]=l*g+h*f+c*u-o*p,t[e+2]=c*g+h*p+o*f-l*u,t[e+3]=h*g-o*u-l*f-c*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"YXZ":this._x=f*h*u+c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"ZXY":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u-f*p*g;break;case"ZYX":this._x=f*h*u-c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u+f*p*g;break;case"YZX":this._x=f*h*u+c*p*g,this._y=c*p*u+f*h*g,this._z=c*h*g-f*p*u,this._w=c*h*u-f*p*g;break;case"XZY":this._x=f*h*u-c*p*g,this._y=c*p*u-f*h*g,this._z=c*h*g+f*p*u,this._w=c*h*u+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],u=e[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(gn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let o=a*t._w+n*t._x+s*t._y+r*t._z;if(o<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,o=-o):this.copy(t),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-e;return this._w=p*a+e*this._w,this._x=p*n+e*this._x,this._y=p*s+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),u=Math.sin((1-e)*h)/c,f=Math.sin(e*h)/c;return this._w=a*u+this._w*f,this._x=n*u+this._x*f,this._y=s*u+this._y*f,this._z=r*u+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,n=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*n),h=2*(o*e-r*s),u=2*(r*n-a*e);return this.x=e+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return ro.copy(this).projectOnVector(t),this.sub(ro)}reflect(t){return this.sub(ro.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(gn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ro=new L,jc=new Er;class Tr{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Vn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Vn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Vn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,Vn):Vn.fromBufferAttribute(r,a),Vn.applyMatrix4(t.matrixWorld),this.expandByPoint(Vn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Ir.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ir.copy(n.boundingBox)),Ir.applyMatrix4(t.matrixWorld),this.union(Ir)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Vn),Vn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(js),Ur.subVectors(this.max,js),hs.subVectors(t.a,js),us.subVectors(t.b,js),fs.subVectors(t.c,js),Ri.subVectors(us,hs),Ci.subVectors(fs,us),Wi.subVectors(hs,fs);let e=[0,-Ri.z,Ri.y,0,-Ci.z,Ci.y,0,-Wi.z,Wi.y,Ri.z,0,-Ri.x,Ci.z,0,-Ci.x,Wi.z,0,-Wi.x,-Ri.y,Ri.x,0,-Ci.y,Ci.x,0,-Wi.y,Wi.x,0];return!ao(e,hs,us,fs,Ur)||(e=[1,0,0,0,1,0,0,0,1],!ao(e,hs,us,fs,Ur))?!1:(Nr.crossVectors(Ri,Ci),e=[Nr.x,Nr.y,Nr.z],ao(e,hs,us,fs,Ur))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Vn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Vn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(li[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),li[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),li[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),li[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),li[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),li[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),li[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),li[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(li),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const li=[new L,new L,new L,new L,new L,new L,new L,new L],Vn=new L,Ir=new Tr,hs=new L,us=new L,fs=new L,Ri=new L,Ci=new L,Wi=new L,js=new L,Ur=new L,Nr=new L,Xi=new L;function ao(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Xi.fromArray(i,r);const o=s.x*Math.abs(Xi.x)+s.y*Math.abs(Xi.y)+s.z*Math.abs(Xi.z),l=t.dot(Xi),c=e.dot(Xi),h=n.dot(Xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const Ld=new Tr,Zs=new L,oo=new L;class wr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ld.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Zs.subVectors(t,this.center);const e=Zs.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(Zs,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(oo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Zs.copy(t.center).add(oo)),this.expandByPoint(Zs.copy(t.center).sub(oo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ci=new L,lo=new L,Or=new L,Pi=new L,co=new L,Fr=new L,ho=new L;class cc{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,ci)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=ci.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(ci.copy(this.origin).addScaledVector(this.direction,e),ci.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){lo.copy(t).add(e).multiplyScalar(.5),Or.copy(e).sub(t).normalize(),Pi.copy(this.origin).sub(lo);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Or),o=Pi.dot(this.direction),l=-Pi.dot(Or),c=Pi.lengthSq(),h=Math.abs(1-a*a);let u,f,p,g;if(h>0)if(u=a*l-o,f=a*o-l,g=r*h,u>=0)if(f>=-g)if(f<=g){const _=1/h;u*=_,f*=_,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-g?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=g?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lo).addScaledVector(Or,f),p}intersectSphere(t,e){ci.subVectors(t.center,this.origin);const n=ci.dot(this.direction),s=ci.dot(ci)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),h>=0?(r=(t.min.y-f.y)*h,a=(t.max.y-f.y)*h):(r=(t.max.y-f.y)*h,a=(t.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(t.min.z-f.z)*u,l=(t.max.z-f.z)*u):(o=(t.max.z-f.z)*u,l=(t.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,ci)!==null}intersectTriangle(t,e,n,s,r){co.subVectors(e,t),Fr.subVectors(n,t),ho.crossVectors(co,Fr);let a=this.direction.dot(ho),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Pi.subVectors(this.origin,t);const l=o*this.direction.dot(Fr.crossVectors(Pi,Fr));if(l<0)return null;const c=o*this.direction.dot(co.cross(Pi));if(c<0||l+c>a)return null;const h=-o*Pi.dot(ho);return h<0?null:this.at(h/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ye{constructor(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m){ye.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m)}set(t,e,n,s,r,a,o,l,c,h,u,f,p,g,_,m){const d=this.elements;return d[0]=t,d[4]=e,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=g,d[11]=_,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ye().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/ds.setFromMatrixColumn(t,0).length(),r=1/ds.setFromMatrixColumn(t,1).length(),a=1/ds.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=-l*u,e[8]=c,e[1]=p+g*c,e[5]=f-_*c,e[9]=-o*l,e[2]=_-f*c,e[6]=g+p*c,e[10]=a*l}else if(t.order==="YXZ"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f+_*o,e[4]=g*o-p,e[8]=a*c,e[1]=a*u,e[5]=a*h,e[9]=-o,e[2]=p*o-g,e[6]=_+f*o,e[10]=a*l}else if(t.order==="ZXY"){const f=l*h,p=l*u,g=c*h,_=c*u;e[0]=f-_*o,e[4]=-a*u,e[8]=g+p*o,e[1]=p+g*o,e[5]=a*h,e[9]=_-f*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){const f=a*h,p=a*u,g=o*h,_=o*u;e[0]=l*h,e[4]=g*c-p,e[8]=f*c+_,e[1]=l*u,e[5]=_*c+f,e[9]=p*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=_-f*u,e[8]=g*u+p,e[1]=u,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=p*u+g,e[10]=f-_*u}else if(t.order==="XZY"){const f=a*l,p=a*c,g=o*l,_=o*c;e[0]=l*h,e[4]=-u,e[8]=c*h,e[1]=f*u+_,e[5]=a*h,e[9]=p*u-g,e[2]=g*u-p,e[6]=o*h,e[10]=_*u+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Dd,t,Id)}lookAt(t,e,n){const s=this.elements;return Mn.subVectors(t,e),Mn.lengthSq()===0&&(Mn.z=1),Mn.normalize(),Li.crossVectors(n,Mn),Li.lengthSq()===0&&(Math.abs(n.z)===1?Mn.x+=1e-4:Mn.z+=1e-4,Mn.normalize(),Li.crossVectors(n,Mn)),Li.normalize(),zr.crossVectors(Mn,Li),s[0]=Li.x,s[4]=zr.x,s[8]=Mn.x,s[1]=Li.y,s[5]=zr.y,s[9]=Mn.y,s[2]=Li.z,s[6]=zr.z,s[10]=Mn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],g=n[2],_=n[6],m=n[10],d=n[14],b=n[3],y=n[7],v=n[11],P=n[15],T=s[0],A=s[4],C=s[8],M=s[12],x=s[1],R=s[5],D=s[9],U=s[13],z=s[2],K=s[6],q=s[10],Y=s[14],k=s[3],et=s[7],nt=s[11],mt=s[15];return r[0]=a*T+o*x+l*z+c*k,r[4]=a*A+o*R+l*K+c*et,r[8]=a*C+o*D+l*q+c*nt,r[12]=a*M+o*U+l*Y+c*mt,r[1]=h*T+u*x+f*z+p*k,r[5]=h*A+u*R+f*K+p*et,r[9]=h*C+u*D+f*q+p*nt,r[13]=h*M+u*U+f*Y+p*mt,r[2]=g*T+_*x+m*z+d*k,r[6]=g*A+_*R+m*K+d*et,r[10]=g*C+_*D+m*q+d*nt,r[14]=g*M+_*U+m*Y+d*mt,r[3]=b*T+y*x+v*z+P*k,r[7]=b*A+y*R+v*K+P*et,r[11]=b*C+y*D+v*q+P*nt,r[15]=b*M+y*U+v*Y+P*mt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],u=t[6],f=t[10],p=t[14],g=t[3],_=t[7],m=t[11],d=t[15];return g*(+r*l*u-s*c*u-r*o*f+n*c*f+s*o*p-n*l*p)+_*(+e*l*p-e*c*f+r*a*f-s*a*p+s*c*h-r*l*h)+m*(+e*c*u-e*o*p-r*a*u+n*a*p+r*o*h-n*c*h)+d*(-s*o*h-e*l*u+e*o*f+s*a*u-n*a*f+n*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],u=t[9],f=t[10],p=t[11],g=t[12],_=t[13],m=t[14],d=t[15],b=u*m*c-_*f*c+_*l*p-o*m*p-u*l*d+o*f*d,y=g*f*c-h*m*c-g*l*p+a*m*p+h*l*d-a*f*d,v=h*_*c-g*u*c+g*o*p-a*_*p-h*o*d+a*u*d,P=g*u*l-h*_*l-g*o*f+a*_*f+h*o*m-a*u*m,T=e*b+n*y+s*v+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/T;return t[0]=b*A,t[1]=(_*f*r-u*m*r-_*s*p+n*m*p+u*s*d-n*f*d)*A,t[2]=(o*m*r-_*l*r+_*s*c-n*m*c-o*s*d+n*l*d)*A,t[3]=(u*l*r-o*f*r-u*s*c+n*f*c+o*s*p-n*l*p)*A,t[4]=y*A,t[5]=(h*m*r-g*f*r+g*s*p-e*m*p-h*s*d+e*f*d)*A,t[6]=(g*l*r-a*m*r-g*s*c+e*m*c+a*s*d-e*l*d)*A,t[7]=(a*f*r-h*l*r+h*s*c-e*f*c-a*s*p+e*l*p)*A,t[8]=v*A,t[9]=(g*u*r-h*_*r-g*n*p+e*_*p+h*n*d-e*u*d)*A,t[10]=(a*_*r-g*o*r+g*n*c-e*_*c-a*n*d+e*o*d)*A,t[11]=(h*o*r-a*u*r-h*n*c+e*u*c+a*n*p-e*o*p)*A,t[12]=P*A,t[13]=(h*_*s-g*u*s+g*n*f-e*_*f-h*n*m+e*u*m)*A,t[14]=(g*o*s-a*_*s-g*n*l+e*_*l+a*n*m-e*o*m)*A,t[15]=(a*u*s-h*o*s+h*n*l-e*u*l-a*n*f+e*o*f)*A,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,g=r*u,_=a*h,m=a*u,d=o*u,b=l*c,y=l*h,v=l*u,P=n.x,T=n.y,A=n.z;return s[0]=(1-(_+d))*P,s[1]=(p+v)*P,s[2]=(g-y)*P,s[3]=0,s[4]=(p-v)*T,s[5]=(1-(f+d))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+y)*A,s[9]=(m-b)*A,s[10]=(1-(f+_))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=ds.set(s[0],s[1],s[2]).length();const a=ds.set(s[4],s[5],s[6]).length(),o=ds.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Wn.copy(this);const c=1/r,h=1/a,u=1/o;return Wn.elements[0]*=c,Wn.elements[1]*=c,Wn.elements[2]*=c,Wn.elements[4]*=h,Wn.elements[5]*=h,Wn.elements[6]*=h,Wn.elements[8]*=u,Wn.elements[9]*=u,Wn.elements[10]*=u,e.setFromRotationMatrix(Wn),n.x=r,n.y=a,n.z=o,this}makePerspective(t,e,n,s,r,a,o=vi){const l=this.elements,c=2*r/(e-t),h=2*r/(n-s),u=(e+t)/(e-t),f=(n+s)/(n-s);let p,g;if(o===vi)p=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Ra)p=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,n,s,r,a,o=vi){const l=this.elements,c=1/(e-t),h=1/(n-s),u=1/(a-r),f=(e+t)*c,p=(n+s)*h;let g,_;if(o===vi)g=(a+r)*u,_=-2*u;else if(o===Ra)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const ds=new L,Wn=new ye,Dd=new L(0,0,0),Id=new L(1,1,1),Li=new L,zr=new L,Mn=new L,Zc=new ye,Jc=new Er;class Zn{constructor(t=0,e=0,n=0,s=Zn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(e){case"XYZ":this._y=Math.asin(gn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-gn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(gn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-gn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(gn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-gn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Zc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Zc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Jc.setFromEuler(this),this.setFromQuaternion(Jc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zn.DEFAULT_ORDER="XYZ";class Hu{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Ud=0;const Qc=new L,ps=new Er,hi=new ye,Br=new L,Js=new L,Nd=new L,Od=new Er,th=new L(1,0,0),eh=new L(0,1,0),nh=new L(0,0,1),ih={type:"added"},Fd={type:"removed"},ms={type:"childadded",child:null},uo={type:"childremoved",child:null};class Fe extends Vs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ud++}),this.uuid=zi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Fe.DEFAULT_UP.clone();const t=new L,e=new Zn,n=new Er,s=new L(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ye},normalMatrix:{value:new Xt}}),this.matrix=new ye,this.matrixWorld=new ye,this.matrixAutoUpdate=Fe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.multiply(ps),this}rotateOnWorldAxis(t,e){return ps.setFromAxisAngle(t,e),this.quaternion.premultiply(ps),this}rotateX(t){return this.rotateOnAxis(th,t)}rotateY(t){return this.rotateOnAxis(eh,t)}rotateZ(t){return this.rotateOnAxis(nh,t)}translateOnAxis(t,e){return Qc.copy(t).applyQuaternion(this.quaternion),this.position.add(Qc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(th,t)}translateY(t){return this.translateOnAxis(eh,t)}translateZ(t){return this.translateOnAxis(nh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(hi.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?Br.copy(t):Br.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Js.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?hi.lookAt(Js,Br,this.up):hi.lookAt(Br,Js,this.up),this.quaternion.setFromRotationMatrix(hi),s&&(hi.extractRotation(s.matrixWorld),ps.setFromRotationMatrix(hi),this.quaternion.premultiply(ps.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ih),ms.child=t,this.dispatchEvent(ms),ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Fd),uo.child=t,this.dispatchEvent(uo),uo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),hi.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),hi.multiply(t.parent.matrixWorld)),t.applyMatrix4(hi),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ih),ms.child=t,this.dispatchEvent(ms),ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,t,Nd),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Js,Od,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){const o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),u=a(t.shapes),f=a(t.skeletons),p=a(t.animations),g=a(t.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Fe.DEFAULT_UP=new L(0,1,0);Fe.DEFAULT_MATRIX_AUTO_UPDATE=!0;Fe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Xn=new L,ui=new L,fo=new L,fi=new L,gs=new L,_s=new L,sh=new L,po=new L,mo=new L,go=new L,_o=new pe,vo=new pe,xo=new pe;class Tn{constructor(t=new L,e=new L,n=new L){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),Xn.subVectors(t,e),s.cross(Xn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){Xn.subVectors(s,e),ui.subVectors(n,e),fo.subVectors(t,e);const a=Xn.dot(Xn),o=Xn.dot(ui),l=Xn.dot(fo),c=ui.dot(ui),h=ui.dot(fo),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-p-g,g,p)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,fi)===null?!1:fi.x>=0&&fi.y>=0&&fi.x+fi.y<=1}static getInterpolation(t,e,n,s,r,a,o,l){return this.getBarycoord(t,e,n,s,fi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,fi.x),l.addScaledVector(a,fi.y),l.addScaledVector(o,fi.z),l)}static getInterpolatedAttribute(t,e,n,s,r,a){return _o.setScalar(0),vo.setScalar(0),xo.setScalar(0),_o.fromBufferAttribute(t,e),vo.fromBufferAttribute(t,n),xo.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(_o,r.x),a.addScaledVector(vo,r.y),a.addScaledVector(xo,r.z),a}static isFrontFacing(t,e,n,s){return Xn.subVectors(n,e),ui.subVectors(t,e),Xn.cross(ui).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Xn.subVectors(this.c,this.b),ui.subVectors(this.a,this.b),Xn.cross(ui).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Tn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Tn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Tn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Tn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Tn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,o;gs.subVectors(s,n),_s.subVectors(r,n),po.subVectors(t,n);const l=gs.dot(po),c=_s.dot(po);if(l<=0&&c<=0)return e.copy(n);mo.subVectors(t,s);const h=gs.dot(mo),u=_s.dot(mo);if(h>=0&&u<=h)return e.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(n).addScaledVector(gs,a);go.subVectors(t,r);const p=gs.dot(go),g=_s.dot(go);if(g>=0&&p<=g)return e.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(n).addScaledVector(_s,o);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return sh.subVectors(r,s),o=(u-h)/(u-h+(p-g)),e.copy(s).addScaledVector(sh,o);const d=1/(m+_+f);return a=_*d,o=f*d,e.copy(n).addScaledVector(gs,a).addScaledVector(_s,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Di={h:0,s:0,l:0},kr={h:0,s:0,l:0};function Mo(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class wt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ke){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Qt.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=Qt.workingColorSpace){return this.r=t,this.g=e,this.b=n,Qt.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=Qt.workingColorSpace){if(t=yd(t,1),e=gn(e,0,1),n=gn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Mo(a,r,t+1/3),this.g=Mo(a,r,t),this.b=Mo(a,r,t-1/3)}return Qt.toWorkingColorSpace(this,s),this}setStyle(t,e=Ke){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ke){const n=Gu[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Mi(t.r),this.g=Mi(t.g),this.b=Mi(t.b),this}copyLinearToSRGB(t){return this.r=Ps(t.r),this.g=Ps(t.g),this.b=Ps(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ke){return Qt.fromWorkingColorSpace(tn.copy(this),t),Math.round(gn(tn.r*255,0,255))*65536+Math.round(gn(tn.g*255,0,255))*256+Math.round(gn(tn.b*255,0,255))}getHexString(t=Ke){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Qt.workingColorSpace){Qt.fromWorkingColorSpace(tn.copy(this),e);const n=tn.r,s=tn.g,r=tn.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Qt.workingColorSpace){return Qt.fromWorkingColorSpace(tn.copy(this),e),t.r=tn.r,t.g=tn.g,t.b=tn.b,t}getStyle(t=Ke){Qt.fromWorkingColorSpace(tn.copy(this),t);const e=tn.r,n=tn.g,s=tn.b;return t!==Ke?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Di),this.setHSL(Di.h+t,Di.s+e,Di.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Di),t.getHSL(kr);const n=no(Di.h,kr.h,e),s=no(Di.s,kr.s,e),r=no(Di.l,kr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const tn=new wt;wt.NAMES=Gu;let zd=0;class bi extends Vs{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zd++}),this.uuid=zi(),this.name="",this.blending=Rs,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=tl,this.blendDst=el,this.blendEquation=Ji,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Is,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ls,this.stencilZFail=ls,this.stencilZPass=ls,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Rs&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==tl&&(n.blendSrc=this.blendSrc),this.blendDst!==el&&(n.blendDst=this.blendDst),this.blendEquation!==Ji&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Is&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ls&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ls&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ls&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Pe extends bi{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Ne=new L,Hr=new Ct;class vn{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=zl,this.updateRanges=[],this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Hr.fromBufferAttribute(this,e),Hr.applyMatrix3(t),this.setXY(e,Hr.x,Hr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix3(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyMatrix4(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.applyNormalMatrix(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Ne.fromBufferAttribute(this,e),Ne.transformDirection(t),this.setXYZ(e,Ne.x,Ne.y,Ne.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=ni(e,this.array)),e}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=ni(e,this.array)),e}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=ni(e,this.array)),e}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=ni(e,this.array)),e}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==zl&&(t.usage=this.usage),t}}class Vu extends vn{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class Wu extends vn{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Te extends vn{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Bd=0;const Cn=new ye,yo=new Fe,vs=new L,yn=new Tr,Qs=new Tr,We=new L;class qe extends Vs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=zi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(zu(t)?Wu:Vu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Xt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Cn.makeRotationFromQuaternion(t),this.applyMatrix4(Cn),this}rotateX(t){return Cn.makeRotationX(t),this.applyMatrix4(Cn),this}rotateY(t){return Cn.makeRotationY(t),this.applyMatrix4(Cn),this}rotateZ(t){return Cn.makeRotationZ(t),this.applyMatrix4(Cn),this}translate(t,e,n){return Cn.makeTranslation(t,e,n),this.applyMatrix4(Cn),this}scale(t,e,n){return Cn.makeScale(t,e,n),this.applyMatrix4(Cn),this}lookAt(t){return yo.lookAt(t),yo.updateMatrix(),this.applyMatrix4(yo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(vs).negate(),this.translate(vs.x,vs.y,vs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Te(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Tr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];yn.setFromBufferAttribute(r),this.morphTargetsRelative?(We.addVectors(this.boundingBox.min,yn.min),this.boundingBox.expandByPoint(We),We.addVectors(this.boundingBox.max,yn.max),this.boundingBox.expandByPoint(We)):(this.boundingBox.expandByPoint(yn.min),this.boundingBox.expandByPoint(yn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new wr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const n=this.boundingSphere.center;if(yn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const o=e[r];Qs.setFromBufferAttribute(o),this.morphTargetsRelative?(We.addVectors(yn.min,Qs.min),yn.expandByPoint(We),We.addVectors(yn.max,Qs.max),yn.expandByPoint(We)):(yn.expandByPoint(Qs.min),yn.expandByPoint(Qs.max))}yn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)We.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(We));if(e)for(let r=0,a=e.length;r<a;r++){const o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)We.fromBufferAttribute(o,c),l&&(vs.fromBufferAttribute(t,c),We.add(vs)),s=Math.max(s,n.distanceToSquared(We))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new vn(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let C=0;C<n.count;C++)o[C]=new L,l[C]=new L;const c=new L,h=new L,u=new L,f=new Ct,p=new Ct,g=new Ct,_=new L,m=new L;function d(C,M,x){c.fromBufferAttribute(n,C),h.fromBufferAttribute(n,M),u.fromBufferAttribute(n,x),f.fromBufferAttribute(r,C),p.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(f),g.sub(f);const R=1/(p.x*g.y-g.x*p.y);isFinite(R)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(R),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(R),o[C].add(_),o[M].add(_),o[x].add(_),l[C].add(m),l[M].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,M=b.length;C<M;++C){const x=b[C],R=x.start,D=x.count;for(let U=R,z=R+D;U<z;U+=3)d(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const y=new L,v=new L,P=new L,T=new L;function A(C){P.fromBufferAttribute(s,C),T.copy(P);const M=o[C];y.copy(M),y.sub(P.multiplyScalar(P.dot(M))).normalize(),v.crossVectors(T,M);const R=v.dot(l[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,M=b.length;C<M;++C){const x=b[C],R=x.start,D=x.count;for(let U=R,z=R+D;U<z;U+=3)A(t.getX(U+0)),A(t.getX(U+1)),A(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new vn(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new L,r=new L,a=new L,o=new L,l=new L,c=new L,h=new L,u=new L;if(t)for(let f=0,p=t.count;f<p;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=e.count;f<p;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)We.fromBufferAttribute(t,e),We.normalize(),t.setXYZ(e,We.x,We.y,We.z)}toNonIndexed(){function t(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){o.isInterleavedBufferAttribute?p=l[_]*o.data.stride+o.offset:p=l[_]*h;for(let d=0;d<h;d++)f[g++]=c[p++]}return new vn(f,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=t(l,n);e.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=t(f,n);l.push(p)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const l in n){const c=n[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(t.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(e))}const r=t.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const rh=new ye,qi=new cc,Gr=new wr,ah=new L,Vr=new L,Wr=new L,Xr=new L,So=new L,qr=new L,oh=new L,Yr=new L;class Ut extends Fe{constructor(t=new qe,e=new Pe){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const o=this.morphTargetInfluences;if(r&&o){qr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(So.fromBufferAttribute(u,t),a?qr.addScaledVector(So,h):qr.addScaledVector(So.sub(e),h))}e.add(qr)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Gr.copy(n.boundingSphere),Gr.applyMatrix4(r),qi.copy(t.ray).recast(t.near),!(Gr.containsPoint(qi.origin)===!1&&(qi.intersectSphere(Gr,ah)===null||qi.origin.distanceToSquared(ah)>(t.far-t.near)**2))&&(rh.copy(r).invert(),qi.copy(t.ray).applyMatrix4(rh),!(n.boundingBox!==null&&qi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,qi)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,P=y;v<P;v+=3){const T=o.getX(v),A=o.getX(v+1),C=o.getX(v+2);s=$r(this,d,t,n,c,h,u,T,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(o.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=o.getX(m),y=o.getX(m+1),v=o.getX(m+2);s=$r(this,a,t,n,c,h,u,b,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],d=a[m.materialIndex],b=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let v=b,P=y;v<P;v+=3){const T=v,A=v+1,C=v+2;s=$r(this,d,t,n,c,h,u,T,A,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,d=_;m<d;m+=3){const b=m,y=m+1,v=m+2;s=$r(this,a,t,n,c,h,u,b,y,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function kd(i,t,e,n,s,r,a,o){let l;if(t.side===un?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,t.side===Hi,o),l===null)return null;Yr.copy(o),Yr.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(Yr);return c<e.near||c>e.far?null:{distance:c,point:Yr.clone(),object:i}}function $r(i,t,e,n,s,r,a,o,l,c){i.getVertexPosition(o,Vr),i.getVertexPosition(l,Wr),i.getVertexPosition(c,Xr);const h=kd(i,t,e,n,Vr,Wr,Xr,oh);if(h){const u=new L;Tn.getBarycoord(oh,Vr,Wr,Xr,u),s&&(h.uv=Tn.getInterpolatedAttribute(s,o,l,c,u,new Ct)),r&&(h.uv1=Tn.getInterpolatedAttribute(r,o,l,c,u,new Ct)),a&&(h.normal=Tn.getInterpolatedAttribute(a,o,l,c,u,new L),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new L,materialIndex:0};Tn.getNormal(Vr,Wr,Xr,f.normal),h.face=f,h.barycoord=u}return h}class oe extends qe{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Te(c,3)),this.setAttribute("normal",new Te(h,3)),this.setAttribute("uv",new Te(u,2));function g(_,m,d,b,y,v,P,T,A,C,M){const x=v/A,R=P/C,D=v/2,U=P/2,z=T/2,K=A+1,q=C+1;let Y=0,k=0;const et=new L;for(let nt=0;nt<q;nt++){const mt=nt*R-U;for(let kt=0;kt<K;kt++){const ne=kt*x-D;et[_]=ne*b,et[m]=mt*y,et[d]=z,c.push(et.x,et.y,et.z),et[_]=0,et[m]=0,et[d]=T>0?1:-1,h.push(et.x,et.y,et.z),u.push(kt/A),u.push(1-nt/C),Y+=1}}for(let nt=0;nt<C;nt++)for(let mt=0;mt<A;mt++){const kt=f+mt+K*nt,ne=f+mt+K*(nt+1),j=f+(mt+1)+K*(nt+1),it=f+(mt+1)+K*nt;l.push(kt,ne,it),l.push(ne,j,it),k+=6}o.addGroup(p,k,M),p+=k,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new oe(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function zs(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function cn(i){const t={};for(let e=0;e<i.length;e++){const n=zs(i[e]);for(const s in n)t[s]=n[s]}return t}function Hd(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function Xu(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Qt.workingColorSpace}const vr={clone:zs,merge:cn};var Gd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Vd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends bi{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gd,this.fragmentShader=Vd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=zs(t.uniforms),this.uniformsGroups=Hd(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class qu extends Fe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ye,this.projectionMatrix=new ye,this.projectionMatrixInverse=new ye,this.coordinateSystem=vi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ii=new L,lh=new Ct,ch=new Ct;class En extends qu{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Bl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Sa*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Bl*2*Math.atan(Math.tan(Sa*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Ii.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z),Ii.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ii.x,Ii.y).multiplyScalar(-t/Ii.z)}getViewSize(t,e){return this.getViewBounds(t,lh,ch),e.subVectors(ch,lh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Sa*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const xs=-90,Ms=1;class Wd extends Fe{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new En(xs,Ms,t,e);s.layers=this.layers,this.add(s);const r=new En(xs,Ms,t,e);r.layers=this.layers,this.add(r);const a=new En(xs,Ms,t,e);a.layers=this.layers,this.add(a);const o=new En(xs,Ms,t,e);o.layers=this.layers,this.add(o);const l=new En(xs,Ms,t,e);l.layers=this.layers,this.add(l);const c=new En(xs,Ms,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,o,l]=e;for(const c of e)this.remove(c);if(t===vi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===Ra)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=t.getRenderTarget(),f=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,o),t.setRenderTarget(n,3,s),t.render(e,l),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,h),t.setRenderTarget(u,f,p),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Yu extends fn{constructor(t,e,n,s,r,a,o,l,c,h){t=t!==void 0?t:[],e=e!==void 0?e:Us,super(t,e,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Xd extends Fn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new Yu(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Un}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new oe(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:zs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:un,blending:xi});r.uniforms.tEquirect.value=e;const a=new Ut(s,r),o=e.minFilter;return e.minFilter===gi&&(e.minFilter=Un),new Wd(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const bo=new L,qd=new L,Yd=new Xt;class ji{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=bo.subVectors(n,e).cross(qd.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(bo),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||Yd.getNormalMatrix(t),s=this.coplanarPoint(bo).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Yi=new wr,Kr=new L;class hc{constructor(t=new ji,e=new ji,n=new ji,s=new ji,r=new ji,a=new ji){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=vi){const n=this.planes,s=t.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],u=s[6],f=s[7],p=s[8],g=s[9],_=s[10],m=s[11],d=s[12],b=s[13],y=s[14],v=s[15];if(n[0].setComponents(l-r,f-c,m-p,v-d).normalize(),n[1].setComponents(l+r,f+c,m+p,v+d).normalize(),n[2].setComponents(l+a,f+h,m+g,v+b).normalize(),n[3].setComponents(l-a,f-h,m-g,v-b).normalize(),n[4].setComponents(l-o,f-u,m-_,v-y).normalize(),e===vi)n[5].setComponents(l+o,f+u,m+_,v+y).normalize();else if(e===Ra)n[5].setComponents(o,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Yi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Yi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Yi)}intersectsSprite(t){return Yi.center.set(0,0,0),Yi.radius=.7071067811865476,Yi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Yi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(Kr.x=s.normal.x>0?t.max.x:t.min.x,Kr.y=s.normal.y>0?t.max.y:t.min.y,Kr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Kr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function $u(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function $d(i){const t=new WeakMap;function e(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<u.length;p++){const g=u[f],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,u[f]=_)}u.length=f+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=t.get(o);l&&(i.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}class yi extends qe{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=t/o,f=e/l,p=[],g=[],_=[],m=[];for(let d=0;d<h;d++){const b=d*f-a;for(let y=0;y<c;y++){const v=y*u-r;g.push(v,-b,0),_.push(0,0,1),m.push(y/o),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let b=0;b<o;b++){const y=b+c*d,v=b+c*(d+1),P=b+1+c*(d+1),T=b+1+c*d;p.push(y,v,T),p.push(v,P,T)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new yi(t.width,t.height,t.widthSegments,t.heightSegments)}}var Kd=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jd=`#ifdef USE_ALPHAHASH
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
#endif`,Zd=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Jd=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qd=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,tp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ep=`#ifdef USE_AOMAP
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
#endif`,np=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ip=`#ifdef USE_BATCHING
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
#endif`,sp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,rp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ap=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,op=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,lp=`#ifdef USE_IRIDESCENCE
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
#endif`,cp=`#ifdef USE_BUMPMAP
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
#endif`,hp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,fp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,dp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,pp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,mp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,_p=`#if defined( USE_COLOR_ALPHA )
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
#endif`,vp=`#define PI 3.141592653589793
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
} // validated`,xp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Mp=`vec3 transformedNormal = objectNormal;
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
#endif`,yp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,bp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ep=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Tp="gl_FragColor = linearToOutputTexel( gl_FragColor );",wp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ap=`#ifdef USE_ENVMAP
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
#endif`,Rp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Cp=`#ifdef USE_ENVMAP
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
#endif`,Pp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Lp=`#ifdef USE_ENVMAP
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
#endif`,Dp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Up=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Np=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Op=`#ifdef USE_GRADIENTMAP
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
}`,Fp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,zp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,kp=`uniform bool receiveShadow;
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
#endif`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Vp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Wp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Xp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,qp=`PhysicalMaterial material;
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
#endif`,Yp=`struct PhysicalMaterial {
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
}`,$p=`
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
#endif`,Kp=`#if defined( RE_IndirectDiffuse )
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
#endif`,jp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Zp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Jp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,tm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,em=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,nm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,im=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,sm=`#if defined( USE_POINTS_UV )
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
#endif`,rm=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,am=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,om=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,lm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,cm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,hm=`#ifdef USE_MORPHTARGETS
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
#endif`,um=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,fm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,dm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,pm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,mm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,gm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,_m=`#ifdef USE_NORMALMAP
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
#endif`,vm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,xm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Mm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ym=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,bm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Em=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Tm=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,wm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Am=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Rm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Cm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Pm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Lm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Dm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Im=`float getShadowMask() {
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
}`,Um=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Nm=`#ifdef USE_SKINNING
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
#endif`,Om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fm=`#ifdef USE_SKINNING
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
#endif`,zm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,km=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Hm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Gm=`#ifdef USE_TRANSMISSION
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
#endif`,Vm=`#ifdef USE_TRANSMISSION
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
#endif`,Wm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ym=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Km=`uniform sampler2D t2D;
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
}`,jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Jm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Qm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,t0=`#include <common>
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
}`,e0=`#if DEPTH_PACKING == 3200
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
}`,n0=`#define DISTANCE
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
}`,i0=`#define DISTANCE
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
}`,s0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,r0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,a0=`uniform float scale;
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
}`,o0=`uniform vec3 diffuse;
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
}`,l0=`#include <common>
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
}`,c0=`uniform vec3 diffuse;
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
}`,h0=`#define LAMBERT
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
}`,u0=`#define LAMBERT
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
}`,f0=`#define MATCAP
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
}`,d0=`#define MATCAP
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
}`,p0=`#define NORMAL
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
}`,m0=`#define NORMAL
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
}`,g0=`#define PHONG
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
}`,_0=`#define PHONG
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
}`,v0=`#define STANDARD
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
}`,x0=`#define STANDARD
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
}`,M0=`#define TOON
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
}`,y0=`#define TOON
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
}`,S0=`uniform float size;
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
}`,b0=`uniform vec3 diffuse;
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
}`,E0=`#include <common>
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
}`,T0=`uniform vec3 color;
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
}`,w0=`uniform float rotation;
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
}`,A0=`uniform vec3 diffuse;
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
}`,Yt={alphahash_fragment:Kd,alphahash_pars_fragment:jd,alphamap_fragment:Zd,alphamap_pars_fragment:Jd,alphatest_fragment:Qd,alphatest_pars_fragment:tp,aomap_fragment:ep,aomap_pars_fragment:np,batching_pars_vertex:ip,batching_vertex:sp,begin_vertex:rp,beginnormal_vertex:ap,bsdfs:op,iridescence_fragment:lp,bumpmap_pars_fragment:cp,clipping_planes_fragment:hp,clipping_planes_pars_fragment:up,clipping_planes_pars_vertex:fp,clipping_planes_vertex:dp,color_fragment:pp,color_pars_fragment:mp,color_pars_vertex:gp,color_vertex:_p,common:vp,cube_uv_reflection_fragment:xp,defaultnormal_vertex:Mp,displacementmap_pars_vertex:yp,displacementmap_vertex:Sp,emissivemap_fragment:bp,emissivemap_pars_fragment:Ep,colorspace_fragment:Tp,colorspace_pars_fragment:wp,envmap_fragment:Ap,envmap_common_pars_fragment:Rp,envmap_pars_fragment:Cp,envmap_pars_vertex:Pp,envmap_physical_pars_fragment:Hp,envmap_vertex:Lp,fog_vertex:Dp,fog_pars_vertex:Ip,fog_fragment:Up,fog_pars_fragment:Np,gradientmap_pars_fragment:Op,lightmap_pars_fragment:Fp,lights_lambert_fragment:zp,lights_lambert_pars_fragment:Bp,lights_pars_begin:kp,lights_toon_fragment:Gp,lights_toon_pars_fragment:Vp,lights_phong_fragment:Wp,lights_phong_pars_fragment:Xp,lights_physical_fragment:qp,lights_physical_pars_fragment:Yp,lights_fragment_begin:$p,lights_fragment_maps:Kp,lights_fragment_end:jp,logdepthbuf_fragment:Zp,logdepthbuf_pars_fragment:Jp,logdepthbuf_pars_vertex:Qp,logdepthbuf_vertex:tm,map_fragment:em,map_pars_fragment:nm,map_particle_fragment:im,map_particle_pars_fragment:sm,metalnessmap_fragment:rm,metalnessmap_pars_fragment:am,morphinstance_vertex:om,morphcolor_vertex:lm,morphnormal_vertex:cm,morphtarget_pars_vertex:hm,morphtarget_vertex:um,normal_fragment_begin:fm,normal_fragment_maps:dm,normal_pars_fragment:pm,normal_pars_vertex:mm,normal_vertex:gm,normalmap_pars_fragment:_m,clearcoat_normal_fragment_begin:vm,clearcoat_normal_fragment_maps:xm,clearcoat_pars_fragment:Mm,iridescence_pars_fragment:ym,opaque_fragment:Sm,packing:bm,premultiplied_alpha_fragment:Em,project_vertex:Tm,dithering_fragment:wm,dithering_pars_fragment:Am,roughnessmap_fragment:Rm,roughnessmap_pars_fragment:Cm,shadowmap_pars_fragment:Pm,shadowmap_pars_vertex:Lm,shadowmap_vertex:Dm,shadowmask_pars_fragment:Im,skinbase_vertex:Um,skinning_pars_vertex:Nm,skinning_vertex:Om,skinnormal_vertex:Fm,specularmap_fragment:zm,specularmap_pars_fragment:Bm,tonemapping_fragment:km,tonemapping_pars_fragment:Hm,transmission_fragment:Gm,transmission_pars_fragment:Vm,uv_pars_fragment:Wm,uv_pars_vertex:Xm,uv_vertex:qm,worldpos_vertex:Ym,background_vert:$m,background_frag:Km,backgroundCube_vert:jm,backgroundCube_frag:Zm,cube_vert:Jm,cube_frag:Qm,depth_vert:t0,depth_frag:e0,distanceRGBA_vert:n0,distanceRGBA_frag:i0,equirect_vert:s0,equirect_frag:r0,linedashed_vert:a0,linedashed_frag:o0,meshbasic_vert:l0,meshbasic_frag:c0,meshlambert_vert:h0,meshlambert_frag:u0,meshmatcap_vert:f0,meshmatcap_frag:d0,meshnormal_vert:p0,meshnormal_frag:m0,meshphong_vert:g0,meshphong_frag:_0,meshphysical_vert:v0,meshphysical_frag:x0,meshtoon_vert:M0,meshtoon_frag:y0,points_vert:S0,points_frag:b0,shadow_vert:E0,shadow_frag:T0,sprite_vert:w0,sprite_frag:A0},ot={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Xt}},envmap:{envMap:{value:null},envMapRotation:{value:new Xt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Xt},normalScale:{value:new Ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0},uvTransform:{value:new Xt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new Ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Xt},alphaMap:{value:null},alphaMapTransform:{value:new Xt},alphaTest:{value:0}}},ei={basic:{uniforms:cn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.fog]),vertexShader:Yt.meshbasic_vert,fragmentShader:Yt.meshbasic_frag},lambert:{uniforms:cn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new wt(0)}}]),vertexShader:Yt.meshlambert_vert,fragmentShader:Yt.meshlambert_frag},phong:{uniforms:cn([ot.common,ot.specularmap,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,ot.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30}}]),vertexShader:Yt.meshphong_vert,fragmentShader:Yt.meshphong_frag},standard:{uniforms:cn([ot.common,ot.envmap,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.roughnessmap,ot.metalnessmap,ot.fog,ot.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag},toon:{uniforms:cn([ot.common,ot.aomap,ot.lightmap,ot.emissivemap,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.gradientmap,ot.fog,ot.lights,{emissive:{value:new wt(0)}}]),vertexShader:Yt.meshtoon_vert,fragmentShader:Yt.meshtoon_frag},matcap:{uniforms:cn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,ot.fog,{matcap:{value:null}}]),vertexShader:Yt.meshmatcap_vert,fragmentShader:Yt.meshmatcap_frag},points:{uniforms:cn([ot.points,ot.fog]),vertexShader:Yt.points_vert,fragmentShader:Yt.points_frag},dashed:{uniforms:cn([ot.common,ot.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Yt.linedashed_vert,fragmentShader:Yt.linedashed_frag},depth:{uniforms:cn([ot.common,ot.displacementmap]),vertexShader:Yt.depth_vert,fragmentShader:Yt.depth_frag},normal:{uniforms:cn([ot.common,ot.bumpmap,ot.normalmap,ot.displacementmap,{opacity:{value:1}}]),vertexShader:Yt.meshnormal_vert,fragmentShader:Yt.meshnormal_frag},sprite:{uniforms:cn([ot.sprite,ot.fog]),vertexShader:Yt.sprite_vert,fragmentShader:Yt.sprite_frag},background:{uniforms:{uvTransform:{value:new Xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Yt.background_vert,fragmentShader:Yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Xt}},vertexShader:Yt.backgroundCube_vert,fragmentShader:Yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Yt.cube_vert,fragmentShader:Yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Yt.equirect_vert,fragmentShader:Yt.equirect_frag},distanceRGBA:{uniforms:cn([ot.common,ot.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Yt.distanceRGBA_vert,fragmentShader:Yt.distanceRGBA_frag},shadow:{uniforms:cn([ot.lights,ot.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Yt.shadow_vert,fragmentShader:Yt.shadow_frag}};ei.physical={uniforms:cn([ei.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Xt},clearcoatNormalScale:{value:new Ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Xt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Xt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Xt},transmissionSamplerSize:{value:new Ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Xt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Xt},anisotropyVector:{value:new Ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Xt}}]),vertexShader:Yt.meshphysical_vert,fragmentShader:Yt.meshphysical_frag};const jr={r:0,b:0,g:0},$i=new Zn,R0=new ye;function C0(i,t,e,n,s,r,a){const o=new wt(0);let l=r===!0?0:1,c,h,u=null,f=0,p=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?e:t).get(y)),y}function _(b){let y=!1;const v=g(b);v===null?d(o,l):v&&v.isColor&&(d(v,1),y=!0);const P=i.xr.getEnvironmentBlendMode();P==="additive"?n.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){const v=g(y);v&&(v.isCubeTexture||v.mapping===Ya)?(h===void 0&&(h=new Ut(new oe(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:zs(ei.backgroundCube.uniforms),vertexShader:ei.backgroundCube.vertexShader,fragmentShader:ei.backgroundCube.fragmentShader,side:un,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(P,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),$i.copy(y.backgroundRotation),$i.x*=-1,$i.y*=-1,$i.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&($i.y*=-1,$i.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(R0.makeRotationFromEuler($i)),h.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ce,(u!==v||f!==v.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ut(new yi(2,2),new on({name:"BackgroundMaterial",uniforms:zs(ei.background.uniforms),vertexShader:ei.background.vertexShader,fragmentShader:ei.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Qt.getTransfer(v.colorSpace)!==ce,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||f!==v.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=v,f=v.version,p=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function d(b,y){b.getRGB(jr,Xu(i)),n.buffers.color.setClear(jr.r,jr.g,jr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,d(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,d(o,l)},render:_,addToRenderList:m}}function P0(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(x,R,D,U,z){let K=!1;const q=u(U,D,R);r!==q&&(r=q,c(r.object)),K=p(x,U,D,z),K&&g(x,U,D,z),z!==null&&t.update(z,i.ELEMENT_ARRAY_BUFFER),(K||a)&&(a=!1,v(x,R,D,U),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(z).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,R,D){const U=D.wireframe===!0;let z=n[x.id];z===void 0&&(z={},n[x.id]=z);let K=z[R.id];K===void 0&&(K={},z[R.id]=K);let q=K[U];return q===void 0&&(q=f(l()),K[U]=q),q}function f(x){const R=[],D=[],U=[];for(let z=0;z<e;z++)R[z]=0,D[z]=0,U[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:D,attributeDivisors:U,object:x,attributes:{},index:null}}function p(x,R,D,U){const z=r.attributes,K=R.attributes;let q=0;const Y=D.getAttributes();for(const k in Y)if(Y[k].location>=0){const nt=z[k];let mt=K[k];if(mt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(mt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(mt=x.instanceColor)),nt===void 0||nt.attribute!==mt||mt&&nt.data!==mt.data)return!0;q++}return r.attributesNum!==q||r.index!==U}function g(x,R,D,U){const z={},K=R.attributes;let q=0;const Y=D.getAttributes();for(const k in Y)if(Y[k].location>=0){let nt=K[k];nt===void 0&&(k==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),k==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor));const mt={};mt.attribute=nt,nt&&nt.data&&(mt.data=nt.data),z[k]=mt,q++}r.attributes=z,r.attributesNum=q,r.index=U}function _(){const x=r.newAttributes;for(let R=0,D=x.length;R<D;R++)x[R]=0}function m(x){d(x,0)}function d(x,R){const D=r.newAttributes,U=r.enabledAttributes,z=r.attributeDivisors;D[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),z[x]!==R&&(i.vertexAttribDivisor(x,R),z[x]=R)}function b(){const x=r.newAttributes,R=r.enabledAttributes;for(let D=0,U=R.length;D<U;D++)R[D]!==x[D]&&(i.disableVertexAttribArray(D),R[D]=0)}function y(x,R,D,U,z,K,q){q===!0?i.vertexAttribIPointer(x,R,D,z,K):i.vertexAttribPointer(x,R,D,U,z,K)}function v(x,R,D,U){_();const z=U.attributes,K=D.getAttributes(),q=R.defaultAttributeValues;for(const Y in K){const k=K[Y];if(k.location>=0){let et=z[Y];if(et===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(et=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(et=x.instanceColor)),et!==void 0){const nt=et.normalized,mt=et.itemSize,kt=t.get(et);if(kt===void 0)continue;const ne=kt.buffer,j=kt.type,it=kt.bytesPerElement,xt=j===i.INT||j===i.UNSIGNED_INT||et.gpuType===nc;if(et.isInterleavedBufferAttribute){const lt=et.data,At=lt.stride,Dt=et.offset;if(lt.isInstancedInterleavedBuffer){for(let Pt=0;Pt<k.locationSize;Pt++)d(k.location+Pt,lt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let Pt=0;Pt<k.locationSize;Pt++)m(k.location+Pt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let Pt=0;Pt<k.locationSize;Pt++)y(k.location+Pt,mt/k.locationSize,j,nt,At*it,(Dt+mt/k.locationSize*Pt)*it,xt)}else{if(et.isInstancedBufferAttribute){for(let lt=0;lt<k.locationSize;lt++)d(k.location+lt,et.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=et.meshPerAttribute*et.count)}else for(let lt=0;lt<k.locationSize;lt++)m(k.location+lt);i.bindBuffer(i.ARRAY_BUFFER,ne);for(let lt=0;lt<k.locationSize;lt++)y(k.location+lt,mt/k.locationSize,j,nt,mt*it,mt/k.locationSize*lt*it,xt)}}else if(q!==void 0){const nt=q[Y];if(nt!==void 0)switch(nt.length){case 2:i.vertexAttrib2fv(k.location,nt);break;case 3:i.vertexAttrib3fv(k.location,nt);break;case 4:i.vertexAttrib4fv(k.location,nt);break;default:i.vertexAttrib1fv(k.location,nt)}}}}b()}function P(){C();for(const x in n){const R=n[x];for(const D in R){const U=R[D];for(const z in U)h(U[z].object),delete U[z];delete R[D]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const D in R){const U=R[D];for(const z in U)h(U[z].object),delete U[z];delete R[D]}delete n[x.id]}function A(x){for(const R in n){const D=n[R];if(D[x.id]===void 0)continue;const U=D[x.id];for(const z in U)h(U[z].object),delete U[z];delete D[x.id]}}function C(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:C,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function L0(i,t,e){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),e.update(h,n,1)}function a(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),e.update(h,n,u))}function o(c,h,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];e.update(p,n,1)}function l(c,h,u,f){if(u===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function D0(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const A=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==$n&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const C=A===si&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Si&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==_i&&!C)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),P=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:P,maxSamples:T}}function I0(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ji,o=new Xt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){e=h(u,f,0)},this.setState=function(u,f,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,d=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const b=r?0:n,y=b*4;let v=d.clippingState||null;l.value=v,v=h(g,f,y,p);for(let P=0;P!==y;++P)v[P]=e[P];d.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function h(u,f,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const d=p+_*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<d)&&(m=new Float32Array(d));for(let y=0,v=p;y!==_;++y,v+=4)a.copy(u[y]).applyMatrix4(b,o),a.normal.toArray(m,v),m[v+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function U0(i){let t=new WeakMap;function e(a,o){return o===cl?a.mapping=Us:o===hl&&(a.mapping=Ns),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===cl||o===hl)if(t.has(a)){const l=t.get(a).texture;return e(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new Xd(l.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const o=a.target;o.removeEventListener("dispose",s);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class uc extends qu{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const As=4,hh=[.125,.215,.35,.446,.526,.582],Qi=20,Eo=new uc,uh=new wt;let To=null,wo=0,Ao=0,Ro=!1;const Zi=(1+Math.sqrt(5))/2,ys=1/Zi,fh=[new L(-Zi,ys,0),new L(Zi,ys,0),new L(-ys,0,Zi),new L(ys,0,Zi),new L(0,Zi,-ys),new L(0,Zi,ys),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class dh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=gh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=mh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(To,wo,Ao),this._renderer.xr.enabled=Ro,t.scissorTest=!1,Zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Us||t.mapping===Ns?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),To=this._renderer.getRenderTarget(),wo=this._renderer.getActiveCubeFace(),Ao=this._renderer.getActiveMipmapLevel(),Ro=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:Un,minFilter:Un,generateMipmaps:!1,type:si,format:$n,colorSpace:Gs,depthBuffer:!1},s=ph(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=ph(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=N0(r)),this._blurMaterial=O0(r,t,e)}return s}_compileMaterial(t){const e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,Eo)}_sceneToCubeUV(t,e,n,s){const o=new En(90,1,e,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,f=h.toneMapping;h.getClearColor(uh),h.toneMapping=Fi,h.autoClear=!1;const p=new Pe({name:"PMREM.Background",side:un,depthWrite:!1,depthTest:!1}),g=new Ut(new oe,p);let _=!1;const m=t.background;m?m.isColor&&(p.color.copy(m),t.background=null,_=!0):(p.color.copy(uh),_=!0);for(let d=0;d<6;d++){const b=d%3;b===0?(o.up.set(0,l[d],0),o.lookAt(c[d],0,0)):b===1?(o.up.set(0,0,l[d]),o.lookAt(0,c[d],0)):(o.up.set(0,l[d],0),o.lookAt(0,0,c[d]));const y=this._cubeSize;Zr(s,b*y,d>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,o),h.render(t,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=u,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===Us||t.mapping===Ns;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=gh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=mh());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=t;const l=this._cubeSize;Zr(e,0,0,3*l,2*l),n.setRenderTarget(e),n.render(a,Eo)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=fh[(s-r-1)%fh.length];this._blur(t,r-1,r,a,o)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ut(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Qi-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Qi;m>Qi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Qi}`);const d=[];let b=0;for(let A=0;A<Qi;++A){const C=A/_,M=Math.exp(-C*C/2);d.push(M),A===0?b+=M:A<m&&(b+=2*M)}for(let A=0;A<d.length;A++)d[A]=d[A]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=d,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;const v=this._sizeLods[s],P=3*v*(s>y-As?s-y+As:0),T=4*(this._cubeSize-v);Zr(e,P,T,3*v,2*v),l.setRenderTarget(e),l.render(u,Eo)}}function N0(i){const t=[],e=[],n=[];let s=i;const r=i-As+1+hh.length;for(let a=0;a<r;a++){const o=Math.pow(2,s);e.push(o);let l=1/o;a>i-As?l=hh[a-i+As-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),h=-c,u=1+c,f=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,d=1,b=new Float32Array(_*g*p),y=new Float32Array(m*g*p),v=new Float32Array(d*g*p);for(let T=0;T<p;T++){const A=T%3*2/3-1,C=T>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];b.set(M,_*g*T),y.set(f,m*g*T);const x=[T,T,T,T,T,T];v.set(x,d*g*T)}const P=new qe;P.setAttribute("position",new vn(b,_)),P.setAttribute("uv",new vn(y,m)),P.setAttribute("faceIndex",new vn(v,d)),t.push(P),s>As&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function ph(i,t,e){const n=new Fn(i,t,e);return n.texture.mapping=Ya,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Zr(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function O0(i,t,e){const n=new Float32Array(Qi),s=new L(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Qi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:fc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function mh(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fc(),fragmentShader:`

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
		`,blending:xi,depthTest:!1,depthWrite:!1})}function gh(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:xi,depthTest:!1,depthWrite:!1})}function fc(){return`

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
	`}function F0(i){let t=new WeakMap,e=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===cl||l===hl,h=l===Us||l===Ns;if(c||h){let u=t.get(o);const f=u!==void 0?u.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return e===null&&(e=new dh(i)),u=c?e.fromEquirectangular(o,u):e.fromCubemap(o,u),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),u.texture;if(u!==void 0)return u.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(e===null&&(e=new dh(i)),u=c?e.fromEquirectangular(o):e.fromCubemap(o),u.texture.pmremVersion=o.pmremVersion,t.set(o,u),o.addEventListener("dispose",r),u.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){const l=o.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function z0(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&ar("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function B0(i,t,e,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,d=_.length;m<d;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(t.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function l(u){const f=u.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,d=_.length;m<d;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(u){const f=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const b=p.array;_=p.version;for(let y=0,v=b.length;y<v;y+=3){const P=b[y+0],T=b[y+1],A=b[y+2];f.push(P,T,T,A,A,P)}}else if(g!==void 0){const b=g.array;_=g.version;for(let y=0,v=b.length/3-1;y<v;y+=3){const P=y+0,T=y+1,A=y+2;f.push(P,T,T,A,A,P)}}else return;const m=new(zu(f)?Wu:Vu)(f,1);m.version=_;const d=r.get(u);d&&t.remove(d),r.set(u,m)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function k0(i,t,e){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,p){i.drawElements(n,p,r,f*a),e.update(p,n,1)}function c(f,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,f*a,g),e.update(p,n,g))}function h(f,p,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,f,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];e.update(m,n,1)}function u(f,p,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<f.length;d++)c(f[d]/a,p[d],_[d]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,f,0,_,0,g);let d=0;for(let b=0;b<g;b++)d+=p[b]*_[b];e.update(d,n,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function H0(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=o*(r/3);break;case i.LINES:e.lines+=o*(r/2);break;case i.LINE_STRIP:e.lines+=o*(r-1);break;case i.LINE_LOOP:e.lines+=o*r;break;case i.POINTS:e.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function G0(i,t,e){const n=new WeakMap,s=new pe;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let x=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",x)};var p=x;f!==void 0&&f.texture.dispose();const g=o.morphAttributes.position!==void 0,_=o.morphAttributes.normal!==void 0,m=o.morphAttributes.color!==void 0,d=o.morphAttributes.position||[],b=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let P=o.attributes.position.count*v,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const A=new Float32Array(P*T*4*u),C=new ku(A,P,T,u);C.type=_i,C.needsUpdate=!0;const M=v*4;for(let R=0;R<u;R++){const D=d[R],U=b[R],z=y[R],K=P*T*4*R;for(let q=0;q<D.count;q++){const Y=q*M;g===!0&&(s.fromBufferAttribute(D,q),A[K+Y+0]=s.x,A[K+Y+1]=s.y,A[K+Y+2]=s.z,A[K+Y+3]=0),_===!0&&(s.fromBufferAttribute(U,q),A[K+Y+4]=s.x,A[K+Y+5]=s.y,A[K+Y+6]=s.z,A[K+Y+7]=0),m===!0&&(s.fromBufferAttribute(z,q),A[K+Y+8]=s.x,A[K+Y+9]=s.y,A[K+Y+10]=s.z,A[K+Y+11]=z.itemSize===4?s.w:1)}}f={count:u,texture:C,size:new Ct(P,T)},n.set(o,f),o.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=o.morphTargetsRelative?1:1-g;l.getUniforms().setValue(i,"morphTargetBaseInfluence",_),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function V0(i,t,e,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=t.get(l,h);if(s.get(u)!==c&&(t.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(e.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return u}function a(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class Ku extends fn{constructor(t,e,n,s,r,a,o,l,c,h=Cs){if(h!==Cs&&h!==Fs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Cs&&(n=is),n===void 0&&h===Fs&&(n=Os),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=o!==void 0?o:ue,this.minFilter=l!==void 0?l:ue,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const ju=new fn,_h=new Ku(1,1),Zu=new ku,Ju=new Pd,Qu=new Yu,vh=[],xh=[],Mh=new Float32Array(16),yh=new Float32Array(9),Sh=new Float32Array(4);function Ws(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=vh[s];if(r===void 0&&(r=new Float32Array(s),vh[s]=r),t!==0){n.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,i[a].toArray(r,o)}return r}function He(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ge(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function Ka(i,t){let e=xh[t];e===void 0&&(e=new Int32Array(t),xh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function W0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function X0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2fv(this.addr,t),Ge(e,t)}}function q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(He(e,t))return;i.uniform3fv(this.addr,t),Ge(e,t)}}function Y0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4fv(this.addr,t),Ge(e,t)}}function $0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Sh.set(n),i.uniformMatrix2fv(this.addr,!1,Sh),Ge(e,n)}}function K0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;yh.set(n),i.uniformMatrix3fv(this.addr,!1,yh),Ge(e,n)}}function j0(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(He(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ge(e,t)}else{if(He(e,n))return;Mh.set(n),i.uniformMatrix4fv(this.addr,!1,Mh),Ge(e,n)}}function Z0(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function J0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2iv(this.addr,t),Ge(e,t)}}function Q0(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3iv(this.addr,t),Ge(e,t)}}function tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4iv(this.addr,t),Ge(e,t)}}function eg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function ng(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(He(e,t))return;i.uniform2uiv(this.addr,t),Ge(e,t)}}function ig(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(He(e,t))return;i.uniform3uiv(this.addr,t),Ge(e,t)}}function sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(He(e,t))return;i.uniform4uiv(this.addr,t),Ge(e,t)}}function rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(_h.compareFunction=Fu,r=_h):r=ju,e.setTexture2D(t||r,s)}function ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||Ju,s)}function og(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||Qu,s)}function lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||Zu,s)}function cg(i){switch(i){case 5126:return W0;case 35664:return X0;case 35665:return q0;case 35666:return Y0;case 35674:return $0;case 35675:return K0;case 35676:return j0;case 5124:case 35670:return Z0;case 35667:case 35671:return J0;case 35668:case 35672:return Q0;case 35669:case 35673:return tg;case 5125:return eg;case 36294:return ng;case 36295:return ig;case 36296:return sg;case 35678:case 36198:case 36298:case 36306:case 35682:return rg;case 35679:case 36299:case 36307:return ag;case 35680:case 36300:case 36308:case 36293:return og;case 36289:case 36303:case 36311:case 36292:return lg}}function hg(i,t){i.uniform1fv(this.addr,t)}function ug(i,t){const e=Ws(t,this.size,2);i.uniform2fv(this.addr,e)}function fg(i,t){const e=Ws(t,this.size,3);i.uniform3fv(this.addr,e)}function dg(i,t){const e=Ws(t,this.size,4);i.uniform4fv(this.addr,e)}function pg(i,t){const e=Ws(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function mg(i,t){const e=Ws(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function gg(i,t){const e=Ws(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function _g(i,t){i.uniform1iv(this.addr,t)}function vg(i,t){i.uniform2iv(this.addr,t)}function xg(i,t){i.uniform3iv(this.addr,t)}function Mg(i,t){i.uniform4iv(this.addr,t)}function yg(i,t){i.uniform1uiv(this.addr,t)}function Sg(i,t){i.uniform2uiv(this.addr,t)}function bg(i,t){i.uniform3uiv(this.addr,t)}function Eg(i,t){i.uniform4uiv(this.addr,t)}function Tg(i,t,e){const n=this.cache,s=t.length,r=Ka(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||ju,r[a])}function wg(i,t,e){const n=this.cache,s=t.length,r=Ka(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||Ju,r[a])}function Ag(i,t,e){const n=this.cache,s=t.length,r=Ka(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Qu,r[a])}function Rg(i,t,e){const n=this.cache,s=t.length,r=Ka(e,s);He(n,r)||(i.uniform1iv(this.addr,r),Ge(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||Zu,r[a])}function Cg(i){switch(i){case 5126:return hg;case 35664:return ug;case 35665:return fg;case 35666:return dg;case 35674:return pg;case 35675:return mg;case 35676:return gg;case 5124:case 35670:return _g;case 35667:case 35671:return vg;case 35668:case 35672:return xg;case 35669:case 35673:return Mg;case 5125:return yg;case 36294:return Sg;case 36295:return bg;case 36296:return Eg;case 35678:case 36198:case 36298:case 36306:case 35682:return Tg;case 35679:case 36299:case 36307:return wg;case 35680:case 36300:case 36308:case 36293:return Ag;case 36289:case 36303:case 36311:case 36292:return Rg}}class Pg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=cg(e.type)}}class Lg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Cg(e.type)}}class Dg{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(t,e[o.id],n)}}}const Co=/(\w+)(\])?(\[|\.)?/g;function bh(i,t){i.seq.push(t),i.map[t.id]=t}function Ig(i,t,e){const n=i.name,s=n.length;for(Co.lastIndex=0;;){const r=Co.exec(n),a=Co.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){bh(e,c===void 0?new Pg(o,i,t):new Lg(o,i,t));break}else{let u=e.map[o];u===void 0&&(u=new Dg(o),bh(e,u)),e=u}}}class ba{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);Ig(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const o=e[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function Eh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const Ug=37297;let Ng=0;function Og(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return n.join(`
`)}const Th=new Xt;function Fg(i){Qt._getMatrix(Th,Qt.workingColorSpace,i);const t=`mat3( ${Th.elements.map(e=>e.toFixed(4))} )`;switch(Qt.getTransfer(i)){case $a:return[t,"LinearTransferOETF"];case ce:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function wh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+Og(i.getShaderSource(t),a)}else return s}function zg(i,t){const e=Fg(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Bg(i,t){let e;switch(t){case yu:e="Linear";break;case Su:e="Reinhard";break;case bu:e="Cineon";break;case ec:e="ACESFilmic";break;case Eu:e="AgX";break;case Tu:e="Neutral";break;case cd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Jr=new L;function kg(){Qt.getLuminanceCoefficients(Jr);const i=Jr.x.toFixed(4),t=Jr.y.toFixed(4),e=Jr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Hg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(or).join(`
`)}function Gg(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function Vg(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:o}}return e}function or(i){return i!==""}function Ah(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Rh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Wg=/^[ \t]*#include +<([\w\d./]+)>/gm;function kl(i){return i.replace(Wg,qg)}const Xg=new Map;function qg(i,t){let e=Yt[t];if(e===void 0){const n=Xg.get(t);if(n!==void 0)e=Yt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return kl(e)}const Yg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ch(i){return i.replace(Yg,$g)}function $g(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ph(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function Kg(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===xu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Mu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===pi&&(t="SHADOWMAP_TYPE_VSM"),t}function jg(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Us:case Ns:t="ENVMAP_TYPE_CUBE";break;case Ya:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Zg(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Ns:t="ENVMAP_MODE_REFRACTION";break}return t}function Jg(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case tc:t="ENVMAP_BLENDING_MULTIPLY";break;case od:t="ENVMAP_BLENDING_MIX";break;case ld:t="ENVMAP_BLENDING_ADD";break}return t}function Qg(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function t_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,o=e.fragmentShader;const l=Kg(e),c=jg(e),h=Zg(e),u=Jg(e),f=Qg(e),p=Hg(e),g=Gg(r),_=s.createProgram();let m,d,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(or).join(`
`),d.length>0&&(d+=`
`)):(m=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(or).join(`
`),d=[Ph(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Fi?"#define TONE_MAPPING":"",e.toneMapping!==Fi?Yt.tonemapping_pars_fragment:"",e.toneMapping!==Fi?Bg("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Yt.colorspace_pars_fragment,zg("linearToOutputTexel",e.outputColorSpace),kg(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(or).join(`
`)),a=kl(a),a=Ah(a,e),a=Rh(a,e),o=kl(o),o=Ah(o,e),o=Rh(o,e),a=Ch(a),o=Ch(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const y=b+m+a,v=b+d+o,P=Eh(s,s.VERTEX_SHADER,y),T=Eh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,P),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function A(R){if(i.debug.checkShaderErrors){const D=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(P).trim(),z=s.getShaderInfoLog(T).trim();let K=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(K=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,P,T);else{const Y=wh(s,P,"vertex"),k=wh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+D+`
`+Y+`
`+k)}else D!==""?console.warn("THREE.WebGLProgram: Program Info Log:",D):(U===""||z==="")&&(q=!1);q&&(R.diagnostics={runnable:K,programLog:D,vertexShader:{log:U,prefix:m},fragmentShader:{log:z,prefix:d}})}s.deleteShader(P),s.deleteShader(T),C=new ba(s,_),M=Vg(s,_)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let M;this.getAttributes=function(){return M===void 0&&A(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Ug)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Ng++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=T,this}let e_=0;class n_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new i_(t),e.set(t,n)),n}}class i_{constructor(t){this.id=e_++,this.code=t,this.usedTimes=0}}function s_(i,t,e,n,s,r,a){const o=new Hu,l=new n_,c=new Set,h=[],u=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,R,D,U){const z=D.fog,K=U.geometry,q=M.isMeshStandardMaterial?D.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),k=Y&&Y.mapping===Ya?Y.image.height:null,et=g[M.type];M.precision!==null&&(p=s.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const nt=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,mt=nt!==void 0?nt.length:0;let kt=0;K.morphAttributes.position!==void 0&&(kt=1),K.morphAttributes.normal!==void 0&&(kt=2),K.morphAttributes.color!==void 0&&(kt=3);let ne,j,it,xt;if(et){const le=ei[et];ne=le.vertexShader,j=le.fragmentShader}else ne=M.vertexShader,j=M.fragmentShader,l.update(M),it=l.getVertexShaderID(M),xt=l.getFragmentShaderID(M);const lt=i.getRenderTarget(),At=i.state.buffers.depth.getReversed(),Dt=U.isInstancedMesh===!0,Pt=U.isBatchedMesh===!0,zt=!!M.map,Bt=!!M.matcap,fe=!!Y,N=!!M.aoMap,ze=!!M.lightMap,Kt=!!M.bumpMap,jt=!!M.normalMap,bt=!!M.displacementMap,me=!!M.emissiveMap,Rt=!!M.metalnessMap,w=!!M.roughnessMap,S=M.anisotropy>0,B=M.clearcoat>0,J=M.dispersion>0,tt=M.iridescence>0,Z=M.sheen>0,Et=M.transmission>0,ht=S&&!!M.anisotropyMap,gt=B&&!!M.clearcoatMap,te=B&&!!M.clearcoatNormalMap,st=B&&!!M.clearcoatRoughnessMap,_t=tt&&!!M.iridescenceMap,Lt=tt&&!!M.iridescenceThicknessMap,Nt=Z&&!!M.sheenColorMap,vt=Z&&!!M.sheenRoughnessMap,Jt=!!M.specularMap,qt=!!M.specularColorMap,ve=!!M.specularIntensityMap,I=Et&&!!M.transmissionMap,ct=Et&&!!M.thicknessMap,$=!!M.gradientMap,Q=!!M.alphaMap,pt=M.alphaTest>0,ft=!!M.alphaHash,Ht=!!M.extensions;let Le=Fi;M.toneMapped&&(lt===null||lt.isXRRenderTarget===!0)&&(Le=i.toneMapping);const Je={shaderID:et,shaderType:M.type,shaderName:M.name,vertexShader:ne,fragmentShader:j,defines:M.defines,customVertexShaderID:it,customFragmentShaderID:xt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Pt,batchingColor:Pt&&U._colorsTexture!==null,instancing:Dt,instancingColor:Dt&&U.instanceColor!==null,instancingMorph:Dt&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:lt===null?i.outputColorSpace:lt.isXRRenderTarget===!0?lt.texture.colorSpace:Gs,alphaToCoverage:!!M.alphaToCoverage,map:zt,matcap:Bt,envMap:fe,envMapMode:fe&&Y.mapping,envMapCubeUVHeight:k,aoMap:N,lightMap:ze,bumpMap:Kt,normalMap:jt,displacementMap:f&&bt,emissiveMap:me,normalMapObjectSpace:jt&&M.normalMapType===dd,normalMapTangentSpace:jt&&M.normalMapType===lc,metalnessMap:Rt,roughnessMap:w,anisotropy:S,anisotropyMap:ht,clearcoat:B,clearcoatMap:gt,clearcoatNormalMap:te,clearcoatRoughnessMap:st,dispersion:J,iridescence:tt,iridescenceMap:_t,iridescenceThicknessMap:Lt,sheen:Z,sheenColorMap:Nt,sheenRoughnessMap:vt,specularMap:Jt,specularColorMap:qt,specularIntensityMap:ve,transmission:Et,transmissionMap:I,thicknessMap:ct,gradientMap:$,opaque:M.transparent===!1&&M.blending===Rs&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:pt,alphaHash:ft,combine:M.combine,mapUv:zt&&_(M.map.channel),aoMapUv:N&&_(M.aoMap.channel),lightMapUv:ze&&_(M.lightMap.channel),bumpMapUv:Kt&&_(M.bumpMap.channel),normalMapUv:jt&&_(M.normalMap.channel),displacementMapUv:bt&&_(M.displacementMap.channel),emissiveMapUv:me&&_(M.emissiveMap.channel),metalnessMapUv:Rt&&_(M.metalnessMap.channel),roughnessMapUv:w&&_(M.roughnessMap.channel),anisotropyMapUv:ht&&_(M.anisotropyMap.channel),clearcoatMapUv:gt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:te&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:st&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Lt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:Nt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:vt&&_(M.sheenRoughnessMap.channel),specularMapUv:Jt&&_(M.specularMap.channel),specularColorMapUv:qt&&_(M.specularColorMap.channel),specularIntensityMapUv:ve&&_(M.specularIntensityMap.channel),transmissionMapUv:I&&_(M.transmissionMap.channel),thicknessMapUv:ct&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(jt||S),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!K.attributes.uv&&(zt||Q),fog:!!z,useFog:M.fog===!0,fogExp2:!!z&&z.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:At,skinning:U.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:mt,morphTextureStride:kt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Le,decodeVideoTexture:zt&&M.map.isVideoTexture===!0&&Qt.getTransfer(M.map.colorSpace)===ce,decodeVideoTextureEmissive:me&&M.emissiveMap.isVideoTexture===!0&&Qt.getTransfer(M.emissiveMap.colorSpace)===ce,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_n,flipSided:M.side===un,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Ht&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ht&&M.extensions.multiDraw===!0||Pt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Je.vertexUv1s=c.has(1),Je.vertexUv2s=c.has(2),Je.vertexUv3s=c.has(3),c.clear(),Je}function d(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(b(x,M),y(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function b(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function y(M,x){o.disableAll(),x.supportsVertexTextures&&o.enable(0),x.instancing&&o.enable(1),x.instancingColor&&o.enable(2),x.instancingMorph&&o.enable(3),x.matcap&&o.enable(4),x.envMap&&o.enable(5),x.normalMapObjectSpace&&o.enable(6),x.normalMapTangentSpace&&o.enable(7),x.clearcoat&&o.enable(8),x.iridescence&&o.enable(9),x.alphaTest&&o.enable(10),x.vertexColors&&o.enable(11),x.vertexAlphas&&o.enable(12),x.vertexUv1s&&o.enable(13),x.vertexUv2s&&o.enable(14),x.vertexUv3s&&o.enable(15),x.vertexTangents&&o.enable(16),x.anisotropy&&o.enable(17),x.alphaHash&&o.enable(18),x.batching&&o.enable(19),x.dispersion&&o.enable(20),x.batchingColor&&o.enable(21),M.push(o.mask),o.disableAll(),x.fog&&o.enable(0),x.useFog&&o.enable(1),x.flatShading&&o.enable(2),x.logarithmicDepthBuffer&&o.enable(3),x.reverseDepthBuffer&&o.enable(4),x.skinning&&o.enable(5),x.morphTargets&&o.enable(6),x.morphNormals&&o.enable(7),x.morphColors&&o.enable(8),x.premultipliedAlpha&&o.enable(9),x.shadowMapEnabled&&o.enable(10),x.doubleSided&&o.enable(11),x.flipSided&&o.enable(12),x.useDepthPacking&&o.enable(13),x.dithering&&o.enable(14),x.transmission&&o.enable(15),x.sheen&&o.enable(16),x.opaque&&o.enable(17),x.pointsUvs&&o.enable(18),x.decodeVideoTexture&&o.enable(19),x.decodeVideoTextureEmissive&&o.enable(20),x.alphaToCoverage&&o.enable(21),M.push(o.mask)}function v(M){const x=g[M.type];let R;if(x){const D=ei[x];R=vr.clone(D.uniforms)}else R=M.uniforms;return R}function P(M,x){let R;for(let D=0,U=h.length;D<U;D++){const z=h[D];if(z.cacheKey===x){R=z,++R.usedTimes;break}}return R===void 0&&(R=new t_(i,x,M,r),h.push(R)),R}function T(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function A(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:v,acquireProgram:P,releaseProgram:T,releaseShaderCache:A,programs:h,dispose:C}}function r_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function a_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Lh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Dh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(u,f,p,g,_,m){let d=i[t];return d===void 0?(d={id:u.id,object:u,geometry:f,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[t]=d):(d.id=u.id,d.object=u,d.geometry=f,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=_,d.group=m),t++,d}function o(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.push(d):p.transparent===!0?s.push(d):e.push(d)}function l(u,f,p,g,_,m){const d=a(u,f,p,g,_,m);p.transmission>0?n.unshift(d):p.transparent===!0?s.unshift(d):e.unshift(d)}function c(u,f){e.length>1&&e.sort(u||a_),n.length>1&&n.sort(f||Lh),s.length>1&&s.sort(f||Lh)}function h(){for(let u=t,f=i.length;u<f;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function o_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Dh,i.set(n,[a])):s>=r.length?(a=new Dh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function l_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new wt};break;case"SpotLight":e={position:new L,direction:new L,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new wt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":e={color:new wt,position:new L,halfWidth:new L,halfHeight:new L};break}return i[t.id]=e,e}}}function c_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let h_=0;function u_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function f_(i){const t=new l_,e=c_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new L);const s=new L,r=new ye,a=new ye;function o(c){let h=0,u=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let p=0,g=0,_=0,m=0,d=0,b=0,y=0,v=0,P=0,T=0,A=0;c.sort(u_);for(let M=0,x=c.length;M<x;M++){const R=c[M],D=R.color,U=R.intensity,z=R.distance,K=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)h+=D.r*U,u+=D.g*U,f+=D.b*U;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],U);A++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,k=e.get(R);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.directionalShadow[p]=k,n.directionalShadowMap[p]=K,n.directionalShadowMatrix[p]=R.shadow.matrix,b++}n.directional[p]=q,p++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(D).multiplyScalar(U),q.distance=z,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[_]=q;const Y=R.shadow;if(R.map&&(n.spotLightMap[P]=R.map,P++,Y.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=Y.matrix,R.castShadow){const k=e.get(R);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,n.spotShadow[_]=k,n.spotShadowMap[_]=K,v++}_++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(D).multiplyScalar(U),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Y=R.shadow,k=e.get(R);k.shadowIntensity=Y.intensity,k.shadowBias=Y.bias,k.shadowNormalBias=Y.normalBias,k.shadowRadius=Y.radius,k.shadowMapSize=Y.mapSize,k.shadowCameraNear=Y.camera.near,k.shadowCameraFar=Y.camera.far,n.pointShadow[g]=k,n.pointShadowMap[g]=K,n.pointShadowMatrix[g]=R.shadow.matrix,y++}n.point[g]=q,g++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(U),q.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[d]=q,d++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ot.LTC_FLOAT_1,n.rectAreaLTC2=ot.LTC_FLOAT_2):(n.rectAreaLTC1=ot.LTC_HALF_1,n.rectAreaLTC2=ot.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==d||C.numDirectionalShadows!==b||C.numPointShadows!==y||C.numSpotShadows!==v||C.numSpotMaps!==P||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=d,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+P-T,n.spotLightMap.length=P,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=d,C.numDirectionalShadows=b,C.numPointShadows=y,C.numSpotShadows=v,C.numSpotMaps=P,C.numLightProbes=A,n.version=h_++)}function l(c,h){let u=0,f=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let d=0,b=c.length;d<b;d++){const y=c[d];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[p];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:o,setupView:l,state:n}}function Ih(i){const t=new f_(i),e=[],n=[];function s(h){c.camera=h,e.length=0,n.length=0}function r(h){e.push(h)}function a(h){n.push(h)}function o(){t.setup(e)}function l(h){t.setupView(e,h)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function d_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let o;return a===void 0?(o=new Ih(i),t.set(s,[o])):r>=a.length?(o=new Ih(i),a.push(o)):o=a[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}class p_ extends bi{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=ud,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class m_ extends bi{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const g_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,__=`uniform sampler2D shadow_pass;
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
}`;function v_(i,t,e){let n=new hc;const s=new Ct,r=new Ct,a=new pe,o=new p_({depthPacking:fd}),l=new m_,c={},h=e.maxTextureSize,u={[Hi]:un,[un]:Hi,[_n]:_n},f=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ct},radius:{value:4}},vertexShader:g_,fragmentShader:__}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new qe;g.setAttribute("position",new vn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xu;let d=this.type;this.render=function(T,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),D=i.state;D.setBlending(xi),D.buffers.color.setClear(1,1,1,1),D.buffers.depth.setTest(!0),D.setScissorTest(!1);const U=d!==pi&&this.type===pi,z=d===pi&&this.type!==pi;for(let K=0,q=T.length;K<q;K++){const Y=T[K],k=Y.shadow;if(k===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(k.autoUpdate===!1&&k.needsUpdate===!1)continue;s.copy(k.mapSize);const et=k.getFrameExtents();if(s.multiply(et),r.copy(k.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/et.x),s.x=r.x*et.x,k.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/et.y),s.y=r.y*et.y,k.mapSize.y=r.y)),k.map===null||U===!0||z===!0){const mt=this.type!==pi?{minFilter:ue,magFilter:ue}:{};k.map!==null&&k.map.dispose(),k.map=new Fn(s.x,s.y,mt),k.map.texture.name=Y.name+".shadowMap",k.camera.updateProjectionMatrix()}i.setRenderTarget(k.map),i.clear();const nt=k.getViewportCount();for(let mt=0;mt<nt;mt++){const kt=k.getViewport(mt);a.set(r.x*kt.x,r.y*kt.y,r.x*kt.z,r.y*kt.w),D.viewport(a),k.updateMatrices(Y,mt),n=k.getFrustum(),v(A,C,k.camera,Y,this.type)}k.isPointLightShadow!==!0&&this.type===pi&&b(k,C),k.needsUpdate=!1}d=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,R)};function b(T,A){const C=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,p.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Fn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,C,f,_,null),p.uniforms.shadow_pass.value=T.mapPass.texture,p.uniforms.resolution.value=T.mapSize,p.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,C,p,_,null)}function y(T,A,C,M){let x=null;const R=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const D=x.uuid,U=A.uuid;let z=c[D];z===void 0&&(z={},c[D]=z);let K=z[U];K===void 0&&(K=x.clone(),z[U]=K,A.addEventListener("dispose",P)),x=K}if(x.visible=A.visible,x.wireframe=A.wireframe,M===pi?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:u[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const D=i.properties.get(x);D.light=C}return x}function v(T,A,C,M,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===pi)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const U=t.update(T),z=T.material;if(Array.isArray(z)){const K=U.groups;for(let q=0,Y=K.length;q<Y;q++){const k=K[q],et=z[k.materialIndex];if(et&&et.visible){const nt=y(T,et,M,x);T.onBeforeShadow(i,T,A,C,U,nt,k),i.renderBufferDirect(C,null,U,nt,T,k),T.onAfterShadow(i,T,A,C,U,nt,k)}}}else if(z.visible){const K=y(T,z,M,x);T.onBeforeShadow(i,T,A,C,U,K,null),i.renderBufferDirect(C,null,U,K,T,null),T.onAfterShadow(i,T,A,C,U,K,null)}}const D=T.children;for(let U=0,z=D.length;U<z;U++)v(D[U],A,C,M,x)}function P(T){T.target.removeEventListener("dispose",P);for(const C in c){const M=c[C],x=T.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const x_={[nl]:il,[sl]:ol,[rl]:ll,[Is]:al,[il]:nl,[ol]:sl,[ll]:rl,[al]:Is};function M_(i,t){function e(){let I=!1;const ct=new pe;let $=null;const Q=new pe(0,0,0,0);return{setMask:function(pt){$!==pt&&!I&&(i.colorMask(pt,pt,pt,pt),$=pt)},setLocked:function(pt){I=pt},setClear:function(pt,ft,Ht,Le,Je){Je===!0&&(pt*=Le,ft*=Le,Ht*=Le),ct.set(pt,ft,Ht,Le),Q.equals(ct)===!1&&(i.clearColor(pt,ft,Ht,Le),Q.copy(ct))},reset:function(){I=!1,$=null,Q.set(-1,0,0,0)}}}function n(){let I=!1,ct=!1,$=null,Q=null,pt=null;return{setReversed:function(ft){if(ct!==ft){const Ht=t.get("EXT_clip_control");ct?Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.ZERO_TO_ONE_EXT):Ht.clipControlEXT(Ht.LOWER_LEFT_EXT,Ht.NEGATIVE_ONE_TO_ONE_EXT);const Le=pt;pt=null,this.setClear(Le)}ct=ft},getReversed:function(){return ct},setTest:function(ft){ft?lt(i.DEPTH_TEST):At(i.DEPTH_TEST)},setMask:function(ft){$!==ft&&!I&&(i.depthMask(ft),$=ft)},setFunc:function(ft){if(ct&&(ft=x_[ft]),Q!==ft){switch(ft){case nl:i.depthFunc(i.NEVER);break;case il:i.depthFunc(i.ALWAYS);break;case sl:i.depthFunc(i.LESS);break;case Is:i.depthFunc(i.LEQUAL);break;case rl:i.depthFunc(i.EQUAL);break;case al:i.depthFunc(i.GEQUAL);break;case ol:i.depthFunc(i.GREATER);break;case ll:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=ft}},setLocked:function(ft){I=ft},setClear:function(ft){pt!==ft&&(ct&&(ft=1-ft),i.clearDepth(ft),pt=ft)},reset:function(){I=!1,$=null,Q=null,pt=null,ct=!1}}}function s(){let I=!1,ct=null,$=null,Q=null,pt=null,ft=null,Ht=null,Le=null,Je=null;return{setTest:function(le){I||(le?lt(i.STENCIL_TEST):At(i.STENCIL_TEST))},setMask:function(le){ct!==le&&!I&&(i.stencilMask(le),ct=le)},setFunc:function(le,Hn,ai){($!==le||Q!==Hn||pt!==ai)&&(i.stencilFunc(le,Hn,ai),$=le,Q=Hn,pt=ai)},setOp:function(le,Hn,ai){(ft!==le||Ht!==Hn||Le!==ai)&&(i.stencilOp(le,Hn,ai),ft=le,Ht=Hn,Le=ai)},setLocked:function(le){I=le},setClear:function(le){Je!==le&&(i.clearStencil(le),Je=le)},reset:function(){I=!1,ct=null,$=null,Q=null,pt=null,ft=null,Ht=null,Le=null,Je=null}}}const r=new e,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,y=null,v=null,P=null,T=null,A=new wt(0,0,0),C=0,M=!1,x=null,R=null,D=null,U=null,z=null;const K=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const k=i.getParameter(i.VERSION);k.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(k)[1]),q=Y>=1):k.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(k)[1]),q=Y>=2);let et=null,nt={};const mt=i.getParameter(i.SCISSOR_BOX),kt=i.getParameter(i.VIEWPORT),ne=new pe().fromArray(mt),j=new pe().fromArray(kt);function it(I,ct,$,Q){const pt=new Uint8Array(4),ft=i.createTexture();i.bindTexture(I,ft),i.texParameteri(I,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(I,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ht=0;Ht<$;Ht++)I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,pt):i.texImage2D(ct+Ht,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,pt);return ft}const xt={};xt[i.TEXTURE_2D]=it(i.TEXTURE_2D,i.TEXTURE_2D,1),xt[i.TEXTURE_CUBE_MAP]=it(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),xt[i.TEXTURE_2D_ARRAY]=it(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),xt[i.TEXTURE_3D]=it(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),lt(i.DEPTH_TEST),a.setFunc(Is),Kt(!1),jt(Bc),lt(i.CULL_FACE),N(xi);function lt(I){h[I]!==!0&&(i.enable(I),h[I]=!0)}function At(I){h[I]!==!1&&(i.disable(I),h[I]=!1)}function Dt(I,ct){return u[I]!==ct?(i.bindFramebuffer(I,ct),u[I]=ct,I===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=ct),I===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function Pt(I,ct){let $=p,Q=!1;if(I){$=f.get(ct),$===void 0&&($=[],f.set(ct,$));const pt=I.textures;if($.length!==pt.length||$[0]!==i.COLOR_ATTACHMENT0){for(let ft=0,Ht=pt.length;ft<Ht;ft++)$[ft]=i.COLOR_ATTACHMENT0+ft;$.length=pt.length,Q=!0}}else $[0]!==i.BACK&&($[0]=i.BACK,Q=!0);Q&&i.drawBuffers($)}function zt(I){return g!==I?(i.useProgram(I),g=I,!0):!1}const Bt={[Ji]:i.FUNC_ADD,[Wf]:i.FUNC_SUBTRACT,[Xf]:i.FUNC_REVERSE_SUBTRACT};Bt[qf]=i.MIN,Bt[Yf]=i.MAX;const fe={[$f]:i.ZERO,[Kf]:i.ONE,[jf]:i.SRC_COLOR,[tl]:i.SRC_ALPHA,[nd]:i.SRC_ALPHA_SATURATE,[td]:i.DST_COLOR,[Jf]:i.DST_ALPHA,[Zf]:i.ONE_MINUS_SRC_COLOR,[el]:i.ONE_MINUS_SRC_ALPHA,[ed]:i.ONE_MINUS_DST_COLOR,[Qf]:i.ONE_MINUS_DST_ALPHA,[id]:i.CONSTANT_COLOR,[sd]:i.ONE_MINUS_CONSTANT_COLOR,[rd]:i.CONSTANT_ALPHA,[ad]:i.ONE_MINUS_CONSTANT_ALPHA};function N(I,ct,$,Q,pt,ft,Ht,Le,Je,le){if(I===xi){_===!0&&(At(i.BLEND),_=!1);return}if(_===!1&&(lt(i.BLEND),_=!0),I!==Vf){if(I!==m||le!==M){if((d!==Ji||v!==Ji)&&(i.blendEquation(i.FUNC_ADD),d=Ji,v=Ji),le)switch(I){case Rs:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.ONE,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hc:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case Rs:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wa:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case kc:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Hc:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}b=null,y=null,P=null,T=null,A.set(0,0,0),C=0,m=I,M=le}return}pt=pt||ct,ft=ft||$,Ht=Ht||Q,(ct!==d||pt!==v)&&(i.blendEquationSeparate(Bt[ct],Bt[pt]),d=ct,v=pt),($!==b||Q!==y||ft!==P||Ht!==T)&&(i.blendFuncSeparate(fe[$],fe[Q],fe[ft],fe[Ht]),b=$,y=Q,P=ft,T=Ht),(Le.equals(A)===!1||Je!==C)&&(i.blendColor(Le.r,Le.g,Le.b,Je),A.copy(Le),C=Je),m=I,M=!1}function ze(I,ct){I.side===_n?At(i.CULL_FACE):lt(i.CULL_FACE);let $=I.side===un;ct&&($=!$),Kt($),I.blending===Rs&&I.transparent===!1?N(xi):N(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),a.setFunc(I.depthFunc),a.setTest(I.depthTest),a.setMask(I.depthWrite),r.setMask(I.colorWrite);const Q=I.stencilWrite;o.setTest(Q),Q&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),me(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?lt(i.SAMPLE_ALPHA_TO_COVERAGE):At(i.SAMPLE_ALPHA_TO_COVERAGE)}function Kt(I){x!==I&&(I?i.frontFace(i.CW):i.frontFace(i.CCW),x=I)}function jt(I){I!==Hf?(lt(i.CULL_FACE),I!==R&&(I===Bc?i.cullFace(i.BACK):I===Gf?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):At(i.CULL_FACE),R=I}function bt(I){I!==D&&(q&&i.lineWidth(I),D=I)}function me(I,ct,$){I?(lt(i.POLYGON_OFFSET_FILL),(U!==ct||z!==$)&&(i.polygonOffset(ct,$),U=ct,z=$)):At(i.POLYGON_OFFSET_FILL)}function Rt(I){I?lt(i.SCISSOR_TEST):At(i.SCISSOR_TEST)}function w(I){I===void 0&&(I=i.TEXTURE0+K-1),et!==I&&(i.activeTexture(I),et=I)}function S(I,ct,$){$===void 0&&(et===null?$=i.TEXTURE0+K-1:$=et);let Q=nt[$];Q===void 0&&(Q={type:void 0,texture:void 0},nt[$]=Q),(Q.type!==I||Q.texture!==ct)&&(et!==$&&(i.activeTexture($),et=$),i.bindTexture(I,ct||xt[I]),Q.type=I,Q.texture=ct)}function B(){const I=nt[et];I!==void 0&&I.type!==void 0&&(i.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function tt(){try{i.compressedTexImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Et(){try{i.texSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function gt(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{i.texStorage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function st(){try{i.texStorage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{i.texImage2D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(){try{i.texImage3D.apply(i,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Nt(I){ne.equals(I)===!1&&(i.scissor(I.x,I.y,I.z,I.w),ne.copy(I))}function vt(I){j.equals(I)===!1&&(i.viewport(I.x,I.y,I.z,I.w),j.copy(I))}function Jt(I,ct){let $=c.get(ct);$===void 0&&($=new WeakMap,c.set(ct,$));let Q=$.get(I);Q===void 0&&(Q=i.getUniformBlockIndex(ct,I.name),$.set(I,Q))}function qt(I,ct){const Q=c.get(ct).get(I);l.get(ct)!==Q&&(i.uniformBlockBinding(ct,Q,I.__bindingPointIndex),l.set(ct,Q))}function ve(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},et=null,nt={},u={},f=new WeakMap,p=[],g=null,_=!1,m=null,d=null,b=null,y=null,v=null,P=null,T=null,A=new wt(0,0,0),C=0,M=!1,x=null,R=null,D=null,U=null,z=null,ne.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:lt,disable:At,bindFramebuffer:Dt,drawBuffers:Pt,useProgram:zt,setBlending:N,setMaterial:ze,setFlipSided:Kt,setCullFace:jt,setLineWidth:bt,setPolygonOffset:me,setScissorTest:Rt,activeTexture:w,bindTexture:S,unbindTexture:B,compressedTexImage2D:J,compressedTexImage3D:tt,texImage2D:_t,texImage3D:Lt,updateUBOMapping:Jt,uniformBlockBinding:qt,texStorage2D:te,texStorage3D:st,texSubImage2D:Z,texSubImage3D:Et,compressedTexSubImage2D:ht,compressedTexSubImage3D:gt,scissor:Nt,viewport:vt,reset:ve}}function Uh(i,t,e,n){const s=y_(n);switch(e){case Pu:return i*t;case Du:return i*t;case Iu:return i*t*2;case Uu:return i*t/s.components*s.byteLength;case rc:return i*t/s.components*s.byteLength;case Nu:return i*t*2/s.components*s.byteLength;case ac:return i*t*2/s.components*s.byteLength;case Lu:return i*t*3/s.components*s.byteLength;case $n:return i*t*4/s.components*s.byteLength;case oc:return i*t*4/s.components*s.byteLength;case _a:case va:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case xa:case Ma:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case dl:case ml:return Math.max(i,16)*Math.max(t,8)/4;case fl:case pl:return Math.max(i,8)*Math.max(t,8)/2;case gl:case _l:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case vl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case xl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Ml:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case yl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case bl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case El:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Tl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case wl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Al:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case Rl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Cl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Pl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Ll:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Dl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case ya:case Il:case Ul:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Ou:case Nl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Ol:case Fl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function y_(i){switch(i){case Si:case Au:return{byteLength:1,components:1};case _r:case Ru:case si:return{byteLength:2,components:1};case ic:case sc:return{byteLength:2,components:4};case is:case nc:case _i:return{byteLength:4,components:1};case Cu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function S_(i,t,e,n,s,r,a){const o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ct,h=new WeakMap;let u;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,S){return p?new OffscreenCanvas(w,S):Ca("canvas")}function _(w,S,B){let J=1;const tt=Rt(w);if((tt.width>B||tt.height>B)&&(J=B/Math.max(tt.width,tt.height)),J<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const Z=Math.floor(J*tt.width),Et=Math.floor(J*tt.height);u===void 0&&(u=g(Z,Et));const ht=S?g(Z,Et):u;return ht.width=Z,ht.height=Et,ht.getContext("2d").drawImage(w,0,0,Z,Et),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+tt.width+"x"+tt.height+") to ("+Z+"x"+Et+")."),ht}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+tt.width+"x"+tt.height+")."),w;return w}function m(w){return w.generateMipmaps}function d(w){i.generateMipmap(w)}function b(w){return w.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:w.isWebGL3DRenderTarget?i.TEXTURE_3D:w.isWebGLArrayRenderTarget||w.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function y(w,S,B,J,tt=!1){if(w!==null){if(i[w]!==void 0)return i[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let Z=S;if(S===i.RED&&(B===i.FLOAT&&(Z=i.R32F),B===i.HALF_FLOAT&&(Z=i.R16F),B===i.UNSIGNED_BYTE&&(Z=i.R8)),S===i.RED_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.R8UI),B===i.UNSIGNED_SHORT&&(Z=i.R16UI),B===i.UNSIGNED_INT&&(Z=i.R32UI),B===i.BYTE&&(Z=i.R8I),B===i.SHORT&&(Z=i.R16I),B===i.INT&&(Z=i.R32I)),S===i.RG&&(B===i.FLOAT&&(Z=i.RG32F),B===i.HALF_FLOAT&&(Z=i.RG16F),B===i.UNSIGNED_BYTE&&(Z=i.RG8)),S===i.RG_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RG8UI),B===i.UNSIGNED_SHORT&&(Z=i.RG16UI),B===i.UNSIGNED_INT&&(Z=i.RG32UI),B===i.BYTE&&(Z=i.RG8I),B===i.SHORT&&(Z=i.RG16I),B===i.INT&&(Z=i.RG32I)),S===i.RGB_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),B===i.UNSIGNED_INT&&(Z=i.RGB32UI),B===i.BYTE&&(Z=i.RGB8I),B===i.SHORT&&(Z=i.RGB16I),B===i.INT&&(Z=i.RGB32I)),S===i.RGBA_INTEGER&&(B===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),B===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),B===i.UNSIGNED_INT&&(Z=i.RGBA32UI),B===i.BYTE&&(Z=i.RGBA8I),B===i.SHORT&&(Z=i.RGBA16I),B===i.INT&&(Z=i.RGBA32I)),S===i.RGB&&B===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),S===i.RGBA){const Et=tt?$a:Qt.getTransfer(J);B===i.FLOAT&&(Z=i.RGBA32F),B===i.HALF_FLOAT&&(Z=i.RGBA16F),B===i.UNSIGNED_BYTE&&(Z=Et===ce?i.SRGB8_ALPHA8:i.RGBA8),B===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),B===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(w,S){let B;return w?S===null||S===is||S===Os?B=i.DEPTH24_STENCIL8:S===_i?B=i.DEPTH32F_STENCIL8:S===_r&&(B=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===is||S===Os?B=i.DEPTH_COMPONENT24:S===_i?B=i.DEPTH_COMPONENT32F:S===_r&&(B=i.DEPTH_COMPONENT16),B}function P(w,S){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==ue&&w.minFilter!==Un?Math.log2(Math.max(S.width,S.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?S.mipmaps.length:1}function T(w){const S=w.target;S.removeEventListener("dispose",T),C(S),S.isVideoTexture&&h.delete(S)}function A(w){const S=w.target;S.removeEventListener("dispose",A),x(S)}function C(w){const S=n.get(w);if(S.__webglInit===void 0)return;const B=w.source,J=f.get(B);if(J){const tt=J[S.__cacheKey];tt.usedTimes--,tt.usedTimes===0&&M(w),Object.keys(J).length===0&&f.delete(B)}n.remove(w)}function M(w){const S=n.get(w);i.deleteTexture(S.__webglTexture);const B=w.source,J=f.get(B);delete J[S.__cacheKey],a.memory.textures--}function x(w){const S=n.get(w);if(w.depthTexture&&(w.depthTexture.dispose(),n.remove(w.depthTexture)),w.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(S.__webglFramebuffer[J]))for(let tt=0;tt<S.__webglFramebuffer[J].length;tt++)i.deleteFramebuffer(S.__webglFramebuffer[J][tt]);else i.deleteFramebuffer(S.__webglFramebuffer[J]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[J])}else{if(Array.isArray(S.__webglFramebuffer))for(let J=0;J<S.__webglFramebuffer.length;J++)i.deleteFramebuffer(S.__webglFramebuffer[J]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let J=0;J<S.__webglColorRenderbuffer.length;J++)S.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[J]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const B=w.textures;for(let J=0,tt=B.length;J<tt;J++){const Z=n.get(B[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(B[J])}n.remove(w)}let R=0;function D(){R=0}function U(){const w=R;return w>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+s.maxTextures),R+=1,w}function z(w){const S=[];return S.push(w.wrapS),S.push(w.wrapT),S.push(w.wrapR||0),S.push(w.magFilter),S.push(w.minFilter),S.push(w.anisotropy),S.push(w.internalFormat),S.push(w.format),S.push(w.type),S.push(w.generateMipmaps),S.push(w.premultiplyAlpha),S.push(w.flipY),S.push(w.unpackAlignment),S.push(w.colorSpace),S.join()}function K(w,S){const B=n.get(w);if(w.isVideoTexture&&bt(w),w.isRenderTargetTexture===!1&&w.version>0&&B.__version!==w.version){const J=w.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(B,w,S);return}}e.bindTexture(i.TEXTURE_2D,B.__webglTexture,i.TEXTURE0+S)}function q(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){j(B,w,S);return}e.bindTexture(i.TEXTURE_2D_ARRAY,B.__webglTexture,i.TEXTURE0+S)}function Y(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){j(B,w,S);return}e.bindTexture(i.TEXTURE_3D,B.__webglTexture,i.TEXTURE0+S)}function k(w,S){const B=n.get(w);if(w.version>0&&B.__version!==w.version){it(B,w,S);return}e.bindTexture(i.TEXTURE_CUBE_MAP,B.__webglTexture,i.TEXTURE0+S)}const et={[Aa]:i.REPEAT,[ts]:i.CLAMP_TO_EDGE,[ul]:i.MIRRORED_REPEAT},nt={[ue]:i.NEAREST,[hd]:i.NEAREST_MIPMAP_NEAREST,[Dr]:i.NEAREST_MIPMAP_LINEAR,[Un]:i.LINEAR,[eo]:i.LINEAR_MIPMAP_NEAREST,[gi]:i.LINEAR_MIPMAP_LINEAR},mt={[pd]:i.NEVER,[Md]:i.ALWAYS,[md]:i.LESS,[Fu]:i.LEQUAL,[gd]:i.EQUAL,[xd]:i.GEQUAL,[_d]:i.GREATER,[vd]:i.NOTEQUAL};function kt(w,S){if(S.type===_i&&t.has("OES_texture_float_linear")===!1&&(S.magFilter===Un||S.magFilter===eo||S.magFilter===Dr||S.magFilter===gi||S.minFilter===Un||S.minFilter===eo||S.minFilter===Dr||S.minFilter===gi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(w,i.TEXTURE_WRAP_S,et[S.wrapS]),i.texParameteri(w,i.TEXTURE_WRAP_T,et[S.wrapT]),(w===i.TEXTURE_3D||w===i.TEXTURE_2D_ARRAY)&&i.texParameteri(w,i.TEXTURE_WRAP_R,et[S.wrapR]),i.texParameteri(w,i.TEXTURE_MAG_FILTER,nt[S.magFilter]),i.texParameteri(w,i.TEXTURE_MIN_FILTER,nt[S.minFilter]),S.compareFunction&&(i.texParameteri(w,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(w,i.TEXTURE_COMPARE_FUNC,mt[S.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===ue||S.minFilter!==Dr&&S.minFilter!==gi||S.type===_i&&t.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const B=t.get("EXT_texture_filter_anisotropic");i.texParameterf(w,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function ne(w,S){let B=!1;w.__webglInit===void 0&&(w.__webglInit=!0,S.addEventListener("dispose",T));const J=S.source;let tt=f.get(J);tt===void 0&&(tt={},f.set(J,tt));const Z=z(S);if(Z!==w.__cacheKey){tt[Z]===void 0&&(tt[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,B=!0),tt[Z].usedTimes++;const Et=tt[w.__cacheKey];Et!==void 0&&(tt[w.__cacheKey].usedTimes--,Et.usedTimes===0&&M(S)),w.__cacheKey=Z,w.__webglTexture=tt[Z].texture}return B}function j(w,S,B){let J=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(J=i.TEXTURE_3D);const tt=ne(w,S),Z=S.source;e.bindTexture(J,w.__webglTexture,i.TEXTURE0+B);const Et=n.get(Z);if(Z.version!==Et.__version||tt===!0){e.activeTexture(i.TEXTURE0+B);const ht=Qt.getPrimaries(Qt.workingColorSpace),gt=S.colorSpace===Ni?null:Qt.getPrimaries(S.colorSpace),te=S.colorSpace===Ni||ht===gt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,te);let st=_(S.image,!1,s.maxTextureSize);st=me(S,st);const _t=r.convert(S.format,S.colorSpace),Lt=r.convert(S.type);let Nt=y(S.internalFormat,_t,Lt,S.colorSpace,S.isVideoTexture);kt(J,S);let vt;const Jt=S.mipmaps,qt=S.isVideoTexture!==!0,ve=Et.__version===void 0||tt===!0,I=Z.dataReady,ct=P(S,st);if(S.isDepthTexture)Nt=v(S.format===Fs,S.type),ve&&(qt?e.texStorage2D(i.TEXTURE_2D,1,Nt,st.width,st.height):e.texImage2D(i.TEXTURE_2D,0,Nt,st.width,st.height,0,_t,Lt,null));else if(S.isDataTexture)if(Jt.length>0){qt&&ve&&e.texStorage2D(i.TEXTURE_2D,ct,Nt,Jt[0].width,Jt[0].height);for(let $=0,Q=Jt.length;$<Q;$++)vt=Jt[$],qt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,vt.width,vt.height,_t,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,$,Nt,vt.width,vt.height,0,_t,Lt,vt.data);S.generateMipmaps=!1}else qt?(ve&&e.texStorage2D(i.TEXTURE_2D,ct,Nt,st.width,st.height),I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,st.width,st.height,_t,Lt,st.data)):e.texImage2D(i.TEXTURE_2D,0,Nt,st.width,st.height,0,_t,Lt,st.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){qt&&ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Nt,Jt[0].width,Jt[0].height,st.depth);for(let $=0,Q=Jt.length;$<Q;$++)if(vt=Jt[$],S.format!==$n)if(_t!==null)if(qt){if(I)if(S.layerUpdates.size>0){const pt=Uh(vt.width,vt.height,S.format,S.type);for(const ft of S.layerUpdates){const Ht=vt.data.subarray(ft*pt/vt.data.BYTES_PER_ELEMENT,(ft+1)*pt/vt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,ft,vt.width,vt.height,1,_t,Ht)}S.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,vt.width,vt.height,st.depth,_t,vt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,$,Nt,vt.width,vt.height,st.depth,0,vt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qt?I&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,$,0,0,0,vt.width,vt.height,st.depth,_t,Lt,vt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,$,Nt,vt.width,vt.height,st.depth,0,_t,Lt,vt.data)}else{qt&&ve&&e.texStorage2D(i.TEXTURE_2D,ct,Nt,Jt[0].width,Jt[0].height);for(let $=0,Q=Jt.length;$<Q;$++)vt=Jt[$],S.format!==$n?_t!==null?qt?I&&e.compressedTexSubImage2D(i.TEXTURE_2D,$,0,0,vt.width,vt.height,_t,vt.data):e.compressedTexImage2D(i.TEXTURE_2D,$,Nt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,vt.width,vt.height,_t,Lt,vt.data):e.texImage2D(i.TEXTURE_2D,$,Nt,vt.width,vt.height,0,_t,Lt,vt.data)}else if(S.isDataArrayTexture)if(qt){if(ve&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ct,Nt,st.width,st.height,st.depth),I)if(S.layerUpdates.size>0){const $=Uh(st.width,st.height,S.format,S.type);for(const Q of S.layerUpdates){const pt=st.data.subarray(Q*$/st.data.BYTES_PER_ELEMENT,(Q+1)*$/st.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,st.width,st.height,1,_t,Lt,pt)}S.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,st.width,st.height,st.depth,_t,Lt,st.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Nt,st.width,st.height,st.depth,0,_t,Lt,st.data);else if(S.isData3DTexture)qt?(ve&&e.texStorage3D(i.TEXTURE_3D,ct,Nt,st.width,st.height,st.depth),I&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,st.width,st.height,st.depth,_t,Lt,st.data)):e.texImage3D(i.TEXTURE_3D,0,Nt,st.width,st.height,st.depth,0,_t,Lt,st.data);else if(S.isFramebufferTexture){if(ve)if(qt)e.texStorage2D(i.TEXTURE_2D,ct,Nt,st.width,st.height);else{let $=st.width,Q=st.height;for(let pt=0;pt<ct;pt++)e.texImage2D(i.TEXTURE_2D,pt,Nt,$,Q,0,_t,Lt,null),$>>=1,Q>>=1}}else if(Jt.length>0){if(qt&&ve){const $=Rt(Jt[0]);e.texStorage2D(i.TEXTURE_2D,ct,Nt,$.width,$.height)}for(let $=0,Q=Jt.length;$<Q;$++)vt=Jt[$],qt?I&&e.texSubImage2D(i.TEXTURE_2D,$,0,0,_t,Lt,vt):e.texImage2D(i.TEXTURE_2D,$,Nt,_t,Lt,vt);S.generateMipmaps=!1}else if(qt){if(ve){const $=Rt(st);e.texStorage2D(i.TEXTURE_2D,ct,Nt,$.width,$.height)}I&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,_t,Lt,st)}else e.texImage2D(i.TEXTURE_2D,0,Nt,_t,Lt,st);m(S)&&d(J),Et.__version=Z.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function it(w,S,B){if(S.image.length!==6)return;const J=ne(w,S),tt=S.source;e.bindTexture(i.TEXTURE_CUBE_MAP,w.__webglTexture,i.TEXTURE0+B);const Z=n.get(tt);if(tt.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+B);const Et=Qt.getPrimaries(Qt.workingColorSpace),ht=S.colorSpace===Ni?null:Qt.getPrimaries(S.colorSpace),gt=S.colorSpace===Ni||Et===ht?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const te=S.isCompressedTexture||S.image[0].isCompressedTexture,st=S.image[0]&&S.image[0].isDataTexture,_t=[];for(let Q=0;Q<6;Q++)!te&&!st?_t[Q]=_(S.image[Q],!0,s.maxCubemapSize):_t[Q]=st?S.image[Q].image:S.image[Q],_t[Q]=me(S,_t[Q]);const Lt=_t[0],Nt=r.convert(S.format,S.colorSpace),vt=r.convert(S.type),Jt=y(S.internalFormat,Nt,vt,S.colorSpace),qt=S.isVideoTexture!==!0,ve=Z.__version===void 0||J===!0,I=tt.dataReady;let ct=P(S,Lt);kt(i.TEXTURE_CUBE_MAP,S);let $;if(te){qt&&ve&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Jt,Lt.width,Lt.height);for(let Q=0;Q<6;Q++){$=_t[Q].mipmaps;for(let pt=0;pt<$.length;pt++){const ft=$[pt];S.format!==$n?Nt!==null?qt?I&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,ft.width,ft.height,Nt,ft.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,Jt,ft.width,ft.height,0,ft.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,0,0,ft.width,ft.height,Nt,vt,ft.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt,Jt,ft.width,ft.height,0,Nt,vt,ft.data)}}}else{if($=S.mipmaps,qt&&ve){$.length>0&&ct++;const Q=Rt(_t[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ct,Jt,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(st){qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,_t[Q].width,_t[Q].height,Nt,vt,_t[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,_t[Q].width,_t[Q].height,0,Nt,vt,_t[Q].data);for(let pt=0;pt<$.length;pt++){const Ht=$[pt].image[Q].image;qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Ht.width,Ht.height,Nt,vt,Ht.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,Jt,Ht.width,Ht.height,0,Nt,vt,Ht.data)}}else{qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Nt,vt,_t[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Jt,Nt,vt,_t[Q]);for(let pt=0;pt<$.length;pt++){const ft=$[pt];qt?I&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,0,0,Nt,vt,ft.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,pt+1,Jt,Nt,vt,ft.image[Q])}}}m(S)&&d(i.TEXTURE_CUBE_MAP),Z.__version=tt.version,S.onUpdate&&S.onUpdate(S)}w.__version=S.version}function xt(w,S,B,J,tt,Z){const Et=r.convert(B.format,B.colorSpace),ht=r.convert(B.type),gt=y(B.internalFormat,Et,ht,B.colorSpace),te=n.get(S),st=n.get(B);if(st.__renderTarget=S,!te.__hasExternalTextures){const _t=Math.max(1,S.width>>Z),Lt=Math.max(1,S.height>>Z);tt===i.TEXTURE_3D||tt===i.TEXTURE_2D_ARRAY?e.texImage3D(tt,Z,gt,_t,Lt,S.depth,0,Et,ht,null):e.texImage2D(tt,Z,gt,_t,Lt,0,Et,ht,null)}e.bindFramebuffer(i.FRAMEBUFFER,w),jt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,tt,st.__webglTexture,0,Kt(S)):(tt===i.TEXTURE_2D||tt>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&tt<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,tt,st.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function lt(w,S,B){if(i.bindRenderbuffer(i.RENDERBUFFER,w),S.depthBuffer){const J=S.depthTexture,tt=J&&J.isDepthTexture?J.type:null,Z=v(S.stencilBuffer,tt),Et=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ht=Kt(S);jt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ht,Z,S.width,S.height):B?i.renderbufferStorageMultisample(i.RENDERBUFFER,ht,Z,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Z,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Et,i.RENDERBUFFER,w)}else{const J=S.textures;for(let tt=0;tt<J.length;tt++){const Z=J[tt],Et=r.convert(Z.format,Z.colorSpace),ht=r.convert(Z.type),gt=y(Z.internalFormat,Et,ht,Z.colorSpace),te=Kt(S);B&&jt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,te,gt,S.width,S.height):jt(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,te,gt,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,gt,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function At(w,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,w),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(S.depthTexture);J.__renderTarget=S,(!J.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const tt=J.__webglTexture,Z=Kt(S);if(S.depthTexture.format===Cs)jt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,tt,0);else if(S.depthTexture.format===Fs)jt(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,tt,0);else throw new Error("Unknown depthTexture format")}function Dt(w){const S=n.get(w),B=w.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==w.depthTexture){const J=w.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),J){const tt=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,J.removeEventListener("dispose",tt)};J.addEventListener("dispose",tt),S.__depthDisposeCallback=tt}S.__boundDepthTexture=J}if(w.depthTexture&&!S.__autoAllocateDepthBuffer){if(B)throw new Error("target.depthTexture not supported in Cube render targets");At(S.__webglFramebuffer,w)}else if(B){S.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[J]),S.__webglDepthbuffer[J]===void 0)S.__webglDepthbuffer[J]=i.createRenderbuffer(),lt(S.__webglDepthbuffer[J],w,!1);else{const tt=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,tt,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),lt(S.__webglDepthbuffer,w,!1);else{const J=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,tt=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,tt),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,tt)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Pt(w,S,B){const J=n.get(w);S!==void 0&&xt(J.__webglFramebuffer,w,w.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),B!==void 0&&Dt(w)}function zt(w){const S=w.texture,B=n.get(w),J=n.get(S);w.addEventListener("dispose",A);const tt=w.textures,Z=w.isWebGLCubeRenderTarget===!0,Et=tt.length>1;if(Et||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=S.version,a.memory.textures++),Z){B.__webglFramebuffer=[];for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer[ht]=[];for(let gt=0;gt<S.mipmaps.length;gt++)B.__webglFramebuffer[ht][gt]=i.createFramebuffer()}else B.__webglFramebuffer[ht]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){B.__webglFramebuffer=[];for(let ht=0;ht<S.mipmaps.length;ht++)B.__webglFramebuffer[ht]=i.createFramebuffer()}else B.__webglFramebuffer=i.createFramebuffer();if(Et)for(let ht=0,gt=tt.length;ht<gt;ht++){const te=n.get(tt[ht]);te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture(),a.memory.textures++)}if(w.samples>0&&jt(w)===!1){B.__webglMultisampledFramebuffer=i.createFramebuffer(),B.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let ht=0;ht<tt.length;ht++){const gt=tt[ht];B.__webglColorRenderbuffer[ht]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,B.__webglColorRenderbuffer[ht]);const te=r.convert(gt.format,gt.colorSpace),st=r.convert(gt.type),_t=y(gt.internalFormat,te,st,gt.colorSpace,w.isXRRenderTarget===!0),Lt=Kt(w);i.renderbufferStorageMultisample(i.RENDERBUFFER,Lt,_t,w.width,w.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ht,i.RENDERBUFFER,B.__webglColorRenderbuffer[ht])}i.bindRenderbuffer(i.RENDERBUFFER,null),w.depthBuffer&&(B.__webglDepthRenderbuffer=i.createRenderbuffer(),lt(B.__webglDepthRenderbuffer,w,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),kt(i.TEXTURE_CUBE_MAP,S);for(let ht=0;ht<6;ht++)if(S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)xt(B.__webglFramebuffer[ht][gt],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,gt);else xt(B.__webglFramebuffer[ht],w,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ht,0);m(S)&&d(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Et){for(let ht=0,gt=tt.length;ht<gt;ht++){const te=tt[ht],st=n.get(te);e.bindTexture(i.TEXTURE_2D,st.__webglTexture),kt(i.TEXTURE_2D,te),xt(B.__webglFramebuffer,w,te,i.COLOR_ATTACHMENT0+ht,i.TEXTURE_2D,0),m(te)&&d(i.TEXTURE_2D)}e.unbindTexture()}else{let ht=i.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(ht=w.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ht,J.__webglTexture),kt(ht,S),S.mipmaps&&S.mipmaps.length>0)for(let gt=0;gt<S.mipmaps.length;gt++)xt(B.__webglFramebuffer[gt],w,S,i.COLOR_ATTACHMENT0,ht,gt);else xt(B.__webglFramebuffer,w,S,i.COLOR_ATTACHMENT0,ht,0);m(S)&&d(ht),e.unbindTexture()}w.depthBuffer&&Dt(w)}function Bt(w){const S=w.textures;for(let B=0,J=S.length;B<J;B++){const tt=S[B];if(m(tt)){const Z=b(w),Et=n.get(tt).__webglTexture;e.bindTexture(Z,Et),d(Z),e.unbindTexture()}}}const fe=[],N=[];function ze(w){if(w.samples>0){if(jt(w)===!1){const S=w.textures,B=w.width,J=w.height;let tt=i.COLOR_BUFFER_BIT;const Z=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Et=n.get(w),ht=S.length>1;if(ht)for(let gt=0;gt<S.length;gt++)e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,Et.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let gt=0;gt<S.length;gt++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(tt|=i.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(tt|=i.STENCIL_BUFFER_BIT)),ht){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const te=n.get(S[gt]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,te,0)}i.blitFramebuffer(0,0,B,J,0,0,B,J,tt,i.NEAREST),l===!0&&(fe.length=0,N.length=0,fe.push(i.COLOR_ATTACHMENT0+gt),w.depthBuffer&&w.resolveDepthBuffer===!1&&(fe.push(Z),N.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,N)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,fe))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ht)for(let gt=0;gt<S.length;gt++){e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.RENDERBUFFER,Et.__webglColorRenderbuffer[gt]);const te=n.get(S[gt]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,Et.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+gt,i.TEXTURE_2D,te,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,Et.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const S=w.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function Kt(w){return Math.min(s.maxSamples,w.samples)}function jt(w){const S=n.get(w);return w.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function bt(w){const S=a.render.frame;h.get(w)!==S&&(h.set(w,S),w.update())}function me(w,S){const B=w.colorSpace,J=w.format,tt=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||B!==Gs&&B!==Ni&&(Qt.getTransfer(B)===ce?(J!==$n||tt!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",B)),S}function Rt(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=D,this.setTexture2D=K,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=k,this.rebindTextures=Pt,this.setupRenderTarget=zt,this.updateRenderTargetMipmap=Bt,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=Dt,this.setupFrameBufferTexture=xt,this.useMultisampledRTT=jt}function b_(i,t){function e(n,s=Ni){let r;const a=Qt.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===ic)return i.UNSIGNED_SHORT_4_4_4_4;if(n===sc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Cu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Au)return i.BYTE;if(n===Ru)return i.SHORT;if(n===_r)return i.UNSIGNED_SHORT;if(n===nc)return i.INT;if(n===is)return i.UNSIGNED_INT;if(n===_i)return i.FLOAT;if(n===si)return i.HALF_FLOAT;if(n===Pu)return i.ALPHA;if(n===Lu)return i.RGB;if(n===$n)return i.RGBA;if(n===Du)return i.LUMINANCE;if(n===Iu)return i.LUMINANCE_ALPHA;if(n===Cs)return i.DEPTH_COMPONENT;if(n===Fs)return i.DEPTH_STENCIL;if(n===Uu)return i.RED;if(n===rc)return i.RED_INTEGER;if(n===Nu)return i.RG;if(n===ac)return i.RG_INTEGER;if(n===oc)return i.RGBA_INTEGER;if(n===_a||n===va||n===xa||n===Ma)if(a===ce)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===_a)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===_a)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ma)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===fl||n===dl||n===pl||n===ml)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===dl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===pl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===ml)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===gl||n===_l||n===vl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===gl||n===_l)return a===ce?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===vl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===xl||n===Ml||n===yl||n===Sl||n===bl||n===El||n===Tl||n===wl||n===Al||n===Rl||n===Cl||n===Pl||n===Ll||n===Dl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===xl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ml)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===yl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Sl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===bl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===El)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Tl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===wl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Al)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Rl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Cl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Pl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Ll)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Dl)return a===ce?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ya||n===Il||n===Ul)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===ya)return a===ce?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Il)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ul)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ou||n===Nl||n===Ol||n===Fl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===ya)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Nl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ol)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Fl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Os?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class E_ extends En{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class we extends Fe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const T_={type:"move"};class Po{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new we,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new we,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new we,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),d=this._getHandJoint(c,_);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(T_)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new we;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const w_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,A_=`
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

}`;class R_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new fn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new on({vertexShader:w_,fragmentShader:A_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new yi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class C_ extends Vs{constructor(t,e){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,g=null;const _=new R_,m=e.getContextAttributes();let d=null,b=null;const y=[],v=[],P=new Ct;let T=null;const A=new En;A.viewport=new pe;const C=new En;C.viewport=new pe;const M=[A,C],x=new E_;let R=null,D=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let it=y[j];return it===void 0&&(it=new Po,y[j]=it),it.getTargetRaySpace()},this.getControllerGrip=function(j){let it=y[j];return it===void 0&&(it=new Po,y[j]=it),it.getGripSpace()},this.getHand=function(j){let it=y[j];return it===void 0&&(it=new Po,y[j]=it),it.getHandSpace()};function U(j){const it=v.indexOf(j.inputSource);if(it===-1)return;const xt=y[it];xt!==void 0&&(xt.update(j.inputSource,j.frame,c||a),xt.dispatchEvent({type:j.type,data:j.inputSource}))}function z(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",K);for(let j=0;j<y.length;j++){const it=v[j];it!==null&&(v[j]=null,y[j].disconnect(it))}R=null,D=null,_.reset(),t.setRenderTarget(d),p=null,f=null,u=null,s=null,b=null,ne.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(d=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",z),s.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const it={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,e,it),s.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),b=new Fn(p.framebufferWidth,p.framebufferHeight,{format:$n,type:Si,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let it=null,xt=null,lt=null;m.depth&&(lt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,it=m.stencil?Fs:Cs,xt=m.stencil?Os:is);const At={colorFormat:e.RGBA8,depthFormat:lt,scaleFactor:r};u=new XRWebGLBinding(s,e),f=u.createProjectionLayer(At),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Fn(f.textureWidth,f.textureHeight,{format:$n,type:Si,depthTexture:new Ku(f.textureWidth,f.textureHeight,xt,void 0,void 0,void 0,void 0,void 0,void 0,it),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),ne.setContext(s),ne.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function K(j){for(let it=0;it<j.removed.length;it++){const xt=j.removed[it],lt=v.indexOf(xt);lt>=0&&(v[lt]=null,y[lt].disconnect(xt))}for(let it=0;it<j.added.length;it++){const xt=j.added[it];let lt=v.indexOf(xt);if(lt===-1){for(let Dt=0;Dt<y.length;Dt++)if(Dt>=v.length){v.push(xt),lt=Dt;break}else if(v[Dt]===null){v[Dt]=xt,lt=Dt;break}if(lt===-1)break}const At=y[lt];At&&At.connect(xt)}}const q=new L,Y=new L;function k(j,it,xt){q.setFromMatrixPosition(it.matrixWorld),Y.setFromMatrixPosition(xt.matrixWorld);const lt=q.distanceTo(Y),At=it.projectionMatrix.elements,Dt=xt.projectionMatrix.elements,Pt=At[14]/(At[10]-1),zt=At[14]/(At[10]+1),Bt=(At[9]+1)/At[5],fe=(At[9]-1)/At[5],N=(At[8]-1)/At[0],ze=(Dt[8]+1)/Dt[0],Kt=Pt*N,jt=Pt*ze,bt=lt/(-N+ze),me=bt*-N;if(it.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(me),j.translateZ(bt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),At[10]===-1)j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse);else{const Rt=Pt+bt,w=zt+bt,S=Kt-me,B=jt+(lt-me),J=Bt*zt/w*Rt,tt=fe*zt/w*Rt;j.projectionMatrix.makePerspective(S,B,J,tt,Rt,w),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function et(j,it){it===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(it.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let it=j.near,xt=j.far;_.texture!==null&&(_.depthNear>0&&(it=_.depthNear),_.depthFar>0&&(xt=_.depthFar)),x.near=C.near=A.near=it,x.far=C.far=A.far=xt,(R!==x.near||D!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,D=x.far),A.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,x.layers.mask=A.layers.mask|C.layers.mask;const lt=j.parent,At=x.cameras;et(x,lt);for(let Dt=0;Dt<At.length;Dt++)et(At[Dt],lt);At.length===2?k(x,A,C):x.projectionMatrix.copy(A.projectionMatrix),nt(j,x,lt)};function nt(j,it,xt){xt===null?j.matrix.copy(it.matrixWorld):(j.matrix.copy(xt.matrixWorld),j.matrix.invert(),j.matrix.multiply(it.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(it.projectionMatrix),j.projectionMatrixInverse.copy(it.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Bl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(j){l=j,f!==null&&(f.fixedFoveation=j),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let mt=null;function kt(j,it){if(h=it.getViewerPose(c||a),g=it,h!==null){const xt=h.views;p!==null&&(t.setRenderTargetFramebuffer(b,p.framebuffer),t.setRenderTarget(b));let lt=!1;xt.length!==x.cameras.length&&(x.cameras.length=0,lt=!0);for(let Dt=0;Dt<xt.length;Dt++){const Pt=xt[Dt];let zt=null;if(p!==null)zt=p.getViewport(Pt);else{const fe=u.getViewSubImage(f,Pt);zt=fe.viewport,Dt===0&&(t.setRenderTargetTextures(b,fe.colorTexture,f.ignoreDepthValues?void 0:fe.depthStencilTexture),t.setRenderTarget(b))}let Bt=M[Dt];Bt===void 0&&(Bt=new En,Bt.layers.enable(Dt),Bt.viewport=new pe,M[Dt]=Bt),Bt.matrix.fromArray(Pt.transform.matrix),Bt.matrix.decompose(Bt.position,Bt.quaternion,Bt.scale),Bt.projectionMatrix.fromArray(Pt.projectionMatrix),Bt.projectionMatrixInverse.copy(Bt.projectionMatrix).invert(),Bt.viewport.set(zt.x,zt.y,zt.width,zt.height),Dt===0&&(x.matrix.copy(Bt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),lt===!0&&x.cameras.push(Bt)}const At=s.enabledFeatures;if(At&&At.includes("depth-sensing")){const Dt=u.getDepthInformation(xt[0]);Dt&&Dt.isValid&&Dt.texture&&_.init(t,Dt,s.renderState)}}for(let xt=0;xt<y.length;xt++){const lt=v[xt],At=y[xt];lt!==null&&At!==void 0&&At.update(lt,it,c||a)}mt&&mt(j,it),it.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:it}),g=null}const ne=new $u;ne.setAnimationLoop(kt),this.setAnimationLoop=function(j){mt=j},this.dispose=function(){}}}const Ki=new Zn,P_=new ye;function L_(i,t){function e(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function n(m,d){d.color.getRGB(m.fogColor.value,Xu(i)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function s(m,d,b,y,v){d.isMeshBasicMaterial||d.isMeshLambertMaterial?r(m,d):d.isMeshToonMaterial?(r(m,d),u(m,d)):d.isMeshPhongMaterial?(r(m,d),h(m,d)):d.isMeshStandardMaterial?(r(m,d),f(m,d),d.isMeshPhysicalMaterial&&p(m,d,v)):d.isMeshMatcapMaterial?(r(m,d),g(m,d)):d.isMeshDepthMaterial?r(m,d):d.isMeshDistanceMaterial?(r(m,d),_(m,d)):d.isMeshNormalMaterial?r(m,d):d.isLineBasicMaterial?(a(m,d),d.isLineDashedMaterial&&o(m,d)):d.isPointsMaterial?l(m,d,b,y):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,e(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===un&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,e(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===un&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,e(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,e(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,e(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const b=t.get(d),y=b.envMap,v=b.envMapRotation;y&&(m.envMap.value=y,Ki.copy(v),Ki.x*=-1,Ki.y*=-1,Ki.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Ki.y*=-1,Ki.z*=-1),m.envMapRotation.value.setFromMatrix4(P_.makeRotationFromEuler(Ki)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,e(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,e(d.aoMap,m.aoMapTransform))}function a(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform))}function o(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,b,y){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*b,m.scale.value=y*.5,d.map&&(m.map.value=d.map,e(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,e(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,e(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function h(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function f(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,e(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,e(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,b){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,e(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,e(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,e(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,e(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,e(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===un&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,e(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,e(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,e(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,e(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,e(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,e(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,e(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function _(m,d){const b=t.get(d).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function D_(i,t,e,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){const v=y.program;n.uniformBlockBinding(b,v)}function c(b,y){let v=s[b.id];v===void 0&&(g(b),v=h(b),s[b.id]=v,b.addEventListener("dispose",m));const P=y.program;n.updateUBOMapping(b,P);const T=t.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function h(b){const y=u();b.__bindingPointIndex=y;const v=i.createBuffer(),P=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,P,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,v),v}function u(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const y=s[b.id],v=b.uniforms,P=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,A=v.length;T<A;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,x=C.length;M<x;M++){const R=C[M];if(p(R,T,M,P)===!0){const D=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let z=0;for(let K=0;K<U.length;K++){const q=U[K],Y=_(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,D+z,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,z),z+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,D,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(b,y,v,P){const T=b.value,A=y+"_"+v;if(P[A]===void 0)return typeof T=="number"||typeof T=="boolean"?P[A]=T:P[A]=T.clone(),!0;{const C=P[A];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return P[A]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(b){const y=b.uniforms;let v=0;const P=16;for(let A=0,C=y.length;A<C;A++){const M=Array.isArray(y[A])?y[A]:[y[A]];for(let x=0,R=M.length;x<R;x++){const D=M[x],U=Array.isArray(D.value)?D.value:[D.value];for(let z=0,K=U.length;z<K;z++){const q=U[z],Y=_(q),k=v%P,et=k%Y.boundary,nt=k+et;v+=et,nt!==0&&P-nt<Y.storage&&(v+=P-nt),D.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),D.__offset=v,v+=Y.storage}}}const T=v%P;return T>0&&(v+=P-T),b.__size=v,b.__cache={},this}function _(b){const y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){const y=b.target;y.removeEventListener("dispose",m);const v=a.indexOf(y.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function d(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:d}}class I_{constructor(t={}){const{canvas:e=Sd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let p;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=n.getContextAttributes().alpha}else p=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,d=null;const b=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ke,this.toneMapping=Fi,this.toneMappingExposure=1;const v=this;let P=!1,T=0,A=0,C=null,M=-1,x=null;const R=new pe,D=new pe;let U=null;const z=new wt(0);let K=0,q=e.width,Y=e.height,k=1,et=null,nt=null;const mt=new pe(0,0,q,Y),kt=new pe(0,0,q,Y);let ne=!1;const j=new hc;let it=!1,xt=!1;const lt=new ye,At=new ye,Dt=new L,Pt=new pe,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function fe(){return C===null?k:1}let N=n;function ze(E,O){return e.getContext(E,O)}try{const E={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ql}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",pt,!1),e.addEventListener("webglcontextcreationerror",ft,!1),N===null){const O="webgl2";if(N=ze(O,E),N===null)throw ze(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Kt,jt,bt,me,Rt,w,S,B,J,tt,Z,Et,ht,gt,te,st,_t,Lt,Nt,vt,Jt,qt,ve,I;function ct(){Kt=new z0(N),Kt.init(),qt=new b_(N,Kt),jt=new D0(N,Kt,t,qt),bt=new M_(N,Kt),jt.reverseDepthBuffer&&f&&bt.buffers.depth.setReversed(!0),me=new H0(N),Rt=new r_,w=new S_(N,Kt,bt,Rt,jt,qt,me),S=new U0(v),B=new F0(v),J=new $d(N),ve=new P0(N,J),tt=new B0(N,J,me,ve),Z=new V0(N,tt,J,me),Nt=new G0(N,jt,w),st=new I0(Rt),Et=new s_(v,S,B,Kt,jt,ve,st),ht=new L_(v,Rt),gt=new o_,te=new d_(Kt),Lt=new C0(v,S,B,bt,Z,p,l),_t=new v_(v,Z,jt),I=new D_(N,me,jt,bt),vt=new L0(N,Kt,me),Jt=new k0(N,Kt,me),me.programs=Et.programs,v.capabilities=jt,v.extensions=Kt,v.properties=Rt,v.renderLists=gt,v.shadowMap=_t,v.state=bt,v.info=me}ct();const $=new C_(v,N);this.xr=$,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const E=Kt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Kt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return k},this.setPixelRatio=function(E){E!==void 0&&(k=E,this.setSize(q,Y,!1))},this.getSize=function(E){return E.set(q,Y)},this.setSize=function(E,O,H=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,Y=O,e.width=Math.floor(E*k),e.height=Math.floor(O*k),H===!0&&(e.style.width=E+"px",e.style.height=O+"px"),this.setViewport(0,0,E,O)},this.getDrawingBufferSize=function(E){return E.set(q*k,Y*k).floor()},this.setDrawingBufferSize=function(E,O,H){q=E,Y=O,k=H,e.width=Math.floor(E*H),e.height=Math.floor(O*H),this.setViewport(0,0,E,O)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(mt)},this.setViewport=function(E,O,H,G){E.isVector4?mt.set(E.x,E.y,E.z,E.w):mt.set(E,O,H,G),bt.viewport(R.copy(mt).multiplyScalar(k).round())},this.getScissor=function(E){return E.copy(kt)},this.setScissor=function(E,O,H,G){E.isVector4?kt.set(E.x,E.y,E.z,E.w):kt.set(E,O,H,G),bt.scissor(D.copy(kt).multiplyScalar(k).round())},this.getScissorTest=function(){return ne},this.setScissorTest=function(E){bt.setScissorTest(ne=E)},this.setOpaqueSort=function(E){et=E},this.setTransparentSort=function(E){nt=E},this.getClearColor=function(E){return E.copy(Lt.getClearColor())},this.setClearColor=function(){Lt.setClearColor.apply(Lt,arguments)},this.getClearAlpha=function(){return Lt.getClearAlpha()},this.setClearAlpha=function(){Lt.setClearAlpha.apply(Lt,arguments)},this.clear=function(E=!0,O=!0,H=!0){let G=0;if(E){let F=!1;if(C!==null){const rt=C.texture.format;F=rt===oc||rt===ac||rt===rc}if(F){const rt=C.texture.type,dt=rt===Si||rt===is||rt===_r||rt===Os||rt===ic||rt===sc,Mt=Lt.getClearColor(),yt=Lt.getClearAlpha(),Ft=Mt.r,Gt=Mt.g,St=Mt.b;dt?(g[0]=Ft,g[1]=Gt,g[2]=St,g[3]=yt,N.clearBufferuiv(N.COLOR,0,g)):(_[0]=Ft,_[1]=Gt,_[2]=St,_[3]=yt,N.clearBufferiv(N.COLOR,0,_))}else G|=N.COLOR_BUFFER_BIT}O&&(G|=N.DEPTH_BUFFER_BIT),H&&(G|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",pt,!1),e.removeEventListener("webglcontextcreationerror",ft,!1),gt.dispose(),te.dispose(),Rt.dispose(),S.dispose(),B.dispose(),Z.dispose(),ve.dispose(),I.dispose(),Et.dispose(),$.dispose(),$.removeEventListener("sessionstart",Lc),$.removeEventListener("sessionend",Dc),Vi.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function pt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=me.autoReset,O=_t.enabled,H=_t.autoUpdate,G=_t.needsUpdate,F=_t.type;ct(),me.autoReset=E,_t.enabled=O,_t.autoUpdate=H,_t.needsUpdate=G,_t.type=F}function ft(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ht(E){const O=E.target;O.removeEventListener("dispose",Ht),Le(O)}function Le(E){Je(E),Rt.remove(E)}function Je(E){const O=Rt.get(E).programs;O!==void 0&&(O.forEach(function(H){Et.releaseProgram(H)}),E.isShaderMaterial&&Et.releaseShaderCache(E))}this.renderBufferDirect=function(E,O,H,G,F,rt){O===null&&(O=zt);const dt=F.isMesh&&F.matrixWorld.determinant()<0,Mt=zf(E,O,H,G,F);bt.setMaterial(G,dt);let yt=H.index,Ft=1;if(G.wireframe===!0){if(yt=tt.getWireframeAttribute(H),yt===void 0)return;Ft=2}const Gt=H.drawRange,St=H.attributes.position;let ee=Gt.start*Ft,xe=(Gt.start+Gt.count)*Ft;rt!==null&&(ee=Math.max(ee,rt.start*Ft),xe=Math.min(xe,(rt.start+rt.count)*Ft)),yt!==null?(ee=Math.max(ee,0),xe=Math.min(xe,yt.count)):St!=null&&(ee=Math.max(ee,0),xe=Math.min(xe,St.count));const Se=xe-ee;if(Se<0||Se===1/0)return;ve.setup(F,G,Mt,H,yt);let pn,se=vt;if(yt!==null&&(pn=J.get(yt),se=Jt,se.setIndex(pn)),F.isMesh)G.wireframe===!0?(bt.setLineWidth(G.wireframeLinewidth*fe()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(F.isLine){let Tt=G.linewidth;Tt===void 0&&(Tt=1),bt.setLineWidth(Tt*fe()),F.isLineSegments?se.setMode(N.LINES):F.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else F.isPoints?se.setMode(N.POINTS):F.isSprite&&se.setMode(N.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)se.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(Kt.get("WEBGL_multi_draw"))se.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{const Tt=F._multiDrawStarts,oi=F._multiDrawCounts,re=F._multiDrawCount,Gn=yt?J.get(yt).bytesPerElement:1,os=Rt.get(G).currentProgram.getUniforms();for(let xn=0;xn<re;xn++)os.setValue(N,"_gl_DrawID",xn),se.render(Tt[xn]/Gn,oi[xn])}else if(F.isInstancedMesh)se.renderInstances(ee,Se,F.count);else if(H.isInstancedBufferGeometry){const Tt=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,oi=Math.min(H.instanceCount,Tt);se.renderInstances(ee,Se,oi)}else se.render(ee,Se)};function le(E,O,H){E.transparent===!0&&E.side===_n&&E.forceSinglePass===!1?(E.side=un,E.needsUpdate=!0,Lr(E,O,H),E.side=Hi,E.needsUpdate=!0,Lr(E,O,H),E.side=_n):Lr(E,O,H)}this.compile=function(E,O,H=null){H===null&&(H=E),d=te.get(H),d.init(O),y.push(d),H.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),E!==H&&E.traverseVisible(function(F){F.isLight&&F.layers.test(O.layers)&&(d.pushLight(F),F.castShadow&&d.pushShadow(F))}),d.setupLights();const G=new Set;return E.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;const rt=F.material;if(rt)if(Array.isArray(rt))for(let dt=0;dt<rt.length;dt++){const Mt=rt[dt];le(Mt,H,F),G.add(Mt)}else le(rt,H,F),G.add(rt)}),y.pop(),d=null,G},this.compileAsync=function(E,O,H=null){const G=this.compile(E,O,H);return new Promise(F=>{function rt(){if(G.forEach(function(dt){Rt.get(dt).currentProgram.isReady()&&G.delete(dt)}),G.size===0){F(E);return}setTimeout(rt,10)}Kt.get("KHR_parallel_shader_compile")!==null?rt():setTimeout(rt,10)})};let Hn=null;function ai(E){Hn&&Hn(E)}function Lc(){Vi.stop()}function Dc(){Vi.start()}const Vi=new $u;Vi.setAnimationLoop(ai),typeof self<"u"&&Vi.setContext(self),this.setAnimationLoop=function(E){Hn=E,$.setAnimationLoop(E),E===null?Vi.stop():Vi.start()},$.addEventListener("sessionstart",Lc),$.addEventListener("sessionend",Dc),this.render=function(E,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(O),O=$.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,O,C),d=te.get(E,y.length),d.init(O),y.push(d),At.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),j.setFromProjectionMatrix(At),xt=this.localClippingEnabled,it=st.init(this.clippingPlanes,xt),m=gt.get(E,b.length),m.init(),b.push(m),$.enabled===!0&&$.isPresenting===!0){const rt=v.xr.getDepthSensingMesh();rt!==null&&to(rt,O,-1/0,v.sortObjects)}to(E,O,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(et,nt),Bt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,Bt&&Lt.addToRenderList(m,E),this.info.render.frame++,it===!0&&st.beginShadows();const H=d.state.shadowsArray;_t.render(H,E,O),it===!0&&st.endShadows(),this.info.autoReset===!0&&this.info.reset();const G=m.opaque,F=m.transmissive;if(d.setupLights(),O.isArrayCamera){const rt=O.cameras;if(F.length>0)for(let dt=0,Mt=rt.length;dt<Mt;dt++){const yt=rt[dt];Uc(G,F,E,yt)}Bt&&Lt.render(E);for(let dt=0,Mt=rt.length;dt<Mt;dt++){const yt=rt[dt];Ic(m,E,yt,yt.viewport)}}else F.length>0&&Uc(G,F,E,O),Bt&&Lt.render(E),Ic(m,E,O);C!==null&&(w.updateMultisampleRenderTarget(C),w.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,O),ve.resetDefaultState(),M=-1,x=null,y.pop(),y.length>0?(d=y[y.length-1],it===!0&&st.setGlobalState(v.clippingPlanes,d.state.camera)):d=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function to(E,O,H,G){if(E.visible===!1)return;if(E.layers.test(O.layers)){if(E.isGroup)H=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(O);else if(E.isLight)d.pushLight(E),E.castShadow&&d.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){G&&Pt.setFromMatrixPosition(E.matrixWorld).applyMatrix4(At);const dt=Z.update(E),Mt=E.material;Mt.visible&&m.push(E,dt,Mt,H,Pt.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const dt=Z.update(E),Mt=E.material;if(G&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Pt.copy(E.boundingSphere.center)):(dt.boundingSphere===null&&dt.computeBoundingSphere(),Pt.copy(dt.boundingSphere.center)),Pt.applyMatrix4(E.matrixWorld).applyMatrix4(At)),Array.isArray(Mt)){const yt=dt.groups;for(let Ft=0,Gt=yt.length;Ft<Gt;Ft++){const St=yt[Ft],ee=Mt[St.materialIndex];ee&&ee.visible&&m.push(E,dt,ee,H,Pt.z,St)}}else Mt.visible&&m.push(E,dt,Mt,H,Pt.z,null)}}const rt=E.children;for(let dt=0,Mt=rt.length;dt<Mt;dt++)to(rt[dt],O,H,G)}function Ic(E,O,H,G){const F=E.opaque,rt=E.transmissive,dt=E.transparent;d.setupLightsView(H),it===!0&&st.setGlobalState(v.clippingPlanes,H),G&&bt.viewport(R.copy(G)),F.length>0&&Pr(F,O,H),rt.length>0&&Pr(rt,O,H),dt.length>0&&Pr(dt,O,H),bt.buffers.depth.setTest(!0),bt.buffers.depth.setMask(!0),bt.buffers.color.setMask(!0),bt.setPolygonOffset(!1)}function Uc(E,O,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;d.state.transmissionRenderTarget[G.id]===void 0&&(d.state.transmissionRenderTarget[G.id]=new Fn(1,1,{generateMipmaps:!0,type:Kt.has("EXT_color_buffer_half_float")||Kt.has("EXT_color_buffer_float")?si:Si,minFilter:gi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qt.workingColorSpace}));const rt=d.state.transmissionRenderTarget[G.id],dt=G.viewport||R;rt.setSize(dt.z,dt.w);const Mt=v.getRenderTarget();v.setRenderTarget(rt),v.getClearColor(z),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Bt&&Lt.render(H);const yt=v.toneMapping;v.toneMapping=Fi;const Ft=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),d.setupLightsView(G),it===!0&&st.setGlobalState(v.clippingPlanes,G),Pr(E,H,G),w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt),Kt.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let St=0,ee=O.length;St<ee;St++){const xe=O[St],Se=xe.object,pn=xe.geometry,se=xe.material,Tt=xe.group;if(se.side===_n&&Se.layers.test(G.layers)){const oi=se.side;se.side=un,se.needsUpdate=!0,Nc(Se,H,G,pn,se,Tt),se.side=oi,se.needsUpdate=!0,Gt=!0}}Gt===!0&&(w.updateMultisampleRenderTarget(rt),w.updateRenderTargetMipmap(rt))}v.setRenderTarget(Mt),v.setClearColor(z,K),Ft!==void 0&&(G.viewport=Ft),v.toneMapping=yt}function Pr(E,O,H){const G=O.isScene===!0?O.overrideMaterial:null;for(let F=0,rt=E.length;F<rt;F++){const dt=E[F],Mt=dt.object,yt=dt.geometry,Ft=G===null?dt.material:G,Gt=dt.group;Mt.layers.test(H.layers)&&Nc(Mt,O,H,yt,Ft,Gt)}}function Nc(E,O,H,G,F,rt){E.onBeforeRender(v,O,H,G,F,rt),E.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),F.onBeforeRender(v,O,H,G,E,rt),F.transparent===!0&&F.side===_n&&F.forceSinglePass===!1?(F.side=un,F.needsUpdate=!0,v.renderBufferDirect(H,O,G,F,E,rt),F.side=Hi,F.needsUpdate=!0,v.renderBufferDirect(H,O,G,F,E,rt),F.side=_n):v.renderBufferDirect(H,O,G,F,E,rt),E.onAfterRender(v,O,H,G,F,rt)}function Lr(E,O,H){O.isScene!==!0&&(O=zt);const G=Rt.get(E),F=d.state.lights,rt=d.state.shadowsArray,dt=F.state.version,Mt=Et.getParameters(E,F.state,rt,O,H),yt=Et.getProgramCacheKey(Mt);let Ft=G.programs;G.environment=E.isMeshStandardMaterial?O.environment:null,G.fog=O.fog,G.envMap=(E.isMeshStandardMaterial?B:S).get(E.envMap||G.environment),G.envMapRotation=G.environment!==null&&E.envMap===null?O.environmentRotation:E.envMapRotation,Ft===void 0&&(E.addEventListener("dispose",Ht),Ft=new Map,G.programs=Ft);let Gt=Ft.get(yt);if(Gt!==void 0){if(G.currentProgram===Gt&&G.lightsStateVersion===dt)return Fc(E,Mt),Gt}else Mt.uniforms=Et.getUniforms(E),E.onBeforeCompile(Mt,v),Gt=Et.acquireProgram(Mt,yt),Ft.set(yt,Gt),G.uniforms=Mt.uniforms;const St=G.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(St.clippingPlanes=st.uniform),Fc(E,Mt),G.needsLights=kf(E),G.lightsStateVersion=dt,G.needsLights&&(St.ambientLightColor.value=F.state.ambient,St.lightProbe.value=F.state.probe,St.directionalLights.value=F.state.directional,St.directionalLightShadows.value=F.state.directionalShadow,St.spotLights.value=F.state.spot,St.spotLightShadows.value=F.state.spotShadow,St.rectAreaLights.value=F.state.rectArea,St.ltc_1.value=F.state.rectAreaLTC1,St.ltc_2.value=F.state.rectAreaLTC2,St.pointLights.value=F.state.point,St.pointLightShadows.value=F.state.pointShadow,St.hemisphereLights.value=F.state.hemi,St.directionalShadowMap.value=F.state.directionalShadowMap,St.directionalShadowMatrix.value=F.state.directionalShadowMatrix,St.spotShadowMap.value=F.state.spotShadowMap,St.spotLightMatrix.value=F.state.spotLightMatrix,St.spotLightMap.value=F.state.spotLightMap,St.pointShadowMap.value=F.state.pointShadowMap,St.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Gt,G.uniformsList=null,Gt}function Oc(E){if(E.uniformsList===null){const O=E.currentProgram.getUniforms();E.uniformsList=ba.seqWithValue(O.seq,E.uniforms)}return E.uniformsList}function Fc(E,O){const H=Rt.get(E);H.outputColorSpace=O.outputColorSpace,H.batching=O.batching,H.batchingColor=O.batchingColor,H.instancing=O.instancing,H.instancingColor=O.instancingColor,H.instancingMorph=O.instancingMorph,H.skinning=O.skinning,H.morphTargets=O.morphTargets,H.morphNormals=O.morphNormals,H.morphColors=O.morphColors,H.morphTargetsCount=O.morphTargetsCount,H.numClippingPlanes=O.numClippingPlanes,H.numIntersection=O.numClipIntersection,H.vertexAlphas=O.vertexAlphas,H.vertexTangents=O.vertexTangents,H.toneMapping=O.toneMapping}function zf(E,O,H,G,F){O.isScene!==!0&&(O=zt),w.resetTextureUnits();const rt=O.fog,dt=G.isMeshStandardMaterial?O.environment:null,Mt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Gs,yt=(G.isMeshStandardMaterial?B:S).get(G.envMap||dt),Ft=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Gt=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),St=!!H.morphAttributes.position,ee=!!H.morphAttributes.normal,xe=!!H.morphAttributes.color;let Se=Fi;G.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Se=v.toneMapping);const pn=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,se=pn!==void 0?pn.length:0,Tt=Rt.get(G),oi=d.state.lights;if(it===!0&&(xt===!0||E!==x)){const Rn=E===x&&G.id===M;st.setState(G,E,Rn)}let re=!1;G.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==oi.state.version||Tt.outputColorSpace!==Mt||F.isBatchedMesh&&Tt.batching===!1||!F.isBatchedMesh&&Tt.batching===!0||F.isBatchedMesh&&Tt.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&Tt.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&Tt.instancing===!1||!F.isInstancedMesh&&Tt.instancing===!0||F.isSkinnedMesh&&Tt.skinning===!1||!F.isSkinnedMesh&&Tt.skinning===!0||F.isInstancedMesh&&Tt.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&Tt.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&Tt.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&Tt.instancingMorph===!1&&F.morphTexture!==null||Tt.envMap!==yt||G.fog===!0&&Tt.fog!==rt||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==st.numPlanes||Tt.numIntersection!==st.numIntersection)||Tt.vertexAlphas!==Ft||Tt.vertexTangents!==Gt||Tt.morphTargets!==St||Tt.morphNormals!==ee||Tt.morphColors!==xe||Tt.toneMapping!==Se||Tt.morphTargetsCount!==se)&&(re=!0):(re=!0,Tt.__version=G.version);let Gn=Tt.currentProgram;re===!0&&(Gn=Lr(G,O,F));let os=!1,xn=!1,$s=!1;const be=Gn.getUniforms(),Qn=Tt.uniforms;if(bt.useProgram(Gn.program)&&(os=!0,xn=!0,$s=!0),G.id!==M&&(M=G.id,xn=!0),os||x!==E){bt.buffers.depth.getReversed()?(lt.copy(E.projectionMatrix),Ed(lt),Td(lt),be.setValue(N,"projectionMatrix",lt)):be.setValue(N,"projectionMatrix",E.projectionMatrix),be.setValue(N,"viewMatrix",E.matrixWorldInverse);const wi=be.map.cameraPosition;wi!==void 0&&wi.setValue(N,Dt.setFromMatrixPosition(E.matrixWorld)),jt.logarithmicDepthBuffer&&be.setValue(N,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&be.setValue(N,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,xn=!0,$s=!0)}if(F.isSkinnedMesh){be.setOptional(N,F,"bindMatrix"),be.setOptional(N,F,"bindMatrixInverse");const Rn=F.skeleton;Rn&&(Rn.boneTexture===null&&Rn.computeBoneTexture(),be.setValue(N,"boneTexture",Rn.boneTexture,w))}F.isBatchedMesh&&(be.setOptional(N,F,"batchingTexture"),be.setValue(N,"batchingTexture",F._matricesTexture,w),be.setOptional(N,F,"batchingIdTexture"),be.setValue(N,"batchingIdTexture",F._indirectTexture,w),be.setOptional(N,F,"batchingColorTexture"),F._colorsTexture!==null&&be.setValue(N,"batchingColorTexture",F._colorsTexture,w));const Ks=H.morphAttributes;if((Ks.position!==void 0||Ks.normal!==void 0||Ks.color!==void 0)&&Nt.update(F,H,Gn),(xn||Tt.receiveShadow!==F.receiveShadow)&&(Tt.receiveShadow=F.receiveShadow,be.setValue(N,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Qn.envMap.value=yt,Qn.flipEnvMap.value=yt.isCubeTexture&&yt.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&O.environment!==null&&(Qn.envMapIntensity.value=O.environmentIntensity),xn&&(be.setValue(N,"toneMappingExposure",v.toneMappingExposure),Tt.needsLights&&Bf(Qn,$s),rt&&G.fog===!0&&ht.refreshFogUniforms(Qn,rt),ht.refreshMaterialUniforms(Qn,G,k,Y,d.state.transmissionRenderTarget[E.id]),ba.upload(N,Oc(Tt),Qn,w)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(ba.upload(N,Oc(Tt),Qn,w),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&be.setValue(N,"center",F.center),be.setValue(N,"modelViewMatrix",F.modelViewMatrix),be.setValue(N,"normalMatrix",F.normalMatrix),be.setValue(N,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){const Rn=G.uniformsGroups;for(let wi=0,Ai=Rn.length;wi<Ai;wi++){const zc=Rn[wi];I.update(zc,Gn),I.bind(zc,Gn)}}return Gn}function Bf(E,O){E.ambientLightColor.needsUpdate=O,E.lightProbe.needsUpdate=O,E.directionalLights.needsUpdate=O,E.directionalLightShadows.needsUpdate=O,E.pointLights.needsUpdate=O,E.pointLightShadows.needsUpdate=O,E.spotLights.needsUpdate=O,E.spotLightShadows.needsUpdate=O,E.rectAreaLights.needsUpdate=O,E.hemisphereLights.needsUpdate=O}function kf(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return A},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,O,H){Rt.get(E.texture).__webglTexture=O,Rt.get(E.depthTexture).__webglTexture=H;const G=Rt.get(E);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||Kt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,O){const H=Rt.get(E);H.__webglFramebuffer=O,H.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(E,O=0,H=0){C=E,T=O,A=H;let G=!0,F=null,rt=!1,dt=!1;if(E){const yt=Rt.get(E);if(yt.__useDefaultFramebuffer!==void 0)bt.bindFramebuffer(N.FRAMEBUFFER,null),G=!1;else if(yt.__webglFramebuffer===void 0)w.setupRenderTarget(E);else if(yt.__hasExternalTextures)w.rebindTextures(E,Rt.get(E.texture).__webglTexture,Rt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const St=E.depthTexture;if(yt.__boundDepthTexture!==St){if(St!==null&&Rt.has(St)&&(E.width!==St.image.width||E.height!==St.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(E)}}const Ft=E.texture;(Ft.isData3DTexture||Ft.isDataArrayTexture||Ft.isCompressedArrayTexture)&&(dt=!0);const Gt=Rt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(Gt[O])?F=Gt[O][H]:F=Gt[O],rt=!0):E.samples>0&&w.useMultisampledRTT(E)===!1?F=Rt.get(E).__webglMultisampledFramebuffer:Array.isArray(Gt)?F=Gt[H]:F=Gt,R.copy(E.viewport),D.copy(E.scissor),U=E.scissorTest}else R.copy(mt).multiplyScalar(k).floor(),D.copy(kt).multiplyScalar(k).floor(),U=ne;if(bt.bindFramebuffer(N.FRAMEBUFFER,F)&&G&&bt.drawBuffers(E,F),bt.viewport(R),bt.scissor(D),bt.setScissorTest(U),rt){const yt=Rt.get(E.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+O,yt.__webglTexture,H)}else if(dt){const yt=Rt.get(E.texture),Ft=O||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,yt.__webglTexture,H||0,Ft)}M=-1},this.readRenderTargetPixels=function(E,O,H,G,F,rt,dt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Mt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){bt.bindFramebuffer(N.FRAMEBUFFER,Mt);try{const yt=E.texture,Ft=yt.format,Gt=yt.type;if(!jt.textureFormatReadable(Ft)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!jt.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=E.width-G&&H>=0&&H<=E.height-F&&N.readPixels(O,H,G,F,qt.convert(Ft),qt.convert(Gt),rt)}finally{const yt=C!==null?Rt.get(C).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,yt)}}},this.readRenderTargetPixelsAsync=async function(E,O,H,G,F,rt,dt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Mt=Rt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&dt!==void 0&&(Mt=Mt[dt]),Mt){const yt=E.texture,Ft=yt.format,Gt=yt.type;if(!jt.textureFormatReadable(Ft))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!jt.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(O>=0&&O<=E.width-G&&H>=0&&H<=E.height-F){bt.bindFramebuffer(N.FRAMEBUFFER,Mt);const St=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.bufferData(N.PIXEL_PACK_BUFFER,rt.byteLength,N.STREAM_READ),N.readPixels(O,H,G,F,qt.convert(Ft),qt.convert(Gt),0);const ee=C!==null?Rt.get(C).__webglFramebuffer:null;bt.bindFramebuffer(N.FRAMEBUFFER,ee);const xe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await bd(N,xe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,St),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,rt),N.deleteBuffer(St),N.deleteSync(xe),rt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,O=null,H=0){E.isTexture!==!0&&(ar("WebGLRenderer: copyFramebufferToTexture function signature has changed."),O=arguments[0]||null,E=arguments[1]);const G=Math.pow(2,-H),F=Math.floor(E.image.width*G),rt=Math.floor(E.image.height*G),dt=O!==null?O.x:0,Mt=O!==null?O.y:0;w.setTexture2D(E,0),N.copyTexSubImage2D(N.TEXTURE_2D,H,0,0,dt,Mt,F,rt),bt.unbindTexture()},this.copyTextureToTexture=function(E,O,H=null,G=null,F=0){E.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,E=arguments[1],O=arguments[2],F=arguments[3]||0,H=null);let rt,dt,Mt,yt,Ft,Gt,St,ee,xe;const Se=E.isCompressedTexture?E.mipmaps[F]:E.image;H!==null?(rt=H.max.x-H.min.x,dt=H.max.y-H.min.y,Mt=H.isBox3?H.max.z-H.min.z:1,yt=H.min.x,Ft=H.min.y,Gt=H.isBox3?H.min.z:0):(rt=Se.width,dt=Se.height,Mt=Se.depth||1,yt=0,Ft=0,Gt=0),G!==null?(St=G.x,ee=G.y,xe=G.z):(St=0,ee=0,xe=0);const pn=qt.convert(O.format),se=qt.convert(O.type);let Tt;O.isData3DTexture?(w.setTexture3D(O,0),Tt=N.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(w.setTexture2DArray(O,0),Tt=N.TEXTURE_2D_ARRAY):(w.setTexture2D(O,0),Tt=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,O.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,O.unpackAlignment);const oi=N.getParameter(N.UNPACK_ROW_LENGTH),re=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Gn=N.getParameter(N.UNPACK_SKIP_PIXELS),os=N.getParameter(N.UNPACK_SKIP_ROWS),xn=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,Se.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Se.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,yt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ft),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Gt);const $s=E.isDataArrayTexture||E.isData3DTexture,be=O.isDataArrayTexture||O.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const Qn=Rt.get(E),Ks=Rt.get(O),Rn=Rt.get(Qn.__renderTarget),wi=Rt.get(Ks.__renderTarget);bt.bindFramebuffer(N.READ_FRAMEBUFFER,Rn.__webglFramebuffer),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let Ai=0;Ai<Mt;Ai++)$s&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.get(E).__webglTexture,F,Gt+Ai),E.isDepthTexture?(be&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Rt.get(O).__webglTexture,F,xe+Ai),N.blitFramebuffer(yt,Ft,rt,dt,St,ee,rt,dt,N.DEPTH_BUFFER_BIT,N.NEAREST)):be?N.copyTexSubImage3D(Tt,F,St,ee,xe+Ai,yt,Ft,rt,dt):N.copyTexSubImage2D(Tt,F,St,ee,xe+Ai,yt,Ft,rt,dt);bt.bindFramebuffer(N.READ_FRAMEBUFFER,null),bt.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else be?E.isDataTexture||E.isData3DTexture?N.texSubImage3D(Tt,F,St,ee,xe,rt,dt,Mt,pn,se,Se.data):O.isCompressedArrayTexture?N.compressedTexSubImage3D(Tt,F,St,ee,xe,rt,dt,Mt,pn,Se.data):N.texSubImage3D(Tt,F,St,ee,xe,rt,dt,Mt,pn,se,Se):E.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,F,St,ee,rt,dt,pn,se,Se.data):E.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,F,St,ee,Se.width,Se.height,pn,Se.data):N.texSubImage2D(N.TEXTURE_2D,F,St,ee,rt,dt,pn,se,Se);N.pixelStorei(N.UNPACK_ROW_LENGTH,oi),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,re),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Gn),N.pixelStorei(N.UNPACK_SKIP_ROWS,os),N.pixelStorei(N.UNPACK_SKIP_IMAGES,xn),F===0&&O.generateMipmaps&&N.generateMipmap(Tt),bt.unbindTexture()},this.copyTextureToTexture3D=function(E,O,H=null,G=null,F=0){return E.isTexture!==!0&&(ar("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,E=arguments[2],O=arguments[3],F=arguments[4]||0),ar('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,O,H,G,F)},this.initRenderTarget=function(E){Rt.get(E).__webglFramebuffer===void 0&&w.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?w.setTextureCube(E,0):E.isData3DTexture?w.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?w.setTexture2DArray(E,0):w.setTexture2D(E,0),bt.unbindTexture()},this.resetState=function(){T=0,A=0,C=null,bt.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Qt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Qt._getUnpackColorSpace()}}class dc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new wt(t),this.near=e,this.far=n}clone(){return new dc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class U_ extends Fe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zn,this.environmentIntensity=1,this.environmentRotation=new Zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class N_{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=zl,this.updateRanges=[],this.version=0,this.uuid=zi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=zi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const ln=new L;class Pa{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyMatrix4(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.applyNormalMatrix(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)ln.fromBufferAttribute(this,e),ln.transformDirection(t),this.setXYZ(e,ln.x,ln.y,ln.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=ni(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=de(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=de(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=ni(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=ni(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=ni(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=ni(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=de(e,this.array),n=de(n,this.array),s=de(s,this.array),r=de(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new vn(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Pa(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class pc extends bi{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ss;const tr=new L,bs=new L,Es=new L,Ts=new Ct,er=new Ct,tf=new ye,Qr=new L,nr=new L,ta=new L,Nh=new Ct,Lo=new Ct,Oh=new Ct;class ef extends Fe{constructor(t=new pc){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new N_(e,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Pa(n,3,0,!1)),Ss.setAttribute("uv",new Pa(n,2,3,!1))}this.geometry=Ss,this.material=t,this.center=new Ct(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),bs.setFromMatrixScale(this.matrixWorld),tf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Es.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&bs.multiplyScalar(-Es.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;ea(Qr.set(-.5,-.5,0),Es,a,bs,s,r),ea(nr.set(.5,-.5,0),Es,a,bs,s,r),ea(ta.set(.5,.5,0),Es,a,bs,s,r),Nh.set(0,0),Lo.set(1,0),Oh.set(1,1);let o=t.ray.intersectTriangle(Qr,nr,ta,!1,tr);if(o===null&&(ea(nr.set(-.5,.5,0),Es,a,bs,s,r),Lo.set(0,1),o=t.ray.intersectTriangle(Qr,ta,nr,!1,tr),o===null))return;const l=t.ray.origin.distanceTo(tr);l<t.near||l>t.far||e.push({distance:l,point:tr.clone(),uv:Tn.getInterpolation(tr,Qr,nr,ta,Nh,Lo,Oh,new Ct),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function ea(i,t,e,n,s,r){Ts.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(er.x=r*Ts.x-s*Ts.y,er.y=s*Ts.x+r*Ts.y):er.copy(Ts),i.copy(t),i.x+=er.x,i.y+=er.y,i.applyMatrix4(tf)}class mc extends bi{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new wt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const La=new L,Da=new L,Fh=new ye,ir=new cc,na=new wr,Do=new L,zh=new L;class O_ extends Fe{constructor(t=new qe,e=new mc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)La.fromBufferAttribute(e,s-1),Da.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=La.distanceTo(Da);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(s),na.radius+=r,t.ray.intersectsSphere(na)===!1)return;Fh.copy(s).invert(),ir.copy(t.ray).applyMatrix4(Fh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=n.index,f=n.attributes.position;if(h!==null){const p=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=h.getX(_),b=h.getX(_+1),y=ia(this,t,ir,l,d,b);y&&e.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),d=ia(this,t,ir,l,_,m);d&&e.push(d)}}else{const p=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=p,m=g-1;_<m;_+=c){const d=ia(this,t,ir,l,_,_+1);d&&e.push(d)}if(this.isLineLoop){const _=ia(this,t,ir,l,g-1,p);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function ia(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(La.fromBufferAttribute(a,s),Da.fromBufferAttribute(a,r),e.distanceSqToSegment(La,Da,Do,zh)>n)return;Do.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Do);if(!(l<t.near||l>t.far))return{distance:l,point:zh.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const Bh=new L,kh=new L;class nf extends O_{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)Bh.fromBufferAttribute(e,s),kh.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+Bh.distanceTo(kh);t.setAttribute("lineDistance",new Te(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class gc extends bi{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Hh=new ye,Hl=new cc,sa=new wr,ra=new L;class sf extends Fe{constructor(t=new qe,e=new gc){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),sa.copy(n.boundingSphere),sa.applyMatrix4(s),sa.radius+=r,t.ray.intersectsSphere(sa)===!1)return;Hh.copy(s).invert(),Hl.copy(t.ray).applyMatrix4(Hh);const o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,u=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),p=Math.min(c.count,a.start+a.count);for(let g=f,_=p;g<_;g++){const m=c.getX(g);ra.fromBufferAttribute(u,m),Gh(ra,m,l,s,t,e,this)}}else{const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let g=f,_=p;g<_;g++)ra.fromBufferAttribute(u,g),Gh(ra,g,l,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}}function Gh(i,t,e,n,s,r,a){const o=Hl.distanceSqToPoint(i);if(o<e){const l=new L;Hl.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Bn extends fn{constructor(t,e,n,s,r,a,o,l,c){super(t,e,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class rs extends qe{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],f=[],p=[];let g=0;const _=[],m=n/2;let d=0;b(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Te(u,3)),this.setAttribute("normal",new Te(f,3)),this.setAttribute("uv",new Te(p,2));function b(){const v=new L,P=new L;let T=0;const A=(e-t)/n;for(let C=0;C<=r;C++){const M=[],x=C/r,R=x*(e-t)+t;for(let D=0;D<=s;D++){const U=D/s,z=U*l+o,K=Math.sin(z),q=Math.cos(z);P.x=R*K,P.y=-x*n+m,P.z=R*q,u.push(P.x,P.y,P.z),v.set(K,A,q).normalize(),f.push(v.x,v.y,v.z),p.push(U,1-x),M.push(g++)}_.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const x=_[M][C],R=_[M+1][C],D=_[M+1][C+1],U=_[M][C+1];(t>0||M!==0)&&(h.push(x,R,U),T+=3),(e>0||M!==r-1)&&(h.push(R,D,U),T+=3)}c.addGroup(d,T,0),d+=T}function y(v){const P=g,T=new Ct,A=new L;let C=0;const M=v===!0?t:e,x=v===!0?1:-1;for(let D=1;D<=s;D++)u.push(0,m*x,0),f.push(0,x,0),p.push(.5,.5),g++;const R=g;for(let D=0;D<=s;D++){const z=D/s*l+o,K=Math.cos(z),q=Math.sin(z);A.x=M*q,A.y=m*x,A.z=M*K,u.push(A.x,A.y,A.z),f.push(0,x,0),T.x=K*.5+.5,T.y=q*.5*x+.5,p.push(T.x,T.y),g++}for(let D=0;D<s;D++){const U=P+D,z=R+D;v===!0?h.push(z,z+1,U):h.push(z+1,z,U),C+=3}c.addGroup(d,C,v===!0?1:2),d+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new rs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const aa=new L,oa=new L,Io=new L,la=new Tn;class F_ extends qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Sa*e),a=t.getIndex(),o=t.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],h=["a","b","c"],u=new Array(3),f={},p=[];for(let g=0;g<l;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:d}=la;if(_.fromBufferAttribute(o,c[0]),m.fromBufferAttribute(o,c[1]),d.fromBufferAttribute(o,c[2]),la.getNormal(Io),u[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,u[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,u[2]=`${Math.round(d.x*s)},${Math.round(d.y*s)},${Math.round(d.z*s)}`,!(u[0]===u[1]||u[1]===u[2]||u[2]===u[0]))for(let b=0;b<3;b++){const y=(b+1)%3,v=u[b],P=u[y],T=la[h[b]],A=la[h[y]],C=`${v}_${P}`,M=`${P}_${v}`;M in f&&f[M]?(Io.dot(f[M].normal)<=r&&(p.push(T.x,T.y,T.z),p.push(A.x,A.y,A.z)),f[M]=null):C in f||(f[C]={index0:c[b],index1:c[y],normal:Io.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];aa.fromBufferAttribute(o,_),oa.fromBufferAttribute(o,m),p.push(aa.x,aa.y,aa.z),p.push(oa.x,oa.y,oa.z)}this.setAttribute("position",new Te(p,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class _c extends qe{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new L,f=new L,p=[],g=[],_=[],m=[];for(let d=0;d<=n;d++){const b=[],y=d/n;let v=0;d===0&&a===0?v=.5/e:d===n&&l===Math.PI&&(v=-.5/e);for(let P=0;P<=e;P++){const T=P/e;u.x=-t*Math.cos(s+T*r)*Math.sin(a+y*o),u.y=t*Math.cos(a+y*o),u.z=t*Math.sin(s+T*r)*Math.sin(a+y*o),g.push(u.x,u.y,u.z),f.copy(u).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-y),b.push(c++)}h.push(b)}for(let d=0;d<n;d++)for(let b=0;b<e;b++){const y=h[d][b+1],v=h[d][b],P=h[d+1][b],T=h[d+1][b+1];(d!==0||a>0)&&p.push(y,v,T),(d!==n-1||l<Math.PI)&&p.push(v,P,T)}this.setIndex(p),this.setAttribute("position",new Te(g,3)),this.setAttribute("normal",new Te(_,3)),this.setAttribute("uv",new Te(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new _c(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class z_ extends on{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Vh extends bi{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class zn extends bi{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lc,this.normalScale=new Ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zn,this.combine=tc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class vc extends Fe{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class B_ extends vc{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Uo=new ye,Wh=new L,Xh=new L;class rf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ct(512,512),this.map=null,this.mapPass=null,this.matrix=new ye,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hc,this._frameExtents=new Ct(1,1),this._viewportCount=1,this._viewports=[new pe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;Wh.setFromMatrixPosition(t.matrixWorld),e.position.copy(Wh),Xh.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Xh),e.updateMatrixWorld(),Uo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Uo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Uo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const qh=new ye,sr=new L,No=new L;class k_ extends rf{constructor(){super(new En(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ct(4,2),this._viewportCount=6,this._viewports=[new pe(2,1,1,1),new pe(0,1,1,1),new pe(3,1,1,1),new pe(1,1,1,1),new pe(3,0,1,1),new pe(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),sr.setFromMatrixPosition(t.matrixWorld),n.position.copy(sr),No.copy(n.position),No.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(No),n.updateMatrixWorld(),s.makeTranslation(-sr.x,-sr.y,-sr.z),qh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qh)}}class H_ extends vc{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new k_}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class G_ extends rf{constructor(){super(new uc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class V_ extends vc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Fe.DEFAULT_UP),this.updateMatrix(),this.target=new Fe,this.shadow=new G_}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class W_{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Yh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Yh();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Yh(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ql}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ql);function Me(i,t,e=0){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function X_(i,t,e,n=0){let s=i*374761393+t*668265263+e*1274126177+n*2147483647|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,s=Math.imul(s,2246822519),s^=s>>>13,(s>>>0)/4294967296}const hr=i=>i*i*(3-2*i);function q_(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=hr(i-n),a=hr(t-s),o=Me(n,s,e),l=Me(n+1,s,e),c=Me(n,s+1,e),h=Me(n+1,s+1,e);return(o+(l-o)*r)*(1-a)+(c+(h-c)*r)*a}function Oo(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),a=Math.floor(e),o=hr(i-s),l=hr(t-r),c=hr(e-a),h=(f,p,g)=>f+(p-f)*g,u=(f,p,g)=>X_(s+f,r+p,a+g,n);return h(h(h(u(0,0,0),u(1,0,0),o),h(u(0,1,0),u(1,1,0),o),l),h(h(u(0,0,1),u(1,0,1),o),h(u(0,1,1),u(1,1,1),o),l),c)}function Yn(i,t,e,n=4){let s=.5,r=1,a=0,o=0;for(let l=0;l<n;l++)a+=q_(i*r,t*r,e+l*101)*s,o+=s,s*=.5,r*=2;return a/o}const ge=16,Ar=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","planks","cobble","water","glass","coal_ore","iron_ore","gold_ore","diamond_ore","bedrock","snow","snow_side","cactus_side","cactus_top","bricks","table_top","table_side","torch","furnace_top","furnace_front","command"],ur=Object.fromEntries(Ar.map((i,t)=>[i,t])),fr=Ar.length,af=i=>Math.max(0,Math.min(255,i));function Ee(i,t,e,n,s){const r=(Me(e,n,s)-.5)*2*t;return i.map(a=>af(a+r))}const $h=(i,t)=>Ee([95,159,53],22,i,t,1),Fo=(i,t)=>Ee([134,96,67],18,i,t,2),Ea=(i,t)=>Ee([125,125,125],20,i,t,4),zo=(i,t)=>Ee([168,134,82],8,i,t,9).map(e=>t%4===3?e-30:e);function ca(i,t){return(e,n)=>Me(Math.floor(e/2)+3,Math.floor(n/2),t)>.72?Ee(i,14,e,n,t+1):Ea(e,n)}const xc={grass_top:$h,dirt:Fo,grass_side:(i,t)=>t<4+(Me(i,0,3)>.5?1:0)?$h(i,t):Fo(i,t),stone:Ea,sand:(i,t)=>Ee([219,207,142],12,i,t,5),log_side:(i,t)=>Ee([102,81,49],10,i,0,6).map(e=>e-(i%4===0?14:0)),log_top:(i,t)=>{const e=Math.max(Math.abs(i-7.5),Math.abs(t-7.5));return Ee(e%4<2?[170,135,82]:[140,110,66],8,i,t,7)},leaves:(i,t)=>Ee([56,118,29],30,i,t,8),planks:zo,cobble:(i,t)=>{const e=Me(Math.floor(i/4),Math.floor(t/4),10),n=i%4===3||t%4===3;return Ee([110+e*40,110+e*40,110+e*40],10,i,t,11).map(s=>n?s-35:s)},water:(i,t)=>{const e=Me(i>>1,t>>1,12)>.8?25:0;return[...Ee([36+e,86+e,200+e/2],8,i,t,12),175]},glass:(i,t)=>{const e=i===0||t===0||i===15||t===15,n=i===3&&t>=3&&t<=5||i===4&&t===3||i===11&&t>=10&&t<=11;return e?[215,235,245,230]:n?[255,255,255,190]:[200,225,240,0]},coal_ore:ca([30,30,30],20),iron_ore:ca([216,175,147],30),gold_ore:ca([250,220,60],40),diamond_ore:ca([70,235,225],50),bedrock:(i,t)=>Ee([55,55,55],32,i,t,60),snow:(i,t)=>Ee([240,245,250],7,i,t,61),snow_side:(i,t)=>t<4?Ee([240,245,250],7,i,t,61):Fo(i,t),cactus_side:(i,t)=>(i===4||i===11)&&t%5===2?[230,230,200]:Ee([36,118,48],10,i,0,62).map(e=>i%5===2?e-18:e),cactus_top:(i,t)=>{const e=Math.max(Math.abs(i-7.5),Math.abs(t-7.5));return Ee(e<3?[30,100,40]:[52,140,60],8,i,t,63)},bricks:(i,t)=>t%4===3||(i+Math.floor(t/4)%2*4)%8===7?Ee([170,168,160],8,i,t,64):Ee([150,72,58],14,i,t,65),table_top:(i,t)=>i===0||t===0||i===15||t===15||i===7||i===8||t===7||t===8?Ee([92,60,30],8,i,t,66):zo(i,t),torch:(i,t)=>i<7||i>8?[0,0,0,0]:t<2?i===7?[255,235,120,255]:[255,160,40,255]:t<4?[255,200,60,255]:Ee([122,86,44],10,i,t,70),command:(i,t)=>{const e=i===0||t===0||i===15||t===15,n=i===4+(t-4)&&t>=4&&t<=7||i===4+(11-t)&&t>=8&&t<=11||t===10&&i>=9&&i<=12;return e?[74,34,8,255]:n?[42,18,4,255]:Ee([196,114,58],18,i,t,75)},furnace_top:(i,t)=>i===0||t===0||i===15||t===15?Ee([70,70,70],8,i,t,71):Ea(i,t).map(e=>e-20),furnace_front:(i,t)=>i===0||t===0||i===15?Ee([70,70,70],8,i,t,72):i>=4&&i<=11&&t>=8&&t<=13?t>10&&i>5&&i<10&&Me(i,t,73)>.4?[255,150+Me(i,t,74)*80|0,30,255]:[25,25,25,255]:i>=4&&i<=11&&t>=3&&t<=5?[30,30,30,255]:Ea(i,t).map(n=>n-15),table_side:(i,t)=>t<3?Ee([92,60,30],8,i,t,67):i===7||i===8?Ee([120,90,50],8,i,t,68):zo(i,t)},Bo={};function of(i){if(Bo[i])return Bo[i];let t=0,e=0,n=0,s=0;for(let r=0;r<ge;r++)for(let a=0;a<ge;a++){const o=xc[i](a,r);o[3]!==0&&(t+=o[0],e+=o[1],n+=o[2],s++)}return Bo[i]=[t/s/255,e/s/255,n/s/255]}function Y_(){const i=document.createElement("canvas");i.width=ge*fr,i.height=ge;const t=i.getContext("2d"),e=t.createImageData(i.width,ge);Ar.forEach((s,r)=>{for(let a=0;a<ge;a++)for(let o=0;o<ge;o++){const l=xc[s](o,a),c=(a*i.width+r*ge+o)*4;e.data[c]=l[0],e.data[c+1]=l[1],e.data[c+2]=l[2],e.data[c+3]=l[3]===void 0?255:l[3]}}),t.putImageData(e,0,0);const n=new Bn(i);return n.magFilter=ue,n.minFilter=ue,n.colorSpace=Ke,n.generateMipmaps=!1,{canvas:i,texture:n}}const Ia={stone:3.4,cobble:4.2,bricks:4,bedrock:4.5,coal_ore:3.4,iron_ore:3.4,gold_ore:3.4,diamond_ore:3.4,planks:2.4,table_top:2.4,table_side:2.4,log_side:3.2,log_top:2.2,leaves:3.6,dirt:2.2,grass_top:2.6,grass_side:2.4,sand:1.4,snow:1,snow_side:1.4,water:.9,glass:0,torch:0,cactus_side:2.6,cactus_top:2,furnace_top:2.6,furnace_front:3,command:2.6};function Kh(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,a=t-s,o=r*r*(3-2*r),l=a*a*(3-2*a),c=Me(n,s,e),h=Me(n+1,s,e),u=Me(n,s+1,e),f=Me(n+1,s+1,e);return(c+(h-c)*o)*(1-l)+(u+(f-u)*o)*l}function $_(i){const e=64/ge,n=document.createElement("canvas");n.width=64*fr,n.height=64;const s=n.getContext("2d"),r=s.createImageData(n.width,64),a=document.createElement("canvas");a.width=n.width,a.height=64;const o=a.getContext("2d"),l=o.createImageData(a.width,64);Ar.forEach((f,p)=>{const g=Array.from({length:ge*ge},(y,v)=>xc[f](v%ge,Math.floor(v/ge))),_=(y,v)=>g[Math.max(0,Math.min(ge-1,v))*ge+Math.max(0,Math.min(ge-1,y))],m=new Float32Array(4096);for(let y=0;y<64;y++)for(let v=0;v<64;v++){const P=(v+.5)/e-.5,T=(y+.5)/e-.5,A=Math.floor(P),C=Math.floor(T),M=P-A,x=T-C,R=_(Math.floor(v/e),Math.floor(y/e)),D=_(A,C),U=_(A+1,C),z=_(A,C+1),K=_(A+1,C+1),q=[0,1,2].map(et=>{const nt=(D[et]*(1-M)+U[et]*M)*(1-x)+(z[et]*(1-M)+K[et]*M)*x;let mt=R[et]*.5+nt*.5;const kt=(Me(v+p*97,y,1234)-.5)*16+(Kh(v*.35+p*13,y*.35,77)-.5)*22+(Kh(v*.09,y*.09+p*5,91)-.5)*18;return af(mt+kt)}),Y=R[3]===void 0?255:R[3],k=(y*n.width+p*64+v)*4;r.data[k]=q[0],r.data[k+1]=q[1],r.data[k+2]=q[2],r.data[k+3]=Y,m[y*64+v]=(q[0]*.3+q[1]*.59+q[2]*.11)/255}const d=Ia[f]===void 0?2:Ia[f],b=(y,v)=>m[(v+64)%64*64+(y+64)%64];for(let y=0;y<64;y++)for(let v=0;v<64;v++){const P=b(v+1,y-1)+2*b(v+1,y)+b(v+1,y+1)-(b(v-1,y-1)+2*b(v-1,y)+b(v-1,y+1)),T=b(v-1,y+1)+2*b(v,y+1)+b(v+1,y+1)-(b(v-1,y-1)+2*b(v,y-1)+b(v+1,y-1));let A=-P*d,C=T*d,M=1;const x=Math.hypot(A,C,M);A/=x,C/=x,M/=x;const R=(y*a.width+p*64+v)*4;l.data[R]=(A*.5+.5)*255,l.data[R+1]=(C*.5+.5)*255,l.data[R+2]=(M*.5+.5)*255,l.data[R+3]=255}}),s.putImageData(r,0,0),o.putImageData(l,0,0);const c=i?i.capabilities.getMaxAnisotropy():4,h=new Bn(n);h.colorSpace=Ke,h.magFilter=Un,h.minFilter=gi,h.generateMipmaps=!0,h.anisotropy=Math.min(8,c);const u=new Bn(a);return u.magFilter=Un,u.minFilter=gi,u.generateMipmaps=!0,u.anisotropy=Math.min(8,c),{map:h,normalMap:u}}function K_(i){const t=i.getContext("2d"),e=i.width,n=t.getImageData(0,0,e,ge).data,s=document.createElement("canvas");s.width=e,s.height=ge;const r=s.getContext("2d"),a=r.createImageData(e,ge);Ar.forEach((l,c)=>{const h=(Ia[l]===void 0?2:Ia[l])*.45,u=(f,p)=>{const g=((p+ge)%ge*e+c*ge+(f+ge)%ge)*4;return(n[g]*.3+n[g+1]*.59+n[g+2]*.11)/255};for(let f=0;f<ge;f++)for(let p=0;p<ge;p++){const g=u(p+1,f)-u(p-1,f),_=u(p,f+1)-u(p,f-1);let m=-g*h,d=_*h,b=1;const y=Math.hypot(m,d,b);m/=y,d/=y,b/=y;const v=(f*e+c*ge+p)*4;a.data[v]=(m*.5+.5)*255,a.data[v+1]=(d*.5+.5)*255,a.data[v+2]=(b*.5+.5)*255,a.data[v+3]=255}}),r.putImageData(a,0,0);const o=new Bn(s);return o.magFilter=ue,o.minFilter=ue,o.generateMipmaps=!1,o}const lf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Xs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const j_=new uc(-1,1,1,-1,0,1);class Z_ extends qe{constructor(){super(),this.setAttribute("position",new Te([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Te([0,2,0,0,2,0],2))}}const J_=new Z_;class Mc{constructor(t){this._mesh=new Ut(J_,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,j_)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class cf extends Xs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof on?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=vr.clone(t.uniforms),this.material=new on({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Mc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class jh extends Xs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Q_ extends Xs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class tv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Ct);this._width=n.width,this._height=n.height,e=new Fn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:si}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new cf(lf),this.copyPass.material.blending=xi,this.clock=new W_}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}jh!==void 0&&(a instanceof jh?n=!0:a instanceof Q_&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class ev extends Xs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new wt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const nv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new wt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Bs extends Xs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Ct(t.x,t.y):new Ct(256,256),this.clearColor=new wt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Fn(r,a,{type:si}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const f=new Fn(r,a,{type:si});f.texture.name="UnrealBloomPass.h"+u,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const p=new Fn(r,a,{type:si});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),a=Math.round(a/2)}const o=nv;this.highPassUniforms=vr.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ct(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=lf;this.copyUniforms=vr.clone(h.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:wa,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new wt,this.oldClearAlpha=1,this.basic=new Pe,this.fsQuad=new Mc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ct(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=Bs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[l]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Bs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[l]),t.clear(),this.fsQuad.render(t),o=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new on({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Ct(.5,.5)},direction:{value:new Ct(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new on({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Bs.BlurDirectionX=new Ct(1,0);Bs.BlurDirectionY=new Ct(0,1);const iv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class sv extends Xs{constructor(){super();const t=iv;this.uniforms=vr.clone(t.uniforms),this.material=new z_({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Mc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},Qt.getTransfer(this._outputColorSpace)===ce&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Su?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===bu?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ec?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Eu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Tu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ln=0,V={GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,PLANKS:7,COBBLE:8,WATER:9,GLASS:10,COAL_ORE:11,IRON_ORE:12,GOLD_ORE:13,DIAMOND_ORE:14,BEDROCK:15,SNOW:16,CACTUS:17,BRICKS:18,TABLE:19,TORCH:20,FURNACE:21,COMMAND:22},X={STICK:100,COAL:101,IRON:102,GOLD:103,DIAMOND:104,APPLE:150,PORK:151,BEEF:152,COOKED_PORK:153,STEAK:154,STAR:105,PEARL:106,CHICKEN:155,COOKED_CHICKEN:156},Ve={};function Ue(i,t,e,n,s=null,r=0,a={}){Ve[i]={id:i,name:t,tiles:e,hardness:n,tool:s,lvl:r,opaque:!0,liquid:!1,...a}}Ue(V.GRASS,"Hierba",["grass_top","dirt","grass_side"],.6,"shovel");Ue(V.DIRT,"Tierra",["dirt","dirt","dirt"],.5,"shovel");Ue(V.STONE,"Piedra",["stone","stone","stone"],1.5,"pick",1);Ue(V.SAND,"Arena",["sand","sand","sand"],.5,"shovel");Ue(V.LOG,"Tronco",["log_top","log_top","log_side"],2,"axe");Ue(V.LEAVES,"Hojas",["leaves","leaves","leaves"],.2);Ue(V.PLANKS,"Tablones",["planks","planks","planks"],2,"axe");Ue(V.COBBLE,"Adoquín",["cobble","cobble","cobble"],2,"pick",1);Ue(V.WATER,"Agua",["water","water","water"],100,null,0,{opaque:!1,liquid:!0,transparent:!0});Ue(V.GLASS,"Cristal",["glass","glass","glass"],.3,null,0,{opaque:!1,transparent:!0});Ue(V.COAL_ORE,"Mena de carbón",["coal_ore","coal_ore","coal_ore"],3,"pick",1);Ue(V.IRON_ORE,"Mena de hierro",["iron_ore","iron_ore","iron_ore"],3,"pick",2);Ue(V.GOLD_ORE,"Mena de oro",["gold_ore","gold_ore","gold_ore"],3,"pick",3);Ue(V.DIAMOND_ORE,"Mena de diamante",["diamond_ore","diamond_ore","diamond_ore"],3,"pick",3);Ue(V.BEDROCK,"Lecho de roca",["bedrock","bedrock","bedrock"],1/0);Ue(V.SNOW,"Nieve",["snow","dirt","snow_side"],.3,"shovel");Ue(V.CACTUS,"Cactus",["cactus_top","cactus_top","cactus_side"],.4);Ue(V.BRICKS,"Ladrillos",["bricks","bricks","bricks"],2,"pick",1);Ue(V.TABLE,"Mesa de crafteo",["table_top","planks","table_side"],2.5,"axe");Ue(V.TORCH,"Antorcha",["torch","torch","torch"],.05,null,0,{opaque:!1,torch:!0,flat:!0,emit:10});Ue(V.COMMAND,"Bloque de comandos",["command","command","command"],5,"pick",3);Ue(V.FURNACE,"Horno",["furnace_top","stone","furnace_front"],3,"pick",1);const ti=new Uint8Array(256),Ua=new Uint8Array(256),xr=new Uint8Array(256);for(const i of Object.values(Ve))ti[i.id]=i.opaque?1:0,Ua[i.id]=i.liquid||i.torch?0:1,xr[i.id]=i.liquid?1:0;const Gi={};function dn(i,t,e={}){Gi[i]={id:i,name:t,stack:64,...e}}dn(X.STICK,"Palo");dn(X.COAL,"Carbón");dn(X.IRON,"Lingote de hierro");dn(X.GOLD,"Lingote de oro");dn(X.DIAMOND,"Diamante");dn(X.STAR,"Estrella de la tormenta");dn(X.PEARL,"Perla de Ender");dn(X.CHICKEN,"Pollo crudo",{food:4});dn(X.COOKED_CHICKEN,"Pollo asado",{food:12});dn(X.APPLE,"Manzana",{food:8});dn(X.PORK,"Cerdo crudo",{food:6});dn(X.BEEF,"Ternera cruda",{food:6});dn(X.COOKED_PORK,"Cerdo asado",{food:14});dn(X.STEAK,"Filete",{food:16});const hf=[{n:"de madera",color:[176,140,84],speed:2,dur:59,lvl:1,mat:V.PLANKS},{n:"de piedra",color:[140,140,140],speed:4,dur:131,lvl:2,mat:V.COBBLE},{n:"de hierro",color:[225,225,225],speed:6,dur:250,lvl:3,mat:X.IRON},{n:"de diamante",color:[90,235,225],speed:8,dur:1561,lvl:4,mat:X.DIAMOND}],rv=[{t:"pick",name:"Pico",base:110,dmg:2,rows:["MMM"," S "," S "]},{t:"axe",name:"Hacha",base:120,dmg:3,rows:["MM","MS"," S"]},{t:"shovel",name:"Pala",base:130,dmg:2,rows:["M","S","S"]},{t:"sword",name:"Espada",base:140,dmg:4,rows:["M","M","S"]}],uf=[];function Ei(i,t,e,n=1){uf.push({pattern:i,key:t,out:e,n})}rv.forEach(i=>hf.forEach((t,e)=>{const n=i.base+e;dn(n,`${i.name} ${t.n}`,{stack:1,tool:{type:i.t,tier:e,speed:t.speed,dur:t.dur,lvl:t.lvl,dmg:i.dmg+e},color:t.color}),Ei(i.rows,{M:t.mat,S:X.STICK},n)}));Ei(["L"],{L:V.LOG},V.PLANKS,4);Ei(["P","P"],{P:V.PLANKS},X.STICK,4);Ei(["PP","PP"],{P:V.PLANKS},V.TABLE);Ei(["SS","SS"],{S:V.SAND},V.GLASS,4);Ei(["CC","CC"],{C:V.COBBLE},V.BRICKS,4);Ei(["CCC","C C","CCC"],{C:V.COBBLE},V.FURNACE);Ei(["C","S"],{C:X.COAL,S:X.STICK},V.TORCH,4);Ei(["DGD","GCG","DGD"],{D:X.DIAMOND,G:X.GOLD,C:X.COAL},V.COMMAND);const av={[V.IRON_ORE]:[X.IRON,1],[V.GOLD_ORE]:[X.GOLD,1],[V.COBBLE]:[V.STONE,1],[V.SAND]:[V.GLASS,1],[V.LOG]:[X.COAL,1],[X.PORK]:[X.COOKED_PORK,1],[X.BEEF]:[X.STEAK,1],[X.CHICKEN]:[X.COOKED_CHICKEN,1]},Zh={[X.COAL]:80,[V.LOG]:15,[V.PLANKS]:15,[V.TABLE]:15,[X.STICK]:5},ff=8;function ja(i){return Ve[i]||Gi[i]}function mi(i){const t=ja(i);return Ve[i]?64:t.stack}const ov=i=>!!Ve[i],df=i=>!Ve[i]||!!Ve[i].flat;function lv(i,t){let e=t,n=-1,s=t,r=-1;for(let l=0;l<t;l++)for(let c=0;c<t;c++)i[l*t+c]&&(e=Math.min(e,l),n=Math.max(n,l),s=Math.min(s,c),r=Math.max(r,c));if(n<0)return null;const a=n-e+1,o=r-s+1;for(const l of uf)if(!(l.pattern.length!==a||l.pattern[0].length!==o))for(const c of[!1,!0]){let h=!0;for(let u=0;u<a&&h;u++)for(let f=0;f<o;f++){const p=l.pattern[u][c?o-1-f:f],g=p===" "?0:l.key[p];if(i[(e+u)*t+s+f]!==g){h=!1;break}}if(h)return l}return null}function ss(i){return i&&Gi[i.id]&&Gi[i.id].tool}function pf(i,t){const e=Ve[i];if(!e.lvl)return!0;const n=ss(t);return!!n&&n.type==="pick"&&n.lvl>=e.lvl}function cv(i,t){const e=Ve[i];if(e.hardness===1/0)return 1/0;const n=ss(t),s=n&&e.tool&&n.type===e.tool,r=pf(i,t),a=s?n.speed:1;return e.hardness*(r?1.5:5)/a}function mf(i,t){if(!pf(i,t))return null;switch(i){case V.GRASS:return[V.DIRT,1];case V.STONE:return[V.COBBLE,1];case V.COAL_ORE:return[X.COAL,1];case V.DIAMOND_ORE:return[X.DIAMOND,1];case V.LEAVES:return Math.random()<.1?[X.APPLE,1]:null;case V.GLASS:case V.WATER:return null;default:return[i,1]}}let yc=null;const ko=new Map,Ho=new Map,Go=new Map;function hv(i){yc=i}function uv(i){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");e.imageSmoothingEnabled=!1;const n=Ve[i],s=(r,a,o)=>{e.save(),e.setTransform(...a),e.drawImage(yc,ur[r]*16,0,16,16,0,0,16,16),o&&(e.fillStyle=`rgba(0,0,0,${o})`,e.fillRect(0,0,16,16)),e.restore()};return s(n.tiles[0],[.875,.4375,-.875,.4375,16,4],0),s(n.tiles[2],[.875,.4375,0,.875,2,11],.22),s(n.tiles[2],[.875,-.4375,0,.875,16,18],.42),t}function Vt(i,t,e){i.fillStyle=e;for(const[n,s]of t)i.fillRect(n,s,1,1)}const gf=i=>`rgb(${i[0]},${i[1]},${i[2]})`,fv=(i,t)=>gf(i.map(e=>Math.max(0,Math.min(255,e*t))));function dv(i){const t=document.createElement("canvas");t.width=t.height=16;const e=t.getContext("2d"),n="#7a5a30",s=()=>{for(let a=2;a<=11;a++)Vt(e,[[a,15-a]],n)},r=Gi[i]||{};if(i===V.TORCH){for(let a=6;a<=14;a++)Vt(e,[[7,a],[8,a]],a%2?"#7a5630":"#6a4a28");Vt(e,[[7,4],[8,4],[7,5],[8,5]],"#ffc83c"),Vt(e,[[7,3],[8,3]],"#ff9a28"),Vt(e,[[7,2]],"#ffeb78")}else if(r.tool){const a=hf[r.tool.tier].color,o=fv(a,.7),l=gf(a);s();const c=r.tool.type;if(c==="pick")Vt(e,[[5,2],[6,1],[7,1],[8,1],[9,1],[10,2],[11,3],[12,4],[12,5],[4,3],[3,4],[3,5]],l),Vt(e,[[6,2],[7,2],[8,2],[9,2],[10,3],[11,4]],o);else if(c==="axe")Vt(e,[[7,2],[8,2],[9,2],[6,3],[7,3],[8,3],[9,3],[10,3],[8,4],[9,4],[10,4],[9,5]],l),Vt(e,[[7,4],[8,5],[10,5]],o);else if(c==="shovel")Vt(e,[[11,2],[12,2],[10,3],[11,3],[12,3],[13,3],[11,4],[12,4],[13,4],[12,5],[13,5],[12,1],[13,2]],l),Vt(e,[[11,4],[12,5]],o);else{for(let h=0;h<9;h++)Vt(e,[[5+h,10-h],[6+h,10-h]],h%2?l:o);Vt(e,[[12,1],[13,2],[13,1]],l),Vt(e,[[4,9],[5,10],[6,11],[3,8],[4,11],[5,12]],"#5a4020")}}else if(i===X.STICK)s(),Vt(e,[[12,3]],n);else if(i===X.COAL)Vt(e,[[5,5],[6,4],[7,4],[8,4],[9,5],[10,6],[10,7],[9,9],[8,10],[6,10],[5,9],[4,7],[4,6],[6,5],[7,5],[8,5],[9,6],[9,7],[8,9],[7,9],[6,9],[5,8],[5,6],[6,6],[7,6],[8,6],[8,7],[8,8],[7,8],[6,8],[5,7],[6,7],[7,7]],"#262626"),Vt(e,[[7,5],[6,6]],"#555");else if(i===X.IRON||i===X.GOLD){const a=i===X.IRON?"#d8d8d8":"#f2d230",o=i===X.IRON?"#9a9a9a":"#b89412";for(let l=5;l<=10;l++)for(let c=3;c<=12;c++)Vt(e,[[c,l]],l>=9?o:a);Vt(e,[[3,5],[12,5],[3,10],[12,10]],"rgba(0,0,0,0)")}else if(i===X.DIAMOND)Vt(e,[[7,3],[8,3],[6,4],[7,4],[8,4],[9,4],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[6,6],[7,6],[8,6],[9,6],[7,7],[8,7],[7,8]],"#5aebe1"),Vt(e,[[7,4],[6,5],[7,6]],"#c8fffa"),Vt(e,[[9,5],[8,6],[8,7],[7,8]],"#2aa8a0");else if(i===X.APPLE){Vt(e,[[5,5],[6,4],[7,5],[8,4],[9,4],[10,5],[4,6],[11,6],[4,7],[11,7],[5,9],[6,10],[9,10],[10,9],[11,8],[4,8]],"#d22");for(let a=5;a<=9;a++)for(let o=5;o<=10;o++)Vt(e,[[o,a]],"#e33");Vt(e,[[6,5],[6,6]],"#fcc"),Vt(e,[[8,2],[9,3]],"#5a3a10"),Vt(e,[[9,2],[10,2]],"#3a3")}else if(i===X.PORK||i===X.BEEF){const a=i===X.PORK?"#f0a0a0":"#b83a3a",o=i===X.PORK?"#c87070":"#8a2020";for(let l=4;l<=11;l++)for(let c=3+(l<6?2:0);c<=12-(l>9?2:0);c++)Vt(e,[[c,l]],(c+l)%5===0?o:a);Vt(e,[[10,5],[11,5],[11,6]],"#f6f0e0")}else if(i===X.STAR)Vt(e,[[7,1],[8,1],[7,2],[8,2],[7,3],[8,3],[1,6],[2,6],[3,6],[4,6],[11,6],[12,6],[13,6],[14,6],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[3,6],[5,9],[6,9],[9,9],[10,9],[4,11],[5,11],[10,11],[11,11],[4,12],[11,12],[3,13],[12,13],[6,6],[7,6],[8,6],[9,6],[7,4],[8,4]],"#fff1a8"),Vt(e,[[7,6],[8,6],[7,7],[8,7]],"#ffffff"),Vt(e,[[5,8],[10,8],[6,9],[9,9]],"#e8c640");else if(i===X.PEARL){for(let a=3;a<=12;a++)for(let o=3;o<=12;o++)Math.hypot(o-7.5,a-7.5)<4.6&&Vt(e,[[o,a]],Math.hypot(o-7.5,a-7.5)<3?"#1f8f6a":"#0e5a44");Vt(e,[[6,5],[7,5],[5,6],[6,6]],"#a8ffd8"),Vt(e,[[9,9],[10,8]],"#52d8a8")}else if(i===X.CHICKEN||i===X.COOKED_CHICKEN){const a=i===X.CHICKEN?"#f2c4b0":"#c8883a",o=i===X.CHICKEN?"#d49a84":"#8a5420";for(let l=4;l<=10;l++)for(let c=4;c<=11;c++)Math.hypot(c-7.5,l-7)<4&&Vt(e,[[c,l]],(c+l)%4===0?o:a);Vt(e,[[10,10],[11,11],[12,12],[12,11],[11,12]],"#f6f0e0")}else if(i===X.COOKED_PORK||i===X.STEAK){const a=i===X.STEAK?"#8a4a22":"#c8884c",o=i===X.STEAK?"#5e2e12":"#a06030";for(let l=4;l<=11;l++)for(let c=3+(l<6?2:0);c<=12-(l>9?2:0);c++)Vt(e,[[c,l]],(c+l)%4===0?o:a);Vt(e,[[10,5],[11,5],[11,6]],"#f6f0e0"),Vt(e,[[5,6],[6,7],[7,8],[8,9]],o)}else Vt(e,[[7,7]],"#fff");return t}function _f(i){if(Go.has(i))return Go.get(i);const t=Ve[i]&&!Ve[i].flat?uv(i):dv(i);return Go.set(i,t),t}function vf(i){return ko.has(i)||ko.set(i,_f(i).toDataURL()),ko.get(i)}function Sc(i){if(!Ho.has(i)){const t=new Bn(_f(i));t.magFilter=ue,t.minFilter=ue,t.generateMipmaps=!1,t.colorSpace=Ke,Ho.set(i,t)}return Ho.get(i)}function Vo(i,t,e){const n=document.createElement("canvas");n.width=9,n.height=9;const s=n.getContext("2d");return i.forEach((r,a)=>[...r].forEach((o,l)=>{const c=t(o,l);c&&(s.fillStyle=c,s.fillRect(l,a,1,1))})),n.toDataURL()}const pv=[".##...##.","#RR#.#RR#","#RHRRRRR#","#RRRRRRR#",".#RRRRR#.","..#RRR#..","...#R#...","....#....","........."],mv=["......##.",".....#CC#","....#CHC#","...#CCC#.","..#CCC#..",".#CCC#...","#WW##....","#WW#.....",".##......"],gv=["..#####..",".#BBBBB#.","#BHBBBBB#","#BHBBBBB#","#BBBBBBB#","#BBBBBBB#",".#BBBBB#.","..#####..","........."];function _v(){const i=n=>Vo(pv,(s,r)=>{if(s===".")return null;const a=n==="empty"||n==="half"&&r>4;return s==="#"?"#1a0505":a?"#4a3a3a":s==="H"?"#ff9c9c":"#e02222"}),t=n=>Vo(mv,(s,r)=>s==="."?null:s==="#"?"#2a1405":s==="W"?n==="empty"?"#555":"#f4efe4":n==="empty"||n==="half"&&r>4?"#4a3d30":s==="H"?"#e8a05a":"#c8782b"),e=n=>Vo(gv,s=>s==="."?null:s==="#"?"#0a2a5a":n==="empty"?"rgba(120,170,230,0.25)":s==="H"?"#d8f0ff":"#5aa8f0");return{heart:{full:i("full"),half:i("half"),empty:i("empty")},food:{full:t("full"),half:t("half"),empty:t("empty")},bubble:{full:e("full"),empty:e("empty")}}}function vv(i){const t=document.createElement("canvas");t.width=t.height=16;const e=ur[i];return t.getContext("2d").drawImage(yc,e*16,0,16,16,0,0,16,16),t.toDataURL()}const Oe=(i,t)=>new zn(t?{color:i,map:t}:{color:i});function ha(i){const t=document.createElement("canvas");t.width=t.height=8,i(t.getContext("2d"));const e=new Bn(t);return e.magFilter=ue,e.minFilter=ue,e.generateMipmaps=!1,e.colorSpace=Ke,e}function ua(i,t,e,n,s,r,a){const o=new we;o.position.set(s,r,a);const l=new Ut(new oe(i,t,e),n);return l.position.y=-t/2,o.add(l),o}class xv{constructor(t){const e="#e0ac8c",n="#3a2412",a=ha(g=>{g.fillStyle=e,g.fillRect(0,0,8,8),g.fillStyle=n,g.fillRect(0,0,8,2),g.fillRect(0,2,1,2),g.fillRect(7,2,1,2),g.fillStyle="#fff",g.fillRect(1,3,2,1),g.fillRect(5,3,2,1),g.fillStyle="#3a56c8",g.fillRect(2,3,1,1),g.fillRect(5,3,1,1),g.fillStyle="#a0603c",g.fillRect(3,5,2,1)}),o=ha(g=>{g.fillStyle=n,g.fillRect(0,0,8,8)}),l=ha(g=>{g.fillStyle=e,g.fillRect(0,0,8,8),g.fillStyle=n,g.fillRect(0,0,8,2)}),c=ha(g=>{g.fillStyle=n,g.fillRect(0,0,8,8)}),h=Oe(14724236);this.group=new we;const u=new we;this.group.add(u),this.head=new we,this.head.position.set(0,1.5,0);const f=new Ut(new oe(.5,.5,.5),[Oe(16777215,l),Oe(16777215,l),Oe(16777215,o),h,Oe(16777215,a),Oe(16777215,c)]);f.position.y=.25,this.head.add(f),u.add(this.head);const p=new Ut(new oe(.5,.75,.25),Oe(2794936));p.position.y=1.125,u.add(p),this.legL=ua(.25,.75,.25,Oe(3817372),-.125,.75,0),this.legR=ua(.25,.75,.25,Oe(3817372),.125,.75,0),this.legL.children[0].material=Oe(3817372),u.add(this.legL,this.legR),this.armL=ua(.22,.72,.22,[Oe(2794936),Oe(2794936),Oe(2794936),h,Oe(2794936),Oe(2794936)],-.36,1.48,0),this.armR=ua(.22,.72,.22,[Oe(2794936),Oe(2794936),Oe(2794936),h,Oe(2794936),Oe(2794936)],.36,1.48,0),u.add(this.armL,this.armR),this.itemMat=new Pe({transparent:!0,side:_n,alphaTest:.1}),this.item=new Ut(new yi(.55,.55),this.itemMat),this.item.position.set(0,-.68,.22),this.item.rotation.set(0,0,0),this.armR.add(this.item),this.item.visible=!1,this.heldId=-1,this.t=0,t.add(this.group),this.group.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),this.group.visible=!1}setHeld(t){t!==this.heldId&&(this.heldId=t,this.item.visible=!!t,t&&(this.itemMat.map=Sc(t),this.itemMat.needsUpdate=!0))}update(t,e,n,s){this.group.position.copy(e.pos),this.group.rotation.y=e.yaw+Math.PI;const r=Math.hypot(e.vel.x,e.vel.z),a=r>.3&&(e.onGround||e.inWater);this.t+=t*(a?4+r*1.2:0);const o=a?Math.sin(this.t)*.9:0;this.legL.rotation.x=o,this.legR.rotation.x=-o,this.armL.rotation.x=-o*.8;let l=o*.8;n>0?l=-Math.sin(Math.min(1,n)*Math.PI)*1.8-.5:this.heldId&&(l=-.5+o*.3),this.armR.rotation.x=l,this.head.rotation.x=-e.pitch;const c=Math.sin(performance.now()/700)*.02;this.armL.rotation.z=-.04-c,this.armR.rotation.z=.04+c,e.flying&&(this.group.rotation.x=0)}}const Mv={clear:0,rain:.65,storm:1},Gl={clear:"Despejado",rain:"Lluvia",storm:"Tormenta"},Ye=(i,t)=>i+Math.random()*(t-i),rr=1800,en=22;class yv{constructor(t,e){this.scene=t,this.hooks=e,this.state="clear",this.timer=Ye(90,240),this.intensity=0,this.t=Math.random()*100,this.wind={x:0,z:0,s:.12},this.lightningT=6,this.bolts=[],this.thunder=[],this.boss=!1,this.pos=new Float32Array(rr*3);for(let r=0;r<rr;r++)this.pos[r*3]=Ye(-en,en),this.pos[r*3+1]=Ye(-8,22),this.pos[r*3+2]=Ye(-en,en);const n=new qe;this.linePos=new Float32Array(rr*6),n.setAttribute("position",new vn(this.linePos,3)),this.rain=new nf(n,new mc({color:11453674,transparent:!0,opacity:.55,fog:!1,depthWrite:!1})),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain);const s=new qe;this.ptPos=new Float32Array(rr*3),s.setAttribute("position",new vn(this.ptPos,3)),this.snow=new sf(s,new gc({color:16777215,size:3.5,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1})),this.snow.frustumCulled=!1,this.snow.visible=!1,t.add(this.snow),this.boltMat=new Pe({color:15922431,fog:!1})}set(t){this.state=t,this.timer=t==="clear"?Ye(120,360):t==="rain"?Ye(90,200):Ye(80,170)}cycle(){const t=["clear","rain","storm"];return this.set(t[(t.indexOf(this.state)+1)%3]),this.state}next(){const t=Math.random();return this.state==="clear"?t<.65?"rain":t<.85?"storm":"clear":this.state==="rain"?t<.55?"clear":"storm":t<.5?"rain":"clear"}toJSON(){return{state:this.state,timer:this.timer,intensity:this.intensity}}load(t){t&&(this.state=t.state,this.timer=t.timer,this.intensity=t.intensity)}update(t,e,n,s,r){const a=this.hooks.world();this.t+=t,this.timer-=t,this.timer<=0&&this.set(this.next());const o=Mv[this.state];this.intensity+=Math.sign(o-this.intensity)*Math.min(Math.abs(o-this.intensity),t*.08);const l=this.intensity,c=Math.sin(this.t*.02)*1.6+.8,h=.55+.45*Math.sin(this.t*.35)*Math.sin(this.t*.13+1),f=.12+((this.state==="storm"?1:this.state==="rain"?.45:.12)-.12)*Math.min(1,l*1.5+(this.state==="clear",0))*h;this.wind.s+=(f-this.wind.s)*Math.min(1,t*1.5),this.wind.x=Math.cos(c)*this.wind.s,this.wind.z=Math.sin(c)*this.wind.s;const p=n.position,g=l>.04&&!r;if(this.rain.visible=g&&!s,this.snow.visible=g&&s,g){const m=Math.floor(rr*Math.min(1,l*(this.state==="storm"?1:.8))),d=s?2.4:26,b=s?1.5:9,y=this.wind.x*b,v=this.wind.z*b;for(let P=0;P<m;P++){let T=this.pos[P*3]+y*t,A=this.pos[P*3+1]-d*t*(s?1:.85+P%7*.05),C=this.pos[P*3+2]+v*t;s&&(T+=Math.sin(this.t*1.3+P)*t*.6,C+=Math.cos(this.t*1.1+P*.7)*t*.6),T>en?T-=2*en:T<-en&&(T+=2*en),C>en?C-=2*en:C<-en&&(C+=2*en);const M=p.x+T,x=p.z+C,R=a?a.topY(Math.floor(M),Math.floor(x)):-1;if((A+p.y<R+1||A<-14)&&(A=Ye(10,24),T=Ye(-en,en),C=Ye(-en,en)),this.pos[P*3]=T,this.pos[P*3+1]=A,this.pos[P*3+2]=C,s)this.ptPos[P*3]=p.x+T,this.ptPos[P*3+1]=p.y+A,this.ptPos[P*3+2]=p.z+C;else{const D=P*6,U=.9;this.linePos[D]=p.x+T,this.linePos[D+1]=p.y+A,this.linePos[D+2]=p.z+C,this.linePos[D+3]=p.x+T-y*.06,this.linePos[D+4]=p.y+A+U,this.linePos[D+5]=p.z+C-v*.06}}s?(this.snow.geometry.setDrawRange(0,m),this.snow.geometry.attributes.position.needsUpdate=!0):(this.rain.geometry.setDrawRange(0,m*2),this.rain.geometry.attributes.position.needsUpdate=!0),this.rain.material.opacity=.35+.3*l}this.state==="storm"&&l>.7&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=this.boss?Ye(2.5,6):Ye(4,14),this.strike(e)));const _=this.hooks.sky();_.wet=l,_.flash=Math.max(0,_.flash-t*2.2);for(let m=this.bolts.length-1;m>=0;m--){const d=this.bolts[m];d.life-=t,d.group.visible=d.life>.12||Math.floor(d.life*40)%2===0,d.life<=0&&(this.scene.remove(d.group),d.group.traverse(b=>b.geometry&&b.geometry.dispose()),this.bolts.splice(m,1))}for(let m=this.thunder.length-1;m>=0;m--)this.thunder[m].delay-=t,this.thunder[m].delay<=0&&(this.hooks.sound("thunder",this.thunder[m].vol),this.thunder.splice(m,1))}strike(t,e,n){const s=this.hooks.world(),r=Math.random()*Math.PI*2,a=e?6:Ye(18,110),o=Math.floor(n?n.x+Ye(-2,2):t.pos.x+Math.cos(r)*a),l=Math.floor(n?n.z+Ye(-2,2):t.pos.z+Math.sin(r)*a),c=s.topY(o,l),h=c>=0,u=h?c+1:30,f=Math.hypot(o-t.pos.x,l-t.pos.z);if(this.hooks.sky().flash=Math.min(1,1.15-f/220),this.thunder.push({delay:f/55,vol:Math.max(.25,1-f/150)}),!h||f>150)return;const p=new we;let g=o+.5,_=l+.5,m=u+85;const d=16;for(let b=1;b<=d;b++){const y=u+85-(u+85-u)*b/d,v=3.2*(1-b/d),P=b===d?o+.5:o+.5+Ye(-v,v),T=b===d?l+.5:l+.5+Ye(-v,v),A=new L(g,m,_),C=new L(P,y,T),M=A.distanceTo(C),x=new Ut(new rs(.16,.16,M,4),this.boltMat);x.position.copy(A).add(C).multiplyScalar(.5),x.quaternion.setFromUnitVectors(new L(0,1,0),C.clone().sub(A).normalize()),p.add(x),g=P,m=y,_=T}this.scene.add(p),this.bolts.push({group:p,life:.45}),this.hooks.burst(o+.5,u+.3,l+.5),this.hooks.strikeMobs(o+.5,l+.5),f<3.5&&this.hooks.hurtPlayer(8)}}function qs(i,t,e,n=28){const s={onGround:!1,hitX:!1,hitZ:!1};t.vel.y=Math.max(-50,t.vel.y-n*e);const r=()=>{for(let a=Math.floor(t.pos.y);a<=Math.floor(t.pos.y+t.h-.001);a++)for(let o=Math.floor(t.pos.z-t.hw);o<=Math.floor(t.pos.z+t.hw);o++)for(let l=Math.floor(t.pos.x-t.hw);l<=Math.floor(t.pos.x+t.hw);l++)if(i.isSolid(l,a,o))return!0;return!1};for(const a of["x","z","y"]){const o=t.vel[a]*e;o&&(t.pos[a]+=o,r()&&(t.pos[a]-=o,a==="y"&&t.vel.y<0&&(s.onGround=!0),a==="x"&&(s.hitX=!0),a==="z"&&(s.hitZ=!0),t.vel[a]=0))}return s}class Sv{constructor(t,e){this.scene=t,this.world=e,this.list=[]}spawn(t,e,n,s,r=1,a=!0){const o=new pc({map:Sc(s),transparent:!0,alphaTest:.1}),l=new ef(o),c=Ve[s]?.32:.42;l.scale.set(c,c,c),this.scene.add(l);const h=Math.random()*Math.PI*2;this.list.push({id:s,n:r,sprite:l,base:c,age:0,hw:.12,h:.25,pos:new L(t,e,n),vel:new L(a?Math.cos(h)*1.6:0,a?4:0,a?Math.sin(h)*1.6:0)})}update(t,e,n,s){for(let r=this.list.length-1;r>=0;r--){const a=this.list[r];a.age+=t,qs(this.world,a,t,22).onGround&&(a.vel.x*=.8,a.vel.z*=.8);const l=Math.sin(a.age*3)*.05+.22;a.sprite.position.set(a.pos.x,a.pos.y+l,a.pos.z);const c=e.pos.x-a.pos.x,h=e.pos.z-a.pos.z,u=e.pos.y+.9-a.pos.y,f=Math.hypot(c,u,h);if(a.age>.6&&f<2.2&&n.canAdd(a.id)&&(a.vel.x=c*6,a.vel.z=h*6,a.vel.y=Math.max(a.vel.y,u*5),a.pos.x+=c*t*6,a.pos.z+=h*t*6,f<.9)){const p=n.add(a.id,a.n);if(p===0){this.remove(r),s(a);continue}a.n=p}(a.age>300||a.pos.y<-10)&&this.remove(r)}}remove(t){const e=this.list[t];this.scene.remove(e.sprite),e.sprite.material.dispose(),this.list.splice(t,1)}clear(){for(;this.list.length;)this.remove(0)}}class bv{constructor(t,e){this.world=e,this.pool=[];const n=new oe(.12,.12,.12);for(let s=0;s<90;s++){const r=new Ut(n,new Pe({color:16777215}));r.visible=!1,t.add(r),this.pool.push({mesh:r,life:0,vel:new L})}this.next=0}burst(t,e,n,s,r=10,a=3){for(let o=0;o<r;o++){const l=this.pool[this.next++%this.pool.length];l.life=.5+Math.random()*.4,l.mesh.visible=!0,l.mesh.position.set(t+(Math.random()-.5),e+(Math.random()-.5),n+(Math.random()-.5)),l.mesh.material.color.setRGB(s[0]*(.7+Math.random()*.3),s[1]*(.7+Math.random()*.3),s[2]*(.7+Math.random()*.3)),l.vel.set((Math.random()-.5)*a,Math.random()*a*.9,(Math.random()-.5)*a)}}blockBreak(t,e,n,s){const r=Ve[s];r&&this.burst(t+.5,e+.5,n+.5,of(r.tiles[2]),14,3.2)}update(t){for(const e of this.pool)if(!(e.life<=0)){if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.vel.y-=16*t,e.mesh.position.addScaledVector(e.vel,t)}}}const at=16,Xe=128,hn=30,mn=(i,t)=>(i+32768)*65536+(t+32768),Jh=i=>Math.floor(i/65536)-32768,Qh=i=>i%65536-32768,Vl=[{dir:[-1,0,0],shade:.9,ax:0,corners:[{p:[0,1,0],uv:[0,1]},{p:[0,0,0],uv:[0,0]},{p:[0,1,1],uv:[1,1]},{p:[0,0,1],uv:[1,0]}]},{dir:[1,0,0],shade:.9,ax:0,corners:[{p:[1,1,1],uv:[0,1]},{p:[1,0,1],uv:[0,0]},{p:[1,1,0],uv:[1,1]},{p:[1,0,0],uv:[1,0]}]},{dir:[0,-1,0],shade:.75,ax:1,bottom:!0,corners:[{p:[1,0,1],uv:[1,0]},{p:[0,0,1],uv:[0,0]},{p:[1,0,0],uv:[1,1]},{p:[0,0,0],uv:[0,1]}]},{dir:[0,1,0],shade:1,ax:1,top:!0,corners:[{p:[0,1,1],uv:[1,1]},{p:[1,1,1],uv:[0,1]},{p:[0,1,0],uv:[1,0]},{p:[1,1,0],uv:[0,0]}]},{dir:[0,0,-1],shade:.82,ax:2,corners:[{p:[1,0,0],uv:[0,0]},{p:[0,0,0],uv:[1,0]},{p:[1,1,0],uv:[0,1]},{p:[0,1,0],uv:[1,1]}]},{dir:[0,0,1],shade:.82,ax:2,corners:[{p:[0,0,1],uv:[0,0]},{p:[1,0,1],uv:[1,0]},{p:[0,1,1],uv:[0,1]},{p:[1,1,1],uv:[1,1]}]}];for(const i of Vl)i.tan=[0,1,2].filter(t=>t!==i.ax);const tu=[.5,.68,.84,1],dr=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function Oi(i,t,e){const n=Yn(i*.0022,t*.0022,e,4),s=Yn(i*.0055,t*.0055,e+31,3),r=1-Math.abs(2*Yn(i*.011,t*.011,e+37,3)-1),a=Yn(i*.013,t*.013,e+7,3),o=Yn(i*.05,t*.05,e+9,2);let l,c=0;if(n<.4)l=hn-2-(.4-n)*80+o*3;else{const p=Math.min(1,(n-.4)/.5);l=hn+1+p*10+a*12+o*3,c=dr(.52,.78,s)*dr(.45,.6,n),l+=c*(r*62+14)}if(n>=.4&&c<.5){const p=Math.abs(Yn(i*.0032+11,t*.0032-7,e+61,2)-.5);if(p<.016){const g=dr(.016,.004,p);l=l*(1-g)+(hn-2)*g}}l=Math.max(6,Math.min(Xe-8,Math.floor(l)));const h=Yn(i*.0035,t*.0035,e+500,2),u=Yn(i*.004,t*.004,e+900,2);let f;return l<=hn-1?f="ocean":c>.3?f="mountains":h<.34?f="snow":h>.64?f=u>.55?"jungle":"desert":f=h>.55&&u>.6?"jungle":"plains",{h:l,biome:f,m:c,t:h,hm:u}}const Ev=(i,t,e)=>Oi(i,t,e).h;function eu(i,t,e){return Oi(i,t,e).biome}class Tv{constructor(t,e,n=1337,s=new Map){this.scene=t,this.materials=e,this.seed=n,this.saved=s,this.chunks=new Map,this.tops=new Map,this.meshes=new Map,this.dirty=new Set,this.modified=new Set,this.unsaved=new Set,this.unloadT=0,this.torches=new Map,this._lm=null,this.onChunkMeshed=null}idx(t,e,n){return(e*at+n)*at+t}generateChunk(t,e){const n=mn(t,e);if(this.saved.has(n)){let h=new Uint8Array(this.saved.get(n));if(h.length!==at*at*Xe){const u=new Uint8Array(at*at*Xe);u.set(h.subarray(0,Math.min(h.length,u.length))),h=u}return this.chunks.set(n,h),this.modified.add(n),this.computeTops(n,h),this.scanTorches(n,h),h}const s=this.seed,r=new Uint8Array(at*at*Xe),a=t*at,o=e*at;for(let h=0;h<at;h++)for(let u=0;u<at;u++){const f=a+u,p=o+h,g=Oi(f,p,s),_=g.h,m=g.biome;let d=V.GRASS,b=V.DIRT;m==="ocean"||_<=hn+1||m==="desert"?(d=V.SAND,b=V.SAND):m==="snow"?d=V.SNOW:m==="mountains"&&(_>92?(d=V.SNOW,b=V.SNOW):_>64&&(d=V.STONE,b=V.STONE));for(let y=0;y<=_&&y<Xe;y++){let v=V.STONE;if(y===_)v=d;else if(y>=_-3)v=b;else{const P=Me(f*31+y,p*17-y,s+77+y);y<64&&P<.025?v=V.COAL_ORE:y<48&&P>.975&&P<.99?v=V.IRON_ORE:y<28&&P>.99&&P<.996?v=V.GOLD_ORE:y<16&&P>.996&&(v=V.DIAMOND_ORE)}if((y===0||y===1&&Me(f,p,s+3)<.5)&&(v=V.BEDROCK),y>2&&y<_-1&&v!==V.BEDROCK){const P=Oo(f*.045,y*.07,p*.045,s+11),T=Oo(f*.045+50,y*.07+50,p*.045+50,s+13),A=Oo(f*.025,y*.045,p*.025,s+17);(Math.abs(P-.5)<.055&&Math.abs(T-.5)<.055||A>.8)&&(v=Ln)}r[this.idx(u,y,h)]=v}for(let y=_+1;y<=hn;y++)r[this.idx(u,y,h)]=V.WATER}const l=(h,u,f,p,g)=>{const _=h-a,m=f-o;if(_<0||m<0||_>=at||m>=at||u>=Xe||u<0)return;const d=this.idx(_,u,m);g&&r[d]!==Ln||(r[d]=p)},c=this.villagesNear(a,o);for(let h=o-3;h<o+at+3;h++)for(let u=a-3;u<a+at+3;u++){const f=Me(u,h,s+99);if(f>.06)continue;const p=Oi(u,h,s),g=p.h,_=p.biome;if(g<=hn+1||_==="ocean"||_==="mountains"||c.some(P=>Math.abs(P.x-u)<26&&Math.abs(P.z-h)<26))continue;if(_==="desert"){if(f<.004){const P=1+Math.floor(Me(u,h,s+6)*3);for(let T=1;T<=P;T++)l(u,g+T,h,V.CACTUS,!1)}continue}const m=Yn(u*.012,h*.012,s+800,2)>.58;if(f>(_==="jungle"?.055:m?.03:_==="snow"?.007:.005))continue;const b=_==="jungle",y=b?8+Math.floor(Me(u,h,s+5)*6):4+Math.floor(Me(u,h,s+5)*3),v=b?3:2;for(let P=-2;P<=1;P++){const T=P<=-1?v:v-1;for(let A=-T;A<=T;A++)for(let C=-T;C<=T;C++)T>=2&&Math.abs(C)===T&&Math.abs(A)===T||l(u+C,g+y+P,h+A,V.LEAVES,!0)}for(let P=1;P<=y;P++)l(u,g+P,h,V.LOG,!1)}for(const h of c)this.buildVillage(h,l);return this.chunks.set(n,r),this.computeTops(n,r),r}villageAt(t,e){const n=t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(n))return this.vcache.get(n);const s=this.seed;let r=null;if(Me(t,e,s+444)<.3){const a=t*128+28+Math.floor(Me(t,e,s+445)*72),o=e*128+28+Math.floor(Me(t,e,s+446)*72),l=Oi(a,o,s);l.biome!=="ocean"&&l.biome!=="mountains"&&l.h>hn+1&&l.h<hn+20&&[[12,0],[-12,0],[0,12],[0,-12],[10,10],[-10,-10]].every(([h,u])=>{const f=Oi(a+h,o+u,s);return Math.abs(f.h-l.h)<=3&&f.biome!=="ocean"})&&(r={x:a,z:o,H:l.h,biome:l.biome})}return this.vcache.set(n,r),r}villagesNear(t,e){const n=[];for(let s=Math.floor((t-40)/128);s<=Math.floor((t+at+40)/128);s++)for(let r=Math.floor((e-40)/128);r<=Math.floor((e+at+40)/128);r++){const a=this.villageAt(s,r);a&&n.push(a)}return n}buildVillage(t,e){const n=this.seed,s=t.H,r=t.biome==="desert"?V.SAND:V.PLANKS,a=V.PLANKS;for(let l=-2;l<=2;l++)for(let c=-2;c<=2;c++){const h=Math.abs(l)===2||Math.abs(c)===2;for(let u=s-3;u<=s;u++)e(t.x+l,u,t.z+c,h?V.COBBLE:V.WATER,!1);for(let u=s+1;u<=s+6;u++)e(t.x+l,u,t.z+c,0,!1);h&&e(t.x+l,s+1,t.z+c,V.COBBLE,!1)}for(const[l,c]of[[-2,-2],[2,-2],[-2,2],[2,2]])for(let h=s+2;h<=s+4;h++)e(t.x+l,h,t.z+c,V.LOG,!1);for(let l=-2;l<=2;l++)for(let c=-2;c<=2;c++)e(t.x+l,s+5,t.z+c,V.PLANKS,!1);[[-14,-8],[14,-8],[-14,10],[14,10],[0,-16],[0,17]].forEach(([l,c],h)=>{if(Me(t.x+l,t.z+c,n+5)<.12&&h>3)return;const u=t.x+l,f=t.z+c,p=Math.abs(l)>Math.abs(c)?-Math.sign(l):0,g=p?0:-Math.sign(c);for(let _=0;_<40;_++){const m=u+p*(4+_),d=f+g*(4+_);if(Math.abs(m-t.x)<3&&Math.abs(d-t.z)<3)break;e(m,s,d,V.COBBLE,!1);for(let b=s+1;b<=s+3;b++)e(m,b,d,0,!1)}for(let _=-4;_<=4;_++)for(let m=-4;m<=4;m++){const d=u+_,b=f+m,y=Ev(d,b,n);for(let v=Math.max(1,y-1);v<=s-1;v++)e(d,v,b,V.COBBLE,!1);for(let v=s+1;v<=s+9;v++)e(d,v,b,0,!1);Math.abs(_)<=3&&Math.abs(m)<=3&&e(d,s,b,a,!1)}for(let _=-3;_<=3;_++)for(let m=-3;m<=3;m++){if(Math.abs(_)!==3&&Math.abs(m)!==3)continue;const d=Math.abs(_)===3&&Math.abs(m)===3;for(let b=s+1;b<=s+3;b++){let y=d?V.LOG:r;!d&&(Math.abs(_)===3&&m===0||Math.abs(m)===3&&_===0)&&b===s+2&&(y=V.GLASS),_===p*3&&m===g*3&&b<=s+2&&(y=0),e(u+_,b,f+m,y,!1)}}for(let _=4,m=s+4;_>=0;_--,m++)for(let d=-_;d<=_;d++)for(let b=-_;b<=_;b++)e(u+d,m,f+b,_===0?V.LOG:V.PLANKS,!1);e(u-2,s+1,f-2,V.TORCH,!1),e(u+2,s+1,f-2,V.TABLE,!1),e(u+2,s+1,f+2,V.FURNACE,!1),e(u-2,s+1,f+2,V.TORCH,!1),e(u+p*4+g,s+1,f+g*4+p,V.TORCH,!1)})}scanTorches(t,e){let n=null;for(let s=0;s<e.length;s++)e[s]===V.TORCH&&(n||(n=new Set)).add(s);n?this.torches.set(t,n):this.torches.delete(t)}computeTops(t,e){let n=0;for(let r=e.length-1;r>=0;r--)if(e[r]){n=Math.floor(r/(at*at));break}this.hi||(this.hi=new Map),this.hi.set(t,n);const s=new Int16Array(at*at).fill(-1);for(let r=0;r<at;r++)for(let a=0;a<at;a++){let o=Xe-1;for(;o>=0&&!ti[e[this.idx(a,o,r)]];)o--;s[r*at+a]=o}this.tops.set(t,s)}getBlock(t,e,n){if(e<0||e>=Xe)return Ln;const s=Math.floor(t/at),r=Math.floor(n/at),a=this.chunks.get(mn(s,r));return a?a[(e*at+(n-r*at))*at+(t-s*at)]:Ln}topY(t,e){const n=Math.floor(t/at),s=Math.floor(e/at),r=this.tops.get(mn(n,s));return r?r[(e-s*at)*at+(t-n*at)]:-1}skyLit(t,e,n){const s=Math.floor(t/at),r=Math.floor(n/at),a=this.tops.get(mn(s,r));return a?e>a[(n-r*at)*at+(t-s*at)]?1:0:1}isSolid(t,e,n){if(e<0)return!0;if(e>=Xe)return!1;const s=Math.floor(t/at),r=Math.floor(n/at),a=this.chunks.get(mn(s,r));return a?Ua[a[(e*at+(n-r*at))*at+(t-s*at)]]===1:!0}isLiquid(t,e,n){return xr[this.getBlock(t,e,n)]===1}setBlock(t,e,n,s){if(e<0||e>=Xe)return!1;const r=Math.floor(t/at),a=Math.floor(n/at),o=mn(r,a),l=this.chunks.get(o);if(!l)return!1;const c=t-r*at,h=n-a*at,u=this.idx(c,e,h),f=l[u];if(l[u]=s,s&&e>this.hi.get(o)&&this.hi.set(o,e),this.modified.add(o),this.unsaved.add(o),f===V.TORCH||s===V.TORCH){let d=this.torches.get(o);s===V.TORCH?(d||this.torches.set(o,d=new Set),d.add(u)):d&&(d.delete(u),d.size||this.torches.delete(o));for(let b=-1;b<=1;b++)for(let y=-1;y<=1;y++)this.dirty.add(mn(r+b,a+y))}const p=this.tops.get(o),g=h*at+c;if(ti[s])e>p[g]&&(p[g]=e);else if(e===p[g]){let d=e-1;for(;d>=0&&!ti[l[this.idx(c,d,h)]];)d--;p[g]=d}this.dirty.add(o);const _=c===0?-1:c===at-1?1:0,m=h===0?-1:h===at-1?1:0;return _&&this.dirty.add(mn(r+_,a)),m&&this.dirty.add(mn(r,a+m)),_&&m&&this.dirty.add(mn(r+_,a+m)),!0}raycast(t,e,n=6,s=!1){let r=Math.floor(t.x),a=Math.floor(t.y),o=Math.floor(t.z);const l=[Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)],c=[Math.abs(1/e.x),Math.abs(1/e.y),Math.abs(1/e.z)],h=(g,_)=>_>0?Math.floor(g)+1-g:g-Math.floor(g),u=[l[0]===0?1/0:h(t.x,l[0])*c[0],l[1]===0?1/0:h(t.y,l[1])*c[1],l[2]===0?1/0:h(t.z,l[2])*c[2]];let f=[0,0,0],p=0;for(;p<=n;){const g=this.getBlock(r,a,o);if(g!==Ln&&(s||!xr[g]))return{x:r,y:a,z:o,id:g,normal:f,dist:p};const _=u[0]<u[1]?u[0]<u[2]?0:2:u[1]<u[2]?1:2;p=u[_],u[_]+=c[_],f=[0,0,0],f[_]=-l[_],_===0?r+=l[0]:_===1?a+=l[1]:o+=l[2]}return null}update(t,e,n,s=2){const r=Math.floor(t/at),a=Math.floor(e/at),o=[],l=[];for(let u=-n-1;u<=n+1;u++)for(let f=-n-1;f<=n+1;f++){const p=r+f,g=a+u,_=mn(p,g),m=f*f+u*u;if(!this.chunks.has(_))o.push({cx:p,cz:g,d:m});else if(Math.abs(f)<=n&&Math.abs(u)<=n){const d=this.dirty.has(_);(!this.meshes.has(_)||d)&&l.push({cx:p,cz:g,d:d?m-1e4:m})}}o.sort((u,f)=>u.d-f.d);for(let u=0;u<Math.min(s*2,o.length);u++)this.generateChunk(o[u].cx,o[u].cz);l.sort((u,f)=>u.d-f.d);let c=0,h=0;for(const u of l){let f=!0;for(let p=-1;p<=1&&f;p++)for(let g=-1;g<=1;g++)if(!this.chunks.has(mn(u.cx+p,u.cz+g))){f=!1;break}if(!f){h++;continue}c<(u.d<-5e3?6:s)?(this.buildMesh(u.cx,u.cz),c++):h++}for(const[u,f]of this.meshes)(Math.abs(Jh(u)-r)>n+2||Math.abs(Qh(u)-a)>n+2)&&(this.disposeMesh(f),this.meshes.delete(u));if((this.unloadT-=1)<=0){this.unloadT=60;for(const u of[...this.chunks.keys()])if(Math.abs(Jh(u)-r)>n+5||Math.abs(Qh(u)-a)>n+5){if(this.modified.has(u))continue;this.chunks.delete(u),this.tops.delete(u)}}return o.length+h}disposeMesh(t){for(const e of[t.opaque,t.trans])e&&(this.scene.remove(e),e.geometry.dispose())}buildMesh(t,e){const n=mn(t,e),s=this.chunks.get(n);if(!s)return;const r=t*at,a=e*at,o=[{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]},{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]}],l=(M,x,R)=>{const D=M-r,U=R-a;return D>=0&&U>=0&&D<at&&U<at&&x>=0&&x<Xe?s[(x*at+U)*at+D]:this.getBlock(M,x,R)},c=new Float32Array(at*at*3);for(let M=0;M<at;M++)for(let x=0;x<at;x++){const R=r+x,D=a+M,U=Yn(R*.004,D*.004,this.seed+900,2),z=Yn(R*.0035,D*.0035,this.seed+500,2),K=dr(.35,.7,U),q=dr(.42,.28,z),Y=(M*at+x)*3;c[Y]=(1.15*(1-K)+.78*K)*(1-.18*q),c[Y+1]=1*(1-K)+1.1*K,c[Y+2]=.6*(1-K)+.8*K+.3*q}const h=.0015,u=[0,0,0],f=[0,0,0,0],p=[0,0,0,0],g=[0,0,0,0],_=at*3,m=r-at,d=a-at;let b=null;const y=[];for(let M=-1;M<=1;M++)for(let x=-1;x<=1;x++){const R=this.torches.get(mn(t+M,e+x));if(R)for(const D of R)y.push([(t+M)*at+D%at,Math.floor(D/(at*at)),(e+x)*at+Math.floor(D/at)%at])}if(y.length){b=this._lm||(this._lm=new Uint8Array(_*_*Xe)),b.fill(0);const M=(D,U,z)=>(U*_+(z-d))*_+(D-m),x=[];for(const[D,U,z]of y)b[M(D,U,z)]=10,x.push(D,U,z);const R=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1];for(let D=0;D<x.length;D+=3){const U=x[D],z=x[D+1],K=x[D+2],q=b[M(U,z,K)]-1;if(!(q<=0))for(let Y=0;Y<18;Y+=3){const k=U+R[Y],et=z+R[Y+1],nt=K+R[Y+2];if(et<0||et>=Xe||k<m||k>=m+_||nt<d||nt>=d+_||ti[l(k,et,nt)])continue;const mt=M(k,et,nt);b[mt]<q&&(b[mt]=q,x.push(k,et,nt))}}}const v=(M,x,R)=>!b||x<0||x>=Xe||M<m||M>=m+_||R<d||R>=d+_?0:Math.pow(b[(x*_+(R-d))*_+(M-m)]/10,1.7),P=Math.min(Xe-1,(this.hi.get(n)||Xe)+1);for(let M=0;M<=P;M++)for(let x=0;x<at;x++)for(let R=0;R<at;R++){const D=s[(M*at+x)*at+R];if(D===Ln)continue;const U=Ve[D],z=U.transparent?o[1]:o[0],K=r+R,q=a+x;if(U.torch){const Y=(ur.torch+.4375)/fr,k=(ur.torch+9/16)/fr;for(const et of Vl){if(et.bottom)continue;const nt=z.pos.length/3;for(const mt of et.corners)z.pos.push(R+7/16+mt.p[0]*2/16,M+mt.p[1]*10/16,x+7/16+mt.p[2]*2/16),z.nor.push(et.dir[0],et.dir[1],et.dir[2]),z.uv.push(Y+(k-Y)*mt.uv[0],6/16+10/16*mt.uv[1]),z.col.push(.9,.9,.9),z.bl.push(1),z.sw.push(0),z.sk.push(1);z.ind.push(nt,nt+1,nt+2,nt+2,nt+1,nt+3)}continue}for(const Y of Vl){const k=K+Y.dir[0],et=M+Y.dir[1],nt=q+Y.dir[2],mt=l(k,et,nt);if(ti[mt]||mt===D&&U.transparent)continue;const kt=ur[Y.top?U.tiles[0]:Y.bottom?U.tiles[1]:U.tiles[2]],[ne,j]=Y.tan;let it=1,xt=1,lt=1;if(D===V.LEAVES||D===V.GRASS&&Y.top){const zt=(x*at+R)*3;it=c[zt],xt=c[zt+1],lt=c[zt+2]}const At=et<Xe?this.skyLit(k,et,nt):1,Dt=v(k,et,nt);for(let zt=0;zt<4;zt++){const Bt=Y.corners[zt].p,fe=Bt[ne]*2-1,N=Bt[j]*2-1;u[0]=k,u[1]=et,u[2]=nt,u[ne]+=fe;const ze=ti[l(u[0],u[1],u[2])],Kt=ze?At:this.skyLit(u[0],u[1],u[2]),jt=ze?Dt:v(u[0],u[1],u[2]);u[0]=k,u[1]=et,u[2]=nt,u[j]+=N;const bt=ti[l(u[0],u[1],u[2])],me=bt?At:this.skyLit(u[0],u[1],u[2]),Rt=bt?Dt:v(u[0],u[1],u[2]);u[0]=k,u[1]=et,u[2]=nt,u[ne]+=fe,u[j]+=N;const w=ti[l(u[0],u[1],u[2])],S=ze&&bt||w?At:this.skyLit(u[0],u[1],u[2]),B=ze&&bt||w?Dt:v(u[0],u[1],u[2]);g[zt]=(Dt+jt+Rt+B)/4,f[zt]=ze&&bt?0:3-(ze+bt+w),p[zt]=(At+Kt+me+S)/4}const Pt=z.pos.length/3;for(let zt=0;zt<4;zt++){const Bt=Y.corners[zt];let fe=Bt.p[1];D===V.WATER&&fe===1&&l(K,M+1,q)!==V.WATER&&(fe=.88),z.pos.push(R+Bt.p[0],M+fe,x+Bt.p[2]),z.nor.push(Y.dir[0],Y.dir[1],Y.dir[2]),z.uv.push((kt+(Bt.uv[0]?1-h:h))/fr,Bt.uv[1]?1-h:h);const N=Y.shade*tu[f[zt]]*(.3+.7*p[zt]);z.col.push(N*it,N*xt,N*lt),z.bl.push(Y.shade*tu[f[zt]]*g[zt]),z.sw.push(D===V.LEAVES?1:D===V.WATER?2:0),z.sk.push(p[zt])}f[0]+f[3]>f[1]+f[2]?z.ind.push(Pt,Pt+1,Pt+3,Pt,Pt+3,Pt+2):z.ind.push(Pt,Pt+1,Pt+2,Pt+2,Pt+1,Pt+3)}}const T=this.meshes.get(n);T&&this.disposeMesh(T);const A={opaque:null,trans:null},C=(M,x,R,D)=>{if(!M.ind.length)return null;const U=new qe;U.setAttribute("position",new Te(M.pos,3)),U.setAttribute("normal",new Te(M.nor,3)),U.setAttribute("uv",new Te(M.uv,2)),U.setAttribute("color",new Te(M.col,3)),U.setAttribute("blight",new Te(M.bl,1)),U.setAttribute("sway",new Te(M.sw,1)),U.setAttribute("skyl",new Te(M.sk,1)),U.setIndex(M.ind),U.computeBoundingSphere();const z=new Ut(U,x);return z.position.set(r,0,a),z.renderOrder=R,z.castShadow=D,z.receiveShadow=!0,this.scene.add(z),z};A.opaque=C(o[0],this.materials.opaque,0,!0),A.trans=C(o[1],this.materials.trans,1,!1),this.meshes.set(n,A),this.dirty.delete(n),this.onChunkMeshed&&this.onChunkMeshed(t,e)}}const Na=(i,t)=>new zn(t?{color:i,map:t}:{color:i});function $e(i,t,e,n,s,r,a,o){const l=new we;l.position.set(r,a,o);const c=new Ut(new oe(t,e,n),Na(s));return c.position.y=-e/2,l.add(c),i.add(l),l}function Wt(i,t,e,n,s,r,a,o,l){const c=new Ut(new oe(t,e,n),Na(s,l));return c.position.set(r,a,o),i.add(c),c}function wv(i){const t=document.createElement("canvas");t.width=t.height=8,i(t.getContext("2d"));const e=new Bn(t);return e.magFilter=ue,e.minFilter=ue,e.generateMipmaps=!1,e}const Oa={pig:{hw:.4,h:.9,hp:10,speed:1.4,hostile:!1,name:"Cerdo",build(i,t){Wt(i,.6,.5,.95,15769768,0,.62,0),t.head=Wt(i,.5,.45,.45,16034480,0,.78,.65),Wt(i,.26,.2,.1,14189196,0,.72,.92),t.legs=[[-.18,.5],[.18,.5],[-.18,-.5],[.18,-.5]].map(([e,n])=>$e(i,.2,.37,.2,15242140,e,.37,n))},drops:()=>[[X.PORK,1+Math.floor(Math.random()*2)]]},cow:{hw:.45,h:1.4,hp:10,speed:1.2,hostile:!1,name:"Vaca",build(i,t){Wt(i,.75,.7,1.2,4863268,0,.95,0),Wt(i,.77,.3,.5,15658734,0,.95,-.15),t.head=Wt(i,.5,.5,.45,4863268,0,1.15,.8),Wt(i,.3,.2,.1,14272688,0,1.05,1.05),Wt(i,.08,.15,.08,14540253,-.22,1.45,.75),Wt(i,.08,.15,.08,14540253,.22,1.45,.75),t.legs=[[-.22,.45],[.22,.45],[-.22,-.45],[.22,-.45]].map(([e,n])=>$e(i,.24,.6,.24,4008990,e,.6,n))},drops:()=>[[X.BEEF,1+Math.floor(Math.random()*3)]]},sheep:{hw:.42,h:1.2,hp:8,speed:1.2,hostile:!1,name:"Oveja",xp:1,build(i,t){Wt(i,.85,.75,1.15,15658734,0,.9,0),t.head=Wt(i,.4,.42,.42,9076080,0,1.05,.72),t.legs=[[-.2,.4],[.2,.4],[-.2,-.4],[.2,-.4]].map(([e,n])=>$e(i,.2,.5,.2,9076080,e,.5,n))},drops:()=>[[X.BEEF,1+Math.floor(Math.random()*2)]]},chicken:{hw:.22,h:.7,hp:4,speed:1.3,hostile:!1,name:"Gallina",xp:1,build(i,t){Wt(i,.34,.34,.5,16053492,0,.42,0),t.head=Wt(i,.2,.26,.2,16316664,0,.68,.24),Wt(i,.1,.07,.12,15769632,0,.64,.38),Wt(i,.06,.1,.06,13639712,0,.55,.33),Wt(i,.06,.26,.4,15263976,-.2,.44,0),Wt(i,.06,.26,.4,15263976,.2,.44,0),t.legs=[-.08,.08].map(e=>$e(i,.05,.25,.05,15769632,e,.25,0))},drops:()=>[[X.CHICKEN,1]]},skeleton:{hw:.3,h:1.9,hp:20,speed:2.2,hostile:!0,name:"Esqueleto",ranged:!0,xp:5,build(i,t){t.legs=[$e(i,.18,.85,.18,14211276,-.12,.85,0),$e(i,.18,.85,.18,14211276,.12,.85,0)],Wt(i,.5,.8,.2,14211276,0,1.25,0);for(const s of[1,1.2,1.4])Wt(i,.52,.07,.22,5592396,0,s,0);t.arms=[$e(i,.14,.75,.14,14211276,-.34,1.62,0),$e(i,.14,.75,.14,14211276,.34,1.62,0)],t.arms[1].rotation.x=-1.3,t.arms[0].rotation.x=-1.3,t.head=Wt(i,.5,.5,.5,14211276,0,1.9,0),Wt(i,.1,.1,.02,1052688,-.12,1.93,.26),Wt(i,.1,.1,.02,1052688,.12,1.93,.26),Wt(i,.2,.05,.02,1052688,0,1.78,.26),Wt(i,.06,.5,.2,6965800,.42,1.28,.28)},drops:()=>Math.random()<.6?[[X.COAL,1]]:[[X.STICK,2]]},spider:{hw:.55,h:.75,hp:16,speed:4.2,hostile:!0,name:"Araña",xp:4,build(i,t){Wt(i,.7,.5,.7,2761760,0,.5,.3),Wt(i,.9,.6,1.1,3353124,0,.55,-.55),t.head=Wt(i,.5,.45,.45,2761760,0,.5,.8);for(const n of[-.12,.12])Wt(i,.1,.1,.03,13637656,n,.58,1.04),Wt(i,.06,.06,.03,13637656,n*1.8,.5,1.04);t.legs=[];for(let n=0;n<4;n++)for(const s of[-1,1]){const r=Wt(i,.9,.08,.08,2761760,s*.62,.38,.55-n*.38);r.rotation.z=s*-.55,r.rotation.y=s*(n-1.5)*.25}},drops:()=>Math.random()<.5?[[X.STICK,1]]:[]},enderman:{hw:.3,h:2.9,hp:40,speed:5,hostile:!1,name:"Enderman",xp:8,enderman:!0,build(i,t){t.legs=[$e(i,.18,1.5,.18,1182232,-.12,1.5,0),$e(i,.18,1.5,.18,1182232,.12,1.5,0)],Wt(i,.5,.95,.26,1182232,0,1.98,0),t.arms=[$e(i,.13,1.35,.13,1182232,-.34,2.45,0),$e(i,.13,1.35,.13,1182232,.34,2.45,0)],t.head=Wt(i,.5,.42,.5,1182232,0,2.7,0);for(const n of[-.13,.13])Wt(i,.14,.05,.03,14708991,n,2.72,.26)},drops:()=>Math.random()<.65?[[X.PEARL,1]]:[]},slime:{hw:.42,h:.85,hp:8,speed:0,hostile:!0,name:"Slime",xp:2,build(i,t){const e=new zn({color:6348896,emissive:1064976,transparent:!0,opacity:.8}),n=new Ut(new oe(.84,.84,.84),e);n.position.y=.42,i.add(n),Wt(i,.4,.4,.4,3119663,0,.42,0),Wt(i,.14,.14,.05,1060880,-.2,.55,.43),Wt(i,.14,.14,.05,1060880,.2,.55,.43)},drops:()=>[]},zombie:{hw:.3,h:1.8,hp:20,speed:2.5,hostile:!0,name:"Zombi",damage:3,build(i,t){t.legs=[$e(i,.26,.75,.26,2899612,-.14,.75,0),$e(i,.26,.75,.26,2899612,.14,.75,0)],Wt(i,.54,.75,.28,2794936,0,1.125,0),t.arms=[$e(i,.22,.72,.22,5147194,-.38,1.45,0),$e(i,.22,.72,.22,5147194,.38,1.45,0)],t.arms.forEach(e=>e.rotation.x=-Math.PI/2.2),t.head=Wt(i,.5,.5,.5,5147194,0,1.75,0),Wt(i,.1,.07,.02,1052688,-.12,1.78,.26),Wt(i,.1,.07,.02,1052688,.12,1.78,.26)},drops:()=>Math.random()<.15?[[X.IRON,1]]:[]},creeper:{hw:.3,h:1.7,hp:20,speed:2.3,hostile:!0,name:"Creeper",creeper:!0,build(i,t){t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([o,l])=>$e(i,.26,.45,.26,4099646,o,.45,l*.5)),t.body=Wt(i,.5,.85,.3,5154894,0,.88,0);const n=wv(o=>{o.fillStyle="#4ea84e",o.fillRect(0,0,8,8),o.fillStyle="#0c1a0c",o.fillRect(1,2,2,2),o.fillRect(5,2,2,2),o.fillRect(3,4,2,2),o.fillRect(2,5,1,2),o.fillRect(5,5,1,2)}),s=Na(5154894),r=[s,s,s,s,Na(16777215,n),s],a=new Ut(new oe(.5,.5,.5),r);a.position.set(0,1.55,0),i.add(a),t.head=a},drops:()=>[]}},nu=["zombie","zombie","zombie","creeper","creeper","skeleton","skeleton","skeleton","spider","spider","enderman"],iu=["zombie","zombie","creeper","skeleton","skeleton","spider"];class Av{constructor(t,e,n,s,r){this.type=t,this.def=Oa[t],this.pos=new L(e,n,s),this.vel=new L,this.hw=this.def.hw,this.h=this.def.h,this.hp=this.def.hp,this.yaw=Math.random()*Math.PI*2,this.group=new we,this.parts={},this.def.build(this.group,this.parts),this.model=new we,this.model.add(this.group),r.add(this.model),this.group.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.wanderT=0,this.wanderDir=0,this.moving=!1,this.cool=0,this.flash=0,this.fuse=0,this.walkT=0,this.age=0,this.onGround=!1,this.sound=3+Math.random()*10}materials(){const t=[];return this.group.traverse(e=>{e.material&&(Array.isArray(e.material)?t.push(...e.material):t.push(e.material))}),t}hit(t,e,n){this.hp-=t,this.flash=.3,this.provoked=!0,this.aggro=!0;const s=this.pos.x-e,r=this.pos.z-n,a=Math.hypot(s,r)||1;this.vel.x=s/a*6,this.vel.z=r/a*6,this.vel.y=5}dispose(t){t.remove(this.model),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(n=>n.dispose())})}}function Mr(i,t,e,n){let s=0,r=1/0;for(const a of["x","y","z"]){if(Math.abs(t[a])<1e-9){if(i[a]<e[a]||i[a]>n[a])return-1;continue}let o=(e[a]-i[a])/t[a],l=(n[a]-i[a])/t[a];if(o>l&&([o,l]=[l,o]),s=Math.max(s,o),r=Math.min(r,l),s>r)return-1}return s}class Rv{constructor(t,e,n){this.scene=t,this.world=e,this.hooks=n,this.list=[],this.spawnT=0,this.arrows=[]}add(t,e,n,s){const r=new Av(t,e,n,s,this.scene);return this.list.push(r),r}clear(){for(const t of this.list)t.dispose(this.scene);this.list=[];for(const t of this.arrows)this.scene.remove(t.mesh);this.arrows=[]}raycast(t,e,n){let s=null;for(const r of this.list){const a=Mr(t,e,{x:r.pos.x-r.hw,y:r.pos.y,z:r.pos.z-r.hw},{x:r.pos.x+r.hw,y:r.pos.y+r.h,z:r.pos.z+r.hw});a>=0&&a<=n&&(!s||a<s.dist)&&(s={mob:r,dist:a})}return s}damage(t,e,n,s){t.hit(e,n,s),this.hooks.sound("hit"),t.hp<=0&&this.kill(t)}kill(t){for(const[e,n]of t.def.drops())this.hooks.drop(t.pos.x,t.pos.y+.5,t.pos.z,e,n);this.hooks.killed&&this.hooks.killed(t.type,t.def.xp||2),this.hooks.puff(t.pos.x,t.pos.y+t.h/2,t.pos.z),t.dispose(this.scene),this.list.splice(this.list.indexOf(t),1)}update(t,e,n,s,r){const a=this.world;for(let o=this.list.length-1;o>=0;o--){const l=this.list[o];l.age+=t,l.cool=Math.max(0,l.cool-t),l.flash=Math.max(0,l.flash-t);const c=e.pos.x-l.pos.x,h=e.pos.z-l.pos.z,u=Math.hypot(c,h),f=e.pos.y-l.pos.y;let p=l.def.hostile&&n==="survival"&&!e.dead;if(l.type==="spider"&&s>.5&&!l.provoked&&(p=!1),l.def.enderman&&n==="survival"&&!e.dead&&!l.aggro&&u<24){const C=e.lookDir(),M=l.pos.x-e.pos.x,x=l.pos.y+2.6-(e.pos.y+1.62),R=l.pos.z-e.pos.z,D=Math.hypot(M,x,R);(C.x*M+C.y*x+C.z*R)/D>.985&&(l.aggro=!0)}l.def.enderman&&l.aggro&&n==="survival"&&!e.dead&&(p=!0);let g=null,_=l.def.speed;p&&u<26&&Math.abs(f)<14?(g=Math.atan2(-c,-h),l.def.ranged&&u<6&&(g+=Math.PI)):(l.wanderT-=t,l.wanderT<=0&&(l.wanderT=2+Math.random()*4,l.wanderDir=Math.random()<.4?null:Math.random()*Math.PI*2),l.wanderDir!==null&&l.wanderDir!==void 0&&(g=l.wanderDir),_*=.6);let m=!1;const d=l.def.ranged&&p&&u>=6&&u<12;if(g!==null){let C=g-l.yaw;if(C=Math.atan2(Math.sin(C),Math.cos(C)),l.yaw+=Math.max(-8*t,Math.min(8*t,C)),m=!d,d){const M=Math.atan2(-c,-h)-l.yaw;l.yaw+=Math.atan2(Math.sin(M),Math.cos(M))*Math.min(1,t*10)}}if(l.def.creeper){p&&u<3&&Math.abs(f)<2?(l.fuse+=t,l.fuse-t<=0&&this.hooks.sound("hiss"),m=!1):l.fuse=Math.max(0,l.fuse-t*2);const C=1+(l.fuse>0?Math.sin(l.fuse*30)*.04+l.fuse*.15:0);if(l.group.scale.set(C,C,C),l.fuse>=1.5){this.hooks.explode(l.pos.x,l.pos.y+.8,l.pos.z,3.2),l.dispose(this.scene),this.list.splice(o,1);continue}}const b=a.isLiquid(Math.floor(l.pos.x),Math.floor(l.pos.y+.2),Math.floor(l.pos.z)),y=-Math.sin(l.yaw),v=-Math.cos(l.yaw);m&&l.knock===void 0?(l.vel.x+=(y*_-l.vel.x)*Math.min(1,t*8),l.vel.z+=(v*_-l.vel.z)*Math.min(1,t*8)):(l.type!=="slime"||l.onGround)&&(l.vel.x*=Math.max(0,1-t*6),l.vel.z*=Math.max(0,1-t*6)),l.type==="slime"&&(m=!1,l.hopT=(l.hopT===void 0?.5:l.hopT)-t,l.onGround&&l.hopT<=0&&p&&(l.hopT=1+Math.random()*.8,l.vel.y=7.5,l.vel.x=c/(u||1)*3.4,l.vel.z=h/(u||1)*3.4,l.yaw=Math.atan2(-c,-h))),l.moving=m,b&&(l.vel.y=Math.max(l.vel.y,0)+14*t,l.vel.y=Math.min(l.vel.y,2.5));const P=qs(a,l,t);if(l.onGround=P.onGround,(P.hitX||P.hitZ)&&P.onGround&&m&&(l.vel.y=7.4),l.type==="zombie"&&p&&u<1.2&&Math.abs(f)<1.6&&l.cool<=0&&(l.cool=1,this.hooks.hurtPlayer(l.def.damage,c/(u||1)*5,h/(u||1)*5)),(l.type==="spider"||l.type==="slime"||l.def.enderman)&&p&&u<(l.type==="spider"?1.7:l.type==="slime"?1.3:1.5)&&Math.abs(f)<1.8&&l.cool<=0&&(l.cool=l.type==="spider"?.9:1,this.hooks.hurtPlayer(l.type==="spider"||l.type==="slime"?2:6,c/(u||1)*4,h/(u||1)*4)),l.def.ranged&&p&&u<22&&l.cool<=0){const C=new L(l.pos.x,l.pos.y+1.6,l.pos.z),M=new L(e.pos.x,e.pos.y+1.2,e.pos.z),x=M.clone().sub(C),R=x.length();x.normalize(),a.raycast(C,x,R)||(l.cool=2.2,this.shootArrow(C,x.multiplyScalar(1).setY(x.y+.04*R/10)))}if(l.def.enderman&&l.aggro&&(l.tpT=(l.tpT===void 0?4:l.tpT)-t,l.tpT<=0&&u>3)){l.tpT=5+Math.random()*3;const C=Math.random()*Math.PI*2,M=4+Math.random()*5,x=Math.floor(e.pos.x+Math.cos(C)*M),R=Math.floor(e.pos.z+Math.sin(C)*M),D=a.topY(x,R);D>0&&!a.isSolid(x,D+1,R)&&(this.hooks.tp(l.pos.x,l.pos.y+1,l.pos.z),l.pos.set(x+.5,D+1,R+.5),l.vel.set(0,0,0),this.hooks.tp(l.pos.x,l.pos.y+1,l.pos.z))}if(l.type==="chicken"&&l.vel.y<-2&&(l.vel.y=-2),(l.type==="zombie"||l.type==="skeleton")&&s>.75&&a.skyLit(Math.floor(l.pos.x),Math.floor(l.pos.y+1),Math.floor(l.pos.z))&&!b&&(l.burn=(l.burn||0)+t,l.burn>1&&(l.burn=0,l.hit(2,l.pos.x,l.pos.z),l.vel.set(0,0,0),l.hp<=0))){this.kill(l);continue}l.sound-=t,l.sound<=0&&(l.sound=6+Math.random()*12,u<16&&this.hooks.sound(l.type==="pig"?"oink":l.type==="cow"||l.type==="sheep"?"moo":l.type==="chicken"?"pop":l.type==="zombie"||l.type==="skeleton"||l.type==="spider"?"groan":"")),l.walkT+=t*(m?9:0);const T=m?Math.sin(l.walkT)*.7:0;l.parts.legs&&l.parts.legs.forEach((C,M)=>C.rotation.x=M%2?-T:T),l.model.position.copy(l.pos),l.model.rotation.y=l.yaw+Math.PI;const A=l.flash>0||l.fuse>0&&Math.floor(l.fuse*8)%2===0;for(const C of l.materials())C.emissive&&C.emissive.setRGB(A?l.fuse>0?.8:.5:0,A&&l.fuse>0?.8:0,A&&l.fuse>0?.8:0);(u>r*16+24||l.pos.y<-20)&&(l.dispose(this.scene),this.list.splice(o,1))}for(let o=this.arrows.length-1;o>=0;o--){const l=this.arrows[o];l.life-=t,l.vel.y-=7*t,l.mesh.position.addScaledVector(l.vel,t),l.mesh.lookAt(l.mesh.position.clone().add(l.vel));const c=l.mesh.position,h=Math.hypot(c.x-e.pos.x,c.y-(e.pos.y+.9),c.z-e.pos.z)<.75;h&&!e.dead&&this.hooks.hurtPlayer(4,l.vel.x*.25,l.vel.z*.25),(h||l.life<=0||a.isSolid(Math.floor(c.x),Math.floor(c.y),Math.floor(c.z)))&&(this.scene.remove(l.mesh),this.arrows.splice(o,1))}this.spawnT-=t,this.spawnT<=0&&(this.spawnT=1.5,this.trySpawn(e,n,s))}shootArrow(t,e){const n=new Ut(new oe(.07,.07,.8),new zn({color:9071162,emissive:2102280}));n.position.copy(t),this.scene.add(n),this.arrows.push({mesh:n,vel:e.normalize().multiplyScalar(22),life:4}),this.hooks.sound("shoot",.5)}trySpawn(t,e,n){const s=this.world,r=this.list.filter(l=>!l.def.hostile).length,a=this.list.length-r,o=(l,c)=>{const h=Math.random()*Math.PI*2,u=l+Math.random()*(c-l),f=Math.floor(t.pos.x+Math.cos(h)*u),p=Math.floor(t.pos.z+Math.sin(h)*u);return[f,p]};if(r<10&&n>.45){const[l,c]=o(16,40),h=s.topY(l,c);if(h>0){const u=s.getBlock(l,h,c);(u===V.GRASS||u===V.SNOW)&&!s.isSolid(l,h+1,c)&&!s.isLiquid(l,h+1,c)&&this.add(["pig","cow","sheep","chicken"][Math.floor(Math.random()*4)],l+.5,h+1,c+.5)}}if(!(e!=="survival"||a>=8)){if(n<.3){const[l,c]=o(20,36),h=s.topY(l,c);h>0&&!s.isSolid(l,h+1,c)&&!s.isLiquid(l,h+1,c)&&ti[s.getBlock(l,h,c)]&&this.add(nu[Math.floor(Math.random()*nu.length)],l+.5,h+1,c+.5)}else if(a<4){const l=Math.random()*Math.PI*2,c=14+Math.random()*14,h=Math.floor(t.pos.x+Math.cos(l)*c),u=Math.floor(t.pos.z+Math.sin(l)*c),f=s.topY(h,u);if(f<8)return;const p=3+Math.floor(Math.random()*Math.max(1,f-8));s.getBlock(h,p,u)===0&&s.getBlock(h,p+1,u)===0&&s.isSolid(h,p-1,u)&&!s.skyLit(h,p,u)&&this.add(iu[Math.floor(Math.random()*iu.length)],h+.5,p,u+.5)}}}}const De=(i,t)=>i+Math.random()*(t-i),Cv=[1,1.3,1.75],Pv=[18,20,15],Lv=[4.2,3.2,2.4],Dv=[1,2,3],Iv=[5,6,8],Uv=[5,4,3],su=[3.2,4.6,6.2];function Nv(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");for(let n=0;n<16;n++)for(let s=0;s<16;s++){const r=Math.sin(s*12.9+n*78.2)*43758.5%1,a=190+Math.abs(r)*30;t.fillStyle=`rgb(${a|0},${a*.58|0},${a*.28|0})`,t.fillRect(s,n,1,1)}t.fillStyle="#4a2208",t.fillRect(0,0,16,1),t.fillRect(0,15,16,1),t.fillRect(0,0,1,16),t.fillRect(15,0,1,16),t.fillStyle="#2a1204";for(let n=0;n<4;n++)t.fillRect(4+n,4+n,2,1),t.fillRect(4+n,11-n,2,1);t.fillRect(9,10,4,1);const e=new Bn(i);return e.magFilter=ue,e.minFilter=ue,e.generateMipmaps=!1,e.colorSpace=Ke,e}class Ov{constructor(t,e,n){this.scene=t,this.h=e,this.pos=n.clone(),this.name="TORMENTA WITHER",this.type="storm",this.maxHp=360,this.hp=360,this.phase=1,this.scale=1,this.scaleT=1,this.t=0,this.yaw=0,this.flash=0,this.devourT=1,this.atkT=3,this.beamT=3,this.beamOn=!1,this.minionT=10,this.meleeT=0,this.beamHurtT=0,this.shell=1,this.dead=!1,this.skulls=[],this.root=new we,this.body=new we,this.root.add(this.body),this.dark=new zn({color:1511967}),this.dark2=new zn({color:2760758}),this.glow=new Pe({color:12611839}),this.build(),this.beam=new Ut(new rs(.14,.14,1,6),new Pe({color:11559167,transparent:!0,opacity:.6,fog:!1,depthWrite:!1})),this.beam.visible=!1,t.add(this.beam),this.skullGeo=new oe(.9,.9,.9),this.skullMat=new zn({color:2102576,emissive:5906576}),t.add(this.root),this.root.position.copy(n)}build(){const{dark:t,dark2:e,glow:n,body:s}=this,r=(l,c,h,u,f,p,g,_=s)=>{const m=new Ut(new oe(l,c,h),u);return m.position.set(f,p,g),_.add(m),m};r(5,5,5,t,0,0,0);for(let l=0;l<28;l++){const c=De(1,2.6),h=Math.floor(Math.random()*3),u=Math.random()<.5?-1:1,f=[De(-2.5,2.5),De(-2.5,2.5),De(-2.5,2.5)];f[h]=u*(2.5+c*.2),r(c,c*De(.7,1.3),c,Math.random()<.5?t:e,f[0],f[1],f[2]).rotation.set(De(-.3,.3),De(-.3,.3),De(-.3,.3))}for(let l=0;l<6;l++)r(.9,De(2,3.6),.9,e,De(-2,2),3.2,De(-3,0)).rotation.z=De(-.4,.4);this.heads=[];const a=(l,c,h,u,f)=>{const p=new we;p.position.set(c,h,u),p.rotation.y=f,s.add(p),r(l,l,l,e,0,0,0,p);for(const _ of[-1,1])r(l*.24,l*.12,.12,n,_*l*.24,l*.12,l/2+.03,p);const g=new we;g.position.set(0,-l*.42,l*.05),p.add(g),r(l*.92,l*.3,l*.86,t,0,-l*.1,0,g);for(let _=-2;_<=2;_++)r(l*.08,l*.14,l*.08,n,_*l*.18,l*.05,l*.42,g);this.heads.push({g:p,jaw:g,size:l})};a(3.6,0,4,2.2,0),a(2.6,-3.9,3,1.3,-.35),a(2.6,3.9,3,1.3,.35),this.tents=[];const o=(l,c,h,u,f,p,g,_,m)=>{const d=[];for(let b=0;b<g;b++){const y=_*(1-b/g*.72),v=new Ut(new oe(y,y,y),b===g-1&&m?n:b%2?t:e);s.add(v),d.push({m:v,s:y})}this.tents.push({b:new L(l,c,h),d:new L(u,f,p).normalize(),segs:d,ph:Math.random()*6})};for(let l=0;l<6;l++)o(De(-2,2),-2.4,De(-2,1.5),De(-.2,.2),-1,De(-.3,.1),9,1.5,!1);o(-2.4,-.4,2.2,-.4,-.1,1,8,1.2,!0),o(2.4,-.4,2.2,.4,-.1,1,8,1.2,!0),o(0,-1.8,2.5,0,-.5,1,8,1.2,!0),this.cmd=new Ut(new oe(1.7,1.7,1.7),new Pe({map:Nv()})),this.cmd.position.set(0,.2,2.55),s.add(this.cmd),this.shellG=new we,this.shellG.position.set(0,.2,2.8),s.add(this.shellG),r(3.1,3.1,.8,e,0,0,0,this.shellG);for(const[l,c]of[[-1.4,0],[1.4,0],[0,1.4],[0,-1.4]])r(l?.3:2.8,c?.3:2.8,.2,n,l,c,.45,this.shellG)}headWorld(t){const e=new L;return this.heads[t%3].g.getWorldPosition(e),e}corePos(){return this.pos.clone()}raycast(t,e,n){const s=this.scale,r=this.pos,a=Mr(t,e,{x:r.x-3.1*s,y:r.y-2.8*s,z:r.z-3.1*s},{x:r.x+3.1*s,y:r.y+5.4*s,z:r.z+3.1*s});if(a<0||a>n)return null;const o=new L(r.x,r.y+.2*s,r.z),l=new L(t.x,t.y,t.z),c=Math.max(0,o.clone().sub(l).dot(e)),h=l.addScaledVector(e,c);return{dist:a,crit:this.phase===3&&h.distanceTo(o)<2.1*s}}hit(t,e){if(this.dead)return;if(this.hp-=t*(e?3:1),this.flash=.15,this.h.burst(this.pos.x+De(-2,2),this.pos.y+De(-1,3),this.pos.z+De(-2,2),e?[1,.7,.2]:[.5,.2,.8],e?16:8,4),this.hp<=0)return this.die();const n=this.hp/this.maxHp,s=n>.66?1:n>.33?2:3;s>this.phase&&(this.phase=s,this.scaleT=Cv[s-1],this.h.sound("roar",1),this.h.strikeNear(this.pos.x,this.pos.z),this.h.toast(s===2?"¡La tormenta crece y devora todo!":"¡FASE FINAL! El bloque de comandos está expuesto: ¡golpéalo!"),this.atkT=1.5)}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y,this.pos.z,7,.25),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y,this.pos.z,"storm"),this.h.toast("¡Has derrotado a la Tormenta Wither!"),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.scene.remove(this.beam),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.skulls)this.scene.remove(t.mesh);this.skulls=[]}update(t,e,n){if(this.dead)return;this.t+=t,this.flash=Math.max(0,this.flash-t);const s=this.phase-1;this.scale+=(this.scaleT-this.scale)*Math.min(1,t*1.2);const r=this.scale;this.root.scale.setScalar(r);const a=e.pos.x,o=e.pos.z;let l=a-this.pos.x,c=o-this.pos.z;const h=Math.hypot(l,c)||1;l/=h,c/=h;const u=3.5+1.2*this.phase,f=Pv[s];h>f+1?(this.pos.x+=l*u*t,this.pos.z+=c*u*t):h<f-3&&(this.pos.x-=l*u*.6*t,this.pos.z-=c*u*.6*t),this.pos.x+=-c*1.6*t*Math.sin(this.t*.3),this.pos.z+=l*1.6*t*Math.sin(this.t*.3);const p=e.pos.y+8+2*r;this.pos.y+=(p-this.pos.y)*Math.min(1,t*.8);const g=Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw;this.yaw+=Math.atan2(Math.sin(g),Math.cos(g))*Math.min(1,t*2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*.8)*.4,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((v,P)=>{v.jaw.rotation.x=.15+Math.sin(this.t*2.6+P*1.7)*.22+(this.beamOn?.35:0)});for(const v of this.tents)v.segs.forEach((P,T)=>{const A=T*.32;P.m.position.set(v.b.x+v.d.x*T*1.45+Math.sin(this.t*1.4+v.ph+T*.6)*A,v.b.y+v.d.y*T*1.45-T*.05,v.b.z+v.d.z*T*1.45+Math.cos(this.t*1.1+v.ph*1.3+T*.5)*A)});this.shell+=((this.phase>=3?0:1)-this.shell)*Math.min(1,t*2.5),this.shellG.scale.setScalar(Math.max(.001,this.shell));const _=this.flash>0?.5:0;this.dark.emissive.setRGB(_,_*.4,_),this.dark2.emissive.setRGB(_,_*.4,_);const m=.8+Math.sin(this.t*4)*.2;if(this.cmd.material.color.setScalar(this.phase>=3?1.2*m+.2:.55),this.devourT-=t,this.devourT<=0){this.devourT=.35;const v=3.4*r,P=Math.floor(this.pos.x),T=Math.floor(this.pos.y+.8*r),A=Math.floor(this.pos.z),C=Math.ceil(v);let M=0;for(let x=-C;x<=C&&M<150;x++)for(let R=-C;R<=C;R++)for(let D=-C;D<=C;D++){if(x*x+R*R+D*D>v*v)continue;const U=n.getBlock(P+x,T+R,A+D);U&&U!==V.BEDROCK&&Math.random()<.7&&(n.setBlock(P+x,T+R,A+D,0),M++)}M>6&&this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.25,.1,.35],6,4)}this.beamT-=t,this.beamT<=0&&(this.beamOn=!this.beamOn,this.beamT=this.beamOn?Iv[s]:Uv[s],this.beamOn&&this.h.sound("roar",.6));const d=new L(this.pos.x-e.pos.x,this.pos.y+1-(e.pos.y+1),this.pos.z-e.pos.z),b=d.length(),y=this.beamOn&&b<48&&!e.dead;if(this.beam.visible=y,y){const v=d.clone().normalize();e.push.x=v.x*su[s],e.push.z=v.z*su[s],e.push.y=v.y*11;const P=this.headWorld(0),T=new L(e.pos.x,e.pos.y+1,e.pos.z),A=P.distanceTo(T);this.beam.scale.set(1+Math.sin(this.t*30)*.3,A,1+Math.sin(this.t*30)*.3),this.beam.position.copy(P).add(T).multiplyScalar(.5),this.beam.quaternion.setFromUnitVectors(new L(0,1,0),T.clone().sub(P).normalize()),this.beamHurtT-=t,b<5.5*r&&this.beamHurtT<=0&&(this.beamHurtT=.5,this.h.hurtPlayer(2,0,0))}if(this.meleeT-=t,b<6.5*r&&this.meleeT<=0&&!e.dead&&(this.meleeT=1.3,this.h.hurtPlayer(5,-d.x/b*6,-d.z/b*6)),this.atkT-=t,this.atkT<=0&&!e.dead){this.atkT=Lv[s];for(let v=0;v<Dv[s];v++)this.shoot(e,v)}for(let v=this.skulls.length-1;v>=0;v--){const P=this.skulls[v];P.life-=t,P.mesh.position.addScaledVector(P.vel,t),P.mesh.rotation.x+=t*4,P.mesh.rotation.y+=t*3;const T=P.mesh.position;(Math.hypot(T.x-e.pos.x,T.y-(e.pos.y+.9),T.z-e.pos.z)<1.4||P.life<=0||n.isSolid(Math.floor(T.x),Math.floor(T.y),Math.floor(T.z)))&&(this.h.explode(T.x,T.y,T.z,2.2+.4*this.phase,.5),this.scene.remove(P.mesh),this.skulls.splice(v,1))}this.phase>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=this.phase===2?14:10,this.h.minions()<5&&this.h.spawnMinion()))}shoot(t,e){const n=this.headWorld(e),r=new L(t.pos.x+t.vel.x*.5,t.pos.y+1,t.pos.z+t.vel.z*.5).sub(n).normalize();r.x+=De(-.06,.06)*(e+1),r.y+=De(-.04,.04),r.z+=De(-.06,.06)*(e+1),r.normalize();const a=new Ut(this.skullGeo,this.skullMat);a.position.copy(n),this.scene.add(a),this.skulls.push({mesh:a,vel:r.multiplyScalar(16),life:7}),this.h.sound("shoot",1)}}const sn=(i,t)=>i+Math.random()*(t-i),Ie=(i=0,t=0,e=0)=>new L(i,t,e),Jn=i=>Math.atan2(Math.sin(i),Math.cos(i));class Ti{constructor(t,e,n,s){this.scene=t,this.h=e,this.pos=n.clone(),Object.assign(this,s),this.hp=this.maxHp,this.phase=1,this.t=0,this.yaw=0,this.flash=0,this.dead=!1,this.scale=s.scale||1,this.root=new we,this.body=new we,this.root.add(this.body),this.flashMats=[],this.proj=[],this.clouds=[],this.extra=[],t.add(this.root),this.root.position.copy(n),this.root.scale.setScalar(this.scale)}mat(t,e=0,n=!1){if(n)return new Pe({color:t});const s=new zn({color:t,emissive:e});return this.flashMats.push(s),s}box(t,e,n,s,r,a,o,l=this.body){const c=new Ut(new oe(t,e,n),s);return c.position.set(r,a,o),l.add(c),c}group(t,e,n,s=this.body){const r=new we;return r.position.set(t,e,n),s.add(r),r}world(t){const e=Ie();return t.getWorldPosition(e),e}raycast(t,e,n){const s=this.hitbox,r=this.scale,a=this.pos,o=Mr(t,e,{x:a.x-s.hx*r,y:a.y+(s.oy-s.hy)*r,z:a.z-s.hz*r},{x:a.x+s.hx*r,y:a.y+(s.oy+s.hy)*r,z:a.z+s.hz*r});let l=o>=0&&o<=n?{dist:o,crit:!1}:null;for(const c of this.targets||[]){const h=c.pos,u=c.half,f=Mr(t,e,{x:h.x-u,y:h.y-u,z:h.z-u},{x:h.x+u,y:h.y+u,z:h.z+u});f>=0&&f<=n&&(!l||f<l.dist)&&(l={dist:f,crit:!1,target:c})}return l}damageMul(){return 1}hit(t,e,n){if(this.dead)return;if(n&&n.target&&n.target.onHit){n.target.onHit();return}if(this.hp-=t*this.damageMul(),this.flash=.15,this.h.burst(this.pos.x+sn(-1,1),this.pos.y+this.hitbox.oy*this.scale+sn(-1,1),this.pos.z+sn(-1,1),this.burstColor||[.6,.2,.8],8,4),this.hp<=0)return this.die();const s=this.phaseFor(this.hp/this.maxHp);s>this.phase&&(this.phase=s,this.onPhase(s)),this.onHit&&this.onHit()}phaseFor(){return 1}onPhase(){}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z,5,.2),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y+1,this.pos.z,this.type),this.h.toast(`¡Has derrotado a ${this.name}!`),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.proj)this.scene.remove(t.mesh);for(const t of this.extra)this.scene.remove(t);this.proj=[]}shootProj(t,e,n={}){const s=n.size||.9,r=new Ut(new oe(s,s,s),new zn({color:n.color||2102576,emissive:n.emissive||5906576}));r.position.copy(t),this.scene.add(r),this.proj.push({mesh:r,vel:e.clone().normalize().multiplyScalar(n.speed||16),life:n.life||7,o:n}),this.h.sound("shoot",1)}updateProj(t,e,n){for(let s=this.proj.length-1;s>=0;s--){const r=this.proj[s],a=r.o;r.life-=t,r.mesh.position.addScaledVector(r.vel,t),r.mesh.rotation.x+=t*4,r.mesh.rotation.y+=t*3;const o=r.mesh.position;if(r.reflected){const c=Ie(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z);if(o.distanceTo(c)<(this.hitbox.hx+.8)*this.scale||r.life<=0){if(this.h.explode(o.x,o.y,o.z,2,0),this.h.burst(o.x,o.y,o.z,[1,.6,.2],24,6),this.scene.remove(r.mesh),this.proj.splice(s,1),o.distanceTo(c)<(this.hitbox.hx+.8)*this.scale&&(this.h.toast("¡Rebotada! Gran golpe"),this.hit(r.o.reflectDmg||70,!0),this.dead))return;continue}continue}(Math.hypot(o.x-e.pos.x,o.y-(e.pos.y+.9),o.z-e.pos.z)<1.4||r.life<=0||n.isSolid(Math.floor(o.x),Math.floor(o.y),Math.floor(o.z)))&&(this.h.explode(o.x,o.y,o.z,a.radius||2.2,a.ds||.5),a.effect&&Math.hypot(o.x-e.pos.x,o.y-e.pos.y,o.z-e.pos.z)<(a.radius||2.2)*1.8&&this.h.effect(a.effect[0],a.effect[1]),a.cloud&&this.clouds.push({x:o.x,y:o.y,z:o.z,t:4,tick:0}),this.scene.remove(r.mesh),this.proj.splice(s,1))}for(let s=this.clouds.length-1;s>=0;s--){const r=this.clouds[s];r.t-=t,r.tick-=t,r.tick<=0&&(r.tick=.45,this.h.burst(r.x+sn(-2,2),r.y+sn(0,1.5),r.z+sn(-2,2),[.8,.3,.9],5,1.2),Math.hypot(r.x-e.pos.x,r.z-e.pos.z)<3.3&&Math.abs(r.y-e.pos.y)<3&&!e.dead&&this.h.hurtPlayer(2,0,0)),r.t<=0&&this.clouds.splice(s,1)}}applyFlash(){const t=this.flash>0?.5:0;for(const e of this.flashMats)e.userData.baseE===void 0&&(e.userData.baseE=e.emissive.clone());for(const e of this.flashMats)e.emissive.copy(e.userData.baseE).addScalar(t)}update(t,e,n){this.dead||(this.t+=t,this.flash=Math.max(0,this.flash-t),this.tick(t,e,n),this.updateProj(t,e,n),this.applyFlash())}}class Fv extends Ti{constructor(t,e,n){super(t,e,n,{name:"ENDER DRAGON",type:"dragon",maxHp:300,hitbox:{hx:4.5,hy:2.4,hz:5,oy:.5},scale:1.4,burstColor:[.7,.2,.9]}),this.center=n.clone(),this.theta=Math.random()*6,this.state="circle",this.diveT=12,this.fireT=4,this.breath=0,this.diveTime=0,this.diveTarget=Ie();const s=this.mat(1380378),r=this.mat(2365998),a=this.mat(14696703,14696703,!0);this.box(2.4,2,6,s,0,0,0);for(let o=0;o<6;o++)this.box(.4,.8,.5,r,0,1.3,-2.4+o*.95);this.neck=[];for(let o=0;o<3;o++)this.neck.push(this.box(1.3-o*.1,1.3-o*.1,1.5,r,0,.3+o*.35,3.3+o*1.3));this.head=this.group(0,1.6,7.3),this.box(2,1.3,2.2,s,0,0,0,this.head),this.box(1.2,.7,1.6,r,0,-.15,1.6,this.head),this.jaw=this.group(0,-.6,.4,this.head),this.box(1.5,.35,2.2,s,0,0,.9,this.jaw);for(const o of[-.7,.7])this.box(.5,.25,.1,a,o,.2,1.1,this.head),this.box(.25,.8,.3,r,o*1.2,.9,-.4,this.head).rotation.z=o*.4;this.wings=[];for(const o of[-1,1]){const l=this.group(o*1.2,.8,.5);this.box(5,.22,2.4,r,o*2.5,0,0,l);const c=this.group(o*5,0,0,l);this.box(5,.16,2,s,o*2.5,0,.4,c),this.box(.15,.15,3.4,r,o*2.5,.12,.4,c),this.wings.push({w:l,o:c,sx:o})}this.tail=[];for(let o=0;o<8;o++)this.tail.push(this.box(1.5-o*.14,1.2-o*.1,1.6,o%2?s:r,0,0,-3.6-o*1.5));for(const[o,l]of[[-1,1.8],[1,1.8],[-1,-1.8],[1,-1.8]])this.box(.6,1.4,.6,r,o,-1.4,l);this.crystals=[];for(let o=0;o<4;o++){const l=o/4*Math.PI*2+.4,c=new we,h=new Pe({color:16736464}),u=new Ut(new oe(1.3,1.3,1.3),h),f=new Ut(new oe(1.3,1.3,1.3),new Pe({color:16765168}));f.rotation.set(.7,.7,0),f.scale.setScalar(.7),c.add(u,f);const p=new Ut(new rs(.07,.07,1,5),new Pe({color:16744672,transparent:!0,opacity:.6,fog:!1}));c.position.set(n.x+Math.cos(l)*14,n.y-6+3,n.z+Math.sin(l)*14),t.add(c,p),this.extra.push(c,p),this.crystals.push({g:c,beam:p,alive:!0})}this.h.toast("¡Destruye los 4 cristales para poder dañar al Dragón!")}aliveCrystals(){return this.crystals.filter(t=>t.alive).length}damageMul(){return this.aliveCrystals()?.25:1}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Dragón entra en furia!"),this.diveT=3}raycast(t,e,n){let s=super.raycast(t,e,n);return this.crystals.forEach((r,a)=>{if(!r.alive)return;const o=r.g.position,l=Mr(t,e,{x:o.x-1,y:o.y-1,z:o.z-1},{x:o.x+1,y:o.y+1,z:o.z+1});l>=0&&l<=n&&(!s||l<s.dist)&&(s={dist:l,crit:!1,crystal:a})}),s}hit(t,e,n){if(n&&n.crystal!==void 0){const s=this.crystals[n.crystal];if(!s.alive)return;s.alive=!1,this.scene.remove(s.g,s.beam),this.h.explode(s.g.position.x,s.g.position.y,s.g.position.z,2.2,.35),this.h.burst(s.g.position.x,s.g.position.y,s.g.position.z,[1,.4,.8],24,6),this.h.toast(this.aliveCrystals()?`Cristal destruido (${this.aliveCrystals()} restantes)`:"¡Cristales destruidos! Ahora es vulnerable");return}super.hit(t,e,n)}tick(t,e,n){const s=this.phase;this.center.x+=(e.pos.x-this.center.x)*t*.1,this.center.z+=(e.pos.z-this.center.z)*t*.1;const r=this.aliveCrystals();r&&(this.hp=Math.min(this.maxHp,this.hp+t*2*r));const a=this.pos.clone();if(this.state==="circle"){this.theta+=t*(.32+.1*s);const c=24,h=this.center.x+Math.cos(this.theta)*c,u=this.center.z+Math.sin(this.theta)*c,f=Math.max(e.pos.y+12,this.center.y)+Math.sin(this.t*.9)*2,p=Math.min(1,t*1.6);if(this.pos.x+=(h-this.pos.x)*p,this.pos.z+=(u-this.pos.z)*p,this.pos.y+=(f-this.pos.y)*p,this.diveT-=t,this.fireT-=t,this.diveT<=0&&!e.dead&&(this.state="dive",this.diveTime=0,this.diveTarget.set(e.pos.x,e.pos.y+1,e.pos.z),this.diveT=s===1?13:8,this.h.sound("roar",.7)),this.fireT<=0&&!e.dead){this.fireT=s===1?5:3;const g=this.world(this.head);this.shootProj(g,Ie(e.pos.x,e.pos.y+1,e.pos.z).sub(g),{speed:17,size:1.1,color:4198496,emissive:12595440,radius:2.6,ds:.55,cloud:!0})}}else if(this.state==="dive"){this.diveTime+=t;const c=this.diveTarget.clone().sub(this.pos),h=c.length();this.pos.addScaledVector(c.normalize(),28*t),Math.hypot(this.pos.x-e.pos.x,this.pos.y-(e.pos.y+1),this.pos.z-e.pos.z)<4.2&&!e.dead&&!this.hitDive&&(this.hitDive=!0,this.h.hurtPlayer(9,c.x*8,c.z*8)),(h<3||this.diveTime>3)&&(this.state="circle",this.hitDive=!1)}const o=this.pos.clone().sub(a);o.lengthSq()>1e-5&&(this.yaw+=Jn(Math.atan2(o.x,o.z)-this.yaw)*Math.min(1,t*3)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=this.state==="dive"?0:-Jn(Math.atan2(o.x,o.z)-this.yaw)*.5,this.root.rotation.x=this.state==="dive"?.5:0;const l=Math.sin(this.t*(this.state==="dive"?7:3.2));for(const c of this.wings)c.w.rotation.z=c.sx*l*.6,c.o.rotation.z=c.sx*l*.45;this.tail.forEach((c,h)=>{c.position.x=Math.sin(this.t*2-h*.6)*h*.35,c.position.y=Math.sin(this.t*1.5-h*.5)*h*.12}),this.jaw.rotation.x=.1+(this.state==="dive"?.5:.18+Math.sin(this.t*2)*.12);for(const c of this.crystals)if(c.alive){c.g.rotation.y+=t*1.2,c.g.position.y+=Math.sin(this.t*2+c.g.position.x)*t*.4;const h=c.g.position,u=this.pos.clone().setY(this.pos.y+1),f=h.distanceTo(u);c.beam.scale.set(1,f,1),c.beam.position.copy(h).add(u).multiplyScalar(.5),c.beam.quaternion.setFromUnitVectors(Ie(0,1,0),u.clone().sub(h).normalize()),c.beam.visible=this.hp<this.maxHp}else c.beam.visible=!1}}class zv extends Ti{constructor(t,e,n){super(t,e,n,{name:"WITHER",type:"wither",maxHp:300,hitbox:{hx:2.2,hy:2.8,hz:2.2,oy:1},scale:1.6,burstColor:[.2,.2,.25]}),this.fireT=2.5,this.minionT=12,this.noBreak=0;const s=this.mat(1447450),r=this.mat(3816e3),a=this.mat(15266047,0,!0);this.box(.45,3,.45,r,0,0,0);for(let l=0;l<3;l++)this.box(2.6-l*.4,.2,.35,r,0,.9-l*.55,0);this.box(.5,1.2,.5,s,0,-1.9,-.5).rotation.x=.3,this.heads=[];const o=(l,c,h,u)=>{const f=this.group(c,h,u);this.box(l,l,l,s,0,0,0,f);for(const p of[-1,1])this.box(l*.22,l*.16,.1,a,p*l*.22,l*.1,l/2+.03,f);this.box(l*.5,l*.14,.1,a,0,-l*.25,l/2+.03,f),this.heads.push(f)};o(1.3,0,2.1,0),o(1,-1.35,1.7,.1),o(1,1.35,1.7,.1),this.aura=new Ut(new oe(3.6,4.8,3.6),new Pe({color:8433919,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.aura.position.y=.6,this.body.add(this.aura),this.h.explode(n.x,n.y,n.z,4,.25),this.h.toast("¡El Wither ha despertado!")}phaseFor(t){return t>.5?1:2}damageMul(){return this.phase===2?.6:1}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Wither está acorazado! Te perseguirá de cerca"),this.aura.material.opacity=.28,this.fireT=1}onHit(){if(this.t-this.noBreak<.6)return;this.noBreak=this.t;const t=this.scale,e=Math.floor(this.pos.x),n=Math.floor(this.pos.y+t),s=Math.floor(this.pos.z);for(let r=-3;r<=3;r++)for(let a=-2;a<=4;a++)for(let o=-3;o<=3;o++){const l=this.h.world().getBlock(e+r,n+a,s+o);l&&l!==V.BEDROCK&&Math.random()<.6&&this.h.world().setBlock(e+r,n+a,s+o,0)}}tick(t,e){const n=this.phase,s=e.pos.x,r=e.pos.z,a=s-this.pos.x,o=r-this.pos.z,l=Math.hypot(a,o)||1,c=n===1?16:7,h=n===1?4.5:7;if(l>c+1?(this.pos.x+=a/l*h*t,this.pos.z+=o/l*h*t):l<c-3&&(this.pos.x-=a/l*h*.7*t,this.pos.z-=o/l*h*.7*t),this.pos.y+=(e.pos.y+(n===1?7:3.5)-this.pos.y)*Math.min(1,t*.9),this.yaw+=Jn(Math.atan2(a,o)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.3)*.5,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((u,f)=>{u.rotation.y=Math.sin(this.t*1.1+f*2)*.35,u.rotation.x=Math.sin(this.t*.9+f)*.1}),this.fireT-=t,this.fireT<=0&&!e.dead){this.fireT=n===1?2.3:1.6;const u=n===1?1:3;for(let f=0;f<u;f++){const p=this.world(this.heads[f%3]),g=Ie(e.pos.x+e.vel.x*.4,e.pos.y+1,e.pos.z+e.vel.z*.4),_=g.sub(p).normalize();_.x+=sn(-.05,.05)*f,_.z+=sn(-.05,.05)*f,this.shootProj(p,_,{speed:15,size:n===1?.8:1,color:n===1?1118484:2109536,emissive:n===1?3158080:4223231,radius:n===1?1.9:2.3,ds:.4,effect:["poison",6]})}}n===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<5&&this.h.spawnMinion("skeleton")))}}class Bv extends Ti{constructor(t,e,n){super(t,e,n,{name:"WARDEN",type:"warden",maxHp:360,hitbox:{hx:.9,hy:1.6,hz:.9,oy:1.6},scale:1.25,burstColor:[.1,.6,.6]}),this.vel=Ie(),this.hw=.55*1.25,this.hh=3.4,this.hwb=.7,this.pos.copy(n),this.state="emerge",this.emerge=2.4,this.boomT=3,this.charge=0,this.meleeT=0,this.angry=!1,this.walk=0;const s=this.mat(862768),r=this.mat(1325634),a=this.mat(3926216,0,!0);this.legL=this.leg(-.4,s),this.legR=this.leg(.4,s),this.box(1.5,1.5,.9,r,0,2.15,0),this.chest=this.box(.7,.6,.12,a,0,2.2,.48);for(const o of[1.75,2,2.45])this.box(1.55,.1,.95,s,0,o,0);this.armL=this.arm(-1.1,r),this.armR=this.arm(1.1,r),this.head=this.group(0,3.25,.05),this.box(1.5,1,.95,r,0,0,0,this.head);for(const o of[-1,1])this.box(.18,.9,.18,s,o*.5,.85,-.1,this.head).rotation.z=-o*.35,this.box(.6,.55,.12,a,o*.95,.15,-.1,this.head);this.box(.9,.12,.1,a,0,-.1,.5,this.head),this.boomBeam=new Ut(new rs(.5,.5,1,8),new Pe({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.boomBeam),this.extra.push(this.boomBeam),this.h.toast("El Warden emerge de la oscuridad…"),this.h.sound("roar",1)}leg(t,e){const n=this.group(t,1.5,0);return this.box(.7,1.5,.75,e,0,-.75,0,n),n}arm(t,e){const n=this.group(t,2.8,0);return this.box(.7,2.6,.7,e,0,-1.3,0,n),n}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Warden ruge enfurecido!"),this.boomT=1}damageMul(){return this.state==="emerge"?0:1}tick(t,e,n){const s=this.phase;if(this.state==="emerge"){this.emerge-=t,this.root.position.set(this.pos.x,this.pos.y-Math.max(0,this.emerge)*1.2,this.pos.z),this.h.darkness(.6),this.emerge<=0&&(this.state="hunt");return}const r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,o=Math.hypot(r,a)||1,l=e.pos.y-this.pos.y;this.yaw+=Jn(Math.atan2(r,a)-this.yaw)*Math.min(1,t*5);const c=this.charge>0?.4:s===1?3.4:5;this.vel.x+=(r/o*c-this.vel.x)*Math.min(1,t*6),this.vel.z+=(a/o*c-this.vel.z)*Math.min(1,t*6),o<2.2&&(this.vel.x*=.2,this.vel.z*=.2);const h={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},u=qs(n,h,t);(u.hitX||u.hitZ)&&u.onGround&&(this.vel.y=9),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.2,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;const f=Math.sin(this.walk)*.55;this.legL.rotation.x=f,this.legR.rotation.x=-f,this.armL.rotation.x=-f*.7,this.armR.rotation.x=f*.7,this.head.rotation.x=Math.sin(this.t*2)*.05,this.chest.scale.setScalar(1+(this.charge>0?.6+Math.sin(this.t*25)*.3:Math.sin(this.t*4)*.1)),this.meleeT-=t,o<3.8&&Math.abs(l)<3&&this.meleeT<=0&&!e.dead&&this.charge<=0&&(this.meleeT=1.5,this.armR.rotation.x=-2,this.h.hurtPlayer(s===1?12:15,r/o*9,a/o*9),this.h.sound("hit",1)),this.boomT-=t,this.charge>0?(this.charge-=t,this.h.sound("hiss",.4),this.charge<=0&&this.sonicBoom(e,n)):this.boomT<=0&&o>4.5&&o<30&&!e.dead&&(this.charge=1.5,this.boomT=s===1?5:3.2,this.h.sound("roar",.5)),this.boomBeam.material.opacity=Math.max(0,this.boomBeam.material.opacity-t*3),this.h.darkness(o<28?.35+.15*Math.sin(this.t*3):0)}sonicBoom(t,e){const n=this.pos.clone().setY(this.pos.y+2.6*this.scale),s=Ie(t.pos.x,t.pos.y+1,t.pos.z),r=s.clone().sub(n),a=r.length();r.normalize(),this.boomBeam.material.opacity=.85,this.boomBeam.scale.set(1,a,1),this.boomBeam.position.copy(n).add(s).multiplyScalar(.5),this.boomBeam.quaternion.setFromUnitVectors(Ie(0,1,0),r),this.h.sound("explode",.8),e.raycast(n,r,a)||this.h.hurtPlayer(this.phase===1?12:15,r.x*8,r.z*8),this.h.burst(t.pos.x,t.pos.y+1,t.pos.z,[.4,1,.9],14,5)}dispose(){this.h.darkness(0),super.dispose()}}class kv extends Ti{constructor(t,e,n){super(t,e,n,{name:"GUARDIÁN ANCESTRAL",type:"guardian",maxHp:240,hitbox:{hx:1.8,hy:1.8,hz:1.8,oy:0},scale:2.4,burstColor:[.3,.9,.8]}),this.laserT=4,this.charge=0,this.beam=null,this.thorns=0;const s=this.mat(8032114),r=this.mat(6189912),a=this.mat(14715472),o=this.mat(6353120,0,!0);this.box(1.5,1.5,1.5,s,0,0,0);for(let c=0;c<6;c++)this.box(.4,.4,.05,a,sn(-.6,.6),sn(-.6,.6),-.78);this.spikes=[];const l=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,-1]];for(const[c,h,u]of l)for(let f=0;f<3;f++){const p=this.group(c*.75+(c?0:sn(-.5,.5)),h*.75+(h?0:sn(-.5,.5)),u*.75+(u?0:sn(-.5,.5)));p.lookAt(p.position.clone().add(Ie(c,h,u))),this.box(.14,.14,.9,r,0,0,.45,p),this.box(.1,.1,.2,o,0,0,.95,p),this.spikes.push(p)}this.eye=this.group(0,0,.78),this.box(.95,.95,.12,this.mat(15790304),0,0,0,this.eye),this.iris=this.box(.5,.5,.14,this.mat(13119520,5244936),0,0,.04,this.eye),this.box(.18,.18,.16,this.mat(1050632),0,0,.06,this.eye),this.box(.5,.5,.9,r,0,0,-1.1).scale.set(1,.6,1),this.laser=new Ut(new rs(.1,.1,1,6),new Pe({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Guardián Ancestral te observa… ¡cuidado con su láser!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Guardián se enfurece! Su láser es más rápido")}onHit(){const t=this.h.player();t&&Math.hypot(t.pos.x-this.pos.x,t.pos.z-this.pos.z)<7.5&&!t.dead&&this.h.hurtPlayer(2,0,0)}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,o=Math.hypot(r,a)||1;if(this.charge<=0){const p=s===1?14:11,g=s===1?3:4.4;o>p+1?(this.pos.x+=r/o*g*t,this.pos.z+=a/o*g*t):o<p-3&&(this.pos.x-=r/o*g*.7*t,this.pos.z-=a/o*g*.7*t),this.pos.y+=(e.pos.y+4-this.pos.y)*Math.min(1,t*.8)}this.yaw+=Jn(Math.atan2(r,a)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw;const l=1+Math.sin(this.t*1.6)*.12+(this.charge>0?.35:0);this.spikes.forEach(p=>p.scale.setScalar(l)),this.iris.scale.setScalar(this.charge>0?1.5+Math.sin(this.t*30)*.2:1),this.laserT-=t;const c=this.world(this.eye),h=Ie(e.pos.x,e.pos.y+1,e.pos.z),u=h.clone().sub(c),f=u.length();if(u.normalize(),this.charge>0){const p=s===1?2.6:1.7,g=1-this.charge/p;this.charge-=t,this.laser.material.opacity=.25+g*.6,this.laser.scale.set(.5+g*3.2,f,.5+g*3.2),this.laser.position.copy(c).add(h).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(Ie(0,1,0),u),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.6),!n.raycast(c,u,f)&&!e.dead&&(this.h.hurtPlayer(9,u.x*3,u.z*3),this.h.effect("fatigue",25),this.h.toast("¡Fatiga de minería!")),this.laserT=s===1?6:3.5)}else this.laser.material.opacity=0,this.laserT<=0&&f<40&&!e.dead&&(this.charge=s===1?2.6:1.7,this.h.sound("hiss",.6))}}class Hv extends Ti{constructor(t,e,n){super(t,e,n,{name:"DEVASTADOR",type:"ravager",maxHp:280,hitbox:{hx:1.4,hy:1.5,hz:1.9,oy:1.4},scale:1.5,burstColor:[.5,.4,.3]}),this.vel=Ie(),this.state="stalk",this.timer=4,this.dirx=0,this.dirz=1,this.hitDone=!1,this.walk=0,this.stunMul=1;const s=this.mat(4867392),r=this.mat(6182478),a=this.mat(14210244),o=this.mat(11542560,3147784);this.box(2.2,1.7,3.1,s,0,1.9,0),this.box(1.6,.9,1.6,r,0,3,-.6),this.neck=this.group(0,2.3,1.4),this.box(1,1,1.2,r,0,.1,.4,this.neck),this.head=this.group(0,.2,1.2,this.neck),this.box(1.7,1.45,1.6,s,0,0,.5,this.head);for(const l of[-1,1])this.box(.25,1,.25,a,l*.7,1,.2,this.head).rotation.z=-l*.3,this.box(.2,.6,.2,a,l*.55,-.55,1.2,this.head),this.box(.3,.2,.1,o,l*.45,.2,1.32,this.head);this.legs=[[-.8,1.2],[.8,1.2],[-.8,-1.2],[.8,-1.2]].map(([l,c])=>{const h=this.group(l,1.2,c);return this.box(.8,1.2,.8,r,0,-.6,0,h),h}),this.hw=1.2,this.hh=3.2,this.h.toast("¡El Devastador ruge! Esquiva sus embestidas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Devastador se enfurece!"),this.timer=1}damageMul(){return this.state==="stun"?1.7:1}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,o=Math.hypot(r,a)||1;this.timer-=t;let l=0;if(this.state==="stalk")l=s===1?3.6:4.8,this.yaw+=Jn(Math.atan2(r,a)-this.yaw)*Math.min(1,t*4),this.timer<=0&&!e.dead&&o<40&&(this.state="windup",this.timer=1,this.h.sound("roar",.9));else if(this.state==="windup")this.yaw+=Jn(Math.atan2(r,a)-this.yaw)*Math.min(1,t*6),this.neck.rotation.x=-.6*Math.min(1,(1-this.timer)*2),this.timer<=0&&(this.state="charge",this.timer=1.9,this.hitDone=!1,this.dirx=r/o,this.dirz=a/o,this.yaw=Math.atan2(this.dirx,this.dirz),o<9&&!e.dead&&this.h.hurtPlayer(4,this.dirx*10,this.dirz*10));else if(this.state==="charge"){l=15,this.vel.x=this.dirx*l,this.vel.z=this.dirz*l,this.neck.rotation.x=.5,o<3.4&&!this.hitDone&&!e.dead&&Math.abs(e.pos.y-this.pos.y)<3.5&&(this.hitDone=!0,this.h.hurtPlayer(11,this.dirx*12,this.dirz*12));const f=Math.floor(this.pos.x+this.dirx*2.2),p=Math.floor(this.pos.z+this.dirz*2.2),g=Math.floor(this.pos.y);for(let _=-1;_<=1;_++)for(let m=-1;m<=1;m++)for(let d=0;d<3;d++){const b=n.getBlock(f+_,g+d,p+m);b&&b!==V.BEDROCK&&b!==V.STONE&&b!==V.COBBLE&&n.setBlock(f+_,g+d,p+m,0)}this.timer<=0&&(this.state="stun",this.timer=2.2,this.h.sound("hit",1),this.h.burst(this.pos.x,this.pos.y+2,this.pos.z,[.8,.8,.3],14,4))}else this.state==="stun"&&(this.neck.rotation.x=.9,this.timer<=0&&(this.state="stalk",this.timer=s===1?5:3,this.neck.rotation.x=0));this.state!=="charge"&&(this.vel.x+=(r/o*l-this.vel.x)*Math.min(1,t*5),this.vel.z+=(a/o*l-this.vel.z)*Math.min(1,t*5)),(this.state==="stun"||this.state==="windup")&&(this.vel.x*=.85,this.vel.z*=.85);const c={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},h=qs(n,c,t);(h.hitX||h.hitZ)&&h.onGround&&this.state!=="stun"&&(this.vel.y=10),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*1.6;const u=Math.sin(this.walk)*.5;this.legs.forEach((f,p)=>f.rotation.x=p%2?-u:u),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class Gv extends Ti{constructor(t,e,n){super(t,e,n,{name:"INVOCADOR",type:"evoker",maxHp:220,hitbox:{hx:.9,hy:1.4,hz:.9,oy:1.6},scale:1.7,burstColor:[.9,.8,.2]}),this.fangT=3,this.vexT=7,this.tpT=6,this.vex=[],this.fangs=[],this.targets=[];const s=this.mat(7105648),r=this.mat(14202928),a=this.mat(14264458),o=this.mat(3158068);this.box(.95,1.6,.65,s,0,1,0),this.box(1,.18,.7,r,0,.25,0),this.box(.98,.14,.68,r,0,1,0),this.head=this.group(0,2.05,0),this.box(.55,.65,.55,a,0,.15,0,this.head),this.box(.14,.28,.16,a,0,.05,.34,this.head);for(const l of[-1,1])this.box(.16,.08,.04,this.mat(16777215,0,!0),l*.14,.25,.28,this.head),this.box(.2,.05,.05,o,l*.14,.34,.28,this.head);this.arms=this.box(1,.3,.45,s,0,1.5,.4),this.armL=this.group(-.62,1.7,.1),this.armR=this.group(.62,1.7,.1);for(const l of[this.armL,this.armR])this.box(.28,.9,.28,s,0,-.45,0,l);this.arms.visible=!0,this.h.toast("El Invocador alza los brazos… ¡cuidado con los colmillos y los vex!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Invocador desata un círculo de colmillos!"),this.fangT=1}raycast(t,e,n){return this.targets=this.vex.map(s=>({pos:s.pos,half:.7,onHit:()=>this.killVex(s)})),super.raycast(t,e,n)}killVex(t){this.h.burst(t.pos.x,t.pos.y,t.pos.z,[.5,.7,1],14,4),this.h.sound("hit",1),this.scene.remove(t.mesh),this.vex.splice(this.vex.indexOf(t),1)}spawnFang(t,e,n,s,r){const a=s.topY(Math.floor(t),Math.floor(e));if(a<0)return;const o=new we,l=new zn({color:15788224,emissive:4208664});for(let c=0;c<3;c++){const h=new Ut(new oe(.5-c*.14,.7,.5-c*.14),l);h.position.y=.35+c*.6,o.add(h)}o.position.set(t,a+1,e),o.scale.y=.01,o.visible=!1,this.scene.add(o),this.fangs.push({x:t,z:e,y:a+1,g:o,t:-n,hit:!1})}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,o=Math.hypot(r,a)||1;this.yaw+=Jn(Math.atan2(r,a)-this.yaw)*Math.min(1,t*5);const l=13;o>l+2?(this.pos.x+=r/o*3.5*t,this.pos.z+=a/o*3.5*t):o<l-4&&(this.pos.x-=r/o*3*t,this.pos.z-=a/o*3*t),this.pos.y+=(e.pos.y+3.2-this.pos.y)*Math.min(1,t*1.2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.7)*.35,this.pos.z),this.root.rotation.y=this.yaw;const c=this.fangT<1||this.vexT<1;if(this.armL.rotation.x=this.armR.rotation.x=c?-2.4+Math.sin(this.t*14)*.2:0,this.arms.visible=!c,this.tpT-=t,this.tpT<=0){this.tpT=s===1?8:5,this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5);const h=Math.random()*Math.PI*2,u=11+Math.random()*4;this.pos.set(e.pos.x+Math.cos(h)*u,e.pos.y+3+Math.random()*2,e.pos.z+Math.sin(h)*u),this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5),this.h.sound("pop",1)}if(this.fangT-=t,this.fangT<=0&&!e.dead){this.fangT=s===1?4.2:3,this.h.sound("shoot",.8);for(let h=1;h<=12;h++)this.spawnFang(this.pos.x+r/o*h*1.4+Math.sin(h)*.2,this.pos.z+a/o*h*1.4,h*.07,n,e);if(s===2)for(let h=0;h<12;h++){const u=h/12*Math.PI*2;this.spawnFang(e.pos.x+Math.cos(u)*3,e.pos.z+Math.sin(u)*3,.9,n,e)}}for(let h=this.fangs.length-1;h>=0;h--){const u=this.fangs[h];u.t+=t,u.t>=0&&(u.g.visible=!0,u.g.scale.y=Math.min(1,u.t*6),!u.hit&&u.t>.12&&Math.hypot(u.x-e.pos.x,u.z-e.pos.z)<1.2&&Math.abs(u.y-e.pos.y)<2.2&&!e.dead&&(u.hit=!0,this.h.hurtPlayer(6,0,0)),u.t>1.1&&(this.scene.remove(u.g),this.fangs.splice(h,1)))}if(this.vexT-=t,this.vexT<=0&&!e.dead){this.vexT=s===1?10:7,this.h.sound("pop",1);const h=s===1?3:5;for(let u=0;u<h;u++){const f=new we,p=new zn({color:9416928,emissive:2109520,transparent:!0,opacity:.85}),g=new Ut(new oe(.5,.7,.5),p),_=new Ut(new oe(.7,.05,.4),p),m=_.clone();_.position.set(-.55,.2,-.1),m.position.set(.55,.2,-.1),f.add(g,_,m);for(const b of[-.1,.1]){const y=new Ut(new oe(.08,.08,.05),new Pe({color:16719904}));y.position.set(b,.15,.27),f.add(y)}const d=Ie(this.pos.x+sn(-2,2),this.pos.y+1+sn(0,2),this.pos.z+sn(-2,2));f.position.copy(d),this.scene.add(f),this.vex.push({mesh:f,pos:d,w1:_,w2:m,life:28,cool:1})}}for(let h=this.vex.length-1;h>=0;h--){const u=this.vex[h];u.life-=t,u.cool-=t;const f=Ie(e.pos.x,e.pos.y+1,e.pos.z).sub(u.pos),p=f.length();u.pos.addScaledVector(f.normalize(),6.2*t),u.pos.y+=Math.sin(this.t*6+h)*t*1.5,u.mesh.position.copy(u.pos),u.mesh.rotation.y=Math.atan2(f.x,f.z),u.w1.rotation.z=Math.sin(this.t*25)*.7,u.w2.rotation.z=-u.w1.rotation.z,p<1.2&&u.cool<=0&&!e.dead&&(u.cool=.9,this.h.hurtPlayer(3,0,0)),u.life<=0&&(this.scene.remove(u.mesh),this.vex.splice(h,1))}}dispose(){for(const t of this.vex)this.scene.remove(t.mesh);for(const t of this.fangs)this.scene.remove(t.g);this.vex=[],this.fangs=[],super.dispose()}}class Vv extends Ti{constructor(t,e,n){super(t,e,n,{name:"GHAST GIGANTE",type:"ghast",maxHp:200,hitbox:{hx:2.2,hy:2.2,hz:2.2,oy:0},scale:1.8,burstColor:[1,1,1]}),this.fireT=3,this.tele=0,this.theta=Math.random()*6,this.targets=[];const s=this.mat(15921906),r=this.mat(14474460),a=this.mat(4208696);this.box(4,4,4,s,0,0,0),this.eyeL=this.box(.9,.25,.1,a,-.9,.2,2.03),this.eyeR=this.box(.9,.25,.1,a,.9,.2,2.03),this.mouth=this.box(.7,.35,.1,a,0,-.9,2.03),this.tents=[];for(const o of[-1.4,0,1.4])for(const l of[-1.4,0,1.4]){const c=2.2+Math.abs(o*l)*.5+(o===0&&l===0?.6:0),h=this.box(.55,c,.55,r,o,-2-c/2,l);this.tents.push({m:h,base:-2-c/2,ph:Math.random()*6})}this.redEye=this.mat(16719904,0,!0),this.h.toast("¡Un Ghast gigante! Golpea sus bolas de fuego para devolvérselas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Ghast llora de rabia y dispara más rápido!")}raycast(t,e,n){return this.targets=this.proj.filter(s=>!s.reflected).map(s=>({pos:s.mesh.position,half:1.25,onHit:()=>this.reflect(s)})),super.raycast(t,e,n)}reflect(t){t.reflected=!0,t.o={...t.o,reflectDmg:70},t.life=6,t.vel=Ie(this.pos.x,this.pos.y,this.pos.z).sub(t.mesh.position).normalize().multiplyScalar(22),this.h.sound("hit",1)}tick(t,e){const n=this.phase;this.theta+=t*(.18+.05*n);const s=22,r=e.pos.x+Math.cos(this.theta)*s,a=e.pos.z+Math.sin(this.theta)*s,o=e.pos.y+11,l=Math.min(1,t*.7);if(this.pos.x+=(r-this.pos.x)*l,this.pos.z+=(a-this.pos.z)*l,this.pos.y+=(o-this.pos.y)*l,this.yaw+=Jn(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t)*.7,this.pos.z),this.root.rotation.y=this.yaw,this.tents.forEach((c,h)=>{c.m.rotation.z=Math.sin(this.t*1.6+c.ph)*.18,c.m.rotation.x=Math.cos(this.t*1.3+c.ph)*.18}),this.fireT-=t,this.fireT<=0&&this.tele<=0&&!e.dead&&(this.tele=1.1,this.h.sound("hiss",.7)),this.tele>0){if(this.tele-=t,this.eyeL.material=this.eyeR.material=this.redEye,this.eyeL.scale.y=this.eyeR.scale.y=2.2,this.mouth.scale.set(1.6,3.4,1),this.tele<=0){this.fireT=n===1?3.6:2.2;const c=Ie(this.pos.x,this.pos.y,this.pos.z),h=Ie(e.pos.x+e.vel.x*.5,e.pos.y+1,e.pos.z+e.vel.z*.5).sub(c);this.shootProj(c,h,{speed:13,size:2,color:16769184,emissive:16736272,radius:3.6,ds:.6,effect:["burn",5],life:9})}}else this.eyeL.material=this.eyeR.material=this.mouth.material,this.eyeL.scale.y=this.eyeR.scale.y=1,this.mouth.scale.set(1,1,1)}}class Wv extends Ti{constructor(t,e,n){super(t,e,n,{name:"HEROBRINE",type:"herobrine",maxHp:400,hitbox:{hx:.5,hy:1,hz:.5,oy:1},scale:1.35,burstColor:[1,1,1]}),this.vel=Ie(),this.hw=.4,this.hh=2.4,this.tpT=5,this.boltT=4,this.walk=0,this.meleeT=0,this.minionT=8;const s=this.mat(14724236),r=this.mat(2794936),a=this.mat(3817372),o=this.mat(16777215,0,!0);this.head=this.group(0,1.5,0),this.box(.5,.5,.5,s,0,.25,0,this.head),this.box(.5,.14,.5,this.mat(3810322),0,.46,0,this.head);for(const l of[-1,1])this.box(.16,.1,.06,o,l*.13,.3,.26,this.head);this.box(.5,.75,.25,r,0,1.125,0),this.legL=this.group(-.125,.75,0),this.box(.25,.75,.25,a,0,-.375,0,this.legL),this.legR=this.group(.125,.75,0),this.box(.25,.75,.25,a,0,-.375,0,this.legR),this.armL=this.group(-.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armL),this.armR=this.group(.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armR),this.aura=new H_(16777215,0,14),this.root.add(this.aura),this.aura.position.y=1.5,this.h.toast("Una figura de ojos blancos te observa…"),this.h.sound("roar",.6)}phaseFor(t){return t>.6?1:t>.25?2:3}onPhase(t){this.h.sound("roar",1),t===2&&(this.h.toast("Las luces se apagan…"),this.tpT=1),t===3&&(this.h.toast("¡HEROBRINE LEVITA! Cuidado con sus rayos"),this.vel.y=6)}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,o=Math.hypot(r,a)||1;this.yaw+=Jn(Math.atan2(r,a)-this.yaw)*Math.min(1,t*6),this.h.darkness(s>=2?.55+Math.sin(this.t*5)*.1:.15);const l=s===1?3.4:4.4;if(s<3){this.vel.x+=(r/o*l*(o>2.4?1:0)-this.vel.x)*Math.min(1,t*6),this.vel.z+=(a/o*l*(o>2.4?1:0)-this.vel.z)*Math.min(1,t*6);const h=qs(n,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t);(h.hitX||h.hitZ)&&h.onGround&&(this.vel.y=9)}else{const h=e.pos.y+5,u=14;this.pos.y+=(h-this.pos.y)*Math.min(1,t*1.5),o>u?(this.pos.x+=r/o*5*t,this.pos.z+=a/o*5*t):o<u-4&&(this.pos.x-=r/o*4*t,this.pos.z-=a/o*4*t)}this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.4;const c=Math.sin(this.walk)*.8;if(this.legL.rotation.x=c,this.legR.rotation.x=-c,this.armL.rotation.x=-c,this.armR.rotation.x=s===3?-1.4:c,this.root.position.set(this.pos.x,this.pos.y+(s===3?Math.sin(this.t*2)*.4:0),this.pos.z),this.root.rotation.y=this.yaw,this.aura.intensity=s>=3?3+Math.sin(this.t*12):0,this.tpT-=t,this.tpT<=0&&!e.dead){this.tpT=s===1?6.5:s===2?4:5,this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5);const h=e.lookDir(),u=Math.hypot(h.x,h.z)||1,f=Math.floor(e.pos.x-h.x/u*4),p=Math.floor(e.pos.z-h.z/u*4),g=n.topY(f,p);s<3&&g>0?(this.pos.set(f+.5,g+1,p+.5),this.vel.set(0,0,0)):this.pos.set(f+.5,e.pos.y+5,p+.5),this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5),this.h.sound("pop",1)}if(this.meleeT-=t,o<2.6&&Math.abs(e.pos.y-this.pos.y)<2.5&&this.meleeT<=0&&!e.dead&&s<3&&(this.meleeT=1.1,this.h.hurtPlayer(s===1?8:11,r/o*7,a/o*7),this.h.sound("hit",1)),this.boltT-=t,this.boltT<=0&&!e.dead){this.boltT=s===1?6:s===2?3.8:2.4;const h=e.pos.x,u=e.pos.z;if(this.h.burst(h,e.pos.y+.5,u,[1,1,.6],18,2),setTimeout(()=>{this.dead||this.h.strikeNear(h,u)},900),s===3){const f=Ie(this.pos.x,this.pos.y+2,this.pos.z),p=Ie(e.pos.x,e.pos.y+1,e.pos.z).sub(f);this.shootProj(f,p,{speed:18,size:.9,color:16777215,emissive:16777215,radius:2.2,ds:.45,effect:["burn",3]})}}s>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=11,this.h.minions()<5&&this.h.spawnMinion("zombie")))}dispose(){this.h.darkness(0),super.dispose()}}class Xv extends Ti{constructor(t,e,n){super(t,e,n,{name:"REY SLIME",type:"slimeking",maxHp:260,hitbox:{hx:2.6,hy:2.6,hz:2.6,oy:2.6},scale:1.4,burstColor:[.4,1,.4]}),this.vel=Ie(),this.hw=3.2,this.hh=5.4,this.jumpT=2.5,this.onGround=!1,this.splitAt=[.75,.5,.25],this.squash=1;const s=new zn({color:6348896,emissive:1064976,transparent:!0,opacity:.72});this.flashMats.push(s);const r=this.mat(3119663,536584);this.slime=this.group(0,0,0),this.box(5,5,5,s,0,2.6,0,this.slime),this.box(2.2,2.2,2.2,r,0,2.6,0,this.slime);const a=this.mat(1060880,0,!0);for(const l of[-1,1])this.box(.7,.7,.2,a,l*1.2,3.1,2.55,this.slime);this.box(1.5,.3,.2,a,0,1.8,2.55,this.slime);const o=this.mat(15777840,3153920);this.box(3.4,.6,3.4,o,0,5.4,0,this.slime);for(const[l,c]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4],[0,1.6],[0,-1.6]])this.box(.5,.9,.5,o,l,6,c,this.slime);this.h.toast("El Rey Slime salta hacia ti. ¡Se divide al perder vida!")}phaseFor(t){return t>.5?1:t>.25?2:3}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Slime salta más rápido!")}onHit(){const t=this.hp/this.maxHp;for(;this.splitAt.length&&t<this.splitAt[0];){this.splitAt.shift();for(let e=0;e<4;e++)this.h.spawnMinion("slime");this.h.toast("¡Se divide en slimes!")}}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,o=Math.hypot(r,a)||1;if(this.yaw+=Jn(Math.atan2(r,a)-this.yaw)*Math.min(1,t*4),this.jumpT-=t,this.onGround&&(this.vel.x*=.8,this.vel.z*=.8,this.jumpT<=0&&!e.dead)){this.jumpT=s===1?2.6:s===2?1.8:1.2;const c=Math.min(o,22)/1.35*.95;this.vel.y=17,this.vel.x=r/o*c,this.vel.z=a/o*c,this.onGround=!1,this.squash=1.4,this.h.sound("pop",1)}const l=qs(n,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t,34);if(l.onGround&&!this.onGround){this.onGround=!0,this.squash=.6,this.h.sound("explode",.7);const c=s===1?8:11,h=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z);this.h.burst(this.pos.x,this.pos.y+.3,this.pos.z,[.4,1,.4],36,8),h<c&&Math.abs(e.pos.y-this.pos.y)<3&&!e.dead&&this.h.hurtPlayer(s===1?8:12,(e.pos.x-this.pos.x)/(h||1)*9,(e.pos.z-this.pos.z)/(h||1)*9);const u=Math.floor(this.pos.x),f=Math.floor(this.pos.z),p=Math.floor(this.pos.y)-1;for(let g=-3;g<=3;g++)for(let _=-3;_<=3;_++)g*g+_*_<=9&&n.getBlock(u+g,p,f+_)&&n.getBlock(u+g,p,f+_)!==V.BEDROCK&&Math.random()<.6&&n.setBlock(u+g,p,f+_,0)}(l.hitX||l.hitZ)&&(this.vel.x*=-.2,this.vel.z*=-.2),this.squash+=(1-this.squash)*Math.min(1,t*8),this.slime.scale.set(1/Math.sqrt(this.squash),this.squash,1/Math.sqrt(this.squash)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,o<3.2&&Math.abs(e.pos.y-this.pos.y)<4&&!e.dead&&(this.contactT=(this.contactT||0)-t)<=0&&(this.contactT=1,this.h.hurtPlayer(5,r/o*6,a/o*6))}}const Rr={storm:{name:"Tormenta Wither",color:"#b060ff",hp:360,desc:"Colosal masa con tres cabezas. Rayo tractor, cráneos explosivos y un bloque de comandos como punto débil.",icon:"🌀"},dragon:{name:"Ender Dragon",color:"#e040ff",hp:300,desc:"Vuela en círculos, pica en picado y lanza aliento. Destruye sus 4 cristales para poder herirlo.",icon:"🐉",make:(i,t,e)=>new Fv(i,t,e),up:16},wither:{name:"Wither",color:"#9aa8c8",hp:300,desc:"Lanza cráneos negros que envenenan. Con poca vida se acoraza y te persigue de cerca.",icon:"💀",make:(i,t,e)=>new zv(i,t,e),up:8},warden:{name:"Warden",color:"#3be8c8",hp:360,desc:"Ciego pero letal. Golpes devastadores y explosión sónica a distancia. Oscurece la pantalla.",icon:"👁",make:(i,t,e)=>new Bv(i,t,e),up:0,ground:!0},guardian:{name:"Guardián Ancestral",color:"#70fff0",hp:240,desc:"Su láser carga y causa fatiga de minería. Sus espinas devuelven daño al golpearlo.",icon:"🐟",make:(i,t,e)=>new kv(i,t,e),up:6}};Object.assign(Rr,{ravager:{name:"Devastador",color:"#b09070",hp:280,desc:"Bestia blindada que ruge y embiste arrasando todo. Tras cada embestida queda aturdido: ¡ataca entonces!",icon:"🐗",make:(i,t,e)=>new Hv(i,t,e),ground:!0,dist:16},evoker:{name:"Invocador",color:"#e0c040",hp:220,desc:"Hechicero que se teletransporta, lanza hileras de colmillos y llama a vex voladores (se pueden golpear).",icon:"🧙",make:(i,t,e)=>new Gv(i,t,e),up:4,dist:14},ghast:{name:"Ghast Gigante",color:"#f4f4f4",hp:200,desc:"Flota llorando y escupe enormes bolas de fuego. ¡Golpéalas para devolvérselas y hacerle un daño brutal!",icon:"👻",make:(i,t,e)=>new Vv(i,t,e),up:14,dist:26},herobrine:{name:"Herobrine",color:"#ffffff",hp:400,desc:"Ojos blancos, teletransportes a tu espalda, rayos y oscuridad. Con poca vida levita. El jefe final.",icon:"👤",make:(i,t,e)=>new Wv(i,t,e),ground:!0,dist:14},slimeking:{name:"Rey Slime",color:"#60e060",hp:260,desc:"Gigantesco, salta y aplasta con ondas expansivas. Se divide en slimes al perder vida.",icon:"🟢",make:(i,t,e)=>new Xv(i,t,e),ground:!0,dist:18}});const qv=["storm","dragon","wither","warden","guardian","ravager","evoker","ghast","herobrine","slimeking"],ws=[{id:"logs",group:"Aprendiz",title:"Primeros pasos",desc:"Recoge 3 troncos",ev:"collect",target:V.LOG,n:3,reward:[[X.APPLE,4]],xp:8},{id:"table",group:"Aprendiz",title:"Carpintero",desc:"Fabrica una mesa de crafteo",ev:"craft",target:V.TABLE,n:1,reward:[[V.PLANKS,16]],xp:8},{id:"pick",group:"Aprendiz",title:"Minero",desc:"Fabrica un pico de piedra",ev:"craft",target:111,n:1,reward:[[X.COAL,8]],xp:10},{id:"torch",group:"Aprendiz",title:"Luz en la oscuridad",desc:"Fabrica 4 antorchas",ev:"craft",target:V.TORCH,n:4,reward:[[X.COAL,8]],xp:10},{id:"iron",group:"Aprendiz",title:"Fundidor",desc:"Consigue un lingote de hierro",ev:"collect",target:X.IRON,n:1,reward:[[X.COAL,16]],xp:15},{id:"diamond",group:"Aprendiz",title:"¡Diamantes!",desc:"Consigue un diamante",ev:"collect",target:X.DIAMOND,n:1,reward:[[X.GOLD,6]],xp:25},{id:"k_zombie",group:"Cazador",title:"Cazador de zombis",desc:"Derrota 3 zombis",ev:"kill",target:"zombie",n:3,reward:[[X.STEAK,4]],xp:15},{id:"k_skeleton",group:"Cazador",title:"Huesos rotos",desc:"Derrota 3 esqueletos",ev:"kill",target:"skeleton",n:3,reward:[[X.STEAK,4]],xp:18},{id:"k_creeper",group:"Cazador",title:"Silencio…",desc:"Derrota 2 creepers",ev:"kill",target:"creeper",n:2,reward:[[X.GOLD,4]],xp:18},{id:"k_spider",group:"Cazador",title:"Aracnofobia",desc:"Derrota 2 arañas",ev:"kill",target:"spider",n:2,reward:[[X.GOLD,4]],xp:16},{id:"pearl",group:"Cazador",title:"Ojos que miran",desc:"Consigue una perla de Ender",ev:"collect",target:X.PEARL,n:1,reward:[[X.DIAMOND,3]],xp:30},{id:"b_storm",group:"Jefes",title:"Domador de la tormenta",desc:"Derrota a la Tormenta Wither",ev:"boss",target:"storm",n:1,reward:[[X.STAR,1],[X.DIAMOND,8]],xp:150},{id:"b_dragon",group:"Jefes",title:"¿El final?",desc:"Derrota al Ender Dragon",ev:"boss",target:"dragon",n:1,reward:[[X.STAR,1],[X.DIAMOND,8]],xp:150},{id:"b_wither",group:"Jefes",title:"Más allá de los huesos",desc:"Derrota al Wither",ev:"boss",target:"wither",n:1,reward:[[X.STAR,1],[X.DIAMOND,8]],xp:150},{id:"b_warden",group:"Jefes",title:"Silencio absoluto",desc:"Derrota al Warden",ev:"boss",target:"warden",n:1,reward:[[X.STAR,1],[X.DIAMOND,8]],xp:150},{id:"b_guardian",group:"Jefes",title:"La mirada del océano",desc:"Derrota al Guardián Ancestral",ev:"boss",target:"guardian",n:1,reward:[[X.STAR,1],[X.DIAMOND,8]],xp:150},{id:"b_ravager",group:"Jefes",title:"Contra la embestida",desc:"Derrota al Devastador",ev:"boss",target:"ravager",n:1,reward:[[X.STAR,1],[X.DIAMOND,8]],xp:150},{id:"b_evoker",group:"Jefes",title:"Colmillos y vex",desc:"Derrota al Invocador",ev:"boss",target:"evoker",n:1,reward:[[X.STAR,1],[X.DIAMOND,8]],xp:150},{id:"b_ghast",group:"Jefes",title:"Devuélvesela",desc:"Derrota al Ghast Gigante",ev:"boss",target:"ghast",n:1,reward:[[X.STAR,1],[X.DIAMOND,8]],xp:150},{id:"b_slime",group:"Jefes",title:"Aplastado",desc:"Derrota al Rey Slime",ev:"boss",target:"slimeking",n:1,reward:[[X.STAR,1],[X.DIAMOND,8]],xp:150},{id:"b_hero",group:"Jefes",title:"Más allá del mito",desc:"Derrota a Herobrine",ev:"boss",target:"herobrine",n:1,reward:[[X.STAR,2],[X.DIAMOND,16]],xp:250},{id:"master",group:"Jefes",title:"★ LEYENDA DE LOS JEFES ★",desc:"Derrota a los 10 jefes de Minecraft",ev:"bossall",target:null,n:10,reward:[[X.STAR,5],[X.DIAMOND,32],[X.GOLD,32]],xp:500}];class Yv{constructor(t){this.h=t,this.progress={},this.done={},this.bosses=new Set}event(t,e,n=1){for(const s of ws)this.done[s.id]||s.ev!==t||s.target!==null&&s.target!==e||(this.progress[s.id]=Math.min(s.n,(this.progress[s.id]||0)+n),this.progress[s.id]>=s.n&&this.complete(s));if(t==="boss"){this.bosses.add(e);const s=ws.find(r=>r.id==="master");this.done.master||(this.progress.master=this.bosses.size,this.bosses.size>=s.n&&this.complete(s))}}complete(t){this.done[t.id]=!0,this.progress[t.id]=t.n,this.h.reward(t.reward),this.h.xp(t.xp),this.h.sound("craft"),this.h.toast(t.id==="master"?"🏆 ¡ERES UNA LEYENDA! Has derrotado a todos los jefes":`✔ Misión completada: ${t.title}`)}active(t=3){return ws.filter(e=>!this.done[e.id]).slice(0,t)}total(){return ws.length}completed(){return ws.filter(t=>this.done[t.id]).length}toJSON(){return{progress:this.progress,done:this.done,bosses:[...this.bosses]}}load(t){t&&(this.progress=t.progress||{},this.done=t.done||{},this.bosses=new Set(t.bosses||[]))}}const Ui=.3,ru=1.8,Wo=1.62,au=28,$v=8.6,Kv=4.4,jv=7,Zv=12;class Jv{constructor(t,e){this.world=t,this.camera=e,this.pos=new L(0,40,0),this.vel=new L,this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headUnder=!1,this.keys=new Set,this.mode="survival",this.hp=20,this.food=20,this.air=10,this.fallStart=null,this.foodTimer=0,this.regenTimer=0,this.airTimer=0,this.starveTimer=0,this.invuln=0,this.dead=!1,this.stepDist=0,this.events={onHurt:null,onLand:null,onStep:null,onSplash:null,onDeath:null},this.spawn=new L,this.wind={x:0,z:0},this.push={x:0,y:0,z:0},this.effects={poison:0,fatigue:0,burn:0},this.poisonT=0,this.burnT=0}collides(t,e,n){const s=this.world;for(let r=Math.floor(e);r<=Math.floor(e+ru-.001);r++)for(let a=Math.floor(n-Ui);a<=Math.floor(n+Ui);a++)for(let o=Math.floor(t-Ui);o<=Math.floor(t+Ui);o++)if(s.isSolid(o,r,a))return!0;return!1}intersectsBlock(t,e,n){return this.pos.x+Ui>t&&this.pos.x-Ui<t+1&&this.pos.y+ru>e&&this.pos.y<e+1&&this.pos.z+Ui>n&&this.pos.z-Ui<n+1}get eye(){return new L(this.pos.x,this.pos.y+Wo,this.pos.z)}lookDir(){return new L(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}damage(t,e=0,n=0){this.mode==="creative"||this.dead||this.invuln>0||(this.hp=Math.max(0,this.hp-t),this.invuln=.5,this.vel.x+=e,this.vel.z+=n,(e||n)&&(this.vel.y=Math.max(this.vel.y,5)),this.events.onHurt&&this.events.onHurt(t),this.hp<=0&&(this.dead=!0,this.events.onDeath&&this.events.onDeath()))}heal(t){this.hp=Math.min(20,this.hp+t)}eat(t){this.food=Math.min(20,this.food+t)}respawn(){this.hp=20,this.food=20,this.air=10,this.dead=!1,this.invuln=2,this.effects.poison=0,this.effects.fatigue=0,this.effects.burn=0,this.pos.copy(this.spawn),this.vel.set(0,0,0),this.fallStart=null}update(t){if(t=Math.min(t,.05),this.dead){this.camera.position.set(this.pos.x,this.pos.y+.4,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,.6,"YXZ");return}const e=this.keys,n=this.world;this.invuln=Math.max(0,this.invuln-t);const s=Math.floor(this.pos.x),r=Math.floor(this.pos.z),a=this.inWater;this.inWater=n.isLiquid(s,Math.floor(this.pos.y+.3),r),this.headUnder=n.isLiquid(s,Math.floor(this.pos.y+Wo),r),this.inWater&&!a&&this.vel.y<-4&&this.events.onSplash&&this.events.onSplash();const o=(e.has("KeyW")?1:0)-(e.has("KeyS")?1:0),l=(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),c=e.has("ShiftLeft")&&o>0&&!(this.mode==="survival"&&this.food<=6);let h=this.flying?Zv:c?jv:Kv;this.inWater&&!this.flying&&(h*=.6);const u=Math.sin(this.yaw),f=Math.cos(this.yaw);let p=-u*o+f*l,g=-f*o-u*l;const _=Math.hypot(p,g);_>0&&(p/=_,g/=_),this.vel.x=p*h+(this.inWater?0:this.wind.x),this.vel.z=g*h+(this.inWater?0:this.wind.z),this.flying?(this.vel.y=((e.has("Space")?1:0)-(e.has("KeyQ")?1:0))*h,this.fallStart=null):this.inWater?(this.vel.y-=au*.25*t,this.vel.y=Math.max(this.vel.y,-3)*(1-2*t),e.has("Space")&&(this.vel.y=Math.min(this.vel.y+22*t,3.6)),this.fallStart=null):(this.vel.y-=au*t,this.vel.y<-50&&(this.vel.y=-50),e.has("Space")&&this.onGround&&(this.vel.y=$v,this.onGround=!1)),this.vel.x+=this.push.x,this.vel.z+=this.push.z,this.vel.y+=this.push.y*t;const m=this.onGround,d=2,b=t/d;this.onGround=!1;const y=this.pos.x,v=this.pos.z;for(let P=0;P<d;P++)for(const T of["x","z","y"]){const A=this.vel[T]*b;A!==0&&(this.pos[T]+=A,this.collides(this.pos.x,this.pos.y,this.pos.z)&&(this.pos[T]-=A,T==="y"&&this.vel.y<0&&(this.onGround=!0),this.vel[T]=0))}if(!this.onGround&&!this.inWater&&!this.flying&&(this.fallStart===null||this.pos.y>this.fallStart)&&(this.fallStart=this.pos.y),this.onGround&&!m&&this.fallStart!==null){const P=this.fallStart-this.pos.y;P>3&&this.mode==="survival"&&this.damage(Math.floor(P-3)),P>1.2&&this.events.onLand&&this.events.onLand(P),this.fallStart=null}if(this.onGround&&(this.fallStart=null),this.onGround&&!this.flying&&(this.stepDist+=Math.hypot(this.pos.x-y,this.pos.z-v),this.stepDist>(c?2.2:1.7)&&(this.stepDist=0,this.events.onStep&&this.events.onStep())),this.pos.y<-30&&(this.pos.y=70,this.vel.set(0,0,0),this.damage(4)),this.effects.fatigue>0&&(this.effects.fatigue-=t),this.effects.burn>0&&(this.inWater?this.effects.burn=0:(this.effects.burn-=t,this.burnT+=t,this.burnT>=.8&&(this.burnT=0,this.mode==="survival"&&this.damage(1)))),this.effects.poison>0&&(this.effects.poison-=t,this.poisonT+=t,this.poisonT>=1&&(this.poisonT=0,this.mode==="survival"&&this.hp>1&&(this.hp-=1,this.events.onHurt&&this.events.onHurt(1)))),this.mode==="survival"){this.headUnder?(this.airTimer+=t,this.airTimer>=1&&(this.airTimer=0,this.air>0?this.air--:this.damage(2))):(this.airTimer=0,this.air=Math.min(10,this.air+t*6));const P=Math.hypot(this.vel.x,this.vel.z)>.1;this.foodTimer+=t*(c?3:P?1:.25),this.foodTimer>22&&(this.foodTimer=0,this.food=Math.max(0,this.food-1)),this.regenTimer+=t,this.food>=18&&this.hp<20&&this.regenTimer>3?(this.regenTimer=0,this.heal(1),this.foodTimer+=6):this.food<=0&&this.regenTimer>4&&(this.regenTimer=0,this.hp>1&&this.damage(1))}else this.air=10,this.hp=20,this.food=20;this.camera.position.set(this.pos.x,this.pos.y+Wo,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}class Qv{constructor(){this.slots=Array(36).fill(null),this.selected=0}held(){return this.slots[this.selected]}add(t,e=1){const n=mi(t);for(const s of this.slots)if(s&&s.id===t&&s.n<n){const r=Math.min(e,n-s.n);if(s.n+=r,e-=r,!e)return 0}for(let s=0;s<36&&e>0;s++)if(!this.slots[s]){const r=Math.min(e,n);this.slots[s]={id:t,n:r,d:0},e-=r}return e}canAdd(t){const e=mi(t);return this.slots.some(n=>!n||n.id===t&&n.n<e)}consumeHeld(t=1){const e=this.slots[this.selected];e&&(e.n-=t,e.n<=0&&(this.slots[this.selected]=null))}wearHeld(t=1){const e=this.slots[this.selected],n=ss(e);return n?(e.d=(e.d||0)+t,e.d>=n.dur?(this.slots[this.selected]=null,!0):!1):!1}toJSON(){return{slots:this.slots,selected:this.selected}}load(t){t&&(this.slots=t.slots,this.selected=t.selected||0)}}const tx=600,ou=new wt(1,1,1),ex=new wt(2316488),nx=new wt(7370367),ix=new wt(14542591),sx=new wt(8900331),rx=new wt(461596),ax=new wt(16747088),Xo=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function ox(){const e=Array.from({length:64},()=>Math.random()),n=(l,c)=>e[(c%8+8)%8*8+(l%8+8)%8],s=document.createElement("canvas");s.width=s.height=64;const r=s.getContext("2d"),a=r.createImageData(64,64);for(let l=0;l<64;l++)for(let c=0;c<64;c++){const h=c/64*8,u=l/64*8,f=Math.floor(h),p=Math.floor(u),g=h-f,_=u-p,m=g*g*(3-2*g),d=_*_*(3-2*_),b=(n(f,p)*(1-m)+n(f+1,p)*m)*(1-d)+(n(f,p+1)*(1-m)+n(f+1,p+1)*m)*d,y=(l*64+c)*4,v=b>.56?215:0;a.data[y]=a.data[y+1]=a.data[y+2]=255,a.data[y+3]=v}r.putImageData(a,0,0);const o=new Bn(s);return o.wrapS=o.wrapT=Aa,o.magFilter=ue,o.minFilter=ue,o.generateMipmaps=!1,o}function lu(i){const t=document.createElement("canvas");t.width=t.height=16,i(t.getContext("2d"));const e=new Bn(t);return e.magFilter=ue,e.minFilter=ue,e.generateMipmaps=!1,e}class lx{constructor(t,e,n){this.scene=t,this.camera=e,this.materials=n,this.time=.08,this.daylight=1,this.wet=0,this.flash=0,this.cloudX=0,this.cloudZ=0,this.root=new we,t.add(this.root),this.domeMat=new on({side:un,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{top:{value:new wt(4884696)},hor:{value:new wt(10147056)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = normalize(vP).y; float t = smoothstep(-0.02, 0.6, h); gl_FragColor = vec4(mix(hor, top, t), 1.0); }"}),this.dome=new Ut(new _c(420,24,14),this.domeMat),this.dome.renderOrder=-30,this.root.add(this.dome);const s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d"),a=r.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,240,180,0.9)"),a.addColorStop(.25,"rgba(255,200,110,0.35)"),a.addColorStop(1,"rgba(255,180,80,0)"),r.fillStyle=a,r.fillRect(0,0,128,128),this.glow=new ef(new pc({map:new Bn(s),blending:wa,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),this.glow.scale.set(260,260,1),this.glow.renderOrder=-11,this.root.add(this.glow);const o=lu(f=>{f.fillStyle="#fff6b0",f.fillRect(0,0,16,16),f.fillStyle="#ffe14a",f.fillRect(2,2,12,12),f.fillStyle="#fffbe0",f.fillRect(5,5,6,6)}),l=lu(f=>{f.fillStyle="#e8ecf2",f.fillRect(0,0,16,16),f.fillStyle="#b8bfcc",f.fillRect(3,4,3,3),f.fillRect(9,8,4,3),f.fillRect(5,11,2,2)}),c=(f,p)=>{const g=new Ut(new yi(p,p),new Pe({map:f,transparent:!0,fog:!1,depthWrite:!1,depthTest:!1}));return g.renderOrder=-10,this.root.add(g),g};this.sun=c(o,60),this.moon=c(l,40);const h=new Float32Array(900*3);for(let f=0;f<900;f++){const p=Math.random()*2-1,g=Math.random()*Math.PI*2,_=Math.sqrt(1-p*p);h[f*3]=Math.cos(g)*_*300,h[f*3+1]=p*300,h[f*3+2]=Math.sin(g)*_*300}const u=new qe;u.setAttribute("position",new vn(h,3)),this.starMat=new gc({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,fog:!1,depthWrite:!1}),this.stars=new sf(u,this.starMat),this.stars.renderOrder=-11,this.root.add(this.stars),this.cloudTex=ox(),this.cloudMat=new Pe({map:this.cloudTex,transparent:!0,fog:!1,depthWrite:!1,side:_n}),this.clouds=new Ut(new yi(900,900),this.cloudMat),this.clouds.rotation.x=-Math.PI/2,t.add(this.clouds),this.cloudMat2=new Pe({map:this.cloudTex.clone(),transparent:!0,fog:!1,depthWrite:!1,side:_n}),this.cloudMat2.map.needsUpdate=!0,this.clouds2=new Ut(new yi(900,900),this.cloudMat2),this.clouds2.rotation.x=-Math.PI/2,t.add(this.clouds2),this.hemi=new B_(12572927,8022608,2),this.sunLight=new V_(16773853,2.8),this.shadowExt=64,this.shadowOn=!1,t.add(this.hemi,this.sunLight,this.sunLight.target),this.lightDir=new L(.5,1,.3).normalize(),this.sky=new wt,this.tint=new wt}setShadows(t,e,n){const s=this.sunLight,r=s.shadow.mapSize.x!==e||this.shadowExt!==n;if(this.shadowOn=t,this.shadowExt=n,t){s.shadow.mapSize.set(e,e);const a=s.shadow.camera;a.left=-n,a.right=n,a.top=n,a.bottom=-n,a.near=10,a.far=340,a.updateProjectionMatrix(),s.shadow.bias=-4e-4,s.shadow.normalBias=.35*(n/64)*(2048/e)**.5,s.shadow.radius=2,r&&s.shadow.map&&(s.shadow.map.dispose(),s.shadow.map=null)}}update(t,e,n,s,r={x:0,z:0,s:.12}){this.time=(this.time+t/tx)%1;const a=this.time*Math.PI*2,o=Math.sin(a),l=Math.cos(a),c=Xo(-.12,.25,o),h=this.wet,u=this.flash;this.daylight=c*(1-.55*h),this.sky.copy(rx).lerp(sx,this.daylight);const f=Math.max(0,1-Math.abs(o)*4.5)*.7;this.sky.lerp(ax,f*(1-h)),h>0&&this.sky.lerp(nx.clone().multiplyScalar(.12+.88*c),h*.8),u>0&&this.sky.lerp(ix,u*.7),s&&this.sky.set(1718906).multiplyScalar(.4+this.daylight*.6),this.scene.background=this.sky;const p=c*(1-h);this.domeMat.uniforms.hor.value.copy(this.sky).lerp(ou,.22*p),this.domeMat.uniforms.top.value.copy(this.sky).multiplyScalar(.7).lerp(ex,.3*p),this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:n*.6,this.scene.fog.far=s?18:n*(1-.3*h),s||(this.scene.fog.near=n*(.6-.25*h)),.2+.8*this.daylight;const g=Xo(-.04,.3,o)*(1-.65*h),_=Xo(0,-.3,o)*(1-.7*h),m=Math.max(0,1-Math.abs(o)*3.2)*(1-h),d=new L(l,o,.28).normalize(),b=o>-.04;this.lightDir.copy(b?d:d.clone().negate()),this.sunLight.color.setRGB(1,.95-.38*m,.88-.62*m),b||this.sunLight.color.setRGB(.55,.66,1),this.sunLight.intensity=(b?3.4*g:.6*_)+u*2.5,this.hemi.color.copy(this.sky).lerp(ou,.6),this.hemi.groundColor.setRGB(.42,.36,.28).multiplyScalar(.4+.6*this.daylight),this.hemi.intensity=.3+2.5*this.daylight+.3*_+u*3;const y=this.shadowOn?2*this.shadowExt/Math.max(256,this.sunLight.shadow.mapSize.x):1,v=Math.round(e.x/y)*y,P=Math.round(e.y/y)*y,T=Math.round(e.z/y)*y;this.sunLight.target.position.set(v,P,T),this.sunLight.position.set(v+this.lightDir.x*160,P+this.lightDir.y*160,T+this.lightDir.z*160),this.sunLight.castShadow=this.shadowOn&&this.sunLight.intensity>.05,this.root.position.copy(this.camera.position);const A=220;this.sun.position.set(l*A,o*A,30),this.glow.position.set(l*A*.98,o*A*.98,30),this.glow.material.opacity=Math.max(0,Math.min(1,(o+.15)*1.6))*(1-h)*(s?0:1),this.moon.position.set(-l*A,-o*A,30),this.sun.lookAt(this.camera.position),this.moon.lookAt(this.camera.position),this.stars.rotation.z=a,this.starMat.opacity=Math.max(0,1-this.daylight*1.6)*(s?0:1)*(1-h),this.sun.material.opacity=this.moon.material.opacity=1-h*.95;const C=1.2+r.s*10;this.cloudX+=r.x/(r.s||1)*C*t,this.cloudZ+=r.z/(r.s||1)*C*t;const M=768,x=(.3+.7*c)*(1-.5*h);for(const[R,D,U,z]of[[this.clouds,this.cloudMat,150,1],[this.clouds2,this.cloudMat2,142,.7]])R.position.set(e.x,U,e.z),D.map.repeat.set(900/M,900/M),D.map.offset.set((e.x+this.cloudX*z)/M+(z<1?.37:0),-(e.z+this.cloudZ*z)/M),D.color.setScalar(x*(z<1?.8:1));this.cloudMat.opacity=.9,this.cloudMat2.opacity=Math.min(.95,h*1.1),this.clouds2.visible=h>.05}}const ie=i=>document.getElementById(i);function di(i,t={}){const e=document.createElement("div");if(e.className="slot"+(t.active?" active":""),t.group&&(e.dataset.g=t.group,e.dataset.i=t.index),i){const n=document.createElement("img");if(n.src=vf(i.id),df(i.id)&&(n.className="flat"),e.appendChild(n),e.title=ja(i.id).name,i.n>1){const r=document.createElement("span");r.className="n",r.textContent=i.n,e.appendChild(r)}const s=ss(i);if(s&&i.d>0){const r=document.createElement("div");r.className="dur";const a=Math.max(0,1-i.d/s.dur);r.innerHTML=`<i style="width:${a*100}%;background:${a>.5?"#6f6":a>.2?"#fd4":"#f55"}"></i>`,e.appendChild(r)}}if(t.key){const n=document.createElement("span");n.className="k",n.textContent=t.key,e.appendChild(n)}return e}class cx{constructor(t){this.g=t,this.cursor=null,this.craft=[],this.size=2,this.isOpen=!1,this.toastT=0,this.furnace=null,this.sprites=_v();const e=ie("inv");e.addEventListener("mousedown",n=>this.onDown(n)),e.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("mousemove",n=>{const s=ie("cursorItem");s.style.left=n.clientX+"px",s.style.top=n.clientY+"px"})}toast(t){const e=ie("toast");e.textContent=t,e.style.opacity=1,clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.style.opacity=0,1600)}renderHotbar(){const t=ie("hotbar");t.innerHTML="";for(let e=0;e<9;e++){const n=di(this.g.inv.slots[e],{active:e===this.g.inv.selected,key:e+1});n.onclick=()=>{this.g.inv.selected=e,this.g.onSelect()},t.appendChild(n)}}renderStats(){const t=this.g.player,e=this.g.getMode()==="survival",n=this.sprites;ie("bars").style.visibility=e?"visible":"hidden";const s=(c,h)=>{let u="";for(let f=0;f<10;f++)u+=`<img class="hs" src="${h[c>=f*2+2?"full":c===f*2+1?"half":"empty"]}">`;return u},r=Math.ceil(t.hp),a=Math.ceil(t.food),o=r+","+a+","+Math.ceil(t.air)+","+t.headUnder+","+e+","+(r<=6?Math.floor(performance.now()/250)%2:0);if(o===this._statKey)return;this._statKey=o,ie("hearts").innerHTML=s(r,n.heart),ie("hearts").classList.toggle("low",r<=6),ie("food").innerHTML=s(a,n.food);const l=Math.ceil(t.air);ie("air").innerHTML=t.headUnder&&e?Array.from({length:10},(c,h)=>`<img class="hs" src="${l>h?n.bubble.full:n.bubble.empty}">`).join(""):""}open(t,e=null){this.furnace=t==="furnace"?e:null,t==="furnace"&&(t=2),this.size=t,this.craft=Array(t*t).fill(null),this.isOpen=!0;const n=this.g.getMode()==="creative";ie("inv").classList.remove("hidden"),ie("invTitle").textContent=this.furnace?"Horno":n?"Creativo":t===3?"Mesa de crafteo":"Inventario",ie("craftArea").classList.toggle("hidden",n||!!this.furnace),ie("furnaceArea").classList.toggle("hidden",!this.furnace),ie("paletteWrap").classList.toggle("hidden",!n||!!this.furnace),ie("craftGrid").style.gridTemplateColumns=`repeat(${t}, 46px)`,this.render()}close(){if(!this.isOpen)return;this.isOpen=!1,this.furnace=null;const t=e=>{if(!e)return;const n=this.g.inv.add(e.id,e.n);n&&this.g.dropItem(e.id,n)};this.craft.forEach(t),this.craft=[],t(this.cursor),this.cursor=null,ie("inv").classList.add("hidden"),ie("cursorItem").classList.add("hidden"),this.renderHotbar()}recipe(){const t=lv(this.craft.map(e=>e?e.id:0),this.size);return t?{id:t.out,n:t.n,d:0}:null}render(){const t=this.g,e=ie("invMain");e.innerHTML="";for(let r=9;r<36;r++)e.appendChild(di(t.inv.slots[r],{group:"inv",index:r}));const n=ie("invHot");n.innerHTML="";for(let r=0;r<9;r++)n.appendChild(di(t.inv.slots[r],{group:"inv",index:r,active:r===t.inv.selected}));if(this.furnace){const r=this.furnace;ie("fIn").innerHTML="",ie("fIn").appendChild(di(r.slots[0],{group:"furnace",index:0})),ie("fFuel").innerHTML="",ie("fFuel").appendChild(di(r.slots[1],{group:"furnace",index:1})),ie("fOut").innerHTML="",ie("fOut").appendChild(di(r.slots[2],{group:"furnace",index:2})),this.furnaceBars()}else if(t.getMode()==="creative"){const r=ie("palette");r.innerHTML="",[...Object.keys(Ve).map(Number),...Object.keys(Gi).map(Number)].forEach(o=>r.appendChild(di({id:o,n:1,d:0},{group:"pal",index:o})))}else{const r=ie("craftGrid");r.innerHTML="",this.craft.forEach((o,l)=>r.appendChild(di(o,{group:"craft",index:l})));const a=ie("craftOut");a.innerHTML="",a.appendChild(di(this.recipe(),{group:"out",index:0}))}const s=ie("cursorItem");this.cursor?(s.classList.remove("hidden"),s.innerHTML=`<img src="${vf(this.cursor.id)}">${this.cursor.n>1?`<span class="n">${this.cursor.n}</span>`:""}`):s.classList.add("hidden"),this.renderHotbar()}furnaceBars(){const t=this.furnace;t&&(ie("fFlame").style.height=(t.burn>0?Math.min(100,t.burn/t.burnMax*100):0)+"%",ie("fArrow").style.width=Math.min(100,t.cook/ff*100)+"%")}arr(t){return t==="inv"?this.g.inv.slots:t==="furnace"?this.furnace.slots:this.craft}onDown(t){const e=t.target.closest(".slot"),n=t.button===2;if(!e||!e.dataset.g){this.g.getMode()==="creative"&&t.target.closest("#paletteWrap")?(this.cursor=null,this.render()):!t.target.closest(".panel")&&this.cursor&&(this.g.dropItem(this.cursor.id,n?1:this.cursor.n),n&&this.cursor.n>1?this.cursor.n--:this.cursor=null,this.render());return}const s=e.dataset.g,r=+e.dataset.i;if(s==="pal"){this.cursor={id:r,n:n?1:mi(r),d:0},this.render();return}if(s==="out"){const c=this.recipe();if(!c||this.cursor&&!(this.cursor.id===c.id&&this.cursor.n+c.n<=mi(c.id)))return;this.cursor?this.cursor.n+=c.n:this.cursor={...c},this.craft=this.craft.map(h=>h&&h.n>1?{...h,n:h.n-1}:null),this.g.sound("craft"),this.g.onCraft&&this.g.onCraft(c.id,c.n),this.render();return}const a=this.arr(s),o=a[r],l=this.cursor;if(s==="furnace"&&r===2){if(!o)return;l?l.id===o.id&&l.n+o.n<=mi(l.id)&&(l.n+=o.n,a[2]=null):(this.cursor=o,a[2]=null),this.render();return}if(n){if(l)o?o.id===l.id&&o.n<mi(l.id)?(o.n++,l.n--,l.n<=0&&(this.cursor=null)):(a[r]=l,this.cursor=o):(a[r]={...l,n:1},l.n--,l.n<=0&&(this.cursor=null));else if(o){const c=Math.ceil(o.n/2);this.cursor={...o,n:c},o.n-=c,o.n<=0&&(a[r]=null)}}else if(!l)a[r]=null,this.cursor=o;else if(!o)a[r]=l,this.cursor=null;else if(o.id===l.id&&mi(l.id)>1){const c=Math.min(l.n,mi(l.id)-o.n);o.n+=c,l.n-=c,l.n<=0&&(this.cursor=null)}else a[r]=l,this.cursor=o;this.render()}}let Ce=null,Fa=null,Bi=null,xf=.5;function Za(){if(Ce)return!0;try{Ce=new(window.AudioContext||window.webkitAudioContext),Bi=Ce.createGain(),Bi.gain.value=xf,Bi.connect(Ce.destination),Fa=Ce.createBuffer(1,Ce.sampleRate,Ce.sampleRate);const i=Fa.getChannelData(0);for(let t=0;t<i.length;t++)i[t]=Math.random()*2-1;return!0}catch{return!1}}function yr(){Za()&&Ce.state==="suspended"&&Ce.resume()}function hx(i){xf=i,Bi&&(Bi.gain.value=i)}function Sn(i,t,e,n,s=0){if(!Za())return;const r=Ce.currentTime,a=Ce.createBufferSource();a.buffer=Fa;const o=Ce.createBiquadFilter();o.type="lowpass",o.frequency.setValueAtTime(t,r),s&&o.frequency.exponentialRampToValueAtTime(Math.max(40,t*s),r+i),o.Q.value=e;const l=Ce.createGain();l.gain.setValueAtTime(n,r),l.gain.exponentialRampToValueAtTime(.001,r+i),a.connect(o),o.connect(l),l.connect(Bi),a.start(r,Math.random()*.5,i)}function qn(i,t,e,n,s){if(!Za())return;const r=Ce.currentTime,a=Ce.createOscillator();a.type=i,a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(e,r+n);const o=Ce.createGain();o.gain.setValueAtTime(s,r),o.gain.exponentialRampToValueAtTime(.001,r+n),a.connect(o),o.connect(Bi),a.start(r),a.stop(r+n)}let fa=null;function ux(){if(fa||!Za())return fa;const i=(t,e,n)=>{const s=Ce.createBufferSource();s.buffer=Fa,s.loop=!0;const r=Ce.createBiquadFilter();r.type=t,r.frequency.value=e,r.Q.value=n;const a=Ce.createGain();return a.gain.value=0,s.connect(r),r.connect(a),a.connect(Bi),s.start(0,Math.random()*.5),{f:r,g:a}};return fa={rain:i("highpass",1800,.3),rainLow:i("lowpass",5e3,.3),wind:i("bandpass",420,.9)},fa}function fx(i,t,e=0){if(!Ce||Ce.state!=="running")return;const n=ux();if(!n)return;const s=Ce.currentTime;n.rain.g.gain.setTargetAtTime(i*.16,s,.3),n.rainLow.g.gain.setTargetAtTime(i*.12,s,.3),n.wind.g.gain.setTargetAtTime(t*.5,s,.4),n.wind.f.frequency.setTargetAtTime(300+380*(.5+.5*Math.sin(e))+t*200,s,.3)}function Wl(i,t=1){if(Ce)switch(i){case"break":Sn(.16,1400,1,.9,.4);break;case"place":Sn(.09,900,1,.7);break;case"step":Sn(.07,500,1,.25);break;case"hit":Sn(.08,2200,1,.5);break;case"hurt":qn("square",330,110,.22,.25);break;case"pop":qn("sine",500,1100,.1,.2);break;case"eat":Sn(.07,1800,2,.6),setTimeout(()=>Sn(.07,1600,2,.6),110);break;case"splash":Sn(.3,2500,.5,.6,.2);break;case"hiss":Sn(.6,6e3,.5,.4);break;case"explode":Sn(1.1,900,.7,1.4,.1),qn("sine",90,30,.8,.9);break;case"craft":qn("triangle",400,800,.15,.25);break;case"die":qn("sawtooth",300,40,.8,.3);break;case"oink":qn("sawtooth",220,150,.15,.12);break;case"moo":qn("sawtooth",130,100,.5,.12);break;case"thunder":Sn(3.2,380,.7,1.6*t,.12),setTimeout(()=>Sn(1.6,220,.8,.9*t,.2),450),qn("sine",60,25,2,.5*t);break;case"roar":Sn(1.5,500,.8,.9*t,.15),qn("sawtooth",95,32,1.5,.45*t);break;case"shoot":Sn(.3,3200,.8,.45*t,.25),qn("sine",700,180,.25,.2*t);break;case"groan":qn("sawtooth",110,70,.6,.14);break}}const dx="minecraft-web",An="kv";let da=null;function Ys(){return da||(da=new Promise((i,t)=>{const e=indexedDB.open(dx,1);e.onupgradeneeded=()=>e.result.createObjectStore(An),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}),da)}const Ls=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)}),Ja=i=>new Promise((t,e)=>{i.oncomplete=t,i.onerror=()=>e(i.error),i.onabort=()=>e(i.error)});async function Cr(i){return await Ls(i.get("index"))||[]}async function px(){const t=(await Ys()).transaction(An,"readwrite"),e=t.objectStore(An),n=await Ls(e.get("meta"));if(n){const s=await Ls(e.getAllKeys()),r=await Cr(e),a="w"+Date.now().toString(36);for(const o of s)typeof o=="string"&&o.startsWith("c:")&&(e.put(await Ls(e.get(o)),`w:${a}:${o}`),e.delete(o));e.put(n,`w:${a}:meta`),e.delete("meta"),r.unshift({id:a,name:"Mundo antiguo",mode:n.mode,seed:n.seed,updated:Date.now(),created:Date.now(),played:0,level:0,thumb:null}),e.put(r,"index")}await Ja(t)}async function Mf(){try{await px();const t=(await Ys()).transaction(An).objectStore(An);return(await Cr(t)).sort((e,n)=>n.updated-e.updated)}catch{return[]}}async function yf(i){const e=(await Ys()).transaction(An).objectStore(An),n=IDBKeyRange.bound(`w:${i}:`,`w:${i}:￿`),s=await Ls(e.getAllKeys(n)),r=await Ls(e.getAll(n)),a={meta:null,chunks:new Map};return s.forEach((o,l)=>{const c=o.slice(`w:${i}:`.length);c==="meta"?a.meta=r[l]:c.startsWith("c:")&&a.chunks.set(Number(c.slice(2)),r[l])}),a}function Sf(){return"w"+Date.now().toString(36)+Math.floor(Math.random()*1296).toString(36)}async function bf(i,t,e,n){try{const r=(await Ys()).transaction(An,"readwrite"),a=r.objectStore(An);a.put(t,`w:${i}:meta`);for(const[h,u]of e)a.put(u,`w:${i}:c:${h}`);const o=await Cr(a),l=o.findIndex(h=>h.id===i),c={...l>=0?o[l]:{},...n,id:i,updated:Date.now()};return l>=0?o[l]=c:o.push(c),a.put(o,"index"),await Ja(r),!0}catch{return!1}}async function mx(i){const e=(await Ys()).transaction(An,"readwrite"),n=e.objectStore(An);n.delete(IDBKeyRange.bound(`w:${i}:`,`w:${i}:￿`)),n.put((await Cr(n)).filter(s=>s.id!==i),"index"),await Ja(e)}async function gx(i,t){const n=(await Ys()).transaction(An,"readwrite"),s=n.objectStore(An),r=await Cr(s),a=r.find(o=>o.id===i);a&&(a.name=t),s.put(r,"index"),await Ja(n)}const _x=i=>{let t="";for(let e=0;e<i.length;e+=32768)t+=String.fromCharCode.apply(null,i.subarray(e,e+32768));return btoa(t)},vx=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0));async function Ef(i,t,e){return new Response(i.pipeThrough(new t(e)))}async function Tf(i){const t=await Mf(),e=t.find(a=>a.id===i),n=await yf(i),s=JSON.stringify({v:2,summary:e,meta:n.meta,chunks:[...n.chunks].map(([a,o])=>[a,_x(new Uint8Array(o))])}),r=new Blob([s]);return typeof CompressionStream>"u"?r:(await Ef(r.stream(),CompressionStream,"gzip")).blob()}async function xx(i){let t;try{t=await(await Ef(i.stream(),DecompressionStream,"gzip")).text()}catch{t=await i.text()}const e=JSON.parse(t);if(!e||!e.meta)throw new Error("Archivo no válido");const n=Sf();return await bf(n,e.meta,e.chunks.map(([s,r])=>[s,vx(r)]),{...e.summary||{},name:(e.summary&&e.summary.name||"Mundo")+" (importado)",created:Date.now()}),n}const ut=i=>document.getElementById(i),kn=ut("game"),Nn=new I_({canvas:kn,antialias:!0,powerPreference:"high-performance"});Nn.setPixelRatio(Math.min(devicePixelRatio,2));const nn=new U_;nn.fog=new dc(8900331,50,90);const je=new En(75,1,.05,500);nn.add(je);const{canvas:wf,texture:Xl}=Y_();hv(wf);document.documentElement.style.setProperty("--dirt",`url(${vv("dirt")})`);const Mx={value:new wt(1,1,1)},za={uTime:{value:0},uWind:{value:.12}};function cu(i){return i.onBeforeCompile=t=>{t.uniforms.uTime=za.uTime,t.uniforms.uWind=za.uWind,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
reflectedLight.directSpecular *= vSK;`)},i.customProgramCacheKey=()=>"chunk-pbr",i}const ql=K_(wf);let pa=null;const ks={opaque:cu(new Vh({map:Xl,normalMap:ql,vertexColors:!0,roughness:.94,metalness:0})),trans:cu(new Vh({map:Xl,normalMap:ql,vertexColors:!0,transparent:!0,depthWrite:!1,side:_n,roughness:.1,metalness:.05})),tint:Mx};function yx(i){i&&!pa&&(pa=$_(Nn));for(const t of[ks.opaque,ks.trans])t.map=i?pa.map:Xl,t.normalMap=i?pa.normalMap:ql,t.needsUpdate=!0}Nn.toneMapping=ec;Nn.toneMappingExposure=1.45;Nn.shadowMap.type=Mu;const Yl=[{name:"Bajo",shadows:!1,size:0,ext:0,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Medio",shadows:!0,size:1024,ext:48,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Alto",shadows:!0,size:2048,ext:64,bloom:!0,hd:!0,msaa:2,pr:1.25,grade:!0},{name:"Ultra (hiperrealista)",shadows:!0,size:4096,ext:80,bloom:!0,hd:!0,msaa:4,pr:2,grade:!0}],Af={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.85},uSat:{value:1.04},uGrain:{value:.035},uContrast:{value:1.06}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; uniform float uTime, uVig, uSat, uGrain, uContrast; varying vec2 vUv;float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));c.rgb = mix(vec3(l), c.rgb, uSat); c.rgb = (c.rgb - 0.18) * uContrast + 0.18; vec2 d = vUv - 0.5; c.rgb *= 1.0 - dot(d, d) * uVig;c.rgb += (h(vUv * 1000.0 + uTime) - 0.5) * uGrain; gl_FragColor = c; }"};let bn=null,hu=null,uu=null,Rf=!1;function Cf(){const i=Yl[ke.quality];ke.quality,Nn.setPixelRatio(Math.min(devicePixelRatio,i.pr)),Nn.shadowMap.enabled=i.shadows,ii&&ii.setShadows(i.shadows,i.size||1024,i.ext||48);for(const n of[ks.opaque,ks.trans])n.needsUpdate=!0;yx(i.hd);const t=i.bloom||i.grade||i.msaa;if(bn&&(bn.dispose(),bn=null),t){const n=innerWidth,s=innerHeight,r=Nn.getPixelRatio(),a=new Fn(n*r,s*r,{type:si,samples:i.msaa});bn=new tv(Nn,a),bn.addPass(new ev(nn,je)),i.bloom&&(hu=new Bs(new Ct(n,s),.42,.55,.88),bn.addPass(hu)),Rf=i.grade,i.grade&&(uu=new cf(Af),bn.addPass(uu)),bn.addPass(new sv),bn.setSize(n,s)}const e=document.getElementById("bQuality");e&&(e.textContent="Gráficos: "+i.name),Pc()}const ke={radius:8,fov:75,sens:1,vol:.5,cam:0,quality:2};try{Object.assign(ke,JSON.parse(localStorage.getItem("mcweb-settings")||"{}"))}catch{}const bc=()=>{try{localStorage.setItem("mcweb-settings",JSON.stringify(ke))}catch{}},Pf=new Set(["storm","dragon","wither","herobrine"]),fu={ravager:[[X.STAR,1],[X.DIAMOND,8],[X.GOLD,10]],evoker:[[X.STAR,1],[X.DIAMOND,6],[X.GOLD,8],[X.PEARL,1]],ghast:[[X.STAR,1],[X.DIAMOND,6],[X.COAL,16]],herobrine:[[X.STAR,3],[X.DIAMOND,16],[X.GOLD,16],[X.PEARL,2]],slimeking:[[X.STAR,1],[X.DIAMOND,6],[X.GOLD,6]],storm:[[X.STAR,1],[V.COMMAND,1],[X.DIAMOND,8],[X.GOLD,12]],dragon:[[X.STAR,2],[X.PEARL,4],[X.DIAMOND,12],[X.GOLD,10]],wither:[[X.STAR,1],[X.DIAMOND,6],[X.GOLD,10]],warden:[[X.STAR,1],[X.DIAMOND,10],[X.GOLD,16]],guardian:[[X.STAR,1],[X.PEARL,1],[X.DIAMOND,6],[X.GOLD,8]]},Ba=["Primera persona","Tercera persona (detrás)","Tercera persona (delante)"],ka=new nf(new F_(new oe(1.005,1.005,1.005)),new mc({color:0}));ka.visible=!1;nn.add(ka);const Lf=(()=>{let i=12345;const t=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296,e=[];for(let n=0;n<6;n++){let s=8,r=8;const a=t()*6.28;for(let o=0;o<12;o++)s+=Math.cos(a+(t()-.5)*1.3),r+=Math.sin(a+(t()-.5)*1.3),e.push([Math.round(s),Math.round(r),o])}return Array.from({length:10},(n,s)=>{const r=document.createElement("canvas");r.width=r.height=16;const a=r.getContext("2d");a.fillStyle="rgba(0,0,0,0.8)";for(const[l,c,h]of e)h<=(s+1)*1.25&&a.fillRect(l,c,1,1);const o=new Bn(r);return o.magFilter=ue,o.minFilter=ue,o.generateMipmaps=!1,o})})(),pr=new Ut(new oe(1.01,1.01,1.01),new Pe({map:Lf[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));pr.visible=!1;nn.add(pr);const $l=new Pe({transparent:!0,side:_n,depthTest:!1,fog:!1}),Ha=new Ut(new yi(.55,.55),$l),mr=new Ut(new oe(.12,.12,.5),new Pe({color:14264191,depthTest:!1,fog:!1})),Sr=new we;Sr.add(Ha,mr);je.add(Sr);Ha.renderOrder=mr.renderOrder=999;let $t="menu",ae="survival",Ta=ke.radius,In=ke.cam|0;const ri=new Map;let Hs,qo=0,Zt,he=null,Be=null,Kl,rn,es=null,Kn=0,ki=0,Ds=0,Yo=0,$o=0,du=2,Ga=null,Ec="Mundo",Tc=0,Df=0,wc=null,gr=!1;const jl=i=>6+i*4;function lr(i){for(ki+=i;ki>=jl(Kn);)ki-=jl(Kn),Kn++,It&&It.toast("¡Nivel "+Kn+"!"),Re("pop")}let Ot,W,_e,ii,an,On,Dn,It,ns=1;const Ze={left:!1,right:!1},Pn={key:"",progress:0};let wn=0,ma=0,cr=0,Va=0,pu=-2,Ko=0,jo=0;function jn(i){const t=ut("overlay");if(t.classList.toggle("ingame",i==="pause"||i==="death"),!i){t.classList.add("hidden");return}t.classList.remove("hidden");for(const e of["menu","pause","death"])ut(e).classList.toggle("hidden",e!==i)}const Re=i=>Wl(i);function Sx(i){for(let t=0;t<600;t+=5)for(let e=0;e<12;e++){const n=Math.round(Math.cos(e/12*Math.PI*2)*t),s=Math.round(Math.sin(e/12*Math.PI*2)*t),r=Oi(n,s,i);if(r.h>hn+3&&r.h<hn+16&&r.biome!=="ocean"&&r.biome!=="mountains")return[n,s]}return[0,0]}function bx(i,t){for(let e=0;e<12;e++)for(let n=-e;n<=e;n++)for(let s=-e;s<=e;s++){if(Math.max(Math.abs(n),Math.abs(s))!==e)continue;const r=i+n,a=t+s,o=Ot.topY(r,a);if(o<hn)continue;const l=Ot.getBlock(r,o,a);if((l===V.GRASS||l===V.SAND||l===V.SNOW)&&!Ot.isSolid(r,o+1,a)&&!Ot.isSolid(r,o+2,a))return new L(r+.5,o+1,a+.5)}return new L(i+.5,Math.max(Ot.topY(i,t),hn)+2,t+.5)}function Zl(i,t,e=null){const n=W.eye,s=W.lookDir();On.spawn(n.x+s.x*.5,n.y-.3,n.z+s.z*.5,i,t,!1);const r=On.list[On.list.length-1];r.vel.set(s.x*5,2.5,s.z*5),r.age=-1.2}function Zo(i,t,e,n,s=1){Re("explode");const r=Math.ceil(n)+1;for(let c=-r;c<=r;c++)for(let h=-r;h<=r;h++)for(let u=-r;u<=r;u++){if(Math.hypot(c,h,u)>n*(.7+Math.random()*.3))continue;const p=Math.floor(i)+c,g=Math.floor(t)+h,_=Math.floor(e)+u,m=Ot.getBlock(p,g,_);if(!(m===Ln||m===V.BEDROCK||xr[m])&&(Ot.setBlock(p,g,_,Ln),ae==="survival"&&Math.random()<.2)){const d=mf(m,null);d&&On.spawn(p+.5,g+.5,_+.5,d[0],d[1])}}Dn.burst(i,t,e,[.5,.5,.5],40,7),Dn.burst(i,t,e,[.9,.5,.1],20,6);const a=W.pos.x-i,o=W.pos.z-e,l=Math.hypot(a,W.pos.y+.9-t,o);l<n*2&&W.damage(Math.round((1-l/(n*2))*22*s),a/(Math.hypot(a,o)||1)*9,o/(Math.hypot(a,o)||1)*9);for(const c of[...an.list])Math.hypot(c.pos.x-i,c.pos.y-t,c.pos.z-e)<n*2&&an.damage(c,14,i,e)}function Jl(i){const t=Ot.getBlock(i.x,i.y,i.z);if(t===Ln||t===V.BEDROCK)return;const e=_e.held();if(Ot.setBlock(i.x,i.y,i.z,Ln),t===V.FURNACE){const n=i.x+","+i.y+","+i.z,s=ri.get(n);if(s){for(const r of s.slots)r&&On.spawn(i.x+.5,i.y+.5,i.z+.5,r.id,r.n);ri.delete(n)}}if((t===V.COAL_ORE||t===V.IRON_ORE||t===V.GOLD_ORE||t===V.DIAMOND_ORE)&&lr(t===V.DIAMOND_ORE?8:3),Dn.blockBreak(i.x,i.y,i.z,t),Re("break"),ae==="survival"){const n=mf(t,e);n&&On.spawn(i.x+.5,i.y+.4,i.z+.5,n[0],n[1]),ss(e)&&Ve[t].hardness>0&&(_e.wearHeld(1)&&(Re("break"),It.toast("¡Se ha roto la herramienta!")),It.renderHotbar())}Ot.getBlock(i.x,i.y+1,i.z)===V.CACTUS&&Ve[t].cactusOk}function Ac(){const i=W.eye,t=W.lookDir(),e=Ot.raycast(i,t,ae==="creative"?7:5.5);if(wn=Math.max(wn,.001),e&&e.id===V.TABLE&&!W.keys.has("ShiftLeft")){qa(3);return}if(e&&e.id===V.FURNACE&&!W.keys.has("ShiftLeft")){const c=e.x+","+e.y+","+e.z;ri.has(c)||ri.set(c,{slots:[null,null,null],burn:0,burnMax:1,cook:0}),qa("furnace",ri.get(c));return}const n=_e.held();if(!n)return;const s=Gi[n.id]&&Gi[n.id].food;if(s){ae==="survival"&&W.food<20&&(W.eat(s),_e.consumeHeld(1),Re("eat"),It.renderHotbar());return}if(!ov(n.id)||!e)return;const r=e.x+e.normal[0],a=e.y+e.normal[1],o=e.z+e.normal[2];if(a<0||a>=Xe)return;const l=Ot.getBlock(r,a,o);if(!(l!==Ln&&!xr[l])&&!(Ua[n.id]&&W.intersectsBlock(r,a,o))&&!(Ua[n.id]&&an.list.some(c=>Math.abs(c.pos.x-(r+.5))<c.hw+.5&&Math.abs(c.pos.z-(o+.5))<c.hw+.5&&c.pos.y<a+1&&c.pos.y+c.h>a))){if(n.id===V.COMMAND){if(he||Be){It.toast("Ya hay una tormenta en curso");return}Ot.setBlock(r,a,o,n.id),Re("place"),ae==="survival"&&(_e.consumeHeld(1),It.renderHotbar()),Px(r,a,o);return}Ot.setBlock(r,a,o,n.id),Re("place"),ae==="survival"&&(_e.consumeHeld(1),It.renderHotbar())}}function Ex(i){const t=Rr[i];ut("bossFill").style.background=`linear-gradient(${t.color}, #25103a)`,ut("bossbar").style.setProperty("--bc",t.color)}function Rc(i,t,e,n){const s=Rr[i],r=new L(t,e,n);he=i==="storm"?new Ov(nn,Kl,r):s.make(nn,Kl,r),Ex(i),Pf.has(i)&&(Zt.set("storm"),Zt.boss=!0,Zt.timer=9999),Re("roar")}function If(i){if(he||Be)return It.toast("Ya hay un jefe activo"),!1;const t=Rr[i],e=W.lookDir(),n=Math.hypot(e.x,e.z)||1,s=e.x/n,r=e.z/n,a=t.dist||(i==="warden"?12:i==="guardian"?16:i==="wither"?20:26),o=W.pos.x+s*a,l=W.pos.z+r*a;let c;if(t.ground){const h=Ot.topY(Math.floor(o),Math.floor(l));c=h>0?h+1:W.pos.y}else c=W.pos.y+(t.up===void 0?10:t.up)+(i==="storm"?10:0);return Rc(i,o,c,l),It.toast("¡"+t.name+" ha sido invocado!"),!0}function Uf(i){const t=W.lookDir(),e=Math.hypot(t.x,t.z)||1;for(let n=6;n<=10;n+=2){const s=Math.floor(W.pos.x+t.x/e*n),r=Math.floor(W.pos.z+t.z/e*n),a=Ot.topY(s,r);if(a>0){an.add(i,s+.5,a+1,r+.5);return}}an.add(i,W.pos.x+3,W.pos.y+1,W.pos.z)}function Tx(){he&&(he.dispose(),he=null),Be=null,Zt.boss=!1,Ds=0,ut("bossbar").classList.add("hidden"),It.toast("Jefe descartado")}function br(i){$t==="play"&&($t="panel",es=i,W.keys.clear(),Ze.left=Ze.right=!1,document.exitPointerLock(),ut(i).classList.remove("hidden"),i==="summon"?wx():Ax())}function Wa(i){es&&(ut(es).classList.add("hidden"),es=null,i?($t="play",kn.requestPointerLock()):($t="pause",jn("pause")))}function wx(){ut("bossCards").innerHTML=qv.map(i=>{const t=Rr[i],e=rn.bosses.has(i);return`<div class="card" style="border-left:6px solid ${t.color}"><h4><span>${t.icon} ${t.name}</span><span class="tag">${t.hp} HP</span></h4><p>${t.desc}</p><button class="btn" data-boss="${i}">${e?"✔ ":""}Invocar</button></div>`}).join(""),ut("mobBtns").innerHTML=Object.keys(Oa).map(i=>`<button class="btn" data-mob="${i}">${Oa[i].name}</button>`).join("")}function Ax(){ut("questTitle").textContent=`Misiones — ${rn.completed()}/${rn.total()} completadas`;let i="",t="";for(const e of ws){e.group!==t&&(t=e.group,i+=`<div class="grp">${t.toUpperCase()}</div>`);const n=rn.done[e.id],s=rn.progress[e.id]||0,r=e.reward.map(([a,o])=>`${o}× ${ja(a).name}`).join(", ");i+=`<div class="q ${n?"done":""}"><span class="ck">${n?"✔":"○"}</span><div><b>${e.title}</b>${e.desc}<div class="bar"><i style="width:${s/e.n*100}%"></i></div></div><div class="rw">${s}/${e.n}<br>${r}<br>+${e.xp} XP</div></div>`}ut("questList").innerHTML=i}ut("bossCards").addEventListener("click",i=>{const t=i.target.closest("[data-boss]");t&&$t==="panel"&&(Wa(!0),If(t.dataset.boss))});ut("mobBtns").addEventListener("click",i=>{const t=i.target.closest("[data-mob]");t&&$t==="panel"&&(Uf(t.dataset.mob),It.toast(Oa[t.dataset.mob].name+" invocado"))});ut("bDespawn").onclick=()=>{Tx()};const Ae=ut("minimap").getContext("2d"),mu=Ae.createImageData(64,64),Nf={};for(const i of Object.values(Ve)){const t=of(i.tiles[0]);Nf[i.id]=[t[0]*255,t[1]*255,t[2]*255]}function Rx(){const i=Math.floor(W.pos.x),t=Math.floor(W.pos.z),e=mu.data;for(let s=0;s<64;s++)for(let r=0;r<64;r++){const a=i+r-32,o=t+s-32,l=Ot.topY(a,o),c=(s*64+r)*4;let h;if(l<0)h=[20,20,30];else if(l<hn&&Ot.getBlock(a,hn,o)===V.WATER)h=[38+l,84+l,190];else{const u=Nf[Ot.getBlock(a,l,o)]||[90,90,90],f=Math.max(.6,Math.min(1.25,.9+(l-W.pos.y)*.012));h=[u[0]*f,u[1]*f,u[2]*f]}e[c]=h[0],e[c+1]=h[1],e[c+2]=h[2],e[c+3]=255}Ae.putImageData(mu,0,0),Ae.imageSmoothingEnabled=!1,Ae.drawImage(ut("minimap"),0,0,64,64,0,0,128,128);const n=(s,r,a,o)=>{const l=(s-i+32)*2,c=(r-t+32)*2;l<2||c<2||l>126||c>126||(Ae.fillStyle=a,Ae.fillRect(l-o,c-o,o*2,o*2))};for(const s of an.list)n(s.pos.x,s.pos.z,s.def.hostile?"#ff4040":"#ffffff",1.5);if(he){const s=3+Math.sin(performance.now()/150)*1.2,r=he.pos.x,a=he.pos.z,o=Math.max(6,Math.min(122,(r-i+32)*2)),l=Math.max(6,Math.min(122,(a-t+32)*2));Ae.fillStyle="#d050ff",Ae.fillRect(o-s,l-s,s*2,s*2),Ae.strokeStyle="#fff",Ae.strokeRect(o-s,l-s,s*2,s*2)}Ae.save(),Ae.translate(64+(W.pos.x-i)*2,64+(W.pos.z-t)*2),Ae.rotate(-W.yaw+Math.PI),Ae.fillStyle="#fff",Ae.strokeStyle="#000",Ae.beginPath(),Ae.moveTo(0,6),Ae.lineTo(4.5,-4.5),Ae.lineTo(0,-2),Ae.lineTo(-4.5,-4.5),Ae.closePath(),Ae.fill(),Ae.stroke(),Ae.restore()}function Cx(){ut("tracker").innerHTML=rn.active(3).map(i=>`<div class="qt"><b>${i.title}</b>${i.desc} (${rn.progress[i.id]||0}/${i.n})<div class="qb"><i style="width:${(rn.progress[i.id]||0)/i.n*100}%"></i></div></div>`).join("")}function Px(i,t,e){Be={x:i,y:t,z:e,t:5,s:0},Re("roar"),Zt.set("storm"),Zt.boss=!0,It.toast("El bloque de comandos late… ¡aléjate!")}function Lx(i){if(Be.t-=i,Be.s-=i,Zt.timer=9999,Be.s<=0&&(Be.s=.9,Zt.strike(W,!1,{x:Be.x,z:Be.z}),Dn.burst(Be.x+.5,Be.y+1,Be.z+.5,[.7,.3,1],20,5)),Be.t<=0){const t=Be;Be=null,Ot.setBlock(t.x,t.y,t.z,Ln),Rc("storm",t.x+.5,t.y+14,t.z+.5),Re("roar"),It.toast("¡LA TORMENTA WITHER HA DESPERTADO!")}}function Dx(){const i=W.eye,t=W.lookDir(),e=he&&he.raycast(i,t,7),n=Ot.raycast(i,t,7);if(e&&(!n||e.dist<n.dist)){const l=ss(_e.held());return he.hit(ae==="creative"?12:l?l.dmg:1,e.crit,e),Re("hit"),e.crit&&It.toast("¡Golpe crítico al bloque de comandos!"),ae==="survival"&&l&&(_e.wearHeld(1),It.renderHotbar()),!0}const s=an.raycast(i,t,3.6),r=Ot.raycast(i,t,3.6);if(!s||r&&r.dist<s.dist)return!1;const a=ss(_e.held()),o=ae==="creative"?20:a?a.dmg:1;return an.damage(s.mob,o,W.pos.x,W.pos.z),Dn.burst(s.mob.pos.x,s.mob.pos.y+s.mob.h*.6,s.mob.pos.z,[.8,.1,.1],6,2.5),ae==="survival"&&a&&(_e.wearHeld(1),It.renderHotbar()),!0}function Ix(i){const t=W.eye,e=W.lookDir(),n=Ot.raycast(t,e,ae==="creative"?7:5.5);ka.visible=!!n,n&&ka.position.set(n.x+.5,n.y+.5,n.z+.5),ma=Math.max(0,ma-i),cr=Math.max(0,cr-i),Va=Math.max(0,Va-i);let s=0;if(Ze.left&&n){const r=n.x+","+n.y+","+n.z;if(r!==Pn.key&&(Pn.key=r,Pn.progress=0),wn=wn>0?wn:.001,ae==="creative")ma<=0&&(Jl(n),ma=.2);else{const a=cv(n.id,_e.held())*(W.effects.fatigue>0?3:1);Pn.progress+=i/a,s=Math.min(1,Pn.progress),Math.floor(Pn.progress*6)!==Math.floor((Pn.progress-i/a)*6)&&Re("hit"),Pn.progress>=1&&(Jl(n),Pn.key="",Pn.progress=0,s=0)}pr.position.set(n.x+.5,n.y+.5,n.z+.5)}else Pn.key="",Pn.progress=0;pr.visible=s>0,s>0&&(pr.material.map=Lf[Math.min(9,Math.floor(s*10))]),ut("breakbar").classList.toggle("hidden",s<=0),ut("breakbar").firstElementChild.style.width=s*100+"%",Ze.right&&cr<=0&&(cr=.22,Ac())}function Ux(i){for(const t of ri.values()){const[e,n,s]=t.slots,r=e&&av[e.id],a=r&&(!s||s.id===r[0]&&s.n+r[1]<=mi(r[0]));t.burn>0&&(t.burn-=i),a?(t.burn<=0&&n&&Zh[n.id]&&(t.burn=t.burnMax=Zh[n.id],n.n--,n.n<=0&&(t.slots[1]=null)),t.burn>0?(t.cook+=i,t.cook>=ff&&(t.cook=0,e.n--,e.n<=0&&(t.slots[0]=null),s?s.n+=r[1]:t.slots[2]={id:r[0],n:r[1],d:0})):t.cook=Math.max(0,t.cook-i*2)):t.cook=0}}function Xa(i){In=i,ke.cam=i,bc(),ut("bCam").textContent="Cámara: "+Ba[i],It&&It.toast("Cámara: "+Ba[i])}function Nx(){if(W.dead){Hs.group.visible=!1;return}if(Hs.group.visible=In!==0,Sr.visible=In===0,In===0)return;const i=W.eye,t=W.lookDir().multiplyScalar(In===1?-1:1),e=Ot.raycast(i,t,4.2),n=e?Math.max(.3,e.dist-.3):4.2;je.position.copy(i).addScaledVector(t,n),In===1?je.rotation.set(W.pitch,W.yaw,0,"YXZ"):je.rotation.set(-W.pitch,W.yaw+Math.PI,0,"YXZ")}function Of(i){const t=_e.held(),e=t?t.id:0;Hs.setHeld(e),e!==pu&&(pu=e,e&&($l.map=Sc(e),$l.needsUpdate=!0),Ha.visible=!!e,mr.visible=!e,Ha.scale.setScalar(df(e)?.7:.6)),wn>0&&(wn+=i*3.5,wn>=1&&(wn=Ze.left?.001:0));const n=Math.sin(Math.min(1,wn)*Math.PI);Sr.position.set(.5-n*.12,-.5+n*.08-Math.sin(performance.now()/400)*.004,-.85-n*.1),Sr.rotation.set(-n*.9,-.35,-n*.2),e||(mr.position.set(0,-.1,-.1),mr.rotation.set(.4,0,0))}function qa(i,t=null){$t==="play"&&($t="inv",W.keys.clear(),Ze.left=Ze.right=!1,document.exitPointerLock(),It.open(i,t))}function gu(i){It.close(),i?($t="play",kn.requestPointerLock()):($t="pause",jn("pause"))}function Cc(){It.renderHotbar();const i=_e.held();i&&It.toast(ja(i.id).name)}function Ox(){Ds=0,he&&(he.dispose(),he=null,Zt.boss=!1,Zt.set("rain"),ut("bossbar").classList.add("hidden"),It.toast("La tormenta se retira…")),Be=null,$t="dead",Re("die"),W.keys.clear(),Ze.left=Ze.right=!1;for(let i=0;i<36;i++){const t=_e.slots[i];t&&(On.spawn(W.pos.x,W.pos.y+1,W.pos.z,t.id,t.n),_e.slots[i]=null)}It.renderHotbar(),document.exitPointerLock(),jn("death")}async function as(){if(!Ot||!Ga)return!1;const i={v:2,gen:2,seed:ns,mode:ae,time:ii.time,pos:W.pos.toArray(),yaw:W.yaw,pitch:W.pitch,hp:W.hp,food:W.food,spawn:W.spawn.toArray(),inv:_e.toJSON(),furnaces:[...ri.entries()],weather:Zt.toJSON(),quests:rn.toJSON(),xp:{l:Kn,p:ki}},t=[...Ot.unsaved].filter(n=>Ot.chunks.has(n)).map(n=>[n,new Uint8Array(Ot.chunks.get(n))]),e=await bf(Ga,i,t,{name:Ec,mode:ae,seed:ns,created:Df,played:Math.floor(Tc),level:Kn,thumb:wc});return e&&Ot.unsaved.clear(),e}function Fx(){try{const i=document.createElement("canvas");i.width=160,i.height=90,i.getContext("2d").drawImage(kn,0,0,160,90),wc=i.toDataURL("image/jpeg",.6)}catch{}}async function zx(){gr=!0,await new Promise(t=>setTimeout(t,120));const i=await as();return It.toast(i?"💾 Partida guardada":"⚠ No se pudo guardar"),i}async function _u({id:i,name:t,seed:e,mode:n,saved:s,meta:r,created:a,played:o}){$t="loading",ae=n,ns=e,Ga=i,Ec=t||"Mundo",Df=a||Date.now(),Tc=o||0,wc=null,jn("menu"),ut("msg").textContent="Generando mundo…",ut("menuBody").classList.add("hidden"),ri.clear(),Ot=new Tv(nn,ks,ns,s),_e=new Qv,W=new Jv(Ot,je),W.mode=ae,Hs||(Hs=new xv(nn)),ii=new lx(nn,je,ks),Cf(),Zt=new yv(nn,{world:()=>Ot,sky:()=>ii,sound:(h,u)=>Wl(h,u),burst:(h,u,f)=>{Dn.burst(h,u,f,[1,1,.8],24,6),Dn.burst(h,u,f,[.3,.3,.35],14,4)},hurtPlayer:h=>W.damage(h),strikeMobs:(h,u)=>{for(const f of[...an.list])Math.hypot(f.pos.x-h,f.pos.z-u)<3.5&&an.damage(f,12,h,u)}}),Kl={world:()=>Ot,explode:(h,u,f,p,g)=>Zo(h,u,f,p,g),toast:h=>It.toast(h),sound:(h,u)=>Wl(h,u),burst:(h,u,f,p,g,_)=>Dn.burst(h,u,f,p,g,_),hurtPlayer:(h,u,f)=>W.damage(h,u,f),strikeNear:(h,u)=>Zt.strike(W,!1,{x:h,z:u}),minions:()=>an.list.filter(h=>h.def.hostile).length,effect:(h,u)=>{ae==="survival"&&(W.effects[h]=Math.max(W.effects[h],u))},darkness:h=>{Ds=h},player:()=>W,spawnMinion:h=>{for(let u=0;u<6;u++){const f=Math.random()*Math.PI*2,p=10+Math.random()*8,g=Math.floor(W.pos.x+Math.cos(f)*p),_=Math.floor(W.pos.z+Math.sin(f)*p),m=Ot.topY(g,_);if(m>0&&!Ot.isSolid(g,m+1,_)){an.add(h||(Math.random()<.6?"zombie":"creeper"),g+.5,m+1,_+.5);return}}},loot:(h,u,f,p="storm")=>{for(const[g,_]of fu[p]||fu.storm)On.spawn(h,u,f,g,_)},done:()=>{const h=he?he.type:"storm";rn.event("boss",h),lr(100),Re("craft"),he=null,Zt.boss=!1,Ds=0,Zt.state==="storm"&&Zt.set("rain"),ut("bossbar").classList.add("hidden")}},he=null,Be=null,es=null,Ds=0,rn=new Yv({reward:h=>{for(const[u,f]of h){const p=_e.add(u,f);p&&Zl(u,p)}It.renderHotbar()},toast:h=>It.toast(h),xp:lr,sound:Re}),On=new Sv(nn,Ot),Dn=new bv(nn,Ot),an=new Rv(nn,Ot,{killed:(h,u)=>{rn.event("kill",h),lr(u)},tp:(h,u,f)=>{Dn.burst(h,u,f,[.7,.2,1],14,3),Re("pop")},hurtPlayer:(h,u,f)=>W.damage(h,u,f),explode:Zo,drop:(h,u,f,p,g)=>On.spawn(h,u,f,p,g),sound:Re,puff:(h,u,f)=>Dn.burst(h,u,f,[.9,.9,.9],12,3)}),It=new cx({inv:_e,player:W,getMode:()=>ae,dropItem:Zl,sound:Re,onSelect:Cc,onCraft:(h,u)=>rn.event("craft",h,u)}),Kn=0,ki=0,W.events.onHurt=()=>{Re("hurt");const h=ut("vignette");h.classList.add("hurt"),setTimeout(()=>h.classList.remove("hurt"),120)},W.events.onStep=()=>Re("step"),W.events.onLand=h=>Re(h>3?"hurt":"place"),W.events.onSplash=()=>Re("splash"),W.events.onDeath=Ox;let l,c;if(r?(Zt.load(r.weather),rn.load(r.quests),r.xp&&(Kn=r.xp.l,ki=r.xp.p),_e.load(r.inv),(r.furnaces||[]).forEach(([h,u])=>ri.set(h,u)),ii.time=r.time,W.hp=r.hp,W.food=r.food,W.yaw=r.yaw,W.pitch=r.pitch,W.spawn.fromArray(r.spawn),W.pos.fromArray(r.pos),l=Math.floor(r.pos[0]),c=Math.floor(r.pos[2])):([l,c]=Sx(ns),W.pos.set(l+.5,70,c+.5)),await new Promise(h=>{const u=()=>{const f=Ot.update(l,c,3,10);ut("msg").textContent="Generando mundo… "+Math.max(0,100-f*2)+"%",f>0?setTimeout(u,0):h()};u()}),r)W.vel.set(0,0,0);else{const h=bx(l,c);W.pos.copy(h),W.spawn.copy(h)}It.renderHotbar(),It.renderStats(),Of(0),Xa(In),window.__game={world:Ot,player:W,inv:_e,sky:ii,mobs:an,drops:On,ui:It,camera:je,scene:nn,renderer:Nn,get mode(){return ae},set mode(h){ae=h,W.mode=h},get state(){return $t},set state(h){$t=h},explode:Zo,saveGame:as,openInventory:qa,mouse:Ze,useItem:Ac,breakBlock:Jl,furnaces:ri,setCam:Xa,get weather(){return Zt},get boss(){return he},summon:(h,u,f)=>Rc("storm",h,u,f),summonBoss:If,summonMob:Uf,get quests(){return rn},openPanel:br,closePanel:Wa,addXp:lr,terrainInfo:Oi,get xp(){return[Kn,ki]}},$t="play",jn(null),kn.requestPointerLock(),setTimeout(()=>{document.pointerLockElement!==kn&&$t==="play"&&($t="pause",jn("pause"))},1500)}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===kn?($t==="pause"||$t==="play")&&($t="play",jn(null)):(W&&W.keys.clear(),Ze.left=Ze.right=!1,$t==="play"&&($t="pause",jn("pause")))});document.addEventListener("mousemove",i=>{$t!=="play"||document.pointerLockElement!==kn||(W.yaw-=i.movementX*.0022*ke.sens,W.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,W.pitch-i.movementY*.0022*ke.sens)))});document.addEventListener("keydown",i=>{if(yr(),$t==="panel"){i.code==="Escape"?Wa(!1):(i.code==="KeyB"&&es==="summon"||i.code==="KeyM"&&es==="quests")&&Wa(!0);return}if($t==="inv"){i.code==="KeyE"?(i.preventDefault(),gu(!0)):i.code==="Escape"&&gu(!1);return}if($t==="play"){if(i.code.startsWith("Digit")){const t=+i.code.slice(5)-1;t>=0&&t<9&&(_e.selected=t,Cc());return}switch(i.code){case"KeyE":qa(2);return;case"KeyB":br("summon");return;case"KeyM":br("quests");return;case"F3":i.preventDefault(),ut("info").classList.toggle("hidden");return;case"KeyT":if(!i.repeat){const t=Zt.cycle();It.toast("Clima: "+Gl[t])}return;case"KeyV":case"F5":i.preventDefault(),i.repeat||Xa((In+1)%3);return;case"KeyF":ae==="creative"&&!i.repeat&&(W.flying=!W.flying,W.vel.y=0,It.toast(W.flying?"Vuelo activado":"Vuelo desactivado"));return;case"KeyG":i.repeat||(ae=ae==="creative"?"survival":"creative",W.mode=ae,ae==="survival"&&(W.flying=!1),It.renderStats(),It.toast("Modo "+(ae==="creative"?"creativo":"supervivencia")));return;case"KeyQ":if(ae==="survival"&&!i.repeat){const t=_e.held();t&&(Zl(t.id,1),_e.consumeHeld(1),It.renderHotbar());return}break}(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),W.keys.add(i.code)}});document.addEventListener("keyup",i=>W&&W.keys.delete(i.code));document.addEventListener("wheel",i=>{$t==="play"&&(_e.selected=(_e.selected+Math.sign(i.deltaY)+9)%9,Cc())});kn.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("mousedown",i=>{$t!=="play"||document.pointerLockElement!==kn||(i.button===0?(Ze.left=!0,wn=wn||.001,Va<=0&&Dx()&&(Va=.4,Ze.left=!1)):i.button===2&&(Ze.right=!0,cr=.22,Ac()))});document.addEventListener("mouseup",i=>{i.button===0&&(Ze.left=!1),i.button===2&&(Ze.right=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&$t!=="menu"&&as()});addEventListener("beforeunload",()=>{Ot&&$t!=="menu"&&as()});function Pc(){Nn.setSize(innerWidth,innerHeight,!1),bn&&bn.setSize(innerWidth,innerHeight),je.aspect=innerWidth/innerHeight,je.updateProjectionMatrix()}addEventListener("resize",Pc);Pc();ut("bResume").onclick=()=>{yr(),kn.requestPointerLock()};ut("bSave").onclick=async()=>{gr=!0,await new Promise(i=>setTimeout(i,120)),await as(),location.reload()};ut("bSaveNow").onclick=async()=>{await zx(),ut("bSaveNow").textContent="💾 Guardado ✔",setTimeout(()=>ut("bSaveNow").textContent="💾 Guardar partida",1500)};ut("bExport").onclick=async()=>{await as();const i=await Tf(Ga),t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=Ec.replace(/[^\w\-]+/g,"_")+".mcw",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3)};ut("bRespawn").onclick=()=>{yr(),W.respawn(),$t="play",jn(null),It.renderStats(),kn.requestPointerLock()};ut("bCam").onclick=()=>Xa((In+1)%3);ut("bQuality").onclick=()=>{ke.quality=(ke.quality+1)%Yl.length,bc(),Cf(),It&&It.toast("Gráficos: "+Yl[ke.quality].name)};ut("bPSummon").onclick=()=>{jn(null),$t="play",br("summon")};ut("bPQuests").onclick=()=>{jn(null),$t="play",br("quests")};const Qa=(i,t,e,n,s)=>{const r=ut(i),a=ut(t);r.value=ke[e],a.textContent=n(ke[e]),s&&s(ke[e]),r.oninput=o=>{ke[e]=+o.target.value,a.textContent=n(ke[e]),s&&s(ke[e]),bc()}};Qa("rRadius","vRadius","radius",i=>i,i=>Ta=i);Qa("rFov","vFov","fov",i=>i);Qa("rSens","vSens","sens",i=>i.toFixed(1));Qa("rVol","vVol","vol",i=>Math.round(i*100),i=>hx(i));ut("bCam").textContent="Cámara: "+Ba[In];let vu=performance.now(),ga=0,Jo=0,Qo=0;function Ff(i){requestAnimationFrame(Ff);const t=Math.min(.1,(i-vu)/1e3);if(vu=i,!(!Ot||$t==="menu"||$t==="loading")){if(ga+=t,Jo++,ga>=.5&&(Qo=Math.round(Jo/ga),ga=0,Jo=0),$t!=="pause"){W.update(t),Hs.update(t,W,wn),Nx(),Ux(t);const e=Math.floor(W.pos.x),n=Math.floor(W.pos.z),s=eu(e,n,ns)==="snow";Zt.update(t,W,je,s,W.headUnder);const r=Ot.skyLit(e,Math.floor(W.pos.y+1.6),n);if(W.wind.x=Zt.wind.x*1.4*r*(Zt.state==="clear"?0:1),W.wind.z=Zt.wind.z*1.4*r*(Zt.state==="clear"?0:1),za.uTime.value+=t,za.uWind.value=.25+Zt.wind.s*2.2,fx(Zt.intensity*(.25+.75*r)*(W.headUnder?.2:1),Zt.wind.s*(.3+.7*r)*(Zt.state==="clear"?.25:1),Zt.t*.4),ii.update(t,je.position,Ta*16,W.headUnder,Zt.wind),du=Ot.update(W.pos.x,W.pos.z,Ta,du)>40?4:2,W.push.x=W.push.y=W.push.z=0,Be&&Lx(t),he&&(Pf.has(he.type)&&(Zt.timer=9999,Zt.boss=!0),he.update(t,W,Ot),he&&(ut("bossbar").classList.remove("hidden"),ut("bossFill").style.width=Math.max(0,he.hp/he.maxHp*100)+"%",ut("bossPhase").textContent="Fase "+he.phase,ut("bossName").firstChild.nodeValue!==he.name+" "&&(ut("bossName").firstChild.nodeValue=he.name+" "))),an.update(t,W,ae,ii.daylight,Ta),On.update(t,W,_e,o=>{Re("pop"),It.renderHotbar(),rn.event("collect",o.id,o.n)}),Dn.update(t),$t==="play"&&Ix(t),Of(t),ut("water").classList.toggle("hidden",!W.headUnder),je.fov+=(ke.fov+(W.keys.has("ShiftLeft")&&W.keys.has("KeyW")?7:0)-je.fov)*Math.min(1,t*8),It.isOpen&&It.furnace&&(It.furnaceBars(),qo-=t,qo<=0&&(qo=.5,It.render())),je.updateProjectionMatrix(),jo-=t,jo<=0){jo=.2,It.renderStats();const o=(ii.time*24+6)%24,l=Math.floor(o),c=Math.floor((o-l)*60);ut("info").textContent=`${Qo} FPS · ${ae==="creative"?"Creativo":"Supervivencia"}
XYZ ${W.pos.x.toFixed(1)} ${W.pos.y.toFixed(1)} ${W.pos.z.toFixed(1)}
Bioma: ${eu(Math.floor(W.pos.x),Math.floor(W.pos.z),ns)} · ${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")}
Mobs: ${an.list.length} · Clima: ${Gl[Zt.state]}${s?" (nieve)":""} · Viento ${(Zt.wind.s*20).toFixed(0)} km/h${W.flying?" · [VUELO]":""}`,ut("cam").textContent="📷 "+Ba[In]+"  [V]",ut("mmInfo").textContent=`${Math.floor(W.pos.x)}, ${Math.floor(W.pos.y)}, ${Math.floor(W.pos.z)}
${String(l).padStart(2,"0")}:${String(c).padStart(2,"0")} · ${Gl[Zt.state]}
📷 ${["1ª persona","3ª detrás","3ª delante"][In]} · ${Qo} FPS`,ut("xpFill").style.width=ki/jl(Kn)*100+"%",ut("xpLvl").textContent=Kn,ut("xp").style.visibility=ae==="survival"?"visible":"hidden";const h=[];W.effects.poison>0&&h.push(`<span style="border-color:#7a2">☠ Veneno ${Math.ceil(W.effects.poison)}s</span>`),W.effects.fatigue>0&&h.push(`<span style="border-color:#6cf">⛏ Fatiga ${Math.ceil(W.effects.fatigue)}s</span>`),W.effects.burn>0&&h.push(`<span style="border-color:#f80">🔥 Fuego ${Math.ceil(W.effects.burn)}s</span>`),ut("effects").innerHTML=h.join(""),ut("darkness").style.opacity=Ds}Yo-=t,Yo<=0&&(Yo=.4,Rx()),$o-=t,$o<=0&&($o=.5,Cx()),Tc+=t,Ko+=t,Ko>25&&(Ko=0,gr=!0)}Rf&&(Af.uniforms.uTime.value=i%1e4/1e3),bn?bn.render(t):Nn.render(nn,je),gr&&(gr=!1,Fx(),as())}}requestAnimationFrame(Ff);(async function(){const t=a=>(a>=3600?Math.floor(a/3600)+" h ":"")+Math.floor(a%3600/60)+" min",e=a=>{let o=7;for(const l of a)o=Math.imul(o,31)+l.charCodeAt(0)|0;return Math.abs(o)%9e5+1};async function n(){const a=await Mf();return ut("worldsBox").classList.toggle("hidden",!a.length),ut("worldList").innerHTML=a.map(o=>`<div class="wcard" data-id="${o.id}"><img src="${o.thumb||""}" alt=""><div><b>${(o.name||"Mundo").replace(/</g,"&lt;")}</b><small>${o.mode==="creative"?"Creativo":"Supervivencia"} · nivel ${o.level||0} · ${t(o.played||0)} · ${new Date(o.updated).toLocaleString()}</small></div><div class="wb"><button class="play" data-act="play">▶ Jugar</button><button data-act="export" title="Exportar">⬇</button><button data-act="rename" title="Renombrar">✎</button><button data-act="del" title="Borrar">🗑</button></div></div>`).join(""),a}let s=await n();ut("msg").textContent=s.length?"Elige un mundo o crea uno nuevo":"Elige cómo jugar";const r=a=>{yr();const o=ut("wName").value.trim()||`Mundo ${s.length+1}`,l=ut("wSeed").value.trim(),c=l?/^\d+$/.test(l)?Number(l)%9e5+1:e(l):1+Math.floor(Math.random()*9e5);_u({id:Sf(),name:o,seed:c,mode:a,saved:new Map,meta:null})};ut("bSurvival").onclick=()=>r("survival"),ut("bCreative").onclick=()=>r("creative"),ut("worldList").addEventListener("click",async a=>{const o=a.target.closest("button"),l=a.target.closest(".wcard");if(!o||!l)return;const c=l.dataset.id,h=s.find(u=>u.id===c);if(o.dataset.act==="play"){yr(),ut("msg").textContent="Cargando mundo…";const u=await yf(c);if(!u.meta){ut("msg").textContent="No se pudo leer este mundo";return}_u({id:c,name:h.name,seed:u.meta.seed,mode:u.meta.mode,saved:u.chunks,meta:u.meta,created:h.created,played:h.played})}else if(o.dataset.act==="del")confirm(`¿Borrar "${h.name}" para siempre?`)&&(await mx(c),s=await n());else if(o.dataset.act==="rename"){const u=prompt("Nuevo nombre",h.name);u&&u.trim()&&(await gx(c,u.trim().slice(0,28)),s=await n())}else if(o.dataset.act==="export"){const u=await Tf(c),f=document.createElement("a");f.href=URL.createObjectURL(u),f.download=(h.name||"mundo").replace(/[^\w\-]+/g,"_")+".mcw",f.click(),setTimeout(()=>URL.revokeObjectURL(f.href),4e3)}}),ut("bImport").onclick=()=>ut("fImport").click(),ut("fImport").onchange=async a=>{const o=a.target.files[0];if(o){try{await xx(o),s=await n(),ut("msg").textContent="✔ Partida importada"}catch{ut("msg").textContent="⚠ Archivo no válido"}a.target.value=""}},window.__menu={refresh:async()=>s=await n()}})();
