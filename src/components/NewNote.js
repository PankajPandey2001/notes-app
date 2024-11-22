import { useState } from 'react';
import { MdDelete } from 'react-icons/md';

const NewNote = ({addNote }) => {


    const[noteText , setNoteText] = useState('');

    const handleChange = (e) =>{

       setNoteText(e.target.value) ; 


    }


    const handleClick =() =>{ // this is to add this new note in js project ; 

        if(noteText.length  > 0 )
        addNote(noteText) ; 


        // now jab tak niche wali line nhi likhi thi toh jo ek baar likh diya wo hi rh ja ra tha so 
        // once added we need to again make noteText empty 

        setNoteText('') ; 
    }


      return (


        // do classname isliye likhe hain taaki note wali css property toh rahe hi saath mein new property bhi 
        // add kar sakein ; 


        <div className='note new'>  
			
           <textarea className='text' placeholder='Write to make note '
              rows='8' cols='10' 
              value={noteText} 
              onChange={handleChange}

           >
                
           </textarea>

			<div className='note-footer'>
				<small> {200-noteText.length} characters remainig</small>
				<button className='save' onClick={handleClick}>

                    save
                </button>
			</div>
		</div>
      ) ; 


}


export default NewNote ; 