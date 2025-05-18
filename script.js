//sidebar
function toggleSidebar() {
    document.getElementById("navbar").classList.toggle("showNav");
}

//member list
function toggleMembers() {
    document.getElementById("memberList").classList.toggle("showMem");
}


//restore button
document.addEventListener("DOMContentLoaded", function () {
    const navbar = document.querySelector(".openBtn");
    const memberList = document.querySelector(".memberBtn");
    const header = document.querySelector(".header");
    const restore1 = document.querySelector(".closeBtn");
    const restore2 = document.querySelector(".member-closeBtn");

    navbar.addEventListener("click", function () {
        navbar.classList.add("hide");
        memberList.classList.add("hide");
        header.classList.add("hide");
    });

    memberList.addEventListener("click", function () {
        navbar.classList.add("hide");
        memberList.classList.add("hide");
        header.classList.add("hide");
        document.body.classList.add("no-scroll");
    });

    restore1.addEventListener("click", function () {
        navbar.classList.remove("hide"); 
        memberList.classList.remove("hide"); 
        header.classList.remove("hide"); 
    });

    restore2.addEventListener("click", function () {
        navbar.classList.remove("hide"); 
        memberList.classList.remove("hide"); 
        header.classList.remove("hide"); 
        document.body.classList.remove("no-scroll"); 
    });
});

//bar thing
let lastScrollTop = 0;
const buttons = document.querySelectorAll(".openBtn, .memberBtn, .header");

window.addEventListener("scroll", function () {
    let scrollTop = window.scrollY || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        buttons.forEach(btn => btn.classList.add("hide"));
    } else {
        buttons.forEach(btn => btn.classList.remove("hide"));
    }
    lastScrollTop = scrollTop;
});


//image thingy
document.addEventListener("DOMContentLoaded", () => {
    const clickSound = new Audio("sounds/click.mp3");
    const img = document.getElementById("game-image");
    if (!img) return; 

    const images = ["images/room1.jpg", "images/room2.jpg", "images/room3.jpg", "images/room4.jpg", "images/room5.jpg"];
    let index = 0;
    let interval;

    function changeImage() {
        img.style.opacity = 0;
        setTimeout(() => {
            index = (index + 1) % images.length;
            img.src = images[index];
            img.style.opacity = 1;
        }, 300);
    }

    function handleClick() {
        clickSound.currentTime = 0; 
        clickSound.play();
        clearInterval(interval);
        changeImage();
        startAutoChange();
    }

    function startAutoChange() {
        interval = setInterval(changeImage, 5000);
    }

    img.addEventListener("click", handleClick);
    startAutoChange();
});


//feature buttons

function feature(clickedButton) {

    const newHeading = clickedButton.getAttribute("data-heading");
    const newParagraph = clickedButton.getAttribute("data-paragraph");
    document.getElementById("h1-content").innerText = newHeading; 
    document.getElementById("para-content").innerText = newParagraph;
    
    const buttons = document.querySelectorAll(".feature-Btn");
    buttons.forEach(button => {
        button.style.backgroundColor = ""; 
        button.style.color = "";
    });
    clickedButton.style.backgroundColor = "#e74c3c";   
}

//buttons sfx

const clickSound = new Audio("sounds/click.mp3");

document.addEventListener("DOMContentLoaded", () => {
    
    const clickableElements = document.querySelectorAll("button, a");

    clickableElements.forEach(element => {
        element.addEventListener("click", () => {
            clickSound.currentTime = 0; 
            clickSound.play();
        });
    });
});

document.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", function (event) {
        const href = this.getAttribute("href");
        if (href && !href.startsWith("#")) { 
            event.preventDefault();
            const clickSound = new Audio("sounds/click.mp3");
            clickSound.play();
            setTimeout(() => {
                window.location.href = href;
            }, 150);
        }
    });
});