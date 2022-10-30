var a = alert("Hi There! Its Ahmed at your service, I'm here for generating your Biodata Virtually/Concatenate Strings/Generate a Calculator/ Post + Pre Incremental or Decremental Operations" + "\n" + "Please Continue...");
var b = +prompt("Select a Program:" + "\n" + "Press (1) to generate a Biodata " + "\n" + "Press (2) to Concatenate two strings" + "\n" + "Press (3) to Implement Post+Pre Incremental / Decremental Operation")
if (b === 1) {
    var c = prompt("Enter Your Full Name: ");
    var d = +prompt("Enter your age:");

    var f = +prompt("Enter your Date Of birth (date month year):");
    var g = c + d + f;
    alert("Here's Your BioData:" + "\n " + "🅽🅰🅼🅴 :" + " " + c + "\n " + "🅰🅶🅴 : " + " " + d + "\n" + "🅳🅰🆃🅴 🅾🅵 🅱🅸🆁🆃🅷 : " + " " + f + "\n" + " " + "Personally Developed by: M.AHMED HASHMI");
} else if (b === 2) {
    var h = prompt("Enter your first String: ");
    var i = prompt("Now, Enter your Second String: ");

    alert("You have Concatenated your Strings and formed:" + "\n" + h + " " + i);
} else if (b === 3) {
    var j = prompt("Select :" + "\n" + "Press (a) if you want to Proceed with Pre-incremental and decremental" + "\n" + "Press (b) if you want to go with Post-incremental and decremental Operations")
    if (j === "a") {
        var k = +prompt("Enter Your First value: ");
        var l = +prompt("Enter Your Second value: ");
        alert("First Input: " + k + " \n" + "Second Input: " + l + "\n" + "Your Pre-incremental values are: " + "\n" + ++k + " " + "&" + " " + ++l + "\n" + "Your Pre-decremental values are: " + --k + " " + "&" + " " + --l);
    } else if (j === "b") {
        var m = +prompt("Enter Your First value: ");
        var n = +prompt("Enter Your Second value: ");
        alert("First Input: " + m + " \n" + "Second Input: " + n + "\n" + "Your Post-incremental values are: " + "\n" + m++ + " " + "&" + " " + n++ + "\n" + "Your Post-decremental values are: " + m-- + " " + "&" + " " + n--);


    } else {
        alert("Sorry! You need to choose any one(a/b)")
    }

} else {
    alert("Sorry You can only answer in form of (1) or (2) or (3)" + "\n" + "Thank You!")
}