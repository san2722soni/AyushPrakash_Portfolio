const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());

// TYPING ANIMATION

let skills = ["Editor", "Ayush Prakash", "Director"];
let pronouns = ["Hi, my name is", "I am a passionate", "An :"];
let currentWordIndex = 0;

function updateSubhead() {
  let subheadElement = document.getElementById("subhead");
  subheadElement.textContent = pronouns[currentWordIndex];
  currentWordIndex = (currentWordIndex + 1) % pronouns.length;
}

function typeEffect(element, word, index) {
  if (index < word.length) {
    element.textContent += word.charAt(index);
    setTimeout(function () {
      typeEffect(element, word, index + 1);
    }, 100);
  } else {
    setTimeout(function () {
      element.textContent = ""; // Clear text after typing
      updateSubhead(); // Update subhead after clearing
      typeEffect(element, skills[currentWordIndex], 0); // Start typing the next word
    }, 1200); // Delay before clearing and typing next word
  }
}

window.onload = function () {
  let h1Element = document.querySelector(".container #mainhead");
  typeEffect(h1Element, skills[currentWordIndex], 0);
};

let nav = document.querySelector("nav");
let originalColor = nav.style.backgroundColor;

window.onscroll = () => {
  if (window.scrollY > 0) {
    nav.style.backgroundColor = "#202020"; // Change color when scrolling starts
    nav.style.color = "white";
    nav.style.opacity = "0.75";
  } else {
    nav.style.backgroundColor = originalColor; // Revert to original color when scrolled to top
  }
};

// Sending data enterd in form to mail via smtp js

function sendEmail(){
  const username = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  
  if (username == "" || email == "" || message == "") {
    alert("Pls fill the input fields");
    return;
  }
  
  function sendMail() {
    emailjs.init({
      publicKey: "mI2ZHUDcI9BrIjh4X",
    });
  }

  sendMail();
  
  const values = {
    username: username,
    email: email,
    message: message
  }
  
  const serviceID = "service_s54x2ff"
  const templateID = "template_0un6hco";
  
  emailjs.send(serviceID, templateID, values)
  .then(  (response) => {
    console.log('SUCCESS!', response.status, response.text);
    showSnackbar("Email sent successfully!");
  },
  (error) => {
    console.log('FAILED...', error);
  })
}

// Snackbar code 

function showSnackbar(text) {
  // Get the snackbar DIV
  var x = document.getElementById("snackbar");

  // Passing message
  x.innerHTML = text;

  // Add the "show" class to DIV
  x.className = "show";

  // After 3 seconds, remove the show class from DIV
  setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
}

// Phone number copied code ...

const phCopied = () => {
  showSnackbar("Phone number copied to your clipboard!");
  navigator.clipboard.writeText("+91 7903376615");
}