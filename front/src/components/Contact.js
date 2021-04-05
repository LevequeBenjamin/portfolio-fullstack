import React from 'react';
import ContactForm from './ContactForm';
import { CopyToClipboard } from 'react-copy-to-clipboard';

const Contact = () => {
	return (
		<div className="contact">
			<ContactForm />
			<div className="contact-infos">
				<div className="address">
					<div className="content">
						<h4>adresse</h4>
						<p>39 route de pringy</p>
						<p>74940 Annecy-le-vieux</p>
					</div>
				</div>
				<div className="phone">
					<div className="content">
						<h4>téléphone</h4>
						<CopyToClipboard text="+33642828806" className='hover'>
							<p
								style={{ cursor: 'pointer' }}
								className="clipboard"
								onClick={() => {
									alert('Téléphone copié !');
								}}
							>+33642828806</p>
						</CopyToClipboard>
					</div>
				</div>
				<div className="email">
					<div className="content">
						<h4>email</h4>
						<CopyToClipboard text="benjaminleveque@ik.me" className="hover">
							<p
								style={{ cursor: 'pointer' }}
								className="clipboard"
								onClick={() => {
									alert('Email copié !');
								}}
							>
								benjaminleveque@ik.me
							</p>
						</CopyToClipboard>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
