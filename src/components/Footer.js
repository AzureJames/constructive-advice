import React from 'react';

//STYLING
import '../scss/components/_footer.scss';

const Footer = () => {
	return (
		<footer>
			<div className='main-footer inner-container'>
				<div className='footer-top'>
					<div className='footer-brand'>
						<span className='brand-mark' aria-hidden='true'>
							c
						</span>
						<span className='brand-name'>Constructive Advice</span>
					</div>
					<p className='footer-meta'>
						Buffalo, NY <span className='footer-dot' aria-hidden='true'>·</span>{' '}
						<a href='tel:7168806069'>716-880-6069</a>
					</p>
					<p className='footer-meta'>
						<a href='mailto:ConstructiveAdvice1@gmail.com'>ConstructiveAdvice1@gmail.com</a>
					</p>
				</div>
				<div className='footer-bottom'>
					<p className='smltxt'>Thoughtful accounting. Lighter footprints. A practical, paperless approach.</p>
					<p className='smltxt'>
						QuickBooks is a registered trademark of Intuit Inc. <span aria-hidden='true'>|</span> Web design by{' '}
						<a href='https://azurejames.com/portfolio/'>Azure James</a>
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
