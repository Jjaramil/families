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
            $('[id*="message"]').hide();
            if($('#keyword').val().toLowerCase()==='equipo1'){
                $('#message').show();
            }else if($('#keyword').val().toLowerCase()==='equipo2'){
                $('#message1').show();
            }else if($('#keyword').val().toLowerCase()==='san bernardo'){
                $('#message2').show();
            }else if($('#keyword').val().toLowerCase()==='3'){
                $('#message3').show();
            }else if($('#keyword').val().toLowerCase()==='oración'){
                $('#message4').show();
            }else if($('#keyword').val().toLowerCase()==='oracion'){
                $('#message4').show();
            }else if($('#keyword').val().toLowerCase()==='misericordia'){
                $('#message5').show();
            }else if($('#keyword').val().toLowerCase()==='padre nuestro'){
                $('#message6').show();
            }else if($('#keyword').val().toLowerCase()==='7'){
                $('#message7').show();
            }else if($('#keyword').val().toLowerCase()==='20'){
                $('#message8').show();
            }else if($('#keyword').val().toLowerCase()==='san juan pablo ii'){
                $('#message9').show();
            }else if($('#keyword').val().toLowerCase()==='juan pablo ii'){
                $('#message9').show();
            }else if($('#keyword').val().toLowerCase()==='luminosos'){
                $('#message10').show();
            }else if($('#keyword').val().toLowerCase()==='unida'){
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

