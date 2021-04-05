// ******************** components/Routes/index.js ******************** //

// imports
import React from 'react';
import {
	BrowserRouter as Router,
	Redirect,
	Route,
	Switch,
} from 'react-router-dom';
import Home from '../../pages/Home';
import Admin from '../../pages/Admin';
import Navbar from '../Navbar';
import Footer from '../Footer';

/* ******************** index ******************** */
const index = () => {
	return (
		<Router>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/admin" exact component={Admin} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</Router>
	);
};
/* ******************** index end ******************** */

// export
export default index;
