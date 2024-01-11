let arrayofnumber=[1,2,3,4,5,6,6,9,8,6]
let result=mostfrequentitem(arrayofnumber);
console.log(`The most frequent item is: ${result}`);

// function mostfrequentitem
function mostfrequentitem(arrayofnumber){
    arrayofitems = {};
    for (let i = 0; i < arrayofnumber.length; i++) {
        let item = arrayofnumber[i];
        arrayofitems[item] = (arrayofitems[item] || 0) + 1;
      }
    
    let FrequentItem;
    let highestFrequentitem = 0;
    for (const item in arrayofitems) {
      if (arrayofitems[item] > highestFrequentitem) {
            FrequentItem = item;
            highestFrequentitem = arrayofitems[item];
        }
      }
    
      return FrequentItem;
    

}
