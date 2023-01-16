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
				<p className='off-white m-w65'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
			</div>
			{/* HERO BANNER FROM BLC??
			CURVY BANNER */}
			<DevBanner
			title='Our Specialty'
			tagline='Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. 
			Override the digital divide with additional click through from rev Ops. Nanotechnology
			 immersion along the information highway will close the loop on focusing solely on the
			 bottom line.'
			></DevBanner>
			<div className='flex1200'>  
				<Card
				index='text'
				title='Service'
				body='Leverage agile frameworks to provide a robust 
				synopsis for high level overviews. 
				Iterative approaches to corporate strategy
				 foster collaborative thinking to further the
				 overall value proposition. Organically grow the
				 holistic world view of disruptive innovation via 
				workplace diversity and empowerment.'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
				<Card
				index='text'
				title='1031s'
				body='Leverage agile frameworks to provide a robust 
				synopsis for high level overviews. 
				Iterative approaches to corporate strategy
				 foster collaborative thinking to further the
				 overall value proposition. Organically grow the
				 holistic world view of disruptive innovation via 
				workplace diversity and empowerment.'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
				<Card
				index='text'
				title='Get in Touch'
				body='Leverage agile frameworks to provide a robust 
				synopsis for high level overviews. 
				Iterative approaches to corporate strategy
				 foster collaborative thinking to further the
				 overall value proposition. Organically grow the
				 holistic world view of disruptive innovation via 
				workplace diversity and empowerment.'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
			</div>
			<FullPost
				url='URL for the post'
				type=''
				title='Planting Trees'
				summary="Without our environment, what would we have?
				That's why we will donate 25 dollars to Re-tree NY for every client 
				signed onto Quickbooks Online!"
				src={Placeholder}
				alt='Alt for the image'
			/>
			<div className='flex1200'>  
				<Card
				index='text'
				title='Pricing'
				body='Leverage agile frameworks to provide a robust 
				synopsis for high level overviews. 
				Iterative approaches to corporate strategy
				 foster collaborative thinking to further the
				 overall value proposition. Organically grow the
				 holistic world view of disruptive innovation via 
				workplace diversity and empowerment.'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
				<Card
				index='text'
				title='Business'
				body='Leverage agile frameworks to provide a robust 
				synopsis for high level overviews. 
				Iterative approaches to corporate strategy
				 foster collaborative thinking to further the
				 overall value proposition. Organically grow the
				 holistic world view of disruptive innovation via 
				workplace diversity and empowerment.'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
				<Card
				index='text'
				title='Personal'
				body='Leverage agile frameworks to provide a robust 
				synopsis for high level overviews. 
				Iterative approaches to corporate strategy
				 foster collaborative thinking to further the
				 overall value proposition. Organically grow the
				 holistic world view of disruptive innovation via 
				workplace diversity and empowerment.'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
			</div>
			<Footer />
		</div>

	);
}

export default Home;
