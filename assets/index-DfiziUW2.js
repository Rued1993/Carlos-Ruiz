(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mh="170",fd=0,nc=1,ud=2,Bf=1,kf=2,vn=3,Kn=0,gi=1,bi=2,En=0,zs=1,Rr=2,sc=3,rc=4,dd=5,rs=100,pd=101,md=102,gd=103,xd=104,_d=200,vd=201,Md=202,yd=203,dl=204,pl=205,Sd=206,bd=207,Ed=208,wd=209,Td=210,Ad=211,Rd=212,Cd=213,Ld=214,ml=0,gl=1,xl=2,Gs=3,_l=4,vl=5,Ml=6,yl=7,gh=0,Pd=1,Dd=2,wn=0,Hf=1,Gf=2,Vf=3,ra=4,Id=5,Wf=6,Xf=7,qf=300,Vs=301,Ws=302,Sl=303,bl=304,oa=306,Ho=1e3,ls=1001,El=1002,pe=1003,Ud=1004,Xr=1005,Vi=1006,ga=1007,yn=1008,Cn=1009,Yf=1010,Kf=1011,Cr=1012,xh=1013,fs=1014,Sn=1015,ln=1016,_h=1017,vh=1018,Xs=1020,$f=35902,jf=1021,Zf=1022,Qi=1023,Jf=1024,Qf=1025,Fs=1026,qs=1027,tu=1028,Mh=1029,eu=1030,yh=1031,Sh=1033,Po=33776,Do=33777,Io=33778,Uo=33779,wl=35840,Tl=35841,Al=35842,Rl=35843,Cl=36196,Ll=37492,Pl=37496,Dl=37808,Il=37809,Ul=37810,Nl=37811,Ol=37812,zl=37813,Fl=37814,Bl=37815,kl=37816,Hl=37817,Gl=37818,Vl=37819,Wl=37820,Xl=37821,No=36492,ql=36494,Yl=36495,iu=36283,Kl=36284,$l=36285,jl=36286,Nd=3200,Od=3201,bh=0,zd=1,Gn="",ti="srgb",Zs="srgb-linear",aa="linear",_e="srgb",gs=7680,oc=519,Fd=512,Bd=513,kd=514,nu=515,Hd=516,Gd=517,Vd=518,Wd=519,Zl=35044,ac="300 es",bn=2e3,Go=2001;class Js{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}}const li=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Oo=Math.PI/180,Jl=180/Math.PI;function Wn(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(li[n&255]+li[n>>8&255]+li[n>>16&255]+li[n>>24&255]+"-"+li[t&255]+li[t>>8&255]+"-"+li[t>>16&15|64]+li[t>>24&255]+"-"+li[e&63|128]+li[e>>8&255]+"-"+li[e>>16&255]+li[e>>24&255]+li[i&255]+li[i>>8&255]+li[i>>16&255]+li[i>>24&255]).toLowerCase()}function Si(n,t,e){return Math.max(t,Math.min(e,n))}function Xd(n,t){return(n%t+t)%t}function xa(n,t,e){return(1-e)*n+e*t}function an(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Se(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class It{constructor(t=0,e=0){It.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Si(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Yt{constructor(t,e,i,s,r,a,l,o,h){Yt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,l,o,h)}set(t,e,i,s,r,a,l,o,h){const f=this.elements;return f[0]=t,f[1]=s,f[2]=l,f[3]=e,f[4]=r,f[5]=o,f[6]=i,f[7]=a,f[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],l=i[3],o=i[6],h=i[1],f=i[4],c=i[7],u=i[2],d=i[5],m=i[8],x=s[0],g=s[3],p=s[6],M=s[1],y=s[4],_=s[7],P=s[2],T=s[5],w=s[8];return r[0]=a*x+l*M+o*P,r[3]=a*g+l*y+o*T,r[6]=a*p+l*_+o*w,r[1]=h*x+f*M+c*P,r[4]=h*g+f*y+c*T,r[7]=h*p+f*_+c*w,r[2]=u*x+d*M+m*P,r[5]=u*g+d*y+m*T,r[8]=u*p+d*_+m*w,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],f=t[8];return e*a*f-e*l*h-i*r*f+i*l*o+s*r*h-s*a*o}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],f=t[8],c=f*a-l*h,u=l*o-f*r,d=h*r-a*o,m=e*c+i*u+s*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return t[0]=c*x,t[1]=(s*h-f*i)*x,t[2]=(l*i-s*a)*x,t[3]=u*x,t[4]=(f*e-s*o)*x,t[5]=(s*r-l*e)*x,t[6]=d*x,t[7]=(i*o-h*e)*x,t[8]=(a*e-i*r)*x,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,l){const o=Math.cos(r),h=Math.sin(r);return this.set(i*o,i*h,-i*(o*a+h*l)+a+t,-s*h,s*o,-s*(-h*a+o*l)+l+e,0,0,1),this}scale(t,e){return this.premultiply(_a.makeScale(t,e)),this}rotate(t){return this.premultiply(_a.makeRotation(-t)),this}translate(t,e){return this.premultiply(_a.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const _a=new Yt;function su(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function Vo(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function qd(){const n=Vo("canvas");return n.style.display="block",n}const lc={};function xr(n){n in lc||(lc[n]=!0,console.warn(n))}function Yd(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function Kd(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function $d(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const ne={enabled:!0,workingColorSpace:Zs,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===_e&&(n.r=Tn(n.r),n.g=Tn(n.g),n.b=Tn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===_e&&(n.r=Bs(n.r),n.g=Bs(n.g),n.b=Bs(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Gn?aa:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Tn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Bs(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const hc=[.64,.33,.3,.6,.15,.06],cc=[.2126,.7152,.0722],fc=[.3127,.329],uc=new Yt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),dc=new Yt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);ne.define({[Zs]:{primaries:hc,whitePoint:fc,transfer:aa,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:cc,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:hc,whitePoint:fc,transfer:_e,toXYZ:uc,fromXYZ:dc,luminanceCoefficients:cc,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}});let xs;class jd{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{xs===void 0&&(xs=Vo("canvas")),xs.width=t.width,xs.height=t.height;const i=xs.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=xs}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=Vo("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Tn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Tn(e[i]/255)*255):e[i]=Tn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let Zd=0;class ru{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=Wn(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,l=s.length;a<l;a++)s[a].isDataTexture?r.push(va(s[a].image)):r.push(va(s[a]))}else r=va(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function va(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?jd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Jd=0;class xi extends Js{constructor(t=xi.DEFAULT_IMAGE,e=xi.DEFAULT_MAPPING,i=ls,s=ls,r=Vi,a=yn,l=Qi,o=Cn,h=xi.DEFAULT_ANISOTROPY,f=Gn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=Wn(),this.name="",this.source=new ru(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=h,this.format=l,this.internalFormat=null,this.type=o,this.offset=new It(0,0),this.repeat=new It(1,1),this.center=new It(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Yt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==qf)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ho:t.x=t.x-Math.floor(t.x);break;case ls:t.x=t.x<0?0:1;break;case El:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ho:t.y=t.y-Math.floor(t.y);break;case ls:t.y=t.y<0?0:1;break;case El:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}xi.DEFAULT_IMAGE=null;xi.DEFAULT_MAPPING=qf;xi.DEFAULT_ANISOTROPY=1;class Ee{constructor(t=0,e=0,i=0,s=1){Ee.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const o=t.elements,h=o[0],f=o[4],c=o[8],u=o[1],d=o[5],m=o[9],x=o[2],g=o[6],p=o[10];if(Math.abs(f-u)<.01&&Math.abs(c-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(f+u)<.1&&Math.abs(c+x)<.1&&Math.abs(m+g)<.1&&Math.abs(h+d+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const y=(h+1)/2,_=(d+1)/2,P=(p+1)/2,T=(f+u)/4,w=(c+x)/4,C=(m+g)/4;return y>_&&y>P?y<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(y),s=T/i,r=w/i):_>P?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=T/s,r=C/s):P<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(P),i=w/r,s=C/r),this.set(i,s,r,e),this}let M=Math.sqrt((g-m)*(g-m)+(c-x)*(c-x)+(u-f)*(u-f));return Math.abs(M)<.001&&(M=1),this.x=(g-m)/M,this.y=(c-x)/M,this.z=(u-f)/M,this.w=Math.acos((h+d+p-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qd extends Js{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new Ee(0,0,t,e),this.scissorTest=!1,this.viewport=new Ee(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Vi,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new xi(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const a=i.count;for(let l=0;l<a;l++)this.textures[l]=r.clone(),this.textures[l].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new ru(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Wi extends Qd{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ou extends xi{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class tp extends xi{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pe,this.minFilter=pe,this.wrapR=ls,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fr{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,l){let o=i[s+0],h=i[s+1],f=i[s+2],c=i[s+3];const u=r[a+0],d=r[a+1],m=r[a+2],x=r[a+3];if(l===0){t[e+0]=o,t[e+1]=h,t[e+2]=f,t[e+3]=c;return}if(l===1){t[e+0]=u,t[e+1]=d,t[e+2]=m,t[e+3]=x;return}if(c!==x||o!==u||h!==d||f!==m){let g=1-l;const p=o*u+h*d+f*m+c*x,M=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const P=Math.sqrt(y),T=Math.atan2(P,p*M);g=Math.sin(g*T)/P,l=Math.sin(l*T)/P}const _=l*M;if(o=o*g+u*_,h=h*g+d*_,f=f*g+m*_,c=c*g+x*_,g===1-l){const P=1/Math.sqrt(o*o+h*h+f*f+c*c);o*=P,h*=P,f*=P,c*=P}}t[e]=o,t[e+1]=h,t[e+2]=f,t[e+3]=c}static multiplyQuaternionsFlat(t,e,i,s,r,a){const l=i[s],o=i[s+1],h=i[s+2],f=i[s+3],c=r[a],u=r[a+1],d=r[a+2],m=r[a+3];return t[e]=l*m+f*c+o*d-h*u,t[e+1]=o*m+f*u+h*c-l*d,t[e+2]=h*m+f*d+l*u-o*c,t[e+3]=f*m-l*c-o*u-h*d,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,a=t._order,l=Math.cos,o=Math.sin,h=l(i/2),f=l(s/2),c=l(r/2),u=o(i/2),d=o(s/2),m=o(r/2);switch(a){case"XYZ":this._x=u*f*c+h*d*m,this._y=h*d*c-u*f*m,this._z=h*f*m+u*d*c,this._w=h*f*c-u*d*m;break;case"YXZ":this._x=u*f*c+h*d*m,this._y=h*d*c-u*f*m,this._z=h*f*m-u*d*c,this._w=h*f*c+u*d*m;break;case"ZXY":this._x=u*f*c-h*d*m,this._y=h*d*c+u*f*m,this._z=h*f*m+u*d*c,this._w=h*f*c-u*d*m;break;case"ZYX":this._x=u*f*c-h*d*m,this._y=h*d*c+u*f*m,this._z=h*f*m-u*d*c,this._w=h*f*c+u*d*m;break;case"YZX":this._x=u*f*c+h*d*m,this._y=h*d*c+u*f*m,this._z=h*f*m-u*d*c,this._w=h*f*c-u*d*m;break;case"XZY":this._x=u*f*c-h*d*m,this._y=h*d*c-u*f*m,this._z=h*f*m+u*d*c,this._w=h*f*c+u*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],l=e[5],o=e[9],h=e[2],f=e[6],c=e[10],u=i+l+c;if(u>0){const d=.5/Math.sqrt(u+1);this._w=.25/d,this._x=(f-o)*d,this._y=(r-h)*d,this._z=(a-s)*d}else if(i>l&&i>c){const d=2*Math.sqrt(1+i-l-c);this._w=(f-o)/d,this._x=.25*d,this._y=(s+a)/d,this._z=(r+h)/d}else if(l>c){const d=2*Math.sqrt(1+l-i-c);this._w=(r-h)/d,this._x=(s+a)/d,this._y=.25*d,this._z=(o+f)/d}else{const d=2*Math.sqrt(1+c-i-l);this._w=(a-s)/d,this._x=(r+h)/d,this._y=(o+f)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Si(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,a=t._w,l=e._x,o=e._y,h=e._z,f=e._w;return this._x=i*f+a*l+s*h-r*o,this._y=s*f+a*o+r*l-i*h,this._z=r*f+a*h+i*o-s*l,this._w=a*f-i*l-s*o-r*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,a=this._w;let l=a*t._w+i*t._x+s*t._y+r*t._z;if(l<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,l=-l):this.copy(t),l>=1)return this._w=a,this._x=i,this._y=s,this._z=r,this;const o=1-l*l;if(o<=Number.EPSILON){const d=1-e;return this._w=d*a+e*this._w,this._x=d*i+e*this._x,this._y=d*s+e*this._y,this._z=d*r+e*this._z,this.normalize(),this}const h=Math.sqrt(o),f=Math.atan2(h,l),c=Math.sin((1-e)*f)/h,u=Math.sin(e*f)/h;return this._w=a*c+this._w*u,this._x=i*c+this._x*u,this._y=s*c+this._y*u,this._z=r*c+this._z*u,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(t=0,e=0,i=0){L.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(pc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(pc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,l=t.z,o=t.w,h=2*(a*s-l*i),f=2*(l*e-r*s),c=2*(r*i-a*e);return this.x=e+o*h+a*c-l*f,this.y=i+o*f+l*h-r*c,this.z=s+o*c+r*f-a*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,a=e.x,l=e.y,o=e.z;return this.x=s*o-r*l,this.y=r*a-i*o,this.z=i*l-s*a,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Ma.copy(this).projectOnVector(t),this.sub(Ma)}reflect(t){return this.sub(Ma.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(Si(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ma=new L,pc=new Fr;class Br{constructor(t=new L(1/0,1/0,1/0),e=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(Ki.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(Ki.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=Ki.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,l=r.count;a<l;a++)t.isMesh===!0?t.getVertexPosition(a,Ki):Ki.fromBufferAttribute(r,a),Ki.applyMatrix4(t.matrixWorld),this.expandByPoint(Ki);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),qr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),qr.copy(i.boundingBox)),qr.applyMatrix4(t.matrixWorld),this.union(qr)}const s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ki),Ki.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(rr),Yr.subVectors(this.max,rr),_s.subVectors(t.a,rr),vs.subVectors(t.b,rr),Ms.subVectors(t.c,rr),Un.subVectors(vs,_s),Nn.subVectors(Ms,vs),Zn.subVectors(_s,Ms);let e=[0,-Un.z,Un.y,0,-Nn.z,Nn.y,0,-Zn.z,Zn.y,Un.z,0,-Un.x,Nn.z,0,-Nn.x,Zn.z,0,-Zn.x,-Un.y,Un.x,0,-Nn.y,Nn.x,0,-Zn.y,Zn.x,0];return!ya(e,_s,vs,Ms,Yr)||(e=[1,0,0,0,1,0,0,0,1],!ya(e,_s,vs,Ms,Yr))?!1:(Kr.crossVectors(Un,Nn),e=[Kr.x,Kr.y,Kr.z],ya(e,_s,vs,Ms,Yr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ki).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ki).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(dn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),dn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),dn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),dn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),dn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),dn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),dn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),dn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(dn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const dn=[new L,new L,new L,new L,new L,new L,new L,new L],Ki=new L,qr=new Br,_s=new L,vs=new L,Ms=new L,Un=new L,Nn=new L,Zn=new L,rr=new L,Yr=new L,Kr=new L,Jn=new L;function ya(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Jn.fromArray(n,r);const l=s.x*Math.abs(Jn.x)+s.y*Math.abs(Jn.y)+s.z*Math.abs(Jn.z),o=t.dot(Jn),h=e.dot(Jn),f=i.dot(Jn);if(Math.max(-Math.max(o,h,f),Math.min(o,h,f))>l)return!1}return!0}const ep=new Br,or=new L,Sa=new L;class kr{constructor(t=new L,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):ep.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;or.subVectors(t,this.center);const e=or.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(or,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Sa.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(or.copy(t.center).add(Sa)),this.expandByPoint(or.copy(t.center).sub(Sa))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const pn=new L,ba=new L,$r=new L,On=new L,Ea=new L,jr=new L,wa=new L;class Eh{constructor(t=new L,e=new L(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,pn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=pn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(pn.copy(this.origin).addScaledVector(this.direction,e),pn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ba.copy(t).add(e).multiplyScalar(.5),$r.copy(e).sub(t).normalize(),On.copy(this.origin).sub(ba);const r=t.distanceTo(e)*.5,a=-this.direction.dot($r),l=On.dot(this.direction),o=-On.dot($r),h=On.lengthSq(),f=Math.abs(1-a*a);let c,u,d,m;if(f>0)if(c=a*o-l,u=a*l-o,m=r*f,c>=0)if(u>=-m)if(u<=m){const x=1/f;c*=x,u*=x,d=c*(c+a*u+2*l)+u*(a*c+u+2*o)+h}else u=r,c=Math.max(0,-(a*u+l)),d=-c*c+u*(u+2*o)+h;else u=-r,c=Math.max(0,-(a*u+l)),d=-c*c+u*(u+2*o)+h;else u<=-m?(c=Math.max(0,-(-a*r+l)),u=c>0?-r:Math.min(Math.max(-r,-o),r),d=-c*c+u*(u+2*o)+h):u<=m?(c=0,u=Math.min(Math.max(-r,-o),r),d=u*(u+2*o)+h):(c=Math.max(0,-(a*r+l)),u=c>0?r:Math.min(Math.max(-r,-o),r),d=-c*c+u*(u+2*o)+h);else u=a>0?-r:r,c=Math.max(0,-(a*u+l)),d=-c*c+u*(u+2*o)+h;return i&&i.copy(this.origin).addScaledVector(this.direction,c),s&&s.copy(ba).addScaledVector($r,u),d}intersectSphere(t,e){pn.subVectors(t.center,this.origin);const i=pn.dot(this.direction),s=pn.dot(pn)-i*i,r=t.radius*t.radius;if(s>r)return null;const a=Math.sqrt(r-s),l=i-a,o=i+a;return o<0?null:l<0?this.at(o,e):this.at(l,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,l,o;const h=1/this.direction.x,f=1/this.direction.y,c=1/this.direction.z,u=this.origin;return h>=0?(i=(t.min.x-u.x)*h,s=(t.max.x-u.x)*h):(i=(t.max.x-u.x)*h,s=(t.min.x-u.x)*h),f>=0?(r=(t.min.y-u.y)*f,a=(t.max.y-u.y)*f):(r=(t.max.y-u.y)*f,a=(t.min.y-u.y)*f),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),c>=0?(l=(t.min.z-u.z)*c,o=(t.max.z-u.z)*c):(l=(t.max.z-u.z)*c,o=(t.min.z-u.z)*c),i>o||l>s)||((l>i||i!==i)&&(i=l),(o<s||s!==s)&&(s=o),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,pn)!==null}intersectTriangle(t,e,i,s,r){Ea.subVectors(e,t),jr.subVectors(i,t),wa.crossVectors(Ea,jr);let a=this.direction.dot(wa),l;if(a>0){if(s)return null;l=1}else if(a<0)l=-1,a=-a;else return null;On.subVectors(this.origin,t);const o=l*this.direction.dot(jr.crossVectors(On,jr));if(o<0)return null;const h=l*this.direction.dot(Ea.cross(On));if(h<0||o+h>a)return null;const f=-l*On.dot(wa);return f<0?null:this.at(f/a,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Pe{constructor(t,e,i,s,r,a,l,o,h,f,c,u,d,m,x,g){Pe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,l,o,h,f,c,u,d,m,x,g)}set(t,e,i,s,r,a,l,o,h,f,c,u,d,m,x,g){const p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=l,p[13]=o,p[2]=h,p[6]=f,p[10]=c,p[14]=u,p[3]=d,p[7]=m,p[11]=x,p[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Pe().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ys.setFromMatrixColumn(t,0).length(),r=1/ys.setFromMatrixColumn(t,1).length(),a=1/ys.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),l=Math.sin(i),o=Math.cos(s),h=Math.sin(s),f=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const u=a*f,d=a*c,m=l*f,x=l*c;e[0]=o*f,e[4]=-o*c,e[8]=h,e[1]=d+m*h,e[5]=u-x*h,e[9]=-l*o,e[2]=x-u*h,e[6]=m+d*h,e[10]=a*o}else if(t.order==="YXZ"){const u=o*f,d=o*c,m=h*f,x=h*c;e[0]=u+x*l,e[4]=m*l-d,e[8]=a*h,e[1]=a*c,e[5]=a*f,e[9]=-l,e[2]=d*l-m,e[6]=x+u*l,e[10]=a*o}else if(t.order==="ZXY"){const u=o*f,d=o*c,m=h*f,x=h*c;e[0]=u-x*l,e[4]=-a*c,e[8]=m+d*l,e[1]=d+m*l,e[5]=a*f,e[9]=x-u*l,e[2]=-a*h,e[6]=l,e[10]=a*o}else if(t.order==="ZYX"){const u=a*f,d=a*c,m=l*f,x=l*c;e[0]=o*f,e[4]=m*h-d,e[8]=u*h+x,e[1]=o*c,e[5]=x*h+u,e[9]=d*h-m,e[2]=-h,e[6]=l*o,e[10]=a*o}else if(t.order==="YZX"){const u=a*o,d=a*h,m=l*o,x=l*h;e[0]=o*f,e[4]=x-u*c,e[8]=m*c+d,e[1]=c,e[5]=a*f,e[9]=-l*f,e[2]=-h*f,e[6]=d*c+m,e[10]=u-x*c}else if(t.order==="XZY"){const u=a*o,d=a*h,m=l*o,x=l*h;e[0]=o*f,e[4]=-c,e[8]=h*f,e[1]=u*c+x,e[5]=a*f,e[9]=d*c-m,e[2]=m*c-d,e[6]=l*f,e[10]=x*c+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,np)}lookAt(t,e,i){const s=this.elements;return Ai.subVectors(t,e),Ai.lengthSq()===0&&(Ai.z=1),Ai.normalize(),zn.crossVectors(i,Ai),zn.lengthSq()===0&&(Math.abs(i.z)===1?Ai.x+=1e-4:Ai.z+=1e-4,Ai.normalize(),zn.crossVectors(i,Ai)),zn.normalize(),Zr.crossVectors(Ai,zn),s[0]=zn.x,s[4]=Zr.x,s[8]=Ai.x,s[1]=zn.y,s[5]=Zr.y,s[9]=Ai.y,s[2]=zn.z,s[6]=Zr.z,s[10]=Ai.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,a=i[0],l=i[4],o=i[8],h=i[12],f=i[1],c=i[5],u=i[9],d=i[13],m=i[2],x=i[6],g=i[10],p=i[14],M=i[3],y=i[7],_=i[11],P=i[15],T=s[0],w=s[4],C=s[8],S=s[12],v=s[1],R=s[5],U=s[9],N=s[13],H=s[2],$=s[6],q=s[10],Y=s[14],V=s[3],it=s[7],rt=s[11],xt=s[15];return r[0]=a*T+l*v+o*H+h*V,r[4]=a*w+l*R+o*$+h*it,r[8]=a*C+l*U+o*q+h*rt,r[12]=a*S+l*N+o*Y+h*xt,r[1]=f*T+c*v+u*H+d*V,r[5]=f*w+c*R+u*$+d*it,r[9]=f*C+c*U+u*q+d*rt,r[13]=f*S+c*N+u*Y+d*xt,r[2]=m*T+x*v+g*H+p*V,r[6]=m*w+x*R+g*$+p*it,r[10]=m*C+x*U+g*q+p*rt,r[14]=m*S+x*N+g*Y+p*xt,r[3]=M*T+y*v+_*H+P*V,r[7]=M*w+y*R+_*$+P*it,r[11]=M*C+y*U+_*q+P*rt,r[15]=M*S+y*N+_*Y+P*xt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],l=t[5],o=t[9],h=t[13],f=t[2],c=t[6],u=t[10],d=t[14],m=t[3],x=t[7],g=t[11],p=t[15];return m*(+r*o*c-s*h*c-r*l*u+i*h*u+s*l*d-i*o*d)+x*(+e*o*d-e*h*u+r*a*u-s*a*d+s*h*f-r*o*f)+g*(+e*h*c-e*l*d-r*a*c+i*a*d+r*l*f-i*h*f)+p*(-s*l*f-e*o*c+e*l*u+s*a*c-i*a*u+i*o*f)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],l=t[5],o=t[6],h=t[7],f=t[8],c=t[9],u=t[10],d=t[11],m=t[12],x=t[13],g=t[14],p=t[15],M=c*g*h-x*u*h+x*o*d-l*g*d-c*o*p+l*u*p,y=m*u*h-f*g*h-m*o*d+a*g*d+f*o*p-a*u*p,_=f*x*h-m*c*h+m*l*d-a*x*d-f*l*p+a*c*p,P=m*c*o-f*x*o-m*l*u+a*x*u+f*l*g-a*c*g,T=e*M+i*y+s*_+r*P;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const w=1/T;return t[0]=M*w,t[1]=(x*u*r-c*g*r-x*s*d+i*g*d+c*s*p-i*u*p)*w,t[2]=(l*g*r-x*o*r+x*s*h-i*g*h-l*s*p+i*o*p)*w,t[3]=(c*o*r-l*u*r-c*s*h+i*u*h+l*s*d-i*o*d)*w,t[4]=y*w,t[5]=(f*g*r-m*u*r+m*s*d-e*g*d-f*s*p+e*u*p)*w,t[6]=(m*o*r-a*g*r-m*s*h+e*g*h+a*s*p-e*o*p)*w,t[7]=(a*u*r-f*o*r+f*s*h-e*u*h-a*s*d+e*o*d)*w,t[8]=_*w,t[9]=(m*c*r-f*x*r-m*i*d+e*x*d+f*i*p-e*c*p)*w,t[10]=(a*x*r-m*l*r+m*i*h-e*x*h-a*i*p+e*l*p)*w,t[11]=(f*l*r-a*c*r-f*i*h+e*c*h+a*i*d-e*l*d)*w,t[12]=P*w,t[13]=(f*x*s-m*c*s+m*i*u-e*x*u-f*i*g+e*c*g)*w,t[14]=(m*l*s-a*x*s-m*i*o+e*x*o+a*i*g-e*l*g)*w,t[15]=(a*c*s-f*l*s+f*i*o-e*c*o-a*i*u+e*l*u)*w,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,l=t.y,o=t.z,h=r*a,f=r*l;return this.set(h*a+i,h*l-s*o,h*o+s*l,0,h*l+s*o,f*l+i,f*o-s*a,0,h*o-s*l,f*o+s*a,r*o*o+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,a=e._y,l=e._z,o=e._w,h=r+r,f=a+a,c=l+l,u=r*h,d=r*f,m=r*c,x=a*f,g=a*c,p=l*c,M=o*h,y=o*f,_=o*c,P=i.x,T=i.y,w=i.z;return s[0]=(1-(x+p))*P,s[1]=(d+_)*P,s[2]=(m-y)*P,s[3]=0,s[4]=(d-_)*T,s[5]=(1-(u+p))*T,s[6]=(g+M)*T,s[7]=0,s[8]=(m+y)*w,s[9]=(g-M)*w,s[10]=(1-(u+x))*w,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ys.set(s[0],s[1],s[2]).length();const a=ys.set(s[4],s[5],s[6]).length(),l=ys.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],$i.copy(this);const h=1/r,f=1/a,c=1/l;return $i.elements[0]*=h,$i.elements[1]*=h,$i.elements[2]*=h,$i.elements[4]*=f,$i.elements[5]*=f,$i.elements[6]*=f,$i.elements[8]*=c,$i.elements[9]*=c,$i.elements[10]*=c,e.setFromRotationMatrix($i),i.x=r,i.y=a,i.z=l,this}makePerspective(t,e,i,s,r,a,l=bn){const o=this.elements,h=2*r/(e-t),f=2*r/(i-s),c=(e+t)/(e-t),u=(i+s)/(i-s);let d,m;if(l===bn)d=-(a+r)/(a-r),m=-2*a*r/(a-r);else if(l===Go)d=-a/(a-r),m=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+l);return o[0]=h,o[4]=0,o[8]=c,o[12]=0,o[1]=0,o[5]=f,o[9]=u,o[13]=0,o[2]=0,o[6]=0,o[10]=d,o[14]=m,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,i,s,r,a,l=bn){const o=this.elements,h=1/(e-t),f=1/(i-s),c=1/(a-r),u=(e+t)*h,d=(i+s)*f;let m,x;if(l===bn)m=(a+r)*c,x=-2*c;else if(l===Go)m=r*c,x=-1*c;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+l);return o[0]=2*h,o[4]=0,o[8]=0,o[12]=-u,o[1]=0,o[5]=2*f,o[9]=0,o[13]=-d,o[2]=0,o[6]=0,o[10]=x,o[14]=-m,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ys=new L,$i=new Pe,ip=new L(0,0,0),np=new L(1,1,1),zn=new L,Zr=new L,Ai=new L,mc=new Pe,gc=new Fr;class nn{constructor(t=0,e=0,i=0,s=nn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],a=s[4],l=s[8],o=s[1],h=s[5],f=s[9],c=s[2],u=s[6],d=s[10];switch(e){case"XYZ":this._y=Math.asin(Si(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,d),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Si(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(l,d),this._z=Math.atan2(o,h)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Si(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-c,d),this._z=Math.atan2(-a,h)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Si(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(u,d),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-a,h));break;case"YZX":this._z=Math.asin(Si(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,h),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(l,d));break;case"XZY":this._z=Math.asin(-Si(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,h),this._y=Math.atan2(l,r)):(this._x=Math.atan2(-f,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return mc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(mc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return gc.setFromEuler(this),this.setFromQuaternion(gc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}nn.DEFAULT_ORDER="XYZ";class au{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let sp=0;const xc=new L,Ss=new Fr,mn=new Pe,Jr=new L,ar=new L,rp=new L,op=new Fr,_c=new L(1,0,0),vc=new L(0,1,0),Mc=new L(0,0,1),yc={type:"added"},ap={type:"removed"},bs={type:"childadded",child:null},Ta={type:"childremoved",child:null};class We extends Js{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=Wn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=We.DEFAULT_UP.clone();const t=new L,e=new nn,i=new Fr,s=new L(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Pe},normalMatrix:{value:new Yt}}),this.matrix=new Pe,this.matrixWorld=new Pe,this.matrixAutoUpdate=We.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new au,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.multiply(Ss),this}rotateOnWorldAxis(t,e){return Ss.setFromAxisAngle(t,e),this.quaternion.premultiply(Ss),this}rotateX(t){return this.rotateOnAxis(_c,t)}rotateY(t){return this.rotateOnAxis(vc,t)}rotateZ(t){return this.rotateOnAxis(Mc,t)}translateOnAxis(t,e){return xc.copy(t).applyQuaternion(this.quaternion),this.position.add(xc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(_c,t)}translateY(t){return this.translateOnAxis(vc,t)}translateZ(t){return this.translateOnAxis(Mc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(mn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?Jr.copy(t):Jr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),ar.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?mn.lookAt(ar,Jr,this.up):mn.lookAt(Jr,ar,this.up),this.quaternion.setFromRotationMatrix(mn),s&&(mn.extractRotation(s.matrixWorld),Ss.setFromRotationMatrix(mn),this.quaternion.premultiply(Ss.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(yc),bs.child=t,this.dispatchEvent(bs),bs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(ap),Ta.child=t,this.dispatchEvent(Ta),Ta.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),mn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),mn.multiply(t.parent.matrixWorld)),t.applyMatrix4(mn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(yc),bs.child=t,this.dispatchEvent(bs),bs.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ar,op,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(l=>({boxInitialized:l.boxInitialized,boxMin:l.box.min.toArray(),boxMax:l.box.max.toArray(),sphereInitialized:l.sphereInitialized,sphereRadius:l.sphere.radius,sphereCenter:l.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(l,o){return l[o.uuid]===void 0&&(l[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const l=this.geometry.parameters;if(l!==void 0&&l.shapes!==void 0){const o=l.shapes;if(Array.isArray(o))for(let h=0,f=o.length;h<f;h++){const c=o[h];r(t.shapes,c)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const l=[];for(let o=0,h=this.material.length;o<h;o++)l.push(r(t.materials,this.material[o]));s.material=l}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let l=0;l<this.children.length;l++)s.children.push(this.children[l].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let l=0;l<this.animations.length;l++){const o=this.animations[l];s.animations.push(r(t.animations,o))}}if(e){const l=a(t.geometries),o=a(t.materials),h=a(t.textures),f=a(t.images),c=a(t.shapes),u=a(t.skeletons),d=a(t.animations),m=a(t.nodes);l.length>0&&(i.geometries=l),o.length>0&&(i.materials=o),h.length>0&&(i.textures=h),f.length>0&&(i.images=f),c.length>0&&(i.shapes=c),u.length>0&&(i.skeletons=u),d.length>0&&(i.animations=d),m.length>0&&(i.nodes=m)}return i.object=s,i;function a(l){const o=[];for(const h in l){const f=l[h];delete f.metadata,o.push(f)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}We.DEFAULT_UP=new L(0,1,0);We.DEFAULT_MATRIX_AUTO_UPDATE=!0;We.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ji=new L,gn=new L,Aa=new L,xn=new L,Es=new L,ws=new L,Sc=new L,Ra=new L,Ca=new L,La=new L,Pa=new Ee,Da=new Ee,Ia=new Ee;class Ii{constructor(t=new L,e=new L,i=new L){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),ji.subVectors(t,e),s.cross(ji);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){ji.subVectors(s,e),gn.subVectors(i,e),Aa.subVectors(t,e);const a=ji.dot(ji),l=ji.dot(gn),o=ji.dot(Aa),h=gn.dot(gn),f=gn.dot(Aa),c=a*h-l*l;if(c===0)return r.set(0,0,0),null;const u=1/c,d=(h*o-l*f)*u,m=(a*f-l*o)*u;return r.set(1-d-m,m,d)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,xn)===null?!1:xn.x>=0&&xn.y>=0&&xn.x+xn.y<=1}static getInterpolation(t,e,i,s,r,a,l,o){return this.getBarycoord(t,e,i,s,xn)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,xn.x),o.addScaledVector(a,xn.y),o.addScaledVector(l,xn.z),o)}static getInterpolatedAttribute(t,e,i,s,r,a){return Pa.setScalar(0),Da.setScalar(0),Ia.setScalar(0),Pa.fromBufferAttribute(t,e),Da.fromBufferAttribute(t,i),Ia.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(Pa,r.x),a.addScaledVector(Da,r.y),a.addScaledVector(Ia,r.z),a}static isFrontFacing(t,e,i,s){return ji.subVectors(i,e),gn.subVectors(t,e),ji.cross(gn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ji.subVectors(this.c,this.b),gn.subVectors(this.a,this.b),ji.cross(gn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Ii.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Ii.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return Ii.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return Ii.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Ii.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let a,l;Es.subVectors(s,i),ws.subVectors(r,i),Ra.subVectors(t,i);const o=Es.dot(Ra),h=ws.dot(Ra);if(o<=0&&h<=0)return e.copy(i);Ca.subVectors(t,s);const f=Es.dot(Ca),c=ws.dot(Ca);if(f>=0&&c<=f)return e.copy(s);const u=o*c-f*h;if(u<=0&&o>=0&&f<=0)return a=o/(o-f),e.copy(i).addScaledVector(Es,a);La.subVectors(t,r);const d=Es.dot(La),m=ws.dot(La);if(m>=0&&d<=m)return e.copy(r);const x=d*h-o*m;if(x<=0&&h>=0&&m<=0)return l=h/(h-m),e.copy(i).addScaledVector(ws,l);const g=f*m-d*c;if(g<=0&&c-f>=0&&d-m>=0)return Sc.subVectors(r,s),l=(c-f)/(c-f+(d-m)),e.copy(s).addScaledVector(Sc,l);const p=1/(g+x+u);return a=x*p,l=u*p,e.copy(i).addScaledVector(Es,a).addScaledVector(ws,l)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fn={h:0,s:0,l:0},Qr={h:0,s:0,l:0};function Ua(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class yt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=ti){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,ne.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=ne.workingColorSpace){return this.r=t,this.g=e,this.b=i,ne.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=ne.workingColorSpace){if(t=Xd(t,1),e=Si(e,0,1),i=Si(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=Ua(a,r,t+1/3),this.g=Ua(a,r,t),this.b=Ua(a,r,t-1/3)}return ne.toWorkingColorSpace(this,s),this}setStyle(t,e=ti){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const a=s[1],l=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(l))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=ti){const i=lu[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Tn(t.r),this.g=Tn(t.g),this.b=Tn(t.b),this}copyLinearToSRGB(t){return this.r=Bs(t.r),this.g=Bs(t.g),this.b=Bs(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=ti){return ne.fromWorkingColorSpace(hi.copy(this),t),Math.round(Si(hi.r*255,0,255))*65536+Math.round(Si(hi.g*255,0,255))*256+Math.round(Si(hi.b*255,0,255))}getHexString(t=ti){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=ne.workingColorSpace){ne.fromWorkingColorSpace(hi.copy(this),e);const i=hi.r,s=hi.g,r=hi.b,a=Math.max(i,s,r),l=Math.min(i,s,r);let o,h;const f=(l+a)/2;if(l===a)o=0,h=0;else{const c=a-l;switch(h=f<=.5?c/(a+l):c/(2-a-l),a){case i:o=(s-r)/c+(s<r?6:0);break;case s:o=(r-i)/c+2;break;case r:o=(i-s)/c+4;break}o/=6}return t.h=o,t.s=h,t.l=f,t}getRGB(t,e=ne.workingColorSpace){return ne.fromWorkingColorSpace(hi.copy(this),e),t.r=hi.r,t.g=hi.g,t.b=hi.b,t}getStyle(t=ti){ne.fromWorkingColorSpace(hi.copy(this),t);const e=hi.r,i=hi.g,s=hi.b;return t!==ti?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(Fn),this.setHSL(Fn.h+t,Fn.s+e,Fn.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(Fn),t.getHSL(Qr);const i=xa(Fn.h,Qr.h,e),s=xa(Fn.s,Qr.s,e),r=xa(Fn.l,Qr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const hi=new yt;yt.NAMES=lu;let lp=0;class Pn extends Js{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lp++}),this.uuid=Wn(),this.name="",this.blending=zs,this.side=Kn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=dl,this.blendDst=pl,this.blendEquation=rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=Gs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=oc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=gs,this.stencilZFail=gs,this.stencilZPass=gs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==zs&&(i.blending=this.blending),this.side!==Kn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==dl&&(i.blendSrc=this.blendSrc),this.blendDst!==pl&&(i.blendDst=this.blendDst),this.blendEquation!==rs&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==Gs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==oc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==gs&&(i.stencilFail=this.stencilFail),this.stencilZFail!==gs&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==gs&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const a=[];for(const l in r){const o=r[l];delete o.metadata,a.push(o)}return a}if(e){const r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Me extends Pn{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ke=new L,to=new It;class _i{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Zl,this.updateRanges=[],this.gpuType=Sn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)to.fromBufferAttribute(this,e),to.applyMatrix3(t),this.setXY(e,to.x,to.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix3(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyMatrix4(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.applyNormalMatrix(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)ke.fromBufferAttribute(this,e),ke.transformDirection(t),this.setXYZ(e,ke.x,ke.y,ke.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=an(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=an(e,this.array)),e}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=an(e,this.array)),e}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=an(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=an(e,this.array)),e}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Zl&&(t.usage=this.usage),t}}class hu extends _i{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class cu extends _i{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class be extends _i{constructor(t,e,i){super(new Float32Array(t),e,i)}}let hp=0;const ki=new Pe,Na=new We,Ts=new L,Ri=new Br,lr=new Br,Je=new L;class qe extends Js{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=Wn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(su(t)?cu:hu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new Yt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return ki.makeRotationFromQuaternion(t),this.applyMatrix4(ki),this}rotateX(t){return ki.makeRotationX(t),this.applyMatrix4(ki),this}rotateY(t){return ki.makeRotationY(t),this.applyMatrix4(ki),this}rotateZ(t){return ki.makeRotationZ(t),this.applyMatrix4(ki),this}translate(t,e,i){return ki.makeTranslation(t,e,i),this.applyMatrix4(ki),this}scale(t,e,i){return ki.makeScale(t,e,i),this.applyMatrix4(ki),this}lookAt(t){return Na.lookAt(t),Na.updateMatrix(),this.applyMatrix4(Na.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ts).negate(),this.translate(Ts.x,Ts.y,Ts.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new be(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Br);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ri.setFromBufferAttribute(r),this.morphTargetsRelative?(Je.addVectors(this.boundingBox.min,Ri.min),this.boundingBox.expandByPoint(Je),Je.addVectors(this.boundingBox.max,Ri.max),this.boundingBox.expandByPoint(Je)):(this.boundingBox.expandByPoint(Ri.min),this.boundingBox.expandByPoint(Ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new kr);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(t){const i=this.boundingSphere.center;if(Ri.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){const l=e[r];lr.setFromBufferAttribute(l),this.morphTargetsRelative?(Je.addVectors(Ri.min,lr.min),Ri.expandByPoint(Je),Je.addVectors(Ri.max,lr.max),Ri.expandByPoint(Je)):(Ri.expandByPoint(lr.min),Ri.expandByPoint(lr.max))}Ri.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Je.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Je));if(e)for(let r=0,a=e.length;r<a;r++){const l=e[r],o=this.morphTargetsRelative;for(let h=0,f=l.count;h<f;h++)Je.fromBufferAttribute(l,h),o&&(Ts.fromBufferAttribute(t,h),Je.add(Ts)),s=Math.max(s,i.distanceToSquared(Je))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new _i(new Float32Array(4*i.count),4));const a=this.getAttribute("tangent"),l=[],o=[];for(let C=0;C<i.count;C++)l[C]=new L,o[C]=new L;const h=new L,f=new L,c=new L,u=new It,d=new It,m=new It,x=new L,g=new L;function p(C,S,v){h.fromBufferAttribute(i,C),f.fromBufferAttribute(i,S),c.fromBufferAttribute(i,v),u.fromBufferAttribute(r,C),d.fromBufferAttribute(r,S),m.fromBufferAttribute(r,v),f.sub(h),c.sub(h),d.sub(u),m.sub(u);const R=1/(d.x*m.y-m.x*d.y);isFinite(R)&&(x.copy(f).multiplyScalar(m.y).addScaledVector(c,-d.y).multiplyScalar(R),g.copy(c).multiplyScalar(d.x).addScaledVector(f,-m.x).multiplyScalar(R),l[C].add(x),l[S].add(x),l[v].add(x),o[C].add(g),o[S].add(g),o[v].add(g))}let M=this.groups;M.length===0&&(M=[{start:0,count:t.count}]);for(let C=0,S=M.length;C<S;++C){const v=M[C],R=v.start,U=v.count;for(let N=R,H=R+U;N<H;N+=3)p(t.getX(N+0),t.getX(N+1),t.getX(N+2))}const y=new L,_=new L,P=new L,T=new L;function w(C){P.fromBufferAttribute(s,C),T.copy(P);const S=l[C];y.copy(S),y.sub(P.multiplyScalar(P.dot(S))).normalize(),_.crossVectors(T,S);const R=_.dot(o[C])<0?-1:1;a.setXYZW(C,y.x,y.y,y.z,R)}for(let C=0,S=M.length;C<S;++C){const v=M[C],R=v.start,U=v.count;for(let N=R,H=R+U;N<H;N+=3)w(t.getX(N+0)),w(t.getX(N+1)),w(t.getX(N+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new _i(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,d=i.count;u<d;u++)i.setXYZ(u,0,0,0);const s=new L,r=new L,a=new L,l=new L,o=new L,h=new L,f=new L,c=new L;if(t)for(let u=0,d=t.count;u<d;u+=3){const m=t.getX(u+0),x=t.getX(u+1),g=t.getX(u+2);s.fromBufferAttribute(e,m),r.fromBufferAttribute(e,x),a.fromBufferAttribute(e,g),f.subVectors(a,r),c.subVectors(s,r),f.cross(c),l.fromBufferAttribute(i,m),o.fromBufferAttribute(i,x),h.fromBufferAttribute(i,g),l.add(f),o.add(f),h.add(f),i.setXYZ(m,l.x,l.y,l.z),i.setXYZ(x,o.x,o.y,o.z),i.setXYZ(g,h.x,h.y,h.z)}else for(let u=0,d=e.count;u<d;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),f.subVectors(a,r),c.subVectors(s,r),f.cross(c),i.setXYZ(u+0,f.x,f.y,f.z),i.setXYZ(u+1,f.x,f.y,f.z),i.setXYZ(u+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Je.fromBufferAttribute(t,e),Je.normalize(),t.setXYZ(e,Je.x,Je.y,Je.z)}toNonIndexed(){function t(l,o){const h=l.array,f=l.itemSize,c=l.normalized,u=new h.constructor(o.length*f);let d=0,m=0;for(let x=0,g=o.length;x<g;x++){l.isInterleavedBufferAttribute?d=o[x]*l.data.stride+l.offset:d=o[x]*f;for(let p=0;p<f;p++)u[m++]=h[d++]}return new _i(u,f,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new qe,i=this.index.array,s=this.attributes;for(const l in s){const o=s[l],h=t(o,i);e.setAttribute(l,h)}const r=this.morphAttributes;for(const l in r){const o=[],h=r[l];for(let f=0,c=h.length;f<c;f++){const u=h[f],d=t(u,i);o.push(d)}e.morphAttributes[l]=o}e.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let l=0,o=a.length;l<o;l++){const h=a[l];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const h in o)o[h]!==void 0&&(t[h]=o[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const o in i){const h=i[o];t.data.attributes[o]=h.toJSON(t.data)}const s={};let r=!1;for(const o in this.morphAttributes){const h=this.morphAttributes[o],f=[];for(let c=0,u=h.length;c<u;c++){const d=h[c];f.push(d.toJSON(t.data))}f.length>0&&(s[o]=f,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));const l=this.boundingSphere;return l!==null&&(t.data.boundingSphere={center:l.center.toArray(),radius:l.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const h in s){const f=s[h];this.setAttribute(h,f.clone(e))}const r=t.morphAttributes;for(const h in r){const f=[],c=r[h];for(let u=0,d=c.length;u<d;u++)f.push(c[u].clone(e));this.morphAttributes[h]=f}this.morphTargetsRelative=t.morphTargetsRelative;const a=t.groups;for(let h=0,f=a.length;h<f;h++){const c=a[h];this.addGroup(c.start,c.count,c.materialIndex)}const l=t.boundingBox;l!==null&&(this.boundingBox=l.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const bc=new Pe,Qn=new Eh,eo=new kr,Ec=new L,io=new L,no=new L,so=new L,Oa=new L,ro=new L,wc=new L,oo=new L;class At extends We{constructor(t=new qe,e=new Me){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const l=this.morphTargetInfluences;if(r&&l){ro.set(0,0,0);for(let o=0,h=r.length;o<h;o++){const f=l[o],c=r[o];f!==0&&(Oa.fromBufferAttribute(c,t),a?ro.addScaledVector(Oa,f):ro.addScaledVector(Oa.sub(e),f))}e.add(ro)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),eo.copy(i.boundingSphere),eo.applyMatrix4(r),Qn.copy(t.ray).recast(t.near),!(eo.containsPoint(Qn.origin)===!1&&(Qn.intersectSphere(eo,Ec)===null||Qn.origin.distanceToSquared(Ec)>(t.far-t.near)**2))&&(bc.copy(r).invert(),Qn.copy(t.ray).applyMatrix4(bc),!(i.boundingBox!==null&&Qn.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Qn)))}_computeIntersections(t,e,i){let s;const r=this.geometry,a=this.material,l=r.index,o=r.attributes.position,h=r.attributes.uv,f=r.attributes.uv1,c=r.attributes.normal,u=r.groups,d=r.drawRange;if(l!==null)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(l.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,P=y;_<P;_+=3){const T=l.getX(_),w=l.getX(_+1),C=l.getX(_+2);s=ao(this,p,t,i,h,f,c,T,w,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(l.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=l.getX(g),y=l.getX(g+1),_=l.getX(g+2);s=ao(this,a,t,i,h,f,c,M,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}else if(o!==void 0)if(Array.isArray(a))for(let m=0,x=u.length;m<x;m++){const g=u[m],p=a[g.materialIndex],M=Math.max(g.start,d.start),y=Math.min(o.count,Math.min(g.start+g.count,d.start+d.count));for(let _=M,P=y;_<P;_+=3){const T=_,w=_+1,C=_+2;s=ao(this,p,t,i,h,f,c,T,w,C),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,e.push(s))}}else{const m=Math.max(0,d.start),x=Math.min(o.count,d.start+d.count);for(let g=m,p=x;g<p;g+=3){const M=g,y=g+1,_=g+2;s=ao(this,a,t,i,h,f,c,M,y,_),s&&(s.faceIndex=Math.floor(g/3),e.push(s))}}}}function cp(n,t,e,i,s,r,a,l){let o;if(t.side===gi?o=i.intersectTriangle(a,r,s,!0,l):o=i.intersectTriangle(s,r,a,t.side===Kn,l),o===null)return null;oo.copy(l),oo.applyMatrix4(n.matrixWorld);const h=e.ray.origin.distanceTo(oo);return h<e.near||h>e.far?null:{distance:h,point:oo.clone(),object:n}}function ao(n,t,e,i,s,r,a,l,o,h){n.getVertexPosition(l,io),n.getVertexPosition(o,no),n.getVertexPosition(h,so);const f=cp(n,t,e,i,io,no,so,wc);if(f){const c=new L;Ii.getBarycoord(wc,io,no,so,c),s&&(f.uv=Ii.getInterpolatedAttribute(s,l,o,h,c,new It)),r&&(f.uv1=Ii.getInterpolatedAttribute(r,l,o,h,c,new It)),a&&(f.normal=Ii.getInterpolatedAttribute(a,l,o,h,c,new L),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const u={a:l,b:o,c:h,normal:new L,materialIndex:0};Ii.getNormal(io,no,so,u.normal),f.face=u,f.barycoord=c}return f}class Jt extends qe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};const l=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const o=[],h=[],f=[],c=[];let u=0,d=0;m("z","y","x",-1,-1,i,e,t,a,r,0),m("z","y","x",1,-1,i,e,-t,a,r,1),m("x","z","y",1,1,t,i,e,s,a,2),m("x","z","y",1,-1,t,i,-e,s,a,3),m("x","y","z",1,-1,t,e,i,s,r,4),m("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(o),this.setAttribute("position",new be(h,3)),this.setAttribute("normal",new be(f,3)),this.setAttribute("uv",new be(c,2));function m(x,g,p,M,y,_,P,T,w,C,S){const v=_/w,R=P/C,U=_/2,N=P/2,H=T/2,$=w+1,q=C+1;let Y=0,V=0;const it=new L;for(let rt=0;rt<q;rt++){const xt=rt*R-N;for(let Wt=0;Wt<$;Wt++){const fe=Wt*v-U;it[x]=fe*M,it[g]=xt*y,it[p]=H,h.push(it.x,it.y,it.z),it[x]=0,it[g]=0,it[p]=T>0?1:-1,f.push(it.x,it.y,it.z),c.push(Wt/w),c.push(1-rt/C),Y+=1}}for(let rt=0;rt<C;rt++)for(let xt=0;xt<w;xt++){const Wt=u+xt+$*rt,fe=u+xt+$*(rt+1),j=u+(xt+1)+$*(rt+1),ot=u+(xt+1)+$*rt;o.push(Wt,fe,ot),o.push(fe,j,ot),V+=6}l.addGroup(d,V,S),d+=V,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Jt(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ys(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function pi(n){const t={};for(let e=0;e<n.length;e++){const i=Ys(n[e]);for(const s in i)t[s]=i[s]}return t}function fp(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function fu(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:ne.workingColorSpace}const Lr={clone:Ys,merge:pi};var up=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,dp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fi extends Pn{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=up,this.fragmentShader=dp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ys(t.uniforms),this.uniformsGroups=fp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class uu extends We{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Pe,this.projectionMatrix=new Pe,this.projectionMatrixInverse=new Pe,this.coordinateSystem=bn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Bn=new L,Tc=new It,Ac=new It;class Pi extends uu{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jl*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Oo*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jl*2*Math.atan(Math.tan(Oo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){Bn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z),Bn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(Bn.x,Bn.y).multiplyScalar(-t/Bn.z)}getViewSize(t,e){return this.getViewBounds(t,Tc,Ac),e.subVectors(Ac,Tc)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Oo*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const o=a.fullWidth,h=a.fullHeight;r+=a.offsetX*s/o,e-=a.offsetY*i/h,s*=a.width/o,i*=a.height/h}const l=this.filmOffset;l!==0&&(r+=t*l/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const As=-90,Rs=1;class pp extends We{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Pi(As,Rs,t,e);s.layers=this.layers,this.add(s);const r=new Pi(As,Rs,t,e);r.layers=this.layers,this.add(r);const a=new Pi(As,Rs,t,e);a.layers=this.layers,this.add(a);const l=new Pi(As,Rs,t,e);l.layers=this.layers,this.add(l);const o=new Pi(As,Rs,t,e);o.layers=this.layers,this.add(o);const h=new Pi(As,Rs,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,l,o]=e;for(const h of e)this.remove(h);if(t===bn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),l.up.set(0,1,0),l.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===Go)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),l.up.set(0,-1,0),l.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,a,l,o,h,f]=this.children,c=t.getRenderTarget(),u=t.getActiveCubeFace(),d=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,a),t.setRenderTarget(i,2,s),t.render(e,l),t.setRenderTarget(i,3,s),t.render(e,o),t.setRenderTarget(i,4,s),t.render(e,h),i.texture.generateMipmaps=x,t.setRenderTarget(i,5,s),t.render(e,f),t.setRenderTarget(c,u,d),t.xr.enabled=m,i.texture.needsPMREMUpdate=!0}}class du extends xi{constructor(t,e,i,s,r,a,l,o,h,f){t=t!==void 0?t:[],e=e!==void 0?e:Vs,super(t,e,i,s,r,a,l,o,h,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class mp extends Wi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new du(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Vi}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Jt(5,5,5),r=new fi({name:"CubemapFromEquirect",uniforms:Ys(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:gi,blending:En});r.uniforms.tEquirect.value=e;const a=new At(s,r),l=e.minFilter;return e.minFilter===yn&&(e.minFilter=Vi),new pp(1,10,this).update(t,a),e.minFilter=l,a.geometry.dispose(),a.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}}const za=new L,gp=new L,xp=new Yt;class ns{constructor(t=new L(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=za.subVectors(i,e).cross(gp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(za),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||xp.getNormalMatrix(t),s=this.coplanarPoint(za).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ts=new kr,lo=new L;class wh{constructor(t=new ns,e=new ns,i=new ns,s=new ns,r=new ns,a=new ns){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){const l=this.planes;return l[0].copy(t),l[1].copy(e),l[2].copy(i),l[3].copy(s),l[4].copy(r),l[5].copy(a),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=bn){const i=this.planes,s=t.elements,r=s[0],a=s[1],l=s[2],o=s[3],h=s[4],f=s[5],c=s[6],u=s[7],d=s[8],m=s[9],x=s[10],g=s[11],p=s[12],M=s[13],y=s[14],_=s[15];if(i[0].setComponents(o-r,u-h,g-d,_-p).normalize(),i[1].setComponents(o+r,u+h,g+d,_+p).normalize(),i[2].setComponents(o+a,u+f,g+m,_+M).normalize(),i[3].setComponents(o-a,u-f,g-m,_-M).normalize(),i[4].setComponents(o-l,u-c,g-x,_-y).normalize(),e===bn)i[5].setComponents(o+l,u+c,g+x,_+y).normalize();else if(e===Go)i[5].setComponents(l,c,x,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),ts.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),ts.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(ts)}intersectsSprite(t){return ts.center.set(0,0,0),ts.radius=.7071067811865476,ts.applyMatrix4(t.matrixWorld),this.intersectsSphere(ts)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(lo.x=s.normal.x>0?t.max.x:t.min.x,lo.y=s.normal.y>0?t.max.y:t.min.y,lo.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(lo)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function pu(){let n=null,t=!1,e=null,i=null;function s(r,a){e(r,a),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function _p(n){const t=new WeakMap;function e(l,o){const h=l.array,f=l.usage,c=h.byteLength,u=n.createBuffer();n.bindBuffer(o,u),n.bufferData(o,h,f),l.onUploadCallback();let d;if(h instanceof Float32Array)d=n.FLOAT;else if(h instanceof Uint16Array)l.isFloat16BufferAttribute?d=n.HALF_FLOAT:d=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)d=n.SHORT;else if(h instanceof Uint32Array)d=n.UNSIGNED_INT;else if(h instanceof Int32Array)d=n.INT;else if(h instanceof Int8Array)d=n.BYTE;else if(h instanceof Uint8Array)d=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)d=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:u,type:d,bytesPerElement:h.BYTES_PER_ELEMENT,version:l.version,size:c}}function i(l,o,h){const f=o.array,c=o.updateRanges;if(n.bindBuffer(h,l),c.length===0)n.bufferSubData(h,0,f);else{c.sort((d,m)=>d.start-m.start);let u=0;for(let d=1;d<c.length;d++){const m=c[u],x=c[d];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++u,c[u]=x)}c.length=u+1;for(let d=0,m=c.length;d<m;d++){const x=c[d];n.bufferSubData(h,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}o.clearUpdateRanges()}o.onUploadCallback()}function s(l){return l.isInterleavedBufferAttribute&&(l=l.data),t.get(l)}function r(l){l.isInterleavedBufferAttribute&&(l=l.data);const o=t.get(l);o&&(n.deleteBuffer(o.buffer),t.delete(l))}function a(l,o){if(l.isInterleavedBufferAttribute&&(l=l.data),l.isGLBufferAttribute){const f=t.get(l);(!f||f.version<l.version)&&t.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}const h=t.get(l);if(h===void 0)t.set(l,e(l,o));else if(h.version<l.version){if(h.size!==l.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(h.buffer,l,o),h.version=l.version}}return{get:s,remove:r,update:a}}class An extends qe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,a=e/2,l=Math.floor(i),o=Math.floor(s),h=l+1,f=o+1,c=t/l,u=e/o,d=[],m=[],x=[],g=[];for(let p=0;p<f;p++){const M=p*u-a;for(let y=0;y<h;y++){const _=y*c-r;m.push(_,-M,0),x.push(0,0,1),g.push(y/l),g.push(1-p/o)}}for(let p=0;p<o;p++)for(let M=0;M<l;M++){const y=M+h*p,_=M+h*(p+1),P=M+1+h*(p+1),T=M+1+h*p;d.push(y,_,T),d.push(_,P,T)}this.setIndex(d),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.widthSegments,t.heightSegments)}}var vp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Mp=`#ifdef USE_ALPHAHASH
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
#endif`,yp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ep=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,wp=`#ifdef USE_AOMAP
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
#endif`,Tp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ap=`#ifdef USE_BATCHING
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
#endif`,Rp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cp=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Pp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Dp=`#ifdef USE_IRIDESCENCE
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
#endif`,Ip=`#ifdef USE_BUMPMAP
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
#endif`,Up=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Np=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Fp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Bp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Gp=`#define PI 3.141592653589793
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
} // validated`,Vp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wp=`vec3 transformedNormal = objectNormal;
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
#endif`,Xp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Yp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,$p="gl_FragColor = linearToOutputTexel( gl_FragColor );",jp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zp=`#ifdef USE_ENVMAP
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
#endif`,Jp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qp=`#ifdef USE_ENVMAP
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
#endif`,t0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,e0=`#ifdef USE_ENVMAP
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
#endif`,i0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,n0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,s0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,r0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,o0=`#ifdef USE_GRADIENTMAP
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
}`,a0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,l0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,h0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,c0=`uniform bool receiveShadow;
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
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,u0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,d0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,p0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,m0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,g0=`PhysicalMaterial material;
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
#endif`,x0=`struct PhysicalMaterial {
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
}`,_0=`
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
#endif`,v0=`#if defined( RE_IndirectDiffuse )
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
#endif`,M0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,y0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,S0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,b0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,E0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,w0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,T0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,A0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,R0=`#if defined( USE_POINTS_UV )
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
#endif`,C0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,L0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,P0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,D0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,I0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,U0=`#ifdef USE_MORPHTARGETS
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
#endif`,N0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,O0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,z0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,F0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,B0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,k0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,H0=`#ifdef USE_NORMALMAP
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
#endif`,G0=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,V0=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,W0=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,X0=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,q0=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Y0=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,K0=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$0=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,j0=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Z0=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,J0=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Q0=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,im=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,nm=`float getShadowMask() {
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
}`,sm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,rm=`#ifdef USE_SKINNING
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
#endif`,om=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,am=`#ifdef USE_SKINNING
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
#endif`,lm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,hm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,cm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,um=`#ifdef USE_TRANSMISSION
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
#endif`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,pm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,mm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const _m=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vm=`uniform sampler2D t2D;
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
}`,Mm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,ym=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Sm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Em=`#include <common>
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
}`,wm=`#if DEPTH_PACKING == 3200
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
}`,Tm=`#define DISTANCE
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
}`,Am=`#define DISTANCE
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
}`,Rm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Cm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Lm=`uniform float scale;
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
}`,Pm=`uniform vec3 diffuse;
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
}`,Dm=`#include <common>
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
}`,Im=`uniform vec3 diffuse;
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
}`,Um=`#define LAMBERT
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
}`,Nm=`#define LAMBERT
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
}`,Om=`#define MATCAP
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
}`,zm=`#define MATCAP
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
}`,Fm=`#define NORMAL
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
}`,Bm=`#define NORMAL
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
}`,km=`#define PHONG
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
}`,Hm=`#define PHONG
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
}`,Gm=`#define STANDARD
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
}`,Vm=`#define STANDARD
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
}`,Wm=`#define TOON
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
}`,Xm=`#define TOON
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
}`,qm=`uniform float size;
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
}`,Ym=`uniform vec3 diffuse;
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
}`,Km=`#include <common>
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
}`,$m=`uniform vec3 color;
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
}`,jm=`uniform float rotation;
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
}`,Zm=`uniform vec3 diffuse;
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
}`,jt={alphahash_fragment:vp,alphahash_pars_fragment:Mp,alphamap_fragment:yp,alphamap_pars_fragment:Sp,alphatest_fragment:bp,alphatest_pars_fragment:Ep,aomap_fragment:wp,aomap_pars_fragment:Tp,batching_pars_vertex:Ap,batching_vertex:Rp,begin_vertex:Cp,beginnormal_vertex:Lp,bsdfs:Pp,iridescence_fragment:Dp,bumpmap_pars_fragment:Ip,clipping_planes_fragment:Up,clipping_planes_pars_fragment:Np,clipping_planes_pars_vertex:Op,clipping_planes_vertex:zp,color_fragment:Fp,color_pars_fragment:Bp,color_pars_vertex:kp,color_vertex:Hp,common:Gp,cube_uv_reflection_fragment:Vp,defaultnormal_vertex:Wp,displacementmap_pars_vertex:Xp,displacementmap_vertex:qp,emissivemap_fragment:Yp,emissivemap_pars_fragment:Kp,colorspace_fragment:$p,colorspace_pars_fragment:jp,envmap_fragment:Zp,envmap_common_pars_fragment:Jp,envmap_pars_fragment:Qp,envmap_pars_vertex:t0,envmap_physical_pars_fragment:f0,envmap_vertex:e0,fog_vertex:i0,fog_pars_vertex:n0,fog_fragment:s0,fog_pars_fragment:r0,gradientmap_pars_fragment:o0,lightmap_pars_fragment:a0,lights_lambert_fragment:l0,lights_lambert_pars_fragment:h0,lights_pars_begin:c0,lights_toon_fragment:u0,lights_toon_pars_fragment:d0,lights_phong_fragment:p0,lights_phong_pars_fragment:m0,lights_physical_fragment:g0,lights_physical_pars_fragment:x0,lights_fragment_begin:_0,lights_fragment_maps:v0,lights_fragment_end:M0,logdepthbuf_fragment:y0,logdepthbuf_pars_fragment:S0,logdepthbuf_pars_vertex:b0,logdepthbuf_vertex:E0,map_fragment:w0,map_pars_fragment:T0,map_particle_fragment:A0,map_particle_pars_fragment:R0,metalnessmap_fragment:C0,metalnessmap_pars_fragment:L0,morphinstance_vertex:P0,morphcolor_vertex:D0,morphnormal_vertex:I0,morphtarget_pars_vertex:U0,morphtarget_vertex:N0,normal_fragment_begin:O0,normal_fragment_maps:z0,normal_pars_fragment:F0,normal_pars_vertex:B0,normal_vertex:k0,normalmap_pars_fragment:H0,clearcoat_normal_fragment_begin:G0,clearcoat_normal_fragment_maps:V0,clearcoat_pars_fragment:W0,iridescence_pars_fragment:X0,opaque_fragment:q0,packing:Y0,premultiplied_alpha_fragment:K0,project_vertex:$0,dithering_fragment:j0,dithering_pars_fragment:Z0,roughnessmap_fragment:J0,roughnessmap_pars_fragment:Q0,shadowmap_pars_fragment:tm,shadowmap_pars_vertex:em,shadowmap_vertex:im,shadowmask_pars_fragment:nm,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:om,skinnormal_vertex:am,specularmap_fragment:lm,specularmap_pars_fragment:hm,tonemapping_fragment:cm,tonemapping_pars_fragment:fm,transmission_fragment:um,transmission_pars_fragment:dm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:xm,background_vert:_m,background_frag:vm,backgroundCube_vert:Mm,backgroundCube_frag:ym,cube_vert:Sm,cube_frag:bm,depth_vert:Em,depth_frag:wm,distanceRGBA_vert:Tm,distanceRGBA_frag:Am,equirect_vert:Rm,equirect_frag:Cm,linedashed_vert:Lm,linedashed_frag:Pm,meshbasic_vert:Dm,meshbasic_frag:Im,meshlambert_vert:Um,meshlambert_frag:Nm,meshmatcap_vert:Om,meshmatcap_frag:zm,meshnormal_vert:Fm,meshnormal_frag:Bm,meshphong_vert:km,meshphong_frag:Hm,meshphysical_vert:Gm,meshphysical_frag:Vm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:qm,points_frag:Ym,shadow_vert:Km,shadow_frag:$m,sprite_vert:jm,sprite_frag:Zm},ct={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Yt}},envmap:{envMap:{value:null},envMapRotation:{value:new Yt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Yt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Yt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Yt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Yt},normalScale:{value:new It(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Yt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Yt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Yt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Yt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0},uvTransform:{value:new Yt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new It(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Yt},alphaMap:{value:null},alphaMapTransform:{value:new Yt},alphaTest:{value:0}}},on={basic:{uniforms:pi([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.fog]),vertexShader:jt.meshbasic_vert,fragmentShader:jt.meshbasic_frag},lambert:{uniforms:pi([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new yt(0)}}]),vertexShader:jt.meshlambert_vert,fragmentShader:jt.meshlambert_frag},phong:{uniforms:pi([ct.common,ct.specularmap,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,ct.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30}}]),vertexShader:jt.meshphong_vert,fragmentShader:jt.meshphong_frag},standard:{uniforms:pi([ct.common,ct.envmap,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.roughnessmap,ct.metalnessmap,ct.fog,ct.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag},toon:{uniforms:pi([ct.common,ct.aomap,ct.lightmap,ct.emissivemap,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.gradientmap,ct.fog,ct.lights,{emissive:{value:new yt(0)}}]),vertexShader:jt.meshtoon_vert,fragmentShader:jt.meshtoon_frag},matcap:{uniforms:pi([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,ct.fog,{matcap:{value:null}}]),vertexShader:jt.meshmatcap_vert,fragmentShader:jt.meshmatcap_frag},points:{uniforms:pi([ct.points,ct.fog]),vertexShader:jt.points_vert,fragmentShader:jt.points_frag},dashed:{uniforms:pi([ct.common,ct.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:jt.linedashed_vert,fragmentShader:jt.linedashed_frag},depth:{uniforms:pi([ct.common,ct.displacementmap]),vertexShader:jt.depth_vert,fragmentShader:jt.depth_frag},normal:{uniforms:pi([ct.common,ct.bumpmap,ct.normalmap,ct.displacementmap,{opacity:{value:1}}]),vertexShader:jt.meshnormal_vert,fragmentShader:jt.meshnormal_frag},sprite:{uniforms:pi([ct.sprite,ct.fog]),vertexShader:jt.sprite_vert,fragmentShader:jt.sprite_frag},background:{uniforms:{uvTransform:{value:new Yt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:jt.background_vert,fragmentShader:jt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Yt}},vertexShader:jt.backgroundCube_vert,fragmentShader:jt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:jt.cube_vert,fragmentShader:jt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:jt.equirect_vert,fragmentShader:jt.equirect_frag},distanceRGBA:{uniforms:pi([ct.common,ct.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:jt.distanceRGBA_vert,fragmentShader:jt.distanceRGBA_frag},shadow:{uniforms:pi([ct.lights,ct.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:jt.shadow_vert,fragmentShader:jt.shadow_frag}};on.physical={uniforms:pi([on.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Yt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Yt},clearcoatNormalScale:{value:new It(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Yt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Yt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Yt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Yt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Yt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Yt},transmissionSamplerSize:{value:new It},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Yt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Yt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Yt},anisotropyVector:{value:new It},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Yt}}]),vertexShader:jt.meshphysical_vert,fragmentShader:jt.meshphysical_frag};const ho={r:0,b:0,g:0},es=new nn,Jm=new Pe;function Qm(n,t,e,i,s,r,a){const l=new yt(0);let o=r===!0?0:1,h,f,c=null,u=0,d=null;function m(M){let y=M.isScene===!0?M.background:null;return y&&y.isTexture&&(y=(M.backgroundBlurriness>0?e:t).get(y)),y}function x(M){let y=!1;const _=m(M);_===null?p(l,o):_&&_.isColor&&(p(_,1),y=!0);const P=n.xr.getEnvironmentBlendMode();P==="additive"?i.buffers.color.setClear(0,0,0,1,a):P==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,a),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function g(M,y){const _=m(y);_&&(_.isCubeTexture||_.mapping===oa)?(f===void 0&&(f=new At(new Jt(1,1,1),new fi({name:"BackgroundCubeMaterial",uniforms:Ys(on.backgroundCube.uniforms),vertexShader:on.backgroundCube.vertexShader,fragmentShader:on.backgroundCube.fragmentShader,side:gi,depthTest:!1,depthWrite:!1,fog:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(P,T,w){this.matrixWorld.copyPosition(w.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(f)),es.copy(y.backgroundRotation),es.x*=-1,es.y*=-1,es.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(es.y*=-1,es.z*=-1),f.material.uniforms.envMap.value=_,f.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(es)),f.material.toneMapped=ne.getTransfer(_.colorSpace)!==_e,(c!==_||u!==_.version||d!==n.toneMapping)&&(f.material.needsUpdate=!0,c=_,u=_.version,d=n.toneMapping),f.layers.enableAll(),M.unshift(f,f.geometry,f.material,0,0,null)):_&&_.isTexture&&(h===void 0&&(h=new At(new An(2,2),new fi({name:"BackgroundMaterial",uniforms:Ys(on.background.uniforms),vertexShader:on.background.vertexShader,fragmentShader:on.background.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(h)),h.material.uniforms.t2D.value=_,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.toneMapped=ne.getTransfer(_.colorSpace)!==_e,_.matrixAutoUpdate===!0&&_.updateMatrix(),h.material.uniforms.uvTransform.value.copy(_.matrix),(c!==_||u!==_.version||d!==n.toneMapping)&&(h.material.needsUpdate=!0,c=_,u=_.version,d=n.toneMapping),h.layers.enableAll(),M.unshift(h,h.geometry,h.material,0,0,null))}function p(M,y){M.getRGB(ho,fu(n)),i.buffers.color.setClear(ho.r,ho.g,ho.b,y,a)}return{getClearColor:function(){return l},setClearColor:function(M,y=1){l.set(M),o=y,p(l,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,p(l,o)},render:x,addToRenderList:g}}function tg(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null);let r=s,a=!1;function l(v,R,U,N,H){let $=!1;const q=c(N,U,R);r!==q&&(r=q,h(r.object)),$=d(v,N,U,H),$&&m(v,N,U,H),H!==null&&t.update(H,n.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(v,R,U,N),H!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(H).buffer))}function o(){return n.createVertexArray()}function h(v){return n.bindVertexArray(v)}function f(v){return n.deleteVertexArray(v)}function c(v,R,U){const N=U.wireframe===!0;let H=i[v.id];H===void 0&&(H={},i[v.id]=H);let $=H[R.id];$===void 0&&($={},H[R.id]=$);let q=$[N];return q===void 0&&(q=u(o()),$[N]=q),q}function u(v){const R=[],U=[],N=[];for(let H=0;H<e;H++)R[H]=0,U[H]=0,N[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:R,enabledAttributes:U,attributeDivisors:N,object:v,attributes:{},index:null}}function d(v,R,U,N){const H=r.attributes,$=R.attributes;let q=0;const Y=U.getAttributes();for(const V in Y)if(Y[V].location>=0){const rt=H[V];let xt=$[V];if(xt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(xt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(xt=v.instanceColor)),rt===void 0||rt.attribute!==xt||xt&&rt.data!==xt.data)return!0;q++}return r.attributesNum!==q||r.index!==N}function m(v,R,U,N){const H={},$=R.attributes;let q=0;const Y=U.getAttributes();for(const V in Y)if(Y[V].location>=0){let rt=$[V];rt===void 0&&(V==="instanceMatrix"&&v.instanceMatrix&&(rt=v.instanceMatrix),V==="instanceColor"&&v.instanceColor&&(rt=v.instanceColor));const xt={};xt.attribute=rt,rt&&rt.data&&(xt.data=rt.data),H[V]=xt,q++}r.attributes=H,r.attributesNum=q,r.index=N}function x(){const v=r.newAttributes;for(let R=0,U=v.length;R<U;R++)v[R]=0}function g(v){p(v,0)}function p(v,R){const U=r.newAttributes,N=r.enabledAttributes,H=r.attributeDivisors;U[v]=1,N[v]===0&&(n.enableVertexAttribArray(v),N[v]=1),H[v]!==R&&(n.vertexAttribDivisor(v,R),H[v]=R)}function M(){const v=r.newAttributes,R=r.enabledAttributes;for(let U=0,N=R.length;U<N;U++)R[U]!==v[U]&&(n.disableVertexAttribArray(U),R[U]=0)}function y(v,R,U,N,H,$,q){q===!0?n.vertexAttribIPointer(v,R,U,H,$):n.vertexAttribPointer(v,R,U,N,H,$)}function _(v,R,U,N){x();const H=N.attributes,$=U.getAttributes(),q=R.defaultAttributeValues;for(const Y in $){const V=$[Y];if(V.location>=0){let it=H[Y];if(it===void 0&&(Y==="instanceMatrix"&&v.instanceMatrix&&(it=v.instanceMatrix),Y==="instanceColor"&&v.instanceColor&&(it=v.instanceColor)),it!==void 0){const rt=it.normalized,xt=it.itemSize,Wt=t.get(it);if(Wt===void 0)continue;const fe=Wt.buffer,j=Wt.type,ot=Wt.bytesPerElement,St=j===n.INT||j===n.UNSIGNED_INT||it.gpuType===xh;if(it.isInterleavedBufferAttribute){const ft=it.data,Pt=ft.stride,Ot=it.offset;if(ft.isInstancedInterleavedBuffer){for(let Ut=0;Ut<V.locationSize;Ut++)p(V.location+Ut,ft.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let Ut=0;Ut<V.locationSize;Ut++)g(V.location+Ut);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let Ut=0;Ut<V.locationSize;Ut++)y(V.location+Ut,xt/V.locationSize,j,rt,Pt*ot,(Ot+xt/V.locationSize*Ut)*ot,St)}else{if(it.isInstancedBufferAttribute){for(let ft=0;ft<V.locationSize;ft++)p(V.location+ft,it.meshPerAttribute);v.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let ft=0;ft<V.locationSize;ft++)g(V.location+ft);n.bindBuffer(n.ARRAY_BUFFER,fe);for(let ft=0;ft<V.locationSize;ft++)y(V.location+ft,xt/V.locationSize,j,rt,xt*ot,xt/V.locationSize*ft*ot,St)}}else if(q!==void 0){const rt=q[Y];if(rt!==void 0)switch(rt.length){case 2:n.vertexAttrib2fv(V.location,rt);break;case 3:n.vertexAttrib3fv(V.location,rt);break;case 4:n.vertexAttrib4fv(V.location,rt);break;default:n.vertexAttrib1fv(V.location,rt)}}}}M()}function P(){C();for(const v in i){const R=i[v];for(const U in R){const N=R[U];for(const H in N)f(N[H].object),delete N[H];delete R[U]}delete i[v]}}function T(v){if(i[v.id]===void 0)return;const R=i[v.id];for(const U in R){const N=R[U];for(const H in N)f(N[H].object),delete N[H];delete R[U]}delete i[v.id]}function w(v){for(const R in i){const U=i[R];if(U[v.id]===void 0)continue;const N=U[v.id];for(const H in N)f(N[H].object),delete N[H];delete U[v.id]}}function C(){S(),a=!0,r!==s&&(r=s,h(r.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:l,reset:C,resetDefaultState:S,dispose:P,releaseStatesOfGeometry:T,releaseStatesOfProgram:w,initAttributes:x,enableAttribute:g,disableUnusedAttributes:M}}function eg(n,t,e){let i;function s(h){i=h}function r(h,f){n.drawArrays(i,h,f),e.update(f,i,1)}function a(h,f,c){c!==0&&(n.drawArraysInstanced(i,h,f,c),e.update(f,i,c))}function l(h,f,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,h,0,f,0,c);let d=0;for(let m=0;m<c;m++)d+=f[m];e.update(d,i,1)}function o(h,f,c,u){if(c===0)return;const d=t.get("WEBGL_multi_draw");if(d===null)for(let m=0;m<h.length;m++)a(h[m],f[m],u[m]);else{d.multiDrawArraysInstancedWEBGL(i,h,0,f,0,u,0,c);let m=0;for(let x=0;x<c;x++)m+=f[x]*u[x];e.update(m,i,1)}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=l,this.renderMultiDrawInstances=o}function ig(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const w=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(w){return!(w!==Qi&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function l(w){const C=w===ln&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(w!==Cn&&i.convert(w)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&w!==Sn&&!C)}function o(w){if(w==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";w="mediump"}return w==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const f=o(h);f!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",f,"instead."),h=f);const c=e.logarithmicDepthBuffer===!0,u=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),g=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),M=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),y=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:a,textureTypeReadable:l,precision:h,logarithmicDepthBuffer:c,reverseDepthBuffer:u,maxTextures:d,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:p,maxVertexUniforms:M,maxVaryings:y,maxFragmentUniforms:_,vertexTextures:P,maxSamples:T}}function ng(n){const t=this;let e=null,i=0,s=!1,r=!1;const a=new ns,l=new Yt,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(c,u){const d=c.length!==0||u||i!==0||s;return s=u,i=c.length,d},this.beginShadows=function(){r=!0,f(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,u){e=f(c,u,0)},this.setState=function(c,u,d){const m=c.clippingPlanes,x=c.clipIntersection,g=c.clipShadows,p=n.get(c);if(!s||m===null||m.length===0||r&&!g)r?f(null):h();else{const M=r?0:i,y=M*4;let _=p.clippingState||null;o.value=_,_=f(m,u,y,d);for(let P=0;P!==y;++P)_[P]=e[P];p.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=M}};function h(){o.value!==e&&(o.value=e,o.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function f(c,u,d,m){const x=c!==null?c.length:0;let g=null;if(x!==0){if(g=o.value,m!==!0||g===null){const p=d+x*4,M=u.matrixWorldInverse;l.getNormalMatrix(M),(g===null||g.length<p)&&(g=new Float32Array(p));for(let y=0,_=d;y!==x;++y,_+=4)a.copy(c[y]).applyMatrix4(M,l),a.normal.toArray(g,_),g[_+3]=a.constant}o.value=g,o.needsUpdate=!0}return t.numPlanes=x,t.numIntersection=0,g}}function sg(n){let t=new WeakMap;function e(a,l){return l===Sl?a.mapping=Vs:l===bl&&(a.mapping=Ws),a}function i(a){if(a&&a.isTexture){const l=a.mapping;if(l===Sl||l===bl)if(t.has(a)){const o=t.get(a).texture;return e(o,a.mapping)}else{const o=a.image;if(o&&o.height>0){const h=new mp(o.height);return h.fromEquirectangularTexture(n,a),t.set(a,h),a.addEventListener("dispose",s),e(h.texture,a.mapping)}else return null}}return a}function s(a){const l=a.target;l.removeEventListener("dispose",s);const o=t.get(l);o!==void 0&&(t.delete(l),o.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Th extends uu{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,a=i+t,l=s+e,o=s-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=h*this.view.offsetX,a=r+h*this.view.width,l-=f*this.view.offsetY,o=l-f*this.view.height}this.projectionMatrix.makeOrthographic(r,a,l,o,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const Os=4,Rc=[.125,.215,.35,.446,.526,.582],os=20,Fa=new Th,Cc=new yt;let Ba=null,ka=0,Ha=0,Ga=!1;const ss=(1+Math.sqrt(5))/2,Cs=1/ss,Lc=[new L(-ss,Cs,0),new L(ss,Cs,0),new L(-Cs,0,ss),new L(Cs,0,ss),new L(0,ss,-Cs),new L(0,ss,Cs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Pc{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Uc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ic(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ba,ka,Ha),this._renderer.xr.enabled=Ga,t.scissorTest=!1,co(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Vs||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ba=this._renderer.getRenderTarget(),ka=this._renderer.getActiveCubeFace(),Ha=this._renderer.getActiveMipmapLevel(),Ga=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Vi,minFilter:Vi,generateMipmaps:!1,type:ln,format:Qi,colorSpace:Zs,depthBuffer:!1},s=Dc(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Dc(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(r)),this._blurMaterial=og(r,t,e)}return s}_compileMaterial(t){const e=new At(this._lodPlanes[0],t);this._renderer.compile(e,Fa)}_sceneToCubeUV(t,e,i,s){const l=new Pi(90,1,e,i),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],f=this._renderer,c=f.autoClear,u=f.toneMapping;f.getClearColor(Cc),f.toneMapping=wn,f.autoClear=!1;const d=new Me({name:"PMREM.Background",side:gi,depthWrite:!1,depthTest:!1}),m=new At(new Jt,d);let x=!1;const g=t.background;g?g.isColor&&(d.color.copy(g),t.background=null,x=!0):(d.color.copy(Cc),x=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(l.up.set(0,o[p],0),l.lookAt(h[p],0,0)):M===1?(l.up.set(0,0,o[p]),l.lookAt(0,h[p],0)):(l.up.set(0,o[p],0),l.lookAt(0,0,h[p]));const y=this._cubeSize;co(s,M*y,p>2?y:0,y,y),f.setRenderTarget(s),x&&f.render(m,l),f.render(t,l)}m.geometry.dispose(),m.material.dispose(),f.toneMapping=u,f.autoClear=c,t.background=g}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===Vs||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Uc()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ic());const r=s?this._cubemapMaterial:this._equirectMaterial,a=new At(this._lodPlanes[0],r),l=r.uniforms;l.envMap.value=t;const o=this._cubeSize;co(e,0,0,3*o,2*o),i.setRenderTarget(e),i.render(a,Fa)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),l=Lc[(s-r-1)%Lc.length];this._blur(t,r-1,r,a,l)}e.autoClear=i}_blur(t,e,i,s,r){const a=this._pingPongRenderTarget;this._halfBlur(t,a,e,i,s,"latitudinal",r),this._halfBlur(a,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,a,l){const o=this._renderer,h=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const f=3,c=new At(this._lodPlanes[s],h),u=h.uniforms,d=this._sizeLods[i]-1,m=isFinite(r)?Math.PI/(2*d):2*Math.PI/(2*os-1),x=r/m,g=isFinite(r)?1+Math.floor(f*x):os;g>os&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${os}`);const p=[];let M=0;for(let w=0;w<os;++w){const C=w/x,S=Math.exp(-C*C/2);p.push(S),w===0?M+=S:w<g&&(M+=2*S)}for(let w=0;w<p.length;w++)p[w]=p[w]/M;u.envMap.value=t.texture,u.samples.value=g,u.weights.value=p,u.latitudinal.value=a==="latitudinal",l&&(u.poleAxis.value=l);const{_lodMax:y}=this;u.dTheta.value=m,u.mipInt.value=y-i;const _=this._sizeLods[s],P=3*_*(s>y-Os?s-y+Os:0),T=4*(this._cubeSize-_);co(e,P,T,3*_,2*_),o.setRenderTarget(e),o.render(c,Fa)}}function rg(n){const t=[],e=[],i=[];let s=n;const r=n-Os+1+Rc.length;for(let a=0;a<r;a++){const l=Math.pow(2,s);e.push(l);let o=1/l;a>n-Os?o=Rc[a-n+Os-1]:a===0&&(o=0),i.push(o);const h=1/(l-2),f=-h,c=1+h,u=[f,f,c,f,c,c,f,f,c,c,f,c],d=6,m=6,x=3,g=2,p=1,M=new Float32Array(x*m*d),y=new Float32Array(g*m*d),_=new Float32Array(p*m*d);for(let T=0;T<d;T++){const w=T%3*2/3-1,C=T>2?0:-1,S=[w,C,0,w+2/3,C,0,w+2/3,C+1,0,w,C,0,w+2/3,C+1,0,w,C+1,0];M.set(S,x*m*T),y.set(u,g*m*T);const v=[T,T,T,T,T,T];_.set(v,p*m*T)}const P=new qe;P.setAttribute("position",new _i(M,x)),P.setAttribute("uv",new _i(y,g)),P.setAttribute("faceIndex",new _i(_,p)),t.push(P),s>Os&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function Dc(n,t,e){const i=new Wi(n,t,e);return i.texture.mapping=oa,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function co(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function og(n,t,e){const i=new Float32Array(os),s=new L(0,1,0);return new fi({name:"SphericalGaussianBlur",defines:{n:os,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ic(){return new fi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ah(),fragmentShader:`

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
		`,blending:En,depthTest:!1,depthWrite:!1})}function Uc(){return new fi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ah(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:En,depthTest:!1,depthWrite:!1})}function Ah(){return`

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
	`}function ag(n){let t=new WeakMap,e=null;function i(l){if(l&&l.isTexture){const o=l.mapping,h=o===Sl||o===bl,f=o===Vs||o===Ws;if(h||f){let c=t.get(l);const u=c!==void 0?c.texture.pmremVersion:0;if(l.isRenderTargetTexture&&l.pmremVersion!==u)return e===null&&(e=new Pc(n)),c=h?e.fromEquirectangular(l,c):e.fromCubemap(l,c),c.texture.pmremVersion=l.pmremVersion,t.set(l,c),c.texture;if(c!==void 0)return c.texture;{const d=l.image;return h&&d&&d.height>0||f&&d&&s(d)?(e===null&&(e=new Pc(n)),c=h?e.fromEquirectangular(l):e.fromCubemap(l),c.texture.pmremVersion=l.pmremVersion,t.set(l,c),l.addEventListener("dispose",r),c.texture):null}}}return l}function s(l){let o=0;const h=6;for(let f=0;f<h;f++)l[f]!==void 0&&o++;return o===h}function r(l){const o=l.target;o.removeEventListener("dispose",r);const h=t.get(o);h!==void 0&&(t.delete(o),h.dispose())}function a(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:a}}function lg(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&xr("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function hg(n,t,e,i){const s={},r=new WeakMap;function a(c){const u=c.target;u.index!==null&&t.remove(u.index);for(const m in u.attributes)t.remove(u.attributes[m]);for(const m in u.morphAttributes){const x=u.morphAttributes[m];for(let g=0,p=x.length;g<p;g++)t.remove(x[g])}u.removeEventListener("dispose",a),delete s[u.id];const d=r.get(u);d&&(t.remove(d),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function l(c,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function o(c){const u=c.attributes;for(const m in u)t.update(u[m],n.ARRAY_BUFFER);const d=c.morphAttributes;for(const m in d){const x=d[m];for(let g=0,p=x.length;g<p;g++)t.update(x[g],n.ARRAY_BUFFER)}}function h(c){const u=[],d=c.index,m=c.attributes.position;let x=0;if(d!==null){const M=d.array;x=d.version;for(let y=0,_=M.length;y<_;y+=3){const P=M[y+0],T=M[y+1],w=M[y+2];u.push(P,T,T,w,w,P)}}else if(m!==void 0){const M=m.array;x=m.version;for(let y=0,_=M.length/3-1;y<_;y+=3){const P=y+0,T=y+1,w=y+2;u.push(P,T,T,w,w,P)}}else return;const g=new(su(u)?cu:hu)(u,1);g.version=x;const p=r.get(c);p&&t.remove(p),r.set(c,g)}function f(c){const u=r.get(c);if(u){const d=c.index;d!==null&&u.version<d.version&&h(c)}else h(c);return r.get(c)}return{get:l,update:o,getWireframeAttribute:f}}function cg(n,t,e){let i;function s(u){i=u}let r,a;function l(u){r=u.type,a=u.bytesPerElement}function o(u,d){n.drawElements(i,d,r,u*a),e.update(d,i,1)}function h(u,d,m){m!==0&&(n.drawElementsInstanced(i,d,r,u*a,m),e.update(d,i,m))}function f(u,d,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,m);let g=0;for(let p=0;p<m;p++)g+=d[p];e.update(g,i,1)}function c(u,d,m,x){if(m===0)return;const g=t.get("WEBGL_multi_draw");if(g===null)for(let p=0;p<u.length;p++)h(u[p]/a,d[p],x[p]);else{g.multiDrawElementsInstancedWEBGL(i,d,0,r,u,0,x,0,m);let p=0;for(let M=0;M<m;M++)p+=d[M]*x[M];e.update(p,i,1)}}this.setMode=s,this.setIndex=l,this.render=o,this.renderInstances=h,this.renderMultiDraw=f,this.renderMultiDrawInstances=c}function fg(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,l){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=l*(r/3);break;case n.LINES:e.lines+=l*(r/2);break;case n.LINE_STRIP:e.lines+=l*(r-1);break;case n.LINE_LOOP:e.lines+=l*r;break;case n.POINTS:e.points+=l*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function ug(n,t,e){const i=new WeakMap,s=new Ee;function r(a,l,o){const h=a.morphTargetInfluences,f=l.morphAttributes.position||l.morphAttributes.normal||l.morphAttributes.color,c=f!==void 0?f.length:0;let u=i.get(l);if(u===void 0||u.count!==c){let v=function(){C.dispose(),i.delete(l),l.removeEventListener("dispose",v)};var d=v;u!==void 0&&u.texture.dispose();const m=l.morphAttributes.position!==void 0,x=l.morphAttributes.normal!==void 0,g=l.morphAttributes.color!==void 0,p=l.morphAttributes.position||[],M=l.morphAttributes.normal||[],y=l.morphAttributes.color||[];let _=0;m===!0&&(_=1),x===!0&&(_=2),g===!0&&(_=3);let P=l.attributes.position.count*_,T=1;P>t.maxTextureSize&&(T=Math.ceil(P/t.maxTextureSize),P=t.maxTextureSize);const w=new Float32Array(P*T*4*c),C=new ou(w,P,T,c);C.type=Sn,C.needsUpdate=!0;const S=_*4;for(let R=0;R<c;R++){const U=p[R],N=M[R],H=y[R],$=P*T*4*R;for(let q=0;q<U.count;q++){const Y=q*S;m===!0&&(s.fromBufferAttribute(U,q),w[$+Y+0]=s.x,w[$+Y+1]=s.y,w[$+Y+2]=s.z,w[$+Y+3]=0),x===!0&&(s.fromBufferAttribute(N,q),w[$+Y+4]=s.x,w[$+Y+5]=s.y,w[$+Y+6]=s.z,w[$+Y+7]=0),g===!0&&(s.fromBufferAttribute(H,q),w[$+Y+8]=s.x,w[$+Y+9]=s.y,w[$+Y+10]=s.z,w[$+Y+11]=H.itemSize===4?s.w:1)}}u={count:c,texture:C,size:new It(P,T)},i.set(l,u),l.addEventListener("dispose",v)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let m=0;for(let g=0;g<h.length;g++)m+=h[g];const x=l.morphTargetsRelative?1:1-m;o.getUniforms().setValue(n,"morphTargetBaseInfluence",x),o.getUniforms().setValue(n,"morphTargetInfluences",h)}o.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),o.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function dg(n,t,e,i){let s=new WeakMap;function r(o){const h=i.render.frame,f=o.geometry,c=t.get(o,f);if(s.get(c)!==h&&(t.update(c),s.set(c,h)),o.isInstancedMesh&&(o.hasEventListener("dispose",l)===!1&&o.addEventListener("dispose",l),s.get(o)!==h&&(e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER),s.set(o,h))),o.isSkinnedMesh){const u=o.skeleton;s.get(u)!==h&&(u.update(),s.set(u,h))}return c}function a(){s=new WeakMap}function l(o){const h=o.target;h.removeEventListener("dispose",l),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:r,dispose:a}}class mu extends xi{constructor(t,e,i,s,r,a,l,o,h,f=Fs){if(f!==Fs&&f!==qs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&f===Fs&&(i=fs),i===void 0&&f===qs&&(i=Xs),super(null,s,r,a,l,o,f,i,h),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=l!==void 0?l:pe,this.minFilter=o!==void 0?o:pe,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const gu=new xi,Nc=new mu(1,1),xu=new ou,_u=new tp,vu=new du,Oc=[],zc=[],Fc=new Float32Array(16),Bc=new Float32Array(9),kc=new Float32Array(4);function Qs(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=Oc[s];if(r===void 0&&(r=new Float32Array(s),Oc[s]=r),t!==0){i.toArray(r,0);for(let a=1,l=0;a!==t;++a)l+=e,n[a].toArray(r,l)}return r}function je(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function Ze(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function la(n,t){let e=zc[t];e===void 0&&(e=new Int32Array(t),zc[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function pg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function mg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2fv(this.addr,t),Ze(e,t)}}function gg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(je(e,t))return;n.uniform3fv(this.addr,t),Ze(e,t)}}function xg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4fv(this.addr,t),Ze(e,t)}}function _g(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,i))return;kc.set(i),n.uniformMatrix2fv(this.addr,!1,kc),Ze(e,i)}}function vg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,i))return;Bc.set(i),n.uniformMatrix3fv(this.addr,!1,Bc),Ze(e,i)}}function Mg(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(je(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),Ze(e,t)}else{if(je(e,i))return;Fc.set(i),n.uniformMatrix4fv(this.addr,!1,Fc),Ze(e,i)}}function yg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Sg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2iv(this.addr,t),Ze(e,t)}}function bg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3iv(this.addr,t),Ze(e,t)}}function Eg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4iv(this.addr,t),Ze(e,t)}}function wg(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Tg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(je(e,t))return;n.uniform2uiv(this.addr,t),Ze(e,t)}}function Ag(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(je(e,t))return;n.uniform3uiv(this.addr,t),Ze(e,t)}}function Rg(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(je(e,t))return;n.uniform4uiv(this.addr,t),Ze(e,t)}}function Cg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(Nc.compareFunction=nu,r=Nc):r=gu,e.setTexture2D(t||r,s)}function Lg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||_u,s)}function Pg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||vu,s)}function Dg(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||xu,s)}function Ig(n){switch(n){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return xg;case 35674:return _g;case 35675:return vg;case 35676:return Mg;case 5124:case 35670:return yg;case 35667:case 35671:return Sg;case 35668:case 35672:return bg;case 35669:case 35673:return Eg;case 5125:return wg;case 36294:return Tg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Lg;case 35680:case 36300:case 36308:case 36293:return Pg;case 36289:case 36303:case 36311:case 36292:return Dg}}function Ug(n,t){n.uniform1fv(this.addr,t)}function Ng(n,t){const e=Qs(t,this.size,2);n.uniform2fv(this.addr,e)}function Og(n,t){const e=Qs(t,this.size,3);n.uniform3fv(this.addr,e)}function zg(n,t){const e=Qs(t,this.size,4);n.uniform4fv(this.addr,e)}function Fg(n,t){const e=Qs(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Bg(n,t){const e=Qs(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function kg(n,t){const e=Qs(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Hg(n,t){n.uniform1iv(this.addr,t)}function Gg(n,t){n.uniform2iv(this.addr,t)}function Vg(n,t){n.uniform3iv(this.addr,t)}function Wg(n,t){n.uniform4iv(this.addr,t)}function Xg(n,t){n.uniform1uiv(this.addr,t)}function qg(n,t){n.uniform2uiv(this.addr,t)}function Yg(n,t){n.uniform3uiv(this.addr,t)}function Kg(n,t){n.uniform4uiv(this.addr,t)}function $g(n,t,e){const i=this.cache,s=t.length,r=la(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTexture2D(t[a]||gu,r[a])}function jg(n,t,e){const i=this.cache,s=t.length,r=la(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||_u,r[a])}function Zg(n,t,e){const i=this.cache,s=t.length,r=la(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||vu,r[a])}function Jg(n,t,e){const i=this.cache,s=t.length,r=la(e,s);je(i,r)||(n.uniform1iv(this.addr,r),Ze(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||xu,r[a])}function Qg(n){switch(n){case 5126:return Ug;case 35664:return Ng;case 35665:return Og;case 35666:return zg;case 35674:return Fg;case 35675:return Bg;case 35676:return kg;case 5124:case 35670:return Hg;case 35667:case 35671:return Gg;case 35668:case 35672:return Vg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return Yg;case 36296:return Kg;case 35678:case 36198:case 36298:case 36306:case 35682:return $g;case 35679:case 36299:case 36307:return jg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}class tx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Ig(e.type)}}class ex{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Qg(e.type)}}class ix{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const l=s[r];l.setValue(t,e[l.id],i)}}}const Va=/(\w+)(\])?(\[|\.)?/g;function Hc(n,t){n.seq.push(t),n.map[t.id]=t}function nx(n,t,e){const i=n.name,s=i.length;for(Va.lastIndex=0;;){const r=Va.exec(i),a=Va.lastIndex;let l=r[1];const o=r[2]==="]",h=r[3];if(o&&(l=l|0),h===void 0||h==="["&&a+2===s){Hc(e,h===void 0?new tx(l,n,t):new ex(l,n,t));break}else{let c=e.map[l];c===void 0&&(c=new ix(l),Hc(e,c)),e=c}}}class zo{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),a=t.getUniformLocation(e,r.name);nx(r,a,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){const l=e[r],o=i[l.id];o.needsUpdate!==!1&&l.setValue(t,o.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const a=t[s];a.id in e&&i.push(a)}return i}}function Gc(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const sx=37297;let rx=0;function ox(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){const l=a+1;i.push(`${l===t?">":" "} ${l}: ${e[a]}`)}return i.join(`
`)}const Vc=new Yt;function ax(n){ne._getMatrix(Vc,ne.workingColorSpace,n);const t=`mat3( ${Vc.elements.map(e=>e.toFixed(4))} )`;switch(ne.getTransfer(n)){case aa:return[t,"LinearTransferOETF"];case _e:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Wc(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const a=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+ox(n.getShaderSource(t),a)}else return s}function lx(n,t){const e=ax(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function hx(n,t){let e;switch(t){case Hf:e="Linear";break;case Gf:e="Reinhard";break;case Vf:e="Cineon";break;case ra:e="ACESFilmic";break;case Wf:e="AgX";break;case Xf:e="Neutral";break;case Id:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const fo=new L;function cx(){ne.getLuminanceCoefficients(fo);const n=fo.x.toFixed(4),t=fo.y.toFixed(4),e=fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function fx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(_r).join(`
`)}function ux(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function dx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),a=r.name;let l=1;r.type===n.FLOAT_MAT2&&(l=2),r.type===n.FLOAT_MAT3&&(l=3),r.type===n.FLOAT_MAT4&&(l=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:l}}return e}function _r(n){return n!==""}function Xc(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function qc(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const px=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ql(n){return n.replace(px,gx)}const mx=new Map;function gx(n,t){let e=jt[t];if(e===void 0){const i=mx.get(t);if(i!==void 0)e=jt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return Ql(e)}const xx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Yc(n){return n.replace(xx,_x)}function _x(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Kc(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function vx(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===Bf?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===kf?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===vn&&(t="SHADOWMAP_TYPE_VSM"),t}function Mx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Vs:case Ws:t="ENVMAP_TYPE_CUBE";break;case oa:t="ENVMAP_TYPE_CUBE_UV";break}return t}function yx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case Ws:t="ENVMAP_MODE_REFRACTION";break}return t}function Sx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case gh:t="ENVMAP_BLENDING_MULTIPLY";break;case Pd:t="ENVMAP_BLENDING_MIX";break;case Dd:t="ENVMAP_BLENDING_ADD";break}return t}function bx(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ex(n,t,e,i){const s=n.getContext(),r=e.defines;let a=e.vertexShader,l=e.fragmentShader;const o=vx(e),h=Mx(e),f=yx(e),c=Sx(e),u=bx(e),d=fx(e),m=ux(r),x=s.createProgram();let g,p,M=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(g=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(_r).join(`
`),g.length>0&&(g+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(_r).join(`
`),p.length>0&&(p+=`
`)):(g=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+f:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(_r).join(`
`),p=[Kc(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+f:"",e.envMap?"#define "+c:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==wn?"#define TONE_MAPPING":"",e.toneMapping!==wn?jt.tonemapping_pars_fragment:"",e.toneMapping!==wn?hx("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",jt.colorspace_pars_fragment,lx("linearToOutputTexel",e.outputColorSpace),cx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(_r).join(`
`)),a=Ql(a),a=Xc(a,e),a=qc(a,e),l=Ql(l),l=Xc(l,e),l=qc(l,e),a=Yc(a),l=Yc(l),e.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,g=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,p=["#define varying in",e.glslVersion===ac?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===ac?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=M+g+a,_=M+p+l,P=Gc(s,s.VERTEX_SHADER,y),T=Gc(s,s.FRAGMENT_SHADER,_);s.attachShader(x,P),s.attachShader(x,T),e.index0AttributeName!==void 0?s.bindAttribLocation(x,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function w(R){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(x).trim(),N=s.getShaderInfoLog(P).trim(),H=s.getShaderInfoLog(T).trim();let $=!0,q=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if($=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,P,T);else{const Y=Wc(s,P,"vertex"),V=Wc(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+R.name+`
Material Type: `+R.type+`

Program Info Log: `+U+`
`+Y+`
`+V)}else U!==""?console.warn("THREE.WebGLProgram: Program Info Log:",U):(N===""||H==="")&&(q=!1);q&&(R.diagnostics={runnable:$,programLog:U,vertexShader:{log:N,prefix:g},fragmentShader:{log:H,prefix:p}})}s.deleteShader(P),s.deleteShader(T),C=new zo(s,x),S=dx(s,x)}let C;this.getUniforms=function(){return C===void 0&&w(this),C};let S;this.getAttributes=function(){return S===void 0&&w(this),S};let v=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return v===!1&&(v=s.getProgramParameter(x,sx)),v},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=rx++,this.cacheKey=t,this.usedTimes=1,this.program=x,this.vertexShader=P,this.fragmentShader=T,this}let wx=0;class Tx{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),a=this._getShaderCacheForMaterial(t);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ax(t),e.set(t,i)),i}}class Ax{constructor(t){this.id=wx++,this.code=t,this.usedTimes=0}}function Rx(n,t,e,i,s,r,a){const l=new au,o=new Tx,h=new Set,f=[],c=s.logarithmicDepthBuffer,u=s.vertexTextures;let d=s.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return h.add(S),S===0?"uv":`uv${S}`}function g(S,v,R,U,N){const H=U.fog,$=N.geometry,q=S.isMeshStandardMaterial?U.environment:null,Y=(S.isMeshStandardMaterial?e:t).get(S.envMap||q),V=Y&&Y.mapping===oa?Y.image.height:null,it=m[S.type];S.precision!==null&&(d=s.getMaxPrecision(S.precision),d!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",d,"instead."));const rt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,xt=rt!==void 0?rt.length:0;let Wt=0;$.morphAttributes.position!==void 0&&(Wt=1),$.morphAttributes.normal!==void 0&&(Wt=2),$.morphAttributes.color!==void 0&&(Wt=3);let fe,j,ot,St;if(it){const xe=on[it];fe=xe.vertexShader,j=xe.fragmentShader}else fe=S.vertexShader,j=S.fragmentShader,o.update(S),ot=o.getVertexShaderID(S),St=o.getFragmentShaderID(S);const ft=n.getRenderTarget(),Pt=n.state.buffers.depth.getReversed(),Ot=N.isInstancedMesh===!0,Ut=N.isBatchedMesh===!0,kt=!!S.map,Vt=!!S.matcap,ye=!!Y,z=!!S.aoMap,Ye=!!S.lightMap,Qt=!!S.bumpMap,te=!!S.normalMap,Rt=!!S.displacementMap,we=!!S.emissiveMap,Dt=!!S.metalnessMap,A=!!S.roughnessMap,b=S.anisotropy>0,G=S.clearcoat>0,J=S.dispersion>0,et=S.iridescence>0,Z=S.sheen>0,Ct=S.transmission>0,dt=b&&!!S.anisotropyMap,_t=G&&!!S.clearcoatMap,oe=G&&!!S.clearcoatNormalMap,at=G&&!!S.clearcoatRoughnessMap,vt=et&&!!S.iridescenceMap,Nt=et&&!!S.iridescenceThicknessMap,Ft=Z&&!!S.sheenColorMap,Mt=Z&&!!S.sheenRoughnessMap,ie=!!S.specularMap,Kt=!!S.specularColorMap,Re=!!S.specularIntensityMap,O=Ct&&!!S.transmissionMap,ut=Ct&&!!S.thicknessMap,K=!!S.gradientMap,Q=!!S.alphaMap,gt=S.alphaTest>0,pt=!!S.alphaHash,Xt=!!S.extensions;let ze=wn;S.toneMapped&&(ft===null||ft.isXRRenderTarget===!0)&&(ze=n.toneMapping);const ai={shaderID:it,shaderType:S.type,shaderName:S.name,vertexShader:fe,fragmentShader:j,defines:S.defines,customVertexShaderID:ot,customFragmentShaderID:St,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:d,batching:Ut,batchingColor:Ut&&N._colorsTexture!==null,instancing:Ot,instancingColor:Ot&&N.instanceColor!==null,instancingMorph:Ot&&N.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ft===null?n.outputColorSpace:ft.isXRRenderTarget===!0?ft.texture.colorSpace:Zs,alphaToCoverage:!!S.alphaToCoverage,map:kt,matcap:Vt,envMap:ye,envMapMode:ye&&Y.mapping,envMapCubeUVHeight:V,aoMap:z,lightMap:Ye,bumpMap:Qt,normalMap:te,displacementMap:u&&Rt,emissiveMap:we,normalMapObjectSpace:te&&S.normalMapType===zd,normalMapTangentSpace:te&&S.normalMapType===bh,metalnessMap:Dt,roughnessMap:A,anisotropy:b,anisotropyMap:dt,clearcoat:G,clearcoatMap:_t,clearcoatNormalMap:oe,clearcoatRoughnessMap:at,dispersion:J,iridescence:et,iridescenceMap:vt,iridescenceThicknessMap:Nt,sheen:Z,sheenColorMap:Ft,sheenRoughnessMap:Mt,specularMap:ie,specularColorMap:Kt,specularIntensityMap:Re,transmission:Ct,transmissionMap:O,thicknessMap:ut,gradientMap:K,opaque:S.transparent===!1&&S.blending===zs&&S.alphaToCoverage===!1,alphaMap:Q,alphaTest:gt,alphaHash:pt,combine:S.combine,mapUv:kt&&x(S.map.channel),aoMapUv:z&&x(S.aoMap.channel),lightMapUv:Ye&&x(S.lightMap.channel),bumpMapUv:Qt&&x(S.bumpMap.channel),normalMapUv:te&&x(S.normalMap.channel),displacementMapUv:Rt&&x(S.displacementMap.channel),emissiveMapUv:we&&x(S.emissiveMap.channel),metalnessMapUv:Dt&&x(S.metalnessMap.channel),roughnessMapUv:A&&x(S.roughnessMap.channel),anisotropyMapUv:dt&&x(S.anisotropyMap.channel),clearcoatMapUv:_t&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:oe&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:vt&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Nt&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:Ft&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:Mt&&x(S.sheenRoughnessMap.channel),specularMapUv:ie&&x(S.specularMap.channel),specularColorMapUv:Kt&&x(S.specularColorMap.channel),specularIntensityMapUv:Re&&x(S.specularIntensityMap.channel),transmissionMapUv:O&&x(S.transmissionMap.channel),thicknessMapUv:ut&&x(S.thicknessMap.channel),alphaMapUv:Q&&x(S.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(te||b),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(kt||Q),fog:!!H,useFog:S.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:S.flatShading===!0,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:c,reverseDepthBuffer:Pt,skinning:N.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:xt,morphTextureStride:Wt,numDirLights:v.directional.length,numPointLights:v.point.length,numSpotLights:v.spot.length,numSpotLightMaps:v.spotLightMap.length,numRectAreaLights:v.rectArea.length,numHemiLights:v.hemi.length,numDirLightShadows:v.directionalShadowMap.length,numPointLightShadows:v.pointShadowMap.length,numSpotLightShadows:v.spotShadowMap.length,numSpotLightShadowsWithMaps:v.numSpotLightShadowsWithMaps,numLightProbes:v.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&R.length>0,shadowMapType:n.shadowMap.type,toneMapping:ze,decodeVideoTexture:kt&&S.map.isVideoTexture===!0&&ne.getTransfer(S.map.colorSpace)===_e,decodeVideoTextureEmissive:we&&S.emissiveMap.isVideoTexture===!0&&ne.getTransfer(S.emissiveMap.colorSpace)===_e,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===bi,flipSided:S.side===gi,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Xt&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Xt&&S.extensions.multiDraw===!0||Ut)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return ai.vertexUv1s=h.has(1),ai.vertexUv2s=h.has(2),ai.vertexUv3s=h.has(3),h.clear(),ai}function p(S){const v=[];if(S.shaderID?v.push(S.shaderID):(v.push(S.customVertexShaderID),v.push(S.customFragmentShaderID)),S.defines!==void 0)for(const R in S.defines)v.push(R),v.push(S.defines[R]);return S.isRawShaderMaterial===!1&&(M(v,S),y(v,S),v.push(n.outputColorSpace)),v.push(S.customProgramCacheKey),v.join()}function M(S,v){S.push(v.precision),S.push(v.outputColorSpace),S.push(v.envMapMode),S.push(v.envMapCubeUVHeight),S.push(v.mapUv),S.push(v.alphaMapUv),S.push(v.lightMapUv),S.push(v.aoMapUv),S.push(v.bumpMapUv),S.push(v.normalMapUv),S.push(v.displacementMapUv),S.push(v.emissiveMapUv),S.push(v.metalnessMapUv),S.push(v.roughnessMapUv),S.push(v.anisotropyMapUv),S.push(v.clearcoatMapUv),S.push(v.clearcoatNormalMapUv),S.push(v.clearcoatRoughnessMapUv),S.push(v.iridescenceMapUv),S.push(v.iridescenceThicknessMapUv),S.push(v.sheenColorMapUv),S.push(v.sheenRoughnessMapUv),S.push(v.specularMapUv),S.push(v.specularColorMapUv),S.push(v.specularIntensityMapUv),S.push(v.transmissionMapUv),S.push(v.thicknessMapUv),S.push(v.combine),S.push(v.fogExp2),S.push(v.sizeAttenuation),S.push(v.morphTargetsCount),S.push(v.morphAttributeCount),S.push(v.numDirLights),S.push(v.numPointLights),S.push(v.numSpotLights),S.push(v.numSpotLightMaps),S.push(v.numHemiLights),S.push(v.numRectAreaLights),S.push(v.numDirLightShadows),S.push(v.numPointLightShadows),S.push(v.numSpotLightShadows),S.push(v.numSpotLightShadowsWithMaps),S.push(v.numLightProbes),S.push(v.shadowMapType),S.push(v.toneMapping),S.push(v.numClippingPlanes),S.push(v.numClipIntersection),S.push(v.depthPacking)}function y(S,v){l.disableAll(),v.supportsVertexTextures&&l.enable(0),v.instancing&&l.enable(1),v.instancingColor&&l.enable(2),v.instancingMorph&&l.enable(3),v.matcap&&l.enable(4),v.envMap&&l.enable(5),v.normalMapObjectSpace&&l.enable(6),v.normalMapTangentSpace&&l.enable(7),v.clearcoat&&l.enable(8),v.iridescence&&l.enable(9),v.alphaTest&&l.enable(10),v.vertexColors&&l.enable(11),v.vertexAlphas&&l.enable(12),v.vertexUv1s&&l.enable(13),v.vertexUv2s&&l.enable(14),v.vertexUv3s&&l.enable(15),v.vertexTangents&&l.enable(16),v.anisotropy&&l.enable(17),v.alphaHash&&l.enable(18),v.batching&&l.enable(19),v.dispersion&&l.enable(20),v.batchingColor&&l.enable(21),S.push(l.mask),l.disableAll(),v.fog&&l.enable(0),v.useFog&&l.enable(1),v.flatShading&&l.enable(2),v.logarithmicDepthBuffer&&l.enable(3),v.reverseDepthBuffer&&l.enable(4),v.skinning&&l.enable(5),v.morphTargets&&l.enable(6),v.morphNormals&&l.enable(7),v.morphColors&&l.enable(8),v.premultipliedAlpha&&l.enable(9),v.shadowMapEnabled&&l.enable(10),v.doubleSided&&l.enable(11),v.flipSided&&l.enable(12),v.useDepthPacking&&l.enable(13),v.dithering&&l.enable(14),v.transmission&&l.enable(15),v.sheen&&l.enable(16),v.opaque&&l.enable(17),v.pointsUvs&&l.enable(18),v.decodeVideoTexture&&l.enable(19),v.decodeVideoTextureEmissive&&l.enable(20),v.alphaToCoverage&&l.enable(21),S.push(l.mask)}function _(S){const v=m[S.type];let R;if(v){const U=on[v];R=Lr.clone(U.uniforms)}else R=S.uniforms;return R}function P(S,v){let R;for(let U=0,N=f.length;U<N;U++){const H=f[U];if(H.cacheKey===v){R=H,++R.usedTimes;break}}return R===void 0&&(R=new Ex(n,v,S,r),f.push(R)),R}function T(S){if(--S.usedTimes===0){const v=f.indexOf(S);f[v]=f[f.length-1],f.pop(),S.destroy()}}function w(S){o.remove(S)}function C(){o.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:_,acquireProgram:P,releaseProgram:T,releaseShaderCache:w,programs:f,dispose:C}}function Cx(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let l=n.get(a);return l===void 0&&(l={},n.set(a,l)),l}function i(a){n.delete(a)}function s(a,l,o){n.get(a)[l]=o}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Lx(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function $c(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function jc(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(c,u,d,m,x,g){let p=n[t];return p===void 0?(p={id:c.id,object:c,geometry:u,material:d,groupOrder:m,renderOrder:c.renderOrder,z:x,group:g},n[t]=p):(p.id=c.id,p.object=c,p.geometry=u,p.material=d,p.groupOrder=m,p.renderOrder=c.renderOrder,p.z=x,p.group=g),t++,p}function l(c,u,d,m,x,g){const p=a(c,u,d,m,x,g);d.transmission>0?i.push(p):d.transparent===!0?s.push(p):e.push(p)}function o(c,u,d,m,x,g){const p=a(c,u,d,m,x,g);d.transmission>0?i.unshift(p):d.transparent===!0?s.unshift(p):e.unshift(p)}function h(c,u){e.length>1&&e.sort(c||Lx),i.length>1&&i.sort(u||$c),s.length>1&&s.sort(u||$c)}function f(){for(let c=t,u=n.length;c<u;c++){const d=n[c];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:o,finish:f,sort:h}}function Px(){let n=new WeakMap;function t(i,s){const r=n.get(i);let a;return r===void 0?(a=new jc,n.set(i,[a])):s>=r.length?(a=new jc,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Dx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new L,color:new yt};break;case"SpotLight":e={position:new L,direction:new L,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new L,color:new yt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new L,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":e={color:new yt,position:new L,halfWidth:new L,halfHeight:new L};break}return n[t.id]=e,e}}}function Ix(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new It,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Ux=0;function Nx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ox(n){const t=new Dx,e=Ix(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)i.probe.push(new L);const s=new L,r=new Pe,a=new Pe;function l(h){let f=0,c=0,u=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let d=0,m=0,x=0,g=0,p=0,M=0,y=0,_=0,P=0,T=0,w=0;h.sort(Nx);for(let S=0,v=h.length;S<v;S++){const R=h[S],U=R.color,N=R.intensity,H=R.distance,$=R.shadow&&R.shadow.map?R.shadow.map.texture:null;if(R.isAmbientLight)f+=U.r*N,c+=U.g*N,u+=U.b*N;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],N);w++}else if(R.isDirectionalLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const Y=R.shadow,V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.directionalShadow[d]=V,i.directionalShadowMap[d]=$,i.directionalShadowMatrix[d]=R.shadow.matrix,M++}i.directional[d]=q,d++}else if(R.isSpotLight){const q=t.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(U).multiplyScalar(N),q.distance=H,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[x]=q;const Y=R.shadow;if(R.map&&(i.spotLightMap[P]=R.map,P++,Y.updateMatrices(R),R.castShadow&&T++),i.spotLightMatrix[x]=Y.matrix,R.castShadow){const V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=$,_++}x++}else if(R.isRectAreaLight){const q=t.get(R);q.color.copy(U).multiplyScalar(N),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[g]=q,g++}else if(R.isPointLight){const q=t.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){const Y=R.shadow,V=e.get(R);V.shadowIntensity=Y.intensity,V.shadowBias=Y.bias,V.shadowNormalBias=Y.normalBias,V.shadowRadius=Y.radius,V.shadowMapSize=Y.mapSize,V.shadowCameraNear=Y.camera.near,V.shadowCameraFar=Y.camera.far,i.pointShadow[m]=V,i.pointShadowMap[m]=$,i.pointShadowMatrix[m]=R.shadow.matrix,y++}i.point[m]=q,m++}else if(R.isHemisphereLight){const q=t.get(R);q.skyColor.copy(R.color).multiplyScalar(N),q.groundColor.copy(R.groundColor).multiplyScalar(N),i.hemi[p]=q,p++}}g>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ct.LTC_FLOAT_1,i.rectAreaLTC2=ct.LTC_FLOAT_2):(i.rectAreaLTC1=ct.LTC_HALF_1,i.rectAreaLTC2=ct.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=c,i.ambient[2]=u;const C=i.hash;(C.directionalLength!==d||C.pointLength!==m||C.spotLength!==x||C.rectAreaLength!==g||C.hemiLength!==p||C.numDirectionalShadows!==M||C.numPointShadows!==y||C.numSpotShadows!==_||C.numSpotMaps!==P||C.numLightProbes!==w)&&(i.directional.length=d,i.spot.length=x,i.rectArea.length=g,i.point.length=m,i.hemi.length=p,i.directionalShadow.length=M,i.directionalShadowMap.length=M,i.pointShadow.length=y,i.pointShadowMap.length=y,i.spotShadow.length=_,i.spotShadowMap.length=_,i.directionalShadowMatrix.length=M,i.pointShadowMatrix.length=y,i.spotLightMatrix.length=_+P-T,i.spotLightMap.length=P,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=w,C.directionalLength=d,C.pointLength=m,C.spotLength=x,C.rectAreaLength=g,C.hemiLength=p,C.numDirectionalShadows=M,C.numPointShadows=y,C.numSpotShadows=_,C.numSpotMaps=P,C.numLightProbes=w,i.version=Ux++)}function o(h,f){let c=0,u=0,d=0,m=0,x=0;const g=f.matrixWorldInverse;for(let p=0,M=h.length;p<M;p++){const y=h[p];if(y.isDirectionalLight){const _=i.directional[c];_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),c++}else if(y.isSpotLight){const _=i.spot[d];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),_.direction.sub(s),_.direction.transformDirection(g),d++}else if(y.isRectAreaLight){const _=i.rectArea[m];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),a.identity(),r.copy(y.matrixWorld),r.premultiply(g),a.extractRotation(r),_.halfWidth.set(y.width*.5,0,0),_.halfHeight.set(0,y.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),m++}else if(y.isPointLight){const _=i.point[u];_.position.setFromMatrixPosition(y.matrixWorld),_.position.applyMatrix4(g),u++}else if(y.isHemisphereLight){const _=i.hemi[x];_.direction.setFromMatrixPosition(y.matrixWorld),_.direction.transformDirection(g),x++}}}return{setup:l,setupView:o,state:i}}function Zc(n){const t=new Ox(n),e=[],i=[];function s(f){h.camera=f,e.length=0,i.length=0}function r(f){e.push(f)}function a(f){i.push(f)}function l(){t.setup(e)}function o(f){t.setupView(e,f)}const h={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:h,setupLights:l,setupLightsView:o,pushLight:r,pushShadow:a}}function zx(n){let t=new WeakMap;function e(s,r=0){const a=t.get(s);let l;return a===void 0?(l=new Zc(n),t.set(s,[l])):r>=a.length?(l=new Zc(n),a.push(l)):l=a[r],l}function i(){t=new WeakMap}return{get:e,dispose:i}}class Fx extends Pn{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Nd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class Bx extends Pn{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const kx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Hx=`uniform sampler2D shadow_pass;
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
}`;function Gx(n,t,e){let i=new wh;const s=new It,r=new It,a=new Ee,l=new Fx({depthPacking:Od}),o=new Bx,h={},f=e.maxTextureSize,c={[Kn]:gi,[gi]:Kn,[bi]:bi},u=new fi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new It},radius:{value:4}},vertexShader:kx,fragmentShader:Hx}),d=u.clone();d.defines.HORIZONTAL_PASS=1;const m=new qe;m.setAttribute("position",new _i(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new At(m,u),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Bf;let p=this.type;this.render=function(T,w,C){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const S=n.getRenderTarget(),v=n.getActiveCubeFace(),R=n.getActiveMipmapLevel(),U=n.state;U.setBlending(En),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const N=p!==vn&&this.type===vn,H=p===vn&&this.type!==vn;for(let $=0,q=T.length;$<q;$++){const Y=T[$],V=Y.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",Y,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const it=V.getFrameExtents();if(s.multiply(it),r.copy(V.mapSize),(s.x>f||s.y>f)&&(s.x>f&&(r.x=Math.floor(f/it.x),s.x=r.x*it.x,V.mapSize.x=r.x),s.y>f&&(r.y=Math.floor(f/it.y),s.y=r.y*it.y,V.mapSize.y=r.y)),V.map===null||N===!0||H===!0){const xt=this.type!==vn?{minFilter:pe,magFilter:pe}:{};V.map!==null&&V.map.dispose(),V.map=new Wi(s.x,s.y,xt),V.map.texture.name=Y.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const rt=V.getViewportCount();for(let xt=0;xt<rt;xt++){const Wt=V.getViewport(xt);a.set(r.x*Wt.x,r.y*Wt.y,r.x*Wt.z,r.y*Wt.w),U.viewport(a),V.updateMatrices(Y,xt),i=V.getFrustum(),_(w,C,V.camera,Y,this.type)}V.isPointLightShadow!==!0&&this.type===vn&&M(V,C),V.needsUpdate=!1}p=this.type,g.needsUpdate=!1,n.setRenderTarget(S,v,R)};function M(T,w){const C=t.update(x);u.defines.VSM_SAMPLES!==T.blurSamples&&(u.defines.VSM_SAMPLES=T.blurSamples,d.defines.VSM_SAMPLES=T.blurSamples,u.needsUpdate=!0,d.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Wi(s.x,s.y)),u.uniforms.shadow_pass.value=T.map.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(w,null,C,u,x,null),d.uniforms.shadow_pass.value=T.mapPass.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(w,null,C,d,x,null)}function y(T,w,C,S){let v=null;const R=C.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(R!==void 0)v=R;else if(v=C.isPointLight===!0?o:l,n.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0||w.map&&w.alphaTest>0){const U=v.uuid,N=w.uuid;let H=h[U];H===void 0&&(H={},h[U]=H);let $=H[N];$===void 0&&($=v.clone(),H[N]=$,w.addEventListener("dispose",P)),v=$}if(v.visible=w.visible,v.wireframe=w.wireframe,S===vn?v.side=w.shadowSide!==null?w.shadowSide:w.side:v.side=w.shadowSide!==null?w.shadowSide:c[w.side],v.alphaMap=w.alphaMap,v.alphaTest=w.alphaTest,v.map=w.map,v.clipShadows=w.clipShadows,v.clippingPlanes=w.clippingPlanes,v.clipIntersection=w.clipIntersection,v.displacementMap=w.displacementMap,v.displacementScale=w.displacementScale,v.displacementBias=w.displacementBias,v.wireframeLinewidth=w.wireframeLinewidth,v.linewidth=w.linewidth,C.isPointLight===!0&&v.isMeshDistanceMaterial===!0){const U=n.properties.get(v);U.light=C}return v}function _(T,w,C,S,v){if(T.visible===!1)return;if(T.layers.test(w.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&v===vn)&&(!T.frustumCulled||i.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,T.matrixWorld);const N=t.update(T),H=T.material;if(Array.isArray(H)){const $=N.groups;for(let q=0,Y=$.length;q<Y;q++){const V=$[q],it=H[V.materialIndex];if(it&&it.visible){const rt=y(T,it,S,v);T.onBeforeShadow(n,T,w,C,N,rt,V),n.renderBufferDirect(C,null,N,rt,T,V),T.onAfterShadow(n,T,w,C,N,rt,V)}}}else if(H.visible){const $=y(T,H,S,v);T.onBeforeShadow(n,T,w,C,N,$,null),n.renderBufferDirect(C,null,N,$,T,null),T.onAfterShadow(n,T,w,C,N,$,null)}}const U=T.children;for(let N=0,H=U.length;N<H;N++)_(U[N],w,C,S,v)}function P(T){T.target.removeEventListener("dispose",P);for(const C in h){const S=h[C],v=T.target.uuid;v in S&&(S[v].dispose(),delete S[v])}}}const Vx={[ml]:gl,[xl]:Ml,[_l]:yl,[Gs]:vl,[gl]:ml,[Ml]:xl,[yl]:_l,[vl]:Gs};function Wx(n,t){function e(){let O=!1;const ut=new Ee;let K=null;const Q=new Ee(0,0,0,0);return{setMask:function(gt){K!==gt&&!O&&(n.colorMask(gt,gt,gt,gt),K=gt)},setLocked:function(gt){O=gt},setClear:function(gt,pt,Xt,ze,ai){ai===!0&&(gt*=ze,pt*=ze,Xt*=ze),ut.set(gt,pt,Xt,ze),Q.equals(ut)===!1&&(n.clearColor(gt,pt,Xt,ze),Q.copy(ut))},reset:function(){O=!1,K=null,Q.set(-1,0,0,0)}}}function i(){let O=!1,ut=!1,K=null,Q=null,gt=null;return{setReversed:function(pt){if(ut!==pt){const Xt=t.get("EXT_clip_control");ut?Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.ZERO_TO_ONE_EXT):Xt.clipControlEXT(Xt.LOWER_LEFT_EXT,Xt.NEGATIVE_ONE_TO_ONE_EXT);const ze=gt;gt=null,this.setClear(ze)}ut=pt},getReversed:function(){return ut},setTest:function(pt){pt?ft(n.DEPTH_TEST):Pt(n.DEPTH_TEST)},setMask:function(pt){K!==pt&&!O&&(n.depthMask(pt),K=pt)},setFunc:function(pt){if(ut&&(pt=Vx[pt]),Q!==pt){switch(pt){case ml:n.depthFunc(n.NEVER);break;case gl:n.depthFunc(n.ALWAYS);break;case xl:n.depthFunc(n.LESS);break;case Gs:n.depthFunc(n.LEQUAL);break;case _l:n.depthFunc(n.EQUAL);break;case vl:n.depthFunc(n.GEQUAL);break;case Ml:n.depthFunc(n.GREATER);break;case yl:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Q=pt}},setLocked:function(pt){O=pt},setClear:function(pt){gt!==pt&&(ut&&(pt=1-pt),n.clearDepth(pt),gt=pt)},reset:function(){O=!1,K=null,Q=null,gt=null,ut=!1}}}function s(){let O=!1,ut=null,K=null,Q=null,gt=null,pt=null,Xt=null,ze=null,ai=null;return{setTest:function(xe){O||(xe?ft(n.STENCIL_TEST):Pt(n.STENCIL_TEST))},setMask:function(xe){ut!==xe&&!O&&(n.stencilMask(xe),ut=xe)},setFunc:function(xe,qi,fn){(K!==xe||Q!==qi||gt!==fn)&&(n.stencilFunc(xe,qi,fn),K=xe,Q=qi,gt=fn)},setOp:function(xe,qi,fn){(pt!==xe||Xt!==qi||ze!==fn)&&(n.stencilOp(xe,qi,fn),pt=xe,Xt=qi,ze=fn)},setLocked:function(xe){O=xe},setClear:function(xe){ai!==xe&&(n.clearStencil(xe),ai=xe)},reset:function(){O=!1,ut=null,K=null,Q=null,gt=null,pt=null,Xt=null,ze=null,ai=null}}}const r=new e,a=new i,l=new s,o=new WeakMap,h=new WeakMap;let f={},c={},u=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,y=null,_=null,P=null,T=null,w=new yt(0,0,0),C=0,S=!1,v=null,R=null,U=null,N=null,H=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,Y=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(V)[1]),q=Y>=1):V.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),q=Y>=2);let it=null,rt={};const xt=n.getParameter(n.SCISSOR_BOX),Wt=n.getParameter(n.VIEWPORT),fe=new Ee().fromArray(xt),j=new Ee().fromArray(Wt);function ot(O,ut,K,Q){const gt=new Uint8Array(4),pt=n.createTexture();n.bindTexture(O,pt),n.texParameteri(O,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(O,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Xt=0;Xt<K;Xt++)O===n.TEXTURE_3D||O===n.TEXTURE_2D_ARRAY?n.texImage3D(ut,0,n.RGBA,1,1,Q,0,n.RGBA,n.UNSIGNED_BYTE,gt):n.texImage2D(ut+Xt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,gt);return pt}const St={};St[n.TEXTURE_2D]=ot(n.TEXTURE_2D,n.TEXTURE_2D,1),St[n.TEXTURE_CUBE_MAP]=ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),St[n.TEXTURE_2D_ARRAY]=ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),St[n.TEXTURE_3D]=ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),l.setClear(0),ft(n.DEPTH_TEST),a.setFunc(Gs),Qt(!1),te(nc),ft(n.CULL_FACE),z(En);function ft(O){f[O]!==!0&&(n.enable(O),f[O]=!0)}function Pt(O){f[O]!==!1&&(n.disable(O),f[O]=!1)}function Ot(O,ut){return c[O]!==ut?(n.bindFramebuffer(O,ut),c[O]=ut,O===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=ut),O===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=ut),!0):!1}function Ut(O,ut){let K=d,Q=!1;if(O){K=u.get(ut),K===void 0&&(K=[],u.set(ut,K));const gt=O.textures;if(K.length!==gt.length||K[0]!==n.COLOR_ATTACHMENT0){for(let pt=0,Xt=gt.length;pt<Xt;pt++)K[pt]=n.COLOR_ATTACHMENT0+pt;K.length=gt.length,Q=!0}}else K[0]!==n.BACK&&(K[0]=n.BACK,Q=!0);Q&&n.drawBuffers(K)}function kt(O){return m!==O?(n.useProgram(O),m=O,!0):!1}const Vt={[rs]:n.FUNC_ADD,[pd]:n.FUNC_SUBTRACT,[md]:n.FUNC_REVERSE_SUBTRACT};Vt[gd]=n.MIN,Vt[xd]=n.MAX;const ye={[_d]:n.ZERO,[vd]:n.ONE,[Md]:n.SRC_COLOR,[dl]:n.SRC_ALPHA,[Td]:n.SRC_ALPHA_SATURATE,[Ed]:n.DST_COLOR,[Sd]:n.DST_ALPHA,[yd]:n.ONE_MINUS_SRC_COLOR,[pl]:n.ONE_MINUS_SRC_ALPHA,[wd]:n.ONE_MINUS_DST_COLOR,[bd]:n.ONE_MINUS_DST_ALPHA,[Ad]:n.CONSTANT_COLOR,[Rd]:n.ONE_MINUS_CONSTANT_COLOR,[Cd]:n.CONSTANT_ALPHA,[Ld]:n.ONE_MINUS_CONSTANT_ALPHA};function z(O,ut,K,Q,gt,pt,Xt,ze,ai,xe){if(O===En){x===!0&&(Pt(n.BLEND),x=!1);return}if(x===!1&&(ft(n.BLEND),x=!0),O!==dd){if(O!==g||xe!==S){if((p!==rs||_!==rs)&&(n.blendEquation(n.FUNC_ADD),p=rs,_=rs),xe)switch(O){case zs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rr:n.blendFunc(n.ONE,n.ONE);break;case sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case zs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Rr:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case sc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case rc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}M=null,y=null,P=null,T=null,w.set(0,0,0),C=0,g=O,S=xe}return}gt=gt||ut,pt=pt||K,Xt=Xt||Q,(ut!==p||gt!==_)&&(n.blendEquationSeparate(Vt[ut],Vt[gt]),p=ut,_=gt),(K!==M||Q!==y||pt!==P||Xt!==T)&&(n.blendFuncSeparate(ye[K],ye[Q],ye[pt],ye[Xt]),M=K,y=Q,P=pt,T=Xt),(ze.equals(w)===!1||ai!==C)&&(n.blendColor(ze.r,ze.g,ze.b,ai),w.copy(ze),C=ai),g=O,S=!1}function Ye(O,ut){O.side===bi?Pt(n.CULL_FACE):ft(n.CULL_FACE);let K=O.side===gi;ut&&(K=!K),Qt(K),O.blending===zs&&O.transparent===!1?z(En):z(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const Q=O.stencilWrite;l.setTest(Q),Q&&(l.setMask(O.stencilWriteMask),l.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),l.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),we(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?ft(n.SAMPLE_ALPHA_TO_COVERAGE):Pt(n.SAMPLE_ALPHA_TO_COVERAGE)}function Qt(O){v!==O&&(O?n.frontFace(n.CW):n.frontFace(n.CCW),v=O)}function te(O){O!==fd?(ft(n.CULL_FACE),O!==R&&(O===nc?n.cullFace(n.BACK):O===ud?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pt(n.CULL_FACE),R=O}function Rt(O){O!==U&&(q&&n.lineWidth(O),U=O)}function we(O,ut,K){O?(ft(n.POLYGON_OFFSET_FILL),(N!==ut||H!==K)&&(n.polygonOffset(ut,K),N=ut,H=K)):Pt(n.POLYGON_OFFSET_FILL)}function Dt(O){O?ft(n.SCISSOR_TEST):Pt(n.SCISSOR_TEST)}function A(O){O===void 0&&(O=n.TEXTURE0+$-1),it!==O&&(n.activeTexture(O),it=O)}function b(O,ut,K){K===void 0&&(it===null?K=n.TEXTURE0+$-1:K=it);let Q=rt[K];Q===void 0&&(Q={type:void 0,texture:void 0},rt[K]=Q),(Q.type!==O||Q.texture!==ut)&&(it!==K&&(n.activeTexture(K),it=K),n.bindTexture(O,ut||St[O]),Q.type=O,Q.texture=ut)}function G(){const O=rt[it];O!==void 0&&O.type!==void 0&&(n.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function J(){try{n.compressedTexImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function et(){try{n.compressedTexImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Z(){try{n.texSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ct(){try{n.texSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function dt(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function _t(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{n.texStorage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function vt(){try{n.texImage2D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Nt(){try{n.texImage3D.apply(n,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ft(O){fe.equals(O)===!1&&(n.scissor(O.x,O.y,O.z,O.w),fe.copy(O))}function Mt(O){j.equals(O)===!1&&(n.viewport(O.x,O.y,O.z,O.w),j.copy(O))}function ie(O,ut){let K=h.get(ut);K===void 0&&(K=new WeakMap,h.set(ut,K));let Q=K.get(O);Q===void 0&&(Q=n.getUniformBlockIndex(ut,O.name),K.set(O,Q))}function Kt(O,ut){const Q=h.get(ut).get(O);o.get(ut)!==Q&&(n.uniformBlockBinding(ut,Q,O.__bindingPointIndex),o.set(ut,Q))}function Re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),f={},it=null,rt={},c={},u=new WeakMap,d=[],m=null,x=!1,g=null,p=null,M=null,y=null,_=null,P=null,T=null,w=new yt(0,0,0),C=0,S=!1,v=null,R=null,U=null,N=null,H=null,fe.set(0,0,n.canvas.width,n.canvas.height),j.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),l.reset()}return{buffers:{color:r,depth:a,stencil:l},enable:ft,disable:Pt,bindFramebuffer:Ot,drawBuffers:Ut,useProgram:kt,setBlending:z,setMaterial:Ye,setFlipSided:Qt,setCullFace:te,setLineWidth:Rt,setPolygonOffset:we,setScissorTest:Dt,activeTexture:A,bindTexture:b,unbindTexture:G,compressedTexImage2D:J,compressedTexImage3D:et,texImage2D:vt,texImage3D:Nt,updateUBOMapping:ie,uniformBlockBinding:Kt,texStorage2D:oe,texStorage3D:at,texSubImage2D:Z,texSubImage3D:Ct,compressedTexSubImage2D:dt,compressedTexSubImage3D:_t,scissor:Ft,viewport:Mt,reset:Re}}function Jc(n,t,e,i){const s=Xx(i);switch(e){case jf:return n*t;case Jf:return n*t;case Qf:return n*t*2;case tu:return n*t/s.components*s.byteLength;case Mh:return n*t/s.components*s.byteLength;case eu:return n*t*2/s.components*s.byteLength;case yh:return n*t*2/s.components*s.byteLength;case Zf:return n*t*3/s.components*s.byteLength;case Qi:return n*t*4/s.components*s.byteLength;case Sh:return n*t*4/s.components*s.byteLength;case Po:case Do:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Io:case Uo:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Tl:case Rl:return Math.max(n,16)*Math.max(t,8)/4;case wl:case Al:return Math.max(n,8)*Math.max(t,8)/2;case Cl:case Ll:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Pl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Dl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Il:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Ul:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Nl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case Ol:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case zl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Fl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Bl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case kl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case Hl:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case Gl:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case Vl:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case Wl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case Xl:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case No:case ql:case Yl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case iu:case Kl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case $l:case jl:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xx(n){switch(n){case Cn:case Yf:return{byteLength:1,components:1};case Cr:case Kf:case ln:return{byteLength:2,components:1};case _h:case vh:return{byteLength:2,components:4};case fs:case xh:case Sn:return{byteLength:4,components:1};case $f:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function qx(n,t,e,i,s,r,a){const l=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new It,f=new WeakMap;let c;const u=new WeakMap;let d=!1;try{d=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(A,b){return d?new OffscreenCanvas(A,b):Vo("canvas")}function x(A,b,G){let J=1;const et=Dt(A);if((et.width>G||et.height>G)&&(J=G/Math.max(et.width,et.height)),J<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const Z=Math.floor(J*et.width),Ct=Math.floor(J*et.height);c===void 0&&(c=m(Z,Ct));const dt=b?m(Z,Ct):c;return dt.width=Z,dt.height=Ct,dt.getContext("2d").drawImage(A,0,0,Z,Ct),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+et.width+"x"+et.height+") to ("+Z+"x"+Ct+")."),dt}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+et.width+"x"+et.height+")."),A;return A}function g(A){return A.generateMipmaps}function p(A){n.generateMipmap(A)}function M(A){return A.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?n.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function y(A,b,G,J,et=!1){if(A!==null){if(n[A]!==void 0)return n[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let Z=b;if(b===n.RED&&(G===n.FLOAT&&(Z=n.R32F),G===n.HALF_FLOAT&&(Z=n.R16F),G===n.UNSIGNED_BYTE&&(Z=n.R8)),b===n.RED_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.R8UI),G===n.UNSIGNED_SHORT&&(Z=n.R16UI),G===n.UNSIGNED_INT&&(Z=n.R32UI),G===n.BYTE&&(Z=n.R8I),G===n.SHORT&&(Z=n.R16I),G===n.INT&&(Z=n.R32I)),b===n.RG&&(G===n.FLOAT&&(Z=n.RG32F),G===n.HALF_FLOAT&&(Z=n.RG16F),G===n.UNSIGNED_BYTE&&(Z=n.RG8)),b===n.RG_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RG8UI),G===n.UNSIGNED_SHORT&&(Z=n.RG16UI),G===n.UNSIGNED_INT&&(Z=n.RG32UI),G===n.BYTE&&(Z=n.RG8I),G===n.SHORT&&(Z=n.RG16I),G===n.INT&&(Z=n.RG32I)),b===n.RGB_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RGB8UI),G===n.UNSIGNED_SHORT&&(Z=n.RGB16UI),G===n.UNSIGNED_INT&&(Z=n.RGB32UI),G===n.BYTE&&(Z=n.RGB8I),G===n.SHORT&&(Z=n.RGB16I),G===n.INT&&(Z=n.RGB32I)),b===n.RGBA_INTEGER&&(G===n.UNSIGNED_BYTE&&(Z=n.RGBA8UI),G===n.UNSIGNED_SHORT&&(Z=n.RGBA16UI),G===n.UNSIGNED_INT&&(Z=n.RGBA32UI),G===n.BYTE&&(Z=n.RGBA8I),G===n.SHORT&&(Z=n.RGBA16I),G===n.INT&&(Z=n.RGBA32I)),b===n.RGB&&G===n.UNSIGNED_INT_5_9_9_9_REV&&(Z=n.RGB9_E5),b===n.RGBA){const Ct=et?aa:ne.getTransfer(J);G===n.FLOAT&&(Z=n.RGBA32F),G===n.HALF_FLOAT&&(Z=n.RGBA16F),G===n.UNSIGNED_BYTE&&(Z=Ct===_e?n.SRGB8_ALPHA8:n.RGBA8),G===n.UNSIGNED_SHORT_4_4_4_4&&(Z=n.RGBA4),G===n.UNSIGNED_SHORT_5_5_5_1&&(Z=n.RGB5_A1)}return(Z===n.R16F||Z===n.R32F||Z===n.RG16F||Z===n.RG32F||Z===n.RGBA16F||Z===n.RGBA32F)&&t.get("EXT_color_buffer_float"),Z}function _(A,b){let G;return A?b===null||b===fs||b===Xs?G=n.DEPTH24_STENCIL8:b===Sn?G=n.DEPTH32F_STENCIL8:b===Cr&&(G=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):b===null||b===fs||b===Xs?G=n.DEPTH_COMPONENT24:b===Sn?G=n.DEPTH_COMPONENT32F:b===Cr&&(G=n.DEPTH_COMPONENT16),G}function P(A,b){return g(A)===!0||A.isFramebufferTexture&&A.minFilter!==pe&&A.minFilter!==Vi?Math.log2(Math.max(b.width,b.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?b.mipmaps.length:1}function T(A){const b=A.target;b.removeEventListener("dispose",T),C(b),b.isVideoTexture&&f.delete(b)}function w(A){const b=A.target;b.removeEventListener("dispose",w),v(b)}function C(A){const b=i.get(A);if(b.__webglInit===void 0)return;const G=A.source,J=u.get(G);if(J){const et=J[b.__cacheKey];et.usedTimes--,et.usedTimes===0&&S(A),Object.keys(J).length===0&&u.delete(G)}i.remove(A)}function S(A){const b=i.get(A);n.deleteTexture(b.__webglTexture);const G=A.source,J=u.get(G);delete J[b.__cacheKey],a.memory.textures--}function v(A){const b=i.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),i.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(b.__webglFramebuffer[J]))for(let et=0;et<b.__webglFramebuffer[J].length;et++)n.deleteFramebuffer(b.__webglFramebuffer[J][et]);else n.deleteFramebuffer(b.__webglFramebuffer[J]);b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer[J])}else{if(Array.isArray(b.__webglFramebuffer))for(let J=0;J<b.__webglFramebuffer.length;J++)n.deleteFramebuffer(b.__webglFramebuffer[J]);else n.deleteFramebuffer(b.__webglFramebuffer);if(b.__webglDepthbuffer&&n.deleteRenderbuffer(b.__webglDepthbuffer),b.__webglMultisampledFramebuffer&&n.deleteFramebuffer(b.__webglMultisampledFramebuffer),b.__webglColorRenderbuffer)for(let J=0;J<b.__webglColorRenderbuffer.length;J++)b.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(b.__webglColorRenderbuffer[J]);b.__webglDepthRenderbuffer&&n.deleteRenderbuffer(b.__webglDepthRenderbuffer)}const G=A.textures;for(let J=0,et=G.length;J<et;J++){const Z=i.get(G[J]);Z.__webglTexture&&(n.deleteTexture(Z.__webglTexture),a.memory.textures--),i.remove(G[J])}i.remove(A)}let R=0;function U(){R=0}function N(){const A=R;return A>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+s.maxTextures),R+=1,A}function H(A){const b=[];return b.push(A.wrapS),b.push(A.wrapT),b.push(A.wrapR||0),b.push(A.magFilter),b.push(A.minFilter),b.push(A.anisotropy),b.push(A.internalFormat),b.push(A.format),b.push(A.type),b.push(A.generateMipmaps),b.push(A.premultiplyAlpha),b.push(A.flipY),b.push(A.unpackAlignment),b.push(A.colorSpace),b.join()}function $(A,b){const G=i.get(A);if(A.isVideoTexture&&Rt(A),A.isRenderTargetTexture===!1&&A.version>0&&G.__version!==A.version){const J=A.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{j(G,A,b);return}}e.bindTexture(n.TEXTURE_2D,G.__webglTexture,n.TEXTURE0+b)}function q(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,b);return}e.bindTexture(n.TEXTURE_2D_ARRAY,G.__webglTexture,n.TEXTURE0+b)}function Y(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){j(G,A,b);return}e.bindTexture(n.TEXTURE_3D,G.__webglTexture,n.TEXTURE0+b)}function V(A,b){const G=i.get(A);if(A.version>0&&G.__version!==A.version){ot(G,A,b);return}e.bindTexture(n.TEXTURE_CUBE_MAP,G.__webglTexture,n.TEXTURE0+b)}const it={[Ho]:n.REPEAT,[ls]:n.CLAMP_TO_EDGE,[El]:n.MIRRORED_REPEAT},rt={[pe]:n.NEAREST,[Ud]:n.NEAREST_MIPMAP_NEAREST,[Xr]:n.NEAREST_MIPMAP_LINEAR,[Vi]:n.LINEAR,[ga]:n.LINEAR_MIPMAP_NEAREST,[yn]:n.LINEAR_MIPMAP_LINEAR},xt={[Fd]:n.NEVER,[Wd]:n.ALWAYS,[Bd]:n.LESS,[nu]:n.LEQUAL,[kd]:n.EQUAL,[Vd]:n.GEQUAL,[Hd]:n.GREATER,[Gd]:n.NOTEQUAL};function Wt(A,b){if(b.type===Sn&&t.has("OES_texture_float_linear")===!1&&(b.magFilter===Vi||b.magFilter===ga||b.magFilter===Xr||b.magFilter===yn||b.minFilter===Vi||b.minFilter===ga||b.minFilter===Xr||b.minFilter===yn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(A,n.TEXTURE_WRAP_S,it[b.wrapS]),n.texParameteri(A,n.TEXTURE_WRAP_T,it[b.wrapT]),(A===n.TEXTURE_3D||A===n.TEXTURE_2D_ARRAY)&&n.texParameteri(A,n.TEXTURE_WRAP_R,it[b.wrapR]),n.texParameteri(A,n.TEXTURE_MAG_FILTER,rt[b.magFilter]),n.texParameteri(A,n.TEXTURE_MIN_FILTER,rt[b.minFilter]),b.compareFunction&&(n.texParameteri(A,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(A,n.TEXTURE_COMPARE_FUNC,xt[b.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(b.magFilter===pe||b.minFilter!==Xr&&b.minFilter!==yn||b.type===Sn&&t.has("OES_texture_float_linear")===!1)return;if(b.anisotropy>1||i.get(b).__currentAnisotropy){const G=t.get("EXT_texture_filter_anisotropic");n.texParameterf(A,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(b.anisotropy,s.getMaxAnisotropy())),i.get(b).__currentAnisotropy=b.anisotropy}}}function fe(A,b){let G=!1;A.__webglInit===void 0&&(A.__webglInit=!0,b.addEventListener("dispose",T));const J=b.source;let et=u.get(J);et===void 0&&(et={},u.set(J,et));const Z=H(b);if(Z!==A.__cacheKey){et[Z]===void 0&&(et[Z]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,G=!0),et[Z].usedTimes++;const Ct=et[A.__cacheKey];Ct!==void 0&&(et[A.__cacheKey].usedTimes--,Ct.usedTimes===0&&S(b)),A.__cacheKey=Z,A.__webglTexture=et[Z].texture}return G}function j(A,b,G){let J=n.TEXTURE_2D;(b.isDataArrayTexture||b.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),b.isData3DTexture&&(J=n.TEXTURE_3D);const et=fe(A,b),Z=b.source;e.bindTexture(J,A.__webglTexture,n.TEXTURE0+G);const Ct=i.get(Z);if(Z.version!==Ct.__version||et===!0){e.activeTexture(n.TEXTURE0+G);const dt=ne.getPrimaries(ne.workingColorSpace),_t=b.colorSpace===Gn?null:ne.getPrimaries(b.colorSpace),oe=b.colorSpace===Gn||dt===_t?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,oe);let at=x(b.image,!1,s.maxTextureSize);at=we(b,at);const vt=r.convert(b.format,b.colorSpace),Nt=r.convert(b.type);let Ft=y(b.internalFormat,vt,Nt,b.colorSpace,b.isVideoTexture);Wt(J,b);let Mt;const ie=b.mipmaps,Kt=b.isVideoTexture!==!0,Re=Ct.__version===void 0||et===!0,O=Z.dataReady,ut=P(b,at);if(b.isDepthTexture)Ft=_(b.format===qs,b.type),Re&&(Kt?e.texStorage2D(n.TEXTURE_2D,1,Ft,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Ft,at.width,at.height,0,vt,Nt,null));else if(b.isDataTexture)if(ie.length>0){Kt&&Re&&e.texStorage2D(n.TEXTURE_2D,ut,Ft,ie[0].width,ie[0].height);for(let K=0,Q=ie.length;K<Q;K++)Mt=ie[K],Kt?O&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,vt,Nt,Mt.data):e.texImage2D(n.TEXTURE_2D,K,Ft,Mt.width,Mt.height,0,vt,Nt,Mt.data);b.generateMipmaps=!1}else Kt?(Re&&e.texStorage2D(n.TEXTURE_2D,ut,Ft,at.width,at.height),O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,vt,Nt,at.data)):e.texImage2D(n.TEXTURE_2D,0,Ft,at.width,at.height,0,vt,Nt,at.data);else if(b.isCompressedTexture)if(b.isCompressedArrayTexture){Kt&&Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ft,ie[0].width,ie[0].height,at.depth);for(let K=0,Q=ie.length;K<Q;K++)if(Mt=ie[K],b.format!==Qi)if(vt!==null)if(Kt){if(O)if(b.layerUpdates.size>0){const gt=Jc(Mt.width,Mt.height,b.format,b.type);for(const pt of b.layerUpdates){const Xt=Mt.data.subarray(pt*gt/Mt.data.BYTES_PER_ELEMENT,(pt+1)*gt/Mt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,pt,Mt.width,Mt.height,1,vt,Xt)}b.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,at.depth,vt,Mt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,K,Ft,Mt.width,Mt.height,at.depth,0,Mt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Kt?O&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,K,0,0,0,Mt.width,Mt.height,at.depth,vt,Nt,Mt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,K,Ft,Mt.width,Mt.height,at.depth,0,vt,Nt,Mt.data)}else{Kt&&Re&&e.texStorage2D(n.TEXTURE_2D,ut,Ft,ie[0].width,ie[0].height);for(let K=0,Q=ie.length;K<Q;K++)Mt=ie[K],b.format!==Qi?vt!==null?Kt?O&&e.compressedTexSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,vt,Mt.data):e.compressedTexImage2D(n.TEXTURE_2D,K,Ft,Mt.width,Mt.height,0,Mt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Kt?O&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,Mt.width,Mt.height,vt,Nt,Mt.data):e.texImage2D(n.TEXTURE_2D,K,Ft,Mt.width,Mt.height,0,vt,Nt,Mt.data)}else if(b.isDataArrayTexture)if(Kt){if(Re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,Ft,at.width,at.height,at.depth),O)if(b.layerUpdates.size>0){const K=Jc(at.width,at.height,b.format,b.type);for(const Q of b.layerUpdates){const gt=at.data.subarray(Q*K/at.data.BYTES_PER_ELEMENT,(Q+1)*K/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Q,at.width,at.height,1,vt,Nt,gt)}b.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,vt,Nt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Ft,at.width,at.height,at.depth,0,vt,Nt,at.data);else if(b.isData3DTexture)Kt?(Re&&e.texStorage3D(n.TEXTURE_3D,ut,Ft,at.width,at.height,at.depth),O&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,vt,Nt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Ft,at.width,at.height,at.depth,0,vt,Nt,at.data);else if(b.isFramebufferTexture){if(Re)if(Kt)e.texStorage2D(n.TEXTURE_2D,ut,Ft,at.width,at.height);else{let K=at.width,Q=at.height;for(let gt=0;gt<ut;gt++)e.texImage2D(n.TEXTURE_2D,gt,Ft,K,Q,0,vt,Nt,null),K>>=1,Q>>=1}}else if(ie.length>0){if(Kt&&Re){const K=Dt(ie[0]);e.texStorage2D(n.TEXTURE_2D,ut,Ft,K.width,K.height)}for(let K=0,Q=ie.length;K<Q;K++)Mt=ie[K],Kt?O&&e.texSubImage2D(n.TEXTURE_2D,K,0,0,vt,Nt,Mt):e.texImage2D(n.TEXTURE_2D,K,Ft,vt,Nt,Mt);b.generateMipmaps=!1}else if(Kt){if(Re){const K=Dt(at);e.texStorage2D(n.TEXTURE_2D,ut,Ft,K.width,K.height)}O&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,vt,Nt,at)}else e.texImage2D(n.TEXTURE_2D,0,Ft,vt,Nt,at);g(b)&&p(J),Ct.__version=Z.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function ot(A,b,G){if(b.image.length!==6)return;const J=fe(A,b),et=b.source;e.bindTexture(n.TEXTURE_CUBE_MAP,A.__webglTexture,n.TEXTURE0+G);const Z=i.get(et);if(et.version!==Z.__version||J===!0){e.activeTexture(n.TEXTURE0+G);const Ct=ne.getPrimaries(ne.workingColorSpace),dt=b.colorSpace===Gn?null:ne.getPrimaries(b.colorSpace),_t=b.colorSpace===Gn||Ct===dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,b.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,b.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,b.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);const oe=b.isCompressedTexture||b.image[0].isCompressedTexture,at=b.image[0]&&b.image[0].isDataTexture,vt=[];for(let Q=0;Q<6;Q++)!oe&&!at?vt[Q]=x(b.image[Q],!0,s.maxCubemapSize):vt[Q]=at?b.image[Q].image:b.image[Q],vt[Q]=we(b,vt[Q]);const Nt=vt[0],Ft=r.convert(b.format,b.colorSpace),Mt=r.convert(b.type),ie=y(b.internalFormat,Ft,Mt,b.colorSpace),Kt=b.isVideoTexture!==!0,Re=Z.__version===void 0||J===!0,O=et.dataReady;let ut=P(b,Nt);Wt(n.TEXTURE_CUBE_MAP,b);let K;if(oe){Kt&&Re&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,ie,Nt.width,Nt.height);for(let Q=0;Q<6;Q++){K=vt[Q].mipmaps;for(let gt=0;gt<K.length;gt++){const pt=K[gt];b.format!==Qi?Ft!==null?Kt?O&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,pt.width,pt.height,Ft,pt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,ie,pt.width,pt.height,0,pt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,0,0,pt.width,pt.height,Ft,Mt,pt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt,ie,pt.width,pt.height,0,Ft,Mt,pt.data)}}}else{if(K=b.mipmaps,Kt&&Re){K.length>0&&ut++;const Q=Dt(vt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,ie,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(at){Kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,vt[Q].width,vt[Q].height,Ft,Mt,vt[Q].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ie,vt[Q].width,vt[Q].height,0,Ft,Mt,vt[Q].data);for(let gt=0;gt<K.length;gt++){const Xt=K[gt].image[Q].image;Kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,Xt.width,Xt.height,Ft,Mt,Xt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,ie,Xt.width,Xt.height,0,Ft,Mt,Xt.data)}}else{Kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ft,Mt,vt[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ie,Ft,Mt,vt[Q]);for(let gt=0;gt<K.length;gt++){const pt=K[gt];Kt?O&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,0,0,Ft,Mt,pt.image[Q]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Q,gt+1,ie,Ft,Mt,pt.image[Q])}}}g(b)&&p(n.TEXTURE_CUBE_MAP),Z.__version=et.version,b.onUpdate&&b.onUpdate(b)}A.__version=b.version}function St(A,b,G,J,et,Z){const Ct=r.convert(G.format,G.colorSpace),dt=r.convert(G.type),_t=y(G.internalFormat,Ct,dt,G.colorSpace),oe=i.get(b),at=i.get(G);if(at.__renderTarget=b,!oe.__hasExternalTextures){const vt=Math.max(1,b.width>>Z),Nt=Math.max(1,b.height>>Z);et===n.TEXTURE_3D||et===n.TEXTURE_2D_ARRAY?e.texImage3D(et,Z,_t,vt,Nt,b.depth,0,Ct,dt,null):e.texImage2D(et,Z,_t,vt,Nt,0,Ct,dt,null)}e.bindFramebuffer(n.FRAMEBUFFER,A),te(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,et,at.__webglTexture,0,Qt(b)):(et===n.TEXTURE_2D||et>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&et<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,et,at.__webglTexture,Z),e.bindFramebuffer(n.FRAMEBUFFER,null)}function ft(A,b,G){if(n.bindRenderbuffer(n.RENDERBUFFER,A),b.depthBuffer){const J=b.depthTexture,et=J&&J.isDepthTexture?J.type:null,Z=_(b.stencilBuffer,et),Ct=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,dt=Qt(b);te(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,dt,Z,b.width,b.height):G?n.renderbufferStorageMultisample(n.RENDERBUFFER,dt,Z,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,Z,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Ct,n.RENDERBUFFER,A)}else{const J=b.textures;for(let et=0;et<J.length;et++){const Z=J[et],Ct=r.convert(Z.format,Z.colorSpace),dt=r.convert(Z.type),_t=y(Z.internalFormat,Ct,dt,Z.colorSpace),oe=Qt(b);G&&te(b)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,oe,_t,b.width,b.height):te(b)?l.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,oe,_t,b.width,b.height):n.renderbufferStorage(n.RENDERBUFFER,_t,b.width,b.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Pt(A,b){if(b&&b.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,A),!(b.depthTexture&&b.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const J=i.get(b.depthTexture);J.__renderTarget=b,(!J.__webglTexture||b.depthTexture.image.width!==b.width||b.depthTexture.image.height!==b.height)&&(b.depthTexture.image.width=b.width,b.depthTexture.image.height=b.height,b.depthTexture.needsUpdate=!0),$(b.depthTexture,0);const et=J.__webglTexture,Z=Qt(b);if(b.depthTexture.format===Fs)te(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,et,0);else if(b.depthTexture.format===qs)te(b)?l.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,et,0);else throw new Error("Unknown depthTexture format")}function Ot(A){const b=i.get(A),G=A.isWebGLCubeRenderTarget===!0;if(b.__boundDepthTexture!==A.depthTexture){const J=A.depthTexture;if(b.__depthDisposeCallback&&b.__depthDisposeCallback(),J){const et=()=>{delete b.__boundDepthTexture,delete b.__depthDisposeCallback,J.removeEventListener("dispose",et)};J.addEventListener("dispose",et),b.__depthDisposeCallback=et}b.__boundDepthTexture=J}if(A.depthTexture&&!b.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");Pt(b.__webglFramebuffer,A)}else if(G){b.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer[J]),b.__webglDepthbuffer[J]===void 0)b.__webglDepthbuffer[J]=n.createRenderbuffer(),ft(b.__webglDepthbuffer[J],A,!1);else{const et=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=b.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Z),n.framebufferRenderbuffer(n.FRAMEBUFFER,et,n.RENDERBUFFER,Z)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,b.__webglFramebuffer),b.__webglDepthbuffer===void 0)b.__webglDepthbuffer=n.createRenderbuffer(),ft(b.__webglDepthbuffer,A,!1);else{const J=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,et=b.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,et),n.framebufferRenderbuffer(n.FRAMEBUFFER,J,n.RENDERBUFFER,et)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Ut(A,b,G){const J=i.get(A);b!==void 0&&St(J.__webglFramebuffer,A,A.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),G!==void 0&&Ot(A)}function kt(A){const b=A.texture,G=i.get(A),J=i.get(b);A.addEventListener("dispose",w);const et=A.textures,Z=A.isWebGLCubeRenderTarget===!0,Ct=et.length>1;if(Ct||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=b.version,a.memory.textures++),Z){G.__webglFramebuffer=[];for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer[dt]=[];for(let _t=0;_t<b.mipmaps.length;_t++)G.__webglFramebuffer[dt][_t]=n.createFramebuffer()}else G.__webglFramebuffer[dt]=n.createFramebuffer()}else{if(b.mipmaps&&b.mipmaps.length>0){G.__webglFramebuffer=[];for(let dt=0;dt<b.mipmaps.length;dt++)G.__webglFramebuffer[dt]=n.createFramebuffer()}else G.__webglFramebuffer=n.createFramebuffer();if(Ct)for(let dt=0,_t=et.length;dt<_t;dt++){const oe=i.get(et[dt]);oe.__webglTexture===void 0&&(oe.__webglTexture=n.createTexture(),a.memory.textures++)}if(A.samples>0&&te(A)===!1){G.__webglMultisampledFramebuffer=n.createFramebuffer(),G.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let dt=0;dt<et.length;dt++){const _t=et[dt];G.__webglColorRenderbuffer[dt]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,G.__webglColorRenderbuffer[dt]);const oe=r.convert(_t.format,_t.colorSpace),at=r.convert(_t.type),vt=y(_t.internalFormat,oe,at,_t.colorSpace,A.isXRRenderTarget===!0),Nt=Qt(A);n.renderbufferStorageMultisample(n.RENDERBUFFER,Nt,vt,A.width,A.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+dt,n.RENDERBUFFER,G.__webglColorRenderbuffer[dt])}n.bindRenderbuffer(n.RENDERBUFFER,null),A.depthBuffer&&(G.__webglDepthRenderbuffer=n.createRenderbuffer(),ft(G.__webglDepthRenderbuffer,A,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Z){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),Wt(n.TEXTURE_CUBE_MAP,b);for(let dt=0;dt<6;dt++)if(b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)St(G.__webglFramebuffer[dt][_t],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,_t);else St(G.__webglFramebuffer[dt],A,b,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+dt,0);g(b)&&p(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Ct){for(let dt=0,_t=et.length;dt<_t;dt++){const oe=et[dt],at=i.get(oe);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),Wt(n.TEXTURE_2D,oe),St(G.__webglFramebuffer,A,oe,n.COLOR_ATTACHMENT0+dt,n.TEXTURE_2D,0),g(oe)&&p(n.TEXTURE_2D)}e.unbindTexture()}else{let dt=n.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(dt=A.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(dt,J.__webglTexture),Wt(dt,b),b.mipmaps&&b.mipmaps.length>0)for(let _t=0;_t<b.mipmaps.length;_t++)St(G.__webglFramebuffer[_t],A,b,n.COLOR_ATTACHMENT0,dt,_t);else St(G.__webglFramebuffer,A,b,n.COLOR_ATTACHMENT0,dt,0);g(b)&&p(dt),e.unbindTexture()}A.depthBuffer&&Ot(A)}function Vt(A){const b=A.textures;for(let G=0,J=b.length;G<J;G++){const et=b[G];if(g(et)){const Z=M(A),Ct=i.get(et).__webglTexture;e.bindTexture(Z,Ct),p(Z),e.unbindTexture()}}}const ye=[],z=[];function Ye(A){if(A.samples>0){if(te(A)===!1){const b=A.textures,G=A.width,J=A.height;let et=n.COLOR_BUFFER_BIT;const Z=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Ct=i.get(A),dt=b.length>1;if(dt)for(let _t=0;_t<b.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglFramebuffer);for(let _t=0;_t<b.length;_t++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(et|=n.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(et|=n.STENCIL_BUFFER_BIT)),dt){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[_t]);const oe=i.get(b[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,oe,0)}n.blitFramebuffer(0,0,G,J,0,0,G,J,et,n.NEAREST),o===!0&&(ye.length=0,z.length=0,ye.push(n.COLOR_ATTACHMENT0+_t),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ye.push(Z),z.push(Z),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,z)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,ye))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),dt)for(let _t=0;_t<b.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,Ct.__webglColorRenderbuffer[_t]);const oe=i.get(b[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Ct.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,oe,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Ct.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&o){const b=A.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[b])}}}function Qt(A){return Math.min(s.maxSamples,A.samples)}function te(A){const b=i.get(A);return A.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&b.__useRenderToTexture!==!1}function Rt(A){const b=a.render.frame;f.get(A)!==b&&(f.set(A,b),A.update())}function we(A,b){const G=A.colorSpace,J=A.format,et=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||G!==Zs&&G!==Gn&&(ne.getTransfer(G)===_e?(J!==Qi||et!==Cn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),b}function Dt(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(h.width=A.naturalWidth||A.width,h.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(h.width=A.displayWidth,h.height=A.displayHeight):(h.width=A.width,h.height=A.height),h}this.allocateTextureUnit=N,this.resetTextureUnits=U,this.setTexture2D=$,this.setTexture2DArray=q,this.setTexture3D=Y,this.setTextureCube=V,this.rebindTextures=Ut,this.setupRenderTarget=kt,this.updateRenderTargetMipmap=Vt,this.updateMultisampleRenderTarget=Ye,this.setupDepthRenderbuffer=Ot,this.setupFrameBufferTexture=St,this.useMultisampledRTT=te}function Yx(n,t){function e(i,s=Gn){let r;const a=ne.getTransfer(s);if(i===Cn)return n.UNSIGNED_BYTE;if(i===_h)return n.UNSIGNED_SHORT_4_4_4_4;if(i===vh)return n.UNSIGNED_SHORT_5_5_5_1;if(i===$f)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Yf)return n.BYTE;if(i===Kf)return n.SHORT;if(i===Cr)return n.UNSIGNED_SHORT;if(i===xh)return n.INT;if(i===fs)return n.UNSIGNED_INT;if(i===Sn)return n.FLOAT;if(i===ln)return n.HALF_FLOAT;if(i===jf)return n.ALPHA;if(i===Zf)return n.RGB;if(i===Qi)return n.RGBA;if(i===Jf)return n.LUMINANCE;if(i===Qf)return n.LUMINANCE_ALPHA;if(i===Fs)return n.DEPTH_COMPONENT;if(i===qs)return n.DEPTH_STENCIL;if(i===tu)return n.RED;if(i===Mh)return n.RED_INTEGER;if(i===eu)return n.RG;if(i===yh)return n.RG_INTEGER;if(i===Sh)return n.RGBA_INTEGER;if(i===Po||i===Do||i===Io||i===Uo)if(a===_e)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Po)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Po)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Do)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Io)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Uo)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===wl||i===Tl||i===Al||i===Rl)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===wl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Tl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Al)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Rl)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Cl||i===Ll||i===Pl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Cl||i===Ll)return a===_e?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Pl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Dl||i===Il||i===Ul||i===Nl||i===Ol||i===zl||i===Fl||i===Bl||i===kl||i===Hl||i===Gl||i===Vl||i===Wl||i===Xl)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Dl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Il)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ul)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Nl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ol)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===zl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Fl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Bl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===kl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Hl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Gl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Vl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Wl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Xl)return a===_e?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===No||i===ql||i===Yl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===No)return a===_e?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===ql)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Yl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===iu||i===Kl||i===$l||i===jl)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===No)return r.COMPRESSED_RED_RGTC1_EXT;if(i===Kl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===$l)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===jl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Xs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class Kx extends Pi{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class ve extends We{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $x={type:"move"};class Wa{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ve,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ve,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ve,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null;const l=this._targetRay,o=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){a=!0;for(const x of t.hand.values()){const g=e.getJointPose(x,i),p=this._getHandJoint(h,x);g!==null&&(p.matrix.fromArray(g.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=g.radius),p.visible=g!==null}const f=h.joints["index-finger-tip"],c=h.joints["thumb-tip"],u=f.position.distanceTo(c.position),d=.02,m=.005;h.inputState.pinching&&u>d+m?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&u<=d-m&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));l!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1,this.dispatchEvent($x)))}return l!==null&&(l.visible=s!==null),o!==null&&(o.visible=r!==null),h!==null&&(h.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new ve;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const jx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Zx=`
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

}`;class Jx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new xi,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new fi({vertexShader:jx,fragmentShader:Zx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new An(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Qx extends Js{constructor(t,e){super();const i=this;let s=null,r=1,a=null,l="local-floor",o=1,h=null,f=null,c=null,u=null,d=null,m=null;const x=new Jx,g=e.getContextAttributes();let p=null,M=null;const y=[],_=[],P=new It;let T=null;const w=new Pi;w.viewport=new Ee;const C=new Pi;C.viewport=new Ee;const S=[w,C],v=new Kx;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let ot=y[j];return ot===void 0&&(ot=new Wa,y[j]=ot),ot.getTargetRaySpace()},this.getControllerGrip=function(j){let ot=y[j];return ot===void 0&&(ot=new Wa,y[j]=ot),ot.getGripSpace()},this.getHand=function(j){let ot=y[j];return ot===void 0&&(ot=new Wa,y[j]=ot),ot.getHandSpace()};function N(j){const ot=_.indexOf(j.inputSource);if(ot===-1)return;const St=y[ot];St!==void 0&&(St.update(j.inputSource,j.frame,h||a),St.dispatchEvent({type:j.type,data:j.inputSource}))}function H(){s.removeEventListener("select",N),s.removeEventListener("selectstart",N),s.removeEventListener("selectend",N),s.removeEventListener("squeeze",N),s.removeEventListener("squeezestart",N),s.removeEventListener("squeezeend",N),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",$);for(let j=0;j<y.length;j++){const ot=_[j];ot!==null&&(_[j]=null,y[j].disconnect(ot))}R=null,U=null,x.reset(),t.setRenderTarget(p),d=null,u=null,c=null,s=null,M=null,fe.stop(),i.isPresenting=!1,t.setPixelRatio(T),t.setSize(P.width,P.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){r=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){l=j,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||a},this.setReferenceSpace=function(j){h=j},this.getBaseLayer=function(){return u!==null?u:d},this.getBinding=function(){return c},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(j){if(s=j,s!==null){if(p=t.getRenderTarget(),s.addEventListener("select",N),s.addEventListener("selectstart",N),s.addEventListener("selectend",N),s.addEventListener("squeeze",N),s.addEventListener("squeezestart",N),s.addEventListener("squeezeend",N),s.addEventListener("end",H),s.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await e.makeXRCompatible(),T=t.getPixelRatio(),t.getSize(P),s.renderState.layers===void 0){const ot={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:r};d=new XRWebGLLayer(s,e,ot),s.updateRenderState({baseLayer:d}),t.setPixelRatio(1),t.setSize(d.framebufferWidth,d.framebufferHeight,!1),M=new Wi(d.framebufferWidth,d.framebufferHeight,{format:Qi,type:Cn,colorSpace:t.outputColorSpace,stencilBuffer:g.stencil})}else{let ot=null,St=null,ft=null;g.depth&&(ft=g.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ot=g.stencil?qs:Fs,St=g.stencil?Xs:fs);const Pt={colorFormat:e.RGBA8,depthFormat:ft,scaleFactor:r};c=new XRWebGLBinding(s,e),u=c.createProjectionLayer(Pt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),M=new Wi(u.textureWidth,u.textureHeight,{format:Qi,type:Cn,depthTexture:new mu(u.textureWidth,u.textureHeight,St,void 0,void 0,void 0,void 0,void 0,void 0,ot),stencilBuffer:g.stencil,colorSpace:t.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1})}M.isXRRenderTarget=!0,this.setFoveation(o),h=null,a=await s.requestReferenceSpace(l),fe.setContext(s),fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return x.getDepthTexture()};function $(j){for(let ot=0;ot<j.removed.length;ot++){const St=j.removed[ot],ft=_.indexOf(St);ft>=0&&(_[ft]=null,y[ft].disconnect(St))}for(let ot=0;ot<j.added.length;ot++){const St=j.added[ot];let ft=_.indexOf(St);if(ft===-1){for(let Ot=0;Ot<y.length;Ot++)if(Ot>=_.length){_.push(St),ft=Ot;break}else if(_[Ot]===null){_[Ot]=St,ft=Ot;break}if(ft===-1)break}const Pt=y[ft];Pt&&Pt.connect(St)}}const q=new L,Y=new L;function V(j,ot,St){q.setFromMatrixPosition(ot.matrixWorld),Y.setFromMatrixPosition(St.matrixWorld);const ft=q.distanceTo(Y),Pt=ot.projectionMatrix.elements,Ot=St.projectionMatrix.elements,Ut=Pt[14]/(Pt[10]-1),kt=Pt[14]/(Pt[10]+1),Vt=(Pt[9]+1)/Pt[5],ye=(Pt[9]-1)/Pt[5],z=(Pt[8]-1)/Pt[0],Ye=(Ot[8]+1)/Ot[0],Qt=Ut*z,te=Ut*Ye,Rt=ft/(-z+Ye),we=Rt*-z;if(ot.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(we),j.translateZ(Rt),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),Pt[10]===-1)j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse);else{const Dt=Ut+Rt,A=kt+Rt,b=Qt-we,G=te+(ft-we),J=Vt*kt/A*Dt,et=ye*kt/A*Dt;j.projectionMatrix.makePerspective(b,G,J,et,Dt,A),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function it(j,ot){ot===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(ot.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(s===null)return;let ot=j.near,St=j.far;x.texture!==null&&(x.depthNear>0&&(ot=x.depthNear),x.depthFar>0&&(St=x.depthFar)),v.near=C.near=w.near=ot,v.far=C.far=w.far=St,(R!==v.near||U!==v.far)&&(s.updateRenderState({depthNear:v.near,depthFar:v.far}),R=v.near,U=v.far),w.layers.mask=j.layers.mask|2,C.layers.mask=j.layers.mask|4,v.layers.mask=w.layers.mask|C.layers.mask;const ft=j.parent,Pt=v.cameras;it(v,ft);for(let Ot=0;Ot<Pt.length;Ot++)it(Pt[Ot],ft);Pt.length===2?V(v,w,C):v.projectionMatrix.copy(w.projectionMatrix),rt(j,v,ft)};function rt(j,ot,St){St===null?j.matrix.copy(ot.matrixWorld):(j.matrix.copy(St.matrixWorld),j.matrix.invert(),j.matrix.multiply(ot.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(ot.projectionMatrix),j.projectionMatrixInverse.copy(ot.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Jl*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return v},this.getFoveation=function(){if(!(u===null&&d===null))return o},this.setFoveation=function(j){o=j,u!==null&&(u.fixedFoveation=j),d!==null&&d.fixedFoveation!==void 0&&(d.fixedFoveation=j)},this.hasDepthSensing=function(){return x.texture!==null},this.getDepthSensingMesh=function(){return x.getMesh(v)};let xt=null;function Wt(j,ot){if(f=ot.getViewerPose(h||a),m=ot,f!==null){const St=f.views;d!==null&&(t.setRenderTargetFramebuffer(M,d.framebuffer),t.setRenderTarget(M));let ft=!1;St.length!==v.cameras.length&&(v.cameras.length=0,ft=!0);for(let Ot=0;Ot<St.length;Ot++){const Ut=St[Ot];let kt=null;if(d!==null)kt=d.getViewport(Ut);else{const ye=c.getViewSubImage(u,Ut);kt=ye.viewport,Ot===0&&(t.setRenderTargetTextures(M,ye.colorTexture,u.ignoreDepthValues?void 0:ye.depthStencilTexture),t.setRenderTarget(M))}let Vt=S[Ot];Vt===void 0&&(Vt=new Pi,Vt.layers.enable(Ot),Vt.viewport=new Ee,S[Ot]=Vt),Vt.matrix.fromArray(Ut.transform.matrix),Vt.matrix.decompose(Vt.position,Vt.quaternion,Vt.scale),Vt.projectionMatrix.fromArray(Ut.projectionMatrix),Vt.projectionMatrixInverse.copy(Vt.projectionMatrix).invert(),Vt.viewport.set(kt.x,kt.y,kt.width,kt.height),Ot===0&&(v.matrix.copy(Vt.matrix),v.matrix.decompose(v.position,v.quaternion,v.scale)),ft===!0&&v.cameras.push(Vt)}const Pt=s.enabledFeatures;if(Pt&&Pt.includes("depth-sensing")){const Ot=c.getDepthInformation(St[0]);Ot&&Ot.isValid&&Ot.texture&&x.init(t,Ot,s.renderState)}}for(let St=0;St<y.length;St++){const ft=_[St],Pt=y[St];ft!==null&&Pt!==void 0&&Pt.update(ft,ot,h||a)}xt&&xt(j,ot),ot.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ot}),m=null}const fe=new pu;fe.setAnimationLoop(Wt),this.setAnimationLoop=function(j){xt=j},this.dispose=function(){}}}const is=new nn,t1=new Pe;function e1(n,t){function e(g,p){g.matrixAutoUpdate===!0&&g.updateMatrix(),p.value.copy(g.matrix)}function i(g,p){p.color.getRGB(g.fogColor.value,fu(n)),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function s(g,p,M,y,_){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),c(g,p)):p.isMeshPhongMaterial?(r(g,p),f(g,p)):p.isMeshStandardMaterial?(r(g,p),u(g,p),p.isMeshPhysicalMaterial&&d(g,p,_)):p.isMeshMatcapMaterial?(r(g,p),m(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),x(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(a(g,p),p.isLineDashedMaterial&&l(g,p)):p.isPointsMaterial?o(g,p,M,y):p.isSpriteMaterial?h(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.bumpMap&&(g.bumpMap.value=p.bumpMap,e(p.bumpMap,g.bumpMapTransform),g.bumpScale.value=p.bumpScale,p.side===gi&&(g.bumpScale.value*=-1)),p.normalMap&&(g.normalMap.value=p.normalMap,e(p.normalMap,g.normalMapTransform),g.normalScale.value.copy(p.normalScale),p.side===gi&&g.normalScale.value.negate()),p.displacementMap&&(g.displacementMap.value=p.displacementMap,e(p.displacementMap,g.displacementMapTransform),g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,g.emissiveMapTransform)),p.specularMap&&(g.specularMap.value=p.specularMap,e(p.specularMap,g.specularMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const M=t.get(p),y=M.envMap,_=M.envMapRotation;y&&(g.envMap.value=y,is.copy(_),is.x*=-1,is.y*=-1,is.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(is.y*=-1,is.z*=-1),g.envMapRotation.value.setFromMatrix4(t1.makeRotationFromEuler(is)),g.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap&&(g.lightMap.value=p.lightMap,g.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,g.lightMapTransform)),p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,g.aoMapTransform))}function a(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform))}function l(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function o(g,p,M,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*M,g.scale.value=y*.5,p.map&&(g.map.value=p.map,e(p.map,g.uvTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function h(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map,e(p.map,g.mapTransform)),p.alphaMap&&(g.alphaMap.value=p.alphaMap,e(p.alphaMap,g.alphaMapTransform)),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest)}function f(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function c(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function u(g,p){g.metalness.value=p.metalness,p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,g.metalnessMapTransform)),g.roughness.value=p.roughness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,g.roughnessMapTransform)),p.envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function d(g,p,M){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,g.sheenColorMapTransform)),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,g.sheenRoughnessMapTransform))),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,g.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(g.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===gi&&g.clearcoatNormalScale.value.negate())),p.dispersion>0&&(g.dispersion.value=p.dispersion),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,g.iridescenceMapTransform)),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=M.texture,g.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,g.transmissionMapTransform)),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(g.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(g.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,g.specularColorMapTransform)),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,p){p.matcap&&(g.matcap.value=p.matcap)}function x(g,p){const M=t.get(p).light;g.referencePosition.value.setFromMatrixPosition(M.matrixWorld),g.nearDistance.value=M.shadow.camera.near,g.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function i1(n,t,e,i){let s={},r={},a=[];const l=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(M,y){const _=y.program;i.uniformBlockBinding(M,_)}function h(M,y){let _=s[M.id];_===void 0&&(m(M),_=f(M),s[M.id]=_,M.addEventListener("dispose",g));const P=y.program;i.updateUBOMapping(M,P);const T=t.render.frame;r[M.id]!==T&&(u(M),r[M.id]=T)}function f(M){const y=c();M.__bindingPointIndex=y;const _=n.createBuffer(),P=M.__size,T=M.usage;return n.bindBuffer(n.UNIFORM_BUFFER,_),n.bufferData(n.UNIFORM_BUFFER,P,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,y,_),_}function c(){for(let M=0;M<l;M++)if(a.indexOf(M)===-1)return a.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(M){const y=s[M.id],_=M.uniforms,P=M.__cache;n.bindBuffer(n.UNIFORM_BUFFER,y);for(let T=0,w=_.length;T<w;T++){const C=Array.isArray(_[T])?_[T]:[_[T]];for(let S=0,v=C.length;S<v;S++){const R=C[S];if(d(R,T,S,P)===!0){const U=R.__offset,N=Array.isArray(R.value)?R.value:[R.value];let H=0;for(let $=0;$<N.length;$++){const q=N[$],Y=x(q);typeof q=="number"||typeof q=="boolean"?(R.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,U+H,R.__data)):q.isMatrix3?(R.__data[0]=q.elements[0],R.__data[1]=q.elements[1],R.__data[2]=q.elements[2],R.__data[3]=0,R.__data[4]=q.elements[3],R.__data[5]=q.elements[4],R.__data[6]=q.elements[5],R.__data[7]=0,R.__data[8]=q.elements[6],R.__data[9]=q.elements[7],R.__data[10]=q.elements[8],R.__data[11]=0):(q.toArray(R.__data,H),H+=Y.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,R.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function d(M,y,_,P){const T=M.value,w=y+"_"+_;if(P[w]===void 0)return typeof T=="number"||typeof T=="boolean"?P[w]=T:P[w]=T.clone(),!0;{const C=P[w];if(typeof T=="number"||typeof T=="boolean"){if(C!==T)return P[w]=T,!0}else if(C.equals(T)===!1)return C.copy(T),!0}return!1}function m(M){const y=M.uniforms;let _=0;const P=16;for(let w=0,C=y.length;w<C;w++){const S=Array.isArray(y[w])?y[w]:[y[w]];for(let v=0,R=S.length;v<R;v++){const U=S[v],N=Array.isArray(U.value)?U.value:[U.value];for(let H=0,$=N.length;H<$;H++){const q=N[H],Y=x(q),V=_%P,it=V%Y.boundary,rt=V+it;_+=it,rt!==0&&P-rt<Y.storage&&(_+=P-rt),U.__data=new Float32Array(Y.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=_,_+=Y.storage}}}const T=_%P;return T>0&&(_+=P-T),M.__size=_,M.__cache={},this}function x(M){const y={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(y.boundary=4,y.storage=4):M.isVector2?(y.boundary=8,y.storage=8):M.isVector3||M.isColor?(y.boundary=16,y.storage=12):M.isVector4?(y.boundary=16,y.storage=16):M.isMatrix3?(y.boundary=48,y.storage=48):M.isMatrix4?(y.boundary=64,y.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),y}function g(M){const y=M.target;y.removeEventListener("dispose",g);const _=a.indexOf(y.__bindingPointIndex);a.splice(_,1),n.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(const M in s)n.deleteBuffer(s[M]);a=[],s={},r={}}return{bind:o,update:h,dispose:p}}class n1{constructor(t={}){const{canvas:e=qd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:l=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:h=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:c=!1,reverseDepthBuffer:u=!1}=t;this.isWebGLRenderer=!0;let d;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=i.getContextAttributes().alpha}else d=a;const m=new Uint32Array(4),x=new Int32Array(4);let g=null,p=null;const M=[],y=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=wn,this.toneMappingExposure=1;const _=this;let P=!1,T=0,w=0,C=null,S=-1,v=null;const R=new Ee,U=new Ee;let N=null;const H=new yt(0);let $=0,q=e.width,Y=e.height,V=1,it=null,rt=null;const xt=new Ee(0,0,q,Y),Wt=new Ee(0,0,q,Y);let fe=!1;const j=new wh;let ot=!1,St=!1;const ft=new Pe,Pt=new Pe,Ot=new L,Ut=new Ee,kt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Vt=!1;function ye(){return C===null?V:1}let z=i;function Ye(E,F){return e.getContext(E,F)}try{const E={alpha:!0,depth:s,stencil:r,antialias:l,premultipliedAlpha:o,preserveDrawingBuffer:h,powerPreference:f,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${mh}`),e.addEventListener("webglcontextlost",Q,!1),e.addEventListener("webglcontextrestored",gt,!1),e.addEventListener("webglcontextcreationerror",pt,!1),z===null){const F="webgl2";if(z=Ye(F,E),z===null)throw Ye(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let Qt,te,Rt,we,Dt,A,b,G,J,et,Z,Ct,dt,_t,oe,at,vt,Nt,Ft,Mt,ie,Kt,Re,O;function ut(){Qt=new lg(z),Qt.init(),Kt=new Yx(z,Qt),te=new ig(z,Qt,t,Kt),Rt=new Wx(z,Qt),te.reverseDepthBuffer&&u&&Rt.buffers.depth.setReversed(!0),we=new fg(z),Dt=new Cx,A=new qx(z,Qt,Rt,Dt,te,Kt,we),b=new sg(_),G=new ag(_),J=new _p(z),Re=new tg(z,J),et=new hg(z,J,we,Re),Z=new dg(z,et,J,we),Ft=new ug(z,te,A),at=new ng(Dt),Ct=new Rx(_,b,G,Qt,te,Re,at),dt=new e1(_,Dt),_t=new Px,oe=new zx(Qt),Nt=new Qm(_,b,G,Rt,Z,d,o),vt=new Gx(_,Z,te),O=new i1(z,we,te,Rt),Mt=new eg(z,Qt,we),ie=new cg(z,Qt,we),we.programs=Ct.programs,_.capabilities=te,_.extensions=Qt,_.properties=Dt,_.renderLists=_t,_.shadowMap=vt,_.state=Rt,_.info=we}ut();const K=new Qx(_,z);this.xr=K,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const E=Qt.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=Qt.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(E){E!==void 0&&(V=E,this.setSize(q,Y,!1))},this.getSize=function(E){return E.set(q,Y)},this.setSize=function(E,F,W=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=E,Y=F,e.width=Math.floor(E*V),e.height=Math.floor(F*V),W===!0&&(e.style.width=E+"px",e.style.height=F+"px"),this.setViewport(0,0,E,F)},this.getDrawingBufferSize=function(E){return E.set(q*V,Y*V).floor()},this.setDrawingBufferSize=function(E,F,W){q=E,Y=F,V=W,e.width=Math.floor(E*W),e.height=Math.floor(F*W),this.setViewport(0,0,E,F)},this.getCurrentViewport=function(E){return E.copy(R)},this.getViewport=function(E){return E.copy(xt)},this.setViewport=function(E,F,W,X){E.isVector4?xt.set(E.x,E.y,E.z,E.w):xt.set(E,F,W,X),Rt.viewport(R.copy(xt).multiplyScalar(V).round())},this.getScissor=function(E){return E.copy(Wt)},this.setScissor=function(E,F,W,X){E.isVector4?Wt.set(E.x,E.y,E.z,E.w):Wt.set(E,F,W,X),Rt.scissor(U.copy(Wt).multiplyScalar(V).round())},this.getScissorTest=function(){return fe},this.setScissorTest=function(E){Rt.setScissorTest(fe=E)},this.setOpaqueSort=function(E){it=E},this.setTransparentSort=function(E){rt=E},this.getClearColor=function(E){return E.copy(Nt.getClearColor())},this.setClearColor=function(){Nt.setClearColor.apply(Nt,arguments)},this.getClearAlpha=function(){return Nt.getClearAlpha()},this.setClearAlpha=function(){Nt.setClearAlpha.apply(Nt,arguments)},this.clear=function(E=!0,F=!0,W=!0){let X=0;if(E){let B=!1;if(C!==null){const lt=C.texture.format;B=lt===Sh||lt===yh||lt===Mh}if(B){const lt=C.texture.type,mt=lt===Cn||lt===fs||lt===Cr||lt===Xs||lt===_h||lt===vh,bt=Nt.getClearColor(),Et=Nt.getClearAlpha(),Bt=bt.r,qt=bt.g,wt=bt.b;mt?(m[0]=Bt,m[1]=qt,m[2]=wt,m[3]=Et,z.clearBufferuiv(z.COLOR,0,m)):(x[0]=Bt,x[1]=qt,x[2]=wt,x[3]=Et,z.clearBufferiv(z.COLOR,0,x))}else X|=z.COLOR_BUFFER_BIT}F&&(X|=z.DEPTH_BUFFER_BIT),W&&(X|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(X)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",Q,!1),e.removeEventListener("webglcontextrestored",gt,!1),e.removeEventListener("webglcontextcreationerror",pt,!1),_t.dispose(),oe.dispose(),Dt.dispose(),b.dispose(),G.dispose(),Z.dispose(),Re.dispose(),O.dispose(),Ct.dispose(),K.dispose(),K.removeEventListener("sessionstart",$h),K.removeEventListener("sessionend",jh),jn.stop()};function Q(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function gt(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const E=we.autoReset,F=vt.enabled,W=vt.autoUpdate,X=vt.needsUpdate,B=vt.type;ut(),we.autoReset=E,vt.enabled=F,vt.autoUpdate=W,vt.needsUpdate=X,vt.type=B}function pt(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Xt(E){const F=E.target;F.removeEventListener("dispose",Xt),ze(F)}function ze(E){ai(E),Dt.remove(E)}function ai(E){const F=Dt.get(E).programs;F!==void 0&&(F.forEach(function(W){Ct.releaseProgram(W)}),E.isShaderMaterial&&Ct.releaseShaderCache(E))}this.renderBufferDirect=function(E,F,W,X,B,lt){F===null&&(F=kt);const mt=B.isMesh&&B.matrixWorld.determinant()<0,bt=ld(E,F,W,X,B);Rt.setMaterial(X,mt);let Et=W.index,Bt=1;if(X.wireframe===!0){if(Et=et.getWireframeAttribute(W),Et===void 0)return;Bt=2}const qt=W.drawRange,wt=W.attributes.position;let he=qt.start*Bt,Ce=(qt.start+qt.count)*Bt;lt!==null&&(he=Math.max(he,lt.start*Bt),Ce=Math.min(Ce,(lt.start+lt.count)*Bt)),Et!==null?(he=Math.max(he,0),Ce=Math.min(Ce,Et.count)):wt!=null&&(he=Math.max(he,0),Ce=Math.min(Ce,wt.count));const De=Ce-he;if(De<0||De===1/0)return;Re.setup(B,X,bt,W,Et);let Mi,me=Mt;if(Et!==null&&(Mi=J.get(Et),me=ie,me.setIndex(Mi)),B.isMesh)X.wireframe===!0?(Rt.setLineWidth(X.wireframeLinewidth*ye()),me.setMode(z.LINES)):me.setMode(z.TRIANGLES);else if(B.isLine){let Lt=X.linewidth;Lt===void 0&&(Lt=1),Rt.setLineWidth(Lt*ye()),B.isLineSegments?me.setMode(z.LINES):B.isLineLoop?me.setMode(z.LINE_LOOP):me.setMode(z.LINE_STRIP)}else B.isPoints?me.setMode(z.POINTS):B.isSprite&&me.setMode(z.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)me.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Qt.get("WEBGL_multi_draw"))me.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Lt=B._multiDrawStarts,un=B._multiDrawCounts,ge=B._multiDrawCount,Yi=Et?J.get(Et).bytesPerElement:1,ms=Dt.get(X).currentProgram.getUniforms();for(let Ti=0;Ti<ge;Ti++)ms.setValue(z,"_gl_DrawID",Ti),me.render(Lt[Ti]/Yi,un[Ti])}else if(B.isInstancedMesh)me.renderInstances(he,De,B.count);else if(W.isInstancedBufferGeometry){const Lt=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,un=Math.min(W.instanceCount,Lt);me.renderInstances(he,De,un)}else me.render(he,De)};function xe(E,F,W){E.transparent===!0&&E.side===bi&&E.forceSinglePass===!1?(E.side=gi,E.needsUpdate=!0,Wr(E,F,W),E.side=Kn,E.needsUpdate=!0,Wr(E,F,W),E.side=bi):Wr(E,F,W)}this.compile=function(E,F,W=null){W===null&&(W=E),p=oe.get(W),p.init(F),y.push(p),W.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),E!==W&&E.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(p.pushLight(B),B.castShadow&&p.pushShadow(B))}),p.setupLights();const X=new Set;return E.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const lt=B.material;if(lt)if(Array.isArray(lt))for(let mt=0;mt<lt.length;mt++){const bt=lt[mt];xe(bt,W,B),X.add(bt)}else xe(lt,W,B),X.add(lt)}),y.pop(),p=null,X},this.compileAsync=function(E,F,W=null){const X=this.compile(E,F,W);return new Promise(B=>{function lt(){if(X.forEach(function(mt){Dt.get(mt).currentProgram.isReady()&&X.delete(mt)}),X.size===0){B(E);return}setTimeout(lt,10)}Qt.get("KHR_parallel_shader_compile")!==null?lt():setTimeout(lt,10)})};let qi=null;function fn(E){qi&&qi(E)}function $h(){jn.stop()}function jh(){jn.start()}const jn=new pu;jn.setAnimationLoop(fn),typeof self<"u"&&jn.setContext(self),this.setAnimationLoop=function(E){qi=E,K.setAnimationLoop(E),E===null?jn.stop():jn.start()},K.addEventListener("sessionstart",$h),K.addEventListener("sessionend",jh),this.render=function(E,F){if(F!==void 0&&F.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(F),F=K.getCamera()),E.isScene===!0&&E.onBeforeRender(_,E,F,C),p=oe.get(E,y.length),p.init(F),y.push(p),Pt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),j.setFromProjectionMatrix(Pt),St=this.localClippingEnabled,ot=at.init(this.clippingPlanes,St),g=_t.get(E,M.length),g.init(),M.push(g),K.enabled===!0&&K.isPresenting===!0){const lt=_.xr.getDepthSensingMesh();lt!==null&&ma(lt,F,-1/0,_.sortObjects)}ma(E,F,0,_.sortObjects),g.finish(),_.sortObjects===!0&&g.sort(it,rt),Vt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,Vt&&Nt.addToRenderList(g,E),this.info.render.frame++,ot===!0&&at.beginShadows();const W=p.state.shadowsArray;vt.render(W,E,F),ot===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const X=g.opaque,B=g.transmissive;if(p.setupLights(),F.isArrayCamera){const lt=F.cameras;if(B.length>0)for(let mt=0,bt=lt.length;mt<bt;mt++){const Et=lt[mt];Jh(X,B,E,Et)}Vt&&Nt.render(E);for(let mt=0,bt=lt.length;mt<bt;mt++){const Et=lt[mt];Zh(g,E,Et,Et.viewport)}}else B.length>0&&Jh(X,B,E,F),Vt&&Nt.render(E),Zh(g,E,F);C!==null&&(A.updateMultisampleRenderTarget(C),A.updateRenderTargetMipmap(C)),E.isScene===!0&&E.onAfterRender(_,E,F),Re.resetDefaultState(),S=-1,v=null,y.pop(),y.length>0?(p=y[y.length-1],ot===!0&&at.setGlobalState(_.clippingPlanes,p.state.camera)):p=null,M.pop(),M.length>0?g=M[M.length-1]:g=null};function ma(E,F,W,X){if(E.visible===!1)return;if(E.layers.test(F.layers)){if(E.isGroup)W=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(F);else if(E.isLight)p.pushLight(E),E.castShadow&&p.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||j.intersectsSprite(E)){X&&Ut.setFromMatrixPosition(E.matrixWorld).applyMatrix4(Pt);const mt=Z.update(E),bt=E.material;bt.visible&&g.push(E,mt,bt,W,Ut.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(!E.frustumCulled||j.intersectsObject(E))){const mt=Z.update(E),bt=E.material;if(X&&(E.boundingSphere!==void 0?(E.boundingSphere===null&&E.computeBoundingSphere(),Ut.copy(E.boundingSphere.center)):(mt.boundingSphere===null&&mt.computeBoundingSphere(),Ut.copy(mt.boundingSphere.center)),Ut.applyMatrix4(E.matrixWorld).applyMatrix4(Pt)),Array.isArray(bt)){const Et=mt.groups;for(let Bt=0,qt=Et.length;Bt<qt;Bt++){const wt=Et[Bt],he=bt[wt.materialIndex];he&&he.visible&&g.push(E,mt,he,W,Ut.z,wt)}}else bt.visible&&g.push(E,mt,bt,W,Ut.z,null)}}const lt=E.children;for(let mt=0,bt=lt.length;mt<bt;mt++)ma(lt[mt],F,W,X)}function Zh(E,F,W,X){const B=E.opaque,lt=E.transmissive,mt=E.transparent;p.setupLightsView(W),ot===!0&&at.setGlobalState(_.clippingPlanes,W),X&&Rt.viewport(R.copy(X)),B.length>0&&Vr(B,F,W),lt.length>0&&Vr(lt,F,W),mt.length>0&&Vr(mt,F,W),Rt.buffers.depth.setTest(!0),Rt.buffers.depth.setMask(!0),Rt.buffers.color.setMask(!0),Rt.setPolygonOffset(!1)}function Jh(E,F,W,X){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[X.id]===void 0&&(p.state.transmissionRenderTarget[X.id]=new Wi(1,1,{generateMipmaps:!0,type:Qt.has("EXT_color_buffer_half_float")||Qt.has("EXT_color_buffer_float")?ln:Cn,minFilter:yn,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ne.workingColorSpace}));const lt=p.state.transmissionRenderTarget[X.id],mt=X.viewport||R;lt.setSize(mt.z,mt.w);const bt=_.getRenderTarget();_.setRenderTarget(lt),_.getClearColor(H),$=_.getClearAlpha(),$<1&&_.setClearColor(16777215,.5),_.clear(),Vt&&Nt.render(W);const Et=_.toneMapping;_.toneMapping=wn;const Bt=X.viewport;if(X.viewport!==void 0&&(X.viewport=void 0),p.setupLightsView(X),ot===!0&&at.setGlobalState(_.clippingPlanes,X),Vr(E,W,X),A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt),Qt.has("WEBGL_multisampled_render_to_texture")===!1){let qt=!1;for(let wt=0,he=F.length;wt<he;wt++){const Ce=F[wt],De=Ce.object,Mi=Ce.geometry,me=Ce.material,Lt=Ce.group;if(me.side===bi&&De.layers.test(X.layers)){const un=me.side;me.side=gi,me.needsUpdate=!0,Qh(De,W,X,Mi,me,Lt),me.side=un,me.needsUpdate=!0,qt=!0}}qt===!0&&(A.updateMultisampleRenderTarget(lt),A.updateRenderTargetMipmap(lt))}_.setRenderTarget(bt),_.setClearColor(H,$),Bt!==void 0&&(X.viewport=Bt),_.toneMapping=Et}function Vr(E,F,W){const X=F.isScene===!0?F.overrideMaterial:null;for(let B=0,lt=E.length;B<lt;B++){const mt=E[B],bt=mt.object,Et=mt.geometry,Bt=X===null?mt.material:X,qt=mt.group;bt.layers.test(W.layers)&&Qh(bt,F,W,Et,Bt,qt)}}function Qh(E,F,W,X,B,lt){E.onBeforeRender(_,F,W,X,B,lt),E.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),B.onBeforeRender(_,F,W,X,E,lt),B.transparent===!0&&B.side===bi&&B.forceSinglePass===!1?(B.side=gi,B.needsUpdate=!0,_.renderBufferDirect(W,F,X,B,E,lt),B.side=Kn,B.needsUpdate=!0,_.renderBufferDirect(W,F,X,B,E,lt),B.side=bi):_.renderBufferDirect(W,F,X,B,E,lt),E.onAfterRender(_,F,W,X,B,lt)}function Wr(E,F,W){F.isScene!==!0&&(F=kt);const X=Dt.get(E),B=p.state.lights,lt=p.state.shadowsArray,mt=B.state.version,bt=Ct.getParameters(E,B.state,lt,F,W),Et=Ct.getProgramCacheKey(bt);let Bt=X.programs;X.environment=E.isMeshStandardMaterial?F.environment:null,X.fog=F.fog,X.envMap=(E.isMeshStandardMaterial?G:b).get(E.envMap||X.environment),X.envMapRotation=X.environment!==null&&E.envMap===null?F.environmentRotation:E.envMapRotation,Bt===void 0&&(E.addEventListener("dispose",Xt),Bt=new Map,X.programs=Bt);let qt=Bt.get(Et);if(qt!==void 0){if(X.currentProgram===qt&&X.lightsStateVersion===mt)return ec(E,bt),qt}else bt.uniforms=Ct.getUniforms(E),E.onBeforeCompile(bt,_),qt=Ct.acquireProgram(bt,Et),Bt.set(Et,qt),X.uniforms=bt.uniforms;const wt=X.uniforms;return(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(wt.clippingPlanes=at.uniform),ec(E,bt),X.needsLights=cd(E),X.lightsStateVersion=mt,X.needsLights&&(wt.ambientLightColor.value=B.state.ambient,wt.lightProbe.value=B.state.probe,wt.directionalLights.value=B.state.directional,wt.directionalLightShadows.value=B.state.directionalShadow,wt.spotLights.value=B.state.spot,wt.spotLightShadows.value=B.state.spotShadow,wt.rectAreaLights.value=B.state.rectArea,wt.ltc_1.value=B.state.rectAreaLTC1,wt.ltc_2.value=B.state.rectAreaLTC2,wt.pointLights.value=B.state.point,wt.pointLightShadows.value=B.state.pointShadow,wt.hemisphereLights.value=B.state.hemi,wt.directionalShadowMap.value=B.state.directionalShadowMap,wt.directionalShadowMatrix.value=B.state.directionalShadowMatrix,wt.spotShadowMap.value=B.state.spotShadowMap,wt.spotLightMatrix.value=B.state.spotLightMatrix,wt.spotLightMap.value=B.state.spotLightMap,wt.pointShadowMap.value=B.state.pointShadowMap,wt.pointShadowMatrix.value=B.state.pointShadowMatrix),X.currentProgram=qt,X.uniformsList=null,qt}function tc(E){if(E.uniformsList===null){const F=E.currentProgram.getUniforms();E.uniformsList=zo.seqWithValue(F.seq,E.uniforms)}return E.uniformsList}function ec(E,F){const W=Dt.get(E);W.outputColorSpace=F.outputColorSpace,W.batching=F.batching,W.batchingColor=F.batchingColor,W.instancing=F.instancing,W.instancingColor=F.instancingColor,W.instancingMorph=F.instancingMorph,W.skinning=F.skinning,W.morphTargets=F.morphTargets,W.morphNormals=F.morphNormals,W.morphColors=F.morphColors,W.morphTargetsCount=F.morphTargetsCount,W.numClippingPlanes=F.numClippingPlanes,W.numIntersection=F.numClipIntersection,W.vertexAlphas=F.vertexAlphas,W.vertexTangents=F.vertexTangents,W.toneMapping=F.toneMapping}function ld(E,F,W,X,B){F.isScene!==!0&&(F=kt),A.resetTextureUnits();const lt=F.fog,mt=X.isMeshStandardMaterial?F.environment:null,bt=C===null?_.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:Zs,Et=(X.isMeshStandardMaterial?G:b).get(X.envMap||mt),Bt=X.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,qt=!!W.attributes.tangent&&(!!X.normalMap||X.anisotropy>0),wt=!!W.morphAttributes.position,he=!!W.morphAttributes.normal,Ce=!!W.morphAttributes.color;let De=wn;X.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(De=_.toneMapping);const Mi=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,me=Mi!==void 0?Mi.length:0,Lt=Dt.get(X),un=p.state.lights;if(ot===!0&&(St===!0||E!==v)){const Bi=E===v&&X.id===S;at.setState(X,E,Bi)}let ge=!1;X.version===Lt.__version?(Lt.needsLights&&Lt.lightsStateVersion!==un.state.version||Lt.outputColorSpace!==bt||B.isBatchedMesh&&Lt.batching===!1||!B.isBatchedMesh&&Lt.batching===!0||B.isBatchedMesh&&Lt.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Lt.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Lt.instancing===!1||!B.isInstancedMesh&&Lt.instancing===!0||B.isSkinnedMesh&&Lt.skinning===!1||!B.isSkinnedMesh&&Lt.skinning===!0||B.isInstancedMesh&&Lt.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Lt.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Lt.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Lt.instancingMorph===!1&&B.morphTexture!==null||Lt.envMap!==Et||X.fog===!0&&Lt.fog!==lt||Lt.numClippingPlanes!==void 0&&(Lt.numClippingPlanes!==at.numPlanes||Lt.numIntersection!==at.numIntersection)||Lt.vertexAlphas!==Bt||Lt.vertexTangents!==qt||Lt.morphTargets!==wt||Lt.morphNormals!==he||Lt.morphColors!==Ce||Lt.toneMapping!==De||Lt.morphTargetsCount!==me)&&(ge=!0):(ge=!0,Lt.__version=X.version);let Yi=Lt.currentProgram;ge===!0&&(Yi=Wr(X,F,B));let ms=!1,Ti=!1,nr=!1;const Ie=Yi.getUniforms(),sn=Lt.uniforms;if(Rt.useProgram(Yi.program)&&(ms=!0,Ti=!0,nr=!0),X.id!==S&&(S=X.id,Ti=!0),ms||v!==E){Rt.buffers.depth.getReversed()?(ft.copy(E.projectionMatrix),Kd(ft),$d(ft),Ie.setValue(z,"projectionMatrix",ft)):Ie.setValue(z,"projectionMatrix",E.projectionMatrix),Ie.setValue(z,"viewMatrix",E.matrixWorldInverse);const Dn=Ie.map.cameraPosition;Dn!==void 0&&Dn.setValue(z,Ot.setFromMatrixPosition(E.matrixWorld)),te.logarithmicDepthBuffer&&Ie.setValue(z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),(X.isMeshPhongMaterial||X.isMeshToonMaterial||X.isMeshLambertMaterial||X.isMeshBasicMaterial||X.isMeshStandardMaterial||X.isShaderMaterial)&&Ie.setValue(z,"isOrthographic",E.isOrthographicCamera===!0),v!==E&&(v=E,Ti=!0,nr=!0)}if(B.isSkinnedMesh){Ie.setOptional(z,B,"bindMatrix"),Ie.setOptional(z,B,"bindMatrixInverse");const Bi=B.skeleton;Bi&&(Bi.boneTexture===null&&Bi.computeBoneTexture(),Ie.setValue(z,"boneTexture",Bi.boneTexture,A))}B.isBatchedMesh&&(Ie.setOptional(z,B,"batchingTexture"),Ie.setValue(z,"batchingTexture",B._matricesTexture,A),Ie.setOptional(z,B,"batchingIdTexture"),Ie.setValue(z,"batchingIdTexture",B._indirectTexture,A),Ie.setOptional(z,B,"batchingColorTexture"),B._colorsTexture!==null&&Ie.setValue(z,"batchingColorTexture",B._colorsTexture,A));const sr=W.morphAttributes;if((sr.position!==void 0||sr.normal!==void 0||sr.color!==void 0)&&Ft.update(B,W,Yi),(Ti||Lt.receiveShadow!==B.receiveShadow)&&(Lt.receiveShadow=B.receiveShadow,Ie.setValue(z,"receiveShadow",B.receiveShadow)),X.isMeshGouraudMaterial&&X.envMap!==null&&(sn.envMap.value=Et,sn.flipEnvMap.value=Et.isCubeTexture&&Et.isRenderTargetTexture===!1?-1:1),X.isMeshStandardMaterial&&X.envMap===null&&F.environment!==null&&(sn.envMapIntensity.value=F.environmentIntensity),Ti&&(Ie.setValue(z,"toneMappingExposure",_.toneMappingExposure),Lt.needsLights&&hd(sn,nr),lt&&X.fog===!0&&dt.refreshFogUniforms(sn,lt),dt.refreshMaterialUniforms(sn,X,V,Y,p.state.transmissionRenderTarget[E.id]),zo.upload(z,tc(Lt),sn,A)),X.isShaderMaterial&&X.uniformsNeedUpdate===!0&&(zo.upload(z,tc(Lt),sn,A),X.uniformsNeedUpdate=!1),X.isSpriteMaterial&&Ie.setValue(z,"center",B.center),Ie.setValue(z,"modelViewMatrix",B.modelViewMatrix),Ie.setValue(z,"normalMatrix",B.normalMatrix),Ie.setValue(z,"modelMatrix",B.matrixWorld),X.isShaderMaterial||X.isRawShaderMaterial){const Bi=X.uniformsGroups;for(let Dn=0,In=Bi.length;Dn<In;Dn++){const ic=Bi[Dn];O.update(ic,Yi),O.bind(ic,Yi)}}return Yi}function hd(E,F){E.ambientLightColor.needsUpdate=F,E.lightProbe.needsUpdate=F,E.directionalLights.needsUpdate=F,E.directionalLightShadows.needsUpdate=F,E.pointLights.needsUpdate=F,E.pointLightShadows.needsUpdate=F,E.spotLights.needsUpdate=F,E.spotLightShadows.needsUpdate=F,E.rectAreaLights.needsUpdate=F,E.hemisphereLights.needsUpdate=F}function cd(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return w},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(E,F,W){Dt.get(E.texture).__webglTexture=F,Dt.get(E.depthTexture).__webglTexture=W;const X=Dt.get(E);X.__hasExternalTextures=!0,X.__autoAllocateDepthBuffer=W===void 0,X.__autoAllocateDepthBuffer||Qt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),X.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(E,F){const W=Dt.get(E);W.__webglFramebuffer=F,W.__useDefaultFramebuffer=F===void 0},this.setRenderTarget=function(E,F=0,W=0){C=E,T=F,w=W;let X=!0,B=null,lt=!1,mt=!1;if(E){const Et=Dt.get(E);if(Et.__useDefaultFramebuffer!==void 0)Rt.bindFramebuffer(z.FRAMEBUFFER,null),X=!1;else if(Et.__webglFramebuffer===void 0)A.setupRenderTarget(E);else if(Et.__hasExternalTextures)A.rebindTextures(E,Dt.get(E.texture).__webglTexture,Dt.get(E.depthTexture).__webglTexture);else if(E.depthBuffer){const wt=E.depthTexture;if(Et.__boundDepthTexture!==wt){if(wt!==null&&Dt.has(wt)&&(E.width!==wt.image.width||E.height!==wt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(E)}}const Bt=E.texture;(Bt.isData3DTexture||Bt.isDataArrayTexture||Bt.isCompressedArrayTexture)&&(mt=!0);const qt=Dt.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(Array.isArray(qt[F])?B=qt[F][W]:B=qt[F],lt=!0):E.samples>0&&A.useMultisampledRTT(E)===!1?B=Dt.get(E).__webglMultisampledFramebuffer:Array.isArray(qt)?B=qt[W]:B=qt,R.copy(E.viewport),U.copy(E.scissor),N=E.scissorTest}else R.copy(xt).multiplyScalar(V).floor(),U.copy(Wt).multiplyScalar(V).floor(),N=fe;if(Rt.bindFramebuffer(z.FRAMEBUFFER,B)&&X&&Rt.drawBuffers(E,B),Rt.viewport(R),Rt.scissor(U),Rt.setScissorTest(N),lt){const Et=Dt.get(E.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+F,Et.__webglTexture,W)}else if(mt){const Et=Dt.get(E.texture),Bt=F||0;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,Et.__webglTexture,W||0,Bt)}S=-1},this.readRenderTargetPixels=function(E,F,W,X,B,lt,mt){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let bt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){Rt.bindFramebuffer(z.FRAMEBUFFER,bt);try{const Et=E.texture,Bt=Et.format,qt=Et.type;if(!te.textureFormatReadable(Bt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!te.textureTypeReadable(qt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=E.width-X&&W>=0&&W<=E.height-B&&z.readPixels(F,W,X,B,Kt.convert(Bt),Kt.convert(qt),lt)}finally{const Et=C!==null?Dt.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,Et)}}},this.readRenderTargetPixelsAsync=async function(E,F,W,X,B,lt,mt){if(!(E&&E.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let bt=Dt.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&mt!==void 0&&(bt=bt[mt]),bt){const Et=E.texture,Bt=Et.format,qt=Et.type;if(!te.textureFormatReadable(Bt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!te.textureTypeReadable(qt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(F>=0&&F<=E.width-X&&W>=0&&W<=E.height-B){Rt.bindFramebuffer(z.FRAMEBUFFER,bt);const wt=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,wt),z.bufferData(z.PIXEL_PACK_BUFFER,lt.byteLength,z.STREAM_READ),z.readPixels(F,W,X,B,Kt.convert(Bt),Kt.convert(qt),0);const he=C!==null?Dt.get(C).__webglFramebuffer:null;Rt.bindFramebuffer(z.FRAMEBUFFER,he);const Ce=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Yd(z,Ce,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,wt),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,lt),z.deleteBuffer(wt),z.deleteSync(Ce),lt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(E,F=null,W=0){E.isTexture!==!0&&(xr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),F=arguments[0]||null,E=arguments[1]);const X=Math.pow(2,-W),B=Math.floor(E.image.width*X),lt=Math.floor(E.image.height*X),mt=F!==null?F.x:0,bt=F!==null?F.y:0;A.setTexture2D(E,0),z.copyTexSubImage2D(z.TEXTURE_2D,W,0,0,mt,bt,B,lt),Rt.unbindTexture()},this.copyTextureToTexture=function(E,F,W=null,X=null,B=0){E.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture function signature has changed."),X=arguments[0]||null,E=arguments[1],F=arguments[2],B=arguments[3]||0,W=null);let lt,mt,bt,Et,Bt,qt,wt,he,Ce;const De=E.isCompressedTexture?E.mipmaps[B]:E.image;W!==null?(lt=W.max.x-W.min.x,mt=W.max.y-W.min.y,bt=W.isBox3?W.max.z-W.min.z:1,Et=W.min.x,Bt=W.min.y,qt=W.isBox3?W.min.z:0):(lt=De.width,mt=De.height,bt=De.depth||1,Et=0,Bt=0,qt=0),X!==null?(wt=X.x,he=X.y,Ce=X.z):(wt=0,he=0,Ce=0);const Mi=Kt.convert(F.format),me=Kt.convert(F.type);let Lt;F.isData3DTexture?(A.setTexture3D(F,0),Lt=z.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(A.setTexture2DArray(F,0),Lt=z.TEXTURE_2D_ARRAY):(A.setTexture2D(F,0),Lt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,F.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,F.unpackAlignment);const un=z.getParameter(z.UNPACK_ROW_LENGTH),ge=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Yi=z.getParameter(z.UNPACK_SKIP_PIXELS),ms=z.getParameter(z.UNPACK_SKIP_ROWS),Ti=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,De.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,De.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Et),z.pixelStorei(z.UNPACK_SKIP_ROWS,Bt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,qt);const nr=E.isDataArrayTexture||E.isData3DTexture,Ie=F.isDataArrayTexture||F.isData3DTexture;if(E.isRenderTargetTexture||E.isDepthTexture){const sn=Dt.get(E),sr=Dt.get(F),Bi=Dt.get(sn.__renderTarget),Dn=Dt.get(sr.__renderTarget);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,Bi.__webglFramebuffer),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let In=0;In<bt;In++)nr&&z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Dt.get(E).__webglTexture,B,qt+In),E.isDepthTexture?(Ie&&z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Dt.get(F).__webglTexture,B,Ce+In),z.blitFramebuffer(Et,Bt,lt,mt,wt,he,lt,mt,z.DEPTH_BUFFER_BIT,z.NEAREST)):Ie?z.copyTexSubImage3D(Lt,B,wt,he,Ce+In,Et,Bt,lt,mt):z.copyTexSubImage2D(Lt,B,wt,he,Ce+In,Et,Bt,lt,mt);Rt.bindFramebuffer(z.READ_FRAMEBUFFER,null),Rt.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else Ie?E.isDataTexture||E.isData3DTexture?z.texSubImage3D(Lt,B,wt,he,Ce,lt,mt,bt,Mi,me,De.data):F.isCompressedArrayTexture?z.compressedTexSubImage3D(Lt,B,wt,he,Ce,lt,mt,bt,Mi,De.data):z.texSubImage3D(Lt,B,wt,he,Ce,lt,mt,bt,Mi,me,De):E.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,B,wt,he,lt,mt,Mi,me,De.data):E.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,B,wt,he,De.width,De.height,Mi,De.data):z.texSubImage2D(z.TEXTURE_2D,B,wt,he,lt,mt,Mi,me,De);z.pixelStorei(z.UNPACK_ROW_LENGTH,un),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,ge),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Yi),z.pixelStorei(z.UNPACK_SKIP_ROWS,ms),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ti),B===0&&F.generateMipmaps&&z.generateMipmap(Lt),Rt.unbindTexture()},this.copyTextureToTexture3D=function(E,F,W=null,X=null,B=0){return E.isTexture!==!0&&(xr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),W=arguments[0]||null,X=arguments[1]||null,E=arguments[2],F=arguments[3],B=arguments[4]||0),xr('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(E,F,W,X,B)},this.initRenderTarget=function(E){Dt.get(E).__webglFramebuffer===void 0&&A.setupRenderTarget(E)},this.initTexture=function(E){E.isCubeTexture?A.setTextureCube(E,0):E.isData3DTexture?A.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?A.setTexture2DArray(E,0):A.setTexture2D(E,0),Rt.unbindTexture()},this.resetState=function(){T=0,w=0,C=null,Rt.reset(),Re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=ne._getDrawingBufferColorSpace(t),e.unpackColorSpace=ne._getUnpackColorSpace()}}class Rh{constructor(t,e=1,i=1e3){this.isFog=!0,this.name="",this.color=new yt(t),this.near=e,this.far=i}clone(){return new Rh(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class s1 extends We{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new nn,this.environmentIntensity=1,this.environmentRotation=new nn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class r1{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Zl,this.updateRanges=[],this.version=0,this.uuid=Wn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){return t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const di=new L;class Wo{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)di.fromBufferAttribute(this,e),di.applyMatrix4(t),this.setXYZ(e,di.x,di.y,di.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)di.fromBufferAttribute(this,e),di.applyNormalMatrix(t),this.setXYZ(e,di.x,di.y,di.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)di.fromBufferAttribute(this,e),di.transformDirection(t),this.setXYZ(e,di.x,di.y,di.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=an(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Se(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=Se(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=an(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=an(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=an(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=an(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=Se(e,this.array),i=Se(i,this.array),s=Se(s,this.array),r=Se(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new _i(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new Wo(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const e=[];for(let i=0;i<this.count;i++){const s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Ch extends Pn{static get type(){return"SpriteMaterial"}constructor(t){super(),this.isSpriteMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}let Ls;const hr=new L,Ps=new L,Ds=new L,Is=new It,cr=new It,Mu=new Pe,uo=new L,fr=new L,po=new L,Qc=new It,Xa=new It,tf=new It;class yu extends We{constructor(t=new Ch){if(super(),this.isSprite=!0,this.type="Sprite",Ls===void 0){Ls=new qe;const e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new r1(e,5);Ls.setIndex([0,1,2,0,2,3]),Ls.setAttribute("position",new Wo(i,3,0,!1)),Ls.setAttribute("uv",new Wo(i,2,3,!1))}this.geometry=Ls,this.material=t,this.center=new It(.5,.5)}raycast(t,e){t.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ps.setFromMatrixScale(this.matrixWorld),Mu.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),Ds.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ps.multiplyScalar(-Ds.z);const i=this.material.rotation;let s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));const a=this.center;mo(uo.set(-.5,-.5,0),Ds,a,Ps,s,r),mo(fr.set(.5,-.5,0),Ds,a,Ps,s,r),mo(po.set(.5,.5,0),Ds,a,Ps,s,r),Qc.set(0,0),Xa.set(1,0),tf.set(1,1);let l=t.ray.intersectTriangle(uo,fr,po,!1,hr);if(l===null&&(mo(fr.set(-.5,.5,0),Ds,a,Ps,s,r),Xa.set(0,1),l=t.ray.intersectTriangle(uo,po,fr,!1,hr),l===null))return;const o=t.ray.origin.distanceTo(hr);o<t.near||o>t.far||e.push({distance:o,point:hr.clone(),uv:Ii.getInterpolation(hr,uo,fr,po,Qc,Xa,tf,new It),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}}function mo(n,t,e,i,s,r){Is.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(cr.x=r*Is.x-s*Is.y,cr.y=s*Is.x+r*Is.y):cr.copy(Is),n.copy(t),n.x+=cr.x,n.y+=cr.y,n.applyMatrix4(Mu)}class Lh extends Pn{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Xo=new L,qo=new L,ef=new Pe,ur=new Eh,go=new kr,qa=new L,nf=new L;class o1 extends We{constructor(t=new qe,e=new Lh){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)Xo.fromBufferAttribute(e,s-1),qo.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=Xo.distanceTo(qo);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),go.copy(i.boundingSphere),go.applyMatrix4(s),go.radius+=r,t.ray.intersectsSphere(go)===!1)return;ef.copy(s).invert(),ur.copy(t.ray).applyMatrix4(ef);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,h=this.isLineSegments?2:1,f=i.index,u=i.attributes.position;if(f!==null){const d=Math.max(0,a.start),m=Math.min(f.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=h){const p=f.getX(x),M=f.getX(x+1),y=xo(this,t,ur,o,p,M);y&&e.push(y)}if(this.isLineLoop){const x=f.getX(m-1),g=f.getX(d),p=xo(this,t,ur,o,x,g);p&&e.push(p)}}else{const d=Math.max(0,a.start),m=Math.min(u.count,a.start+a.count);for(let x=d,g=m-1;x<g;x+=h){const p=xo(this,t,ur,o,x,x+1);p&&e.push(p)}if(this.isLineLoop){const x=xo(this,t,ur,o,m-1,d);x&&e.push(x)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function xo(n,t,e,i,s,r){const a=n.geometry.attributes.position;if(Xo.fromBufferAttribute(a,s),qo.fromBufferAttribute(a,r),e.distanceSqToSegment(Xo,qo,qa,nf)>i)return;qa.applyMatrix4(n.matrixWorld);const o=t.ray.origin.distanceTo(qa);if(!(o<t.near||o>t.far))return{distance:o,point:nf.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const sf=new L,rf=new L;class Su extends o1{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)sf.fromBufferAttribute(e,s),rf.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+sf.distanceTo(rf);t.setAttribute("lineDistance",new be(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ha extends Pn{static get type(){return"PointsMaterial"}constructor(t){super(),this.isPointsMaterial=!0,this.color=new yt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const of=new Pe,th=new Eh,_o=new kr,vo=new L;class Ph extends We{constructor(t=new qe,e=new ha){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),_o.copy(i.boundingSphere),_o.applyMatrix4(s),_o.radius+=r,t.ray.intersectsSphere(_o)===!1)return;of.copy(s).invert(),th.copy(t.ray).applyMatrix4(of);const l=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=l*l,h=i.index,c=i.attributes.position;if(h!==null){const u=Math.max(0,a.start),d=Math.min(h.count,a.start+a.count);for(let m=u,x=d;m<x;m++){const g=h.getX(m);vo.fromBufferAttribute(c,g),af(vo,g,o,s,t,e,this)}}else{const u=Math.max(0,a.start),d=Math.min(c.count,a.start+a.count);for(let m=u,x=d;m<x;m++)vo.fromBufferAttribute(c,m),af(vo,m,o,s,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const l=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[l]=r}}}}}function af(n,t,e,i,s,r,a){const l=th.distanceSqToPoint(n);if(l<e){const o=new L;th.closestPointToPoint(n,o),o.applyMatrix4(i);const h=s.ray.origin.distanceTo(o);if(h<s.near||h>s.far)return;r.push({distance:h,distanceToRay:Math.sqrt(l),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}class Oi extends xi{constructor(t,e,i,s,r,a,l,o,h){super(t,e,i,s,r,a,l,o,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Ln extends qe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,l=0,o=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:l,thetaLength:o};const h=this;s=Math.floor(s),r=Math.floor(r);const f=[],c=[],u=[],d=[];let m=0;const x=[],g=i/2;let p=0;M(),a===!1&&(t>0&&y(!0),e>0&&y(!1)),this.setIndex(f),this.setAttribute("position",new be(c,3)),this.setAttribute("normal",new be(u,3)),this.setAttribute("uv",new be(d,2));function M(){const _=new L,P=new L;let T=0;const w=(e-t)/i;for(let C=0;C<=r;C++){const S=[],v=C/r,R=v*(e-t)+t;for(let U=0;U<=s;U++){const N=U/s,H=N*o+l,$=Math.sin(H),q=Math.cos(H);P.x=R*$,P.y=-v*i+g,P.z=R*q,c.push(P.x,P.y,P.z),_.set($,w,q).normalize(),u.push(_.x,_.y,_.z),d.push(N,1-v),S.push(m++)}x.push(S)}for(let C=0;C<s;C++)for(let S=0;S<r;S++){const v=x[S][C],R=x[S+1][C],U=x[S+1][C+1],N=x[S][C+1];(t>0||S!==0)&&(f.push(v,R,N),T+=3),(e>0||S!==r-1)&&(f.push(R,U,N),T+=3)}h.addGroup(p,T,0),p+=T}function y(_){const P=m,T=new It,w=new L;let C=0;const S=_===!0?t:e,v=_===!0?1:-1;for(let U=1;U<=s;U++)c.push(0,g*v,0),u.push(0,v,0),d.push(.5,.5),m++;const R=m;for(let U=0;U<=s;U++){const H=U/s*o+l,$=Math.cos(H),q=Math.sin(H);w.x=S*q,w.y=g*v,w.z=S*$,c.push(w.x,w.y,w.z),u.push(0,v,0),T.x=$*.5+.5,T.y=q*.5*v+.5,d.push(T.x,T.y),m++}for(let U=0;U<s;U++){const N=P+U,H=R+U;_===!0?f.push(H,H+1,N):f.push(H+1,H,N),C+=3}h.addGroup(p,C,_===!0?1:2),p+=C}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ln(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}}const Mo=new L,yo=new L,Ya=new L,So=new Ii;class a1 extends qe{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Oo*e),a=t.getIndex(),l=t.getAttribute("position"),o=a?a.count:l.count,h=[0,0,0],f=["a","b","c"],c=new Array(3),u={},d=[];for(let m=0;m<o;m+=3){a?(h[0]=a.getX(m),h[1]=a.getX(m+1),h[2]=a.getX(m+2)):(h[0]=m,h[1]=m+1,h[2]=m+2);const{a:x,b:g,c:p}=So;if(x.fromBufferAttribute(l,h[0]),g.fromBufferAttribute(l,h[1]),p.fromBufferAttribute(l,h[2]),So.getNormal(Ya),c[0]=`${Math.round(x.x*s)},${Math.round(x.y*s)},${Math.round(x.z*s)}`,c[1]=`${Math.round(g.x*s)},${Math.round(g.y*s)},${Math.round(g.z*s)}`,c[2]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,!(c[0]===c[1]||c[1]===c[2]||c[2]===c[0]))for(let M=0;M<3;M++){const y=(M+1)%3,_=c[M],P=c[y],T=So[f[M]],w=So[f[y]],C=`${_}_${P}`,S=`${P}_${_}`;S in u&&u[S]?(Ya.dot(u[S].normal)<=r&&(d.push(T.x,T.y,T.z),d.push(w.x,w.y,w.z)),u[S]=null):C in u||(u[C]={index0:h[M],index1:h[y],normal:Ya.clone()})}}for(const m in u)if(u[m]){const{index0:x,index1:g}=u[m];Mo.fromBufferAttribute(l,x),yo.fromBufferAttribute(l,g),d.push(Mo.x,Mo.y,Mo.z),d.push(yo.x,yo.y,yo.z)}this.setAttribute("position",new be(d,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class Dh extends qe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,l=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:l},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));const o=Math.min(a+l,Math.PI);let h=0;const f=[],c=new L,u=new L,d=[],m=[],x=[],g=[];for(let p=0;p<=i;p++){const M=[],y=p/i;let _=0;p===0&&a===0?_=.5/e:p===i&&o===Math.PI&&(_=-.5/e);for(let P=0;P<=e;P++){const T=P/e;c.x=-t*Math.cos(s+T*r)*Math.sin(a+y*l),c.y=t*Math.cos(a+y*l),c.z=t*Math.sin(s+T*r)*Math.sin(a+y*l),m.push(c.x,c.y,c.z),u.copy(c).normalize(),x.push(u.x,u.y,u.z),g.push(T+_,1-y),M.push(h++)}f.push(M)}for(let p=0;p<i;p++)for(let M=0;M<e;M++){const y=f[p][M+1],_=f[p][M],P=f[p+1][M],T=f[p+1][M+1];(p!==0||a>0)&&d.push(y,_,T),(p!==i-1||o<Math.PI)&&d.push(_,P,T)}this.setIndex(d),this.setAttribute("position",new be(m,3)),this.setAttribute("normal",new be(x,3)),this.setAttribute("uv",new be(g,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dh(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}}class Ih extends qe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r},i=Math.floor(i),s=Math.floor(s);const a=[],l=[],o=[],h=[],f=new L,c=new L,u=new L;for(let d=0;d<=i;d++)for(let m=0;m<=s;m++){const x=m/s*r,g=d/i*Math.PI*2;c.x=(t+e*Math.cos(g))*Math.cos(x),c.y=(t+e*Math.cos(g))*Math.sin(x),c.z=e*Math.sin(g),l.push(c.x,c.y,c.z),f.x=t*Math.cos(x),f.y=t*Math.sin(x),u.subVectors(c,f).normalize(),o.push(u.x,u.y,u.z),h.push(m/s),h.push(d/i)}for(let d=1;d<=i;d++)for(let m=1;m<=s;m++){const x=(s+1)*d+m-1,g=(s+1)*(d-1)+m-1,p=(s+1)*(d-1)+m,M=(s+1)*d+m;a.push(x,g,M),a.push(g,p,M)}this.setIndex(a),this.setAttribute("position",new be(l,3)),this.setAttribute("normal",new be(o,3)),this.setAttribute("uv",new be(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ih(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc)}}class l1 extends fi{static get type(){return"RawShaderMaterial"}constructor(t){super(t),this.isRawShaderMaterial=!0}}class lf extends Pn{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class ui extends Pn{static get type(){return"MeshLambertMaterial"}constructor(t){super(),this.isMeshLambertMaterial=!0,this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=bh,this.normalScale=new It(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new nn,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Uh extends We{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class h1 extends Uh{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Ka=new Pe,hf=new L,cf=new L;class bu{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new It(512,512),this.map=null,this.mapPass=null,this.matrix=new Pe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new wh,this._frameExtents=new It(1,1),this._viewportCount=1,this._viewports=[new Ee(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;hf.setFromMatrixPosition(t.matrixWorld),e.position.copy(hf),cf.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(cf),e.updateMatrixWorld(),Ka.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ka),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Ka)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}const ff=new Pe,dr=new L,$a=new L;class c1 extends bu{constructor(){super(new Pi(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new It(4,2),this._viewportCount=6,this._viewports=[new Ee(2,1,1,1),new Ee(0,1,1,1),new Ee(3,1,1,1),new Ee(1,1,1,1),new Ee(3,0,1,1),new Ee(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(t,e=0){const i=this.camera,s=this.matrix,r=t.distance||i.far;r!==i.far&&(i.far=r,i.updateProjectionMatrix()),dr.setFromMatrixPosition(t.matrixWorld),i.position.copy(dr),$a.copy(i.position),$a.add(this._cubeDirections[e]),i.up.copy(this._cubeUps[e]),i.lookAt($a),i.updateMatrixWorld(),s.makeTranslation(-dr.x,-dr.y,-dr.z),ff.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ff)}}class f1 extends Uh{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new c1}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}}class u1 extends bu{constructor(){super(new Th(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class d1 extends Uh{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(We.DEFAULT_UP),this.updateMatrix(),this.target=new We,this.shadow=new u1}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class p1{constructor(t=!0){this.autoStart=t,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=uf(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let t=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const e=uf();t=(e-this.oldTime)/1e3,this.oldTime=e,this.elapsedTime+=t}return t}}function uf(){return performance.now()}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mh);function Zt(n,t,e=0){let i=n*374761393+t*668265263+e*2147483647|0;return i=Math.imul(i^i>>>13,1274126177),i^=i>>>16,(i>>>0)/4294967296}function m1(n,t,e,i=0){let s=n*374761393+t*668265263+e*1274126177+i*2147483647|0;return s=Math.imul(s^s>>>13,1274126177),s^=s>>>16,s=Math.imul(s,2246822519),s^=s>>>13,(s>>>0)/4294967296}const yr=n=>n*n*(3-2*n);function g1(n,t,e){const i=Math.floor(n),s=Math.floor(t),r=yr(n-i),a=yr(t-s),l=Zt(i,s,e),o=Zt(i+1,s,e),h=Zt(i,s+1,e),f=Zt(i+1,s+1,e);return(l+(o-l)*r)*(1-a)+(h+(f-h)*r)*a}function Us(n,t,e,i){const s=Math.floor(n),r=Math.floor(t),a=Math.floor(e),l=yr(n-s),o=yr(t-r),h=yr(e-a),f=(u,d,m)=>u+(d-u)*m,c=(u,d,m)=>m1(s+u,r+d,a+m,i);return f(f(f(c(0,0,0),c(1,0,0),l),f(c(0,1,0),c(1,1,0),l),o),f(f(c(0,0,1),c(1,0,1),l),f(c(0,1,1),c(1,1,1),l),o),h)}function mi(n,t,e,i=4){let s=.5,r=1,a=0,l=0;for(let o=0;o<i;o++)a+=g1(n*r,t*r,e+o*101)*s,l+=s,s*=.5,r*=2;return a/l}const Te=16,Hr=["grass_top","grass_side","dirt","stone","sand","log_side","log_top","leaves","planks","cobble","water","glass","coal_ore","iron_ore","gold_ore","diamond_ore","bedrock","snow","snow_side","cactus_side","cactus_top","bricks","table_top","table_side","torch","furnace_top","furnace_front","command","obsidian","netherrack","soul_sand","glowstone","lava","nether_bricks","end_stone","end_frame_top","end_frame_side","end_frame_eye","portal","end_portal"],Sr=Object.fromEntries(Hr.map((n,t)=>[n,t])),br=Hr.length,Eu=n=>Math.max(0,Math.min(255,n));function $t(n,t,e,i,s){const r=(Zt(e,i,s)-.5)*2*t;return n.map(a=>Eu(a+r))}const df=(n,t)=>$t([95,159,53],22,n,t,1),ja=(n,t)=>$t([134,96,67],18,n,t,2),Fo=(n,t)=>$t([125,125,125],20,n,t,4),Za=(n,t)=>$t([168,134,82],8,n,t,9).map(e=>t%4===3?e-30:e);function bo(n,t){return(e,i)=>Zt(Math.floor(e/2)+3,Math.floor(i/2),t)>.72?$t(n,14,e,i,t+1):Fo(e,i)}const Nh={grass_top:df,dirt:ja,grass_side:(n,t)=>t<4+(Zt(n,0,3)>.5?1:0)?df(n,t):ja(n,t),stone:Fo,sand:(n,t)=>$t([219,207,142],12,n,t,5),log_side:(n,t)=>$t([102,81,49],10,n,0,6).map(e=>e-(n%4===0?14:0)),log_top:(n,t)=>{const e=Math.max(Math.abs(n-7.5),Math.abs(t-7.5));return $t(e%4<2?[170,135,82]:[140,110,66],8,n,t,7)},leaves:(n,t)=>$t([56,118,29],30,n,t,8),planks:Za,cobble:(n,t)=>{const e=Zt(Math.floor(n/4),Math.floor(t/4),10),i=n%4===3||t%4===3;return $t([110+e*40,110+e*40,110+e*40],10,n,t,11).map(s=>i?s-35:s)},water:(n,t)=>{const e=Zt(n>>1,t>>1,12)>.8?25:0;return[...$t([36+e,86+e,200+e/2],8,n,t,12),175]},glass:(n,t)=>{const e=n===0||t===0||n===15||t===15,i=n===3&&t>=3&&t<=5||n===4&&t===3||n===11&&t>=10&&t<=11;return e?[215,235,245,230]:i?[255,255,255,190]:[200,225,240,0]},coal_ore:bo([30,30,30],20),iron_ore:bo([216,175,147],30),gold_ore:bo([250,220,60],40),diamond_ore:bo([70,235,225],50),bedrock:(n,t)=>$t([55,55,55],32,n,t,60),snow:(n,t)=>$t([240,245,250],7,n,t,61),snow_side:(n,t)=>t<4?$t([240,245,250],7,n,t,61):ja(n,t),cactus_side:(n,t)=>(n===4||n===11)&&t%5===2?[230,230,200]:$t([36,118,48],10,n,0,62).map(e=>n%5===2?e-18:e),cactus_top:(n,t)=>{const e=Math.max(Math.abs(n-7.5),Math.abs(t-7.5));return $t(e<3?[30,100,40]:[52,140,60],8,n,t,63)},bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?$t([170,168,160],8,n,t,64):$t([150,72,58],14,n,t,65),table_top:(n,t)=>n===0||t===0||n===15||t===15||n===7||n===8||t===7||t===8?$t([92,60,30],8,n,t,66):Za(n,t),torch:(n,t)=>n<7||n>8?[0,0,0,0]:t<2?n===7?[255,235,120,255]:[255,160,40,255]:t<4?[255,200,60,255]:$t([122,86,44],10,n,t,70),command:(n,t)=>{const e=n===0||t===0||n===15||t===15,i=n===4+(t-4)&&t>=4&&t<=7||n===4+(11-t)&&t>=8&&t<=11||t===10&&n>=9&&n<=12;return e?[74,34,8,255]:i?[42,18,4,255]:$t([196,114,58],18,n,t,75)},obsidian:(n,t)=>Zt(n,t,80)>.93?$t([90,40,150],20,n,t,81):$t([22,14,36],10,n,t,82),netherrack:(n,t)=>{const e=Zt(Math.floor(n/2),Math.floor(t/3),83)>.8;return $t(e?[150,60,55]:[112,40,42],22,n,t,84)},soul_sand:(n,t)=>{const e=(n%5===1||n%5===2)&&(t%5===1||t%5===2)&&Zt(Math.floor(n/5),Math.floor(t/5),85)>.45;return $t(e?[48,36,30]:[88,70,56],12,n,t,86)},glowstone:(n,t)=>{const e=Zt(Math.floor(n/3),Math.floor(t/3),87);return $t(e>.55?[255,226,140]:[206,150,74],22,n,t,88)},lava:(n,t)=>{const e=Zt(Math.floor(n/2),Math.floor(t/2),89);return $t(e>.7?[255,214,70]:e>.35?[248,140,24]:[214,80,14],14,n,t,90)},nether_bricks:(n,t)=>t%4===3||(n+Math.floor(t/4)%2*4)%8===7?$t([28,12,16],6,n,t,91):$t([62,24,30],12,n,t,92),end_stone:(n,t)=>$t([222,222,156],16,n,t,93).map((e,i)=>Zt(n>>1,t>>1,94)>.85?e-24:e),end_frame_top:(n,t)=>n<2||t<2||n>13||t>13?$t([50,100,84],10,n,t,95):$t([96,150,124],10,n,t,96),end_frame_side:(n,t)=>t<4?$t([60,112,94],10,n,t,97):$t([218,218,150],14,n,t,98),end_frame_eye:(n,t)=>{const e=Math.hypot(n-7.5,t-7.5);return e<2.3?[14,20,18]:e<4.4?[96,216,150]:n<2||t<2||n>13||t>13?$t([50,100,84],10,n,t,95):$t([96,150,124],10,n,t,96)},portal:(n,t)=>{const e=Math.sin(n*.9+t*.45)*.5+Math.sin(t*.8-n*.3)*.5;return[90+e*50+Zt(n,t,99)*30,20+e*14,190+e*40,175]},end_portal:(n,t)=>Zt(n,t,100)>.9?[150,255,230,255]:[6,16,22+Zt(n,t,101)*20,240],furnace_top:(n,t)=>n===0||t===0||n===15||t===15?$t([70,70,70],8,n,t,71):Fo(n,t).map(e=>e-20),furnace_front:(n,t)=>n===0||t===0||n===15?$t([70,70,70],8,n,t,72):n>=4&&n<=11&&t>=8&&t<=13?t>10&&n>5&&n<10&&Zt(n,t,73)>.4?[255,150+Zt(n,t,74)*80|0,30,255]:[25,25,25,255]:n>=4&&n<=11&&t>=3&&t<=5?[30,30,30,255]:Fo(n,t).map(i=>i-15),table_side:(n,t)=>t<3?$t([92,60,30],8,n,t,67):n===7||n===8?$t([120,90,50],8,n,t,68):Za(n,t)},Ja={};function wu(n){if(Ja[n])return Ja[n];let t=0,e=0,i=0,s=0;for(let r=0;r<Te;r++)for(let a=0;a<Te;a++){const l=Nh[n](a,r);l[3]!==0&&(t+=l[0],e+=l[1],i+=l[2],s++)}return Ja[n]=[t/s/255,e/s/255,i/s/255]}function x1(){const n=document.createElement("canvas");n.width=Te*br,n.height=Te;const t=n.getContext("2d"),e=t.createImageData(n.width,Te);Hr.forEach((s,r)=>{for(let a=0;a<Te;a++)for(let l=0;l<Te;l++){const o=Nh[s](l,a),h=(a*n.width+r*Te+l)*4;e.data[h]=o[0],e.data[h+1]=o[1],e.data[h+2]=o[2],e.data[h+3]=o[3]===void 0?255:o[3]}}),t.putImageData(e,0,0);const i=new Oi(n);return i.magFilter=pe,i.minFilter=pe,i.colorSpace=ti,i.generateMipmaps=!1,{canvas:n,texture:i}}const Yo={stone:3.4,cobble:4.2,bricks:4,bedrock:4.5,coal_ore:3.4,iron_ore:3.4,gold_ore:3.4,diamond_ore:3.4,planks:2.4,table_top:2.4,table_side:2.4,log_side:3.2,log_top:2.2,leaves:3.6,dirt:2.2,grass_top:2.6,grass_side:2.4,sand:1.4,snow:1,snow_side:1.4,water:.9,glass:0,torch:0,cactus_side:2.6,cactus_top:2,furnace_top:2.6,furnace_front:3,command:2.6};function pf(n,t,e){const i=Math.floor(n),s=Math.floor(t),r=n-i,a=t-s,l=r*r*(3-2*r),o=a*a*(3-2*a),h=Zt(i,s,e),f=Zt(i+1,s,e),c=Zt(i,s+1,e),u=Zt(i+1,s+1,e);return(h+(f-h)*l)*(1-o)+(c+(u-c)*l)*o}function _1(n){const e=64/Te,i=document.createElement("canvas");i.width=64*br,i.height=64;const s=i.getContext("2d"),r=s.createImageData(i.width,64),a=document.createElement("canvas");a.width=i.width,a.height=64;const l=a.getContext("2d"),o=l.createImageData(a.width,64);Hr.forEach((u,d)=>{const m=Array.from({length:Te*Te},(y,_)=>Nh[u](_%Te,Math.floor(_/Te))),x=(y,_)=>m[Math.max(0,Math.min(Te-1,_))*Te+Math.max(0,Math.min(Te-1,y))],g=new Float32Array(4096);for(let y=0;y<64;y++)for(let _=0;_<64;_++){const P=(_+.5)/e-.5,T=(y+.5)/e-.5,w=Math.floor(P),C=Math.floor(T),S=P-w,v=T-C,R=x(Math.floor(_/e),Math.floor(y/e)),U=x(w,C),N=x(w+1,C),H=x(w,C+1),$=x(w+1,C+1),q=[0,1,2].map(it=>{const rt=(U[it]*(1-S)+N[it]*S)*(1-v)+(H[it]*(1-S)+$[it]*S)*v;let xt=R[it]*.5+rt*.5;const Wt=(Zt(_+d*97,y,1234)-.5)*16+(pf(_*.35+d*13,y*.35,77)-.5)*22+(pf(_*.09,y*.09+d*5,91)-.5)*18;return Eu(xt+Wt)}),Y=R[3]===void 0?255:R[3],V=(y*i.width+d*64+_)*4;r.data[V]=q[0],r.data[V+1]=q[1],r.data[V+2]=q[2],r.data[V+3]=Y,g[y*64+_]=(q[0]*.3+q[1]*.59+q[2]*.11)/255}const p=Yo[u]===void 0?2:Yo[u],M=(y,_)=>g[(_+64)%64*64+(y+64)%64];for(let y=0;y<64;y++)for(let _=0;_<64;_++){const P=M(_+1,y-1)+2*M(_+1,y)+M(_+1,y+1)-(M(_-1,y-1)+2*M(_-1,y)+M(_-1,y+1)),T=M(_-1,y+1)+2*M(_,y+1)+M(_+1,y+1)-(M(_-1,y-1)+2*M(_,y-1)+M(_+1,y-1));let w=-P*p,C=T*p,S=1;const v=Math.hypot(w,C,S);w/=v,C/=v,S/=v;const R=(y*a.width+d*64+_)*4;o.data[R]=(w*.5+.5)*255,o.data[R+1]=(C*.5+.5)*255,o.data[R+2]=(S*.5+.5)*255,o.data[R+3]=255}}),s.putImageData(r,0,0),l.putImageData(o,0,0);const h=n?n.capabilities.getMaxAnisotropy():4,f=new Oi(i);f.colorSpace=ti,f.magFilter=Vi,f.minFilter=yn,f.generateMipmaps=!0,f.anisotropy=Math.min(8,h);const c=new Oi(a);return c.magFilter=Vi,c.minFilter=yn,c.generateMipmaps=!0,c.anisotropy=Math.min(8,h),{map:f,normalMap:c}}function v1(n){const t=n.getContext("2d"),e=n.width,i=t.getImageData(0,0,e,Te).data,s=document.createElement("canvas");s.width=e,s.height=Te;const r=s.getContext("2d"),a=r.createImageData(e,Te);Hr.forEach((o,h)=>{const f=(Yo[o]===void 0?2:Yo[o])*.45,c=(u,d)=>{const m=((d+Te)%Te*e+h*Te+(u+Te)%Te)*4;return(i[m]*.3+i[m+1]*.59+i[m+2]*.11)/255};for(let u=0;u<Te;u++)for(let d=0;d<Te;d++){const m=c(d+1,u)-c(d-1,u),x=c(d,u+1)-c(d,u-1);let g=-m*f,p=x*f,M=1;const y=Math.hypot(g,p,M);g/=y,p/=y,M/=y;const _=(u*e+h*Te+d)*4;a.data[_]=(g*.5+.5)*255,a.data[_+1]=(p*.5+.5)*255,a.data[_+2]=(M*.5+.5)*255,a.data[_+3]=255}}),r.putImageData(a,0,0);const l=new Oi(s);return l.magFilter=pe,l.minFilter=pe,l.generateMipmaps=!1,l}const Tu={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class tr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const M1=new Th(-1,1,1,-1,0,1);class y1 extends qe{constructor(){super(),this.setAttribute("position",new be([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new be([0,2,0,0,2,0],2))}}const S1=new y1;class Oh{constructor(t){this._mesh=new At(S1,t)}dispose(){this._mesh.geometry.dispose()}render(t){t.render(this._mesh,M1)}get material(){return this._mesh.material}set material(t){this._mesh.material=t}}class Au extends tr{constructor(t,e){super(),this.textureID=e!==void 0?e:"tDiffuse",t instanceof fi?(this.uniforms=t.uniforms,this.material=t):t&&(this.uniforms=Lr.clone(t.uniforms),this.material=new fi({name:t.name!==void 0?t.name:"unspecified",defines:Object.assign({},t.defines),uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader})),this.fsQuad=new Oh(this.material)}render(t,e,i){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=i.texture),this.fsQuad.material=this.material,this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class mf extends tr{constructor(t,e){super(),this.scene=t,this.camera=e,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(t,e,i){const s=t.getContext(),r=t.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,l;this.inverse?(a=0,l=1):(a=1,l=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(l),r.buffers.stencil.setLocked(!0),t.setRenderTarget(i),this.clear&&t.clear(),t.render(this.scene,this.camera),t.setRenderTarget(e),this.clear&&t.clear(),t.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class b1 extends tr{constructor(){super(),this.needsSwap=!1}render(t){t.state.buffers.stencil.setLocked(!1),t.state.buffers.stencil.setTest(!1)}}class E1{constructor(t,e){if(this.renderer=t,this._pixelRatio=t.getPixelRatio(),e===void 0){const i=t.getSize(new It);this._width=i.width,this._height=i.height,e=new Wi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ln}),e.texture.name="EffectComposer.rt1"}else this._width=e.width,this._height=e.height;this.renderTarget1=e,this.renderTarget2=e.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Au(Tu),this.copyPass.material.blending=En,this.clock=new p1}swapBuffers(){const t=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=t}addPass(t){this.passes.push(t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(t,e){this.passes.splice(e,0,t),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(t){const e=this.passes.indexOf(t);e!==-1&&this.passes.splice(e,1)}isLastEnabledPass(t){for(let e=t+1;e<this.passes.length;e++)if(this.passes[e].enabled)return!1;return!0}render(t){t===void 0&&(t=this.clock.getDelta());const e=this.renderer.getRenderTarget();let i=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,t,i),a.needsSwap){if(i){const l=this.renderer.getContext(),o=this.renderer.state.buffers.stencil;o.setFunc(l.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,t),o.setFunc(l.EQUAL,1,4294967295)}this.swapBuffers()}mf!==void 0&&(a instanceof mf?i=!0:a instanceof b1&&(i=!1))}}this.renderer.setRenderTarget(e)}reset(t){if(t===void 0){const e=this.renderer.getSize(new It);this._pixelRatio=this.renderer.getPixelRatio(),this._width=e.width,this._height=e.height,t=this.renderTarget1.clone(),t.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=t,this.renderTarget2=t.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(t,e){this._width=t,this._height=e;const i=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(i,s),this.renderTarget2.setSize(i,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(i,s)}setPixelRatio(t){this._pixelRatio=t,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class w1 extends tr{constructor(t,e,i=null,s=null,r=null){super(),this.scene=t,this.camera=e,this.overrideMaterial=i,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new yt}render(t,e,i){const s=t.autoClear;t.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(t.getClearColor(this._oldClearColor),t.setClearColor(this.clearColor,t.getClearAlpha())),this.clearAlpha!==null&&(r=t.getClearAlpha(),t.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&t.clearDepth(),t.setRenderTarget(this.renderToScreen?null:i),this.clear===!0&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),t.render(this.scene,this.camera),this.clearColor!==null&&t.setClearColor(this._oldClearColor),this.clearAlpha!==null&&t.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),t.autoClear=s}}const T1={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new yt(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Ks extends tr{constructor(t,e,i,s){super(),this.strength=e!==void 0?e:1,this.radius=i,this.threshold=s,this.resolution=t!==void 0?new It(t.x,t.y):new It(256,256),this.clearColor=new yt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Wi(r,a,{type:ln}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let c=0;c<this.nMips;c++){const u=new Wi(r,a,{type:ln});u.texture.name="UnrealBloomPass.h"+c,u.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(u);const d=new Wi(r,a,{type:ln});d.texture.name="UnrealBloomPass.v"+c,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),r=Math.round(r/2),a=Math.round(a/2)}const l=T1;this.highPassUniforms=Lr.clone(l.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new fi({uniforms:this.highPassUniforms,vertexShader:l.vertexShader,fragmentShader:l.fragmentShader}),this.separableBlurMaterials=[];const o=[3,5,7,9,11];r=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let c=0;c<this.nMips;c++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(o[c])),this.separableBlurMaterials[c].uniforms.invSize.value=new It(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=e,this.compositeMaterial.uniforms.bloomRadius.value=.1;const h=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=h,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const f=Tu;this.copyUniforms=Lr.clone(f.uniforms),this.blendMaterial=new fi({uniforms:this.copyUniforms,vertexShader:f.vertexShader,fragmentShader:f.fragmentShader,blending:Rr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new yt,this.oldClearAlpha=1,this.basic=new Me,this.fsQuad=new Oh(null)}dispose(){for(let t=0;t<this.renderTargetsHorizontal.length;t++)this.renderTargetsHorizontal[t].dispose();for(let t=0;t<this.renderTargetsVertical.length;t++)this.renderTargetsVertical[t].dispose();this.renderTargetBright.dispose();for(let t=0;t<this.separableBlurMaterials.length;t++)this.separableBlurMaterials[t].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(t,e){let i=Math.round(t/2),s=Math.round(e/2);this.renderTargetBright.setSize(i,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(i,s),this.renderTargetsVertical[r].setSize(i,s),this.separableBlurMaterials[r].uniforms.invSize.value=new It(1/i,1/s),i=Math.round(i/2),s=Math.round(s/2)}render(t,e,i,s,r){t.getClearColor(this._oldClearColor),this.oldClearAlpha=t.getClearAlpha();const a=t.autoClear;t.autoClear=!1,t.setClearColor(this.clearColor,0),r&&t.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=i.texture,t.setRenderTarget(null),t.clear(),this.fsQuad.render(t)),this.highPassUniforms.tDiffuse.value=i.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,t.setRenderTarget(this.renderTargetBright),t.clear(),this.fsQuad.render(t);let l=this.renderTargetBright;for(let o=0;o<this.nMips;o++)this.fsQuad.material=this.separableBlurMaterials[o],this.separableBlurMaterials[o].uniforms.colorTexture.value=l.texture,this.separableBlurMaterials[o].uniforms.direction.value=Ks.BlurDirectionX,t.setRenderTarget(this.renderTargetsHorizontal[o]),t.clear(),this.fsQuad.render(t),this.separableBlurMaterials[o].uniforms.colorTexture.value=this.renderTargetsHorizontal[o].texture,this.separableBlurMaterials[o].uniforms.direction.value=Ks.BlurDirectionY,t.setRenderTarget(this.renderTargetsVertical[o]),t.clear(),this.fsQuad.render(t),l=this.renderTargetsVertical[o];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,t.setRenderTarget(this.renderTargetsHorizontal[0]),t.clear(),this.fsQuad.render(t),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&t.state.buffers.stencil.setTest(!0),this.renderToScreen?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(i),this.fsQuad.render(t)),t.setClearColor(this._oldClearColor,this.oldClearAlpha),t.autoClear=a}getSeperableBlurMaterial(t){const e=[];for(let i=0;i<t;i++)e.push(.39894*Math.exp(-.5*i*i/(t*t))/t);return new fi({defines:{KERNEL_RADIUS:t},uniforms:{colorTexture:{value:null},invSize:{value:new It(.5,.5)},direction:{value:new It(.5,.5)},gaussianCoefficients:{value:e}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(t){return new fi({defines:{NUM_MIPS:t},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ks.BlurDirectionX=new It(1,0);Ks.BlurDirectionY=new It(0,1);const A1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class R1 extends tr{constructor(){super();const t=A1;this.uniforms=Lr.clone(t.uniforms),this.material=new l1({name:t.name,uniforms:this.uniforms,vertexShader:t.vertexShader,fragmentShader:t.fragmentShader}),this.fsQuad=new Oh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(t,e,i){this.uniforms.tDiffuse.value=i.texture,this.uniforms.toneMappingExposure.value=t.toneMappingExposure,(this._outputColorSpace!==t.outputColorSpace||this._toneMapping!==t.toneMapping)&&(this._outputColorSpace=t.outputColorSpace,this._toneMapping=t.toneMapping,this.material.defines={},ne.getTransfer(this._outputColorSpace)===_e&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Hf?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Vf?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===ra?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Wf?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Xf&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(t.setRenderTarget(null),this.fsQuad.render(t)):(t.setRenderTarget(e),this.clear&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),this.fsQuad.render(t))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}const Ue=0,I={GRASS:1,DIRT:2,STONE:3,SAND:4,LOG:5,LEAVES:6,PLANKS:7,COBBLE:8,WATER:9,GLASS:10,COAL_ORE:11,IRON_ORE:12,GOLD_ORE:13,DIAMOND_ORE:14,BEDROCK:15,SNOW:16,CACTUS:17,BRICKS:18,TABLE:19,TORCH:20,FURNACE:21,COMMAND:22,OBSIDIAN:23,NETHER_PORTAL:24,NETHERRACK:25,SOUL_SAND:26,GLOWSTONE:27,LAVA:28,NETHER_BRICKS:29,END_STONE:30,END_FRAME:31,END_FRAME_EYE:32,END_PORTAL:33},D={STICK:100,COAL:101,IRON:102,GOLD:103,DIAMOND:104,APPLE:150,PORK:151,BEEF:152,COOKED_PORK:153,STEAK:154,STAR:105,PEARL:106,LIGHTER:107,EYE:108,CHICKEN:155,COOKED_CHICKEN:156},Xe={};function le(n,t,e,i,s=null,r=0,a={}){Xe[n]={id:n,name:t,tiles:e,hardness:i,tool:s,lvl:r,opaque:!0,liquid:!1,...a}}le(I.GRASS,"Hierba",["grass_top","dirt","grass_side"],.6,"shovel");le(I.DIRT,"Tierra",["dirt","dirt","dirt"],.5,"shovel");le(I.STONE,"Piedra",["stone","stone","stone"],1.5,"pick",1);le(I.SAND,"Arena",["sand","sand","sand"],.5,"shovel");le(I.LOG,"Tronco",["log_top","log_top","log_side"],2,"axe");le(I.LEAVES,"Hojas",["leaves","leaves","leaves"],.2);le(I.PLANKS,"Tablones",["planks","planks","planks"],2,"axe");le(I.COBBLE,"Adoquín",["cobble","cobble","cobble"],2,"pick",1);le(I.WATER,"Agua",["water","water","water"],100,null,0,{opaque:!1,liquid:!0,transparent:!0});le(I.GLASS,"Cristal",["glass","glass","glass"],.3,null,0,{opaque:!1,transparent:!0});le(I.COAL_ORE,"Mena de carbón",["coal_ore","coal_ore","coal_ore"],3,"pick",1);le(I.IRON_ORE,"Mena de hierro",["iron_ore","iron_ore","iron_ore"],3,"pick",2);le(I.GOLD_ORE,"Mena de oro",["gold_ore","gold_ore","gold_ore"],3,"pick",3);le(I.DIAMOND_ORE,"Mena de diamante",["diamond_ore","diamond_ore","diamond_ore"],3,"pick",3);le(I.BEDROCK,"Lecho de roca",["bedrock","bedrock","bedrock"],1/0);le(I.SNOW,"Nieve",["snow","dirt","snow_side"],.3,"shovel");le(I.CACTUS,"Cactus",["cactus_top","cactus_top","cactus_side"],.4);le(I.BRICKS,"Ladrillos",["bricks","bricks","bricks"],2,"pick",1);le(I.TABLE,"Mesa de crafteo",["table_top","planks","table_side"],2.5,"axe");le(I.TORCH,"Antorcha",["torch","torch","torch"],.05,null,0,{opaque:!1,torch:!0,flat:!0,emit:10});le(I.COMMAND,"Bloque de comandos",["command","command","command"],5,"pick",3);le(I.OBSIDIAN,"Obsidiana",["obsidian","obsidian","obsidian"],50,"pick",4);le(I.NETHER_PORTAL,"Portal del Nether",["portal","portal","portal"],1/0,null,0,{opaque:!1,transparent:!0,portal:!0,glow:!0});le(I.NETHERRACK,"Netherrack",["netherrack","netherrack","netherrack"],.4,"pick");le(I.SOUL_SAND,"Arena de almas",["soul_sand","soul_sand","soul_sand"],.5,"shovel");le(I.GLOWSTONE,"Piedra luminosa",["glowstone","glowstone","glowstone"],.3,null,0,{glow:!0,emit:10});le(I.LAVA,"Lava",["lava","lava","lava"],1/0,null,0,{opaque:!1,liquid:!0,glow:!0,emit:10});le(I.NETHER_BRICKS,"Ladrillos del Nether",["nether_bricks","nether_bricks","nether_bricks"],2,"pick",1);le(I.END_STONE,"Piedra del End",["end_stone","end_stone","end_stone"],3,"pick",1);le(I.END_FRAME,"Marco del portal del End",["end_frame_top","end_stone","end_frame_side"],1/0);le(I.END_FRAME_EYE,"Marco del End con ojo",["end_frame_eye","end_stone","end_frame_side"],1/0);le(I.END_PORTAL,"Portal del End",["end_portal","end_portal","end_portal"],1/0,null,0,{opaque:!1,transparent:!0,portal:!0,glow:!0});le(I.FURNACE,"Horno",["furnace_top","stone","furnace_front"],3,"pick",1);const rn=new Uint8Array(256),Pr=new Uint8Array(256),cn=new Uint8Array(256),Ru=new Uint8Array(256),Bo=new Uint8Array(256);for(const n of Object.values(Xe))rn[n.id]=n.opaque?1:0,Pr[n.id]=n.liquid||n.torch||n.portal?0:1,n.portal&&(Ru[n.id]=1),n.emit&&(Bo[n.id]=n.emit),cn[n.id]=n.liquid?1:0;const $n={};function oi(n,t,e={}){$n[n]={id:n,name:t,stack:64,...e}}oi(D.STICK,"Palo");oi(D.COAL,"Carbón");oi(D.IRON,"Lingote de hierro");oi(D.GOLD,"Lingote de oro");oi(D.DIAMOND,"Diamante");oi(D.STAR,"Estrella de la tormenta");oi(D.PEARL,"Perla de Ender");oi(D.LIGHTER,"Encendedor",{stack:1,uses:64});oi(D.EYE,"Ojo de Ender");oi(D.CHICKEN,"Pollo crudo",{food:4});oi(D.COOKED_CHICKEN,"Pollo asado",{food:12});oi(D.APPLE,"Manzana",{food:8});oi(D.PORK,"Cerdo crudo",{food:6});oi(D.BEEF,"Ternera cruda",{food:6});oi(D.COOKED_PORK,"Cerdo asado",{food:14});oi(D.STEAK,"Filete",{food:16});const Cu=[{n:"de madera",color:[176,140,84],speed:2,dur:59,lvl:1,mat:I.PLANKS},{n:"de piedra",color:[140,140,140],speed:4,dur:131,lvl:2,mat:I.COBBLE},{n:"de hierro",color:[225,225,225],speed:6,dur:250,lvl:3,mat:D.IRON},{n:"de diamante",color:[90,235,225],speed:8,dur:1561,lvl:4,mat:D.DIAMOND}],C1=[{t:"pick",name:"Pico",base:110,dmg:2,rows:["MMM"," S "," S "]},{t:"axe",name:"Hacha",base:120,dmg:3,rows:["MM","MS"," S"]},{t:"shovel",name:"Pala",base:130,dmg:2,rows:["M","S","S"]},{t:"sword",name:"Espada",base:140,dmg:4,rows:["M","M","S"]}],Lu=[];function Fi(n,t,e,i=1){Lu.push({pattern:n,key:t,out:e,n:i})}C1.forEach(n=>Cu.forEach((t,e)=>{const i=n.base+e;oi(i,`${n.name} ${t.n}`,{stack:1,tool:{type:n.t,tier:e,speed:t.speed,dur:t.dur,lvl:t.lvl,dmg:n.dmg+e},color:t.color}),Fi(n.rows,{M:t.mat,S:D.STICK},i)}));Fi(["L"],{L:I.LOG},I.PLANKS,4);Fi(["P","P"],{P:I.PLANKS},D.STICK,4);Fi(["PP","PP"],{P:I.PLANKS},I.TABLE);Fi(["SS","SS"],{S:I.SAND},I.GLASS,4);Fi(["CC","CC"],{C:I.COBBLE},I.BRICKS,4);Fi(["CCC","C C","CCC"],{C:I.COBBLE},I.FURNACE);Fi(["C","S"],{C:D.COAL,S:D.STICK},I.TORCH,4);Fi(["CCC","CDC","CCC"],{C:I.COBBLE,D:D.DIAMOND},I.OBSIDIAN,2);Fi(["I","C"],{I:D.IRON,C:D.COAL},D.LIGHTER);Fi(["P","C"],{P:D.PEARL,C:D.COAL},D.EYE);Fi(["OOO","ODO","OOO"],{O:I.OBSIDIAN,D:D.DIAMOND},I.END_FRAME,4);Fi(["DGD","GCG","DGD"],{D:D.DIAMOND,G:D.GOLD,C:D.COAL},I.COMMAND);const L1={[I.IRON_ORE]:[D.IRON,1],[I.GOLD_ORE]:[D.GOLD,1],[I.COBBLE]:[I.STONE,1],[I.SAND]:[I.GLASS,1],[I.LOG]:[D.COAL,1],[D.PORK]:[D.COOKED_PORK,1],[D.BEEF]:[D.STEAK,1],[D.CHICKEN]:[D.COOKED_CHICKEN,1]},gf={[D.COAL]:80,[I.LOG]:15,[I.PLANKS]:15,[I.TABLE]:15,[D.STICK]:5},Pu=8;function ca(n){return Xe[n]||$n[n]}function Mn(n){const t=ca(n);return Xe[n]?64:t.stack}const P1=n=>!!Xe[n],Du=n=>!Xe[n]||!!Xe[n].flat;function D1(n,t){let e=t,i=-1,s=t,r=-1;for(let o=0;o<t;o++)for(let h=0;h<t;h++)n[o*t+h]&&(e=Math.min(e,o),i=Math.max(i,o),s=Math.min(s,h),r=Math.max(r,h));if(i<0)return null;const a=i-e+1,l=r-s+1;for(const o of Lu)if(!(o.pattern.length!==a||o.pattern[0].length!==l))for(const h of[!1,!0]){let f=!0;for(let c=0;c<a&&f;c++)for(let u=0;u<l;u++){const d=o.pattern[c][h?l-1-u:u],m=d===" "?0:o.key[d];if(n[(e+c)*t+s+u]!==m){f=!1;break}}if(f)return o}return null}function us(n){return n&&$n[n.id]&&$n[n.id].tool}function Iu(n,t){const e=Xe[n];if(!e.lvl)return!0;const i=us(t);return!!i&&i.type==="pick"&&i.lvl>=e.lvl}function I1(n,t){const e=Xe[n];if(e.hardness===1/0)return 1/0;const i=us(t),s=i&&e.tool&&i.type===e.tool,r=Iu(n,t),a=s?i.speed:1;return e.hardness*(r?1.5:5)/a}function Uu(n,t){if(!Iu(n,t))return null;switch(n){case I.GRASS:return[I.DIRT,1];case I.STONE:return[I.COBBLE,1];case I.COAL_ORE:return[D.COAL,1];case I.DIAMOND_ORE:return[D.DIAMOND,1];case I.LEAVES:return Math.random()<.1?[D.APPLE,1]:null;case I.GLASS:case I.WATER:case I.LAVA:case I.NETHER_PORTAL:case I.END_PORTAL:case I.END_FRAME:case I.END_FRAME_EYE:return null;default:return[n,1]}}let zh=null;const Qa=new Map,tl=new Map,el=new Map;function U1(n){zh=n}function N1(n){const t=document.createElement("canvas");t.width=t.height=32;const e=t.getContext("2d");e.imageSmoothingEnabled=!1;const i=Xe[n],s=(r,a,l)=>{e.save(),e.setTransform(...a),e.drawImage(zh,Sr[r]*16,0,16,16,0,0,16,16),l&&(e.fillStyle=`rgba(0,0,0,${l})`,e.fillRect(0,0,16,16)),e.restore()};return s(i.tiles[0],[.875,.4375,-.875,.4375,16,4],0),s(i.tiles[2],[.875,.4375,0,.875,2,11],.22),s(i.tiles[2],[.875,-.4375,0,.875,16,18],.42),t}function zt(n,t,e){n.fillStyle=e;for(const[i,s]of t)n.fillRect(i,s,1,1)}const Nu=n=>`rgb(${n[0]},${n[1]},${n[2]})`,O1=(n,t)=>Nu(n.map(e=>Math.max(0,Math.min(255,e*t))));function z1(n){const t=document.createElement("canvas");t.width=t.height=16;const e=t.getContext("2d"),i="#7a5a30",s=()=>{for(let a=2;a<=11;a++)zt(e,[[a,15-a]],i)},r=$n[n]||{};if(n===I.TORCH){for(let a=6;a<=14;a++)zt(e,[[7,a],[8,a]],a%2?"#7a5630":"#6a4a28");zt(e,[[7,4],[8,4],[7,5],[8,5]],"#ffc83c"),zt(e,[[7,3],[8,3]],"#ff9a28"),zt(e,[[7,2]],"#ffeb78")}else if(r.tool){const a=Cu[r.tool.tier].color,l=O1(a,.7),o=Nu(a);s();const h=r.tool.type;if(h==="pick")zt(e,[[5,2],[6,1],[7,1],[8,1],[9,1],[10,2],[11,3],[12,4],[12,5],[4,3],[3,4],[3,5]],o),zt(e,[[6,2],[7,2],[8,2],[9,2],[10,3],[11,4]],l);else if(h==="axe")zt(e,[[7,2],[8,2],[9,2],[6,3],[7,3],[8,3],[9,3],[10,3],[8,4],[9,4],[10,4],[9,5]],o),zt(e,[[7,4],[8,5],[10,5]],l);else if(h==="shovel")zt(e,[[11,2],[12,2],[10,3],[11,3],[12,3],[13,3],[11,4],[12,4],[13,4],[12,5],[13,5],[12,1],[13,2]],o),zt(e,[[11,4],[12,5]],l);else{for(let f=0;f<9;f++)zt(e,[[5+f,10-f],[6+f,10-f]],f%2?o:l);zt(e,[[12,1],[13,2],[13,1]],o),zt(e,[[4,9],[5,10],[6,11],[3,8],[4,11],[5,12]],"#5a4020")}}else if(n===D.STICK)s(),zt(e,[[12,3]],i);else if(n===D.COAL)zt(e,[[5,5],[6,4],[7,4],[8,4],[9,5],[10,6],[10,7],[9,9],[8,10],[6,10],[5,9],[4,7],[4,6],[6,5],[7,5],[8,5],[9,6],[9,7],[8,9],[7,9],[6,9],[5,8],[5,6],[6,6],[7,6],[8,6],[8,7],[8,8],[7,8],[6,8],[5,7],[6,7],[7,7]],"#262626"),zt(e,[[7,5],[6,6]],"#555");else if(n===D.IRON||n===D.GOLD){const a=n===D.IRON?"#d8d8d8":"#f2d230",l=n===D.IRON?"#9a9a9a":"#b89412";for(let o=5;o<=10;o++)for(let h=3;h<=12;h++)zt(e,[[h,o]],o>=9?l:a);zt(e,[[3,5],[12,5],[3,10],[12,10]],"rgba(0,0,0,0)")}else if(n===D.DIAMOND)zt(e,[[7,3],[8,3],[6,4],[7,4],[8,4],[9,4],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[6,6],[7,6],[8,6],[9,6],[7,7],[8,7],[7,8]],"#5aebe1"),zt(e,[[7,4],[6,5],[7,6]],"#c8fffa"),zt(e,[[9,5],[8,6],[8,7],[7,8]],"#2aa8a0");else if(n===D.APPLE){zt(e,[[5,5],[6,4],[7,5],[8,4],[9,4],[10,5],[4,6],[11,6],[4,7],[11,7],[5,9],[6,10],[9,10],[10,9],[11,8],[4,8]],"#d22");for(let a=5;a<=9;a++)for(let l=5;l<=10;l++)zt(e,[[l,a]],"#e33");zt(e,[[6,5],[6,6]],"#fcc"),zt(e,[[8,2],[9,3]],"#5a3a10"),zt(e,[[9,2],[10,2]],"#3a3")}else if(n===D.PORK||n===D.BEEF){const a=n===D.PORK?"#f0a0a0":"#b83a3a",l=n===D.PORK?"#c87070":"#8a2020";for(let o=4;o<=11;o++)for(let h=3+(o<6?2:0);h<=12-(o>9?2:0);h++)zt(e,[[h,o]],(h+o)%5===0?l:a);zt(e,[[10,5],[11,5],[11,6]],"#f6f0e0")}else if(n===D.STAR)zt(e,[[7,1],[8,1],[7,2],[8,2],[7,3],[8,3],[1,6],[2,6],[3,6],[4,6],[11,6],[12,6],[13,6],[14,6],[5,5],[6,5],[7,5],[8,5],[9,5],[10,5],[5,7],[6,7],[7,7],[8,7],[9,7],[10,7],[4,8],[5,8],[6,8],[7,8],[8,8],[9,8],[10,8],[11,8],[3,6],[5,9],[6,9],[9,9],[10,9],[4,11],[5,11],[10,11],[11,11],[4,12],[11,12],[3,13],[12,13],[6,6],[7,6],[8,6],[9,6],[7,4],[8,4]],"#fff1a8"),zt(e,[[7,6],[8,6],[7,7],[8,7]],"#ffffff"),zt(e,[[5,8],[10,8],[6,9],[9,9]],"#e8c640");else if(n===D.LIGHTER){for(let a=7;a<=13;a++)for(let l=4;l<=10;l++)zt(e,[[l,a]],a<9?"#9a9a9a":"#6a6a6a");zt(e,[[8,6],[9,5],[9,4],[8,3],[9,2]],"#ff9a28"),zt(e,[[9,4],[9,3]],"#ffe070"),zt(e,[[6,8],[7,8]],"#d8d8d8")}else if(n===D.EYE){for(let a=3;a<=12;a++)for(let l=3;l<=12;l++)Math.hypot(l-7.5,a-7.5)<4.6&&zt(e,[[l,a]],Math.hypot(l-7.5,a-7.5)<2?"#101a14":"#3fae78");zt(e,[[5,5],[6,5],[5,6]],"#a8ffd8")}else if(n===D.PEARL){for(let a=3;a<=12;a++)for(let l=3;l<=12;l++)Math.hypot(l-7.5,a-7.5)<4.6&&zt(e,[[l,a]],Math.hypot(l-7.5,a-7.5)<3?"#1f8f6a":"#0e5a44");zt(e,[[6,5],[7,5],[5,6],[6,6]],"#a8ffd8"),zt(e,[[9,9],[10,8]],"#52d8a8")}else if(n===D.CHICKEN||n===D.COOKED_CHICKEN){const a=n===D.CHICKEN?"#f2c4b0":"#c8883a",l=n===D.CHICKEN?"#d49a84":"#8a5420";for(let o=4;o<=10;o++)for(let h=4;h<=11;h++)Math.hypot(h-7.5,o-7)<4&&zt(e,[[h,o]],(h+o)%4===0?l:a);zt(e,[[10,10],[11,11],[12,12],[12,11],[11,12]],"#f6f0e0")}else if(n===D.COOKED_PORK||n===D.STEAK){const a=n===D.STEAK?"#8a4a22":"#c8884c",l=n===D.STEAK?"#5e2e12":"#a06030";for(let o=4;o<=11;o++)for(let h=3+(o<6?2:0);h<=12-(o>9?2:0);h++)zt(e,[[h,o]],(h+o)%4===0?l:a);zt(e,[[10,5],[11,5],[11,6]],"#f6f0e0"),zt(e,[[5,6],[6,7],[7,8],[8,9]],l)}else zt(e,[[7,7]],"#fff");return t}function Ou(n){if(el.has(n))return el.get(n);const t=Xe[n]&&!Xe[n].flat?N1(n):z1(n);return el.set(n,t),t}function zu(n){return Qa.has(n)||Qa.set(n,Ou(n).toDataURL()),Qa.get(n)}function Fh(n){if(!tl.has(n)){const t=new Oi(Ou(n));t.magFilter=pe,t.minFilter=pe,t.generateMipmaps=!1,t.colorSpace=ti,tl.set(n,t)}return tl.get(n)}function il(n,t,e){const i=document.createElement("canvas");i.width=9,i.height=9;const s=i.getContext("2d");return n.forEach((r,a)=>[...r].forEach((l,o)=>{const h=t(l,o);h&&(s.fillStyle=h,s.fillRect(o,a,1,1))})),i.toDataURL()}const F1=[".##...##.","#RR#.#RR#","#RHRRRRR#","#RRRRRRR#",".#RRRRR#.","..#RRR#..","...#R#...","....#....","........."],B1=["......##.",".....#CC#","....#CHC#","...#CCC#.","..#CCC#..",".#CCC#...","#WW##....","#WW#.....",".##......"],k1=["..#####..",".#BBBBB#.","#BHBBBBB#","#BHBBBBB#","#BBBBBBB#","#BBBBBBB#",".#BBBBB#.","..#####..","........."];function H1(){const n=i=>il(F1,(s,r)=>{if(s===".")return null;const a=i==="empty"||i==="half"&&r>4;return s==="#"?"#1a0505":a?"#4a3a3a":s==="H"?"#ff9c9c":"#e02222"}),t=i=>il(B1,(s,r)=>s==="."?null:s==="#"?"#2a1405":s==="W"?i==="empty"?"#555":"#f4efe4":i==="empty"||i==="half"&&r>4?"#4a3d30":s==="H"?"#e8a05a":"#c8782b"),e=i=>il(k1,s=>s==="."?null:s==="#"?"#0a2a5a":i==="empty"?"rgba(120,170,230,0.25)":s==="H"?"#d8f0ff":"#5aa8f0");return{heart:{full:n("full"),half:n("half"),empty:n("empty")},food:{full:t("full"),half:t("half"),empty:t("empty")},bubble:{full:e("full"),empty:e("empty")}}}function G1(n){const t=document.createElement("canvas");t.width=t.height=16;const e=Sr[n];return t.getContext("2d").drawImage(zh,e*16,0,16,16,0,0,16,16),t.toDataURL()}const He=(n,t)=>new ui(t?{color:n,map:t}:{color:n});function Eo(n){const t=document.createElement("canvas");t.width=t.height=8,n(t.getContext("2d"));const e=new Oi(t);return e.magFilter=pe,e.minFilter=pe,e.generateMipmaps=!1,e.colorSpace=ti,e}function wo(n,t,e,i,s,r,a){const l=new ve;l.position.set(s,r,a);const o=new At(new Jt(n,t,e),i);return o.position.y=-t/2,l.add(o),l}class V1{constructor(t){const e="#e0ac8c",i="#3a2412",a=Eo(m=>{m.fillStyle=e,m.fillRect(0,0,8,8),m.fillStyle=i,m.fillRect(0,0,8,2),m.fillRect(0,2,1,2),m.fillRect(7,2,1,2),m.fillStyle="#fff",m.fillRect(1,3,2,1),m.fillRect(5,3,2,1),m.fillStyle="#3a56c8",m.fillRect(2,3,1,1),m.fillRect(5,3,1,1),m.fillStyle="#a0603c",m.fillRect(3,5,2,1)}),l=Eo(m=>{m.fillStyle=i,m.fillRect(0,0,8,8)}),o=Eo(m=>{m.fillStyle=e,m.fillRect(0,0,8,8),m.fillStyle=i,m.fillRect(0,0,8,2)}),h=Eo(m=>{m.fillStyle=i,m.fillRect(0,0,8,8)}),f=He(14724236);this.group=new ve;const c=new ve;this.group.add(c),this.head=new ve,this.head.position.set(0,1.5,0);const u=new At(new Jt(.5,.5,.5),[He(16777215,o),He(16777215,o),He(16777215,l),f,He(16777215,a),He(16777215,h)]);u.position.y=.25,this.head.add(u),c.add(this.head);const d=new At(new Jt(.5,.75,.25),He(2794936));d.position.y=1.125,c.add(d),this.legL=wo(.25,.75,.25,He(3817372),-.125,.75,0),this.legR=wo(.25,.75,.25,He(3817372),.125,.75,0),this.legL.children[0].material=He(3817372),c.add(this.legL,this.legR),this.armL=wo(.22,.72,.22,[He(2794936),He(2794936),He(2794936),f,He(2794936),He(2794936)],-.36,1.48,0),this.armR=wo(.22,.72,.22,[He(2794936),He(2794936),He(2794936),f,He(2794936),He(2794936)],.36,1.48,0),c.add(this.armL,this.armR),this.itemMat=new Me({transparent:!0,side:bi,alphaTest:.1}),this.item=new At(new An(.55,.55),this.itemMat),this.item.position.set(0,-.68,.22),this.item.rotation.set(0,0,0),this.armR.add(this.item),this.item.visible=!1,this.heldId=-1,this.t=0,t.add(this.group),this.group.traverse(m=>{m.isMesh&&(m.castShadow=!0,m.receiveShadow=!0)}),this.group.visible=!1}setHeld(t){t!==this.heldId&&(this.heldId=t,this.item.visible=!!t,t&&(this.itemMat.map=Fh(t),this.itemMat.needsUpdate=!0))}update(t,e,i,s){this.group.position.copy(e.pos),this.group.rotation.y=e.yaw+Math.PI;const r=Math.hypot(e.vel.x,e.vel.z),a=r>.3&&(e.onGround||e.inWater);this.t+=t*(a?4+r*1.2:0);const l=a?Math.sin(this.t)*.9:0;this.legL.rotation.x=l,this.legR.rotation.x=-l,this.armL.rotation.x=-l*.8;let o=l*.8;i>0?o=-Math.sin(Math.min(1,i)*Math.PI)*1.8-.5:this.heldId&&(o=-.5+l*.3),this.armR.rotation.x=o,this.head.rotation.x=-e.pitch;const h=Math.sin(performance.now()/700)*.02;this.armL.rotation.z=-.04-h,this.armR.rotation.z=.04+h,e.flying&&(this.group.rotation.x=0)}}const W1={clear:0,rain:.65,storm:1},eh={clear:"Despejado",rain:"Lluvia",storm:"Tormenta"},ni=(n,t)=>n+Math.random()*(t-n),pr=1800,ci=22;class X1{constructor(t,e){this.scene=t,this.hooks=e,this.state="clear",this.timer=ni(90,240),this.intensity=0,this.t=Math.random()*100,this.wind={x:0,z:0,s:.12},this.lightningT=6,this.bolts=[],this.thunder=[],this.boss=!1,this.pos=new Float32Array(pr*3);for(let r=0;r<pr;r++)this.pos[r*3]=ni(-ci,ci),this.pos[r*3+1]=ni(-8,22),this.pos[r*3+2]=ni(-ci,ci);const i=new qe;this.linePos=new Float32Array(pr*6),i.setAttribute("position",new _i(this.linePos,3)),this.rain=new Su(i,new Lh({color:11453674,transparent:!0,opacity:.55,fog:!1,depthWrite:!1})),this.rain.frustumCulled=!1,this.rain.visible=!1,t.add(this.rain);const s=new qe;this.ptPos=new Float32Array(pr*3),s.setAttribute("position",new _i(this.ptPos,3)),this.snow=new Ph(s,new ha({color:16777215,size:3.5,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1})),this.snow.frustumCulled=!1,this.snow.visible=!1,t.add(this.snow),this.boltMat=new Me({color:15922431,fog:!1})}set(t){this.state=t,this.timer=t==="clear"?ni(120,360):t==="rain"?ni(90,200):ni(80,170)}cycle(){const t=["clear","rain","storm"];return this.set(t[(t.indexOf(this.state)+1)%3]),this.state}next(){const t=Math.random();return this.state==="clear"?t<.65?"rain":t<.85?"storm":"clear":this.state==="rain"?t<.55?"clear":"storm":t<.5?"rain":"clear"}toJSON(){return{state:this.state,timer:this.timer,intensity:this.intensity}}load(t){t&&(this.state=t.state,this.timer=t.timer,this.intensity=t.intensity)}update(t,e,i,s,r){const a=this.hooks.world();this.t+=t,this.timer-=t,this.timer<=0&&this.set(this.next());const l=W1[this.state];this.intensity+=Math.sign(l-this.intensity)*Math.min(Math.abs(l-this.intensity),t*.08);const o=this.intensity,h=Math.sin(this.t*.02)*1.6+.8,f=.55+.45*Math.sin(this.t*.35)*Math.sin(this.t*.13+1),u=.12+((this.state==="storm"?1:this.state==="rain"?.45:.12)-.12)*Math.min(1,o*1.5+(this.state==="clear",0))*f;this.wind.s+=(u-this.wind.s)*Math.min(1,t*1.5),this.wind.x=Math.cos(h)*this.wind.s,this.wind.z=Math.sin(h)*this.wind.s;const d=i.position,m=o>.04&&!r;if(this.rain.visible=m&&!s,this.snow.visible=m&&s,m){const g=Math.floor(pr*Math.min(1,o*(this.state==="storm"?1:.8))),p=s?2.4:26,M=s?1.5:9,y=this.wind.x*M,_=this.wind.z*M;for(let P=0;P<g;P++){let T=this.pos[P*3]+y*t,w=this.pos[P*3+1]-p*t*(s?1:.85+P%7*.05),C=this.pos[P*3+2]+_*t;s&&(T+=Math.sin(this.t*1.3+P)*t*.6,C+=Math.cos(this.t*1.1+P*.7)*t*.6),T>ci?T-=2*ci:T<-ci&&(T+=2*ci),C>ci?C-=2*ci:C<-ci&&(C+=2*ci);const S=d.x+T,v=d.z+C,R=a?a.topY(Math.floor(S),Math.floor(v)):-1;if((w+d.y<R+1||w<-14)&&(w=ni(10,24),T=ni(-ci,ci),C=ni(-ci,ci)),this.pos[P*3]=T,this.pos[P*3+1]=w,this.pos[P*3+2]=C,s)this.ptPos[P*3]=d.x+T,this.ptPos[P*3+1]=d.y+w,this.ptPos[P*3+2]=d.z+C;else{const U=P*6,N=.9;this.linePos[U]=d.x+T,this.linePos[U+1]=d.y+w,this.linePos[U+2]=d.z+C,this.linePos[U+3]=d.x+T-y*.06,this.linePos[U+4]=d.y+w+N,this.linePos[U+5]=d.z+C-_*.06}}s?(this.snow.geometry.setDrawRange(0,g),this.snow.geometry.attributes.position.needsUpdate=!0):(this.rain.geometry.setDrawRange(0,g*2),this.rain.geometry.attributes.position.needsUpdate=!0),this.rain.material.opacity=.35+.3*o}this.state==="storm"&&o>.7&&(this.lightningT-=t,this.lightningT<=0&&(this.lightningT=this.boss?ni(2.5,6):ni(4,14),this.strike(e)));const x=this.hooks.sky();x.wet=o,x.flash=Math.max(0,x.flash-t*2.2);for(let g=this.bolts.length-1;g>=0;g--){const p=this.bolts[g];p.life-=t,p.group.visible=p.life>.12||Math.floor(p.life*40)%2===0,p.life<=0&&(this.scene.remove(p.group),p.group.traverse(M=>M.geometry&&M.geometry.dispose()),this.bolts.splice(g,1))}for(let g=this.thunder.length-1;g>=0;g--)this.thunder[g].delay-=t,this.thunder[g].delay<=0&&(this.hooks.sound("thunder",this.thunder[g].vol),this.thunder.splice(g,1))}strike(t,e,i){const s=this.hooks.world(),r=Math.random()*Math.PI*2,a=e?6:ni(18,110),l=Math.floor(i?i.x+ni(-2,2):t.pos.x+Math.cos(r)*a),o=Math.floor(i?i.z+ni(-2,2):t.pos.z+Math.sin(r)*a),h=s.topY(l,o),f=h>=0,c=f?h+1:30,u=Math.hypot(l-t.pos.x,o-t.pos.z);if(this.hooks.sky().flash=Math.min(1,1.15-u/220),this.thunder.push({delay:u/55,vol:Math.max(.25,1-u/150)}),!f||u>150)return;const d=new ve;let m=l+.5,x=o+.5,g=c+85;const p=16;for(let M=1;M<=p;M++){const y=c+85-(c+85-c)*M/p,_=3.2*(1-M/p),P=M===p?l+.5:l+.5+ni(-_,_),T=M===p?o+.5:o+.5+ni(-_,_),w=new L(m,g,x),C=new L(P,y,T),S=w.distanceTo(C),v=new At(new Ln(.16,.16,S,4),this.boltMat);v.position.copy(w).add(C).multiplyScalar(.5),v.quaternion.setFromUnitVectors(new L(0,1,0),C.clone().sub(w).normalize()),d.add(v),m=P,g=y,x=T}this.scene.add(d),this.bolts.push({group:d,life:.45}),this.hooks.burst(l+.5,c+.3,o+.5),this.hooks.strikeMobs(l+.5,o+.5),u<3.5&&this.hooks.hurtPlayer(8)}}function ds(n,t,e,i=28){const s={onGround:!1,hitX:!1,hitZ:!1};t.vel.y=Math.max(-50,t.vel.y-i*e);const r=()=>{for(let a=Math.floor(t.pos.y);a<=Math.floor(t.pos.y+t.h-.001);a++)for(let l=Math.floor(t.pos.z-t.hw);l<=Math.floor(t.pos.z+t.hw);l++)for(let o=Math.floor(t.pos.x-t.hw);o<=Math.floor(t.pos.x+t.hw);o++)if(n.isSolid(o,a,l))return!0;return!1};for(const a of["x","z","y"]){const l=t.vel[a]*e;l&&(t.pos[a]+=l,r()&&(t.pos[a]-=l,a==="y"&&t.vel.y<0&&(s.onGround=!0),a==="x"&&(s.hitX=!0),a==="z"&&(s.hitZ=!0),t.vel[a]=0))}return s}class q1{constructor(t,e){this.scene=t,this.world=e,this.list=[]}spawn(t,e,i,s,r=1,a=!0){const l=new Ch({map:Fh(s),transparent:!0,alphaTest:.1}),o=new yu(l),h=Xe[s]?.32:.42;o.scale.set(h,h,h),this.scene.add(o);const f=Math.random()*Math.PI*2;this.list.push({id:s,n:r,sprite:o,base:h,age:0,hw:.12,h:.25,pos:new L(t,e,i),vel:new L(a?Math.cos(f)*1.6:0,a?4:0,a?Math.sin(f)*1.6:0)})}update(t,e,i,s){for(let r=this.list.length-1;r>=0;r--){const a=this.list[r];a.age+=t,ds(this.world,a,t,22).onGround&&(a.vel.x*=.8,a.vel.z*=.8);const o=Math.sin(a.age*3)*.05+.22;a.sprite.position.set(a.pos.x,a.pos.y+o,a.pos.z);const h=e.pos.x-a.pos.x,f=e.pos.z-a.pos.z,c=e.pos.y+.9-a.pos.y,u=Math.hypot(h,c,f);if(a.age>.6&&u<2.2&&i.canAdd(a.id)&&(a.vel.x=h*6,a.vel.z=f*6,a.vel.y=Math.max(a.vel.y,c*5),a.pos.x+=h*t*6,a.pos.z+=f*t*6,u<.9)){const d=i.add(a.id,a.n);if(d===0){this.remove(r),s(a);continue}a.n=d}(a.age>300||a.pos.y<-10)&&this.remove(r)}}remove(t){const e=this.list[t];this.scene.remove(e.sprite),e.sprite.material.dispose(),this.list.splice(t,1)}clear(){for(;this.list.length;)this.remove(0)}}class Y1{constructor(t,e){this.world=e,this.pool=[];const i=new Jt(.12,.12,.12);for(let s=0;s<90;s++){const r=new At(i,new Me({color:16777215}));r.visible=!1,t.add(r),this.pool.push({mesh:r,life:0,vel:new L})}this.next=0}burst(t,e,i,s,r=10,a=3){for(let l=0;l<r;l++){const o=this.pool[this.next++%this.pool.length];o.life=.5+Math.random()*.4,o.mesh.visible=!0,o.mesh.position.set(t+(Math.random()-.5),e+(Math.random()-.5),i+(Math.random()-.5)),o.mesh.material.color.setRGB(s[0]*(.7+Math.random()*.3),s[1]*(.7+Math.random()*.3),s[2]*(.7+Math.random()*.3)),o.vel.set((Math.random()-.5)*a,Math.random()*a*.9,(Math.random()-.5)*a)}}blockBreak(t,e,i,s){const r=Xe[s];r&&this.burst(t+.5,e+.5,i+.5,wu(r.tiles[2]),14,3.2)}update(t){for(const e of this.pool)if(!(e.life<=0)){if(e.life-=t,e.life<=0){e.mesh.visible=!1;continue}e.vel.y-=16*t,e.mesh.position.addScaledVector(e.vel,t)}}}const tt=16,de=128,si=30,yi=(n,t)=>(n+32768)*65536+(t+32768),xf=n=>Math.floor(n/65536)-32768,_f=n=>n%65536-32768,ih=[{dir:[-1,0,0],shade:.9,ax:0,corners:[{p:[0,1,0],uv:[0,1]},{p:[0,0,0],uv:[0,0]},{p:[0,1,1],uv:[1,1]},{p:[0,0,1],uv:[1,0]}]},{dir:[1,0,0],shade:.9,ax:0,corners:[{p:[1,1,1],uv:[0,1]},{p:[1,0,1],uv:[0,0]},{p:[1,1,0],uv:[1,1]},{p:[1,0,0],uv:[1,0]}]},{dir:[0,-1,0],shade:.75,ax:1,bottom:!0,corners:[{p:[1,0,1],uv:[1,0]},{p:[0,0,1],uv:[0,0]},{p:[1,0,0],uv:[1,1]},{p:[0,0,0],uv:[0,1]}]},{dir:[0,1,0],shade:1,ax:1,top:!0,corners:[{p:[0,1,1],uv:[1,1]},{p:[1,1,1],uv:[0,1]},{p:[0,1,0],uv:[1,0]},{p:[1,1,0],uv:[0,0]}]},{dir:[0,0,-1],shade:.82,ax:2,corners:[{p:[1,0,0],uv:[0,0]},{p:[0,0,0],uv:[1,0]},{p:[1,1,0],uv:[0,1]},{p:[0,1,0],uv:[1,1]}]},{dir:[0,0,1],shade:.82,ax:2,corners:[{p:[0,0,1],uv:[0,0]},{p:[1,0,1],uv:[1,0]},{p:[0,1,1],uv:[0,1]},{p:[1,1,1],uv:[1,1]}]}];for(const n of ih)n.tan=[0,1,2].filter(t=>t!==n.ax);const vf=[.5,.68,.84,1],Er=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function Vn(n,t,e){const i=mi(n*.0022,t*.0022,e,4),s=mi(n*.0055,t*.0055,e+31,3),r=1-Math.abs(2*mi(n*.011,t*.011,e+37,3)-1),a=mi(n*.013,t*.013,e+7,3),l=mi(n*.05,t*.05,e+9,2);let o,h=0;if(i<.4)o=si-2-(.4-i)*80+l*3;else{const d=Math.min(1,(i-.4)/.5);o=si+1+d*10+a*12+l*3,h=Er(.52,.78,s)*Er(.45,.6,i),o+=h*(r*62+14)}if(i>=.4&&h<.5){const d=Math.abs(mi(n*.0032+11,t*.0032-7,e+61,2)-.5);if(d<.016){const m=Er(.016,.004,d);o=o*(1-m)+(si-2)*m}}o=Math.max(6,Math.min(de-8,Math.floor(o)));const f=mi(n*.0035,t*.0035,e+500,2),c=mi(n*.004,t*.004,e+900,2);let u;return o<=si-1?u="ocean":h>.3?u="mountains":f<.34?u="snow":f>.64?u=c>.55?"jungle":"desert":u=f>.55&&c>.6?"jungle":"plains",{h:o,biome:u,m:h,t:f,hm:c}}const K1=(n,t,e)=>Vn(n,t,e).h;function Mf(n,t,e){return Vn(n,t,e).biome}function Bh(){return Array.from({length:10},(n,t)=>{const e=t/10*Math.PI*2;return{x:Math.round(Math.cos(e)*36),z:Math.round(Math.sin(e)*36),top:78+t%5*7}})}class $1{constructor(t,e,i=1337,s=new Map,r="overworld"){this.dim=r,this.scene=t,this.materials=e,this.seed=i,this.saved=s,this.chunks=new Map,this.tops=new Map,this.meshes=new Map,this.dirty=new Set,this.modified=new Set,this.unsaved=new Set,this.unloadT=0,this.torches=new Map,this._lm=null,this.onChunkMeshed=null}idx(t,e,i){return(e*tt+i)*tt+t}generateChunk(t,e){const i=yi(t,e);if(this.saved.has(i)){let f=new Uint8Array(this.saved.get(i));if(f.length!==tt*tt*de){const c=new Uint8Array(tt*tt*de);c.set(f.subarray(0,Math.min(f.length,c.length))),f=c}return this.chunks.set(i,f),this.modified.add(i),this.computeTops(i,f),this.scanTorches(i,f),f}if(this.dim==="nether")return this.genNether(t,e,i);if(this.dim==="end")return this.genEnd(t,e,i);const s=this.seed,r=new Uint8Array(tt*tt*de),a=t*tt,l=e*tt;for(let f=0;f<tt;f++)for(let c=0;c<tt;c++){const u=a+c,d=l+f,m=Vn(u,d,s),x=m.h,g=m.biome;let p=I.GRASS,M=I.DIRT;g==="ocean"||x<=si+1||g==="desert"?(p=I.SAND,M=I.SAND):g==="snow"?p=I.SNOW:g==="mountains"&&(x>92?(p=I.SNOW,M=I.SNOW):x>64&&(p=I.STONE,M=I.STONE));for(let y=0;y<=x&&y<de;y++){let _=I.STONE;if(y===x)_=p;else if(y>=x-3)_=M;else{const P=Zt(u*31+y,d*17-y,s+77+y);y<64&&P<.025?_=I.COAL_ORE:y<48&&P>.975&&P<.99?_=I.IRON_ORE:y<28&&P>.99&&P<.996?_=I.GOLD_ORE:y<16&&P>.996&&(_=I.DIAMOND_ORE)}if((y===0||y===1&&Zt(u,d,s+3)<.5)&&(_=I.BEDROCK),y>2&&y<x-1&&_!==I.BEDROCK){const P=Us(u*.045,y*.07,d*.045,s+11),T=Us(u*.045+50,y*.07+50,d*.045+50,s+13),w=Us(u*.025,y*.045,d*.025,s+17);(Math.abs(P-.5)<.055&&Math.abs(T-.5)<.055||w>.8)&&(_=Ue)}r[this.idx(c,y,f)]=_}for(let y=x+1;y<=si;y++)r[this.idx(c,y,f)]=I.WATER}const o=(f,c,u,d,m)=>{const x=f-a,g=u-l;if(x<0||g<0||x>=tt||g>=tt||c>=de||c<0)return;const p=this.idx(x,c,g);m&&r[p]!==Ue||(r[p]=d)},h=this.villagesNear(a,l);for(let f=l-3;f<l+tt+3;f++)for(let c=a-3;c<a+tt+3;c++){const u=Zt(c,f,s+99);if(u>.06)continue;const d=Vn(c,f,s),m=d.h,x=d.biome;if(m<=si+1||x==="ocean"||x==="mountains"||h.some(P=>Math.abs(P.x-c)<26&&Math.abs(P.z-f)<26))continue;if(x==="desert"){if(u<.004){const P=1+Math.floor(Zt(c,f,s+6)*3);for(let T=1;T<=P;T++)o(c,m+T,f,I.CACTUS,!1)}continue}const g=mi(c*.012,f*.012,s+800,2)>.58;if(u>(x==="jungle"?.055:g?.03:x==="snow"?.007:.005))continue;const M=x==="jungle",y=M?8+Math.floor(Zt(c,f,s+5)*6):4+Math.floor(Zt(c,f,s+5)*3),_=M?3:2;for(let P=-2;P<=1;P++){const T=P<=-1?_:_-1;for(let w=-T;w<=T;w++)for(let C=-T;C<=T;C++)T>=2&&Math.abs(C)===T&&Math.abs(w)===T||o(c+C,m+y+P,f+w,I.LEAVES,!0)}for(let P=1;P<=y;P++)o(c,m+P,f,I.LOG,!1)}for(const f of h)this.buildVillage(f,o);return this.chunks.set(i,r),this.computeTops(i,r),this.scanTorches(i,r),r}villageAt(t,e){const i=t+","+e;if(this.vcache||(this.vcache=new Map),this.vcache.has(i))return this.vcache.get(i);const s=this.seed;let r=null;if(Zt(t,e,s+444)<.3){const a=t*128+28+Math.floor(Zt(t,e,s+445)*72),l=e*128+28+Math.floor(Zt(t,e,s+446)*72),o=Vn(a,l,s);o.biome!=="ocean"&&o.biome!=="mountains"&&o.h>si+1&&o.h<si+20&&[[12,0],[-12,0],[0,12],[0,-12],[10,10],[-10,-10]].every(([f,c])=>{const u=Vn(a+f,l+c,s);return Math.abs(u.h-o.h)<=3&&u.biome!=="ocean"})&&(r={x:a,z:l,H:o.h,biome:o.biome})}return this.vcache.set(i,r),r}villagesNear(t,e){const i=[];for(let s=Math.floor((t-40)/128);s<=Math.floor((t+tt+40)/128);s++)for(let r=Math.floor((e-40)/128);r<=Math.floor((e+tt+40)/128);r++){const a=this.villageAt(s,r);a&&i.push(a)}return i}buildVillage(t,e){const i=this.seed,s=t.H,r=t.biome==="desert"?I.SAND:I.PLANKS,a=I.PLANKS;for(let o=-2;o<=2;o++)for(let h=-2;h<=2;h++){const f=Math.abs(o)===2||Math.abs(h)===2;for(let c=s-3;c<=s;c++)e(t.x+o,c,t.z+h,f?I.COBBLE:I.WATER,!1);for(let c=s+1;c<=s+6;c++)e(t.x+o,c,t.z+h,0,!1);f&&e(t.x+o,s+1,t.z+h,I.COBBLE,!1)}for(const[o,h]of[[-2,-2],[2,-2],[-2,2],[2,2]])for(let f=s+2;f<=s+4;f++)e(t.x+o,f,t.z+h,I.LOG,!1);for(let o=-2;o<=2;o++)for(let h=-2;h<=2;h++)e(t.x+o,s+5,t.z+h,I.PLANKS,!1);[[-14,-8],[14,-8],[-14,10],[14,10],[0,-16],[0,17]].forEach(([o,h],f)=>{if(Zt(t.x+o,t.z+h,i+5)<.12&&f>3)return;const c=t.x+o,u=t.z+h,d=Math.abs(o)>Math.abs(h)?-Math.sign(o):0,m=d?0:-Math.sign(h);for(let x=0;x<40;x++){const g=c+d*(4+x),p=u+m*(4+x);if(Math.abs(g-t.x)<3&&Math.abs(p-t.z)<3)break;e(g,s,p,I.COBBLE,!1);for(let M=s+1;M<=s+3;M++)e(g,M,p,0,!1)}for(let x=-4;x<=4;x++)for(let g=-4;g<=4;g++){const p=c+x,M=u+g,y=K1(p,M,i);for(let _=Math.max(1,y-1);_<=s-1;_++)e(p,_,M,I.COBBLE,!1);for(let _=s+1;_<=s+9;_++)e(p,_,M,0,!1);Math.abs(x)<=3&&Math.abs(g)<=3&&e(p,s,M,a,!1)}for(let x=-3;x<=3;x++)for(let g=-3;g<=3;g++){if(Math.abs(x)!==3&&Math.abs(g)!==3)continue;const p=Math.abs(x)===3&&Math.abs(g)===3;for(let M=s+1;M<=s+3;M++){let y=p?I.LOG:r;!p&&(Math.abs(x)===3&&g===0||Math.abs(g)===3&&x===0)&&M===s+2&&(y=I.GLASS),x===d*3&&g===m*3&&M<=s+2&&(y=0),e(c+x,M,u+g,y,!1)}}for(let x=4,g=s+4;x>=0;x--,g++)for(let p=-x;p<=x;p++)for(let M=-x;M<=x;M++)e(c+p,g,u+M,x===0?I.LOG:I.PLANKS,!1);e(c-2,s+1,u-2,I.TORCH,!1),e(c+2,s+1,u-2,I.TABLE,!1),e(c+2,s+1,u+2,I.FURNACE,!1),e(c-2,s+1,u+2,I.TORCH,!1),e(c+d*4+m,s+1,u+m*4+d,I.TORCH,!1)})}scanTorches(t,e){let i=null;const s=tt*tt;for(let r=0;r<e.length;r++){const a=e[r];if(!(!a||!Bo[a])){if(a===I.LAVA){const l=r%tt,o=Math.floor(r/tt)%tt;if(l+o&1||e[r+s]!==0)continue}(i||(i=new Set)).add(r)}}i?this.torches.set(t,i):this.torches.delete(t)}genNether(t,e,i){const s=this.seed+7001,r=new Uint8Array(tt*tt*de),a=t*tt,l=e*tt;for(let h=0;h<tt;h++)for(let f=0;f<tt;f++){const c=a+f,u=l+h;for(let d=0;d<de;d++){let m=0;if(d===0||d===de-1||d===1&&Zt(c,u,s+1)<.5||d===de-2&&Zt(c,u,s+2)<.5)m=I.BEDROCK;else{const x=Us(c*.022,d*.04,u*.022,s+301)*.65+Us(c*.06,d*.09,u*.06,s+302)*.35,g=Math.abs(d-62)/62;x+.62*g*g>.72||d>=de-3?m=I.NETHERRACK:m=d<=31?I.LAVA:Ue}r[this.idx(f,d,h)]=m}}const o=tt*tt;for(let h=0;h<tt;h++)for(let f=0;f<tt;f++){const c=a+f,u=l+h,d=Us(c*.05,0,u*.05,s+303)>.56;for(let m=2;m<de-3;m++){const x=this.idx(f,m,h);if(r[x]!==I.NETHERRACK)continue;const g=r[x+o],p=r[x-o];g===Ue&&m>32&&d?r[x]=I.SOUL_SAND:p===Ue&&m>84&&Zt(c*7+m,u*3,s+310)<.02?r[x]=I.GLOWSTONE:Zt(c*13+m,u*5-m,s+311)<.006&&(r[x]=I.GOLD_ORE)}}return this.chunks.set(i,r),this.computeTops(i,r),this.scanTorches(i,r),r}genEnd(t,e,i){const s=this.seed+9001,r=new Uint8Array(tt*tt*de),a=t*tt,l=e*tt;for(let o=0;o<tt;o++)for(let h=0;h<tt;h++){const f=a+h,c=l+o,u=Math.hypot(f,c);let d=-1,m=0;if(u<54)d=64+Math.floor(mi(f*.08,c*.08,s+700,2)*3)-(u>46?Math.floor(u-46):0),m=d-((54-u)*.75+3+mi(f*.05,c*.05,s+703,2)*5);else if(u>240){const x=mi(f*.011,c*.011,s+701,3);x>.63&&(d=58+Math.floor((x-.63)*60)+Math.floor(mi(f*.06,c*.06,s+702,2)*3),m=d-((x-.63)*230+2))}if(d>0)for(let x=Math.max(1,Math.floor(m));x<=d&&x<de;x++)r[this.idx(h,x,o)]=I.END_STONE}for(const o of Bh())for(let h=-2;h<=2;h++)for(let f=-2;f<=2;f++){if(h*h+f*f>5)continue;const c=o.x+h-a,u=o.z+f-l;if(!(c<0||u<0||c>=tt||u>=tt)){for(let d=62;d<=o.top;d++)r[this.idx(c,d,u)]=I.OBSIDIAN;h===0&&f===0&&(r[this.idx(c,o.top+1,u)]=I.BEDROCK)}}return this.chunks.set(i,r),this.computeTops(i,r),this.scanTorches(i,r),r}computeTops(t,e){let i=0;for(let r=e.length-1;r>=0;r--)if(e[r]){i=Math.floor(r/(tt*tt));break}this.hi||(this.hi=new Map),this.hi.set(t,i);const s=new Int16Array(tt*tt).fill(-1);for(let r=0;r<tt;r++)for(let a=0;a<tt;a++){let l=de-1;for(;l>=0&&!rn[e[this.idx(a,l,r)]];)l--;s[r*tt+a]=l}this.tops.set(t,s)}getBlock(t,e,i){if(e<0||e>=de)return Ue;const s=Math.floor(t/tt),r=Math.floor(i/tt),a=this.chunks.get(yi(s,r));return a?a[(e*tt+(i-r*tt))*tt+(t-s*tt)]:Ue}topY(t,e){const i=Math.floor(t/tt),s=Math.floor(e/tt),r=this.tops.get(yi(i,s));return r?r[(e-s*tt)*tt+(t-i*tt)]:-1}skyLit(t,e,i){if(this.dim!=="overworld")return 1;const s=Math.floor(t/tt),r=Math.floor(i/tt),a=this.tops.get(yi(s,r));return a?e>a[(i-r*tt)*tt+(t-s*tt)]?1:0:1}isSolid(t,e,i){if(e<0)return!0;if(e>=de)return!1;const s=Math.floor(t/tt),r=Math.floor(i/tt),a=this.chunks.get(yi(s,r));return a?Pr[a[(e*tt+(i-r*tt))*tt+(t-s*tt)]]===1:!0}isLiquid(t,e,i){return cn[this.getBlock(t,e,i)]===1}setBlock(t,e,i,s){if(e<0||e>=de)return!1;const r=Math.floor(t/tt),a=Math.floor(i/tt),l=yi(r,a),o=this.chunks.get(l);if(!o)return!1;const h=t-r*tt,f=i-a*tt,c=this.idx(h,e,f),u=o[c];if(o[c]=s,s&&e>this.hi.get(l)&&this.hi.set(l,e),this.modified.add(l),this.unsaved.add(l),Bo[u]||Bo[s]){this.scanTorches(l,o);for(let p=-1;p<=1;p++)for(let M=-1;M<=1;M++)this.dirty.add(yi(r+p,a+M))}const d=this.tops.get(l),m=f*tt+h;if(rn[s])e>d[m]&&(d[m]=e);else if(e===d[m]){let p=e-1;for(;p>=0&&!rn[o[this.idx(h,p,f)]];)p--;d[m]=p}this.dirty.add(l);const x=h===0?-1:h===tt-1?1:0,g=f===0?-1:f===tt-1?1:0;return x&&this.dirty.add(yi(r+x,a)),g&&this.dirty.add(yi(r,a+g)),x&&g&&this.dirty.add(yi(r+x,a+g)),!0}raycast(t,e,i=6,s=!1){let r=Math.floor(t.x),a=Math.floor(t.y),l=Math.floor(t.z);const o=[Math.sign(e.x),Math.sign(e.y),Math.sign(e.z)],h=[Math.abs(1/e.x),Math.abs(1/e.y),Math.abs(1/e.z)],f=(m,x)=>x>0?Math.floor(m)+1-m:m-Math.floor(m),c=[o[0]===0?1/0:f(t.x,o[0])*h[0],o[1]===0?1/0:f(t.y,o[1])*h[1],o[2]===0?1/0:f(t.z,o[2])*h[2]];let u=[0,0,0],d=0;for(;d<=i;){const m=this.getBlock(r,a,l);if(m!==Ue&&(s||!cn[m]&&!Ru[m]))return{x:r,y:a,z:l,id:m,normal:u,dist:d};const x=c[0]<c[1]?c[0]<c[2]?0:2:c[1]<c[2]?1:2;d=c[x],c[x]+=h[x],u=[0,0,0],u[x]=-o[x],x===0?r+=o[0]:x===1?a+=o[1]:l+=o[2]}return null}update(t,e,i,s=2){const r=Math.floor(t/tt),a=Math.floor(e/tt),l=[],o=[];for(let c=-i-1;c<=i+1;c++)for(let u=-i-1;u<=i+1;u++){const d=r+u,m=a+c,x=yi(d,m),g=u*u+c*c;if(!this.chunks.has(x))l.push({cx:d,cz:m,d:g});else if(Math.abs(u)<=i&&Math.abs(c)<=i){const p=this.dirty.has(x);(!this.meshes.has(x)||p)&&o.push({cx:d,cz:m,d:p?g-1e4:g})}}l.sort((c,u)=>c.d-u.d);for(let c=0;c<Math.min(s*2,l.length);c++)this.generateChunk(l[c].cx,l[c].cz);o.sort((c,u)=>c.d-u.d);let h=0,f=0;for(const c of o){let u=!0;for(let d=-1;d<=1&&u;d++)for(let m=-1;m<=1;m++)if(!this.chunks.has(yi(c.cx+d,c.cz+m))){u=!1;break}if(!u){f++;continue}h<(c.d<-5e3?6:s)?(this.buildMesh(c.cx,c.cz),h++):f++}for(const[c,u]of this.meshes)(Math.abs(xf(c)-r)>i+2||Math.abs(_f(c)-a)>i+2)&&(this.disposeMesh(u),this.meshes.delete(c));if((this.unloadT-=1)<=0){this.unloadT=60;for(const c of[...this.chunks.keys()])if(Math.abs(xf(c)-r)>i+5||Math.abs(_f(c)-a)>i+5){if(this.modified.has(c))continue;this.chunks.delete(c),this.tops.delete(c)}}return l.length+f}disposeMesh(t){for(const e of[t.opaque,t.trans])e&&(this.scene.remove(e),e.geometry.dispose())}buildMesh(t,e){const i=yi(t,e),s=this.chunks.get(i);if(!s)return;const r=t*tt,a=e*tt,l=[{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]},{pos:[],nor:[],uv:[],col:[],bl:[],sw:[],sk:[],ind:[]}],o=(S,v,R)=>{const U=S-r,N=R-a;return U>=0&&N>=0&&U<tt&&N<tt&&v>=0&&v<de?s[(v*tt+N)*tt+U]:this.getBlock(S,v,R)},h=new Float32Array(tt*tt*3);for(let S=0;S<tt;S++)for(let v=0;v<tt;v++){const R=r+v,U=a+S,N=mi(R*.004,U*.004,this.seed+900,2),H=mi(R*.0035,U*.0035,this.seed+500,2),$=Er(.35,.7,N),q=Er(.42,.28,H),Y=(S*tt+v)*3;h[Y]=(1.15*(1-$)+.78*$)*(1-.18*q),h[Y+1]=1*(1-$)+1.1*$,h[Y+2]=.6*(1-$)+.8*$+.3*q}const f=.0015,c=[0,0,0],u=[0,0,0,0],d=[0,0,0,0],m=[0,0,0,0],x=tt*3,g=r-tt,p=a-tt;let M=null;const y=[];for(let S=-1;S<=1;S++)for(let v=-1;v<=1;v++){const R=this.torches.get(yi(t+S,e+v));if(R)for(const U of R)y.push([(t+S)*tt+U%tt,Math.floor(U/(tt*tt)),(e+v)*tt+Math.floor(U/tt)%tt])}if(y.length){M=this._lm||(this._lm=new Uint8Array(x*x*de)),M.fill(0);const S=(U,N,H)=>(N*x+(H-p))*x+(U-g),v=[];for(const[U,N,H]of y)M[S(U,N,H)]=10,v.push(U,N,H);const R=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1];for(let U=0;U<v.length;U+=3){const N=v[U],H=v[U+1],$=v[U+2],q=M[S(N,H,$)]-1;if(!(q<=0))for(let Y=0;Y<18;Y+=3){const V=N+R[Y],it=H+R[Y+1],rt=$+R[Y+2];if(it<0||it>=de||V<g||V>=g+x||rt<p||rt>=p+x||rn[o(V,it,rt)])continue;const xt=S(V,it,rt);M[xt]<q&&(M[xt]=q,v.push(V,it,rt))}}}const _=(S,v,R)=>!M||v<0||v>=de||S<g||S>=g+x||R<p||R>=p+x?0:Math.pow(M[(v*x+(R-p))*x+(S-g)]/10,1.7),P=Math.min(de-1,(this.hi.get(i)||de)+1);for(let S=0;S<=P;S++)for(let v=0;v<tt;v++)for(let R=0;R<tt;R++){const U=s[(S*tt+v)*tt+R];if(U===Ue)continue;const N=Xe[U],H=N.transparent?l[1]:l[0],$=r+R,q=a+v;if(N.torch){const Y=(Sr.torch+.4375)/br,V=(Sr.torch+9/16)/br;for(const it of ih){if(it.bottom)continue;const rt=H.pos.length/3;for(const xt of it.corners)H.pos.push(R+7/16+xt.p[0]*2/16,S+xt.p[1]*10/16,v+7/16+xt.p[2]*2/16),H.nor.push(it.dir[0],it.dir[1],it.dir[2]),H.uv.push(Y+(V-Y)*xt.uv[0],6/16+10/16*xt.uv[1]),H.col.push(.9,.9,.9),H.bl.push(1),H.sw.push(0),H.sk.push(1);H.ind.push(rt,rt+1,rt+2,rt+2,rt+1,rt+3)}continue}for(const Y of ih){const V=$+Y.dir[0],it=S+Y.dir[1],rt=q+Y.dir[2],xt=o(V,it,rt);if(rn[xt]||xt===U&&(N.transparent||N.liquid))continue;const Wt=Sr[Y.top?N.tiles[0]:Y.bottom?N.tiles[1]:N.tiles[2]],[fe,j]=Y.tan;let ot=1,St=1,ft=1;if(U===I.LEAVES||U===I.GRASS&&Y.top){const kt=(v*tt+R)*3;ot=h[kt],St=h[kt+1],ft=h[kt+2]}const Pt=it<de?this.skyLit(V,it,rt):1,Ot=_(V,it,rt);for(let kt=0;kt<4;kt++){const Vt=Y.corners[kt].p,ye=Vt[fe]*2-1,z=Vt[j]*2-1;c[0]=V,c[1]=it,c[2]=rt,c[fe]+=ye;const Ye=rn[o(c[0],c[1],c[2])],Qt=Ye?Pt:this.skyLit(c[0],c[1],c[2]),te=Ye?Ot:_(c[0],c[1],c[2]);c[0]=V,c[1]=it,c[2]=rt,c[j]+=z;const Rt=rn[o(c[0],c[1],c[2])],we=Rt?Pt:this.skyLit(c[0],c[1],c[2]),Dt=Rt?Ot:_(c[0],c[1],c[2]);c[0]=V,c[1]=it,c[2]=rt,c[fe]+=ye,c[j]+=z;const A=rn[o(c[0],c[1],c[2])],b=Ye&&Rt||A?Pt:this.skyLit(c[0],c[1],c[2]),G=Ye&&Rt||A?Ot:_(c[0],c[1],c[2]);m[kt]=(Ot+te+Dt+G)/4,u[kt]=Ye&&Rt?0:3-(Ye+Rt+A),d[kt]=(Pt+Qt+we+b)/4}const Ut=H.pos.length/3;for(let kt=0;kt<4;kt++){const Vt=Y.corners[kt];let ye=Vt.p[1];(U===I.WATER||U===I.LAVA)&&ye===1&&o($,S+1,q)!==U&&(ye=.88),H.pos.push(R+Vt.p[0],S+ye,v+Vt.p[2]),H.nor.push(Y.dir[0],Y.dir[1],Y.dir[2]),H.uv.push((Wt+(Vt.uv[0]?1-f:f))/br,Vt.uv[1]?1-f:f);const z=Y.shade*vf[u[kt]]*(.3+.7*d[kt]);H.col.push(z*ot,z*St,z*ft),H.bl.push(N.glow?1:Y.shade*vf[u[kt]]*m[kt]),H.sw.push(U===I.LEAVES?1:U===I.WATER||U===I.LAVA?2:0),H.sk.push(d[kt])}u[0]+u[3]>u[1]+u[2]?H.ind.push(Ut,Ut+1,Ut+3,Ut,Ut+3,Ut+2):H.ind.push(Ut,Ut+1,Ut+2,Ut+2,Ut+1,Ut+3)}}const T=this.meshes.get(i);T&&this.disposeMesh(T);const w={opaque:null,trans:null},C=(S,v,R,U)=>{if(!S.ind.length)return null;const N=new qe;N.setAttribute("position",new be(S.pos,3)),N.setAttribute("normal",new be(S.nor,3)),N.setAttribute("uv",new be(S.uv,2)),N.setAttribute("color",new be(S.col,3)),N.setAttribute("blight",new be(S.bl,1)),N.setAttribute("sway",new be(S.sw,1)),N.setAttribute("skyl",new be(S.sk,1)),N.setIndex(S.ind),N.computeBoundingSphere();const H=new At(N,v);return H.position.set(r,0,a),H.renderOrder=R,H.castShadow=U,H.receiveShadow=!0,this.scene.add(H),H};w.opaque=C(l[0],this.materials.opaque,0,!0),w.trans=C(l[1],this.materials.trans,1,!1),this.meshes.set(i,w),this.dirty.delete(i),this.onChunkMeshed&&this.onChunkMeshed(t,e)}}const as=(n,t)=>new ui(t?{color:n,map:t}:{color:n});function Le(n,t,e,i,s,r,a,l){const o=new ve;o.position.set(r,a,l);const h=new At(new Jt(t,e,i),as(s));return h.position.y=-e/2,o.add(h),n.add(o),o}function nt(n,t,e,i,s,r,a,l,o){const h=new At(new Jt(t,e,i),as(s,o));return h.position.set(r,a,l),n.add(h),h}function j1(n){const t=document.createElement("canvas");t.width=t.height=8,n(t.getContext("2d"));const e=new Oi(t);return e.magFilter=pe,e.minFilter=pe,e.generateMipmaps=!1,e}const $s={pig:{hw:.4,h:.9,hp:10,speed:1.4,hostile:!1,name:"Cerdo",build(n,t){nt(n,.6,.5,.95,15769768,0,.62,0),t.head=nt(n,.5,.45,.45,16034480,0,.78,.65),nt(n,.26,.2,.1,14189196,0,.72,.92),t.legs=[[-.18,.5],[.18,.5],[-.18,-.5],[.18,-.5]].map(([e,i])=>Le(n,.2,.37,.2,15242140,e,.37,i))},drops:()=>[[D.PORK,1+Math.floor(Math.random()*2)]]},cow:{hw:.45,h:1.4,hp:10,speed:1.2,hostile:!1,name:"Vaca",build(n,t){nt(n,.75,.7,1.2,4863268,0,.95,0),nt(n,.77,.3,.5,15658734,0,.95,-.15),t.head=nt(n,.5,.5,.45,4863268,0,1.15,.8),nt(n,.3,.2,.1,14272688,0,1.05,1.05),nt(n,.08,.15,.08,14540253,-.22,1.45,.75),nt(n,.08,.15,.08,14540253,.22,1.45,.75),t.legs=[[-.22,.45],[.22,.45],[-.22,-.45],[.22,-.45]].map(([e,i])=>Le(n,.24,.6,.24,4008990,e,.6,i))},drops:()=>[[D.BEEF,1+Math.floor(Math.random()*3)]]},sheep:{hw:.42,h:1.2,hp:8,speed:1.2,hostile:!1,name:"Oveja",xp:1,build(n,t){nt(n,.85,.75,1.15,15658734,0,.9,0),t.head=nt(n,.4,.42,.42,9076080,0,1.05,.72),t.legs=[[-.2,.4],[.2,.4],[-.2,-.4],[.2,-.4]].map(([e,i])=>Le(n,.2,.5,.2,9076080,e,.5,i))},drops:()=>[[D.BEEF,1+Math.floor(Math.random()*2)]]},chicken:{hw:.22,h:.7,hp:4,speed:1.3,hostile:!1,name:"Gallina",xp:1,build(n,t){nt(n,.34,.34,.5,16053492,0,.42,0),t.head=nt(n,.2,.26,.2,16316664,0,.68,.24),nt(n,.1,.07,.12,15769632,0,.64,.38),nt(n,.06,.1,.06,13639712,0,.55,.33),nt(n,.06,.26,.4,15263976,-.2,.44,0),nt(n,.06,.26,.4,15263976,.2,.44,0),t.legs=[-.08,.08].map(e=>Le(n,.05,.25,.05,15769632,e,.25,0))},drops:()=>[[D.CHICKEN,1]]},skeleton:{hw:.3,h:1.9,hp:20,speed:2.2,hostile:!0,name:"Esqueleto",ranged:!0,xp:5,build(n,t){t.legs=[Le(n,.18,.85,.18,14211276,-.12,.85,0),Le(n,.18,.85,.18,14211276,.12,.85,0)],nt(n,.5,.8,.2,14211276,0,1.25,0);for(const s of[1,1.2,1.4])nt(n,.52,.07,.22,5592396,0,s,0);t.arms=[Le(n,.14,.75,.14,14211276,-.34,1.62,0),Le(n,.14,.75,.14,14211276,.34,1.62,0)],t.arms[1].rotation.x=-1.3,t.arms[0].rotation.x=-1.3,t.head=nt(n,.5,.5,.5,14211276,0,1.9,0),nt(n,.1,.1,.02,1052688,-.12,1.93,.26),nt(n,.1,.1,.02,1052688,.12,1.93,.26),nt(n,.2,.05,.02,1052688,0,1.78,.26),nt(n,.06,.5,.2,6965800,.42,1.28,.28)},drops:()=>Math.random()<.6?[[D.COAL,1]]:[[D.STICK,2]]},spider:{hw:.55,h:.75,hp:16,speed:4.2,hostile:!0,name:"Araña",xp:4,build(n,t){nt(n,.7,.5,.7,2761760,0,.5,.3),nt(n,.9,.6,1.1,3353124,0,.55,-.55),t.head=nt(n,.5,.45,.45,2761760,0,.5,.8);for(const i of[-.12,.12])nt(n,.1,.1,.03,13637656,i,.58,1.04),nt(n,.06,.06,.03,13637656,i*1.8,.5,1.04);t.legs=[];for(let i=0;i<4;i++)for(const s of[-1,1]){const r=nt(n,.9,.08,.08,2761760,s*.62,.38,.55-i*.38);r.rotation.z=s*-.55,r.rotation.y=s*(i-1.5)*.25}},drops:()=>Math.random()<.5?[[D.STICK,1]]:[]},enderman:{hw:.3,h:2.9,hp:40,speed:5,hostile:!1,name:"Enderman",xp:8,enderman:!0,build(n,t){t.legs=[Le(n,.18,1.5,.18,1182232,-.12,1.5,0),Le(n,.18,1.5,.18,1182232,.12,1.5,0)],nt(n,.5,.95,.26,1182232,0,1.98,0),t.arms=[Le(n,.13,1.35,.13,1182232,-.34,2.45,0),Le(n,.13,1.35,.13,1182232,.34,2.45,0)],t.head=nt(n,.5,.42,.5,1182232,0,2.7,0);for(const i of[-.13,.13])nt(n,.14,.05,.03,14708991,i,2.72,.26)},drops:()=>Math.random()<.65?[[D.PEARL,1]]:[]},slime:{hw:.42,h:.85,hp:8,speed:0,hostile:!0,name:"Slime",hopper:!0,xp:2,build(n,t){const e=new ui({color:6348896,emissive:1064976,transparent:!0,opacity:.8}),i=new At(new Jt(.84,.84,.84),e);i.position.y=.42,n.add(i),nt(n,.4,.4,.4,3119663,0,.42,0),nt(n,.14,.14,.05,1060880,-.2,.55,.43),nt(n,.14,.14,.05,1060880,.2,.55,.43)},drops:()=>[]},piglin:{hw:.3,h:1.8,hp:24,speed:2.7,hostile:!0,name:"Piglin zombificado",damage:5,xp:6,piglin:!0,build(n,t){t.legs=[Le(n,.26,.75,.26,5917240,-.14,.75,0),Le(n,.26,.75,.26,5917240,.14,.75,0)],nt(n,.56,.75,.3,8022608,0,1.125,0),nt(n,.58,.14,.32,15253568,0,1.45,0),t.arms=[Le(n,.22,.72,.22,13208184,-.38,1.45,0),Le(n,.22,.72,.22,13208184,.38,1.45,0)],t.arms.forEach(s=>s.rotation.x=-Math.PI/2.3),nt(n,.1,.55,.1,15253568,.4,1,.45),t.head=nt(n,.6,.5,.5,13208184,0,1.78,0),nt(n,.34,.22,.12,11563103,0,1.72,.3),nt(n,.06,.08,.04,2101264,-.07,1.72,.37),nt(n,.06,.08,.04,2101264,.07,1.72,.37),nt(n,.12,.28,.06,13208184,-.37,1.8,0).rotation.z=.5,nt(n,.12,.28,.06,13208184,.37,1.8,0).rotation.z=-.5,nt(n,.08,.06,.03,16724e3,-.14,1.88,.26),nt(n,.08,.06,.03,16724e3,.14,1.88,.26)},drops:()=>Math.random()<.6?[[D.GOLD,1]]:[]},blaze:{hw:.35,h:1.7,hp:20,speed:2.4,hostile:!0,name:"Blaze",fly:!0,ranged:!1,xp:7,build(n,t){const e=new ui({color:15773728,emissive:10506240}),i=new ui({color:16742928,emissive:12595200});t.head=new At(new Jt(.55,.55,.55),e),t.head.position.y=1.4,n.add(t.head);for(const s of[-.13,.13])nt(n,.12,.1,.03,2101248,s,1.45,.29);nt(n,.22,.06,.03,2101248,0,1.28,.29),t.rods=[];for(let s=0;s<3;s++){const r=new ve;r.position.y=.35+s*.38,n.add(r);for(let a=0;a<4;a++){const l=a/4*Math.PI*2,o=new At(new Jt(.12,.5,.12),s%2?i:e);o.position.set(Math.cos(l)*.5,0,Math.sin(l)*.5),r.add(o)}t.rods.push(r)}nt(n,.2,.25,.2,16752672,0,.9,0)},drops:()=>Math.random()<.8?[[D.COAL,1+Math.floor(Math.random()*2)]]:[]},magmacube:{hw:.5,h:1,hp:18,speed:0,hostile:!0,name:"Cubo de magma",hopper:!0,xp:5,build(n,t){const e=new ui({color:11547664,emissive:8003584}),i=new Me({color:16752672}),s=new At(new Jt(1,1,1),e);s.position.y=.5,n.add(s);for(const[r,a,l]of[[0,.7,.51],[.3,.3,.51],[-.3,.45,.51],[.51,.5,.2],[-.51,.5,-.1]])nt(n,.3,.12,.05,16752672,r,a,l);nt(n,.15,.12,.04,2101248,-.22,.65,.52),nt(n,.15,.12,.04,2101248,.22,.65,.52),nt(n,.4,.1,.04,i,0,.35,.52)},drops:()=>Math.random()<.6?[[D.COAL,1]]:[]},witherskeleton:{hw:.35,h:2.4,hp:30,speed:2.9,hostile:!0,name:"Esqueleto Wither",damage:6,reach:1.7,effect:["poison",5],xp:9,build(n,t){t.legs=[Le(n,.2,1.1,.2,2302755,-.14,1.1,0),Le(n,.2,1.1,.2,2302755,.14,1.1,0)],nt(n,.56,.95,.24,2302755,0,1.6,0);for(const s of[1.3,1.55,1.8])nt(n,.58,.07,.26,921102,0,s,0);t.arms=[Le(n,.16,1,.16,2302755,-.38,2.05,0),Le(n,.16,1,.16,2302755,.38,2.05,0)],t.arms[0].rotation.x=t.arms[1].rotation.x=-1.2,nt(n,.1,.7,.06,3815994,.45,1.5,.5),nt(n,.3,.06,.06,3815994,.45,1.85,.5),t.head=nt(n,.58,.58,.58,2302755,0,2.2,0),nt(n,.12,.1,.02,12632256,-.14,2.25,.3),nt(n,.12,.1,.02,12632256,.14,2.25,.3),nt(n,.24,.05,.02,328965,0,2.05,.3)},drops:()=>[[D.COAL,1+Math.floor(Math.random()*2)]]},ghast:{hw:1.2,h:2.6,hp:14,speed:1.6,hostile:!0,name:"Ghast",fly:!0,flyKind:"ghast",xp:10,build(n,t){as(16053492),nt(n,2.4,2.4,2.4,16053492,0,1.4,0),t.eyeL=nt(n,.6,.15,.05,4208696,-.5,1.6,1.22),t.eyeR=nt(n,.6,.15,.05,4208696,.5,1.6,1.22),nt(n,.4,.2,.05,4208696,0,.95,1.22);for(const e of[-.8,0,.8])for(const i of[-.8,0,.8])nt(n,.3,1.4+Math.abs(e*i),.3,14474460,e,.1,i)},drops:()=>[[D.COAL,1+Math.floor(Math.random()*2)],...Math.random()<.4?[[D.GOLD,1]]:[]]},hoglin:{hw:.6,h:1.5,hp:32,speed:3.2,hostile:!0,name:"Hoglin",damage:7,reach:1.9,xp:8,build(n,t){nt(n,1,.95,1.5,9067066,0,1,0),nt(n,.7,.4,.9,5913128,0,1.55,-.1),t.head=nt(n,.85,.75,.8,10119754,0,.95,1),nt(n,.5,.35,.3,12618346,0,.8,1.45);for(const e of[-.3,.3])nt(n,.1,.35,.1,15788240,e,1.15,1.5).rotation.x=-.4,nt(n,.14,.12,.04,1052688,e*.9,1.12,1.42),nt(n,.2,.28,.12,8014384,e*1.7,1.3,.85).rotation.z=e*1.5;t.legs=[[-.35,.55],[.35,.55],[-.35,-.55],[.35,-.55]].map(([e,i])=>Le(n,.3,.55,.3,6963240,e,.55,i))},drops:()=>[[D.PORK,2+Math.floor(Math.random()*3)]]},shulker:{hw:.5,h:1,hp:22,speed:0,hostile:!0,name:"Shulker",static:!0,shulker:!0,xp:8,build(n,t){nt(n,1,.5,1,8014474,0,.25,0),t.lid=new ve,t.lid.position.set(0,.5,-.5),n.add(t.lid);const e=as(10316974),i=new At(new Jt(1,.5,1),e);i.position.set(0,.25,.5),t.lid.add(i),t.eye=nt(n,.3,.3,.3,15790240,0,.55,0),t.eye.material.emissive=new yt(7368768)},drops:()=>Math.random()<.35?[[D.PEARL,1]]:[]},endermite:{hw:.22,h:.35,hp:8,speed:4.6,hostile:!0,name:"Endermite",damage:2,reach:.9,xp:3,build(n,t){nt(n,.32,.26,.26,5909114,0,.14,.2),nt(n,.4,.3,.3,6961802,0,.16,-.05),nt(n,.26,.22,.26,4857960,0,.12,-.3),nt(n,.06,.06,.03,14708991,-.07,.2,.34),nt(n,.06,.06,.03,14708991,.07,.2,.34)},drops:()=>[]},phantom:{hw:.6,h:.6,hp:18,speed:3,hostile:!0,name:"Phantom",fly:!0,flyKind:"phantom",xp:7,build(n,t){nt(n,.5,.35,1.1,4083590,0,.3,0),nt(n,.3,.2,.3,4083590,0,.3,.7),nt(n,.12,.1,.04,7405424,-.12,.34,.86),nt(n,.12,.1,.04,7405424,.12,.34,.86),t.wings=[-1,1].map(i=>{const s=new ve;s.position.set(i*.25,.4,.1),n.add(s);const r=new At(new Jt(1.5,.06,.8),as(3227758));return r.position.x=i*.75,s.add(r),{g:s,s:i}}),nt(n,.2,.15,.9,4083590,0,.28,-.9)},drops:()=>[]},zombie:{hw:.3,h:1.8,hp:20,speed:2.5,hostile:!0,name:"Zombi",damage:3,build(n,t){t.legs=[Le(n,.26,.75,.26,2899612,-.14,.75,0),Le(n,.26,.75,.26,2899612,.14,.75,0)],nt(n,.54,.75,.28,2794936,0,1.125,0),t.arms=[Le(n,.22,.72,.22,5147194,-.38,1.45,0),Le(n,.22,.72,.22,5147194,.38,1.45,0)],t.arms.forEach(e=>e.rotation.x=-Math.PI/2.2),t.head=nt(n,.5,.5,.5,5147194,0,1.75,0),nt(n,.1,.07,.02,1052688,-.12,1.78,.26),nt(n,.1,.07,.02,1052688,.12,1.78,.26)},drops:()=>Math.random()<.15?[[D.IRON,1]]:[]},creeper:{hw:.3,h:1.7,hp:20,speed:2.3,hostile:!0,name:"Creeper",creeper:!0,build(n,t){t.legs=[[-.14,.28],[.14,.28],[-.14,-.28],[.14,-.28]].map(([l,o])=>Le(n,.26,.45,.26,4099646,l,.45,o*.5)),t.body=nt(n,.5,.85,.3,5154894,0,.88,0);const i=j1(l=>{l.fillStyle="#4ea84e",l.fillRect(0,0,8,8),l.fillStyle="#0c1a0c",l.fillRect(1,2,2,2),l.fillRect(5,2,2,2),l.fillRect(3,4,2,2),l.fillRect(2,5,1,2),l.fillRect(5,5,1,2)}),s=as(5154894),r=[s,s,s,s,as(16777215,i),s],a=new At(new Jt(.5,.5,.5),r);a.position.set(0,1.55,0),n.add(a),t.head=a},drops:()=>[]}},yf=["zombie","zombie","zombie","creeper","creeper","skeleton","skeleton","skeleton","spider","spider","enderman"],Sf=["zombie","zombie","creeper","skeleton","skeleton","spider"];class Z1{constructor(t,e,i,s,r){this.type=t,this.def=$s[t],this.pos=new L(e,i,s),this.vel=new L,this.hw=this.def.hw,this.h=this.def.h,this.hp=this.def.hp,this.yaw=Math.random()*Math.PI*2,this.group=new ve,this.parts={},this.def.build(this.group,this.parts),this.model=new ve,this.model.add(this.group),r.add(this.model),this.group.traverse(a=>{a.isMesh&&(a.castShadow=!0,a.receiveShadow=!0)}),this.wanderT=0,this.wanderDir=0,this.moving=!1,this.cool=0,this.flash=0,this.fuse=0,this.walkT=0,this.age=0,this.onGround=!1,this.sound=3+Math.random()*10}materials(){const t=[];return this.group.traverse(e=>{e.material&&(Array.isArray(e.material)?t.push(...e.material):t.push(e.material))}),t}hit(t,e,i){this.def.shulker&&(this.lid||0)<.4&&(t*=.3),this.hp-=t,this.flash=.3,this.provoked=!0,this.aggro=!0;const s=this.pos.x-e,r=this.pos.z-i,a=Math.hypot(s,r)||1;this.vel.x=s/a*6,this.vel.z=r/a*6,this.vel.y=5}dispose(t){t.remove(this.model),this.group.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&[].concat(e.material).forEach(i=>i.dispose())})}}function Dr(n,t,e,i){let s=0,r=1/0;for(const a of["x","y","z"]){if(Math.abs(t[a])<1e-9){if(n[a]<e[a]||n[a]>i[a])return-1;continue}let l=(e[a]-n[a])/t[a],o=(i[a]-n[a])/t[a];if(l>o&&([l,o]=[o,l]),s=Math.max(s,l),r=Math.min(r,o),s>r)return-1}return s}class J1{constructor(t,e,i){this.scene=t,this.world=e,this.hooks=i,this.list=[],this.spawnT=0,this.arrows=[],this.dim="overworld"}add(t,e,i,s){const r=new Z1(t,e,i,s,this.scene);return this.list.push(r),r}clear(){for(const t of this.list)t.dispose(this.scene);this.list=[];for(const t of this.arrows)this.scene.remove(t.mesh);this.arrows=[]}raycast(t,e,i){let s=null;for(const r of this.list){const a=Dr(t,e,{x:r.pos.x-r.hw,y:r.pos.y,z:r.pos.z-r.hw},{x:r.pos.x+r.hw,y:r.pos.y+r.h,z:r.pos.z+r.hw});a>=0&&a<=i&&(!s||a<s.dist)&&(s={mob:r,dist:a})}return s}damage(t,e,i,s){t.hit(e,i,s),this.hooks.sound("hit"),t.hp<=0&&this.kill(t)}kill(t){for(const[e,i]of t.def.drops())this.hooks.drop(t.pos.x,t.pos.y+.5,t.pos.z,e,i);this.hooks.killed&&this.hooks.killed(t.type,t.def.xp||2),this.hooks.puff(t.pos.x,t.pos.y+t.h/2,t.pos.z),t.dispose(this.scene),this.list.splice(this.list.indexOf(t),1)}update(t,e,i,s,r){const a=this.world;for(let l=this.list.length-1;l>=0;l--){const o=this.list[l];o.age+=t,o.cool=Math.max(0,o.cool-t),o.flash=Math.max(0,o.flash-t);const h=e.pos.x-o.pos.x,f=e.pos.z-o.pos.z,c=Math.hypot(h,f),u=e.pos.y-o.pos.y;let d=o.def.hostile&&i==="survival"&&!e.dead;if(o.type==="spider"&&s>.5&&!o.provoked&&(d=!1),o.def.enderman&&i==="survival"&&!e.dead&&!o.aggro&&c<24){const w=e.lookDir(),C=o.pos.x-e.pos.x,S=o.pos.y+2.6-(e.pos.y+1.62),v=o.pos.z-e.pos.z,R=Math.hypot(C,S,v);(w.x*C+w.y*S+w.z*v)/R>.985&&(o.aggro=!0)}o.def.enderman&&o.aggro&&i==="survival"&&!e.dead&&(d=!0);let m=null,x=o.def.speed;o.type==="hoglin"&&d&&c<10&&(x*=1.9),o.def.static&&(d=d&&!0),d&&c<26&&Math.abs(u)<14?(m=Math.atan2(-h,-f),o.def.ranged&&c<6&&(m+=Math.PI)):(o.wanderT-=t,o.wanderT<=0&&(o.wanderT=2+Math.random()*4,o.wanderDir=Math.random()<.4?null:Math.random()*Math.PI*2),o.wanderDir!==null&&o.wanderDir!==void 0&&(m=o.wanderDir),x*=.6);let g=!1;const p=o.def.ranged&&d&&c>=6&&c<12;if(m!==null){let w=m-o.yaw;if(w=Math.atan2(Math.sin(w),Math.cos(w)),o.yaw+=Math.max(-8*t,Math.min(8*t,w)),g=!p,p){const C=Math.atan2(-h,-f)-o.yaw;o.yaw+=Math.atan2(Math.sin(C),Math.cos(C))*Math.min(1,t*10)}}if(o.def.creeper){d&&c<3&&Math.abs(u)<2?(o.fuse+=t,o.fuse-t<=0&&this.hooks.sound("hiss"),g=!1):o.fuse=Math.max(0,o.fuse-t*2);const w=1+(o.fuse>0?Math.sin(o.fuse*30)*.04+o.fuse*.15:0);if(o.group.scale.set(w,w,w),o.fuse>=1.5){this.hooks.explode(o.pos.x,o.pos.y+.8,o.pos.z,3.2),o.dispose(this.scene),this.list.splice(l,1);continue}}const M=a.isLiquid(Math.floor(o.pos.x),Math.floor(o.pos.y+.2),Math.floor(o.pos.z)),y=-Math.sin(o.yaw),_=-Math.cos(o.yaw);if(g&&o.knock===void 0?(o.vel.x+=(y*x-o.vel.x)*Math.min(1,t*8),o.vel.z+=(_*x-o.vel.z)*Math.min(1,t*8)):(!o.def.hopper||o.onGround)&&(o.vel.x*=Math.max(0,1-t*6),o.vel.z*=Math.max(0,1-t*6)),o.def.hopper&&(g=!1,o.hopT=(o.hopT===void 0?.5:o.hopT)-t,o.onGround&&o.hopT<=0&&d&&(o.hopT=1+Math.random()*.8,o.vel.y=7.5,o.vel.x=h/(c||1)*3.4,o.vel.z=f/(c||1)*3.4,o.yaw=Math.atan2(-h,-f))),o.moving=g,M&&(o.vel.y=Math.max(o.vel.y,0)+14*t,o.vel.y=Math.min(o.vel.y,2.5)),o.def.fly)this.flyMob(o,t,e,d,h,f,u,c),o.onGround=!1;else{const w=ds(a,o,t);o.onGround=w.onGround,(w.hitX||w.hitZ)&&w.onGround&&g&&(o.vel.y=7.4)}if((o.type==="zombie"||o.type==="piglin"||o.type==="witherskeleton"||o.type==="hoglin"||o.type==="endermite")&&d&&c<(o.def.reach||1.2)&&Math.abs(u)<1.8&&o.cool<=0&&(o.cool=o.type==="endermite"?.8:1,this.hooks.hurtPlayer(o.def.damage,h/(c||1)*(o.type==="hoglin"?9:5),f/(c||1)*(o.type==="hoglin"?9:5)),o.def.effect&&this.hooks.effect(o.def.effect[0],o.def.effect[1])),(o.type==="spider"||o.def.hopper||o.def.enderman)&&d&&c<(o.type==="spider"?1.7:o.def.hopper?1.3:1.5)&&Math.abs(u)<1.8&&o.cool<=0&&(o.cool=o.type==="spider"?.9:1,this.hooks.hurtPlayer(o.type==="spider"||o.type==="slime"?2:o.type==="magmacube"?3:6,h/(c||1)*4,f/(c||1)*4),o.type==="magmacube"&&this.hooks.effect("burn",3)),o.def.shulker){o.lid=o.lid===void 0?0:o.lid;const w=d&&c<18?1:0;o.lid+=(w-o.lid)*Math.min(1,t*4),o.parts.lid.rotation.x=-o.lid*1.1,w&&o.lid>.8&&o.cool<=0&&!e.dead&&(o.cool=3.2,this.shootArrow(new L(o.pos.x,o.pos.y+.7,o.pos.z),new L(h,u+.9,f).normalize(),!1,"bullet")),o.vel.x=o.vel.z=0}if(o.def.ranged&&d&&c<22&&o.cool<=0){const w=new L(o.pos.x,o.pos.y+1.6,o.pos.z),C=new L(e.pos.x,e.pos.y+1.2,e.pos.z),S=C.clone().sub(w),v=S.length();S.normalize(),a.raycast(w,S,v)||(o.cool=2.2,this.shootArrow(w,S.multiplyScalar(1).setY(S.y+.04*v/10)))}if(o.def.enderman&&o.aggro&&(o.tpT=(o.tpT===void 0?4:o.tpT)-t,o.tpT<=0&&c>3)){o.tpT=5+Math.random()*3;const w=Math.random()*Math.PI*2,C=4+Math.random()*5,S=Math.floor(e.pos.x+Math.cos(w)*C),v=Math.floor(e.pos.z+Math.sin(w)*C),R=a.topY(S,v);R>0&&!a.isSolid(S,R+1,v)&&(this.hooks.tp(o.pos.x,o.pos.y+1,o.pos.z),o.pos.set(S+.5,R+1,v+.5),o.vel.set(0,0,0),this.hooks.tp(o.pos.x,o.pos.y+1,o.pos.z))}if(o.type==="chicken"&&o.vel.y<-2&&(o.vel.y=-2),(o.type==="zombie"||o.type==="skeleton")&&s>.75&&a.skyLit(Math.floor(o.pos.x),Math.floor(o.pos.y+1),Math.floor(o.pos.z))&&!M&&(o.burn=(o.burn||0)+t,o.burn>1&&(o.burn=0,o.hit(2,o.pos.x,o.pos.z),o.vel.set(0,0,0),o.hp<=0))){this.kill(o);continue}o.sound-=t,o.sound<=0&&(o.sound=6+Math.random()*12,c<16&&this.hooks.sound(o.type==="pig"?"oink":o.type==="cow"||o.type==="sheep"?"moo":o.type==="chicken"?"pop":o.type==="zombie"||o.type==="skeleton"||o.type==="spider"?"groan":"")),o.parts.rods&&o.parts.rods.forEach((w,C)=>w.rotation.y+=t*(2+C)),o.walkT+=t*(g?9:0);const P=g?Math.sin(o.walkT)*.7:0;o.parts.legs&&o.parts.legs.forEach((w,C)=>w.rotation.x=C%2?-P:P),o.model.position.copy(o.pos),o.model.rotation.y=o.yaw+Math.PI;const T=o.flash>0||o.fuse>0&&Math.floor(o.fuse*8)%2===0;for(const w of o.materials())w.emissive&&w.emissive.setRGB(T?o.fuse>0?.8:.5:0,T&&o.fuse>0?.8:0,T&&o.fuse>0?.8:0);(c>r*16+24||o.pos.y<-20)&&(o.dispose(this.scene),this.list.splice(l,1))}for(let l=this.arrows.length-1;l>=0;l--){const o=this.arrows[l];if(o.life-=t,o.vel.y-=(o.fire||o.bullet?0:7)*t,o.bullet){const u=new L(e.pos.x,e.pos.y+1,e.pos.z).sub(o.mesh.position).normalize().multiplyScalar(5);o.vel.lerp(u,Math.min(1,t*2.2))}o.mesh.position.addScaledVector(o.vel,t),o.mesh.lookAt(o.mesh.position.clone().add(o.vel));const h=o.mesh.position,f=Math.hypot(h.x-e.pos.x,h.y-(e.pos.y+.9),h.z-e.pos.z)<.75,c=f||o.life<=0||a.isSolid(Math.floor(h.x),Math.floor(h.y),Math.floor(h.z));o.big&&c?(this.hooks.explode(h.x,h.y,h.z,2.6,.4),Math.hypot(h.x-e.pos.x,h.y-e.pos.y,h.z-e.pos.z)<4.5&&this.hooks.effect("burn",4)):f&&!e.dead&&(this.hooks.hurtPlayer(o.bullet||o.fire?3:4,o.vel.x*.25,o.vel.z*.25),o.fire&&this.hooks.effect("burn",4),o.bullet&&this.hooks.effect("levitate",5)),c&&(this.scene.remove(o.mesh),this.arrows.splice(l,1))}this.spawnT-=t,this.spawnT<=0&&(this.spawnT=1.5,this.trySpawn(e,i,s))}flyMob(t,e,i,s,r,a,l,o){const h=t.def.flyKind;if(h==="ghast"||h==="phantom")return this.flyMob2(t,e,i,s,r,a,l,o,h);const f=this.world;let c=0,u=0;s&&o>12?(c=r/(o||1),u=a/(o||1)):s&&o<6&&(c=-r/(o||1),u=-a/(o||1));const d=s?i.pos.y+3+Math.sin(t.age*1.4)*.8:t.pos.y+Math.sin(t.age)*.4;t.vel.x+=(c*t.def.speed-t.vel.x)*Math.min(1,e*3),t.vel.z+=(u*t.def.speed-t.vel.z)*Math.min(1,e*3),t.vel.y+=((d-t.pos.y)*1.2-t.vel.y)*Math.min(1,e*3);const m=t.pos.x+t.vel.x*e,x=t.pos.y+t.vel.y*e,g=t.pos.z+t.vel.z*e;if(f.isSolid(Math.floor(m),Math.floor(x+1),Math.floor(g))||t.pos.set(m,x,g),s)if(t.yaw=Math.atan2(-r,-a),t.burst=t.burst||0,t.burst>0){if(t.burstT-=e,t.burstT<=0){t.burst--,t.burstT=.28;const p=new L(t.pos.x,t.pos.y+1.4,t.pos.z),M=new L(i.pos.x,i.pos.y+1,i.pos.z),y=M.sub(p).normalize();this.shootArrow(p,y,!0)}}else t.cool<=0&&o<26&&!f.raycast(new L(t.pos.x,t.pos.y+1.4,t.pos.z),new L(r,l,a).normalize(),o)&&(t.cool=4,t.burst=3,t.burstT=0,this.hooks.sound("hiss"))}flyMob2(t,e,i,s,r,a,l,o,h){const f=this.world;let c,u,d;const m=(M,y,_,P)=>{t.vel.x+=(M-t.vel.x)*Math.min(1,e*P),t.vel.y+=(y-t.vel.y)*Math.min(1,e*P),t.vel.z+=(_-t.vel.z)*Math.min(1,e*P)};if(h==="ghast"){if(c=d=0,s&&o>21?(c=r/o,d=a/o):s&&o<12&&(c=-r/o,d=-a/o),u=s?i.pos.y+7+Math.sin(t.age)*1.2:t.pos.y,m(c*t.def.speed,(u-t.pos.y)*.8,d*t.def.speed,2),s)if(t.yaw=Math.atan2(-r,-a),t.tele>0){if(t.tele-=e,t.flash=.12,t.tele<=0){const y=new L(t.pos.x,t.pos.y+1.4,t.pos.z),_=new L(i.pos.x+i.vel.x*.4,i.pos.y+1,i.pos.z+i.vel.z*.4).sub(y).normalize();this.shootArrow(y,_,!0,"big")}}else t.cool<=0&&o<42&&!f.raycast(new L(t.pos.x,t.pos.y+1.4,t.pos.z),new L(r,l,a).normalize(),o)&&(t.cool=4.8,t.tele=.9,this.hooks.sound("hiss"))}else{if(!s)m(Math.cos(t.age)*1.5,Math.sin(t.age*.7)*.5,Math.sin(t.age)*1.5,2);else{if(t.swoop=t.swoop===void 0?3:t.swoop-e,!t.diving&&t.swoop<=0&&(t.diving=!0,t.diveT=1.9,t.swoop=4+Math.random()*3),t.diving){const M=new L(i.pos.x-t.pos.x,i.pos.y+1-t.pos.y,i.pos.z-t.pos.z),y=M.length()||1;m(M.x/y*11,M.y/y*11,M.z/y*11,6),t.diveT-=e,y<1.7&&t.cool<=0&&!i.dead&&(t.cool=1.2,this.hooks.hurtPlayer(4,M.x*1.5,M.z*1.5),t.diving=!1),t.diveT<=0&&(t.diving=!1)}else{const M=t.age*.9;c=i.pos.x+Math.cos(M)*9,d=i.pos.z+Math.sin(M)*9,u=i.pos.y+8,m((c-t.pos.x)*.7,(u-t.pos.y)*.9,(d-t.pos.z)*.7,2)}t.yaw=Math.atan2(-t.vel.x,-t.vel.z)}t.parts.wings&&t.parts.wings.forEach(M=>M.g.rotation.z=M.s*Math.sin(t.age*9)*.5)}const x=t.pos.x+t.vel.x*e,g=t.pos.y+t.vel.y*e,p=t.pos.z+t.vel.z*e;f.isSolid(Math.floor(x),Math.floor(g+.5),Math.floor(p))?(t.vel.x*=-.3,t.vel.z*=-.3,t.diving=!1):t.pos.set(x,g,p)}shootArrow(t,e,i=!1,s=null){const r=s==="big",a=s==="bullet",l=a?new At(new Jt(.34,.34,.34),new Me({color:16052384})):i?new At(new Jt(r?1.1:.4,r?1.1:.4,r?1.1:.4),new Me({color:r?16765040:16747040})):new At(new Jt(.07,.07,.8),new ui({color:9071162,emissive:2102280}));l.position.copy(t),this.scene.add(l),this.arrows.push({mesh:l,vel:e.normalize().multiplyScalar(a?5:r?12:i?15:22),life:a?8:i?7:4,fire:i,big:r,bullet:a}),this.hooks.sound("shoot",.5)}trySpawnDim(t,e){if(e!=="survival")return;const i=this.world;if(this.list.length>=(this.dim==="nether"?14:10))return;const r=Math.random()*Math.PI*2,a=14+Math.random()*18,l=Math.floor(t.pos.x+Math.cos(r)*a),o=Math.floor(t.pos.z+Math.sin(r)*a);for(let h=Math.min(de-6,Math.floor(t.pos.y)+22);h>4;h--)if(i.isSolid(l,h-1,o)&&!i.isLiquid(l,h-1,o)&&!i.isSolid(l,h,o)&&!i.isSolid(l,h+1,o)&&!i.isLiquid(l,h,o)){const f=Math.random();if(this.dim==="nether"){const c=f<.26?"piglin":f<.4?"blaze":f<.58?"magmacube":f<.72?"witherskeleton":f<.86?"hoglin":"ghast";this.add(c,l+.5,c==="blaze"?h+2:c==="ghast"?h+8:h,o+.5)}else{const c=f<.34?"enderman":f<.58?"shulker":f<.78?"endermite":"phantom";this.add(c,l+.5,c==="phantom"?h+8:h,o+.5)}return}}trySpawn(t,e,i){if(this.dim!=="overworld")return this.trySpawnDim(t,e);const s=this.world,r=this.list.filter(o=>!o.def.hostile).length,a=this.list.length-r,l=(o,h)=>{const f=Math.random()*Math.PI*2,c=o+Math.random()*(h-o),u=Math.floor(t.pos.x+Math.cos(f)*c),d=Math.floor(t.pos.z+Math.sin(f)*c);return[u,d]};if(r<10&&i>.45){const[o,h]=l(16,40),f=s.topY(o,h);if(f>0){const c=s.getBlock(o,f,h);(c===I.GRASS||c===I.SNOW)&&!s.isSolid(o,f+1,h)&&!s.isLiquid(o,f+1,h)&&this.add(["pig","cow","sheep","chicken"][Math.floor(Math.random()*4)],o+.5,f+1,h+.5)}}if(!(e!=="survival"||a>=8)){if(i<.3){const[o,h]=l(20,36),f=s.topY(o,h);f>0&&!s.isSolid(o,f+1,h)&&!s.isLiquid(o,f+1,h)&&rn[s.getBlock(o,f,h)]&&this.add(yf[Math.floor(Math.random()*yf.length)],o+.5,f+1,h+.5)}else if(a<4){const o=Math.random()*Math.PI*2,h=14+Math.random()*14,f=Math.floor(t.pos.x+Math.cos(o)*h),c=Math.floor(t.pos.z+Math.sin(o)*h),u=s.topY(f,c);if(u<8)return;const d=3+Math.floor(Math.random()*Math.max(1,u-8));s.getBlock(f,d,c)===0&&s.getBlock(f,d+1,c)===0&&s.isSolid(f,d-1,c)&&!s.skyLit(f,d,c)&&this.add(Sf[Math.floor(Math.random()*Sf.length)],f+.5,d,c+.5)}}}}const Fe=(n,t)=>n+Math.random()*(t-n),Q1=[1,1.3,1.75],t_=[18,20,15],e_=[4.2,3.2,2.4],i_=[1,2,3],n_=[5,6,8],s_=[5,4,3],bf=[3.2,4.6,6.2];function r_(){const n=document.createElement("canvas");n.width=n.height=16;const t=n.getContext("2d");for(let i=0;i<16;i++)for(let s=0;s<16;s++){const r=Math.sin(s*12.9+i*78.2)*43758.5%1,a=190+Math.abs(r)*30;t.fillStyle=`rgb(${a|0},${a*.58|0},${a*.28|0})`,t.fillRect(s,i,1,1)}t.fillStyle="#4a2208",t.fillRect(0,0,16,1),t.fillRect(0,15,16,1),t.fillRect(0,0,1,16),t.fillRect(15,0,1,16),t.fillStyle="#2a1204";for(let i=0;i<4;i++)t.fillRect(4+i,4+i,2,1),t.fillRect(4+i,11-i,2,1);t.fillRect(9,10,4,1);const e=new Oi(n);return e.magFilter=pe,e.minFilter=pe,e.generateMipmaps=!1,e.colorSpace=ti,e}class o_{constructor(t,e,i){this.scene=t,this.h=e,this.pos=i.clone(),this.name="TORMENTA WITHER",this.type="storm",this.maxHp=360,this.hp=360,this.phase=1,this.scale=1,this.scaleT=1,this.t=0,this.yaw=0,this.flash=0,this.devourT=1,this.atkT=3,this.beamT=3,this.beamOn=!1,this.minionT=10,this.meleeT=0,this.beamHurtT=0,this.shell=1,this.dead=!1,this.skulls=[],this.root=new ve,this.body=new ve,this.root.add(this.body),this.dark=new ui({color:1511967}),this.dark2=new ui({color:2760758}),this.glow=new Me({color:12611839}),this.build(),this.beam=new At(new Ln(.14,.14,1,6),new Me({color:11559167,transparent:!0,opacity:.6,fog:!1,depthWrite:!1})),this.beam.visible=!1,t.add(this.beam),this.skullGeo=new Jt(.9,.9,.9),this.skullMat=new ui({color:2102576,emissive:5906576}),t.add(this.root),this.root.position.copy(i)}build(){const{dark:t,dark2:e,glow:i,body:s}=this,r=(o,h,f,c,u,d,m,x=s)=>{const g=new At(new Jt(o,h,f),c);return g.position.set(u,d,m),x.add(g),g};r(5,5,5,t,0,0,0);for(let o=0;o<28;o++){const h=Fe(1,2.6),f=Math.floor(Math.random()*3),c=Math.random()<.5?-1:1,u=[Fe(-2.5,2.5),Fe(-2.5,2.5),Fe(-2.5,2.5)];u[f]=c*(2.5+h*.2),r(h,h*Fe(.7,1.3),h,Math.random()<.5?t:e,u[0],u[1],u[2]).rotation.set(Fe(-.3,.3),Fe(-.3,.3),Fe(-.3,.3))}for(let o=0;o<6;o++)r(.9,Fe(2,3.6),.9,e,Fe(-2,2),3.2,Fe(-3,0)).rotation.z=Fe(-.4,.4);this.heads=[];const a=(o,h,f,c,u)=>{const d=new ve;d.position.set(h,f,c),d.rotation.y=u,s.add(d),r(o,o,o,e,0,0,0,d);for(const x of[-1,1])r(o*.24,o*.12,.12,i,x*o*.24,o*.12,o/2+.03,d);const m=new ve;m.position.set(0,-o*.42,o*.05),d.add(m),r(o*.92,o*.3,o*.86,t,0,-o*.1,0,m);for(let x=-2;x<=2;x++)r(o*.08,o*.14,o*.08,i,x*o*.18,o*.05,o*.42,m);this.heads.push({g:d,jaw:m,size:o})};a(3.6,0,4,2.2,0),a(2.6,-3.9,3,1.3,-.35),a(2.6,3.9,3,1.3,.35),this.tents=[];const l=(o,h,f,c,u,d,m,x,g)=>{const p=[];for(let M=0;M<m;M++){const y=x*(1-M/m*.72),_=new At(new Jt(y,y,y),M===m-1&&g?i:M%2?t:e);s.add(_),p.push({m:_,s:y})}this.tents.push({b:new L(o,h,f),d:new L(c,u,d).normalize(),segs:p,ph:Math.random()*6})};for(let o=0;o<6;o++)l(Fe(-2,2),-2.4,Fe(-2,1.5),Fe(-.2,.2),-1,Fe(-.3,.1),9,1.5,!1);l(-2.4,-.4,2.2,-.4,-.1,1,8,1.2,!0),l(2.4,-.4,2.2,.4,-.1,1,8,1.2,!0),l(0,-1.8,2.5,0,-.5,1,8,1.2,!0),this.cmd=new At(new Jt(1.7,1.7,1.7),new Me({map:r_()})),this.cmd.position.set(0,.2,2.55),s.add(this.cmd),this.shellG=new ve,this.shellG.position.set(0,.2,2.8),s.add(this.shellG),r(3.1,3.1,.8,e,0,0,0,this.shellG);for(const[o,h]of[[-1.4,0],[1.4,0],[0,1.4],[0,-1.4]])r(o?.3:2.8,h?.3:2.8,.2,i,o,h,.45,this.shellG)}headWorld(t){const e=new L;return this.heads[t%3].g.getWorldPosition(e),e}corePos(){return this.pos.clone()}raycast(t,e,i){const s=this.scale,r=this.pos,a=Dr(t,e,{x:r.x-3.1*s,y:r.y-2.8*s,z:r.z-3.1*s},{x:r.x+3.1*s,y:r.y+5.4*s,z:r.z+3.1*s});if(a<0||a>i)return null;const l=new L(r.x,r.y+.2*s,r.z),o=new L(t.x,t.y,t.z),h=Math.max(0,l.clone().sub(o).dot(e)),f=o.addScaledVector(e,h);return{dist:a,crit:this.phase===3&&f.distanceTo(l)<2.1*s}}hit(t,e){if(this.dead)return;if(this.hp-=t*(e?3:1),this.flash=.15,this.h.burst(this.pos.x+Fe(-2,2),this.pos.y+Fe(-1,3),this.pos.z+Fe(-2,2),e?[1,.7,.2]:[.5,.2,.8],e?16:8,4),this.hp<=0)return this.die();const i=this.hp/this.maxHp,s=i>.66?1:i>.33?2:3;s>this.phase&&(this.phase=s,this.scaleT=Q1[s-1],this.h.sound("roar",1),this.h.strikeNear(this.pos.x,this.pos.z),this.h.toast(s===2?"¡La tormenta crece y devora todo!":"¡FASE FINAL! El bloque de comandos está expuesto: ¡golpéalo!"),this.atkT=1.5)}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y,this.pos.z,7,.25),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y,this.pos.z,"storm"),this.h.toast("¡Has derrotado a la Tormenta Wither!"),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.scene.remove(this.beam),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.skulls)this.scene.remove(t.mesh);this.skulls=[]}update(t,e,i){if(this.dead)return;this.t+=t,this.flash=Math.max(0,this.flash-t);const s=this.phase-1;this.scale+=(this.scaleT-this.scale)*Math.min(1,t*1.2);const r=this.scale;this.root.scale.setScalar(r);const a=e.pos.x,l=e.pos.z;let o=a-this.pos.x,h=l-this.pos.z;const f=Math.hypot(o,h)||1;o/=f,h/=f;const c=3.5+1.2*this.phase,u=t_[s];f>u+1?(this.pos.x+=o*c*t,this.pos.z+=h*c*t):f<u-3&&(this.pos.x-=o*c*.6*t,this.pos.z-=h*c*.6*t),this.pos.x+=-h*1.6*t*Math.sin(this.t*.3),this.pos.z+=o*1.6*t*Math.sin(this.t*.3);const d=e.pos.y+8+2*r;this.pos.y+=(d-this.pos.y)*Math.min(1,t*.8);const m=Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw;this.yaw+=Math.atan2(Math.sin(m),Math.cos(m))*Math.min(1,t*2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*.8)*.4,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((_,P)=>{_.jaw.rotation.x=.15+Math.sin(this.t*2.6+P*1.7)*.22+(this.beamOn?.35:0)});for(const _ of this.tents)_.segs.forEach((P,T)=>{const w=T*.32;P.m.position.set(_.b.x+_.d.x*T*1.45+Math.sin(this.t*1.4+_.ph+T*.6)*w,_.b.y+_.d.y*T*1.45-T*.05,_.b.z+_.d.z*T*1.45+Math.cos(this.t*1.1+_.ph*1.3+T*.5)*w)});this.shell+=((this.phase>=3?0:1)-this.shell)*Math.min(1,t*2.5),this.shellG.scale.setScalar(Math.max(.001,this.shell));const x=this.flash>0?.5:0;this.dark.emissive.setRGB(x,x*.4,x),this.dark2.emissive.setRGB(x,x*.4,x);const g=.8+Math.sin(this.t*4)*.2;if(this.cmd.material.color.setScalar(this.phase>=3?1.2*g+.2:.55),this.devourT-=t,this.devourT<=0){this.devourT=.35;const _=3.4*r,P=Math.floor(this.pos.x),T=Math.floor(this.pos.y+.8*r),w=Math.floor(this.pos.z),C=Math.ceil(_);let S=0;for(let v=-C;v<=C&&S<150;v++)for(let R=-C;R<=C;R++)for(let U=-C;U<=C;U++){if(v*v+R*R+U*U>_*_)continue;const N=i.getBlock(P+v,T+R,w+U);N&&N!==I.BEDROCK&&Math.random()<.7&&(i.setBlock(P+v,T+R,w+U,0),S++)}S>6&&this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.25,.1,.35],6,4)}this.beamT-=t,this.beamT<=0&&(this.beamOn=!this.beamOn,this.beamT=this.beamOn?n_[s]:s_[s],this.beamOn&&this.h.sound("roar",.6));const p=new L(this.pos.x-e.pos.x,this.pos.y+1-(e.pos.y+1),this.pos.z-e.pos.z),M=p.length(),y=this.beamOn&&M<48&&!e.dead;if(this.beam.visible=y,y){const _=p.clone().normalize();e.push.x=_.x*bf[s],e.push.z=_.z*bf[s],e.push.y=_.y*11;const P=this.headWorld(0),T=new L(e.pos.x,e.pos.y+1,e.pos.z),w=P.distanceTo(T);this.beam.scale.set(1+Math.sin(this.t*30)*.3,w,1+Math.sin(this.t*30)*.3),this.beam.position.copy(P).add(T).multiplyScalar(.5),this.beam.quaternion.setFromUnitVectors(new L(0,1,0),T.clone().sub(P).normalize()),this.beamHurtT-=t,M<5.5*r&&this.beamHurtT<=0&&(this.beamHurtT=.5,this.h.hurtPlayer(2,0,0))}if(this.meleeT-=t,M<6.5*r&&this.meleeT<=0&&!e.dead&&(this.meleeT=1.3,this.h.hurtPlayer(5,-p.x/M*6,-p.z/M*6)),this.atkT-=t,this.atkT<=0&&!e.dead){this.atkT=e_[s];for(let _=0;_<i_[s];_++)this.shoot(e,_)}for(let _=this.skulls.length-1;_>=0;_--){const P=this.skulls[_];P.life-=t,P.mesh.position.addScaledVector(P.vel,t),P.mesh.rotation.x+=t*4,P.mesh.rotation.y+=t*3;const T=P.mesh.position;(Math.hypot(T.x-e.pos.x,T.y-(e.pos.y+.9),T.z-e.pos.z)<1.4||P.life<=0||i.isSolid(Math.floor(T.x),Math.floor(T.y),Math.floor(T.z)))&&(this.h.explode(T.x,T.y,T.z,2.2+.4*this.phase,.5),this.scene.remove(P.mesh),this.skulls.splice(_,1))}this.phase>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=this.phase===2?14:10,this.h.minions()<5&&this.h.spawnMinion()))}shoot(t,e){const i=this.headWorld(e),r=new L(t.pos.x+t.vel.x*.5,t.pos.y+1,t.pos.z+t.vel.z*.5).sub(i).normalize();r.x+=Fe(-.06,.06)*(e+1),r.y+=Fe(-.04,.04),r.z+=Fe(-.06,.06)*(e+1),r.normalize();const a=new At(this.skullGeo,this.skullMat);a.position.copy(i),this.scene.add(a),this.skulls.push({mesh:a,vel:r.multiplyScalar(16),life:7}),this.h.sound("shoot",1)}}const Be=(n,t)=>n+Math.random()*(t-n),re=(n=0,t=0,e=0)=>new L(n,t,e),ri=n=>Math.atan2(Math.sin(n),Math.cos(n));class vi{constructor(t,e,i,s){this.scene=t,this.h=e,this.pos=i.clone(),Object.assign(this,s),this.hp=this.maxHp,this.phase=1,this.t=0,this.yaw=0,this.flash=0,this.dead=!1,this.scale=s.scale||1,this.root=new ve,this.body=new ve,this.root.add(this.body),this.flashMats=[],this.proj=[],this.clouds=[],this.extra=[],this.waves=[],this.vel=new L,t.add(this.root),this.root.position.copy(i),this.root.scale.setScalar(this.scale)}mat(t,e=0,i=!1){if(i)return new Me({color:t});const s=new ui({color:t,emissive:e});return this.flashMats.push(s),s}box(t,e,i,s,r,a,l,o=this.body){const h=new At(new Jt(t,e,i),s);return h.position.set(r,a,l),o.add(h),h}group(t,e,i,s=this.body){const r=new ve;return r.position.set(t,e,i),s.add(r),r}world(t){const e=re();return t.getWorldPosition(e),e}raycast(t,e,i){const s=this.hitbox,r=this.scale,a=this.pos,l=Dr(t,e,{x:a.x-s.hx*r,y:a.y+(s.oy-s.hy)*r,z:a.z-s.hz*r},{x:a.x+s.hx*r,y:a.y+(s.oy+s.hy)*r,z:a.z+s.hz*r});let o=l>=0&&l<=i?{dist:l,crit:!1}:null;for(const h of this.targets||[]){const f=h.pos,c=h.half,u=Dr(t,e,{x:f.x-c,y:f.y-c,z:f.z-c},{x:f.x+c,y:f.y+c,z:f.z+c});u>=0&&u<=i&&(!o||u<o.dist)&&(o={dist:u,crit:!1,target:h})}return o}damageMul(){return 1}hit(t,e,i){if(this.dead)return;if(i&&i.target&&i.target.onHit){i.target.onHit();return}if(this.hp-=t*this.damageMul(),this.flash=.15,this.h.burst(this.pos.x+Be(-1,1),this.pos.y+this.hitbox.oy*this.scale+Be(-1,1),this.pos.z+Be(-1,1),this.burstColor||[.6,.2,.8],8,4),this.hp<=0)return this.die();const s=this.phaseFor(this.hp/this.maxHp);s>this.phase&&(this.phase=s,this.onPhase(s)),this.onHit&&this.onHit()}phaseFor(){return 1}onPhase(){}die(){this.dead=!0,this.h.explode(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z,5,.2),this.h.sound("roar",1),this.h.loot(this.pos.x,this.pos.y+1,this.pos.z,this.type),this.h.toast(`¡Has derrotado a ${this.name}!`),this.dispose(),this.h.done()}dispose(){this.scene.remove(this.root),this.root.traverse(t=>t.geometry&&t.geometry.dispose());for(const t of this.proj)this.scene.remove(t.mesh);for(const t of this.extra)this.scene.remove(t);for(const t of this.waves)this.scene.remove(t.mesh);this.proj=[],this.waves=[]}shootProj(t,e,i={}){const s=i.size||.9,r=new At(new Jt(s,s,s),new ui({color:i.color||2102576,emissive:i.emissive||5906576}));r.position.copy(t),this.scene.add(r),this.proj.push({mesh:r,vel:e.clone().normalize().multiplyScalar(i.speed||16),life:i.life||7,o:i}),this.h.sound("shoot",1)}updateProj(t,e,i){for(let s=this.proj.length-1;s>=0;s--){const r=this.proj[s],a=r.o;r.life-=t,r.mesh.position.addScaledVector(r.vel,t),r.mesh.rotation.x+=t*4,r.mesh.rotation.y+=t*3;const l=r.mesh.position;if(r.reflected){const h=re(this.pos.x,this.pos.y+this.hitbox.oy*this.scale,this.pos.z);if(l.distanceTo(h)<(this.hitbox.hx+.8)*this.scale||r.life<=0){if(this.h.explode(l.x,l.y,l.z,2,0),this.h.burst(l.x,l.y,l.z,[1,.6,.2],24,6),this.scene.remove(r.mesh),this.proj.splice(s,1),l.distanceTo(h)<(this.hitbox.hx+.8)*this.scale&&(this.h.toast("¡Rebotada! Gran golpe"),this.hit(r.o.reflectDmg||70,!0),this.dead))return;continue}continue}(Math.hypot(l.x-e.pos.x,l.y-(e.pos.y+.9),l.z-e.pos.z)<1.4||r.life<=0||i.isSolid(Math.floor(l.x),Math.floor(l.y),Math.floor(l.z)))&&(this.h.explode(l.x,l.y,l.z,a.radius||2.2,a.ds||.5),a.effect&&Math.hypot(l.x-e.pos.x,l.y-e.pos.y,l.z-e.pos.z)<(a.radius||2.2)*1.8&&this.h.effect(a.effect[0],a.effect[1]),a.cloud&&this.clouds.push({x:l.x,y:l.y,z:l.z,t:4,tick:0}),this.scene.remove(r.mesh),this.proj.splice(s,1))}for(let s=this.clouds.length-1;s>=0;s--){const r=this.clouds[s];r.t-=t,r.tick-=t,r.tick<=0&&(r.tick=.45,this.h.burst(r.x+Be(-2,2),r.y+Be(0,1.5),r.z+Be(-2,2),[.8,.3,.9],5,1.2),Math.hypot(r.x-e.pos.x,r.z-e.pos.z)<3.3&&Math.abs(r.y-e.pos.y)<3&&!e.dead&&this.h.hurtPlayer(2,0,0)),r.t<=0&&this.clouds.splice(s,1)}}applyFlash(){const t=this.flash>0?.5:0;for(const e of this.flashMats)e.userData.baseE===void 0&&(e.userData.baseE=e.emissive.clone());for(const e of this.flashMats)e.emissive.copy(e.userData.baseE).addScalar(t)}addWave(t,e,i,s){const r=new At(new Ih(1,.16,6,44),new Me({color:s.color||16744496,transparent:!0,opacity:.85,fog:!1,depthWrite:!1}));r.rotation.x=Math.PI/2,r.position.set(t,e+.35,i),this.scene.add(r),this.waves.push({x:t,y:e,z:i,r:1,max:s.max||16,speed:s.speed||11,dmg:s.dmg||8,effect:s.effect,mesh:r,hit:!1})}updateWaves(t,e){for(let i=this.waves.length-1;i>=0;i--){const s=this.waves[i];s.r+=s.speed*t,s.mesh.scale.set(s.r,s.r,1),s.mesh.material.opacity=.85*Math.max(0,1-s.r/s.max);const r=Math.hypot(e.pos.x-s.x,e.pos.z-s.z);!s.hit&&!e.dead&&Math.abs(r-s.r)<1.5&&e.pos.y<s.y+1.15&&(s.hit=!0,this.h.hurtPlayer(s.dmg,(e.pos.x-s.x)/(r||1)*8,(e.pos.z-s.z)/(r||1)*8),s.effect&&this.h.effect(s.effect[0],s.effect[1])),s.r>=s.max&&(this.scene.remove(s.mesh),this.waves.splice(i,1))}}walk(t,e,i,s,r,a){this.vel.x+=(i/r*a-this.vel.x)*Math.min(1,t*5),this.vel.z+=(s/r*a-this.vel.z)*Math.min(1,t*5);const l=ds(e,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t,30);return(l.hitX||l.hitZ)&&l.onGround&&(this.vel.y=11),this.onGround=l.onGround,l}update(t,e,i){this.dead||(this.t+=t,this.flash=Math.max(0,this.flash-t),this.tick(t,e,i),this.updateProj(t,e,i),this.updateWaves(t,e),this.applyFlash())}}class a_ extends vi{constructor(t,e,i,s){super(t,e,i,{name:"ENDER DRAGON",type:"dragon",maxHp:300,hitbox:{hx:4.5,hy:2.4,hz:5,oy:.5},scale:1.4,burstColor:[.7,.2,.9]}),this.arena=s||null,this.center=s?re(s.cx,s.cy,s.cz):i.clone(),this.theta=Math.random()*6,this.state="circle",this.diveT=12,this.fireT=4,this.breath=0,this.diveTime=0,this.diveTarget=re();const r=this.mat(1380378),a=this.mat(2365998),l=this.mat(14696703,14696703,!0);this.box(2.4,2,6,r,0,0,0);for(let o=0;o<6;o++)this.box(.4,.8,.5,a,0,1.3,-2.4+o*.95);this.neck=[];for(let o=0;o<3;o++)this.neck.push(this.box(1.3-o*.1,1.3-o*.1,1.5,a,0,.3+o*.35,3.3+o*1.3));this.head=this.group(0,1.6,7.3),this.box(2,1.3,2.2,r,0,0,0,this.head),this.box(1.2,.7,1.6,a,0,-.15,1.6,this.head),this.jaw=this.group(0,-.6,.4,this.head),this.box(1.5,.35,2.2,r,0,0,.9,this.jaw);for(const o of[-.7,.7])this.box(.5,.25,.1,l,o,.2,1.1,this.head),this.box(.25,.8,.3,a,o*1.2,.9,-.4,this.head).rotation.z=o*.4;this.wings=[];for(const o of[-1,1]){const h=this.group(o*1.2,.8,.5);this.box(5,.22,2.4,a,o*2.5,0,0,h);const f=this.group(o*5,0,0,h);this.box(5,.16,2,r,o*2.5,0,.4,f),this.box(.15,.15,3.4,a,o*2.5,.12,.4,f),this.wings.push({w:h,o:f,sx:o})}this.tail=[];for(let o=0;o<8;o++)this.tail.push(this.box(1.5-o*.14,1.2-o*.1,1.6,o%2?r:a,0,0,-3.6-o*1.5));for(const[o,h]of[[-1,1.8],[1,1.8],[-1,-1.8],[1,-1.8]])this.box(.6,1.4,.6,a,o,-1.4,h);this.crystals=[];for(let o=0;o<4;o++){const h=o/4*Math.PI*2+.4,f=new ve,c=new Me({color:16736464}),u=new At(new Jt(1.3,1.3,1.3),c),d=new At(new Jt(1.3,1.3,1.3),new Me({color:16765168}));d.rotation.set(.7,.7,0),d.scale.setScalar(.7),f.add(u,d);const m=new At(new Ln(.07,.07,1,5),new Me({color:16744672,transparent:!0,opacity:.6,fog:!1}));if(this.arena&&this.arena.pillars){const x=this.arena.pillars[(o*2+1)%this.arena.pillars.length];f.position.set(x.x+.5,x.top+3.5,x.z+.5)}else f.position.set(i.x+Math.cos(h)*14,i.y-6+3,i.z+Math.sin(h)*14);t.add(f,m),this.extra.push(f,m),this.crystals.push({g:f,beam:m,alive:!0})}this.h.toast("¡Destruye los 4 cristales para poder dañar al Dragón!")}aliveCrystals(){return this.crystals.filter(t=>t.alive).length}damageMul(){return this.aliveCrystals()?.25:1}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Dragón entra en furia!"),this.diveT=3}raycast(t,e,i){let s=super.raycast(t,e,i);return this.crystals.forEach((r,a)=>{if(!r.alive)return;const l=r.g.position,o=Dr(t,e,{x:l.x-1,y:l.y-1,z:l.z-1},{x:l.x+1,y:l.y+1,z:l.z+1});o>=0&&o<=i&&(!s||o<s.dist)&&(s={dist:o,crit:!1,crystal:a})}),s}hit(t,e,i){if(i&&i.crystal!==void 0){const s=this.crystals[i.crystal];if(!s.alive)return;s.alive=!1,this.scene.remove(s.g,s.beam),this.h.explode(s.g.position.x,s.g.position.y,s.g.position.z,2.2,.35),this.h.burst(s.g.position.x,s.g.position.y,s.g.position.z,[1,.4,.8],24,6),this.h.toast(this.aliveCrystals()?`Cristal destruido (${this.aliveCrystals()} restantes)`:"¡Cristales destruidos! Ahora es vulnerable");return}super.hit(t,e,i)}tick(t,e,i){const s=this.phase;this.center.x+=(e.pos.x-this.center.x)*t*.1,this.center.z+=(e.pos.z-this.center.z)*t*.1;const r=this.aliveCrystals();r&&(this.hp=Math.min(this.maxHp,this.hp+t*2*r));const a=this.pos.clone();if(this.state==="circle"){this.theta+=t*(.32+.1*s);const h=24,f=this.center.x+Math.cos(this.theta)*h,c=this.center.z+Math.sin(this.theta)*h,u=Math.max(e.pos.y+12,this.center.y)+Math.sin(this.t*.9)*2,d=Math.min(1,t*1.6);if(this.pos.x+=(f-this.pos.x)*d,this.pos.z+=(c-this.pos.z)*d,this.pos.y+=(u-this.pos.y)*d,this.diveT-=t,this.fireT-=t,this.diveT<=0&&!e.dead&&(this.state="dive",this.diveTime=0,this.diveTarget.set(e.pos.x,e.pos.y+1,e.pos.z),this.diveT=s===1?13:8,this.h.sound("roar",.7)),this.fireT<=0&&!e.dead){this.fireT=s===1?5:3;const m=this.world(this.head);this.shootProj(m,re(e.pos.x,e.pos.y+1,e.pos.z).sub(m),{speed:17,size:1.1,color:4198496,emissive:12595440,radius:2.6,ds:.55,cloud:!0})}}else if(this.state==="dive"){this.diveTime+=t;const h=this.diveTarget.clone().sub(this.pos),f=h.length();this.pos.addScaledVector(h.normalize(),28*t),Math.hypot(this.pos.x-e.pos.x,this.pos.y-(e.pos.y+1),this.pos.z-e.pos.z)<4.2&&!e.dead&&!this.hitDive&&(this.hitDive=!0,this.h.hurtPlayer(9,h.x*8,h.z*8)),(f<3||this.diveTime>3)&&(this.state="circle",this.hitDive=!1)}const l=this.pos.clone().sub(a);l.lengthSq()>1e-5&&(this.yaw+=ri(Math.atan2(l.x,l.z)-this.yaw)*Math.min(1,t*3)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.root.rotation.z=this.state==="dive"?0:-ri(Math.atan2(l.x,l.z)-this.yaw)*.5,this.root.rotation.x=this.state==="dive"?.5:0;const o=Math.sin(this.t*(this.state==="dive"?7:3.2));for(const h of this.wings)h.w.rotation.z=h.sx*o*.6,h.o.rotation.z=h.sx*o*.45;this.tail.forEach((h,f)=>{h.position.x=Math.sin(this.t*2-f*.6)*f*.35,h.position.y=Math.sin(this.t*1.5-f*.5)*f*.12}),this.jaw.rotation.x=.1+(this.state==="dive"?.5:.18+Math.sin(this.t*2)*.12);for(const h of this.crystals)if(h.alive){h.g.rotation.y+=t*1.2,h.g.position.y+=Math.sin(this.t*2+h.g.position.x)*t*.4;const f=h.g.position,c=this.pos.clone().setY(this.pos.y+1),u=f.distanceTo(c);h.beam.scale.set(1,u,1),h.beam.position.copy(f).add(c).multiplyScalar(.5),h.beam.quaternion.setFromUnitVectors(re(0,1,0),c.clone().sub(f).normalize()),h.beam.visible=this.hp<this.maxHp}else h.beam.visible=!1}}class l_ extends vi{constructor(t,e,i){super(t,e,i,{name:"WITHER",type:"wither",maxHp:300,hitbox:{hx:2.2,hy:2.8,hz:2.2,oy:1},scale:1.6,burstColor:[.2,.2,.25]}),this.fireT=2.5,this.minionT=12,this.noBreak=0;const s=this.mat(1447450),r=this.mat(3816e3),a=this.mat(15266047,0,!0);this.box(.45,3,.45,r,0,0,0);for(let o=0;o<3;o++)this.box(2.6-o*.4,.2,.35,r,0,.9-o*.55,0);this.box(.5,1.2,.5,s,0,-1.9,-.5).rotation.x=.3,this.heads=[];const l=(o,h,f,c)=>{const u=this.group(h,f,c);this.box(o,o,o,s,0,0,0,u);for(const d of[-1,1])this.box(o*.22,o*.16,.1,a,d*o*.22,o*.1,o/2+.03,u);this.box(o*.5,o*.14,.1,a,0,-o*.25,o/2+.03,u),this.heads.push(u)};l(1.3,0,2.1,0),l(1,-1.35,1.7,.1),l(1,1.35,1.7,.1),this.aura=new At(new Jt(3.6,4.8,3.6),new Me({color:8433919,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),this.aura.position.y=.6,this.body.add(this.aura),this.h.explode(i.x,i.y,i.z,4,.25),this.h.toast("¡El Wither ha despertado!")}phaseFor(t){return t>.5?1:2}damageMul(){return this.phase===2?.6:1}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Wither está acorazado! Te perseguirá de cerca"),this.aura.material.opacity=.28,this.fireT=1}onHit(){if(this.t-this.noBreak<.6)return;this.noBreak=this.t;const t=this.scale,e=Math.floor(this.pos.x),i=Math.floor(this.pos.y+t),s=Math.floor(this.pos.z);for(let r=-3;r<=3;r++)for(let a=-2;a<=4;a++)for(let l=-3;l<=3;l++){const o=this.h.world().getBlock(e+r,i+a,s+l);o&&o!==I.BEDROCK&&Math.random()<.6&&this.h.world().setBlock(e+r,i+a,s+l,0)}}tick(t,e){const i=this.phase,s=e.pos.x,r=e.pos.z,a=s-this.pos.x,l=r-this.pos.z,o=Math.hypot(a,l)||1,h=i===1?16:7,f=i===1?4.5:7;if(o>h+1?(this.pos.x+=a/o*f*t,this.pos.z+=l/o*f*t):o<h-3&&(this.pos.x-=a/o*f*.7*t,this.pos.z-=l/o*f*.7*t),this.pos.y+=(e.pos.y+(i===1?7:3.5)-this.pos.y)*Math.min(1,t*.9),this.yaw+=ri(Math.atan2(a,l)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.3)*.5,this.pos.z),this.root.rotation.y=this.yaw,this.heads.forEach((c,u)=>{c.rotation.y=Math.sin(this.t*1.1+u*2)*.35,c.rotation.x=Math.sin(this.t*.9+u)*.1}),this.fireT-=t,this.fireT<=0&&!e.dead){this.fireT=i===1?2.3:1.6;const c=i===1?1:3;for(let u=0;u<c;u++){const d=this.world(this.heads[u%3]),m=re(e.pos.x+e.vel.x*.4,e.pos.y+1,e.pos.z+e.vel.z*.4),x=m.sub(d).normalize();x.x+=Be(-.05,.05)*u,x.z+=Be(-.05,.05)*u,this.shootProj(d,x,{speed:15,size:i===1?.8:1,color:i===1?1118484:2109536,emissive:i===1?3158080:4223231,radius:i===1?1.9:2.3,ds:.4,effect:["poison",6]})}}i===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<5&&this.h.spawnMinion("skeleton")))}}class h_ extends vi{constructor(t,e,i){super(t,e,i,{name:"WARDEN",type:"warden",maxHp:360,hitbox:{hx:.9,hy:1.6,hz:.9,oy:1.6},scale:1.25,burstColor:[.1,.6,.6]}),this.vel=re(),this.hw=.55*1.25,this.hh=3.4,this.hwb=.7,this.pos.copy(i),this.state="emerge",this.emerge=2.4,this.boomT=3,this.charge=0,this.meleeT=0,this.angry=!1,this.walk=0;const s=this.mat(862768),r=this.mat(1325634),a=this.mat(3926216,0,!0);this.legL=this.leg(-.4,s),this.legR=this.leg(.4,s),this.box(1.5,1.5,.9,r,0,2.15,0),this.chest=this.box(.7,.6,.12,a,0,2.2,.48);for(const l of[1.75,2,2.45])this.box(1.55,.1,.95,s,0,l,0);this.armL=this.arm(-1.1,r),this.armR=this.arm(1.1,r),this.head=this.group(0,3.25,.05),this.box(1.5,1,.95,r,0,0,0,this.head);for(const l of[-1,1])this.box(.18,.9,.18,s,l*.5,.85,-.1,this.head).rotation.z=-l*.35,this.box(.6,.55,.12,a,l*.95,.15,-.1,this.head);this.box(.9,.12,.1,a,0,-.1,.5,this.head),this.boomBeam=new At(new Ln(.5,.5,1,8),new Me({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.boomBeam),this.extra.push(this.boomBeam),this.h.toast("El Warden emerge de la oscuridad…"),this.h.sound("roar",1)}leg(t,e){const i=this.group(t,1.5,0);return this.box(.7,1.5,.75,e,0,-.75,0,i),i}arm(t,e){const i=this.group(t,2.8,0);return this.box(.7,2.6,.7,e,0,-1.3,0,i),i}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Warden ruge enfurecido!"),this.boomT=1}damageMul(){return this.state==="emerge"?0:1}tick(t,e,i){const s=this.phase;if(this.state==="emerge"){this.emerge-=t,this.root.position.set(this.pos.x,this.pos.y-Math.max(0,this.emerge)*1.2,this.pos.z),this.h.darkness(.6),this.emerge<=0&&(this.state="hunt");return}const r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1,o=e.pos.y-this.pos.y;this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*5);const h=this.charge>0?.4:s===1?3.4:5;this.vel.x+=(r/l*h-this.vel.x)*Math.min(1,t*6),this.vel.z+=(a/l*h-this.vel.z)*Math.min(1,t*6),l<2.2&&(this.vel.x*=.2,this.vel.z*=.2);const f={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},c=ds(i,f,t);(c.hitX||c.hitZ)&&c.onGround&&(this.vel.y=9),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.2,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw;const u=Math.sin(this.walk)*.55;this.legL.rotation.x=u,this.legR.rotation.x=-u,this.armL.rotation.x=-u*.7,this.armR.rotation.x=u*.7,this.head.rotation.x=Math.sin(this.t*2)*.05,this.chest.scale.setScalar(1+(this.charge>0?.6+Math.sin(this.t*25)*.3:Math.sin(this.t*4)*.1)),this.meleeT-=t,l<3.8&&Math.abs(o)<3&&this.meleeT<=0&&!e.dead&&this.charge<=0&&(this.meleeT=1.5,this.armR.rotation.x=-2,this.h.hurtPlayer(s===1?12:15,r/l*9,a/l*9),this.h.sound("hit",1)),this.boomT-=t,this.charge>0?(this.charge-=t,this.h.sound("hiss",.4),this.charge<=0&&this.sonicBoom(e,i)):this.boomT<=0&&l>4.5&&l<30&&!e.dead&&(this.charge=1.5,this.boomT=s===1?5:3.2,this.h.sound("roar",.5)),this.boomBeam.material.opacity=Math.max(0,this.boomBeam.material.opacity-t*3),this.h.darkness(l<28?.35+.15*Math.sin(this.t*3):0)}sonicBoom(t,e){const i=this.pos.clone().setY(this.pos.y+2.6*this.scale),s=re(t.pos.x,t.pos.y+1,t.pos.z),r=s.clone().sub(i),a=r.length();r.normalize(),this.boomBeam.material.opacity=.85,this.boomBeam.scale.set(1,a,1),this.boomBeam.position.copy(i).add(s).multiplyScalar(.5),this.boomBeam.quaternion.setFromUnitVectors(re(0,1,0),r),this.h.sound("explode",.8),e.raycast(i,r,a)||this.h.hurtPlayer(this.phase===1?12:15,r.x*8,r.z*8),this.h.burst(t.pos.x,t.pos.y+1,t.pos.z,[.4,1,.9],14,5)}dispose(){this.h.darkness(0),super.dispose()}}class c_ extends vi{constructor(t,e,i){super(t,e,i,{name:"GUARDIÁN ANCESTRAL",type:"guardian",maxHp:240,hitbox:{hx:1.8,hy:1.8,hz:1.8,oy:0},scale:2.4,burstColor:[.3,.9,.8]}),this.laserT=4,this.charge=0,this.beam=null,this.thorns=0;const s=this.mat(8032114),r=this.mat(6189912),a=this.mat(14715472),l=this.mat(6353120,0,!0);this.box(1.5,1.5,1.5,s,0,0,0);for(let h=0;h<6;h++)this.box(.4,.4,.05,a,Be(-.6,.6),Be(-.6,.6),-.78);this.spikes=[];const o=[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,-1]];for(const[h,f,c]of o)for(let u=0;u<3;u++){const d=this.group(h*.75+(h?0:Be(-.5,.5)),f*.75+(f?0:Be(-.5,.5)),c*.75+(c?0:Be(-.5,.5)));d.lookAt(d.position.clone().add(re(h,f,c))),this.box(.14,.14,.9,r,0,0,.45,d),this.box(.1,.1,.2,l,0,0,.95,d),this.spikes.push(d)}this.eye=this.group(0,0,.78),this.box(.95,.95,.12,this.mat(15790304),0,0,0,this.eye),this.iris=this.box(.5,.5,.14,this.mat(13119520,5244936),0,0,.04,this.eye),this.box(.18,.18,.16,this.mat(1050632),0,0,.06,this.eye),this.box(.5,.5,.9,r,0,0,-1.1).scale.set(1,.6,1),this.laser=new At(new Ln(.1,.1,1,6),new Me({color:7405552,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Guardián Ancestral te observa… ¡cuidado con su láser!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Guardián se enfurece! Su láser es más rápido")}onHit(){const t=this.h.player();t&&Math.hypot(t.pos.x-this.pos.x,t.pos.z-this.pos.z)<7.5&&!t.dead&&this.h.hurtPlayer(2,0,0)}tick(t,e,i){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;if(this.charge<=0){const d=s===1?14:11,m=s===1?3:4.4;l>d+1?(this.pos.x+=r/l*m*t,this.pos.z+=a/l*m*t):l<d-3&&(this.pos.x-=r/l*m*.7*t,this.pos.z-=a/l*m*.7*t),this.pos.y+=(e.pos.y+4-this.pos.y)*Math.min(1,t*.8)}this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw;const o=1+Math.sin(this.t*1.6)*.12+(this.charge>0?.35:0);this.spikes.forEach(d=>d.scale.setScalar(o)),this.iris.scale.setScalar(this.charge>0?1.5+Math.sin(this.t*30)*.2:1),this.laserT-=t;const h=this.world(this.eye),f=re(e.pos.x,e.pos.y+1,e.pos.z),c=f.clone().sub(h),u=c.length();if(c.normalize(),this.charge>0){const d=s===1?2.6:1.7,m=1-this.charge/d;this.charge-=t,this.laser.material.opacity=.25+m*.6,this.laser.scale.set(.5+m*3.2,u,.5+m*3.2),this.laser.position.copy(h).add(f).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(re(0,1,0),c),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.6),!i.raycast(h,c,u)&&!e.dead&&(this.h.hurtPlayer(9,c.x*3,c.z*3),this.h.effect("fatigue",25),this.h.toast("¡Fatiga de minería!")),this.laserT=s===1?6:3.5)}else this.laser.material.opacity=0,this.laserT<=0&&u<40&&!e.dead&&(this.charge=s===1?2.6:1.7,this.h.sound("hiss",.6))}}class f_ extends vi{constructor(t,e,i){super(t,e,i,{name:"DEVASTADOR",type:"ravager",maxHp:280,hitbox:{hx:1.4,hy:1.5,hz:1.9,oy:1.4},scale:1.5,burstColor:[.5,.4,.3]}),this.vel=re(),this.state="stalk",this.timer=4,this.dirx=0,this.dirz=1,this.hitDone=!1,this.walk=0,this.stunMul=1;const s=this.mat(4867392),r=this.mat(6182478),a=this.mat(14210244),l=this.mat(11542560,3147784);this.box(2.2,1.7,3.1,s,0,1.9,0),this.box(1.6,.9,1.6,r,0,3,-.6),this.neck=this.group(0,2.3,1.4),this.box(1,1,1.2,r,0,.1,.4,this.neck),this.head=this.group(0,.2,1.2,this.neck),this.box(1.7,1.45,1.6,s,0,0,.5,this.head);for(const o of[-1,1])this.box(.25,1,.25,a,o*.7,1,.2,this.head).rotation.z=-o*.3,this.box(.2,.6,.2,a,o*.55,-.55,1.2,this.head),this.box(.3,.2,.1,l,o*.45,.2,1.32,this.head);this.legs=[[-.8,1.2],[.8,1.2],[-.8,-1.2],[.8,-1.2]].map(([o,h])=>{const f=this.group(o,1.2,h);return this.box(.8,1.2,.8,r,0,-.6,0,f),f}),this.hw=1.2,this.hh=3.2,this.h.toast("¡El Devastador ruge! Esquiva sus embestidas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Devastador se enfurece!"),this.timer=1}damageMul(){return this.state==="stun"?1.7:1}tick(t,e,i){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;this.timer-=t;let o=0;if(this.state==="stalk")o=s===1?3.6:4.8,this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*4),this.timer<=0&&!e.dead&&l<40&&(this.state="windup",this.timer=1,this.h.sound("roar",.9));else if(this.state==="windup")this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*6),this.neck.rotation.x=-.6*Math.min(1,(1-this.timer)*2),this.timer<=0&&(this.state="charge",this.timer=1.9,this.hitDone=!1,this.dirx=r/l,this.dirz=a/l,this.yaw=Math.atan2(this.dirx,this.dirz),l<9&&!e.dead&&this.h.hurtPlayer(4,this.dirx*10,this.dirz*10));else if(this.state==="charge"){o=15,this.vel.x=this.dirx*o,this.vel.z=this.dirz*o,this.neck.rotation.x=.5,l<3.4&&!this.hitDone&&!e.dead&&Math.abs(e.pos.y-this.pos.y)<3.5&&(this.hitDone=!0,this.h.hurtPlayer(11,this.dirx*12,this.dirz*12));const u=Math.floor(this.pos.x+this.dirx*2.2),d=Math.floor(this.pos.z+this.dirz*2.2),m=Math.floor(this.pos.y);for(let x=-1;x<=1;x++)for(let g=-1;g<=1;g++)for(let p=0;p<3;p++){const M=i.getBlock(u+x,m+p,d+g);M&&M!==I.BEDROCK&&M!==I.STONE&&M!==I.COBBLE&&i.setBlock(u+x,m+p,d+g,0)}this.timer<=0&&(this.state="stun",this.timer=2.2,this.h.sound("hit",1),this.h.burst(this.pos.x,this.pos.y+2,this.pos.z,[.8,.8,.3],14,4))}else this.state==="stun"&&(this.neck.rotation.x=.9,this.timer<=0&&(this.state="stalk",this.timer=s===1?5:3,this.neck.rotation.x=0));this.state!=="charge"&&(this.vel.x+=(r/l*o-this.vel.x)*Math.min(1,t*5),this.vel.z+=(a/l*o-this.vel.z)*Math.min(1,t*5)),(this.state==="stun"||this.state==="windup")&&(this.vel.x*=.85,this.vel.z*=.85);const h={pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},f=ds(i,h,t);(f.hitX||f.hitZ)&&f.onGround&&this.state!=="stun"&&(this.vel.y=10),this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*1.6;const c=Math.sin(this.walk)*.5;this.legs.forEach((u,d)=>u.rotation.x=d%2?-c:c),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class u_ extends vi{constructor(t,e,i){super(t,e,i,{name:"INVOCADOR",type:"evoker",maxHp:220,hitbox:{hx:.9,hy:1.4,hz:.9,oy:1.6},scale:1.7,burstColor:[.9,.8,.2]}),this.fangT=3,this.vexT=7,this.tpT=6,this.vex=[],this.fangs=[],this.targets=[];const s=this.mat(7105648),r=this.mat(14202928),a=this.mat(14264458),l=this.mat(3158068);this.box(.95,1.6,.65,s,0,1,0),this.box(1,.18,.7,r,0,.25,0),this.box(.98,.14,.68,r,0,1,0),this.head=this.group(0,2.05,0),this.box(.55,.65,.55,a,0,.15,0,this.head),this.box(.14,.28,.16,a,0,.05,.34,this.head);for(const o of[-1,1])this.box(.16,.08,.04,this.mat(16777215,0,!0),o*.14,.25,.28,this.head),this.box(.2,.05,.05,l,o*.14,.34,.28,this.head);this.arms=this.box(1,.3,.45,s,0,1.5,.4),this.armL=this.group(-.62,1.7,.1),this.armR=this.group(.62,1.7,.1);for(const o of[this.armL,this.armR])this.box(.28,.9,.28,s,0,-.45,0,o);this.arms.visible=!0,this.h.toast("El Invocador alza los brazos… ¡cuidado con los colmillos y los vex!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Invocador desata un círculo de colmillos!"),this.fangT=1}raycast(t,e,i){return this.targets=this.vex.map(s=>({pos:s.pos,half:.7,onHit:()=>this.killVex(s)})),super.raycast(t,e,i)}killVex(t){this.h.burst(t.pos.x,t.pos.y,t.pos.z,[.5,.7,1],14,4),this.h.sound("hit",1),this.scene.remove(t.mesh),this.vex.splice(this.vex.indexOf(t),1)}spawnFang(t,e,i,s,r){const a=s.topY(Math.floor(t),Math.floor(e));if(a<0)return;const l=new ve,o=new ui({color:15788224,emissive:4208664});for(let h=0;h<3;h++){const f=new At(new Jt(.5-h*.14,.7,.5-h*.14),o);f.position.y=.35+h*.6,l.add(f)}l.position.set(t,a+1,e),l.scale.y=.01,l.visible=!1,this.scene.add(l),this.fangs.push({x:t,z:e,y:a+1,g:l,t:-i,hit:!1})}tick(t,e,i){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*5);const o=13;l>o+2?(this.pos.x+=r/l*3.5*t,this.pos.z+=a/l*3.5*t):l<o-4&&(this.pos.x-=r/l*3*t,this.pos.z-=a/l*3*t),this.pos.y+=(e.pos.y+3.2-this.pos.y)*Math.min(1,t*1.2),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.7)*.35,this.pos.z),this.root.rotation.y=this.yaw;const h=this.fangT<1||this.vexT<1;if(this.armL.rotation.x=this.armR.rotation.x=h?-2.4+Math.sin(this.t*14)*.2:0,this.arms.visible=!h,this.tpT-=t,this.tpT<=0){this.tpT=s===1?8:5,this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5);const f=Math.random()*Math.PI*2,c=11+Math.random()*4;this.pos.set(e.pos.x+Math.cos(f)*c,e.pos.y+3+Math.random()*2,e.pos.z+Math.sin(f)*c),this.h.burst(this.pos.x,this.pos.y+1.5,this.pos.z,[.9,.9,.3],22,5),this.h.sound("pop",1)}if(this.fangT-=t,this.fangT<=0&&!e.dead){this.fangT=s===1?4.2:3,this.h.sound("shoot",.8);for(let f=1;f<=12;f++)this.spawnFang(this.pos.x+r/l*f*1.4+Math.sin(f)*.2,this.pos.z+a/l*f*1.4,f*.07,i,e);if(s===2)for(let f=0;f<12;f++){const c=f/12*Math.PI*2;this.spawnFang(e.pos.x+Math.cos(c)*3,e.pos.z+Math.sin(c)*3,.9,i,e)}}for(let f=this.fangs.length-1;f>=0;f--){const c=this.fangs[f];c.t+=t,c.t>=0&&(c.g.visible=!0,c.g.scale.y=Math.min(1,c.t*6),!c.hit&&c.t>.12&&Math.hypot(c.x-e.pos.x,c.z-e.pos.z)<1.2&&Math.abs(c.y-e.pos.y)<2.2&&!e.dead&&(c.hit=!0,this.h.hurtPlayer(6,0,0)),c.t>1.1&&(this.scene.remove(c.g),this.fangs.splice(f,1)))}if(this.vexT-=t,this.vexT<=0&&!e.dead){this.vexT=s===1?10:7,this.h.sound("pop",1);const f=s===1?3:5;for(let c=0;c<f;c++){const u=new ve,d=new ui({color:9416928,emissive:2109520,transparent:!0,opacity:.85}),m=new At(new Jt(.5,.7,.5),d),x=new At(new Jt(.7,.05,.4),d),g=x.clone();x.position.set(-.55,.2,-.1),g.position.set(.55,.2,-.1),u.add(m,x,g);for(const M of[-.1,.1]){const y=new At(new Jt(.08,.08,.05),new Me({color:16719904}));y.position.set(M,.15,.27),u.add(y)}const p=re(this.pos.x+Be(-2,2),this.pos.y+1+Be(0,2),this.pos.z+Be(-2,2));u.position.copy(p),this.scene.add(u),this.vex.push({mesh:u,pos:p,w1:x,w2:g,life:28,cool:1})}}for(let f=this.vex.length-1;f>=0;f--){const c=this.vex[f];c.life-=t,c.cool-=t;const u=re(e.pos.x,e.pos.y+1,e.pos.z).sub(c.pos),d=u.length();c.pos.addScaledVector(u.normalize(),6.2*t),c.pos.y+=Math.sin(this.t*6+f)*t*1.5,c.mesh.position.copy(c.pos),c.mesh.rotation.y=Math.atan2(u.x,u.z),c.w1.rotation.z=Math.sin(this.t*25)*.7,c.w2.rotation.z=-c.w1.rotation.z,d<1.2&&c.cool<=0&&!e.dead&&(c.cool=.9,this.h.hurtPlayer(3,0,0)),c.life<=0&&(this.scene.remove(c.mesh),this.vex.splice(f,1))}}dispose(){for(const t of this.vex)this.scene.remove(t.mesh);for(const t of this.fangs)this.scene.remove(t.g);this.vex=[],this.fangs=[],super.dispose()}}class d_ extends vi{constructor(t,e,i){super(t,e,i,{name:"GHAST GIGANTE",type:"ghast",maxHp:200,hitbox:{hx:2.2,hy:2.2,hz:2.2,oy:0},scale:1.8,burstColor:[1,1,1]}),this.fireT=3,this.tele=0,this.theta=Math.random()*6,this.targets=[];const s=this.mat(15921906),r=this.mat(14474460),a=this.mat(4208696);this.box(4,4,4,s,0,0,0),this.eyeL=this.box(.9,.25,.1,a,-.9,.2,2.03),this.eyeR=this.box(.9,.25,.1,a,.9,.2,2.03),this.mouth=this.box(.7,.35,.1,a,0,-.9,2.03),this.tents=[];for(const l of[-1.4,0,1.4])for(const o of[-1.4,0,1.4]){const h=2.2+Math.abs(l*o)*.5+(l===0&&o===0?.6:0),f=this.box(.55,h,.55,r,l,-2-h/2,o);this.tents.push({m:f,base:-2-h/2,ph:Math.random()*6})}this.redEye=this.mat(16719904,0,!0),this.h.toast("¡Un Ghast gigante! Golpea sus bolas de fuego para devolvérselas")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Ghast llora de rabia y dispara más rápido!")}raycast(t,e,i){return this.targets=this.proj.filter(s=>!s.reflected).map(s=>({pos:s.mesh.position,half:1.25,onHit:()=>this.reflect(s)})),super.raycast(t,e,i)}reflect(t){t.reflected=!0,t.o={...t.o,reflectDmg:70},t.life=6,t.vel=re(this.pos.x,this.pos.y,this.pos.z).sub(t.mesh.position).normalize().multiplyScalar(22),this.h.sound("hit",1)}tick(t,e){const i=this.phase;this.theta+=t*(.18+.05*i);const s=22,r=e.pos.x+Math.cos(this.theta)*s,a=e.pos.z+Math.sin(this.theta)*s,l=e.pos.y+11,o=Math.min(1,t*.7);if(this.pos.x+=(r-this.pos.x)*o,this.pos.z+=(a-this.pos.z)*o,this.pos.y+=(l-this.pos.y)*o,this.yaw+=ri(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t)*.7,this.pos.z),this.root.rotation.y=this.yaw,this.tents.forEach((h,f)=>{h.m.rotation.z=Math.sin(this.t*1.6+h.ph)*.18,h.m.rotation.x=Math.cos(this.t*1.3+h.ph)*.18}),this.fireT-=t,this.fireT<=0&&this.tele<=0&&!e.dead&&(this.tele=1.1,this.h.sound("hiss",.7)),this.tele>0){if(this.tele-=t,this.eyeL.material=this.eyeR.material=this.redEye,this.eyeL.scale.y=this.eyeR.scale.y=2.2,this.mouth.scale.set(1.6,3.4,1),this.tele<=0){this.fireT=i===1?3.6:2.2;const h=re(this.pos.x,this.pos.y,this.pos.z),f=re(e.pos.x+e.vel.x*.5,e.pos.y+1,e.pos.z+e.vel.z*.5).sub(h);this.shootProj(h,f,{speed:13,size:2,color:16769184,emissive:16736272,radius:3.6,ds:.6,effect:["burn",5],life:9})}}else this.eyeL.material=this.eyeR.material=this.mouth.material,this.eyeL.scale.y=this.eyeR.scale.y=1,this.mouth.scale.set(1,1,1)}}class p_ extends vi{constructor(t,e,i){super(t,e,i,{name:"HEROBRINE",type:"herobrine",maxHp:400,hitbox:{hx:.5,hy:1,hz:.5,oy:1},scale:1.35,burstColor:[1,1,1]}),this.vel=re(),this.hw=.4,this.hh=2.4,this.tpT=5,this.boltT=4,this.walk=0,this.meleeT=0,this.minionT=8;const s=this.mat(14724236),r=this.mat(2794936),a=this.mat(3817372),l=this.mat(16777215,0,!0);this.head=this.group(0,1.5,0),this.box(.5,.5,.5,s,0,.25,0,this.head),this.box(.5,.14,.5,this.mat(3810322),0,.46,0,this.head);for(const o of[-1,1])this.box(.16,.1,.06,l,o*.13,.3,.26,this.head);this.box(.5,.75,.25,r,0,1.125,0),this.legL=this.group(-.125,.75,0),this.box(.25,.75,.25,a,0,-.375,0,this.legL),this.legR=this.group(.125,.75,0),this.box(.25,.75,.25,a,0,-.375,0,this.legR),this.armL=this.group(-.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armL),this.armR=this.group(.36,1.48,0),this.box(.22,.72,.22,s,0,-.36,0,this.armR),this.aura=new f1(16777215,0,14),this.root.add(this.aura),this.aura.position.y=1.5,this.h.toast("Una figura de ojos blancos te observa…"),this.h.sound("roar",.6)}phaseFor(t){return t>.6?1:t>.25?2:3}onPhase(t){this.h.sound("roar",1),t===2&&(this.h.toast("Las luces se apagan…"),this.tpT=1),t===3&&(this.h.toast("¡HEROBRINE LEVITA! Cuidado con sus rayos"),this.vel.y=6)}tick(t,e,i){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*6),this.h.darkness(s>=2?.55+Math.sin(this.t*5)*.1:.15);const o=s===1?3.4:4.4;if(s<3){this.vel.x+=(r/l*o*(l>2.4?1:0)-this.vel.x)*Math.min(1,t*6),this.vel.z+=(a/l*o*(l>2.4?1:0)-this.vel.z)*Math.min(1,t*6);const f=ds(i,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t);(f.hitX||f.hitZ)&&f.onGround&&(this.vel.y=9)}else{const f=e.pos.y+5,c=14;this.pos.y+=(f-this.pos.y)*Math.min(1,t*1.5),l>c?(this.pos.x+=r/l*5*t,this.pos.z+=a/l*5*t):l<c-4&&(this.pos.x-=r/l*4*t,this.pos.z-=a/l*4*t)}this.walk+=t*Math.hypot(this.vel.x,this.vel.z)*2.4;const h=Math.sin(this.walk)*.8;if(this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h,this.armR.rotation.x=s===3?-1.4:h,this.root.position.set(this.pos.x,this.pos.y+(s===3?Math.sin(this.t*2)*.4:0),this.pos.z),this.root.rotation.y=this.yaw,this.aura.intensity=s>=3?3+Math.sin(this.t*12):0,this.tpT-=t,this.tpT<=0&&!e.dead){this.tpT=s===1?6.5:s===2?4:5,this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5);const f=e.lookDir(),c=Math.hypot(f.x,f.z)||1,u=Math.floor(e.pos.x-f.x/c*4),d=Math.floor(e.pos.z-f.z/c*4),m=i.topY(u,d);s<3&&m>0?(this.pos.set(u+.5,m+1,d+.5),this.vel.set(0,0,0)):this.pos.set(u+.5,e.pos.y+5,d+.5),this.h.burst(this.pos.x,this.pos.y+1,this.pos.z,[1,1,1],24,5),this.h.sound("pop",1)}if(this.meleeT-=t,l<2.6&&Math.abs(e.pos.y-this.pos.y)<2.5&&this.meleeT<=0&&!e.dead&&s<3&&(this.meleeT=1.1,this.h.hurtPlayer(s===1?8:11,r/l*7,a/l*7),this.h.sound("hit",1)),this.boltT-=t,this.boltT<=0&&!e.dead){this.boltT=s===1?6:s===2?3.8:2.4;const f=e.pos.x,c=e.pos.z;if(this.h.burst(f,e.pos.y+.5,c,[1,1,.6],18,2),setTimeout(()=>{this.dead||this.h.strikeNear(f,c)},900),s===3){const u=re(this.pos.x,this.pos.y+2,this.pos.z),d=re(e.pos.x,e.pos.y+1,e.pos.z).sub(u);this.shootProj(u,d,{speed:18,size:.9,color:16777215,emissive:16777215,radius:2.2,ds:.45,effect:["burn",3]})}}s>=2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=11,this.h.minions()<5&&this.h.spawnMinion("zombie")))}dispose(){this.h.darkness(0),super.dispose()}}class m_ extends vi{constructor(t,e,i){super(t,e,i,{name:"REY SLIME",type:"slimeking",maxHp:260,hitbox:{hx:2.6,hy:2.6,hz:2.6,oy:2.6},scale:1.4,burstColor:[.4,1,.4]}),this.vel=re(),this.hw=3.2,this.hh=5.4,this.jumpT=2.5,this.onGround=!1,this.splitAt=[.75,.5,.25],this.squash=1;const s=new ui({color:6348896,emissive:1064976,transparent:!0,opacity:.72});this.flashMats.push(s);const r=this.mat(3119663,536584);this.slime=this.group(0,0,0),this.box(5,5,5,s,0,2.6,0,this.slime),this.box(2.2,2.2,2.2,r,0,2.6,0,this.slime);const a=this.mat(1060880,0,!0);for(const o of[-1,1])this.box(.7,.7,.2,a,o*1.2,3.1,2.55,this.slime);this.box(1.5,.3,.2,a,0,1.8,2.55,this.slime);const l=this.mat(15777840,3153920);this.box(3.4,.6,3.4,l,0,5.4,0,this.slime);for(const[o,h]of[[-1.4,-1.4],[1.4,-1.4],[-1.4,1.4],[1.4,1.4],[0,1.6],[0,-1.6]])this.box(.5,.9,.5,l,o,6,h,this.slime);this.h.toast("El Rey Slime salta hacia ti. ¡Se divide al perder vida!")}phaseFor(t){return t>.5?1:t>.25?2:3}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Slime salta más rápido!")}onHit(){const t=this.hp/this.maxHp;for(;this.splitAt.length&&t<this.splitAt[0];){this.splitAt.shift();for(let e=0;e<4;e++)this.h.spawnMinion("slime");this.h.toast("¡Se divide en slimes!")}}tick(t,e,i){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;if(this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*4),this.jumpT-=t,this.onGround&&(this.vel.x*=.8,this.vel.z*=.8,this.jumpT<=0&&!e.dead)){this.jumpT=s===1?2.6:s===2?1.8:1.2;const h=Math.min(l,22)/1.35*.95;this.vel.y=17,this.vel.x=r/l*h,this.vel.z=a/l*h,this.onGround=!1,this.squash=1.4,this.h.sound("pop",1)}const o=ds(i,{pos:this.pos,vel:this.vel,hw:this.hw,h:this.hh},t,34);if(o.onGround&&!this.onGround){this.onGround=!0,this.squash=.6,this.h.sound("explode",.7);const h=s===1?8:11,f=Math.hypot(e.pos.x-this.pos.x,e.pos.z-this.pos.z);this.h.burst(this.pos.x,this.pos.y+.3,this.pos.z,[.4,1,.4],36,8),f<h&&Math.abs(e.pos.y-this.pos.y)<3&&!e.dead&&this.h.hurtPlayer(s===1?8:12,(e.pos.x-this.pos.x)/(f||1)*9,(e.pos.z-this.pos.z)/(f||1)*9);const c=Math.floor(this.pos.x),u=Math.floor(this.pos.z),d=Math.floor(this.pos.y)-1;for(let m=-3;m<=3;m++)for(let x=-3;x<=3;x++)m*m+x*x<=9&&i.getBlock(c+m,d,u+x)&&i.getBlock(c+m,d,u+x)!==I.BEDROCK&&Math.random()<.6&&i.setBlock(c+m,d,u+x,0)}(o.hitX||o.hitZ)&&(this.vel.x*=-.2,this.vel.z*=-.2),this.squash+=(1-this.squash)*Math.min(1,t*8),this.slime.scale.set(1/Math.sqrt(this.squash),this.squash,1/Math.sqrt(this.squash)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,l<3.2&&Math.abs(e.pos.y-this.pos.y)<4&&!e.dead&&(this.contactT=(this.contactT||0)-t)<=0&&(this.contactT=1,this.h.hurtPlayer(5,r/l*6,a/l*6))}}class g_ extends vi{constructor(t,e,i){super(t,e,i,{name:"REY BLAZE",type:"blazeking",maxHp:280,hitbox:{hx:1.4,hy:1.7,hz:1.4,oy:1.4},scale:1.8,burstColor:[1,.6,.1]}),this.theta=Math.random()*6,this.volleyT=3,this.waveT=6,this.minionT=12;const s=this.mat(15773728,10506240),r=this.mat(16742928,12595200),a=this.mat(2101248,0,!0);this.head=this.box(1.5,1.5,1.5,s,0,2.2,0);for(const l of[-.35,.35])this.box(.34,.26,.06,a,l,2.35,.77,this.body);this.box(.7,.16,.06,a,0,1.85,.77);for(let l=0;l<5;l++){const o=l/5*Math.PI*2;this.box(.25,.7,.25,r,Math.cos(o)*.6,3.15,Math.sin(o)*.6).rotation.z=Math.cos(o)*.3}this.core=this.box(.8,.8,.8,this.mat(16769136,0,!0),0,1,0),this.rings=[];for(let l=0;l<3;l++){const o=this.group(0,.2+l*.7,0);for(let h=0;h<6;h++){const f=h/6*Math.PI*2;this.box(.22,1.5,.22,l%2?r:s,Math.cos(f)*(1.1+l*.1),0,Math.sin(f)*(1.1+l*.1),o)}this.rings.push(o)}this.h.toast("¡El Rey Blaze arde sobre el Nether! Salta sus ondas de fuego")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Blaze llama a sus blazes!"),this.minionT=1}tick(t,e,i){const s=this.phase;this.theta+=t*(.32+.1*s);const r=15,a=e.pos.x+Math.cos(this.theta)*r,l=e.pos.z+Math.sin(this.theta)*r,o=e.pos.y+8+Math.sin(this.t*1.1)*1.5,h=Math.min(1,t*.9);if(this.pos.x+=(a-this.pos.x)*h,this.pos.z+=(l-this.pos.z)*h,this.pos.y+=(o-this.pos.y)*h,this.yaw+=ri(Math.atan2(e.pos.x-this.pos.x,e.pos.z-this.pos.z)-this.yaw)*Math.min(1,t*4),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw,this.rings.forEach((f,c)=>f.rotation.y+=t*(1.6+c*.7)*(c%2?-1:1)),this.core.scale.setScalar(1+Math.sin(this.t*6)*.15),this.volleyT-=t,this.volleyT<=0&&!e.dead){this.volleyT=s===1?3.6:2.5;const f=re(this.pos.x,this.pos.y+3,this.pos.z),c=re(e.pos.x,e.pos.y+1,e.pos.z).sub(f).normalize(),u=s===1?5:7;for(let d=0;d<u;d++){const m=(d-(u-1)/2)*.16,x=c.clone();x.x=c.x*Math.cos(m)-c.z*Math.sin(m),x.z=c.x*Math.sin(m)+c.z*Math.cos(m),this.shootProj(f,x,{speed:13,size:.75,color:16756800,emissive:16732176,radius:1.8,ds:.28,effect:["burn",4]})}}this.waveT-=t,this.waveT<=0&&!e.dead&&(this.waveT=s===1?7.5:5,this.addWave(this.pos.x,e.pos.y,this.pos.z,{max:30,speed:12,dmg:9,color:16738832,effect:["burn",4]}),this.h.sound("roar",.6)),s===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=13,this.h.minions()<6&&(this.h.spawnMinion("blaze"),this.h.spawnMinion("blaze"))))}}class x_ extends vi{constructor(t,e,i){super(t,e,i,{name:"REY PIGLIN",type:"piglinking",maxHp:340,hitbox:{hx:1,hy:1.9,hz:1,oy:1.9},scale:1.9,burstColor:[.9,.7,.2]}),this.hw=.9,this.hh=7,this.state="walk",this.timer=3,this.slamT=9,this.cryT=12,this.axeT=5,this.spinT=7,this.walkA=0;const s=this.mat(13208184),r=this.mat(15253568,3154944),a=this.mat(5917240),l=this.mat(8022608),o=this.mat(16724e3,0,!0);this.legL=this.group(-.28,1.5,0),this.box(.5,1.5,.5,a,0,-.75,0,this.legL),this.legR=this.group(.28,1.5,0),this.box(.5,1.5,.5,a,0,-.75,0,this.legR),this.box(1.2,1.5,.6,l,0,2.25,0),this.box(1.3,.35,.7,r,0,2.85,0),this.box(1.25,.25,.65,r,0,1.7,0),this.armL=this.group(-.82,2.85,0),this.box(.45,1.5,.45,s,0,-.75,0,this.armL),this.armR=this.group(.82,2.85,0),this.box(.45,1.5,.45,s,0,-.75,0,this.armR),this.box(.2,2.2,.2,this.mat(6965802),0,-1.4,.4,this.armR),this.box(1.1,.7,.18,this.mat(10132122),.5,-2.2,.4,this.armR),this.head=this.group(0,3.35,0),this.box(1.2,1,1,s,0,.1,0,this.head),this.box(.7,.45,.25,this.mat(11563103),0,-.05,.6,this.head);for(const h of[-1,1])this.box(.14,.14,.05,o,h*.3,.3,.52,this.head),this.box(.25,.6,.12,s,h*.78,.35,0,this.head).rotation.z=h*.6,this.box(.12,.3,.1,this.mat(15788240),h*.2,-.3,.7,this.head);this.box(1.3,.3,1.1,r,0,.65,0,this.head);for(let h=-1;h<=1;h++)this.box(.25,.4,.2,r,h*.45,.95,0,this.head);this.h.toast("El Rey Piglin golpea su hacha: ¡oro y furia!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Rey Piglin gira como un torbellino!"),this.spinT=2}tick(t,e,i){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;this.timer-=t,this.slamT-=t,this.cryT-=t,this.axeT-=t,this.spinT-=t,this.state!=="spin"&&(this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*4));let o=s===1?3.4:4.4;if(this.state==="walk"){if(this.timer<=0&&l<6.5&&!e.dead)this.state="windup",this.timer=.65;else if(this.slamT<=0&&l<22&&this.onGround)this.vel.y=14,this.vel.x=r/l*Math.min(l,14)*.7,this.vel.z=a/l*Math.min(l,14)*.7,this.state="slam",this.slamT=s===1?9:6,this.slammed=!1,this.h.sound("roar",.7);else if(this.spinT<=0&&s===2&&l<8)this.state="spin",this.timer=1.8,this.spinT=7,this.spinHit=0;else if(this.axeT<=0&&l>7&&!e.dead){this.axeT=s===1?5.5:3.8;const f=re(this.pos.x,this.pos.y+4,this.pos.z);this.shootProj(f,re(e.pos.x,e.pos.y+1,e.pos.z).sub(f),{speed:15,size:1,color:15253568,emissive:8413200,radius:1.5,ds:.22}),this.armR.rotation.x=-2.4}if(this.cryT<=0&&(this.cryT=14,this.h.sound("roar",1),this.h.toast("¡El Rey Piglin llama a su guardia!"),this.h.minions()<6))for(let f=0;f<3;f++)this.h.spawnMinion("piglin")}else this.state==="windup"?(o=0,this.armR.rotation.x=-2.6*Math.min(1,(.65-this.timer)*2),this.timer<=0&&(this.state="walk",this.timer=s===1?2.6:1.8,l<7.5&&!e.dead&&this.h.hurtPlayer(13,r/l*12,a/l*12),this.h.sound("hit",1),this.armR.rotation.x=.6)):this.state==="slam"?(o=0,this.onGround&&this.vel.y<=0&&this.t>.2&&(this.state="walk",this.timer=1.5,this.h.burst(this.pos.x,this.pos.y+.4,this.pos.z,[.6,.4,.3],30,8),this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:14,speed:12,dmg:9,color:15253568}),this.h.sound("explode",.8))):this.state==="spin"&&(o=1.2,this.yaw+=t*14,this.spinHit-=t,this.armR.rotation.x=-1.6,l<5&&this.spinHit<=0&&!e.dead&&(this.spinHit=.45,this.h.hurtPlayer(7,r/l*9,a/l*9)),this.timer<=0&&(this.state="walk"));this.walk(t,i,r,a,l,o),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.4;const h=Math.sin(this.walkA)*.6;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.armL.rotation.x=-h*.7,this.state==="walk"&&(this.armR.rotation.x+=(h*.7-this.armR.rotation.x)*Math.min(1,t*6)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class __ extends vi{constructor(t,e,i){super(t,e,i,{name:"ENDERMAN TITÁN",type:"endertitan",maxHp:380,hitbox:{hx:.45,hy:1.5,hz:.45,oy:1.5},scale:3.6,burstColor:[.7,.2,1]}),this.hw=1.2,this.hh=10,this.tpT=4,this.rockT=3,this.sweepT=0,this.mite=12,this.gaze=0,this.gazeCool=0;const s=this.mat(1182232),r=this.mat(14708991,0,!0);this.legL=this.group(-.12,1.5,0),this.box(.18,1.5,.18,s,0,-.75,0,this.legL),this.legR=this.group(.12,1.5,0),this.box(.18,1.5,.18,s,0,-.75,0,this.legR),this.box(.5,.95,.26,s,0,1.98,0),this.armL=this.group(-.34,2.45,0),this.box(.13,1.35,.13,s,0,-.67,0,this.armL),this.armR=this.group(.34,2.45,0),this.box(.13,1.35,.13,s,0,-.67,0,this.armR),this.head=this.group(0,2.7,0),this.box(.5,.42,.5,s,0,0,0,this.head);for(const a of[-.13,.13])this.box(.15,.06,.03,r,a,.02,.26,this.head);this.jaw=this.group(0,-.22,0,this.head),this.box(.44,.1,.44,s,0,0,0,this.jaw),this.h.toast("El Enderman Titán se alza… ¡no le mires a los ojos!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El Titán grita y convoca endermites!"),this.mite=1}tick(t,e,i){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;if(this.tpT-=t,this.rockT-=t,this.sweepT-=t,this.mite-=t,this.gazeCool-=t,this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*4),this.tpT<=0&&!e.dead){this.tpT=s===1?5.2:3.4,this.h.burst(this.pos.x,this.pos.y+4,this.pos.z,[.8,.3,1],30,6);const m=Math.random()*Math.PI*2,x=7+Math.random()*3,g=Math.floor(e.pos.x+Math.cos(m)*x),p=Math.floor(e.pos.z+Math.sin(m)*x),M=i.topY(g,p);M>0&&(this.pos.set(g+.5,M+1,p+.5),this.vel.set(0,0,0),this.sweepT=.8,this.h.burst(this.pos.x,this.pos.y+4,this.pos.z,[.8,.3,1],30,6),this.h.sound("pop",1))}if(this.sweepT>0?(this.armR.rotation.x=-2.2,this.armL.rotation.x=-2.2,this.sweepT-t<=0&&l<9&&!e.dead&&(this.h.hurtPlayer(12,r/l*11,a/l*11),this.h.sound("hit",1))):(this.armR.rotation.x+=(Math.sin(this.t*1.5)*.1-this.armR.rotation.x)*Math.min(1,t*5),this.armL.rotation.x=this.armR.rotation.x),this.rockT<=0&&l>5&&!e.dead){this.rockT=s===1?3.8:2.6;const m=s===1?1:2;for(let x=0;x<m;x++){const g=re(this.pos.x,this.pos.y+9,this.pos.z),p=re(e.pos.x+e.vel.x*.5,e.pos.y+1,e.pos.z+e.vel.z*.5).sub(g);p.x+=Be(-.08,.08)*x,this.shootProj(g,p,{speed:15,size:1.8,color:14211232,emissive:3153984,radius:2.4,ds:.42})}this.jaw.rotation.x=.8}else this.jaw.rotation.x*=.92;const o=e.lookDir(),h=this.pos.x-e.pos.x,f=this.pos.y+9.4-(e.pos.y+1.6),c=this.pos.z-e.pos.z,u=Math.hypot(h,f,c)||1;if((o.x*h+o.y*f+o.z*c)/u>.985&&u<45?this.gaze+=t:this.gaze=Math.max(0,this.gaze-t*2),this.gaze>1.6&&this.gazeCool<=0&&!e.dead&&(this.gaze=0,this.gazeCool=6,this.h.sound("roar",1),this.h.hurtPlayer(5,0,0),this.h.effect("levitate",3),this.h.toast("¡Su mirada te eleva!")),s===2&&this.mite<=0&&(this.mite=12,this.h.minions()<7))for(let m=0;m<3;m++)this.h.spawnMinion("endermite");this.walk(t,i,r,a,l,l>14?3.5:0);const d=Math.sin(this.t*3)*.25;this.legL.rotation.x=d,this.legR.rotation.x=-d,this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class v_ extends vi{constructor(t,e,i){super(t,e,i,{name:"SEÑOR DEL VACÍO",type:"voidlord",maxHp:300,hitbox:{hx:2,hy:2.2,hz:2,oy:0},scale:1.8,burstColor:[.5,.1,.9]}),this.rifts=[],this.riftT=3,this.laserT=6,this.charge=0,this.tpT=9,this.minionT=14;const s=this.mat(459790),r=this.mat(11555071,0,!0),a=this.mat(2363448,1574960),l=this.group(0,0,0);l.rotation.set(.6,.6,0),this.core=l,this.box(2.4,2.4,2.4,s,0,0,0,l),this.box(2.6,.14,2.6,r,0,0,0,l),this.box(.14,2.6,2.6,r,0,0,0,l),this.box(2.6,2.6,.14,r,0,0,0,l),this.eye=this.box(.9,.9,.2,this.mat(16736511,0,!0),0,0,1.3),this.body.add(this.eye),this.orbs=[];for(let o=0;o<5;o++){const h=this.box(.5,1.1,.5,a,0,0,0);h.rotation.z=.5,this.orbs.push(h)}this.laser=new At(new Ln(.1,.1,1,6),new Me({color:13660415,transparent:!0,opacity:0,fog:!1,depthWrite:!1})),t.add(this.laser),this.extra.push(this.laser),this.h.toast("El Señor del Vacío abre grietas bajo tus pies… ¡muévete!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡El vacío se desborda! Su gravedad te atrae")}tick(t,e,i){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1,o=16;if(l>o+2?(this.pos.x+=r/l*4*t,this.pos.z+=a/l*4*t):l<o-5&&(this.pos.x-=r/l*3*t,this.pos.z-=a/l*3*t),this.pos.y+=(e.pos.y+7-this.pos.y)*Math.min(1,t*.9),this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*3),this.root.position.set(this.pos.x,this.pos.y+Math.sin(this.t*1.2)*.6,this.pos.z),this.root.rotation.y=this.yaw,this.core.rotation.y+=t*.8,this.core.rotation.x+=t*.3,this.orbs.forEach((d,m)=>{const x=this.t*1.1+m/5*Math.PI*2;d.position.set(Math.cos(x)*2.8,Math.sin(this.t*2+m)*.6,Math.sin(x)*2.8),d.rotation.y=x}),this.riftT-=t,this.riftT<=0&&!e.dead){this.riftT=s===1?4.2:2.8;const d=s===1?1:2;for(let m=0;m<d;m++){const x=e.pos.x+(m?Be(-5,5):0),g=e.pos.z+(m?Be(-5,5):0),p=new At(new Ln(3,3,.25,24),new Me({color:8401151,transparent:!0,opacity:.25,fog:!1,depthWrite:!1})),M=i.topY(Math.floor(x),Math.floor(g));p.position.set(x,(M>0?M:e.pos.y-1)+1.2,g),this.scene.add(p),this.rifts.push({x,z:g,y:p.position.y,t:-1.2,m:p,tick:0})}}for(let d=this.rifts.length-1;d>=0;d--){const m=this.rifts[d];m.t+=t,m.t<0?m.m.material.opacity=.18+Math.sin(this.t*14)*.08:(m.m.material.opacity=.7,m.m.material.color.setHex(1706032),m.tick-=t,m.tick<=0&&(m.tick=.45,this.h.burst(m.x+Be(-2,2),m.y,m.z+Be(-2,2),[.6,.2,1],5,3)),Math.hypot(e.pos.x-m.x,e.pos.z-m.z)<3.1&&Math.abs(e.pos.y+.5-m.y)<2.2&&!e.dead&&(m.dmgT=(m.dmgT||0)-t,m.dmgT<=0&&(m.dmgT=.5,this.h.hurtPlayer(3,0,0),this.h.effect("levitate",2))),m.t>5&&(this.scene.remove(m.m),this.rifts.splice(d,1)))}this.laserT-=t;const h=re(this.pos.x,this.pos.y,this.pos.z),f=re(e.pos.x,e.pos.y+1,e.pos.z),c=f.clone().sub(h),u=c.length();if(c.normalize(),this.charge>0){const d=s===1?2.1:1.5,m=1-this.charge/d;this.charge-=t,this.laser.material.opacity=.2+m*.7,this.laser.scale.set(.5+m*3,u,.5+m*3),this.laser.position.copy(h).add(f).multiplyScalar(.5),this.laser.quaternion.setFromUnitVectors(re(0,1,0),c),this.charge<=0&&(this.laser.material.opacity=0,this.h.sound("explode",.7),!i.raycast(h,c,u)&&!e.dead&&this.h.hurtPlayer(10,c.x*6,c.z*6),this.laserT=s===1?6.5:4)}else this.laser.material.opacity=0,this.laserT<=0&&u<45&&!e.dead&&(this.charge=s===1?2.1:1.5,this.h.sound("hiss",.7));if(s===2&&u<36&&(e.push.x=(this.pos.x-e.pos.x)/l*3.2,e.push.z=(this.pos.z-e.pos.z)/l*3.2),this.tpT-=t,this.tpT<=0&&!e.dead){this.tpT=s===1?10:7,this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.6,.2,1],30,6);const d=Math.random()*Math.PI*2;this.pos.set(e.pos.x+Math.cos(d)*16,e.pos.y+8,e.pos.z+Math.sin(d)*16),this.h.burst(this.pos.x,this.pos.y,this.pos.z,[.6,.2,1],30,6),this.h.sound("pop",1)}s===2&&(this.minionT-=t,this.minionT<=0&&(this.minionT=15,this.h.minions()<6&&(this.h.spawnMinion("shulker"),this.h.spawnMinion("shulker"))))}dispose(){for(const t of this.rifts)this.scene.remove(t.m);this.rifts=[],super.dispose()}}class M_ extends vi{constructor(t,e,i){super(t,e,i,{name:"CREEPER TITÁN",type:"creepertitan",maxHp:320,hitbox:{hx:.6,hy:1.8,hz:.6,oy:1.8},scale:2.6,burstColor:[.3,.9,.3]}),this.hw=1.15,this.hh=9,this.fuse=0,this.stun=0,this.mT=12,this.walkA=0,this.green=this.mat(5154894,1060880),this.green2=this.mat(4099646,532488),this.legs=[[-.28,.3],[.28,.3],[-.28,-.3],[.28,-.3]].map(([h,f])=>{const c=this.group(h,.9,f);return this.box(.5,.9,.5,this.green2,0,-.45,0,c),c}),this.box(1,1.6,.6,this.green,0,1.7,0);const s=document.createElement("canvas");s.width=s.height=8;const r=s.getContext("2d");r.fillStyle="#4ea84e",r.fillRect(0,0,8,8),r.fillStyle="#0c1a0c",r.fillRect(1,2,2,2),r.fillRect(5,2,2,2),r.fillRect(3,4,2,2),r.fillRect(2,5,1,2),r.fillRect(5,5,1,2);const a=new Oi(s);a.magFilter=pe,a.minFilter=pe,a.generateMipmaps=!1,a.colorSpace=ti;const l=new ui({map:a,emissive:1060880});this.flashMats.push(l);const o=new At(new Jt(1,1,1),[this.green,this.green,this.green,this.green,l,this.green]);o.position.set(0,3.1,0),this.body.add(o),this.head=o,this.h.toast("¡El Creeper Titán sisea! Aléjate cuando se hinche")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡Un rayo lo carga! Su explosión será colosal"),this.h.strikeNear(this.pos.x,this.pos.z),this.green.emissive.setHex(1061119),this.green2.emissive.setHex(532672),this.flashMats.forEach(t=>t.userData.baseE=void 0)}damageMul(){return this.stun>0?1.8:1}tick(t,e,i){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*3),this.mT-=t;let o=s===1?2.8:3.6;if(this.stun>0)this.stun-=t,o=0,this.root.rotation.z=Math.sin(this.t*20)*.02;else if(this.fuse>0){this.fuse-=t,o=.8;const f=s===1?3.2:2.2,c=1-this.fuse/f;this.body.scale.setScalar(1+c*.28),this.flash=Math.floor(this.fuse*10)%2===0?.12:0,Math.floor(c*20)%4===0&&this.h.sound("hiss",.3),this.fuse<=0&&(this.body.scale.setScalar(1),this.h.explode(this.pos.x,this.pos.y+3.2,this.pos.z,s===1?9:12,.95),this.h.burst(this.pos.x,this.pos.y+3,this.pos.z,[1,.7,.2],60,12),this.stun=3.6,this.h.toast("¡Está aturdido! Golpéalo ahora"))}else l<15&&!e.dead&&(this.fuse=s===1?3.2:2.2);this.walk(t,i,r,a,l,o),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.1;const h=Math.sin(this.walkA)*.5;this.legs.forEach((f,c)=>f.rotation.x=c%2?-h:h),this.mT<=0&&this.stun<=0&&(this.mT=14,this.h.minions()<6&&(this.h.spawnMinion("creeper"),this.h.spawnMinion("creeper"))),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}class y_ extends vi{constructor(t,e,i){super(t,e,i,{name:"GÓLEM COLOSAL",type:"colossus",maxHp:420,hitbox:{hx:1.8,hy:2.1,hz:.8,oy:2.1},scale:2,burstColor:[.8,.8,.8]}),this.hw=1.5,this.hh=8,this.state="walk",this.timer=3,this.poundT=6,this.rockT=7,this.novaT=9,this.walkA=0;const s=this.mat(13158600,1052688),r=this.mat(10132122),a=this.mat(4880954);this.legL=this.group(-.4,1.4,0),this.box(.7,1.4,.7,r,0,-.7,0,this.legL),this.legR=this.group(.4,1.4,0),this.box(.7,1.4,.7,r,0,-.7,0,this.legR),this.box(1.9,1.6,1.1,s,0,2.2,0),this.box(1.2,.8,.9,r,0,1.4,0);for(const[l,o]of[[-.5,2.6],[.6,2]])this.box(.4,.8,.12,a,l,o,.58);this.armL=this.group(-1.2,2.9,0),this.box(.6,2.4,.6,s,0,-1.2,0,this.armL),this.box(.8,.8,.8,r,0,-2.5,0,this.armL),this.armR=this.group(1.2,2.9,0),this.box(.6,2.4,.6,s,0,-1.2,0,this.armR),this.box(.8,.8,.8,r,0,-2.5,0,this.armR),this.head=this.group(0,3.4,.1),this.box(.8,.9,.8,s,0,.3,0,this.head),this.box(.2,.4,.25,r,0,.2,.5,this.head),this.eyes=[-1,1].map(l=>this.box(.18,.1,.04,this.mat(15790208,0,!0),l*.2,.5,.42,this.head)),this.h.toast("El Gólem Colosal despierta: ¡salta sus ondas de choque!")}phaseFor(t){return t>.5?1:2}onPhase(){this.h.sound("roar",1),this.h.toast("¡Sus ojos arden en rojo!"),this.eyes.forEach(t=>t.material.color.setHex(16719904)),this.novaT=1.5}damageMul(){return .85}tick(t,e,i){const s=this.phase,r=e.pos.x-this.pos.x,a=e.pos.z-this.pos.z,l=Math.hypot(r,a)||1;this.timer-=t,this.poundT-=t,this.rockT-=t,this.novaT-=t,this.yaw+=ri(Math.atan2(r,a)-this.yaw)*Math.min(1,t*3);let o=s===1?2.4:3.2;if(this.state==="walk")if(this.timer<=0&&l<8.5&&!e.dead)this.state="punch",this.timer=.8;else if(this.poundT<=0&&l<18)this.state="pound",this.timer=1.1,this.poundT=s===1?7:4.5;else if(this.rockT<=0&&l>9){this.rockT=s===1?7:4.5;const f=re(this.pos.x,this.pos.y+6,this.pos.z);this.shootProj(f,re(e.pos.x,e.pos.y+1,e.pos.z).sub(f),{speed:14,size:1.6,color:9079434,emissive:2105376,radius:2.2,ds:.4}),this.armR.rotation.x=-2.6}else s===2&&this.novaT<=0&&this.onGround&&(this.novaT=8,this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:20,speed:13,dmg:9,color:14737663}),this.h.sound("roar",.7));else this.state==="punch"?(o=0,this.armR.rotation.x=-2.8*Math.min(1,(.8-this.timer)*1.8),this.timer<=0&&(this.state="walk",this.timer=s===1?2.4:1.6,l<9.5&&!e.dead&&this.h.hurtPlayer(14,r/l*13,a/l*13),this.h.sound("hit",1),this.armR.rotation.x=.8)):this.state==="pound"&&(o=0,this.armL.rotation.x=this.armR.rotation.x=-3*Math.min(1,(1.1-this.timer)*1.2),this.timer<=0&&(this.state="walk",this.timer=1.4,this.armL.rotation.x=this.armR.rotation.x=.7,this.h.sound("explode",.8),this.h.burst(this.pos.x,this.pos.y+.4,this.pos.z,[.6,.6,.6],36,9),this.addWave(this.pos.x,this.pos.y,this.pos.z,{max:s===1?16:22,speed:12,dmg:10,color:16777215})));this.walk(t,i,r,a,l,o),this.walkA+=t*Math.hypot(this.vel.x,this.vel.z)*1.3;const h=Math.sin(this.walkA)*.5;this.legL.rotation.x=h,this.legR.rotation.x=-h,this.state==="walk"&&(this.armL.rotation.x+=(-h*.6-this.armL.rotation.x)*Math.min(1,t*5),this.armR.rotation.x+=(h*.6-this.armR.rotation.x)*Math.min(1,t*5)),this.root.position.copy(this.pos),this.root.rotation.y=this.yaw}}const er={storm:{name:"Tormenta Wither",color:"#b060ff",hp:360,desc:"Colosal masa con tres cabezas. Rayo tractor, cráneos explosivos y un bloque de comandos como punto débil.",icon:"🌀"},dragon:{name:"Ender Dragon",color:"#e040ff",hp:300,desc:"Vuela en círculos, pica en picado y lanza aliento. Destruye sus 4 cristales para poder herirlo.",icon:"🐉",make:(n,t,e,i)=>new a_(n,t,e,i),up:16},wither:{name:"Wither",color:"#9aa8c8",hp:300,desc:"Lanza cráneos negros que envenenan. Con poca vida se acoraza y te persigue de cerca.",icon:"💀",make:(n,t,e)=>new l_(n,t,e),up:8},warden:{name:"Warden",color:"#3be8c8",hp:360,desc:"Ciego pero letal. Golpes devastadores y explosión sónica a distancia. Oscurece la pantalla.",icon:"👁",make:(n,t,e)=>new h_(n,t,e),up:0,ground:!0},guardian:{name:"Guardián Ancestral",color:"#70fff0",hp:240,desc:"Su láser carga y causa fatiga de minería. Sus espinas devuelven daño al golpearlo.",icon:"🐟",make:(n,t,e)=>new c_(n,t,e),up:6}};Object.assign(er,{ravager:{name:"Devastador",color:"#b09070",hp:280,desc:"Bestia blindada que ruge y embiste arrasando todo. Tras cada embestida queda aturdido: ¡ataca entonces!",icon:"🐗",make:(n,t,e)=>new f_(n,t,e),ground:!0,dist:16},evoker:{name:"Invocador",color:"#e0c040",hp:220,desc:"Hechicero que se teletransporta, lanza hileras de colmillos y llama a vex voladores (se pueden golpear).",icon:"🧙",make:(n,t,e)=>new u_(n,t,e),up:4,dist:14},ghast:{name:"Ghast Gigante",color:"#f4f4f4",hp:200,desc:"Flota llorando y escupe enormes bolas de fuego. ¡Golpéalas para devolvérselas y hacerle un daño brutal!",icon:"👻",make:(n,t,e)=>new d_(n,t,e),up:14,dist:26},herobrine:{name:"Herobrine",color:"#ffffff",hp:400,desc:"Ojos blancos, teletransportes a tu espalda, rayos y oscuridad. Con poca vida levita. El jefe final.",icon:"👤",make:(n,t,e)=>new p_(n,t,e),ground:!0,dist:14},slimeking:{name:"Rey Slime",color:"#60e060",hp:260,desc:"Gigantesco, salta y aplasta con ondas expansivas. Se divide en slimes al perder vida.",icon:"🟢",make:(n,t,e)=>new m_(n,t,e),ground:!0,dist:18}});Object.assign(er,{blazeking:{name:"Rey Blaze",color:"#ff9a20",hp:280,desc:"Señor del fuego del Nether: abanicos de bolas de fuego, ondas de llamas que hay que saltar y blazes de refuerzo.",icon:"🔥",make:(n,t,e)=>new g_(n,t,e),up:8,dist:20},piglinking:{name:"Rey Piglin",color:"#e8c040",hp:340,desc:"Hacha gigante, saltos que parten el suelo, torbellino de oro y una guardia de piglins.",icon:"🪓",make:(n,t,e)=>new x_(n,t,e),ground:!0,dist:16},endertitan:{name:"Enderman Titán",color:"#c060ff",hp:380,desc:"Gigantesco: se teletransporta, barre con los brazos y lanza rocas. ¡No le mires a los ojos!",icon:"🕴",make:(n,t,e)=>new __(n,t,e),ground:!0,dist:24},voidlord:{name:"Señor del Vacío",color:"#a050ff",hp:300,desc:"Abre grietas que dañan y elevan, dispara un láser con carga y su gravedad te arrastra en la fase final.",icon:"🌀",make:(n,t,e)=>new v_(n,t,e),up:6,dist:20},creepertitan:{name:"Creeper Titán",color:"#60e060",hp:320,desc:"Se hincha y explota con un radio colosal. Tras estallar queda aturdido: es tu momento.",icon:"💥",make:(n,t,e)=>new M_(n,t,e),ground:!0,dist:30},colossus:{name:"Gólem Colosal",color:"#d0d0e0",hp:420,desc:"Puñetazos devastadores, golpes al suelo que lanzan ondas de choque y rocas. Furia roja en la fase 2.",icon:"🗿",make:(n,t,e)=>new y_(n,t,e),ground:!0,dist:22}});const S_=["storm","dragon","wither","warden","guardian","ravager","evoker","ghast","herobrine","slimeking","colossus","creepertitan","blazeking","piglinking","endertitan","voidlord"],Ns=[{id:"logs",group:"Aprendiz",title:"Primeros pasos",desc:"Recoge 3 troncos",ev:"collect",target:I.LOG,n:3,reward:[[D.APPLE,4]],xp:8},{id:"table",group:"Aprendiz",title:"Carpintero",desc:"Fabrica una mesa de crafteo",ev:"craft",target:I.TABLE,n:1,reward:[[I.PLANKS,16]],xp:8},{id:"pick",group:"Aprendiz",title:"Minero",desc:"Fabrica un pico de piedra",ev:"craft",target:111,n:1,reward:[[D.COAL,8]],xp:10},{id:"torch",group:"Aprendiz",title:"Luz en la oscuridad",desc:"Fabrica 4 antorchas",ev:"craft",target:I.TORCH,n:4,reward:[[D.COAL,8]],xp:10},{id:"iron",group:"Aprendiz",title:"Fundidor",desc:"Consigue un lingote de hierro",ev:"collect",target:D.IRON,n:1,reward:[[D.COAL,16]],xp:15},{id:"diamond",group:"Aprendiz",title:"¡Diamantes!",desc:"Consigue un diamante",ev:"collect",target:D.DIAMOND,n:1,reward:[[D.GOLD,6]],xp:25},{id:"k_zombie",group:"Cazador",title:"Cazador de zombis",desc:"Derrota 3 zombis",ev:"kill",target:"zombie",n:3,reward:[[D.STEAK,4]],xp:15},{id:"k_skeleton",group:"Cazador",title:"Huesos rotos",desc:"Derrota 3 esqueletos",ev:"kill",target:"skeleton",n:3,reward:[[D.STEAK,4]],xp:18},{id:"k_creeper",group:"Cazador",title:"Silencio…",desc:"Derrota 2 creepers",ev:"kill",target:"creeper",n:2,reward:[[D.GOLD,4]],xp:18},{id:"k_spider",group:"Cazador",title:"Aracnofobia",desc:"Derrota 2 arañas",ev:"kill",target:"spider",n:2,reward:[[D.GOLD,4]],xp:16},{id:"pearl",group:"Cazador",title:"Ojos que miran",desc:"Consigue una perla de Ender",ev:"collect",target:D.PEARL,n:1,reward:[[D.DIAMOND,3]],xp:30},{id:"obsidian",group:"Dimensiones",title:"Cristal volcánico",desc:"Consigue obsidiana (8 adoquines + 1 diamante = 2)",ev:"collect",target:I.OBSIDIAN,n:1,reward:[[D.COAL,12]],xp:20},{id:"d_nether",group:"Dimensiones",title:"Una puerta al infierno",desc:"Entra al Nether (marco 4x5 de obsidiana + encendedor)",ev:"dim",target:"nether",n:1,reward:[[D.GOLD,8],[D.DIAMOND,4]],xp:80},{id:"k_blaze",group:"Dimensiones",title:"Fuego cruzado",desc:"Derrota a 2 blazes",ev:"kill",target:"blaze",n:2,reward:[[D.DIAMOND,4]],xp:40},{id:"k_piglin",group:"Dimensiones",title:"Oro maldito",desc:"Derrota a 3 piglins zombificados",ev:"kill",target:"piglin",n:3,reward:[[D.GOLD,8]],xp:35},{id:"k_wskel",group:"Dimensiones",title:"Huesos negros",desc:"Derrota a 2 esqueletos Wither",ev:"kill",target:"witherskeleton",n:2,reward:[[D.DIAMOND,4]],xp:50},{id:"k_ghast",group:"Dimensiones",title:"Lágrimas de fuego",desc:"Derrota a un Ghast",ev:"kill",target:"ghast",n:1,reward:[[D.GOLD,10]],xp:50},{id:"k_shulker",group:"Dimensiones",title:"Caja sorpresa",desc:"Derrota a 2 shulkers",ev:"kill",target:"shulker",n:2,reward:[[D.PEARL,2]],xp:60},{id:"d_end",group:"Dimensiones",title:"El fin de todo",desc:"Entra al End (12 marcos con ojo de Ender)",ev:"dim",target:"end",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:150},{id:"b_storm",group:"Jefes",title:"Domador de la tormenta",desc:"Derrota a la Tormenta Wither",ev:"boss",target:"storm",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:150},{id:"b_dragon",group:"Jefes",title:"¿El final?",desc:"Derrota al Ender Dragon",ev:"boss",target:"dragon",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:150},{id:"b_wither",group:"Jefes",title:"Más allá de los huesos",desc:"Derrota al Wither",ev:"boss",target:"wither",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:150},{id:"b_warden",group:"Jefes",title:"Silencio absoluto",desc:"Derrota al Warden",ev:"boss",target:"warden",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:150},{id:"b_guardian",group:"Jefes",title:"La mirada del océano",desc:"Derrota al Guardián Ancestral",ev:"boss",target:"guardian",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:150},{id:"b_ravager",group:"Jefes",title:"Contra la embestida",desc:"Derrota al Devastador",ev:"boss",target:"ravager",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:150},{id:"b_evoker",group:"Jefes",title:"Colmillos y vex",desc:"Derrota al Invocador",ev:"boss",target:"evoker",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:150},{id:"b_ghast",group:"Jefes",title:"Devuélvesela",desc:"Derrota al Ghast Gigante",ev:"boss",target:"ghast",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:150},{id:"b_slime",group:"Jefes",title:"Aplastado",desc:"Derrota al Rey Slime",ev:"boss",target:"slimeking",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:150},{id:"b_hero",group:"Jefes",title:"Más allá del mito",desc:"Derrota a Herobrine",ev:"boss",target:"herobrine",n:1,reward:[[D.STAR,2],[D.DIAMOND,16]],xp:250},{id:"b_colossus",group:"Jefes",title:"Hierro contra hierro",desc:"Derrota al Gólem Colosal",ev:"boss",target:"colossus",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:160},{id:"b_creepert",group:"Jefes",title:"Silencio… colosal",desc:"Derrota al Creeper Titán",ev:"boss",target:"creepertitan",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:160},{id:"b_blazek",group:"Jefes",title:"Rey de las llamas",desc:"Derrota al Rey Blaze",ev:"boss",target:"blazeking",n:1,reward:[[D.STAR,1],[D.DIAMOND,8]],xp:160},{id:"b_piglink",group:"Jefes",title:"Corona de oro",desc:"Derrota al Rey Piglin",ev:"boss",target:"piglinking",n:1,reward:[[D.STAR,2],[D.DIAMOND,10]],xp:180},{id:"b_endert",group:"Jefes",title:"No mires a los ojos",desc:"Derrota al Enderman Titán",ev:"boss",target:"endertitan",n:1,reward:[[D.STAR,2],[D.DIAMOND,12]],xp:200},{id:"b_voidl",group:"Jefes",title:"Al borde del vacío",desc:"Derrota al Señor del Vacío",ev:"boss",target:"voidlord",n:1,reward:[[D.STAR,2],[D.DIAMOND,12]],xp:200},{id:"master",group:"Jefes",title:"★ LEYENDA DE LOS JEFES ★",desc:"Derrota a los 16 jefes de Minecraft",ev:"bossall",target:null,n:16,reward:[[D.STAR,5],[D.DIAMOND,32],[D.GOLD,32]],xp:500}];class b_{constructor(t){this.h=t,this.progress={},this.done={},this.bosses=new Set}event(t,e,i=1){for(const s of Ns)this.done[s.id]||s.ev!==t||s.target!==null&&s.target!==e||(this.progress[s.id]=Math.min(s.n,(this.progress[s.id]||0)+i),this.progress[s.id]>=s.n&&this.complete(s));if(t==="boss"){this.bosses.add(e);const s=Ns.find(r=>r.id==="master");this.done.master||(this.progress.master=this.bosses.size,this.bosses.size>=s.n&&this.complete(s))}}complete(t){this.done[t.id]=!0,this.progress[t.id]=t.n,this.h.reward(t.reward),this.h.xp(t.xp),this.h.sound("craft"),this.h.toast(t.id==="master"?"🏆 ¡ERES UNA LEYENDA! Has derrotado a todos los jefes":`✔ Misión completada: ${t.title}`)}active(t=3){return Ns.filter(e=>!this.done[e.id]).slice(0,t)}total(){return Ns.length}completed(){return Ns.filter(t=>this.done[t.id]).length}toJSON(){return{progress:this.progress,done:this.done,bosses:[...this.bosses]}}load(t){t&&(this.progress=t.progress||{},this.done=t.done||{},this.bosses=new Set(t.bosses||[]))}}const mr=420,gr=24;class E_{constructor(t){this.pos=new Float32Array(mr*3),this.vel=new Float32Array(mr*3);for(let i=0;i<mr;i++)this.reset(i,!0);const e=new qe;e.setAttribute("position",new _i(new Float32Array(mr*3),3)),this.pts=new Ph(e,new ha({color:16747056,size:3,sizeAttenuation:!1,transparent:!0,opacity:.9,fog:!1,depthWrite:!1,blending:Rr})),this.pts.frustumCulled=!1,this.pts.visible=!1,t.add(this.pts),this.t=0}reset(t,e){this.pos[t*3]=(Math.random()-.5)*2*gr,this.pos[t*3+1]=e?(Math.random()-.5)*2*gr:-gr,this.pos[t*3+2]=(Math.random()-.5)*2*gr,this.vel[t*3]=(Math.random()-.5)*.6,this.vel[t*3+1]=.4+Math.random()*1.2,this.vel[t*3+2]=(Math.random()-.5)*.6}update(t,e,i){const s=i==="nether"||i==="end";if(this.pts.visible=s,!s)return;this.t+=t;const r=i==="nether",a=this.pts.geometry.attributes.position.array;this.pts.material.color.set(r?16742952:11567359),this.pts.material.size=r?3:2.5;for(let l=0;l<mr;l++){const o=l*3;this.pos[o]+=(this.vel[o]+Math.sin(this.t+l)*.3)*t,this.pos[o+1]+=this.vel[o+1]*(r?1:.5)*t,this.pos[o+2]+=(this.vel[o+2]+Math.cos(this.t*.8+l)*.3)*t,this.pos[o+1]>gr&&this.reset(l,!1),a[o]=e.position.x+this.pos[o],a[o+1]=e.position.y+this.pos[o+1],a[o+2]=e.position.z+this.pos[o+2]}this.pts.geometry.attributes.position.needsUpdate=!0}}const kn=.3,Ef=1.8,nl=1.62,wf=28,w_=8.6,T_=4.4,A_=7,R_=12;class C_{constructor(t,e){this.world=t,this.camera=e,this.pos=new L(0,40,0),this.vel=new L,this.yaw=0,this.pitch=0,this.onGround=!1,this.flying=!1,this.inWater=!1,this.headUnder=!1,this.keys=new Set,this.mode="survival",this.hp=20,this.food=20,this.air=10,this.fallStart=null,this.foodTimer=0,this.regenTimer=0,this.airTimer=0,this.starveTimer=0,this.invuln=0,this.dead=!1,this.stepDist=0,this.events={onHurt:null,onLand:null,onStep:null,onSplash:null,onDeath:null,onVoid:null},this.inLava=!1,this.spawn=new L,this.wind={x:0,z:0},this.push={x:0,y:0,z:0},this.effects={poison:0,fatigue:0,burn:0,levitate:0},this.poisonT=0,this.burnT=0}collides(t,e,i){const s=this.world;for(let r=Math.floor(e);r<=Math.floor(e+Ef-.001);r++)for(let a=Math.floor(i-kn);a<=Math.floor(i+kn);a++)for(let l=Math.floor(t-kn);l<=Math.floor(t+kn);l++)if(s.isSolid(l,r,a))return!0;return!1}intersectsBlock(t,e,i){return this.pos.x+kn>t&&this.pos.x-kn<t+1&&this.pos.y+Ef>e&&this.pos.y<e+1&&this.pos.z+kn>i&&this.pos.z-kn<i+1}get eye(){return new L(this.pos.x,this.pos.y+nl,this.pos.z)}lookDir(){return new L(-Math.sin(this.yaw)*Math.cos(this.pitch),Math.sin(this.pitch),-Math.cos(this.yaw)*Math.cos(this.pitch))}damage(t,e=0,i=0){this.mode==="creative"||this.dead||this.invuln>0||(this.hp=Math.max(0,this.hp-t),this.invuln=.5,this.vel.x+=e,this.vel.z+=i,(e||i)&&(this.vel.y=Math.max(this.vel.y,5)),this.events.onHurt&&this.events.onHurt(t),this.hp<=0&&(this.dead=!0,this.events.onDeath&&this.events.onDeath()))}heal(t){this.hp=Math.min(20,this.hp+t)}eat(t){this.food=Math.min(20,this.food+t)}respawn(){this.hp=20,this.food=20,this.air=10,this.dead=!1,this.invuln=2,this.effects.poison=0,this.effects.fatigue=0,this.effects.burn=0,this.effects.levitate=0,this.pos.copy(this.spawn),this.vel.set(0,0,0),this.fallStart=null}update(t){if(t=Math.min(t,.05),this.dead){this.camera.position.set(this.pos.x,this.pos.y+.4,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,.6,"YXZ");return}const e=this.keys,i=this.world;this.invuln=Math.max(0,this.invuln-t);const s=Math.floor(this.pos.x),r=Math.floor(this.pos.z),a=this.inWater;this.inWater=i.isLiquid(s,Math.floor(this.pos.y+.3),r),this.inLava=i.getBlock(s,Math.floor(this.pos.y+.3),r)===I.LAVA||i.getBlock(s,Math.floor(this.pos.y+1.2),r)===I.LAVA,this.inLava&&this.mode==="survival"&&(this.effects.burn=Math.max(this.effects.burn,6),this.damage(4));const l=i.getBlock(s,Math.floor(this.pos.y-.15),r)===I.SOUL_SAND;this.headUnder=i.isLiquid(s,Math.floor(this.pos.y+nl),r),this.inWater&&!a&&this.vel.y<-4&&this.events.onSplash&&this.events.onSplash();const o=(e.has("KeyW")?1:0)-(e.has("KeyS")?1:0),h=(e.has("KeyD")?1:0)-(e.has("KeyA")?1:0),f=e.has("ShiftLeft")&&o>0&&!(this.mode==="survival"&&this.food<=6);let c=this.flying?R_:f?A_:T_;this.inWater&&!this.flying&&(c*=.6),l&&!this.flying&&(c*=.55);const u=Math.sin(this.yaw),d=Math.cos(this.yaw);let m=-u*o+d*h,x=-d*o-u*h;const g=Math.hypot(m,x);g>0&&(m/=g,x/=g),this.vel.x=m*c+(this.inWater?0:this.wind.x),this.vel.z=x*c+(this.inWater?0:this.wind.z),this.flying?(this.vel.y=((e.has("Space")?1:0)-(e.has("KeyQ")?1:0))*c,this.fallStart=null):this.inWater?(this.vel.y-=wf*.25*t,this.vel.y=Math.max(this.vel.y,-3)*(1-2*t),e.has("Space")&&(this.vel.y=Math.min(this.vel.y+22*t,3.6)),this.fallStart=null):(this.vel.y-=wf*t,this.vel.y<-50&&(this.vel.y=-50),e.has("Space")&&this.onGround&&(this.vel.y=w_,this.onGround=!1)),this.vel.x+=this.push.x,this.vel.z+=this.push.z,this.vel.y+=this.push.y*t,this.effects.levitate>0&&(this.effects.levitate-=t,this.vel.y=Math.min(this.vel.y+24*t,3.2),this.fallStart=null);const p=this.onGround,M=2,y=t/M;this.onGround=!1;const _=this.pos.x,P=this.pos.z;for(let T=0;T<M;T++)for(const w of["x","z","y"]){const C=this.vel[w]*y;C!==0&&(this.pos[w]+=C,this.collides(this.pos.x,this.pos.y,this.pos.z)&&(this.pos[w]-=C,w==="y"&&this.vel.y<0&&(this.onGround=!0),this.vel[w]=0))}if(!this.onGround&&!this.inWater&&!this.flying&&(this.fallStart===null||this.pos.y>this.fallStart)&&(this.fallStart=this.pos.y),this.onGround&&!p&&this.fallStart!==null){const T=this.fallStart-this.pos.y;T>3&&this.mode==="survival"&&this.damage(Math.floor(T-3)),T>1.2&&this.events.onLand&&this.events.onLand(T),this.fallStart=null}if(this.onGround&&(this.fallStart=null),this.onGround&&!this.flying&&(this.stepDist+=Math.hypot(this.pos.x-_,this.pos.z-P),this.stepDist>(f?2.2:1.7)&&(this.stepDist=0,this.events.onStep&&this.events.onStep())),this.pos.y<-30&&(this.events.onVoid?this.events.onVoid():(this.pos.y=70,this.vel.set(0,0,0),this.damage(4))),this.effects.fatigue>0&&(this.effects.fatigue-=t),this.effects.burn>0&&(this.inWater&&!this.inLava?this.effects.burn=0:(this.effects.burn-=t,this.burnT+=t,this.burnT>=.8&&(this.burnT=0,this.mode==="survival"&&this.damage(1)))),this.effects.poison>0&&(this.effects.poison-=t,this.poisonT+=t,this.poisonT>=1&&(this.poisonT=0,this.mode==="survival"&&this.hp>1&&(this.hp-=1,this.events.onHurt&&this.events.onHurt(1)))),this.mode==="survival"){this.headUnder?(this.airTimer+=t,this.airTimer>=1&&(this.airTimer=0,this.air>0?this.air--:this.damage(2))):(this.airTimer=0,this.air=Math.min(10,this.air+t*6));const T=Math.hypot(this.vel.x,this.vel.z)>.1;this.foodTimer+=t*(f?3:T?1:.25),this.foodTimer>22&&(this.foodTimer=0,this.food=Math.max(0,this.food-1)),this.regenTimer+=t,this.food>=18&&this.hp<20&&this.regenTimer>3?(this.regenTimer=0,this.heal(1),this.foodTimer+=6):this.food<=0&&this.regenTimer>4&&(this.regenTimer=0,this.hp>1&&this.damage(1))}else this.air=10,this.hp=20,this.food=20;this.camera.position.set(this.pos.x,this.pos.y+nl,this.pos.z),this.camera.rotation.set(this.pitch,this.yaw,0,"YXZ")}}class L_{constructor(){this.slots=Array(36).fill(null),this.selected=0}held(){return this.slots[this.selected]}add(t,e=1){const i=Mn(t);for(const s of this.slots)if(s&&s.id===t&&s.n<i){const r=Math.min(e,i-s.n);if(s.n+=r,e-=r,!e)return 0}for(let s=0;s<36&&e>0;s++)if(!this.slots[s]){const r=Math.min(e,i);this.slots[s]={id:t,n:r,d:0},e-=r}return e}canAdd(t){const e=Mn(t);return this.slots.some(i=>!i||i.id===t&&i.n<e)}consumeHeld(t=1){const e=this.slots[this.selected];e&&(e.n-=t,e.n<=0&&(this.slots[this.selected]=null))}wearHeld(t=1){const e=this.slots[this.selected],i=us(e);return i?(e.d=(e.d||0)+t,e.d>=i.dur?(this.slots[this.selected]=null,!0):!1):!1}toJSON(){return{slots:this.slots,selected:this.selected}}load(t){t&&(this.slots=t.slots,this.selected=t.selected||0)}}const P_=600,Tf=new yt(1,1,1),D_=new yt(2316488),I_=new yt(7370367),U_=new yt(14542591),N_=new yt(8900331),O_=new yt(461596),z_=new yt(16747088),sl=(n,t,e)=>{const i=Math.max(0,Math.min(1,(e-n)/(t-n)));return i*i*(3-2*i)};function F_(){const e=Array.from({length:64},()=>Math.random()),i=(o,h)=>e[(h%8+8)%8*8+(o%8+8)%8],s=document.createElement("canvas");s.width=s.height=64;const r=s.getContext("2d"),a=r.createImageData(64,64);for(let o=0;o<64;o++)for(let h=0;h<64;h++){const f=h/64*8,c=o/64*8,u=Math.floor(f),d=Math.floor(c),m=f-u,x=c-d,g=m*m*(3-2*m),p=x*x*(3-2*x),M=(i(u,d)*(1-g)+i(u+1,d)*g)*(1-p)+(i(u,d+1)*(1-g)+i(u+1,d+1)*g)*p,y=(o*64+h)*4,_=M>.56?215:0;a.data[y]=a.data[y+1]=a.data[y+2]=255,a.data[y+3]=_}r.putImageData(a,0,0);const l=new Oi(s);return l.wrapS=l.wrapT=Ho,l.magFilter=pe,l.minFilter=pe,l.generateMipmaps=!1,l}function Af(n){const t=document.createElement("canvas");t.width=t.height=16,n(t.getContext("2d"));const e=new Oi(t);return e.magFilter=pe,e.minFilter=pe,e.generateMipmaps=!1,e}class B_{constructor(t,e,i){this.scene=t,this.camera=e,this.materials=i,this.time=.08,this.dim="overworld",this.daylight=1,this.wet=0,this.flash=0,this.cloudX=0,this.cloudZ=0,this.root=new ve,t.add(this.root),this.domeMat=new fi({side:gi,depthWrite:!1,depthTest:!1,fog:!1,uniforms:{top:{value:new yt(4884696)},hor:{value:new yt(10147056)}},vertexShader:"varying vec3 vP; void main(){ vP = position; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform vec3 top; uniform vec3 hor; varying vec3 vP; void main(){ float h = normalize(vP).y; float t = smoothstep(-0.02, 0.6, h); gl_FragColor = vec4(mix(hor, top, t), 1.0); }"}),this.dome=new At(new Dh(420,24,14),this.domeMat),this.dome.renderOrder=-30,this.root.add(this.dome);const s=document.createElement("canvas");s.width=s.height=128;const r=s.getContext("2d"),a=r.createRadialGradient(64,64,0,64,64,64);a.addColorStop(0,"rgba(255,240,180,0.9)"),a.addColorStop(.25,"rgba(255,200,110,0.35)"),a.addColorStop(1,"rgba(255,180,80,0)"),r.fillStyle=a,r.fillRect(0,0,128,128),this.glow=new yu(new Ch({map:new Oi(s),blending:Rr,transparent:!0,depthWrite:!1,depthTest:!1,fog:!1})),this.glow.scale.set(260,260,1),this.glow.renderOrder=-11,this.root.add(this.glow);const l=Af(u=>{u.fillStyle="#fff6b0",u.fillRect(0,0,16,16),u.fillStyle="#ffe14a",u.fillRect(2,2,12,12),u.fillStyle="#fffbe0",u.fillRect(5,5,6,6)}),o=Af(u=>{u.fillStyle="#e8ecf2",u.fillRect(0,0,16,16),u.fillStyle="#b8bfcc",u.fillRect(3,4,3,3),u.fillRect(9,8,4,3),u.fillRect(5,11,2,2)}),h=(u,d)=>{const m=new At(new An(d,d),new Me({map:u,transparent:!0,fog:!1,depthWrite:!1,depthTest:!1}));return m.renderOrder=-10,this.root.add(m),m};this.sun=h(l,60),this.moon=h(o,40);const f=new Float32Array(900*3);for(let u=0;u<900;u++){const d=Math.random()*2-1,m=Math.random()*Math.PI*2,x=Math.sqrt(1-d*d);f[u*3]=Math.cos(m)*x*300,f[u*3+1]=d*300,f[u*3+2]=Math.sin(m)*x*300}const c=new qe;c.setAttribute("position",new _i(f,3)),this.starMat=new ha({color:16777215,size:1.6,sizeAttenuation:!1,transparent:!0,fog:!1,depthWrite:!1}),this.stars=new Ph(c,this.starMat),this.stars.renderOrder=-11,this.root.add(this.stars),this.cloudTex=F_(),this.cloudMat=new Me({map:this.cloudTex,transparent:!0,fog:!1,depthWrite:!1,side:bi}),this.clouds=new At(new An(900,900),this.cloudMat),this.clouds.rotation.x=-Math.PI/2,t.add(this.clouds),this.cloudMat2=new Me({map:this.cloudTex.clone(),transparent:!0,fog:!1,depthWrite:!1,side:bi}),this.cloudMat2.map.needsUpdate=!0,this.clouds2=new At(new An(900,900),this.cloudMat2),this.clouds2.rotation.x=-Math.PI/2,t.add(this.clouds2),this.hemi=new h1(12572927,8022608,2),this.sunLight=new d1(16773853,2.8),this.shadowExt=64,this.shadowOn=!1,t.add(this.hemi,this.sunLight,this.sunLight.target),this.lightDir=new L(.5,1,.3).normalize(),this.sky=new yt,this.tint=new yt}setShadows(t,e,i){const s=this.sunLight,r=s.shadow.mapSize.x!==e||this.shadowExt!==i;if(this.shadowOn=t,this.shadowExt=i,t){s.shadow.mapSize.set(e,e);const a=s.shadow.camera;a.left=-i,a.right=i,a.top=i,a.bottom=-i,a.near=10,a.far=340,a.updateProjectionMatrix(),s.shadow.bias=-4e-4,s.shadow.normalBias=.35*(i/64)*(2048/e)**.5,s.shadow.radius=2,r&&s.shadow.map&&(s.shadow.map.dispose(),s.shadow.map=null)}}updateOther(t,e,i,s){const r=this.dim==="nether";this.daylight=0,this.wet=0,this.flash=0;const a=r?new yt(5903368):new yt(1838894),l=r?new yt(1836291):new yt(262666);s&&r&&(a.set(11024392),l.set(6297600)),this.sky.copy(r?new yt(3804166):new yt(1182236)),s&&r&&this.sky.set(11024392),this.scene.background=this.sky,this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:i*(r?.18:.5),this.scene.fog.far=s?r?5:18:i*(r?.75:1.1),this.domeMat.uniforms.hor.value.copy(a),this.domeMat.uniforms.top.value.copy(l),this.root.position.copy(this.camera.position),this.sun.visible=this.moon.visible=this.glow.visible=!1,this.clouds.visible=this.clouds2.visible=!1,this.stars.visible=!r,this.starMat.opacity=r?0:1,this.starMat.size=2.4,this.stars.rotation.y+=t*.01,this.hemi.color.set(r?16747098:11047167),this.hemi.groundColor.set(r?6955016:2628672),this.hemi.intensity=r?1.9:1.1,this.sunLight.color.set(r?16738864:10125567),this.sunLight.intensity=r?.35:.7,this.sunLight.castShadow=!1,this.lightDir.set(.3,1,.2).normalize(),this.sunLight.target.position.copy(e),this.sunLight.position.set(e.x+30,e.y+100,e.z+20)}setDimension(t){this.dim=t;const e=t==="overworld";this.sun.visible=this.moon.visible=this.glow.visible=e,this.clouds.visible=e,this.stars.visible=!0,this.starMat.size=1.6}update(t,e,i,s,r={x:0,z:0,s:.12}){if(this.dim!=="overworld")return this.updateOther(t,e,i,s);this.time=(this.time+t/P_)%1;const a=this.time*Math.PI*2,l=Math.sin(a),o=Math.cos(a),h=sl(-.12,.25,l),f=this.wet,c=this.flash;this.daylight=h*(1-.55*f),this.sky.copy(O_).lerp(N_,this.daylight);const u=Math.max(0,1-Math.abs(l)*4.5)*.7;this.sky.lerp(z_,u*(1-f)),f>0&&this.sky.lerp(I_.clone().multiplyScalar(.12+.88*h),f*.8),c>0&&this.sky.lerp(U_,c*.7),s&&this.sky.set(1718906).multiplyScalar(.4+this.daylight*.6),this.scene.background=this.sky;const d=h*(1-f);this.domeMat.uniforms.hor.value.copy(this.sky).lerp(Tf,.22*d),this.domeMat.uniforms.top.value.copy(this.sky).multiplyScalar(.7).lerp(D_,.3*d),this.scene.fog.color.copy(this.sky),this.scene.fog.near=s?.5:i*.6,this.scene.fog.far=s?18:i*(1-.3*f),s||(this.scene.fog.near=i*(.6-.25*f)),.2+.8*this.daylight;const m=sl(-.04,.3,l)*(1-.65*f),x=sl(0,-.3,l)*(1-.7*f),g=Math.max(0,1-Math.abs(l)*3.2)*(1-f),p=new L(o,l,.28).normalize(),M=l>-.04;this.lightDir.copy(M?p:p.clone().negate()),this.sunLight.color.setRGB(1,.95-.38*g,.88-.62*g),M||this.sunLight.color.setRGB(.55,.66,1),this.sunLight.intensity=(M?3.4*m:.6*x)+c*2.5,this.hemi.color.copy(this.sky).lerp(Tf,.6),this.hemi.groundColor.setRGB(.42,.36,.28).multiplyScalar(.4+.6*this.daylight),this.hemi.intensity=.3+2.5*this.daylight+.3*x+c*3;const y=this.shadowOn?2*this.shadowExt/Math.max(256,this.sunLight.shadow.mapSize.x):1,_=Math.round(e.x/y)*y,P=Math.round(e.y/y)*y,T=Math.round(e.z/y)*y;this.sunLight.target.position.set(_,P,T),this.sunLight.position.set(_+this.lightDir.x*160,P+this.lightDir.y*160,T+this.lightDir.z*160),this.sunLight.castShadow=this.shadowOn&&this.sunLight.intensity>.05,this.classic&&(this.sunLight.intensity=0,this.sunLight.castShadow=!1,this.hemi.color.set(16777215),this.hemi.groundColor.set(16777215),this.hemi.intensity=(.2+.8*this.daylight)*3.1+c*3),this.root.position.copy(this.camera.position);const w=220;this.sun.position.set(o*w,l*w,30),this.glow.position.set(o*w*.98,l*w*.98,30),this.glow.material.opacity=Math.max(0,Math.min(1,(l+.15)*1.6))*(1-f)*(s?0:1),this.moon.position.set(-o*w,-l*w,30),this.sun.lookAt(this.camera.position),this.moon.lookAt(this.camera.position),this.stars.rotation.z=a,this.starMat.opacity=Math.max(0,1-this.daylight*1.6)*(s?0:1)*(1-f),this.sun.material.opacity=this.moon.material.opacity=1-f*.95;const C=1.2+r.s*10;this.cloudX+=r.x/(r.s||1)*C*t,this.cloudZ+=r.z/(r.s||1)*C*t;const S=768,v=(.3+.7*h)*(1-.5*f);for(const[R,U,N,H]of[[this.clouds,this.cloudMat,150,1],[this.clouds2,this.cloudMat2,142,.7]])R.position.set(e.x,N,e.z),U.map.repeat.set(900/S,900/S),U.map.offset.set((e.x+this.cloudX*H)/S+(H<1?.37:0),-(e.z+this.cloudZ*H)/S),U.color.setScalar(v*(H<1?.8:1));this.cloudMat.opacity=.9,this.cloudMat2.opacity=Math.min(.95,f*1.1),this.clouds2.visible=f>.05}}const ue=n=>document.getElementById(n);function _n(n,t={}){const e=document.createElement("div");if(e.className="slot"+(t.active?" active":""),t.group&&(e.dataset.g=t.group,e.dataset.i=t.index),n){const i=document.createElement("img");if(i.src=zu(n.id),Du(n.id)&&(i.className="flat"),e.appendChild(i),e.title=ca(n.id).name,n.n>1){const r=document.createElement("span");r.className="n",r.textContent=n.n,e.appendChild(r)}const s=us(n);if(s&&n.d>0){const r=document.createElement("div");r.className="dur";const a=Math.max(0,1-n.d/s.dur);r.innerHTML=`<i style="width:${a*100}%;background:${a>.5?"#6f6":a>.2?"#fd4":"#f55"}"></i>`,e.appendChild(r)}}if(t.key){const i=document.createElement("span");i.className="k",i.textContent=t.key,e.appendChild(i)}return e}class k_{constructor(t){this.g=t,this.cursor=null,this.craft=[],this.size=2,this.isOpen=!1,this.toastT=0,this.furnace=null,this.sprites=H1();const e=ue("inv");e.addEventListener("mousedown",i=>this.onDown(i)),e.addEventListener("contextmenu",i=>i.preventDefault()),document.addEventListener("mousemove",i=>{const s=ue("cursorItem");s.style.left=i.clientX+"px",s.style.top=i.clientY+"px"})}toast(t){const e=ue("toast");e.textContent=t,e.style.opacity=1,clearTimeout(this.toastT),this.toastT=setTimeout(()=>e.style.opacity=0,1600)}renderHotbar(){const t=ue("hotbar");t.innerHTML="";for(let e=0;e<9;e++){const i=_n(this.g.inv.slots[e],{active:e===this.g.inv.selected,key:e+1});i.onclick=()=>{this.g.inv.selected=e,this.g.onSelect()},t.appendChild(i)}}renderStats(){const t=this.g.player,e=this.g.getMode()==="survival",i=this.sprites;ue("bars").style.visibility=e?"visible":"hidden";const s=(h,f)=>{let c="";for(let u=0;u<10;u++)c+=`<img class="hs" src="${f[h>=u*2+2?"full":h===u*2+1?"half":"empty"]}">`;return c},r=Math.ceil(t.hp),a=Math.ceil(t.food),l=r+","+a+","+Math.ceil(t.air)+","+t.headUnder+","+e+","+(r<=6?Math.floor(performance.now()/250)%2:0);if(l===this._statKey)return;this._statKey=l,ue("hearts").innerHTML=s(r,i.heart),ue("hearts").classList.toggle("low",r<=6),ue("food").innerHTML=s(a,i.food);const o=Math.ceil(t.air);ue("air").innerHTML=t.headUnder&&e?Array.from({length:10},(h,f)=>`<img class="hs" src="${o>f?i.bubble.full:i.bubble.empty}">`).join(""):""}open(t,e=null){this.furnace=t==="furnace"?e:null,t==="furnace"&&(t=2),this.size=t,this.craft=Array(t*t).fill(null),this.isOpen=!0;const i=this.g.getMode()==="creative";ue("inv").classList.remove("hidden"),ue("invTitle").textContent=this.furnace?"Horno":i?"Creativo":t===3?"Mesa de crafteo":"Inventario",ue("craftArea").classList.toggle("hidden",i||!!this.furnace),ue("furnaceArea").classList.toggle("hidden",!this.furnace),ue("paletteWrap").classList.toggle("hidden",!i||!!this.furnace),ue("craftGrid").style.gridTemplateColumns=`repeat(${t}, 46px)`,this.render()}close(){if(!this.isOpen)return;this.isOpen=!1,this.furnace=null;const t=e=>{if(!e)return;const i=this.g.inv.add(e.id,e.n);i&&this.g.dropItem(e.id,i)};this.craft.forEach(t),this.craft=[],t(this.cursor),this.cursor=null,ue("inv").classList.add("hidden"),ue("cursorItem").classList.add("hidden"),this.renderHotbar()}recipe(){const t=D1(this.craft.map(e=>e?e.id:0),this.size);return t?{id:t.out,n:t.n,d:0}:null}render(){const t=this.g,e=ue("invMain");e.innerHTML="";for(let r=9;r<36;r++)e.appendChild(_n(t.inv.slots[r],{group:"inv",index:r}));const i=ue("invHot");i.innerHTML="";for(let r=0;r<9;r++)i.appendChild(_n(t.inv.slots[r],{group:"inv",index:r,active:r===t.inv.selected}));if(this.furnace){const r=this.furnace;ue("fIn").innerHTML="",ue("fIn").appendChild(_n(r.slots[0],{group:"furnace",index:0})),ue("fFuel").innerHTML="",ue("fFuel").appendChild(_n(r.slots[1],{group:"furnace",index:1})),ue("fOut").innerHTML="",ue("fOut").appendChild(_n(r.slots[2],{group:"furnace",index:2})),this.furnaceBars()}else if(t.getMode()==="creative"){const r=ue("palette");r.innerHTML="",[...Object.keys(Xe).map(Number),...Object.keys($n).map(Number)].forEach(l=>r.appendChild(_n({id:l,n:1,d:0},{group:"pal",index:l})))}else{const r=ue("craftGrid");r.innerHTML="",this.craft.forEach((l,o)=>r.appendChild(_n(l,{group:"craft",index:o})));const a=ue("craftOut");a.innerHTML="",a.appendChild(_n(this.recipe(),{group:"out",index:0}))}const s=ue("cursorItem");this.cursor?(s.classList.remove("hidden"),s.innerHTML=`<img src="${zu(this.cursor.id)}">${this.cursor.n>1?`<span class="n">${this.cursor.n}</span>`:""}`):s.classList.add("hidden"),this.renderHotbar()}furnaceBars(){const t=this.furnace;t&&(ue("fFlame").style.height=(t.burn>0?Math.min(100,t.burn/t.burnMax*100):0)+"%",ue("fArrow").style.width=Math.min(100,t.cook/Pu*100)+"%")}arr(t){return t==="inv"?this.g.inv.slots:t==="furnace"?this.furnace.slots:this.craft}onDown(t){const e=t.target.closest(".slot"),i=t.button===2;if(!e||!e.dataset.g){this.g.getMode()==="creative"&&t.target.closest("#paletteWrap")?(this.cursor=null,this.render()):!t.target.closest(".panel")&&this.cursor&&(this.g.dropItem(this.cursor.id,i?1:this.cursor.n),i&&this.cursor.n>1?this.cursor.n--:this.cursor=null,this.render());return}const s=e.dataset.g,r=+e.dataset.i;if(s==="pal"){this.cursor={id:r,n:i?1:Mn(r),d:0},this.render();return}if(s==="out"){const h=this.recipe();if(!h||this.cursor&&!(this.cursor.id===h.id&&this.cursor.n+h.n<=Mn(h.id)))return;this.cursor?this.cursor.n+=h.n:this.cursor={...h},this.craft=this.craft.map(f=>f&&f.n>1?{...f,n:f.n-1}:null),this.g.sound("craft"),this.g.onCraft&&this.g.onCraft(h.id,h.n),this.render();return}const a=this.arr(s),l=a[r],o=this.cursor;if(s==="furnace"&&r===2){if(!l)return;o?o.id===l.id&&o.n+l.n<=Mn(o.id)&&(o.n+=l.n,a[2]=null):(this.cursor=l,a[2]=null),this.render();return}if(i){if(o)l?l.id===o.id&&l.n<Mn(o.id)?(l.n++,o.n--,o.n<=0&&(this.cursor=null)):(a[r]=o,this.cursor=l):(a[r]={...o,n:1},o.n--,o.n<=0&&(this.cursor=null));else if(l){const h=Math.ceil(l.n/2);this.cursor={...l,n:h},l.n-=h,l.n<=0&&(a[r]=null)}}else if(!o)a[r]=null,this.cursor=l;else if(!l)a[r]=o,this.cursor=null;else if(l.id===o.id&&Mn(o.id)>1){const h=Math.min(o.n,Mn(o.id)-l.n);l.n+=h,o.n-=h,o.n<=0&&(this.cursor=null)}else a[r]=o,this.cursor=l;this.render()}}let Oe=null,Ko=null,Xn=null,Fu=.5;function fa(){if(Oe)return!0;try{Oe=new(window.AudioContext||window.webkitAudioContext),Xn=Oe.createGain(),Xn.gain.value=Fu,Xn.connect(Oe.destination),Ko=Oe.createBuffer(1,Oe.sampleRate,Oe.sampleRate);const n=Ko.getChannelData(0);for(let t=0;t<n.length;t++)n[t]=Math.random()*2-1;return!0}catch{return!1}}function Ir(){fa()&&Oe.state==="suspended"&&Oe.resume()}function H_(n){Fu=n,Xn&&(Xn.gain.value=n)}function Ci(n,t,e,i,s=0){if(!fa())return;const r=Oe.currentTime,a=Oe.createBufferSource();a.buffer=Ko;const l=Oe.createBiquadFilter();l.type="lowpass",l.frequency.setValueAtTime(t,r),s&&l.frequency.exponentialRampToValueAtTime(Math.max(40,t*s),r+n),l.Q.value=e;const o=Oe.createGain();o.gain.setValueAtTime(i,r),o.gain.exponentialRampToValueAtTime(.001,r+n),a.connect(l),l.connect(o),o.connect(Xn),a.start(r,Math.random()*.5,n)}function Zi(n,t,e,i,s){if(!fa())return;const r=Oe.currentTime,a=Oe.createOscillator();a.type=n,a.frequency.setValueAtTime(t,r),a.frequency.exponentialRampToValueAtTime(e,r+i);const l=Oe.createGain();l.gain.setValueAtTime(s,r),l.gain.exponentialRampToValueAtTime(.001,r+i),a.connect(l),l.connect(Xn),a.start(r),a.stop(r+i)}let To=null;function G_(){if(To||!fa())return To;const n=(t,e,i)=>{const s=Oe.createBufferSource();s.buffer=Ko,s.loop=!0;const r=Oe.createBiquadFilter();r.type=t,r.frequency.value=e,r.Q.value=i;const a=Oe.createGain();return a.gain.value=0,s.connect(r),r.connect(a),a.connect(Xn),s.start(0,Math.random()*.5),{f:r,g:a}};return To={rain:n("highpass",1800,.3),rainLow:n("lowpass",5e3,.3),wind:n("bandpass",420,.9)},To}function Rf(n,t,e=0){if(!Oe||Oe.state!=="running")return;const i=G_();if(!i)return;const s=Oe.currentTime;i.rain.g.gain.setTargetAtTime(n*.16,s,.3),i.rainLow.g.gain.setTargetAtTime(n*.12,s,.3),i.wind.g.gain.setTargetAtTime(t*.5,s,.4),i.wind.f.frequency.setTargetAtTime(300+380*(.5+.5*Math.sin(e))+t*200,s,.3)}function nh(n,t=1){if(Oe)switch(n){case"break":Ci(.16,1400,1,.9,.4);break;case"place":Ci(.09,900,1,.7);break;case"step":Ci(.07,500,1,.25);break;case"hit":Ci(.08,2200,1,.5);break;case"hurt":Zi("square",330,110,.22,.25);break;case"pop":Zi("sine",500,1100,.1,.2);break;case"eat":Ci(.07,1800,2,.6),setTimeout(()=>Ci(.07,1600,2,.6),110);break;case"splash":Ci(.3,2500,.5,.6,.2);break;case"hiss":Ci(.6,6e3,.5,.4);break;case"explode":Ci(1.1,900,.7,1.4,.1),Zi("sine",90,30,.8,.9);break;case"craft":Zi("triangle",400,800,.15,.25);break;case"die":Zi("sawtooth",300,40,.8,.3);break;case"oink":Zi("sawtooth",220,150,.15,.12);break;case"moo":Zi("sawtooth",130,100,.5,.12);break;case"thunder":Ci(3.2,380,.7,1.6*t,.12),setTimeout(()=>Ci(1.6,220,.8,.9*t,.2),450),Zi("sine",60,25,2,.5*t);break;case"roar":Ci(1.5,500,.8,.9*t,.15),Zi("sawtooth",95,32,1.5,.45*t);break;case"shoot":Ci(.3,3200,.8,.45*t,.25),Zi("sine",700,180,.25,.2*t);break;case"groan":Zi("sawtooth",110,70,.6,.14);break}}const V_="minecraft-web",zi="kv";let Ao=null;function ir(){return Ao||(Ao=new Promise((n,t)=>{const e=indexedDB.open(V_,1);e.onupgradeneeded=()=>e.result.createObjectStore(zi),e.onsuccess=()=>n(e.result),e.onerror=()=>t(e.error)}),Ao)}const ks=n=>new Promise((t,e)=>{n.onsuccess=()=>t(n.result),n.onerror=()=>e(n.error)}),ua=n=>new Promise((t,e)=>{n.oncomplete=t,n.onerror=()=>e(n.error),n.onabort=()=>e(n.error)});async function Gr(n){return await ks(n.get("index"))||[]}async function W_(){const t=(await ir()).transaction(zi,"readwrite"),e=t.objectStore(zi),i=await ks(e.get("meta"));if(i){const s=await ks(e.getAllKeys()),r=await Gr(e),a="w"+Date.now().toString(36);for(const l of s)typeof l=="string"&&l.startsWith("c:")&&(e.put(await ks(e.get(l)),`w:${a}:${l}`),e.delete(l));e.put(i,`w:${a}:meta`),e.delete("meta"),r.unshift({id:a,name:"Mundo antiguo",mode:i.mode,seed:i.seed,updated:Date.now(),created:Date.now(),played:0,level:0,thumb:null}),e.put(r,"index")}await ua(t)}async function Bu(){try{await W_();const t=(await ir()).transaction(zi).objectStore(zi);return(await Gr(t)).sort((e,i)=>i.updated-e.updated)}catch{return[]}}async function ku(n){const e=(await ir()).transaction(zi).objectStore(zi),i=IDBKeyRange.bound(`w:${n}:`,`w:${n}:￿`),s=await ks(e.getAllKeys(i)),r=await ks(e.getAll(i)),a={meta:null,chunks:new Map,nether:new Map,end:new Map};return s.forEach((l,o)=>{const h=l.slice(`w:${n}:`.length);h==="meta"?a.meta=r[o]:h.startsWith("c:")?a.chunks.set(Number(h.slice(2)),r[o]):h.startsWith("n:")?a.nether.set(Number(h.slice(2)),r[o]):h.startsWith("e:")&&a.end.set(Number(h.slice(2)),r[o])}),a}function Hu(){return"w"+Date.now().toString(36)+Math.floor(Math.random()*1296).toString(36)}async function Gu(n,t,e,i){try{const r=(await ir()).transaction(zi,"readwrite"),a=r.objectStore(zi);a.put(t,`w:${n}:meta`);for(const[f,c]of e)a.put(c,`w:${n}:${typeof f=="number"?"c:"+f:f}`);const l=await Gr(a),o=l.findIndex(f=>f.id===n),h={...o>=0?l[o]:{},...i,id:n,updated:Date.now()};return o>=0?l[o]=h:l.push(h),a.put(l,"index"),await ua(r),!0}catch{return!1}}async function X_(n){const e=(await ir()).transaction(zi,"readwrite"),i=e.objectStore(zi);i.delete(IDBKeyRange.bound(`w:${n}:`,`w:${n}:￿`)),i.put((await Gr(i)).filter(s=>s.id!==n),"index"),await ua(e)}async function q_(n,t){const i=(await ir()).transaction(zi,"readwrite"),s=i.objectStore(zi),r=await Gr(s),a=r.find(l=>l.id===n);a&&(a.name=t),s.put(r,"index"),await ua(i)}const Y_=n=>{let t="";for(let e=0;e<n.length;e+=32768)t+=String.fromCharCode.apply(null,n.subarray(e,e+32768));return btoa(t)},K_=n=>Uint8Array.from(atob(n),t=>t.charCodeAt(0));async function Vu(n,t,e){return new Response(n.pipeThrough(new t(e)))}async function Wu(n){const t=await Bu(),e=t.find(l=>l.id===n),i=await ku(n),s=[...[...i.chunks].map(([l,o])=>["c:"+l,o]),...[...i.nether].map(([l,o])=>["n:"+l,o]),...[...i.end].map(([l,o])=>["e:"+l,o])],r=JSON.stringify({v:3,summary:e,meta:i.meta,chunks:s.map(([l,o])=>[l,Y_(new Uint8Array(o))])}),a=new Blob([r]);return typeof CompressionStream>"u"?a:(await Vu(a.stream(),CompressionStream,"gzip")).blob()}async function $_(n){let t;try{t=await(await Vu(n.stream(),DecompressionStream,"gzip")).text()}catch{t=await n.text()}const e=JSON.parse(t);if(!e||!e.meta)throw new Error("Archivo no válido");const i=Hu();return await Gu(i,e.meta,e.chunks.map(([s,r])=>[s,K_(r)]),{...e.summary||{},name:(e.summary&&e.summary.name||"Mundo")+" (importado)",created:Date.now()}),i}const ht=n=>document.getElementById(n),Xi=ht("game"),Ui=new n1({canvas:Xi,antialias:!0,powerPreference:"high-performance"});Ui.setPixelRatio(Math.min(devicePixelRatio,2));const Qe=new s1;Qe.fog=new Rh(8900331,50,90);const ei=new Pi(75,1,.05,500);Qe.add(ei);const{canvas:Xu,texture:sh}=x1();U1(Xu);document.documentElement.style.setProperty("--dirt",`url(${G1("dirt")})`);const j_={value:new yt(1,1,1)},$o={uTime:{value:0},uWind:{value:.12}};function Cf(n){return n.onBeforeCompile=t=>{t.uniforms.uTime=$o.uTime,t.uniforms.uWind=$o.uWind,t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
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
reflectedLight.directSpecular *= vSK;`)},n.customProgramCacheKey=()=>"chunk-pbr",n}const rh=v1(Xu);let Ro=null;const hs={opaque:Cf(new lf({map:sh,normalMap:rh,vertexColors:!0,roughness:.94,metalness:0})),trans:Cf(new lf({map:sh,normalMap:rh,vertexColors:!0,transparent:!0,depthWrite:!1,side:bi,roughness:.1,metalness:.05})),tint:j_};function Z_(n,t=!1){n&&!Ro&&(Ro=_1(Ui));for(const e of[hs.opaque,hs.trans])e.map=n?Ro.map:sh,e.normalMap=t?null:n?Ro.normalMap:rh,e.roughness=t?1:e===hs.trans?.1:.94,e.needsUpdate=!0}Ui.toneMapping=ra;Ui.toneMappingExposure=1.45;Ui.shadowMap.type=kf;const oh=[{name:"Bajo",shadows:!1,size:0,ext:0,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Medio",shadows:!0,size:1024,ext:48,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1},{name:"Alto",shadows:!0,size:2048,ext:64,bloom:!0,hd:!0,msaa:2,pr:1.25,grade:!0},{name:"Ultra (hiperrealista)",shadows:!0,size:4096,ext:80,bloom:!0,hd:!0,msaa:4,pr:2,grade:!0},{name:"Clásico (píxel)",shadows:!1,size:0,ext:0,bloom:!1,hd:!1,msaa:0,pr:1,grade:!1,classic:!0}],qu={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVig:{value:.85},uSat:{value:1.04},uGrain:{value:.035},uContrast:{value:1.06}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:"uniform sampler2D tDiffuse; uniform float uTime, uVig, uSat, uGrain, uContrast; varying vec2 vUv;float h(vec2 p){ return fract(sin(dot(p, vec2(12.9898, 78.233))) * 43758.5453); }void main(){ vec4 c = texture2D(tDiffuse, vUv); float l = dot(c.rgb, vec3(0.2126, 0.7152, 0.0722));c.rgb = mix(vec3(l), c.rgb, uSat); c.rgb = (c.rgb - 0.18) * uContrast + 0.18; vec2 d = vUv - 0.5; c.rgb *= 1.0 - dot(d, d) * uVig;c.rgb += (h(vUv * 1000.0 + uTime) - 0.5) * uGrain; gl_FragColor = c; }"};let Li=null,Lf=null,Pf=null,Yu=!1;function Ku(){const n=oh[Ke.quality];Ke.quality,Ui.setPixelRatio(Math.min(devicePixelRatio,n.pr)),Ui.shadowMap.enabled=n.shadows,Ei&&Ei.setShadows(n.shadows,n.size||1024,n.ext||48);for(const i of[hs.opaque,hs.trans])i.needsUpdate=!0;Z_(n.hd,!!n.classic),Ui.toneMapping=n.classic?wn:ra,Ei&&(Ei.classic=!!n.classic);const t=n.bloom||n.grade||n.msaa;if(Li&&(Li.dispose(),Li=null),t){const i=innerWidth,s=innerHeight,r=Ui.getPixelRatio(),a=new Wi(i*r,s*r,{type:ln,samples:n.msaa});Li=new E1(Ui,a),Li.addPass(new w1(Qe,ei)),n.bloom&&(Lf=new Ks(new It(i,s),.42,.55,.88),Li.addPass(Lf)),Yu=n.grade,n.grade&&(Pf=new Au(qu),Li.addPass(Pf)),Li.addPass(new R1),Li.setSize(i,s)}const e=document.getElementById("bQuality");e&&(e.textContent="Gráficos: "+n.name),Kh()}const Ke={radius:8,fov:75,sens:1,vol:.5,cam:0,quality:2};try{Object.assign(Ke,JSON.parse(localStorage.getItem("mcweb-settings")||"{}"))}catch{}const kh=()=>{try{localStorage.setItem("mcweb-settings",JSON.stringify(Ke))}catch{}},$u=new Set(["storm","dragon","wither","herobrine"]),Df={colossus:[[D.STAR,1],[D.IRON,24],[D.DIAMOND,8],[D.GOLD,6]],creepertitan:[[D.STAR,1],[D.COAL,32],[D.DIAMOND,8],[D.GOLD,8]],blazeking:[[D.STAR,1],[D.COAL,24],[D.DIAMOND,8],[D.GOLD,10]],piglinking:[[D.STAR,2],[D.GOLD,32],[D.DIAMOND,10]],endertitan:[[D.STAR,2],[D.PEARL,6],[D.DIAMOND,12]],voidlord:[[D.STAR,2],[D.PEARL,4],[D.DIAMOND,12],[D.GOLD,12]],ravager:[[D.STAR,1],[D.DIAMOND,8],[D.GOLD,10]],evoker:[[D.STAR,1],[D.DIAMOND,6],[D.GOLD,8],[D.PEARL,1]],ghast:[[D.STAR,1],[D.DIAMOND,6],[D.COAL,16]],herobrine:[[D.STAR,3],[D.DIAMOND,16],[D.GOLD,16],[D.PEARL,2]],slimeking:[[D.STAR,1],[D.DIAMOND,6],[D.GOLD,6]],storm:[[D.STAR,1],[I.COMMAND,1],[D.DIAMOND,8],[D.GOLD,12]],dragon:[[D.STAR,2],[D.PEARL,4],[D.DIAMOND,12],[D.GOLD,10]],wither:[[D.STAR,1],[D.DIAMOND,6],[D.GOLD,10]],warden:[[D.STAR,1],[D.DIAMOND,10],[D.GOLD,16]],guardian:[[D.STAR,1],[D.PEARL,1],[D.DIAMOND,6],[D.GOLD,8]]},jo=["Primera persona","Tercera persona (detrás)","Tercera persona (delante)"],Zo=new Su(new a1(new Jt(1.005,1.005,1.005)),new Lh({color:0}));Zo.visible=!1;Qe.add(Zo);const ju=(()=>{let n=12345;const t=()=>(n=Math.imul(n,1664525)+1013904223>>>0)/4294967296,e=[];for(let i=0;i<6;i++){let s=8,r=8;const a=t()*6.28;for(let l=0;l<12;l++)s+=Math.cos(a+(t()-.5)*1.3),r+=Math.sin(a+(t()-.5)*1.3),e.push([Math.round(s),Math.round(r),l])}return Array.from({length:10},(i,s)=>{const r=document.createElement("canvas");r.width=r.height=16;const a=r.getContext("2d");a.fillStyle="rgba(0,0,0,0.8)";for(const[o,h,f]of e)f<=(s+1)*1.25&&a.fillRect(o,h,1,1);const l=new Oi(r);return l.magFilter=pe,l.minFilter=pe,l.generateMipmaps=!1,l})})(),wr=new At(new Jt(1.01,1.01,1.01),new Me({map:ju[0],transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2}));wr.visible=!1;Qe.add(wr);const ah=new Me({transparent:!0,side:bi,depthTest:!1,fog:!1}),Jo=new At(new An(.55,.55),ah),Tr=new At(new Jt(.12,.12,.5),new Me({color:14264191,depthTest:!1,fog:!1})),Ur=new ve;Ur.add(Jo,Tr);ei.add(Ur);Jo.renderOrder=Tr.renderOrder=999;let Gt="menu",se="survival",ko=Ke.radius,Gi=Ke.cam|0;const hn=new Map;let js,rl=0,Ht,ae=null,Ge=null,lh,ii,cs=null,tn=0,qn=0,Yn=0,ol=0,al=0,If=2,Qo=null,Hh="Mundo",Gh=0,Zu=0,Vh=null,Hs=!1;const hh=n=>6+n*4;function vr(n){for(qn+=n;qn>=hh(tn);)qn-=hh(tn),tn++,Tt&&Tt.toast("¡Nivel "+tn+"!"),Ae("pop")}let st,k,ce,Ei,Ve,wi,Di,Tt,Rn=1,ch,Ji={},ee="overworld",ta={nether:new Map,end:new Map},Hn=0,Ar=0,ea=!1;const fh={overworld:"Overworld",nether:"El Nether",end:"El End"},Ju=(n,t,e)=>(ee==="overworld"?"":ee+":")+n+","+t+","+e,$e={left:!1,right:!1},Hi={key:"",progress:0};let Ni=0,Co=0,Mr=0,ia=0,Uf=-2,ll=0,hl=0;function en(n){const t=ht("overlay");if(t.classList.toggle("ingame",n==="pause"||n==="death"),!n){t.classList.add("hidden");return}t.classList.remove("hidden");for(const e of["menu","pause","death"])ht(e).classList.toggle("hidden",e!==n)}const Ae=n=>nh(n);function J_(n){for(let t=0;t<600;t+=5)for(let e=0;e<12;e++){const i=Math.round(Math.cos(e/12*Math.PI*2)*t),s=Math.round(Math.sin(e/12*Math.PI*2)*t),r=Vn(i,s,n);if(r.h>si+3&&r.h<si+16&&r.biome!=="ocean"&&r.biome!=="mountains")return[i,s]}return[0,0]}function Wh(n,t){for(let e=0;e<12;e++)for(let i=-e;i<=e;i++)for(let s=-e;s<=e;s++){if(Math.max(Math.abs(i),Math.abs(s))!==e)continue;const r=n+i,a=t+s,l=st.topY(r,a);if(l<si)continue;const o=st.getBlock(r,l,a);if((o===I.GRASS||o===I.SAND||o===I.SNOW)&&!st.isSolid(r,l+1,a)&&!st.isSolid(r,l+2,a))return new L(r+.5,l+1,a+.5)}return new L(n+.5,Math.max(st.topY(n,t),si)+2,t+.5)}function uh(n,t,e=null){const i=k.eye,s=k.lookDir();wi.spawn(i.x+s.x*.5,i.y-.3,i.z+s.z*.5,n,t,!1);const r=wi.list[wi.list.length-1];r.vel.set(s.x*5,2.5,s.z*5),r.age=-1.2}function cl(n,t,e,i,s=1){Ae("explode");const r=Math.ceil(i)+1;for(let h=-r;h<=r;h++)for(let f=-r;f<=r;f++)for(let c=-r;c<=r;c++){if(Math.hypot(h,f,c)>i*(.7+Math.random()*.3))continue;const d=Math.floor(n)+h,m=Math.floor(t)+f,x=Math.floor(e)+c,g=st.getBlock(d,m,x);if(!(g===Ue||g===I.BEDROCK||cn[g])&&(st.setBlock(d,m,x,Ue),se==="survival"&&Math.random()<.2)){const p=Uu(g,null);p&&wi.spawn(d+.5,m+.5,x+.5,p[0],p[1])}}Di.burst(n,t,e,[.5,.5,.5],40,7),Di.burst(n,t,e,[.9,.5,.1],20,6);const a=k.pos.x-n,l=k.pos.z-e,o=Math.hypot(a,k.pos.y+.9-t,l);o<i*2&&k.damage(Math.round((1-o/(i*2))*22*s),a/(Math.hypot(a,l)||1)*9,l/(Math.hypot(a,l)||1)*9);for(const h of[...Ve.list])Math.hypot(h.pos.x-n,h.pos.y-t,h.pos.z-e)<i*2&&Ve.damage(h,14,n,e)}function dh(n){const t=st.getBlock(n.x,n.y,n.z);if(t===Ue||Xe[t].hardness===1/0)return;const e=ce.held();if(st.setBlock(n.x,n.y,n.z,Ue),t===I.FURNACE){const i=Ju(n.x,n.y,n.z),s=hn.get(i);if(s){for(const r of s.slots)r&&wi.spawn(n.x+.5,n.y+.5,n.z+.5,r.id,r.n);hn.delete(i)}}if(t===I.OBSIDIAN&&ov(n.x,n.y,n.z),(t===I.COAL_ORE||t===I.IRON_ORE||t===I.GOLD_ORE||t===I.DIAMOND_ORE)&&vr(t===I.DIAMOND_ORE?8:3),Di.blockBreak(n.x,n.y,n.z,t),Ae("break"),se==="survival"){const i=Uu(t,e);i&&wi.spawn(n.x+.5,n.y+.4,n.z+.5,i[0],i[1]),us(e)&&Xe[t].hardness>0&&(ce.wearHeld(1)&&(Ae("break"),Tt.toast("¡Se ha roto la herramienta!")),Tt.renderHotbar())}st.getBlock(n.x,n.y+1,n.z)===I.CACTUS&&Xe[t].cactusOk}function Xh(){const n=k.eye,t=k.lookDir(),e=st.raycast(n,t,se==="creative"?7:5.5);if(Ni=Math.max(Ni,.001),e&&e.id===I.TABLE&&!k.keys.has("ShiftLeft")){sa(3);return}if(e&&e.id===I.FURNACE&&!k.keys.has("ShiftLeft")){const h=Ju(e.x,e.y,e.z);hn.has(h)||hn.set(h,{slots:[null,null,null],burn:0,burnMax:1,cook:0}),sa("furnace",hn.get(h));return}if(e&&e.id===I.END_FRAME){sd(e);return}const i=ce.held();if(!i)return;if(i.id===D.LIGHTER){e&&nd(e);return}const s=$n[i.id]&&$n[i.id].food;if(s){se==="survival"&&k.food<20&&(k.eat(s),ce.consumeHeld(1),Ae("eat"),Tt.renderHotbar());return}if(!P1(i.id)||!e)return;const r=e.x+e.normal[0],a=e.y+e.normal[1],l=e.z+e.normal[2];if(a<0||a>=de)return;const o=st.getBlock(r,a,l);if(!(o!==Ue&&!cn[o])&&!(Pr[i.id]&&k.intersectsBlock(r,a,l))&&!(Pr[i.id]&&Ve.list.some(h=>Math.abs(h.pos.x-(r+.5))<h.hw+.5&&Math.abs(h.pos.z-(l+.5))<h.hw+.5&&h.pos.y<a+1&&h.pos.y+h.h>a))){if(i.id===I.COMMAND){if(ae||Ge){Tt.toast("Ya hay una tormenta en curso");return}st.setBlock(r,a,l,i.id),Ae("place"),se==="survival"&&(ce.consumeHeld(1),Tt.renderHotbar()),fv(r,a,l);return}st.setBlock(r,a,l,i.id),Ae("place"),se==="survival"&&(ce.consumeHeld(1),Tt.renderHotbar())}}function Q_(n){const t=er[n];ht("bossFill").style.background=`linear-gradient(${t.color}, #25103a)`,ht("bossbar").style.setProperty("--bc",t.color)}function Nr(n,t,e,i,s){const r=er[n],a=new L(t,e,i);ae=n==="storm"?new o_(Qe,lh,a):r.make(Qe,lh,a,s),Q_(n),$u.has(n)&&(Ht.set("storm"),Ht.boss=!0,Ht.timer=9999),Ae("roar")}function Qu(n){if(ae||Ge)return Tt.toast("Ya hay un jefe activo"),!1;const t=er[n],e=k.lookDir(),i=Math.hypot(e.x,e.z)||1,s=e.x/i,r=e.z/i,a=t.dist||(n==="warden"?12:n==="guardian"?16:n==="wither"?20:26),l=k.pos.x+s*a,o=k.pos.z+r*a;let h;if(t.ground){const f=qh(Math.floor(l),Math.floor(o));h=f!==null?f:k.pos.y}else h=k.pos.y+(t.up===void 0?10:t.up)+(n==="storm"?10:0);return n==="dragon"&&ee==="end"?(Nr("dragon",.5,100,.5,{cx:0,cy:64,cz:0,pillars:Bh()}),ea=!0):Nr(n,l,h,o),Tt.toast("¡"+t.name+" ha sido invocado!"),!0}function qh(n,t){if(ee==="overworld"){const e=st.topY(n,t);return e>0?e+1:null}for(let e=Math.min(de-6,Math.floor(k.pos.y)+12);e>4;e--)if(st.isSolid(n,e-1,t)&&!cn[st.getBlock(n,e-1,t)]&&!st.isSolid(n,e,t)&&!st.isSolid(n,e+1,t)&&!cn[st.getBlock(n,e,t)])return e;return null}function td(n){const t=k.lookDir(),e=Math.hypot(t.x,t.z)||1;for(let i=6;i<=10;i+=2){const s=Math.floor(k.pos.x+t.x/e*i),r=Math.floor(k.pos.z+t.z/e*i),a=qh(s,r);if(a!==null){Ve.add(n,s+.5,$s[n].fly?a+4:a,r+.5);return}}Ve.add(n,k.pos.x+3,k.pos.y+1,k.pos.z)}function tv(){ae&&(ae.dispose(),ae=null),Ge=null,Ht.boss=!1,Yn=0,ht("bossbar").classList.add("hidden"),Tt.toast("Jefe descartado")}function Or(n){Gt==="play"&&(Gt="panel",cs=n,k.keys.clear(),$e.left=$e.right=!1,document.exitPointerLock(),ht(n).classList.remove("hidden"),n==="summon"?ev():iv())}function zr(n){cs&&(ht(cs).classList.add("hidden"),cs=null,n?(Gt="play",Xi.requestPointerLock()):(Gt="pause",en("pause")))}function ev(){ht("bossCards").innerHTML=S_.map(n=>{const t=er[n],e=ii.bosses.has(n);return`<div class="card" style="border-left:6px solid ${t.color}"><h4><span>${t.icon} ${t.name}</span><span class="tag">${t.hp} HP</span></h4><p>${t.desc}</p><button class="btn" data-boss="${n}">${e?"✔ ":""}Invocar</button></div>`}).join(""),ht("mobBtns").innerHTML=Object.keys($s).map(n=>`<button class="btn" data-mob="${n}">${$s[n].name}</button>`).join("")}function iv(){ht("questTitle").textContent=`Misiones — ${ii.completed()}/${ii.total()} completadas`;let n="",t="";for(const e of Ns){e.group!==t&&(t=e.group,n+=`<div class="grp">${t.toUpperCase()}</div>`);const i=ii.done[e.id],s=ii.progress[e.id]||0,r=e.reward.map(([a,l])=>`${l}× ${ca(a).name}`).join(", ");n+=`<div class="q ${i?"done":""}"><span class="ck">${i?"✔":"○"}</span><div><b>${e.title}</b>${e.desc}<div class="bar"><i style="width:${s/e.n*100}%"></i></div></div><div class="rw">${s}/${e.n}<br>${r}<br>+${e.xp} XP</div></div>`}ht("questList").innerHTML=n}ht("bossCards").addEventListener("click",n=>{const t=n.target.closest("[data-boss]");t&&Gt==="panel"&&(zr(!0),Qu(t.dataset.boss))});ht("mobBtns").addEventListener("click",n=>{const t=n.target.closest("[data-mob]");t&&Gt==="panel"&&(td(t.dataset.mob),Tt.toast($s[t.dataset.mob].name+" invocado"))});ht("bDespawn").onclick=()=>{tv()};ht("dimBtns").addEventListener("click",n=>{const t=n.target.closest("[data-dim]");t&&Gt==="panel"&&(zr(!0),da(t.dataset.dim))});const Ne=ht("minimap").getContext("2d"),Nf=Ne.createImageData(64,64),ed={};for(const n of Object.values(Xe)){const t=wu(n.tiles[0]);ed[n.id]=[t[0]*255,t[1]*255,t[2]*255]}function nv(){const n=Math.floor(k.pos.x),t=Math.floor(k.pos.z),e=Nf.data;for(let s=0;s<64;s++)for(let r=0;r<64;r++){const a=n+r-32,l=t+s-32,o=(s*64+r)*4;let h=st.topY(a,l);if(ee!=="overworld"&&h>=0)for(h=Math.min(de-3,Math.floor(k.pos.y)+6);h>0&&!st.isSolid(a,h,l)&&st.getBlock(a,h,l)!==I.LAVA;)h--;let f;if(h<0)f=[20,20,30];else if(ee==="overworld"&&h<si&&st.getBlock(a,si,l)===I.WATER)f=[38+h,84+h,190];else{const c=ed[st.getBlock(a,h,l)]||[90,90,90],u=Math.max(.6,Math.min(1.25,.9+(h-k.pos.y)*.012));f=[c[0]*u,c[1]*u,c[2]*u]}e[o]=f[0],e[o+1]=f[1],e[o+2]=f[2],e[o+3]=255}Ne.putImageData(Nf,0,0),Ne.imageSmoothingEnabled=!1,Ne.drawImage(ht("minimap"),0,0,64,64,0,0,128,128);const i=(s,r,a,l)=>{const o=(s-n+32)*2,h=(r-t+32)*2;o<2||h<2||o>126||h>126||(Ne.fillStyle=a,Ne.fillRect(o-l,h-l,l*2,l*2))};for(const s of Ve.list)i(s.pos.x,s.pos.z,s.def.hostile?"#ff4040":"#ffffff",1.5);if(ae){const s=3+Math.sin(performance.now()/150)*1.2,r=ae.pos.x,a=ae.pos.z,l=Math.max(6,Math.min(122,(r-n+32)*2)),o=Math.max(6,Math.min(122,(a-t+32)*2));Ne.fillStyle="#d050ff",Ne.fillRect(l-s,o-s,s*2,s*2),Ne.strokeStyle="#fff",Ne.strokeRect(l-s,o-s,s*2,s*2)}Ne.save(),Ne.translate(64+(k.pos.x-n)*2,64+(k.pos.z-t)*2),Ne.rotate(-k.yaw+Math.PI),Ne.fillStyle="#fff",Ne.strokeStyle="#000",Ne.beginPath(),Ne.moveTo(0,6),Ne.lineTo(4.5,-4.5),Ne.lineTo(0,-2),Ne.lineTo(-4.5,-4.5),Ne.closePath(),Ne.fill(),Ne.stroke(),Ne.restore()}function sv(){ht("tracker").innerHTML=ii.active(3).map(n=>`<div class="qt"><b>${n.title}</b>${n.desc} (${ii.progress[n.id]||0}/${n.n})<div class="qb"><i style="width:${(ii.progress[n.id]||0)/n.n*100}%"></i></div></div>`).join("")}function ph(n,t){const e=new ve;e.visible=!1,Qe.add(e);const i=new $1(e,hs,n==="overworld"?Rn:n==="nether"?Rn+500:Rn+900,t||new Map,n);return i.group=e,i}function rv(n,t,e,i=3){return new Promise(s=>{const r=()=>{n.update(t,e,i,12)>0?setTimeout(r,0):s()};r()})}function id(n,t,e){for(const i of[0,2]){const s=i===0?[1,0,0]:[0,0,1],r=(u,d)=>st.getBlock(n+s[0]*u,t+d,e+s[2]*u);let a=0;for(;a>-22&&r(0,a-1)===Ue;)a--;if(r(0,a-1)!==I.OBSIDIAN)continue;let l=0;for(;l<22&&r(0,l+1)===Ue;)l++;if(r(0,l+1)!==I.OBSIDIAN)continue;let o=0;for(;o>-22&&r(o-1,0)===Ue;)o--;if(r(o-1,0)!==I.OBSIDIAN)continue;let h=0;for(;h<22&&r(h+1,0)===Ue;)h++;if(r(h+1,0)!==I.OBSIDIAN||l-a+1<3||h-o+1<2)continue;let f=!0;for(let u=o;u<=h&&f;u++)for(let d=a;d<=l;d++)if(r(u,d)!==Ue){f=!1;break}for(let u=o;u<=h&&f;u++)(r(u,a-1)!==I.OBSIDIAN||r(u,l+1)!==I.OBSIDIAN)&&(f=!1);for(let u=a;u<=l&&f;u++)(r(o-1,u)!==I.OBSIDIAN||r(h+1,u)!==I.OBSIDIAN)&&(f=!1);if(!f)continue;const c=[];for(let u=o;u<=h;u++)for(let d=a;d<=l;d++)c.push([n+s[0]*u,t+d,e+s[2]*u]);return c}return null}function nd(n){if(ee==="end")return Tt.toast("El fuego no prende aquí"),!1;const t=n.x+n.normal[0],e=n.y+n.normal[1],i=n.z+n.normal[2],s=st.getBlock(t,e,i)===Ue?id(t,e,i):null;if(!s)return Tt.toast("Marco de obsidiana no válido (mínimo 2x3 interior)"),!1;for(const[r,a,l]of s)st.setBlock(r,a,l,I.NETHER_PORTAL);if(Ae("hiss"),Ae("craft"),Tt.toast("¡El portal del Nether se activa!"),se==="survival"){const r=ce.held();r.d=(r.d||0)+1,r.d>=64&&(ce.slots[ce.selected]=null),Tt.renderHotbar()}return!0}function ov(n,t,e){const i=[[n,t,e]],s=new Set;for(;i.length;){const[r,a,l]=i.pop();for(const[o,h,f]of[[1,0,0],[-1,0,0],[0,1,0],[0,-1,0],[0,0,1],[0,0,-1]]){const c=r+o,u=a+h,d=l+f,m=c+","+u+","+d;s.has(m)||(s.add(m),st.getBlock(c,u,d)===I.NETHER_PORTAL&&(st.setBlock(c,u,d,Ue),i.push([c,u,d])))}}}function sd(n){const t=ce.held();if(!t||t.id!==D.EYE){Tt.toast("Necesitas un Ojo de Ender");return}st.setBlock(n.x,n.y,n.z,I.END_FRAME_EYE),Ae("place"),se==="survival"&&(ce.consumeHeld(1),Tt.renderHotbar());const e=[];for(let i=-2;i<=2;i++)for(let s=-2;s<=2;s++)Math.max(Math.abs(i),Math.abs(s))===2&&!(Math.abs(i)===2&&Math.abs(s)===2)&&e.push([i,s]);for(const[i,s]of e){const r=n.x-i,a=n.z-s;if(e.every(([l,o])=>st.getBlock(r+l,n.y,a+o)===I.END_FRAME_EYE)){for(let l=-1;l<=1;l++)for(let o=-1;o<=1;o++)st.setBlock(r+l,n.y,a+o,I.END_PORTAL);Ae("roar"),Tt.toast("¡El portal del End se abre!");return}}}function rd(n,t,e){for(let i=n-2;i<=n+5;i++)for(let s=e-2;s<=e+4;s++){const r=st.getBlock(i,t,s);(r===Ue||cn[r]||!Pr[r])&&st.setBlock(i,t,s,I.OBSIDIAN);for(let a=t+1;a<=t+6;a++)st.getBlock(i,a,s)!==Ue&&st.setBlock(i,a,s,Ue)}for(let i=0;i<4;i++)for(let s=0;s<5;s++){const r=(i===0||i===3)&&(s===0||s===4),a=i===0||i===3||s===0||s===4;r||st.setBlock(n+i,t+s,e,a?I.OBSIDIAN:I.NETHER_PORTAL)}st.setBlock(n-1,t+1,e+2,I.TORCH),st.setBlock(n+4,t+1,e+2,I.TORCH)}function av(n,t){let e=null,i=1e9;const s=ee==="nether"?20:2,r=ee==="nether"?de-6:de-2;for(let a=n-24;a<=n+24;a++)for(let l=t-24;l<=t+24;l++)if(st.chunks.has((Math.floor(a/16)+32768)*65536+(Math.floor(l/16)+32768))){for(let o=s;o<=r;o++)if(st.getBlock(a,o,l)===I.NETHER_PORTAL){const h=Math.hypot(a-n,l-t);h<i&&(i=h,e=[a,o,l])}}return e}function lv(n){const[t,e,i]=n;let s=e;for(;st.getBlock(t,s-1,i)===I.NETHER_PORTAL;)s--;for(const[r,a]of[[0,2],[0,-2],[2,0],[-2,0],[0,1],[0,-1],[1,0],[-1,0],[2,2],[-2,-2]]){const l=t+r,o=i+a;for(const h of[s,s+1,s-1])if(st.isSolid(l,h-1,o)&&!st.isSolid(l,h,o)&&!st.isSolid(l,h+1,o)&&!cn[st.getBlock(l,h,o)]&&st.getBlock(l,h,o)!==I.NETHER_PORTAL)return new L(l+.5,h,o+.5)}return new L(t+.5,s+1,i+2.5)}function hv(){const n=st.topY(0,0);if(!(n<0)){for(let t=-2;t<=2;t++)for(let e=-2;e<=2;e++){const i=Math.max(Math.abs(t),Math.abs(e))===2;i&&Math.abs(t)===2&&Math.abs(e)===2||st.setBlock(t,n+1,e,i?I.BEDROCK:I.END_PORTAL)}for(const[t,e]of[[-2,0],[2,0],[0,-2],[0,2]])st.setBlock(t,n+2,e,I.TORCH);Tt.toast("Se abre el portal de salida en el centro de la isla")}}async function da(n,t={}){if(!st||Gt==="loading"||n===ee&&!t.force)return;const e=ee;Gt="loading",k.keys.clear(),$e.left=$e.right=!1,ht("travelTxt").textContent="Viajando a "+fh[n]+"…",ht("travel").classList.remove("hidden"),await new Promise(a=>setTimeout(a,40)),ae&&(ae.dispose(),ae=null,Ht.boss=!1,Yn=0,ht("bossbar").classList.add("hidden")),Ge=null,Ve.clear(),wi.clear();let i,s;t.arrive?(i=Math.floor(t.arrive.x),s=Math.floor(t.arrive.z)):n==="end"?(i=0,s=30):n==="nether"?(i=Math.floor(k.pos.x/8),s=Math.floor(k.pos.z/8)):e==="nether"?(i=Math.floor(k.pos.x*8),s=Math.floor(k.pos.z*8)):(i=Math.floor(k.spawn.x),s=Math.floor(k.spawn.z)),Ji[n]||(Ji[n]=ph(n,n==="nether"?ta.nether:n==="end"?ta.end:new Map)),st.group.visible=!1,st=Ji[n],st.group.visible=!0,ee=n,k.world=st,wi.world=st,Di.world=st,Ve.world=st,Ve.dim=n,Ei.setDimension(n),Yn=0,await rv(st,i,s,3);let r;if(n==="end"){const a=st.topY(i,s);r=new L(.5,(a>0?a:64)+1,30.5)}else if(t.respawn)r=Wh(i,s);else{const a=av(i,s);if(a)r=lv(a);else{let l;if(n==="overworld"){const o=st.topY(i,s);l=Math.max(o>0?o:si,si)}else{l=64;for(let o=100;o>36;o--){const h=st.getBlock(i,o,s);if(st.isSolid(i,o,s)&&h!==I.LAVA&&!st.isSolid(i,o+1,s)&&!st.isSolid(i,o+2,s)&&!cn[st.getBlock(i,o+1,s)]){l=o;break}}}rd(i,l,s),r=new L(i+1.5,l+1,s+2.5)}}k.pos.copy(r),k.vel.set(0,0,0),k.fallStart=null,k.yaw=Math.PI,Gt="play",ht("travel").classList.add("hidden"),Ar=3,Hn=0,Tt.toast("Has llegado a "+fh[n]),ii.event("dim",n),n==="end"&&!ea&&!ii.bosses.has("dragon")&&(ea=!0,setTimeout(()=>{ee==="end"&&!ae&&Nr("dragon",.5,100,.5,{cx:0,cy:64,cz:0,pillars:Bh()})},1500)),Hs=!0}function cv(n){Ar=Math.max(0,Ar-n);const t=Math.floor(k.pos.x),e=Math.floor(k.pos.z),i=st.getBlock(t,Math.floor(k.pos.y+.2),e),s=st.getBlock(t,Math.floor(k.pos.y+1.2),e),r=i===I.NETHER_PORTAL||s===I.NETHER_PORTAL?"nether":i===I.END_PORTAL||s===I.END_PORTAL?"end":null,a=se==="creative"?.6:3;r&&Ar<=0&&Gt==="play"?(Hn+=n,Hn>=a&&(Hn=0,da(r==="nether"?ee==="nether"?"overworld":"nether":ee==="end"?"overworld":"end"))):Hn=Math.max(0,Hn-n*2);const l=ht("portalfx");l.style.opacity=Math.min(1,Hn/a)*.9,l.style.background=r==="end"?"radial-gradient(ellipse at center, rgba(20,60,70,.5), rgba(2,10,14,.95))":""}function fv(n,t,e){Ge={x:n,y:t,z:e,t:5,s:0},Ae("roar"),Ht.set("storm"),Ht.boss=!0,Tt.toast("El bloque de comandos late… ¡aléjate!")}function uv(n){if(Ge.t-=n,Ge.s-=n,Ht.timer=9999,Ge.s<=0&&(Ge.s=.9,Ht.strike(k,!1,{x:Ge.x,z:Ge.z}),Di.burst(Ge.x+.5,Ge.y+1,Ge.z+.5,[.7,.3,1],20,5)),Ge.t<=0){const t=Ge;Ge=null,st.setBlock(t.x,t.y,t.z,Ue),Nr("storm",t.x+.5,t.y+14,t.z+.5),Ae("roar"),Tt.toast("¡LA TORMENTA WITHER HA DESPERTADO!")}}function dv(){const n=k.eye,t=k.lookDir(),e=ae&&ae.raycast(n,t,7),i=st.raycast(n,t,7);if(e&&(!i||e.dist<i.dist)){const o=us(ce.held());return ae.hit(se==="creative"?12:o?o.dmg:1,e.crit,e),Ae("hit"),e.crit&&Tt.toast("¡Golpe crítico al bloque de comandos!"),se==="survival"&&o&&(ce.wearHeld(1),Tt.renderHotbar()),!0}const s=Ve.raycast(n,t,3.6),r=st.raycast(n,t,3.6);if(!s||r&&r.dist<s.dist)return!1;const a=us(ce.held()),l=se==="creative"?20:a?a.dmg:1;return Ve.damage(s.mob,l,k.pos.x,k.pos.z),Di.burst(s.mob.pos.x,s.mob.pos.y+s.mob.h*.6,s.mob.pos.z,[.8,.1,.1],6,2.5),se==="survival"&&a&&(ce.wearHeld(1),Tt.renderHotbar()),!0}function pv(n){const t=k.eye,e=k.lookDir(),i=st.raycast(t,e,se==="creative"?7:5.5);Zo.visible=!!i,i&&Zo.position.set(i.x+.5,i.y+.5,i.z+.5),Co=Math.max(0,Co-n),Mr=Math.max(0,Mr-n),ia=Math.max(0,ia-n);let s=0;if($e.left&&i){const r=i.x+","+i.y+","+i.z;if(r!==Hi.key&&(Hi.key=r,Hi.progress=0),Ni=Ni>0?Ni:.001,se==="creative")Co<=0&&(dh(i),Co=.2);else{const a=I1(i.id,ce.held())*(k.effects.fatigue>0?3:1);Hi.progress+=n/a,s=Math.min(1,Hi.progress),Math.floor(Hi.progress*6)!==Math.floor((Hi.progress-n/a)*6)&&Ae("hit"),Hi.progress>=1&&(dh(i),Hi.key="",Hi.progress=0,s=0)}wr.position.set(i.x+.5,i.y+.5,i.z+.5)}else Hi.key="",Hi.progress=0;wr.visible=s>0,s>0&&(wr.material.map=ju[Math.min(9,Math.floor(s*10))]),ht("breakbar").classList.toggle("hidden",s<=0),ht("breakbar").firstElementChild.style.width=s*100+"%",$e.right&&Mr<=0&&(Mr=.22,Xh())}function mv(n){for(const t of hn.values()){const[e,i,s]=t.slots,r=e&&L1[e.id],a=r&&(!s||s.id===r[0]&&s.n+r[1]<=Mn(r[0]));t.burn>0&&(t.burn-=n),a?(t.burn<=0&&i&&gf[i.id]&&(t.burn=t.burnMax=gf[i.id],i.n--,i.n<=0&&(t.slots[1]=null)),t.burn>0?(t.cook+=n,t.cook>=Pu&&(t.cook=0,e.n--,e.n<=0&&(t.slots[0]=null),s?s.n+=r[1]:t.slots[2]={id:r[0],n:r[1],d:0})):t.cook=Math.max(0,t.cook-n*2)):t.cook=0}}function na(n){Gi=n,Ke.cam=n,kh(),ht("bCam").textContent="Cámara: "+jo[n],Tt&&Tt.toast("Cámara: "+jo[n])}function gv(){if(k.dead){js.group.visible=!1;return}if(js.group.visible=Gi!==0,Ur.visible=Gi===0,Gi===0)return;const n=k.eye,t=k.lookDir().multiplyScalar(Gi===1?-1:1),e=st.raycast(n,t,4.2),i=e?Math.max(.3,e.dist-.3):4.2;ei.position.copy(n).addScaledVector(t,i),Gi===1?ei.rotation.set(k.pitch,k.yaw,0,"YXZ"):ei.rotation.set(-k.pitch,k.yaw+Math.PI,0,"YXZ")}function od(n){const t=ce.held(),e=t?t.id:0;js.setHeld(e),e!==Uf&&(Uf=e,e&&(ah.map=Fh(e),ah.needsUpdate=!0),Jo.visible=!!e,Tr.visible=!e,Jo.scale.setScalar(Du(e)?.7:.6)),Ni>0&&(Ni+=n*3.5,Ni>=1&&(Ni=$e.left?.001:0));const i=Math.sin(Math.min(1,Ni)*Math.PI);Ur.position.set(.5-i*.12,-.5+i*.08-Math.sin(performance.now()/400)*.004,-.85-i*.1),Ur.rotation.set(-i*.9,-.35,-i*.2),e||(Tr.position.set(0,-.1,-.1),Tr.rotation.set(.4,0,0))}function sa(n,t=null){Gt==="play"&&(Gt="inv",k.keys.clear(),$e.left=$e.right=!1,document.exitPointerLock(),Tt.open(n,t))}function Of(n){Tt.close(),n?(Gt="play",Xi.requestPointerLock()):(Gt="pause",en("pause"))}function Yh(){Tt.renderHotbar();const n=ce.held();n&&Tt.toast(ca(n.id).name)}function xv(){Yn=0,ae&&(ae.dispose(),ae=null,Ht.boss=!1,Ht.set("rain"),ht("bossbar").classList.add("hidden"),Tt.toast("La tormenta se retira…")),Ge=null,Gt="dead",Ae("die"),k.keys.clear(),$e.left=$e.right=!1;for(let n=0;n<36;n++){const t=ce.slots[n];t&&(wi.spawn(k.pos.x,k.pos.y+1,k.pos.z,t.id,t.n),ce.slots[n]=null)}Tt.renderHotbar(),document.exitPointerLock(),en("death")}async function ps(){if(!st||!Qo)return!1;const n={v:3,gen:2,dim:ee,seed:Rn,mode:se,time:Ei.time,pos:k.pos.toArray(),yaw:k.yaw,pitch:k.pitch,hp:k.hp,food:k.food,spawn:k.spawn.toArray(),inv:ce.toJSON(),furnaces:[...hn.entries()],weather:Ht.toJSON(),quests:ii.toJSON(),xp:{l:tn,p:qn}},t=[];for(const[i,s]of Object.entries(Ji))for(const r of s.unsaved)s.chunks.has(r)&&t.push([i==="overworld"?r:(i==="nether"?"n:":"e:")+r,new Uint8Array(s.chunks.get(r))]);const e=await Gu(Qo,n,t,{name:Hh,mode:se,seed:Rn,created:Zu,played:Math.floor(Gh),level:tn,thumb:Vh});if(e)for(const i of Object.values(Ji))i.unsaved.clear();return e}function _v(){try{const n=document.createElement("canvas");n.width=160,n.height=90,n.getContext("2d").drawImage(Xi,0,0,160,90),Vh=n.toDataURL("image/jpeg",.6)}catch{}}async function vv(){Hs=!0,await new Promise(t=>setTimeout(t,120));const n=await ps();return Tt.toast(n?"💾 Partida guardada":"⚠ No se pudo guardar"),n}async function zf({id:n,name:t,seed:e,mode:i,saved:s,meta:r,created:a,played:l,nether:o,end:h}){Gt="loading",se=i,Rn=e,Qo=n,Hh=t||"Mundo",Zu=a||Date.now(),Gh=l||0,Vh=null,en("menu"),ht("msg").textContent="Generando mundo…",ht("menuBody").classList.add("hidden"),hn.clear();for(const u of Object.values(Ji))Qe.remove(u.group);Ji={},ta={nether:o||new Map,end:h||new Map},ea=!1,Hn=0,Ar=0,ee=r&&r.dim||"overworld",Ji.overworld=ph("overworld",s),ee!=="overworld"&&(Ji[ee]=ph(ee,ta[ee])),st=Ji[ee],st.group.visible=!0,ce=new L_,k=new C_(st,ei),k.mode=se,js||(js=new V1(Qe)),Ei=new B_(Qe,ei,hs),Ei.setDimension(ee),ch||(ch=new E_(Qe)),Ku(),Ht=new X1(Qe,{world:()=>st,sky:()=>Ei,sound:(u,d)=>nh(u,d),burst:(u,d,m)=>{Di.burst(u,d,m,[1,1,.8],24,6),Di.burst(u,d,m,[.3,.3,.35],14,4)},hurtPlayer:u=>k.damage(u),strikeMobs:(u,d)=>{for(const m of[...Ve.list])Math.hypot(m.pos.x-u,m.pos.z-d)<3.5&&Ve.damage(m,12,u,d)}}),lh={world:()=>st,explode:(u,d,m,x,g)=>cl(u,d,m,x,g),toast:u=>Tt.toast(u),sound:(u,d)=>nh(u,d),burst:(u,d,m,x,g,p)=>Di.burst(u,d,m,x,g,p),hurtPlayer:(u,d,m)=>k.damage(u,d,m),strikeNear:(u,d)=>Ht.strike(k,!1,{x:u,z:d}),minions:()=>Ve.list.filter(u=>u.def.hostile).length,effect:(u,d)=>{se==="survival"&&(k.effects[u]=Math.max(k.effects[u],d))},darkness:u=>{Yn=u},player:()=>k,spawnMinion:u=>{for(let d=0;d<6;d++){const m=Math.random()*Math.PI*2,x=10+Math.random()*8,g=Math.floor(k.pos.x+Math.cos(m)*x),p=Math.floor(k.pos.z+Math.sin(m)*x),M=qh(g,p);if(M!==null){const y=u||(ee==="nether"?"piglin":ee==="end"?"endermite":Math.random()<.6?"zombie":"creeper");Ve.add(y,g+.5,$s[y].fly?M+4:M,p+.5);return}}},loot:(u,d,m,x="storm")=>{for(const[g,p]of Df[x]||Df.storm)wi.spawn(u,d,m,g,p)},done:()=>{const u=ae?ae.type:"storm";ii.event("boss",u),vr(100),Ae("craft"),u==="dragon"&&ee==="end"&&setTimeout(hv,1200),ae=null,Ht.boss=!1,Yn=0,Ht.state==="storm"&&Ht.set("rain"),ht("bossbar").classList.add("hidden")}},ae=null,Ge=null,cs=null,Yn=0,ii=new b_({reward:u=>{for(const[d,m]of u){const x=ce.add(d,m);x&&uh(d,x)}Tt.renderHotbar()},toast:u=>Tt.toast(u),xp:vr,sound:Ae}),wi=new q1(Qe,st),Di=new Y1(Qe,st),Ve=new J1(Qe,st,{effect:(u,d)=>{se==="survival"&&(k.effects[u]=Math.max(k.effects[u]||0,d))},killed:(u,d)=>{ii.event("kill",u),vr(d)},tp:(u,d,m)=>{Di.burst(u,d,m,[.7,.2,1],14,3),Ae("pop")},hurtPlayer:(u,d,m)=>k.damage(u,d,m),explode:cl,drop:(u,d,m,x,g)=>wi.spawn(u,d,m,x,g),sound:Ae,puff:(u,d,m)=>Di.burst(u,d,m,[.9,.9,.9],12,3)}),Tt=new k_({inv:ce,player:k,getMode:()=>se,dropItem:uh,sound:Ae,onSelect:Yh,onCraft:(u,d)=>ii.event("craft",u,d)}),tn=0,qn=0,k.events.onHurt=()=>{Ae("hurt");const u=ht("vignette");u.classList.add("hurt"),setTimeout(()=>u.classList.remove("hurt"),120)},k.events.onStep=()=>Ae("step"),k.events.onLand=u=>Ae(u>3?"hurt":"place"),k.events.onSplash=()=>Ae("splash"),k.events.onDeath=xv,k.events.onVoid=()=>{if(ee==="end"){k.damage(6);const u=st.topY(0,30);k.pos.set(.5,(u>0?u:64)+1,30.5),k.vel.set(0,0,0),Tt.toast("Caíste al vacío…")}else k.pos.y=70,k.vel.set(0,0,0),k.damage(4)},Ve.dim=ee;let f,c;if(r?(Ht.load(r.weather),ii.load(r.quests),r.xp&&(tn=r.xp.l,qn=r.xp.p),ce.load(r.inv),(r.furnaces||[]).forEach(([u,d])=>hn.set(u,d)),Ei.time=r.time,k.hp=r.hp,k.food=r.food,k.yaw=r.yaw,k.pitch=r.pitch,k.spawn.fromArray(r.spawn),k.pos.fromArray(r.pos),f=Math.floor(r.pos[0]),c=Math.floor(r.pos[2])):([f,c]=J_(Rn),k.pos.set(f+.5,70,c+.5)),await new Promise(u=>{const d=()=>{const m=st.update(f,c,3,10);ht("msg").textContent="Generando mundo… "+Math.max(0,100-m*2)+"%",m>0?setTimeout(d,0):u()};d()}),r)k.vel.set(0,0,0);else{const u=Wh(f,c);k.pos.copy(u),k.spawn.copy(u)}Tt.renderHotbar(),Tt.renderStats(),od(0),na(Gi),window.__game={get world(){return st},player:k,inv:ce,sky:Ei,mobs:Ve,drops:wi,ui:Tt,camera:ei,scene:Qe,renderer:Ui,get mode(){return se},set mode(u){se=u,k.mode=u},get state(){return Gt},set state(u){Gt=u},explode:cl,saveGame:ps,openInventory:sa,mouse:$e,useItem:Xh,breakBlock:dh,furnaces:hn,setCam:na,get weather(){return Ht},get boss(){return ae},summon:(u,d,m)=>Nr("storm",u,d,m),summonBoss:Qu,summonMob:td,get quests(){return ii},changeDimension:da,get dim(){return ee},get dims(){return Ji},lightPortal:nd,findPortalFrame:id,useEyeOnFrame:sd,buildNetherPortal:rd,openPanel:Or,closePanel:zr,addXp:vr,terrainInfo:Vn,get xp(){return[tn,qn]}},Gt="play",en(null),Xi.requestPointerLock(),setTimeout(()=>{document.pointerLockElement!==Xi&&Gt==="play"&&(Gt="pause",en("pause"))},1500)}document.addEventListener("pointerlockchange",()=>{document.pointerLockElement===Xi?(Gt==="pause"||Gt==="play")&&(Gt="play",en(null)):(k&&k.keys.clear(),$e.left=$e.right=!1,Gt==="play"&&(Gt="pause",en("pause")))});document.addEventListener("mousemove",n=>{Gt!=="play"||document.pointerLockElement!==Xi||(k.yaw-=n.movementX*.0022*Ke.sens,k.pitch=Math.max(-Math.PI/2+.01,Math.min(Math.PI/2-.01,k.pitch-n.movementY*.0022*Ke.sens)))});document.addEventListener("keydown",n=>{if(Ir(),Gt==="panel"){n.code==="Escape"?zr(!1):(n.code==="KeyB"&&cs==="summon"||n.code==="KeyM"&&cs==="quests")&&zr(!0);return}if(Gt==="inv"){n.code==="KeyE"?(n.preventDefault(),Of(!0)):n.code==="Escape"&&Of(!1);return}if(Gt==="play"){if(n.code.startsWith("Digit")){const t=+n.code.slice(5)-1;t>=0&&t<9&&(ce.selected=t,Yh());return}switch(n.code){case"KeyE":sa(2);return;case"KeyB":Or("summon");return;case"KeyM":Or("quests");return;case"F3":n.preventDefault(),ht("info").classList.toggle("hidden");return;case"KeyT":if(!n.repeat){const t=Ht.cycle();Tt.toast("Clima: "+eh[t])}return;case"KeyV":case"F5":n.preventDefault(),n.repeat||na((Gi+1)%3);return;case"KeyF":se==="creative"&&!n.repeat&&(k.flying=!k.flying,k.vel.y=0,Tt.toast(k.flying?"Vuelo activado":"Vuelo desactivado"));return;case"KeyG":n.repeat||(se=se==="creative"?"survival":"creative",k.mode=se,se==="survival"&&(k.flying=!1),Tt.renderStats(),Tt.toast("Modo "+(se==="creative"?"creativo":"supervivencia")));return;case"KeyQ":if(se==="survival"&&!n.repeat){const t=ce.held();t&&(uh(t.id,1),ce.consumeHeld(1),Tt.renderHotbar());return}break}(n.code==="Space"||n.code.startsWith("Arrow"))&&n.preventDefault(),k.keys.add(n.code)}});document.addEventListener("keyup",n=>k&&k.keys.delete(n.code));document.addEventListener("wheel",n=>{Gt==="play"&&(ce.selected=(ce.selected+Math.sign(n.deltaY)+9)%9,Yh())});Xi.addEventListener("contextmenu",n=>n.preventDefault());document.addEventListener("mousedown",n=>{Gt!=="play"||document.pointerLockElement!==Xi||(n.button===0?($e.left=!0,Ni=Ni||.001,ia<=0&&dv()&&(ia=.4,$e.left=!1)):n.button===2&&($e.right=!0,Mr=.22,Xh()))});document.addEventListener("mouseup",n=>{n.button===0&&($e.left=!1),n.button===2&&($e.right=!1)});document.addEventListener("visibilitychange",()=>{document.hidden&&Gt!=="menu"&&ps()});addEventListener("beforeunload",()=>{st&&Gt!=="menu"&&ps()});function Kh(){Ui.setSize(innerWidth,innerHeight,!1),Li&&Li.setSize(innerWidth,innerHeight),ei.aspect=innerWidth/innerHeight,ei.updateProjectionMatrix()}addEventListener("resize",Kh);Kh();ht("bResume").onclick=()=>{Ir(),Xi.requestPointerLock()};ht("bSave").onclick=async()=>{Hs=!0,await new Promise(n=>setTimeout(n,120)),await ps(),location.reload()};ht("bSaveNow").onclick=async()=>{await vv(),ht("bSaveNow").textContent="💾 Guardado ✔",setTimeout(()=>ht("bSaveNow").textContent="💾 Guardar partida",1500)};ht("bExport").onclick=async()=>{await ps();const n=await Wu(Qo),t=document.createElement("a");t.href=URL.createObjectURL(n),t.download=Hh.replace(/[^\w\-]+/g,"_")+".mcw",t.click(),setTimeout(()=>URL.revokeObjectURL(t.href),4e3)};ht("bRespawn").onclick=async()=>{if(Ir(),en(null),ee!=="overworld"&&(Gt="play",await da("overworld",{respawn:!0})),k.respawn(),ee==="overworld"){const n=Wh(Math.floor(k.spawn.x),Math.floor(k.spawn.z));k.pos.copy(n)}Gt="play",Tt.renderStats(),Xi.requestPointerLock()};ht("bCam").onclick=()=>na((Gi+1)%3);ht("bQuality").onclick=()=>{Ke.quality=(Ke.quality+1)%oh.length,kh(),Ku(),Tt&&Tt.toast("Gráficos: "+oh[Ke.quality].name)};ht("bPSummon").onclick=()=>{en(null),Gt="play",Or("summon")};ht("bPQuests").onclick=()=>{en(null),Gt="play",Or("quests")};const pa=(n,t,e,i,s)=>{const r=ht(n),a=ht(t);r.value=Ke[e],a.textContent=i(Ke[e]),s&&s(Ke[e]),r.oninput=l=>{Ke[e]=+l.target.value,a.textContent=i(Ke[e]),s&&s(Ke[e]),kh()}};pa("rRadius","vRadius","radius",n=>n,n=>ko=n);pa("rFov","vFov","fov",n=>n);pa("rSens","vSens","sens",n=>n.toFixed(1));pa("rVol","vVol","vol",n=>Math.round(n*100),n=>H_(n));ht("bCam").textContent="Cámara: "+jo[Gi];let Ff=performance.now(),Lo=0,fl=0,ul=0;function ad(n){requestAnimationFrame(ad);const t=Math.min(.1,(n-Ff)/1e3);if(Ff=n,!(!st||Gt==="menu"||Gt==="loading")){if(Lo+=t,fl++,Lo>=.5&&(ul=Math.round(fl/Lo),Lo=0,fl=0),Gt!=="pause"){k.update(t),js.update(t,k,Ni),gv(),mv(t);const e=Math.floor(k.pos.x),i=Math.floor(k.pos.z),s=ee==="overworld",r=s&&Mf(e,i,Rn)==="snow";s?Ht.update(t,k,ei,r,k.headUnder):(Ht.rain.visible=Ht.snow.visible=!1,Ht.wind.x=Ht.wind.z=0,Ht.wind.s=.12,Ht.intensity=0);const a=s?st.skyLit(e,Math.floor(k.pos.y+1.6),i):0;if(k.wind.x=Ht.wind.x*1.4*a*(Ht.state==="clear"?0:1),k.wind.z=Ht.wind.z*1.4*a*(Ht.state==="clear"?0:1),$o.uTime.value+=t,$o.uWind.value=.25+Ht.wind.s*2.2,s?Rf(Ht.intensity*(.25+.75*a)*(k.headUnder?.2:1),Ht.wind.s*(.3+.7*a)*(Ht.state==="clear"?.25:1),Ht.t*.4):Rf(0,.18,Ht.t*.2),Ei.update(t,ei.position,ko*16,k.headUnder,Ht.wind),ch.update(t,ei,ee),cv(t),If=st.update(k.pos.x,k.pos.z,ko,If)>40?4:2,k.push.x=k.push.y=k.push.z=0,Ge&&uv(t),ae&&($u.has(ae.type)&&(Ht.timer=9999,Ht.boss=!0),ae.update(t,k,st),ae&&(ht("bossbar").classList.remove("hidden"),ht("bossFill").style.width=Math.max(0,ae.hp/ae.maxHp*100)+"%",ht("bossPhase").textContent="Fase "+ae.phase,ht("bossName").firstChild.nodeValue!==ae.name+" "&&(ht("bossName").firstChild.nodeValue=ae.name+" "))),Ve.update(t,k,se,Ei.daylight,ko),wi.update(t,k,ce,o=>{Ae("pop"),Tt.renderHotbar(),ii.event("collect",o.id,o.n)}),Di.update(t),Gt==="play"&&pv(t),od(t),ht("water").classList.toggle("hidden",!k.headUnder),ei.fov+=(Ke.fov+(k.keys.has("ShiftLeft")&&k.keys.has("KeyW")?7:0)-ei.fov)*Math.min(1,t*8),Tt.isOpen&&Tt.furnace&&(Tt.furnaceBars(),rl-=t,rl<=0&&(rl=.5,Tt.render())),ei.updateProjectionMatrix(),hl-=t,hl<=0){hl=.2,Tt.renderStats();const o=(Ei.time*24+6)%24,h=Math.floor(o),f=Math.floor((o-h)*60);ht("info").textContent=`${ul} FPS · ${se==="creative"?"Creativo":"Supervivencia"}
XYZ ${k.pos.x.toFixed(1)} ${k.pos.y.toFixed(1)} ${k.pos.z.toFixed(1)}
Bioma: ${Mf(Math.floor(k.pos.x),Math.floor(k.pos.z),Rn)} · ${String(h).padStart(2,"0")}:${String(f).padStart(2,"0")}
Mobs: ${Ve.list.length} · Clima: ${eh[Ht.state]}${r?" (nieve)":""} · Viento ${(Ht.wind.s*20).toFixed(0)} km/h${k.flying?" · [VUELO]":""}`,ht("cam").textContent="📷 "+jo[Gi]+"  [V]",ht("mmInfo").textContent=`${Math.floor(k.pos.x)}, ${Math.floor(k.pos.y)}, ${Math.floor(k.pos.z)}
${String(h).padStart(2,"0")}:${String(f).padStart(2,"0")} · ${ee==="overworld"?eh[Ht.state]:fh[ee]}
📷 ${["1ª persona","3ª detrás","3ª delante"][Gi]} · ${ul} FPS`,ht("xpFill").style.width=qn/hh(tn)*100+"%",ht("xpLvl").textContent=tn,ht("xp").style.visibility=se==="survival"?"visible":"hidden";const c=[];k.effects.poison>0&&c.push(`<span style="border-color:#7a2">☠ Veneno ${Math.ceil(k.effects.poison)}s</span>`),k.effects.fatigue>0&&c.push(`<span style="border-color:#6cf">⛏ Fatiga ${Math.ceil(k.effects.fatigue)}s</span>`),k.effects.burn>0&&c.push(`<span style="border-color:#f80">🔥 Fuego ${Math.ceil(k.effects.burn)}s</span>`),k.effects.levitate>0&&c.push(`<span style="border-color:#fff">☁ Levitación ${Math.ceil(k.effects.levitate)}s</span>`),ht("effects").innerHTML=c.join(""),ht("darkness").style.opacity=Yn}ol-=t,ol<=0&&(ol=.4,nv()),al-=t,al<=0&&(al=.5,sv()),Gh+=t,ll+=t,ll>25&&(ll=0,Hs=!0)}Yu&&(qu.uniforms.uTime.value=n%1e4/1e3),Li?Li.render(t):Ui.render(Qe,ei),Hs&&(Hs=!1,_v(),ps())}}requestAnimationFrame(ad);(async function(){const t=a=>(a>=3600?Math.floor(a/3600)+" h ":"")+Math.floor(a%3600/60)+" min",e=a=>{let l=7;for(const o of a)l=Math.imul(l,31)+o.charCodeAt(0)|0;return Math.abs(l)%9e5+1};async function i(){const a=await Bu();return ht("worldsBox").classList.toggle("hidden",!a.length),ht("worldList").innerHTML=a.map(l=>`<div class="wcard" data-id="${l.id}"><img src="${l.thumb||""}" alt=""><div><b>${(l.name||"Mundo").replace(/</g,"&lt;")}</b><small>${l.mode==="creative"?"Creativo":"Supervivencia"} · nivel ${l.level||0} · ${t(l.played||0)} · ${new Date(l.updated).toLocaleString()}</small></div><div class="wb"><button class="play" data-act="play">▶ Jugar</button><button data-act="export" title="Exportar">⬇</button><button data-act="rename" title="Renombrar">✎</button><button data-act="del" title="Borrar">🗑</button></div></div>`).join(""),a}let s=await i();ht("msg").textContent=s.length?"Elige un mundo o crea uno nuevo":"Elige cómo jugar";const r=a=>{Ir();const l=ht("wName").value.trim()||`Mundo ${s.length+1}`,o=ht("wSeed").value.trim(),h=o?/^\d+$/.test(o)?Number(o)%9e5+1:e(o):1+Math.floor(Math.random()*9e5);zf({id:Hu(),name:l,seed:h,mode:a,saved:new Map,meta:null})};ht("bSurvival").onclick=()=>r("survival"),ht("bCreative").onclick=()=>r("creative"),ht("worldList").addEventListener("click",async a=>{const l=a.target.closest("button"),o=a.target.closest(".wcard");if(!l||!o)return;const h=o.dataset.id,f=s.find(c=>c.id===h);if(l.dataset.act==="play"){Ir(),ht("msg").textContent="Cargando mundo…";const c=await ku(h);if(!c.meta){ht("msg").textContent="No se pudo leer este mundo";return}zf({id:h,name:f.name,seed:c.meta.seed,mode:c.meta.mode,saved:c.chunks,nether:c.nether,end:c.end,meta:c.meta,created:f.created,played:f.played})}else if(l.dataset.act==="del")confirm(`¿Borrar "${f.name}" para siempre?`)&&(await X_(h),s=await i());else if(l.dataset.act==="rename"){const c=prompt("Nuevo nombre",f.name);c&&c.trim()&&(await q_(h,c.trim().slice(0,28)),s=await i())}else if(l.dataset.act==="export"){const c=await Wu(h),u=document.createElement("a");u.href=URL.createObjectURL(c),u.download=(f.name||"mundo").replace(/[^\w\-]+/g,"_")+".mcw",u.click(),setTimeout(()=>URL.revokeObjectURL(u.href),4e3)}}),ht("bImport").onclick=()=>ht("fImport").click(),ht("fImport").onchange=async a=>{const l=a.target.files[0];if(l){try{await $_(l),s=await i(),ht("msg").textContent="✔ Partida importada"}catch{ht("msg").textContent="⚠ Archivo no válido"}a.target.value=""}},window.__menu={refresh:async()=>s=await i()}})();
