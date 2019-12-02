// aside_area.js
(function($){

  const asideBox = $('#asideBox');
  const fullBox = asideBox.children('.fullBox');
  const myUl = fullBox.children('ul');
  const myLi = myUl.children('li');
  const txtUl = fullBox.children('.txt_area');
  const txtLi = txtUl.children('li');
  const txtArea = txtLi.children('p');
  const fullTxt = fullBox.children('p');

  let imgBox = [ 'img01.jpg', 'img02.jpg', 'img03.jpg', 'img04.jpg' ];
  for(let i=0; i<myLi.length; i++){
    myLi.eq(i).children('a').css({ backgroundImage:`url(./img/aside01/${imgBox[i]})`, backgroundSize:'cover', backgroundPosition:'50% 50%', backgroundRepeat:'no-repeat'});
  }
  let txt = [ 'Winter is the best way to relax, have a cup of hot coffee', 'Let s blow cold with sweet and delicious dessert', 'Seasonal Drinks', 'Kind of delicious and bakery' ];
  for(let i=0; i<txtArea.length; i++){
    txtArea.eq(i).text(txt[i]);
  }
  
  myLi.on('mouseenter click', function(e){
    e.preventDefault();
    let i = $(this).index();
    $(this).children('a').css({position:'relative', border:'5px solid #fff', zIndex:10});
    $(this).siblings().children('a').css({border:0, zIndex:0});
    fullTxt.addClass('action');
    if(i === 0){
      txtLi.eq(0).children(txtArea).css({display:'block'});
      txtLi.eq(0).siblings().children(txtArea).css({display:'none'});
    } else if( i === 1 ){
      txtLi.eq(1).children(txtArea).css({display:'block'});
      txtLi.eq(1).siblings().children(txtArea).css({display:'none'});
    } else if( i === 2 ){
      txtLi.eq(2).children(txtArea).css({display:'block'});
      txtLi.eq(2).siblings().children(txtArea).css({display:'none'});
    } else {
      txtLi.eq(3).children(txtArea).css({display:'block'});
      txtLi.eq(3).siblings().children(txtArea).css({display:'none'});
    }
    
  });




})(jQuery);