layui.use('form', function () {
    var form = layui.form;

    //自定义验证规则
    form.verify({
        username: function (value) {
            if (value.length < 2) {
                return '用户名至少得2个字符啊';
            }
        },
        pass: [
            /^[\S]{6,12}$/
            , '密码必须6到12位，且不能出现空格'
        ],
        repass: function (value) {
            // 确认密码逻辑
            // 获取密码框的值，和此值进行比较
            //获取表单区域所有值
            var password = $(".password").val();
            if (value !== password) {
                return "两次密码不一致，请确认！"
            }
        }
    });
});

// 给切换按钮绑定点击事件
$(function () {
    // 切换显示登陆注册
    $(".skip").on("click", function (e) {
        // 切换显示
        // console.log("点击了切换按钮");
        $(".login").toggle();
        $(".regist").toggle();
        // 下拉显示
        // $(".login").slideToggle();
        // $(".regist").slideToggle();
        // 淡入淡出
        // $(".login").fadeToggle();
        // $(".regist").fadeToggle();
    })

    // 注册事件
    $(".regist .layui-btn").on("click", function (e) {
        e.preventDefault()
        var registData = {
            "username": $(".regist [name=username]").val(),
            "password": $(".regist [name=password]").val()
        }
        var settings = {
            "url": "/api/reguser",
            "method": "POST",
            "timeout": 0,
            "data": registData
        };
        $.ajax(settings).done(function (response) {
            if (response.status == 0) {
                layer.msg('恭喜你注册成功！');
                $(".regist .skip").click();
            } else {
                layer.msg(response.message);
            }
        });
    })
    // 登陆事件
    $(".login .layui-btn").on("click", function (e) {
        e.preventDefault()
        var registData = {
            "username": $(".login [name=username]").val(),
            "password": $(".login [name=password]").val()
        }
        var settings = {
            "url": "/api/login",
            "method": "POST",
            "timeout": 0,
            "data": registData
        };
        $.ajax(settings).done(function (response) {
            if (response.status == 0) {
                layer.msg('恭喜你登陆成功！');
                localStorage.setItem("token", response.token)
            } else {
                layer.msg(response.message);
            }
        });
    })
})