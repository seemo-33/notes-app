
const { argv } = require('yargs')
const yargs = require('yargs')
const notes = require('./notes.js')
const noteops = require('./notes.js')

//customise yargs version
yargs.version('1.1.0')

//create add command
yargs.command({
    command: 'add',  //Command name
    describe: 'Add a new Note',  //command description
    builder:{               //specify the command's option
        title: {            //title of the note
            describe: 'Note Title',   //title description
            demandOption: true,       //making it required field
            type: 'string'            //mentioning the type of the title
        },
        body: {                      //body of the note
            describe: 'Note Body',   //Body description
            demandOption: true,       //making it required field
            type: 'string'            //mentioning the type of the body
        }
    },
    //command's fuctionality
    handler(argv) {
        noteops.addNote(argv.title,argv.body)
    } 
})

//create a remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteops.removeNote(argv.title)
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'Listing out the notes',
    handler(){
        noteops.listNotes()
    }
})


//create a read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        noteops.readNotes(argv.title)
    }
})


// console.log(yargs.argv)
yargs.parse()

