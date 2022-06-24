(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        $('#checker').on('click',function(){
            let value = $('#keyword').val().toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")
            $('[id*="message"]').hide();
            if(value==='equipo1'){
                $('#message').show();
            }else if(value==='equipo2'){
                $('#message1').show();
            }else if(value==='san bernardo'){
                $('#message2').show();
            }else if(value==='3'){
                $('#message3').show();
            }else if(value==='oracion'){
                $('#message4').show();
            }else if(value==='oracion'){
                $('#message4').show();
            }else if(value==='misericordia'){
                $('#message5').show();
            }else if(value==='padre nuestro'){
                $('#message6').show();
            }else if(value==='7'){
                $('#message7').show();
            }else if(value==='20'){
                $('#message8').show();
            }else if(value==='san juan pablo ii' || 
            value==='juan pablo ii'){
                $('#message9').show();
            }else if(value==='luminosos'){
                $('#message10').show();
            }else if(value==='unida'){
                $('#message11').show();
            }
            else{
                $('[id*="message"]').hide();
            }
        });
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


 
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });

   
    
})(jQuery);

