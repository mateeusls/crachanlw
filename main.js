const mediaSocial = {
  github: 'mateeusgl',
  instagram: 'mateeusgl',
  facebook: 'mateeusgl',
  twitter: 'mateeusgl'
}

function changeSocialMedia() {
  for (let li of socialMedia.children){
    const social = li.getAttribute('class')

    li.children[0].href = `https://www.${social}.com/${mediaSocial[social]}`
  }
}

changeSocialMedia()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${mediaSocial.github}`

  fetch(url)
  .then(response => response.json())
  .then(data => {
    userName.textContent = data.name,
    userBio.textContent = data.bio,
    userGithub.href = data.html_url,
    userGithub.textContent = data.login
    userImage.src = data.avatar_url
  })
}

getGitHubProfileInfos()