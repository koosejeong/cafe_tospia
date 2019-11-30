(function($){
  const body = $('body');
  const wrap = $('#wrap');

   // header area==================
   wrap.append('<header id="headBox" class="scroll"></header>');

   const headArea = $('#headBox');
   const jsLink = (temp) => {
    return body.append(`<script src="./js/src/temp/${temp}.js"></script>`);
  };
  headArea.load('./html/temp/head_area.html', () => {
    return jsLink('head_area');
  });

  // 1st section area==================
  wrap.append('<section id="viewBox" class="scroll"></section>');

  const sectionArea = $('#viewBox');
  sectionArea.load('./html/temp/section_area.html', () => {
    return jsLink('section_area');
  });

  // 1st article area==================
  wrap.append('<article id="conBox" class="scroll"></article>');

  const articleArea = $('#conBox');
  articleArea.load('./html/temp/article_area.html', () => {
    
  });
   // 2st article area==================
   wrap.append('<article id="conBox02" class="scroll"></article>');

   const articleArea02 = $('#conBox02');
   articleArea02.load('./html/temp/article_area_02.html', () => {
     return jsLink('article_area_02');
   });

   // 1st aside area==================
   wrap.append('<aside id="asideBox" class="scroll"></article>');

   const asideArea = $('#asideBox');
   asideArea.load('./html/temp/aside_area.html', () => {
     return jsLink('aside_area');
   });

  // footer area=======================
  wrap.append('<footer id="footBox" class="scroll"></footer>');

  const footerArea = $('#footBox');
  footerArea.load('./html/temp/footer_area.html', () => {
    return jsLink('footer_area');
  });

  setTimeout(function(){
    return jsLink('article_area');
  }, 200);
  

})(jQuery);