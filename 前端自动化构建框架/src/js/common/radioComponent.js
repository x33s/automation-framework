/**
 * Created by Administrator on 2017/4/7.
 */
var $ = require("jquery");
//radioComponent组件
var RadioComponent = (function () {
    function _radioComponent(name) {
        this.radios = $("input[name=" + name + "]");
    }
    _radioComponent.prototype.init = function () {
        var _this = this;
        _this.radio_module = _this.radios.parent();
        _this.radios.bind("change", function () {
            var _curThis = this, _curParent = $(_curThis).parent();
            if (_curThis.checked) {
                _this.radio_module.removeClass("checked");
                _curParent.addClass("checked");
            }
        });
    };
    return _radioComponent;
})();
module.exports = RadioComponent;

