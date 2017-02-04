// 全局字体样式
$("#toggle-textStyle").checkboxpicker();
$("#toggle-textStyle").on("change", function() {
});

// 容器背景颜色
$("#toggle-backgroundColor").checkboxpicker();
$("#toggle-backgroundColor").on("change", function() {
	if (gauge.backgroundColor == "#1F1D1D") {
		gauge.backgroundColor = "transparent";
		gauge.title.textStyle.color = "black";
	} else {
		gauge.backgroundColor = "#1F1D1D";
		gauge.title.textStyle.color = "white";
	}
	myChart.setOption(gauge);
});

// 标题
$("#toggle-title").checkboxpicker();
$("#toggle-title").on("change", function() {
	if (gauge.title.show == true) {
		gauge.title.show = false;
	} else {
		gauge.title.show = true;
	}
	myChart.setOption(gauge);
});

// 工具栏
$("#toggle-toolbox").checkboxpicker();
$("#toggle-toolbox").on("change", function() {
	if (gauge.toolbox.show == true) {
		gauge.toolbox.show = false;
	} else {
		gauge.toolbox.show = true;
	}
	myChart.setOption(gauge);
});

// 系列主体
$("#toggle-series").checkboxpicker();
$("#toggle-series").on("change", function() {
});