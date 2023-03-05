const fs = require("fs").promises;
const path = require('node:path');


const contactsPath = path.resolve("./db/contacts.json");

const fetchContacts = async () => {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
};

const listContacts = async () => {
  const contacts = await fetchContacts();
  console.table(contacts);
  return; 
};
  
const getContactById = async (id) => {
  const contacts = await fetchContacts();
  const contact = contacts.find((contact) => contact.id === id);
  console.log(contact);
  return;
};
  
async function removeContact(id) {
  try {
    const contacts = await fetchContacts();
    const updatedContacts = contacts.filter(contact => contact.id !== id);
    await fs.writeFile(contactsPath, JSON.stringify(updatedContacts));
    console.log(`Contact with id ${id} has been removed.`);
  } catch (error) {
    console.error(error);
  }
}
  
  function addContact(name, email, phone) {
    // ...twój kod
  }

module.exports = {
  listContacts,
  getContactById,
  removeContact,
};