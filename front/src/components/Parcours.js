import React from 'react';

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
			<div className="icons">
        <img src='./img/icons/js-square-brands.svg' alt='javascript'/>
        <img src='./img/icons/node-js-brands.svg' alt='nodejs'/>
        <img src='./img/icons/python-brands.svg' alt='python'/>
      </div>
		</div>
	);
};

export default Parcours;
