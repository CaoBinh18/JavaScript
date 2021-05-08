let text1 = document.getElementById("text1").value;
let text2 = document.getElementById("text2").value; 
let result = document.getElementById("result").value;
function addition() {
    result = document.getElementById("result").value;
    text1 = parseInt(document.getElementById("text1").value);
    text2 = parseInt(document.getElementById("text2").value);
    result = text1 + text2;
    document.getElementById("result").innerText= (result);
}
function subtraction() {
    result = document.getElementById("result").value;
    text1 = parseInt(document.getElementById("text1").value);
    text2 = parseInt(document.getElementById("text2").value);
    result = text1 - text2;
    document.getElementById("result").innerText = (result);
}
function multiplication() {
    result = document.getElementById("result").value;
    text1 = parseInt(document.getElementById("text1").value);
    text2 = parseInt(document.getElementById("text2").value);
    result = text1 * text2;
    document.getElementById("result").innerText = (result);
}
function division() {
    result = document.getElementById("result").value;
    text1 = parseInt(document.getElementById("text1").value);
    text2 = parseInt(document.getElementById("text2").value);
    result = text1 / text2;
    document.getElementById("result").innerText = (result);
}