var myChart = echarts.init(document.getElementById("showcase"));
var options = {
	title: {show: true, text: "CPU Utilization", textStyle: {color: "white", fontSize: 18}, left: "center"},
	backgroundColor: "#1F1D1D",
	tooltip : {
		formatter: "{a} <br/>{b} : {c}%"
    },
	toolbox: {
		right: "3%",
		show: true,
		itemSize: 20,
		feature: {
			dataView: {},
			saveAsImage: {},			
			restore: {}
		}
	},
	series: [{
		name: "Outer Indicator",
		type: "gauge",
		min: 0,
		max: 100,						
		radius: 115,	
		detail: {show: false},
		pointer: {length: 0, width: 0},
		title: {show: false},
		splitLine: {show: false},
		axisTick: {show: false},
		axisLabel: {show: false},
		axisLine: {lineStyle: {width: 10, opacity: 0.9, color: [[0.6, "#32A82D"], [0.85, "#D77728"], [1, "#E03434"]]}},
		startAngle: 205,
		endAngle: -25,
		splitNumber: 1
	}, {
		name: "CPU Utilization",
		type: "gauge",
		min: 0,
		max: 100,
		radius: 100,
		detail: {formatter: "{value}%", offsetCenter: ["0", "15%"]},
		data: [{value: 50}],
		pointer: {length: 0, width: 0},
		title: {show: false},
		splitLine: {show: false},
		axisTick: {show: false},
		axisLabel: {show: false},
		axisLine: {lineStyle: {width: 50, opacity: 0.9, color: [[0.5, "#32A82D"], [1, "#262626"]]}},
		startAngle: 205,
		endAngle: -25,
		splitNumber: 1
	}]
};
myChart.setOption(options);
setInterval(function () {
	// Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	var randomValue = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
	options.series[1].data[0].value = randomValue;
	options.series[1].axisLine.lineStyle.color[0][0] = randomValue / 100;
	if (randomValue <= 60) {
		options.series[1].axisLine.lineStyle.color[0][1] = "#32A82D";
	}
	if (randomValue > 60 && randomValue <= 85) {
		options.series[1].axisLine.lineStyle.color[0][1] = "#D77728";
	}
	if (randomValue > 85) {
		options.series[1].axisLine.lineStyle.color[0][1] = "#E03434";	
	}
	myChart.setOption(options);
}, 1500);