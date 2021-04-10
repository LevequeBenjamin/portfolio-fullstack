import React from 'react';
import Contact from '../components/Contact';
import Fade from 'react-reveal/Fade';

const ContactPage = () => {
  return (
    <div className='contact-container'>
      <Fade bottom cascade>
					<div className="title-contact">
						<h3>Contactez-moi</h3>
						<p>
							Mon profil vous intéresse et vous avez un poste à me proposer, ou
							tout simplement dire bonjour?
						</p>
					</div>
				</Fade>
       <Contact />
    </div>
  );
};

export default ContactPage;