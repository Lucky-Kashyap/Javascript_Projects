let user = document.querySelector('input');
let findUSer = document.querySelector('.btn');
let userInfo = document.querySelector('.user-info .card');
let reposInfoDiv = document.querySelector('.reposInfo')
let theme = document.querySelector('.dark');
let body = document.querySelector('body');
// let card = document.querySelector('.');



findUSer.addEventListener('click',async()=>{

    const userName = user.value;
    const data = await fetch(`https://api.github.com/users/${userName}`)
    const res = await data.json();

    console.log(res);
    showInfo(res);

    showReposInfo(userName);
})


function showInfo(data) {
    // console.log(data);
    userInfo.innerHTML = `
        <div class="card-img">
            <img src=${data.avatar_url} alt=${data.name}>
        </div>
        <div class="card-body">
            <div class="card-title">${data.name}</div>
            <div class="card-subHeading">${data.login}</div>
            <div class="card-text">
                <p>${data.bio}</p>
                <p>${data.followers} followers ${data.following} following

                <button>
                        <a href=${data.html_url} target='_blank'>
                            Do checkout Profile
                        </a>
                </button>
            </div>
        </div>`
}

async function showReposInfo(userName) {
    const res = await fetch(`https://api.github.com/users/${userName}/repos`)
    const projects = await res.json();
    
    console.log(projects);
    for (let i = 0; i < projects.length; i++) {
        reposInfoDiv.innerHTML += `<div class="card">
                <div class="card-body">
                    <div class="card-title">${projects[i].name}</div>
                    <div class="card-subHeading">${projects[i].language}</div>
                    <div class="card-text">
                        <button>
                            <a href=${projects[i].html_url} target='_blank'>
                                Do checkout Project
                            </a>
                        </button>
                    </div>
                </div>
            </div>`
    }
}


theme.addEventListener('click',()=>{
    userInfo.classList.toggle('show');
    reposInfoDiv.classList.toggle('show');
    // body.style.background='#fff';
    // card.style.background='#fff';
})