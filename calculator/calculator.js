let screen = document.getElementById("screen")
screen.textContent = "0"

// ALL BUTTONS:
let acBtn = document.getElementById("ac-btn")
let percentBtn = document.getElementById("percent-btn")
let divideBtn = document.getElementById("divide-btn")
let sevenBtn = document.getElementById("seven-btn")
let eightBtn = document.getElementById("eight-btn")
let nineBtn = document.getElementById("nine-btn")
let multiplicationBtn = document.getElementById("multiplication-btn")
let fourBtn = document.getElementById("four-btn")
let fiveBtn = document.getElementById("five-btn")
let sixBtn = document.getElementById("six-btn")
let minusBtn = document.getElementById("minus-btn")
let oneBtn = document.getElementById("one-btn")
let twoBtn = document.getElementById("two-btn")
let threeBtn = document.getElementById("three-btn")
let plusBtn = document.getElementById("plus-btn")
let zeroBtn = document.getElementById("zero-btn")
let commaBtn = document.getElementById("comma-btn")
let equalBtn = document.getElementById("equal-btn")

let firstNum = ""
let secondNum = ""
let typingSecondNum = false
// actions -> "+", "-"...
let action = ""                                  

// NUMBERS
zeroBtn.addEventListener("click", zeroHandler)
oneBtn.addEventListener("click", oneHandler)
twoBtn.addEventListener("click", twoHandler)
threeBtn.addEventListener("click", threeHandler)
fourBtn.addEventListener("click", fourHandler)
fiveBtn.addEventListener("click", fiveHandler)
sixBtn.addEventListener("click", sixHandler)
sevenBtn.addEventListener("click", sevenHandler)
eightBtn.addEventListener("click", eightHandler)
nineBtn.addEventListener("click", nineHandler)

// SYMBOLS
acBtn.addEventListener("click", acHandler)
commaBtn.addEventListener("click", commaHandler)
plusBtn.addEventListener("click", plusHandler)
equalBtn.addEventListener("click", equalHandler)
minusBtn.addEventListener("click", minusHandler)
multiplicationBtn.addEventListener("click", multiplicationHandler)
divideBtn.addEventListener("click", divideHandler)
percentBtn.addEventListener("click", percentHandler)

// NUMBER FUNCTIONS:
function zeroHandler(){
    let firstSym = screen.textContent[0]
    let secondSym = screen.textContent[1]
    if ((firstSym !== "0" && typeof firstSym === "string") || (firstSym === "0" && secondSym === ".")){
        screen.textContent += 0
    }
    else if ((firstNum === "0" && secondSym !== ".")|| screen.textContent === ""){
        screen.textContent = 0
    }
    if (!typingSecondNum){
        firstNum = screen.textContent
    }
    else if (typingSecondNum){
        secondNum = screen.textContent
    }
}
function oneHandler(){
    let firstSym = screen.textContent[0]
    let secondSym = screen.textContent[1]

    if ((firstSym !== "0" && typeof firstSym === "string") || (firstSym === "0" && secondSym === ".")){
        screen.textContent += 1
    }
    else{
        screen.textContent = 1
    }
    if (!typingSecondNum){
        firstNum = screen.textContent
    }
    else if (typingSecondNum){
        secondNum = screen.textContent
    }
}
function twoHandler(){
    let firstSym = screen.textContent[0]
    let secondSym = screen.textContent[1]
    if ((firstSym !== "0" && typeof firstSym === "string") || (firstSym === "0" && secondSym === ".")){
        screen.textContent += 2
    }
    else{
        screen.textContent = 2
    }
    if (!typingSecondNum){
        firstNum = screen.textContent
    }
    else if (typingSecondNum){
        secondNum = screen.textContent
    }
}
function threeHandler(){
    let firstSym = screen.textContent[0]
    let secondSym = screen.textContent[1]
    if ((firstSym !== "0" && typeof firstSym === "string") || (firstSym === "0" && secondSym === ".")){
        screen.textContent += 3
    }
    else{
        screen.textContent = 3
    }
    if (!typingSecondNum){
        firstNum = screen.textContent
    }
    else if (typingSecondNum){
        secondNum = screen.textContent
    }
}
function fourHandler(){
    let firstSym = screen.textContent[0]
    let secondSym = screen.textContent[1]
    if ((firstSym !== "0" && typeof firstSym === "string") || (firstSym === "0" && secondSym === ".")){
        screen.textContent += 4
    }
    else{
        screen.textContent = 4
    }
    if (!typingSecondNum){
        firstNum = screen.textContent
    }
    else if (typingSecondNum){
        secondNum = screen.textContent
    }
}
function fiveHandler(){
    let firstSym = screen.textContent[0]
    let secondSym = screen.textContent[1]
    if ((firstSym !== "0" && typeof firstSym === "string") || (firstSym === "0" && secondSym === ".")){
        screen.textContent += 5
    }
    else{
        screen.textContent = 5
    }
    if (!typingSecondNum){
        firstNum = screen.textContent
    }
    else if (typingSecondNum){
        secondNum = screen.textContent
    }
}
function sixHandler(){
    let firstSym = screen.textContent[0]
    let secondSym = screen.textContent[1]
    if ((firstSym !== "0" && typeof firstSym === "string") || (firstSym === "0" && secondSym === ".")){
        screen.textContent += 6
    }
    else{
        screen.textContent = 6
    }
    if (!typingSecondNum){
        firstNum = screen.textContent
    }
    else if (typingSecondNum){
        secondNum = screen.textContent
    }
}
function sevenHandler(){
    let firstSym = screen.textContent[0]
    let secondSym = screen.textContent[1]
    if ((firstSym !== "0" && typeof firstSym === "string") || (firstSym === "0" && secondSym === ".")){
        screen.textContent += 7
    }
    else{
        screen.textContent = 7
    }
    if (!typingSecondNum){
        firstNum = screen.textContent
    }
    else if (typingSecondNum){
        secondNum = screen.textContent
    }
}
function eightHandler(){
    let firstSym = screen.textContent[0]
    let secondSym = screen.textContent[1]
    if ((firstSym !== "0" && typeof firstSym === "string") || (firstSym === "0" && secondSym === ".")){
        screen.textContent += 8
    }
    else{
        screen.textContent = 8
    }
    if (!typingSecondNum){
        firstNum = screen.textContent
    }
    else if (typingSecondNum){
        secondNum = screen.textContent
    }
}
function nineHandler(){
    let firstSym = screen.textContent[0]
    let secondSym = screen.textContent[1]
    if ((firstSym !== "0" && typeof firstSym === "string") || (firstSym === "0" && secondSym === ".")){
        screen.textContent += 9
    }
    else{
        screen.textContent = 9
    }
    if (!typingSecondNum){
        firstNum = screen.textContent
    }
    else if (typingSecondNum){
        secondNum = screen.textContent
    }
}

// SYMBOL FUNCTIONS:

function commaHandler(){
    let containsComma = false
    for (let index = 0; index < screen.textContent.length; index++) {
        let sym = screen.textContent[index]
        if (sym === "."){
            containsComma = true
        }    
    }
    if (!containsComma && screen.textContent !== ""){
        screen.textContent += "."
    }
}

function percentHandler(){
    action = "%"
    typingSecondNum = true
    screen.textContent = ""
}

function acHandler(){
    screen.textContent = "0"
}

function plusHandler(){
    action = "+"
    typingSecondNum = true
    screen.textContent = ""
}

function minusHandler(){
    action = "-"
    typingSecondNum = true
    screen.textContent = ""
}

function multiplicationHandler(){
    action = "*"
    typingSecondNum = true
    screen.textContent = ""
}

function divideHandler(){
    action = "/"
    typingSecondNum = true
    screen.textContent = ""
}

function equalHandler(){
    if (action === "+"){
        let result = Number(firstNum) + Number(secondNum)
        screen.textContent = result
    }
    else if (action === "-"){
        let result = Number(firstNum) - Number(secondNum)
        screen.textContent = result
    }
    else if (action === "*"){
        let result = Number(firstNum) * Number(secondNum)
        screen.textContent = result
    }
    else if (action === "/"){
        let result = Number(firstNum) / Number(secondNum)
        screen.textContent = result.toFixed(2)
    }
    else if (action === "%"){
        let result = (Number(firstNum) * Number(secondNum)) / 100
        screen.textContent = result.toFixed(2)
    }
    firstNum = screen.textContent
    secondNum = ""
    typingSecondNum = false
}
