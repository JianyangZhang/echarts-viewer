$('#toggle-title').checkboxpicker();
$('#toggle-title').on('change', function () {
});

var myChart = echarts.init(document.getElementById("chart1"));
var gauge = {
	title: {show: true, text: "CPU 利用率"},
	series: [{
		name: "a",
		type: "gauge",
		min: 0,
		max: 100,
		radius: 125,
		detail: {formatter: "{value}%", offsetCenter: ["0", "15%"]},
		data: [{value: 50}],
		pointer: {length: 0, width: 0},
		title: {show: false},
		splitLine: {show: false},
		axisTick: {show: false},
		axisLabel: {show: false},
		axisLine: {lineStyle: {width: 50, opacity: 0.9, color: [[0.5, '#068930'], [1, '#cecedb']]}},
		startAngle: 205,
		endAngle: -25,
		splitNumber: 1
	}, {
		name: "b",
		type: "gauge",
		min: 0,
		max: 100,						
		radius: 140,	
		detail: {show: false},
		pointer: {length: 0, width: 0},
		title: {show: false},
		splitLine: {show: false},
		axisTick: {show: false},
		axisLabel: {show: false},
		axisLine: {lineStyle: {width: 10, opacity: 0.9, color: [[0.6, '#068930'], [0.85, '#f79400'], [1, '#d80404']]}},
		startAngle: 205,
		endAngle: -25,
		splitNumber: 1
	}]
};
myChart.setOption(gauge);
setInterval(function () {
	// Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
	var randomValue = Math.floor(Math.random() * (100 - 25 + 1)) + 25;
	gauge.series[0].data[0].value = randomValue;
	gauge.series[0].axisLine.lineStyle.color[0][0] = randomValue / 100;
	if (randomValue <= 60) {
		gauge.series[0].axisLine.lineStyle.color[0][1] = "#068930";
	}
	if (randomValue > 60 && randomValue <= 85) {
		gauge.series[0].axisLine.lineStyle.color[0][1] = "#f79400";
	}
	if (randomValue > 85) {
		gauge.series[0].axisLine.lineStyle.color[0][1] = "#d80404";	
	}
	myChart.setOption(gauge);
}, 1500);

$('#toggle-title').on('change', function() {
	if (gauge.title.show == true) {
		gauge.title.show = false;
	} else {
		gauge.title.show = true;
	}
	myChart.setOption(gauge);
});
