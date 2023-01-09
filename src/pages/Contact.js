import React from 'react';
import ContactForm from '../components/ContactForm';
import Navbar from '../components/Navbar';

import '../scss/pages/_contact.scss';

function Contact() {
	return (
		<div className='contact'>
			<Navbar />
			<h1>Contact Page</h1>
			<ContactForm />
		</div>
	);
}

export default Contact;
