/**
 * Created by Administrator on 2017/4/13.
 */
var InputMaxLengt = (function () {
    function _inputMaxLengt(obj,maxLength) {
        obj.addEventListener("input", function (e) {

            var inputLength = this.value.length;

            if (inputLength >= maxLength && parseInt(e.keyCode) != 8) {
                this.value = this.value.substring(0, maxLength);
            }
        });
    }
    return _inputMaxLengt;
})();

module.exports = InputMaxLengt;