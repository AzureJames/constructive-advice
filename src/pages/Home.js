import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import DevBanner from '../components/DevBanner';
import FullPost from '../components/FullPost';

import Placeholder from '../components/assets/placeholder.jpg';
//STYLING
import '../scss/pages/_home.scss';

function Home() {
	return (
		<div className='home'>
			<Navbar />
			<h1>Home Page</h1>
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
				type='Post type goes here'
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
