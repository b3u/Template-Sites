// Smooth Scrolling
$(document).ready(function() {
    var scrollLink = $('.scroll');
    scrollLink.click(function(e){
       e.preventDefault(); 
      $('body,html').animate({
        scrollTop: $(this.hash).offset().top
      }, 1000);
   });
  
//Active Class Highlighting
  $(window).scroll(function(){
    var scrollbarLocation = $(this).scrollTop();
    
    scrollLink.each(function(){
      var sectionOffset = $(this.hash).offset().top - 50;
      
      if(sectionOffset <= scrollbarLocation){
        $(this).addClass('active');
        $(this).siblings().removeClass('active');
      }
    });
  });
})