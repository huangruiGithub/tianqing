let oSpan = document.querySelectorAll(".main-top-right .item span");
let oLine = document.querySelector(".main-top-right .line");
let oDiv = document.querySelectorAll(".main-top-right .item");

// 获取类名为active的下标的函数
function getActiveIdnex() {
	let result = 0;
	for (let i = 0; i < oSpan.length; i++) {
		if (oSpan[i].className.indexOf("active") !== -1) {
			result = i;
			break;
		}
	}
	return result;
}
// 改变横线长度和位置的函数 
changeLine(getActiveIdnex());

for (let a = 0; a < oSpan.length; a++) {
	// 点击时将改变横线长度，位置 和 span的类名
	oDiv[a].onclick = function() {
		changeLine(a)
		oSpan[getActiveIdnex()].className = '';
		this.querySelector("span").className = 'active';
	}
	// 鼠标移入时改变横线位置和长度
	oDiv[a].onmousemove = function() {
		changeLine(a);
	}
	// 鼠标移出时将横线位长度和位置改变回类名为active的节点长度
	oDiv[a].onmouseout = function() {
		changeLine(getActiveIdnex())
	}
}
// 改变横线长度和位置的函数
function changeLine(index) {
	// 将横线的距离左边的长度改为包着文字的span距离容器左边的值
	oLine.style.left = oSpan[index].offsetLeft + "px";
	// 将横线的长度改为包着文字的span宽度
	oLine.style.width = oSpan[index].offsetWidth + "px";

}
