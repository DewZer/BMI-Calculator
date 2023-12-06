import { showBMI } from "./UI/bmiUiController.js"
import { calculateBtnHandler, clearBtnHandler, submitHandler } from "./eventHandler/eventController.js"

const calculateBtn = document.getElementById('calculateBtn')
const clearBtn = document.getElementById('clearBtn')
const weightInput = document.getElementById('weightInput')
const heightInput = document.getElementById('heightInput')

calculateBtn.addEventListener('click', calculateBtnHandler)
clearBtn.addEventListener('click', clearBtnHandler)
weightInput.addEventListener('keydown', submitHandler)
heightInput.addEventListener('keydown', submitHandler)

const bmiData = JSON.parse(localStorage.getItem('bmiData'))

// {
//   weight: "52",
//   height: "167",
//   bmi: "18.645344042454013"
// }

if (bmiData) {
    const {weight, height, bmi} = bmiData

    weightInput.value = weight
    heightInput.value = height
    showBMI(parseFloat(bmi))
}