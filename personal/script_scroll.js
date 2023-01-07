
$(window).on("load", function() {
    $("#backToTop-btn").on("click", function() {
        $('html, body').animate({'scrollTop': 0}, 300);
    });
    $(window).on('scroll', function() {
                let scrollTop = $('html').scrollTop();
                let windowHeight = $(window).height();
                if(scrollTop > windowHeight * 0.15) {
                    $("#backToTop-btn").show(200);
                }
                else {
                    $("#backToTop-btn").hide(200);
                }
            });
});

// window.onload = function() {
//     $(window).on('scroll', function() {
//         let scrollTop = $('html').scrollTop();
//         let windowHeight = $(window).height();
//         if(scrollTop > windowHeight * 0.15) {
//             $('div#backToTop').show(500);
//         }
//         else {
//             $('div#backToTop').hide(300);
//         }
//     });

//     $('div#backToTop').on('click', function() {
//         $('html, body').animate({'scrollTop': 0}, 300);
//     });
// };