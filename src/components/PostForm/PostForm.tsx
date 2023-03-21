import { useRef, useState } from 'react';
import { ENDPOINTS } from '../../constants/endpoints';
import { IUsers } from '../../interfaces/IUsers';
import './PostForm.scss';

interface PostProps {
	gameId: string | undefined;
	userInformation: IUsers[] | null | undefined;
}
export default function PostForm({ gameId, userInformation }: PostProps) {
	const postRef = useRef<HTMLTextAreaElement | null>(null);
	const [stateOfPost, setStateOfPost] = useState<boolean | null>(null);
	const handleSubmit = async (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		if (postRef.current?.value !== '') {
			try {
				setStateOfPost(false);
				await fetch(`${ENDPOINTS.GET_COMMENTS}`, {
					method: 'POST',
					body: JSON.stringify({ userId: userInformation && userInformation[0].id, gameId: gameId, comment: postRef.current?.value }),
					headers: {
						'Accept': 'application/json',
						'Content-Type': 'application/json'
					},
				});
				setStateOfPost(true);
			} catch (error) {
				throw Error('Something went wrong');
				setStateOfPost(false);
			}
		}
	};
	return (
		<form className="form" onClick={handleSubmit}>
			<textarea name="comment" id="comment" placeholder='Leave a comment ...' ref={postRef} />
			<div className="form__button">
				<button type="submit">Post</button>
			</div>
			{stateOfPost === false && <p style={{ color: 'white' }}>Sending...</p>}
			{stateOfPost === true  && <p style={{ color: 'white' }}>Sent. Refresh the page</p>}
			
		</form>
	);
}
