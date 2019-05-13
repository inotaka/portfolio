// pc用jquery部分


// メニュー＆閉じるの切り替え


$(document).ready(function(){


  //デフォルトで表示する要素を指定


  $('.menu').show();
  $('.close').hide();

  //buttonがクリックされたら


  $('nav').click(function () {



    //toggleClassで指定した要素にswitchのclassを追加または削除


    $('nav').toggleClass('switch');


    //wrapがswitchを持っていれば


    //要素の表示を切り替える


    $('.menu').hide();
    if($('nav').hasClass('switch')){
      $('.close').show();

    //wrapがswitchを持っていなければ


    }else{


      //要素の表示を切り替える


      $('.menu').show();
      $('.close').hide();

    }
  });
});



// クリックでのメニューの出し方
$(document).ready(function(){
  $( '.cp_menu-list' ).hide();
  $('#humberger').on( 'click' ,function(){
    if( !$('.cp_menu-list').hasClass('open') ) {
    // $( '.cp_menu-list' ).fadeIn('').addClass('open');
    //  $(".cp_menu-list").animate({"left": "-=50px"}, "slow");
     jQuery('.cp_menu-list').stop(true).animate( { width: 'toggle' }, 'slow' );
    } else {
    // $( '.cp_menu-list' ).fadeOut().removeClass('open');
    // $(".cp_menu-list").animate({"left": "+=50px"}, "slow");
    }
  });
});


//ヘッダーの自己紹介の移動先
$(function(){
$('.cp_menu-list > li:first-child').on('click', function(){
  var targetTop = $('#p-profile__right').offset().top;
  $('html,body').animate({
      scrollTop: targetTop-50
  }, 500);
  return false;
});
});


//ヘッダーのスキルの移動先
$(function(){
$('.cp_menu-list > li:nth-child(2)').on('click', function(){
  var skill = $('#p-skill').offset().top;
  $('html,body').animate({
      scrollTop: skill
  }, 500);
  return false;
});
});


//ヘッダーの制作実績の移動先
$(function(){
$('.cp_menu-list > li:nth-child(3)').on('click', function(){
  var performar = $('#p-performance').offset().top;
  $('html,body').animate({
      scrollTop: performar
  }, 500);
  return false;
});
});


//ヘッダーの制作実績の移動先
$(function(){
$('.cp_menu-list > li:nth-child(4)').on('click', function(){
  var price = $('#p-price').offset().top;
  $('html,body').animate({
      scrollTop: price
  }, 500);
  return false;
});
});


//ヘッダーのお問い合わせの移動先
$(function(){
$('.cp_menu-list > li:last-child').on('click', function(){
  var claim = $('#c-claim').offset().top;
  $('html,body').animate({
      scrollTop: claim
  }, 500);
  return false;
});
});


// トップに移動し、フェイドアウト


$(document).ready(function() {
  var pagetop = $('.p-return__btn');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      pagetop.fadeIn();
    } else {
        pagetop.fadeOut();
      }
    });
    pagetop.click(function () {
      $('body, html').animate({ scrollTop: 0 }, 500);
        return false;
  });
});



































// $(function() {
//   $('.slider').slick({
//     autoplay: true,
//     dots: true,
//     centerMode: true,
//     slidesToShow: 3,
//     asNavFor: '.text',
//     responsive: [{
//       breakpoint: 768,
//       settings: {
//         slidesToShow: 1,
//         centerPadding: 0,
//         fade: true
//       }
//     }]
//   });
//   $('.text').slick({
//       slidesToShow: 1,
//       fade: true,
//       asNavFor: '.slider'
//   });
//
//   $(window).scroll(function (){
//     $("#sec01").each(function(){
//       var imgPos = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > imgPos - windowHeight + windowHeight/5){
//         $(this).addClass("fade_on");
//       }
//     });
//   });
//
//   $(window).scroll(function (){
//     $("#sec02").each(function(){
//       var imgPos = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > imgPos - windowHeight + windowHeight/5){
//         $(this).addClass("fade_on");
//       }
//     });
//   });
//
//   $(window).scroll(function (){
//     $("#sec03").each(function(){
//       var imgPos = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > imgPos - windowHeight + windowHeight/5){
//         $(this).addClass("fade_on");
//       }
//     });
//   });
//
//   $(window).scroll(function (){
//     $("#sec04").each(function(){
//       var imgPos = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > imgPos - windowHeight + windowHeight/5){
//         $(this).addClass("fade_on");
//       }
//     });
//   });
//
//   $(window).scroll(function (){
//     $("#sec05").each(function(){
//       var imgPos = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > imgPos - windowHeight + windowHeight/5){
//         $(this).addClass("fade_on");
//       }
//     });
//   });
//
//   $(window).scroll(function (){
//     $("#sec06").each(function(){
//       var imgPos = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > imgPos - windowHeight + windowHeight/5){
//         $(this).addClass("fade_on");
//       }
//     });
//   });
//
//   $(window).scroll(function (){
//     $("#sec07").each(function(){
//       var imgPos = $(this).offset().top;
//       var scroll = $(window).scrollTop();
//       var windowHeight = $(window).height();
//       if (scroll > imgPos - windowHeight + windowHeight/5){
//         $(this).addClass("fade_on");
//       }
//     });
//   });
//   $('.menu').click(function() {
//         $(this).toggleClass('active');
//         $('.close').toggleClass('active');
//         $('.open').toggleClass('active');
//         if ($(this).hasClass('active')) {
//             $('.header-menu').addClass('active');
//         } else {
//             $('.header-menu').removeClass('active');
//         }
//     });
//
//     $('.header-menu a').click(function(){
//         $('.header-menu').removeClass('active');
//         $('.navToggle').removeClass('active');
//     });
// });
