/**
 * Created by Administrator on 2017/4/7.
 */
var $ = require("../common/wap.plugins");
var GetQueryString = require("../common/GetQueryString");
var Vue = require("vue");

$(document).ready(function () {
    var curIndex = GetQueryString("data");//获取url参数data值
    var arrs = [1, 2, 3];
    var choiceRadio = ["复活节岛石", "复活节羊肉", "复活节火腿", "复活节十字架", "复活节百合花", "复活节兔子"];
    var choiceData = {
            data: [
                {
                    "arrs": [
                        {txt:"复活节兔子",flag:false},
                        {txt:"复活节岛石",flag:false},
                        {txt:"复活节火腿",flag:false},
                        {txt:"珍藏靓号0元选",flag:false}
                    ],
                    "correctIndex":1
                },
                {
                    "arrs": [
                        {txt:"火腿",flag:false},
                        {txt:"腊肠",flag:false},
                        {txt:"羊肉",flag:false},
                        {txt:"APP充值9.5折",flag:false}
                    ],
                    "correctIndex":2
                },
                {
                    "arrs": [
                        {txt:"腊肠",flag:false},
                        {txt:"巧克力",flag:false},
                        {txt:"火腿",flag:false},
                        {txt:"APP充值9.5折",flag:false}
                    ],
                    "correctIndex":2
                },
                {
                    "arrs": [
                        {txt:"十字架",flag:false},
                        {txt:"巧克力",flag:false},
                        {txt:"火腿",flag:false},
                        {txt:"万能副卡0月租",flag:false}
                    ],
                    "correctIndex":0
                },
                {
                    "arrs": [
                        {txt:"羔羊",flag:false},
                        {txt:"百合花",flag:false},
                        {txt:"兔子",flag:false},
                        {txt:"珍藏靓号0元选",flag:false}
                    ],
                    "correctIndex":1
                },
                {
                    "arrs": [
                        {txt:"兔子",flag:false},
                        {txt:"百合花",flag:false},
                        {txt:"羔羊",flag:false},
                        {txt:"万能副卡0月租",flag:false}
                    ],
                    "correctIndex":0
                }

            ]
        }
        ;
    arrs.sort(function () {
        return (0.5 - Math.random());
    });
    $.popCtrl();

    var radio = new Vue({
        el: "#innerPageBox",
        data: {
            radios: choiceData.data[parseInt(curIndex) - 1].arrs,
            correctIndex:choiceData.data[parseInt(curIndex) - 1].correctIndex,
            link:""
        },
        methods:{
            radioChange:function (index) {
                var _this = this;
                for(var i = 0;i<this.radios.length;i++){
                    if(i!=index){
                        _this.radios[i].flag = false;
                    }
                }
                _this.radios[index].flag = true;
                //选择正确
                if(index==_this.correctIndex){
                    _this.link = "guessCorrect.html";
                }
                //选择错误
                else{
                    //选中10086服务
                    if(index==3){
                        _this.link = "guessWrong.html?state=0";
                    }
                    else{
                        _this.link = "guessWrong.html?state=1";
                    }

                }
            },
            showEgg:function (event) {
                var _thisDOM = event.target;
                _thisDOM.className = "page_ele08";
                var newNode = document.createElement("i");
                newNode.className = "com_data data0" + curIndex + "_0" + arrs[0];
                if (curIndex) {
                    _thisDOM.parentNode.appendChild(newNode)
                }
            }
        }

    });

});