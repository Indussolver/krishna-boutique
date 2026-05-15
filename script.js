// ======================================
// KRISHNA BOUTIQUE JAVASCRIPT
// ======================================



// ======================================
// SHOP NOW BUTTON FUNCTION
// ======================================

function shopNow() {

    alert("Welcome To Krishna Boutique ✨");

}



// ======================================
// CONTACT FORM SUBMIT
// ======================================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Thank You ❤️ Your Message Has Been Sent Successfully!");

    contactForm.reset();

});



// ======================================
// STICKY NAVBAR SHADOW EFFECT
// ======================================

window.addEventListener("scroll", function(){

    const header = document.querySelector("header");

    if(window.scrollY > 50){

        header.style.background = "rgba(255,255,255,0.98)";

        header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.15)";

    }

    else{

        header.style.background = "rgba(255,255,255,0.9)";

        header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.08)";

    }

});



// ======================================
// PRODUCT BUTTONS
// ======================================

const cartButtons = document.querySelectorAll(".price-box button");

cartButtons.forEach(function(button){

    button.addEventListener("click", function(){

        button.innerHTML = "Added ✓";

        button.style.background = "green";

        setTimeout(function(){

            button.innerHTML = "Add To Cart";

            button.style.background = "#ff2e63";

        }, 2000);

    });

});



// ======================================
// HEART ICON CLICK EFFECT
// ======================================

const heartIcons = document.querySelectorAll(".fa-heart");

heartIcons.forEach(function(icon){

    icon.addEventListener("click", function(){

        icon.classList.toggle("active-heart");

        if(icon.classList.contains("active-heart")){

            icon.style.background = "#ff2e63";

            icon.style.color = "white";

        }

        else{

            icon.style.background = "white";

            icon.style.color = "#ff2e63";

        }

    });

});



// ======================================
// SCROLL ANIMATION
// ======================================

const cards = document.querySelectorAll(
    ".product-card, .feature-box, .service-card, .review-card"
);

window.addEventListener("scroll", revealCards);

function revealCards(){

    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(function(card){

        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){

            card.style.opacity = "1";

            card.style.transform = "translateY(0px)";

        }

        else{

            card.style.opacity = "0";

            card.style.transform = "translateY(60px)";

        }

    });

}

revealCards();



// ======================================
// INITIAL CARD STYLES
// ======================================

cards.forEach(function(card){

    card.style.transition = "all 0.7s ease";

});



// ======================================
// TYPING EFFECT FOR HERO TITLE
// ======================================

const heroTitle = document.querySelector(".hero-content h1");

const originalText = heroTitle.innerHTML;

heroTitle.innerHTML = "";

let index = 0;

function typeEffect(){

    if(index < originalText.length){

        heroTitle.innerHTML += originalText.charAt(index);

        index++;

        setTimeout(typeEffect, 35);

    }

}

typeEffect();



// ======================================
// BUTTON HOVER SOUND EFFECT (OPTIONAL)
// ======================================

const allButtons = document.querySelectorAll("button");

allButtons.forEach(function(button){

    button.addEventListener("mouseenter", function(){

        button.style.transform = "scale(1.05)";

    });

    button.addEventListener("mouseleave", function(){

        button.style.transform = "scale(1)";

    });

});



// ======================================
// ACTIVE NAVBAR LINK ON SCROLL
// ======================================

const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", activeMenu);

function activeMenu(){

    let current = "";

    sections.forEach(function(section){

        const sectionTop = section.offsetTop;

        const sectionHeight = section.clientHeight;

        if(pageYOffset >= sectionTop - 200){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(function(link){

        link.classList.remove("active-link");

        if(link.getAttribute("href").includes(current)){

            link.classList.add("active-link");

        }

    });

}



// ======================================
// IMAGE ZOOM EFFECT
// ======================================

const productImages = document.querySelectorAll(".product-image img");

productImages.forEach(function(image){

    image.addEventListener("mousemove", function(){

        image.style.transform = "scale(1.1)";

    });

    image.addEventListener("mouseleave", function(){

        image.style.transform = "scale(1)";

    });

});



// ======================================
// WELCOME CONSOLE MESSAGE
// ======================================

console.log("Krishna Boutique Website Loaded Successfully ✨");

console.log("Designed With Love ❤️");



// ======================================
// LOADER EFFECT
// ======================================

window.addEventListener("load", function(){

    document.body.style.opacity = "1";

});

document.body.style.opacity = "0";

document.body.style.transition = "opacity 1s ease";



// ======================================
// SMOOTH SCROLL FOR BUTTONS
// ======================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({

            behavior: "smooth"

        });

    });

});



// ======================================
// RANDOM OFFER POPUP
// ======================================

setTimeout(function(){

    alert("🎉 Special Offer: Get 20% OFF On New Collection!");

}, 5000);



// ======================================
// REVIEW CARD HOVER EFFECT
// ======================================

const reviewCards = document.querySelectorAll(".review-card");

reviewCards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", function(){

        card.style.transform = "translateY(0px) scale(1)";

    });

});



// ======================================
// SERVICE CARD ROTATION EFFECT
// ======================================

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(function(card){

    card.addEventListener("mouseenter", function(){

        card.style.transform = "translateY(-10px) rotate(1deg)";

    });

    card.addEventListener("mouseleave", function(){

        card.style.transform = "translateY(0px) rotate(0deg)";

    });

});



// ======================================
// DYNAMIC YEAR IN FOOTER
// ======================================

const footerYear = new Date().getFullYear();

const footerText = document.querySelector(".footer-bottom p");

footerText.innerHTML =
`© ${footerYear} Krishna Boutique | All Rights Reserved`;



// ======================================
// MOBILE MENU SIMPLE EFFECT
// ======================================

const navItems = document.querySelectorAll("nav ul li a");

navItems.forEach(function(item){

    item.addEventListener("click", function(){

        item.style.color = "#ff2e63";

    });

});



// ======================================
// END OF JAVASCRIPT
// ======================================
