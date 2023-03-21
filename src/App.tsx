import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import RootComponent from './components/Root/RootComponent';
import Home from './pages/Home/Home';
import DetailGame from './pages/DetailsGame/DetailGame';
import Games from './pages/Games/Games';
import { ROUTES } from './routes/routes';
function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.ROOT} element={<RootComponent />}>
					<Route index element={<Home />} />
					<Route path={ROUTES.GAMES} element={<Games />} />
					<Route path={ROUTES.GAMES_ID} element={<DetailGame />} />
				</Route>

			</Routes>
		</BrowserRouter>
	);
}

export default App;
