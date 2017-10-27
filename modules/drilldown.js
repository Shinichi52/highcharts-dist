/*
 Highcharts JS v6.0.2 (2017-10-20)
 Highcharts Drilldown module

 Author: Torstein Honsi
 

*/
(function(p){"object"===typeof module&&module.exports?module.exports=p:p(Highcharts)})(function(p){(function(f){var p=f.noop,z=f.color,A=f.defaultOptions,l=f.each,q=f.extend,G=f.format,B=f.objectEach,v=f.pick,r=f.wrap,m=f.Chart,w=f.seriesTypes,C=w.pie,t=w.column,D=f.Tick,x=f.fireEvent,E=f.inArray,F=1;q(A.lang,{drillUpText:"\u25c1 Back to {series.name}"});A.drilldown={activeAxisLabelStyle:{cursor:"pointer",color:"#003399",fontWeight:"bold",textDecoration:"underline"},activeDataLabelStyle:{cursor:"pointer",
color:"#003399",fontWeight:"bold",textDecoration:"underline"},animation:{duration:500},drillUpButton:{position:{align:"right",x:-10,y:10}}};f.SVGRenderer.prototype.Element.prototype.fadeIn=function(a){this.attr({opacity:.1,visibility:"inherit"}).animate({opacity:v(this.newOpacity,1)},a||{duration:250})};m.prototype.addSeriesAsDrilldown=function(a,b){this.addSingleSeriesAsDrilldown(a,b);this.applyDrilldown()};m.prototype.addSingleSeriesAsDrilldown=function(a,b){var d=a.series,c=d.xAxis,e=d.yAxis,g,
k=[],h=[],u,n,m;m={color:a.color||d.color};this.drilldownLevels||(this.drilldownLevels=[]);u=d.options._levelNumber||0;(n=this.drilldownLevels[this.drilldownLevels.length-1])&&n.levelNumber!==u&&(n=void 0);b=q(q({_ddSeriesId:F++},m),b);g=E(a,d.points);l(d.chart.series,function(a){a.xAxis!==c||a.isDrilling||(a.options._ddSeriesId=a.options._ddSeriesId||F++,a.options._colorIndex=a.userOptions._colorIndex,a.options._levelNumber=a.options._levelNumber||u,n?(k=n.levelSeries,h=n.levelSeriesOptions):(k.push(a),
h.push(a.options)))});a=q({levelNumber:u,seriesOptions:d.options,levelSeriesOptions:h,levelSeries:k,shapeArgs:a.shapeArgs,bBox:a.graphic?a.graphic.getBBox():{},color:a.isNull?(new f.Color(z)).setOpacity(0).get():z,lowerSeriesOptions:b,pointOptions:d.options.data[g],pointIndex:g,oldExtremes:{xMin:c&&c.userMin,xMax:c&&c.userMax,yMin:e&&e.userMin,yMax:e&&e.userMax},resetZoomButton:this.resetZoomButton},m);this.drilldownLevels.push(a);c&&c.names&&(c.names.length=0);b=a.lowerSeries=this.addSeries(b,!1);
b.options._levelNumber=u+1;c&&(c.oldPos=c.pos,c.userMin=c.userMax=null,e.userMin=e.userMax=null);d.type===b.type&&(b.animate=b.animateDrilldown||p,b.options.animation=!0)};m.prototype.applyDrilldown=function(){var a=this.drilldownLevels,b;a&&0<a.length&&(b=a[a.length-1].levelNumber,l(this.drilldownLevels,function(a){a.levelNumber===b&&l(a.levelSeries,function(a){a.options&&a.options._levelNumber===b&&a.remove(!1)})}));this.resetZoomButton&&(this.resetZoomButton.hide(),delete this.resetZoomButton);
this.pointer.reset();this.redraw();this.showDrillUpButton()};m.prototype.getDrilldownBackText=function(){var a=this.drilldownLevels;if(a&&0<a.length)return a=a[a.length-1],a.series=a.seriesOptions,G(this.options.lang.drillUpText,a)};m.prototype.showDrillUpButton=function(){var a=this,b=this.getDrilldownBackText(),d=a.options.drilldown.drillUpButton,c,e;this.drillUpButton?this.drillUpButton.attr({text:b}).align():(e=(c=d.theme)&&c.states,this.drillUpButton=this.renderer.button(b,null,null,function(){a.drillUp()},
c,e&&e.hover,e&&e.select).addClass("highcharts-drillup-button").attr({align:d.position.align,zIndex:7}).add().align(d.position,!1,d.relativeTo||"plotBox"))};m.prototype.drillUp=function(){for(var a=this,b=a.drilldownLevels,d=b[b.length-1].levelNumber,c=b.length,e=a.series,g,k,h,f,n=function(b){var c;l(e,function(a){a.options._ddSeriesId===b._ddSeriesId&&(c=a)});c=c||a.addSeries(b,!1);c.type===h.type&&c.animateDrillupTo&&(c.animate=c.animateDrillupTo);b===k.seriesOptions&&(f=c)};c--;)if(k=b[c],k.levelNumber===
d){b.pop();h=k.lowerSeries;if(!h.chart)for(g=e.length;g--;)if(e[g].options.id===k.lowerSeriesOptions.id&&e[g].options._levelNumber===d+1){h=e[g];break}h.xData=[];l(k.levelSeriesOptions,n);x(a,"drillup",{seriesOptions:k.seriesOptions});f.type===h.type&&(f.drilldownLevel=k,f.options.animation=a.options.drilldown.animation,h.animateDrillupFrom&&h.chart&&h.animateDrillupFrom(k));f.options._levelNumber=d;h.remove(!1);f.xAxis&&(g=k.oldExtremes,f.xAxis.setExtremes(g.xMin,g.xMax,!1),f.yAxis.setExtremes(g.yMin,
g.yMax,!1));k.resetZoomButton&&(a.resetZoomButton=k.resetZoomButton,a.resetZoomButton.show())}x(a,"drillupall");this.redraw();0===this.drilldownLevels.length?this.drillUpButton=this.drillUpButton.destroy():this.drillUpButton.attr({text:this.getDrilldownBackText()}).align();this.ddDupes.length=[]};r(m.prototype,"showResetZoom",function(a){this.drillUpButton||a.apply(this,Array.prototype.slice.call(arguments,1))});t.prototype.animateDrillupTo=function(a){if(!a){var b=this,d=b.drilldownLevel;l(this.points,
function(a){var b=a.dataLabel;a.graphic&&a.graphic.hide();b&&(b.hidden="hidden"===b.attr("visibility"),b.hidden||(b.hide(),a.connector&&a.connector.hide()))});setTimeout(function(){b.points&&l(b.points,function(a,b){b=b===(d&&d.pointIndex)?"show":"fadeIn";var c="show"===b?!0:void 0,e=a.dataLabel;if(a.graphic)a.graphic[b](c);if(e&&!e.hidden&&(e[b](c),a.connector))a.connector[b](c)})},Math.max(this.chart.options.drilldown.animation.duration-50,0));this.animate=p}};t.prototype.animateDrilldown=function(a){var b=
this,d=this.chart.drilldownLevels,c,e=this.chart.options.drilldown.animation,g=this.xAxis;a||(l(d,function(a){b.options._ddSeriesId===a.lowerSeriesOptions._ddSeriesId&&(c=a.shapeArgs,c.fill=a.color)}),c.x+=v(g.oldPos,g.pos)-g.pos,l(this.points,function(a){a.shapeArgs.fill=a.color;a.graphic&&a.graphic.attr(c).animate(q(a.shapeArgs,{fill:a.color||b.color}),e);a.dataLabel&&a.dataLabel.fadeIn(e)}),this.animate=null)};t.prototype.animateDrillupFrom=function(a){var b=this.chart.options.drilldown.animation,
d=this.group,c=d!==this.chart.columnGroup,e=this;l(e.trackerGroups,function(a){if(e[a])e[a].on("mouseover")});c&&delete this.group;l(this.points,function(e){var g=e.graphic,h=a.shapeArgs,l=function(){g.destroy();d&&c&&(d=d.destroy())};g&&(delete e.graphic,h.fill=a.color,b?g.animate(h,f.merge(b,{complete:l})):(g.attr(h),l()))})};C&&q(C.prototype,{animateDrillupTo:t.prototype.animateDrillupTo,animateDrillupFrom:t.prototype.animateDrillupFrom,animateDrilldown:function(a){var b=this.chart.drilldownLevels[this.chart.drilldownLevels.length-
1],d=this.chart.options.drilldown.animation,c=b.shapeArgs,e=c.start,g=(c.end-e)/this.points.length;a||(l(this.points,function(a,h){var k=a.shapeArgs;c.fill=b.color;k.fill=a.color;if(a.graphic)a.graphic.attr(f.merge(c,{start:e+h*g,end:e+(h+1)*g}))[d?"animate":"attr"](k,d)}),this.animate=null)}});f.Point.prototype.doDrilldown=function(a,b,d){var c=this.series.chart,e=c.options.drilldown,g=(e.series||[]).length,f;c.ddDupes||(c.ddDupes=[]);for(;g--&&!f;)e.series[g].id===this.drilldown&&-1===E(this.drilldown,
c.ddDupes)&&(f=e.series[g],c.ddDupes.push(this.drilldown));x(c,"drilldown",{point:this,seriesOptions:f,category:b,originalEvent:d,points:void 0!==b&&this.series.xAxis.getDDPoints(b).slice(0)},function(b){var c=b.point.series&&b.point.series.chart,d=b.seriesOptions;c&&d&&(a?c.addSingleSeriesAsDrilldown(b.point,d):c.addSeriesAsDrilldown(b.point,d))})};f.Axis.prototype.drilldownCategory=function(a,b){B(this.getDDPoints(a),function(d){d&&d.series&&d.series.visible&&d.doDrilldown&&d.doDrilldown(!0,a,b)});
this.chart.applyDrilldown()};f.Axis.prototype.getDDPoints=function(a){var b=[];l(this.series,function(d){var c,e=d.xData,g=d.points;for(c=0;c<e.length;c++)if(e[c]===a&&d.options.data[c]&&d.options.data[c].drilldown){b.push(g?g[c]:!0);break}});return b};D.prototype.drillable=function(){var a=this.pos,b=this.label,d=this.axis,c="xAxis"===d.coll&&d.getDDPoints,e=c&&d.getDDPoints(a);c&&(b&&e.length?(b.drillable=!0,b.basicStyles||(b.basicStyles=f.merge(b.styles)),b.addClass("highcharts-drilldown-axis-label").css(d.chart.options.drilldown.activeAxisLabelStyle).on("click",
function(b){d.drilldownCategory(a,b)})):b&&b.drillable&&(b.styles={},b.css(b.basicStyles),b.on("click",null),b.removeClass("highcharts-drilldown-axis-label")))};r(D.prototype,"addLabel",function(a){a.call(this);this.drillable()});r(f.Point.prototype,"init",function(a,b,d,c){var e=a.call(this,b,d,c);c=(a=b.xAxis)&&a.ticks[c];e.drilldown&&f.addEvent(e,"click",function(a){b.xAxis&&!1===b.chart.options.drilldown.allowPointDrilldown?b.xAxis.drilldownCategory(e.x,a):e.doDrilldown(void 0,void 0,a)});c&&
c.drillable();return e});r(f.Series.prototype,"drawDataLabels",function(a){var b=this.chart.options.drilldown.activeDataLabelStyle,d=this.chart.renderer;a.call(this);l(this.points,function(a){var c=a.options.dataLabels,f=v(a.dlOptions,c&&c.style,{});a.drilldown&&a.dataLabel&&("contrast"===b.color&&(f.color=d.getContrast(a.color||this.color)),c&&c.color&&(f.color=c.color),a.dataLabel.addClass("highcharts-drilldown-data-label"),a.dataLabel.css(b).css(f))},this)});var y=function(a,b,d){a[d?"addClass":
"removeClass"]("highcharts-drilldown-point");a.css({cursor:b})},H=function(a){a.call(this);l(this.points,function(a){a.drilldown&&a.graphic&&y(a.graphic,"pointer",!0)})},I=function(a,b){var d=a.apply(this,Array.prototype.slice.call(arguments,1));this.drilldown&&this.series.halo&&"hover"===b?y(this.series.halo,"pointer",!0):this.series.halo&&y(this.series.halo,"auto",!1);return d};B(w,function(a){r(a.prototype,"drawTracker",H);r(a.prototype.pointClass.prototype,"setState",I)})})(p)});
