/****
=============================================
			for Preloader
=============================================
 *****/
$(document).ready(function(){
	$("header button").click(function() {
		$("header").toggleClass("open");
		$("header a .mainLogo").toggle(1000);
	});

	$(window).scroll(function() {

		if ($("header").offset().top > 10) {
			$("header").addClass("activeheader"),
				$("header a .mainLogo").hide(1000);
		}
		else {
			$("header").removeClass("activeheader"),
				$("header a .mainLogo").show(1000);

		}
	});




	$('header').scrollspy({ target: '#navbar-example' })
	$('[data-spy="scroll"]').each(function () {
		var $spy = $(this).scrollspy('refresh')
	})
})

/****
=============================================
			vagas for Banner
=============================================
 *****/
$(function(){
		$('#banner').vegas({
			delay:3000,
			slides:[
				{src:'images/banner/banner1.jpg'},
				{src:'images/banner/banner.jpg'},
				{src:'images/banner/banner2.jpg'}
			]
		});
	});
	
	
	
/****
=============================================
			type writer for banner
=============================================
 *****/
 //made by vipul mirajkar thevipulm.appspot.com
var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 2000;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 200 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };
 
 /****
=============================================
			Tooltips
=============================================
 *****/
$('.social a').tooltip();



/*
==============================================
		for service owl Slider
==============================================
*/
var serviceOwl = $('.service-Owl');
	serviceOwl.owlCarousel({
		items:3,
		loop:true,
		margin:10,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:false
	});


/****
=============================================
		ProgressBar for skill 
=============================================
 *****/

$(function () { 
  $('[data-toggle="tooltip"]').tooltip({trigger: 'manual'}).tooltip('show');
});  

$( window ).scroll(function() {   
  if($( window ).scrollTop() > 100){  // scroll down abit and get the action   
  $(".progress-bar").each(function(){
    each_bar_width = $(this).attr('aria-valuenow');
    $(this).width(each_bar_width + '%');
  });
       
  }  
});

/****
 =============================================
 		for carousel Time Control
 =============================================
 *****/

$('.carousel').carousel({
	interval: 2000
})

/****
 =============================================
 		for Scroll Animation (wow.js)
 =============================================
 *****/

$(function(){
	new WOW().init();
})












/****
 =============================================
 			for ScrollBar
 =============================================
 *****/

/*var scrollTimer = null;

$(window).scroll(function() {
	var viewportHeight = $(this).height(),
		scrollbarHeight = viewportHeight / $(document).height() * viewportHeight,
		progress = $(this).scrollTop() / ($(document).height() - viewportHeight),
		distance = progress * (viewportHeight - scrollbarHeight) + scrollbarHeight / 2 - $('#scrollbubble').height() / 2
		;

	$('#scrollbubble')
		.css('top', distance)
		.text('Progress (' + Math.round(progress * 100) + '%)')
		.fadeIn(100)
	;

	// Fade out the annotation after 1 second of no scrolling.
	if (scrollTimer !== null) {
		clearTimeout(scrollTimer);
	}
	scrollTimer = setTimeout(function() {
		$('#scrollbubble').fadeOut();
	}, 500);
});*/

/****
 =============================================
 			for Scroll Up
 =============================================
 *****/

$(window).scroll(function(){
	if ($(this).scrollTop() > 100) {
		$('.scrollup').fadeIn();
	} else {
		$('.scrollup').fadeOut();
	}
});
$('.scrollup').click(function(){
	$("html, body").animate({ scrollTop: 0 }, 1000);
	return false;
});



























// animated color and others changs

/*	$(window).on('scroll', function (){
		if ($(window) .scrollTop() > 550){
		  $('header').addClass('menu-bg');
		} else{
			$('header').removeClass('menu-bg');
		}
	});*/
	
/*/ for DropDown menu

$(document).ready(function(){
    $(".dropdown").hover(            
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideDown("fast");
            $(this).toggleClass('open');        
        },
        function() {
            $('.dropdown-menu', this).stop( true, true ).slideUp("fast");
            $(this).toggleClass('open');       
        }
    );
});*/

