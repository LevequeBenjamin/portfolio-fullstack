// ******************** components/Log/SignInForm.js ******************** //

// imports
import React, { useState } from 'react';
import axios from 'axios';

/* ******************** SignInForm ******************** */
const SignInForm = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [masked, setMasked] = useState(false);
	const [typeInput, setTypeInput] = useState('password');

	const mask = () => {
		setMasked(false);
		setTypeInput('password');
	};

	const unMask = () => {
		setMasked(true);
		setTypeInput('text');
	};

	// fonction qui permet de se connecter
	const handleLogin = e => {
		e.preventDefault();
		const emailError = document.querySelector('.email.error');
		const passwordError = document.querySelector('.password.error');

		// methode post, on passe email et password en data
		axios({
			method: 'post',
			url: 'https://api-benjamin-codeur.herokuapp.com/api/user/login',
			withCredentials: true,
			data: {
				email,
				password,
			},
		})
			.then(res => {
				console.log(res);
				// on attrape les erreurs et on les affiche
				if (
					res.data.errorEmail ||
					res.data.errorPassword ||
					res.data.errorBrute
				) {
					if (res.data.errorEmail) {
						emailError.innerHTML = res.data.errorEmail;
						passwordError.innerHTML = '';
					}
					if (res.data.errorPassword) {
						passwordError.innerHTML = res.data.errorPassword;
						emailError.innerHTML = '';
					}
					if (res.data.errorBrute) {
						passwordError.innerHTML = res.data.errorBrute;
						emailError.innerHTML = '';
					}
				} else {
					// on actualise la page
					window.location = '/';
				}
			})
			.catch(error => {
				console.log(error);
			});
	};

	return (
		<form action="" onSubmit={handleLogin} id="sign-up-form">
			<label htmlFor="email">Email</label>
			<br />
			<input
				type="text"
				name="email"
				id="email"
				onChange={e => setEmail(e.target.value)}
				value={email}
			/>
			<div className="email error"></div>
			<br />
			<div className="password-container">
				<label htmlFor="password">Mot de passe</label>
				<br />
				<input
					type={typeInput}
					name="password"
					id="password"
					onChange={e => setPassword(e.target.value)}
					value={password}
				/>
				{masked === true && <i className="fas fa-eye" onClick={mask}></i>}
				{masked === false && (
					<i className="fas fa-eye-slash" onClick={unMask}></i>
				)}
			</div>
			<div className="password error"></div>
			<br />
			<input type="submit" value="Se connecter" />
		</form>
	);
};
/* ******************** SignInForm end ******************** */

// export
export default SignInForm;
