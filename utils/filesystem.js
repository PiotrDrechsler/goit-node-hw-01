const fs = require('fs').promises;

//czytanie pliku
const readFile = async () => { 
    const data = await fs.readFile("./exampleFile.txt")
    return data.toString();
}

//zapis pliku
const saveFile = async (filename) => {
    const dataToSave = "Some example data to save";
    await fs.writeFile('filename', dataToSave);
}

//polaczenie dwoch operacji
const transaction = async () => {
    const fileName = await readFile()
    await saveFile(fileName);
}

//dodanie do pliku 
const addToFile = async() =>{
    await fs.appendFile("./newFile.txt", "Some new Data")
}

//przeczytac zawartosc pliku
const readDir = async () => {
    const files =  await fs.readdir('./')
    console.log(files);
}

module.exports = {
readFile,
saveFile,
addToFile,
readDir
}