import Game from '../../components/Game/Game';
import './Games.scss';

export default function Games() {
	return <Game title='ALL GAMES' isFiltered={false} isPaginated={true} />;
}
