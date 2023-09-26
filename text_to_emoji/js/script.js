let decryptbtn = document.querySelector(".decryption");
var addData = "";
// decryptbtn.addEventListener('click',()=>{
//     btnClicking();
// })

function encryption() {
  document.querySelector("#encrypt-btn").addEventListener("click", function () {
    // get the password

    var pass = document.getElementById("pass").value;
    console.log(pass);

    // get the input

    var input = document.getElementById("text-msg").value;
    console.log(input);
    // splitting the input
    const str = input.split("");

    console.log(str);

    // convert it into imojis
    str.forEach((ele) => {
      addData += `&#128${ele.charCodeAt()}`;
    });

    console.log(addData);

    document.querySelector(".result").style.display = "block";

    document.querySelector(".result").innerHTML = addData;

    let data = [];

    data = [{ 'pass': pass, 'text': input, 'add': addData }];

    // console.log(data);

    if (JSON.parse(localStorage.getItem("data1"))) {
      data = JSON.parse(localStorage.getItem("data1"));
      console.log(data);
      data.push({ 'pass': pass, 'text': input, 'add': addData });
    } else {
      data = [{ 'pass': pass, 'text': input, 'add': addData }];
    }

    localStorage.setItem("data1", JSON.stringify(data));
  });
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

btnClicking();
encryption();
