/*
 Highcharts JS v6.0.2 (2017-10-20)

 (c) 2014 Highsoft AS
 Authors: Jon Arild Nygard / Oystein Moseng

 
*/
(function(v){"object"===typeof module&&module.exports?module.exports=v:v(Highcharts)})(function(v){var I=function(d){var v=d.each,x=d.extend,p=d.pick;return{getColor:function(q,m){var E=m.index,h=m.levelMap,l=m.parentColor,v=m.parentColorIndex,w=m.series,r=m.colors,x=m.siblings,f=w.points,t,B,C;if(q){f=f[q.i];q=h[q.levelDynamic]||{};(t=f&&("boolean"===typeof q.colorByPoint?q.colorByPoint:!!w.options.colorByPoint))&&(B=r[f.index%r.length]);r=f&&f.options.color;t=q&&q.color;if(h=l)h=(h=q&&q.colorVariation)&&
"brightness"===h.key?d.color(l).brighten(E/x*h.to).get():l;t=p(r,t,B,h,w.color);C=p(f&&f.options.colorIndex,q&&q.colorIndex,v,m.colorIndex)}return{color:t,colorIndex:C}},setTreeValues:function m(d,h){var l=h.before,z=h.idRoot,w=h.mapIdToNode[z],r=h.points[d.i],A=r&&r.options||{},f=0,t=[];x(d,{levelDynamic:d.level-(("boolean"===typeof h.levelIsConstant?h.levelIsConstant:1)?0:w.level),name:p(r&&r.name,""),visible:z===d.id||("boolean"===typeof h.visible?h.visible:!1)});"function"===typeof l&&(d=l(d,
h));v(d.children,function(l,p){var r=x({},h);x(r,{index:p,siblings:d.children.length,visible:d.visible});l=m(l,r);t.push(l);l.visible&&(f+=l.val)});d.visible=0<f||d.visible;l=p(A.value,f);x(d,{children:t,childrenTotal:f,isLeaf:d.visible&&!f,val:l});return d}}}(v);(function(d,v){var x=d.seriesType,p=d.seriesTypes,q=d.map,m=d.merge,E=d.extend,h=d.noop,l=d.each,z=v.getColor,w=d.grep,r=d.isNumber,A=d.isString,f=d.pick,t=d.Series,B=d.stableSort,C=function(a,b,c){c=c||this;d.objectEach(a,function(n,e){b.call(c,
n,e,a)})},F=d.reduce,D=function(a,b,c){c=c||this;a=b.call(c,a);!1!==a&&D(a,b,c)};x("treemap","scatter",{showInLegend:!1,marker:!1,dataLabels:{enabled:!0,defer:!1,verticalAlign:"middle",formatter:function(){return this.point.name||this.point.id},inside:!0},tooltip:{headerFormat:"",pointFormat:"\x3cb\x3e{point.name}\x3c/b\x3e: {point.value}\x3cbr/\x3e"},ignoreHiddenPoint:!0,layoutAlgorithm:"sliceAndDice",layoutStartingDirection:"vertical",alternateStartingDirection:!1,levelIsConstant:!0,drillUpButton:{position:{align:"right",
x:-10,y:10}}},{pointArrayMap:["value"],axisTypes:p.heatmap?["xAxis","yAxis","colorAxis"]:["xAxis","yAxis"],directTouch:!0,optionalAxis:"colorAxis",getSymbol:h,parallelArrays:["x","y","value","colorValue"],colorKey:"colorValue",translateColors:p.heatmap&&p.heatmap.prototype.translateColors,colorAttribs:p.heatmap&&p.heatmap.prototype.colorAttribs,trackerGroups:["group","dataLabelsGroup"],getListOfParents:function(a,b){a=F(a||[],function(a,b,e){b=f(b.parent,"");void 0===a[b]&&(a[b]=[]);a[b].push(e);
return a},{});C(a,function(a,n,e){""!==n&&-1===d.inArray(n,b)&&(l(a,function(a){e[""].push(a)}),delete e[n])});return a},getTree:function(){var a=q(this.data,function(a){return a.id}),a=this.getListOfParents(this.data,a);this.nodeMap=[];return this.buildNode("",-1,0,a,null)},init:function(a,b){t.prototype.init.call(this,a,b);this.options.allowDrillToNode&&d.addEvent(this,"click",this.onClickDrillToNode)},buildNode:function(a,b,c,n,e){var y=this,d=[],g=y.points[b],G=0,H;l(n[a]||[],function(b){H=y.buildNode(y.points[b].id,
b,c+1,n,a);G=Math.max(H.height+1,G);d.push(H)});b={id:a,i:b,children:d,height:G,level:c,parent:e,visible:!1};y.nodeMap[b.id]=b;g&&(g.node=b);return b},setTreeValues:function(a){var b=this,c=b.options,n=b.nodeMap[b.rootNode],c="boolean"===typeof c.levelIsConstant?c.levelIsConstant:!0,e=0,d=[],k,g=b.points[a.i];l(a.children,function(a){a=b.setTreeValues(a);d.push(a);a.ignore||(e+=a.val)});B(d,function(a,c){return a.sortIndex-c.sortIndex});k=f(g&&g.options.value,e);g&&(g.value=k);E(a,{children:d,childrenTotal:e,
ignore:!(f(g&&g.visible,!0)&&0<k),isLeaf:a.visible&&!e,levelDynamic:a.level-(c?0:n.level),name:f(g&&g.name,""),sortIndex:f(g&&g.sortIndex,-k),val:k});return a},calculateChildrenAreas:function(a,b){var c=this,n=c.options,e=this.levelMap[a.levelDynamic+1],d=f(c[e&&e.layoutAlgorithm]&&e.layoutAlgorithm,n.layoutAlgorithm),k=n.alternateStartingDirection,g=[];a=w(a.children,function(a){return!a.ignore});e&&e.layoutStartingDirection&&(b.direction="vertical"===e.layoutStartingDirection?0:1);g=c[d](b,a);l(a,
function(a,e){e=g[e];a.values=m(e,{val:a.childrenTotal,direction:k?1-b.direction:b.direction});a.pointValues=m(e,{x:e.x/c.axisRatio,width:e.width/c.axisRatio});a.children.length&&c.calculateChildrenAreas(a,a.values)})},setPointValues:function(){var a=this.xAxis,b=this.yAxis;l(this.points,function(c){var d=c.node,e=d.pointValues,y,k;e&&d.visible?(d=Math.round(a.translate(e.x,0,0,0,1))-0,y=Math.round(a.translate(e.x+e.width,0,0,0,1))-0,k=Math.round(b.translate(e.y,0,0,0,1))-0,e=Math.round(b.translate(e.y+
e.height,0,0,0,1))-0,c.shapeType="rect",c.shapeArgs={x:Math.min(d,y),y:Math.min(k,e),width:Math.abs(y-d),height:Math.abs(e-k)},c.plotX=c.shapeArgs.x+c.shapeArgs.width/2,c.plotY=c.shapeArgs.y+c.shapeArgs.height/2):(delete c.plotX,delete c.plotY)})},setColorRecursive:function(a,b,c,d,e){var n=this,k=n&&n.chart,k=k&&k.options&&k.options.colors,g;if(a){g=z(a,{colors:k,index:d,levelMap:n.levelMap,parentColor:b,parentColorIndex:c,series:n,siblings:e});if(b=n.points[a.i])b.color=g.color,b.colorIndex=g.colorIndex;
l(a.children||[],function(c,b){n.setColorRecursive(c,g.color,g.colorIndex,b,a.children.length)})}},algorithmGroup:function(a,b,c,d){this.height=a;this.width=b;this.plot=d;this.startDirection=this.direction=c;this.lH=this.nH=this.lW=this.nW=this.total=0;this.elArr=[];this.lP={total:0,lH:0,nH:0,lW:0,nW:0,nR:0,lR:0,aspectRatio:function(a,c){return Math.max(a/c,c/a)}};this.addElement=function(a){this.lP.total=this.elArr[this.elArr.length-1];this.total+=a;0===this.direction?(this.lW=this.nW,this.lP.lH=
this.lP.total/this.lW,this.lP.lR=this.lP.aspectRatio(this.lW,this.lP.lH),this.nW=this.total/this.height,this.lP.nH=this.lP.total/this.nW,this.lP.nR=this.lP.aspectRatio(this.nW,this.lP.nH)):(this.lH=this.nH,this.lP.lW=this.lP.total/this.lH,this.lP.lR=this.lP.aspectRatio(this.lP.lW,this.lH),this.nH=this.total/this.width,this.lP.nW=this.lP.total/this.nH,this.lP.nR=this.lP.aspectRatio(this.lP.nW,this.nH));this.elArr.push(a)};this.reset=function(){this.lW=this.nW=0;this.elArr=[];this.total=0}},algorithmCalcPoints:function(a,
b,c,d){var e,n,k,g,f=c.lW,h=c.lH,u=c.plot,m,p=0,t=c.elArr.length-1;b?(f=c.nW,h=c.nH):m=c.elArr[c.elArr.length-1];l(c.elArr,function(a){if(b||p<t)0===c.direction?(e=u.x,n=u.y,k=f,g=a/k):(e=u.x,n=u.y,g=h,k=a/g),d.push({x:e,y:n,width:k,height:g}),0===c.direction?u.y+=g:u.x+=k;p+=1});c.reset();0===c.direction?c.width-=f:c.height-=h;u.y=u.parent.y+(u.parent.height-c.height);u.x=u.parent.x+(u.parent.width-c.width);a&&(c.direction=1-c.direction);b||c.addElement(m)},algorithmLowAspectRatio:function(a,b,c){var d=
[],e=this,f,k={x:b.x,y:b.y,parent:b},g=0,h=c.length-1,m=new this.algorithmGroup(b.height,b.width,b.direction,k);l(c,function(c){f=c.val/b.val*b.height*b.width;m.addElement(f);m.lP.nR>m.lP.lR&&e.algorithmCalcPoints(a,!1,m,d,k);g===h&&e.algorithmCalcPoints(a,!0,m,d,k);g+=1});return d},algorithmFill:function(a,b,c){var d=[],e,f=b.direction,k=b.x,g=b.y,h=b.width,m=b.height,p,t,q,r;l(c,function(c){e=c.val/b.val*b.height*b.width;p=k;t=g;0===f?(r=m,q=e/r,h-=q,k+=q):(q=h,r=e/q,m-=r,g+=r);d.push({x:p,y:t,
width:q,height:r});a&&(f=1-f)});return d},strip:function(a,b){return this.algorithmLowAspectRatio(!1,a,b)},squarified:function(a,b){return this.algorithmLowAspectRatio(!0,a,b)},sliceAndDice:function(a,b){return this.algorithmFill(!0,a,b)},stripes:function(a,b){return this.algorithmFill(!1,a,b)},translate:function(){var a=this,b=a.rootNode=f(a.rootNode,a.options.rootId,""),c,d;t.prototype.translate.call(a);a.levelMap=F(a.options.levels||[],function(a,c){a[c.level]=c;return a},{});d=a.tree=a.getTree();
c=a.nodeMap[b];""===b||c&&c.children.length||(a.drillToNode("",!1),b=a.rootNode,c=a.nodeMap[b]);D(a.nodeMap[a.rootNode],function(c){var b=!1,d=c.parent;c.visible=!0;if(d||""===d)b=a.nodeMap[d];return b});D(a.nodeMap[a.rootNode].children,function(a){var c=!1;l(a,function(a){a.visible=!0;a.children.length&&(c=(c||[]).concat(a.children))});return c});a.setTreeValues(d);a.axisRatio=a.xAxis.len/a.yAxis.len;a.nodeMap[""].pointValues=b={x:0,y:0,width:100,height:100};a.nodeMap[""].values=b=m(b,{width:b.width*
a.axisRatio,direction:"vertical"===a.options.layoutStartingDirection?0:1,val:d.val});a.calculateChildrenAreas(d,b);a.colorAxis?a.translateColors():a.options.colorByPoint||a.setColorRecursive(a.tree);a.options.allowDrillToNode&&(c=c.pointValues,a.xAxis.setExtremes(c.x,c.x+c.width,!1),a.yAxis.setExtremes(c.y,c.y+c.height,!1),a.xAxis.setScale(),a.yAxis.setScale());a.setPointValues()},drawDataLabels:function(){var a=this,b=w(a.points,function(a){return a.node.visible}),c,d;l(b,function(b){d=a.levelMap[b.node.levelDynamic];
c={style:{}};b.node.isLeaf||(c.enabled=!1);d&&d.dataLabels&&(c=m(c,d.dataLabels),a._hasPointLabels=!0);b.shapeArgs&&(c.style.width=b.shapeArgs.width,b.dataLabel&&b.dataLabel.css({width:b.shapeArgs.width+"px"}));b.dlOptions=m(c,b.options.dataLabels)});t.prototype.drawDataLabels.call(this)},alignDataLabel:function(a){p.column.prototype.alignDataLabel.apply(this,arguments);a.dataLabel&&a.dataLabel.attr({zIndex:(a.node.zIndex||0)+1})},drawPoints:function(){var a=this,b=w(a.points,function(a){return a.node.visible});
l(b,function(c){var b="level-group-"+c.node.levelDynamic;a[b]||(a[b]=a.chart.renderer.g(b).attr({zIndex:1E3-c.node.levelDynamic}).add(a.group));c.group=a[b]});p.column.prototype.drawPoints.call(this);this.colorAttribs&&l(this.points,function(a){a.graphic.css(this.colorAttribs(a))},this);a.options.allowDrillToNode&&l(b,function(b){b.graphic&&(b.drillId=a.options.interactByLeaf?a.drillToByLeaf(b):a.drillToByGroup(b))})},onClickDrillToNode:function(a){var b=(a=a.point)&&a.drillId;A(b)&&(a.setState(""),
this.drillToNode(b))},drillToByGroup:function(a){var b=!1;1!==a.node.level-this.nodeMap[this.rootNode].level||a.node.isLeaf||(b=a.id);return b},drillToByLeaf:function(a){var b=!1;if(a.node.parent!==this.rootNode&&a.node.isLeaf)for(a=a.node;!b;)a=this.nodeMap[a.parent],a.parent===this.rootNode&&(b=a.id);return b},drillUp:function(){var a=this.nodeMap[this.rootNode];a&&A(a.parent)&&this.drillToNode(a.parent)},drillToNode:function(a,b){var c=this.nodeMap[a];this.idPreviousRoot=this.rootNode;this.rootNode=
a;""===a?this.drillUpButton=this.drillUpButton.destroy():this.showDrillUpButton(c&&c.name||a);this.isDirty=!0;f(b,!0)&&this.chart.redraw()},showDrillUpButton:function(a){var b=this;a=a||"\x3c Back";var c=b.options.drillUpButton,d,e;c.text&&(a=c.text);this.drillUpButton?this.drillUpButton.attr({text:a}).align():(e=(d=c.theme)&&d.states,this.drillUpButton=this.chart.renderer.button(a,null,null,function(){b.drillUp()},d,e&&e.hover,e&&e.select).attr({align:c.position.align,zIndex:7}).add().align(c.position,
!1,c.relativeTo||"plotBox"))},buildKDTree:h,drawLegendSymbol:d.LegendSymbolMixin.drawRectangle,getExtremes:function(){t.prototype.getExtremes.call(this,this.colorValueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;t.prototype.getExtremes.call(this)},getExtremesFromAll:!0,bindAxes:function(){var a={endOnTick:!1,gridLineWidth:0,lineWidth:0,min:0,dataMin:0,minPadding:0,max:100,dataMax:100,maxPadding:0,startOnTick:!1,title:null,tickPositions:[]};t.prototype.bindAxes.call(this);d.extend(this.yAxis.options,
a);d.extend(this.xAxis.options,a)},utils:{recursive:D,reduce:F}},{getClassName:function(){var a=d.Point.prototype.getClassName.call(this),b=this.series,c=b.options;this.node.level<=b.nodeMap[b.rootNode].level?a+=" highcharts-above-level":this.node.isLeaf||f(c.interactByLeaf,!c.allowDrillToNode)?this.node.isLeaf||(a+=" highcharts-internal-node"):a+=" highcharts-internal-node-interactive";return a},isValid:function(){return this.id||r(this.value)},setState:function(a){d.Point.prototype.setState.call(this,
a);this.graphic&&this.graphic.attr({zIndex:"hover"===a?1:0})},setVisible:p.pie.prototype.pointClass.prototype.setVisible})})(v,I)});
