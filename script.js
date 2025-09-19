// ===== Light/Dark Mode Toggle =====
const themeToggle = document.getElementById("themeToggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  themeToggle.textContent = document.body.classList.contains("dark-mode")
    ? "Switch to Light Mode"
    : "Switch to Dark Mode";
});

// ===== Toggle Paragraph Visibility =====
const toggleBtn = document.getElementById("toggleBtn");
const toggleText = document.getElementById("toggleText");
toggleBtn.addEventListener("click", () => {
  toggleText.style.display = toggleText.style.display === "none" ? "block" : "none";
});

// ===== Slider to Change Text Size =====
const slider = document.getElementById("fontSlider");
const sliderText = document.getElementById("sliderText");
slider.addEventListener("input", () => {
  sliderText.style.fontSize = `${slider.value}px`;
});

// ===== Counter Button Game =====
let count = 0;
const counter = document.getElementById("counter");
document.getElementById("increaseBtn").addEventListener("click", () => {
  count++;
  counter.textContent = count;
});
document.getElementById("decreaseBtn").addEventListener("click", () => {
  count--;
  counter.textContent = count;
});

// ===== Form Validation =====
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const errorMsg = document.getElementById("errorMsg");
const successMsg = document.getElementById("successMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let messages = [];

  // Name validation
  if (nameInput.value.trim() === "") {
    messages.push("Name is required");
  } else if (!/^[a-zA-Z\s]+$/.test(nameInput.value)) {
    messages.push("Name must contain only letters and spaces");
  } else if (nameInput.value.trim().length < 3) {
    messages.push("Name must be at least 3 characters");
  }

  // Email validation
  if (emailInput.value.trim() === "") {
    messages.push("Email is required");
  } else if (!/\S+@\S+\.\S+/.test(emailInput.value)) {
    messages.push("Email must be valid");
  }

  // Password validation
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  if (passwordInput.value === "") {
    messages.push("Password is required");
  } else if (!passwordRegex.test(passwordInput.value)) {
    messages.push("Password must be 6+ chars, include uppercase, number, special char");
  }

  // Confirm password
  if (confirmPasswordInput.value !== passwordInput.value) {
    messages.push("Passwords do not match");
  }

  if (messages.length > 0) {
    errorMsg.textContent = messages.join(", ");
    successMsg.textContent = "";
  } else {
    errorMsg.textContent = "";
    successMsg.textContent = "Form submitted successfully!";
    form.reset();
    // Reset border colors
    [nameInput, emailInput, passwordInput, confirmPasswordInput].forEach(input => input.style.borderColor = "#ccc");
  }
});

// ===== Real-time validation =====
nameInput.addEventListener("input", () => {
  if (!/^[a-zA-Z\s]*$/.test(nameInput.value) || nameInput.value.trim().length < 3) {
    nameInput.style.borderColor = "red";
  } else {
    nameInput.style.borderColor = "green";
  }
});

emailInput.addEventListener("input", () => {
  if (!/\S+@\S+\.\S+/.test(emailInput.value)) emailInput.style.borderColor = "red";
  else emailInput.style.borderColor = "green";
});

passwordInput.addEventListener("input", () => {
  const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6,}$/;
  if (!passwordRegex.test(passwordInput.value)) passwordInput.style.borderColor = "red";
  else passwordInput.style.borderColor = "green";
});

confirmPasswordInput.addEventListener("input", () => {
  if (confirmPasswordInput.value !== passwordInput.value) confirmPasswordInput.style.borderColor = "red";
  else confirmPasswordInput.style.borderColor = "green";
});
