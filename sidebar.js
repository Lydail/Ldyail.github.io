$(function () {
   // 侧边栏弹出
   $('button').click(function () {
      var left = $('#wrapper')[0].offsetLeft;
      if (left == 0) {
         $('#wrapper').offset({'left': 220});
         $('#wrapper').css({'transition': "all .6s"});
         $(this).css('transform', 'rotate(450deg)');
         $('.headSculpture img').addClass('img');
         $('.headSculpture p').addClass('opacity');
         setTimeout(function () {
            $('.option ul>li').addClass('li');
         }, 600)
      } else {
         $('#wrapper').offset({
            'left': 0
         });
         $(this).css('transform', 'rotate(0deg)');
         setTimeout(function () {
            $('.headSculpture img').removeClass('img');
            $('.headSculpture p').removeClass('opacity');
            $('.option ul>li').removeClass('li');
         }, 300)
      }
   })

   // 鼠标触碰改变img样式
   var SRC = [{
      src: 'images/home_1.png'
   },
   {
      src: 'images/works_1.png'
   },
   {
      src: 'images/html_1.png'
   },
   {
      src: 'images/webPage_1.png'
   },
   {
      src: 'images/special_1.png'
   },
   {
      src: 'images/HTML5_1.png'
   },
   {
      src: 'images/home.png'
   },
   {
      src: 'images/works.png'
   },
   {
      src: 'images/html.png'
   },
   {
      src: 'images/webPage.png'
   },
   {
      src: 'images/special.png'
   },
   {
      src: 'images/HTML5.png'
   },
   ]
   $('.option ul>li').mouseenter(function () {
      var index = $(this).index();
      $(this).children('img').attr('src', SRC[index].src);
   })
   $('.option ul>li').mouseleave(function () {
      var index = $(this).index();
      $(this).children('img').attr('src', SRC[index + 6].src);
   })
})