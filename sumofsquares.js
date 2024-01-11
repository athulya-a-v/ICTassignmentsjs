function sumOfSquares(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] ;
    }
    squre=sum*sum;

    return squre;
}

// Example usage
const myArray = [1, 2, 3, 4, 5];
const result = sumOfSquares(myArray);

console.log("The sum of squares is:", result);