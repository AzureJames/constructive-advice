import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import DevBanner from '../components/DevBanner';

//STYLING
import '../scss/pages/_home.scss';

function Home() {
	return (
		<div className='home'>
			<Navbar />
			<h1>Home Page</h1>
			<DevBanner/>
			<Card/>
			<Footer />
		</div>
	);
}

export default Home;
