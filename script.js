// SHOP BUTTON

function shopNow() {

  alert("Welcome To Krishna Boutique ✨");

}


// CONTACT FORM

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

  event.preventDefault();

  alert("Message Sent Successfully ❤️");

  form.reset();

});


// NAVBAR SHADOW EFFECT

window.addEventListener("scroll", function() {

  const header = document.querySelector("header");

  if(window.scrollY > 50) {

    header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.2)";

  }

  else {

    header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";

  }

});
