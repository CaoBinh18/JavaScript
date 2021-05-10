function addition() {
    numberone = parseInt(document.getElementById('numberone').value);
    numbertwo = parseInt(document.getElementById('numbertwo').value);
    result = (numberone + numbertwo);
    document.getElementById('result').innerText= ('Result Addition:') + (result);
}
function subtraction() {
    numberone = parseInt(document.getElementById("numberone").value);
    numbertwo = parseInt(document.getElementById("numbertwo").value);
    result = numberone - numbertwo;
    document.getElementById("result").innerText = (result);
}
function multiplication() {
    numberone = parseInt(document.getElementById("numberone").value);
    numbertwo = parseInt(document.getElementById("numbertwo").value);
    result = numberone * numbertwo;
    document.getElementById("result").innerText = (result);
}
function division() {
    numberone = parseInt(document.getElementById("numberone").value);
    numbertwo = parseInt(document.getElementById("numbertwo").value);
    result = numberone / numbertwo;
    document.getElementById("result").innerText = (result);
}
