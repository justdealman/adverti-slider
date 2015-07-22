(function( $ ) {

    $(function() {
        //change classes on resize begins
        $('.js-container').responsive();

        var body = $('body');
        body.on('changeSize1', function() {
            $(this)
                .addClass('set-width-1')
                .removeClass('set-width-2')
                .removeClass('set-width-3')
                .removeClass('set-width-4')
                .removeClass('set-width-5');

//            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//            $('.footer').html('1' + ' ' + width);
        });

        body.on('changeSize2', function() {
            $(this)
                .addClass('set-width-2')
                .removeClass('set-width-1')
                .removeClass('set-width-3')
                .removeClass('set-width-4')
                .removeClass('set-width-5');

//            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//            $('.footer').html('2' + ' ' + width);
        });

        body.on('changeSize3', function() {
            $(this)
                .addClass('set-width-3')
                .removeClass('set-width-1')
                .removeClass('set-width-2')
                .removeClass('set-width-4')
                .removeClass('set-width-5');

//            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//            $('.footer').html('3' + ' ' + width);
        });

        body.on('changeSize4', function() {
            $(this)
                .addClass('set-width-4')
                .removeClass('set-width-1')
                .removeClass('set-width-2')
                .removeClass('set-width-3')
                .removeClass('set-width-5');

//            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//            $('.footer').html('4' + ' ' + width);
        });

        body.on('changeSize5', function() {
            $(this)
                .addClass('set-width-5')
                .removeClass('set-width-1')
                .removeClass('set-width-2')
                .removeClass('set-width-3')
                .removeClass('set-width-4');

//            var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
//            $('.footer').html('4' + ' ' + width);
        });
        //change classes on resize ends
    });

    $(function() {
        //set class for touch and no touch devices begins
        var body = $('body');
        var setClassIfTouchDevice = function() {
            'ontouchstart' in window
                ? body.addClass('is-touch-device')
                : body.addClass('is-no-touch-device');
        };
        setClassIfTouchDevice();
        //set class for touch and no touch devices ends
    });
	
	
	function subCat() {
		var subCatProduct = $('.sub-categories-for-product-sorted');
		subCatProduct.find('ul').remove();
		var subCatElements = subCatProduct.find('div p').size();
		if ( $(window).width() < 980 ) {
			var subcatcols = 1;
			subCatProduct.prepend('<ul class="single"></ul>');
		}
		else if ( $(window).width() < 1280 ) {
			var subcatcols = 2;
			subCatProduct.prepend('<ul class="double"></ul>');
		}
		else {
			var subcatcols = 3;
			subCatProduct.prepend('<ul class="triple"></ul>');
		}
		for ( var i=1; i<=subcatcols; i++ ) {
			subCatProduct.find('ul').append('<li></li>');
			for ( var j=1; j<=Math.ceil(subCatElements/subcatcols); j++ ) {
				subCatProduct.find('div p:nth-of-type('+eval((i-1)*Math.ceil(subCatElements/subcatcols)+j)+')').clone().appendTo(subCatProduct.find('ul li:nth-of-type('+i+')'));
			}
		}
		subCatProduct.find('a').hover(
			function() {
				if ( $(this).height() > 17 && $(this).parent().index()+1 < $(this).parents('li').children('p').size() ) {
					$(this).addClass('over');
					$(this).css({
						'padding-bottom': '17px'
					});
				}
				if ( $(this).height() > 34 ) {
					$(this).css({
						'padding-bottom': '0'
					});
				}
			},
			function() {
				if ( $(this).hasClass('over') ) {
					$(this).removeClass('over');
					$(this).css({
						'padding-bottom': '0'
					});
				}
			}
		);
	}

    $(function() {
		if ( $('.sub-categories-for-product-sorted').length > 0 ) {
			subCat();
		}
		$(window).resize(function() {
			subCat();
		});
    });
	
	function advAdaptive() {
		if ( $('.adv-slider').width() < 640 ) {
			var w = 300;
		}
		if ( $('.adv-slider').width() >= 930 && $('.adv-slider').width() < 1230 ) {
			var w = 600;
		}
		if ( $('.adv-slider').width() >= 1230 && $('.adv-slider').width() < 1530 ) {
			var w = 900;
		}
		if ( $('.adv-slider').width() >= 1530 && $('.adv-slider').width() < 1830 ) {
			var w = 1200;
		}
		if ( $('.adv-slider').width() >= 1830 ) {
			var w = 1500;
		}
		$('.adv-slider .core .tab .products .jcarousel-container .jcarousel-clip, .adv-slider .core .tab .listing .jcarousel-container .jcarousel-clip').width(w);
	}

    $(function() {
		if ( $('.adv-slider').length > 0 ) {
			advAdaptive();
		}
		$(window).resize(function() {
			advAdaptive();
		});
    });
	

})(jQuery);