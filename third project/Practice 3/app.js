var a = +prompt("Enter a number in array: ")
var b = prompt("Enter a String in array: ")
var c = +prompt("Enter a number in array: ")
var d = prompt("Enter a String in array: ")
var e = +prompt("Enter a number in array: ")
var f = prompt("Enter a String in array: ")
var arr = [a, b, c, d, e, f]

function myLogic(arr) {
    for (i = 1; i <= arr.length; i++) {

        console.log(arr)
    }
}

myLogic(arr)