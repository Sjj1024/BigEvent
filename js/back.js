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
})