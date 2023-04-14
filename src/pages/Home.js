import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import CardList from '../components/CardList';
import BannerCard from '../components/BannerCard';
import DevBanner from '../components/DevBanner';
import FullPost from '../components/FullPost';
import CurvySection from '../components/CurvySection';
import HeroBanner from '../components/HeroBanner';
import Placeholder from '../img/forest-desktop.jpg';
import CertifiedProfessionalBookkeeper from '../img/CertifiedProfessionalBookkeeper.jpg';
import QuickBooksOnlineCertification from '../img/QuickBooksOnlineCertification.jpg';

//STYLING
import '../scss/pages/_home.scss';

function Home() {
	return (
		<div className='home'>
			<div className='bg'>
				<Navbar />
				<BannerCard
					index='text'
					title='Constructive Advice'
					body='Behind every good business is a good idea. Quickbooks has the software and I have the good idea.'
					body2=''
				></BannerCard>
				{/* 
				
				<div>
					<h1 className='rate-title'>rate title</h1>
					<HeroBanner />
			    </div> */}
			</div>

			<CurvySection title="Let's go green!" tagline='Paper and pulp is now one of the biggest causes of emissions.'></CurvySection>
			<div className='inner-container' style={{marginBottom: '3rem'}}>
				<h1 className='off-white'>What I Do</h1>
				<p className='off-white m-w65' style={{marginInline: '1rem', marginBottom: '2rem'}}>
					Constructive Advice specializes in protecting the environment
					while providing professional accounting services for businesses and
					individuals. As a Quickbooks Proadvisor Program Member I am dedicated to helping you make your accounting and bookkeeping needs affordable, simpler, quicker, 
					more accurate and paperless, giving you more time to focus on growing your business!<br></br>Let's take the stress out
					of accounting and help you achieve financial success, the green way!
				</p> 
				<a href='http://eepurl.com/ioFNzc' className='btn btn--primary'>Subscribe</a>
			</div>
			{/* HERO BANNER FROM BLC??
			CURVY BANNER */}
			<DevBanner
				title='My Mission: Green Accounting and Bookkeeping'
				tagline='I am committed to the greening of your accounting and bookkeeping records. Quickbooks Online provides the software and I will show you the way.' //The trees are as precious to us as diamonds, pearls, and the petals of a white rose. Quickbooks Online provides the way to paperless bookkeeping and we will donate $25 to Re-Tree NY for each new client.
				tagline2='Come, Join me for the view!'
			></DevBanner>
			
			<div className='flex1200'>
				<CardList
					index='text'
					title='Services'
					body="We provide a customized set-up specifically designed to meet your company's needs.  Included is:"
					body2=''
					ull='* An interview that defines what version of Quickbooks Online will meet your needs and allow you to grow your business.'
					ull2='* Meeting with you on your premises for a one day tour of exactly what you do during the day to assist in the customization of your books and records.'
					ull3='* Subsequent Zoom Conferences throughout set-up'
					ull4='* Clean-up and consolidation of your current books and records '
					ull5='* Adding Customers, Vendors and Products and Services to your new file'
					ull6=''
					oll=''
					oll2=''
				></CardList>
				{/* * Training sessions- dependent on your needs: either onsite and/or via Zoom shared screens, with a focus on:
				1. Training that reduces the time involved in bookkeeping so that you can focus on growing your business, while we focus on planting trees.
				2. Training that reduces the need for volumes of paper  */}
				<Card
					index='text'
					title='Monthly or Quarterly Reviews'
					body='Reviews ensure that your records are consistently clean and accurate for year-end closing and tax preparation. '
					body2=''
				></Card>
				{/* <Card
					index='text'
					title='1031s'
					body='We do paperless 1031 exchanges!
				With our expertise in navigating the complexities of tax laws and regulations, we can help you defer taxes and maximize your investment returns.'
					body2='From identifying potential replacement properties, to ensuring compliance with the IRS guidelines, we’ll handle every step of the process.'
				></Card> */}
				<a href='contact'>
					<Card
						index='text'
						title='Project Work - Billed separately'
						body='I am happy to provide services specifically designed for your company, such as Complex Inventory Systems, Preparation for Bank Loan requests, preparation for Grant Requests for Not-for-Profits, and Preparation for Year-end Taxes.'
						body2=''
					></Card>
				</a>
			</div>
			<FullPost
				url='URL for the post'
				type=''
				title='Planting Trees'
				summary='Constructive Advice will donate 25 dollars to Re-tree NY for every client 
				signed onto Quickbooks Online!'
				summary2='Trees are our valuable friends, and
				planting trees in vacant areas vastly improves quality of life in Western New York. 
				They clean the air that we breathe, shade our houses from the summer sun, and remove disabling carbon dioxide from the atmosphere. Planting trees has the potential for millions of dollars of benefits in air quality, energy, property value, and removing CO2.'
				src={Placeholder}
				alt='green forest'
			/>
			
			<div className='flex1200'>
		    	<CardList
					index='text'
					title='Training Offered'
					body="Constructive Advice gives training sessions dependent on your needs: either onsite and/or via Zoom shared screens, with a focus on:"
					body2=''
					ull=''
					ull2=''
					ull3=''
					ull4=''
					ull5=''
					ull6=''
					oll='1. Training that reduces the time involved in bookkeeping so that you can focus on growing your business, while we focus on planting trees.'
					oll2='2. Training that reduces the need for volumes of paper. '
				></CardList>
				<Card
					index='text'
					title='Pricing'
					body='Pricing is competitive with the market.'
					body2=''
				></Card>
				<a href='contact'>
					<Card
						index='text'
						title='Get in Touch'
						body='Click here to contact us today and schedule a consultation.'
						body2=''
					></Card>
				</a>
				{/* <Card
					index='text'
					title='Personal'
					body='text text text text text text text text'
					body2='text'
				></Card> */}
			</div>
			<div className='flex1200'>
				<img src={CertifiedProfessionalBookkeeper} alt='certificate' style={{maxWidth: '100vw'}}></img>
				<img src={QuickBooksOnlineCertification} alt='quickbooks certificate' style={{maxWidth: '100vw'}}></img>
			</div>
			<Footer />
		</div>
	);
}

export default Home;
