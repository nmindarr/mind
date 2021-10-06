$(document).ready(function(){

	$(".switcher-control").on('click', function(){
	  $('.switcher').toggleClass('toggled');
	});

	$(".styleswitch").on('click', function(){
	  $(".styleswitch").removeClass('active');
	  $(this).addClass('active');
	  $('.gmap').removeClass('active').filter($(this).attr('data-map')).addClass('active');
	  $('.brand-img').attr('src',$(this).attr('data-brand-img'));
	});
	
});

