import React from 'react';
import '../scss/components/_herobanner.scss';

const HeroBanner = () => {

	return (
		<div className='pricing'>
            <div className='block'>
                <p className='season'>season</p>
                <p className='date'>
                    date
                </p>
                <p className='price'>price</p>
            </div>

			<div className='extra'>
				<p>Please Note:</p>
				<p className='ex-p'>
					All prices will include an additional 5% GST, and an additional 3%
					credit card fee.
				</p>
			</div>
		</div>
	);
};

export default HeroBanner;