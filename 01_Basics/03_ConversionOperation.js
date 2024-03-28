let mystring = null

let myNumber = Number(mystring);

console.log(typeof myNumber);
console.log(myNumber);

// Number() => It convert typeof to nuber but actual output is as given below
// "123" => 123
// "kk123" => NaN
// false => 0
// Object => NaN
// null => 0