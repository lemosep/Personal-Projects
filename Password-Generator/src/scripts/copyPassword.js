const copyButton = document.querySelector("#copy");
copyButton.addEventListener("click", (event) => {
  //Get input
  const passwordInput = document.querySelector("#password");
  copy(passwordInput.value);
  console.log("Copied");
});

const copy = (param) => {
  navigator.clipboard.writeText(param);
};
