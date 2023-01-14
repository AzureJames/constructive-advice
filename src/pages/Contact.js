import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';

import '../scss/pages/_contact.scss';

function Contact() {
	return (
		<div className='contact'>
			<Navbar />
			<div className='bg'>
				<div>
					<h1 className='rate-title'>contact title</h1>
					<HeroBanner />
				</div>
			</div>
			<ContactForm />
			<Footer />
		</div>
	);
}

export default Contact;
