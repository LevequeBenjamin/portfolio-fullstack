import React from 'react';

import Presentation from '../components/Presentation';
import Parcours from '../components/Parcours';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';

const Home = () => {
	return (
		<main>
			<div id="presentation" className="presentation-container">
				<Presentation />
			</div>
			<div id="parcours" className="parcours-container">
				<Parcours />
			</div>
			<div id="portfolio" className="portfolio-container">
				<Portfolio />
			</div>
			<div id="contact" className="contact-container">
				<Contact />
			</div>
		</main>
	);
};

export default Home;
