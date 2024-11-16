import { MdDelete } from 'react-icons/md';

const Note = () => {
	return (
		<div className='note'>
			<span>text</span>
			<div className='note-footer'>
				<small>data</small>
				<MdDelete/>
			</div>
		</div>
	);
};

export default Note;