$(document).ready(function () {
    let nav = $('#nav');
    let header = $('#header');
    let headerH = header.innerHeight();
    let scrollPos = $(window).scrollTop();

    

    
    checkScroll(scrollPos, headerH);
    
    $(window).on('scroll resize', function(){
        headerH = header.innerHeight();
        scrollPos = $(window).scrollTop();
        
        checkScroll(scrollPos, headerH);
    });
    
    function checkScroll(scrollPos, headerH){
        if(scrollPos > headerH - 30){
            let headerH = header.innerHeight();
            nav.addClass('fixed-top');
        } else {
            nav.removeClass('fixed-top');
        }
    }
    
    $('[data-scroll]').click(function(e){
        e.preventDefault();
        
        let elementId = $(this).data('scroll');
        let elementOffset = $(elementId).offset().top;
        
        $('html, body').animate({
            scrollTop: elementOffset -20
        }, 700)
    });

    $('.header-menu__link').click(function(e){
        e.preventDefault();
        $('.header-menu__link').removeClass('header-menu__link_active');
        $('.header-menu').removeClass('menu-open').css('right', -70 + '%');
        $('.header-burger').removeClass('open');
        $(this).addClass('header-menu__link_active');
    })
    
    $('.header-burger').click(function(){
        if(!$(this).hasClass('open')){
            $(this).addClass('open');
            $('.header-menu').addClass('menu-open').animate({
                right: 0
            }, 1000);
        } else {
            $(this).removeClass('open');
            $('.header-menu').removeClass('menu-open').animate({
                right: -70 + '%'
            }, 1000)
        }
    });
});