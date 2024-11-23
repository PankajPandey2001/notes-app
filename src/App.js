import { useState } from 'react';
import NotesList from './components/NotesList'

import { FaSearch } from "react-icons/fa";

import {nanoid} from 'nanoid'

const App = () => {  // function name should be in caps as well as name of js file also ; 
  
  const[notes, setNotes] = useState([])  ; 
  

  const[search , setSearch] = useState('') ; 

  const deleteNote = (id)  => {

    setNotes(notes.filter(note => note.id != id) ); 

  }

   const addNote = (notetext) => {
       

    // now we have text of note , par date nhi hai toh date bana do fir dal do 
     
    const date = new Date() ; 

    //  const id = new n


    const id = nanoid() ;


        const note = {
 

           id : id ,
           
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


     <div className='search'>
     <FaSearch />
      <input className='search-input' placeholder='Type to search...' value={search} onChange={(event) => setSearch(event.target.value)} ></input>
           
      </div>
       
       <NotesList notes = {notes.filter((note) => note.text.includes(search))} addNote = {addNote}  deleteNote = {deleteNote}/>

    </div>
  )
  ; 
}

export default App ; 