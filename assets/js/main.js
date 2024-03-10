$(function(){

//언어선택
    $('.btn-go').click(function(){
        url=$('#langList').val()
        window.open(url)
    })



// 메인비주얼 영역

   mainSlide = new Swiper('.main-slide',{
    loop:true,
    autoplay:{
        delay:1000,
        disableOnInteraction:false

    },
    pagination:{
        el:".fraction",
        type:"fraction"
    },
    navigation:{
        nextEl:".next",
        prevEl:".prev"
    }

    })


    $('.sc-visual .group-nav button').click(function(){
        idx=$(this).data('idx');
        $(this).addClass('active').siblings().removeClass('active')

        mainSlide.slideToLoop(idx)
    })


    bannerSlide = new Swiper('.sc-banner .swiper',{
        slidesPerView:3,
        spaceBetween:43,

        loop:true,
        autoplay:{
            delay:1000,
            disableOnInteraction:false
    
        },
        pagination:{
            el:".fraction",
            type:"fraction"
        },
        navigation:{
            nextEl:".next",
            prevEl:".prev"
        }

    })
    
slideArr = [mainSlide,bannerSlide];

$('.swiper .stop').click(function(){

    idx=$(this).data('slide');

    if ($(this).hasClass('on')) {
       slideArr[idx].autoplay.start()
    } else {
       slideArr[idx].autoplay.stop()
    }
     
    $(this).toggleClass('on');
})

// 협력 업체 영역
$('.btn-relate').click(function(e){

if(!$(this).hasClass('none')){//중앙행정기관 클릭시
    
    e.preventDefault();
    
    if($(this).hasClass('on')){//있으면 두번클릭(더블클릭(x))
        $('.btn-relate').removeClass('on').siblings().slideUp()
    }else{//없으면 최초클릭
        $('.btn-relate').removeClass('on').siblings().slideUp()
        $(this).addClass('on').siblings().slideDown()
    }
}
})

// 퀵메뉴
let lastScroll = 0;
curr = $(this).scrollTop();

$(window).scroll(function(){
  
  if(curr < lastScroll){
      $('.quick-menu').addClass('on');
  } else {
      $('.quick-menu').removeClass('on');
  }
  lastScroll = curr;
})
})

