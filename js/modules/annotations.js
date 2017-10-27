/*
 Highcharts JS v6.0.2 (2017-10-20)
 Annotations module

 (c) 2009-2017 Torstein Honsi

 
*/
(function(m){"object"===typeof module&&module.exports?module.exports=m:m(Highcharts)})(function(m){(function(f){var n=f.merge,m=f.addEvent,v=f.extend,l=f.each,C=f.isString,x=f.isNumber,u=f.defined,D=f.isObject,E=f.inArray,y=f.erase,F=f.find,G=f.format,p=f.pick,H=f.destroyObjectProperties,z=f.Tooltip.prototype,I=f.Series.prototype,w=f.Chart.prototype,J={arrow:{render:!1,id:"arrow",refY:5,refX:5,markerWidth:10,markerHeight:10,children:[{tagName:"path",attrs:{d:"M 0 0 L 10 5 L 0 10 Z",strokeWidth:0}}]}},
q={markerSetter:function(a){return function(b){this.attr(a,"url(#"+b+")")}}};v(q,{markerEndSetter:q.markerSetter("marker-end"),markerStartSetter:q.markerSetter("marker-start")});f.SVGRenderer.prototype.addMarker=function(a,b){a=p(a,f.uniqueKey());var c=this.createElement("marker").attr({id:a,markerWidth:p(b.markerWidth,20),markerHeight:p(b.markerHeight,20),refX:b.refX||0,refY:b.refY||0,orient:b.orient||"auto"}).add(this.defs),d={stroke:b.color||"none",fill:b.color||"rgba(0, 0, 0, 0.75)"};b=b.children;
c.id=a;l(b,function(a){this.createElement(a.tagName).attr(n(d,a.attrs)).add(c)},this);return c};var A=f.MockPoint=function(a,b){this.mock=!0;this.series={visible:!0,chart:a,getPlotBox:I.getPlotBox};this.init(a,b)},K=f.mockPoint=function(a,b){return new A(a,b)};A.prototype={init:function(a,b){var c=b.xAxis,c=u(c)?a.xAxis[c]||a.get(c):null,d=b.yAxis;a=u(d)?a.yAxis[d]||a.get(d):null;c?(this.x=b.x,this.series.xAxis=c):this.plotX=b.x;a?(this.y=b.y,this.series.yAxis=a):this.plotY=b.y},translate:function(){var a=
this.series,b=a.xAxis,a=a.yAxis,c;c=!0;b&&(this.plotX=c=b.toPixels(this.x,!0),c=0<=c&&c<=b.len);a&&(this.plotY=b=a.toPixels(this.y,!0),c=c&&0<=b&&b<=a.len);this.isInside=c},alignToBox:function(a){a&&this.translate();a=this.plotX;var b=this.plotY,c;this.series.chart.inverted&&(c=a,a=b,b=c);return[a,b,0,0]},getLabelConfig:function(){return{x:this.x,y:this.y,point:this}}};f.defaultOptions.annotations=[];var B=f.Annotation=function(a,b){this.chart=a;this.labels=[];this.shapes=[];this.options=n(this.defaultOptions,
b);this.init(a,b)};B.prototype={shapesWithoutBackground:["connector"],attrsMap:{backgroundColor:"fill",borderColor:"stroke",borderWidth:"stroke-width",strokeWidth:"stroke-width",stroke:"stroke",fill:"fill",zIndex:"zIndex",width:"width",height:"height",borderRadius:"r",r:"r",padding:"padding",dashStyle:"dashstyle"},defaultOptions:{visible:!0,labelOptions:{align:"center",allowOverlap:!1,backgroundColor:"rgba(0, 0, 0, 0.75)",borderColor:"black",borderRadius:1,borderWidth:1,crop:!1,formatter:function(){return u(this.y)?
this.y:"Annotation label"},overflow:"justify",padding:5,shadow:!1,shape:"callout",style:{fontSize:"11px",fontWeight:"normal",color:"contrast"},useHTML:!1,verticalAlign:"bottom",x:0,y:-16},shapeOptions:{stroke:"rgba(0, 0, 0, 0.75)",strokeWidth:1,fill:"rgba(0, 0, 0, 0.75)",r:0},zIndex:6},init:function(){var a=this;l(this.options.labels||[],this.initLabel,this);l(this.options.shapes||[],this.initShape,this);this.chart.labelCollectors.push(function(){var b=[];l(a.labels,function(a){a.options.allowOverlap||
b.push(a)});return b})},redraw:function(){this.group||this.render();this.redrawItems(this.shapes);this.redrawItems(this.labels)},redrawItems:function(a){for(var b=a.length;b--;)this.redrawItem(a[b])},render:function(){var a=this.chart.renderer,b=this.group=a.g("annotation").attr({zIndex:this.options.zIndex,visibility:this.options.visible?"visible":"hidden"}).add();this.shapesGroup=a.g("annotation-shapes").add(b);this.labelsGroup=a.g("annotation-labels").attr({translateX:0,translateY:0}).add(b);this.shapesGroup.clip(this.chart.plotBoxClip)},
setVisible:function(a){var b=this.options;a=p(a,!b.visible);this.group.attr({visibility:a?"visible":"hidden"});b.visible=a},destroy:function(){var a=this.chart;l(this.labels,function(a){a.destroy()});l(this.shapes,function(a){a.destroy()});H(this,a)},initShape:function(a){var b=this.chart.renderer;a=n(this.options.shapeOptions,a);var c=this.attrsFromOptions(a),d=b[a.type]?a.type:"rect",b=b[d](0,-9E9,0,0);b.points=[];b.type=d;b.options=a;b.itemType="shape";"path"===d&&v(b,{markerStartSetter:q.markerStartSetter,
markerEndSetter:q.markerEndSetter,markerStart:q.markerStart,markerEnd:q.markerEnd});b.attr(c);this.shapes.push(b)},initLabel:function(a){a=n(this.options.labelOptions,a);var b=a.style,c=this.attrsFromOptions(a),d=this.chart.renderer.label("",0,-9E9,a.shape,null,null,a.useHTML,null,"annotation-label");"contrast"===b.color&&(b.color=this.chart.renderer.getContrast(-1<E(a.shape,this.shapesWithoutBackground)?"#FFFFFF":a.backgroundColor));d.points=[];d.options=a;d.itemType="label";d.labelrank=a.labelrank;
d.annotation=this;d.attr(c).css(b).shadow(a.shadow);this.labels.push(d)},redrawItem:function(a){var b=this.linkPoints(a),c=a.options,d;b.length?(a.parentGroup||this.renderItem(a),"label"===a.itemType&&(d=c.format||c.text,a.attr({text:d?G(d,b[0].getLabelConfig()):c.formatter.call(b[0])})),"path"===a.type?this.redrawPath(a):this.alignItem(a,!a.placed)):this.destroyItem(a)},destroyItem:function(a){y(this[a.itemType+"s"],a);a.destroy()},pointItem:function(a,b){b&&null!==b.series||(D(a)?b=K(this.chart,
a):C(a)&&(b=this.chart.get(a)||null));return b},linkPoints:function(a){var b=a.options.points||a.options.point&&f.splat(a.options.point),c=a.points,d=b&&b.length,e,t;for(e=0;e<d;e++){t=this.pointItem(b[e],c[e]);if(!t)return a.points=[];c[e]=t}return c},alignItem:function(a,b){var c=this.itemAnchor(a,a.points[0]),d=this.itemPosition(a,c);d?(a.alignAttr=d,a.placed=!0,d.anchorX=c.absolutePosition.x,d.anchorY=c.absolutePosition.y,a[b?"attr":"animate"](d)):(a.placed=!1,a.attr({x:0,y:-9E9}))},redrawPath:function(a,
b){var c=a.points,d=a["stroke-width"],e=["M"],f=0,g=0,h=c&&c.length,k,r;if(h){do r=c[f],k=this.itemAnchor(a,r).absolutePosition,e[++g]=k.x,e[++g]=k.y,k=g%5,0===k&&(e[k+1]===e[k+4]&&(e[k+1]=e[k+4]=Math.round(e[k+1])-d%2/2),e[k+2]===e[k+5]&&(e[k+2]=e[k+5]=Math.round(e[k+2])+d%2/2)),f<h-1&&(e[++g]="L"),r=r.series.visible;while(++f<h&&r)}if(r)a[b?"attr":"animate"]({d:e});else a.attr({d:"M 0 -9000000000"});a.placed=r},renderItem:function(a){a.add("label"===a.itemType?this.labelsGroup:this.shapesGroup);
this.setItemMarkers(a)},setItemMarkers:function(a){var b=a.options,c=this.chart,d=c.options.defs.markers,e=b.fill,f=u(e)&&"none"!==e?e:b.stroke;l(["markerStart","markerEnd"],function(e){var h=b[e],k,g,t;if(h){for(t in d)if(k=d[t],h===k.id){g=k;break}g&&(k=a[e]=c.renderer.addMarker(null,n(g,{color:f})),a.attr(e,k.id))}})},itemAnchor:function(a,b){a=b.series.getPlotBox();b=b.mock?b.alignToBox(!0):z.getAnchor.call({chart:this.chart},b);b={x:b[0],y:b[1],height:b[2]||0,width:b[3]||0};return{relativePosition:b,
absolutePosition:n(b,{x:b.x+a.translateX,y:b.y+a.translateY})}},itemPosition:function(a,b){var c=this.chart,d=a.points[0],e=a.options,f=b.absolutePosition,g=b.relativePosition,h;if(b=d.series.visible&&!1!==d.isInside)u(e.distance)||e.positioner?h=(e.positioner||z.getPosition).call({chart:c,distance:p(e.distance,16)},a.width,a.height,{plotX:g.x,plotY:g.y,negative:d.negative,ttBelow:d.ttBelow,h:g.height||g.width}):(d={x:f.x,y:f.y,width:0,height:0},h=this.alignedPosition(v(e,{width:a.width,height:a.height}),
d),"justify"===a.options.overflow&&(h=this.alignedPosition(this.justifiedOptions(a,e,h),d))),e.crop&&(e=h.x-c.plotLeft,d=h.y-c.plotTop,b=c.isInsidePlot(e,d)&&c.isInsidePlot(e+a.width,d+a.height));return b?h:null},alignedPosition:function(a,b){var c=a.align,d=a.verticalAlign,e=(b.x||0)+(a.x||0),f=(b.y||0)+(a.y||0),g,h;"right"===c?g=1:"center"===c&&(g=2);g&&(e+=(b.width-(a.width||0))/g);"bottom"===d?h=1:"middle"===d&&(h=2);h&&(f+=(b.height-(a.height||0))/h);return{x:Math.round(e),y:Math.round(f)}},
justifiedOptions:function(a,b,c){var d=this.chart,e=b.align,f=b.verticalAlign,g=a.box?0:a.padding||0,h=a.getBBox();a={align:e,verticalAlign:f,x:b.x,y:b.y,width:a.width,height:a.height};b=c.x-d.plotLeft;var k=c.y-d.plotTop;c=b+g;0>c&&("right"===e?a.align="left":a.x=-c);c=b+h.width-g;c>d.plotWidth&&("left"===e?a.align="right":a.x=d.plotWidth-c);c=k+g;0>c&&("bottom"===f?a.verticalAlign="top":a.y=-c);c=k+h.height-g;c>d.plotHeight&&("top"===f?a.verticalAlign="bottom":a.y=d.plotHeight-c);return a},attrsFromOptions:function(a){var b=
this.attrsMap,c={},d,e;for(d in a)(e=b[d])&&(c[e]=a[d]);return c}};f.extend(w,{addAnnotation:function(a,b){a=new B(this,a);this.annotations.push(a);p(b,!0)&&a.redraw();return a},removeAnnotation:function(a){var b=this.annotations,c=F(b,function(b){return b.options.id===a});c&&(y(b,c),c.destroy())},drawAnnotations:function(){var a=this.plotBoxClip,b=this.plotBox;a?a.attr(b):this.plotBoxClip=this.renderer.clipRect(b);l(this.annotations,function(a){a.redraw()})}});w.callbacks.push(function(a){a.annotations=
[];l(a.options.annotations,function(b){a.addAnnotation(b,!1)});a.drawAnnotations();m(a,"redraw",a.drawAnnotations);m(a,"destroy",function(){var b=a.plotBoxClip;b&&b.destroy&&b.destroy()})});f.wrap(w,"getContainer",function(a){a.call(this);a=this.renderer;var b=this.options,c,d;b.defs=n(b.defs||{},{markers:J});b=b.defs.markers;for(c in b)d=b[c],p(d.render,!0)&&a.addMarker(d.id,d)});f.SVGRenderer.prototype.symbols.connector=function(a,b,c,d,e){var f=e&&e.anchorX;e=e&&e.anchorY;var g,h,k=c/2;x(f)&&x(e)&&
(g=["M",f,e],h=b-e,0>h&&(h=-d-h),h<c&&(k=f<a+c/2?h:c-h),e>b+d?g.push("L",a+k,b+d):e<b?g.push("L",a+k,b):f<a?g.push("L",a,b+d/2):f>a+c&&g.push("L",a+c,b+d/2));return g||[]}})(m)});
