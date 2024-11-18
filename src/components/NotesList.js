import Note from './Note' ; 
 
import NewNote from './NewNote' ; 

const NotesList = ( {notes , addNote}) => {

    return (

        <div className="note-list">

            {/* <Note/>     now we wont render components like this becuase we want to add components dynamically ; 
            <Note/>         so we need to run loop for it ; 
            <Note/> */} 

           {
             notes.map( (note) => (

                <Note text = {note.text} date = {note.date}/>

             )) 


            }


            <NewNote addNote = {addNote}/>

        


        </div>
    ) ; 


}

export default NotesList ; 