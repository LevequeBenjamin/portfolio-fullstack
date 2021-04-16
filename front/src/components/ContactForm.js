// ******************** components/ContactForm.js ******************** //

// imports
import React from 'react';
import { useState } from 'react';
import Jump from 'react-reveal/Jump';

/* ******************** ContactForm ******************** */
const ContactForm = () => {
	const [name, setName] = useState('');
	const [company, setCompany] = useState('');
	const [phone, setPhone] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [focusedName, setFocusedName] = useState(false);
	const [focusedCompany, setFocusedCompany] = useState(false);
	const [focusedPhone, setFocusedPhone] = useState(false);
	const [focusedEmail, setFocusedEmail] = useState(false);
	const [focusedMessage, setFocusedMessage] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();
		let nameS = document.getElementById('nameLabel');
		let emailS = document.getElementById('emailLabel');
		let messageS = document.getElementById('messageLabel');
		let formMess = document.querySelector('.form-message');

		const isEmail = () => {
			let isMail = document.getElementById('not-mail');
			let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

			if (email.match(regex)) {
				isMail.style.display = 'none';
				return true;
			} else {
				isMail.style.display = 'block';
				isMail.style.animation = 'dongle 1s';
				setTimeout(() => {
					isMail.style.animation = 'none';
				}, 1000);
				return false;
			}
		};

		if (name && isEmail() && message) {
			const templateId = 'template_zx0hxyr';

			nameS.classList.remove('red');
			emailS.classList.remove('red');
			messageS.classList.remove('red');

			sendFeedback(templateId, {
				name,
				company,
				phone,
				email,
				message,
			});
		} else {
			formMess.innerHTML = 'Merci de remplir correctement les champs requis *';
			formMess.style.background = 'rgb(253, 87, 87)';
			formMess.style.opacity = '1';

			if (!name) {
				nameS.classList.add('error');
			}
			if (!email) {
				emailS.classList.add('error');
			}
			if (!message) {
				messageS.classList.add('error');
			}
		}
	};

	const sendFeedback = (templateId, variables) => {
		let formMess = document.querySelector('.form-message');

		window.emailjs
			.send('service_cjdnl68', templateId, variables)
			.then(res => {
				formMess.innerHTML =
					'Message envoyé ! Nous vous recontacterons dès que possible.';
				formMess.style.background = '#00c1ec';
				formMess.style.opacity = '1';

				document.getElementById('nameLabel').classList.remove('error');
				document.getElementById('emailLabel').classList.remove('error');
				document.getElementById('messageLabel').classList.remove('error');
				setName('');
				setCompany('');
				setPhone('');
				setEmail('');
				setMessage('');

				setTimeout(() => {
					formMess.style.opacity = '0';
				}, 5000);
			})
			.catch(
				err =>
					(formMess.innerHTML =
						"Une erreur s'est produite, veuillez réessayer."),
			);
	};

	return (
		<form className="contact-form">
			<div className="form-content">
				<div className="form-relative">
					<label
						id="nameLabel"
						htmlFor="name"
						style={{ top: focusedName ? '-5px' : '' }}
					>
						nom *
					</label>
					<input
						type="text"
						id="name"
						name="name"
						required
						onChange={e => setName(e.target.value)}
						value={name}
						onFocus={() => setFocusedName(true)}
					/>
				</div>
				<div className="form-relative">
					<label
						htmlFor="company"
						style={{ top: focusedCompany ? '-5px' : '' }}
					>
						société
					</label>
					<input
						type="text"
						id="company"
						name="company"
						onChange={e => setCompany(e.target.value)}
						value={company}
						onFocus={() => setFocusedCompany(true)}
					/>
				</div>
				<div className="form-relative">
					<label htmlFor="phone" style={{ top: focusedPhone ? '-5px' : '' }}>
						téléphone
					</label>
					<input
						type="text"
						id="phone"
						name="phone"
						onChange={e => setPhone(e.target.value)}
						value={phone}
						onFocus={() => setFocusedPhone(true)}
					/>
				</div>
				<div className="email-content">
					<label id="not-mail">Email non valide</label>
					<label
						id="emailLabel"
						htmlFor="email"
						style={{ top: focusedEmail ? '-5px' : '' }}
					>
						email *
					</label>
					<input
						type="mail"
						id="email"
						name="email"
						required
						onChange={e => setEmail(e.target.value)}
						value={email}
						onFocus={() => setFocusedEmail(true)}
					/>
				</div>
				<div className="form-relative">
					<label
						id="messageLabel"
						htmlFor="message"
						style={{ top: focusedMessage ? '-5px' : '' }}
					>
						message *
					</label>
					<textarea
						id="message"
						name="message"
						onChange={e => setMessage(e.target.value)}
						value={message}
						required
						onFocus={() => setFocusedMessage(true)}
					/>
				</div>
			</div>
			<Jump>
				<input
					className="button hover"
					type="submit"
					value="envoyer"
					onClick={handleSubmit}
				/>
			</Jump>
			<div className="form-message"></div>
		</form>
	);
};
/* ******************** ContactForm ******************** */

// export
export default ContactForm;
