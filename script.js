"use strict";

// +++++ Variables

const billAmount = document.querySelector(".bill-amount");
const numOfPeople = document.querySelector(".num-of-people");

const radioTip = document.querySelectorAll(".tip-radio");
const customTip = document.querySelector(".tip-custom-number");

const displayTip = document.querySelector(".tip-display");
const displayTotal = document.querySelector(".total-display");

const btnReset = document.querySelector(".reset");
// Global variables

let total = 0;
let people = 0;
let tip = 0;

let totalPerPerson = 0;
let tipPerPerson = 0;
// FUNCTIONS
function display(total, tip) {
    displayTotal.innerHTML = total.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
    displayTip.innerHTML = tip.toLocaleString("en-US", {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
}

function calcTip() {
    total = billAmount.value;
    people = numOfPeople.value;
    radioTip.forEach((radio) => {
        if (radio.checked == true) {
            tip = radio.dataset.tip;
        }
    });

    if (tip === "custom") {
        tip = customTip.value;
    }
    console.log(total, people, tip);

    tipPerPerson = (total * Number(tip)) / (100 * people);

    totalPerPerson = tipPerPerson + total / people;

    display(totalPerPerson, tipPerPerson);
}

display(124.566, 15);

// EVENT LISTENERS
btnReset.addEventListener("click", () => {
    calcTip();
});
