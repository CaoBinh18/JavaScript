function number(button) {
    document.getElementById('text').value += button;
}
function clearmen() {
    document.getElementById('text').value = "";
}
function equal() {
    x = document.getElementById('text').value;
    y = eval(x);
    document.getElementById('text').value = y;
}