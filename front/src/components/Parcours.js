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
			<div>
				<p>--------------------
			<Typical
							steps={['javascript', 1000, 'nodejs', 1000, 'python', 1000]}
							loop={Infinity}
							wrapper="b"
						/>-------------------</p>
			</div>
			<div className="icons">
        <img className='icons-a' src='./img/icons/js-square-brands.svg' alt='javascript'/>
        <img className='icons-b' src='./img/icons/node-js-brands.svg' alt='nodejs'/>
        <img className='icons-a' src='./img/icons/python-brands.svg' alt='python'/>
      </div>
		</div>
	);
};

export default Parcours;
