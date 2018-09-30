// Normal function call

function sayHi(){
    console.log('hi');
}

sayHi();

// function expression

var sayBye = function (){
    console.log('Bye');
}

sayBye();


// function passing

function callFunction (fun) {
    fun();
}

callFunction(sayBye);