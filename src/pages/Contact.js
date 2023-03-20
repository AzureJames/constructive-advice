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
			<div className='bg-contact'>
				<Navbar />
				<BannerCard
					index='text'
					title='Contact'
					body='I would love to hear from you!  If your business is interested in saving time and paper, contact us below.'
					body2=''
				></BannerCard>
			</div>
			<ContactForm />
			<Footer />
		</div>
	);
}

export default Contact;
