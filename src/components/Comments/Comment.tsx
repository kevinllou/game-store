import { ENDPOINTS } from '../../constants/endpoints';
import { useFetch } from '../../hooks/useFetch';
import { IComments } from '../../interfaces/IComments';
import Spinner from '../Spinner/Spinner';

interface CommentProps {
    gameId: string | undefined;
}
export default function Comment({ gameId }: CommentProps) {
	const { state, data, error } = useFetch<IComments[]>(`${ENDPOINTS.GET_COMMENTS}?gameId=${gameId}`);

	if (state === 'loading') return <Spinner />;
	if (error) return <p style={{ color: 'white' }}>There was an error</p>;
	return (
		<div className="detail__comments">
			<h1>Comments</h1>

			{data?.map(({ userId, comment }, id) => {
				return (
					<div className="detail__commentsBody" key={id}>
						<div className="detail__commentBodyUserInfo">
							<p>{userId} <i className="fa-solid fa-user"></i></p>
						</div>
						<p>{comment}</p>
					</div>
				);
			})}
		</div>
	);
}
