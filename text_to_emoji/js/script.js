let decryptbtn = document.querySelector('.decryption');

// decryptbtn.addEventListener('click',()=>{
//     btnClicking();
// })

function encryption(){
    document.querySelector('#encrypt-btn').addEventListener('click',function(){
        
        
        // get the password

        var pass = document.getElementById("pass").value;
        console.log(pass)


        // get the input

        var input = document.getElementById("text-msg").value;
        console.log(input)
    })
}

function btnClicking(){
    document.querySelector(".decrypt").addEventListener("click", function () {
        
        document.querySelector(".decryption").style.display = "block"
        document.querySelector(".encryption").style.display = "none"
        document.querySelector(".decrypt").style.backgroundColor = "#333"
        document.querySelector(".encrypt").style.backgroundColor = "#222"
        document.querySelector(".main >h1 span img").style.rotate = '270deg'
    })

    document.querySelector(".encrypt").addEventListener("click", function () {
        document.querySelector(".decryption").style.display = "none"
        document.querySelector(".result").style.display = "none"
        document.querySelector(".encryption").style.display = "block"
        document.querySelector(".decrypt").style.backgroundColor = "#222"
        document.querySelector(".encrypt").style.backgroundColor = "#333"
        document.querySelector(".main>h1 span img").style.rotate = '90deg'

    })
}


btnClicking();
encryption();