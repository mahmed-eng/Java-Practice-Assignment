var g = +prompt("Enter a Number:")

function table() {

    for (i = 1; i < 11; i++) {
        for (j = 1; j < 11; j++) {
            console.log(g * j + "=" + g * i)

        }

    }
}
table();