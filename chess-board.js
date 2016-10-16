/**
 * Chess board
 *
 * Jeevan Jayaprakash
 * jeevan.jayaprakash@cantab.net
 *
 * A function which generates a chess board of a height and width required by the user. 
 */

 // a verbose solution - to be revisited

var variableSize = prompt("Please enter desired height and width for chess board");
var space = " ";
var hash = "#";
var firstLine = ""; // lines beginning with space 
var secondLine = ""; // lines beginning with a hash
var finalOutput = "";

if(variableSize % 2 == 0) { 
for(var i = 0; i < variableSize/2; i++) { 
  firstLine += space; // first line always begins with a space
  firstLine += hash;
}
} else {
    for(var i = 0; i < Math.floor(variableSize/2); i++) { 
      firstLine += space;
      firstLine += hash;
    }
  }

firstLine += "\n";

for(var j = 0; j < variableSize/2; j++) {
    secondLine += hash; // second line always begins with a hash
    secondLine += space;
}

secondLine += "\n";

if(variableSize % 2 == 0) {
for(var k = 0; k < variableSize/2; k++) {
  finalOutput += firstLine;
  finalOutput += secondLine; // repeated even number of times 
}
} else {
  for(var k = 0; k < variableSize/2 - 1; k++) {
    finalOutput += firstLine;
    finalOutput += secondLine;
  }
  finalOutput += firstLine;
}

console.log(finalOutput);