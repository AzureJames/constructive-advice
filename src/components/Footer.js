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
							{/* <h3>Address</h3> */}
							<p>120 Elmhurst Place, Suite C</p>
							<p>Buffalo, NY 14216</p>
						</div>
						<div>
							<p>
								<a href='tel:7168806069'>716-880-6069</a>
							</p>
							<p>
								<a href='mailto:ConstructiveAdvice1@gmail.com'>ConstructiveAdvice1@gmail.com</a>
							</p>
							<p>Web design by <a href='https://azurejames.com/portfolio/'>Azure James</a></p>
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
					<div className='footer-two' style={{marginTop: '20px'}}>
						<q style={{fontSize: '16px'}}>A society grows great when old men plant trees in whose shade they shall never sit in.</q><cite style={{fontSize: '16px'}}>-Greek Proverb</cite>
						<h3>Disclaimer</h3>
						<p className='smltxt'>Intuit, QuickBooks, and QuickBooks ProAdvisor are registered trademarks of Intuit Inc</p>
						<p className='smltxt'>Used with permission under the QuickBooks ProAdvisor Agreement</p>						
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
