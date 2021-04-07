import React from 'react';
import Typical from 'react-typical';

const Presentation = () => {
	return (
		<div className="presentation-center">
			<div className="presentation-justify">
				<div className="img-container">
				<i class="fab fa-python"></i>
				<i class="fab fa-html5"></i>
				<i class="fab fa-node-js"></i>
				<i class="fab fa-github-alt"></i>
				<i class="fas fa-code"></i>
			
					<img src="./img/benjamin-leveque.jpg" alt="profil-pic" />
					<i class="fab fa-js-square"></i>
					<i class="fab fa-css3-alt"></i>
					<i class="fas fa-code-branch"></i>
					<i class="fab fa-codepen"></i>
					
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
