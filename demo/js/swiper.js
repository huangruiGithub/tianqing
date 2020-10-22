
let oSwiper = document.querySelector(".swiper");
let oDots = document.querySelector(".dots");
let oSwItems = document.querySelectorAll(".swiper-item");
let oLeft = document.querySelector(".swiper-left");
let oRight = document.querySelector(".swiper-right");

// 设置显示图片的下标
let currentIndex = 0;

// 根据图片数量自动生成下面的小点
for (let i = 0; i < oSwItems.length; i++) {
	let aSpan = document.createElement("span");
	// 设置新小点的index属性
	aSpan.setAttribute("index", i)
	oDots.appendChild(aSpan);
}
// 获取小点
let oSpans = document.querySelectorAll(".dots span");
// 添加小点选中类
oSpans[currentIndex].className = "active";
// 小点点击切换图片
oDots.onclick = function(e) {
	if (e.target.tagName === "SPAN") {
		// 将正在显示的图片透明度变为0 和 小点类名变空
		hide(currentIndex);
		// 将currentIndex赋值为小点的index值
		currentIndex = parseInt(e.target.getAttribute("index"));
		// 根据currentIndex值显示图片和小点类名变为active
		show(currentIndex);
	}
}

// 用来判断定时器是否正在工作
let isRun = false;

function start() {
	// 用来判断定时器是否正在工作 是的话就跳出
	if (isRun) {
		return
	}
	timer = setInterval(function() {
		// 将正在显示的图片透明度变为0 和 小点类名变空
		hide(currentIndex)
		// 改变currentIndex值 这里是增加
		addIndex()
		// 根据currentIndex值显示图片和小点类名变为active
		show(currentIndex)
	}, 3000)
	isRun = true;
}



oLeft.onclick = function() {
	// 注释同上
	hide(currentIndex)
	// 改变currentIndex值 这里是减小
	subtractIndex()
	show(currentIndex)
}

oRight.onclick = function() {
	hide(currentIndex)
	addIndex()
	show(currentIndex)

}

function addIndex() {
	// 判断currentIndex是否为最后一张图片 如果是将其设置为第一张图片下标 否则为加1
	if (currentIndex == oSwItems.length - 1) {
		currentIndex = 0
	} else {
		currentIndex++;
	}
}

function subtractIndex() {
	// 判断currentIndex是否为第一张图片 如果是将其设置为最后一张图片下标 否则为减1
	if (currentIndex == 0) {
		currentIndex = oSwItems.length - 1
	} else {
		currentIndex--;
	}
}

function hide(currentIndex) {
	// 将正在显示的图片透明度变为0 
	oSwItems[currentIndex].style.opacity = 0;
	// 将小点的类名变为空
	oSpans[currentIndex].className = '';

}

function show(currentIndex) {
	// 根据currentIndex值将图片透明度设置为1
	oSwItems[currentIndex].style.opacity = 1;
	// 将小点的类名变为active
	oSpans[currentIndex].className = 'active';
}
// 开启定时器
start();

// 鼠标移入轮播图内清除定时器
oSwiper.onmousemove = function() {
	clearInterval(timer);
	isRun = false;
}
// 鼠标移出轮播图内定时器开启
oSwiper.onmouseout = function() {
	start();
}
