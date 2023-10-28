// adding variables

const count_display = document.getElementById('value');
const button_increase = document.querySelector(".increase");
const button_decrease = document.querySelector(".decrease");
const reset_button = document.querySelector(".reset");

var number = 0;

button_increase.addEventListener('click', function () {

    number++;

    count_display.textContent = number;
});
// console.log(number)


button_decrease.addEventListener('click', function () {
    number--;
    count_display.textContent = number;
})


reset_button.addEventListener('click', function(){

    count_display.textContent=0;
})