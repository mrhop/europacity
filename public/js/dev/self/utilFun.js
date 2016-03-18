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