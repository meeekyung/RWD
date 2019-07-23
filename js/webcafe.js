let nav = $('.navigation');
let btn = $('.btn-menubar');

btn.on("click", function(){
  nav.toggleClass("is-act");
});