// ******************** App.js ******************** //

// imports
import React, { useEffect, useState } from 'react';
import Routes from './components/Routes';
import { UidContext } from './components/AppContext';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { getUser } from './actions/user.actions';

/* ******************** App ******************** */
const App = () => {
	const [uid, setUid] = useState(null);
	const dispatch = useDispatch();

	useEffect(() => {
		const fetchToken = async () => {
			await axios({
				method: 'get',
				url: 'https://api-benjamin-codeur.herokuapp.com/jwtid',
				withCredentials: true,
			})
				.then(res => {
					setUid(res.data);
				})
				.catch(err => console.log('No token'));
		};
		fetchToken();

		if (uid) dispatch(getUser(uid));
	}, [uid, dispatch]);

	return (
		<UidContext.Provider value={uid}>
			<Routes />
		</UidContext.Provider>
	);
};
/* ******************** App end ******************** */

// export
export default App;
