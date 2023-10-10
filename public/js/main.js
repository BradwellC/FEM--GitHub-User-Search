// function to set a given theme
function setTheme(themeName) {
  localStorage.setItem('theme', themeName);
  document.documentElement.className = themeName;
}

// function to toggle between light and dark
function toggleTheme() {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-light');
  } else {
    setTheme('theme-dark');
  }
}

// invoke function to set theme
(function () {
  if (localStorage.getItem('theme') === 'theme-dark') {
    setTheme('theme-dark');
  } else {
    setTheme('theme-light');
  }
});

// Github Fetch
// Fetch Function

// async function fetchUser() {
//   const name = document.getElementById('username').value;
//   const response = await fetch(`https://api.github.com/users/${name}`);
//   const user = await response.json();

//   return user;
// }

function getDetails() {
  const name = document.getElementById('username').value;
  fetch(`https://api.github.com/users/${name}`).then((response) =>
    response
      .json()
      .then((data) => {
        document.getElementById('name').innerHTML = data.name;
        document.getElementById('accountName').innerHTML = `
        <a class="git-account" href="${data.html_url}">@${data.login}</a>
      `;

        document.getElementById('date').innerHTML = `Joined ${data.created_at}`;

        // document.getElementById('date').innerHTML = new Date().toDateString();

        if (data.bio === null) {
          document.getElementById('bio').innerHTML = 'This profile has no bio';
        } else {
          document.getElementById('bio').innerHTML = data.bio;
        }

        if (data.twitter_username === null) {
          document.getElementById('twitter').innerHTML = `
          <div class="twiiter-account unavailable" id="twitter">
            <img src="./public/img/icon-twitter.svg" alt="" />
            <p>Not Available</p>
          </div>
        `;
        } else {
          document.getElementById('twitter').innerHTML = `
          <div class="twiiter-account" id="twitter">
            <img src="./public/img/icon-twitter.svg" alt="" />
            <p>${data.twitter_username}</p> 
          </div>
        `;
        }

        if (data.company === null) {
          document.getElementById('company').innerHTML = `
          <div class="company unavailable" id="company">
            <img src="./public/img/icon-company.svg" alt="" />
            <p>Not Available</p>
          </div>
        `;
        } else {
          document.getElementById('company').innerHTML = `
          <div class="company" id="company">
            <img src="./public/img/icon-company.svg" alt="" />
            <p>${data.company}</p>
          </div>
        `;
        }

        if (data.company === null) {
          document.getElementById('location').innerHTML = `
          <div class="location unavailable" id="location">
            <img src="./public/img/icon-location.svg" alt="" />
            <p>Not Available</p>
          </div>
        `;
        } else {
          document.getElementById('location').innerHTML = `
          <div class="location" id="location">
            <img src="./public/img/icon-location.svg" alt="" />
            <p>${data.location}</p>
          </div>
        `;
        }

        document.getElementById('website').innerHTML = `
        <a href="${data.html_url}">${data.html_url}</a>
      `;
        document.getElementById('follower').innerHTML = data.followers;
        document.getElementById('following').innerHTML = data.following;
        document.getElementById('profile').innerHTML = `
            <img class="info-img" src="${data.avatar_url}" />
            `;

        console.log(data);
      })
      .catch()
  );
}
