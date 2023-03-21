import { useRef } from 'react';
import './Login.scss';

interface LoginProps {
    login: (emailValue: string | undefined, passwordValue: string | undefined) => boolean;
}
export default function Login({ login }: LoginProps) {
	const emailRef = useRef<HTMLInputElement | null>(null);
	const passwordRef = useRef<HTMLInputElement | null>(null);


	const handleSubmit = (e: React.FormEvent<EventTarget>): void => {
		e.preventDefault();
		const success = login(emailRef.current?.value, passwordRef.current?.value);
		if (!success) {
			/* alert('Email and password incorrect'); */
		}
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
				<button type="submit">Login</button>
			</form>

		</section>
	);
}
