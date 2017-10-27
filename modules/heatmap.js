/*
 Highcharts JS v6.0.2 (2017-10-20)

 (c) 2009-2017 Torstein Honsi

 
*/
(function(k){"object"===typeof module&&module.exports?module.exports=k:k(Highcharts)})(function(k){(function(a){var g=a.Axis,w=a.Chart,n=a.color,m,l=a.each,t=a.extend,v=a.isNumber,p=a.Legend,c=a.LegendSymbolMixin,f=a.noop,r=a.merge,k=a.pick,u=a.wrap;a.ColorAxis||(m=a.ColorAxis=function(){this.init.apply(this,arguments)},t(m.prototype,g.prototype),t(m.prototype,{defaultColorAxisOptions:{lineWidth:0,minPadding:0,maxPadding:0,gridLineWidth:1,tickPixelInterval:72,startOnTick:!0,endOnTick:!0,offset:0,
marker:{animation:{duration:50},width:.01,color:"#999999"},labels:{overflow:"justify",rotation:0},minColor:"#e6ebf5",maxColor:"#003399",tickLength:5,showInLegend:!0},keepProps:["legendGroup","legendItemHeight","legendItemWidth","legendItem","legendSymbol"].concat(g.prototype.keepProps),init:function(b,d){var e="vertical"!==b.options.legend.layout,h;this.coll="colorAxis";h=r(this.defaultColorAxisOptions,{side:e?2:1,reversed:!e},d,{opposite:!e,showEmpty:!1,title:null});g.prototype.init.call(this,b,
h);d.dataClasses&&this.initDataClasses(d);this.initStops();this.horiz=e;this.zoomEnabled=!1;this.defaultLegendLength=200},initDataClasses:function(b){var d=this.chart,e,h=0,q=d.options.chart.colorCount,a=this.options,c=b.dataClasses.length;this.dataClasses=e=[];this.legendItems=[];l(b.dataClasses,function(b,f){b=r(b);e.push(b);b.color||("category"===a.dataClassColor?(f=d.options.colors,q=f.length,b.color=f[h],b.colorIndex=h,h++,h===q&&(h=0)):b.color=n(a.minColor).tweenTo(n(a.maxColor),2>c?.5:f/(c-
1)))})},setTickPositions:function(){if(!this.dataClasses)return g.prototype.setTickPositions.call(this)},initStops:function(){this.stops=this.options.stops||[[0,this.options.minColor],[1,this.options.maxColor]];l(this.stops,function(b){b.color=n(b[1])})},setOptions:function(b){g.prototype.setOptions.call(this,b);this.options.crosshair=this.options.marker},setAxisSize:function(){var b=this.legendSymbol,d=this.chart,e=d.options.legend||{},h,q;b?(this.left=e=b.attr("x"),this.top=h=b.attr("y"),this.width=
q=b.attr("width"),this.height=b=b.attr("height"),this.right=d.chartWidth-e-q,this.bottom=d.chartHeight-h-b,this.len=this.horiz?q:b,this.pos=this.horiz?e:h):this.len=(this.horiz?e.symbolWidth:e.symbolHeight)||this.defaultLegendLength},normalizedValue:function(b){this.isLog&&(b=this.val2lin(b));return 1-(this.max-b)/(this.max-this.min||1)},toColor:function(b,d){var e=this.stops,h,q,a=this.dataClasses,f,c;if(a)for(c=a.length;c--;){if(f=a[c],h=f.from,e=f.to,(void 0===h||b>=h)&&(void 0===e||b<=e)){q=f.color;
d&&(d.dataClass=c,d.colorIndex=f.colorIndex);break}}else{b=this.normalizedValue(b);for(c=e.length;c--&&!(b>e[c][0]););h=e[c]||e[c+1];e=e[c+1]||h;b=1-(e[0]-b)/(e[0]-h[0]||1);q=h.color.tweenTo(e.color,b)}return q},getOffset:function(){var b=this.legendGroup,d=this.chart.axisOffset[this.side];b&&(this.axisParent=b,g.prototype.getOffset.call(this),this.added||(this.added=!0,this.labelLeft=0,this.labelRight=this.width),this.chart.axisOffset[this.side]=d)},setLegendColor:function(){var b,d=this.reversed;
b=d?1:0;d=d?0:1;b=this.horiz?[b,0,d,0]:[0,d,0,b];this.legendColor={linearGradient:{x1:b[0],y1:b[1],x2:b[2],y2:b[3]},stops:this.stops}},drawLegendSymbol:function(b,d){var e=b.padding,a=b.options,c=this.horiz,f=k(a.symbolWidth,c?this.defaultLegendLength:12),l=k(a.symbolHeight,c?12:this.defaultLegendLength),g=k(a.labelPadding,c?16:30),a=k(a.itemDistance,10);this.setLegendColor();d.legendSymbol=this.chart.renderer.rect(0,b.baseline-11,f,l).attr({zIndex:1}).add(d.legendGroup);this.legendItemWidth=f+e+
(c?a:g);this.legendItemHeight=l+e+(c?g:0)},setState:f,visible:!0,setVisible:f,getSeriesExtremes:function(){var b=this.series,d=b.length;this.dataMin=Infinity;for(this.dataMax=-Infinity;d--;)void 0!==b[d].valueMin&&(this.dataMin=Math.min(this.dataMin,b[d].valueMin),this.dataMax=Math.max(this.dataMax,b[d].valueMax))},drawCrosshair:function(b,d){var e=d&&d.plotX,a=d&&d.plotY,c,f=this.pos,l=this.len;d&&(c=this.toPixels(d[d.series.colorKey]),c<f?c=f-2:c>f+l&&(c=f+l+2),d.plotX=c,d.plotY=this.len-c,g.prototype.drawCrosshair.call(this,
b,d),d.plotX=e,d.plotY=a,this.cross&&(this.cross.addClass("highcharts-coloraxis-marker").add(this.legendGroup),this.cross.attr({fill:this.crosshair.color})))},getPlotLinePath:function(b,d,e,c,a){return v(a)?this.horiz?["M",a-4,this.top-6,"L",a+4,this.top-6,a,this.top,"Z"]:["M",this.left,a,"L",this.left-6,a+6,this.left-6,a-6,"Z"]:g.prototype.getPlotLinePath.call(this,b,d,e,c)},update:function(b,d){var a=this.chart,c=a.legend;l(this.series,function(b){b.isDirtyData=!0});b.dataClasses&&c.allItems&&(l(c.allItems,
function(b){b.isDataClass&&b.legendGroup&&b.legendGroup.destroy()}),a.isDirtyLegend=!0);a.options[this.coll]=r(this.userOptions,b);g.prototype.update.call(this,b,d);this.legendItem&&(this.setLegendColor(),c.colorizeItem(this,!0))},remove:function(){this.legendItem&&this.chart.legend.destroyItem(this);g.prototype.remove.call(this)},getDataClassLegendSymbols:function(){var b=this,d=this.chart,e=this.legendItems,h=d.options.legend,g=h.valueDecimals,p=h.valueSuffix||"",k;e.length||l(this.dataClasses,
function(h,q){var r=!0,n=h.from,m=h.to;k="";void 0===n?k="\x3c ":void 0===m&&(k="\x3e ");void 0!==n&&(k+=a.numberFormat(n,g)+p);void 0!==n&&void 0!==m&&(k+=" - ");void 0!==m&&(k+=a.numberFormat(m,g)+p);e.push(t({chart:d,name:k,options:{},drawLegendSymbol:c.drawRectangle,visible:!0,setState:f,isDataClass:!0,setVisible:function(){r=this.visible=!r;l(b.series,function(b){l(b.points,function(b){b.dataClass===q&&b.setVisible(r)})});d.legend.colorizeItem(this,r)}},h))});return e},name:""}),l(["fill","stroke"],
function(b){a.Fx.prototype[b+"Setter"]=function(){this.elem.attr(b,n(this.start).tweenTo(n(this.end),this.pos),null,!0)}}),u(w.prototype,"getAxes",function(b){var d=this.options.colorAxis;b.call(this);this.colorAxis=[];d&&new m(this,d)}),u(p.prototype,"getAllItems",function(b){var d=[],a=this.chart.colorAxis[0];a&&a.options&&(a.options.showInLegend&&(a.options.dataClasses?d=d.concat(a.getDataClassLegendSymbols()):d.push(a)),l(a.series,function(b){b.options.showInLegend=!1}));return d.concat(b.call(this))}),
u(p.prototype,"colorizeItem",function(b,a,c){b.call(this,a,c);c&&a.legendColor&&a.legendSymbol.attr({fill:a.legendColor})}),u(p.prototype,"update",function(b){b.apply(this,[].slice.call(arguments,1));this.chart.colorAxis[0]&&this.chart.colorAxis[0].update({},arguments[2])}))})(k);(function(a){var g=a.defined,k=a.each,n=a.noop,m=a.seriesTypes;a.colorPointMixin={isValid:function(){return null!==this.value},setVisible:function(a){var l=this,g=a?"show":"hide";k(["graphic","dataLabel"],function(a){if(l[a])l[a][g]()})},
setState:function(l){a.Point.prototype.setState.call(this,l);this.graphic&&this.graphic.attr({zIndex:"hover"===l?1:0})}};a.colorSeriesMixin={pointArrayMap:["value"],axisTypes:["xAxis","yAxis","colorAxis"],optionalAxis:"colorAxis",trackerGroups:["group","markerGroup","dataLabelsGroup"],getSymbol:n,parallelArrays:["x","y","value"],colorKey:"value",pointAttribs:m.column.prototype.pointAttribs,translateColors:function(){var a=this,g=this.options.nullColor,n=this.colorAxis,m=this.colorKey;k(this.data,
function(c){var f=c[m];if(f=c.options.color||(c.isNull?g:n&&void 0!==f?n.toColor(f,c):c.color||a.color))c.color=f})},colorAttribs:function(a){var l={};g(a.color)&&(l[this.colorProp||"fill"]=a.color);return l}}})(k);(function(a){var g=a.colorPointMixin,k=a.each,n=a.merge,m=a.noop,l=a.pick,t=a.Series,v=a.seriesType,p=a.seriesTypes;v("heatmap","scatter",{animation:!1,borderWidth:0,nullColor:"#f7f7f7",dataLabels:{formatter:function(){return this.point.value},inside:!0,verticalAlign:"middle",crop:!1,overflow:!1,
padding:0},marker:null,pointRange:null,tooltip:{pointFormat:"{point.x}, {point.y}: {point.value}\x3cbr/\x3e"},states:{normal:{animation:!0},hover:{halo:!1,brightness:.2}}},n(a.colorSeriesMixin,{pointArrayMap:["y","value"],hasPointSpecificOptions:!0,getExtremesFromAll:!0,directTouch:!0,init:function(){var a;p.scatter.prototype.init.apply(this,arguments);a=this.options;a.pointRange=l(a.pointRange,a.colsize||1);this.yAxis.axisPointRange=a.rowsize||1},translate:function(){var a=this.options,f=this.xAxis,
g=this.yAxis,n=a.pointPadding||0,m=function(b,a,c){return Math.min(Math.max(a,b),c)};this.generatePoints();k(this.points,function(b){var d=(a.colsize||1)/2,c=(a.rowsize||1)/2,h=m(Math.round(f.len-f.translate(b.x-d,0,1,0,1)),-f.len,2*f.len),d=m(Math.round(f.len-f.translate(b.x+d,0,1,0,1)),-f.len,2*f.len),k=m(Math.round(g.translate(b.y-c,0,1,0,1)),-g.len,2*g.len),c=m(Math.round(g.translate(b.y+c,0,1,0,1)),-g.len,2*g.len),p=l(b.pointPadding,n);b.plotX=b.clientX=(h+d)/2;b.plotY=(k+c)/2;b.shapeType="rect";
b.shapeArgs={x:Math.min(h,d)+p,y:Math.min(k,c)+p,width:Math.abs(d-h)-2*p,height:Math.abs(c-k)-2*p}});this.translateColors()},drawPoints:function(){p.column.prototype.drawPoints.call(this);k(this.points,function(a){a.graphic.attr(this.colorAttribs(a))},this)},animate:m,getBox:m,drawLegendSymbol:a.LegendSymbolMixin.drawRectangle,alignDataLabel:p.column.prototype.alignDataLabel,getExtremes:function(){t.prototype.getExtremes.call(this,this.valueData);this.valueMin=this.dataMin;this.valueMax=this.dataMax;
t.prototype.getExtremes.call(this)}}),a.extend({haloPath:function(a){if(!a)return[];var c=this.shapeArgs;return["M",c.x-a,c.y-a,"L",c.x-a,c.y+c.height+a,c.x+c.width+a,c.y+c.height+a,c.x+c.width+a,c.y-a,"Z"]}},g))})(k)});
