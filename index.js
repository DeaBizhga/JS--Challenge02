// Ushtrimi 1


function isIPv4Address(inputString) {
    const parts = inputString.split('.');
    
    if (parts.length !== 4) {
        return false;
    } 
    
    for (let part of parts) {
          
        const num = parseInt(part, 10);

        if ( part.length <= 0 || typeof(num) != 'number'){
            return false;
        }
        
        
        if (num < 0 || num > 255) {
            return false;
        }
        
        if (part.length > 1 && part[0] === '0') {
            return false;
        }

    }
    
    return true;
}


console.log(isIPv4Address("172.16.254.1")); // e vertet
console.log(isIPv4Address("172.316.254.1")); //gabuar
console.log(isIPv4Address(".254.255.1"));   //gabuar





// Uhstrimi 2

function addBorder(matrix) {
    const width = matrix[0].length;
    const border = '*'.repeat(width + 2);
    const borderedMatrix = [];

    borderedMatrix.push(border); // rreshti i pare me yje

    for (let row of matrix) {
        borderedMatrix.push('*' + row + '*');
    }

    borderedMatrix.push(border); // rreshti i fundit me yje

    return borderedMatrix;
}


//prova

const matrix = [
    "abc",
    "ded"
];


const borderedMatrix = addBorder(matrix);
for (let row of borderedMatrix) {
    console.log(row);
    let paratext = document.getElementById("matrix").textContent;
    var textnode = document.createTextNode(row);
    var brelement = document.createElement('br');
    var targetelement = document.getElementById("matrix");
    targetelement.appendChild(textnode);
    targetelement.appendChild(brelement);
}
