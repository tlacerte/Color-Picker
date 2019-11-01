//button variables
const colorButton = document.getElementById("color-button")
const printColor = document.getElementById("print-color")

//function returns random number up to the limit of num
function randomNumber(num) {
    return Math.floor(Math.random() * num);
}

//uses randomNumber to input into rgb color code then changes background color
function colorChange() {
    const randomColor = 'rgb(' + randomNumber(256) + ',' + randomNumber(256) + ',' + randomNumber(256) + ')';
    event.target.style.backgroundColor = randomColor;

    printColor.innerHTML = randomColor;
}

//colorChange to each button
colorButton.onclick = colorChange;