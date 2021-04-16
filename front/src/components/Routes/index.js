// ******************** components/Routes/index.js ******************** //

// imports
import React from 'react';
import { HashRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from '../../pages/Home';
import Admin from '../../pages/Admin';
import ProjectPage from '../../pages/ProjectPage';
import Navbar from '../Navbar';
import Footer from '../Footer';
import ContactPage from '../../pages/ContactPage';

/* ******************** index ******************** */
const index = () => {
	return (
		<HashRouter>
			<Navbar />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/project" exact component={ProjectPage} />
				<Route path="/contact" exact component={ContactPage} />
				<Route path="/admin" exact component={Admin} />
				<Redirect to="/" />
			</Switch>
			<Footer />
		</HashRouter>
	);
};
/* ******************** index end ******************** */

// export
export default index;
