// ******************** pages/Admin.js ******************** //

// imports
import React, { useContext } from 'react';
import { UidContext } from '../components/AppContext';
import SignInForm from '../components/Log/SignInForm';
import NewProject from '../components/projects/NewProject';

/* ******************** Admin ******************** */
const Admin = () => {
	// id de l'utilisateur connecté
	const uid = useContext(UidContext);
	return (
		<div className="admin-container">
			{uid ? (
				<div className="new-project-container">
					<NewProject />
				</div>
			) : (
				<div className="connection-form">
					<SignInForm />
				</div>
			)}
		</div>
	);
};
/* ******************** Admin end ******************** */

//export
export default Admin;
