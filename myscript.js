//define inpute arrays 
var input = [10, 8, 12, 36];
//double the values of input array
var doubles = input.map(function (a) {
    return  a * 2;
});
console.log("Result after double the input value:",doubles)
//returns number greater than 20
var filter = doubles.filter(function (number) {
    return number > 20
    });
console.log("The filtered value is:",filter);
//sum of the filtered array
 var sum = filter.reduce(function(add, value) { return add + value;}, 0);
 console.log("sum of filtered array is:",sum);