import { useState } from 'react';
import NotesList from './components/NotesList'

const App = () => {  // function name should be in caps as well as name of js file also ; 
  
  const[notes, setNotes] = useState([])  ; 

   const addNote = (notetext) => {
       
        const note = {
           text : notetext ,
           
        }

   }


  return (

    <div className="container">
       
       <NotesList notes = {notes} addNote = {addNote}/>

    </div>
  )
  ; 
}

export default App ; 