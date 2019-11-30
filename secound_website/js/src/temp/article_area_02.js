// article_area_02.js
(function($){
  const win = $(window);
  const wrap = $('#wrap');
  const conBoxT = $('#conBox02');
  const fullBox = conBoxT.children('.fullBox');
  const menuUl = fullBox.children('ul');
  const menuLi = menuUl.children('li');

  let url = `./img/article02/`;
  let imgBox = [ 'img03.jpg','img04.jpg', 'img05.jpg',  ];
  for(let i=0; i<menuLi.length; i++){
    menuLi.eq(i).children('a').css({backgroundImage:`url(${url+imgBox[i]})`, backgroundSize:'cover', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat'});
  }

  win.on('scroll', function(e){
    (e.originalEvent.wheelDelta) ? n = e.originalEvent.wheelDelta * -1 : n = e.originalEvent.detail * 40;
    let winLoc = $(this).scrollTop();
    if( winLoc >=1000){
      menuUl.stop().slideDown();
      menuUl.addClass('action');
    } else if( winLoc < 1000) {
      menuUl.removeClass('action');
    }  
  });

})(jQuery);