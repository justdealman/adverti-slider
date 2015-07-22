$(document).ready(function() {
if ( $('.adv-slider').length > 0 ) {
	$('.adv-slider .tab').css({
		'left': -$('.adv-slider').outerWidth()+'px'
	});
	$('.adv-slider .tab:first-child').css({
		'left': '0'
	});
	$('.adv-slider .nav li:first-child').addClass('active');
	$('.adv-slider .nav li a').bind('click', function() {
		var e = $(this).parents('.adv-slider');
		var p = e.find('.tab[data-tab="'+eval($(this).parents('ul').find('li.active').index()+1)+'"]');
		var n = e.find('.tab[data-tab="'+$(this).attr('href')+'"]');
		var w = e.outerWidth();
		if ( n.attr('data-tab') > p.attr('data-tab') ) {
			p.stop(true,true).animate({
				'left': w+'px'
			}, 250);
			n.css({
				'left': -w+'px'
			}).stop(true,true).animate({
				'left': '0'
			}, 250);
		}
		if ( n.attr('data-tab') < p.attr('data-tab') ) {
			p.stop(true,true).animate({
				'left': -w+'px'
			}, 250);
			n.css({
				'left': w+'px'
			}).stop(true,true).animate({
				'left': '0'
			}, 250);
		}
		$(this).parent().addClass('active').siblings().removeClass();
		return false;
	});
	$('.adv-slider .products > ul').jcarousel({
		scroll: 1,
		animation: 250
	});
	$('.adv-slider .products').bind('swipeleft', function() {
		$('.adv-slider .products .jcarousel-next').trigger('click');
	});
	$('.adv-slider .products').bind('swiperight', function() {
		$('.adv-slider .products .jcarousel-prev').trigger('click');
	});
	$('.adv-slider .listing > ul').jcarousel({
		scroll: 1,
		animation: 250
	});
	$('.adv-slider .listing').bind('swipeleft', function() {
		$('.adv-slider .listing .jcarousel-next').trigger('click');
	});
	$('.adv-slider .listing').bind('swiperight', function() {
		$('.adv-slider .listing .jcarousel-prev').trigger('click');
	});
}
});
$(window).resize(function() {
if ( $('.adv-slider').length > 0 ) {
	$('.adv-slider .tab').css({
		'left': -$('.adv-slider').outerWidth()+'px'
	});
	$('.adv-slider .tab[data-tab="'+eval($('.adv-slider .nav li.active').index()+1)+'"]').css({
		'left': '0'
	});
}
})