// ******************** pages/Home.js ******************** //

// imports
import React from 'react';
import Fade from 'react-reveal/Fade';
import Presentation from '../components/Presentation';
import Parcours from '../components/Parcours';
import Portfolio from '../components/Portfolio';
import Contact from '../components/Contact';
import { NavLink } from 'react-router-dom';
import Jump from 'react-reveal/Jump';

/* ******************** Home ******************** */
const Home = () => {
	return (
		<main>
			<section id="presentation" className="presentation-container">
				<Presentation />
			</section>
			<section id="parcours" className="parcours-container">
				<Parcours />
			</section>
			<section id="portfolio" className="portfolio-container">
				<Fade bottom cascade>
					<div className="project-title">
						<h3>Mon portfolio</h3>
						<p>Durant mon apprentissage j'ai effectué quelques travaux.</p>
					</div>
				</Fade>
				<Portfolio />
				<Jump>
					<div className="button-container">
						<NavLink to="/project" exact>
							<span className="button">voir tous les projets</span>
						</NavLink>
					</div>
				</Jump>
			</section>

			<section id="contact" className="contact-container">
				<Fade bottom cascade>
					<div className="title-contact">
						<h3>Contactez-moi</h3>
						<p>
							Mon profil vous intéresse et vous avez un poste à me proposer, ou
							tout simplement dire bonjour?
						</p>
					</div>
				</Fade>
				<Contact />
			</section>
		</main>
	);
};
/* ******************** Home end ******************** */

// export
export default Home;
