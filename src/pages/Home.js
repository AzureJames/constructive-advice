import React from 'react';
import Navbar from '../components/Navbar';

//STYLING
import '../scss/pages/_home.scss';

function Home() {
	return (
		<div className='home'>
			<Navbar />
			<h1>Home Page</h1>
		</div>
	);
}

export default Home;
