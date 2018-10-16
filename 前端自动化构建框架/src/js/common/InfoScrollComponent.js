/**
 * Created by Administrator on 2017/2/27.
 */
/*
 * name     : InfoScrollComponent
 * content  : 文本纵向滚动组件
 * author   : mo
 * time     : 20170227
 * */
var $ = require('jquery');
var InfoScrollComponent = (function () {

    function timeInterval(wrap,SH,interval) {
        var wrap = wrap,
            SH = SH,
            interval = interval,
            items = wrap.find("div");

        setInterval(function () {
            wrap.animate({
                marginTop:-parseInt(SH)+"px"
            }, 500, function () {
                $(this).css({ marginTop: "0px" }).find("div:first").appendTo(this);
            });
        },interval);
    }

    function _infoScrollComponent(_opt) {
        var _default = {
            SH: "48px",
            interval:3000,
            el: ".infoList",
            data: []
        };
        var _opt = $.extend(_default, _opt);
        var el = $(_opt.el),
            data = _opt.data,
            interval = _opt.interval;
        var SH = _opt.SH || el.outerHeight();
        var wrap;
        var newDOM = document.createElement("div");
        newDOM.className = "wrap";
        for (var i = 0; data.length > i; i++) {
            $(newDOM).append('<div>' + data[i] + '</div>');
        }
        el.append(newDOM);
        wrap = el.find(".wrap");
        timeInterval(wrap,SH,interval);
    }

    return _infoScrollComponent;
})();

module.exports = InfoScrollComponent;