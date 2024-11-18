import { useState } from 'react';
import NotesList from './components/NotesList'

const App = () => {  // function name should be in caps as well as name of js file also ; 
  
  const[notes, setNotes] = useState([])  ; 

   const addNote = (notetext) => {
       

    // now we have text of note , par date nhi hai toh date bana do fir dal do 
     
    const date = new Date() ; 

        const note = {
           text : notetext ,
           date : date.toLocaleDateString()
        } ; 

        const newNotes = [...notes , note] ; // now see humne is line mein kya kiya  , jo phle notes ki list thi (notes)
        // usko mangaya , by ading three .  then comma lagake current note jod do 

        // ab setNotes se notes ko update kar do 

        setNotes(newNotes) ; 

   }


  return (

    <div className="container">
       
       <NotesList notes = {notes} addNote = {addNote}/>

    </div>
  )
  ; 
}

export default App ; 