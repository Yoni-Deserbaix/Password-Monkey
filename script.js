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
  if (psw.type === "password") {
    // Change password field type to text and switch button text to 'Hide Password'
    psw.type = "text";
    btn.textContent = "Hide Password";
    monkey.style.display = "block"; // Show monkey image
    monkeyHide.style.display = "none"; // Hide monkeyHide image
  } else {
    // Change password field type back to password and switch button text to 'Show Password'
    psw.type = "password";
    btn.textContent = "Show Password";
    monkey.style.display = "none"; // Hide monkey image
    monkeyHide.style.display = "block"; // Show monkeyHide image
  }
});
