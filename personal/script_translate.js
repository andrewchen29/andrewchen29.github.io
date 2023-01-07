let translateBtn = document.getElementById("translate-btn")
let pageCh = $(".ch");
let pageEn = $(".en");
let pageState = false; // true: ch, false: en

function translate () {
        if (pageState) {
        pageCh.hide(200);
        pageEn.show(200);
        pageState = false;
    } else {
        pageEn.hide(200);
        pageCh.show(200);
        pageState = true;
    }
}

$(window).on("load", function() {
    $("#translate-btn").on("click", translate);
});