// ******************** components/Log/Logout.js ******************** //

// imports
import React from 'react';
import axios from 'axios';
import cookie from 'js-cookie';

/* ******************** Logout ******************** */
const Logout = () => {
	// fonction qui supprime le cookie
	const removeCookie = key => {
		if (window !== 'undefined') {
			// on fait expirer le cookie a 1 milliseconde
			cookie.remove(key, { expires: 1 });
		}
	};

	// fonction qui permtet de se déconnecter
	const logout = async () => {
		// methode get
		await axios({
			method: 'get',
			url: 'http://localhost:5000/api/user/logout',
			withCredentials: true,
		})
			// on supprime le cookie jwt
			.then(() => removeCookie('jwt'))
			.catch(err => console.log(err));

		// on actualise la page
		window.location = '/';
	};

	return (
		<li onClick={logout}>
			<img src="./img/icons/logout.svg" alt="logout" />
		</li>
	);
};
/* ******************** Logout end ******************** */

// export
export default Logout;
