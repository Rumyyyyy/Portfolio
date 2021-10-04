$(document).ready(function(){
    $('div header nav > ul > li').hover(function(){
        $('div header > nav').addClass('active');
    },function(){
        $('div header > nav').removeClass('active')
    });

    $(window).scroll(function(){
        // console.log($('.main_content h2').offset().top)
        console.log($(window).scrollTop())

        if($('.main_content h2').offset().top < $(window).scrollTop()){
            $('.main_content h2').addClass('active')
        }
    })
});
