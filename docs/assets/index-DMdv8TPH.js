(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const Qa="170",zu=0,Fl=1,ku=2,Mh=1,Sh=2,Un=3,vn=0,Ut=1,Qt=2,ti=0,Qi=1,na=2,Ol=3,Bl=4,Hu=5,_i=100,Vu=101,Gu=102,Wu=103,Xu=104,qu=200,$u=201,Yu=202,ju=203,ia=204,sa=205,Ku=206,Zu=207,Ju=208,Qu=209,ed=210,td=211,nd=212,id=213,sd=214,ra=0,oa=1,aa=2,os=3,la=4,ca=5,ha=6,ua=7,bh=0,rd=1,od=2,ni=0,ad=1,ld=2,cd=3,wh=4,hd=5,ud=6,dd=7,zl="attached",fd="detached",Th=300,as=301,ls=302,da=303,fa=304,Zr=306,Mi=1e3,Qn=1001,qr=1002,St=1003,Eh=1004,Bs=1005,Bt=1006,Br=1007,On=1008,kn=1009,Ah=1010,Rh=1011,$s=1012,el=1013,Si=1014,fn=1015,_s=1016,tl=1017,nl=1018,cs=1020,Ch=35902,Ph=1021,Ih=1022,$t=1023,Lh=1024,Dh=1025,es=1026,hs=1027,il=1028,sl=1029,Uh=1030,rl=1031,ol=1033,zr=33776,kr=33777,Hr=33778,Vr=33779,pa=35840,ma=35841,ga=35842,_a=35843,va=36196,xa=37492,ya=37496,Ma=37808,Sa=37809,ba=37810,wa=37811,Ta=37812,Ea=37813,Aa=37814,Ra=37815,Ca=37816,Pa=37817,Ia=37818,La=37819,Da=37820,Ua=37821,Gr=36492,Na=36494,Fa=36495,Nh=36283,Oa=36284,Ba=36285,za=36286,pd=2200,Fh=2201,md=2202,Ys=2300,js=2301,ho=2302,ji=2400,Ki=2401,$r=2402,al=2500,gd=2501,_d=0,Oh=1,ka=2,vd=3200,xd=3201,ll=0,yd=1,Zn="",vt="srgb",zt="srgb-linear",Jr="linear",et="srgb",Ai=7680,kl=519,Md=512,Sd=513,bd=514,Bh=515,wd=516,Td=517,Ed=518,Ad=519,Ha=35044,Rd=35048,Hl="300 es",Bn=2e3,Yr=2001;class oi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Vl=1234567;const Hs=Math.PI/180,us=180/Math.PI;function pn(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Pt[s&255]+Pt[s>>8&255]+Pt[s>>16&255]+Pt[s>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[t&63|128]+Pt[t>>8&255]+"-"+Pt[t>>16&255]+Pt[t>>24&255]+Pt[n&255]+Pt[n>>8&255]+Pt[n>>16&255]+Pt[n>>24&255]).toLowerCase()}function xt(s,e,t){return Math.max(e,Math.min(t,s))}function cl(s,e){return(s%e+e)%e}function Cd(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Pd(s,e,t){return s!==e?(t-s)/(e-s):0}function Vs(s,e,t){return(1-t)*s+t*e}function Id(s,e,t,n){return Vs(s,e,1-Math.exp(-t*n))}function Ld(s,e=1){return e-Math.abs(cl(s,e*2)-e)}function Dd(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Ud(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Nd(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Fd(s,e){return s+Math.random()*(e-s)}function Od(s){return s*(.5-Math.random())}function Bd(s){s!==void 0&&(Vl=s);let e=Vl+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function zd(s){return s*Hs}function kd(s){return s*us}function Hd(s){return(s&s-1)===0&&s!==0}function Vd(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function Gd(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Wd(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),f=r((n-e)/2),_=o((n-e)/2);switch(i){case"XYX":s.set(a*h,l*u,l*d,a*c);break;case"YZY":s.set(l*d,a*h,l*u,a*c);break;case"ZXZ":s.set(l*u,l*d,a*h,a*c);break;case"XZX":s.set(a*h,l*_,l*f,a*c);break;case"YXY":s.set(l*f,a*h,l*_,a*c);break;case"ZYZ":s.set(l*_,l*f,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function dn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Qe(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Yt={DEG2RAD:Hs,RAD2DEG:us,generateUUID:pn,clamp:xt,euclideanModulo:cl,mapLinear:Cd,inverseLerp:Pd,lerp:Vs,damp:Id,pingpong:Ld,smoothstep:Dd,smootherstep:Ud,randInt:Nd,randFloat:Fd,randFloatSpread:Od,seededRandom:Bd,degToRad:zd,radToDeg:kd,isPowerOfTwo:Hd,ceilPowerOfTwo:Vd,floorPowerOfTwo:Gd,setQuaternionFromProperEuler:Wd,normalize:Qe,denormalize:dn};class ie{constructor(e=0,t=0){ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ue{constructor(e,t,n,i,r,o,a,l,c){Ue.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=i,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],f=n[5],_=n[8],g=i[0],m=i[3],p=i[6],x=i[1],y=i[4],v=i[7],R=i[2],E=i[5],C=i[8];return r[0]=o*g+a*x+l*R,r[3]=o*m+a*y+l*E,r[6]=o*p+a*v+l*C,r[1]=c*g+h*x+u*R,r[4]=c*m+h*y+u*E,r[7]=c*p+h*v+u*C,r[2]=d*g+f*x+_*R,r[5]=d*m+f*y+_*E,r[8]=d*p+f*v+_*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,f=c*r-o*l,_=t*u+n*d+i*f;if(_===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/_;return e[0]=u*g,e[1]=(i*c-h*n)*g,e[2]=(a*n-i*o)*g,e[3]=d*g,e[4]=(h*t-i*l)*g,e[5]=(i*r-a*t)*g,e[6]=f*g,e[7]=(n*l-c*t)*g,e[8]=(o*t-n*r)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(uo.makeScale(e,t)),this}rotate(e){return this.premultiply(uo.makeRotation(-e)),this}translate(e,t){return this.premultiply(uo.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const uo=new Ue;function zh(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ks(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Xd(){const s=Ks("canvas");return s.style.display="block",s}const Gl={};function zs(s){s in Gl||(Gl[s]=!0,console.warn(s))}function qd(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function $d(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Yd(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const He={enabled:!0,workingColorSpace:zt,spaces:{},convert:function(s,e,t){return this.enabled===!1||e===t||!e||!t||(this.spaces[e].transfer===et&&(s.r=zn(s.r),s.g=zn(s.g),s.b=zn(s.b)),this.spaces[e].primaries!==this.spaces[t].primaries&&(s.applyMatrix3(this.spaces[e].toXYZ),s.applyMatrix3(this.spaces[t].fromXYZ)),this.spaces[t].transfer===et&&(s.r=ts(s.r),s.g=ts(s.g),s.b=ts(s.b))),s},fromWorkingColorSpace:function(s,e){return this.convert(s,this.workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Zn?Jr:this.spaces[s].transfer},getLuminanceCoefficients:function(s,e=this.workingColorSpace){return s.fromArray(this.spaces[e].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,e,t){return s.copy(this.spaces[e].toXYZ).multiply(this.spaces[t].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}};function zn(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ts(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}const Wl=[.64,.33,.3,.6,.15,.06],Xl=[.2126,.7152,.0722],ql=[.3127,.329],$l=new Ue().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yl=new Ue().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);He.define({[zt]:{primaries:Wl,whitePoint:ql,transfer:Jr,toXYZ:$l,fromXYZ:Yl,luminanceCoefficients:Xl,workingColorSpaceConfig:{unpackColorSpace:vt},outputColorSpaceConfig:{drawingBufferColorSpace:vt}},[vt]:{primaries:Wl,whitePoint:ql,transfer:et,toXYZ:$l,fromXYZ:Yl,luminanceCoefficients:Xl,outputColorSpaceConfig:{drawingBufferColorSpace:vt}}});let Ri;class jd{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ri===void 0&&(Ri=Ks("canvas")),Ri.width=e.width,Ri.height=e.height;const n=Ri.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ri}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ks("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=zn(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(zn(t[n]/255)*255):t[n]=zn(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Kd=0;class kh{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Kd++}),this.uuid=pn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(fo(i[o].image)):r.push(fo(i[o]))}else r=fo(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function fo(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?jd.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Zd=0;class bt extends oi{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Qn,i=Qn,r=Bt,o=On,a=$t,l=kn,c=bt.DEFAULT_ANISOTROPY,h=Zn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Zd++}),this.uuid=pn(),this.name="",this.source=new kh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new ie(0,0),this.repeat=new ie(1,1),this.center=new ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ue,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Th)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Mi:e.x=e.x-Math.floor(e.x);break;case Qn:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Mi:e.y=e.y-Math.floor(e.y);break;case Qn:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=Th;bt.DEFAULT_ANISOTROPY=1;class $e{constructor(e=0,t=0,n=0,i=1){$e.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],f=l[5],_=l[9],g=l[2],m=l[6],p=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-g)<.01&&Math.abs(_-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+g)<.1&&Math.abs(_+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,v=(f+1)/2,R=(p+1)/2,E=(h+d)/4,C=(u+g)/4,P=(_+m)/4;return y>v&&y>R?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=E/n,r=C/n):v>R?v<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(v),n=E/i,r=P/i):R<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),n=C/r,i=P/r),this.set(n,i,r,t),this}let x=Math.sqrt((m-_)*(m-_)+(u-g)*(u-g)+(d-h)*(d-h));return Math.abs(x)<.001&&(x=1),this.x=(m-_)/x,this.y=(u-g)/x,this.z=(d-h)/x,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Jd extends oi{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new $e(0,0,e,t),this.scissorTest=!1,this.viewport=new $e(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Bt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new bt(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new kh(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class ii extends Jd{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Hh extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qd extends bt{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=St,this.minFilter=St,this.wrapR=Qn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class nn{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],h=n[i+2],u=n[i+3];const d=r[o+0],f=r[o+1],_=r[o+2],g=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=f,e[t+2]=_,e[t+3]=g;return}if(u!==g||l!==d||c!==f||h!==_){let m=1-a;const p=l*d+c*f+h*_+u*g,x=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){const R=Math.sqrt(y),E=Math.atan2(R,p*x);m=Math.sin(m*E)/R,a=Math.sin(a*E)/R}const v=a*x;if(l=l*m+d*v,c=c*m+f*v,h=h*m+_*v,u=u*m+g*v,m===1-a){const R=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=R,c*=R,h*=R,u*=R}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],h=n[i+3],u=r[o],d=r[o+1],f=r[o+2],_=r[o+3];return e[t]=a*_+h*u+l*f-c*d,e[t+1]=l*_+h*d+c*u-a*f,e[t+2]=c*_+h*f+a*d-l*u,e[t+3]=h*_-a*u-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(i/2),u=a(r/2),d=l(n/2),f=l(i/2),_=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"YXZ":this._x=d*h*u+c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"ZXY":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u-d*f*_;break;case"ZYX":this._x=d*h*u-c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u+d*f*_;break;case"YZX":this._x=d*h*u+c*f*_,this._y=c*f*u+d*h*_,this._z=c*h*_-d*f*u,this._w=c*h*u-d*f*_;break;case"XZY":this._x=d*h*u-c*f*_,this._y=c*f*u-d*h*_,this._z=c*h*_+d*f*u,this._w=c*h*u+d*f*_;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(o-i)*f}else if(n>a&&n>u){const f=2*Math.sqrt(1+n-a-u);this._w=(h-l)/f,this._x=.25*f,this._y=(i+o)/f,this._z=(r+c)/f}else if(a>u){const f=2*Math.sqrt(1+a-n-u);this._w=(r-c)/f,this._x=(i+o)/f,this._y=.25*f,this._z=(l+h)/f}else{const f=2*Math.sqrt(1+u-n-a);this._w=(o-i)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(xt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+i*c-r*l,this._y=i*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-i*a,this._w=o*h-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-t;return this._w=f*o+t*this._w,this._x=f*n+t*this._x,this._y=f*i+t*this._y,this._z=f*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class M{constructor(e=0,t=0,n=0){M.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),h=2*(a*t-r*i),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=i+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return po.copy(this).projectOnVector(e),this.sub(po)}reflect(e){return this.sub(po.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(xt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const po=new M,jl=new nn;class Ht{constructor(e=new M(1/0,1/0,1/0),t=new M(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,cn):cn.fromBufferAttribute(r,o),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),or.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),or.copy(n.boundingBox)),or.applyMatrix4(e.matrixWorld),this.union(or)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ws),ar.subVectors(this.max,ws),Ci.subVectors(e.a,ws),Pi.subVectors(e.b,ws),Ii.subVectors(e.c,ws),Gn.subVectors(Pi,Ci),Wn.subVectors(Ii,Pi),li.subVectors(Ci,Ii);let t=[0,-Gn.z,Gn.y,0,-Wn.z,Wn.y,0,-li.z,li.y,Gn.z,0,-Gn.x,Wn.z,0,-Wn.x,li.z,0,-li.x,-Gn.y,Gn.x,0,-Wn.y,Wn.x,0,-li.y,li.x,0];return!mo(t,Ci,Pi,Ii,ar)||(t=[1,0,0,0,1,0,0,0,1],!mo(t,Ci,Pi,Ii,ar))?!1:(lr.crossVectors(Gn,Wn),t=[lr.x,lr.y,lr.z],mo(t,Ci,Pi,Ii,ar))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Rn=[new M,new M,new M,new M,new M,new M,new M,new M],cn=new M,or=new Ht,Ci=new M,Pi=new M,Ii=new M,Gn=new M,Wn=new M,li=new M,ws=new M,ar=new M,lr=new M,ci=new M;function mo(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ci.fromArray(s,r);const a=i.x*Math.abs(ci.x)+i.y*Math.abs(ci.y)+i.z*Math.abs(ci.z),l=e.dot(ci),c=t.dot(ci),h=n.dot(ci);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const ef=new Ht,Ts=new M,go=new M;class Mn{constructor(e=new M,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):ef.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Ts.subVectors(e,this.center);const t=Ts.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Ts,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(go.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Ts.copy(e.center).add(go)),this.expandByPoint(Ts.copy(e.center).sub(go))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Cn=new M,_o=new M,cr=new M,Xn=new M,vo=new M,hr=new M,xo=new M;class Qs{constructor(e=new M,t=new M(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Cn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Cn.copy(this.origin).addScaledVector(this.direction,t),Cn.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){_o.copy(e).add(t).multiplyScalar(.5),cr.copy(t).sub(e).normalize(),Xn.copy(this.origin).sub(_o);const r=e.distanceTo(t)*.5,o=-this.direction.dot(cr),a=Xn.dot(this.direction),l=-Xn.dot(cr),c=Xn.lengthSq(),h=Math.abs(1-o*o);let u,d,f,_;if(h>0)if(u=o*l-a,d=o*a-l,_=r*h,u>=0)if(d>=-_)if(d<=_){const g=1/h;u*=g,d*=g,f=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;else d<=-_?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c):d<=_?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),f=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(_o).addScaledVector(cr,d),f}intersectSphere(e,t){Cn.subVectors(e.center,this.origin);const n=Cn.dot(this.direction),i=Cn.dot(Cn)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Cn)!==null}intersectTriangle(e,t,n,i,r){vo.subVectors(t,e),hr.subVectors(n,e),xo.crossVectors(vo,hr);let o=this.direction.dot(xo),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Xn.subVectors(this.origin,e);const l=a*this.direction.dot(hr.crossVectors(Xn,hr));if(l<0)return null;const c=a*this.direction.dot(vo.cross(Xn));if(c<0||l+c>o)return null;const h=-a*Xn.dot(xo);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ae{constructor(e,t,n,i,r,o,a,l,c,h,u,d,f,_,g,m){Ae.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,h,u,d,f,_,g,m)}set(e,t,n,i,r,o,a,l,c,h,u,d,f,_,g,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=r,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=_,p[11]=g,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ae().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Li.setFromMatrixColumn(e,0).length(),r=1/Li.setFromMatrixColumn(e,1).length(),o=1/Li.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=f+_*c,t[5]=d-g*c,t[9]=-a*l,t[2]=g-d*c,t[6]=_+f*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d+g*a,t[4]=_*a-f,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=f*a-_,t[6]=g+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,f=l*u,_=c*h,g=c*u;t[0]=d-g*a,t[4]=-o*u,t[8]=_+f*a,t[1]=f+_*a,t[5]=o*h,t[9]=g-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,f=o*u,_=a*h,g=a*u;t[0]=l*h,t[4]=_*c-f,t[8]=d*c+g,t[1]=l*u,t[5]=g*c+d,t[9]=f*c-_,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=g-d*u,t[8]=_*u+f,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=f*u+_,t[10]=d-g*u}else if(e.order==="XZY"){const d=o*l,f=o*c,_=a*l,g=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+g,t[5]=o*h,t[9]=f*u-_,t[2]=_*u-f,t[6]=a*h,t[10]=g*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(tf,e,nf)}lookAt(e,t,n){const i=this.elements;return Xt.subVectors(e,t),Xt.lengthSq()===0&&(Xt.z=1),Xt.normalize(),qn.crossVectors(n,Xt),qn.lengthSq()===0&&(Math.abs(n.z)===1?Xt.x+=1e-4:Xt.z+=1e-4,Xt.normalize(),qn.crossVectors(n,Xt)),qn.normalize(),ur.crossVectors(Xt,qn),i[0]=qn.x,i[4]=ur.x,i[8]=Xt.x,i[1]=qn.y,i[5]=ur.y,i[9]=Xt.y,i[2]=qn.z,i[6]=ur.z,i[10]=Xt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],f=n[13],_=n[2],g=n[6],m=n[10],p=n[14],x=n[3],y=n[7],v=n[11],R=n[15],E=i[0],C=i[4],P=i[8],T=i[12],b=i[1],I=i[5],k=i[9],O=i[13],H=i[2],K=i[6],W=i[10],ee=i[14],G=i[3],re=i[7],ue=i[11],Me=i[15];return r[0]=o*E+a*b+l*H+c*G,r[4]=o*C+a*I+l*K+c*re,r[8]=o*P+a*k+l*W+c*ue,r[12]=o*T+a*O+l*ee+c*Me,r[1]=h*E+u*b+d*H+f*G,r[5]=h*C+u*I+d*K+f*re,r[9]=h*P+u*k+d*W+f*ue,r[13]=h*T+u*O+d*ee+f*Me,r[2]=_*E+g*b+m*H+p*G,r[6]=_*C+g*I+m*K+p*re,r[10]=_*P+g*k+m*W+p*ue,r[14]=_*T+g*O+m*ee+p*Me,r[3]=x*E+y*b+v*H+R*G,r[7]=x*C+y*I+v*K+R*re,r[11]=x*P+y*k+v*W+R*ue,r[15]=x*T+y*O+v*ee+R*Me,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],f=e[14],_=e[3],g=e[7],m=e[11],p=e[15];return _*(+r*l*u-i*c*u-r*a*d+n*c*d+i*a*f-n*l*f)+g*(+t*l*f-t*c*d+r*o*d-i*o*f+i*c*h-r*l*h)+m*(+t*c*u-t*a*f-r*o*u+n*o*f+r*a*h-n*c*h)+p*(-i*a*h-t*l*u+t*a*d+i*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],f=e[11],_=e[12],g=e[13],m=e[14],p=e[15],x=u*m*c-g*d*c+g*l*f-a*m*f-u*l*p+a*d*p,y=_*d*c-h*m*c-_*l*f+o*m*f+h*l*p-o*d*p,v=h*g*c-_*u*c+_*a*f-o*g*f-h*a*p+o*u*p,R=_*u*l-h*g*l-_*a*d+o*g*d+h*a*m-o*u*m,E=t*x+n*y+i*v+r*R;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/E;return e[0]=x*C,e[1]=(g*d*r-u*m*r-g*i*f+n*m*f+u*i*p-n*d*p)*C,e[2]=(a*m*r-g*l*r+g*i*c-n*m*c-a*i*p+n*l*p)*C,e[3]=(u*l*r-a*d*r-u*i*c+n*d*c+a*i*f-n*l*f)*C,e[4]=y*C,e[5]=(h*m*r-_*d*r+_*i*f-t*m*f-h*i*p+t*d*p)*C,e[6]=(_*l*r-o*m*r-_*i*c+t*m*c+o*i*p-t*l*p)*C,e[7]=(o*d*r-h*l*r+h*i*c-t*d*c-o*i*f+t*l*f)*C,e[8]=v*C,e[9]=(_*u*r-h*g*r-_*n*f+t*g*f+h*n*p-t*u*p)*C,e[10]=(o*g*r-_*a*r+_*n*c-t*g*c-o*n*p+t*a*p)*C,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*f-t*a*f)*C,e[12]=R*C,e[13]=(h*g*i-_*u*i+_*n*d-t*g*d-h*n*m+t*u*m)*C,e[14]=(_*a*i-o*g*i-_*n*l+t*g*l+o*n*m-t*a*m)*C,e[15]=(o*u*i-h*a*i+h*n*l-t*u*l-o*n*d+t*a*d)*C,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,h*a+n,h*l-i*o,0,c*l-i*a,h*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,f=r*h,_=r*u,g=o*h,m=o*u,p=a*u,x=l*c,y=l*h,v=l*u,R=n.x,E=n.y,C=n.z;return i[0]=(1-(g+p))*R,i[1]=(f+v)*R,i[2]=(_-y)*R,i[3]=0,i[4]=(f-v)*E,i[5]=(1-(d+p))*E,i[6]=(m+x)*E,i[7]=0,i[8]=(_+y)*C,i[9]=(m-x)*C,i[10]=(1-(d+g))*C,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Li.set(i[0],i[1],i[2]).length();const o=Li.set(i[4],i[5],i[6]).length(),a=Li.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],hn.copy(this);const c=1/r,h=1/o,u=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=u,hn.elements[9]*=u,hn.elements[10]*=u,t.setFromRotationMatrix(hn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Bn){const l=this.elements,c=2*r/(t-e),h=2*r/(n-i),u=(t+e)/(t-e),d=(n+i)/(n-i);let f,_;if(a===Bn)f=-(o+r)/(o-r),_=-2*o*r/(o-r);else if(a===Yr)f=-o/(o-r),_=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Bn){const l=this.elements,c=1/(t-e),h=1/(n-i),u=1/(o-r),d=(t+e)*c,f=(n+i)*h;let _,g;if(a===Bn)_=(o+r)*u,g=-2*u;else if(a===Yr)_=r*u,g=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=g,l[14]=-_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Li=new M,hn=new Ae,tf=new M(0,0,0),nf=new M(1,1,1),qn=new M,ur=new M,Xt=new M,Kl=new Ae,Zl=new nn;class Vt{constructor(e=0,t=0,n=0,i=Vt.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],h=i[9],u=i[2],d=i[6],f=i[10];switch(t){case"XYZ":this._y=Math.asin(xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-xt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(xt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Kl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Zl.setFromEuler(this),this.setFromQuaternion(Zl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Vt.DEFAULT_ORDER="XYZ";class hl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sf=0;const Jl=new M,Di=new nn,Pn=new Ae,dr=new M,Es=new M,rf=new M,of=new nn,Ql=new M(1,0,0),ec=new M(0,1,0),tc=new M(0,0,1),nc={type:"added"},af={type:"removed"},Ui={type:"childadded",child:null},yo={type:"childremoved",child:null};class nt extends oi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sf++}),this.uuid=pn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=nt.DEFAULT_UP.clone();const e=new M,t=new Vt,n=new nn,i=new M(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new Ae},normalMatrix:{value:new Ue}}),this.matrix=new Ae,this.matrixWorld=new Ae,this.matrixAutoUpdate=nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.multiply(Di),this}rotateOnWorldAxis(e,t){return Di.setFromAxisAngle(e,t),this.quaternion.premultiply(Di),this}rotateX(e){return this.rotateOnAxis(Ql,e)}rotateY(e){return this.rotateOnAxis(ec,e)}rotateZ(e){return this.rotateOnAxis(tc,e)}translateOnAxis(e,t){return Jl.copy(e).applyQuaternion(this.quaternion),this.position.add(Jl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ql,e)}translateY(e){return this.translateOnAxis(ec,e)}translateZ(e){return this.translateOnAxis(tc,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Pn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?dr.copy(e):dr.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Pn.lookAt(Es,dr,this.up):Pn.lookAt(dr,Es,this.up),this.quaternion.setFromRotationMatrix(Pn),i&&(Pn.extractRotation(i.matrixWorld),Di.setFromRotationMatrix(Pn),this.quaternion.premultiply(Di.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(nc),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(af),yo.child=e,this.dispatchEvent(yo),yo.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Pn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Pn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Pn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(nc),Ui.child=e,this.dispatchEvent(Ui),Ui.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,rf),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,of,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),f=o(e.animations),_=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),_.length>0&&(n.nodes=_)}return n.object=i,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}nt.DEFAULT_UP=new M(0,1,0);nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const un=new M,In=new M,Mo=new M,Ln=new M,Ni=new M,Fi=new M,ic=new M,So=new M,bo=new M,wo=new M,To=new $e,Eo=new $e,Ao=new $e;class en{constructor(e=new M,t=new M,n=new M){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),un.subVectors(e,t),i.cross(un);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){un.subVectors(i,t),In.subVectors(n,t),Mo.subVectors(e,t);const o=un.dot(un),a=un.dot(In),l=un.dot(Mo),c=In.dot(In),h=In.dot(Mo),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(c*l-a*h)*d,_=(o*h-a*l)*d;return r.set(1-f-_,_,f)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ln)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ln.x),l.addScaledVector(o,Ln.y),l.addScaledVector(a,Ln.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return To.setScalar(0),Eo.setScalar(0),Ao.setScalar(0),To.fromBufferAttribute(e,t),Eo.fromBufferAttribute(e,n),Ao.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(To,r.x),o.addScaledVector(Eo,r.y),o.addScaledVector(Ao,r.z),o}static isFrontFacing(e,t,n,i){return un.subVectors(n,t),In.subVectors(e,t),un.cross(In).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),In.subVectors(this.a,this.b),un.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return en.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return en.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return en.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return en.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return en.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Ni.subVectors(i,n),Fi.subVectors(r,n),So.subVectors(e,n);const l=Ni.dot(So),c=Fi.dot(So);if(l<=0&&c<=0)return t.copy(n);bo.subVectors(e,i);const h=Ni.dot(bo),u=Fi.dot(bo);if(h>=0&&u<=h)return t.copy(i);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(Ni,o);wo.subVectors(e,r);const f=Ni.dot(wo),_=Fi.dot(wo);if(_>=0&&f<=_)return t.copy(r);const g=f*c-l*_;if(g<=0&&c>=0&&_<=0)return a=c/(c-_),t.copy(n).addScaledVector(Fi,a);const m=h*_-f*u;if(m<=0&&u-h>=0&&f-_>=0)return ic.subVectors(r,i),a=(u-h)/(u-h+(f-_)),t.copy(i).addScaledVector(ic,a);const p=1/(m+g+d);return o=g*p,a=d*p,t.copy(n).addScaledVector(Ni,o).addScaledVector(Fi,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Vh={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},$n={h:0,s:0,l:0},fr={h:0,s:0,l:0};function Ro(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,He.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=He.workingColorSpace){return this.r=e,this.g=t,this.b=n,He.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=He.workingColorSpace){if(e=cl(e,1),t=xt(t,0,1),n=xt(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Ro(o,r,e+1/3),this.g=Ro(o,r,e),this.b=Ro(o,r,e-1/3)}return He.toWorkingColorSpace(this,i),this}setStyle(e,t=vt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vt){const n=Vh[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=zn(e.r),this.g=zn(e.g),this.b=zn(e.b),this}copyLinearToSRGB(e){return this.r=ts(e.r),this.g=ts(e.g),this.b=ts(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vt){return He.fromWorkingColorSpace(It.copy(this),e),Math.round(xt(It.r*255,0,255))*65536+Math.round(xt(It.g*255,0,255))*256+Math.round(xt(It.b*255,0,255))}getHexString(e=vt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=He.workingColorSpace){He.fromWorkingColorSpace(It.copy(this),t);const n=It.r,i=It.g,r=It.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-n)/u+2;break;case r:l=(n-i)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=He.workingColorSpace){return He.fromWorkingColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=vt){He.fromWorkingColorSpace(It.copy(this),e);const t=It.r,n=It.g,i=It.b;return e!==vt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL($n),this.setHSL($n.h+e,$n.s+t,$n.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL($n),e.getHSL(fr);const n=Vs($n.h,fr.h,t),i=Vs($n.s,fr.s,t),r=Vs($n.l,fr.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Se;Se.NAMES=Vh;let lf=0;class sn extends oi{static get type(){return"Material"}get type(){return this.constructor.type}set type(e){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lf++}),this.uuid=pn(),this.name="",this.blending=Qi,this.side=vn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ia,this.blendDst=sa,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Se(0,0,0),this.blendAlpha=0,this.depthFunc=os,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kl,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ai,this.stencilZFail=Ai,this.stencilZPass=Ai,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Qi&&(n.blending=this.blending),this.side!==vn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==ia&&(n.blendSrc=this.blendSrc),this.blendDst!==sa&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==os&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==kl&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ai&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ai&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ai&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class yt extends sn{static get type(){return"MeshBasicMaterial"}constructor(e){super(),this.isMeshBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.combine=bh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const mt=new M,pr=new ie;class Nt{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ha,this.updateRanges=[],this.gpuType=fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)pr.fromBufferAttribute(this,t),pr.applyMatrix3(e),this.setXY(t,pr.x,pr.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix3(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyMatrix4(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.applyNormalMatrix(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)mt.fromBufferAttribute(this,t),mt.transformDirection(e),this.setXYZ(t,mt.x,mt.y,mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=dn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=dn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=dn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=dn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ha&&(e.usage=this.usage),e}}class Gh extends Nt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Wh extends Nt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class lt extends Nt{constructor(e,t,n){super(new Float32Array(e),t,n)}}let cf=0;const Zt=new Ae,Co=new nt,Oi=new M,qt=new Ht,As=new Ht,At=new M;class Et extends oi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:cf++}),this.uuid=pn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(zh(e)?Wh:Gh)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Ue().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Co.lookAt(e),Co.updateMatrix(),this.applyMatrix4(Co.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Oi).negate(),this.translate(Oi.x,Oi.y,Oi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,r=e.length;i<r;i++){const o=e[i];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new lt(n,3))}else{for(let n=0,i=t.count;n<i;n++){const r=e[n];t.setXYZ(n,r.x,r.y,r.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ht);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new M(-1/0,-1/0,-1/0),new M(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];qt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,qt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,qt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(qt.min),this.boundingBox.expandByPoint(qt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new M,1/0);return}if(e){const n=this.boundingSphere.center;if(qt.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];As.setFromBufferAttribute(a),this.morphTargetsRelative?(At.addVectors(qt.min,As.min),qt.expandByPoint(At),At.addVectors(qt.max,As.max),qt.expandByPoint(At)):(qt.expandByPoint(As.min),qt.expandByPoint(As.max))}qt.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)At.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(At));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)At.fromBufferAttribute(a,c),l&&(Oi.fromBufferAttribute(e,c),At.add(Oi)),i=Math.max(i,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Nt(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let P=0;P<n.count;P++)a[P]=new M,l[P]=new M;const c=new M,h=new M,u=new M,d=new ie,f=new ie,_=new ie,g=new M,m=new M;function p(P,T,b){c.fromBufferAttribute(n,P),h.fromBufferAttribute(n,T),u.fromBufferAttribute(n,b),d.fromBufferAttribute(r,P),f.fromBufferAttribute(r,T),_.fromBufferAttribute(r,b),h.sub(c),u.sub(c),f.sub(d),_.sub(d);const I=1/(f.x*_.y-_.x*f.y);isFinite(I)&&(g.copy(h).multiplyScalar(_.y).addScaledVector(u,-f.y).multiplyScalar(I),m.copy(u).multiplyScalar(f.x).addScaledVector(h,-_.x).multiplyScalar(I),a[P].add(g),a[T].add(g),a[b].add(g),l[P].add(m),l[T].add(m),l[b].add(m))}let x=this.groups;x.length===0&&(x=[{start:0,count:e.count}]);for(let P=0,T=x.length;P<T;++P){const b=x[P],I=b.start,k=b.count;for(let O=I,H=I+k;O<H;O+=3)p(e.getX(O+0),e.getX(O+1),e.getX(O+2))}const y=new M,v=new M,R=new M,E=new M;function C(P){R.fromBufferAttribute(i,P),E.copy(R);const T=a[P];y.copy(T),y.sub(R.multiplyScalar(R.dot(T))).normalize(),v.crossVectors(E,T);const I=v.dot(l[P])<0?-1:1;o.setXYZW(P,y.x,y.y,y.z,I)}for(let P=0,T=x.length;P<T;++P){const b=x[P],I=b.start,k=b.count;for(let O=I,H=I+k;O<H;O+=3)C(e.getX(O+0)),C(e.getX(O+1)),C(e.getX(O+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Nt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const i=new M,r=new M,o=new M,a=new M,l=new M,c=new M,h=new M,u=new M;if(e)for(let d=0,f=e.count;d<f;d+=3){const _=e.getX(d+0),g=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,_),r.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),a.fromBufferAttribute(n,_),l.fromBufferAttribute(n,g),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(_,a.x,a.y,a.z),n.setXYZ(g,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(i,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let f=0,_=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?f=l[g]*a.data.stride+a.offset:f=l[g]*h;for(let p=0;p<h;p++)d[_++]=c[f++]}return new Nt(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Et,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],f=e(d,n);l.push(f)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const f=c[u];h.push(f.toJSON(e.data))}h.length>0&&(i[l]=h,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const h=i[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const sc=new Ae,hi=new Qs,mr=new Mn,rc=new M,gr=new M,_r=new M,vr=new M,Po=new M,xr=new M,oc=new M,yr=new M;class Oe extends nt{constructor(e=new Et,t=new yt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){xr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Po.fromBufferAttribute(u,e),o?xr.addScaledVector(Po,h):xr.addScaledVector(Po.sub(t),h))}t.add(xr)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),mr.copy(n.boundingSphere),mr.applyMatrix4(r),hi.copy(e.ray).recast(e.near),!(mr.containsPoint(hi.origin)===!1&&(hi.intersectSphere(mr,rc)===null||hi.origin.distanceToSquared(rc)>(e.far-e.near)**2))&&(sc.copy(r).invert(),hi.copy(e.ray).applyMatrix4(sc),!(n.boundingBox!==null&&hi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,hi)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(a.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,R=y;v<R;v+=3){const E=a.getX(v),C=a.getX(v+1),P=a.getX(v+2);i=Mr(this,p,e,n,c,h,u,E,C,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(a.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const x=a.getX(m),y=a.getX(m+1),v=a.getX(m+2);i=Mr(this,o,e,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let _=0,g=d.length;_<g;_++){const m=d[_],p=o[m.materialIndex],x=Math.max(m.start,f.start),y=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let v=x,R=y;v<R;v+=3){const E=v,C=v+1,P=v+2;i=Mr(this,p,e,n,c,h,u,E,C,P),i&&(i.faceIndex=Math.floor(v/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const _=Math.max(0,f.start),g=Math.min(l.count,f.start+f.count);for(let m=_,p=g;m<p;m+=3){const x=m,y=m+1,v=m+2;i=Mr(this,o,e,n,c,h,u,x,y,v),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function hf(s,e,t,n,i,r,o,a){let l;if(e.side===Ut?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===vn,a),l===null)return null;yr.copy(a),yr.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(yr);return c<t.near||c>t.far?null:{distance:c,point:yr.clone(),object:s}}function Mr(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,gr),s.getVertexPosition(l,_r),s.getVertexPosition(c,vr);const h=hf(s,e,t,n,gr,_r,vr,oc);if(h){const u=new M;en.getBarycoord(oc,gr,_r,vr,u),i&&(h.uv=en.getInterpolatedAttribute(i,a,l,c,u,new ie)),r&&(h.uv1=en.getInterpolatedAttribute(r,a,l,c,u,new ie)),o&&(h.normal=en.getInterpolatedAttribute(o,a,l,c,u,new M),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new M,materialIndex:0};en.getNormal(gr,_r,vr,d.normal),h.face=d,h.barycoord=u}return h}class Gt extends Et{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,f=0;_("z","y","x",-1,-1,n,t,e,o,r,0),_("z","y","x",1,-1,n,t,-e,o,r,1),_("x","z","y",1,1,e,n,t,i,o,2),_("x","z","y",1,-1,e,n,-t,i,o,3),_("x","y","z",1,-1,e,t,n,i,r,4),_("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new lt(c,3)),this.setAttribute("normal",new lt(h,3)),this.setAttribute("uv",new lt(u,2));function _(g,m,p,x,y,v,R,E,C,P,T){const b=v/C,I=R/P,k=v/2,O=R/2,H=E/2,K=C+1,W=P+1;let ee=0,G=0;const re=new M;for(let ue=0;ue<W;ue++){const Me=ue*I-O;for(let Be=0;Be<K;Be++){const tt=Be*b-k;re[g]=tt*x,re[m]=Me*y,re[p]=H,c.push(re.x,re.y,re.z),re[g]=0,re[m]=0,re[p]=E>0?1:-1,h.push(re.x,re.y,re.z),u.push(Be/C),u.push(1-ue/P),ee+=1}}for(let ue=0;ue<P;ue++)for(let Me=0;Me<C;Me++){const Be=d+Me+K*ue,tt=d+Me+K*(ue+1),q=d+(Me+1)+K*(ue+1),te=d+(Me+1)+K*ue;l.push(Be,tt,te),l.push(tt,q,te),G+=6}a.addGroup(f,G,T),f+=G,d+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function ds(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function Ot(s){const e={};for(let t=0;t<s.length;t++){const n=ds(s[t]);for(const i in n)e[i]=n[i]}return e}function uf(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Xh(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:He.workingColorSpace}const qh={clone:ds,merge:Ot};var df=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,ff=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends sn{static get type(){return"ShaderMaterial"}constructor(e){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=df,this.fragmentShader=ff,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ds(e.uniforms),this.uniformsGroups=uf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class $h extends nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ae,this.projectionMatrix=new Ae,this.projectionMatrixInverse=new Ae,this.coordinateSystem=Bn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Yn=new M,ac=new ie,lc=new ie;class Lt extends $h{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=us*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Hs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return us*2*Math.atan(Math.tan(Hs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Yn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z),Yn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Yn.x,Yn.y).multiplyScalar(-e/Yn.z)}getViewSize(e,t){return this.getViewBounds(e,ac,lc),t.subVectors(lc,ac)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Hs*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Bi=-90,zi=1;class pf extends nt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Lt(Bi,zi,e,t);i.layers=this.layers,this.add(i);const r=new Lt(Bi,zi,e,t);r.layers=this.layers,this.add(r);const o=new Lt(Bi,zi,e,t);o.layers=this.layers,this.add(o);const a=new Lt(Bi,zi,e,t);a.layers=this.layers,this.add(a);const l=new Lt(Bi,zi,e,t);l.layers=this.layers,this.add(l);const c=new Lt(Bi,zi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Bn)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Yr)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),_=e.xr.enabled;e.xr.enabled=!1;const g=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=g,e.setRenderTarget(n,5,i),e.render(t,h),e.setRenderTarget(u,d,f),e.xr.enabled=_,n.texture.needsPMREMUpdate=!0}}class Yh extends bt{constructor(e,t,n,i,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:as,super(e,t,n,i,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class mf extends ii{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Yh(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Gt(5,5,5),r=new xn({name:"CubemapFromEquirect",uniforms:ds(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Ut,blending:ti});r.uniforms.tEquirect.value=t;const o=new Oe(i,r),a=t.minFilter;return t.minFilter===On&&(t.minFilter=Bt),new pf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Io=new M,gf=new M,_f=new Ue;class Kn{constructor(e=new M(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Io.subVectors(n,t).cross(gf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Io),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||_f.getNormalMatrix(e),i=this.coplanarPoint(Io).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ui=new Mn,Sr=new M;class ul{constructor(e=new Kn,t=new Kn,n=new Kn,i=new Kn,r=new Kn,o=new Kn){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Bn){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],h=i[5],u=i[6],d=i[7],f=i[8],_=i[9],g=i[10],m=i[11],p=i[12],x=i[13],y=i[14],v=i[15];if(n[0].setComponents(l-r,d-c,m-f,v-p).normalize(),n[1].setComponents(l+r,d+c,m+f,v+p).normalize(),n[2].setComponents(l+o,d+h,m+_,v+x).normalize(),n[3].setComponents(l-o,d-h,m-_,v-x).normalize(),n[4].setComponents(l-a,d-u,m-g,v-y).normalize(),t===Bn)n[5].setComponents(l+a,d+u,m+g,v+y).normalize();else if(t===Yr)n[5].setComponents(a,u,g,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ui.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ui.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ui)}intersectsSprite(e){return ui.center.set(0,0,0),ui.radius=.7071067811865476,ui.applyMatrix4(e.matrixWorld),this.intersectsSphere(ui)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Sr.x=i.normal.x>0?e.max.x:e.min.x,Sr.y=i.normal.y>0?e.max.y:e.min.y,Sr.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Sr)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jh(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function vf(s){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,h),a.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(s.bindBuffer(c,a),u.length===0)s.bufferSubData(c,0,h);else{u.sort((f,_)=>f.start-_.start);let d=0;for(let f=1;f<u.length;f++){const _=u[d],g=u[f];g.start<=_.start+_.count+1?_.count=Math.max(_.count,g.start+g.count-_.start):(++d,u[d]=g)}u.length=d+1;for(let f=0,_=u.length;f<_;f++){const g=u[f];s.bufferSubData(c,g.start*h.BYTES_PER_ELEMENT,h,g.start,g.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class bi extends Et{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,h=l+1,u=e/a,d=t/l,f=[],_=[],g=[],m=[];for(let p=0;p<h;p++){const x=p*d-o;for(let y=0;y<c;y++){const v=y*u-r;_.push(v,-x,0),g.push(0,0,1),m.push(y/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let x=0;x<a;x++){const y=x+c*p,v=x+c*(p+1),R=x+1+c*(p+1),E=x+1+c*p;f.push(y,v,E),f.push(v,R,E)}this.setIndex(f),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(g,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bi(e.width,e.height,e.widthSegments,e.heightSegments)}}var xf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,yf=`#ifdef USE_ALPHAHASH
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
#endif`,Mf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Sf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Tf=`#ifdef USE_AOMAP
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
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Af=`#ifdef USE_BATCHING
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
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Cf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Pf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,If=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Lf=`#ifdef USE_IRIDESCENCE
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
#endif`,Df=`#ifdef USE_BUMPMAP
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
#endif`,Uf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Bf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,zf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Hf=`#if defined( USE_COLOR_ALPHA )
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
#endif`,Vf=`#define PI 3.141592653589793
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
} // validated`,Gf=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Wf=`vec3 transformedNormal = objectNormal;
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
#endif`,Xf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$f=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Yf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,jf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Kf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Zf=`#ifdef USE_ENVMAP
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
#endif`,Jf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Qf=`#ifdef USE_ENVMAP
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
#endif`,ep=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
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
#endif`,np=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ip=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,rp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
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
}`,ap=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,cp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,hp=`uniform bool receiveShadow;
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
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,fp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,pp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,mp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,gp=`PhysicalMaterial material;
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
#endif`,_p=`struct PhysicalMaterial {
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
}`,vp=`
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
#endif`,xp=`#if defined( RE_IndirectDiffuse )
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
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Mp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Sp=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bp=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Tp=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ep=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ap=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Rp=`#if defined( USE_POINTS_UV )
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
#endif`,Cp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Pp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ip=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Dp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Up=`#ifdef USE_MORPHTARGETS
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
#endif`,Np=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Fp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Op=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Bp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
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
#endif`,Vp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Gp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Wp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Xp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,qp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,$p=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Yp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Kp=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Zp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Jp=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Qp=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,em=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,tm=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,nm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,im=`float getShadowMask() {
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
#endif`,cm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,um=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,dm=`#ifdef USE_TRANSMISSION
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
#endif`,fm=`#ifdef USE_TRANSMISSION
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
#endif`,_m=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const vm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,xm=`uniform sampler2D t2D;
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
}`,ym=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
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
}`,wm=`#include <common>
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
}`,Tm=`#if DEPTH_PACKING == 3200
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
}`,Pm=`uniform float scale;
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
}`,Im=`uniform vec3 diffuse;
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
}`,Dm=`uniform vec3 diffuse;
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
}`,Fm=`#define MATCAP
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
}`,Om=`#define MATCAP
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
}`,Bm=`#define NORMAL
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
}`,zm=`#define NORMAL
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
}`,Vm=`#define STANDARD
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
}`,Gm=`#define STANDARD
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
}`,$m=`uniform vec3 diffuse;
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
}`,Ym=`#include <common>
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
}`,jm=`uniform vec3 color;
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
}`,Fe={alphahash_fragment:xf,alphahash_pars_fragment:yf,alphamap_fragment:Mf,alphamap_pars_fragment:Sf,alphatest_fragment:bf,alphatest_pars_fragment:wf,aomap_fragment:Tf,aomap_pars_fragment:Ef,batching_pars_vertex:Af,batching_vertex:Rf,begin_vertex:Cf,beginnormal_vertex:Pf,bsdfs:If,iridescence_fragment:Lf,bumpmap_pars_fragment:Df,clipping_planes_fragment:Uf,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Ff,clipping_planes_vertex:Of,color_fragment:Bf,color_pars_fragment:zf,color_pars_vertex:kf,color_vertex:Hf,common:Vf,cube_uv_reflection_fragment:Gf,defaultnormal_vertex:Wf,displacementmap_pars_vertex:Xf,displacementmap_vertex:qf,emissivemap_fragment:$f,emissivemap_pars_fragment:Yf,colorspace_fragment:jf,colorspace_pars_fragment:Kf,envmap_fragment:Zf,envmap_common_pars_fragment:Jf,envmap_pars_fragment:Qf,envmap_pars_vertex:ep,envmap_physical_pars_fragment:up,envmap_vertex:tp,fog_vertex:np,fog_pars_vertex:ip,fog_fragment:sp,fog_pars_fragment:rp,gradientmap_pars_fragment:op,lightmap_pars_fragment:ap,lights_lambert_fragment:lp,lights_lambert_pars_fragment:cp,lights_pars_begin:hp,lights_toon_fragment:dp,lights_toon_pars_fragment:fp,lights_phong_fragment:pp,lights_phong_pars_fragment:mp,lights_physical_fragment:gp,lights_physical_pars_fragment:_p,lights_fragment_begin:vp,lights_fragment_maps:xp,lights_fragment_end:yp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:Sp,logdepthbuf_pars_vertex:bp,logdepthbuf_vertex:wp,map_fragment:Tp,map_pars_fragment:Ep,map_particle_fragment:Ap,map_particle_pars_fragment:Rp,metalnessmap_fragment:Cp,metalnessmap_pars_fragment:Pp,morphinstance_vertex:Ip,morphcolor_vertex:Lp,morphnormal_vertex:Dp,morphtarget_pars_vertex:Up,morphtarget_vertex:Np,normal_fragment_begin:Fp,normal_fragment_maps:Op,normal_pars_fragment:Bp,normal_pars_vertex:zp,normal_vertex:kp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Vp,clearcoat_normal_fragment_maps:Gp,clearcoat_pars_fragment:Wp,iridescence_pars_fragment:Xp,opaque_fragment:qp,packing:$p,premultiplied_alpha_fragment:Yp,project_vertex:jp,dithering_fragment:Kp,dithering_pars_fragment:Zp,roughnessmap_fragment:Jp,roughnessmap_pars_fragment:Qp,shadowmap_pars_fragment:em,shadowmap_pars_vertex:tm,shadowmap_vertex:nm,shadowmask_pars_fragment:im,skinbase_vertex:sm,skinning_pars_vertex:rm,skinning_vertex:om,skinnormal_vertex:am,specularmap_fragment:lm,specularmap_pars_fragment:cm,tonemapping_fragment:hm,tonemapping_pars_fragment:um,transmission_fragment:dm,transmission_pars_fragment:fm,uv_pars_fragment:pm,uv_pars_vertex:mm,uv_vertex:gm,worldpos_vertex:_m,background_vert:vm,background_frag:xm,backgroundCube_vert:ym,backgroundCube_frag:Mm,cube_vert:Sm,cube_frag:bm,depth_vert:wm,depth_frag:Tm,distanceRGBA_vert:Em,distanceRGBA_frag:Am,equirect_vert:Rm,equirect_frag:Cm,linedashed_vert:Pm,linedashed_frag:Im,meshbasic_vert:Lm,meshbasic_frag:Dm,meshlambert_vert:Um,meshlambert_frag:Nm,meshmatcap_vert:Fm,meshmatcap_frag:Om,meshnormal_vert:Bm,meshnormal_frag:zm,meshphong_vert:km,meshphong_frag:Hm,meshphysical_vert:Vm,meshphysical_frag:Gm,meshtoon_vert:Wm,meshtoon_frag:Xm,points_vert:qm,points_frag:$m,shadow_vert:Ym,shadow_frag:jm,sprite_vert:Km,sprite_frag:Zm},ne={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ue}},envmap:{envMap:{value:null},envMapRotation:{value:new Ue},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ue}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ue}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ue},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ue},normalScale:{value:new ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ue},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ue}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ue}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ue}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0},uvTransform:{value:new Ue}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ue},alphaMap:{value:null},alphaMapTransform:{value:new Ue},alphaTest:{value:0}}},_n={basic:{uniforms:Ot([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.fog]),vertexShader:Fe.meshbasic_vert,fragmentShader:Fe.meshbasic_frag},lambert:{uniforms:Ot([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshlambert_vert,fragmentShader:Fe.meshlambert_frag},phong:{uniforms:Ot([ne.common,ne.specularmap,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:Fe.meshphong_vert,fragmentShader:Fe.meshphong_frag},standard:{uniforms:Ot([ne.common,ne.envmap,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.roughnessmap,ne.metalnessmap,ne.fog,ne.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag},toon:{uniforms:Ot([ne.common,ne.aomap,ne.lightmap,ne.emissivemap,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.gradientmap,ne.fog,ne.lights,{emissive:{value:new Se(0)}}]),vertexShader:Fe.meshtoon_vert,fragmentShader:Fe.meshtoon_frag},matcap:{uniforms:Ot([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,ne.fog,{matcap:{value:null}}]),vertexShader:Fe.meshmatcap_vert,fragmentShader:Fe.meshmatcap_frag},points:{uniforms:Ot([ne.points,ne.fog]),vertexShader:Fe.points_vert,fragmentShader:Fe.points_frag},dashed:{uniforms:Ot([ne.common,ne.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Fe.linedashed_vert,fragmentShader:Fe.linedashed_frag},depth:{uniforms:Ot([ne.common,ne.displacementmap]),vertexShader:Fe.depth_vert,fragmentShader:Fe.depth_frag},normal:{uniforms:Ot([ne.common,ne.bumpmap,ne.normalmap,ne.displacementmap,{opacity:{value:1}}]),vertexShader:Fe.meshnormal_vert,fragmentShader:Fe.meshnormal_frag},sprite:{uniforms:Ot([ne.sprite,ne.fog]),vertexShader:Fe.sprite_vert,fragmentShader:Fe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ue},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Fe.background_vert,fragmentShader:Fe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ue}},vertexShader:Fe.backgroundCube_vert,fragmentShader:Fe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Fe.cube_vert,fragmentShader:Fe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Fe.equirect_vert,fragmentShader:Fe.equirect_frag},distanceRGBA:{uniforms:Ot([ne.common,ne.displacementmap,{referencePosition:{value:new M},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Fe.distanceRGBA_vert,fragmentShader:Fe.distanceRGBA_frag},shadow:{uniforms:Ot([ne.lights,ne.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:Fe.shadow_vert,fragmentShader:Fe.shadow_frag}};_n.physical={uniforms:Ot([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ue},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ue},clearcoatNormalScale:{value:new ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ue},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ue},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ue},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ue},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ue},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ue},transmissionSamplerSize:{value:new ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ue},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ue},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ue},anisotropyVector:{value:new ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ue}}]),vertexShader:Fe.meshphysical_vert,fragmentShader:Fe.meshphysical_frag};const br={r:0,b:0,g:0},di=new Vt,Jm=new Ae;function Qm(s,e,t,n,i,r,o){const a=new Se(0);let l=r===!0?0:1,c,h,u=null,d=0,f=null;function _(x){let y=x.isScene===!0?x.background:null;return y&&y.isTexture&&(y=(x.backgroundBlurriness>0?t:e).get(y)),y}function g(x){let y=!1;const v=_(x);v===null?p(a,l):v&&v.isColor&&(p(v,1),y=!0);const R=s.xr.getEnvironmentBlendMode();R==="additive"?n.buffers.color.setClear(0,0,0,1,o):R==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(x,y){const v=_(y);v&&(v.isCubeTexture||v.mapping===Zr)?(h===void 0&&(h=new Oe(new Gt(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:ds(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Ut,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(R,E,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),di.copy(y.backgroundRotation),di.x*=-1,di.y*=-1,di.z*=-1,v.isCubeTexture&&v.isRenderTargetTexture===!1&&(di.y*=-1,di.z*=-1),h.material.uniforms.envMap.value=v,h.material.uniforms.flipEnvMap.value=v.isCubeTexture&&v.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Jm.makeRotationFromEuler(di)),h.material.toneMapped=He.getTransfer(v.colorSpace)!==et,(u!==v||d!==v.version||f!==s.toneMapping)&&(h.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),h.layers.enableAll(),x.unshift(h,h.geometry,h.material,0,0,null)):v&&v.isTexture&&(c===void 0&&(c=new Oe(new bi(2,2),new xn({name:"BackgroundMaterial",uniforms:ds(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:vn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=v,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=He.getTransfer(v.colorSpace)!==et,v.matrixAutoUpdate===!0&&v.updateMatrix(),c.material.uniforms.uvTransform.value.copy(v.matrix),(u!==v||d!==v.version||f!==s.toneMapping)&&(c.material.needsUpdate=!0,u=v,d=v.version,f=s.toneMapping),c.layers.enableAll(),x.unshift(c,c.geometry,c.material,0,0,null))}function p(x,y){x.getRGB(br,Xh(s)),n.buffers.color.setClear(br.r,br.g,br.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(x,y=1){a.set(x),l=y,p(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(x){l=x,p(a,l)},render:g,addToRenderList:m}}function eg(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(b,I,k,O,H){let K=!1;const W=u(O,k,I);r!==W&&(r=W,c(r.object)),K=f(b,O,k,H),K&&_(b,O,k,H),H!==null&&e.update(H,s.ELEMENT_ARRAY_BUFFER),(K||o)&&(o=!1,v(b,I,k,O),H!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return s.createVertexArray()}function c(b){return s.bindVertexArray(b)}function h(b){return s.deleteVertexArray(b)}function u(b,I,k){const O=k.wireframe===!0;let H=n[b.id];H===void 0&&(H={},n[b.id]=H);let K=H[I.id];K===void 0&&(K={},H[I.id]=K);let W=K[O];return W===void 0&&(W=d(l()),K[O]=W),W}function d(b){const I=[],k=[],O=[];for(let H=0;H<t;H++)I[H]=0,k[H]=0,O[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:k,attributeDivisors:O,object:b,attributes:{},index:null}}function f(b,I,k,O){const H=r.attributes,K=I.attributes;let W=0;const ee=k.getAttributes();for(const G in ee)if(ee[G].location>=0){const ue=H[G];let Me=K[G];if(Me===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(Me=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(Me=b.instanceColor)),ue===void 0||ue.attribute!==Me||Me&&ue.data!==Me.data)return!0;W++}return r.attributesNum!==W||r.index!==O}function _(b,I,k,O){const H={},K=I.attributes;let W=0;const ee=k.getAttributes();for(const G in ee)if(ee[G].location>=0){let ue=K[G];ue===void 0&&(G==="instanceMatrix"&&b.instanceMatrix&&(ue=b.instanceMatrix),G==="instanceColor"&&b.instanceColor&&(ue=b.instanceColor));const Me={};Me.attribute=ue,ue&&ue.data&&(Me.data=ue.data),H[G]=Me,W++}r.attributes=H,r.attributesNum=W,r.index=O}function g(){const b=r.newAttributes;for(let I=0,k=b.length;I<k;I++)b[I]=0}function m(b){p(b,0)}function p(b,I){const k=r.newAttributes,O=r.enabledAttributes,H=r.attributeDivisors;k[b]=1,O[b]===0&&(s.enableVertexAttribArray(b),O[b]=1),H[b]!==I&&(s.vertexAttribDivisor(b,I),H[b]=I)}function x(){const b=r.newAttributes,I=r.enabledAttributes;for(let k=0,O=I.length;k<O;k++)I[k]!==b[k]&&(s.disableVertexAttribArray(k),I[k]=0)}function y(b,I,k,O,H,K,W){W===!0?s.vertexAttribIPointer(b,I,k,H,K):s.vertexAttribPointer(b,I,k,O,H,K)}function v(b,I,k,O){g();const H=O.attributes,K=k.getAttributes(),W=I.defaultAttributeValues;for(const ee in K){const G=K[ee];if(G.location>=0){let re=H[ee];if(re===void 0&&(ee==="instanceMatrix"&&b.instanceMatrix&&(re=b.instanceMatrix),ee==="instanceColor"&&b.instanceColor&&(re=b.instanceColor)),re!==void 0){const ue=re.normalized,Me=re.itemSize,Be=e.get(re);if(Be===void 0)continue;const tt=Be.buffer,q=Be.type,te=Be.bytesPerElement,ve=q===s.INT||q===s.UNSIGNED_INT||re.gpuType===el;if(re.isInterleavedBufferAttribute){const oe=re.data,Ee=oe.stride,Ie=re.offset;if(oe.isInstancedInterleavedBuffer){for(let ze=0;ze<G.locationSize;ze++)p(G.location+ze,oe.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let ze=0;ze<G.locationSize;ze++)m(G.location+ze);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ze=0;ze<G.locationSize;ze++)y(G.location+ze,Me/G.locationSize,q,ue,Ee*te,(Ie+Me/G.locationSize*ze)*te,ve)}else{if(re.isInstancedBufferAttribute){for(let oe=0;oe<G.locationSize;oe++)p(G.location+oe,re.meshPerAttribute);b.isInstancedMesh!==!0&&O._maxInstanceCount===void 0&&(O._maxInstanceCount=re.meshPerAttribute*re.count)}else for(let oe=0;oe<G.locationSize;oe++)m(G.location+oe);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let oe=0;oe<G.locationSize;oe++)y(G.location+oe,Me/G.locationSize,q,ue,Me*te,Me/G.locationSize*oe*te,ve)}}else if(W!==void 0){const ue=W[ee];if(ue!==void 0)switch(ue.length){case 2:s.vertexAttrib2fv(G.location,ue);break;case 3:s.vertexAttrib3fv(G.location,ue);break;case 4:s.vertexAttrib4fv(G.location,ue);break;default:s.vertexAttrib1fv(G.location,ue)}}}}x()}function R(){P();for(const b in n){const I=n[b];for(const k in I){const O=I[k];for(const H in O)h(O[H].object),delete O[H];delete I[k]}delete n[b]}}function E(b){if(n[b.id]===void 0)return;const I=n[b.id];for(const k in I){const O=I[k];for(const H in O)h(O[H].object),delete O[H];delete I[k]}delete n[b.id]}function C(b){for(const I in n){const k=n[I];if(k[b.id]===void 0)continue;const O=k[b.id];for(const H in O)h(O[H].object),delete O[H];delete k[b.id]}}function P(){T(),o=!0,r!==i&&(r=i,c(r.object))}function T(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:P,resetDefaultState:T,dispose:R,releaseStatesOfGeometry:E,releaseStatesOfProgram:C,initAttributes:g,enableAttribute:m,disableUnusedAttributes:x}}function tg(s,e,t){let n;function i(c){n=c}function r(c,h){s.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(s.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let f=0;for(let _=0;_<u;_++)f+=h[_];t.update(f,n,1)}function l(c,h,u,d){if(u===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let _=0;_<c.length;_++)o(c[_],h[_],d[_]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let _=0;for(let g=0;g<u;g++)_+=h[g]*d[g];t.update(_,n,1)}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function ng(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const C=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(C){return!(C!==$t&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const P=C===_s&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(C!==kn&&n.convert(C)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==fn&&!P)}function l(C){if(C==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),_=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),p=s.getParameter(s.MAX_VERTEX_ATTRIBS),x=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),v=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),R=_>0,E=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:f,maxVertexTextures:_,maxTextureSize:g,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:x,maxVaryings:y,maxFragmentUniforms:v,vertexTextures:R,maxSamples:E}}function ig(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new Kn,a=new Ue,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||n!==0||i;return i=d,n=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,f){const _=u.clippingPlanes,g=u.clipIntersection,m=u.clipShadows,p=s.get(u);if(!i||_===null||_.length===0||r&&!m)r?h(null):c();else{const x=r?0:n,y=x*4;let v=p.clippingState||null;l.value=v,v=h(_,d,y,f);for(let R=0;R!==y;++R)v[R]=t[R];p.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=x}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,f,_){const g=u!==null?u.length:0;let m=null;if(g!==0){if(m=l.value,_!==!0||m===null){const p=f+g*4,x=d.matrixWorldInverse;a.getNormalMatrix(x),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,v=f;y!==g;++y,v+=4)o.copy(u[y]).applyMatrix4(x,a),o.normal.toArray(m,v),m[v+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function sg(s){let e=new WeakMap;function t(o,a){return a===da?o.mapping=as:a===fa&&(o.mapping=ls),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===da||a===fa)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new mf(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class dl extends $h{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const Zi=4,cc=[.125,.215,.35,.446,.526,.582],vi=20,Lo=new dl,hc=new Se;let Do=null,Uo=0,No=0,Fo=!1;const gi=(1+Math.sqrt(5))/2,ki=1/gi,uc=[new M(-gi,ki,0),new M(gi,ki,0),new M(-ki,0,gi),new M(ki,0,gi),new M(0,gi,-ki),new M(0,gi,ki),new M(-1,1,-1),new M(1,1,-1),new M(-1,1,1),new M(1,1,1)];class dc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mc(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pc(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Do,Uo,No),this._renderer.xr.enabled=Fo,e.scissorTest=!1,wr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===as||e.mapping===ls?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Do=this._renderer.getRenderTarget(),Uo=this._renderer.getActiveCubeFace(),No=this._renderer.getActiveMipmapLevel(),Fo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:_s,format:$t,colorSpace:zt,depthBuffer:!1},i=fc(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fc(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=rg(r)),this._blurMaterial=og(r,e,t)}return i}_compileMaterial(e){const t=new Oe(this._lodPlanes[0],e);this._renderer.compile(t,Lo)}_sceneToCubeUV(e,t,n,i){const a=new Lt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(hc),h.toneMapping=ni,h.autoClear=!1;const f=new yt({name:"PMREM.Background",side:Ut,depthWrite:!1,depthTest:!1}),_=new Oe(new Gt,f);let g=!1;const m=e.background;m?m.isColor&&(f.color.copy(m),e.background=null,g=!0):(f.color.copy(hc),g=!0);for(let p=0;p<6;p++){const x=p%3;x===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):x===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const y=this._cubeSize;wr(i,x*y,p>2?y:0,y,y),h.setRenderTarget(i),g&&h.render(_,a),h.render(e,a)}_.geometry.dispose(),_.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===as||e.mapping===ls;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=mc()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pc());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;wr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Lo)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uc[(i-r-1)%uc.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Oe(this._lodPlanes[i],c),d=c.uniforms,f=this._sizeLods[n]-1,_=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vi-1),g=r/_,m=isFinite(r)?1+Math.floor(h*g):vi;m>vi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${vi}`);const p=[];let x=0;for(let C=0;C<vi;++C){const P=C/g,T=Math.exp(-P*P/2);p.push(T),C===0?x+=T:C<m&&(x+=2*T)}for(let C=0;C<p.length;C++)p[C]=p[C]/x;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=_,d.mipInt.value=y-n;const v=this._sizeLods[i],R=3*v*(i>y-Zi?i-y+Zi:0),E=4*(this._cubeSize-v);wr(t,R,E,3*v,2*v),l.setRenderTarget(t),l.render(u,Lo)}}function rg(s){const e=[],t=[],n=[];let i=s;const r=s-Zi+1+cc.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-Zi?l=cc[o-s+Zi-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],f=6,_=6,g=3,m=2,p=1,x=new Float32Array(g*_*f),y=new Float32Array(m*_*f),v=new Float32Array(p*_*f);for(let E=0;E<f;E++){const C=E%3*2/3-1,P=E>2?0:-1,T=[C,P,0,C+2/3,P,0,C+2/3,P+1,0,C,P,0,C+2/3,P+1,0,C,P+1,0];x.set(T,g*_*E),y.set(d,m*_*E);const b=[E,E,E,E,E,E];v.set(b,p*_*E)}const R=new Et;R.setAttribute("position",new Nt(x,g)),R.setAttribute("uv",new Nt(y,m)),R.setAttribute("faceIndex",new Nt(v,p)),e.push(R),i>Zi&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function fc(s,e,t){const n=new ii(s,e,t);return n.texture.mapping=Zr,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function wr(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function og(s,e,t){const n=new Float32Array(vi),i=new M(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:vi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:fl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function pc(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:fl(),fragmentShader:`

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
		`,blending:ti,depthTest:!1,depthWrite:!1})}function mc(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:fl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ti,depthTest:!1,depthWrite:!1})}function fl(){return`

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
	`}function ag(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===da||l===fa,h=l===as||l===ls;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new dc(s)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return c&&f&&f.height>0||h&&f&&i(f)?(t===null&&(t=new dc(s)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function lg(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&zs("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function cg(s,e,t,n){const i={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const _ in d.attributes)e.remove(d.attributes[_]);for(const _ in d.morphAttributes){const g=d.morphAttributes[_];for(let m=0,p=g.length;m<p;m++)e.remove(g[m])}d.removeEventListener("dispose",o),delete i[d.id];const f=r.get(d);f&&(e.remove(f),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const _ in d)e.update(d[_],s.ARRAY_BUFFER);const f=u.morphAttributes;for(const _ in f){const g=f[_];for(let m=0,p=g.length;m<p;m++)e.update(g[m],s.ARRAY_BUFFER)}}function c(u){const d=[],f=u.index,_=u.attributes.position;let g=0;if(f!==null){const x=f.array;g=f.version;for(let y=0,v=x.length;y<v;y+=3){const R=x[y+0],E=x[y+1],C=x[y+2];d.push(R,E,E,C,C,R)}}else if(_!==void 0){const x=_.array;g=_.version;for(let y=0,v=x.length/3-1;y<v;y+=3){const R=y+0,E=y+1,C=y+2;d.push(R,E,E,C,C,R)}}else return;const m=new(zh(d)?Wh:Gh)(d,1);m.version=g;const p=r.get(u);p&&e.remove(p),r.set(u,m)}function h(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function hg(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,f){s.drawElements(n,f,r,d*o),t.update(f,n,1)}function c(d,f,_){_!==0&&(s.drawElementsInstanced(n,f,r,d*o,_),t.update(f,n,_))}function h(d,f,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,d,0,_);let m=0;for(let p=0;p<_;p++)m+=f[p];t.update(m,n,1)}function u(d,f,_,g){if(_===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<d.length;p++)c(d[p]/o,f[p],g[p]);else{m.multiDrawElementsInstancedWEBGL(n,f,0,r,d,0,g,0,_);let p=0;for(let x=0;x<_;x++)p+=f[x]*g[x];t.update(p,n,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function ug(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function dg(s,e,t){const n=new WeakMap,i=new $e;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let T=function(){C.dispose(),n.delete(a),a.removeEventListener("dispose",T)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,g=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],p=a.morphAttributes.normal||[],x=a.morphAttributes.color||[];let y=0;f===!0&&(y=1),_===!0&&(y=2),g===!0&&(y=3);let v=a.attributes.position.count*y,R=1;v>e.maxTextureSize&&(R=Math.ceil(v/e.maxTextureSize),v=e.maxTextureSize);const E=new Float32Array(v*R*4*u),C=new Hh(E,v,R,u);C.type=fn,C.needsUpdate=!0;const P=y*4;for(let b=0;b<u;b++){const I=m[b],k=p[b],O=x[b],H=v*R*4*b;for(let K=0;K<I.count;K++){const W=K*P;f===!0&&(i.fromBufferAttribute(I,K),E[H+W+0]=i.x,E[H+W+1]=i.y,E[H+W+2]=i.z,E[H+W+3]=0),_===!0&&(i.fromBufferAttribute(k,K),E[H+W+4]=i.x,E[H+W+5]=i.y,E[H+W+6]=i.z,E[H+W+7]=0),g===!0&&(i.fromBufferAttribute(O,K),E[H+W+8]=i.x,E[H+W+9]=i.y,E[H+W+10]=i.z,E[H+W+11]=O.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new ie(v,R)},n.set(a,d),a.addEventListener("dispose",T)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let f=0;for(let g=0;g<c.length;g++)f+=c[g];const _=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",_),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function fg(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(i.get(u)!==c&&(e.update(u),i.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return u}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Kh extends bt{constructor(e,t,n,i,r,o,a,l,c,h=es){if(h!==es&&h!==hs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===es&&(n=Si),n===void 0&&h===hs&&(n=cs),super(null,i,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=l!==void 0?l:St,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Zh=new bt,gc=new Kh(1,1),Jh=new Hh,Qh=new Qd,eu=new Yh,_c=[],vc=[],xc=new Float32Array(16),yc=new Float32Array(9),Mc=new Float32Array(4);function vs(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=_c[i];if(r===void 0&&(r=new Float32Array(i),_c[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function wt(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function Tt(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Qr(s,e){let t=vc[e];t===void 0&&(t=new Int32Array(e),vc[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function pg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function mg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2fv(this.addr,e),Tt(t,e)}}function gg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;s.uniform3fv(this.addr,e),Tt(t,e)}}function _g(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4fv(this.addr,e),Tt(t,e)}}function vg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;Mc.set(n),s.uniformMatrix2fv(this.addr,!1,Mc),Tt(t,n)}}function xg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;yc.set(n),s.uniformMatrix3fv(this.addr,!1,yc),Tt(t,n)}}function yg(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(wt(t,n))return;xc.set(n),s.uniformMatrix4fv(this.addr,!1,xc),Tt(t,n)}}function Mg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Sg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2iv(this.addr,e),Tt(t,e)}}function bg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3iv(this.addr,e),Tt(t,e)}}function wg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4iv(this.addr,e),Tt(t,e)}}function Tg(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Eg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;s.uniform2uiv(this.addr,e),Tt(t,e)}}function Ag(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;s.uniform3uiv(this.addr,e),Tt(t,e)}}function Rg(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;s.uniform4uiv(this.addr,e),Tt(t,e)}}function Cg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(gc.compareFunction=Bh,r=gc):r=Zh,t.setTexture2D(e||r,i)}function Pg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Qh,i)}function Ig(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||eu,i)}function Lg(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Jh,i)}function Dg(s){switch(s){case 5126:return pg;case 35664:return mg;case 35665:return gg;case 35666:return _g;case 35674:return vg;case 35675:return xg;case 35676:return yg;case 5124:case 35670:return Mg;case 35667:case 35671:return Sg;case 35668:case 35672:return bg;case 35669:case 35673:return wg;case 5125:return Tg;case 36294:return Eg;case 36295:return Ag;case 36296:return Rg;case 35678:case 36198:case 36298:case 36306:case 35682:return Cg;case 35679:case 36299:case 36307:return Pg;case 35680:case 36300:case 36308:case 36293:return Ig;case 36289:case 36303:case 36311:case 36292:return Lg}}function Ug(s,e){s.uniform1fv(this.addr,e)}function Ng(s,e){const t=vs(e,this.size,2);s.uniform2fv(this.addr,t)}function Fg(s,e){const t=vs(e,this.size,3);s.uniform3fv(this.addr,t)}function Og(s,e){const t=vs(e,this.size,4);s.uniform4fv(this.addr,t)}function Bg(s,e){const t=vs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function zg(s,e){const t=vs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function kg(s,e){const t=vs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Hg(s,e){s.uniform1iv(this.addr,e)}function Vg(s,e){s.uniform2iv(this.addr,e)}function Gg(s,e){s.uniform3iv(this.addr,e)}function Wg(s,e){s.uniform4iv(this.addr,e)}function Xg(s,e){s.uniform1uiv(this.addr,e)}function qg(s,e){s.uniform2uiv(this.addr,e)}function $g(s,e){s.uniform3uiv(this.addr,e)}function Yg(s,e){s.uniform4uiv(this.addr,e)}function jg(s,e,t){const n=this.cache,i=e.length,r=Qr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Zh,r[o])}function Kg(s,e,t){const n=this.cache,i=e.length,r=Qr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Qh,r[o])}function Zg(s,e,t){const n=this.cache,i=e.length,r=Qr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||eu,r[o])}function Jg(s,e,t){const n=this.cache,i=e.length,r=Qr(t,i);wt(n,r)||(s.uniform1iv(this.addr,r),Tt(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Jh,r[o])}function Qg(s){switch(s){case 5126:return Ug;case 35664:return Ng;case 35665:return Fg;case 35666:return Og;case 35674:return Bg;case 35675:return zg;case 35676:return kg;case 5124:case 35670:return Hg;case 35667:case 35671:return Vg;case 35668:case 35672:return Gg;case 35669:case 35673:return Wg;case 5125:return Xg;case 36294:return qg;case 36295:return $g;case 36296:return Yg;case 35678:case 36198:case 36298:case 36306:case 35682:return jg;case 35679:case 36299:case 36307:return Kg;case 35680:case 36300:case 36308:case 36293:return Zg;case 36289:case 36303:case 36311:case 36292:return Jg}}class e0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Dg(t.type)}}class t0{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qg(t.type)}}class n0{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Oo=/(\w+)(\])?(\[|\.)?/g;function Sc(s,e){s.seq.push(e),s.map[e.id]=e}function i0(s,e,t){const n=s.name,i=n.length;for(Oo.lastIndex=0;;){const r=Oo.exec(n),o=Oo.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){Sc(t,c===void 0?new e0(a,s,e):new t0(a,s,e));break}else{let u=t.map[a];u===void 0&&(u=new n0(a),Sc(t,u)),t=u}}}class Wr{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);i0(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function bc(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const s0=37297;let r0=0;function o0(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}const wc=new Ue;function a0(s){He._getMatrix(wc,He.workingColorSpace,s);const e=`mat3( ${wc.elements.map(t=>t.toFixed(4))} )`;switch(He.getTransfer(s)){case Jr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Tc(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+o0(s.getShaderSource(e),o)}else return i}function l0(s,e){const t=a0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function c0(s,e){let t;switch(e){case ad:t="Linear";break;case ld:t="Reinhard";break;case cd:t="Cineon";break;case wh:t="ACESFilmic";break;case ud:t="AgX";break;case dd:t="Neutral";break;case hd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Tr=new M;function h0(){He.getLuminanceCoefficients(Tr);const s=Tr.x.toFixed(4),e=Tr.y.toFixed(4),t=Tr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function u0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ks).join(`
`)}function d0(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function f0(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function ks(s){return s!==""}function Ec(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ac(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const p0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Va(s){return s.replace(p0,g0)}const m0=new Map;function g0(s,e){let t=Fe[e];if(t===void 0){const n=m0.get(e);if(n!==void 0)t=Fe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Va(t)}const _0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rc(s){return s.replace(_0,v0)}function v0(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Cc(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function x0(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Mh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===Sh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Un&&(e="SHADOWMAP_TYPE_VSM"),e}function y0(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case as:case ls:e="ENVMAP_TYPE_CUBE";break;case Zr:e="ENVMAP_TYPE_CUBE_UV";break}return e}function M0(s){let e="ENVMAP_MODE_REFLECTION";return s.envMap&&s.envMapMode===ls&&(e="ENVMAP_MODE_REFRACTION"),e}function S0(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case bh:e="ENVMAP_BLENDING_MULTIPLY";break;case rd:e="ENVMAP_BLENDING_MIX";break;case od:e="ENVMAP_BLENDING_ADD";break}return e}function b0(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function w0(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=x0(t),c=y0(t),h=M0(t),u=S0(t),d=b0(t),f=u0(t),_=d0(r),g=i.createProgram();let m,p,x=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ks).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_].filter(ks).join(`
`),p.length>0&&(p+=`
`)):(m=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ks).join(`
`),p=[Cc(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,_,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ni?"#define TONE_MAPPING":"",t.toneMapping!==ni?Fe.tonemapping_pars_fragment:"",t.toneMapping!==ni?c0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Fe.colorspace_pars_fragment,l0("linearToOutputTexel",t.outputColorSpace),h0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ks).join(`
`)),o=Va(o),o=Ec(o,t),o=Ac(o,t),a=Va(a),a=Ec(a,t),a=Ac(a,t),o=Rc(o),a=Rc(a),t.isRawShaderMaterial!==!0&&(x=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Hl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Hl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const y=x+m+o,v=x+p+a,R=bc(i,i.VERTEX_SHADER,y),E=bc(i,i.FRAGMENT_SHADER,v);i.attachShader(g,R),i.attachShader(g,E),t.index0AttributeName!==void 0?i.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(g,0,"position"),i.linkProgram(g);function C(I){if(s.debug.checkShaderErrors){const k=i.getProgramInfoLog(g).trim(),O=i.getShaderInfoLog(R).trim(),H=i.getShaderInfoLog(E).trim();let K=!0,W=!0;if(i.getProgramParameter(g,i.LINK_STATUS)===!1)if(K=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,g,R,E);else{const ee=Tc(i,R,"vertex"),G=Tc(i,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(g,i.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+k+`
`+ee+`
`+G)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(O===""||H==="")&&(W=!1);W&&(I.diagnostics={runnable:K,programLog:k,vertexShader:{log:O,prefix:m},fragmentShader:{log:H,prefix:p}})}i.deleteShader(R),i.deleteShader(E),P=new Wr(i,g),T=f0(i,g)}let P;this.getUniforms=function(){return P===void 0&&C(this),P};let T;this.getAttributes=function(){return T===void 0&&C(this),T};let b=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return b===!1&&(b=i.getProgramParameter(g,s0)),b},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=r0++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=R,this.fragmentShader=E,this}let T0=0;class E0{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new A0(e),t.set(e,n)),n}}class A0{constructor(e){this.id=T0++,this.code=e,this.usedTimes=0}}function R0(s,e,t,n,i,r,o){const a=new hl,l=new E0,c=new Set,h=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(T){return c.add(T),T===0?"uv":`uv${T}`}function m(T,b,I,k,O){const H=k.fog,K=O.geometry,W=T.isMeshStandardMaterial?k.environment:null,ee=(T.isMeshStandardMaterial?t:e).get(T.envMap||W),G=ee&&ee.mapping===Zr?ee.image.height:null,re=_[T.type];T.precision!==null&&(f=i.getMaxPrecision(T.precision),f!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",f,"instead."));const ue=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,Me=ue!==void 0?ue.length:0;let Be=0;K.morphAttributes.position!==void 0&&(Be=1),K.morphAttributes.normal!==void 0&&(Be=2),K.morphAttributes.color!==void 0&&(Be=3);let tt,q,te,ve;if(re){const Je=_n[re];tt=Je.vertexShader,q=Je.fragmentShader}else tt=T.vertexShader,q=T.fragmentShader,l.update(T),te=l.getVertexShaderID(T),ve=l.getFragmentShaderID(T);const oe=s.getRenderTarget(),Ee=s.state.buffers.depth.getReversed(),Ie=O.isInstancedMesh===!0,ze=O.isBatchedMesh===!0,ht=!!T.map,Xe=!!T.matcap,ft=!!ee,N=!!T.aoMap,jt=!!T.lightMap,Ve=!!T.bumpMap,Ge=!!T.normalMap,we=!!T.displacementMap,rt=!!T.emissiveMap,be=!!T.metalnessMap,A=!!T.roughnessMap,S=T.anisotropy>0,F=T.clearcoat>0,$=T.dispersion>0,Z=T.iridescence>0,X=T.sheen>0,xe=T.transmission>0,ae=S&&!!T.anisotropyMap,de=F&&!!T.clearcoatMap,qe=F&&!!T.clearcoatNormalMap,J=F&&!!T.clearcoatRoughnessMap,fe=Z&&!!T.iridescenceMap,Te=Z&&!!T.iridescenceThicknessMap,Re=X&&!!T.sheenColorMap,pe=X&&!!T.sheenRoughnessMap,We=!!T.specularMap,Ne=!!T.specularColorMap,it=!!T.specularIntensityMap,L=xe&&!!T.transmissionMap,se=xe&&!!T.thicknessMap,V=!!T.gradientMap,Y=!!T.alphaMap,he=T.alphaTest>0,le=!!T.alphaHash,Le=!!T.extensions;let ut=ni;T.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ut=s.toneMapping);const Ct={shaderID:re,shaderType:T.type,shaderName:T.name,vertexShader:tt,fragmentShader:q,defines:T.defines,customVertexShaderID:te,customFragmentShaderID:ve,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:f,batching:ze,batchingColor:ze&&O._colorsTexture!==null,instancing:Ie,instancingColor:Ie&&O.instanceColor!==null,instancingMorph:Ie&&O.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:zt,alphaToCoverage:!!T.alphaToCoverage,map:ht,matcap:Xe,envMap:ft,envMapMode:ft&&ee.mapping,envMapCubeUVHeight:G,aoMap:N,lightMap:jt,bumpMap:Ve,normalMap:Ge,displacementMap:d&&we,emissiveMap:rt,normalMapObjectSpace:Ge&&T.normalMapType===yd,normalMapTangentSpace:Ge&&T.normalMapType===ll,metalnessMap:be,roughnessMap:A,anisotropy:S,anisotropyMap:ae,clearcoat:F,clearcoatMap:de,clearcoatNormalMap:qe,clearcoatRoughnessMap:J,dispersion:$,iridescence:Z,iridescenceMap:fe,iridescenceThicknessMap:Te,sheen:X,sheenColorMap:Re,sheenRoughnessMap:pe,specularMap:We,specularColorMap:Ne,specularIntensityMap:it,transmission:xe,transmissionMap:L,thicknessMap:se,gradientMap:V,opaque:T.transparent===!1&&T.blending===Qi&&T.alphaToCoverage===!1,alphaMap:Y,alphaTest:he,alphaHash:le,combine:T.combine,mapUv:ht&&g(T.map.channel),aoMapUv:N&&g(T.aoMap.channel),lightMapUv:jt&&g(T.lightMap.channel),bumpMapUv:Ve&&g(T.bumpMap.channel),normalMapUv:Ge&&g(T.normalMap.channel),displacementMapUv:we&&g(T.displacementMap.channel),emissiveMapUv:rt&&g(T.emissiveMap.channel),metalnessMapUv:be&&g(T.metalnessMap.channel),roughnessMapUv:A&&g(T.roughnessMap.channel),anisotropyMapUv:ae&&g(T.anisotropyMap.channel),clearcoatMapUv:de&&g(T.clearcoatMap.channel),clearcoatNormalMapUv:qe&&g(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:J&&g(T.clearcoatRoughnessMap.channel),iridescenceMapUv:fe&&g(T.iridescenceMap.channel),iridescenceThicknessMapUv:Te&&g(T.iridescenceThicknessMap.channel),sheenColorMapUv:Re&&g(T.sheenColorMap.channel),sheenRoughnessMapUv:pe&&g(T.sheenRoughnessMap.channel),specularMapUv:We&&g(T.specularMap.channel),specularColorMapUv:Ne&&g(T.specularColorMap.channel),specularIntensityMapUv:it&&g(T.specularIntensityMap.channel),transmissionMapUv:L&&g(T.transmissionMap.channel),thicknessMapUv:se&&g(T.thicknessMap.channel),alphaMapUv:Y&&g(T.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(Ge||S),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:O.isPoints===!0&&!!K.attributes.uv&&(ht||Y),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:Ee,skinning:O.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:Me,morphTextureStride:Be,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:ut,decodeVideoTexture:ht&&T.map.isVideoTexture===!0&&He.getTransfer(T.map.colorSpace)===et,decodeVideoTextureEmissive:rt&&T.emissiveMap.isVideoTexture===!0&&He.getTransfer(T.emissiveMap.colorSpace)===et,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Qt,flipSided:T.side===Ut,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Le&&T.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Le&&T.extensions.multiDraw===!0||ze)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ct.vertexUv1s=c.has(1),Ct.vertexUv2s=c.has(2),Ct.vertexUv3s=c.has(3),c.clear(),Ct}function p(T){const b=[];if(T.shaderID?b.push(T.shaderID):(b.push(T.customVertexShaderID),b.push(T.customFragmentShaderID)),T.defines!==void 0)for(const I in T.defines)b.push(I),b.push(T.defines[I]);return T.isRawShaderMaterial===!1&&(x(b,T),y(b,T),b.push(s.outputColorSpace)),b.push(T.customProgramCacheKey),b.join()}function x(T,b){T.push(b.precision),T.push(b.outputColorSpace),T.push(b.envMapMode),T.push(b.envMapCubeUVHeight),T.push(b.mapUv),T.push(b.alphaMapUv),T.push(b.lightMapUv),T.push(b.aoMapUv),T.push(b.bumpMapUv),T.push(b.normalMapUv),T.push(b.displacementMapUv),T.push(b.emissiveMapUv),T.push(b.metalnessMapUv),T.push(b.roughnessMapUv),T.push(b.anisotropyMapUv),T.push(b.clearcoatMapUv),T.push(b.clearcoatNormalMapUv),T.push(b.clearcoatRoughnessMapUv),T.push(b.iridescenceMapUv),T.push(b.iridescenceThicknessMapUv),T.push(b.sheenColorMapUv),T.push(b.sheenRoughnessMapUv),T.push(b.specularMapUv),T.push(b.specularColorMapUv),T.push(b.specularIntensityMapUv),T.push(b.transmissionMapUv),T.push(b.thicknessMapUv),T.push(b.combine),T.push(b.fogExp2),T.push(b.sizeAttenuation),T.push(b.morphTargetsCount),T.push(b.morphAttributeCount),T.push(b.numDirLights),T.push(b.numPointLights),T.push(b.numSpotLights),T.push(b.numSpotLightMaps),T.push(b.numHemiLights),T.push(b.numRectAreaLights),T.push(b.numDirLightShadows),T.push(b.numPointLightShadows),T.push(b.numSpotLightShadows),T.push(b.numSpotLightShadowsWithMaps),T.push(b.numLightProbes),T.push(b.shadowMapType),T.push(b.toneMapping),T.push(b.numClippingPlanes),T.push(b.numClipIntersection),T.push(b.depthPacking)}function y(T,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),T.push(a.mask)}function v(T){const b=_[T.type];let I;if(b){const k=_n[b];I=qh.clone(k.uniforms)}else I=T.uniforms;return I}function R(T,b){let I;for(let k=0,O=h.length;k<O;k++){const H=h[k];if(H.cacheKey===b){I=H,++I.usedTimes;break}}return I===void 0&&(I=new w0(s,b,T,r),h.push(I)),I}function E(T){if(--T.usedTimes===0){const b=h.indexOf(T);h[b]=h[h.length-1],h.pop(),T.destroy()}}function C(T){l.remove(T)}function P(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:v,acquireProgram:R,releaseProgram:E,releaseShaderCache:C,programs:h,dispose:P}}function C0(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function P0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Pc(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Ic(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(u,d,f,_,g,m){let p=s[e];return p===void 0?(p={id:u.id,object:u,geometry:d,material:f,groupOrder:_,renderOrder:u.renderOrder,z:g,group:m},s[e]=p):(p.id=u.id,p.object=u,p.geometry=d,p.material=f,p.groupOrder=_,p.renderOrder=u.renderOrder,p.z=g,p.group=m),e++,p}function a(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.push(p):f.transparent===!0?i.push(p):t.push(p)}function l(u,d,f,_,g,m){const p=o(u,d,f,_,g,m);f.transmission>0?n.unshift(p):f.transparent===!0?i.unshift(p):t.unshift(p)}function c(u,d){t.length>1&&t.sort(u||P0),n.length>1&&n.sort(d||Pc),i.length>1&&i.sort(d||Pc)}function h(){for(let u=e,d=s.length;u<d;u++){const f=s[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:h,sort:c}}function I0(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new Ic,s.set(n,[o])):i>=r.length?(o=new Ic,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function L0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new M,color:new Se};break;case"SpotLight":t={position:new M,direction:new M,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new M,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new M,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new M,halfWidth:new M,halfHeight:new M};break}return s[e.id]=t,t}}}function D0(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let U0=0;function N0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function F0(s){const e=new L0,t=D0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new M);const i=new M,r=new Ae,o=new Ae;function a(c){let h=0,u=0,d=0;for(let T=0;T<9;T++)n.probe[T].set(0,0,0);let f=0,_=0,g=0,m=0,p=0,x=0,y=0,v=0,R=0,E=0,C=0;c.sort(N0);for(let T=0,b=c.length;T<b;T++){const I=c[T],k=I.color,O=I.intensity,H=I.distance,K=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)h+=k.r*O,u+=k.g*O,d+=k.b*O;else if(I.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(I.sh.coefficients[W],O);C++}else if(I.isDirectionalLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const ee=I.shadow,G=t.get(I);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,n.directionalShadow[f]=G,n.directionalShadowMap[f]=K,n.directionalShadowMatrix[f]=I.shadow.matrix,x++}n.directional[f]=W,f++}else if(I.isSpotLight){const W=e.get(I);W.position.setFromMatrixPosition(I.matrixWorld),W.color.copy(k).multiplyScalar(O),W.distance=H,W.coneCos=Math.cos(I.angle),W.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),W.decay=I.decay,n.spot[g]=W;const ee=I.shadow;if(I.map&&(n.spotLightMap[R]=I.map,R++,ee.updateMatrices(I),I.castShadow&&E++),n.spotLightMatrix[g]=ee.matrix,I.castShadow){const G=t.get(I);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,n.spotShadow[g]=G,n.spotShadowMap[g]=K,v++}g++}else if(I.isRectAreaLight){const W=e.get(I);W.color.copy(k).multiplyScalar(O),W.halfWidth.set(I.width*.5,0,0),W.halfHeight.set(0,I.height*.5,0),n.rectArea[m]=W,m++}else if(I.isPointLight){const W=e.get(I);if(W.color.copy(I.color).multiplyScalar(I.intensity),W.distance=I.distance,W.decay=I.decay,I.castShadow){const ee=I.shadow,G=t.get(I);G.shadowIntensity=ee.intensity,G.shadowBias=ee.bias,G.shadowNormalBias=ee.normalBias,G.shadowRadius=ee.radius,G.shadowMapSize=ee.mapSize,G.shadowCameraNear=ee.camera.near,G.shadowCameraFar=ee.camera.far,n.pointShadow[_]=G,n.pointShadowMap[_]=K,n.pointShadowMatrix[_]=I.shadow.matrix,y++}n.point[_]=W,_++}else if(I.isHemisphereLight){const W=e.get(I);W.skyColor.copy(I.color).multiplyScalar(O),W.groundColor.copy(I.groundColor).multiplyScalar(O),n.hemi[p]=W,p++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ne.LTC_FLOAT_1,n.rectAreaLTC2=ne.LTC_FLOAT_2):(n.rectAreaLTC1=ne.LTC_HALF_1,n.rectAreaLTC2=ne.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const P=n.hash;(P.directionalLength!==f||P.pointLength!==_||P.spotLength!==g||P.rectAreaLength!==m||P.hemiLength!==p||P.numDirectionalShadows!==x||P.numPointShadows!==y||P.numSpotShadows!==v||P.numSpotMaps!==R||P.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=g,n.rectArea.length=m,n.point.length=_,n.hemi.length=p,n.directionalShadow.length=x,n.directionalShadowMap.length=x,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=v,n.spotShadowMap.length=v,n.directionalShadowMatrix.length=x,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=v+R-E,n.spotLightMap.length=R,n.numSpotLightShadowsWithMaps=E,n.numLightProbes=C,P.directionalLength=f,P.pointLength=_,P.spotLength=g,P.rectAreaLength=m,P.hemiLength=p,P.numDirectionalShadows=x,P.numPointShadows=y,P.numSpotShadows=v,P.numSpotMaps=R,P.numLightProbes=C,n.version=U0++)}function l(c,h){let u=0,d=0,f=0,_=0,g=0;const m=h.matrixWorldInverse;for(let p=0,x=c.length;p<x;p++){const y=c[p];if(y.isDirectionalLight){const v=n.directional[u];v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),u++}else if(y.isSpotLight){const v=n.spot[f];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),v.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),v.direction.sub(i),v.direction.transformDirection(m),f++}else if(y.isRectAreaLight){const v=n.rectArea[_];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),v.halfWidth.set(y.width*.5,0,0),v.halfHeight.set(0,y.height*.5,0),v.halfWidth.applyMatrix4(o),v.halfHeight.applyMatrix4(o),_++}else if(y.isPointLight){const v=n.point[d];v.position.setFromMatrixPosition(y.matrixWorld),v.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const v=n.hemi[g];v.direction.setFromMatrixPosition(y.matrixWorld),v.direction.transformDirection(m),g++}}}return{setup:a,setupView:l,state:n}}function Lc(s){const e=new F0(s),t=[],n=[];function i(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function O0(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new Lc(s),e.set(i,[a])):r>=o.length?(a=new Lc(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class B0 extends sn{static get type(){return"MeshDepthMaterial"}constructor(e){super(),this.isMeshDepthMaterial=!0,this.depthPacking=vd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class z0 extends sn{static get type(){return"MeshDistanceMaterial"}constructor(e){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const k0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,H0=`uniform sampler2D shadow_pass;
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
}`;function V0(s,e,t){let n=new ul;const i=new ie,r=new ie,o=new $e,a=new B0({depthPacking:xd}),l=new z0,c={},h=t.maxTextureSize,u={[vn]:Ut,[Ut]:vn,[Qt]:Qt},d=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ie},radius:{value:4}},vertexShader:k0,fragmentShader:H0}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const _=new Et;_.setAttribute("position",new Nt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Oe(_,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Mh;let p=this.type;this.render=function(E,C,P){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;const T=s.getRenderTarget(),b=s.getActiveCubeFace(),I=s.getActiveMipmapLevel(),k=s.state;k.setBlending(ti),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);const O=p!==Un&&this.type===Un,H=p===Un&&this.type!==Un;for(let K=0,W=E.length;K<W;K++){const ee=E[K],G=ee.shadow;if(G===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(G.autoUpdate===!1&&G.needsUpdate===!1)continue;i.copy(G.mapSize);const re=G.getFrameExtents();if(i.multiply(re),r.copy(G.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/re.x),i.x=r.x*re.x,G.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/re.y),i.y=r.y*re.y,G.mapSize.y=r.y)),G.map===null||O===!0||H===!0){const Me=this.type!==Un?{minFilter:St,magFilter:St}:{};G.map!==null&&G.map.dispose(),G.map=new ii(i.x,i.y,Me),G.map.texture.name=ee.name+".shadowMap",G.camera.updateProjectionMatrix()}s.setRenderTarget(G.map),s.clear();const ue=G.getViewportCount();for(let Me=0;Me<ue;Me++){const Be=G.getViewport(Me);o.set(r.x*Be.x,r.y*Be.y,r.x*Be.z,r.y*Be.w),k.viewport(o),G.updateMatrices(ee,Me),n=G.getFrustum(),v(C,P,G.camera,ee,this.type)}G.isPointLightShadow!==!0&&this.type===Un&&x(G,P),G.needsUpdate=!1}p=this.type,m.needsUpdate=!1,s.setRenderTarget(T,b,I)};function x(E,C){const P=e.update(g);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null&&(E.mapPass=new ii(i.x,i.y)),d.uniforms.shadow_pass.value=E.map.texture,d.uniforms.resolution.value=E.mapSize,d.uniforms.radius.value=E.radius,s.setRenderTarget(E.mapPass),s.clear(),s.renderBufferDirect(C,null,P,d,g,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value=E.mapSize,f.uniforms.radius.value=E.radius,s.setRenderTarget(E.map),s.clear(),s.renderBufferDirect(C,null,P,f,g,null)}function y(E,C,P,T){let b=null;const I=P.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(I!==void 0)b=I;else if(b=P.isPointLight===!0?l:a,s.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const k=b.uuid,O=C.uuid;let H=c[k];H===void 0&&(H={},c[k]=H);let K=H[O];K===void 0&&(K=b.clone(),H[O]=K,C.addEventListener("dispose",R)),b=K}if(b.visible=C.visible,b.wireframe=C.wireframe,T===Un?b.side=C.shadowSide!==null?C.shadowSide:C.side:b.side=C.shadowSide!==null?C.shadowSide:u[C.side],b.alphaMap=C.alphaMap,b.alphaTest=C.alphaTest,b.map=C.map,b.clipShadows=C.clipShadows,b.clippingPlanes=C.clippingPlanes,b.clipIntersection=C.clipIntersection,b.displacementMap=C.displacementMap,b.displacementScale=C.displacementScale,b.displacementBias=C.displacementBias,b.wireframeLinewidth=C.wireframeLinewidth,b.linewidth=C.linewidth,P.isPointLight===!0&&b.isMeshDistanceMaterial===!0){const k=s.properties.get(b);k.light=P}return b}function v(E,C,P,T,b){if(E.visible===!1)return;if(E.layers.test(C.layers)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&b===Un)&&(!E.frustumCulled||n.intersectsObject(E))){E.modelViewMatrix.multiplyMatrices(P.matrixWorldInverse,E.matrixWorld);const O=e.update(E),H=E.material;if(Array.isArray(H)){const K=O.groups;for(let W=0,ee=K.length;W<ee;W++){const G=K[W],re=H[G.materialIndex];if(re&&re.visible){const ue=y(E,re,T,b);E.onBeforeShadow(s,E,C,P,O,ue,G),s.renderBufferDirect(P,null,O,ue,E,G),E.onAfterShadow(s,E,C,P,O,ue,G)}}}else if(H.visible){const K=y(E,H,T,b);E.onBeforeShadow(s,E,C,P,O,K,null),s.renderBufferDirect(P,null,O,K,E,null),E.onAfterShadow(s,E,C,P,O,K,null)}}const k=E.children;for(let O=0,H=k.length;O<H;O++)v(k[O],C,P,T,b)}function R(E){E.target.removeEventListener("dispose",R);for(const P in c){const T=c[P],b=E.target.uuid;b in T&&(T[b].dispose(),delete T[b])}}}const G0={[ra]:oa,[aa]:ha,[la]:ua,[os]:ca,[oa]:ra,[ha]:aa,[ua]:la,[ca]:os};function W0(s,e){function t(){let L=!1;const se=new $e;let V=null;const Y=new $e(0,0,0,0);return{setMask:function(he){V!==he&&!L&&(s.colorMask(he,he,he,he),V=he)},setLocked:function(he){L=he},setClear:function(he,le,Le,ut,Ct){Ct===!0&&(he*=ut,le*=ut,Le*=ut),se.set(he,le,Le,ut),Y.equals(se)===!1&&(s.clearColor(he,le,Le,ut),Y.copy(se))},reset:function(){L=!1,V=null,Y.set(-1,0,0,0)}}}function n(){let L=!1,se=!1,V=null,Y=null,he=null;return{setReversed:function(le){if(se!==le){const Le=e.get("EXT_clip_control");se?Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.ZERO_TO_ONE_EXT):Le.clipControlEXT(Le.LOWER_LEFT_EXT,Le.NEGATIVE_ONE_TO_ONE_EXT);const ut=he;he=null,this.setClear(ut)}se=le},getReversed:function(){return se},setTest:function(le){le?oe(s.DEPTH_TEST):Ee(s.DEPTH_TEST)},setMask:function(le){V!==le&&!L&&(s.depthMask(le),V=le)},setFunc:function(le){if(se&&(le=G0[le]),Y!==le){switch(le){case ra:s.depthFunc(s.NEVER);break;case oa:s.depthFunc(s.ALWAYS);break;case aa:s.depthFunc(s.LESS);break;case os:s.depthFunc(s.LEQUAL);break;case la:s.depthFunc(s.EQUAL);break;case ca:s.depthFunc(s.GEQUAL);break;case ha:s.depthFunc(s.GREATER);break;case ua:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Y=le}},setLocked:function(le){L=le},setClear:function(le){he!==le&&(se&&(le=1-le),s.clearDepth(le),he=le)},reset:function(){L=!1,V=null,Y=null,he=null,se=!1}}}function i(){let L=!1,se=null,V=null,Y=null,he=null,le=null,Le=null,ut=null,Ct=null;return{setTest:function(Je){L||(Je?oe(s.STENCIL_TEST):Ee(s.STENCIL_TEST))},setMask:function(Je){se!==Je&&!L&&(s.stencilMask(Je),se=Je)},setFunc:function(Je,an,En){(V!==Je||Y!==an||he!==En)&&(s.stencilFunc(Je,an,En),V=Je,Y=an,he=En)},setOp:function(Je,an,En){(le!==Je||Le!==an||ut!==En)&&(s.stencilOp(Je,an,En),le=Je,Le=an,ut=En)},setLocked:function(Je){L=Je},setClear:function(Je){Ct!==Je&&(s.clearStencil(Je),Ct=Je)},reset:function(){L=!1,se=null,V=null,Y=null,he=null,le=null,Le=null,ut=null,Ct=null}}}const r=new t,o=new n,a=new i,l=new WeakMap,c=new WeakMap;let h={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,y=null,v=null,R=null,E=null,C=new Se(0,0,0),P=0,T=!1,b=null,I=null,k=null,O=null,H=null;const K=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,ee=0;const G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(G)[1]),W=ee>=1):G.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),W=ee>=2);let re=null,ue={};const Me=s.getParameter(s.SCISSOR_BOX),Be=s.getParameter(s.VIEWPORT),tt=new $e().fromArray(Me),q=new $e().fromArray(Be);function te(L,se,V,Y){const he=new Uint8Array(4),le=s.createTexture();s.bindTexture(L,le),s.texParameteri(L,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(L,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Le=0;Le<V;Le++)L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY?s.texImage3D(se,0,s.RGBA,1,1,Y,0,s.RGBA,s.UNSIGNED_BYTE,he):s.texImage2D(se+Le,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,he);return le}const ve={};ve[s.TEXTURE_2D]=te(s.TEXTURE_2D,s.TEXTURE_2D,1),ve[s.TEXTURE_CUBE_MAP]=te(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[s.TEXTURE_2D_ARRAY]=te(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ve[s.TEXTURE_3D]=te(s.TEXTURE_3D,s.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),oe(s.DEPTH_TEST),o.setFunc(os),Ve(!1),Ge(Fl),oe(s.CULL_FACE),N(ti);function oe(L){h[L]!==!0&&(s.enable(L),h[L]=!0)}function Ee(L){h[L]!==!1&&(s.disable(L),h[L]=!1)}function Ie(L,se){return u[L]!==se?(s.bindFramebuffer(L,se),u[L]=se,L===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=se),L===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=se),!0):!1}function ze(L,se){let V=f,Y=!1;if(L){V=d.get(se),V===void 0&&(V=[],d.set(se,V));const he=L.textures;if(V.length!==he.length||V[0]!==s.COLOR_ATTACHMENT0){for(let le=0,Le=he.length;le<Le;le++)V[le]=s.COLOR_ATTACHMENT0+le;V.length=he.length,Y=!0}}else V[0]!==s.BACK&&(V[0]=s.BACK,Y=!0);Y&&s.drawBuffers(V)}function ht(L){return _!==L?(s.useProgram(L),_=L,!0):!1}const Xe={[_i]:s.FUNC_ADD,[Vu]:s.FUNC_SUBTRACT,[Gu]:s.FUNC_REVERSE_SUBTRACT};Xe[Wu]=s.MIN,Xe[Xu]=s.MAX;const ft={[qu]:s.ZERO,[$u]:s.ONE,[Yu]:s.SRC_COLOR,[ia]:s.SRC_ALPHA,[ed]:s.SRC_ALPHA_SATURATE,[Ju]:s.DST_COLOR,[Ku]:s.DST_ALPHA,[ju]:s.ONE_MINUS_SRC_COLOR,[sa]:s.ONE_MINUS_SRC_ALPHA,[Qu]:s.ONE_MINUS_DST_COLOR,[Zu]:s.ONE_MINUS_DST_ALPHA,[td]:s.CONSTANT_COLOR,[nd]:s.ONE_MINUS_CONSTANT_COLOR,[id]:s.CONSTANT_ALPHA,[sd]:s.ONE_MINUS_CONSTANT_ALPHA};function N(L,se,V,Y,he,le,Le,ut,Ct,Je){if(L===ti){g===!0&&(Ee(s.BLEND),g=!1);return}if(g===!1&&(oe(s.BLEND),g=!0),L!==Hu){if(L!==m||Je!==T){if((p!==_i||v!==_i)&&(s.blendEquation(s.FUNC_ADD),p=_i,v=_i),Je)switch(L){case Qi:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case na:s.blendFunc(s.ONE,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bl:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}else switch(L){case Qi:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case na:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Ol:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Bl:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",L);break}x=null,y=null,R=null,E=null,C.set(0,0,0),P=0,m=L,T=Je}return}he=he||se,le=le||V,Le=Le||Y,(se!==p||he!==v)&&(s.blendEquationSeparate(Xe[se],Xe[he]),p=se,v=he),(V!==x||Y!==y||le!==R||Le!==E)&&(s.blendFuncSeparate(ft[V],ft[Y],ft[le],ft[Le]),x=V,y=Y,R=le,E=Le),(ut.equals(C)===!1||Ct!==P)&&(s.blendColor(ut.r,ut.g,ut.b,Ct),C.copy(ut),P=Ct),m=L,T=!1}function jt(L,se){L.side===Qt?Ee(s.CULL_FACE):oe(s.CULL_FACE);let V=L.side===Ut;se&&(V=!V),Ve(V),L.blending===Qi&&L.transparent===!1?N(ti):N(L.blending,L.blendEquation,L.blendSrc,L.blendDst,L.blendEquationAlpha,L.blendSrcAlpha,L.blendDstAlpha,L.blendColor,L.blendAlpha,L.premultipliedAlpha),o.setFunc(L.depthFunc),o.setTest(L.depthTest),o.setMask(L.depthWrite),r.setMask(L.colorWrite);const Y=L.stencilWrite;a.setTest(Y),Y&&(a.setMask(L.stencilWriteMask),a.setFunc(L.stencilFunc,L.stencilRef,L.stencilFuncMask),a.setOp(L.stencilFail,L.stencilZFail,L.stencilZPass)),rt(L.polygonOffset,L.polygonOffsetFactor,L.polygonOffsetUnits),L.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):Ee(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ve(L){b!==L&&(L?s.frontFace(s.CW):s.frontFace(s.CCW),b=L)}function Ge(L){L!==zu?(oe(s.CULL_FACE),L!==I&&(L===Fl?s.cullFace(s.BACK):L===ku?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):Ee(s.CULL_FACE),I=L}function we(L){L!==k&&(W&&s.lineWidth(L),k=L)}function rt(L,se,V){L?(oe(s.POLYGON_OFFSET_FILL),(O!==se||H!==V)&&(s.polygonOffset(se,V),O=se,H=V)):Ee(s.POLYGON_OFFSET_FILL)}function be(L){L?oe(s.SCISSOR_TEST):Ee(s.SCISSOR_TEST)}function A(L){L===void 0&&(L=s.TEXTURE0+K-1),re!==L&&(s.activeTexture(L),re=L)}function S(L,se,V){V===void 0&&(re===null?V=s.TEXTURE0+K-1:V=re);let Y=ue[V];Y===void 0&&(Y={type:void 0,texture:void 0},ue[V]=Y),(Y.type!==L||Y.texture!==se)&&(re!==V&&(s.activeTexture(V),re=V),s.bindTexture(L,se||ve[L]),Y.type=L,Y.texture=se)}function F(){const L=ue[re];L!==void 0&&L.type!==void 0&&(s.bindTexture(L.type,null),L.type=void 0,L.texture=void 0)}function $(){try{s.compressedTexImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Z(){try{s.compressedTexImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function X(){try{s.texSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function xe(){try{s.texSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function ae(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function de(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function qe(){try{s.texStorage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function J(){try{s.texStorage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function fe(){try{s.texImage2D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Te(){try{s.texImage3D.apply(s,arguments)}catch(L){console.error("THREE.WebGLState:",L)}}function Re(L){tt.equals(L)===!1&&(s.scissor(L.x,L.y,L.z,L.w),tt.copy(L))}function pe(L){q.equals(L)===!1&&(s.viewport(L.x,L.y,L.z,L.w),q.copy(L))}function We(L,se){let V=c.get(se);V===void 0&&(V=new WeakMap,c.set(se,V));let Y=V.get(L);Y===void 0&&(Y=s.getUniformBlockIndex(se,L.name),V.set(L,Y))}function Ne(L,se){const Y=c.get(se).get(L);l.get(se)!==Y&&(s.uniformBlockBinding(se,Y,L.__bindingPointIndex),l.set(se,Y))}function it(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),o.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),h={},re=null,ue={},u={},d=new WeakMap,f=[],_=null,g=!1,m=null,p=null,x=null,y=null,v=null,R=null,E=null,C=new Se(0,0,0),P=0,T=!1,b=null,I=null,k=null,O=null,H=null,tt.set(0,0,s.canvas.width,s.canvas.height),q.set(0,0,s.canvas.width,s.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:oe,disable:Ee,bindFramebuffer:Ie,drawBuffers:ze,useProgram:ht,setBlending:N,setMaterial:jt,setFlipSided:Ve,setCullFace:Ge,setLineWidth:we,setPolygonOffset:rt,setScissorTest:be,activeTexture:A,bindTexture:S,unbindTexture:F,compressedTexImage2D:$,compressedTexImage3D:Z,texImage2D:fe,texImage3D:Te,updateUBOMapping:We,uniformBlockBinding:Ne,texStorage2D:qe,texStorage3D:J,texSubImage2D:X,texSubImage3D:xe,compressedTexSubImage2D:ae,compressedTexSubImage3D:de,scissor:Re,viewport:pe,reset:it}}function Dc(s,e,t,n){const i=X0(n);switch(t){case Ph:return s*e;case Lh:return s*e;case Dh:return s*e*2;case il:return s*e/i.components*i.byteLength;case sl:return s*e/i.components*i.byteLength;case Uh:return s*e*2/i.components*i.byteLength;case rl:return s*e*2/i.components*i.byteLength;case Ih:return s*e*3/i.components*i.byteLength;case $t:return s*e*4/i.components*i.byteLength;case ol:return s*e*4/i.components*i.byteLength;case zr:case kr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Hr:case Vr:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ma:case _a:return Math.max(s,16)*Math.max(e,8)/4;case pa:case ga:return Math.max(s,8)*Math.max(e,8)/2;case va:case xa:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ya:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ma:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Sa:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case ba:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case wa:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Ta:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Ea:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Ca:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ia:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case La:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Da:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Ua:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Gr:case Na:case Fa:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Nh:case Oa:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Ba:case za:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function X0(s){switch(s){case kn:case Ah:return{byteLength:1,components:1};case $s:case Rh:case _s:return{byteLength:2,components:1};case tl:case nl:return{byteLength:2,components:4};case Si:case el:case fn:return{byteLength:4,components:1};case Ch:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function q0(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new ie,h=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(A,S){return f?new OffscreenCanvas(A,S):Ks("canvas")}function g(A,S,F){let $=1;const Z=be(A);if((Z.width>F||Z.height>F)&&($=F/Math.max(Z.width,Z.height)),$<1)if(typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&A instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&A instanceof ImageBitmap||typeof VideoFrame<"u"&&A instanceof VideoFrame){const X=Math.floor($*Z.width),xe=Math.floor($*Z.height);u===void 0&&(u=_(X,xe));const ae=S?_(X,xe):u;return ae.width=X,ae.height=xe,ae.getContext("2d").drawImage(A,0,0,X,xe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+Z.width+"x"+Z.height+") to ("+X+"x"+xe+")."),ae}else return"data"in A&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+Z.width+"x"+Z.height+")."),A;return A}function m(A){return A.generateMipmaps}function p(A){s.generateMipmap(A)}function x(A){return A.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:A.isWebGL3DRenderTarget?s.TEXTURE_3D:A.isWebGLArrayRenderTarget||A.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(A,S,F,$,Z=!1){if(A!==null){if(s[A]!==void 0)return s[A];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+A+"'")}let X=S;if(S===s.RED&&(F===s.FLOAT&&(X=s.R32F),F===s.HALF_FLOAT&&(X=s.R16F),F===s.UNSIGNED_BYTE&&(X=s.R8)),S===s.RED_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.R8UI),F===s.UNSIGNED_SHORT&&(X=s.R16UI),F===s.UNSIGNED_INT&&(X=s.R32UI),F===s.BYTE&&(X=s.R8I),F===s.SHORT&&(X=s.R16I),F===s.INT&&(X=s.R32I)),S===s.RG&&(F===s.FLOAT&&(X=s.RG32F),F===s.HALF_FLOAT&&(X=s.RG16F),F===s.UNSIGNED_BYTE&&(X=s.RG8)),S===s.RG_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RG8UI),F===s.UNSIGNED_SHORT&&(X=s.RG16UI),F===s.UNSIGNED_INT&&(X=s.RG32UI),F===s.BYTE&&(X=s.RG8I),F===s.SHORT&&(X=s.RG16I),F===s.INT&&(X=s.RG32I)),S===s.RGB_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RGB8UI),F===s.UNSIGNED_SHORT&&(X=s.RGB16UI),F===s.UNSIGNED_INT&&(X=s.RGB32UI),F===s.BYTE&&(X=s.RGB8I),F===s.SHORT&&(X=s.RGB16I),F===s.INT&&(X=s.RGB32I)),S===s.RGBA_INTEGER&&(F===s.UNSIGNED_BYTE&&(X=s.RGBA8UI),F===s.UNSIGNED_SHORT&&(X=s.RGBA16UI),F===s.UNSIGNED_INT&&(X=s.RGBA32UI),F===s.BYTE&&(X=s.RGBA8I),F===s.SHORT&&(X=s.RGBA16I),F===s.INT&&(X=s.RGBA32I)),S===s.RGB&&F===s.UNSIGNED_INT_5_9_9_9_REV&&(X=s.RGB9_E5),S===s.RGBA){const xe=Z?Jr:He.getTransfer($);F===s.FLOAT&&(X=s.RGBA32F),F===s.HALF_FLOAT&&(X=s.RGBA16F),F===s.UNSIGNED_BYTE&&(X=xe===et?s.SRGB8_ALPHA8:s.RGBA8),F===s.UNSIGNED_SHORT_4_4_4_4&&(X=s.RGBA4),F===s.UNSIGNED_SHORT_5_5_5_1&&(X=s.RGB5_A1)}return(X===s.R16F||X===s.R32F||X===s.RG16F||X===s.RG32F||X===s.RGBA16F||X===s.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function v(A,S){let F;return A?S===null||S===Si||S===cs?F=s.DEPTH24_STENCIL8:S===fn?F=s.DEPTH32F_STENCIL8:S===$s&&(F=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Si||S===cs?F=s.DEPTH_COMPONENT24:S===fn?F=s.DEPTH_COMPONENT32F:S===$s&&(F=s.DEPTH_COMPONENT16),F}function R(A,S){return m(A)===!0||A.isFramebufferTexture&&A.minFilter!==St&&A.minFilter!==Bt?Math.log2(Math.max(S.width,S.height))+1:A.mipmaps!==void 0&&A.mipmaps.length>0?A.mipmaps.length:A.isCompressedTexture&&Array.isArray(A.image)?S.mipmaps.length:1}function E(A){const S=A.target;S.removeEventListener("dispose",E),P(S),S.isVideoTexture&&h.delete(S)}function C(A){const S=A.target;S.removeEventListener("dispose",C),b(S)}function P(A){const S=n.get(A);if(S.__webglInit===void 0)return;const F=A.source,$=d.get(F);if($){const Z=$[S.__cacheKey];Z.usedTimes--,Z.usedTimes===0&&T(A),Object.keys($).length===0&&d.delete(F)}n.remove(A)}function T(A){const S=n.get(A);s.deleteTexture(S.__webglTexture);const F=A.source,$=d.get(F);delete $[S.__cacheKey],o.memory.textures--}function b(A){const S=n.get(A);if(A.depthTexture&&(A.depthTexture.dispose(),n.remove(A.depthTexture)),A.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(S.__webglFramebuffer[$]))for(let Z=0;Z<S.__webglFramebuffer[$].length;Z++)s.deleteFramebuffer(S.__webglFramebuffer[$][Z]);else s.deleteFramebuffer(S.__webglFramebuffer[$]);S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer[$])}else{if(Array.isArray(S.__webglFramebuffer))for(let $=0;$<S.__webglFramebuffer.length;$++)s.deleteFramebuffer(S.__webglFramebuffer[$]);else s.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&s.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&s.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let $=0;$<S.__webglColorRenderbuffer.length;$++)S.__webglColorRenderbuffer[$]&&s.deleteRenderbuffer(S.__webglColorRenderbuffer[$]);S.__webglDepthRenderbuffer&&s.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const F=A.textures;for(let $=0,Z=F.length;$<Z;$++){const X=n.get(F[$]);X.__webglTexture&&(s.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(F[$])}n.remove(A)}let I=0;function k(){I=0}function O(){const A=I;return A>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+A+" texture units while this GPU supports only "+i.maxTextures),I+=1,A}function H(A){const S=[];return S.push(A.wrapS),S.push(A.wrapT),S.push(A.wrapR||0),S.push(A.magFilter),S.push(A.minFilter),S.push(A.anisotropy),S.push(A.internalFormat),S.push(A.format),S.push(A.type),S.push(A.generateMipmaps),S.push(A.premultiplyAlpha),S.push(A.flipY),S.push(A.unpackAlignment),S.push(A.colorSpace),S.join()}function K(A,S){const F=n.get(A);if(A.isVideoTexture&&we(A),A.isRenderTargetTexture===!1&&A.version>0&&F.__version!==A.version){const $=A.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,A,S);return}}t.bindTexture(s.TEXTURE_2D,F.__webglTexture,s.TEXTURE0+S)}function W(A,S){const F=n.get(A);if(A.version>0&&F.__version!==A.version){q(F,A,S);return}t.bindTexture(s.TEXTURE_2D_ARRAY,F.__webglTexture,s.TEXTURE0+S)}function ee(A,S){const F=n.get(A);if(A.version>0&&F.__version!==A.version){q(F,A,S);return}t.bindTexture(s.TEXTURE_3D,F.__webglTexture,s.TEXTURE0+S)}function G(A,S){const F=n.get(A);if(A.version>0&&F.__version!==A.version){te(F,A,S);return}t.bindTexture(s.TEXTURE_CUBE_MAP,F.__webglTexture,s.TEXTURE0+S)}const re={[Mi]:s.REPEAT,[Qn]:s.CLAMP_TO_EDGE,[qr]:s.MIRRORED_REPEAT},ue={[St]:s.NEAREST,[Eh]:s.NEAREST_MIPMAP_NEAREST,[Bs]:s.NEAREST_MIPMAP_LINEAR,[Bt]:s.LINEAR,[Br]:s.LINEAR_MIPMAP_NEAREST,[On]:s.LINEAR_MIPMAP_LINEAR},Me={[Md]:s.NEVER,[Ad]:s.ALWAYS,[Sd]:s.LESS,[Bh]:s.LEQUAL,[bd]:s.EQUAL,[Ed]:s.GEQUAL,[wd]:s.GREATER,[Td]:s.NOTEQUAL};function Be(A,S){if(S.type===fn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Bt||S.magFilter===Br||S.magFilter===Bs||S.magFilter===On||S.minFilter===Bt||S.minFilter===Br||S.minFilter===Bs||S.minFilter===On)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(A,s.TEXTURE_WRAP_S,re[S.wrapS]),s.texParameteri(A,s.TEXTURE_WRAP_T,re[S.wrapT]),(A===s.TEXTURE_3D||A===s.TEXTURE_2D_ARRAY)&&s.texParameteri(A,s.TEXTURE_WRAP_R,re[S.wrapR]),s.texParameteri(A,s.TEXTURE_MAG_FILTER,ue[S.magFilter]),s.texParameteri(A,s.TEXTURE_MIN_FILTER,ue[S.minFilter]),S.compareFunction&&(s.texParameteri(A,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(A,s.TEXTURE_COMPARE_FUNC,Me[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===St||S.minFilter!==Bs&&S.minFilter!==On||S.type===fn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const F=e.get("EXT_texture_filter_anisotropic");s.texParameterf(A,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,i.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function tt(A,S){let F=!1;A.__webglInit===void 0&&(A.__webglInit=!0,S.addEventListener("dispose",E));const $=S.source;let Z=d.get($);Z===void 0&&(Z={},d.set($,Z));const X=H(S);if(X!==A.__cacheKey){Z[X]===void 0&&(Z[X]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,F=!0),Z[X].usedTimes++;const xe=Z[A.__cacheKey];xe!==void 0&&(Z[A.__cacheKey].usedTimes--,xe.usedTimes===0&&T(S)),A.__cacheKey=X,A.__webglTexture=Z[X].texture}return F}function q(A,S,F){let $=s.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&($=s.TEXTURE_2D_ARRAY),S.isData3DTexture&&($=s.TEXTURE_3D);const Z=tt(A,S),X=S.source;t.bindTexture($,A.__webglTexture,s.TEXTURE0+F);const xe=n.get(X);if(X.version!==xe.__version||Z===!0){t.activeTexture(s.TEXTURE0+F);const ae=He.getPrimaries(He.workingColorSpace),de=S.colorSpace===Zn?null:He.getPrimaries(S.colorSpace),qe=S.colorSpace===Zn||ae===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,qe);let J=g(S.image,!1,i.maxTextureSize);J=rt(S,J);const fe=r.convert(S.format,S.colorSpace),Te=r.convert(S.type);let Re=y(S.internalFormat,fe,Te,S.colorSpace,S.isVideoTexture);Be($,S);let pe;const We=S.mipmaps,Ne=S.isVideoTexture!==!0,it=xe.__version===void 0||Z===!0,L=X.dataReady,se=R(S,J);if(S.isDepthTexture)Re=v(S.format===hs,S.type),it&&(Ne?t.texStorage2D(s.TEXTURE_2D,1,Re,J.width,J.height):t.texImage2D(s.TEXTURE_2D,0,Re,J.width,J.height,0,fe,Te,null));else if(S.isDataTexture)if(We.length>0){Ne&&it&&t.texStorage2D(s.TEXTURE_2D,se,Re,We[0].width,We[0].height);for(let V=0,Y=We.length;V<Y;V++)pe=We[V],Ne?L&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,Te,pe.data):t.texImage2D(s.TEXTURE_2D,V,Re,pe.width,pe.height,0,fe,Te,pe.data);S.generateMipmaps=!1}else Ne?(it&&t.texStorage2D(s.TEXTURE_2D,se,Re,J.width,J.height),L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,J.width,J.height,fe,Te,J.data)):t.texImage2D(s.TEXTURE_2D,0,Re,J.width,J.height,0,fe,Te,J.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ne&&it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Re,We[0].width,We[0].height,J.depth);for(let V=0,Y=We.length;V<Y;V++)if(pe=We[V],S.format!==$t)if(fe!==null)if(Ne){if(L)if(S.layerUpdates.size>0){const he=Dc(pe.width,pe.height,S.format,S.type);for(const le of S.layerUpdates){const Le=pe.data.subarray(le*he/pe.data.BYTES_PER_ELEMENT,(le+1)*he/pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,le,pe.width,pe.height,1,fe,Le)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,J.depth,fe,pe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,V,Re,pe.width,pe.height,J.depth,0,pe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ne?L&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,V,0,0,0,pe.width,pe.height,J.depth,fe,Te,pe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,V,Re,pe.width,pe.height,J.depth,0,fe,Te,pe.data)}else{Ne&&it&&t.texStorage2D(s.TEXTURE_2D,se,Re,We[0].width,We[0].height);for(let V=0,Y=We.length;V<Y;V++)pe=We[V],S.format!==$t?fe!==null?Ne?L&&t.compressedTexSubImage2D(s.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,pe.data):t.compressedTexImage2D(s.TEXTURE_2D,V,Re,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ne?L&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,pe.width,pe.height,fe,Te,pe.data):t.texImage2D(s.TEXTURE_2D,V,Re,pe.width,pe.height,0,fe,Te,pe.data)}else if(S.isDataArrayTexture)if(Ne){if(it&&t.texStorage3D(s.TEXTURE_2D_ARRAY,se,Re,J.width,J.height,J.depth),L)if(S.layerUpdates.size>0){const V=Dc(J.width,J.height,S.format,S.type);for(const Y of S.layerUpdates){const he=J.data.subarray(Y*V/J.data.BYTES_PER_ELEMENT,(Y+1)*V/J.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,fe,Te,he)}S.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,fe,Te,J.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Re,J.width,J.height,J.depth,0,fe,Te,J.data);else if(S.isData3DTexture)Ne?(it&&t.texStorage3D(s.TEXTURE_3D,se,Re,J.width,J.height,J.depth),L&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,fe,Te,J.data)):t.texImage3D(s.TEXTURE_3D,0,Re,J.width,J.height,J.depth,0,fe,Te,J.data);else if(S.isFramebufferTexture){if(it)if(Ne)t.texStorage2D(s.TEXTURE_2D,se,Re,J.width,J.height);else{let V=J.width,Y=J.height;for(let he=0;he<se;he++)t.texImage2D(s.TEXTURE_2D,he,Re,V,Y,0,fe,Te,null),V>>=1,Y>>=1}}else if(We.length>0){if(Ne&&it){const V=be(We[0]);t.texStorage2D(s.TEXTURE_2D,se,Re,V.width,V.height)}for(let V=0,Y=We.length;V<Y;V++)pe=We[V],Ne?L&&t.texSubImage2D(s.TEXTURE_2D,V,0,0,fe,Te,pe):t.texImage2D(s.TEXTURE_2D,V,Re,fe,Te,pe);S.generateMipmaps=!1}else if(Ne){if(it){const V=be(J);t.texStorage2D(s.TEXTURE_2D,se,Re,V.width,V.height)}L&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,fe,Te,J)}else t.texImage2D(s.TEXTURE_2D,0,Re,fe,Te,J);m(S)&&p($),xe.__version=X.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function te(A,S,F){if(S.image.length!==6)return;const $=tt(A,S),Z=S.source;t.bindTexture(s.TEXTURE_CUBE_MAP,A.__webglTexture,s.TEXTURE0+F);const X=n.get(Z);if(Z.version!==X.__version||$===!0){t.activeTexture(s.TEXTURE0+F);const xe=He.getPrimaries(He.workingColorSpace),ae=S.colorSpace===Zn?null:He.getPrimaries(S.colorSpace),de=S.colorSpace===Zn||xe===ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,S.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,S.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const qe=S.isCompressedTexture||S.image[0].isCompressedTexture,J=S.image[0]&&S.image[0].isDataTexture,fe=[];for(let Y=0;Y<6;Y++)!qe&&!J?fe[Y]=g(S.image[Y],!0,i.maxCubemapSize):fe[Y]=J?S.image[Y].image:S.image[Y],fe[Y]=rt(S,fe[Y]);const Te=fe[0],Re=r.convert(S.format,S.colorSpace),pe=r.convert(S.type),We=y(S.internalFormat,Re,pe,S.colorSpace),Ne=S.isVideoTexture!==!0,it=X.__version===void 0||$===!0,L=Z.dataReady;let se=R(S,Te);Be(s.TEXTURE_CUBE_MAP,S);let V;if(qe){Ne&&it&&t.texStorage2D(s.TEXTURE_CUBE_MAP,se,We,Te.width,Te.height);for(let Y=0;Y<6;Y++){V=fe[Y].mipmaps;for(let he=0;he<V.length;he++){const le=V[he];S.format!==$t?Re!==null?Ne?L&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,le.width,le.height,Re,le.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,We,le.width,le.height,0,le.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,0,0,le.width,le.height,Re,pe,le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he,We,le.width,le.height,0,Re,pe,le.data)}}}else{if(V=S.mipmaps,Ne&&it){V.length>0&&se++;const Y=be(fe[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,se,We,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){Ne?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,fe[Y].width,fe[Y].height,Re,pe,fe[Y].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,We,fe[Y].width,fe[Y].height,0,Re,pe,fe[Y].data);for(let he=0;he<V.length;he++){const Le=V[he].image[Y].image;Ne?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,Le.width,Le.height,Re,pe,Le.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,We,Le.width,Le.height,0,Re,pe,Le.data)}}else{Ne?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Re,pe,fe[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,We,Re,pe,fe[Y]);for(let he=0;he<V.length;he++){const le=V[he];Ne?L&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,0,0,Re,pe,le.image[Y]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Y,he+1,We,Re,pe,le.image[Y])}}}m(S)&&p(s.TEXTURE_CUBE_MAP),X.__version=Z.version,S.onUpdate&&S.onUpdate(S)}A.__version=S.version}function ve(A,S,F,$,Z,X){const xe=r.convert(F.format,F.colorSpace),ae=r.convert(F.type),de=y(F.internalFormat,xe,ae,F.colorSpace),qe=n.get(S),J=n.get(F);if(J.__renderTarget=S,!qe.__hasExternalTextures){const fe=Math.max(1,S.width>>X),Te=Math.max(1,S.height>>X);Z===s.TEXTURE_3D||Z===s.TEXTURE_2D_ARRAY?t.texImage3D(Z,X,de,fe,Te,S.depth,0,xe,ae,null):t.texImage2D(Z,X,de,fe,Te,0,xe,ae,null)}t.bindFramebuffer(s.FRAMEBUFFER,A),Ge(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,$,Z,J.__webglTexture,0,Ve(S)):(Z===s.TEXTURE_2D||Z>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&Z<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,$,Z,J.__webglTexture,X),t.bindFramebuffer(s.FRAMEBUFFER,null)}function oe(A,S,F){if(s.bindRenderbuffer(s.RENDERBUFFER,A),S.depthBuffer){const $=S.depthTexture,Z=$&&$.isDepthTexture?$.type:null,X=v(S.stencilBuffer,Z),xe=S.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ae=Ve(S);Ge(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ae,X,S.width,S.height):F?s.renderbufferStorageMultisample(s.RENDERBUFFER,ae,X,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,X,S.width,S.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,xe,s.RENDERBUFFER,A)}else{const $=S.textures;for(let Z=0;Z<$.length;Z++){const X=$[Z],xe=r.convert(X.format,X.colorSpace),ae=r.convert(X.type),de=y(X.internalFormat,xe,ae,X.colorSpace),qe=Ve(S);F&&Ge(S)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,de,S.width,S.height):Ge(S)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,qe,de,S.width,S.height):s.renderbufferStorage(s.RENDERBUFFER,de,S.width,S.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function Ee(A,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,A),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=n.get(S.depthTexture);$.__renderTarget=S,(!$.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),K(S.depthTexture,0);const Z=$.__webglTexture,X=Ve(S);if(S.depthTexture.format===es)Ge(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(S.depthTexture.format===hs)Ge(S)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,X):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Ie(A){const S=n.get(A),F=A.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==A.depthTexture){const $=A.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),$){const Z=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,$.removeEventListener("dispose",Z)};$.addEventListener("dispose",Z),S.__depthDisposeCallback=Z}S.__boundDepthTexture=$}if(A.depthTexture&&!S.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");Ee(S.__webglFramebuffer,A)}else if(F){S.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer[$]),S.__webglDepthbuffer[$]===void 0)S.__webglDepthbuffer[$]=s.createRenderbuffer(),oe(S.__webglDepthbuffer[$],A,!1);else{const Z=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,X=S.__webglDepthbuffer[$];s.bindRenderbuffer(s.RENDERBUFFER,X),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,X)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=s.createRenderbuffer(),oe(S.__webglDepthbuffer,A,!1);else{const $=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Z=S.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Z),s.framebufferRenderbuffer(s.FRAMEBUFFER,$,s.RENDERBUFFER,Z)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function ze(A,S,F){const $=n.get(A);S!==void 0&&ve($.__webglFramebuffer,A,A.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),F!==void 0&&Ie(A)}function ht(A){const S=A.texture,F=n.get(A),$=n.get(S);A.addEventListener("dispose",C);const Z=A.textures,X=A.isWebGLCubeRenderTarget===!0,xe=Z.length>1;if(xe||($.__webglTexture===void 0&&($.__webglTexture=s.createTexture()),$.__version=S.version,o.memory.textures++),X){F.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer[ae]=[];for(let de=0;de<S.mipmaps.length;de++)F.__webglFramebuffer[ae][de]=s.createFramebuffer()}else F.__webglFramebuffer[ae]=s.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){F.__webglFramebuffer=[];for(let ae=0;ae<S.mipmaps.length;ae++)F.__webglFramebuffer[ae]=s.createFramebuffer()}else F.__webglFramebuffer=s.createFramebuffer();if(xe)for(let ae=0,de=Z.length;ae<de;ae++){const qe=n.get(Z[ae]);qe.__webglTexture===void 0&&(qe.__webglTexture=s.createTexture(),o.memory.textures++)}if(A.samples>0&&Ge(A)===!1){F.__webglMultisampledFramebuffer=s.createFramebuffer(),F.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let ae=0;ae<Z.length;ae++){const de=Z[ae];F.__webglColorRenderbuffer[ae]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,F.__webglColorRenderbuffer[ae]);const qe=r.convert(de.format,de.colorSpace),J=r.convert(de.type),fe=y(de.internalFormat,qe,J,de.colorSpace,A.isXRRenderTarget===!0),Te=Ve(A);s.renderbufferStorageMultisample(s.RENDERBUFFER,Te,fe,A.width,A.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ae,s.RENDERBUFFER,F.__webglColorRenderbuffer[ae])}s.bindRenderbuffer(s.RENDERBUFFER,null),A.depthBuffer&&(F.__webglDepthRenderbuffer=s.createRenderbuffer(),oe(F.__webglDepthRenderbuffer,A,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(X){t.bindTexture(s.TEXTURE_CUBE_MAP,$.__webglTexture),Be(s.TEXTURE_CUBE_MAP,S);for(let ae=0;ae<6;ae++)if(S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ve(F.__webglFramebuffer[ae][de],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,de);else ve(F.__webglFramebuffer[ae],A,S,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(S)&&p(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(xe){for(let ae=0,de=Z.length;ae<de;ae++){const qe=Z[ae],J=n.get(qe);t.bindTexture(s.TEXTURE_2D,J.__webglTexture),Be(s.TEXTURE_2D,qe),ve(F.__webglFramebuffer,A,qe,s.COLOR_ATTACHMENT0+ae,s.TEXTURE_2D,0),m(qe)&&p(s.TEXTURE_2D)}t.unbindTexture()}else{let ae=s.TEXTURE_2D;if((A.isWebGL3DRenderTarget||A.isWebGLArrayRenderTarget)&&(ae=A.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),Be(ae,S),S.mipmaps&&S.mipmaps.length>0)for(let de=0;de<S.mipmaps.length;de++)ve(F.__webglFramebuffer[de],A,S,s.COLOR_ATTACHMENT0,ae,de);else ve(F.__webglFramebuffer,A,S,s.COLOR_ATTACHMENT0,ae,0);m(S)&&p(ae),t.unbindTexture()}A.depthBuffer&&Ie(A)}function Xe(A){const S=A.textures;for(let F=0,$=S.length;F<$;F++){const Z=S[F];if(m(Z)){const X=x(A),xe=n.get(Z).__webglTexture;t.bindTexture(X,xe),p(X),t.unbindTexture()}}}const ft=[],N=[];function jt(A){if(A.samples>0){if(Ge(A)===!1){const S=A.textures,F=A.width,$=A.height;let Z=s.COLOR_BUFFER_BIT;const X=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,xe=n.get(A),ae=S.length>1;if(ae)for(let de=0;de<S.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,xe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglFramebuffer);for(let de=0;de<S.length;de++){if(A.resolveDepthBuffer&&(A.depthBuffer&&(Z|=s.DEPTH_BUFFER_BIT),A.stencilBuffer&&A.resolveStencilBuffer&&(Z|=s.STENCIL_BUFFER_BIT)),ae){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const qe=n.get(S[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,qe,0)}s.blitFramebuffer(0,0,F,$,0,0,F,$,Z,s.NEAREST),l===!0&&(ft.length=0,N.length=0,ft.push(s.COLOR_ATTACHMENT0+de),A.depthBuffer&&A.resolveDepthBuffer===!1&&(ft.push(X),N.push(X),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,N)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ft))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),ae)for(let de=0;de<S.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,xe.__webglColorRenderbuffer[de]);const qe=n.get(S[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,xe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,qe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,xe.__webglMultisampledFramebuffer)}else if(A.depthBuffer&&A.resolveDepthBuffer===!1&&l){const S=A.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[S])}}}function Ve(A){return Math.min(i.maxSamples,A.samples)}function Ge(A){const S=n.get(A);return A.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function we(A){const S=o.render.frame;h.get(A)!==S&&(h.set(A,S),A.update())}function rt(A,S){const F=A.colorSpace,$=A.format,Z=A.type;return A.isCompressedTexture===!0||A.isVideoTexture===!0||F!==zt&&F!==Zn&&(He.getTransfer(F)===et?($!==$t||Z!==kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),S}function be(A){return typeof HTMLImageElement<"u"&&A instanceof HTMLImageElement?(c.width=A.naturalWidth||A.width,c.height=A.naturalHeight||A.height):typeof VideoFrame<"u"&&A instanceof VideoFrame?(c.width=A.displayWidth,c.height=A.displayHeight):(c.width=A.width,c.height=A.height),c}this.allocateTextureUnit=O,this.resetTextureUnits=k,this.setTexture2D=K,this.setTexture2DArray=W,this.setTexture3D=ee,this.setTextureCube=G,this.rebindTextures=ze,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=Xe,this.updateMultisampleRenderTarget=jt,this.setupDepthRenderbuffer=Ie,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=Ge}function $0(s,e){function t(n,i=Zn){let r;const o=He.getTransfer(i);if(n===kn)return s.UNSIGNED_BYTE;if(n===tl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===nl)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Ch)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Ah)return s.BYTE;if(n===Rh)return s.SHORT;if(n===$s)return s.UNSIGNED_SHORT;if(n===el)return s.INT;if(n===Si)return s.UNSIGNED_INT;if(n===fn)return s.FLOAT;if(n===_s)return s.HALF_FLOAT;if(n===Ph)return s.ALPHA;if(n===Ih)return s.RGB;if(n===$t)return s.RGBA;if(n===Lh)return s.LUMINANCE;if(n===Dh)return s.LUMINANCE_ALPHA;if(n===es)return s.DEPTH_COMPONENT;if(n===hs)return s.DEPTH_STENCIL;if(n===il)return s.RED;if(n===sl)return s.RED_INTEGER;if(n===Uh)return s.RG;if(n===rl)return s.RG_INTEGER;if(n===ol)return s.RGBA_INTEGER;if(n===zr||n===kr||n===Hr||n===Vr)if(o===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===zr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===zr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===kr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Hr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===_a)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===_a)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===va||n===xa||n===ya)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===va||n===xa)return o===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===ya)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ma||n===Sa||n===ba||n===wa||n===Ta||n===Ea||n===Aa||n===Ra||n===Ca||n===Pa||n===Ia||n===La||n===Da||n===Ua)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ma)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Sa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===ba)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===wa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ta)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ea)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Aa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ra)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Ca)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Pa)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ia)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===La)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Da)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Ua)return o===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Gr||n===Na||n===Fa)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Gr)return o===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Na)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Fa)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Nh||n===Oa||n===Ba||n===za)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Gr)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Oa)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Ba)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===za)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===cs?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Y0 extends Lt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Rt extends nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const j0={type:"move"};class Bo{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Rt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Rt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new M,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new M),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Rt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new M,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new M),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,n),p=this._getHandJoint(c,g);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,_=.005;c.inputState.pinching&&d>f+_?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-_&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(j0)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Rt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const K0=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Z0=`
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

}`;class J0{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new bt,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new xn({vertexShader:K0,fragmentShader:Z0,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Oe(new bi(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Q0 extends oi{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,f=null,_=null;const g=new J0,m=t.getContextAttributes();let p=null,x=null;const y=[],v=[],R=new ie;let E=null;const C=new Lt;C.viewport=new $e;const P=new Lt;P.viewport=new $e;const T=[C,P],b=new Y0;let I=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let te=y[q];return te===void 0&&(te=new Bo,y[q]=te),te.getTargetRaySpace()},this.getControllerGrip=function(q){let te=y[q];return te===void 0&&(te=new Bo,y[q]=te),te.getGripSpace()},this.getHand=function(q){let te=y[q];return te===void 0&&(te=new Bo,y[q]=te),te.getHandSpace()};function O(q){const te=v.indexOf(q.inputSource);if(te===-1)return;const ve=y[te];ve!==void 0&&(ve.update(q.inputSource,q.frame,c||o),ve.dispatchEvent({type:q.type,data:q.inputSource}))}function H(){i.removeEventListener("select",O),i.removeEventListener("selectstart",O),i.removeEventListener("selectend",O),i.removeEventListener("squeeze",O),i.removeEventListener("squeezestart",O),i.removeEventListener("squeezeend",O),i.removeEventListener("end",H),i.removeEventListener("inputsourceschange",K);for(let q=0;q<y.length;q++){const te=v[q];te!==null&&(v[q]=null,y[q].disconnect(te))}I=null,k=null,g.reset(),e.setRenderTarget(p),f=null,d=null,u=null,i=null,x=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(E),e.setSize(R.width,R.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u},this.getFrame=function(){return _},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(p=e.getRenderTarget(),i.addEventListener("select",O),i.addEventListener("selectstart",O),i.addEventListener("selectend",O),i.addEventListener("squeeze",O),i.addEventListener("squeezestart",O),i.addEventListener("squeezeend",O),i.addEventListener("end",H),i.addEventListener("inputsourceschange",K),m.xrCompatible!==!0&&await t.makeXRCompatible(),E=e.getPixelRatio(),e.getSize(R),i.renderState.layers===void 0){const te={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,t,te),i.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),x=new ii(f.framebufferWidth,f.framebufferHeight,{format:$t,type:kn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let te=null,ve=null,oe=null;m.depth&&(oe=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,te=m.stencil?hs:es,ve=m.stencil?cs:Si);const Ee={colorFormat:t.RGBA8,depthFormat:oe,scaleFactor:r};u=new XRWebGLBinding(i,t),d=u.createProjectionLayer(Ee),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),x=new ii(d.textureWidth,d.textureHeight,{format:$t,type:kn,depthTexture:new Kh(d.textureWidth,d.textureHeight,ve,void 0,void 0,void 0,void 0,void 0,void 0,te),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}x.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function K(q){for(let te=0;te<q.removed.length;te++){const ve=q.removed[te],oe=v.indexOf(ve);oe>=0&&(v[oe]=null,y[oe].disconnect(ve))}for(let te=0;te<q.added.length;te++){const ve=q.added[te];let oe=v.indexOf(ve);if(oe===-1){for(let Ie=0;Ie<y.length;Ie++)if(Ie>=v.length){v.push(ve),oe=Ie;break}else if(v[Ie]===null){v[Ie]=ve,oe=Ie;break}if(oe===-1)break}const Ee=y[oe];Ee&&Ee.connect(ve)}}const W=new M,ee=new M;function G(q,te,ve){W.setFromMatrixPosition(te.matrixWorld),ee.setFromMatrixPosition(ve.matrixWorld);const oe=W.distanceTo(ee),Ee=te.projectionMatrix.elements,Ie=ve.projectionMatrix.elements,ze=Ee[14]/(Ee[10]-1),ht=Ee[14]/(Ee[10]+1),Xe=(Ee[9]+1)/Ee[5],ft=(Ee[9]-1)/Ee[5],N=(Ee[8]-1)/Ee[0],jt=(Ie[8]+1)/Ie[0],Ve=ze*N,Ge=ze*jt,we=oe/(-N+jt),rt=we*-N;if(te.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(rt),q.translateZ(we),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Ee[10]===-1)q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const be=ze+we,A=ht+we,S=Ve-rt,F=Ge+(oe-rt),$=Xe*ht/A*be,Z=ft*ht/A*be;q.projectionMatrix.makePerspective(S,F,$,Z,be,A),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function re(q,te){te===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(te.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let te=q.near,ve=q.far;g.texture!==null&&(g.depthNear>0&&(te=g.depthNear),g.depthFar>0&&(ve=g.depthFar)),b.near=P.near=C.near=te,b.far=P.far=C.far=ve,(I!==b.near||k!==b.far)&&(i.updateRenderState({depthNear:b.near,depthFar:b.far}),I=b.near,k=b.far),C.layers.mask=q.layers.mask|2,P.layers.mask=q.layers.mask|4,b.layers.mask=C.layers.mask|P.layers.mask;const oe=q.parent,Ee=b.cameras;re(b,oe);for(let Ie=0;Ie<Ee.length;Ie++)re(Ee[Ie],oe);Ee.length===2?G(b,C,P):b.projectionMatrix.copy(C.projectionMatrix),ue(q,b,oe)};function ue(q,te,ve){ve===null?q.matrix.copy(te.matrixWorld):(q.matrix.copy(ve.matrixWorld),q.matrix.invert(),q.matrix.multiply(te.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(te.projectionMatrix),q.projectionMatrixInverse.copy(te.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=us*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return b},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(b)};let Me=null;function Be(q,te){if(h=te.getViewerPose(c||o),_=te,h!==null){const ve=h.views;f!==null&&(e.setRenderTargetFramebuffer(x,f.framebuffer),e.setRenderTarget(x));let oe=!1;ve.length!==b.cameras.length&&(b.cameras.length=0,oe=!0);for(let Ie=0;Ie<ve.length;Ie++){const ze=ve[Ie];let ht=null;if(f!==null)ht=f.getViewport(ze);else{const ft=u.getViewSubImage(d,ze);ht=ft.viewport,Ie===0&&(e.setRenderTargetTextures(x,ft.colorTexture,d.ignoreDepthValues?void 0:ft.depthStencilTexture),e.setRenderTarget(x))}let Xe=T[Ie];Xe===void 0&&(Xe=new Lt,Xe.layers.enable(Ie),Xe.viewport=new $e,T[Ie]=Xe),Xe.matrix.fromArray(ze.transform.matrix),Xe.matrix.decompose(Xe.position,Xe.quaternion,Xe.scale),Xe.projectionMatrix.fromArray(ze.projectionMatrix),Xe.projectionMatrixInverse.copy(Xe.projectionMatrix).invert(),Xe.viewport.set(ht.x,ht.y,ht.width,ht.height),Ie===0&&(b.matrix.copy(Xe.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale)),oe===!0&&b.cameras.push(Xe)}const Ee=i.enabledFeatures;if(Ee&&Ee.includes("depth-sensing")){const Ie=u.getDepthInformation(ve[0]);Ie&&Ie.isValid&&Ie.texture&&g.init(e,Ie,i.renderState)}}for(let ve=0;ve<y.length;ve++){const oe=v[ve],Ee=y[ve];oe!==null&&Ee!==void 0&&Ee.update(oe,te,c||o)}Me&&Me(q,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),_=null}const tt=new jh;tt.setAnimationLoop(Be),this.setAnimationLoop=function(q){Me=q},this.dispose=function(){}}}const fi=new Vt,e_=new Ae;function t_(s,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,Xh(s)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,x,y,v){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,v)):p.isMeshMatcapMaterial?(r(m,p),_(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),g(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,x,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ut&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ut&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const x=e.get(p),y=x.envMap,v=x.envMapRotation;y&&(m.envMap.value=y,fi.copy(v),fi.x*=-1,fi.y*=-1,fi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(fi.y*=-1,fi.z*=-1),m.envMapRotation.value.setFromMatrix4(e_.makeRotationFromEuler(fi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,x,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*x,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,x){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ut&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=x.texture,m.transmissionSamplerSize.value.set(x.width,x.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function _(m,p){p.matcap&&(m.matcap.value=p.matcap)}function g(m,p){const x=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(x.matrixWorld),m.nearDistance.value=x.shadow.camera.near,m.farDistance.value=x.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function n_(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(x,y){const v=y.program;n.uniformBlockBinding(x,v)}function c(x,y){let v=i[x.id];v===void 0&&(_(x),v=h(x),i[x.id]=v,x.addEventListener("dispose",m));const R=y.program;n.updateUBOMapping(x,R);const E=e.render.frame;r[x.id]!==E&&(d(x),r[x.id]=E)}function h(x){const y=u();x.__bindingPointIndex=y;const v=s.createBuffer(),R=x.__size,E=x.usage;return s.bindBuffer(s.UNIFORM_BUFFER,v),s.bufferData(s.UNIFORM_BUFFER,R,E),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,v),v}function u(){for(let x=0;x<a;x++)if(o.indexOf(x)===-1)return o.push(x),x;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(x){const y=i[x.id],v=x.uniforms,R=x.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let E=0,C=v.length;E<C;E++){const P=Array.isArray(v[E])?v[E]:[v[E]];for(let T=0,b=P.length;T<b;T++){const I=P[T];if(f(I,E,T,R)===!0){const k=I.__offset,O=Array.isArray(I.value)?I.value:[I.value];let H=0;for(let K=0;K<O.length;K++){const W=O[K],ee=g(W);typeof W=="number"||typeof W=="boolean"?(I.__data[0]=W,s.bufferSubData(s.UNIFORM_BUFFER,k+H,I.__data)):W.isMatrix3?(I.__data[0]=W.elements[0],I.__data[1]=W.elements[1],I.__data[2]=W.elements[2],I.__data[3]=0,I.__data[4]=W.elements[3],I.__data[5]=W.elements[4],I.__data[6]=W.elements[5],I.__data[7]=0,I.__data[8]=W.elements[6],I.__data[9]=W.elements[7],I.__data[10]=W.elements[8],I.__data[11]=0):(W.toArray(I.__data,H),H+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,k,I.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(x,y,v,R){const E=x.value,C=y+"_"+v;if(R[C]===void 0)return typeof E=="number"||typeof E=="boolean"?R[C]=E:R[C]=E.clone(),!0;{const P=R[C];if(typeof E=="number"||typeof E=="boolean"){if(P!==E)return R[C]=E,!0}else if(P.equals(E)===!1)return P.copy(E),!0}return!1}function _(x){const y=x.uniforms;let v=0;const R=16;for(let C=0,P=y.length;C<P;C++){const T=Array.isArray(y[C])?y[C]:[y[C]];for(let b=0,I=T.length;b<I;b++){const k=T[b],O=Array.isArray(k.value)?k.value:[k.value];for(let H=0,K=O.length;H<K;H++){const W=O[H],ee=g(W),G=v%R,re=G%ee.boundary,ue=G+re;v+=re,ue!==0&&R-ue<ee.storage&&(v+=R-ue),k.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=v,v+=ee.storage}}}const E=v%R;return E>0&&(v+=R-E),x.__size=v,x.__cache={},this}function g(x){const y={boundary:0,storage:0};return typeof x=="number"||typeof x=="boolean"?(y.boundary=4,y.storage=4):x.isVector2?(y.boundary=8,y.storage=8):x.isVector3||x.isColor?(y.boundary=16,y.storage=12):x.isVector4?(y.boundary=16,y.storage=16):x.isMatrix3?(y.boundary=48,y.storage=48):x.isMatrix4?(y.boundary=64,y.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),y}function m(x){const y=x.target;y.removeEventListener("dispose",m);const v=o.indexOf(y.__bindingPointIndex);o.splice(v,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function p(){for(const x in i)s.deleteBuffer(i[x]);o=[],i={},r={}}return{bind:l,update:c,dispose:p}}class i_{constructor(e={}){const{canvas:t=Xd(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reverseDepthBuffer:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=o;const _=new Uint32Array(4),g=new Int32Array(4);let m=null,p=null;const x=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vt,this.toneMapping=ni,this.toneMappingExposure=1;const v=this;let R=!1,E=0,C=0,P=null,T=-1,b=null;const I=new $e,k=new $e;let O=null;const H=new Se(0);let K=0,W=t.width,ee=t.height,G=1,re=null,ue=null;const Me=new $e(0,0,W,ee),Be=new $e(0,0,W,ee);let tt=!1;const q=new ul;let te=!1,ve=!1;const oe=new Ae,Ee=new Ae,Ie=new M,ze=new $e,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Xe=!1;function ft(){return P===null?G:1}let N=n;function jt(w,D){return t.getContext(w,D)}try{const w={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Qa}`),t.addEventListener("webglcontextlost",Y,!1),t.addEventListener("webglcontextrestored",he,!1),t.addEventListener("webglcontextcreationerror",le,!1),N===null){const D="webgl2";if(N=jt(D,w),N===null)throw jt(D)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let Ve,Ge,we,rt,be,A,S,F,$,Z,X,xe,ae,de,qe,J,fe,Te,Re,pe,We,Ne,it,L;function se(){Ve=new lg(N),Ve.init(),Ne=new $0(N,Ve),Ge=new ng(N,Ve,e,Ne),we=new W0(N,Ve),Ge.reverseDepthBuffer&&d&&we.buffers.depth.setReversed(!0),rt=new ug(N),be=new C0,A=new q0(N,Ve,we,be,Ge,Ne,rt),S=new sg(v),F=new ag(v),$=new vf(N),it=new eg(N,$),Z=new cg(N,$,rt,it),X=new fg(N,Z,$,rt),Re=new dg(N,Ge,A),J=new ig(be),xe=new R0(v,S,F,Ve,Ge,it,J),ae=new t_(v,be),de=new I0,qe=new O0(Ve),Te=new Qm(v,S,F,we,X,f,l),fe=new V0(v,X,Ge),L=new n_(N,rt,Ge,we),pe=new tg(N,Ve,rt),We=new hg(N,Ve,rt),rt.programs=xe.programs,v.capabilities=Ge,v.extensions=Ve,v.properties=be,v.renderLists=de,v.shadowMap=fe,v.state=we,v.info=rt}se();const V=new Q0(v,N);this.xr=V,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const w=Ve.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=Ve.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return G},this.setPixelRatio=function(w){w!==void 0&&(G=w,this.setSize(W,ee,!1))},this.getSize=function(w){return w.set(W,ee)},this.setSize=function(w,D,B=!0){if(V.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=w,ee=D,t.width=Math.floor(w*G),t.height=Math.floor(D*G),B===!0&&(t.style.width=w+"px",t.style.height=D+"px"),this.setViewport(0,0,w,D)},this.getDrawingBufferSize=function(w){return w.set(W*G,ee*G).floor()},this.setDrawingBufferSize=function(w,D,B){W=w,ee=D,G=B,t.width=Math.floor(w*B),t.height=Math.floor(D*B),this.setViewport(0,0,w,D)},this.getCurrentViewport=function(w){return w.copy(I)},this.getViewport=function(w){return w.copy(Me)},this.setViewport=function(w,D,B,z){w.isVector4?Me.set(w.x,w.y,w.z,w.w):Me.set(w,D,B,z),we.viewport(I.copy(Me).multiplyScalar(G).round())},this.getScissor=function(w){return w.copy(Be)},this.setScissor=function(w,D,B,z){w.isVector4?Be.set(w.x,w.y,w.z,w.w):Be.set(w,D,B,z),we.scissor(k.copy(Be).multiplyScalar(G).round())},this.getScissorTest=function(){return tt},this.setScissorTest=function(w){we.setScissorTest(tt=w)},this.setOpaqueSort=function(w){re=w},this.setTransparentSort=function(w){ue=w},this.getClearColor=function(w){return w.copy(Te.getClearColor())},this.setClearColor=function(){Te.setClearColor.apply(Te,arguments)},this.getClearAlpha=function(){return Te.getClearAlpha()},this.setClearAlpha=function(){Te.setClearAlpha.apply(Te,arguments)},this.clear=function(w=!0,D=!0,B=!0){let z=0;if(w){let U=!1;if(P!==null){const Q=P.texture.format;U=Q===ol||Q===rl||Q===sl}if(U){const Q=P.texture.type,ce=Q===kn||Q===Si||Q===$s||Q===cs||Q===tl||Q===nl,me=Te.getClearColor(),ge=Te.getClearAlpha(),Ce=me.r,De=me.g,_e=me.b;ce?(_[0]=Ce,_[1]=De,_[2]=_e,_[3]=ge,N.clearBufferuiv(N.COLOR,0,_)):(g[0]=Ce,g[1]=De,g[2]=_e,g[3]=ge,N.clearBufferiv(N.COLOR,0,g))}else z|=N.COLOR_BUFFER_BIT}D&&(z|=N.DEPTH_BUFFER_BIT),B&&(z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Y,!1),t.removeEventListener("webglcontextrestored",he,!1),t.removeEventListener("webglcontextcreationerror",le,!1),de.dispose(),qe.dispose(),be.dispose(),S.dispose(),F.dispose(),X.dispose(),it.dispose(),L.dispose(),xe.dispose(),V.dispose(),V.removeEventListener("sessionstart",Rl),V.removeEventListener("sessionend",Cl),ai.stop()};function Y(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function he(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const w=rt.autoReset,D=fe.enabled,B=fe.autoUpdate,z=fe.needsUpdate,U=fe.type;se(),rt.autoReset=w,fe.enabled=D,fe.autoUpdate=B,fe.needsUpdate=z,fe.type=U}function le(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Le(w){const D=w.target;D.removeEventListener("dispose",Le),ut(D)}function ut(w){Ct(w),be.remove(w)}function Ct(w){const D=be.get(w).programs;D!==void 0&&(D.forEach(function(B){xe.releaseProgram(B)}),w.isShaderMaterial&&xe.releaseShaderCache(w))}this.renderBufferDirect=function(w,D,B,z,U,Q){D===null&&(D=ht);const ce=U.isMesh&&U.matrixWorld.determinant()<0,me=Fu(w,D,B,z,U);we.setMaterial(z,ce);let ge=B.index,Ce=1;if(z.wireframe===!0){if(ge=Z.getWireframeAttribute(B),ge===void 0)return;Ce=2}const De=B.drawRange,_e=B.attributes.position;let Ye=De.start*Ce,st=(De.start+De.count)*Ce;Q!==null&&(Ye=Math.max(Ye,Q.start*Ce),st=Math.min(st,(Q.start+Q.count)*Ce)),ge!==null?(Ye=Math.max(Ye,0),st=Math.min(st,ge.count)):_e!=null&&(Ye=Math.max(Ye,0),st=Math.min(st,_e.count));const ot=st-Ye;if(ot<0||ot===1/0)return;it.setup(U,z,me,B,ge);let kt,je=pe;if(ge!==null&&(kt=$.get(ge),je=We,je.setIndex(kt)),U.isMesh)z.wireframe===!0?(we.setLineWidth(z.wireframeLinewidth*ft()),je.setMode(N.LINES)):je.setMode(N.TRIANGLES);else if(U.isLine){let ye=z.linewidth;ye===void 0&&(ye=1),we.setLineWidth(ye*ft()),U.isLineSegments?je.setMode(N.LINES):U.isLineLoop?je.setMode(N.LINE_LOOP):je.setMode(N.LINE_STRIP)}else U.isPoints?je.setMode(N.POINTS):U.isSprite&&je.setMode(N.TRIANGLES);if(U.isBatchedMesh)if(U._multiDrawInstances!==null)je.renderMultiDrawInstances(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount,U._multiDrawInstances);else if(Ve.get("WEBGL_multi_draw"))je.renderMultiDraw(U._multiDrawStarts,U._multiDrawCounts,U._multiDrawCount);else{const ye=U._multiDrawStarts,An=U._multiDrawCounts,Ke=U._multiDrawCount,ln=ge?$.get(ge).bytesPerElement:1,Ei=be.get(z).currentProgram.getUniforms();for(let Wt=0;Wt<Ke;Wt++)Ei.setValue(N,"_gl_DrawID",Wt),je.render(ye[Wt]/ln,An[Wt])}else if(U.isInstancedMesh)je.renderInstances(Ye,ot,U.count);else if(B.isInstancedBufferGeometry){const ye=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,An=Math.min(B.instanceCount,ye);je.renderInstances(Ye,ot,An)}else je.render(Ye,ot)};function Je(w,D,B){w.transparent===!0&&w.side===Qt&&w.forceSinglePass===!1?(w.side=Ut,w.needsUpdate=!0,rr(w,D,B),w.side=vn,w.needsUpdate=!0,rr(w,D,B),w.side=Qt):rr(w,D,B)}this.compile=function(w,D,B=null){B===null&&(B=w),p=qe.get(B),p.init(D),y.push(p),B.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),w!==B&&w.traverseVisible(function(U){U.isLight&&U.layers.test(D.layers)&&(p.pushLight(U),U.castShadow&&p.pushShadow(U))}),p.setupLights();const z=new Set;return w.traverse(function(U){if(!(U.isMesh||U.isPoints||U.isLine||U.isSprite))return;const Q=U.material;if(Q)if(Array.isArray(Q))for(let ce=0;ce<Q.length;ce++){const me=Q[ce];Je(me,B,U),z.add(me)}else Je(Q,B,U),z.add(Q)}),y.pop(),p=null,z},this.compileAsync=function(w,D,B=null){const z=this.compile(w,D,B);return new Promise(U=>{function Q(){if(z.forEach(function(ce){be.get(ce).currentProgram.isReady()&&z.delete(ce)}),z.size===0){U(w);return}setTimeout(Q,10)}Ve.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let an=null;function En(w){an&&an(w)}function Rl(){ai.stop()}function Cl(){ai.start()}const ai=new jh;ai.setAnimationLoop(En),typeof self<"u"&&ai.setContext(self),this.setAnimationLoop=function(w){an=w,V.setAnimationLoop(w),w===null?ai.stop():ai.start()},V.addEventListener("sessionstart",Rl),V.addEventListener("sessionend",Cl),this.render=function(w,D){if(D!==void 0&&D.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),D.parent===null&&D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),V.enabled===!0&&V.isPresenting===!0&&(V.cameraAutoUpdate===!0&&V.updateCamera(D),D=V.getCamera()),w.isScene===!0&&w.onBeforeRender(v,w,D,P),p=qe.get(w,y.length),p.init(D),y.push(p),Ee.multiplyMatrices(D.projectionMatrix,D.matrixWorldInverse),q.setFromProjectionMatrix(Ee),ve=this.localClippingEnabled,te=J.init(this.clippingPlanes,ve),m=de.get(w,x.length),m.init(),x.push(m),V.enabled===!0&&V.isPresenting===!0){const Q=v.xr.getDepthSensingMesh();Q!==null&&co(Q,D,-1/0,v.sortObjects)}co(w,D,0,v.sortObjects),m.finish(),v.sortObjects===!0&&m.sort(re,ue),Xe=V.enabled===!1||V.isPresenting===!1||V.hasDepthSensing()===!1,Xe&&Te.addToRenderList(m,w),this.info.render.frame++,te===!0&&J.beginShadows();const B=p.state.shadowsArray;fe.render(B,w,D),te===!0&&J.endShadows(),this.info.autoReset===!0&&this.info.reset();const z=m.opaque,U=m.transmissive;if(p.setupLights(),D.isArrayCamera){const Q=D.cameras;if(U.length>0)for(let ce=0,me=Q.length;ce<me;ce++){const ge=Q[ce];Il(z,U,w,ge)}Xe&&Te.render(w);for(let ce=0,me=Q.length;ce<me;ce++){const ge=Q[ce];Pl(m,w,ge,ge.viewport)}}else U.length>0&&Il(z,U,w,D),Xe&&Te.render(w),Pl(m,w,D);P!==null&&(A.updateMultisampleRenderTarget(P),A.updateRenderTargetMipmap(P)),w.isScene===!0&&w.onAfterRender(v,w,D),it.resetDefaultState(),T=-1,b=null,y.pop(),y.length>0?(p=y[y.length-1],te===!0&&J.setGlobalState(v.clippingPlanes,p.state.camera)):p=null,x.pop(),x.length>0?m=x[x.length-1]:m=null};function co(w,D,B,z){if(w.visible===!1)return;if(w.layers.test(D.layers)){if(w.isGroup)B=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(D);else if(w.isLight)p.pushLight(w),w.castShadow&&p.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||q.intersectsSprite(w)){z&&ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ee);const ce=X.update(w),me=w.material;me.visible&&m.push(w,ce,me,B,ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||q.intersectsObject(w))){const ce=X.update(w),me=w.material;if(z&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),ze.copy(w.boundingSphere.center)):(ce.boundingSphere===null&&ce.computeBoundingSphere(),ze.copy(ce.boundingSphere.center)),ze.applyMatrix4(w.matrixWorld).applyMatrix4(Ee)),Array.isArray(me)){const ge=ce.groups;for(let Ce=0,De=ge.length;Ce<De;Ce++){const _e=ge[Ce],Ye=me[_e.materialIndex];Ye&&Ye.visible&&m.push(w,ce,Ye,B,ze.z,_e)}}else me.visible&&m.push(w,ce,me,B,ze.z,null)}}const Q=w.children;for(let ce=0,me=Q.length;ce<me;ce++)co(Q[ce],D,B,z)}function Pl(w,D,B,z){const U=w.opaque,Q=w.transmissive,ce=w.transparent;p.setupLightsView(B),te===!0&&J.setGlobalState(v.clippingPlanes,B),z&&we.viewport(I.copy(z)),U.length>0&&sr(U,D,B),Q.length>0&&sr(Q,D,B),ce.length>0&&sr(ce,D,B),we.buffers.depth.setTest(!0),we.buffers.depth.setMask(!0),we.buffers.color.setMask(!0),we.setPolygonOffset(!1)}function Il(w,D,B,z){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[z.id]===void 0&&(p.state.transmissionRenderTarget[z.id]=new ii(1,1,{generateMipmaps:!0,type:Ve.has("EXT_color_buffer_half_float")||Ve.has("EXT_color_buffer_float")?_s:kn,minFilter:On,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:He.workingColorSpace}));const Q=p.state.transmissionRenderTarget[z.id],ce=z.viewport||I;Q.setSize(ce.z,ce.w);const me=v.getRenderTarget();v.setRenderTarget(Q),v.getClearColor(H),K=v.getClearAlpha(),K<1&&v.setClearColor(16777215,.5),v.clear(),Xe&&Te.render(B);const ge=v.toneMapping;v.toneMapping=ni;const Ce=z.viewport;if(z.viewport!==void 0&&(z.viewport=void 0),p.setupLightsView(z),te===!0&&J.setGlobalState(v.clippingPlanes,z),sr(w,B,z),A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q),Ve.has("WEBGL_multisampled_render_to_texture")===!1){let De=!1;for(let _e=0,Ye=D.length;_e<Ye;_e++){const st=D[_e],ot=st.object,kt=st.geometry,je=st.material,ye=st.group;if(je.side===Qt&&ot.layers.test(z.layers)){const An=je.side;je.side=Ut,je.needsUpdate=!0,Ll(ot,B,z,kt,je,ye),je.side=An,je.needsUpdate=!0,De=!0}}De===!0&&(A.updateMultisampleRenderTarget(Q),A.updateRenderTargetMipmap(Q))}v.setRenderTarget(me),v.setClearColor(H,K),Ce!==void 0&&(z.viewport=Ce),v.toneMapping=ge}function sr(w,D,B){const z=D.isScene===!0?D.overrideMaterial:null;for(let U=0,Q=w.length;U<Q;U++){const ce=w[U],me=ce.object,ge=ce.geometry,Ce=z===null?ce.material:z,De=ce.group;me.layers.test(B.layers)&&Ll(me,D,B,ge,Ce,De)}}function Ll(w,D,B,z,U,Q){w.onBeforeRender(v,D,B,z,U,Q),w.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),U.onBeforeRender(v,D,B,z,w,Q),U.transparent===!0&&U.side===Qt&&U.forceSinglePass===!1?(U.side=Ut,U.needsUpdate=!0,v.renderBufferDirect(B,D,z,U,w,Q),U.side=vn,U.needsUpdate=!0,v.renderBufferDirect(B,D,z,U,w,Q),U.side=Qt):v.renderBufferDirect(B,D,z,U,w,Q),w.onAfterRender(v,D,B,z,U,Q)}function rr(w,D,B){D.isScene!==!0&&(D=ht);const z=be.get(w),U=p.state.lights,Q=p.state.shadowsArray,ce=U.state.version,me=xe.getParameters(w,U.state,Q,D,B),ge=xe.getProgramCacheKey(me);let Ce=z.programs;z.environment=w.isMeshStandardMaterial?D.environment:null,z.fog=D.fog,z.envMap=(w.isMeshStandardMaterial?F:S).get(w.envMap||z.environment),z.envMapRotation=z.environment!==null&&w.envMap===null?D.environmentRotation:w.envMapRotation,Ce===void 0&&(w.addEventListener("dispose",Le),Ce=new Map,z.programs=Ce);let De=Ce.get(ge);if(De!==void 0){if(z.currentProgram===De&&z.lightsStateVersion===ce)return Ul(w,me),De}else me.uniforms=xe.getUniforms(w),w.onBeforeCompile(me,v),De=xe.acquireProgram(me,ge),Ce.set(ge,De),z.uniforms=me.uniforms;const _e=z.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(_e.clippingPlanes=J.uniform),Ul(w,me),z.needsLights=Bu(w),z.lightsStateVersion=ce,z.needsLights&&(_e.ambientLightColor.value=U.state.ambient,_e.lightProbe.value=U.state.probe,_e.directionalLights.value=U.state.directional,_e.directionalLightShadows.value=U.state.directionalShadow,_e.spotLights.value=U.state.spot,_e.spotLightShadows.value=U.state.spotShadow,_e.rectAreaLights.value=U.state.rectArea,_e.ltc_1.value=U.state.rectAreaLTC1,_e.ltc_2.value=U.state.rectAreaLTC2,_e.pointLights.value=U.state.point,_e.pointLightShadows.value=U.state.pointShadow,_e.hemisphereLights.value=U.state.hemi,_e.directionalShadowMap.value=U.state.directionalShadowMap,_e.directionalShadowMatrix.value=U.state.directionalShadowMatrix,_e.spotShadowMap.value=U.state.spotShadowMap,_e.spotLightMatrix.value=U.state.spotLightMatrix,_e.spotLightMap.value=U.state.spotLightMap,_e.pointShadowMap.value=U.state.pointShadowMap,_e.pointShadowMatrix.value=U.state.pointShadowMatrix),z.currentProgram=De,z.uniformsList=null,De}function Dl(w){if(w.uniformsList===null){const D=w.currentProgram.getUniforms();w.uniformsList=Wr.seqWithValue(D.seq,w.uniforms)}return w.uniformsList}function Ul(w,D){const B=be.get(w);B.outputColorSpace=D.outputColorSpace,B.batching=D.batching,B.batchingColor=D.batchingColor,B.instancing=D.instancing,B.instancingColor=D.instancingColor,B.instancingMorph=D.instancingMorph,B.skinning=D.skinning,B.morphTargets=D.morphTargets,B.morphNormals=D.morphNormals,B.morphColors=D.morphColors,B.morphTargetsCount=D.morphTargetsCount,B.numClippingPlanes=D.numClippingPlanes,B.numIntersection=D.numClipIntersection,B.vertexAlphas=D.vertexAlphas,B.vertexTangents=D.vertexTangents,B.toneMapping=D.toneMapping}function Fu(w,D,B,z,U){D.isScene!==!0&&(D=ht),A.resetTextureUnits();const Q=D.fog,ce=z.isMeshStandardMaterial?D.environment:null,me=P===null?v.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:zt,ge=(z.isMeshStandardMaterial?F:S).get(z.envMap||ce),Ce=z.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,De=!!B.attributes.tangent&&(!!z.normalMap||z.anisotropy>0),_e=!!B.morphAttributes.position,Ye=!!B.morphAttributes.normal,st=!!B.morphAttributes.color;let ot=ni;z.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(ot=v.toneMapping);const kt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,je=kt!==void 0?kt.length:0,ye=be.get(z),An=p.state.lights;if(te===!0&&(ve===!0||w!==b)){const Kt=w===b&&z.id===T;J.setState(z,w,Kt)}let Ke=!1;z.version===ye.__version?(ye.needsLights&&ye.lightsStateVersion!==An.state.version||ye.outputColorSpace!==me||U.isBatchedMesh&&ye.batching===!1||!U.isBatchedMesh&&ye.batching===!0||U.isBatchedMesh&&ye.batchingColor===!0&&U.colorTexture===null||U.isBatchedMesh&&ye.batchingColor===!1&&U.colorTexture!==null||U.isInstancedMesh&&ye.instancing===!1||!U.isInstancedMesh&&ye.instancing===!0||U.isSkinnedMesh&&ye.skinning===!1||!U.isSkinnedMesh&&ye.skinning===!0||U.isInstancedMesh&&ye.instancingColor===!0&&U.instanceColor===null||U.isInstancedMesh&&ye.instancingColor===!1&&U.instanceColor!==null||U.isInstancedMesh&&ye.instancingMorph===!0&&U.morphTexture===null||U.isInstancedMesh&&ye.instancingMorph===!1&&U.morphTexture!==null||ye.envMap!==ge||z.fog===!0&&ye.fog!==Q||ye.numClippingPlanes!==void 0&&(ye.numClippingPlanes!==J.numPlanes||ye.numIntersection!==J.numIntersection)||ye.vertexAlphas!==Ce||ye.vertexTangents!==De||ye.morphTargets!==_e||ye.morphNormals!==Ye||ye.morphColors!==st||ye.toneMapping!==ot||ye.morphTargetsCount!==je)&&(Ke=!0):(Ke=!0,ye.__version=z.version);let ln=ye.currentProgram;Ke===!0&&(ln=rr(z,D,U));let Ei=!1,Wt=!1,Ss=!1;const at=ln.getUniforms(),gn=ye.uniforms;if(we.useProgram(ln.program)&&(Ei=!0,Wt=!0,Ss=!0),z.id!==T&&(T=z.id,Wt=!0),Ei||b!==w){we.buffers.depth.getReversed()?(oe.copy(w.projectionMatrix),$d(oe),Yd(oe),at.setValue(N,"projectionMatrix",oe)):at.setValue(N,"projectionMatrix",w.projectionMatrix),at.setValue(N,"viewMatrix",w.matrixWorldInverse);const Hn=at.map.cameraPosition;Hn!==void 0&&Hn.setValue(N,Ie.setFromMatrixPosition(w.matrixWorld)),Ge.logarithmicDepthBuffer&&at.setValue(N,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&at.setValue(N,"isOrthographic",w.isOrthographicCamera===!0),b!==w&&(b=w,Wt=!0,Ss=!0)}if(U.isSkinnedMesh){at.setOptional(N,U,"bindMatrix"),at.setOptional(N,U,"bindMatrixInverse");const Kt=U.skeleton;Kt&&(Kt.boneTexture===null&&Kt.computeBoneTexture(),at.setValue(N,"boneTexture",Kt.boneTexture,A))}U.isBatchedMesh&&(at.setOptional(N,U,"batchingTexture"),at.setValue(N,"batchingTexture",U._matricesTexture,A),at.setOptional(N,U,"batchingIdTexture"),at.setValue(N,"batchingIdTexture",U._indirectTexture,A),at.setOptional(N,U,"batchingColorTexture"),U._colorsTexture!==null&&at.setValue(N,"batchingColorTexture",U._colorsTexture,A));const bs=B.morphAttributes;if((bs.position!==void 0||bs.normal!==void 0||bs.color!==void 0)&&Re.update(U,B,ln),(Wt||ye.receiveShadow!==U.receiveShadow)&&(ye.receiveShadow=U.receiveShadow,at.setValue(N,"receiveShadow",U.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(gn.envMap.value=ge,gn.flipEnvMap.value=ge.isCubeTexture&&ge.isRenderTargetTexture===!1?-1:1),z.isMeshStandardMaterial&&z.envMap===null&&D.environment!==null&&(gn.envMapIntensity.value=D.environmentIntensity),Wt&&(at.setValue(N,"toneMappingExposure",v.toneMappingExposure),ye.needsLights&&Ou(gn,Ss),Q&&z.fog===!0&&ae.refreshFogUniforms(gn,Q),ae.refreshMaterialUniforms(gn,z,G,ee,p.state.transmissionRenderTarget[w.id]),Wr.upload(N,Dl(ye),gn,A)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(Wr.upload(N,Dl(ye),gn,A),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&at.setValue(N,"center",U.center),at.setValue(N,"modelViewMatrix",U.modelViewMatrix),at.setValue(N,"normalMatrix",U.normalMatrix),at.setValue(N,"modelMatrix",U.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Kt=z.uniformsGroups;for(let Hn=0,Vn=Kt.length;Hn<Vn;Hn++){const Nl=Kt[Hn];L.update(Nl,ln),L.bind(Nl,ln)}}return ln}function Ou(w,D){w.ambientLightColor.needsUpdate=D,w.lightProbe.needsUpdate=D,w.directionalLights.needsUpdate=D,w.directionalLightShadows.needsUpdate=D,w.pointLights.needsUpdate=D,w.pointLightShadows.needsUpdate=D,w.spotLights.needsUpdate=D,w.spotLightShadows.needsUpdate=D,w.rectAreaLights.needsUpdate=D,w.hemisphereLights.needsUpdate=D}function Bu(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return E},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(w,D,B){be.get(w.texture).__webglTexture=D,be.get(w.depthTexture).__webglTexture=B;const z=be.get(w);z.__hasExternalTextures=!0,z.__autoAllocateDepthBuffer=B===void 0,z.__autoAllocateDepthBuffer||Ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(w,D){const B=be.get(w);B.__webglFramebuffer=D,B.__useDefaultFramebuffer=D===void 0},this.setRenderTarget=function(w,D=0,B=0){P=w,E=D,C=B;let z=!0,U=null,Q=!1,ce=!1;if(w){const ge=be.get(w);if(ge.__useDefaultFramebuffer!==void 0)we.bindFramebuffer(N.FRAMEBUFFER,null),z=!1;else if(ge.__webglFramebuffer===void 0)A.setupRenderTarget(w);else if(ge.__hasExternalTextures)A.rebindTextures(w,be.get(w.texture).__webglTexture,be.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const _e=w.depthTexture;if(ge.__boundDepthTexture!==_e){if(_e!==null&&be.has(_e)&&(w.width!==_e.image.width||w.height!==_e.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");A.setupDepthRenderbuffer(w)}}const Ce=w.texture;(Ce.isData3DTexture||Ce.isDataArrayTexture||Ce.isCompressedArrayTexture)&&(ce=!0);const De=be.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[D])?U=De[D][B]:U=De[D],Q=!0):w.samples>0&&A.useMultisampledRTT(w)===!1?U=be.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?U=De[B]:U=De,I.copy(w.viewport),k.copy(w.scissor),O=w.scissorTest}else I.copy(Me).multiplyScalar(G).floor(),k.copy(Be).multiplyScalar(G).floor(),O=tt;if(we.bindFramebuffer(N.FRAMEBUFFER,U)&&z&&we.drawBuffers(w,U),we.viewport(I),we.scissor(k),we.setScissorTest(O),Q){const ge=be.get(w.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+D,ge.__webglTexture,B)}else if(ce){const ge=be.get(w.texture),Ce=D||0;N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,ge.__webglTexture,B||0,Ce)}T=-1},this.readRenderTargetPixels=function(w,D,B,z,U,Q,ce){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let me=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){we.bindFramebuffer(N.FRAMEBUFFER,me);try{const ge=w.texture,Ce=ge.format,De=ge.type;if(!Ge.textureFormatReadable(Ce)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Ge.textureTypeReadable(De)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}D>=0&&D<=w.width-z&&B>=0&&B<=w.height-U&&N.readPixels(D,B,z,U,Ne.convert(Ce),Ne.convert(De),Q)}finally{const ge=P!==null?be.get(P).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,ge)}}},this.readRenderTargetPixelsAsync=async function(w,D,B,z,U,Q,ce){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let me=be.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ce!==void 0&&(me=me[ce]),me){const ge=w.texture,Ce=ge.format,De=ge.type;if(!Ge.textureFormatReadable(Ce))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Ge.textureTypeReadable(De))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(D>=0&&D<=w.width-z&&B>=0&&B<=w.height-U){we.bindFramebuffer(N.FRAMEBUFFER,me);const _e=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.bufferData(N.PIXEL_PACK_BUFFER,Q.byteLength,N.STREAM_READ),N.readPixels(D,B,z,U,Ne.convert(Ce),Ne.convert(De),0);const Ye=P!==null?be.get(P).__webglFramebuffer:null;we.bindFramebuffer(N.FRAMEBUFFER,Ye);const st=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await qd(N,st,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,_e),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,Q),N.deleteBuffer(_e),N.deleteSync(st),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(w,D=null,B=0){w.isTexture!==!0&&(zs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),D=arguments[0]||null,w=arguments[1]);const z=Math.pow(2,-B),U=Math.floor(w.image.width*z),Q=Math.floor(w.image.height*z),ce=D!==null?D.x:0,me=D!==null?D.y:0;A.setTexture2D(w,0),N.copyTexSubImage2D(N.TEXTURE_2D,B,0,0,ce,me,U,Q),we.unbindTexture()},this.copyTextureToTexture=function(w,D,B=null,z=null,U=0){w.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture function signature has changed."),z=arguments[0]||null,w=arguments[1],D=arguments[2],U=arguments[3]||0,B=null);let Q,ce,me,ge,Ce,De,_e,Ye,st;const ot=w.isCompressedTexture?w.mipmaps[U]:w.image;B!==null?(Q=B.max.x-B.min.x,ce=B.max.y-B.min.y,me=B.isBox3?B.max.z-B.min.z:1,ge=B.min.x,Ce=B.min.y,De=B.isBox3?B.min.z:0):(Q=ot.width,ce=ot.height,me=ot.depth||1,ge=0,Ce=0,De=0),z!==null?(_e=z.x,Ye=z.y,st=z.z):(_e=0,Ye=0,st=0);const kt=Ne.convert(D.format),je=Ne.convert(D.type);let ye;D.isData3DTexture?(A.setTexture3D(D,0),ye=N.TEXTURE_3D):D.isDataArrayTexture||D.isCompressedArrayTexture?(A.setTexture2DArray(D,0),ye=N.TEXTURE_2D_ARRAY):(A.setTexture2D(D,0),ye=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,D.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,D.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,D.unpackAlignment);const An=N.getParameter(N.UNPACK_ROW_LENGTH),Ke=N.getParameter(N.UNPACK_IMAGE_HEIGHT),ln=N.getParameter(N.UNPACK_SKIP_PIXELS),Ei=N.getParameter(N.UNPACK_SKIP_ROWS),Wt=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ot.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ot.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ge),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ce),N.pixelStorei(N.UNPACK_SKIP_IMAGES,De);const Ss=w.isDataArrayTexture||w.isData3DTexture,at=D.isDataArrayTexture||D.isData3DTexture;if(w.isRenderTargetTexture||w.isDepthTexture){const gn=be.get(w),bs=be.get(D),Kt=be.get(gn.__renderTarget),Hn=be.get(bs.__renderTarget);we.bindFramebuffer(N.READ_FRAMEBUFFER,Kt.__webglFramebuffer),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,Hn.__webglFramebuffer);for(let Vn=0;Vn<me;Vn++)Ss&&N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(w).__webglTexture,U,De+Vn),w.isDepthTexture?(at&&N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,be.get(D).__webglTexture,U,st+Vn),N.blitFramebuffer(ge,Ce,Q,ce,_e,Ye,Q,ce,N.DEPTH_BUFFER_BIT,N.NEAREST)):at?N.copyTexSubImage3D(ye,U,_e,Ye,st+Vn,ge,Ce,Q,ce):N.copyTexSubImage2D(ye,U,_e,Ye,st+Vn,ge,Ce,Q,ce);we.bindFramebuffer(N.READ_FRAMEBUFFER,null),we.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else at?w.isDataTexture||w.isData3DTexture?N.texSubImage3D(ye,U,_e,Ye,st,Q,ce,me,kt,je,ot.data):D.isCompressedArrayTexture?N.compressedTexSubImage3D(ye,U,_e,Ye,st,Q,ce,me,kt,ot.data):N.texSubImage3D(ye,U,_e,Ye,st,Q,ce,me,kt,je,ot):w.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,U,_e,Ye,Q,ce,kt,je,ot.data):w.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,U,_e,Ye,ot.width,ot.height,kt,ot.data):N.texSubImage2D(N.TEXTURE_2D,U,_e,Ye,Q,ce,kt,je,ot);N.pixelStorei(N.UNPACK_ROW_LENGTH,An),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ke),N.pixelStorei(N.UNPACK_SKIP_PIXELS,ln),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ei),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Wt),U===0&&D.generateMipmaps&&N.generateMipmap(ye),we.unbindTexture()},this.copyTextureToTexture3D=function(w,D,B=null,z=null,U=0){return w.isTexture!==!0&&(zs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),B=arguments[0]||null,z=arguments[1]||null,w=arguments[2],D=arguments[3],U=arguments[4]||0),zs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,D,B,z,U)},this.initRenderTarget=function(w){be.get(w).__webglFramebuffer===void 0&&A.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?A.setTextureCube(w,0):w.isData3DTexture?A.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?A.setTexture2DArray(w,0):A.setTexture2D(w,0),we.unbindTexture()},this.resetState=function(){E=0,C=0,P=null,we.reset(),it.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=He._getDrawingBufferColorSpace(e),t.unpackColorSpace=He._getUnpackColorSpace()}}class pl{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Se(e),this.near=t,this.far=n}clone(){return new pl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class s_ extends nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Vt,this.environmentIntensity=1,this.environmentRotation=new Vt,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class tu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ha,this.updateRanges=[],this.version=0,this.uuid=pn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=pn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Ft=new M;class Zs{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyMatrix4(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.applyNormalMatrix(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Ft.fromBufferAttribute(this,t),Ft.transformDirection(e),this.setXYZ(t,Ft.x,Ft.y,Ft.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=dn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Qe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=dn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=dn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=dn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=dn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qe(t,this.array),n=Qe(n,this.array),i=Qe(i,this.array),r=Qe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new Nt(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Zs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class nu extends sn{static get type(){return"SpriteMaterial"}constructor(e){super(),this.isSpriteMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Hi;const Rs=new M,Vi=new M,Gi=new M,Wi=new ie,Cs=new ie,iu=new Ae,Er=new M,Ps=new M,Ar=new M,Uc=new ie,zo=new ie,Nc=new ie;class r_ extends nt{constructor(e=new nu){if(super(),this.isSprite=!0,this.type="Sprite",Hi===void 0){Hi=new Et;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new tu(t,5);Hi.setIndex([0,1,2,0,2,3]),Hi.setAttribute("position",new Zs(n,3,0,!1)),Hi.setAttribute("uv",new Zs(n,2,3,!1))}this.geometry=Hi,this.material=e,this.center=new ie(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Vi.setFromMatrixScale(this.matrixWorld),iu.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Gi.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Vi.multiplyScalar(-Gi.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Rr(Er.set(-.5,-.5,0),Gi,o,Vi,i,r),Rr(Ps.set(.5,-.5,0),Gi,o,Vi,i,r),Rr(Ar.set(.5,.5,0),Gi,o,Vi,i,r),Uc.set(0,0),zo.set(1,0),Nc.set(1,1);let a=e.ray.intersectTriangle(Er,Ps,Ar,!1,Rs);if(a===null&&(Rr(Ps.set(-.5,.5,0),Gi,o,Vi,i,r),zo.set(0,1),a=e.ray.intersectTriangle(Er,Ar,Ps,!1,Rs),a===null))return;const l=e.ray.origin.distanceTo(Rs);l<e.near||l>e.far||t.push({distance:l,point:Rs.clone(),uv:en.getInterpolation(Rs,Er,Ps,Ar,Uc,zo,Nc,new ie),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Rr(s,e,t,n,i,r){Wi.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Cs.x=r*Wi.x-i*Wi.y,Cs.y=i*Wi.x+r*Wi.y):Cs.copy(Wi),s.copy(e),s.x+=Cs.x,s.y+=Cs.y,s.applyMatrix4(iu)}const Fc=new M,Oc=new $e,Bc=new $e,o_=new M,zc=new Ae,Cr=new M,ko=new Mn,kc=new Ae,Ho=new Qs;class a_ extends Oe{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=zl,this.bindMatrix=new Ae,this.bindMatrixInverse=new Ae,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Ht),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cr),this.boundingBox.expandByPoint(Cr)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mn),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Cr),this.boundingSphere.expandByPoint(Cr)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ko.copy(this.boundingSphere),ko.applyMatrix4(i),e.ray.intersectsSphere(ko)!==!1&&(kc.copy(i).invert(),Ho.copy(e.ray).applyMatrix4(kc),!(this.boundingBox!==null&&Ho.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ho)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new $e,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===zl?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===fd?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Oc.fromBufferAttribute(i.attributes.skinIndex,e),Bc.fromBufferAttribute(i.attributes.skinWeight,e),Fc.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Bc.getComponent(r);if(o!==0){const a=Oc.getComponent(r);zc.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(o_.copy(Fc).applyMatrix4(zc),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class su extends nt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class eo extends bt{constructor(e=null,t=1,n=1,i,r,o,a,l,c=St,h=St,u,d){super(null,o,a,l,c,h,i,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Hc=new Ae,l_=new Ae;class ml{constructor(e=[],t=[]){this.uuid=pn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new Ae)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Ae;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:l_;Hc.multiplyMatrices(a,t[r]),Hc.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new ml(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new eo(t,e,e,$t,fn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new su),this.bones.push(o),this.boneInverses.push(new Ae().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Ga extends Nt{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Xi=new Ae,Vc=new Ae,Pr=[],Gc=new Ht,c_=new Ae,Is=new Oe,Ls=new Mn;class ru extends Oe{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Ga(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,c_)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Ht),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),Gc.copy(e.boundingBox).applyMatrix4(Xi),this.boundingBox.union(Gc)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Xi),Ls.copy(e.boundingSphere).applyMatrix4(Xi),this.boundingSphere.union(Ls)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Is.geometry=this.geometry,Is.material=this.material,Is.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ls.copy(this.boundingSphere),Ls.applyMatrix4(n),e.ray.intersectsSphere(Ls)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,Xi),Vc.multiplyMatrices(n,Xi),Is.matrixWorld=Vc,Is.raycast(e,Pr);for(let o=0,a=Pr.length;o<a;o++){const l=Pr[o];l.instanceId=r,l.object=this,t.push(l)}Pr.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Ga(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new eo(new Float32Array(i*this.count),i,this.count,il,fn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class to extends sn{static get type(){return"LineBasicMaterial"}constructor(e){super(),this.isLineBasicMaterial=!0,this.color=new Se(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const jr=new M,Kr=new M,Wc=new Ae,Ds=new Qs,Ir=new Mn,Vo=new M,Xc=new M;class er extends nt{constructor(e=new Et,t=new to){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)jr.fromBufferAttribute(t,i-1),Kr.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=jr.distanceTo(Kr);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ir.copy(n.boundingSphere),Ir.applyMatrix4(i),Ir.radius+=r,e.ray.intersectsSphere(Ir)===!1)return;Wc.copy(i).invert(),Ds.copy(e.ray).applyMatrix4(Wc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const f=Math.max(0,o.start),_=Math.min(h.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=h.getX(g),x=h.getX(g+1),y=Lr(this,e,Ds,l,p,x);y&&t.push(y)}if(this.isLineLoop){const g=h.getX(_-1),m=h.getX(f),p=Lr(this,e,Ds,l,g,m);p&&t.push(p)}}else{const f=Math.max(0,o.start),_=Math.min(d.count,o.start+o.count);for(let g=f,m=_-1;g<m;g+=c){const p=Lr(this,e,Ds,l,g,g+1);p&&t.push(p)}if(this.isLineLoop){const g=Lr(this,e,Ds,l,_-1,f);g&&t.push(g)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Lr(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(jr.fromBufferAttribute(o,i),Kr.fromBufferAttribute(o,r),t.distanceSqToSegment(jr,Kr,Vo,Xc)>n)return;Vo.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Vo);if(!(l<e.near||l>e.far))return{distance:l,point:Xc.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const qc=new M,$c=new M;class h_ extends er{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)qc.fromBufferAttribute(t,i),$c.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+qc.distanceTo($c);e.setAttribute("lineDistance",new lt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class u_ extends er{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class ou extends sn{static get type(){return"PointsMaterial"}constructor(e){super(),this.isPointsMaterial=!0,this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Yc=new Ae,Wa=new Qs,Dr=new Mn,Ur=new M;class d_ extends nt{constructor(e=new Et,t=new ou){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Dr.copy(n.boundingSphere),Dr.applyMatrix4(i),Dr.radius+=r,e.ray.intersectsSphere(Dr)===!1)return;Yc.copy(i).invert(),Wa.copy(e.ray).applyMatrix4(Yc);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),f=Math.min(c.count,o.start+o.count);for(let _=d,g=f;_<g;_++){const m=c.getX(_);Ur.fromBufferAttribute(u,m),jc(Ur,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),f=Math.min(u.count,o.start+o.count);for(let _=d,g=f;_<g;_++)Ur.fromBufferAttribute(u,_),jc(Ur,_,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function jc(s,e,t,n,i,r,o){const a=Wa.distanceSqToPoint(s);if(a<t){const l=new M;Wa.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class tr extends bt{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Sn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,i=this.getPoint(0),r=0;t.push(0);for(let o=1;o<=e;o++)n=this.getPoint(o/e),r+=n.distanceTo(i),t.push(r),i=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let i=0;const r=n.length;let o;t?o=t:o=e*n[r-1];let a=0,l=r-1,c;for(;a<=l;)if(i=Math.floor(a+(l-a)/2),c=n[i]-o,c<0)a=i+1;else if(c>0)l=i-1;else{l=i;break}if(i=l,n[i]===o)return i/(r-1);const h=n[i],d=n[i+1]-h,f=(o-h)/d;return(i+f)/(r-1)}getTangent(e,t){let i=e-1e-4,r=e+1e-4;i<0&&(i=0),r>1&&(r=1);const o=this.getPoint(i),a=this.getPoint(r),l=t||(o.isVector2?new ie:new M);return l.copy(a).sub(o).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new M,i=[],r=[],o=[],a=new M,l=new Ae;for(let f=0;f<=e;f++){const _=f/e;i[f]=this.getTangentAt(_,new M)}r[0]=new M,o[0]=new M;let c=Number.MAX_VALUE;const h=Math.abs(i[0].x),u=Math.abs(i[0].y),d=Math.abs(i[0].z);h<=c&&(c=h,n.set(1,0,0)),u<=c&&(c=u,n.set(0,1,0)),d<=c&&n.set(0,0,1),a.crossVectors(i[0],n).normalize(),r[0].crossVectors(i[0],a),o[0].crossVectors(i[0],r[0]);for(let f=1;f<=e;f++){if(r[f]=r[f-1].clone(),o[f]=o[f-1].clone(),a.crossVectors(i[f-1],i[f]),a.length()>Number.EPSILON){a.normalize();const _=Math.acos(xt(i[f-1].dot(i[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(a,_))}o[f].crossVectors(i[f],r[f])}if(t===!0){let f=Math.acos(xt(r[0].dot(r[e]),-1,1));f/=e,i[0].dot(a.crossVectors(r[0],r[e]))>0&&(f=-f);for(let _=1;_<=e;_++)r[_].applyMatrix4(l.makeRotationAxis(i[_],f*_)),o[_].crossVectors(i[_],r[_])}return{tangents:i,normals:r,binormals:o}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class gl extends Sn{constructor(e=0,t=0,n=1,i=1,r=0,o=Math.PI*2,a=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=i,this.aStartAngle=r,this.aEndAngle=o,this.aClockwise=a,this.aRotation=l}getPoint(e,t=new ie){const n=t,i=Math.PI*2;let r=this.aEndAngle-this.aStartAngle;const o=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=i;for(;r>i;)r-=i;r<Number.EPSILON&&(o?r=0:r=i),this.aClockwise===!0&&!o&&(r===i?r=-i:r=r-i);const a=this.aStartAngle+e*r;let l=this.aX+this.xRadius*Math.cos(a),c=this.aY+this.yRadius*Math.sin(a);if(this.aRotation!==0){const h=Math.cos(this.aRotation),u=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*h-f*u+this.aX,c=d*u+f*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class f_ extends gl{constructor(e,t,n,i,r,o){super(e,t,n,n,i,r,o),this.isArcCurve=!0,this.type="ArcCurve"}}function _l(){let s=0,e=0,t=0,n=0;function i(r,o,a,l){s=r,e=a,t=-3*r+3*o-2*a-l,n=2*r-2*o+a+l}return{initCatmullRom:function(r,o,a,l,c){i(o,a,c*(a-r),c*(l-o))},initNonuniformCatmullRom:function(r,o,a,l,c,h,u){let d=(o-r)/c-(a-r)/(c+h)+(a-o)/h,f=(a-o)/h-(l-o)/(h+u)+(l-a)/u;d*=h,f*=h,i(o,a,d,f)},calc:function(r){const o=r*r,a=o*r;return s+e*r+t*o+n*a}}}const Nr=new M,Go=new _l,Wo=new _l,Xo=new _l;class p_ extends Sn{constructor(e=[],t=!1,n="centripetal",i=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=i}getPoint(e,t=new M){const n=t,i=this.points,r=i.length,o=(r-(this.closed?0:1))*e;let a=Math.floor(o),l=o-a;this.closed?a+=a>0?0:(Math.floor(Math.abs(a)/r)+1)*r:l===0&&a===r-1&&(a=r-2,l=1);let c,h;this.closed||a>0?c=i[(a-1)%r]:(Nr.subVectors(i[0],i[1]).add(i[0]),c=Nr);const u=i[a%r],d=i[(a+1)%r];if(this.closed||a+2<r?h=i[(a+2)%r]:(Nr.subVectors(i[r-1],i[r-2]).add(i[r-1]),h=Nr),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let _=Math.pow(c.distanceToSquared(u),f),g=Math.pow(u.distanceToSquared(d),f),m=Math.pow(d.distanceToSquared(h),f);g<1e-4&&(g=1),_<1e-4&&(_=g),m<1e-4&&(m=g),Go.initNonuniformCatmullRom(c.x,u.x,d.x,h.x,_,g,m),Wo.initNonuniformCatmullRom(c.y,u.y,d.y,h.y,_,g,m),Xo.initNonuniformCatmullRom(c.z,u.z,d.z,h.z,_,g,m)}else this.curveType==="catmullrom"&&(Go.initCatmullRom(c.x,u.x,d.x,h.x,this.tension),Wo.initCatmullRom(c.y,u.y,d.y,h.y,this.tension),Xo.initCatmullRom(c.z,u.z,d.z,h.z,this.tension));return n.set(Go.calc(l),Wo.calc(l),Xo.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new M().fromArray(i))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Kc(s,e,t,n,i){const r=(n-e)*.5,o=(i-t)*.5,a=s*s,l=s*a;return(2*t-2*n+r+o)*l+(-3*t+3*n-2*r-o)*a+r*s+t}function m_(s,e){const t=1-s;return t*t*e}function g_(s,e){return 2*(1-s)*s*e}function __(s,e){return s*s*e}function Gs(s,e,t,n){return m_(s,e)+g_(s,t)+__(s,n)}function v_(s,e){const t=1-s;return t*t*t*e}function x_(s,e){const t=1-s;return 3*t*t*s*e}function y_(s,e){return 3*(1-s)*s*s*e}function M_(s,e){return s*s*s*e}function Ws(s,e,t,n,i){return v_(s,e)+x_(s,t)+y_(s,n)+M_(s,i)}class au extends Sn{constructor(e=new ie,t=new ie,n=new ie,i=new ie){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new ie){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(e,i.x,r.x,o.x,a.x),Ws(e,i.y,r.y,o.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class S_ extends Sn{constructor(e=new M,t=new M,n=new M,i=new M){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=i}getPoint(e,t=new M){const n=t,i=this.v0,r=this.v1,o=this.v2,a=this.v3;return n.set(Ws(e,i.x,r.x,o.x,a.x),Ws(e,i.y,r.y,o.y,a.y),Ws(e,i.z,r.z,o.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class lu extends Sn{constructor(e=new ie,t=new ie){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new ie){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new ie){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class b_ extends Sn{constructor(e=new M,t=new M){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new M){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new M){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cu extends Sn{constructor(e=new ie,t=new ie,n=new ie){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new ie){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Gs(e,i.x,r.x,o.x),Gs(e,i.y,r.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class hu extends Sn{constructor(e=new M,t=new M,n=new M){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new M){const n=t,i=this.v0,r=this.v1,o=this.v2;return n.set(Gs(e,i.x,r.x,o.x),Gs(e,i.y,r.y,o.y),Gs(e,i.z,r.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class uu extends Sn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new ie){const n=t,i=this.points,r=(i.length-1)*e,o=Math.floor(r),a=r-o,l=i[o===0?o:o-1],c=i[o],h=i[o>i.length-2?i.length-1:o+1],u=i[o>i.length-3?i.length-1:o+2];return n.set(Kc(a,l.x,c.x,h.x,u.x),Kc(a,l.y,c.y,h.y,u.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(i.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const i=this.points[t];e.points.push(i.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const i=e.points[t];this.points.push(new ie().fromArray(i))}return this}}var Zc=Object.freeze({__proto__:null,ArcCurve:f_,CatmullRomCurve3:p_,CubicBezierCurve:au,CubicBezierCurve3:S_,EllipseCurve:gl,LineCurve:lu,LineCurve3:b_,QuadraticBezierCurve:cu,QuadraticBezierCurve3:hu,SplineCurve:uu});class w_ extends Sn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new Zc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),i=this.getCurveLengths();let r=0;for(;r<i.length;){if(i[r]>=n){const o=i[r]-n,a=this.curves[r],l=a.getLength(),c=l===0?0:1-o/l;return a.getPointAt(c,t)}r++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,i=this.curves.length;n<i;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let i=0,r=this.curves;i<r.length;i++){const o=r[i],a=o.isEllipseCurve?e*2:o.isLineCurve||o.isLineCurve3?1:o.isSplineCurve?e*o.points.length:e,l=o.getPoints(a);for(let c=0;c<l.length;c++){const h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(i.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const i=this.curves[t];e.curves.push(i.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const i=e.curves[t];this.curves.push(new Zc[i.type]().fromJSON(i))}return this}}class T_ extends w_{constructor(e){super(),this.type="Path",this.currentPoint=new ie,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new lu(this.currentPoint.clone(),new ie(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,i){const r=new cu(this.currentPoint.clone(),new ie(e,t),new ie(n,i));return this.curves.push(r),this.currentPoint.set(n,i),this}bezierCurveTo(e,t,n,i,r,o){const a=new au(this.currentPoint.clone(),new ie(e,t),new ie(n,i),new ie(r,o));return this.curves.push(a),this.currentPoint.set(r,o),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new uu(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,i,r,o){const a=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+a,t+l,n,i,r,o),this}absarc(e,t,n,i,r,o){return this.absellipse(e,t,n,n,i,r,o),this}ellipse(e,t,n,i,r,o,a,l){const c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,i,r,o,a,l),this}absellipse(e,t,n,i,r,o,a,l){const c=new gl(e,t,n,i,r,o,a,l);if(this.curves.length>0){const u=c.getPoint(0);u.equals(this.currentPoint)||this.lineTo(u.x,u.y)}this.curves.push(c);const h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class vl extends Et{constructor(e=[new ie(0,-.5),new ie(.5,0),new ie(0,.5)],t=12,n=0,i=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:i},t=Math.floor(t),i=xt(i,0,Math.PI*2);const r=[],o=[],a=[],l=[],c=[],h=1/t,u=new M,d=new ie,f=new M,_=new M,g=new M;let m=0,p=0;for(let x=0;x<=e.length-1;x++)switch(x){case 0:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(g.x,g.y,g.z);break;default:m=e[x+1].x-e[x].x,p=e[x+1].y-e[x].y,f.x=p*1,f.y=-m,f.z=p*0,_.copy(f),f.x+=g.x,f.y+=g.y,f.z+=g.z,f.normalize(),l.push(f.x,f.y,f.z),g.copy(_)}for(let x=0;x<=t;x++){const y=n+x*h*i,v=Math.sin(y),R=Math.cos(y);for(let E=0;E<=e.length-1;E++){u.x=e[E].x*v,u.y=e[E].y,u.z=e[E].x*R,o.push(u.x,u.y,u.z),d.x=x/t,d.y=E/(e.length-1),a.push(d.x,d.y);const C=l[3*E+0]*v,P=l[3*E+1],T=l[3*E+0]*R;c.push(C,P,T)}}for(let x=0;x<t;x++)for(let y=0;y<e.length-1;y++){const v=y+x*e.length,R=v,E=v+e.length,C=v+e.length+1,P=v+1;r.push(R,E,P),r.push(C,P,E)}this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("uv",new lt(a,2)),this.setAttribute("normal",new lt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vl(e.points,e.segments,e.phiStart,e.phiLength)}}class xl extends vl{constructor(e=1,t=1,n=4,i=8){const r=new T_;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),i),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:i}}static fromJSON(e){return new xl(e.radius,e.length,e.capSegments,e.radialSegments)}}class no extends Et{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new M,h=new ie;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const f=n+u/t*i;c.x=e*Math.cos(f),c.y=e*Math.sin(f),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new lt(o,3)),this.setAttribute("normal",new lt(a,3)),this.setAttribute("uv",new lt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class wi extends Et{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const h=[],u=[],d=[],f=[];let _=0;const g=[],m=n/2;let p=0;x(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new lt(u,3)),this.setAttribute("normal",new lt(d,3)),this.setAttribute("uv",new lt(f,2));function x(){const v=new M,R=new M;let E=0;const C=(t-e)/n;for(let P=0;P<=r;P++){const T=[],b=P/r,I=b*(t-e)+e;for(let k=0;k<=i;k++){const O=k/i,H=O*l+a,K=Math.sin(H),W=Math.cos(H);R.x=I*K,R.y=-b*n+m,R.z=I*W,u.push(R.x,R.y,R.z),v.set(K,C,W).normalize(),d.push(v.x,v.y,v.z),f.push(O,1-b),T.push(_++)}g.push(T)}for(let P=0;P<i;P++)for(let T=0;T<r;T++){const b=g[T][P],I=g[T+1][P],k=g[T+1][P+1],O=g[T][P+1];(e>0||T!==0)&&(h.push(b,I,O),E+=3),(t>0||T!==r-1)&&(h.push(I,k,O),E+=3)}c.addGroup(p,E,0),p+=E}function y(v){const R=_,E=new ie,C=new M;let P=0;const T=v===!0?e:t,b=v===!0?1:-1;for(let k=1;k<=i;k++)u.push(0,m*b,0),d.push(0,b,0),f.push(.5,.5),_++;const I=_;for(let k=0;k<=i;k++){const H=k/i*l+a,K=Math.cos(H),W=Math.sin(H);C.x=T*W,C.y=m*b,C.z=T*K,u.push(C.x,C.y,C.z),d.push(0,b,0),E.x=K*.5+.5,E.y=W*.5*b+.5,f.push(E.x,E.y),_++}for(let k=0;k<i;k++){const O=R+k,H=I+k;v===!0?h.push(H,H+1,O):h.push(H+1,H,O),P+=3}c.addGroup(p,P,v===!0?1:2),p+=P}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class io extends wi{constructor(e=1,t=1,n=32,i=1,r=!1,o=0,a=Math.PI*2){super(0,e,t,n,i,r,o,a),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:i,openEnded:r,thetaStart:o,thetaLength:a}}static fromJSON(e){return new io(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class yl extends Et{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/i,f=new M,_=new ie;for(let g=0;g<=i;g++){for(let m=0;m<=n;m++){const p=r+m/n*o;f.x=u*Math.cos(p),f.y=u*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),_.x=(f.x/t+1)/2,_.y=(f.y/t+1)/2,h.push(_.x,_.y)}u+=d}for(let g=0;g<i;g++){const m=g*(n+1);for(let p=0;p<n;p++){const x=p+m,y=x,v=x+n+1,R=x+n+2,E=x+1;a.push(y,v,E),a.push(v,R,E)}}this.setIndex(a),this.setAttribute("position",new lt(l,3)),this.setAttribute("normal",new lt(c,3)),this.setAttribute("uv",new lt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class si extends Et{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new M,d=new M,f=[],_=[],g=[],m=[];for(let p=0;p<=n;p++){const x=[],y=p/n;let v=0;p===0&&o===0?v=.5/t:p===n&&l===Math.PI&&(v=-.5/t);for(let R=0;R<=t;R++){const E=R/t;u.x=-e*Math.cos(i+E*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(i+E*r)*Math.sin(o+y*a),_.push(u.x,u.y,u.z),d.copy(u).normalize(),g.push(d.x,d.y,d.z),m.push(E+v,1-y),x.push(c++)}h.push(x)}for(let p=0;p<n;p++)for(let x=0;x<t;x++){const y=h[p][x+1],v=h[p][x],R=h[p+1][x],E=h[p+1][x+1];(p!==0||o>0)&&f.push(y,v,E),(p!==n-1||l<Math.PI)&&f.push(v,R,E)}this.setIndex(f),this.setAttribute("position",new lt(_,3)),this.setAttribute("normal",new lt(g,3)),this.setAttribute("uv",new lt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new si(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class rn extends sn{static get type(){return"MeshStandardMaterial"}constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Vt,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class bn extends rn{static get type(){return"MeshPhysicalMaterial"}constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new ie(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return xt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class E_ extends sn{static get type(){return"MeshToonMaterial"}constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.color=new Se(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ll,this.normalScale=new ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}function Fr(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function A_(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function R_(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Jc(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function du(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class nr{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];e:{t:{let o;n:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break t}o=t.length;break n}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class C_ extends nr{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ji,endingEnd:ji}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Ki:r=e,a=2*t-n;break;case $r:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ki:o=e,l=2*n-t;break;case $r:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,_=(n-t)/(i-t),g=_*_,m=g*_,p=-d*m+2*d*g-d*_,x=(1+d)*m+(-1.5-2*d)*g+(-.5+d)*_+1,y=(-1-f)*m+(1.5+f)*g+.5*_,v=f*m-f*g;for(let R=0;R!==a;++R)r[R]=p*o[h+R]+x*o[c+R]+y*o[l+R]+v*o[u+R];return r}}class fu extends nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(i-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class P_ extends nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class wn{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Fr(t,this.TimeBufferType),this.values=Fr(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Fr(e.times,Array),values:Fr(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new P_(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new fu(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new C_(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Ys:t=this.InterpolantFactoryMethodDiscrete;break;case js:t=this.InterpolantFactoryMethodLinear;break;case ho:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ys;case this.InterpolantFactoryMethodLinear:return js;case this.InterpolantFactoryMethodSmooth:return ho}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&A_(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===ho,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(i)l=!0;else{const u=a*n,d=u-n,f=u+n;for(let _=0;_!==n;++_){const g=t[u+_];if(g!==t[d+_]||g!==t[f+_]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let f=0;f!==n;++f)t[d+f]=t[u+f]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}wn.prototype.TimeBufferType=Float32Array;wn.prototype.ValueBufferType=Float32Array;wn.prototype.DefaultInterpolation=js;class xs extends wn{constructor(e,t,n){super(e,t,n)}}xs.prototype.ValueTypeName="bool";xs.prototype.ValueBufferType=Array;xs.prototype.DefaultInterpolation=Ys;xs.prototype.InterpolantFactoryMethodLinear=void 0;xs.prototype.InterpolantFactoryMethodSmooth=void 0;class pu extends wn{}pu.prototype.ValueTypeName="color";class fs extends wn{}fs.prototype.ValueTypeName="number";class I_ extends nr{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let h=c+a;c!==h;c+=4)nn.slerpFlat(r,0,o,c-a,o,c,l);return r}}class ps extends wn{InterpolantFactoryMethodLinear(e){return new I_(this.times,this.values,this.getValueSize(),e)}}ps.prototype.ValueTypeName="quaternion";ps.prototype.InterpolantFactoryMethodSmooth=void 0;class ys extends wn{constructor(e,t,n){super(e,t,n)}}ys.prototype.ValueTypeName="string";ys.prototype.ValueBufferType=Array;ys.prototype.DefaultInterpolation=Ys;ys.prototype.InterpolantFactoryMethodLinear=void 0;ys.prototype.InterpolantFactoryMethodSmooth=void 0;class ms extends wn{}ms.prototype.ValueTypeName="vector";class Xa{constructor(e="",t=-1,n=[],i=al){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=pn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(D_(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(wn.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=R_(l);l=Jc(l,1,h),c=Jc(c,1,h),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new fs(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=i[u];d||(i[u]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,f,_,g){if(f.length!==0){const m=[],p=[];du(f,m,p,_),m.length!==0&&g.push(new u(d,m,p))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let _;for(_=0;_<d.length;_++)if(d[_].morphTargets)for(let g=0;g<d[_].morphTargets.length;g++)f[d[_].morphTargets[g]]=-1;for(const g in f){const m=[],p=[];for(let x=0;x!==d[_].morphTargets.length;++x){const y=d[_];m.push(y.time),p.push(y.morphTarget===g?1:0)}i.push(new fs(".morphTargetInfluence["+g+"]",m,p))}l=f.length*o}else{const f=".bones["+t[u].name+"]";n(ms,f+".position",d,"pos",i),n(ps,f+".quaternion",d,"rot",i),n(ms,f+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function L_(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return fs;case"vector":case"vector2":case"vector3":case"vector4":return ms;case"color":return pu;case"quaternion":return ps;case"bool":case"boolean":return xs;case"string":return ys}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function D_(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=L_(s.type);if(s.times===void 0){const t=[],n=[];du(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const ei={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class U_{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&i.onStart!==void 0&&i.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,i.onProgress!==void 0&&i.onProgress(h,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(h){i.onError!==void 0&&i.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const f=c[u],_=c[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return _}return null}}}const N_=new U_;class Ms{constructor(e){this.manager=e!==void 0?e:N_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ms.DEFAULT_MATERIAL_NAME="__DEFAULT";const Dn={};class F_ extends Error{constructor(e,t){super(e),this.response=t}}class mu extends Ms{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ei.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Dn[e]!==void 0){Dn[e].push({onLoad:t,onProgress:n,onError:i});return}Dn[e]=[],Dn[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Dn[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,_=f!==0;let g=0;const m=new ReadableStream({start(p){x();function x(){u.read().then(({done:y,value:v})=>{if(y)p.close();else{g+=v.byteLength;const R=new ProgressEvent("progress",{lengthComputable:_,loaded:g,total:f});for(let E=0,C=h.length;E<C;E++){const P=h[E];P.onProgress&&P.onProgress(R)}p.enqueue(v),x()}},y=>{p.error(y)})}}});return new Response(m)}else throw new F_(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(_=>f.decode(_))}}}).then(c=>{ei.add(e,c);const h=Dn[e];delete Dn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onLoad&&f.onLoad(c)}}).catch(c=>{const h=Dn[e];if(h===void 0)throw this.manager.itemError(e),c;delete Dn[e];for(let u=0,d=h.length;u<d;u++){const f=h[u];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class O_ extends Ms{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ei.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Ks("img");function l(){h(),ei.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),i&&i(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class B_ extends Ms{constructor(e){super(e)}load(e,t,n,i){const r=new bt,o=new O_(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class so extends nt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class z_ extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Se(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const qo=new Ae,Qc=new M,eh=new M;class Ml{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ie(512,512),this.map=null,this.mapPass=null,this.matrix=new Ae,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ul,this._frameExtents=new ie(1,1),this._viewportCount=1,this._viewports=[new $e(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Qc.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qc),eh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eh),t.updateMatrixWorld(),qo.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(qo),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(qo)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class k_ extends Ml{constructor(){super(new Lt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=us*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class H_ extends so{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new k_}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const th=new Ae,Us=new M,$o=new M;class V_ extends Ml{constructor(){super(new Lt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ie(4,2),this._viewportCount=6,this._viewports=[new $e(2,1,1,1),new $e(0,1,1,1),new $e(3,1,1,1),new $e(1,1,1,1),new $e(3,0,1,1),new $e(1,0,1,1)],this._cubeDirections=[new M(1,0,0),new M(-1,0,0),new M(0,0,1),new M(0,0,-1),new M(0,1,0),new M(0,-1,0)],this._cubeUps=[new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,1,0),new M(0,0,1),new M(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Us.setFromMatrixPosition(e.matrixWorld),n.position.copy(Us),$o.copy(n.position),$o.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt($o),n.updateMatrixWorld(),i.makeTranslation(-Us.x,-Us.y,-Us.z),th.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(th)}}class ro extends so{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new V_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class G_ extends Ml{constructor(){super(new dl(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gu extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(nt.DEFAULT_UP),this.updateMatrix(),this.target=new nt,this.shadow=new G_}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xs{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class W_ extends Ms{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ei.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ei.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),ei.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ei.add(e,l),r.manager.itemStart(e)}}class X_{constructor(e,t,n){this.binding=e,this.valueSize=n;let i,r,o;switch(t){case"quaternion":i=this._slerp,r=this._slerpAdditive,o=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":i=this._select,r=this._select,o=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:i=this._lerp,r=this._lerpAdditive,o=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=i,this._mixBufferRegionAdditive=r,this._setIdentity=o,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,i=this.valueSize,r=e*i+i;let o=this.cumulativeWeight;if(o===0){for(let a=0;a!==i;++a)n[r+a]=n[a];o=t}else{o+=t;const a=t/o;this._mixBufferRegion(n,r,0,a,i)}this.cumulativeWeight=o}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,i=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,i,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,i=e*t+t,r=this.cumulativeWeight,o=this.cumulativeWeightAdditive,a=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,r<1){const l=t*this._origIndex;this._mixBufferRegion(n,i,l,1-r,t)}o>0&&this._mixBufferRegionAdditive(n,i,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){a.setValue(n,i);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,i=n*this._origIndex;e.getValue(t,i);for(let r=n,o=i;r!==o;++r)t[r]=t[i+r%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,i,r){if(i>=.5)for(let o=0;o!==r;++o)e[t+o]=e[n+o]}_slerp(e,t,n,i){nn.slerpFlat(e,t,e,t,e,n,i)}_slerpAdditive(e,t,n,i,r){const o=this._workIndex*r;nn.multiplyQuaternionsFlat(e,o,e,t,e,n),nn.slerpFlat(e,t,e,t,e,o,i)}_lerp(e,t,n,i,r){const o=1-i;for(let a=0;a!==r;++a){const l=t+a;e[l]=e[l]*o+e[n+a]*i}}_lerpAdditive(e,t,n,i,r){for(let o=0;o!==r;++o){const a=t+o;e[a]=e[a]+e[n+o]*i}}}const Sl="\\[\\]\\.:\\/",q_=new RegExp("["+Sl+"]","g"),bl="[^"+Sl+"]",$_="[^"+Sl.replace("\\.","")+"]",Y_=/((?:WC+[\/:])*)/.source.replace("WC",bl),j_=/(WCOD+)?/.source.replace("WCOD",$_),K_=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bl),Z_=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bl),J_=new RegExp("^"+Y_+j_+K_+Z_+"$"),Q_=["material","materials","bones","map"];class ev{constructor(e,t,n){const i=n||Ze.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ze{constructor(e,t,n){this.path=t,this.parsedPath=n||Ze.parseTrackName(t),this.node=Ze.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ze.Composite(e,t,n):new Ze(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(q_,"")}static parseTrackName(e){const t=J_.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Q_.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Ze.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ze.Composite=ev;Ze.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ze.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ze.prototype.GetterByBindingType=[Ze.prototype._getValue_direct,Ze.prototype._getValue_array,Ze.prototype._getValue_arrayElement,Ze.prototype._getValue_toArray];Ze.prototype.SetterByBindingTypeAndVersioning=[[Ze.prototype._setValue_direct,Ze.prototype._setValue_direct_setNeedsUpdate,Ze.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_array,Ze.prototype._setValue_array_setNeedsUpdate,Ze.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_arrayElement,Ze.prototype._setValue_arrayElement_setNeedsUpdate,Ze.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ze.prototype._setValue_fromArray,Ze.prototype._setValue_fromArray_setNeedsUpdate,Ze.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class tv{constructor(e,t,n=null,i=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=i;const r=t.tracks,o=r.length,a=new Array(o),l={endingStart:ji,endingEnd:ji};for(let c=0;c!==o;++c){const h=r[c].createInterpolant(null);a[c]=h,h.settings=l}this._interpolantSettings=l,this._interpolants=a,this._propertyBindings=new Array(o),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=Fh,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const i=this._clip.duration,r=e._clip.duration,o=r/i,a=i/r;e.warp(1,o,t),this.warp(a,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const i=this._mixer,r=i.time,o=this.timeScale;let a=this._timeScaleInterpolant;a===null&&(a=i._lendControlInterpolant(),this._timeScaleInterpolant=a);const l=a.parameterPositions,c=a.sampleValues;return l[0]=r,l[1]=r+n,c[0]=e/o,c[1]=t/o,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,i){if(!this.enabled){this._updateWeight(e);return}const r=this._startTime;if(r!==null){const l=(e-r)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const o=this._updateTime(t),a=this._updateWeight(e);if(a>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case gd:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulateAdditive(a);break;case al:default:for(let h=0,u=l.length;h!==u;++h)l[h].evaluate(o),c[h].accumulate(i,a)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopFading(),i===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const i=n.evaluate(e)[0];t*=i,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let i=this.time+e,r=this._loopCount;const o=n===md;if(e===0)return r===-1?i:o&&(r&1)===1?t-i:i;if(n===pd){r===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(i>=t)i=t;else if(i<0)i=0;else{this.time=i;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(r===-1&&(e>=0?(r=0,this._setEndings(!0,this.repetitions===0,o)):this._setEndings(this.repetitions===0,!0,o)),i>=t||i<0){const a=Math.floor(i/t);i-=t*a,r+=Math.abs(a);const l=this.repetitions-r;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,i=e>0?t:0,this.time=i,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,o)}else this._setEndings(!1,!1,o);this._loopCount=r,this.time=i,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:a})}}else this.time=i;if(o&&(r&1)===1)return t-i}return i}_setEndings(e,t,n){const i=this._interpolantSettings;n?(i.endingStart=Ki,i.endingEnd=Ki):(e?i.endingStart=this.zeroSlopeAtStart?Ki:ji:i.endingStart=$r,t?i.endingEnd=this.zeroSlopeAtEnd?Ki:ji:i.endingEnd=$r)}_scheduleFading(e,t,n){const i=this._mixer,r=i.time;let o=this._weightInterpolant;o===null&&(o=i._lendControlInterpolant(),this._weightInterpolant=o);const a=o.parameterPositions,l=o.sampleValues;return a[0]=r,l[0]=t,a[1]=r+e,l[1]=n,this}}const nv=new Float32Array(1);class iv extends oi{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,i=e._clip.tracks,r=i.length,o=e._propertyBindings,a=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let h=c[l];h===void 0&&(h={},c[l]=h);for(let u=0;u!==r;++u){const d=i[u],f=d.name;let _=h[f];if(_!==void 0)++_.referenceCount,o[u]=_;else{if(_=o[u],_!==void 0){_._cacheIndex===null&&(++_.referenceCount,this._addInactiveBinding(_,l,f));continue}const g=t&&t._propertyBindings[u].binding.parsedPath;_=new X_(Ze.create(n,f,g),d.ValueTypeName,d.getValueSize()),++_.referenceCount,this._addInactiveBinding(_,l,f),o[u]=_}a[u].resultBuffer=_.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,i=e._clip.uuid,r=this._actionsByClip[i];this._bindAction(e,r&&r.knownActions[0]),this._addInactiveAction(e,i,n)}const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];r.useCount++===0&&(this._lendBinding(r),r.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.useCount===0&&(r.restoreOriginalState(),this._takeBackBinding(r))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const i=this._actions,r=this._actionsByClip;let o=r[t];if(o===void 0)o={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,r[t]=o;else{const a=o.knownActions;e._byClipCacheIndex=a.length,a.push(e)}e._cacheIndex=i.length,i.push(e),o.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],i=e._cacheIndex;n._cacheIndex=i,t[i]=n,t.pop(),e._cacheIndex=null;const r=e._clip.uuid,o=this._actionsByClip,a=o[r],l=a.knownActions,c=l[l.length-1],h=e._byClipCacheIndex;c._byClipCacheIndex=h,l[h]=c,l.pop(),e._byClipCacheIndex=null;const u=a.actionByRoot,d=(e._localRoot||this._root).uuid;delete u[d],l.length===0&&delete o[r],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,i=t.length;n!==i;++n){const r=t[n];--r.referenceCount===0&&this._removeInactiveBinding(r)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,i=this._nActiveActions++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,i=--this._nActiveActions,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_addInactiveBinding(e,t,n){const i=this._bindingsByRootAndName,r=this._bindings;let o=i[t];o===void 0&&(o={},i[t]=o),o[n]=e,e._cacheIndex=r.length,r.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,i=n.rootNode.uuid,r=n.path,o=this._bindingsByRootAndName,a=o[i],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete a[r],Object.keys(a).length===0&&delete o[i]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,i=this._nActiveBindings++,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,i=--this._nActiveBindings,r=t[i];e._cacheIndex=i,t[i]=e,r._cacheIndex=n,t[n]=r}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new fu(new Float32Array(2),new Float32Array(2),1,nv),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,i=--this._nActiveControlInterpolants,r=t[i];e.__cacheIndex=i,t[i]=e,r.__cacheIndex=n,t[n]=r}clipAction(e,t,n){const i=t||this._root,r=i.uuid;let o=typeof e=="string"?Xa.findByName(i,e):e;const a=o!==null?o.uuid:e,l=this._actionsByClip[a];let c=null;if(n===void 0&&(o!==null?n=o.blendMode:n=al),l!==void 0){const u=l.actionByRoot[r];if(u!==void 0&&u.blendMode===n)return u;c=l.knownActions[0],o===null&&(o=c._clip)}if(o===null)return null;const h=new tv(this,o,t,n);return this._bindAction(h,c),this._addInactiveAction(h,a,r),h}existingAction(e,t){const n=t||this._root,i=n.uuid,r=typeof e=="string"?Xa.findByName(n,e):e,o=r?r.uuid:e,a=this._actionsByClip[o];return a!==void 0&&a.actionByRoot[i]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,i=this.time+=e,r=Math.sign(e),o=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(i,e,r,o);const a=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)a[c].apply(o);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,i=this._actionsByClip,r=i[n];if(r!==void 0){const o=r.knownActions;for(let a=0,l=o.length;a!==l;++a){const c=o[a];this._deactivateAction(c);const h=c._cacheIndex,u=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,u._cacheIndex=h,t[h]=u,t.pop(),this._removeInactiveBindingsForAction(c)}delete i[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const o in n){const a=n[o].actionByRoot,l=a[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const i=this._bindingsByRootAndName,r=i[t];if(r!==void 0)for(const o in r){const a=r[o];a.restoreOriginalState(),this._removeInactiveBinding(a)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}const nh=new Ae;class _u{constructor(e,t,n=0,i=1/0){this.ray=new Qs(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new hl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return nh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(nh),this}intersectObject(e,t=!0,n=[]){return qa(e,this,n,t),n.sort(ih),n}intersectObjects(e,t=!0,n=[]){for(let i=0,r=e.length;i<r;i++)qa(e[i],this,n,t);return n.sort(ih),n}}function ih(s,e){return s.distance-e.distance}function qa(s,e,t,n){let i=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const r=s.children;for(let o=0,a=r.length;o<a;o++)qa(r[o],e,t,!0)}}const sh=new M,Or=new M;class sv{constructor(e=new M,t=new M){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){sh.subVectors(e,this.start),Or.subVectors(this.end,this.start);const n=Or.dot(Or);let r=Or.dot(sh)/n;return t&&(r=xt(r,0,1)),r}closestPointToPoint(e,t,n){const i=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(i).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class rv extends oi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qa}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qa);const j={arena:{size:120,wallHeight:4},player:{height:1.7,radius:.5,moveSpeed:6,sprintMult:1.6,maxHp:100,hpPerLevel:10,damageFromEnemy:15,invulnAfterHit:.5,jump:{velocity:5.4,gravity:18},bodyHeight:1.8,stepHeight:.3,vaultHeight:1.2,mantleHeight:2,ladderContactRange:.65,ladderReleaseRange:1.05,ladderHeightTolerance:.3},weapon:{pistol:{label:"手枪",damage:28,fireInterval:.32,magSize:12,reloadTime:1.05,headshotMult:1.5,adsFov:58,baseSpread:.0012,maxSpread:.012,spreadPerShot:.0016,spreadRecovery:.045,spreadRecoveryDelay:.12,adsSpreadMult:.5,movingSpread:.003,sprintSpread:.012,airSpread:.012,recoilPitch:.012,recoilReturn:.9,recoilRecovery:12,muzzleSpeed:230,gravity:9.81,zeroRange:35,maxDistance:110,falloffStart:50,falloffEnd:105,minDamageMult:.65},shotgun:{label:"霰弹枪",damage:11,pellets:7,spread:.075,fireInterval:.88,magSize:6,reloadTime:1.9,adsFov:62,maxSpread:.095,spreadPerShot:.005,spreadRecovery:.12,spreadRecoveryDelay:.18,adsSpreadMult:.72,movingSpread:.012,sprintSpread:.03,airSpread:.035,falloffStart:8,falloffEnd:24,minDamageMult:.15,knockback:1.8,knockbackRange:9,tankKnockbackMult:.3,recoilPitch:.028,recoilReturn:.85,recoilRecovery:9,muzzleSpeed:240,gravity:9.81,zeroRange:15,maxDistance:45},rifle:{label:"步枪",damage:18,fireInterval:.11,magSize:30,reloadTime:1.65,auto:!0,adsFov:48,recoilPitch:.0045,recoilReturn:.68,recoilRecovery:13.5,baseSpread:.004,spreadPerShot:.0018,maxSpread:.026,spreadRecovery:.065,spreadRecoveryDelay:.14,adsSpreadMult:.38,movingSpread:.004,sprintSpread:.014,airSpread:.018,muzzleSpeed:560,gravity:9.81,zeroRange:50,maxDistance:165,falloffStart:70,falloffEnd:150,minDamageMult:.7}},view:{fov:75},gunShape:{pistol:[{size:[.07,.07,.32],pos:[0,.02,-.18],color:15263984},{size:[.05,.05,.06],pos:[0,.04,.02],color:13684956},{size:[.03,.06,.04],pos:[0,-.04,-.08],color:2236976},{size:[.055,.1,.06],pos:[0,-.12,-.04],color:3816010},{size:[.01,.015,.01],pos:[0,.065,-.34],color:16777215},{size:[.02,.012,.01],pos:[0,.06,.01],color:16777215}],shotgun:[{size:[.1,.1,.42],pos:[0,0,-.14],color:5592422},{size:[.08,.06,.3],pos:[0,-.07,-.05],color:7031338}],rifle:[{size:[.07,.09,.5],pos:[0,0,-.2],color:3752526},{size:[.045,.045,.55],pos:[0,.005,-.55],color:2896701},{size:[.05,.14,.08],pos:[0,-.11,-.15],color:2896701},{size:[.06,.08,.2],pos:[0,-.02,.12],color:4864038},{size:[.03,.03,.05],pos:[0,.07,-.45],color:3752526}]},gunModel:{pistol:{file:"assets/models/weapons/railway-pistol.glb",length:.42,sourceRot:[0,0,0],rot:[0,14.3239,0],pos:[.02,.065,.08]},shotgun:{file:"assets/models/weapons/railway-pump-shotgun.glb",length:.9,sourceRot:[0,0,0],rot:[0,14.3239,0],pos:[.02,.05,.08]},rifle:{file:"assets/models/weapons/railway-carbine.glb",length:.7,sourceRot:[0,0,0],rot:[0,14.3239,0],pos:[.02,-.015,.08]}},projectile:{radius:.25,gravity:9,speed:10,playerHitRadius:.6,ttl:4},enemy:{small:{label:"快怪",size:1.7,color:15158332,speed:2.6,hp:30,xp:1,modelPath:"assets/models/enemy_mutant.glb",hitZone:{mult:{head:1,body:.7,limb:.4}}},tank:{label:"血牛",size:1.6,color:10181046,speed:1.2,hp:100,xp:4},spitter:{label:"喷吐者",size:1,color:3066993,speed:1.4,hp:40,xp:2,behavior:"spitter",fireInterval:2.5,standRange:14,projDamage:10},splitter:{label:"分裂体",size:1.2,color:15965202,speed:1.8,hp:60,xp:3,behavior:"splitter"},minibug:{label:"小碎片",size:.4,color:16101441,speed:3.4,hp:15,xp:1},charger:{label:"冲刺者",size:1,color:15478628,speed:2.2,hp:50,xp:3,behavior:"charger",telegraphTime:.9,chargeSpeed:11,chargeTime:.5,chargeCd:3.5,standRange:8},boss:{label:"围城之王",size:3,color:1752220,speed:1.5,hp:800,xp:50,behavior:"boss"},maxAlive:40,spawnDistance:[25,40],maxSpawnDistance:65,spawnWarningTime:1.5,spawnMarker:{color:16724804,ringInner:.55,ringOuter:1.1,pillarHeight:6},maxSpawnMarkers:6},wave:{preparationTime:15,spawnInterval:3.2,finalEscortCount:18,perWaveCount:8,countGrowth:4,table:[{type:"tank",fromWave:3,weight:25},{type:"spitter",fromWave:4,weight:15},{type:"splitter",fromWave:5,weight:10},{type:"charger",fromWave:6,weight:10}]},levelup:{xpForLevel:10,xpGrowth:1.5,hpBoost:20,minFireInterval:.075,choices:[{key:"damage",name:"伤害 +5"},{key:"rof",name:"射速 +20%"},{key:"mag",name:"弹匣 +3"},{key:"speed",name:"移速 +10%"},{key:"hp",name:"最大生命 +20"},{key:"shotgun",name:"解锁：霰弹枪",unlock:!0},{key:"rifle",name:"解锁：步枪",unlock:!0}]},pickup:{radius:.35,magnetRange:6,collectRange:1.2,maxOrbs:60,ttl:20,fadeStart:17},heal:{small:{value:15,chance:.2,color:15158332,radius:.45,ttl:10,fadeStart:7},tank:{value:60,chance:1,color:16766720,radius:.6,ttl:10,fadeStart:7}},crate:{collectRange:1.8,color:2611432},boss:{ringEvery:2.5,ringCount:8,summonEvery:10},goal:{winWave:8},train:{dwellTime:20,warningTime:6,speed:8,playerDamageRatio:.8,bossDamageRatio:.3}};function ov(s){return j.wave.perWaveCount+(s-1)*j.wave.countGrowth}function av(s,e){const t=[...s],n=(i,r,o,a,l,c,h,u)=>s.push({id:i,type:"box",x:r,y:o,z:a,width:l,height:c,depth:h,color:u,solid:!0,walkable:!1,climbable:!1,category:"roof-structure"});for(const i of t.filter(r=>r.category==="building")){const r=t.find(a=>a.id===`${i.id}-roof`);if(!r)continue;const o=t.filter(a=>a.id.startsWith(`${i.id}-gable-`));if(o.length){const a=Math.max(...o.map(c=>c.y+c.height/2)),l=i.x-i.width*.22;n(`${i.id}-chimney-flashing`,l,a-.04,i.z,.85,.18,.85,e.metal),n(`${i.id}-chimney`,l,a+.53,i.z,.6,.96,.6,e.wood),n(`${i.id}-chimney-cap`,l,a+1.07,i.z,.78,.12,.78,e.metal)}else{const a=r.y+r.height/2;for(const l of[-1,1]){const c=i.x+l*i.width*.25,h=i.z+i.depth*.17;n(`${i.id}-roof-vent-${l}`,c,a+.275,h,.9,.55,.7,e.metal),n(`${i.id}-roof-vent-cap-${l}`,c,a+.59,h,1.02,.08,.82,e.roof)}}}}function lv(s,e){const t=[...s];let n=0;const i={solid:!1,decorative:!0,walkable:!1,climbable:!1,instanced:!0},r=(g,m,p,x,y,v,R,E={})=>{s.push({id:`street-detail-${n++}`,type:"box",x:g,y:m,z:p,width:x,height:y,depth:v,color:R,...i,...E})},o=(g,m,p,x,y,v)=>{s.push({id:`street-detail-${n++}`,type:"cylinder",x:g,y:m,z:p,radius:x,height:y,color:v,...i})},a=3422787,l=6650245,c=11968907,h=4934483,u=e.metal,d=(g,m,p,x,y,v,R,E,C=.1)=>{if(m==="front"||m==="back"){const P=m==="front"?-1:1;r(g.x+p,x,g.z+P*(g.depth/2+C),y,v,R,E)}else{const P=m==="left"?-1:1;r(g.x+P*(g.width/2+C),x,g.z+p,R,v,y,E)}},f=(g,m,p,x,y,v=!1)=>{const R=v?1.55:1.35,E=v?1:.8;if(v)for(const C of[-1,1])d(g,m,p+C*(R/2+.035),x,.07,E+.14,.04,u,.115),d(g,m,p,x+C*(E/2+.035),R,.07,.04,u,.115);else d(g,m,p,x,R+.16,E+.16,.035,u,.075),d(g,m,p,x,R,E,.025,y?c:l,.108);d(g,m,p,x,.045,E,.025,u,.13),d(g,m,p,x-E/2-.07,R+.23,.06,.18,u,.15)};for(const g of t.filter(m=>m.category==="building")){const m=Math.max(2,Math.floor(g.width/2.8));for(let v=0;v<m;v++){const R=(v-(m-1)/2)*2.6;R+.85<g.width/2-2.3&&f(g,"front",R,2.2,!0,!0)}for(const v of["back","left","right"]){const R=v==="back"?g.width:g.depth,E=Math.max(2,Math.min(3,Math.floor(R/3.4)));for(let C=0;C<E;C++){const P=(C-(E-1)/2)*2.7;f(g,v,P,2.15,(C+n)%3===0)}d(g,v,0,.2,R,.25,.04,u,.045)}if(g.height>=5.1){for(const v of["front","back"])for(const R of[-2.7,0,2.7])f(g,v,R,g.height-1.95,R===0);for(const v of["left","right"])f(g,v,0,g.height-1.95,!1)}const p=-g.width/2+.8;for(const v of["front","back"]){d(g,v,p,1.04,.98,2.08,.025,u,.018),d(g,v,p,1.03,.85,1.98,.02,e.wood,.036);for(const R of[.53,1.3])d(g,v,p,R,.64,R===.53?.62:.73,.01,h,.052);d(g,v,p+.29,1.02,.045,.16,.02,u,.058),d(g,v,p,1.73,.34,.045,.015,a,.056),d(g,v,p,.055,.88,.045,.025,u,.045)}const x=g.width/2-.5;d(g,"back",x,g.height/2,.025,g.height-.55,.025,u,.04),d(g,"back",x,1.22,.32,.42,.06,u,.04),d(g,"back",x,1.26,.18,.13,.012,a,.069);for(const v of[-1,1])for(const R of[-1,1]){const E=g.x+R*(g.width/2-.25),C=g.z+v*(g.depth/2+.16);o(E,(g.height-.25)/2,C,.055,g.height-.25,u);for(const P of[.55,2.6,g.height-.55])o(E,P,C,.072,.055,a)}for(const v of["front","back"])d(g,v,0,g.height+.08,g.width+.55,.12,.14,u,.32);d(g,"back",g.width/2-1.3,1.15,1.1,.75,.08,u,.12);for(let v=0;v<6;v++)d(g,"back",g.width/2-1.3,.89+v*.1,.88,.035,.025,a,.175);const y=g.width/2-1.5;for(let v=.15;v<2.6;v+=.18)d(g,"front",y,v,1.54,.025,.025,u,.145);d(g,"front",y,.72,.36,.08,.035,a,.175)}for(const g of t.filter(m=>m.category==="roof"))if(g.type==="ramp"&&g.riseAxis==="z"){const m=Math.floor(g.depth/.65);for(let p=1;p<m;p++){const x=g.z-g.depth/2+p*g.depth/m,y=g.y+g.riseSign*(x-g.z)/g.depth*g.height;r(g.x,y+.012,x,g.width-.05,.025,.035,u)}}else if(g.type==="box"&&!t.some(m=>m.id.startsWith(g.id.replace("-roof","-gable-")))){const m=g.y+g.height/2;for(let p=g.x-g.width/2+1;p<g.x+g.width/2;p+=2.2)r(p,m+.01,g.z,.035,.02,g.depth-.05,u)}for(const g of t.filter(m=>m.category==="crate")){for(const m of[-1,1]){for(let p=.26;p<g.height;p+=.3)r(g.x,p,g.z+m*1.012,1.94,.025,.025,a),r(g.x+m*1.012,p,g.z,.025,.025,1.94,a);for(const p of[-1,1])r(g.x+p*.88,g.height/2,g.z+m*1.025,.1,g.height,.035,u),r(g.x+m*1.025,g.height/2,g.z+p*.88,.035,g.height,.1,u)}r(g.x,g.height+.012,g.z,.05,.025,1.96,a)}for(const g of t.filter(m=>m.category==="cover")){for(const m of[-1,1])r(g.x+m*1.43,.8,g.z-.615,.23,.16,.03,e.yellow),r(g.x+m*1.43,.8,g.z+.615,.23,.16,.03,e.yellow);r(g.x,.18,g.z-.61,3.42,.06,.025,h)}for(const g of t.filter(m=>m.id.startsWith("vending-")&&m.solid)){for(let m=0;m<3;m++)for(let p=0;p<3;p++)r(g.x-.35+p*.2,.75+m*.32,g.z-.475,.085,.17,.025,m===1?e.cream:e.blue),r(g.x-.35+p*.2,.64+m*.32,g.z-.49,.09,.025,.02,a);r(g.x+.38,1.05,g.z-.452,.22,.8,.035,a);for(let m=0;m<4;m++)r(g.x+.38,.8+m*.15,g.z-.48,.11,.045,.025,e.cream);r(g.x+.38,1.36,g.z-.48,.13,.025,.025,u),r(g.x-.08,.23,g.z-.45,.68,.2,.035,a),r(g.x-.08,.13,g.z-.475,.73,.035,.08,u)}for(const g of t.filter(m=>m.id.startsWith("signal-pole-")))for(let m=0;m<6;m++)o(g.x,.4+m*.3,g.z,.116,.15,e.yellow);const _=t.filter(g=>g.id.startsWith("sleeper-"));for(let g=0;g<_.length;g+=4)for(const m of[-.74,.74])for(const p of[-1,1])r(_[g].x,.09,m+p*.12,.15,.035,.1,u);for(const g of t.filter(m=>m.category==="vault-fence")){for(let m=-g.width/2+.35;m<g.width/2;m+=.7)r(g.x+m,.5,g.z-.101,.022,.96,.022,a);r(g.x,.92,g.z-.105,g.width-.08,.06,.035,u)}for(const[g,m]of[[-34,-22],[-4,-31],[36,-18],[-16,34],[36,47]]){o(g,.03,m,.48,.018,u),o(g,.043,m,.39,.012,h);for(const p of[-.22,0,.22])r(g,.052,m+p,.52,.009,.025,a)}for(const[g,m,p]of[[-29.1,-15,0],[31.2,-24,0],[-12,-26.4,Math.PI/2],[22,29.4,Math.PI/2],[-38.7,43,0],[40.7,46,0]]){r(g,.03,m,.38,.018,1.2,u,{rotation:p});for(let x=0;x<7;x++){const y=-.48+x*.16;r(g+(p?y:0),.043,m+(p?0:y),p?.035:.29,.009,p?.29:.035,a)}}for(const[g,m,p,x]of[[-10,-33,3.4,.018],[-38,34,.018,4.1],[34,19,3.2,.018],[20,-29,2.8,.018]])r(g,.028,m,p,.01,x,h)}function cv(s,e,t){const n=t.metal,i=3422787,r=2638151;let o=0;const a=(h,u,d,f,_,g,m,p,x={})=>{const y={id:h,type:"box",x:u,y:d,z:f,width:_,height:g,depth:m,color:p,solid:!0,walkable:!1,climbable:!1,...x};return s.push(y),y},l=(h,u,d,f,_,g,m,p,x={})=>a(h,u,d,f,_,g,m,p,{solid:!1,decorative:!0,walkable:!1,climbable:!1,instanced:!0,...x}),c=(h,u,d,f,_,g,m,p,x={})=>a(h,u,d,f,_,g,m,p,{category:"parkour-prop",walkable:!0,climbable:!0,...x});for(const h of e){const{id:u,x:d}=h,f=u==="west",_=`夕凪町 ${f?"西站":"东站"}`,g=f?"YN01":"YN02";a(`${u}-station-sign`,d,5.6,-4.8,7.2,1.05,.12,r,{category:"station-sign",signboard:{kind:"station",title:_,roman:`YUNAGI ${f?"WEST":"EAST"}`,code:g}}),l(`${u}-station-sign-top`,d,6.105,-4.8,7.24,.04,.15,n);for(const v of[-1,1])l(`${u}-station-sign-side-${v}`,d+v*3.59,5.6,-4.8,.04,1.05,.15,n),l(`${u}-station-sign-hanger-${v}`,d+v*2.8,6.2,-4.8,.075,.155,.075,n);a(`${u}-station-canopy`,d,6.39,-4.9,26,.22,5.4,t.roof,{category:"station-canopy",surface:"roof"});for(const v of[-1,1])a(`${u}-station-canopy-column-${v}`,d+v*11,3.14,-7.2,.24,6.28,.24,n,{category:"station-support"}),l(`${u}-station-canopy-base-${v}`,d+v*11,.035,-7.2,.36,.07,.36,i),l(`${u}-station-canopy-side-${v}`,d+v*12.96,6.36,-4.9,.08,.28,5.45,n);for(const v of[-7.6,-2.2])l(`${u}-station-canopy-fascia-${o++}`,d,6.36,v,26,.28,.1,n),l(`${u}-station-canopy-trim-${o++}`,d,6.46,v-.055,25.85,.045,.025,t.cream);l(`${u}-station-canopy-beam`,d,6.12,-7.2,22.3,.3,.2,n);for(let v=-12;v<=12;v+=2)l(`${u}-station-roof-rib-${o++}`,d+v,6.525,-4.9,.055,.05,5.25,n),l(`${u}-station-roof-brace-${o++}`,d+v,6.23,-4.9,.07,.1,5.05,n);for(const v of[-8,0,8])l(`${u}-station-lamp-case-${o++}`,d+v,6.13,-3.25,1.25,.13,.3,i),l(`${u}-station-lamp-${o++}`,d+v,6.057,-3.25,1.12,.025,.22,12367259,{emissive:4865325});const m=d+9,p=-8.7;c(`${u}-bench-seat`,m,.44,p,3,.12,.64,t.wood),c(`${u}-bench-back`,m,.77,p-.29,3,.52,.1,t.wood),c(`${u}-bench-crossbar`,m,.24,p,2.4,.08,.08,n);for(const v of[-1,1]){for(const R of[-1,1])c(`${u}-bench-leg-${v}-${R}`,m+v*1.12,.19,p+R*.21,.09,.38,.09,n);c(`${u}-bench-back-frame-${v}`,m+v*1.12,.68,p-.32,.07,.67,.07,n)}for(let v=-1;v<=1;v+=.5)l(`${u}-bench-seam-${o++}`,m+v,.505,p,.018,.01,.6,i);l(`${u}-bench-back-seam`,m,.76,p-.348,2.95,.025,.015,i);const x=d+12;c(`${u}-station-bin`,x,.48,-8.3,.65,.96,.6,n),l(`${u}-station-bin-lid`,x,.972,-8.3,.67,.024,.62,i),l(`${u}-station-bin-slot`,x,.79,-7.99,.43,.14,.025,i),l(`${u}-station-bin-label`,x,.43,-7.985,.26,.28,.025,t.cream);const y=d-11;c(`${u}-station-timetable`,y,1.1,-9.2,1.35,1.6,.14,t.cream,{signboard:{kind:"timetable",title:`${f?"西站":"东站"} · 站间路线`,code:g}});for(const v of[-1,1])c(`${u}-timetable-leg-${v}`,y+v*.5,.15,-9.2,.065,.3,.065,n),l(`${u}-timetable-frame-${v}`,y+v*.665,1.1,-9.2,.045,1.6,.17,n);l(`${u}-timetable-top`,y,1.88,-9.2,1.39,.04,.2,n)}}const Pe={ground:3617597,road:4276810,concrete:9144208,roof:4014412,cream:12166810,pink:12094094,blue:7438992,wood:7757906,metal:6055540,yellow:15845241,grass:5463385};function hv(){const s=[];let e=0;const t=(h,u,d,f,_,g,m,p,x={})=>{const y={id:h,type:"box",x:u,y:d-g/2,z:f,width:_,height:g,depth:m,color:p,solid:!0,walkable:!0,climbable:!0,...x};return s.push(y),y},n=(h,u,d,f,_,g,m,p,x={})=>t(h,u,d,f,_,g,m,p,{solid:!1,walkable:!1,climbable:!1,decorative:!0,instanced:!0,...x}),i=(h,u,d,f,_,g,m,p,x=0)=>{const y={id:h,type:"ramp",x:u,y:x+g/2,z:d,width:f,height:g,depth:_,riseAxis:m,riseSign:p,color:Pe.concrete,solid:!0,walkable:!0,climbable:!1};return s.push(y),y},r=(h,u,d,f,_,g,m)=>{if(t(h,u,g,d,f,g,_,m,{walkable:!1,climbable:!1,category:"building"}),t(`${h}-roof`,u,g+.25,d,f+.7,.25,_+.7,Pe.roof,{walkable:!1,climbable:!1,category:"roof"}),h.startsWith("residence")||h==="west-store"||h==="corner-shop")for(const x of[-1,1]){const y=i(`${h}-gable-${x}`,u,d+x*(_+.7)/4,f+.7,(_+.7)/2,.9,"z",-x,g+.25);Object.assign(y,{color:Pe.roof,walkable:!1,climbable:!1,category:"roof"})}n(`${h}-fascia`,u,g-.7,d-_/2-.04,f*.82,.65,.07,Pe.wood);const p=Math.max(2,Math.floor(f/2.8));for(let x=0;x<p;x++){const y=u+(x-(p-1)/2)*2.6;n(`${h}-window-${x}`,y,2.7,d-_/2-.055,1.55,1,.08,16105867,{emissive:11889209})}n(`${h}-shutter`,u+f/2-1.5,2.6,d-_/2-.08,1.6,2.6,.1,7172219)};t("street-ground",0,0,0,120,.6,120,Pe.ground,{climbable:!1,category:"ground"});for(const[h,u,d,f]of[[0,0,120,12],[0,-31,114,9],[0,34,114,9],[-34,0,10,114],[36,0,10,114]])n(`asphalt-${e++}`,h,.015,u,d,.015,f,Pe.road);for(const h of[-31,34])for(let u=-54;u<=54;u+=8)n(`road-dash-${e++}`,u,.025,h,3.2,.01,.12,12892323);for(const h of[-34,36])for(let u=-52;u<=52;u+=8)Math.abs(u)<8||n(`avenue-dash-${e++}`,h,.025,u,.12,.01,3.2,12892323);for(const h of[-1,1])t(`boundary-x-${h}`,h*60,3.8,0,.5,3.8,120,Pe.metal,{walkable:!1,climbable:!1}),t(`boundary-z-${h}`,0,3.8,h*60,120,3.8,.5,Pe.metal,{walkable:!1,climbable:!1});r("residence-a",-45,-44,13,10,6.5,Pe.cream),r("residence-b",-23,-43,12,11,5.5,Pe.pink),r("residence-c",-48,-22,10,12,5.2,Pe.blue),r("corner-shop",-23,-20,12,8,4.4,Pe.cream),r("station-office",44,-39,16,11,5.4,Pe.cream),r("station-shop",24,-48,13,8,4.8,Pe.pink),r("west-store",-48,44,10,10,5.1,Pe.blue),r("yard-office",48,45,10,9,5.4,Pe.cream),r("yard-shed",50,23,10,12,4.8,Pe.wood);const o=[-42,42].map(h=>{const u=h<0?"west":"east",d=[];for(const m of[-1,1]){t(`${u}-platform-${m}`,h,1,m*3.95,30,1,4,Pe.concrete,{category:"platform"}),i(`${u}-platform-ramp-${m}`,h<0?h+2:h,m*10,6,8,1,"z",-m),n(`${u}-platform-edge-${m}`,h,1.018,m*2.2,30,.018,.22,Pe.yellow);for(const p of[-6,6])d.push({x:h+p,y:1,z:m*2.15})}t(`${u}-roof-dock`,h-6,3.5,8,5,.22,12,Pe.metal,{category:"roof-dock"});const f=h<0?1:-1,_=h-6,g=_+f*16;t(`${u}-roof-walkway`,(_+g)/2,3.5,10,21,.22,8,Pe.metal,{category:"roof-dock"}),h<0?i(`${u}-roof-ramp`,g+f*10.5,10,16,5,3.5,"x",-f):i(`${u}-roof-ramp`,g,21,5,14,3.5,"z",-1);for(const m of[-1,1])t(`${u}-dock-column-${m}`,h-6+m*2.25,3.28,11.5,.3,3.28,.3,Pe.metal,{walkable:!1,climbable:!1});return{id:u,x:h,z:0,platformY:1,roofY:3.5,boardingPoints:d,roofBoardingPoints:[{x:h-6,y:3.5,z:2.15}],platforms:[-1,1].map(m=>({x:h,z:m*3.95,width:30,depth:4}))}});t("footbridge-deck",10,6,0,6,.2,28,Pe.concrete,{category:"bridge"}),i("footbridge-north-ramp",10,-24,6,20,6,"z",1),i("footbridge-south-ramp",10,24,6,20,6,"z",-1);for(const h of[-1,1]){t(`footbridge-rail-${h}`,10+h*3.05,6.95,0,.1,.1,28,Pe.metal,{walkable:!1,climbable:!1}),t(`footbridge-lower-rail-${h}`,10+h*3.05,6.35,0,.08,.08,28,Pe.metal,{walkable:!1,climbable:!1});for(let u=-13;u<=13;u+=2.6)s.push({id:`bridge-post-${h}-${u.toFixed(1)}`,type:"cylinder",x:10+h*3.05,y:6.45,z:u,radius:.055,height:.9,color:Pe.metal,solid:!0,walkable:!1,climbable:!1});for(const u of[-1,1])for(let d=0;d<10;d++){const f=u*(15+d*2),_=6*(34-Math.abs(f))/20+.95;t(`ramp-rail-${h}-${u}-${d}`,10+h*3.05,_,f,.12,.1,2.06,Pe.metal,{walkable:!1,climbable:!1}),t(`ramp-lower-rail-${h}-${u}-${d}`,10+h*3.05,_-.6,f,.1,.08,2.06,Pe.metal,{walkable:!1,climbable:!1}),s.push({id:`ramp-post-${h}-${u}-${d}`,type:"cylinder",x:10+h*3.05,y:_-.5,z:f,radius:.055,height:.9,color:Pe.metal,solid:!0,walkable:!1,climbable:!1})}}t("plaza-terrace",-32,2.4,28,18,2.4,14,Pe.concrete,{category:"terrace"}),i("plaza-ramp-west",-47,28,12,6,2.4,"x",1),i("plaza-ramp-east",-17,28,12,6,2.4,"x",-1),t("maintenance-deck",32,3.6,33,16,.3,16,Pe.metal,{category:"terrace"}),i("maintenance-ramp-north",32,18,6,14,3.6,"z",1),i("maintenance-ramp-south",32,48,6,14,3.6,"z",-1);for(const h of[25,39])for(const u of[26,40])t(`maintenance-leg-${h}-${u}`,h,3.3,u,.4,3.3,.4,Pe.metal,{walkable:!1,climbable:!1});const a=[[-13,-10,1],[-18,-33,1.1],[22,-22,1.65],[44,-19,1],[-42,13,1.6],[-20,39,1],[22,45,1.1],[43,33,1.6],[-6,44,1.1],[45,-51,1.5]];for(const[h,u,d]of a)t(`parkour-crate-${e++}`,h,d,u,2,d,2,Pe.wood,{category:"crate"});for(const[h,u]of[[-7,-22],[23,-15],[-15,17],[44,15],[-47,-8],[49,9]])t(`street-cover-${e++}`,h,1.2,u,3.5,1.2,1.2,Pe.concrete,{category:"cover"});for(const[h,u,d]of[[-34,-31,"x"],[-34,34,"x"],[36,-31,"x"],[36,34,"x"]])for(const f of[-1,1])t(`curb-${e++}`,h,.12,u+f*5.1,d==="x"?14:.3,.12,d==="x"?.3:14,Pe.concrete,{category:"curb"});for(const[h,u]of[[-31,-7.6],[53,-7.6],[-18,-26],[45,14]])t(`vending-${e++}`,h,1.85,u,1.15,1.85,.85,10243664,{category:"parkour-prop"}),n(`vending-face-${e++}`,h-.15,1.62,u-.44,.65,1.15,.04,12440020,{emissive:7576482});for(const[h,u,d]of[[-35,-18,4],[-18,-36,8],[45,-27,9],[-28,44,9],[18,42,7]])t(`vault-fence-${e++}`,h,1.05,u,d,1.05,.18,7763840,{category:"vault-fence"});for(let h=-57;h<=57;h+=.85)n(`sleeper-${e++}`,h,.055,0,.24,.055,3,Pe.wood);for(const h of[-.74,.74])n(`track-${h}`,0,.075,h,120,.075,.09,10460057);for(const h of[-35,0,35]){n(`crossing-${h}`,h,.09,0,5.2,.025,4.4,Pe.concrete);for(const u of[-5.5,5.5])for(let d=0;d<6;d++)n(`crosswalk-${e++}`,h-2+d*.8,.03,u,.45,.03,2.6,14076079);for(const u of[-1,1])s.push({id:`signal-pole-${h}-${u}`,type:"cylinder",x:h+3.3,y:1.4,z:u*7.5,radius:.11,height:2.8,color:Pe.metal,solid:!0,walkable:!1,climbable:!1}),t(`signal-head-${h}-${u}`,h+3.3,3,u*7.5,.7,.65,.28,2435124,{walkable:!1,climbable:!1}),n(`signal-lens-${h}-${u}`,h+3.3,2.84,u*7.5-u*.15,.42,.3,.04,9118758,{emissive:16724002,signal:!0,instanced:!1})}for(const h of[-52,-26,0,26,52])for(const u of[-11,11])s.push({id:`power-pole-${h}-${u}`,type:"cylinder",x:h,y:3.5,z:u,radius:.17,height:7,color:Pe.wood,solid:!0,walkable:!1,climbable:!1}),t(`power-arm-${h}-${u}`,h,6.65,u,.14,.16,2.8,Pe.metal,{walkable:!1,climbable:!1});const l=[{id:"residential",label:"住宅街",center:{x:-32,y:0,z:-30}},{id:"station",label:"车站广场",center:{x:34,y:0,z:-27}},{id:"plaza",label:"雨后广场",center:{x:-30,y:0,z:32}},{id:"maintenance",label:"维修街区",center:{x:33,y:0,z:32}}],c=[[-53,-53],[-10,-51],[-54,-12],[-6,-16],[19,-35],[55,-54],[54,-15],[2,-50],[-54,52],[-12,53],[-53,12],[-10,14],[17,54],[55,54],[54,13],[20,13],[-32,28,2.4],[32,33,3.6],[10,-7,6],[10,7,6]].map(([h,u,d=0],f)=>({id:`spawn-${f}`,x:h,y:d,z:u,region:l[h<0?u<0?0:2:u<0?1:3].id}));return av(s,Pe),lv(s,Pe),cv(s,o,Pe),{bounds:60,shapes:s,regions:l,spawnPoints:c,stations:o,ladders:[],playerStart:{x:-16,y:0,z:-30},playerYaw:Math.PI,colors:Pe}}function uv(s){if(s.type==="cylinder")return new wi(s.radius,s.radius,s.height,12);if(s.type!=="ramp")return new Gt(s.width,s.height,s.depth);const e=s.width/2,t=s.depth/2,n=s.height/2,i=(a,l)=>{const c=s.riseAxis==="x"?a/e:l/t;return s.riseSign*c*n},r=[-e,-n,-t,e,-n,-t,e,-n,t,-e,-n,t,-e,i(-e,-t),-t,e,i(e,-t),-t,e,i(e,t),t,-e,i(-e,t),t],o=new Et;return o.setAttribute("position",new lt(r,3)),o.setIndex([0,1,2,0,2,3,4,6,5,4,7,6,0,5,1,0,4,5,1,6,2,1,5,6,2,7,3,2,6,7,3,4,0,3,7,4]),o.computeVertexNormals(),o}function dv(s,e){const t=new Oe(uv(s),e);return t.position.set(s.x,s.y,s.z),s.rotation&&(t.rotation.y=s.rotation),t.userData.shapeId=s.id,t.userData.collider=s.solid!==!1,t.castShadow=s.solid!==!1&&s.id!=="street-ground",t.receiveShadow=!0,t}function rh(s,e,t){if(s.type==="cylinder")return Math.hypot(e-s.x,t-s.z)<=s.radius?s.y+s.height/2:null;if(Math.abs(e-s.x)>s.width/2+1e-4||Math.abs(t-s.z)>s.depth/2+1e-4)return null;if(s.type!=="ramp")return s.y+s.height/2;const n=s.riseAxis==="x"?(e-s.x)/s.width:(t-s.z)/s.depth;return s.y+s.riseSign*n*s.height}class oo extends Oe{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.camera=new Lt;const n=this,i=t.color!==void 0?new Se(t.color):new Se(8355711),r=t.textureWidth||512,o=t.textureHeight||512,a=t.clipBias||0,l=t.shader||oo.ReflectorShader,c=t.multisample!==void 0?t.multisample:4,h=new Kn,u=new M,d=new M,f=new M,_=new Ae,g=new M(0,0,-1),m=new $e,p=new M,x=new M,y=new $e,v=new Ae,R=this.camera,E=new ii(r,o,{samples:c,type:_s}),C=new xn({name:l.name!==void 0?l.name:"unspecified",uniforms:qh.clone(l.uniforms),fragmentShader:l.fragmentShader,vertexShader:l.vertexShader});C.uniforms.tDiffuse.value=E.texture,C.uniforms.color.value=i,C.uniforms.textureMatrix.value=v,this.material=C,this.onBeforeRender=function(P,T,b){if(d.setFromMatrixPosition(n.matrixWorld),f.setFromMatrixPosition(b.matrixWorld),_.extractRotation(n.matrixWorld),u.set(0,0,1),u.applyMatrix4(_),p.subVectors(d,f),p.dot(u)>0)return;p.reflect(u).negate(),p.add(d),_.extractRotation(b.matrixWorld),g.set(0,0,-1),g.applyMatrix4(_),g.add(f),x.subVectors(d,g),x.reflect(u).negate(),x.add(d),R.position.copy(p),R.up.set(0,1,0),R.up.applyMatrix4(_),R.up.reflect(u),R.lookAt(x),R.far=b.far,R.updateMatrixWorld(),R.projectionMatrix.copy(b.projectionMatrix),v.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),v.multiply(R.projectionMatrix),v.multiply(R.matrixWorldInverse),v.multiply(n.matrixWorld),h.setFromNormalAndCoplanarPoint(u,d),h.applyMatrix4(R.matrixWorldInverse),m.set(h.normal.x,h.normal.y,h.normal.z,h.constant);const I=R.projectionMatrix;y.x=(Math.sign(m.x)+I.elements[8])/I.elements[0],y.y=(Math.sign(m.y)+I.elements[9])/I.elements[5],y.z=-1,y.w=(1+I.elements[10])/I.elements[14],m.multiplyScalar(2/m.dot(y)),I.elements[2]=m.x,I.elements[6]=m.y,I.elements[10]=m.z+1-a,I.elements[14]=m.w,n.visible=!1;const k=P.getRenderTarget(),O=P.xr.enabled,H=P.shadowMap.autoUpdate;P.xr.enabled=!1,P.shadowMap.autoUpdate=!1,P.setRenderTarget(E),P.state.buffers.depth.setMask(!0),P.autoClear===!1&&P.clear(),P.render(T,R),P.xr.enabled=O,P.shadowMap.autoUpdate=H,P.setRenderTarget(k);const K=b.viewport;K!==void 0&&P.state.viewport(K),n.visible=!0},this.getRenderTarget=function(){return E},this.dispose=function(){E.dispose(),n.material.dispose()}}}oo.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const fv={name:"ShallowPuddle",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
    uniform mat4 textureMatrix;
    varying vec4 reflectedUv;
    varying vec2 surfaceUv;
    varying vec3 worldPosition;
    #include <common>
    #include <logdepthbuf_pars_vertex>
    void main() {
      reflectedUv = textureMatrix * vec4(position, 1.0);
      surfaceUv = uv;
      worldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      #include <logdepthbuf_vertex>
    }`,fragmentShader:`
    uniform vec3 color;
    uniform sampler2D tDiffuse;
    varying vec4 reflectedUv;
    varying vec2 surfaceUv;
    varying vec3 worldPosition;
    #include <logdepthbuf_pars_fragment>
    void main() {
      #include <logdepthbuf_fragment>
      vec2 offset = vec2(0.0024);
      vec2 sampleUv = reflectedUv.xy / reflectedUv.w;
      vec3 reflection = texture2D(tDiffuse, sampleUv).rgb * 0.4;
      reflection += texture2D(tDiffuse, sampleUv + vec2(offset.x, 0.0)).rgb * 0.15;
      reflection += texture2D(tDiffuse, sampleUv - vec2(offset.x, 0.0)).rgb * 0.15;
      reflection += texture2D(tDiffuse, sampleUv + vec2(0.0, offset.y)).rgb * 0.15;
      reflection += texture2D(tDiffuse, sampleUv - vec2(0.0, offset.y)).rgb * 0.15;
      float luminance = dot(reflection, vec3(0.2126, 0.7152, 0.0722));
      reflection = mix(vec3(luminance), reflection, 0.75);
      vec3 direction = normalize(cameraPosition - worldPosition);
      float grazing = pow(1.0 - abs(direction.y), 3.0);
      vec2 centered = (surfaceUv - 0.5) * 2.0;
      float angle = atan(centered.y, centered.x);
      float contour = 0.91 + sin(angle * 3.0 + 1.2) * 0.035 + cos(angle * 7.0) * 0.02;
      float edge = 1.0 - smoothstep(contour - 0.065, contour, length(centered));
      gl_FragColor = vec4(color + reflection * mix(0.12, 0.32, grazing), edge * 0.78);
      #include <tonemapping_fragment>
      #include <colorspace_fragment>
    }`};function pv(){const s=new oo(new no(1,64),{color:2106153,textureWidth:512,textureHeight:512,clipBias:.004,shader:fv});return s.material.transparent=!0,s.material.depthWrite=!1,s}function mv(){const e=new Uint8Array(16384);for(let n=0;n<64;n++)for(let i=0;i<64;i++){const r=(i/63-.5)*2,o=(n/63-.5)*2,a=Math.atan2(o,r),l=.91+Math.sin(a*3+1.2)*.035+Math.cos(a*7)*.02,c=Yt.smoothstep(l-Math.hypot(r,o),0,.065),h=(n*64+i)*4;e[h]=e[h+1]=e[h+2]=Math.round(c*255),e[h+3]=255}const t=new eo(e,64,64);return t.magFilter=Bt,t.minFilter=Bt,t.needsUpdate=!0,new rn({color:3159355,roughness:.38,metalness:.06,transparent:!0,opacity:.34,alphaMap:t,depthWrite:!1})}function gv(s){s.background=new Se(9138570),s.fog=new pl(9205643,55,180);const e=new Oe(new si(240,32,16),new xn({side:Ut,depthWrite:!1,vertexShader:"varying vec3 p; void main(){p=position;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`varying vec3 p;
      void main(){
        vec3 direction=normalize(p);
        float height=clamp(direction.y*1.5+.08,0.,1.);
        vec3 color=mix(vec3(.54,.38,.53),vec3(.11,.17,.34),pow(height,.65));
        float sunset=pow(max(0.,dot(direction,normalize(vec3(-.62,.1,.78)))),8.);
        color=mix(color,vec3(1.,.49,.32),sunset*.8);
        gl_FragColor=vec4(color,1.);
      }`}));s.add(e);const t=new Oe(new si(7,20,12),new yt({color:16757100,fog:!1}));t.position.set(-120,18,150),s.add(t),s.add(new z_(12826072,5326673,2));const n=new gu(16758665,2.2);n.position.set(-70,24,90),n.castShadow=!0,n.shadow.camera.left=n.shadow.camera.bottom=-75,n.shadow.camera.right=n.shadow.camera.top=75,n.shadow.camera.near=1,n.shadow.camera.far=180,n.shadow.mapSize.set(2048,2048),n.shadow.bias=-4e-4,n.shadow.normalBias=.03,s.add(n);for(let o=0;o<18;o++){const a=-100+o*12,l=10+o*17%15,c=new Oe(new Gt(8,l,9),new yt({color:6444655}));c.position.set(a,l/2,84+o%3*8),s.add(c)}const i=pv();i.rotation.x=-Math.PI/2,i.position.set(-9,.035,-13),i.scale.set(7.5,4,1),s.add(i);const r=mv();for(const[o,a,l,c]of[[-39,11,5.5,2.4],[28,-24,4,2.2],[44,17,5,3],[-16,44,6,2]]){const h=new Oe(new no(1,36),r);h.rotation.x=-Math.PI/2,h.position.set(o,.025,a),h.scale.set(l,c,1),s.add(h)}return{water:i,sun:n}}const wl={asphalt:{size:4,roughness:.94,metalness:0,tone:226,grain:13},concrete:{size:3,roughness:.92,metalness:0,tone:235,grain:7},plaster:{size:3,roughness:.96,metalness:0,tone:242,grain:5},roof:{size:2.5,roughness:.84,metalness:.16,tone:230,grain:6},metal:{size:1.5,roughness:.68,metalness:.44,tone:241,grain:4}};function _v(s){if(s.surface in wl)return s.surface;const e=s.id||"";return e==="street-ground"||e.startsWith("asphalt-")?"asphalt":s.category==="roof"?"roof":s.category==="building"?"plaster":s.category==="roof-dock"||e.startsWith("maintenance-deck")||e.startsWith("boundary-")?"metal":s.type==="ramp"||["platform","bridge","terrace","curb","cover"].includes(s.category)?"concrete":"plain"}function vv(s){let e=s;return()=>(e=Math.imul(e,1664525)+1013904223>>>0,e/4294967296)}function xv(s){if(typeof document>"u")return null;const e=document.createElement("canvas");e.width=e.height=256;const t=e.getContext("2d");if(!t)return null;const n=wl[s],i=vv(s.charCodeAt(0)*9173),r=t.createImageData(256,256);for(let a=0;a<r.data.length;a+=4){const l=Math.round(n.tone+(i()-.5)*n.grain*2);r.data[a]=r.data[a+1]=r.data[a+2]=l,r.data[a+3]=255}if(t.putImageData(r,0,0),t.lineWidth=1,t.strokeStyle="rgba(66, 63, 61, 0.08)",s==="asphalt"){t.beginPath(),t.moveTo(24,80);for(const[a,l]of[[65,83],[90,91],[125,90],[143,103]])t.lineTo(a,l);t.stroke()}else if(s==="concrete")t.strokeRect(.5,.5,255,255),t.strokeStyle="rgba(255, 255, 255, 0.2)",t.strokeRect(2.5,2.5,251,251);else if(s==="plaster")for(let a=0;a<30;a++)t.fillStyle=`rgba(91, 81, 75, ${.008+i()*.015})`,t.fillRect(i()*256,i()*256,8+i()*24,20+i()*80);else if(s==="roof"){t.strokeStyle="rgba(35, 37, 42, 0.14)";for(let a=0;a<8;a++){const l=a*32+.5;t.beginPath(),t.moveTo(0,l),t.lineTo(256,l),t.stroke();for(let c=a%2?-32:0;c<256;c+=64)t.beginPath(),t.moveTo(c+.5,l),t.lineTo(c+.5,l+32),t.stroke()}}else if(s==="metal"){t.strokeStyle="rgba(69, 72, 78, 0.035)";for(let a=0;a<256;a+=4)t.beginPath(),t.moveTo(0,a+.5),t.lineTo(256,a+.5),t.stroke()}const o=new tr(e);return o.name=`railway-${s}`,o.colorSpace=vt,o.wrapS=o.wrapT=Mi,o.anisotropy=4,o}function yv(s,e,t){s.onBeforeCompile=n=>{n.uniforms.railwaySurfaceMap={value:e},n.uniforms.railwayTileSize={value:t},n.vertexShader=n.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vRailwayWorldPosition;
varying vec3 vRailwayWorldNormal;`),n.vertexShader=n.vertexShader.replace("#include <project_vertex>",`#include <project_vertex>
vec4 railwayPosition = vec4(transformed, 1.0);
#ifdef USE_INSTANCING
  railwayPosition = instanceMatrix * railwayPosition;
#endif
vRailwayWorldPosition = (modelMatrix * railwayPosition).xyz;
vRailwayWorldNormal = inverseTransformDirection(transformedNormal, viewMatrix);`),n.fragmentShader=n.fragmentShader.replace("#include <common>",`#include <common>
uniform sampler2D railwaySurfaceMap;
uniform float railwayTileSize;
varying vec3 vRailwayWorldPosition;
varying vec3 vRailwayWorldNormal;`),n.fragmentShader=n.fragmentShader.replace("#include <map_fragment>",`
vec3 railwayBlend = pow(abs(normalize(vRailwayWorldNormal)), vec3(8.0));
railwayBlend /= max(dot(railwayBlend, vec3(1.0)), 0.0001);
vec3 railwayPosition = vRailwayWorldPosition / railwayTileSize;
vec3 railwayTexel = texture2D(railwaySurfaceMap, railwayPosition.zy).rgb * railwayBlend.x
  + texture2D(railwaySurfaceMap, railwayPosition.xz).rgb * railwayBlend.y
  + texture2D(railwaySurfaceMap, railwayPosition.xy).rgb * railwayBlend.z;
diffuseColor.rgb *= railwayTexel;`)},s.customProgramCacheKey=()=>"railway-world-surface-v1"}function Mv(){const s=new Map,e=new Map,t=new Set;return{materialFor:i=>{const r=_v(i),o=`${r}-${i.color}-${i.emissive||0}-${!!i.decorative}`;if(!e.has(o)){const c=wl[r],h=new rn({color:i.color,roughness:c?.roughness??(i.decorative?.74:.8),metalness:c?.metalness??.12,emissive:i.emissive||0,emissiveIntensity:i.emissive?.45:0,flatShading:!0});if(h.name=`railway-${r}`,c){s.has(r)||s.set(r,xv(r));const u=s.get(r);u&&yv(h,u,c.size)}e.set(o,h)}const a=e.get(o);if(!i.signal)return a;const l=a.clone();return l.onBeforeCompile=a.onBeforeCompile,l.customProgramCacheKey=a.customProgramCacheKey,t.add(l),l},dispose(){for(const i of[...e.values(),...t])i.dispose();for(const i of s.values())i?.dispose();e.clear(),s.clear(),t.clear()}}}function Sv(s){return s.instanced===!0&&s.solid===!1&&s.decorative===!0&&!s.signal&&["box","cylinder"].includes(s.type)}function bv(s,e,t){const n=new Map;for(const l of e){if(!Sv(l))continue;const c=t(l);n.has(c)||n.set(c,new Map);const h=n.get(c);h.has(l.type)||h.set(l.type,[]),h.get(l.type).push(l)}const i=new Rt;i.name="railway-instanced-details",i.userData.decorative=!0,i.userData.collider=!1;const r=new Map,o=[],a=new nt;for(const[l,c]of n)for(const[h,u]of c){const d=h==="cylinder"?new wi(1,1,1,12):new Gt(1,1,1),f=new ru(d,l,u.length);f.name=`railway-details-${h}-${o.length}`,f.castShadow=!1,f.receiveShadow=!0,f.userData.decorative=!0,f.userData.collider=!1,f.userData.shapeIds=u.map(_=>_.id),u.forEach((_,g)=>{a.position.set(_.x,_.y,_.z),a.rotation.set(0,typeof _.rotation=="number"?_.rotation:0,0),a.scale.set(h==="cylinder"?_.radius:_.width,_.height,h==="cylinder"?_.radius:_.depth),a.updateMatrix(),f.setMatrixAt(g,a.matrix),r.set(_.id,{mesh:f,index:g})}),f.instanceMatrix.needsUpdate=!0,f.computeBoundingBox(),f.computeBoundingSphere(),o.push(f),i.add(f)}return s.add(i),{group:i,byShapeId:r,meshes:o,shapeCount:r.size,dispose(){i.removeFromParent();for(const l of o)l.dispose(),l.geometry.dispose()}}}function wv(s,e){const t="#e4d8bd";s.fillStyle="#26323b",s.fillRect(0,0,1024,160),s.strokeStyle="#82918f",s.lineWidth=2,s.strokeRect(7,7,1010,146),s.fillStyle="#495d63",s.fillRect(24,24,132,103),s.fillStyle=t,s.textAlign="center",s.font='bold 30px "Segoe UI", sans-serif',s.fillText(e.code,90,87),s.textAlign="left",s.font='bold 48px "Microsoft YaHei", sans-serif',s.fillText(e.title,192,81),s.font='20px "Segoe UI", sans-serif',s.fillStyle="#b3c0bb",s.fillText(e.roman,195,116),s.textAlign="center",s.fillStyle=t,s.font='bold 30px "Segoe UI", sans-serif',s.fillText("1 / 2",920,72),s.font='19px "Microsoft YaHei", sans-serif',s.fillText("站 台",920,108),s.fillStyle="#c6a66c",s.fillRect(24,139,976,6)}function Tv(s,e){s.fillStyle="#cec7af",s.fillRect(0,0,512,640),s.fillStyle="#283c44",s.fillRect(14,14,484,102),s.fillStyle="#eee3c9",s.textAlign="center",s.font='bold 38px "Microsoft YaHei", sans-serif',s.fillText("路 线 案 内",256,78),s.fillStyle="#344650",s.font='bold 31px "Microsoft YaHei", sans-serif',s.fillText(e.title,256,174),s.strokeStyle="#7c8882",s.lineWidth=9,s.beginPath(),s.moveTo(120,235),s.lineTo(120,390),s.stroke();for(const[t,n,i]of[[245,"夕凪町 西站","YUNAGI WEST"],[385,"夕凪町 东站","YUNAGI EAST"]])s.beginPath(),s.arc(120,t,14,0,Math.PI*2),s.fillStyle="#b18d52",s.fill(),s.textAlign="left",s.fillStyle="#344650",s.font='bold 26px "Microsoft YaHei", sans-serif',s.fillText(n,160,t+6),s.font='17px "Segoe UI", sans-serif',s.fillText(i,162,t+35);s.textAlign="center",s.font='26px "Microsoft YaHei", sans-serif',s.fillText("停站开门 · 两站往返",256,505),s.font='22px "Microsoft YaHei", sans-serif',s.fillText("注意信号 · 请勿滞留轨道",256,555)}function Ev(s){if(typeof document>"u"||!s.signboard)return null;const e=s.signboard.kind==="station",t=document.createElement("canvas");t.width=e?1024:512,t.height=e?160:640;const n=t.getContext("2d");if(!n)return null;e?wv(n,s.signboard):Tv(n,s.signboard);const i=new tr(t);i.colorSpace=vt,i.anisotropy=4;const r=new yt({map:i,color:13092807}),o=new bi(s.width-.045,s.height-.045),a=new Rt;a.position.set(s.x,s.y,s.z),a.rotation.y=s.rotation||0,a.name=`${s.id}-lettering`,a.userData.decorative=!0,a.userData.collider=!1;for(const l of[-1,1]){const c=new Oe(o,r);c.position.z=l*(s.depth/2+.003),c.rotation.y=l<0?Math.PI:0,a.add(c)}return a}function Av(s,e="#f4d9b6"){if(typeof document>"u")return null;const t=document.createElement("canvas");t.width=512,t.height=128;const n=t.getContext("2d");n.fillStyle="#28303b",n.fillRect(0,0,512,128),n.strokeStyle="#d2c2a3",n.lineWidth=4,n.strokeRect(6,6,500,116),n.fillStyle=e,n.font='bold 45px "Segoe UI", sans-serif',n.textAlign="center",n.textBaseline="middle",n.fillText(s,256,64);const i=new tr(t);i.colorSpace=vt;const r=new Rt,o=new bi(4.2,1.05),a=new yt({map:i});for(const l of[1,-1]){const c=new Oe(o,a);c.rotation.y=l<0?Math.PI:0,c.position.z=l*.005,r.add(c)}return r.userData.decorative=!0,r.userData.collider=!1,r}function Rv(s){const e=new to({color:3157563});for(const t of[-11,11])for(let n=0;n<4;n++)for(const i of[-1,0,1]){const r=-52+n*26,o=new hu(new M(r,6.6,t+i),new M(r+13,5.8,t+i),new M(r+26,6.6,t+i)),a=new er(new Et().setFromPoints(o.getPoints(24)),e);a.userData.decorative=!0,a.userData.collider=!1,s.add(a)}}function Cv(s,e){const t=Mv(),n=new Map,i=[],r=bv(s,e.shapes,t.materialFor);for(const u of e.shapes){if(r.byShapeId.has(u.id))continue;const d=dv(u,t.materialFor(u));if(n.set(u.id,d),s.add(d),u.signal&&i.push(d),u.signboard){const f=Ev(u);f&&s.add(f)}}const o=gv(s);Rv(s);for(const u of e.stations){const d=new ro(16765088,18,17,2);d.position.set(u.x,5.5,-4.9),s.add(d)}for(const[u,d,f,_]of[["路地 / 住宅街",-23,3.6,-24.08],["駅前 商店",24,4,-52.1],["保守 / MAINTENANCE",49,4.4,16.9],["歩道橋",10,7.6,-12]]){const g=Av(u);g&&(g.position.set(d,f,_),s.add(g))}let a=0,l=!1;const c=u=>{l=!!u};return{meshes:n,detailInstances:r,surfaces:t,warningLights:i,atmosphere:o,update:u=>{a+=u;const d=l?Math.floor(a*4)%2?3:.25:.15;for(const f of i)f.material.emissiveIntensity=d},setCrossingWarning:c,updateTrainSignals(u){c(["warning","departing","traveling"].includes(u.phase))},halfSize:e.bounds,wallHeight:3.8,updatePetals(){}}}const tn=1e-4,Dt=(s={})=>new M(s.x||0,s.y||0,s.z||0),Tl=s=>typeof s.rotation=="number"?s.rotation:s.rotation?.[1]||0;function Js(s,e){return Dt(s).sub(new M(e.x||0,e.y||0,e.z||0)).applyAxisAngle(new M(0,1,0),-Tl(e))}function ao(s,e){return s.clone().applyAxisAngle(new M(0,1,0),Tl(e))}function Yo(s){const e=new M(s.width/2||s.radius||0,s.height/2,s.depth/2||s.radius||0),t=new Ht;for(const n of[-1,1])for(const i of[-1,1])for(const r of[-1,1])t.expandByPoint(new M(e.x*n,e.y*i,e.z*r).applyAxisAngle(new M(0,1,0),Tl(s)).add(new M(s.x||0,s.y||0,s.z||0)));return t}function ns(s){return s.height/(s.riseAxis==="x"?s.width:s.depth)*(s.riseSign||1)}function Pv(s,e,t=0){const n=Js(e,s),i=s.width/2||s.radius,r=s.depth/2||s.radius;if(s.type==="cylinder"){if(Math.hypot(n.x,n.z)>s.radius+t+tn)return null}else if(Math.hypot(Math.max(0,Math.abs(n.x)-i),Math.max(0,Math.abs(n.z)-r))>t+tn)return null;if(s.type==="ramp"){const o=new M(s.riseAxis==="x"?-ns(s):0,1,s.riseAxis==="z"?-ns(s):0).normalize(),a=s.riseAxis==="x"?i:r,l=Math.max(-a,Math.min(a,n[s.riseAxis]));return{height:s.y+l*ns(s),normal:ao(o,s)}}return{height:s.y+s.height/2,normal:new M(0,1,0)}}function Iv(s,e,t,n){const i=Js(e,s),r=Math.min(t,n/2),o=-s.height/2,a=s.height/2,l=i.y+r,c=i.y+n-r,h=l>a?l-a:c<o?c-o:0;let u,d,f,_;if(s.type==="cylinder"){const x=Math.hypot(i.x,i.z),y=Math.max(0,x-s.radius);u=x?i.x/x*y:0,d=x?i.z/x*y:0,f=s.radius+t-x,_=new M(x?i.x/x:1,0,x?i.z/x:0)}else{const x=s.width/2,y=s.depth/2;u=i.x-Math.max(-x,Math.min(x,i.x)),d=i.z-Math.max(-y,Math.min(y,i.z));const v=x+t-Math.abs(i.x),R=y+t-Math.abs(i.z);f=Math.min(v,R),_=v<R?new M(i.x<0?-1:1,0,0):new M(0,0,i.z<0?-1:1)}const g=Math.hypot(u,h,d);let m,p;if(g>tn){if((u*u+d*d)/(t*t)+h*h/(r*r)>=1-1e-5)return null;m=new M(u,h,d).divideScalar(g),p=1/Math.sqrt((m.x**2+m.z**2)/t**2+m.y**2/r**2)-g}else{const x=a-i.y,y=i.y+n-o;p=f,m=_,x<p&&(p=x,m.set(0,1,0)),y<p&&(p=y,m.set(0,-1,0))}return p>tn?{normal:ao(m,s),depth:p,shape:s,bodyId:s.bodyId||null}:null}function Lv(s,e,t,n){if(s.type!=="ramp")return Iv(s,e,t,n);const i=Js(e,s),r=-s.height/2;let o=s.height/2,a,l,c,h;if(s.type==="cylinder"){const _=Math.hypot(i.x,i.z);c=s.radius+t-_,h=_>tn?new M(i.x/_,0,i.z/_):new M(1,0,0)}else{const _=s.width/2,g=s.depth/2,m=Math.max(-_,Math.min(_,i.x)),p=Math.max(-g,Math.min(g,i.z));a=i.x-m,l=i.z-p;const x=Math.hypot(a,l);if(x>tn)c=t-x,h=new M(a/x,0,l/x);else{const y=_+t-Math.abs(i.x),v=g+t-Math.abs(i.z);c=Math.min(y,v),h=y<v?new M(i.x<0?-1:1,0,0):new M(0,0,i.z<0?-1:1)}s.type==="ramp"&&(o=(s.riseAxis==="x"?m:p)*ns(s))}const u=o-i.y,d=i.y+n-r;if(c<=tn||u<=tn||d<=tn)return null;let f=c;return u<f&&(h.set(0,1,0),f=u),d<f&&(h.set(0,-1,0),f=d),{normal:ao(h,s),depth:f,shape:s,bodyId:s.bodyId||null}}function Dv(s){const e=s.width/2,t=s.height/2,n=s.depth/2,i=[[new M(1,0,0),e],[new M(-1,0,0),e],[new M(0,-1,0),t],[new M(0,0,1),n],[new M(0,0,-1),n]];if(s.type==="ramp"){const r=new M(s.riseAxis==="x"?-ns(s):0,1,s.riseAxis==="z"?-ns(s):0);i.push([r.normalize(),0])}else i.push([new M(0,1,0),t]);return i}function $a(s,e,t,n=0){const i=Js(e,s),r=Js(t,s).sub(i);let o=0,a=1,l=r.clone().negate().normalize();if(s.type==="cylinder"){const h=r.x**2+r.z**2,u=2*(i.x*r.x+i.z*r.z),d=i.x**2+i.z**2-(s.radius+n)**2;if(h<tn){if(d>0)return null}else{const f=u*u-4*h*d;if(f<0)return null;const _=(-u-Math.sqrt(f))/(2*h),g=(-u+Math.sqrt(f))/(2*h);_>o&&(o=_,l.set(i.x+r.x*_,0,i.z+r.z*_).normalize()),a=Math.min(a,g)}for(const f of[-1,1]){const _=new M(0,f,0),g=i.y*f-s.height/2-n,m=r.y*f;if(Math.abs(m)<tn){if(g>0)return null;continue}const p=-g/m;m<0&&p>o&&(o=p,l.copy(_)),m>0&&(a=Math.min(a,p))}}else for(const[h,u]of Dv(s)){const d=i.dot(h)-u-n,f=r.dot(h);if(Math.abs(f)<tn){if(d>0)return null;continue}const _=-d/f;f<0&&_>o&&(o=_,l.copy(h)),f>0&&(a=Math.min(a,_))}if(o>a||o<0||o>1||a<0)return null;const c=Dt(e).lerp(Dt(t),o);return{point:c,distance:c.distanceTo(Dt(e)),normal:ao(l,s),shape:s,bodyId:s.bodyId||null,supportId:s.bodyId||s.id}}class Uv{constructor(e=[],{bounds:t=60}={}){this.bounds=t,this.shapes=e.filter(n=>n.solid!==!1),this.dynamicBodies=new Map,this.revision=0,this.cellSize=8,this.cells=new Map,this.shapeBoxes=new WeakMap,this.largeShapes=[];for(const n of this.shapes){const i=Yo(n);this.shapeBoxes.set(n,i);const r=this.cellKeys(i.min.x,i.min.z,i.max.x,i.max.z);if(r.length>100)this.largeShapes.push(n);else for(const o of r)this.cells.has(o)||this.cells.set(o,[]),this.cells.get(o).push(n)}}cellKeys(e,t,n,i){const r=[];for(let o=Math.floor(e/this.cellSize);o<=Math.floor(n/this.cellSize);o++)for(let a=Math.floor(t/this.cellSize);a<=Math.floor(i/this.cellSize);a++)r.push(`${o},${a}`);return r}setDynamicBody(e,t){const n=Dt(t.position),i=Dt(t.previousPosition||t.position),r={...t,id:e,position:n,previousPosition:i,velocity:Dt(t.velocity),revision:++this.revision};return r.worldShapes=t.shapes.filter(o=>o.solid!==!1).map(o=>({...o,x:(o.x||0)+n.x,y:(o.y||0)+n.y,z:(o.z||0)+n.z,bodyId:e})),r.bounds=r.worldShapes.reduce((o,a)=>{const l=Yo(a);return this.shapeBoxes.set(a,l),o?o.union(l):l.clone()},null),this.dynamicBodies.set(e,r),r}getBody(e){return this.dynamicBodies.get(e)||null}removeDynamicBody(e){this.dynamicBodies.delete(e)}candidates(e,t,n,i,r){const o=new Set(this.largeShapes);for(const a of this.cellKeys(e,t,n,i))for(const l of this.cells.get(a)||[])o.add(l);for(const[a,l]of this.dynamicBodies)if(a!==r&&!(l.bounds&&(l.bounds.max.x<e||l.bounds.min.x>n||l.bounds.max.z<t||l.bounds.min.z>i)))for(const c of l.worldShapes)o.add(c);return[...o].filter(a=>{const l=this.shapeBoxes.get(a);return!l||l.max.x>=e&&l.min.x<=n&&l.max.z>=t&&l.min.z<=i})}getShapeBounds(e){return Yo(e)}raycast(e,t,n=0,i){let r=null;const o=this.candidates(Math.min(e.x,t.x)-n,Math.min(e.z,t.z)-n,Math.max(e.x,t.x)+n,Math.max(e.z,t.z)+n,i);for(const a of o){const l=$a(a,e,t,n);l&&(!r||l.distance<r.distance)&&(r=l)}return r}contacts(e,t,n,i){const r=[];for(const o of this.candidates(e.x-t,e.z-t,e.x+t,e.z+t,i)){const a=Lv(o,e,t,n);a&&r.push(a)}return r}capsuleClear(e,t=.35,n=1.8,i){return Math.abs(e.x)+t<=this.bounds&&Math.abs(e.z)+t<=this.bounds&&this.contacts(e,t,n,i).every(r=>r.depth<.002)}querySupport(e,{maxRise:t=.3,maxDrop:n=.5,radius:i=.35,height:r=1.8,ignoreBody:o,maxSlope:a=Math.PI/4,requireClear:l=!0}={}){let c=null;const h=this.candidates(e.x-i,e.z-i,e.x+i,e.z+i,o);for(const u of h){if(u.walkable===!1)continue;const d=Pv(u,e,i);if(!d||d.normal.y<Math.cos(a)||d.height>e.y+t+.002||d.height<e.y-n-.002)continue;const f=Dt(e).setY(d.height);if(l){let _=!1;for(let g=0;g<5;g++){const m=this.contacts(f.clone().add(new M(0,.002,0)),i,r,o);if(!m.length)break;if(m.some(x=>x.normal.y<.1)){_=!0;break}const p=Math.max(...m.map(x=>x.depth/x.normal.y))+.001;if(f.y+=p,f.y>e.y+t+.002){_=!0;break}}if(_||!this.capsuleClear(f.clone().add(new M(0,.002,0)),i,r,o))continue}(!c||Math.abs(f.y-e.y)<Math.abs(c.height-e.y)-1e-4||Math.abs(Math.abs(f.y-e.y)-Math.abs(c.height-e.y))<1e-4&&f.y>c.height)&&(c={point:f,height:f.y,normal:d.normal,shape:u,bodyId:u.bodyId||null,supportId:u.bodyId||u.id,supportShapeId:u.id})}return c}moveCharacter(e,t,{radius:n=.35,height:i=1.8,stepHeight:r=.3,snapToGround:o=!1,maxSlope:a=Math.PI/4,ignoreBody:l}={}){const c=Dt(e),h=Dt(t),u=Math.max(1,Math.ceil(h.length()/Math.min(n*.45,.12))),d=h.clone().divideScalar(u),f=[];let _=!1,g=!1,m=null;for(let p=0;p<u;p++){const x=c.clone();if(c.add(d),o&&d.y<=.001){const y=this.querySupport(c.clone().setY(x.y),{maxRise:r,maxDrop:r+.05,radius:n,height:i,maxSlope:a,ignoreBody:l});y&&(c.y=y.height)}for(let y=0;y<5;y++){const v=this.contacts(c,n,i,l);if(!v.length)break;v.sort((E,C)=>C.depth-E.depth);const R=v[0];c.addScaledVector(R.normal,R.depth+2e-4),f.push(R.normal),R.normal.y>.5&&(g=!0),R.normal.y<.5&&(_=!0)}c.x=Math.max(-this.bounds+n,Math.min(this.bounds-n,c.x)),c.z=Math.max(-this.bounds+n,Math.min(this.bounds-n,c.z))}return m=this.querySupport(c,{maxRise:.025,maxDrop:.065,radius:n,height:i,maxSlope:a,ignoreBody:l}),m&&h.y<=.001&&(c.y=m.height,g=!0),{position:c,grounded:g,blocked:_,normal:m?.normal||f.at(-1)||null,supportId:m?.supportId||null,supportShapeId:m?.supportShapeId||null,bodyId:m?.bodyId||null,normals:f}}}function Nv(s,e,t,n,i,r,o){if(Math.abs(t.y-n.y)>.001||!e.some(l=>l.type==="box"&&!l.rotation&&Math.abs(l.y+l.height/2-t.y)<.001&&[t,n].every(c=>Math.abs(c.x-l.x)<=l.width/2&&Math.abs(c.z-l.z)<=l.depth/2)))return!1;for(const l of s.candidates(Math.min(t.x,n.x)-i,Math.min(t.z,n.z)-i,Math.max(t.x,n.x)+i,Math.max(t.z,n.z)+i,o)){const c=s.shapeBoxes.get(l)||s.getShapeBounds(l);if(c.max.y<=t.y+1e-4||c.min.y>=t.y+r-1e-4)continue;let h=0,u=1;for(const d of["x","z"]){const f=n[d]-t[d],_=c.min[d]-i,g=c.max[d]+i;if(Math.abs(f)<1e-5){if(t[d]<_||t[d]>g){h=1/0;break}}else{const m=(_-t[d])/f,p=(g-t[d])/f;h=Math.max(h,Math.min(m,p)),u=Math.min(u,Math.max(m,p))}}if(h<=u)return!1}return!0}const Fv=[[1,0],[-1,0],[0,1],[0,-1],[1,1],[1,-1],[-1,1],[-1,-1]],pi=s=>new M(s.x,s.y||0,s.z);class Ov{constructor(){this.items=[]}push(e){const t=this.items;t.push(e);let n=t.length-1;for(;n>0;){const i=n-1>>1;if(t[i].score<=e.score)break;t[n]=t[i],n=i}t[n]=e}pop(){const e=this.items[0],t=this.items.pop();if(!this.items.length)return e;let n=0;for(;n*2+1<this.items.length;){let i=n*2+1;if(i+1<this.items.length&&this.items[i+1].score<this.items[i].score&&i++,this.items[i].score>=t.score)break;this.items[n]=this.items[i],n=i}return this.items[n]=t,e}}class Bv{constructor(e,t,n=2){this.world=e,this.layout=t,this.spacing=n,this.bounds=t.bounds,this.grids=new Map,this.pathCache=new Map,this.surfaces=t.shapes.filter(i=>i.solid!==!1&&i.walkable)}clear(e,t,n=.5,i=1.8,r="train"){const o=pi(e),a=pi(t);if(Nv(this.world,this.surfaces,o,a,n,i,r))return!0;const l=Math.max(1,Math.ceil(o.distanceTo(a)/.12));let c=o.clone();for(let h=0;h<=l;h++){const u=o.clone().lerp(a,h/l),d=this.world.moveCharacter(c,u.clone().sub(c).setY(0),{radius:n,height:i,stepHeight:.3,snapToGround:!0,ignoreBody:r});if(!(d.grounded||this.world.querySupport(d.position,{radius:n,height:i,maxDrop:.3,maxRise:.025,ignoreBody:r}))||Math.hypot(d.position.x-u.x,d.position.z-u.z)>.025||Math.abs(d.position.y-u.y)>.32)return!1;c=d.position}return!0}grid(e=.5,t=1.8){const n=`${e.toFixed(2)}:${t.toFixed(2)}`;if(this.grids.has(n))return this.grids.get(n);const i={key:n,nodes:[],cells:new Map,radius:e,height:t},r=Math.floor(this.bounds*2/this.spacing);for(let o=1;o<r;o++)this.addGridRow(i,o);return this.grids.set(n,i),i}addGridRow(e,t){const{nodes:n,cells:i,radius:r,height:o}=e,a=Math.floor(this.bounds*2/this.spacing);for(let l=1;l<a;l++){const c=l*this.spacing-this.bounds,h=t*this.spacing-this.bounds,u=this.surfaces.map(f=>({shape:f,y:rh(f,c,h)})).filter(f=>f.y!==null).sort((f,_)=>f.y-_.y),d=[];for(const f of u){const _=new M(c,f.y,h),g=this.world.querySupport(_,{radius:r,height:o,maxRise:.3,maxDrop:.025,ignoreBody:"train"});if(!g||(_.copy(g.point),d.some(p=>Math.abs(n[p].position.y-_.y)<.025)))continue;const m=n.length;n.push({position:_,ix:l,iz:t,surfaceId:f.shape.id,neighbors:null}),d.push(m)}d.length&&i.set(`${l},${t}`,d)}}nearest(e,t,n=!1){const i=pi(e);let r=-1,o=1/0;const a=Math.round((i.x+this.bounds)/this.spacing),l=Math.round((i.z+this.bounds)/this.spacing);for(let c=0;c<=8;c++){for(let h=-c;h<=c;h++)for(let u=-c;u<=c;u++)if(!(c&&Math.abs(u)!==c&&Math.abs(h)!==c))for(const d of t.cells.get(`${a+u},${l+h}`)||[]){const f=t.nodes[d].position,_=Math.abs(f.y-i.y),g=(f.x-i.x)**2+(f.z-i.z)**2+_*_*4;g<o&&(!n||this.clear(i,f,t.radius,t.height))&&(o=g,r=d)}if(r>=0&&c*c*this.spacing*this.spacing>o+this.spacing*this.spacing)break}return r}neighbors(e,t){const n=t.nodes[e];if(n.neighbors)return n.neighbors;n.neighbors=[];for(const[i,r]of Fv)for(const o of t.cells.get(`${n.ix+i},${n.iz+r}`)||[]){const a=t.nodes[o].position;Math.abs(a.y-n.position.y)>this.spacing*.75||this.clear(n.position,a,t.radius,t.height)&&n.neighbors.push(o)}return n.neighbors}findPath(e,t,n=.5,i=1.8){if(this.clear(e,t,n,i))return[pi(t)];const r=this.grid(n,i),o=this.nearest(e,r,!0),a=this.nearest(t,r);if(o<0||a<0)return[];const l=`${r.key}:${o}:${a}`,c=this.pathCache.get(l);if(c&&(!c.length||this.clear(e,c[0],n,i)))return c.length?this.resolvePath(c,e,t,r):[];const h=new Float64Array(r.nodes.length).fill(1/0),u=new Int32Array(r.nodes.length).fill(-1),d=new Uint8Array(r.nodes.length),f=new Ov,_=this.layout.shapes.some(p=>p.climbable&&["crate","cover","vault-fence","parkour-prop"].includes(p.category)&&Math.abs((rh(p,t.x,t.z)??-1/0)-t.y)<.05);let g=-1,m=1/0;for(h[o]=0,f.push({index:o,score:0});f.items.length;){const p=f.pop().index;if(d[p])continue;if(p===a)return this.finishPath(r,o,a,u,e,t,l);d[p]=1;const x=r.nodes[p].position,y=x.distanceTo(t);_&&Math.abs(x.y-t.y)<=2&&y<=n+2.5&&y<m&&(g=p,m=y);for(const v of this.neighbors(p,r)){if(d[v])continue;const R=h[p]+r.nodes[p].position.distanceTo(r.nodes[v].position);R>=h[v]||(h[v]=R,u[v]=p,f.push({index:v,score:R+r.nodes[v].position.distanceTo(r.nodes[a].position)}))}}return g>=0?this.finishPath(r,o,g,u,e,t,l):(this.pathCache.set(l,[]),[])}finishPath(e,t,n,i,r,o,a){const l=[];for(let u=n;u!==t&&u>=0;u=i[u])l.unshift(e.nodes[u].position.clone());l.unshift(e.nodes[t].position.clone());const c=e.nodes[t].position.clone(),h=[c,...this.simplify(l.slice(1),c,e.radius,e.height)];return this.pathCache.size>=512&&this.pathCache.delete(this.pathCache.keys().next().value),this.pathCache.set(a,h),this.resolvePath(h,r,o,e)}resolvePath(e,t,n,i){const r=[...e];return this.clear(r.at(-1),n,i.radius,i.height)&&r.push(pi(n)),this.simplify(r,t,i.radius,i.height).map(o=>o.clone())}prewarm(e=[[.42,1.7],[1.136,1.6],[2.13,3.9]]){for(const[t,n]of e)this.grid(t,n)}async prepare(e,t=()=>{},{budgetMs:n=8}={}){const i=Math.floor(this.bounds*2/this.spacing)-1,r=[],o=new Map(e.map(([f,_])=>[`${f.toFixed(2)}:${_.toFixed(2)}`,[f,_]])),a=i*o.size;let l=0,c=performance.now()+n;const h=async()=>{await new Promise(f=>setTimeout(f,0)),c=performance.now()+n};for(const[f,[_,g]]of o){let m=this.grids.get(f);if(m)l+=i;else{m={key:f,nodes:[],cells:new Map,radius:_,height:g};for(let p=1;p<=i;p++)this.addGridRow(m,p),l++,performance.now()>=c&&(t({phase:"grid",ratio:l/a*.15}),await h());this.grids.set(f,m)}r.push(m)}const u=r.reduce((f,_)=>f+_.nodes.length,0);let d=0;for(const f of r)for(let _=0;_<f.nodes.length;_++)this.neighbors(_,f),d++,performance.now()>=c&&(t({phase:"links",ratio:.15+d/u*.85,completed:d,total:u}),await h());t({phase:"ready",ratio:1,completed:d,total:u})}simplify(e,t,n,i){const r=[];let o=pi(t),a=0;for(;a<e.length;){let l=a;for(;l+1<e.length&&this.clear(o,e[l+1],n,i);)l++;r.push(e[l]),o=e[l],a=l+1}return r}nearestReachableSpawn(e,{minDistance:t=25,maxDistance:n=40,radius:i=.5,height:r=1.8}={}){return this.layout.spawnPoints.filter(o=>{const a=pi(o),l=a.distanceTo(e);return l>=t&&l<=n&&this.world.capsuleClear(a.clone().add(new M(0,.003,0)),i,r,"train")&&this.findPath(a,e,i,r).length>0})}}const pt=(s,e,t,n,i,r,o,a,l={})=>({id:s,type:"box",x:e,y:t,z:n,width:i,height:r,depth:o,color:a,solid:!0,walkable:!0,climbable:!1,bodyId:"train",...l}),zv={stops:[-42,42],dwellTime:20,warningTime:6,speed:8,halfLength:12,halfWidth:1.8,floorY:1,roofY:3.5,playerDamageRatio:.8,bossDamageRatio:.3};function kv(){const s=[],e=[],t=[],n=[];for(const[a,l]of[-6,6].entries()){const c=`train-car-${a}`;s.push(pt(`${c}-floor`,l,.9,0,11.8,.2,3.6,3359307)),s.push(pt(`${c}-skirt`,l,.55,0,11.7,.5,3.3,4609117,{walkable:!1}));for(const x of[-1,1]){const y=x*1.75;for(const v of[-3.6,3.6])s.push(pt(`${c}-sill-${x}-${v}`,l+v,1.45,y,4.6,.9,.1,10925240)),e.push(pt(`${c}-stripe-${x}-${v}`,l+v,1.43,y+x*.065,4.6,.22,.025,13335368,{solid:!1})),s.push(pt(`${c}-seat-${x}-${v}`,l+v,1.2,x*1.43,3.1,.4,.45,7490882));s.push(pt(`${c}-header-${x}`,l,3.25,y,11.8,.2,.1,10925240));for(const v of[-5.85,-3.5,-1.35,1.35,3.5,5.85])s.push(pt(`${c}-frame-${x}-${v}`,l+v,2.57,y,.1,1.18,.12,10925240));t.push(pt(`${c}-door-${x}`,l,2.1,x*1.76,2.58,2.2,.12,7439755,{door:!0,walkable:!1})),e.push(pt(`${c}-door-rail-${x}`,l,3.36,x*1.82,2.9,.08,.08,13335368,{solid:!1}))}const h=a===0?l-5.9:l+5.9;s.push(pt(`${c}-cab-end`,h,2.15,0,.16,2.3,3.5,10925240)),e.push(pt(`${c}-cab-window`,h+(a===0?-.09:.09),2.45,0,.025,1.05,2.6,2505024,{solid:!1}));for(const x of[-1,1]){e.push(pt(`${c}-lamp-${x}`,h+(a===0?-.12:.12),1.45,x*1.2,.04,.18,.3,16768938,{solid:!1,emissive:!0}));for(const y of[-3.8,3.8])e.push({id:`${c}-wheel-${x}-${y}`,type:"cylinder",x:l+y,y:.37,z:x*1.43,radius:.34,height:.25,rotation:[Math.PI/2,0,0],color:2108210,solid:!1})}const u=a===0?-.1:.1;for(const x of[-1,1])s.push(pt(`${c}-gangway-frame-${x}`,u,2.2,x*1.55,.14,2.4,.5,10925240));const d=a===0?-10:10,f=l-5.9,_=l+5.9,g=d-.65,m=d+.65;for(const[x,y,v]of[["left",f,g],["right",m,_]])s.push(pt(`${c}-roof-${x}`,(y+v)/2,3.425,0,v-y,.15,3.6,10925240));for(const x of[-1,1])s.push(pt(`${c}-roof-hatch-${x}`,d,3.425,x*1.225,1.3,.15,1.15,10925240));const p=a===0?1:-1;n.push({id:`${c}-ladder`,x:d,direction:p,bottomY:1,topY:3.5});for(const x of[-1,1])e.push(pt(`${c}-ladder-rail-${x}`,d,2.2,x*.45,.055,2.4,.055,13335368,{solid:!1}));for(let x=0;x<9;x++)e.push(pt(`${c}-rung-${x}`,d,1.15+x*.27,0,.06,.04,.95,13335368,{solid:!1}));s.push(pt(`${c}-roof-equipment`,l,3.68,-1.3,1.4,.35,.55,3359307,{climbable:!0}))}s.push(pt("train-gangway-floor",0,.9,0,.5,.2,2.84,3359307)),s.push(pt("train-gangway-roof",0,3.425,0,.5,.15,2.84,10925240));for(const a of[-1,1])s.push(pt(`train-gangway-side-${a}`,0,2.2,a*1.36,.5,2.4,.12,3359307));return{shapes:s,decorations:e,doors:t,ladders:n,floorY:1,roofY:3.5}}function Hv(s,e){const t=new Rt;t.name="rideable-train";const n=new Map,i=new Map;for(const r of[-6,6]){const o=new ro(16766376,7,12,2);o.position.set(r,3.05,0),t.add(o)}for(const r of[...e.shapes,...e.doors,...e.decorations]){const o=`${r.color}-${!!r.emissive}`;n.has(o)||n.set(o,new rn({color:r.color,roughness:r.emissive?.3:.6,metalness:.25,emissive:r.emissive?r.color:0,emissiveIntensity:.8}));const a=r.type==="cylinder"?new wi(r.radius,r.radius,r.height,12):new Gt(r.width,r.height,r.depth),l=new Oe(a,n.get(o));l.name=r.id,l.position.set(r.x,r.y,r.z),r.rotation&&l.rotation.set(...r.rotation),l.castShadow=!0,l.receiveShadow=!0,l.userData.shapeId=r.id,l.userData.solid=r.solid,t.add(l),i.set(r.id,l)}return s?.add(t),{group:t,update(r,o,a,l){t.position.copy(r);for(const c of e.doors)i.get(c.id).visible=!o}}}class Vv{constructor(){this.context=null,this.enabled=!1,this.lastPulse=-1}setActive(e){this.enabled=e,e||(this.rumble?.stop(),this.rumble=null)}ensure(){return!this.enabled||typeof window>"u"?null:(this.context||=new(window.AudioContext||window.webkitAudioContext),this.context.state==="suspended"&&this.context.resume().catch(()=>{}),this.context)}update(e,t,n){if(!this.enabled)return;const i=this.ensure();if(!i)return;const r=Math.floor(t*2);if(e==="warning"&&r!==this.lastPulse){this.lastPulse=r;const o=i.createOscillator(),a=i.createGain();o.type="sine",o.frequency.value=r%2?850:650,a.gain.setValueAtTime(.025,i.currentTime),a.gain.exponentialRampToValueAtTime(1e-4,i.currentTime+.18),o.connect(a).connect(i.destination),o.start(),o.stop(i.currentTime+.2)}if(n>.1&&!this.rumble){const o=i.createOscillator(),a=i.createGain();o.type="triangle",o.frequency.value=48,a.gain.value=.008,o.connect(a).connect(i.destination),o.start(),this.rumble=o}else n<.1&&this.rumble&&(this.rumble.stop(),this.rumble=null)}}function vu(s,e,t){const n=s.footPosition||s.position;if(!n)return!1;if(s.supportId==="train"||s.bodyId==="train")return!0;const i=n.x-e.x;return Math.abs(i)>t.halfLength+.1||Math.abs(n.z)>t.halfWidth+.1?!1:s.rideBodyId==="train"&&n.y>=t.floorY-.12&&n.y<=t.roofY+(s.height||1.7)||n.y>=t.roofY-.12?!0:n.y>=t.floorY-.12&&n.y<=t.floorY+.5&&Math.abs(n.z)<t.halfWidth-Math.min(s.radius||.4,.7)*.4}function jo(s,e,t,n){if(Math.abs(e)<1e-9)return s>=t&&s<=n?[0,1]:null;const i=(t-s)/e,r=(n-s)/e;return[Math.min(i,r),Math.max(i,r)]}function Gv(s,e,t,n){if(s.dead||vu(s,e,n))return null;const i=s.footPosition||s.position;if(!i)return null;const r=s.radius||.4,o=s.height||1.7,a=new M(i.x-e.x,i.y,i.z),l=new M(e.x-t.x,0,0),c=[jo(a.x,l.x,-n.halfLength-r,n.halfLength+r),jo(a.y,0,.3-o,n.roofY-.12),jo(a.z,0,-n.halfWidth-r,n.halfWidth+r)];if(c.some(d=>!d))return null;const h=Math.max(0,...c.map(d=>d[0])),u=Math.min(1,...c.map(d=>d[1]));return h<=u?{time:h,point:i.clone()}:null}function Wv(s,e,t){const n=s.footPosition||s.position,i=s.radius||.4,r=s.height||1.7,o=n.z>=0?1:-1;for(const a of[o,-o])for(const l of[.65,3,6])for(const c of[0,-3,3,-6,6]){const h=new M(n.x+c,n.y,a*(t.halfWidth+i+l)),u=e?.querySupport?.(h,{maxRise:1.5,maxDrop:10,radius:i,height:r,ignoreBody:"train"});if(!(e?.querySupport&&!u)&&(u&&(h.y=u.height??u.point?.y??h.y),!e?.capsuleClear||e.capsuleClear(h,i,r,"train")))return h}return null}class Xv{constructor(e,t,n={}){this.world=t,this.callbacks=n,this.config={...zv,...n.config},this.layout=kv(),this.visuals=Hv(e,this.layout),this.audio=new Vv,this.position=new M,this.previousPosition=new M,this.velocity=new M,this.reset()}get doorsOpen(){return this.phase==="dwell"||this.phase==="warning"&&this.timer>1}get moving(){return this.phase==="travel"}get warning(){return["warning","travel","emergency"].includes(this.phase)}get nextStopX(){return this.config.stops[this.destination]}reset(){this.position.set(this.config.stops[0],0,0),this.previousPosition.copy(this.position),this.velocity.set(0,0,0),this.phase="dwell",this.timer=this.config.dwellTime,this.destination=1,this.tripId=0,this.clock=0,this.blocked=!1,this.hitActors=new Set,this.audio.setActive(!1),this.publish()}setActive(e){this.audio.setActive(e)}publish(){const e=this.doorsOpen?this.layout.shapes:[...this.layout.shapes,...this.layout.doors];this.world?.setDynamicBody?.("train",{shapes:e,position:this.position,previousPosition:this.previousPosition,velocity:this.velocity}),this.visuals.update(this.position,this.doorsOpen,this.phase,this.clock)}doorObstructed(e){return e.some(t=>{if(t.dead)return!1;const n=t.footPosition||t.position;return!n||n.y>=3.25||n.y+(t.height||1.7)<=1?!1:this.layout.doors.some(i=>Math.abs(n.x-this.position.x-i.x)<i.width/2+(t.radius||.4)&&Math.abs(n.z-i.z)<(t.radius||.4)+.12)})}beginWarning(){this.phase="warning",this.timer=this.config.warningTime,this.callbacks.onWarning?.(this.getHudData())}move(e,t){const n=this.nextStopX-this.position.x,i=Math.sign(n),r=Math.min(e,Math.abs(n)/this.config.speed),o=this.position.clone(),a=o.clone().add(new M(i*this.config.speed*r,0,0));let l=1;for(const c of t){const h=Gv(c,o,a,this.config);if(!h)continue;const u=Wv(c,this.world,this.config);u||(l=Math.min(l,Math.max(0,h.time-.002)));const d=c.id??c;if(this.hitActors.has(d))continue;this.hitActors.add(d);const f=c.isPlayer?this.config.playerDamageRatio:c.isBoss?this.config.bossDamageRatio:1,_={actor:c,damage:c.isPlayer||c.isBoss?(c.maxHp||100)*f:1/0,damageRatio:f,kill:!c.isPlayer&&!c.isBoss,position:u,tripId:this.tripId,kind:"train"};c.onTrainHit?c.onTrainHit(_):this.callbacks.onHit?.(_)}return this.position.lerpVectors(o,a,l),l<1?(this.phase="emergency",this.velocity.set(0,0,0),e):(this.velocity.set(i*this.config.speed,0,0),Math.abs(this.position.x-this.nextStopX)<.001&&(this.position.x=this.nextStopX,this.destination=1-this.destination,this.phase="dwell",this.timer=this.config.dwellTime,this.velocity.set(0,0,0)),r)}update(e,t=[]){if(!(e>0))return;this.previousPosition.copy(this.position),this.clock+=e,this.blocked=!1;let n=e,i=0;for(;n>1e-7&&i++<100;)if(this.phase==="travel"||this.phase==="emergency")this.phase="travel",n-=this.move(n,t);else{if(this.phase==="warning"&&this.timer<=1&&this.doorObstructed(t)){this.timer=1.001,this.blocked=!0,this.velocity.set(0,0,0);break}const r=this.phase==="warning"&&this.timer>1?this.timer-1:this.timer,o=Math.min(n,Math.max(0,r));if(this.timer-=o,n-=o,this.phase==="warning"&&Math.abs(this.timer-1)<1e-7&&this.doorObstructed(t))continue;if(this.timer<=1e-7&&(this.phase==="dwell"?this.beginWarning():(this.phase="travel",this.tripId++,this.hitActors.clear())),o<=1e-9&&this.timer>1e-7)break}this.publish(),this.audio.update(this.phase,this.clock,Math.abs(this.velocity.x))}containsRider(e,t=.4,n=1.7){return vu({footPosition:e,radius:t,height:n},this.position,this.config)}getLadders(){return this.layout.ladders.map(e=>{const t=new M(this.position.x+e.x,e.bottomY,0),n=new M(this.position.x+e.x+e.direction*1.3,e.topY,0),i=new M(this.position.x+e.x,3.62,0);return{id:e.id,bottom:t,top:n,bodyId:"train",duration:1.35,waypoints:[i.clone(),n.clone()],downWaypoints:[i.clone(),t.clone()]}})}getBoardingPortals(e=.4){if(!this.doorsOpen||this.phase==="travel")return[];const t=Math.min(1.05,Math.max(.05,this.config.halfWidth-e-.15)),n=this.layout.doors.map(i=>({id:i.id,bodyId:"train",kind:"interior",outside:new M(this.position.x+i.x,1,Math.sign(i.z)*2.3),inside:new M(this.position.x+i.x,1,Math.sign(i.z)*t)}));return n.push({id:"train-roof-dock",bodyId:"train",kind:"roof",outside:new M(this.position.x-6,3.5,2.15),inside:new M(this.position.x-6,3.5,t)}),n}getBoardingRoute(e,t,n=.4){if(!this.doorsOpen||this.phase==="travel")return[];const i=t.y>=this.config.roofY-.2?"roof":"interior",r=this.getBoardingPortals(n).filter(c=>c.kind===i);if(r.sort((c,h)=>c.outside.distanceToSquared(e)-h.outside.distanceToSquared(e)),!r.length)return[];const o=r[0],a=Math.max(.05,this.config.halfWidth-n-.15),l=new M(Yt.clamp(t.x,this.position.x-11.3+n,this.position.x+11.3-n),i==="roof"?this.config.roofY:this.config.floorY,Yt.clamp(t.z,-a,a));return[o.outside.clone(),o.inside.clone(),l]}getInterceptionTarget(e=new M){return new M(this.nextStopX-6,1,e.z<0?-3.2:3.2)}getBossInterceptionTarget(){return this.nextStopX>0?new M(40,0,-18):new M(-48,0,18)}getHudData(){const e=this.position.x<0?"西站":"东站",t=this.nextStopX<0?"西站":"东站",n={dwell:`${e}停靠 ${Math.ceil(this.timer)}秒`,warning:this.blocked?"车门受阻 · 等待清空":`列车即将起步 ${Math.ceil(this.timer)}秒`,travel:`列车驶向${t} · 注意道口`,emergency:"列车紧急停车 · 清空轨道"};return{trainPhase:this.phase,trainStatus:n[this.phase],trainWarning:this.warning,trainDoorsOpen:this.doorsOpen,trainTrip:this.tripId,trainNextStation:t}}}const qi=new Vt(0,0,0,"YXZ"),$i=new M,qv={type:"change"},$v={type:"lock"},Yv={type:"unlock"},oh=Math.PI/2;class jv extends rv{constructor(e,t=null){super(e,t),this.isLocked=!1,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.pointerSpeed=1,this._onMouseMove=Kv.bind(this),this._onPointerlockChange=Zv.bind(this),this._onPointerlockError=Jv.bind(this),this.domElement!==null&&this.connect()}connect(){this.domElement.ownerDocument.addEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.addEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.addEventListener("pointerlockerror",this._onPointerlockError)}disconnect(){this.domElement.ownerDocument.removeEventListener("mousemove",this._onMouseMove),this.domElement.ownerDocument.removeEventListener("pointerlockchange",this._onPointerlockChange),this.domElement.ownerDocument.removeEventListener("pointerlockerror",this._onPointerlockError)}dispose(){this.disconnect()}getObject(){return console.warn("THREE.PointerLockControls: getObject() has been deprecated. Use controls.object instead."),this.object}getDirection(e){return e.set(0,0,-1).applyQuaternion(this.object.quaternion)}moveForward(e){if(this.enabled===!1)return;const t=this.object;$i.setFromMatrixColumn(t.matrix,0),$i.crossVectors(t.up,$i),t.position.addScaledVector($i,e)}moveRight(e){if(this.enabled===!1)return;const t=this.object;$i.setFromMatrixColumn(t.matrix,0),t.position.addScaledVector($i,e)}lock(){this.domElement.requestPointerLock()}unlock(){this.domElement.ownerDocument.exitPointerLock()}}function Kv(s){if(this.enabled===!1||this.isLocked===!1)return;const e=s.movementX||s.mozMovementX||s.webkitMovementX||0,t=s.movementY||s.mozMovementY||s.webkitMovementY||0,n=this.object;qi.setFromQuaternion(n.quaternion),qi.y-=e*.002*this.pointerSpeed,qi.x-=t*.002*this.pointerSpeed,qi.x=Math.max(oh-this.maxPolarAngle,Math.min(oh-this.minPolarAngle,qi.x)),n.quaternion.setFromEuler(qi),this.dispatchEvent(qv)}function Zv(){this.domElement.ownerDocument.pointerLockElement===this.domElement?(this.dispatchEvent($v),this.isLocked=!0):(this.dispatchEvent(Yv),this.isLocked=!1)}function Jv(){console.error("THREE.PointerLockControls: Unable to use Pointer Lock API")}class xu{constructor(e,t={}){this.world=e,Object.assign(this,{radius:.35,height:1.8,eyeHeight:1.7,speed:6,sprintMult:1.6,jumpVelocity:5.4,gravity:18,stepHeight:.3,maxSlope:Math.PI/4,vaultHeight:1.2,mantleHeight:2,vaultDuration:.35,mantleDuration:.65},t),this.position=new M,this.velocity=new M,this.airMomentum=new M,this.reset(t.position||new M)}get canFire(){return!this.traversal}reset(e=new M){this.position.copy(e),this.velocity.set(0,0,0),this.airMomentum.set(0,0,0),this.traversal=null,this.supportId=null,this.supportShapeId=null,this.supportPosition=null,this.airborneBodyId=null;const t=this.world.querySupport(this.position,{...this.dimensions(),maxRise:.03,maxDrop:.1});this.grounded=!!t,t&&this.attach(t)}dimensions(){return{radius:this.radius,height:this.height,stepHeight:this.stepHeight,maxSlope:this.maxSlope}}attach(e){this.supportId=e.supportId,this.supportShapeId=e.supportShapeId;const t=this.world.getBody(this.supportId);this.supportPosition=t?t.position.clone():null,this.airborneBodyId=null}updateAirborneBody(){const t=this.world.getBody(this.airborneBodyId)?.bounds,n=this.position;(!t||n.x<t.min.x||n.x>t.max.x||n.z<t.min.z||n.z>t.max.z||n.y<t.min.y||n.y>t.max.y+this.height)&&(this.airborneBodyId=null)}carry(){const e=this.world.getBody(this.supportId);if(e){if(this.supportPosition){const t=e.position.clone().sub(this.supportPosition),n=this.position.clone().add(t),i=this.world.moveCharacter(this.position,t,{...this.dimensions(),ignoreBody:e.id});this.position.copy(i.position),i.position.distanceTo(n)>.2&&i.blocked&&(this.supportId=null)}this.supportPosition=e.position.clone()}}startClimb(e,t=this.mantleDuration,n=null,{waypoints:i}={}){if(this.traversal||!(t>0))return!1;const r=this.world.getBody(n),o=r?.position||new M;let a=[this.position.clone()];if(i?.length)a.push(...i.map(Dt));else{const c=Math.max(this.position.y,e.y)+.06;a.push(this.position.clone().setY(c),Dt(e).setY(c))}a.push(Dt(e)),a=a.filter((c,h)=>!h||c.distanceTo(a[h-1])>.001);for(let c=1;c<a.length;c++){const h=Math.max(1,Math.ceil(a[c].distanceTo(a[c-1])/.08));for(let u=1;u<=h;u++){const d=a[c-1].clone().lerp(a[c],u/h);if(!this.world.capsuleClear(d,this.radius,this.height))return!1}}const l=a.slice(1).map((c,h)=>c.distanceTo(a[h]));return this.traversal={bodyId:n,path:a.map(c=>c.sub(o)),lengths:l,length:l.reduce((c,h)=>c+h,0),duration:t,elapsed:0},this.velocity.set(0,0,0),this.airMomentum.set(0,0,0),this.grounded=!1,this.supportId=null,this.supportPosition=null,this.airborneBodyId=r?.id||null,!0}tryTraverse(e){if(e.lengthSq()<.01||this.traversal)return!1;const t=e.clone().setY(0).normalize(),n=this.position.clone().add(new M(0,.55,0)),i=this.world.raycast(n,n.clone().addScaledVector(t,this.radius+.9));if(!i||!i.shape.climbable||Math.abs(i.normal.y)>.3||i.bodyId&&this.world.getBody(i.bodyId)?.velocity.length()>.5)return!1;const r=this.world.getShapeBounds(i.shape),o=r.max.y-this.position.y;if(o<.15||o>this.mantleHeight+.001)return!1;const a=Math.abs(t.x)*(r.max.x-r.min.x)+Math.abs(t.z)*(r.max.z-r.min.z);if(o<=this.vaultHeight&&a<1.7){const h=i.point.clone().addScaledVector(t,a+this.radius+.15).setY(this.position.y),u=this.world.querySupport(h,{...this.dimensions(),maxRise:.1,maxDrop:2});if(u)return this.startClimb(u.point,this.vaultDuration,i.bodyId,{waypoints:[this.position.clone().setY(r.max.y+.06),u.point.clone().setY(r.max.y+.06)]})}const l=i.point.clone().addScaledVector(t,this.radius+.16).setY(r.max.y),c=this.world.querySupport(l,{...this.dimensions(),maxRise:.03,maxDrop:.05});return!!c&&this.startClimb(c.point,this.mantleDuration,i.bodyId)}updateTraversal(e){const t=this.traversal;t.elapsed=Math.min(t.duration,t.elapsed+e);let n=t.length*t.elapsed/t.duration,i=t.path.at(-1).clone();for(let a=0;a<t.lengths.length;a++){if(n<=t.lengths[a]){i=t.path[a].clone().lerp(t.path[a+1],n/t.lengths[a]);break}n-=t.lengths[a]}const r=this.world.getBody(t.bodyId);r&&i.add(r.position);const o=this.world.moveCharacter(this.position,i.clone().sub(this.position),this.dimensions());if(this.position.copy(o.position),o.position.distanceTo(i)>.08||t.elapsed>=t.duration){this.traversal=null;const a=this.world.querySupport(this.position,{...this.dimensions(),maxRise:.03,maxDrop:.08});this.grounded=!!a,a&&this.attach(a)}this.updateAirborneBody()}update(e,t={}){if(!(e>0)||!Number.isFinite(e))return this;if(this.traversal)return this.updateTraversal(e),this;this.carry();const n=Dt(t.move).setY(0);if(n.lengthSq()>1&&n.normalize(),t.traverse&&this.tryTraverse(n))return this.updateTraversal(e),this;if(t.jump&&this.grounded){const a=this.world.getBody(this.supportId);a&&this.airMomentum.copy(a.velocity).setY(0),this.airborneBodyId=a?.id||null,this.velocity.y=this.jumpVelocity,this.grounded=!1,this.supportId=null,this.supportPosition=null}const i=Math.max(1,Math.ceil(e/(1/120))),r=e/i,o=Number.isFinite(t.speed)?t.speed:this.speed*(t.sprint?this.sprintMult:1);for(let a=0;a<i;a++){this.velocity.x=n.x*o+this.airMomentum.x,this.velocity.z=n.z*o+this.airMomentum.z,(!this.grounded||this.velocity.y>0)&&(this.velocity.y-=this.gravity*r);const l=this.world.moveCharacter(this.position,this.velocity.clone().multiplyScalar(r),{...this.dimensions(),snapToGround:this.grounded&&this.velocity.y<=0});this.position.copy(l.position),this.grounded=l.grounded&&this.velocity.y<=0;for(const c of l.normals)c.y<-.5&&this.velocity.y>0&&(this.velocity.y=0);this.grounded?(this.velocity.y=0,this.airMomentum.set(0,0,0),this.attach(l)):(this.world.getBody(this.supportId)&&(this.airborneBodyId=this.supportId),this.supportId=null,this.supportPosition=null)}return this.updateAirborneBody(),this}}let Ns=null;function lo(){return Ns||(Ns=new(window.AudioContext||window.webkitAudioContext)),Ns.state==="suspended"&&Ns.resume(),Ns}function Ya(s,e){return s+Math.random()*(e-s)}function Qv(){const s=lo(),e=s.currentTime,t=s.createBuffer(1,Math.floor(s.sampleRate*.04),s.sampleRate),n=t.getChannelData(0);for(let c=0;c<n.length;c++)n[c]=(Math.random()*2-1)*Math.pow(1-c/n.length,3);const i=s.createBufferSource();i.buffer=t;const r=s.createBiquadFilter();r.type="bandpass",r.frequency.value=Ya(800,1500),r.Q.value=2;const o=s.createGain();o.gain.setValueAtTime(.25,e),o.gain.exponentialRampToValueAtTime(.001,e+.04),i.connect(r).connect(o).connect(s.destination),i.start(e);const a=s.createOscillator();a.type="triangle",a.frequency.setValueAtTime(Ya(200,300),e),a.frequency.exponentialRampToValueAtTime(80,e+.06);const l=s.createGain();l.gain.setValueAtTime(.2,e),l.gain.exponentialRampToValueAtTime(.001,e+.06),a.connect(l).connect(s.destination),a.start(e),a.stop(e+.07)}function ex(){const s=lo(),e=s.currentTime,t=.12,n=s.createBuffer(1,Math.floor(s.sampleRate*t),s.sampleRate),i=n.getChannelData(0);for(let l=0;l<i.length;l++)i[l]=(Math.random()*2-1)*(1-l/i.length);const r=s.createBufferSource();r.buffer=n;const o=s.createBiquadFilter();o.type="bandpass",o.frequency.value=1500,o.Q.value=1;const a=s.createGain();a.gain.setValueAtTime(.15,e),a.gain.exponentialRampToValueAtTime(.001,e+t),r.connect(o).connect(a).connect(s.destination),r.start(e),r.stop(e+t),setTimeout(()=>{const l=s.currentTime,c=s.createBuffer(1,Math.floor(s.sampleRate*.06),s.sampleRate),h=c.getChannelData(0);for(let _=0;_<h.length;_++)h[_]=(Math.random()*2-1)*Math.pow(1-_/h.length,2);const u=s.createBufferSource();u.buffer=c;const d=s.createBiquadFilter();d.type="highpass",d.frequency.value=2e3;const f=s.createGain();f.gain.setValueAtTime(.2,l),f.gain.exponentialRampToValueAtTime(.001,l+.06),u.connect(d).connect(f).connect(s.destination),u.start(l),u.stop(l+.07)},250),setTimeout(()=>{const l=s.currentTime,c=s.createOscillator();c.type="square",c.frequency.setValueAtTime(Ya(600,900),l),c.frequency.exponentialRampToValueAtTime(200,l+.04);const h=s.createGain();h.gain.setValueAtTime(.18,l),h.gain.exponentialRampToValueAtTime(.001,l+.04),c.connect(h).connect(s.destination),c.start(l),c.stop(l+.05)},450)}function tx(){const s=lo(),e=s.currentTime,t=[523.25,659.25,783.99,1046.5];for(let r=0;r<t.length;r++){const o=s.createOscillator();o.type="triangle",o.frequency.setValueAtTime(t[r],e+r*.07);const a=s.createGain();a.gain.setValueAtTime(0,e+r*.07),a.gain.linearRampToValueAtTime(.2,e+r*.07+.01),a.gain.exponentialRampToValueAtTime(.001,e+r*.07+.2),o.connect(a).connect(s.destination),o.start(e+r*.07),o.stop(e+r*.07+.22)}const n=s.createOscillator();n.type="sine",n.frequency.setValueAtTime(261.63,e);const i=s.createGain();i.gain.setValueAtTime(0,e),i.gain.linearRampToValueAtTime(.1,e+.05),i.gain.exponentialRampToValueAtTime(.001,e+.6),n.connect(i).connect(s.destination),n.start(e),n.stop(e+.65)}function nx(){const s=lo(),e=s.currentTime,t=s.createBuffer(1,Math.floor(s.sampleRate*.08),s.sampleRate),n=t.getChannelData(0);for(let a=0;a<n.length;a++)n[a]=(Math.random()*2-1)*Math.pow(1-a/n.length,2)*.5;const i=s.createBufferSource();i.buffer=t;const r=s.createBiquadFilter();r.type="lowpass",r.frequency.value=600;const o=s.createGain();o.gain.setValueAtTime(.12,e),o.gain.exponentialRampToValueAtTime(.001,e+.08),i.connect(r).connect(o).connect(s.destination),i.start(e),i.stop(e+.1)}class ix{constructor(e,t,n,i,r=new M(-35,0,-25)){Object.assign(this,{camera:e,domElement:t,scene:n,world:i,spawn:r}),this.pos=new M,this.motor=new xu(i,{radius:j.player.radius,height:j.player.bodyHeight,eyeHeight:j.player.height,speed:j.player.moveSpeed,jumpVelocity:j.player.jump.velocity,gravity:j.player.jump.gravity,stepHeight:j.player.stepHeight,vaultHeight:j.player.vaultHeight,mantleHeight:j.player.mantleHeight}),this.controls=null,this.keys={},this.enabled=!1,this.canLock=()=>!1,this.getLadders=()=>[],this.gunGroup=new Rt,this.gunGroup.position.set(.25,-.4,-.5),e.add(this.gunGroup),n.add(e),window.addEventListener("keydown",o=>{!this.enabled||!this.controls?.isLocked||(this.keys[o.code]=!0,o.code==="Space"&&(o.preventDefault(),o.repeat||(this.jumpQueued=!0)))}),window.addEventListener("keyup",o=>{this.keys[o.code]=!1}),t.addEventListener("click",()=>{this.canLock()&&this.safeLock()}),this.reset()}async initControls(){this.controls=new jv(this.camera,this.domElement),this.controls.addEventListener("lock",()=>{this.lockFailed=!1}),this.controls.addEventListener("unlock",()=>this.clearInput()),this.domElement.ownerDocument.addEventListener("pointerlockerror",()=>{this.lockFailed=!0})}safeLock(){if(!(!this.controls||this.controls.isLocked)){this.lockFailed=!1;try{this.domElement.requestPointerLock()?.catch?.(()=>{this.lockFailed=!0})}catch{this.lockFailed=!0}}}clearInput(){this.keys={},this.jumpQueued=!1}setEnabled(e){this.enabled=e,e||this.clearInput()}get footPosition(){return this.motor.position}get supportId(){return this.motor.supportId}get forward(){const e=this.camera.getWorldDirection(new M).setY(0);return e.lengthSq()>.001?e.normalize():new M(0,0,-1)}get right(){const e=this.forward;return new M(-e.z,0,e.x)}reset(){this.hp=this.maxHp=j.player.maxHp,this.moveSpeed=j.player.moveSpeed,this.speedMult=1,this.invuln=!1,this.invulnTimer=0,this.lastDamage=null,this.ladderLatch=null,this.motor.reset(this.spawn),this.clearInput(),this.syncCamera(),this.camera.rotation.set(0,this.spawnYaw||0,0),this.camera.fov=j.view.fov,this.camera.updateProjectionMatrix()}tryLadder(){if(this.motor.traversal)return!1;this.motor.carry();const e=this.getLadders(),t=e.find(n=>n.id===this.ladderLatch);if(t&&[t.bottom,t.top].every(n=>this.footPosition.distanceTo(n)>j.player.ladderReleaseRange)&&(this.ladderLatch=null),t||(this.ladderLatch=null),!this.motor.grounded)return!1;for(const n of e)if(n.id!==this.ladderLatch){for(const[i,r]of[[n.bottom,n.top],[n.top,n.bottom]])if(Math.hypot(this.footPosition.x-i.x,this.footPosition.z-i.z)<=j.player.ladderContactRange&&Math.abs(this.footPosition.y-i.y)<=j.player.ladderHeightTolerance){const a=r===n.top?[n.bottom,...n.waypoints||[]]:n.downWaypoints;if(this.motor.startClimb(r,n.duration??1.1,n.bodyId,{waypoints:a}))return this.ladderLatch=n.id,!0}}return!1}update(e){if(!(e>0)||!this.enabled||!this.controls?.isLocked)return;this.invulnTimer=Math.max(0,this.invulnTimer-e);const t=new M;this.keys.KeyW&&t.add(this.forward),this.keys.KeyS&&t.sub(this.forward),this.keys.KeyD&&t.add(this.right),this.keys.KeyA&&t.sub(this.right),t.lengthSq()&&t.normalize();const n=this.motor.grounded,i=this.tryLadder(),r=this.keys.ShiftLeft||this.keys.ShiftRight;this.motor.update(e,{move:t,jump:this.jumpQueued&&!i,traverse:this.jumpQueued&&!!this.keys.KeyW&&!i,speed:this.moveSpeed*this.speedMult*(r?j.player.sprintMult:1),sprint:!1}),this.jumpQueued=!1,!n&&this.motor.grounded&&nx(),this.syncCamera()}syncCamera(){this.pos.copy(this.motor.position).add(new M(0,j.player.height,0)),this.camera.position.copy(this.pos)}takeDamage(e,t="enemy"){return this.invuln||t!=="train"&&this.invulnTimer>0?!1:(this.hp=Math.max(0,this.hp-e),this.invulnTimer=j.player.invulnAfterHit,this.lastDamage=t,!0)}healOrGrow(e){this.maxHp+=e,this.hp+=e}}function ah(s,e){if(e===_d)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===ka||e===Oh){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===ka)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class yu extends Ms{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new lx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new xx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new fx(t)}),this.register(function(t){return new px(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new mx(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new _x(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Sx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Xs.extractUrlBase(e);o=Xs.resolveURL(c,this.path)}else o=Xs.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new mu(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Mu){try{o[ke.KHR_BINARY_GLTF]=new bx(e)}catch(u){i&&i(u);return}r=JSON.parse(o[ke.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Fx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case ke.KHR_MATERIALS_UNLIT:o[u]=new ox;break;case ke.KHR_DRACO_MESH_COMPRESSION:o[u]=new wx(r,this.dracoLoader);break;case ke.KHR_TEXTURE_TRANSFORM:o[u]=new Tx;break;case ke.KHR_MESH_QUANTIZATION:o[u]=new Ex;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function sx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const ke={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class rx{constructor(e){this.parser=e,this.name=ke.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Se(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],zt);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new gu(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new ro(h),c.distance=u;break;case"spot":c=new H_(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Nn(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class ox{constructor(){this.name=ke.KHR_MATERIALS_UNLIT}getMaterialType(){return yt}extendParams(e,t,n){const i=[];e.color=new Se(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],zt),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,vt))}return Promise.all(i)}}class ax{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class lx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new ie(a,a)}return Promise.all(r)}}class cx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class hx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class ux{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],zt)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,vt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class dx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class fx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se().setRGB(a[0],a[1],a[2],zt),Promise.all(r)}}class px{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class mx{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se().setRGB(a[0],a[1],a[2],zt),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,vt)),Promise.all(r)}}class gx{constructor(e){this.parser=e,this.name=ke.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class _x{constructor(e){this.parser=e,this.name=ke.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:bn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class vx{constructor(e){this.parser=e,this.name=ke.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class xx{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class yx{constructor(e){this.parser=e,this.name=ke.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Mx{constructor(e){this.name=ke.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,h=i.count,u=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,i.mode,i.filter).then(function(f){return f.buffer}):o.ready.then(function(){const f=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(f),h,u,d,i.mode,i.filter),f})})}else return null}}class Sx{constructor(e){this.name=ke.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==Jt.TRIANGLES&&c.mode!==Jt.TRIANGLE_STRIP&&c.mode!==Jt.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,f=[];for(const _ of u){const g=new Ae,m=new M,p=new nn,x=new M(1,1,1),y=new ru(_.geometry,_.material,d);for(let v=0;v<d;v++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,v),l.ROTATION&&p.fromBufferAttribute(l.ROTATION,v),l.SCALE&&x.fromBufferAttribute(l.SCALE,v),y.setMatrixAt(v,g.compose(m,p,x));for(const v in l)if(v==="_COLOR_0"){const R=l[v];y.instanceColor=new Ga(R.array,R.itemSize,R.normalized)}else v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&_.geometry.setAttribute(v,l[v]);nt.prototype.copy.call(y,_),this.parser.assignFinalMaterial(y),f.push(y)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}}const Mu="glTF",Fs=12,lh={JSON:1313821514,BIN:5130562};class bx{constructor(e){this.name=ke.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Fs),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Mu)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-Fs,r=new DataView(e,Fs);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===lh.JSON){const c=new Uint8Array(e,Fs+o,a);this.content=n.decode(c)}else if(l===lh.BIN){const c=Fs+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class wx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=ke.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=ja[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=ja[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],f=is[d.componentType];c[u]=f.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){i.decodeDracoFile(h,function(f){for(const _ in f.attributes){const g=f.attributes[_],m=l[_];m!==void 0&&(g.normalized=m)}u(f)},a,c,zt,d)})})}}class Tx{constructor(){this.name=ke.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ex{constructor(){this.name=ke.KHR_MESH_QUANTIZATION}}class Su extends nr{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=i-t,u=(n-t)/h,d=u*u,f=d*u,_=e*c,g=_-c,m=-2*f+3*d,p=f-d,x=1-m,y=p-d+u;for(let v=0;v!==a;v++){const R=o[g+v+a],E=o[g+v+l]*h,C=o[_+v+a],P=o[_+v]*h;r[v]=x*R+y*E+m*C+p*P}return r}}const Ax=new nn;class Rx extends Su{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Ax.fromArray(r).normalize().toArray(r),r}}const Jt={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},is={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},ch={9728:St,9729:Bt,9984:Eh,9985:Br,9986:Bs,9987:On},hh={33071:Qn,33648:qr,10497:Mi},Ko={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ja={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},jn={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Cx={CUBICSPLINE:void 0,LINEAR:js,STEP:Ys},Zo={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Px(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new rn({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:vn})),s.DefaultMaterial}function mi(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Nn(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ix(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(i=!0),u.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):s.attributes.position;o.push(d)}if(i){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(s.morphAttributes.position=h),i&&(s.morphAttributes.normal=u),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Lx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Dx(s){let e;const t=s.extensions&&s.extensions[ke.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Jo(t.attributes):e=s.indices+":"+Jo(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Jo(s.targets[n]);return e}function Jo(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Ka(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Ux(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":s.search(/\.ktx2($|\?)/i)>0||s.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}const Nx=new Ae;class Fx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new sx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new B_(this.options.manager):this.textureLoader=new W_(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new mu(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return mi(r,a,i),Nn(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[ke.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Xs.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ko[i.type],a=is[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new Nt(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ko[i.type],c=is[i.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=i.byteOffset||0,f=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,_=i.normalized===!0;let g,m;if(f&&f!==u){const p=Math.floor(d/f),x="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+p+":"+i.count;let y=t.cache.get(x);y||(g=new c(a,p*f,i.count*f/h),y=new tu(g,f/h),t.cache.add(x,y)),m=new Zs(y,l,d%f/h,_)}else a===null?g=new c(i.count*l):g=new c(a,d,i.count*l),m=new Nt(g,l,_);if(i.sparse!==void 0){const p=Ko.SCALAR,x=is[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,v=i.sparse.values.byteOffset||0,R=new x(o[1],y,i.sparse.count*p),E=new c(o[2],v,i.sparse.count*l);a!==null&&(m=new Nt(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let C=0,P=R.length;C<P;C++){const T=R[C];if(m.setX(T,E[C*l]),l>=2&&m.setY(T,E[C*l+1]),l>=3&&m.setZ(T,E[C*l+2]),l>=4&&m.setW(T,E[C*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=_}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=ch[d.magFilter]||Bt,h.minFilter=ch[d.minFilter]||On,h.wrapS=hh[d.wrapS]||Mi,h.wrapT=hh[d.wrapT]||Mi,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==St&&h.minFilter!==Bt,i.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,f){let _=d;t.isImageBitmapLoader===!0&&(_=function(g){const m=new bt(g);m.needsUpdate=!0,d(m)}),t.load(Xs.resolveURL(u,r.path),_,void 0,f)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Nn(u,o),u.userData.mimeType=o.mimeType||Ux(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[ke.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[ke.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[ke.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ou,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new to,sn.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return rn}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[ke.KHR_MATERIALS_UNLIT]){const u=i[ke.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],zt),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,vt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Qt);const h=r.alphaMode||Zo.OPAQUE;if(h===Zo.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===Zo.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==yt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new ie(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==yt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==yt){const u=r.emissiveFactor;a.emissive=new Se().setRGB(u[0],u[1],u[2],zt)}return r.emissiveTexture!==void 0&&o!==yt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,vt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Nn(u,r),t.associations.set(u,{materials:e}),r.extensions&&mi(i,u,r),u})}createUniqueName(e){const t=Ze.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[ke.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return uh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Dx(c),u=i[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[ke.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=uh(new Et,c,t),i[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Px(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let f=0,_=h.length;f<_;f++){const g=h[f],m=o[f];let p;const x=c[f];if(m.mode===Jt.TRIANGLES||m.mode===Jt.TRIANGLE_STRIP||m.mode===Jt.TRIANGLE_FAN||m.mode===void 0)p=r.isSkinnedMesh===!0?new a_(g,x):new Oe(g,x),p.isSkinnedMesh===!0&&p.normalizeSkinWeights(),m.mode===Jt.TRIANGLE_STRIP?p.geometry=ah(p.geometry,Oh):m.mode===Jt.TRIANGLE_FAN&&(p.geometry=ah(p.geometry,ka));else if(m.mode===Jt.LINES)p=new h_(g,x);else if(m.mode===Jt.LINE_STRIP)p=new er(g,x);else if(m.mode===Jt.LINE_LOOP)p=new u_(g,x);else if(m.mode===Jt.POINTS)p=new d_(g,x);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&Lx(p,r),p.name=t.createUniqueName(r.name||"mesh_"+e),Nn(p,r),m.extensions&&mi(i,p,m),t.assignFinalMaterial(p),u.push(p)}for(let f=0,_=u.length;f<_;f++)t.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&mi(i,u[0],r),u[0];const d=new Rt;r.extensions&&mi(i,d,r),t.associations.set(d,{meshes:e});for(let f=0,_=u.length;f<_;f++)d.add(u[f]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new Lt(Yt.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new dl(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Nn(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new Ae;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new ml(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=i.channels.length;u<d;u++){const f=i.channels[u],_=i.samplers[f.sampler],g=f.target,m=g.node,p=i.parameters!==void 0?i.parameters[_.input]:_.input,x=i.parameters!==void 0?i.parameters[_.output]:_.output;g.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",p)),l.push(this.getDependency("accessor",x)),c.push(_),h.push(g))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],f=u[1],_=u[2],g=u[3],m=u[4],p=[];for(let x=0,y=d.length;x<y;x++){const v=d[x],R=f[x],E=_[x],C=g[x],P=m[x];if(v===void 0)continue;v.updateMatrix&&v.updateMatrix();const T=n._createAnimationTracks(v,R,E,C,P);if(T)for(let b=0;b<T.length;b++)p.push(T[b])}return new Xa(r,void 0,p)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,Nx)});for(let f=0,_=u.length;f<_;f++)h.add(u[f]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new su:c.length>1?h=new Rt:c.length===1?h=c[0]:h=new nt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Nn(h,r),r.extensions&&mi(n,h,r),r.matrix!==void 0){const u=new Ae;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return i.associations.has(h)||i.associations.set(h,{}),i.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Rt;n.name&&(r.name=i.createUniqueName(n.name)),Nn(r,n),n.extensions&&mi(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,f]of i.associations)(d instanceof sn||d instanceof bt)&&u.set(d,f);return h.traverse(d=>{const f=i.associations.get(d);f!=null&&u.set(d,f)}),u};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];jn[r.path]===jn.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(jn[r.path]){case jn.weights:c=fs;break;case jn.rotation:c=ps;break;case jn.position:case jn.scale:c=ms;break;default:n.itemSize===1?c=fs:c=ms;break}const h=i.interpolation!==void 0?Cx[i.interpolation]:js,u=this._getArrayFromAccessor(n);for(let d=0,f=l.length;d<f;d++){const _=new c(l[d]+"."+jn[r.path],t.array,u,h);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(_),o.push(_)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Ka(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof ps?Rx:Su;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Ox(s,e,t){const n=e.attributes,i=new Ht;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new M(l[0],l[1],l[2]),new M(c[0],c[1],c[2])),a.normalized){const h=Ka(is[a.componentType]);i.min.multiplyScalar(h),i.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new M,l=new M;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],f=d.min,_=d.max;if(f!==void 0&&_!==void 0){if(l.setX(Math.max(Math.abs(f[0]),Math.abs(_[0]))),l.setY(Math.max(Math.abs(f[1]),Math.abs(_[1]))),l.setZ(Math.max(Math.abs(f[2]),Math.abs(_[2]))),d.normalized){const g=Ka(is[d.componentType]);l.multiplyScalar(g)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Mn;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function uh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=ja[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return He.workingColorSpace!==zt&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${He.workingColorSpace}" not supported.`),Nn(s,e),Ox(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Ix(s,e.targets,t):s})}let Qo;function Bx(){return Qo||(Qo=new yt({color:2825006,side:Ut})),Qo}let Os;function zx(){if(Os)return Os;const s=new Uint8Array([45,45,60,255,130,130,150,255,210,210,225,255,255,255,255,255]);return Os=new eo(s,4,1,$t),Os.needsUpdate=!0,Os}function kx(s,e=1.05){const t=new Oe(s.geometry,Bx());t.scale.setScalar(e),t.userData.isOutline=!0,t.raycast=()=>{},s.add(t)}function El(s,e=0,t=1){return new E_({color:s,emissive:e,emissiveIntensity:t,gradientMap:zx(),transparent:!1,depthWrite:!0})}function Hx(s,e){const t=new Rt;t.add(s.clone(!0)),t.rotation.set(...e.sourceRot.map(l=>Yt.degToRad(l)));const i=new Ht().setFromObject(t).getSize(new M).z;if(!Number.isFinite(i)||i<=0||!(e.length>0))return null;t.scale.setScalar(e.length/i);const r=new Ht().setFromObject(t),o=r.getCenter(new M);t.position.set(-o.x,-o.y,-r.max.z);const a=new Rt;return a.add(t),a.rotation.set(...e.rot.map(l=>Yt.degToRad(l))),a.position.set(...e.pos),a.userData.__glb=!0,a.traverse(l=>{l.isMesh&&(l.castShadow=!1,l.receiveShadow=!1)}),a}function Vx(s,e,t,n=j.view.fov){const i=Math.tan(Yt.degToRad(e/2))/Math.tan(Yt.degToRad(n/2));s.scale.set(i,i,1),s.position.x=t.x*i,s.position.y=t.y*i}class Gx{constructor(e){this.player=e,this.models={},this.basePosition=e.gunGroup.position.clone()}syncPerspective(){Vx(this.player.gunGroup,this.player.camera.fov,this.basePosition)}getMuzzleWorld(e=new M){this.player.gunGroup.updateWorldMatrix(!0,!0);const t=this.player.gunModel?.getObjectByName("Muzzle");return t?t.getWorldPosition(e):this.player.gunGroup.localToWorld(e.set(0,0,-.42))}preload(e,t){for(const n of e){const i=j.gunModel[n];i&&new yu().load(i.file,r=>{this.models[n]=r.scene,t()},void 0,r=>console.warn("加载枪模失败",n,r))}}update(e){const t=this.player.gunModel;t&&(this.player.gunGroup.remove(t),t.userData.__glb||t.traverse(o=>{if(!o.isMesh)return;o.geometry.dispose(),(Array.isArray(o.material)?o.material:[o.material]).forEach(l=>l.dispose())}));const n=j.gunModel[e],i=this.models[e];let r=i&&n?Hx(i,n):null;if(!r){r=new Rt;for(const l of j.gunShape[e]||[]){const c=new Oe(new Gt(...l.size),El(l.color));c.position.set(...l.pos),r.add(c)}const o=new Ht().setFromObject(r),a=new nt;a.name="Muzzle",a.position.set((o.min.x+o.max.x)/2,o.max.y-.05,o.min.z),r.add(a)}this.player.gunGroup.add(r),this.player.gunModel=r}}const Fn={pistol:{impulse:[.052,.006,.031],frequency:22,flash:1.7,flashScale:.75,tail:1.15},shotgun:{impulse:[.11,.01,.065],frequency:17,flash:2.6,flashScale:1.15,tail:.7},rifle:{impulse:[.029,.004,.021],frequency:27,flash:1.3,flashScale:.6,tail:1.8}};class Wx{constructor(e){this.player=e,this.offset=new M,this.velocity=new M,this.sway=new M,this.previousCamera=e.camera.quaternion.clone(),this.view=null,this.reset()}bindView(){this.view!==this.player.gunModel&&(this.view=this.player.gunModel,this.viewPosition=this.view?.position.clone(),this.viewRotation=this.view?.quaternion.clone())}kick(e,t){this.profile=Fn[e]||Fn.pistol;const n=new M(...this.profile.impulse);n.y*=this.shot%2?-1:1,this.velocity.addScaledVector(n,this.profile.frequency*Math.E*(t?.55:1)),this.shot++}update(e,{ads:t=!1,reloading:n=!1,moving:i,sprinting:r=!1}={}){if(!(e>0))return;this.bindView();const o=this.profile.frequency,a=Math.exp(-o*e),l=this.velocity.clone().addScaledVector(this.offset,o);this.offset.addScaledVector(l,e).multiplyScalar(a),this.velocity.addScaledVector(l,-o*e).multiplyScalar(a),this.offset.clamp(new M(-.18,-.05,-.03),new M(.18,.05,.11));const c=this.player.camera.quaternion.clone().invert().multiply(this.previousCamera),h=new Vt().setFromQuaternion(c,"YXZ"),u=t?.2:1,d=new M(Yt.clamp(h.x*.7,-.018,.018),Yt.clamp(h.y*.7,-.018,.018),0).multiplyScalar(u);this.sway.lerp(d,1-Math.exp(-e*18)),this.previousCamera.copy(this.player.camera.quaternion);const f=this.player.motor,_=f?.velocity?Math.hypot(f.velocity.x,f.velocity.z):0,g=(i??_>.2)&&f?.grounded!==!1&&!f?.traversal;this.walkBlend=Yt.damp(this.walkBlend,g?1:0,12,e),this.phase+=e*(r?11:8)*this.walkBlend;const m=this.walkBlend*(r?.006:.003)*u*(n?.15:1);if(this.player.gunGroup.position.z=this.baseZ+this.offset.z,this.view){this.view.position.copy(this.viewPosition).add(new M(Math.sin(this.phase)*m,Math.cos(this.phase*2)*m*.6,0));const p=new nn().setFromEuler(new Vt(this.offset.x+this.sway.x,this.offset.y+this.sway.y,-this.offset.y*.65,"YXZ"));this.view.quaternion.copy(this.viewRotation).multiply(p)}}reset(){this.view&&(this.view.position.copy(this.viewPosition),this.view.quaternion.copy(this.viewRotation)),this.offset.set(0,0,0),this.velocity.set(0,0,0),this.sway.set(0,0,0),this.previousCamera.copy(this.player.camera.quaternion),this.profile=Fn.pistol,this.phase=this.walkBlend=this.shot=0,this.baseZ??=this.player.gunGroup.position.z,this.player.gunGroup.position.z=this.baseZ}}class Xx{constructor(e,t){this.scene=e,this.player=t,this.motion=new Wx(t),this.weaponKey="pistol",this.kick=0,this.tracer=null,this.projectileTracers=new Map,this.flash=new ro(16764040,0,4),t.gunGroup.add(this.flash),this.muzzle=new Oe(new io(.045,.15,5),new yt({color:16767129,transparent:!0,opacity:0,blending:na,depthTest:!1,depthWrite:!1})),this.muzzle.rotation.x=-Math.PI/2,this.muzzle.renderOrder=12,t.gunGroup.add(this.muzzle);const n=new Gt(.025,.025,.025);this.sparks=Array.from({length:48},()=>{const i=new Oe(n,new yt({transparent:!0}));return i.visible=!1,e.add(i),{mesh:i,vel:new M,life:0,duration:0}}),this.tracers=Array.from({length:64},()=>{const i=new Et;i.setAttribute("position",new Nt(new Float32Array(6),3).setUsage(Rd));const r=new er(i,new to({color:15188878,transparent:!0,opacity:0,depthWrite:!1}));return r.visible=!1,r.frustumCulled=!1,e.add(r),{mesh:r,life:0,id:null,fresh:!1}})}setMuzzleProvider(e){this.muzzleProvider=e}getMuzzleWorld(e=new M){if(this.player.gunGroup.updateWorldMatrix(!0,!0),this.muzzleProvider)return this.muzzleProvider(e)||e;const t=this.player.gunModel,n=t?.getObjectByName("muzzle")||t?.getObjectByName("Muzzle");if(n)return n.getWorldPosition(e);const i=t?.userData.muzzleLocal;return t?t.localToWorld(i?e.fromArray(i):e.set(0,.025,-(j.gunModel[this.weaponKey]?.length||.45))):this.player.gunGroup.localToWorld(e.set(0,0,-.42))}syncMuzzle(){const e=this.player.gunGroup.worldToLocal(this.getMuzzleWorld());this.muzzle.position.copy(e),this.flash.position.copy(e)}onShot(e="pistol",{ads:t=!1}={}){e!==this.weaponKey&&this.motion.reset(),this.weaponKey=e;const n=Fn[e]||Fn.pistol;this.motion.kick(e,t),this.kick=1,this.flash.intensity=n.flash,this.muzzle.material.opacity=.9,this.muzzle.scale.setScalar(n.flashScale),this.muzzle.rotation.z=Math.random()*Math.PI,this.syncMuzzle()}spawnSparks(e,{flesh:t=!1,normal:n}={}){for(let i=0;i<(t?2:4);i++){const r=this.sparks.find(l=>l.life<=0);if(!r)return;r.duration=t?.16:.22,r.life=r.duration,r.mesh.position.copy(e),r.mesh.visible=!0,r.mesh.material.color.setHex(t?12346967:15056252),r.mesh.material.opacity=.9;const o=Math.random()*Math.PI*2,a=t?1.2:2.8;r.vel.set(Math.cos(o)*a,.8+Math.random()*1.6,Math.sin(o)*a),n&&r.vel.addScaledVector(n,a)}}updateProjectile(e,t,n,{weaponKey:i=this.weaponKey}={}){let r=this.projectileTracers.get(e);r||(r=this.tracers.find(u=>u.life<=0)||this.tracers.reduce((u,d)=>u.life<d.life?u:d),r.id!==null&&this.projectileTracers.delete(r.id),r.id=e,this.projectileTracers.set(e,r));const o=n.clone().sub(t),a=o.length(),l=Math.min(a,(Fn[i]||Fn.pistol).tail),c=n.clone().addScaledVector(o,a?-l/a:0),h=r.mesh.geometry.attributes.position;h.setXYZ(0,c.x,c.y,c.z),h.setXYZ(1,n.x,n.y,n.z),h.needsUpdate=!0,r.life=.065,r.fresh=!0,r.mesh.visible=a>1e-4,r.mesh.material.opacity=i==="shotgun"?.42:.65,r.mesh.userData.life=r.life,this.tracer=r.mesh}removeProjectile(e){const t=this.projectileTracers.get(e);t&&(t.id=null,t.life=Math.min(t.life,.025),this.projectileTracers.delete(e))}setTracer(e,t){this.updateProjectile("legacy",e,t)}clearTracer(){this.projectileTracers.clear();for(const e of this.tracers)e.id=null,e.life=0,e.mesh.visible=!1;this.tracer=null}update(e,t={}){if(e>0){t.weaponKey&&t.weaponKey!==this.weaponKey&&(this.motion.reset(),this.motion.profile=Fn[t.weaponKey]||Fn.pistol,this.weaponKey=t.weaponKey),this.motion.update(e,t),this.kick*=Math.exp(-e*18),this.flash.intensity*=Math.exp(-e*65),this.muzzle.material.opacity*=Math.exp(-e*75),this.syncMuzzle();for(const n of this.sparks)n.life<=0||(n.life-=e,n.vel.y-=9*e,n.mesh.position.addScaledVector(n.vel,e),n.mesh.material.opacity=Math.max(0,n.life/n.duration)*.9,n.life<=0&&(n.mesh.visible=!1));for(const n of this.tracers)if(!(n.life<=0)){if(n.fresh&&e<=.05){n.fresh=!1;continue}n.fresh=!1,n.life-=e,n.mesh.userData.life=n.life,n.mesh.material.opacity=Math.min(n.mesh.material.opacity,Math.max(0,n.life/.065)*.65),n.life<=0&&(n.id!==null&&this.projectileTracers.delete(n.id),n.id=null,n.mesh.visible=!1,this.tracer===n.mesh&&(this.tracer=null))}}}reset(){this.motion.reset(),this.kick=0,this.flash.intensity=0,this.muzzle.material.opacity=0,this.clearTracer();for(const e of this.sparks)e.life=0,e.mesh.visible=!1}}function qx(s,e,t,n,i,r){for(const o of["x","y","z"]){const a=s.min[o]+Math.min(e[o],t[o])-r,l=s.max[o]+Math.max(e[o],t[o])+r;if(Math.max(n[o],i[o])<a||Math.min(n[o],i[o])>l)return!1}return!0}function $x(s,e,t,{radius:n=.01,alpha0:i=0,alpha1:r=1}={}){if(!s)return null;const o=Dt(e),a=Dt(t),l=o.distanceTo(a),c=Math.max(0,n);let h=null,u=1/0;const d=(_,g,m=null)=>{!_||g>=u||(u=g,h={point:o.clone().lerp(a,g),distance:l*g,normal:_.normal,shape:_.shape,bodyId:m,blocked:!0})},f=s.candidates(Math.min(o.x,a.x)-c,Math.min(o.z,a.z)-c,Math.max(o.x,a.x)+c,Math.max(o.z,a.z)+c);for(const _ of f){if(_.bodyId||_.solid===!1)continue;const g=$a(_,o,a,c);g&&d(g,l>0?g.distance/l:0)}for(const _ of s.dynamicBodies?.values()||[]){if(!_.bounds)continue;const g=_.previousPosition||_.position,m=new M().lerpVectors(g,_.position,i),p=new M().lerpVectors(g,_.position,r);if(!qx(_.bounds,m.clone().sub(_.position),p.clone().sub(_.position),o,a,c))continue;const x=o.clone().sub(m),y=a.clone().sub(p),v=x.distanceTo(y);for(const R of _.shapes){if(R.solid===!1)continue;const E=$a(R,x,y,c);E&&d(E,v>0?E.distance/v:0,_.id)}}return h}function ss(s){for(let e=s;e;e=e.parent)if(e.userData.enemyGroup)return e;return null}class Yx{constructor(e=()=>[]){this.getTargets=e,this.previous=new Map,this.ray=new _u}beginFrame(){this.previous.clear();for(const e of this.getTargets()){const t=ss(e);t&&!this.previous.has(t)&&this.previous.set(t,t.getWorldPosition(new M))}}prepare(){const e=new Map;for(const t of this.getTargets()){const n=ss(t);if(!(!n||n.userData.enemyRef?.dead)){if(!e.has(n)){n.updateWorldMatrix(!0,!0);const i=n.getWorldPosition(new M);e.set(n,{root:n,position:i,delta:i.clone().sub(this.previous.get(n)||i),meshes:[]})}e.get(n).meshes.push(t)}}this.groups=[...e.values()]}cast(e,t,n=0,i=1){let r=null;const o=e.distanceTo(t);for(const a of this.groups||[]){if(a.root.userData.enemyRef?.dead)continue;const l=e.clone().addScaledVector(a.delta,1-n),c=t.clone().addScaledVector(a.delta,1-i),h=a.root.userData.enemyRef;if(h?.height&&h?.radius){const m=a.position.clone().add(new M(0,h.height/2,0));if(new sv(l,c).closestPointToPoint(m,!0,new M).distanceTo(m)>Math.hypot(h.radius,h.height/2)+1)continue}if(!a.boundsReady){for(const m of a.meshes)m.isSkinnedMesh&&m.computeBoundingSphere();a.boundsReady=!0}const u=c.clone().sub(l),d=u.length();if(d<1e-9)continue;this.ray.set(l,u.divideScalar(d)),this.ray.near=0,this.ray.far=d;const f=this.ray.intersectObjects(a.meshes,!1)[0];if(!f)continue;const _=f.distance/d,g=o*_;(!r||g<r.distance)&&(r={root:a.root,mesh:f.object,face:f.face,distance:g,point:e.clone().lerp(t,_),normal:f.face?.normal.clone().transformDirection(f.object.matrixWorld)})}return r}}function jx(s,e,t,n){if(Math.abs(e)<1e-6)return s>=t&&s<=n?[0,1]:null;const i=(t-s)/e,r=(n-s)/e;return[Math.max(0,Math.min(i,r)),Math.min(1,Math.max(i,r))]}function Kx(s,e,t,n){const i=jx(s.y,e.y,-n,(t.height??j.arena.wallHeight)+n);if(!i||i[0]>i[1])return null;const r=s.x-t.x,o=s.z-t.z,a=t.r+n,l=e.x*e.x+e.z*e.z,c=r*r+o*o-a*a;if(l<1e-6)return c<=0?i[0]:null;const h=2*(r*e.x+o*e.z),u=h*h-4*l*c;if(u<0)return null;const d=Math.sqrt(u),f=Math.max(0,(-h-d)/(2*l),i[0]),_=Math.min(1,(-h+d)/(2*l),i[1]);return f<=_?f:null}function Al(s,e,t=[],n=0){const i=new M(s.x,s.y??0,s.z),r=new M(e.x,e.y??0,e.z).sub(i);let o=1/0,a=null;for(const c of t){const h=Kx(i,r,c,n);h!==null&&h<o&&(o=h,a=c)}const l=j.arena.size/2-.25-n;for(const c of["x","z"])if(!(Math.abs(r[c])<1e-6))for(const h of[-1,1]){const u=(h*l-i[c])/r[c],d=c==="x"?"z":"x",f=i.y+r.y*u;u>=0&&u<=1&&u<o&&Math.abs(i[d]+r[d]*u)<=j.arena.size/2+n&&f>=-n&&f<=j.arena.wallHeight+n&&(o=u,a={wall:!0,axis:c,sign:h})}return a?{point:i.clone().addScaledVector(r,o),distance:r.length()*o,obstacle:a}:null}function bu(s,e){if(!(s.falloffEnd>s.falloffStart)||e<=s.falloffStart)return s.damage;const t=Math.min(1,(e-s.falloffStart)/(s.falloffEnd-s.falloffStart));return s.damage*(1+((s.minDamageMult??1)-1)*t)}class Zx{constructor(e={}){this.callbacks=e,this.targets=new Yx(e.getEnemies),this.items=[],this.serial=0}beginFrame(){this.targets.beginFrame()}emit({position:e,direction:t,inheritVelocity:n=new M,...i}){const r={...i,id:++this.serial,position:e.clone(),velocity:t.clone().multiplyScalar(i.speed).add(n),distance:0,age:0};return this.items.push(r),r}impact(e,t,n){const i={...t,distance:n,weaponKey:e.weaponKey,shotId:e.shotId,direction:e.velocity.clone().normalize(),knockback:n<=(e.knockbackRange||0)&&e.knockback||0};this.callbacks.onImpact?.(i,bu(e,n),e)}update(e){if(!(e>0)||!Number.isFinite(e)||!this.items.length)return;this.targets.prepare();const t=this.callbacks.getWorld?.();for(let n=this.items.length-1;n>=0;n--){const i=this.items[n];if(i.defer){i.defer=!1;continue}let r=0,o=!1;for(i.initialHit&&(this.callbacks.onTrace?.(i.id,i.position,i.initialHit.point,i),this.impact(i,i.initialHit,i.initialHit.distance),o=!0);!o&&r<e-1e-9;){const a=Math.min(.008333333333333333,e-r),l=i.position.clone(),c=l.clone().addScaledVector(i.velocity,a);c.y-=.5*i.gravity*a*a;const h=l.distanceTo(c),u=Math.min(1,(i.maxDistance-i.distance)/Math.max(h,1e-9));c.lerpVectors(l,c,u);const d=r/e,f=(r+a*u)/e,_=t?$x(t,l,c,{radius:i.radius??.01,alpha0:d,alpha1:f}):Al(l,c,this.callbacks.getObstacles?.()||[],i.radius??.01),g=this.targets.cast(l,c,d,f),m=_&&(!g||_.distance<=g.distance)?{..._,root:null,blocked:!0}:g,p=m?.point||c;this.callbacks.onTrace?.(i.id,l,p,i),i.position.copy(p),i.age+=a*u,m?(this.impact(i,m,i.distance+l.distanceTo(p)),o=!0):(i.distance+=l.distanceTo(c),i.velocity.y-=i.gravity*a*u,o=u<1||i.distance>=i.maxDistance-1e-6||i.age>=2),r+=a}o&&(this.callbacks.onRemove?.(i.id),this.items.splice(n,1))}}clear(){for(const e of this.items)this.callbacks.onRemove?.(e.id);this.items.length=0,this.targets.previous.clear()}}function wu(s,e,t,n,i=200){const r=s.clone().addScaledVector(e,i),o=n.getWorld?.(),a=o?o.raycast(s,r):Al(s,r,n.getObstacles?.()||[]);for(const c of t)c.updateWorldMatrix(!0,!1);const l=new _u(s,e,0,i).intersectObjects(t,!1).find(c=>!ss(c.object)?.userData.enemyRef?.dead&&ss(c.object));return a&&(!l||a.distance<=l.distance)?{...a,root:null,blocked:!0}:l?{root:ss(l.object),point:l.point,mesh:l.object,face:l.face,distance:l.distance}:null}function Jx(s,e,t,n=1){if(n>1&&t===0)return s.clone();const i=new M().crossVectors(s,new M(0,1,0));i.lengthSq()<1e-4?i.set(1,0,0):i.normalize();const r=new M().crossVectors(i,s).normalize(),o=n>1?t*2.399963:Math.random()*Math.PI*2,a=e*Math.sqrt(n>1?(t-.5)/(n-1):Math.random());return s.clone().addScaledVector(i,Math.cos(o)*a).addScaledVector(r,Math.sin(o)*a).normalize()}function Qx(s,e,t,n){const i=j.weapon[e.key],r=s.player.camera,o=r.getWorldPosition(new M),a=s.model.getMuzzleWorld(),l=r.getWorldDirection(new M),c=s.callbacks.getEnemies?.()||[],h=a.clone().sub(o),u=h.length(),d=u>1e-6?wu(o,h.divideScalar(u),c,s.callbacks,u):null,f=s.player.motor&&s.callbacks.getWorld?.()?.getBody(s.player.motor.supportId||s.player.motor.airborneBodyId||s.player.motor.traversal?.bodyId);for(let _=0;_<e.pellets;_++){const g=s.jitter(l,s.getSpread(e),_,e.pellets),m=s.rayHit(o,g,c),p=m?.point||o.clone().addScaledVector(g,i.maxDistance),x=d||(m&&p.clone().sub(a).dot(l)<=.05?m:null),y=x?o:a,v=x?g:p.clone().sub(y).normalize();v.y+=i.gravity*i.zeroRange/(2*i.muzzleSpeed**2),v.normalize(),s.ballistics.emit({position:y,direction:v,inheritVelocity:f?.velocity,weaponKey:e.key,shotId:t,damage:e.damage,speed:i.muzzleSpeed,gravity:i.gravity,maxDistance:i.maxDistance,radius:.008,falloffStart:i.falloffStart,falloffEnd:i.falloffEnd,minDamageMult:i.minDamageMult,knockback:i.knockback,knockbackRange:i.knockbackRange,initialHit:x,defer:n})}}class ey{constructor(e){this.camera=e,this.reset()}turn(e){const t=new Vt().setFromQuaternion(this.camera.quaternion,"YXZ");t.x=Yt.clamp(t.x+e,-Math.PI/2+.01,Math.PI/2-.01),this.camera.quaternion.setFromEuler(t)}kick(e,t){this.profile=e;const n=e.recoilPitch*(t?.72:1);this.turn(n),this.returning+=n*e.recoilReturn,this.age=0}update(e){if(this.age+=e,!this.profile||this.age<.06)return;const t=this.returning*Math.exp(-this.profile.recoilRecovery*e);this.turn(t-this.returning),this.returning=t}reset(){this.returning=this.age=0,this.profile=null}}function Tu(s,e){if(!s)return null;let t,n,i,r,o,a;if(e==="damage")t=s.damage,n=t+5,i="damage",r=n,o="伤害 +5",a=s.pellets>1?" / 弹丸":"";else if(e==="mag")t=s.magSize,n=t+3,i="magSize",r=n,o="弹匣 +3",a=" 发";else if(e==="rof"){if(r=Math.max(j.levelup.minFireInterval,s.fireInterval/1.2),r>=s.fireInterval-1e-9)return null;i="fireInterval",t=1/s.fireInterval,n=1/r,o=`射速 +${Number(((n/t-1)*100).toFixed(1))}%`,a=" 发/秒"}else return null;if(!Number.isFinite(n)||n<=t)return null;const l=c=>Number(c.toFixed(2));return{key:e,gunKey:s.key,name:`${s.label} · ${o}`,before:t,after:n,field:i,value:r,description:`${l(t)} → ${l(n)}${a}，仅强化${s.label}`}}function ty(s,e){const t=Tu(s,e);return t?(s[t.field]=t.value,!0):!1}class ny{constructor(e,t,n={}){Object.assign(this,{scene:e,player:t,callbacks:n}),this.enabled=!1,this.unlocked=new Set(["pistol"]),this.guns={pistol:this.makeGun("pistol")},this.active="pistol",this.mouseHeld=this.adsHeld=!1,this.shotId=this.triggerBuffer=0,this.model=new Gx(t),this.effects=new Xx(e,t),this.effects.setMuzzleProvider(i=>this.model.getMuzzleWorld(i)),this.recoil=new ey(t.camera),this.ballistics=new Zx({...n,onTrace:(i,r,o,a)=>this.effects.updateProjectile(i,r,o,a),onRemove:i=>this.effects.removeProjectile(i),onImpact:(i,r)=>{i.root&&this.callbacks.onHit?.(i.root,r,i),this.effects.spawnSparks(i.point,{flesh:!!i.root,normal:i.normal}),this.callbacks.onImpact?.(i)}}),this.updateModel(),typeof window<"u"&&(this.model.preload(this.keys,()=>this.updateModel()),this.bindInput())}bindInput(){window.addEventListener("mousedown",e=>{this.canAct()&&(e.button===0&&(this.mouseHeld=!0,!this.fire()&&!this.gun.auto&&!this.gun.reloading&&this.gun.ammo>0&&this.gun.fireTimer<.1&&(this.triggerBuffer=.1)),e.button===2&&(this.adsHeld=!0))}),window.addEventListener("mouseup",e=>{e.button===0&&(this.mouseHeld=!1),e.button===2&&(this.adsHeld=!1)}),window.addEventListener("contextmenu",e=>e.preventDefault()),window.addEventListener("keydown",e=>{if(!this.canAct())return;e.code==="KeyR"&&this.reload();const t=Number(e.key);t>=1&&t<=3&&this.switchTo(this.keys[t-1])}),window.addEventListener("blur",()=>this.clearInput())}get keys(){return["pistol","shotgun","rifle"]}get gun(){return this.guns[this.active]}canSimulate(){return this.enabled&&!!this.player.controls?.isLocked}canAct(){return this.canSimulate()&&this.player.motor?.canFire!==!1}setEnabled(e){e||this.clearInput(),this.enabled=!!e}clearInput(){this.mouseHeld=this.adsHeld=!1,this.triggerBuffer=0,this.player.camera.fov=j.view.fov,this.player.camera.updateProjectionMatrix(),this.model.syncPerspective()}makeGun(e){const t=j.weapon[e];return{key:e,label:t.label,damage:t.damage,fireInterval:t.fireInterval,magSize:t.magSize,reloadTime:t.reloadTime,ammo:t.magSize,pellets:t.pellets||1,spread:t.spread||0,auto:!!t.auto,adsFov:t.adsFov||0,reloading:!1,reloadTimer:0,fireTimer:0,bloom:0,shotAge:0}}switchTo(e,t=!1){return!t&&!this.canAct()||!this.unlocked.has(e)||this.active===e?!1:(this.gun.reloading=!1,this.gun.reloadTimer=0,this.active=e,this.clearInput(),this.player.gunGroup.rotation.x=0,this.updateModel(),this.callbacks.onWeaponChange?.(this.gun),!0)}unlock(e){return!this.keys.includes(e)||this.unlocked.has(e)?!1:(this.unlocked.add(e),this.guns[e]=this.makeGun(e),this.switchTo(e,!0),!0)}updateModel(){this.model.update(this.active)}getSpread(e=this.gun){const t=j.weapon[e.key],n=this.player.motor,i=n?.velocity&&Math.hypot(n.velocity.x,n.velocity.z)>.2,r=this.player.keys?.ShiftLeft||this.player.keys?.ShiftRight;return((t.spread??t.baseSpread??0)+e.bloom+(i&&t.movingSpread||0)+(r&&t.sprintSpread||0)+(n?.grounded===!1&&t.airSpread||0))*(this.adsHeld?t.adsSpreadMult??1:1)}damageAtDistance(e,t){return bu({...j.weapon[e.key],damage:e.damage},t)}jitter(e,t,n,i){return Jx(e,t,n,i)}rayHit(e,t,n){return wu(e,t,n,this.callbacks)}findEnemyRoot(e){return ss(e)}beginProjectileFrame(){this.ballistics.beginFrame()}updateProjectiles(e){this.canSimulate()&&this.ballistics.update(e)}clearProjectiles(){this.ballistics.clear()}fire(){if(!this.canAct())return!1;const e=this.gun,t=j.weapon[e.key];if(e.reloading||e.fireTimer>0)return!1;if(e.ammo<=0)return this.reload(),!1;e.ammo--,e.fireTimer=e.fireInterval,e.shotAge=this.triggerBuffer=0;const n=++this.shotId;Qx(this,e,n,!!this.updating),this.effects.onShot(e.key,{ads:this.adsHeld}),this.recoil.kick(t,this.adsHeld);const i=t.spread??t.baseSpread??0;return e.bloom=Math.min(Math.max(0,t.maxSpread-i),e.bloom+t.spreadPerShot),this.callbacks.onShot?.(e.key),!0}reload(){if(!this.canAct())return!1;const e=this.gun;return e.reloading||e.ammo===e.magSize?!1:(e.reloading=!0,e.reloadTimer=e.reloadTime,this.triggerBuffer=0,this.callbacks.onReload?.(),!0)}update(e){if(!this.canSimulate()||!(e>0))return;this.recoil.update(e),this.triggerBuffer=Math.max(0,this.triggerBuffer-e);for(const i of Object.values(this.guns)){i.fireTimer-=e,i.shotAge+=e;const r=j.weapon[i.key],o=Math.min(e,Math.max(0,i.shotAge-r.spreadRecoveryDelay));i.bloom=Math.max(0,i.bloom-r.spreadRecovery*o)}const t=this.gun;if(this.updating=!0,t.auto&&this.mouseHeld||this.triggerBuffer>0){const i=Math.max(0,-t.fireTimer);this.fire()&&(t.fireTimer=Math.max(0,t.fireTimer-i))}this.updating=!1;for(const i of Object.values(this.guns))i.fireTimer=Math.max(0,i.fireTimer);const n=this.adsHeld&&t.adsFov?t.adsFov:j.view.fov;this.player.camera.fov+=(n-this.player.camera.fov)*Math.min(1,e*10),this.player.camera.updateProjectionMatrix(),this.model.syncPerspective(),t.reloading&&(t.reloadTimer=Math.max(0,t.reloadTimer-e),this.player.gunGroup.rotation.x=-.6*Math.sin((1-t.reloadTimer/t.reloadTime)*Math.PI),t.reloadTimer===0&&(t.ammo=t.magSize,t.reloading=!1,this.player.gunGroup.rotation.x=0)),this.effects.update(e,{weaponKey:t.key,ads:this.adsHeld,reloading:t.reloading,sprinting:!!(this.player.keys?.ShiftLeft||this.player.keys?.ShiftRight)})}getUpgradePreview(e,t=this.active){return Tu(this.guns[t],e)}applyUpgrade(e,t=this.active){return ty(this.guns[t],e)}getAmmoText(){const e=this.gun;return e.reloading?"换弹中…":e.ammo+" / "+e.magSize}getReloadHint(){return this.gun.reloading?"换弹中…":"R 换弹 · 备用弹无限"}getGunName(){return this.gun.label}getGunDisplay(){return this.gun.label+"（"+(this.keys.indexOf(this.active)+1)+"）"}resetUpgrades(){this.setEnabled(!1),this.clearProjectiles(),this.recoil.reset(),this.unlocked=new Set(["pistol"]),this.guns={pistol:this.makeGun("pistol")},this.active="pistol",this.shotId=0,this.effects.reset(),this.player.gunGroup.rotation.x=0,this.updateModel()}}function iy(s){const e=new Map,t=new Map,n=s.clone();return Eu(s,n,function(i,r){e.set(r,i),t.set(i,r)}),n.traverse(function(i){if(!i.isSkinnedMesh)return;const r=i,o=e.get(i),a=o.skeleton.bones;r.skeleton=o.skeleton.clone(),r.bindMatrix.copy(o.bindMatrix),r.skeleton.bones=a.map(function(l){return t.get(l)}),r.bind(r.skeleton,r.bindMatrix)}),n}function Eu(s,e,t){t(s,e);for(let n=0;n<s.children.length;n++)Eu(s.children[n],e.children[n],t)}if(typeof document<"u"&&document.fonts)try{document.fonts.load("24px PixelDamage")}catch{}function sy(s){return`${s}px PixelDamage, monospace`}function Au(s,e){return/[^\x00-\x7F]/.test(e)?`bold ${s}px 'Segoe UI', sans-serif`:sy(s)}function Ru(s,{size:e=48,color:t="#ff3b30"}={}){const n=document.createElement("canvas");n.width=256,n.height=128,ry(n,s,e,t);const i=new tr(n);i.minFilter=St,i.magFilter=St,i.generateMipmaps=!1;const r=new nu({map:i,depthTest:!1,transparent:!0}),o=new r_(r);return o.scale.set(.9,.45,1),o}function Cu(s,e,{size:t=48,color:n="#ff3b30"}={}){const i=document.createElement("canvas");i.width=256,i.height=128;const r=i.getContext("2d");r.imageSmoothingEnabled=!1,r.font=Au(t,e),r.textAlign="center",r.textBaseline="middle",r.fillStyle=n,r.fillText(e,128,64);const o=s.material.map;s.material.map=new tr(i),s.material.map.minFilter=St,s.material.map.magFilter=St,s.material.map.generateMipmaps=!1,s.material.needsUpdate=!0,o&&o.dispose()}function ry(s,e,t,n){const i=s.getContext("2d");return i.imageSmoothingEnabled=!1,i.font=Au(t,e),i.textAlign="center",i.textBaseline="middle",i.fillStyle=n,i.fillText(e,128,64),i}class oy{constructor(e,t=[]){this.scene=e,this.pool=t}spawn(e,t,n="#ff3b30",i=48){const r=Ru(e,{color:n,size:i});r.position.copy(t),r.position.y+=1.2,r.userData={life:.7,vy:2},this.scene.add(r),this.pool.push(r)}update(e){for(let t=this.pool.length-1;t>=0;t--){const n=this.pool[t];n.userData.life-=e,n.position.y+=n.userData.vy*e,n.material.opacity=Math.max(0,n.userData.life/.7),n.userData.life<=0&&(this.scene.remove(n),n.material.map.dispose(),n.material.dispose(),this.pool.splice(t,1))}}clear(){for(const e of this.pool)this.scene.remove(e),e.material.map.dispose(),e.material.dispose();this.pool.length=0}}const ay=new yu,Pu=new Map;function ly(){const s=new Set;for(const e of Object.keys(j.enemy)){const t=j.enemy[e];t.modelPath&&s.add(t.modelPath)}return Promise.allSettled([...s].map(e=>ay.loadAsync(e).then(t=>{Pu.set(e,t),console.log(`✅ 模型加载完成: ${e}`)}).catch(t=>{console.warn(`⚠️ 模型加载失败: ${e}`,t)})))}function cy(s){return Pu.get(s)||null}function hy(s,e,t){const n=j.enemy[s],i=new Rt;i.userData.isEnemyPlaceholder=!0,t.add(i);const r=new Oe(new bi(n.size,.12),new yt({color:2280516}));r.position.y=n.size+.3,r.userData.isHpBar=!0,i.add(r);const o=Ru(`${Math.ceil(n.hp*e)}`,{color:"#ff8888",size:40});o.position.y=n.size+.7,o.userData.isHpText=!0,i.add(o),i.userData.isEnemy=!0,i.userData.enemyGroup=!0,i.userData.centerHeight=n.size/2;const a=n.hp*e,l={type:s,def:n,group:i,body:null,bones:[],spine:[],hpBar:r,hpText:o,hp:a,maxHp:a,fireTimer:n.fireInterval?Math.random()*n.fireInterval:0,state:"seek",stateTimer:0,ringTimer:n.behavior==="boss"?j.boss.ringEvery:0,summonTimer:n.behavior==="boss"?5:0,orbitTimer:0,orbitDir:1,chargeDir:new M,mixer:null,action:null,animTime:0,_pendingModel:!1,dead:!1,deathTimer:0,deathState:"none"};if(i.userData.enemyRef=l,n.modelPath){const c=cy(n.modelPath);c?uy(l,c,t,s,e,n):(dh(l,t),console.warn(`⚠️ 模型未就绪: ${n.modelPath}，使用方块`))}else dh(l,t);return l}function dh(s,e){const t=s.def,n=new Oe(new Gt(t.size,t.size,t.size),El(t.color));n.position.y=t.size/2,n.castShadow=!0,kx(n,1.03),s.group.add(n),py(s.group,t),s.body=n,e.add(s.group)}function uy(s,e,t,n,i,r){s.sharedGeometry=!0;const o=iy(e.scene);o.traverse(f=>{f.isSkinnedMesh&&(f.frustumCulled=!1)}),o.traverse(f=>{f.isMesh&&(f.material&&(f.material=f.material.clone(),f.material.transparent=!1,f.material.opacity=1,f.material.depthWrite=!0,f.material.alphaTest=0,f.material.side=vn,f.castShadow=!0,f.receiveShadow=!0),f.userData.isEnemyMesh=!0)});const a=[];for(const f of s.group.children)f.userData.isHpBar||f.userData.isHpText||a.push(f);for(const f of a)f.userData.isOutline&&(f.geometry.dispose(),f.material.dispose()),s.group.remove(f);const l=new Ht;o.traverse(f=>{!f.isMesh||!f.geometry||(f.geometry.computeBoundingBox(),f.geometry.boundingBox&&l.union(f.geometry.boundingBox))});const c=l.max.y-l.min.y,h=c>0?r.size/c:1;o.scale.setScalar(h),s.group.add(o),s.body=o,s.bodyMeshes=[],o.traverse(f=>{f.isMesh&&!f.userData.isOutline&&s.bodyMeshes.push(f)}),s.bones=[],o.traverse(f=>{f.isBone&&s.bones.push(f)});const u=new xl(r.size*.35,r.size*.5,4,8),d=new yt({visible:!1});s.collisionMesh=new Oe(u,d),s.collisionMesh.position.y=r.size/2,s.group.add(s.collisionMesh),dy(o,n,r),fy(o),e.animations&&e.animations.length>0&&(s.mixer=new iv(o),s.action=s.mixer.clipAction(e.animations[0]),s.action.loop=Fh,s.action.play()),s.group.userData.centerHeight=r.size/2,s.hpBar.position.y=r.size+.3,s.hpText.position.y=r.size+.7,Cu(s.hpText,`${Math.ceil(r.hp*i)}`,{color:"#ff8888",size:40})}function dy(s,e,t){const i={small:15158332,tank:10181046,spitter:3066993,splitter:15965202,minibug:16101441,charger:15478628,boss:1752220}[e]??t.color;s.traverse(r=>{if(!r.isMesh||!r.material)return;const o=r.name.toLowerCase();(o.includes("skin")||o.includes("torso")||o.includes("belt")||o.includes("ear")||o.includes("thigh")||o.includes("shin")||o.includes("foot")||o.includes("uarm")||o.includes("farm")||o.includes("hand")||o.includes("surface")||o.includes("joints"))&&r.material.color.setHex(i),o.includes("horn")&&r.material.color.setHex(9116186)})}function fy(s){const e=new yt({color:16772676});s.traverse(t=>{if(!t.isMesh)return;const n=t.name.toLowerCase();(n==="eye_l"||n==="eye_r"||n.includes("eye"))&&(t.material=e)})}function py(s,e){const t=new si(e.size*.09,8,8),n=El(16777215,e.behavior==="boss"?16720384:16763904,2),i=e.size*.28,r=e.size*.5,o=e.size*.62,a=new Oe(t,n);a.position.set(-i,o,r);const l=new Oe(t,n);if(l.position.set(i,o,r),s.add(a,l),e.behavior==="boss"){const c=new io(e.size*.18,e.size*.5,6),h=new rn({color:16119285}),u=new Oe(c,h);u.position.set(-e.size*.4,e.size+.1,0),u.rotation.z=.5;const d=new Oe(c,h);d.position.set(e.size*.4,e.size+.1,0),d.rotation.z=-.5,s.add(u,d)}}const my=[["head",/Head/i],["body",/Hips|Spine|Neck|Shoulder/i],["limb",/Arm|Hand|Index|Middle|Pinky|Ring|Thumb|UpLeg|Leg|Foot|Toe/i]];function gy(s){if(!s)return null;for(const[e,t]of my)if(t.test(s))return e;return null}function _y(s,e){const t=s?.geometry?.attributes?.skinIndex,n=s?.geometry?.attributes?.skinWeight,i=s?.skeleton;if(!t||!n||!i||!e)return null;const r=new Map;for(const l of[e.a,e.b,e.c])for(let c=0;c<4;c++){const h=n.getComponent(l,c);if(h<=0)continue;const u=i.bones[t.getComponent(l,c)]?.name;u&&r.set(u,(r.get(u)??0)+h)}let o=null,a=-1;for(const[l,c]of r)c>a&&(a=c,o=l);return o}function Iu(s,e){return s.def.hitZone?gy(_y(e?.mesh,e?.face)):null}function vy(s,e){const t=s.def.hitZone;if(!t)return 1;const n=Iu(s,e);return n?t.mult[n]??1:1}const xi=[],xy=200;let Lu=null;function yy(s){Lu=s}function My(s,e,t=15){const n=Lu;if(n)for(let i=0;i<t&&xi.length<xy;i++){const r=new yt({color:e,transparent:!0}),o={mesh:new Oe(new Gt(.06,.06,.06),r),vel:new M,life:0};o.mesh.material.color.setHex(e),o.mesh.position.copy(s),o.mesh.position.x+=(Math.random()-.5)*.3,o.mesh.position.y+=Math.random()*.5,o.mesh.position.z+=(Math.random()-.5)*.3,o.vel.set((Math.random()-.5)*4,Math.random()*3+1,(Math.random()-.5)*4),o.life=.8+Math.random()*.4,o.mesh.visible=!0,n.add(o.mesh),o.mesh.material.opacity=1,xi.push(o)}}function Sy(s){for(let e=xi.length-1;e>=0;e--){const t=xi[e];if(t.life-=s,t.life<=0){t.mesh.removeFromParent(),t.mesh.material.dispose(),t.mesh.geometry.dispose(),xi.splice(e,1);continue}t.vel.y-=9.8*s,t.mesh.position.addScaledVector(t.vel,s),t.mesh.rotation.x+=s*5,t.mesh.rotation.z+=s*3;const n=Math.max(0,t.life/.8);t.mesh.material.opacity=n,t.mesh.scale.setScalar(.5+n*.5)}}function by(){for(const s of xi)s.mesh.removeFromParent(),s.mesh.geometry.dispose(),s.mesh.material.dispose();xi.length=0}function wy(s,e,t){return s.hp-=e,Cu(s.hpText,`${Math.max(0,Math.ceil(s.hp))}`,{color:"#ff8888",size:40}),s.body&&(s.body.traverse(n=>{n.isMesh&&n.material&&!n.userData.isOutline&&n.material.emissive&&n.material.emissive.setHex(6693376)}),s.hitFlashTimer=.08),s.hp<=0?(Ty(s),!0):!1}function Ty(s,e){if(s.dead)return;s.dead=!0,s.deathState="hit",s.deathTimer=0,s.deathBaseY=s.group.position.y,s.body&&s.body.traverse(n=>{n.isMesh&&n.material&&!n.userData.isOutline&&n.material.emissive&&n.material.emissive.setHex(16711680)});const t=s.group.position.clone();t.y+=s.def.size*.4,My(t,s.def.color,18)}function Ey(s,e){if(s.dead){if(s.deathTimer+=e,s.deathState==="hit")s.deathTimer>=.15&&(s.deathState="falling",s.deathTimer=0,s.body&&s.body.traverse(t=>{t.isMesh&&t.material&&!t.userData.isOutline&&t.material.emissive&&t.material.emissive.setHex(0)}));else if(s.deathState==="falling"){const t=Math.min(1,s.deathTimer/.4),n=1-Math.pow(1-t,3);s.group.rotation.x=n*(Math.PI/2),s.group.position.y=s.deathBaseY-n*.05,t>=1&&(s.deathState="vanish",s.deathTimer=0)}else if(s.deathState==="vanish"){const t=Math.min(1,s.deathTimer/.3);s.body&&s.body.traverse(n=>{n.isMesh&&n.material&&(n.material.transparent=!0,n.material.opacity=1-t)}),s.hpBar&&s.hpBar.material&&(s.hpBar.material.opacity=1-t),t>=1&&(s.deathState="done")}}}function Ay(s,e){s.hitFlashTimer>0&&!s.dead&&(s.hitFlashTimer-=e,s.hitFlashTimer<=0&&s.body?.traverse(t=>{t.userData.isOutline||t.material?.emissive?.setHex(0)})),s.mixer&&s.mixer.update(e),Ey(s,e)}function Ry(s,e){e&&s.hpBar.quaternion.copy(e.quaternion),s.hpBar.scale.x=Math.max(0,s.hp/s.maxHp)}function fh(s){return s.group.position.clone().add(new M(0,s.group.userData.centerHeight,0))}class Cy{constructor(e){this.group=new Rt,e.add(this.group)}add(e){const t=j.enemy.spawnMarker,n=new Oe(new yl(t.ringInner,t.ringOuter,32),new yt({color:t.color,transparent:!0,opacity:.85,side:Qt,depthWrite:!1}));n.rotation.x=-Math.PI/2,n.position.set(e.pos.x,e.pos.y+.03,e.pos.z);const i=new Oe(new wi(t.ringInner,t.ringInner,t.pillarHeight,20,1,!0),new yt({color:t.color,transparent:!0,opacity:.22,side:Qt,depthWrite:!1}));i.position.set(e.pos.x,e.pos.y+t.pillarHeight/2,e.pos.z);const r=new Rt;return r.add(n,i),r.userData={age:0,desc:e},this.group.add(r),r}update(e,t){for(const n of[...this.group.children]){n.userData.age+=e;const i=n.userData.age,r=1+Math.sin(i*10)*.18;n.children[0].scale.set(r,1,r),i>=j.enemy.spawnWarningTime&&(t(n.userData.desc),this.remove(n))}}remove(e){this.group.remove(e);for(const t of e.children)t.geometry.dispose(),t.material.dispose()}clear(){for(const e of[...this.group.children])this.remove(e)}}function Py(s,e,t,n){const i=e.clone().sub(s),r=s.clone().sub(t),o=r.lengthSq()-n*n;if(o<=0)return 0;const a=i.lengthSq();if(a<1e-6)return null;const l=r.dot(i),c=l*l-a*o;if(c<0)return null;const h=(-l-Math.sqrt(c))/a;return h>=0&&h<=1?h:null}class Iy{constructor(e,t){this.scene=e,this.events=t,this.items=[],this.geometry=new si(j.projectile.radius,10,10),this.material=new rn({color:3066993,emissive:934948})}create(e,t,n){const i=Yt.clamp(e.clone().setY(0).distanceTo(t.clone().setY(0))/j.projectile.speed,.5,2),r=t.clone().sub(e).divideScalar(i);r.y+=.5*j.projectile.gravity*i;const o=new Oe(this.geometry,this.material);return o.position.copy(e),this.scene.add(o),{mesh:o,vel:r,life:j.projectile.ttl,damage:n}}fire(e,t,n){this.items.push(this.create(e,t,n))}ring(e){for(let t=0;t<j.boss.ringCount;t++){const n=t/j.boss.ringCount*Math.PI*2,i=e.clone().add(new M(Math.cos(n),0,Math.sin(n)).multiplyScalar(15)),r=this.create(e,i,j.enemy.spitter.projDamage);r.vel.y=2,this.items.push(r)}}update(e,t){const n=j.projectile;for(let i=this.items.length-1;i>=0;i--){const r=this.items[i],o=r.mesh.position.clone(),a=o.clone().addScaledVector(r.vel,e),l=this.events.world?this.events.world.raycast(o,a,n.radius):Al(o,a,this.events.obstacles,n.radius),c=Py(o,a,t,n.playerHitRadius+n.radius),h=o.distanceTo(a);if(l&&(c===null||l.distance<=c*h)){this.remove(i);continue}r.mesh.position.copy(a),r.vel.y-=n.gravity*e,r.life-=e,c!==null?(r.mesh.position.copy(o).lerp(a,c),this.events.onProjectileHit?.(r),this.remove(i)):(r.life<=0||a.y<-5)&&this.remove(i)}}remove(e){this.scene.remove(this.items[e].mesh),this.items.splice(e,1)}clear(){for(const e of this.items)this.scene.remove(e.mesh);this.items.length=0}}function Za(s,e){return{radius:s==="small"?.42:e.size*.71,height:s==="boss"?e.size*1.3:e.size}}function ea(s,e,t,n,i=s.def.speed){const r=s.motor;let o=e.clone();n.player.supportId==="train"&&s.type==="boss"&&(o=n.train.getBossInterceptionTarget());const a=r.supportId==="train",l=n.player.supportId==="train",c=`${a}:${l}:${n.train.doorsOpen}`,h=s.routeTag!==c;h&&(s.routeTag=c,s.pathTimer=0),s.pathTimer=(s.pathTimer||0)-t;let u=!1;const d=a&&l&&Math.abs(o.y-r.position.y)<=1,f=!s.pathGoal||s.pathGoal.distanceToSquared(o)>.04;if(h||!s.pathGoal||d||s.pathTimer<=0&&(f||!s.path?.length||s.pathBlockedTime>.2)){const v=o.clone();let R=null;if(s.type!=="boss"&&(l||a))if(a&&l){if(R=[o],Math.abs(o.y-r.position.y)>1&&s.radius>.6){const E=n.train.getBoardingPortals(s.radius),C=r.position.y>2.8?"roof":"interior",P=[];for(const T of E.filter(b=>b.kind===C))for(const b of E.filter(I=>I.kind!==C)){const I=n.navigation.findPath(T.outside,b.outside,s.radius,s.height);if(!I.length)continue;const k=[T.inside,T.outside,...I,b.inside,o];let O=r.position,H=0;for(const K of k)H+=O.distanceTo(K),O=K;P.push({path:k,length:H})}P.sort((T,b)=>T.length-b.length),R=P[0]?.path||[r.position.clone()]}}else if(a){const E=n.train.getBoardingPortals(s.radius).filter(C=>C.kind===(r.position.y>2.8?"roof":"interior"));E.sort((C,P)=>C.inside.distanceToSquared(r.position)-P.inside.distanceToSquared(r.position)),R=E.length?[E[0].inside,E[0].outside,...n.navigation.findPath(E[0].outside,o,s.radius,s.height)]:[r.position.clone()]}else{const E=n.train.getBoardingRoute(r.position,o,s.radius);if(E?.length){const C=n.navigation.findPath(r.position,E[0],s.radius,s.height);R=C.length?[...C,...E]:null}R?.length||(o=n.train.getInterceptionTarget())}s.path=R?.length?R:n.navigation.findPath(r.position,o,s.radius,s.height),s.pathGoal=v,s.pathPhase??=Math.random()*.3,s.pathTimer=.5+s.pathPhase,s.pathBlockedTime=0,u=!0}const _=s.path||[];for(;_.length>1&&(u||r.position.distanceTo(_[0])<.8)&&n.navigation.clear(r.position,_[1],s.radius,s.height,a||l?null:"train");)_.shift();let g=_[0]||r.position;if(r.supportId==="train"&&s.radius<=.6&&Math.abs(o.y-r.position.y)>1){const v=n.train.getLadders().sort((R,E)=>r.position.distanceToSquared(o.y>r.position.y?R.bottom:R.top)-r.position.distanceToSquared(o.y>r.position.y?E.bottom:E.top));for(const R of v.slice(0,1)){const E=o.y>r.position.y,C=E?R.bottom:R.top;r.position.distanceTo(C)<1.2&&r.startClimb(E?R.top:R.bottom,1.3,"train",{waypoints:E?R.waypoints:R.downWaypoints}),r.traversal||(g=C)}}const m=g.clone().sub(r.position).setY(0),p=m.length();p>.005?m.normalize():m.set(0,0,0);const x=r.position.clone();r.update(t,{move:m,speed:Math.min(i,p/t)});const y=Math.min(i*t,p||i*t);s.pathBlockedTime=(p>.01||_.length>1)&&r.position.distanceTo(x)<y*.15?(s.pathBlockedTime||0)+t:0,s.group.position.copy(r.position),m.lengthSq()&&(s.group.rotation.y=Math.atan2(m.x,m.z))}function ph(s,e){s.body?.traverse(t=>{t.userData.isOutline||t.material?.emissive?.setHex(e)})}function Ly(s,e,t){if(s.dead)return;const n=t.player.footPosition,i=s.group.position.distanceTo(n),r=Math.abs(s.group.position.y-n.y)<.9;if(s.def.behavior==="charger"&&r)s.state==="seek"&&i<s.def.standRange&&(s.state="telegraph",s.stateTimer=s.def.telegraphTime),s.state==="telegraph"?(s.stateTimer-=e,ph(s,Math.sin(s.stateTimer*18)>0?16733440:5574912),s.motor.update(e,{move:new M,speed:0}),s.stateTimer<=0&&(s.chargeDir.copy(n).sub(s.motor.position).setY(0).normalize(),s.state="charge",s.stateTimer=s.def.chargeTime)):s.state==="charge"?(s.stateTimer-=e,s.motor.update(e,{move:s.chargeDir,speed:s.def.chargeSpeed}),s.stateTimer<=0&&(s.state="recover",s.stateTimer=s.def.chargeCd,ph(s,0))):(ea(s,n,e,t,s.def.speed*(s.state==="recover"?.5:1)),s.state==="recover"&&(s.stateTimer-=e)<=0&&(s.state="seek")),s.group.position.copy(s.motor.position);else if(s.def.behavior==="spitter"){const o=s.group.position.clone().add(new M(0,s.height*.65,0)),a=t.world.raycast(o,t.player.pos);i>s.def.standRange||a||i<5?ea(s,n,e,t):(s.motor.update(e,{move:new M,speed:0}),s.group.position.copy(s.motor.position)),s.fireTimer-=e,i<30&&s.fireTimer<=0&&(s.fireTimer=s.def.fireInterval,t.fireProjectile(s,t.player.pos))}else ea(s,n,e,t),s.def.behavior==="boss"&&(s.ringTimer-=e,s.summonTimer-=e,s.aimTimer=(s.aimTimer??0)-e,s.ringTimer<=0&&(s.ringTimer=j.boss.ringEvery,t.bossRing(s)),s.aimTimer<=0&&(s.aimTimer=2.4,t.fireProjectile(s,t.player.pos)),s.summonTimer<=0&&(s.summonTimer=j.boss.summonEvery,t.summon(s.group.position)))}function Dy(s,e,t){if(s.dead)return!1;const n=s.group.position,i=e.footPosition;return n.y+s.height<i.y+.15||i.y+j.player.bodyHeight<n.y+.15||Math.hypot(n.x-i.x,n.z-i.z)>s.radius+j.player.radius+.3?!1:!t.raycast(n.clone().add(new M(0,s.height*.6,0)),i.clone().add(new M(0,.9,0)))}function Uy(s,e,t,n,i){if(s.supportId!=="train")return s.footPosition;if(t!=="boss"&&e.doorsOpen){const r=e.getBoardingRoute(n,s.footPosition,i);if(r.length)return r[0]}return t==="boss"?e.getBossInterceptionTarget():e.getInterceptionTarget()}function Ny(s,e,t,n,i,r,o,{type:a}={}){const[l,c]=j.enemy.spawnDistance,h=n.forward,u=[];for(const d of s.spawnPoints){const f=new M(d.x,d.y,d.z),_=f.distanceTo(n.footPosition);if(_<l||_>j.enemy.maxSpawnDistance||!e.capsuleClear(f,i,r))continue;const g=f.clone().sub(n.footPosition).setY(0).normalize(),m=f.clone().add(new M(0,r*.6,0));if(!(g.dot(h)<.3||!!e.raycast(n.pos,m)))continue;const x=Uy(n,o,a,f,i),y=f.x-n.footPosition.x,v=f.z-n.footPosition.z,R=`${Math.abs(y)>Math.abs(v)*.45?y<0?"西":"东":""}${Math.abs(v)>Math.abs(y)*.45?v<0?"北":"南":""}`,E=d.label||s.regions.find(C=>C.id===d.region)?.label||"街口";u.push({point:f,target:x,label:`${E} · ${R}侧`,score:Math.abs(_-32)+Math.max(0,_-c)*3+Math.random()*8})}return u.sort((d,f)=>d.score-f.score),u.find(({point:d,target:f})=>t.findPath(d,f,i,r).length||d.distanceTo(f)<=2)||null}function Fy(s){let e=Math.random()*100;for(const t of j.wave.table.filter(n=>s>=n.fromWave)){if(e<t.weight)return t.type;e-=t.weight}return"small"}const Oy={1:"怪物会袭击你。观察预警，用巷道和高低差摆脱包围。",2:"前进＋空格可翻越低障碍或抓边攀上；动作期间仍会受伤。",3:"血牛缓慢但耐打。补给箱已放在附近的安全落点。",4:"喷吐者能攻击高处和列车窗口，利用实心掩体挡弹。",5:"分裂体死亡会产生碎片，留意平台和车内的近身威胁。",6:"冲刺者蓄力时侧移，楼梯与车门都不是永久安全点。",7:"混合追击！列车可以转移阵地，也可能撞伤你。",8:"最终波：击败Boss、护卫和召唤物。Boss能追上天桥，也能远程攻击车顶。"},rs=1e-4;function By(s,e,t){const n=s?.motor;return!n||s.dead||s.hp===0||!(n.radius>0)||!(n.height>0)?null:{actor:s,motor:n,index:e,radius:n.radius,height:n.height,budget:t,weight:n.traversal?0:Math.max(0,s.crowdWeight??1),changed:!1}}function zy(s,e,t){if(!s.motor.grounded||!e.motor.grounded)return!1;const n=s.motor.position,i=e.motor.position,r=Math.max(1,Math.ceil(n.distanceTo(i)/.25)),o={radius:Math.min(s.radius,e.radius),height:Math.min(s.height,e.height),maxRise:.3,maxDrop:.35,maxSlope:Math.min(s.motor.maxSlope,e.motor.maxSlope)};let a=n.y;for(let l=1;l<=r;l++){const c=n.clone().lerp(i,l/r).setY(a),h=t.querySupport(c,o);if(!h)return!1;a=h.height}return Math.abs(a-i.y)<.1}function ky(s,e,t,n){const i=s.motor.position,r=e.motor.position;if(Math.min(i.y+s.height,r.y+e.height)-Math.max(i.y,r.y)<=.05)return null;const o=i.clone().sub(r).setY(0),a=o.length(),l=s.radius+e.radius+n-a;if(l<=rs||t.raycast(i.clone().add(new M(0,.08,0)),r.clone().add(new M(0,.08,0)))&&!zy(s,e,t))return null;if(a>rs)o.divideScalar(a);else{const c=(s.index*2.399963+e.index*1.618034)%(Math.PI*2);o.set(Math.cos(c),0,Math.sin(c))}return{normal:o,depth:l}}function ta(s,e,t,n){if(!s.weight||s.budget<=rs||t<=rs)return 0;const i=s.motor,r=i.position,o=Math.min(t,s.budget),a={radius:s.radius,height:s.height,stepHeight:Math.min(.3,i.stepHeight??.3),maxSlope:i.maxSlope??Math.PI/4},l=n.moveCharacter(r,e.clone().multiplyScalar(o),{...a,snapToGround:i.grounded}),c=l.position.clone().sub(r),h=c.dot(e);if(h<=rs||Math.abs(c.y)>a.stepHeight+.025||!n.capsuleClear(l.position.clone().add(new M(0,.002,0)),s.radius,s.height))return 0;const u=i.grounded&&n.querySupport(l.position,{...a,maxRise:.03,maxDrop:.07});return i.grounded&&!u?0:(i.position.copy(l.position),u&&(i.position.y=u.height,i.attach(u)),s.budget=Math.max(0,s.budget-c.length()),s.changed=!0,Math.min(o,h))}function Hy(s,e,t,{iterations:n=4,speed:i=10,skin:r=.01}={}){if(!(t>0)||!Number.isFinite(t))return{contacts:0,movedActors:0};const o=e.map((c,h)=>By(c,h,i*Math.min(t,.05))).filter(Boolean);let a=0;for(let c=0;c<n;c++){let h=!1;for(let u=0;u<o.length;u++)for(let d=u+1;d<o.length;d++){const f=o[u],_=o[d];if(!(f.weight+_.weight))continue;const g=ky(f,_,s,r);if(!g)continue;a++;const m=(f.weight?f.budget:0)+(_.weight?_.budget:0),p=Math.min(g.depth,m),x=p*f.weight/(f.weight+_.weight);let y=ta(f,g.normal,x,s);y+=ta(_,g.normal.clone().negate(),p-y,s),y<p&&(y+=ta(f,g.normal,p-y,s)),h||=y>rs}if(!h)break}let l=0;for(const c of o)c.changed&&(c.actor.group?.position.copy(c.motor.position),c.actor.syncCamera?.(),l++);return{contacts:a,movedActors:l}}class Vy{constructor(e,t={}){this.scene=e,this.events=t,this.world=t.world,this.navigation=t.navigation,this.enemies=[],this.warnings=new Cy(e),this.markers=this.warnings.group,this.projectileSystem=new Iy(e,t),this.projectiles=this.projectileSystem.items,this.clear()}get toSpawn(){return this.spawnQueue.length}get waveNumber(){return Math.max(1,this.wave)}get activeCount(){return this.enemies.filter(e=>!e.dead).length}getGroups(){return this.enemies.filter(e=>!e.dead).map(e=>e.group)}getMeshes(){const e=[];for(const t of this.enemies)t.dead||t.body?.traverse(n=>{n.isMesh&&!n.userData.isOutline&&e.push(n)});return e}startWave(){if(this.phase!=="preparation"||this.wave>=j.goal.winWave)return!1;this.wave++,this.phase="combat",this.spawnTimer=0,this.preparationTimer=0;const e=this.wave===j.goal.winWave;this.spawnQueue=Array.from({length:e?j.wave.finalEscortCount:ov(this.wave)},()=>Fy(this.wave));const t={3:"tank",4:"spitter",5:"splitter",6:"charger"}[this.wave];return t&&(this.spawnQueue[0]=t),e&&this.spawnQueue.unshift("boss"),[3,6].includes(this.wave)&&this.spawnCrate(this.events.player.footPosition),this.events.onWaveStarted?.({wave:this.wave,directions:this.lastDirection,hint:Oy[this.wave]}),!0}spawnOne(){if(!this.toSpawn)return!1;const e=this.spawnQueue[0],t=Za(e,j.enemy[e]),n=Ny(this.events.layout,this.world,this.navigation,this.events.player,t.radius,t.height,this.events.train,{type:e});return n?(this.lastDirection=n.label,this.spawnQueue.shift(),this.createSpawnMarker(e,n.point),!0):!1}createSpawnMarker(e,t){return this.warnings.add({type:e,pos:t.clone()})}materializeSpawn(e){const t=Za(e.type,j.enemy[e.type]);if(!this.world.capsuleClear(e.pos,t.radius,t.height))return this.spawnQueue.unshift(e.type),null;const n=hy(e.type,1,this.scene);return Object.assign(n,t),n.motor=new xu(this.world,{...t,speed:n.def.speed,stepHeight:.3}),n.motor.reset(e.pos),n.group.position.copy(n.motor.position),this.enemies.push(n),n}spawnMinibugs(e){for(const t of[-1,1]){if(this.activeCount+this.markers.children.length>=j.enemy.maxAlive)return;const n=e.clone().add(new M(t*.65,0,0)),i=this.world.querySupport(n,{maxRise:.3,maxDrop:8,radius:.2,height:.4});i&&this.materializeSpawn({type:"minibug",pos:i.point})}}fireProjectile(e,t){this.projectileSystem.fire(fh(e),t,e.def.projDamage||18)}update(e){if(this.phase==="complete")return;if(this.updateCrate(e,this.events.player.pos),this.phase==="preparation"){this.preparationTimer=Math.max(0,this.preparationTimer-e),this.preparationTimer<=0&&this.startWave();return}this.spawnTimer-=e,this.toSpawn&&this.spawnTimer<=0&&this.activeCount+this.markers.children.length<j.enemy.maxAlive&&this.markers.children.length<j.enemy.maxSpawnMarkers&&this.spawnOne()&&(this.spawnTimer=j.wave.spawnInterval),this.warnings.update(e,n=>this.materializeSpawn(n));const t={world:this.world,navigation:this.navigation,train:this.events.train,player:this.events.player,fireProjectile:(n,i)=>this.fireProjectile(n,i),bossRing:n=>this.projectileSystem.ring(fh(n)),summon:n=>this.spawnMinibugs(n)};for(const n of[...this.enemies])n.dead&&n.motor.supportId==="train"&&(n.motor.carry(),n.group.position.x=n.motor.position.x,n.group.position.z=n.motor.position.z),Ay(n,e),Ly(n,e,t);Hy(this.world,[this.events.player,...this.enemies],e);for(const n of this.enemies)Ry(n,this.events.camera),Dy(n,this.events.player,this.world)&&this.events.onContact?.(n.def)&&this.events.onHurt?.(j.player.damageFromEnemy,this.events.player.pos);this.projectileSystem.update(e,this.events.player.pos),Sy(e);for(let n=this.enemies.length-1;n>=0;n--)this.enemies[n].dead&&this.enemies[n].deathState==="done"&&this.removeEnemy(n)}isWaveClear(){return this.phase==="combat"&&!this.toSpawn&&!this.markers.children.length&&!this.activeCount}finishWave(){if(!this.isWaveClear())return!1;this.projectileSystem.clear();for(let e=this.enemies.length-1;e>=0;e--)this.removeEnemy(e);return this.phase=this.wave===j.goal.winWave?"complete":"preparation",this.preparationTimer=this.phase==="preparation"?j.wave.preparationTime:0,!0}hurt(e,t,n="train"){if(e.dead)return;const i=Math.min(e.hp,t),r=e.group.position.clone();wy(e,t,this.scene)&&(e.def.behavior==="splitter"&&this.spawnMinibugs(r),this.events.onEnemyKilled?.(e,n)),this.events.onDamage?.(i,r,null,n)}onShotHit(e,t,n={}){const i=this.enemies.find(a=>a.body===e||a.group===e);if(!i||i.dead)return;const r=Iu(i,n),o=Math.max(1,Math.round(t*vy(i,n)*(n.weaponKey==="pistol"&&r==="head"?j.weapon.pistol.headshotMult:1)));if(r==="head"&&this.events.onHeadshot?.(i.group.position,o),n.knockback&&n.direction&&i.lastKnockbackShot!==n.shotId){i.lastKnockbackShot=n.shotId;const a=i.type==="boss"?0:i.type==="tank"?j.weapon.shotgun.tankKnockbackMult:1,l=this.world.moveCharacter(i.motor.position,n.direction.clone().setY(0).normalize().multiplyScalar(n.knockback*a),{radius:i.radius,height:i.height,stepHeight:.3,snapToGround:!0});i.motor.position.copy(l.position),i.group.position.copy(l.position),i.pathTimer=0}this.hurt(i,o,n.weaponKey)}spawnCrate(e){this.removeCrate();for(const t of[[3,0],[-3,0],[0,3],[0,-3]]){const n=e.clone().add(new M(t[0],0,t[1])),i=this.world.querySupport(n,{radius:.65,height:1.2,maxRise:.5,maxDrop:8});if(!i||!this.world.capsuleClear(i.point,.65,1.2))continue;const r=new Oe(new Gt(1.1,1.1,1.1),new rn({color:j.crate.color,emissive:1460806}));r.position.copy(i.point).add(new M(0,.6,0)),this.scene.add(r);const o=i.bodyId?this.world.getBody(i.bodyId):null;this.crate={mesh:r,base:i.point.clone(),bodyId:i.bodyId,local:o?i.point.clone().sub(o.position):null,spin:0};break}}updateCrate(e,t){if(!this.crate)return;const n=this.crate,i=n.bodyId&&this.world.getBody(n.bodyId);i&&n.base.copy(i.position).add(n.local),n.spin+=e,n.mesh.rotation.y+=e,n.mesh.position.copy(n.base).add(new M(0,.6+Math.sin(n.spin*2)*.1,0));const r=t.clone().sub(new M(0,1,0));n.mesh.position.distanceTo(r)<j.crate.collectRange&&!this.world.raycast(n.mesh.position,r)&&(this.events.onCrateCollected?.(n.mesh.position.clone()),this.removeCrate())}removeCrate(){this.crate&&(this.scene.remove(this.crate.mesh),this.crate.mesh.geometry.dispose(),this.crate.mesh.material.dispose(),this.crate=null)}removeEnemy(e){const t=this.enemies[e];this.scene.remove(t.group),t.mixer?.stopAllAction(),t.group.traverse(n=>{n.isSprite&&(n.material.map?.dispose(),n.material.dispose()),n.isMesh&&((!t.sharedGeometry||n===t.hpBar||n===t.collisionMesh)&&n.geometry.dispose(),Array.isArray(n.material)?n.material.forEach(i=>i.dispose()):n.material?.dispose())}),this.enemies.splice(e,1)}clear(){for(let e=this.enemies.length-1;e>=0;e--)this.removeEnemy(e);this.projectileSystem.clear(),this.warnings.clear(),this.removeCrate(),by(),this.wave=0,this.phase="preparation",this.preparationTimer=j.wave.preparationTime,this.spawnQueue=[],this.spawnTimer=0,this.lastDirection="附近街区"}getHudData(){return{wave:this.wave,waveTotal:j.goal.winWave,phase:this.phase,preparationRemaining:this.preparationTimer,directions:this.lastDirection,enemiesRemaining:this.activeCount+this.toSpawn+this.markers.children.length}}}function mh(s,e){s.userData.age+=e;const{age:t,ttl:n,fadeStart:i}=s.userData;return t>=i&&(s.material.transparent=!0,s.material.opacity=Math.max(0,(n-t)/(n-i))),t>=n}function Yi(s,e){s.remove(e),e.material.dispose()}class Gy{constructor(e,t,n=null){this.scene=e,this.player=t,this.world=n,this.pickups=[],this.heals=[],this.pickupGeo=new si(j.pickup.radius,12,12),this.pickupMat=new rn({color:15844367,emissive:9071872}),this.healGeo=new si(1,12,12),this.healMats={small:new rn({color:j.heal.small.color,emissive:5574929}),tank:new rn({color:j.heal.tank.color,emissive:5587968})}}spawnExperience(e,t=1){if(!Number.isFinite(t)||t<=0)return null;const n=this.dropPosition(e,.5),i=this.pickups.filter(o=>o.userData.bodyId===n.bodyId&&Math.abs(o.position.y-n.point.y)<.8);if(this.pickups.length>=Math.max(1,j.pickup.maxOrbs)&&i.length){const o=i.reduce((a,l)=>l.position.distanceToSquared(e)<a.position.distanceToSquared(e)?l:a);return o.userData.value+=t,o.userData.age=0,o.material.opacity=1,o}const r=new Oe(this.pickupGeo,this.pickupMat.clone());return r.position.copy(n.point),r.userData={age:0,ttl:j.pickup.ttl,fadeStart:j.pickup.fadeStart,value:t,...n.data},this.scene.add(r),this.pickups.push(r),r}spawnHeal(e,t){const n=j.heal[e];if(!n)return null;const i=new Oe(this.healGeo,this.healMats[e].clone());i.scale.setScalar(n.radius);const r=this.dropPosition(t,.6);return i.position.copy(r.point),i.userData={age:0,ttl:n.ttl,fadeStart:n.fadeStart,...r.data},this.scene.add(i),this.heals.push({mesh:i,kind:e}),i}updateExperience(e,t){const{magnetRange:n,collectRange:i}=j.pickup;let r=0;for(let o=this.pickups.length-1;o>=0;o--){const a=this.pickups[o];this.carry(a);const l=this.world?this.player.footPosition.clone().add(new M(0,.6,0)):t,c=new M(l.x-a.position.x,this.world?l.y-a.position.y:0,l.z-a.position.z),h=c.length();if(mh(a,e))Yi(this.scene,a),this.pickups.splice(o,1);else if(h<i&&this.visible(a.position,l))r+=a.userData.value,Yi(this.scene,a),this.pickups.splice(o,1);else if(h<n&&this.visible(a.position,l)){const u=10+(1-h/n)*26;a.position.addScaledVector(c,Math.min(h,u*e)/h);const d=a.userData.bodyId&&this.world?.getBody(a.userData.bodyId);d&&a.userData.local.copy(a.position).sub(d.position)}}return r}updateHeals(e,t,n){for(let i=this.heals.length-1;i>=0;i--){const{mesh:r,kind:o}=this.heals[i];this.carry(r);const a=this.world?this.player.footPosition.clone().add(new M(0,.6,0)):t,l=this.world?r.position.distanceTo(a):Math.hypot(r.position.x-t.x,r.position.z-t.z);if(mh(r,e))Yi(this.scene,r),this.heals.splice(i,1);else if(l<j.pickup.collectRange&&this.player.hp<this.player.maxHp&&this.visible(r.position,a)){const c=this.player.hp;this.player.hp=Math.min(this.player.maxHp,c+j.heal[o].value),n(r.position,this.player.hp-c),Yi(this.scene,r),this.heals.splice(i,1)}}}clearPickups(){for(const e of this.pickups)Yi(this.scene,e);this.pickups.length=0}visible(e,t){return!this.world||!this.world.raycast(e,t)}dropPosition(e,t){const n=new M(e.x+(Math.random()-.5)*.8,e.y,e.z+(Math.random()-.5)*.8),i=this.world?.querySupport(n,{radius:.1,height:.1,maxRise:.3,maxDrop:12}),r=i?i.point.clone().add(new M(0,t,0)):new M(n.x,this.world?e.y+t:t,n.z),o=i?.bodyId&&this.world?.getBody(i.bodyId);return{point:r,bodyId:i?.bodyId||null,data:{bodyId:i?.bodyId||null,local:o?r.clone().sub(o.position):null}}}carry(e){const t=e.userData.bodyId&&this.world?.getBody(e.userData.bodyId);t&&e.userData.local&&e.position.copy(t.position).add(e.userData.local)}clearHeals(){for(const{mesh:e}of this.heals)Yi(this.scene,e);this.heals.length=0}}const gh=new Set(["damage","rof","mag"]);class Wy{constructor(e,t,n,i=()=>{},r=()=>{},o=null){this.player=t,this.weapon=n,this.onUpgrade=i,this.onLevelUp=r,this.field=new Gy(e,t,o),this.reset()}get pickups(){return this.field.pickups}get heals(){return this.field.heals}reset(){this.clearPickups(),this.clearHeals(),this.xp=0,this.level=1,this.xpNext=j.levelup.xpForLevel,this.pendingUpgrades=0,this.upgrades=[],this.currentChoices=null,this.offersShown=0,this.weaponOffered=!1,this.totalXp=0}gainXp(e,t){for(let n=0;n<Math.floor(e);n++)this.spawnPickup(t)}spawnPickup(e,t=1){return this.field.spawnExperience(e,t)}spawnHeal(e,t){return this.field.spawnHeal(e,t)}clearPickups(){this.field.clearPickups()}clearHeals(){this.field.clearHeals()}updateHeals(e,t,n=()=>{}){this.field.updateHeals(e,t,n)}update(e,t){this.addXp(this.field.updateExperience(e,t))}collectAll(){const e=this.pickups.reduce((t,n)=>t+n.userData.value,0);return this.clearPickups(),this.addXp(e),e}addXp(e){if(!Number.isFinite(e)||e<=0)return;const t=Math.floor(e);for(this.xp+=t,this.totalXp+=t;this.xp>=this.xpNext;)this.levelUp()}levelUp(){return this.xp<this.xpNext?!1:(this.xp-=this.xpNext,this.xpNext=Math.floor(this.xpNext*j.levelup.xpGrowth),this.level++,this.pendingUpgrades++,this.player.healOrGrow(j.player.hpPerLevel),this.player.hp=this.player.maxHp,this.onLevelUp(this.level),!0)}describeChoice(e){const{key:t}=e;if(gh.has(t)){const n=this.weapon.active,i=this.weapon.getUpgradePreview(t,n);return i?{...e,...i,key:t,gunKey:n}:null}if(e.unlock)return this.weapon.unlocked.has(t)?null:{...e,description:`解锁并切换到${j.weapon[t].label}，各枪独立强化。`};if(t==="speed"){const n=(this.player.moveSpeed||j.player.moveSpeed)*this.player.speedMult;return{...e,description:`移动速度 ${n.toFixed(1)} → ${(n*1.1).toFixed(1)} 米/秒`}}if(t==="hp"){const n=j.levelup.hpBoost;return{...e,description:`最大生命 ${this.player.maxHp} → ${this.player.maxHp+n}，同时恢复 ${n} 点生命。`}}return null}rollChoices(e=3){if(this.pendingUpgrades<=0||e<=0)return[];if(this.currentChoices)return this.currentChoices;const t=j.levelup.choices.map(i=>this.describeChoice(i)).filter(Boolean),n=[];if(this.offersShown===1&&!this.weaponOffered){const i=t.filter(r=>r.unlock);if(i.length){const r=i[Math.floor(Math.random()*i.length)];n.push(t.splice(t.indexOf(r),1)[0])}}for(;n.length<e&&t.length;)n.push(t.splice(Math.floor(Math.random()*t.length),1)[0]);return this.offersShown++,n.some(i=>i.unlock)&&(this.weaponOffered=!0),this.currentChoices=n,n}applyChoice(e){if(this.pendingUpgrades<=0||!this.currentChoices)return!1;const t=typeof e=="string"?e:e?.key,n=this.currentChoices.find(r=>r.key===t);if(!n||typeof e=="object"&&e.gunKey!==void 0&&e.gunKey!==n.gunKey)return!1;let i=!1;return gh.has(t)?i=this.weapon.applyUpgrade(t,n.gunKey):n.unlock?i=this.weapon.unlock(t):t==="speed"?(this.player.speedMult*=1.1,i=!0):t==="hp"&&(this.player.healOrGrow(j.levelup.hpBoost),i=!0),i?(this.pendingUpgrades--,this.currentChoices=null,this.upgrades.push(`${n.name}：${n.description}`),this.onUpgrade(t,n),!0):!1}getHudData(){return{xp:this.xp,xpNext:this.xpNext,level:this.level,pendingUpgrades:this.pendingUpgrades}}}class Xy{constructor(e,t){this.canvas=e,this.context=e.getContext("2d"),this.layout=t}update(e){if(!e.playerPosition||!this.layout)return;const t=this.context,n=this.canvas.width,i=this.canvas.height,r=Math.min(n,i)/(this.layout.bounds*2+8),o=l=>n/2+l*r,a=l=>i/2+l*r;t.clearRect(0,0,n,i),t.fillStyle="#343640",t.fillRect(o(-60),a(-60),120*r,120*r);for(const l of this.layout.shapes)!l.solid||l.category==="ground"||!l.width||(t.fillStyle=l.category==="building"?"#79717b":l.type==="ramp"?"#bba77d":"#656675",t.fillRect(o(l.x-l.width/2),a(l.z-l.depth/2),l.width*r,l.depth*r));if(t.strokeStyle="#f5c573",t.lineWidth=2,t.beginPath(),t.moveTo(o(-60),a(0)),t.lineTo(o(60),a(0)),t.stroke(),e.trainPosition&&(t.fillStyle=e.trainWarning?"#f2957e":"#c6d5d4",t.fillRect(o(e.trainPosition.x-12),a(-1.8),24*r,3.6*r)),e.remainingEnemies?.length<=3)for(const l of e.remainingEnemies||[])t.fillStyle="#f19187",t.beginPath(),t.arc(o(l.x),a(l.z),2.2,0,Math.PI*2),t.fill();t.fillStyle="#b8efca",t.beginPath(),t.arc(o(e.playerPosition.x),a(e.playerPosition.z),3.3,0,Math.PI*2),t.fill(),t.fillStyle="#e3d5c3",t.font="10px sans-serif",t.fillText("西站",o(-52),a(-10)),t.fillText("东站",o(34),a(-10)),t.fillText("N",n/2-3,10)}}const qy={idle:"待命",preparation:"备战",combat:"交战",paused:"暂停",levelup:"强化",won:"胜利",dead:"结束"},Mt=s=>document.getElementById(s),gt=(s,e)=>{Mt(s).textContent=e};class $y{constructor(e){this.dmgFlashTimer=0,this.notificationTime=0,this.minimap=new Xy(Mt("minimap"),e)}update(e,t){gt("hud-wave",Math.max(1,e.wave)),gt("hud-phase",qy[e.phase]),gt("hud-kills",e.kills),gt("hud-remaining",e.enemiesRemaining??0),gt("hud-time",`${Math.floor(e.time/60)}:${String(Math.floor(e.time%60)).padStart(2,"0")}`),gt("hud-directions",e.directions?`来敌：${e.directions}`:"入口待命"),gt("hp-num",`${Math.ceil(e.hp)} / ${e.maxHp}`),gt("xp-num",`${e.xp} / ${e.xpNext}`),gt("hud-level",e.level),Mt("hp-fill").style.width=`${Math.max(0,e.hp/e.maxHp*100)}%`,Mt("xp-fill").style.width=`${Math.min(100,e.xp/e.xpNext*100)}%`,gt("hud-ammo",e.ammoHint),gt("hud-weapon",e.ammo),gt("hud-weapon-name",e.weaponName),gt("train-status",e.trainStatus||"西站停靠"),gt("train-detail",`${e.trainDoorsOpen?"车门开启":"车门关闭"} · 高度 ${(e.elevation||0).toFixed(1)}m${e.traversal?" · 跑酷中":""}`),Mt("train-status").closest(".train-panel").classList.toggle("danger",!!e.trainWarning),this.minimap.update(e),Mt("prep-panel").classList.toggle("hide",e.phase!=="preparation"),gt("prep-countdown",`第 ${e.nextWave} 波 · 备战 ${Math.ceil(e.preparationRemaining??0)} 秒`),this.dmgFlashTimer=Math.max(0,this.dmgFlashTimer-t),Mt("dmg-flash").style.opacity=Math.min(1,this.dmgFlashTimer/.3),this.notificationTime=Math.max(0,this.notificationTime-t),Mt("announcement").classList.toggle("hide",this.notificationTime<=0)}flashDamage(){this.dmgFlashTimer=.55}flashHeadshot(){const e=Mt("headshot-flash");e.classList.remove("show"),e.offsetWidth,e.classList.add("show")}notify(e,t=""){Mt("announcement").querySelector("strong").textContent=e,Mt("announcement").querySelector("span").textContent=t,this.notificationTime=7}showPause(e){Mt("pause-screen").classList.toggle("show",e)}hideOverlays(){for(const e of["start-screen","pause-screen","gameover-screen","levelup"])Mt(e).classList.remove("show");this.dmgFlashTimer=this.notificationTime=0,Mt("headshot-flash").classList.remove("show")}showLevelUp(e,t,n=1){const i=Mt("levelup-choices");i.replaceChildren(),Mt("levelup").classList.add("show"),gt("upgrade-count",n>1?`还有 ${n} 次强化，逐次选择`:"选择一项强化");let r=!1;for(const o of e){const a=document.createElement("button");a.type="button",a.className="choice";const l=document.createElement("strong"),c=document.createElement("span");l.textContent=o.name,c.textContent=o.description??"",a.append(l,c),a.onclick=()=>{r||(r=!0,Mt("levelup").classList.remove("show"),t(o))},i.append(a)}i.querySelector("button")?.focus()}showResult(e){const t=e.result==="won";gt("gameover-title",t?"活过暮色围城":"本次追击结束"),gt("result-reason",t?"八波敌人已清场，围城之王已被击败。":e.deathCause==="train"?"被列车撞击后阵亡。下次留意6秒灯声预警，在停站时登乘。":e.deathCause==="projectile"?"被远程弹丸击中后阵亡。利用实心掩体挡弹，留意窗口与高处的射界。":"被近身怪物击倒。利用翻越、高低差和霰弹击退，在换弹前留出退路。");const n=[[`${Math.max(1,e.wave)} / 8`,"到达波次"],[e.kills,"总击杀"],[`${(e.time/60).toFixed(1)} 分`,"作战用时"],[e.trainKills||0,"列车击杀"],[e.trainHits||0,"被列车撞击"],[e.upgrades.length,"已选强化"]];Mt("gameover-stats").replaceChildren(...n.map(([i,r])=>{const o=document.createElement("div");o.className="result-stat";const a=document.createElement("b"),l=document.createElement("span");return a.textContent=i,l.textContent=r,o.append(a,l),o})),gt("result-upgrades",`本局强化：${e.upgrades.length?e.upgrades.join(" · "):"尚未领取强化"}`),gt("result-weapons",Object.entries(e.weapons).map(([i,r])=>`${j.weapon[i].label}：${r.shots} 次开火 / ${Math.round(r.damage)} 伤害`).join("　")),Mt("gameover-screen").classList.add("show")}}class Yy{constructor(){this.reset()}reset(){this.elapsed=this.kills=this.trainHits=this.trainKills=0,this.waves=[],this.currentWave=null,this.weapons=Object.fromEntries(Object.keys(j.weapon).map(e=>[e,{shots:0,damage:0,useSeconds:0}]))}update(e,t){this.elapsed+=e,this.weapons[t].useSeconds+=e}startWave(e){this.currentWave={wave:e,startedAt:this.elapsed,startingKills:this.kills}}endWave(e="cleared"){this.currentWave&&(this.waves.push({wave:this.currentWave.wave,duration:this.elapsed-this.currentWave.startedAt,kills:this.kills-this.currentWave.startingKills,outcome:e}),this.currentWave=null)}result(e,t){return{version:2,map:"twilight-railway",result:t,wave:e.spawner.wave,kills:this.kills,time:this.elapsed,deathCause:t==="won"?null:e.player.lastDamage,trainHits:this.trainHits,trainKills:this.trainKills,upgrades:[...e.levelup.upgrades],waves:this.waves.map(n=>({...n})),weapons:structuredClone(this.weapons)}}}const jy=new Set(["preparation","combat"]);class Ky{constructor({player:e,weapon:t,spawner:n,levelup:i,train:r,hud:o,floats:a,arena:l}){Object.assign(this,{player:e,weapon:t,spawner:n,levelup:i,train:r,hud:o,floats:a,arena:l}),this.state="idle",this.resumeState="preparation",this.stats=new Yy,this.result=null,this.player.canLock=()=>this.state==="paused"}get active(){return jy.has(this.state)}setState(e){this.state=e;const t=this.active;this.player.setEnabled(t),this.weapon.setEnabled(t),!t&&this.player.controls?.isLocked&&this.player.controls.unlock(),this.hud.showPause(e==="paused"),this.train?.setActive?.(t)}start(){this.spawner.clear(),this.levelup.reset(),this.player.reset(),this.weapon.resetUpgrades(),this.train?.reset(),this.stats.reset(),this.floats.clear?.(),this.result=null,this.hud.hideOverlays(),this.resumeState="preparation",this.setState("paused"),this.resume()}resume(){this.state==="paused"&&(this.player.controls?.isLocked?this.handleLock():this.player.safeLock())}handleLock(){this.state==="paused"&&(this.player.clearInput(),this.weapon.clearInput(),this.setState(this.resumeState))}pause(){this.active&&(this.resumeState=this.spawner.phase,this.setState("paused"))}startNextWave(){if(this.state!=="preparation")return!1;const e=this.spawner.startWave();return e!==!1&&(this.state=this.spawner.phase),e!==!1}onWaveStarted(e){this.stats.startWave(e.wave),this.hud.notify(`第 ${e.wave} 波 · ${e.directions}`,e.hint)}finish(e){this.active&&(e!=="won"&&this.stats.endWave(e),this.result=this.stats.result(this,e),this.setState(e==="won"?"won":"dead"),this.hud.showResult(this.result))}offerUpgrade(){if(this.levelup.pendingUpgrades<=0)return;this.setState("levelup");const e=this.levelup.rollChoices(3);this.hud.showLevelUp(e,t=>{this.state!=="levelup"||!this.levelup.applyChoice(t)||(this.levelup.pendingUpgrades>0?this.offerUpgrade():(this.resumeState=this.spawner.phase,this.setState("paused"),this.resume()))},this.levelup.pendingUpgrades)}update(e){if(this.active){if(!this.player.controls?.isLocked){this.pause();return}if(this.stats.update(e,this.weapon.active),this.train?.update(e,this.arena.getActors?.()||[]),this.player.hp<=0){this.finish("player_dead");return}if(this.player.update(e,this.arena.halfSize,this.spawner.getGroups(),!1,this.arena.obstacles),this.weapon.update(e),this.weapon.beginProjectileFrame?.(),this.spawner.update(e,this.player.pos,this.arena.halfSize-.5),this.state=this.spawner.phase,this.player.hp<=0){this.finish("player_dead");return}if(this.weapon.updateProjectiles?.(e),this.spawner.isWaveClear()){this.stats.endWave(),this.levelup.collectAll();const t=this.spawner.wave===j.goal.winWave;if(this.weapon.clearProjectiles?.(),this.spawner.finishWave(),t){this.finish("won");return}this.state="preparation",this.hud.notify("本波清场 · 备战 15 秒","剩余经验已回收，可拾取补给或提前开波。")}this.levelup.update(e,this.player.pos),this.levelup.updateHeals(e,this.player.pos,(t,n)=>this.floats.spawn(`+${n}`,t,"#74e7ac")),this.floats.update(e),this.arena.update?.(e),this.levelup.pendingUpgrades>0&&this.offerUpgrade()}}getHudData(){return{...this.spawner.getHudData(),...this.levelup.getHudData(),...this.train?.getHudData()||{},phase:this.state,traversal:!!this.player.motor?.traversal,elevation:this.player.footPosition?.y||0,nextWave:Math.min(this.spawner.wave+1,j.goal.winWave),kills:this.stats.kills,time:this.stats.elapsed,hp:this.player.hp,maxHp:this.player.maxHp,ammo:this.weapon.getAmmoText(),ammoHint:this.weapon.getReloadHint(),weaponName:this.weapon.getGunDisplay()}}}const _h={pistol:{blast:.065,lowpass:2700,highpass:230,thump:125,decay:.13,gain:.25},shotgun:{blast:.11,lowpass:1900,highpass:100,thump:76,decay:.2,gain:.36},rifle:{blast:.047,lowpass:3600,highpass:340,thump:150,decay:.095,gain:.2}};let _t,Ji,Ja;function Zy(){if(typeof window>"u")return!1;const s=window.AudioContext||window.webkitAudioContext;if(!s)return!1;if(!_t){_t=new s;const e=_t.createDynamicsCompressor();e.threshold.value=-15,e.knee.value=9,e.ratio.value=4,e.attack.value=.003,e.release.value=.1,Ji=_t.createGain(),Ji.gain.value=.65,Ji.connect(e).connect(_t.destination);const t=_t.createDelay(.1),n=_t.createBiquadFilter(),i=_t.createGain();t.delayTime.value=.045,n.type="lowpass",n.frequency.value=1500,i.gain.value=.075,Ji.connect(t).connect(n).connect(i).connect(e),Ja=_t.createBuffer(1,_t.sampleRate,_t.sampleRate);const r=Ja.getChannelData(0);for(let o=0;o<r.length;o++)r[o]=Math.random()*2-1}return _t.state==="suspended"&&_t.resume().catch(()=>{}),!0}function Du(s,e,t,n){s.gain.setValueAtTime(1e-4,t),s.gain.exponentialRampToValueAtTime(e,t+.0015),s.gain.exponentialRampToValueAtTime(1e-4,t+n)}function vh(s,e,t,n,i){const r=_t.createBufferSource(),o=_t.createBiquadFilter(),a=_t.createBiquadFilter(),l=_t.createGain();r.buffer=Ja,r.playbackRate.value=.97+Math.random()*.06,o.type="lowpass",o.frequency.value=n,a.type="highpass",a.frequency.value=i,Du(l,t,s,e),r.connect(o).connect(a).connect(l).connect(Ji),r.start(s,Math.random()*.7),r.stop(s+e),r.onended=()=>{r.disconnect(),o.disconnect(),a.disconnect(),l.disconnect()}}function Jy(s){if(!Zy())return!1;const e=_h[s]||_h.pistol,t=_t.currentTime,n=e.gain*(.94+Math.random()*.12);vh(t,e.blast,n,e.lowpass,e.highpass),vh(t+.012,.023,n*.28,6200,1700);const i=_t.createOscillator(),r=_t.createGain();return i.type="sine",i.frequency.setValueAtTime(e.thump,t),i.frequency.exponentialRampToValueAtTime(34,t+e.decay),Du(r,n*.58,t,e.decay),i.connect(r).connect(Ji),i.start(t),i.stop(t+e.decay+.01),i.onended=()=>{i.disconnect(),r.disconnect()},!0}const mn=new i_({antialias:!0});mn.setSize(innerWidth,innerHeight);mn.setPixelRatio(Math.min(devicePixelRatio,1.5));mn.shadowMap.enabled=!0;mn.shadowMap.type=Sh;mn.toneMapping=wh;mn.toneMappingExposure=1.15;document.getElementById("game-canvas").append(mn.domElement);const Tn=new s_,gs=new Lt(j.view.fov,innerWidth/innerHeight,.1,350),on=hv(),Ti=new Uv(on.shapes,{bounds:on.bounds}),Uu=new Bv(Ti,on),xh=Cv(Tn,on),yi=new $y(on),Xr=new oy(Tn);yy(Tn);let ct,dt,ri,Jn,qs;const ir=new Xv(Tn,Ti,{config:j.train,onWarning:()=>yi.notify("列车即将起步","留意道口灯声预警；停站时可登车，检修梯通往车顶。"),onHit:s=>{const e=s.actor;e.isPlayer?(dt.takeDamage(s.damage,"train")&&(yi.flashDamage(),ct.stats.trainHits++),s.position&&dt.motor.reset(s.position),dt.syncCamera()):e.enemy&&(ri.hurt(e.enemy,s.damage,"train"),s.position&&!e.enemy.dead&&(e.enemy.motor.reset(s.position),e.enemy.group.position.copy(s.position)))}});dt=new ix(gs,mn.domElement,Tn,Ti,new M(on.playerStart.x,on.playerStart.y,on.playerStart.z));dt.spawnYaw=on.playerYaw;dt.getLadders=()=>ir.getLadders();dt.reset();ri=new Vy(Tn,{camera:gs,world:Ti,navigation:Uu,layout:on,train:ir,player:dt,onContact:()=>{const s=dt.takeDamage(j.player.damageFromEnemy);return s&&yi.flashDamage(),s},onEnemyKilled:(s,e)=>{ct.stats.kills++,e==="train"&&ct.stats.trainKills++,qs.gainXp(s.def.xp,s.group.position),s.type==="tank"?qs.spawnHeal("tank",s.group.position):Math.random()<j.heal.small.chance&&qs.spawnHeal("small",s.group.position)},onDamage:(s,e,t,n)=>{ct.stats.weapons[n]&&(ct.stats.weapons[n].damage+=s),Xr.spawn(`-${Math.round(s)}`,e)},onHeadshot:()=>yi.flashHeadshot(),onProjectileHit:s=>{const e=dt.takeDamage(s.damage,"projectile");return e&&yi.flashDamage(),e},onCrateCollected:s=>{const e=Jn.keys.filter(t=>!Jn.unlocked.has(t));if(e.length){const t=e[Math.floor(Math.random()*e.length)];Jn.unlock(t),Xr.spawn(`获得${Jn.guns[t].label}`,s,"#a5f4d9")}else Jn.applyUpgrade("mag"),Xr.spawn("当前枪械弹匣 +3",s,"#a5f4d9")},onWaveStarted:s=>ct.onWaveStarted(s)});Jn=new ny(Tn,dt,{getEnemies:()=>ri.getMeshes(),getWorld:()=>Ti,onHit:(s,e,t)=>{ri.onShotHit(s,e,t),Qv()},onShot:s=>{ct.stats.weapons[s].shots++,Jy(s)},onReload:ex});qs=new Wy(Tn,dt,Jn,()=>{},tx,Ti);const Qy={halfSize:on.bounds,world:Ti,layout:on,update:s=>{xh.update(s),xh.setCrossingWarning(ir.warning)},getActors:()=>[{id:"player",isPlayer:!0,footPosition:dt.footPosition,supportId:dt.supportId,rideBodyId:dt.motor.traversal?.bodyId||dt.motor.airborneBodyId,radius:j.player.radius,height:j.player.bodyHeight,maxHp:dt.maxHp},...ri.enemies.filter(s=>!s.dead).map(s=>({id:s.group.uuid,enemy:s,isBoss:s.type==="boss",footPosition:s.motor.position,supportId:s.motor.supportId,rideBodyId:s.motor.traversal?.bodyId||s.motor.airborneBodyId,radius:s.radius,height:s.height,maxHp:s.maxHp}))]};ct=new Ky({player:dt,weapon:Jn,spawner:ri,levelup:qs,train:ir,hud:yi,floats:Xr,arena:Qy});const yn=s=>document.getElementById(s);yn("start-btn").onclick=yn("restart-btn").onclick=()=>ct.start();yn("resume-btn").onclick=()=>ct.resume();yn("next-wave-btn").onclick=()=>ct.startNextWave();yn("export-btn").onclick=()=>{const s=URL.createObjectURL(new Blob([JSON.stringify(ct.result,null,2)],{type:"application/json"}));Object.assign(document.createElement("a"),{href:s,download:"fps-railway-run.json"}).click(),setTimeout(()=>URL.revokeObjectURL(s),1e3)};addEventListener("resize",()=>{gs.aspect=innerWidth/innerHeight,gs.updateProjectionMatrix(),mn.setSize(innerWidth,innerHeight)});addEventListener("keydown",s=>{s.code==="Escape"&&ct.pause(),s.code==="KeyG"&&ct.startNextWave(),s.code==="Enter"&&["dead","won"].includes(ct.state)&&ct.start()});addEventListener("blur",()=>ct.pause());document.addEventListener("visibilitychange",()=>{document.hidden&&ct.pause()});document.addEventListener("pointerlockerror",()=>{yn("lock-status").textContent="鼠标锁定未成功，请再次点击继续战斗。"});await dt.initControls();dt.controls.addEventListener("lock",()=>ct.handleLock());dt.controls.addEventListener("unlock",()=>ct.pause());await ly();const eM=Object.entries(j.enemy).filter(([,s])=>s?.size).map(([s,e])=>{const t=Za(s,e);return[t.radius,t.height]});mn.render(Tn,gs);await Uu.prepare(eM,({ratio:s})=>{yn("start-btn").textContent=`正在准备追击路线 ${Math.round(s*100)}%`});yn("start-btn").disabled=!1;yn("start-btn").textContent="进入暮色街区";let yh=performance.now();function tM(s){yi.update({...ct.getHudData(),playerPosition:dt.footPosition,trainPosition:ir.position,remainingEnemies:ri.toSpawn?[]:ri.enemies.filter(e=>!e.dead).map(e=>e.group.position)},ct.active?s:0),yn("crosshair").style.opacity=ct.active?1:0,mn.render(Tn,gs)}function Nu(s){requestAnimationFrame(Nu);const e=Math.min(.05,Math.max(0,(s-yh)/1e3));yh=s,ct.update(e),tM(e)}requestAnimationFrame(Nu);
