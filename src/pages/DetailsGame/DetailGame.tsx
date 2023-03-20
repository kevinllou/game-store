import './DetailGame.scss';
import { useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { IDetailGame } from '../../interfaces/IDetailGame';
import { ENDPOINTS } from '../../constants/endpoints';
import Spinner from '../../components/Spinner/Spinner';

export default function DetailGame() {
	const { id } = useParams();
	const { state, data, error } = useFetch<IDetailGame>(`${ENDPOINTS.GET_GAME_BY_ID}/${id}?key=${process.env.REACT_APP_API_KEY}`);

	if (state === 'loading') return <Spinner />;
	if (error) return <p style={{ color: 'white' }}>There was an error</p>;
	return (
		<section className="detail">
			<div className="detail__card">
				<div className="detail__cardImg">
					<img src={data?.background_image} alt={data?.name} />
				</div>
				<div className="detail__cardBody">
					<div className="detail__cardBodyInfo">
						<p className='detail__cardBodyTitle'>{data?.name}</p>
						<p className='detail__released'>Realesed: <span>{data?.released}</span></p>
						<p className='detail__cardDescription'>{data?.description_raw}</p>
					</div>
					<div className="detail__cardBodyBottom">
						<span>{data?.rating}<i className="fa-sharp fa-solid fa-star"></i> </span>
					</div>
				</div>
			</div>
		</section >

	);
}
