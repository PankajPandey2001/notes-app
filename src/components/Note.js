import { MdDelete } from 'react-icons/md';

const Note = ( {text , date }) => {
	return (
		<div className='note'>
			<span>{text}</span>
			<div className='note-footer'>
				<small>{date}</small>
				<MdDelete/>
			</div>
		</div>
	);
};

export default Note;