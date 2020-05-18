$(document).ready(function () {







    // Match Height

    $('.day-product-img').matchHeight();
    // $('.day-product-small').matchHeight();
    // $('.day-product-title').matchHeight();








    // Mobile Menu


    // $(".ham").click(function () {
    //     $(".mobile-nav").toggleClass('active');
    // });

    // $(".close").click(function () {
    //     $(".mobile-nav").toggleClass('active');
    // });







    // Animation

    // new WOW().init();




    // Nice select

    $('select').niceSelect();




    // Mobile menu

    $(".ham").click(function () {
        $(".ham").css('visibility', 'hidden');

        closePop()
        setTimeout(function () {
            if ($(".mobile-nav").hasClass('active')) {
                $(".mobile-nav").removeClass('active');
                $('.dark-bg').fadeOut();
            } else {
                $(".mobile-nav").addClass('active');
                $('.dark-bg').fadeIn();
            }
        }, 200);
    });

    $(".close").click(function () {
        $(".ham").css('visibility', 'visible');
        $(".mobile-nav").removeClass('active');
        $('.dark-bg').fadeOut();
    });



    // Acc
var parent_block_height = $('.hero-left').height();
    $('.hero-acc-item').on("click", ".hero-acc-button", function () {
        parent_block = $('.hero-left');
        $('.hero-acc-content').stop();
        if ($(this).hasClass('active')) {
            $(this).next().stop(true).slideUp(500);
            $(this).removeClass('active');
            parent_block.css('al')
        } else {
            $(this).next().stop(true).slideDown(500);
            $(this).addClass('active');
        }
    });

    $('.hero-right').css('height',parent_block_height+'px');
    $('.footer-acc-item').on("click", ".footer-acc-button", function () {
        $('.footer-acc-content').stop();
        if ($(this).hasClass('active')) {
            $(this).next().stop(true).slideUp(500);
            $(this).removeClass('active');
        } else {
            $(this).next().stop(true).slideDown(500);
            $(this).addClass('active');
        }
    });




    // Swiper

    var swiper1 = new Swiper('.swiper1', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 500,

        pagination: {
            el: '.pag1',
            clickable: true,
        },

        navigation: {
            nextEl: '.next1',
            prevEl: '.prev1',
        },

        breakpoints: {
            768: {
                autoplay: false,
            }
        }
    })

    var swiper2 = new Swiper('.swiper2', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 500,

        pagination: {
            el: '.pag2',
            clickable: true,
        },

        navigation: {
            nextEl: '.next2',
            prevEl: '.prev2',
        },
    })

    var swiper3 = new Swiper('.swiper3', {
        direction: 'horizontal',
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 500,

        pagination: {
            el: '.pag3',
            clickable: true,
        },

        navigation: {
            nextEl: '.next3',
            prevEl: '.prev3',
        },

        breakpoints: {
            320: {
                slidesPerView: 2,
            },
            400: {
                slidesPerView: 3,
            },
            500: {
                slidesPerView: 4,
            },
            600: {
                slidesPerView: 5,
            },
            768: {
                slidesPerView: 6,
                autoplay: false,
            },
            992: {
                slidesPerView: 8,
            },
            1199: {
                slidesPerView: 12,
            }
        }
    })

    var swiper10 = new Swiper('.swiper10', {
        direction: 'horizontal',
        slidesPerView: 2,
        spaceBetween: 30,
        loop: true,
        autoplay: true,
        speed: 500,

        pagination: {
            el: '.pag10',
            clickable: true,
        },

        navigation: {
            nextEl: '.next10',
            prevEl: '.prev10',
        },

        breakpoints: {
            992: {
                slidesPerView: 3,
            }
        }
    })







    // Swiper on phone

    var array = [];

    function initSwiper() {
        var screenWidth = $(window).width();
        if (screenWidth < 993 && array.length == 0) {
            // mySwiper = new Swiper('.swiper4', {
            //     direction: 'horizontal',
            //     slidesPerView: 1,
            //     spaceBetween: 0,
            //     loop: false,
            //     autoplay: false,
            //     speed: 500,

            //     pagination: {
            //         el: '.pag4',
            //         clickable: true,
            //     },

            //     navigation: {
            //         nextEl: '.next4',
            //         prevEl: '.prev4',
            //     },

            //     breakpoints: {
            //         600: {
            //             slidesPerView: 2,
            //         }
            //     }
            // })





            var i = 4;
            var ind = 0;
            var str1 = 'swiper'
            var str2 = '.swiper';

            $('.swiper-trans:not(.to-bottom)').each(function (index, value) {
                var classAdd = str1 + i;
                var classCall = str2 + i;
                var next_slider = 'next' + i;
                var prev_slider = 'prev' + i;
                var pag_slider = 'pag' + i;
                $(this).addClass(classAdd);
                $(this).parent().siblings(".sites-slider__prev").addClass(prev_slider);
                $(this).parent().siblings(".sites-slider__next").addClass(next_slider);
                array[ind] = new Swiper(classCall, {
                    direction: 'horizontal',
                    slidesPerView: 1,
                    spaceBetween: 0,
                    loop: false,
                    autoplay: false,
                    speed: 500,

                    pagination: {
                        el: ('.' + pag_slider),
                        clickable: true,
                    },

                    navigation: {
                        nextEl: ('.' + next_slider),
                        prevEl: ('.' + prev_slider),
                    },

                    breakpoints: {
                        600: {
                            slidesPerView: 2,
                        }
                    }
                });
                i++;
                ind++;
            });



        } else if (screenWidth >= 993 && array.length != 0) {
            ind = 0;
            i = 4;

            // console.log(array);

            for (var x = 0; x < array.length; x++) {
                array[x].destroy();
            }

            jQuery('.swiper-trans .swiper-wrapper').removeAttr('style');
            jQuery('.swiper-trans .swiper-slide').removeAttr('style');
            array = [];
        }
    }


    initSwiper();

    $(window).on('resize', function () {
        initSwiper();
    });







    // Search

    $('.header-search-button').on('click', function () {
        if ($('.mob-search').hasClass('active')) {
            $('.mob-search').slideUp().removeClass('active');
        } else {
            closePop()
            setTimeout(function () {
                $('.mob-search').slideDown().addClass('active');
            }, 200);
        }
    })




    // To top

    $(window).on('scroll', function () {
        if ($(document).scrollTop() > 400) {
            $('.to-top').addClass('active');
        } else {
            $('.to-top').removeClass('active');
        }
    })

    $('.to-top').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, '300');
    })




    // Popups

    function closePop() {
        $('.dash-popup').slideUp(200).removeClass('active');
        $('.cart-popup').slideUp(200).removeClass('active');
        $('.search-popup').slideUp(200).removeClass('active');
        // $('.mob-search').slideUp().removeClass('active');
        $(".mobile-nav").removeClass('active');
    }

    $('.header-cart-block-ico').click(function () {
        if ($('.cart-popup').hasClass('active')) {
            $('.cart-popup').slideUp(200).removeClass('active');
        } else {
            closePop();
            setTimeout(function () {
                $('.cart-popup').slideDown(200).addClass('active');
            }, 200)
        }
    })

    $('.dash-btn').click(function () {
        if ($('.dash-popup').hasClass('active')) {
            $('.dash-popup').slideUp(200).removeClass('active');
        } else {
            closePop();
            setTimeout(function () {
                $('.dash-popup').slideDown(200).addClass('active');
            }, 200)
        }
    })

    $('.header-input input').focus(function () {
        closePop();
        setTimeout(function () {
            $('.search-popup').slideDown(200).addClass('active');
        }, 200)
    })

    $('.header-input input').blur(function () {
        $('.search-popup').slideUp(200).removeClass('active');
    })




    // Tabs

    $('.tabs-buttons').on('click', 'li:not(.active)', function () {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .parent().next('.tabs-items').find('.tabs-item').fadeOut(0).removeClass('active').eq($(this).index()).fadeIn(500).addClass('active');
    });





    // Starts
    $('.mark-label input').click(function(){
        $(this).parent().parent().prev().text($(this).val());

        var ind  = 0;
        var count = $(this).val();
        $(this).parent().parent().children().each(function(){
            $(this).find('input').prop('checked', false);
        })

        $(this).parent().parent().children().each(function(){
            if((ind++) < count){
            $(this).find('input').prop('checked', true);
            }
        })
    })


























    //------------------------------------Yulya-------------------------------------



    $(document).on("click", ".open-filter", function () {
        $('.catalog-sidebar').addClass('active');
    }).on("click", ".catalog-sidebar .back-button", function (e) {
        e.preventDefault();
        $('.catalog-sidebar').removeClass('active');
    });





    //product
    var scrollbar_rail = document.getElementsByClassName('gallery-thumbs');
    if (scrollbar_rail.length !== 0) {
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            spaceBetween: 10,
            slidesPerView: 4,
            freeMode: true,
            watchSlidesVisibility: true,
            watchSlidesProgress: true,
        });
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 10,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },

            thumbs: {
                swiper: galleryThumbs
            }
        });
    }
    $('.acc-item').on("click", ".acc-button", function () {
        $('.acc-content').stop();
        if ($(this).hasClass('active')) {
            $(this).next().stop(true).slideUp(500);
            $(this).removeClass('active');
        } else {
            $(this).next().stop(true).slideDown(500);
            $(this).addClass('active');
        }
    });

    //checkout page
    $('.payment-item-mask').matchHeight();
    var text_new, button;

    $('.payment-item').on('change', 'input', function () {
        $('.payment-item').each(function () {
            button = $(this).find('.payment-item-button');
            if ($(this).find('input').prop("checked") === true) {
                text_new = button.attr('data-label-active');
            } else {
                text_new = button.attr('data-label');
            }
            button.text(text_new);
        });
    });

    $('.map-tabs-captions').on('click', '.map-tabs-caption:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active')
            .parent().next('.map-tabs-content-wrap').find('div.map-tabs-content').removeClass('active').eq($(this).index()).addClass('active');
    });

    // cart page
    $('.minus').click(function () {

        var $input = $(this).parent().find('input');

        var count = parseInt($input.val()) - 1;

        count = count < 1 ? 1 : count;

        $input.val(count);

        $input.change();

        //jQuery("[name='update_cart']").trigger("click");

        return false;

    });

    $('.plus').click(function () {

        var $input = $(this).parent().find('input');

        $input.val(parseInt($input.val()) + 1);

        $input.change();

        //jQuery("[name='update_cart']").trigger("click");

        return false;

    });




    if ($(window).innerWidth() < 1200) {
        $('.shopping-card-item').each(function () {
            $(this).find('> .quantity').appendTo($(this).find('.shopping-card-name'));
        })

    } else {
        $('.shopping-card-item').each(function () {
            $(this).find(' > .shopping-card-name').after($(this).find('.shopping-card-name').find('.quantity'));
        })

    }
    if ($(window).innerWidth() < 561) {
        $('.shopping-card-item').each(function () {
            $(this).find('> .shopping-card-total').appendTo($(this).find('.shopping-card-name'));
        })

    } else {
        $('.shopping-card-item').each(function () {
            $(this).find(' > .shopping-card-name').after($(this).find('.shopping-card-name').find('.shopping-card-total'));
        })

    }
    $(window).resize(function () {
        $('.hero-right').css('height',parent_block_height+'px');
        if ($(window).innerWidth() < 1200) {
            $('.shopping-card-item').each(function () {
                $(this).find('> .quantity').appendTo($(this).find('.shopping-card-name'));
            })

        } else {
            $('.shopping-card-item').each(function () {
                $(this).find(' > .shopping-card-name').after($(this).find('.shopping-card-name').find('.quantity'));
            })

        }
        if ($(window).innerWidth() < 561) {
            $('.shopping-card-item').each(function () {
                $(this).find('> .shopping-card-total').appendTo($(this).find('.shopping-card-name'));
            })

        } else {
            $('.shopping-card-item').each(function () {
                $(this).find(' > .shopping-card-name').after($(this).find('.shopping-card-name').find('.shopping-card-total'));
            })

        }


    })
});
