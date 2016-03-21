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
require("mixitup");
require("fancybox");
var utilFun = require("utilFun");
$(document).ready(function () {
    if ($("#home")) {
        var home_section_flag = true;
        var media_first_flag = true;
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

        $('#home .scroll-div').perfectScrollbar({"maxScrollbarLength": 50});

        $('#home .news-a').click(function () {
            if (!$('#home .news-a').hasClass("active") && home_section_flag) {
                home_section_flag = false;
                if ($(".mask .container-fluid.active").length > 0) {
                    utilFun.animateWithAction($(".mask .container-fluid.active"), "fadeOutLeft", "fadeInLeft", function () {
                        $(".mask .container-fluid.active").removeClass("active")
                        $(".navbar-fixed-bottom .pull-left a").removeClass("active")
                        $('#home .news-a').addClass("active")
                        utilFun.animateWithAction($(".mask .container-fluid.news"), "fadeInLeft", "fadeOutLeft", function () {
                            $(".mask .container-fluid.news").addClass("active");
                            home_section_flag = true;
                        });
                    });
                } else {
                    $(".navbar-fixed-bottom .pull-left li").removeClass("active")
                    $(this).addClass("active")
                    $(".navbar-fixed-bottom").css("opacity", 1);
                    $(".mask").css("visibility","visible");
                    utilFun.animateWithAction($(".mask .container-fluid.news"), "fadeInLeft", "fadeOutLeft", function () {
                        $(".mask .container-fluid.news").addClass("active");
                        home_section_flag = true;
                    });
                }
            }
        })

        $('#home .press-a').click(function () {
            if (!$('#home .press-a').hasClass("active") && home_section_flag) {
                home_section_flag = false;
                if ($(".mask > .container-fluid.active").length > 0) {
                    utilFun.animateWithAction($(".mask > .container-fluid.active"), "fadeOutLeft", "fadeInLeft", function () {
                        $(".mask > .container-fluid.active").removeClass("active")
                        $(".navbar-fixed-bottom .pull-left a").removeClass("active")
                        $('#home .press-a').addClass("active")
                        utilFun.animateWithAction($(".mask > .container-fluid.press"), "fadeInLeft", "fadeOutLeft", function () {
                            $(".mask > .container-fluid.press").addClass("active")
                            home_section_flag = true;
                        });
                    });
                } else {
                    $(".navbar-fixed-bottom .pull-left li").removeClass("active")
                    $(this).addClass("active")
                    $(".navbar-fixed-bottom").css("opacity", 1);
                    $(".mask").css("visibility","visible");
                    utilFun.animateWithAction($(".mask > .container-fluid.press"), "fadeInLeft", "fadeOutLeft", function () {
                        $(".mask > .container-fluid.press").addClass("active");
                        home_section_flag = true;
                    });
                }

            }
        })
        $('#home .media-a').click(function () {
            if (!$('#home .media-a').hasClass("active") && home_section_flag) {
                home_section_flag = false;
                if ($(".mask > .container-fluid.active").length > 0) {
                    utilFun.animateWithAction($(".mask > .container-fluid.active"), "fadeOutLeft", "fadeInLeft", function () {
                        $(".mask > .container-fluid.active").removeClass("active")
                        $(".navbar-fixed-bottom .pull-left a").removeClass("active")
                        $('#home .media-a').addClass("active")
                        utilFun.animateWithAction($(".mask > .container-fluid.media"), "fadeInLeft", "fadeOutLeft", function () {
                            $(".mask > .container-fluid.media").addClass("active")
                            if(media_first_flag){
                                $('.portfoliolist').mixItUp();
                                media_first_flag=false;
                            }
                            home_section_flag = true;
                        });
                    });
                } else {
                    $(".navbar-fixed-bottom .pull-left li").removeClass("active")
                    $(this).addClass("active")
                    $(".navbar-fixed-bottom").css("opacity", 1);
                    $(".mask").css("visibility","visible");
                    utilFun.animateWithAction($(".mask > .container-fluid.media"), "fadeInLeft", "fadeOutLeft", function () {
                        $(".mask > .container-fluid.media").addClass("active");
                        if(media_first_flag){
                            $('.portfoliolist').mixItUp();
                            media_first_flag=false;
                        }
                        home_section_flag = true;
                    });
                }

            }
        })

        $('#home .contact-a').click(function () {
            if (!$('#home .contact-a').hasClass("active") && home_section_flag) {
                home_section_flag = false;
                if ($(".mask > .container-fluid.active").length > 0) {
                    utilFun.animateWithAction($(".mask > .container-fluid.active"), "fadeOutLeft", "fadeInLeft", function () {
                        $(".mask > .container-fluid.active").removeClass("active")
                        $(".navbar-fixed-bottom .pull-left a").removeClass("active")
                        $('#home .contact-a').addClass("active")
                        utilFun.animateWithAction($(".mask > .container-fluid.contact"), "fadeInLeft", "fadeOutLeft", function () {
                            $(".mask > .container-fluid.contact").addClass("active")
                            home_section_flag = true;
                        });
                    });
                } else {
                    $(".navbar-fixed-bottom .pull-left li").removeClass("active")
                    $(this).addClass("active")
                    $(".navbar-fixed-bottom").css("opacity", 1);
                    $(".mask").css("visibility","visible");
                    utilFun.animateWithAction($(".mask > .container-fluid.contact"), "fadeInLeft", "fadeOutLeft", function () {
                        $(".mask > .container-fluid.contact").addClass("active");
                        home_section_flag = true;
                    });
                }

            }
        })
        $('#home .mask').click(function () {
            if (event.target.className == "mask" && home_section_flag) {
                home_section_flag = false;
                utilFun.animateWithAction($(this).children(".container-fluid.active"), "fadeOutLeft", "fadeInLeft", function () {
                    $(".mask").css("visibility","hidden");
                    $(".navbar-fixed-bottom").css("opacity", "");
                    $(".mask > .container-fluid").removeClass("active");
                    $(".navbar-fixed-bottom .pull-left a").removeClass("active")
                    home_section_flag = true;
                });
            }
        })
        $('#home .mask .glyphicon-remove').click(function () {
            if (home_section_flag) {
                home_section_flag = false;
                utilFun.animateWithAction($(this).parent().parent(), "fadeOutLeft", "fadeInLeft", function () {
                    $(".mask").css("visibility","hidden");
                    $(".navbar-fixed-bottom").css("opacity", "");
                    $(".mask > .container-fluid").removeClass("active");
                    $(".navbar-fixed-bottom .pull-left a").removeClass("active")
                    home_section_flag = true;
                });
            }
        })
        $('.portfolio-wrapper').hover(function () {
            $(this).find(".label").css("bottom", 0);
        }, function () {
            $(this).find(".label").css("bottom", "-20px");
        })
        $('.portfoliolist').on('mixEnd', function (e, state) {
            $('div.portfolio:visible a.fancyShow').fancybox({
                helpers: {
                    title: {
                        type: 'over'
                    }
                }
            });
        });
    }
});

