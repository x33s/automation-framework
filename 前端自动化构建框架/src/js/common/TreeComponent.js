/**
 * Created by Administrator on 2017/2/24.
 */
var TreeComponent = (function () {

    var progress = document.getElementById("progress"),
        progressPercent = progress.querySelector(".progress"),
        progressTxt = progress.querySelector(".txt"),
        treeCanvas = document.getElementById("treeCanvas"),
        tree = treeCanvas.querySelector(".tree"),
        giftBtn = document.getElementById("giftBtn"),
        waterBtn = document.getElementById("waterBtn"),
        wateringBox = document.getElementById("wateringBox"),
        fertiBtn = document.getElementById("fertiBtn"),
        fertingBox = document.getElementById("fertingBox"),
        bgState = document.getElementById("bgState"),
        tipPop01 = document.getElementById("tipPop01"),
        tipPop02 = document.getElementById("tipPop02"),
        tipPop03 = document.getElementById("tipPop03"),
        medalIcon = document.getElementById("medalIcon"),
        selfPage = document.getElementById("selfPage"),
        selfBtnTop = document.getElementById("selfBtnTop"),
        ruleBtn = document.getElementById("ruleBtn"),
        dataCon06 = document.getElementById("dataCon06"),
        dataCon08 = document.getElementById("dataCon08"),
        tipPop04 = document.getElementById("tipPop04"),
        tipPop06 = document.getElementById("tipPop06");
    //初始化侠义值
    function initProgress() {
        var curValue = progress.dataset.curvalue,
            fullValue = progress.dataset.fullvalue;
        progressPercent.style.width = (curValue / fullValue) * 100 + "%";
        progressTxt.innerHTML = curValue + "/" + fullValue;
    }

    //侠义值增加1
    function addProgress() {
        var argLength = arguments.length;
        var curValue = parseInt(progress.dataset.curvalue),
            fullValue = parseInt(progress.dataset.fullvalue);
        if (curValue < fullValue) {
            curValue = progress.dataset.curvalue = parseInt(curValue) + 1;
            changeProgress(argLength, curValue, fullValue, "add");
        }
    }

    //侠义值增加1
    function reduceProgress() {
        var curValue = parseInt(progress.dataset.curvalue),
            fullValue = parseInt(progress.dataset.fullvalue);
        if (curValue > 0) {
            curValue = progress.dataset.curvalue = parseInt(curValue) - 1;
            changeProgress(0, curValue, fullValue, "reduce");
        }
    }

    //侠义值改变
    function changeProgress(argLength, curValue, fullValue, mode) {
        progressPercent.style.width = (curValue / fullValue) * 100 + "%";
        progressTxt.innerHTML = curValue + "/" + fullValue;
        //侠义值为5时
        if (curValue <= 5) {
            if (mode === "add") {
                if (curValue == 1) {
                    treeGrowth(2);
                    setStateBg(1);
                }
                argLength === 0 ? tipPopShow(tipPop01,1) : tipPop01Show(tipPop03);
            }
            else {
                if (curValue == 5) {
                    treeGrowth(2);
                    setStateBg(1);
                }
            }
        }
        //侠义值大于5，小于等于10时
        if (curValue <= 10 && curValue > 5) {
            if (mode === "add") {
                if (curValue == 6) {
                    treeGrowth(3);
                    setStateBg(1);
                }
                argLength === 0 ? tipPopShow(tipPop01,2) : tipPop01Show(tipPop03);
            }
            else {
                if (curValue == 10) {
                    treeGrowth(3);
                    setStateBg(1);
                }
            }

        }
        //侠义值大于10，小于等于15时
        if (curValue <= 15 && curValue > 10) {
            if(mode === "add"){
                if (curValue == 11) {
                    treeGrowth(4);
                    setStateBg(2);
                }
                argLength === 0 ? tipPopShow(tipPop01,3) : tipPop01Show(tipPop03);
            }
            else{
                if (curValue == 15) {
                    treeGrowth(4);
                    setStateBg(2);
                }
            }
        }
        //侠义值大于15，小于等于18时
        if (curValue <= 18 && curValue > 15) {
            if(mode === "add"){
                if (curValue == 16) {
                    treeGrowth(5);
                    setStateBg(3);
                }
                argLength === 0 ? (curValue < 18 ? tipPopShow(tipPop01,4) : tipPopShow(tipPop02)) : tipPop01Show(tipPop03);
            }
            else{
                if (curValue == 18) {
                    treeGrowth(5);
                    setStateBg(3);
                }
            }
        }
    }

    //初始化树的品种和状态
    function initTreeState() {
        var state = treeCanvas.dataset.state,
            classify = treeCanvas.dataset.classify;
        tree.className = "tree " + "tree0" + classify + "_sprite " + "tree0" + classify + "_state0" + state;
    }

    //树生长
    function treeGrowth(state) {
        var state = treeCanvas.dataset.state = state,
            classify = treeCanvas.dataset.classify;
        tree.className = "tree " + "tree0" + classify + "_sprite " + "tree0" + classify + "_state0" + state;
    }

    //树环境背景初始化
    function initStateBg() {
        var state = bgState.dataset.state;
        bgState.className = "container state0" + state;
    }

    //树环境背景变化
    function setStateBg(state) {
        bgState.dataset.state = state;
        bgState.className = "container state0" + state;
    }

    //显示消息弹框
    function tipPopShow() {
        var args = arguments;
        args[0].classList.add("show");
        setTimeout(function () {
            args[0].classList.remove("show");
        }, 3000);
        if(args.length===2){
            var pop_con01 = args[0].querySelector(".pop_con01");
            pop_con01.style.top = 418-parseInt(args[1])*50+"px";
        }

    }

    //显示施肥成功弹框
    function tipPop01Show(obj) {
        obj.classList.add("show");
    }

    function _treeComponent() {
        initProgress();//初始化侠义值
        initTreeState();//初始化树的品种和状态
        initStateBg();//初始化树环境背景
    }

    //当天是否可浇水，可浇水则执行关联方法
    _treeComponent.prototype.watering = function () {
        var _this = this;
        if (waterBtn.dataset.state === "1" && parseInt(progress.dataset.curvalue) < 18) {
            wateringBox.classList.add("show", "active");
            waterBtn.dataset.state = "0";
            setTimeout(function () {
                wateringBox.classList.remove("show");
                addProgress();
                if (parseInt(progress.dataset.curvalue) >= 18) {
                    giftBtn.classList.add("curActive");
                    waterBtn.style.display = "none";
                    fertiBtn.style.display = "none";
                }
            }, 1000)
        }
        else{
            tipPop06.classList.add("show");
            setTimeout(function () {
                tipPop06.classList.remove("show");
            },3000)
        }
    };
    //当天是否可施肥，可施肥则执行关联方法
    _treeComponent.prototype.ferting = function () {
        var _this = this;
        var argsL = arguments.length;
        if (fertiBtn.dataset.state === "1" && parseInt(progress.dataset.curvalue) < 18) {
            fertingBox.classList.add("show", "active");
            fertiBtn.dataset.state = "0";
            setTimeout(function () {
                fertingBox.classList.remove("show");
                if (argsL === 1) {
                    addProgress("ferting");
                    if (parseInt(progress.dataset.curvalue) >= 18) {
                        selfPage.style.display = "block";
                        medalIcon.style.display = "block";
                        selfBtnTop.style.display = "none";
                        fertiBtn.style.display = "none";
                    }
                }

            }, 1000)
        }
        else{
            tipPop06.classList.add("show");
            setTimeout(function () {
                tipPop06.classList.remove("show");
            },3000)
        }
    };
    //设置树的品种和状态
    _treeComponent.prototype.setTreeState = function (state, classify) {
        treeCanvas.dataset.state = state;
        treeCanvas.dataset.classify = classify;
        tree.className = "tree " + "tree0" + classify + "_sprite " + "tree0" + classify + "_state0" + state;
    }
    //朋友页初始化
    _treeComponent.prototype.friendInit = function () {
        var curValue = progress.dataset.curvalue;
        if (parseInt(curValue) === 18) {
            selfPage.style.display = "block";
            medalIcon.style.display = "block";
            selfBtnTop.style.display = "none";
            fertiBtn.style.display = "none";
        }
        else if(parseInt(curValue) === 0){
            selfPage.style.display = "none";
            medalIcon.style.display = "none";
            selfBtnTop.style.display = "none";
            fertiBtn.style.display = "none";
            ruleBtn.style.display = "none";
            dataCon06.style.display = "none";
            dataCon08.style.display = "none";
            tipPop04.classList.add("show");
        }
        else {
            selfPage.style.display = "none";
            medalIcon.style.display = "none";
            selfBtnTop.style.display = "block";
            fertiBtn.style.display = "block";
        }
        this.init();
    }
    //分享页初始化
    _treeComponent.prototype.shareInit = function () {
        var curValue = progress.dataset.curvalue;
        this.init();
    }
    //初始化tree
    _treeComponent.prototype.init = function () {
        var curValue = progress.dataset.curvalue;
        treeCanvas.dataset.state = curValue;
        if (curValue == 0) {
            treeCanvas.dataset.state = 1;
            treeGrowth(1);
            setStateBg(1);
        }
        if (curValue > 0 && curValue <= 5) {
            treeCanvas.dataset.state = 2;
            treeGrowth(2);
            setStateBg(1);
        }
        //侠义值大于5，小于等于10时
        if (curValue <= 10 && curValue > 5) {
            treeCanvas.dataset.state = 3;
            treeGrowth(3);
            setStateBg(1);
        }
        //侠义值大于10，小于等于15时
        if (curValue <= 15 && curValue > 10) {
            treeCanvas.dataset.state = 4;
            treeGrowth(4);
            setStateBg(2);
        }
        //侠义值大于15，小于等于18时
        if (curValue <= 18 && curValue > 15) {
            treeCanvas.dataset.state = 5;
            treeGrowth(5);
            setStateBg(3);
            if (curValue == 18 && giftBtn && waterBtn) {
                giftBtn.classList.add("curActive");
                waterBtn.style.display = "none";
            }
        }

        initTreeState();

    }
    //打雷关联方法
    _treeComponent.prototype.thunder = function () {
        reduceProgress();
    }

    return _treeComponent;
})();

module.exports = TreeComponent;