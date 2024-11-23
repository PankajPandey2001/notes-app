import { useState } from 'react';
import NotesList from './components/NotesList'

import { FaSearch } from "react-icons/fa";

import {nanoid} from 'nanoid'



const App = () => {  // function name should be in caps as well as name of js file also ; 
  
  const[notes, setNotes] = useState([])  ; 
  

  const[search , setSearch] = useState('') ; 



  const[darkMode , setDarkMode] = useState(false) ; // this is for toggling thee mode from light to dark ; 

  const handleToggle = () => {


    console.log(darkMode);
     setDarkMode(!darkMode) ; 
   console.log(darkMode) ; 

     
  }



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

// to dynamically give a classname to an element ; 



    <div className={ darkMode ? 'dark-mode' : 'no'}  >  


   
    <div className="container">
      

        <header  >
            <h1> Notes App</h1>

            <button  onClick={handleToggle} className='toggle-button'> Toggle </button>
        </header>

     <div className='search'>
     <FaSearch />
      <input className='search-input' placeholder='Type to search...' value={search} onChange={(event) => setSearch(event.target.value)} ></input>
           
      </div>
       
       <NotesList notes = {notes.filter((note) => note.text.includes(search))} addNote = {addNote}  deleteNote = {deleteNote}/>

    </div>


    </div>
  )
  ; 
}

export default App ; 