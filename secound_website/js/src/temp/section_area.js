// section_area.js
(function($){

  const viewBox = $('#viewBox');
  const guideBox = viewBox.children('.guide_box');
  const slideUl = guideBox.children('ul');
  const sludeLi = slideUl.children('li');
  const btn = guideBox.find('button');

  let len = sludeLi.length;
  let myN = 0;
  let timed = 500;
  let imgBox = [ 'img01.jpg', 'img02.jpg', 'img03.jpg' ];

  for(let i=0; i<len; i++){
    sludeLi.eq(i).children('a').css({'backgroundImage':`url(./img/slide01/${imgBox[i]})`, 'backgroundSize':'cover', 'backgroundPosition':'50% 50%', 'backgroundRepeat':'no-repeat'});
  }

  sludeLi.eq(-1).clone(true).prependTo(slideUl);
  len++;

  const moveSlide = function(){
    guideBox.find('.next').trigger('click');
  };

  sludeLi.on('click', function(e){
    e.prenventDefault();
    let va = $(this).index();
    myN = va;
    moveSlide(myN);
  });

  const goSlide = function(){
    go = setInterval(function(){
      moveSlide();
    }, timed * 10);
  };

  const stopSlide = function(){
    clearInterval(go);
  };
  goSlide();

  viewBox.on({'mouseenter':stopSlide, 'mouseleaver':goSlide});

  btn.on('click', function(e){
    e.preventDefault();
    if($(this) == 0){
      myN++;
      if(myN >= len-1){
        myN = 0;
        slideUl.css({marginLeft:'100%'});
      }
    } else {
      myN--;
    } slideUl.animate({marginLeft:-100 * myN + '%'}, function(){
      if( myN < 0){
        myN = len-2;
        slideUl.css({marginLeft:-100 * myN + '%'});
      }
    });
  });

  
})(jQuery);