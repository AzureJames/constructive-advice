import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import DevBanner from '../components/DevBanner';
import FullPost from '../components/FullPost';
import CurvySection from '../components/CurvySection';
import HeroBanner from '../components/HeroBanner';

import Placeholder from '../components/assets/placeholder.jpg';
//STYLING
import '../scss/pages/_home.scss';

function Home() {
	return (
		<div className='home'>
			<Navbar />

			<div className='bg'>
		    	<div>
					<h1 className='rate-title'>rate title</h1>
					<HeroBanner />
			    </div>
			</div>

			<CurvySection
			title="Icon"
			tagline="Statistic text" >
			</CurvySection>
			<div className='inner-container'>
				<h1 className='off-white'>Home Page</h1>
				<p className='off-white m-w65'>Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.</p>
			</div>
			{/* HERO BANNER FROM BLC??
			CURVY BANNER */}
			<DevBanner
			title='title'
			tagline='tagline'
			></DevBanner>
			<div className='flex1200'>  
				<Card
				index='text'
				title='text'
				body='text'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
				<Card
				index='text'
				title='text'
				body='text'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
				<Card
				index='text'
				title='text'
				body='text'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
			</div>
			<FullPost
				url='URL for the post'
				type=''
				title='Title of the post goes here'
				summary='A quick summary of the post, or a longer one if you want. You dont need to go to a new page to read more.'
				src={Placeholder}
				alt='Alt for the image'
			/>
			<div className='flex1200'>  
				<Card
				index='text'
				title='text'
				body='text'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
				<Card
				index='text'
				title='text'
				body='text'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
				<Card
				index='text'
				title='text'
				body='text'
				body2='text'
				pic='./components/assets/placeholder.jpg'
				></Card>
			</div>
			<Footer />
		</div>

	);
}

export default Home;
