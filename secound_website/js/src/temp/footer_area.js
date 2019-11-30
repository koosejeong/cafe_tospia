// footer_area.js
(function($){

  const footBox = $('#footBox');
  const footUl = footBox.children('ul');
  const footLi = footUl.children('li');

  let url = './img/icon/';
  let imgBox = [ 'company-icon-01', 'sns-icon-01', 'terms-icon-01', 'cs-icon-01' ];
  for(let i=0; i<footLi.length; i++){
    footLi.eq(i).children('a').css({backgroundImage:`url(${url + imgBox[i]}.png)`, backgroundSize:'conatin', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat'});
  }
})(jQuery);