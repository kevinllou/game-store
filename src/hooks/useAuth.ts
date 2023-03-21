import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../constants/endpoints';
import { IAuth } from '../interfaces/IAuth';
import { IUsers } from '../interfaces/IUsers';
import { useFetch } from './useFetch';
import useLocalStorage from '../hooks/useLocalStorage';
const useAuth = () => {
	const [authKeyLocalStorage, setAuthKeyLocalStorage] = useLocalStorage('auth', '');
	const [auth, setAuth] = useState<null | IAuth>();
	const { data } = useFetch<IUsers[]>(`${ENDPOINTS.GET_USERS}`);

	const logout = () => {
		setAuth(null);
		localStorage.clear();
	};

	const login = (emailUser: string | undefined, passwordUser: string | undefined) => {
		let stateOfLogin = false;
		const userInformation = data?.filter(({ email, password }) => email === emailUser && password === passwordUser);
		if (userInformation && userInformation?.length > 0) {
			setAuth({ isAuthenticated: true, userInformation });
			stateOfLogin = true;
		}
		return stateOfLogin;
	};
	useEffect(() => {
		if (auth && !authKeyLocalStorage) {
			setAuthKeyLocalStorage(JSON.stringify(auth));
		}
	}, [auth]);
	useEffect(() => {
		if (authKeyLocalStorage) setAuth(JSON.parse(authKeyLocalStorage));
	}, [authKeyLocalStorage]);
	return { auth, login, logout };

};

export default useAuth;
