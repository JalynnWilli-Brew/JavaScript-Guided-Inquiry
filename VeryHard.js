let x = prompt("Enter your first number");
let o = prompt(" Choose an operator (+, -, *, /)");
let y = prompt("Enter your second number");
x, y = parseFloat(x,y);
//Add
function add(n1, n2) {
    return n1 + n2 
 }
 
 //Subtract
 function subtract(n1, n2){
    return n1 - n2    
 }
  
 //Multiply
 function multiply(n1, n2){
    return n1 * n2
 }
 
 //Divide
 function divide(n1, n2){
     return n1 / n2
 }
 
 console.log(add(16,10), subtract(50, 25), multiply(12,12), divide(40,10))

 //calculations

 if (o == '+') {
     let calculations = x + y
     alert(`${x} + ${y} = ${calculations}`)

 } else if (o == '-') {
     let calculations = x - y
     alert(`${x} - ${y} = ${calculations}`)

 } else if (o == '*') {
     let calculations = x * y
     alert(`${x} * ${y} = ${calculations}`)

 } else if (o == '/') {
     let calculations = x / y
     alert(`${x} / ${y} =  ${calculations}`)

 }

 