import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

interface LoginProps {
	login: (emailValue: string | undefined, passwordValue: string | undefined) => boolean;

}

export default function Login({ login }: LoginProps) {
	const [loginState, setLoginState] = useState<boolean>(true);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);
	const navigate = useNavigate();
	
	const handleSubmit = (e: React.FormEvent<EventTarget>) => {
		e.preventDefault();
		const stateOfLogin = login(emailRef.current?.value, passwordRef.current?.value);
		if (!stateOfLogin) {
			setLoginState(false);
			return;
		}
		navigate(-1);
	};
	return (
		<section className="login">

			<h1>Welcome to E-GAMES</h1>
			<form className="login__form" onSubmit={handleSubmit}>
				<div className="login__inputGroup">
					<label htmlFor="email">Email</label>
					<input type="text" placeholder='Email' name='email' id="email" ref={emailRef} />
				</div>
				<div className="login__inputGroup">
					<label htmlFor="password">Password</label>
					<input type="password" placeholder='Password' name='password' id='password' ref={passwordRef} />
				</div>
				{!loginState && <p style={{ color: 'white' }}>Email or password incorrect. Try again</p>}
				<button type="submit">Login</button>
			</form>

		</section>
	);
}
