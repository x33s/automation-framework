/**
 * Created by Administrator on 2017/3/2.
 */
var $ = require("jquery");
var resLoader = require("./resLoader");
var Basic = (function () {
    function _basic(config) {
        this.option = {
            debug:true
        }
        if(config){
            for(name in config){
                this.option[name] = config[name];
            }
        }
    }
    _basic.prototype.insertCss = function (rule) {
        if (document.styleSheets && document.styleSheets.length) {
            try {
                document.styleSheets[0].insertRule(rule, 0);
            }
            catch (ex) {
                console.warn(ex.message, rule);
            }
        }
        else {
            var style = document.createElement("style");
            style.innerHTML = rule;
            document.head.appendChild(style);
        }
        return;
    };
    _basic.prototype.deleteCss = function (ruleName) {
        var cssrules = (document.all) ? "rules" : "cssRules",
            i;
        for (i = 0; i < document.styleSheets[0][cssrules].length; i += 1) {
            var rule = document.styleSheets[0][cssrules][i];
            if (rule.name === ruleName || rule.selectorText === '.'+ruleName) {
                document.styleSheets[0].deleteRule(i);
                if (this.option.debug) {
                    console.log("Deleted keyframe: " + ruleName);
                }
                break;
            }
        }
        return;
    };
    _basic.prototype.load = function () {
        var load = new resLoader({
            resources : [
            ],
            onStart : function(total){
                console.log('start:'+total);
            },
            onProgress : function(current, total){
                console.log(current+'/'+total);
                var percent = current/total*100;
                $('.progressbar').css('width', percent+'%');
            },
            onComplete : function(total){
                alert('加载完毕:'+total+'个资源');
            }
        });
    };
    return _basic;
})();