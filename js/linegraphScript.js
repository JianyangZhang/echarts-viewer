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
        text: "模拟数据",
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
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 3,
            shadowColor: 'rgba(0, 0, 0, 0.6)',
            shadowOffsetX: 2,
            shadowOffsetY: 2
        }
    }],
    series: [
        {
            name: "数据",
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