// ******************** components/Parcours.js ******************** //

// imports
import React from 'react';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import LightSpeed from 'react-reveal/LightSpeed';
import Bounce from 'react-reveal/Bounce';

/* ******************** Parcours ******************** */
const Parcours = () => {
	return (
		<div className="parcours-center">
			<Bounce cascade>
				<div className="parcours-description">
					<h3>Mon parcours</h3>
					<p>
						Actuellement en reconversion professionnelle, je me suis découvert
						une passion pour le web. Je viens de valider ma formation{' '}
						<a
							title="Voir la formation"
							href="https://openclassrooms.com/fr/paths/185-developpeur-web"
							target="_blank"
							rel="noopener noreferrer"
						>
							Développeur Web
						</a>{' '}
						avec{' '}
						<a
							title="Aller vers le site"
							href="https://openclassrooms.com/fr/"
							target="_blank"
							rel="noopener noreferrer"
						>
							Openclassrooms
						</a>
						. Je suis actuellement la formation{' '}
						<a
							title="Voir la formation"
							href="https://openclassrooms.com/fr/paths/322-developpeur-dapplication-python"
							target="_blank"
							rel="noopener noreferrer"
						>
							Développeur d'application Python / Django
						</a>
						. Par la suite, j'aimerais poursuivre avec le parcours
						<a
							title="Voir la formation"
							href="https://openclassrooms.com/fr/paths/414-administrateur-infrastructure-et-cloud"
							target="_blank"
							rel="noopener noreferrer"
						>
							{' '}
							Administrateur infrastructure et cloud
						</a>{' '}
						en <strong>alternance</strong> au alentour d'Annecy.
					</p>
				</div>
			</Bounce>
			<div className="parcours-schema">
				<Fade left>
					<div className="parcours-schema-description">
						<i className="fas fa-graduation-cap"></i>
						<h4>1. Autodidacte</h4>
						<p>
							Je forge mon apprentissage par l'expérience, quand j'ai du temps
							libre je passe en mode veille technologique
						</p>
					</div>
				</Fade>
				<Bounce>
					<div className="parcours-schema-description">
						<i className="fas fa-network-wired"></i>

						<h4>2. Ma mission</h4>
						<p>
							Imaginer, concevoir puis programmer des projets web en proposant
							des solutions techniques et automatisées.
						</p>
					</div>
				</Bounce>
				<Fade right>
					<div className="parcours-schema-description">
						<i className="fas fa-briefcase"></i>
						<h4>3. Alternance</h4>
						<p>
							Je recherche une alternance pour un poste d'administrateur
							infrastructure et cloud. Début d'année 2022.
						</p>
					</div>
				</Fade>
			</div>

			<div className="icons">
				<p>
					--------------------
					<Typical
						steps={['javascript', 1000, 'nodejs', 1000, 'python', 1000]}
						loop={Infinity}
						wrapper="b"
					/>
					-------------------
				</p>
				<LightSpeed right>
					<div>
						<i className="fab fa-js-square"></i>
						<i className="fab fa-node-js"></i>
						<i className="fab fa-python"></i>
					</div>
				</LightSpeed>
			</div>
		</div>
	);
};
/* ******************** parcours end ******************** */

// export
export default Parcours;
