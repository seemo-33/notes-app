const fs = require('fs')
const chalk = require('chalk')



//Add Notes
const addNote = (title,body) => {
    const notes = loadNotes()
    //const duplicatenotes = notes.filter((note) => note.title === title )
    const duplicateNote = notes.find((note) => note.title === title )
    // const duplicatenotes = notes.filter (function(note){
    //     return note.title = title
    // })
    
    if (!duplicateNote){

    
        notes.push({
            title: title,
            body: body
        })
    
        saveNotes(notes)
        console.log(chalk.green.inverse('New node added'))
    }else {
        console.log(chalk.red.inverse('Note title already exists'))
    }
}

//Removes note
const removeNote = (title) => {
    const notes = loadNotes()
    const keepNotes = notes.filter((note) => note.title !== title )
    // const keepNotes = notes.filter(function (note) {
    //     return note.title !== title
    // })
    if(notes.length > keepNotes.length){        
        console.log(chalk.green.inverse('Note Removed with title: ' + title))
    }else{
        console.log(chalk.red.inverse('No node found with title: ' + title)) 
    }
    saveNotes(keepNotes)
}

const listNotes = () => {
    const notes = loadNotes()
    console.log(chalk.blue.inverse.bold('Your Notes......'))
    notes.forEach((note) => { 
        console.log(chalk.yellow.bold(note.title))
    })

}

//Read notes
const readNotes = (title) => {
    const notes = loadNotes()
    const noteExist = notes.find((note) => note.title === title)

    if(noteExist) {
        console.log(chalk.bold.blue(noteExist.title))
        console.log(noteExist.body)
    }else{
        console.log(chalk.red('No Note Found!'))
    }

}

//Save notes
const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

//Load Notes
const loadNotes = () => {
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch(e){
        return []
    }
}


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNotes: readNotes
}