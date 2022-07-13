const inputEl = document.getElementById("input")
const buttonEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-results")
const volumeEl = document.getElementById("volume-results")
const massEl = document.getElementById("mass-results")

const METERS_TO_FEET = 3.2808
const LITERS_TO_GALLONS = 0.26417
const KILOGRAMS_TO_POUNDS = 2.20462

const calculateResults = (input, conversionValue) =>{
    let result1 = (input * conversionValue).toFixed(3)
    let result2 = (input / conversionValue).toFixed(3)
    return [result1, result2]
}

const renderResults = (element, conversionValue, units) => {
    let input = inputEl.innerText

    let results = calculateResults(input, conversionValue)

    let firstConversionLength = results[0]
    let secondConversionLength = results[1]
    element.innerHTML  = `<p class="results">${input} ${units[0]} = ${firstConversionLength} ${units[1]} | ${input} ${units[1]} = ${secondConversionLength} ${units[0]}<p>`
}


buttonEl.addEventListener("click", () => {
    renderResults(lengthEl, METERS_TO_FEET, ["meters", "feet"]);
    renderResults(volumeEl, LITERS_TO_GALLONS, ["liters", "gallons"])
    renderResults(massEl, KILOGRAMS_TO_POUNDS, ["kilograms", "pounds"])
})
