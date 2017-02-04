// 全局字体样式
$("#toggle-textStyle").checkboxpicker();
$("#toggle-textStyle").on("change", function() {
});

// 容器背景颜色
$("#toggle-backgroundColor").checkboxpicker();
$("#toggle-backgroundColor").on("change", function() {
	if (options.backgroundColor == "#1F1D1D") {
		options.backgroundColor = "transparent";
		options.title.textStyle.color = "black";
		options.textStyle.color = "black";
	} else {
		options.backgroundColor = "#1F1D1D";
		options.title.textStyle.color = "white";
		options.textStyle.color = "white";
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

// 系列主体
$("#toggle-series").checkboxpicker();
$("#toggle-series").on("change", function() {
});

// 坐标轴
$("#toggle-axis").checkboxpicker();
$("#toggle-axis").on("change", function() {
});