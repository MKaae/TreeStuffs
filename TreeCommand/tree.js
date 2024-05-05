const fs = require("fs");
const path = require("path");

let formatValue = null;

// Finding out what argument is from string after -format: syntaxt - i couldn't find easier way.
const formatIndex = process.argv.findIndex(arg => arg.startsWith('-format:'));
formatValue = process.argv[formatIndex].split(":")[1];

const folderName = process.argv[2];

let nodeSelect = false;

if (process.argv.includes('nodetrue')) {
    nodeSelect = true; 
}

if(formatValue === "drawing"){
    console.log("Printing out contents of server:\n")
    printTree(folderName);
} else if(formatValue === "markdown"){
    console.log("markdown")
    //TODO
} else if(formatValue === "html"){
    console.log("html")
    //TODO
}

function printTree(dirPath, prefix = '') {
    const files = fs.readdirSync(dirPath);
    files.forEach((file, index) => {
        const filePath = path.join(dirPath, file);
        const isDirectory = fs.statSync(filePath).isDirectory();
        if(nodeSelect === false){
            if (file !== 'node_modules') { // Exclude node_modules. Found these box drawing things on wikipedia.
                console.log(prefix + (index === files.length - 1 ? '└── ' : '├── ') + file);
                if (isDirectory) {
                    const newPrefix = prefix + (index === files.length - 1 ? '    ' : '│   ');
                    printTree(filePath, newPrefix); // recursive callback as long as there is new directory.
                }
            }
        } 
        if(nodeSelect === true){
            if (file){
                console.log(prefix + (index === files.length - 1 ? '└── ' : '├── ') + file);
                if (isDirectory) {
                    const newPrefix = prefix + (index === files.length - 1 ? '    ' : '│   ');
                    printTree(filePath, newPrefix);
                }
            }
        }
    });
}