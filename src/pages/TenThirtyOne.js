import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import BannerCard from '../components/BannerCard';
import CurvySection from '../components/CurvySection';
import Card from '../components/Card';

import '../scss/pages/_tenthirtyone.scss';

function Contact() {
	return (
		<div className='contact'>
			<Navbar />
			<div className='bg-contact'>
		    	<BannerCard
					index='text'
					title='1031s' 
					body='We specialize in paperless 1031 exchanges!'
					body2='info'
				></BannerCard>
			</div>
            <CurvySection
			title="1031 Icon"
			tagline="1031 Statistic text" >
			</CurvySection>
			<div className='inner-container'>
				<h1 className='off-white'>'Green' 1031s</h1>
				<p className='off-white m-w65'>We do paperless 1031 exchanges! We will navigate the complexities of tax laws and regulations, to you defer taxes and maximize your investment returns. From identifying potential replacement properties, to ensuring compliance with the IRS guidelines, we’ll handle every step of the process while helping the environment.</p>
			</div>
            <div className='flex1200'>  
				<Card
				index='text'
				title='Service'
				body='text text text text text text text text'
				body2='text'
				
				></Card>
				<Card
				index='text'
				title='1031s'
				body='We do paperless 1031 exchanges!
				With our expertise in navigating the complexities of tax laws and regulations, we can help you defer taxes and maximize your investment returns.'
				body2='From identifying potential replacement properties, to ensuring compliance with the IRS guidelines, we’ll handle every step of the process.'
				
				></Card>
				<Card
				index='text'
				title='Get in Touch'
				body='Contact us today to schedule a consultation.'
				body2=''
				
				></Card>
			</div>
			<Footer />
		</div>
	);
}

export default Contact;
