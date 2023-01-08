
// translate button
let translateBtn = document.getElementById("translate-btn")
let pageCh = $(".ch");
let pageEn = $(".en");
let pageState = false; // true: ch, false: en

function translate() {
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

$(window).on("load", function () {
    $("#translate-btn").on("click", translate);
});

// toggle menu for different platform
let toggleBtn = document.getElementById("toggle-btn");
let menuItems = document.querySelectorAll(".menu a");
let menuActive = false;

var x = window.matchMedia("(max-width: 800px)")

function toggleMenu(event) {
    event.stopPropagation();
    if (!x.matches) { // if media query matches
        if (!menuActive) {
            menuItems[0].style.transform = "translate(150px, 0)";
            menuItems[1].style.transform = "translate(150px, 90px)";
            menuItems[2].style.transform = "translate(90px, 150px)";
            menuItems[3].style.transform = "translate(0px, 150px)";
            menuItems.forEach((menuItem) => {
                menuItem.classList.add("show");
            });
            menuActive = true;
            toggleBtn.classList.add("active");
        } else {
            menuItems.forEach((menuItem) => {
                menuItem.style.transform = "translate(0,0)";
                menuItem.classList.remove("show");
            });
            menuActive = false;
            toggleBtn.classList.remove("active");
        }
    } else {
        if (!menuActive) {
            menuItems[0].style.transform = "translate(50px, -20px)";
            menuItems[1].style.transform = "translate(50px, 20px)";
            menuItems[2].style.transform = "translate(20px, 50px)";
            menuItems[3].style.transform = "translate(-20px, 50px)";
            menuItems.forEach((menuItem) => {
                menuItem.classList.add("show");
            });
            menuActive = true;
            toggleBtn.classList.add("active");
        } else {
            menuItems.forEach((menuItem) => {
                menuItem.style.transform = "translate(0,0)";
                menuItem.classList.remove("show");
            });
            menuActive = false;
            toggleBtn.classList.remove("active");
        }
    }
}

function hideMenu() {
    menuItems.forEach((menuItem) => {
        menuItem.style.transform = "translate(0,0)";
        menuItem.classList.remove("show");
    });
    menuActive = false;
    toggleBtn.classList.remove("active");
}

$(window).on("load", function () {
    $("#toggle-btn").on("click", toggleMenu);
    $(document).on("click", hideMenu);
});

// scroll to top effect as example
$(window).on("load", function () {
    $("#backToTop-btn").on("click", function () {
        $('html, body').animate({ 'scrollTop': 0 }, 300);
    });
    $(window).on('scroll', function () {
        let scrollTop = $('html').scrollTop();
        let windowHeight = $(window).height();
        if (scrollTop > windowHeight * 0.15) {
            $("#backToTop-btn").show(200);
        }
        else {
            $("#backToTop-btn").hide(200);
        }
    });
});

// scroll effect as example
$(document).ready(()=>{
    $(document).on('scroll', animatePara);
});

$(window).on("load", animatePara());

function animatePara() {
    let allParas = $("section > p");
    let screenHeight = $(window).height(), scrollTop = $(window).scrollTop();
    allParas.each((index)=>{
        let para = allParas.eq(index);
        if(screenHeight + scrollTop - 50 > para.offset().top) {
            para.animate({top: 0, opacity: 0.8}, 500);
        }
    });
};

