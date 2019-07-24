$(window).resize(function(){
  location.reload();
});

let viewport = window.matchMedia('(max-width:999px)');
if(viewport.matches){
  let nav = $('.navigation');
  let btn = $('.btn-menubar');
  let menu = $('.menu');
  let li = $('.menu-list');
  let span = $('.menu-item');

  li.attr('tabindex', '0');

  span.attr('role', 'button');
  span.attr('aria-haspopup', 'true'); //하위메뉴가 있음
  span.attr('aria-expanded', 'false'); //하위메뉴가 펼쳐져 있지않음 (false인 경우)
  span.addClass('icon-plus');

  btn.on('click', function(e) {
    e.preventDefault(); //기본 이벤트 방지 주소창에 "#"이 나타나는 것을 막는다
    nav.toggleClass('is-act');
    if (nav.hasClass('is-act')) {
      btn.attr('aria-label', '메인 메뉴 닫기');
    } else {
      btn.attr('aria-label', '메인 메뉴 열기');
    }
  });

  li.on("click keydown", function(e){
    if(e.type === 'click' || (e.type === 'keydown' && e.keyCode === 13)){
      // e.preventDefault();
      li.removeClass('menu-act');
      $(this).addClass('menu-act');

      span.removeClass('icon-minus').addClass('icon-plus');
      $(this).find('.menu-item').removeClass('icon-plus').addClass('icon-minus');
    }
  });
  
}