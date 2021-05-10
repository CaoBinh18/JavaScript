// let numberone = document.getElementById('numberone').value;
// let numbertwo = document.getElementById('numbertwo').value; 
// let result = document.getElementById('result').value;
function addition() {
    // result = document.getElementById('result').value;
    numberone = parseInt(document.getElementById('numberone').value);
    numbertwo = parseInt(document.getElementById('numbertwo').value);
    result = (numberone + numbertwo);
    document.getElementById('result').innerText= ('Result Addition:') + (result);
}
function subtraction() {
    // result = document.getElementById("result").value;
    numberone = parseInt(document.getElementById("numberone").value);
    numbertwo = parseInt(document.getElementById("numbertwo").value);
    result = numberone - numbertwo;
    document.getElementById("result").innerText = (result);
}
function multiplication() {
    // result = document.getElementById("result").value;
    numberone = parseInt(document.getElementById("numberone").value);
    numbertwo = parseInt(document.getElementById("numbertwo").value);
    result = numberone * numbertwo;
    document.getElementById("result").innerText = (result);
}
function division() {
    // result = document.getElementById("result").value;
    numberone = parseInt(document.getElementById("numberone").value);
    numbertwo = parseInt(document.getElementById("numbertwo").value);
    result = numberone / numbertwo;
    document.getElementById("result").innerText = (result);
}
