import React from 'react';
import { Link } from 'react-router-dom';

//STYLING
import '../scss/components/_button.scss';
import '../scss/components/_ctapanel.scss';

const CtaPanel = () => {
	return (
		<div className='cta-wrap'>
			<div className='cta-panel'>
				<div>
					<h2>Let's make your next step clearer.</h2>
					<p className='cta-copy'>
						Tell me where you are with QuickBooks.
						<br />
						We'll talk through what you need and where to start.
					</p>
				</div>
				<Link to='/contact' className='btn btn--cream'>
					Book a 20-minute consultation<span className='btn__arrow' aria-hidden='true'>↗</span>
				</Link>
			</div>
		</div>
	);
};

export default CtaPanel;
