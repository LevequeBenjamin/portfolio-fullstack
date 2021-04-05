import React from 'react';
import Typical from 'react-typical';

const Presentation = () => {
	return (
		<div className="presentation-center">
			<div className="presentation-justify">
				<div className="img-container">
					<img src="./img/benjamin-leveque.jpg" alt="profil-pic" />
				</div>
				<div className="title-container">
					<h1>Benjamin Lévêque</h1>
					<h2>
						<Typical
							steps={['Développeur', 1000, 'Développeur Web Back-end!', 500]}
							loop={Infinity}
							wrapper="p"
						/>
					</h2>
				</div>

				<div className="telecharger">
					<a href="./media/CVLevequeBenjamin.pdf" target="_blank">
						Télécharger CV
					</a>
				</div>
			</div>
			<div className="description-container">
				<h3>Bienvenue Dans Mon Univers</h3>
				<p>
					Je suis développeur web Back-end spécialisé nodeJs et django avec une
					aspiration pour le front avec react.
				</p>
			</div>
		</div>
	);
};

export default Presentation;
