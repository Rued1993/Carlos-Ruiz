(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Bh="170",e0=0,Cc=1,i0=2,_d=1,Md=2,wn=3,os=0,wi=1,Ei=2,Pn=0,$s=1,qo=2,Lc=3,Dc=4,n0=5,ms=100,s0=101,o0=102,r0=103,a0=104,l0=200,h0=201,c0=202,f0=203,Ul=204,zl=205,d0=206,u0=207,p0=208,m0=209,g0=210,x0=211,v0=212,_0=213,M0=214,Fl=0,kl=1,Bl=2,eo=3,Hl=4,Gl=5,Vl=6,Wl=7,Hh=0,y0=1,b0=2,In=0,yd=1,bd=2,Sd=3,Ra=4,S0=5,Ed=6,wd=7,Td=300,io=301,no=302,Xl=303,ql=304,Ca=306,aa=1e3,vs=1001,Yl=1002,xe=1003,E0=1004,hr=1005,Yi=1006,Fa=1007,Cn=1008,zn=1009,Ad=1010,Rd=1011,Yo=1012,Gh=1013,bs=1014,Ln=1015,pn=1016,Vh=1017,Wh=1018,so=1020,Cd=35902,Ld=1021,Dd=1022,nn=1023,Pd=1024,Id=1025,Zs=1026,oo=1027,Nd=1028,Xh=1029,Od=1030,qh=1031,Yh=1033,jr=33776,$r=33777,Zr=33778,Jr=33779,Kl=35840,jl=35841,$l=35842,Zl=35843,Jl=36196,Ql=37492,th=37496,eh=37808,ih=37809,nh=37810,sh=37811,oh=37812,rh=37813,ah=37814,lh=37815,hh=37816,ch=37817,fh=37818,dh=37819,uh=37820,ph=37821,Qr=36492,mh=36494,gh=36495,Ud=36283,xh=36284,vh=36285,_h=36286,w0=3200,T0=3201,Kh=0,A0=1,$n="",li="srgb",fo="srgb-linear",La="linear",we="srgb",Rs=7680,Pc=519,R0=512,C0=513,L0=514,zd=515,D0=516,P0=517,I0=518,N0=519,Mh=35044,Ic="300 es",Dn=2e3,la=2001;class uo{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const o=s.indexOf(e);o!==-1&&s.splice(o,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let o=0,r=s.length;o<r;o++)s[o].call(this,t);t.target=null}}}const gi=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ta=Math.PI/180,yh=180/Math.PI;function Jn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(gi[n&255]+gi[n>>8&255]+gi[n>>16&255]+gi[n>>24&255]+"-"+gi[t&255]+gi[t>>8&255]+"-"+gi[t>>16&15|64]+gi[t>>24&255]+"-"+gi[e&63|128]+gi[e>>8&255]+"-"+gi[e>>16&255]+gi[e>>24&255]+gi[i&255]+gi[i>>8&255]+gi[i>>16&255]+gi[i>>24&255]).toLowerCase()}function Di(n,t,e){return Math.max(t,Math.min(e,n))}function O0(n,t){return(n%t+t)%t}function ka(n,t,e){return(1-e)*n+e*t}function fn(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ae(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class kt{constructor(t=0,e=0){kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Di(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),o=this.x-t.x,r=this.y-t.y;return this.x=o*i-r*s+t.x,this.y=o*s+r*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Jt{constructor(t,e,i,s,o,r,l,a,h){Jt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,l,a,h)}set(t,e,i,s,o,r,l,a,h){const f=this.elements;return f[0]=t,f[1]=s,f[2]=l,f[3]=e,f[4]=o,f[5]=a,f[6]=i,f[7]=r,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],l=i[3],a=i[6],h=i[1],f=i[4],c=i[7],d=i[2],u=i[5],p=i[8],x=s[0],m=s[3],g=s[6],M=s[1],S=s[4],v=s[7],D=s[2],R=s[5],w=s[8];return o[0]=r*x+l*M+a*D,o[3]=r*m+l*S+a*R,o[6]=r*g+l*v+a*w,o[1]=h*x+f*M+c*D,o[4]=h*m+f*S+c*R,o[7]=h*g+f*v+c*w,o[2]=d*x+u*M+p*D,o[5]=d*m+u*S+p*R,o[8]=d*g+u*v+p*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],l=t[5],a=t[6],h=t[7],f=t[8];return e*r*f-e*l*h-i*o*f+i*l*a+s*o*h-s*r*a}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],l=t[5],a=t[6],h=t[7],f=t[8],c=f*r-l*h,d=l*a-f*o,u=h*o-r*a,p=e*c+i*d+s*u;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/p;return t[0]=c*x,t[1]=(s*h-f*i)*x,t[2]=(l*i-s*r)*x,t[3]=d*x,t[4]=(f*e-s*a)*x,t[5]=(s*o-l*e)*x,t[6]=u*x,t[7]=(i*a-h*e)*x,t[8]=(r*e-i*o)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,o,r,l){const a=Math.cos(o),h=Math.sin(o);return this.set(i*a,i*h,-i*(a*r+h*l)+r+t,-s*h,s*a,-s*(-h*r+a*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(Ba.makeScale(t,e)),this}rotate(t){return this.premultiply(Ba.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ba.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ba=new Jt;function Fd(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ha(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function U0(){const n=ha("canvas");return n.style.display="block",n}const Nc={};function Po(n){n in Nc||(Nc[n]=!0,console.warn(n))}function z0(n,t,e){return new Promise(function(i,s){function o(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(o,e);break;default:i()}}setTimeout(o,e)})}function F0(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function k0(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const pe={enabled:!0,workingColorSpace:fo,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===we&&(n.r=Nn(n.r),n.g=Nn(n.g),n.b=Nn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===we&&(n.r=Js(n.r),n.g=Js(n.g),n.b=Js(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===$n?La:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Nn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Js(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const Oc=[.64,.33,.3,.6,.15,.06],Uc=[.2126,.7152,.0722],zc=[.3127,.329],Fc=new Jt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kc=new Jt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);pe.define({[fo]:{primaries:Oc,whitePoint:zc,transfer:La,toXYZ:Fc,fromXYZ:kc,luminanceCoefficients:Uc,workingColorSpaceConfig:{unpackColorSpace:li},outputColorSpaceConfig:{drawingBufferColorSpace:li}},[li]:{primaries:Oc,whitePoint:zc,transfer:we,toXYZ:Fc,fromXYZ:kc,luminanceCoefficients:Uc,outputColorSpaceConfig:{drawingBufferColorSpace:li}}});let Cs;class B0{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Cs===void 0&&(Cs=ha("canvas")),Cs.width=t.width,Cs.height=t.height;const i=Cs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Cs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ha("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),o=s.data;for(let r=0;r<o.length;r++)o[r]=Nn(o[r]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Nn(e[i]/255)*255):e[i]=Nn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let H0=0;class kd{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:H0++}),this.uuid=Jn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let o;if(Array.isArray(s)){o=[];for(let r=0,l=s.length;r<l;r++)s[r].isDataTexture?o.push(Ha(s[r].image)):o.push(Ha(s[r]))}else o=Ha(s);i.url=o}return e||(t.images[this.uuid]=i),i}}function Ha(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?B0.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let G0=0;class Ti extends uo{constructor(t=Ti.DEFAULT_IMAGE,e=Ti.DEFAULT_MAPPING,i=vs,s=vs,o=Yi,r=Cn,l=nn,a=zn,h=Ti.DEFAULT_ANISOTROPY,f=$n){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:G0++}),this.uuid=Jn(),this.name="",this.source=new kd(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=o,this.minFilter=r,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=a,this.offset=new kt(0,0),this.repeat=new kt(1,1),this.center=new kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Jt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Td)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case aa:t.x=t.x-Math.floor(t.x);break;case vs:t.x=t.x<0?0:1;break;case Yl:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case aa:t.y=t.y-Math.floor(t.y);break;case vs:t.y=t.y<0?0:1;break;case Yl:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ti.DEFAULT_IMAGE=null;Ti.DEFAULT_MAPPING=Td;Ti.DEFAULT_ANISOTROPY=1;class Ce{constructor(t=0,e=0,i=0,s=1){Ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=this.w,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s+r[12]*o,this.y=r[1]*e+r[5]*i+r[9]*s+r[13]*o,this.z=r[2]*e+r[6]*i+r[10]*s+r[14]*o,this.w=r[3]*e+r[7]*i+r[11]*s+r[15]*o,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,o;const a=t.elements,h=a[0],f=a[4],c=a[8],d=a[1],u=a[5],p=a[9],x=a[2],m=a[6],g=a[10];if(Math.abs(f-d)<.01&&Math.abs(c-x)<.01&&Math.abs(p-m)<.01){if(Math.abs(f+d)<.1&&Math.abs(c+x)<.1&&Math.abs(p+m)<.1&&Math.abs(h+u+g-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const S=(h+1)/2,v=(u+1)/2,D=(g+1)/2,R=(f+d)/4,w=(c+x)/4,C=(p+m)/4;return S>v&&S>D?S<.01?(i=0,s=.707106781,o=.707106781):(i=Math.sqrt(S),s=R/i,o=w/i):v>D?v<.01?(i=.707106781,s=0,o=.707106781):(s=Math.sqrt(v),i=R/s,o=C/s):D<.01?(i=.707106781,s=.707106781,o=0):(o=Math.sqrt(D),i=w/o,s=C/o),this.set(i,s,o,e),this}let M=Math.sqrt((m-p)*(m-p)+(c-x)*(c-x)+(d-f)*(d-f));return Math.abs(M)<.001&&(M=1),this.x=(m-p)/M,this.y=(c-x)/M,this.z=(d-f)/M,this.w=Math.acos((h+u+g-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class V0 extends uo{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ce(0,0,t,e),this.scissorTest=!1,this.viewport=new Ce(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Yi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const o=new Ti(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);o.flipY=!1,o.generateMipmaps=i.generateMipmaps,o.internalFormat=i.internalFormat,this.textures=[];const r=i.count;for(let l=0;l<r;l++)this.textures[l]=o.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,o=this.textures.length;s<o;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new kd(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ki extends V0{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class Bd extends Ti{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xe,this.minFilter=xe,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class W0 extends Ti{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=xe,this.minFilter=xe,this.wrapR=vs,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ir{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,o,r,l){let a=i[s+0],h=i[s+1],f=i[s+2],c=i[s+3];const d=o[r+0],u=o[r+1],p=o[r+2],x=o[r+3];if(l===0){t[e+0]=a,t[e+1]=h,t[e+2]=f,t[e+3]=c;return}if(l===1){t[e+0]=d,t[e+1]=u,t[e+2]=p,t[e+3]=x;return}if(c!==x||a!==d||h!==u||f!==p){let m=1-l;const g=a*d+h*u+f*p+c*x,M=g>=0?1:-1,S=1-g*g;if(S>Number.EPSILON){const D=Math.sqrt(S),R=Math.atan2(D,g*M);m=Math.sin(m*R)/D,l=Math.sin(l*R)/D}const v=l*M;if(a=a*m+d*v,h=h*m+u*v,f=f*m+p*v,c=c*m+x*v,m===1-l){const D=1/Math.sqrt(a*a+h*h+f*f+c*c);a*=D,h*=D,f*=D,c*=D}}t[e]=a,t[e+1]=h,t[e+2]=f,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,s,o,r){const l=i[s],a=i[s+1],h=i[s+2],f=i[s+3],c=o[r],d=o[r+1],u=o[r+2],p=o[r+3];return t[e]=l*p+f*c+a*u-h*d,t[e+1]=a*p+f*d+h*c-l*u,t[e+2]=h*p+f*u+l*d-a*c,t[e+3]=f*p-l*c-a*d-h*u,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,o=t._z,r=t._order,l=Math.cos,a=Math.sin,h=l(i/2),f=l(s/2),c=l(o/2),d=a(i/2),u=a(s/2),p=a(o/2);switch(r){case"XYZ":this._x=d*f*c+h*u*p,this._y=h*u*c-d*f*p,this._z=h*f*p+d*u*c,this._w=h*f*c-d*u*p;break;case"YXZ":this._x=d*f*c+h*u*p,this._y=h*u*c-d*f*p,this._z=h*f*p-d*u*c,this._w=h*f*c+d*u*p;break;case"ZXY":this._x=d*f*c-h*u*p,this._y=h*u*c+d*f*p,this._z=h*f*p+d*u*c,this._w=h*f*c-d*u*p;break;case"ZYX":this._x=d*f*c-h*u*p,this._y=h*u*c+d*f*p,this._z=h*f*p-d*u*c,this._w=h*f*c+d*u*p;break;case"YZX":this._x=d*f*c+h*u*p,this._y=h*u*c+d*f*p,this._z=h*f*p-d*u*c,this._w=h*f*c-d*u*p;break;case"XZY":this._x=d*f*c-h*u*p,this._y=h*u*c-d*f*p,this._z=h*f*p+d*u*c,this._w=h*f*c+d*u*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],o=e[8],r=e[1],l=e[5],a=e[9],h=e[2],f=e[6],c=e[10],d=i+l+c;if(d>0){const u=.5/Math.sqrt(d+1);this._w=.25/u,this._x=(f-a)*u,this._y=(o-h)*u,this._z=(r-s)*u}else if(i>l&&i>c){const u=2*Math.sqrt(1+i-l-c);this._w=(f-a)/u,this._x=.25*u,this._y=(s+r)/u,this._z=(o+h)/u}else if(l>c){const u=2*Math.sqrt(1+l-i-c);this._w=(o-h)/u,this._x=(s+r)/u,this._y=.25*u,this._z=(a+f)/u}else{const u=2*Math.sqrt(1+c-i-l);this._w=(r-s)/u,this._x=(o+h)/u,this._y=(a+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Di(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,o=t._z,r=t._w,l=e._x,a=e._y,h=e._z,f=e._w;return this._x=i*f+r*l+s*h-o*a,this._y=s*f+r*a+o*l-i*h,this._z=o*f+r*h+i*a-s*l,this._w=r*f-i*l-s*a-o*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,o=this._z,r=this._w;let l=r*t._w+i*t._x+s*t._y+o*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=r,this._x=i,this._y=s,this._z=o,this;const a=1-l*l;if(a<=Number.EPSILON){const u=1-e;return this._w=u*r+e*this._w,this._x=u*i+e*this._x,this._y=u*s+e*this._y,this._z=u*o+e*this._z,this.normalize(),this}const h=Math.sqrt(a),f=Math.atan2(h,l),c=Math.sin((1-e)*f)/h,d=Math.sin(e*f)/h;return this._w=r*c+this._w*d,this._x=i*c+this._x*d,this._y=s*c+this._y*d,this._z=o*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),o=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),o*Math.sin(e),o*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class I{constructor(t=0,e=0,i=0){I.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Bc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Bc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[3]*i+o[6]*s,this.y=o[1]*e+o[4]*i+o[7]*s,this.z=o[2]*e+o[5]*i+o[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,o=t.elements,r=1/(o[3]*e+o[7]*i+o[11]*s+o[15]);return this.x=(o[0]*e+o[4]*i+o[8]*s+o[12])*r,this.y=(o[1]*e+o[5]*i+o[9]*s+o[13])*r,this.z=(o[2]*e+o[6]*i+o[10]*s+o[14])*r,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,o=t.x,r=t.y,l=t.z,a=t.w,h=2*(r*s-l*i),f=2*(l*e-o*s),c=2*(o*i-r*e);return this.x=e+a*h+r*c-l*f,this.y=i+a*f+l*h-o*c,this.z=s+a*c+o*f-r*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s,this.y=o[1]*e+o[5]*i+o[9]*s,this.z=o[2]*e+o[6]*i+o[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,o=t.z,r=e.x,l=e.y,a=e.z;return this.x=s*a-o*l,this.y=o*r-i*a,this.z=i*l-s*r,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ga.copy(this).projectOnVector(t),this.sub(Ga)}reflect(t){return this.sub(Ga.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Di(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ga=new I,Bc=new ir;class nr{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Zi.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Zi.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Zi.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const o=i.getAttribute("position");if(e===!0&&o!==void 0&&t.isInstancedMesh!==!0)for(let r=0,l=o.count;r<l;r++)t.isMesh===!0?t.getVertexPosition(r,Zi):Zi.fromBufferAttribute(o,r),Zi.applyMatrix4(t.matrixWorld),this.expandByPoint(Zi);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),cr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),cr.copy(i.boundingBox)),cr.applyMatrix4(t.matrixWorld),this.union(cr)}const s=t.children;for(let o=0,r=s.length;o<r;o++)this.expandByObject(s[o],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Zi),Zi.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Mo),fr.subVectors(this.max,Mo),Ls.subVectors(t.a,Mo),Ds.subVectors(t.b,Mo),Ps.subVectors(t.c,Mo),Gn.subVectors(Ds,Ls),Vn.subVectors(Ps,Ds),as.subVectors(Ls,Ps);let e=[0,-Gn.z,Gn.y,0,-Vn.z,Vn.y,0,-as.z,as.y,Gn.z,0,-Gn.x,Vn.z,0,-Vn.x,as.z,0,-as.x,-Gn.y,Gn.x,0,-Vn.y,Vn.x,0,-as.y,as.x,0];return!Va(e,Ls,Ds,Ps,fr)||(e=[1,0,0,0,1,0,0,0,1],!Va(e,Ls,Ds,Ps,fr))?!1:(dr.crossVectors(Gn,Vn),e=[dr.x,dr.y,dr.z],Va(e,Ls,Ds,Ps,fr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Zi).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Zi).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Mn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Mn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Mn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Mn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Mn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Mn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Mn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Mn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Mn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Mn=[new I,new I,new I,new I,new I,new I,new I,new I],Zi=new I,cr=new nr,Ls=new I,Ds=new I,Ps=new I,Gn=new I,Vn=new I,as=new I,Mo=new I,fr=new I,dr=new I,ls=new I;function Va(n,t,e,i,s){for(let o=0,r=n.length-3;o<=r;o+=3){ls.fromArray(n,o);const l=s.x*Math.abs(ls.x)+s.y*Math.abs(ls.y)+s.z*Math.abs(ls.z),a=t.dot(ls),h=e.dot(ls),f=i.dot(ls);if(Math.max(-Math.max(a,h,f),Math.min(a,h,f))>l)return!1}return!0}const X0=new nr,yo=new I,Wa=new I;class sr{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):X0.setFromPoints(t).getCenter(i);let s=0;for(let o=0,r=t.length;o<r;o++)s=Math.max(s,i.distanceToSquared(t[o]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;yo.subVectors(t,this.center);const e=yo.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(yo,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Wa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(yo.copy(t.center).add(Wa)),this.expandByPoint(yo.copy(t.center).sub(Wa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const yn=new I,Xa=new I,ur=new I,Wn=new I,qa=new I,pr=new I,Ya=new I;class jh{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,yn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=yn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(yn.copy(this.origin).addScaledVector(this.direction,e),yn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){Xa.copy(t).add(e).multiplyScalar(.5),ur.copy(e).sub(t).normalize(),Wn.copy(this.origin).sub(Xa);const o=t.distanceTo(e)*.5,r=-this.direction.dot(ur),l=Wn.dot(this.direction),a=-Wn.dot(ur),h=Wn.lengthSq(),f=Math.abs(1-r*r);let c,d,u,p;if(f>0)if(c=r*a-l,d=r*l-a,p=o*f,c>=0)if(d>=-p)if(d<=p){const x=1/f;c*=x,d*=x,u=c*(c+r*d+2*l)+d*(r*c+d+2*a)+h}else d=o,c=Math.max(0,-(r*d+l)),u=-c*c+d*(d+2*a)+h;else d=-o,c=Math.max(0,-(r*d+l)),u=-c*c+d*(d+2*a)+h;else d<=-p?(c=Math.max(0,-(-r*o+l)),d=c>0?-o:Math.min(Math.max(-o,-a),o),u=-c*c+d*(d+2*a)+h):d<=p?(c=0,d=Math.min(Math.max(-o,-a),o),u=d*(d+2*a)+h):(c=Math.max(0,-(r*o+l)),d=c>0?o:Math.min(Math.max(-o,-a),o),u=-c*c+d*(d+2*a)+h);else d=r>0?-o:o,c=Math.max(0,-(r*d+l)),u=-c*c+d*(d+2*a)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(Xa).addScaledVector(ur,d),u}intersectSphere(t,e){yn.subVectors(t.center,this.origin);const i=yn.dot(this.direction),s=yn.dot(yn)-i*i,o=t.radius*t.radius;if(s>o)return null;const r=Math.sqrt(o-s),l=i-r,a=i+r;return a<0?null:l<0?this.at(a,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,o,r,l,a;const h=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,d=this.origin;return h>=0?(i=(t.min.x-d.x)*h,s=(t.max.x-d.x)*h):(i=(t.max.x-d.x)*h,s=(t.min.x-d.x)*h),f>=0?(o=(t.min.y-d.y)*f,r=(t.max.y-d.y)*f):(o=(t.max.y-d.y)*f,r=(t.min.y-d.y)*f),i>r||o>s||((o>i||isNaN(i))&&(i=o),(r<s||isNaN(s))&&(s=r),c>=0?(l=(t.min.z-d.z)*c,a=(t.max.z-d.z)*c):(l=(t.max.z-d.z)*c,a=(t.min.z-d.z)*c),i>a||l>s)||((l>i||i!==i)&&(i=l),(a<s||s!==s)&&(s=a),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,yn)!==null}intersectTriangle(t,e,i,s,o){qa.subVectors(e,t),pr.subVectors(i,t),Ya.crossVectors(qa,pr);let r=this.direction.dot(Ya),l;if(r>0){if(s)return null;l=1}else if(r<0)l=-1,r=-r;else return null;Wn.subVectors(this.origin,t);const a=l*this.direction.dot(pr.crossVectors(Wn,pr));if(a<0)return null;const h=l*this.direction.dot(qa.cross(Wn));if(h<0||a+h>r)return null;const f=-l*Wn.dot(Ya);return f<0?null:this.at(f/r,o)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ne{constructor(t,e,i,s,o,r,l,a,h,f,c,d,u,p,x,m){Ne.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,o,r,l,a,h,f,c,d,u,p,x,m)}set(t,e,i,s,o,r,l,a,h,f,c,d,u,p,x,m){const g=this.elements;return g[0]=t,g[4]=e,g[8]=i,g[12]=s,g[1]=o,g[5]=r,g[9]=l,g[13]=a,g[2]=h,g[6]=f,g[10]=c,g[14]=d,g[3]=u,g[7]=p,g[11]=x,g[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ne().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/Is.setFromMatrixColumn(t,0).length(),o=1/Is.setFromMatrixColumn(t,1).length(),r=1/Is.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*o,e[5]=i[5]*o,e[6]=i[6]*o,e[7]=0,e[8]=i[8]*r,e[9]=i[9]*r,e[10]=i[10]*r,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,o=t.z,r=Math.cos(i),l=Math.sin(i),a=Math.cos(s),h=Math.sin(s),f=Math.cos(o),c=Math.sin(o);if(t.order==="XYZ"){const d=r*f,u=r*c,p=l*f,x=l*c;e[0]=a*f,e[4]=-a*c,e[8]=h,e[1]=u+p*h,e[5]=d-x*h,e[9]=-l*a,e[2]=x-d*h,e[6]=p+u*h,e[10]=r*a}else if(t.order==="YXZ"){const d=a*f,u=a*c,p=h*f,x=h*c;e[0]=d+x*l,e[4]=p*l-u,e[8]=r*h,e[1]=r*c,e[5]=r*f,e[9]=-l,e[2]=u*l-p,e[6]=x+d*l,e[10]=r*a}else if(t.order==="ZXY"){const d=a*f,u=a*c,p=h*f,x=h*c;e[0]=d-x*l,e[4]=-r*c,e[8]=p+u*l,e[1]=u+p*l,e[5]=r*f,e[9]=x-d*l,e[2]=-r*h,e[6]=l,e[10]=r*a}else if(t.order==="ZYX"){const d=r*f,u=r*c,p=l*f,x=l*c;e[0]=a*f,e[4]=p*h-u,e[8]=d*h+x,e[1]=a*c,e[5]=x*h+d,e[9]=u*h-p,e[2]=-h,e[6]=l*a,e[10]=r*a}else if(t.order==="YZX"){const d=r*a,u=r*h,p=l*a,x=l*h;e[0]=a*f,e[4]=x-d*c,e[8]=p*c+u,e[1]=c,e[5]=r*f,e[9]=-l*f,e[2]=-h*f,e[6]=u*c+p,e[10]=d-x*c}else if(t.order==="XZY"){const d=r*a,u=r*h,p=l*a,x=l*h;e[0]=a*f,e[4]=-c,e[8]=h*f,e[1]=d*c+x,e[5]=r*f,e[9]=u*c-p,e[2]=p*c-u,e[6]=l*f,e[10]=x*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(q0,t,Y0)}lookAt(t,e,i){const s=this.elements;return Oi.subVectors(t,e),Oi.lengthSq()===0&&(Oi.z=1),Oi.normalize(),Xn.crossVectors(i,Oi),Xn.lengthSq()===0&&(Math.abs(i.z)===1?Oi.x+=1e-4:Oi.z+=1e-4,Oi.normalize(),Xn.crossVectors(i,Oi)),Xn.normalize(),mr.crossVectors(Oi,Xn),s[0]=Xn.x,s[4]=mr.x,s[8]=Oi.x,s[1]=Xn.y,s[5]=mr.y,s[9]=Oi.y,s[2]=Xn.z,s[6]=mr.z,s[10]=Oi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,o=this.elements,r=i[0],l=i[4],a=i[8],h=i[12],f=i[1],c=i[5],d=i[9],u=i[13],p=i[2],x=i[6],m=i[10],g=i[14],M=i[3],S=i[7],v=i[11],D=i[15],R=s[0],w=s[4],C=s[8],y=s[12],b=s[1],P=s[5],O=s[9],U=s[13],G=s[2],$=s[6],Y=s[10],K=s[14],W=s[3],ot=s[7],rt=s[11],_t=s[15];return o[0]=r*R+l*b+a*G+h*W,o[4]=r*w+l*P+a*$+h*ot,o[8]=r*C+l*O+a*Y+h*rt,o[12]=r*y+l*U+a*K+h*_t,o[1]=f*R+c*b+d*G+u*W,o[5]=f*w+c*P+d*$+u*ot,o[9]=f*C+c*O+d*Y+u*rt,o[13]=f*y+c*U+d*K+u*_t,o[2]=p*R+x*b+m*G+g*W,o[6]=p*w+x*P+m*$+g*ot,o[10]=p*C+x*O+m*Y+g*rt,o[14]=p*y+x*U+m*K+g*_t,o[3]=M*R+S*b+v*G+D*W,o[7]=M*w+S*P+v*$+D*ot,o[11]=M*C+S*O+v*Y+D*rt,o[15]=M*y+S*U+v*K+D*_t,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],o=t[12],r=t[1],l=t[5],a=t[9],h=t[13],f=t[2],c=t[6],d=t[10],u=t[14],p=t[3],x=t[7],m=t[11],g=t[15];return p*(+o*a*c-s*h*c-o*l*d+i*h*d+s*l*u-i*a*u)+x*(+e*a*u-e*h*d+o*r*d-s*r*u+s*h*f-o*a*f)+m*(+e*h*c-e*l*u-o*r*c+i*r*u+o*l*f-i*h*f)+g*(-s*l*f-e*a*c+e*l*d+s*r*c-i*r*d+i*a*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],o=t[3],r=t[4],l=t[5],a=t[6],h=t[7],f=t[8],c=t[9],d=t[10],u=t[11],p=t[12],x=t[13],m=t[14],g=t[15],M=c*m*h-x*d*h+x*a*u-l*m*u-c*a*g+l*d*g,S=p*d*h-f*m*h-p*a*u+r*m*u+f*a*g-r*d*g,v=f*x*h-p*c*h+p*l*u-r*x*u-f*l*g+r*c*g,D=p*c*a-f*x*a-p*l*d+r*x*d+f*l*m-r*c*m,R=e*M+i*S+s*v+o*D;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/R;return t[0]=M*w,t[1]=(x*d*o-c*m*o-x*s*u+i*m*u+c*s*g-i*d*g)*w,t[2]=(l*m*o-x*a*o+x*s*h-i*m*h-l*s*g+i*a*g)*w,t[3]=(c*a*o-l*d*o-c*s*h+i*d*h+l*s*u-i*a*u)*w,t[4]=S*w,t[5]=(f*m*o-p*d*o+p*s*u-e*m*u-f*s*g+e*d*g)*w,t[6]=(p*a*o-r*m*o-p*s*h+e*m*h+r*s*g-e*a*g)*w,t[7]=(r*d*o-f*a*o+f*s*h-e*d*h-r*s*u+e*a*u)*w,t[8]=v*w,t[9]=(p*c*o-f*x*o-p*i*u+e*x*u+f*i*g-e*c*g)*w,t[10]=(r*x*o-p*l*o+p*i*h-e*x*h-r*i*g+e*l*g)*w,t[11]=(f*l*o-r*c*o-f*i*h+e*c*h+r*i*u-e*l*u)*w,t[12]=D*w,t[13]=(f*x*s-p*c*s+p*i*d-e*x*d-f*i*m+e*c*m)*w,t[14]=(p*l*s-r*x*s-p*i*a+e*x*a+r*i*m-e*l*m)*w,t[15]=(r*c*s-f*l*s+f*i*a-e*c*a-r*i*d+e*l*d)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,o=t.z;return e[0]*=i,e[4]*=s,e[8]*=o,e[1]*=i,e[5]*=s,e[9]*=o,e[2]*=i,e[6]*=s,e[10]*=o,e[3]*=i,e[7]*=s,e[11]*=o,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),o=1-i,r=t.x,l=t.y,a=t.z,h=o*r,f=o*l;return this.set(h*r+i,h*l-s*a,h*a+s*l,0,h*l+s*a,f*l+i,f*a-s*r,0,h*a-s*l,f*a+s*r,o*a*a+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,o,r){return this.set(1,i,o,0,t,1,r,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,o=e._x,r=e._y,l=e._z,a=e._w,h=o+o,f=r+r,c=l+l,d=o*h,u=o*f,p=o*c,x=r*f,m=r*c,g=l*c,M=a*h,S=a*f,v=a*c,D=i.x,R=i.y,w=i.z;return s[0]=(1-(x+g))*D,s[1]=(u+v)*D,s[2]=(p-S)*D,s[3]=0,s[4]=(u-v)*R,s[5]=(1-(d+g))*R,s[6]=(m+M)*R,s[7]=0,s[8]=(p+S)*w,s[9]=(m-M)*w,s[10]=(1-(d+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let o=Is.set(s[0],s[1],s[2]).length();const r=Is.set(s[4],s[5],s[6]).length(),l=Is.set(s[8],s[9],s[10]).length();this.determinant()<0&&(o=-o),t.x=s[12],t.y=s[13],t.z=s[14],Ji.copy(this);const h=1/o,f=1/r,c=1/l;return Ji.elements[0]*=h,Ji.elements[1]*=h,Ji.elements[2]*=h,Ji.elements[4]*=f,Ji.elements[5]*=f,Ji.elements[6]*=f,Ji.elements[8]*=c,Ji.elements[9]*=c,Ji.elements[10]*=c,e.setFromRotationMatrix(Ji),i.x=o,i.y=r,i.z=l,this}makePerspective(t,e,i,s,o,r,l=Dn){const a=this.elements,h=2*o/(e-t),f=2*o/(i-s),c=(e+t)/(e-t),d=(i+s)/(i-s);let u,p;if(l===Dn)u=-(r+o)/(r-o),p=-2*r*o/(r-o);else if(l===la)u=-r/(r-o),p=-r*o/(r-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return a[0]=h,a[4]=0,a[8]=c,a[12]=0,a[1]=0,a[5]=f,a[9]=d,a[13]=0,a[2]=0,a[6]=0,a[10]=u,a[14]=p,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(t,e,i,s,o,r,l=Dn){const a=this.elements,h=1/(e-t),f=1/(i-s),c=1/(r-o),d=(e+t)*h,u=(i+s)*f;let p,x;if(l===Dn)p=(r+o)*c,x=-2*c;else if(l===la)p=o*c,x=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return a[0]=2*h,a[4]=0,a[8]=0,a[12]=-d,a[1]=0,a[5]=2*f,a[9]=0,a[13]=-u,a[2]=0,a[6]=0,a[10]=x,a[14]=-p,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const Is=new I,Ji=new Ne,q0=new I(0,0,0),Y0=new I(1,1,1),Xn=new I,mr=new I,Oi=new I,Hc=new Ne,Gc=new ir;class rn{constructor(t=0,e=0,i=0,s=rn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,o=s[0],r=s[4],l=s[8],a=s[1],h=s[5],f=s[9],c=s[2],d=s[6],u=s[10];switch(e){case"XYZ":this._y=Math.asin(Di(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-r,o)):(this._x=Math.atan2(d,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Di(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,u),this._z=Math.atan2(a,h)):(this._y=Math.atan2(-c,o),this._z=0);break;case"ZXY":this._x=Math.asin(Di(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,u),this._z=Math.atan2(-r,h)):(this._y=0,this._z=Math.atan2(a,o));break;case"ZYX":this._y=Math.asin(-Di(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,u),this._z=Math.atan2(a,o)):(this._x=0,this._z=Math.atan2(-r,h));break;case"YZX":this._z=Math.asin(Di(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-c,o)):(this._x=0,this._y=Math.atan2(l,u));break;case"XZY":this._z=Math.asin(-Di(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(d,h),this._y=Math.atan2(l,o)):(this._x=Math.atan2(-f,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Hc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Hc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}rn.DEFAULT_ORDER="XYZ";class Hd{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let K0=0;const Vc=new I,Ns=new ir,bn=new Ne,gr=new I,bo=new I,j0=new I,$0=new ir,Wc=new I(1,0,0),Xc=new I(0,1,0),qc=new I(0,0,1),Yc={type:"added"},Z0={type:"removed"},Os={type:"childadded",child:null},Ka={type:"childremoved",child:null};class Je extends uo{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:K0++}),this.uuid=Jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Je.DEFAULT_UP.clone();const t=new I,e=new rn,i=new ir,s=new I(1,1,1);function o(){i.setFromEuler(e,!1)}function r(){e.setFromQuaternion(i,void 0,!1)}e._onChange(o),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ne},normalMatrix:{value:new Jt}}),this.matrix=new Ne,this.matrixWorld=new Ne,this.matrixAutoUpdate=Je.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(t,e){return Ns.setFromAxisAngle(t,e),this.quaternion.premultiply(Ns),this}rotateX(t){return this.rotateOnAxis(Wc,t)}rotateY(t){return this.rotateOnAxis(Xc,t)}rotateZ(t){return this.rotateOnAxis(qc,t)}translateOnAxis(t,e){return Vc.copy(t).applyQuaternion(this.quaternion),this.position.add(Vc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Wc,t)}translateY(t){return this.translateOnAxis(Xc,t)}translateZ(t){return this.translateOnAxis(qc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(bn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?gr.copy(t):gr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),bo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bn.lookAt(bo,gr,this.up):bn.lookAt(gr,bo,this.up),this.quaternion.setFromRotationMatrix(bn),s&&(bn.extractRotation(s.matrixWorld),Ns.setFromRotationMatrix(bn),this.quaternion.premultiply(Ns.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Yc),Os.child=t,this.dispatchEvent(Os),Os.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Z0),Ka.child=t,this.dispatchEvent(Ka),Ka.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),bn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),bn.multiply(t.parent.matrixWorld)),t.applyMatrix4(bn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Yc),Os.child=t,this.dispatchEvent(Os),Os.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(t,e);if(r!==void 0)return r}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,t,j0),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(bo,$0,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let o=0,r=s.length;o<r;o++)s[o].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function o(l,a){return l[a.uuid]===void 0&&(l[a.uuid]=a.toJSON(t)),a.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=o(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const a=l.shapes;if(Array.isArray(a))for(let h=0,f=a.length;h<f;h++){const c=a[h];o(t.shapes,c)}else o(t.shapes,a)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let a=0,h=this.material.length;a<h;a++)l.push(o(t.materials,this.material[a]));s.material=l}else s.material=o(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const a=this.animations[l];s.animations.push(o(t.animations,a))}}if(e){const l=r(t.geometries),a=r(t.materials),h=r(t.textures),f=r(t.images),c=r(t.shapes),d=r(t.skeletons),u=r(t.animations),p=r(t.nodes);l.length>0&&(i.geometries=l),a.length>0&&(i.materials=a),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),d.length>0&&(i.skeletons=d),u.length>0&&(i.animations=u),p.length>0&&(i.nodes=p)}return i.object=s,i;function r(l){const a=[];for(const h in l){const f=l[h];delete f.metadata,a.push(f)}return a}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Je.DEFAULT_UP=new I(0,1,0);Je.DEFAULT_MATRIX_AUTO_UPDATE=!0;Je.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qi=new I,Sn=new I,ja=new I,En=new I,Us=new I,zs=new I,Kc=new I,$a=new I,Za=new I,Ja=new I,Qa=new Ce,tl=new Ce,el=new Ce;class ki{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),Qi.subVectors(t,e),s.cross(Qi);const o=s.lengthSq();return o>0?s.multiplyScalar(1/Math.sqrt(o)):s.set(0,0,0)}static getBarycoord(t,e,i,s,o){Qi.subVectors(s,e),Sn.subVectors(i,e),ja.subVectors(t,e);const r=Qi.dot(Qi),l=Qi.dot(Sn),a=Qi.dot(ja),h=Sn.dot(Sn),f=Sn.dot(ja),c=r*h-l*l;if(c===0)return o.set(0,0,0),null;const d=1/c,u=(h*a-l*f)*d,p=(r*f-l*a)*d;return o.set(1-u-p,p,u)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,En)===null?!1:En.x>=0&&En.y>=0&&En.x+En.y<=1}static getInterpolation(t,e,i,s,o,r,l,a){return this.getBarycoord(t,e,i,s,En)===null?(a.x=0,a.y=0,"z"in a&&(a.z=0),"w"in a&&(a.w=0),null):(a.setScalar(0),a.addScaledVector(o,En.x),a.addScaledVector(r,En.y),a.addScaledVector(l,En.z),a)}static getInterpolatedAttribute(t,e,i,s,o,r){return Qa.setScalar(0),tl.setScalar(0),el.setScalar(0),Qa.fromBufferAttribute(t,e),tl.fromBufferAttribute(t,i),el.fromBufferAttribute(t,s),r.setScalar(0),r.addScaledVector(Qa,o.x),r.addScaledVector(tl,o.y),r.addScaledVector(el,o.z),r}static isFrontFacing(t,e,i,s){return Qi.subVectors(i,e),Sn.subVectors(t,e),Qi.cross(Sn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Qi.subVectors(this.c,this.b),Sn.subVectors(this.a,this.b),Qi.cross(Sn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return ki.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return ki.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,o){return ki.getInterpolation(t,this.a,this.b,this.c,e,i,s,o)}containsPoint(t){return ki.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return ki.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,o=this.c;let r,l;Us.subVectors(s,i),zs.subVectors(o,i),$a.subVectors(t,i);const a=Us.dot($a),h=zs.dot($a);if(a<=0&&h<=0)return e.copy(i);Za.subVectors(t,s);const f=Us.dot(Za),c=zs.dot(Za);if(f>=0&&c<=f)return e.copy(s);const d=a*c-f*h;if(d<=0&&a>=0&&f<=0)return r=a/(a-f),e.copy(i).addScaledVector(Us,r);Ja.subVectors(t,o);const u=Us.dot(Ja),p=zs.dot(Ja);if(p>=0&&u<=p)return e.copy(o);const x=u*h-a*p;if(x<=0&&h>=0&&p<=0)return l=h/(h-p),e.copy(i).addScaledVector(zs,l);const m=f*p-u*c;if(m<=0&&c-f>=0&&u-p>=0)return Kc.subVectors(o,s),l=(c-f)/(c-f+(u-p)),e.copy(s).addScaledVector(Kc,l);const g=1/(m+x+d);return r=x*g,l=d*g,e.copy(i).addScaledVector(Us,r).addScaledVector(zs,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Gd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},qn={h:0,s:0,l:0},xr={h:0,s:0,l:0};function il(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Et{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=li){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,pe.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=pe.workingColorSpace){return this.r=t,this.g=e,this.b=i,pe.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=pe.workingColorSpace){if(t=O0(t,1),e=Di(e,0,1),i=Di(i,0,1),e===0)this.r=this.g=this.b=i;else{const o=i<=.5?i*(1+e):i+e-i*e,r=2*i-o;this.r=il(r,o,t+1/3),this.g=il(r,o,t),this.b=il(r,o,t-1/3)}return pe.toWorkingColorSpace(this,s),this}setStyle(t,e=li){function i(o){o!==void 0&&parseFloat(o)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let o;const r=s[1],l=s[2];switch(r){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,e);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,e);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const o=s[1],r=o.length;if(r===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,e);if(r===6)return this.setHex(parseInt(o,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=li){const i=Gd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Nn(t.r),this.g=Nn(t.g),this.b=Nn(t.b),this}copyLinearToSRGB(t){return this.r=Js(t.r),this.g=Js(t.g),this.b=Js(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=li){return pe.fromWorkingColorSpace(xi.copy(this),t),Math.round(Di(xi.r*255,0,255))*65536+Math.round(Di(xi.g*255,0,255))*256+Math.round(Di(xi.b*255,0,255))}getHexString(t=li){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=pe.workingColorSpace){pe.fromWorkingColorSpace(xi.copy(this),e);const i=xi.r,s=xi.g,o=xi.b,r=Math.max(i,s,o),l=Math.min(i,s,o);let a,h;const f=(l+r)/2;if(l===r)a=0,h=0;else{const c=r-l;switch(h=f<=.5?c/(r+l):c/(2-r-l),r){case i:a=(s-o)/c+(s<o?6:0);break;case s:a=(o-i)/c+2;break;case o:a=(i-s)/c+4;break}a/=6}return t.h=a,t.s=h,t.l=f,t}getRGB(t,e=pe.workingColorSpace){return pe.fromWorkingColorSpace(xi.copy(this),e),t.r=xi.r,t.g=xi.g,t.b=xi.b,t}getStyle(t=li){pe.fromWorkingColorSpace(xi.copy(this),t);const e=xi.r,i=xi.g,s=xi.b;return t!==li?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(qn),this.setHSL(qn.h+t,qn.s+e,qn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(qn),t.getHSL(xr);const i=ka(qn.h,xr.h,e),s=ka(qn.s,xr.s,e),o=ka(qn.l,xr.l,e);return this.setHSL(i,s,o),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,o=t.elements;return this.r=o[0]*e+o[3]*i+o[6]*s,this.g=o[1]*e+o[4]*i+o[7]*s,this.b=o[2]*e+o[5]*i+o[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const xi=new Et;Et.NAMES=Gd;let J0=0;class kn extends uo{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:J0++}),this.uuid=Jn(),this.name="",this.blending=$s,this.side=os,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ul,this.blendDst=zl,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Et(0,0,0),this.blendAlpha=0,this.depthFunc=eo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Rs,this.stencilZFail=Rs,this.stencilZPass=Rs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==$s&&(i.blending=this.blending),this.side!==os&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ul&&(i.blendSrc=this.blendSrc),this.blendDst!==zl&&(i.blendDst=this.blendDst),this.blendEquation!==ms&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==eo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Rs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Rs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Rs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(o){const r=[];for(const l in o){const a=o[l];delete a.metadata,r.push(a)}return r}if(e){const o=s(t.textures),r=s(t.images);o.length>0&&(i.textures=o),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let o=0;o!==s;++o)i[o]=e[o].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class re extends kn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const je=new I,vr=new kt;class Ai{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Mh,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,o=this.itemSize;s<o;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)vr.fromBufferAttribute(this,e),vr.applyMatrix3(t),this.setXY(e,vr.x,vr.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix3(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyMatrix4(t),this.setXYZ(e,je.x,je.y,je.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.applyNormalMatrix(t),this.setXYZ(e,je.x,je.y,je.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)je.fromBufferAttribute(this,e),je.transformDirection(t),this.setXYZ(e,je.x,je.y,je.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=fn(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=fn(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=fn(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=fn(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t*=this.itemSize,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),o=Ae(o,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=o,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Mh&&(t.usage=this.usage),t}}class Vd extends Ai{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class Wd extends Ai{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Re extends Ai{constructor(t,e,i){super(new Float32Array(t),e,i)}}let Q0=0;const Wi=new Ne,nl=new Je,Fs=new I,Ui=new nr,So=new nr,ri=new I;class Qe extends uo{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Q0++}),this.uuid=Jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Fd(t)?Wd:Vd)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const o=new Jt().getNormalMatrix(t);i.applyNormalMatrix(o),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Wi.makeRotationFromQuaternion(t),this.applyMatrix4(Wi),this}rotateX(t){return Wi.makeRotationX(t),this.applyMatrix4(Wi),this}rotateY(t){return Wi.makeRotationY(t),this.applyMatrix4(Wi),this}rotateZ(t){return Wi.makeRotationZ(t),this.applyMatrix4(Wi),this}translate(t,e,i){return Wi.makeTranslation(t,e,i),this.applyMatrix4(Wi),this}scale(t,e,i){return Wi.makeScale(t,e,i),this.applyMatrix4(Wi),this}lookAt(t){return nl.lookAt(t),nl.updateMatrix(),this.applyMatrix4(nl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,o=t.length;s<o;s++){const r=t[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new Re(i,3))}else{for(let i=0,s=e.count;i<s;i++){const o=t[i];e.setXYZ(i,o.x,o.y,o.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new nr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const o=e[i];Ui.setFromBufferAttribute(o),this.morphTargetsRelative?(ri.addVectors(this.boundingBox.min,Ui.min),this.boundingBox.expandByPoint(ri),ri.addVectors(this.boundingBox.max,Ui.max),this.boundingBox.expandByPoint(ri)):(this.boundingBox.expandByPoint(Ui.min),this.boundingBox.expandByPoint(Ui.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new sr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){const i=this.boundingSphere.center;if(Ui.setFromBufferAttribute(t),e)for(let o=0,r=e.length;o<r;o++){const l=e[o];So.setFromBufferAttribute(l),this.morphTargetsRelative?(ri.addVectors(Ui.min,So.min),Ui.expandByPoint(ri),ri.addVectors(Ui.max,So.max),Ui.expandByPoint(ri)):(Ui.expandByPoint(So.min),Ui.expandByPoint(So.max))}Ui.getCenter(i);let s=0;for(let o=0,r=t.count;o<r;o++)ri.fromBufferAttribute(t,o),s=Math.max(s,i.distanceToSquared(ri));if(e)for(let o=0,r=e.length;o<r;o++){const l=e[o],a=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)ri.fromBufferAttribute(l,h),a&&(Fs.fromBufferAttribute(t,h),ri.add(Fs)),s=Math.max(s,i.distanceToSquared(ri))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,o=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ai(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),l=[],a=[];for(let C=0;C<i.count;C++)l[C]=new I,a[C]=new I;const h=new I,f=new I,c=new I,d=new kt,u=new kt,p=new kt,x=new I,m=new I;function g(C,y,b){h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,y),c.fromBufferAttribute(i,b),d.fromBufferAttribute(o,C),u.fromBufferAttribute(o,y),p.fromBufferAttribute(o,b),f.sub(h),c.sub(h),u.sub(d),p.sub(d);const P=1/(u.x*p.y-p.x*u.y);isFinite(P)&&(x.copy(f).multiplyScalar(p.y).addScaledVector(c,-u.y).multiplyScalar(P),m.copy(c).multiplyScalar(u.x).addScaledVector(f,-p.x).multiplyScalar(P),l[C].add(x),l[y].add(x),l[b].add(x),a[C].add(m),a[y].add(m),a[b].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,y=M.length;C<y;++C){const b=M[C],P=b.start,O=b.count;for(let U=P,G=P+O;U<G;U+=3)g(t.getX(U+0),t.getX(U+1),t.getX(U+2))}const S=new I,v=new I,D=new I,R=new I;function w(C){D.fromBufferAttribute(s,C),R.copy(D);const y=l[C];S.copy(y),S.sub(D.multiplyScalar(D.dot(y))).normalize(),v.crossVectors(R,y);const P=v.dot(a[C])<0?-1:1;r.setXYZW(C,S.x,S.y,S.z,P)}for(let C=0,y=M.length;C<y;++C){const b=M[C],P=b.start,O=b.count;for(let U=P,G=P+O;U<G;U+=3)w(t.getX(U+0)),w(t.getX(U+1)),w(t.getX(U+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Ai(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,u=i.count;d<u;d++)i.setXYZ(d,0,0,0);const s=new I,o=new I,r=new I,l=new I,a=new I,h=new I,f=new I,c=new I;if(t)for(let d=0,u=t.count;d<u;d+=3){const p=t.getX(d+0),x=t.getX(d+1),m=t.getX(d+2);s.fromBufferAttribute(e,p),o.fromBufferAttribute(e,x),r.fromBufferAttribute(e,m),f.subVectors(r,o),c.subVectors(s,o),f.cross(c),l.fromBufferAttribute(i,p),a.fromBufferAttribute(i,x),h.fromBufferAttribute(i,m),l.add(f),a.add(f),h.add(f),i.setXYZ(p,l.x,l.y,l.z),i.setXYZ(x,a.x,a.y,a.z),i.setXYZ(m,h.x,h.y,h.z)}else for(let d=0,u=e.count;d<u;d+=3)s.fromBufferAttribute(e,d+0),o.fromBufferAttribute(e,d+1),r.fromBufferAttribute(e,d+2),f.subVectors(r,o),c.subVectors(s,o),f.cross(c),i.setXYZ(d+0,f.x,f.y,f.z),i.setXYZ(d+1,f.x,f.y,f.z),i.setXYZ(d+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)ri.fromBufferAttribute(t,e),ri.normalize(),t.setXYZ(e,ri.x,ri.y,ri.z)}toNonIndexed(){function t(l,a){const h=l.array,f=l.itemSize,c=l.normalized,d=new h.constructor(a.length*f);let u=0,p=0;for(let x=0,m=a.length;x<m;x++){l.isInterleavedBufferAttribute?u=a[x]*l.data.stride+l.offset:u=a[x]*f;for(let g=0;g<f;g++)d[p++]=h[u++]}return new Ai(d,f,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Qe,i=this.index.array,s=this.attributes;for(const l in s){const a=s[l],h=t(a,i);e.setAttribute(l,h)}const o=this.morphAttributes;for(const l in o){const a=[],h=o[l];for(let f=0,c=h.length;f<c;f++){const d=h[f],u=t(d,i);a.push(u)}e.morphAttributes[l]=a}e.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let l=0,a=r.length;l<a;l++){const h=r[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const a=this.parameters;for(const h in a)a[h]!==void 0&&(t[h]=a[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const a in i){const h=i[a];t.data.attributes[a]=h.toJSON(t.data)}const s={};let o=!1;for(const a in this.morphAttributes){const h=this.morphAttributes[a],f=[];for(let c=0,d=h.length;c<d;c++){const u=h[c];f.push(u.toJSON(t.data))}f.length>0&&(s[a]=f,o=!0)}o&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(t.data.groups=JSON.parse(JSON.stringify(r)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const f=s[h];this.setAttribute(h,f.clone(e))}const o=t.morphAttributes;for(const h in o){const f=[],c=o[h];for(let d=0,u=c.length;d<u;d++)f.push(c[d].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;const r=t.groups;for(let h=0,f=r.length;h<f;h++){const c=r[h];this.addGroup(c.start,c.count,c.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const a=t.boundingSphere;return a!==null&&(this.boundingSphere=a.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const jc=new Ne,hs=new jh,_r=new sr,$c=new I,Mr=new I,yr=new I,br=new I,sl=new I,Sr=new I,Zc=new I,Er=new I;class Mt extends Je{constructor(t=new Qe,e=new re){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,o=i.morphAttributes.position,r=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(o&&l){Sr.set(0,0,0);for(let a=0,h=o.length;a<h;a++){const f=l[a],c=o[a];f!==0&&(sl.fromBufferAttribute(c,t),r?Sr.addScaledVector(sl,f):Sr.addScaledVector(sl.sub(e),f))}e.add(Sr)}return e}raycast(t,e){const i=this.geometry,s=this.material,o=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),_r.copy(i.boundingSphere),_r.applyMatrix4(o),hs.copy(t.ray).recast(t.near),!(_r.containsPoint(hs.origin)===!1&&(hs.intersectSphere(_r,$c)===null||hs.origin.distanceToSquared($c)>(t.far-t.near)**2))&&(jc.copy(o).invert(),hs.copy(t.ray).applyMatrix4(jc),!(i.boundingBox!==null&&hs.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,hs)))}_computeIntersections(t,e,i){let s;const o=this.geometry,r=this.material,l=o.index,a=o.attributes.position,h=o.attributes.uv,f=o.attributes.uv1,c=o.attributes.normal,d=o.groups,u=o.drawRange;if(l!==null)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=r[m.materialIndex],M=Math.max(m.start,u.start),S=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let v=M,D=S;v<D;v+=3){const R=l.getX(v),w=l.getX(v+1),C=l.getX(v+2);s=wr(this,g,t,i,h,f,c,R,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),x=Math.min(l.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=l.getX(m),S=l.getX(m+1),v=l.getX(m+2);s=wr(this,r,t,i,h,f,c,M,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(a!==void 0)if(Array.isArray(r))for(let p=0,x=d.length;p<x;p++){const m=d[p],g=r[m.materialIndex],M=Math.max(m.start,u.start),S=Math.min(a.count,Math.min(m.start+m.count,u.start+u.count));for(let v=M,D=S;v<D;v+=3){const R=v,w=v+1,C=v+2;s=wr(this,g,t,i,h,f,c,R,w,C),s&&(s.faceIndex=Math.floor(v/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{const p=Math.max(0,u.start),x=Math.min(a.count,u.start+u.count);for(let m=p,g=x;m<g;m+=3){const M=m,S=m+1,v=m+2;s=wr(this,r,t,i,h,f,c,M,S,v),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}}function tp(n,t,e,i,s,o,r,l){let a;if(t.side===wi?a=i.intersectTriangle(r,o,s,!0,l):a=i.intersectTriangle(s,o,r,t.side===os,l),a===null)return null;Er.copy(l),Er.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(Er);return h<e.near||h>e.far?null:{distance:h,point:Er.clone(),object:n}}function wr(n,t,e,i,s,o,r,l,a,h){n.getVertexPosition(l,Mr),n.getVertexPosition(a,yr),n.getVertexPosition(h,br);const f=tp(n,t,e,i,Mr,yr,br,Zc);if(f){const c=new I;ki.getBarycoord(Zc,Mr,yr,br,c),s&&(f.uv=ki.getInterpolatedAttribute(s,l,a,h,c,new kt)),o&&(f.uv1=ki.getInterpolatedAttribute(o,l,a,h,c,new kt)),r&&(f.normal=ki.getInterpolatedAttribute(r,l,a,h,c,new I),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const d={a:l,b:a,c:h,normal:new I,materialIndex:0};ki.getNormal(Mr,yr,br,d.normal),f.face=d,f.barycoord=c}return f}class Yt extends Qe{constructor(t=1,e=1,i=1,s=1,o=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:o,depthSegments:r};const l=this;s=Math.floor(s),o=Math.floor(o),r=Math.floor(r);const a=[],h=[],f=[],c=[];let d=0,u=0;p("z","y","x",-1,-1,i,e,t,r,o,0),p("z","y","x",1,-1,i,e,-t,r,o,1),p("x","z","y",1,1,t,i,e,s,r,2),p("x","z","y",1,-1,t,i,-e,s,r,3),p("x","y","z",1,-1,t,e,i,s,o,4),p("x","y","z",-1,-1,t,e,-i,s,o,5),this.setIndex(a),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(f,3)),this.setAttribute("uv",new Re(c,2));function p(x,m,g,M,S,v,D,R,w,C,y){const b=v/w,P=D/C,O=v/2,U=D/2,G=R/2,$=w+1,Y=C+1;let K=0,W=0;const ot=new I;for(let rt=0;rt<Y;rt++){const _t=rt*P-U;for(let jt=0;jt<$;jt++){const _e=jt*b-O;ot[x]=_e*M,ot[m]=_t*S,ot[g]=G,h.push(ot.x,ot.y,ot.z),ot[x]=0,ot[m]=0,ot[g]=R>0?1:-1,f.push(ot.x,ot.y,ot.z),c.push(jt/w),c.push(1-rt/C),K+=1}}for(let rt=0;rt<C;rt++)for(let _t=0;_t<w;_t++){const jt=d+_t+$*rt,_e=d+_t+$*(rt+1),J=d+(_t+1)+$*(rt+1),at=d+(_t+1)+$*rt;a.push(jt,_e,at),a.push(_e,J,at),W+=6}l.addGroup(u,W,y),u+=W,d+=K}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Yt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function ro(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function bi(n){const t={};for(let e=0;e<n.length;e++){const i=ro(n[e]);for(const s in i)t[s]=i[s]}return t}function ep(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function Xd(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:pe.workingColorSpace}const Ko={clone:ro,merge:bi};var ip=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,np=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Mi extends kn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ip,this.fragmentShader=np,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=ro(t.uniforms),this.uniformsGroups=ep(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?e.uniforms[s]={type:"t",value:r.toJSON(t).uuid}:r&&r.isColor?e.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?e.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?e.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?e.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?e.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?e.uniforms[s]={type:"m4",value:r.toArray()}:e.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class qd extends Je{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ne,this.projectionMatrix=new Ne,this.projectionMatrixInverse=new Ne,this.coordinateSystem=Dn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new I,Jc=new kt,Qc=new kt;class Fi extends qd{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=yh*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(ta*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return yh*2*Math.atan(Math.tan(ta*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Yn.x,Yn.y).multiplyScalar(-t/Yn.z)}getViewSize(t,e){return this.getViewBounds(t,Jc,Qc),e.subVectors(Qc,Jc)}setViewOffset(t,e,i,s,o,r){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(ta*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,o=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const a=r.fullWidth,h=r.fullHeight;o+=r.offsetX*s/a,e-=r.offsetY*i/h,s*=r.width/a,i*=r.height/h}const l=this.filmOffset;l!==0&&(o+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ks=-90,Bs=1;class sp extends Je{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Fi(ks,Bs,t,e);s.layers=this.layers,this.add(s);const o=new Fi(ks,Bs,t,e);o.layers=this.layers,this.add(o);const r=new Fi(ks,Bs,t,e);r.layers=this.layers,this.add(r);const l=new Fi(ks,Bs,t,e);l.layers=this.layers,this.add(l);const a=new Fi(ks,Bs,t,e);a.layers=this.layers,this.add(a);const h=new Fi(ks,Bs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,o,r,l,a]=e;for(const h of e)this.remove(h);if(t===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),a.up.set(0,1,0),a.lookAt(0,0,-1);else if(t===la)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),a.up.set(0,-1,0),a.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[o,r,l,a,h,f]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),u=t.getActiveMipmapLevel(),p=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,o),t.setRenderTarget(i,1,s),t.render(e,r),t.setRenderTarget(i,2,s),t.render(e,l),t.setRenderTarget(i,3,s),t.render(e,a),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(c,d,u),t.xr.enabled=p,i.texture.needsPMREMUpdate=!0}}class Yd extends Ti{constructor(t,e,i,s,o,r,l,a,h,f){t=t!==void 0?t:[],e=e!==void 0?e:io,super(t,e,i,s,o,r,l,a,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class op extends Ki{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Yd(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Yi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Yt(5,5,5),o=new Mi({name:"CubemapFromEquirect",uniforms:ro(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:wi,blending:Pn});o.uniforms.tEquirect.value=e;const r=new Mt(s,o),l=e.minFilter;return e.minFilter===Cn&&(e.minFilter=Yi),new sp(1,10,this).update(t,r),e.minFilter=l,r.geometry.dispose(),r.material.dispose(),this}clear(t,e,i,s){const o=t.getRenderTarget();for(let r=0;r<6;r++)t.setRenderTarget(this,r),t.clear(e,i,s);t.setRenderTarget(o)}}const ol=new I,rp=new I,ap=new Jt;class us{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=ol.subVectors(i,e).cross(rp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(ol),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const o=-(t.start.dot(this.normal)+this.constant)/s;return o<0||o>1?null:e.copy(t.start).addScaledVector(i,o)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||ap.getNormalMatrix(t),s=this.coplanarPoint(ol).applyMatrix4(t),o=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(o),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const cs=new sr,Tr=new I;class $h{constructor(t=new us,e=new us,i=new us,s=new us,o=new us,r=new us){this.planes=[t,e,i,s,o,r]}set(t,e,i,s,o,r){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(o),l[5].copy(r),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Dn){const i=this.planes,s=t.elements,o=s[0],r=s[1],l=s[2],a=s[3],h=s[4],f=s[5],c=s[6],d=s[7],u=s[8],p=s[9],x=s[10],m=s[11],g=s[12],M=s[13],S=s[14],v=s[15];if(i[0].setComponents(a-o,d-h,m-u,v-g).normalize(),i[1].setComponents(a+o,d+h,m+u,v+g).normalize(),i[2].setComponents(a+r,d+f,m+p,v+M).normalize(),i[3].setComponents(a-r,d-f,m-p,v-M).normalize(),i[4].setComponents(a-l,d-c,m-x,v-S).normalize(),e===Dn)i[5].setComponents(a+l,d+c,m+x,v+S).normalize();else if(e===la)i[5].setComponents(l,c,x,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),cs.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),cs.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(cs)}intersectsSprite(t){return cs.center.set(0,0,0),cs.radius=.7071067811865476,cs.applyMatrix4(t.matrixWorld),this.intersectsSphere(cs)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let o=0;o<6;o++)if(e[o].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Tr.x=s.normal.x>0?t.max.x:t.min.x,Tr.y=s.normal.y>0?t.max.y:t.min.y,Tr.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Tr)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Kd(){let n=null,t=!1,e=null,i=null;function s(o,r){e(o,r),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(o){e=o},setContext:function(o){n=o}}}function lp(n){const t=new WeakMap;function e(l,a){const h=l.array,f=l.usage,c=h.byteLength,d=n.createBuffer();n.bindBuffer(a,d),n.bufferData(a,h,f),l.onUploadCallback();let u;if(h instanceof Float32Array)u=n.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?u=n.HALF_FLOAT:u=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)u=n.SHORT;else if(h instanceof Uint32Array)u=n.UNSIGNED_INT;else if(h instanceof Int32Array)u=n.INT;else if(h instanceof Int8Array)u=n.BYTE;else if(h instanceof Uint8Array)u=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)u=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:d,type:u,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:c}}function i(l,a,h){const f=a.array,c=a.updateRanges;if(n.bindBuffer(h,l),c.length===0)n.bufferSubData(h,0,f);else{c.sort((u,p)=>u.start-p.start);let d=0;for(let u=1;u<c.length;u++){const p=c[d],x=c[u];x.start<=p.start+p.count+1?p.count=Math.max(p.count,x.start+x.count-p.start):(++d,c[d]=x)}c.length=d+1;for(let u=0,p=c.length;u<p;u++){const x=c[u];n.bufferSubData(h,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}a.clearUpdateRanges()}a.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function o(l){l.isInterleavedBufferAttribute&&(l=l.data);const a=t.get(l);a&&(n.deleteBuffer(a.buffer),t.delete(l))}function r(l,a){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,a));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,a),h.version=l.version}}return{get:s,remove:o,update:r}}class On extends Qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const o=t/2,r=e/2,l=Math.floor(i),a=Math.floor(s),h=l+1,f=a+1,c=t/l,d=e/a,u=[],p=[],x=[],m=[];for(let g=0;g<f;g++){const M=g*d-r;for(let S=0;S<h;S++){const v=S*c-o;p.push(v,-M,0),x.push(0,0,1),m.push(S/l),m.push(1-g/a)}}for(let g=0;g<a;g++)for(let M=0;M<l;M++){const S=M+h*g,v=M+h*(g+1),D=M+1+h*(g+1),R=M+1+h*g;u.push(S,v,R),u.push(v,D,R)}this.setIndex(u),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.widthSegments,t.heightSegments)}}var hp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cp=`#ifdef USE_ALPHAHASH
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
#endif`,fp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,dp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,up=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,pp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,mp=`#ifdef USE_AOMAP
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
#endif`,gp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xp=`#ifdef USE_BATCHING
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
#endif`,vp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_p=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Mp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,bp=`#ifdef USE_IRIDESCENCE
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
#endif`,Sp=`#ifdef USE_BUMPMAP
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
#endif`,Ep=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Tp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ap=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Cp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Lp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Dp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Pp=`#define PI 3.141592653589793
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
} // validated`,Ip=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Np=`vec3 transformedNormal = objectNormal;
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
#endif`,Op=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Up=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Fp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,kp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Bp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Hp=`#ifdef USE_ENVMAP
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
#endif`,Gp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Vp=`#ifdef USE_ENVMAP
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
#endif`,Wp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Xp=`#ifdef USE_ENVMAP
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
#endif`,qp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Kp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,jp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,$p=`#ifdef USE_GRADIENTMAP
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
}`,Zp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,tm=`uniform bool receiveShadow;
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
#endif`,em=`#ifdef USE_ENVMAP
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
#endif`,im=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,om=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,rm=`PhysicalMaterial material;
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
#endif`,am=`struct PhysicalMaterial {
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
}`,lm=`
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
#endif`,hm=`#if defined( RE_IndirectDiffuse )
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
#endif`,cm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,dm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,um=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,gm=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,xm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,vm=`#if defined( USE_POINTS_UV )
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
#endif`,_m=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ym=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,bm=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Sm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Em=`#ifdef USE_MORPHTARGETS
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
#endif`,wm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Am=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Rm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Cm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Lm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Dm=`#ifdef USE_NORMALMAP
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
#endif`,Pm=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Im=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Om=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Um=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,zm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Fm=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,km=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Bm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Hm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Gm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Vm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Wm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Xm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,qm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Ym=`float getShadowMask() {
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
}`,Km=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jm=`#ifdef USE_SKINNING
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
#endif`,$m=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Zm=`#ifdef USE_SKINNING
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
#endif`,Jm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Qm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,tg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,eg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,ig=`#ifdef USE_TRANSMISSION
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
#endif`,ng=`#ifdef USE_TRANSMISSION
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
#endif`,sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ag=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,hg=`uniform sampler2D t2D;
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
}`,cg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,dg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pg=`#include <common>
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
}`,mg=`#if DEPTH_PACKING == 3200
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
}`,gg=`#define DISTANCE
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
}`,xg=`#define DISTANCE
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
}`,vg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,_g=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Mg=`uniform float scale;
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
}`,yg=`uniform vec3 diffuse;
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
}`,bg=`#include <common>
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
}`,Sg=`uniform vec3 diffuse;
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
}`,Eg=`#define LAMBERT
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
}`,wg=`#define LAMBERT
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
}`,Tg=`#define MATCAP
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
}`,Ag=`#define MATCAP
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
}`,Rg=`#define NORMAL
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
}`,Cg=`#define NORMAL
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
}`,Lg=`#define PHONG
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
}`,Dg=`#define PHONG
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
}`,Pg=`#define STANDARD
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
}`,Ig=`#define STANDARD
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
}`,Ng=`#define TOON
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
}`,Og=`#define TOON
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
}`,Ug=`uniform float size;
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
}`,zg=`uniform vec3 diffuse;
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
}`,Fg=`#include <common>
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
}`,kg=`uniform vec3 color;
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
}`,Bg=`uniform float rotation;
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
}`,Hg=`uniform vec3 diffuse;
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
}`,ie={alphahash_fragment:hp,alphahash_pars_fragment:cp,alphamap_fragment:fp,alphamap_pars_fragment:dp,alphatest_fragment:up,alphatest_pars_fragment:pp,aomap_fragment:mp,aomap_pars_fragment:gp,batching_pars_vertex:xp,batching_vertex:vp,begin_vertex:_p,beginnormal_vertex:Mp,bsdfs:yp,iridescence_fragment:bp,bumpmap_pars_fragment:Sp,clipping_planes_fragment:Ep,clipping_planes_pars_fragment:wp,clipping_planes_pars_vertex:Tp,clipping_planes_vertex:Ap,color_fragment:Rp,color_pars_fragment:Cp,color_pars_vertex:Lp,color_vertex:Dp,common:Pp,cube_uv_reflection_fragment:Ip,defaultnormal_vertex:Np,displacementmap_pars_vertex:Op,displacementmap_vertex:Up,emissivemap_fragment:zp,emissivemap_pars_fragment:Fp,colorspace_fragment:kp,colorspace_pars_fragment:Bp,envmap_fragment:Hp,envmap_common_pars_fragment:Gp,envmap_pars_fragment:Vp,envmap_pars_vertex:Wp,envmap_physical_pars_fragment:em,envmap_vertex:Xp,fog_vertex:qp,fog_pars_vertex:Yp,fog_fragment:Kp,fog_pars_fragment:jp,gradientmap_pars_fragment:$p,lightmap_pars_fragment:Zp,lights_lambert_fragment:Jp,lights_lambert_pars_fragment:Qp,lights_pars_begin:tm,lights_toon_fragment:im,lights_toon_pars_fragment:nm,lights_phong_fragment:sm,lights_phong_pars_fragment:om,lights_physical_fragment:rm,lights_physical_pars_fragment:am,lights_fragment_begin:lm,lights_fragment_maps:hm,lights_fragment_end:cm,logdepthbuf_fragment:fm,logdepthbuf_pars_fragment:dm,logdepthbuf_pars_vertex:um,logdepthbuf_vertex:pm,map_fragment:mm,map_pars_fragment:gm,map_particle_fragment:xm,map_particle_pars_fragment:vm,metalnessmap_fragment:_m,metalnessmap_pars_fragment:Mm,morphinstance_vertex:ym,morphcolor_vertex:bm,morphnormal_vertex:Sm,morphtarget_pars_vertex:Em,morphtarget_vertex:wm,normal_fragment_begin:Tm,normal_fragment_maps:Am,normal_pars_fragment:Rm,normal_pars_vertex:Cm,normal_vertex:Lm,normalmap_pars_fragment:Dm,clearcoat_normal_fragment_begin:Pm,clearcoat_normal_fragment_maps:Im,clearcoat_pars_fragment:Nm,iridescence_pars_fragment:Om,opaque_fragment:Um,packing:zm,premultiplied_alpha_fragment:Fm,project_vertex:km,dithering_fragment:Bm,dithering_pars_fragment:Hm,roughnessmap_fragment:Gm,roughnessmap_pars_fragment:Vm,shadowmap_pars_fragment:Wm,shadowmap_pars_vertex:Xm,shadowmap_vertex:qm,shadowmask_pars_fragment:Ym,skinbase_vertex:Km,skinning_pars_vertex:jm,skinning_vertex:$m,skinnormal_vertex:Zm,specularmap_fragment:Jm,specularmap_pars_fragment:Qm,tonemapping_fragment:tg,tonemapping_pars_fragment:eg,transmission_fragment:ig,transmission_pars_fragment:ng,uv_pars_fragment:sg,uv_pars_vertex:og,uv_vertex:rg,worldpos_vertex:ag,background_vert:lg,background_frag:hg,backgroundCube_vert:cg,backgroundCube_frag:fg,cube_vert:dg,cube_frag:ug,depth_vert:pg,depth_frag:mg,distanceRGBA_vert:gg,distanceRGBA_frag:xg,equirect_vert:vg,equirect_frag:_g,linedashed_vert:Mg,linedashed_frag:yg,meshbasic_vert:bg,meshbasic_frag:Sg,meshlambert_vert:Eg,meshlambert_frag:wg,meshmatcap_vert:Tg,meshmatcap_frag:Ag,meshnormal_vert:Rg,meshnormal_frag:Cg,meshphong_vert:Lg,meshphong_frag:Dg,meshphysical_vert:Pg,meshphysical_frag:Ig,meshtoon_vert:Ng,meshtoon_frag:Og,points_vert:Ug,points_frag:zg,shadow_vert:Fg,shadow_frag:kg,sprite_vert:Bg,sprite_frag:Hg},ft={common:{diffuse:{value:new Et(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Jt}},envmap:{envMap:{value:null},envMapRotation:{value:new Jt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Jt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Jt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Jt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Jt},normalScale:{value:new kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Jt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Jt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Jt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Jt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Et(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Et(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0},uvTransform:{value:new Jt}},sprite:{diffuse:{value:new Et(16777215)},opacity:{value:1},center:{value:new kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Jt},alphaMap:{value:null},alphaMapTransform:{value:new Jt},alphaTest:{value:0}}},cn={basic:{uniforms:bi([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.fog]),vertexShader:ie.meshbasic_vert,fragmentShader:ie.meshbasic_frag},lambert:{uniforms:bi([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Et(0)}}]),vertexShader:ie.meshlambert_vert,fragmentShader:ie.meshlambert_frag},phong:{uniforms:bi([ft.common,ft.specularmap,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,ft.lights,{emissive:{value:new Et(0)},specular:{value:new Et(1118481)},shininess:{value:30}}]),vertexShader:ie.meshphong_vert,fragmentShader:ie.meshphong_frag},standard:{uniforms:bi([ft.common,ft.envmap,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.roughnessmap,ft.metalnessmap,ft.fog,ft.lights,{emissive:{value:new Et(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag},toon:{uniforms:bi([ft.common,ft.aomap,ft.lightmap,ft.emissivemap,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.gradientmap,ft.fog,ft.lights,{emissive:{value:new Et(0)}}]),vertexShader:ie.meshtoon_vert,fragmentShader:ie.meshtoon_frag},matcap:{uniforms:bi([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,ft.fog,{matcap:{value:null}}]),vertexShader:ie.meshmatcap_vert,fragmentShader:ie.meshmatcap_frag},points:{uniforms:bi([ft.points,ft.fog]),vertexShader:ie.points_vert,fragmentShader:ie.points_frag},dashed:{uniforms:bi([ft.common,ft.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ie.linedashed_vert,fragmentShader:ie.linedashed_frag},depth:{uniforms:bi([ft.common,ft.displacementmap]),vertexShader:ie.depth_vert,fragmentShader:ie.depth_frag},normal:{uniforms:bi([ft.common,ft.bumpmap,ft.normalmap,ft.displacementmap,{opacity:{value:1}}]),vertexShader:ie.meshnormal_vert,fragmentShader:ie.meshnormal_frag},sprite:{uniforms:bi([ft.sprite,ft.fog]),vertexShader:ie.sprite_vert,fragmentShader:ie.sprite_frag},background:{uniforms:{uvTransform:{value:new Jt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ie.background_vert,fragmentShader:ie.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Jt}},vertexShader:ie.backgroundCube_vert,fragmentShader:ie.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ie.cube_vert,fragmentShader:ie.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ie.equirect_vert,fragmentShader:ie.equirect_frag},distanceRGBA:{uniforms:bi([ft.common,ft.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ie.distanceRGBA_vert,fragmentShader:ie.distanceRGBA_frag},shadow:{uniforms:bi([ft.lights,ft.fog,{color:{value:new Et(0)},opacity:{value:1}}]),vertexShader:ie.shadow_vert,fragmentShader:ie.shadow_frag}};cn.physical={uniforms:bi([cn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Jt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Jt},clearcoatNormalScale:{value:new kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Jt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Jt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Jt},sheen:{value:0},sheenColor:{value:new Et(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Jt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Jt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Jt},transmissionSamplerSize:{value:new kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Jt},attenuationDistance:{value:0},attenuationColor:{value:new Et(0)},specularColor:{value:new Et(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Jt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Jt},anisotropyVector:{value:new kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Jt}}]),vertexShader:ie.meshphysical_vert,fragmentShader:ie.meshphysical_frag};const Ar={r:0,b:0,g:0},fs=new rn,Gg=new Ne;function Vg(n,t,e,i,s,o,r){const l=new Et(0);let a=o===!0?0:1,h,f,c=null,d=0,u=null;function p(M){let S=M.isScene===!0?M.background:null;return S&&S.isTexture&&(S=(M.backgroundBlurriness>0?e:t).get(S)),S}function x(M){let S=!1;const v=p(M);v===null?g(l,a):v&&v.isColor&&(g(v,1),S=!0);const D=n.xr.getEnvironmentBlendMode();D==="additive"?i.buffers.color.setClear(0,0,0,1,r):D==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(M,S){const v=p(S);v&&(v.isCubeTexture||v.mapping===Ca)?(f===void 0&&(f=new Mt(new Yt(1,1,1),new Mi({name:"BackgroundCubeMaterial",uniforms:ro(cn.backgroundCube.uniforms),vertexShader:cn.backgroundCube.vertexShader,fragmentShader:cn.backgroundCube.fragmentShader,side:wi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(D,R,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),fs.copy(S.backgroundRotation),fs.x*=-1,fs.y*=-1,fs.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(fs.y*=-1,fs.z*=-1),f.material.uniforms.envMap.value=v,f.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Gg.makeRotationFromEuler(fs)),f.material.toneMapped=pe.getTransfer(v.colorSpace)!==we,(c!==v||d!==v.version||u!==n.toneMapping)&&(f.material.needsUpdate=!0,c=v,d=v.version,u=n.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):v&&v.isTexture&&(h===void 0&&(h=new Mt(new On(2,2),new Mi({name:"BackgroundMaterial",uniforms:ro(cn.background.uniforms),vertexShader:cn.background.vertexShader,fragmentShader:cn.background.fragmentShader,side:os,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=v,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.toneMapped=pe.getTransfer(v.colorSpace)!==we,v.matrixAutoUpdate===!0&&v.updateMatrix(),h.material.uniforms.uvTransform.value.copy(v.matrix),(c!==v||d!==v.version||u!==n.toneMapping)&&(h.material.needsUpdate=!0,c=v,d=v.version,u=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function g(M,S){M.getRGB(Ar,Xd(n)),i.buffers.color.setClear(Ar.r,Ar.g,Ar.b,S,r)}return{getClearColor:function(){return l},setClearColor:function(M,S=1){l.set(M),a=S,g(l,a)},getClearAlpha:function(){return a},setClearAlpha:function(M){a=M,g(l,a)},render:x,addToRenderList:m}}function Wg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let o=s,r=!1;function l(b,P,O,U,G){let $=!1;const Y=c(U,O,P);o!==Y&&(o=Y,h(o.object)),$=u(b,U,O,G),$&&p(b,U,O,G),G!==null&&t.update(G,n.ELEMENT_ARRAY_BUFFER),($||r)&&(r=!1,v(b,P,O,U),G!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(G).buffer))}function a(){return n.createVertexArray()}function h(b){return n.bindVertexArray(b)}function f(b){return n.deleteVertexArray(b)}function c(b,P,O){const U=O.wireframe===!0;let G=i[b.id];G===void 0&&(G={},i[b.id]=G);let $=G[P.id];$===void 0&&($={},G[P.id]=$);let Y=$[U];return Y===void 0&&(Y=d(a()),$[U]=Y),Y}function d(b){const P=[],O=[],U=[];for(let G=0;G<e;G++)P[G]=0,O[G]=0,U[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:O,attributeDivisors:U,object:b,attributes:{},index:null}}function u(b,P,O,U){const G=o.attributes,$=P.attributes;let Y=0;const K=O.getAttributes();for(const W in K)if(K[W].location>=0){const rt=G[W];let _t=$[W];if(_t===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(_t=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(_t=b.instanceColor)),rt===void 0||rt.attribute!==_t||_t&&rt.data!==_t.data)return!0;Y++}return o.attributesNum!==Y||o.index!==U}function p(b,P,O,U){const G={},$=P.attributes;let Y=0;const K=O.getAttributes();for(const W in K)if(K[W].location>=0){let rt=$[W];rt===void 0&&(W==="instanceMatrix"&&b.instanceMatrix&&(rt=b.instanceMatrix),W==="instanceColor"&&b.instanceColor&&(rt=b.instanceColor));const _t={};_t.attribute=rt,rt&&rt.data&&(_t.data=rt.data),G[W]=_t,Y++}o.attributes=G,o.attributesNum=Y,o.index=U}function x(){const b=o.newAttributes;for(let P=0,O=b.length;P<O;P++)b[P]=0}function m(b){g(b,0)}function g(b,P){const O=o.newAttributes,U=o.enabledAttributes,G=o.attributeDivisors;O[b]=1,U[b]===0&&(n.enableVertexAttribArray(b),U[b]=1),G[b]!==P&&(n.vertexAttribDivisor(b,P),G[b]=P)}function M(){const b=o.newAttributes,P=o.enabledAttributes;for(let O=0,U=P.length;O<U;O++)P[O]!==b[O]&&(n.disableVertexAttribArray(O),P[O]=0)}function S(b,P,O,U,G,$,Y){Y===!0?n.vertexAttribIPointer(b,P,O,G,$):n.vertexAttribPointer(b,P,O,U,G,$)}function v(b,P,O,U){x();const G=U.attributes,$=O.getAttributes(),Y=P.defaultAttributeValues;for(const K in $){const W=$[K];if(W.location>=0){let ot=G[K];if(ot===void 0&&(K==="instanceMatrix"&&b.instanceMatrix&&(ot=b.instanceMatrix),K==="instanceColor"&&b.instanceColor&&(ot=b.instanceColor)),ot!==void 0){const rt=ot.normalized,_t=ot.itemSize,jt=t.get(ot);if(jt===void 0)continue;const _e=jt.buffer,J=jt.type,at=jt.bytesPerElement,wt=J===n.INT||J===n.UNSIGNED_INT||ot.gpuType===Gh;if(ot.isInterleavedBufferAttribute){const dt=ot.data,zt=dt.stride,Gt=ot.offset;if(dt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<W.locationSize;Bt++)g(W.location+Bt,dt.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=dt.meshPerAttribute*dt.count)}else for(let Bt=0;Bt<W.locationSize;Bt++)m(W.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let Bt=0;Bt<W.locationSize;Bt++)S(W.location+Bt,_t/W.locationSize,J,rt,zt*at,(Gt+_t/W.locationSize*Bt)*at,wt)}else{if(ot.isInstancedBufferAttribute){for(let dt=0;dt<W.locationSize;dt++)g(W.location+dt,ot.meshPerAttribute);b.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ot.meshPerAttribute*ot.count)}else for(let dt=0;dt<W.locationSize;dt++)m(W.location+dt);n.bindBuffer(n.ARRAY_BUFFER,_e);for(let dt=0;dt<W.locationSize;dt++)S(W.location+dt,_t/W.locationSize,J,rt,_t*at,_t/W.locationSize*dt*at,wt)}}else if(Y!==void 0){const rt=Y[K];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(W.location,rt);break;case 3:n.vertexAttrib3fv(W.location,rt);break;case 4:n.vertexAttrib4fv(W.location,rt);break;default:n.vertexAttrib1fv(W.location,rt)}}}}M()}function D(){C();for(const b in i){const P=i[b];for(const O in P){const U=P[O];for(const G in U)f(U[G].object),delete U[G];delete P[O]}delete i[b]}}function R(b){if(i[b.id]===void 0)return;const P=i[b.id];for(const O in P){const U=P[O];for(const G in U)f(U[G].object),delete U[G];delete P[O]}delete i[b.id]}function w(b){for(const P in i){const O=i[P];if(O[b.id]===void 0)continue;const U=O[b.id];for(const G in U)f(U[G].object),delete U[G];delete O[b.id]}}function C(){y(),r=!0,o!==s&&(o=s,h(o.object))}function y(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:C,resetDefaultState:y,dispose:D,releaseStatesOfGeometry:R,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:m,disableUnusedAttributes:M}}function Xg(n,t,e){let i;function s(h){i=h}function o(h,f){n.drawArrays(i,h,f),e.update(f,i,1)}function r(h,f,c){c!==0&&(n.drawArraysInstanced(i,h,f,c),e.update(f,i,c))}function l(h,f,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,c);let u=0;for(let p=0;p<c;p++)u+=f[p];e.update(u,i,1)}function a(h,f,c,d){if(c===0)return;const u=t.get("WEBGL_multi_draw");if(u===null)for(let p=0;p<h.length;p++)r(h[p],f[p],d[p]);else{u.multiDrawArraysInstancedWEBGL(i,h,0,f,0,d,0,c);let p=0;for(let x=0;x<c;x++)p+=f[x]*d[x];e.update(p,i,1)}}this.setMode=s,this.render=o,this.renderInstances=r,this.renderMultiDraw=l,this.renderMultiDrawInstances=a}function qg(n,t,e,i){let s;function o(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(w){return!(w!==nn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const C=w===pn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==zn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Ln&&!C)}function a(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const f=a(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const c=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),u=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),S=n.getParameter(n.MAX_VARYING_VECTORS),v=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=p>0,R=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:a,textureFormatReadable:r,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:d,maxTextures:u,maxVertexTextures:p,maxTextureSize:x,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:M,maxVaryings:S,maxFragmentUniforms:v,vertexTextures:D,maxSamples:R}}function Yg(n){const t=this;let e=null,i=0,s=!1,o=!1;const r=new us,l=new Jt,a={value:null,needsUpdate:!1};this.uniform=a,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const u=c.length!==0||d||i!==0||s;return s=d,i=c.length,u},this.beginShadows=function(){o=!0,f(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(c,d){e=f(c,d,0)},this.setState=function(c,d,u){const p=c.clippingPlanes,x=c.clipIntersection,m=c.clipShadows,g=n.get(c);if(!s||p===null||p.length===0||o&&!m)o?f(null):h();else{const M=o?0:i,S=M*4;let v=g.clippingState||null;a.value=v,v=f(p,d,S,u);for(let D=0;D!==S;++D)v[D]=e[D];g.clippingState=v,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function h(){a.value!==e&&(a.value=e,a.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(c,d,u,p){const x=c!==null?c.length:0;let m=null;if(x!==0){if(m=a.value,p!==!0||m===null){const g=u+x*4,M=d.matrixWorldInverse;l.getNormalMatrix(M),(m===null||m.length<g)&&(m=new Float32Array(g));for(let S=0,v=u;S!==x;++S,v+=4)r.copy(c[S]).applyMatrix4(M,l),r.normal.toArray(m,v),m[v+3]=r.constant}a.value=m,a.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,m}}function Kg(n){let t=new WeakMap;function e(r,l){return l===Xl?r.mapping=io:l===ql&&(r.mapping=no),r}function i(r){if(r&&r.isTexture){const l=r.mapping;if(l===Xl||l===ql)if(t.has(r)){const a=t.get(r).texture;return e(a,r.mapping)}else{const a=r.image;if(a&&a.height>0){const h=new op(a.height);return h.fromEquirectangularTexture(n,r),t.set(r,h),r.addEventListener("dispose",s),e(h.texture,r.mapping)}else return null}}return r}function s(r){const l=r.target;l.removeEventListener("dispose",s);const a=t.get(l);a!==void 0&&(t.delete(l),a.dispose())}function o(){t=new WeakMap}return{get:i,dispose:o}}class Zh extends qd{constructor(t=-1,e=1,i=1,s=-1,o=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=o,this.far=r,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,o,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=o,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let o=i-t,r=i+t,l=s+e,a=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,r=o+h*this.view.width,l-=f*this.view.offsetY,a=l-f*this.view.height}this.projectionMatrix.makeOrthographic(o,r,l,a,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Ks=4,tf=[.125,.215,.35,.446,.526,.582],gs=20,rl=new Zh,ef=new Et;let al=null,ll=0,hl=0,cl=!1;const ps=(1+Math.sqrt(5))/2,Hs=1/ps,nf=[new I(-ps,Hs,0),new I(ps,Hs,0),new I(-Hs,0,ps),new I(Hs,0,ps),new I(0,ps,-Hs),new I(0,ps,Hs),new I(-1,1,-1),new I(1,1,-1),new I(-1,1,1),new I(1,1,1)];class sf{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,i,s,o),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=af(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=rf(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(al,ll,hl),this._renderer.xr.enabled=cl,t.scissorTest=!1,Rr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===io||t.mapping===no?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),al=this._renderer.getRenderTarget(),ll=this._renderer.getActiveCubeFace(),hl=this._renderer.getActiveMipmapLevel(),cl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Yi,minFilter:Yi,generateMipmaps:!1,type:pn,format:nn,colorSpace:fo,depthBuffer:!1},s=of(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=of(t,e,i);const{_lodMax:o}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=jg(o)),this._blurMaterial=$g(o,t,e)}return s}_compileMaterial(t){const e=new Mt(this._lodPlanes[0],t);this._renderer.compile(e,rl)}_sceneToCubeUV(t,e,i,s){const l=new Fi(90,1,e,i),a=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,d=f.toneMapping;f.getClearColor(ef),f.toneMapping=In,f.autoClear=!1;const u=new re({name:"PMREM.Background",side:wi,depthWrite:!1,depthTest:!1}),p=new Mt(new Yt,u);let x=!1;const m=t.background;m?m.isColor&&(u.color.copy(m),t.background=null,x=!0):(u.color.copy(ef),x=!0);for(let g=0;g<6;g++){const M=g%3;M===0?(l.up.set(0,a[g],0),l.lookAt(h[g],0,0)):M===1?(l.up.set(0,0,a[g]),l.lookAt(0,h[g],0)):(l.up.set(0,a[g],0),l.lookAt(0,0,h[g]));const S=this._cubeSize;Rr(s,M*S,g>2?S:0,S,S),f.setRenderTarget(s),x&&f.render(p,l),f.render(t,l)}p.geometry.dispose(),p.material.dispose(),f.toneMapping=d,f.autoClear=c,t.background=m}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===io||t.mapping===no;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=af()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=rf());const o=s?this._cubemapMaterial:this._equirectMaterial,r=new Mt(this._lodPlanes[0],o),l=o.uniforms;l.envMap.value=t;const a=this._cubeSize;Rr(e,0,0,3*a,2*a),i.setRenderTarget(e),i.render(r,rl)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let o=1;o<s;o++){const r=Math.sqrt(this._sigmas[o]*this._sigmas[o]-this._sigmas[o-1]*this._sigmas[o-1]),l=nf[(s-o-1)%nf.length];this._blur(t,o-1,o,r,l)}e.autoClear=i}_blur(t,e,i,s,o){const r=this._pingPongRenderTarget;this._halfBlur(t,r,e,i,s,"latitudinal",o),this._halfBlur(r,t,i,i,s,"longitudinal",o)}_halfBlur(t,e,i,s,o,r,l){const a=this._renderer,h=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,c=new Mt(this._lodPlanes[s],h),d=h.uniforms,u=this._sizeLods[i]-1,p=isFinite(o)?Math.PI/(2*u):2*Math.PI/(2*gs-1),x=o/p,m=isFinite(o)?1+Math.floor(f*x):gs;m>gs&&console.warn(`sigmaRadians, ${o}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${gs}`);const g=[];let M=0;for(let w=0;w<gs;++w){const C=w/x,y=Math.exp(-C*C/2);g.push(y),w===0?M+=y:w<m&&(M+=2*y)}for(let w=0;w<g.length;w++)g[w]=g[w]/M;d.envMap.value=t.texture,d.samples.value=m,d.weights.value=g,d.latitudinal.value=r==="latitudinal",l&&(d.poleAxis.value=l);const{_lodMax:S}=this;d.dTheta.value=p,d.mipInt.value=S-i;const v=this._sizeLods[s],D=3*v*(s>S-Ks?s-S+Ks:0),R=4*(this._cubeSize-v);Rr(e,D,R,3*v,2*v),a.setRenderTarget(e),a.render(c,rl)}}function jg(n){const t=[],e=[],i=[];let s=n;const o=n-Ks+1+tf.length;for(let r=0;r<o;r++){const l=Math.pow(2,s);e.push(l);let a=1/l;r>n-Ks?a=tf[r-n+Ks-1]:r===0&&(a=0),i.push(a);const h=1/(l-2),f=-h,c=1+h,d=[f,f,c,f,c,c,f,f,c,c,f,c],u=6,p=6,x=3,m=2,g=1,M=new Float32Array(x*p*u),S=new Float32Array(m*p*u),v=new Float32Array(g*p*u);for(let R=0;R<u;R++){const w=R%3*2/3-1,C=R>2?0:-1,y=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(y,x*p*R),S.set(d,m*p*R);const b=[R,R,R,R,R,R];v.set(b,g*p*R)}const D=new Qe;D.setAttribute("position",new Ai(M,x)),D.setAttribute("uv",new Ai(S,m)),D.setAttribute("faceIndex",new Ai(v,g)),t.push(D),s>Ks&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function of(n,t,e){const i=new Ki(n,t,e);return i.texture.mapping=Ca,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Rr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function $g(n,t,e){const i=new Float32Array(gs),s=new I(0,1,0);return new Mi({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function rf(){return new Mi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jh(),fragmentShader:`

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
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function af(){return new Mi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Pn,depthTest:!1,depthWrite:!1})}function Jh(){return`

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
	`}function Zg(n){let t=new WeakMap,e=null;function i(l){if(l&&l.isTexture){const a=l.mapping,h=a===Xl||a===ql,f=a===io||a===no;if(h||f){let c=t.get(l);const d=c!==void 0?c.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==d)return e===null&&(e=new sf(n)),c=h?e.fromEquirectangular(l,c):e.fromCubemap(l,c),c.texture.pmremVersion=l.pmremVersion,t.set(l,c),c.texture;if(c!==void 0)return c.texture;{const u=l.image;return h&&u&&u.height>0||f&&u&&s(u)?(e===null&&(e=new sf(n)),c=h?e.fromEquirectangular(l):e.fromCubemap(l),c.texture.pmremVersion=l.pmremVersion,t.set(l,c),l.addEventListener("dispose",o),c.texture):null}}}return l}function s(l){let a=0;const h=6;for(let f=0;f<h;f++)l[f]!==void 0&&a++;return a===h}function o(l){const a=l.target;a.removeEventListener("dispose",o);const h=t.get(a);h!==void 0&&(t.delete(a),h.dispose())}function r(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:r}}function Jg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Po("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Qg(n,t,e,i){const s={},o=new WeakMap;function r(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const p in d.attributes)t.remove(d.attributes[p]);for(const p in d.morphAttributes){const x=d.morphAttributes[p];for(let m=0,g=x.length;m<g;m++)t.remove(x[m])}d.removeEventListener("dispose",r),delete s[d.id];const u=o.get(d);u&&(t.remove(u),o.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function l(c,d){return s[d.id]===!0||(d.addEventListener("dispose",r),s[d.id]=!0,e.memory.geometries++),d}function a(c){const d=c.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER);const u=c.morphAttributes;for(const p in u){const x=u[p];for(let m=0,g=x.length;m<g;m++)t.update(x[m],n.ARRAY_BUFFER)}}function h(c){const d=[],u=c.index,p=c.attributes.position;let x=0;if(u!==null){const M=u.array;x=u.version;for(let S=0,v=M.length;S<v;S+=3){const D=M[S+0],R=M[S+1],w=M[S+2];d.push(D,R,R,w,w,D)}}else if(p!==void 0){const M=p.array;x=p.version;for(let S=0,v=M.length/3-1;S<v;S+=3){const D=S+0,R=S+1,w=S+2;d.push(D,R,R,w,w,D)}}else return;const m=new(Fd(d)?Wd:Vd)(d,1);m.version=x;const g=o.get(c);g&&t.remove(g),o.set(c,m)}function f(c){const d=o.get(c);if(d){const u=c.index;u!==null&&d.version<u.version&&h(c)}else h(c);return o.get(c)}return{get:l,update:a,getWireframeAttribute:f}}function t1(n,t,e){let i;function s(d){i=d}let o,r;function l(d){o=d.type,r=d.bytesPerElement}function a(d,u){n.drawElements(i,u,o,d*r),e.update(u,i,1)}function h(d,u,p){p!==0&&(n.drawElementsInstanced(i,u,o,d*r,p),e.update(u,i,p))}function f(d,u,p){if(p===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,o,d,0,p);let m=0;for(let g=0;g<p;g++)m+=u[g];e.update(m,i,1)}function c(d,u,p,x){if(p===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<d.length;g++)h(d[g]/r,u[g],x[g]);else{m.multiDrawElementsInstancedWEBGL(i,u,0,o,d,0,x,0,p);let g=0;for(let M=0;M<p;M++)g+=u[M]*x[M];e.update(g,i,1)}}this.setMode=s,this.setIndex=l,this.render=a,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=c}function e1(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(o,r,l){switch(e.calls++,r){case n.TRIANGLES:e.triangles+=l*(o/3);break;case n.LINES:e.lines+=l*(o/2);break;case n.LINE_STRIP:e.lines+=l*(o-1);break;case n.LINE_LOOP:e.lines+=l*o;break;case n.POINTS:e.points+=l*o;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function i1(n,t,e){const i=new WeakMap,s=new Ce;function o(r,l,a){const h=r.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,c=f!==void 0?f.length:0;let d=i.get(l);if(d===void 0||d.count!==c){let b=function(){C.dispose(),i.delete(l),l.removeEventListener("dispose",b)};var u=b;d!==void 0&&d.texture.dispose();const p=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,m=l.morphAttributes.color!==void 0,g=l.morphAttributes.position||[],M=l.morphAttributes.normal||[],S=l.morphAttributes.color||[];let v=0;p===!0&&(v=1),x===!0&&(v=2),m===!0&&(v=3);let D=l.attributes.position.count*v,R=1;D>t.maxTextureSize&&(R=Math.ceil(D/t.maxTextureSize),D=t.maxTextureSize);const w=new Float32Array(D*R*4*c),C=new Bd(w,D,R,c);C.type=Ln,C.needsUpdate=!0;const y=v*4;for(let P=0;P<c;P++){const O=g[P],U=M[P],G=S[P],$=D*R*4*P;for(let Y=0;Y<O.count;Y++){const K=Y*y;p===!0&&(s.fromBufferAttribute(O,Y),w[$+K+0]=s.x,w[$+K+1]=s.y,w[$+K+2]=s.z,w[$+K+3]=0),x===!0&&(s.fromBufferAttribute(U,Y),w[$+K+4]=s.x,w[$+K+5]=s.y,w[$+K+6]=s.z,w[$+K+7]=0),m===!0&&(s.fromBufferAttribute(G,Y),w[$+K+8]=s.x,w[$+K+9]=s.y,w[$+K+10]=s.z,w[$+K+11]=G.itemSize===4?s.w:1)}}d={count:c,texture:C,size:new kt(D,R)},i.set(l,d),l.addEventListener("dispose",b)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)a.getUniforms().setValue(n,"morphTexture",r.morphTexture,e);else{let p=0;for(let m=0;m<h.length;m++)p+=h[m];const x=l.morphTargetsRelative?1:1-p;a.getUniforms().setValue(n,"morphTargetBaseInfluence",x),a.getUniforms().setValue(n,"morphTargetInfluences",h)}a.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),a.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:o}}function n1(n,t,e,i){let s=new WeakMap;function o(a){const h=i.render.frame,f=a.geometry,c=t.get(a,f);if(s.get(c)!==h&&(t.update(c),s.set(c,h)),a.isInstancedMesh&&(a.hasEventListener("dispose",l)===!1&&a.addEventListener("dispose",l),s.get(a)!==h&&(e.update(a.instanceMatrix,n.ARRAY_BUFFER),a.instanceColor!==null&&e.update(a.instanceColor,n.ARRAY_BUFFER),s.set(a,h))),a.isSkinnedMesh){const d=a.skeleton;s.get(d)!==h&&(d.update(),s.set(d,h))}return c}function r(){s=new WeakMap}function l(a){const h=a.target;h.removeEventListener("dispose",l),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:o,dispose:r}}class jd extends Ti{constructor(t,e,i,s,o,r,l,a,h,f=Zs){if(f!==Zs&&f!==oo)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Zs&&(i=bs),i===void 0&&f===oo&&(i=so),super(null,s,o,r,l,a,f,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:xe,this.minFilter=a!==void 0?a:xe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const $d=new Ti,lf=new jd(1,1),Zd=new Bd,Jd=new W0,Qd=new Yd,hf=[],cf=[],ff=new Float32Array(16),df=new Float32Array(9),uf=new Float32Array(4);function po(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let o=hf[s];if(o===void 0&&(o=new Float32Array(s),hf[s]=o),t!==0){i.toArray(o,0);for(let r=1,l=0;r!==t;++r)l+=e,n[r].toArray(o,l)}return o}function si(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function oi(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function Da(n,t){let e=cf[t];e===void 0&&(e=new Int32Array(t),cf[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function s1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function o1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(si(e,t))return;n.uniform2fv(this.addr,t),oi(e,t)}}function r1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(si(e,t))return;n.uniform3fv(this.addr,t),oi(e,t)}}function a1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(si(e,t))return;n.uniform4fv(this.addr,t),oi(e,t)}}function l1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(si(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),oi(e,t)}else{if(si(e,i))return;uf.set(i),n.uniformMatrix2fv(this.addr,!1,uf),oi(e,i)}}function h1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(si(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),oi(e,t)}else{if(si(e,i))return;df.set(i),n.uniformMatrix3fv(this.addr,!1,df),oi(e,i)}}function c1(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(si(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),oi(e,t)}else{if(si(e,i))return;ff.set(i),n.uniformMatrix4fv(this.addr,!1,ff),oi(e,i)}}function f1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function d1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(si(e,t))return;n.uniform2iv(this.addr,t),oi(e,t)}}function u1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(si(e,t))return;n.uniform3iv(this.addr,t),oi(e,t)}}function p1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(si(e,t))return;n.uniform4iv(this.addr,t),oi(e,t)}}function m1(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function g1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(si(e,t))return;n.uniform2uiv(this.addr,t),oi(e,t)}}function x1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(si(e,t))return;n.uniform3uiv(this.addr,t),oi(e,t)}}function v1(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(si(e,t))return;n.uniform4uiv(this.addr,t),oi(e,t)}}function _1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let o;this.type===n.SAMPLER_2D_SHADOW?(lf.compareFunction=zd,o=lf):o=$d,e.setTexture2D(t||o,s)}function M1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Jd,s)}function y1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Qd,s)}function b1(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||Zd,s)}function S1(n){switch(n){case 5126:return s1;case 35664:return o1;case 35665:return r1;case 35666:return a1;case 35674:return l1;case 35675:return h1;case 35676:return c1;case 5124:case 35670:return f1;case 35667:case 35671:return d1;case 35668:case 35672:return u1;case 35669:case 35673:return p1;case 5125:return m1;case 36294:return g1;case 36295:return x1;case 36296:return v1;case 35678:case 36198:case 36298:case 36306:case 35682:return _1;case 35679:case 36299:case 36307:return M1;case 35680:case 36300:case 36308:case 36293:return y1;case 36289:case 36303:case 36311:case 36292:return b1}}function E1(n,t){n.uniform1fv(this.addr,t)}function w1(n,t){const e=po(t,this.size,2);n.uniform2fv(this.addr,e)}function T1(n,t){const e=po(t,this.size,3);n.uniform3fv(this.addr,e)}function A1(n,t){const e=po(t,this.size,4);n.uniform4fv(this.addr,e)}function R1(n,t){const e=po(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function C1(n,t){const e=po(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function L1(n,t){const e=po(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function D1(n,t){n.uniform1iv(this.addr,t)}function P1(n,t){n.uniform2iv(this.addr,t)}function I1(n,t){n.uniform3iv(this.addr,t)}function N1(n,t){n.uniform4iv(this.addr,t)}function O1(n,t){n.uniform1uiv(this.addr,t)}function U1(n,t){n.uniform2uiv(this.addr,t)}function z1(n,t){n.uniform3uiv(this.addr,t)}function F1(n,t){n.uniform4uiv(this.addr,t)}function k1(n,t,e){const i=this.cache,s=t.length,o=Da(e,s);si(i,o)||(n.uniform1iv(this.addr,o),oi(i,o));for(let r=0;r!==s;++r)e.setTexture2D(t[r]||$d,o[r])}function B1(n,t,e){const i=this.cache,s=t.length,o=Da(e,s);si(i,o)||(n.uniform1iv(this.addr,o),oi(i,o));for(let r=0;r!==s;++r)e.setTexture3D(t[r]||Jd,o[r])}function H1(n,t,e){const i=this.cache,s=t.length,o=Da(e,s);si(i,o)||(n.uniform1iv(this.addr,o),oi(i,o));for(let r=0;r!==s;++r)e.setTextureCube(t[r]||Qd,o[r])}function G1(n,t,e){const i=this.cache,s=t.length,o=Da(e,s);si(i,o)||(n.uniform1iv(this.addr,o),oi(i,o));for(let r=0;r!==s;++r)e.setTexture2DArray(t[r]||Zd,o[r])}function V1(n){switch(n){case 5126:return E1;case 35664:return w1;case 35665:return T1;case 35666:return A1;case 35674:return R1;case 35675:return C1;case 35676:return L1;case 5124:case 35670:return D1;case 35667:case 35671:return P1;case 35668:case 35672:return I1;case 35669:case 35673:return N1;case 5125:return O1;case 36294:return U1;case 36295:return z1;case 36296:return F1;case 35678:case 36198:case 36298:case 36306:case 35682:return k1;case 35679:case 36299:case 36307:return B1;case 35680:case 36300:case 36308:case 36293:return H1;case 36289:case 36303:case 36311:case 36292:return G1}}class W1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=S1(e.type)}}class X1{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=V1(e.type)}}class q1{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let o=0,r=s.length;o!==r;++o){const l=s[o];l.setValue(t,e[l.id],i)}}}const fl=/(\w+)(\])?(\[|\.)?/g;function pf(n,t){n.seq.push(t),n.map[t.id]=t}function Y1(n,t,e){const i=n.name,s=i.length;for(fl.lastIndex=0;;){const o=fl.exec(i),r=fl.lastIndex;let l=o[1];const a=o[2]==="]",h=o[3];if(a&&(l=l|0),h===void 0||h==="["&&r+2===s){pf(e,h===void 0?new W1(l,n,t):new X1(l,n,t));break}else{let c=e.map[l];c===void 0&&(c=new q1(l),pf(e,c)),e=c}}}class ea{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const o=t.getActiveUniform(e,s),r=t.getUniformLocation(e,o.name);Y1(o,r,this)}}setValue(t,e,i,s){const o=this.map[e];o!==void 0&&o.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let o=0,r=e.length;o!==r;++o){const l=e[o],a=i[l.id];a.needsUpdate!==!1&&l.setValue(t,a.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,o=t.length;s!==o;++s){const r=t[s];r.id in e&&i.push(r)}return i}}function mf(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const K1=37297;let j1=0;function $1(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),o=Math.min(t+6,e.length);for(let r=s;r<o;r++){const l=r+1;i.push(`${l===t?">":" "} ${l}: ${e[r]}`)}return i.join(`
`)}const gf=new Jt;function Z1(n){pe._getMatrix(gf,pe.workingColorSpace,n);const t=`mat3( ${gf.elements.map(e=>e.toFixed(4))} )`;switch(pe.getTransfer(n)){case La:return[t,"LinearTransferOETF"];case we:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function xf(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const r=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+$1(n.getShaderSource(t),r)}else return s}function J1(n,t){const e=Z1(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Q1(n,t){let e;switch(t){case yd:e="Linear";break;case bd:e="Reinhard";break;case Sd:e="Cineon";break;case Ra:e="ACESFilmic";break;case Ed:e="AgX";break;case wd:e="Neutral";break;case S0:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Cr=new I;function tx(){pe.getLuminanceCoefficients(Cr);const n=Cr.x.toFixed(4),t=Cr.y.toFixed(4),e=Cr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ex(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Io).join(`
`)}function ix(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function nx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const o=n.getActiveAttrib(t,s),r=o.name;let l=1;o.type===n.FLOAT_MAT2&&(l=2),o.type===n.FLOAT_MAT3&&(l=3),o.type===n.FLOAT_MAT4&&(l=4),e[r]={type:o.type,location:n.getAttribLocation(t,r),locationSize:l}}return e}function Io(n){return n!==""}function vf(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function _f(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function bh(n){return n.replace(sx,rx)}const ox=new Map;function rx(n,t){let e=ie[t];if(e===void 0){const i=ox.get(t);if(i!==void 0)e=ie[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return bh(e)}const ax=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mf(n){return n.replace(ax,lx)}function lx(n,t,e,i){let s="";for(let o=parseInt(t);o<parseInt(e);o++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return s}function yf(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function hx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===_d?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===Md?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===wn&&(t="SHADOWMAP_TYPE_VSM"),t}function cx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case io:case no:t="ENVMAP_TYPE_CUBE";break;case Ca:t="ENVMAP_TYPE_CUBE_UV";break}return t}function fx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case no:t="ENVMAP_MODE_REFRACTION";break}return t}function dx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Hh:t="ENVMAP_BLENDING_MULTIPLY";break;case y0:t="ENVMAP_BLENDING_MIX";break;case b0:t="ENVMAP_BLENDING_ADD";break}return t}function ux(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function px(n,t,e,i){const s=n.getContext(),o=e.defines;let r=e.vertexShader,l=e.fragmentShader;const a=hx(e),h=cx(e),f=fx(e),c=dx(e),d=ux(e),u=ex(e),p=ix(o),x=s.createProgram();let m,g,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Io).join(`
`),m.length>0&&(m+=`
`),g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p].filter(Io).join(`
`),g.length>0&&(g+=`
`)):(m=[yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Io).join(`
`),g=[yf(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,p,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+a:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==In?"#define TONE_MAPPING":"",e.toneMapping!==In?ie.tonemapping_pars_fragment:"",e.toneMapping!==In?Q1("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ie.colorspace_pars_fragment,J1("linearToOutputTexel",e.outputColorSpace),tx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Io).join(`
`)),r=bh(r),r=vf(r,e),r=_f(r,e),l=bh(l),l=vf(l,e),l=_f(l,e),r=Mf(r),l=Mf(l),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,g=["#define varying in",e.glslVersion===Ic?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Ic?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+g);const S=M+m+r,v=M+g+l,D=mf(s,s.VERTEX_SHADER,S),R=mf(s,s.FRAGMENT_SHADER,v);s.attachShader(x,D),s.attachShader(x,R),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(P){if(n.debug.checkShaderErrors){const O=s.getProgramInfoLog(x).trim(),U=s.getShaderInfoLog(D).trim(),G=s.getShaderInfoLog(R).trim();let $=!0,Y=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,D,R);else{const K=xf(s,D,"vertex"),W=xf(s,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+K+`
`+W)}else O!==""?console.warn("THREE.WebGLProgram: Program Info Log:",O):(U===""||G==="")&&(Y=!1);Y&&(P.diagnostics={runnable:$,programLog:O,vertexShader:{log:U,prefix:m},fragmentShader:{log:G,prefix:g}})}s.deleteShader(D),s.deleteShader(R),C=new ea(s,x),y=nx(s,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let y;this.getAttributes=function(){return y===void 0&&w(this),y};let b=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=s.getProgramParameter(x,K1)),b},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=j1++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=D,this.fragmentShader=R,this}let mx=0;class gx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),o=this._getShaderStage(i),r=this._getShaderCacheForMaterial(t);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(o)===!1&&(r.add(o),o.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new xx(t),e.set(t,i)),i}}class xx{constructor(t){this.id=mx++,this.code=t,this.usedTimes=0}}function vx(n,t,e,i,s,o,r){const l=new Hd,a=new gx,h=new Set,f=[],c=s.logarithmicDepthBuffer,d=s.vertexTextures;let u=s.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(y){return h.add(y),y===0?"uv":`uv${y}`}function m(y,b,P,O,U){const G=O.fog,$=U.geometry,Y=y.isMeshStandardMaterial?O.environment:null,K=(y.isMeshStandardMaterial?e:t).get(y.envMap||Y),W=K&&K.mapping===Ca?K.image.height:null,ot=p[y.type];y.precision!==null&&(u=s.getMaxPrecision(y.precision),u!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",u,"instead."));const rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,_t=rt!==void 0?rt.length:0;let jt=0;$.morphAttributes.position!==void 0&&(jt=1),$.morphAttributes.normal!==void 0&&(jt=2),$.morphAttributes.color!==void 0&&(jt=3);let _e,J,at,wt;if(ot){const Ee=cn[ot];_e=Ee.vertexShader,J=Ee.fragmentShader}else _e=y.vertexShader,J=y.fragmentShader,a.update(y),at=a.getVertexShaderID(y),wt=a.getFragmentShaderID(y);const dt=n.getRenderTarget(),zt=n.state.buffers.depth.getReversed(),Gt=U.isInstancedMesh===!0,Bt=U.isBatchedMesh===!0,qt=!!y.map,Kt=!!y.matcap,Te=!!K,F=!!y.aoMap,ei=!!y.lightMap,ae=!!y.bumpMap,le=!!y.normalMap,It=!!y.displacementMap,Le=!!y.emissiveMap,Ft=!!y.metalnessMap,L=!!y.roughnessMap,E=y.anisotropy>0,V=y.clearcoat>0,tt=y.dispersion>0,st=y.iridescence>0,Q=y.sheen>0,Nt=y.transmission>0,pt=E&&!!y.anisotropyMap,yt=V&&!!y.clearcoatMap,ge=V&&!!y.clearcoatNormalMap,lt=V&&!!y.clearcoatRoughnessMap,bt=st&&!!y.iridescenceMap,Ht=st&&!!y.iridescenceThicknessMap,Vt=Q&&!!y.sheenColorMap,St=Q&&!!y.sheenRoughnessMap,de=!!y.specularMap,ee=!!y.specularColorMap,Pe=!!y.specularIntensityMap,z=Nt&&!!y.transmissionMap,ut=Nt&&!!y.thicknessMap,j=!!y.gradientMap,et=!!y.alphaMap,xt=y.alphaTest>0,mt=!!y.alphaHash,$t=!!y.extensions;let We=In;y.toneMapped&&(dt===null||dt.isXRRenderTarget===!0)&&(We=n.toneMapping);const mi={shaderID:ot,shaderType:y.type,shaderName:y.name,vertexShader:_e,fragmentShader:J,defines:y.defines,customVertexShaderID:at,customFragmentShaderID:wt,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:u,batching:Bt,batchingColor:Bt&&U._colorsTexture!==null,instancing:Gt,instancingColor:Gt&&U.instanceColor!==null,instancingMorph:Gt&&U.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:dt===null?n.outputColorSpace:dt.isXRRenderTarget===!0?dt.texture.colorSpace:fo,alphaToCoverage:!!y.alphaToCoverage,map:qt,matcap:Kt,envMap:Te,envMapMode:Te&&K.mapping,envMapCubeUVHeight:W,aoMap:F,lightMap:ei,bumpMap:ae,normalMap:le,displacementMap:d&&It,emissiveMap:Le,normalMapObjectSpace:le&&y.normalMapType===A0,normalMapTangentSpace:le&&y.normalMapType===Kh,metalnessMap:Ft,roughnessMap:L,anisotropy:E,anisotropyMap:pt,clearcoat:V,clearcoatMap:yt,clearcoatNormalMap:ge,clearcoatRoughnessMap:lt,dispersion:tt,iridescence:st,iridescenceMap:bt,iridescenceThicknessMap:Ht,sheen:Q,sheenColorMap:Vt,sheenRoughnessMap:St,specularMap:de,specularColorMap:ee,specularIntensityMap:Pe,transmission:Nt,transmissionMap:z,thicknessMap:ut,gradientMap:j,opaque:y.transparent===!1&&y.blending===$s&&y.alphaToCoverage===!1,alphaMap:et,alphaTest:xt,alphaHash:mt,combine:y.combine,mapUv:qt&&x(y.map.channel),aoMapUv:F&&x(y.aoMap.channel),lightMapUv:ei&&x(y.lightMap.channel),bumpMapUv:ae&&x(y.bumpMap.channel),normalMapUv:le&&x(y.normalMap.channel),displacementMapUv:It&&x(y.displacementMap.channel),emissiveMapUv:Le&&x(y.emissiveMap.channel),metalnessMapUv:Ft&&x(y.metalnessMap.channel),roughnessMapUv:L&&x(y.roughnessMap.channel),anisotropyMapUv:pt&&x(y.anisotropyMap.channel),clearcoatMapUv:yt&&x(y.clearcoatMap.channel),clearcoatNormalMapUv:ge&&x(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:lt&&x(y.clearcoatRoughnessMap.channel),iridescenceMapUv:bt&&x(y.iridescenceMap.channel),iridescenceThicknessMapUv:Ht&&x(y.iridescenceThicknessMap.channel),sheenColorMapUv:Vt&&x(y.sheenColorMap.channel),sheenRoughnessMapUv:St&&x(y.sheenRoughnessMap.channel),specularMapUv:de&&x(y.specularMap.channel),specularColorMapUv:ee&&x(y.specularColorMap.channel),specularIntensityMapUv:Pe&&x(y.specularIntensityMap.channel),transmissionMapUv:z&&x(y.transmissionMap.channel),thicknessMapUv:ut&&x(y.thicknessMap.channel),alphaMapUv:et&&x(y.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(le||E),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:U.isPoints===!0&&!!$.attributes.uv&&(qt||et),fog:!!G,useFog:y.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:zt,skinning:U.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:_t,morphTextureStride:jt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:y.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:We,decodeVideoTexture:qt&&y.map.isVideoTexture===!0&&pe.getTransfer(y.map.colorSpace)===we,decodeVideoTextureEmissive:Le&&y.emissiveMap.isVideoTexture===!0&&pe.getTransfer(y.emissiveMap.colorSpace)===we,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Ei,flipSided:y.side===wi,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionClipCullDistance:$t&&y.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:($t&&y.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:y.customProgramCacheKey()};return mi.vertexUv1s=h.has(1),mi.vertexUv2s=h.has(2),mi.vertexUv3s=h.has(3),h.clear(),mi}function g(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const P in y.defines)b.push(P),b.push(y.defines[P]);return y.isRawShaderMaterial===!1&&(M(b,y),S(b,y),b.push(n.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.numLightProbes),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function S(y,b){l.disableAll(),b.supportsVertexTextures&&l.enable(0),b.instancing&&l.enable(1),b.instancingColor&&l.enable(2),b.instancingMorph&&l.enable(3),b.matcap&&l.enable(4),b.envMap&&l.enable(5),b.normalMapObjectSpace&&l.enable(6),b.normalMapTangentSpace&&l.enable(7),b.clearcoat&&l.enable(8),b.iridescence&&l.enable(9),b.alphaTest&&l.enable(10),b.vertexColors&&l.enable(11),b.vertexAlphas&&l.enable(12),b.vertexUv1s&&l.enable(13),b.vertexUv2s&&l.enable(14),b.vertexUv3s&&l.enable(15),b.vertexTangents&&l.enable(16),b.anisotropy&&l.enable(17),b.alphaHash&&l.enable(18),b.batching&&l.enable(19),b.dispersion&&l.enable(20),b.batchingColor&&l.enable(21),y.push(l.mask),l.disableAll(),b.fog&&l.enable(0),b.useFog&&l.enable(1),b.flatShading&&l.enable(2),b.logarithmicDepthBuffer&&l.enable(3),b.reverseDepthBuffer&&l.enable(4),b.skinning&&l.enable(5),b.morphTargets&&l.enable(6),b.morphNormals&&l.enable(7),b.morphColors&&l.enable(8),b.premultipliedAlpha&&l.enable(9),b.shadowMapEnabled&&l.enable(10),b.doubleSided&&l.enable(11),b.flipSided&&l.enable(12),b.useDepthPacking&&l.enable(13),b.dithering&&l.enable(14),b.transmission&&l.enable(15),b.sheen&&l.enable(16),b.opaque&&l.enable(17),b.pointsUvs&&l.enable(18),b.decodeVideoTexture&&l.enable(19),b.decodeVideoTextureEmissive&&l.enable(20),b.alphaToCoverage&&l.enable(21),y.push(l.mask)}function v(y){const b=p[y.type];let P;if(b){const O=cn[b];P=Ko.clone(O.uniforms)}else P=y.uniforms;return P}function D(y,b){let P;for(let O=0,U=f.length;O<U;O++){const G=f[O];if(G.cacheKey===b){P=G,++P.usedTimes;break}}return P===void 0&&(P=new px(n,b,y,o),f.push(P)),P}function R(y){if(--y.usedTimes===0){const b=f.indexOf(y);f[b]=f[f.length-1],f.pop(),y.destroy()}}function w(y){a.remove(y)}function C(){a.dispose()}return{getParameters:m,getProgramCacheKey:g,getUniforms:v,acquireProgram:D,releaseProgram:R,releaseShaderCache:w,programs:f,dispose:C}}function _x(){let n=new WeakMap;function t(r){return n.has(r)}function e(r){let l=n.get(r);return l===void 0&&(l={},n.set(r,l)),l}function i(r){n.delete(r)}function s(r,l,a){n.get(r)[l]=a}function o(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:o}}function Mx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function bf(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Sf(){const n=[];let t=0;const e=[],i=[],s=[];function o(){t=0,e.length=0,i.length=0,s.length=0}function r(c,d,u,p,x,m){let g=n[t];return g===void 0?(g={id:c.id,object:c,geometry:d,material:u,groupOrder:p,renderOrder:c.renderOrder,z:x,group:m},n[t]=g):(g.id=c.id,g.object=c,g.geometry=d,g.material=u,g.groupOrder=p,g.renderOrder=c.renderOrder,g.z=x,g.group=m),t++,g}function l(c,d,u,p,x,m){const g=r(c,d,u,p,x,m);u.transmission>0?i.push(g):u.transparent===!0?s.push(g):e.push(g)}function a(c,d,u,p,x,m){const g=r(c,d,u,p,x,m);u.transmission>0?i.unshift(g):u.transparent===!0?s.unshift(g):e.unshift(g)}function h(c,d){e.length>1&&e.sort(c||Mx),i.length>1&&i.sort(d||bf),s.length>1&&s.sort(d||bf)}function f(){for(let c=t,d=n.length;c<d;c++){const u=n[c];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:e,transmissive:i,transparent:s,init:o,push:l,unshift:a,finish:f,sort:h}}function yx(){let n=new WeakMap;function t(i,s){const o=n.get(i);let r;return o===void 0?(r=new Sf,n.set(i,[r])):s>=o.length?(r=new Sf,o.push(r)):r=o[s],r}function e(){n=new WeakMap}return{get:t,dispose:e}}function bx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new I,color:new Et};break;case"SpotLight":e={position:new I,direction:new I,color:new Et,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new Et,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new Et,groundColor:new Et};break;case"RectAreaLight":e={color:new Et,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Sx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Ex=0;function wx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Tx(n){const t=new bx,e=Sx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new I);const s=new I,o=new Ne,r=new Ne;function l(h){let f=0,c=0,d=0;for(let y=0;y<9;y++)i.probe[y].set(0,0,0);let u=0,p=0,x=0,m=0,g=0,M=0,S=0,v=0,D=0,R=0,w=0;h.sort(wx);for(let y=0,b=h.length;y<b;y++){const P=h[y],O=P.color,U=P.intensity,G=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)f+=O.r*U,c+=O.g*U,d+=O.b*U;else if(P.isLightProbe){for(let Y=0;Y<9;Y++)i.probe[Y].addScaledVector(P.sh.coefficients[Y],U);w++}else if(P.isDirectionalLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const K=P.shadow,W=e.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.directionalShadow[u]=W,i.directionalShadowMap[u]=$,i.directionalShadowMatrix[u]=P.shadow.matrix,M++}i.directional[u]=Y,u++}else if(P.isSpotLight){const Y=t.get(P);Y.position.setFromMatrixPosition(P.matrixWorld),Y.color.copy(O).multiplyScalar(U),Y.distance=G,Y.coneCos=Math.cos(P.angle),Y.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),Y.decay=P.decay,i.spot[x]=Y;const K=P.shadow;if(P.map&&(i.spotLightMap[D]=P.map,D++,K.updateMatrices(P),P.castShadow&&R++),i.spotLightMatrix[x]=K.matrix,P.castShadow){const W=e.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,i.spotShadow[x]=W,i.spotShadowMap[x]=$,v++}x++}else if(P.isRectAreaLight){const Y=t.get(P);Y.color.copy(O).multiplyScalar(U),Y.halfWidth.set(P.width*.5,0,0),Y.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=Y,m++}else if(P.isPointLight){const Y=t.get(P);if(Y.color.copy(P.color).multiplyScalar(P.intensity),Y.distance=P.distance,Y.decay=P.decay,P.castShadow){const K=P.shadow,W=e.get(P);W.shadowIntensity=K.intensity,W.shadowBias=K.bias,W.shadowNormalBias=K.normalBias,W.shadowRadius=K.radius,W.shadowMapSize=K.mapSize,W.shadowCameraNear=K.camera.near,W.shadowCameraFar=K.camera.far,i.pointShadow[p]=W,i.pointShadowMap[p]=$,i.pointShadowMatrix[p]=P.shadow.matrix,S++}i.point[p]=Y,p++}else if(P.isHemisphereLight){const Y=t.get(P);Y.skyColor.copy(P.color).multiplyScalar(U),Y.groundColor.copy(P.groundColor).multiplyScalar(U),i.hemi[g]=Y,g++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ft.LTC_FLOAT_1,i.rectAreaLTC2=ft.LTC_FLOAT_2):(i.rectAreaLTC1=ft.LTC_HALF_1,i.rectAreaLTC2=ft.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=c,i.ambient[2]=d;const C=i.hash;(C.directionalLength!==u||C.pointLength!==p||C.spotLength!==x||C.rectAreaLength!==m||C.hemiLength!==g||C.numDirectionalShadows!==M||C.numPointShadows!==S||C.numSpotShadows!==v||C.numSpotMaps!==D||C.numLightProbes!==w)&&(i.directional.length=u,i.spot.length=x,i.rectArea.length=m,i.point.length=p,i.hemi.length=g,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=S,i.pointShadowMap.length=S,i.spotShadow.length=v,i.spotShadowMap.length=v,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=S,i.spotLightMatrix.length=v+D-R,i.spotLightMap.length=D,i.numSpotLightShadowsWithMaps=R,i.numLightProbes=w,C.directionalLength=u,C.pointLength=p,C.spotLength=x,C.rectAreaLength=m,C.hemiLength=g,C.numDirectionalShadows=M,C.numPointShadows=S,C.numSpotShadows=v,C.numSpotMaps=D,C.numLightProbes=w,i.version=Ex++)}function a(h,f){let c=0,d=0,u=0,p=0,x=0;const m=f.matrixWorldInverse;for(let g=0,M=h.length;g<M;g++){const S=h[g];if(S.isDirectionalLight){const v=i.directional[c];v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),c++}else if(S.isSpotLight){const v=i.spot[u];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),v.direction.sub(s),v.direction.transformDirection(m),u++}else if(S.isRectAreaLight){const v=i.rectArea[p];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),r.identity(),o.copy(S.matrixWorld),o.premultiply(m),r.extractRotation(o),v.halfWidth.set(S.width*.5,0,0),v.halfHeight.set(0,S.height*.5,0),v.halfWidth.applyMatrix4(r),v.halfHeight.applyMatrix4(r),p++}else if(S.isPointLight){const v=i.point[d];v.position.setFromMatrixPosition(S.matrixWorld),v.position.applyMatrix4(m),d++}else if(S.isHemisphereLight){const v=i.hemi[x];v.direction.setFromMatrixPosition(S.matrixWorld),v.direction.transformDirection(m),x++}}}return{setup:l,setupView:a,state:i}}function Ef(n){const t=new Tx(n),e=[],i=[];function s(f){h.camera=f,e.length=0,i.length=0}function o(f){e.push(f)}function r(f){i.push(f)}function l(){t.setup(e)}function a(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:l,setupLightsView:a,pushLight:o,pushShadow:r}}function Ax(n){let t=new WeakMap;function e(s,o=0){const r=t.get(s);let l;return r===void 0?(l=new Ef(n),t.set(s,[l])):o>=r.length?(l=new Ef(n),r.push(l)):l=r[o],l}function i(){t=new WeakMap}return{get:e,dispose:i}}class Rx extends kn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=w0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Cx extends kn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Lx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Dx=`uniform sampler2D shadow_pass;
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
}`;function Px(n,t,e){let i=new $h;const s=new kt,o=new kt,r=new Ce,l=new Rx({depthPacking:T0}),a=new Cx,h={},f=e.maxTextureSize,c={[os]:wi,[wi]:os,[Ei]:Ei},d=new Mi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new kt},radius:{value:4}},vertexShader:Lx,fragmentShader:Dx}),u=d.clone();u.defines.HORIZONTAL_PASS=1;const p=new Qe;p.setAttribute("position",new Ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new Mt(p,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=_d;let g=this.type;this.render=function(R,w,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const y=n.getRenderTarget(),b=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),O=n.state;O.setBlending(Pn),O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);const U=g!==wn&&this.type===wn,G=g===wn&&this.type!==wn;for(let $=0,Y=R.length;$<Y;$++){const K=R[$],W=K.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",K,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);const ot=W.getFrameExtents();if(s.multiply(ot),o.copy(W.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(o.x=Math.floor(f/ot.x),s.x=o.x*ot.x,W.mapSize.x=o.x),s.y>f&&(o.y=Math.floor(f/ot.y),s.y=o.y*ot.y,W.mapSize.y=o.y)),W.map===null||U===!0||G===!0){const _t=this.type!==wn?{minFilter:xe,magFilter:xe}:{};W.map!==null&&W.map.dispose(),W.map=new Ki(s.x,s.y,_t),W.map.texture.name=K.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const rt=W.getViewportCount();for(let _t=0;_t<rt;_t++){const jt=W.getViewport(_t);r.set(o.x*jt.x,o.y*jt.y,o.x*jt.z,o.y*jt.w),O.viewport(r),W.updateMatrices(K,_t),i=W.getFrustum(),v(w,C,W.camera,K,this.type)}W.isPointLightShadow!==!0&&this.type===wn&&M(W,C),W.needsUpdate=!1}g=this.type,m.needsUpdate=!1,n.setRenderTarget(y,b,P)};function M(R,w){const C=t.update(x);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,u.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,u.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Ki(s.x,s.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,n.setRenderTarget(R.mapPass),n.clear(),n.renderBufferDirect(w,null,C,d,x,null),u.uniforms.shadow_pass.value=R.mapPass.texture,u.uniforms.resolution.value=R.mapSize,u.uniforms.radius.value=R.radius,n.setRenderTarget(R.map),n.clear(),n.renderBufferDirect(w,null,C,u,x,null)}function S(R,w,C,y){let b=null;const P=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(P!==void 0)b=P;else if(b=C.isPointLight===!0?a:l,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const O=b.uuid,U=w.uuid;let G=h[O];G===void 0&&(G={},h[O]=G);let $=G[U];$===void 0&&($=b.clone(),G[U]=$,w.addEventListener("dispose",D)),b=$}if(b.visible=w.visible,b.wireframe=w.wireframe,y===wn?b.side=w.shadowSide!==null?w.shadowSide:w.side:b.side=w.shadowSide!==null?w.shadowSide:c[w.side],b.alphaMap=w.alphaMap,b.alphaTest=w.alphaTest,b.map=w.map,b.clipShadows=w.clipShadows,b.clippingPlanes=w.clippingPlanes,b.clipIntersection=w.clipIntersection,b.displacementMap=w.displacementMap,b.displacementScale=w.displacementScale,b.displacementBias=w.displacementBias,b.wireframeLinewidth=w.wireframeLinewidth,b.linewidth=w.linewidth,C.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const O=n.properties.get(b);O.light=C}return b}function v(R,w,C,y,b){if(R.visible===!1)return;if(R.layers.test(w.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&b===wn)&&(!R.frustumCulled||i.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const U=t.update(R),G=R.material;if(Array.isArray(G)){const $=U.groups;for(let Y=0,K=$.length;Y<K;Y++){const W=$[Y],ot=G[W.materialIndex];if(ot&&ot.visible){const rt=S(R,ot,y,b);R.onBeforeShadow(n,R,w,C,U,rt,W),n.renderBufferDirect(C,null,U,rt,R,W),R.onAfterShadow(n,R,w,C,U,rt,W)}}}else if(G.visible){const $=S(R,G,y,b);R.onBeforeShadow(n,R,w,C,U,$,null),n.renderBufferDirect(C,null,U,$,R,null),R.onAfterShadow(n,R,w,C,U,$,null)}}const O=R.children;for(let U=0,G=O.length;U<G;U++)v(O[U],w,C,y,b)}function D(R){R.target.removeEventListener("dispose",D);for(const C in h){const y=h[C],b=R.target.uuid;b in y&&(y[b].dispose(),delete y[b])}}}const Ix={[Fl]:kl,[Bl]:Vl,[Hl]:Wl,[eo]:Gl,[kl]:Fl,[Vl]:Bl,[Wl]:Hl,[Gl]:eo};function Nx(n,t){function e(){let z=!1;const ut=new Ce;let j=null;const et=new Ce(0,0,0,0);return{setMask:function(xt){j!==xt&&!z&&(n.colorMask(xt,xt,xt,xt),j=xt)},setLocked:function(xt){z=xt},setClear:function(xt,mt,$t,We,mi){mi===!0&&(xt*=We,mt*=We,$t*=We),ut.set(xt,mt,$t,We),et.equals(ut)===!1&&(n.clearColor(xt,mt,$t,We),et.copy(ut))},reset:function(){z=!1,j=null,et.set(-1,0,0,0)}}}function i(){let z=!1,ut=!1,j=null,et=null,xt=null;return{setReversed:function(mt){if(ut!==mt){const $t=t.get("EXT_clip_control");ut?$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.ZERO_TO_ONE_EXT):$t.clipControlEXT($t.LOWER_LEFT_EXT,$t.NEGATIVE_ONE_TO_ONE_EXT);const We=xt;xt=null,this.setClear(We)}ut=mt},getReversed:function(){return ut},setTest:function(mt){mt?dt(n.DEPTH_TEST):zt(n.DEPTH_TEST)},setMask:function(mt){j!==mt&&!z&&(n.depthMask(mt),j=mt)},setFunc:function(mt){if(ut&&(mt=Ix[mt]),et!==mt){switch(mt){case Fl:n.depthFunc(n.NEVER);break;case kl:n.depthFunc(n.ALWAYS);break;case Bl:n.depthFunc(n.LESS);break;case eo:n.depthFunc(n.LEQUAL);break;case Hl:n.depthFunc(n.EQUAL);break;case Gl:n.depthFunc(n.GEQUAL);break;case Vl:n.depthFunc(n.GREATER);break;case Wl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}et=mt}},setLocked:function(mt){z=mt},setClear:function(mt){xt!==mt&&(ut&&(mt=1-mt),n.clearDepth(mt),xt=mt)},reset:function(){z=!1,j=null,et=null,xt=null,ut=!1}}}function s(){let z=!1,ut=null,j=null,et=null,xt=null,mt=null,$t=null,We=null,mi=null;return{setTest:function(Ee){z||(Ee?dt(n.STENCIL_TEST):zt(n.STENCIL_TEST))},setMask:function(Ee){ut!==Ee&&!z&&(n.stencilMask(Ee),ut=Ee)},setFunc:function(Ee,ji,vn){(j!==Ee||et!==ji||xt!==vn)&&(n.stencilFunc(Ee,ji,vn),j=Ee,et=ji,xt=vn)},setOp:function(Ee,ji,vn){(mt!==Ee||$t!==ji||We!==vn)&&(n.stencilOp(Ee,ji,vn),mt=Ee,$t=ji,We=vn)},setLocked:function(Ee){z=Ee},setClear:function(Ee){mi!==Ee&&(n.clearStencil(Ee),mi=Ee)},reset:function(){z=!1,ut=null,j=null,et=null,xt=null,mt=null,$t=null,We=null,mi=null}}}const o=new e,r=new i,l=new s,a=new WeakMap,h=new WeakMap;let f={},c={},d=new WeakMap,u=[],p=null,x=!1,m=null,g=null,M=null,S=null,v=null,D=null,R=null,w=new Et(0,0,0),C=0,y=!1,b=null,P=null,O=null,U=null,G=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,K=0;const W=n.getParameter(n.VERSION);W.indexOf("WebGL")!==-1?(K=parseFloat(/^WebGL (\d)/.exec(W)[1]),Y=K>=1):W.indexOf("OpenGL ES")!==-1&&(K=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),Y=K>=2);let ot=null,rt={};const _t=n.getParameter(n.SCISSOR_BOX),jt=n.getParameter(n.VIEWPORT),_e=new Ce().fromArray(_t),J=new Ce().fromArray(jt);function at(z,ut,j,et){const xt=new Uint8Array(4),mt=n.createTexture();n.bindTexture(z,mt),n.texParameteri(z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let $t=0;$t<j;$t++)z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,et,0,n.RGBA,n.UNSIGNED_BYTE,xt):n.texImage2D(ut+$t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,xt);return mt}const wt={};wt[n.TEXTURE_2D]=at(n.TEXTURE_2D,n.TEXTURE_2D,1),wt[n.TEXTURE_CUBE_MAP]=at(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),wt[n.TEXTURE_2D_ARRAY]=at(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),wt[n.TEXTURE_3D]=at(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),r.setClear(1),l.setClear(0),dt(n.DEPTH_TEST),r.setFunc(eo),ae(!1),le(Cc),dt(n.CULL_FACE),F(Pn);function dt(z){f[z]!==!0&&(n.enable(z),f[z]=!0)}function zt(z){f[z]!==!1&&(n.disable(z),f[z]=!1)}function Gt(z,ut){return c[z]!==ut?(n.bindFramebuffer(z,ut),c[z]=ut,z===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=ut),z===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Bt(z,ut){let j=u,et=!1;if(z){j=d.get(ut),j===void 0&&(j=[],d.set(ut,j));const xt=z.textures;if(j.length!==xt.length||j[0]!==n.COLOR_ATTACHMENT0){for(let mt=0,$t=xt.length;mt<$t;mt++)j[mt]=n.COLOR_ATTACHMENT0+mt;j.length=xt.length,et=!0}}else j[0]!==n.BACK&&(j[0]=n.BACK,et=!0);et&&n.drawBuffers(j)}function qt(z){return p!==z?(n.useProgram(z),p=z,!0):!1}const Kt={[ms]:n.FUNC_ADD,[s0]:n.FUNC_SUBTRACT,[o0]:n.FUNC_REVERSE_SUBTRACT};Kt[r0]=n.MIN,Kt[a0]=n.MAX;const Te={[l0]:n.ZERO,[h0]:n.ONE,[c0]:n.SRC_COLOR,[Ul]:n.SRC_ALPHA,[g0]:n.SRC_ALPHA_SATURATE,[p0]:n.DST_COLOR,[d0]:n.DST_ALPHA,[f0]:n.ONE_MINUS_SRC_COLOR,[zl]:n.ONE_MINUS_SRC_ALPHA,[m0]:n.ONE_MINUS_DST_COLOR,[u0]:n.ONE_MINUS_DST_ALPHA,[x0]:n.CONSTANT_COLOR,[v0]:n.ONE_MINUS_CONSTANT_COLOR,[_0]:n.CONSTANT_ALPHA,[M0]:n.ONE_MINUS_CONSTANT_ALPHA};function F(z,ut,j,et,xt,mt,$t,We,mi,Ee){if(z===Pn){x===!0&&(zt(n.BLEND),x=!1);return}if(x===!1&&(dt(n.BLEND),x=!0),z!==n0){if(z!==m||Ee!==y){if((g!==ms||v!==ms)&&(n.blendEquation(n.FUNC_ADD),g=ms,v=ms),Ee)switch(z){case $s:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qo:n.blendFunc(n.ONE,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}else switch(z){case $s:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case qo:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Lc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Dc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",z);break}M=null,S=null,D=null,R=null,w.set(0,0,0),C=0,m=z,y=Ee}return}xt=xt||ut,mt=mt||j,$t=$t||et,(ut!==g||xt!==v)&&(n.blendEquationSeparate(Kt[ut],Kt[xt]),g=ut,v=xt),(j!==M||et!==S||mt!==D||$t!==R)&&(n.blendFuncSeparate(Te[j],Te[et],Te[mt],Te[$t]),M=j,S=et,D=mt,R=$t),(We.equals(w)===!1||mi!==C)&&(n.blendColor(We.r,We.g,We.b,mi),w.copy(We),C=mi),m=z,y=!1}function ei(z,ut){z.side===Ei?zt(n.CULL_FACE):dt(n.CULL_FACE);let j=z.side===wi;ut&&(j=!j),ae(j),z.blending===$s&&z.transparent===!1?F(Pn):F(z.blending,z.blendEquation,z.blendSrc,z.blendDst,z.blendEquationAlpha,z.blendSrcAlpha,z.blendDstAlpha,z.blendColor,z.blendAlpha,z.premultipliedAlpha),r.setFunc(z.depthFunc),r.setTest(z.depthTest),r.setMask(z.depthWrite),o.setMask(z.colorWrite);const et=z.stencilWrite;l.setTest(et),et&&(l.setMask(z.stencilWriteMask),l.setFunc(z.stencilFunc,z.stencilRef,z.stencilFuncMask),l.setOp(z.stencilFail,z.stencilZFail,z.stencilZPass)),Le(z.polygonOffset,z.polygonOffsetFactor,z.polygonOffsetUnits),z.alphaToCoverage===!0?dt(n.SAMPLE_ALPHA_TO_COVERAGE):zt(n.SAMPLE_ALPHA_TO_COVERAGE)}function ae(z){b!==z&&(z?n.frontFace(n.CW):n.frontFace(n.CCW),b=z)}function le(z){z!==e0?(dt(n.CULL_FACE),z!==P&&(z===Cc?n.cullFace(n.BACK):z===i0?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):zt(n.CULL_FACE),P=z}function It(z){z!==O&&(Y&&n.lineWidth(z),O=z)}function Le(z,ut,j){z?(dt(n.POLYGON_OFFSET_FILL),(U!==ut||G!==j)&&(n.polygonOffset(ut,j),U=ut,G=j)):zt(n.POLYGON_OFFSET_FILL)}function Ft(z){z?dt(n.SCISSOR_TEST):zt(n.SCISSOR_TEST)}function L(z){z===void 0&&(z=n.TEXTURE0+$-1),ot!==z&&(n.activeTexture(z),ot=z)}function E(z,ut,j){j===void 0&&(ot===null?j=n.TEXTURE0+$-1:j=ot);let et=rt[j];et===void 0&&(et={type:void 0,texture:void 0},rt[j]=et),(et.type!==z||et.texture!==ut)&&(ot!==j&&(n.activeTexture(j),ot=j),n.bindTexture(z,ut||wt[z]),et.type=z,et.texture=ut)}function V(){const z=rt[ot];z!==void 0&&z.type!==void 0&&(n.bindTexture(z.type,null),z.type=void 0,z.texture=void 0)}function tt(){try{n.compressedTexImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function st(){try{n.compressedTexImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Q(){try{n.texSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Nt(){try{n.texSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function pt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function yt(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function ge(){try{n.texStorage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function lt(){try{n.texStorage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function bt(){try{n.texImage2D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Ht(){try{n.texImage3D.apply(n,arguments)}catch(z){console.error("THREE.WebGLState:",z)}}function Vt(z){_e.equals(z)===!1&&(n.scissor(z.x,z.y,z.z,z.w),_e.copy(z))}function St(z){J.equals(z)===!1&&(n.viewport(z.x,z.y,z.z,z.w),J.copy(z))}function de(z,ut){let j=h.get(ut);j===void 0&&(j=new WeakMap,h.set(ut,j));let et=j.get(z);et===void 0&&(et=n.getUniformBlockIndex(ut,z.name),j.set(z,et))}function ee(z,ut){const et=h.get(ut).get(z);a.get(ut)!==et&&(n.uniformBlockBinding(ut,et,z.__bindingPointIndex),a.set(ut,et))}function Pe(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},ot=null,rt={},c={},d=new WeakMap,u=[],p=null,x=!1,m=null,g=null,M=null,S=null,v=null,D=null,R=null,w=new Et(0,0,0),C=0,y=!1,b=null,P=null,O=null,U=null,G=null,_e.set(0,0,n.canvas.width,n.canvas.height),J.set(0,0,n.canvas.width,n.canvas.height),o.reset(),r.reset(),l.reset()}return{buffers:{color:o,depth:r,stencil:l},enable:dt,disable:zt,bindFramebuffer:Gt,drawBuffers:Bt,useProgram:qt,setBlending:F,setMaterial:ei,setFlipSided:ae,setCullFace:le,setLineWidth:It,setPolygonOffset:Le,setScissorTest:Ft,activeTexture:L,bindTexture:E,unbindTexture:V,compressedTexImage2D:tt,compressedTexImage3D:st,texImage2D:bt,texImage3D:Ht,updateUBOMapping:de,uniformBlockBinding:ee,texStorage2D:ge,texStorage3D:lt,texSubImage2D:Q,texSubImage3D:Nt,compressedTexSubImage2D:pt,compressedTexSubImage3D:yt,scissor:Vt,viewport:St,reset:Pe}}function wf(n,t,e,i){const s=Ox(i);switch(e){case Ld:return n*t;case Pd:return n*t;case Id:return n*t*2;case Nd:return n*t/s.components*s.byteLength;case Xh:return n*t/s.components*s.byteLength;case Od:return n*t*2/s.components*s.byteLength;case qh:return n*t*2/s.components*s.byteLength;case Dd:return n*t*3/s.components*s.byteLength;case nn:return n*t*4/s.components*s.byteLength;case Yh:return n*t*4/s.components*s.byteLength;case jr:case $r:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Zr:case Jr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case jl:case Zl:return Math.max(n,16)*Math.max(t,8)/4;case Kl:case $l:return Math.max(n,8)*Math.max(t,8)/2;case Jl:case Ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case th:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case eh:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ih:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case nh:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case sh:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case oh:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case rh:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case ah:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case lh:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case hh:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ch:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case fh:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case dh:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case uh:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ph:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case Qr:case mh:case gh:return Math.ceil(n/4)*Math.ceil(t/4)*16;case Ud:case xh:return Math.ceil(n/4)*Math.ceil(t/4)*8;case vh:case _h:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ox(n){switch(n){case zn:case Ad:return{byteLength:1,components:1};case Yo:case Rd:case pn:return{byteLength:2,components:1};case Vh:case Wh:return{byteLength:2,components:4};case bs:case Gh:case Ln:return{byteLength:4,components:1};case Cd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Ux(n,t,e,i,s,o,r){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,a=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new kt,f=new WeakMap;let c;const d=new WeakMap;let u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(L,E){return u?new OffscreenCanvas(L,E):ha("canvas")}function x(L,E,V){let tt=1;const st=Ft(L);if((st.width>V||st.height>V)&&(tt=V/Math.max(st.width,st.height)),tt<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const Q=Math.floor(tt*st.width),Nt=Math.floor(tt*st.height);c===void 0&&(c=p(Q,Nt));const pt=E?p(Q,Nt):c;return pt.width=Q,pt.height=Nt,pt.getContext("2d").drawImage(L,0,0,Q,Nt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+st.width+"x"+st.height+") to ("+Q+"x"+Nt+")."),pt}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+st.width+"x"+st.height+")."),L;return L}function m(L){return L.generateMipmaps}function g(L){n.generateMipmap(L)}function M(L){return L.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?n.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function S(L,E,V,tt,st=!1){if(L!==null){if(n[L]!==void 0)return n[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let Q=E;if(E===n.RED&&(V===n.FLOAT&&(Q=n.R32F),V===n.HALF_FLOAT&&(Q=n.R16F),V===n.UNSIGNED_BYTE&&(Q=n.R8)),E===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.R8UI),V===n.UNSIGNED_SHORT&&(Q=n.R16UI),V===n.UNSIGNED_INT&&(Q=n.R32UI),V===n.BYTE&&(Q=n.R8I),V===n.SHORT&&(Q=n.R16I),V===n.INT&&(Q=n.R32I)),E===n.RG&&(V===n.FLOAT&&(Q=n.RG32F),V===n.HALF_FLOAT&&(Q=n.RG16F),V===n.UNSIGNED_BYTE&&(Q=n.RG8)),E===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RG8UI),V===n.UNSIGNED_SHORT&&(Q=n.RG16UI),V===n.UNSIGNED_INT&&(Q=n.RG32UI),V===n.BYTE&&(Q=n.RG8I),V===n.SHORT&&(Q=n.RG16I),V===n.INT&&(Q=n.RG32I)),E===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGB8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGB16UI),V===n.UNSIGNED_INT&&(Q=n.RGB32UI),V===n.BYTE&&(Q=n.RGB8I),V===n.SHORT&&(Q=n.RGB16I),V===n.INT&&(Q=n.RGB32I)),E===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(Q=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(Q=n.RGBA16UI),V===n.UNSIGNED_INT&&(Q=n.RGBA32UI),V===n.BYTE&&(Q=n.RGBA8I),V===n.SHORT&&(Q=n.RGBA16I),V===n.INT&&(Q=n.RGBA32I)),E===n.RGB&&V===n.UNSIGNED_INT_5_9_9_9_REV&&(Q=n.RGB9_E5),E===n.RGBA){const Nt=st?La:pe.getTransfer(tt);V===n.FLOAT&&(Q=n.RGBA32F),V===n.HALF_FLOAT&&(Q=n.RGBA16F),V===n.UNSIGNED_BYTE&&(Q=Nt===we?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT_4_4_4_4&&(Q=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(Q=n.RGB5_A1)}return(Q===n.R16F||Q===n.R32F||Q===n.RG16F||Q===n.RG32F||Q===n.RGBA16F||Q===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Q}function v(L,E){let V;return L?E===null||E===bs||E===so?V=n.DEPTH24_STENCIL8:E===Ln?V=n.DEPTH32F_STENCIL8:E===Yo&&(V=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===bs||E===so?V=n.DEPTH_COMPONENT24:E===Ln?V=n.DEPTH_COMPONENT32F:E===Yo&&(V=n.DEPTH_COMPONENT16),V}function D(L,E){return m(L)===!0||L.isFramebufferTexture&&L.minFilter!==xe&&L.minFilter!==Yi?Math.log2(Math.max(E.width,E.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?E.mipmaps.length:1}function R(L){const E=L.target;E.removeEventListener("dispose",R),C(E),E.isVideoTexture&&f.delete(E)}function w(L){const E=L.target;E.removeEventListener("dispose",w),b(E)}function C(L){const E=i.get(L);if(E.__webglInit===void 0)return;const V=L.source,tt=d.get(V);if(tt){const st=tt[E.__cacheKey];st.usedTimes--,st.usedTimes===0&&y(L),Object.keys(tt).length===0&&d.delete(V)}i.remove(L)}function y(L){const E=i.get(L);n.deleteTexture(E.__webglTexture);const V=L.source,tt=d.get(V);delete tt[E.__cacheKey],r.memory.textures--}function b(L){const E=i.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),i.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let tt=0;tt<6;tt++){if(Array.isArray(E.__webglFramebuffer[tt]))for(let st=0;st<E.__webglFramebuffer[tt].length;st++)n.deleteFramebuffer(E.__webglFramebuffer[tt][st]);else n.deleteFramebuffer(E.__webglFramebuffer[tt]);E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer[tt])}else{if(Array.isArray(E.__webglFramebuffer))for(let tt=0;tt<E.__webglFramebuffer.length;tt++)n.deleteFramebuffer(E.__webglFramebuffer[tt]);else n.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&n.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&n.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let tt=0;tt<E.__webglColorRenderbuffer.length;tt++)E.__webglColorRenderbuffer[tt]&&n.deleteRenderbuffer(E.__webglColorRenderbuffer[tt]);E.__webglDepthRenderbuffer&&n.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const V=L.textures;for(let tt=0,st=V.length;tt<st;tt++){const Q=i.get(V[tt]);Q.__webglTexture&&(n.deleteTexture(Q.__webglTexture),r.memory.textures--),i.remove(V[tt])}i.remove(L)}let P=0;function O(){P=0}function U(){const L=P;return L>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+s.maxTextures),P+=1,L}function G(L){const E=[];return E.push(L.wrapS),E.push(L.wrapT),E.push(L.wrapR||0),E.push(L.magFilter),E.push(L.minFilter),E.push(L.anisotropy),E.push(L.internalFormat),E.push(L.format),E.push(L.type),E.push(L.generateMipmaps),E.push(L.premultiplyAlpha),E.push(L.flipY),E.push(L.unpackAlignment),E.push(L.colorSpace),E.join()}function $(L,E){const V=i.get(L);if(L.isVideoTexture&&It(L),L.isRenderTargetTexture===!1&&L.version>0&&V.__version!==L.version){const tt=L.image;if(tt===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(tt.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{J(V,L,E);return}}e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+E)}function Y(L,E){const V=i.get(L);if(L.version>0&&V.__version!==L.version){J(V,L,E);return}e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+E)}function K(L,E){const V=i.get(L);if(L.version>0&&V.__version!==L.version){J(V,L,E);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+E)}function W(L,E){const V=i.get(L);if(L.version>0&&V.__version!==L.version){at(V,L,E);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+E)}const ot={[aa]:n.REPEAT,[vs]:n.CLAMP_TO_EDGE,[Yl]:n.MIRRORED_REPEAT},rt={[xe]:n.NEAREST,[E0]:n.NEAREST_MIPMAP_NEAREST,[hr]:n.NEAREST_MIPMAP_LINEAR,[Yi]:n.LINEAR,[Fa]:n.LINEAR_MIPMAP_NEAREST,[Cn]:n.LINEAR_MIPMAP_LINEAR},_t={[R0]:n.NEVER,[N0]:n.ALWAYS,[C0]:n.LESS,[zd]:n.LEQUAL,[L0]:n.EQUAL,[I0]:n.GEQUAL,[D0]:n.GREATER,[P0]:n.NOTEQUAL};function jt(L,E){if(E.type===Ln&&t.has("OES_texture_float_linear")===!1&&(E.magFilter===Yi||E.magFilter===Fa||E.magFilter===hr||E.magFilter===Cn||E.minFilter===Yi||E.minFilter===Fa||E.minFilter===hr||E.minFilter===Cn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(L,n.TEXTURE_WRAP_S,ot[E.wrapS]),n.texParameteri(L,n.TEXTURE_WRAP_T,ot[E.wrapT]),(L===n.TEXTURE_3D||L===n.TEXTURE_2D_ARRAY)&&n.texParameteri(L,n.TEXTURE_WRAP_R,ot[E.wrapR]),n.texParameteri(L,n.TEXTURE_MAG_FILTER,rt[E.magFilter]),n.texParameteri(L,n.TEXTURE_MIN_FILTER,rt[E.minFilter]),E.compareFunction&&(n.texParameteri(L,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(L,n.TEXTURE_COMPARE_FUNC,_t[E.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===xe||E.minFilter!==hr&&E.minFilter!==Cn||E.type===Ln&&t.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||i.get(E).__currentAnisotropy){const V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(L,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy}}}function _e(L,E){let V=!1;L.__webglInit===void 0&&(L.__webglInit=!0,E.addEventListener("dispose",R));const tt=E.source;let st=d.get(tt);st===void 0&&(st={},d.set(tt,st));const Q=G(E);if(Q!==L.__cacheKey){st[Q]===void 0&&(st[Q]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,V=!0),st[Q].usedTimes++;const Nt=st[L.__cacheKey];Nt!==void 0&&(st[L.__cacheKey].usedTimes--,Nt.usedTimes===0&&y(E)),L.__cacheKey=Q,L.__webglTexture=st[Q].texture}return V}function J(L,E,V){let tt=n.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(tt=n.TEXTURE_2D_ARRAY),E.isData3DTexture&&(tt=n.TEXTURE_3D);const st=_e(L,E),Q=E.source;e.bindTexture(tt,L.__webglTexture,n.TEXTURE0+V);const Nt=i.get(Q);if(Q.version!==Nt.__version||st===!0){e.activeTexture(n.TEXTURE0+V);const pt=pe.getPrimaries(pe.workingColorSpace),yt=E.colorSpace===$n?null:pe.getPrimaries(E.colorSpace),ge=E.colorSpace===$n||pt===yt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);let lt=x(E.image,!1,s.maxTextureSize);lt=Le(E,lt);const bt=o.convert(E.format,E.colorSpace),Ht=o.convert(E.type);let Vt=S(E.internalFormat,bt,Ht,E.colorSpace,E.isVideoTexture);jt(tt,E);let St;const de=E.mipmaps,ee=E.isVideoTexture!==!0,Pe=Nt.__version===void 0||st===!0,z=Q.dataReady,ut=D(E,lt);if(E.isDepthTexture)Vt=v(E.format===oo,E.type),Pe&&(ee?e.texStorage2D(n.TEXTURE_2D,1,Vt,lt.width,lt.height):e.texImage2D(n.TEXTURE_2D,0,Vt,lt.width,lt.height,0,bt,Ht,null));else if(E.isDataTexture)if(de.length>0){ee&&Pe&&e.texStorage2D(n.TEXTURE_2D,ut,Vt,de[0].width,de[0].height);for(let j=0,et=de.length;j<et;j++)St=de[j],ee?z&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,St.width,St.height,bt,Ht,St.data):e.texImage2D(n.TEXTURE_2D,j,Vt,St.width,St.height,0,bt,Ht,St.data);E.generateMipmaps=!1}else ee?(Pe&&e.texStorage2D(n.TEXTURE_2D,ut,Vt,lt.width,lt.height),z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt.width,lt.height,bt,Ht,lt.data)):e.texImage2D(n.TEXTURE_2D,0,Vt,lt.width,lt.height,0,bt,Ht,lt.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){ee&&Pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Vt,de[0].width,de[0].height,lt.depth);for(let j=0,et=de.length;j<et;j++)if(St=de[j],E.format!==nn)if(bt!==null)if(ee){if(z)if(E.layerUpdates.size>0){const xt=wf(St.width,St.height,E.format,E.type);for(const mt of E.layerUpdates){const $t=St.data.subarray(mt*xt/St.data.BYTES_PER_ELEMENT,(mt+1)*xt/St.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,mt,St.width,St.height,1,bt,$t)}E.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,St.width,St.height,lt.depth,bt,St.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,j,Vt,St.width,St.height,lt.depth,0,St.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ee?z&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,j,0,0,0,St.width,St.height,lt.depth,bt,Ht,St.data):e.texImage3D(n.TEXTURE_2D_ARRAY,j,Vt,St.width,St.height,lt.depth,0,bt,Ht,St.data)}else{ee&&Pe&&e.texStorage2D(n.TEXTURE_2D,ut,Vt,de[0].width,de[0].height);for(let j=0,et=de.length;j<et;j++)St=de[j],E.format!==nn?bt!==null?ee?z&&e.compressedTexSubImage2D(n.TEXTURE_2D,j,0,0,St.width,St.height,bt,St.data):e.compressedTexImage2D(n.TEXTURE_2D,j,Vt,St.width,St.height,0,St.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ee?z&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,St.width,St.height,bt,Ht,St.data):e.texImage2D(n.TEXTURE_2D,j,Vt,St.width,St.height,0,bt,Ht,St.data)}else if(E.isDataArrayTexture)if(ee){if(Pe&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Vt,lt.width,lt.height,lt.depth),z)if(E.layerUpdates.size>0){const j=wf(lt.width,lt.height,E.format,E.type);for(const et of E.layerUpdates){const xt=lt.data.subarray(et*j/lt.data.BYTES_PER_ELEMENT,(et+1)*j/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,et,lt.width,lt.height,1,bt,Ht,xt)}E.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,bt,Ht,lt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Vt,lt.width,lt.height,lt.depth,0,bt,Ht,lt.data);else if(E.isData3DTexture)ee?(Pe&&e.texStorage3D(n.TEXTURE_3D,ut,Vt,lt.width,lt.height,lt.depth),z&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,bt,Ht,lt.data)):e.texImage3D(n.TEXTURE_3D,0,Vt,lt.width,lt.height,lt.depth,0,bt,Ht,lt.data);else if(E.isFramebufferTexture){if(Pe)if(ee)e.texStorage2D(n.TEXTURE_2D,ut,Vt,lt.width,lt.height);else{let j=lt.width,et=lt.height;for(let xt=0;xt<ut;xt++)e.texImage2D(n.TEXTURE_2D,xt,Vt,j,et,0,bt,Ht,null),j>>=1,et>>=1}}else if(de.length>0){if(ee&&Pe){const j=Ft(de[0]);e.texStorage2D(n.TEXTURE_2D,ut,Vt,j.width,j.height)}for(let j=0,et=de.length;j<et;j++)St=de[j],ee?z&&e.texSubImage2D(n.TEXTURE_2D,j,0,0,bt,Ht,St):e.texImage2D(n.TEXTURE_2D,j,Vt,bt,Ht,St);E.generateMipmaps=!1}else if(ee){if(Pe){const j=Ft(lt);e.texStorage2D(n.TEXTURE_2D,ut,Vt,j.width,j.height)}z&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,bt,Ht,lt)}else e.texImage2D(n.TEXTURE_2D,0,Vt,bt,Ht,lt);m(E)&&g(tt),Nt.__version=Q.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function at(L,E,V){if(E.image.length!==6)return;const tt=_e(L,E),st=E.source;e.bindTexture(n.TEXTURE_CUBE_MAP,L.__webglTexture,n.TEXTURE0+V);const Q=i.get(st);if(st.version!==Q.__version||tt===!0){e.activeTexture(n.TEXTURE0+V);const Nt=pe.getPrimaries(pe.workingColorSpace),pt=E.colorSpace===$n?null:pe.getPrimaries(E.colorSpace),yt=E.colorSpace===$n||Nt===pt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,E.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,E.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,yt);const ge=E.isCompressedTexture||E.image[0].isCompressedTexture,lt=E.image[0]&&E.image[0].isDataTexture,bt=[];for(let et=0;et<6;et++)!ge&&!lt?bt[et]=x(E.image[et],!0,s.maxCubemapSize):bt[et]=lt?E.image[et].image:E.image[et],bt[et]=Le(E,bt[et]);const Ht=bt[0],Vt=o.convert(E.format,E.colorSpace),St=o.convert(E.type),de=S(E.internalFormat,Vt,St,E.colorSpace),ee=E.isVideoTexture!==!0,Pe=Q.__version===void 0||tt===!0,z=st.dataReady;let ut=D(E,Ht);jt(n.TEXTURE_CUBE_MAP,E);let j;if(ge){ee&&Pe&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,de,Ht.width,Ht.height);for(let et=0;et<6;et++){j=bt[et].mipmaps;for(let xt=0;xt<j.length;xt++){const mt=j[xt];E.format!==nn?Vt!==null?ee?z&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,mt.width,mt.height,Vt,mt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,de,mt.width,mt.height,0,mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):ee?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,0,0,mt.width,mt.height,Vt,St,mt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt,de,mt.width,mt.height,0,Vt,St,mt.data)}}}else{if(j=E.mipmaps,ee&&Pe){j.length>0&&ut++;const et=Ft(bt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,de,et.width,et.height)}for(let et=0;et<6;et++)if(lt){ee?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,bt[et].width,bt[et].height,Vt,St,bt[et].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,de,bt[et].width,bt[et].height,0,Vt,St,bt[et].data);for(let xt=0;xt<j.length;xt++){const $t=j[xt].image[et].image;ee?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,$t.width,$t.height,Vt,St,$t.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,de,$t.width,$t.height,0,Vt,St,$t.data)}}else{ee?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,0,0,Vt,St,bt[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,0,de,Vt,St,bt[et]);for(let xt=0;xt<j.length;xt++){const mt=j[xt];ee?z&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,0,0,Vt,St,mt.image[et]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+et,xt+1,de,Vt,St,mt.image[et])}}}m(E)&&g(n.TEXTURE_CUBE_MAP),Q.__version=st.version,E.onUpdate&&E.onUpdate(E)}L.__version=E.version}function wt(L,E,V,tt,st,Q){const Nt=o.convert(V.format,V.colorSpace),pt=o.convert(V.type),yt=S(V.internalFormat,Nt,pt,V.colorSpace),ge=i.get(E),lt=i.get(V);if(lt.__renderTarget=E,!ge.__hasExternalTextures){const bt=Math.max(1,E.width>>Q),Ht=Math.max(1,E.height>>Q);st===n.TEXTURE_3D||st===n.TEXTURE_2D_ARRAY?e.texImage3D(st,Q,yt,bt,Ht,E.depth,0,Nt,pt,null):e.texImage2D(st,Q,yt,bt,Ht,0,Nt,pt,null)}e.bindFramebuffer(n.FRAMEBUFFER,L),le(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,tt,st,lt.__webglTexture,0,ae(E)):(st===n.TEXTURE_2D||st>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&st<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,tt,st,lt.__webglTexture,Q),e.bindFramebuffer(n.FRAMEBUFFER,null)}function dt(L,E,V){if(n.bindRenderbuffer(n.RENDERBUFFER,L),E.depthBuffer){const tt=E.depthTexture,st=tt&&tt.isDepthTexture?tt.type:null,Q=v(E.stencilBuffer,st),Nt=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,pt=ae(E);le(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,pt,Q,E.width,E.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,pt,Q,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,Q,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Nt,n.RENDERBUFFER,L)}else{const tt=E.textures;for(let st=0;st<tt.length;st++){const Q=tt[st],Nt=o.convert(Q.format,Q.colorSpace),pt=o.convert(Q.type),yt=S(Q.internalFormat,Nt,pt,Q.colorSpace),ge=ae(E);V&&le(E)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ge,yt,E.width,E.height):le(E)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ge,yt,E.width,E.height):n.renderbufferStorage(n.RENDERBUFFER,yt,E.width,E.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function zt(L,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,L),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const tt=i.get(E.depthTexture);tt.__renderTarget=E,(!tt.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),$(E.depthTexture,0);const st=tt.__webglTexture,Q=ae(E);if(E.depthTexture.format===Zs)le(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,st,0);else if(E.depthTexture.format===oo)le(E)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0,Q):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,st,0);else throw new Error("Unknown depthTexture format")}function Gt(L){const E=i.get(L),V=L.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==L.depthTexture){const tt=L.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),tt){const st=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,tt.removeEventListener("dispose",st)};tt.addEventListener("dispose",st),E.__depthDisposeCallback=st}E.__boundDepthTexture=tt}if(L.depthTexture&&!E.__autoAllocateDepthBuffer){if(V)throw new Error("target.depthTexture not supported in Cube render targets");zt(E.__webglFramebuffer,L)}else if(V){E.__webglDepthbuffer=[];for(let tt=0;tt<6;tt++)if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer[tt]),E.__webglDepthbuffer[tt]===void 0)E.__webglDepthbuffer[tt]=n.createRenderbuffer(),dt(E.__webglDepthbuffer[tt],L,!1);else{const st=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Q=E.__webglDepthbuffer[tt];n.bindRenderbuffer(n.RENDERBUFFER,Q),n.framebufferRenderbuffer(n.FRAMEBUFFER,st,n.RENDERBUFFER,Q)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=n.createRenderbuffer(),dt(E.__webglDepthbuffer,L,!1);else{const tt=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,st=E.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,st),n.framebufferRenderbuffer(n.FRAMEBUFFER,tt,n.RENDERBUFFER,st)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(L,E,V){const tt=i.get(L);E!==void 0&&wt(tt.__webglFramebuffer,L,L.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&Gt(L)}function qt(L){const E=L.texture,V=i.get(L),tt=i.get(E);L.addEventListener("dispose",w);const st=L.textures,Q=L.isWebGLCubeRenderTarget===!0,Nt=st.length>1;if(Nt||(tt.__webglTexture===void 0&&(tt.__webglTexture=n.createTexture()),tt.__version=E.version,r.memory.textures++),Q){V.__webglFramebuffer=[];for(let pt=0;pt<6;pt++)if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer[pt]=[];for(let yt=0;yt<E.mipmaps.length;yt++)V.__webglFramebuffer[pt][yt]=n.createFramebuffer()}else V.__webglFramebuffer[pt]=n.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){V.__webglFramebuffer=[];for(let pt=0;pt<E.mipmaps.length;pt++)V.__webglFramebuffer[pt]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Nt)for(let pt=0,yt=st.length;pt<yt;pt++){const ge=i.get(st[pt]);ge.__webglTexture===void 0&&(ge.__webglTexture=n.createTexture(),r.memory.textures++)}if(L.samples>0&&le(L)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let pt=0;pt<st.length;pt++){const yt=st[pt];V.__webglColorRenderbuffer[pt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[pt]);const ge=o.convert(yt.format,yt.colorSpace),lt=o.convert(yt.type),bt=S(yt.internalFormat,ge,lt,yt.colorSpace,L.isXRRenderTarget===!0),Ht=ae(L);n.renderbufferStorageMultisample(n.RENDERBUFFER,Ht,bt,L.width,L.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+pt,n.RENDERBUFFER,V.__webglColorRenderbuffer[pt])}n.bindRenderbuffer(n.RENDERBUFFER,null),L.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),dt(V.__webglDepthRenderbuffer,L,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Q){e.bindTexture(n.TEXTURE_CUBE_MAP,tt.__webglTexture),jt(n.TEXTURE_CUBE_MAP,E);for(let pt=0;pt<6;pt++)if(E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)wt(V.__webglFramebuffer[pt][yt],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,yt);else wt(V.__webglFramebuffer[pt],L,E,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+pt,0);m(E)&&g(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Nt){for(let pt=0,yt=st.length;pt<yt;pt++){const ge=st[pt],lt=i.get(ge);e.bindTexture(n.TEXTURE_2D,lt.__webglTexture),jt(n.TEXTURE_2D,ge),wt(V.__webglFramebuffer,L,ge,n.COLOR_ATTACHMENT0+pt,n.TEXTURE_2D,0),m(ge)&&g(n.TEXTURE_2D)}e.unbindTexture()}else{let pt=n.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(pt=L.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(pt,tt.__webglTexture),jt(pt,E),E.mipmaps&&E.mipmaps.length>0)for(let yt=0;yt<E.mipmaps.length;yt++)wt(V.__webglFramebuffer[yt],L,E,n.COLOR_ATTACHMENT0,pt,yt);else wt(V.__webglFramebuffer,L,E,n.COLOR_ATTACHMENT0,pt,0);m(E)&&g(pt),e.unbindTexture()}L.depthBuffer&&Gt(L)}function Kt(L){const E=L.textures;for(let V=0,tt=E.length;V<tt;V++){const st=E[V];if(m(st)){const Q=M(L),Nt=i.get(st).__webglTexture;e.bindTexture(Q,Nt),g(Q),e.unbindTexture()}}}const Te=[],F=[];function ei(L){if(L.samples>0){if(le(L)===!1){const E=L.textures,V=L.width,tt=L.height;let st=n.COLOR_BUFFER_BIT;const Q=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Nt=i.get(L),pt=E.length>1;if(pt)for(let yt=0;yt<E.length;yt++)e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglFramebuffer);for(let yt=0;yt<E.length;yt++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(st|=n.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(st|=n.STENCIL_BUFFER_BIT)),pt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[yt]);const ge=i.get(E[yt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,ge,0)}n.blitFramebuffer(0,0,V,tt,0,0,V,tt,st,n.NEAREST),a===!0&&(Te.length=0,F.length=0,Te.push(n.COLOR_ATTACHMENT0+yt),L.depthBuffer&&L.resolveDepthBuffer===!1&&(Te.push(Q),F.push(Q),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,F)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Te))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),pt)for(let yt=0;yt<E.length;yt++){e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.RENDERBUFFER,Nt.__webglColorRenderbuffer[yt]);const ge=i.get(E[yt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Nt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+yt,n.TEXTURE_2D,ge,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Nt.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&a){const E=L.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[E])}}}function ae(L){return Math.min(s.maxSamples,L.samples)}function le(L){const E=i.get(L);return L.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function It(L){const E=r.render.frame;f.get(L)!==E&&(f.set(L,E),L.update())}function Le(L,E){const V=L.colorSpace,tt=L.format,st=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||V!==fo&&V!==$n&&(pe.getTransfer(V)===we?(tt!==nn||st!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",V)),E}function Ft(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(h.width=L.naturalWidth||L.width,h.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(h.width=L.displayWidth,h.height=L.displayHeight):(h.width=L.width,h.height=L.height),h}this.allocateTextureUnit=U,this.resetTextureUnits=O,this.setTexture2D=$,this.setTexture2DArray=Y,this.setTexture3D=K,this.setTextureCube=W,this.rebindTextures=Bt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=ei,this.setupDepthRenderbuffer=Gt,this.setupFrameBufferTexture=wt,this.useMultisampledRTT=le}function zx(n,t){function e(i,s=$n){let o;const r=pe.getTransfer(s);if(i===zn)return n.UNSIGNED_BYTE;if(i===Vh)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Wh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Cd)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Ad)return n.BYTE;if(i===Rd)return n.SHORT;if(i===Yo)return n.UNSIGNED_SHORT;if(i===Gh)return n.INT;if(i===bs)return n.UNSIGNED_INT;if(i===Ln)return n.FLOAT;if(i===pn)return n.HALF_FLOAT;if(i===Ld)return n.ALPHA;if(i===Dd)return n.RGB;if(i===nn)return n.RGBA;if(i===Pd)return n.LUMINANCE;if(i===Id)return n.LUMINANCE_ALPHA;if(i===Zs)return n.DEPTH_COMPONENT;if(i===oo)return n.DEPTH_STENCIL;if(i===Nd)return n.RED;if(i===Xh)return n.RED_INTEGER;if(i===Od)return n.RG;if(i===qh)return n.RG_INTEGER;if(i===Yh)return n.RGBA_INTEGER;if(i===jr||i===$r||i===Zr||i===Jr)if(r===we)if(o=t.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(i===jr)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===$r)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Zr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Jr)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=t.get("WEBGL_compressed_texture_s3tc"),o!==null){if(i===jr)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===$r)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Zr)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Jr)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Kl||i===jl||i===$l||i===Zl)if(o=t.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(i===Kl)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===jl)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===$l)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zl)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Jl||i===Ql||i===th)if(o=t.get("WEBGL_compressed_texture_etc"),o!==null){if(i===Jl||i===Ql)return r===we?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(i===th)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===eh||i===ih||i===nh||i===sh||i===oh||i===rh||i===ah||i===lh||i===hh||i===ch||i===fh||i===dh||i===uh||i===ph)if(o=t.get("WEBGL_compressed_texture_astc"),o!==null){if(i===eh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===ih)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===nh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===sh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===oh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===rh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ah)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===lh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===hh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ch)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===fh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===dh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===uh)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ph)return r===we?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===Qr||i===mh||i===gh)if(o=t.get("EXT_texture_compression_bptc"),o!==null){if(i===Qr)return r===we?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===mh)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===gh)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Ud||i===xh||i===vh||i===_h)if(o=t.get("EXT_texture_compression_rgtc"),o!==null){if(i===Qr)return o.COMPRESSED_RED_RGTC1_EXT;if(i===xh)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===vh)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_h)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===so?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Fx extends Fi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class Se extends Je{constructor(){super(),this.isGroup=!0,this.type="Group"}}const kx={type:"move"};class dl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Se,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Se,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Se,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,o=null,r=null;const l=this._targetRay,a=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){r=!0;for(const x of t.hand.values()){const m=e.getJointPose(x,i),g=this._getHandJoint(h,x);m!==null&&(g.matrix.fromArray(m.transform.matrix),g.matrix.decompose(g.position,g.rotation,g.scale),g.matrixWorldNeedsUpdate=!0,g.jointRadius=m.radius),g.visible=m!==null}const f=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],d=f.position.distanceTo(c.position),u=.02,p=.005;h.inputState.pinching&&d>u+p?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&d<=u-p&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else a!==null&&t.gripSpace&&(o=e.getPose(t.gripSpace,i),o!==null&&(a.matrix.fromArray(o.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,o.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(o.linearVelocity)):a.hasLinearVelocity=!1,o.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(o.angularVelocity)):a.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&o!==null&&(s=o),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent(kx)))}return l!==null&&(l.visible=s!==null),a!==null&&(a.visible=o!==null),h!==null&&(h.visible=r!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new Se;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const Bx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Hx=`
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

}`;class Gx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Ti,o=t.properties.get(s);o.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new Mi({vertexShader:Bx,fragmentShader:Hx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Mt(new On(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Vx extends uo{constructor(t,e){super();const i=this;let s=null,o=1,r=null,l="local-floor",a=1,h=null,f=null,c=null,d=null,u=null,p=null;const x=new Gx,m=e.getContextAttributes();let g=null,M=null;const S=[],v=[],D=new kt;let R=null;const w=new Fi;w.viewport=new Ce;const C=new Fi;C.viewport=new Ce;const y=[w,C],b=new Fx;let P=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let at=S[J];return at===void 0&&(at=new dl,S[J]=at),at.getTargetRaySpace()},this.getControllerGrip=function(J){let at=S[J];return at===void 0&&(at=new dl,S[J]=at),at.getGripSpace()},this.getHand=function(J){let at=S[J];return at===void 0&&(at=new dl,S[J]=at),at.getHandSpace()};function U(J){const at=v.indexOf(J.inputSource);if(at===-1)return;const wt=S[at];wt!==void 0&&(wt.update(J.inputSource,J.frame,h||r),wt.dispatchEvent({type:J.type,data:J.inputSource}))}function G(){s.removeEventListener("select",U),s.removeEventListener("selectstart",U),s.removeEventListener("selectend",U),s.removeEventListener("squeeze",U),s.removeEventListener("squeezestart",U),s.removeEventListener("squeezeend",U),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",$);for(let J=0;J<S.length;J++){const at=v[J];at!==null&&(v[J]=null,S[J].disconnect(at))}P=null,O=null,x.reset(),t.setRenderTarget(g),u=null,d=null,c=null,s=null,M=null,_e.stop(),i.isPresenting=!1,t.setPixelRatio(R),t.setSize(D.width,D.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){o=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){l=J,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||r},this.setReferenceSpace=function(J){h=J},this.getBaseLayer=function(){return d!==null?d:u},this.getBinding=function(){return c},this.getFrame=function(){return p},this.getSession=function(){return s},this.setSession=async function(J){if(s=J,s!==null){if(g=t.getRenderTarget(),s.addEventListener("select",U),s.addEventListener("selectstart",U),s.addEventListener("selectend",U),s.addEventListener("squeeze",U),s.addEventListener("squeezestart",U),s.addEventListener("squeezeend",U),s.addEventListener("end",G),s.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await e.makeXRCompatible(),R=t.getPixelRatio(),t.getSize(D),s.renderState.layers===void 0){const at={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:o};u=new XRWebGLLayer(s,e,at),s.updateRenderState({baseLayer:u}),t.setPixelRatio(1),t.setSize(u.framebufferWidth,u.framebufferHeight,!1),M=new Ki(u.framebufferWidth,u.framebufferHeight,{format:nn,type:zn,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil})}else{let at=null,wt=null,dt=null;m.depth&&(dt=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,at=m.stencil?oo:Zs,wt=m.stencil?so:bs);const zt={colorFormat:e.RGBA8,depthFormat:dt,scaleFactor:o};c=new XRWebGLBinding(s,e),d=c.createProjectionLayer(zt),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),M=new Ki(d.textureWidth,d.textureHeight,{format:nn,type:zn,depthTexture:new jd(d.textureWidth,d.textureHeight,wt,void 0,void 0,void 0,void 0,void 0,void 0,at),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(a),h=null,r=await s.requestReferenceSpace(l),_e.setContext(s),_e.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(J){for(let at=0;at<J.removed.length;at++){const wt=J.removed[at],dt=v.indexOf(wt);dt>=0&&(v[dt]=null,S[dt].disconnect(wt))}for(let at=0;at<J.added.length;at++){const wt=J.added[at];let dt=v.indexOf(wt);if(dt===-1){for(let Gt=0;Gt<S.length;Gt++)if(Gt>=v.length){v.push(wt),dt=Gt;break}else if(v[Gt]===null){v[Gt]=wt,dt=Gt;break}if(dt===-1)break}const zt=S[dt];zt&&zt.connect(wt)}}const Y=new I,K=new I;function W(J,at,wt){Y.setFromMatrixPosition(at.matrixWorld),K.setFromMatrixPosition(wt.matrixWorld);const dt=Y.distanceTo(K),zt=at.projectionMatrix.elements,Gt=wt.projectionMatrix.elements,Bt=zt[14]/(zt[10]-1),qt=zt[14]/(zt[10]+1),Kt=(zt[9]+1)/zt[5],Te=(zt[9]-1)/zt[5],F=(zt[8]-1)/zt[0],ei=(Gt[8]+1)/Gt[0],ae=Bt*F,le=Bt*ei,It=dt/(-F+ei),Le=It*-F;if(at.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(Le),J.translateZ(It),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),zt[10]===-1)J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse);else{const Ft=Bt+It,L=qt+It,E=ae-Le,V=le+(dt-Le),tt=Kt*qt/L*Ft,st=Te*qt/L*Ft;J.projectionMatrix.makePerspective(E,V,tt,st,Ft,L),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function ot(J,at){at===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(at.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(s===null)return;let at=J.near,wt=J.far;x.texture!==null&&(x.depthNear>0&&(at=x.depthNear),x.depthFar>0&&(wt=x.depthFar)),b.near=C.near=w.near=at,b.far=C.far=w.far=wt,(P!==b.near||O!==b.far)&&(s.updateRenderState({depthNear:b.near,depthFar:b.far}),P=b.near,O=b.far),w.layers.mask=J.layers.mask|2,C.layers.mask=J.layers.mask|4,b.layers.mask=w.layers.mask|C.layers.mask;const dt=J.parent,zt=b.cameras;ot(b,dt);for(let Gt=0;Gt<zt.length;Gt++)ot(zt[Gt],dt);zt.length===2?W(b,w,C):b.projectionMatrix.copy(w.projectionMatrix),rt(J,b,dt)};function rt(J,at,wt){wt===null?J.matrix.copy(at.matrixWorld):(J.matrix.copy(wt.matrixWorld),J.matrix.invert(),J.matrix.multiply(at.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(at.projectionMatrix),J.projectionMatrixInverse.copy(at.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=yh*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&u===null))return a},this.setFoveation=function(J){a=J,d!==null&&(d.fixedFoveation=J),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=J)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(b)};let _t=null;function jt(J,at){if(f=at.getViewerPose(h||r),p=at,f!==null){const wt=f.views;u!==null&&(t.setRenderTargetFramebuffer(M,u.framebuffer),t.setRenderTarget(M));let dt=!1;wt.length!==b.cameras.length&&(b.cameras.length=0,dt=!0);for(let Gt=0;Gt<wt.length;Gt++){const Bt=wt[Gt];let qt=null;if(u!==null)qt=u.getViewport(Bt);else{const Te=c.getViewSubImage(d,Bt);qt=Te.viewport,Gt===0&&(t.setRenderTargetTextures(M,Te.colorTexture,d.ignoreDepthValues?void 0:Te.depthStencilTexture),t.setRenderTarget(M))}let Kt=y[Gt];Kt===void 0&&(Kt=new Fi,Kt.layers.enable(Gt),Kt.viewport=new Ce,y[Gt]=Kt),Kt.matrix.fromArray(Bt.transform.matrix),Kt.matrix.decompose(Kt.position,Kt.quaternion,Kt.scale),Kt.projectionMatrix.fromArray(Bt.projectionMatrix),Kt.projectionMatrixInverse.copy(Kt.projectionMatrix).invert(),Kt.viewport.set(qt.x,qt.y,qt.width,qt.height),Gt===0&&(b.matrix.copy(Kt.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),dt===!0&&b.cameras.push(Kt)}const zt=s.enabledFeatures;if(zt&&zt.includes("depth-sensing")){const Gt=c.getDepthInformation(wt[0]);Gt&&Gt.isValid&&Gt.texture&&x.init(t,Gt,s.renderState)}}for(let wt=0;wt<S.length;wt++){const dt=v[wt],zt=S[wt];dt!==null&&zt!==void 0&&zt.update(dt,at,h||r)}_t&&_t(J,at),at.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:at}),p=null}const _e=new Kd;_e.setAnimationLoop(jt),this.setAnimationLoop=function(J){_t=J},this.dispose=function(){}}}const ds=new rn,Wx=new Ne;function Xx(n,t){function e(m,g){m.matrixAutoUpdate===!0&&m.updateMatrix(),g.value.copy(m.matrix)}function i(m,g){g.color.getRGB(m.fogColor.value,Xd(n)),g.isFog?(m.fogNear.value=g.near,m.fogFar.value=g.far):g.isFogExp2&&(m.fogDensity.value=g.density)}function s(m,g,M,S,v){g.isMeshBasicMaterial||g.isMeshLambertMaterial?o(m,g):g.isMeshToonMaterial?(o(m,g),c(m,g)):g.isMeshPhongMaterial?(o(m,g),f(m,g)):g.isMeshStandardMaterial?(o(m,g),d(m,g),g.isMeshPhysicalMaterial&&u(m,g,v)):g.isMeshMatcapMaterial?(o(m,g),p(m,g)):g.isMeshDepthMaterial?o(m,g):g.isMeshDistanceMaterial?(o(m,g),x(m,g)):g.isMeshNormalMaterial?o(m,g):g.isLineBasicMaterial?(r(m,g),g.isLineDashedMaterial&&l(m,g)):g.isPointsMaterial?a(m,g,M,S):g.isSpriteMaterial?h(m,g):g.isShadowMaterial?(m.color.value.copy(g.color),m.opacity.value=g.opacity):g.isShaderMaterial&&(g.uniformsNeedUpdate=!1)}function o(m,g){m.opacity.value=g.opacity,g.color&&m.diffuse.value.copy(g.color),g.emissive&&m.emissive.value.copy(g.emissive).multiplyScalar(g.emissiveIntensity),g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.bumpMap&&(m.bumpMap.value=g.bumpMap,e(g.bumpMap,m.bumpMapTransform),m.bumpScale.value=g.bumpScale,g.side===wi&&(m.bumpScale.value*=-1)),g.normalMap&&(m.normalMap.value=g.normalMap,e(g.normalMap,m.normalMapTransform),m.normalScale.value.copy(g.normalScale),g.side===wi&&m.normalScale.value.negate()),g.displacementMap&&(m.displacementMap.value=g.displacementMap,e(g.displacementMap,m.displacementMapTransform),m.displacementScale.value=g.displacementScale,m.displacementBias.value=g.displacementBias),g.emissiveMap&&(m.emissiveMap.value=g.emissiveMap,e(g.emissiveMap,m.emissiveMapTransform)),g.specularMap&&(m.specularMap.value=g.specularMap,e(g.specularMap,m.specularMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest);const M=t.get(g),S=M.envMap,v=M.envMapRotation;S&&(m.envMap.value=S,ds.copy(v),ds.x*=-1,ds.y*=-1,ds.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(ds.y*=-1,ds.z*=-1),m.envMapRotation.value.setFromMatrix4(Wx.makeRotationFromEuler(ds)),m.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=g.reflectivity,m.ior.value=g.ior,m.refractionRatio.value=g.refractionRatio),g.lightMap&&(m.lightMap.value=g.lightMap,m.lightMapIntensity.value=g.lightMapIntensity,e(g.lightMap,m.lightMapTransform)),g.aoMap&&(m.aoMap.value=g.aoMap,m.aoMapIntensity.value=g.aoMapIntensity,e(g.aoMap,m.aoMapTransform))}function r(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform))}function l(m,g){m.dashSize.value=g.dashSize,m.totalSize.value=g.dashSize+g.gapSize,m.scale.value=g.scale}function a(m,g,M,S){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.size.value=g.size*M,m.scale.value=S*.5,g.map&&(m.map.value=g.map,e(g.map,m.uvTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function h(m,g){m.diffuse.value.copy(g.color),m.opacity.value=g.opacity,m.rotation.value=g.rotation,g.map&&(m.map.value=g.map,e(g.map,m.mapTransform)),g.alphaMap&&(m.alphaMap.value=g.alphaMap,e(g.alphaMap,m.alphaMapTransform)),g.alphaTest>0&&(m.alphaTest.value=g.alphaTest)}function f(m,g){m.specular.value.copy(g.specular),m.shininess.value=Math.max(g.shininess,1e-4)}function c(m,g){g.gradientMap&&(m.gradientMap.value=g.gradientMap)}function d(m,g){m.metalness.value=g.metalness,g.metalnessMap&&(m.metalnessMap.value=g.metalnessMap,e(g.metalnessMap,m.metalnessMapTransform)),m.roughness.value=g.roughness,g.roughnessMap&&(m.roughnessMap.value=g.roughnessMap,e(g.roughnessMap,m.roughnessMapTransform)),g.envMap&&(m.envMapIntensity.value=g.envMapIntensity)}function u(m,g,M){m.ior.value=g.ior,g.sheen>0&&(m.sheenColor.value.copy(g.sheenColor).multiplyScalar(g.sheen),m.sheenRoughness.value=g.sheenRoughness,g.sheenColorMap&&(m.sheenColorMap.value=g.sheenColorMap,e(g.sheenColorMap,m.sheenColorMapTransform)),g.sheenRoughnessMap&&(m.sheenRoughnessMap.value=g.sheenRoughnessMap,e(g.sheenRoughnessMap,m.sheenRoughnessMapTransform))),g.clearcoat>0&&(m.clearcoat.value=g.clearcoat,m.clearcoatRoughness.value=g.clearcoatRoughness,g.clearcoatMap&&(m.clearcoatMap.value=g.clearcoatMap,e(g.clearcoatMap,m.clearcoatMapTransform)),g.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=g.clearcoatRoughnessMap,e(g.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),g.clearcoatNormalMap&&(m.clearcoatNormalMap.value=g.clearcoatNormalMap,e(g.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(g.clearcoatNormalScale),g.side===wi&&m.clearcoatNormalScale.value.negate())),g.dispersion>0&&(m.dispersion.value=g.dispersion),g.iridescence>0&&(m.iridescence.value=g.iridescence,m.iridescenceIOR.value=g.iridescenceIOR,m.iridescenceThicknessMinimum.value=g.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=g.iridescenceThicknessRange[1],g.iridescenceMap&&(m.iridescenceMap.value=g.iridescenceMap,e(g.iridescenceMap,m.iridescenceMapTransform)),g.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=g.iridescenceThicknessMap,e(g.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),g.transmission>0&&(m.transmission.value=g.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),g.transmissionMap&&(m.transmissionMap.value=g.transmissionMap,e(g.transmissionMap,m.transmissionMapTransform)),m.thickness.value=g.thickness,g.thicknessMap&&(m.thicknessMap.value=g.thicknessMap,e(g.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=g.attenuationDistance,m.attenuationColor.value.copy(g.attenuationColor)),g.anisotropy>0&&(m.anisotropyVector.value.set(g.anisotropy*Math.cos(g.anisotropyRotation),g.anisotropy*Math.sin(g.anisotropyRotation)),g.anisotropyMap&&(m.anisotropyMap.value=g.anisotropyMap,e(g.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=g.specularIntensity,m.specularColor.value.copy(g.specularColor),g.specularColorMap&&(m.specularColorMap.value=g.specularColorMap,e(g.specularColorMap,m.specularColorMapTransform)),g.specularIntensityMap&&(m.specularIntensityMap.value=g.specularIntensityMap,e(g.specularIntensityMap,m.specularIntensityMapTransform))}function p(m,g){g.matcap&&(m.matcap.value=g.matcap)}function x(m,g){const M=t.get(g).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function qx(n,t,e,i){let s={},o={},r=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function a(M,S){const v=S.program;i.uniformBlockBinding(M,v)}function h(M,S){let v=s[M.id];v===void 0&&(p(M),v=f(M),s[M.id]=v,M.addEventListener("dispose",m));const D=S.program;i.updateUBOMapping(M,D);const R=t.render.frame;o[M.id]!==R&&(d(M),o[M.id]=R)}function f(M){const S=c();M.__bindingPointIndex=S;const v=n.createBuffer(),D=M.__size,R=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,v),n.bufferData(n.UNIFORM_BUFFER,D,R),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,S,v),v}function c(){for(let M=0;M<l;M++)if(r.indexOf(M)===-1)return r.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const S=s[M.id],v=M.uniforms,D=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,S);for(let R=0,w=v.length;R<w;R++){const C=Array.isArray(v[R])?v[R]:[v[R]];for(let y=0,b=C.length;y<b;y++){const P=C[y];if(u(P,R,y,D)===!0){const O=P.__offset,U=Array.isArray(P.value)?P.value:[P.value];let G=0;for(let $=0;$<U.length;$++){const Y=U[$],K=x(Y);typeof Y=="number"||typeof Y=="boolean"?(P.__data[0]=Y,n.bufferSubData(n.UNIFORM_BUFFER,O+G,P.__data)):Y.isMatrix3?(P.__data[0]=Y.elements[0],P.__data[1]=Y.elements[1],P.__data[2]=Y.elements[2],P.__data[3]=0,P.__data[4]=Y.elements[3],P.__data[5]=Y.elements[4],P.__data[6]=Y.elements[5],P.__data[7]=0,P.__data[8]=Y.elements[6],P.__data[9]=Y.elements[7],P.__data[10]=Y.elements[8],P.__data[11]=0):(Y.toArray(P.__data,G),G+=K.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,O,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function u(M,S,v,D){const R=M.value,w=S+"_"+v;if(D[w]===void 0)return typeof R=="number"||typeof R=="boolean"?D[w]=R:D[w]=R.clone(),!0;{const C=D[w];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return D[w]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function p(M){const S=M.uniforms;let v=0;const D=16;for(let w=0,C=S.length;w<C;w++){const y=Array.isArray(S[w])?S[w]:[S[w]];for(let b=0,P=y.length;b<P;b++){const O=y[b],U=Array.isArray(O.value)?O.value:[O.value];for(let G=0,$=U.length;G<$;G++){const Y=U[G],K=x(Y),W=v%D,ot=W%K.boundary,rt=W+ot;v+=ot,rt!==0&&D-rt<K.storage&&(v+=D-rt),O.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),O.__offset=v,v+=K.storage}}}const R=v%D;return R>0&&(v+=D-R),M.__size=v,M.__cache={},this}function x(M){const S={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(S.boundary=4,S.storage=4):M.isVector2?(S.boundary=8,S.storage=8):M.isVector3||M.isColor?(S.boundary=16,S.storage=12):M.isVector4?(S.boundary=16,S.storage=16):M.isMatrix3?(S.boundary=48,S.storage=48):M.isMatrix4?(S.boundary=64,S.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),S}function m(M){const S=M.target;S.removeEventListener("dispose",m);const v=r.indexOf(S.__bindingPointIndex);r.splice(v,1),n.deleteBuffer(s[S.id]),delete s[S.id],delete o[S.id]}function g(){for(const M in s)n.deleteBuffer(s[M]);r=[],s={},o={}}return{bind:a,update:h,dispose:g}}class Yx{constructor(t={}){const{canvas:e=U0(),context:i=null,depth:s=!0,stencil:o=!1,alpha:r=!1,antialias:l=!1,premultipliedAlpha:a=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let u;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");u=i.getContextAttributes().alpha}else u=r;const p=new Uint32Array(4),x=new Int32Array(4);let m=null,g=null;const M=[],S=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=li,this.toneMapping=In,this.toneMappingExposure=1;const v=this;let D=!1,R=0,w=0,C=null,y=-1,b=null;const P=new Ce,O=new Ce;let U=null;const G=new Et(0);let $=0,Y=e.width,K=e.height,W=1,ot=null,rt=null;const _t=new Ce(0,0,Y,K),jt=new Ce(0,0,Y,K);let _e=!1;const J=new $h;let at=!1,wt=!1;const dt=new Ne,zt=new Ne,Gt=new I,Bt=new Ce,qt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Kt=!1;function Te(){return C===null?W:1}let F=i;function ei(A,k){return e.getContext(A,k)}try{const A={alpha:!0,depth:s,stencil:o,antialias:l,premultipliedAlpha:a,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Bh}`),e.addEventListener("webglcontextlost",et,!1),e.addEventListener("webglcontextrestored",xt,!1),e.addEventListener("webglcontextcreationerror",mt,!1),F===null){const k="webgl2";if(F=ei(k,A),F===null)throw ei(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ae,le,It,Le,Ft,L,E,V,tt,st,Q,Nt,pt,yt,ge,lt,bt,Ht,Vt,St,de,ee,Pe,z;function ut(){ae=new Jg(F),ae.init(),ee=new zx(F,ae),le=new qg(F,ae,t,ee),It=new Nx(F,ae),le.reverseDepthBuffer&&d&&It.buffers.depth.setReversed(!0),Le=new e1(F),Ft=new _x,L=new Ux(F,ae,It,Ft,le,ee,Le),E=new Kg(v),V=new Zg(v),tt=new lp(F),Pe=new Wg(F,tt),st=new Qg(F,tt,Le,Pe),Q=new n1(F,st,tt,Le),Vt=new i1(F,le,L),lt=new Yg(Ft),Nt=new vx(v,E,V,ae,le,Pe,lt),pt=new Xx(v,Ft),yt=new yx,ge=new Ax(ae),Ht=new Vg(v,E,V,It,Q,u,a),bt=new Px(v,Q,le),z=new qx(F,Le,le,It),St=new Xg(F,ae,Le),de=new t1(F,ae,Le),Le.programs=Nt.programs,v.capabilities=le,v.extensions=ae,v.properties=Ft,v.renderLists=yt,v.shadowMap=bt,v.state=It,v.info=Le}ut();const j=new Vx(v,F);this.xr=j,this.getContext=function(){return F},this.getContextAttributes=function(){return F.getContextAttributes()},this.forceContextLoss=function(){const A=ae.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ae.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(A){A!==void 0&&(W=A,this.setSize(Y,K,!1))},this.getSize=function(A){return A.set(Y,K)},this.setSize=function(A,k,X=!0){if(j.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Y=A,K=k,e.width=Math.floor(A*W),e.height=Math.floor(k*W),X===!0&&(e.style.width=A+"px",e.style.height=k+"px"),this.setViewport(0,0,A,k)},this.getDrawingBufferSize=function(A){return A.set(Y*W,K*W).floor()},this.setDrawingBufferSize=function(A,k,X){Y=A,K=k,W=X,e.width=Math.floor(A*X),e.height=Math.floor(k*X),this.setViewport(0,0,A,k)},this.getCurrentViewport=function(A){return A.copy(P)},this.getViewport=function(A){return A.copy(_t)},this.setViewport=function(A,k,X,q){A.isVector4?_t.set(A.x,A.y,A.z,A.w):_t.set(A,k,X,q),It.viewport(P.copy(_t).multiplyScalar(W).round())},this.getScissor=function(A){return A.copy(jt)},this.setScissor=function(A,k,X,q){A.isVector4?jt.set(A.x,A.y,A.z,A.w):jt.set(A,k,X,q),It.scissor(O.copy(jt).multiplyScalar(W).round())},this.getScissorTest=function(){return _e},this.setScissorTest=function(A){It.setScissorTest(_e=A)},this.setOpaqueSort=function(A){ot=A},this.setTransparentSort=function(A){rt=A},this.getClearColor=function(A){return A.copy(Ht.getClearColor())},this.setClearColor=function(){Ht.setClearColor.apply(Ht,arguments)},this.getClearAlpha=function(){return Ht.getClearAlpha()},this.setClearAlpha=function(){Ht.setClearAlpha.apply(Ht,arguments)},this.clear=function(A=!0,k=!0,X=!0){let q=0;if(A){let B=!1;if(C!==null){const ht=C.texture.format;B=ht===Yh||ht===qh||ht===Xh}if(B){const ht=C.texture.type,gt=ht===zn||ht===bs||ht===Yo||ht===so||ht===Vh||ht===Wh,Rt=Ht.getClearColor(),Ct=Ht.getClearAlpha(),Wt=Rt.r,Zt=Rt.g,Lt=Rt.b;gt?(p[0]=Wt,p[1]=Zt,p[2]=Lt,p[3]=Ct,F.clearBufferuiv(F.COLOR,0,p)):(x[0]=Wt,x[1]=Zt,x[2]=Lt,x[3]=Ct,F.clearBufferiv(F.COLOR,0,x))}else q|=F.COLOR_BUFFER_BIT}k&&(q|=F.DEPTH_BUFFER_BIT),X&&(q|=F.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",et,!1),e.removeEventListener("webglcontextrestored",xt,!1),e.removeEventListener("webglcontextcreationerror",mt,!1),yt.dispose(),ge.dispose(),Ft.dispose(),E.dispose(),V.dispose(),Q.dispose(),Pe.dispose(),z.dispose(),Nt.dispose(),j.dispose(),j.removeEventListener("sessionstart",yc),j.removeEventListener("sessionend",bc),rs.stop()};function et(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function xt(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const A=Le.autoReset,k=bt.enabled,X=bt.autoUpdate,q=bt.needsUpdate,B=bt.type;ut(),Le.autoReset=A,bt.enabled=k,bt.autoUpdate=X,bt.needsUpdate=q,bt.type=B}function mt(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function $t(A){const k=A.target;k.removeEventListener("dispose",$t),We(k)}function We(A){mi(A),Ft.remove(A)}function mi(A){const k=Ft.get(A).programs;k!==void 0&&(k.forEach(function(X){Nt.releaseProgram(X)}),A.isShaderMaterial&&Nt.releaseShaderCache(A))}this.renderBufferDirect=function(A,k,X,q,B,ht){k===null&&(k=qt);const gt=B.isMesh&&B.matrixWorld.determinant()<0,Rt=Ju(A,k,X,q,B);It.setMaterial(q,gt);let Ct=X.index,Wt=1;if(q.wireframe===!0){if(Ct=st.getWireframeAttribute(X),Ct===void 0)return;Wt=2}const Zt=X.drawRange,Lt=X.attributes.position;let ve=Zt.start*Wt,Ie=(Zt.start+Zt.count)*Wt;ht!==null&&(ve=Math.max(ve,ht.start*Wt),Ie=Math.min(Ie,(ht.start+ht.count)*Wt)),Ct!==null?(ve=Math.max(ve,0),Ie=Math.min(Ie,Ct.count)):Lt!=null&&(ve=Math.max(ve,0),Ie=Math.min(Ie,Lt.count));const Ue=Ie-ve;if(Ue<0||Ue===1/0)return;Pe.setup(B,q,Rt,X,Ct);let Ri,Me=St;if(Ct!==null&&(Ri=tt.get(Ct),Me=de,Me.setIndex(Ri)),B.isMesh)q.wireframe===!0?(It.setLineWidth(q.wireframeLinewidth*Te()),Me.setMode(F.LINES)):Me.setMode(F.TRIANGLES);else if(B.isLine){let Ot=q.linewidth;Ot===void 0&&(Ot=1),It.setLineWidth(Ot*Te()),B.isLineSegments?Me.setMode(F.LINES):B.isLineLoop?Me.setMode(F.LINE_LOOP):Me.setMode(F.LINE_STRIP)}else B.isPoints?Me.setMode(F.POINTS):B.isSprite&&Me.setMode(F.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Me.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(ae.get("WEBGL_multi_draw"))Me.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Ot=B._multiDrawStarts,_n=B._multiDrawCounts,ye=B._multiDrawCount,$i=Ct?tt.get(Ct).bytesPerElement:1,As=Ft.get(q).currentProgram.getUniforms();for(let Ni=0;Ni<ye;Ni++)As.setValue(F,"_gl_DrawID",Ni),Me.render(Ot[Ni]/$i,_n[Ni])}else if(B.isInstancedMesh)Me.renderInstances(ve,Ue,B.count);else if(X.isInstancedBufferGeometry){const Ot=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,_n=Math.min(X.instanceCount,Ot);Me.renderInstances(ve,Ue,_n)}else Me.render(ve,Ue)};function Ee(A,k,X){A.transparent===!0&&A.side===Ei&&A.forceSinglePass===!1?(A.side=wi,A.needsUpdate=!0,lr(A,k,X),A.side=os,A.needsUpdate=!0,lr(A,k,X),A.side=Ei):lr(A,k,X)}this.compile=function(A,k,X=null){X===null&&(X=A),g=ge.get(X),g.init(k),S.push(g),X.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),A!==X&&A.traverseVisible(function(B){B.isLight&&B.layers.test(k.layers)&&(g.pushLight(B),B.castShadow&&g.pushShadow(B))}),g.setupLights();const q=new Set;return A.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const ht=B.material;if(ht)if(Array.isArray(ht))for(let gt=0;gt<ht.length;gt++){const Rt=ht[gt];Ee(Rt,X,B),q.add(Rt)}else Ee(ht,X,B),q.add(ht)}),S.pop(),g=null,q},this.compileAsync=function(A,k,X=null){const q=this.compile(A,k,X);return new Promise(B=>{function ht(){if(q.forEach(function(gt){Ft.get(gt).currentProgram.isReady()&&q.delete(gt)}),q.size===0){B(A);return}setTimeout(ht,10)}ae.get("KHR_parallel_shader_compile")!==null?ht():setTimeout(ht,10)})};let ji=null;function vn(A){ji&&ji(A)}function yc(){rs.stop()}function bc(){rs.start()}const rs=new Kd;rs.setAnimationLoop(vn),typeof self<"u"&&rs.setContext(self),this.setAnimationLoop=function(A){ji=A,j.setAnimationLoop(A),A===null?rs.stop():rs.start()},j.addEventListener("sessionstart",yc),j.addEventListener("sessionend",bc),this.render=function(A,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),j.enabled===!0&&j.isPresenting===!0&&(j.cameraAutoUpdate===!0&&j.updateCamera(k),k=j.getCamera()),A.isScene===!0&&A.onBeforeRender(v,A,k,C),g=ge.get(A,S.length),g.init(k),S.push(g),zt.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),J.setFromProjectionMatrix(zt),wt=this.localClippingEnabled,at=lt.init(this.clippingPlanes,wt),m=yt.get(A,M.length),m.init(),M.push(m),j.enabled===!0&&j.isPresenting===!0){const ht=v.xr.getDepthSensingMesh();ht!==null&&za(ht,k,-1/0,v.sortObjects)}za(A,k,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(ot,rt),Kt=j.enabled===!1||j.isPresenting===!1||j.hasDepthSensing()===!1,Kt&&Ht.addToRenderList(m,A),this.info.render.frame++,at===!0&&lt.beginShadows();const X=g.state.shadowsArray;bt.render(X,A,k),at===!0&&lt.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=m.opaque,B=m.transmissive;if(g.setupLights(),k.isArrayCamera){const ht=k.cameras;if(B.length>0)for(let gt=0,Rt=ht.length;gt<Rt;gt++){const Ct=ht[gt];Ec(q,B,A,Ct)}Kt&&Ht.render(A);for(let gt=0,Rt=ht.length;gt<Rt;gt++){const Ct=ht[gt];Sc(m,A,Ct,Ct.viewport)}}else B.length>0&&Ec(q,B,A,k),Kt&&Ht.render(A),Sc(m,A,k);C!==null&&(L.updateMultisampleRenderTarget(C),L.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(v,A,k),Pe.resetDefaultState(),y=-1,b=null,S.pop(),S.length>0?(g=S[S.length-1],at===!0&&lt.setGlobalState(v.clippingPlanes,g.state.camera)):g=null,M.pop(),M.length>0?m=M[M.length-1]:m=null};function za(A,k,X,q){if(A.visible===!1)return;if(A.layers.test(k.layers)){if(A.isGroup)X=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(k);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||J.intersectsSprite(A)){q&&Bt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(zt);const gt=Q.update(A),Rt=A.material;Rt.visible&&m.push(A,gt,Rt,X,Bt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||J.intersectsObject(A))){const gt=Q.update(A),Rt=A.material;if(q&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Bt.copy(A.boundingSphere.center)):(gt.boundingSphere===null&&gt.computeBoundingSphere(),Bt.copy(gt.boundingSphere.center)),Bt.applyMatrix4(A.matrixWorld).applyMatrix4(zt)),Array.isArray(Rt)){const Ct=gt.groups;for(let Wt=0,Zt=Ct.length;Wt<Zt;Wt++){const Lt=Ct[Wt],ve=Rt[Lt.materialIndex];ve&&ve.visible&&m.push(A,gt,ve,X,Bt.z,Lt)}}else Rt.visible&&m.push(A,gt,Rt,X,Bt.z,null)}}const ht=A.children;for(let gt=0,Rt=ht.length;gt<Rt;gt++)za(ht[gt],k,X,q)}function Sc(A,k,X,q){const B=A.opaque,ht=A.transmissive,gt=A.transparent;g.setupLightsView(X),at===!0&&lt.setGlobalState(v.clippingPlanes,X),q&&It.viewport(P.copy(q)),B.length>0&&ar(B,k,X),ht.length>0&&ar(ht,k,X),gt.length>0&&ar(gt,k,X),It.buffers.depth.setTest(!0),It.buffers.depth.setMask(!0),It.buffers.color.setMask(!0),It.setPolygonOffset(!1)}function Ec(A,k,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[q.id]===void 0&&(g.state.transmissionRenderTarget[q.id]=new Ki(1,1,{generateMipmaps:!0,type:ae.has("EXT_color_buffer_half_float")||ae.has("EXT_color_buffer_float")?pn:zn,minFilter:Cn,samples:4,stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:pe.workingColorSpace}));const ht=g.state.transmissionRenderTarget[q.id],gt=q.viewport||P;ht.setSize(gt.z,gt.w);const Rt=v.getRenderTarget();v.setRenderTarget(ht),v.getClearColor(G),$=v.getClearAlpha(),$<1&&v.setClearColor(16777215,.5),v.clear(),Kt&&Ht.render(X);const Ct=v.toneMapping;v.toneMapping=In;const Wt=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),g.setupLightsView(q),at===!0&&lt.setGlobalState(v.clippingPlanes,q),ar(A,X,q),L.updateMultisampleRenderTarget(ht),L.updateRenderTargetMipmap(ht),ae.has("WEBGL_multisampled_render_to_texture")===!1){let Zt=!1;for(let Lt=0,ve=k.length;Lt<ve;Lt++){const Ie=k[Lt],Ue=Ie.object,Ri=Ie.geometry,Me=Ie.material,Ot=Ie.group;if(Me.side===Ei&&Ue.layers.test(q.layers)){const _n=Me.side;Me.side=wi,Me.needsUpdate=!0,wc(Ue,X,q,Ri,Me,Ot),Me.side=_n,Me.needsUpdate=!0,Zt=!0}}Zt===!0&&(L.updateMultisampleRenderTarget(ht),L.updateRenderTargetMipmap(ht))}v.setRenderTarget(Rt),v.setClearColor(G,$),Wt!==void 0&&(q.viewport=Wt),v.toneMapping=Ct}function ar(A,k,X){const q=k.isScene===!0?k.overrideMaterial:null;for(let B=0,ht=A.length;B<ht;B++){const gt=A[B],Rt=gt.object,Ct=gt.geometry,Wt=q===null?gt.material:q,Zt=gt.group;Rt.layers.test(X.layers)&&wc(Rt,k,X,Ct,Wt,Zt)}}function wc(A,k,X,q,B,ht){A.onBeforeRender(v,k,X,q,B,ht),A.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),B.onBeforeRender(v,k,X,q,A,ht),B.transparent===!0&&B.side===Ei&&B.forceSinglePass===!1?(B.side=wi,B.needsUpdate=!0,v.renderBufferDirect(X,k,q,B,A,ht),B.side=os,B.needsUpdate=!0,v.renderBufferDirect(X,k,q,B,A,ht),B.side=Ei):v.renderBufferDirect(X,k,q,B,A,ht),A.onAfterRender(v,k,X,q,B,ht)}function lr(A,k,X){k.isScene!==!0&&(k=qt);const q=Ft.get(A),B=g.state.lights,ht=g.state.shadowsArray,gt=B.state.version,Rt=Nt.getParameters(A,B.state,ht,k,X),Ct=Nt.getProgramCacheKey(Rt);let Wt=q.programs;q.environment=A.isMeshStandardMaterial?k.environment:null,q.fog=k.fog,q.envMap=(A.isMeshStandardMaterial?V:E).get(A.envMap||q.environment),q.envMapRotation=q.environment!==null&&A.envMap===null?k.environmentRotation:A.envMapRotation,Wt===void 0&&(A.addEventListener("dispose",$t),Wt=new Map,q.programs=Wt);let Zt=Wt.get(Ct);if(Zt!==void 0){if(q.currentProgram===Zt&&q.lightsStateVersion===gt)return Ac(A,Rt),Zt}else Rt.uniforms=Nt.getUniforms(A),A.onBeforeCompile(Rt,v),Zt=Nt.acquireProgram(Rt,Ct),Wt.set(Ct,Zt),q.uniforms=Rt.uniforms;const Lt=q.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Lt.clippingPlanes=lt.uniform),Ac(A,Rt),q.needsLights=t0(A),q.lightsStateVersion=gt,q.needsLights&&(Lt.ambientLightColor.value=B.state.ambient,Lt.lightProbe.value=B.state.probe,Lt.directionalLights.value=B.state.directional,Lt.directionalLightShadows.value=B.state.directionalShadow,Lt.spotLights.value=B.state.spot,Lt.spotLightShadows.value=B.state.spotShadow,Lt.rectAreaLights.value=B.state.rectArea,Lt.ltc_1.value=B.state.rectAreaLTC1,Lt.ltc_2.value=B.state.rectAreaLTC2,Lt.pointLights.value=B.state.point,Lt.pointLightShadows.value=B.state.pointShadow,Lt.hemisphereLights.value=B.state.hemi,Lt.directionalShadowMap.value=B.state.directionalShadowMap,Lt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Lt.spotShadowMap.value=B.state.spotShadowMap,Lt.spotLightMatrix.value=B.state.spotLightMatrix,Lt.spotLightMap.value=B.state.spotLightMap,Lt.pointShadowMap.value=B.state.pointShadowMap,Lt.pointShadowMatrix.value=B.state.pointShadowMatrix),q.currentProgram=Zt,q.uniformsList=null,Zt}function Tc(A){if(A.uniformsList===null){const k=A.currentProgram.getUniforms();A.uniformsList=ea.seqWithValue(k.seq,A.uniforms)}return A.uniformsList}function Ac(A,k){const X=Ft.get(A);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function Ju(A,k,X,q,B){k.isScene!==!0&&(k=qt),L.resetTextureUnits();const ht=k.fog,gt=q.isMeshStandardMaterial?k.environment:null,Rt=C===null?v.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:fo,Ct=(q.isMeshStandardMaterial?V:E).get(q.envMap||gt),Wt=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,Zt=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Lt=!!X.morphAttributes.position,ve=!!X.morphAttributes.normal,Ie=!!X.morphAttributes.color;let Ue=In;q.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Ue=v.toneMapping);const Ri=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Me=Ri!==void 0?Ri.length:0,Ot=Ft.get(q),_n=g.state.lights;if(at===!0&&(wt===!0||A!==b)){const Vi=A===b&&q.id===y;lt.setState(q,A,Vi)}let ye=!1;q.version===Ot.__version?(Ot.needsLights&&Ot.lightsStateVersion!==_n.state.version||Ot.outputColorSpace!==Rt||B.isBatchedMesh&&Ot.batching===!1||!B.isBatchedMesh&&Ot.batching===!0||B.isBatchedMesh&&Ot.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Ot.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Ot.instancing===!1||!B.isInstancedMesh&&Ot.instancing===!0||B.isSkinnedMesh&&Ot.skinning===!1||!B.isSkinnedMesh&&Ot.skinning===!0||B.isInstancedMesh&&Ot.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Ot.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Ot.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Ot.instancingMorph===!1&&B.morphTexture!==null||Ot.envMap!==Ct||q.fog===!0&&Ot.fog!==ht||Ot.numClippingPlanes!==void 0&&(Ot.numClippingPlanes!==lt.numPlanes||Ot.numIntersection!==lt.numIntersection)||Ot.vertexAlphas!==Wt||Ot.vertexTangents!==Zt||Ot.morphTargets!==Lt||Ot.morphNormals!==ve||Ot.morphColors!==Ie||Ot.toneMapping!==Ue||Ot.morphTargetsCount!==Me)&&(ye=!0):(ye=!0,Ot.__version=q.version);let $i=Ot.currentProgram;ye===!0&&($i=lr(q,k,B));let As=!1,Ni=!1,vo=!1;const ze=$i.getUniforms(),an=Ot.uniforms;if(It.useProgram($i.program)&&(As=!0,Ni=!0,vo=!0),q.id!==y&&(y=q.id,Ni=!0),As||b!==A){It.buffers.depth.getReversed()?(dt.copy(A.projectionMatrix),F0(dt),k0(dt),ze.setValue(F,"projectionMatrix",dt)):ze.setValue(F,"projectionMatrix",A.projectionMatrix),ze.setValue(F,"viewMatrix",A.matrixWorldInverse);const Bn=ze.map.cameraPosition;Bn!==void 0&&Bn.setValue(F,Gt.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&ze.setValue(F,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&ze.setValue(F,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,Ni=!0,vo=!0)}if(B.isSkinnedMesh){ze.setOptional(F,B,"bindMatrix"),ze.setOptional(F,B,"bindMatrixInverse");const Vi=B.skeleton;Vi&&(Vi.boneTexture===null&&Vi.computeBoneTexture(),ze.setValue(F,"boneTexture",Vi.boneTexture,L))}B.isBatchedMesh&&(ze.setOptional(F,B,"batchingTexture"),ze.setValue(F,"batchingTexture",B._matricesTexture,L),ze.setOptional(F,B,"batchingIdTexture"),ze.setValue(F,"batchingIdTexture",B._indirectTexture,L),ze.setOptional(F,B,"batchingColorTexture"),B._colorsTexture!==null&&ze.setValue(F,"batchingColorTexture",B._colorsTexture,L));const _o=X.morphAttributes;if((_o.position!==void 0||_o.normal!==void 0||_o.color!==void 0)&&Vt.update(B,X,$i),(Ni||Ot.receiveShadow!==B.receiveShadow)&&(Ot.receiveShadow=B.receiveShadow,ze.setValue(F,"receiveShadow",B.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(an.envMap.value=Ct,an.flipEnvMap.value=Ct.isCubeTexture&&Ct.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&k.environment!==null&&(an.envMapIntensity.value=k.environmentIntensity),Ni&&(ze.setValue(F,"toneMappingExposure",v.toneMappingExposure),Ot.needsLights&&Qu(an,vo),ht&&q.fog===!0&&pt.refreshFogUniforms(an,ht),pt.refreshMaterialUniforms(an,q,W,K,g.state.transmissionRenderTarget[A.id]),ea.upload(F,Tc(Ot),an,L)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ea.upload(F,Tc(Ot),an,L),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&ze.setValue(F,"center",B.center),ze.setValue(F,"modelViewMatrix",B.modelViewMatrix),ze.setValue(F,"normalMatrix",B.normalMatrix),ze.setValue(F,"modelMatrix",B.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Vi=q.uniformsGroups;for(let Bn=0,Hn=Vi.length;Bn<Hn;Bn++){const Rc=Vi[Bn];z.update(Rc,$i),z.bind(Rc,$i)}}return $i}function Qu(A,k){A.ambientLightColor.needsUpdate=k,A.lightProbe.needsUpdate=k,A.directionalLights.needsUpdate=k,A.directionalLightShadows.needsUpdate=k,A.pointLights.needsUpdate=k,A.pointLightShadows.needsUpdate=k,A.spotLights.needsUpdate=k,A.spotLightShadows.needsUpdate=k,A.rectAreaLights.needsUpdate=k,A.hemisphereLights.needsUpdate=k}function t0(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return R},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,k,X){Ft.get(A.texture).__webglTexture=k,Ft.get(A.depthTexture).__webglTexture=X;const q=Ft.get(A);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||ae.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,k){const X=Ft.get(A);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(A,k=0,X=0){C=A,R=k,w=X;let q=!0,B=null,ht=!1,gt=!1;if(A){const Ct=Ft.get(A);if(Ct.__useDefaultFramebuffer!==void 0)It.bindFramebuffer(F.FRAMEBUFFER,null),q=!1;else if(Ct.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(Ct.__hasExternalTextures)L.rebindTextures(A,Ft.get(A.texture).__webglTexture,Ft.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const Lt=A.depthTexture;if(Ct.__boundDepthTexture!==Lt){if(Lt!==null&&Ft.has(Lt)&&(A.width!==Lt.image.width||A.height!==Lt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const Wt=A.texture;(Wt.isData3DTexture||Wt.isDataArrayTexture||Wt.isCompressedArrayTexture)&&(gt=!0);const Zt=Ft.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Zt[k])?B=Zt[k][X]:B=Zt[k],ht=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?B=Ft.get(A).__webglMultisampledFramebuffer:Array.isArray(Zt)?B=Zt[X]:B=Zt,P.copy(A.viewport),O.copy(A.scissor),U=A.scissorTest}else P.copy(_t).multiplyScalar(W).floor(),O.copy(jt).multiplyScalar(W).floor(),U=_e;if(It.bindFramebuffer(F.FRAMEBUFFER,B)&&q&&It.drawBuffers(A,B),It.viewport(P),It.scissor(O),It.setScissorTest(U),ht){const Ct=Ft.get(A.texture);F.framebufferTexture2D(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,F.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ct.__webglTexture,X)}else if(gt){const Ct=Ft.get(A.texture),Wt=k||0;F.framebufferTextureLayer(F.FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ct.__webglTexture,X||0,Wt)}y=-1},this.readRenderTargetPixels=function(A,k,X,q,B,ht,gt){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Rt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(Rt=Rt[gt]),Rt){It.bindFramebuffer(F.FRAMEBUFFER,Rt);try{const Ct=A.texture,Wt=Ct.format,Zt=Ct.type;if(!le.textureFormatReadable(Wt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Zt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=A.width-q&&X>=0&&X<=A.height-B&&F.readPixels(k,X,q,B,ee.convert(Wt),ee.convert(Zt),ht)}finally{const Ct=C!==null?Ft.get(C).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,Ct)}}},this.readRenderTargetPixelsAsync=async function(A,k,X,q,B,ht,gt){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Rt=Ft.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&gt!==void 0&&(Rt=Rt[gt]),Rt){const Ct=A.texture,Wt=Ct.format,Zt=Ct.type;if(!le.textureFormatReadable(Wt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Zt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=A.width-q&&X>=0&&X<=A.height-B){It.bindFramebuffer(F.FRAMEBUFFER,Rt);const Lt=F.createBuffer();F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.bufferData(F.PIXEL_PACK_BUFFER,ht.byteLength,F.STREAM_READ),F.readPixels(k,X,q,B,ee.convert(Wt),ee.convert(Zt),0);const ve=C!==null?Ft.get(C).__webglFramebuffer:null;It.bindFramebuffer(F.FRAMEBUFFER,ve);const Ie=F.fenceSync(F.SYNC_GPU_COMMANDS_COMPLETE,0);return F.flush(),await z0(F,Ie,4),F.bindBuffer(F.PIXEL_PACK_BUFFER,Lt),F.getBufferSubData(F.PIXEL_PACK_BUFFER,0,ht),F.deleteBuffer(Lt),F.deleteSync(Ie),ht}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,k=null,X=0){A.isTexture!==!0&&(Po("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,A=arguments[1]);const q=Math.pow(2,-X),B=Math.floor(A.image.width*q),ht=Math.floor(A.image.height*q),gt=k!==null?k.x:0,Rt=k!==null?k.y:0;L.setTexture2D(A,0),F.copyTexSubImage2D(F.TEXTURE_2D,X,0,0,gt,Rt,B,ht),It.unbindTexture()},this.copyTextureToTexture=function(A,k,X=null,q=null,B=0){A.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,A=arguments[1],k=arguments[2],B=arguments[3]||0,X=null);let ht,gt,Rt,Ct,Wt,Zt,Lt,ve,Ie;const Ue=A.isCompressedTexture?A.mipmaps[B]:A.image;X!==null?(ht=X.max.x-X.min.x,gt=X.max.y-X.min.y,Rt=X.isBox3?X.max.z-X.min.z:1,Ct=X.min.x,Wt=X.min.y,Zt=X.isBox3?X.min.z:0):(ht=Ue.width,gt=Ue.height,Rt=Ue.depth||1,Ct=0,Wt=0,Zt=0),q!==null?(Lt=q.x,ve=q.y,Ie=q.z):(Lt=0,ve=0,Ie=0);const Ri=ee.convert(k.format),Me=ee.convert(k.type);let Ot;k.isData3DTexture?(L.setTexture3D(k,0),Ot=F.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(L.setTexture2DArray(k,0),Ot=F.TEXTURE_2D_ARRAY):(L.setTexture2D(k,0),Ot=F.TEXTURE_2D),F.pixelStorei(F.UNPACK_FLIP_Y_WEBGL,k.flipY),F.pixelStorei(F.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),F.pixelStorei(F.UNPACK_ALIGNMENT,k.unpackAlignment);const _n=F.getParameter(F.UNPACK_ROW_LENGTH),ye=F.getParameter(F.UNPACK_IMAGE_HEIGHT),$i=F.getParameter(F.UNPACK_SKIP_PIXELS),As=F.getParameter(F.UNPACK_SKIP_ROWS),Ni=F.getParameter(F.UNPACK_SKIP_IMAGES);F.pixelStorei(F.UNPACK_ROW_LENGTH,Ue.width),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,Ue.height),F.pixelStorei(F.UNPACK_SKIP_PIXELS,Ct),F.pixelStorei(F.UNPACK_SKIP_ROWS,Wt),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Zt);const vo=A.isDataArrayTexture||A.isData3DTexture,ze=k.isDataArrayTexture||k.isData3DTexture;if(A.isRenderTargetTexture||A.isDepthTexture){const an=Ft.get(A),_o=Ft.get(k),Vi=Ft.get(an.__renderTarget),Bn=Ft.get(_o.__renderTarget);It.bindFramebuffer(F.READ_FRAMEBUFFER,Vi.__webglFramebuffer),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,Bn.__webglFramebuffer);for(let Hn=0;Hn<Rt;Hn++)vo&&F.framebufferTextureLayer(F.READ_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(A).__webglTexture,B,Zt+Hn),A.isDepthTexture?(ze&&F.framebufferTextureLayer(F.DRAW_FRAMEBUFFER,F.COLOR_ATTACHMENT0,Ft.get(k).__webglTexture,B,Ie+Hn),F.blitFramebuffer(Ct,Wt,ht,gt,Lt,ve,ht,gt,F.DEPTH_BUFFER_BIT,F.NEAREST)):ze?F.copyTexSubImage3D(Ot,B,Lt,ve,Ie+Hn,Ct,Wt,ht,gt):F.copyTexSubImage2D(Ot,B,Lt,ve,Ie+Hn,Ct,Wt,ht,gt);It.bindFramebuffer(F.READ_FRAMEBUFFER,null),It.bindFramebuffer(F.DRAW_FRAMEBUFFER,null)}else ze?A.isDataTexture||A.isData3DTexture?F.texSubImage3D(Ot,B,Lt,ve,Ie,ht,gt,Rt,Ri,Me,Ue.data):k.isCompressedArrayTexture?F.compressedTexSubImage3D(Ot,B,Lt,ve,Ie,ht,gt,Rt,Ri,Ue.data):F.texSubImage3D(Ot,B,Lt,ve,Ie,ht,gt,Rt,Ri,Me,Ue):A.isDataTexture?F.texSubImage2D(F.TEXTURE_2D,B,Lt,ve,ht,gt,Ri,Me,Ue.data):A.isCompressedTexture?F.compressedTexSubImage2D(F.TEXTURE_2D,B,Lt,ve,Ue.width,Ue.height,Ri,Ue.data):F.texSubImage2D(F.TEXTURE_2D,B,Lt,ve,ht,gt,Ri,Me,Ue);F.pixelStorei(F.UNPACK_ROW_LENGTH,_n),F.pixelStorei(F.UNPACK_IMAGE_HEIGHT,ye),F.pixelStorei(F.UNPACK_SKIP_PIXELS,$i),F.pixelStorei(F.UNPACK_SKIP_ROWS,As),F.pixelStorei(F.UNPACK_SKIP_IMAGES,Ni),B===0&&k.generateMipmaps&&F.generateMipmap(Ot),It.unbindTexture()},this.copyTextureToTexture3D=function(A,k,X=null,q=null,B=0){return A.isTexture!==!0&&(Po("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,A=arguments[2],k=arguments[3],B=arguments[4]||0),Po('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,k,X,q,B)},this.initRenderTarget=function(A){Ft.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),It.unbindTexture()},this.resetState=function(){R=0,w=0,C=null,It.reset(),Pe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=pe._getDrawingBufferColorSpace(t),e.unpackColorSpace=pe._getUnpackColorSpace()}}class Qh{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new Et(t),this.near=e,this.far=i}clone(){return new Qh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Kx extends Je{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new rn,this.environmentIntensity=1,this.environmentRotation=new rn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class jx{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Mh,this.updateRanges=[],this.version=0,this.uuid=Jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,o=this.stride;s<o;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const yi=new I;class ca{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyMatrix4(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.applyNormalMatrix(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)yi.fromBufferAttribute(this,e),yi.transformDirection(t),this.setXYZ(e,yi.x,yi.y,yi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=fn(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ae(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Ae(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=fn(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=fn(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=fn(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=fn(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,o){return t=t*this.data.stride+this.offset,this.normalized&&(e=Ae(e,this.array),i=Ae(i,this.array),s=Ae(s,this.array),o=Ae(o,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=o,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return new Ai(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new ca(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)e.push(this.data.array[s+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class tc extends kn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Gs;const Eo=new I,Vs=new I,Ws=new I,Xs=new kt,wo=new kt,tu=new Ne,Lr=new I,To=new I,Dr=new I,Tf=new kt,ul=new kt,Af=new kt;class eu extends Je{constructor(t=new tc){if(super(),this.isSprite=!0,this.type="Sprite",Gs===void 0){Gs=new Qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new jx(e,5);Gs.setIndex([0,1,2,0,2,3]),Gs.setAttribute("position",new ca(i,3,0,!1)),Gs.setAttribute("uv",new ca(i,2,3,!1))}this.geometry=Gs,this.material=t,this.center=new kt(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vs.setFromMatrixScale(this.matrixWorld),tu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ws.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vs.multiplyScalar(-Ws.z);const i=this.material.rotation;let s,o;i!==0&&(o=Math.cos(i),s=Math.sin(i));const r=this.center;Pr(Lr.set(-.5,-.5,0),Ws,r,Vs,s,o),Pr(To.set(.5,-.5,0),Ws,r,Vs,s,o),Pr(Dr.set(.5,.5,0),Ws,r,Vs,s,o),Tf.set(0,0),ul.set(1,0),Af.set(1,1);let l=t.ray.intersectTriangle(Lr,To,Dr,!1,Eo);if(l===null&&(Pr(To.set(-.5,.5,0),Ws,r,Vs,s,o),ul.set(0,1),l=t.ray.intersectTriangle(Lr,Dr,To,!1,Eo),l===null))return;const a=t.ray.origin.distanceTo(Eo);a<t.near||a>t.far||e.push({distance:a,point:Eo.clone(),uv:ki.getInterpolation(Eo,Lr,To,Dr,Tf,ul,Af,new kt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function Pr(n,t,e,i,s,o){Xs.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(wo.x=o*Xs.x-s*Xs.y,wo.y=s*Xs.x+o*Xs.y):wo.copy(Xs),n.copy(t),n.x+=wo.x,n.y+=wo.y,n.applyMatrix4(tu)}class ec extends kn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new Et(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const fa=new I,da=new I,Rf=new Ne,Ao=new jh,Ir=new sr,pl=new I,Cf=new I;class $x extends Je{constructor(t=new Qe,e=new ec){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,o=e.count;s<o;s++)fa.fromBufferAttribute(e,s-1),da.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=fa.distanceTo(da);t.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Ir.copy(i.boundingSphere),Ir.applyMatrix4(s),Ir.radius+=o,t.ray.intersectsSphere(Ir)===!1)return;Rf.copy(s).invert(),Ao.copy(t.ray).applyMatrix4(Rf);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,h=this.isLineSegments?2:1,f=i.index,d=i.attributes.position;if(f!==null){const u=Math.max(0,r.start),p=Math.min(f.count,r.start+r.count);for(let x=u,m=p-1;x<m;x+=h){const g=f.getX(x),M=f.getX(x+1),S=Nr(this,t,Ao,a,g,M);S&&e.push(S)}if(this.isLineLoop){const x=f.getX(p-1),m=f.getX(u),g=Nr(this,t,Ao,a,x,m);g&&e.push(g)}}else{const u=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let x=u,m=p-1;x<m;x+=h){const g=Nr(this,t,Ao,a,x,x+1);g&&e.push(g)}if(this.isLineLoop){const x=Nr(this,t,Ao,a,p-1,u);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function Nr(n,t,e,i,s,o){const r=n.geometry.attributes.position;if(fa.fromBufferAttribute(r,s),da.fromBufferAttribute(r,o),e.distanceSqToSegment(fa,da,pl,Cf)>i)return;pl.applyMatrix4(n.matrixWorld);const a=t.ray.origin.distanceTo(pl);if(!(a<t.near||a>t.far))return{distance:a,point:Cf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Lf=new I,Df=new I;class iu extends $x{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,o=e.count;s<o;s+=2)Lf.fromBufferAttribute(e,s),Df.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Lf.distanceTo(Df);t.setAttribute("lineDistance",new Re(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Pa extends kn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new Et(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Pf=new Ne,Sh=new jh,Or=new sr,Ur=new I;class ic extends Je{constructor(t=new Qe,e=new Pa){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,o=t.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(s),Or.radius+=o,t.ray.intersectsSphere(Or)===!1)return;Pf.copy(s).invert(),Sh.copy(t.ray).applyMatrix4(Pf);const l=o/((this.scale.x+this.scale.y+this.scale.z)/3),a=l*l,h=i.index,c=i.attributes.position;if(h!==null){const d=Math.max(0,r.start),u=Math.min(h.count,r.start+r.count);for(let p=d,x=u;p<x;p++){const m=h.getX(p);Ur.fromBufferAttribute(c,m),If(Ur,m,a,s,t,e,this)}}else{const d=Math.max(0,r.start),u=Math.min(c.count,r.start+r.count);for(let p=d,x=u;p<x;p++)Ur.fromBufferAttribute(c,p),If(Ur,p,a,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,r=s.length;o<r;o++){const l=s[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=o}}}}}function If(n,t,e,i,s,o,r){const l=Sh.distanceSqToPoint(n);if(l<e){const a=new I;Sh.closestPointToPoint(n,a),a.applyMatrix4(i);const h=s.ray.origin.distanceTo(a);if(h<s.near||h>s.far)return;o.push({distance:h,distanceToRay:Math.sqrt(l),point:a,index:t,face:null,faceIndex:null,barycoord:null,object:r})}}class Hi extends Ti{constructor(t,e,i,s,o,r,l,a,h){super(t,e,i,s,o,r,l,a,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class gn extends Qe{constructor(t=1,e=1,i=1,s=32,o=1,r=!1,l=0,a=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:o,openEnded:r,thetaStart:l,thetaLength:a};const h=this;s=Math.floor(s),o=Math.floor(o);const f=[],c=[],d=[],u=[];let p=0;const x=[],m=i/2;let g=0;M(),r===!1&&(t>0&&S(!0),e>0&&S(!1)),this.setIndex(f),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(u,2));function M(){const v=new I,D=new I;let R=0;const w=(e-t)/i;for(let C=0;C<=o;C++){const y=[],b=C/o,P=b*(e-t)+t;for(let O=0;O<=s;O++){const U=O/s,G=U*a+l,$=Math.sin(G),Y=Math.cos(G);D.x=P*$,D.y=-b*i+m,D.z=P*Y,c.push(D.x,D.y,D.z),v.set($,w,Y).normalize(),d.push(v.x,v.y,v.z),u.push(U,1-b),y.push(p++)}x.push(y)}for(let C=0;C<s;C++)for(let y=0;y<o;y++){const b=x[y][C],P=x[y+1][C],O=x[y+1][C+1],U=x[y][C+1];(t>0||y!==0)&&(f.push(b,P,U),R+=3),(e>0||y!==o-1)&&(f.push(P,O,U),R+=3)}h.addGroup(g,R,0),g+=R}function S(v){const D=p,R=new kt,w=new I;let C=0;const y=v===!0?t:e,b=v===!0?1:-1;for(let O=1;O<=s;O++)c.push(0,m*b,0),d.push(0,b,0),u.push(.5,.5),p++;const P=p;for(let O=0;O<=s;O++){const G=O/s*a+l,$=Math.cos(G),Y=Math.sin(G);w.x=y*Y,w.y=m*b,w.z=y*$,c.push(w.x,w.y,w.z),d.push(0,b,0),R.x=$*.5+.5,R.y=Y*.5*b+.5,u.push(R.x,R.y),p++}for(let O=0;O<s;O++){const U=D+O,G=P+O;v===!0?f.push(G,G+1,U):f.push(G+1,G,U),C+=3}h.addGroup(g,C,v===!0?1:2),g+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new gn(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const zr=new I,Fr=new I,ml=new I,kr=new ki;class Zx extends Qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),o=Math.cos(ta*e),r=t.getIndex(),l=t.getAttribute("position"),a=r?r.count:l.count,h=[0,0,0],f=["a","b","c"],c=new Array(3),d={},u=[];for(let p=0;p<a;p+=3){r?(h[0]=r.getX(p),h[1]=r.getX(p+1),h[2]=r.getX(p+2)):(h[0]=p,h[1]=p+1,h[2]=p+2);const{a:x,b:m,c:g}=kr;if(x.fromBufferAttribute(l,h[0]),m.fromBufferAttribute(l,h[1]),g.fromBufferAttribute(l,h[2]),kr.getNormal(ml),c[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,c[1]=`${Math.round(m.x*s)},${Math.round(m.y*s)},${Math.round(m.z*s)}`,c[2]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let M=0;M<3;M++){const S=(M+1)%3,v=c[M],D=c[S],R=kr[f[M]],w=kr[f[S]],C=`${v}_${D}`,y=`${D}_${v}`;y in d&&d[y]?(ml.dot(d[y].normal)<=o&&(u.push(R.x,R.y,R.z),u.push(w.x,w.y,w.z)),d[y]=null):C in d||(d[C]={index0:h[M],index1:h[S],normal:ml.clone()})}}for(const p in d)if(d[p]){const{index0:x,index1:m}=d[p];zr.fromBufferAttribute(l,x),Fr.fromBufferAttribute(l,m),u.push(zr.x,zr.y,zr.z),u.push(Fr.x,Fr.y,Fr.z)}this.setAttribute("position",new Re(u,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Ms extends Qe{constructor(t=1,e=32,i=16,s=0,o=Math.PI*2,r=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:o,thetaStart:r,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const a=Math.min(r+l,Math.PI);let h=0;const f=[],c=new I,d=new I,u=[],p=[],x=[],m=[];for(let g=0;g<=i;g++){const M=[],S=g/i;let v=0;g===0&&r===0?v=.5/e:g===i&&a===Math.PI&&(v=-.5/e);for(let D=0;D<=e;D++){const R=D/e;c.x=-t*Math.cos(s+R*o)*Math.sin(r+S*l),c.y=t*Math.cos(r+S*l),c.z=t*Math.sin(s+R*o)*Math.sin(r+S*l),p.push(c.x,c.y,c.z),d.copy(c).normalize(),x.push(d.x,d.y,d.z),m.push(R+v,1-S),M.push(h++)}f.push(M)}for(let g=0;g<i;g++)for(let M=0;M<e;M++){const S=f[g][M+1],v=f[g][M],D=f[g+1][M],R=f[g+1][M+1];(g!==0||r>0)&&u.push(S,v,R),(g!==i-1||a<Math.PI)&&u.push(v,D,R)}this.setIndex(u),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(x,3)),this.setAttribute("uv",new Re(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ms(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class nc extends Qe{constructor(t=1,e=.4,i=12,s=48,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:o},i=Math.floor(i),s=Math.floor(s);const r=[],l=[],a=[],h=[],f=new I,c=new I,d=new I;for(let u=0;u<=i;u++)for(let p=0;p<=s;p++){const x=p/s*o,m=u/i*Math.PI*2;c.x=(t+e*Math.cos(m))*Math.cos(x),c.y=(t+e*Math.cos(m))*Math.sin(x),c.z=e*Math.sin(m),l.push(c.x,c.y,c.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),d.subVectors(c,f).normalize(),a.push(d.x,d.y,d.z),h.push(p/s),h.push(u/i)}for(let u=1;u<=i;u++)for(let p=1;p<=s;p++){const x=(s+1)*u+p-1,m=(s+1)*(u-1)+p-1,g=(s+1)*(u-1)+p,M=(s+1)*u+p;r.push(x,m,M),r.push(m,g,M)}this.setIndex(r),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(a,3)),this.setAttribute("uv",new Re(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nc(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class Jx extends Mi{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class Nf extends kn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Et(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class di extends kn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new Et(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Et(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Kh,this.normalScale=new kt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new rn,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sc extends Je{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Et(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class Qx extends sc{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Et(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const gl=new Ne,Of=new I,Uf=new I;class nu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new kt(512,512),this.map=null,this.mapPass=null,this.matrix=new Ne,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new $h,this._frameExtents=new kt(1,1),this._viewportCount=1,this._viewports=[new Ce(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Of.setFromMatrixPosition(t.matrixWorld),e.position.copy(Of),Uf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Uf),e.updateMatrixWorld(),gl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(gl)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const zf=new Ne,Ro=new I,xl=new I;class tv extends nu{constructor(){super(new Fi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new kt(4,2),this._viewportCount=6,this._viewports=[new Ce(2,1,1,1),new Ce(0,1,1,1),new Ce(3,1,1,1),new Ce(1,1,1,1),new Ce(3,0,1,1),new Ce(1,0,1,1)],this._cubeDirections=[new I(1,0,0),new I(-1,0,0),new I(0,0,1),new I(0,0,-1),new I(0,1,0),new I(0,-1,0)],this._cubeUps=[new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,1,0),new I(0,0,1),new I(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,o=t.distance||i.far;o!==i.far&&(i.far=o,i.updateProjectionMatrix()),Ro.setFromMatrixPosition(t.matrixWorld),i.position.copy(Ro),xl.copy(i.position),xl.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt(xl),i.updateMatrixWorld(),s.makeTranslation(-Ro.x,-Ro.y,-Ro.z),zf.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(zf)}}class ev extends sc{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new tv}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class iv extends nu{constructor(){super(new Zh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class nv extends sc{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Je.DEFAULT_UP),this.updateMatrix(),this.target=new Je,this.shadow=new iv}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class sv{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Ff(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=Ff();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function Ff(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Bh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Bh);function Ut(n,t,e=0){let i=n*374761393+t*668265263+e*2147483647|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function ov(n,t,e,i=0){let s=n*374761393+t*668265263+e*1274126177+i*2147483647|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,s=Math.imul(s,2246822519),s^=s>>>13,(s>>>0)/4294967296}const zo=n=>n*n*(3-2*n);function rv(n,t,e){const i=Math.floor(n),s=Math.floor(t),o=zo(n-i),r=zo(t-s),l=Ut(i,s,e),a=Ut(i+1,s,e),h=Ut(i,s+1,e),f=Ut(i+1,s+1,e);return(l+(a-l)*o)*(1-r)+(h+(f-h)*o)*r}function qs(n,t,e,i){const s=Math.floor(n),o=Math.floor(t),r=Math.floor(e),l=zo(n-s),a=zo(t-o),h=zo(e-r),f=(d,u,p)=>d+(u-d)*p,c=(d,u,p)=>ov(s+d,o+u,r+p,i);return f(f(f(c(0,0,0),c(1,0,0),l),f(c(0,1,0),c(1,1,0),l),a),f(f(c(0,0,1),c(1,0,1),l),f(c(0,1,1),c(1,1,1),l),a),h)}function ai(n,t,e,i=4){let s=.5,o=1,r=0,l=0;for(let a=0;a<i;a++)r+=rv(n*o,t*o,e+a*101)*s,l+=s,s*=.5,o*=2;return r/l}const De=16,or=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","planks","cobble","water","glass","coal_ore","iron_ore","gold_ore","diamond_ore","bedrock","snow","snow_side","cactus_side","cactus_top","bricks","table_top","table_side","torch","furnace_top","furnace_front","command","obsidian","netherrack","soul_sand","glowstone","lava","nether_bricks","end_stone","end_frame_top","end_frame_side","end_frame_eye","portal","end_portal","purpur","end_bricks","chest_top","chest_side","chest_open","sandstone","mossy_cobble","ancient_debris_top","ancient_debris_side","gold_block"],Fo=Object.fromEntries(or.map((n,t)=>[n,t])),ko=or.length,su=n=>Math.max(0,Math.min(255,n));function At(n,t,e,i,s){const o=(Ut(e,i,s)-.5)*2*t;return n.map(r=>su(r+o))}const kf=(n,t)=>At([95,159,53],22,n,t,1),vl=(n,t)=>At([134,96,67],18,n,t,2),ia=(n,t)=>At([125,125,125],20,n,t,4),_l=(n,t)=>At([168,134,82],8,n,t,9).map(e=>t%4===3?e-30:e);function Br(n,t){return(e,i)=>Ut(Math.floor(e/2)+3,Math.floor(i/2),t)>.72?At(n,14,e,i,t+1):ia(e,i)}const oc={grass_top:kf,dirt:vl,grass_side:(n,t)=>t<4+(Ut(n,0,3)>.5?1:0)?kf(n,t):vl(n,t),stone:ia,sand:(n,t)=>At([219,207,142],12,n,t,5),log_side:(n,t)=>At([102,81,49],10,n,0,6).map(e=>e-(n%4===0?14:0)),log_top:(n,t)=>{const e=Math.max(Math.abs(n-7.5),Math.abs(t-7.5));return At(e%4<2?[170,135,82]:[140,110,66],8,n,t,7)},leaves:(n,t)=>At([56,118,29],30,n,t,8),planks:_l,cobble:(n,t)=>{const e=Ut(Math.floor(n/4),Math.floor(t/4),10),i=n%4===3||t%4===3;return At([110+e*40,110+e*40,110+e*40],10,n,t,11).map(s=>i?s-35:s)},water:(n,t)=>{const e=Ut(n>>1,t>>1,12)>.8?25:0;return[...At([36+e,86+e,200+e/2],8,n,t,12),175]},glass:(n,t)=>{const e=n===0||t===0||n===15||t===15,i=n===3&&t>=3&&t<=5||n===4&&t===3||n===11&&t>=10&&t<=11;return e?[215,235,245,230]:i?[255,255,255,190]:[200,225,240,0]},coal_ore:Br([30,30,30],20),iron_ore:Br([216,175,147],30),gold_ore:Br([250,220,60],40),diamond_ore:Br([70,235,225],50),bedrock:(n,t)=>At([55,55,55],32,n,t,60),snow:(n,t)=>At([240,245,250],7,n,t,61),snow_side:(n,t)=>t<4?At([240,245,250],7,n,t,61):vl(n,t),cactus_side:(n,t)=>(n===4||n===11)&&t%5===2?[230,230,200]:At([36,118,48],10,n,0,62).map(e=>n%5===2?e-18:e),cactus_top:(n,t)=>{const e=Math.max(Math.abs(n-7.5),Math.abs(t-7.5));return At(e<3?[30,100,40]:[52,140,60],8,n,t,63)},bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?At([170,168,160],8,n,t,64):At([150,72,58],14,n,t,65),table_top:(n,t)=>n===0||t===0||n===15||t===15||n===7||n===8||t===7||t===8?At([92,60,30],8,n,t,66):_l(n,t),torch:(n,t)=>n<7||n>8?[0,0,0,0]:t<2?n===7?[255,235,120,255]:[255,160,40,255]:t<4?[255,200,60,255]:At([122,86,44],10,n,t,70),command:(n,t)=>{const e=n===0||t===0||n===15||t===15,i=n===4+(t-4)&&t>=4&&t<=7||n===4+(11-t)&&t>=8&&t<=11||t===10&&n>=9&&n<=12;return e?[74,34,8,255]:i?[42,18,4,255]:At([196,114,58],18,n,t,75)},obsidian:(n,t)=>Ut(n,t,80)>.93?At([90,40,150],20,n,t,81):At([22,14,36],10,n,t,82),netherrack:(n,t)=>{const e=Ut(Math.floor(n/2),Math.floor(t/3),83)>.8;return At(e?[150,60,55]:[112,40,42],22,n,t,84)},soul_sand:(n,t)=>{const e=(n%5===1||n%5===2)&&(t%5===1||t%5===2)&&Ut(Math.floor(n/5),Math.floor(t/5),85)>.45;return At(e?[48,36,30]:[88,70,56],12,n,t,86)},glowstone:(n,t)=>{const e=Ut(Math.floor(n/3),Math.floor(t/3),87);return At(e>.55?[255,226,140]:[206,150,74],22,n,t,88)},lava:(n,t)=>{const e=Ut(Math.floor(n/2),Math.floor(t/2),89);return At(e>.7?[255,214,70]:e>.35?[248,140,24]:[214,80,14],14,n,t,90)},nether_bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?At([28,12,16],6,n,t,91):At([62,24,30],12,n,t,92),end_stone:(n,t)=>At([222,222,156],16,n,t,93).map((e,i)=>Ut(n>>1,t>>1,94)>.85?e-24:e),end_frame_top:(n,t)=>n<2||t<2||n>13||t>13?At([50,100,84],10,n,t,95):At([96,150,124],10,n,t,96),end_frame_side:(n,t)=>t<4?At([60,112,94],10,n,t,97):At([218,218,150],14,n,t,98),end_frame_eye:(n,t)=>{const e=Math.hypot(n-7.5,t-7.5);return e<2.3?[14,20,18]:e<4.4?[96,216,150]:n<2||t<2||n>13||t>13?At([50,100,84],10,n,t,95):At([96,150,124],10,n,t,96)},portal:(n,t)=>{const e=Math.sin(n*.9+t*.45)*.5+Math.sin(t*.8-n*.3)*.5;return[90+e*50+Ut(n,t,99)*30,20+e*14,190+e*40,175]},end_portal:(n,t)=>Ut(n,t,100)>.9?[150,255,230,255]:[6,16,22+Ut(n,t,101)*20,240],purpur:(n,t)=>{const e=n%8<1||t%8<1;return At(e?[140,96,140]:[172,128,172],10,n,t,110)},end_bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?At([186,186,128],6,n,t,111):At([226,226,164],10,n,t,112),chest_top:(n,t)=>n<1||t<1||n>14||t>14?At([80,52,20],6,n,t,113):At([160,112,50],10,n,t,114),chest_side:(n,t)=>n>=7&&n<=8&&t>=5&&t<=8?[214,214,214]:t===6||t===7?At([96,62,24],6,n,t,115):n<1||n>14||t>14?At([80,52,20],6,n,t,116):At([160,112,50],10,n,t,117),chest_open:(n,t)=>n<2||t<2||n>13||t>13?At([120,82,34],8,n,t,118):At([30,18,10],8,n,t,119),sandstone:(n,t)=>{const e=t%5===4;return At(e?[196,178,120]:[216,200,140],9,n,t,120)},mossy_cobble:(n,t)=>{const e=Ut(Math.floor(n/4),Math.floor(t/4),121),i=n%4===3||t%4===3;return Ut(n>>1,t>>1,122)>.55?At([70,120,50],14,n,t,123).map(o=>i?o-25:o):At([110+e*40,110+e*40,110+e*40],10,n,t,11).map(o=>i?o-35:o)},ancient_debris_top:(n,t)=>{const e=Math.max(Math.abs(n-7.5),Math.abs(t-7.5));return e>5.5?At([92,66,58],8,n,t,124):e>3?At([126,92,80],8,n,t,125):At([70,48,44],8,n,t,126)},ancient_debris_side:(n,t)=>{const e=t%5===2;return At(e?[70,48,44]:[112,80,70],9,n,t,127)},gold_block:(n,t)=>{const e=n<1||t<1||n>14||t>14;return n===2&&t<6||t===2&&n<6?[255,252,200]:e?At([200,150,20],6,n,t,128):At([250,214,60],10,n,t,129)},furnace_top:(n,t)=>n===0||t===0||n===15||t===15?At([70,70,70],8,n,t,71):ia(n,t).map(e=>e-20),furnace_front:(n,t)=>n===0||t===0||n===15?At([70,70,70],8,n,t,72):n>=4&&n<=11&&t>=8&&t<=13?t>10&&n>5&&n<10&&Ut(n,t,73)>.4?[255,150+Ut(n,t,74)*80|0,30,255]:[25,25,25,255]:n>=4&&n<=11&&t>=3&&t<=5?[30,30,30,255]:ia(n,t).map(i=>i-15),table_side:(n,t)=>t<3?At([92,60,30],8,n,t,67):n===7||n===8?At([120,90,50],8,n,t,68):_l(n,t)},Ml={};function ou(n){if(Ml[n])return Ml[n];let t=0,e=0,i=0,s=0;for(let o=0;o<De;o++)for(let r=0;r<De;r++){const l=oc[n](r,o);l[3]!==0&&(t+=l[0],e+=l[1],i+=l[2],s++)}return Ml[n]=[t/s/255,e/s/255,i/s/255]}function av(){const n=document.createElement("canvas");n.width=De*ko,n.height=De;const t=n.getContext("2d"),e=t.createImageData(n.width,De);or.forEach((s,o)=>{for(let r=0;r<De;r++)for(let l=0;l<De;l++){const a=oc[s](l,r),h=(r*n.width+o*De+l)*4;e.data[h]=a[0],e.data[h+1]=a[1],e.data[h+2]=a[2],e.data[h+3]=a[3]===void 0?255:a[3]}}),t.putImageData(e,0,0);const i=new Hi(n);return i.magFilter=xe,i.minFilter=xe,i.colorSpace=li,i.generateMipmaps=!1,{canvas:n,texture:i}}const ua={stone:3.4,cobble:4.2,bricks:4,bedrock:4.5,coal_ore:3.4,iron_ore:3.4,gold_ore:3.4,diamond_ore:3.4,planks:2.4,table_top:2.4,table_side:2.4,log_side:3.2,log_top:2.2,leaves:3.6,dirt:2.2,grass_top:2.6,grass_side:2.4,sand:1.4,snow:1,snow_side:1.4,water:.9,glass:0,torch:0,cactus_side:2.6,cactus_top:2,furnace_top:2.6,furnace_front:3,command:2.6};function Bf(n,t,e){const i=Math.floor(n),s=Math.floor(t),o=n-i,r=t-s,l=o*o*(3-2*o),a=r*r*(3-2*r),h=Ut(i,s,e),f=Ut(i+1,s,e),c=Ut(i,s+1,e),d=Ut(i+1,s+1,e);return(h+(f-h)*l)*(1-a)+(c+(d-c)*l)*a}function lv(n){const e=64/De,i=document.createElement("canvas");i.width=64*ko,i.height=64;const s=i.getContext("2d"),o=s.createImageData(i.width,64),r=document.createElement("canvas");r.width=i.width,r.height=64;const l=r.getContext("2d"),a=l.createImageData(r.width,64);or.forEach((d,u)=>{const p=Array.from({length:De*De},(S,v)=>oc[d](v%De,Math.floor(v/De))),x=(S,v)=>p[Math.max(0,Math.min(De-1,v))*De+Math.max(0,Math.min(De-1,S))],m=new Float32Array(4096);for(let S=0;S<64;S++)for(let v=0;v<64;v++){const D=(v+.5)/e-.5,R=(S+.5)/e-.5,w=Math.floor(D),C=Math.floor(R),y=D-w,b=R-C,P=x(Math.floor(v/e),Math.floor(S/e)),O=x(w,C),U=x(w+1,C),G=x(w,C+1),$=x(w+1,C+1),Y=[0,1,2].map(ot=>{const rt=(O[ot]*(1-y)+U[ot]*y)*(1-b)+(G[ot]*(1-y)+$[ot]*y)*b;let _t=P[ot]*.5+rt*.5;const jt=(Ut(v+u*97,S,1234)-.5)*16+(Bf(v*.35+u*13,S*.35,77)-.5)*22+(Bf(v*.09,S*.09+u*5,91)-.5)*18;return su(_t+jt)}),K=P[3]===void 0?255:P[3],W=(S*i.width+u*64+v)*4;o.data[W]=Y[0],o.data[W+1]=Y[1],o.data[W+2]=Y[2],o.data[W+3]=K,m[S*64+v]=(Y[0]*.3+Y[1]*.59+Y[2]*.11)/255}const g=ua[d]===void 0?2:ua[d],M=(S,v)=>m[(v+64)%64*64+(S+64)%64];for(let S=0;S<64;S++)for(let v=0;v<64;v++){const D=M(v+1,S-1)+2*M(v+1,S)+M(v+1,S+1)-(M(v-1,S-1)+2*M(v-1,S)+M(v-1,S+1)),R=M(v-1,S+1)+2*M(v,S+1)+M(v+1,S+1)-(M(v-1,S-1)+2*M(v,S-1)+M(v+1,S-1));let w=-D*g,C=R*g,y=1;const b=Math.hypot(w,C,y);w/=b,C/=b,y/=b;const P=(S*r.width+u*64+v)*4;a.data[P]=(w*.5+.5)*255,a.data[P+1]=(C*.5+.5)*255,a.data[P+2]=(y*.5+.5)*255,a.data[P+3]=255}}),s.putImageData(o,0,0),l.putImageData(a,0,0);const h=n?n.capabilities.getMaxAnisotropy():4,f=new Hi(i);f.colorSpace=li,f.magFilter=Yi,f.minFilter=Cn,f.generateMipmaps=!0,f.anisotropy=Math.min(8,h);const c=new Hi(r);return c.magFilter=Yi,c.minFilter=Cn,c.generateMipmaps=!0,c.anisotropy=Math.min(8,h),{map:f,normalMap:c}}function hv(n){const t=n.getContext("2d"),e=n.width,i=t.getImageData(0,0,e,De).data,s=document.createElement("canvas");s.width=e,s.height=De;const o=s.getContext("2d"),r=o.createImageData(e,De);or.forEach((a,h)=>{const f=(ua[a]===void 0?2:ua[a])*.45,c=(d,u)=>{const p=((u+De)%De*e+h*De+(d+De)%De)*4;return(i[p]*.3+i[p+1]*.59+i[p+2]*.11)/255};for(let d=0;d<De;d++)for(let u=0;u<De;u++){const p=c(u+1,d)-c(u-1,d),x=c(u,d+1)-c(u,d-1);let m=-p*f,g=x*f,M=1;const S=Math.hypot(m,g,M);m/=S,g/=S,M/=S;const v=(d*e+h*De+u)*4;r.data[v]=(m*.5+.5)*255,r.data[v+1]=(g*.5+.5)*255,r.data[v+2]=(M*.5+.5)*255,r.data[v+3]=255}}),o.putImageData(r,0,0);const l=new Hi(s);return l.magFilter=xe,l.minFilter=xe,l.generateMipmaps=!1,l}const ru={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class mo{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cv=new Zh(-1,1,1,-1,0,1);class fv extends Qe{constructor(){super(),this.setAttribute("position",new Re([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Re([0,2,0,0,2,0],2))}}const dv=new fv;class rc{constructor(t){this._mesh=new Mt(dv,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,cv)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class au extends mo{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof Mi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Ko.clone(t.uniforms),this.material=new Mi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new rc(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Hf extends mo{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),o=t.state;o.buffers.color.setMask(!1),o.buffers.depth.setMask(!1),o.buffers.color.setLocked(!0),o.buffers.depth.setLocked(!0);let r,l;this.inverse?(r=0,l=1):(r=1,l=0),o.buffers.stencil.setTest(!0),o.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),o.buffers.stencil.setFunc(s.ALWAYS,r,4294967295),o.buffers.stencil.setClear(l),o.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),o.buffers.color.setLocked(!1),o.buffers.depth.setLocked(!1),o.buffers.color.setMask(!0),o.buffers.depth.setMask(!0),o.buffers.stencil.setLocked(!1),o.buffers.stencil.setFunc(s.EQUAL,1,4294967295),o.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),o.buffers.stencil.setLocked(!0)}}class uv extends mo{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class pv{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new kt);this._width=i.width,this._height=i.height,e=new Ki(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:pn}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new au(ru),this.copyPass.material.blending=Pn,this.clock=new sv}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,o=this.passes.length;s<o;s++){const r=this.passes[s];if(r.enabled!==!1){if(r.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),r.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),r.needsSwap){if(i){const l=this.renderer.getContext(),a=this.renderer.state.buffers.stencil;a.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),a.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}Hf!==void 0&&(r instanceof Hf?i=!0:r instanceof uv&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new kt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let o=0;o<this.passes.length;o++)this.passes[o].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class mv extends mo{constructor(t,e,i=null,s=null,o=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=o,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Et}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let o,r;this.overrideMaterial!==null&&(r=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(o=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(o),this.overrideMaterial!==null&&(this.scene.overrideMaterial=r),t.autoClear=s}}const gv={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Et(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class ao extends mo{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new kt(t.x,t.y):new kt(256,256),this.clearColor=new Et(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);this.renderTargetBright=new Ki(o,r,{type:pn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const d=new Ki(o,r,{type:pn});d.texture.name="UnrealBloomPass.h"+c,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const u=new Ki(o,r,{type:pn});u.texture.name="UnrealBloomPass.v"+c,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),o=Math.round(o/2),r=Math.round(r/2)}const l=gv;this.highPassUniforms=Ko.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Mi({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const a=[3,5,7,9,11];o=Math.round(this.resolution.x/2),r=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(a[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new kt(1/o,1/r),o=Math.round(o/2),r=Math.round(r/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1),new I(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=ru;this.copyUniforms=Ko.clone(f.uniforms),this.blendMaterial=new Mi({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:qo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Et,this.oldClearAlpha=1,this.basic=new re,this.fsQuad=new rc(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let o=0;o<this.nMips;o++)this.renderTargetsHorizontal[o].setSize(i,s),this.renderTargetsVertical[o].setSize(i,s),this.separableBlurMaterials[o].uniforms.invSize.value=new kt(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,o){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const r=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),o&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let a=0;a<this.nMips;a++)this.fsQuad.material=this.separableBlurMaterials[a],this.separableBlurMaterials[a].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[a].uniforms.direction.value=ao.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[a]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[a].uniforms.colorTexture.value=this.renderTargetsHorizontal[a].texture,this.separableBlurMaterials[a].uniforms.direction.value=ao.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[a]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[a];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,o&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=r}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new Mi({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new kt(.5,.5)},direction:{value:new kt(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new Mi({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}ao.BlurDirectionX=new kt(1,0);ao.BlurDirectionY=new kt(0,1);const xv={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class vv extends mo{constructor(){super();const t=xv;this.uniforms=Ko.clone(t.uniforms),this.material=new Jx({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new rc(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},pe.getTransfer(this._outputColorSpace)===we&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===yd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===bd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Sd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ra?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ed?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===wd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const ne=0,_={GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,PLANKS:7,COBBLE:8,WATER:9,GLASS:10,COAL_ORE:11,IRON_ORE:12,GOLD_ORE:13,DIAMOND_ORE:14,BEDROCK:15,SNOW:16,CACTUS:17,BRICKS:18,TABLE:19,TORCH:20,FURNACE:21,COMMAND:22,OBSIDIAN:23,NETHER_PORTAL:24,NETHERRACK:25,SOUL_SAND:26,GLOWSTONE:27,LAVA:28,NETHER_BRICKS:29,END_STONE:30,END_FRAME:31,END_FRAME_EYE:32,END_PORTAL:33,PURPUR:34,END_BRICKS:35,CHEST:36,CHEST_OPEN:37,SANDSTONE:38,MOSSY_COBBLE:39,ANCIENT_DEBRIS:40,GOLD_BLOCK:41},T={STICK:100,COAL:101,IRON:102,GOLD:103,DIAMOND:104,APPLE:150,PORK:151,BEEF:152,COOKED_PORK:153,STEAK:154,STAR:105,PEARL:106,LIGHTER:107,EYE:108,ELYTRA:109,DONUT:160,DUFF:161,SENZU:162,DBALL:163,NETHERITE:170,SCRAP:171,LEATHER:172,CHICKEN:155,COOKED_CHICKEN:156},qe={};function te(n,t,e,i,s=null,o=0,r={}){qe[n]={id:n,name:t,tiles:e,hardness:i,tool:s,lvl:o,opaque:!0,liquid:!1,...r}}te(_.GRASS,"Hierba",["grass_top","dirt","grass_side"],.6,"shovel");te(_.DIRT,"Tierra",["dirt","dirt","dirt"],.5,"shovel");te(_.STONE,"Piedra",["stone","stone","stone"],1.5,"pick",1);te(_.SAND,"Arena",["sand","sand","sand"],.5,"shovel");te(_.LOG,"Tronco",["log_top","log_top","log_side"],2,"axe");te(_.LEAVES,"Hojas",["leaves","leaves","leaves"],.2);te(_.PLANKS,"Tablones",["planks","planks","planks"],2,"axe");te(_.COBBLE,"Adoquín",["cobble","cobble","cobble"],2,"pick",1);te(_.WATER,"Agua",["water","water","water"],100,null,0,{opaque:!1,liquid:!0,transparent:!0});te(_.GLASS,"Cristal",["glass","glass","glass"],.3,null,0,{opaque:!1,transparent:!0});te(_.COAL_ORE,"Mena de carbón",["coal_ore","coal_ore","coal_ore"],3,"pick",1);te(_.IRON_ORE,"Mena de hierro",["iron_ore","iron_ore","iron_ore"],3,"pick",2);te(_.GOLD_ORE,"Mena de oro",["gold_ore","gold_ore","gold_ore"],3,"pick",3);te(_.DIAMOND_ORE,"Mena de diamante",["diamond_ore","diamond_ore","diamond_ore"],3,"pick",3);te(_.BEDROCK,"Lecho de roca",["bedrock","bedrock","bedrock"],1/0);te(_.SNOW,"Nieve",["snow","dirt","snow_side"],.3,"shovel");te(_.CACTUS,"Cactus",["cactus_top","cactus_top","cactus_side"],.4);te(_.BRICKS,"Ladrillos",["bricks","bricks","bricks"],2,"pick",1);te(_.TABLE,"Mesa de crafteo",["table_top","planks","table_side"],2.5,"axe");te(_.TORCH,"Antorcha",["torch","torch","torch"],.05,null,0,{opaque:!1,torch:!0,flat:!0,emit:10});te(_.COMMAND,"Bloque de comandos",["command","command","command"],5,"pick",3);te(_.OBSIDIAN,"Obsidiana",["obsidian","obsidian","obsidian"],50,"pick",4);te(_.NETHER_PORTAL,"Portal del Nether",["portal","portal","portal"],1/0,null,0,{opaque:!1,transparent:!0,portal:!0,glow:!0});te(_.NETHERRACK,"Netherrack",["netherrack","netherrack","netherrack"],.4,"pick");te(_.SOUL_SAND,"Arena de almas",["soul_sand","soul_sand","soul_sand"],.5,"shovel");te(_.GLOWSTONE,"Piedra luminosa",["glowstone","glowstone","glowstone"],.3,null,0,{glow:!0,emit:10});te(_.LAVA,"Lava",["lava","lava","lava"],1/0,null,0,{opaque:!1,liquid:!0,glow:!0,emit:10});te(_.NETHER_BRICKS,"Ladrillos del Nether",["nether_bricks","nether_bricks","nether_bricks"],2,"pick",1);te(_.END_STONE,"Piedra del End",["end_stone","end_stone","end_stone"],3,"pick",1);te(_.END_FRAME,"Marco del portal del End",["end_frame_top","end_stone","end_frame_side"],1/0);te(_.END_FRAME_EYE,"Marco del End con ojo",["end_frame_eye","end_stone","end_frame_side"],1/0);te(_.END_PORTAL,"Portal del End",["end_portal","end_portal","end_portal"],1/0,null,0,{opaque:!1,transparent:!0,portal:!0,glow:!0});te(_.PURPUR,"Purpur",["purpur","purpur","purpur"],1.5,"pick",1);te(_.END_BRICKS,"Ladrillos del End",["end_bricks","end_bricks","end_bricks"],2,"pick",1);te(_.CHEST,"Cofre",["chest_top","chest_top","chest_side"],2.5,"axe");te(_.CHEST_OPEN,"Cofre abierto",["chest_open","chest_top","chest_side"],2.5,"axe");te(_.SANDSTONE,"Arenisca",["sandstone","sandstone","sandstone"],.8,"pick",1);te(_.MOSSY_COBBLE,"Adoquín musgoso",["mossy_cobble","mossy_cobble","mossy_cobble"],2,"pick",1);te(_.ANCIENT_DEBRIS,"Restos antiguos",["ancient_debris_top","ancient_debris_top","ancient_debris_side"],30,"pick",4);te(_.GOLD_BLOCK,"Bloque de oro",["gold_block","gold_block","gold_block"],3,"pick",3);te(_.FURNACE,"Horno",["furnace_top","stone","furnace_front"],3,"pick",1);const hn=new Uint8Array(256),jo=new Uint8Array(256),xn=new Uint8Array(256),lu=new Uint8Array(256),na=new Uint8Array(256);for(const n of Object.values(qe))hn[n.id]=n.opaque?1:0,jo[n.id]=n.liquid||n.torch||n.portal?0:1,n.portal&&(lu[n.id]=1),n.emit&&(na[n.id]=n.emit),xn[n.id]=n.liquid?1:0;const Fe={};function Oe(n,t,e={}){Fe[n]={id:n,name:t,stack:64,...e}}Oe(T.STICK,"Palo");Oe(T.COAL,"Carbón");Oe(T.IRON,"Lingote de hierro");Oe(T.GOLD,"Lingote de oro");Oe(T.DIAMOND,"Diamante");Oe(T.STAR,"Estrella de la tormenta");Oe(T.PEARL,"Perla de Ender");Oe(T.LIGHTER,"Encendedor",{stack:1,uses:64});Oe(T.EYE,"Ojo de Ender");Oe(T.ELYTRA,"Élitros",{stack:1});Oe(T.DONUT,"Dona rosquilla",{food:12});Oe(T.DUFF,"Cerveza Duff",{food:5});Oe(T.SENZU,"Semilla del ermitaño",{food:20,heal:!0});Oe(T.DBALL,"Esfera del dragón",{stack:7});Oe(T.NETHERITE,"Lingote de netherita");Oe(T.SCRAP,"Fragmento de netherita");Oe(T.LEATHER,"Cuero");Oe(T.CHICKEN,"Pollo crudo",{food:4});Oe(T.COOKED_CHICKEN,"Pollo asado",{food:12});Oe(T.APPLE,"Manzana",{food:8});Oe(T.PORK,"Cerdo crudo",{food:6});Oe(T.BEEF,"Ternera cruda",{food:6});Oe(T.COOKED_PORK,"Cerdo asado",{food:14});Oe(T.STEAK,"Filete",{food:16});const hu=[{n:"de madera",color:[176,140,84],speed:2,dur:59,lvl:1,mat:_.PLANKS,dmgB:0},{n:"de piedra",color:[140,140,140],speed:4,dur:131,lvl:2,mat:_.COBBLE,dmgB:1},{n:"de hierro",color:[225,225,225],speed:6,dur:250,lvl:3,mat:T.IRON,dmgB:2},{n:"de diamante",color:[90,235,225],speed:8,dur:1561,lvl:4,mat:T.DIAMOND,dmgB:3},{n:"de oro",color:[250,215,60],speed:12,dur:32,lvl:1,mat:T.GOLD,dmgB:0},{n:"de netherita",color:[78,68,76],speed:9,dur:2031,lvl:5,mat:T.NETHERITE,dmgB:4}],ac=[{n:"de cuero",color:[160,100,60],pts:[1,3,2,1],dur:80,mat:T.LEATHER},{n:"de oro",color:[250,215,60],pts:[2,5,3,1],dur:90,mat:T.GOLD},{n:"de hierro",color:[225,225,225],pts:[2,6,5,2],dur:240,mat:T.IRON},{n:"de diamante",color:[90,235,225],pts:[3,8,6,3],dur:528,mat:T.DIAMOND},{n:"de netherita",color:[78,68,76],pts:[4,9,7,4],dur:592,mat:T.NETHERITE}],_v=[{t:"head",name:"Casco",rows:["MMM","M M"],dm:1},{t:"chest",name:"Peto",rows:["M M","MMM","MMM"],dm:1.45},{t:"legs",name:"Grebas",rows:["MMM","M M","M M"],dm:1.35},{t:"feet",name:"Botas",rows:["M M","M M"],dm:1.15}],$o=(n,t)=>200+n*10+t,Mv=[{t:"pick",name:"Pico",base:110,dmg:2,rows:["MMM"," S "," S "]},{t:"axe",name:"Hacha",base:120,dmg:3,rows:["MM","MS"," S"]},{t:"shovel",name:"Pala",base:130,dmg:2,rows:["M","S","S"]},{t:"sword",name:"Espada",base:140,dmg:4,rows:["M","M","S"]}],cu=[];function pi(n,t,e,i=1){cu.push({pattern:n,key:t,out:e,n:i})}Mv.forEach(n=>hu.forEach((t,e)=>{const i=n.base+e;Oe(i,`${n.name} ${t.n}`,{stack:1,tool:{type:n.t,tier:e,speed:t.speed,dur:t.dur,lvl:t.lvl,dmg:n.dmg+t.dmgB},color:t.color}),e===5?pi(["T","N"],{T:n.base+3,N:T.NETHERITE},i):pi(n.rows,{M:t.mat,S:T.STICK},i)}));_v.forEach((n,t)=>ac.forEach((e,i)=>{const s=$o(t,i);Oe(s,`${n.name} ${e.n}`,{stack:1,armor:{slot:t,pts:e.pts[t],tier:i,dur:Math.round(e.dur*n.dm)},color:e.color}),i===4?pi(["A","N"],{A:$o(t,3),N:T.NETHERITE},s):pi(n.rows,{M:e.mat},s)}));pi(["SG","GS"],{S:T.SCRAP,G:T.GOLD},T.NETHERITE);pi(["L"],{L:_.LOG},_.PLANKS,4);pi(["P","P"],{P:_.PLANKS},T.STICK,4);pi(["PP","PP"],{P:_.PLANKS},_.TABLE);pi(["SS","SS"],{S:_.SAND},_.GLASS,4);pi(["CC","CC"],{C:_.COBBLE},_.BRICKS,4);pi(["CCC","C C","CCC"],{C:_.COBBLE},_.FURNACE);pi(["C","S"],{C:T.COAL,S:T.STICK},_.TORCH,4);pi(["CCC","CDC","CCC"],{C:_.COBBLE,D:T.DIAMOND},_.OBSIDIAN,2);pi(["I","C"],{I:T.IRON,C:T.COAL},T.LIGHTER);pi(["P","C"],{P:T.PEARL,C:T.COAL},T.EYE);pi(["OOO","ODO","OOO"],{O:_.OBSIDIAN,D:T.DIAMOND},_.END_FRAME,4);pi(["DGD","GCG","DGD"],{D:T.DIAMOND,G:T.GOLD,C:T.COAL},_.COMMAND);const yv={[_.IRON_ORE]:[T.IRON,1],[_.GOLD_ORE]:[T.GOLD,1],[_.COBBLE]:[_.STONE,1],[_.SAND]:[_.GLASS,1],[_.LOG]:[T.COAL,1],[T.PORK]:[T.COOKED_PORK,1],[T.BEEF]:[T.STEAK,1],[T.CHICKEN]:[T.COOKED_CHICKEN,1],[_.ANCIENT_DEBRIS]:[T.SCRAP,1]},Gf={[T.COAL]:80,[_.LOG]:15,[_.PLANKS]:15,[_.TABLE]:15,[T.STICK]:5},fu=8;function lo(n){return qe[n]||Fe[n]}function Tn(n){const t=lo(n);return qe[n]?64:t.stack}const bv=n=>!!qe[n],du=n=>!qe[n]||!!qe[n].flat;function Sv(n,t){let e=t,i=-1,s=t,o=-1;for(let a=0;a<t;a++)for(let h=0;h<t;h++)n[a*t+h]&&(e=Math.min(e,a),i=Math.max(i,a),s=Math.min(s,h),o=Math.max(o,h));if(i<0)return null;const r=i-e+1,l=o-s+1;for(const a of cu)if(!(a.pattern.length!==r||a.pattern[0].length!==l))for(const h of[!1,!0]){let f=!0;for(let c=0;c<r&&f;c++)for(let d=0;d<l;d++){const u=a.pattern[c][h?l-1-d:d],p=u===" "?0:a.key[u];if(n[(e+c)*t+s+d]!==p){f=!1;break}}if(f)return a}return null}function Ss(n){return n&&Fe[n.id]&&Fe[n.id].tool}function uu(n,t){const e=qe[n];if(!e.lvl)return!0;const i=Ss(t);return!!i&&i.type==="pick"&&i.lvl>=e.lvl}function Ev(n,t){const e=qe[n];if(e.hardness===1/0)return 1/0;const i=Ss(t),s=i&&e.tool&&i.type===e.tool,o=uu(n,t),r=s?i.speed:1;return e.hardness*(o?1.5:5)/r}function pu(n,t){if(!uu(n,t))return null;switch(n){case _.GRASS:return[_.DIRT,1];case _.STONE:return[_.COBBLE,1];case _.COAL_ORE:return[T.COAL,1];case _.DIAMOND_ORE:return[T.DIAMOND,1];case _.LEAVES:return Math.random()<.1?[T.APPLE,1]:null;case _.CHEST_OPEN:return[_.CHEST,1];case _.GOLD_BLOCK:return[T.GOLD,9];case _.GLASS:case _.WATER:case _.LAVA:case _.NETHER_PORTAL:case _.END_PORTAL:case _.END_FRAME:case _.END_FRAME_EYE:return null;default:return[n,1]}}let lc=null;const yl=new Map,bl=new Map,Sl=new Map;function wv(n){lc=n}function Tv(n){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");e.imageSmoothingEnabled=!1;const i=qe[n],s=(o,r,l)=>{e.save(),e.setTransform(...r),e.drawImage(lc,Fo[o]*16,0,16,16,0,0,16,16),l&&(e.fillStyle=`rgba(0,0,0,${l})`,e.fillRect(0,0,16,16)),e.restore()};return s(i.tiles[0],[.875,.4375,-.875,.4375,16,4],0),s(i.tiles[2],[.875,.4375,0,.875,2,11],.22),s(i.tiles[2],[.875,-.4375,0,.875,16,18],.42),t}function vt(n,t,e){n.fillStyle=e;for(const[i,s]of t)n.fillRect(i,s,1,1)}const Eh=n=>`rgb(${n[0]},${n[1]},${n[2]})`,El=(n,t)=>Eh(n.map(e=>Math.max(0,Math.min(255,e*t))));function Av(n){const t=document.createElement("canvas");t.width=t.height=16;const e=t.getContext("2d"),i="#7a5a30",s=()=>{for(let r=2;r<=11;r++)vt(e,[[r,15-r]],i)},o=Fe[n]||{};if(n===_.TORCH){for(let r=6;r<=14;r++)vt(e,[[7,r],[8,r]],r%2?"#7a5630":"#6a4a28");vt(e,[[7,4],[8,4],[7,5],[8,5]],"#ffc83c"),vt(e,[[7,3],[8,3]],"#ff9a28"),vt(e,[[7,2]],"#ffeb78")}else if(o.armor){const r=ac[o.armor.tier].color,l=Eh(r),a=El(r,.68),h=El(r,1.2),f=(c,d,u)=>{for(let p=d;p<=u;p++)vt(e,[[p,c]],c>9?a:(p+c)%5===0?h:l)};if(o.armor.slot===0){f(3,5,10),f(4,4,11);for(const c of[5,6,7])f(c,3,12);f(8,3,4),f(8,11,12),f(9,3,4),f(9,11,12)}else if(o.armor.slot===1){f(3,2,5),f(3,10,13),f(4,2,13),f(5,2,4),f(5,11,13),f(5,6,9);for(let c=6;c<=13;c++)f(c,4,11),c<10&&(f(c,2,3),f(c,12,13))}else if(o.armor.slot===2){for(let c=3;c<=6;c++)f(c,4,11);for(let c=7;c<=13;c++)f(c,4,7),f(c,8,11)}else{for(let c=8;c<=12;c++)f(c,3,7),f(c,9,13);f(13,2,7),f(13,9,14)}o.armor.tier===4&&vt(e,[[7,5],[8,5]],"#8a5ac8")}else if(n===T.DONUT){for(let r=3;r<=12;r++)for(let l=3;l<=12;l++){const a=Math.hypot(l-7.5,r-7.5);a<5&&a>1.8&&vt(e,[[l,r]],a>3.6?"#d89a50":"#ff7ab0")}vt(e,[[5,5],[9,4],[10,8],[6,10],[4,8],[8,11]],"#fff"),vt(e,[[7,4],[11,7],[5,7]],"#4ac0ff")}else if(n===T.DUFF){for(let r=3;r<=13;r++)for(let l=5;l<=10;l++)vt(e,[[l,r]],r<4||r>12?"#b8b8b8":r>=7&&r<=9?"#f4f4f4":"#1a5fc0");vt(e,[[6,8],[7,8],[9,8]],"#d02020")}else if(n===T.SENZU){for(let r=3;r<=12;r++)for(let l=4;l<=11;l++){const a=Math.hypot((l-7.5)*1.25+(r-7.5)*.4,(r-7.5)*.9);a<4.2&&vt(e,[[l,r]],a<2?"#8ae860":"#4fb830")}vt(e,[[6,5],[7,5]],"#d8ffb0")}else if(n===T.DBALL){for(let r=2;r<=13;r++)for(let l=2;l<=13;l++){const a=Math.hypot(l-7.5,r-7.5);a<5.6&&vt(e,[[l,r]],a<3.2?"#ffb020":"#e07808")}vt(e,[[7,6],[8,6],[6,7],[9,7],[7,9],[8,9]],"#d02010"),vt(e,[[7,7],[8,7],[7,8],[8,8]],"#fff0a0"),vt(e,[[5,4],[6,4]],"#fff0c0")}else if(n===T.NETHERITE){for(let r=5;r<=10;r++)for(let l=3;l<=12;l++)vt(e,[[l,r]],r>=9?"#2a2228":(l+r)%4===0?"#6a5a66":"#4e444c");vt(e,[[5,6],[6,6],[10,8]],"#c8a850")}else if(n===T.SCRAP)vt(e,[[6,5],[7,5],[8,5],[5,6],[6,6],[7,6],[8,6],[9,6],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[6,8],[7,8],[8,8],[9,8],[7,9],[8,9]],"#4a3a40"),vt(e,[[6,6],[7,6]],"#8a7480");else if(n===T.LEATHER){for(let r=4;r<=11;r++)for(let l=3;l<=12;l++)vt(e,[[l,r]],(l+r)%3===0?"#a8683a":"#8a5230");vt(e,[[3,4],[12,4],[3,11],[12,11]],"rgba(0,0,0,0)"),vt(e,[[5,7],[7,7],[9,7]],"#d8b080")}else if(o.tool){const r=hu[o.tool.tier].color,l=El(r,.7),a=Eh(r);s();const h=o.tool.type;if(h==="pick")vt(e,[[5,2],[6,1],[7,1],[8,1],[9,1],[10,2],[11,3],[12,4],[12,5],[4,3],[3,4],[3,5]],a),vt(e,[[6,2],[7,2],[8,2],[9,2],[10,3],[11,4]],l);else if(h==="axe")vt(e,[[7,2],[8,2],[9,2],[6,3],[7,3],[8,3],[9,3],[10,3],[8,4],[9,4],[10,4],[9,5]],a),vt(e,[[7,4],[8,5],[10,5]],l);else if(h==="shovel")vt(e,[[11,2],[12,2],[10,3],[11,3],[12,3],[13,3],[11,4],[12,4],[13,4],[12,5],[13,5],[12,1],[13,2]],a),vt(e,[[11,4],[12,5]],l);else{for(let f=0;f<9;f++)vt(e,[[5+f,10-f],[6+f,10-f]],f%2?a:l);vt(e,[[12,1],[13,2],[13,1]],a),vt(e,[[4,9],[5,10],[6,11],[3,8],[4,11],[5,12]],"#5a4020")}}else if(n===T.STICK)s(),vt(e,[[12,3]],i);else if(n===T.COAL)vt(e,[[5,5],[6,4],[7,4],[8,4],[9,5],[10,6],[10,7],[9,9],[8,10],[6,10],[5,9],[4,7],[4,6],[6,5],[7,5],[8,5],[9,6],[9,7],[8,9],[7,9],[6,9],[5,8],[5,6],[6,6],[7,6],[8,6],[8,7],[8,8],[7,8],[6,8],[5,7],[6,7],[7,7]],"#262626"),vt(e,[[7,5],[6,6]],"#555");else if(n===T.IRON||n===T.GOLD){const r=n===T.IRON?"#d8d8d8":"#f2d230",l=n===T.IRON?"#9a9a9a":"#b89412";for(let a=5;a<=10;a++)for(let h=3;h<=12;h++)vt(e,[[h,a]],a>=9?l:r);vt(e,[[3,5],[12,5],[3,10],[12,10]],"rgba(0,0,0,0)")}else if(n===T.DIAMOND)vt(e,[[7,3],[8,3],[6,4],[7,4],[8,4],[9,4],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[6,6],[7,6],[8,6],[9,6],[7,7],[8,7],[7,8]],"#5aebe1"),vt(e,[[7,4],[6,5],[7,6]],"#c8fffa"),vt(e,[[9,5],[8,6],[8,7],[7,8]],"#2aa8a0");else if(n===T.APPLE){vt(e,[[5,5],[6,4],[7,5],[8,4],[9,4],[10,5],[4,6],[11,6],[4,7],[11,7],[5,9],[6,10],[9,10],[10,9],[11,8],[4,8]],"#d22");for(let r=5;r<=9;r++)for(let l=5;l<=10;l++)vt(e,[[l,r]],"#e33");vt(e,[[6,5],[6,6]],"#fcc"),vt(e,[[8,2],[9,3]],"#5a3a10"),vt(e,[[9,2],[10,2]],"#3a3")}else if(n===T.PORK||n===T.BEEF){const r=n===T.PORK?"#f0a0a0":"#b83a3a",l=n===T.PORK?"#c87070":"#8a2020";for(let a=4;a<=11;a++)for(let h=3+(a<6?2:0);h<=12-(a>9?2:0);h++)vt(e,[[h,a]],(h+a)%5===0?l:r);vt(e,[[10,5],[11,5],[11,6]],"#f6f0e0")}else if(n===T.STAR)vt(e,[[7,1],[8,1],[7,2],[8,2],[7,3],[8,3],[1,6],[2,6],[3,6],[4,6],[11,6],[12,6],[13,6],[14,6],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[3,6],[5,9],[6,9],[9,9],[10,9],[4,11],[5,11],[10,11],[11,11],[4,12],[11,12],[3,13],[12,13],[6,6],[7,6],[8,6],[9,6],[7,4],[8,4]],"#fff1a8"),vt(e,[[7,6],[8,6],[7,7],[8,7]],"#ffffff"),vt(e,[[5,8],[10,8],[6,9],[9,9]],"#e8c640");else if(n===T.ELYTRA){for(let r=-1;r<=1;r+=2)for(let l=0;l<7;l++)for(let a=0;a<9-l;a++){const h=8+r*(l+1)-(r<0?1:0),f=3+a+Math.floor(l/2);vt(e,[[h,f]],(l+a)%3===0?"#9aa4b0":"#7e8a98")}vt(e,[[7,3],[8,3],[7,4],[8,4],[7,5],[8,5]],"#52606e")}else if(n===T.LIGHTER){for(let r=7;r<=13;r++)for(let l=4;l<=10;l++)vt(e,[[l,r]],r<9?"#9a9a9a":"#6a6a6a");vt(e,[[8,6],[9,5],[9,4],[8,3],[9,2]],"#ff9a28"),vt(e,[[9,4],[9,3]],"#ffe070"),vt(e,[[6,8],[7,8]],"#d8d8d8")}else if(n===T.EYE){for(let r=3;r<=12;r++)for(let l=3;l<=12;l++)Math.hypot(l-7.5,r-7.5)<4.6&&vt(e,[[l,r]],Math.hypot(l-7.5,r-7.5)<2?"#101a14":"#3fae78");vt(e,[[5,5],[6,5],[5,6]],"#a8ffd8")}else if(n===T.PEARL){for(let r=3;r<=12;r++)for(let l=3;l<=12;l++)Math.hypot(l-7.5,r-7.5)<4.6&&vt(e,[[l,r]],Math.hypot(l-7.5,r-7.5)<3?"#1f8f6a":"#0e5a44");vt(e,[[6,5],[7,5],[5,6],[6,6]],"#a8ffd8"),vt(e,[[9,9],[10,8]],"#52d8a8")}else if(n===T.CHICKEN||n===T.COOKED_CHICKEN){const r=n===T.CHICKEN?"#f2c4b0":"#c8883a",l=n===T.CHICKEN?"#d49a84":"#8a5420";for(let a=4;a<=10;a++)for(let h=4;h<=11;h++)Math.hypot(h-7.5,a-7)<4&&vt(e,[[h,a]],(h+a)%4===0?l:r);vt(e,[[10,10],[11,11],[12,12],[12,11],[11,12]],"#f6f0e0")}else if(n===T.COOKED_PORK||n===T.STEAK){const r=n===T.STEAK?"#8a4a22":"#c8884c",l=n===T.STEAK?"#5e2e12":"#a06030";for(let a=4;a<=11;a++)for(let h=3+(a<6?2:0);h<=12-(a>9?2:0);h++)vt(e,[[h,a]],(h+a)%4===0?l:r);vt(e,[[10,5],[11,5],[11,6]],"#f6f0e0"),vt(e,[[5,6],[6,7],[7,8],[8,9]],l)}else vt(e,[[7,7]],"#fff");return t}function mu(n){if(Sl.has(n))return Sl.get(n);const t=qe[n]&&!qe[n].flat?Tv(n):Av(n);return Sl.set(n,t),t}function gu(n){return yl.has(n)||yl.set(n,mu(n).toDataURL()),yl.get(n)}function hc(n){if(!bl.has(n)){const t=new Hi(mu(n));t.magFilter=xe,t.minFilter=xe,t.generateMipmaps=!1,t.colorSpace=li,bl.set(n,t)}return bl.get(n)}function wl(n,t,e){const i=document.createElement("canvas");i.width=9,i.height=9;const s=i.getContext("2d");return n.forEach((o,r)=>[...o].forEach((l,a)=>{const h=t(l,a);h&&(s.fillStyle=h,s.fillRect(a,r,1,1))})),i.toDataURL()}const Rv=[".##...##.","#RR#.#RR#","#RHRRRRR#","#RRRRRRR#",".#RRRRR#.","..#RRR#..","...#R#...","....#....","........."],Cv=["......##.",".....#CC#","....#CHC#","...#CCC#.","..#CCC#..",".#CCC#...","#WW##....","#WW#.....",".##......"],Lv=["..#####..",".#BBBBB#.","#BHBBBBB#","#BHBBBBB#","#BBBBBBB#","#BBBBBBB#",".#BBBBB#.","..#####..","........."];function Dv(){const n=i=>wl(Rv,(s,o)=>{if(s===".")return null;const r=i==="empty"||i==="half"&&o>4;return s==="#"?"#1a0505":r?"#4a3a3a":s==="H"?"#ff9c9c":"#e02222"}),t=i=>wl(Cv,(s,o)=>s==="."?null:s==="#"?"#2a1405":s==="W"?i==="empty"?"#555":"#f4efe4":i==="empty"||i==="half"&&o>4?"#4a3d30":s==="H"?"#e8a05a":"#c8782b"),e=i=>wl(Lv,s=>s==="."?null:s==="#"?"#0a2a5a":i==="empty"?"rgba(120,170,230,0.25)":s==="H"?"#d8f0ff":"#5aa8f0");return{heart:{full:n("full"),half:n("half"),empty:n("empty")},food:{full:t("full"),half:t("half"),empty:t("empty")},bubble:{full:e("full"),empty:e("empty")}}}function Pv(n){const t=document.createElement("canvas");t.width=t.height=16;const e=Fo[n];return t.getContext("2d").drawImage(lc,e*16,0,16,16,0,0,16,16),t.toDataURL()}const $e=(n,t)=>new di(t?{color:n,map:t}:{color:n});function Hr(n){const t=document.createElement("canvas");t.width=t.height=8,n(t.getContext("2d"));const e=new Hi(t);return e.magFilter=xe,e.minFilter=xe,e.generateMipmaps=!1,e.colorSpace=li,e}function Gr(n,t,e,i,s,o,r){const l=new Se;l.position.set(s,o,r);const a=new Mt(new Yt(n,t,e),i);return a.position.y=-t/2,l.add(a),l}class Iv{constructor(t){const e="#e0ac8c",i="#3a2412",r=Hr(m=>{m.fillStyle=e,m.fillRect(0,0,8,8),m.fillStyle=i,m.fillRect(0,0,8,2),m.fillRect(0,2,1,2),m.fillRect(7,2,1,2),m.fillStyle="#fff",m.fillRect(1,3,2,1),m.fillRect(5,3,2,1),m.fillStyle="#3a56c8",m.fillRect(2,3,1,1),m.fillRect(5,3,1,1),m.fillStyle="#a0603c",m.fillRect(3,5,2,1)}),l=Hr(m=>{m.fillStyle=i,m.fillRect(0,0,8,8)}),a=Hr(m=>{m.fillStyle=e,m.fillRect(0,0,8,8),m.fillStyle=i,m.fillRect(0,0,8,2)}),h=Hr(m=>{m.fillStyle=i,m.fillRect(0,0,8,8)}),f=$e(14724236);this.group=new Se;const c=new Se;this.group.add(c),this.head=new Se,this.head.position.set(0,1.5,0);const d=new Mt(new Yt(.5,.5,.5),[$e(16777215,a),$e(16777215,a),$e(16777215,l),f,$e(16777215,r),$e(16777215,h)]);d.position.y=.25,this.head.add(d),c.add(this.head);const u=new Mt(new Yt(.5,.75,.25),$e(2794936));u.position.y=1.125,c.add(u),this.legL=Gr(.25,.75,.25,$e(3817372),-.125,.75,0),this.legR=Gr(.25,.75,.25,$e(3817372),.125,.75,0),this.legL.children[0].material=$e(3817372),c.add(this.legL,this.legR),this.armL=Gr(.22,.72,.22,[$e(2794936),$e(2794936),$e(2794936),f,$e(2794936),$e(2794936)],-.36,1.48,0),this.armR=Gr(.22,.72,.22,[$e(2794936),$e(2794936),$e(2794936),f,$e(2794936),$e(2794936)],.36,1.48,0),c.add(this.armL,this.armR),this.itemMat=new re({transparent:!0,side:Ei,alphaTest:.1}),this.item=new Mt(new On(.55,.55),this.itemMat),this.item.position.set(0,-.68,.22),this.item.rotation.set(0,0,0),this.armR.add(this.item),this.item.visible=!1,this.heldId=-1;const p=()=>new di({color:16777215});this.armorMats=[p(),p(),p(),p()];const x=(m,g,M,S,v,D,R,w)=>{const C=new Mt(new Yt(m,g,M),S);return C.position.set(D,R,w),C.visible=!1,v.add(C),C};this.armorMeshes=[[x(.58,.58,.58,this.armorMats[0],this.head,0,.25,0)],[x(.56,.78,.31,this.armorMats[1],c,0,1.125,0),x(.26,.5,.26,this.armorMats[1],this.armL,0,-.2,0),x(.26,.5,.26,this.armorMats[1],this.armR,0,-.2,0)],[x(.52,.28,.3,this.armorMats[2],c,0,.78,0),x(.28,.5,.28,this.armorMats[2],this.legL,0,-.25,0),x(.28,.5,.28,this.armorMats[2],this.legR,0,-.25,0)],[x(.29,.28,.31,this.armorMats[3],this.legL,0,-.61,.01),x(.29,.28,.31,this.armorMats[3],this.legR,0,-.61,.01)]],this.armorKey="",this.t=0,t.add(this.group),this.group.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),this.group.visible=!1}setArmor(t){const e=t.map(i=>i?i.id:0).join(",");e!==this.armorKey&&(this.armorKey=e,t.forEach((i,s)=>{const o=i&&Fe[i.id]&&Fe[i.id].armor;for(const r of this.armorMeshes[s])r.visible=!!o;if(o){const r=ac[o.tier].color;this.armorMats[s].color.setRGB(r[0]/255,r[1]/255,r[2]/255)}}))}setHeld(t){t!==this.heldId&&(this.heldId=t,this.item.visible=!!t,t&&(this.itemMat.map=hc(t),this.itemMat.needsUpdate=!0))}update(t,e,i,s){this.group.position.copy(e.pos),this.group.rotation.y=e.yaw+Math.PI;const o=Math.hypot(e.vel.x,e.vel.z),r=o>.3&&(e.onGround||e.inWater);this.t+=t*(r?4+o*1.2:0);const l=r?Math.sin(this.t)*.9:0;this.legL.rotation.x=l,this.legR.rotation.x=-l,this.armL.rotation.x=-l*.8;let a=l*.8;i>0?a=-Math.sin(Math.min(1,i)*Math.PI)*1.8-.5:this.heldId&&(a=-.5+l*.3),this.armR.rotation.x=a,this.head.rotation.x=-e.pitch;const h=Math.sin(performance.now()/700)*.02;this.armL.rotation.z=-.04-h,this.armR.rotation.z=.04+h,e.flying&&(this.group.rotation.x=0)}}const Nv={clear:0,rain:.65,storm:1},wh={clear:"Despejado",rain:"Lluvia",storm:"Tormenta"},fi=(n,t)=>n+Math.random()*(t-n),Co=1800,vi=22;class Ov{constructor(t,e){this.scene=t,this.hooks=e,this.state="clear",this.timer=fi(90,240),this.intensity=0,this.t=Math.random()*100,this.wind={x:0,z:0,s:.12},this.lightningT=6,this.bolts=[],this.thunder=[],this.boss=!1,this.pos=new Float32Array(Co*3);for(let o=0;o<Co;o++)this.pos[o*3]=fi(-vi,vi),this.pos[o*3+1]=fi(-8,22),this.pos[o*3+2]=fi(-vi,vi);const i=new Qe;this.linePos=new Float32Array(Co*6),i.setAttribute("position",new Ai(this.linePos,3)),this.rain=new iu(i,new ec({color:11453674,transparent:!0,opacity:.55,fog:!1,depthWrite:!1})),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain);const s=new Qe;this.ptPos=new Float32Array(Co*3),s.setAttribute("position",new Ai(this.ptPos,3)),this.snow=new ic(s,new Pa({color:16777215,size:3.5,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1})),this.snow.frustumCulled=!1,this.snow.visible=!1,t.add(this.snow),this.boltMat=new re({color:15922431,fog:!1})}set(t){this.state=t,this.timer=t==="clear"?fi(120,360):t==="rain"?fi(90,200):fi(80,170)}cycle(){const t=["clear","rain","storm"];return this.set(t[(t.indexOf(this.state)+1)%3]),this.state}next(){const t=Math.random();return this.state==="clear"?t<.65?"rain":t<.85?"storm":"clear":this.state==="rain"?t<.55?"clear":"storm":t<.5?"rain":"clear"}toJSON(){return{state:this.state,timer:this.timer,intensity:this.intensity}}load(t){t&&(this.state=t.state,this.timer=t.timer,this.intensity=t.intensity)}update(t,e,i,s,o){const r=this.hooks.world();this.t+=t,this.timer-=t,this.timer<=0&&this.set(this.next());const l=Nv[this.state];this.intensity+=Math.sign(l-this.intensity)*Math.min(Math.abs(l-this.intensity),t*.08);const a=this.intensity,h=Math.sin(this.t*.02)*1.6+.8,f=.55+.45*Math.sin(this.t*.35)*Math.sin(this.t*.13+1),d=.12+((this.state==="storm"?1:this.state==="rain"?.45:.12)-.12)*Math.min(1,a*1.5+(this.state==="clear",0))*f;this.wind.s+=(d-this.wind.s)*Math.min(1,t*1.5),this.wind.x=Math.cos(h)*this.wind.s,this.wind.z=Math.sin(h)*this.wind.s;const u=i.position,p=a>.04&&!o;if(this.rain.visible=p&&!s,this.snow.visible=p&&s,p){const m=Math.floor(Co*Math.min(1,a*(this.state==="storm"?1:.8))),g=s?2.4:26,M=s?1.5:9,S=this.wind.x*M,v=this.wind.z*M;for(let D=0;D<m;D++){let R=this.pos[D*3]+S*t,w=this.pos[D*3+1]-g*t*(s?1:.85+D%7*.05),C=this.pos[D*3+2]+v*t;s&&(R+=Math.sin(this.t*1.3+D)*t*.6,C+=Math.cos(this.t*1.1+D*.7)*t*.6),R>vi?R-=2*vi:R<-vi&&(R+=2*vi),C>vi?C-=2*vi:C<-vi&&(C+=2*vi);const y=u.x+R,b=u.z+C,P=r?r.topY(Math.floor(y),Math.floor(b)):-1;if((w+u.y<P+1||w<-14)&&(w=fi(10,24),R=fi(-vi,vi),C=fi(-vi,vi)),this.pos[D*3]=R,this.pos[D*3+1]=w,this.pos[D*3+2]=C,s)this.ptPos[D*3]=u.x+R,this.ptPos[D*3+1]=u.y+w,this.ptPos[D*3+2]=u.z+C;else{const O=D*6,U=.9;this.linePos[O]=u.x+R,this.linePos[O+1]=u.y+w,this.linePos[O+2]=u.z+C,this.linePos[O+3]=u.x+R-S*.06,this.linePos[O+4]=u.y+w+U,this.linePos[O+5]=u.z+C-v*.06}}s?(this.snow.geometry.setDrawRange(0,m),this.snow.geometry.attributes.position.needsUpdate=!0):(this.rain.geometry.setDrawRange(0,m*2),this.rain.geometry.attributes.position.needsUpdate=!0),this.rain.material.opacity=.35+.3*a}this.state==="storm"&&a>.7&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=this.boss?fi(2.5,6):fi(4,14),this.strike(e)));const x=this.hooks.sky();x.wet=a,x.flash=Math.max(0,x.flash-t*2.2);for(let m=this.bolts.length-1;m>=0;m--){const g=this.bolts[m];g.life-=t,g.group.visible=g.life>.12||Math.floor(g.life*40)%2===0,g.life<=0&&(this.scene.remove(g.group),g.group.traverse(M=>M.geometry&&M.geometry.dispose()),this.bolts.splice(m,1))}for(let m=this.thunder.length-1;m>=0;m--)this.thunder[m].delay-=t,this.thunder[m].delay<=0&&(this.hooks.sound("thunder",this.thunder[m].vol),this.thunder.splice(m,1))}strike(t,e,i){const s=this.hooks.world(),o=Math.random()*Math.PI*2,r=e?6:fi(18,110),l=Math.floor(i?i.x+fi(-2,2):t.pos.x+Math.cos(o)*r),a=Math.floor(i?i.z+fi(-2,2):t.pos.z+Math.sin(o)*r),h=s.topY(l,a),f=h>=0,c=f?h+1:30,d=Math.hypot(l-t.pos.x,a-t.pos.z);if(this.hooks.sky().flash=Math.min(1,1.15-d/220),this.thunder.push({delay:d/55,vol:Math.max(.25,1-d/150)}),!f||d>150)return;const u=new Se;let p=l+.5,x=a+.5,m=c+85;const g=16;for(let M=1;M<=g;M++){const S=c+85-(c+85-c)*M/g,v=3.2*(1-M/g),D=M===g?l+.5:l+.5+fi(-v,v),R=M===g?a+.5:a+.5+fi(-v,v),w=new I(p,m,x),C=new I(D,S,R),y=w.distanceTo(C),b=new Mt(new gn(.16,.16,y,4),this.boltMat);b.position.copy(w).add(C).multiplyScalar(.5),b.quaternion.setFromUnitVectors(new I(0,1,0),C.clone().sub(w).normalize()),u.add(b),p=D,m=S,x=R}this.scene.add(u),this.bolts.push({group:u,life:.45}),this.hooks.burst(l+.5,c+.3,a+.5),this.hooks.strikeMobs(l+.5,a+.5),d<3.5&&this.hooks.hurtPlayer(8)}}function Es(n,t,e,i=28){const s={onGround:!1,hitX:!1,hitZ:!1};t.vel.y=Math.max(-50,t.vel.y-i*e);const o=()=>{for(let r=Math.floor(t.pos.y);r<=Math.floor(t.pos.y+t.h-.001);r++)for(let l=Math.floor(t.pos.z-t.hw);l<=Math.floor(t.pos.z+t.hw);l++)for(let a=Math.floor(t.pos.x-t.hw);a<=Math.floor(t.pos.x+t.hw);a++)if(n.isSolid(a,r,l))return!0;return!1};for(const r of["x","z","y"]){const l=t.vel[r]*e;l&&(t.pos[r]+=l,o()&&(t.pos[r]-=l,r==="y"&&t.vel.y<0&&(s.onGround=!0),r==="x"&&(s.hitX=!0),r==="z"&&(s.hitZ=!0),t.vel[r]=0))}return s}class Uv{constructor(t,e){this.scene=t,this.world=e,this.list=[]}spawn(t,e,i,s,o=1,r=!0){const l=new tc({map:hc(s),transparent:!0,alphaTest:.1}),a=new eu(l),h=qe[s]?.32:.42;a.scale.set(h,h,h),this.scene.add(a);const f=Math.random()*Math.PI*2;this.list.push({id:s,n:o,sprite:a,base:h,age:0,hw:.12,h:.25,pos:new I(t,e,i),vel:new I(r?Math.cos(f)*1.6:0,r?4:0,r?Math.sin(f)*1.6:0)})}update(t,e,i,s){for(let o=this.list.length-1;o>=0;o--){const r=this.list[o];r.age+=t,Es(this.world,r,t,22).onGround&&(r.vel.x*=.8,r.vel.z*=.8);const a=Math.sin(r.age*3)*.05+.22;r.sprite.position.set(r.pos.x,r.pos.y+a,r.pos.z);const h=e.pos.x-r.pos.x,f=e.pos.z-r.pos.z,c=e.pos.y+.9-r.pos.y,d=Math.hypot(h,c,f);if(r.age>.6&&d<2.2&&i.canAdd(r.id)&&(r.vel.x=h*6,r.vel.z=f*6,r.vel.y=Math.max(r.vel.y,c*5),r.pos.x+=h*t*6,r.pos.z+=f*t*6,d<.9)){const u=i.add(r.id,r.n);if(u===0){this.remove(o),s(r);continue}r.n=u}(r.age>300||r.pos.y<-10)&&this.remove(o)}}remove(t){const e=this.list[t];this.scene.remove(e.sprite),e.sprite.material.dispose(),this.list.splice(t,1)}clear(){for(;this.list.length;)this.remove(0)}}class zv{constructor(t,e){this.world=e,this.pool=[];const i=new Yt(.12,.12,.12);for(let s=0;s<90;s++){const o=new Mt(i,new re({color:16777215}));o.visible=!1,t.add(o),this.pool.push({mesh:o,life:0,vel:new I})}this.next=0}burst(t,e,i,s,o=10,r=3){for(let l=0;l<o;l++){const a=this.pool[this.next++%this.pool.length];a.life=.5+Math.random()*.4,a.mesh.visible=!0,a.mesh.position.set(t+(Math.random()-.5),e+(Math.random()-.5),i+(Math.random()-.5)),a.mesh.material.color.setRGB(s[0]*(.7+Math.random()*.3),s[1]*(.7+Math.random()*.3),s[2]*(.7+Math.random()*.3)),a.vel.set((Math.random()-.5)*r,Math.random()*r*.9,(Math.random()-.5)*r)}}blockBreak(t,e,i,s){const o=qe[s];o&&this.burst(t+.5,e+.5,i+.5,ou(o.tiles[2]),14,3.2)}update(t){for(const e of this.pool)if(!(e.life<=0)){if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.vel.y-=16*t,e.mesh.position.addScaledVector(e.vel,t)}}}const Z=16,he=128,ii=30,Ci=(n,t)=>(n+32768)*65536+(t+32768),Vf=n=>Math.floor(n/65536)-32768,Wf=n=>n%65536-32768,Th=[{dir:[-1,0,0],shade:.9,ax:0,corners:[{p:[0,1,0],uv:[0,1]},{p:[0,0,0],uv:[0,0]},{p:[0,1,1],uv:[1,1]},{p:[0,0,1],uv:[1,0]}]},{dir:[1,0,0],shade:.9,ax:0,corners:[{p:[1,1,1],uv:[0,1]},{p:[1,0,1],uv:[0,0]},{p:[1,1,0],uv:[1,1]},{p:[1,0,0],uv:[1,0]}]},{dir:[0,-1,0],shade:.75,ax:1,bottom:!0,corners:[{p:[1,0,1],uv:[1,0]},{p:[0,0,1],uv:[0,0]},{p:[1,0,0],uv:[1,1]},{p:[0,0,0],uv:[0,1]}]},{dir:[0,1,0],shade:1,ax:1,top:!0,corners:[{p:[0,1,1],uv:[1,1]},{p:[1,1,1],uv:[0,1]},{p:[0,1,0],uv:[1,0]},{p:[1,1,0],uv:[0,0]}]},{dir:[0,0,-1],shade:.82,ax:2,corners:[{p:[1,0,0],uv:[0,0]},{p:[0,0,0],uv:[1,0]},{p:[1,1,0],uv:[0,1]},{p:[0,1,0],uv:[1,1]}]},{dir:[0,0,1],shade:.82,ax:2,corners:[{p:[0,0,1],uv:[0,0]},{p:[1,0,1],uv:[1,0]},{p:[0,1,1],uv:[0,1]},{p:[1,1,1],uv:[1,1]}]}];for(const n of Th)n.tan=[0,1,2].filter(t=>t!==n.ax);const Xf=[.5,.68,.84,1],Bo=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Rn(n,t,e){const i=ai(n*.0022,t*.0022,e,4),s=ai(n*.0055,t*.0055,e+31,3),o=1-Math.abs(2*ai(n*.011,t*.011,e+37,3)-1),r=ai(n*.013,t*.013,e+7,3),l=ai(n*.05,t*.05,e+9,2);let a,h=0;if(i<.4)a=ii-2-(.4-i)*80+l*3;else{const u=Math.min(1,(i-.4)/.5);a=ii+1+u*10+r*12+l*3,h=Bo(.52,.78,s)*Bo(.45,.6,i),a+=h*(o*62+14)}if(i>=.4&&h<.5){const u=Math.abs(ai(n*.0032+11,t*.0032-7,e+61,2)-.5);if(u<.016){const p=Bo(.016,.004,u);a=a*(1-p)+(ii-2)*p}}a=Math.max(6,Math.min(he-8,Math.floor(a)));const f=ai(n*.0035,t*.0035,e+500,2),c=ai(n*.004,t*.004,e+900,2);let d;return a<=ii-1?d="ocean":h>.3?d="mountains":f<.34?d="snow":f>.64?d=c>.55?"jungle":"desert":d=f>.55&&c>.6?"jungle":"plains",{h:a,biome:d,m:h,t:f,hm:c}}const qf=(n,t,e)=>Rn(n,t,e).h;function Yf(n,t,e){return Rn(n,t,e).biome}function cc(){return Array.from({length:10},(n,t)=>{const e=t/10*Math.PI*2;return{x:Math.round(Math.cos(e)*36),z:Math.round(Math.sin(e)*36),top:78+t%5*7}})}class Fv{constructor(t,e,i=1337,s=new Map,o="overworld"){this.dim=o,this.scene=t,this.materials=e,this.seed=i,this.saved=s,this.chunks=new Map,this.tops=new Map,this.meshes=new Map,this.dirty=new Set,this.modified=new Set,this.unsaved=new Set,this.unloadT=0,this.torches=new Map,this._lm=null,this.onChunkMeshed=null}idx(t,e,i){return(e*Z+i)*Z+t}generateChunk(t,e){const i=Ci(t,e);if(this.saved.has(i)){let c=new Uint8Array(this.saved.get(i));if(c.length!==Z*Z*he){const d=new Uint8Array(Z*Z*he);d.set(c.subarray(0,Math.min(c.length,d.length))),c=d}return this.chunks.set(i,c),this.modified.add(i),this.computeTops(i,c),this.scanTorches(i,c),c}if(this.kind==="oneblock"&&this.dim==="overworld"){const c=new Uint8Array(Z*Z*he);return t===0&&e===0&&(c[this.idx(0,64,0)]=_.GRASS),this.chunks.set(i,c),this.computeTops(i,c),c}if(this.dim==="nether")return this.genNether(t,e,i);if(this.dim==="end")return this.genEnd(t,e,i);const s=this.seed,o=new Uint8Array(Z*Z*he),r=t*Z,l=e*Z;for(let c=0;c<Z;c++)for(let d=0;d<Z;d++){const u=r+d,p=l+c,x=Rn(u,p,s),m=x.h,g=x.biome;let M=_.GRASS,S=_.DIRT;g==="ocean"||m<=ii+1||g==="desert"?(M=_.SAND,S=_.SAND):g==="snow"?M=_.SNOW:g==="mountains"&&(m>92?(M=_.SNOW,S=_.SNOW):m>64&&(M=_.STONE,S=_.STONE));for(let v=0;v<=m&&v<he;v++){let D=_.STONE;if(v===m)D=M;else if(v>=m-3)D=S;else{const R=Ut(u*31+v,p*17-v,s+77+v);v<64&&R<.025?D=_.COAL_ORE:v<48&&R>.975&&R<.99?D=_.IRON_ORE:v<28&&R>.99&&R<.996?D=_.GOLD_ORE:v<16&&R>.996&&(D=_.DIAMOND_ORE)}if((v===0||v===1&&Ut(u,p,s+3)<.5)&&(D=_.BEDROCK),v>2&&v<m-1&&D!==_.BEDROCK){const R=qs(u*.045,v*.07,p*.045,s+11),w=qs(u*.045+50,v*.07+50,p*.045+50,s+13),C=qs(u*.025,v*.045,p*.025,s+17);(Math.abs(R-.5)<.055&&Math.abs(w-.5)<.055||C>.8)&&(D=ne)}o[this.idx(d,v,c)]=D}for(let v=m+1;v<=ii;v++)o[this.idx(d,v,c)]=_.WATER}const a=(c,d,u,p,x)=>{const m=c-r,g=u-l;if(m<0||g<0||m>=Z||g>=Z||d>=he||d<0)return;const M=this.idx(m,d,g);x&&o[M]!==ne||(o[M]=p)},h=this.villagesNear(r,l),f=this.structuresNear(r,l);for(let c=l-3;c<l+Z+3;c++)for(let d=r-3;d<r+Z+3;d++){const u=Ut(d,c,s+99);if(u>.06)continue;const p=Rn(d,c,s),x=p.h,m=p.biome;if(x<=ii+1||m==="ocean"||m==="mountains"||h.some(R=>Math.abs(R.x-d)<26&&Math.abs(R.z-c)<26)||f.some(R=>Math.abs(R.x-d)<14&&Math.abs(R.z-c)<14))continue;if(m==="desert"){if(u<.004){const R=1+Math.floor(Ut(d,c,s+6)*3);for(let w=1;w<=R;w++)a(d,x+w,c,_.CACTUS,!1)}continue}const g=ai(d*.012,c*.012,s+800,2)>.58;if(u>(m==="jungle"?.055:g?.03:m==="snow"?.007:.005))continue;const S=m==="jungle",v=S?8+Math.floor(Ut(d,c,s+5)*6):4+Math.floor(Ut(d,c,s+5)*3),D=S?3:2;for(let R=-2;R<=1;R++){const w=R<=-1?D:D-1;for(let C=-w;C<=w;C++)for(let y=-w;y<=w;y++)w>=2&&Math.abs(y)===w&&Math.abs(C)===w||a(d+y,x+v+R,c+C,_.LEAVES,!0)}for(let R=1;R<=v;R++)a(d,x+R,c,_.LOG,!1)}for(const c of h)this.buildVillage(c,a);{const c={data:o,x0:r,z0:l};for(const d of f)this.buildStructure(d,c)}return this.chunks.set(i,o),this.computeTops(i,o),this.scanTorches(i,o),o}structureAt(t,e){const i="s"+t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);const s=this.seed;let o=null;if(Ut(t,e,s+7700)<.75){const r=t*176+36+Math.floor(Ut(t,e,s+7701)*104),l=e*176+36+Math.floor(Ut(t,e,s+7702)*104),a=Rn(r,l,s);if(a.biome!=="ocean"&&a.biome!=="mountains"&&a.h>ii+1&&a.h<ii+26){const h=Ut(t,e,s+7703);let f=null;a.biome==="desert"?f=h<.6?"pyramid":"ruin":a.biome==="jungle"?f=h<.6?"jungle":"ruin":a.biome==="snow"?f=h<.6?"igloo":"ruin":f=h<.5?"outpost":"ruin";let c=!1;for(let d=Math.floor((r-70)/128);d<=Math.floor((r+70)/128);d++)for(let u=Math.floor((l-70)/128);u<=Math.floor((l+70)/128);u++){const p=this.villageAt(d,u);p&&Math.abs(p.x-r)<70&&Math.abs(p.z-l)<70&&(c=!0)}c||(o={type:f,x:r,z:l,H:a.h})}}return this.vcache.set(i,o),o}structuresNear(t,e){const i=[];for(let s=Math.floor((t-24)/176);s<=Math.floor((t+Z+24)/176);s++)for(let o=Math.floor((e-24)/176);o<=Math.floor((e+Z+24)/176);o++){const r=this.structureAt(s,o);r&&Math.abs(r.x-t-8)<36&&Math.abs(r.z-e-8)<36&&i.push(r)}return i}_mix(t,e,i,s,o,r,l,a,h,f,c){const d=Math.max(Math.min(e,o),t.x0),u=Math.min(Math.max(e,o),t.x0+Z-1),p=Math.max(Math.min(s,l),t.z0),x=Math.min(Math.max(s,l),t.z0+Z-1);for(let m=Math.max(0,Math.min(i,r));m<=Math.min(he-1,Math.max(i,r));m++)for(let g=p;g<=x;g++)for(let M=d;M<=u;M++)t.data[this.idx(M-t.x0,m,g-t.z0)]=Ut(M*3+m,g*5-m,this.seed+c)<f?h:a}buildStructure(t,e){const i=(h,f,c,d,u,p,x)=>this._fill(e,t.x+h,t.H+f,t.z+c,t.x+d,t.H+u,t.z+p,x),s=(h,f,c,d,u,p,x,m,g,M)=>this._mix(e,t.x+h,t.H+f,t.z+c,t.x+d,t.H+u,t.z+p,x,m,g,M),o=_.SANDSTONE,r=_.CHEST,l=_.TORCH,a=ne;if(t.type==="pyramid"){i(-10,-8,-10,10,0,10,o);for(let h=0;h<=10;h++)i(-10+h,1+h,-10+h,10-h,1+h,10-h,o);i(-7,1,-7,7,8,7,a),i(-1,1,6,1,3,13,a),i(-2,0,11,2,0,13,o),i(-2,-3,-2,2,0,2,a),i(0,-4,0,0,-4,0,_.GOLD_BLOCK);for(const[h,f]of[[-2,0],[2,0],[0,-2],[0,2]])i(h,-3,f,h,-3,f,r);for(const[h,f]of[[-6,-6],[6,-6],[-6,6],[6,6]])i(h,1,f,h,4,f,o),i(h,5,f,h,5,f,l);for(const h of[-4,0,4])i(h,1,-6,h,1,-6,_.CHEST)}else if(t.type==="jungle"){s(-7,-5,-6,7,-1,6,_.COBBLE,_.MOSSY_COBBLE,.4,1),s(-7,0,-6,7,5,6,_.COBBLE,_.MOSSY_COBBLE,.55,2),i(-6,1,-5,6,4,5,a),s(-5,6,-4,5,10,4,_.COBBLE,_.MOSSY_COBBLE,.6,3),i(-4,6,-3,4,9,3,a),s(-3,11,-2,3,12,2,_.COBBLE,_.MOSSY_COBBLE,.6,4),i(-1,1,5,1,3,7,a),s(-3,0,7,3,0,9,_.COBBLE,_.MOSSY_COBBLE,.5,5),i(-4,1,-4,-4,1,-4,r),i(4,1,-4,4,1,-4,r),i(0,6,-3,0,6,-3,r);for(const[h,f]of[[-5,-4],[5,-4],[-5,4],[5,4]])i(h,2,f,h,2,f,l);for(let h=0;h<5;h++)i(-3,1,-2+h,-3,1+h,-2+h,_.MOSSY_COBBLE);i(-3,5,-2,-3,5,2,a)}else if(t.type==="igloo"){for(let h=-5;h<=5;h++)for(let f=-5;f<=5;f++)for(let c=-3;c<=5;c++){const d=Math.hypot(h,c,f);let u=-1;c<0?Math.hypot(h,f)<=4.2&&(u=_.SNOW):d<=3.1?u=c===0?_.PLANKS:a:d<=4.3&&(u=_.SNOW),u>=0&&i(h,c,f,h,c,f,u)}i(-2,0,2,2,3,7,_.SNOW),i(-1,0,2,1,0,7,_.PLANKS),i(-1,1,2,1,2,7,a),i(-2,1,-2,-2,1,-2,_.TABLE),i(2,1,-2,2,1,-2,_.FURNACE),i(0,1,2,0,1,2,r),i(0,1,-3,0,1,-3,l),i(2,1,2,2,1,2,l)}else if(t.type==="outpost"){i(-4,-5,-4,4,0,4,_.COBBLE),i(-3,1,-3,3,22,3,a);for(let h=1;h<=17;h++)i(-3,h,-3,3,h,-3,_.PLANKS),i(-3,h,3,3,h,3,_.PLANKS),i(-3,h,-3,-3,h,3,_.PLANKS),i(3,h,-3,3,h,3,_.PLANKS);for(const[h,f]of[[-3,-3],[3,-3],[-3,3],[3,3]])i(h,1,f,h,18,f,_.LOG);for(const h of[4,10,15])for(const[f,c]of[[0,-3],[0,3],[-3,0],[3,0]])i(f===0?-1:f,h,c===0?-1:c,f===0?1:f,h+1,c===0?1:c,_.GLASS);i(-1,1,3,1,3,3,a);for(const h of[1,7,13]){i(-2,h+6,-2,2,h+6,2,_.PLANKS);for(let f=0;f<5;f++)i(-2+f,h+1,-2,-2+f,h+1+f,-2,_.PLANKS);i(-2,h+6,-2,0,h+6,-2,a),i(-2,h+6,-1,-1,h+6,-1,a)}i(-4,19,-4,4,19,4,_.PLANKS);for(const[h,f]of[[-4,-4],[4,-4],[-4,4],[4,4]])i(h,20,f,h,21,f,_.LOG),i(h,22,f,h,22,f,l);i(-3,20,-3,-3,20,3,_.PLANKS),i(3,20,-3,3,20,3,_.PLANKS),i(-3,20,-3,3,20,-3,_.PLANKS),i(-3,20,3,3,20,3,_.PLANKS),i(2,1,2,2,1,2,r),i(-2,14,2,-2,14,2,r),i(2,8,-1,2,8,-1,r),i(0,18,0,0,18,0,l)}else if(t.type==="ruin"){for(let h=0;h<4;h++)for(let f=0;f<5;f++)(h===0||h===3||f===0||f===4)&&!((h===0||h===3)&&(f===0||f===4))&&Ut(t.x+h*7,t.z+f*11,this.seed+7710)<.72&&i(h,f,0,h,f,0,_.OBSIDIAN);for(let h=0;h<9;h++){const f=Math.floor(Ut(t.x+h,t.z,this.seed+7711)*9)-4,c=Math.floor(Ut(t.x,t.z+h,this.seed+7712)*7)-3;i(f,0,c,f,0,c,h%3?_.NETHERRACK:_.MOSSY_COBBLE)}i(-2,1,1,-2,1,1,_.GOLD_BLOCK),i(2,0,2,2,0,2,r),i(1,0,3,1,0,3,_.NETHERRACK)}}villageAt(t,e){const i=t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);const s=this.seed;let o=null;if(Ut(t,e,s+444)<.3){const r=t*128+28+Math.floor(Ut(t,e,s+445)*72),l=e*128+28+Math.floor(Ut(t,e,s+446)*72),a=Rn(r,l,s);a.biome!=="ocean"&&a.biome!=="mountains"&&a.h>ii+1&&a.h<ii+20&&[[12,0],[-12,0],[0,12],[0,-12],[10,10],[-10,-10]].every(([f,c])=>{const d=Rn(r+f,l+c,s);return Math.abs(d.h-a.h)<=3&&d.biome!=="ocean"})&&(o={x:r,z:l,H:a.h,biome:a.biome})}return this.vcache.set(i,o),o}villagesNear(t,e){const i=[];for(let s=Math.floor((t-40)/128);s<=Math.floor((t+Z+40)/128);s++)for(let o=Math.floor((e-40)/128);o<=Math.floor((e+Z+40)/128);o++){const r=this.villageAt(s,o);r&&i.push(r)}return i}buildVillage(t,e){const i=this.seed,s=t.H,o=t.biome==="desert"?_.SAND:_.PLANKS,r=_.PLANKS;for(let u=-2;u<=2;u++)for(let p=-2;p<=2;p++){const x=Math.abs(u)===2||Math.abs(p)===2;for(let m=s-3;m<=s;m++)e(t.x+u,m,t.z+p,x?_.COBBLE:_.WATER,!1);for(let m=s+1;m<=s+6;m++)e(t.x+u,m,t.z+p,0,!1);x&&e(t.x+u,s+1,t.z+p,_.COBBLE,!1)}for(const[u,p]of[[-2,-2],[2,-2],[-2,2],[2,2]])for(let x=s+2;x<=s+4;x++)e(t.x+u,x,t.z+p,_.LOG,!1);for(let u=-2;u<=2;u++)for(let p=-2;p<=2;p++)e(t.x+u,s+5,t.z+p,_.PLANKS,!1);[[-14,-8],[14,-8],[-14,10],[14,10],[0,-16],[0,17],[-16,-24],[16,-24]].forEach(([u,p],x)=>{if(Ut(t.x+u,t.z+p,i+5)<(x>5?.45:.12)&&x>3)return;const m=t.x+u,g=t.z+p,M=Math.abs(u)>Math.abs(p)?-Math.sign(u):0,S=M?0:-Math.sign(p);for(let v=0;v<40;v++){const D=m+M*(4+v),R=g+S*(4+v);if(Math.abs(D-t.x)<3&&Math.abs(R-t.z)<3)break;e(D,s,R,_.COBBLE,!1);for(let w=s+1;w<=s+3;w++)e(D,w,R,0,!1)}for(let v=-4;v<=4;v++)for(let D=-4;D<=4;D++){const R=m+v,w=g+D,C=qf(R,w,i);for(let y=Math.max(1,C-1);y<=s-1;y++)e(R,y,w,_.COBBLE,!1);for(let y=s+1;y<=s+9;y++)e(R,y,w,0,!1);Math.abs(v)<=3&&Math.abs(D)<=3&&e(R,s,w,r,!1)}for(let v=-3;v<=3;v++)for(let D=-3;D<=3;D++){if(Math.abs(v)!==3&&Math.abs(D)!==3)continue;const R=Math.abs(v)===3&&Math.abs(D)===3;for(let w=s+1;w<=s+3;w++){let C=R?_.LOG:o;!R&&(Math.abs(v)===3&&D===0||Math.abs(D)===3&&v===0)&&w===s+2&&(C=_.GLASS),v===M*3&&D===S*3&&w<=s+2&&(C=0),e(m+v,w,g+D,C,!1)}}for(let v=4,D=s+4;v>=0;v--,D++)for(let R=-v;R<=v;R++)for(let w=-v;w<=v;w++)e(m+R,D,g+w,v===0?_.LOG:_.PLANKS,!1);e(m-2,s+1,g-2,_.TORCH,!1),e(m+2,s+1,g-2,_.TABLE,!1),e(m+2,s+1,g+2,_.FURNACE,!1),e(m-2,s+1,g+2,_.TORCH,!1),e(m+M*4+S,s+1,g+S*4+M,_.TORCH,!1);for(let v=6;v<40;v+=7){const D=m+M*(4+v),R=g+S*(4+v);if(Math.abs(D-t.x)<4&&Math.abs(R-t.z)<4)break;const w=D+S*2,C=R+M*2;for(let y=s;y<=s+3;y++)e(w,y,C,y===s?_.COBBLE:_.LOG,!1);e(w,s+4,C,_.TORCH,!1)}});const a=(u,p,x,m,g)=>{for(let M=-x-1;M<=x+1;M++)for(let S=-m-1;S<=m+1;S++){const v=u+M,D=p+S,R=qf(v,D,i);for(let w=Math.max(1,R-1);w<=s-1;w++)e(v,w,D,_.COBBLE,!1);for(let w=s+1;w<=s+g.h+6;w++)e(v,w,D,0,!1);Math.abs(M)<=x&&Math.abs(S)<=m&&e(v,s,D,g.floor||_.PLANKS,!1)}for(let M=-x;M<=x;M++)for(let S=-m;S<=m;S++){if(Math.abs(M)!==x&&Math.abs(S)!==m)continue;const v=Math.abs(M)===x&&Math.abs(S)===m;for(let D=s+1;D<=s+g.h;D++){let R=v?_.LOG:g.wall;!v&&D===s+2&&(Math.abs(M)===x&&S%3===0||Math.abs(S)===m&&M%3===0)&&(R=_.GLASS),M===g.door[0]*x&&S===g.door[1]*m&&D<=s+2&&(R=0),e(u+M,D,p+S,R,!1)}}for(let M=-x-1;M<=x+1;M++)for(let S=-m-1;S<=m+1;S++)e(u+M,s+g.h+1,p+S,g.roof,!1);g.inside(u,p)},h=t.x-30,f=t.z;a(h,f,4,3,{h:4,wall:_.COBBLE,roof:_.PLANKS,floor:_.COBBLE,door:[1,0],inside:(u,p)=>{e(u-3,s+1,p-2,_.FURNACE,!1),e(u-3,s+1,p+2,_.FURNACE,!1),e(u-3,s+1,p,_.CHEST,!1),e(u,s+1,p-2,_.TABLE,!1),e(u+2,s+1,p+2,_.TORCH,!1),e(u-1,s+1,p+2,_.TORCH,!1)}});const c=t.x+32,d=t.z-2;a(c,d,5,3,{h:5,wall:_.COBBLE,roof:_.PLANKS,floor:_.COBBLE,door:[-1,0],inside:(u,p)=>{e(u+4,s+1,p,_.GOLD_BLOCK,!1),e(u+4,s+2,p,_.TORCH,!1),e(u+4,s+1,p-2,_.CHEST,!1),e(u-2,s+1,p-2,_.TORCH,!1),e(u-2,s+1,p+2,_.TORCH,!1);for(let x=s+6;x<=s+16;x++)for(let m=6;m<=9;m++)for(let g=-2;g<=1;g++){const M=m===6||m===9||g===-2||g===1;e(u+m,x,p+g,M?x===s+11?_.GLASS:_.COBBLE:0,!1)}for(let x=6;x<=9;x++)for(let m=-2;m<=1;m++)e(u+x,s+17,p+m,_.COBBLE,!1);e(u+7,s+18,p,_.GLOWSTONE,!1)}}),a(t.x,t.z+30,4,3,{h:4,wall:_.PLANKS,roof:_.LOG,door:[0,-1],inside:(u,p)=>{for(const[x,m]of[[-3,-2],[3,-2],[-3,2],[3,2]])e(u+x,s+1,p+m,_.TABLE,!1);e(u,s+1,p+2,_.CHEST,!1),e(u-2,s+1,p,_.CHEST,!1),e(u,s+1,p-2,_.TORCH,!1),e(u+2,s+1,p,_.TORCH,!1)}})}scanTorches(t,e){let i=null;const s=Z*Z;for(let o=0;o<e.length;o++){const r=e[o];if(!(!r||!na[r])){if(r===_.LAVA){const l=o%Z,a=Math.floor(o/Z)%Z;if(l+a&1||e[o+s]!==0)continue}(i||(i=new Set)).add(o)}}i?this.torches.set(t,i):this.torches.delete(t)}genNether(t,e,i){const s=this.seed+7001,o=new Uint8Array(Z*Z*he),r=t*Z,l=e*Z;for(let f=0;f<Z;f++)for(let c=0;c<Z;c++){const d=r+c,u=l+f;for(let p=0;p<he;p++){let x=0;if(p===0||p===he-1||p===1&&Ut(d,u,s+1)<.5||p===he-2&&Ut(d,u,s+2)<.5)x=_.BEDROCK;else{const m=qs(d*.022,p*.04,u*.022,s+301)*.65+qs(d*.06,p*.09,u*.06,s+302)*.35,g=Math.abs(p-62)/62;m+.62*g*g>.72||p>=he-3?x=_.NETHERRACK:x=p<=31?_.LAVA:ne}o[this.idx(c,p,f)]=x}}const a=Z*Z;for(let f=0;f<Z;f++)for(let c=0;c<Z;c++){const d=r+c,u=l+f,p=qs(d*.05,0,u*.05,s+303)>.56;for(let x=2;x<he-3;x++){const m=this.idx(c,x,f);if(o[m]!==_.NETHERRACK)continue;const g=o[m+a],M=o[m-a];g===ne&&x>32&&p?o[m]=_.SOUL_SAND:M===ne&&x>84&&Ut(d*7+x,u*3,s+310)<.02?o[m]=_.GLOWSTONE:x<27&&Ut(d*11+x,u*7-x,s+312)<.0045?o[m]=_.ANCIENT_DEBRIS:Ut(d*13+x,u*5-x,s+311)<.006&&(o[m]=_.GOLD_ORE)}}const h={data:o,x0:r,z0:l};for(const f of this.fortressesNear(r,l))this.buildFortress(f,h);return this.chunks.set(i,o),this.computeTops(i,o),this.scanTorches(i,o),o}_fill(t,e,i,s,o,r,l,a){const h=Math.max(Math.min(e,o),t.x0),f=Math.min(Math.max(e,o),t.x0+Z-1),c=Math.max(Math.min(s,l),t.z0),d=Math.min(Math.max(s,l),t.z0+Z-1),u=Math.max(Math.min(i,r),0),p=Math.min(Math.max(i,r),he-1);for(let x=u;x<=p;x++)for(let m=c;m<=d;m++)for(let g=h;g<=f;g++)t.data[this.idx(g-t.x0,x,m-t.z0)]=a}fortressAt(t,e){const i="f"+t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);const s=this.seed;let o=null;return Ut(t,e,s+4400)<.6&&(o={x:t*224+112+Math.floor((Ut(t,e,s+4401)-.5)*80),z:e*224+112+Math.floor((Ut(t,e,s+4402)-.5)*80),y:68}),this.vcache.set(i,o),o}fortressesNear(t,e){const i=[];for(let s=Math.floor((t-70)/224);s<=Math.floor((t+Z+70)/224);s++)for(let o=Math.floor((e-70)/224);o<=Math.floor((e+Z+70)/224);o++){const r=this.fortressAt(s,o);r&&Math.abs(r.x-t-8)<80&&Math.abs(r.z-e-8)<80&&i.push(r)}return i}buildFortress(t,e){const i=(l,a,h,f,c,d,u)=>this._fill(e,t.x+l,t.y+a,t.z+h,t.x+f,t.y+c,t.z+d,u),o=_.NETHER_BRICKS;i(-8,1,-8,8,9,8,ne),i(-8,-2,-8,8,0,8,o),i(-8,8,-8,8,8,8,o),i(-8,1,-8,-8,7,8,o),i(8,1,-8,8,7,8,o),i(-8,1,-8,8,7,-8,o),i(-8,1,8,8,7,8,o);for(const[l,a]of[[-5,-5],[5,-5],[-5,5],[5,5]])i(l,1,a,l,7,a,o),i(l,7,a,l,7,a,_.GLOWSTONE);i(-1,8,-1,1,8,1,_.GLOWSTONE);const r=[[1,0],[-1,0],[0,1],[0,-1]];for(const[l,a]of r){const h=-a,f=l;this._fill(e,t.x+l*8-h*1,t.y+1,t.z+a*8-f*1,t.x+l*8+h*1,t.y+4,t.z+a*8+f*1,ne);for(let u=9;u<=49;u++){const p=t.x+l*u,x=t.z+a*u;if(this._fill(e,p-h*1,t.y+1,x-f*1,p+h*1,t.y+6,x+f*1,ne),this._fill(e,p-h*2,t.y,x-f*2,p+h*2,t.y,x+f*2,o),this._fill(e,p-h*2,t.y+1,x-f*2,p-h*2,t.y+2,x-f*2,o),this._fill(e,p+h*2,t.y+1,x+f*2,p+h*2,t.y+2,x+f*2,o),u%8===0&&(this._fill(e,p-h*2,t.y+1,x-f*2,p-h*2,t.y+5,x-f*2,o),this._fill(e,p+h*2,t.y+1,x+f*2,p+h*2,t.y+5,x+f*2,o),this._fill(e,p-h*2,t.y+5,x-f*2,p+h*2,t.y+5,x+f*2,o)),u%8===4)for(const m of[-2,2])this._fill(e,p+h*m,t.y-46,x+f*m,p+h*m,t.y-1,x+f*m,o)}const c=t.x+l*54,d=t.z+a*54;this._fill(e,c-4,t.y+1,d-4,c+4,t.y+13,d+4,ne),this._fill(e,c-4,t.y-3,d-4,c+4,t.y,d+4,o),this._fill(e,c-4,t.y+1,d-4,c-4,t.y+12,d+4,o),this._fill(e,c+4,t.y+1,d-4,c+4,t.y+12,d+4,o),this._fill(e,c-4,t.y+1,d-4,c+4,t.y+12,d-4,o),this._fill(e,c-4,t.y+1,d+4,c+4,t.y+12,d+4,o),this._fill(e,c-4,t.y+13,d-4,c+4,t.y+13,d+4,o),this._fill(e,c-l*4-h*1,t.y+1,d-a*4-f*1,c-l*4+h*1,t.y+4,d-a*4+f*1,ne),this._fill(e,c-2,t.y+7,d-2,c+2,t.y+7,d+2,o),this._fill(e,c-1,t.y+7,d-1,c-1,t.y+7,d,ne);for(let u=0;u<6;u++)this._fill(e,c-3,t.y+1,d-3+u,c-3,t.y+1+u,d-3+u,o);this._fill(e,c-3,t.y+7,d-3,c-3,t.y+7,d+2,ne),this._fill(e,c,t.y+12,d,c,t.y+12,d,_.GLOWSTONE),this._fill(e,c+2,t.y+1,d+2,c+2,t.y+1,d+2,_.CHEST),this._fill(e,c-2,t.y+8,d+2,c-2,t.y+8,d+2,_.CHEST)}this._fill(e,t.x-7,t.y+1,t.z-7,t.x-7,t.y+1,t.z-7,_.CHEST),this._fill(e,t.x+7,t.y+1,t.z+7,t.x+7,t.y+1,t.z+7,_.CHEST),this._fill(e,t.x+7,t.y+1,t.z-7,t.x+7,t.y+1,t.z-7,_.CHEST)}endIsland(t,e){const i=this.seed+9001,s=Math.hypot(t,e);if(s<54)return{top:64+Math.floor(ai(t*.08,e*.08,i+700,2)*3)-(s>46?Math.floor(s-46):0),bottom:0};if(s>240){const o=ai(t*.011,e*.011,i+701,3);if(o>.63)return{top:58+Math.floor((o-.63)*60)+Math.floor(ai(t*.06,e*.06,i+702,2)*3),n:o}}return null}endCityAt(t,e){const i="e"+t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);let s=null;const o=this.seed;if(Ut(t,e,o+5500)<.7){let r=null;for(let l=8;l<160;l+=10)for(let a=8;a<160;a+=10){const h=t*160+l,f=e*160+a;if(Math.hypot(h,f)<270)continue;const c=this.endIsland(h,f);c&&c.n>.66&&(!r||c.n>r.n)&&(r={x:h,z:f,n:c.n,top:c.top})}r&&(s={x:r.x,z:r.z,y:r.top,ship:Ut(t,e,o+5501)<.55})}return this.vcache.set(i,s),s}endCitiesNear(t,e){const i=[];for(let s=Math.floor((t-30)/160);s<=Math.floor((t+Z+30)/160);s++)for(let o=Math.floor((e-30)/160);o<=Math.floor((e+Z+30)/160);o++){const r=this.endCityAt(s,o);r&&Math.abs(r.x-t-8)<50&&Math.abs(r.z-e-8)<50&&i.push(r)}return i}buildEndCity(t,e){const i=(r,l,a,h,f,c,d)=>this._fill(e,t.x+r,t.y+l,t.z+a,t.x+h,t.y+f,t.z+c,d),s=_.PURPUR,o=_.END_BRICKS;i(-6,-12,-6,6,0,6,s),i(-5,1,-5,5,21,5,ne);for(let r=0;r<3;r++){const l=1+r*6;i(-4,l,-4,4,l,4,s);for(let a=l+1;a<=l+5;a++){const h=a===l+3?o:s;i(-4,a,-4,4,a,-4,h),i(-4,a,4,4,a,4,h),i(-4,a,-4,-4,a,4,h),i(4,a,-4,4,a,4,h)}for(const[a,h]of[[0,-4],[0,4],[-4,0],[4,0]])i(a===0?-1:a,l+2,h===0?-1:h,a===0?1:a,l+4,h===0?1:h,_.GLASS);i(-3,l+5,-3,-3,l+5,-3,_.GLOWSTONE),i(3,l+5,3,3,l+5,3,_.GLOWSTONE);for(let a=0;a<6;a++)i(-3+a,l+1,-3,-3+a,l+1+a,-3,s);i(-3,l+6,-3,1,l+6,-2,ne)}i(-4,19,-4,4,19,4,s),i(-3,19,-3,-3,19,-3,s);for(const[r,l]of[[-4,-4],[4,-4],[-4,4],[4,4]])i(r,20,l,r,23,l,s),i(r,24,l,r,24,l,_.GLOWSTONE);i(-1,2,-1,1,4,-4,ne),i(-1,2,-4,1,4,-4,ne),i(2,2,2,2,2,2,_.CHEST),i(-2,8,2,-2,8,2,_.CHEST),i(2,14,2,2,14,2,_.CHEST),t.ship&&(i(5,13,-1,9,13,1,s),i(10,13,-3,22,13,3,s),i(10,14,-3,22,14,-3,o),i(10,14,3,22,14,3,o),i(22,14,-3,22,14,3,o),i(20,13,-2,24,13,2,s),i(25,14,0,25,15,0,o),i(15,14,0,15,19,0,o),i(14,17,0,16,17,0,o),i(21,14,0,21,14,0,o),i(21,15,0,21,15,0,_.CHEST),i(10,12,-2,20,11,2,s))}genEnd(t,e,i){const s=this.seed+9001,o=new Uint8Array(Z*Z*he),r=t*Z,l=e*Z;for(let h=0;h<Z;h++)for(let f=0;f<Z;f++){const c=r+f,d=l+h,u=Math.hypot(c,d);let p=-1,x=0;if(u<54)p=64+Math.floor(ai(c*.08,d*.08,s+700,2)*3)-(u>46?Math.floor(u-46):0),x=p-((54-u)*.75+3+ai(c*.05,d*.05,s+703,2)*5);else if(u>240){const m=ai(c*.011,d*.011,s+701,3);m>.63&&(p=58+Math.floor((m-.63)*60)+Math.floor(ai(c*.06,d*.06,s+702,2)*3),x=p-((m-.63)*230+2))}if(p>0)for(let m=Math.max(1,Math.floor(x));m<=p&&m<he;m++)o[this.idx(f,m,h)]=_.END_STONE}for(const h of cc())for(let f=-2;f<=2;f++)for(let c=-2;c<=2;c++){if(f*f+c*c>5)continue;const d=h.x+f-r,u=h.z+c-l;if(!(d<0||u<0||d>=Z||u>=Z)){for(let p=62;p<=h.top;p++)o[this.idx(d,p,u)]=_.OBSIDIAN;f===0&&c===0&&(o[this.idx(d,h.top+1,u)]=_.BEDROCK)}}const a={data:o,x0:r,z0:l};for(const h of this.endCitiesNear(r,l))this.buildEndCity(h,a);return this.chunks.set(i,o),this.computeTops(i,o),this.scanTorches(i,o),o}computeTops(t,e){let i=0;for(let o=e.length-1;o>=0;o--)if(e[o]){i=Math.floor(o/(Z*Z));break}this.hi||(this.hi=new Map),this.hi.set(t,i);const s=new Int16Array(Z*Z).fill(-1);for(let o=0;o<Z;o++)for(let r=0;r<Z;r++){let l=he-1;for(;l>=0&&!hn[e[this.idx(r,l,o)]];)l--;s[o*Z+r]=l}this.tops.set(t,s)}getBlock(t,e,i){if(e<0||e>=he)return ne;const s=Math.floor(t/Z),o=Math.floor(i/Z),r=this.chunks.get(Ci(s,o));return r?r[(e*Z+(i-o*Z))*Z+(t-s*Z)]:ne}topY(t,e){const i=Math.floor(t/Z),s=Math.floor(e/Z),o=this.tops.get(Ci(i,s));return o?o[(e-s*Z)*Z+(t-i*Z)]:-1}skyLit(t,e,i){if(this.dim!=="overworld")return 1;const s=Math.floor(t/Z),o=Math.floor(i/Z),r=this.tops.get(Ci(s,o));return r?e>r[(i-o*Z)*Z+(t-s*Z)]?1:0:1}isSolid(t,e,i){if(e<0)return!0;if(e>=he)return!1;const s=Math.floor(t/Z),o=Math.floor(i/Z),r=this.chunks.get(Ci(s,o));return r?jo[r[(e*Z+(i-o*Z))*Z+(t-s*Z)]]===1:!0}isLiquid(t,e,i){return xn[this.getBlock(t,e,i)]===1}setBlock(t,e,i,s){if(e<0||e>=he)return!1;const o=Math.floor(t/Z),r=Math.floor(i/Z),l=Ci(o,r),a=this.chunks.get(l);if(!a)return!1;const h=t-o*Z,f=i-r*Z,c=this.idx(h,e,f),d=a[c];if(a[c]=s,s&&e>this.hi.get(l)&&this.hi.set(l,e),this.modified.add(l),this.unsaved.add(l),na[d]||na[s]){this.scanTorches(l,a);for(let g=-1;g<=1;g++)for(let M=-1;M<=1;M++)this.dirty.add(Ci(o+g,r+M))}const u=this.tops.get(l),p=f*Z+h;if(hn[s])e>u[p]&&(u[p]=e);else if(e===u[p]){let g=e-1;for(;g>=0&&!hn[a[this.idx(h,g,f)]];)g--;u[p]=g}this.dirty.add(l);const x=h===0?-1:h===Z-1?1:0,m=f===0?-1:f===Z-1?1:0;return x&&this.dirty.add(Ci(o+x,r)),m&&this.dirty.add(Ci(o,r+m)),x&&m&&this.dirty.add(Ci(o+x,r+m)),!0}raycast(t,e,i=6,s=!1){let o=Math.floor(t.x),r=Math.floor(t.y),l=Math.floor(t.z);const a=[Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)],h=[Math.abs(1/e.x),Math.abs(1/e.y),Math.abs(1/e.z)],f=(p,x)=>x>0?Math.floor(p)+1-p:p-Math.floor(p),c=[a[0]===0?1/0:f(t.x,a[0])*h[0],a[1]===0?1/0:f(t.y,a[1])*h[1],a[2]===0?1/0:f(t.z,a[2])*h[2]];let d=[0,0,0],u=0;for(;u<=i;){const p=this.getBlock(o,r,l);if(p!==ne&&(s||!xn[p]&&!lu[p]))return{x:o,y:r,z:l,id:p,normal:d,dist:u};const x=c[0]<c[1]?c[0]<c[2]?0:2:c[1]<c[2]?1:2;u=c[x],c[x]+=h[x],d=[0,0,0],d[x]=-a[x],x===0?o+=a[0]:x===1?r+=a[1]:l+=a[2]}return null}update(t,e,i,s=2){const o=Math.floor(t/Z),r=Math.floor(e/Z),l=[],a=[];for(let c=-i-1;c<=i+1;c++)for(let d=-i-1;d<=i+1;d++){const u=o+d,p=r+c,x=Ci(u,p),m=d*d+c*c;if(!this.chunks.has(x))l.push({cx:u,cz:p,d:m});else if(Math.abs(d)<=i&&Math.abs(c)<=i){const g=this.dirty.has(x);(!this.meshes.has(x)||g)&&a.push({cx:u,cz:p,d:g?m-1e4:m})}}l.sort((c,d)=>c.d-d.d);for(let c=0;c<Math.min(s*2,l.length);c++)this.generateChunk(l[c].cx,l[c].cz);a.sort((c,d)=>c.d-d.d);let h=0,f=0;for(const c of a){let d=!0;for(let u=-1;u<=1&&d;u++)for(let p=-1;p<=1;p++)if(!this.chunks.has(Ci(c.cx+u,c.cz+p))){d=!1;break}if(!d){f++;continue}h<(c.d<-5e3?6:s)?(this.buildMesh(c.cx,c.cz),h++):f++}for(const[c,d]of this.meshes)(Math.abs(Vf(c)-o)>i+2||Math.abs(Wf(c)-r)>i+2)&&(this.disposeMesh(d),this.meshes.delete(c));if((this.unloadT-=1)<=0){this.unloadT=60;for(const c of[...this.chunks.keys()])if(Math.abs(Vf(c)-o)>i+5||Math.abs(Wf(c)-r)>i+5){if(this.modified.has(c))continue;this.chunks.delete(c),this.tops.delete(c)}}return l.length+f}disposeMesh(t){for(const e of[t.opaque,t.trans])e&&(this.scene.remove(e),e.geometry.dispose())}buildMesh(t,e){const i=Ci(t,e),s=this.chunks.get(i);if(!s)return;const o=t*Z,r=e*Z,l=[{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]},{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]}],a=(y,b,P)=>{const O=y-o,U=P-r;return O>=0&&U>=0&&O<Z&&U<Z&&b>=0&&b<he?s[(b*Z+U)*Z+O]:this.getBlock(y,b,P)},h=new Float32Array(Z*Z*3);for(let y=0;y<Z;y++)for(let b=0;b<Z;b++){const P=o+b,O=r+y,U=ai(P*.004,O*.004,this.seed+900,2),G=ai(P*.0035,O*.0035,this.seed+500,2),$=Bo(.35,.7,U),Y=Bo(.42,.28,G),K=(y*Z+b)*3;h[K]=(1.15*(1-$)+.78*$)*(1-.18*Y),h[K+1]=1*(1-$)+1.1*$,h[K+2]=.6*(1-$)+.8*$+.3*Y}const f=.0015,c=[0,0,0],d=[0,0,0,0],u=[0,0,0,0],p=[0,0,0,0],x=Z*3,m=o-Z,g=r-Z;let M=null;const S=[];for(let y=-1;y<=1;y++)for(let b=-1;b<=1;b++){const P=this.torches.get(Ci(t+y,e+b));if(P)for(const O of P)S.push([(t+y)*Z+O%Z,Math.floor(O/(Z*Z)),(e+b)*Z+Math.floor(O/Z)%Z])}if(S.length){M=this._lm||(this._lm=new Uint8Array(x*x*he)),M.fill(0);const y=(O,U,G)=>(U*x+(G-g))*x+(O-m),b=[];for(const[O,U,G]of S)M[y(O,U,G)]=10,b.push(O,U,G);const P=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1];for(let O=0;O<b.length;O+=3){const U=b[O],G=b[O+1],$=b[O+2],Y=M[y(U,G,$)]-1;if(!(Y<=0))for(let K=0;K<18;K+=3){const W=U+P[K],ot=G+P[K+1],rt=$+P[K+2];if(ot<0||ot>=he||W<m||W>=m+x||rt<g||rt>=g+x||hn[a(W,ot,rt)])continue;const _t=y(W,ot,rt);M[_t]<Y&&(M[_t]=Y,b.push(W,ot,rt))}}}const v=(y,b,P)=>!M||b<0||b>=he||y<m||y>=m+x||P<g||P>=g+x?0:Math.pow(M[(b*x+(P-g))*x+(y-m)]/10,1.7),D=Math.min(he-1,(this.hi.get(i)||he)+1);for(let y=0;y<=D;y++)for(let b=0;b<Z;b++)for(let P=0;P<Z;P++){const O=s[(y*Z+b)*Z+P];if(O===ne)continue;const U=qe[O],G=U.transparent?l[1]:l[0],$=o+P,Y=r+b;if(U.torch){const K=(Fo.torch+.4375)/ko,W=(Fo.torch+9/16)/ko;for(const ot of Th){if(ot.bottom)continue;const rt=G.pos.length/3;for(const _t of ot.corners)G.pos.push(P+7/16+_t.p[0]*2/16,y+_t.p[1]*10/16,b+7/16+_t.p[2]*2/16),G.nor.push(ot.dir[0],ot.dir[1],ot.dir[2]),G.uv.push(K+(W-K)*_t.uv[0],6/16+10/16*_t.uv[1]),G.col.push(.9,.9,.9),G.bl.push(1),G.sw.push(0),G.sk.push(1);G.ind.push(rt,rt+1,rt+2,rt+2,rt+1,rt+3)}continue}for(const K of Th){const W=$+K.dir[0],ot=y+K.dir[1],rt=Y+K.dir[2],_t=a(W,ot,rt);if(hn[_t]||_t===O&&(U.transparent||U.liquid))continue;const jt=Fo[K.top?U.tiles[0]:K.bottom?U.tiles[1]:U.tiles[2]],[_e,J]=K.tan;let at=1,wt=1,dt=1;if(O===_.LEAVES||O===_.GRASS&&K.top){const qt=(b*Z+P)*3;at=h[qt],wt=h[qt+1],dt=h[qt+2]}const zt=ot<he?this.skyLit(W,ot,rt):1,Gt=v(W,ot,rt);for(let qt=0;qt<4;qt++){const Kt=K.corners[qt].p,Te=Kt[_e]*2-1,F=Kt[J]*2-1;c[0]=W,c[1]=ot,c[2]=rt,c[_e]+=Te;const ei=hn[a(c[0],c[1],c[2])],ae=ei?zt:this.skyLit(c[0],c[1],c[2]),le=ei?Gt:v(c[0],c[1],c[2]);c[0]=W,c[1]=ot,c[2]=rt,c[J]+=F;const It=hn[a(c[0],c[1],c[2])],Le=It?zt:this.skyLit(c[0],c[1],c[2]),Ft=It?Gt:v(c[0],c[1],c[2]);c[0]=W,c[1]=ot,c[2]=rt,c[_e]+=Te,c[J]+=F;const L=hn[a(c[0],c[1],c[2])],E=ei&&It||L?zt:this.skyLit(c[0],c[1],c[2]),V=ei&&It||L?Gt:v(c[0],c[1],c[2]);p[qt]=(Gt+le+Ft+V)/4,d[qt]=ei&&It?0:3-(ei+It+L),u[qt]=(zt+ae+Le+E)/4}const Bt=G.pos.length/3;for(let qt=0;qt<4;qt++){const Kt=K.corners[qt];let Te=Kt.p[1];(O===_.WATER||O===_.LAVA)&&Te===1&&a($,y+1,Y)!==O&&(Te=.88),G.pos.push(P+Kt.p[0],y+Te,b+Kt.p[2]),G.nor.push(K.dir[0],K.dir[1],K.dir[2]),G.uv.push((jt+(Kt.uv[0]?1-f:f))/ko,Kt.uv[1]?1-f:f);const F=K.shade*Xf[d[qt]]*(.3+.7*u[qt]);G.col.push(F*at,F*wt,F*dt),G.bl.push(U.glow?1:K.shade*Xf[d[qt]]*p[qt]),G.sw.push(O===_.LEAVES?1:O===_.WATER||O===_.LAVA?2:0),G.sk.push(u[qt])}d[0]+d[3]>d[1]+d[2]?G.ind.push(Bt,Bt+1,Bt+3,Bt,Bt+3,Bt+2):G.ind.push(Bt,Bt+1,Bt+2,Bt+2,Bt+1,Bt+3)}}const R=this.meshes.get(i);R&&this.disposeMesh(R);const w={opaque:null,trans:null},C=(y,b,P,O)=>{if(!y.ind.length)return null;const U=new Qe;U.setAttribute("position",new Re(y.pos,3)),U.setAttribute("normal",new Re(y.nor,3)),U.setAttribute("uv",new Re(y.uv,2)),U.setAttribute("color",new Re(y.col,3)),U.setAttribute("blight",new Re(y.bl,1)),U.setAttribute("sway",new Re(y.sw,1)),U.setAttribute("skyl",new Re(y.sk,1)),U.setIndex(y.ind),U.computeBoundingSphere();const G=new Mt(U,b);return G.position.set(o,0,r),G.renderOrder=P,G.castShadow=O,G.receiveShadow=!0,this.scene.add(G),G};w.opaque=C(l[0],this.materials.opaque,0,!0),w.trans=C(l[1],this.materials.trans,1,!1),this.meshes.set(i,w),this.dirty.delete(i),this.onChunkMeshed&&this.onChunkMeshed(t,e)}}const xs=(n,t)=>new di(t?{color:n,map:t}:{color:n});function Tt(n,t,e,i,s,o,r,l){const a=new Se;a.position.set(o,r,l);const h=new Mt(new Yt(t,e,i),xs(s));return h.position.y=-e/2,a.add(h),n.add(a),a}function H(n,t,e,i,s,o,r,l,a){const h=new Mt(new Yt(t,e,i),xs(s,a));return h.position.set(o,r,l),n.add(h),h}function kv(n){const t=document.createElement("canvas");t.width=t.height=8,n(t.getContext("2d"));const e=new Hi(t);return e.magFilter=xe,e.minFilter=xe,e.generateMipmaps=!1,e}const ho={pig:{hw:.4,h:.9,hp:10,speed:1.4,hostile:!1,name:"Cerdo",build(n,t){H(n,.6,.5,.95,15769768,0,.62,0),t.head=H(n,.5,.45,.45,16034480,0,.78,.65),H(n,.26,.2,.1,14189196,0,.72,.92),t.legs=[[-.18,.5],[.18,.5],[-.18,-.5],[.18,-.5]].map(([e,i])=>Tt(n,.2,.37,.2,15242140,e,.37,i))},drops:()=>[[T.PORK,1+Math.floor(Math.random()*2)]]},cow:{hw:.45,h:1.4,hp:10,speed:1.2,hostile:!1,name:"Vaca",build(n,t){H(n,.75,.7,1.2,4863268,0,.95,0),H(n,.77,.3,.5,15658734,0,.95,-.15),t.head=H(n,.5,.5,.45,4863268,0,1.15,.8),H(n,.3,.2,.1,14272688,0,1.05,1.05),H(n,.08,.15,.08,14540253,-.22,1.45,.75),H(n,.08,.15,.08,14540253,.22,1.45,.75),t.legs=[[-.22,.45],[.22,.45],[-.22,-.45],[.22,-.45]].map(([e,i])=>Tt(n,.24,.6,.24,4008990,e,.6,i))},drops:()=>[[T.BEEF,1+Math.floor(Math.random()*3)],...Math.random()<.7?[[T.LEATHER,1+Math.floor(Math.random()*2)]]:[]]},sheep:{hw:.42,h:1.2,hp:8,speed:1.2,hostile:!1,name:"Oveja",xp:1,build(n,t){H(n,.85,.75,1.15,15658734,0,.9,0),t.head=H(n,.4,.42,.42,9076080,0,1.05,.72),t.legs=[[-.2,.4],[.2,.4],[-.2,-.4],[.2,-.4]].map(([e,i])=>Tt(n,.2,.5,.2,9076080,e,.5,i))},drops:()=>[[T.BEEF,1+Math.floor(Math.random()*2)]]},chicken:{hw:.22,h:.7,hp:4,speed:1.3,hostile:!1,name:"Gallina",xp:1,build(n,t){H(n,.34,.34,.5,16053492,0,.42,0),t.head=H(n,.2,.26,.2,16316664,0,.68,.24),H(n,.1,.07,.12,15769632,0,.64,.38),H(n,.06,.1,.06,13639712,0,.55,.33),H(n,.06,.26,.4,15263976,-.2,.44,0),H(n,.06,.26,.4,15263976,.2,.44,0),t.legs=[-.08,.08].map(e=>Tt(n,.05,.25,.05,15769632,e,.25,0))},drops:()=>[[T.CHICKEN,1]]},skeleton:{hw:.3,h:1.9,hp:20,speed:2.2,hostile:!0,name:"Esqueleto",ranged:!0,xp:5,build(n,t){t.legs=[Tt(n,.18,.85,.18,14211276,-.12,.85,0),Tt(n,.18,.85,.18,14211276,.12,.85,0)],H(n,.5,.8,.2,14211276,0,1.25,0);for(const s of[1,1.2,1.4])H(n,.52,.07,.22,5592396,0,s,0);t.arms=[Tt(n,.14,.75,.14,14211276,-.34,1.62,0),Tt(n,.14,.75,.14,14211276,.34,1.62,0)],t.arms[1].rotation.x=-1.3,t.arms[0].rotation.x=-1.3,t.head=H(n,.5,.5,.5,14211276,0,1.9,0),H(n,.1,.1,.02,1052688,-.12,1.93,.26),H(n,.1,.1,.02,1052688,.12,1.93,.26),H(n,.2,.05,.02,1052688,0,1.78,.26),H(n,.06,.5,.2,6965800,.42,1.28,.28)},drops:()=>Math.random()<.6?[[T.COAL,1]]:[[T.STICK,2]]},spider:{hw:.55,h:.75,hp:16,speed:4.2,hostile:!0,name:"Araña",xp:4,build(n,t){H(n,.7,.5,.7,2761760,0,.5,.3),H(n,.9,.6,1.1,3353124,0,.55,-.55),t.head=H(n,.5,.45,.45,2761760,0,.5,.8);for(const i of[-.12,.12])H(n,.1,.1,.03,13637656,i,.58,1.04),H(n,.06,.06,.03,13637656,i*1.8,.5,1.04);t.legs=[];for(let i=0;i<4;i++)for(const s of[-1,1]){const o=H(n,.9,.08,.08,2761760,s*.62,.38,.55-i*.38);o.rotation.z=s*-.55,o.rotation.y=s*(i-1.5)*.25}},drops:()=>Math.random()<.5?[[T.STICK,1]]:[]},enderman:{hw:.3,h:2.9,hp:40,speed:5,hostile:!1,name:"Enderman",xp:8,enderman:!0,build(n,t){t.legs=[Tt(n,.18,1.5,.18,1182232,-.12,1.5,0),Tt(n,.18,1.5,.18,1182232,.12,1.5,0)],H(n,.5,.95,.26,1182232,0,1.98,0),t.arms=[Tt(n,.13,1.35,.13,1182232,-.34,2.45,0),Tt(n,.13,1.35,.13,1182232,.34,2.45,0)],t.head=H(n,.5,.42,.5,1182232,0,2.7,0);for(const i of[-.13,.13])H(n,.14,.05,.03,14708991,i,2.72,.26)},drops:()=>Math.random()<.65?[[T.PEARL,1]]:[]},slime:{hw:.42,h:.85,hp:8,speed:0,hostile:!0,name:"Slime",hopper:!0,xp:2,build(n,t){const e=new di({color:6348896,emissive:1064976,transparent:!0,opacity:.8}),i=new Mt(new Yt(.84,.84,.84),e);i.position.y=.42,n.add(i),H(n,.4,.4,.4,3119663,0,.42,0),H(n,.14,.14,.05,1060880,-.2,.55,.43),H(n,.14,.14,.05,1060880,.2,.55,.43)},drops:()=>[]},piglin:{hw:.3,h:1.8,hp:24,speed:2.7,hostile:!0,name:"Piglin zombificado",damage:5,xp:6,piglin:!0,build(n,t){t.legs=[Tt(n,.26,.75,.26,5917240,-.14,.75,0),Tt(n,.26,.75,.26,5917240,.14,.75,0)],H(n,.56,.75,.3,8022608,0,1.125,0),H(n,.58,.14,.32,15253568,0,1.45,0),t.arms=[Tt(n,.22,.72,.22,13208184,-.38,1.45,0),Tt(n,.22,.72,.22,13208184,.38,1.45,0)],t.arms.forEach(s=>s.rotation.x=-Math.PI/2.3),H(n,.1,.55,.1,15253568,.4,1,.45),t.head=H(n,.6,.5,.5,13208184,0,1.78,0),H(n,.34,.22,.12,11563103,0,1.72,.3),H(n,.06,.08,.04,2101264,-.07,1.72,.37),H(n,.06,.08,.04,2101264,.07,1.72,.37),H(n,.12,.28,.06,13208184,-.37,1.8,0).rotation.z=.5,H(n,.12,.28,.06,13208184,.37,1.8,0).rotation.z=-.5,H(n,.08,.06,.03,16724e3,-.14,1.88,.26),H(n,.08,.06,.03,16724e3,.14,1.88,.26)},drops:()=>Math.random()<.6?[[T.GOLD,1]]:[]},blaze:{hw:.35,h:1.7,hp:20,speed:2.4,hostile:!0,name:"Blaze",fly:!0,ranged:!1,xp:7,build(n,t){const e=new di({color:15773728,emissive:10506240}),i=new di({color:16742928,emissive:12595200});t.head=new Mt(new Yt(.55,.55,.55),e),t.head.position.y=1.4,n.add(t.head);for(const s of[-.13,.13])H(n,.12,.1,.03,2101248,s,1.45,.29);H(n,.22,.06,.03,2101248,0,1.28,.29),t.rods=[];for(let s=0;s<3;s++){const o=new Se;o.position.y=.35+s*.38,n.add(o);for(let r=0;r<4;r++){const l=r/4*Math.PI*2,a=new Mt(new Yt(.12,.5,.12),s%2?i:e);a.position.set(Math.cos(l)*.5,0,Math.sin(l)*.5),o.add(a)}t.rods.push(o)}H(n,.2,.25,.2,16752672,0,.9,0)},drops:()=>Math.random()<.8?[[T.COAL,1+Math.floor(Math.random()*2)]]:[]},magmacube:{hw:.5,h:1,hp:18,speed:0,hostile:!0,name:"Cubo de magma",hopper:!0,xp:5,build(n,t){const e=new di({color:11547664,emissive:8003584}),i=new re({color:16752672}),s=new Mt(new Yt(1,1,1),e);s.position.y=.5,n.add(s);for(const[o,r,l]of[[0,.7,.51],[.3,.3,.51],[-.3,.45,.51],[.51,.5,.2],[-.51,.5,-.1]])H(n,.3,.12,.05,16752672,o,r,l);H(n,.15,.12,.04,2101248,-.22,.65,.52),H(n,.15,.12,.04,2101248,.22,.65,.52),H(n,.4,.1,.04,i,0,.35,.52)},drops:()=>Math.random()<.6?[[T.COAL,1]]:[]},witherskeleton:{hw:.35,h:2.4,hp:30,speed:2.9,hostile:!0,name:"Esqueleto Wither",damage:6,reach:1.7,effect:["poison",5],xp:9,build(n,t){t.legs=[Tt(n,.2,1.1,.2,2302755,-.14,1.1,0),Tt(n,.2,1.1,.2,2302755,.14,1.1,0)],H(n,.56,.95,.24,2302755,0,1.6,0);for(const s of[1.3,1.55,1.8])H(n,.58,.07,.26,921102,0,s,0);t.arms=[Tt(n,.16,1,.16,2302755,-.38,2.05,0),Tt(n,.16,1,.16,2302755,.38,2.05,0)],t.arms[0].rotation.x=t.arms[1].rotation.x=-1.2,H(n,.1,.7,.06,3815994,.45,1.5,.5),H(n,.3,.06,.06,3815994,.45,1.85,.5),t.head=H(n,.58,.58,.58,2302755,0,2.2,0),H(n,.12,.1,.02,12632256,-.14,2.25,.3),H(n,.12,.1,.02,12632256,.14,2.25,.3),H(n,.24,.05,.02,328965,0,2.05,.3)},drops:()=>[[T.COAL,1+Math.floor(Math.random()*2)]]},ghast:{hw:1.2,h:2.6,hp:14,speed:1.6,hostile:!0,name:"Ghast",fly:!0,flyKind:"ghast",xp:10,build(n,t){xs(16053492),H(n,2.4,2.4,2.4,16053492,0,1.4,0),t.eyeL=H(n,.6,.15,.05,4208696,-.5,1.6,1.22),t.eyeR=H(n,.6,.15,.05,4208696,.5,1.6,1.22),H(n,.4,.2,.05,4208696,0,.95,1.22);for(const e of[-.8,0,.8])for(const i of[-.8,0,.8])H(n,.3,1.4+Math.abs(e*i),.3,14474460,e,.1,i)},drops:()=>[[T.COAL,1+Math.floor(Math.random()*2)],...Math.random()<.4?[[T.GOLD,1]]:[]]},hoglin:{hw:.6,h:1.5,hp:32,speed:3.2,hostile:!0,name:"Hoglin",damage:7,reach:1.9,xp:8,build(n,t){H(n,1,.95,1.5,9067066,0,1,0),H(n,.7,.4,.9,5913128,0,1.55,-.1),t.head=H(n,.85,.75,.8,10119754,0,.95,1),H(n,.5,.35,.3,12618346,0,.8,1.45);for(const e of[-.3,.3])H(n,.1,.35,.1,15788240,e,1.15,1.5).rotation.x=-.4,H(n,.14,.12,.04,1052688,e*.9,1.12,1.42),H(n,.2,.28,.12,8014384,e*1.7,1.3,.85).rotation.z=e*1.5;t.legs=[[-.35,.55],[.35,.55],[-.35,-.55],[.35,-.55]].map(([e,i])=>Tt(n,.3,.55,.3,6963240,e,.55,i))},drops:()=>[[T.PORK,2+Math.floor(Math.random()*3)]]},shulker:{hw:.5,h:1,hp:22,speed:0,hostile:!0,name:"Shulker",static:!0,shulker:!0,xp:8,build(n,t){H(n,1,.5,1,8014474,0,.25,0),t.lid=new Se,t.lid.position.set(0,.5,-.5),n.add(t.lid);const e=xs(10316974),i=new Mt(new Yt(1,.5,1),e);i.position.set(0,.25,.5),t.lid.add(i),t.eye=H(n,.3,.3,.3,15790240,0,.55,0),t.eye.material.emissive=new Et(7368768)},drops:()=>Math.random()<.35?[[T.PEARL,1]]:[]},endermite:{hw:.22,h:.35,hp:8,speed:4.6,hostile:!0,name:"Endermite",damage:2,reach:.9,xp:3,build(n,t){H(n,.32,.26,.26,5909114,0,.14,.2),H(n,.4,.3,.3,6961802,0,.16,-.05),H(n,.26,.22,.26,4857960,0,.12,-.3),H(n,.06,.06,.03,14708991,-.07,.2,.34),H(n,.06,.06,.03,14708991,.07,.2,.34)},drops:()=>[]},phantom:{hw:.6,h:.6,hp:18,speed:3,hostile:!0,name:"Phantom",fly:!0,flyKind:"phantom",xp:7,build(n,t){H(n,.5,.35,1.1,4083590,0,.3,0),H(n,.3,.2,.3,4083590,0,.3,.7),H(n,.12,.1,.04,7405424,-.12,.34,.86),H(n,.12,.1,.04,7405424,.12,.34,.86),t.wings=[-1,1].map(i=>{const s=new Se;s.position.set(i*.25,.4,.1),n.add(s);const o=new Mt(new Yt(1.5,.06,.8),xs(3227758));return o.position.x=i*.75,s.add(o),{g:s,s:i}}),H(n,.2,.15,.9,4083590,0,.28,-.9)},drops:()=>[]},villager:{hw:.32,h:1.95,hp:20,speed:1.2,hostile:!1,name:"Aldeano",villager:!0,talk:["Hrmm.","¿Quieres comerciar?","¡Buenos días!","Hrm… hrm."],xp:0,build(n,t){t.legs=[Tt(n,.3,.8,.3,7031338,-.15,.8,0),Tt(n,.3,.8,.3,7031338,.15,.8,0)],H(n,.7,1,.45,9068084,0,1.3,0),H(n,.74,.3,.5,15261904,0,1.55,0),H(n,.9,.3,.5,7031338,0,1.5,.34),t.head=H(n,.55,.6,.55,13145466,0,2,0),H(n,.16,.34,.2,13145466,0,1.92,.36),H(n,.58,.1,.1,3811866,0,2.2,.28),H(n,.1,.1,.03,1731114,-.14,2.05,.28),H(n,.1,.1,.03,1731114,.14,2.05,.28)},drops:()=>[]},crewmate:{hw:.34,h:1.65,hp:20,speed:1.5,hostile:!1,name:"Tripulante",talk:["Sus…","¿Quién es el impostor?","¡Ya hice mis tareas!","Eso es muy sospechoso…","Vi a alguien salir del conducto."],xp:2,build(n,t,e){const i=Kf[(e.variant||0)%Kf.length];t.legs=[Tt(n,.28,.5,.3,i,-.18,.5,0),Tt(n,.28,.5,.3,i,.18,.5,0)],H(n,.74,.85,.52,i,0,.95,0),H(n,.62,.22,.46,i,0,1.46,0),H(n,.22,.6,.42,i,0,.95,-.4),H(n,.5,.3,.1,10408678,0,1.25,.28).material.emissive=new Et(4881040),H(n,.18,.08,.06,15268095,-.12,1.32,.34)},drops:()=>Math.random()<.25?[[T.COAL,1]]:[]},impostor:{hw:.34,h:1.65,hp:34,speed:3.3,hostile:!0,name:"Impostor",melee:!0,damage:8,reach:1.7,cd:1.1,teleports:!0,tpCool:6,xp:12,build(n,t){t.legs=[Tt(n,.28,.5,.3,12914961,-.18,.5,0),Tt(n,.28,.5,.3,12914961,.18,.5,0)],H(n,.74,.85,.52,12914961,0,.95,0),H(n,.62,.22,.46,12914961,0,1.46,0),H(n,.22,.6,.42,9047052,0,.95,-.4),H(n,.5,.3,.1,10408678,0,1.25,.28).material.emissive=new Et(4881040),H(n,.18,.08,.06,15268095,-.12,1.32,.34),H(n,.08,.5,.06,13684952,.5,.95,.34),H(n,.14,.08,.1,3158064,.5,.68,.34)},drops:()=>Math.random()<.5?[[T.COAL,2]]:[[T.IRON,1]]},homer:{hw:.42,h:1.95,hp:40,speed:2,hostile:!1,neutral:!0,melee:!0,damage:6,reach:1.6,name:"Homer",talk:["¡D'oh!","Mmm… rosquillas.","¡Woohoo!","¿Dónde está Bart?","Para todo en la vida hay una cerveza."],xp:6,build(n,t){t.legs=[Tt(n,.32,.8,.34,5930688,-.18,.8,0),Tt(n,.32,.8,.34,5930688,.18,.8,0)],H(n,.86,1,.55,16053492,0,1.3,0),H(n,.7,.3,.5,5930688,0,.88,0),t.arms=[Tt(n,.26,.8,.26,16767247,-.55,1.75,0),Tt(n,.26,.8,.26,16767247,.55,1.75,0)],t.head=H(n,.66,.62,.62,16767247,0,2.05,0),H(n,.5,.18,.2,11049064,0,1.92,.34),H(n,.14,.14,.14,16777215,-.15,2.12,.34),H(n,.14,.14,.14,16777215,.15,2.12,.34),H(n,.05,.05,.04,1052688,-.15,2.12,.42),H(n,.05,.05,.04,1052688,.15,2.12,.42),H(n,.22,.18,.2,16767247,0,2,.42),H(n,.03,.14,.03,2105376,-.06,2.42,.05),H(n,.03,.14,.03,2105376,.06,2.42,.05)},drops:()=>[[T.DONUT,1+Math.floor(Math.random()*3)],...Math.random()<.35?[[T.DUFF,1]]:[]]},bart:{hw:.26,h:1.4,hp:22,speed:4.2,hostile:!0,melee:!0,damage:3,reach:1.15,cd:.8,name:"Bart",talk:["¡Ay, caramba!","¡Cómete mis shorts!","No fui yo.","¡Eeeeeso!"],xp:5,build(n,t){t.legs=[Tt(n,.2,.55,.22,16767247,-.1,.55,0),Tt(n,.2,.55,.22,16767247,.1,.55,0)],H(n,.5,.2,.34,2776256,0,.62,0),H(n,.5,.55,.34,15228960,0,.98,0),t.arms=[Tt(n,.18,.5,.2,16767247,-.34,1.2,0),Tt(n,.18,.5,.2,16767247,.34,1.2,0)],t.head=H(n,.46,.46,.42,16767247,0,1.5,0);for(let i=-2;i<=2;i++)H(n,.08,.2+(i%2?.08:0),.08,16767247,i*.1,1.84,0).rotation.z=-i*.15;H(n,.1,.1,.1,16777215,-.12,1.55,.24),H(n,.1,.1,.1,16777215,.12,1.55,.24),H(n,.04,.04,.03,1052688,-.12,1.55,.3),H(n,.04,.04,.03,1052688,.12,1.55,.3)},drops:()=>[[T.DONUT,1]]},marge:{hw:.34,h:2.7,hp:24,speed:1.4,hostile:!1,name:"Marge",talk:["Hmmmm…","¡Homero!","Eso no está bien.","Niños, a cenar."],xp:2,build(n,t){t.legs=[Tt(n,.28,.7,.3,16767247,-.14,.7,0),Tt(n,.28,.7,.3,16767247,.14,.7,0)],H(n,.7,.9,.45,3842144,0,1.15,0),H(n,.74,.5,.5,3842144,0,.8,0),t.arms=[Tt(n,.2,.7,.22,16767247,-.46,1.55,0),Tt(n,.2,.7,.22,16767247,.46,1.55,0)],t.head=H(n,.56,.52,.52,16767247,0,1.85,0),H(n,.6,1.1,.56,3108816,0,2.5,0),H(n,.5,.4,.5,3108816,0,3.2,0);for(let s=-2;s<=2;s++)H(n,.07,.07,.07,16777215,s*.1,1.55,.26);H(n,.12,.12,.12,16777215,-.12,1.9,.28),H(n,.12,.12,.12,16777215,.12,1.9,.28),H(n,.04,.04,.03,1052688,-.12,1.9,.34),H(n,.04,.04,.03,1052688,.12,1.9,.34)},drops:()=>[[T.DONUT,1]]},lisa:{hw:.28,h:1.7,hp:20,speed:1.8,hostile:!1,name:"Lisa",talk:["La inteligencia importa.","Tocaré mi saxofón.","Ser vegetariana es lo correcto.","¡Bart, no!"],xp:2,build(n,t){t.legs=[Tt(n,.2,.55,.22,16767247,-.1,.55,0),Tt(n,.2,.55,.22,16767247,.1,.55,0)],H(n,.54,.7,.34,13646378,0,.95,0),H(n,.6,.3,.36,13646378,0,.7,0),t.arms=[Tt(n,.16,.5,.18,16767247,-.36,1.25,0),Tt(n,.16,.5,.18,16767247,.36,1.25,0)],t.head=H(n,.48,.46,.44,16767247,0,1.55,0);for(let i=0;i<7;i++){const s=i/7*Math.PI*2;H(n,.1,.3,.1,16767247,Math.cos(s)*.25,1.9,Math.sin(s)*.25).rotation.z=-Math.cos(s)*.6}H(n,.1,.1,.1,16777215,-.12,1.6,.24),H(n,.1,.1,.1,16777215,.12,1.6,.24)},drops:()=>[]},maggie:{hw:.2,h:.75,hp:12,speed:.9,hostile:!1,name:"Maggie",talk:["*chupete*","¡Pi pi pi!"],xp:1,build(n,t){t.legs=[Tt(n,.14,.2,.16,8040680,-.09,.2,.1),Tt(n,.14,.2,.16,8040680,.09,.2,.1)],H(n,.34,.34,.3,8040680,0,.4,0),t.head=H(n,.34,.3,.3,16767247,0,.7,.04);for(const i of[-.07,.07])H(n,.06,.06,.03,1052688,i,.72,.2);H(n,.08,.06,.06,14692400,0,.62,.22),H(n,.05,.16,.05,16767247,0,.92,.04),H(n,.05,.12,.05,16767247,.06,.9,.04).rotation.z=-.4},drops:()=>[]},flanders:{hw:.3,h:1.9,hp:24,speed:1.6,hostile:!1,name:"Flanders",talk:["¡Hola holita, vecinito!","Okily dokily.","¡Qué diddly día!","Hola, Homero."],xp:2,build(n,t){t.legs=[Tt(n,.26,.8,.28,4872842,-.14,.8,0),Tt(n,.26,.8,.28,4872842,.14,.8,0)],H(n,.6,.85,.4,4889146,0,1.2,0),t.arms=[Tt(n,.2,.75,.22,4889146,-.4,1.6,0),Tt(n,.2,.75,.22,4889146,.4,1.6,0)],t.head=H(n,.5,.5,.46,16767247,0,1.93,0),H(n,.3,.07,.06,1710618,0,1.83,.26),H(n,.5,.1,.46,2759184,0,2.2,0),H(n,.4,.14,.04,13625584,0,1.97,.26)},drops:()=>[]},saibaman:{hw:.24,h:1.15,hp:14,speed:3.8,hostile:!0,name:"Saibaman",creeper:!0,explodeR:2.4,fuseTime:1.1,xp:8,build(n,t){t.legs=[Tt(n,.14,.5,.16,5152832,-.12,.5,0),Tt(n,.14,.5,.16,5152832,.12,.5,0)],H(n,.4,.5,.24,5152832,0,.78,0),t.arms=[Tt(n,.1,.5,.12,5152832,-.27,.98,0),Tt(n,.1,.5,.12,5152832,.27,.98,0)],t.head=H(n,.5,.42,.42,5152832,0,1.15,0),H(n,.1,.1,.04,15786016,-.12,1.2,.22),H(n,.1,.1,.04,15786016,.12,1.2,.22),H(n,.16,.05,.04,1056784,0,1.06,.22);for(const[i,s]of[[.1,.8],[-.1,.65]])H(n,.1,.1,.03,2779682,i,s,.13);H(n,.08,.2,.08,5152832,0,1.46,0)},drops:()=>Math.random()<.08?[[T.DBALL,1]]:[]},dog:{hw:.3,h:.85,hp:10,speed:5.2,hostile:!0,melee:!0,damage:3,reach:1.1,cd:.8,name:"Perro de Burns",xp:3,build(n,t){H(n,.4,.4,.9,9079440,0,.55,0),t.head=H(n,.34,.34,.4,9079440,0,.72,.6),H(n,.2,.15,.2,3158064,0,.64,.84),H(n,.1,.16,.08,3158064,-.14,.95,.55),H(n,.1,.16,.08,3158064,.14,.95,.55),H(n,.12,.12,.35,9079440,0,.7,-.6).rotation.x=.7,t.legs=[[-.14,.3],[.14,.3],[-.14,-.3],[.14,-.3]].map(([i,s])=>Tt(n,.12,.35,.12,6974064,i,.35,s))},drops:()=>[]},zombie:{hw:.3,h:1.8,hp:20,speed:2.5,hostile:!0,name:"Zombi",damage:3,build(n,t){t.legs=[Tt(n,.26,.75,.26,2899612,-.14,.75,0),Tt(n,.26,.75,.26,2899612,.14,.75,0)],H(n,.54,.75,.28,2794936,0,1.125,0),t.arms=[Tt(n,.22,.72,.22,5147194,-.38,1.45,0),Tt(n,.22,.72,.22,5147194,.38,1.45,0)],t.arms.forEach(e=>e.rotation.x=-Math.PI/2.2),t.head=H(n,.5,.5,.5,5147194,0,1.75,0),H(n,.1,.07,.02,1052688,-.12,1.78,.26),H(n,.1,.07,.02,1052688,.12,1.78,.26)},drops:()=>Math.random()<.15?[[T.IRON,1]]:[]},creeper:{hw:.3,h:1.7,hp:20,speed:2.3,hostile:!0,name:"Creeper",creeper:!0,build(n,t){t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,a])=>Tt(n,.26,.45,.26,4099646,l,.45,a*.5)),t.body=H(n,.5,.85,.3,5154894,0,.88,0);const i=kv(l=>{l.fillStyle="#4ea84e",l.fillRect(0,0,8,8),l.fillStyle="#0c1a0c",l.fillRect(1,2,2,2),l.fillRect(5,2,2,2),l.fillRect(3,4,2,2),l.fillRect(2,5,1,2),l.fillRect(5,5,1,2)}),s=xs(5154894),o=[s,s,s,s,xs(16777215,i),s],r=new Mt(new Yt(.5,.5,.5),o);r.position.set(0,1.55,0),n.add(r),t.head=r},drops:()=>[]}},Kf=[12914961,1257169,1146669,15553722,15695118,16119127,4147022,14082288,7024571,7424286,3735260,5304121],jf=["zombie","zombie","zombie","creeper","creeper","skeleton","skeleton","skeleton","spider","spider","enderman","impostor","impostor","saibaman","saibaman","bart"],$f=["crewmate","crewmate","crewmate","homer","marge","lisa","maggie","flanders"],Zf=["zombie","zombie","creeper","skeleton","skeleton","spider"];class Bv{constructor(t,e,i,s,o){this.type=t,this.def=ho[t],this.pos=new I(e,i,s),this.vel=new I,this.hw=this.def.hw,this.h=this.def.h,this.hp=this.def.hp,this.yaw=Math.random()*Math.PI*2,this.variant=Math.floor(Math.random()*12),this.group=new Se,this.parts={},this.def.build(this.group,this.parts,this),this.model=new Se,this.model.add(this.group),o.add(this.model),this.group.traverse(r=>{r.isMesh&&(r.castShadow=!0,r.receiveShadow=!0)}),this.wanderT=0,this.wanderDir=0,this.moving=!1,this.cool=0,this.flash=0,this.fuse=0,this.walkT=0,this.age=0,this.onGround=!1,this.sound=3+Math.random()*10}materials(){const t=[];return this.group.traverse(e=>{e.material&&(Array.isArray(e.material)?t.push(...e.material):t.push(e.material))}),t}hit(t,e,i){this.def.shulker&&(this.lid||0)<.4&&(t*=.3),this.hp-=t,this.flash=.3,this.provoked=!0,this.aggro=!0;const s=this.pos.x-e,o=this.pos.z-i,r=Math.hypot(s,o)||1;this.vel.x=s/r*6,this.vel.z=o/r*6,this.vel.y=5}dispose(t){t.remove(this.model),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())})}}function Zo(n,t,e,i){let s=0,o=1/0;for(const r of["x","y","z"]){if(Math.abs(t[r])<1e-9){if(n[r]<e[r]||n[r]>i[r])return-1;continue}let l=(e[r]-n[r])/t[r],a=(i[r]-n[r])/t[r];if(l>a&&([l,a]=[a,l]),s=Math.max(s,l),o=Math.min(o,a),s>o)return-1}return s}class Hv{constructor(t,e,i){this.scene=t,this.world=e,this.hooks=i,this.list=[],this.spawnT=0,this.arrows=[],this.dim="overworld"}add(t,e,i,s){const o=new Bv(t,e,i,s,this.scene);return this.list.push(o),o}clear(){for(const t of this.list)t.dispose(this.scene);this.list=[];for(const t of this.arrows)this.scene.remove(t.mesh);this.arrows=[]}raycast(t,e,i){let s=null;for(const o of this.list){const r=Zo(t,e,{x:o.pos.x-o.hw,y:o.pos.y,z:o.pos.z-o.hw},{x:o.pos.x+o.hw,y:o.pos.y+o.h,z:o.pos.z+o.hw});r>=0&&r<=i&&(!s||r<s.dist)&&(s={mob:o,dist:r})}return s}damage(t,e,i,s){t.hit(e,i,s),this.hooks.sound("hit"),t.hp<=0&&this.kill(t)}kill(t){for(const[e,i]of t.def.drops())this.hooks.drop(t.pos.x,t.pos.y+.5,t.pos.z,e,i);this.hooks.killed&&this.hooks.killed(t.type,t.def.xp||2),this.hooks.puff(t.pos.x,t.pos.y+t.h/2,t.pos.z),t.dispose(this.scene),this.list.splice(this.list.indexOf(t),1)}update(t,e,i,s,o){const r=this.world;for(let l=this.list.length-1;l>=0;l--){const a=this.list[l];a.age+=t,a.cool=Math.max(0,a.cool-t),a.flash=Math.max(0,a.flash-t);const h=e.pos.x-a.pos.x,f=e.pos.z-a.pos.z,c=Math.hypot(h,f),d=e.pos.y-a.pos.y;let u=a.def.hostile&&i==="survival"&&!e.dead;if(a.type==="spider"&&s>.5&&!a.provoked&&(u=!1),a.def.enderman&&i==="survival"&&!e.dead&&!a.aggro&&c<24){const w=e.lookDir(),C=a.pos.x-e.pos.x,y=a.pos.y+2.6-(e.pos.y+1.62),b=a.pos.z-e.pos.z,P=Math.hypot(C,y,b);(w.x*C+w.y*y+w.z*b)/P>.985&&(a.aggro=!0)}(a.def.enderman||a.def.neutral)&&a.aggro&&i==="survival"&&!e.dead&&(u=!0);let p=null,x=a.def.speed;a.type==="hoglin"&&u&&c<10&&(x*=1.9),a.def.static&&(u=u&&!0),u&&c<26&&Math.abs(d)<14?(p=Math.atan2(-h,-f),a.def.ranged&&c<6&&(p+=Math.PI)):(a.wanderT-=t,a.wanderT<=0&&(a.wanderT=2+Math.random()*4,a.wanderDir=Math.random()<.4?null:Math.random()*Math.PI*2),a.wanderDir!==null&&a.wanderDir!==void 0&&(p=a.wanderDir),x*=.6);let m=!1;const g=a.def.ranged&&u&&c>=6&&c<12;if(p!==null){let w=p-a.yaw;if(w=Math.atan2(Math.sin(w),Math.cos(w)),a.yaw+=Math.max(-8*t,Math.min(8*t,w)),m=!g,g){const C=Math.atan2(-h,-f)-a.yaw;a.yaw+=Math.atan2(Math.sin(C),Math.cos(C))*Math.min(1,t*10)}}if(a.def.creeper){u&&c<(a.def.explodeR?2.2:3)&&Math.abs(d)<2?(a.fuse+=t,a.fuse-t<=0&&this.hooks.sound("hiss"),m=!1):a.fuse=Math.max(0,a.fuse-t*2);const w=1+(a.fuse>0?Math.sin(a.fuse*30)*.04+a.fuse*.15:0);if(a.group.scale.set(w,w,w),a.fuse>=(a.def.fuseTime||1.5)){this.hooks.explode(a.pos.x,a.pos.y+.8,a.pos.z,a.def.explodeR||3.2),a.dispose(this.scene),this.list.splice(l,1);continue}}const M=r.isLiquid(Math.floor(a.pos.x),Math.floor(a.pos.y+.2),Math.floor(a.pos.z)),S=-Math.sin(a.yaw),v=-Math.cos(a.yaw);if(m&&a.knock===void 0?(a.vel.x+=(S*x-a.vel.x)*Math.min(1,t*8),a.vel.z+=(v*x-a.vel.z)*Math.min(1,t*8)):(!a.def.hopper||a.onGround)&&(a.vel.x*=Math.max(0,1-t*6),a.vel.z*=Math.max(0,1-t*6)),a.def.hopper&&(m=!1,a.hopT=(a.hopT===void 0?.5:a.hopT)-t,a.onGround&&a.hopT<=0&&u&&(a.hopT=1+Math.random()*.8,a.vel.y=7.5,a.vel.x=h/(c||1)*3.4,a.vel.z=f/(c||1)*3.4,a.yaw=Math.atan2(-h,-f))),a.moving=m,M&&(a.vel.y=Math.max(a.vel.y,0)+14*t,a.vel.y=Math.min(a.vel.y,2.5)),a.def.fly)this.flyMob(a,t,e,u,h,f,d,c),a.onGround=!1;else{const w=Es(r,a,t);a.onGround=w.onGround,(w.hitX||w.hitZ)&&w.onGround&&m&&(a.vel.y=7.4)}if((a.def.melee||a.type==="zombie"||a.type==="piglin"||a.type==="witherskeleton"||a.type==="hoglin"||a.type==="endermite")&&u&&c<(a.def.reach||1.2)&&Math.abs(d)<1.8&&a.cool<=0&&(a.cool=a.def.cd||(a.type==="endermite"?.8:1),this.hooks.hurtPlayer(a.def.damage,h/(c||1)*(a.type==="hoglin"?9:5),f/(c||1)*(a.type==="hoglin"?9:5)),a.def.effect&&this.hooks.effect(a.def.effect[0],a.def.effect[1])),(a.type==="spider"||a.def.hopper||a.def.enderman)&&u&&c<(a.type==="spider"?1.7:a.def.hopper?1.3:1.5)&&Math.abs(d)<1.8&&a.cool<=0&&(a.cool=a.type==="spider"?.9:1,this.hooks.hurtPlayer(a.type==="spider"||a.type==="slime"?2:a.type==="magmacube"?3:6,h/(c||1)*4,f/(c||1)*4),a.type==="magmacube"&&this.hooks.effect("burn",3)),a.def.shulker){a.lid=a.lid===void 0?0:a.lid;const w=u&&c<18?1:0;a.lid+=(w-a.lid)*Math.min(1,t*4),a.parts.lid.rotation.x=-a.lid*1.1,w&&a.lid>.8&&a.cool<=0&&!e.dead&&(a.cool=3.2,this.shootArrow(new I(a.pos.x,a.pos.y+.7,a.pos.z),new I(h,d+.9,f).normalize(),!1,"bullet")),a.vel.x=a.vel.z=0}if(a.def.ranged&&u&&c<22&&a.cool<=0){const w=new I(a.pos.x,a.pos.y+1.6,a.pos.z),C=new I(e.pos.x,e.pos.y+1.2,e.pos.z),y=C.clone().sub(w),b=y.length();y.normalize(),r.raycast(w,y,b)||(a.cool=2.2,this.shootArrow(w,y.multiplyScalar(1).setY(y.y+.04*b/10)))}if((a.def.enderman&&a.aggro||a.def.teleports&&u)&&(a.tpT=(a.tpT===void 0?4:a.tpT)-t,a.tpT<=0&&c>3)){a.tpT=(a.def.tpCool||5)+Math.random()*3;const w=Math.random()*Math.PI*2,C=4+Math.random()*5,y=Math.floor(e.pos.x+Math.cos(w)*C),b=Math.floor(e.pos.z+Math.sin(w)*C),P=r.topY(y,b);P>0&&!r.isSolid(y,P+1,b)&&(this.hooks.tp(a.pos.x,a.pos.y+1,a.pos.z),a.pos.set(y+.5,P+1,b+.5),a.vel.set(0,0,0),this.hooks.tp(a.pos.x,a.pos.y+1,a.pos.z))}if(a.type==="chicken"&&a.vel.y<-2&&(a.vel.y=-2),(a.type==="zombie"||a.type==="skeleton")&&s>.75&&r.skyLit(Math.floor(a.pos.x),Math.floor(a.pos.y+1),Math.floor(a.pos.z))&&!M&&(a.burn=(a.burn||0)+t,a.burn>1&&(a.burn=0,a.hit(2,a.pos.x,a.pos.z),a.vel.set(0,0,0),a.hp<=0))){this.kill(a);continue}a.sound-=t,a.sound<=0&&(a.sound=6+Math.random()*12,c<16&&this.hooks.sound(a.type==="pig"?"oink":a.type==="cow"||a.type==="sheep"?"moo":a.type==="chicken"?"pop":a.type==="zombie"||a.type==="skeleton"||a.type==="spider"?"groan":"")),a.parts.rods&&a.parts.rods.forEach((w,C)=>w.rotation.y+=t*(2+C)),a.walkT+=t*(m?9:0);const D=m?Math.sin(a.walkT)*.7:0;a.parts.legs&&a.parts.legs.forEach((w,C)=>w.rotation.x=C%2?-D:D),a.model.position.copy(a.pos),a.model.rotation.y=a.yaw+Math.PI;const R=a.flash>0||a.fuse>0&&Math.floor(a.fuse*8)%2===0;for(const w of a.materials())w.emissive&&w.emissive.setRGB(R?a.fuse>0?.8:.5:0,R&&a.fuse>0?.8:0,R&&a.fuse>0?.8:0);(c>o*16+24||a.pos.y<-20)&&(a.dispose(this.scene),this.list.splice(l,1))}for(let l=this.arrows.length-1;l>=0;l--){const a=this.arrows[l];if(a.life-=t,a.vel.y-=(a.fire||a.bullet?0:7)*t,a.bullet){const d=new I(e.pos.x,e.pos.y+1,e.pos.z).sub(a.mesh.position).normalize().multiplyScalar(5);a.vel.lerp(d,Math.min(1,t*2.2))}a.mesh.position.addScaledVector(a.vel,t),a.mesh.lookAt(a.mesh.position.clone().add(a.vel));const h=a.mesh.position,f=Math.hypot(h.x-e.pos.x,h.y-(e.pos.y+.9),h.z-e.pos.z)<.75,c=f||a.life<=0||r.isSolid(Math.floor(h.x),Math.floor(h.y),Math.floor(h.z));a.big&&c?(this.hooks.explode(h.x,h.y,h.z,2.6,.4),Math.hypot(h.x-e.pos.x,h.y-e.pos.y,h.z-e.pos.z)<4.5&&this.hooks.effect("burn",4)):f&&!e.dead&&(this.hooks.hurtPlayer(a.bullet||a.fire?3:4,a.vel.x*.25,a.vel.z*.25),a.fire&&this.hooks.effect("burn",4),a.bullet&&this.hooks.effect("levitate",5)),c&&(this.scene.remove(a.mesh),this.arrows.splice(l,1))}this.spawnT-=t,this.spawnT<=0&&(this.spawnT=1.5,this.trySpawn(e,i,s))}flyMob(t,e,i,s,o,r,l,a){const h=t.def.flyKind;if(h==="ghast"||h==="phantom")return this.flyMob2(t,e,i,s,o,r,l,a,h);const f=this.world;let c=0,d=0;s&&a>12?(c=o/(a||1),d=r/(a||1)):s&&a<6&&(c=-o/(a||1),d=-r/(a||1));const u=s?i.pos.y+3+Math.sin(t.age*1.4)*.8:t.pos.y+Math.sin(t.age)*.4;t.vel.x+=(c*t.def.speed-t.vel.x)*Math.min(1,e*3),t.vel.z+=(d*t.def.speed-t.vel.z)*Math.min(1,e*3),t.vel.y+=((u-t.pos.y)*1.2-t.vel.y)*Math.min(1,e*3);const p=t.pos.x+t.vel.x*e,x=t.pos.y+t.vel.y*e,m=t.pos.z+t.vel.z*e;if(f.isSolid(Math.floor(p),Math.floor(x+1),Math.floor(m))||t.pos.set(p,x,m),s)if(t.yaw=Math.atan2(-o,-r),t.burst=t.burst||0,t.burst>0){if(t.burstT-=e,t.burstT<=0){t.burst--,t.burstT=.28;const g=new I(t.pos.x,t.pos.y+1.4,t.pos.z),M=new I(i.pos.x,i.pos.y+1,i.pos.z),S=M.sub(g).normalize();this.shootArrow(g,S,!0)}}else t.cool<=0&&a<26&&!f.raycast(new I(t.pos.x,t.pos.y+1.4,t.pos.z),new I(o,l,r).normalize(),a)&&(t.cool=4,t.burst=3,t.burstT=0,this.hooks.sound("hiss"))}flyMob2(t,e,i,s,o,r,l,a,h){const f=this.world;let c,d,u;const p=(M,S,v,D)=>{t.vel.x+=(M-t.vel.x)*Math.min(1,e*D),t.vel.y+=(S-t.vel.y)*Math.min(1,e*D),t.vel.z+=(v-t.vel.z)*Math.min(1,e*D)};if(h==="ghast"){if(c=u=0,s&&a>21?(c=o/a,u=r/a):s&&a<12&&(c=-o/a,u=-r/a),d=s?i.pos.y+7+Math.sin(t.age)*1.2:t.pos.y,p(c*t.def.speed,(d-t.pos.y)*.8,u*t.def.speed,2),s)if(t.yaw=Math.atan2(-o,-r),t.tele>0){if(t.tele-=e,t.flash=.12,t.tele<=0){const S=new I(t.pos.x,t.pos.y+1.4,t.pos.z),v=new I(i.pos.x+i.vel.x*.4,i.pos.y+1,i.pos.z+i.vel.z*.4).sub(S).normalize();this.shootArrow(S,v,!0,"big")}}else t.cool<=0&&a<42&&!f.raycast(new I(t.pos.x,t.pos.y+1.4,t.pos.z),new I(o,l,r).normalize(),a)&&(t.cool=4.8,t.tele=.9,this.hooks.sound("hiss"))}else{if(!s)p(Math.cos(t.age)*1.5,Math.sin(t.age*.7)*.5,Math.sin(t.age)*1.5,2);else{if(t.swoop=t.swoop===void 0?3:t.swoop-e,!t.diving&&t.swoop<=0&&(t.diving=!0,t.diveT=1.9,t.swoop=4+Math.random()*3),t.diving){const M=new I(i.pos.x-t.pos.x,i.pos.y+1-t.pos.y,i.pos.z-t.pos.z),S=M.length()||1;p(M.x/S*11,M.y/S*11,M.z/S*11,6),t.diveT-=e,S<1.7&&t.cool<=0&&!i.dead&&(t.cool=1.2,this.hooks.hurtPlayer(4,M.x*1.5,M.z*1.5),t.diving=!1),t.diveT<=0&&(t.diving=!1)}else{const M=t.age*.9;c=i.pos.x+Math.cos(M)*9,u=i.pos.z+Math.sin(M)*9,d=i.pos.y+8,p((c-t.pos.x)*.7,(d-t.pos.y)*.9,(u-t.pos.z)*.7,2)}t.yaw=Math.atan2(-t.vel.x,-t.vel.z)}t.parts.wings&&t.parts.wings.forEach(M=>M.g.rotation.z=M.s*Math.sin(t.age*9)*.5)}const x=t.pos.x+t.vel.x*e,m=t.pos.y+t.vel.y*e,g=t.pos.z+t.vel.z*e;f.isSolid(Math.floor(x),Math.floor(m+.5),Math.floor(g))?(t.vel.x*=-.3,t.vel.z*=-.3,t.diving=!1):t.pos.set(x,m,g)}shootArrow(t,e,i=!1,s=null){const o=s==="big",r=s==="bullet",l=r?new Mt(new Yt(.34,.34,.34),new re({color:16052384})):i?new Mt(new Yt(o?1.1:.4,o?1.1:.4,o?1.1:.4),new re({color:o?16765040:16747040})):new Mt(new Yt(.07,.07,.8),new di({color:9071162,emissive:2102280}));l.position.copy(t),this.scene.add(l),this.arrows.push({mesh:l,vel:e.normalize().multiplyScalar(r?5:o?12:i?15:22),life:r?8:i?7:4,fire:i,big:o,bullet:r}),this.hooks.sound("shoot",.5)}trySpawnDim(t,e){if(e!=="survival")return;const i=this.world;if(this.list.length>=(this.dim==="nether"?14:10))return;if(Math.random()<.55)for(let h=0;h<8;h++){const f=Math.floor(t.pos.x+(Math.random()-.5)*44),c=Math.floor(t.pos.z+(Math.random()-.5)*44);for(let d=Math.min(he-6,Math.floor(t.pos.y)+12);d>Math.max(3,Math.floor(t.pos.y)-16);d--){const u=i.getBlock(f,d-1,c),p=this.dim==="nether"&&u===_.NETHER_BRICKS,x=this.dim==="end"&&(u===_.PURPUR||u===_.END_BRICKS);if((p||x)&&!i.isSolid(f,d,c)&&!i.isSolid(f,d+1,c)&&!i.isSolid(f,d+2,c)){if(Math.hypot(f-t.pos.x,c-t.pos.z)<9)break;this.add(p?Math.random()<.65?"witherskeleton":"blaze":Math.random()<.75?"shulker":"endermite",f+.5,d,c+.5);return}}}const o=Math.random()*Math.PI*2,r=14+Math.random()*18,l=Math.floor(t.pos.x+Math.cos(o)*r),a=Math.floor(t.pos.z+Math.sin(o)*r);for(let h=Math.min(he-6,Math.floor(t.pos.y)+22);h>4;h--)if(i.isSolid(l,h-1,a)&&!i.isLiquid(l,h-1,a)&&!i.isSolid(l,h,a)&&!i.isSolid(l,h+1,a)&&!i.isLiquid(l,h,a)){const f=Math.random();if(this.dim==="nether"){const c=f<.26?"piglin":f<.4?"blaze":f<.58?"magmacube":f<.72?"witherskeleton":f<.86?"hoglin":"ghast";this.add(c,l+.5,c==="blaze"?h+2:c==="ghast"?h+8:h,a+.5)}else{const c=f<.34?"enderman":f<.58?"shulker":f<.78?"endermite":"phantom";this.add(c,l+.5,c==="phantom"?h+8:h,a+.5)}return}}trySpawn(t,e,i){if(this.dim!=="overworld")return this.trySpawnDim(t,e);const s=this.world,o=this.list.filter(a=>!a.def.hostile).length,r=this.list.length-o,l=(a,h)=>{const f=Math.random()*Math.PI*2,c=a+Math.random()*(h-a),d=Math.floor(t.pos.x+Math.cos(f)*c),u=Math.floor(t.pos.z+Math.sin(f)*c);return[d,u]};if(this.list.filter(a=>a.type==="villager").length<5&&Math.random()<.45)for(let a=0;a<10;a++){const h=Math.floor(t.pos.x+(Math.random()-.5)*52),f=Math.floor(t.pos.z+(Math.random()-.5)*52);for(let c=Math.min(he-6,Math.floor(t.pos.y)+10);c>Math.max(3,Math.floor(t.pos.y)-10);c--){if(s.getBlock(h,c-1,f)!==_.PLANKS||s.isSolid(h,c,f)||s.isSolid(h,c+1,f)||s.isSolid(h,c+2,f))continue;let d=!1;for(let u=-4;u<=4&&!d;u++)for(let p=-4;p<=4;p++){const x=s.getBlock(h+u,c,f+p);if(x===_.TABLE||x===_.FURNACE||x===_.CHEST){d=!0;break}}if(d&&Math.hypot(h-t.pos.x,f-t.pos.z)>8){this.add("villager",h+.5,c,f+.5);return}break}}if(o<10&&i>.45){const[a,h]=l(16,40),f=s.topY(a,h);if(f>0){const c=s.getBlock(a,f,h);(c===_.GRASS||c===_.SNOW)&&!s.isSolid(a,f+1,h)&&!s.isLiquid(a,f+1,h)&&this.add(Math.random()<.28?$f[Math.floor(Math.random()*$f.length)]:["pig","cow","sheep","chicken"][Math.floor(Math.random()*4)],a+.5,f+1,h+.5)}}if(!(e!=="survival"||r>=8)){if(i<.3){const[a,h]=l(20,36),f=s.topY(a,h);f>0&&!s.isSolid(a,f+1,h)&&!s.isLiquid(a,f+1,h)&&hn[s.getBlock(a,f,h)]&&this.add(jf[Math.floor(Math.random()*jf.length)],a+.5,f+1,h+.5)}else if(r<4){const a=Math.random()*Math.PI*2,h=14+Math.random()*14,f=Math.floor(t.pos.x+Math.cos(a)*h),c=Math.floor(t.pos.z+Math.sin(a)*h),d=s.topY(f,c);if(d<8)return;const u=3+Math.floor(Math.random()*Math.max(1,d-8));s.getBlock(f,u,c)===0&&s.getBlock(f,u+1,c)===0&&s.isSolid(f,u-1,c)&&!s.skyLit(f,u,c)&&this.add(Zf[Math.floor(Math.random()*Zf.length)],f+.5,u,c+.5)}}}}const Xe=(n,t)=>n+Math.random()*(t-n),Gv=[1,1.3,1.75],Vv=[18,20,15],Wv=[4.2,3.2,2.4],Xv=[1,2,3],qv=[5,6,8],Yv=[5,4,3],Jf=[3.2,4.6,6.2];function Kv(){const n=document.createElement("canvas");n.width=n.height=16;const t=n.getContext("2d");for(let i=0;i<16;i++)for(let s=0;s<16;s++){const o=Math.sin(s*12.9+i*78.2)*43758.5%1,r=190+Math.abs(o)*30;t.fillStyle=`rgb(${r|0},${r*.58|0},${r*.28|0})`,t.fillRect(s,i,1,1)}t.fillStyle="#4a2208",t.fillRect(0,0,16,1),t.fillRect(0,15,16,1),t.fillRect(0,0,1,16),t.fillRect(15,0,1,16),t.fillStyle="#2a1204";for(let i=0;i<4;i++)t.fillRect(4+i,4+i,2,1),t.fillRect(4+i,11-i,2,1);t.fillRect(9,10,4,1);const e=new Hi(n);return e.magFilter=xe,e.minFilter=xe,e.generateMipmaps=!1,e.colorSpace=li,e}class jv{constructor(t,e,i){this.scene=t,this.h=e,this.pos=i.clone(),this.name="TORMENTA WITHER",this.type="storm",this.maxHp=360,this.hp=360,this.phase=1,this.scale=1,this.scaleT=1,this.t=0,this.yaw=0,this.flash=0,this.devourT=1,this.atkT=3,this.beamT=3,this.beamOn=!1,this.minionT=10,this.meleeT=0,this.beamHurtT=0,this.shell=1,this.dead=!1,this.skulls=[],this.root=new Se,this.body=new Se,this.root.add(this.body),this.dark=new di({color:1511967}),this.dark2=new di({color:2760758}),this.glow=new re({color:12611839}),this.build(),this.beam=new Mt(new gn(.14,.14,1,6),new re({color:11559167,transparent:!0,opacity:.6,fog:!1,depthWrite:!1})),this.beam.visible=!1,t.add(this.beam),this.skullGeo=new Yt(.9,.9,.9),this.skullMat=new di({color:2102576,emissive:5906576}),t.add(this.root),this.root.position.copy(i)}build(){const{dark:t,dark2:e,glow:i,body:s}=this,o=(a,h,f,c,d,u,p,x=s)=>{const m=new Mt(new Yt(a,h,f),c);return m.position.set(d,u,p),x.add(m),m};o(5,5,5,t,0,0,0);for(let a=0;a<28;a++){const h=Xe(1,2.6),f=Math.floor(Math.random()*3),c=Math.random()<.5?-1:1,d=[Xe(-2.5,2.5),Xe(-2.5,2.5),Xe(-2.5,2.5)];d[f]=c*(2.5+h*.2),o(h,h*Xe(.7,1.3),h,Math.random()<.5?t:e,d[0],d[1],d[2]).rotation.set(Xe(-.3,.3),Xe(-.3,.3),Xe(-.3,.3))}for(let a=0;a<6;a++)o(.9,Xe(2,3.6),.9,e,Xe(-2,2),3.2,Xe(-3,0)).rotation.z=Xe(-.4,.4);this.heads=[];const r=(a,h,f,c,d)=>{const u=new Se;u.position.set(h,f,c),u.rotation.y=d,s.add(u),o(a,a,a,e,0,0,0,u);for(const x of[-1,1])o(a*.24,a*.12,.12,i,x*a*.24,a*.12,a/2+.03,u);const p=new Se;p.position.set(0,-a*.42,a*.05),u.add(p),o(a*.92,a*.3,a*.86,t,0,-a*.1,0,p);for(let x=-2;x<=2;x++)o(a*.08,a*.14,a*.08,i,x*a*.18,a*.05,a*.42,p);this.heads.push({g:u,jaw:p,size:a})};r(3.6,0,4,2.2,0),r(2.6,-3.9,3,1.3,-.35),r(2.6,3.9,3,1.3,.35),this.tents=[];const l=(a,h,f,c,d,u,p,x,m)=>{const g=[];for(let M=0;M<p;M++){const S=x*(1-M/p*.72),v=new Mt(new Yt(S,S,S),M===p-1&&m?i:M%2?t:e);s.add(v),g.push({m:v,s:S})}this.tents.push({b:new I(a,h,f),d:new I(c,d,u).normalize(),segs:g,ph:Math.random()*6})};for(let a=0;a<6;a++)l(Xe(-2,2),-2.4,Xe(-2,1.5),Xe(-.2,.2),-1,Xe(-.3,.1),9,1.5,!1);l(-2.4,-.4,2.2,-.4,-.1,1,8,1.2,!0),l(2.4,-.4,2.2,.4,-.1,1,8,1.2,!0),l(0,-1.8,2.5,0,-.5,1,8,1.2,!0),this.cmd=new Mt(new Yt(1.7,1.7,1.7),new re({map:Kv()})),this.cmd.position.set(0,.2,2.55),s.add(this.cmd),this.shellG=new Se,this.shellG.position.set(0,.2,2.8),s.add(this.shellG),o(3.1,3.1,.8,e,0,0,0,this.shellG);for(const[a,h]of[[-1.4,0],[1.4,0],[0,1.4],[0,-1.4]])o(a?.3:2.8,h?.3:2.8,.2,i,a,h,.45,this.shellG)}headWorld(t){const e=new I;return this.heads[t%3].g.getWorldPosition(e),e}corePos(){return this.pos.clone()}raycast(t,e,i){const s=this.scale,o=this.pos,r=Zo(t,e,{x:o.x-3.1*s,y:o.y-2.8*s,z:o.z-3.1*s},{x:o.x+3.1*s,y:o.y+5.4*s,z:o.z+3.1*s});if(r<0||r>i)return null;const l=new I(o.x,o.y+.2*s,o.z),a=new I(t.x,t.y,t.z),h=Math.max(0,l.clone().sub(a).dot(e)),f=a.addScaledVector(e,h);return{dist:r,crit:this.phase===3&&f.distanceTo(l)<2.1*s}}hit(t,e){if(this.dead)return;if(this.hp-=t*(e?3:1),this.flash=.15,this.h.burst(this.pos.x+Xe(-2,2),this.pos.y+Xe(-1,3),this.pos.z+Xe(-2,2),e?[1,.7,.2]:[.5,.2,.8],e?16:8,4),this.hp<=0)return this.die();const i=this.hp/this.maxHp,s=i>.66?1:i>.33?2:3;s>this.phase&&(this.phase=s,this.scaleT=Gv[s-1],this.h.sound("roar",1),this.h.strikeNear(this.pos.x,this.pos.z),this.h.toast(s===2?"¡La tormenta crece y devora todo!":"¡FASE FINAL! El bloque de comandos está expuesto: ¡golpéalo!"),this.atkT=1.5)}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y,this.pos.z,7,.25),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y,this.pos.z,"storm"),this.h.toast("¡Has derrotado a la Tormenta Wither!"),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.scene.remove(this.beam),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.skulls)this.scene.remove(t.mesh);this.skulls=[]}update(t,e,i){if(this.dead)return;this.t+=t,this.flash=Math.max(0,this.flash-t);const s=this.phase-1;this.scale+=(this.scaleT-this.scale)*Math.min(1,t*1.2);const o=this.scale;this.root.scale.setScalar(o);const r=e.pos.x,l=e.pos.z;let a=r-this.pos.x,h=l-this.pos.z;const f=Math.hypot(a,h)||1;a/=f,h/=f;const c=3.5+1.2*this.phase,d=Vv[s];f>d+1?(this.pos.x+=a*c*t,this.pos.z+=h*c*t):f<d-3&&(this.pos.x-=a*c*.6*t,this.pos.z-=h*c*.6*t),this.pos.x+=-h*1.6*t*Math.sin(this.t*.3),this.pos.z+=a*1.6*t*Math.sin(this.t*.3);const u=e.pos.y+8+2*o;this.pos.y+=(u-this.pos.y)*Math.min(1,t*.8);const p=Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw;this.yaw+=Math.atan2(Math.sin(p),Math.cos(p))*Math.min(1,t*2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*.8)*.4,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((v,D)=>{v.jaw.rotation.x=.15+Math.sin(this.t*2.6+D*1.7)*.22+(this.beamOn?.35:0)});for(const v of this.tents)v.segs.forEach((D,R)=>{const w=R*.32;D.m.position.set(v.b.x+v.d.x*R*1.45+Math.sin(this.t*1.4+v.ph+R*.6)*w,v.b.y+v.d.y*R*1.45-R*.05,v.b.z+v.d.z*R*1.45+Math.cos(this.t*1.1+v.ph*1.3+R*.5)*w)});this.shell+=((this.phase>=3?0:1)-this.shell)*Math.min(1,t*2.5),this.shellG.scale.setScalar(Math.max(.001,this.shell));const x=this.flash>0?.5:0;this.dark.emissive.setRGB(x,x*.4,x),this.dark2.emissive.setRGB(x,x*.4,x);const m=.8+Math.sin(this.t*4)*.2;if(this.cmd.material.color.setScalar(this.phase>=3?1.2*m+.2:.55),this.devourT-=t,this.devourT<=0){this.devourT=.35;const v=3.4*o,D=Math.floor(this.pos.x),R=Math.floor(this.pos.y+.8*o),w=Math.floor(this.pos.z),C=Math.ceil(v);let y=0;for(let b=-C;b<=C&&y<150;b++)for(let P=-C;P<=C;P++)for(let O=-C;O<=C;O++){if(b*b+P*P+O*O>v*v)continue;const U=i.getBlock(D+b,R+P,w+O);U&&U!==_.BEDROCK&&Math.random()<.7&&(i.setBlock(D+b,R+P,w+O,0),y++)}y>6&&this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.25,.1,.35],6,4)}this.beamT-=t,this.beamT<=0&&(this.beamOn=!this.beamOn,this.beamT=this.beamOn?qv[s]:Yv[s],this.beamOn&&this.h.sound("roar",.6));const g=new I(this.pos.x-e.pos.x,this.pos.y+1-(e.pos.y+1),this.pos.z-e.pos.z),M=g.length(),S=this.beamOn&&M<48&&!e.dead;if(this.beam.visible=S,S){const v=g.clone().normalize();e.push.x=v.x*Jf[s],e.push.z=v.z*Jf[s],e.push.y=v.y*11;const D=this.headWorld(0),R=new I(e.pos.x,e.pos.y+1,e.pos.z),w=D.distanceTo(R);this.beam.scale.set(1+Math.sin(this.t*30)*.3,w,1+Math.sin(this.t*30)*.3),this.beam.position.copy(D).add(R).multiplyScalar(.5),this.beam.quaternion.setFromUnitVectors(new I(0,1,0),R.clone().sub(D).normalize()),this.beamHurtT-=t,M<5.5*o&&this.beamHurtT<=0&&(this.beamHurtT=.5,this.h.hurtPlayer(2,0,0))}if(this.meleeT-=t,M<6.5*o&&this.meleeT<=0&&!e.dead&&(this.meleeT=1.3,this.h.hurtPlayer(5,-g.x/M*6,-g.z/M*6)),this.atkT-=t,this.atkT<=0&&!e.dead){this.atkT=Wv[s];for(let v=0;v<Xv[s];v++)this.shoot(e,v)}for(let v=this.skulls.length-1;v>=0;v--){const D=this.skulls[v];D.life-=t,D.mesh.position.addScaledVector(D.vel,t),D.mesh.rotation.x+=t*4,D.mesh.rotation.y+=t*3;const R=D.mesh.position;(Math.hypot(R.x-e.pos.x,R.y-(e.pos.y+.9),R.z-e.pos.z)<1.4||D.life<=0||i.isSolid(Math.floor(R.x),Math.floor(R.y),Math.floor(R.z)))&&(this.h.explode(R.x,R.y,R.z,2.2+.4*this.phase,.5),this.scene.remove(D.mesh),this.skulls.splice(v,1))}this.phase>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=this.phase===2?14:10,this.h.minions()<5&&this.h.spawnMinion()))}shoot(t,e){const i=this.headWorld(e),o=new I(t.pos.x+t.vel.x*.5,t.pos.y+1,t.pos.z+t.vel.z*.5).sub(i).normalize();o.x+=Xe(-.06,.06)*(e+1),o.y+=Xe(-.04,.04),o.z+=Xe(-.06,.06)*(e+1),o.normalize();const r=new Mt(this.skullGeo,this.skullMat);r.position.copy(i),this.scene.add(r),this.skulls.push({mesh:r,vel:o.multiplyScalar(16),life:7}),this.h.sound("shoot",1)}}const Be=(n,t)=>n+Math.random()*(t-n),Qt=(n=0,t=0,e=0)=>new I(n,t,e),ti=n=>Math.atan2(Math.sin(n),Math.cos(n));class ci{constructor(t,e,i,s){this.scene=t,this.h=e,this.pos=i.clone(),Object.assign(this,s),this.hp=this.maxHp,this.phase=1,this.t=0,this.yaw=0,this.flash=0,this.dead=!1,this.scale=s.scale||1,this.root=new Se,this.body=new Se,this.root.add(this.body),this.flashMats=[],this.proj=[],this.clouds=[],this.extra=[],this.waves=[],this.vel=new I,t.add(this.root),this.root.position.copy(i),this.root.scale.setScalar(this.scale)}mat(t,e=0,i=!1){if(i)return new re({color:t});const s=new di({color:t,emissive:e});return this.flashMats.push(s),s}box(t,e,i,s,o,r,l,a=this.body){const h=new Mt(new Yt(t,e,i),s);return h.position.set(o,r,l),a.add(h),h}group(t,e,i,s=this.body){const o=new Se;return o.position.set(t,e,i),s.add(o),o}world(t){const e=Qt();return t.getWorldPosition(e),e}raycast(t,e,i){const s=this.hitbox,o=this.scale,r=this.pos,l=Zo(t,e,{x:r.x-s.hx*o,y:r.y+(s.oy-s.hy)*o,z:r.z-s.hz*o},{x:r.x+s.hx*o,y:r.y+(s.oy+s.hy)*o,z:r.z+s.hz*o});let a=l>=0&&l<=i?{dist:l,crit:!1}:null;for(const h of this.targets||[]){const f=h.pos,c=h.half,d=Zo(t,e,{x:f.x-c,y:f.y-c,z:f.z-c},{x:f.x+c,y:f.y+c,z:f.z+c});d>=0&&d<=i&&(!a||d<a.dist)&&(a={dist:d,crit:!1,target:h})}return a}damageMul(){return 1}hit(t,e,i){if(this.dead)return;if(i&&i.target&&i.target.onHit){i.target.onHit();return}if(this.hp-=t*this.damageMul(),this.flash=.15,this.h.burst(this.pos.x+Be(-1,1),this.pos.y+this.hitbox.oy*this.scale+Be(-1,1),this.pos.z+Be(-1,1),this.burstColor||[.6,.2,.8],8,4),this.hp<=0)return this.die();const s=this.phaseFor(this.hp/this.maxHp);s>this.phase&&(this.phase=s,this.onPhase(s)),this.onHit&&this.onHit()}phaseFor(){return 1}onPhase(){}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z,5,.2),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y+1,this.pos.z,this.type),this.h.toast(`¡Has derrotado a ${this.name}!`),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.proj)this.scene.remove(t.mesh);for(const t of this.extra)this.scene.remove(t);for(const t of this.waves)this.scene.remove(t.mesh);this.proj=[],this.waves=[]}shootProj(t,e,i={}){const s=i.size||.9,o=new Mt(new Yt(s,s,s),new di({color:i.color||2102576,emissive:i.emissive||5906576}));o.position.copy(t),this.scene.add(o),this.proj.push({mesh:o,vel:e.clone().normalize().multiplyScalar(i.speed||16),life:i.life||7,o:i}),this.h.sound("shoot",1)}updateProj(t,e,i){for(let s=this.proj.length-1;s>=0;s--){const o=this.proj[s],r=o.o;o.life-=t,o.mesh.position.addScaledVector(o.vel,t),o.mesh.rotation.x+=t*4,o.mesh.rotation.y+=t*3;const l=o.mesh.position;if(o.reflected){const h=Qt(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z);if(l.distanceTo(h)<(this.hitbox.hx+.8)*this.scale||o.life<=0){if(this.h.explode(l.x,l.y,l.z,2,0),this.h.burst(l.x,l.y,l.z,[1,.6,.2],24,6),this.scene.remove(o.mesh),this.proj.splice(s,1),l.distanceTo(h)<(this.hitbox.hx+.8)*this.scale&&(this.h.toast("¡Rebotada! Gran golpe"),this.hit(o.o.reflectDmg||70,!0),this.dead))return;continue}continue}(Math.hypot(l.x-e.pos.x,l.y-(e.pos.y+.9),l.z-e.pos.z)<1.4||o.life<=0||i.isSolid(Math.floor(l.x),Math.floor(l.y),Math.floor(l.z)))&&(this.h.explode(l.x,l.y,l.z,r.radius||2.2,r.ds||.5),r.effect&&Math.hypot(l.x-e.pos.x,l.y-e.pos.y,l.z-e.pos.z)<(r.radius||2.2)*1.8&&this.h.effect(r.effect[0],r.effect[1]),r.cloud&&this.clouds.push({x:l.x,y:l.y,z:l.z,t:4,tick:0}),this.scene.remove(o.mesh),this.proj.splice(s,1))}for(let s=this.clouds.length-1;s>=0;s--){const o=this.clouds[s];o.t-=t,o.tick-=t,o.tick<=0&&(o.tick=.45,this.h.burst(o.x+Be(-2,2),o.y+Be(0,1.5),o.z+Be(-2,2),[.8,.3,.9],5,1.2),Math.hypot(o.x-e.pos.x,o.z-e.pos.z)<3.3&&Math.abs(o.y-e.pos.y)<3&&!e.dead&&this.h.hurtPlayer(2,0,0)),o.t<=0&&this.clouds.splice(s,1)}}applyFlash(){const t=this.flash>0?.5:0;for(const e of this.flashMats)e.userData.baseE===void 0&&(e.userData.baseE=e.emissive.clone());for(const e of this.flashMats)e.emissive.copy(e.userData.baseE).addScalar(t)}addWave(t,e,i,s){const o=new Mt(new nc(1,.16,6,44),new re({color:s.color||16744496,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}));o.rotation.x=Math.PI/2,o.position.set(t,e+.35,i),this.scene.add(o),this.waves.push({x:t,y:e,z:i,r:1,max:s.max||16,speed:s.speed||11,dmg:s.dmg||8,effect:s.effect,mesh:o,hit:!1})}updateWaves(t,e){for(let i=this.waves.length-1;i>=0;i--){const s=this.waves[i];s.r+=s.speed*t,s.mesh.scale.set(s.r,s.r,1),s.mesh.material.opacity=.85*Math.max(0,1-s.r/s.max);const o=Math.hypot(e.pos.x-s.x,e.pos.z-s.z);!s.hit&&!e.dead&&Math.abs(o-s.r)<1.5&&e.pos.y<s.y+1.15&&(s.hit=!0,this.h.hurtPlayer(s.dmg,(e.pos.x-s.x)/(o||1)*8,(e.pos.z-s.z)/(o||1)*8),s.effect&&this.h.effect(s.effect[0],s.effect[1])),s.r>=s.max&&(this.scene.remove(s.mesh),this.waves.splice(i,1))}}walk(t,e,i,s,o,r){this.vel.x+=(i/o*r-this.vel.x)*Math.min(1,t*5),this.vel.z+=(s/o*r-this.vel.z)*Math.min(1,t*5);const l=Es(e,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t,30);return(l.hitX||l.hitZ)&&l.onGround&&(this.vel.y=11),this.onGround=l.onGround,l}update(t,e,i){this.dead||(this.t+=t,this.flash=Math.max(0,this.flash-t),this.tick(t,e,i),this.updateProj(t,e,i),this.updateWaves(t,e),this.applyFlash())}}class $v extends ci{constructor(t,e,i,s){super(t,e,i,{name:"ENDER DRAGON",type:"dragon",maxHp:300,hitbox:{hx:4.5,hy:2.4,hz:5,oy:.5},scale:1.4,burstColor:[.7,.2,.9]}),this.arena=s||null,this.center=s?Qt(s.cx,s.cy,s.cz):i.clone(),this.theta=Math.random()*6,this.state="circle",this.diveT=12,this.fireT=4,this.breath=0,this.diveTime=0,this.diveTarget=Qt();const o=this.mat(1380378),r=this.mat(2365998),l=this.mat(14696703,14696703,!0);this.box(2.4,2,6,o,0,0,0);for(let a=0;a<6;a++)this.box(.4,.8,.5,r,0,1.3,-2.4+a*.95);this.neck=[];for(let a=0;a<3;a++)this.neck.push(this.box(1.3-a*.1,1.3-a*.1,1.5,r,0,.3+a*.35,3.3+a*1.3));this.head=this.group(0,1.6,7.3),this.box(2,1.3,2.2,o,0,0,0,this.head),this.box(1.2,.7,1.6,r,0,-.15,1.6,this.head),this.jaw=this.group(0,-.6,.4,this.head),this.box(1.5,.35,2.2,o,0,0,.9,this.jaw);for(const a of[-.7,.7])this.box(.5,.25,.1,l,a,.2,1.1,this.head),this.box(.25,.8,.3,r,a*1.2,.9,-.4,this.head).rotation.z=a*.4;this.wings=[];for(const a of[-1,1]){const h=this.group(a*1.2,.8,.5);this.box(5,.22,2.4,r,a*2.5,0,0,h);const f=this.group(a*5,0,0,h);this.box(5,.16,2,o,a*2.5,0,.4,f),this.box(.15,.15,3.4,r,a*2.5,.12,.4,f),this.wings.push({w:h,o:f,sx:a})}this.tail=[];for(let a=0;a<8;a++)this.tail.push(this.box(1.5-a*.14,1.2-a*.1,1.6,a%2?o:r,0,0,-3.6-a*1.5));for(const[a,h]of[[-1,1.8],[1,1.8],[-1,-1.8],[1,-1.8]])this.box(.6,1.4,.6,r,a,-1.4,h);this.crystals=[];for(let a=0;a<4;a++){const h=a/4*Math.PI*2+.4,f=new Se,c=new re({color:16736464}),d=new Mt(new Yt(1.3,1.3,1.3),c),u=new Mt(new Yt(1.3,1.3,1.3),new re({color:16765168}));u.rotation.set(.7,.7,0),u.scale.setScalar(.7),f.add(d,u);const p=new Mt(new gn(.07,.07,1,5),new re({color:16744672,transparent:!0,opacity:.6,fog:!1}));if(this.arena&&this.arena.pillars){const x=this.arena.pillars[(a*2+1)%this.arena.pillars.length];f.position.set(x.x+.5,x.top+3.5,x.z+.5)}else f.position.set(i.x+Math.cos(h)*14,i.y-6+3,i.z+Math.sin(h)*14);t.add(f,p),this.extra.push(f,p),this.crystals.push({g:f,beam:p,alive:!0})}this.h.toast("¡Destruye los 4 cristales para poder dañar al Dragón!")}aliveCrystals(){return this.crystals.filter(t=>t.alive).length}damageMul(){return this.aliveCrystals()?.25:1}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Dragón entra en furia!"),this.diveT=3}raycast(t,e,i){let s=super.raycast(t,e,i);return this.crystals.forEach((o,r)=>{if(!o.alive)return;const l=o.g.position,a=Zo(t,e,{x:l.x-1,y:l.y-1,z:l.z-1},{x:l.x+1,y:l.y+1,z:l.z+1});a>=0&&a<=i&&(!s||a<s.dist)&&(s={dist:a,crit:!1,crystal:r})}),s}hit(t,e,i){if(i&&i.crystal!==void 0){const s=this.crystals[i.crystal];if(!s.alive)return;s.alive=!1,this.scene.remove(s.g,s.beam),this.h.explode(s.g.position.x,s.g.position.y,s.g.position.z,2.2,.35),this.h.burst(s.g.position.x,s.g.position.y,s.g.position.z,[1,.4,.8],24,6),this.h.toast(this.aliveCrystals()?`Cristal destruido (${this.aliveCrystals()} restantes)`:"¡Cristales destruidos! Ahora es vulnerable");return}super.hit(t,e,i)}tick(t,e,i){const s=this.phase;this.center.x+=(e.pos.x-this.center.x)*t*.1,this.center.z+=(e.pos.z-this.center.z)*t*.1;const o=this.aliveCrystals();o&&(this.hp=Math.min(this.maxHp,this.hp+t*2*o));const r=this.pos.clone();if(this.state==="circle"){this.theta+=t*(.32+.1*s);const h=24,f=this.center.x+Math.cos(this.theta)*h,c=this.center.z+Math.sin(this.theta)*h,d=Math.max(e.pos.y+12,this.center.y)+Math.sin(this.t*.9)*2,u=Math.min(1,t*1.6);if(this.pos.x+=(f-this.pos.x)*u,this.pos.z+=(c-this.pos.z)*u,this.pos.y+=(d-this.pos.y)*u,this.diveT-=t,this.fireT-=t,this.diveT<=0&&!e.dead&&(this.state="dive",this.diveTime=0,this.diveTarget.set(e.pos.x,e.pos.y+1,e.pos.z),this.diveT=s===1?13:8,this.h.sound("roar",.7)),this.fireT<=0&&!e.dead){this.fireT=s===1?5:3;const p=this.world(this.head);this.shootProj(p,Qt(e.pos.x,e.pos.y+1,e.pos.z).sub(p),{speed:17,size:1.1,color:4198496,emissive:12595440,radius:2.6,ds:.55,cloud:!0})}}else if(this.state==="dive"){this.diveTime+=t;const h=this.diveTarget.clone().sub(this.pos),f=h.length();this.pos.addScaledVector(h.normalize(),28*t),Math.hypot(this.pos.x-e.pos.x,this.pos.y-(e.pos.y+1),this.pos.z-e.pos.z)<4.2&&!e.dead&&!this.hitDive&&(this.hitDive=!0,this.h.hurtPlayer(9,h.x*8,h.z*8)),(f<3||this.diveTime>3)&&(this.state="circle",this.hitDive=!1)}const l=this.pos.clone().sub(r);l.lengthSq()>1e-5&&(this.yaw+=ti(Math.atan2(l.x,l.z)-this.yaw)*Math.min(1,t*3)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=this.state==="dive"?0:-ti(Math.atan2(l.x,l.z)-this.yaw)*.5,this.root.rotation.x=this.state==="dive"?.5:0;const a=Math.sin(this.t*(this.state==="dive"?7:3.2));for(const h of this.wings)h.w.rotation.z=h.sx*a*.6,h.o.rotation.z=h.sx*a*.45;this.tail.forEach((h,f)=>{h.position.x=Math.sin(this.t*2-f*.6)*f*.35,h.position.y=Math.sin(this.t*1.5-f*.5)*f*.12}),this.jaw.rotation.x=.1+(this.state==="dive"?.5:.18+Math.sin(this.t*2)*.12);for(const h of this.crystals)if(h.alive){h.g.rotation.y+=t*1.2,h.g.position.y+=Math.sin(this.t*2+h.g.position.x)*t*.4;const f=h.g.position,c=this.pos.clone().setY(this.pos.y+1),d=f.distanceTo(c);h.beam.scale.set(1,d,1),h.beam.position.copy(f).add(c).multiplyScalar(.5),h.beam.quaternion.setFromUnitVectors(Qt(0,1,0),c.clone().sub(f).normalize()),h.beam.visible=this.hp<this.maxHp}else h.beam.visible=!1}}class Zv extends ci{constructor(t,e,i){super(t,e,i,{name:"WITHER",type:"wither",maxHp:300,hitbox:{hx:2.2,hy:2.8,hz:2.2,oy:1},scale:1.6,burstColor:[.2,.2,.25]}),this.fireT=2.5,this.minionT=12,this.noBreak=0;const s=this.mat(1447450),o=this.mat(3816e3),r=this.mat(15266047,0,!0);this.box(.45,3,.45,o,0,0,0);for(let a=0;a<3;a++)this.box(2.6-a*.4,.2,.35,o,0,.9-a*.55,0);this.box(.5,1.2,.5,s,0,-1.9,-.5).rotation.x=.3,this.heads=[];const l=(a,h,f,c)=>{const d=this.group(h,f,c);this.box(a,a,a,s,0,0,0,d);for(const u of[-1,1])this.box(a*.22,a*.16,.1,r,u*a*.22,a*.1,a/2+.03,d);this.box(a*.5,a*.14,.1,r,0,-a*.25,a/2+.03,d),this.heads.push(d)};l(1.3,0,2.1,0),l(1,-1.35,1.7,.1),l(1,1.35,1.7,.1),this.aura=new Mt(new Yt(3.6,4.8,3.6),new re({color:8433919,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.aura.position.y=.6,this.body.add(this.aura),this.h.explode(i.x,i.y,i.z,4,.25),this.h.toast("¡El Wither ha despertado!")}phaseFor(t){return t>.5?1:2}damageMul(){return this.phase===2?.6:1}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Wither está acorazado! Te perseguirá de cerca"),this.aura.material.opacity=.28,this.fireT=1}onHit(){if(this.t-this.noBreak<.6)return;this.noBreak=this.t;const t=this.scale,e=Math.floor(this.pos.x),i=Math.floor(this.pos.y+t),s=Math.floor(this.pos.z);for(let o=-3;o<=3;o++)for(let r=-2;r<=4;r++)for(let l=-3;l<=3;l++){const a=this.h.world().getBlock(e+o,i+r,s+l);a&&a!==_.BEDROCK&&Math.random()<.6&&this.h.world().setBlock(e+o,i+r,s+l,0)}}tick(t,e){const i=this.phase,s=e.pos.x,o=e.pos.z,r=s-this.pos.x,l=o-this.pos.z,a=Math.hypot(r,l)||1,h=i===1?16:7,f=i===1?4.5:7;if(a>h+1?(this.pos.x+=r/a*f*t,this.pos.z+=l/a*f*t):a<h-3&&(this.pos.x-=r/a*f*.7*t,this.pos.z-=l/a*f*.7*t),this.pos.y+=(e.pos.y+(i===1?7:3.5)-this.pos.y)*Math.min(1,t*.9),this.yaw+=ti(Math.atan2(r,l)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.3)*.5,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((c,d)=>{c.rotation.y=Math.sin(this.t*1.1+d*2)*.35,c.rotation.x=Math.sin(this.t*.9+d)*.1}),this.fireT-=t,this.fireT<=0&&!e.dead){this.fireT=i===1?2.3:1.6;const c=i===1?1:3;for(let d=0;d<c;d++){const u=this.world(this.heads[d%3]),p=Qt(e.pos.x+e.vel.x*.4,e.pos.y+1,e.pos.z+e.vel.z*.4),x=p.sub(u).normalize();x.x+=Be(-.05,.05)*d,x.z+=Be(-.05,.05)*d,this.shootProj(u,x,{speed:15,size:i===1?.8:1,color:i===1?1118484:2109536,emissive:i===1?3158080:4223231,radius:i===1?1.9:2.3,ds:.4,effect:["poison",6]})}}i===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<5&&this.h.spawnMinion("skeleton")))}}class Jv extends ci{constructor(t,e,i){super(t,e,i,{name:"WARDEN",type:"warden",maxHp:360,hitbox:{hx:.9,hy:1.6,hz:.9,oy:1.6},scale:1.25,burstColor:[.1,.6,.6]}),this.vel=Qt(),this.hw=.55*1.25,this.hh=3.4,this.hwb=.7,this.pos.copy(i),this.state="emerge",this.emerge=2.4,this.boomT=3,this.charge=0,this.meleeT=0,this.angry=!1,this.walk=0;const s=this.mat(862768),o=this.mat(1325634),r=this.mat(3926216,0,!0);this.legL=this.leg(-.4,s),this.legR=this.leg(.4,s),this.box(1.5,1.5,.9,o,0,2.15,0),this.chest=this.box(.7,.6,.12,r,0,2.2,.48);for(const l of[1.75,2,2.45])this.box(1.55,.1,.95,s,0,l,0);this.armL=this.arm(-1.1,o),this.armR=this.arm(1.1,o),this.head=this.group(0,3.25,.05),this.box(1.5,1,.95,o,0,0,0,this.head);for(const l of[-1,1])this.box(.18,.9,.18,s,l*.5,.85,-.1,this.head).rotation.z=-l*.35,this.box(.6,.55,.12,r,l*.95,.15,-.1,this.head);this.box(.9,.12,.1,r,0,-.1,.5,this.head),this.boomBeam=new Mt(new gn(.5,.5,1,8),new re({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.boomBeam),this.extra.push(this.boomBeam),this.h.toast("El Warden emerge de la oscuridad…"),this.h.sound("roar",1)}leg(t,e){const i=this.group(t,1.5,0);return this.box(.7,1.5,.75,e,0,-.75,0,i),i}arm(t,e){const i=this.group(t,2.8,0);return this.box(.7,2.6,.7,e,0,-1.3,0,i),i}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Warden ruge enfurecido!"),this.boomT=1}damageMul(){return this.state==="emerge"?0:1}tick(t,e,i){const s=this.phase;if(this.state==="emerge"){this.emerge-=t,this.root.position.set(this.pos.x,this.pos.y-Math.max(0,this.emerge)*1.2,this.pos.z),this.h.darkness(.6),this.emerge<=0&&(this.state="hunt");return}const o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1,a=e.pos.y-this.pos.y;this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*5);const h=this.charge>0?.4:s===1?3.4:5;this.vel.x+=(o/l*h-this.vel.x)*Math.min(1,t*6),this.vel.z+=(r/l*h-this.vel.z)*Math.min(1,t*6),l<2.2&&(this.vel.x*=.2,this.vel.z*=.2);const f={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},c=Es(i,f,t);(c.hitX||c.hitZ)&&c.onGround&&(this.vel.y=9),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.2,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;const d=Math.sin(this.walk)*.55;this.legL.rotation.x=d,this.legR.rotation.x=-d,this.armL.rotation.x=-d*.7,this.armR.rotation.x=d*.7,this.head.rotation.x=Math.sin(this.t*2)*.05,this.chest.scale.setScalar(1+(this.charge>0?.6+Math.sin(this.t*25)*.3:Math.sin(this.t*4)*.1)),this.meleeT-=t,l<3.8&&Math.abs(a)<3&&this.meleeT<=0&&!e.dead&&this.charge<=0&&(this.meleeT=1.5,this.armR.rotation.x=-2,this.h.hurtPlayer(s===1?12:15,o/l*9,r/l*9),this.h.sound("hit",1)),this.boomT-=t,this.charge>0?(this.charge-=t,this.h.sound("hiss",.4),this.charge<=0&&this.sonicBoom(e,i)):this.boomT<=0&&l>4.5&&l<30&&!e.dead&&(this.charge=1.5,this.boomT=s===1?5:3.2,this.h.sound("roar",.5)),this.boomBeam.material.opacity=Math.max(0,this.boomBeam.material.opacity-t*3),this.h.darkness(l<28?.35+.15*Math.sin(this.t*3):0)}sonicBoom(t,e){const i=this.pos.clone().setY(this.pos.y+2.6*this.scale),s=Qt(t.pos.x,t.pos.y+1,t.pos.z),o=s.clone().sub(i),r=o.length();o.normalize(),this.boomBeam.material.opacity=.85,this.boomBeam.scale.set(1,r,1),this.boomBeam.position.copy(i).add(s).multiplyScalar(.5),this.boomBeam.quaternion.setFromUnitVectors(Qt(0,1,0),o),this.h.sound("explode",.8),e.raycast(i,o,r)||this.h.hurtPlayer(this.phase===1?12:15,o.x*8,o.z*8),this.h.burst(t.pos.x,t.pos.y+1,t.pos.z,[.4,1,.9],14,5)}dispose(){this.h.darkness(0),super.dispose()}}class Qv extends ci{constructor(t,e,i){super(t,e,i,{name:"GUARDIÁN ANCESTRAL",type:"guardian",maxHp:240,hitbox:{hx:1.8,hy:1.8,hz:1.8,oy:0},scale:2.4,burstColor:[.3,.9,.8]}),this.laserT=4,this.charge=0,this.beam=null,this.thorns=0;const s=this.mat(8032114),o=this.mat(6189912),r=this.mat(14715472),l=this.mat(6353120,0,!0);this.box(1.5,1.5,1.5,s,0,0,0);for(let h=0;h<6;h++)this.box(.4,.4,.05,r,Be(-.6,.6),Be(-.6,.6),-.78);this.spikes=[];const a=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,-1]];for(const[h,f,c]of a)for(let d=0;d<3;d++){const u=this.group(h*.75+(h?0:Be(-.5,.5)),f*.75+(f?0:Be(-.5,.5)),c*.75+(c?0:Be(-.5,.5)));u.lookAt(u.position.clone().add(Qt(h,f,c))),this.box(.14,.14,.9,o,0,0,.45,u),this.box(.1,.1,.2,l,0,0,.95,u),this.spikes.push(u)}this.eye=this.group(0,0,.78),this.box(.95,.95,.12,this.mat(15790304),0,0,0,this.eye),this.iris=this.box(.5,.5,.14,this.mat(13119520,5244936),0,0,.04,this.eye),this.box(.18,.18,.16,this.mat(1050632),0,0,.06,this.eye),this.box(.5,.5,.9,o,0,0,-1.1).scale.set(1,.6,1),this.laser=new Mt(new gn(.1,.1,1,6),new re({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Guardián Ancestral te observa… ¡cuidado con su láser!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Guardián se enfurece! Su láser es más rápido")}onHit(){const t=this.h.player();t&&Math.hypot(t.pos.x-this.pos.x,t.pos.z-this.pos.z)<7.5&&!t.dead&&this.h.hurtPlayer(2,0,0)}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;if(this.charge<=0){const u=s===1?14:11,p=s===1?3:4.4;l>u+1?(this.pos.x+=o/l*p*t,this.pos.z+=r/l*p*t):l<u-3&&(this.pos.x-=o/l*p*.7*t,this.pos.z-=r/l*p*.7*t),this.pos.y+=(e.pos.y+4-this.pos.y)*Math.min(1,t*.8)}this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw;const a=1+Math.sin(this.t*1.6)*.12+(this.charge>0?.35:0);this.spikes.forEach(u=>u.scale.setScalar(a)),this.iris.scale.setScalar(this.charge>0?1.5+Math.sin(this.t*30)*.2:1),this.laserT-=t;const h=this.world(this.eye),f=Qt(e.pos.x,e.pos.y+1,e.pos.z),c=f.clone().sub(h),d=c.length();if(c.normalize(),this.charge>0){const u=s===1?2.6:1.7,p=1-this.charge/u;this.charge-=t,this.laser.material.opacity=.25+p*.6,this.laser.scale.set(.5+p*3.2,d,.5+p*3.2),this.laser.position.copy(h).add(f).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(Qt(0,1,0),c),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.6),!i.raycast(h,c,d)&&!e.dead&&(this.h.hurtPlayer(9,c.x*3,c.z*3),this.h.effect("fatigue",25),this.h.toast("¡Fatiga de minería!")),this.laserT=s===1?6:3.5)}else this.laser.material.opacity=0,this.laserT<=0&&d<40&&!e.dead&&(this.charge=s===1?2.6:1.7,this.h.sound("hiss",.6))}}class t_ extends ci{constructor(t,e,i){super(t,e,i,{name:"DEVASTADOR",type:"ravager",maxHp:280,hitbox:{hx:1.4,hy:1.5,hz:1.9,oy:1.4},scale:1.5,burstColor:[.5,.4,.3]}),this.vel=Qt(),this.state="stalk",this.timer=4,this.dirx=0,this.dirz=1,this.hitDone=!1,this.walk=0,this.stunMul=1;const s=this.mat(4867392),o=this.mat(6182478),r=this.mat(14210244),l=this.mat(11542560,3147784);this.box(2.2,1.7,3.1,s,0,1.9,0),this.box(1.6,.9,1.6,o,0,3,-.6),this.neck=this.group(0,2.3,1.4),this.box(1,1,1.2,o,0,.1,.4,this.neck),this.head=this.group(0,.2,1.2,this.neck),this.box(1.7,1.45,1.6,s,0,0,.5,this.head);for(const a of[-1,1])this.box(.25,1,.25,r,a*.7,1,.2,this.head).rotation.z=-a*.3,this.box(.2,.6,.2,r,a*.55,-.55,1.2,this.head),this.box(.3,.2,.1,l,a*.45,.2,1.32,this.head);this.legs=[[-.8,1.2],[.8,1.2],[-.8,-1.2],[.8,-1.2]].map(([a,h])=>{const f=this.group(a,1.2,h);return this.box(.8,1.2,.8,o,0,-.6,0,f),f}),this.hw=1.2,this.hh=3.2,this.h.toast("¡El Devastador ruge! Esquiva sus embestidas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Devastador se enfurece!"),this.timer=1}damageMul(){return this.state==="stun"?1.7:1}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.timer-=t;let a=0;if(this.state==="stalk")a=s===1?3.6:4.8,this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*4),this.timer<=0&&!e.dead&&l<40&&(this.state="windup",this.timer=1,this.h.sound("roar",.9));else if(this.state==="windup")this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*6),this.neck.rotation.x=-.6*Math.min(1,(1-this.timer)*2),this.timer<=0&&(this.state="charge",this.timer=1.9,this.hitDone=!1,this.dirx=o/l,this.dirz=r/l,this.yaw=Math.atan2(this.dirx,this.dirz),l<9&&!e.dead&&this.h.hurtPlayer(4,this.dirx*10,this.dirz*10));else if(this.state==="charge"){a=15,this.vel.x=this.dirx*a,this.vel.z=this.dirz*a,this.neck.rotation.x=.5,l<3.4&&!this.hitDone&&!e.dead&&Math.abs(e.pos.y-this.pos.y)<3.5&&(this.hitDone=!0,this.h.hurtPlayer(11,this.dirx*12,this.dirz*12));const d=Math.floor(this.pos.x+this.dirx*2.2),u=Math.floor(this.pos.z+this.dirz*2.2),p=Math.floor(this.pos.y);for(let x=-1;x<=1;x++)for(let m=-1;m<=1;m++)for(let g=0;g<3;g++){const M=i.getBlock(d+x,p+g,u+m);M&&M!==_.BEDROCK&&M!==_.STONE&&M!==_.COBBLE&&i.setBlock(d+x,p+g,u+m,0)}this.timer<=0&&(this.state="stun",this.timer=2.2,this.h.sound("hit",1),this.h.burst(this.pos.x,this.pos.y+2,this.pos.z,[.8,.8,.3],14,4))}else this.state==="stun"&&(this.neck.rotation.x=.9,this.timer<=0&&(this.state="stalk",this.timer=s===1?5:3,this.neck.rotation.x=0));this.state!=="charge"&&(this.vel.x+=(o/l*a-this.vel.x)*Math.min(1,t*5),this.vel.z+=(r/l*a-this.vel.z)*Math.min(1,t*5)),(this.state==="stun"||this.state==="windup")&&(this.vel.x*=.85,this.vel.z*=.85);const h={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},f=Es(i,h,t);(f.hitX||f.hitZ)&&f.onGround&&this.state!=="stun"&&(this.vel.y=10),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*1.6;const c=Math.sin(this.walk)*.5;this.legs.forEach((d,u)=>d.rotation.x=u%2?-c:c),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class e_ extends ci{constructor(t,e,i){super(t,e,i,{name:"INVOCADOR",type:"evoker",maxHp:220,hitbox:{hx:.9,hy:1.4,hz:.9,oy:1.6},scale:1.7,burstColor:[.9,.8,.2]}),this.fangT=3,this.vexT=7,this.tpT=6,this.vex=[],this.fangs=[],this.targets=[];const s=this.mat(7105648),o=this.mat(14202928),r=this.mat(14264458),l=this.mat(3158068);this.box(.95,1.6,.65,s,0,1,0),this.box(1,.18,.7,o,0,.25,0),this.box(.98,.14,.68,o,0,1,0),this.head=this.group(0,2.05,0),this.box(.55,.65,.55,r,0,.15,0,this.head),this.box(.14,.28,.16,r,0,.05,.34,this.head);for(const a of[-1,1])this.box(.16,.08,.04,this.mat(16777215,0,!0),a*.14,.25,.28,this.head),this.box(.2,.05,.05,l,a*.14,.34,.28,this.head);this.arms=this.box(1,.3,.45,s,0,1.5,.4),this.armL=this.group(-.62,1.7,.1),this.armR=this.group(.62,1.7,.1);for(const a of[this.armL,this.armR])this.box(.28,.9,.28,s,0,-.45,0,a);this.arms.visible=!0,this.h.toast("El Invocador alza los brazos… ¡cuidado con los colmillos y los vex!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Invocador desata un círculo de colmillos!"),this.fangT=1}raycast(t,e,i){return this.targets=this.vex.map(s=>({pos:s.pos,half:.7,onHit:()=>this.killVex(s)})),super.raycast(t,e,i)}killVex(t){this.h.burst(t.pos.x,t.pos.y,t.pos.z,[.5,.7,1],14,4),this.h.sound("hit",1),this.scene.remove(t.mesh),this.vex.splice(this.vex.indexOf(t),1)}spawnFang(t,e,i,s,o){const r=s.topY(Math.floor(t),Math.floor(e));if(r<0)return;const l=new Se,a=new di({color:15788224,emissive:4208664});for(let h=0;h<3;h++){const f=new Mt(new Yt(.5-h*.14,.7,.5-h*.14),a);f.position.y=.35+h*.6,l.add(f)}l.position.set(t,r+1,e),l.scale.y=.01,l.visible=!1,this.scene.add(l),this.fangs.push({x:t,z:e,y:r+1,g:l,t:-i,hit:!1})}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*5);const a=13;l>a+2?(this.pos.x+=o/l*3.5*t,this.pos.z+=r/l*3.5*t):l<a-4&&(this.pos.x-=o/l*3*t,this.pos.z-=r/l*3*t),this.pos.y+=(e.pos.y+3.2-this.pos.y)*Math.min(1,t*1.2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.7)*.35,this.pos.z),this.root.rotation.y=this.yaw;const h=this.fangT<1||this.vexT<1;if(this.armL.rotation.x=this.armR.rotation.x=h?-2.4+Math.sin(this.t*14)*.2:0,this.arms.visible=!h,this.tpT-=t,this.tpT<=0){this.tpT=s===1?8:5,this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5);const f=Math.random()*Math.PI*2,c=11+Math.random()*4;this.pos.set(e.pos.x+Math.cos(f)*c,e.pos.y+3+Math.random()*2,e.pos.z+Math.sin(f)*c),this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5),this.h.sound("pop",1)}if(this.fangT-=t,this.fangT<=0&&!e.dead){this.fangT=s===1?4.2:3,this.h.sound("shoot",.8);for(let f=1;f<=12;f++)this.spawnFang(this.pos.x+o/l*f*1.4+Math.sin(f)*.2,this.pos.z+r/l*f*1.4,f*.07,i,e);if(s===2)for(let f=0;f<12;f++){const c=f/12*Math.PI*2;this.spawnFang(e.pos.x+Math.cos(c)*3,e.pos.z+Math.sin(c)*3,.9,i,e)}}for(let f=this.fangs.length-1;f>=0;f--){const c=this.fangs[f];c.t+=t,c.t>=0&&(c.g.visible=!0,c.g.scale.y=Math.min(1,c.t*6),!c.hit&&c.t>.12&&Math.hypot(c.x-e.pos.x,c.z-e.pos.z)<1.2&&Math.abs(c.y-e.pos.y)<2.2&&!e.dead&&(c.hit=!0,this.h.hurtPlayer(6,0,0)),c.t>1.1&&(this.scene.remove(c.g),this.fangs.splice(f,1)))}if(this.vexT-=t,this.vexT<=0&&!e.dead){this.vexT=s===1?10:7,this.h.sound("pop",1);const f=s===1?3:5;for(let c=0;c<f;c++){const d=new Se,u=new di({color:9416928,emissive:2109520,transparent:!0,opacity:.85}),p=new Mt(new Yt(.5,.7,.5),u),x=new Mt(new Yt(.7,.05,.4),u),m=x.clone();x.position.set(-.55,.2,-.1),m.position.set(.55,.2,-.1),d.add(p,x,m);for(const M of[-.1,.1]){const S=new Mt(new Yt(.08,.08,.05),new re({color:16719904}));S.position.set(M,.15,.27),d.add(S)}const g=Qt(this.pos.x+Be(-2,2),this.pos.y+1+Be(0,2),this.pos.z+Be(-2,2));d.position.copy(g),this.scene.add(d),this.vex.push({mesh:d,pos:g,w1:x,w2:m,life:28,cool:1})}}for(let f=this.vex.length-1;f>=0;f--){const c=this.vex[f];c.life-=t,c.cool-=t;const d=Qt(e.pos.x,e.pos.y+1,e.pos.z).sub(c.pos),u=d.length();c.pos.addScaledVector(d.normalize(),6.2*t),c.pos.y+=Math.sin(this.t*6+f)*t*1.5,c.mesh.position.copy(c.pos),c.mesh.rotation.y=Math.atan2(d.x,d.z),c.w1.rotation.z=Math.sin(this.t*25)*.7,c.w2.rotation.z=-c.w1.rotation.z,u<1.2&&c.cool<=0&&!e.dead&&(c.cool=.9,this.h.hurtPlayer(3,0,0)),c.life<=0&&(this.scene.remove(c.mesh),this.vex.splice(f,1))}}dispose(){for(const t of this.vex)this.scene.remove(t.mesh);for(const t of this.fangs)this.scene.remove(t.g);this.vex=[],this.fangs=[],super.dispose()}}class i_ extends ci{constructor(t,e,i){super(t,e,i,{name:"GHAST GIGANTE",type:"ghast",maxHp:200,hitbox:{hx:2.2,hy:2.2,hz:2.2,oy:0},scale:1.8,burstColor:[1,1,1]}),this.fireT=3,this.tele=0,this.theta=Math.random()*6,this.targets=[];const s=this.mat(15921906),o=this.mat(14474460),r=this.mat(4208696);this.box(4,4,4,s,0,0,0),this.eyeL=this.box(.9,.25,.1,r,-.9,.2,2.03),this.eyeR=this.box(.9,.25,.1,r,.9,.2,2.03),this.mouth=this.box(.7,.35,.1,r,0,-.9,2.03),this.tents=[];for(const l of[-1.4,0,1.4])for(const a of[-1.4,0,1.4]){const h=2.2+Math.abs(l*a)*.5+(l===0&&a===0?.6:0),f=this.box(.55,h,.55,o,l,-2-h/2,a);this.tents.push({m:f,base:-2-h/2,ph:Math.random()*6})}this.redEye=this.mat(16719904,0,!0),this.h.toast("¡Un Ghast gigante! Golpea sus bolas de fuego para devolvérselas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Ghast llora de rabia y dispara más rápido!")}raycast(t,e,i){return this.targets=this.proj.filter(s=>!s.reflected).map(s=>({pos:s.mesh.position,half:1.25,onHit:()=>this.reflect(s)})),super.raycast(t,e,i)}reflect(t){t.reflected=!0,t.o={...t.o,reflectDmg:70},t.life=6,t.vel=Qt(this.pos.x,this.pos.y,this.pos.z).sub(t.mesh.position).normalize().multiplyScalar(22),this.h.sound("hit",1)}tick(t,e){const i=this.phase;this.theta+=t*(.18+.05*i);const s=22,o=e.pos.x+Math.cos(this.theta)*s,r=e.pos.z+Math.sin(this.theta)*s,l=e.pos.y+11,a=Math.min(1,t*.7);if(this.pos.x+=(o-this.pos.x)*a,this.pos.z+=(r-this.pos.z)*a,this.pos.y+=(l-this.pos.y)*a,this.yaw+=ti(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t)*.7,this.pos.z),this.root.rotation.y=this.yaw,this.tents.forEach((h,f)=>{h.m.rotation.z=Math.sin(this.t*1.6+h.ph)*.18,h.m.rotation.x=Math.cos(this.t*1.3+h.ph)*.18}),this.fireT-=t,this.fireT<=0&&this.tele<=0&&!e.dead&&(this.tele=1.1,this.h.sound("hiss",.7)),this.tele>0){if(this.tele-=t,this.eyeL.material=this.eyeR.material=this.redEye,this.eyeL.scale.y=this.eyeR.scale.y=2.2,this.mouth.scale.set(1.6,3.4,1),this.tele<=0){this.fireT=i===1?3.6:2.2;const h=Qt(this.pos.x,this.pos.y,this.pos.z),f=Qt(e.pos.x+e.vel.x*.5,e.pos.y+1,e.pos.z+e.vel.z*.5).sub(h);this.shootProj(h,f,{speed:13,size:2,color:16769184,emissive:16736272,radius:3.6,ds:.6,effect:["burn",5],life:9})}}else this.eyeL.material=this.eyeR.material=this.mouth.material,this.eyeL.scale.y=this.eyeR.scale.y=1,this.mouth.scale.set(1,1,1)}}class n_ extends ci{constructor(t,e,i){super(t,e,i,{name:"HEROBRINE",type:"herobrine",maxHp:400,hitbox:{hx:.5,hy:1,hz:.5,oy:1},scale:1.35,burstColor:[1,1,1]}),this.vel=Qt(),this.hw=.4,this.hh=2.4,this.tpT=5,this.boltT=4,this.walk=0,this.meleeT=0,this.minionT=8;const s=this.mat(14724236),o=this.mat(2794936),r=this.mat(3817372),l=this.mat(16777215,0,!0);this.head=this.group(0,1.5,0),this.box(.5,.5,.5,s,0,.25,0,this.head),this.box(.5,.14,.5,this.mat(3810322),0,.46,0,this.head);for(const a of[-1,1])this.box(.16,.1,.06,l,a*.13,.3,.26,this.head);this.box(.5,.75,.25,o,0,1.125,0),this.legL=this.group(-.125,.75,0),this.box(.25,.75,.25,r,0,-.375,0,this.legL),this.legR=this.group(.125,.75,0),this.box(.25,.75,.25,r,0,-.375,0,this.legR),this.armL=this.group(-.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armL),this.armR=this.group(.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armR),this.aura=new ev(16777215,0,14),this.root.add(this.aura),this.aura.position.y=1.5,this.h.toast("Una figura de ojos blancos te observa…"),this.h.sound("roar",.6)}phaseFor(t){return t>.6?1:t>.25?2:3}onPhase(t){this.h.sound("roar",1),t===2&&(this.h.toast("Las luces se apagan…"),this.tpT=1),t===3&&(this.h.toast("¡HEROBRINE LEVITA! Cuidado con sus rayos"),this.vel.y=6)}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*6),this.h.darkness(s>=2?.55+Math.sin(this.t*5)*.1:.15);const a=s===1?3.4:4.4;if(s<3){this.vel.x+=(o/l*a*(l>2.4?1:0)-this.vel.x)*Math.min(1,t*6),this.vel.z+=(r/l*a*(l>2.4?1:0)-this.vel.z)*Math.min(1,t*6);const f=Es(i,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t);(f.hitX||f.hitZ)&&f.onGround&&(this.vel.y=9)}else{const f=e.pos.y+5,c=14;this.pos.y+=(f-this.pos.y)*Math.min(1,t*1.5),l>c?(this.pos.x+=o/l*5*t,this.pos.z+=r/l*5*t):l<c-4&&(this.pos.x-=o/l*4*t,this.pos.z-=r/l*4*t)}this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.4;const h=Math.sin(this.walk)*.8;if(this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h,this.armR.rotation.x=s===3?-1.4:h,this.root.position.set(this.pos.x,this.pos.y+(s===3?Math.sin(this.t*2)*.4:0),this.pos.z),this.root.rotation.y=this.yaw,this.aura.intensity=s>=3?3+Math.sin(this.t*12):0,this.tpT-=t,this.tpT<=0&&!e.dead){this.tpT=s===1?6.5:s===2?4:5,this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5);const f=e.lookDir(),c=Math.hypot(f.x,f.z)||1,d=Math.floor(e.pos.x-f.x/c*4),u=Math.floor(e.pos.z-f.z/c*4),p=i.topY(d,u);s<3&&p>0?(this.pos.set(d+.5,p+1,u+.5),this.vel.set(0,0,0)):this.pos.set(d+.5,e.pos.y+5,u+.5),this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5),this.h.sound("pop",1)}if(this.meleeT-=t,l<2.6&&Math.abs(e.pos.y-this.pos.y)<2.5&&this.meleeT<=0&&!e.dead&&s<3&&(this.meleeT=1.1,this.h.hurtPlayer(s===1?8:11,o/l*7,r/l*7),this.h.sound("hit",1)),this.boltT-=t,this.boltT<=0&&!e.dead){this.boltT=s===1?6:s===2?3.8:2.4;const f=e.pos.x,c=e.pos.z;if(this.h.burst(f,e.pos.y+.5,c,[1,1,.6],18,2),setTimeout(()=>{this.dead||this.h.strikeNear(f,c)},900),s===3){const d=Qt(this.pos.x,this.pos.y+2,this.pos.z),u=Qt(e.pos.x,e.pos.y+1,e.pos.z).sub(d);this.shootProj(d,u,{speed:18,size:.9,color:16777215,emissive:16777215,radius:2.2,ds:.45,effect:["burn",3]})}}s>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=11,this.h.minions()<5&&this.h.spawnMinion("zombie")))}dispose(){this.h.darkness(0),super.dispose()}}class s_ extends ci{constructor(t,e,i){super(t,e,i,{name:"REY SLIME",type:"slimeking",maxHp:260,hitbox:{hx:2.6,hy:2.6,hz:2.6,oy:2.6},scale:1.4,burstColor:[.4,1,.4]}),this.vel=Qt(),this.hw=3.2,this.hh=5.4,this.jumpT=2.5,this.onGround=!1,this.splitAt=[.75,.5,.25],this.squash=1;const s=new di({color:6348896,emissive:1064976,transparent:!0,opacity:.72});this.flashMats.push(s);const o=this.mat(3119663,536584);this.slime=this.group(0,0,0),this.box(5,5,5,s,0,2.6,0,this.slime),this.box(2.2,2.2,2.2,o,0,2.6,0,this.slime);const r=this.mat(1060880,0,!0);for(const a of[-1,1])this.box(.7,.7,.2,r,a*1.2,3.1,2.55,this.slime);this.box(1.5,.3,.2,r,0,1.8,2.55,this.slime);const l=this.mat(15777840,3153920);this.box(3.4,.6,3.4,l,0,5.4,0,this.slime);for(const[a,h]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4],[0,1.6],[0,-1.6]])this.box(.5,.9,.5,l,a,6,h,this.slime);this.h.toast("El Rey Slime salta hacia ti. ¡Se divide al perder vida!")}phaseFor(t){return t>.5?1:t>.25?2:3}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Slime salta más rápido!")}onHit(){const t=this.hp/this.maxHp;for(;this.splitAt.length&&t<this.splitAt[0];){this.splitAt.shift();for(let e=0;e<4;e++)this.h.spawnMinion("slime");this.h.toast("¡Se divide en slimes!")}}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;if(this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*4),this.jumpT-=t,this.onGround&&(this.vel.x*=.8,this.vel.z*=.8,this.jumpT<=0&&!e.dead)){this.jumpT=s===1?2.6:s===2?1.8:1.2;const h=Math.min(l,22)/1.35*.95;this.vel.y=17,this.vel.x=o/l*h,this.vel.z=r/l*h,this.onGround=!1,this.squash=1.4,this.h.sound("pop",1)}const a=Es(i,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t,34);if(a.onGround&&!this.onGround){this.onGround=!0,this.squash=.6,this.h.sound("explode",.7);const h=s===1?8:11,f=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z);this.h.burst(this.pos.x,this.pos.y+.3,this.pos.z,[.4,1,.4],36,8),f<h&&Math.abs(e.pos.y-this.pos.y)<3&&!e.dead&&this.h.hurtPlayer(s===1?8:12,(e.pos.x-this.pos.x)/(f||1)*9,(e.pos.z-this.pos.z)/(f||1)*9);const c=Math.floor(this.pos.x),d=Math.floor(this.pos.z),u=Math.floor(this.pos.y)-1;for(let p=-3;p<=3;p++)for(let x=-3;x<=3;x++)p*p+x*x<=9&&i.getBlock(c+p,u,d+x)&&i.getBlock(c+p,u,d+x)!==_.BEDROCK&&Math.random()<.6&&i.setBlock(c+p,u,d+x,0)}(a.hitX||a.hitZ)&&(this.vel.x*=-.2,this.vel.z*=-.2),this.squash+=(1-this.squash)*Math.min(1,t*8),this.slime.scale.set(1/Math.sqrt(this.squash),this.squash,1/Math.sqrt(this.squash)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,l<3.2&&Math.abs(e.pos.y-this.pos.y)<4&&!e.dead&&(this.contactT=(this.contactT||0)-t)<=0&&(this.contactT=1,this.h.hurtPlayer(5,o/l*6,r/l*6))}}class o_ extends ci{constructor(t,e,i){super(t,e,i,{name:"REY BLAZE",type:"blazeking",maxHp:280,hitbox:{hx:1.4,hy:1.7,hz:1.4,oy:1.4},scale:1.8,burstColor:[1,.6,.1]}),this.theta=Math.random()*6,this.volleyT=3,this.waveT=6,this.minionT=12;const s=this.mat(15773728,10506240),o=this.mat(16742928,12595200),r=this.mat(2101248,0,!0);this.head=this.box(1.5,1.5,1.5,s,0,2.2,0);for(const l of[-.35,.35])this.box(.34,.26,.06,r,l,2.35,.77,this.body);this.box(.7,.16,.06,r,0,1.85,.77);for(let l=0;l<5;l++){const a=l/5*Math.PI*2;this.box(.25,.7,.25,o,Math.cos(a)*.6,3.15,Math.sin(a)*.6).rotation.z=Math.cos(a)*.3}this.core=this.box(.8,.8,.8,this.mat(16769136,0,!0),0,1,0),this.rings=[];for(let l=0;l<3;l++){const a=this.group(0,.2+l*.7,0);for(let h=0;h<6;h++){const f=h/6*Math.PI*2;this.box(.22,1.5,.22,l%2?o:s,Math.cos(f)*(1.1+l*.1),0,Math.sin(f)*(1.1+l*.1),a)}this.rings.push(a)}this.h.toast("¡El Rey Blaze arde sobre el Nether! Salta sus ondas de fuego")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Blaze llama a sus blazes!"),this.minionT=1}tick(t,e,i){const s=this.phase;this.theta+=t*(.32+.1*s);const o=15,r=e.pos.x+Math.cos(this.theta)*o,l=e.pos.z+Math.sin(this.theta)*o,a=e.pos.y+8+Math.sin(this.t*1.1)*1.5,h=Math.min(1,t*.9);if(this.pos.x+=(r-this.pos.x)*h,this.pos.z+=(l-this.pos.z)*h,this.pos.y+=(a-this.pos.y)*h,this.yaw+=ti(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw)*Math.min(1,t*4),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.rings.forEach((f,c)=>f.rotation.y+=t*(1.6+c*.7)*(c%2?-1:1)),this.core.scale.setScalar(1+Math.sin(this.t*6)*.15),this.volleyT-=t,this.volleyT<=0&&!e.dead){this.volleyT=s===1?3.6:2.5;const f=Qt(this.pos.x,this.pos.y+3,this.pos.z),c=Qt(e.pos.x,e.pos.y+1,e.pos.z).sub(f).normalize(),d=s===1?5:7;for(let u=0;u<d;u++){const p=(u-(d-1)/2)*.16,x=c.clone();x.x=c.x*Math.cos(p)-c.z*Math.sin(p),x.z=c.x*Math.sin(p)+c.z*Math.cos(p),this.shootProj(f,x,{speed:13,size:.75,color:16756800,emissive:16732176,radius:1.8,ds:.28,effect:["burn",4]})}}this.waveT-=t,this.waveT<=0&&!e.dead&&(this.waveT=s===1?7.5:5,this.addWave(this.pos.x,e.pos.y,this.pos.z,{max:30,speed:12,dmg:9,color:16738832,effect:["burn",4]}),this.h.sound("roar",.6)),s===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<6&&(this.h.spawnMinion("blaze"),this.h.spawnMinion("blaze"))))}}class r_ extends ci{constructor(t,e,i){super(t,e,i,{name:"REY PIGLIN",type:"piglinking",maxHp:340,hitbox:{hx:1,hy:1.9,hz:1,oy:1.9},scale:1.9,burstColor:[.9,.7,.2]}),this.hw=.9,this.hh=7,this.state="walk",this.timer=3,this.slamT=9,this.cryT=12,this.axeT=5,this.spinT=7,this.walkA=0;const s=this.mat(13208184),o=this.mat(15253568,3154944),r=this.mat(5917240),l=this.mat(8022608),a=this.mat(16724e3,0,!0);this.legL=this.group(-.28,1.5,0),this.box(.5,1.5,.5,r,0,-.75,0,this.legL),this.legR=this.group(.28,1.5,0),this.box(.5,1.5,.5,r,0,-.75,0,this.legR),this.box(1.2,1.5,.6,l,0,2.25,0),this.box(1.3,.35,.7,o,0,2.85,0),this.box(1.25,.25,.65,o,0,1.7,0),this.armL=this.group(-.82,2.85,0),this.box(.45,1.5,.45,s,0,-.75,0,this.armL),this.armR=this.group(.82,2.85,0),this.box(.45,1.5,.45,s,0,-.75,0,this.armR),this.box(.2,2.2,.2,this.mat(6965802),0,-1.4,.4,this.armR),this.box(1.1,.7,.18,this.mat(10132122),.5,-2.2,.4,this.armR),this.head=this.group(0,3.35,0),this.box(1.2,1,1,s,0,.1,0,this.head),this.box(.7,.45,.25,this.mat(11563103),0,-.05,.6,this.head);for(const h of[-1,1])this.box(.14,.14,.05,a,h*.3,.3,.52,this.head),this.box(.25,.6,.12,s,h*.78,.35,0,this.head).rotation.z=h*.6,this.box(.12,.3,.1,this.mat(15788240),h*.2,-.3,.7,this.head);this.box(1.3,.3,1.1,o,0,.65,0,this.head);for(let h=-1;h<=1;h++)this.box(.25,.4,.2,o,h*.45,.95,0,this.head);this.h.toast("El Rey Piglin golpea su hacha: ¡oro y furia!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Piglin gira como un torbellino!"),this.spinT=2}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.timer-=t,this.slamT-=t,this.cryT-=t,this.axeT-=t,this.spinT-=t,this.state!=="spin"&&(this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*4));let a=s===1?3.4:4.4;if(this.state==="walk"){if(this.timer<=0&&l<6.5&&!e.dead)this.state="windup",this.timer=.65;else if(this.slamT<=0&&l<22&&this.onGround)this.vel.y=14,this.vel.x=o/l*Math.min(l,14)*.7,this.vel.z=r/l*Math.min(l,14)*.7,this.state="slam",this.slamT=s===1?9:6,this.slammed=!1,this.h.sound("roar",.7);else if(this.spinT<=0&&s===2&&l<8)this.state="spin",this.timer=1.8,this.spinT=7,this.spinHit=0;else if(this.axeT<=0&&l>7&&!e.dead){this.axeT=s===1?5.5:3.8;const f=Qt(this.pos.x,this.pos.y+4,this.pos.z);this.shootProj(f,Qt(e.pos.x,e.pos.y+1,e.pos.z).sub(f),{speed:15,size:1,color:15253568,emissive:8413200,radius:1.5,ds:.22}),this.armR.rotation.x=-2.4}if(this.cryT<=0&&(this.cryT=14,this.h.sound("roar",1),this.h.toast("¡El Rey Piglin llama a su guardia!"),this.h.minions()<6))for(let f=0;f<3;f++)this.h.spawnMinion("piglin")}else this.state==="windup"?(a=0,this.armR.rotation.x=-2.6*Math.min(1,(.65-this.timer)*2),this.timer<=0&&(this.state="walk",this.timer=s===1?2.6:1.8,l<7.5&&!e.dead&&this.h.hurtPlayer(13,o/l*12,r/l*12),this.h.sound("hit",1),this.armR.rotation.x=.6)):this.state==="slam"?(a=0,this.onGround&&this.vel.y<=0&&this.t>.2&&(this.state="walk",this.timer=1.5,this.h.burst(this.pos.x,this.pos.y+.4,this.pos.z,[.6,.4,.3],30,8),this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:14,speed:12,dmg:9,color:15253568}),this.h.sound("explode",.8))):this.state==="spin"&&(a=1.2,this.yaw+=t*14,this.spinHit-=t,this.armR.rotation.x=-1.6,l<5&&this.spinHit<=0&&!e.dead&&(this.spinHit=.45,this.h.hurtPlayer(7,o/l*9,r/l*9)),this.timer<=0&&(this.state="walk"));this.walk(t,i,o,r,l,a),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.4;const h=Math.sin(this.walkA)*.6;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h*.7,this.state==="walk"&&(this.armR.rotation.x+=(h*.7-this.armR.rotation.x)*Math.min(1,t*6)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class a_ extends ci{constructor(t,e,i){super(t,e,i,{name:"ENDERMAN TITÁN",type:"endertitan",maxHp:380,hitbox:{hx:.45,hy:1.5,hz:.45,oy:1.5},scale:3.6,burstColor:[.7,.2,1]}),this.hw=1.2,this.hh=10,this.tpT=4,this.rockT=3,this.sweepT=0,this.mite=12,this.gaze=0,this.gazeCool=0;const s=this.mat(1182232),o=this.mat(14708991,0,!0);this.legL=this.group(-.12,1.5,0),this.box(.18,1.5,.18,s,0,-.75,0,this.legL),this.legR=this.group(.12,1.5,0),this.box(.18,1.5,.18,s,0,-.75,0,this.legR),this.box(.5,.95,.26,s,0,1.98,0),this.armL=this.group(-.34,2.45,0),this.box(.13,1.35,.13,s,0,-.67,0,this.armL),this.armR=this.group(.34,2.45,0),this.box(.13,1.35,.13,s,0,-.67,0,this.armR),this.head=this.group(0,2.7,0),this.box(.5,.42,.5,s,0,0,0,this.head);for(const r of[-.13,.13])this.box(.15,.06,.03,o,r,.02,.26,this.head);this.jaw=this.group(0,-.22,0,this.head),this.box(.44,.1,.44,s,0,0,0,this.jaw),this.h.toast("El Enderman Titán se alza… ¡no le mires a los ojos!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Titán grita y convoca endermites!"),this.mite=1}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;if(this.tpT-=t,this.rockT-=t,this.sweepT-=t,this.mite-=t,this.gazeCool-=t,this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*4),this.tpT<=0&&!e.dead){this.tpT=s===1?5.2:3.4,this.h.burst(this.pos.x,this.pos.y+4,this.pos.z,[.8,.3,1],30,6);const p=Math.random()*Math.PI*2,x=7+Math.random()*3,m=Math.floor(e.pos.x+Math.cos(p)*x),g=Math.floor(e.pos.z+Math.sin(p)*x),M=i.topY(m,g);M>0&&(this.pos.set(m+.5,M+1,g+.5),this.vel.set(0,0,0),this.sweepT=.8,this.h.burst(this.pos.x,this.pos.y+4,this.pos.z,[.8,.3,1],30,6),this.h.sound("pop",1))}if(this.sweepT>0?(this.armR.rotation.x=-2.2,this.armL.rotation.x=-2.2,this.sweepT-t<=0&&l<9&&!e.dead&&(this.h.hurtPlayer(12,o/l*11,r/l*11),this.h.sound("hit",1))):(this.armR.rotation.x+=(Math.sin(this.t*1.5)*.1-this.armR.rotation.x)*Math.min(1,t*5),this.armL.rotation.x=this.armR.rotation.x),this.rockT<=0&&l>5&&!e.dead){this.rockT=s===1?3.8:2.6;const p=s===1?1:2;for(let x=0;x<p;x++){const m=Qt(this.pos.x,this.pos.y+9,this.pos.z),g=Qt(e.pos.x+e.vel.x*.5,e.pos.y+1,e.pos.z+e.vel.z*.5).sub(m);g.x+=Be(-.08,.08)*x,this.shootProj(m,g,{speed:15,size:1.8,color:14211232,emissive:3153984,radius:2.4,ds:.42})}this.jaw.rotation.x=.8}else this.jaw.rotation.x*=.92;const a=e.lookDir(),h=this.pos.x-e.pos.x,f=this.pos.y+9.4-(e.pos.y+1.6),c=this.pos.z-e.pos.z,d=Math.hypot(h,f,c)||1;if((a.x*h+a.y*f+a.z*c)/d>.985&&d<45?this.gaze+=t:this.gaze=Math.max(0,this.gaze-t*2),this.gaze>1.6&&this.gazeCool<=0&&!e.dead&&(this.gaze=0,this.gazeCool=6,this.h.sound("roar",1),this.h.hurtPlayer(5,0,0),this.h.effect("levitate",3),this.h.toast("¡Su mirada te eleva!")),s===2&&this.mite<=0&&(this.mite=12,this.h.minions()<7))for(let p=0;p<3;p++)this.h.spawnMinion("endermite");this.walk(t,i,o,r,l,l>14?3.5:0);const u=Math.sin(this.t*3)*.25;this.legL.rotation.x=u,this.legR.rotation.x=-u,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class l_ extends ci{constructor(t,e,i){super(t,e,i,{name:"SEÑOR DEL VACÍO",type:"voidlord",maxHp:300,hitbox:{hx:2,hy:2.2,hz:2,oy:0},scale:1.8,burstColor:[.5,.1,.9]}),this.rifts=[],this.riftT=3,this.laserT=6,this.charge=0,this.tpT=9,this.minionT=14;const s=this.mat(459790),o=this.mat(11555071,0,!0),r=this.mat(2363448,1574960),l=this.group(0,0,0);l.rotation.set(.6,.6,0),this.core=l,this.box(2.4,2.4,2.4,s,0,0,0,l),this.box(2.6,.14,2.6,o,0,0,0,l),this.box(.14,2.6,2.6,o,0,0,0,l),this.box(2.6,2.6,.14,o,0,0,0,l),this.eye=this.box(.9,.9,.2,this.mat(16736511,0,!0),0,0,1.3),this.body.add(this.eye),this.orbs=[];for(let a=0;a<5;a++){const h=this.box(.5,1.1,.5,r,0,0,0);h.rotation.z=.5,this.orbs.push(h)}this.laser=new Mt(new gn(.1,.1,1,6),new re({color:13660415,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Señor del Vacío abre grietas bajo tus pies… ¡muévete!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El vacío se desborda! Su gravedad te atrae")}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1,a=16;if(l>a+2?(this.pos.x+=o/l*4*t,this.pos.z+=r/l*4*t):l<a-5&&(this.pos.x-=o/l*3*t,this.pos.z-=r/l*3*t),this.pos.y+=(e.pos.y+7-this.pos.y)*Math.min(1,t*.9),this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw,this.core.rotation.y+=t*.8,this.core.rotation.x+=t*.3,this.orbs.forEach((u,p)=>{const x=this.t*1.1+p/5*Math.PI*2;u.position.set(Math.cos(x)*2.8,Math.sin(this.t*2+p)*.6,Math.sin(x)*2.8),u.rotation.y=x}),this.riftT-=t,this.riftT<=0&&!e.dead){this.riftT=s===1?4.2:2.8;const u=s===1?1:2;for(let p=0;p<u;p++){const x=e.pos.x+(p?Be(-5,5):0),m=e.pos.z+(p?Be(-5,5):0),g=new Mt(new gn(3,3,.25,24),new re({color:8401151,transparent:!0,opacity:.25,fog:!1,depthWrite:!1})),M=i.topY(Math.floor(x),Math.floor(m));g.position.set(x,(M>0?M:e.pos.y-1)+1.2,m),this.scene.add(g),this.rifts.push({x,z:m,y:g.position.y,t:-1.2,m:g,tick:0})}}for(let u=this.rifts.length-1;u>=0;u--){const p=this.rifts[u];p.t+=t,p.t<0?p.m.material.opacity=.18+Math.sin(this.t*14)*.08:(p.m.material.opacity=.7,p.m.material.color.setHex(1706032),p.tick-=t,p.tick<=0&&(p.tick=.45,this.h.burst(p.x+Be(-2,2),p.y,p.z+Be(-2,2),[.6,.2,1],5,3)),Math.hypot(e.pos.x-p.x,e.pos.z-p.z)<3.1&&Math.abs(e.pos.y+.5-p.y)<2.2&&!e.dead&&(p.dmgT=(p.dmgT||0)-t,p.dmgT<=0&&(p.dmgT=.5,this.h.hurtPlayer(3,0,0),this.h.effect("levitate",2))),p.t>5&&(this.scene.remove(p.m),this.rifts.splice(u,1)))}this.laserT-=t;const h=Qt(this.pos.x,this.pos.y,this.pos.z),f=Qt(e.pos.x,e.pos.y+1,e.pos.z),c=f.clone().sub(h),d=c.length();if(c.normalize(),this.charge>0){const u=s===1?2.1:1.5,p=1-this.charge/u;this.charge-=t,this.laser.material.opacity=.2+p*.7,this.laser.scale.set(.5+p*3,d,.5+p*3),this.laser.position.copy(h).add(f).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(Qt(0,1,0),c),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.7),!i.raycast(h,c,d)&&!e.dead&&this.h.hurtPlayer(10,c.x*6,c.z*6),this.laserT=s===1?6.5:4)}else this.laser.material.opacity=0,this.laserT<=0&&d<45&&!e.dead&&(this.charge=s===1?2.1:1.5,this.h.sound("hiss",.7));if(s===2&&d<36&&(e.push.x=(this.pos.x-e.pos.x)/l*3.2,e.push.z=(this.pos.z-e.pos.z)/l*3.2),this.tpT-=t,this.tpT<=0&&!e.dead){this.tpT=s===1?10:7,this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.6,.2,1],30,6);const u=Math.random()*Math.PI*2;this.pos.set(e.pos.x+Math.cos(u)*16,e.pos.y+8,e.pos.z+Math.sin(u)*16),this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.6,.2,1],30,6),this.h.sound("pop",1)}s===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=15,this.h.minions()<6&&(this.h.spawnMinion("shulker"),this.h.spawnMinion("shulker"))))}dispose(){for(const t of this.rifts)this.scene.remove(t.m);this.rifts=[],super.dispose()}}class h_ extends ci{constructor(t,e,i){super(t,e,i,{name:"CREEPER TITÁN",type:"creepertitan",maxHp:320,hitbox:{hx:.6,hy:1.8,hz:.6,oy:1.8},scale:2.6,burstColor:[.3,.9,.3]}),this.hw=1.15,this.hh=9,this.fuse=0,this.stun=0,this.mT=12,this.walkA=0,this.green=this.mat(5154894,1060880),this.green2=this.mat(4099646,532488),this.legs=[[-.28,.3],[.28,.3],[-.28,-.3],[.28,-.3]].map(([h,f])=>{const c=this.group(h,.9,f);return this.box(.5,.9,.5,this.green2,0,-.45,0,c),c}),this.box(1,1.6,.6,this.green,0,1.7,0);const s=document.createElement("canvas");s.width=s.height=8;const o=s.getContext("2d");o.fillStyle="#4ea84e",o.fillRect(0,0,8,8),o.fillStyle="#0c1a0c",o.fillRect(1,2,2,2),o.fillRect(5,2,2,2),o.fillRect(3,4,2,2),o.fillRect(2,5,1,2),o.fillRect(5,5,1,2);const r=new Hi(s);r.magFilter=xe,r.minFilter=xe,r.generateMipmaps=!1,r.colorSpace=li;const l=new di({map:r,emissive:1060880});this.flashMats.push(l);const a=new Mt(new Yt(1,1,1),[this.green,this.green,this.green,this.green,l,this.green]);a.position.set(0,3.1,0),this.body.add(a),this.head=a,this.h.toast("¡El Creeper Titán sisea! Aléjate cuando se hinche")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡Un rayo lo carga! Su explosión será colosal"),this.h.strikeNear(this.pos.x,this.pos.z),this.green.emissive.setHex(1061119),this.green2.emissive.setHex(532672),this.flashMats.forEach(t=>t.userData.baseE=void 0)}damageMul(){return this.stun>0?1.8:1}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*3),this.mT-=t;let a=s===1?2.8:3.6;if(this.stun>0)this.stun-=t,a=0,this.root.rotation.z=Math.sin(this.t*20)*.02;else if(this.fuse>0){this.fuse-=t,a=.8;const f=s===1?3.2:2.2,c=1-this.fuse/f;this.body.scale.setScalar(1+c*.28),this.flash=Math.floor(this.fuse*10)%2===0?.12:0,Math.floor(c*20)%4===0&&this.h.sound("hiss",.3),this.fuse<=0&&(this.body.scale.setScalar(1),this.h.explode(this.pos.x,this.pos.y+3.2,this.pos.z,s===1?9:12,.95),this.h.burst(this.pos.x,this.pos.y+3,this.pos.z,[1,.7,.2],60,12),this.stun=3.6,this.h.toast("¡Está aturdido! Golpéalo ahora"))}else l<15&&!e.dead&&(this.fuse=s===1?3.2:2.2);this.walk(t,i,o,r,l,a),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.1;const h=Math.sin(this.walkA)*.5;this.legs.forEach((f,c)=>f.rotation.x=c%2?-h:h),this.mT<=0&&this.stun<=0&&(this.mT=14,this.h.minions()<6&&(this.h.spawnMinion("creeper"),this.h.spawnMinion("creeper"))),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class c_ extends ci{constructor(t,e,i){super(t,e,i,{name:"GÓLEM COLOSAL",type:"colossus",maxHp:420,hitbox:{hx:1.8,hy:2.1,hz:.8,oy:2.1},scale:2,burstColor:[.8,.8,.8]}),this.hw=1.5,this.hh=8,this.state="walk",this.timer=3,this.poundT=6,this.rockT=7,this.novaT=9,this.walkA=0;const s=this.mat(13158600,1052688),o=this.mat(10132122),r=this.mat(4880954);this.legL=this.group(-.4,1.4,0),this.box(.7,1.4,.7,o,0,-.7,0,this.legL),this.legR=this.group(.4,1.4,0),this.box(.7,1.4,.7,o,0,-.7,0,this.legR),this.box(1.9,1.6,1.1,s,0,2.2,0),this.box(1.2,.8,.9,o,0,1.4,0);for(const[l,a]of[[-.5,2.6],[.6,2]])this.box(.4,.8,.12,r,l,a,.58);this.armL=this.group(-1.2,2.9,0),this.box(.6,2.4,.6,s,0,-1.2,0,this.armL),this.box(.8,.8,.8,o,0,-2.5,0,this.armL),this.armR=this.group(1.2,2.9,0),this.box(.6,2.4,.6,s,0,-1.2,0,this.armR),this.box(.8,.8,.8,o,0,-2.5,0,this.armR),this.head=this.group(0,3.4,.1),this.box(.8,.9,.8,s,0,.3,0,this.head),this.box(.2,.4,.25,o,0,.2,.5,this.head),this.eyes=[-1,1].map(l=>this.box(.18,.1,.04,this.mat(15790208,0,!0),l*.2,.5,.42,this.head)),this.h.toast("El Gólem Colosal despierta: ¡salta sus ondas de choque!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡Sus ojos arden en rojo!"),this.eyes.forEach(t=>t.material.color.setHex(16719904)),this.novaT=1.5}damageMul(){return .85}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.timer-=t,this.poundT-=t,this.rockT-=t,this.novaT-=t,this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*3);let a=s===1?2.4:3.2;if(this.state==="walk")if(this.timer<=0&&l<8.5&&!e.dead)this.state="punch",this.timer=.8;else if(this.poundT<=0&&l<18)this.state="pound",this.timer=1.1,this.poundT=s===1?7:4.5;else if(this.rockT<=0&&l>9){this.rockT=s===1?7:4.5;const f=Qt(this.pos.x,this.pos.y+6,this.pos.z);this.shootProj(f,Qt(e.pos.x,e.pos.y+1,e.pos.z).sub(f),{speed:14,size:1.6,color:9079434,emissive:2105376,radius:2.2,ds:.4}),this.armR.rotation.x=-2.6}else s===2&&this.novaT<=0&&this.onGround&&(this.novaT=8,this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:20,speed:13,dmg:9,color:14737663}),this.h.sound("roar",.7));else this.state==="punch"?(a=0,this.armR.rotation.x=-2.8*Math.min(1,(.8-this.timer)*1.8),this.timer<=0&&(this.state="walk",this.timer=s===1?2.4:1.6,l<9.5&&!e.dead&&this.h.hurtPlayer(14,o/l*13,r/l*13),this.h.sound("hit",1),this.armR.rotation.x=.8)):this.state==="pound"&&(a=0,this.armL.rotation.x=this.armR.rotation.x=-3*Math.min(1,(1.1-this.timer)*1.2),this.timer<=0&&(this.state="walk",this.timer=1.4,this.armL.rotation.x=this.armR.rotation.x=.7,this.h.sound("explode",.8),this.h.burst(this.pos.x,this.pos.y+.4,this.pos.z,[.6,.6,.6],36,9),this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:s===1?16:22,speed:12,dmg:10,color:16777215})));this.walk(t,i,o,r,l,a),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.3;const h=Math.sin(this.walkA)*.5;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.state==="walk"&&(this.armL.rotation.x+=(-h*.6-this.armL.rotation.x)*Math.min(1,t*5),this.armR.rotation.x+=(h*.6-this.armR.rotation.x)*Math.min(1,t*5)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class f_ extends ci{constructor(t,e,i){super(t,e,i,{name:"GOKU",type:"goku",maxHp:450,hitbox:{hx:.5,hy:1,hz:.4,oy:1},scale:1.6,burstColor:[1,.8,.2]}),this.hw=.5,this.hh=3.2,this.state="walk",this.timer=2,this.kameT=7,this.tpT=5,this.comboT=3,this.genkiT=20,this.walkA=0,this.beam=null,this.aim=Qt();const s=this.mat(15777936),o=this.mat(15759888),r=this.mat(2117824),l=this.mat(1381658),a=this.mat(1381658);this.hairMat=a,this.hairBlk=[],this.legL=this.group(-.2,.95,0),this.box(.34,.95,.38,o,0,-.48,0,this.legL),this.legR=this.group(.2,.95,0),this.box(.34,.95,.38,o,0,-.48,0,this.legR),this.box(.36,.2,.42,r,-.2,.1,.02),this.box(.36,.2,.42,r,.2,.1,.02),this.box(.8,.8,.45,o,0,1.4,0),this.box(.82,.14,.47,r,0,1.05,0),this.armL=this.group(-.58,1.72,0),this.box(.3,.7,.3,o,0,-.35,0,this.armL),this.box(.28,.4,.28,s,0,-.9,0,this.armL),this.armR=this.group(.58,1.72,0),this.box(.3,.7,.3,o,0,-.35,0,this.armR),this.box(.28,.4,.28,s,0,-.9,0,this.armR),this.head=this.group(0,2,0),this.box(.52,.52,.5,s,0,.26,0,this.head);for(const h of[-.13,.13])this.box(.1,.07,.04,l,h,.3,.26,this.head),this.box(.14,.04,.04,l,h,.38,.26,this.head);this.box(.54,.2,.52,a,0,.6,-.02,this.head);for(let h=0;h<7;h++){const f=(h-3)*.28,c=this.box(.16,.6+h%2*.3,.16,a,(h-3)*.1,.9,(h%3-1)*.08,this.head);c.rotation.z=-f*.6,c.rotation.x=(h%3-1)*.2,this.hairBlk.push(c)}this.aura=new Mt(new Ms(1.5,12,10),new re({color:16769088,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.aura.position.y=1.4,this.body.add(this.aura),this.h.toast("¡GOKU quiere pelear! Esquiva el Kamehameha: ¡salta o rodea!")}phaseFor(t){return t>.6?1:t>.25?2:3}onPhase(t){this.h.sound("roar",1),t===2?(this.h.toast("¡SUPER SAIYAJIN!"),this.hairMat.color.setHex(16767008),this.hairMat.emissive.setHex(8411136),this.aura.material.opacity=.22,this.h.explode(this.pos.x,this.pos.y+1,this.pos.z,3,.1)):(this.h.toast("¡GENKI DAMA! Aguanta o golpéalo antes de que la lance"),this.genkiT=.5)}tele(t){const e=Math.random()*6.28,i=4.5;this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.6,.9,1],18,5),this.pos.x=t.pos.x+Math.cos(e)*i,this.pos.z=t.pos.z+Math.sin(e)*i,this.pos.y=t.pos.y+.5,this.vel.set(0,0,0),this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.6,.9,1],18,5),this.h.sound("hiss",.8)}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.timer-=t,this.kameT-=t,this.tpT-=t,this.comboT-=t,this.genkiT-=t,this.state!=="kame"&&(this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*6));let a=s===1?4.2:5.6;if(this.state==="walk")s===3&&this.genkiT<=0&&!e.dead?(this.state="genki",this.timer=4.5,this.genkiT=18,this.ball=new Mt(new Ms(1,14,12),new re({color:8440063,fog:!1})),this.ball.position.set(this.pos.x,this.pos.y+7,this.pos.z),this.scene.add(this.ball),this.extra.push(this.ball),this.vel.set(0,0,0)):this.kameT<=0&&l>5&&!e.dead?(this.state="kame",this.timer=1.5,this.kameT=s===1?8:5.5,this.h.sound("hiss",1)):this.tpT<=0&&l>3?(this.tpT=s===1?6:3.5,this.tele(e)):this.comboT<=0&&l<3.8&&!e.dead&&(this.state="combo",this.timer=1.2,this.hitN=0,this.comboT=s===1?4:2.5);else if(this.state==="kame"){a=0;const f=1-this.timer/1.5;this.armL.rotation.x=this.armR.rotation.x=-1.4,this.aim.set(o,e.pos.y+1-(this.pos.y+2.6),r).normalize(),this.beam||(this.beam=new Mt(new gn(1,1,1,10,1,!0),new re({color:7391487,transparent:!0,opacity:.55,fog:!1,depthWrite:!1,side:Ei})),this.scene.add(this.beam),this.charge=new Mt(new Ms(1,10,8),new re({color:10543359,fog:!1})),this.scene.add(this.charge),this.extra.push(this.beam,this.charge),this.beam.visible=!1);const c=Qt(this.pos.x+Math.sin(this.yaw)*1.2,this.pos.y+2.6,this.pos.z+Math.cos(this.yaw)*1.2);this.charge.position.copy(c),this.charge.scale.setScalar(.2+f*.7),this.charge.visible=!0,this.timer<=0&&(this.state="fire",this.timer=1.2,this.fireDir=this.aim.clone(),this.fireFrom=c.clone(),this.charge.visible=!1,this.beam.visible=!0,this.hitBeam=!1,this.h.sound("explode",.9))}else if(this.state==="fire"){a=0;const f=60,c=this.fireDir,d=this.fireFrom.clone().addScaledVector(c,f/2);this.beam.position.copy(d),this.beam.scale.set(.9+Math.sin(this.t*40)*.12,f,.9+Math.sin(this.t*40)*.12),this.beam.quaternion.setFromUnitVectors(Qt(0,1,0),c);const u=Qt(e.pos.x,e.pos.y+.9,e.pos.z).sub(this.fireFrom),p=u.dot(c),x=u.clone().addScaledVector(c,-p).length();!this.hitBeam&&!e.dead&&p>0&&p<f&&x<1.6&&(this.hitBeam=!0,this.h.hurtPlayer(s===1?14:18,c.x*12,c.z*12),this.h.explode(e.pos.x,e.pos.y+1,e.pos.z,3,.15)),this.timer<=0&&(this.state="walk",this.beam.visible=!1,this.timer=1.2,this.armL.rotation.x=this.armR.rotation.x=0)}else if(this.state==="combo")a=6,this.armR.rotation.x=Math.sin(this.t*25)*1.4,this.armL.rotation.x=-Math.sin(this.t*25)*1.4,this.timer<1.2-(this.hitN+1)*.28&&this.hitN<4&&(this.hitN++,l<4.2&&!e.dead&&this.h.hurtPlayer(4,o/l*5,r/l*5),this.h.sound("hit",.8)),this.timer<=0&&(this.state="walk",this.timer=1.5,this.armL.rotation.x=this.armR.rotation.x=0);else if(this.state==="genki"){a=0,this.armL.rotation.x=this.armR.rotation.x=-3;const f=1-this.timer/4.5;if(this.ball.position.set(this.pos.x,this.pos.y+6.5,this.pos.z),this.ball.scale.setScalar(.6+f*3.4),Math.random()<t*20&&this.h.burst(this.pos.x+Be(-4,4),this.pos.y+Be(1,6),this.pos.z+Be(-4,4),[.6,.85,1],3,2),this.timer<=0){const c=this.ball.position.clone();this.scene.remove(this.ball),this.extra=this.extra.filter(d=>d!==this.ball),this.ball=null,this.shootProj(c,Qt(e.pos.x,e.pos.y+1,e.pos.z).sub(c),{speed:20,size:4.5,color:8440063,emissive:4231423,radius:7,ds:1.3}),this.state="walk",this.timer=2,this.armL.rotation.x=this.armR.rotation.x=0}}this.walk(t,i,o,r,l,this.state==="walk"&&l<2.5?0:a),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.5;const h=Math.sin(this.walkA)*.6;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.state==="walk"&&(this.armL.rotation.x=-h*.7,this.armR.rotation.x=h*.7),s>=2&&(this.aura.material.opacity=.2+Math.sin(this.t*14)*.06,this.aura.scale.setScalar(1+Math.sin(this.t*9)*.08)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class d_ extends ci{constructor(t,e,i){super(t,e,i,{name:"SR. BURNS",type:"burns",maxHp:260,hitbox:{hx:.45,hy:.95,hz:.35,oy:.95},scale:1.7,burstColor:[.5,1,.3]}),this.hw=.4,this.hh=3.2,this.state="walk",this.timer=2,this.dogT=6,this.barrelT=4,this.waveT=9,this.shieldT=14,this.shield=0,this.walkA=0;const s=this.mat(15260848),o=this.mat(3485740),r=this.mat(15790312),l=this.mat(1052688);this.mat(6348848,3186704),this.legL=this.group(-.15,.85,0),this.box(.26,.85,.3,o,0,-.42,0,this.legL),this.legR=this.group(.15,.85,0),this.box(.26,.85,.3,o,0,-.42,0,this.legR),this.box(.62,.9,.34,o,0,1.3,0),this.box(.2,.6,.05,r,0,1.4,.19),this.armL=this.group(-.45,1.65,0),this.box(.2,.9,.22,o,0,-.45,0,this.armL),this.armR=this.group(.45,1.65,0),this.box(.2,.9,.22,o,0,-.45,0,this.armR),this.box(.2,.2,.2,s,0,-.95,0,this.armR),this.box(.2,.2,.2,s,0,-.95,0,this.armL),this.head=this.group(0,1.95,0),this.box(.46,.5,.4,s,0,.25,0,this.head),this.box(.14,.18,.14,s,0,.2,.26,this.head);for(const a of[-.11,.11])this.box(.1,.1,.04,l,a,.32,.21,this.head);this.box(.1,.08,.04,l,0,.08,.2,this.head),this.box(.14,.16,.1,s,-.3,.2,0,this.head),this.box(.14,.16,.1,s,.3,.2,0,this.head),this.shieldMesh=new Mt(new Ms(1.5,14,10),new re({color:7405392,transparent:!0,opacity:.28,fog:!1,depthWrite:!1})),this.shieldMesh.position.y=1.2,this.shieldMesh.visible=!1,this.body.add(this.shieldMesh),this.barrels=[],this.h.toast("Sr. Burns: «Excelente…» ¡Cuidado con los perros y los barriles radiactivos!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡Sr. Burns activa el reactor! Ondas nucleares"),this.waveT=1.5}damageMul(){return this.shield>0?.1:1}onHit(){this.shield>0&&Math.random()<.3&&this.h.toast("¡Escudo de Sr. Burns! Espera a que baje")}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;if(this.dogT-=t,this.barrelT-=t,this.waveT-=t,this.shieldT-=t,this.timer-=t,this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*4),this.shield>0?(this.shield-=t,this.shieldMesh.visible=!0,this.shieldMesh.material.opacity=.2+Math.sin(this.t*12)*.08,this.shield<=0&&(this.shieldMesh.visible=!1)):this.shieldT<=0&&(this.shield=4,this.shieldT=s===1?16:11,this.h.toast("Sr. Burns: «Excelente…»")),this.dogT<=0&&(this.dogT=s===1?11:8,this.h.minions()<7&&(this.h.spawnMinion("dog"),this.h.spawnMinion("dog")),this.h.sound("roar",.5)),this.barrelT<=0&&!e.dead){this.barrelT=s===1?5:3.4;const f=Qt(this.pos.x,this.pos.y+3.2,this.pos.z);this.shootProj(f,Qt(e.pos.x,e.pos.y+1,e.pos.z).sub(f),{speed:14,size:.9,color:5296160,emissive:4259600,radius:2.2,ds:.3,effect:["poison",5],cloud:!0}),this.armR.rotation.x=-2.2}this.waveT<=0&&!e.dead&&(this.waveT=s===1?10:6,this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:22,speed:11,dmg:8,color:7405360,effect:["poison",4]}),this.h.sound("explode",.6));const a=l<8?-1:l>14?1:0;this.walk(t,i,o*(a||1e-4),r*(a||1e-4),l,a?3.2:0),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.6;const h=Math.sin(this.walkA)*.5;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h*.6,this.armR.rotation.x+=(h*.6-this.armR.rotation.x)*Math.min(1,t*5),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class u_ extends ci{constructor(t,e,i){super(t,e,i,{name:"IMPOSTOR SUPREMO",type:"impostor",maxHp:340,hitbox:{hx:.8,hy:1.1,hz:.6,oy:1.1},scale:1.9,burstColor:[1,.2,.2]}),this.hw=.7,this.hh=3.6,this.state="walk",this.timer=2,this.lungeT=4,this.ventT=8,this.lightsT=14,this.reactorT=10,this.meetT=16,this.walkA=0,this.lights=0;const s=this.mat(12589080,3146756),o=this.mat(9047823),r=this.mat(10479871,3166304),l=this.mat(14737640,3158064);this.legL=this.group(-.3,.8,0),this.box(.5,.8,.55,o,0,-.4,0,this.legL),this.legR=this.group(.3,.8,0),this.box(.5,.8,.55,o,0,-.4,0,this.legR),this.box(1.3,1.5,.95,s,0,1.5,0),this.box(.8,1,.45,o,0,1.5,-.65),this.box(.9,.5,.1,r,0,1.85,.52),this.box(1,.65,.05,this.mat(4235456,1060928),0,1.85,.5),this.armR=this.group(.8,1.5,.1),this.box(.3,.3,.9,s,0,0,.45,this.armR),this.box(.08,.08,1,l,0,0,1.4,this.armR),this.armL=this.group(-.8,1.5,.1),this.box(.3,.3,.9,s,0,0,.45,this.armL),this.h.toast("El Impostor Supremo te ha encontrado… ¡SUS!")}phaseFor(t){return t>.55?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡REUNIÓN DE EMERGENCIA! El impostor se enfurece"),this.meetT=1,this.lightsT=3}tick(t,e,i){const s=this.phase,o=e.pos.x-this.pos.x,r=e.pos.z-this.pos.z,l=Math.hypot(o,r)||1;this.timer-=t,this.lungeT-=t,this.ventT-=t,this.lightsT-=t,this.reactorT-=t,this.meetT-=t,this.state!=="lunge"&&(this.yaw+=ti(Math.atan2(o,r)-this.yaw)*Math.min(1,t*5));let a=s===1?4:5.2;if(this.lights>0&&(this.lights-=t,this.h.darkness(.75),this.lights<=0&&this.h.darkness(0)),this.state==="walk")if(this.timer<=0&&l<3.8&&!e.dead)this.state="stab",this.timer=.45;else if(this.lungeT<=0&&l>5&&l<20&&this.onGround)this.state="lunge",this.timer=.9,this.lungeT=s===1?5.5:3.6,this.vel.x=o/l*20,this.vel.z=r/l*20,this.vel.y=6,this.lungeHit=!1,this.h.sound("hiss",1);else if(this.ventT<=0){this.ventT=s===1?9:5.5,this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[.7,.1,.1],20,4);const f=Math.random()*6.28;this.pos.x=e.pos.x+Math.cos(f)*6,this.pos.z=e.pos.z+Math.sin(f)*6,this.pos.y=e.pos.y+.5,this.vel.set(0,0,0),this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[.7,.1,.1],20,4)}else if(this.lightsT<=0&&this.lights<=0){if(this.lightsT=s===1?20:13,this.lights=6,this.h.toast("¡Se apagaron las luces! Los impostores atacan"),this.h.minions()<7)for(let f=0;f<3;f++)this.h.spawnMinion("impostor")}else this.reactorT<=0&&this.onGround?(this.reactorT=s===1?11:7,this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:18,speed:11,dmg:8,color:16724016}),this.h.sound("roar",.6)):s===2&&this.meetT<=0&&!e.dead&&(this.meetT=14,this.h.toast("¡Reunión de emergencia! Te arrastran"),this.state="meet",this.timer=1.2);else if(this.state==="stab")a=0,this.armR.rotation.x=-1.6,this.timer<=0&&(this.state="walk",this.timer=1.4,l<4.2&&!e.dead&&this.h.hurtPlayer(11,o/l*9,r/l*9),this.h.sound("hit",1),this.armR.rotation.x=.4);else if(this.state==="lunge")a=0,this.armR.rotation.x=-1.4,!this.lungeHit&&l<3.2&&!e.dead&&(this.lungeHit=!0,this.h.hurtPlayer(13,o/l*12,r/l*12)),this.timer<=0&&(this.state="walk",this.timer=1.8,this.armR.rotation.x=0);else if(this.state==="meet"){a=0;const f=this.h.player();f.vel.x-=o/l*22*t,f.vel.z-=r/l*22*t,this.timer<=0&&(this.state="walk",this.timer=1.2)}this.walk(t,i,o,r,l,this.state==="walk"?a:0),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.4;const h=Math.sin(this.walkA)*.6;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}dispose(){this.h.darkness(0),super.dispose()}}const ws={storm:{name:"Tormenta Wither",color:"#b060ff",hp:360,desc:"Colosal masa con tres cabezas. Rayo tractor, cráneos explosivos y un bloque de comandos como punto débil.",icon:"🌀"},dragon:{name:"Ender Dragon",color:"#e040ff",hp:300,desc:"Vuela en círculos, pica en picado y lanza aliento. Destruye sus 4 cristales para poder herirlo.",icon:"🐉",make:(n,t,e,i)=>new $v(n,t,e,i),up:16},wither:{name:"Wither",color:"#9aa8c8",hp:300,desc:"Lanza cráneos negros que envenenan. Con poca vida se acoraza y te persigue de cerca.",icon:"💀",make:(n,t,e)=>new Zv(n,t,e),up:8},warden:{name:"Warden",color:"#3be8c8",hp:360,desc:"Ciego pero letal. Golpes devastadores y explosión sónica a distancia. Oscurece la pantalla.",icon:"👁",make:(n,t,e)=>new Jv(n,t,e),up:0,ground:!0},guardian:{name:"Guardián Ancestral",color:"#70fff0",hp:240,desc:"Su láser carga y causa fatiga de minería. Sus espinas devuelven daño al golpearlo.",icon:"🐟",make:(n,t,e)=>new Qv(n,t,e),up:6}};Object.assign(ws,{ravager:{name:"Devastador",color:"#b09070",hp:280,desc:"Bestia blindada que ruge y embiste arrasando todo. Tras cada embestida queda aturdido: ¡ataca entonces!",icon:"🐗",make:(n,t,e)=>new t_(n,t,e),ground:!0,dist:16},evoker:{name:"Invocador",color:"#e0c040",hp:220,desc:"Hechicero que se teletransporta, lanza hileras de colmillos y llama a vex voladores (se pueden golpear).",icon:"🧙",make:(n,t,e)=>new e_(n,t,e),up:4,dist:14},ghast:{name:"Ghast Gigante",color:"#f4f4f4",hp:200,desc:"Flota llorando y escupe enormes bolas de fuego. ¡Golpéalas para devolvérselas y hacerle un daño brutal!",icon:"👻",make:(n,t,e)=>new i_(n,t,e),up:14,dist:26},herobrine:{name:"Herobrine",color:"#ffffff",hp:400,desc:"Ojos blancos, teletransportes a tu espalda, rayos y oscuridad. Con poca vida levita. El jefe final.",icon:"👤",make:(n,t,e)=>new n_(n,t,e),ground:!0,dist:14},slimeking:{name:"Rey Slime",color:"#60e060",hp:260,desc:"Gigantesco, salta y aplasta con ondas expansivas. Se divide en slimes al perder vida.",icon:"🟢",make:(n,t,e)=>new s_(n,t,e),ground:!0,dist:18}});Object.assign(ws,{blazeking:{name:"Rey Blaze",color:"#ff9a20",hp:280,desc:"Señor del fuego del Nether: abanicos de bolas de fuego, ondas de llamas que hay que saltar y blazes de refuerzo.",icon:"🔥",make:(n,t,e)=>new o_(n,t,e),up:8,dist:20},piglinking:{name:"Rey Piglin",color:"#e8c040",hp:340,desc:"Hacha gigante, saltos que parten el suelo, torbellino de oro y una guardia de piglins.",icon:"🪓",make:(n,t,e)=>new r_(n,t,e),ground:!0,dist:16},endertitan:{name:"Enderman Titán",color:"#c060ff",hp:380,desc:"Gigantesco: se teletransporta, barre con los brazos y lanza rocas. ¡No le mires a los ojos!",icon:"🕴",make:(n,t,e)=>new a_(n,t,e),ground:!0,dist:24},voidlord:{name:"Señor del Vacío",color:"#a050ff",hp:300,desc:"Abre grietas que dañan y elevan, dispara un láser con carga y su gravedad te arrastra en la fase final.",icon:"🌀",make:(n,t,e)=>new l_(n,t,e),up:6,dist:20},creepertitan:{name:"Creeper Titán",color:"#60e060",hp:320,desc:"Se hincha y explota con un radio colosal. Tras estallar queda aturdido: es tu momento.",icon:"💥",make:(n,t,e)=>new h_(n,t,e),ground:!0,dist:30},colossus:{name:"Gólem Colosal",color:"#d0d0e0",hp:420,desc:"Puñetazos devastadores, golpes al suelo que lanzan ondas de choque y rocas. Furia roja en la fase 2.",icon:"🗿",make:(n,t,e)=>new c_(n,t,e),ground:!0,dist:22}});Object.assign(ws,{goku:{name:"Goku",color:"#ff9a20",hp:450,desc:"Kamehameha, teletransporte instantáneo y combos. Se vuelve Super Saiyajin y al final lanza la Genki Dama.",icon:"🟠",make:(n,t,e)=>new f_(n,t,e),ground:!0,dist:20},burns:{name:"Sr. Burns",color:"#60e030",hp:260,desc:"Suelta perros, lanza barriles radiactivos que envenenan, se protege con un escudo y activa ondas nucleares.",icon:"☢",make:(n,t,e)=>new d_(n,t,e),ground:!0,dist:18},impostor:{name:"Impostor Supremo",color:"#ff3030",hp:340,desc:"Embiste con el cuchillo, se teletransporta por los conductos, apaga las luces y llama a más impostores. «¡SUS!»",icon:"🔴",make:(n,t,e)=>new u_(n,t,e),ground:!0,dist:16}});const p_=["storm","dragon","wither","warden","guardian","ravager","evoker","ghast","herobrine","slimeking","colossus","creepertitan","blazeking","piglinking","endertitan","voidlord","goku","burns","impostor"],Ys=[{id:"logs",group:"Aprendiz",title:"Primeros pasos",desc:"Recoge 3 troncos",ev:"collect",target:_.LOG,n:3,reward:[[T.APPLE,4]],xp:8},{id:"table",group:"Aprendiz",title:"Carpintero",desc:"Fabrica una mesa de crafteo",ev:"craft",target:_.TABLE,n:1,reward:[[_.PLANKS,16]],xp:8},{id:"pick",group:"Aprendiz",title:"Minero",desc:"Fabrica un pico de piedra",ev:"craft",target:111,n:1,reward:[[T.COAL,8]],xp:10},{id:"a_iron",group:"Aprendiz",title:"Armado hasta los dientes",desc:"Fabrica un peto de hierro",ev:"craft",target:212,n:1,reward:[[T.DIAMOND,2]],xp:30},{id:"a_gold",group:"Aprendiz",title:"Fiebre del oro",desc:"Fabrica una espada de oro",ev:"craft",target:144,n:1,reward:[[T.GOLD,6]],xp:20},{id:"a_nether",group:"Dimensiones",title:"Forjado en el Nether",desc:"Consigue un lingote de netherita (restos antiguos + oro)",ev:"collect",target:T.NETHERITE,n:1,reward:[[T.DIAMOND,6]],xp:120},{id:"torch",group:"Aprendiz",title:"Luz en la oscuridad",desc:"Fabrica 4 antorchas",ev:"craft",target:_.TORCH,n:4,reward:[[T.COAL,8]],xp:10},{id:"iron",group:"Aprendiz",title:"Fundidor",desc:"Consigue un lingote de hierro",ev:"collect",target:T.IRON,n:1,reward:[[T.COAL,16]],xp:15},{id:"diamond",group:"Aprendiz",title:"¡Diamantes!",desc:"Consigue un diamante",ev:"collect",target:T.DIAMOND,n:1,reward:[[T.GOLD,6]],xp:25},{id:"k_zombie",group:"Cazador",title:"Cazador de zombis",desc:"Derrota 3 zombis",ev:"kill",target:"zombie",n:3,reward:[[T.STEAK,4]],xp:15},{id:"k_skeleton",group:"Cazador",title:"Huesos rotos",desc:"Derrota 3 esqueletos",ev:"kill",target:"skeleton",n:3,reward:[[T.STEAK,4]],xp:18},{id:"k_creeper",group:"Cazador",title:"Silencio…",desc:"Derrota 2 creepers",ev:"kill",target:"creeper",n:2,reward:[[T.GOLD,4]],xp:18},{id:"k_spider",group:"Cazador",title:"Aracnofobia",desc:"Derrota 2 arañas",ev:"kill",target:"spider",n:2,reward:[[T.GOLD,4]],xp:16},{id:"pearl",group:"Cazador",title:"Ojos que miran",desc:"Consigue una perla de Ender",ev:"collect",target:T.PEARL,n:1,reward:[[T.DIAMOND,3]],xp:30},{id:"obsidian",group:"Dimensiones",title:"Cristal volcánico",desc:"Consigue obsidiana (8 adoquines + 1 diamante = 2)",ev:"collect",target:_.OBSIDIAN,n:1,reward:[[T.COAL,12]],xp:20},{id:"d_nether",group:"Dimensiones",title:"Una puerta al infierno",desc:"Entra al Nether (marco 4x5 de obsidiana + encendedor)",ev:"dim",target:"nether",n:1,reward:[[T.GOLD,8],[T.DIAMOND,4]],xp:80},{id:"k_blaze",group:"Dimensiones",title:"Fuego cruzado",desc:"Derrota a 2 blazes",ev:"kill",target:"blaze",n:2,reward:[[T.DIAMOND,4]],xp:40},{id:"k_piglin",group:"Dimensiones",title:"Oro maldito",desc:"Derrota a 3 piglins zombificados",ev:"kill",target:"piglin",n:3,reward:[[T.GOLD,8]],xp:35},{id:"k_wskel",group:"Dimensiones",title:"Huesos negros",desc:"Derrota a 2 esqueletos Wither",ev:"kill",target:"witherskeleton",n:2,reward:[[T.DIAMOND,4]],xp:50},{id:"k_ghast",group:"Dimensiones",title:"Lágrimas de fuego",desc:"Derrota a un Ghast",ev:"kill",target:"ghast",n:1,reward:[[T.GOLD,10]],xp:50},{id:"k_shulker",group:"Dimensiones",title:"Caja sorpresa",desc:"Derrota a 2 shulkers",ev:"kill",target:"shulker",n:2,reward:[[T.PEARL,2]],xp:60},{id:"chests",group:"Dimensiones",title:"Cazatesoros",desc:"Abre 3 cofres de fortalezas o ciudades del End",ev:"chest",target:"x",n:3,reward:[[T.DIAMOND,4],[T.GOLD,8]],xp:70},{id:"elytra",group:"Dimensiones",title:"¡A volar!",desc:"Consigue unos élitros (naves de las ciudades del End)",ev:"collect",target:T.ELYTRA,n:1,reward:[[T.STAR,1]],xp:120},{id:"d_end",group:"Dimensiones",title:"El fin de todo",desc:"Entra al End (12 marcos con ojo de Ender)",ev:"dim",target:"end",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:150},{id:"b_storm",group:"Jefes",title:"Domador de la tormenta",desc:"Derrota a la Tormenta Wither",ev:"boss",target:"storm",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:150},{id:"b_dragon",group:"Jefes",title:"¿El final?",desc:"Derrota al Ender Dragon",ev:"boss",target:"dragon",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:150},{id:"b_wither",group:"Jefes",title:"Más allá de los huesos",desc:"Derrota al Wither",ev:"boss",target:"wither",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:150},{id:"b_warden",group:"Jefes",title:"Silencio absoluto",desc:"Derrota al Warden",ev:"boss",target:"warden",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:150},{id:"b_guardian",group:"Jefes",title:"La mirada del océano",desc:"Derrota al Guardián Ancestral",ev:"boss",target:"guardian",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:150},{id:"b_ravager",group:"Jefes",title:"Contra la embestida",desc:"Derrota al Devastador",ev:"boss",target:"ravager",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:150},{id:"b_evoker",group:"Jefes",title:"Colmillos y vex",desc:"Derrota al Invocador",ev:"boss",target:"evoker",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:150},{id:"b_ghast",group:"Jefes",title:"Devuélvesela",desc:"Derrota al Ghast Gigante",ev:"boss",target:"ghast",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:150},{id:"b_slime",group:"Jefes",title:"Aplastado",desc:"Derrota al Rey Slime",ev:"boss",target:"slimeking",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:150},{id:"b_hero",group:"Jefes",title:"Más allá del mito",desc:"Derrota a Herobrine",ev:"boss",target:"herobrine",n:1,reward:[[T.STAR,2],[T.DIAMOND,16]],xp:250},{id:"b_colossus",group:"Jefes",title:"Hierro contra hierro",desc:"Derrota al Gólem Colosal",ev:"boss",target:"colossus",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:160},{id:"b_creepert",group:"Jefes",title:"Silencio… colosal",desc:"Derrota al Creeper Titán",ev:"boss",target:"creepertitan",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:160},{id:"b_blazek",group:"Jefes",title:"Rey de las llamas",desc:"Derrota al Rey Blaze",ev:"boss",target:"blazeking",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:160},{id:"b_piglink",group:"Jefes",title:"Corona de oro",desc:"Derrota al Rey Piglin",ev:"boss",target:"piglinking",n:1,reward:[[T.STAR,2],[T.DIAMOND,10]],xp:180},{id:"b_endert",group:"Jefes",title:"No mires a los ojos",desc:"Derrota al Enderman Titán",ev:"boss",target:"endertitan",n:1,reward:[[T.STAR,2],[T.DIAMOND,12]],xp:200},{id:"b_voidl",group:"Jefes",title:"Al borde del vacío",desc:"Derrota al Señor del Vacío",ev:"boss",target:"voidlord",n:1,reward:[[T.STAR,2],[T.DIAMOND,12]],xp:200},{id:"b_goku",group:"Jefes",title:"¡Es más de 9000!",desc:"Derrota a Goku",ev:"boss",target:"goku",n:1,reward:[[T.STAR,2],[T.DIAMOND,12]],xp:250},{id:"b_burns",group:"Jefes",title:"Excelente…",desc:"Derrota al Sr. Burns",ev:"boss",target:"burns",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:180},{id:"b_impostor",group:"Jefes",title:"Eyectado",desc:"Derrota al Impostor Supremo",ev:"boss",target:"impostor",n:1,reward:[[T.STAR,1],[T.DIAMOND,8]],xp:180},{id:"k_impostor",group:"Cazador",title:"Sospechoso",desc:"Derrota a 3 impostores",ev:"kill",target:"impostor",n:3,reward:[[T.GOLD,8]],xp:40},{id:"k_saiba",group:"Cazador",title:"Semillas del Saiyajin",desc:"Derrota a 2 saibamen",ev:"kill",target:"saibaman",n:2,reward:[[T.SENZU,1]],xp:40},{id:"d_balls",group:"Dimensiones",title:"¡Sal, Shenron!",desc:"Reúne las 7 Bolas de Dragón",ev:"collect",target:T.DBALL,n:7,reward:[[T.DIAMOND,6]],xp:300},{id:"master",group:"Jefes",title:"★ LEYENDA DE LOS JEFES ★",desc:"Derrota a los 19 jefes (Minecraft y crossovers)",ev:"bossall",target:null,n:19,reward:[[T.STAR,5],[T.DIAMOND,32],[T.GOLD,32]],xp:500}];class m_{constructor(t){this.h=t,this.progress={},this.done={},this.bosses=new Set}event(t,e,i=1){for(const s of Ys)this.done[s.id]||s.ev!==t||s.target!==null&&s.target!==e||(this.progress[s.id]=Math.min(s.n,(this.progress[s.id]||0)+i),this.progress[s.id]>=s.n&&this.complete(s));if(t==="boss"){this.bosses.add(e);const s=Ys.find(o=>o.id==="master");this.done.master||(this.progress.master=this.bosses.size,this.bosses.size>=s.n&&this.complete(s))}}complete(t){this.done[t.id]=!0,this.progress[t.id]=t.n,this.h.reward(t.reward),this.h.xp(t.xp),this.h.sound("craft"),this.h.toast(t.id==="master"?"🏆 ¡ERES UNA LEYENDA! Has derrotado a todos los jefes":`✔ Misión completada: ${t.title}`)}active(t=3){return Ys.filter(e=>!this.done[e.id]).slice(0,t)}total(){return Ys.length}completed(){return Ys.filter(t=>this.done[t.id]).length}toJSON(){return{progress:this.progress,done:this.done,bosses:[...this.bosses]}}load(t){t&&(this.progress=t.progress||{},this.done=t.done||{},this.bosses=new Set(t.bosses||[]))}}const Lo=420,Do=24;class g_{constructor(t){this.pos=new Float32Array(Lo*3),this.vel=new Float32Array(Lo*3);for(let i=0;i<Lo;i++)this.reset(i,!0);const e=new Qe;e.setAttribute("position",new Ai(new Float32Array(Lo*3),3)),this.pts=new ic(e,new Pa({color:16747056,size:3,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1,blending:qo})),this.pts.frustumCulled=!1,this.pts.visible=!1,t.add(this.pts),this.t=0}reset(t,e){this.pos[t*3]=(Math.random()-.5)*2*Do,this.pos[t*3+1]=e?(Math.random()-.5)*2*Do:-Do,this.pos[t*3+2]=(Math.random()-.5)*2*Do,this.vel[t*3]=(Math.random()-.5)*.6,this.vel[t*3+1]=.4+Math.random()*1.2,this.vel[t*3+2]=(Math.random()-.5)*.6}update(t,e,i){const s=i==="nether"||i==="end";if(this.pts.visible=s,!s)return;this.t+=t;const o=i==="nether",r=this.pts.geometry.attributes.position.array;this.pts.material.color.set(o?16742952:11567359),this.pts.material.size=o?3:2.5;for(let l=0;l<Lo;l++){const a=l*3;this.pos[a]+=(this.vel[a]+Math.sin(this.t+l)*.3)*t,this.pos[a+1]+=this.vel[a+1]*(o?1:.5)*t,this.pos[a+2]+=(this.vel[a+2]+Math.cos(this.t*.8+l)*.3)*t,this.pos[a+1]>Do&&this.reset(l,!1),r[a]=e.position.x+this.pos[a],r[a+1]=e.position.y+this.pos[a+1],r[a+2]=e.position.z+this.pos[a+2]}this.pts.geometry.attributes.position.needsUpdate=!0}}const Qf=["✕ Cruz","◯ Círculo","▢ Cuadrado","△ Triángulo","L1","R1","L2","R2","Share","Options","L3","R3","Cruceta ↑","Cruceta ↓","Cruceta ←","Cruceta →","Botón PS","Panel táctil"],xu=[{id:"jump",label:"Saltar / nadar / subir",def:0},{id:"drop",label:"Tirar objeto · Atrás en menús",def:1},{id:"fall",label:"Descender (vuelo) · Clic derecho en menús",def:2},{id:"inventory",label:"Inventario",def:3},{id:"prev",label:"Ranura anterior",def:4},{id:"next",label:"Ranura siguiente",def:5},{id:"use",label:"Usar / colocar / comer",def:6},{id:"attack",label:"Romper / atacar",def:7},{id:"summon",label:"Invocar jefes y mobs",def:8},{id:"pause",label:"Pausa",def:9},{id:"sprint",label:"Correr (alternar)",def:10},{id:"camera",label:"Cambiar cámara",def:11},{id:"fly",label:"Volar (creativo)",def:12},{id:"quests",label:"Misiones",def:13},{id:"weather",label:"Cambiar clima",def:14},{id:"debug",label:"Datos de depuración (F3)",def:15},{id:"mode",label:"Creativo / Supervivencia",def:17},{id:"config",label:"Configurar el mando",def:16}],Ah=()=>({map:Object.fromEntries(xu.map(n=>[n.id,n.def])),deadzone:.16,lookX:3.4,lookY:2.6,curve:1.7,invertY:!1,rumble:!0});class x_{constructor(t){this.cfg=t,this.prev=[],this.connected=!1,this.id="",this.listening=null,this.last={connected:!1,down:[],edge:[],axes:[]}}pad(){const t=navigator.getGamepads?navigator.getGamepads():[];let e=null;for(const i of t)if(i&&i.connected){if(i.mapping==="standard")return i;e=e||i}return e}poll(){const t=this.pad();if(!t)return this.connected=!1,this.last={connected:!1,down:[],edge:[],axes:[],any:!1},this.last;this.connected=!0,this.id=t.id;const e=[],i=[];for(let r=0;r<t.buttons.length;r++){const l=t.buttons[r],a=!!(l.pressed||l.value>.5);e[r]=a,i[r]=a&&!this.prev[r]}this.prev=e;const s=Array.from(t.axes),o=Math.hypot(s[0]||0,s[1]||0)>this.cfg.deadzone+.1||Math.hypot(s[2]||0,s[3]||0)>this.cfg.deadzone+.1;if(this.listening){const r=i.findIndex(Boolean);if(r>=0){const l=this.listening;this.listening=null,l(r)}return this.last={connected:!0,down:e,edge:[],axes:s,any:!0,busy:!0,gp:t},this.last}return this.last={connected:!0,down:e,edge:i,axes:s,any:i.some(Boolean)||o,gp:t},this.last}listen(t){this.listening=t}stick(t,e,i,s=this.cfg.curve){const o=t[e]||0,r=t[i]||0,l=Math.hypot(o,r),a=this.cfg.deadzone;if(l<a)return{x:0,y:0,m:0};const h=(Math.min(1,l)-a)/(1-a),f=Math.pow(h,s)/l;return{x:o*f,y:r*f,m:h}}down(t){return!!this.last.down[this.cfg.map[t]]}edge(t){return!!this.last.edge[this.cfg.map[t]]}rumble(t,e,i){if(!this.cfg.rumble||!this.connected)return;const s=this.last.gp,o=s&&(s.vibrationActuator||s.hapticActuators&&s.hapticActuators[0]);try{s&&s.vibrationActuator&&s.vibrationActuator.playEffect?s.vibrationActuator.playEffect("dual-rumble",{startDelay:0,duration:i,weakMagnitude:e,strongMagnitude:t}):o&&o.pulse&&o.pulse(t,i)}catch{}}}const Kn=.3,td=1.8,Tl=1.62,ed=28,v_=8.6,__=4.4,M_=7,y_=12;class b_{constructor(t,e){this.world=t,this.camera=e,this.pos=new I(0,40,0),this.vel=new I,this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headUnder=!1,this.keys=new Set,this.mode="survival",this.hp=20,this.food=20,this.air=10,this.fallStart=null,this.foodTimer=0,this.regenTimer=0,this.airTimer=0,this.starveTimer=0,this.invuln=0,this.dead=!1,this.stepDist=0,this.events={onHurt:null,onLand:null,onStep:null,onSplash:null,onDeath:null,onVoid:null,onArmor:null},this.armorPts=0,this.inLava=!1,this.analog=null,this.canGlide=!1,this.gliding=!1,this.prevSpace=!1,this.spawn=new I,this.wind={x:0,z:0},this.push={x:0,y:0,z:0},this.effects={poison:0,fatigue:0,burn:0,levitate:0},this.poisonT=0,this.burnT=0}collides(t,e,i){const s=this.world;for(let o=Math.floor(e);o<=Math.floor(e+td-.001);o++)for(let r=Math.floor(i-Kn);r<=Math.floor(i+Kn);r++)for(let l=Math.floor(t-Kn);l<=Math.floor(t+Kn);l++)if(s.isSolid(l,o,r))return!0;return!1}intersectsBlock(t,e,i){return this.pos.x+Kn>t&&this.pos.x-Kn<t+1&&this.pos.y+td>e&&this.pos.y<e+1&&this.pos.z+Kn>i&&this.pos.z-Kn<i+1}get eye(){return new I(this.pos.x,this.pos.y+Tl,this.pos.z)}lookDir(){return new I(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}damage(t,e=0,i=0){this.mode==="creative"||this.dead||this.invuln>0||(this.armorPts>0&&(t*=Math.pow(.96,this.armorPts),t>.3&&this.events.onArmor&&this.events.onArmor()),this.hp=Math.max(0,this.hp-t),this.invuln=.5,this.vel.x+=e,this.vel.z+=i,(e||i)&&(this.vel.y=Math.max(this.vel.y,5)),this.events.onHurt&&this.events.onHurt(t),this.hp<=0&&(this.dead=!0,this.events.onDeath&&this.events.onDeath()))}heal(t){this.hp=Math.min(20,this.hp+t)}eat(t){this.food=Math.min(20,this.food+t)}respawn(){this.hp=20,this.food=20,this.air=10,this.dead=!1,this.invuln=2,this.effects.poison=0,this.effects.fatigue=0,this.effects.burn=0,this.effects.levitate=0,this.pos.copy(this.spawn),this.vel.set(0,0,0),this.fallStart=null}update(t){if(t=Math.min(t,.05),this.dead){this.camera.position.set(this.pos.x,this.pos.y+.4,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,.6,"YXZ");return}const e=this.keys,i=this.world;this.invuln=Math.max(0,this.invuln-t);const s=Math.floor(this.pos.x),o=Math.floor(this.pos.z),r=this.inWater;this.inWater=i.isLiquid(s,Math.floor(this.pos.y+.3),o),this.inLava=i.getBlock(s,Math.floor(this.pos.y+.3),o)===_.LAVA||i.getBlock(s,Math.floor(this.pos.y+1.2),o)===_.LAVA,this.inLava&&this.mode==="survival"&&(this.effects.burn=Math.max(this.effects.burn,6),this.damage(4));const l=i.getBlock(s,Math.floor(this.pos.y-.15),o)===_.SOUL_SAND;this.headUnder=i.isLiquid(s,Math.floor(this.pos.y+Tl),o),this.inWater&&!r&&this.vel.y<-4&&this.events.onSplash&&this.events.onSplash();const a=this.analog&&(Math.abs(this.analog.x)>.001||Math.abs(this.analog.y)>.001)?this.analog:null,h=a?a.y:(e.has("KeyW")?1:0)-(e.has("KeyS")?1:0),f=a?a.x:(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),c=e.has("ShiftLeft")&&h>0&&!(this.mode==="survival"&&this.food<=6);let d=this.flying?y_:c?M_:__;this.inWater&&!this.flying&&(d*=.6),l&&!this.flying&&(d*=.55);const u=Math.sin(this.yaw),p=Math.cos(this.yaw);let x=-u*h+p*f,m=-p*h-u*f;const g=Math.hypot(x,m);g>0&&(!a||g>1)&&(x/=g,m/=g),this.gliding||(this.vel.x=x*d+(this.inWater?0:this.wind.x),this.vel.z=m*d+(this.inWater?0:this.wind.z));const M=e.has("Space");if(M&&!this.prevSpace&&!this.onGround&&!this.inWater&&!this.flying&&this.canGlide&&!this.gliding){this.gliding=!0;const C=this.lookDir();this.vel.set(C.x*9,Math.max(C.y*9,-2),C.z*9)}if(this.prevSpace=M,this.gliding&&(this.onGround||this.inWater||this.flying||!this.canGlide)&&(this.gliding=!1),this.gliding){const C=this.lookDir(),y=Math.min(1,t*1.4);this.vel.x+=(C.x*22-this.vel.x)*y,this.vel.z+=(C.z*22-this.vel.z)*y,this.vel.y+=(C.y*20-1.6-this.vel.y)*Math.min(1,t*1.1),this.fallStart=null}else this.flying?(this.vel.y=((e.has("Space")?1:0)-(e.has("KeyQ")?1:0))*d,this.fallStart=null):this.inWater?(this.vel.y-=ed*.25*t,this.vel.y=Math.max(this.vel.y,-3)*(1-2*t),e.has("Space")&&(this.vel.y=Math.min(this.vel.y+22*t,3.6)),this.fallStart=null):(this.vel.y-=ed*t,this.vel.y<-50&&(this.vel.y=-50),e.has("Space")&&this.onGround&&(this.vel.y=v_,this.onGround=!1));this.vel.x+=this.push.x,this.vel.z+=this.push.z,this.vel.y+=this.push.y*t,this.effects.levitate>0&&(this.effects.levitate-=t,this.vel.y=Math.min(this.vel.y+24*t,3.2),this.fallStart=null);const S=this.onGround,v=2,D=t/v;this.onGround=!1;const R=this.pos.x,w=this.pos.z;for(let C=0;C<v;C++)for(const y of["x","z","y"]){const b=this.vel[y]*D;b!==0&&(this.pos[y]+=b,this.collides(this.pos.x,this.pos.y,this.pos.z)&&(this.pos[y]-=b,y==="y"&&this.vel.y<0&&(this.onGround=!0),this.vel[y]=0))}if(!this.onGround&&!this.inWater&&!this.flying&&(this.fallStart===null||this.pos.y>this.fallStart)&&(this.fallStart=this.pos.y),this.onGround&&!S&&this.fallStart!==null){const C=this.fallStart-this.pos.y;C>3&&this.mode==="survival"&&this.damage(Math.floor(C-3)),C>1.2&&this.events.onLand&&this.events.onLand(C),this.fallStart=null}if(this.onGround&&(this.fallStart=null),this.onGround&&!this.flying&&(this.stepDist+=Math.hypot(this.pos.x-R,this.pos.z-w),this.stepDist>(c?2.2:1.7)&&(this.stepDist=0,this.events.onStep&&this.events.onStep())),this.pos.y<-30&&(this.events.onVoid?this.events.onVoid():(this.pos.y=70,this.vel.set(0,0,0),this.damage(4))),this.effects.fatigue>0&&(this.effects.fatigue-=t),this.effects.burn>0&&(this.inWater&&!this.inLava?this.effects.burn=0:(this.effects.burn-=t,this.burnT+=t,this.burnT>=.8&&(this.burnT=0,this.mode==="survival"&&this.damage(1)))),this.effects.poison>0&&(this.effects.poison-=t,this.poisonT+=t,this.poisonT>=1&&(this.poisonT=0,this.mode==="survival"&&this.hp>1&&(this.hp-=1,this.events.onHurt&&this.events.onHurt(1)))),this.mode==="survival"){this.headUnder?(this.airTimer+=t,this.airTimer>=1&&(this.airTimer=0,this.air>0?this.air--:this.damage(2))):(this.airTimer=0,this.air=Math.min(10,this.air+t*6));const C=Math.hypot(this.vel.x,this.vel.z)>.1;this.foodTimer+=t*(c?3:C?1:.25),this.foodTimer>22&&(this.foodTimer=0,this.food=Math.max(0,this.food-1)),this.regenTimer+=t,this.food>=18&&this.hp<20&&this.regenTimer>3?(this.regenTimer=0,this.heal(1),this.foodTimer+=6):this.food<=0&&this.regenTimer>4&&(this.regenTimer=0,this.hp>1&&this.damage(1))}else this.air=10,this.hp=20,this.food=20;this.camera.position.set(this.pos.x,this.pos.y+Tl,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}class S_{constructor(){this.slots=Array(36).fill(null),this.selected=0,this.armor=[null,null,null,null]}held(){return this.slots[this.selected]}add(t,e=1){const i=Tn(t);for(const s of this.slots)if(s&&s.id===t&&s.n<i){const o=Math.min(e,i-s.n);if(s.n+=o,e-=o,!e)return 0}for(let s=0;s<36&&e>0;s++)if(!this.slots[s]){const o=Math.min(e,i);this.slots[s]={id:t,n:o,d:0},e-=o}return e}canAdd(t){const e=Tn(t);return this.slots.some(i=>!i||i.id===t&&i.n<e)}consumeHeld(t=1){const e=this.slots[this.selected];e&&(e.n-=t,e.n<=0&&(this.slots[this.selected]=null))}wearHeld(t=1){const e=this.slots[this.selected],i=Ss(e);return i?(e.d=(e.d||0)+t,e.d>=i.dur?(this.slots[this.selected]=null,!0):!1):!1}count(t){let e=0;for(const i of this.slots)i&&i.id===t&&(e+=i.n);return e}take(t,e){for(let i=0;i<36&&e>0;i++){const s=this.slots[i];if(s&&s.id===t){const o=Math.min(e,s.n);s.n-=o,e-=o,s.n<=0&&(this.slots[i]=null)}}return e===0}armorPoints(){let t=0;for(const e of this.armor)e&&Fe[e.id]&&Fe[e.id].armor&&(t+=Fe[e.id].armor.pts);return t}wearArmor(t=1){const e=[];return this.armor.forEach((i,s)=>{i&&(i.d=(i.d||0)+t,i.d>=Fe[i.id].armor.dur&&(this.armor[s]=null,e.push(s)))}),e}toJSON(){return{slots:this.slots,selected:this.selected,armor:this.armor}}load(t){t&&(this.slots=t.slots,this.selected=t.selected||0,this.armor=t.armor||[null,null,null,null])}}const E_=600,id=new Et(1,1,1),w_=new Et(2316488),T_=new Et(7370367),A_=new Et(14542591),R_=new Et(8900331),C_=new Et(461596),L_=new Et(16747088),Al=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function D_(){const e=Array.from({length:64},()=>Math.random()),i=(a,h)=>e[(h%8+8)%8*8+(a%8+8)%8],s=document.createElement("canvas");s.width=s.height=64;const o=s.getContext("2d"),r=o.createImageData(64,64);for(let a=0;a<64;a++)for(let h=0;h<64;h++){const f=h/64*8,c=a/64*8,d=Math.floor(f),u=Math.floor(c),p=f-d,x=c-u,m=p*p*(3-2*p),g=x*x*(3-2*x),M=(i(d,u)*(1-m)+i(d+1,u)*m)*(1-g)+(i(d,u+1)*(1-m)+i(d+1,u+1)*m)*g,S=(a*64+h)*4,v=M>.56?215:0;r.data[S]=r.data[S+1]=r.data[S+2]=255,r.data[S+3]=v}o.putImageData(r,0,0);const l=new Hi(s);return l.wrapS=l.wrapT=aa,l.magFilter=xe,l.minFilter=xe,l.generateMipmaps=!1,l}function nd(n){const t=document.createElement("canvas");t.width=t.height=16,n(t.getContext("2d"));const e=new Hi(t);return e.magFilter=xe,e.minFilter=xe,e.generateMipmaps=!1,e}class P_{constructor(t,e,i){this.scene=t,this.camera=e,this.materials=i,this.time=.08,this.dim="overworld",this.daylight=1,this.wet=0,this.flash=0,this.cloudX=0,this.cloudZ=0,this.root=new Se,t.add(this.root),this.domeMat=new Mi({side:wi,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{top:{value:new Et(4884696)},hor:{value:new Et(10147056)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = normalize(vP).y; float t = smoothstep(-0.02, 0.6, h); gl_FragColor = vec4(mix(hor, top, t), 1.0); }"}),this.dome=new Mt(new Ms(420,24,14),this.domeMat),this.dome.renderOrder=-30,this.root.add(this.dome);const s=document.createElement("canvas");s.width=s.height=128;const o=s.getContext("2d"),r=o.createRadialGradient(64,64,0,64,64,64);r.addColorStop(0,"rgba(255,240,180,0.9)"),r.addColorStop(.25,"rgba(255,200,110,0.35)"),r.addColorStop(1,"rgba(255,180,80,0)"),o.fillStyle=r,o.fillRect(0,0,128,128),this.glow=new eu(new tc({map:new Hi(s),blending:qo,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),this.glow.scale.set(260,260,1),this.glow.renderOrder=-11,this.root.add(this.glow);const l=nd(d=>{d.fillStyle="#fff6b0",d.fillRect(0,0,16,16),d.fillStyle="#ffe14a",d.fillRect(2,2,12,12),d.fillStyle="#fffbe0",d.fillRect(5,5,6,6)}),a=nd(d=>{d.fillStyle="#e8ecf2",d.fillRect(0,0,16,16),d.fillStyle="#b8bfcc",d.fillRect(3,4,3,3),d.fillRect(9,8,4,3),d.fillRect(5,11,2,2)}),h=(d,u)=>{const p=new Mt(new On(u,u),new re({map:d,transparent:!0,fog:!1,depthWrite:!1,depthTest:!1}));return p.renderOrder=-10,this.root.add(p),p};this.sun=h(l,60),this.moon=h(a,40);const f=new Float32Array(900*3);for(let d=0;d<900;d++){const u=Math.random()*2-1,p=Math.random()*Math.PI*2,x=Math.sqrt(1-u*u);f[d*3]=Math.cos(p)*x*300,f[d*3+1]=u*300,f[d*3+2]=Math.sin(p)*x*300}const c=new Qe;c.setAttribute("position",new Ai(f,3)),this.starMat=new Pa({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,fog:!1,depthWrite:!1}),this.stars=new ic(c,this.starMat),this.stars.renderOrder=-11,this.root.add(this.stars),this.cloudTex=D_(),this.cloudMat=new re({map:this.cloudTex,transparent:!0,fog:!1,depthWrite:!1,side:Ei}),this.clouds=new Mt(new On(900,900),this.cloudMat),this.clouds.rotation.x=-Math.PI/2,t.add(this.clouds),this.cloudMat2=new re({map:this.cloudTex.clone(),transparent:!0,fog:!1,depthWrite:!1,side:Ei}),this.cloudMat2.map.needsUpdate=!0,this.clouds2=new Mt(new On(900,900),this.cloudMat2),this.clouds2.rotation.x=-Math.PI/2,t.add(this.clouds2),this.hemi=new Qx(12572927,8022608,2),this.sunLight=new nv(16773853,2.8),this.shadowExt=64,this.shadowOn=!1,t.add(this.hemi,this.sunLight,this.sunLight.target),this.lightDir=new I(.5,1,.3).normalize(),this.sky=new Et,this.tint=new Et}setShadows(t,e,i){const s=this.sunLight,o=s.shadow.mapSize.x!==e||this.shadowExt!==i;if(this.shadowOn=t,this.shadowExt=i,t){s.shadow.mapSize.set(e,e);const r=s.shadow.camera;r.left=-i,r.right=i,r.top=i,r.bottom=-i,r.near=10,r.far=340,r.updateProjectionMatrix(),s.shadow.bias=-4e-4,s.shadow.normalBias=.35*(i/64)*(2048/e)**.5,s.shadow.radius=2,o&&s.shadow.map&&(s.shadow.map.dispose(),s.shadow.map=null)}}updateOther(t,e,i,s){const o=this.dim==="nether";this.daylight=0,this.wet=0,this.flash=0;const r=o?new Et(5903368):new Et(1838894),l=o?new Et(1836291):new Et(262666);s&&o&&(r.set(11024392),l.set(6297600)),this.sky.copy(o?new Et(3804166):new Et(1182236)),s&&o&&this.sky.set(11024392),this.scene.background=this.sky,this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:i*(o?.18:.5),this.scene.fog.far=s?o?5:18:i*(o?.75:1.1),this.domeMat.uniforms.hor.value.copy(r),this.domeMat.uniforms.top.value.copy(l),this.root.position.copy(this.camera.position),this.sun.visible=this.moon.visible=this.glow.visible=!1,this.clouds.visible=this.clouds2.visible=!1,this.stars.visible=!o,this.starMat.opacity=o?0:1,this.starMat.size=2.4,this.stars.rotation.y+=t*.01,this.hemi.color.set(o?16747098:11047167),this.hemi.groundColor.set(o?6955016:2628672),this.hemi.intensity=o?1.9:1.1,this.sunLight.color.set(o?16738864:10125567),this.sunLight.intensity=o?.35:.7,this.sunLight.castShadow=!1,this.lightDir.set(.3,1,.2).normalize(),this.sunLight.target.position.copy(e),this.sunLight.position.set(e.x+30,e.y+100,e.z+20)}setDimension(t){this.dim=t;const e=t==="overworld";this.sun.visible=this.moon.visible=this.glow.visible=e,this.clouds.visible=e,this.stars.visible=!0,this.starMat.size=1.6}update(t,e,i,s,o={x:0,z:0,s:.12}){if(this.dim!=="overworld")return this.updateOther(t,e,i,s);this.time=(this.time+t/E_)%1;const r=this.time*Math.PI*2,l=Math.sin(r),a=Math.cos(r),h=Al(-.12,.25,l),f=this.wet,c=this.flash;this.daylight=h*(1-.55*f),this.sky.copy(C_).lerp(R_,this.daylight);const d=Math.max(0,1-Math.abs(l)*4.5)*.7;this.sky.lerp(L_,d*(1-f)),f>0&&this.sky.lerp(T_.clone().multiplyScalar(.12+.88*h),f*.8),c>0&&this.sky.lerp(A_,c*.7),s&&this.sky.set(1718906).multiplyScalar(.4+this.daylight*.6),this.scene.background=this.sky;const u=h*(1-f);this.domeMat.uniforms.hor.value.copy(this.sky).lerp(id,.22*u),this.domeMat.uniforms.top.value.copy(this.sky).multiplyScalar(.7).lerp(w_,.3*u),this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:i*.6,this.scene.fog.far=s?18:i*(1-.3*f),s||(this.scene.fog.near=i*(.6-.25*f)),.2+.8*this.daylight;const p=Al(-.04,.3,l)*(1-.65*f),x=Al(0,-.3,l)*(1-.7*f),m=Math.max(0,1-Math.abs(l)*3.2)*(1-f),g=new I(a,l,.28).normalize(),M=l>-.04;this.lightDir.copy(M?g:g.clone().negate()),this.sunLight.color.setRGB(1,.95-.38*m,.88-.62*m),M||this.sunLight.color.setRGB(.55,.66,1),this.sunLight.intensity=(M?3.4*p:.6*x)+c*2.5,this.hemi.color.copy(this.sky).lerp(id,.6),this.hemi.groundColor.setRGB(.42,.36,.28).multiplyScalar(.4+.6*this.daylight),this.hemi.intensity=.3+2.5*this.daylight+.3*x+c*3;const S=this.shadowOn?2*this.shadowExt/Math.max(256,this.sunLight.shadow.mapSize.x):1,v=Math.round(e.x/S)*S,D=Math.round(e.y/S)*S,R=Math.round(e.z/S)*S;this.sunLight.target.position.set(v,D,R),this.sunLight.position.set(v+this.lightDir.x*160,D+this.lightDir.y*160,R+this.lightDir.z*160),this.sunLight.castShadow=this.shadowOn&&this.sunLight.intensity>.05,this.classic&&(this.sunLight.intensity=0,this.sunLight.castShadow=!1,this.hemi.color.set(16777215),this.hemi.groundColor.set(16777215),this.hemi.intensity=(.2+.8*this.daylight)*3.1+c*3),this.root.position.copy(this.camera.position);const w=220;this.sun.position.set(a*w,l*w,30),this.glow.position.set(a*w*.98,l*w*.98,30),this.glow.material.opacity=Math.max(0,Math.min(1,(l+.15)*1.6))*(1-f)*(s?0:1),this.moon.position.set(-a*w,-l*w,30),this.sun.lookAt(this.camera.position),this.moon.lookAt(this.camera.position),this.stars.rotation.z=r,this.starMat.opacity=Math.max(0,1-this.daylight*1.6)*(s?0:1)*(1-f),this.sun.material.opacity=this.moon.material.opacity=1-f*.95;const C=1.2+o.s*10;this.cloudX+=o.x/(o.s||1)*C*t,this.cloudZ+=o.z/(o.s||1)*C*t;const y=768,b=(.3+.7*h)*(1-.5*f);for(const[P,O,U,G]of[[this.clouds,this.cloudMat,150,1],[this.clouds2,this.cloudMat2,142,.7]])P.position.set(e.x,U,e.z),O.map.repeat.set(900/y,900/y),O.map.offset.set((e.x+this.cloudX*G)/y+(G<1?.37:0),-(e.z+this.cloudZ*G)/y),O.color.setScalar(b*(G<1?.8:1));this.cloudMat.opacity=.9,this.cloudMat2.opacity=Math.min(.95,f*1.1),this.clouds2.visible=f>.05}}const I_=n=>Ss(n)||(Fe[n.id]&&Fe[n.id].armor?{dur:Fe[n.id].armor.dur}:null),ue=n=>document.getElementById(n);function ln(n,t={}){const e=document.createElement("div");if(e.className="slot"+(t.active?" active":""),t.group&&(e.dataset.g=t.group,e.dataset.i=t.index),n){const i=document.createElement("img");if(i.src=gu(n.id),du(n.id)&&(i.className="flat"),e.appendChild(i),e.title=lo(n.id).name,n.n>1){const o=document.createElement("span");o.className="n",o.textContent=n.n,e.appendChild(o)}const s=I_(n);if(s&&n.d>0){const o=document.createElement("div");o.className="dur";const r=Math.max(0,1-n.d/s.dur);o.innerHTML=`<i style="width:${r*100}%;background:${r>.5?"#6f6":r>.2?"#fd4":"#f55"}"></i>`,e.appendChild(o)}}if(t.key){const i=document.createElement("span");i.className="k",i.textContent=t.key,e.appendChild(i)}return e}class N_{constructor(t){this.g=t,this.cursor=null,this.craft=[],this.size=2,this.isOpen=!1,this.toastT=0,this.furnace=null,this.sprites=Dv();const e=ue("inv");e.addEventListener("mousedown",i=>this.onDown(i)),e.addEventListener("contextmenu",i=>i.preventDefault()),document.addEventListener("mousemove",i=>{const s=ue("cursorItem");s.style.left=i.clientX+"px",s.style.top=i.clientY+"px"})}toast(t){const e=ue("toast");e.textContent=t,e.style.opacity=1,clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.style.opacity=0,1600)}renderHotbar(){const t=ue("hotbar");t.innerHTML="";for(let e=0;e<9;e++){const i=ln(this.g.inv.slots[e],{active:e===this.g.inv.selected,key:e+1});i.onclick=()=>{this.g.inv.selected=e,this.g.onSelect()},t.appendChild(i)}}renderStats(){const t=this.g.player,e=this.g.getMode()==="survival",i=this.sprites;ue("bars").style.visibility=e?"visible":"hidden";const s=(h,f)=>{let c="";for(let d=0;d<10;d++)c+=`<img class="hs" src="${f[h>=d*2+2?"full":h===d*2+1?"half":"empty"]}">`;return c},o=Math.ceil(t.hp),r=Math.ceil(t.food),l=o+","+r+","+Math.ceil(t.air)+","+t.headUnder+","+e+","+(o<=6?Math.floor(performance.now()/250)%2:0);if(l===this._statKey)return;this._statKey=l,ue("hearts").innerHTML=s(o,i.heart),ue("hearts").classList.toggle("low",o<=6),ue("food").innerHTML=s(r,i.food);const a=Math.ceil(t.air);ue("air").innerHTML=t.headUnder&&e?Array.from({length:10},(h,f)=>`<img class="hs" src="${a>f?i.bubble.full:i.bubble.empty}">`).join(""):""}open(t,e=null){this.furnace=t==="furnace"?e:null,t==="furnace"&&(t=2),this.size=t,this.craft=Array(t*t).fill(null),this.isOpen=!0;const i=this.g.getMode()==="creative";ue("inv").classList.remove("hidden"),ue("invTitle").textContent=this.furnace?"Horno":i?"Creativo":t===3?"Mesa de crafteo":"Inventario",ue("craftArea").classList.toggle("hidden",i||!!this.furnace),ue("furnaceArea").classList.toggle("hidden",!this.furnace),ue("paletteWrap").classList.toggle("hidden",!i||!!this.furnace),ue("craftGrid").style.gridTemplateColumns=`repeat(${t}, 46px)`,this.render()}close(){if(!this.isOpen)return;this.isOpen=!1,this.furnace=null;const t=e=>{if(!e)return;const i=this.g.inv.add(e.id,e.n);i&&this.g.dropItem(e.id,i)};this.craft.forEach(t),this.craft=[],t(this.cursor),this.cursor=null,ue("inv").classList.add("hidden"),ue("cursorItem").classList.add("hidden"),this.renderHotbar()}recipe(){const t=Sv(this.craft.map(e=>e?e.id:0),this.size);return t?{id:t.out,n:t.n,d:0}:null}render(){const t=this.g,e=ue("armorSlots");e.innerHTML="";for(let r=0;r<4;r++)e.appendChild(ln(t.inv.armor[r],{group:"armor",index:r}));{const r=t.inv.armorPoints();ue("armorPts").textContent="Defensa "+r+" · "+Math.round((1-Math.pow(.96,r))*100)+"% menos daño"}ue("armorRow").classList.toggle("hidden",!!this.furnace);const i=ue("invMain");i.innerHTML="";for(let r=9;r<36;r++)i.appendChild(ln(t.inv.slots[r],{group:"inv",index:r}));const s=ue("invHot");s.innerHTML="";for(let r=0;r<9;r++)s.appendChild(ln(t.inv.slots[r],{group:"inv",index:r,active:r===t.inv.selected}));if(this.furnace){const r=this.furnace;ue("fIn").innerHTML="",ue("fIn").appendChild(ln(r.slots[0],{group:"furnace",index:0})),ue("fFuel").innerHTML="",ue("fFuel").appendChild(ln(r.slots[1],{group:"furnace",index:1})),ue("fOut").innerHTML="",ue("fOut").appendChild(ln(r.slots[2],{group:"furnace",index:2})),this.furnaceBars()}else if(t.getMode()==="creative"){const r=ue("palette");r.innerHTML="",[...Object.keys(qe).map(Number),...Object.keys(Fe).map(Number)].forEach(a=>r.appendChild(ln({id:a,n:1,d:0},{group:"pal",index:a})))}else{const r=ue("craftGrid");r.innerHTML="",this.craft.forEach((a,h)=>r.appendChild(ln(a,{group:"craft",index:h})));const l=ue("craftOut");l.innerHTML="",l.appendChild(ln(this.recipe(),{group:"out",index:0}))}const o=ue("cursorItem");this.cursor?(o.classList.remove("hidden"),o.innerHTML=`<img src="${gu(this.cursor.id)}">${this.cursor.n>1?`<span class="n">${this.cursor.n}</span>`:""}`):o.classList.add("hidden"),this.renderHotbar()}furnaceBars(){const t=this.furnace;t&&(ue("fFlame").style.height=(t.burn>0?Math.min(100,t.burn/t.burnMax*100):0)+"%",ue("fArrow").style.width=Math.min(100,t.cook/fu*100)+"%")}arr(t){return t==="inv"?this.g.inv.slots:t==="armor"?this.g.inv.armor:t==="furnace"?this.furnace.slots:this.craft}onDown(t){const e=t.target.closest(".slot"),i=t.button===2;if(!e||!e.dataset.g){this.g.getMode()==="creative"&&t.target.closest("#paletteWrap")?(this.cursor=null,this.render()):!t.target.closest(".panel")&&this.cursor&&(this.g.dropItem(this.cursor.id,i?1:this.cursor.n),i&&this.cursor.n>1?this.cursor.n--:this.cursor=null,this.render());return}const s=e.dataset.g,o=+e.dataset.i;if(s==="pal"){this.cursor={id:o,n:i?1:Tn(o),d:0},this.render();return}if(s==="out"){const h=this.recipe();if(!h||this.cursor&&!(this.cursor.id===h.id&&this.cursor.n+h.n<=Tn(h.id)))return;this.cursor?this.cursor.n+=h.n:this.cursor={...h},this.craft=this.craft.map(f=>f&&f.n>1?{...f,n:f.n-1}:null),this.g.sound("craft"),this.g.onCraft&&this.g.onCraft(h.id,h.n),this.render();return}const r=this.arr(s),l=r[o],a=this.cursor;if(!(s==="armor"&&a&&!(Fe[a.id]&&Fe[a.id].armor&&Fe[a.id].armor.slot===o))){if(s==="armor"&&this.g.onArmorChange&&setTimeout(()=>this.g.onArmorChange(),0),s==="furnace"&&o===2){if(!l)return;a?a.id===l.id&&a.n+l.n<=Tn(a.id)&&(a.n+=l.n,r[2]=null):(this.cursor=l,r[2]=null),this.render();return}if(i){if(a)l?l.id===a.id&&l.n<Tn(a.id)?(l.n++,a.n--,a.n<=0&&(this.cursor=null)):(r[o]=a,this.cursor=l):(r[o]={...a,n:1},a.n--,a.n<=0&&(this.cursor=null));else if(l){const h=Math.ceil(l.n/2);this.cursor={...l,n:h},l.n-=h,l.n<=0&&(r[o]=null)}}else if(!a)r[o]=null,this.cursor=l;else if(!l)r[o]=a,this.cursor=null;else if(l.id===a.id&&Tn(a.id)>1){const h=Math.min(a.n,Tn(a.id)-l.n);l.n+=h,a.n-=h,a.n<=0&&(this.cursor=null)}else r[o]=a,this.cursor=l;this.render()}}}let He=null,pa=null,Qn=null,vu=.5;function Ia(){if(He)return!0;try{He=new(window.AudioContext||window.webkitAudioContext),Qn=He.createGain(),Qn.gain.value=vu,Qn.connect(He.destination),pa=He.createBuffer(1,He.sampleRate,He.sampleRate);const n=pa.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=Math.random()*2-1;return!0}catch{return!1}}function co(){Ia()&&He.state==="suspended"&&He.resume()}function O_(n){vu=n,Qn&&(Qn.gain.value=n)}function zi(n,t,e,i,s=0){if(!Ia())return;const o=He.currentTime,r=He.createBufferSource();r.buffer=pa;const l=He.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(t,o),s&&l.frequency.exponentialRampToValueAtTime(Math.max(40,t*s),o+n),l.Q.value=e;const a=He.createGain();a.gain.setValueAtTime(i,o),a.gain.exponentialRampToValueAtTime(.001,o+n),r.connect(l),l.connect(a),a.connect(Qn),r.start(o,Math.random()*.5,n)}function tn(n,t,e,i,s){if(!Ia())return;const o=He.currentTime,r=He.createOscillator();r.type=n,r.frequency.setValueAtTime(t,o),r.frequency.exponentialRampToValueAtTime(e,o+i);const l=He.createGain();l.gain.setValueAtTime(s,o),l.gain.exponentialRampToValueAtTime(.001,o+i),r.connect(l),l.connect(Qn),r.start(o),r.stop(o+i)}let Vr=null;function U_(){if(Vr||!Ia())return Vr;const n=(t,e,i)=>{const s=He.createBufferSource();s.buffer=pa,s.loop=!0;const o=He.createBiquadFilter();o.type=t,o.frequency.value=e,o.Q.value=i;const r=He.createGain();return r.gain.value=0,s.connect(o),o.connect(r),r.connect(Qn),s.start(0,Math.random()*.5),{f:o,g:r}};return Vr={rain:n("highpass",1800,.3),rainLow:n("lowpass",5e3,.3),wind:n("bandpass",420,.9)},Vr}function sd(n,t,e=0){if(!He||He.state!=="running")return;const i=U_();if(!i)return;const s=He.currentTime;i.rain.g.gain.setTargetAtTime(n*.16,s,.3),i.rainLow.g.gain.setTargetAtTime(n*.12,s,.3),i.wind.g.gain.setTargetAtTime(t*.5,s,.4),i.wind.f.frequency.setTargetAtTime(300+380*(.5+.5*Math.sin(e))+t*200,s,.3)}function Rh(n,t=1){if(He)switch(n){case"break":zi(.16,1400,1,.9,.4);break;case"place":zi(.09,900,1,.7);break;case"step":zi(.07,500,1,.25);break;case"hit":zi(.08,2200,1,.5);break;case"hurt":tn("square",330,110,.22,.25);break;case"pop":tn("sine",500,1100,.1,.2);break;case"eat":zi(.07,1800,2,.6),setTimeout(()=>zi(.07,1600,2,.6),110);break;case"splash":zi(.3,2500,.5,.6,.2);break;case"hiss":zi(.6,6e3,.5,.4);break;case"explode":zi(1.1,900,.7,1.4,.1),tn("sine",90,30,.8,.9);break;case"craft":tn("triangle",400,800,.15,.25);break;case"die":tn("sawtooth",300,40,.8,.3);break;case"oink":tn("sawtooth",220,150,.15,.12);break;case"moo":tn("sawtooth",130,100,.5,.12);break;case"thunder":zi(3.2,380,.7,1.6*t,.12),setTimeout(()=>zi(1.6,220,.8,.9*t,.2),450),tn("sine",60,25,2,.5*t);break;case"roar":zi(1.5,500,.8,.9*t,.15),tn("sawtooth",95,32,1.5,.45*t);break;case"shoot":zi(.3,3200,.8,.45*t,.25),tn("sine",700,180,.25,.2*t);break;case"groan":tn("sawtooth",110,70,.6,.14);break}}const z_="minecraft-web",Gi="kv";let Wr=null;function go(){return Wr||(Wr=new Promise((n,t)=>{const e=indexedDB.open(z_,1);e.onupgradeneeded=()=>e.result.createObjectStore(Gi),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Wr)}const Qs=n=>new Promise((t,e)=>{n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),Na=n=>new Promise((t,e)=>{n.oncomplete=t,n.onerror=()=>e(n.error),n.onabort=()=>e(n.error)});async function rr(n){return await Qs(n.get("index"))||[]}async function F_(){const t=(await go()).transaction(Gi,"readwrite"),e=t.objectStore(Gi),i=await Qs(e.get("meta"));if(i){const s=await Qs(e.getAllKeys()),o=await rr(e),r="w"+Date.now().toString(36);for(const l of s)typeof l=="string"&&l.startsWith("c:")&&(e.put(await Qs(e.get(l)),`w:${r}:${l}`),e.delete(l));e.put(i,`w:${r}:meta`),e.delete("meta"),o.unshift({id:r,name:"Mundo antiguo",mode:i.mode,seed:i.seed,updated:Date.now(),created:Date.now(),played:0,level:0,thumb:null}),e.put(o,"index")}await Na(t)}async function _u(){try{await F_();const t=(await go()).transaction(Gi).objectStore(Gi);return(await rr(t)).sort((e,i)=>i.updated-e.updated)}catch{return[]}}async function Mu(n){const e=(await go()).transaction(Gi).objectStore(Gi),i=IDBKeyRange.bound(`w:${n}:`,`w:${n}:￿`),s=await Qs(e.getAllKeys(i)),o=await Qs(e.getAll(i)),r={meta:null,chunks:new Map,nether:new Map,end:new Map};return s.forEach((l,a)=>{const h=l.slice(`w:${n}:`.length);h==="meta"?r.meta=o[a]:h.startsWith("c:")?r.chunks.set(Number(h.slice(2)),o[a]):h.startsWith("n:")?r.nether.set(Number(h.slice(2)),o[a]):h.startsWith("e:")&&r.end.set(Number(h.slice(2)),o[a])}),r}function yu(){return"w"+Date.now().toString(36)+Math.floor(Math.random()*1296).toString(36)}async function bu(n,t,e,i){try{const o=(await go()).transaction(Gi,"readwrite"),r=o.objectStore(Gi);r.put(t,`w:${n}:meta`);for(const[f,c]of e)r.put(c,`w:${n}:${typeof f=="number"?"c:"+f:f}`);const l=await rr(r),a=l.findIndex(f=>f.id===n),h={...a>=0?l[a]:{},...i,id:n,updated:Date.now()};return a>=0?l[a]=h:l.push(h),r.put(l,"index"),await Na(o),!0}catch{return!1}}async function k_(n){const e=(await go()).transaction(Gi,"readwrite"),i=e.objectStore(Gi);i.delete(IDBKeyRange.bound(`w:${n}:`,`w:${n}:￿`)),i.put((await rr(i)).filter(s=>s.id!==n),"index"),await Na(e)}async function B_(n,t){const i=(await go()).transaction(Gi,"readwrite"),s=i.objectStore(Gi),o=await rr(s),r=o.find(l=>l.id===n);r&&(r.name=t),s.put(o,"index"),await Na(i)}const H_=n=>{let t="";for(let e=0;e<n.length;e+=32768)t+=String.fromCharCode.apply(null,n.subarray(e,e+32768));return btoa(t)},G_=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));async function Su(n,t,e){return new Response(n.pipeThrough(new t(e)))}async function Eu(n){const t=await _u(),e=t.find(l=>l.id===n),i=await Mu(n),s=[...[...i.chunks].map(([l,a])=>["c:"+l,a]),...[...i.nether].map(([l,a])=>["n:"+l,a]),...[...i.end].map(([l,a])=>["e:"+l,a])],o=JSON.stringify({v:3,summary:e,meta:i.meta,chunks:s.map(([l,a])=>[l,H_(new Uint8Array(a))])}),r=new Blob([o]);return typeof CompressionStream>"u"?r:(await Su(r.stream(),CompressionStream,"gzip")).blob()}async function V_(n){let t;try{t=await(await Su(n.stream(),DecompressionStream,"gzip")).text()}catch{t=await n.text()}const e=JSON.parse(t);if(!e||!e.meta)throw new Error("Archivo no válido");const i=yu();return await bu(i,e.meta,e.chunks.map(([s,o])=>[s,G_(o)]),{...e.summary||{},name:(e.summary&&e.summary.name||"Mundo")+" (importado)",created:Date.now()}),i}const nt=n=>document.getElementById(n),Fn=nt("game"),_i=new Yx({canvas:Fn,antialias:!0,powerPreference:"high-performance"});_i.setPixelRatio(Math.min(devicePixelRatio,2));const Ze=new Kx;Ze.fog=new Qh(8900331,50,90);const hi=new Fi(75,1,.05,500);Ze.add(hi);const{canvas:wu,texture:ma}=av();wv(wu);document.documentElement.style.setProperty("--dirt",`url(${Pv("dirt")})`);const W_={value:new Et(1,1,1)},ga={uTime:{value:0},uWind:{value:.12}};function od(n){return n.onBeforeCompile=t=>{t.uniforms.uTime=ga.uTime,t.uniforms.uWind=ga.uWind,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
reflectedLight.directSpecular *= vSK;`)},n.customProgramCacheKey=()=>"chunk-pbr",n}const xa=hv(wu);let Xr=null;const ts={opaque:od(new Nf({map:ma,normalMap:xa,vertexColors:!0,roughness:.94,metalness:0})),trans:od(new Nf({map:ma,normalMap:xa,vertexColors:!0,transparent:!0,depthWrite:!1,side:Ei,roughness:.1,metalness:.05})),tint:W_};function rd(n){n&&(n.magFilter=xe,n.minFilter=xe,n.generateMipmaps=!1,n.anisotropy=1,n.needsUpdate=!0)}function X_(n,t=!1){n&&!Xr&&(Xr=lv(_i)),t&&(rd(ma),rd(xa));for(const e of[ts.opaque,ts.trans])e.flatShading=t,e.map=n?Xr.map:ma,e.normalMap=t?null:n?Xr.normalMap:xa,e.roughness=t?1:e===ts.trans?.1:.94,e.needsUpdate=!0}_i.toneMapping=Ra;_i.toneMappingExposure=1.45;_i.shadowMap.type=Md;const Ch=[{name:"Bajo",shadows:!1,size:0,ext:0,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Medio",shadows:!0,size:1024,ext:48,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Alto",shadows:!0,size:2048,ext:64,bloom:!0,hd:!0,msaa:2,pr:1.25,grade:!0},{name:"Ultra (hiperrealista)",shadows:!0,size:4096,ext:80,bloom:!0,hd:!0,msaa:4,pr:2,grade:!0},{name:"Clásico (píxel)",shadows:!1,size:0,ext:0,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1,classic:!0}],Tu={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.85},uSat:{value:1.04},uGrain:{value:.035},uContrast:{value:1.06}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; uniform float uTime, uVig, uSat, uGrain, uContrast; varying vec2 vUv;float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));c.rgb = mix(vec3(l), c.rgb, uSat); c.rgb = (c.rgb - 0.18) * uContrast + 0.18; vec2 d = vUv - 0.5; c.rgb *= 1.0 - dot(d, d) * uVig;c.rgb += (h(vUv * 1000.0 + uTime) - 0.5) * uGrain; gl_FragColor = c; }"};let Li=null,ad=null,ld=null,Au=!1;function Ru(){const n=Ch[be.quality];be.quality,_i.setPixelRatio(Math.min(devicePixelRatio,n.pr)),_i.shadowMap.enabled=n.shadows,Pi&&Pi.setShadows(n.shadows,n.size||1024,n.ext||48);for(const i of[ts.opaque,ts.trans])i.needsUpdate=!0;X_(n.hd,!!n.classic),n.classic&&(_i.shadowMap.enabled=!1,_i.shadowMap.needsUpdate=!0),_i.toneMapping=n.classic?In:Ra,Pi&&(Pi.classic=!!n.classic);const t=n.bloom||n.grade||n.msaa;if(Li&&(Li.dispose(),Li=null),t){const i=innerWidth,s=innerHeight,o=_i.getPixelRatio(),r=new Ki(i*o,s*o,{type:pn,samples:n.msaa});Li=new pv(_i,r),Li.addPass(new mv(Ze,hi)),n.bloom&&(ad=new ao(new kt(i,s),.42,.55,.88),Li.addPass(ad)),Au=n.grade,n.grade&&(ld=new au(Tu),Li.addPass(ld)),Li.addPass(new vv),Li.setSize(i,s)}const e=document.getElementById("bQuality");e&&(e.textContent="Gráficos: "+n.name),_c()}const be={radius:8,fov:75,sens:1,vol:.5,cam:0,quality:2};try{Object.assign(be,JSON.parse(localStorage.getItem("mcweb-settings")||"{}"))}catch{}{const n=Ah();be.pad=Object.assign(n,be.pad||{}),be.pad.map=Object.assign(Ah().map,be.pad&&be.pad.map||{})}const Zn=()=>{try{localStorage.setItem("mcweb-settings",JSON.stringify(be))}catch{}},Cu=new Set(["storm","dragon","wither","herobrine"]),hd={goku:[[T.STAR,2],[T.DBALL,3],[T.SENZU,3],[T.DIAMOND,12],[T.NETHERITE,1]],burns:[[T.GOLD,24],[_.GOLD_BLOCK,4],[T.DIAMOND,6],[T.DONUT,6],[T.DUFF,6]],impostor:[[T.STAR,1],[T.DIAMOND,8],[T.GOLD,12],[T.SCRAP,2],[T.PEARL,2]],colossus:[[T.STAR,1],[T.IRON,24],[T.DIAMOND,8],[T.GOLD,6]],creepertitan:[[T.STAR,1],[T.COAL,32],[T.DIAMOND,8],[T.GOLD,8]],blazeking:[[T.STAR,1],[T.COAL,24],[T.DIAMOND,8],[T.GOLD,10]],piglinking:[[T.STAR,2],[T.GOLD,32],[T.DIAMOND,10]],endertitan:[[T.STAR,2],[T.PEARL,6],[T.DIAMOND,12]],voidlord:[[T.STAR,2],[T.PEARL,4],[T.DIAMOND,12],[T.GOLD,12]],ravager:[[T.STAR,1],[T.DIAMOND,8],[T.GOLD,10]],evoker:[[T.STAR,1],[T.DIAMOND,6],[T.GOLD,8],[T.PEARL,1]],ghast:[[T.STAR,1],[T.DIAMOND,6],[T.COAL,16]],herobrine:[[T.STAR,3],[T.DIAMOND,16],[T.GOLD,16],[T.PEARL,2]],slimeking:[[T.STAR,1],[T.DIAMOND,6],[T.GOLD,6]],storm:[[T.STAR,1],[_.COMMAND,1],[T.DIAMOND,8],[T.GOLD,12]],dragon:[[T.STAR,2],[T.PEARL,4],[T.DIAMOND,12],[T.GOLD,10]],wither:[[T.STAR,1],[T.DIAMOND,6],[T.GOLD,10]],warden:[[T.STAR,1],[T.DIAMOND,10],[T.GOLD,16]],guardian:[[T.STAR,1],[T.PEARL,1],[T.DIAMOND,6],[T.GOLD,8]]},va=["Primera persona","Tercera persona (detrás)","Tercera persona (delante)"],_a=new iu(new Zx(new Yt(1.005,1.005,1.005)),new ec({color:0}));_a.visible=!1;Ze.add(_a);const Lu=(()=>{let n=12345;const t=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296,e=[];for(let i=0;i<6;i++){let s=8,o=8;const r=t()*6.28;for(let l=0;l<12;l++)s+=Math.cos(r+(t()-.5)*1.3),o+=Math.sin(r+(t()-.5)*1.3),e.push([Math.round(s),Math.round(o),l])}return Array.from({length:10},(i,s)=>{const o=document.createElement("canvas");o.width=o.height=16;const r=o.getContext("2d");r.fillStyle="rgba(0,0,0,0.8)";for(const[a,h,f]of e)f<=(s+1)*1.25&&r.fillRect(a,h,1,1);const l=new Hi(o);return l.magFilter=xe,l.minFilter=xe,l.generateMipmaps=!1,l})})(),Ho=new Mt(new Yt(1.01,1.01,1.01),new re({map:Lu[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));Ho.visible=!1;Ze.add(Ho);const Lh=new re({transparent:!0,side:Ei,depthTest:!1,fog:!1}),Ma=new Mt(new On(.55,.55),Lh),Go=new Mt(new Yt(.12,.12,.5),new re({color:14264191,depthTest:!1,fog:!1})),Jo=new Se;Jo.add(Ma,Go);hi.add(Jo);Ma.renderOrder=Go.renderOrder=999;let Dt="menu",oe="survival",sa=be.radius,qi=be.cam|0;const mn=new Map;let dn,Rl=0,Xt,fe=null,Ye=null,Dh,ni,on=null,sn=0,es=0,is=0,Cl=0,Ll=0,cd=2,ya=null,fc="Mundo",dc=0,Du=0,uc=null,to=!1;const Ph=n=>6+n*4;function _s(n){for(es+=n;es>=Ph(sn);)es-=Ph(sn),sn++,ct&&ct.toast("¡Nivel "+sn+"!"),me("pop")}let it,N,Pt,Pi,Ge,ui,Si,ct,Un=1,Ih,ce=null,ns=!1,en={},se="overworld",ba={nether:new Map,end:new Map},jn=0,Vo=0,Sa=!1;const Nh={overworld:"Overworld",nether:"El Nether",end:"El End"},Pu=(n,t,e)=>(se==="overworld"?"":se+":")+n+","+t+","+e,Ve={left:!1,right:!1},Xi={key:"",progress:0};let Bi=0,qr=0,No=0,Ea=0,fd=-2,Dl=0,Pl=0;function Ii(n){const t=nt("overlay");if(t.classList.toggle("ingame",n==="pause"||n==="death"),!n){t.classList.add("hidden");return}t.classList.remove("hidden");for(const e of["menu","pause","death"])nt(e).classList.toggle("hidden",e!==n)}const me=n=>{Rh(n),ce&&(n==="hurt"?ce.rumble(.6,.35,180):n==="explode"?ce.rumble(1,.7,450):n==="roar"?ce.rumble(.8,.5,600):n==="hit"?ce.rumble(.25,.5,70):n==="break"?ce.rumble(.15,.35,60):n==="thunder"&&ce.rumble(.7,.2,500))};function xo(){try{const n=Fn.requestPointerLock();n&&n.catch&&n.catch(()=>{})}catch{}}function q_(n){for(let t=0;t<600;t+=5)for(let e=0;e<12;e++){const i=Math.round(Math.cos(e/12*Math.PI*2)*t),s=Math.round(Math.sin(e/12*Math.PI*2)*t),o=Rn(i,s,n);if(o.h>ii+3&&o.h<ii+16&&o.biome!=="ocean"&&o.biome!=="mountains")return[i,s]}return[0,0]}function pc(n,t){for(let e=0;e<12;e++)for(let i=-e;i<=e;i++)for(let s=-e;s<=e;s++){if(Math.max(Math.abs(i),Math.abs(s))!==e)continue;const o=n+i,r=t+s,l=it.topY(o,r);if(l<ii)continue;const a=it.getBlock(o,l,r);if((a===_.GRASS||a===_.SAND||a===_.SNOW)&&!it.isSolid(o,l+1,r)&&!it.isSolid(o,l+2,r))return new I(o+.5,l+1,r+.5)}return new I(n+.5,Math.max(it.topY(n,t),ii)+2,t+.5)}function Oh(n,t,e=null){const i=N.eye,s=N.lookDir();ui.spawn(i.x+s.x*.5,i.y-.3,i.z+s.z*.5,n,t,!1);const o=ui.list[ui.list.length-1];o.vel.set(s.x*5,2.5,s.z*5),o.age=-1.2}function Il(n,t,e,i,s=1){me("explode");{const h=Math.hypot(N.pos.x-n,N.pos.y-t,N.pos.z-e);h<40&&ce.rumble(Math.min(1,1.2-h/40),.8,500)}const o=Math.ceil(i)+1;for(let h=-o;h<=o;h++)for(let f=-o;f<=o;f++)for(let c=-o;c<=o;c++){if(Math.hypot(h,f,c)>i*(.7+Math.random()*.3))continue;const u=Math.floor(n)+h,p=Math.floor(t)+f,x=Math.floor(e)+c,m=it.getBlock(u,p,x);if(!(m===ne||m===_.BEDROCK||xn[m])&&(it.setBlock(u,p,x,ne),oe==="survival"&&Math.random()<.2)){const g=pu(m,null);g&&ui.spawn(u+.5,p+.5,x+.5,g[0],g[1])}}Si.burst(n,t,e,[.5,.5,.5],40,7),Si.burst(n,t,e,[.9,.5,.1],20,6);const r=N.pos.x-n,l=N.pos.z-e,a=Math.hypot(r,N.pos.y+.9-t,l);a<i*2&&N.damage(Math.round((1-a/(i*2))*22*s),r/(Math.hypot(r,l)||1)*9,l/(Math.hypot(r,l)||1)*9);for(const h of[...Ge.list])Math.hypot(h.pos.x-n,h.pos.y-t,h.pos.z-e)<i*2&&Ge.damage(h,14,n,e)}const Qo=[{name:"Llanura",until:30,blocks:[_.GRASS,_.GRASS,_.DIRT,_.DIRT,_.LOG,_.LOG,_.LEAVES,_.SAND],mobs:["pig","cow","chicken","sheep"]},{name:"Bosque y cueva",until:90,blocks:[_.STONE,_.STONE,_.COBBLE,_.LOG,_.PLANKS,_.COAL_ORE,_.COAL_ORE,_.IRON_ORE,_.GRAVEL||_.SAND,_.DIRT],mobs:["zombie","skeleton","spider","pig","creeper"]},{name:"Desierto y nieve",until:170,blocks:[_.SAND,_.SANDSTONE,_.SANDSTONE,_.CACTUS,_.SNOW,_.SNOW,_.IRON_ORE,_.GOLD_ORE,_.GLASS],mobs:["zombie","skeleton","creeper","villager","crewmate"]},{name:"Mina profunda",until:270,blocks:[_.STONE,_.STONE,_.COBBLE,_.MOSSY_COBBLE,_.COAL_ORE,_.IRON_ORE,_.GOLD_ORE,_.DIAMOND_ORE,_.GOLD_BLOCK,_.BRICKS],mobs:["zombie","skeleton","creeper","spider","slime","saibaman"]},{name:"Nether",until:400,blocks:[_.NETHERRACK,_.NETHERRACK,_.SOUL_SAND,_.GLOWSTONE,_.NETHER_BRICKS,_.ANCIENT_DEBRIS,_.OBSIDIAN,_.GOLD_ORE],mobs:["piglin","blaze","magmacube","witherskeleton","hoglin","impostor"]},{name:"El End",until:550,blocks:[_.END_STONE,_.END_STONE,_.PURPUR,_.END_BRICKS,_.OBSIDIAN,_.DIAMOND_ORE,_.CHEST],mobs:["enderman","endermite","shulker","phantom","saibaman"]},{name:"CAOS CROSSOVER",until:1/0,blocks:null,mobs:["impostor","crewmate","homer","bart","marge","lisa","flanders","saibaman","dog","creeper","enderman","blaze"]}],Y_={100:"evoker",220:"impostor",300:"ghast",420:"burns",520:"wither",650:"blazeking",800:"goku",1e3:"dragon"},dd=new Set(["impostor","burns","goku"]),wa=()=>Qo.findIndex(n=>un.count<n.until);function Iu(){const n=Qo[wa()];if(!n.blocks){const t=Object.keys(qe).map(Number).filter(e=>e!==_.BEDROCK&&e!==_.COMMAND&&e!==_.WATER&&e!==_.LAVA&&!qe[e].liquid&&e!==_.NETHER_PORTAL&&e!==_.END_PORTAL&&e!==_.END_FRAME_EYE&&e!==_.CHEST_OPEN);return t[Math.floor(Math.random()*t.length)]}return n.blocks[Math.floor(Math.random()*n.blocks.length)]||_.STONE}function K_(){it.getBlock(0,64,0)===ne&&it.setBlock(0,64,0,un.count===0?_.GRASS:Iu())}function Nu(){const n=wa(),t=Qo[n],e=n?Qo[n-1].until:0;nt("obPhase").textContent="⬛ "+t.name,nt("obCount").textContent=un.count+" bloques"+(t.until<1/0?" / "+t.until:""),nt("obFill").style.width=(t.until<1/0?Math.min(100,(un.count-e)/(t.until-e)*100):100)+"%"}function j_(n=26){for(let t=-n;t<=n;t++)for(let e=-n;e<=n;e++)t*t+e*e<=n*n&&it.getBlock(t,63,e)===ne&&!(t===0&&e===0)&&it.setBlock(t,63,e,t+e&1?_.STONE:_.COBBLE)}function $_(){const n=wa();un.count++;const t=wa(),e=Qo[t];setTimeout(()=>{it.getBlock(0,64,0)===ne&&it.setBlock(0,64,0,Iu())},0),t!==n&&(ct.toast("★ Nueva fase: "+e.name+" ★"),me("levelup"),_s(30));const i=()=>.5+(Math.random()-.5)*1.2;if(un.count%8===0&&oe==="survival"){const o=e.mobs[Math.floor(Math.random()*e.mobs.length)];Ge.list.length<14&&Ge.add(o,i(),65.2,i())}if(un.count%25===0){const o=vc({x:0,y:64,z:0});for(const[r,l]of o)ui.spawn(.5,65.5,.5,r,l);ct.toast("🎁 ¡Recompensa de One Block!")}const s=Y_[un.count];s&&!fe&&!Ye&&(dd.has(s)&&(j_(),ct.toast("Se forma una arena de piedra…")),setTimeout(()=>{fe||N.lookDir&&gc(s)},dd.has(s)?600:100)),Nu()}function Uh(n){const t=it.getBlock(n.x,n.y,n.z);if(t===ne||qe[t].hardness===1/0)return;const e=Pt.held();if(it.setBlock(n.x,n.y,n.z,ne),An==="oneblock"&&se==="overworld"&&n.x===0&&n.y===64&&n.z===0&&$_(),t===_.FURNACE){const i=Pu(n.x,n.y,n.z),s=mn.get(i);if(s){for(const o of s.slots)o&&ui.spawn(n.x+.5,n.y+.5,n.z+.5,o.id,o.n);mn.delete(i)}}if(t===_.OBSIDIAN&&rM(n.x,n.y,n.z),(t===_.COAL_ORE||t===_.IRON_ORE||t===_.GOLD_ORE||t===_.DIAMOND_ORE)&&_s(t===_.DIAMOND_ORE?8:3),Si.blockBreak(n.x,n.y,n.z,t),me("break"),oe==="survival"){const i=pu(t,e);i&&ui.spawn(n.x+.5,n.y+.4,n.z+.5,i[0],i[1]),Ss(e)&&qe[t].hardness>0&&(Pt.wearHeld(1)&&(me("break"),ct.toast("¡Se ha roto la herramienta!")),ct.renderHotbar())}it.getBlock(n.x,n.y+1,n.z)===_.CACTUS&&qe[t].cactusOk}function mc(){const n=N.eye,t=N.lookDir(),e=it.raycast(n,t,oe==="creative"?7:5.5);if(Bi=Math.max(Bi,.001),e&&e.id===_.TABLE&&!N.keys.has("ShiftLeft")){Aa(3);return}if(e&&e.id===_.FURNACE&&!N.keys.has("ShiftLeft")){const h=Pu(e.x,e.y,e.z);mn.has(h)||mn.set(h,{slots:[null,null,null],burn:0,burnMax:1,cook:0}),Aa("furnace",mn.get(h));return}if(e&&e.id===_.END_FRAME){Gu(e);return}if(e&&e.id===_.CHEST&&!N.keys.has("ShiftLeft")){Bu(e);return}if(!N.keys.has("ShiftLeft")){const h=Ge.raycast(n,t,4.5),f=it.raycast(n,t,4.5);if(h&&(!f||f.dist>h.dist)&&h.mob.def.talk){const c=h.mob.def;if(c.villager){ss("trade");return}ct.toast(c.name+": «"+c.talk[Math.floor(Math.random()*c.talk.length)]+"»"),me("hit");return}}const i=Pt.held();if(!i)return;if(i.id===T.LIGHTER){e&&Hu(e);return}if(Fe[i.id]&&Fe[i.id].armor){const h=Fe[i.id].armor,f=Pt.armor[h.slot];Pt.armor[h.slot]={...i},Pt.slots[Pt.selected]=f?{...f}:null,me("craft"),ct.renderHotbar(),dn.setArmor(Pt.armor),ct.toast("Equipado: "+Fe[i.id].name);return}if(i.id===T.DBALL){sM();return}const s=Fe[i.id]&&Fe[i.id].food;if(s){const h=Fe[i.id].heal;oe==="survival"&&(N.food<20||h&&N.hp<20)&&(N.eat(s),h&&(N.hp=20,Si.burst(N.pos.x,N.pos.y+1,N.pos.z,[.5,1,.4],18,4)),Pt.consumeHeld(1),me("eat"),ct.renderHotbar());return}if(!bv(i.id)||!e)return;const o=e.x+e.normal[0],r=e.y+e.normal[1],l=e.z+e.normal[2];if(r<0||r>=he)return;const a=it.getBlock(o,r,l);if(!(a!==ne&&!xn[a])&&!(jo[i.id]&&N.intersectsBlock(o,r,l))&&!(jo[i.id]&&Ge.list.some(h=>Math.abs(h.pos.x-(o+.5))<h.hw+.5&&Math.abs(h.pos.z-(l+.5))<h.hw+.5&&h.pos.y<r+1&&h.pos.y+h.h>r))){if(i.id===_.COMMAND){if(fe||Ye){ct.toast("Ya hay una tormenta en curso");return}it.setBlock(o,r,l,i.id),me("place"),oe==="survival"&&(Pt.consumeHeld(1),ct.renderHotbar()),fM(o,r,l);return}it.setBlock(o,r,l,i.id),me("place"),oe==="survival"&&(Pt.consumeHeld(1),ct.renderHotbar())}}function Z_(n){const t=ws[n];nt("bossFill").style.background=`linear-gradient(${t.color}, #25103a)`,nt("bossbar").style.setProperty("--bc",t.color)}function tr(n,t,e,i,s){const o=ws[n],r=new I(t,e,i);fe=n==="storm"?new jv(Ze,Dh,r):o.make(Ze,Dh,r,s),Z_(n),Cu.has(n)&&(Xt.set("storm"),Xt.boss=!0,Xt.timer=9999),me("roar")}function gc(n){if(fe||Ye)return ct.toast("Ya hay un jefe activo"),!1;const t=ws[n],e=N.lookDir(),i=Math.hypot(e.x,e.z)||1,s=e.x/i,o=e.z/i,r=t.dist||(n==="warden"?12:n==="guardian"?16:n==="wither"?20:26),l=N.pos.x+s*r,a=N.pos.z+o*r;let h;if(t.ground){const f=xc(Math.floor(l),Math.floor(a));h=f!==null?f:N.pos.y}else h=N.pos.y+(t.up===void 0?10:t.up)+(n==="storm"?10:0);return n==="dragon"&&se==="end"?(tr("dragon",.5,100,.5,{cx:0,cy:64,cz:0,pillars:cc()}),Sa=!0):tr(n,l,h,a),ct.toast("¡"+t.name+" ha sido invocado!"),!0}function xc(n,t){if(se==="overworld"){const e=it.topY(n,t);return e>0?e+1:null}for(let e=Math.min(he-6,Math.floor(N.pos.y)+12);e>4;e--)if(it.isSolid(n,e-1,t)&&!xn[it.getBlock(n,e-1,t)]&&!it.isSolid(n,e,t)&&!it.isSolid(n,e+1,t)&&!xn[it.getBlock(n,e,t)])return e;return null}function Ou(n){const t=N.lookDir(),e=Math.hypot(t.x,t.z)||1;for(let i=6;i<=10;i+=2){const s=Math.floor(N.pos.x+t.x/e*i),o=Math.floor(N.pos.z+t.z/e*i),r=xc(s,o);if(r!==null){Ge.add(n,s+.5,ho[n].fly?r+4:r,o+.5);return}}Ge.add(n,N.pos.x+3,N.pos.y+1,N.pos.z)}function J_(){fe&&(fe.dispose(),fe=null),Ye=null,Xt.boss=!1,is=0,nt("bossbar").classList.add("hidden"),ct.toast("Jefe descartado")}function ss(n){Dt==="play"&&(Dt="panel",on=n,N.keys.clear(),Ve.left=Ve.right=!1,document.exitPointerLock(),nt(n).classList.remove("hidden"),n==="summon"?Q_():n==="trade"?zu():n==="padcfg"?js():tM())}function ys(n){on&&(nt(on).classList.add("hidden"),on=null,n?(Dt="play",xo()):(Dt="pause",Ii("pause")))}function Q_(){nt("bossCards").innerHTML=p_.map(n=>{const t=ws[n],e=ni.bosses.has(n);return`<div class="card" style="border-left:6px solid ${t.color}"><h4><span>${t.icon} ${t.name}</span><span class="tag">${t.hp} HP</span></h4><p>${t.desc}</p><button class="btn" data-boss="${n}">${e?"✔ ":""}Invocar</button></div>`}).join(""),nt("mobBtns").innerHTML=Object.keys(ho).map(n=>`<button class="btn" data-mob="${n}">${ho[n].name}</button>`).join("")}const Uu=[{give:[[T.COAL,12]],get:[T.IRON,2]},{give:[[T.IRON,6]],get:[T.GOLD,3]},{give:[[T.GOLD,6]],get:[T.DIAMOND,1]},{give:[[T.GOLD,2]],get:[T.DONUT,3]},{give:[[T.DIAMOND,2]],get:[T.SENZU,1]},{give:[[T.DIAMOND,3]],get:[T.EYE,2]},{give:[[T.IRON,24]],get:[$o(1,2),1]},{give:[[T.DIAMOND,24]],get:[$o(1,3),1]},{give:[[T.DIAMOND,5],[T.GOLD,10]],get:[T.NETHERITE,1]},{give:[[T.DIAMOND,30]],get:[T.ELYTRA,1]},{give:[[T.DIAMOND,12],[T.STAR,1]],get:[T.DBALL,1]},{give:[[T.DIAMOND,1]],get:[_.TORCH,32]}];function zu(){nt("tradeInfo").textContent=oe==="creative"?"(creativo: gratis)":"",nt("tradeList").innerHTML=Uu.map((n,t)=>{const e=oe==="creative"||n.give.every(([i,s])=>Pt.count(i)>=s);return`<div class="card"><h4><span>${lo(n.get[0]).name} ×${n.get[1]}</span></h4><p>Precio: ${n.give.map(([i,s])=>s+"× "+lo(i).name).join(" + ")}</p><button class="btn" data-trade="${t}" ${e?"":'disabled style="opacity:.5"'}>Comprar</button></div>`}).join("")}nt("tradeList").addEventListener("click",n=>{const t=n.target.closest("[data-trade]");if(!t||Dt!=="panel")return;const e=Uu[+t.dataset.trade];if(oe!=="creative"){if(!e.give.every(([s,o])=>Pt.count(s)>=o))return;for(const[s,o]of e.give)Pt.take(s,o)}const i=Pt.add(e.get[0],e.get[1]);i&&ui.spawn(N.pos.x,N.pos.y+1,N.pos.z,e.get[0],i),me("craft"),ct.renderHotbar(),zu()});function tM(){nt("questTitle").textContent=`Misiones — ${ni.completed()}/${ni.total()} completadas`;let n="",t="";for(const e of Ys){e.group!==t&&(t=e.group,n+=`<div class="grp">${t.toUpperCase()}</div>`);const i=ni.done[e.id],s=ni.progress[e.id]||0,o=e.reward.map(([r,l])=>`${l}× ${lo(r).name}`).join(", ");n+=`<div class="q ${i?"done":""}"><span class="ck">${i?"✔":"○"}</span><div><b>${e.title}</b>${e.desc}<div class="bar"><i style="width:${s/e.n*100}%"></i></div></div><div class="rw">${s}/${e.n}<br>${o}<br>+${e.xp} XP</div></div>`}nt("questList").innerHTML=n}nt("bossCards").addEventListener("click",n=>{const t=n.target.closest("[data-boss]");t&&Dt==="panel"&&(ys(!0),gc(t.dataset.boss))});nt("mobBtns").addEventListener("click",n=>{const t=n.target.closest("[data-mob]");t&&Dt==="panel"&&(Ou(t.dataset.mob),ct.toast(ho[t.dataset.mob].name+" invocado"))});nt("bDespawn").onclick=()=>{J_()};nt("dimBtns").addEventListener("click",n=>{const t=n.target.closest("[data-dim]");t&&Dt==="panel"&&(ys(!0),Oa(t.dataset.dim))});const ke=nt("minimap").getContext("2d"),ud=ke.createImageData(64,64),Fu={};for(const n of Object.values(qe)){const t=ou(n.tiles[0]);Fu[n.id]=[t[0]*255,t[1]*255,t[2]*255]}function eM(){const n=Math.floor(N.pos.x),t=Math.floor(N.pos.z),e=ud.data;for(let s=0;s<64;s++)for(let o=0;o<64;o++){const r=n+o-32,l=t+s-32,a=(s*64+o)*4;let h=it.topY(r,l);if(se!=="overworld"&&h>=0)for(h=Math.min(he-3,Math.floor(N.pos.y)+6);h>0&&!it.isSolid(r,h,l)&&it.getBlock(r,h,l)!==_.LAVA;)h--;let f;if(h<0)f=[20,20,30];else if(se==="overworld"&&h<ii&&it.getBlock(r,ii,l)===_.WATER)f=[38+h,84+h,190];else{const c=Fu[it.getBlock(r,h,l)]||[90,90,90],d=Math.max(.6,Math.min(1.25,.9+(h-N.pos.y)*.012));f=[c[0]*d,c[1]*d,c[2]*d]}e[a]=f[0],e[a+1]=f[1],e[a+2]=f[2],e[a+3]=255}ke.putImageData(ud,0,0),ke.imageSmoothingEnabled=!1,ke.drawImage(nt("minimap"),0,0,64,64,0,0,128,128);const i=(s,o,r,l)=>{const a=(s-n+32)*2,h=(o-t+32)*2;a<2||h<2||a>126||h>126||(ke.fillStyle=r,ke.fillRect(a-l,h-l,l*2,l*2))};for(const s of Ge.list)i(s.pos.x,s.pos.z,s.def.hostile?"#ff4040":"#ffffff",1.5);if(fe){const s=3+Math.sin(performance.now()/150)*1.2,o=fe.pos.x,r=fe.pos.z,l=Math.max(6,Math.min(122,(o-n+32)*2)),a=Math.max(6,Math.min(122,(r-t+32)*2));ke.fillStyle="#d050ff",ke.fillRect(l-s,a-s,s*2,s*2),ke.strokeStyle="#fff",ke.strokeRect(l-s,a-s,s*2,s*2)}ke.save(),ke.translate(64+(N.pos.x-n)*2,64+(N.pos.z-t)*2),ke.rotate(-N.yaw+Math.PI),ke.fillStyle="#fff",ke.strokeStyle="#000",ke.beginPath(),ke.moveTo(0,6),ke.lineTo(4.5,-4.5),ke.lineTo(0,-2),ke.lineTo(-4.5,-4.5),ke.closePath(),ke.fill(),ke.stroke(),ke.restore()}function iM(){nt("tracker").innerHTML=ni.active(3).map(n=>`<div class="qt"><b>${n.title}</b>${n.desc} (${ni.progress[n.id]||0}/${n.n})<div class="qb"><i style="width:${(ni.progress[n.id]||0)/n.n*100}%"></i></div></div>`).join("")}let An="normal",un={count:0};function zh(n,t){const e=new Se;e.visible=!1,Ze.add(e);const i=new Fv(e,ts,n==="overworld"?Un:n==="nether"?Un+500:Un+900,t||new Map,n);return i.group=e,i.kind=An,i}function nM(n,t,e,i=3){return new Promise(s=>{const o=()=>{n.update(t,e,i,12)>0?setTimeout(o,0):s()};o()})}function ku(n,t,e){for(const i of[0,2]){const s=i===0?[1,0,0]:[0,0,1],o=(d,u)=>it.getBlock(n+s[0]*d,t+u,e+s[2]*d);let r=0;for(;r>-22&&o(0,r-1)===ne;)r--;if(o(0,r-1)!==_.OBSIDIAN)continue;let l=0;for(;l<22&&o(0,l+1)===ne;)l++;if(o(0,l+1)!==_.OBSIDIAN)continue;let a=0;for(;a>-22&&o(a-1,0)===ne;)a--;if(o(a-1,0)!==_.OBSIDIAN)continue;let h=0;for(;h<22&&o(h+1,0)===ne;)h++;if(o(h+1,0)!==_.OBSIDIAN||l-r+1<3||h-a+1<2)continue;let f=!0;for(let d=a;d<=h&&f;d++)for(let u=r;u<=l;u++)if(o(d,u)!==ne){f=!1;break}for(let d=a;d<=h&&f;d++)(o(d,r-1)!==_.OBSIDIAN||o(d,l+1)!==_.OBSIDIAN)&&(f=!1);for(let d=r;d<=l&&f;d++)(o(a-1,d)!==_.OBSIDIAN||o(h+1,d)!==_.OBSIDIAN)&&(f=!1);if(!f)continue;const c=[];for(let d=a;d<=h;d++)for(let u=r;u<=l;u++)c.push([n+s[0]*d,t+u,e+s[2]*d]);return c}return null}function vc(n){const t=[],e=Math.random,i=(o,r,l,a=1)=>{e()<a&&t.push([o,r+Math.floor(e()*(l-r+1))])},s=(o,r)=>{e()<r&&t.push([$o(Math.floor(e()*4),o[Math.floor(e()*o.length)]),1])};return e()<.07&&t.push([T.DBALL,1]),se==="nether"?(i(T.GOLD,2,8),i(T.IRON,1,5,.7),i(T.DIAMOND,1,2,.3),i(_.OBSIDIAN,2,4,.4),i(T.COAL,3,8,.6),i(T.EYE,1,1,.15),i(T.COOKED_PORK,2,4,.4),s([1,2],.5),e()<.12&&t.push([T.SCRAP,1])):se==="end"?(s([2,3],.55),i(T.DIAMOND,2,6,.7),i(T.GOLD,3,9),i(T.IRON,2,6,.8),i(T.PEARL,1,3,.5),i(T.EYE,1,2,.3),i(_.PURPUR,6,16,.7),it.getBlock(n.x,n.y-1,n.z)===_.END_BRICKS?t.push([T.ELYTRA,1]):i(T.ELYTRA,1,1,.06)):(i(T.GOLD,1,4),i(T.IRON,1,4),i(T.COAL,2,6),s([0,1,2],.4),i(T.DONUT,1,3,.3),i(_.GOLD_BLOCK,1,1,.1)),t}const oa=[];function sM(){if(Pt.count(T.DBALL)<7){ct.toast("Necesitas las 7 esferas del dragón ("+Pt.count(T.DBALL)+"/7)");return}Pt.take(T.DBALL,7),me("roar"),me("thunder");for(let r=0;r<3;r++)setTimeout(()=>Xt.strike(N,!1,{x:N.pos.x+(Math.random()-.5)*20,z:N.pos.z+(Math.random()-.5)*20}),r*500);const n=new Se,t=new re({color:3983440}),e=new re({color:15261792}),i=[];for(let r=0;r<34;r++){const l=new Mt(new Yt(1.5-r*.025,1.5-r*.025,1.5-r*.025),r%3?t:e);n.add(l),i.push(l)}const s=new Mt(new Yt(3,2.2,3.4),t),o=new re({color:16719904});for(const r of[-.9,.9]){const l=new Mt(new Yt(.5,.4,.3),o);l.position.set(r,.4,1.7),s.add(l);const a=new Mt(new Yt(.3,1.8,.3),t);a.position.set(r*1.2,1.6,-.4),s.add(a)}n.add(s),Ze.add(n),oa.push({g:n,segs:i,head:s,t:0,life:8,x:N.pos.x,y:N.pos.y,z:N.pos.z}),ct.toast("¡Sal, Shenlong! Pide tu deseo…"),setTimeout(()=>{Pt.add(T.DIAMOND,32),Pt.add(T.SENZU,5),Pt.add(T.NETHERITE,4),Pt.add(T.ELYTRA,1),N.hp=20,N.food=20,_s(250),ct.renderHotbar(),ct.toast("¡Deseo concedido! Vida completa, 32 diamantes, 4 netherita, élitros y 5 semillas")},3500)}function oM(n){for(let t=oa.length-1;t>=0;t--){const e=oa[t];e.t+=n;const i=Math.min(1,e.t/2)*Math.min(1,(e.life-e.t)/2);e.segs.forEach((r,l)=>{const a=e.t*.9+l*.32,h=4+l*.12;r.position.set(e.x+Math.cos(a)*h,e.y+l*1.1*i-2,e.z+Math.sin(a)*h)});const s=e.segs.length-1,o=e.t*.9+s*.32;e.head.position.set(e.x+Math.cos(o)*(4+s*.12),e.y+(s+1.5)*1.1*i-2,e.z+Math.sin(o)*(4+s*.12)),e.head.rotation.y=-o+Math.PI,e.g.visible=i>.02,e.t>=e.life&&(Ze.remove(e.g),oa.splice(t,1))}}function Bu(n){it.setBlock(n.x,n.y,n.z,_.CHEST_OPEN),me("craft");for(const[t,e]of vc(n))ui.spawn(n.x+.5,n.y+1,n.z+.5,t,e);Si.burst(n.x+.5,n.y+1,n.z+.5,[1,.85,.3],14,4),ct.toast("¡Cofre abierto!"),ni.event("chest","x")}function Hu(n){if(se==="end")return ct.toast("El fuego no prende aquí"),!1;const t=n.x+n.normal[0],e=n.y+n.normal[1],i=n.z+n.normal[2],s=it.getBlock(t,e,i)===ne?ku(t,e,i):null;if(!s)return ct.toast("Marco de obsidiana no válido (mínimo 2x3 interior)"),!1;for(const[o,r,l]of s)it.setBlock(o,r,l,_.NETHER_PORTAL);if(me("hiss"),me("craft"),ct.toast("¡El portal del Nether se activa!"),oe==="survival"){const o=Pt.held();o.d=(o.d||0)+1,o.d>=64&&(Pt.slots[Pt.selected]=null),ct.renderHotbar()}return!0}function rM(n,t,e){const i=[[n,t,e]],s=new Set;for(;i.length;){const[o,r,l]=i.pop();for(const[a,h,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const c=o+a,d=r+h,u=l+f,p=c+","+d+","+u;s.has(p)||(s.add(p),it.getBlock(c,d,u)===_.NETHER_PORTAL&&(it.setBlock(c,d,u,ne),i.push([c,d,u])))}}}function Gu(n){const t=Pt.held();if(!t||t.id!==T.EYE){ct.toast("Necesitas un Ojo de Ender");return}it.setBlock(n.x,n.y,n.z,_.END_FRAME_EYE),me("place"),oe==="survival"&&(Pt.consumeHeld(1),ct.renderHotbar());const e=[];for(let i=-2;i<=2;i++)for(let s=-2;s<=2;s++)Math.max(Math.abs(i),Math.abs(s))===2&&!(Math.abs(i)===2&&Math.abs(s)===2)&&e.push([i,s]);for(const[i,s]of e){const o=n.x-i,r=n.z-s;if(e.every(([l,a])=>it.getBlock(o+l,n.y,r+a)===_.END_FRAME_EYE)){for(let l=-1;l<=1;l++)for(let a=-1;a<=1;a++)it.setBlock(o+l,n.y,r+a,_.END_PORTAL);me("roar"),ct.toast("¡El portal del End se abre!");return}}}function Vu(n,t,e){for(let i=n-2;i<=n+5;i++)for(let s=e-2;s<=e+4;s++){const o=it.getBlock(i,t,s);(o===ne||xn[o]||!jo[o])&&it.setBlock(i,t,s,_.OBSIDIAN);for(let r=t+1;r<=t+6;r++)it.getBlock(i,r,s)!==ne&&it.setBlock(i,r,s,ne)}for(let i=0;i<4;i++)for(let s=0;s<5;s++){const o=(i===0||i===3)&&(s===0||s===4),r=i===0||i===3||s===0||s===4;o||it.setBlock(n+i,t+s,e,r?_.OBSIDIAN:_.NETHER_PORTAL)}it.setBlock(n-1,t+1,e+2,_.TORCH),it.setBlock(n+4,t+1,e+2,_.TORCH)}function aM(n,t){let e=null,i=1e9;const s=se==="nether"?20:2,o=se==="nether"?he-6:he-2;for(let r=n-24;r<=n+24;r++)for(let l=t-24;l<=t+24;l++)if(it.chunks.has((Math.floor(r/16)+32768)*65536+(Math.floor(l/16)+32768))){for(let a=s;a<=o;a++)if(it.getBlock(r,a,l)===_.NETHER_PORTAL){const h=Math.hypot(r-n,l-t);h<i&&(i=h,e=[r,a,l])}}return e}function lM(n){const[t,e,i]=n;let s=e;for(;it.getBlock(t,s-1,i)===_.NETHER_PORTAL;)s--;for(const[o,r]of[[0,2],[0,-2],[2,0],[-2,0],[0,1],[0,-1],[1,0],[-1,0],[2,2],[-2,-2]]){const l=t+o,a=i+r;for(const h of[s,s+1,s-1])if(it.isSolid(l,h-1,a)&&!it.isSolid(l,h,a)&&!it.isSolid(l,h+1,a)&&!xn[it.getBlock(l,h,a)]&&it.getBlock(l,h,a)!==_.NETHER_PORTAL)return new I(l+.5,h,a+.5)}return new I(t+.5,s+1,i+2.5)}function hM(){const n=it.topY(0,0);if(!(n<0)){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){const i=Math.max(Math.abs(t),Math.abs(e))===2;i&&Math.abs(t)===2&&Math.abs(e)===2||it.setBlock(t,n+1,e,i?_.BEDROCK:_.END_PORTAL)}for(const[t,e]of[[-2,0],[2,0],[0,-2],[0,2]])it.setBlock(t,n+2,e,_.TORCH);ct.toast("Se abre el portal de salida en el centro de la isla")}}async function Oa(n,t={}){if(!it||Dt==="loading"||n===se&&!t.force)return;const e=se;Dt="loading",N.keys.clear(),Ve.left=Ve.right=!1,nt("travelTxt").textContent="Viajando a "+Nh[n]+"…",nt("travel").classList.remove("hidden"),await new Promise(r=>setTimeout(r,40)),fe&&(fe.dispose(),fe=null,Xt.boss=!1,is=0,nt("bossbar").classList.add("hidden")),Ye=null,Ge.clear(),ui.clear();let i,s;t.arrive?(i=Math.floor(t.arrive.x),s=Math.floor(t.arrive.z)):n==="end"?(i=0,s=30):n==="nether"?(i=Math.floor(N.pos.x/8),s=Math.floor(N.pos.z/8)):e==="nether"?(i=Math.floor(N.pos.x*8),s=Math.floor(N.pos.z*8)):(i=Math.floor(N.spawn.x),s=Math.floor(N.spawn.z)),en[n]||(en[n]=zh(n,n==="nether"?ba.nether:n==="end"?ba.end:new Map)),it.group.visible=!1,it=en[n],it.group.visible=!0,se=n,N.world=it,ui.world=it,Si.world=it,Ge.world=it,Ge.dim=n,Pi.setDimension(n),is=0,await nM(it,i,s,3);let o;if(n==="end"){const r=it.topY(i,s);o=new I(.5,(r>0?r:64)+1,30.5)}else if(t.respawn)o=pc(i,s);else{const r=aM(i,s);if(r)o=lM(r);else{let l;if(n==="overworld"){const a=it.topY(i,s);l=Math.max(a>0?a:ii,ii)}else{l=64;for(let a=100;a>36;a--){const h=it.getBlock(i,a,s);if(it.isSolid(i,a,s)&&h!==_.LAVA&&!it.isSolid(i,a+1,s)&&!it.isSolid(i,a+2,s)&&!xn[it.getBlock(i,a+1,s)]){l=a;break}}}Vu(i,l,s),o=new I(i+1.5,l+1,s+2.5)}}N.pos.copy(o),N.vel.set(0,0,0),N.fallStart=null,N.yaw=Math.PI,Dt="play",nt("travel").classList.add("hidden"),Vo=3,jn=0,ct.toast("Has llegado a "+Nh[n]),ni.event("dim",n),n==="end"&&!Sa&&!ni.bosses.has("dragon")&&(Sa=!0,setTimeout(()=>{se==="end"&&!fe&&tr("dragon",.5,100,.5,{cx:0,cy:64,cz:0,pillars:cc()})},1500)),to=!0}function cM(n){Vo=Math.max(0,Vo-n);const t=Math.floor(N.pos.x),e=Math.floor(N.pos.z),i=it.getBlock(t,Math.floor(N.pos.y+.2),e),s=it.getBlock(t,Math.floor(N.pos.y+1.2),e),o=i===_.NETHER_PORTAL||s===_.NETHER_PORTAL?"nether":i===_.END_PORTAL||s===_.END_PORTAL?"end":null,r=oe==="creative"?.6:3;o&&Vo<=0&&Dt==="play"?(jn+=n,jn>=r&&(jn=0,Oa(o==="nether"?se==="nether"?"overworld":"nether":se==="end"?"overworld":"end"))):jn=Math.max(0,jn-n*2);const l=nt("portalfx");l.style.opacity=Math.min(1,jn/r)*.9,l.style.background=o==="end"?"radial-gradient(ellipse at center, rgba(20,60,70,.5), rgba(2,10,14,.95))":""}function fM(n,t,e){Ye={x:n,y:t,z:e,t:5,s:0},me("roar"),Xt.set("storm"),Xt.boss=!0,ct.toast("El bloque de comandos late… ¡aléjate!")}function dM(n){if(Ye.t-=n,Ye.s-=n,Xt.timer=9999,Ye.s<=0&&(Ye.s=.9,Xt.strike(N,!1,{x:Ye.x,z:Ye.z}),Si.burst(Ye.x+.5,Ye.y+1,Ye.z+.5,[.7,.3,1],20,5)),Ye.t<=0){const t=Ye;Ye=null,it.setBlock(t.x,t.y,t.z,ne),tr("storm",t.x+.5,t.y+14,t.z+.5),me("roar"),ct.toast("¡LA TORMENTA WITHER HA DESPERTADO!")}}function uM(){const n=N.eye,t=N.lookDir(),e=fe&&fe.raycast(n,t,7),i=it.raycast(n,t,7);if(e&&(!i||e.dist<i.dist)){const a=Ss(Pt.held());return fe.hit(oe==="creative"?12:a?a.dmg:1,e.crit,e),me("hit"),e.crit&&ct.toast("¡Golpe crítico al bloque de comandos!"),oe==="survival"&&a&&(Pt.wearHeld(1),ct.renderHotbar()),!0}const s=Ge.raycast(n,t,3.6),o=it.raycast(n,t,3.6);if(!s||o&&o.dist<s.dist)return!1;const r=Ss(Pt.held()),l=oe==="creative"?20:r?r.dmg:1;return Ge.damage(s.mob,l,N.pos.x,N.pos.z),Si.burst(s.mob.pos.x,s.mob.pos.y+s.mob.h*.6,s.mob.pos.z,[.8,.1,.1],6,2.5),oe==="survival"&&r&&(Pt.wearHeld(1),ct.renderHotbar()),!0}function pM(n){const t=N.eye,e=N.lookDir(),i=it.raycast(t,e,oe==="creative"?7:5.5);_a.visible=!!i,i&&_a.position.set(i.x+.5,i.y+.5,i.z+.5),qr=Math.max(0,qr-n),No=Math.max(0,No-n),Ea=Math.max(0,Ea-n);let s=0;if(Ve.left&&i){const o=i.x+","+i.y+","+i.z;if(o!==Xi.key&&(Xi.key=o,Xi.progress=0),Bi=Bi>0?Bi:.001,oe==="creative")qr<=0&&(Uh(i),qr=.2);else{const r=Ev(i.id,Pt.held())*(N.effects.fatigue>0?3:1);Xi.progress+=n/r,s=Math.min(1,Xi.progress),Math.floor(Xi.progress*6)!==Math.floor((Xi.progress-n/r)*6)&&me("hit"),Xi.progress>=1&&(Uh(i),Xi.key="",Xi.progress=0,s=0)}Ho.position.set(i.x+.5,i.y+.5,i.z+.5)}else Xi.key="",Xi.progress=0;Ho.visible=s>0,s>0&&(Ho.material.map=Lu[Math.min(9,Math.floor(s*10))]),nt("breakbar").classList.toggle("hidden",s<=0),nt("breakbar").firstElementChild.style.width=s*100+"%",Ve.right&&No<=0&&(No=.22,mc())}function mM(n){for(const t of mn.values()){const[e,i,s]=t.slots,o=e&&yv[e.id],r=o&&(!s||s.id===o[0]&&s.n+o[1]<=Tn(o[0]));t.burn>0&&(t.burn-=n),r?(t.burn<=0&&i&&Gf[i.id]&&(t.burn=t.burnMax=Gf[i.id],i.n--,i.n<=0&&(t.slots[1]=null)),t.burn>0?(t.cook+=n,t.cook>=fu&&(t.cook=0,e.n--,e.n<=0&&(t.slots[0]=null),s?s.n+=o[1]:t.slots[2]={id:o[0],n:o[1],d:0})):t.cook=Math.max(0,t.cook-n*2)):t.cook=0}}function Ta(n){qi=n,be.cam=n,Zn(),nt("bCam").textContent="Cámara: "+va[n],ct&&ct.toast("Cámara: "+va[n])}function gM(){if(N.dead){dn.group.visible=!1;return}if(dn.group.visible=qi!==0,Jo.visible=qi===0,qi===0)return;const n=N.eye,t=N.lookDir().multiplyScalar(qi===1?-1:1),e=it.raycast(n,t,4.2),i=e?Math.max(.3,e.dist-.3):4.2;hi.position.copy(n).addScaledVector(t,i),qi===1?hi.rotation.set(N.pitch,N.yaw,0,"YXZ"):hi.rotation.set(-N.pitch,N.yaw+Math.PI,0,"YXZ")}function Wu(n){const t=Pt.held(),e=t?t.id:0;dn.setHeld(e),e!==fd&&(fd=e,e&&(Lh.map=hc(e),Lh.needsUpdate=!0),Ma.visible=!!e,Go.visible=!e,Ma.scale.setScalar(du(e)?.7:.6)),Bi>0&&(Bi+=n*3.5,Bi>=1&&(Bi=Ve.left?.001:0));const i=Math.sin(Math.min(1,Bi)*Math.PI);Jo.position.set(.5-i*.12,-.5+i*.08-Math.sin(performance.now()/400)*.004,-.85-i*.1),Jo.rotation.set(-i*.9,-.35,-i*.2),e||(Go.position.set(0,-.1,-.1),Go.rotation.set(.4,0,0))}function Aa(n,t=null){Dt==="play"&&(Dt="inv",N.keys.clear(),Ve.left=Ve.right=!1,document.exitPointerLock(),ct.open(n,t))}function pd(n){ct.close(),n?(Dt="play",xo()):(Dt="pause",Ii("pause"))}function er(){ct.renderHotbar();const n=Pt.held();n&&ct.toast(lo(n.id).name)}function xM(){is=0,fe&&(fe.dispose(),fe=null,Xt.boss=!1,Xt.set("rain"),nt("bossbar").classList.add("hidden"),ct.toast("La tormenta se retira…")),Ye=null,Dt="dead",me("die"),N.keys.clear(),Ve.left=Ve.right=!1;for(let n=0;n<36;n++){const t=Pt.slots[n];t&&(ui.spawn(N.pos.x,N.pos.y+1,N.pos.z,t.id,t.n),Pt.slots[n]=null)}ct.renderHotbar(),document.exitPointerLock(),Ii("death")}async function Ts(){if(!it||!ya)return!1;const n={v:3,gen:2,dim:se,seed:Un,mode:oe,time:Pi.time,pos:N.pos.toArray(),yaw:N.yaw,pitch:N.pitch,kind:An,ob:un,hp:N.hp,food:N.food,spawn:N.spawn.toArray(),inv:Pt.toJSON(),furnaces:[...mn.entries()],weather:Xt.toJSON(),quests:ni.toJSON(),xp:{l:sn,p:es}},t=[];for(const[i,s]of Object.entries(en))for(const o of s.unsaved)s.chunks.has(o)&&t.push([i==="overworld"?o:(i==="nether"?"n:":"e:")+o,new Uint8Array(s.chunks.get(o))]);const e=await bu(ya,n,t,{name:fc,mode:oe,seed:Un,created:Du,played:Math.floor(dc),level:sn,thumb:uc});if(e)for(const i of Object.values(en))i.unsaved.clear();return e}function vM(){try{const n=document.createElement("canvas");n.width=160,n.height=90,n.getContext("2d").drawImage(Fn,0,0,160,90),uc=n.toDataURL("image/jpeg",.6)}catch{}}async function _M(){to=!0,await new Promise(t=>setTimeout(t,120));const n=await Ts();return ct.toast(n?"💾 Partida guardada":"⚠ No se pudo guardar"),n}async function md({id:n,name:t,seed:e,mode:i,saved:s,meta:o,created:r,played:l,nether:a,end:h,kind:f}){Dt="loading",oe=i,Un=e,An=f||o&&o.kind||"normal",un={count:o&&o.ob&&o.ob.count||0},nt("ob").classList.toggle("hidden",An!=="oneblock"),ya=n,fc=t||"Mundo",Du=r||Date.now(),dc=l||0,uc=null,Ii("menu"),nt("msg").textContent="Generando mundo…",nt("menuBody").classList.add("hidden"),mn.clear();for(const u of Object.values(en))Ze.remove(u.group);en={},ba={nether:a||new Map,end:h||new Map},Sa=!1,jn=0,Vo=0,se=o&&o.dim||"overworld",en.overworld=zh("overworld",s),se!=="overworld"&&(en[se]=zh(se,ba[se])),it=en[se],it.group.visible=!0,Pt=new S_,N=new b_(it,hi),N.mode=oe,dn||(dn=new Iv(Ze)),Pi=new P_(Ze,hi,ts),Pi.setDimension(se),Ih||(Ih=new g_(Ze)),Ru(),Xt=new Ov(Ze,{world:()=>it,sky:()=>Pi,sound:(u,p)=>Rh(u,p),burst:(u,p,x)=>{Si.burst(u,p,x,[1,1,.8],24,6),Si.burst(u,p,x,[.3,.3,.35],14,4)},hurtPlayer:u=>N.damage(u),strikeMobs:(u,p)=>{for(const x of[...Ge.list])Math.hypot(x.pos.x-u,x.pos.z-p)<3.5&&Ge.damage(x,12,u,p)}}),Dh={world:()=>it,explode:(u,p,x,m,g)=>Il(u,p,x,m,g),toast:u=>ct.toast(u),sound:(u,p)=>Rh(u,p),burst:(u,p,x,m,g,M)=>Si.burst(u,p,x,m,g,M),hurtPlayer:(u,p,x)=>N.damage(u,p,x),strikeNear:(u,p)=>Xt.strike(N,!1,{x:u,z:p}),minions:()=>Ge.list.filter(u=>u.def.hostile).length,effect:(u,p)=>{oe==="survival"&&(N.effects[u]=Math.max(N.effects[u],p))},darkness:u=>{is=u},player:()=>N,spawnMinion:u=>{for(let p=0;p<6;p++){const x=Math.random()*Math.PI*2,m=10+Math.random()*8,g=Math.floor(N.pos.x+Math.cos(x)*m),M=Math.floor(N.pos.z+Math.sin(x)*m),S=xc(g,M);if(S!==null){const v=u||(se==="nether"?"piglin":se==="end"?"endermite":Math.random()<.6?"zombie":"creeper");Ge.add(v,g+.5,ho[v].fly?S+4:S,M+.5);return}}},loot:(u,p,x,m="storm")=>{for(const[g,M]of hd[m]||hd.storm)ui.spawn(u,p,x,g,M)},done:()=>{const u=fe?fe.type:"storm";ni.event("boss",u),_s(100),me("craft"),u==="dragon"&&se==="end"&&setTimeout(hM,1200),fe=null,Xt.boss=!1,is=0,Xt.state==="storm"&&Xt.set("rain"),nt("bossbar").classList.add("hidden")}},fe=null,Ye=null,on=null,is=0,ni=new m_({reward:u=>{for(const[p,x]of u){const m=Pt.add(p,x);m&&Oh(p,m)}ct.renderHotbar()},toast:u=>ct.toast(u),xp:_s,sound:me}),ui=new Uv(Ze,it),Si=new zv(Ze,it),Ge=new Hv(Ze,it,{effect:(u,p)=>{oe==="survival"&&(N.effects[u]=Math.max(N.effects[u]||0,p))},killed:(u,p)=>{ni.event("kill",u),_s(p)},tp:(u,p,x)=>{Si.burst(u,p,x,[.7,.2,1],14,3),me("pop")},hurtPlayer:(u,p,x)=>N.damage(u,p,x),explode:Il,drop:(u,p,x,m,g)=>ui.spawn(u,p,x,m,g),sound:me,puff:(u,p,x)=>Si.burst(u,p,x,[.9,.9,.9],12,3)}),ct=new N_({inv:Pt,player:N,getMode:()=>oe,dropItem:Oh,sound:me,onSelect:er,onCraft:(u,p)=>ni.event("craft",u,p),onArmorChange:()=>dn&&dn.setArmor(Pt.armor)}),sn=0,es=0,N.events.onHurt=()=>{me("hurt");const u=nt("vignette");u.classList.add("hurt"),setTimeout(()=>u.classList.remove("hurt"),120)},N.events.onStep=()=>me("step"),N.events.onLand=u=>me(u>3?"hurt":"place"),N.events.onSplash=()=>me("splash"),N.events.onDeath=xM,N.events.onArmor=()=>{Pt.wearArmor(1).length&&ct.toast("¡Se ha roto una pieza de tu armadura!"),ct.isOpen&&ct.render()},N.events.onVoid=()=>{if(An==="oneblock"&&se==="overworld")N.pos.set(.5,65.01,.5),N.vel.set(0,0,0),oe==="survival"&&N.damage(3),ct.toast("Volviste al bloque…");else if(se==="end"){N.damage(6);const u=it.topY(0,30);N.pos.set(.5,(u>0?u:64)+1,30.5),N.vel.set(0,0,0),ct.toast("Caíste al vacío…")}else N.pos.y=70,N.vel.set(0,0,0),N.damage(4)},Ge.dim=se;let c,d;if(o?(Xt.load(o.weather),ni.load(o.quests),o.xp&&(sn=o.xp.l,es=o.xp.p),Pt.load(o.inv),(o.furnaces||[]).forEach(([u,p])=>mn.set(u,p)),Pi.time=o.time,N.hp=o.hp,N.food=o.food,N.yaw=o.yaw,N.pitch=o.pitch,N.spawn.fromArray(o.spawn),N.pos.fromArray(o.pos),c=Math.floor(o.pos[0]),d=Math.floor(o.pos[2])):An==="oneblock"?(c=0,d=0,N.pos.set(.5,66,.5)):([c,d]=q_(Un),N.pos.set(c+.5,70,d+.5)),await new Promise(u=>{const p=()=>{const x=it.update(c,d,3,10);nt("msg").textContent="Generando mundo… "+Math.max(0,100-x*2)+"%",x>0?setTimeout(p,0):u()};p()}),An==="oneblock"&&(K_(),o||(N.pos.set(.5,65.01,.5),N.spawn.copy(N.pos)),Nu()),!o&&An!=="oneblock"){const u=pc(c,d);N.pos.copy(u),N.spawn.copy(u)}else N.vel.set(0,0,0);ct.renderHotbar(),ct.renderStats(),Wu(0),Ta(qi),window.__game={get world(){return it},player:N,inv:Pt,sky:Pi,mobs:Ge,drops:ui,ui:ct,camera:hi,scene:Ze,renderer:_i,get mode(){return oe},set mode(u){oe=u,N.mode=u},get state(){return Dt},set state(u){Dt=u},explode:Il,saveGame:Ts,openInventory:Aa,mouse:Ve,useItem:mc,breakBlock:Uh,furnaces:mn,setCam:Ta,get weather(){return Xt},get boss(){return fe},summon:(u,p,x)=>tr("storm",u,p,x),summonBoss:gc,summonMob:Ou,get quests(){return ni},materials:ts,renderer:_i,get composer(){return Li},changeDimension:Oa,get dim(){return se},get dims(){return en},lightPortal:Hu,findPortalFrame:ku,useEyeOnFrame:Gu,buildNetherPortal:Vu,openPanel:ss,closePanel:ys,addXp:_s,terrainInfo:Rn,openChest:Bu,rollLoot:vc,get xp(){return[sn,es]}},Dt="play",Ii(null),xo(),setTimeout(()=>{document.pointerLockElement!==Fn&&Dt==="play"&&!ns&&(Dt="pause",Ii("pause"))},1500)}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Fn?(Dt==="pause"||Dt==="play")&&(Dt="play",Ii(null)):(N&&N.keys.clear(),Ve.left=Ve.right=!1,Dt==="play"&&!ns&&(Dt="pause",Ii("pause")))});document.addEventListener("mousemove",n=>{Dt!=="play"||document.pointerLockElement!==Fn||(N.yaw-=n.movementX*.0022*be.sens,N.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,N.pitch-n.movementY*.0022*be.sens)))});document.addEventListener("keydown",n=>{if(n.isTrusted&&(ns=!1),co(),Dt==="panel"){n.code==="Escape"?ys(!1):n.code==="KeyB"&&on==="summon"||n.code==="KeyM"&&on==="quests"?ys(!0):n.code==="KeyP"&&on==="padcfg"&&ys(!1);return}if(Dt==="inv"){n.code==="KeyE"?(n.preventDefault(),pd(!0)):n.code==="Escape"&&pd(!1);return}if(Dt==="play"){if(n.code.startsWith("Digit")){const t=+n.code.slice(5)-1;t>=0&&t<9&&(Pt.selected=t,er());return}switch(n.code){case"KeyE":Aa(2);return;case"KeyB":ss("summon");return;case"KeyP":ss("padcfg");return;case"KeyM":ss("quests");return;case"F3":n.preventDefault(),nt("info").classList.toggle("hidden");return;case"KeyT":if(!n.repeat){const t=Xt.cycle();ct.toast("Clima: "+wh[t])}return;case"KeyV":case"F5":n.preventDefault(),n.repeat||Ta((qi+1)%3);return;case"KeyF":oe==="creative"&&!n.repeat&&(N.flying=!N.flying,N.vel.y=0,ct.toast(N.flying?"Vuelo activado":"Vuelo desactivado"));return;case"KeyG":n.repeat||(oe=oe==="creative"?"survival":"creative",N.mode=oe,oe==="survival"&&(N.flying=!1),ct.renderStats(),ct.toast("Modo "+(oe==="creative"?"creativo":"supervivencia")));return;case"KeyQ":if(oe==="survival"&&!n.repeat){const t=Pt.held();t&&(Oh(t.id,1),Pt.consumeHeld(1),ct.renderHotbar());return}break}(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),N.keys.add(n.code)}});document.addEventListener("keyup",n=>N&&N.keys.delete(n.code));document.addEventListener("wheel",n=>{Dt==="play"&&(Pt.selected=(Pt.selected+Math.sign(n.deltaY)+9)%9,er())});Fn.addEventListener("contextmenu",n=>n.preventDefault());function Xu(){Ve.left=!0,Bi=Bi||.001,Ea<=0&&uM()&&(Ea=.4,Ve.left=!1)}function qu(){Ve.right=!0,No=.22,mc()}document.addEventListener("mousedown",n=>{if(n.isTrusted&&(ns=!1),n.isTrusted&&Dt==="play"&&document.pointerLockElement!==Fn){xo();return}Dt!=="play"||document.pointerLockElement!==Fn||(n.button===0?Xu():n.button===2&&qu())});document.addEventListener("mouseup",n=>{n.button===0&&(Ve.left=!1),n.button===2&&(Ve.right=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&Dt!=="menu"&&Ts()});addEventListener("beforeunload",()=>{it&&Dt!=="menu"&&Ts()});function _c(){_i.setSize(innerWidth,innerHeight,!1),Li&&Li.setSize(innerWidth,innerHeight),hi.aspect=innerWidth/innerHeight,hi.updateProjectionMatrix()}addEventListener("resize",_c);_c();function Mc(){co(),Ii(null),Dt="play",xo()}nt("bResume").onclick=Mc;nt("bPPad").onclick=()=>{Ii(null),Dt="play",ss("padcfg")};nt("bSave").onclick=async()=>{to=!0,await new Promise(n=>setTimeout(n,120)),await Ts(),location.reload()};nt("bSaveNow").onclick=async()=>{await _M(),nt("bSaveNow").textContent="💾 Guardado ✔",setTimeout(()=>nt("bSaveNow").textContent="💾 Guardar partida",1500)};nt("bExport").onclick=async()=>{await Ts();const n=await Eu(ya),t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=fc.replace(/[^\w\-]+/g,"_")+".mcw",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3)};nt("bRespawn").onclick=async()=>{if(co(),Ii(null),se!=="overworld"&&(Dt="play",await Oa("overworld",{respawn:!0})),N.respawn(),se==="overworld"){const n=pc(Math.floor(N.spawn.x),Math.floor(N.spawn.z));N.pos.copy(n)}Dt="play",ct.renderStats(),xo()};nt("bCam").onclick=()=>Ta((qi+1)%3);nt("bQuality").onclick=()=>{be.quality=(be.quality+1)%Ch.length,Zn(),Ru(),ct&&ct.toast("Gráficos: "+Ch[be.quality].name)};nt("bPSummon").onclick=()=>{Ii(null),Dt="play",ss("summon")};nt("bPQuests").onclick=()=>{Ii(null),Dt="play",ss("quests")};const Ua=(n,t,e,i,s)=>{const o=nt(n),r=nt(t);o.value=be[e],r.textContent=i(be[e]),s&&s(be[e]),o.oninput=l=>{be[e]=+l.target.value,r.textContent=i(be[e]),s&&s(be[e]),Zn()}};Ua("rRadius","vRadius","radius",n=>n,n=>sa=n);Ua("rFov","vFov","fov",n=>n);Ua("rSens","vSens","sens",n=>n.toFixed(1));Ua("rVol","vVol","vol",n=>Math.round(n*100),n=>O_(n));nt("bCam").textContent="Cámara: "+va[qi];ce=new x_(be.pad);const Oo=new Set,Ke={x:innerWidth/2,y:innerHeight/2};let Uo=!1,Wo=!1,Xo=!1,gd="",Yr=null;const Fh=(n,t,e)=>Math.max(t,Math.min(e,n)),Yu=n=>{document.dispatchEvent(new KeyboardEvent("keydown",{code:n,bubbles:!0})),document.dispatchEvent(new KeyboardEvent("keyup",{code:n,bubbles:!0}))};function ra(n,t){t?Oo.has(n)||(Oo.add(n),N.keys.add(n)):Oo.has(n)&&(Oo.delete(n),N.keys.delete(n))}function kh(){if(N){for(const n of[...Oo])ra(n,!1);N.analog=null,Uo=!1,Wo&&(Wo=!1,Ve.left=!1),Xo&&(Xo=!1,Ve.right=!1)}}function Ku(){if(Dt==="play"){Dt="pause",Ii("pause");try{document.exitPointerLock()}catch{}}else Dt==="pause"?Mc():ju()}function ju(){Dt==="inv"?Yu("KeyE"):Dt==="panel"?ys(on!=="padcfg"):Dt==="pause"&&Mc()}function $u(){return[...document.querySelectorAll("button, input[type=range], .slot[data-g]")].filter(n=>{if(n.disabled||n.offsetParent===null)return!1;const t=n.getBoundingClientRect();return t.width>0&&t.height>0&&t.bottom>0&&t.top<innerHeight&&t.right>0&&t.left<innerWidth})}function MM(){const n=$u();if(!n.length)return;const e=(n.find(i=>i.classList.contains("primary"))||n.find(i=>i.dataset.g==="inv"&&i.parentElement.id==="invHot")||n[0]).getBoundingClientRect();Ke.x=e.left+e.width/2,Ke.y=e.top+e.height/2}function yM(n){let t=null,e=1e9;for(const i of $u()){const s=i.getBoundingClientRect(),o=s.left+s.width/2,r=s.top+s.height/2,l=o-Ke.x,a=r-Ke.y,h=l*n[0]+a*n[1];if(h<5)continue;const f=h+Math.abs(l*n[1]-a*n[0])*2.4;f<e&&(e=f,t=[o,r])}t&&(Ke.x=t[0],Ke.y=t[1])}function xd(n){const t=document.elementFromPoint(Ke.x,Ke.y);if(!t)return;co();const e=t.closest&&t.closest("input[type=range]");if(e&&n===0){const s=e.getBoundingClientRect(),o=Fh((Ke.x-s.left)/s.width,0,1),r=+e.min,l=+e.max,a=+e.step||1;e.value=Math.round((r+o*(l-r))/a)*a,e.dispatchEvent(new Event("input",{bubbles:!0}));return}const i={bubbles:!0,cancelable:!0,clientX:Ke.x,clientY:Ke.y,button:n,view:window};t.dispatchEvent(new MouseEvent("mousedown",i)),t.dispatchEvent(new MouseEvent("mouseup",i)),n===0?t.dispatchEvent(new MouseEvent("click",i)):t.dispatchEvent(new MouseEvent("contextmenu",i))}function bM(n,t){const e=nt("padcursor");e.classList.remove("hidden");const i=Dt+"|"+[...document.querySelectorAll("#overlay > div:not(.hidden)")].map(h=>h.id).join(",")+"|"+(on||"");i!==gd&&(gd=i,MM());const s=ce.stick(n.axes,0,1,1.25),o=ce.stick(n.axes,2,3,1);let r=!1;s.m>0&&(Ke.x=Fh(Ke.x+s.x*t*1100,0,innerWidth-1),Ke.y=Fh(Ke.y+s.y*t*1100,0,innerHeight-1),r=!0),e.style.left=Ke.x+"px",e.style.top=Ke.y+"px";const l=document.elementFromPoint(Ke.x,Ke.y),a=l&&l.closest?l.closest("button, .slot[data-g], input"):null;if(a!==Yr&&(Yr&&Yr.classList.remove("padhover"),Yr=a,a&&a.classList.add("padhover")),r&&l&&l.dispatchEvent(new MouseEvent("mousemove",{bubbles:!0,clientX:Ke.x,clientY:Ke.y})),o.m>0){let h=l;for(;h&&h!==document.body;){if(h.scrollHeight>h.clientHeight+4&&/(auto|scroll)/.test(getComputedStyle(h).overflowY)){h.scrollTop+=o.y*t*800;break}h=h.parentElement}}[[12,[0,-1]],[13,[0,1]],[14,[-1,0]],[15,[1,0]]].forEach(([h,f])=>{n.edge[h]&&yM(f)}),ce.edge("jump")&&xd(0),ce.edge("fall")&&xd(2),(ce.edge("drop")||ce.edge("inventory")&&Dt==="inv")&&ju(),ce.edge("pause")&&Ku()}function SM(n,t){const e=ce.stick(n.axes,0,1,1),i=ce.stick(n.axes,2,3),s=be.pad;N.analog=e.m>0?{x:e.x,y:-e.y}:null,ce.edge("sprint")&&(Uo=!Uo),e.m<.2&&(Uo=!1),ra("ShiftLeft",Uo&&e.y<-.2),i.m>0&&(N.yaw-=i.x*s.lookX*be.sens*t,N.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,N.pitch-i.y*s.lookY*be.sens*t*(s.invertY?-1:1)))),ra("Space",ce.down("jump")),ra("KeyQ",ce.down("fall")&&N.flying);const o=ce.down("attack"),r=ce.down("use");o&&!Wo&&Xu(),!o&&Wo&&(Ve.left=!1),Wo=o,r&&!Xo&&qu(),!r&&Xo&&(Ve.right=!1),Xo=r,ce.edge("prev")&&(Pt.selected=(Pt.selected+8)%9,er()),ce.edge("next")&&(Pt.selected=(Pt.selected+1)%9,er());const l={inventory:"KeyE",drop:"KeyQ",summon:"KeyB",quests:"KeyM",camera:"KeyV",fly:"KeyF",weather:"KeyT",debug:"F3",mode:"KeyG",config:"KeyP"};for(const[a,h]of Object.entries(l))ce.edge(a)&&Yu(h);ce.edge("pause")&&Ku()}function EM(n){const t=ce.poll(),e=nt("padcursor");if(!t.connected){kh(),e.classList.add("hidden");return}t.busy||(t.any&&!ns&&(ns=!0),on==="padcfg"&&wM(t),Dt==="play"&&it&&N?(e.classList.add("hidden"),(ns||t.any)&&SM(t,n)):(kh(),["menu","pause","inv","panel","dead"].includes(Dt)?bM(t,n):e.classList.add("hidden")))}addEventListener("gamepadconnected",n=>{ns=!0,ct&&ct.toast("🎮 Mando conectado"),nt("msg")&&Dt==="menu"&&(nt("msg").textContent="🎮 Mando conectado: mueve el cursor con el stick izquierdo y pulsa ✕")});addEventListener("gamepaddisconnected",()=>{kh(),ct&&ct.toast("🎮 Mando desconectado")});function js(){const n=be.pad,t=nt("padStatus");t.className=ce.connected?"ok":"bad",t.textContent=ce.connected?"✔ Conectado: "+ce.id:"✖ No hay mando: conéctalo por USB/Bluetooth y pulsa cualquier botón (los navegadores no lo ven hasta entonces).",nt("padMap").innerHTML=xu.map(i=>`<div class="prow"><span>${i.label}</span><b>${Qf[n.map[i.id]]||"Botón "+n.map[i.id]}</b><button data-pa="${i.id}">Cambiar</button></div>`).join("");const e=(i,s,o,r)=>{const l=nt(i);l.value=n[o],nt(s).textContent=r(n[o]),l.oninput=a=>{n[o]=+a.target.value,nt(s).textContent=r(n[o]),Zn()}};e("pLookX","vLookX","lookX",i=>i.toFixed(1)),e("pLookY","vLookY","lookY",i=>i.toFixed(1)),e("pDead","vDead","deadzone",i=>i.toFixed(2)),e("pCurve","vCurve","curve",i=>i.toFixed(1)),nt("pInvert").textContent="Invertir Y: "+(n.invertY?"sí":"no"),nt("pRumble").textContent="Vibración: "+(n.rumble?"sí":"no"),nt("padTest").innerHTML=Qf.map((i,s)=>`<span class="chip" data-b="${s}">${i}</span>`).join("")+'<div class="axis" data-ax="0"><i></i></div><div class="axis" data-ax="1"><i></i></div><div class="axis" data-ax="2"><i></i></div><div class="axis" data-ax="3"><i></i></div>'}function wM(n){document.querySelectorAll("#padTest .chip").forEach(e=>e.classList.toggle("on",!!n.down[+e.dataset.b])),document.querySelectorAll("#padTest .axis").forEach(e=>{const i=n.axes[+e.dataset.ax]||0;e.firstElementChild.style.left=(i+1)/2*(e.clientWidth-8)+"px"});const t=nt("padStatus");t&&ce.connected&&!t.classList.contains("ok")&&js()}nt("padcfg").addEventListener("click",n=>{const t=be.pad,e=n.target.closest("button");if(e){if(e.dataset.pa){if(!ce.connected){ct.toast("Conecta el mando y pulsa un botón");return}const i=e.dataset.pa;e.textContent="Pulsa un botón…",e.classList.add("listen"),ce.listen(s=>{const o=t.map[i],r=Object.keys(t.map).find(l=>l!==i&&t.map[l]===s);r&&(t.map[r]=o),t.map[i]=s,Zn(),js()})}else if(e.id==="pInvert")t.invertY=!t.invertY,Zn(),js();else if(e.id==="pRumble")t.rumble=!t.rumble,Zn(),js(),t.rumble&&ce.rumble(.6,.6,250);else if(e.id==="pReset"){const i=Ah();Object.assign(t,i),t.map=i.map,Zn(),js()}}});let vd=performance.now(),Kr=0,Nl=0,Ol=0;function Zu(n){requestAnimationFrame(Zu);const t=Math.min(.1,(n-vd)/1e3);if(vd=n,EM(t),!(!it||Dt==="menu"||Dt==="loading")){if(Kr+=t,Nl++,Kr>=.5&&(Ol=Math.round(Nl/Kr),Kr=0,Nl=0),Dt!=="pause"){{const a=Pt.held();N.canGlide=!!(a&&a.id===T.ELYTRA),N.armorPts=Pt.armorPoints(),dn.setArmor(Pt.armor),oM(t)}N.update(t),dn.update(t,N,Bi),gM(),mM(t);const e=Math.floor(N.pos.x),i=Math.floor(N.pos.z),s=se==="overworld",o=s&&Yf(e,i,Un)==="snow";s?Xt.update(t,N,hi,o,N.headUnder):(Xt.rain.visible=Xt.snow.visible=!1,Xt.wind.x=Xt.wind.z=0,Xt.wind.s=.12,Xt.intensity=0);const r=s?it.skyLit(e,Math.floor(N.pos.y+1.6),i):0;if(N.wind.x=Xt.wind.x*1.4*r*(Xt.state==="clear"?0:1),N.wind.z=Xt.wind.z*1.4*r*(Xt.state==="clear"?0:1),ga.uTime.value+=t,ga.uWind.value=.25+Xt.wind.s*2.2,s?sd(Xt.intensity*(.25+.75*r)*(N.headUnder?.2:1),Xt.wind.s*(.3+.7*r)*(Xt.state==="clear"?.25:1),Xt.t*.4):sd(0,.18,Xt.t*.2),Pi.update(t,hi.position,sa*16,N.headUnder,Xt.wind),Ih.update(t,hi,se),cM(t),cd=it.update(N.pos.x,N.pos.z,sa,cd)>40?4:2,N.push.x=N.push.y=N.push.z=0,Ye&&dM(t),fe&&(Cu.has(fe.type)&&(Xt.timer=9999,Xt.boss=!0),fe.update(t,N,it),fe&&(nt("bossbar").classList.remove("hidden"),nt("bossFill").style.width=Math.max(0,fe.hp/fe.maxHp*100)+"%",nt("bossPhase").textContent="Fase "+fe.phase,nt("bossName").firstChild.nodeValue!==fe.name+" "&&(nt("bossName").firstChild.nodeValue=fe.name+" "))),Ge.update(t,N,oe,Pi.daylight,sa),ui.update(t,N,Pt,a=>{me("pop"),ct.renderHotbar(),ni.event("collect",a.id,a.n)}),Si.update(t),Dt==="play"&&pM(t),Wu(t),nt("water").classList.toggle("hidden",!N.headUnder),hi.fov+=(be.fov+(N.keys.has("ShiftLeft")&&N.keys.has("KeyW")?7:0)-hi.fov)*Math.min(1,t*8),ct.isOpen&&ct.furnace&&(ct.furnaceBars(),Rl-=t,Rl<=0&&(Rl=.5,ct.render())),hi.updateProjectionMatrix(),Pl-=t,Pl<=0){Pl=.2,ct.renderStats();const a=(Pi.time*24+6)%24,h=Math.floor(a),f=Math.floor((a-h)*60);nt("info").textContent=`${Ol} FPS · ${oe==="creative"?"Creativo":"Supervivencia"}
XYZ ${N.pos.x.toFixed(1)} ${N.pos.y.toFixed(1)} ${N.pos.z.toFixed(1)}
Bioma: ${Yf(Math.floor(N.pos.x),Math.floor(N.pos.z),Un)} · ${String(h).padStart(2,"0")}:${String(f).padStart(2,"0")}
Mobs: ${Ge.list.length} · Clima: ${wh[Xt.state]}${o?" (nieve)":""} · Viento ${(Xt.wind.s*20).toFixed(0)} km/h${N.flying?" · [VUELO]":""}`,nt("cam").textContent="📷 "+va[qi]+"  [V]",nt("mmInfo").textContent=`${Math.floor(N.pos.x)}, ${Math.floor(N.pos.y)}, ${Math.floor(N.pos.z)}
${String(h).padStart(2,"0")}:${String(f).padStart(2,"0")} · ${se==="overworld"?wh[Xt.state]:Nh[se]}
📷 ${["1ª persona","3ª detrás","3ª delante"][qi]} · ${Ol} FPS`,nt("xpFill").style.width=es/Ph(sn)*100+"%",nt("xpLvl").textContent=sn,nt("xp").style.visibility=oe==="survival"?"visible":"hidden";const c=[];N.effects.poison>0&&c.push(`<span style="border-color:#7a2">☠ Veneno ${Math.ceil(N.effects.poison)}s</span>`),N.effects.fatigue>0&&c.push(`<span style="border-color:#6cf">⛏ Fatiga ${Math.ceil(N.effects.fatigue)}s</span>`),N.effects.burn>0&&c.push(`<span style="border-color:#f80">🔥 Fuego ${Math.ceil(N.effects.burn)}s</span>`),N.effects.levitate>0&&c.push(`<span style="border-color:#fff">☁ Levitación ${Math.ceil(N.effects.levitate)}s</span>`),nt("effects").innerHTML=c.join(""),nt("darkness").style.opacity=is}Cl-=t,Cl<=0&&(Cl=.4,eM()),Ll-=t,Ll<=0&&(Ll=.5,iM()),dc+=t,Dl+=t,Dl>25&&(Dl=0,to=!0)}Au&&(Tu.uniforms.uTime.value=n%1e4/1e3),Li?Li.render(t):_i.render(Ze,hi),to&&(to=!1,vM(),Ts())}}requestAnimationFrame(Zu);(async function(){const t=r=>(r>=3600?Math.floor(r/3600)+" h ":"")+Math.floor(r%3600/60)+" min",e=r=>{let l=7;for(const a of r)l=Math.imul(l,31)+a.charCodeAt(0)|0;return Math.abs(l)%9e5+1};async function i(){const r=await _u();return nt("worldsBox").classList.toggle("hidden",!r.length),nt("worldList").innerHTML=r.map(l=>`<div class="wcard" data-id="${l.id}"><img src="${l.thumb||""}" alt=""><div><b>${(l.name||"Mundo").replace(/</g,"&lt;")}</b><small>${l.mode==="creative"?"Creativo":"Supervivencia"} · nivel ${l.level||0} · ${t(l.played||0)} · ${new Date(l.updated).toLocaleString()}</small></div><div class="wb"><button class="play" data-act="play">▶ Jugar</button><button data-act="export" title="Exportar">⬇</button><button data-act="rename" title="Renombrar">✎</button><button data-act="del" title="Borrar">🗑</button></div></div>`).join(""),r}let s=await i();nt("msg").textContent=s.length?"Elige un mundo o crea uno nuevo":"Elige cómo jugar";const o=(r,l)=>{co();const a=nt("wName").value.trim()||`Mundo ${s.length+1}`,h=nt("wSeed").value.trim(),f=h?/^\d+$/.test(h)?Number(h)%9e5+1:e(h):1+Math.floor(Math.random()*9e5);md({id:yu(),name:a,seed:f,mode:r,saved:new Map,meta:null,kind:l})};nt("bSurvival").onclick=()=>o("survival"),nt("bCreative").onclick=()=>o("creative"),nt("bOneBlock").onclick=()=>o("survival","oneblock"),nt("worldList").addEventListener("click",async r=>{const l=r.target.closest("button"),a=r.target.closest(".wcard");if(!l||!a)return;const h=a.dataset.id,f=s.find(c=>c.id===h);if(l.dataset.act==="play"){co(),nt("msg").textContent="Cargando mundo…";const c=await Mu(h);if(!c.meta){nt("msg").textContent="No se pudo leer este mundo";return}md({id:h,name:f.name,kind:c.meta.kind,seed:c.meta.seed,mode:c.meta.mode,saved:c.chunks,nether:c.nether,end:c.end,meta:c.meta,created:f.created,played:f.played})}else if(l.dataset.act==="del")confirm(`¿Borrar "${f.name}" para siempre?`)&&(await k_(h),s=await i());else if(l.dataset.act==="rename"){const c=prompt("Nuevo nombre",f.name);c&&c.trim()&&(await B_(h,c.trim().slice(0,28)),s=await i())}else if(l.dataset.act==="export"){const c=await Eu(h),d=document.createElement("a");d.href=URL.createObjectURL(c),d.download=(f.name||"mundo").replace(/[^\w\-]+/g,"_")+".mcw",d.click(),setTimeout(()=>URL.revokeObjectURL(d.href),4e3)}}),nt("bImport").onclick=()=>nt("fImport").click(),nt("fImport").onchange=async r=>{const l=r.target.files[0];if(l){try{await V_(l),s=await i(),nt("msg").textContent="✔ Partida importada"}catch{nt("msg").textContent="⚠ Archivo no válido"}r.target.value=""}},window.__menu={refresh:async()=>s=await i()}})();
