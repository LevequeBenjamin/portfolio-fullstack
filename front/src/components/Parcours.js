import React from 'react';
import Typical from 'react-typical';

const Parcours = () => {
	return (
		<div className="parcours-center">
			<div className="parcours-description">
				<h3>Mon parcours</h3>

				<p>
					Après avoir terminé la formation de développeur web d'Openclassrooms,
					j'ai été pris de passion pour le back-end. C'est pour cela que je suis
					actuellement la formation de développeur d'application python /
					django. Après cette formation j'aimerais poursuivre avec une formation
					d'administrateur infrastructure et cloud en alternance au alentour
					d'Annecy.
				</p>
			</div>
			<div className="parcours-schema">
				<div className="parcours-schema-description">
					<i class="fas fa-graduation-cap"></i>
					<h4>1. Autodidacte</h4>
					<p>
						Je forge mon apprentissage par l'expérience, quand j'ai du temps
						libre je passe en mode veille technologique
					</p>
				</div>
				<div className="parcours-schema-description">
				<i class="fas fa-network-wired"></i>

					<h4>2. Ma mission</h4>
					<p>
						Imaginer, concevoir puis programmer des projets web en proposant des
						solutions techniques et automatisées.
					</p>
				</div>

				<div className="parcours-schema-description">
			
					<i class="fas fa-briefcase"></i>
					<h4>3. Alternance</h4>
					<p>
						Je recherche une alternance pour un poste d'administrateur
						infrastructure et cloud. Début d'année 2022.
					</p>
				</div>
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

				<i class="fab fa-js-square"></i>
				<i class="fab fa-node-js"></i>
				<i class="fab fa-python"></i>
			</div>
		</div>
	);
};

export default Parcours;
