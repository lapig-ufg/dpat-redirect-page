$(window).load(function() {
    // Animate loader off screen
    $(".se-pre-con").fadeOut("slow");
});

$(document).ready(function() {
    $("#counter").countdown({
        until: new Date(Date.now() + (10 * 1000)),
        format: 'S'
    });

    $("#counter_wrapper").fitText(1.2, {
        minFontSize: '20px',
        maxFontSize: '35px'
    });


});

setTimeout(function() { window.location.href = "https://cerradodpat.ufg.br/"; }, (11 * 1000));