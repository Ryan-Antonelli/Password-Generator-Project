function passwordGenerator () {

var lowerCaseAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseAlph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var integer = ["1","2","3","4","5","6","7","8","9","0"];

var specialChars = ["\u0021","\u0023","\u0024","\u0025","\u0026","\u0027","\u0028"];

var charSet = [];
var charNum
var charNumInt
var lcaConfirm
var ucaConfirm
var integerConfirm
var scConfirm

function start(){
    charNum = prompt("Please enter the desired number of characters between 8 and 128");
    charNumInt = parseInt(charNum);
    lowers();
}

start();

console.log(charNumInt);

function lowers(){
    lcaConfirm = confirm("Please select OK if lower case alphabet characters are desired.");
    uppers();
}

function uppers(){
    ucaConfirm = confirm("Please select OK if upper case alphabet characters are desired.");
    integers();
}

function integers(){
    integerConfirm = confirm("Please select OK if numeric characters are desired.");
    specials();
}

function specials(){
scConfirm = confirm("Please select OK if special characters are desired.");

}
console.log(scConfirm)
    
    if (lcaConfirm===true) {

        var charSet = lowerCaseAlph   
    }



    if (ucaConfirm===true) {

        var charSet = charSet.concat(upperCaseAlph)
    }


   
    if (integerConfirm===true) {

        var charSet = charSet.concat(integer)
    }



    if (scConfirm===true) {

        var charSet = charSet.concat(specialChars)
    }


console.log(charSet)


var proto =[];

var i = 0;

for (var i = 0; i < charNumInt; i++) {
    
     
    var selector = Math.floor (Math.random() * charSet.length);
    proto.push(charSet[selector]);
    
}

var password = proto.join("");

document.getElementById("password").innerHTML = password;

}

function copyToClipboard() {

    var copyText = document.getElementById("password");
    copyText.select("password");
    document.execCommand("copy");
    
}