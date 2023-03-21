
import './PostForm.scss';
export default function PostForm() {
	return (
		<form className="form">
			<textarea name="comment" id="comment" placeholder='Leave a comment ...'/>
			<div className="form__button">
				<button type="submit">Post</button>
			</div>
		</form>
	);
}
