let user = document.querySelector('input');
let findUSer = document.querySelector('.btn');
let userInfo = document.querySelector('.user-info');



findUSer.addEventListener('click',async()=>{

    const userName = user.value;
    const data = await fetch(`https://api.github.com/users/${userName}`)
    const res = await data.json();

    console.log(res);
    showInfo(res);
})


function showInfo(data) {
    // console.log(data);
    userInfo.innerHTML = `<div class="card">
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
                        <a href=${data.html_url}>
                            Do checkout Profile
                        </a>
                </button>
            </div>
        </div>
    </div>`
}