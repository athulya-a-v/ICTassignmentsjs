let numberarray=[7,5,7,1,8,9]
let firstNumber=numberarray[0]
if (firstNumber<=1) {
    console.log("false")
    
} else {
    if (CheckPrime(firstNumber)) {
        console.log("Number is prime")
        
    } else {
        console.log("Number is not prime")
        
    }
    
}
function CheckPrime(number)
{
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) {
            return false;
        }
        return true;
    }
}