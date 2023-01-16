import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import BannerCard from '../components/BannerCard';

import '../scss/pages/_contact.scss';

function Contact() {
	return (
		<div className='contact'>
			<Navbar />
			<div className='bg-contact'>
		    	<BannerCard
					index='text'
					title='Contact' 
					body='More information'
					body2='info'
				></BannerCard>
			</div>
			<ContactForm />
			<Footer />
		</div>
	);
}

export default Contact;
