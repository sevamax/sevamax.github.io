
$('#fullpage').fullpage({
    navigation: true,

    afterLoad: function (origin, destination, direction) {
        $('.section[data-anchor="' + origin + '"] .content').addClass('active');
        $('.site-nav').removeClass('hidden');
    },
    onLeave: function (origin, destination, direction) {
        $('.section[data-index="' + origin + '"] .content').removeClass('active');
        $('.site-nav').addClass('hidden');
    }
});
 
function menuNotActive() {
    $('.menuLeft').css('display', 'none');
    $('.mobile a').css('font-size', '16px');
    $('.content').addClass('active');
    $.fn.fullpage.setMouseWheelScrolling(true);
    $.fn.fullpage.setAllowScrolling(true);
    isMenuOpened = false;
}

// window.matchMedia('(max-width: 900px)').addListener(t => {
//     console.log(t.matches);
// });

// $('.menuLeft').addClass('activeM');
var isMenuOpened = false;

$('.mobile').click(function () {
    if (!isMenuOpened) {
        $('.menuLeft').css('display', 'block');
        $('.content').removeClass('active');  
        isMenuOpened = true;  
        $.fn.fullpage.setMouseWheelScrolling(false);
        $.fn.fullpage.setAllowScrolling(false); 
        $('.site-nav').find('.mobile a').css('font-size','0');
        
        $("body").keydown(function(e){
            if(e.which == 27){
                menuNotActive();
                return false;
            }
        });
    }
    else {
        isMenuOpened = false;
    }
});
    $('.menuLeft img').click(function(){
        menuNotActive();
    });
    $('.menuLeft ul li a').click(function(){
        menuNotActive();
    });

$('.btnprev').click(function () {
    $.fn.fullpage.moveSectionUp();

});
$('.btnnext').click(function () {
    $.fn.fullpage.moveSectionDown();
});
