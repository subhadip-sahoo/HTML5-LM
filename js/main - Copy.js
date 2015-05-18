jQuery(document).ready(function () {

	if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	    var msViewportStyle = document.createElement("style");
	    msViewportStyle.appendChild(
	      document.createTextNode("@-ms-viewport{width:auto!important}")
	    );
	    document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
	  }
	  
	//MENU CLICK GO LINK SECTION
	jQuery('.table-nav-menu li a').click(function(e){
		e.preventDefault();

		jQuery('.table-nav-menu ul li').removeClass('active');
		jQuery(this).parent().addClass('active');

		jQuery(this).parent().parent().parent().slideUp(500);

		var target_link = this.hash;
		console.log(target_link);
		var target_linkID = jQuery(target_link);

		jQuery('html, body').stop().animate({
			'scrollTop': target_linkID.offset().top
		}, 2400, 'swing');

	});

	//SCROLL TO TOP
	jQuery(window).scroll(function(){
		if (jQuery(this).scrollTop() > 400) {
			jQuery('.scroll-top').fadeIn();
		} else {
			jQuery('.scroll-top').fadeOut();
		};
	});

	jQuery('.scroll-top').click(function (e) {
		e.preventDefault();

		jQuery('.table-nav-menu ul li').removeClass('active');

		jQuery('html, body').animate({
			'scrollTop': 0
		}, 800);
		return false;
	});

	jQuery('.dropdown').hide();
	jQuery('.dropdown-link').click(function (e) {
		e.preventDefault();

		console.log('Hi');
		jQuery(this).toggleClass('show-dropdown');
		jQuery(this).next('.dropdown').slideToggle();

		jQuery('.search-dropdown').slideUp();

		return false;		
	});

	var navbar = jQuery('.full-nav-container');

	var navbarPOS = navbar.offset().top;

	console.log(navbarPOS);

	jQuery(window).scroll(function(event) {
		var fixedNAVbar = (jQuery(this).scrollTop() > navbarPOS) ? true : false;

		navbar.toggleClass('navbar-fixed', fixedNAVbar);
		jQuery('body').toggleClass('body-fixed', fixedNAVbar);
	});

	var pageHeight = jQuery(window).height()-jQuery('.header-container').height();
	jQuery('.main-front-page').css('height', pageHeight);

	console.log(jQuery(window).height()-jQuery('.header-container').height());
        
	jQuery( window ).resize(function() {
	  jQuery('.main-front-page').css('height', pageHeight);
	  console.log(pageHeight);
	});

	jQuery('#close_highlights').hide();

    jQuery('#search-form').bind({
        submit: function(ev){
            var searchTerm = jQuery('#text-search').val();

            jQuery('section.main-page').removeHighlight();
            if ( searchTerm ) {
                jQuery('section.main-page').highlight( searchTerm );
                jQuery('#close_highlights').fadeIn();
            }
        }
    });

	jQuery('#close_highlights').on('click', function(event) {
		jQuery('section.main-page').removeHighlight();
        jQuery('span.highlight').fadeOut(1000);
        jQuery("#search-lists").parent().slideUp();
        jQuery(this).fadeOut();
        
        jQuery("#text-search").attr("placeholder", "Search").val("").focus().blur();
		console.log('close click');
	});

    jQuery(document).delegate('#search-lists li a','click',function(e){
        jQuery("#search-lists").parent().slideUp();
        e.preventDefault();
        var target_link = this.hash;
        console.log(target_link);
        var target_linkID = jQuery(target_link);

        jQuery('html, body').stop().animate({
                'scrollTop': target_linkID.offset().top
        }, 2400, 'swing');
    });

    jQuery('body').click(function () {
		jQuery('.dropdown').slideUp();
		jQuery('.dropdown-link').removeClass('show-dropdown');
	});

});

jQuery(function() {
    jQuery(document).on('click', function(e) {
        if (e.target.id != 'btnSearch') {

            jQuery('.search-dropdown').slideUp();

        }

    });
});