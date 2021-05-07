const rateUsdToVnd = 23000;
const vnd = "VND"
const usd = "USD"
let amount = 0;
let fromCurrency = document.getElementById("fromCurrency").value;
let toCurrency = document.getElementById("toCurrency").value;
let result = document.getElementById("result");
function convert() {
    result = document.getElementById("result");
    amount = parseInt(document.getElementById("amount").value);
    fromCurrency = document.getElementById("fromCurrency").value;
    toCurrency = document.getElementById("toCurrency").value;
    if (fromCurrency == vnd) {
        if (toCurrency == vnd) {
            result = amount;
        }
        if (toCurrency == usd) {
            result = amount / rateUsdToVnd;
        }
    }
    if (fromCurrency == usd) {
        if (toCurrency == usd) {
            result = amount;
        }
        if (toCurrency == vnd) {
            result = amount * rateUsdToVnd;
        }
    }
   document.getElementById("result").innerText = (result);
}
