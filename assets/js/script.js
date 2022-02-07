function initRightNav() {
    /* Set img src for right navbar*/
    $(".right-nav .logo").html($(".top-nav .nav-logo").html());
    /* fill right navar ul list items*/
    $(".right-nav .nav-menu").html($(".top-nav .navbar-nav").parent().html());
    /*toogle btn */
    $('.hamb-btn').click(function () {
        $('.hamb-btn').toggleClass('open');
        $(".right-nav").toggleClass('show');
    });
}
function preloadImage(url) {
    var img = new Image();
    img.src = url;
}
function mainMenuService() {

    let number = numberof;

	$('.slider-carousel').owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		dots: false,
		smartSpeed: 500,
		autoplayTimeout: 2000,
		autoplay: false,
		autoplayHoverPause: true,
        // animateIn: 'flipInX',
		responsive: {
			0: {
				items: 1
			},
			480: {
				items: 1
			},
			600: {
				items: 2
			},
			800: {
				items: 3
			},
			1200: {
				items: number
			}
		}
	});

    // responsive: {
    //     0: {
    //         items: 1
    //     },
    //     480: {
    //         items: 1
    //     },
    //     600: {
    //         items: 2
    //     },
    //     800: {
    //         items: 3
    //     },
    //     1200: {
    //         items: 4
    //     }
    // }

}



$(document).ready(function () {
    initRightNav();
    mainMenuService();

    if(window.innerWidth >= 600){

    const top_header = $('.top-header-outer')
        let fixed = false;
        
        let top_nav_item = $('.top-header-outer .top-header')
        let top_nav_height = $(top_nav_item).height()


        var css = `.top-header-outer.fixed { transform: translateY(-${top_nav_height}px); }`,

        head = document.head || document.getElementsByTagName('head')[0],
        style = document.createElement('style');

        head.appendChild(style);
        style.type = 'text/css';
        if (style.styleSheet){
            // This is required for IE8 and below.
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }

        $(document).scroll(() => {
        if ($(this).scrollTop() > 50) {
            if (!fixed) {
                top_header.addClass('fixed')
                setTimeout(()=>{
                    fixed = true;
                },1000)
            }
        } else {
            if (fixed) {
            top_header.removeClass('fixed')
            fixed = false
            }
        }
        })
    }
    setTimeout(() => {
      $('.right-nav').addClass('animated')
    }, 2000)


  });