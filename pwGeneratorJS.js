// password generator 

const empty = "";
const ucase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lcase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "!£$%^&*_-";

const password = document.querySelector("#password");
const pLength = document.querySelector("#p-length");
const uppercase = document.querySelector("#p-upper");
const lowercase = document.querySelector("#p-lower");
const pNumber = document.querySelector("#p-number");
const pSymbol = document.querySelector("#p-symbol");
const submit = document.querySelector("#submit");

const copy = document.querySelector("#copy");

submit.addEventListener("click", () => {
    let initialPw = empty;
    (uppercase.checked) ? initialPw += ucase : "";
    (lowercase.checked) ? initialPw += lcase : "";
    (pNumber.checked) ? initialPw += number : "";
    (pSymbol.checked) ? initialPw += symbol : "";

    password.value = generatePassword(pLength.value, initialPw);
});

function generatePassword(pwLength, initPw){
    let pw = "";
    for(let i=0;i<pwLength;i++){
        pw += initPw.charAt(Math.floor(Math.random() * initPw.length));
    }
    return pw;
}

// copy
copy.addEventListener("click", () => {
    if(password.value == ""){
        alert("Please generate a password");
    }
    else{
        navigator.clipboard.writeText(password.value);
        // password.select();
        // document.execCommand("copy");
        // alert("Password has been copied");
    }
})

