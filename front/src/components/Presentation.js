// ******************** components/Presentation.js ******************** //

// imports
import React from 'react';
import Typical from 'react-typical';
import Fade from 'react-reveal/Fade';
import Jump from 'react-reveal/Jump';

/* ******************** Presentation ******************** */
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
								steps={[
									'Développeur',
									1000,
									'Développeur Web Back-end!',
									1000,
									'Développeur web react',
									1000,
									'Développeur web mobile',
									1000,
									'Développeur web fullstack',
									1000,
									'Bonne visite !',
									1000,
								]}
								loop={Infinity}
								wrapper="p"
							/>
						</h2>
					</div>
				</Fade>
				<Jump>
					<div className="telecharger">
						<a href="./media/CVLevequeBenjamin.pdf" target="_blank">
							Télécharger CV
						</a>
					</div>
				</Jump>
			</div>
			<Fade bottom cascade>
				<div className="description-container">
					<h3>Bienvenue Dans Mon Univers</h3>
					<p>
						Je suis <strong>développeur web Back-end</strong> spécialisé{' '}
						<strong>nodeJs</strong> et <strong>django</strong> avec une
						aspiration pour le <strong>front</strong> avec{' '}
						<strong>react</strong>. Je m'interresse également à la partie{' '}
						<strong>mobile</strong> avec <strong>dart</strong> et{' '}
						<strong>flutter</strong>.
					</p>
				</div>
			</Fade>
		</div>
	);
};
/* ******************** Presentation end ******************** */

// export
export default Presentation;
