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
		textStyle: {color: "white"}
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
            color: 'white',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        },
		textStyle: {color: "white"}
    }],
    series: [
        {
            name: "Data",
            type: 'line',
            smooth: true,
            symbol: 'none',
            sampling: 'average',
            itemStyle: {
                normal: {
                    color: 'rgb(255, 70, 131)'
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgb(255, 158, 68)'
                    }, {
                        offset: 1,
                        color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            data: data
        }
    ]
};

myChart.setOption(options);