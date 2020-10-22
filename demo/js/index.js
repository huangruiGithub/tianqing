// 获取底部
let oFootRight = document.querySelector(".footer-right")
// 底部数据
let footData = [
	'NEWS', 'SPORT', 'WEATHER', 'FUTUR', 'ETRAVEL',
	'CHANNELS', 'CULTURE', 'AUTOS', 'FOOD', 'RADIO',
	'OVERVIEW', 'NATURE', 'LOCAL', 'EARTH', '',
	'TIMELINE', 'MUSIC', 'SHOP', 'TV',
];
for (let i = 0; i < footData.length; i++) {
	// 创建节点
	let createA = document.createElement("a");
	// 设置a标签的href属性
	createA.setAttribute("href","#")
	// 将数据插入新节点
	createA.innerHTML = footData[i];
	// 将新节点插入底部
	oFootRight.appendChild(createA);
}
