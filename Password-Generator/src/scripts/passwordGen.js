const generatePassword = (len) => {
  const chars =
    "abcdefghjklmnpqrstuvwxyzABCDEFGHJKLMNPQRSTUVWXYZ123456789!?@#$%&*";

  let password = "";

  /**Build password randomizer based on password length */
  for (let i = 0; i < len; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);
    password += chars.substring(randomNumber, randomNumber + 1);
  }

  const passwordInput = document.querySelector("#password");
  passwordInput.value = password;
};

const passwordLength = document.querySelector("#password-length"); //get password length
passwordLength.addEventListener("input", function () {
  const len = passwordLength.value;
  generatePassword(len);
});
