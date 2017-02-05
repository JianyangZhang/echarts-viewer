// 全局字体样式
$("#toggle-textStyle").checkboxpicker();
$("#toggle-textStyle").on("change", function() {
});

// 容器背景颜色
$("#toggle-backgroundColor").checkboxpicker();
$("#toggle-backgroundColor").on("change", function() {
	if (options.backgroundColor == "#1F1D1D") {
		if (options.backgroundColor) {
			options.backgroundColor = "transparent";
		}
		if (options.title) {
			options.title.textStyle.color = "black";
		}
		if (options.textStyle) {
			options.textStyle.color = "black";
		}
		if (options.xAxis) {
			options.xAxis.axisLine.lineStyle.color = "black";
		}
		if (options.yAxis) {
			options.yAxis.axisLine.lineStyle.color = "black";
		}
	} else {
		if (options.backgroundColor) {
			options.backgroundColor = "#1F1D1D";
		}
		if (options.title) {
			options.title.textStyle.color = "white";
		}
		if (options.textStyle) {
			options.textStyle.color = "white";
		}
		if (options.xAxis) {
			options.xAxis.axisLine.lineStyle.color = "white";
		}
		if (options.yAxis) {
			options.yAxis.axisLine.lineStyle.color = "white";
		}
	}
	myChart.setOption(options);
});

// 标题
$("#toggle-title").checkboxpicker();
$("#toggle-title").on("change", function() {
	if (options.title.show == true) {
		options.title.show = false;
	} else {
		options.title.show = true;
	}
	myChart.setOption(options);
});

// 工具栏
$("#toggle-toolbox").checkboxpicker();
$("#toggle-toolbox").on("change", function() {
	if (options.toolbox.show == true) {
		options.toolbox.show = false;
	} else {
		options.toolbox.show = true;
	}
	myChart.setOption(options);
});

// 坐标轴
$("#toggle-axis").checkboxpicker();
$("#toggle-axis").on("change", function() {
});

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

// 系列主体
$("#toggle-series").checkboxpicker();
$("#toggle-series").on("change", function() {
});