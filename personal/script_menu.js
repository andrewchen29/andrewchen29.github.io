let toggleBtn = document.getElementById("toggle-btn");
let menuItems = document.querySelectorAll(".menu a");
let menuActive = false;

var x = window.matchMedia("(max-width: 800px)")

function toggleMenu () {
    if (!x.matches) { // If media query matches
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

// function toggleMenu () {
//     if (!menuActive) {
//         menuItems[0].style.transform = "translate(150px, 0)";
//         menuItems[1].style.transform = "translate(150px, 90px)";
//         menuItems[2].style.transform = "translate(90px, 150px)";
//         menuItems[3].style.transform = "translate(0px, 150px)";
//         menuItems.forEach((menuItem) => {
//             menuItem.classList.add("show");
//         });
//         menuActive = true;
//         toggleBtn.classList.add("active");
//     } else {
//         menuItems.forEach((menuItem) => {
//             menuItem.style.transform = "translate(0,0)";
//             menuItem.classList.remove("show");
//         });
//         menuActive = false;
//         toggleBtn.classList.remove("active");
//     }
// };

$(window).on("load", function() {
    $("#toggle-btn").on("click", toggleMenu);
});

// toggleBtn.addEventListener("click", () => {
    
// });


