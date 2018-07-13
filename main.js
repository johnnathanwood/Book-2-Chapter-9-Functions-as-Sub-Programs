let counter = 0;
let outputElement = document.getElementById("dynamic-content");

function incrementCounterAndOutput () {
    counter += 2;
    outputElement.innerHTML += counter;

}

incrementCounterAndOutput();
incrementCounterAndOutput();
incrementCounterAndOutput();
incrementCounterAndOutput();
incrementCounterAndOutput();
incrementCounterAndOutput(); //invoking or executing a


// counter += 1; 
// outputElement.innerHTML += counter;

// counter += 1; 
// outputElement.innerHTML += counter;

// counter += 1; 
// outputElement.innerHTML += counter;

// counter += 1; 
// outputElement.innerHTML += counter;

// counter += 1; 
// outputElement.innerHTML += counter;

