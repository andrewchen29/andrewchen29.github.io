let guideBtn = document.getElementById("guide-btn")
let guidelineContent = $(".guideline");
let guidelineState = false;

function guideline () {
    if (guidelineState) {
        guidelineContent.hide(200);
        guidelineState = false;
    } else {
        guidelineContent.show(200);
        guidelineState = true;
    }
}

$(window).on("load", function() {
    $("#guide-btn").on("click", guideline);
});