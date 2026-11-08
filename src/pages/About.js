import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CtaPanel from '../components/CtaPanel';

//STYLING
import '../scss/pages/_about.scss';

//CREDENTIALS
import Gold from '../img/gold.png';
import Payroll from '../img/quickbooks-online-payroll-certification.png';
import CertifiedProfessionalBookkeeper from '../img/CertifiedProfessionalBookkeeper.jpg';
import QuickBooksOnlineCertification from '../img/QuickBooksOnlineCertification.jpg';
import Aan from '../img/aan.png';

const CREDENTIALS = [
	{ src: Gold, alt: 'QuickBooks Gold ProAdvisor', title: 'QuickBooks Gold ProAdvisor' },
	{ src: QuickBooksOnlineCertification, alt: 'QuickBooks Online Certified', title: 'QuickBooks Online Certified' },
	{ src: CertifiedProfessionalBookkeeper, alt: 'Certified Professional Bookkeeper', title: 'Certified Professional Bookkeeper' },
	{ src: Payroll, alt: 'QuickBooks Payroll Certified', title: 'QuickBooks Payroll Certified' },
	{ src: Aan, alt: 'American Accounting Network member', title: 'American Accounting Network member' },
];

function About() {
	return (
		<div className='about'>
			<Navbar />

			{/* ── Intro ── */}
			<section className='about-hero inner-container'>
				<p className='eyebrow about-eyebrow'>About · Constructive Advice</p>
				<h1>Hi, I'm Roslyn.</h1>
				<p className='about-lede'>
					I'm Roslyn Morgante, the professional behind Constructive Advice. My background includes senior
					accounting and finance roles, real estate accounting, budgeting, cost accounting, and staff
					training.
				</p>
				<p className='about-body'>
					Since August 2024, my work with Intuit has included bookkeeping support; I now serve as an
					Implementation Consultant onboarding QuickBooks Online Advanced customers. I bring that practical,
					hands-on experience to helping business owners build more organized accounting workflows, and to
					making sure the software works the way you do.
				</p>
				<p className='about-body'>
					Constructive Advice is my independent business, based in Buffalo, NY, serving Western New York and
					remote clients by arrangement.
				</p>
			</section>

			{/* ── Credentials ── */}
			<section className='credentials inner-container'>
				<p className='eyebrow credentials-eyebrow'>Credentials &amp; certifications</p>
				<h2>Practical expertise, kept current.</h2>
				<div className='credential-grid'>
					{CREDENTIALS.map((credential) => (
						<figure className='credential-card' key={credential.title}>
							<div className='credential-img'>
								<img src={credential.src} alt={credential.alt} loading='lazy' />
							</div>
							<figcaption>{credential.title}</figcaption>
						</figure>
					))}
				</div>
			</section>

			{/* ── How I work ── */}
			<section className='about-values'>
				<div className='inner-container values-grid'>
					<h2>
						Better bookkeeping.{' '}
						<br />
						Less paper.
					</h2>
					<div>
						<p>
							Constructive Advice is a practical, paperless practice: QuickBooks Online supplies the
							software, and I supply thoughtful setup, cleanup, and training so your records are easier to
							find and easier to trust.
						</p>
						<ul className='values-list'>
							<li>Simple digital routines instead of paper files</li>
							<li>Reports you understand, and know how to ask about</li>
							<li>Hands-on training so your team stays confident</li>
						</ul>
					</div>
				</div>
			</section>

			{/* ── CTA panel ── */}
			<CtaPanel />

			<Footer />
		</div>
	);
}

export default About;
