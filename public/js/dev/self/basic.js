/**
 * Created by Donghui Huo on 2016/3/15.
 */
var $ = jQuery = require('jquery');
require("flexslider");
require("easing");
require("scrollspy");
require("smoothscroll");
require("bootstrap");
require('perfect-scrollbar/jquery')($);
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

    $('#home .scroll-div').perfectScrollbar({"maxScrollbarLength":50});
    $('#home .mask .glyphicon-remove').click(function(){
        utilFun.animateWithAction($(this).parent().parent(),"fadeOutLeft","fadeInLeft",function(){
            $(".mask").hide();
            $(".navbar-fixed-bottom").css("opacity","");
            $(".mask > .container-fluid").removeClass("active");
            $(".navbar-fixed-bottom .pull-left a").removeClass("active")
        });
    })
    $('#home .news-a').click(function(){
        $(".navbar-fixed-bottom .pull-left li").removeClass("active")
        $(this).addClass("active")
        $(".navbar-fixed-bottom").css("opacity",1);
        $(".mask").show();
        utilFun.animateWithAction($(".mask .container-fluid.news"),"fadeInLeft","fadeOutLeft",function(){
            $(".mask .container-fluid.news").addClass("active")
        });

    })
    $(".mask .container-fluid").click(function(){
        event.stopPropagation();
        return false;
    });
    $('#home .mask').click(function(){
        utilFun.animateWithAction($(this).find(".container-fluid.active"),"fadeOutLeft","fadeInLeft",function(){
            $(".mask").hide();
            $(".navbar-fixed-bottom").css("opacity","");
            $(".mask > .container-fluid").removeClass("active");
            $(".navbar-fixed-bottom .pull-left a").removeClass("active")
        });
    })
});