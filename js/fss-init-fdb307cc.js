!function(){function e(){t(),i(),r(),o(),l(),a(H.offsetWidth,H.offsetHeight),c()}function t(){V=new FSS.SVGRenderer,b=new FSS.CanvasRenderer,n(M.renderer)}function n(e){switch(h&&A.removeChild(h.element),e){case y:h=b;break;case w:h=V}h.setSize(H.offsetWidth,H.offsetHeight),A.appendChild(h.element)}function i(){m=new FSS.Scene}function r(){m.remove(g),h.clear(),p=new FSS.Plane(x.width*h.width,x.height*h.height,x.segments,x.slices),F=new FSS.Material(x.ambient,x.diffuse),g=new FSS.Mesh(p,F),m.add(g);var e,t;for(e=p.vertices.length-1;e>=0;e--)t=p.vertices[e],t.anchor=FSS.Vector3.clone(t.position),t.step=FSS.Vector3.create(Math.randomInRange(.2,1),Math.randomInRange(.2,1),Math.randomInRange(.2,1)),t.time=Math.randomInRange(0,Math.PIM2)}function o(){var e,t;for(e=m.lights.length-1;e>=0;e--)t=m.lights[e],m.remove(t);for(h.clear(),e=0;e<v.count;e++)t=new FSS.Light(v.ambient,v.diffuse),t.ambientHex=t.ambient.format(),t.diffuseHex=t.diffuse.format(),m.add(t),t.mass=Math.randomInRange(.5,1),t.velocity=FSS.Vector3.create(),t.acceleration=FSS.Vector3.create(),t.force=FSS.Vector3.create(),t.ring=document.createElementNS(FSS.SVGNS,"circle"),t.ring.setAttributeNS(null,"stroke",t.ambientHex),t.ring.setAttributeNS(null,"stroke-width","0.5"),t.ring.setAttributeNS(null,"fill","none"),t.ring.setAttributeNS(null,"r","10"),t.core=document.createElementNS(FSS.SVGNS,"circle"),t.core.setAttributeNS(null,"fill",t.diffuseHex),t.core.setAttributeNS(null,"r","4")}function a(e,t){h.setSize(e,t),FSS.Vector3.set(N,h.halfWidth,h.halfHeight),r()}function c(){u=Date.now()-R,s(),S(),requestAnimationFrame(c)}function s(){var e,t,n,i,r,o,a,c=x.depth/2;for(FSS.Vector3.copy(v.bounds,N),FSS.Vector3.multiplyScalar(v.bounds,v.xyScalar),FSS.Vector3.setZ(I,v.zOffset),v.autopilot&&(e=Math.sin(v.step[0]*u*v.speed),t=Math.cos(v.step[1]*u*v.speed),FSS.Vector3.set(I,v.bounds[0]*e,v.bounds[1]*t,v.zOffset)),i=m.lights.length-1;i>=0;i--){r=m.lights[i],FSS.Vector3.setZ(r.position,v.zOffset);var s=Math.clamp(FSS.Vector3.distanceSquared(r.position,I),v.minDistance,v.maxDistance),S=v.gravity*r.mass/s;FSS.Vector3.subtractVectors(r.force,I,r.position),FSS.Vector3.normalise(r.force),FSS.Vector3.multiplyScalar(r.force,S),FSS.Vector3.set(r.acceleration),FSS.Vector3.add(r.acceleration,r.force),FSS.Vector3.add(r.velocity,r.acceleration),FSS.Vector3.multiplyScalar(r.velocity,v.dampening),FSS.Vector3.limit(r.velocity,v.minLimit,v.maxLimit),FSS.Vector3.add(r.position,r.velocity)}for(o=p.vertices.length-1;o>=0;o--)a=p.vertices[o],e=Math.sin(a.time+a.step[0]*u*x.speed),t=Math.cos(a.time+a.step[1]*u*x.speed),n=Math.sin(a.time+a.step[2]*u*x.speed),FSS.Vector3.set(a.position,x.xRange*p.segmentWidth*e,x.yRange*p.sliceHeight*t,x.zRange*c*n-c),FSS.Vector3.add(a.position,a.anchor);p.dirty=!0}function S(){if(h.render(m),v.draw){var e,t,n,i;for(e=m.lights.length-1;e>=0;e--)switch(i=m.lights[e],t=i.position[0],n=i.position[1],M.renderer){case y:h.context.lineWidth=.5,h.context.beginPath(),h.context.arc(t,n,10,0,Math.PIM2),h.context.strokeStyle=i.ambientHex,h.context.stroke(),h.context.beginPath(),h.context.arc(t,n,4,0,Math.PIM2),h.context.fillStyle=i.diffuseHex,h.context.fill();break;case w:t+=h.halfWidth,n=h.halfHeight-n,i.core.setAttributeNS(null,"cx",t),i.core.setAttributeNS(null,"cy",n),h.element.appendChild(i.core),i.ring.setAttributeNS(null,"cx",t),i.ring.setAttributeNS(null,"cy",n),h.element.appendChild(i.ring)}}}function l(){window.addEventListener("resize",f),H.addEventListener("mousemove",d)}function d(e){FSS.Vector3.set(I,e.x,h.height-e.y),FSS.Vector3.subtract(I,N)}function f(){FSS.Vector3.set(I,300,-200),a(H.offsetWidth,H.offsetHeight),S()}var u,h,m,g,p,F,b,V,x={width:1.2,height:1.2,depth:10,segments:12,slices:7,xRange:.8,yRange:.1,zRange:1,ambient:"#555555",diffuse:"#26809d",speed:1e-4},v={count:2,xyScalar:.2,zOffset:200,ambient:"#080c4e",diffuse:"#036586",speed:1e-7,gravity:1200,dampening:.015,minLimit:2,maxLimit:null,minDistance:20,maxDistance:200,autopilot:!1,draw:!1,bounds:FSS.Vector3.create(),step:FSS.Vector3.create(Math.randomInRange(.2,.5),Math.randomInRange(.2,.5),Math.randomInRange(.2,.5))},w="svg",y="canvas",M={renderer:y},R=Date.now(),N=FSS.Vector3.create(),I=FSS.Vector3.create(),H=document.getElementById("fss"),A=document.getElementById("output");want="cloudclinic",wantLength=want.length,buffer="",$(document).on("keypress",function(t){buffer+=String.fromCharCode(t.keyCode),-1!=buffer.indexOf(want)&&(e(),FSS.Vector3.set(I,300,-200),v.autopilot=!1,buffer=""),buffer.length>wantLength&&(buffer=buffer.substr(-1*wantLength))})}();