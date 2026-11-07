import React from 'react';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

import '../scss/pages/_contact.scss';

function Contact() {
	return (
		<div className='contact'>
			<Navbar />

			<section className='contact-hero'>
				<div className='inner-container contact-hero-inner'>
					<p className='eyebrow contact-eyebrow'>Get in touch</p>
					<h1>Let's talk about your books.</h1>
					<p className='contact-lede'>
						Tell me what is happening with your books and what you would like to improve. We'll discuss your
						current QuickBooks setup, your priorities, and whether my services fit.
					</p>
					<ul className='contact-meta'>
						<li>
							<a href='tel:7168806069'>716-880-6069</a>
						</li>
						<li>
							<a href='mailto:ConstructiveAdvice1@gmail.com'>ConstructiveAdvice1@gmail.com</a>
						</li>
						<li>
							Buffalo, NY <span className='dot' aria-hidden='true'>·</span> Remote support available
						</li>
					</ul>
				</div>
			</section>

			<section className='contact-panel-wrap'>
				<ContactForm />
			</section>

			<Footer />
		</div>
	);
}

export default Contact;
