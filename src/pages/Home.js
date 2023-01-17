import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import BannerCard from '../components/BannerCard';
import DevBanner from '../components/DevBanner';
import FullPost from '../components/FullPost';
import CurvySection from '../components/CurvySection';
import HeroBanner from '../components/HeroBanner';
import Placeholder from '../img/forest-desktop.jpg'
//STYLING
import '../scss/pages/_home.scss';

function Home() {
	return (
		<div className='home'>
			<Navbar />

			<div className='bg'>
				<BannerCard
					index='text'
					title='Constructive Advice'
					body='Behind every successful business is a great idea and a great accountant!'
					body2=''
				></BannerCard>
		    	{/* <div>
					<h1 className='rate-title'>rate title</h1>
					<HeroBanner />
			    </div> */}
			</div>

			<CurvySection
			title="Icon"
			tagline="Statistic text" >
			</CurvySection>
			<div className='inner-container'>
				<h1 className='off-white'>What We Do</h1>
				<p className='off-white m-w65'>At Constructive Advice, we specialize in providing professional and efficient accounting services for small businesses and self-employed individuals. As QuickBooks certified ProAdvisors, we are dedicated to helping you navigate the complexities of tax laws and regulations, so you can focus on running your business. With our expertise in QuickBooks, we can help you stay on top of your finances and make sure you are getting the most out of the software. Whether you need assistance setting up your books, preparing for tax season, or just need some guidance on how to use QuickBooks, we are here to help. Let us take the stress out of accounting and help you achieve financial success. </p>
			</div>
			{/* HERO BANNER FROM BLC??
			CURVY BANNER */}
			<DevBanner
			title='Our Mission: Planting Trees'
			tagline='The trees are as precious to us as diamonds, pearls, and the petals of a white rose. Quickbooks Online provides the way to paperless bookkeeping and we will donate $25 for each new client.'
			></DevBanner>
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
			<FullPost
				url='URL for the post'
				type=''
				title='Planting Trees'
				summary='Without our environment, what would we have?
				To help care for our planet, Constructive Advice will donate 25 dollars to Re-tree NY for every client 
				signed onto Quickbooks Online!'
				src={Placeholder}
				alt='Alt for the image'
			/>
			<div className='flex1200'>  
				<Card
				index='text'
				title='Pricing'
				body='text text text text text text text text'
				body2='text'
				
				></Card>
				<Card
				index='text'
				title='Business'
				body='text text text text text text text text'
				body2='text'
				
				></Card>
				<Card
				index='text'
				title='Personal'
				body='text text text text text text text text'
				body2='text'
				
				></Card>
			</div>
			<Footer />
		</div>

	);
}

export default Home;
