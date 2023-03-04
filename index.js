const fs = require('fs').promises;

//czytanie pliku
const readFile = async () => { 
    const data = await fs.readFile("./exampleFile.txt")
    const parsedData = data.toString();
    console.log(parsedData)
}

readFile();