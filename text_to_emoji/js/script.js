var data = "";

// decryptbtn.addEventListener('click',()=>{
//     btnClicking();
// })

// localStorage.clear();
function encryption() {
  document.querySelector("#encrypt-btn").addEventListener("click", function () {
    // get the password

    var pass = document.getElementById("pass").value;
    // console.log(pass);

    // get the input

    var input = document.getElementById("text-msg").value;
    // console.log(input);
    // splitting the input
    const str = input.split("");

    // console.log(str);

    // convert it into imojis
    str.forEach((ele) => {
      data += `&#128${ele.charCodeAt()} `;
    });

    // console.log(addData);

    document.querySelector(".result").style.display = "block";

    document.querySelector(".result").innerHTML = data;

    let addData = [];

    addData = [{ 'pass': pass, 'text': input, 'data': data }];

    // console.log(data);

    if (JSON.parse(localStorage.getItem("data1"))) {
      addData = JSON.parse(localStorage.getItem("data1"));
    //   console.log(data);
      addData.push({ 'pass': pass, 'text': input, 'data': data });
    } else {
      addData = [{ 'pass': pass, 'text': input, 'data': data }];
    }

    localStorage.setItem(`data1`, JSON.stringify(addData));
  });
}

function decryption() {
    
    document.querySelector("#decrypt-btn").addEventListener("click", function () {
        var data2 = '';
        var text2 = document.querySelector("#emoji-msg").value
        var finalPass = document.querySelector("#password").value;
        var user = JSON.parse(localStorage.getItem(`data1`));
        // console.log(user)
        var str2 = text2.split("");
        str2.forEach(ele => {
                data2 += `&#${(ele.codePointAt(0))} `;
                // data2 += `&#$(element.charCodeAt()) * Math.floor(Math.random() * 10)`;
                // console.log((element.charCodeAt()) * Math.floor(Math.random() * 10))
        });
        console.log(data2);
        var found={};
        for(let i of user){
            console.log(i);
            if(i.data == data2){
                found = i;
                console.log(i);
            }
        }
        console.log(found);
        console.log(data2);
        if (found.data === data2) {
            console.log("jay ho")
            document.querySelector(".result").style.display = `block`
            document.querySelector(".result").style.color = `#eee`

            document.querySelector(".result").innerHTML = found.text;
        } else {
            document.querySelector(".result").style.display = `block`
            document.querySelector(".result").style.color = `red`
            document.querySelector(".result").innerHTML = "Wrong password!"
        }
    })

}

function btnClicking() {
  document.querySelector(".decrypt").addEventListener("click", function () {
    document.querySelector(".decryption").style.display = "block";
    document.querySelector(".encryption").style.display = "none";
    document.querySelector(".decrypt").style.backgroundColor = "#333";
    document.querySelector(".encrypt").style.backgroundColor = "#222";
    document.querySelector(".main >h1 span img").style.rotate = "270deg";
    document.querySelector(".result").style.display = "none";
  });

  document.querySelector(".encrypt").addEventListener("click", function () {
    document.querySelector(".decryption").style.display = "none";
    document.querySelector(".result").style.display = "none";
    document.querySelector(".encryption").style.display = "block";
    document.querySelector(".decrypt").style.backgroundColor = "#222";
    document.querySelector(".encrypt").style.backgroundColor = "#333";
    document.querySelector(".main>h1 span img").style.rotate = "90deg";
    document.querySelector(".result").style.display = "none";
  });

  document.querySelector("#encrypt-btn").addEventListener("click", function () {
    document.querySelector(".result").style.display = "block";
  });

  document.querySelector("#decrypt-btn").addEventListener("click", function () {
    document.querySelector(".result").style.display = "block";
  });
}

encryption();

decryption();

btnClicking();

