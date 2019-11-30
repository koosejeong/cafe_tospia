// head_area.js
(function($){
// data 불러오기--------------------
let url = './data/menu.json';
let rel = null;
$.ajax({
  async:false,
  dataType:'json',
  url:url,
  success: function(data){
    return rel= data;}  
});
console.log(rel);
// -------------------------------

const win = $(window);
const htmlEl = $('html, body');
const wrap = $('#wrap');
const headBox = $('#headBox');
const wrapBox = headBox.children('.wrapBox');
const nav = headBox.find('.gnb');
const firstBox = nav.children('.menu_area01');
const firstUl = firstBox.children('ul');
const firstLi = firstUl.children('li');
const secoundBox = nav.children('.menu_area02');
const secoundUl = secoundBox.children('ul');
const secoundLi = secoundUl.children('li');
const scrollEl = wrap.find('.scroll');

let t01 = [ rel[0], rel[1], rel[2] ];
let t02 = [ rel[3], rel[4], rel[5] ];

let winTop = win.scollTop;
let scrollLen = scrollEl.length;


for(let i=0; i<firstLi.length; i++){
  firstLi.eq(i).append('<dl><dt></dt><dd></dd></dl>');
  let firstDl = firstLi.children('dl');
  let firstDt = firstDl.children('dt');
  let firstDd = firstDl.children('dd');
  firstDt.eq(i).append(t01[i].title);
  for(let j=0; j<t01[i].subtitle.length; j++){
    firstDd.eq(i).append(`<a href="#">${t01[i].subtitle[j]}</a>`); 
  }
}
for(let i=0; i<firstLi.length; i++){
  secoundLi.eq(i).append('<dl><dt></dt><dd></dd></dl>');
  let secoundDl = secoundLi.children('dl');
  let secoundDt = secoundDl.children('dt');
  let secoundDd = secoundDl.children('dd');
  secoundDt.eq(i).append(t02[i].title);
  for(let j=0; j<t02[i].subtitle.length; j++){
    secoundDd.eq(i).append(`<a href="#">${t02[i].subtitle[j]}</a>`); 
  }
}

nav.find('dl').on('click mouseenter', function(e){
  e.preventDefault();
  $(this).children('dd').stop().slideDown();
});
nav.find('dl').on('mouseleave', function(e){
  e.preventDefault();
  $(this).children('dd').stop().slideUp();
});

win.on('mousewheel', function(e){
  (e.originalEvent.wheelDelta) ? n = e.originalEvent.wheelDelta * -1 : n = e.originalEvent.detail * 40;
  
  let winLoc = $(this).scrollTop();
  if( winLoc > 1000){
    wrapBox.css({top:0, left:0, width:'100%', borderRadius:0});
  } else {
    wrapBox.css({top:'20%', left:'10%', width:'80%', borderRadius:'10px'});
  }
  
});


})(jQuery);