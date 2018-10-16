
var jQuery = require("jquery");

(function ($) {
    $.popCtrl = function () {
        var _closeBtn = $(".closeBtn");

        _closeBtn.on("click", function (e) {

            e.stopPropagation();

            var _that = $(this),
                _pop = _that.parents(".pop_module").length > 0 ? _that.parents(".pop_module") : _that.parents(".com_pop_con");

            _pop.removeClass("show");

        });

    }
})(jQuery);



/*
 * name     : $(str).scrollTxt()
 * cotent   : 滚动文本插件
 * params   ：
 */
(function ($) {
    $.fn.extend({
        scrollTxt: function (_opt) {
            var defaults = {
                scrollHeight: null,
                speed: 500,
                interval: 3000
            };
            var _opt = $.extend(defaults, _opt);

            var _this = this,
                children = _this.children();

            if (children.length < 1) {
                return false;
            }

            _opt.scrollHeight = _opt.scrollHeight || children[0].offsetHeight;


            var autoScroll = function (obj) {
                $(obj).animate({
                    marginTop: -_opt.scrollHeight + "px"
                }, _opt.speed, function () {
                    //alert($(this).children().last().html());
                    $(this).css({ marginTop: "0px" }).children().eq(0).appendTo(this);
                })
            }

            window.setInterval(function () { autoScroll(_this) }, _opt.interval)


        }
    });
})(jQuery);

/* requestAnimationFrame.js
 * by zhangxinxu 2013-09-30
*/
(function () {
    var lastTime = 0;
    var vendors = ['webkit', 'moz'];
    for (var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x] + 'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x] + 'CancelAnimationFrame'] ||    // name has changed in Webkit
                                      window[vendors[x] + 'CancelRequestAnimationFrame'];
    }

    if (!window.requestAnimationFrame) {
        window.requestAnimationFrame = function (callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16.7 - (currTime - lastTime));
            var id = window.setTimeout(function () {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }
    if (!window.cancelAnimationFrame) {
        window.cancelAnimationFrame = function (id) {
            clearTimeout(id);
        };
    }
}());



(function ($) {
    $.tabPlugin = function () {
        var _tabHeads = $(".tabHead");
        _tabHeads.each(function () {
            var _that = $(this),
                _tabhead = _that.find("[tabhead]"),
                _tabbody = $("[tabbody='" + _tabhead.eq(0).attr("tabhead") + "']");

            _tabhead.eq(0).addClass("hover");
            _tabbody.eq(0).addClass("com_show");

            _tabhead.bind("click", function () {
                var _thisHead = $(this),
                    _index = _thisHead.index();

                _tabhead.eq(_index).addClass("hover").siblings().removeClass("hover");
                _tabbody.eq(_index).addClass("com_show").siblings().removeClass("com_show");

            });

        });
    }
})(jQuery);

module.exports = jQuery;