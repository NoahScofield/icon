$("a").click(function(){
    var idVal = $(this).attr("href");
    $("html,body").animate({
        'scrollTop':$(idVal+"Section").offset().top
    }, 500);
});

$(".dropDownMenu").click(function(){
    $(".navWrapper").toggleClass("toggle");
});