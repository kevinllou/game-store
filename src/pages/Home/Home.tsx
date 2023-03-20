import Game from '../../components/Game/Game';
import Hero from '../../components/HomeUI/Hero';
import './Home.scss';

export default function Home() {
	return (
		<>
			<Hero />
			<Game title='MORE POPULARS'  isFiltered={true} isPaginated={false} />
		</>
	);
}
