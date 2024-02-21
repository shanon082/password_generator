let PasswordBox = document.getElementById("password");

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "1234567890";
const symbols = "@#$%&*-+(!/?)<>=√|£€{_}";

const allChar = upperCase + lowerCase + numbers+symbols;
const passlength=20;

function generatePassword(){
    let password ="";
    password+= upperCase[Math.floor(Math.random() * upperCase.length)];
    password+= lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password+= numbers[Math.floor(Math.random() * numbers.length)];
    password+= symbols[Math.floor(Math.random() * symbols.length)];
    while(passlength > password.length){
        password+= allChar[Math.floor(Math.random() * allChar.length)];
    }
    PasswordBox.value = password;
}

function copyPassword(){
    PasswordBox.select();
    document.execCommand("copy");
}