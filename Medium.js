let userInput = prompt("Are you whispering, screaming or speaking normally?");

if (userInput === userInput.toLowerCase()){
    console.log("You are whispering");    
}
else if (userInput === userInput.toUpperCase()){
    console.log("You are screaming");  
}
else {
    console.log("You are speaking normally");  
}

