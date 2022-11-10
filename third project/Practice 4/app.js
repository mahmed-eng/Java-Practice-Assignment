var arr = [1, 2, 3, 4, 5, 6]

function myArray(arr) {

    var arrs = arr.slice(0, 3);
    console.log("Sliced values Array: " + arrs + "\n" + "From the Array: " + arr)

}

myArray(arr)


function spliceArray(arr) {

    b = arr.splice(0, 3, 'Ahmed', 'Hashmi');
    console.log("Spliced values: " + b + "\n" + "Now Array we have: " + arr)



}
spliceArray(arr)

// Pushing values
p = arr.push(10)
console.log('Pushed Value: ' + "\n" + p + "\n" + "Hence, Array becomes: " + arr)

pop = arr.pop();
console.log('Deleting ' + p + ' from the end of an Array' + "\n" + "Array becomes: " + arr)