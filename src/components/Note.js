import { MdDelete } from 'react-icons/md';

const Note = ( {text , date ,id , deleteNote}) => {

    const handleDelete = () =>{
        deleteNote(id) ; 
    }


	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDelete  className='delete-icon' onClick={handleDelete}/>
			</div>
		</div>
	);
};

export default Note;