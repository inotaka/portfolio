// sp用jquery
//ヘッダーのホームの移動先
$(function(){
$('.l-header__right-sp > li:first-child').on('click', function(){
  var targetTop = $('#p-profile__topTtl').offset().top;
  $('body, html').animate({ scrollTop: 0 }, 500);
  return false;
});
});
//ヘッダーの自己紹介の移動先
$(function(){
$('.l-header__right-sp > li:nth-child(2)').on('click', function(){
  var targetTop = $('#p-profile__topTtl').offset().top;
  $('html,body').animate({
      scrollTop: targetTop-100
  }, 500);
  return false;
});
});
//ヘッダーのスキルの移動先
$(function(){
$('.l-header__right-sp > li:nth-child(3)').on('click', function(){
  var skill = $('#p-skill').offset().top;
  $('html,body').animate({
      scrollTop: skill-80
  }, 500);
  return false;
});
});
//ヘッダーのブログの移動先
// $(function(){
// $('.l-header__right > li:nth-child(4)').on('click', function(){
//   var programming = $('#p-programming').offset().top;
//   $('html,body').animate({
//       scrollTop: programming-80
//   }, 500);
//   return false;
// });
// });
//ヘッダーの制作実績の移動先
$(function(){
$('.l-header__right-sp > li:nth-child(4)').on('click', function(){
  var performar = $('#p-performance').offset().top;
  $('html,body').animate({
      scrollTop: performar-80
  }, 500);
  return false;
});
});
//ヘッダーのお問い合わせの移動先
$(function(){
$('.l-header__right-sp > li:last-child').on('click', function(){
  var claim = $('#c-claim').offset().top;
  $('html,body').animate({
      scrollTop: claim-80
  }, 500);
  return false;
});
});
















$(document).ready(function(){

  //デフォルトで表示する要素を指定
  $('.fa-bars').show();
  $('.fa-times').hide();

  //buttonがクリックされたら
  $('#humberger').click(function () {

    //toggleClassで指定した要素にswitchのclassを追加または削除
    $('#humberger').toggleClass('switch');

    //wrapがswitchを持っていれば
    if($('#humberger').hasClass('switch')){

      //要素の表示を切り替える
      $('.fa-bars').hide();
      $('.fa-times').show();

    //wrapがswitchを持っていなければ
    }else{

      //要素の表示を切り替える
      $('.fa-bars').show();
      $('.fa-times').hide();

    }
  });
});




  // $(function(){
  // 			$('#humberger').click(function(){
  // 						$("l-header").toggleClass('open');
  // 				$("nav").slideToggle(500);
  // 					});
  //
  // 		});
  // $(function(){
  // 			$('#humberger').click(function(){
  // 						$("header").removeClass('close');
  // 				$("nav").slideToggle(500);
  // 					});
  //
  // 		});




  $(document).ready(function(){
    $( '.l-header__right-sp' ).hide();
    $('#humberger').on( 'click' ,function(){
      if( !$('.l-header__right-sp').hasClass('open') ) {
      $( '.l-header__right-sp' ).slideDown('').addClass('open');
      } else {
      $( '.l-header__right-sp' ).slideUp().removeClass('open');
      }
    });
  });



  $(document).ready(function(){
    $( '.cp_menu-list' ).hide();
    $('#humberger').on( 'click' ,function(){
      if( !$('.cp_menu-list').hasClass('open') ) {
      $( '.cp_menu-list' ).slideDown('').addClass('open');
      } else {
      $( '.cp_menu-list' ).slideUp().removeClass('open');
      }
    });
  });














$(function(){
  $('.p-attending__contents-left').click(function(){
    $(this).next('.p-attending__contents-right').slideToggle();
    $('.p-attending__contents-left').not($(this)).next('.p-attending__contents-right').slideUp();
    // $(this).toggleClass('active');
    // $(this).toggleClass("active").next().slideToggle(300);
  });
});

$(function(){
  $('.toggle').click(function(){
    $(this).next('.inner').slideToggle();
  });
});

// グローバル変数
var syncerTimeout = null ;

// 一連の処理
$( function()
{
// スクロールイベントの設定
$( window ).scroll( function()
{
// 1秒ごとに処理
if( syncerTimeout == null )
{
// セットタイムアウトを設定
syncerTimeout = setTimeout( function(){

  // 対象のエレメント
  var element = $( '#page-top' ) ;

  // 現在、表示されているか？
  var visible = element.is( ':visible' ) ;

  // 最上部から現在位置までの距離を取得して、変数[now]に格納
  var now = $( window ).scrollTop() ;

  // 最下部から現在位置までの距離を計算して、変数[under]に格納
  var under = $( 'body' ).height() - ( now + $(window).height() ) ;

  // 最上部から現在位置までの距離(now)が1500以上かつ
  // 最下部から現在位置までの距離(under)が200px以上かつ…
  if( now > 1500 && 200 < under )
  {
    // 非表示状態だったら
    if( !visible )
    {
      // [#page-top]をゆっくりフェードインする
      element.fadeIn( 'slow' ) ;
    }
  }

  // 1500px以下かつ
  // 表示状態だったら
  else if( visible )
  {
    // [#page-top]をゆっくりフェードアウトする
    element.fadeOut( 'slow' ) ;
  }

  // フラグを削除
  syncerTimeout = null ;
} , 1000 ) ;
}
} ) ;
$( '.p-return__btn' ).click(function() {
// スムーズにスクロールする
$( 'html,body' ).animate( {scrollTop:0} , 'slow' ) ;
}
) ;
} ) ;


//ヘッダーのホームの移動先
$(function(){
$('.l-header__right > li:first-child').on('click', function(){
  var targetTop = $('#p-profile__topTtl').offset().top;
  $('body, html').animate({ scrollTop: 0 }, 500);
  return false;
});
});
//ヘッダーの自己紹介の移動先
$(function(){
$('.l-header__right > li:nth-child(2)').on('click', function(){
  var targetTop = $('#p-profile__topTtl').offset().top;
  $('html,body').animate({
      scrollTop: targetTop-100
  }, 500);
  return false;
});
});
//ヘッダーのスキルの移動先
$(function(){
$('.l-header__right > li:nth-child(3)').on('click', function(){
  var skill = $('#p-skill').offset().top;
  $('html,body').animate({
      scrollTop: skill-80
  }, 500);
  return false;
});
});
//ヘッダーのブログの移動先
// $(function(){
// $('.l-header__right > li:nth-child(4)').on('click', function(){
//   var programming = $('#p-programming').offset().top;
//   $('html,body').animate({
//       scrollTop: programming-80
//   }, 500);
//   return false;
// });
// });
//ヘッダーの制作実績の移動先
$(function(){
$('.l-header__right > li:nth-child(4)').on('click', function(){
  var performar = $('#p-performance').offset().top;
  $('html,body').animate({
      scrollTop: performar-80
  }, 500);
  return false;
});
});
//ヘッダーのお問い合わせの移動先
$(function(){
$('.l-header__right > li:last-child').on('click', function(){
  var claim = $('#c-claim').offset().top;
  $('html,body').animate({
      scrollTop: claim-80
  }, 500);
  return false;
});
});











$(function(){
  $('.p-mainTtl__icon').on('click', function(){
      var targetTop = $('#p-profile__topTtl').offset().top;
      $('html,body').animate({
          scrollTop: targetTop-100
      }, 500);
      return false;
  });
});




$(document).ready(function() {
var pagetop = $('.c-pagetop');
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

































$(function() {
  $('.slider').slick({
    autoplay: true,
    dots: true,
    centerMode: true,
    slidesToShow: 3,
    asNavFor: '.text',
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        centerPadding: 0,
        fade: true
      }
    }]
  });
  $('.text').slick({
      slidesToShow: 1,
      fade: true,
      asNavFor: '.slider'
  });

  $(window).scroll(function (){
    $("#sec01").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      }
    });
  });

  $(window).scroll(function (){
    $("#sec02").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      }
    });
  });

  $(window).scroll(function (){
    $("#sec03").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      }
    });
  });

  $(window).scroll(function (){
    $("#sec04").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      }
    });
  });

  $(window).scroll(function (){
    $("#sec05").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      }
    });
  });

  $(window).scroll(function (){
    $("#sec06").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      }
    });
  });

  $(window).scroll(function (){
    $("#sec07").each(function(){
      var imgPos = $(this).offset().top;
      var scroll = $(window).scrollTop();
      var windowHeight = $(window).height();
      if (scroll > imgPos - windowHeight + windowHeight/5){
        $(this).addClass("fade_on");
      }
    });
  });
  $('.menu').click(function() {
        $(this).toggleClass('active');
        $('.close').toggleClass('active');
        $('.open').toggleClass('active');
        if ($(this).hasClass('active')) {
            $('.header-menu').addClass('active');
        } else {
            $('.header-menu').removeClass('active');
        }
    });

    $('.header-menu a').click(function(){
        $('.header-menu').removeClass('active');
        $('.navToggle').removeClass('active');
    });
});
