/**
 * Created by Administrator on 2017/4/7.
 */
var $ = require("../common/wap.plugins");
var InputMaxLength = require("../common/InputMaxLength");
$(document).ready(function () {
    $.popCtrl();
//限制输入电话号码位数
    var inputMaxLength01 = new InputMaxLength(document.getElementById("telephone"), 11);
//限制输入验证码位数
    var inputMaxLength02 = new InputMaxLength(document.getElementById("code"), 4);
});