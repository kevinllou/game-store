import IGames from '../../interfaces/IGames';
export default function GameCard({ background_image, name }: IGames) {
	return (
		<article className="cards__gridItems">
			<div className="cards__gridItemsImg">
				<img src={background_image} alt={name} />
			</div>
			<p>{name}</p>
		</article>
	);
}
