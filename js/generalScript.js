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
		if (options.dataZoom) {
			options.dataZoom[1].textStyle.color = "black";
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
		if (options.dataZoom) {
			options.dataZoom[1].textStyle.color = "white";
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

// 系列主体
$("#toggle-series").checkboxpicker();
$("#toggle-series").on("change", function() {
});

