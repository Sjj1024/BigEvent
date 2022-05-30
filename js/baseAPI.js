$.ajaxPrefilter(function (options) {
    // console.log(options.url) // 获取出请求的地址
    //发起真正的Ajax请求之前，统一拼接请求的根路径
    options.url = 'http://www.liulongbin.top:3007' + options.url
    // 配置认证信息
    options.headers = {
        "Authorization": localStorage.getItem("token") ? localStorage.getItem("token") : "",
        "Content-Type": "application/x-www-form-urlencoded"
    }
    // 统一权限认证
    options.complete = function (res) {
        // console.log(res);
        // 判断访问后台时候是否存在token
        var url = location.href;
        console.log("正在访问的URL是：" + url);
        if (!url.includes("login.html") && !localStorage.getItem("token")) {
            location.href = "/login.html";
        }
    }
});

$(function () {
    // 判断访问后台时候是否存在token
    var url = location.href;
    // console.log("正在访问的URL是：" + url);
    if (!url.includes("login.html") && !localStorage.getItem("token")) {
        location.href = "/login.html";
    }
})