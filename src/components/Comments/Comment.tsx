import { ENDPOINTS } from '../../constants/endpoints';
import { useFetch } from '../../hooks/useFetch';
import { IComments } from '../../interfaces/IComments';
import { IUsers } from '../../interfaces/IUsers';
import Spinner from '../Spinner/Spinner';

interface CommentProps {
	gameId: string | undefined;
}
export default function Comment({ gameId }: CommentProps) {
	const { state: stateComments, data: comments, error: errorComments } = useFetch<IComments[]>(`${ENDPOINTS.GET_COMMENTS}?gameId=${gameId}`);
	const { state: stateUsers, data: users, error: usersError } = useFetch<IUsers[]>(`${ENDPOINTS.GET_USERS}`);

	if (stateComments === 'loading' && stateUsers === 'loading') return <Spinner />;
	if (errorComments && usersError) return <p style={{ color: 'white' }}>There was an error</p>;
	return (
		<div className="detail__comments">
			<h1>Comments</h1>

			{comments?.map(({ userId, comment }, id) => {
				return (
					<div className="detail__commentsBody" key={id}>
						<div className="detail__commentBodyUserInfo">
							<i className="fa-solid fa-user"></i>
						</div>
						<div className="detail__commentsUser">
							{users?.map(({ id, name }) => {
								if (userId === id) {
									return <p key={id}>{name} </p>;
								}
							})}
							<p>{comment}</p>
						</div>
					</div>
				);
			})}
		</div>
	);
}
