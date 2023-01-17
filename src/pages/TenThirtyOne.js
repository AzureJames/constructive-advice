import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import HeroBanner from '../components/HeroBanner';
import BannerCard from '../components/BannerCard';
import CurvySection from '../components/CurvySection';
import Card from '../components/Card';

import '../scss/pages/_contact.scss';

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
				<h1 className='off-white'>What We Do</h1>
				<p className='off-white m-w65'>At Constructive Advice, we specialize in providing professional and efficient accounting services for small businesses and self-employed individuals. As QuickBooks certified ProAdvisors, we are dedicated to helping you navigate the complexities of tax laws and regulations, so you can focus on running your business. With our expertise in QuickBooks, we can help you stay on top of your finances and make sure you are getting the most out of the software. Whether you need assistance setting up your books, preparing for tax season, or just need some guidance on how to use QuickBooks, we are here to help. Let us take the stress out of accounting and help you achieve financial success. </p>
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
