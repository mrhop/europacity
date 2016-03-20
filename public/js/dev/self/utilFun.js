/**
 * Created by Donghui Huo on 2016/3/15.
 */
//var $ = require("jQuery");
module.exports = (function ($, window, undefined) {
    'use strict';
    $.UtilFun = function () {

    };
    $.UtilFun.prototype = {
        animate: function (obj) {
            $(obj).each(function () {
                $(this).addClass($(this).data("animated")).css('visibility', 'visible').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    $(this).removeClass($(this).data("animated"));
                });
            })
        },
        animateWithAction: function (obj,action,actionremove,callback) {
            $(obj).each(function () {
                $(this).removeClass(actionremove).addClass(action).css('visibility', 'visible').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    if(callback){
                        callback();
                    }
                });
            })
        },
        hide: function (obj) {
            $(obj).each(function () {
                $(this).css('visibility', 'hidden');
            })
        },
        removeAnimate: function (obj) {
            $(obj).each(function () {
                $(this).removeClass($(this).data("animated"));
            })
        },
    };
    return new $.UtilFun();
})(jQuery, window)