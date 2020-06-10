/* variables and constants */
let x = 1;
const y = 2;

/* functions and weak typing */
function myFunc(param) {
    return param + x
}

console.log(myFunc(2))
console.log(myFunc("number "))

/* arrow functions */
// sum: (x, y) -> x + y
let sum = (x, y) => x + y
console.log(sum(2, 3))

/* functions as first class citizens */
function print(func, param) {
    console.log(func(param))
}
const shout = (param) => param.toUpperCase()
print(shout,  "hello world!")

/* objects */
let obj = {
    key1: 'value1',
    key2: 'value2',

    method(param) {
        return param + this.key1
    }
}
console.log(obj.key1)
console.log(obj['key2'])
console.log(obj["key" + x])
obj.key1 = 'ciao mondo'

/* arrays */
const arr = [1, "two", {}, [], null, undefined]
arr.push(y)
console.log(arr.slice(0, -1))

const printElement = (elem) => console.log(elem)

arr.forEach(printElement)
console.log([1, 2, 3, 4, 5].map((elem) => elem * 2))
