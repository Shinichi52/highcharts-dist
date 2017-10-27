/*
 Highcharts JS v6.0.2 (2017-10-20)
 X-range series

 (c) 2010-2017 Torstein Honsi, Lars A. V. Cabrera

 
*/
(function(e){"object"===typeof module&&module.exports?module.exports=e:e(Highcharts)})(function(e){(function(b){var e=b.defined,p=b.seriesTypes.column,l=b.each,t=b.isNumber,q=b.isObject,m=b.merge,n=b.pick,u=b.seriesType,v=b.wrap,w=b.Axis,r=b.Point,x=b.Series;u("xrange","column",{colorByPoint:!0,dataLabels:{verticalAlign:"middle",inside:!0,formatter:function(){var a=this.point.partialFill;q(a)&&(a=a.amount);e(a)||(a=0);return 100*a+"%"}},tooltip:{headerFormat:'\x3cspan style\x3d"font-size: 0.85em"\x3e{point.x} - {point.x2}\x3c/span\x3e\x3cbr/\x3e',
pointFormat:'\x3cspan style\x3d"color:{point.color}"\x3e\u25cf\x3c/span\x3e {series.name}: \x3cb\x3e{point.yCategory}\x3c/b\x3e\x3cbr/\x3e'},borderRadius:3},{type:"xrange",forceDL:!0,parallelArrays:["x","x2","y"],requireSorting:!1,animate:b.seriesTypes.line.prototype.animate,cropShoulder:1,getExtremesFromAll:!0,getColumnMetrics:function(){function a(){l(d.series,function(a){var c=a.xAxis;a.xAxis=a.yAxis;a.yAxis=c})}var c,d=this.chart;a();c=p.prototype.getColumnMetrics.call(this);a();return c},cropData:function(a,
c,d,g){c=x.prototype.cropData.call(this,this.x2Data,c,d,g);c.xData=a.slice(c.start,c.end);return c},translatePoint:function(a){var c=this.xAxis,d=this.columnMetrics,g=this.options.minPointLength||0,b=a.plotX,f=n(a.x2,a.x+(a.len||0)),f=c.translate(f,0,0,0,1),k=f-b,h=this.chart.inverted,e=n(this.options.borderWidth,1)%2/2;g&&(g-=k,0>g&&(g=0),b-=g/2,f+=g/2);b=Math.max(b,-10);f=Math.min(Math.max(f,-10),c.len+10);a.shapeArgs={x:Math.floor(Math.min(b,f))+e,y:Math.floor(a.plotY+d.offset)+e,width:Math.round(Math.abs(f-
b)),height:Math.round(d.width),r:this.options.borderRadius};a.tooltipPos[0]+=h?0:k/2;a.tooltipPos[1]-=h?k/2:d.width/2;if(d=a.partialFill)q(d)&&(d=d.amount),t(d)||(d=0),c=a.shapeArgs,a.partShapeArgs={x:c.x,y:c.y,width:c.width,height:c.height,r:this.options.borderRadius},a.clipRectArgs={x:c.x,y:c.y,width:Math.round(c.width*d),height:c.height}},translate:function(){p.prototype.translate.apply(this,arguments);l(this.points,function(a){this.translatePoint(a)},this)},drawPoint:function(a,c){var d=this.chart.renderer,
b=a.graphic,e=a.shapeType,f=a.shapeArgs,k=a.partShapeArgs,h=a.clipRectArgs;if(a.isNull)b&&(a.graphic=b.destroy());else{if(b)a.graphicOriginal[c](m(f));else a.graphic=b=d.g("point").addClass(a.getClassName()).add(a.group||this.group),a.graphicOriginal=d[e](f).addClass(a.getClassName()).addClass("highcharts-partfill-original").add(b);k&&(a.graphicOverlay?(a.graphicOverlay[c](m(k)),a.clipRect.animate(m(h))):(a.clipRect=d.clipRect(h.x,h.y,h.width,h.height),a.graphicOverlay=d[e](k).addClass("highcharts-partfill-overlay").add(b).clip(a.clipRect)))}},
drawPoints:function(){var a=this,c=this.chart.pointCount<(a.options.animationLimit||250)?"animate":"attr";l(a.points,function(b){a.drawPoint(b,c)})}},{init:function(){r.prototype.init.apply(this,arguments);var a=this.series.chart.options.chart.colorCount;this.y||(this.y=0);this.colorIndex=this.y%a;return this},getLabelConfig:function(){var a=r.prototype.getLabelConfig.call(this),c=this.series.yAxis.categories;a.x2=this.x2;a.yCategory=this.yCategory=c&&c[this.y];return a},tooltipDateKeys:["x","x2"],
isValid:function(){return"number"===typeof this.x&&"number"===typeof this.x2}});v(w.prototype,"getSeriesExtremes",function(a){var c=this.series,b,e;a.call(this);this.isXAxis&&(b=n(this.dataMax,-Number.MAX_VALUE),l(c,function(a){a.x2Data&&l(a.x2Data,function(a){a>b&&(b=a,e=!0)})}),e&&(this.dataMax=b))})})(e)});
