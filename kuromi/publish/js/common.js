$(document).ready(function(){
    $('div header nav > ul > li').hover(function(){
        $('div header > nav').addClass('active');
    },function(){
        $('div header > nav').removeClass('active')
    });

    $(window).scroll(function(){
        console.log(1)
    })
});