function showMenu() {
var menu = document.querySelector('ul');
var menulink = document.getElementById('hamburger');

menulink.addEventListener('click', function(e) {
  menu.classList.toggle('active');
  e.preventDefault();
});
}

$(document).ready(function () {
  var scrollLink = $('.scroll');
  //Smooth Scrolling
  scrollLink.click(function (e) {
    e.preventDefault();
  $('body,html').animate({
    scrollTop: $(this.hash).offset().top
  }, 1000)
  })
})