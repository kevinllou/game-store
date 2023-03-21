import { useEffect, useState } from 'react';
import { ENDPOINTS } from '../constants/endpoints';
import { IUsers } from '../interfaces/IUsers';
import { useFetch } from './useFetch';

interface IAuth{
    isAuthenticated: boolean;
    userInformation: object;
}
const useAuth = () => {
	const key = localStorage.getItem('auth') || null;
	const [auth, setAuth] = useState<null | IAuth >();
	const { data} = useFetch<IUsers[]>(`${ENDPOINTS.GET_USERS}`);
    
	const logout = () => {
		setAuth(null);
		localStorage.clear();
	};

	const login = (emailUser: string | undefined, passwordUser: string | undefined) => {
		let success = false;
		const userInformation = data?.filter(({email, password})=> email === emailUser && password === passwordUser);
		if(userInformation){
			setAuth({ isAuthenticated: true, userInformation });
			success = true;
		}
		return success;
	};
	useEffect(() => {
		if (auth && !key) {
			localStorage.setItem('auth', JSON.stringify(auth));
		}
	}, [auth]);
	useEffect(() => {
		if (key) setAuth(JSON.parse(key));
	}, [key]);
	return { auth, login, logout };

};

export default useAuth;
