// function hiFun() {
//     alert('Hi! thank you for using the calculator.');
// }
// hiFun();


function sumfun() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    document.getElementById("results").innerHTML = (Number(a) + Number(b));

}

function subfun() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    document.getElementById("results").innerHTML = (Number(a) - Number(b));

}

function multfun() {
    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    document.getElementById("results").innerHTML = (Number(a) * Number(b));

}

function powfun() {

    let a = document.getElementById("num1").value;
    let b = document.getElementById("num2").value;

    document.getElementById("results").innerHTML = (Number(a) ** Number(b));

    document.getElementById("result").innerHTML = (Math.pow(Number(a), Number(b)));

}

const btn = document.getElementById('clearbtn');

btn.addEventListener('click', function handleClick(event) {

    event.preventDefault();

    const inputs = document.querySelectorAll('#num1, #num2');

    inputs.forEach(input => {
        input.value = '';
    });
});

function clearing() {
    document.getElementById('results').innerHTML = ' ';
}