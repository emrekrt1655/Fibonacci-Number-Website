
var btn = document.getElementById("button");

btn.addEventListener("click", function(){

    
    
    
    let num = document.getElementById("number").value;
    if ( num == 1){
        document.getElementById("result").innerHTML = `In the Fibonacci sequence, the number ${num} is 0. `;
    }

    else if ( num == 2){
        document.getElementById("result").innerHTML = `In the Fibonacci sequence, the number ${num} is 1. `;
    }
    else{
    
     document.getElementById("result").innerHTML = `In the Fibonacci sequence, the number ${num} is ${fibonacci(num)} `;

    }
    let myList = document.createElement("p");
    myList.innerHTML = `The Fibonacci sequence is { ${fibonacci_list(num)} } `
    document.getElementById("result").appendChild(myList);
});


var fibonacci = function (num){
    var result = [0,1];
    
       var num1 = result[0],
            num2 = result[1],
            next, 
            count = 2;
    while (count < num) {
        
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        result.push(next);
        count++;
    }
    
       return result[result.length -1];
}

var fibonacci_list = function (num){
    var result = [0,1];
    
       var num1 = result[0],
            num2 = result[1],
            next, 
            count = 2;
    while (count < num) {
        
        next = num1 + num2;
        num1 = num2;
        num2 = next;
        result.push(next);
        count++;
    }
    
       return result;
}





