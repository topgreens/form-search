document.getElementById('getData').addEventListener('click', getData);
function getData(event) {
  event.preventDefault();
 const user = document.getElementById('usernames').value;
  fetch( `https://api.github.com/users/${user}`)

  .then((response) => {
      return response.json()
    })
    .then((data) => {
      let result = `<h2> UserInfo From GithubAPI</h2>`;
        result +=
          `<div>
                  <ul class="info">
                      <li> User id: ${data.id}</li>
                      <li> User Name: ${data.name}</li>
                      <li> User public_repos: ${data.public_repos} </li><br />
                      <li> User image: <img src= "${data.avatar_url}"/></li>
                  </ul>
              </div>`;
        document.getElementById('result').innerHTML = result;
      });
}