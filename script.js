// Characters for password generation
const characters =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$*&^%()";

document.getElementById("generate-btn").addEventListener("click", function () {
  const length = document.getElementById("password-length").value;

  // Validate password length input
  if (!length || length <= 0) {
    alert("Please enter a valid positive number for password length.");
    return;
  }

  const password = generatePassword(length);
  document.getElementById("password-display").textContent = password;
});

// Password generation logic
function generatePassword(length) {
  const charArray = characters.split("");
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charArray.length);
    password += charArray[randomIndex];
  }

  return password;
}
