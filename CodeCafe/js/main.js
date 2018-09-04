$(document).ready(function () {
  // Update download buttons
  $('select').change(function(){
    $('.btn-os').text('(' + $('select')[0].selectedOptions[0].value + ')');
  });

  //Mobile Menu
  $('.hamburger').click(function(){
    $('.links').slideToggle(' active');
  });

    // Smooth Scrolling
    var scrollLink = $('.scroll');
    scrollLink.click(function(e){
       e.preventDefault();
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000);
   });

//Active Class Highlighting
  $(window).scroll(function() {
    var scrollbarLocation = $(this).scrollTop();

    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top - 50;

      if(sectionOffset <= scrollbarLocation){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    });
  })
});
