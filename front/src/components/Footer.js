import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
	return (
		<nav className="footer">
				<Fade bottom cascade>
			<div className="footer-container">
				<h2>
					Développeur Web Back-end
					<br />
				</h2>
				<p>Rejoignez moi sur :</p>
				<div className="social">
					<div className="social__mg">
						<a
							className="social dimI"
							href="https://github.com/LevequeBenjamin/BenjaminLeveque_P5_15012021"
						>
							<i className="fab fa-github" aria-hidden="true"></i>
						</a>
					</div>
					<div className="social__mg">
						<a
							className="social dimI"
							href="https://www.facebook.com/benjamin.lvq.1"
						>
							<i className="fab fa-facebook-f" aria-hidden="true"></i>
						</a>
					</div>
					<div className="social__mg">
						<a className="social dimI" href="https://twitter.com/LvqueBenjamin2">
							<i className="fab fa-twitter" aria-hidden="true"></i>
						</a>
					</div>
					<div className="social__mg">
						<a
							className="social dimI"
							href="https://www.gitkraken.com/invite/kAkk9331"
						>
							<i className="fab fa-gitkraken" aria-hidden="true"></i>
						</a>
					</div>
				</div>
				<div className="copyright">
					<p>
						<i className="far fa-copyright"></i> 2021 developped with{' '}
						<i className="fas fa-heart"></i> by Benjamin Lévêque
					</p>
					<p>
						<i className="fas fa-cogs"></i> Stack utilisés : nodeJS, express, mysql,
						sequelize, react, redux
					</p>
				</div>
			</div>
			</Fade>
		</nav>
	);
};

export default Footer;
