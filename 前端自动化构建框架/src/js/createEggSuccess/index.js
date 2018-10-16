/**
 * Created by Administrator on 2017/4/7.
 */
var $ = require("../common/wap.plugins");
var RadioComponent = require("../common/radioComponent");
$(document).ready(function () {
    $.popCtrl();

    //分享按钮
    $("#shareBtn").bind("click",function () {
       $("#sharePop").addClass("show");
    });
});

