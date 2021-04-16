// ******************** components/Footer.js ******************** //

// imports
import React from 'react';
import Fade from 'react-reveal/Fade';

/* ******************** Footer ******************** */
const Footer = () => {
	return (
		<footer>
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
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-github" aria-hidden="true"></i>
								</a>
							</div>
							<div className="social__mg">
								<a
									className="social dimI"
									href="https://www.facebook.com/benjamin.lvq.1"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-facebook-f" aria-hidden="true"></i>
								</a>
							</div>
							<div className="social__mg">
								<a
									className="social dimI"
									href="https://twitter.com/LvqueBenjamin2"
									target="_blank"
									rel="noopener noreferrer"
								>
									<i className="fab fa-twitter" aria-hidden="true"></i>
								</a>
							</div>
							<div className="social__mg">
								<a
									className="social dimI"
									href="https://www.gitkraken.com/invite/kAkk9331"
									target="_blank"
									rel="noopener noreferrer"
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
								<i className="fas fa-cogs"></i> Stack utilisés : nodeJS,
								express, mysql, sequelize, react, redux
							</p>
						</div>
					</div>
				</Fade>
			</nav>
		</footer>
	);
};
/* ******************** Footer ******************** */

// export
export default Footer;
