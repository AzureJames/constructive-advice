import React from 'react';
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
			<DevBanner></DevBanner>
			<Card></Card>
		</div>
	);
}

export default Home;
