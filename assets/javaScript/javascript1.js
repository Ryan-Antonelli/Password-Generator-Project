function passwordGenerator () {

// Variable Declarations
var lowerCaseAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var upperCaseAlph = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var integer = ["1","2","3","4","5","6","7","8","9","0"];

var specialChars = ["\u0021","\u0023","\u0024","\u0025","\u0026","\u0027","\u0028"];

var charSet = [];
var charNum;
var charNumInt = 0;
var lcaConfirm;
var ucaConfirm;
var integerConfirm;
var scConfirm;

function start(){
    // verification of appropriate character number
    while ((charNumInt<8) || (charNumInt>128)) {
        charNum = prompt("Please enter the desired number of characters from 8 to 128");
        charNumInt = parseInt(charNum);
    }
    
    lowers();
}

start();

// character selection functions

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

    // adding selected characters to password selection array
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


var proto =[];
var i = 0;

// password creation function
for (var i = 0; i < charNumInt; i++) {
    
    // random number generator to pick characters from charSet array
    var selector = Math.floor (Math.random() * charSet.length);
    // push selected characters into password array
    proto.push(charSet[selector]);
    
}
// cleaning up output removing extraneous commas
var password = proto.join("");
// writing password to webpage
document.getElementById("password").innerHTML = password;

}
// copy to clipboard function
function copyToClipboard() {

    var copyText = document.getElementById("password");
    copyText.select("password");
    document.execCommand("copy");
    
}