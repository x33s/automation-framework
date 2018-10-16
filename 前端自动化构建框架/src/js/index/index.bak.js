var Vue = require("vue");
// var slick = require("slick-carousel");
var $ = require("../common/wap.plugins");
var resLoader = require("../common/resLoader");
var InputMaxLength = require("../common/InputMaxLength");

var resUrl = "../images/";
// new Vue({
//     el: '#app',
//     render: function(h){
//         return h(App);
//     }
// });

$(document).ready(function () {
    $.popCtrl();

    var curIndex = null;
    //限制输入电话号码位数
    var inputMaxLength01 = new InputMaxLength(document.getElementById("telephone"),11);
    //限制输入验证码位数
    var inputMaxLength02 = new InputMaxLength(document.getElementById("code"),4);

    //马上加料
    $("#showPop01Btn").bind("click",function () {
        $("#popBox01").addClass("show");
    });

    //关闭添加材料弹框提示
    $("#coverBox").bind("click",function () {
       $(this).fadeOut();
    });

    //点击添加材料
    $("#eggBox").find(".item").bind("click",function () {
        const _this = $(this),
              _index = parseInt(_this.index()),
              _left = _this.css("left"),
              _top = _this.css("top");

        curIndex = _index;

        var node = document.createElement("div");
        node.className = 'foodMove sprite_food0'+(_index+1);
        node.style.left = _left;
        node.style.top = _top;
        $("#eggBox").append(node);
        $(node).animate({
            left:"204px",
            top:"-258px"
        },function () {

            $("#popBox02").fadeIn(function () {
                $("#popBox01").removeClass("show");
            });
            $("#foodItem").append('<div class="sprite_food0'+(_index+1)+'"></div>');
        });
    });
    
    //点击添加材料按钮（登陆按钮）
    $("#loginBtn").bind("click",function () {
        $("#popBox02").hide();
        $("#popBox05").addClass("show");
        //模拟ajax提交数据后跳转
        setTimeout(function () {
            window.location.href = "createEggSuccess.html";
        },1000);

    });
    //显示资格查询弹框
    $("#popBtn03").bind("click",function () {
       $("#popBox03").addClass("show");
    });
    //显示游戏规则弹框
    $("#popBtn04").bind("click",function () {
        $("#popBox04").addClass("show");
    });


});