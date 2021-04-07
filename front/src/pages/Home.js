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
			<div className='project-title'>
				<h3>Mon portfolio</h3>
				<p>
					Durant mon apprentissage j'ai effectué quelques travaux.
				</p>
			</div>
				<Portfolio />
			</div>
			<div id="contact" className="contact-container">
				<div className='title-contact'>
				<h2>Contactez-moi</h2>
				<p>Mon profil vous intéresse et vous avez un poste à me proposer, ou tout simplement dire bonjour?</p>
				</div>
				<Contact />
			</div>
		</main>
	);
};

export default Home;
