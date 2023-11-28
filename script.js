// Select HTML elements
const monkey = document.querySelector(".monkey");
const monkeyHide = document.querySelector(".monkey-hide");
const psw = document.querySelector(".psw");
const btn = document.querySelector(".btn");

// Hide the monkeyHide image by default
monkeyHide.style.display = "none";

// Event listener for input in the password field
psw.addEventListener("input", () => {
  if (psw.value.length <= 0) {
    // Show the monkey image if the password field is empty
    monkey.style.display = "block";
  } else if (psw.value.length >= 3) {
    // Show the monkeyHide image if the password length is at least 3 characters
    monkeyHide.style.display = "block";
  }
});

// Event listener for clicking the password visibility button
btn.addEventListener("click", () => {
  if (monkeyHide.style.display === "block") {
    // Hide the monkeyHide image
    monkeyHide.style.display = "none";
    // Show the monkey image
    monkey.style.display = "block";
  } else {
    // Show the monkeyHide image
    monkeyHide.style.display = "block";
    // Hide the monkey image
    monkey.style.display = "none";
  }
});
