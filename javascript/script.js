// 로고

$('.logo > img').click(function(){
  location.href = 'index.html';
});

// 네비게이션

$('.menu').hover(function(){
  $('.submenu').stop().slideDown();
},function(){
  $('.submenu').stop().slideUp();
});

// 검색창

let s = 0;

$('.search-bt').click(function(){
  if(s == 0) {
    $( '.search-wrap').addClass('on');
    $('.search-show').hide();
    $('.search-close').show();
    s++;
  } else if(s == 1) {
    $( '.search-wrap').removeClass('on');
    $('.search-show').show();
    $('.search-close').hide();
    s = 0;
  };
});

// 슬라이드

let curr = 1;

function slide () {
  i = curr % 8;

  curr++;

  $(".slider").css({
    left: "-" + i + "00%",
  });

  $(".page").removeClass("on");
  $(".page").eq(i).addClass("on");
}

let mySlide = setInterval(slide,4000);

  // 페이지네이션

  $('.page').click(function(){

    let t = $(this).index();
    
    $('.page').removeClass('on');
    $(this).addClass('on');

    curr = t;

    $('.slider').css({
      left: '-' + curr + '00%'
    });

    clearInterval(mainSlide);
  mainSlide = setInterval(slide, 4000);

  });

