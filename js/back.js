$(function () {
    // 调整菜单互斥打开
    $(".layui-nav li>a").on("click", function (e) {
        // console.log(this);
        $(this).parent().siblings().removeClass("layui-nav-itemed").removeClass("layui-this");
        if ($(this).parent().find("dl").length) {
            // console.log($(this).parent().find("dl").children().eq(0).children());
            $(this).parent().find("dl").children().eq(0).children().click();
        }
    })
})