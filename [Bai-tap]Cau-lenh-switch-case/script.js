let month = document.getElementById('month').value;
let result = document.getElementById('result').value;
function button() {
    month = document.getElementById('month').value;
    result = document.getElementById('result').value;
    switch (month) {
        case "1":
            result = ("Tháng 1 có 31 ngày");
            break;
        case "2":
            result = ("Tháng 2 có 28 hoặc 29 ngày");
            break;
        case "3":
            result = ("Tháng 3 có 31 ngày");
            break;
        case "4":
            result = ("Tháng 4 có 30 ngày");
            break;
        case "5":
            result = ("Tháng 5 có 31 ngày");
            break;
        case "6":
            result = ("Tháng 6 có 30 ngày");
            break;
        case "7":
            result = ("Tháng 7 có 31 ngày");
            break;
        case "8":
            result = ("Tháng 8 có 31 ngày");
            break;
        case "9":
            result = ("Tháng 9 có 30 ngày");
            break;
        case "10":
            result = ("Tháng 10 có 31 ngày");
            break;
        case "11":
            result = ("Tháng 11 có 30 ngày");
            break;
        case "12":
            result = ("Tháng 12 có 31 ngày");
            break;
            default:
                result = ("Không tồn tại")
    }
    document.getElementById("result").innerText = (result);
}