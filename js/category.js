$(function () {
    function initCateData() {
        // 请求分类数据
        var settings = {
            "url": "/my/article/cates",
            "method": "GET",
            "timeout": 0
        };
        $.ajax(settings).done(function (response) {
            // 渲染模版数据
            var cateList = template('tpl', response)
            $("tbody").html(cateList)
        });
    }
    initCateData();

    // 添加分类数据弹出层
    var index = null;
    $("#add-cate").on("click", function (e) {
        index = layer.open({
            type: 1,
            area: ['500px', '300px'],
            btnAlign: 'c',
            title: '添加文章分类',
            content: $("#addCategory").html()
        });
    })

    // 添加分类接口
    $("body").on("click", ".submit-cate", function (e) {
        e.preventDefault();
        var cateData = {
            "name": $(".layui-form [name=category]").val(),
            "alias": $(".layui-form [name=alias]").val()
        }
        var settings = {
            "url": "/my/article/addcates",
            "method": "POST",
            "timeout": 0,
            "data": cateData
        };
        $.ajax(settings).done(function (response) {
            if (response.status == 0) {
                layer.msg('添加分类成功');
                layer.close(index);
                initCateData();
            } else {
                layer.msg(response.message);
            }
        });
    })
})