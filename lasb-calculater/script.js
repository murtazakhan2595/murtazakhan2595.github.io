let result = document.getElementById("result");
let submenu = document.getElementById("submenu");
const calculator = document.getElementById("calculator");
const converter = document.getElementById("converter");
const currencyConverter = document.getElementById("currency-converter");
let scientificOperations = document.getElementById("scientific-operations");

function showAlert(){
  if (!result.value){
    alert("Please enter a value");
    return 0;
  }
  return 1
}

function appendToResult(value) {
  result.value += value;
}

function clearResult() {
  result.value = "";
}

function calculate() {
  try {
    result.value = eval(result.value);
  } catch (error) {
    result.value = "Error";
  }
}


function toggleMenu() {
  converter.style.display = "none";
  calculator.style.display = "none";
  currencyConverter.style.display = "none";
  submenu.style.display = "block";
}

function toggleSimpleMode() {
  calculator.style.display = "block";
  scientificOperations.style.display="none"
  submenu.style.display = "none";
}

function toggleScientificMode() {
  calculator.style.display = 'block';
    scientificOperations.style.display = 'block'
    submenu.style.display = 'none'; 
}

function toggleUnitConversion() {
  // console.log("Unit Conversion")
  calculator.style.display = "none";
  submenu.style.display = "none"; 
  converter.style.display = "flex"
}

function calculateSquareRoot() {
  if (showAlert() === 0) return;
    result.value = Math.sqrt(eval(result.value));
}

function calculatePower() {
  if(showAlert()===0)return
    result.value = eval(result.value) ** prompt("Enter the power:");
}

function calculateSin() {
  console.log(result.value)
  if (showAlert() === 0) return;
  console.log(result.value);
    result.value = Math.sin(eval(result.value));
    console.log(result.value);
}

function calculateCos() {
  if(showAlert()===0)return
    result.value = Math.cos(eval(result.value));
}

function calculateTan() {
  if(showAlert()===0)return
    result.value = Math.tan(eval(result.value));
}



function toggleCurrencyConversion() {
  currencyConverter.style.display = "block";
  submenu.style.display = "none";
}



  function convert() {
    const value = parseFloat(document.getElementById("value").value);
    const fromUnit = document.getElementById("from").value;
    const toUnit = document.getElementById("to").value;
    console.log(value, fromUnit, toUnit)

    let result;

    switch (fromUnit) {
      case "cm":
        result = value / 100;
        break;
      case "m":
        result = value;
        break;
      case "km":
        result = value * 1000;
        break;
      case "inch":
        result = value * 0.0254;
        break;
      case "ft":
        result = value * 0.3048;
        break;
      case "yd":
        result = value * 0.9144;
        break;
    }

    switch (toUnit) {
      case "cm":
        result *= 100;
        break;
      case "m":
        break;
      case "km":
        result /= 1000;
        break;
      case "inch":
        result /= 0.0254;
        break;
      case "ft":
        result /= 0.3048;
        break;
      case "yd":
        result /= 0.9144;
        break;
    }
    console.log(result)

    document.getElementById(
      "convert-result"
    ).innerText = `${value} ${fromUnit} = ${result.toFixed(2)} ${toUnit}`;
  }

  function convertCurrency() {
    const amount = parseFloat(document.getElementById("amount").value);
    const fromCurrency = document.getElementById("fromCurrency").value;
    const toCurrency = document.getElementById("toCurrency").value;

    // Replace this with your currency conversion logic (e.g., using an API)
    // For demonstration, let's assume a simple conversion rate
    const conversionRates = {
      USD: {
        EUR: 0.85, // 1 USD = 0.85 EUR
        // Add more conversion rates as needed
      },
      EUR: {
        USD: 1.18, // 1 EUR = 1.18 USD
        // Add more conversion rates as needed
      },
    };

    // Perform the currency conversion
    const convertedAmount = amount * conversionRates[fromCurrency][toCurrency];

    document.getElementById(
      "currency-result"
    ).innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(
      2
    )} ${toCurrency}`;
  }
