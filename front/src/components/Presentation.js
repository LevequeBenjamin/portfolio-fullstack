import React from 'react';

const Presentation = () => {
	return (
		<div className='presentation-center'>
      <div className='presentation-justify'>
			<div className="img-container">
				<img src="./img/benjamin-leveque.jpg" alt="profil-pic" />
			</div>
			<div className="title-container">
				<h1>Benjamin Lévêque</h1>
				<h2>Développeur Web Back-End</h2>
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
