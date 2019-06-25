$(document).ready(function(){
//Add all jQuery in here

$( document ).ready(function() {
 $(".burger-button").click(function(){
   $(".burger-button").toggleClass("active");
   $(".burger-menu").toggleClass("active");
 });
});
//this is the FAQ accordian 
var allPanels = $('.accordion > dd').hide();

	$('.accordion > dt > a').click(function() {
		allPanels.slideUp();

    $(this).filter('.open').removeClass('open').addClass('closing')
    $('.accordion > dt > a').removeClass('open');
  $(this).not(".closing").addClass('open').parent().next().slideDown();
    $('.accordion > dt > a').removeClass('closing');

    return false;
	});

});
