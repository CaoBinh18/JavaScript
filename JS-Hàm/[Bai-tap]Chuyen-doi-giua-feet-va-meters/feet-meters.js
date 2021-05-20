function metersToFeet(meters) {
    meters = document.getElementById('meters').value;
    document.getElementById('feet').value = 3.279 * meters;
}
function feetToMeters(feet) {
    feet = document.getElementById('feet').value;
    document.getElementById('meters').value = 0.305 * feet;
}