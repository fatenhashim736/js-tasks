function myfun() {

    a = document.getElementById("num1").value;
    b = document.getElementById("num2").value;

    var now = new Date(a);
    var BornDate = new Date(b);
    var diffyear = now.getFullYear() - BornDate.getFullYear();

    document.getElementById("result").innerHTML = diffyear;
}