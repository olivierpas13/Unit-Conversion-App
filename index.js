const inputEl = document.getElementById("input")
const buttonEl = document.getElementById("convert-btn")
const lengthEl = document.getElementById("length-results")
const volumeEl = document.getElementById("volume-results")
const massEl = document.getElementById("mass-results")

const metersToFeet = 3.2808
const litersToGallons = 0.26417
const kilogramsToPounds = 2.20462


buttonEl.addEventListener("click", function(){
    renderResults(lengthEl, metersToFeet, ["meters", "feet"]);
    renderResults(volumeEl, litersToGallons, ["liters", "gallons"])
    renderResults(massEl, kilogramsToPounds, ["kilograms", "pounds"])
})


const renderResults = (element, conversionValue, units) =>{
    let input = inputEl.innerText

    let results = calculateResults(input, conversionValue)

    let firstConversionLength = results[0]
    let secondConversionLength = results[1]
    element.innerHTML  = `<p class="results">${input} ${units[0]} = ${firstConversionLength} ${units[1]} | ${input} ${units[1]} = ${secondConversionLength} ${units[0]}<p>`
}


const calculateResults = (input, conversionValue) =>{
    let result1 = (input * conversionValue).toFixed(3)
    let result2 = (input / conversionValue).toFixed(3)
    return [result1, result2]
}