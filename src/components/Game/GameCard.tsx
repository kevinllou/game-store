import IGames from '../../interfaces/IGames';
import { Link } from 'react-router-dom';
export default function GameCard({ id, background_image, name }: IGames) {
	return (
		<Link to={`/games/${id.toString()}`}>
			<article className="cards__gridItems">
				<div className="cards__gridItemsImg">
					<img src={background_image} alt={name} />
				</div>
				<p>{name}</p>
			</article>
		</Link>
	);
}
