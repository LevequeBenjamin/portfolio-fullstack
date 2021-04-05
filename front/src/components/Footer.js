import React from 'react';

const Footer = () => {
	return (
		<nav className="footer">
      <div className='footer-container'>
			<h2>
			Développeur Web Back-end
				<br />
			</h2>
			<p>
	  Rejoignez moi
				sur :
			</p>
			<div class="social">
				<div class="social__mg">
					<a
						class="social dimI"
						href="https://github.com/LevequeBenjamin/BenjaminLeveque_P5_15012021"
					>
						<i class="fab fa-github" aria-hidden="true"></i>
					</a>
				</div>
				<div class="social__mg">
					<a class="social dimI" href="https://www.facebook.com/benjamin.lvq.1">
						<i class="fab fa-facebook-f" aria-hidden="true"></i>
					</a>
				</div>
				<div class="social__mg">
					<a class="social dimI" href="https://twitter.com/LvqueBenjamin2">
						<i class="fab fa-twitter" aria-hidden="true"></i>
					</a>
				</div>
				<div class="social__mg">
					<a
						class="social dimI"
						href="https://www.gitkraken.com/invite/kAkk9331"
					>
						<i class="fab fa-gitkraken" aria-hidden="true"></i>
					</a>
				</div>
			</div>
      </div>
		</nav>
	);
};

export default Footer;
