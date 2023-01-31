const darkTheme = document.querySelector("#dark_mode");

// changes button content according to selected theme
darkTheme.addEventListener("click", () => {
  if (darkTheme.innerHTML == "Dark Mode") {
    darkTheme.innerHTML = "Light Mode";
  } else {
    darkTheme.innerHTML = "Dark Mode";
  }

  const title = document.querySelector(".title");
  title.classList.toggle("darkTitle");

  document.body.classList.toggle("darkTheme");
});
