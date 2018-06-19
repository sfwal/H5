/*
* @Author: name
* @Date:   2017-10-27 17:51:11
* @Last Modified by:   name
* @Last Modified time: 2017-11-03 17:02:17
*/
function tabs(obj,swiperObj,className) {
    var tabSwiper = new Swiper(swiperObj, {
        autoHeight: true,
        onSlideChangeStart : function() {
            $(obj+"."+className).removeClass(className);
            $(obj).eq(tabSwiper.activeIndex).addClass(className);
        }
    });
    $(obj).on('touchstart mousedown', function(e) {
        e.preventDefault();
        $(obj+"."+className).removeClass(className);
        $(this).addClass(className);
        tabSwiper.slideTo($(this).index());
    });
    $(obj).click(function(e) {
        e.preventDefault();
    });
}

$(function(){
    var service = new Swiper('.service_c',{
        pagination: '.service-pagination',
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 40,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    })
    $('.case_c >.hd > a').eq(0).addClass('on');
    tabs('.case_c >.hd > a','.case_c','on');


    var advantage = new Swiper('.advantage_c',{
        pagination: '.advantage-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 24,
        breakpoints: {
            1024: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    })

    var case_img = new Swiper('.case_img',{
        slidesPerView: 3,
        spaceBetween: 15,
        nextButton: '.case_next',
        prevButton: '.case_prev',
        touchRatio: 0.2,
        centeredSlides : true,
        slideToClickedSlide:true,
        loop : true,
        loopedSlides :3,
        breakpoints: {
            1199: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    })

    var case_bimg = new Swiper('.case_bimg', {
        spaceBetween: 0,
        autoHeight: true,
        nextButton: '.case_bnext',
        prevButton: '.case_bprev',
        loop : true,
        // slidesPerView: 1,
        loopedSlides :3,
    });
    case_img.params.control = case_bimg;
    case_bimg.params.control = case_img;

    var n_hot = new Swiper('.n_hot', {
        spaceBetween: 0,
        pagination: '.hot-pagination',
        paginationClickable: true
    });

    var web1_c = new Swiper('.web1_c',{
        pagination: '.service-pagination',
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            992: {
                slidesPerView: 3,
                spaceBetween: 20
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 20
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 10
            }
        }
    })

    var n_hot = new Swiper('.tab_bd', {
        spaceBetween: 0,
        pagination: '.tab-pagination',
        paginationClickable: true,
        paginationType:'progress',
        autoHeight: true,
        onSlideChangeEnd: function (swiper) {
            var j=swiper.activeIndex;
            $('.tab_hd li').removeClass('on').eq(j).addClass('on');
        }
    });
    $('.tab_hd li').on('click',function(){
        var i=$(this).index();
        $('.tab_hd li').removeClass('on').eq(i).addClass('on');
        n_hot.slideTo(i,1000,false);
    })

    var market4_c = new Swiper('.market4_c',{
        pagination: '.m4-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        spaceBetween: 15,
        breakpoints: {
            991: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 1,
                spaceBetween: 1
            }
        }
    })

    var we1_c = new Swiper('.we1_c',{
        pagination: '.we1-pagination',
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 50,
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 40
            }
            ,
            640: {
                slidesPerView: 1,
                spaceBetween: 1
            }
        }
    })

    var tel1_c = new Swiper('.tel1_c',{
        pagination: '.tel1-pagination',
        paginationClickable: true,
        slidesPerView: 4,
        spaceBetween: 50,
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 40
            }
            ,
            640: {
                slidesPerView: 1,
                spaceBetween: 1
            }
        }
    })

    var we3_c = new Swiper('.we3_c',{
        pagination: '.we3-pagination',
        paginationClickable: true,
        slidesPerView: 3,
        spaceBetween: 50,
        breakpoints: {
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 40
            }
            ,
            640: {
                slidesPerView: 1,
                spaceBetween: 1
            }
        }
    })
    var seo2_c = new Swiper('.seo2_c',{
        pagination: '.seo2-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
            1199:{
                slidesPerView: 4,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 1
            }
        }
    })
    var seo3_c = new Swiper('.seo3_c',{
        pagination: '.seo3-pagination',
        paginationClickable: true,
        slidesPerView: 5,
        spaceBetween: 30,
        breakpoints: {
            1199:{
                slidesPerView: 4,
                spaceBetween: 30
            },
            991: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            767: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            640: {
                slidesPerView: 1,
                spaceBetween: 1
            }
        }
    })

})
