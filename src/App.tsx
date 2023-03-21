import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';
import RootComponent from './components/Root/RootComponent';
import Home from './pages/Home/Home';
import DetailGame from './pages/DetailsGame/DetailGame';
import Games from './pages/Games/Games';
import { ROUTES } from './routes/routes';
import ProtectedRoute from './routes/ProtectedRoute';
import useAuth from './hooks/useAuth';
import Login from './pages/Login/Login';
function App() {
	const { auth, login, logout } = useAuth();
	return (
		<BrowserRouter>
			<Routes>
				<Route path={ROUTES.ROOT} element={<RootComponent {...auth} logout={logout} />}>
					<Route index element={<Home />} />
					<Route path={ROUTES.GAMES} element={<Games />} />
					<Route path={ROUTES.LOGIN} element={<Login login={login}/>} />
					<Route element={<ProtectedRoute auth={auth} redirectPath={`${ROUTES.LOGIN}`} />}>
						<Route path={ROUTES.GAMES_ID} element={<DetailGame />} />
					</Route>
				</Route>

			</Routes>
		</BrowserRouter>
	);
}

export default App;
