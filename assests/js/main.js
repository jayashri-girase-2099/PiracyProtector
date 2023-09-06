(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    // $('[data-toggle="counter-up"]').counterUp({
    //     delay: 10,
    //     time: 2000
    // });


    (function( $ ){
        "use strict";
      
        $.fn.counterUp = function( options ) {
      
          // Defaults
          var settings = $.extend({
              'time': 2000,
              'delay': 10
          }, options);
      
          return this.each(function(){
      
              // Store the object
              var $this = $(this);
              var $settings = settings;
      
              var counterUpper = function() {
                  var nums = [];
                  var divisions = $settings.time / $settings.delay;
                  var num = $this.text();
                  var isComma = /[0-9]+,[0-9]+/.test(num);
                  num = num.replace(/,/g, '');
                  var isInt = /^[0-9]+$/.test(num);
                  var isFloat = /^[0-9]+\.[0-9]+$/.test(num);
                  var decimalPlaces = isFloat ? (num.split('.')[1] || []).length : 0;
      
                  // Generate list of incremental numbers to display
                  for (var i = divisions; i >= 1; i--) {
      
                      // Preserve as int if input was int
                      var newNum = parseInt(num / divisions * i);
      
                      // Preserve float if input was float
                      if (isFloat) {
                          newNum = parseFloat(num / divisions * i).toFixed(decimalPlaces);
                      }
      
                      // Preserve commas if input had commas
                      if (isComma) {
                          while (/(\d+)(\d{3})/.test(newNum.toString())) {
                              newNum = newNum.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
                          }
                      }
      
                      nums.unshift(newNum);
                  }
      
                  $this.data('counterup-nums', nums);
                  $this.text('0');
      
                  // Updates the number until we're done
                  var f = function() {
                      $this.text($this.data('counterup-nums').shift());
                      if ($this.data('counterup-nums').length) {
                          setTimeout($this.data('counterup-func'), $settings.delay);
                      } else {
                          delete $this.data('counterup-nums');
                          $this.data('counterup-nums', null);
                          $this.data('counterup-func', null);
                      }
                  };
                  $this.data('counterup-func', f);
      
                  // Start the count up
                  setTimeout($this.data('counterup-func'), $settings.delay);
              };
      
              // Perform counts when the element gets into view
              $this.waypoint(counterUpper, { offset: '100%', triggerOnce: true });
          });
      
        };
      
      })( jQuery );
      
      
        // custom code
      jQuery(document).ready(function( $ ) {
              $('.counter').counterUp({
                  delay: 10,
                  time: 1000
              });
          });
      
        


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        items: 1,
        dots: true,
        loop: true,          
        nav : true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);


// Our client
$(document).ready(function(){
    
    $('.items').slick({
  dots: true,
  infinite: true,
  speed: 800,
  autoplay: true,
  autoplaySpeed: 2000,
  slidesToShow: 10,
  slidesToScroll: 10,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 6,
        slidesToScroll: 6,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }

  ]
});
          });

