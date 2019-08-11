
$(document).ready(function(){
    //메뉴 스크롤 이동
    $(".gnb a").on("click", onScrollMenu);

    //scroll btn
    setInterval(function(){
        $(".intro_scroll img").fadeOut(1000).fadeIn(1000);
    }, 2000)   
})

function onScrollMenu(e) {
    e.preventDefault(); 
 
    var idxNum = $('.gnb a').index($(this));
    var topNum = $('.contents > section').eq(idxNum).offset().top - 50;
    console.log(topNum);
 
     $('html, body').stop().animate({
       scrollTop : topNum + "px"
     }, 1000);
 
    $('.gnb a').filter('.on').removeClass('on');
    $(this).addClass('on');
};

//intro height 가변
$(window).on("resize", function(){
    var wHeight = $(window).height() - 50 +"px";
    $('#intro').css({
        'height': wHeight
      });
  });
  $(window).trigger("resize");
