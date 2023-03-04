const fs = require('fs').promises;

//czytanie pliku
const readFile = async () => { 
    const data = await fs.readFile("./exampleFile.txt")
    const parsedData = data.toString();
    console.log(parsedData)
}

//zapis pliku
const saveFile = async () => {
    const dataToSave = "Some example data to save";
    await fs.writeFile('./newFile.txt', dataToSave);
}

saveFile();