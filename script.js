let weight = document.getElementById('weight');
let height = document.getElementById('height');
let form = document.getElementById('myform')



form.addEventListener('submit', function (e) {
    e.preventDefault();
    let heightNum = parseFloat(height.value);
    let weightNum = parseFloat(weight.value);
    Calculate(weightNum, heightNum);
});


function Calculate(weight, height) {
    let result = weight / Math.pow(height, 2);
    result = result.toFixed(2);
    sessionStorage.setItem('result', result);
    sessionStorage.setItem('weight', weight);
    sessionStorage.setItem('height', height);

    if (result < 18.5) {
        window.location.href = '/Underweight.html';

        console.log(result, 'underweight');

    } else if (result >= 18.5 && result < 25) {
        window.location.href = '/Normal.html';

        console.log(result, 'normal');
    } else if (result >= 25.0 && result < 30) {
        console.log(result, "Overweight");
        window.location.href = '/Overweight.html';
    } else {
        console.log(result, "obese");
        window.location.href = '/Obese.html';
    }
}

function result() {
    let weightValue = document.getElementById('weight').value
    let heightValue = document.getElementById('height').value
}


// let getWeight = document.getElementById('normalWeight').value = sessionStorage.getItem('Kg');
// let getHeight = document.getElementById('normalHeight').value = sessionStorage.getItem('m');