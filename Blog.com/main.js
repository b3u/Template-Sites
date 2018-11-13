$(document).ready(function() {
	//Responsive Menu
	$('.hamburger').click(function() {$('#nav').toggleClass(' activeNav')});

	//Smooth Scrolling
	$('.scroll').click(function(e){
		e.preventDefault();
		$('body, html').animate({scrollTop: $(this.hash).offset().top}, 1000);
	});

	//Pricing Modals
	$('.modal').click(function(){
		$('#article' + this.id).toggleClass(' activeModal');
	});
});