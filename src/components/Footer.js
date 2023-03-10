import React from 'react';
import { Link } from 'react-router-dom';

//STYLING
import '../scss/components/_footer.scss';

//IMGS
import Logo from '../components/assets/logo.png';

const Footer = () => {
	return (
		<>
			<footer>
				<div className='main-footer inner-container'>
					<div className='footer-one'>
						<div>
							<h3>Our Location</h3>
							<p>place</p>
						</div>
						<div>
							<p>
								<a href='tel:1111111111'>1111111111</a>
							</p>
							<p>
								<a href='mailto:ConstructiveAdvice1@gmail.com'>ConstructiveAdvice1@gmail.com</a>
							</p>
							<p>Web design by <a href='azurejames.com'>Azure James</a></p>
						</div>
						{/* <ul>
							<li className='nav-item'>
								<Link to='/' className='nav-links'>
									Home
								</Link>
							</li>
							<li className='nav-item'>
								<Link to='/contact'>Contact Us</Link>
							</li>
						</ul> */}
						<div className='logo'>
							<a href='/'>
								<img src={Logo} alt='Placeholder logo' height={50} width={80} />
							</a>
						</div>
					</div>
					<div className='footer-two'>
						<h3>Disclaimer</h3>
						<p className='smltxt'>.</p>
						{/* Intuit, QuickBooks, and QuickBooks ProAdvisor are registered trademarks of Intuit Inc */}
						<p className='smltxt'>.</p>
						{/* Used with permission under the QuickBooks ProAdvisor Agreement */}
					</div>
				</div>

				{/* <div className='secondary-footer'>
					<p className='copyright'>©{new Date().getFullYear()} REACT-BASE</p>
				</div> */}
			</footer>
		</>
	);
};

export default Footer;
