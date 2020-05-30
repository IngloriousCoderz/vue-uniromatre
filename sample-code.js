/* variables and constants */
let x = 1;
const y = 2;

/* functions and weak typing */
function myFunc(param) {
  return param + x;
}
console.log(myFunc(2));
console.log(myFunc("number "));

/* arrow functions */
const sum = (a, b) => a + b;
console.log(sum(2, 3));

/* functions as first class citizens */
function print(func, param) {
  console.log(func(param));
}
print((param) => param.toUpperCase(), "hello world!");

/* objects */
let obj = {
  key1: "value1",
  key2: "value2",
  method(param) {
    return param + this.key1;
  },
};
console.log(obj.key1);
console.log(obj["key2"]);
console.log(obj["key" + x]);

/* arrays */
const arr = [1, "two", {}, [], null, undefined];
arr.push(y);
console.log(arr.slice(-1));

/* array methods */
arr.forEach((elem) => console.log(elem));
