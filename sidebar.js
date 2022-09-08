$(function () {
   // 侧边栏弹出
   var count = 1;
   $('button').click(function () {
      count++;
      if (count % 2 === 0) {
         $('.sidebar').css({ "left": 0, "transition": "all .6s" });
         $(this).css("marginLeft", 230);
         $(this).css('transform', 'rotate(450deg)');
         $('.headSculpture img').addClass('img');
         $('.headSculpture p').addClass('opacity');
         setTimeout(function () {
            $('.option ul>li').addClass('li');
         }, 600);
      } else {
         $('.sidebar').css({ "left": -230 });
         $(this).css("marginLeft", 10);
         $(this).css('transform', 'rotate(0deg)');
         setTimeout(function () {
            $('.headSculpture img').removeClass('img');
            $('.headSculpture p').removeClass('opacity');
            $('.option ul>li').removeClass('li');
         }, 300);
      }
   });

   // 鼠标触碰改变img样式
   var SRC = [{
      src: 'images/home_1.png'
   },
   {
      src: 'images/html_1.png'
   },
   {
      src: 'images/special_1.png'
   },
   {
      src: 'images/home.png'
   },
   {
      src: 'images/html.png'
   },
   {
      src: 'images/special.png'
   },
   ];
   $('.option ul>li').mouseenter(function () {
      var index = $(this).index();
      $(this).children('img').attr('src', SRC[index].src);
   });
   $('.option ul>li').mouseleave(function () {
      var index = $(this).index();
      $(this).children('img').attr('src', SRC[index + 3].src);
   });

   // 点击分类显示对应内容
   $('.list li').click(function () {
      // $(this).addClass('active').siblings().removeClass("active")
      $('.banner').css({
         top: -753.6 * $(this).index(),
         transition: "all .3s"
      });
   });

});