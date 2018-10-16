/**
 * Created by Administrator on 2017/4/7.
 */
var $ = require("jquery");
var GetQueryString = require("../common/GetQueryString");

var curState = GetQueryString("state");

if(curState==0){
    $("#txt").html(" 啊哦，猜错了！你对我感兴趣吗？快下载<br/>“广东移动手机营业厅”APP瞧瞧吧~")
}
else{
    $("#txt").html(" 啊哦，你猜错了！<br/>看来你和好朋友的默契有待加强哟~")
}