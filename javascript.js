


function clearResult()
    {
        // Erases the value of result by making it null
        document.getElementById("result").value = null
    }

function solve()
    {    
        // Gets the currant value of "result" and runs it through eval(), which takes the string and treats it like an expression
        var x = document.getElementById("result").value
        var y = exp(eval(x))
        
        // Prints the result y
        // var z = 
        document.getElementById("result").value = y
        return y
    }

function remove()
    {
        var res = document.getElementById("result").value;
        document.getElementById("result").value = res.slice(0, -1)
    }

function factorial()
    {
        // Starts off the number with 1 and multiply it by 2,3... up to the value of "result"
        var res = document.getElementById("result")
        var N = 1;
        for (num = 1; num <= res.value; num++)
            {
                // Multiply the previous value of product with the next number on the number line until result.value
                N = N * num;   
                console.log(N)
            }
        // N = exp(N)
        document.getElementById("result").value = N
        return N
    }

function percentage(per)
    {
        // Finds the currant value of "result" and divides it by 100 to make it a percentage
        var res = document.getElementById("result").value;
        per = res/100;

        // Prints the resulting percentage
        document.getElementById("result").value = per

        return per
    }


    // This Squared and cubed numbers but it  got too hard to keep it together
/* function square(i)
    {
        // Runs the solve function to make it one integer
        // solve()

        // Finds the currant value of "result" and multiples it by itself 2 or 3 times depending on the value of i 
        var res = document.getElementById("result").value
        var y = res ** i

        // Makes the number exponential notation if the number is too large
        
        
        // Prints the new result to the "result" DIV
        document.getElementById("result").value = exp(y)
    } */

function pi(??)
    {
        // Finds the currant value of "result" and declares the value of ??
        var res = document.getElementById("result").value;
        var ?? = 3.14159

        // Prints the previous value with * ??
        document.getElementById("result").value = res + "*" + ??
        return ??
    }

function dis(res)
    {
        // Takes the input res and adds it to the currant value of "result"
        document.getElementById("result").value += res
        return res
    }

// When called makes the number exponential notation if over 1 billon, otherwise makes it toLocalString
function exp(y)
    {
        if (y > 10000000000)
            {
                y = y.toExponential()   
            }
        y = y.toLocaleString()
        return y
    }