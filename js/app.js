// Slider Live update
const slider = document.getElementById("slider");
const sliderText = document.querySelector(".range-value");

slider.addEventListener("input", () => {
  sliderText.textContent = slider.value;
});

// Handling dialogs
const successDialog = document.querySelector("[data-success]");
const errorDialog = document.querySelector("[data-error]");
const closeSuccessModal = document.querySelector(".close-success-modal");
const closeErrorModal = document.querySelector(".close-error-modal");

closeSuccessModal.addEventListener("click", () => {
  successDialog.close();
});

closeErrorModal.addEventListener("click", () => {
  errorDialog.close();
});

// Testing purposes

// const trySDialog = document.querySelector(".try-dialog1");
// const tryEDialog = document.querySelector(".try-dialog2");

// trySDialog.addEventListener("click", () => {
//   successDialog.showModal();
// });

// tryEDialog.addEventListener("click", () => {
//   errorDialog.showModal();
// });

// Password Generate Function
function passwordGenerate() {
  // Get Password Input Field
  const passField = document.querySelector("#password");
  passField.value = "";

  // Get checkbox values
  const upper = document.querySelector("#uppercase");
  const lower = document.querySelector("#lowercase");
  const number = document.querySelector("#numbers");
  const symbol = document.querySelector("#symbols");
  const spaces = document.querySelector("#spaces");

  // Features to enter into the password
  const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseLetters = uppercaseLetters.toLowerCase();
  const digits = "0123456789";
  const symbols = "!@#$%^&*_-+=~";
  const space = " ";

  // Combination
  let combination = "";
  let password = "";
  let length = parseInt(slider.value);

  // Functionality
  if (upper.checked) combination += uppercaseLetters;
  if (lower.checked) combination += lowercaseLetters;
  if (spaces.checked) {
    for (let x = 0; x < length / 2; x++) {
      combination += space;
    }
  }

  if (number.checked) combination += digits;
  if (symbol.checked) combination += symbols;

  for (let x = 0; x < length; x++) {
    const randomNumber = Math.floor(Math.random() * combination.length);
    password += combination.substring(randomNumber, randomNumber + 1);
  }

  passField.value = password;
}

async function copyPassword() {
  // Get Password Input Field
  const passField = document.querySelector("#password");

  if (passField.value === "") {
    errorDialog.showModal();
    return;
  }

  try {
    await navigator.clipboard.writeText(passField.value);
    successDialog.showModal();
  } catch (err) {
    errorDialog.showModal();
  }
}
