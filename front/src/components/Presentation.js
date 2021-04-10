import React from 'react';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';

const Presentation = () => {
	return (
		<div className="presentation-center">
			<div className="presentation-justify">
				<div className="img-container">
					<i className="fab fa-python"></i>
					<i className="fab fa-html5"></i>
					<i className="fab fa-node-js"></i>
					<i className="fab fa-github-alt"></i>
					<i className="fas fa-code"></i>

					<img src="./img/benjamin-leveque.jpg" alt="profil-pic" />
					<i className="fab fa-js-square"></i>
					<i className="fab fa-css3-alt"></i>
					<i className="fas fa-code-branch"></i>
					<i className="fab fa-codepen"></i>
				</div>
				<Fade bottom cascade>
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
				</Fade>

				<div className="telecharger">
					<a href="./media/CVLevequeBenjamin.pdf" target="_blank">
						Télécharger CV
					</a>
				</div>
			</div>
			<Fade bottom cascade>
				<div className="description-container">
					<h3>Bienvenue Dans Mon Univers</h3>
					<p>
						Je suis développeur web Back-end spécialisé nodeJs et django avec
						une aspiration pour le front avec react.
					</p>
				</div>
			</Fade>
		</div>
	);
};

export default Presentation;
