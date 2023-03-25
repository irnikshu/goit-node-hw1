// const yargs = require("yargs");
// const { hideBin } = require("yargs/helpers")
const {Command}= require("commander")

const contacts = require('./contacts');

const invokeAction = async({action, id, name, email, phone}) => { 
    switch (action) {
        case "list":
            const allContacts = await contacts.listContacts();
            return console.log(allContacts);
        case "get":
            const oneContact = await contacts.getContactById(id);
            return console.log(oneContact);
        case "add":
            const newContact = await contacts.addContact({ name, email, phone });
            return console.log(newContact)
        case "remove":
            const deleteContact = await contacts.removeContact(id)
            return console.log(deleteContact);
    }
}

// invokeAction({ action: "list" })
// invokeAction({ action: "readById", id: "AeHIrLTr6JkxGE6SN-0Rw" })
// invokeAction({ action: "add", name: "Bill Gaits", email:"bill.ante@vestibul.co.uk", phone:"(294) 840-6686" })
// invokeAction({ action: "deleteById", id: "2Djd10bYFb_W1pp0BbMU2"})

// const arr = hideBin(process.argv);
// const { argv } = yargs(arr)
// invokeAction(argv) 

const program = new Command();

program
     .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

invokeAction(argv);