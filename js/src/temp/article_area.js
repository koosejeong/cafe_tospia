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

  /*
  htmlEl.animate({scrollTop:0}); 
  let myScrollElTop = [];
  let scrollLen = scrollEl.length;
  let timed = 500;
  
  for(let i=0; i < scrollLen; i++) {
    let scTop = scrollEl.eq(i).offset().top;
    myScrollElTop.push(scTop); 
  }

  let myStatus = true;  
  let n, useN = 0;

  const ScrollMagic = function(){
    htmlEl.animate({scrollTop:myScrollElTop[useN]}, timed, 'easeOutQuint', function(){
      myStatus = true;
    });
  } 
  */
  win.on('mousewheel DOMMouseScroll', function(e){

    (e.originalEvent.wheelDelta) ? n = e.originalEvent.wheelDelta * -1 : n = e.originalEvent.detail * 40;
    
     let winLoc = $(this).scrollTop();
     if( winLoc >= 700){
       halfBoxOne.addClass('action');
       halfBoxTwo.addClass('action');
     } else if( winLoc <= 700) {
       halfBoxOne.removeClass('action');
       halfBoxTwo.removeClass('action');
     }   
    /*
    if(myStatus){  myStatus = false;  
       
      // ---------------------
      (e.originalEvent.wheelDelta) ? n = e.originalEvent.wheelDelta * -1 : n = e.originalEvent.detail * 40;
      // ---------------------

       if( n > 0 ){  
         useN++; 
         if( useN >= scrollLen ) { useN = scrollLen-1;  }
         ScrollMagic();
       } else {
         useN--; 
         if( useN < 0 ) { usnN = 0; }
         ScrollMagic();
       }
       switch(useN){
          case 1:
            halfBoxOne.addClass('action');
            halfBoxTwo.addClass('action');
          break;
       }
     } // myStatus if    
     */
  });

})(jQuery);