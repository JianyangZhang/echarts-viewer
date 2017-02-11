// 随机数据
var base = +new Date(1968, 9, 3);
var oneDay = 24 * 3600 * 1000;
var date = [];
var data = [Math.random() * 300];
for (var i = 1; i < 20000; i++) {
    var now = new Date(base += oneDay);
    date.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    data.push(Math.round((Math.random() - 0.5) * 20 + data[i - 1]));
}

var myChart = echarts.init(document.getElementById("showcase"));
var options = {
    tooltip: {
        trigger: "axis",
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },
	textStyle: {color: "white"},
    title: {
		show: true,
        left: "center",
        text: "Simulated Data",
		textStyle: {color: "white"},
		top: 18
    },	
	backgroundColor: "#1F1D1D",
    toolbox: {
		show: true,
		right: "3%",
        feature: {
            dataZoom: {
                yAxisIndex: "none"
            },
			dataView: {},
			saveAsImage: {},
			restore: {}
        }
    },
    xAxis: {
        type: 'category',
        boundaryGap: false,
        data: date,
		axisLine: {lineStyle: {color: "white"}},
		splitLine: {show: false, lineStyle: {type: "dashed"}},
		splitArea: {show: false}
    },
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
		axisLine: {lineStyle: {color: "white"}},
		splitLine: {show: true, lineStyle: {type: "dashed"}},
		splitArea: {show: false}
    },
    dataZoom: [{
        type: 'inside',
        start: 0,
        end: 10
    }, {
		type: 'slider',
		show: true,
        start: 0,
        end: 10,
        handleSize: '80%',
        handleStyle: {
            color: 'white'
        },
		textStyle: {color: "white"}
    }],
    series: [
        {
            name: "Data",
            type: 'line',
            smooth: true,
            symbol: 'emptyCircle',
			symbolSize: 1,
            sampling: 'average',
			smooth: true,
            itemStyle: {
                normal: {
                    color: '#B342F4'
                }
            },
            areaStyle: {
                normal: {
					opacity: null,
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: '#B342F4'
                    }, {
                        offset: 1,
                        color: '#D389FF'
                    }])
                }
            },
            data: data
        }
    ]
};

myChart.setOption(options);

// 网格线-横向
$("#toggle-splitLine-x").checkboxpicker();
$("#toggle-splitLine-x").on("change", function() {
	if (options.xAxis.splitLine.show == true) {
		options.xAxis.splitLine.show = false;
	} else {
		options.xAxis.splitLine.show = true;
	}
	myChart.setOption(options);
});

// 网格线-纵向
$("#toggle-splitLine-y").checkboxpicker();
$("#toggle-splitLine-y").on("change", function() {
	if (options.yAxis.splitLine.show == true) {
		options.yAxis.splitLine.show = false;
	} else {
		options.yAxis.splitLine.show = true;
	}
	myChart.setOption(options);
});

// 区域间隔色-基于x轴
$("#toggle-splitArea-x").checkboxpicker();
$("#toggle-splitArea-x").on("change", function() {
	if (options.xAxis.splitArea.show == true) {
		options.xAxis.splitArea.show = false;
	} else {
		options.xAxis.splitArea.show = true;
	}
	myChart.setOption(options);
});

// 区域间隔色-基于y轴
$("#toggle-splitArea-y").checkboxpicker();
$("#toggle-splitArea-y").on("change", function() {
	if (options.yAxis.splitArea.show == true) {
		options.yAxis.splitArea.show = false;
	} else {
		options.yAxis.splitArea.show = true;
	}
	myChart.setOption(options);
});

// 数据区域缩放工具
$("#toggle-dataZoom").checkboxpicker();
$("#toggle-dataZoom").on("change", function() {
	if (options.dataZoom[1].show == true) {
		options.dataZoom[1].show = false;
	} else {
		options.dataZoom[1].show = true;
	}
	myChart.setOption(options);
});

// 坐标轴
$("#toggle-area").checkboxpicker();
$("#toggle-area").on("change", function() {
	if (options.series[0].areaStyle.normal.opacity == 0) {
		options.series[0].areaStyle.normal.opacity = null;
	} else {
		options.series[0].areaStyle.normal.opacity = 0;
	}
	myChart.setOption(options);
});
