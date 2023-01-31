// dark mode

// end of dark mode

// submit action

const getData = (name) => {
  const xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.github.com/users/${name}`);
  xhr.send(null);

  xhr.onreadystatechange = () => {
    if (xhr.readyState === 4) {
      const ans = JSON.parse(xhr.responseText);

      const uName = ans.name;
      const avatar = ans.avatar_url;
      const pRepos = ans.public_repos;
      const pageUrl = ans.html_url;
      const followers = ans.followers;
      const blogUrl = ans.blog;

      // add user pfp
      const avatarEl = document.createElement("img");
      avatarEl.setAttribute("src", avatar);
      avatarEl.setAttribute("width", "128");

      // add username
      const nameEl = document.createElement("h1");
      nameEl.innerText = uName;
      nameEl.classList.add("title");

      // add followers
      const followersEl = document.createElement("p");
      followersEl.innerText = `${followers} followers`;

      // add repositories
      const repos = document.createElement("p");
      repos.innerText = `${pRepos} public repositories`;

      // add blog url
      const urlEl = document.createElement("a");
      urlEl.setAttribute("href", `https://${blogUrl}`);
      urlEl.innerText = blogUrl;

      // quick line breaker twice
      const lineBreak = document.createElement("br");
      const breaker = document.createElement("br");

      // add page url
      const fullProfile = document.createElement("button");
      fullProfile.innerText = "See Profile";
      fullProfile.onclick = () => {
        location.href = `https://github.com/${name}`;
      };

      document.body.appendChild(avatarEl);
      document.body.appendChild(nameEl);
      document.body.appendChild(followersEl);
      document.body.appendChild(repos);
      document.body.appendChild(urlEl);
      document.body.appendChild(lineBreak);
      document.body.appendChild(breaker);
      document.body.appendChild(fullProfile);
    }
  };
};

const formEl = document.querySelector("form");

formEl.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = event.target.querySelector("input[name=username]").value;

  if (!username) {
    event.preventDefault();
    alert("Type a username.");
  }

  getData(username);
});

//end of submit action
