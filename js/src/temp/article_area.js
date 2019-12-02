// article_area.js
(function($){

  const win = $(window);
  const htmlEl = $('html, body');
  const wrap = $('#wrap');
  const conBox = $('#conBox');
  const fullBox = conBox.children('.fullBox');
  const halfBoxOne = fullBox.children('.half_box01');
  const halfBoxTwo = fullBox.children('.half_box02');
  const scrollEl = wrap.find('.scroll');

  const winH = win.outerHeight();
  scrollEl.css({height:winH});
  
  win.on('mousewheel DOMMouseScroll', function(e){

    (e.originalEvent.wheelDelta) ? n = e.originalEvent.wheelDelta * -1 : n = e.originalEvent.detail * 40;
    
     let winLoc = $(this).scrollTop();
     if( winLoc >= winH){
       halfBoxOne.addClass('action');
       halfBoxTwo.addClass('action');
     } else if( winLoc <= winH) {
       halfBoxOne.removeClass('action');
       halfBoxTwo.removeClass('action');
     }   
   
  });

})(jQuery);