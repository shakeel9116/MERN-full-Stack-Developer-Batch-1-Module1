// Get DOM Elements
const currencyOne = document.getElementById('currency-one');
const amountCurrencyOne = document.getElementById('amount-one');
const currencyTwo = document.getElementById('currency-two');
const amountCurrencyTwo = document.getElementById('amount-two')
const rate = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch Exchange Rate and Update the DOM
function calculate() {
    // Get the Currency Code for currency 1 and 2
    const currencyOneCode = currencyOne.value;
    const currencyTwoCode = currencyTwo.value;


    // Send Request to ExchangeRate-API for conversion rates for currency one
    fetch(`https://v6.exchangerate-api.com/v6/2e655730b107c657ea352aaa/pair/${currencyOneCode}/${currencyTwoCode}`)
         .then(res => res.json())
         .then(data => {
             // Get Conversion rate from currency One to currency Two
             const conversionRate = data.conversion_rate;

             // Update the DOM the display the conversion rate
             rate.innerText = `1 ${currencyOneCode} = ${conversionRate} ${currencyTwoCode}`;

             // Formating currency Two Amount
             const amount2 = new Intl.NumberFormat('en-US', { style: 'currency', currency: currencyTwoCode}).format((amountCurrencyOne.value * conversionRate).toFixed(2));
             // Updating DOM
             amountCurrencyTwo.value = amount2;
         });
};

// Event Listeners
// Replace exchange rate when currency 1 changes
currencyOne.addEventListener('change',calculate);
// Recalculate exchange amount when currency 1 amount changes
amountCurrencyOne.addEventListener('input',calculate);

// Replace exchange rate when currency 2 changes
currencyTwo.addEventListener('change',calculate);
// Recalculate exchange amount when currency 2 amount changes
amountCurrencyTwo.addEventListener('input',calculate);

swap.addEventListener('click', () => {
    // Save Value of currency One to temp variable
    const temp = currencyOne.value;
    // Copy Currency two Code to Currency one
    currencyOne.value = currencyTwo.value
    // Copy Currency One Code from temp variable to Currency Two
    currencyTwo.value = temp;
    //  Recalculate exchange rate after swap
    calculate();
})

// Execute calculate function on page load
calculate();