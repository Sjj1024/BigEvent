$(function () {
    // 获取用户信息，并展示到页面上
    function getInfo() {
        var settings = {
            "url": "/my/userinfo",
            "method": "GET",
            "timeout": 0,
        };
        $.ajax(settings).done(function (response) {
            if (response.status === 0) {
                var id = response.data.id;
                var userName = response.data.username;
                var nickname = response.data.nickname;
                var email = response.data.email;
                $("[name=id]").val(id);
                $("[name=username]").val(userName);
                $("[name=nickname]").val(nickname);
                $("[name=email]").val(email);
            } else {
                layer.msg(response.message);
            }
        });
    }
    getInfo();

    // 提交修改按钮
    $(".submit-edit").on("click", function (e) {
        e.preventDefault();
        var userData = {
            id: $("[name=id]").val(),
            nickname: $("[name=nickname]").val(),
            email: $("[name=email]").val(),
        }
        var settings = {
            "url": "/my/userinfo",
            "method": "POST",
            "timeout": 0,
            "data": userData
        };
        $.ajax(settings).done(function (response) {
            layer.msg(response.message);
            if (response.status === 0) {
                // 修改成功刷新页面数据
                window.parent.getUserInfo();
            }
        });
    })

    // 重置按钮
    $(".reset").on("click", function (e) {
        e.preventDefault();
        getInfo();
    })
})