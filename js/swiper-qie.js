  var mySwiper = new Swiper ('.swiper-container', {
   direction : 'vertical',
   // pagination: '.swiper-pagination',
   mousewheelControl : true,
   onInit: function(swiper){
   swiperAnimateCache(swiper);
   swiperAnimate(swiper);
	  },
   onSlideChangeEnd: function(swiper){
	swiperAnimate(swiper);
    }	  
	   })   