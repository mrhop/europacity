/**
 * Created by Donghui Huo on 2016/3/15.
 */
var $ = jQuery = require('jquery');
require("flexslider");
require("easing");
require("scrollspy");
require("smoothscroll");
require("bootstrap");
var utilFun = require("utilFun");
$(document).ready(function () {
    $('#home .flexslider').flexslider({
        fadeFirstSlide: false,
        controlNav: false,
        directionNav: false,
        animationSpeed: 500,
        slideshowSpeed: 3000,
        slideshow: true,
        start: function (slider) {
            utilFun.animate("#home .flex-active-slide .animated");
        },
        before: function () {
            utilFun.hide("#home .flex-active-slide .animated");
        },
        after: function (slider) {
            utilFun.animate("#home .flex-active-slide .animated");
        }
    });
    $('#home .flexslider .flex-caption').hover(function () {
        $(this).find(".glyphicon-play-circle").fadeTo(200, 0.8);
    }, function () {
        $(this).find(".glyphicon-play-circle").fadeTo(200, 0.0);
    })
});