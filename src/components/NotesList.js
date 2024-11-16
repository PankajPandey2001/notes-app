import Note from './Note' ; 
 
import NewNote from './NewNote' ; 

const NoteList = () => {

    return (

        <div className="note-list">

            {/* <Note/>     now we wont render components like this becuase we want to add components dynamically ; 
            <Note/>         so we need to run loop for it ; 
            <Note/> */} 

            <Note text = {"add"} date = {"add"}/>


            <NewNote/>

        </div>
    ) ; 


}

export default NoteList ; 