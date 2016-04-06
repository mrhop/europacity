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
        animateWithAction: function (obj, action, actionremove, callback) {
            $(obj).each(function () {
                $(this).removeClass(actionremove).addClass(action).css('visibility', 'visible').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function () {
                    if (callback) {
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
        numberValueChange: function (type, begin, end, Object, interval, dataChangeTimes) {
            if (begin != end) {
                dataChangeTimes = dataChangeTimes ? dataChangeTimes : 10;
                var data = Math.abs(begin - end);
                if(data<10){
                    dataChangeTimes = data
                }
                var dataInterval = parseInt(data / dataChangeTimes);
                var lastData = Math.abs(begin - end) % dataChangeTimes;
                if (lastData != 0) {
                    dataChangeTimes += 1;
                }
                var beginTimes = 0;
                var intervalFun = window.setInterval(function () {
                    beginTimes += 1;
                    if (beginTimes < dataChangeTimes) {
                        if (begin > end) {
                            begin = begin - dataInterval
                        } else {
                            begin = begin + dataInterval
                        }
                    } else {
                        if (begin > end) {
                            begin = begin - (lastData==0?dataInterval:lastData)
                        } else {
                            begin = begin + (lastData==0?dataInterval:lastData)
                        }
                    }
                    if (type == "number") {
                        $(Object).text(begin);
                    }else if(type=="minute"){
                        $(Object).text(parseInt(begin/60)+":"+begin%60);
                    }
                    if (begin == end) {
                        window.clearInterval(intervalFun);
                        $(Object).data("value", begin);
                    }
                }, interval ? interval : 100);
                return intervalFun;
            }
            return null;
        },
        numberValueInterrupt: function (type,data, object, intervalFun) {
            window.clearInterval(intervalFun);
            if (type == "number") {
                $(Object).text(data);
            }else if(type=="minute"){
                $(Object).text(parseInt(data/60)+":"+data%60);
            }
            $(object).data("value", data);
        }
    };
    return new $.UtilFun();
})
(jQuery, window)