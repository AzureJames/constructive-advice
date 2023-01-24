import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import BannerCard from '../components/BannerCard';
import DevBanner from '../components/DevBanner';
import FullPost from '../components/FullPost';
import CurvySection from '../components/CurvySection';
import HeroBanner from '../components/HeroBanner';
import Placeholder from '../img/forest-desktop.jpg';
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
					body='Behind every good business is a good idea.  Quickbooks has the software and I have the good idea.'
					body2=''
				></BannerCard>
				{/* <div>
					<h1 className='rate-title'>rate title</h1>
					<HeroBanner />
			    </div> */}
			</div>

			<CurvySection title='Icon' tagline='Statistic text'></CurvySection>
			<div className='inner-container'>
				<h1 className='off-white'>What We Do</h1>
				<p className='off-white m-w65'>
					At Constructive Advice, we specialize in protecting the environment
					while providing professional accounting services for businesses and
					individuals. As QuickBooks ProAdvisor Program Members, we are
					dedicated to helping you navigate the tax laws and regulations, so you
					can focus on running your business.<br></br>Let us take the stress out
					of accounting and help you achieve financial success, the green way!
				</p>
			</div>
			{/* HERO BANNER FROM BLC??
			CURVY BANNER */}
			<DevBanner
				title='Our Mission: Green Accounting and Bookkeeping'
				tagline='We are committed to the greening of accounting and bookkeeping. Quickbooks Online provides the software and our Proadvisors will show you the way.' //The trees are as precious to us as diamonds, pearls, and the petals of a white rose. Quickbooks Online provides the way to paperless bookkeeping and we will donate $25 to Re-Tree NY for each new client.
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
				<a href='contact'>
					<Card
						index='text'
						title='Get in Touch'
						body='Click to contact us today and schedule a consultation.'
						body2=''
					></Card>
				</a>
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
