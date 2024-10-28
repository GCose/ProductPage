/*========================
 * Scroll Header Effect
 ========================*/
const header = document.querySelector("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});

/**=========================================================
 * Handles the opening and closing of the navigation menu
 =========================================================*/
function toggleMenu() {
    const menuIcon = document.getElementById("menu-icon");
    const navList = document.querySelector(".nav__list");

    navList.classList.toggle("open");

    if (navList.classList.contains("open")) {
        menuIcon.classList.replace("bx-menu", "bx-x");
    } else {
        menuIcon.classList.replace("bx-x", "bx-menu");
    }
}

document.getElementById("menu-icon").addEventListener("click", toggleMenu);

/*====================================================
 * Navigation Link Click Handlers and Active States
 ====================================================*/
const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        const navList = document.querySelector(".nav__list");
        const menuIcon = document.getElementById("menu-icon");

        navList.classList.remove("open");
        menuIcon.classList.replace("bx-x", "bx-menu");

        if (link.classList.contains("button")) {
            navLinks.forEach(navLink => navLink.classList.remove("active"));
        }
    });
});

/*=============================
 * Active Navigation Link 
 =============================*/
const sections = document.querySelectorAll("section");

function setActiveLink() {
    let scrollPos = window.scrollY;

    const getStartedClicked = document.querySelector(".nav__link.button.clicked");
    if (getStartedClicked) return;

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute("id");

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach((link) => link.classList.remove("active"));
            const activeLink = document.querySelector(`.nav__link[href="#${sectionId}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
        }
    });
}

/*================================
 * Get Started Button Handler
 ================================*/
const getStartedButton = document.querySelector(".nav__link.button");
if (getStartedButton) {
    getStartedButton.addEventListener("click", () => {
        navLinks.forEach(link => link.classList.remove("active"));

        getStartedButton.classList.add("clicked");

        setTimeout(() => {
            getStartedButton.classList.remove("clicked");
        }, 1000);
    });
}

window.addEventListener("scroll", setActiveLink);

/*===========================
 * Image 3D hover effect
 ===========================*/
const parallaxImage = document.querySelector(".parallax__image");

if (parallaxImage) {
    parallaxImage.addEventListener("mousemove", (e) => {
        const rect = parallaxImage.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        const rotateX = y * 30;
        const rotateY = x * -30;

        parallaxImage.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });

    parallaxImage.addEventListener("mouseleave", () => {
        parallaxImage.style.transform = `rotateX(0deg) rotateY(0deg)`;
    });
}


/*===========================
 * Scroll Reveal Animations
 ===========================*/
const animation = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show-items");
        } else {
            entry.target.classList.remove("show-items");
        }
    });
});

const animateTop = document.querySelectorAll(".animate-top");
animateTop.forEach((element) => animation.observe(element));

const animateBottom = document.querySelectorAll(".animate-bottom");
animateBottom.forEach((element) => animation.observe(element));

const animateLeft = document.querySelectorAll(".animate-left");
animateLeft.forEach((element) => animation.observe(element));

const animateRight = document.querySelectorAll(".animate-right");
animateRight.forEach((element) => animation.observe(element));

const animateRotate = document.querySelectorAll(".animate-rotate");
animateRotate.forEach((element) => animation.observe(element));

const animateScale = document.querySelectorAll(".animate-scale");
animateScale.forEach((element) => animation.observe(element));