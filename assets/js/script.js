/**==================================
 * Scroll Header Effect Function
 ===================================*/
function initScrollHeader() {
    const header = document.querySelector("header");
    window.addEventListener("scroll", () => {
        if (window.scrollY > 100) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });
}

/**===================================
 * Navigation Menu Toggle Function
 ===================================*/
function initMenuToggle() {
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
}

/**============================================
 * Navigation Link Click Handlers Function
 ============================================*/
function initNavLinkHandlers() {
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
}

/**==================================
 * Active Navigation Link Function
 ==================================*/
function initActiveNavigation() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav__link");

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

    window.addEventListener("scroll", setActiveLink);
}

/**=========================
 * Theme Toggle Function
 =========================*/
function initThemeToggle() {
    const themeIcon = document.querySelector(".theme__toggle i");

    function toggleTheme() {
        document.body.classList.toggle("dark__theme");

        if (document.body.classList.contains("dark__theme")) {
            themeIcon.className = 'bx bx-sun';
        } else {
            themeIcon.className = 'bx bx-moon';
        }

        localStorage.setItem("theme", document.body.classList.contains("dark__theme") ? "dark" : "light");
        localStorage.setItem("icon", themeIcon.className);
    }

    const savedTheme = localStorage.getItem("theme");
    const savedIcon = localStorage.getItem("icon");

    if (savedTheme) {
        document.body.classList.toggle("dark__theme", savedTheme === "dark");
        themeIcon.className = savedIcon || 'bx bx-moon';
    }

    themeIcon.addEventListener("click", toggleTheme);
}

/**=======================================
 * Get Started Button Handler Function
 =======================================*/
function initGetStartedButton() {
    const getStartedButton = document.querySelector(".nav__link.button");
    const navLinks = document.querySelectorAll(".nav__link");

    if (getStartedButton) {
        getStartedButton.addEventListener("click", () => {
            navLinks.forEach(link => link.classList.remove("active"));
            getStartedButton.classList.add("clicked");

            setTimeout(() => {
                getStartedButton.classList.remove("clicked");
            }, 1000);
        });
    }
}

/**===================================
 * Image 3D Hover Effect Function
 ===================================*/
function initParallaxEffect() {
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
}

/**=====================================
 * Scroll Reveal Animations Function
 =====================================*/
function initScrollRevealAnimations() {
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
}

/**======================
 * Run Initializations
 =======================*/
initScrollHeader();
initMenuToggle();
initNavLinkHandlers();
initActiveNavigation();
initThemeToggle();
initGetStartedButton();
initParallaxEffect();
initScrollRevealAnimations();
