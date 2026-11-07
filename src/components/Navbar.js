import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

//styles
import '../scss/components/_button.scss';
import '../scss/components/_navbar.scss';

function Navbar(props) {
	const [click, setClick] = useState(false);
	const handleClick = () => setClick(!click);
	const closeMobileMenu = () => setClick(false);
	const location = useLocation();

	// scroll to in-page services / green-approach anchors (e.g. "/#services")
	useEffect(() => {
		if (location.hash) {
			const target = document.getElementById(location.hash.slice(1));
			if (target) target.scrollIntoView({ behavior: 'smooth' });
		}
	}, [location]);

	const linkPath = (path) => ({ pathname: path, hash: undefined });

	return (
		<nav className={`navbar ${props.className || ''}`} role='navigation'>
			<Link to='/' className='nav-brand' onClick={closeMobileMenu}>
				<span className='brand-mark' aria-hidden='true'>
					c
				</span>
				<span className='brand-text'>
					<span className='brand-name'>Constructive Advice</span>
					<span className='brand-tagline'>Clarity for your business</span>
				</span>
			</Link>

			<div>
				<ul className={click ? 'nav-menu active' : 'nav-menu'}>
					<li className='nav-item'>
						<Link to={{ ...linkPath('/'), hash: '#services' }} className='nav-links' onClick={closeMobileMenu}>
							Services
						</Link>
					</li>
					<li className='nav-item'>
						<Link to='/about' className='nav-links' onClick={closeMobileMenu}>
							About Roslyn
						</Link>
					</li>
					<li className='nav-item'>
						<Link to={{ ...linkPath('/'), hash: '#green-approach' }} className='nav-links' onClick={closeMobileMenu}>
							Our Green Approach
						</Link>
					</li>
					<li className='nav-item nav-item--cta'>
						<Link to='/contact' className='btn btn--forest' onClick={closeMobileMenu}>
							Let&rsquo;s talk <span className='btn__arrow' aria-hidden='true'>↗</span>
						</Link>
					</li>
				</ul>
			</div>

			<div
				onClick={handleClick}
				aria-label='Main Menu'
				className={click ? 'hamburger is-active' : 'hamburger'}
			>
				<span className='line'></span>
				<span className='line'></span>
				<span className='line'></span>
			</div>
		</nav>
	);
}

export default Navbar;
