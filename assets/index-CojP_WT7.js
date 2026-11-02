(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const pc="170",cd=0,eh=1,hd=2,Ou=1,Fu=2,_i=3,qi=0,mn=1,yn=2,Si=0,Us=1,wr=2,nh=3,ih=4,ud=5,ss=100,fd=101,dd=102,pd=103,md=104,gd=200,_d=201,vd=202,xd=203,fl=204,dl=205,Md=206,yd=207,Sd=208,bd=209,Ed=210,wd=211,Td=212,Ad=213,Rd=214,pl=0,ml=1,gl=2,Bs=3,_l=4,vl=5,xl=6,Ml=7,mc=0,Cd=1,Ld=2,Hi=0,zu=1,Bu=2,ku=3,gc=4,Pd=5,Hu=6,Gu=7,Vu=300,ks=301,Hs=302,yl=303,Sl=304,ra=306,Bo=1e3,os=1001,bl=1002,_e=1003,Dd=1004,Vr=1005,kn=1006,ma=1007,xi=1008,Ti=1009,Wu=1010,Xu=1011,Tr=1012,_c=1013,ls=1014,Mi=1015,ai=1016,vc=1017,xc=1018,Gs=1020,qu=35902,Yu=1021,Ku=1022,Jn=1023,$u=1024,ju=1025,Ns=1026,Vs=1027,Zu=1028,Mc=1029,Ju=1030,yc=1031,Sc=1033,Co=33776,Lo=33777,Po=33778,Do=33779,El=35840,wl=35841,Tl=35842,Al=35843,Rl=36196,Cl=37492,Ll=37496,Pl=37808,Dl=37809,Il=37810,Ul=37811,Nl=37812,Ol=37813,Fl=37814,zl=37815,Bl=37816,kl=37817,Hl=37818,Gl=37819,Vl=37820,Wl=37821,Io=36492,Xl=36494,ql=36495,Qu=36283,Yl=36284,Kl=36285,$l=36286,Id=3200,Ud=3201,bc=0,Nd=1,Bi="",nn="srgb",Ks="srgb-linear",oa="linear",ge="srgb",ds=7680,sh=519,Od=512,Fd=513,zd=514,tf=515,Bd=516,kd=517,Hd=518,Gd=519,jl=35044,rh="300 es",yi=2e3,ko=2001;class $s{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const n=this._listeners;return n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const n=this._listeners[t.type];if(n!==void 0){t.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const an=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Uo=Math.PI/180,Zl=180/Math.PI;function Gi(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(an[i&255]+an[i>>8&255]+an[i>>16&255]+an[i>>24&255]+"-"+an[t&255]+an[t>>8&255]+"-"+an[t>>16&15|64]+an[t>>24&255]+"-"+an[e&63|128]+an[e>>8&255]+"-"+an[e>>16&255]+an[e>>24&255]+an[n&255]+an[n>>8&255]+an[n>>16&255]+an[n>>24&255]).toLowerCase()}function Mn(i,t,e){return Math.max(t,Math.min(e,i))}function Vd(i,t){return(i%t+t)%t}function ga(i,t,e){return(1-e)*i+e*t}function oi(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function xe(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}class Dt{constructor(t=0,e=0){Dt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6],this.y=s[1]*e+s[4]*n+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*n-a*s+t.x,this.y=r*s+a*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,n,s,r,a,l,o,c){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,c)}set(t,e,n,s,r,a,l,o,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=l,u[3]=e,u[4]=r,u[5]=o,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[3],o=n[6],c=n[1],u=n[4],h=n[7],f=n[2],d=n[5],g=n[8],_=s[0],m=s[3],p=s[6],b=s[1],S=s[4],v=s[7],L=s[2],T=s[5],w=s[8];return r[0]=a*_+l*b+o*L,r[3]=a*m+l*S+o*T,r[6]=a*p+l*v+o*w,r[1]=c*_+u*b+h*L,r[4]=c*m+u*S+h*T,r[7]=c*p+u*v+h*w,r[2]=f*_+d*b+g*L,r[5]=f*m+d*S+g*T,r[8]=f*p+d*v+g*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],u=t[8];return e*a*u-e*l*c-n*r*u+n*l*o+s*r*c-s*a*o}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],u=t[8],h=u*a-l*c,f=l*o-u*r,d=c*r-a*o,g=e*h+n*f+s*d;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return t[0]=h*_,t[1]=(s*c-u*n)*_,t[2]=(l*n-s*a)*_,t[3]=f*_,t[4]=(u*e-s*o)*_,t[5]=(s*r-l*e)*_,t[6]=d*_,t[7]=(n*o-c*e)*_,t[8]=(a*e-n*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,s,r,a,l){const o=Math.cos(r),c=Math.sin(r);return this.set(n*o,n*c,-n*(o*a+c*l)+a+t,-s*c,s*o,-s*(-c*a+o*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<9;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Yt;function ef(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function Ho(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Wd(){const i=Ho("canvas");return i.style.display="block",i}const oh={};function pr(i){i in oh||(oh[i]=!0,console.warn(i))}function Xd(i,t,e){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:n()}}setTimeout(r,e)})}function qd(i){const t=i.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function Yd(i){const t=i.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ee={enabled:!0,workingColorSpace:Ks,spaces:{},convert:function(i,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ge&&(i.r=bi(i.r),i.g=bi(i.g),i.b=bi(i.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(i.applyMatrix3(this.spaces[t].toXYZ),i.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ge&&(i.r=Os(i.r),i.g=Os(i.g),i.b=Os(i.b))),i},fromWorkingColorSpace:function(i,t){return this.convert(i,this.workingColorSpace,t)},toWorkingColorSpace:function(i,t){return this.convert(i,t,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===Bi?oa:this.spaces[i].transfer},getLuminanceCoefficients:function(i,t=this.workingColorSpace){return i.fromArray(this.spaces[t].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,t,e){return i.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace}};function bi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Os(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const ah=[.64,.33,.3,.6,.15,.06],lh=[.2126,.7152,.0722],ch=[.3127,.329],hh=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),uh=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ee.define({[Ks]:{primaries:ah,whitePoint:ch,transfer:oa,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:lh,workingColorSpaceConfig:{unpackColorSpace:nn},outputColorSpaceConfig:{drawingBufferColorSpace:nn}},[nn]:{primaries:ah,whitePoint:ch,transfer:ge,toXYZ:hh,fromXYZ:uh,luminanceCoefficients:lh,outputColorSpaceConfig:{drawingBufferColorSpace:nn}}});let ps;class Kd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{ps===void 0&&(ps=Ho("canvas")),ps.width=t.width,ps.height=t.height;const n=ps.getContext("2d");t instanceof ImageData?n.putImageData(t,0,0):n.drawImage(t,0,0,t.width,t.height),e=ps}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Ho("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const s=n.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=bi(r[a]/255)*255;return n.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(bi(e[n]/255)*255):e[n]=bi(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let $d=0;class nf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=Gi(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);n.url=r}return e||(t.images[this.uuid]=n),n}}function va(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Kd.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let jd=0;class gn extends $s{constructor(t=gn.DEFAULT_IMAGE,e=gn.DEFAULT_MAPPING,n=os,s=os,r=kn,a=xi,l=Jn,o=Ti,c=gn.DEFAULT_ANISOTROPY,u=Bi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:jd++}),this.uuid=Gi(),this.name="",this.source=new nf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=l,this.internalFormat=null,this.type=o,this.offset=new Dt(0,0),this.repeat=new Dt(1,1),this.center=new Dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Vu)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Bo:t.x=t.x-Math.floor(t.x);break;case os:t.x=t.x<0?0:1;break;case bl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Bo:t.y=t.y-Math.floor(t.y);break;case os:t.y=t.y<0?0:1;break;case bl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}gn.DEFAULT_IMAGE=null;gn.DEFAULT_MAPPING=Vu;gn.DEFAULT_ANISOTROPY=1;class Me{constructor(t=0,e=0,n=0,s=1){Me.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,s){return this.x=t,this.y=e,this.z=n,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*n+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,s,r;const o=t.elements,c=o[0],u=o[4],h=o[8],f=o[1],d=o[5],g=o[9],_=o[2],m=o[6],p=o[10];if(Math.abs(u-f)<.01&&Math.abs(h-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+f)<.1&&Math.abs(h+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(c+1)/2,v=(d+1)/2,L=(p+1)/2,T=(u+f)/4,w=(h+_)/4,C=(g+m)/4;return S>v&&S>L?S<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(S),s=T/n,r=w/n):v>L?v<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(v),n=T/s,r=C/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=w/r,s=C/r),this.set(n,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(h-_)*(h-_)+(f-u)*(f-u));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(h-_)/b,this.z=(f-u)/b,this.w=Math.acos((c+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zd extends $s{constructor(t=1,e=1,n={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Me(0,0,t,e),this.scissorTest=!1,this.viewport=new Me(0,0,t,e);const s={width:t,height:e,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:kn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new gn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let n=0,s=t.textures.length;n<s;n++)this.textures[n]=t.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new nf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gn extends Zd{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class sf extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Jd extends gn{constructor(t=null,e=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:s},this.magFilter=_e,this.minFilter=_e,this.wrapR=os,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Nr{constructor(t=0,e=0,n=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=s}static slerpFlat(t,e,n,s,r,a,l){let o=n[s+0],c=n[s+1],u=n[s+2],h=n[s+3];const f=r[a+0],d=r[a+1],g=r[a+2],_=r[a+3];if(l===0){t[e+0]=o,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(l===1){t[e+0]=f,t[e+1]=d,t[e+2]=g,t[e+3]=_;return}if(h!==_||o!==f||c!==d||u!==g){let m=1-l;const p=o*f+c*d+u*g+h*_,b=p>=0?1:-1,S=1-p*p;if(S>Number.EPSILON){const L=Math.sqrt(S),T=Math.atan2(L,p*b);m=Math.sin(m*T)/L,l=Math.sin(l*T)/L}const v=l*b;if(o=o*m+f*v,c=c*m+d*v,u=u*m+g*v,h=h*m+_*v,m===1-l){const L=1/Math.sqrt(o*o+c*c+u*u+h*h);o*=L,c*=L,u*=L,h*=L}}t[e]=o,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,n,s,r,a){const l=n[s],o=n[s+1],c=n[s+2],u=n[s+3],h=r[a],f=r[a+1],d=r[a+2],g=r[a+3];return t[e]=l*g+u*h+o*d-c*f,t[e+1]=o*g+u*f+c*h-l*d,t[e+2]=c*g+u*d+l*f-o*h,t[e+3]=u*g-l*h-o*f-c*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,s){return this._x=t,this._y=e,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,c=l(n/2),u=l(s/2),h=l(r/2),f=o(n/2),d=o(s/2),g=o(r/2);switch(a){case"XYZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"YXZ":this._x=f*u*h+c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"ZXY":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h-f*d*g;break;case"ZYX":this._x=f*u*h-c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h+f*d*g;break;case"YZX":this._x=f*u*h+c*d*g,this._y=c*d*h+f*u*g,this._z=c*u*g-f*d*h,this._w=c*u*h-f*d*g;break;case"XZY":this._x=f*u*h-c*d*g,this._y=c*d*h-f*u*g,this._z=c*u*g+f*d*h,this._w=c*u*h+f*d*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,s=Math.sin(n);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],c=e[2],u=e[6],h=e[10],f=n+l+h;if(f>0){const d=.5/Math.sqrt(f+1);this._w=.25/d,this._x=(u-o)*d,this._y=(r-c)*d,this._z=(a-s)*d}else if(n>l&&n>h){const d=2*Math.sqrt(1+n-l-h);this._w=(u-o)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+c)/d}else if(l>h){const d=2*Math.sqrt(1+l-n-h);this._w=(r-c)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(o+u)/d}else{const d=2*Math.sqrt(1+h-n-l);this._w=(a-s)/d,this._x=(r+c)/d,this._y=(o+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<Number.EPSILON?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Mn(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const s=Math.min(1,e/n);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,c=e._z,u=e._w;return this._x=n*u+a*l+s*c-r*o,this._y=s*u+a*o+r*l-n*c,this._z=r*u+a*c+n*o-s*l,this._w=a*u-n*l-s*o-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,s=this._y,r=this._z,a=this._w;let l=a*t._w+n*t._x+s*t._y+r*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;const o=1-l*l;if(o<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*n+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const c=Math.sqrt(o),u=Math.atan2(c,l),h=Math.sin((1-e)*u)/c,f=Math.sin(e*u)/c;return this._w=a*h+this._w*f,this._x=n*h+this._x*f,this._y=s*h+this._y*f,this._z=r*h+this._z*f,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(t=0,e=0,n=0){P.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(fh.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(fh.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6]*s,this.y=r[1]*e+r[4]*n+r[7]*s,this.z=r[2]*e+r[5]*n+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,n=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,c=2*(a*s-l*n),u=2*(l*e-r*s),h=2*(r*n-a*e);return this.x=e+o*c+a*h-l*u,this.y=n+o*u+l*c-r*h,this.z=s+o*h+r*u-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*n+r[8]*s,this.y=r[1]*e+r[5]*n+r[9]*s,this.z=r[2]*e+r[6]*n+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(t,Math.min(e,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-n*o,this.z=n*l-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return xa.copy(this).projectOnVector(t),this.sub(xa)}reflect(t){return this.sub(xa.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Mn(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,s=this.z-t.z;return e*e+n*n+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const s=Math.sin(e)*t;return this.x=s*Math.sin(n),this.y=Math.cos(e)*t,this.z=s*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xa=new P,fh=new Nr;class Or{constructor(t=new P(1/0,1/0,1/0),e=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(Yn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(Yn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=Yn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const r=n.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Yn):Yn.fromBufferAttribute(r,a),Yn.applyMatrix4(t.matrixWorld),this.expandByPoint(Yn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),Wr.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wr.copy(n.boundingBox)),Wr.applyMatrix4(t.matrixWorld),this.union(Wr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Yn),Yn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(nr),Xr.subVectors(this.max,nr),ms.subVectors(t.a,nr),gs.subVectors(t.b,nr),_s.subVectors(t.c,nr),Pi.subVectors(gs,ms),Di.subVectors(_s,gs),ji.subVectors(ms,_s);let e=[0,-Pi.z,Pi.y,0,-Di.z,Di.y,0,-ji.z,ji.y,Pi.z,0,-Pi.x,Di.z,0,-Di.x,ji.z,0,-ji.x,-Pi.y,Pi.x,0,-Di.y,Di.x,0,-ji.y,ji.x,0];return!Ma(e,ms,gs,_s,Xr)||(e=[1,0,0,0,1,0,0,0,1],!Ma(e,ms,gs,_s,Xr))?!1:(qr.crossVectors(Pi,Di),e=[qr.x,qr.y,qr.z],Ma(e,ms,gs,_s,Xr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Yn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Yn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(ui),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const ui=[new P,new P,new P,new P,new P,new P,new P,new P],Yn=new P,Wr=new Or,ms=new P,gs=new P,_s=new P,Pi=new P,Di=new P,ji=new P,nr=new P,Xr=new P,qr=new P,Zi=new P;function Ma(i,t,e,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Zi.fromArray(i,r);const l=s.x*Math.abs(Zi.x)+s.y*Math.abs(Zi.y)+s.z*Math.abs(Zi.z),o=t.dot(Zi),c=e.dot(Zi),u=n.dot(Zi);if(Math.max(-Math.max(o,c,u),Math.min(o,c,u))>l)return!1}return!0}const Qd=new Or,ir=new P,ya=new P;class Fr{constructor(t=new P,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Qd.setFromPoints(t).getCenter(n);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,n.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;ir.subVectors(t,this.center);const e=ir.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),s=(n-this.radius)*.5;this.center.addScaledVector(ir,s/n),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ya.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(ir.copy(t.center).add(ya)),this.expandByPoint(ir.copy(t.center).sub(ya))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const fi=new P,Sa=new P,Yr=new P,Ii=new P,ba=new P,Kr=new P,Ea=new P;class Ec{constructor(t=new P,e=new P(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,fi)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=fi.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(fi.copy(this.origin).addScaledVector(this.direction,e),fi.distanceToSquared(t))}distanceSqToSegment(t,e,n,s){Sa.copy(t).add(e).multiplyScalar(.5),Yr.copy(e).sub(t).normalize(),Ii.copy(this.origin).sub(Sa);const r=t.distanceTo(e)*.5,a=-this.direction.dot(Yr),l=Ii.dot(this.direction),o=-Ii.dot(Yr),c=Ii.lengthSq(),u=Math.abs(1-a*a);let h,f,d,g;if(u>0)if(h=a*o-l,f=a*l-o,g=r*u,h>=0)if(f>=-g)if(f<=g){const _=1/u;h*=_,f*=_,d=h*(h+a*f+2*l)+f*(a*h+f+2*o)+c}else f=r,h=Math.max(0,-(a*f+l)),d=-h*h+f*(f+2*o)+c;else f=-r,h=Math.max(0,-(a*f+l)),d=-h*h+f*(f+2*o)+c;else f<=-g?(h=Math.max(0,-(-a*r+l)),f=h>0?-r:Math.min(Math.max(-r,-o),r),d=-h*h+f*(f+2*o)+c):f<=g?(h=0,f=Math.min(Math.max(-r,-o),r),d=f*(f+2*o)+c):(h=Math.max(0,-(a*r+l)),f=h>0?r:Math.min(Math.max(-r,-o),r),d=-h*h+f*(f+2*o)+c);else f=a>0?-r:r,h=Math.max(0,-(a*f+l)),d=-h*h+f*(f+2*o)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(Sa).addScaledVector(Yr,f),d}intersectSphere(t,e){fi.subVectors(t.center,this.origin);const n=fi.dot(this.direction),s=fi.dot(fi)-n*n,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=n-a,o=n+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,s,r,a,l,o;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,f=this.origin;return c>=0?(n=(t.min.x-f.x)*c,s=(t.max.x-f.x)*c):(n=(t.max.x-f.x)*c,s=(t.min.x-f.x)*c),u>=0?(r=(t.min.y-f.y)*u,a=(t.max.y-f.y)*u):(r=(t.max.y-f.y)*u,a=(t.min.y-f.y)*u),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),h>=0?(l=(t.min.z-f.z)*h,o=(t.max.z-f.z)*h):(l=(t.max.z-f.z)*h,o=(t.min.z-f.z)*h),n>o||l>s)||((l>n||n!==n)&&(n=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(n>=0?n:s,e)}intersectsBox(t){return this.intersectBox(t,fi)!==null}intersectTriangle(t,e,n,s,r){ba.subVectors(e,t),Kr.subVectors(n,t),Ea.crossVectors(ba,Kr);let a=this.direction.dot(Ea),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;Ii.subVectors(this.origin,t);const o=l*this.direction.dot(Kr.crossVectors(Ii,Kr));if(o<0)return null;const c=l*this.direction.dot(ba.cross(Ii));if(c<0||o+c>a)return null;const u=-l*Ii.dot(Ea);return u<0?null:this.at(u/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(t,e,n,s,r,a,l,o,c,u,h,f,d,g,_,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,s,r,a,l,o,c,u,h,f,d,g,_,m)}set(t,e,n,s,r,a,l,o,c,u,h,f,d,g,_,m){const p=this.elements;return p[0]=t,p[4]=e,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=o,p[2]=c,p[6]=u,p[10]=h,p[14]=f,p[3]=d,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,s=1/vs.setFromMatrixColumn(t,0).length(),r=1/vs.setFromMatrixColumn(t,1).length(),a=1/vs.setFromMatrixColumn(t,2).length();return e[0]=n[0]*s,e[1]=n[1]*s,e[2]=n[2]*s,e[3]=0,e[4]=n[4]*r,e[5]=n[5]*r,e[6]=n[6]*r,e[7]=0,e[8]=n[8]*a,e[9]=n[9]*a,e[10]=n[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,s=t.y,r=t.z,a=Math.cos(n),l=Math.sin(n),o=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const f=a*u,d=a*h,g=l*u,_=l*h;e[0]=o*u,e[4]=-o*h,e[8]=c,e[1]=d+g*c,e[5]=f-_*c,e[9]=-l*o,e[2]=_-f*c,e[6]=g+d*c,e[10]=a*o}else if(t.order==="YXZ"){const f=o*u,d=o*h,g=c*u,_=c*h;e[0]=f+_*l,e[4]=g*l-d,e[8]=a*c,e[1]=a*h,e[5]=a*u,e[9]=-l,e[2]=d*l-g,e[6]=_+f*l,e[10]=a*o}else if(t.order==="ZXY"){const f=o*u,d=o*h,g=c*u,_=c*h;e[0]=f-_*l,e[4]=-a*h,e[8]=g+d*l,e[1]=d+g*l,e[5]=a*u,e[9]=_-f*l,e[2]=-a*c,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){const f=a*u,d=a*h,g=l*u,_=l*h;e[0]=o*u,e[4]=g*c-d,e[8]=f*c+_,e[1]=o*h,e[5]=_*c+f,e[9]=d*c-g,e[2]=-c,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){const f=a*o,d=a*c,g=l*o,_=l*c;e[0]=o*u,e[4]=_-f*h,e[8]=g*h+d,e[1]=h,e[5]=a*u,e[9]=-l*u,e[2]=-c*u,e[6]=d*h+g,e[10]=f-_*h}else if(t.order==="XZY"){const f=a*o,d=a*c,g=l*o,_=l*c;e[0]=o*u,e[4]=-h,e[8]=c*u,e[1]=f*h+_,e[5]=a*u,e[9]=d*h-g,e[2]=g*h-d,e[6]=l*u,e[10]=_*h+f}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(tp,t,ep)}lookAt(t,e,n){const s=this.elements;return wn.subVectors(t,e),wn.lengthSq()===0&&(wn.z=1),wn.normalize(),Ui.crossVectors(n,wn),Ui.lengthSq()===0&&(Math.abs(n.z)===1?wn.x+=1e-4:wn.z+=1e-4,wn.normalize(),Ui.crossVectors(n,wn)),Ui.normalize(),$r.crossVectors(wn,Ui),s[0]=Ui.x,s[4]=$r.x,s[8]=wn.x,s[1]=Ui.y,s[5]=$r.y,s[9]=wn.y,s[2]=Ui.z,s[6]=$r.z,s[10]=wn.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,s=e.elements,r=this.elements,a=n[0],l=n[4],o=n[8],c=n[12],u=n[1],h=n[5],f=n[9],d=n[13],g=n[2],_=n[6],m=n[10],p=n[14],b=n[3],S=n[7],v=n[11],L=n[15],T=s[0],w=s[4],C=s[8],M=s[12],x=s[1],R=s[5],I=s[9],U=s[13],H=s[2],$=s[6],q=s[10],Y=s[14],V=s[3],nt=s[7],st=s[11],gt=s[15];return r[0]=a*T+l*x+o*H+c*V,r[4]=a*w+l*R+o*$+c*nt,r[8]=a*C+l*I+o*q+c*st,r[12]=a*M+l*U+o*Y+c*gt,r[1]=u*T+h*x+f*H+d*V,r[5]=u*w+h*R+f*$+d*nt,r[9]=u*C+h*I+f*q+d*st,r[13]=u*M+h*U+f*Y+d*gt,r[2]=g*T+_*x+m*H+p*V,r[6]=g*w+_*R+m*$+p*nt,r[10]=g*C+_*I+m*q+p*st,r[14]=g*M+_*U+m*Y+p*gt,r[3]=b*T+S*x+v*H+L*V,r[7]=b*w+S*R+v*$+L*nt,r[11]=b*C+S*I+v*q+L*st,r[15]=b*M+S*U+v*Y+L*gt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],c=t[13],u=t[2],h=t[6],f=t[10],d=t[14],g=t[3],_=t[7],m=t[11],p=t[15];return g*(+r*o*h-s*c*h-r*l*f+n*c*f+s*l*d-n*o*d)+_*(+e*o*d-e*c*f+r*a*f-s*a*d+s*c*u-r*o*u)+m*(+e*c*h-e*l*d-r*a*h+n*a*d+r*l*u-n*c*u)+p*(-s*l*u-e*o*h+e*l*f+s*a*h-n*a*f+n*o*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],c=t[7],u=t[8],h=t[9],f=t[10],d=t[11],g=t[12],_=t[13],m=t[14],p=t[15],b=h*m*c-_*f*c+_*o*d-l*m*d-h*o*p+l*f*p,S=g*f*c-u*m*c-g*o*d+a*m*d+u*o*p-a*f*p,v=u*_*c-g*h*c+g*l*d-a*_*d-u*l*p+a*h*p,L=g*h*o-u*_*o-g*l*f+a*_*f+u*l*m-a*h*m,T=e*b+n*S+s*v+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=b*w,t[1]=(_*f*r-h*m*r-_*s*d+n*m*d+h*s*p-n*f*p)*w,t[2]=(l*m*r-_*o*r+_*s*c-n*m*c-l*s*p+n*o*p)*w,t[3]=(h*o*r-l*f*r-h*s*c+n*f*c+l*s*d-n*o*d)*w,t[4]=S*w,t[5]=(u*m*r-g*f*r+g*s*d-e*m*d-u*s*p+e*f*p)*w,t[6]=(g*o*r-a*m*r-g*s*c+e*m*c+a*s*p-e*o*p)*w,t[7]=(a*f*r-u*o*r+u*s*c-e*f*c-a*s*d+e*o*d)*w,t[8]=v*w,t[9]=(g*h*r-u*_*r-g*n*d+e*_*d+u*n*p-e*h*p)*w,t[10]=(a*_*r-g*l*r+g*n*c-e*_*c-a*n*p+e*l*p)*w,t[11]=(u*l*r-a*h*r-u*n*c+e*h*c+a*n*d-e*l*d)*w,t[12]=L*w,t[13]=(u*_*s-g*h*s+g*n*f-e*_*f-u*n*m+e*h*m)*w,t[14]=(g*l*s-a*_*s-g*n*o+e*_*o+a*n*m-e*l*m)*w,t[15]=(a*h*s-u*l*s+u*n*o-e*h*o-a*n*f+e*l*f)*w,this}scale(t){const e=this.elements,n=t.x,s=t.y,r=t.z;return e[0]*=n,e[4]*=s,e[8]*=r,e[1]*=n,e[5]*=s,e[9]*=r,e[2]*=n,e[6]*=s,e[10]*=r,e[3]*=n,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,s))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),s=Math.sin(e),r=1-n,a=t.x,l=t.y,o=t.z,c=r*a,u=r*l;return this.set(c*a+n,c*l-s*o,c*o+s*l,0,c*l+s*o,u*l+n,u*o-s*a,0,c*o-s*l,u*o+s*a,r*o*o+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,s,r,a){return this.set(1,n,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,n){const s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,c=r+r,u=a+a,h=l+l,f=r*c,d=r*u,g=r*h,_=a*u,m=a*h,p=l*h,b=o*c,S=o*u,v=o*h,L=n.x,T=n.y,w=n.z;return s[0]=(1-(_+p))*L,s[1]=(d+v)*L,s[2]=(g-S)*L,s[3]=0,s[4]=(d-v)*T,s[5]=(1-(f+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+S)*w,s[9]=(m-b)*w,s[10]=(1-(f+_))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,n){const s=this.elements;let r=vs.set(s[0],s[1],s[2]).length();const a=vs.set(s[4],s[5],s[6]).length(),l=vs.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],Kn.copy(this);const c=1/r,u=1/a,h=1/l;return Kn.elements[0]*=c,Kn.elements[1]*=c,Kn.elements[2]*=c,Kn.elements[4]*=u,Kn.elements[5]*=u,Kn.elements[6]*=u,Kn.elements[8]*=h,Kn.elements[9]*=h,Kn.elements[10]*=h,e.setFromRotationMatrix(Kn),n.x=r,n.y=a,n.z=l,this}makePerspective(t,e,n,s,r,a,l=yi){const o=this.elements,c=2*r/(e-t),u=2*r/(n-s),h=(e+t)/(e-t),f=(n+s)/(n-s);let d,g;if(l===yi)d=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(l===ko)d=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=c,o[4]=0,o[8]=h,o[12]=0,o[1]=0,o[5]=u,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=g,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,n,s,r,a,l=yi){const o=this.elements,c=1/(e-t),u=1/(n-s),h=1/(a-r),f=(e+t)*c,d=(n+s)*u;let g,_;if(l===yi)g=(a+r)*h,_=-2*h;else if(l===ko)g=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=2*c,o[4]=0,o[8]=0,o[12]=-f,o[1]=0,o[5]=2*u,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=_,o[14]=-g,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let s=0;s<16;s++)if(e[s]!==n[s])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const vs=new P,Kn=new Ae,tp=new P(0,0,0),ep=new P(1,1,1),Ui=new P,$r=new P,wn=new P,dh=new Ae,ph=new Nr;class ei{constructor(t=0,e=0,n=0,s=ei.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,s=this._order){return this._x=t,this._y=e,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],c=s[5],u=s[9],h=s[2],f=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Mn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Mn(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(o,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(Mn(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-h,d),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Mn(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(f,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Mn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-Mn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return dh.makeRotationFromQuaternion(t),this.setFromRotationMatrix(dh,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ph.setFromEuler(this),this.setFromQuaternion(ph,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ei.DEFAULT_ORDER="XYZ";class rf{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let np=0;const mh=new P,xs=new Nr,di=new Ae,jr=new P,sr=new P,ip=new P,sp=new Nr,gh=new P(1,0,0),_h=new P(0,1,0),vh=new P(0,0,1),xh={type:"added"},rp={type:"removed"},Ms={type:"childadded",child:null},wa={type:"childremoved",child:null};class Ve extends $s{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:np++}),this.uuid=Gi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ve.DEFAULT_UP.clone();const t=new P,e=new ei,n=new Nr,s=new P(1,1,1);function r(){n.setFromEuler(e,!1)}function a(){e.setFromQuaternion(n,void 0,!1)}e._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Yt}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=Ve.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new rf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.multiply(xs),this}rotateOnWorldAxis(t,e){return xs.setFromAxisAngle(t,e),this.quaternion.premultiply(xs),this}rotateX(t){return this.rotateOnAxis(gh,t)}rotateY(t){return this.rotateOnAxis(_h,t)}rotateZ(t){return this.rotateOnAxis(vh,t)}translateOnAxis(t,e){return mh.copy(t).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(gh,t)}translateY(t){return this.translateOnAxis(_h,t)}translateZ(t){return this.translateOnAxis(vh,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(di.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?jr.copy(t):jr.set(t,e,n);const s=this.parent;this.updateWorldMatrix(!0,!1),sr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?di.lookAt(sr,jr,this.up):di.lookAt(jr,sr,this.up),this.quaternion.setFromRotationMatrix(di),s&&(di.extractRotation(s.matrixWorld),xs.setFromRotationMatrix(di),this.quaternion.premultiply(xs.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(xh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(rp),wa.child=t,this.dispatchEvent(wa),wa.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),di.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),di.multiply(t.parent.matrixWorld)),t.applyMatrix4(di),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(xh),Ms.child=t,this.dispatchEvent(Ms),Ms.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,t,ip),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sr,sp,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,s=e.length;n<s;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let c=0,u=o.length;c<u;c++){const h=o[c];r(t.shapes,h)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,c=this.material.length;o<c;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){const l=a(t.geometries),o=a(t.materials),c=a(t.textures),u=a(t.images),h=a(t.shapes),f=a(t.skeletons),d=a(t.animations),g=a(t.nodes);l.length>0&&(n.geometries=l),o.length>0&&(n.materials=o),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),f.length>0&&(n.skeletons=f),d.length>0&&(n.animations=d),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(l){const o=[];for(const c in l){const u=l[c];delete u.metadata,o.push(u)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const s=t.children[n];this.add(s.clone())}return this}}Ve.DEFAULT_UP=new P(0,1,0);Ve.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ve.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const $n=new P,pi=new P,Ta=new P,mi=new P,ys=new P,Ss=new P,Mh=new P,Aa=new P,Ra=new P,Ca=new P,La=new Me,Pa=new Me,Da=new Me;class Pn{constructor(t=new P,e=new P,n=new P){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,s){s.subVectors(n,e),$n.subVectors(t,e),s.cross($n);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,n,s,r){$n.subVectors(s,e),pi.subVectors(n,e),Ta.subVectors(t,e);const a=$n.dot($n),l=$n.dot(pi),o=$n.dot(Ta),c=pi.dot(pi),u=pi.dot(Ta),h=a*c-l*l;if(h===0)return r.set(0,0,0),null;const f=1/h,d=(c*o-l*u)*f,g=(a*u-l*o)*f;return r.set(1-d-g,g,d)}static containsPoint(t,e,n,s){return this.getBarycoord(t,e,n,s,mi)===null?!1:mi.x>=0&&mi.y>=0&&mi.x+mi.y<=1}static getInterpolation(t,e,n,s,r,a,l,o){return this.getBarycoord(t,e,n,s,mi)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,mi.x),o.addScaledVector(a,mi.y),o.addScaledVector(l,mi.z),o)}static getInterpolatedAttribute(t,e,n,s,r,a){return La.setScalar(0),Pa.setScalar(0),Da.setScalar(0),La.fromBufferAttribute(t,e),Pa.fromBufferAttribute(t,n),Da.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(La,r.x),a.addScaledVector(Pa,r.y),a.addScaledVector(Da,r.z),a}static isFrontFacing(t,e,n,s){return $n.subVectors(n,e),pi.subVectors(t,e),$n.cross(pi).dot(s)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,s){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,n,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return $n.subVectors(this.c,this.b),pi.subVectors(this.a,this.b),$n.cross(pi).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Pn.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Pn.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,s,r){return Pn.getInterpolation(t,this.a,this.b,this.c,e,n,s,r)}containsPoint(t){return Pn.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Pn.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,s=this.b,r=this.c;let a,l;ys.subVectors(s,n),Ss.subVectors(r,n),Aa.subVectors(t,n);const o=ys.dot(Aa),c=Ss.dot(Aa);if(o<=0&&c<=0)return e.copy(n);Ra.subVectors(t,s);const u=ys.dot(Ra),h=Ss.dot(Ra);if(u>=0&&h<=u)return e.copy(s);const f=o*h-u*c;if(f<=0&&o>=0&&u<=0)return a=o/(o-u),e.copy(n).addScaledVector(ys,a);Ca.subVectors(t,r);const d=ys.dot(Ca),g=Ss.dot(Ca);if(g>=0&&d<=g)return e.copy(r);const _=d*c-o*g;if(_<=0&&c>=0&&g<=0)return l=c/(c-g),e.copy(n).addScaledVector(Ss,l);const m=u*g-d*h;if(m<=0&&h-u>=0&&d-g>=0)return Mh.subVectors(r,s),l=(h-u)/(h-u+(d-g)),e.copy(s).addScaledVector(Mh,l);const p=1/(m+_+f);return a=_*p,l=f*p,e.copy(n).addScaledVector(ys,a).addScaledVector(Ss,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const of={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ni={h:0,s:0,l:0},Zr={h:0,s:0,l:0};function Ia(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class yt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=nn){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ee.toWorkingColorSpace(this,e),this}setRGB(t,e,n,s=ee.workingColorSpace){return this.r=t,this.g=e,this.b=n,ee.toWorkingColorSpace(this,s),this}setHSL(t,e,n,s=ee.workingColorSpace){if(t=Vd(t,1),e=Mn(e,0,1),n=Mn(n,0,1),e===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+e):n+e-n*e,a=2*n-r;this.r=Ia(a,r,t+1/3),this.g=Ia(a,r,t),this.b=Ia(a,r,t-1/3)}return ee.toWorkingColorSpace(this,s),this}setStyle(t,e=nn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=nn){const n=of[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=bi(t.r),this.g=bi(t.g),this.b=bi(t.b),this}copyLinearToSRGB(t){return this.r=Os(t.r),this.g=Os(t.g),this.b=Os(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=nn){return ee.fromWorkingColorSpace(ln.copy(this),t),Math.round(Mn(ln.r*255,0,255))*65536+Math.round(Mn(ln.g*255,0,255))*256+Math.round(Mn(ln.b*255,0,255))}getHexString(t=nn){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ee.workingColorSpace){ee.fromWorkingColorSpace(ln.copy(this),e);const n=ln.r,s=ln.g,r=ln.b,a=Math.max(n,s,r),l=Math.min(n,s,r);let o,c;const u=(l+a)/2;if(l===a)o=0,c=0;else{const h=a-l;switch(c=u<=.5?h/(a+l):h/(2-a-l),a){case n:o=(s-r)/h+(s<r?6:0);break;case s:o=(r-n)/h+2;break;case r:o=(n-s)/h+4;break}o/=6}return t.h=o,t.s=c,t.l=u,t}getRGB(t,e=ee.workingColorSpace){return ee.fromWorkingColorSpace(ln.copy(this),e),t.r=ln.r,t.g=ln.g,t.b=ln.b,t}getStyle(t=nn){ee.fromWorkingColorSpace(ln.copy(this),t);const e=ln.r,n=ln.g,s=ln.b;return t!==nn?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(t,e,n){return this.getHSL(Ni),this.setHSL(Ni.h+t,Ni.s+e,Ni.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Ni),t.getHSL(Zr);const n=ga(Ni.h,Zr.h,e),s=ga(Ni.s,Zr.s,e),r=ga(Ni.l,Zr.l,e);return this.setHSL(n,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*n+r[6]*s,this.g=r[1]*e+r[4]*n+r[7]*s,this.b=r[2]*e+r[5]*n+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ln=new yt;yt.NAMES=of;let op=0;class Ai extends $s{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:op++}),this.uuid=Gi(),this.name="",this.blending=Us,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fl,this.blendDst=dl,this.blendEquation=ss,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Bs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=sh,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ds,this.stencilZFail=ds,this.stencilZPass=ds,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Us&&(n.blending=this.blending),this.side!==qi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==fl&&(n.blendSrc=this.blendSrc),this.blendDst!==dl&&(n.blendDst=this.blendDst),this.blendEquation!==ss&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Bs&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==sh&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ds&&(n.stencilFail=this.stencilFail),this.stencilZFail!==ds&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==ds&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const l in r){const o=r[l];delete o.metadata,a.push(o)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const s=e.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=e[r].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Ie extends Ai{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const Be=new P,Jr=new Dt;class _n{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=jl,this.updateRanges=[],this.gpuType=Mi,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[n+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)Jr.fromBufferAttribute(this,e),Jr.applyMatrix3(t),this.setXY(e,Jr.x,Jr.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix3(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyMatrix4(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.applyNormalMatrix(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)Be.fromBufferAttribute(this,e),Be.transformDirection(t),this.setXYZ(e,Be.x,Be.y,Be.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=oi(e,this.array)),e}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=oi(e,this.array)),e}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=oi(e,this.array)),e}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=oi(e,this.array)),e}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,s){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t*=this.itemSize,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==jl&&(t.usage=this.usage),t}}class af extends _n{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class lf extends _n{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class Pe extends _n{constructor(t,e,n){super(new Float32Array(t),e,n)}}let ap=0;const On=new Ae,Ua=new Ve,bs=new P,Tn=new Or,rr=new Or,Ze=new P;class Ke extends $s{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ap++}),this.uuid=Gi(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ef(t)?lf:af)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Yt().getNormalMatrix(t);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return On.makeRotationFromQuaternion(t),this.applyMatrix4(On),this}rotateX(t){return On.makeRotationX(t),this.applyMatrix4(On),this}rotateY(t){return On.makeRotationY(t),this.applyMatrix4(On),this}rotateZ(t){return On.makeRotationZ(t),this.applyMatrix4(On),this}translate(t,e,n){return On.makeTranslation(t,e,n),this.applyMatrix4(On),this}scale(t,e,n){return On.makeScale(t,e,n),this.applyMatrix4(On),this}lookAt(t){return Ua.lookAt(t),Ua.updateMatrix(),this.applyMatrix4(Ua.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(bs).negate(),this.translate(bs.x,bs.y,bs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Pe(n,3))}else{for(let n=0,s=e.count;n<s;n++){const r=t[n];e.setXYZ(n,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Or);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,s=e.length;n<s;n++){const r=e[n];Tn.setFromBufferAttribute(r),this.morphTargetsRelative?(Ze.addVectors(this.boundingBox.min,Tn.min),this.boundingBox.expandByPoint(Ze),Ze.addVectors(this.boundingBox.max,Tn.max),this.boundingBox.expandByPoint(Ze)):(this.boundingBox.expandByPoint(Tn.min),this.boundingBox.expandByPoint(Tn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(t){const n=this.boundingSphere.center;if(Tn.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const l=e[r];rr.setFromBufferAttribute(l),this.morphTargetsRelative?(Ze.addVectors(Tn.min,rr.min),Tn.expandByPoint(Ze),Ze.addVectors(Tn.max,rr.max),Tn.expandByPoint(Ze)):(Tn.expandByPoint(rr.min),Tn.expandByPoint(rr.max))}Tn.getCenter(n);let s=0;for(let r=0,a=t.count;r<a;r++)Ze.fromBufferAttribute(t,r),s=Math.max(s,n.distanceToSquared(Ze));if(e)for(let r=0,a=e.length;r<a;r++){const l=e[r],o=this.morphTargetsRelative;for(let c=0,u=l.count;c<u;c++)Ze.fromBufferAttribute(l,c),o&&(bs.fromBufferAttribute(t,c),Ze.add(bs)),s=Math.max(s,n.distanceToSquared(Ze))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _n(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),l=[],o=[];for(let C=0;C<n.count;C++)l[C]=new P,o[C]=new P;const c=new P,u=new P,h=new P,f=new Dt,d=new Dt,g=new Dt,_=new P,m=new P;function p(C,M,x){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,M),h.fromBufferAttribute(n,x),f.fromBufferAttribute(r,C),d.fromBufferAttribute(r,M),g.fromBufferAttribute(r,x),u.sub(c),h.sub(c),d.sub(f),g.sub(f);const R=1/(d.x*g.y-g.x*d.y);isFinite(R)&&(_.copy(u).multiplyScalar(g.y).addScaledVector(h,-d.y).multiplyScalar(R),m.copy(h).multiplyScalar(d.x).addScaledVector(u,-g.x).multiplyScalar(R),l[C].add(_),l[M].add(_),l[x].add(_),o[C].add(m),o[M].add(m),o[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let C=0,M=b.length;C<M;++C){const x=b[C],R=x.start,I=x.count;for(let U=R,H=R+I;U<H;U+=3)p(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const S=new P,v=new P,L=new P,T=new P;function w(C){L.fromBufferAttribute(s,C),T.copy(L);const M=l[C];S.copy(M),S.sub(L.multiplyScalar(L.dot(M))).normalize(),v.crossVectors(T,M);const R=v.dot(o[C])<0?-1:1;a.setXYZW(C,S.x,S.y,S.z,R)}for(let C=0,M=b.length;C<M;++C){const x=b[C],R=x.start,I=x.count;for(let U=R,H=R+I;U<H;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new _n(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let f=0,d=n.count;f<d;f++)n.setXYZ(f,0,0,0);const s=new P,r=new P,a=new P,l=new P,o=new P,c=new P,u=new P,h=new P;if(t)for(let f=0,d=t.count;f<d;f+=3){const g=t.getX(f+0),_=t.getX(f+1),m=t.getX(f+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,_),a.fromBufferAttribute(e,m),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),l.fromBufferAttribute(n,g),o.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),l.add(u),o.add(u),c.add(u),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(_,o.x,o.y,o.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,d=e.count;f<d;f+=3)s.fromBufferAttribute(e,f+0),r.fromBufferAttribute(e,f+1),a.fromBufferAttribute(e,f+2),u.subVectors(a,r),h.subVectors(s,r),u.cross(h),n.setXYZ(f+0,u.x,u.y,u.z),n.setXYZ(f+1,u.x,u.y,u.z),n.setXYZ(f+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)Ze.fromBufferAttribute(t,e),Ze.normalize(),t.setXYZ(e,Ze.x,Ze.y,Ze.z)}toNonIndexed(){function t(l,o){const c=l.array,u=l.itemSize,h=l.normalized,f=new c.constructor(o.length*u);let d=0,g=0;for(let _=0,m=o.length;_<m;_++){l.isInterleavedBufferAttribute?d=o[_]*l.data.stride+l.offset:d=o[_]*u;for(let p=0;p<u;p++)f[g++]=c[d++]}return new _n(f,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ke,n=this.index.array,s=this.attributes;for(const l in s){const o=s[l],c=t(o,n);e.setAttribute(l,c)}const r=this.morphAttributes;for(const l in r){const o=[],c=r[l];for(let u=0,h=c.length;u<h;u++){const f=c[u],d=t(f,n);o.push(d)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const c=a[l];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const c in o)o[c]!==void 0&&(t[c]=o[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const o in n){const c=n[o];t.data.attributes[o]=c.toJSON(t.data)}const s={};let r=!1;for(const o in this.morphAttributes){const c=this.morphAttributes[o],u=[];for(let h=0,f=c.length;h<f;h++){const d=c[h];u.push(d.toJSON(t.data))}u.length>0&&(s[o]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let f=0,d=h.length;f<d;f++)u.push(h[f].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const yh=new Ae,Ji=new Ec,Qr=new Fr,Sh=new P,to=new P,eo=new P,no=new P,Na=new P,io=new P,bh=new P,so=new P;class Ut extends Ve{constructor(t=new Ke,e=new Ie){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(r&&l){io.set(0,0,0);for(let o=0,c=r.length;o<c;o++){const u=l[o],h=r[o];u!==0&&(Na.fromBufferAttribute(h,t),a?io.addScaledVector(Na,u):io.addScaledVector(Na.sub(e),u))}e.add(io)}return e}raycast(t,e){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Qr.copy(n.boundingSphere),Qr.applyMatrix4(r),Ji.copy(t.ray).recast(t.near),!(Qr.containsPoint(Ji.origin)===!1&&(Ji.intersectSphere(Qr,Sh)===null||Ji.origin.distanceToSquared(Sh)>(t.far-t.near)**2))&&(yh.copy(r).invert(),Ji.copy(t.ray).applyMatrix4(yh),!(n.boundingBox!==null&&Ji.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,Ji)))}_computeIntersections(t,e,n){let s;const r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,f=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(l.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,L=S;v<L;v+=3){const T=l.getX(v),w=l.getX(v+1),C=l.getX(v+2);s=ro(this,p,t,n,c,u,h,T,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(l.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=l.getX(m),S=l.getX(m+1),v=l.getX(m+2);s=ro(this,a,t,n,c,u,h,b,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let g=0,_=f.length;g<_;g++){const m=f[g],p=a[m.materialIndex],b=Math.max(m.start,d.start),S=Math.min(o.count,Math.min(m.start+m.count,d.start+d.count));for(let v=b,L=S;v<L;v+=3){const T=v,w=v+1,C=v+2;s=ro(this,p,t,n,c,u,h,T,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const g=Math.max(0,d.start),_=Math.min(o.count,d.start+d.count);for(let m=g,p=_;m<p;m+=3){const b=m,S=m+1,v=m+2;s=ro(this,a,t,n,c,u,h,b,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function lp(i,t,e,n,s,r,a,l){let o;if(t.side===mn?o=n.intersectTriangle(a,r,s,!0,l):o=n.intersectTriangle(s,r,a,t.side===qi,l),o===null)return null;so.copy(l),so.applyMatrix4(i.matrixWorld);const c=e.ray.origin.distanceTo(so);return c<e.near||c>e.far?null:{distance:c,point:so.clone(),object:i}}function ro(i,t,e,n,s,r,a,l,o,c){i.getVertexPosition(l,to),i.getVertexPosition(o,eo),i.getVertexPosition(c,no);const u=lp(i,t,e,n,to,eo,no,bh);if(u){const h=new P;Pn.getBarycoord(bh,to,eo,no,h),s&&(u.uv=Pn.getInterpolatedAttribute(s,l,o,c,h,new Dt)),r&&(u.uv1=Pn.getInterpolatedAttribute(r,l,o,c,h,new Dt)),a&&(u.normal=Pn.getInterpolatedAttribute(a,l,o,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const f={a:l,b:o,c,normal:new P,materialIndex:0};Pn.getNormal(to,eo,no,f.normal),u.face=f,u.barycoord=h}return u}class re extends Ke{constructor(t=1,e=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const o=[],c=[],u=[],h=[];let f=0,d=0;g("z","y","x",-1,-1,n,e,t,a,r,0),g("z","y","x",1,-1,n,e,-t,a,r,1),g("x","z","y",1,1,t,n,e,s,a,2),g("x","z","y",1,-1,t,n,-e,s,a,3),g("x","y","z",1,-1,t,e,n,s,r,4),g("x","y","z",-1,-1,t,e,-n,s,r,5),this.setIndex(o),this.setAttribute("position",new Pe(c,3)),this.setAttribute("normal",new Pe(u,3)),this.setAttribute("uv",new Pe(h,2));function g(_,m,p,b,S,v,L,T,w,C,M){const x=v/w,R=L/C,I=v/2,U=L/2,H=T/2,$=w+1,q=C+1;let Y=0,V=0;const nt=new P;for(let st=0;st<q;st++){const gt=st*R-U;for(let Wt=0;Wt<$;Wt++){const he=Wt*x-I;nt[_]=he*b,nt[m]=gt*S,nt[p]=H,c.push(nt.x,nt.y,nt.z),nt[_]=0,nt[m]=0,nt[p]=T>0?1:-1,u.push(nt.x,nt.y,nt.z),h.push(Wt/w),h.push(1-st/C),Y+=1}}for(let st=0;st<C;st++)for(let gt=0;gt<w;gt++){const Wt=f+gt+$*st,he=f+gt+$*(st+1),j=f+(gt+1)+$*(st+1),rt=f+(gt+1)+$*st;o.push(Wt,he,rt),o.push(he,j,rt),V+=6}l.addGroup(d,V,M),d+=V,f+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new re(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ws(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const s=i[e][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=s.clone():Array.isArray(s)?t[e][n]=s.slice():t[e][n]=s}}return t}function dn(i){const t={};for(let e=0;e<i.length;e++){const n=Ws(i[e]);for(const s in n)t[s]=n[s]}return t}function cp(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function cf(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ee.workingColorSpace}const Ar={clone:Ws,merge:dn};var hp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,up=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class un extends Ai{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=hp,this.fragmentShader=up,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ws(t.uniforms),this.uniformsGroups=cp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class hf extends Ve{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=yi}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Oi=new P,Eh=new Dt,wh=new Dt;class Cn extends hf{constructor(t=50,e=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Zl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Uo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Zl*2*Math.atan(Math.tan(Uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){Oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z),Oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Oi.x,Oi.y).multiplyScalar(-t/Oi.z)}getViewSize(t,e){return this.getViewBounds(t,Eh,wh),e.subVectors(wh,Eh)}setViewOffset(t,e,n,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Uo*.5*this.fov)/this.zoom,n=2*e,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*n/c,s*=a.width/o,n*=a.height/c}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-n,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Es=-90,ws=1;class fp extends Ve{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Cn(Es,ws,t,e);s.layers=this.layers,this.add(s);const r=new Cn(Es,ws,t,e);r.layers=this.layers,this.add(r);const a=new Cn(Es,ws,t,e);a.layers=this.layers,this.add(a);const l=new Cn(Es,ws,t,e);l.layers=this.layers,this.add(l);const o=new Cn(Es,ws,t,e);o.layers=this.layers,this.add(o);const c=new Cn(Es,ws,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,s,r,a,l,o]=e;for(const c of e)this.remove(c);if(t===yi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===ko)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,c,u]=this.children,h=t.getRenderTarget(),f=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,s),t.render(e,r),t.setRenderTarget(n,1,s),t.render(e,a),t.setRenderTarget(n,2,s),t.render(e,l),t.setRenderTarget(n,3,s),t.render(e,o),t.setRenderTarget(n,4,s),t.render(e,c),n.texture.generateMipmaps=_,t.setRenderTarget(n,5,s),t.render(e,u),t.setRenderTarget(h,f,d),t.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class uf extends gn{constructor(t,e,n,s,r,a,l,o,c,u){t=t!==void 0?t:[],e=e!==void 0?e:ks,super(t,e,n,s,r,a,l,o,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class dp extends Gn{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},s=[n,n,n,n,n,n];this.texture=new uf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:kn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new re(5,5,5),r=new un({name:"CubemapFromEquirect",uniforms:Ws(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Si});r.uniforms.tEquirect.value=e;const a=new Ut(s,r),l=e.minFilter;return e.minFilter===xi&&(e.minFilter=kn),new fp(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,n,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,n,s);t.setRenderTarget(r)}}const Oa=new P,pp=new P,mp=new Yt;class ns{constructor(t=new P(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,s){return this.normal.set(t,e,n),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const s=Oa.subVectors(n,e).cross(pp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Oa),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(n,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||mp.getNormalMatrix(t),s=this.coplanarPoint(Oa).applyMatrix4(t),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Qi=new Fr,oo=new P;class wc{constructor(t=new ns,e=new ns,n=new ns,s=new ns,r=new ns,a=new ns){this.planes=[t,e,n,s,r,a]}set(t,e,n,s,r,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(n),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=yi){const n=this.planes,s=t.elements,r=s[0],a=s[1],l=s[2],o=s[3],c=s[4],u=s[5],h=s[6],f=s[7],d=s[8],g=s[9],_=s[10],m=s[11],p=s[12],b=s[13],S=s[14],v=s[15];if(n[0].setComponents(o-r,f-c,m-d,v-p).normalize(),n[1].setComponents(o+r,f+c,m+d,v+p).normalize(),n[2].setComponents(o+a,f+u,m+g,v+b).normalize(),n[3].setComponents(o-a,f-u,m-g,v-b).normalize(),n[4].setComponents(o-l,f-h,m-_,v-S).normalize(),e===yi)n[5].setComponents(o+l,f+h,m+_,v+S).normalize();else if(e===ko)n[5].setComponents(l,h,_,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Qi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Qi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Qi)}intersectsSprite(t){return Qi.center.set(0,0,0),Qi.radius=.7071067811865476,Qi.applyMatrix4(t.matrixWorld),this.intersectsSphere(Qi)}intersectsSphere(t){const e=this.planes,n=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const s=e[n];if(oo.x=s.normal.x>0?t.max.x:t.min.x,oo.y=s.normal.y>0?t.max.y:t.min.y,oo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(oo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function ff(){let i=null,t=!1,e=null,n=null;function s(r,a){e(r,a),n=i.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(s),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){i=r}}}function gp(i){const t=new WeakMap;function e(l,o){const c=l.array,u=l.usage,h=c.byteLength,f=i.createBuffer();i.bindBuffer(o,f),i.bufferData(o,c,u),l.onUploadCallback();let d;if(c instanceof Float32Array)d=i.FLOAT;else if(c instanceof Uint16Array)l.isFloat16BufferAttribute?d=i.HALF_FLOAT:d=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)d=i.SHORT;else if(c instanceof Uint32Array)d=i.UNSIGNED_INT;else if(c instanceof Int32Array)d=i.INT;else if(c instanceof Int8Array)d=i.BYTE;else if(c instanceof Uint8Array)d=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)d=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:d,bytesPerElement:c.BYTES_PER_ELEMENT,version:l.version,size:h}}function n(l,o,c){const u=o.array,h=o.updateRanges;if(i.bindBuffer(c,l),h.length===0)i.bufferSubData(c,0,u);else{h.sort((d,g)=>d.start-g.start);let f=0;for(let d=1;d<h.length;d++){const g=h[f],_=h[d];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++f,h[f]=_)}h.length=f+1;for(let d=0,g=h.length;d<g;d++){const _=h[d];i.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=t.get(l);o&&(i.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const u=t.get(l);(!u||u.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const c=t.get(l);if(c===void 0)t.set(l,e(l,o));else if(c.version<l.version){if(c.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,l,o),c.version=l.version}}return{get:s,remove:r,update:a}}class Ei extends Ke{constructor(t=1,e=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:s};const r=t/2,a=e/2,l=Math.floor(n),o=Math.floor(s),c=l+1,u=o+1,h=t/l,f=e/o,d=[],g=[],_=[],m=[];for(let p=0;p<u;p++){const b=p*f-a;for(let S=0;S<c;S++){const v=S*h-r;g.push(v,-b,0),_.push(0,0,1),m.push(S/l),m.push(1-p/o)}}for(let p=0;p<o;p++)for(let b=0;b<l;b++){const S=b+c*p,v=b+c*(p+1),L=b+1+c*(p+1),T=b+1+c*p;d.push(S,v,T),d.push(v,L,T)}this.setIndex(d),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ei(t.width,t.height,t.widthSegments,t.heightSegments)}}var _p=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,vp=`#ifdef USE_ALPHAHASH
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
#endif`,xp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,yp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Sp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,bp=`#ifdef USE_AOMAP
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
#endif`,Ep=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,wp=`#ifdef USE_BATCHING
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
#endif`,Tp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ap=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Rp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Cp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lp=`#ifdef USE_IRIDESCENCE
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
#endif`,Pp=`#ifdef USE_BUMPMAP
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
#endif`,Dp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ip=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Op=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,zp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,kp=`#define PI 3.141592653589793
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
} // validated`,Hp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Gp=`vec3 transformedNormal = objectNormal;
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
#endif`,Vp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Wp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Xp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,qp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Yp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$p=`#ifdef USE_ENVMAP
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
#endif`,jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,e0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,n0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,i0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,s0=`#ifdef USE_GRADIENTMAP
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
}`,r0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,o0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,a0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,l0=`uniform bool receiveShadow;
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
#endif`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,u0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,f0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,p0=`PhysicalMaterial material;
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
#endif`,m0=`struct PhysicalMaterial {
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
}`,g0=`
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
#endif`,_0=`#if defined( RE_IndirectDiffuse )
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,x0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,M0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,y0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,S0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,b0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,E0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,w0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,T0=`#if defined( USE_POINTS_UV )
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
#endif`,A0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,R0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,C0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,L0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,P0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,D0=`#ifdef USE_MORPHTARGETS
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
#endif`,I0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,N0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,O0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,z0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,B0=`#ifdef USE_NORMALMAP
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
#endif`,k0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,H0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,G0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,V0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,W0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,X0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,q0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Y0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,K0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,j0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Z0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,J0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Q0=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,em=`float getShadowMask() {
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
}`,nm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,im=`#ifdef USE_SKINNING
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
#endif`,sm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,am=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,hm=`#ifdef USE_TRANSMISSION
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
#endif`,um=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,dm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,_m=`uniform sampler2D t2D;
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
}`,vm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,xm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Sm=`#include <common>
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
}`,bm=`#if DEPTH_PACKING == 3200
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
}`,Em=`#define DISTANCE
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
}`,wm=`#define DISTANCE
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
}`,Tm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Am=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Rm=`uniform float scale;
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
}`,Cm=`uniform vec3 diffuse;
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
}`,Lm=`#include <common>
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Dm=`#define LAMBERT
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
}`,Im=`#define LAMBERT
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
}`,Um=`#define MATCAP
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
}`,Nm=`#define MATCAP
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
}`,Om=`#define NORMAL
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
}`,Fm=`#define NORMAL
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
}`,zm=`#define PHONG
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
}`,Bm=`#define PHONG
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
}`,km=`#define STANDARD
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
}`,Hm=`#define STANDARD
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
}`,Gm=`#define TOON
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
}`,Vm=`#define TOON
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
}`,Wm=`uniform float size;
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#include <common>
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
}`,Ym=`uniform vec3 color;
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
}`,Km=`uniform float rotation;
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
}`,$m=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:_p,alphahash_pars_fragment:vp,alphamap_fragment:xp,alphamap_pars_fragment:Mp,alphatest_fragment:yp,alphatest_pars_fragment:Sp,aomap_fragment:bp,aomap_pars_fragment:Ep,batching_pars_vertex:wp,batching_vertex:Tp,begin_vertex:Ap,beginnormal_vertex:Rp,bsdfs:Cp,iridescence_fragment:Lp,bumpmap_pars_fragment:Pp,clipping_planes_fragment:Dp,clipping_planes_pars_fragment:Ip,clipping_planes_pars_vertex:Up,clipping_planes_vertex:Np,color_fragment:Op,color_pars_fragment:Fp,color_pars_vertex:zp,color_vertex:Bp,common:kp,cube_uv_reflection_fragment:Hp,defaultnormal_vertex:Gp,displacementmap_pars_vertex:Vp,displacementmap_vertex:Wp,emissivemap_fragment:Xp,emissivemap_pars_fragment:qp,colorspace_fragment:Yp,colorspace_pars_fragment:Kp,envmap_fragment:$p,envmap_common_pars_fragment:jp,envmap_pars_fragment:Zp,envmap_pars_vertex:Jp,envmap_physical_pars_fragment:c0,envmap_vertex:Qp,fog_vertex:t0,fog_pars_vertex:e0,fog_fragment:n0,fog_pars_fragment:i0,gradientmap_pars_fragment:s0,lightmap_pars_fragment:r0,lights_lambert_fragment:o0,lights_lambert_pars_fragment:a0,lights_pars_begin:l0,lights_toon_fragment:h0,lights_toon_pars_fragment:u0,lights_phong_fragment:f0,lights_phong_pars_fragment:d0,lights_physical_fragment:p0,lights_physical_pars_fragment:m0,lights_fragment_begin:g0,lights_fragment_maps:_0,lights_fragment_end:v0,logdepthbuf_fragment:x0,logdepthbuf_pars_fragment:M0,logdepthbuf_pars_vertex:y0,logdepthbuf_vertex:S0,map_fragment:b0,map_pars_fragment:E0,map_particle_fragment:w0,map_particle_pars_fragment:T0,metalnessmap_fragment:A0,metalnessmap_pars_fragment:R0,morphinstance_vertex:C0,morphcolor_vertex:L0,morphnormal_vertex:P0,morphtarget_pars_vertex:D0,morphtarget_vertex:I0,normal_fragment_begin:U0,normal_fragment_maps:N0,normal_pars_fragment:O0,normal_pars_vertex:F0,normal_vertex:z0,normalmap_pars_fragment:B0,clearcoat_normal_fragment_begin:k0,clearcoat_normal_fragment_maps:H0,clearcoat_pars_fragment:G0,iridescence_pars_fragment:V0,opaque_fragment:W0,packing:X0,premultiplied_alpha_fragment:q0,project_vertex:Y0,dithering_fragment:K0,dithering_pars_fragment:$0,roughnessmap_fragment:j0,roughnessmap_pars_fragment:Z0,shadowmap_pars_fragment:J0,shadowmap_pars_vertex:Q0,shadowmap_vertex:tm,shadowmask_pars_fragment:em,skinbase_vertex:nm,skinning_pars_vertex:im,skinning_vertex:sm,skinnormal_vertex:rm,specularmap_fragment:om,specularmap_pars_fragment:am,tonemapping_fragment:lm,tonemapping_pars_fragment:cm,transmission_fragment:hm,transmission_pars_fragment:um,uv_pars_fragment:fm,uv_pars_vertex:dm,uv_vertex:pm,worldpos_vertex:mm,background_vert:gm,background_frag:_m,backgroundCube_vert:vm,backgroundCube_frag:xm,cube_vert:Mm,cube_frag:ym,depth_vert:Sm,depth_frag:bm,distanceRGBA_vert:Em,distanceRGBA_frag:wm,equirect_vert:Tm,equirect_frag:Am,linedashed_vert:Rm,linedashed_frag:Cm,meshbasic_vert:Lm,meshbasic_frag:Pm,meshlambert_vert:Dm,meshlambert_frag:Im,meshmatcap_vert:Um,meshmatcap_frag:Nm,meshnormal_vert:Om,meshnormal_frag:Fm,meshphong_vert:zm,meshphong_frag:Bm,meshphysical_vert:km,meshphysical_frag:Hm,meshtoon_vert:Gm,meshtoon_frag:Vm,points_vert:Wm,points_frag:Xm,shadow_vert:qm,shadow_frag:Ym,sprite_vert:Km,sprite_frag:$m},ct={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new Dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new Dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},ri={basic:{uniforms:dn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:dn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new yt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:dn([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:dn([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:dn([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new yt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:dn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:dn([ct.points,ct.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:dn([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:dn([ct.common,ct.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:dn([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:dn([ct.sprite,ct.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:dn([ct.common,ct.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:dn([ct.lights,ct.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};ri.physical={uniforms:dn([ri.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new Dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new Dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new Dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const ao={r:0,b:0,g:0},ts=new ei,jm=new Ae;function Zm(i,t,e,n,s,r,a){const l=new yt(0);let o=r===!0?0:1,c,u,h=null,f=0,d=null;function g(b){let S=b.isScene===!0?b.background:null;return S&&S.isTexture&&(S=(b.backgroundBlurriness>0?e:t).get(S)),S}function _(b){let S=!1;const v=g(b);v===null?p(l,o):v&&v.isColor&&(p(v,1),S=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||S)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,S){const v=g(S);v&&(v.isCubeTexture||v.mapping===ra)?(u===void 0&&(u=new Ut(new re(1,1,1),new un({name:"BackgroundCubeMaterial",uniforms:Ws(ri.backgroundCube.uniforms),vertexShader:ri.backgroundCube.vertexShader,fragmentShader:ri.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),ts.copy(S.backgroundRotation),ts.x*=-1,ts.y*=-1,ts.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(ts.y*=-1,ts.z*=-1),u.material.uniforms.envMap.value=v,u.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(jm.makeRotationFromEuler(ts)),u.material.toneMapped=ee.getTransfer(v.colorSpace)!==ge,(h!==v||f!==v.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),u.layers.enableAll(),b.unshift(u,u.geometry,u.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Ut(new Ei(2,2),new un({name:"BackgroundMaterial",uniforms:Ws(ri.background.uniforms),vertexShader:ri.background.vertexShader,fragmentShader:ri.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=ee.getTransfer(v.colorSpace)!==ge,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(h!==v||f!==v.version||d!==i.toneMapping)&&(c.material.needsUpdate=!0,h=v,f=v.version,d=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,S){b.getRGB(ao,cf(i)),n.buffers.color.setClear(ao.r,ao.g,ao.b,S,a)}return{getClearColor:function(){return l},setClearColor:function(b,S=1){l.set(b),o=S,p(l,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,p(l,o)},render:_,addToRenderList:m}}function Jm(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function l(x,R,I,U,H){let $=!1;const q=h(U,I,R);r!==q&&(r=q,c(r.object)),$=d(x,U,I,H),$&&g(x,U,I,H),H!==null&&t.update(H,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,v(x,R,I,U),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function o(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function u(x){return i.deleteVertexArray(x)}function h(x,R,I){const U=I.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let $=H[R.id];$===void 0&&($={},H[R.id]=$);let q=$[U];return q===void 0&&(q=f(o()),$[U]=q),q}function f(x){const R=[],I=[],U=[];for(let H=0;H<e;H++)R[H]=0,I[H]=0,U[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:I,attributeDivisors:U,object:x,attributes:{},index:null}}function d(x,R,I,U){const H=r.attributes,$=R.attributes;let q=0;const Y=I.getAttributes();for(const V in Y)if(Y[V].location>=0){const st=H[V];let gt=$[V];if(gt===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(gt=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(gt=x.instanceColor)),st===void 0||st.attribute!==gt||gt&&st.data!==gt.data)return!0;q++}return r.attributesNum!==q||r.index!==U}function g(x,R,I,U){const H={},$=R.attributes;let q=0;const Y=I.getAttributes();for(const V in Y)if(Y[V].location>=0){let st=$[V];st===void 0&&(V==="instanceMatrix"&&x.instanceMatrix&&(st=x.instanceMatrix),V==="instanceColor"&&x.instanceColor&&(st=x.instanceColor));const gt={};gt.attribute=st,st&&st.data&&(gt.data=st.data),H[V]=gt,q++}r.attributes=H,r.attributesNum=q,r.index=U}function _(){const x=r.newAttributes;for(let R=0,I=x.length;R<I;R++)x[R]=0}function m(x){p(x,0)}function p(x,R){const I=r.newAttributes,U=r.enabledAttributes,H=r.attributeDivisors;I[x]=1,U[x]===0&&(i.enableVertexAttribArray(x),U[x]=1),H[x]!==R&&(i.vertexAttribDivisor(x,R),H[x]=R)}function b(){const x=r.newAttributes,R=r.enabledAttributes;for(let I=0,U=R.length;I<U;I++)R[I]!==x[I]&&(i.disableVertexAttribArray(I),R[I]=0)}function S(x,R,I,U,H,$,q){q===!0?i.vertexAttribIPointer(x,R,I,H,$):i.vertexAttribPointer(x,R,I,U,H,$)}function v(x,R,I,U){_();const H=U.attributes,$=I.getAttributes(),q=R.defaultAttributeValues;for(const Y in $){const V=$[Y];if(V.location>=0){let nt=H[Y];if(nt===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor)),nt!==void 0){const st=nt.normalized,gt=nt.itemSize,Wt=t.get(nt);if(Wt===void 0)continue;const he=Wt.buffer,j=Wt.type,rt=Wt.bytesPerElement,Mt=j===i.INT||j===i.UNSIGNED_INT||nt.gpuType===_c;if(nt.isInterleavedBufferAttribute){const ht=nt.data,Lt=ht.stride,Ot=nt.offset;if(ht.isInstancedInterleavedBuffer){for(let It=0;It<V.locationSize;It++)p(V.location+It,ht.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let It=0;It<V.locationSize;It++)m(V.location+It);i.bindBuffer(i.ARRAY_BUFFER,he);for(let It=0;It<V.locationSize;It++)S(V.location+It,gt/V.locationSize,j,st,Lt*rt,(Ot+gt/V.locationSize*It)*rt,Mt)}else{if(nt.isInstancedBufferAttribute){for(let ht=0;ht<V.locationSize;ht++)p(V.location+ht,nt.meshPerAttribute);x.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=nt.meshPerAttribute*nt.count)}else for(let ht=0;ht<V.locationSize;ht++)m(V.location+ht);i.bindBuffer(i.ARRAY_BUFFER,he);for(let ht=0;ht<V.locationSize;ht++)S(V.location+ht,gt/V.locationSize,j,st,gt*rt,gt/V.locationSize*ht*rt,Mt)}}else if(q!==void 0){const st=q[Y];if(st!==void 0)switch(st.length){case 2:i.vertexAttrib2fv(V.location,st);break;case 3:i.vertexAttrib3fv(V.location,st);break;case 4:i.vertexAttrib4fv(V.location,st);break;default:i.vertexAttrib1fv(V.location,st)}}}}b()}function L(){C();for(const x in n){const R=n[x];for(const I in R){const U=R[I];for(const H in U)u(U[H].object),delete U[H];delete R[I]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;const R=n[x.id];for(const I in R){const U=R[I];for(const H in U)u(U[H].object),delete U[H];delete R[I]}delete n[x.id]}function w(x){for(const R in n){const I=n[R];if(I[x.id]===void 0)continue;const U=I[x.id];for(const H in U)u(U[H].object),delete U[H];delete I[x.id]}}function C(){M(),a=!0,r!==s&&(r=s,c(r.object))}function M(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:C,resetDefaultState:M,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:_,enableAttribute:m,disableUnusedAttributes:b}}function Qm(i,t,e){let n;function s(c){n=c}function r(c,u){i.drawArrays(n,c,u),e.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),e.update(u,n,h))}function l(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let d=0;for(let g=0;g<h;g++)d+=u[g];e.update(d,n,1)}function o(c,u,h,f){if(h===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let g=0;g<c.length;g++)a(c[g],u[g],f[g]);else{d.multiDrawArraysInstancedWEBGL(n,c,0,u,0,f,0,h);let g=0;for(let _=0;_<h;_++)g+=u[_]*f[_];e.update(g,n,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=o}function tg(i,t,e,n){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=i.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Jn&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const C=w===ai&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Ti&&n.convert(w)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Mi&&!C)}function o(w){if(w==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=o(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,f=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),S=i.getParameter(i.MAX_VARYING_VECTORS),v=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:f,maxTextures:d,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:L,maxSamples:T}}function eg(i){const t=this;let e=null,n=0,s=!1,r=!1;const a=new ns,l=new Yt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(h,f){const d=h.length!==0||f||n!==0||s;return s=f,n=h.length,d},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,f){e=u(h,f,0)},this.setState=function(h,f,d){const g=h.clippingPlanes,_=h.clipIntersection,m=h.clipShadows,p=i.get(h);if(!s||g===null||g.length===0||r&&!m)r?u(null):c();else{const b=r?0:n,S=b*4;let v=p.clippingState||null;o.value=v,v=u(g,f,S,d);for(let L=0;L!==S;++L)v[L]=e[L];p.clippingState=v,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=b}};function c(){o.value!==e&&(o.value=e,o.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function u(h,f,d,g){const _=h!==null?h.length:0;let m=null;if(_!==0){if(m=o.value,g!==!0||m===null){const p=d+_*4,b=f.matrixWorldInverse;l.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let S=0,v=d;S!==_;++S,v+=4)a.copy(h[S]).applyMatrix4(b,l),a.normal.toArray(m,v),m[v+3]=a.constant}o.value=m,o.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,m}}function ng(i){let t=new WeakMap;function e(a,l){return l===yl?a.mapping=ks:l===Sl&&(a.mapping=Hs),a}function n(a){if(a&&a.isTexture){const l=a.mapping;if(l===yl||l===Sl)if(t.has(a)){const o=t.get(a).texture;return e(o,a.mapping)}else{const o=a.image;if(o&&o.height>0){const c=new dp(o.height);return c.fromEquirectangularTexture(i,a),t.set(a,c),a.addEventListener("dispose",s),e(c.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const o=t.get(l);o!==void 0&&(t.delete(l),o.dispose())}function r(){t=new WeakMap}return{get:n,dispose:r}}class Tc extends hf{constructor(t=-1,e=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-t,a=n+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,l-=u*this.view.offsetY,o=l-u*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Is=4,Th=[.125,.215,.35,.446,.526,.582],rs=20,Fa=new Tc,Ah=new yt;let za=null,Ba=0,ka=0,Ha=!1;const is=(1+Math.sqrt(5))/2,Ts=1/is,Rh=[new P(-is,Ts,0),new P(is,Ts,0),new P(-Ts,0,is),new P(Ts,0,is),new P(0,is,-Ts),new P(0,is,Ts),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Ch{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,s=100){za=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,n,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(za,Ba,ka),this._renderer.xr.enabled=Ha,t.scissorTest=!1,lo(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===ks||t.mapping===Hs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),za=this._renderer.getRenderTarget(),Ba=this._renderer.getActiveCubeFace(),ka=this._renderer.getActiveMipmapLevel(),Ha=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:kn,minFilter:kn,generateMipmaps:!1,type:ai,format:Jn,colorSpace:Ks,depthBuffer:!1},s=Lh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Lh(t,e,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=ig(r)),this._blurMaterial=sg(r,t,e)}return s}_compileMaterial(t){const e=new Ut(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,n,s){const l=new Cn(90,1,e,n),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,f=u.toneMapping;u.getClearColor(Ah),u.toneMapping=Hi,u.autoClear=!1;const d=new Ie({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new Ut(new re,d);let _=!1;const m=t.background;m?m.isColor&&(d.color.copy(m),t.background=null,_=!0):(d.color.copy(Ah),_=!0);for(let p=0;p<6;p++){const b=p%3;b===0?(l.up.set(0,o[p],0),l.lookAt(c[p],0,0)):b===1?(l.up.set(0,0,o[p]),l.lookAt(0,c[p],0)):(l.up.set(0,o[p],0),l.lookAt(0,0,c[p]));const S=this._cubeSize;lo(s,b*S,p>2?S:0,S,S),u.setRenderTarget(s),_&&u.render(g,l),u.render(t,l)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=f,u.autoClear=h,t.background=m}_textureToCubeUV(t,e){const n=this._renderer,s=t.mapping===ks||t.mapping===Hs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new Ut(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=t;const o=this._cubeSize;lo(e,0,0,3*o,2*o),n.setRenderTarget(e),n.render(a,Fa)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Rh[(s-r-1)%Rh.length];this._blur(t,r-1,r,a,l)}e.autoClear=n}_blur(t,e,n,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,n,s,"latitudinal",r),this._halfBlur(a,t,n,n,s,"longitudinal",r)}_halfBlur(t,e,n,s,r,a,l){const o=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Ut(this._lodPlanes[s],c),f=c.uniforms,d=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*rs-1),_=r/g,m=isFinite(r)?1+Math.floor(u*_):rs;m>rs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${rs}`);const p=[];let b=0;for(let w=0;w<rs;++w){const C=w/_,M=Math.exp(-C*C/2);p.push(M),w===0?b+=M:w<m&&(b+=2*M)}for(let w=0;w<p.length;w++)p[w]=p[w]/b;f.envMap.value=t.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",l&&(f.poleAxis.value=l);const{_lodMax:S}=this;f.dTheta.value=g,f.mipInt.value=S-n;const v=this._sizeLods[s],L=3*v*(s>S-Is?s-S+Is:0),T=4*(this._cubeSize-v);lo(e,L,T,3*v,2*v),o.setRenderTarget(e),o.render(h,Fa)}}function ig(i){const t=[],e=[],n=[];let s=i;const r=i-Is+1+Th.length;for(let a=0;a<r;a++){const l=Math.pow(2,s);e.push(l);let o=1/l;a>i-Is?o=Th[a-i+Is-1]:a===0&&(o=0),n.push(o);const c=1/(l-2),u=-c,h=1+c,f=[u,u,h,u,h,h,u,u,h,h,u,h],d=6,g=6,_=3,m=2,p=1,b=new Float32Array(_*g*d),S=new Float32Array(m*g*d),v=new Float32Array(p*g*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,C=T>2?0:-1,M=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];b.set(M,_*g*T),S.set(f,m*g*T);const x=[T,T,T,T,T,T];v.set(x,p*g*T)}const L=new Ke;L.setAttribute("position",new _n(b,_)),L.setAttribute("uv",new _n(S,m)),L.setAttribute("faceIndex",new _n(v,p)),t.push(L),s>Is&&s--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function Lh(i,t,e){const n=new Gn(i,t,e);return n.texture.mapping=ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function lo(i,t,e,n,s){i.viewport.set(t,e,n,s),i.scissor.set(t,e,n,s)}function sg(i,t,e){const n=new Float32Array(rs),s=new P(0,1,0);return new un({name:"SphericalGaussianBlur",defines:{n:rs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ph(){return new un({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ac(),fragmentShader:`

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
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Dh(){return new un({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ac(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Si,depthTest:!1,depthWrite:!1})}function Ac(){return`

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
	`}function rg(i){let t=new WeakMap,e=null;function n(l){if(l&&l.isTexture){const o=l.mapping,c=o===yl||o===Sl,u=o===ks||o===Hs;if(c||u){let h=t.get(l);const f=h!==void 0?h.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==f)return e===null&&(e=new Ch(i)),h=c?e.fromEquirectangular(l,h):e.fromCubemap(l,h),h.texture.pmremVersion=l.pmremVersion,t.set(l,h),h.texture;if(h!==void 0)return h.texture;{const d=l.image;return c&&d&&d.height>0||u&&d&&s(d)?(e===null&&(e=new Ch(i)),h=c?e.fromEquirectangular(l):e.fromCubemap(l),h.texture.pmremVersion=l.pmremVersion,t.set(l,h),l.addEventListener("dispose",r),h.texture):null}}}return l}function s(l){let o=0;const c=6;for(let u=0;u<c;u++)l[u]!==void 0&&o++;return o===c}function r(l){const o=l.target;o.removeEventListener("dispose",r);const c=t.get(o);c!==void 0&&(t.delete(o),c.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:a}}function og(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return t[n]=s,s}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const s=e(n);return s===null&&pr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function ag(i,t,e,n){const s={},r=new WeakMap;function a(h){const f=h.target;f.index!==null&&t.remove(f.index);for(const g in f.attributes)t.remove(f.attributes[g]);for(const g in f.morphAttributes){const _=f.morphAttributes[g];for(let m=0,p=_.length;m<p;m++)t.remove(_[m])}f.removeEventListener("dispose",a),delete s[f.id];const d=r.get(f);d&&(t.remove(d),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,e.memory.geometries--}function l(h,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,e.memory.geometries++),f}function o(h){const f=h.attributes;for(const g in f)t.update(f[g],i.ARRAY_BUFFER);const d=h.morphAttributes;for(const g in d){const _=d[g];for(let m=0,p=_.length;m<p;m++)t.update(_[m],i.ARRAY_BUFFER)}}function c(h){const f=[],d=h.index,g=h.attributes.position;let _=0;if(d!==null){const b=d.array;_=d.version;for(let S=0,v=b.length;S<v;S+=3){const L=b[S+0],T=b[S+1],w=b[S+2];f.push(L,T,T,w,w,L)}}else if(g!==void 0){const b=g.array;_=g.version;for(let S=0,v=b.length/3-1;S<v;S+=3){const L=S+0,T=S+1,w=S+2;f.push(L,T,T,w,w,L)}}else return;const m=new(ef(f)?lf:af)(f,1);m.version=_;const p=r.get(h);p&&t.remove(p),r.set(h,m)}function u(h){const f=r.get(h);if(f){const d=h.index;d!==null&&f.version<d.version&&c(h)}else c(h);return r.get(h)}return{get:l,update:o,getWireframeAttribute:u}}function lg(i,t,e){let n;function s(f){n=f}let r,a;function l(f){r=f.type,a=f.bytesPerElement}function o(f,d){i.drawElements(n,d,r,f*a),e.update(d,n,1)}function c(f,d,g){g!==0&&(i.drawElementsInstanced(n,d,r,f*a,g),e.update(d,n,g))}function u(f,d,g){if(g===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,d,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=d[p];e.update(m,n,1)}function h(f,d,g,_){if(g===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,d[p],_[p]);else{m.multiDrawElementsInstancedWEBGL(n,d,0,r,f,0,_,0,g);let p=0;for(let b=0;b<g;b++)p+=d[b]*_[b];e.update(p,n,1)}}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function cg(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,l){switch(e.calls++,a){case i.TRIANGLES:e.triangles+=l*(r/3);break;case i.LINES:e.lines+=l*(r/2);break;case i.LINE_STRIP:e.lines+=l*(r-1);break;case i.LINE_LOOP:e.lines+=l*r;break;case i.POINTS:e.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:n}}function hg(i,t,e){const n=new WeakMap,s=new Me;function r(a,l,o){const c=a.morphTargetInfluences,u=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,h=u!==void 0?u.length:0;let f=n.get(l);if(f===void 0||f.count!==h){let x=function(){C.dispose(),n.delete(l),l.removeEventListener("dispose",x)};var d=x;f!==void 0&&f.texture.dispose();const g=l.morphAttributes.position!==void 0,_=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],b=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let v=0;g===!0&&(v=1),_===!0&&(v=2),m===!0&&(v=3);let L=l.attributes.position.count*v,T=1;L>t.maxTextureSize&&(T=Math.ceil(L/t.maxTextureSize),L=t.maxTextureSize);const w=new Float32Array(L*T*4*h),C=new sf(w,L,T,h);C.type=Mi,C.needsUpdate=!0;const M=v*4;for(let R=0;R<h;R++){const I=p[R],U=b[R],H=S[R],$=L*T*4*R;for(let q=0;q<I.count;q++){const Y=q*M;g===!0&&(s.fromBufferAttribute(I,q),w[$+Y+0]=s.x,w[$+Y+1]=s.y,w[$+Y+2]=s.z,w[$+Y+3]=0),_===!0&&(s.fromBufferAttribute(U,q),w[$+Y+4]=s.x,w[$+Y+5]=s.y,w[$+Y+6]=s.z,w[$+Y+7]=0),m===!0&&(s.fromBufferAttribute(H,q),w[$+Y+8]=s.x,w[$+Y+9]=s.y,w[$+Y+10]=s.z,w[$+Y+11]=H.itemSize===4?s.w:1)}}f={count:h,texture:C,size:new Dt(L,T)},n.set(l,f),l.addEventListener("dispose",x)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(i,"morphTexture",a.morphTexture,e);else{let g=0;for(let m=0;m<c.length;m++)g+=c[m];const _=l.morphTargetsRelative?1:1-g;o.getUniforms().setValue(i,"morphTargetBaseInfluence",_),o.getUniforms().setValue(i,"morphTargetInfluences",c)}o.getUniforms().setValue(i,"morphTargetsTexture",f.texture,e),o.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function ug(i,t,e,n){let s=new WeakMap;function r(o){const c=n.render.frame,u=o.geometry,h=t.get(o,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),o.isInstancedMesh&&(o.hasEventListener("dispose",l)===!1&&o.addEventListener("dispose",l),s.get(o)!==c&&(e.update(o.instanceMatrix,i.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,i.ARRAY_BUFFER),s.set(o,c))),o.isSkinnedMesh){const f=o.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return h}function a(){s=new WeakMap}function l(o){const c=o.target;c.removeEventListener("dispose",l),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:a}}class df extends gn{constructor(t,e,n,s,r,a,l,o,c,u=Ns){if(u!==Ns&&u!==Vs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Ns&&(n=ls),n===void 0&&u===Vs&&(n=Gs),super(null,s,r,a,l,o,u,n,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:_e,this.minFilter=o!==void 0?o:_e,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const pf=new gn,Ih=new df(1,1),mf=new sf,gf=new Jd,_f=new uf,Uh=[],Nh=[],Oh=new Float32Array(16),Fh=new Float32Array(9),zh=new Float32Array(4);function js(i,t,e){const n=i[0];if(n<=0||n>0)return i;const s=t*e;let r=Uh[s];if(r===void 0&&(r=new Float32Array(s),Uh[s]=r),t!==0){n.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,i[a].toArray(r,l)}return r}function $e(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function je(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function aa(i,t){let e=Nh[t];e===void 0&&(e=new Int32Array(t),Nh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function fg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function dg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2fv(this.addr,t),je(e,t)}}function pg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if($e(e,t))return;i.uniform3fv(this.addr,t),je(e,t)}}function mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4fv(this.addr,t),je(e,t)}}function gg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),je(e,t)}else{if($e(e,n))return;zh.set(n),i.uniformMatrix2fv(this.addr,!1,zh),je(e,n)}}function _g(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),je(e,t)}else{if($e(e,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),je(e,n)}}function vg(i,t){const e=this.cache,n=t.elements;if(n===void 0){if($e(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),je(e,t)}else{if($e(e,n))return;Oh.set(n),i.uniformMatrix4fv(this.addr,!1,Oh),je(e,n)}}function xg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function Mg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2iv(this.addr,t),je(e,t)}}function yg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3iv(this.addr,t),je(e,t)}}function Sg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4iv(this.addr,t),je(e,t)}}function bg(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Eg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if($e(e,t))return;i.uniform2uiv(this.addr,t),je(e,t)}}function wg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if($e(e,t))return;i.uniform3uiv(this.addr,t),je(e,t)}}function Tg(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if($e(e,t))return;i.uniform4uiv(this.addr,t),je(e,t)}}function Ag(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ih.compareFunction=tf,r=Ih):r=pf,e.setTexture2D(t||r,s)}function Rg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture3D(t||gf,s)}function Cg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTextureCube(t||_f,s)}function Lg(i,t,e){const n=this.cache,s=e.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),e.setTexture2DArray(t||mf,s)}function Pg(i){switch(i){case 5126:return fg;case 35664:return dg;case 35665:return pg;case 35666:return mg;case 35674:return gg;case 35675:return _g;case 35676:return vg;case 5124:case 35670:return xg;case 35667:case 35671:return Mg;case 35668:case 35672:return yg;case 35669:case 35673:return Sg;case 5125:return bg;case 36294:return Eg;case 36295:return wg;case 36296:return Tg;case 35678:case 36198:case 36298:case 36306:case 35682:return Ag;case 35679:case 36299:case 36307:return Rg;case 35680:case 36300:case 36308:case 36293:return Cg;case 36289:case 36303:case 36311:case 36292:return Lg}}function Dg(i,t){i.uniform1fv(this.addr,t)}function Ig(i,t){const e=js(t,this.size,2);i.uniform2fv(this.addr,e)}function Ug(i,t){const e=js(t,this.size,3);i.uniform3fv(this.addr,e)}function Ng(i,t){const e=js(t,this.size,4);i.uniform4fv(this.addr,e)}function Og(i,t){const e=js(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Fg(i,t){const e=js(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function zg(i,t){const e=js(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Bg(i,t){i.uniform1iv(this.addr,t)}function kg(i,t){i.uniform2iv(this.addr,t)}function Hg(i,t){i.uniform3iv(this.addr,t)}function Gg(i,t){i.uniform4iv(this.addr,t)}function Vg(i,t){i.uniform1uiv(this.addr,t)}function Wg(i,t){i.uniform2uiv(this.addr,t)}function Xg(i,t){i.uniform3uiv(this.addr,t)}function qg(i,t){i.uniform4uiv(this.addr,t)}function Yg(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||pf,r[a])}function Kg(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||gf,r[a])}function $g(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||_f,r[a])}function jg(i,t,e){const n=this.cache,s=t.length,r=aa(e,s);$e(n,r)||(i.uniform1iv(this.addr,r),je(n,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||mf,r[a])}function Zg(i){switch(i){case 5126:return Dg;case 35664:return Ig;case 35665:return Ug;case 35666:return Ng;case 35674:return Og;case 35675:return Fg;case 35676:return zg;case 5124:case 35670:return Bg;case 35667:case 35671:return kg;case 35668:case 35672:return Hg;case 35669:case 35673:return Gg;case 5125:return Vg;case 36294:return Wg;case 36295:return Xg;case 36296:return qg;case 35678:case 36198:case 36298:case 36306:case 35682:return Yg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return $g;case 36289:case 36303:case 36311:case 36292:return jg}}class Jg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Pg(e.type)}}class Qg{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Zg(e.type)}}class t_{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(t,e[l.id],n)}}}const Ga=/(\w+)(\])?(\[|\.)?/g;function Bh(i,t){i.seq.push(t),i.map[t.id]=t}function e_(i,t,e){const n=i.name,s=n.length;for(Ga.lastIndex=0;;){const r=Ga.exec(n),a=Ga.lastIndex;let l=r[1];const o=r[2]==="]",c=r[3];if(o&&(l=l|0),c===void 0||c==="["&&a+2===s){Bh(e,c===void 0?new Jg(l,i,t):new Qg(l,i,t));break}else{let h=e.map[l];h===void 0&&(h=new t_(l),Bh(e,h)),e=h}}}class No{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);e_(r,a,this)}}setValue(t,e,n,s){const r=this.map[e];r!==void 0&&r.setValue(t,n,s)}setOptional(t,e,n){const s=e[n];s!==void 0&&this.setValue(t,n,s)}static upload(t,e,n,s){for(let r=0,a=e.length;r!==a;++r){const l=e[r],o=n[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){const n=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&n.push(a)}return n}}function kh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const n_=37297;let i_=0;function s_(i,t){const e=i.split(`
`),n=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const l=a+1;n.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return n.join(`
`)}const Hh=new Yt;function r_(i){ee._getMatrix(Hh,ee.workingColorSpace,i);const t=`mat3( ${Hh.elements.map(e=>e.toFixed(4))} )`;switch(ee.getTransfer(i)){case oa:return[t,"LinearTransferOETF"];case ge:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function Gh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=i.getShaderInfoLog(t).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+s_(i.getShaderSource(t),a)}else return s}function o_(i,t){const e=r_(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function a_(i,t){let e;switch(t){case zu:e="Linear";break;case Bu:e="Reinhard";break;case ku:e="Cineon";break;case gc:e="ACESFilmic";break;case Hu:e="AgX";break;case Gu:e="Neutral";break;case Pd:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const co=new P;function l_(){ee.getLuminanceCoefficients(co);const i=co.x.toFixed(4),t=co.y.toFixed(4),e=co.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c_(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(mr).join(`
`)}function h_(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function u_(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(t,s),a=r.name;let l=1;r.type===i.FLOAT_MAT2&&(l=2),r.type===i.FLOAT_MAT3&&(l=3),r.type===i.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:i.getAttribLocation(t,a),locationSize:l}}return e}function mr(i){return i!==""}function Vh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Wh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const f_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Jl(i){return i.replace(f_,p_)}const d_=new Map;function p_(i,t){let e=jt[t];if(e===void 0){const n=d_.get(t);if(n!==void 0)e=jt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Jl(e)}const m_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Xh(i){return i.replace(m_,g_)}function g_(i,t,e,n){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function qh(i){let t=`precision ${i.precision} float;
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
#define LOW_PRECISION`),t}function __(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Ou?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===_i&&(t="SHADOWMAP_TYPE_VSM"),t}function v_(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case ks:case Hs:t="ENVMAP_TYPE_CUBE";break;case ra:t="ENVMAP_TYPE_CUBE_UV";break}return t}function x_(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Hs:t="ENVMAP_MODE_REFRACTION";break}return t}function M_(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case mc:t="ENVMAP_BLENDING_MULTIPLY";break;case Cd:t="ENVMAP_BLENDING_MIX";break;case Ld:t="ENVMAP_BLENDING_ADD";break}return t}function y_(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:n,maxMip:e}}function S_(i,t,e,n){const s=i.getContext(),r=e.defines;let a=e.vertexShader,l=e.fragmentShader;const o=__(e),c=v_(e),u=x_(e),h=M_(e),f=y_(e),d=c_(e),g=h_(r),_=s.createProgram();let m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(mr).join(`
`),p.length>0&&(p+=`
`)):(m=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(mr).join(`
`),p=[qh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==Hi?"#define TONE_MAPPING":"",e.toneMapping!==Hi?jt.tonemapping_pars_fragment:"",e.toneMapping!==Hi?a_("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,o_("linearToOutputTexel",e.outputColorSpace),l_(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(mr).join(`
`)),a=Jl(a),a=Vh(a,e),a=Wh(a,e),l=Jl(l),l=Vh(l,e),l=Wh(l,e),a=Xh(a),l=Xh(l),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===rh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===rh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const S=b+m+a,v=b+p+l,L=kh(s,s.VERTEX_SHADER,S),T=kh(s,s.FRAGMENT_SHADER,v);s.attachShader(_,L),s.attachShader(_,T),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function w(R){if(i.debug.checkShaderErrors){const I=s.getProgramInfoLog(_).trim(),U=s.getShaderInfoLog(L).trim(),H=s.getShaderInfoLog(T).trim();let $=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,L,T);else{const Y=Gh(s,L,"vertex"),V=Gh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+I+`
`+Y+`
`+V)}else I!==""?console.warn("THREE.WebGLProgram: Program Info Log:",I):(U===""||H==="")&&(q=!1);q&&(R.diagnostics={runnable:$,programLog:I,vertexShader:{log:U,prefix:m},fragmentShader:{log:H,prefix:p}})}s.deleteShader(L),s.deleteShader(T),C=new No(s,_),M=u_(s,_)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let M;this.getAttributes=function(){return M===void 0&&w(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,n_)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=i_++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=L,this.fragmentShader=T,this}let b_=0;class E_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new w_(t),e.set(t,n)),n}}class w_{constructor(t){this.id=b_++,this.code=t,this.usedTimes=0}}function T_(i,t,e,n,s,r,a){const l=new rf,o=new E_,c=new Set,u=[],h=s.logarithmicDepthBuffer,f=s.vertexTextures;let d=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,x,R,I,U){const H=I.fog,$=U.geometry,q=M.isMeshStandardMaterial?I.environment:null,Y=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),V=Y&&Y.mapping===ra?Y.image.height:null,nt=g[M.type];M.precision!==null&&(d=s.getMaxPrecision(M.precision),d!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",d,"instead."));const st=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,gt=st!==void 0?st.length:0;let Wt=0;$.morphAttributes.position!==void 0&&(Wt=1),$.morphAttributes.normal!==void 0&&(Wt=2),$.morphAttributes.color!==void 0&&(Wt=3);let he,j,rt,Mt;if(nt){const me=ri[nt];he=me.vertexShader,j=me.fragmentShader}else he=M.vertexShader,j=M.fragmentShader,o.update(M),rt=o.getVertexShaderID(M),Mt=o.getFragmentShaderID(M);const ht=i.getRenderTarget(),Lt=i.state.buffers.depth.getReversed(),Ot=U.isInstancedMesh===!0,It=U.isBatchedMesh===!0,kt=!!M.map,Vt=!!M.matcap,ve=!!Y,O=!!M.aoMap,Xe=!!M.lightMap,Jt=!!M.bumpMap,Qt=!!M.normalMap,Tt=!!M.displacementMap,ye=!!M.emissiveMap,Pt=!!M.metalnessMap,A=!!M.roughnessMap,y=M.anisotropy>0,G=M.clearcoat>0,J=M.dispersion>0,et=M.iridescence>0,Z=M.sheen>0,At=M.transmission>0,ft=y&&!!M.anisotropyMap,_t=G&&!!M.clearcoatMap,ie=G&&!!M.clearcoatNormalMap,ot=G&&!!M.clearcoatRoughnessMap,vt=et&&!!M.iridescenceMap,Nt=et&&!!M.iridescenceThicknessMap,zt=Z&&!!M.sheenColorMap,xt=Z&&!!M.sheenRoughnessMap,te=!!M.specularMap,Kt=!!M.specularColorMap,we=!!M.specularIntensityMap,N=At&&!!M.transmissionMap,ut=At&&!!M.thicknessMap,K=!!M.gradientMap,Q=!!M.alphaMap,mt=M.alphaTest>0,dt=!!M.alphaHash,Xt=!!M.extensions;let Oe=Hi;M.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(Oe=i.toneMapping);const on={shaderID:nt,shaderType:M.type,shaderName:M.name,vertexShader:he,fragmentShader:j,defines:M.defines,customVertexShaderID:rt,customFragmentShaderID:Mt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:d,batching:It,batchingColor:It&&U._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&U.instanceColor!==null,instancingMorph:Ot&&U.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:ht===null?i.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Ks,alphaToCoverage:!!M.alphaToCoverage,map:kt,matcap:Vt,envMap:ve,envMapMode:ve&&Y.mapping,envMapCubeUVHeight:V,aoMap:O,lightMap:Xe,bumpMap:Jt,normalMap:Qt,displacementMap:f&&Tt,emissiveMap:ye,normalMapObjectSpace:Qt&&M.normalMapType===Nd,normalMapTangentSpace:Qt&&M.normalMapType===bc,metalnessMap:Pt,roughnessMap:A,anisotropy:y,anisotropyMap:ft,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:ie,clearcoatRoughnessMap:ot,dispersion:J,iridescence:et,iridescenceMap:vt,iridescenceThicknessMap:Nt,sheen:Z,sheenColorMap:zt,sheenRoughnessMap:xt,specularMap:te,specularColorMap:Kt,specularIntensityMap:we,transmission:At,transmissionMap:N,thicknessMap:ut,gradientMap:K,opaque:M.transparent===!1&&M.blending===Us&&M.alphaToCoverage===!1,alphaMap:Q,alphaTest:mt,alphaHash:dt,combine:M.combine,mapUv:kt&&_(M.map.channel),aoMapUv:O&&_(M.aoMap.channel),lightMapUv:Xe&&_(M.lightMap.channel),bumpMapUv:Jt&&_(M.bumpMap.channel),normalMapUv:Qt&&_(M.normalMap.channel),displacementMapUv:Tt&&_(M.displacementMap.channel),emissiveMapUv:ye&&_(M.emissiveMap.channel),metalnessMapUv:Pt&&_(M.metalnessMap.channel),roughnessMapUv:A&&_(M.roughnessMap.channel),anisotropyMapUv:ft&&_(M.anisotropyMap.channel),clearcoatMapUv:_t&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:ie&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ot&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:zt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:xt&&_(M.sheenRoughnessMap.channel),specularMapUv:te&&_(M.specularMap.channel),specularColorMapUv:Kt&&_(M.specularColorMap.channel),specularIntensityMapUv:we&&_(M.specularIntensityMap.channel),transmissionMapUv:N&&_(M.transmissionMap.channel),thicknessMapUv:ut&&_(M.thicknessMap.channel),alphaMapUv:Q&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(Qt||y),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(kt||Q),fog:!!H,useFog:M.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Lt,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:gt,morphTextureStride:Wt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&R.length>0,shadowMapType:i.shadowMap.type,toneMapping:Oe,decodeVideoTexture:kt&&M.map.isVideoTexture===!0&&ee.getTransfer(M.map.colorSpace)===ge,decodeVideoTextureEmissive:ye&&M.emissiveMap.isVideoTexture===!0&&ee.getTransfer(M.emissiveMap.colorSpace)===ge,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===yn,flipSided:M.side===mn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Xt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&M.extensions.multiDraw===!0||It)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return on.vertexUv1s=c.has(1),on.vertexUv2s=c.has(2),on.vertexUv3s=c.has(3),c.clear(),on}function p(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const R in M.defines)x.push(R),x.push(M.defines[R]);return M.isRawShaderMaterial===!1&&(b(x,M),S(x,M),x.push(i.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function b(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function S(M,x){l.disableAll(),x.supportsVertexTextures&&l.enable(0),x.instancing&&l.enable(1),x.instancingColor&&l.enable(2),x.instancingMorph&&l.enable(3),x.matcap&&l.enable(4),x.envMap&&l.enable(5),x.normalMapObjectSpace&&l.enable(6),x.normalMapTangentSpace&&l.enable(7),x.clearcoat&&l.enable(8),x.iridescence&&l.enable(9),x.alphaTest&&l.enable(10),x.vertexColors&&l.enable(11),x.vertexAlphas&&l.enable(12),x.vertexUv1s&&l.enable(13),x.vertexUv2s&&l.enable(14),x.vertexUv3s&&l.enable(15),x.vertexTangents&&l.enable(16),x.anisotropy&&l.enable(17),x.alphaHash&&l.enable(18),x.batching&&l.enable(19),x.dispersion&&l.enable(20),x.batchingColor&&l.enable(21),M.push(l.mask),l.disableAll(),x.fog&&l.enable(0),x.useFog&&l.enable(1),x.flatShading&&l.enable(2),x.logarithmicDepthBuffer&&l.enable(3),x.reverseDepthBuffer&&l.enable(4),x.skinning&&l.enable(5),x.morphTargets&&l.enable(6),x.morphNormals&&l.enable(7),x.morphColors&&l.enable(8),x.premultipliedAlpha&&l.enable(9),x.shadowMapEnabled&&l.enable(10),x.doubleSided&&l.enable(11),x.flipSided&&l.enable(12),x.useDepthPacking&&l.enable(13),x.dithering&&l.enable(14),x.transmission&&l.enable(15),x.sheen&&l.enable(16),x.opaque&&l.enable(17),x.pointsUvs&&l.enable(18),x.decodeVideoTexture&&l.enable(19),x.decodeVideoTextureEmissive&&l.enable(20),x.alphaToCoverage&&l.enable(21),M.push(l.mask)}function v(M){const x=g[M.type];let R;if(x){const I=ri[x];R=Ar.clone(I.uniforms)}else R=M.uniforms;return R}function L(M,x){let R;for(let I=0,U=u.length;I<U;I++){const H=u[I];if(H.cacheKey===x){R=H,++R.usedTimes;break}}return R===void 0&&(R=new S_(i,x,M,r),u.push(R)),R}function T(M){if(--M.usedTimes===0){const x=u.indexOf(M);u[x]=u[u.length-1],u.pop(),M.destroy()}}function w(M){o.remove(M)}function C(){o.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:L,releaseProgram:T,releaseShaderCache:w,programs:u,dispose:C}}function A_(){let i=new WeakMap;function t(a){return i.has(a)}function e(a){let l=i.get(a);return l===void 0&&(l={},i.set(a,l)),l}function n(a){i.delete(a)}function s(a,l,o){i.get(a)[l]=o}function r(){i=new WeakMap}return{has:t,get:e,remove:n,update:s,dispose:r}}function R_(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Yh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Kh(){const i=[];let t=0;const e=[],n=[],s=[];function r(){t=0,e.length=0,n.length=0,s.length=0}function a(h,f,d,g,_,m){let p=i[t];return p===void 0?(p={id:h.id,object:h,geometry:f,material:d,groupOrder:g,renderOrder:h.renderOrder,z:_,group:m},i[t]=p):(p.id=h.id,p.object=h,p.geometry=f,p.material=d,p.groupOrder=g,p.renderOrder=h.renderOrder,p.z=_,p.group=m),t++,p}function l(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.push(p):d.transparent===!0?s.push(p):e.push(p)}function o(h,f,d,g,_,m){const p=a(h,f,d,g,_,m);d.transmission>0?n.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function c(h,f){e.length>1&&e.sort(h||R_),n.length>1&&n.sort(f||Yh),s.length>1&&s.sort(f||Yh)}function u(){for(let h=t,f=i.length;h<f;h++){const d=i[h];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:n,transparent:s,init:r,push:l,unshift:o,finish:u,sort:c}}function C_(){let i=new WeakMap;function t(n,s){const r=i.get(n);let a;return r===void 0?(a=new Kh,i.set(n,[a])):s>=r.length?(a=new Kh,r.push(a)):a=r[s],a}function e(){i=new WeakMap}return{get:t,dispose:e}}function L_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new P,color:new yt};break;case"SpotLight":e={position:new P,direction:new P,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new P,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new P,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new P,halfWidth:new P,halfHeight:new P};break}return i[t.id]=e,e}}}function P_(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let D_=0;function I_(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function U_(i){const t=new L_,e=P_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const s=new P,r=new Ae,a=new Ae;function l(c){let u=0,h=0,f=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let d=0,g=0,_=0,m=0,p=0,b=0,S=0,v=0,L=0,T=0,w=0;c.sort(I_);for(let M=0,x=c.length;M<x;M++){const R=c[M],I=R.color,U=R.intensity,H=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)u+=I.r*U,h+=I.g*U,f+=I.b*U;else if(R.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(R.sh.coefficients[q],U);w++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.directionalShadow[d]=V,n.directionalShadowMap[d]=$,n.directionalShadowMatrix[d]=R.shadow.matrix,b++}n.directional[d]=q,d++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(I).multiplyScalar(U),q.distance=H,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,n.spot[_]=q;const Y=R.shadow;if(R.map&&(n.spotLightMap[L]=R.map,L++,Y.updateMatrices(R),R.castShadow&&T++),n.spotLightMatrix[_]=Y.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,n.spotShadow[_]=V,n.spotShadowMap[_]=$,v++}_++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(I).multiplyScalar(U),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),n.rectArea[m]=q,m++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Y=R.shadow,V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,n.pointShadow[g]=V,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=R.shadow.matrix,S++}n.point[g]=q,g++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(U),q.groundColor.copy(R.groundColor).multiplyScalar(U),n.hemi[p]=q,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ct.LTC_FLOAT_1,n.rectAreaLTC2=ct.LTC_FLOAT_2):(n.rectAreaLTC1=ct.LTC_HALF_1,n.rectAreaLTC2=ct.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=f;const C=n.hash;(C.directionalLength!==d||C.pointLength!==g||C.spotLength!==_||C.rectAreaLength!==m||C.hemiLength!==p||C.numDirectionalShadows!==b||C.numPointShadows!==S||C.numSpotShadows!==v||C.numSpotMaps!==L||C.numLightProbes!==w)&&(n.directional.length=d,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=S,n.pointShadowMap.length=S,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=S,n.spotLightMatrix.length=v+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=w,C.directionalLength=d,C.pointLength=g,C.spotLength=_,C.rectAreaLength=m,C.hemiLength=p,C.numDirectionalShadows=b,C.numPointShadows=S,C.numSpotShadows=v,C.numSpotMaps=L,C.numLightProbes=w,n.version=D_++)}function o(c,u){let h=0,f=0,d=0,g=0,_=0;const m=u.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){const S=c[p];if(S.isDirectionalLight){const v=n.directional[h];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),h++}else if(S.isSpotLight){const v=n.spot[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),d++}else if(S.isRectAreaLight){const v=n.rectArea[g];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),a.identity(),r.copy(S.matrixWorld),r.premultiply(m),a.extractRotation(r),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(a),v.halfHeight.applyMatrix4(a),g++}else if(S.isPointLight){const v=n.point[f];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),f++}else if(S.isHemisphereLight){const v=n.hemi[_];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),_++}}}return{setup:l,setupView:o,state:n}}function $h(i){const t=new U_(i),e=[],n=[];function s(u){c.camera=u,e.length=0,n.length=0}function r(u){e.push(u)}function a(u){n.push(u)}function l(){t.setup(e)}function o(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:l,setupLightsView:o,pushLight:r,pushShadow:a}}function N_(i){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new $h(i),t.set(s,[l])):r>=a.length?(l=new $h(i),a.push(l)):l=a[r],l}function n(){t=new WeakMap}return{get:e,dispose:n}}class O_ extends Ai{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Id,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class F_ extends Ai{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const z_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,B_=`uniform sampler2D shadow_pass;
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
}`;function k_(i,t,e){let n=new wc;const s=new Dt,r=new Dt,a=new Me,l=new O_({depthPacking:Ud}),o=new F_,c={},u=e.maxTextureSize,h={[qi]:mn,[mn]:qi,[yn]:yn},f=new un({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Dt},radius:{value:4}},vertexShader:z_,fragmentShader:B_}),d=f.clone();d.defines.HORIZONTAL_PASS=1;const g=new Ke;g.setAttribute("position",new _n(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ut(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ou;let p=this.type;this.render=function(T,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;const M=i.getRenderTarget(),x=i.getActiveCubeFace(),R=i.getActiveMipmapLevel(),I=i.state;I.setBlending(Si),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const U=p!==_i&&this.type===_i,H=p===_i&&this.type!==_i;for(let $=0,q=T.length;$<q;$++){const Y=T[$],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const nt=V.getFrameExtents();if(s.multiply(nt),r.copy(V.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/nt.x),s.x=r.x*nt.x,V.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/nt.y),s.y=r.y*nt.y,V.mapSize.y=r.y)),V.map===null||U===!0||H===!0){const gt=this.type!==_i?{minFilter:_e,magFilter:_e}:{};V.map!==null&&V.map.dispose(),V.map=new Gn(s.x,s.y,gt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}i.setRenderTarget(V.map),i.clear();const st=V.getViewportCount();for(let gt=0;gt<st;gt++){const Wt=V.getViewport(gt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),I.viewport(a),V.updateMatrices(Y,gt),n=V.getFrustum(),v(w,C,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===_i&&b(V,C),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(M,x,R)};function b(T,w){const C=t.update(_);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Gn(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(w,null,C,f,_,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(w,null,C,d,_,null)}function S(T,w,C,M){let x=null;const R=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)x=R;else if(x=C.isPointLight===!0?o:l,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const I=x.uuid,U=w.uuid;let H=c[I];H===void 0&&(H={},c[I]=H);let $=H[U];$===void 0&&($=x.clone(),H[U]=$,w.addEventListener("dispose",L)),x=$}if(x.visible=w.visible,x.wireframe=w.wireframe,M===_i?x.side=w.shadowSide!==null?w.shadowSide:w.side:x.side=w.shadowSide!==null?w.shadowSide:h[w.side],x.alphaMap=w.alphaMap,x.alphaTest=w.alphaTest,x.map=w.map,x.clipShadows=w.clipShadows,x.clippingPlanes=w.clippingPlanes,x.clipIntersection=w.clipIntersection,x.displacementMap=w.displacementMap,x.displacementScale=w.displacementScale,x.displacementBias=w.displacementBias,x.wireframeLinewidth=w.wireframeLinewidth,x.linewidth=w.linewidth,C.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const I=i.properties.get(x);I.light=C}return x}function v(T,w,C,M,x){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===_i)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const U=t.update(T),H=T.material;if(Array.isArray(H)){const $=U.groups;for(let q=0,Y=$.length;q<Y;q++){const V=$[q],nt=H[V.materialIndex];if(nt&&nt.visible){const st=S(T,nt,M,x);T.onBeforeShadow(i,T,w,C,U,st,V),i.renderBufferDirect(C,null,U,st,T,V),T.onAfterShadow(i,T,w,C,U,st,V)}}}else if(H.visible){const $=S(T,H,M,x);T.onBeforeShadow(i,T,w,C,U,$,null),i.renderBufferDirect(C,null,U,$,T,null),T.onAfterShadow(i,T,w,C,U,$,null)}}const I=T.children;for(let U=0,H=I.length;U<H;U++)v(I[U],w,C,M,x)}function L(T){T.target.removeEventListener("dispose",L);for(const C in c){const M=c[C],x=T.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const H_={[pl]:ml,[gl]:xl,[_l]:Ml,[Bs]:vl,[ml]:pl,[xl]:gl,[Ml]:_l,[vl]:Bs};function G_(i,t){function e(){let N=!1;const ut=new Me;let K=null;const Q=new Me(0,0,0,0);return{setMask:function(mt){K!==mt&&!N&&(i.colorMask(mt,mt,mt,mt),K=mt)},setLocked:function(mt){N=mt},setClear:function(mt,dt,Xt,Oe,on){on===!0&&(mt*=Oe,dt*=Oe,Xt*=Oe),ut.set(mt,dt,Xt,Oe),Q.equals(ut)===!1&&(i.clearColor(mt,dt,Xt,Oe),Q.copy(ut))},reset:function(){N=!1,K=null,Q.set(-1,0,0,0)}}}function n(){let N=!1,ut=!1,K=null,Q=null,mt=null;return{setReversed:function(dt){if(ut!==dt){const Xt=t.get("EXT_clip_control");ut?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const Oe=mt;mt=null,this.setClear(Oe)}ut=dt},getReversed:function(){return ut},setTest:function(dt){dt?ht(i.DEPTH_TEST):Lt(i.DEPTH_TEST)},setMask:function(dt){K!==dt&&!N&&(i.depthMask(dt),K=dt)},setFunc:function(dt){if(ut&&(dt=H_[dt]),Q!==dt){switch(dt){case pl:i.depthFunc(i.NEVER);break;case ml:i.depthFunc(i.ALWAYS);break;case gl:i.depthFunc(i.LESS);break;case Bs:i.depthFunc(i.LEQUAL);break;case _l:i.depthFunc(i.EQUAL);break;case vl:i.depthFunc(i.GEQUAL);break;case xl:i.depthFunc(i.GREATER);break;case Ml:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Q=dt}},setLocked:function(dt){N=dt},setClear:function(dt){mt!==dt&&(ut&&(dt=1-dt),i.clearDepth(dt),mt=dt)},reset:function(){N=!1,K=null,Q=null,mt=null,ut=!1}}}function s(){let N=!1,ut=null,K=null,Q=null,mt=null,dt=null,Xt=null,Oe=null,on=null;return{setTest:function(me){N||(me?ht(i.STENCIL_TEST):Lt(i.STENCIL_TEST))},setMask:function(me){ut!==me&&!N&&(i.stencilMask(me),ut=me)},setFunc:function(me,Xn,ci){(K!==me||Q!==Xn||mt!==ci)&&(i.stencilFunc(me,Xn,ci),K=me,Q=Xn,mt=ci)},setOp:function(me,Xn,ci){(dt!==me||Xt!==Xn||Oe!==ci)&&(i.stencilOp(me,Xn,ci),dt=me,Xt=Xn,Oe=ci)},setLocked:function(me){N=me},setClear:function(me){on!==me&&(i.clearStencil(me),on=me)},reset:function(){N=!1,ut=null,K=null,Q=null,mt=null,dt=null,Xt=null,Oe=null,on=null}}}const r=new e,a=new n,l=new s,o=new WeakMap,c=new WeakMap;let u={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,S=null,v=null,L=null,T=null,w=new yt(0,0,0),C=0,M=!1,x=null,R=null,I=null,U=null,H=null;const $=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const V=i.getParameter(i.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Y>=2);let nt=null,st={};const gt=i.getParameter(i.SCISSOR_BOX),Wt=i.getParameter(i.VIEWPORT),he=new Me().fromArray(gt),j=new Me().fromArray(Wt);function rt(N,ut,K,Q){const mt=new Uint8Array(4),dt=i.createTexture();i.bindTexture(N,dt),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Xt=0;Xt<K;Xt++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(ut,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,mt):i.texImage2D(ut+Xt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,mt);return dt}const Mt={};Mt[i.TEXTURE_2D]=rt(i.TEXTURE_2D,i.TEXTURE_2D,1),Mt[i.TEXTURE_CUBE_MAP]=rt(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Mt[i.TEXTURE_2D_ARRAY]=rt(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Mt[i.TEXTURE_3D]=rt(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ht(i.DEPTH_TEST),a.setFunc(Bs),Jt(!1),Qt(eh),ht(i.CULL_FACE),O(Si);function ht(N){u[N]!==!0&&(i.enable(N),u[N]=!0)}function Lt(N){u[N]!==!1&&(i.disable(N),u[N]=!1)}function Ot(N,ut){return h[N]!==ut?(i.bindFramebuffer(N,ut),h[N]=ut,N===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ut),N===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ut),!0):!1}function It(N,ut){let K=d,Q=!1;if(N){K=f.get(ut),K===void 0&&(K=[],f.set(ut,K));const mt=N.textures;if(K.length!==mt.length||K[0]!==i.COLOR_ATTACHMENT0){for(let dt=0,Xt=mt.length;dt<Xt;dt++)K[dt]=i.COLOR_ATTACHMENT0+dt;K.length=mt.length,Q=!0}}else K[0]!==i.BACK&&(K[0]=i.BACK,Q=!0);Q&&i.drawBuffers(K)}function kt(N){return g!==N?(i.useProgram(N),g=N,!0):!1}const Vt={[ss]:i.FUNC_ADD,[fd]:i.FUNC_SUBTRACT,[dd]:i.FUNC_REVERSE_SUBTRACT};Vt[pd]=i.MIN,Vt[md]=i.MAX;const ve={[gd]:i.ZERO,[_d]:i.ONE,[vd]:i.SRC_COLOR,[fl]:i.SRC_ALPHA,[Ed]:i.SRC_ALPHA_SATURATE,[Sd]:i.DST_COLOR,[Md]:i.DST_ALPHA,[xd]:i.ONE_MINUS_SRC_COLOR,[dl]:i.ONE_MINUS_SRC_ALPHA,[bd]:i.ONE_MINUS_DST_COLOR,[yd]:i.ONE_MINUS_DST_ALPHA,[wd]:i.CONSTANT_COLOR,[Td]:i.ONE_MINUS_CONSTANT_COLOR,[Ad]:i.CONSTANT_ALPHA,[Rd]:i.ONE_MINUS_CONSTANT_ALPHA};function O(N,ut,K,Q,mt,dt,Xt,Oe,on,me){if(N===Si){_===!0&&(Lt(i.BLEND),_=!1);return}if(_===!1&&(ht(i.BLEND),_=!0),N!==ud){if(N!==m||me!==M){if((p!==ss||v!==ss)&&(i.blendEquation(i.FUNC_ADD),p=ss,v=ss),me)switch(N){case Us:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.ONE,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Us:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wr:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ih:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}b=null,S=null,L=null,T=null,w.set(0,0,0),C=0,m=N,M=me}return}mt=mt||ut,dt=dt||K,Xt=Xt||Q,(ut!==p||mt!==v)&&(i.blendEquationSeparate(Vt[ut],Vt[mt]),p=ut,v=mt),(K!==b||Q!==S||dt!==L||Xt!==T)&&(i.blendFuncSeparate(ve[K],ve[Q],ve[dt],ve[Xt]),b=K,S=Q,L=dt,T=Xt),(Oe.equals(w)===!1||on!==C)&&(i.blendColor(Oe.r,Oe.g,Oe.b,on),w.copy(Oe),C=on),m=N,M=!1}function Xe(N,ut){N.side===yn?Lt(i.CULL_FACE):ht(i.CULL_FACE);let K=N.side===mn;ut&&(K=!K),Jt(K),N.blending===Us&&N.transparent===!1?O(Si):O(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),a.setFunc(N.depthFunc),a.setTest(N.depthTest),a.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;l.setTest(Q),Q&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ye(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?ht(i.SAMPLE_ALPHA_TO_COVERAGE):Lt(i.SAMPLE_ALPHA_TO_COVERAGE)}function Jt(N){x!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),x=N)}function Qt(N){N!==cd?(ht(i.CULL_FACE),N!==R&&(N===eh?i.cullFace(i.BACK):N===hd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Lt(i.CULL_FACE),R=N}function Tt(N){N!==I&&(q&&i.lineWidth(N),I=N)}function ye(N,ut,K){N?(ht(i.POLYGON_OFFSET_FILL),(U!==ut||H!==K)&&(i.polygonOffset(ut,K),U=ut,H=K)):Lt(i.POLYGON_OFFSET_FILL)}function Pt(N){N?ht(i.SCISSOR_TEST):Lt(i.SCISSOR_TEST)}function A(N){N===void 0&&(N=i.TEXTURE0+$-1),nt!==N&&(i.activeTexture(N),nt=N)}function y(N,ut,K){K===void 0&&(nt===null?K=i.TEXTURE0+$-1:K=nt);let Q=st[K];Q===void 0&&(Q={type:void 0,texture:void 0},st[K]=Q),(Q.type!==N||Q.texture!==ut)&&(nt!==K&&(i.activeTexture(K),nt=K),i.bindTexture(N,ut||Mt[N]),Q.type=N,Q.texture=ut)}function G(){const N=st[nt];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function et(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Z(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function At(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ft(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _t(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ot(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function vt(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Nt(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function zt(N){he.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),he.copy(N))}function xt(N){j.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),j.copy(N))}function te(N,ut){let K=c.get(ut);K===void 0&&(K=new WeakMap,c.set(ut,K));let Q=K.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(ut,N.name),K.set(N,Q))}function Kt(N,ut){const Q=c.get(ut).get(N);o.get(ut)!==Q&&(i.uniformBlockBinding(ut,Q,N.__bindingPointIndex),o.set(ut,Q))}function we(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),u={},nt=null,st={},h={},f=new WeakMap,d=[],g=null,_=!1,m=null,p=null,b=null,S=null,v=null,L=null,T=null,w=new yt(0,0,0),C=0,M=!1,x=null,R=null,I=null,U=null,H=null,he.set(0,0,i.canvas.width,i.canvas.height),j.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:ht,disable:Lt,bindFramebuffer:Ot,drawBuffers:It,useProgram:kt,setBlending:O,setMaterial:Xe,setFlipSided:Jt,setCullFace:Qt,setLineWidth:Tt,setPolygonOffset:ye,setScissorTest:Pt,activeTexture:A,bindTexture:y,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:vt,texImage3D:Nt,updateUBOMapping:te,uniformBlockBinding:Kt,texStorage2D:ie,texStorage3D:ot,texSubImage2D:Z,texSubImage3D:At,compressedTexSubImage2D:ft,compressedTexSubImage3D:_t,scissor:zt,viewport:xt,reset:we}}function jh(i,t,e,n){const s=V_(n);switch(e){case Yu:return i*t;case $u:return i*t;case ju:return i*t*2;case Zu:return i*t/s.components*s.byteLength;case Mc:return i*t/s.components*s.byteLength;case Ju:return i*t*2/s.components*s.byteLength;case yc:return i*t*2/s.components*s.byteLength;case Ku:return i*t*3/s.components*s.byteLength;case Jn:return i*t*4/s.components*s.byteLength;case Sc:return i*t*4/s.components*s.byteLength;case Co:case Lo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Po:case Do:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case wl:case Al:return Math.max(i,16)*Math.max(t,8)/4;case El:case Tl:return Math.max(i,8)*Math.max(t,8)/2;case Rl:case Cl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case Ll:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Pl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case Il:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case Ul:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case Ol:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case zl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case Bl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case kl:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case Hl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case Gl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case Vl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case Io:case Xl:case ql:return Math.ceil(i/4)*Math.ceil(t/4)*16;case Qu:case Yl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case Kl:case $l:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function V_(i){switch(i){case Ti:case Wu:return{byteLength:1,components:1};case Tr:case Xu:case ai:return{byteLength:2,components:1};case vc:case xc:return{byteLength:2,components:4};case ls:case _c:case Mi:return{byteLength:4,components:1};case qu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function W_(i,t,e,n,s,r,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Dt,u=new WeakMap;let h;const f=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(A,y){return d?new OffscreenCanvas(A,y):Ho("canvas")}function _(A,y,G){let J=1;const et=Pt(A);if((et.width>G||et.height>G)&&(J=G/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(J*et.width),At=Math.floor(J*et.height);h===void 0&&(h=g(Z,At));const ft=y?g(Z,At):h;return ft.width=Z,ft.height=At,ft.getContext("2d").drawImage(A,0,0,Z,At),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+At+")."),ft}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){i.generateMipmap(A)}function b(A){return A.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?i.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function S(A,y,G,J,et=!1){if(A!==null){if(i[A]!==void 0)return i[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=y;if(y===i.RED&&(G===i.FLOAT&&(Z=i.R32F),G===i.HALF_FLOAT&&(Z=i.R16F),G===i.UNSIGNED_BYTE&&(Z=i.R8)),y===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.R8UI),G===i.UNSIGNED_SHORT&&(Z=i.R16UI),G===i.UNSIGNED_INT&&(Z=i.R32UI),G===i.BYTE&&(Z=i.R8I),G===i.SHORT&&(Z=i.R16I),G===i.INT&&(Z=i.R32I)),y===i.RG&&(G===i.FLOAT&&(Z=i.RG32F),G===i.HALF_FLOAT&&(Z=i.RG16F),G===i.UNSIGNED_BYTE&&(Z=i.RG8)),y===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RG8UI),G===i.UNSIGNED_SHORT&&(Z=i.RG16UI),G===i.UNSIGNED_INT&&(Z=i.RG32UI),G===i.BYTE&&(Z=i.RG8I),G===i.SHORT&&(Z=i.RG16I),G===i.INT&&(Z=i.RG32I)),y===i.RGB_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGB8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGB16UI),G===i.UNSIGNED_INT&&(Z=i.RGB32UI),G===i.BYTE&&(Z=i.RGB8I),G===i.SHORT&&(Z=i.RGB16I),G===i.INT&&(Z=i.RGB32I)),y===i.RGBA_INTEGER&&(G===i.UNSIGNED_BYTE&&(Z=i.RGBA8UI),G===i.UNSIGNED_SHORT&&(Z=i.RGBA16UI),G===i.UNSIGNED_INT&&(Z=i.RGBA32UI),G===i.BYTE&&(Z=i.RGBA8I),G===i.SHORT&&(Z=i.RGBA16I),G===i.INT&&(Z=i.RGBA32I)),y===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(Z=i.RGB9_E5),y===i.RGBA){const At=et?oa:ee.getTransfer(J);G===i.FLOAT&&(Z=i.RGBA32F),G===i.HALF_FLOAT&&(Z=i.RGBA16F),G===i.UNSIGNED_BYTE&&(Z=At===ge?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(Z=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(Z=i.RGB5_A1)}return(Z===i.R16F||Z===i.R32F||Z===i.RG16F||Z===i.RG32F||Z===i.RGBA16F||Z===i.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function v(A,y){let G;return A?y===null||y===ls||y===Gs?G=i.DEPTH24_STENCIL8:y===Mi?G=i.DEPTH32F_STENCIL8:y===Tr&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===ls||y===Gs?G=i.DEPTH_COMPONENT24:y===Mi?G=i.DEPTH_COMPONENT32F:y===Tr&&(G=i.DEPTH_COMPONENT16),G}function L(A,y){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==_e&&A.minFilter!==kn?Math.log2(Math.max(y.width,y.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?y.mipmaps.length:1}function T(A){const y=A.target;y.removeEventListener("dispose",T),C(y),y.isVideoTexture&&u.delete(y)}function w(A){const y=A.target;y.removeEventListener("dispose",w),x(y)}function C(A){const y=n.get(A);if(y.__webglInit===void 0)return;const G=A.source,J=f.get(G);if(J){const et=J[y.__cacheKey];et.usedTimes--,et.usedTimes===0&&M(A),Object.keys(J).length===0&&f.delete(G)}n.remove(A)}function M(A){const y=n.get(A);i.deleteTexture(y.__webglTexture);const G=A.source,J=f.get(G);delete J[y.__cacheKey],a.memory.textures--}function x(A){const y=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let et=0;et<y.__webglFramebuffer[J].length;et++)i.deleteFramebuffer(y.__webglFramebuffer[J][et]);else i.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)i.deleteFramebuffer(y.__webglFramebuffer[J]);else i.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&i.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&i.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&i.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const G=A.textures;for(let J=0,et=G.length;J<et;J++){const Z=n.get(G[J]);Z.__webglTexture&&(i.deleteTexture(Z.__webglTexture),a.memory.textures--),n.remove(G[J])}n.remove(A)}let R=0;function I(){R=0}function U(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function H(A){const y=[];return y.push(A.wrapS),y.push(A.wrapT),y.push(A.wrapR||0),y.push(A.magFilter),y.push(A.minFilter),y.push(A.anisotropy),y.push(A.internalFormat),y.push(A.format),y.push(A.type),y.push(A.generateMipmaps),y.push(A.premultiplyAlpha),y.push(A.flipY),y.push(A.unpackAlignment),y.push(A.colorSpace),y.join()}function $(A,y){const G=n.get(A);if(A.isVideoTexture&&Tt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,A,y);return}}e.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+y)}function q(A,y){const G=n.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,y);return}e.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+y)}function Y(A,y){const G=n.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,y);return}e.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+y)}function V(A,y){const G=n.get(A);if(A.version>0&&G.__version!==A.version){rt(G,A,y);return}e.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+y)}const nt={[Bo]:i.REPEAT,[os]:i.CLAMP_TO_EDGE,[bl]:i.MIRRORED_REPEAT},st={[_e]:i.NEAREST,[Dd]:i.NEAREST_MIPMAP_NEAREST,[Vr]:i.NEAREST_MIPMAP_LINEAR,[kn]:i.LINEAR,[ma]:i.LINEAR_MIPMAP_NEAREST,[xi]:i.LINEAR_MIPMAP_LINEAR},gt={[Od]:i.NEVER,[Gd]:i.ALWAYS,[Fd]:i.LESS,[tf]:i.LEQUAL,[zd]:i.EQUAL,[Hd]:i.GEQUAL,[Bd]:i.GREATER,[kd]:i.NOTEQUAL};function Wt(A,y){if(y.type===Mi&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===kn||y.magFilter===ma||y.magFilter===Vr||y.magFilter===xi||y.minFilter===kn||y.minFilter===ma||y.minFilter===Vr||y.minFilter===xi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(A,i.TEXTURE_WRAP_S,nt[y.wrapS]),i.texParameteri(A,i.TEXTURE_WRAP_T,nt[y.wrapT]),(A===i.TEXTURE_3D||A===i.TEXTURE_2D_ARRAY)&&i.texParameteri(A,i.TEXTURE_WRAP_R,nt[y.wrapR]),i.texParameteri(A,i.TEXTURE_MAG_FILTER,st[y.magFilter]),i.texParameteri(A,i.TEXTURE_MIN_FILTER,st[y.minFilter]),y.compareFunction&&(i.texParameteri(A,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(A,i.TEXTURE_COMPARE_FUNC,gt[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===_e||y.minFilter!==Vr&&y.minFilter!==xi||y.type===Mi&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||n.get(y).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");i.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),n.get(y).__currentAnisotropy=y.anisotropy}}}function he(A,y){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,y.addEventListener("dispose",T));const J=y.source;let et=f.get(J);et===void 0&&(et={},f.set(J,et));const Z=H(y);if(Z!==A.__cacheKey){et[Z]===void 0&&(et[Z]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),et[Z].usedTimes++;const At=et[A.__cacheKey];At!==void 0&&(et[A.__cacheKey].usedTimes--,At.usedTimes===0&&M(y)),A.__cacheKey=Z,A.__webglTexture=et[Z].texture}return G}function j(A,y,G){let J=i.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=i.TEXTURE_3D);const et=he(A,y),Z=y.source;e.bindTexture(J,A.__webglTexture,i.TEXTURE0+G);const At=n.get(Z);if(Z.version!==At.__version||et===!0){e.activeTexture(i.TEXTURE0+G);const ft=ee.getPrimaries(ee.workingColorSpace),_t=y.colorSpace===Bi?null:ee.getPrimaries(y.colorSpace),ie=y.colorSpace===Bi||ft===_t?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);let ot=_(y.image,!1,s.maxTextureSize);ot=ye(y,ot);const vt=r.convert(y.format,y.colorSpace),Nt=r.convert(y.type);let zt=S(y.internalFormat,vt,Nt,y.colorSpace,y.isVideoTexture);Wt(J,y);let xt;const te=y.mipmaps,Kt=y.isVideoTexture!==!0,we=At.__version===void 0||et===!0,N=Z.dataReady,ut=L(y,ot);if(y.isDepthTexture)zt=v(y.format===Vs,y.type),we&&(Kt?e.texStorage2D(i.TEXTURE_2D,1,zt,ot.width,ot.height):e.texImage2D(i.TEXTURE_2D,0,zt,ot.width,ot.height,0,vt,Nt,null));else if(y.isDataTexture)if(te.length>0){Kt&&we&&e.texStorage2D(i.TEXTURE_2D,ut,zt,te[0].width,te[0].height);for(let K=0,Q=te.length;K<Q;K++)xt=te[K],Kt?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,vt,Nt,xt.data):e.texImage2D(i.TEXTURE_2D,K,zt,xt.width,xt.height,0,vt,Nt,xt.data);y.generateMipmaps=!1}else Kt?(we&&e.texStorage2D(i.TEXTURE_2D,ut,zt,ot.width,ot.height),N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,ot.width,ot.height,vt,Nt,ot.data)):e.texImage2D(i.TEXTURE_2D,0,zt,ot.width,ot.height,0,vt,Nt,ot.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Kt&&we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,zt,te[0].width,te[0].height,ot.depth);for(let K=0,Q=te.length;K<Q;K++)if(xt=te[K],y.format!==Jn)if(vt!==null)if(Kt){if(N)if(y.layerUpdates.size>0){const mt=jh(xt.width,xt.height,y.format,y.type);for(const dt of y.layerUpdates){const Xt=xt.data.subarray(dt*mt/xt.data.BYTES_PER_ELEMENT,(dt+1)*mt/xt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,dt,xt.width,xt.height,1,vt,Xt)}y.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,ot.depth,vt,xt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,K,zt,xt.width,xt.height,ot.depth,0,xt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?N&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,K,0,0,0,xt.width,xt.height,ot.depth,vt,Nt,xt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,K,zt,xt.width,xt.height,ot.depth,0,vt,Nt,xt.data)}else{Kt&&we&&e.texStorage2D(i.TEXTURE_2D,ut,zt,te[0].width,te[0].height);for(let K=0,Q=te.length;K<Q;K++)xt=te[K],y.format!==Jn?vt!==null?Kt?N&&e.compressedTexSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,vt,xt.data):e.compressedTexImage2D(i.TEXTURE_2D,K,zt,xt.width,xt.height,0,xt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,xt.width,xt.height,vt,Nt,xt.data):e.texImage2D(i.TEXTURE_2D,K,zt,xt.width,xt.height,0,vt,Nt,xt.data)}else if(y.isDataArrayTexture)if(Kt){if(we&&e.texStorage3D(i.TEXTURE_2D_ARRAY,ut,zt,ot.width,ot.height,ot.depth),N)if(y.layerUpdates.size>0){const K=jh(ot.width,ot.height,y.format,y.type);for(const Q of y.layerUpdates){const mt=ot.data.subarray(Q*K/ot.data.BYTES_PER_ELEMENT,(Q+1)*K/ot.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Q,ot.width,ot.height,1,vt,Nt,mt)}y.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ot.width,ot.height,ot.depth,vt,Nt,ot.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,zt,ot.width,ot.height,ot.depth,0,vt,Nt,ot.data);else if(y.isData3DTexture)Kt?(we&&e.texStorage3D(i.TEXTURE_3D,ut,zt,ot.width,ot.height,ot.depth),N&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ot.width,ot.height,ot.depth,vt,Nt,ot.data)):e.texImage3D(i.TEXTURE_3D,0,zt,ot.width,ot.height,ot.depth,0,vt,Nt,ot.data);else if(y.isFramebufferTexture){if(we)if(Kt)e.texStorage2D(i.TEXTURE_2D,ut,zt,ot.width,ot.height);else{let K=ot.width,Q=ot.height;for(let mt=0;mt<ut;mt++)e.texImage2D(i.TEXTURE_2D,mt,zt,K,Q,0,vt,Nt,null),K>>=1,Q>>=1}}else if(te.length>0){if(Kt&&we){const K=Pt(te[0]);e.texStorage2D(i.TEXTURE_2D,ut,zt,K.width,K.height)}for(let K=0,Q=te.length;K<Q;K++)xt=te[K],Kt?N&&e.texSubImage2D(i.TEXTURE_2D,K,0,0,vt,Nt,xt):e.texImage2D(i.TEXTURE_2D,K,zt,vt,Nt,xt);y.generateMipmaps=!1}else if(Kt){if(we){const K=Pt(ot);e.texStorage2D(i.TEXTURE_2D,ut,zt,K.width,K.height)}N&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,vt,Nt,ot)}else e.texImage2D(i.TEXTURE_2D,0,zt,vt,Nt,ot);m(y)&&p(J),At.__version=Z.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function rt(A,y,G){if(y.image.length!==6)return;const J=he(A,y),et=y.source;e.bindTexture(i.TEXTURE_CUBE_MAP,A.__webglTexture,i.TEXTURE0+G);const Z=n.get(et);if(et.version!==Z.__version||J===!0){e.activeTexture(i.TEXTURE0+G);const At=ee.getPrimaries(ee.workingColorSpace),ft=y.colorSpace===Bi?null:ee.getPrimaries(y.colorSpace),_t=y.colorSpace===Bi||At===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,y.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,y.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const ie=y.isCompressedTexture||y.image[0].isCompressedTexture,ot=y.image[0]&&y.image[0].isDataTexture,vt=[];for(let Q=0;Q<6;Q++)!ie&&!ot?vt[Q]=_(y.image[Q],!0,s.maxCubemapSize):vt[Q]=ot?y.image[Q].image:y.image[Q],vt[Q]=ye(y,vt[Q]);const Nt=vt[0],zt=r.convert(y.format,y.colorSpace),xt=r.convert(y.type),te=S(y.internalFormat,zt,xt,y.colorSpace),Kt=y.isVideoTexture!==!0,we=Z.__version===void 0||J===!0,N=et.dataReady;let ut=L(y,Nt);Wt(i.TEXTURE_CUBE_MAP,y);let K;if(ie){Kt&&we&&e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,te,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){K=vt[Q].mipmaps;for(let mt=0;mt<K.length;mt++){const dt=K[mt];y.format!==Jn?zt!==null?Kt?N&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,dt.width,dt.height,zt,dt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,te,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,0,0,dt.width,dt.height,zt,xt,dt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt,te,dt.width,dt.height,0,zt,xt,dt.data)}}}else{if(K=y.mipmaps,Kt&&we){K.length>0&&ut++;const Q=Pt(vt[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,ut,te,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ot){Kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,vt[Q].width,vt[Q].height,zt,xt,vt[Q].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,te,vt[Q].width,vt[Q].height,0,zt,xt,vt[Q].data);for(let mt=0;mt<K.length;mt++){const Xt=K[mt].image[Q].image;Kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,Xt.width,Xt.height,zt,xt,Xt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,te,Xt.width,Xt.height,0,zt,xt,Xt.data)}}else{Kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,zt,xt,vt[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,te,zt,xt,vt[Q]);for(let mt=0;mt<K.length;mt++){const dt=K[mt];Kt?N&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,0,0,zt,xt,dt.image[Q]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,mt+1,te,zt,xt,dt.image[Q])}}}m(y)&&p(i.TEXTURE_CUBE_MAP),Z.__version=et.version,y.onUpdate&&y.onUpdate(y)}A.__version=y.version}function Mt(A,y,G,J,et,Z){const At=r.convert(G.format,G.colorSpace),ft=r.convert(G.type),_t=S(G.internalFormat,At,ft,G.colorSpace),ie=n.get(y),ot=n.get(G);if(ot.__renderTarget=y,!ie.__hasExternalTextures){const vt=Math.max(1,y.width>>Z),Nt=Math.max(1,y.height>>Z);et===i.TEXTURE_3D||et===i.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,_t,vt,Nt,y.depth,0,At,ft,null):e.texImage2D(et,Z,_t,vt,Nt,0,At,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,A),Qt(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,et,ot.__webglTexture,0,Jt(y)):(et===i.TEXTURE_2D||et>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,et,ot.__webglTexture,Z),e.bindFramebuffer(i.FRAMEBUFFER,null)}function ht(A,y,G){if(i.bindRenderbuffer(i.RENDERBUFFER,A),y.depthBuffer){const J=y.depthTexture,et=J&&J.isDepthTexture?J.type:null,Z=v(y.stencilBuffer,et),At=y.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Jt(y);Qt(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Z,y.width,y.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Z,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,Z,y.width,y.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,At,i.RENDERBUFFER,A)}else{const J=y.textures;for(let et=0;et<J.length;et++){const Z=J[et],At=r.convert(Z.format,Z.colorSpace),ft=r.convert(Z.type),_t=S(Z.internalFormat,At,ft,Z.colorSpace),ie=Jt(y);G&&Qt(y)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ie,_t,y.width,y.height):Qt(y)?l.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ie,_t,y.width,y.height):i.renderbufferStorage(i.RENDERBUFFER,_t,y.width,y.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Lt(A,y){if(y&&y.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,A),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=n.get(y.depthTexture);J.__renderTarget=y,(!J.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),$(y.depthTexture,0);const et=J.__webglTexture,Z=Jt(y);if(y.depthTexture.format===Ns)Qt(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,et,0);else if(y.depthTexture.format===Vs)Qt(y)?l.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0,Z):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ot(A){const y=n.get(A),G=A.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){const et=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),y.__depthDisposeCallback=et}y.__boundDepthTexture=J}if(A.depthTexture&&!y.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Lt(y.__webglFramebuffer,A)}else if(G){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=i.createRenderbuffer(),ht(y.__webglDepthbuffer[J],A,!1);else{const et=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,Z),i.framebufferRenderbuffer(i.FRAMEBUFFER,et,i.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(i.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=i.createRenderbuffer(),ht(y.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,et=y.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,et),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,et)}e.bindFramebuffer(i.FRAMEBUFFER,null)}function It(A,y,G){const J=n.get(A);y!==void 0&&Mt(J.__webglFramebuffer,A,A.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&Ot(A)}function kt(A){const y=A.texture,G=n.get(A),J=n.get(y);A.addEventListener("dispose",w);const et=A.textures,Z=A.isWebGLCubeRenderTarget===!0,At=et.length>1;if(At||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=y.version,a.memory.textures++),Z){G.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer[ft]=[];for(let _t=0;_t<y.mipmaps.length;_t++)G.__webglFramebuffer[ft][_t]=i.createFramebuffer()}else G.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){G.__webglFramebuffer=[];for(let ft=0;ft<y.mipmaps.length;ft++)G.__webglFramebuffer[ft]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(At)for(let ft=0,_t=et.length;ft<_t;ft++){const ie=n.get(et[ft]);ie.__webglTexture===void 0&&(ie.__webglTexture=i.createTexture(),a.memory.textures++)}if(A.samples>0&&Qt(A)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let ft=0;ft<et.length;ft++){const _t=et[ft];G.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[ft]);const ie=r.convert(_t.format,_t.colorSpace),ot=r.convert(_t.type),vt=S(_t.internalFormat,ie,ot,_t.colorSpace,A.isXRRenderTarget===!0),Nt=Jt(A);i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt,vt,A.width,A.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,G.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),ht(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Z){e.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),Wt(i.TEXTURE_CUBE_MAP,y);for(let ft=0;ft<6;ft++)if(y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Mt(G.__webglFramebuffer[ft][_t],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,_t);else Mt(G.__webglFramebuffer[ft],A,y,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);m(y)&&p(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(At){for(let ft=0,_t=et.length;ft<_t;ft++){const ie=et[ft],ot=n.get(ie);e.bindTexture(i.TEXTURE_2D,ot.__webglTexture),Wt(i.TEXTURE_2D,ie),Mt(G.__webglFramebuffer,A,ie,i.COLOR_ATTACHMENT0+ft,i.TEXTURE_2D,0),m(ie)&&p(i.TEXTURE_2D)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ft=A.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,J.__webglTexture),Wt(ft,y),y.mipmaps&&y.mipmaps.length>0)for(let _t=0;_t<y.mipmaps.length;_t++)Mt(G.__webglFramebuffer[_t],A,y,i.COLOR_ATTACHMENT0,ft,_t);else Mt(G.__webglFramebuffer,A,y,i.COLOR_ATTACHMENT0,ft,0);m(y)&&p(ft),e.unbindTexture()}A.depthBuffer&&Ot(A)}function Vt(A){const y=A.textures;for(let G=0,J=y.length;G<J;G++){const et=y[G];if(m(et)){const Z=b(A),At=n.get(et).__webglTexture;e.bindTexture(Z,At),p(Z),e.unbindTexture()}}}const ve=[],O=[];function Xe(A){if(A.samples>0){if(Qt(A)===!1){const y=A.textures,G=A.width,J=A.height;let et=i.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,At=n.get(A),ft=y.length>1;if(ft)for(let _t=0;_t<y.length;_t++)e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,At.__webglMultisampledFramebuffer),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglFramebuffer);for(let _t=0;_t<y.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=i.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,At.__webglColorRenderbuffer[_t]);const ie=n.get(y[_t]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ie,0)}i.blitFramebuffer(0,0,G,J,0,0,G,J,et,i.NEAREST),o===!0&&(ve.length=0,O.length=0,ve.push(i.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ve.push(Z),O.push(Z),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,O)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ve))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let _t=0;_t<y.length;_t++){e.bindFramebuffer(i.FRAMEBUFFER,At.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.RENDERBUFFER,At.__webglColorRenderbuffer[_t]);const ie=n.get(y[_t]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,At.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+_t,i.TEXTURE_2D,ie,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,At.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&o){const y=A.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[y])}}}function Jt(A){return Math.min(s.maxSamples,A.samples)}function Qt(A){const y=n.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function Tt(A){const y=a.render.frame;u.get(A)!==y&&(u.set(A,y),A.update())}function ye(A,y){const G=A.colorSpace,J=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Ks&&G!==Bi&&(ee.getTransfer(G)===ge?(J!==Jn||et!==Ti)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),y}function Pt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=U,this.resetTextureUnits=I,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=It,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Xe,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=Mt,this.useMultisampledRTT=Qt}function X_(i,t){function e(n,s=Bi){let r;const a=ee.getTransfer(s);if(n===Ti)return i.UNSIGNED_BYTE;if(n===vc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===xc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===qu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Wu)return i.BYTE;if(n===Xu)return i.SHORT;if(n===Tr)return i.UNSIGNED_SHORT;if(n===_c)return i.INT;if(n===ls)return i.UNSIGNED_INT;if(n===Mi)return i.FLOAT;if(n===ai)return i.HALF_FLOAT;if(n===Yu)return i.ALPHA;if(n===Ku)return i.RGB;if(n===Jn)return i.RGBA;if(n===$u)return i.LUMINANCE;if(n===ju)return i.LUMINANCE_ALPHA;if(n===Ns)return i.DEPTH_COMPONENT;if(n===Vs)return i.DEPTH_STENCIL;if(n===Zu)return i.RED;if(n===Mc)return i.RED_INTEGER;if(n===Ju)return i.RG;if(n===yc)return i.RG_INTEGER;if(n===Sc)return i.RGBA_INTEGER;if(n===Co||n===Lo||n===Po||n===Do)if(a===ge)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Co)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Co)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Lo)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Po)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Do)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===El||n===wl||n===Tl||n===Al)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===El)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===wl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Tl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Al)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Rl||n===Cl||n===Ll)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Rl||n===Cl)return a===ge?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ll)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Pl||n===Dl||n===Il||n===Ul||n===Nl||n===Ol||n===Fl||n===zl||n===Bl||n===kl||n===Hl||n===Gl||n===Vl||n===Wl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Pl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Dl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Il)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Ul)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Nl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ol)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===zl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===kl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Hl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Gl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Vl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Wl)return a===ge?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Io||n===Xl||n===ql)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(n===Io)return a===ge?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ql)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Qu||n===Yl||n===Kl||n===$l)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(n===Io)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Yl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Kl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===$l)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Gs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class q_ extends Cn{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Ee extends Ve{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Y_={type:"move"};class Va{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ee,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ee,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ee,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let s=null,r=null,a=null;const l=this._targetRay,o=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(const _ of t.hand.values()){const m=e.getJointPose(_,n),p=this._getHandJoint(c,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],f=u.position.distanceTo(h.position),d=.02,g=.005;c.inputState.pinching&&f>d+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&f<=d-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,n),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(Y_)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Ee;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}const K_=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,$_=`
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

}`;class j_{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,n){if(this.texture===null){const s=new gn,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=n.depthNear||e.depthFar!=n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new un({vertexShader:K_,fragmentShader:$_,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ut(new Ei(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Z_ extends $s{constructor(t,e){super();const n=this;let s=null,r=1,a=null,l="local-floor",o=1,c=null,u=null,h=null,f=null,d=null,g=null;const _=new j_,m=e.getContextAttributes();let p=null,b=null;const S=[],v=[],L=new Dt;let T=null;const w=new Cn;w.viewport=new Me;const C=new Cn;C.viewport=new Me;const M=[w,C],x=new q_;let R=null,I=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let rt=S[j];return rt===void 0&&(rt=new Va,S[j]=rt),rt.getTargetRaySpace()},this.getControllerGrip=function(j){let rt=S[j];return rt===void 0&&(rt=new Va,S[j]=rt),rt.getGripSpace()},this.getHand=function(j){let rt=S[j];return rt===void 0&&(rt=new Va,S[j]=rt),rt.getHandSpace()};function U(j){const rt=v.indexOf(j.inputSource);if(rt===-1)return;const Mt=S[rt];Mt!==void 0&&(Mt.update(j.inputSource,j.frame,c||a),Mt.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let j=0;j<S.length;j++){const rt=v[j];rt!==null&&(v[j]=null,S[j].disconnect(rt))}R=null,I=null,_.reset(),t.setRenderTarget(p),d=null,f=null,h=null,s=null,b=null,he.stop(),n.isPresenting=!1,t.setPixelRatio(T),t.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(j){c=j},this.getBaseLayer=function(){return f!==null?f:d},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(L),s.renderState.layers===void 0){const rt={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,rt),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),b=new Gn(d.framebufferWidth,d.framebufferHeight,{format:Jn,type:Ti,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let rt=null,Mt=null,ht=null;m.depth&&(ht=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,rt=m.stencil?Vs:Ns,Mt=m.stencil?Gs:ls);const Lt={colorFormat:e.RGBA8,depthFormat:ht,scaleFactor:r};h=new XRWebGLBinding(s,e),f=h.createProjectionLayer(Lt),s.updateRenderState({layers:[f]}),t.setPixelRatio(1),t.setSize(f.textureWidth,f.textureHeight,!1),b=new Gn(f.textureWidth,f.textureHeight,{format:Jn,type:Ti,depthTexture:new df(f.textureWidth,f.textureHeight,Mt,void 0,void 0,void 0,void 0,void 0,void 0,rt),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(o),c=null,a=await s.requestReferenceSpace(l),he.setContext(s),he.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function $(j){for(let rt=0;rt<j.removed.length;rt++){const Mt=j.removed[rt],ht=v.indexOf(Mt);ht>=0&&(v[ht]=null,S[ht].disconnect(Mt))}for(let rt=0;rt<j.added.length;rt++){const Mt=j.added[rt];let ht=v.indexOf(Mt);if(ht===-1){for(let Ot=0;Ot<S.length;Ot++)if(Ot>=v.length){v.push(Mt),ht=Ot;break}else if(v[Ot]===null){v[Ot]=Mt,ht=Ot;break}if(ht===-1)break}const Lt=S[ht];Lt&&Lt.connect(Mt)}}const q=new P,Y=new P;function V(j,rt,Mt){q.setFromMatrixPosition(rt.matrixWorld),Y.setFromMatrixPosition(Mt.matrixWorld);const ht=q.distanceTo(Y),Lt=rt.projectionMatrix.elements,Ot=Mt.projectionMatrix.elements,It=Lt[14]/(Lt[10]-1),kt=Lt[14]/(Lt[10]+1),Vt=(Lt[9]+1)/Lt[5],ve=(Lt[9]-1)/Lt[5],O=(Lt[8]-1)/Lt[0],Xe=(Ot[8]+1)/Ot[0],Jt=It*O,Qt=It*Xe,Tt=ht/(-O+Xe),ye=Tt*-O;if(rt.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(ye),j.translateZ(Tt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Lt[10]===-1)j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse);else{const Pt=It+Tt,A=kt+Tt,y=Jt-ye,G=Qt+(ht-ye),J=Vt*kt/A*Pt,et=ve*kt/A*Pt;j.projectionMatrix.makePerspective(y,G,J,et,Pt,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function nt(j,rt){rt===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(rt.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let rt=j.near,Mt=j.far;_.texture!==null&&(_.depthNear>0&&(rt=_.depthNear),_.depthFar>0&&(Mt=_.depthFar)),x.near=C.near=w.near=rt,x.far=C.far=w.far=Mt,(R!==x.near||I!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),R=x.near,I=x.far),w.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,x.layers.mask=w.layers.mask|C.layers.mask;const ht=j.parent,Lt=x.cameras;nt(x,ht);for(let Ot=0;Ot<Lt.length;Ot++)nt(Lt[Ot],ht);Lt.length===2?V(x,w,C):x.projectionMatrix.copy(w.projectionMatrix),st(j,x,ht)};function st(j,rt,Mt){Mt===null?j.matrix.copy(rt.matrixWorld):(j.matrix.copy(Mt.matrixWorld),j.matrix.invert(),j.matrix.multiply(rt.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(rt.projectionMatrix),j.projectionMatrixInverse.copy(rt.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Zl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&d===null))return o},this.setFoveation=function(j){o=j,f!==null&&(f.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let gt=null;function Wt(j,rt){if(u=rt.getViewerPose(c||a),g=rt,u!==null){const Mt=u.views;d!==null&&(t.setRenderTargetFramebuffer(b,d.framebuffer),t.setRenderTarget(b));let ht=!1;Mt.length!==x.cameras.length&&(x.cameras.length=0,ht=!0);for(let Ot=0;Ot<Mt.length;Ot++){const It=Mt[Ot];let kt=null;if(d!==null)kt=d.getViewport(It);else{const ve=h.getViewSubImage(f,It);kt=ve.viewport,Ot===0&&(t.setRenderTargetTextures(b,ve.colorTexture,f.ignoreDepthValues?void 0:ve.depthStencilTexture),t.setRenderTarget(b))}let Vt=M[Ot];Vt===void 0&&(Vt=new Cn,Vt.layers.enable(Ot),Vt.viewport=new Me,M[Ot]=Vt),Vt.matrix.fromArray(It.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(It.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(kt.x,kt.y,kt.width,kt.height),Ot===0&&(x.matrix.copy(Vt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),ht===!0&&x.cameras.push(Vt)}const Lt=s.enabledFeatures;if(Lt&&Lt.includes("depth-sensing")){const Ot=h.getDepthInformation(Mt[0]);Ot&&Ot.isValid&&Ot.texture&&_.init(t,Ot,s.renderState)}}for(let Mt=0;Mt<S.length;Mt++){const ht=v[Mt],Lt=S[Mt];ht!==null&&Lt!==void 0&&Lt.update(ht,rt,c||a)}gt&&gt(j,rt),rt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:rt}),g=null}const he=new ff;he.setAnimationLoop(Wt),this.setAnimationLoop=function(j){gt=j},this.dispose=function(){}}}const es=new ei,J_=new Ae;function Q_(i,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,cf(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,S,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),h(m,p)):p.isMeshPhongMaterial?(r(m,p),u(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&d(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),_(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&l(m,p)):p.isPointsMaterial?o(m,p,b,S):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const b=t.get(p),S=b.envMap,v=b.envMapRotation;S&&(m.envMap.value=S,es.copy(v),es.x*=-1,es.y*=-1,es.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),m.envMapRotation.value.setFromMatrix4(J_.makeRotationFromEuler(es)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function l(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function o(m,p,b,S){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=S*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function h(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function d(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function tv(i,t,e,n){let s={},r={},a=[];const l=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function o(b,S){const v=S.program;n.uniformBlockBinding(b,v)}function c(b,S){let v=s[b.id];v===void 0&&(g(b),v=u(b),s[b.id]=v,b.addEventListener("dispose",m));const L=S.program;n.updateUBOMapping(b,L);const T=t.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function u(b){const S=h();b.__bindingPointIndex=S;const v=i.createBuffer(),L=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,v),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,S,v),v}function h(){for(let b=0;b<l;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){const S=s[b.id],v=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,S);for(let T=0,w=v.length;T<w;T++){const C=Array.isArray(v[T])?v[T]:[v[T]];for(let M=0,x=C.length;M<x;M++){const R=C[M];if(d(R,T,M,L)===!0){const I=R.__offset,U=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let $=0;$<U.length;$++){const q=U[$],Y=_(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,I+H,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,I,R.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function d(b,S,v,L){const T=b.value,w=S+"_"+v;if(L[w]===void 0)return typeof T=="number"||typeof T=="boolean"?L[w]=T:L[w]=T.clone(),!0;{const C=L[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return L[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function g(b){const S=b.uniforms;let v=0;const L=16;for(let w=0,C=S.length;w<C;w++){const M=Array.isArray(S[w])?S[w]:[S[w]];for(let x=0,R=M.length;x<R;x++){const I=M[x],U=Array.isArray(I.value)?I.value:[I.value];for(let H=0,$=U.length;H<$;H++){const q=U[H],Y=_(q),V=v%L,nt=V%Y.boundary,st=V+nt;v+=nt,st!==0&&L-st<Y.storage&&(v+=L-st),I.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=v,v+=Y.storage}}}const T=v%L;return T>0&&(v+=L-T),b.__size=v,b.__cache={},this}function _(b){const S={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(S.boundary=4,S.storage=4):b.isVector2?(S.boundary=8,S.storage=8):b.isVector3||b.isColor?(S.boundary=16,S.storage=12):b.isVector4?(S.boundary=16,S.storage=16):b.isMatrix3?(S.boundary=48,S.storage=48):b.isMatrix4?(S.boundary=64,S.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),S}function m(b){const S=b.target;S.removeEventListener("dispose",m);const v=a.indexOf(S.__bindingPointIndex);a.splice(v,1),i.deleteBuffer(s[S.id]),delete s[S.id],delete r[S.id]}function p(){for(const b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:o,update:c,dispose:p}}class ev{constructor(t={}){const{canvas:e=Wd(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:f=!1}=t;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const g=new Uint32Array(4),_=new Int32Array(4);let m=null,p=null;const b=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=nn,this.toneMapping=Hi,this.toneMappingExposure=1;const v=this;let L=!1,T=0,w=0,C=null,M=-1,x=null;const R=new Me,I=new Me;let U=null;const H=new yt(0);let $=0,q=e.width,Y=e.height,V=1,nt=null,st=null;const gt=new Me(0,0,q,Y),Wt=new Me(0,0,q,Y);let he=!1;const j=new wc;let rt=!1,Mt=!1;const ht=new Ae,Lt=new Ae,Ot=new P,It=new Me,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ve(){return C===null?V:1}let O=n;function Xe(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${pc}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",mt,!1),e.addEventListener("webglcontextcreationerror",dt,!1),O===null){const F="webgl2";if(O=Xe(F,E),O===null)throw Xe(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Jt,Qt,Tt,ye,Pt,A,y,G,J,et,Z,At,ft,_t,ie,ot,vt,Nt,zt,xt,te,Kt,we,N;function ut(){Jt=new og(O),Jt.init(),Kt=new X_(O,Jt),Qt=new tg(O,Jt,t,Kt),Tt=new G_(O,Jt),Qt.reverseDepthBuffer&&f&&Tt.buffers.depth.setReversed(!0),ye=new cg(O),Pt=new A_,A=new W_(O,Jt,Tt,Pt,Qt,Kt,ye),y=new ng(v),G=new rg(v),J=new gp(O),we=new Jm(O,J),et=new ag(O,J,ye,we),Z=new ug(O,et,J,ye),zt=new hg(O,Qt,A),ot=new eg(Pt),At=new T_(v,y,G,Jt,Qt,we,ot),ft=new Q_(v,Pt),_t=new C_,ie=new N_(Jt),Nt=new Zm(v,y,G,Tt,Z,d,o),vt=new k_(v,Z,Qt),N=new tv(O,ye,Qt,Tt),xt=new Qm(O,Jt,ye),te=new lg(O,Jt,ye),ye.programs=At.programs,v.capabilities=Qt,v.extensions=Jt,v.properties=Pt,v.renderLists=_t,v.shadowMap=vt,v.state=Tt,v.info=ye}ut();const K=new Z_(v,O);this.xr=K,this.getContext=function(){return O},this.getContextAttributes=function(){return O.getContextAttributes()},this.forceContextLoss=function(){const E=Jt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Jt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(q,Y,!1))},this.getSize=function(E){return E.set(q,Y)},this.setSize=function(E,F,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,Y=F,e.width=Math.floor(E*V),e.height=Math.floor(F*V),W===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(q*V,Y*V).floor()},this.setDrawingBufferSize=function(E,F,W){q=E,Y=F,V=W,e.width=Math.floor(E*W),e.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(gt)},this.setViewport=function(E,F,W,X){E.isVector4?gt.set(E.x,E.y,E.z,E.w):gt.set(E,F,W,X),Tt.viewport(R.copy(gt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,F,W,X){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,F,W,X),Tt.scissor(I.copy(Wt).multiplyScalar(V).round())},this.getScissorTest=function(){return he},this.setScissorTest=function(E){Tt.setScissorTest(he=E)},this.setOpaqueSort=function(E){nt=E},this.setTransparentSort=function(E){st=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(E=!0,F=!0,W=!0){let X=0;if(E){let z=!1;if(C!==null){const at=C.texture.format;z=at===Sc||at===yc||at===Mc}if(z){const at=C.texture.type,pt=at===Ti||at===ls||at===Tr||at===Gs||at===vc||at===xc,St=Nt.getClearColor(),bt=Nt.getClearAlpha(),Bt=St.r,qt=St.g,Et=St.b;pt?(g[0]=Bt,g[1]=qt,g[2]=Et,g[3]=bt,O.clearBufferuiv(O.COLOR,0,g)):(_[0]=Bt,_[1]=qt,_[2]=Et,_[3]=bt,O.clearBufferiv(O.COLOR,0,_))}else X|=O.COLOR_BUFFER_BIT}F&&(X|=O.DEPTH_BUFFER_BIT),W&&(X|=O.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",mt,!1),e.removeEventListener("webglcontextcreationerror",dt,!1),_t.dispose(),ie.dispose(),Pt.dispose(),y.dispose(),G.dispose(),Z.dispose(),we.dispose(),N.dispose(),At.dispose(),K.dispose(),K.removeEventListener("sessionstart",Yc),K.removeEventListener("sessionend",Kc),$i.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),L=!0}function mt(){console.log("THREE.WebGLRenderer: Context Restored."),L=!1;const E=ye.autoReset,F=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,z=vt.type;ut(),ye.autoReset=E,vt.enabled=F,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=z}function dt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xt(E){const F=E.target;F.removeEventListener("dispose",Xt),Oe(F)}function Oe(E){on(E),Pt.remove(E)}function on(E){const F=Pt.get(E).programs;F!==void 0&&(F.forEach(function(W){At.releaseProgram(W)}),E.isShaderMaterial&&At.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,X,z,at){F===null&&(F=kt);const pt=z.isMesh&&z.matrixWorld.determinant()<0,St=od(E,F,W,X,z);Tt.setMaterial(X,pt);let bt=W.index,Bt=1;if(X.wireframe===!0){if(bt=et.getWireframeAttribute(W),bt===void 0)return;Bt=2}const qt=W.drawRange,Et=W.attributes.position;let ae=qt.start*Bt,Te=(qt.start+qt.count)*Bt;at!==null&&(ae=Math.max(ae,at.start*Bt),Te=Math.min(Te,(at.start+at.count)*Bt)),bt!==null?(ae=Math.max(ae,0),Te=Math.min(Te,bt.count)):Et!=null&&(ae=Math.max(ae,0),Te=Math.min(Te,Et.count));const Re=Te-ae;if(Re<0||Re===1/0)return;we.setup(z,X,St,W,bt);let vn,fe=xt;if(bt!==null&&(vn=J.get(bt),fe=te,fe.setIndex(vn)),z.isMesh)X.wireframe===!0?(Tt.setLineWidth(X.wireframeLinewidth*ve()),fe.setMode(O.LINES)):fe.setMode(O.TRIANGLES);else if(z.isLine){let Rt=X.linewidth;Rt===void 0&&(Rt=1),Tt.setLineWidth(Rt*ve()),z.isLineSegments?fe.setMode(O.LINES):z.isLineLoop?fe.setMode(O.LINE_LOOP):fe.setMode(O.LINE_STRIP)}else z.isPoints?fe.setMode(O.POINTS):z.isSprite&&fe.setMode(O.TRIANGLES);if(z.isBatchedMesh)if(z._multiDrawInstances!==null)fe.renderMultiDrawInstances(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount,z._multiDrawInstances);else if(Jt.get("WEBGL_multi_draw"))fe.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{const Rt=z._multiDrawStarts,hi=z._multiDrawCounts,de=z._multiDrawCount,qn=bt?J.get(bt).bytesPerElement:1,fs=Pt.get(X).currentProgram.getUniforms();for(let En=0;En<de;En++)fs.setValue(O,"_gl_DrawID",En),fe.render(Rt[En]/qn,hi[En])}else if(z.isInstancedMesh)fe.renderInstances(ae,Re,z.count);else if(W.isInstancedBufferGeometry){const Rt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,hi=Math.min(W.instanceCount,Rt);fe.renderInstances(ae,Re,hi)}else fe.render(ae,Re)};function me(E,F,W){E.transparent===!0&&E.side===yn&&E.forceSinglePass===!1?(E.side=mn,E.needsUpdate=!0,Gr(E,F,W),E.side=qi,E.needsUpdate=!0,Gr(E,F,W),E.side=yn):Gr(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),p=ie.get(W),p.init(F),S.push(p),W.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),E!==W&&E.traverseVisible(function(z){z.isLight&&z.layers.test(F.layers)&&(p.pushLight(z),z.castShadow&&p.pushShadow(z))}),p.setupLights();const X=new Set;return E.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;const at=z.material;if(at)if(Array.isArray(at))for(let pt=0;pt<at.length;pt++){const St=at[pt];me(St,W,z),X.add(St)}else me(at,W,z),X.add(at)}),S.pop(),p=null,X},this.compileAsync=function(E,F,W=null){const X=this.compile(E,F,W);return new Promise(z=>{function at(){if(X.forEach(function(pt){Pt.get(pt).currentProgram.isReady()&&X.delete(pt)}),X.size===0){z(E);return}setTimeout(at,10)}Jt.get("KHR_parallel_shader_compile")!==null?at():setTimeout(at,10)})};let Xn=null;function ci(E){Xn&&Xn(E)}function Yc(){$i.stop()}function Kc(){$i.start()}const $i=new ff;$i.setAnimationLoop(ci),typeof self<"u"&&$i.setContext(self),this.setAnimationLoop=function(E){Xn=E,K.setAnimationLoop(E),E===null?$i.stop():$i.start()},K.addEventListener("sessionstart",Yc),K.addEventListener("sessionend",Kc),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),E.isScene===!0&&E.onBeforeRender(v,E,F,C),p=ie.get(E,S.length),p.init(F),S.push(p),Lt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(Lt),Mt=this.localClippingEnabled,rt=ot.init(this.clippingPlanes,Mt),m=_t.get(E,b.length),m.init(),b.push(m),K.enabled===!0&&K.isPresenting===!0){const at=v.xr.getDepthSensingMesh();at!==null&&pa(at,F,-1/0,v.sortObjects)}pa(E,F,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(nt,st),Vt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Vt&&Nt.addToRenderList(m,E),this.info.render.frame++,rt===!0&&ot.beginShadows();const W=p.state.shadowsArray;vt.render(W,E,F),rt===!0&&ot.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=m.opaque,z=m.transmissive;if(p.setupLights(),F.isArrayCamera){const at=F.cameras;if(z.length>0)for(let pt=0,St=at.length;pt<St;pt++){const bt=at[pt];jc(X,z,E,bt)}Vt&&Nt.render(E);for(let pt=0,St=at.length;pt<St;pt++){const bt=at[pt];$c(m,E,bt,bt.viewport)}}else z.length>0&&jc(X,z,E,F),Vt&&Nt.render(E),$c(m,E,F);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(v,E,F),we.resetDefaultState(),M=-1,x=null,S.pop(),S.length>0?(p=S[S.length-1],rt===!0&&ot.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,b.pop(),b.length>0?m=b[b.length-1]:m=null};function pa(E,F,W,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){X&&It.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Lt);const pt=Z.update(E),St=E.material;St.visible&&m.push(E,pt,St,W,It.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const pt=Z.update(E),St=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),It.copy(E.boundingSphere.center)):(pt.boundingSphere===null&&pt.computeBoundingSphere(),It.copy(pt.boundingSphere.center)),It.applyMatrix4(E.matrixWorld).applyMatrix4(Lt)),Array.isArray(St)){const bt=pt.groups;for(let Bt=0,qt=bt.length;Bt<qt;Bt++){const Et=bt[Bt],ae=St[Et.materialIndex];ae&&ae.visible&&m.push(E,pt,ae,W,It.z,Et)}}else St.visible&&m.push(E,pt,St,W,It.z,null)}}const at=E.children;for(let pt=0,St=at.length;pt<St;pt++)pa(at[pt],F,W,X)}function $c(E,F,W,X){const z=E.opaque,at=E.transmissive,pt=E.transparent;p.setupLightsView(W),rt===!0&&ot.setGlobalState(v.clippingPlanes,W),X&&Tt.viewport(R.copy(X)),z.length>0&&Hr(z,F,W),at.length>0&&Hr(at,F,W),pt.length>0&&Hr(pt,F,W),Tt.buffers.depth.setTest(!0),Tt.buffers.depth.setMask(!0),Tt.buffers.color.setMask(!0),Tt.setPolygonOffset(!1)}function jc(E,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Gn(1,1,{generateMipmaps:!0,type:Jt.has("EXT_color_buffer_half_float")||Jt.has("EXT_color_buffer_float")?ai:Ti,minFilter:xi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ee.workingColorSpace}));const at=p.state.transmissionRenderTarget[X.id],pt=X.viewport||R;at.setSize(pt.z,pt.w);const St=v.getRenderTarget();v.setRenderTarget(at),v.getClearColor(H),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Vt&&Nt.render(W);const bt=v.toneMapping;v.toneMapping=Hi;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),rt===!0&&ot.setGlobalState(v.clippingPlanes,X),Hr(E,W,X),A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at),Jt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let Et=0,ae=F.length;Et<ae;Et++){const Te=F[Et],Re=Te.object,vn=Te.geometry,fe=Te.material,Rt=Te.group;if(fe.side===yn&&Re.layers.test(X.layers)){const hi=fe.side;fe.side=mn,fe.needsUpdate=!0,Zc(Re,W,X,vn,fe,Rt),fe.side=hi,fe.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(at),A.updateRenderTargetMipmap(at))}v.setRenderTarget(St),v.setClearColor(H,$),Bt!==void 0&&(X.viewport=Bt),v.toneMapping=bt}function Hr(E,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let z=0,at=E.length;z<at;z++){const pt=E[z],St=pt.object,bt=pt.geometry,Bt=X===null?pt.material:X,qt=pt.group;St.layers.test(W.layers)&&Zc(St,F,W,bt,Bt,qt)}}function Zc(E,F,W,X,z,at){E.onBeforeRender(v,F,W,X,z,at),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),z.onBeforeRender(v,F,W,X,E,at),z.transparent===!0&&z.side===yn&&z.forceSinglePass===!1?(z.side=mn,z.needsUpdate=!0,v.renderBufferDirect(W,F,X,z,E,at),z.side=qi,z.needsUpdate=!0,v.renderBufferDirect(W,F,X,z,E,at),z.side=yn):v.renderBufferDirect(W,F,X,z,E,at),E.onAfterRender(v,F,W,X,z,at)}function Gr(E,F,W){F.isScene!==!0&&(F=kt);const X=Pt.get(E),z=p.state.lights,at=p.state.shadowsArray,pt=z.state.version,St=At.getParameters(E,z.state,at,F,W),bt=At.getProgramCacheKey(St);let Bt=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?G:y).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Xt),Bt=new Map,X.programs=Bt);let qt=Bt.get(bt);if(qt!==void 0){if(X.currentProgram===qt&&X.lightsStateVersion===pt)return Qc(E,St),qt}else St.uniforms=At.getUniforms(E),E.onBeforeCompile(St,v),qt=At.acquireProgram(St,bt),Bt.set(bt,qt),X.uniforms=St.uniforms;const Et=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(Et.clippingPlanes=ot.uniform),Qc(E,St),X.needsLights=ld(E),X.lightsStateVersion=pt,X.needsLights&&(Et.ambientLightColor.value=z.state.ambient,Et.lightProbe.value=z.state.probe,Et.directionalLights.value=z.state.directional,Et.directionalLightShadows.value=z.state.directionalShadow,Et.spotLights.value=z.state.spot,Et.spotLightShadows.value=z.state.spotShadow,Et.rectAreaLights.value=z.state.rectArea,Et.ltc_1.value=z.state.rectAreaLTC1,Et.ltc_2.value=z.state.rectAreaLTC2,Et.pointLights.value=z.state.point,Et.pointLightShadows.value=z.state.pointShadow,Et.hemisphereLights.value=z.state.hemi,Et.directionalShadowMap.value=z.state.directionalShadowMap,Et.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Et.spotShadowMap.value=z.state.spotShadowMap,Et.spotLightMatrix.value=z.state.spotLightMatrix,Et.spotLightMap.value=z.state.spotLightMap,Et.pointShadowMap.value=z.state.pointShadowMap,Et.pointShadowMatrix.value=z.state.pointShadowMatrix),X.currentProgram=qt,X.uniformsList=null,qt}function Jc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=No.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function Qc(E,F){const W=Pt.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function od(E,F,W,X,z){F.isScene!==!0&&(F=kt),A.resetTextureUnits();const at=F.fog,pt=X.isMeshStandardMaterial?F.environment:null,St=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Ks,bt=(X.isMeshStandardMaterial?G:y).get(X.envMap||pt),Bt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),Et=!!W.morphAttributes.position,ae=!!W.morphAttributes.normal,Te=!!W.morphAttributes.color;let Re=Hi;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Re=v.toneMapping);const vn=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,fe=vn!==void 0?vn.length:0,Rt=Pt.get(X),hi=p.state.lights;if(rt===!0&&(Mt===!0||E!==x)){const Nn=E===x&&X.id===M;ot.setState(X,E,Nn)}let de=!1;X.version===Rt.__version?(Rt.needsLights&&Rt.lightsStateVersion!==hi.state.version||Rt.outputColorSpace!==St||z.isBatchedMesh&&Rt.batching===!1||!z.isBatchedMesh&&Rt.batching===!0||z.isBatchedMesh&&Rt.batchingColor===!0&&z.colorTexture===null||z.isBatchedMesh&&Rt.batchingColor===!1&&z.colorTexture!==null||z.isInstancedMesh&&Rt.instancing===!1||!z.isInstancedMesh&&Rt.instancing===!0||z.isSkinnedMesh&&Rt.skinning===!1||!z.isSkinnedMesh&&Rt.skinning===!0||z.isInstancedMesh&&Rt.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Rt.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Rt.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Rt.instancingMorph===!1&&z.morphTexture!==null||Rt.envMap!==bt||X.fog===!0&&Rt.fog!==at||Rt.numClippingPlanes!==void 0&&(Rt.numClippingPlanes!==ot.numPlanes||Rt.numIntersection!==ot.numIntersection)||Rt.vertexAlphas!==Bt||Rt.vertexTangents!==qt||Rt.morphTargets!==Et||Rt.morphNormals!==ae||Rt.morphColors!==Te||Rt.toneMapping!==Re||Rt.morphTargetsCount!==fe)&&(de=!0):(de=!0,Rt.__version=X.version);let qn=Rt.currentProgram;de===!0&&(qn=Gr(X,F,z));let fs=!1,En=!1,tr=!1;const Ce=qn.getUniforms(),ii=Rt.uniforms;if(Tt.useProgram(qn.program)&&(fs=!0,En=!0,tr=!0),X.id!==M&&(M=X.id,En=!0),fs||x!==E){Tt.buffers.depth.getReversed()?(ht.copy(E.projectionMatrix),qd(ht),Yd(ht),Ce.setValue(O,"projectionMatrix",ht)):Ce.setValue(O,"projectionMatrix",E.projectionMatrix),Ce.setValue(O,"viewMatrix",E.matrixWorldInverse);const Ci=Ce.map.cameraPosition;Ci!==void 0&&Ci.setValue(O,Ot.setFromMatrixPosition(E.matrixWorld)),Qt.logarithmicDepthBuffer&&Ce.setValue(O,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ce.setValue(O,"isOrthographic",E.isOrthographicCamera===!0),x!==E&&(x=E,En=!0,tr=!0)}if(z.isSkinnedMesh){Ce.setOptional(O,z,"bindMatrix"),Ce.setOptional(O,z,"bindMatrixInverse");const Nn=z.skeleton;Nn&&(Nn.boneTexture===null&&Nn.computeBoneTexture(),Ce.setValue(O,"boneTexture",Nn.boneTexture,A))}z.isBatchedMesh&&(Ce.setOptional(O,z,"batchingTexture"),Ce.setValue(O,"batchingTexture",z._matricesTexture,A),Ce.setOptional(O,z,"batchingIdTexture"),Ce.setValue(O,"batchingIdTexture",z._indirectTexture,A),Ce.setOptional(O,z,"batchingColorTexture"),z._colorsTexture!==null&&Ce.setValue(O,"batchingColorTexture",z._colorsTexture,A));const er=W.morphAttributes;if((er.position!==void 0||er.normal!==void 0||er.color!==void 0)&&zt.update(z,W,qn),(En||Rt.receiveShadow!==z.receiveShadow)&&(Rt.receiveShadow=z.receiveShadow,Ce.setValue(O,"receiveShadow",z.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(ii.envMap.value=bt,ii.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(ii.envMapIntensity.value=F.environmentIntensity),En&&(Ce.setValue(O,"toneMappingExposure",v.toneMappingExposure),Rt.needsLights&&ad(ii,tr),at&&X.fog===!0&&ft.refreshFogUniforms(ii,at),ft.refreshMaterialUniforms(ii,X,V,Y,p.state.transmissionRenderTarget[E.id]),No.upload(O,Jc(Rt),ii,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(No.upload(O,Jc(Rt),ii,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ce.setValue(O,"center",z.center),Ce.setValue(O,"modelViewMatrix",z.modelViewMatrix),Ce.setValue(O,"normalMatrix",z.normalMatrix),Ce.setValue(O,"modelMatrix",z.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Nn=X.uniformsGroups;for(let Ci=0,Li=Nn.length;Ci<Li;Ci++){const th=Nn[Ci];N.update(th,qn),N.bind(th,qn)}}return qn}function ad(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function ld(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,F,W){Pt.get(E.texture).__webglTexture=F,Pt.get(E.depthTexture).__webglTexture=W;const X=Pt.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Jt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const W=Pt.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){C=E,T=F,w=W;let X=!0,z=null,at=!1,pt=!1;if(E){const bt=Pt.get(E);if(bt.__useDefaultFramebuffer!==void 0)Tt.bindFramebuffer(O.FRAMEBUFFER,null),X=!1;else if(bt.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(bt.__hasExternalTextures)A.rebindTextures(E,Pt.get(E.texture).__webglTexture,Pt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const Et=E.depthTexture;if(bt.__boundDepthTexture!==Et){if(Et!==null&&Pt.has(Et)&&(E.width!==Et.image.width||E.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(pt=!0);const qt=Pt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[F])?z=qt[F][W]:z=qt[F],at=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?z=Pt.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?z=qt[W]:z=qt,R.copy(E.viewport),I.copy(E.scissor),U=E.scissorTest}else R.copy(gt).multiplyScalar(V).floor(),I.copy(Wt).multiplyScalar(V).floor(),U=he;if(Tt.bindFramebuffer(O.FRAMEBUFFER,z)&&X&&Tt.drawBuffers(E,z),Tt.viewport(R),Tt.scissor(I),Tt.setScissorTest(U),at){const bt=Pt.get(E.texture);O.framebufferTexture2D(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,O.TEXTURE_CUBE_MAP_POSITIVE_X+F,bt.__webglTexture,W)}else if(pt){const bt=Pt.get(E.texture),Bt=F||0;O.framebufferTextureLayer(O.FRAMEBUFFER,O.COLOR_ATTACHMENT0,bt.__webglTexture,W||0,Bt)}M=-1},this.readRenderTargetPixels=function(E,F,W,X,z,at,pt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let St=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){Tt.bindFramebuffer(O.FRAMEBUFFER,St);try{const bt=E.texture,Bt=bt.format,qt=bt.type;if(!Qt.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Qt.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&W>=0&&W<=E.height-z&&O.readPixels(F,W,X,z,Kt.convert(Bt),Kt.convert(qt),at)}finally{const bt=C!==null?Pt.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,X,z,at,pt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let St=Pt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&pt!==void 0&&(St=St[pt]),St){const bt=E.texture,Bt=bt.format,qt=bt.type;if(!Qt.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Qt.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-X&&W>=0&&W<=E.height-z){Tt.bindFramebuffer(O.FRAMEBUFFER,St);const Et=O.createBuffer();O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.bufferData(O.PIXEL_PACK_BUFFER,at.byteLength,O.STREAM_READ),O.readPixels(F,W,X,z,Kt.convert(Bt),Kt.convert(qt),0);const ae=C!==null?Pt.get(C).__webglFramebuffer:null;Tt.bindFramebuffer(O.FRAMEBUFFER,ae);const Te=O.fenceSync(O.SYNC_GPU_COMMANDS_COMPLETE,0);return O.flush(),await Xd(O,Te,4),O.bindBuffer(O.PIXEL_PACK_BUFFER,Et),O.getBufferSubData(O.PIXEL_PACK_BUFFER,0,at),O.deleteBuffer(Et),O.deleteSync(Te),at}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,W=0){E.isTexture!==!0&&(pr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),z=Math.floor(E.image.width*X),at=Math.floor(E.image.height*X),pt=F!==null?F.x:0,St=F!==null?F.y:0;A.setTexture2D(E,0),O.copyTexSubImage2D(O.TEXTURE_2D,W,0,0,pt,St,z,at),Tt.unbindTexture()},this.copyTextureToTexture=function(E,F,W=null,X=null,z=0){E.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],F=arguments[2],z=arguments[3]||0,W=null);let at,pt,St,bt,Bt,qt,Et,ae,Te;const Re=E.isCompressedTexture?E.mipmaps[z]:E.image;W!==null?(at=W.max.x-W.min.x,pt=W.max.y-W.min.y,St=W.isBox3?W.max.z-W.min.z:1,bt=W.min.x,Bt=W.min.y,qt=W.isBox3?W.min.z:0):(at=Re.width,pt=Re.height,St=Re.depth||1,bt=0,Bt=0,qt=0),X!==null?(Et=X.x,ae=X.y,Te=X.z):(Et=0,ae=0,Te=0);const vn=Kt.convert(F.format),fe=Kt.convert(F.type);let Rt;F.isData3DTexture?(A.setTexture3D(F,0),Rt=O.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Rt=O.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Rt=O.TEXTURE_2D),O.pixelStorei(O.UNPACK_FLIP_Y_WEBGL,F.flipY),O.pixelStorei(O.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),O.pixelStorei(O.UNPACK_ALIGNMENT,F.unpackAlignment);const hi=O.getParameter(O.UNPACK_ROW_LENGTH),de=O.getParameter(O.UNPACK_IMAGE_HEIGHT),qn=O.getParameter(O.UNPACK_SKIP_PIXELS),fs=O.getParameter(O.UNPACK_SKIP_ROWS),En=O.getParameter(O.UNPACK_SKIP_IMAGES);O.pixelStorei(O.UNPACK_ROW_LENGTH,Re.width),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,Re.height),O.pixelStorei(O.UNPACK_SKIP_PIXELS,bt),O.pixelStorei(O.UNPACK_SKIP_ROWS,Bt),O.pixelStorei(O.UNPACK_SKIP_IMAGES,qt);const tr=E.isDataArrayTexture||E.isData3DTexture,Ce=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const ii=Pt.get(E),er=Pt.get(F),Nn=Pt.get(ii.__renderTarget),Ci=Pt.get(er.__renderTarget);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,Nn.__webglFramebuffer),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,Ci.__webglFramebuffer);for(let Li=0;Li<St;Li++)tr&&O.framebufferTextureLayer(O.READ_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(E).__webglTexture,z,qt+Li),E.isDepthTexture?(Ce&&O.framebufferTextureLayer(O.DRAW_FRAMEBUFFER,O.COLOR_ATTACHMENT0,Pt.get(F).__webglTexture,z,Te+Li),O.blitFramebuffer(bt,Bt,at,pt,Et,ae,at,pt,O.DEPTH_BUFFER_BIT,O.NEAREST)):Ce?O.copyTexSubImage3D(Rt,z,Et,ae,Te+Li,bt,Bt,at,pt):O.copyTexSubImage2D(Rt,z,Et,ae,Te+Li,bt,Bt,at,pt);Tt.bindFramebuffer(O.READ_FRAMEBUFFER,null),Tt.bindFramebuffer(O.DRAW_FRAMEBUFFER,null)}else Ce?E.isDataTexture||E.isData3DTexture?O.texSubImage3D(Rt,z,Et,ae,Te,at,pt,St,vn,fe,Re.data):F.isCompressedArrayTexture?O.compressedTexSubImage3D(Rt,z,Et,ae,Te,at,pt,St,vn,Re.data):O.texSubImage3D(Rt,z,Et,ae,Te,at,pt,St,vn,fe,Re):E.isDataTexture?O.texSubImage2D(O.TEXTURE_2D,z,Et,ae,at,pt,vn,fe,Re.data):E.isCompressedTexture?O.compressedTexSubImage2D(O.TEXTURE_2D,z,Et,ae,Re.width,Re.height,vn,Re.data):O.texSubImage2D(O.TEXTURE_2D,z,Et,ae,at,pt,vn,fe,Re);O.pixelStorei(O.UNPACK_ROW_LENGTH,hi),O.pixelStorei(O.UNPACK_IMAGE_HEIGHT,de),O.pixelStorei(O.UNPACK_SKIP_PIXELS,qn),O.pixelStorei(O.UNPACK_SKIP_ROWS,fs),O.pixelStorei(O.UNPACK_SKIP_IMAGES,En),z===0&&F.generateMipmaps&&O.generateMipmap(Rt),Tt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,W=null,X=null,z=0){return E.isTexture!==!0&&(pr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],F=arguments[3],z=arguments[4]||0),pr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,W,X,z)},this.initRenderTarget=function(E){Pt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Tt.unbindTexture()},this.resetState=function(){T=0,w=0,C=null,Tt.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ee._getDrawingBufferColorSpace(t),e.unpackColorSpace=ee._getUnpackColorSpace()}}class Rc{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=n}clone(){return new Rc(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class nv extends Ve{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ei,this.environmentIntensity=1,this.environmentRotation=new ei,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class iv{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=jl,this.updateRanges=[],this.version=0,this.uuid=Gi()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,n){t*=this.stride,n*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[n+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(e,this.stride);return n.setUsage(this.usage),n}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Gi()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const fn=new P;class Go{constructor(t,e,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,n=this.data.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyMatrix4(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.applyNormalMatrix(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)fn.fromBufferAttribute(this,e),fn.transformDirection(t),this.setXYZ(e,fn.x,fn.y,fn.z);return this}getComponent(t,e){let n=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(n=oi(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=xe(n,this.array)),this.data.array[t*this.data.stride+this.offset+e]=n,this}setX(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=xe(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=oi(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=oi(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=oi(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=oi(e,this.array)),e}setXY(t,e,n){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this}setXYZ(t,e,n,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this}setXYZW(t,e,n,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=xe(e,this.array),n=xe(n,this.array),s=xe(s,this.array),r=xe(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=n,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new _n(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Go(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Cc extends Ai{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let As;const or=new P,Rs=new P,Cs=new P,Ls=new Dt,ar=new Dt,vf=new Ae,ho=new P,lr=new P,uo=new P,Zh=new Dt,Wa=new Dt,Jh=new Dt;class xf extends Ve{constructor(t=new Cc){if(super(),this.isSprite=!0,this.type="Sprite",As===void 0){As=new Ke;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new iv(e,5);As.setIndex([0,1,2,0,2,3]),As.setAttribute("position",new Go(n,3,0,!1)),As.setAttribute("uv",new Go(n,2,3,!1))}this.geometry=As,this.material=t,this.center=new Dt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),vf.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Cs.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Cs.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const a=this.center;fo(ho.set(-.5,-.5,0),Cs,a,Rs,s,r),fo(lr.set(.5,-.5,0),Cs,a,Rs,s,r),fo(uo.set(.5,.5,0),Cs,a,Rs,s,r),Zh.set(0,0),Wa.set(1,0),Jh.set(1,1);let l=t.ray.intersectTriangle(ho,lr,uo,!1,or);if(l===null&&(fo(lr.set(-.5,.5,0),Cs,a,Rs,s,r),Wa.set(0,1),l=t.ray.intersectTriangle(ho,uo,lr,!1,or),l===null))return;const o=t.ray.origin.distanceTo(or);o<t.near||o>t.far||e.push({distance:o,point:or.clone(),uv:Pn.getInterpolation(or,ho,lr,uo,Zh,Wa,Jh,new Dt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function fo(i,t,e,n,s,r){Ls.subVectors(i,e).addScalar(.5).multiply(n),s!==void 0?(ar.x=r*Ls.x-s*Ls.y,ar.y=s*Ls.x+r*Ls.y):ar.copy(Ls),i.copy(t),i.x+=ar.x,i.y+=ar.y,i.applyMatrix4(vf)}class Lc extends Ai{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Vo=new P,Wo=new P,Qh=new Ae,cr=new Ec,po=new Fr,Xa=new P,tu=new P;class sv extends Ve{constructor(t=new Ke,e=new Lc){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[0];for(let s=1,r=e.count;s<r;s++)Vo.fromBufferAttribute(e,s-1),Wo.fromBufferAttribute(e,s),n[s]=n[s-1],n[s]+=Vo.distanceTo(Wo);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),po.copy(n.boundingSphere),po.applyMatrix4(s),po.radius+=r,t.ray.intersectsSphere(po)===!1)return;Qh.copy(s).invert(),cr.copy(t.ray).applyMatrix4(Qh);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,c=this.isLineSegments?2:1,u=n.index,f=n.attributes.position;if(u!==null){const d=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=u.getX(_),b=u.getX(_+1),S=mo(this,t,cr,o,p,b);S&&e.push(S)}if(this.isLineLoop){const _=u.getX(g-1),m=u.getX(d),p=mo(this,t,cr,o,_,m);p&&e.push(p)}}else{const d=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=d,m=g-1;_<m;_+=c){const p=mo(this,t,cr,o,_,_+1);p&&e.push(p)}if(this.isLineLoop){const _=mo(this,t,cr,o,g-1,d);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function mo(i,t,e,n,s,r){const a=i.geometry.attributes.position;if(Vo.fromBufferAttribute(a,s),Wo.fromBufferAttribute(a,r),e.distanceSqToSegment(Vo,Wo,Xa,tu)>n)return;Xa.applyMatrix4(i.matrixWorld);const o=t.ray.origin.distanceTo(Xa);if(!(o<t.near||o>t.far))return{distance:o,point:tu.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const eu=new P,nu=new P;class Mf extends sv{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,n=[];for(let s=0,r=e.count;s<r;s+=2)eu.fromBufferAttribute(e,s),nu.fromBufferAttribute(e,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+eu.distanceTo(nu);t.setAttribute("lineDistance",new Pe(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class la extends Ai{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const iu=new Ae,Ql=new Ec,go=new Fr,_o=new P;class Pc extends Ve{constructor(t=new Ke,e=new la){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const n=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),go.copy(n.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;iu.copy(s).invert(),Ql.copy(t.ray).applyMatrix4(iu);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,c=n.index,h=n.attributes.position;if(c!==null){const f=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let g=f,_=d;g<_;g++){const m=c.getX(g);_o.fromBufferAttribute(h,m),su(_o,m,o,s,t,e,this)}}else{const f=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let g=f,_=d;g<_;g++)_o.fromBufferAttribute(h,g),su(_o,g,o,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const s=e[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function su(i,t,e,n,s,r,a){const l=Ql.distanceSqToPoint(i);if(l<e){const o=new P;Ql.closestPointToPoint(i,o),o.applyMatrix4(n);const c=s.ray.origin.distanceTo(o);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(l),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Vn extends gn{constructor(t,e,n,s,r,a,l,o,c){super(t,e,n,s,r,a,l,o,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class hs extends Ke{constructor(t=1,e=1,n=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};const c=this;s=Math.floor(s),r=Math.floor(r);const u=[],h=[],f=[],d=[];let g=0;const _=[],m=n/2;let p=0;b(),a===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(u),this.setAttribute("position",new Pe(h,3)),this.setAttribute("normal",new Pe(f,3)),this.setAttribute("uv",new Pe(d,2));function b(){const v=new P,L=new P;let T=0;const w=(e-t)/n;for(let C=0;C<=r;C++){const M=[],x=C/r,R=x*(e-t)+t;for(let I=0;I<=s;I++){const U=I/s,H=U*o+l,$=Math.sin(H),q=Math.cos(H);L.x=R*$,L.y=-x*n+m,L.z=R*q,h.push(L.x,L.y,L.z),v.set($,w,q).normalize(),f.push(v.x,v.y,v.z),d.push(U,1-x),M.push(g++)}_.push(M)}for(let C=0;C<s;C++)for(let M=0;M<r;M++){const x=_[M][C],R=_[M+1][C],I=_[M+1][C+1],U=_[M][C+1];(t>0||M!==0)&&(u.push(x,R,U),T+=3),(e>0||M!==r-1)&&(u.push(R,I,U),T+=3)}c.addGroup(p,T,0),p+=T}function S(v){const L=g,T=new Dt,w=new P;let C=0;const M=v===!0?t:e,x=v===!0?1:-1;for(let I=1;I<=s;I++)h.push(0,m*x,0),f.push(0,x,0),d.push(.5,.5),g++;const R=g;for(let I=0;I<=s;I++){const H=I/s*o+l,$=Math.cos(H),q=Math.sin(H);w.x=M*q,w.y=m*x,w.z=M*$,h.push(w.x,w.y,w.z),f.push(0,x,0),T.x=$*.5+.5,T.y=q*.5*x+.5,d.push(T.x,T.y),g++}for(let I=0;I<s;I++){const U=L+I,H=R+I;v===!0?u.push(H,H+1,U):u.push(H+1,H,U),C+=3}c.addGroup(p,C,v===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new hs(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const vo=new P,xo=new P,qa=new P,Mo=new Pn;class rv extends Ke{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Uo*e),a=t.getIndex(),l=t.getAttribute("position"),o=a?a.count:l.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),f={},d=[];for(let g=0;g<o;g+=3){a?(c[0]=a.getX(g),c[1]=a.getX(g+1),c[2]=a.getX(g+2)):(c[0]=g,c[1]=g+1,c[2]=g+2);const{a:_,b:m,c:p}=Mo;if(_.fromBufferAttribute(l,c[0]),m.fromBufferAttribute(l,c[1]),p.fromBufferAttribute(l,c[2]),Mo.getNormal(qa),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,h[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let b=0;b<3;b++){const S=(b+1)%3,v=h[b],L=h[S],T=Mo[u[b]],w=Mo[u[S]],C=`${v}_${L}`,M=`${L}_${v}`;M in f&&f[M]?(qa.dot(f[M].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(w.x,w.y,w.z)),f[M]=null):C in f||(f[C]={index0:c[b],index1:c[S],normal:qa.clone()})}}for(const g in f)if(f[g]){const{index0:_,index1:m}=f[g];vo.fromBufferAttribute(l,_),xo.fromBufferAttribute(l,m),d.push(vo.x,vo.y,vo.z),d.push(xo.x,xo.y,xo.z)}this.setAttribute("position",new Pe(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Dc extends Ke{constructor(t=1,e=32,n=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),n=Math.max(2,Math.floor(n));const o=Math.min(a+l,Math.PI);let c=0;const u=[],h=new P,f=new P,d=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const b=[],S=p/n;let v=0;p===0&&a===0?v=.5/e:p===n&&o===Math.PI&&(v=-.5/e);for(let L=0;L<=e;L++){const T=L/e;h.x=-t*Math.cos(s+T*r)*Math.sin(a+S*l),h.y=t*Math.cos(a+S*l),h.z=t*Math.sin(s+T*r)*Math.sin(a+S*l),g.push(h.x,h.y,h.z),f.copy(h).normalize(),_.push(f.x,f.y,f.z),m.push(T+v,1-S),b.push(c++)}u.push(b)}for(let p=0;p<n;p++)for(let b=0;b<e;b++){const S=u[p][b+1],v=u[p][b],L=u[p+1][b],T=u[p+1][b+1];(p!==0||a>0)&&d.push(S,v,T),(p!==n-1||o<Math.PI)&&d.push(v,L,T)}this.setIndex(d),this.setAttribute("position",new Pe(g,3)),this.setAttribute("normal",new Pe(_,3)),this.setAttribute("uv",new Pe(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dc(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class ov extends un{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class ru extends Ai{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class bn extends Ai{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bc,this.normalScale=new Dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ei,this.combine=mc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Ic extends Ve{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class av extends Ic{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ya=new Ae,ou=new P,au=new P;class yf{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Dt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wc,this._frameExtents=new Dt(1,1),this._viewportCount=1,this._viewports=[new Me(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(ou),au.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(au),e.updateMatrixWorld(),Ya.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ya),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ya)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const lu=new Ae,hr=new P,Ka=new P;class lv extends yf{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Dt(4,2),this._viewportCount=6,this._viewports=[new Me(2,1,1,1),new Me(0,1,1,1),new Me(3,1,1,1),new Me(1,1,1,1),new Me(3,0,1,1),new Me(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(t,e=0){const n=this.camera,s=this.matrix,r=t.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),hr.setFromMatrixPosition(t.matrixWorld),n.position.copy(hr),Ka.copy(n.position),Ka.add(this._cubeDirections[e]),n.up.copy(this._cubeUps[e]),n.lookAt(Ka),n.updateMatrixWorld(),s.makeTranslation(-hr.x,-hr.y,-hr.z),lu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(lu)}}class cv extends Ic{constructor(t,e,n=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new lv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class hv extends yf{constructor(){super(new Tc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class uv extends Ic{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ve.DEFAULT_UP),this.updateMatrix(),this.target=new Ve,this.shadow=new hv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class fv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=cu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=cu();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function cu(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:pc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=pc);function Zt(i,t,e=0){let n=i*374761393+t*668265263+e*2147483647|0;return n=Math.imul(n^n>>>13,1274126177),n^=n>>>16,(n>>>0)/4294967296}function dv(i,t,e,n=0){let s=i*374761393+t*668265263+e*1274126177+n*2147483647|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,s=Math.imul(s,2246822519),s^=s>>>13,(s>>>0)/4294967296}const vr=i=>i*i*(3-2*i);function pv(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=vr(i-n),a=vr(t-s),l=Zt(n,s,e),o=Zt(n+1,s,e),c=Zt(n,s+1,e),u=Zt(n+1,s+1,e);return(l+(o-l)*r)*(1-a)+(c+(u-c)*r)*a}function Ps(i,t,e,n){const s=Math.floor(i),r=Math.floor(t),a=Math.floor(e),l=vr(i-s),o=vr(t-r),c=vr(e-a),u=(f,d,g)=>f+(d-f)*g,h=(f,d,g)=>dv(s+f,r+d,a+g,n);return u(u(u(h(0,0,0),h(1,0,0),l),u(h(0,1,0),h(1,1,0),l),o),u(u(h(0,0,1),h(1,0,1),l),u(h(0,1,1),h(1,1,1),l),o),c)}function pn(i,t,e,n=4){let s=.5,r=1,a=0,l=0;for(let o=0;o<n;o++)a+=pv(i*r,t*r,e+o*101)*s,l+=s,s*=.5,r*=2;return a/l}const Se=16,zr=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","planks","cobble","water","glass","coal_ore","iron_ore","gold_ore","diamond_ore","bedrock","snow","snow_side","cactus_side","cactus_top","bricks","table_top","table_side","torch","furnace_top","furnace_front","command","obsidian","netherrack","soul_sand","glowstone","lava","nether_bricks","end_stone","end_frame_top","end_frame_side","end_frame_eye","portal","end_portal"],xr=Object.fromEntries(zr.map((i,t)=>[i,t])),Mr=zr.length,Sf=i=>Math.max(0,Math.min(255,i));function $t(i,t,e,n,s){const r=(Zt(e,n,s)-.5)*2*t;return i.map(a=>Sf(a+r))}const hu=(i,t)=>$t([95,159,53],22,i,t,1),$a=(i,t)=>$t([134,96,67],18,i,t,2),Oo=(i,t)=>$t([125,125,125],20,i,t,4),ja=(i,t)=>$t([168,134,82],8,i,t,9).map(e=>t%4===3?e-30:e);function yo(i,t){return(e,n)=>Zt(Math.floor(e/2)+3,Math.floor(n/2),t)>.72?$t(i,14,e,n,t+1):Oo(e,n)}const Uc={grass_top:hu,dirt:$a,grass_side:(i,t)=>t<4+(Zt(i,0,3)>.5?1:0)?hu(i,t):$a(i,t),stone:Oo,sand:(i,t)=>$t([219,207,142],12,i,t,5),log_side:(i,t)=>$t([102,81,49],10,i,0,6).map(e=>e-(i%4===0?14:0)),log_top:(i,t)=>{const e=Math.max(Math.abs(i-7.5),Math.abs(t-7.5));return $t(e%4<2?[170,135,82]:[140,110,66],8,i,t,7)},leaves:(i,t)=>$t([56,118,29],30,i,t,8),planks:ja,cobble:(i,t)=>{const e=Zt(Math.floor(i/4),Math.floor(t/4),10),n=i%4===3||t%4===3;return $t([110+e*40,110+e*40,110+e*40],10,i,t,11).map(s=>n?s-35:s)},water:(i,t)=>{const e=Zt(i>>1,t>>1,12)>.8?25:0;return[...$t([36+e,86+e,200+e/2],8,i,t,12),175]},glass:(i,t)=>{const e=i===0||t===0||i===15||t===15,n=i===3&&t>=3&&t<=5||i===4&&t===3||i===11&&t>=10&&t<=11;return e?[215,235,245,230]:n?[255,255,255,190]:[200,225,240,0]},coal_ore:yo([30,30,30],20),iron_ore:yo([216,175,147],30),gold_ore:yo([250,220,60],40),diamond_ore:yo([70,235,225],50),bedrock:(i,t)=>$t([55,55,55],32,i,t,60),snow:(i,t)=>$t([240,245,250],7,i,t,61),snow_side:(i,t)=>t<4?$t([240,245,250],7,i,t,61):$a(i,t),cactus_side:(i,t)=>(i===4||i===11)&&t%5===2?[230,230,200]:$t([36,118,48],10,i,0,62).map(e=>i%5===2?e-18:e),cactus_top:(i,t)=>{const e=Math.max(Math.abs(i-7.5),Math.abs(t-7.5));return $t(e<3?[30,100,40]:[52,140,60],8,i,t,63)},bricks:(i,t)=>t%4===3||(i+Math.floor(t/4)%2*4)%8===7?$t([170,168,160],8,i,t,64):$t([150,72,58],14,i,t,65),table_top:(i,t)=>i===0||t===0||i===15||t===15||i===7||i===8||t===7||t===8?$t([92,60,30],8,i,t,66):ja(i,t),torch:(i,t)=>i<7||i>8?[0,0,0,0]:t<2?i===7?[255,235,120,255]:[255,160,40,255]:t<4?[255,200,60,255]:$t([122,86,44],10,i,t,70),command:(i,t)=>{const e=i===0||t===0||i===15||t===15,n=i===4+(t-4)&&t>=4&&t<=7||i===4+(11-t)&&t>=8&&t<=11||t===10&&i>=9&&i<=12;return e?[74,34,8,255]:n?[42,18,4,255]:$t([196,114,58],18,i,t,75)},obsidian:(i,t)=>Zt(i,t,80)>.93?$t([90,40,150],20,i,t,81):$t([22,14,36],10,i,t,82),netherrack:(i,t)=>{const e=Zt(Math.floor(i/2),Math.floor(t/3),83)>.8;return $t(e?[150,60,55]:[112,40,42],22,i,t,84)},soul_sand:(i,t)=>{const e=(i%5===1||i%5===2)&&(t%5===1||t%5===2)&&Zt(Math.floor(i/5),Math.floor(t/5),85)>.45;return $t(e?[48,36,30]:[88,70,56],12,i,t,86)},glowstone:(i,t)=>{const e=Zt(Math.floor(i/3),Math.floor(t/3),87);return $t(e>.55?[255,226,140]:[206,150,74],22,i,t,88)},lava:(i,t)=>{const e=Zt(Math.floor(i/2),Math.floor(t/2),89);return $t(e>.7?[255,214,70]:e>.35?[248,140,24]:[214,80,14],14,i,t,90)},nether_bricks:(i,t)=>t%4===3||(i+Math.floor(t/4)%2*4)%8===7?$t([28,12,16],6,i,t,91):$t([62,24,30],12,i,t,92),end_stone:(i,t)=>$t([222,222,156],16,i,t,93).map((e,n)=>Zt(i>>1,t>>1,94)>.85?e-24:e),end_frame_top:(i,t)=>i<2||t<2||i>13||t>13?$t([50,100,84],10,i,t,95):$t([96,150,124],10,i,t,96),end_frame_side:(i,t)=>t<4?$t([60,112,94],10,i,t,97):$t([218,218,150],14,i,t,98),end_frame_eye:(i,t)=>{const e=Math.hypot(i-7.5,t-7.5);return e<2.3?[14,20,18]:e<4.4?[96,216,150]:i<2||t<2||i>13||t>13?$t([50,100,84],10,i,t,95):$t([96,150,124],10,i,t,96)},portal:(i,t)=>{const e=Math.sin(i*.9+t*.45)*.5+Math.sin(t*.8-i*.3)*.5;return[90+e*50+Zt(i,t,99)*30,20+e*14,190+e*40,175]},end_portal:(i,t)=>Zt(i,t,100)>.9?[150,255,230,255]:[6,16,22+Zt(i,t,101)*20,240],furnace_top:(i,t)=>i===0||t===0||i===15||t===15?$t([70,70,70],8,i,t,71):Oo(i,t).map(e=>e-20),furnace_front:(i,t)=>i===0||t===0||i===15?$t([70,70,70],8,i,t,72):i>=4&&i<=11&&t>=8&&t<=13?t>10&&i>5&&i<10&&Zt(i,t,73)>.4?[255,150+Zt(i,t,74)*80|0,30,255]:[25,25,25,255]:i>=4&&i<=11&&t>=3&&t<=5?[30,30,30,255]:Oo(i,t).map(n=>n-15),table_side:(i,t)=>t<3?$t([92,60,30],8,i,t,67):i===7||i===8?$t([120,90,50],8,i,t,68):ja(i,t)},Za={};function bf(i){if(Za[i])return Za[i];let t=0,e=0,n=0,s=0;for(let r=0;r<Se;r++)for(let a=0;a<Se;a++){const l=Uc[i](a,r);l[3]!==0&&(t+=l[0],e+=l[1],n+=l[2],s++)}return Za[i]=[t/s/255,e/s/255,n/s/255]}function mv(){const i=document.createElement("canvas");i.width=Se*Mr,i.height=Se;const t=i.getContext("2d"),e=t.createImageData(i.width,Se);zr.forEach((s,r)=>{for(let a=0;a<Se;a++)for(let l=0;l<Se;l++){const o=Uc[s](l,a),c=(a*i.width+r*Se+l)*4;e.data[c]=o[0],e.data[c+1]=o[1],e.data[c+2]=o[2],e.data[c+3]=o[3]===void 0?255:o[3]}}),t.putImageData(e,0,0);const n=new Vn(i);return n.magFilter=_e,n.minFilter=_e,n.colorSpace=nn,n.generateMipmaps=!1,{canvas:i,texture:n}}const Xo={stone:3.4,cobble:4.2,bricks:4,bedrock:4.5,coal_ore:3.4,iron_ore:3.4,gold_ore:3.4,diamond_ore:3.4,planks:2.4,table_top:2.4,table_side:2.4,log_side:3.2,log_top:2.2,leaves:3.6,dirt:2.2,grass_top:2.6,grass_side:2.4,sand:1.4,snow:1,snow_side:1.4,water:.9,glass:0,torch:0,cactus_side:2.6,cactus_top:2,furnace_top:2.6,furnace_front:3,command:2.6};function uu(i,t,e){const n=Math.floor(i),s=Math.floor(t),r=i-n,a=t-s,l=r*r*(3-2*r),o=a*a*(3-2*a),c=Zt(n,s,e),u=Zt(n+1,s,e),h=Zt(n,s+1,e),f=Zt(n+1,s+1,e);return(c+(u-c)*l)*(1-o)+(h+(f-h)*l)*o}function gv(i){const e=64/Se,n=document.createElement("canvas");n.width=64*Mr,n.height=64;const s=n.getContext("2d"),r=s.createImageData(n.width,64),a=document.createElement("canvas");a.width=n.width,a.height=64;const l=a.getContext("2d"),o=l.createImageData(a.width,64);zr.forEach((f,d)=>{const g=Array.from({length:Se*Se},(S,v)=>Uc[f](v%Se,Math.floor(v/Se))),_=(S,v)=>g[Math.max(0,Math.min(Se-1,v))*Se+Math.max(0,Math.min(Se-1,S))],m=new Float32Array(4096);for(let S=0;S<64;S++)for(let v=0;v<64;v++){const L=(v+.5)/e-.5,T=(S+.5)/e-.5,w=Math.floor(L),C=Math.floor(T),M=L-w,x=T-C,R=_(Math.floor(v/e),Math.floor(S/e)),I=_(w,C),U=_(w+1,C),H=_(w,C+1),$=_(w+1,C+1),q=[0,1,2].map(nt=>{const st=(I[nt]*(1-M)+U[nt]*M)*(1-x)+(H[nt]*(1-M)+$[nt]*M)*x;let gt=R[nt]*.5+st*.5;const Wt=(Zt(v+d*97,S,1234)-.5)*16+(uu(v*.35+d*13,S*.35,77)-.5)*22+(uu(v*.09,S*.09+d*5,91)-.5)*18;return Sf(gt+Wt)}),Y=R[3]===void 0?255:R[3],V=(S*n.width+d*64+v)*4;r.data[V]=q[0],r.data[V+1]=q[1],r.data[V+2]=q[2],r.data[V+3]=Y,m[S*64+v]=(q[0]*.3+q[1]*.59+q[2]*.11)/255}const p=Xo[f]===void 0?2:Xo[f],b=(S,v)=>m[(v+64)%64*64+(S+64)%64];for(let S=0;S<64;S++)for(let v=0;v<64;v++){const L=b(v+1,S-1)+2*b(v+1,S)+b(v+1,S+1)-(b(v-1,S-1)+2*b(v-1,S)+b(v-1,S+1)),T=b(v-1,S+1)+2*b(v,S+1)+b(v+1,S+1)-(b(v-1,S-1)+2*b(v,S-1)+b(v+1,S-1));let w=-L*p,C=T*p,M=1;const x=Math.hypot(w,C,M);w/=x,C/=x,M/=x;const R=(S*a.width+d*64+v)*4;o.data[R]=(w*.5+.5)*255,o.data[R+1]=(C*.5+.5)*255,o.data[R+2]=(M*.5+.5)*255,o.data[R+3]=255}}),s.putImageData(r,0,0),l.putImageData(o,0,0);const c=i?i.capabilities.getMaxAnisotropy():4,u=new Vn(n);u.colorSpace=nn,u.magFilter=kn,u.minFilter=xi,u.generateMipmaps=!0,u.anisotropy=Math.min(8,c);const h=new Vn(a);return h.magFilter=kn,h.minFilter=xi,h.generateMipmaps=!0,h.anisotropy=Math.min(8,c),{map:u,normalMap:h}}function _v(i){const t=i.getContext("2d"),e=i.width,n=t.getImageData(0,0,e,Se).data,s=document.createElement("canvas");s.width=e,s.height=Se;const r=s.getContext("2d"),a=r.createImageData(e,Se);zr.forEach((o,c)=>{const u=(Xo[o]===void 0?2:Xo[o])*.45,h=(f,d)=>{const g=((d+Se)%Se*e+c*Se+(f+Se)%Se)*4;return(n[g]*.3+n[g+1]*.59+n[g+2]*.11)/255};for(let f=0;f<Se;f++)for(let d=0;d<Se;d++){const g=h(d+1,f)-h(d-1,f),_=h(d,f+1)-h(d,f-1);let m=-g*u,p=_*u,b=1;const S=Math.hypot(m,p,b);m/=S,p/=S,b/=S;const v=(f*e+c*Se+d)*4;a.data[v]=(m*.5+.5)*255,a.data[v+1]=(p*.5+.5)*255,a.data[v+2]=(b*.5+.5)*255,a.data[v+3]=255}}),r.putImageData(a,0,0);const l=new Vn(s);return l.magFilter=_e,l.minFilter=_e,l.generateMipmaps=!1,l}const Ef={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Zs{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const vv=new Tc(-1,1,1,-1,0,1);class xv extends Ke{constructor(){super(),this.setAttribute("position",new Pe([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pe([0,2,0,0,2,0],2))}}const Mv=new xv;class Nc{constructor(t){this._mesh=new Ut(Mv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,vv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class wf extends Zs{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof un?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ar.clone(t.uniforms),this.material=new un({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Nc(this.material)}render(t,e,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class fu extends Zs{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,n){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),t.setRenderTarget(n),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class yv extends Zs{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class Sv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const n=t.getSize(new Dt);this._width=n.width,this._height=n.height,e=new Gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ai}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new wf(Ef),this.copyPass.material.blending=Si,this.clock=new fv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,n),a.needsSwap){if(n){const l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}fu!==void 0&&(a instanceof fu?n=!0:a instanceof yv&&(n=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new Dt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class bv extends Zs{constructor(t,e,n=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(t,e,n){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const Ev={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Xs extends Zs{constructor(t,e,n,s){super(),this.strength=e!==void 0?e:1,this.radius=n,this.threshold=s,this.resolution=t!==void 0?new Dt(t.x,t.y):new Dt(256,256),this.clearColor=new yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Gn(r,a,{type:ai}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const f=new Gn(r,a,{type:ai});f.texture.name="UnrealBloomPass.h"+h,f.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(f);const d=new Gn(r,a,{type:ai});d.texture.name="UnrealBloomPass.v"+h,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const l=Ev;this.highPassUniforms=Ar.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new un({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const o=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(o[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Dt(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Ef;this.copyUniforms=Ar.clone(u.uniforms),this.blendMaterial=new un({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:wr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new yt,this.oldClearAlpha=1,this.basic=new Ie,this.fsQuad=new Nc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let n=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Dt(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(t,e,n,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this.fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=Xs.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=Xs.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[o];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(n),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let n=0;n<t;n++)e.push(.39894*Math.exp(-.5*n*n/(t*t))/t);return new un({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new Dt(.5,.5)},direction:{value:new Dt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new un({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Xs.BlurDirectionX=new Dt(1,0);Xs.BlurDirectionY=new Dt(0,1);const wv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Tv extends Zs{constructor(){super();const t=wv;this.uniforms=Ar.clone(t.uniforms),this.material=new ov({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Nc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ee.getTransfer(this._outputColorSpace)===ge&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===zu?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Bu?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ku?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===gc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Hu?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Gu&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Le=0,D={GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,PLANKS:7,COBBLE:8,WATER:9,GLASS:10,COAL_ORE:11,IRON_ORE:12,GOLD_ORE:13,DIAMOND_ORE:14,BEDROCK:15,SNOW:16,CACTUS:17,BRICKS:18,TABLE:19,TORCH:20,FURNACE:21,COMMAND:22,OBSIDIAN:23,NETHER_PORTAL:24,NETHERRACK:25,SOUL_SAND:26,GLOWSTONE:27,LAVA:28,NETHER_BRICKS:29,END_STONE:30,END_FRAME:31,END_FRAME_EYE:32,END_PORTAL:33},k={STICK:100,COAL:101,IRON:102,GOLD:103,DIAMOND:104,APPLE:150,PORK:151,BEEF:152,COOKED_PORK:153,STEAK:154,STAR:105,PEARL:106,LIGHTER:107,EYE:108,CHICKEN:155,COOKED_CHICKEN:156},We={};function oe(i,t,e,n,s=null,r=0,a={}){We[i]={id:i,name:t,tiles:e,hardness:n,tool:s,lvl:r,opaque:!0,liquid:!1,...a}}oe(D.GRASS,"Hierba",["grass_top","dirt","grass_side"],.6,"shovel");oe(D.DIRT,"Tierra",["dirt","dirt","dirt"],.5,"shovel");oe(D.STONE,"Piedra",["stone","stone","stone"],1.5,"pick",1);oe(D.SAND,"Arena",["sand","sand","sand"],.5,"shovel");oe(D.LOG,"Tronco",["log_top","log_top","log_side"],2,"axe");oe(D.LEAVES,"Hojas",["leaves","leaves","leaves"],.2);oe(D.PLANKS,"Tablones",["planks","planks","planks"],2,"axe");oe(D.COBBLE,"Adoquín",["cobble","cobble","cobble"],2,"pick",1);oe(D.WATER,"Agua",["water","water","water"],100,null,0,{opaque:!1,liquid:!0,transparent:!0});oe(D.GLASS,"Cristal",["glass","glass","glass"],.3,null,0,{opaque:!1,transparent:!0});oe(D.COAL_ORE,"Mena de carbón",["coal_ore","coal_ore","coal_ore"],3,"pick",1);oe(D.IRON_ORE,"Mena de hierro",["iron_ore","iron_ore","iron_ore"],3,"pick",2);oe(D.GOLD_ORE,"Mena de oro",["gold_ore","gold_ore","gold_ore"],3,"pick",3);oe(D.DIAMOND_ORE,"Mena de diamante",["diamond_ore","diamond_ore","diamond_ore"],3,"pick",3);oe(D.BEDROCK,"Lecho de roca",["bedrock","bedrock","bedrock"],1/0);oe(D.SNOW,"Nieve",["snow","dirt","snow_side"],.3,"shovel");oe(D.CACTUS,"Cactus",["cactus_top","cactus_top","cactus_side"],.4);oe(D.BRICKS,"Ladrillos",["bricks","bricks","bricks"],2,"pick",1);oe(D.TABLE,"Mesa de crafteo",["table_top","planks","table_side"],2.5,"axe");oe(D.TORCH,"Antorcha",["torch","torch","torch"],.05,null,0,{opaque:!1,torch:!0,flat:!0,emit:10});oe(D.COMMAND,"Bloque de comandos",["command","command","command"],5,"pick",3);oe(D.OBSIDIAN,"Obsidiana",["obsidian","obsidian","obsidian"],50,"pick",4);oe(D.NETHER_PORTAL,"Portal del Nether",["portal","portal","portal"],1/0,null,0,{opaque:!1,transparent:!0,portal:!0,glow:!0});oe(D.NETHERRACK,"Netherrack",["netherrack","netherrack","netherrack"],.4,"pick");oe(D.SOUL_SAND,"Arena de almas",["soul_sand","soul_sand","soul_sand"],.5,"shovel");oe(D.GLOWSTONE,"Piedra luminosa",["glowstone","glowstone","glowstone"],.3,null,0,{glow:!0,emit:10});oe(D.LAVA,"Lava",["lava","lava","lava"],1/0,null,0,{opaque:!1,liquid:!0,glow:!0,emit:10});oe(D.NETHER_BRICKS,"Ladrillos del Nether",["nether_bricks","nether_bricks","nether_bricks"],2,"pick",1);oe(D.END_STONE,"Piedra del End",["end_stone","end_stone","end_stone"],3,"pick",1);oe(D.END_FRAME,"Marco del portal del End",["end_frame_top","end_stone","end_frame_side"],1/0);oe(D.END_FRAME_EYE,"Marco del End con ojo",["end_frame_eye","end_stone","end_frame_side"],1/0);oe(D.END_PORTAL,"Portal del End",["end_portal","end_portal","end_portal"],1/0,null,0,{opaque:!1,transparent:!0,portal:!0,glow:!0});oe(D.FURNACE,"Horno",["furnace_top","stone","furnace_front"],3,"pick",1);const si=new Uint8Array(256),Rr=new Uint8Array(256),Yi=new Uint8Array(256),Tf=new Uint8Array(256),Fo=new Uint8Array(256);for(const i of Object.values(We))si[i.id]=i.opaque?1:0,Rr[i.id]=i.liquid||i.torch||i.portal?0:1,i.portal&&(Tf[i.id]=1),i.emit&&(Fo[i.id]=i.emit),Yi[i.id]=i.liquid?1:0;const Ki={};function rn(i,t,e={}){Ki[i]={id:i,name:t,stack:64,...e}}rn(k.STICK,"Palo");rn(k.COAL,"Carbón");rn(k.IRON,"Lingote de hierro");rn(k.GOLD,"Lingote de oro");rn(k.DIAMOND,"Diamante");rn(k.STAR,"Estrella de la tormenta");rn(k.PEARL,"Perla de Ender");rn(k.LIGHTER,"Encendedor",{stack:1,uses:64});rn(k.EYE,"Ojo de Ender");rn(k.CHICKEN,"Pollo crudo",{food:4});rn(k.COOKED_CHICKEN,"Pollo asado",{food:12});rn(k.APPLE,"Manzana",{food:8});rn(k.PORK,"Cerdo crudo",{food:6});rn(k.BEEF,"Ternera cruda",{food:6});rn(k.COOKED_PORK,"Cerdo asado",{food:14});rn(k.STEAK,"Filete",{food:16});const Af=[{n:"de madera",color:[176,140,84],speed:2,dur:59,lvl:1,mat:D.PLANKS},{n:"de piedra",color:[140,140,140],speed:4,dur:131,lvl:2,mat:D.COBBLE},{n:"de hierro",color:[225,225,225],speed:6,dur:250,lvl:3,mat:k.IRON},{n:"de diamante",color:[90,235,225],speed:8,dur:1561,lvl:4,mat:k.DIAMOND}],Av=[{t:"pick",name:"Pico",base:110,dmg:2,rows:["MMM"," S "," S "]},{t:"axe",name:"Hacha",base:120,dmg:3,rows:["MM","MS"," S"]},{t:"shovel",name:"Pala",base:130,dmg:2,rows:["M","S","S"]},{t:"sword",name:"Espada",base:140,dmg:4,rows:["M","M","S"]}],Rf=[];function Un(i,t,e,n=1){Rf.push({pattern:i,key:t,out:e,n})}Av.forEach(i=>Af.forEach((t,e)=>{const n=i.base+e;rn(n,`${i.name} ${t.n}`,{stack:1,tool:{type:i.t,tier:e,speed:t.speed,dur:t.dur,lvl:t.lvl,dmg:i.dmg+e},color:t.color}),Un(i.rows,{M:t.mat,S:k.STICK},n)}));Un(["L"],{L:D.LOG},D.PLANKS,4);Un(["P","P"],{P:D.PLANKS},k.STICK,4);Un(["PP","PP"],{P:D.PLANKS},D.TABLE);Un(["SS","SS"],{S:D.SAND},D.GLASS,4);Un(["CC","CC"],{C:D.COBBLE},D.BRICKS,4);Un(["CCC","C C","CCC"],{C:D.COBBLE},D.FURNACE);Un(["C","S"],{C:k.COAL,S:k.STICK},D.TORCH,4);Un(["CCC","CDC","CCC"],{C:D.COBBLE,D:k.DIAMOND},D.OBSIDIAN,2);Un(["I","C"],{I:k.IRON,C:k.COAL},k.LIGHTER);Un(["P","C"],{P:k.PEARL,C:k.COAL},k.EYE);Un(["OOO","ODO","OOO"],{O:D.OBSIDIAN,D:k.DIAMOND},D.END_FRAME,4);Un(["DGD","GCG","DGD"],{D:k.DIAMOND,G:k.GOLD,C:k.COAL},D.COMMAND);const Rv={[D.IRON_ORE]:[k.IRON,1],[D.GOLD_ORE]:[k.GOLD,1],[D.COBBLE]:[D.STONE,1],[D.SAND]:[D.GLASS,1],[D.LOG]:[k.COAL,1],[k.PORK]:[k.COOKED_PORK,1],[k.BEEF]:[k.STEAK,1],[k.CHICKEN]:[k.COOKED_CHICKEN,1]},du={[k.COAL]:80,[D.LOG]:15,[D.PLANKS]:15,[D.TABLE]:15,[k.STICK]:5},Cf=8;function ca(i){return We[i]||Ki[i]}function vi(i){const t=ca(i);return We[i]?64:t.stack}const Cv=i=>!!We[i],Lf=i=>!We[i]||!!We[i].flat;function Lv(i,t){let e=t,n=-1,s=t,r=-1;for(let o=0;o<t;o++)for(let c=0;c<t;c++)i[o*t+c]&&(e=Math.min(e,o),n=Math.max(n,o),s=Math.min(s,c),r=Math.max(r,c));if(n<0)return null;const a=n-e+1,l=r-s+1;for(const o of Rf)if(!(o.pattern.length!==a||o.pattern[0].length!==l))for(const c of[!1,!0]){let u=!0;for(let h=0;h<a&&u;h++)for(let f=0;f<l;f++){const d=o.pattern[h][c?l-1-f:f],g=d===" "?0:o.key[d];if(i[(e+h)*t+s+f]!==g){u=!1;break}}if(u)return o}return null}function cs(i){return i&&Ki[i.id]&&Ki[i.id].tool}function Pf(i,t){const e=We[i];if(!e.lvl)return!0;const n=cs(t);return!!n&&n.type==="pick"&&n.lvl>=e.lvl}function Pv(i,t){const e=We[i];if(e.hardness===1/0)return 1/0;const n=cs(t),s=n&&e.tool&&n.type===e.tool,r=Pf(i,t),a=s?n.speed:1;return e.hardness*(r?1.5:5)/a}function Df(i,t){if(!Pf(i,t))return null;switch(i){case D.GRASS:return[D.DIRT,1];case D.STONE:return[D.COBBLE,1];case D.COAL_ORE:return[k.COAL,1];case D.DIAMOND_ORE:return[k.DIAMOND,1];case D.LEAVES:return Math.random()<.1?[k.APPLE,1]:null;case D.GLASS:case D.WATER:case D.LAVA:case D.NETHER_PORTAL:case D.END_PORTAL:case D.END_FRAME:case D.END_FRAME_EYE:return null;default:return[i,1]}}let Oc=null;const Ja=new Map,Qa=new Map,tl=new Map;function Dv(i){Oc=i}function Iv(i){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");e.imageSmoothingEnabled=!1;const n=We[i],s=(r,a,l)=>{e.save(),e.setTransform(...a),e.drawImage(Oc,xr[r]*16,0,16,16,0,0,16,16),l&&(e.fillStyle=`rgba(0,0,0,${l})`,e.fillRect(0,0,16,16)),e.restore()};return s(n.tiles[0],[.875,.4375,-.875,.4375,16,4],0),s(n.tiles[2],[.875,.4375,0,.875,2,11],.22),s(n.tiles[2],[.875,-.4375,0,.875,16,18],.42),t}function Ft(i,t,e){i.fillStyle=e;for(const[n,s]of t)i.fillRect(n,s,1,1)}const If=i=>`rgb(${i[0]},${i[1]},${i[2]})`,Uv=(i,t)=>If(i.map(e=>Math.max(0,Math.min(255,e*t))));function Nv(i){const t=document.createElement("canvas");t.width=t.height=16;const e=t.getContext("2d"),n="#7a5a30",s=()=>{for(let a=2;a<=11;a++)Ft(e,[[a,15-a]],n)},r=Ki[i]||{};if(i===D.TORCH){for(let a=6;a<=14;a++)Ft(e,[[7,a],[8,a]],a%2?"#7a5630":"#6a4a28");Ft(e,[[7,4],[8,4],[7,5],[8,5]],"#ffc83c"),Ft(e,[[7,3],[8,3]],"#ff9a28"),Ft(e,[[7,2]],"#ffeb78")}else if(r.tool){const a=Af[r.tool.tier].color,l=Uv(a,.7),o=If(a);s();const c=r.tool.type;if(c==="pick")Ft(e,[[5,2],[6,1],[7,1],[8,1],[9,1],[10,2],[11,3],[12,4],[12,5],[4,3],[3,4],[3,5]],o),Ft(e,[[6,2],[7,2],[8,2],[9,2],[10,3],[11,4]],l);else if(c==="axe")Ft(e,[[7,2],[8,2],[9,2],[6,3],[7,3],[8,3],[9,3],[10,3],[8,4],[9,4],[10,4],[9,5]],o),Ft(e,[[7,4],[8,5],[10,5]],l);else if(c==="shovel")Ft(e,[[11,2],[12,2],[10,3],[11,3],[12,3],[13,3],[11,4],[12,4],[13,4],[12,5],[13,5],[12,1],[13,2]],o),Ft(e,[[11,4],[12,5]],l);else{for(let u=0;u<9;u++)Ft(e,[[5+u,10-u],[6+u,10-u]],u%2?o:l);Ft(e,[[12,1],[13,2],[13,1]],o),Ft(e,[[4,9],[5,10],[6,11],[3,8],[4,11],[5,12]],"#5a4020")}}else if(i===k.STICK)s(),Ft(e,[[12,3]],n);else if(i===k.COAL)Ft(e,[[5,5],[6,4],[7,4],[8,4],[9,5],[10,6],[10,7],[9,9],[8,10],[6,10],[5,9],[4,7],[4,6],[6,5],[7,5],[8,5],[9,6],[9,7],[8,9],[7,9],[6,9],[5,8],[5,6],[6,6],[7,6],[8,6],[8,7],[8,8],[7,8],[6,8],[5,7],[6,7],[7,7]],"#262626"),Ft(e,[[7,5],[6,6]],"#555");else if(i===k.IRON||i===k.GOLD){const a=i===k.IRON?"#d8d8d8":"#f2d230",l=i===k.IRON?"#9a9a9a":"#b89412";for(let o=5;o<=10;o++)for(let c=3;c<=12;c++)Ft(e,[[c,o]],o>=9?l:a);Ft(e,[[3,5],[12,5],[3,10],[12,10]],"rgba(0,0,0,0)")}else if(i===k.DIAMOND)Ft(e,[[7,3],[8,3],[6,4],[7,4],[8,4],[9,4],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[6,6],[7,6],[8,6],[9,6],[7,7],[8,7],[7,8]],"#5aebe1"),Ft(e,[[7,4],[6,5],[7,6]],"#c8fffa"),Ft(e,[[9,5],[8,6],[8,7],[7,8]],"#2aa8a0");else if(i===k.APPLE){Ft(e,[[5,5],[6,4],[7,5],[8,4],[9,4],[10,5],[4,6],[11,6],[4,7],[11,7],[5,9],[6,10],[9,10],[10,9],[11,8],[4,8]],"#d22");for(let a=5;a<=9;a++)for(let l=5;l<=10;l++)Ft(e,[[l,a]],"#e33");Ft(e,[[6,5],[6,6]],"#fcc"),Ft(e,[[8,2],[9,3]],"#5a3a10"),Ft(e,[[9,2],[10,2]],"#3a3")}else if(i===k.PORK||i===k.BEEF){const a=i===k.PORK?"#f0a0a0":"#b83a3a",l=i===k.PORK?"#c87070":"#8a2020";for(let o=4;o<=11;o++)for(let c=3+(o<6?2:0);c<=12-(o>9?2:0);c++)Ft(e,[[c,o]],(c+o)%5===0?l:a);Ft(e,[[10,5],[11,5],[11,6]],"#f6f0e0")}else if(i===k.STAR)Ft(e,[[7,1],[8,1],[7,2],[8,2],[7,3],[8,3],[1,6],[2,6],[3,6],[4,6],[11,6],[12,6],[13,6],[14,6],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[3,6],[5,9],[6,9],[9,9],[10,9],[4,11],[5,11],[10,11],[11,11],[4,12],[11,12],[3,13],[12,13],[6,6],[7,6],[8,6],[9,6],[7,4],[8,4]],"#fff1a8"),Ft(e,[[7,6],[8,6],[7,7],[8,7]],"#ffffff"),Ft(e,[[5,8],[10,8],[6,9],[9,9]],"#e8c640");else if(i===k.LIGHTER){for(let a=7;a<=13;a++)for(let l=4;l<=10;l++)Ft(e,[[l,a]],a<9?"#9a9a9a":"#6a6a6a");Ft(e,[[8,6],[9,5],[9,4],[8,3],[9,2]],"#ff9a28"),Ft(e,[[9,4],[9,3]],"#ffe070"),Ft(e,[[6,8],[7,8]],"#d8d8d8")}else if(i===k.EYE){for(let a=3;a<=12;a++)for(let l=3;l<=12;l++)Math.hypot(l-7.5,a-7.5)<4.6&&Ft(e,[[l,a]],Math.hypot(l-7.5,a-7.5)<2?"#101a14":"#3fae78");Ft(e,[[5,5],[6,5],[5,6]],"#a8ffd8")}else if(i===k.PEARL){for(let a=3;a<=12;a++)for(let l=3;l<=12;l++)Math.hypot(l-7.5,a-7.5)<4.6&&Ft(e,[[l,a]],Math.hypot(l-7.5,a-7.5)<3?"#1f8f6a":"#0e5a44");Ft(e,[[6,5],[7,5],[5,6],[6,6]],"#a8ffd8"),Ft(e,[[9,9],[10,8]],"#52d8a8")}else if(i===k.CHICKEN||i===k.COOKED_CHICKEN){const a=i===k.CHICKEN?"#f2c4b0":"#c8883a",l=i===k.CHICKEN?"#d49a84":"#8a5420";for(let o=4;o<=10;o++)for(let c=4;c<=11;c++)Math.hypot(c-7.5,o-7)<4&&Ft(e,[[c,o]],(c+o)%4===0?l:a);Ft(e,[[10,10],[11,11],[12,12],[12,11],[11,12]],"#f6f0e0")}else if(i===k.COOKED_PORK||i===k.STEAK){const a=i===k.STEAK?"#8a4a22":"#c8884c",l=i===k.STEAK?"#5e2e12":"#a06030";for(let o=4;o<=11;o++)for(let c=3+(o<6?2:0);c<=12-(o>9?2:0);c++)Ft(e,[[c,o]],(c+o)%4===0?l:a);Ft(e,[[10,5],[11,5],[11,6]],"#f6f0e0"),Ft(e,[[5,6],[6,7],[7,8],[8,9]],l)}else Ft(e,[[7,7]],"#fff");return t}function Uf(i){if(tl.has(i))return tl.get(i);const t=We[i]&&!We[i].flat?Iv(i):Nv(i);return tl.set(i,t),t}function Nf(i){return Ja.has(i)||Ja.set(i,Uf(i).toDataURL()),Ja.get(i)}function Fc(i){if(!Qa.has(i)){const t=new Vn(Uf(i));t.magFilter=_e,t.minFilter=_e,t.generateMipmaps=!1,t.colorSpace=nn,Qa.set(i,t)}return Qa.get(i)}function el(i,t,e){const n=document.createElement("canvas");n.width=9,n.height=9;const s=n.getContext("2d");return i.forEach((r,a)=>[...r].forEach((l,o)=>{const c=t(l,o);c&&(s.fillStyle=c,s.fillRect(o,a,1,1))})),n.toDataURL()}const Ov=[".##...##.","#RR#.#RR#","#RHRRRRR#","#RRRRRRR#",".#RRRRR#.","..#RRR#..","...#R#...","....#....","........."],Fv=["......##.",".....#CC#","....#CHC#","...#CCC#.","..#CCC#..",".#CCC#...","#WW##....","#WW#.....",".##......"],zv=["..#####..",".#BBBBB#.","#BHBBBBB#","#BHBBBBB#","#BBBBBBB#","#BBBBBBB#",".#BBBBB#.","..#####..","........."];function Bv(){const i=n=>el(Ov,(s,r)=>{if(s===".")return null;const a=n==="empty"||n==="half"&&r>4;return s==="#"?"#1a0505":a?"#4a3a3a":s==="H"?"#ff9c9c":"#e02222"}),t=n=>el(Fv,(s,r)=>s==="."?null:s==="#"?"#2a1405":s==="W"?n==="empty"?"#555":"#f4efe4":n==="empty"||n==="half"&&r>4?"#4a3d30":s==="H"?"#e8a05a":"#c8782b"),e=n=>el(zv,s=>s==="."?null:s==="#"?"#0a2a5a":n==="empty"?"rgba(120,170,230,0.25)":s==="H"?"#d8f0ff":"#5aa8f0");return{heart:{full:i("full"),half:i("half"),empty:i("empty")},food:{full:t("full"),half:t("half"),empty:t("empty")},bubble:{full:e("full"),empty:e("empty")}}}function kv(i){const t=document.createElement("canvas");t.width=t.height=16;const e=xr[i];return t.getContext("2d").drawImage(Oc,e*16,0,16,16,0,0,16,16),t.toDataURL()}const ke=(i,t)=>new bn(t?{color:i,map:t}:{color:i});function So(i){const t=document.createElement("canvas");t.width=t.height=8,i(t.getContext("2d"));const e=new Vn(t);return e.magFilter=_e,e.minFilter=_e,e.generateMipmaps=!1,e.colorSpace=nn,e}function bo(i,t,e,n,s,r,a){const l=new Ee;l.position.set(s,r,a);const o=new Ut(new re(i,t,e),n);return o.position.y=-t/2,l.add(o),l}class Hv{constructor(t){const e="#e0ac8c",n="#3a2412",a=So(g=>{g.fillStyle=e,g.fillRect(0,0,8,8),g.fillStyle=n,g.fillRect(0,0,8,2),g.fillRect(0,2,1,2),g.fillRect(7,2,1,2),g.fillStyle="#fff",g.fillRect(1,3,2,1),g.fillRect(5,3,2,1),g.fillStyle="#3a56c8",g.fillRect(2,3,1,1),g.fillRect(5,3,1,1),g.fillStyle="#a0603c",g.fillRect(3,5,2,1)}),l=So(g=>{g.fillStyle=n,g.fillRect(0,0,8,8)}),o=So(g=>{g.fillStyle=e,g.fillRect(0,0,8,8),g.fillStyle=n,g.fillRect(0,0,8,2)}),c=So(g=>{g.fillStyle=n,g.fillRect(0,0,8,8)}),u=ke(14724236);this.group=new Ee;const h=new Ee;this.group.add(h),this.head=new Ee,this.head.position.set(0,1.5,0);const f=new Ut(new re(.5,.5,.5),[ke(16777215,o),ke(16777215,o),ke(16777215,l),u,ke(16777215,a),ke(16777215,c)]);f.position.y=.25,this.head.add(f),h.add(this.head);const d=new Ut(new re(.5,.75,.25),ke(2794936));d.position.y=1.125,h.add(d),this.legL=bo(.25,.75,.25,ke(3817372),-.125,.75,0),this.legR=bo(.25,.75,.25,ke(3817372),.125,.75,0),this.legL.children[0].material=ke(3817372),h.add(this.legL,this.legR),this.armL=bo(.22,.72,.22,[ke(2794936),ke(2794936),ke(2794936),u,ke(2794936),ke(2794936)],-.36,1.48,0),this.armR=bo(.22,.72,.22,[ke(2794936),ke(2794936),ke(2794936),u,ke(2794936),ke(2794936)],.36,1.48,0),h.add(this.armL,this.armR),this.itemMat=new Ie({transparent:!0,side:yn,alphaTest:.1}),this.item=new Ut(new Ei(.55,.55),this.itemMat),this.item.position.set(0,-.68,.22),this.item.rotation.set(0,0,0),this.armR.add(this.item),this.item.visible=!1,this.heldId=-1,this.t=0,t.add(this.group),this.group.traverse(g=>{g.isMesh&&(g.castShadow=!0,g.receiveShadow=!0)}),this.group.visible=!1}setHeld(t){t!==this.heldId&&(this.heldId=t,this.item.visible=!!t,t&&(this.itemMat.map=Fc(t),this.itemMat.needsUpdate=!0))}update(t,e,n,s){this.group.position.copy(e.pos),this.group.rotation.y=e.yaw+Math.PI;const r=Math.hypot(e.vel.x,e.vel.z),a=r>.3&&(e.onGround||e.inWater);this.t+=t*(a?4+r*1.2:0);const l=a?Math.sin(this.t)*.9:0;this.legL.rotation.x=l,this.legR.rotation.x=-l,this.armL.rotation.x=-l*.8;let o=l*.8;n>0?o=-Math.sin(Math.min(1,n)*Math.PI)*1.8-.5:this.heldId&&(o=-.5+l*.3),this.armR.rotation.x=o,this.head.rotation.x=-e.pitch;const c=Math.sin(performance.now()/700)*.02;this.armL.rotation.z=-.04-c,this.armR.rotation.z=.04+c,e.flying&&(this.group.rotation.x=0)}}const Gv={clear:0,rain:.65,storm:1},tc={clear:"Despejado",rain:"Lluvia",storm:"Tormenta"},en=(i,t)=>i+Math.random()*(t-i),ur=1800,cn=22;class Vv{constructor(t,e){this.scene=t,this.hooks=e,this.state="clear",this.timer=en(90,240),this.intensity=0,this.t=Math.random()*100,this.wind={x:0,z:0,s:.12},this.lightningT=6,this.bolts=[],this.thunder=[],this.boss=!1,this.pos=new Float32Array(ur*3);for(let r=0;r<ur;r++)this.pos[r*3]=en(-cn,cn),this.pos[r*3+1]=en(-8,22),this.pos[r*3+2]=en(-cn,cn);const n=new Ke;this.linePos=new Float32Array(ur*6),n.setAttribute("position",new _n(this.linePos,3)),this.rain=new Mf(n,new Lc({color:11453674,transparent:!0,opacity:.55,fog:!1,depthWrite:!1})),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain);const s=new Ke;this.ptPos=new Float32Array(ur*3),s.setAttribute("position",new _n(this.ptPos,3)),this.snow=new Pc(s,new la({color:16777215,size:3.5,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1})),this.snow.frustumCulled=!1,this.snow.visible=!1,t.add(this.snow),this.boltMat=new Ie({color:15922431,fog:!1})}set(t){this.state=t,this.timer=t==="clear"?en(120,360):t==="rain"?en(90,200):en(80,170)}cycle(){const t=["clear","rain","storm"];return this.set(t[(t.indexOf(this.state)+1)%3]),this.state}next(){const t=Math.random();return this.state==="clear"?t<.65?"rain":t<.85?"storm":"clear":this.state==="rain"?t<.55?"clear":"storm":t<.5?"rain":"clear"}toJSON(){return{state:this.state,timer:this.timer,intensity:this.intensity}}load(t){t&&(this.state=t.state,this.timer=t.timer,this.intensity=t.intensity)}update(t,e,n,s,r){const a=this.hooks.world();this.t+=t,this.timer-=t,this.timer<=0&&this.set(this.next());const l=Gv[this.state];this.intensity+=Math.sign(l-this.intensity)*Math.min(Math.abs(l-this.intensity),t*.08);const o=this.intensity,c=Math.sin(this.t*.02)*1.6+.8,u=.55+.45*Math.sin(this.t*.35)*Math.sin(this.t*.13+1),f=.12+((this.state==="storm"?1:this.state==="rain"?.45:.12)-.12)*Math.min(1,o*1.5+(this.state==="clear",0))*u;this.wind.s+=(f-this.wind.s)*Math.min(1,t*1.5),this.wind.x=Math.cos(c)*this.wind.s,this.wind.z=Math.sin(c)*this.wind.s;const d=n.position,g=o>.04&&!r;if(this.rain.visible=g&&!s,this.snow.visible=g&&s,g){const m=Math.floor(ur*Math.min(1,o*(this.state==="storm"?1:.8))),p=s?2.4:26,b=s?1.5:9,S=this.wind.x*b,v=this.wind.z*b;for(let L=0;L<m;L++){let T=this.pos[L*3]+S*t,w=this.pos[L*3+1]-p*t*(s?1:.85+L%7*.05),C=this.pos[L*3+2]+v*t;s&&(T+=Math.sin(this.t*1.3+L)*t*.6,C+=Math.cos(this.t*1.1+L*.7)*t*.6),T>cn?T-=2*cn:T<-cn&&(T+=2*cn),C>cn?C-=2*cn:C<-cn&&(C+=2*cn);const M=d.x+T,x=d.z+C,R=a?a.topY(Math.floor(M),Math.floor(x)):-1;if((w+d.y<R+1||w<-14)&&(w=en(10,24),T=en(-cn,cn),C=en(-cn,cn)),this.pos[L*3]=T,this.pos[L*3+1]=w,this.pos[L*3+2]=C,s)this.ptPos[L*3]=d.x+T,this.ptPos[L*3+1]=d.y+w,this.ptPos[L*3+2]=d.z+C;else{const I=L*6,U=.9;this.linePos[I]=d.x+T,this.linePos[I+1]=d.y+w,this.linePos[I+2]=d.z+C,this.linePos[I+3]=d.x+T-S*.06,this.linePos[I+4]=d.y+w+U,this.linePos[I+5]=d.z+C-v*.06}}s?(this.snow.geometry.setDrawRange(0,m),this.snow.geometry.attributes.position.needsUpdate=!0):(this.rain.geometry.setDrawRange(0,m*2),this.rain.geometry.attributes.position.needsUpdate=!0),this.rain.material.opacity=.35+.3*o}this.state==="storm"&&o>.7&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=this.boss?en(2.5,6):en(4,14),this.strike(e)));const _=this.hooks.sky();_.wet=o,_.flash=Math.max(0,_.flash-t*2.2);for(let m=this.bolts.length-1;m>=0;m--){const p=this.bolts[m];p.life-=t,p.group.visible=p.life>.12||Math.floor(p.life*40)%2===0,p.life<=0&&(this.scene.remove(p.group),p.group.traverse(b=>b.geometry&&b.geometry.dispose()),this.bolts.splice(m,1))}for(let m=this.thunder.length-1;m>=0;m--)this.thunder[m].delay-=t,this.thunder[m].delay<=0&&(this.hooks.sound("thunder",this.thunder[m].vol),this.thunder.splice(m,1))}strike(t,e,n){const s=this.hooks.world(),r=Math.random()*Math.PI*2,a=e?6:en(18,110),l=Math.floor(n?n.x+en(-2,2):t.pos.x+Math.cos(r)*a),o=Math.floor(n?n.z+en(-2,2):t.pos.z+Math.sin(r)*a),c=s.topY(l,o),u=c>=0,h=u?c+1:30,f=Math.hypot(l-t.pos.x,o-t.pos.z);if(this.hooks.sky().flash=Math.min(1,1.15-f/220),this.thunder.push({delay:f/55,vol:Math.max(.25,1-f/150)}),!u||f>150)return;const d=new Ee;let g=l+.5,_=o+.5,m=h+85;const p=16;for(let b=1;b<=p;b++){const S=h+85-(h+85-h)*b/p,v=3.2*(1-b/p),L=b===p?l+.5:l+.5+en(-v,v),T=b===p?o+.5:o+.5+en(-v,v),w=new P(g,m,_),C=new P(L,S,T),M=w.distanceTo(C),x=new Ut(new hs(.16,.16,M,4),this.boltMat);x.position.copy(w).add(C).multiplyScalar(.5),x.quaternion.setFromUnitVectors(new P(0,1,0),C.clone().sub(w).normalize()),d.add(x),g=L,m=S,_=T}this.scene.add(d),this.bolts.push({group:d,life:.45}),this.hooks.burst(l+.5,h+.3,o+.5),this.hooks.strikeMobs(l+.5,o+.5),f<3.5&&this.hooks.hurtPlayer(8)}}function Js(i,t,e,n=28){const s={onGround:!1,hitX:!1,hitZ:!1};t.vel.y=Math.max(-50,t.vel.y-n*e);const r=()=>{for(let a=Math.floor(t.pos.y);a<=Math.floor(t.pos.y+t.h-.001);a++)for(let l=Math.floor(t.pos.z-t.hw);l<=Math.floor(t.pos.z+t.hw);l++)for(let o=Math.floor(t.pos.x-t.hw);o<=Math.floor(t.pos.x+t.hw);o++)if(i.isSolid(o,a,l))return!0;return!1};for(const a of["x","z","y"]){const l=t.vel[a]*e;l&&(t.pos[a]+=l,r()&&(t.pos[a]-=l,a==="y"&&t.vel.y<0&&(s.onGround=!0),a==="x"&&(s.hitX=!0),a==="z"&&(s.hitZ=!0),t.vel[a]=0))}return s}class Wv{constructor(t,e){this.scene=t,this.world=e,this.list=[]}spawn(t,e,n,s,r=1,a=!0){const l=new Cc({map:Fc(s),transparent:!0,alphaTest:.1}),o=new xf(l),c=We[s]?.32:.42;o.scale.set(c,c,c),this.scene.add(o);const u=Math.random()*Math.PI*2;this.list.push({id:s,n:r,sprite:o,base:c,age:0,hw:.12,h:.25,pos:new P(t,e,n),vel:new P(a?Math.cos(u)*1.6:0,a?4:0,a?Math.sin(u)*1.6:0)})}update(t,e,n,s){for(let r=this.list.length-1;r>=0;r--){const a=this.list[r];a.age+=t,Js(this.world,a,t,22).onGround&&(a.vel.x*=.8,a.vel.z*=.8);const o=Math.sin(a.age*3)*.05+.22;a.sprite.position.set(a.pos.x,a.pos.y+o,a.pos.z);const c=e.pos.x-a.pos.x,u=e.pos.z-a.pos.z,h=e.pos.y+.9-a.pos.y,f=Math.hypot(c,h,u);if(a.age>.6&&f<2.2&&n.canAdd(a.id)&&(a.vel.x=c*6,a.vel.z=u*6,a.vel.y=Math.max(a.vel.y,h*5),a.pos.x+=c*t*6,a.pos.z+=u*t*6,f<.9)){const d=n.add(a.id,a.n);if(d===0){this.remove(r),s(a);continue}a.n=d}(a.age>300||a.pos.y<-10)&&this.remove(r)}}remove(t){const e=this.list[t];this.scene.remove(e.sprite),e.sprite.material.dispose(),this.list.splice(t,1)}clear(){for(;this.list.length;)this.remove(0)}}class Xv{constructor(t,e){this.world=e,this.pool=[];const n=new re(.12,.12,.12);for(let s=0;s<90;s++){const r=new Ut(n,new Ie({color:16777215}));r.visible=!1,t.add(r),this.pool.push({mesh:r,life:0,vel:new P})}this.next=0}burst(t,e,n,s,r=10,a=3){for(let l=0;l<r;l++){const o=this.pool[this.next++%this.pool.length];o.life=.5+Math.random()*.4,o.mesh.visible=!0,o.mesh.position.set(t+(Math.random()-.5),e+(Math.random()-.5),n+(Math.random()-.5)),o.mesh.material.color.setRGB(s[0]*(.7+Math.random()*.3),s[1]*(.7+Math.random()*.3),s[2]*(.7+Math.random()*.3)),o.vel.set((Math.random()-.5)*a,Math.random()*a*.9,(Math.random()-.5)*a)}}blockBreak(t,e,n,s){const r=We[s];r&&this.burst(t+.5,e+.5,n+.5,bf(r.tiles[2]),14,3.2)}update(t){for(const e of this.pool)if(!(e.life<=0)){if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.vel.y-=16*t,e.mesh.position.addScaledVector(e.vel,t)}}}const tt=16,pe=128,sn=30,xn=(i,t)=>(i+32768)*65536+(t+32768),pu=i=>Math.floor(i/65536)-32768,mu=i=>i%65536-32768,ec=[{dir:[-1,0,0],shade:.9,ax:0,corners:[{p:[0,1,0],uv:[0,1]},{p:[0,0,0],uv:[0,0]},{p:[0,1,1],uv:[1,1]},{p:[0,0,1],uv:[1,0]}]},{dir:[1,0,0],shade:.9,ax:0,corners:[{p:[1,1,1],uv:[0,1]},{p:[1,0,1],uv:[0,0]},{p:[1,1,0],uv:[1,1]},{p:[1,0,0],uv:[1,0]}]},{dir:[0,-1,0],shade:.75,ax:1,bottom:!0,corners:[{p:[1,0,1],uv:[1,0]},{p:[0,0,1],uv:[0,0]},{p:[1,0,0],uv:[1,1]},{p:[0,0,0],uv:[0,1]}]},{dir:[0,1,0],shade:1,ax:1,top:!0,corners:[{p:[0,1,1],uv:[1,1]},{p:[1,1,1],uv:[0,1]},{p:[0,1,0],uv:[1,0]},{p:[1,1,0],uv:[0,0]}]},{dir:[0,0,-1],shade:.82,ax:2,corners:[{p:[1,0,0],uv:[0,0]},{p:[0,0,0],uv:[1,0]},{p:[1,1,0],uv:[0,1]},{p:[0,1,0],uv:[1,1]}]},{dir:[0,0,1],shade:.82,ax:2,corners:[{p:[0,0,1],uv:[0,0]},{p:[1,0,1],uv:[1,0]},{p:[0,1,1],uv:[0,1]},{p:[1,1,1],uv:[1,1]}]}];for(const i of ec)i.tan=[0,1,2].filter(t=>t!==i.ax);const gu=[.5,.68,.84,1],yr=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function ki(i,t,e){const n=pn(i*.0022,t*.0022,e,4),s=pn(i*.0055,t*.0055,e+31,3),r=1-Math.abs(2*pn(i*.011,t*.011,e+37,3)-1),a=pn(i*.013,t*.013,e+7,3),l=pn(i*.05,t*.05,e+9,2);let o,c=0;if(n<.4)o=sn-2-(.4-n)*80+l*3;else{const d=Math.min(1,(n-.4)/.5);o=sn+1+d*10+a*12+l*3,c=yr(.52,.78,s)*yr(.45,.6,n),o+=c*(r*62+14)}if(n>=.4&&c<.5){const d=Math.abs(pn(i*.0032+11,t*.0032-7,e+61,2)-.5);if(d<.016){const g=yr(.016,.004,d);o=o*(1-g)+(sn-2)*g}}o=Math.max(6,Math.min(pe-8,Math.floor(o)));const u=pn(i*.0035,t*.0035,e+500,2),h=pn(i*.004,t*.004,e+900,2);let f;return o<=sn-1?f="ocean":c>.3?f="mountains":u<.34?f="snow":u>.64?f=h>.55?"jungle":"desert":f=u>.55&&h>.6?"jungle":"plains",{h:o,biome:f,m:c,t:u,hm:h}}const qv=(i,t,e)=>ki(i,t,e).h;function _u(i,t,e){return ki(i,t,e).biome}function zc(){return Array.from({length:10},(i,t)=>{const e=t/10*Math.PI*2;return{x:Math.round(Math.cos(e)*36),z:Math.round(Math.sin(e)*36),top:78+t%5*7}})}class Yv{constructor(t,e,n=1337,s=new Map,r="overworld"){this.dim=r,this.scene=t,this.materials=e,this.seed=n,this.saved=s,this.chunks=new Map,this.tops=new Map,this.meshes=new Map,this.dirty=new Set,this.modified=new Set,this.unsaved=new Set,this.unloadT=0,this.torches=new Map,this._lm=null,this.onChunkMeshed=null}idx(t,e,n){return(e*tt+n)*tt+t}generateChunk(t,e){const n=xn(t,e);if(this.saved.has(n)){let u=new Uint8Array(this.saved.get(n));if(u.length!==tt*tt*pe){const h=new Uint8Array(tt*tt*pe);h.set(u.subarray(0,Math.min(u.length,h.length))),u=h}return this.chunks.set(n,u),this.modified.add(n),this.computeTops(n,u),this.scanTorches(n,u),u}if(this.dim==="nether")return this.genNether(t,e,n);if(this.dim==="end")return this.genEnd(t,e,n);const s=this.seed,r=new Uint8Array(tt*tt*pe),a=t*tt,l=e*tt;for(let u=0;u<tt;u++)for(let h=0;h<tt;h++){const f=a+h,d=l+u,g=ki(f,d,s),_=g.h,m=g.biome;let p=D.GRASS,b=D.DIRT;m==="ocean"||_<=sn+1||m==="desert"?(p=D.SAND,b=D.SAND):m==="snow"?p=D.SNOW:m==="mountains"&&(_>92?(p=D.SNOW,b=D.SNOW):_>64&&(p=D.STONE,b=D.STONE));for(let S=0;S<=_&&S<pe;S++){let v=D.STONE;if(S===_)v=p;else if(S>=_-3)v=b;else{const L=Zt(f*31+S,d*17-S,s+77+S);S<64&&L<.025?v=D.COAL_ORE:S<48&&L>.975&&L<.99?v=D.IRON_ORE:S<28&&L>.99&&L<.996?v=D.GOLD_ORE:S<16&&L>.996&&(v=D.DIAMOND_ORE)}if((S===0||S===1&&Zt(f,d,s+3)<.5)&&(v=D.BEDROCK),S>2&&S<_-1&&v!==D.BEDROCK){const L=Ps(f*.045,S*.07,d*.045,s+11),T=Ps(f*.045+50,S*.07+50,d*.045+50,s+13),w=Ps(f*.025,S*.045,d*.025,s+17);(Math.abs(L-.5)<.055&&Math.abs(T-.5)<.055||w>.8)&&(v=Le)}r[this.idx(h,S,u)]=v}for(let S=_+1;S<=sn;S++)r[this.idx(h,S,u)]=D.WATER}const o=(u,h,f,d,g)=>{const _=u-a,m=f-l;if(_<0||m<0||_>=tt||m>=tt||h>=pe||h<0)return;const p=this.idx(_,h,m);g&&r[p]!==Le||(r[p]=d)},c=this.villagesNear(a,l);for(let u=l-3;u<l+tt+3;u++)for(let h=a-3;h<a+tt+3;h++){const f=Zt(h,u,s+99);if(f>.06)continue;const d=ki(h,u,s),g=d.h,_=d.biome;if(g<=sn+1||_==="ocean"||_==="mountains"||c.some(L=>Math.abs(L.x-h)<26&&Math.abs(L.z-u)<26))continue;if(_==="desert"){if(f<.004){const L=1+Math.floor(Zt(h,u,s+6)*3);for(let T=1;T<=L;T++)o(h,g+T,u,D.CACTUS,!1)}continue}const m=pn(h*.012,u*.012,s+800,2)>.58;if(f>(_==="jungle"?.055:m?.03:_==="snow"?.007:.005))continue;const b=_==="jungle",S=b?8+Math.floor(Zt(h,u,s+5)*6):4+Math.floor(Zt(h,u,s+5)*3),v=b?3:2;for(let L=-2;L<=1;L++){const T=L<=-1?v:v-1;for(let w=-T;w<=T;w++)for(let C=-T;C<=T;C++)T>=2&&Math.abs(C)===T&&Math.abs(w)===T||o(h+C,g+S+L,u+w,D.LEAVES,!0)}for(let L=1;L<=S;L++)o(h,g+L,u,D.LOG,!1)}for(const u of c)this.buildVillage(u,o);return this.chunks.set(n,r),this.computeTops(n,r),this.scanTorches(n,r),r}villageAt(t,e){const n=t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(n))return this.vcache.get(n);const s=this.seed;let r=null;if(Zt(t,e,s+444)<.3){const a=t*128+28+Math.floor(Zt(t,e,s+445)*72),l=e*128+28+Math.floor(Zt(t,e,s+446)*72),o=ki(a,l,s);o.biome!=="ocean"&&o.biome!=="mountains"&&o.h>sn+1&&o.h<sn+20&&[[12,0],[-12,0],[0,12],[0,-12],[10,10],[-10,-10]].every(([u,h])=>{const f=ki(a+u,l+h,s);return Math.abs(f.h-o.h)<=3&&f.biome!=="ocean"})&&(r={x:a,z:l,H:o.h,biome:o.biome})}return this.vcache.set(n,r),r}villagesNear(t,e){const n=[];for(let s=Math.floor((t-40)/128);s<=Math.floor((t+tt+40)/128);s++)for(let r=Math.floor((e-40)/128);r<=Math.floor((e+tt+40)/128);r++){const a=this.villageAt(s,r);a&&n.push(a)}return n}buildVillage(t,e){const n=this.seed,s=t.H,r=t.biome==="desert"?D.SAND:D.PLANKS,a=D.PLANKS;for(let o=-2;o<=2;o++)for(let c=-2;c<=2;c++){const u=Math.abs(o)===2||Math.abs(c)===2;for(let h=s-3;h<=s;h++)e(t.x+o,h,t.z+c,u?D.COBBLE:D.WATER,!1);for(let h=s+1;h<=s+6;h++)e(t.x+o,h,t.z+c,0,!1);u&&e(t.x+o,s+1,t.z+c,D.COBBLE,!1)}for(const[o,c]of[[-2,-2],[2,-2],[-2,2],[2,2]])for(let u=s+2;u<=s+4;u++)e(t.x+o,u,t.z+c,D.LOG,!1);for(let o=-2;o<=2;o++)for(let c=-2;c<=2;c++)e(t.x+o,s+5,t.z+c,D.PLANKS,!1);[[-14,-8],[14,-8],[-14,10],[14,10],[0,-16],[0,17]].forEach(([o,c],u)=>{if(Zt(t.x+o,t.z+c,n+5)<.12&&u>3)return;const h=t.x+o,f=t.z+c,d=Math.abs(o)>Math.abs(c)?-Math.sign(o):0,g=d?0:-Math.sign(c);for(let _=0;_<40;_++){const m=h+d*(4+_),p=f+g*(4+_);if(Math.abs(m-t.x)<3&&Math.abs(p-t.z)<3)break;e(m,s,p,D.COBBLE,!1);for(let b=s+1;b<=s+3;b++)e(m,b,p,0,!1)}for(let _=-4;_<=4;_++)for(let m=-4;m<=4;m++){const p=h+_,b=f+m,S=qv(p,b,n);for(let v=Math.max(1,S-1);v<=s-1;v++)e(p,v,b,D.COBBLE,!1);for(let v=s+1;v<=s+9;v++)e(p,v,b,0,!1);Math.abs(_)<=3&&Math.abs(m)<=3&&e(p,s,b,a,!1)}for(let _=-3;_<=3;_++)for(let m=-3;m<=3;m++){if(Math.abs(_)!==3&&Math.abs(m)!==3)continue;const p=Math.abs(_)===3&&Math.abs(m)===3;for(let b=s+1;b<=s+3;b++){let S=p?D.LOG:r;!p&&(Math.abs(_)===3&&m===0||Math.abs(m)===3&&_===0)&&b===s+2&&(S=D.GLASS),_===d*3&&m===g*3&&b<=s+2&&(S=0),e(h+_,b,f+m,S,!1)}}for(let _=4,m=s+4;_>=0;_--,m++)for(let p=-_;p<=_;p++)for(let b=-_;b<=_;b++)e(h+p,m,f+b,_===0?D.LOG:D.PLANKS,!1);e(h-2,s+1,f-2,D.TORCH,!1),e(h+2,s+1,f-2,D.TABLE,!1),e(h+2,s+1,f+2,D.FURNACE,!1),e(h-2,s+1,f+2,D.TORCH,!1),e(h+d*4+g,s+1,f+g*4+d,D.TORCH,!1)})}scanTorches(t,e){let n=null;const s=tt*tt;for(let r=0;r<e.length;r++){const a=e[r];if(!(!a||!Fo[a])){if(a===D.LAVA){const l=r%tt,o=Math.floor(r/tt)%tt;if(l+o&1||e[r+s]!==0)continue}(n||(n=new Set)).add(r)}}n?this.torches.set(t,n):this.torches.delete(t)}genNether(t,e,n){const s=this.seed+7001,r=new Uint8Array(tt*tt*pe),a=t*tt,l=e*tt;for(let c=0;c<tt;c++)for(let u=0;u<tt;u++){const h=a+u,f=l+c;for(let d=0;d<pe;d++){let g=0;if(d===0||d===pe-1||d===1&&Zt(h,f,s+1)<.5||d===pe-2&&Zt(h,f,s+2)<.5)g=D.BEDROCK;else{const _=Ps(h*.022,d*.04,f*.022,s+301)*.65+Ps(h*.06,d*.09,f*.06,s+302)*.35,m=Math.abs(d-62)/62;_+.62*m*m>.72||d>=pe-3?g=D.NETHERRACK:g=d<=31?D.LAVA:Le}r[this.idx(u,d,c)]=g}}const o=tt*tt;for(let c=0;c<tt;c++)for(let u=0;u<tt;u++){const h=a+u,f=l+c,d=Ps(h*.05,0,f*.05,s+303)>.56;for(let g=2;g<pe-3;g++){const _=this.idx(u,g,c);if(r[_]!==D.NETHERRACK)continue;const m=r[_+o],p=r[_-o];m===Le&&g>32&&d?r[_]=D.SOUL_SAND:p===Le&&g>84&&Zt(h*7+g,f*3,s+310)<.02?r[_]=D.GLOWSTONE:Zt(h*13+g,f*5-g,s+311)<.006&&(r[_]=D.GOLD_ORE)}}return this.chunks.set(n,r),this.computeTops(n,r),this.scanTorches(n,r),r}genEnd(t,e,n){const s=this.seed+9001,r=new Uint8Array(tt*tt*pe),a=t*tt,l=e*tt;for(let o=0;o<tt;o++)for(let c=0;c<tt;c++){const u=a+c,h=l+o,f=Math.hypot(u,h);let d=-1,g=0;if(f<54)d=64+Math.floor(pn(u*.08,h*.08,s+700,2)*3)-(f>46?Math.floor(f-46):0),g=d-((54-f)*.75+3+pn(u*.05,h*.05,s+703,2)*5);else if(f>240){const _=pn(u*.011,h*.011,s+701,3);_>.63&&(d=58+Math.floor((_-.63)*60)+Math.floor(pn(u*.06,h*.06,s+702,2)*3),g=d-((_-.63)*230+2))}if(d>0)for(let _=Math.max(1,Math.floor(g));_<=d&&_<pe;_++)r[this.idx(c,_,o)]=D.END_STONE}for(const o of zc())for(let c=-2;c<=2;c++)for(let u=-2;u<=2;u++){if(c*c+u*u>5)continue;const h=o.x+c-a,f=o.z+u-l;if(!(h<0||f<0||h>=tt||f>=tt)){for(let d=62;d<=o.top;d++)r[this.idx(h,d,f)]=D.OBSIDIAN;c===0&&u===0&&(r[this.idx(h,o.top+1,f)]=D.BEDROCK)}}return this.chunks.set(n,r),this.computeTops(n,r),this.scanTorches(n,r),r}computeTops(t,e){let n=0;for(let r=e.length-1;r>=0;r--)if(e[r]){n=Math.floor(r/(tt*tt));break}this.hi||(this.hi=new Map),this.hi.set(t,n);const s=new Int16Array(tt*tt).fill(-1);for(let r=0;r<tt;r++)for(let a=0;a<tt;a++){let l=pe-1;for(;l>=0&&!si[e[this.idx(a,l,r)]];)l--;s[r*tt+a]=l}this.tops.set(t,s)}getBlock(t,e,n){if(e<0||e>=pe)return Le;const s=Math.floor(t/tt),r=Math.floor(n/tt),a=this.chunks.get(xn(s,r));return a?a[(e*tt+(n-r*tt))*tt+(t-s*tt)]:Le}topY(t,e){const n=Math.floor(t/tt),s=Math.floor(e/tt),r=this.tops.get(xn(n,s));return r?r[(e-s*tt)*tt+(t-n*tt)]:-1}skyLit(t,e,n){if(this.dim!=="overworld")return 1;const s=Math.floor(t/tt),r=Math.floor(n/tt),a=this.tops.get(xn(s,r));return a?e>a[(n-r*tt)*tt+(t-s*tt)]?1:0:1}isSolid(t,e,n){if(e<0)return!0;if(e>=pe)return!1;const s=Math.floor(t/tt),r=Math.floor(n/tt),a=this.chunks.get(xn(s,r));return a?Rr[a[(e*tt+(n-r*tt))*tt+(t-s*tt)]]===1:!0}isLiquid(t,e,n){return Yi[this.getBlock(t,e,n)]===1}setBlock(t,e,n,s){if(e<0||e>=pe)return!1;const r=Math.floor(t/tt),a=Math.floor(n/tt),l=xn(r,a),o=this.chunks.get(l);if(!o)return!1;const c=t-r*tt,u=n-a*tt,h=this.idx(c,e,u),f=o[h];if(o[h]=s,s&&e>this.hi.get(l)&&this.hi.set(l,e),this.modified.add(l),this.unsaved.add(l),Fo[f]||Fo[s]){this.scanTorches(l,o);for(let p=-1;p<=1;p++)for(let b=-1;b<=1;b++)this.dirty.add(xn(r+p,a+b))}const d=this.tops.get(l),g=u*tt+c;if(si[s])e>d[g]&&(d[g]=e);else if(e===d[g]){let p=e-1;for(;p>=0&&!si[o[this.idx(c,p,u)]];)p--;d[g]=p}this.dirty.add(l);const _=c===0?-1:c===tt-1?1:0,m=u===0?-1:u===tt-1?1:0;return _&&this.dirty.add(xn(r+_,a)),m&&this.dirty.add(xn(r,a+m)),_&&m&&this.dirty.add(xn(r+_,a+m)),!0}raycast(t,e,n=6,s=!1){let r=Math.floor(t.x),a=Math.floor(t.y),l=Math.floor(t.z);const o=[Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)],c=[Math.abs(1/e.x),Math.abs(1/e.y),Math.abs(1/e.z)],u=(g,_)=>_>0?Math.floor(g)+1-g:g-Math.floor(g),h=[o[0]===0?1/0:u(t.x,o[0])*c[0],o[1]===0?1/0:u(t.y,o[1])*c[1],o[2]===0?1/0:u(t.z,o[2])*c[2]];let f=[0,0,0],d=0;for(;d<=n;){const g=this.getBlock(r,a,l);if(g!==Le&&(s||!Yi[g]&&!Tf[g]))return{x:r,y:a,z:l,id:g,normal:f,dist:d};const _=h[0]<h[1]?h[0]<h[2]?0:2:h[1]<h[2]?1:2;d=h[_],h[_]+=c[_],f=[0,0,0],f[_]=-o[_],_===0?r+=o[0]:_===1?a+=o[1]:l+=o[2]}return null}update(t,e,n,s=2){const r=Math.floor(t/tt),a=Math.floor(e/tt),l=[],o=[];for(let h=-n-1;h<=n+1;h++)for(let f=-n-1;f<=n+1;f++){const d=r+f,g=a+h,_=xn(d,g),m=f*f+h*h;if(!this.chunks.has(_))l.push({cx:d,cz:g,d:m});else if(Math.abs(f)<=n&&Math.abs(h)<=n){const p=this.dirty.has(_);(!this.meshes.has(_)||p)&&o.push({cx:d,cz:g,d:p?m-1e4:m})}}l.sort((h,f)=>h.d-f.d);for(let h=0;h<Math.min(s*2,l.length);h++)this.generateChunk(l[h].cx,l[h].cz);o.sort((h,f)=>h.d-f.d);let c=0,u=0;for(const h of o){let f=!0;for(let d=-1;d<=1&&f;d++)for(let g=-1;g<=1;g++)if(!this.chunks.has(xn(h.cx+d,h.cz+g))){f=!1;break}if(!f){u++;continue}c<(h.d<-5e3?6:s)?(this.buildMesh(h.cx,h.cz),c++):u++}for(const[h,f]of this.meshes)(Math.abs(pu(h)-r)>n+2||Math.abs(mu(h)-a)>n+2)&&(this.disposeMesh(f),this.meshes.delete(h));if((this.unloadT-=1)<=0){this.unloadT=60;for(const h of[...this.chunks.keys()])if(Math.abs(pu(h)-r)>n+5||Math.abs(mu(h)-a)>n+5){if(this.modified.has(h))continue;this.chunks.delete(h),this.tops.delete(h)}}return l.length+u}disposeMesh(t){for(const e of[t.opaque,t.trans])e&&(this.scene.remove(e),e.geometry.dispose())}buildMesh(t,e){const n=xn(t,e),s=this.chunks.get(n);if(!s)return;const r=t*tt,a=e*tt,l=[{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]},{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]}],o=(M,x,R)=>{const I=M-r,U=R-a;return I>=0&&U>=0&&I<tt&&U<tt&&x>=0&&x<pe?s[(x*tt+U)*tt+I]:this.getBlock(M,x,R)},c=new Float32Array(tt*tt*3);for(let M=0;M<tt;M++)for(let x=0;x<tt;x++){const R=r+x,I=a+M,U=pn(R*.004,I*.004,this.seed+900,2),H=pn(R*.0035,I*.0035,this.seed+500,2),$=yr(.35,.7,U),q=yr(.42,.28,H),Y=(M*tt+x)*3;c[Y]=(1.15*(1-$)+.78*$)*(1-.18*q),c[Y+1]=1*(1-$)+1.1*$,c[Y+2]=.6*(1-$)+.8*$+.3*q}const u=.0015,h=[0,0,0],f=[0,0,0,0],d=[0,0,0,0],g=[0,0,0,0],_=tt*3,m=r-tt,p=a-tt;let b=null;const S=[];for(let M=-1;M<=1;M++)for(let x=-1;x<=1;x++){const R=this.torches.get(xn(t+M,e+x));if(R)for(const I of R)S.push([(t+M)*tt+I%tt,Math.floor(I/(tt*tt)),(e+x)*tt+Math.floor(I/tt)%tt])}if(S.length){b=this._lm||(this._lm=new Uint8Array(_*_*pe)),b.fill(0);const M=(I,U,H)=>(U*_+(H-p))*_+(I-m),x=[];for(const[I,U,H]of S)b[M(I,U,H)]=10,x.push(I,U,H);const R=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1];for(let I=0;I<x.length;I+=3){const U=x[I],H=x[I+1],$=x[I+2],q=b[M(U,H,$)]-1;if(!(q<=0))for(let Y=0;Y<18;Y+=3){const V=U+R[Y],nt=H+R[Y+1],st=$+R[Y+2];if(nt<0||nt>=pe||V<m||V>=m+_||st<p||st>=p+_||si[o(V,nt,st)])continue;const gt=M(V,nt,st);b[gt]<q&&(b[gt]=q,x.push(V,nt,st))}}}const v=(M,x,R)=>!b||x<0||x>=pe||M<m||M>=m+_||R<p||R>=p+_?0:Math.pow(b[(x*_+(R-p))*_+(M-m)]/10,1.7),L=Math.min(pe-1,(this.hi.get(n)||pe)+1);for(let M=0;M<=L;M++)for(let x=0;x<tt;x++)for(let R=0;R<tt;R++){const I=s[(M*tt+x)*tt+R];if(I===Le)continue;const U=We[I],H=U.transparent?l[1]:l[0],$=r+R,q=a+x;if(U.torch){const Y=(xr.torch+.4375)/Mr,V=(xr.torch+9/16)/Mr;for(const nt of ec){if(nt.bottom)continue;const st=H.pos.length/3;for(const gt of nt.corners)H.pos.push(R+7/16+gt.p[0]*2/16,M+gt.p[1]*10/16,x+7/16+gt.p[2]*2/16),H.nor.push(nt.dir[0],nt.dir[1],nt.dir[2]),H.uv.push(Y+(V-Y)*gt.uv[0],6/16+10/16*gt.uv[1]),H.col.push(.9,.9,.9),H.bl.push(1),H.sw.push(0),H.sk.push(1);H.ind.push(st,st+1,st+2,st+2,st+1,st+3)}continue}for(const Y of ec){const V=$+Y.dir[0],nt=M+Y.dir[1],st=q+Y.dir[2],gt=o(V,nt,st);if(si[gt]||gt===I&&(U.transparent||U.liquid))continue;const Wt=xr[Y.top?U.tiles[0]:Y.bottom?U.tiles[1]:U.tiles[2]],[he,j]=Y.tan;let rt=1,Mt=1,ht=1;if(I===D.LEAVES||I===D.GRASS&&Y.top){const kt=(x*tt+R)*3;rt=c[kt],Mt=c[kt+1],ht=c[kt+2]}const Lt=nt<pe?this.skyLit(V,nt,st):1,Ot=v(V,nt,st);for(let kt=0;kt<4;kt++){const Vt=Y.corners[kt].p,ve=Vt[he]*2-1,O=Vt[j]*2-1;h[0]=V,h[1]=nt,h[2]=st,h[he]+=ve;const Xe=si[o(h[0],h[1],h[2])],Jt=Xe?Lt:this.skyLit(h[0],h[1],h[2]),Qt=Xe?Ot:v(h[0],h[1],h[2]);h[0]=V,h[1]=nt,h[2]=st,h[j]+=O;const Tt=si[o(h[0],h[1],h[2])],ye=Tt?Lt:this.skyLit(h[0],h[1],h[2]),Pt=Tt?Ot:v(h[0],h[1],h[2]);h[0]=V,h[1]=nt,h[2]=st,h[he]+=ve,h[j]+=O;const A=si[o(h[0],h[1],h[2])],y=Xe&&Tt||A?Lt:this.skyLit(h[0],h[1],h[2]),G=Xe&&Tt||A?Ot:v(h[0],h[1],h[2]);g[kt]=(Ot+Qt+Pt+G)/4,f[kt]=Xe&&Tt?0:3-(Xe+Tt+A),d[kt]=(Lt+Jt+ye+y)/4}const It=H.pos.length/3;for(let kt=0;kt<4;kt++){const Vt=Y.corners[kt];let ve=Vt.p[1];(I===D.WATER||I===D.LAVA)&&ve===1&&o($,M+1,q)!==I&&(ve=.88),H.pos.push(R+Vt.p[0],M+ve,x+Vt.p[2]),H.nor.push(Y.dir[0],Y.dir[1],Y.dir[2]),H.uv.push((Wt+(Vt.uv[0]?1-u:u))/Mr,Vt.uv[1]?1-u:u);const O=Y.shade*gu[f[kt]]*(.3+.7*d[kt]);H.col.push(O*rt,O*Mt,O*ht),H.bl.push(U.glow?1:Y.shade*gu[f[kt]]*g[kt]),H.sw.push(I===D.LEAVES?1:I===D.WATER||I===D.LAVA?2:0),H.sk.push(d[kt])}f[0]+f[3]>f[1]+f[2]?H.ind.push(It,It+1,It+3,It,It+3,It+2):H.ind.push(It,It+1,It+2,It+2,It+1,It+3)}}const T=this.meshes.get(n);T&&this.disposeMesh(T);const w={opaque:null,trans:null},C=(M,x,R,I)=>{if(!M.ind.length)return null;const U=new Ke;U.setAttribute("position",new Pe(M.pos,3)),U.setAttribute("normal",new Pe(M.nor,3)),U.setAttribute("uv",new Pe(M.uv,2)),U.setAttribute("color",new Pe(M.col,3)),U.setAttribute("blight",new Pe(M.bl,1)),U.setAttribute("sway",new Pe(M.sw,1)),U.setAttribute("skyl",new Pe(M.sk,1)),U.setIndex(M.ind),U.computeBoundingSphere();const H=new Ut(U,x);return H.position.set(r,0,a),H.renderOrder=R,H.castShadow=I,H.receiveShadow=!0,this.scene.add(H),H};w.opaque=C(l[0],this.materials.opaque,0,!0),w.trans=C(l[1],this.materials.trans,1,!1),this.meshes.set(n,w),this.dirty.delete(n),this.onChunkMeshed&&this.onChunkMeshed(t,e)}}const qo=(i,t)=>new bn(t?{color:i,map:t}:{color:i});function ze(i,t,e,n,s,r,a,l){const o=new Ee;o.position.set(r,a,l);const c=new Ut(new re(t,e,n),qo(s));return c.position.y=-e/2,o.add(c),i.add(o),o}function Ct(i,t,e,n,s,r,a,l,o){const c=new Ut(new re(t,e,n),qo(s,o));return c.position.set(r,a,l),i.add(c),c}function Kv(i){const t=document.createElement("canvas");t.width=t.height=8,i(t.getContext("2d"));const e=new Vn(t);return e.magFilter=_e,e.minFilter=_e,e.generateMipmaps=!1,e}const Yo={pig:{hw:.4,h:.9,hp:10,speed:1.4,hostile:!1,name:"Cerdo",build(i,t){Ct(i,.6,.5,.95,15769768,0,.62,0),t.head=Ct(i,.5,.45,.45,16034480,0,.78,.65),Ct(i,.26,.2,.1,14189196,0,.72,.92),t.legs=[[-.18,.5],[.18,.5],[-.18,-.5],[.18,-.5]].map(([e,n])=>ze(i,.2,.37,.2,15242140,e,.37,n))},drops:()=>[[k.PORK,1+Math.floor(Math.random()*2)]]},cow:{hw:.45,h:1.4,hp:10,speed:1.2,hostile:!1,name:"Vaca",build(i,t){Ct(i,.75,.7,1.2,4863268,0,.95,0),Ct(i,.77,.3,.5,15658734,0,.95,-.15),t.head=Ct(i,.5,.5,.45,4863268,0,1.15,.8),Ct(i,.3,.2,.1,14272688,0,1.05,1.05),Ct(i,.08,.15,.08,14540253,-.22,1.45,.75),Ct(i,.08,.15,.08,14540253,.22,1.45,.75),t.legs=[[-.22,.45],[.22,.45],[-.22,-.45],[.22,-.45]].map(([e,n])=>ze(i,.24,.6,.24,4008990,e,.6,n))},drops:()=>[[k.BEEF,1+Math.floor(Math.random()*3)]]},sheep:{hw:.42,h:1.2,hp:8,speed:1.2,hostile:!1,name:"Oveja",xp:1,build(i,t){Ct(i,.85,.75,1.15,15658734,0,.9,0),t.head=Ct(i,.4,.42,.42,9076080,0,1.05,.72),t.legs=[[-.2,.4],[.2,.4],[-.2,-.4],[.2,-.4]].map(([e,n])=>ze(i,.2,.5,.2,9076080,e,.5,n))},drops:()=>[[k.BEEF,1+Math.floor(Math.random()*2)]]},chicken:{hw:.22,h:.7,hp:4,speed:1.3,hostile:!1,name:"Gallina",xp:1,build(i,t){Ct(i,.34,.34,.5,16053492,0,.42,0),t.head=Ct(i,.2,.26,.2,16316664,0,.68,.24),Ct(i,.1,.07,.12,15769632,0,.64,.38),Ct(i,.06,.1,.06,13639712,0,.55,.33),Ct(i,.06,.26,.4,15263976,-.2,.44,0),Ct(i,.06,.26,.4,15263976,.2,.44,0),t.legs=[-.08,.08].map(e=>ze(i,.05,.25,.05,15769632,e,.25,0))},drops:()=>[[k.CHICKEN,1]]},skeleton:{hw:.3,h:1.9,hp:20,speed:2.2,hostile:!0,name:"Esqueleto",ranged:!0,xp:5,build(i,t){t.legs=[ze(i,.18,.85,.18,14211276,-.12,.85,0),ze(i,.18,.85,.18,14211276,.12,.85,0)],Ct(i,.5,.8,.2,14211276,0,1.25,0);for(const s of[1,1.2,1.4])Ct(i,.52,.07,.22,5592396,0,s,0);t.arms=[ze(i,.14,.75,.14,14211276,-.34,1.62,0),ze(i,.14,.75,.14,14211276,.34,1.62,0)],t.arms[1].rotation.x=-1.3,t.arms[0].rotation.x=-1.3,t.head=Ct(i,.5,.5,.5,14211276,0,1.9,0),Ct(i,.1,.1,.02,1052688,-.12,1.93,.26),Ct(i,.1,.1,.02,1052688,.12,1.93,.26),Ct(i,.2,.05,.02,1052688,0,1.78,.26),Ct(i,.06,.5,.2,6965800,.42,1.28,.28)},drops:()=>Math.random()<.6?[[k.COAL,1]]:[[k.STICK,2]]},spider:{hw:.55,h:.75,hp:16,speed:4.2,hostile:!0,name:"Araña",xp:4,build(i,t){Ct(i,.7,.5,.7,2761760,0,.5,.3),Ct(i,.9,.6,1.1,3353124,0,.55,-.55),t.head=Ct(i,.5,.45,.45,2761760,0,.5,.8);for(const n of[-.12,.12])Ct(i,.1,.1,.03,13637656,n,.58,1.04),Ct(i,.06,.06,.03,13637656,n*1.8,.5,1.04);t.legs=[];for(let n=0;n<4;n++)for(const s of[-1,1]){const r=Ct(i,.9,.08,.08,2761760,s*.62,.38,.55-n*.38);r.rotation.z=s*-.55,r.rotation.y=s*(n-1.5)*.25}},drops:()=>Math.random()<.5?[[k.STICK,1]]:[]},enderman:{hw:.3,h:2.9,hp:40,speed:5,hostile:!1,name:"Enderman",xp:8,enderman:!0,build(i,t){t.legs=[ze(i,.18,1.5,.18,1182232,-.12,1.5,0),ze(i,.18,1.5,.18,1182232,.12,1.5,0)],Ct(i,.5,.95,.26,1182232,0,1.98,0),t.arms=[ze(i,.13,1.35,.13,1182232,-.34,2.45,0),ze(i,.13,1.35,.13,1182232,.34,2.45,0)],t.head=Ct(i,.5,.42,.5,1182232,0,2.7,0);for(const n of[-.13,.13])Ct(i,.14,.05,.03,14708991,n,2.72,.26)},drops:()=>Math.random()<.65?[[k.PEARL,1]]:[]},slime:{hw:.42,h:.85,hp:8,speed:0,hostile:!0,name:"Slime",xp:2,build(i,t){const e=new bn({color:6348896,emissive:1064976,transparent:!0,opacity:.8}),n=new Ut(new re(.84,.84,.84),e);n.position.y=.42,i.add(n),Ct(i,.4,.4,.4,3119663,0,.42,0),Ct(i,.14,.14,.05,1060880,-.2,.55,.43),Ct(i,.14,.14,.05,1060880,.2,.55,.43)},drops:()=>[]},piglin:{hw:.3,h:1.8,hp:24,speed:2.7,hostile:!0,name:"Piglin zombificado",damage:5,xp:6,piglin:!0,build(i,t){t.legs=[ze(i,.26,.75,.26,5917240,-.14,.75,0),ze(i,.26,.75,.26,5917240,.14,.75,0)],Ct(i,.56,.75,.3,8022608,0,1.125,0),Ct(i,.58,.14,.32,15253568,0,1.45,0),t.arms=[ze(i,.22,.72,.22,13208184,-.38,1.45,0),ze(i,.22,.72,.22,13208184,.38,1.45,0)],t.arms.forEach(s=>s.rotation.x=-Math.PI/2.3),Ct(i,.1,.55,.1,15253568,.4,1,.45),t.head=Ct(i,.6,.5,.5,13208184,0,1.78,0),Ct(i,.34,.22,.12,11563103,0,1.72,.3),Ct(i,.06,.08,.04,2101264,-.07,1.72,.37),Ct(i,.06,.08,.04,2101264,.07,1.72,.37),Ct(i,.12,.28,.06,13208184,-.37,1.8,0).rotation.z=.5,Ct(i,.12,.28,.06,13208184,.37,1.8,0).rotation.z=-.5,Ct(i,.08,.06,.03,16724e3,-.14,1.88,.26),Ct(i,.08,.06,.03,16724e3,.14,1.88,.26)},drops:()=>Math.random()<.6?[[k.GOLD,1]]:[]},blaze:{hw:.35,h:1.7,hp:20,speed:2.4,hostile:!0,name:"Blaze",fly:!0,ranged:!1,xp:7,build(i,t){const e=new bn({color:15773728,emissive:10506240}),n=new bn({color:16742928,emissive:12595200});t.head=new Ut(new re(.55,.55,.55),e),t.head.position.y=1.4,i.add(t.head);for(const s of[-.13,.13])Ct(i,.12,.1,.03,2101248,s,1.45,.29);Ct(i,.22,.06,.03,2101248,0,1.28,.29),t.rods=[];for(let s=0;s<3;s++){const r=new Ee;r.position.y=.35+s*.38,i.add(r);for(let a=0;a<4;a++){const l=a/4*Math.PI*2,o=new Ut(new re(.12,.5,.12),s%2?n:e);o.position.set(Math.cos(l)*.5,0,Math.sin(l)*.5),r.add(o)}t.rods.push(r)}Ct(i,.2,.25,.2,16752672,0,.9,0)},drops:()=>Math.random()<.8?[[k.COAL,1+Math.floor(Math.random()*2)]]:[]},zombie:{hw:.3,h:1.8,hp:20,speed:2.5,hostile:!0,name:"Zombi",damage:3,build(i,t){t.legs=[ze(i,.26,.75,.26,2899612,-.14,.75,0),ze(i,.26,.75,.26,2899612,.14,.75,0)],Ct(i,.54,.75,.28,2794936,0,1.125,0),t.arms=[ze(i,.22,.72,.22,5147194,-.38,1.45,0),ze(i,.22,.72,.22,5147194,.38,1.45,0)],t.arms.forEach(e=>e.rotation.x=-Math.PI/2.2),t.head=Ct(i,.5,.5,.5,5147194,0,1.75,0),Ct(i,.1,.07,.02,1052688,-.12,1.78,.26),Ct(i,.1,.07,.02,1052688,.12,1.78,.26)},drops:()=>Math.random()<.15?[[k.IRON,1]]:[]},creeper:{hw:.3,h:1.7,hp:20,speed:2.3,hostile:!0,name:"Creeper",creeper:!0,build(i,t){t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,o])=>ze(i,.26,.45,.26,4099646,l,.45,o*.5)),t.body=Ct(i,.5,.85,.3,5154894,0,.88,0);const n=Kv(l=>{l.fillStyle="#4ea84e",l.fillRect(0,0,8,8),l.fillStyle="#0c1a0c",l.fillRect(1,2,2,2),l.fillRect(5,2,2,2),l.fillRect(3,4,2,2),l.fillRect(2,5,1,2),l.fillRect(5,5,1,2)}),s=qo(5154894),r=[s,s,s,s,qo(16777215,n),s],a=new Ut(new re(.5,.5,.5),r);a.position.set(0,1.55,0),i.add(a),t.head=a},drops:()=>[]}},vu=["zombie","zombie","zombie","creeper","creeper","skeleton","skeleton","skeleton","spider","spider","enderman"],xu=["zombie","zombie","creeper","skeleton","skeleton","spider"];class $v{constructor(t,e,n,s,r){this.type=t,this.def=Yo[t],this.pos=new P(e,n,s),this.vel=new P,this.hw=this.def.hw,this.h=this.def.h,this.hp=this.def.hp,this.yaw=Math.random()*Math.PI*2,this.group=new Ee,this.parts={},this.def.build(this.group,this.parts),this.model=new Ee,this.model.add(this.group),r.add(this.model),this.group.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.wanderT=0,this.wanderDir=0,this.moving=!1,this.cool=0,this.flash=0,this.fuse=0,this.walkT=0,this.age=0,this.onGround=!1,this.sound=3+Math.random()*10}materials(){const t=[];return this.group.traverse(e=>{e.material&&(Array.isArray(e.material)?t.push(...e.material):t.push(e.material))}),t}hit(t,e,n){this.hp-=t,this.flash=.3,this.provoked=!0,this.aggro=!0;const s=this.pos.x-e,r=this.pos.z-n,a=Math.hypot(s,r)||1;this.vel.x=s/a*6,this.vel.z=r/a*6,this.vel.y=5}dispose(t){t.remove(this.model),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(n=>n.dispose())})}}function Cr(i,t,e,n){let s=0,r=1/0;for(const a of["x","y","z"]){if(Math.abs(t[a])<1e-9){if(i[a]<e[a]||i[a]>n[a])return-1;continue}let l=(e[a]-i[a])/t[a],o=(n[a]-i[a])/t[a];if(l>o&&([l,o]=[o,l]),s=Math.max(s,l),r=Math.min(r,o),s>r)return-1}return s}class jv{constructor(t,e,n){this.scene=t,this.world=e,this.hooks=n,this.list=[],this.spawnT=0,this.arrows=[],this.dim="overworld"}add(t,e,n,s){const r=new $v(t,e,n,s,this.scene);return this.list.push(r),r}clear(){for(const t of this.list)t.dispose(this.scene);this.list=[];for(const t of this.arrows)this.scene.remove(t.mesh);this.arrows=[]}raycast(t,e,n){let s=null;for(const r of this.list){const a=Cr(t,e,{x:r.pos.x-r.hw,y:r.pos.y,z:r.pos.z-r.hw},{x:r.pos.x+r.hw,y:r.pos.y+r.h,z:r.pos.z+r.hw});a>=0&&a<=n&&(!s||a<s.dist)&&(s={mob:r,dist:a})}return s}damage(t,e,n,s){t.hit(e,n,s),this.hooks.sound("hit"),t.hp<=0&&this.kill(t)}kill(t){for(const[e,n]of t.def.drops())this.hooks.drop(t.pos.x,t.pos.y+.5,t.pos.z,e,n);this.hooks.killed&&this.hooks.killed(t.type,t.def.xp||2),this.hooks.puff(t.pos.x,t.pos.y+t.h/2,t.pos.z),t.dispose(this.scene),this.list.splice(this.list.indexOf(t),1)}update(t,e,n,s,r){const a=this.world;for(let l=this.list.length-1;l>=0;l--){const o=this.list[l];o.age+=t,o.cool=Math.max(0,o.cool-t),o.flash=Math.max(0,o.flash-t);const c=e.pos.x-o.pos.x,u=e.pos.z-o.pos.z,h=Math.hypot(c,u),f=e.pos.y-o.pos.y;let d=o.def.hostile&&n==="survival"&&!e.dead;if(o.type==="spider"&&s>.5&&!o.provoked&&(d=!1),o.def.enderman&&n==="survival"&&!e.dead&&!o.aggro&&h<24){const w=e.lookDir(),C=o.pos.x-e.pos.x,M=o.pos.y+2.6-(e.pos.y+1.62),x=o.pos.z-e.pos.z,R=Math.hypot(C,M,x);(w.x*C+w.y*M+w.z*x)/R>.985&&(o.aggro=!0)}o.def.enderman&&o.aggro&&n==="survival"&&!e.dead&&(d=!0);let g=null,_=o.def.speed;d&&h<26&&Math.abs(f)<14?(g=Math.atan2(-c,-u),o.def.ranged&&h<6&&(g+=Math.PI)):(o.wanderT-=t,o.wanderT<=0&&(o.wanderT=2+Math.random()*4,o.wanderDir=Math.random()<.4?null:Math.random()*Math.PI*2),o.wanderDir!==null&&o.wanderDir!==void 0&&(g=o.wanderDir),_*=.6);let m=!1;const p=o.def.ranged&&d&&h>=6&&h<12;if(g!==null){let w=g-o.yaw;if(w=Math.atan2(Math.sin(w),Math.cos(w)),o.yaw+=Math.max(-8*t,Math.min(8*t,w)),m=!p,p){const C=Math.atan2(-c,-u)-o.yaw;o.yaw+=Math.atan2(Math.sin(C),Math.cos(C))*Math.min(1,t*10)}}if(o.def.creeper){d&&h<3&&Math.abs(f)<2?(o.fuse+=t,o.fuse-t<=0&&this.hooks.sound("hiss"),m=!1):o.fuse=Math.max(0,o.fuse-t*2);const w=1+(o.fuse>0?Math.sin(o.fuse*30)*.04+o.fuse*.15:0);if(o.group.scale.set(w,w,w),o.fuse>=1.5){this.hooks.explode(o.pos.x,o.pos.y+.8,o.pos.z,3.2),o.dispose(this.scene),this.list.splice(l,1);continue}}const b=a.isLiquid(Math.floor(o.pos.x),Math.floor(o.pos.y+.2),Math.floor(o.pos.z)),S=-Math.sin(o.yaw),v=-Math.cos(o.yaw);if(m&&o.knock===void 0?(o.vel.x+=(S*_-o.vel.x)*Math.min(1,t*8),o.vel.z+=(v*_-o.vel.z)*Math.min(1,t*8)):(o.type!=="slime"||o.onGround)&&(o.vel.x*=Math.max(0,1-t*6),o.vel.z*=Math.max(0,1-t*6)),o.type==="slime"&&(m=!1,o.hopT=(o.hopT===void 0?.5:o.hopT)-t,o.onGround&&o.hopT<=0&&d&&(o.hopT=1+Math.random()*.8,o.vel.y=7.5,o.vel.x=c/(h||1)*3.4,o.vel.z=u/(h||1)*3.4,o.yaw=Math.atan2(-c,-u))),o.moving=m,b&&(o.vel.y=Math.max(o.vel.y,0)+14*t,o.vel.y=Math.min(o.vel.y,2.5)),o.def.fly)this.flyMob(o,t,e,d,c,u,f,h),o.onGround=!1;else{const w=Js(a,o,t);o.onGround=w.onGround,(w.hitX||w.hitZ)&&w.onGround&&m&&(o.vel.y=7.4)}if((o.type==="zombie"||o.type==="piglin")&&d&&h<1.2&&Math.abs(f)<1.6&&o.cool<=0&&(o.cool=1,this.hooks.hurtPlayer(o.def.damage,c/(h||1)*5,u/(h||1)*5)),(o.type==="spider"||o.type==="slime"||o.def.enderman)&&d&&h<(o.type==="spider"?1.7:o.type==="slime"?1.3:1.5)&&Math.abs(f)<1.8&&o.cool<=0&&(o.cool=o.type==="spider"?.9:1,this.hooks.hurtPlayer(o.type==="spider"||o.type==="slime"?2:6,c/(h||1)*4,u/(h||1)*4)),o.def.ranged&&d&&h<22&&o.cool<=0){const w=new P(o.pos.x,o.pos.y+1.6,o.pos.z),C=new P(e.pos.x,e.pos.y+1.2,e.pos.z),M=C.clone().sub(w),x=M.length();M.normalize(),a.raycast(w,M,x)||(o.cool=2.2,this.shootArrow(w,M.multiplyScalar(1).setY(M.y+.04*x/10)))}if(o.def.enderman&&o.aggro&&(o.tpT=(o.tpT===void 0?4:o.tpT)-t,o.tpT<=0&&h>3)){o.tpT=5+Math.random()*3;const w=Math.random()*Math.PI*2,C=4+Math.random()*5,M=Math.floor(e.pos.x+Math.cos(w)*C),x=Math.floor(e.pos.z+Math.sin(w)*C),R=a.topY(M,x);R>0&&!a.isSolid(M,R+1,x)&&(this.hooks.tp(o.pos.x,o.pos.y+1,o.pos.z),o.pos.set(M+.5,R+1,x+.5),o.vel.set(0,0,0),this.hooks.tp(o.pos.x,o.pos.y+1,o.pos.z))}if(o.type==="chicken"&&o.vel.y<-2&&(o.vel.y=-2),(o.type==="zombie"||o.type==="skeleton")&&s>.75&&a.skyLit(Math.floor(o.pos.x),Math.floor(o.pos.y+1),Math.floor(o.pos.z))&&!b&&(o.burn=(o.burn||0)+t,o.burn>1&&(o.burn=0,o.hit(2,o.pos.x,o.pos.z),o.vel.set(0,0,0),o.hp<=0))){this.kill(o);continue}o.sound-=t,o.sound<=0&&(o.sound=6+Math.random()*12,h<16&&this.hooks.sound(o.type==="pig"?"oink":o.type==="cow"||o.type==="sheep"?"moo":o.type==="chicken"?"pop":o.type==="zombie"||o.type==="skeleton"||o.type==="spider"?"groan":"")),o.parts.rods&&o.parts.rods.forEach((w,C)=>w.rotation.y+=t*(2+C)),o.walkT+=t*(m?9:0);const L=m?Math.sin(o.walkT)*.7:0;o.parts.legs&&o.parts.legs.forEach((w,C)=>w.rotation.x=C%2?-L:L),o.model.position.copy(o.pos),o.model.rotation.y=o.yaw+Math.PI;const T=o.flash>0||o.fuse>0&&Math.floor(o.fuse*8)%2===0;for(const w of o.materials())w.emissive&&w.emissive.setRGB(T?o.fuse>0?.8:.5:0,T&&o.fuse>0?.8:0,T&&o.fuse>0?.8:0);(h>r*16+24||o.pos.y<-20)&&(o.dispose(this.scene),this.list.splice(l,1))}for(let l=this.arrows.length-1;l>=0;l--){const o=this.arrows[l];o.life-=t,o.vel.y-=(o.fire?0:7)*t,o.mesh.position.addScaledVector(o.vel,t),o.mesh.lookAt(o.mesh.position.clone().add(o.vel));const c=o.mesh.position,u=Math.hypot(c.x-e.pos.x,c.y-(e.pos.y+.9),c.z-e.pos.z)<.75;u&&!e.dead&&(this.hooks.hurtPlayer(o.fire?3:4,o.vel.x*.25,o.vel.z*.25),o.fire&&this.hooks.effect("burn",4)),(u||o.life<=0||a.isSolid(Math.floor(c.x),Math.floor(c.y),Math.floor(c.z)))&&(this.scene.remove(o.mesh),this.arrows.splice(l,1))}this.spawnT-=t,this.spawnT<=0&&(this.spawnT=1.5,this.trySpawn(e,n,s))}flyMob(t,e,n,s,r,a,l,o){const c=this.world;let u=0,h=0;s&&o>12?(u=r/(o||1),h=a/(o||1)):s&&o<6&&(u=-r/(o||1),h=-a/(o||1));const f=s?n.pos.y+3+Math.sin(t.age*1.4)*.8:t.pos.y+Math.sin(t.age)*.4;t.vel.x+=(u*t.def.speed-t.vel.x)*Math.min(1,e*3),t.vel.z+=(h*t.def.speed-t.vel.z)*Math.min(1,e*3),t.vel.y+=((f-t.pos.y)*1.2-t.vel.y)*Math.min(1,e*3);const d=t.pos.x+t.vel.x*e,g=t.pos.y+t.vel.y*e,_=t.pos.z+t.vel.z*e;if(c.isSolid(Math.floor(d),Math.floor(g+1),Math.floor(_))||t.pos.set(d,g,_),s)if(t.yaw=Math.atan2(-r,-a),t.burst=t.burst||0,t.burst>0){if(t.burstT-=e,t.burstT<=0){t.burst--,t.burstT=.28;const m=new P(t.pos.x,t.pos.y+1.4,t.pos.z),p=new P(n.pos.x,n.pos.y+1,n.pos.z),b=p.sub(m).normalize();this.shootArrow(m,b,!0)}}else t.cool<=0&&o<26&&!c.raycast(new P(t.pos.x,t.pos.y+1.4,t.pos.z),new P(r,l,a).normalize(),o)&&(t.cool=4,t.burst=3,t.burstT=0,this.hooks.sound("hiss"))}shootArrow(t,e,n=!1){const s=n?new Ut(new re(.4,.4,.4),new Ie({color:16747040})):new Ut(new re(.07,.07,.8),new bn({color:9071162,emissive:2102280}));s.position.copy(t),this.scene.add(s),this.arrows.push({mesh:s,vel:e.normalize().multiplyScalar(n?15:22),life:n?6:4,fire:n}),this.hooks.sound("shoot",.5)}trySpawnDim(t,e){if(e!=="survival")return;const n=this.world;if(this.list.length>=(this.dim==="nether"?12:7))return;const r=Math.random()*Math.PI*2,a=14+Math.random()*18,l=Math.floor(t.pos.x+Math.cos(r)*a),o=Math.floor(t.pos.z+Math.sin(r)*a);for(let c=Math.min(pe-6,Math.floor(t.pos.y)+22);c>4;c--)if(n.isSolid(l,c-1,o)&&!n.isLiquid(l,c-1,o)&&!n.isSolid(l,c,o)&&!n.isSolid(l,c+1,o)&&!n.isLiquid(l,c,o)){if(this.dim==="nether"){const u=Math.random();this.add(u<.55?"piglin":"blaze",l+.5,u<.55?c:c+2,o+.5)}else this.add("enderman",l+.5,c,o+.5);return}}trySpawn(t,e,n){if(this.dim!=="overworld")return this.trySpawnDim(t,e);const s=this.world,r=this.list.filter(o=>!o.def.hostile).length,a=this.list.length-r,l=(o,c)=>{const u=Math.random()*Math.PI*2,h=o+Math.random()*(c-o),f=Math.floor(t.pos.x+Math.cos(u)*h),d=Math.floor(t.pos.z+Math.sin(u)*h);return[f,d]};if(r<10&&n>.45){const[o,c]=l(16,40),u=s.topY(o,c);if(u>0){const h=s.getBlock(o,u,c);(h===D.GRASS||h===D.SNOW)&&!s.isSolid(o,u+1,c)&&!s.isLiquid(o,u+1,c)&&this.add(["pig","cow","sheep","chicken"][Math.floor(Math.random()*4)],o+.5,u+1,c+.5)}}if(!(e!=="survival"||a>=8)){if(n<.3){const[o,c]=l(20,36),u=s.topY(o,c);u>0&&!s.isSolid(o,u+1,c)&&!s.isLiquid(o,u+1,c)&&si[s.getBlock(o,u,c)]&&this.add(vu[Math.floor(Math.random()*vu.length)],o+.5,u+1,c+.5)}else if(a<4){const o=Math.random()*Math.PI*2,c=14+Math.random()*14,u=Math.floor(t.pos.x+Math.cos(o)*c),h=Math.floor(t.pos.z+Math.sin(o)*c),f=s.topY(u,h);if(f<8)return;const d=3+Math.floor(Math.random()*Math.max(1,f-8));s.getBlock(u,d,h)===0&&s.getBlock(u,d+1,h)===0&&s.isSolid(u,d-1,h)&&!s.skyLit(u,d,h)&&this.add(xu[Math.floor(Math.random()*xu.length)],u+.5,d,h+.5)}}}}const Fe=(i,t)=>i+Math.random()*(t-i),Zv=[1,1.3,1.75],Jv=[18,20,15],Qv=[4.2,3.2,2.4],tx=[1,2,3],ex=[5,6,8],nx=[5,4,3],Mu=[3.2,4.6,6.2];function ix(){const i=document.createElement("canvas");i.width=i.height=16;const t=i.getContext("2d");for(let n=0;n<16;n++)for(let s=0;s<16;s++){const r=Math.sin(s*12.9+n*78.2)*43758.5%1,a=190+Math.abs(r)*30;t.fillStyle=`rgb(${a|0},${a*.58|0},${a*.28|0})`,t.fillRect(s,n,1,1)}t.fillStyle="#4a2208",t.fillRect(0,0,16,1),t.fillRect(0,15,16,1),t.fillRect(0,0,1,16),t.fillRect(15,0,1,16),t.fillStyle="#2a1204";for(let n=0;n<4;n++)t.fillRect(4+n,4+n,2,1),t.fillRect(4+n,11-n,2,1);t.fillRect(9,10,4,1);const e=new Vn(i);return e.magFilter=_e,e.minFilter=_e,e.generateMipmaps=!1,e.colorSpace=nn,e}class sx{constructor(t,e,n){this.scene=t,this.h=e,this.pos=n.clone(),this.name="TORMENTA WITHER",this.type="storm",this.maxHp=360,this.hp=360,this.phase=1,this.scale=1,this.scaleT=1,this.t=0,this.yaw=0,this.flash=0,this.devourT=1,this.atkT=3,this.beamT=3,this.beamOn=!1,this.minionT=10,this.meleeT=0,this.beamHurtT=0,this.shell=1,this.dead=!1,this.skulls=[],this.root=new Ee,this.body=new Ee,this.root.add(this.body),this.dark=new bn({color:1511967}),this.dark2=new bn({color:2760758}),this.glow=new Ie({color:12611839}),this.build(),this.beam=new Ut(new hs(.14,.14,1,6),new Ie({color:11559167,transparent:!0,opacity:.6,fog:!1,depthWrite:!1})),this.beam.visible=!1,t.add(this.beam),this.skullGeo=new re(.9,.9,.9),this.skullMat=new bn({color:2102576,emissive:5906576}),t.add(this.root),this.root.position.copy(n)}build(){const{dark:t,dark2:e,glow:n,body:s}=this,r=(o,c,u,h,f,d,g,_=s)=>{const m=new Ut(new re(o,c,u),h);return m.position.set(f,d,g),_.add(m),m};r(5,5,5,t,0,0,0);for(let o=0;o<28;o++){const c=Fe(1,2.6),u=Math.floor(Math.random()*3),h=Math.random()<.5?-1:1,f=[Fe(-2.5,2.5),Fe(-2.5,2.5),Fe(-2.5,2.5)];f[u]=h*(2.5+c*.2),r(c,c*Fe(.7,1.3),c,Math.random()<.5?t:e,f[0],f[1],f[2]).rotation.set(Fe(-.3,.3),Fe(-.3,.3),Fe(-.3,.3))}for(let o=0;o<6;o++)r(.9,Fe(2,3.6),.9,e,Fe(-2,2),3.2,Fe(-3,0)).rotation.z=Fe(-.4,.4);this.heads=[];const a=(o,c,u,h,f)=>{const d=new Ee;d.position.set(c,u,h),d.rotation.y=f,s.add(d),r(o,o,o,e,0,0,0,d);for(const _ of[-1,1])r(o*.24,o*.12,.12,n,_*o*.24,o*.12,o/2+.03,d);const g=new Ee;g.position.set(0,-o*.42,o*.05),d.add(g),r(o*.92,o*.3,o*.86,t,0,-o*.1,0,g);for(let _=-2;_<=2;_++)r(o*.08,o*.14,o*.08,n,_*o*.18,o*.05,o*.42,g);this.heads.push({g:d,jaw:g,size:o})};a(3.6,0,4,2.2,0),a(2.6,-3.9,3,1.3,-.35),a(2.6,3.9,3,1.3,.35),this.tents=[];const l=(o,c,u,h,f,d,g,_,m)=>{const p=[];for(let b=0;b<g;b++){const S=_*(1-b/g*.72),v=new Ut(new re(S,S,S),b===g-1&&m?n:b%2?t:e);s.add(v),p.push({m:v,s:S})}this.tents.push({b:new P(o,c,u),d:new P(h,f,d).normalize(),segs:p,ph:Math.random()*6})};for(let o=0;o<6;o++)l(Fe(-2,2),-2.4,Fe(-2,1.5),Fe(-.2,.2),-1,Fe(-.3,.1),9,1.5,!1);l(-2.4,-.4,2.2,-.4,-.1,1,8,1.2,!0),l(2.4,-.4,2.2,.4,-.1,1,8,1.2,!0),l(0,-1.8,2.5,0,-.5,1,8,1.2,!0),this.cmd=new Ut(new re(1.7,1.7,1.7),new Ie({map:ix()})),this.cmd.position.set(0,.2,2.55),s.add(this.cmd),this.shellG=new Ee,this.shellG.position.set(0,.2,2.8),s.add(this.shellG),r(3.1,3.1,.8,e,0,0,0,this.shellG);for(const[o,c]of[[-1.4,0],[1.4,0],[0,1.4],[0,-1.4]])r(o?.3:2.8,c?.3:2.8,.2,n,o,c,.45,this.shellG)}headWorld(t){const e=new P;return this.heads[t%3].g.getWorldPosition(e),e}corePos(){return this.pos.clone()}raycast(t,e,n){const s=this.scale,r=this.pos,a=Cr(t,e,{x:r.x-3.1*s,y:r.y-2.8*s,z:r.z-3.1*s},{x:r.x+3.1*s,y:r.y+5.4*s,z:r.z+3.1*s});if(a<0||a>n)return null;const l=new P(r.x,r.y+.2*s,r.z),o=new P(t.x,t.y,t.z),c=Math.max(0,l.clone().sub(o).dot(e)),u=o.addScaledVector(e,c);return{dist:a,crit:this.phase===3&&u.distanceTo(l)<2.1*s}}hit(t,e){if(this.dead)return;if(this.hp-=t*(e?3:1),this.flash=.15,this.h.burst(this.pos.x+Fe(-2,2),this.pos.y+Fe(-1,3),this.pos.z+Fe(-2,2),e?[1,.7,.2]:[.5,.2,.8],e?16:8,4),this.hp<=0)return this.die();const n=this.hp/this.maxHp,s=n>.66?1:n>.33?2:3;s>this.phase&&(this.phase=s,this.scaleT=Zv[s-1],this.h.sound("roar",1),this.h.strikeNear(this.pos.x,this.pos.z),this.h.toast(s===2?"¡La tormenta crece y devora todo!":"¡FASE FINAL! El bloque de comandos está expuesto: ¡golpéalo!"),this.atkT=1.5)}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y,this.pos.z,7,.25),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y,this.pos.z,"storm"),this.h.toast("¡Has derrotado a la Tormenta Wither!"),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.scene.remove(this.beam),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.skulls)this.scene.remove(t.mesh);this.skulls=[]}update(t,e,n){if(this.dead)return;this.t+=t,this.flash=Math.max(0,this.flash-t);const s=this.phase-1;this.scale+=(this.scaleT-this.scale)*Math.min(1,t*1.2);const r=this.scale;this.root.scale.setScalar(r);const a=e.pos.x,l=e.pos.z;let o=a-this.pos.x,c=l-this.pos.z;const u=Math.hypot(o,c)||1;o/=u,c/=u;const h=3.5+1.2*this.phase,f=Jv[s];u>f+1?(this.pos.x+=o*h*t,this.pos.z+=c*h*t):u<f-3&&(this.pos.x-=o*h*.6*t,this.pos.z-=c*h*.6*t),this.pos.x+=-c*1.6*t*Math.sin(this.t*.3),this.pos.z+=o*1.6*t*Math.sin(this.t*.3);const d=e.pos.y+8+2*r;this.pos.y+=(d-this.pos.y)*Math.min(1,t*.8);const g=Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw;this.yaw+=Math.atan2(Math.sin(g),Math.cos(g))*Math.min(1,t*2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*.8)*.4,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((v,L)=>{v.jaw.rotation.x=.15+Math.sin(this.t*2.6+L*1.7)*.22+(this.beamOn?.35:0)});for(const v of this.tents)v.segs.forEach((L,T)=>{const w=T*.32;L.m.position.set(v.b.x+v.d.x*T*1.45+Math.sin(this.t*1.4+v.ph+T*.6)*w,v.b.y+v.d.y*T*1.45-T*.05,v.b.z+v.d.z*T*1.45+Math.cos(this.t*1.1+v.ph*1.3+T*.5)*w)});this.shell+=((this.phase>=3?0:1)-this.shell)*Math.min(1,t*2.5),this.shellG.scale.setScalar(Math.max(.001,this.shell));const _=this.flash>0?.5:0;this.dark.emissive.setRGB(_,_*.4,_),this.dark2.emissive.setRGB(_,_*.4,_);const m=.8+Math.sin(this.t*4)*.2;if(this.cmd.material.color.setScalar(this.phase>=3?1.2*m+.2:.55),this.devourT-=t,this.devourT<=0){this.devourT=.35;const v=3.4*r,L=Math.floor(this.pos.x),T=Math.floor(this.pos.y+.8*r),w=Math.floor(this.pos.z),C=Math.ceil(v);let M=0;for(let x=-C;x<=C&&M<150;x++)for(let R=-C;R<=C;R++)for(let I=-C;I<=C;I++){if(x*x+R*R+I*I>v*v)continue;const U=n.getBlock(L+x,T+R,w+I);U&&U!==D.BEDROCK&&Math.random()<.7&&(n.setBlock(L+x,T+R,w+I,0),M++)}M>6&&this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.25,.1,.35],6,4)}this.beamT-=t,this.beamT<=0&&(this.beamOn=!this.beamOn,this.beamT=this.beamOn?ex[s]:nx[s],this.beamOn&&this.h.sound("roar",.6));const p=new P(this.pos.x-e.pos.x,this.pos.y+1-(e.pos.y+1),this.pos.z-e.pos.z),b=p.length(),S=this.beamOn&&b<48&&!e.dead;if(this.beam.visible=S,S){const v=p.clone().normalize();e.push.x=v.x*Mu[s],e.push.z=v.z*Mu[s],e.push.y=v.y*11;const L=this.headWorld(0),T=new P(e.pos.x,e.pos.y+1,e.pos.z),w=L.distanceTo(T);this.beam.scale.set(1+Math.sin(this.t*30)*.3,w,1+Math.sin(this.t*30)*.3),this.beam.position.copy(L).add(T).multiplyScalar(.5),this.beam.quaternion.setFromUnitVectors(new P(0,1,0),T.clone().sub(L).normalize()),this.beamHurtT-=t,b<5.5*r&&this.beamHurtT<=0&&(this.beamHurtT=.5,this.h.hurtPlayer(2,0,0))}if(this.meleeT-=t,b<6.5*r&&this.meleeT<=0&&!e.dead&&(this.meleeT=1.3,this.h.hurtPlayer(5,-p.x/b*6,-p.z/b*6)),this.atkT-=t,this.atkT<=0&&!e.dead){this.atkT=Qv[s];for(let v=0;v<tx[s];v++)this.shoot(e,v)}for(let v=this.skulls.length-1;v>=0;v--){const L=this.skulls[v];L.life-=t,L.mesh.position.addScaledVector(L.vel,t),L.mesh.rotation.x+=t*4,L.mesh.rotation.y+=t*3;const T=L.mesh.position;(Math.hypot(T.x-e.pos.x,T.y-(e.pos.y+.9),T.z-e.pos.z)<1.4||L.life<=0||n.isSolid(Math.floor(T.x),Math.floor(T.y),Math.floor(T.z)))&&(this.h.explode(T.x,T.y,T.z,2.2+.4*this.phase,.5),this.scene.remove(L.mesh),this.skulls.splice(v,1))}this.phase>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=this.phase===2?14:10,this.h.minions()<5&&this.h.spawnMinion()))}shoot(t,e){const n=this.headWorld(e),r=new P(t.pos.x+t.vel.x*.5,t.pos.y+1,t.pos.z+t.vel.z*.5).sub(n).normalize();r.x+=Fe(-.06,.06)*(e+1),r.y+=Fe(-.04,.04),r.z+=Fe(-.06,.06)*(e+1),r.normalize();const a=new Ut(this.skullGeo,this.skullMat);a.position.copy(n),this.scene.add(a),this.skulls.push({mesh:a,vel:r.multiplyScalar(16),life:7}),this.h.sound("shoot",1)}}const hn=(i,t)=>i+Math.random()*(t-i),Ne=(i=0,t=0,e=0)=>new P(i,t,e),ni=i=>Math.atan2(Math.sin(i),Math.cos(i));class Ri{constructor(t,e,n,s){this.scene=t,this.h=e,this.pos=n.clone(),Object.assign(this,s),this.hp=this.maxHp,this.phase=1,this.t=0,this.yaw=0,this.flash=0,this.dead=!1,this.scale=s.scale||1,this.root=new Ee,this.body=new Ee,this.root.add(this.body),this.flashMats=[],this.proj=[],this.clouds=[],this.extra=[],t.add(this.root),this.root.position.copy(n),this.root.scale.setScalar(this.scale)}mat(t,e=0,n=!1){if(n)return new Ie({color:t});const s=new bn({color:t,emissive:e});return this.flashMats.push(s),s}box(t,e,n,s,r,a,l,o=this.body){const c=new Ut(new re(t,e,n),s);return c.position.set(r,a,l),o.add(c),c}group(t,e,n,s=this.body){const r=new Ee;return r.position.set(t,e,n),s.add(r),r}world(t){const e=Ne();return t.getWorldPosition(e),e}raycast(t,e,n){const s=this.hitbox,r=this.scale,a=this.pos,l=Cr(t,e,{x:a.x-s.hx*r,y:a.y+(s.oy-s.hy)*r,z:a.z-s.hz*r},{x:a.x+s.hx*r,y:a.y+(s.oy+s.hy)*r,z:a.z+s.hz*r});let o=l>=0&&l<=n?{dist:l,crit:!1}:null;for(const c of this.targets||[]){const u=c.pos,h=c.half,f=Cr(t,e,{x:u.x-h,y:u.y-h,z:u.z-h},{x:u.x+h,y:u.y+h,z:u.z+h});f>=0&&f<=n&&(!o||f<o.dist)&&(o={dist:f,crit:!1,target:c})}return o}damageMul(){return 1}hit(t,e,n){if(this.dead)return;if(n&&n.target&&n.target.onHit){n.target.onHit();return}if(this.hp-=t*this.damageMul(),this.flash=.15,this.h.burst(this.pos.x+hn(-1,1),this.pos.y+this.hitbox.oy*this.scale+hn(-1,1),this.pos.z+hn(-1,1),this.burstColor||[.6,.2,.8],8,4),this.hp<=0)return this.die();const s=this.phaseFor(this.hp/this.maxHp);s>this.phase&&(this.phase=s,this.onPhase(s)),this.onHit&&this.onHit()}phaseFor(){return 1}onPhase(){}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z,5,.2),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y+1,this.pos.z,this.type),this.h.toast(`¡Has derrotado a ${this.name}!`),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.proj)this.scene.remove(t.mesh);for(const t of this.extra)this.scene.remove(t);this.proj=[]}shootProj(t,e,n={}){const s=n.size||.9,r=new Ut(new re(s,s,s),new bn({color:n.color||2102576,emissive:n.emissive||5906576}));r.position.copy(t),this.scene.add(r),this.proj.push({mesh:r,vel:e.clone().normalize().multiplyScalar(n.speed||16),life:n.life||7,o:n}),this.h.sound("shoot",1)}updateProj(t,e,n){for(let s=this.proj.length-1;s>=0;s--){const r=this.proj[s],a=r.o;r.life-=t,r.mesh.position.addScaledVector(r.vel,t),r.mesh.rotation.x+=t*4,r.mesh.rotation.y+=t*3;const l=r.mesh.position;if(r.reflected){const c=Ne(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z);if(l.distanceTo(c)<(this.hitbox.hx+.8)*this.scale||r.life<=0){if(this.h.explode(l.x,l.y,l.z,2,0),this.h.burst(l.x,l.y,l.z,[1,.6,.2],24,6),this.scene.remove(r.mesh),this.proj.splice(s,1),l.distanceTo(c)<(this.hitbox.hx+.8)*this.scale&&(this.h.toast("¡Rebotada! Gran golpe"),this.hit(r.o.reflectDmg||70,!0),this.dead))return;continue}continue}(Math.hypot(l.x-e.pos.x,l.y-(e.pos.y+.9),l.z-e.pos.z)<1.4||r.life<=0||n.isSolid(Math.floor(l.x),Math.floor(l.y),Math.floor(l.z)))&&(this.h.explode(l.x,l.y,l.z,a.radius||2.2,a.ds||.5),a.effect&&Math.hypot(l.x-e.pos.x,l.y-e.pos.y,l.z-e.pos.z)<(a.radius||2.2)*1.8&&this.h.effect(a.effect[0],a.effect[1]),a.cloud&&this.clouds.push({x:l.x,y:l.y,z:l.z,t:4,tick:0}),this.scene.remove(r.mesh),this.proj.splice(s,1))}for(let s=this.clouds.length-1;s>=0;s--){const r=this.clouds[s];r.t-=t,r.tick-=t,r.tick<=0&&(r.tick=.45,this.h.burst(r.x+hn(-2,2),r.y+hn(0,1.5),r.z+hn(-2,2),[.8,.3,.9],5,1.2),Math.hypot(r.x-e.pos.x,r.z-e.pos.z)<3.3&&Math.abs(r.y-e.pos.y)<3&&!e.dead&&this.h.hurtPlayer(2,0,0)),r.t<=0&&this.clouds.splice(s,1)}}applyFlash(){const t=this.flash>0?.5:0;for(const e of this.flashMats)e.userData.baseE===void 0&&(e.userData.baseE=e.emissive.clone());for(const e of this.flashMats)e.emissive.copy(e.userData.baseE).addScalar(t)}update(t,e,n){this.dead||(this.t+=t,this.flash=Math.max(0,this.flash-t),this.tick(t,e,n),this.updateProj(t,e,n),this.applyFlash())}}class rx extends Ri{constructor(t,e,n,s){super(t,e,n,{name:"ENDER DRAGON",type:"dragon",maxHp:300,hitbox:{hx:4.5,hy:2.4,hz:5,oy:.5},scale:1.4,burstColor:[.7,.2,.9]}),this.arena=s||null,this.center=s?Ne(s.cx,s.cy,s.cz):n.clone(),this.theta=Math.random()*6,this.state="circle",this.diveT=12,this.fireT=4,this.breath=0,this.diveTime=0,this.diveTarget=Ne();const r=this.mat(1380378),a=this.mat(2365998),l=this.mat(14696703,14696703,!0);this.box(2.4,2,6,r,0,0,0);for(let o=0;o<6;o++)this.box(.4,.8,.5,a,0,1.3,-2.4+o*.95);this.neck=[];for(let o=0;o<3;o++)this.neck.push(this.box(1.3-o*.1,1.3-o*.1,1.5,a,0,.3+o*.35,3.3+o*1.3));this.head=this.group(0,1.6,7.3),this.box(2,1.3,2.2,r,0,0,0,this.head),this.box(1.2,.7,1.6,a,0,-.15,1.6,this.head),this.jaw=this.group(0,-.6,.4,this.head),this.box(1.5,.35,2.2,r,0,0,.9,this.jaw);for(const o of[-.7,.7])this.box(.5,.25,.1,l,o,.2,1.1,this.head),this.box(.25,.8,.3,a,o*1.2,.9,-.4,this.head).rotation.z=o*.4;this.wings=[];for(const o of[-1,1]){const c=this.group(o*1.2,.8,.5);this.box(5,.22,2.4,a,o*2.5,0,0,c);const u=this.group(o*5,0,0,c);this.box(5,.16,2,r,o*2.5,0,.4,u),this.box(.15,.15,3.4,a,o*2.5,.12,.4,u),this.wings.push({w:c,o:u,sx:o})}this.tail=[];for(let o=0;o<8;o++)this.tail.push(this.box(1.5-o*.14,1.2-o*.1,1.6,o%2?r:a,0,0,-3.6-o*1.5));for(const[o,c]of[[-1,1.8],[1,1.8],[-1,-1.8],[1,-1.8]])this.box(.6,1.4,.6,a,o,-1.4,c);this.crystals=[];for(let o=0;o<4;o++){const c=o/4*Math.PI*2+.4,u=new Ee,h=new Ie({color:16736464}),f=new Ut(new re(1.3,1.3,1.3),h),d=new Ut(new re(1.3,1.3,1.3),new Ie({color:16765168}));d.rotation.set(.7,.7,0),d.scale.setScalar(.7),u.add(f,d);const g=new Ut(new hs(.07,.07,1,5),new Ie({color:16744672,transparent:!0,opacity:.6,fog:!1}));if(this.arena&&this.arena.pillars){const _=this.arena.pillars[(o*2+1)%this.arena.pillars.length];u.position.set(_.x+.5,_.top+3.5,_.z+.5)}else u.position.set(n.x+Math.cos(c)*14,n.y-6+3,n.z+Math.sin(c)*14);t.add(u,g),this.extra.push(u,g),this.crystals.push({g:u,beam:g,alive:!0})}this.h.toast("¡Destruye los 4 cristales para poder dañar al Dragón!")}aliveCrystals(){return this.crystals.filter(t=>t.alive).length}damageMul(){return this.aliveCrystals()?.25:1}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Dragón entra en furia!"),this.diveT=3}raycast(t,e,n){let s=super.raycast(t,e,n);return this.crystals.forEach((r,a)=>{if(!r.alive)return;const l=r.g.position,o=Cr(t,e,{x:l.x-1,y:l.y-1,z:l.z-1},{x:l.x+1,y:l.y+1,z:l.z+1});o>=0&&o<=n&&(!s||o<s.dist)&&(s={dist:o,crit:!1,crystal:a})}),s}hit(t,e,n){if(n&&n.crystal!==void 0){const s=this.crystals[n.crystal];if(!s.alive)return;s.alive=!1,this.scene.remove(s.g,s.beam),this.h.explode(s.g.position.x,s.g.position.y,s.g.position.z,2.2,.35),this.h.burst(s.g.position.x,s.g.position.y,s.g.position.z,[1,.4,.8],24,6),this.h.toast(this.aliveCrystals()?`Cristal destruido (${this.aliveCrystals()} restantes)`:"¡Cristales destruidos! Ahora es vulnerable");return}super.hit(t,e,n)}tick(t,e,n){const s=this.phase;this.center.x+=(e.pos.x-this.center.x)*t*.1,this.center.z+=(e.pos.z-this.center.z)*t*.1;const r=this.aliveCrystals();r&&(this.hp=Math.min(this.maxHp,this.hp+t*2*r));const a=this.pos.clone();if(this.state==="circle"){this.theta+=t*(.32+.1*s);const c=24,u=this.center.x+Math.cos(this.theta)*c,h=this.center.z+Math.sin(this.theta)*c,f=Math.max(e.pos.y+12,this.center.y)+Math.sin(this.t*.9)*2,d=Math.min(1,t*1.6);if(this.pos.x+=(u-this.pos.x)*d,this.pos.z+=(h-this.pos.z)*d,this.pos.y+=(f-this.pos.y)*d,this.diveT-=t,this.fireT-=t,this.diveT<=0&&!e.dead&&(this.state="dive",this.diveTime=0,this.diveTarget.set(e.pos.x,e.pos.y+1,e.pos.z),this.diveT=s===1?13:8,this.h.sound("roar",.7)),this.fireT<=0&&!e.dead){this.fireT=s===1?5:3;const g=this.world(this.head);this.shootProj(g,Ne(e.pos.x,e.pos.y+1,e.pos.z).sub(g),{speed:17,size:1.1,color:4198496,emissive:12595440,radius:2.6,ds:.55,cloud:!0})}}else if(this.state==="dive"){this.diveTime+=t;const c=this.diveTarget.clone().sub(this.pos),u=c.length();this.pos.addScaledVector(c.normalize(),28*t),Math.hypot(this.pos.x-e.pos.x,this.pos.y-(e.pos.y+1),this.pos.z-e.pos.z)<4.2&&!e.dead&&!this.hitDive&&(this.hitDive=!0,this.h.hurtPlayer(9,c.x*8,c.z*8)),(u<3||this.diveTime>3)&&(this.state="circle",this.hitDive=!1)}const l=this.pos.clone().sub(a);l.lengthSq()>1e-5&&(this.yaw+=ni(Math.atan2(l.x,l.z)-this.yaw)*Math.min(1,t*3)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=this.state==="dive"?0:-ni(Math.atan2(l.x,l.z)-this.yaw)*.5,this.root.rotation.x=this.state==="dive"?.5:0;const o=Math.sin(this.t*(this.state==="dive"?7:3.2));for(const c of this.wings)c.w.rotation.z=c.sx*o*.6,c.o.rotation.z=c.sx*o*.45;this.tail.forEach((c,u)=>{c.position.x=Math.sin(this.t*2-u*.6)*u*.35,c.position.y=Math.sin(this.t*1.5-u*.5)*u*.12}),this.jaw.rotation.x=.1+(this.state==="dive"?.5:.18+Math.sin(this.t*2)*.12);for(const c of this.crystals)if(c.alive){c.g.rotation.y+=t*1.2,c.g.position.y+=Math.sin(this.t*2+c.g.position.x)*t*.4;const u=c.g.position,h=this.pos.clone().setY(this.pos.y+1),f=u.distanceTo(h);c.beam.scale.set(1,f,1),c.beam.position.copy(u).add(h).multiplyScalar(.5),c.beam.quaternion.setFromUnitVectors(Ne(0,1,0),h.clone().sub(u).normalize()),c.beam.visible=this.hp<this.maxHp}else c.beam.visible=!1}}class ox extends Ri{constructor(t,e,n){super(t,e,n,{name:"WITHER",type:"wither",maxHp:300,hitbox:{hx:2.2,hy:2.8,hz:2.2,oy:1},scale:1.6,burstColor:[.2,.2,.25]}),this.fireT=2.5,this.minionT=12,this.noBreak=0;const s=this.mat(1447450),r=this.mat(3816e3),a=this.mat(15266047,0,!0);this.box(.45,3,.45,r,0,0,0);for(let o=0;o<3;o++)this.box(2.6-o*.4,.2,.35,r,0,.9-o*.55,0);this.box(.5,1.2,.5,s,0,-1.9,-.5).rotation.x=.3,this.heads=[];const l=(o,c,u,h)=>{const f=this.group(c,u,h);this.box(o,o,o,s,0,0,0,f);for(const d of[-1,1])this.box(o*.22,o*.16,.1,a,d*o*.22,o*.1,o/2+.03,f);this.box(o*.5,o*.14,.1,a,0,-o*.25,o/2+.03,f),this.heads.push(f)};l(1.3,0,2.1,0),l(1,-1.35,1.7,.1),l(1,1.35,1.7,.1),this.aura=new Ut(new re(3.6,4.8,3.6),new Ie({color:8433919,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.aura.position.y=.6,this.body.add(this.aura),this.h.explode(n.x,n.y,n.z,4,.25),this.h.toast("¡El Wither ha despertado!")}phaseFor(t){return t>.5?1:2}damageMul(){return this.phase===2?.6:1}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Wither está acorazado! Te perseguirá de cerca"),this.aura.material.opacity=.28,this.fireT=1}onHit(){if(this.t-this.noBreak<.6)return;this.noBreak=this.t;const t=this.scale,e=Math.floor(this.pos.x),n=Math.floor(this.pos.y+t),s=Math.floor(this.pos.z);for(let r=-3;r<=3;r++)for(let a=-2;a<=4;a++)for(let l=-3;l<=3;l++){const o=this.h.world().getBlock(e+r,n+a,s+l);o&&o!==D.BEDROCK&&Math.random()<.6&&this.h.world().setBlock(e+r,n+a,s+l,0)}}tick(t,e){const n=this.phase,s=e.pos.x,r=e.pos.z,a=s-this.pos.x,l=r-this.pos.z,o=Math.hypot(a,l)||1,c=n===1?16:7,u=n===1?4.5:7;if(o>c+1?(this.pos.x+=a/o*u*t,this.pos.z+=l/o*u*t):o<c-3&&(this.pos.x-=a/o*u*.7*t,this.pos.z-=l/o*u*.7*t),this.pos.y+=(e.pos.y+(n===1?7:3.5)-this.pos.y)*Math.min(1,t*.9),this.yaw+=ni(Math.atan2(a,l)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.3)*.5,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((h,f)=>{h.rotation.y=Math.sin(this.t*1.1+f*2)*.35,h.rotation.x=Math.sin(this.t*.9+f)*.1}),this.fireT-=t,this.fireT<=0&&!e.dead){this.fireT=n===1?2.3:1.6;const h=n===1?1:3;for(let f=0;f<h;f++){const d=this.world(this.heads[f%3]),g=Ne(e.pos.x+e.vel.x*.4,e.pos.y+1,e.pos.z+e.vel.z*.4),_=g.sub(d).normalize();_.x+=hn(-.05,.05)*f,_.z+=hn(-.05,.05)*f,this.shootProj(d,_,{speed:15,size:n===1?.8:1,color:n===1?1118484:2109536,emissive:n===1?3158080:4223231,radius:n===1?1.9:2.3,ds:.4,effect:["poison",6]})}}n===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<5&&this.h.spawnMinion("skeleton")))}}class ax extends Ri{constructor(t,e,n){super(t,e,n,{name:"WARDEN",type:"warden",maxHp:360,hitbox:{hx:.9,hy:1.6,hz:.9,oy:1.6},scale:1.25,burstColor:[.1,.6,.6]}),this.vel=Ne(),this.hw=.55*1.25,this.hh=3.4,this.hwb=.7,this.pos.copy(n),this.state="emerge",this.emerge=2.4,this.boomT=3,this.charge=0,this.meleeT=0,this.angry=!1,this.walk=0;const s=this.mat(862768),r=this.mat(1325634),a=this.mat(3926216,0,!0);this.legL=this.leg(-.4,s),this.legR=this.leg(.4,s),this.box(1.5,1.5,.9,r,0,2.15,0),this.chest=this.box(.7,.6,.12,a,0,2.2,.48);for(const l of[1.75,2,2.45])this.box(1.55,.1,.95,s,0,l,0);this.armL=this.arm(-1.1,r),this.armR=this.arm(1.1,r),this.head=this.group(0,3.25,.05),this.box(1.5,1,.95,r,0,0,0,this.head);for(const l of[-1,1])this.box(.18,.9,.18,s,l*.5,.85,-.1,this.head).rotation.z=-l*.35,this.box(.6,.55,.12,a,l*.95,.15,-.1,this.head);this.box(.9,.12,.1,a,0,-.1,.5,this.head),this.boomBeam=new Ut(new hs(.5,.5,1,8),new Ie({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.boomBeam),this.extra.push(this.boomBeam),this.h.toast("El Warden emerge de la oscuridad…"),this.h.sound("roar",1)}leg(t,e){const n=this.group(t,1.5,0);return this.box(.7,1.5,.75,e,0,-.75,0,n),n}arm(t,e){const n=this.group(t,2.8,0);return this.box(.7,2.6,.7,e,0,-1.3,0,n),n}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Warden ruge enfurecido!"),this.boomT=1}damageMul(){return this.state==="emerge"?0:1}tick(t,e,n){const s=this.phase;if(this.state==="emerge"){this.emerge-=t,this.root.position.set(this.pos.x,this.pos.y-Math.max(0,this.emerge)*1.2,this.pos.z),this.h.darkness(.6),this.emerge<=0&&(this.state="hunt");return}const r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1,o=e.pos.y-this.pos.y;this.yaw+=ni(Math.atan2(r,a)-this.yaw)*Math.min(1,t*5);const c=this.charge>0?.4:s===1?3.4:5;this.vel.x+=(r/l*c-this.vel.x)*Math.min(1,t*6),this.vel.z+=(a/l*c-this.vel.z)*Math.min(1,t*6),l<2.2&&(this.vel.x*=.2,this.vel.z*=.2);const u={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},h=Js(n,u,t);(h.hitX||h.hitZ)&&h.onGround&&(this.vel.y=9),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.2,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;const f=Math.sin(this.walk)*.55;this.legL.rotation.x=f,this.legR.rotation.x=-f,this.armL.rotation.x=-f*.7,this.armR.rotation.x=f*.7,this.head.rotation.x=Math.sin(this.t*2)*.05,this.chest.scale.setScalar(1+(this.charge>0?.6+Math.sin(this.t*25)*.3:Math.sin(this.t*4)*.1)),this.meleeT-=t,l<3.8&&Math.abs(o)<3&&this.meleeT<=0&&!e.dead&&this.charge<=0&&(this.meleeT=1.5,this.armR.rotation.x=-2,this.h.hurtPlayer(s===1?12:15,r/l*9,a/l*9),this.h.sound("hit",1)),this.boomT-=t,this.charge>0?(this.charge-=t,this.h.sound("hiss",.4),this.charge<=0&&this.sonicBoom(e,n)):this.boomT<=0&&l>4.5&&l<30&&!e.dead&&(this.charge=1.5,this.boomT=s===1?5:3.2,this.h.sound("roar",.5)),this.boomBeam.material.opacity=Math.max(0,this.boomBeam.material.opacity-t*3),this.h.darkness(l<28?.35+.15*Math.sin(this.t*3):0)}sonicBoom(t,e){const n=this.pos.clone().setY(this.pos.y+2.6*this.scale),s=Ne(t.pos.x,t.pos.y+1,t.pos.z),r=s.clone().sub(n),a=r.length();r.normalize(),this.boomBeam.material.opacity=.85,this.boomBeam.scale.set(1,a,1),this.boomBeam.position.copy(n).add(s).multiplyScalar(.5),this.boomBeam.quaternion.setFromUnitVectors(Ne(0,1,0),r),this.h.sound("explode",.8),e.raycast(n,r,a)||this.h.hurtPlayer(this.phase===1?12:15,r.x*8,r.z*8),this.h.burst(t.pos.x,t.pos.y+1,t.pos.z,[.4,1,.9],14,5)}dispose(){this.h.darkness(0),super.dispose()}}class lx extends Ri{constructor(t,e,n){super(t,e,n,{name:"GUARDIÁN ANCESTRAL",type:"guardian",maxHp:240,hitbox:{hx:1.8,hy:1.8,hz:1.8,oy:0},scale:2.4,burstColor:[.3,.9,.8]}),this.laserT=4,this.charge=0,this.beam=null,this.thorns=0;const s=this.mat(8032114),r=this.mat(6189912),a=this.mat(14715472),l=this.mat(6353120,0,!0);this.box(1.5,1.5,1.5,s,0,0,0);for(let c=0;c<6;c++)this.box(.4,.4,.05,a,hn(-.6,.6),hn(-.6,.6),-.78);this.spikes=[];const o=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,-1]];for(const[c,u,h]of o)for(let f=0;f<3;f++){const d=this.group(c*.75+(c?0:hn(-.5,.5)),u*.75+(u?0:hn(-.5,.5)),h*.75+(h?0:hn(-.5,.5)));d.lookAt(d.position.clone().add(Ne(c,u,h))),this.box(.14,.14,.9,r,0,0,.45,d),this.box(.1,.1,.2,l,0,0,.95,d),this.spikes.push(d)}this.eye=this.group(0,0,.78),this.box(.95,.95,.12,this.mat(15790304),0,0,0,this.eye),this.iris=this.box(.5,.5,.14,this.mat(13119520,5244936),0,0,.04,this.eye),this.box(.18,.18,.16,this.mat(1050632),0,0,.06,this.eye),this.box(.5,.5,.9,r,0,0,-1.1).scale.set(1,.6,1),this.laser=new Ut(new hs(.1,.1,1,6),new Ie({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Guardián Ancestral te observa… ¡cuidado con su láser!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Guardián se enfurece! Su láser es más rápido")}onHit(){const t=this.h.player();t&&Math.hypot(t.pos.x-this.pos.x,t.pos.z-this.pos.z)<7.5&&!t.dead&&this.h.hurtPlayer(2,0,0)}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;if(this.charge<=0){const d=s===1?14:11,g=s===1?3:4.4;l>d+1?(this.pos.x+=r/l*g*t,this.pos.z+=a/l*g*t):l<d-3&&(this.pos.x-=r/l*g*.7*t,this.pos.z-=a/l*g*.7*t),this.pos.y+=(e.pos.y+4-this.pos.y)*Math.min(1,t*.8)}this.yaw+=ni(Math.atan2(r,a)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw;const o=1+Math.sin(this.t*1.6)*.12+(this.charge>0?.35:0);this.spikes.forEach(d=>d.scale.setScalar(o)),this.iris.scale.setScalar(this.charge>0?1.5+Math.sin(this.t*30)*.2:1),this.laserT-=t;const c=this.world(this.eye),u=Ne(e.pos.x,e.pos.y+1,e.pos.z),h=u.clone().sub(c),f=h.length();if(h.normalize(),this.charge>0){const d=s===1?2.6:1.7,g=1-this.charge/d;this.charge-=t,this.laser.material.opacity=.25+g*.6,this.laser.scale.set(.5+g*3.2,f,.5+g*3.2),this.laser.position.copy(c).add(u).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(Ne(0,1,0),h),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.6),!n.raycast(c,h,f)&&!e.dead&&(this.h.hurtPlayer(9,h.x*3,h.z*3),this.h.effect("fatigue",25),this.h.toast("¡Fatiga de minería!")),this.laserT=s===1?6:3.5)}else this.laser.material.opacity=0,this.laserT<=0&&f<40&&!e.dead&&(this.charge=s===1?2.6:1.7,this.h.sound("hiss",.6))}}class cx extends Ri{constructor(t,e,n){super(t,e,n,{name:"DEVASTADOR",type:"ravager",maxHp:280,hitbox:{hx:1.4,hy:1.5,hz:1.9,oy:1.4},scale:1.5,burstColor:[.5,.4,.3]}),this.vel=Ne(),this.state="stalk",this.timer=4,this.dirx=0,this.dirz=1,this.hitDone=!1,this.walk=0,this.stunMul=1;const s=this.mat(4867392),r=this.mat(6182478),a=this.mat(14210244),l=this.mat(11542560,3147784);this.box(2.2,1.7,3.1,s,0,1.9,0),this.box(1.6,.9,1.6,r,0,3,-.6),this.neck=this.group(0,2.3,1.4),this.box(1,1,1.2,r,0,.1,.4,this.neck),this.head=this.group(0,.2,1.2,this.neck),this.box(1.7,1.45,1.6,s,0,0,.5,this.head);for(const o of[-1,1])this.box(.25,1,.25,a,o*.7,1,.2,this.head).rotation.z=-o*.3,this.box(.2,.6,.2,a,o*.55,-.55,1.2,this.head),this.box(.3,.2,.1,l,o*.45,.2,1.32,this.head);this.legs=[[-.8,1.2],[.8,1.2],[-.8,-1.2],[.8,-1.2]].map(([o,c])=>{const u=this.group(o,1.2,c);return this.box(.8,1.2,.8,r,0,-.6,0,u),u}),this.hw=1.2,this.hh=3.2,this.h.toast("¡El Devastador ruge! Esquiva sus embestidas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Devastador se enfurece!"),this.timer=1}damageMul(){return this.state==="stun"?1.7:1}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;this.timer-=t;let o=0;if(this.state==="stalk")o=s===1?3.6:4.8,this.yaw+=ni(Math.atan2(r,a)-this.yaw)*Math.min(1,t*4),this.timer<=0&&!e.dead&&l<40&&(this.state="windup",this.timer=1,this.h.sound("roar",.9));else if(this.state==="windup")this.yaw+=ni(Math.atan2(r,a)-this.yaw)*Math.min(1,t*6),this.neck.rotation.x=-.6*Math.min(1,(1-this.timer)*2),this.timer<=0&&(this.state="charge",this.timer=1.9,this.hitDone=!1,this.dirx=r/l,this.dirz=a/l,this.yaw=Math.atan2(this.dirx,this.dirz),l<9&&!e.dead&&this.h.hurtPlayer(4,this.dirx*10,this.dirz*10));else if(this.state==="charge"){o=15,this.vel.x=this.dirx*o,this.vel.z=this.dirz*o,this.neck.rotation.x=.5,l<3.4&&!this.hitDone&&!e.dead&&Math.abs(e.pos.y-this.pos.y)<3.5&&(this.hitDone=!0,this.h.hurtPlayer(11,this.dirx*12,this.dirz*12));const f=Math.floor(this.pos.x+this.dirx*2.2),d=Math.floor(this.pos.z+this.dirz*2.2),g=Math.floor(this.pos.y);for(let _=-1;_<=1;_++)for(let m=-1;m<=1;m++)for(let p=0;p<3;p++){const b=n.getBlock(f+_,g+p,d+m);b&&b!==D.BEDROCK&&b!==D.STONE&&b!==D.COBBLE&&n.setBlock(f+_,g+p,d+m,0)}this.timer<=0&&(this.state="stun",this.timer=2.2,this.h.sound("hit",1),this.h.burst(this.pos.x,this.pos.y+2,this.pos.z,[.8,.8,.3],14,4))}else this.state==="stun"&&(this.neck.rotation.x=.9,this.timer<=0&&(this.state="stalk",this.timer=s===1?5:3,this.neck.rotation.x=0));this.state!=="charge"&&(this.vel.x+=(r/l*o-this.vel.x)*Math.min(1,t*5),this.vel.z+=(a/l*o-this.vel.z)*Math.min(1,t*5)),(this.state==="stun"||this.state==="windup")&&(this.vel.x*=.85,this.vel.z*=.85);const c={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},u=Js(n,c,t);(u.hitX||u.hitZ)&&u.onGround&&this.state!=="stun"&&(this.vel.y=10),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*1.6;const h=Math.sin(this.walk)*.5;this.legs.forEach((f,d)=>f.rotation.x=d%2?-h:h),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class hx extends Ri{constructor(t,e,n){super(t,e,n,{name:"INVOCADOR",type:"evoker",maxHp:220,hitbox:{hx:.9,hy:1.4,hz:.9,oy:1.6},scale:1.7,burstColor:[.9,.8,.2]}),this.fangT=3,this.vexT=7,this.tpT=6,this.vex=[],this.fangs=[],this.targets=[];const s=this.mat(7105648),r=this.mat(14202928),a=this.mat(14264458),l=this.mat(3158068);this.box(.95,1.6,.65,s,0,1,0),this.box(1,.18,.7,r,0,.25,0),this.box(.98,.14,.68,r,0,1,0),this.head=this.group(0,2.05,0),this.box(.55,.65,.55,a,0,.15,0,this.head),this.box(.14,.28,.16,a,0,.05,.34,this.head);for(const o of[-1,1])this.box(.16,.08,.04,this.mat(16777215,0,!0),o*.14,.25,.28,this.head),this.box(.2,.05,.05,l,o*.14,.34,.28,this.head);this.arms=this.box(1,.3,.45,s,0,1.5,.4),this.armL=this.group(-.62,1.7,.1),this.armR=this.group(.62,1.7,.1);for(const o of[this.armL,this.armR])this.box(.28,.9,.28,s,0,-.45,0,o);this.arms.visible=!0,this.h.toast("El Invocador alza los brazos… ¡cuidado con los colmillos y los vex!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Invocador desata un círculo de colmillos!"),this.fangT=1}raycast(t,e,n){return this.targets=this.vex.map(s=>({pos:s.pos,half:.7,onHit:()=>this.killVex(s)})),super.raycast(t,e,n)}killVex(t){this.h.burst(t.pos.x,t.pos.y,t.pos.z,[.5,.7,1],14,4),this.h.sound("hit",1),this.scene.remove(t.mesh),this.vex.splice(this.vex.indexOf(t),1)}spawnFang(t,e,n,s,r){const a=s.topY(Math.floor(t),Math.floor(e));if(a<0)return;const l=new Ee,o=new bn({color:15788224,emissive:4208664});for(let c=0;c<3;c++){const u=new Ut(new re(.5-c*.14,.7,.5-c*.14),o);u.position.y=.35+c*.6,l.add(u)}l.position.set(t,a+1,e),l.scale.y=.01,l.visible=!1,this.scene.add(l),this.fangs.push({x:t,z:e,y:a+1,g:l,t:-n,hit:!1})}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;this.yaw+=ni(Math.atan2(r,a)-this.yaw)*Math.min(1,t*5);const o=13;l>o+2?(this.pos.x+=r/l*3.5*t,this.pos.z+=a/l*3.5*t):l<o-4&&(this.pos.x-=r/l*3*t,this.pos.z-=a/l*3*t),this.pos.y+=(e.pos.y+3.2-this.pos.y)*Math.min(1,t*1.2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.7)*.35,this.pos.z),this.root.rotation.y=this.yaw;const c=this.fangT<1||this.vexT<1;if(this.armL.rotation.x=this.armR.rotation.x=c?-2.4+Math.sin(this.t*14)*.2:0,this.arms.visible=!c,this.tpT-=t,this.tpT<=0){this.tpT=s===1?8:5,this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5);const u=Math.random()*Math.PI*2,h=11+Math.random()*4;this.pos.set(e.pos.x+Math.cos(u)*h,e.pos.y+3+Math.random()*2,e.pos.z+Math.sin(u)*h),this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5),this.h.sound("pop",1)}if(this.fangT-=t,this.fangT<=0&&!e.dead){this.fangT=s===1?4.2:3,this.h.sound("shoot",.8);for(let u=1;u<=12;u++)this.spawnFang(this.pos.x+r/l*u*1.4+Math.sin(u)*.2,this.pos.z+a/l*u*1.4,u*.07,n,e);if(s===2)for(let u=0;u<12;u++){const h=u/12*Math.PI*2;this.spawnFang(e.pos.x+Math.cos(h)*3,e.pos.z+Math.sin(h)*3,.9,n,e)}}for(let u=this.fangs.length-1;u>=0;u--){const h=this.fangs[u];h.t+=t,h.t>=0&&(h.g.visible=!0,h.g.scale.y=Math.min(1,h.t*6),!h.hit&&h.t>.12&&Math.hypot(h.x-e.pos.x,h.z-e.pos.z)<1.2&&Math.abs(h.y-e.pos.y)<2.2&&!e.dead&&(h.hit=!0,this.h.hurtPlayer(6,0,0)),h.t>1.1&&(this.scene.remove(h.g),this.fangs.splice(u,1)))}if(this.vexT-=t,this.vexT<=0&&!e.dead){this.vexT=s===1?10:7,this.h.sound("pop",1);const u=s===1?3:5;for(let h=0;h<u;h++){const f=new Ee,d=new bn({color:9416928,emissive:2109520,transparent:!0,opacity:.85}),g=new Ut(new re(.5,.7,.5),d),_=new Ut(new re(.7,.05,.4),d),m=_.clone();_.position.set(-.55,.2,-.1),m.position.set(.55,.2,-.1),f.add(g,_,m);for(const b of[-.1,.1]){const S=new Ut(new re(.08,.08,.05),new Ie({color:16719904}));S.position.set(b,.15,.27),f.add(S)}const p=Ne(this.pos.x+hn(-2,2),this.pos.y+1+hn(0,2),this.pos.z+hn(-2,2));f.position.copy(p),this.scene.add(f),this.vex.push({mesh:f,pos:p,w1:_,w2:m,life:28,cool:1})}}for(let u=this.vex.length-1;u>=0;u--){const h=this.vex[u];h.life-=t,h.cool-=t;const f=Ne(e.pos.x,e.pos.y+1,e.pos.z).sub(h.pos),d=f.length();h.pos.addScaledVector(f.normalize(),6.2*t),h.pos.y+=Math.sin(this.t*6+u)*t*1.5,h.mesh.position.copy(h.pos),h.mesh.rotation.y=Math.atan2(f.x,f.z),h.w1.rotation.z=Math.sin(this.t*25)*.7,h.w2.rotation.z=-h.w1.rotation.z,d<1.2&&h.cool<=0&&!e.dead&&(h.cool=.9,this.h.hurtPlayer(3,0,0)),h.life<=0&&(this.scene.remove(h.mesh),this.vex.splice(u,1))}}dispose(){for(const t of this.vex)this.scene.remove(t.mesh);for(const t of this.fangs)this.scene.remove(t.g);this.vex=[],this.fangs=[],super.dispose()}}class ux extends Ri{constructor(t,e,n){super(t,e,n,{name:"GHAST GIGANTE",type:"ghast",maxHp:200,hitbox:{hx:2.2,hy:2.2,hz:2.2,oy:0},scale:1.8,burstColor:[1,1,1]}),this.fireT=3,this.tele=0,this.theta=Math.random()*6,this.targets=[];const s=this.mat(15921906),r=this.mat(14474460),a=this.mat(4208696);this.box(4,4,4,s,0,0,0),this.eyeL=this.box(.9,.25,.1,a,-.9,.2,2.03),this.eyeR=this.box(.9,.25,.1,a,.9,.2,2.03),this.mouth=this.box(.7,.35,.1,a,0,-.9,2.03),this.tents=[];for(const l of[-1.4,0,1.4])for(const o of[-1.4,0,1.4]){const c=2.2+Math.abs(l*o)*.5+(l===0&&o===0?.6:0),u=this.box(.55,c,.55,r,l,-2-c/2,o);this.tents.push({m:u,base:-2-c/2,ph:Math.random()*6})}this.redEye=this.mat(16719904,0,!0),this.h.toast("¡Un Ghast gigante! Golpea sus bolas de fuego para devolvérselas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Ghast llora de rabia y dispara más rápido!")}raycast(t,e,n){return this.targets=this.proj.filter(s=>!s.reflected).map(s=>({pos:s.mesh.position,half:1.25,onHit:()=>this.reflect(s)})),super.raycast(t,e,n)}reflect(t){t.reflected=!0,t.o={...t.o,reflectDmg:70},t.life=6,t.vel=Ne(this.pos.x,this.pos.y,this.pos.z).sub(t.mesh.position).normalize().multiplyScalar(22),this.h.sound("hit",1)}tick(t,e){const n=this.phase;this.theta+=t*(.18+.05*n);const s=22,r=e.pos.x+Math.cos(this.theta)*s,a=e.pos.z+Math.sin(this.theta)*s,l=e.pos.y+11,o=Math.min(1,t*.7);if(this.pos.x+=(r-this.pos.x)*o,this.pos.z+=(a-this.pos.z)*o,this.pos.y+=(l-this.pos.y)*o,this.yaw+=ni(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t)*.7,this.pos.z),this.root.rotation.y=this.yaw,this.tents.forEach((c,u)=>{c.m.rotation.z=Math.sin(this.t*1.6+c.ph)*.18,c.m.rotation.x=Math.cos(this.t*1.3+c.ph)*.18}),this.fireT-=t,this.fireT<=0&&this.tele<=0&&!e.dead&&(this.tele=1.1,this.h.sound("hiss",.7)),this.tele>0){if(this.tele-=t,this.eyeL.material=this.eyeR.material=this.redEye,this.eyeL.scale.y=this.eyeR.scale.y=2.2,this.mouth.scale.set(1.6,3.4,1),this.tele<=0){this.fireT=n===1?3.6:2.2;const c=Ne(this.pos.x,this.pos.y,this.pos.z),u=Ne(e.pos.x+e.vel.x*.5,e.pos.y+1,e.pos.z+e.vel.z*.5).sub(c);this.shootProj(c,u,{speed:13,size:2,color:16769184,emissive:16736272,radius:3.6,ds:.6,effect:["burn",5],life:9})}}else this.eyeL.material=this.eyeR.material=this.mouth.material,this.eyeL.scale.y=this.eyeR.scale.y=1,this.mouth.scale.set(1,1,1)}}class fx extends Ri{constructor(t,e,n){super(t,e,n,{name:"HEROBRINE",type:"herobrine",maxHp:400,hitbox:{hx:.5,hy:1,hz:.5,oy:1},scale:1.35,burstColor:[1,1,1]}),this.vel=Ne(),this.hw=.4,this.hh=2.4,this.tpT=5,this.boltT=4,this.walk=0,this.meleeT=0,this.minionT=8;const s=this.mat(14724236),r=this.mat(2794936),a=this.mat(3817372),l=this.mat(16777215,0,!0);this.head=this.group(0,1.5,0),this.box(.5,.5,.5,s,0,.25,0,this.head),this.box(.5,.14,.5,this.mat(3810322),0,.46,0,this.head);for(const o of[-1,1])this.box(.16,.1,.06,l,o*.13,.3,.26,this.head);this.box(.5,.75,.25,r,0,1.125,0),this.legL=this.group(-.125,.75,0),this.box(.25,.75,.25,a,0,-.375,0,this.legL),this.legR=this.group(.125,.75,0),this.box(.25,.75,.25,a,0,-.375,0,this.legR),this.armL=this.group(-.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armL),this.armR=this.group(.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armR),this.aura=new cv(16777215,0,14),this.root.add(this.aura),this.aura.position.y=1.5,this.h.toast("Una figura de ojos blancos te observa…"),this.h.sound("roar",.6)}phaseFor(t){return t>.6?1:t>.25?2:3}onPhase(t){this.h.sound("roar",1),t===2&&(this.h.toast("Las luces se apagan…"),this.tpT=1),t===3&&(this.h.toast("¡HEROBRINE LEVITA! Cuidado con sus rayos"),this.vel.y=6)}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;this.yaw+=ni(Math.atan2(r,a)-this.yaw)*Math.min(1,t*6),this.h.darkness(s>=2?.55+Math.sin(this.t*5)*.1:.15);const o=s===1?3.4:4.4;if(s<3){this.vel.x+=(r/l*o*(l>2.4?1:0)-this.vel.x)*Math.min(1,t*6),this.vel.z+=(a/l*o*(l>2.4?1:0)-this.vel.z)*Math.min(1,t*6);const u=Js(n,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t);(u.hitX||u.hitZ)&&u.onGround&&(this.vel.y=9)}else{const u=e.pos.y+5,h=14;this.pos.y+=(u-this.pos.y)*Math.min(1,t*1.5),l>h?(this.pos.x+=r/l*5*t,this.pos.z+=a/l*5*t):l<h-4&&(this.pos.x-=r/l*4*t,this.pos.z-=a/l*4*t)}this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.4;const c=Math.sin(this.walk)*.8;if(this.legL.rotation.x=c,this.legR.rotation.x=-c,this.armL.rotation.x=-c,this.armR.rotation.x=s===3?-1.4:c,this.root.position.set(this.pos.x,this.pos.y+(s===3?Math.sin(this.t*2)*.4:0),this.pos.z),this.root.rotation.y=this.yaw,this.aura.intensity=s>=3?3+Math.sin(this.t*12):0,this.tpT-=t,this.tpT<=0&&!e.dead){this.tpT=s===1?6.5:s===2?4:5,this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5);const u=e.lookDir(),h=Math.hypot(u.x,u.z)||1,f=Math.floor(e.pos.x-u.x/h*4),d=Math.floor(e.pos.z-u.z/h*4),g=n.topY(f,d);s<3&&g>0?(this.pos.set(f+.5,g+1,d+.5),this.vel.set(0,0,0)):this.pos.set(f+.5,e.pos.y+5,d+.5),this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5),this.h.sound("pop",1)}if(this.meleeT-=t,l<2.6&&Math.abs(e.pos.y-this.pos.y)<2.5&&this.meleeT<=0&&!e.dead&&s<3&&(this.meleeT=1.1,this.h.hurtPlayer(s===1?8:11,r/l*7,a/l*7),this.h.sound("hit",1)),this.boltT-=t,this.boltT<=0&&!e.dead){this.boltT=s===1?6:s===2?3.8:2.4;const u=e.pos.x,h=e.pos.z;if(this.h.burst(u,e.pos.y+.5,h,[1,1,.6],18,2),setTimeout(()=>{this.dead||this.h.strikeNear(u,h)},900),s===3){const f=Ne(this.pos.x,this.pos.y+2,this.pos.z),d=Ne(e.pos.x,e.pos.y+1,e.pos.z).sub(f);this.shootProj(f,d,{speed:18,size:.9,color:16777215,emissive:16777215,radius:2.2,ds:.45,effect:["burn",3]})}}s>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=11,this.h.minions()<5&&this.h.spawnMinion("zombie")))}dispose(){this.h.darkness(0),super.dispose()}}class dx extends Ri{constructor(t,e,n){super(t,e,n,{name:"REY SLIME",type:"slimeking",maxHp:260,hitbox:{hx:2.6,hy:2.6,hz:2.6,oy:2.6},scale:1.4,burstColor:[.4,1,.4]}),this.vel=Ne(),this.hw=3.2,this.hh=5.4,this.jumpT=2.5,this.onGround=!1,this.splitAt=[.75,.5,.25],this.squash=1;const s=new bn({color:6348896,emissive:1064976,transparent:!0,opacity:.72});this.flashMats.push(s);const r=this.mat(3119663,536584);this.slime=this.group(0,0,0),this.box(5,5,5,s,0,2.6,0,this.slime),this.box(2.2,2.2,2.2,r,0,2.6,0,this.slime);const a=this.mat(1060880,0,!0);for(const o of[-1,1])this.box(.7,.7,.2,a,o*1.2,3.1,2.55,this.slime);this.box(1.5,.3,.2,a,0,1.8,2.55,this.slime);const l=this.mat(15777840,3153920);this.box(3.4,.6,3.4,l,0,5.4,0,this.slime);for(const[o,c]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4],[0,1.6],[0,-1.6]])this.box(.5,.9,.5,l,o,6,c,this.slime);this.h.toast("El Rey Slime salta hacia ti. ¡Se divide al perder vida!")}phaseFor(t){return t>.5?1:t>.25?2:3}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Slime salta más rápido!")}onHit(){const t=this.hp/this.maxHp;for(;this.splitAt.length&&t<this.splitAt[0];){this.splitAt.shift();for(let e=0;e<4;e++)this.h.spawnMinion("slime");this.h.toast("¡Se divide en slimes!")}}tick(t,e,n){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;if(this.yaw+=ni(Math.atan2(r,a)-this.yaw)*Math.min(1,t*4),this.jumpT-=t,this.onGround&&(this.vel.x*=.8,this.vel.z*=.8,this.jumpT<=0&&!e.dead)){this.jumpT=s===1?2.6:s===2?1.8:1.2;const c=Math.min(l,22)/1.35*.95;this.vel.y=17,this.vel.x=r/l*c,this.vel.z=a/l*c,this.onGround=!1,this.squash=1.4,this.h.sound("pop",1)}const o=Js(n,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t,34);if(o.onGround&&!this.onGround){this.onGround=!0,this.squash=.6,this.h.sound("explode",.7);const c=s===1?8:11,u=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z);this.h.burst(this.pos.x,this.pos.y+.3,this.pos.z,[.4,1,.4],36,8),u<c&&Math.abs(e.pos.y-this.pos.y)<3&&!e.dead&&this.h.hurtPlayer(s===1?8:12,(e.pos.x-this.pos.x)/(u||1)*9,(e.pos.z-this.pos.z)/(u||1)*9);const h=Math.floor(this.pos.x),f=Math.floor(this.pos.z),d=Math.floor(this.pos.y)-1;for(let g=-3;g<=3;g++)for(let _=-3;_<=3;_++)g*g+_*_<=9&&n.getBlock(h+g,d,f+_)&&n.getBlock(h+g,d,f+_)!==D.BEDROCK&&Math.random()<.6&&n.setBlock(h+g,d,f+_,0)}(o.hitX||o.hitZ)&&(this.vel.x*=-.2,this.vel.z*=-.2),this.squash+=(1-this.squash)*Math.min(1,t*8),this.slime.scale.set(1/Math.sqrt(this.squash),this.squash,1/Math.sqrt(this.squash)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,l<3.2&&Math.abs(e.pos.y-this.pos.y)<4&&!e.dead&&(this.contactT=(this.contactT||0)-t)<=0&&(this.contactT=1,this.h.hurtPlayer(5,r/l*6,a/l*6))}}const Br={storm:{name:"Tormenta Wither",color:"#b060ff",hp:360,desc:"Colosal masa con tres cabezas. Rayo tractor, cráneos explosivos y un bloque de comandos como punto débil.",icon:"🌀"},dragon:{name:"Ender Dragon",color:"#e040ff",hp:300,desc:"Vuela en círculos, pica en picado y lanza aliento. Destruye sus 4 cristales para poder herirlo.",icon:"🐉",make:(i,t,e,n)=>new rx(i,t,e,n),up:16},wither:{name:"Wither",color:"#9aa8c8",hp:300,desc:"Lanza cráneos negros que envenenan. Con poca vida se acoraza y te persigue de cerca.",icon:"💀",make:(i,t,e)=>new ox(i,t,e),up:8},warden:{name:"Warden",color:"#3be8c8",hp:360,desc:"Ciego pero letal. Golpes devastadores y explosión sónica a distancia. Oscurece la pantalla.",icon:"👁",make:(i,t,e)=>new ax(i,t,e),up:0,ground:!0},guardian:{name:"Guardián Ancestral",color:"#70fff0",hp:240,desc:"Su láser carga y causa fatiga de minería. Sus espinas devuelven daño al golpearlo.",icon:"🐟",make:(i,t,e)=>new lx(i,t,e),up:6}};Object.assign(Br,{ravager:{name:"Devastador",color:"#b09070",hp:280,desc:"Bestia blindada que ruge y embiste arrasando todo. Tras cada embestida queda aturdido: ¡ataca entonces!",icon:"🐗",make:(i,t,e)=>new cx(i,t,e),ground:!0,dist:16},evoker:{name:"Invocador",color:"#e0c040",hp:220,desc:"Hechicero que se teletransporta, lanza hileras de colmillos y llama a vex voladores (se pueden golpear).",icon:"🧙",make:(i,t,e)=>new hx(i,t,e),up:4,dist:14},ghast:{name:"Ghast Gigante",color:"#f4f4f4",hp:200,desc:"Flota llorando y escupe enormes bolas de fuego. ¡Golpéalas para devolvérselas y hacerle un daño brutal!",icon:"👻",make:(i,t,e)=>new ux(i,t,e),up:14,dist:26},herobrine:{name:"Herobrine",color:"#ffffff",hp:400,desc:"Ojos blancos, teletransportes a tu espalda, rayos y oscuridad. Con poca vida levita. El jefe final.",icon:"👤",make:(i,t,e)=>new fx(i,t,e),ground:!0,dist:14},slimeking:{name:"Rey Slime",color:"#60e060",hp:260,desc:"Gigantesco, salta y aplasta con ondas expansivas. Se divide en slimes al perder vida.",icon:"🟢",make:(i,t,e)=>new dx(i,t,e),ground:!0,dist:18}});const px=["storm","dragon","wither","warden","guardian","ravager","evoker","ghast","herobrine","slimeking"],Ds=[{id:"logs",group:"Aprendiz",title:"Primeros pasos",desc:"Recoge 3 troncos",ev:"collect",target:D.LOG,n:3,reward:[[k.APPLE,4]],xp:8},{id:"table",group:"Aprendiz",title:"Carpintero",desc:"Fabrica una mesa de crafteo",ev:"craft",target:D.TABLE,n:1,reward:[[D.PLANKS,16]],xp:8},{id:"pick",group:"Aprendiz",title:"Minero",desc:"Fabrica un pico de piedra",ev:"craft",target:111,n:1,reward:[[k.COAL,8]],xp:10},{id:"torch",group:"Aprendiz",title:"Luz en la oscuridad",desc:"Fabrica 4 antorchas",ev:"craft",target:D.TORCH,n:4,reward:[[k.COAL,8]],xp:10},{id:"iron",group:"Aprendiz",title:"Fundidor",desc:"Consigue un lingote de hierro",ev:"collect",target:k.IRON,n:1,reward:[[k.COAL,16]],xp:15},{id:"diamond",group:"Aprendiz",title:"¡Diamantes!",desc:"Consigue un diamante",ev:"collect",target:k.DIAMOND,n:1,reward:[[k.GOLD,6]],xp:25},{id:"k_zombie",group:"Cazador",title:"Cazador de zombis",desc:"Derrota 3 zombis",ev:"kill",target:"zombie",n:3,reward:[[k.STEAK,4]],xp:15},{id:"k_skeleton",group:"Cazador",title:"Huesos rotos",desc:"Derrota 3 esqueletos",ev:"kill",target:"skeleton",n:3,reward:[[k.STEAK,4]],xp:18},{id:"k_creeper",group:"Cazador",title:"Silencio…",desc:"Derrota 2 creepers",ev:"kill",target:"creeper",n:2,reward:[[k.GOLD,4]],xp:18},{id:"k_spider",group:"Cazador",title:"Aracnofobia",desc:"Derrota 2 arañas",ev:"kill",target:"spider",n:2,reward:[[k.GOLD,4]],xp:16},{id:"pearl",group:"Cazador",title:"Ojos que miran",desc:"Consigue una perla de Ender",ev:"collect",target:k.PEARL,n:1,reward:[[k.DIAMOND,3]],xp:30},{id:"obsidian",group:"Dimensiones",title:"Cristal volcánico",desc:"Consigue obsidiana (8 adoquines + 1 diamante = 2)",ev:"collect",target:D.OBSIDIAN,n:1,reward:[[k.COAL,12]],xp:20},{id:"d_nether",group:"Dimensiones",title:"Una puerta al infierno",desc:"Entra al Nether (marco 4x5 de obsidiana + encendedor)",ev:"dim",target:"nether",n:1,reward:[[k.GOLD,8],[k.DIAMOND,4]],xp:80},{id:"k_blaze",group:"Dimensiones",title:"Fuego cruzado",desc:"Derrota a 2 blazes",ev:"kill",target:"blaze",n:2,reward:[[k.DIAMOND,4]],xp:40},{id:"k_piglin",group:"Dimensiones",title:"Oro maldito",desc:"Derrota a 3 piglins zombificados",ev:"kill",target:"piglin",n:3,reward:[[k.GOLD,8]],xp:35},{id:"d_end",group:"Dimensiones",title:"El fin de todo",desc:"Entra al End (12 marcos con ojo de Ender)",ev:"dim",target:"end",n:1,reward:[[k.STAR,1],[k.DIAMOND,8]],xp:150},{id:"b_storm",group:"Jefes",title:"Domador de la tormenta",desc:"Derrota a la Tormenta Wither",ev:"boss",target:"storm",n:1,reward:[[k.STAR,1],[k.DIAMOND,8]],xp:150},{id:"b_dragon",group:"Jefes",title:"¿El final?",desc:"Derrota al Ender Dragon",ev:"boss",target:"dragon",n:1,reward:[[k.STAR,1],[k.DIAMOND,8]],xp:150},{id:"b_wither",group:"Jefes",title:"Más allá de los huesos",desc:"Derrota al Wither",ev:"boss",target:"wither",n:1,reward:[[k.STAR,1],[k.DIAMOND,8]],xp:150},{id:"b_warden",group:"Jefes",title:"Silencio absoluto",desc:"Derrota al Warden",ev:"boss",target:"warden",n:1,reward:[[k.STAR,1],[k.DIAMOND,8]],xp:150},{id:"b_guardian",group:"Jefes",title:"La mirada del océano",desc:"Derrota al Guardián Ancestral",ev:"boss",target:"guardian",n:1,reward:[[k.STAR,1],[k.DIAMOND,8]],xp:150},{id:"b_ravager",group:"Jefes",title:"Contra la embestida",desc:"Derrota al Devastador",ev:"boss",target:"ravager",n:1,reward:[[k.STAR,1],[k.DIAMOND,8]],xp:150},{id:"b_evoker",group:"Jefes",title:"Colmillos y vex",desc:"Derrota al Invocador",ev:"boss",target:"evoker",n:1,reward:[[k.STAR,1],[k.DIAMOND,8]],xp:150},{id:"b_ghast",group:"Jefes",title:"Devuélvesela",desc:"Derrota al Ghast Gigante",ev:"boss",target:"ghast",n:1,reward:[[k.STAR,1],[k.DIAMOND,8]],xp:150},{id:"b_slime",group:"Jefes",title:"Aplastado",desc:"Derrota al Rey Slime",ev:"boss",target:"slimeking",n:1,reward:[[k.STAR,1],[k.DIAMOND,8]],xp:150},{id:"b_hero",group:"Jefes",title:"Más allá del mito",desc:"Derrota a Herobrine",ev:"boss",target:"herobrine",n:1,reward:[[k.STAR,2],[k.DIAMOND,16]],xp:250},{id:"master",group:"Jefes",title:"★ LEYENDA DE LOS JEFES ★",desc:"Derrota a los 10 jefes de Minecraft",ev:"bossall",target:null,n:10,reward:[[k.STAR,5],[k.DIAMOND,32],[k.GOLD,32]],xp:500}];class mx{constructor(t){this.h=t,this.progress={},this.done={},this.bosses=new Set}event(t,e,n=1){for(const s of Ds)this.done[s.id]||s.ev!==t||s.target!==null&&s.target!==e||(this.progress[s.id]=Math.min(s.n,(this.progress[s.id]||0)+n),this.progress[s.id]>=s.n&&this.complete(s));if(t==="boss"){this.bosses.add(e);const s=Ds.find(r=>r.id==="master");this.done.master||(this.progress.master=this.bosses.size,this.bosses.size>=s.n&&this.complete(s))}}complete(t){this.done[t.id]=!0,this.progress[t.id]=t.n,this.h.reward(t.reward),this.h.xp(t.xp),this.h.sound("craft"),this.h.toast(t.id==="master"?"🏆 ¡ERES UNA LEYENDA! Has derrotado a todos los jefes":`✔ Misión completada: ${t.title}`)}active(t=3){return Ds.filter(e=>!this.done[e.id]).slice(0,t)}total(){return Ds.length}completed(){return Ds.filter(t=>this.done[t.id]).length}toJSON(){return{progress:this.progress,done:this.done,bosses:[...this.bosses]}}load(t){t&&(this.progress=t.progress||{},this.done=t.done||{},this.bosses=new Set(t.bosses||[]))}}const fr=420,dr=24;class gx{constructor(t){this.pos=new Float32Array(fr*3),this.vel=new Float32Array(fr*3);for(let n=0;n<fr;n++)this.reset(n,!0);const e=new Ke;e.setAttribute("position",new _n(new Float32Array(fr*3),3)),this.pts=new Pc(e,new la({color:16747056,size:3,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1,blending:wr})),this.pts.frustumCulled=!1,this.pts.visible=!1,t.add(this.pts),this.t=0}reset(t,e){this.pos[t*3]=(Math.random()-.5)*2*dr,this.pos[t*3+1]=e?(Math.random()-.5)*2*dr:-dr,this.pos[t*3+2]=(Math.random()-.5)*2*dr,this.vel[t*3]=(Math.random()-.5)*.6,this.vel[t*3+1]=.4+Math.random()*1.2,this.vel[t*3+2]=(Math.random()-.5)*.6}update(t,e,n){const s=n==="nether"||n==="end";if(this.pts.visible=s,!s)return;this.t+=t;const r=n==="nether",a=this.pts.geometry.attributes.position.array;this.pts.material.color.set(r?16742952:11567359),this.pts.material.size=r?3:2.5;for(let l=0;l<fr;l++){const o=l*3;this.pos[o]+=(this.vel[o]+Math.sin(this.t+l)*.3)*t,this.pos[o+1]+=this.vel[o+1]*(r?1:.5)*t,this.pos[o+2]+=(this.vel[o+2]+Math.cos(this.t*.8+l)*.3)*t,this.pos[o+1]>dr&&this.reset(l,!1),a[o]=e.position.x+this.pos[o],a[o+1]=e.position.y+this.pos[o+1],a[o+2]=e.position.z+this.pos[o+2]}this.pts.geometry.attributes.position.needsUpdate=!0}}const Fi=.3,yu=1.8,nl=1.62,Su=28,_x=8.6,vx=4.4,xx=7,Mx=12;class yx{constructor(t,e){this.world=t,this.camera=e,this.pos=new P(0,40,0),this.vel=new P,this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headUnder=!1,this.keys=new Set,this.mode="survival",this.hp=20,this.food=20,this.air=10,this.fallStart=null,this.foodTimer=0,this.regenTimer=0,this.airTimer=0,this.starveTimer=0,this.invuln=0,this.dead=!1,this.stepDist=0,this.events={onHurt:null,onLand:null,onStep:null,onSplash:null,onDeath:null,onVoid:null},this.inLava=!1,this.spawn=new P,this.wind={x:0,z:0},this.push={x:0,y:0,z:0},this.effects={poison:0,fatigue:0,burn:0},this.poisonT=0,this.burnT=0}collides(t,e,n){const s=this.world;for(let r=Math.floor(e);r<=Math.floor(e+yu-.001);r++)for(let a=Math.floor(n-Fi);a<=Math.floor(n+Fi);a++)for(let l=Math.floor(t-Fi);l<=Math.floor(t+Fi);l++)if(s.isSolid(l,r,a))return!0;return!1}intersectsBlock(t,e,n){return this.pos.x+Fi>t&&this.pos.x-Fi<t+1&&this.pos.y+yu>e&&this.pos.y<e+1&&this.pos.z+Fi>n&&this.pos.z-Fi<n+1}get eye(){return new P(this.pos.x,this.pos.y+nl,this.pos.z)}lookDir(){return new P(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}damage(t,e=0,n=0){this.mode==="creative"||this.dead||this.invuln>0||(this.hp=Math.max(0,this.hp-t),this.invuln=.5,this.vel.x+=e,this.vel.z+=n,(e||n)&&(this.vel.y=Math.max(this.vel.y,5)),this.events.onHurt&&this.events.onHurt(t),this.hp<=0&&(this.dead=!0,this.events.onDeath&&this.events.onDeath()))}heal(t){this.hp=Math.min(20,this.hp+t)}eat(t){this.food=Math.min(20,this.food+t)}respawn(){this.hp=20,this.food=20,this.air=10,this.dead=!1,this.invuln=2,this.effects.poison=0,this.effects.fatigue=0,this.effects.burn=0,this.pos.copy(this.spawn),this.vel.set(0,0,0),this.fallStart=null}update(t){if(t=Math.min(t,.05),this.dead){this.camera.position.set(this.pos.x,this.pos.y+.4,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,.6,"YXZ");return}const e=this.keys,n=this.world;this.invuln=Math.max(0,this.invuln-t);const s=Math.floor(this.pos.x),r=Math.floor(this.pos.z),a=this.inWater;this.inWater=n.isLiquid(s,Math.floor(this.pos.y+.3),r),this.inLava=n.getBlock(s,Math.floor(this.pos.y+.3),r)===D.LAVA||n.getBlock(s,Math.floor(this.pos.y+1.2),r)===D.LAVA,this.inLava&&this.mode==="survival"&&(this.effects.burn=Math.max(this.effects.burn,6),this.damage(4));const l=n.getBlock(s,Math.floor(this.pos.y-.15),r)===D.SOUL_SAND;this.headUnder=n.isLiquid(s,Math.floor(this.pos.y+nl),r),this.inWater&&!a&&this.vel.y<-4&&this.events.onSplash&&this.events.onSplash();const o=(e.has("KeyW")?1:0)-(e.has("KeyS")?1:0),c=(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),u=e.has("ShiftLeft")&&o>0&&!(this.mode==="survival"&&this.food<=6);let h=this.flying?Mx:u?xx:vx;this.inWater&&!this.flying&&(h*=.6),l&&!this.flying&&(h*=.55);const f=Math.sin(this.yaw),d=Math.cos(this.yaw);let g=-f*o+d*c,_=-d*o-f*c;const m=Math.hypot(g,_);m>0&&(g/=m,_/=m),this.vel.x=g*h+(this.inWater?0:this.wind.x),this.vel.z=_*h+(this.inWater?0:this.wind.z),this.flying?(this.vel.y=((e.has("Space")?1:0)-(e.has("KeyQ")?1:0))*h,this.fallStart=null):this.inWater?(this.vel.y-=Su*.25*t,this.vel.y=Math.max(this.vel.y,-3)*(1-2*t),e.has("Space")&&(this.vel.y=Math.min(this.vel.y+22*t,3.6)),this.fallStart=null):(this.vel.y-=Su*t,this.vel.y<-50&&(this.vel.y=-50),e.has("Space")&&this.onGround&&(this.vel.y=_x,this.onGround=!1)),this.vel.x+=this.push.x,this.vel.z+=this.push.z,this.vel.y+=this.push.y*t;const p=this.onGround,b=2,S=t/b;this.onGround=!1;const v=this.pos.x,L=this.pos.z;for(let T=0;T<b;T++)for(const w of["x","z","y"]){const C=this.vel[w]*S;C!==0&&(this.pos[w]+=C,this.collides(this.pos.x,this.pos.y,this.pos.z)&&(this.pos[w]-=C,w==="y"&&this.vel.y<0&&(this.onGround=!0),this.vel[w]=0))}if(!this.onGround&&!this.inWater&&!this.flying&&(this.fallStart===null||this.pos.y>this.fallStart)&&(this.fallStart=this.pos.y),this.onGround&&!p&&this.fallStart!==null){const T=this.fallStart-this.pos.y;T>3&&this.mode==="survival"&&this.damage(Math.floor(T-3)),T>1.2&&this.events.onLand&&this.events.onLand(T),this.fallStart=null}if(this.onGround&&(this.fallStart=null),this.onGround&&!this.flying&&(this.stepDist+=Math.hypot(this.pos.x-v,this.pos.z-L),this.stepDist>(u?2.2:1.7)&&(this.stepDist=0,this.events.onStep&&this.events.onStep())),this.pos.y<-30&&(this.events.onVoid?this.events.onVoid():(this.pos.y=70,this.vel.set(0,0,0),this.damage(4))),this.effects.fatigue>0&&(this.effects.fatigue-=t),this.effects.burn>0&&(this.inWater&&!this.inLava?this.effects.burn=0:(this.effects.burn-=t,this.burnT+=t,this.burnT>=.8&&(this.burnT=0,this.mode==="survival"&&this.damage(1)))),this.effects.poison>0&&(this.effects.poison-=t,this.poisonT+=t,this.poisonT>=1&&(this.poisonT=0,this.mode==="survival"&&this.hp>1&&(this.hp-=1,this.events.onHurt&&this.events.onHurt(1)))),this.mode==="survival"){this.headUnder?(this.airTimer+=t,this.airTimer>=1&&(this.airTimer=0,this.air>0?this.air--:this.damage(2))):(this.airTimer=0,this.air=Math.min(10,this.air+t*6));const T=Math.hypot(this.vel.x,this.vel.z)>.1;this.foodTimer+=t*(u?3:T?1:.25),this.foodTimer>22&&(this.foodTimer=0,this.food=Math.max(0,this.food-1)),this.regenTimer+=t,this.food>=18&&this.hp<20&&this.regenTimer>3?(this.regenTimer=0,this.heal(1),this.foodTimer+=6):this.food<=0&&this.regenTimer>4&&(this.regenTimer=0,this.hp>1&&this.damage(1))}else this.air=10,this.hp=20,this.food=20;this.camera.position.set(this.pos.x,this.pos.y+nl,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}class Sx{constructor(){this.slots=Array(36).fill(null),this.selected=0}held(){return this.slots[this.selected]}add(t,e=1){const n=vi(t);for(const s of this.slots)if(s&&s.id===t&&s.n<n){const r=Math.min(e,n-s.n);if(s.n+=r,e-=r,!e)return 0}for(let s=0;s<36&&e>0;s++)if(!this.slots[s]){const r=Math.min(e,n);this.slots[s]={id:t,n:r,d:0},e-=r}return e}canAdd(t){const e=vi(t);return this.slots.some(n=>!n||n.id===t&&n.n<e)}consumeHeld(t=1){const e=this.slots[this.selected];e&&(e.n-=t,e.n<=0&&(this.slots[this.selected]=null))}wearHeld(t=1){const e=this.slots[this.selected],n=cs(e);return n?(e.d=(e.d||0)+t,e.d>=n.dur?(this.slots[this.selected]=null,!0):!1):!1}toJSON(){return{slots:this.slots,selected:this.selected}}load(t){t&&(this.slots=t.slots,this.selected=t.selected||0)}}const bx=600,bu=new yt(1,1,1),Ex=new yt(2316488),wx=new yt(7370367),Tx=new yt(14542591),Ax=new yt(8900331),Rx=new yt(461596),Cx=new yt(16747088),il=(i,t,e)=>{const n=Math.max(0,Math.min(1,(e-i)/(t-i)));return n*n*(3-2*n)};function Lx(){const e=Array.from({length:64},()=>Math.random()),n=(o,c)=>e[(c%8+8)%8*8+(o%8+8)%8],s=document.createElement("canvas");s.width=s.height=64;const r=s.getContext("2d"),a=r.createImageData(64,64);for(let o=0;o<64;o++)for(let c=0;c<64;c++){const u=c/64*8,h=o/64*8,f=Math.floor(u),d=Math.floor(h),g=u-f,_=h-d,m=g*g*(3-2*g),p=_*_*(3-2*_),b=(n(f,d)*(1-m)+n(f+1,d)*m)*(1-p)+(n(f,d+1)*(1-m)+n(f+1,d+1)*m)*p,S=(o*64+c)*4,v=b>.56?215:0;a.data[S]=a.data[S+1]=a.data[S+2]=255,a.data[S+3]=v}r.putImageData(a,0,0);const l=new Vn(s);return l.wrapS=l.wrapT=Bo,l.magFilter=_e,l.minFilter=_e,l.generateMipmaps=!1,l}function Eu(i){const t=document.createElement("canvas");t.width=t.height=16,i(t.getContext("2d"));const e=new Vn(t);return e.magFilter=_e,e.minFilter=_e,e.generateMipmaps=!1,e}class Px{constructor(t,e,n){this.scene=t,this.camera=e,this.materials=n,this.time=.08,this.dim="overworld",this.daylight=1,this.wet=0,this.flash=0,this.cloudX=0,this.cloudZ=0,this.root=new Ee,t.add(this.root),this.domeMat=new un({side:mn,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{top:{value:new yt(4884696)},hor:{value:new yt(10147056)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = normalize(vP).y; float t = smoothstep(-0.02, 0.6, h); gl_FragColor = vec4(mix(hor, top, t), 1.0); }"}),this.dome=new Ut(new Dc(420,24,14),this.domeMat),this.dome.renderOrder=-30,this.root.add(this.dome);const s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d"),a=r.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,240,180,0.9)"),a.addColorStop(.25,"rgba(255,200,110,0.35)"),a.addColorStop(1,"rgba(255,180,80,0)"),r.fillStyle=a,r.fillRect(0,0,128,128),this.glow=new xf(new Cc({map:new Vn(s),blending:wr,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),this.glow.scale.set(260,260,1),this.glow.renderOrder=-11,this.root.add(this.glow);const l=Eu(f=>{f.fillStyle="#fff6b0",f.fillRect(0,0,16,16),f.fillStyle="#ffe14a",f.fillRect(2,2,12,12),f.fillStyle="#fffbe0",f.fillRect(5,5,6,6)}),o=Eu(f=>{f.fillStyle="#e8ecf2",f.fillRect(0,0,16,16),f.fillStyle="#b8bfcc",f.fillRect(3,4,3,3),f.fillRect(9,8,4,3),f.fillRect(5,11,2,2)}),c=(f,d)=>{const g=new Ut(new Ei(d,d),new Ie({map:f,transparent:!0,fog:!1,depthWrite:!1,depthTest:!1}));return g.renderOrder=-10,this.root.add(g),g};this.sun=c(l,60),this.moon=c(o,40);const u=new Float32Array(900*3);for(let f=0;f<900;f++){const d=Math.random()*2-1,g=Math.random()*Math.PI*2,_=Math.sqrt(1-d*d);u[f*3]=Math.cos(g)*_*300,u[f*3+1]=d*300,u[f*3+2]=Math.sin(g)*_*300}const h=new Ke;h.setAttribute("position",new _n(u,3)),this.starMat=new la({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,fog:!1,depthWrite:!1}),this.stars=new Pc(h,this.starMat),this.stars.renderOrder=-11,this.root.add(this.stars),this.cloudTex=Lx(),this.cloudMat=new Ie({map:this.cloudTex,transparent:!0,fog:!1,depthWrite:!1,side:yn}),this.clouds=new Ut(new Ei(900,900),this.cloudMat),this.clouds.rotation.x=-Math.PI/2,t.add(this.clouds),this.cloudMat2=new Ie({map:this.cloudTex.clone(),transparent:!0,fog:!1,depthWrite:!1,side:yn}),this.cloudMat2.map.needsUpdate=!0,this.clouds2=new Ut(new Ei(900,900),this.cloudMat2),this.clouds2.rotation.x=-Math.PI/2,t.add(this.clouds2),this.hemi=new av(12572927,8022608,2),this.sunLight=new uv(16773853,2.8),this.shadowExt=64,this.shadowOn=!1,t.add(this.hemi,this.sunLight,this.sunLight.target),this.lightDir=new P(.5,1,.3).normalize(),this.sky=new yt,this.tint=new yt}setShadows(t,e,n){const s=this.sunLight,r=s.shadow.mapSize.x!==e||this.shadowExt!==n;if(this.shadowOn=t,this.shadowExt=n,t){s.shadow.mapSize.set(e,e);const a=s.shadow.camera;a.left=-n,a.right=n,a.top=n,a.bottom=-n,a.near=10,a.far=340,a.updateProjectionMatrix(),s.shadow.bias=-4e-4,s.shadow.normalBias=.35*(n/64)*(2048/e)**.5,s.shadow.radius=2,r&&s.shadow.map&&(s.shadow.map.dispose(),s.shadow.map=null)}}updateOther(t,e,n,s){const r=this.dim==="nether";this.daylight=0,this.wet=0,this.flash=0;const a=r?new yt(5903368):new yt(1838894),l=r?new yt(1836291):new yt(262666);s&&r&&(a.set(11024392),l.set(6297600)),this.sky.copy(r?new yt(3804166):new yt(1182236)),s&&r&&this.sky.set(11024392),this.scene.background=this.sky,this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:n*(r?.18:.5),this.scene.fog.far=s?r?5:18:n*(r?.75:1.1),this.domeMat.uniforms.hor.value.copy(a),this.domeMat.uniforms.top.value.copy(l),this.root.position.copy(this.camera.position),this.sun.visible=this.moon.visible=this.glow.visible=!1,this.clouds.visible=this.clouds2.visible=!1,this.stars.visible=!r,this.starMat.opacity=r?0:1,this.starMat.size=2.4,this.stars.rotation.y+=t*.01,this.hemi.color.set(r?16747098:11047167),this.hemi.groundColor.set(r?6955016:2628672),this.hemi.intensity=r?1.9:1.1,this.sunLight.color.set(r?16738864:10125567),this.sunLight.intensity=r?.35:.7,this.sunLight.castShadow=!1,this.lightDir.set(.3,1,.2).normalize(),this.sunLight.target.position.copy(e),this.sunLight.position.set(e.x+30,e.y+100,e.z+20)}setDimension(t){this.dim=t;const e=t==="overworld";this.sun.visible=this.moon.visible=this.glow.visible=e,this.clouds.visible=e,this.stars.visible=!0,this.starMat.size=1.6}update(t,e,n,s,r={x:0,z:0,s:.12}){if(this.dim!=="overworld")return this.updateOther(t,e,n,s);this.time=(this.time+t/bx)%1;const a=this.time*Math.PI*2,l=Math.sin(a),o=Math.cos(a),c=il(-.12,.25,l),u=this.wet,h=this.flash;this.daylight=c*(1-.55*u),this.sky.copy(Rx).lerp(Ax,this.daylight);const f=Math.max(0,1-Math.abs(l)*4.5)*.7;this.sky.lerp(Cx,f*(1-u)),u>0&&this.sky.lerp(wx.clone().multiplyScalar(.12+.88*c),u*.8),h>0&&this.sky.lerp(Tx,h*.7),s&&this.sky.set(1718906).multiplyScalar(.4+this.daylight*.6),this.scene.background=this.sky;const d=c*(1-u);this.domeMat.uniforms.hor.value.copy(this.sky).lerp(bu,.22*d),this.domeMat.uniforms.top.value.copy(this.sky).multiplyScalar(.7).lerp(Ex,.3*d),this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:n*.6,this.scene.fog.far=s?18:n*(1-.3*u),s||(this.scene.fog.near=n*(.6-.25*u)),.2+.8*this.daylight;const g=il(-.04,.3,l)*(1-.65*u),_=il(0,-.3,l)*(1-.7*u),m=Math.max(0,1-Math.abs(l)*3.2)*(1-u),p=new P(o,l,.28).normalize(),b=l>-.04;this.lightDir.copy(b?p:p.clone().negate()),this.sunLight.color.setRGB(1,.95-.38*m,.88-.62*m),b||this.sunLight.color.setRGB(.55,.66,1),this.sunLight.intensity=(b?3.4*g:.6*_)+h*2.5,this.hemi.color.copy(this.sky).lerp(bu,.6),this.hemi.groundColor.setRGB(.42,.36,.28).multiplyScalar(.4+.6*this.daylight),this.hemi.intensity=.3+2.5*this.daylight+.3*_+h*3;const S=this.shadowOn?2*this.shadowExt/Math.max(256,this.sunLight.shadow.mapSize.x):1,v=Math.round(e.x/S)*S,L=Math.round(e.y/S)*S,T=Math.round(e.z/S)*S;this.sunLight.target.position.set(v,L,T),this.sunLight.position.set(v+this.lightDir.x*160,L+this.lightDir.y*160,T+this.lightDir.z*160),this.sunLight.castShadow=this.shadowOn&&this.sunLight.intensity>.05,this.root.position.copy(this.camera.position);const w=220;this.sun.position.set(o*w,l*w,30),this.glow.position.set(o*w*.98,l*w*.98,30),this.glow.material.opacity=Math.max(0,Math.min(1,(l+.15)*1.6))*(1-u)*(s?0:1),this.moon.position.set(-o*w,-l*w,30),this.sun.lookAt(this.camera.position),this.moon.lookAt(this.camera.position),this.stars.rotation.z=a,this.starMat.opacity=Math.max(0,1-this.daylight*1.6)*(s?0:1)*(1-u),this.sun.material.opacity=this.moon.material.opacity=1-u*.95;const C=1.2+r.s*10;this.cloudX+=r.x/(r.s||1)*C*t,this.cloudZ+=r.z/(r.s||1)*C*t;const M=768,x=(.3+.7*c)*(1-.5*u);for(const[R,I,U,H]of[[this.clouds,this.cloudMat,150,1],[this.clouds2,this.cloudMat2,142,.7]])R.position.set(e.x,U,e.z),I.map.repeat.set(900/M,900/M),I.map.offset.set((e.x+this.cloudX*H)/M+(H<1?.37:0),-(e.z+this.cloudZ*H)/M),I.color.setScalar(x*(H<1?.8:1));this.cloudMat.opacity=.9,this.cloudMat2.opacity=Math.min(.95,u*1.1),this.clouds2.visible=u>.05}}const ue=i=>document.getElementById(i);function gi(i,t={}){const e=document.createElement("div");if(e.className="slot"+(t.active?" active":""),t.group&&(e.dataset.g=t.group,e.dataset.i=t.index),i){const n=document.createElement("img");if(n.src=Nf(i.id),Lf(i.id)&&(n.className="flat"),e.appendChild(n),e.title=ca(i.id).name,i.n>1){const r=document.createElement("span");r.className="n",r.textContent=i.n,e.appendChild(r)}const s=cs(i);if(s&&i.d>0){const r=document.createElement("div");r.className="dur";const a=Math.max(0,1-i.d/s.dur);r.innerHTML=`<i style="width:${a*100}%;background:${a>.5?"#6f6":a>.2?"#fd4":"#f55"}"></i>`,e.appendChild(r)}}if(t.key){const n=document.createElement("span");n.className="k",n.textContent=t.key,e.appendChild(n)}return e}class Dx{constructor(t){this.g=t,this.cursor=null,this.craft=[],this.size=2,this.isOpen=!1,this.toastT=0,this.furnace=null,this.sprites=Bv();const e=ue("inv");e.addEventListener("mousedown",n=>this.onDown(n)),e.addEventListener("contextmenu",n=>n.preventDefault()),document.addEventListener("mousemove",n=>{const s=ue("cursorItem");s.style.left=n.clientX+"px",s.style.top=n.clientY+"px"})}toast(t){const e=ue("toast");e.textContent=t,e.style.opacity=1,clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.style.opacity=0,1600)}renderHotbar(){const t=ue("hotbar");t.innerHTML="";for(let e=0;e<9;e++){const n=gi(this.g.inv.slots[e],{active:e===this.g.inv.selected,key:e+1});n.onclick=()=>{this.g.inv.selected=e,this.g.onSelect()},t.appendChild(n)}}renderStats(){const t=this.g.player,e=this.g.getMode()==="survival",n=this.sprites;ue("bars").style.visibility=e?"visible":"hidden";const s=(c,u)=>{let h="";for(let f=0;f<10;f++)h+=`<img class="hs" src="${u[c>=f*2+2?"full":c===f*2+1?"half":"empty"]}">`;return h},r=Math.ceil(t.hp),a=Math.ceil(t.food),l=r+","+a+","+Math.ceil(t.air)+","+t.headUnder+","+e+","+(r<=6?Math.floor(performance.now()/250)%2:0);if(l===this._statKey)return;this._statKey=l,ue("hearts").innerHTML=s(r,n.heart),ue("hearts").classList.toggle("low",r<=6),ue("food").innerHTML=s(a,n.food);const o=Math.ceil(t.air);ue("air").innerHTML=t.headUnder&&e?Array.from({length:10},(c,u)=>`<img class="hs" src="${o>u?n.bubble.full:n.bubble.empty}">`).join(""):""}open(t,e=null){this.furnace=t==="furnace"?e:null,t==="furnace"&&(t=2),this.size=t,this.craft=Array(t*t).fill(null),this.isOpen=!0;const n=this.g.getMode()==="creative";ue("inv").classList.remove("hidden"),ue("invTitle").textContent=this.furnace?"Horno":n?"Creativo":t===3?"Mesa de crafteo":"Inventario",ue("craftArea").classList.toggle("hidden",n||!!this.furnace),ue("furnaceArea").classList.toggle("hidden",!this.furnace),ue("paletteWrap").classList.toggle("hidden",!n||!!this.furnace),ue("craftGrid").style.gridTemplateColumns=`repeat(${t}, 46px)`,this.render()}close(){if(!this.isOpen)return;this.isOpen=!1,this.furnace=null;const t=e=>{if(!e)return;const n=this.g.inv.add(e.id,e.n);n&&this.g.dropItem(e.id,n)};this.craft.forEach(t),this.craft=[],t(this.cursor),this.cursor=null,ue("inv").classList.add("hidden"),ue("cursorItem").classList.add("hidden"),this.renderHotbar()}recipe(){const t=Lv(this.craft.map(e=>e?e.id:0),this.size);return t?{id:t.out,n:t.n,d:0}:null}render(){const t=this.g,e=ue("invMain");e.innerHTML="";for(let r=9;r<36;r++)e.appendChild(gi(t.inv.slots[r],{group:"inv",index:r}));const n=ue("invHot");n.innerHTML="";for(let r=0;r<9;r++)n.appendChild(gi(t.inv.slots[r],{group:"inv",index:r,active:r===t.inv.selected}));if(this.furnace){const r=this.furnace;ue("fIn").innerHTML="",ue("fIn").appendChild(gi(r.slots[0],{group:"furnace",index:0})),ue("fFuel").innerHTML="",ue("fFuel").appendChild(gi(r.slots[1],{group:"furnace",index:1})),ue("fOut").innerHTML="",ue("fOut").appendChild(gi(r.slots[2],{group:"furnace",index:2})),this.furnaceBars()}else if(t.getMode()==="creative"){const r=ue("palette");r.innerHTML="",[...Object.keys(We).map(Number),...Object.keys(Ki).map(Number)].forEach(l=>r.appendChild(gi({id:l,n:1,d:0},{group:"pal",index:l})))}else{const r=ue("craftGrid");r.innerHTML="",this.craft.forEach((l,o)=>r.appendChild(gi(l,{group:"craft",index:o})));const a=ue("craftOut");a.innerHTML="",a.appendChild(gi(this.recipe(),{group:"out",index:0}))}const s=ue("cursorItem");this.cursor?(s.classList.remove("hidden"),s.innerHTML=`<img src="${Nf(this.cursor.id)}">${this.cursor.n>1?`<span class="n">${this.cursor.n}</span>`:""}`):s.classList.add("hidden"),this.renderHotbar()}furnaceBars(){const t=this.furnace;t&&(ue("fFlame").style.height=(t.burn>0?Math.min(100,t.burn/t.burnMax*100):0)+"%",ue("fArrow").style.width=Math.min(100,t.cook/Cf*100)+"%")}arr(t){return t==="inv"?this.g.inv.slots:t==="furnace"?this.furnace.slots:this.craft}onDown(t){const e=t.target.closest(".slot"),n=t.button===2;if(!e||!e.dataset.g){this.g.getMode()==="creative"&&t.target.closest("#paletteWrap")?(this.cursor=null,this.render()):!t.target.closest(".panel")&&this.cursor&&(this.g.dropItem(this.cursor.id,n?1:this.cursor.n),n&&this.cursor.n>1?this.cursor.n--:this.cursor=null,this.render());return}const s=e.dataset.g,r=+e.dataset.i;if(s==="pal"){this.cursor={id:r,n:n?1:vi(r),d:0},this.render();return}if(s==="out"){const c=this.recipe();if(!c||this.cursor&&!(this.cursor.id===c.id&&this.cursor.n+c.n<=vi(c.id)))return;this.cursor?this.cursor.n+=c.n:this.cursor={...c},this.craft=this.craft.map(u=>u&&u.n>1?{...u,n:u.n-1}:null),this.g.sound("craft"),this.g.onCraft&&this.g.onCraft(c.id,c.n),this.render();return}const a=this.arr(s),l=a[r],o=this.cursor;if(s==="furnace"&&r===2){if(!l)return;o?o.id===l.id&&o.n+l.n<=vi(o.id)&&(o.n+=l.n,a[2]=null):(this.cursor=l,a[2]=null),this.render();return}if(n){if(o)l?l.id===o.id&&l.n<vi(o.id)?(l.n++,o.n--,o.n<=0&&(this.cursor=null)):(a[r]=o,this.cursor=l):(a[r]={...o,n:1},o.n--,o.n<=0&&(this.cursor=null));else if(l){const c=Math.ceil(l.n/2);this.cursor={...l,n:c},l.n-=c,l.n<=0&&(a[r]=null)}}else if(!o)a[r]=null,this.cursor=l;else if(!l)a[r]=o,this.cursor=null;else if(l.id===o.id&&vi(o.id)>1){const c=Math.min(o.n,vi(o.id)-l.n);l.n+=c,o.n-=c,o.n<=0&&(this.cursor=null)}else a[r]=o,this.cursor=l;this.render()}}let Ue=null,Ko=null,Vi=null,Of=.5;function ha(){if(Ue)return!0;try{Ue=new(window.AudioContext||window.webkitAudioContext),Vi=Ue.createGain(),Vi.gain.value=Of,Vi.connect(Ue.destination),Ko=Ue.createBuffer(1,Ue.sampleRate,Ue.sampleRate);const i=Ko.getChannelData(0);for(let t=0;t<i.length;t++)i[t]=Math.random()*2-1;return!0}catch{return!1}}function Lr(){ha()&&Ue.state==="suspended"&&Ue.resume()}function Ix(i){Of=i,Vi&&(Vi.gain.value=i)}function An(i,t,e,n,s=0){if(!ha())return;const r=Ue.currentTime,a=Ue.createBufferSource();a.buffer=Ko;const l=Ue.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(t,r),s&&l.frequency.exponentialRampToValueAtTime(Math.max(40,t*s),r+i),l.Q.value=e;const o=Ue.createGain();o.gain.setValueAtTime(n,r),o.gain.exponentialRampToValueAtTime(.001,r+i),a.connect(l),l.connect(o),o.connect(Vi),a.start(r,Math.random()*.5,i)}function jn(i,t,e,n,s){if(!ha())return;const r=Ue.currentTime,a=Ue.createOscillator();a.type=i,a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(e,r+n);const l=Ue.createGain();l.gain.setValueAtTime(s,r),l.gain.exponentialRampToValueAtTime(.001,r+n),a.connect(l),l.connect(Vi),a.start(r),a.stop(r+n)}let Eo=null;function Ux(){if(Eo||!ha())return Eo;const i=(t,e,n)=>{const s=Ue.createBufferSource();s.buffer=Ko,s.loop=!0;const r=Ue.createBiquadFilter();r.type=t,r.frequency.value=e,r.Q.value=n;const a=Ue.createGain();return a.gain.value=0,s.connect(r),r.connect(a),a.connect(Vi),s.start(0,Math.random()*.5),{f:r,g:a}};return Eo={rain:i("highpass",1800,.3),rainLow:i("lowpass",5e3,.3),wind:i("bandpass",420,.9)},Eo}function wu(i,t,e=0){if(!Ue||Ue.state!=="running")return;const n=Ux();if(!n)return;const s=Ue.currentTime;n.rain.g.gain.setTargetAtTime(i*.16,s,.3),n.rainLow.g.gain.setTargetAtTime(i*.12,s,.3),n.wind.g.gain.setTargetAtTime(t*.5,s,.4),n.wind.f.frequency.setTargetAtTime(300+380*(.5+.5*Math.sin(e))+t*200,s,.3)}function nc(i,t=1){if(Ue)switch(i){case"break":An(.16,1400,1,.9,.4);break;case"place":An(.09,900,1,.7);break;case"step":An(.07,500,1,.25);break;case"hit":An(.08,2200,1,.5);break;case"hurt":jn("square",330,110,.22,.25);break;case"pop":jn("sine",500,1100,.1,.2);break;case"eat":An(.07,1800,2,.6),setTimeout(()=>An(.07,1600,2,.6),110);break;case"splash":An(.3,2500,.5,.6,.2);break;case"hiss":An(.6,6e3,.5,.4);break;case"explode":An(1.1,900,.7,1.4,.1),jn("sine",90,30,.8,.9);break;case"craft":jn("triangle",400,800,.15,.25);break;case"die":jn("sawtooth",300,40,.8,.3);break;case"oink":jn("sawtooth",220,150,.15,.12);break;case"moo":jn("sawtooth",130,100,.5,.12);break;case"thunder":An(3.2,380,.7,1.6*t,.12),setTimeout(()=>An(1.6,220,.8,.9*t,.2),450),jn("sine",60,25,2,.5*t);break;case"roar":An(1.5,500,.8,.9*t,.15),jn("sawtooth",95,32,1.5,.45*t);break;case"shoot":An(.3,3200,.8,.45*t,.25),jn("sine",700,180,.25,.2*t);break;case"groan":jn("sawtooth",110,70,.6,.14);break}}const Nx="minecraft-web",In="kv";let wo=null;function Qs(){return wo||(wo=new Promise((i,t)=>{const e=indexedDB.open(Nx,1);e.onupgradeneeded=()=>e.result.createObjectStore(In),e.onsuccess=()=>i(e.result),e.onerror=()=>t(e.error)}),wo)}const Fs=i=>new Promise((t,e)=>{i.onsuccess=()=>t(i.result),i.onerror=()=>e(i.error)}),ua=i=>new Promise((t,e)=>{i.oncomplete=t,i.onerror=()=>e(i.error),i.onabort=()=>e(i.error)});async function kr(i){return await Fs(i.get("index"))||[]}async function Ox(){const t=(await Qs()).transaction(In,"readwrite"),e=t.objectStore(In),n=await Fs(e.get("meta"));if(n){const s=await Fs(e.getAllKeys()),r=await kr(e),a="w"+Date.now().toString(36);for(const l of s)typeof l=="string"&&l.startsWith("c:")&&(e.put(await Fs(e.get(l)),`w:${a}:${l}`),e.delete(l));e.put(n,`w:${a}:meta`),e.delete("meta"),r.unshift({id:a,name:"Mundo antiguo",mode:n.mode,seed:n.seed,updated:Date.now(),created:Date.now(),played:0,level:0,thumb:null}),e.put(r,"index")}await ua(t)}async function Ff(){try{await Ox();const t=(await Qs()).transaction(In).objectStore(In);return(await kr(t)).sort((e,n)=>n.updated-e.updated)}catch{return[]}}async function zf(i){const e=(await Qs()).transaction(In).objectStore(In),n=IDBKeyRange.bound(`w:${i}:`,`w:${i}:￿`),s=await Fs(e.getAllKeys(n)),r=await Fs(e.getAll(n)),a={meta:null,chunks:new Map,nether:new Map,end:new Map};return s.forEach((l,o)=>{const c=l.slice(`w:${i}:`.length);c==="meta"?a.meta=r[o]:c.startsWith("c:")?a.chunks.set(Number(c.slice(2)),r[o]):c.startsWith("n:")?a.nether.set(Number(c.slice(2)),r[o]):c.startsWith("e:")&&a.end.set(Number(c.slice(2)),r[o])}),a}function Bf(){return"w"+Date.now().toString(36)+Math.floor(Math.random()*1296).toString(36)}async function kf(i,t,e,n){try{const r=(await Qs()).transaction(In,"readwrite"),a=r.objectStore(In);a.put(t,`w:${i}:meta`);for(const[u,h]of e)a.put(h,`w:${i}:${typeof u=="number"?"c:"+u:u}`);const l=await kr(a),o=l.findIndex(u=>u.id===i),c={...o>=0?l[o]:{},...n,id:i,updated:Date.now()};return o>=0?l[o]=c:l.push(c),a.put(l,"index"),await ua(r),!0}catch{return!1}}async function Fx(i){const e=(await Qs()).transaction(In,"readwrite"),n=e.objectStore(In);n.delete(IDBKeyRange.bound(`w:${i}:`,`w:${i}:￿`)),n.put((await kr(n)).filter(s=>s.id!==i),"index"),await ua(e)}async function zx(i,t){const n=(await Qs()).transaction(In,"readwrite"),s=n.objectStore(In),r=await kr(s),a=r.find(l=>l.id===i);a&&(a.name=t),s.put(r,"index"),await ua(n)}const Bx=i=>{let t="";for(let e=0;e<i.length;e+=32768)t+=String.fromCharCode.apply(null,i.subarray(e,e+32768));return btoa(t)},kx=i=>Uint8Array.from(atob(i),t=>t.charCodeAt(0));async function Hf(i,t,e){return new Response(i.pipeThrough(new t(e)))}async function Gf(i){const t=await Ff(),e=t.find(l=>l.id===i),n=await zf(i),s=[...[...n.chunks].map(([l,o])=>["c:"+l,o]),...[...n.nether].map(([l,o])=>["n:"+l,o]),...[...n.end].map(([l,o])=>["e:"+l,o])],r=JSON.stringify({v:3,summary:e,meta:n.meta,chunks:s.map(([l,o])=>[l,Bx(new Uint8Array(o))])}),a=new Blob([r]);return typeof CompressionStream>"u"?a:(await Hf(a.stream(),CompressionStream,"gzip")).blob()}async function Hx(i){let t;try{t=await(await Hf(i.stream(),DecompressionStream,"gzip")).text()}catch{t=await i.text()}const e=JSON.parse(t);if(!e||!e.meta)throw new Error("Archivo no válido");const n=Bf();return await kf(n,e.meta,e.chunks.map(([s,r])=>[s,kx(r)]),{...e.summary||{},name:(e.summary&&e.summary.name||"Mundo")+" (importado)",created:Date.now()}),n}const lt=i=>document.getElementById(i),Wn=lt("game"),Hn=new ev({canvas:Wn,antialias:!0,powerPreference:"high-performance"});Hn.setPixelRatio(Math.min(devicePixelRatio,2));const Je=new nv;Je.fog=new Rc(8900331,50,90);const Qe=new Cn(75,1,.05,500);Je.add(Qe);const{canvas:Vf,texture:ic}=mv();Dv(Vf);document.documentElement.style.setProperty("--dirt",`url(${kv("dirt")})`);const Gx={value:new yt(1,1,1)},$o={uTime:{value:0},uWind:{value:.12}};function Tu(i){return i.onBeforeCompile=t=>{t.uniforms.uTime=$o.uTime,t.uniforms.uWind=$o.uWind,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
reflectedLight.directSpecular *= vSK;`)},i.customProgramCacheKey=()=>"chunk-pbr",i}const sc=_v(Vf);let To=null;const qs={opaque:Tu(new ru({map:ic,normalMap:sc,vertexColors:!0,roughness:.94,metalness:0})),trans:Tu(new ru({map:ic,normalMap:sc,vertexColors:!0,transparent:!0,depthWrite:!1,side:yn,roughness:.1,metalness:.05})),tint:Gx};function Vx(i){i&&!To&&(To=gv(Hn));for(const t of[qs.opaque,qs.trans])t.map=i?To.map:ic,t.normalMap=i?To.normalMap:sc,t.needsUpdate=!0}Hn.toneMapping=gc;Hn.toneMappingExposure=1.45;Hn.shadowMap.type=Fu;const rc=[{name:"Bajo",shadows:!1,size:0,ext:0,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Medio",shadows:!0,size:1024,ext:48,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Alto",shadows:!0,size:2048,ext:64,bloom:!0,hd:!0,msaa:2,pr:1.25,grade:!0},{name:"Ultra (hiperrealista)",shadows:!0,size:4096,ext:80,bloom:!0,hd:!0,msaa:4,pr:2,grade:!0}],Wf={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.85},uSat:{value:1.04},uGrain:{value:.035},uContrast:{value:1.06}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; uniform float uTime, uVig, uSat, uGrain, uContrast; varying vec2 vUv;float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));c.rgb = mix(vec3(l), c.rgb, uSat); c.rgb = (c.rgb - 0.18) * uContrast + 0.18; vec2 d = vUv - 0.5; c.rgb *= 1.0 - dot(d, d) * uVig;c.rgb += (h(vUv * 1000.0 + uTime) - 0.5) * uGrain; gl_FragColor = c; }"};let Rn=null,Au=null,Ru=null,Xf=!1;function qf(){const i=rc[qe.quality];qe.quality,Hn.setPixelRatio(Math.min(devicePixelRatio,i.pr)),Hn.shadowMap.enabled=i.shadows,Bn&&Bn.setShadows(i.shadows,i.size||1024,i.ext||48);for(const n of[qs.opaque,qs.trans])n.needsUpdate=!0;Vx(i.hd);const t=i.bloom||i.grade||i.msaa;if(Rn&&(Rn.dispose(),Rn=null),t){const n=innerWidth,s=innerHeight,r=Hn.getPixelRatio(),a=new Gn(n*r,s*r,{type:ai,samples:i.msaa});Rn=new Sv(Hn,a),Rn.addPass(new bv(Je,Qe)),i.bloom&&(Au=new Xs(new Dt(n,s),.42,.55,.88),Rn.addPass(Au)),Xf=i.grade,i.grade&&(Ru=new wf(Wf),Rn.addPass(Ru)),Rn.addPass(new Tv),Rn.setSize(n,s)}const e=document.getElementById("bQuality");e&&(e.textContent="Gráficos: "+i.name),qc()}const qe={radius:8,fov:75,sens:1,vol:.5,cam:0,quality:2};try{Object.assign(qe,JSON.parse(localStorage.getItem("mcweb-settings")||"{}"))}catch{}const Bc=()=>{try{localStorage.setItem("mcweb-settings",JSON.stringify(qe))}catch{}},Yf=new Set(["storm","dragon","wither","herobrine"]),Cu={ravager:[[k.STAR,1],[k.DIAMOND,8],[k.GOLD,10]],evoker:[[k.STAR,1],[k.DIAMOND,6],[k.GOLD,8],[k.PEARL,1]],ghast:[[k.STAR,1],[k.DIAMOND,6],[k.COAL,16]],herobrine:[[k.STAR,3],[k.DIAMOND,16],[k.GOLD,16],[k.PEARL,2]],slimeking:[[k.STAR,1],[k.DIAMOND,6],[k.GOLD,6]],storm:[[k.STAR,1],[D.COMMAND,1],[k.DIAMOND,8],[k.GOLD,12]],dragon:[[k.STAR,2],[k.PEARL,4],[k.DIAMOND,12],[k.GOLD,10]],wither:[[k.STAR,1],[k.DIAMOND,6],[k.GOLD,10]],warden:[[k.STAR,1],[k.DIAMOND,10],[k.GOLD,16]],guardian:[[k.STAR,1],[k.PEARL,1],[k.DIAMOND,6],[k.GOLD,8]]},jo=["Primera persona","Tercera persona (detrás)","Tercera persona (delante)"],Zo=new Mf(new rv(new re(1.005,1.005,1.005)),new Lc({color:0}));Zo.visible=!1;Je.add(Zo);const Kf=(()=>{let i=12345;const t=()=>(i=Math.imul(i,1664525)+1013904223>>>0)/4294967296,e=[];for(let n=0;n<6;n++){let s=8,r=8;const a=t()*6.28;for(let l=0;l<12;l++)s+=Math.cos(a+(t()-.5)*1.3),r+=Math.sin(a+(t()-.5)*1.3),e.push([Math.round(s),Math.round(r),l])}return Array.from({length:10},(n,s)=>{const r=document.createElement("canvas");r.width=r.height=16;const a=r.getContext("2d");a.fillStyle="rgba(0,0,0,0.8)";for(const[o,c,u]of e)u<=(s+1)*1.25&&a.fillRect(o,c,1,1);const l=new Vn(r);return l.magFilter=_e,l.minFilter=_e,l.generateMipmaps=!1,l})})(),Sr=new Ut(new re(1.01,1.01,1.01),new Ie({map:Kf[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));Sr.visible=!1;Je.add(Sr);const oc=new Ie({transparent:!0,side:yn,depthTest:!1,fog:!1}),Jo=new Ut(new Ei(.55,.55),oc),br=new Ut(new re(.12,.12,.5),new Ie({color:14264191,depthTest:!1,fog:!1})),Pr=new Ee;Pr.add(Jo,br);Qe.add(Pr);Jo.renderOrder=br.renderOrder=999;let Gt="menu",ne="survival",zo=qe.radius,zn=qe.cam|0;const li=new Map;let Ys,sl=0,Ht,se=null,He=null,ac,tn,as=null,Qn=0,Wi=0,Xi=0,rl=0,ol=0,Lu=2,Qo=null,kc="Mundo",Hc=0,$f=0,Gc=null,zs=!1;const lc=i=>6+i*4;function gr(i){for(Wi+=i;Wi>=lc(Qn);)Wi-=lc(Qn),Qn++,wt&&wt.toast("¡Nivel "+Qn+"!"),be("pop")}let it,B,ce,Bn,Ge,Sn,Ln,wt,wi=1,cc,Zn={},le="overworld",ta={nether:new Map,end:new Map},zi=0,Er=0,ea=!1;const hc={overworld:"Overworld",nether:"El Nether",end:"El End"},jf=(i,t,e)=>(le==="overworld"?"":le+":")+i+","+t+","+e,Ye={left:!1,right:!1},Fn={key:"",progress:0};let Dn=0,Ao=0,_r=0,na=0,Pu=-2,al=0,ll=0;function ti(i){const t=lt("overlay");if(t.classList.toggle("ingame",i==="pause"||i==="death"),!i){t.classList.add("hidden");return}t.classList.remove("hidden");for(const e of["menu","pause","death"])lt(e).classList.toggle("hidden",e!==i)}const be=i=>nc(i);function Wx(i){for(let t=0;t<600;t+=5)for(let e=0;e<12;e++){const n=Math.round(Math.cos(e/12*Math.PI*2)*t),s=Math.round(Math.sin(e/12*Math.PI*2)*t),r=ki(n,s,i);if(r.h>sn+3&&r.h<sn+16&&r.biome!=="ocean"&&r.biome!=="mountains")return[n,s]}return[0,0]}function Vc(i,t){for(let e=0;e<12;e++)for(let n=-e;n<=e;n++)for(let s=-e;s<=e;s++){if(Math.max(Math.abs(n),Math.abs(s))!==e)continue;const r=i+n,a=t+s,l=it.topY(r,a);if(l<sn)continue;const o=it.getBlock(r,l,a);if((o===D.GRASS||o===D.SAND||o===D.SNOW)&&!it.isSolid(r,l+1,a)&&!it.isSolid(r,l+2,a))return new P(r+.5,l+1,a+.5)}return new P(i+.5,Math.max(it.topY(i,t),sn)+2,t+.5)}function uc(i,t,e=null){const n=B.eye,s=B.lookDir();Sn.spawn(n.x+s.x*.5,n.y-.3,n.z+s.z*.5,i,t,!1);const r=Sn.list[Sn.list.length-1];r.vel.set(s.x*5,2.5,s.z*5),r.age=-1.2}function cl(i,t,e,n,s=1){be("explode");const r=Math.ceil(n)+1;for(let c=-r;c<=r;c++)for(let u=-r;u<=r;u++)for(let h=-r;h<=r;h++){if(Math.hypot(c,u,h)>n*(.7+Math.random()*.3))continue;const d=Math.floor(i)+c,g=Math.floor(t)+u,_=Math.floor(e)+h,m=it.getBlock(d,g,_);if(!(m===Le||m===D.BEDROCK||Yi[m])&&(it.setBlock(d,g,_,Le),ne==="survival"&&Math.random()<.2)){const p=Df(m,null);p&&Sn.spawn(d+.5,g+.5,_+.5,p[0],p[1])}}Ln.burst(i,t,e,[.5,.5,.5],40,7),Ln.burst(i,t,e,[.9,.5,.1],20,6);const a=B.pos.x-i,l=B.pos.z-e,o=Math.hypot(a,B.pos.y+.9-t,l);o<n*2&&B.damage(Math.round((1-o/(n*2))*22*s),a/(Math.hypot(a,l)||1)*9,l/(Math.hypot(a,l)||1)*9);for(const c of[...Ge.list])Math.hypot(c.pos.x-i,c.pos.y-t,c.pos.z-e)<n*2&&Ge.damage(c,14,i,e)}function fc(i){const t=it.getBlock(i.x,i.y,i.z);if(t===Le||We[t].hardness===1/0)return;const e=ce.held();if(it.setBlock(i.x,i.y,i.z,Le),t===D.FURNACE){const n=jf(i.x,i.y,i.z),s=li.get(n);if(s){for(const r of s.slots)r&&Sn.spawn(i.x+.5,i.y+.5,i.z+.5,r.id,r.n);li.delete(n)}}if(t===D.OBSIDIAN&&Jx(i.x,i.y,i.z),(t===D.COAL_ORE||t===D.IRON_ORE||t===D.GOLD_ORE||t===D.DIAMOND_ORE)&&gr(t===D.DIAMOND_ORE?8:3),Ln.blockBreak(i.x,i.y,i.z,t),be("break"),ne==="survival"){const n=Df(t,e);n&&Sn.spawn(i.x+.5,i.y+.4,i.z+.5,n[0],n[1]),cs(e)&&We[t].hardness>0&&(ce.wearHeld(1)&&(be("break"),wt.toast("¡Se ha roto la herramienta!")),wt.renderHotbar())}it.getBlock(i.x,i.y+1,i.z)===D.CACTUS&&We[t].cactusOk}function Wc(){const i=B.eye,t=B.lookDir(),e=it.raycast(i,t,ne==="creative"?7:5.5);if(Dn=Math.max(Dn,.001),e&&e.id===D.TABLE&&!B.keys.has("ShiftLeft")){sa(3);return}if(e&&e.id===D.FURNACE&&!B.keys.has("ShiftLeft")){const c=jf(e.x,e.y,e.z);li.has(c)||li.set(c,{slots:[null,null,null],burn:0,burnMax:1,cook:0}),sa("furnace",li.get(c));return}if(e&&e.id===D.END_FRAME){nd(e);return}const n=ce.held();if(!n)return;if(n.id===k.LIGHTER){e&&ed(e);return}const s=Ki[n.id]&&Ki[n.id].food;if(s){ne==="survival"&&B.food<20&&(B.eat(s),ce.consumeHeld(1),be("eat"),wt.renderHotbar());return}if(!Cv(n.id)||!e)return;const r=e.x+e.normal[0],a=e.y+e.normal[1],l=e.z+e.normal[2];if(a<0||a>=pe)return;const o=it.getBlock(r,a,l);if(!(o!==Le&&!Yi[o])&&!(Rr[n.id]&&B.intersectsBlock(r,a,l))&&!(Rr[n.id]&&Ge.list.some(c=>Math.abs(c.pos.x-(r+.5))<c.hw+.5&&Math.abs(c.pos.z-(l+.5))<c.hw+.5&&c.pos.y<a+1&&c.pos.y+c.h>a))){if(n.id===D.COMMAND){if(se||He){wt.toast("Ya hay una tormenta en curso");return}it.setBlock(r,a,l,n.id),be("place"),ne==="survival"&&(ce.consumeHeld(1),wt.renderHotbar()),i1(r,a,l);return}it.setBlock(r,a,l,n.id),be("place"),ne==="survival"&&(ce.consumeHeld(1),wt.renderHotbar())}}function Xx(i){const t=Br[i];lt("bossFill").style.background=`linear-gradient(${t.color}, #25103a)`,lt("bossbar").style.setProperty("--bc",t.color)}function Dr(i,t,e,n,s){const r=Br[i],a=new P(t,e,n);se=i==="storm"?new sx(Je,ac,a):r.make(Je,ac,a,s),Xx(i),Yf.has(i)&&(Ht.set("storm"),Ht.boss=!0,Ht.timer=9999),be("roar")}function Zf(i){if(se||He)return wt.toast("Ya hay un jefe activo"),!1;const t=Br[i],e=B.lookDir(),n=Math.hypot(e.x,e.z)||1,s=e.x/n,r=e.z/n,a=t.dist||(i==="warden"?12:i==="guardian"?16:i==="wither"?20:26),l=B.pos.x+s*a,o=B.pos.z+r*a;let c;if(t.ground){const u=it.topY(Math.floor(l),Math.floor(o));c=u>0?u+1:B.pos.y}else c=B.pos.y+(t.up===void 0?10:t.up)+(i==="storm"?10:0);return i==="dragon"&&le==="end"?(Dr("dragon",.5,100,.5,{cx:0,cy:64,cz:0,pillars:zc()}),ea=!0):Dr(i,l,c,o),wt.toast("¡"+t.name+" ha sido invocado!"),!0}function Jf(i){const t=B.lookDir(),e=Math.hypot(t.x,t.z)||1;for(let n=6;n<=10;n+=2){const s=Math.floor(B.pos.x+t.x/e*n),r=Math.floor(B.pos.z+t.z/e*n),a=it.topY(s,r);if(a>0){Ge.add(i,s+.5,a+1,r+.5);return}}Ge.add(i,B.pos.x+3,B.pos.y+1,B.pos.z)}function qx(){se&&(se.dispose(),se=null),He=null,Ht.boss=!1,Xi=0,lt("bossbar").classList.add("hidden"),wt.toast("Jefe descartado")}function Ir(i){Gt==="play"&&(Gt="panel",as=i,B.keys.clear(),Ye.left=Ye.right=!1,document.exitPointerLock(),lt(i).classList.remove("hidden"),i==="summon"?Yx():Kx())}function Ur(i){as&&(lt(as).classList.add("hidden"),as=null,i?(Gt="play",Wn.requestPointerLock()):(Gt="pause",ti("pause")))}function Yx(){lt("bossCards").innerHTML=px.map(i=>{const t=Br[i],e=tn.bosses.has(i);return`<div class="card" style="border-left:6px solid ${t.color}"><h4><span>${t.icon} ${t.name}</span><span class="tag">${t.hp} HP</span></h4><p>${t.desc}</p><button class="btn" data-boss="${i}">${e?"✔ ":""}Invocar</button></div>`}).join(""),lt("mobBtns").innerHTML=Object.keys(Yo).map(i=>`<button class="btn" data-mob="${i}">${Yo[i].name}</button>`).join("")}function Kx(){lt("questTitle").textContent=`Misiones — ${tn.completed()}/${tn.total()} completadas`;let i="",t="";for(const e of Ds){e.group!==t&&(t=e.group,i+=`<div class="grp">${t.toUpperCase()}</div>`);const n=tn.done[e.id],s=tn.progress[e.id]||0,r=e.reward.map(([a,l])=>`${l}× ${ca(a).name}`).join(", ");i+=`<div class="q ${n?"done":""}"><span class="ck">${n?"✔":"○"}</span><div><b>${e.title}</b>${e.desc}<div class="bar"><i style="width:${s/e.n*100}%"></i></div></div><div class="rw">${s}/${e.n}<br>${r}<br>+${e.xp} XP</div></div>`}lt("questList").innerHTML=i}lt("bossCards").addEventListener("click",i=>{const t=i.target.closest("[data-boss]");t&&Gt==="panel"&&(Ur(!0),Zf(t.dataset.boss))});lt("mobBtns").addEventListener("click",i=>{const t=i.target.closest("[data-mob]");t&&Gt==="panel"&&(Jf(t.dataset.mob),wt.toast(Yo[t.dataset.mob].name+" invocado"))});lt("bDespawn").onclick=()=>{qx()};lt("dimBtns").addEventListener("click",i=>{const t=i.target.closest("[data-dim]");t&&Gt==="panel"&&(Ur(!0),fa(t.dataset.dim))});const De=lt("minimap").getContext("2d"),Du=De.createImageData(64,64),Qf={};for(const i of Object.values(We)){const t=bf(i.tiles[0]);Qf[i.id]=[t[0]*255,t[1]*255,t[2]*255]}function $x(){const i=Math.floor(B.pos.x),t=Math.floor(B.pos.z),e=Du.data;for(let s=0;s<64;s++)for(let r=0;r<64;r++){const a=i+r-32,l=t+s-32,o=(s*64+r)*4;let c=it.topY(a,l);if(le!=="overworld"&&c>=0)for(c=Math.min(pe-3,Math.floor(B.pos.y)+6);c>0&&!it.isSolid(a,c,l)&&it.getBlock(a,c,l)!==D.LAVA;)c--;let u;if(c<0)u=[20,20,30];else if(le==="overworld"&&c<sn&&it.getBlock(a,sn,l)===D.WATER)u=[38+c,84+c,190];else{const h=Qf[it.getBlock(a,c,l)]||[90,90,90],f=Math.max(.6,Math.min(1.25,.9+(c-B.pos.y)*.012));u=[h[0]*f,h[1]*f,h[2]*f]}e[o]=u[0],e[o+1]=u[1],e[o+2]=u[2],e[o+3]=255}De.putImageData(Du,0,0),De.imageSmoothingEnabled=!1,De.drawImage(lt("minimap"),0,0,64,64,0,0,128,128);const n=(s,r,a,l)=>{const o=(s-i+32)*2,c=(r-t+32)*2;o<2||c<2||o>126||c>126||(De.fillStyle=a,De.fillRect(o-l,c-l,l*2,l*2))};for(const s of Ge.list)n(s.pos.x,s.pos.z,s.def.hostile?"#ff4040":"#ffffff",1.5);if(se){const s=3+Math.sin(performance.now()/150)*1.2,r=se.pos.x,a=se.pos.z,l=Math.max(6,Math.min(122,(r-i+32)*2)),o=Math.max(6,Math.min(122,(a-t+32)*2));De.fillStyle="#d050ff",De.fillRect(l-s,o-s,s*2,s*2),De.strokeStyle="#fff",De.strokeRect(l-s,o-s,s*2,s*2)}De.save(),De.translate(64+(B.pos.x-i)*2,64+(B.pos.z-t)*2),De.rotate(-B.yaw+Math.PI),De.fillStyle="#fff",De.strokeStyle="#000",De.beginPath(),De.moveTo(0,6),De.lineTo(4.5,-4.5),De.lineTo(0,-2),De.lineTo(-4.5,-4.5),De.closePath(),De.fill(),De.stroke(),De.restore()}function jx(){lt("tracker").innerHTML=tn.active(3).map(i=>`<div class="qt"><b>${i.title}</b>${i.desc} (${tn.progress[i.id]||0}/${i.n})<div class="qb"><i style="width:${(tn.progress[i.id]||0)/i.n*100}%"></i></div></div>`).join("")}function dc(i,t){const e=new Ee;e.visible=!1,Je.add(e);const n=new Yv(e,qs,i==="overworld"?wi:i==="nether"?wi+500:wi+900,t||new Map,i);return n.group=e,n}function Zx(i,t,e,n=3){return new Promise(s=>{const r=()=>{i.update(t,e,n,12)>0?setTimeout(r,0):s()};r()})}function td(i,t,e){for(const n of[0,2]){const s=n===0?[1,0,0]:[0,0,1],r=(f,d)=>it.getBlock(i+s[0]*f,t+d,e+s[2]*f);let a=0;for(;a>-22&&r(0,a-1)===Le;)a--;if(r(0,a-1)!==D.OBSIDIAN)continue;let l=0;for(;l<22&&r(0,l+1)===Le;)l++;if(r(0,l+1)!==D.OBSIDIAN)continue;let o=0;for(;o>-22&&r(o-1,0)===Le;)o--;if(r(o-1,0)!==D.OBSIDIAN)continue;let c=0;for(;c<22&&r(c+1,0)===Le;)c++;if(r(c+1,0)!==D.OBSIDIAN||l-a+1<3||c-o+1<2)continue;let u=!0;for(let f=o;f<=c&&u;f++)for(let d=a;d<=l;d++)if(r(f,d)!==Le){u=!1;break}for(let f=o;f<=c&&u;f++)(r(f,a-1)!==D.OBSIDIAN||r(f,l+1)!==D.OBSIDIAN)&&(u=!1);for(let f=a;f<=l&&u;f++)(r(o-1,f)!==D.OBSIDIAN||r(c+1,f)!==D.OBSIDIAN)&&(u=!1);if(!u)continue;const h=[];for(let f=o;f<=c;f++)for(let d=a;d<=l;d++)h.push([i+s[0]*f,t+d,e+s[2]*f]);return h}return null}function ed(i){if(le==="end")return wt.toast("El fuego no prende aquí"),!1;const t=i.x+i.normal[0],e=i.y+i.normal[1],n=i.z+i.normal[2],s=it.getBlock(t,e,n)===Le?td(t,e,n):null;if(!s)return wt.toast("Marco de obsidiana no válido (mínimo 2x3 interior)"),!1;for(const[r,a,l]of s)it.setBlock(r,a,l,D.NETHER_PORTAL);if(be("hiss"),be("craft"),wt.toast("¡El portal del Nether se activa!"),ne==="survival"){const r=ce.held();r.d=(r.d||0)+1,r.d>=64&&(ce.slots[ce.selected]=null),wt.renderHotbar()}return!0}function Jx(i,t,e){const n=[[i,t,e]],s=new Set;for(;n.length;){const[r,a,l]=n.pop();for(const[o,c,u]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const h=r+o,f=a+c,d=l+u,g=h+","+f+","+d;s.has(g)||(s.add(g),it.getBlock(h,f,d)===D.NETHER_PORTAL&&(it.setBlock(h,f,d,Le),n.push([h,f,d])))}}}function nd(i){const t=ce.held();if(!t||t.id!==k.EYE){wt.toast("Necesitas un Ojo de Ender");return}it.setBlock(i.x,i.y,i.z,D.END_FRAME_EYE),be("place"),ne==="survival"&&(ce.consumeHeld(1),wt.renderHotbar());const e=[];for(let n=-2;n<=2;n++)for(let s=-2;s<=2;s++)Math.max(Math.abs(n),Math.abs(s))===2&&!(Math.abs(n)===2&&Math.abs(s)===2)&&e.push([n,s]);for(const[n,s]of e){const r=i.x-n,a=i.z-s;if(e.every(([l,o])=>it.getBlock(r+l,i.y,a+o)===D.END_FRAME_EYE)){for(let l=-1;l<=1;l++)for(let o=-1;o<=1;o++)it.setBlock(r+l,i.y,a+o,D.END_PORTAL);be("roar"),wt.toast("¡El portal del End se abre!");return}}}function id(i,t,e){for(let n=i-2;n<=i+5;n++)for(let s=e-2;s<=e+4;s++){const r=it.getBlock(n,t,s);(r===Le||Yi[r]||!Rr[r])&&it.setBlock(n,t,s,D.OBSIDIAN);for(let a=t+1;a<=t+6;a++)it.getBlock(n,a,s)!==Le&&it.setBlock(n,a,s,Le)}for(let n=0;n<4;n++)for(let s=0;s<5;s++){const r=(n===0||n===3)&&(s===0||s===4),a=n===0||n===3||s===0||s===4;r||it.setBlock(i+n,t+s,e,a?D.OBSIDIAN:D.NETHER_PORTAL)}it.setBlock(i-1,t+1,e+2,D.TORCH),it.setBlock(i+4,t+1,e+2,D.TORCH)}function Qx(i,t){let e=null,n=1e9;const s=le==="nether"?20:2,r=le==="nether"?pe-6:pe-2;for(let a=i-24;a<=i+24;a++)for(let l=t-24;l<=t+24;l++)if(it.chunks.has((Math.floor(a/16)+32768)*65536+(Math.floor(l/16)+32768))){for(let o=s;o<=r;o++)if(it.getBlock(a,o,l)===D.NETHER_PORTAL){const c=Math.hypot(a-i,l-t);c<n&&(n=c,e=[a,o,l])}}return e}function t1(i){const[t,e,n]=i;let s=e;for(;it.getBlock(t,s-1,n)===D.NETHER_PORTAL;)s--;for(const[r,a]of[[0,2],[0,-2],[2,0],[-2,0],[0,1],[0,-1],[1,0],[-1,0],[2,2],[-2,-2]]){const l=t+r,o=n+a;for(const c of[s,s+1,s-1])if(it.isSolid(l,c-1,o)&&!it.isSolid(l,c,o)&&!it.isSolid(l,c+1,o)&&!Yi[it.getBlock(l,c,o)]&&it.getBlock(l,c,o)!==D.NETHER_PORTAL)return new P(l+.5,c,o+.5)}return new P(t+.5,s+1,n+2.5)}function e1(){const i=it.topY(0,0);if(!(i<0)){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){const n=Math.max(Math.abs(t),Math.abs(e))===2;n&&Math.abs(t)===2&&Math.abs(e)===2||it.setBlock(t,i+1,e,n?D.BEDROCK:D.END_PORTAL)}for(const[t,e]of[[-2,0],[2,0],[0,-2],[0,2]])it.setBlock(t,i+2,e,D.TORCH);wt.toast("Se abre el portal de salida en el centro de la isla")}}async function fa(i,t={}){if(!it||Gt==="loading"||i===le&&!t.force)return;const e=le;Gt="loading",B.keys.clear(),Ye.left=Ye.right=!1,lt("travelTxt").textContent="Viajando a "+hc[i]+"…",lt("travel").classList.remove("hidden"),await new Promise(a=>setTimeout(a,40)),se&&(se.dispose(),se=null,Ht.boss=!1,Xi=0,lt("bossbar").classList.add("hidden")),He=null,Ge.clear(),Sn.clear();let n,s;t.arrive?(n=Math.floor(t.arrive.x),s=Math.floor(t.arrive.z)):i==="end"?(n=0,s=30):i==="nether"?(n=Math.floor(B.pos.x/8),s=Math.floor(B.pos.z/8)):e==="nether"?(n=Math.floor(B.pos.x*8),s=Math.floor(B.pos.z*8)):(n=Math.floor(B.spawn.x),s=Math.floor(B.spawn.z)),Zn[i]||(Zn[i]=dc(i,i==="nether"?ta.nether:i==="end"?ta.end:new Map)),it.group.visible=!1,it=Zn[i],it.group.visible=!0,le=i,B.world=it,Sn.world=it,Ln.world=it,Ge.world=it,Ge.dim=i,Bn.setDimension(i),Xi=0,await Zx(it,n,s,3);let r;if(i==="end"){const a=it.topY(n,s);r=new P(.5,(a>0?a:64)+1,30.5)}else if(t.respawn)r=Vc(n,s);else{const a=Qx(n,s);if(a)r=t1(a);else{let l;if(i==="overworld"){const o=it.topY(n,s);l=Math.max(o>0?o:sn,sn)}else{l=64;for(let o=100;o>36;o--){const c=it.getBlock(n,o,s);if(it.isSolid(n,o,s)&&c!==D.LAVA&&!it.isSolid(n,o+1,s)&&!it.isSolid(n,o+2,s)&&!Yi[it.getBlock(n,o+1,s)]){l=o;break}}}id(n,l,s),r=new P(n+1.5,l+1,s+2.5)}}B.pos.copy(r),B.vel.set(0,0,0),B.fallStart=null,B.yaw=Math.PI,Gt="play",lt("travel").classList.add("hidden"),Er=3,zi=0,wt.toast("Has llegado a "+hc[i]),tn.event("dim",i),i==="end"&&!ea&&!tn.bosses.has("dragon")&&(ea=!0,setTimeout(()=>{le==="end"&&!se&&Dr("dragon",.5,100,.5,{cx:0,cy:64,cz:0,pillars:zc()})},1500)),zs=!0}function n1(i){Er=Math.max(0,Er-i);const t=Math.floor(B.pos.x),e=Math.floor(B.pos.z),n=it.getBlock(t,Math.floor(B.pos.y+.2),e),s=it.getBlock(t,Math.floor(B.pos.y+1.2),e),r=n===D.NETHER_PORTAL||s===D.NETHER_PORTAL?"nether":n===D.END_PORTAL||s===D.END_PORTAL?"end":null,a=ne==="creative"?.6:3;r&&Er<=0&&Gt==="play"?(zi+=i,zi>=a&&(zi=0,fa(r==="nether"?le==="nether"?"overworld":"nether":le==="end"?"overworld":"end"))):zi=Math.max(0,zi-i*2);const l=lt("portalfx");l.style.opacity=Math.min(1,zi/a)*.9,l.style.background=r==="end"?"radial-gradient(ellipse at center, rgba(20,60,70,.5), rgba(2,10,14,.95))":""}function i1(i,t,e){He={x:i,y:t,z:e,t:5,s:0},be("roar"),Ht.set("storm"),Ht.boss=!0,wt.toast("El bloque de comandos late… ¡aléjate!")}function s1(i){if(He.t-=i,He.s-=i,Ht.timer=9999,He.s<=0&&(He.s=.9,Ht.strike(B,!1,{x:He.x,z:He.z}),Ln.burst(He.x+.5,He.y+1,He.z+.5,[.7,.3,1],20,5)),He.t<=0){const t=He;He=null,it.setBlock(t.x,t.y,t.z,Le),Dr("storm",t.x+.5,t.y+14,t.z+.5),be("roar"),wt.toast("¡LA TORMENTA WITHER HA DESPERTADO!")}}function r1(){const i=B.eye,t=B.lookDir(),e=se&&se.raycast(i,t,7),n=it.raycast(i,t,7);if(e&&(!n||e.dist<n.dist)){const o=cs(ce.held());return se.hit(ne==="creative"?12:o?o.dmg:1,e.crit,e),be("hit"),e.crit&&wt.toast("¡Golpe crítico al bloque de comandos!"),ne==="survival"&&o&&(ce.wearHeld(1),wt.renderHotbar()),!0}const s=Ge.raycast(i,t,3.6),r=it.raycast(i,t,3.6);if(!s||r&&r.dist<s.dist)return!1;const a=cs(ce.held()),l=ne==="creative"?20:a?a.dmg:1;return Ge.damage(s.mob,l,B.pos.x,B.pos.z),Ln.burst(s.mob.pos.x,s.mob.pos.y+s.mob.h*.6,s.mob.pos.z,[.8,.1,.1],6,2.5),ne==="survival"&&a&&(ce.wearHeld(1),wt.renderHotbar()),!0}function o1(i){const t=B.eye,e=B.lookDir(),n=it.raycast(t,e,ne==="creative"?7:5.5);Zo.visible=!!n,n&&Zo.position.set(n.x+.5,n.y+.5,n.z+.5),Ao=Math.max(0,Ao-i),_r=Math.max(0,_r-i),na=Math.max(0,na-i);let s=0;if(Ye.left&&n){const r=n.x+","+n.y+","+n.z;if(r!==Fn.key&&(Fn.key=r,Fn.progress=0),Dn=Dn>0?Dn:.001,ne==="creative")Ao<=0&&(fc(n),Ao=.2);else{const a=Pv(n.id,ce.held())*(B.effects.fatigue>0?3:1);Fn.progress+=i/a,s=Math.min(1,Fn.progress),Math.floor(Fn.progress*6)!==Math.floor((Fn.progress-i/a)*6)&&be("hit"),Fn.progress>=1&&(fc(n),Fn.key="",Fn.progress=0,s=0)}Sr.position.set(n.x+.5,n.y+.5,n.z+.5)}else Fn.key="",Fn.progress=0;Sr.visible=s>0,s>0&&(Sr.material.map=Kf[Math.min(9,Math.floor(s*10))]),lt("breakbar").classList.toggle("hidden",s<=0),lt("breakbar").firstElementChild.style.width=s*100+"%",Ye.right&&_r<=0&&(_r=.22,Wc())}function a1(i){for(const t of li.values()){const[e,n,s]=t.slots,r=e&&Rv[e.id],a=r&&(!s||s.id===r[0]&&s.n+r[1]<=vi(r[0]));t.burn>0&&(t.burn-=i),a?(t.burn<=0&&n&&du[n.id]&&(t.burn=t.burnMax=du[n.id],n.n--,n.n<=0&&(t.slots[1]=null)),t.burn>0?(t.cook+=i,t.cook>=Cf&&(t.cook=0,e.n--,e.n<=0&&(t.slots[0]=null),s?s.n+=r[1]:t.slots[2]={id:r[0],n:r[1],d:0})):t.cook=Math.max(0,t.cook-i*2)):t.cook=0}}function ia(i){zn=i,qe.cam=i,Bc(),lt("bCam").textContent="Cámara: "+jo[i],wt&&wt.toast("Cámara: "+jo[i])}function l1(){if(B.dead){Ys.group.visible=!1;return}if(Ys.group.visible=zn!==0,Pr.visible=zn===0,zn===0)return;const i=B.eye,t=B.lookDir().multiplyScalar(zn===1?-1:1),e=it.raycast(i,t,4.2),n=e?Math.max(.3,e.dist-.3):4.2;Qe.position.copy(i).addScaledVector(t,n),zn===1?Qe.rotation.set(B.pitch,B.yaw,0,"YXZ"):Qe.rotation.set(-B.pitch,B.yaw+Math.PI,0,"YXZ")}function sd(i){const t=ce.held(),e=t?t.id:0;Ys.setHeld(e),e!==Pu&&(Pu=e,e&&(oc.map=Fc(e),oc.needsUpdate=!0),Jo.visible=!!e,br.visible=!e,Jo.scale.setScalar(Lf(e)?.7:.6)),Dn>0&&(Dn+=i*3.5,Dn>=1&&(Dn=Ye.left?.001:0));const n=Math.sin(Math.min(1,Dn)*Math.PI);Pr.position.set(.5-n*.12,-.5+n*.08-Math.sin(performance.now()/400)*.004,-.85-n*.1),Pr.rotation.set(-n*.9,-.35,-n*.2),e||(br.position.set(0,-.1,-.1),br.rotation.set(.4,0,0))}function sa(i,t=null){Gt==="play"&&(Gt="inv",B.keys.clear(),Ye.left=Ye.right=!1,document.exitPointerLock(),wt.open(i,t))}function Iu(i){wt.close(),i?(Gt="play",Wn.requestPointerLock()):(Gt="pause",ti("pause"))}function Xc(){wt.renderHotbar();const i=ce.held();i&&wt.toast(ca(i.id).name)}function c1(){Xi=0,se&&(se.dispose(),se=null,Ht.boss=!1,Ht.set("rain"),lt("bossbar").classList.add("hidden"),wt.toast("La tormenta se retira…")),He=null,Gt="dead",be("die"),B.keys.clear(),Ye.left=Ye.right=!1;for(let i=0;i<36;i++){const t=ce.slots[i];t&&(Sn.spawn(B.pos.x,B.pos.y+1,B.pos.z,t.id,t.n),ce.slots[i]=null)}wt.renderHotbar(),document.exitPointerLock(),ti("death")}async function us(){if(!it||!Qo)return!1;const i={v:3,gen:2,dim:le,seed:wi,mode:ne,time:Bn.time,pos:B.pos.toArray(),yaw:B.yaw,pitch:B.pitch,hp:B.hp,food:B.food,spawn:B.spawn.toArray(),inv:ce.toJSON(),furnaces:[...li.entries()],weather:Ht.toJSON(),quests:tn.toJSON(),xp:{l:Qn,p:Wi}},t=[];for(const[n,s]of Object.entries(Zn))for(const r of s.unsaved)s.chunks.has(r)&&t.push([n==="overworld"?r:(n==="nether"?"n:":"e:")+r,new Uint8Array(s.chunks.get(r))]);const e=await kf(Qo,i,t,{name:kc,mode:ne,seed:wi,created:$f,played:Math.floor(Hc),level:Qn,thumb:Gc});if(e)for(const n of Object.values(Zn))n.unsaved.clear();return e}function h1(){try{const i=document.createElement("canvas");i.width=160,i.height=90,i.getContext("2d").drawImage(Wn,0,0,160,90),Gc=i.toDataURL("image/jpeg",.6)}catch{}}async function u1(){zs=!0,await new Promise(t=>setTimeout(t,120));const i=await us();return wt.toast(i?"💾 Partida guardada":"⚠ No se pudo guardar"),i}async function Uu({id:i,name:t,seed:e,mode:n,saved:s,meta:r,created:a,played:l,nether:o,end:c}){Gt="loading",ne=n,wi=e,Qo=i,kc=t||"Mundo",$f=a||Date.now(),Hc=l||0,Gc=null,ti("menu"),lt("msg").textContent="Generando mundo…",lt("menuBody").classList.add("hidden"),li.clear();for(const f of Object.values(Zn))Je.remove(f.group);Zn={},ta={nether:o||new Map,end:c||new Map},ea=!1,zi=0,Er=0,le=r&&r.dim||"overworld",Zn.overworld=dc("overworld",s),le!=="overworld"&&(Zn[le]=dc(le,ta[le])),it=Zn[le],it.group.visible=!0,ce=new Sx,B=new yx(it,Qe),B.mode=ne,Ys||(Ys=new Hv(Je)),Bn=new Px(Je,Qe,qs),Bn.setDimension(le),cc||(cc=new gx(Je)),qf(),Ht=new Vv(Je,{world:()=>it,sky:()=>Bn,sound:(f,d)=>nc(f,d),burst:(f,d,g)=>{Ln.burst(f,d,g,[1,1,.8],24,6),Ln.burst(f,d,g,[.3,.3,.35],14,4)},hurtPlayer:f=>B.damage(f),strikeMobs:(f,d)=>{for(const g of[...Ge.list])Math.hypot(g.pos.x-f,g.pos.z-d)<3.5&&Ge.damage(g,12,f,d)}}),ac={world:()=>it,explode:(f,d,g,_,m)=>cl(f,d,g,_,m),toast:f=>wt.toast(f),sound:(f,d)=>nc(f,d),burst:(f,d,g,_,m,p)=>Ln.burst(f,d,g,_,m,p),hurtPlayer:(f,d,g)=>B.damage(f,d,g),strikeNear:(f,d)=>Ht.strike(B,!1,{x:f,z:d}),minions:()=>Ge.list.filter(f=>f.def.hostile).length,effect:(f,d)=>{ne==="survival"&&(B.effects[f]=Math.max(B.effects[f],d))},darkness:f=>{Xi=f},player:()=>B,spawnMinion:f=>{for(let d=0;d<6;d++){const g=Math.random()*Math.PI*2,_=10+Math.random()*8,m=Math.floor(B.pos.x+Math.cos(g)*_),p=Math.floor(B.pos.z+Math.sin(g)*_),b=it.topY(m,p);if(b>0&&!it.isSolid(m,b+1,p)){Ge.add(f||(Math.random()<.6?"zombie":"creeper"),m+.5,b+1,p+.5);return}}},loot:(f,d,g,_="storm")=>{for(const[m,p]of Cu[_]||Cu.storm)Sn.spawn(f,d,g,m,p)},done:()=>{const f=se?se.type:"storm";tn.event("boss",f),gr(100),be("craft"),f==="dragon"&&le==="end"&&setTimeout(e1,1200),se=null,Ht.boss=!1,Xi=0,Ht.state==="storm"&&Ht.set("rain"),lt("bossbar").classList.add("hidden")}},se=null,He=null,as=null,Xi=0,tn=new mx({reward:f=>{for(const[d,g]of f){const _=ce.add(d,g);_&&uc(d,_)}wt.renderHotbar()},toast:f=>wt.toast(f),xp:gr,sound:be}),Sn=new Wv(Je,it),Ln=new Xv(Je,it),Ge=new jv(Je,it,{effect:(f,d)=>{ne==="survival"&&(B.effects[f]=Math.max(B.effects[f]||0,d))},killed:(f,d)=>{tn.event("kill",f),gr(d)},tp:(f,d,g)=>{Ln.burst(f,d,g,[.7,.2,1],14,3),be("pop")},hurtPlayer:(f,d,g)=>B.damage(f,d,g),explode:cl,drop:(f,d,g,_,m)=>Sn.spawn(f,d,g,_,m),sound:be,puff:(f,d,g)=>Ln.burst(f,d,g,[.9,.9,.9],12,3)}),wt=new Dx({inv:ce,player:B,getMode:()=>ne,dropItem:uc,sound:be,onSelect:Xc,onCraft:(f,d)=>tn.event("craft",f,d)}),Qn=0,Wi=0,B.events.onHurt=()=>{be("hurt");const f=lt("vignette");f.classList.add("hurt"),setTimeout(()=>f.classList.remove("hurt"),120)},B.events.onStep=()=>be("step"),B.events.onLand=f=>be(f>3?"hurt":"place"),B.events.onSplash=()=>be("splash"),B.events.onDeath=c1,B.events.onVoid=()=>{if(le==="end"){B.damage(6);const f=it.topY(0,30);B.pos.set(.5,(f>0?f:64)+1,30.5),B.vel.set(0,0,0),wt.toast("Caíste al vacío…")}else B.pos.y=70,B.vel.set(0,0,0),B.damage(4)},Ge.dim=le;let u,h;if(r?(Ht.load(r.weather),tn.load(r.quests),r.xp&&(Qn=r.xp.l,Wi=r.xp.p),ce.load(r.inv),(r.furnaces||[]).forEach(([f,d])=>li.set(f,d)),Bn.time=r.time,B.hp=r.hp,B.food=r.food,B.yaw=r.yaw,B.pitch=r.pitch,B.spawn.fromArray(r.spawn),B.pos.fromArray(r.pos),u=Math.floor(r.pos[0]),h=Math.floor(r.pos[2])):([u,h]=Wx(wi),B.pos.set(u+.5,70,h+.5)),await new Promise(f=>{const d=()=>{const g=it.update(u,h,3,10);lt("msg").textContent="Generando mundo… "+Math.max(0,100-g*2)+"%",g>0?setTimeout(d,0):f()};d()}),r)B.vel.set(0,0,0);else{const f=Vc(u,h);B.pos.copy(f),B.spawn.copy(f)}wt.renderHotbar(),wt.renderStats(),sd(0),ia(zn),window.__game={get world(){return it},player:B,inv:ce,sky:Bn,mobs:Ge,drops:Sn,ui:wt,camera:Qe,scene:Je,renderer:Hn,get mode(){return ne},set mode(f){ne=f,B.mode=f},get state(){return Gt},set state(f){Gt=f},explode:cl,saveGame:us,openInventory:sa,mouse:Ye,useItem:Wc,breakBlock:fc,furnaces:li,setCam:ia,get weather(){return Ht},get boss(){return se},summon:(f,d,g)=>Dr("storm",f,d,g),summonBoss:Zf,summonMob:Jf,get quests(){return tn},changeDimension:fa,get dim(){return le},get dims(){return Zn},lightPortal:ed,findPortalFrame:td,useEyeOnFrame:nd,buildNetherPortal:id,openPanel:Ir,closePanel:Ur,addXp:gr,terrainInfo:ki,get xp(){return[Qn,Wi]}},Gt="play",ti(null),Wn.requestPointerLock(),setTimeout(()=>{document.pointerLockElement!==Wn&&Gt==="play"&&(Gt="pause",ti("pause"))},1500)}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Wn?(Gt==="pause"||Gt==="play")&&(Gt="play",ti(null)):(B&&B.keys.clear(),Ye.left=Ye.right=!1,Gt==="play"&&(Gt="pause",ti("pause")))});document.addEventListener("mousemove",i=>{Gt!=="play"||document.pointerLockElement!==Wn||(B.yaw-=i.movementX*.0022*qe.sens,B.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,B.pitch-i.movementY*.0022*qe.sens)))});document.addEventListener("keydown",i=>{if(Lr(),Gt==="panel"){i.code==="Escape"?Ur(!1):(i.code==="KeyB"&&as==="summon"||i.code==="KeyM"&&as==="quests")&&Ur(!0);return}if(Gt==="inv"){i.code==="KeyE"?(i.preventDefault(),Iu(!0)):i.code==="Escape"&&Iu(!1);return}if(Gt==="play"){if(i.code.startsWith("Digit")){const t=+i.code.slice(5)-1;t>=0&&t<9&&(ce.selected=t,Xc());return}switch(i.code){case"KeyE":sa(2);return;case"KeyB":Ir("summon");return;case"KeyM":Ir("quests");return;case"F3":i.preventDefault(),lt("info").classList.toggle("hidden");return;case"KeyT":if(!i.repeat){const t=Ht.cycle();wt.toast("Clima: "+tc[t])}return;case"KeyV":case"F5":i.preventDefault(),i.repeat||ia((zn+1)%3);return;case"KeyF":ne==="creative"&&!i.repeat&&(B.flying=!B.flying,B.vel.y=0,wt.toast(B.flying?"Vuelo activado":"Vuelo desactivado"));return;case"KeyG":i.repeat||(ne=ne==="creative"?"survival":"creative",B.mode=ne,ne==="survival"&&(B.flying=!1),wt.renderStats(),wt.toast("Modo "+(ne==="creative"?"creativo":"supervivencia")));return;case"KeyQ":if(ne==="survival"&&!i.repeat){const t=ce.held();t&&(uc(t.id,1),ce.consumeHeld(1),wt.renderHotbar());return}break}(i.code==="Space"||i.code.startsWith("Arrow"))&&i.preventDefault(),B.keys.add(i.code)}});document.addEventListener("keyup",i=>B&&B.keys.delete(i.code));document.addEventListener("wheel",i=>{Gt==="play"&&(ce.selected=(ce.selected+Math.sign(i.deltaY)+9)%9,Xc())});Wn.addEventListener("contextmenu",i=>i.preventDefault());document.addEventListener("mousedown",i=>{Gt!=="play"||document.pointerLockElement!==Wn||(i.button===0?(Ye.left=!0,Dn=Dn||.001,na<=0&&r1()&&(na=.4,Ye.left=!1)):i.button===2&&(Ye.right=!0,_r=.22,Wc()))});document.addEventListener("mouseup",i=>{i.button===0&&(Ye.left=!1),i.button===2&&(Ye.right=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&Gt!=="menu"&&us()});addEventListener("beforeunload",()=>{it&&Gt!=="menu"&&us()});function qc(){Hn.setSize(innerWidth,innerHeight,!1),Rn&&Rn.setSize(innerWidth,innerHeight),Qe.aspect=innerWidth/innerHeight,Qe.updateProjectionMatrix()}addEventListener("resize",qc);qc();lt("bResume").onclick=()=>{Lr(),Wn.requestPointerLock()};lt("bSave").onclick=async()=>{zs=!0,await new Promise(i=>setTimeout(i,120)),await us(),location.reload()};lt("bSaveNow").onclick=async()=>{await u1(),lt("bSaveNow").textContent="💾 Guardado ✔",setTimeout(()=>lt("bSaveNow").textContent="💾 Guardar partida",1500)};lt("bExport").onclick=async()=>{await us();const i=await Gf(Qo),t=document.createElement("a");t.href=URL.createObjectURL(i),t.download=kc.replace(/[^\w\-]+/g,"_")+".mcw",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3)};lt("bRespawn").onclick=async()=>{if(Lr(),ti(null),le!=="overworld"&&(Gt="play",await fa("overworld",{respawn:!0})),B.respawn(),le==="overworld"){const i=Vc(Math.floor(B.spawn.x),Math.floor(B.spawn.z));B.pos.copy(i)}Gt="play",wt.renderStats(),Wn.requestPointerLock()};lt("bCam").onclick=()=>ia((zn+1)%3);lt("bQuality").onclick=()=>{qe.quality=(qe.quality+1)%rc.length,Bc(),qf(),wt&&wt.toast("Gráficos: "+rc[qe.quality].name)};lt("bPSummon").onclick=()=>{ti(null),Gt="play",Ir("summon")};lt("bPQuests").onclick=()=>{ti(null),Gt="play",Ir("quests")};const da=(i,t,e,n,s)=>{const r=lt(i),a=lt(t);r.value=qe[e],a.textContent=n(qe[e]),s&&s(qe[e]),r.oninput=l=>{qe[e]=+l.target.value,a.textContent=n(qe[e]),s&&s(qe[e]),Bc()}};da("rRadius","vRadius","radius",i=>i,i=>zo=i);da("rFov","vFov","fov",i=>i);da("rSens","vSens","sens",i=>i.toFixed(1));da("rVol","vVol","vol",i=>Math.round(i*100),i=>Ix(i));lt("bCam").textContent="Cámara: "+jo[zn];let Nu=performance.now(),Ro=0,hl=0,ul=0;function rd(i){requestAnimationFrame(rd);const t=Math.min(.1,(i-Nu)/1e3);if(Nu=i,!(!it||Gt==="menu"||Gt==="loading")){if(Ro+=t,hl++,Ro>=.5&&(ul=Math.round(hl/Ro),Ro=0,hl=0),Gt!=="pause"){B.update(t),Ys.update(t,B,Dn),l1(),a1(t);const e=Math.floor(B.pos.x),n=Math.floor(B.pos.z),s=le==="overworld",r=s&&_u(e,n,wi)==="snow";s?Ht.update(t,B,Qe,r,B.headUnder):(Ht.rain.visible=Ht.snow.visible=!1,Ht.wind.x=Ht.wind.z=0,Ht.wind.s=.12,Ht.intensity=0);const a=s?it.skyLit(e,Math.floor(B.pos.y+1.6),n):0;if(B.wind.x=Ht.wind.x*1.4*a*(Ht.state==="clear"?0:1),B.wind.z=Ht.wind.z*1.4*a*(Ht.state==="clear"?0:1),$o.uTime.value+=t,$o.uWind.value=.25+Ht.wind.s*2.2,s?wu(Ht.intensity*(.25+.75*a)*(B.headUnder?.2:1),Ht.wind.s*(.3+.7*a)*(Ht.state==="clear"?.25:1),Ht.t*.4):wu(0,.18,Ht.t*.2),Bn.update(t,Qe.position,zo*16,B.headUnder,Ht.wind),cc.update(t,Qe,le),n1(t),Lu=it.update(B.pos.x,B.pos.z,zo,Lu)>40?4:2,B.push.x=B.push.y=B.push.z=0,He&&s1(t),se&&(Yf.has(se.type)&&(Ht.timer=9999,Ht.boss=!0),se.update(t,B,it),se&&(lt("bossbar").classList.remove("hidden"),lt("bossFill").style.width=Math.max(0,se.hp/se.maxHp*100)+"%",lt("bossPhase").textContent="Fase "+se.phase,lt("bossName").firstChild.nodeValue!==se.name+" "&&(lt("bossName").firstChild.nodeValue=se.name+" "))),Ge.update(t,B,ne,Bn.daylight,zo),Sn.update(t,B,ce,o=>{be("pop"),wt.renderHotbar(),tn.event("collect",o.id,o.n)}),Ln.update(t),Gt==="play"&&o1(t),sd(t),lt("water").classList.toggle("hidden",!B.headUnder),Qe.fov+=(qe.fov+(B.keys.has("ShiftLeft")&&B.keys.has("KeyW")?7:0)-Qe.fov)*Math.min(1,t*8),wt.isOpen&&wt.furnace&&(wt.furnaceBars(),sl-=t,sl<=0&&(sl=.5,wt.render())),Qe.updateProjectionMatrix(),ll-=t,ll<=0){ll=.2,wt.renderStats();const o=(Bn.time*24+6)%24,c=Math.floor(o),u=Math.floor((o-c)*60);lt("info").textContent=`${ul} FPS · ${ne==="creative"?"Creativo":"Supervivencia"}
XYZ ${B.pos.x.toFixed(1)} ${B.pos.y.toFixed(1)} ${B.pos.z.toFixed(1)}
Bioma: ${_u(Math.floor(B.pos.x),Math.floor(B.pos.z),wi)} · ${String(c).padStart(2,"0")}:${String(u).padStart(2,"0")}
Mobs: ${Ge.list.length} · Clima: ${tc[Ht.state]}${r?" (nieve)":""} · Viento ${(Ht.wind.s*20).toFixed(0)} km/h${B.flying?" · [VUELO]":""}`,lt("cam").textContent="📷 "+jo[zn]+"  [V]",lt("mmInfo").textContent=`${Math.floor(B.pos.x)}, ${Math.floor(B.pos.y)}, ${Math.floor(B.pos.z)}
${String(c).padStart(2,"0")}:${String(u).padStart(2,"0")} · ${le==="overworld"?tc[Ht.state]:hc[le]}
📷 ${["1ª persona","3ª detrás","3ª delante"][zn]} · ${ul} FPS`,lt("xpFill").style.width=Wi/lc(Qn)*100+"%",lt("xpLvl").textContent=Qn,lt("xp").style.visibility=ne==="survival"?"visible":"hidden";const h=[];B.effects.poison>0&&h.push(`<span style="border-color:#7a2">☠ Veneno ${Math.ceil(B.effects.poison)}s</span>`),B.effects.fatigue>0&&h.push(`<span style="border-color:#6cf">⛏ Fatiga ${Math.ceil(B.effects.fatigue)}s</span>`),B.effects.burn>0&&h.push(`<span style="border-color:#f80">🔥 Fuego ${Math.ceil(B.effects.burn)}s</span>`),lt("effects").innerHTML=h.join(""),lt("darkness").style.opacity=Xi}rl-=t,rl<=0&&(rl=.4,$x()),ol-=t,ol<=0&&(ol=.5,jx()),Hc+=t,al+=t,al>25&&(al=0,zs=!0)}Xf&&(Wf.uniforms.uTime.value=i%1e4/1e3),Rn?Rn.render(t):Hn.render(Je,Qe),zs&&(zs=!1,h1(),us())}}requestAnimationFrame(rd);(async function(){const t=a=>(a>=3600?Math.floor(a/3600)+" h ":"")+Math.floor(a%3600/60)+" min",e=a=>{let l=7;for(const o of a)l=Math.imul(l,31)+o.charCodeAt(0)|0;return Math.abs(l)%9e5+1};async function n(){const a=await Ff();return lt("worldsBox").classList.toggle("hidden",!a.length),lt("worldList").innerHTML=a.map(l=>`<div class="wcard" data-id="${l.id}"><img src="${l.thumb||""}" alt=""><div><b>${(l.name||"Mundo").replace(/</g,"&lt;")}</b><small>${l.mode==="creative"?"Creativo":"Supervivencia"} · nivel ${l.level||0} · ${t(l.played||0)} · ${new Date(l.updated).toLocaleString()}</small></div><div class="wb"><button class="play" data-act="play">▶ Jugar</button><button data-act="export" title="Exportar">⬇</button><button data-act="rename" title="Renombrar">✎</button><button data-act="del" title="Borrar">🗑</button></div></div>`).join(""),a}let s=await n();lt("msg").textContent=s.length?"Elige un mundo o crea uno nuevo":"Elige cómo jugar";const r=a=>{Lr();const l=lt("wName").value.trim()||`Mundo ${s.length+1}`,o=lt("wSeed").value.trim(),c=o?/^\d+$/.test(o)?Number(o)%9e5+1:e(o):1+Math.floor(Math.random()*9e5);Uu({id:Bf(),name:l,seed:c,mode:a,saved:new Map,meta:null})};lt("bSurvival").onclick=()=>r("survival"),lt("bCreative").onclick=()=>r("creative"),lt("worldList").addEventListener("click",async a=>{const l=a.target.closest("button"),o=a.target.closest(".wcard");if(!l||!o)return;const c=o.dataset.id,u=s.find(h=>h.id===c);if(l.dataset.act==="play"){Lr(),lt("msg").textContent="Cargando mundo…";const h=await zf(c);if(!h.meta){lt("msg").textContent="No se pudo leer este mundo";return}Uu({id:c,name:u.name,seed:h.meta.seed,mode:h.meta.mode,saved:h.chunks,nether:h.nether,end:h.end,meta:h.meta,created:u.created,played:u.played})}else if(l.dataset.act==="del")confirm(`¿Borrar "${u.name}" para siempre?`)&&(await Fx(c),s=await n());else if(l.dataset.act==="rename"){const h=prompt("Nuevo nombre",u.name);h&&h.trim()&&(await zx(c,h.trim().slice(0,28)),s=await n())}else if(l.dataset.act==="export"){const h=await Gf(c),f=document.createElement("a");f.href=URL.createObjectURL(h),f.download=(u.name||"mundo").replace(/[^\w\-]+/g,"_")+".mcw",f.click(),setTimeout(()=>URL.revokeObjectURL(f.href),4e3)}}),lt("bImport").onclick=()=>lt("fImport").click(),lt("fImport").onchange=async a=>{const l=a.target.files[0];if(l){try{await Hx(l),s=await n(),lt("msg").textContent="✔ Partida importada"}catch{lt("msg").textContent="⚠ Archivo no válido"}a.target.value=""}},window.__menu={refresh:async()=>s=await n()}})();
