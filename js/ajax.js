
/* 
一个简单的AJAX get 请求的方法
参数
url		 请求地址
success  数据下载成功以后执行的函数
error    数据下载失败以后执行的函数 */

function $ajax({
	url,
	success,
	error
}) {
	var xhr = new XMLHttpRequest();
	// 将数据转成json对象
	xhr.responseType = 'json';
	// 请求方法 地址 是否异步
	xhr.open("get", url, true);
	xhr.send();
	xhr.onreadystatechange = function() {
		// 响应就绪状态为4时响应已完成
		if (xhr.readyState == 4) {
			// 响应状态码为200时为有效响应
			if (xhr.status == 200) {
				if (success) {
					// 判断如果有传success将res传入success
					success(xhr.response);
				}
			} else {
				// 判断如果有传error 发生错误时打印status
				if (error) {
					error("Error:" + xhr.status);
				}
			}
		}
	}
}
