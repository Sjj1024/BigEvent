$(function () {
    // 调整菜单互斥打开
    $(".layui-nav li>a").on("click", function (e) {
        $(this).parent().siblings().removeClass("layui-nav-itemed").removeClass("layui-this");
        if ($(this).parent().find("dl").length) {
            $(this).parent().find("dl").children().eq(0).children()[0].click();
        }
    })

    // 退出登录
    $(".quit").on("click", function (e) {
        localStorage.removeItem("token");
        location.href = "/login.html";
    })

    function getSome() {
        console.log("getSome");
    }
})

// 获取用户信息并渲染
function getUserInfo() {
    console.log(window);
    var settings = {
        "url": "/my/userinfo",
        "method": "GET",
        "timeout": 0,
    };
    $.ajax(settings).done(function (response) {
        if (response.status === 0) {
            var userName = response.data.nickname;
            $(".user-name").html(userName);
        } else {
            layer.msg(response.message);
        }
    });
}
getUserInfo();