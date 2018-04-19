let notes = [{
    id: 1,
    title: 'Note 1',
    content: '# This is note 1'
},
{
    id: 2,
    title: 'Note 2',
    content: '# This is note 2'
}];

const getNotes = () => {
    return notes
}

const getNote = (id) => {
    let newNotes = notes.filter(note => note.id == id)
    if(newNotes.length > 0) {
        return newNotes[0]
    }
    
    return null
}

const addOrUpdateNote = (id, note) => {
    // First, delete old note.
    notes = notes.filter(note => note.id != id)

    // Add updated note.
    notes.push(note)
}

export { getNotes, getNote, addOrUpdateNote }