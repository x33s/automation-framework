/*
 * name     : TimeComponent
 * content  : 时间线组件
 * author   : mo
 * time     : 20170221
 * */
//window._timeState = "stop";
var TimeComponent = (function () {
    var startTime = 0,
        curTime = 0,
        curSecond = 0,
        curMSecond = 0;
    var stateFlag = false;//当前时间线是否持续
    var timeInterval;

    var id = 0;

    var queueObj = new Object();//时间间隔执行方法队列

    function time() {
        if (stateFlag) {
            window.requestAnimationFrame(function () {
                render();
                update();
                time();
            });
        }
    }

    function render() {
        if (curSecond >= timeInterval) {
            startTime = curTime = new Date();
            curSecond = 0;

            for (var name in queueObj) {
                queueObj[name]();
            }

        }
    }

    function update() {
        var nextLen = new Date().getTime() - startTime.getTime();
        var nextSeconds = nextLen / 1000;
        var nextMSeconds = Math.floor((nextLen % 1000) / 10);

        var curLen = curTime.getTime() - startTime.getTime();
        var curSeconds = curLen / 1000;
        var curMSeconds = Math.floor((curLen % 1000) / 10);

        if (nextSeconds != curSeconds) {
            curSecond = nextSeconds;
        }
        if (nextMSeconds != curMSeconds) {
            curMSecond = nextMSeconds;
        }
    }

    function _timeComponent() {
    }

    //时间状态
    _timeComponent.prototype._timeState = "stop";
    //新增时间线上执行函数队列
    _timeComponent.prototype.addQueue = function (callback) {
        if (typeof callback === "function") {
            var obj = new Object();
            id += 1;
            queueObj[id] = callback;
            return id;
        }
    };
    //删除时间线上执行函数队列
    _timeComponent.prototype.removeQueue = function (id) {
        if (queueObj[id]) {
            delete queueObj[id];
            Object.getOwnPropertyNames(queueObj).length === 0 && this.intervalStop();
        }
    };
    //关闭或开启时间线（参数为boolean值）
    _timeComponent.prototype.setTimeLineState = function () {
        if (typeof boolean === "boolean") {
            this._timeState = boolean;
        }
    };
    //开启时间线
    _timeComponent.prototype.intervalStartUp = function (interval) {
        timeInterval = interval ? interval : 1;
        startTime = curTime = new Date();
        stateFlag = true;
        this._timeState = "run";
        time();
    };
    //停止时间线
    _timeComponent.prototype.intervalStop = function () {
        stateFlag = false;
        this._timeState = "stop";
    };

    return _timeComponent;
})();

module.exports = TimeComponent;