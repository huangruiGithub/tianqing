// 表格容器初始化
let myChart = echarts.init(document.getElementById('line'));
let myChart2 = echarts.init(document.getElementById("pie"));
let myChart3 = echarts.init(document.getElementById("bar"));
// 曲线图异步加载 下面ajax获取数据时将数据传入
myChart.setOption({
	title: {
		text: '曲线图数据展示',
		left: 'center',
		y: '5%'

	},
	xAxis: {
		data: [],
		axisLabel: {
			interval: 1
		}
	},
	yAxis: {
		axisLabel: {
			formatter: '{value}人'
		}
	},
	series: [{
		label: {
			show: true,
			position: 'top'
		},
		itemStyle: {
			color: 'rgb(63,135,240)'
		},
		name: '销量',
		type: 'line',
		smooth: true,
		// symbol: 'none',
		areaStyle: {
			color: new echarts.graphic.LinearGradient(255, 0, 0, 1, [{
				offset: 0,
				color: 'rgb(243,247,254)'
			}, {
				offset: 1,
				color: 'rgb(243,247,254)'
			}])
		},
		data: []
	}]
});
// 饼图异步加载 下面ajax获取数据时将数据传入
myChart2.setOption({
	title: {
		text: '饼状图数据展示',
		x: 'center',
		y: '5%'
	},
	series: [{
		name: '数据',
		type: 'pie',
		radius: '55%',
		center: ['50%', '60%'],
		data: []
	}]
});
// 柱状图异步加载 下面ajax获取数据时将数据传入
myChart3.setOption({
	color: ['#3398DB'],
	title: {
		text: '柱状图数据展示',
		x: 'center',
		y: '5%'
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'shadow'
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '3%',
		containLabel: true
	},
	xAxis: [{
		type: 'category',
		data: [],
		axisTick: {
			alignWithLabel: true
		}
	}],
	yAxis: [{
		type: 'value',
		name: '商品数',
	}],
	series: [{
		type: 'bar',
		barWidth: 25,
		data: [],
		name: '人'
	}]
});
// 用ajax获取数据然后再渲染图表
$ajax({
	url: "https://edu.telking.com/api/?type=month",
	success: function(res) {
		myChart.setOption({
			xAxis: {
				data: res.data.xAxis
			},
			series: {
				data: res.data.series
			}
		});
	},
	error: function(err) {
		console.log(err)
	}
})
$ajax({
	url: "https://edu.telking.com/api/?type=week",
	success: function(res) {
		let pieData = [];
		for (let i = 0; i < res.data.xAxis.length; i++) {
			pieData[i] = {};
			pieData[i].name = res.data.xAxis[i];
			pieData[i].value = res.data.series[i];
		}
		myChart2.setOption({
			series: {
				data: pieData
			}
		});

		myChart3.setOption({
			xAxis: {
				data: res.data.xAxis
			},
			series: {
				data: res.data.series
			}
		});
	},
	error: function(err) {
		console.log(err)
	}
})
