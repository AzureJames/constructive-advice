import React from 'react';
import { Link } from 'react-router-dom';
import { FaCheck } from 'react-icons/fa';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import CtaPanel from '../components/CtaPanel';

//STYLING
import '../scss/pages/_home.scss';

function Home() {
	return (
		<div className='home'>
			<Navbar />

			{/* ── Hero ── */}
			<section className='hero inner-container'>
				<div className='hero-copy'>
					<p className='eyebrow hero-eyebrow'>QuickBooks guidance. Human support.</p>
					<h1 className='hero-title'>
						Clearer books.{' '}
						<br />
						Confident teams.{' '}
						<br />
						<span className='hero-accent'>A stronger start.</span>
					</h1>
					<p className='hero-sub'>
						Get QuickBooks Online working for your business—with thoughtful setup, bookkeeping cleanup, and
						training that makes it click.
					</p>
					<div className='hero-actions'>
						<Link to='/contact' className='btn btn--forest'>
							Book a 20-minute consultation<span className='btn__arrow' aria-hidden='true'>↗</span>
						</Link>
						<a href='#services' className='link-underline'>
							Explore services
						</a>
					</div>
					<p className='hero-note'>
						Based in Buffalo, NY <span className='dot' aria-hidden='true'>·</span> Remote support available
					</p>
				</div>

				<div className='hero-art'>
					<div className='art-card' aria-hidden='true'>
						<h3 className='art-title'>From overwhelmed to on track.</h3>
						<ul className='art-list'>
							<li>
								<span className='art-check'><FaCheck /></span>QuickBooks set up for the way you work
							</li>
							<li>
								<span className='art-check'><FaCheck /></span>Cleaner records. More useful reports.
							</li>
							<li>
								<span className='art-check'><FaCheck /></span>A team that knows what to do next
							</li>
						</ul>
						<div className='art-progress'>
							<span></span>
						</div>
					</div>
					<div className='art-float' aria-hidden='true'>
						<span className='float-arrow'>↗</span>
						<div>
							<p className='float-title'>Less paperwork. More possibility.</p>
							<p className='float-sub'>Practical support. A paperless approach.</p>
						</div>
					</div>
				</div>
			</section>

			{/* ── Feature strip ── */}
			<section className='feature-strip'>
				<ul className='inner-container strip-list'>
					<li>
						<span className='strip-check'><FaCheck /></span>QuickBooks Online &amp; Advanced
					</li>
					<li>
						<span className='strip-check'><FaCheck /></span>Setup &amp; implementation
					</li>
					<li>
						<span className='strip-check'><FaCheck /></span>Bookkeeping cleanup
					</li>
					<li>
						<span className='strip-check'><FaCheck /></span>Personal, hands-on training
					</li>
				</ul>
			</section>

			{/* ── Testimonials ── */}
			<section className='testimonial inner-container'>
				<div className='testimonial-label'>
					<p className='eyebrow test-eyebrow'>Client perspective</p>
					<span className='stars' aria-hidden='true'>★★★★★</span>
				</div>
				<div className='testimonial-quotes'>
					<div className='testimonial-quote-item'>
						<span className='stars' aria-hidden='true'>★★★★★</span>
						<blockquote className='testimonial-quote'>
							&ldquo;I have full trust in her for all my accounting needs.&rdquo;
						</blockquote>
						<p className='testimonial-cite'>— Cory Gallagher, Client</p>
					</div>
					<div className='testimonial-quote-item'>
						<span className='stars' aria-hidden='true'>★★★★★</span>
						<blockquote className='testimonial-quote'>
							&ldquo;Knows what she is doing. Professional and thorough. 10 out of 10, would recommend!&rdquo;
						</blockquote>
						<p className='testimonial-cite'>— Juan Iglesius, Client</p>
					</div>
				</div>
			</section>

			{/* ── Services ── */}
			<section className='services inner-container' id='services'>
				<div className='services-head'>
					<div>
						<p className='eyebrow services-eyebrow'>Support that meets you where you are</p>
						<h2>What would make work easier?</h2>
					</div>
					<p className='services-intro'>
						Whether you're starting fresh or untangling the details, we'll build a practical plan together.
					</p>
				</div>
				<div className='services-cards'>
					<article className='service-card'>
						<p className='service-label'><span className='service-bullet' aria-hidden='true'><FaCheck /></span>Get started</p>
						<h3>Set up for success.</h3>
						<p className='service-body'>
							QuickBooks Online setup and Advanced onboarding shaped around your workflows, reporting
							needs, and team.
						</p>
						<Link to='/contact' className='service-link'>
							Explore setup &amp; onboarding <span aria-hidden='true'>↗</span>
						</Link>
					</article>
					<article className='service-card'>
						<p className='service-label'><span className='service-bullet' aria-hidden='true'><FaCheck /></span>Get organized</p>
						<h3>Make sense of your books.</h3>
						<p className='service-body'>
							Bring order to your records with bookkeeping cleanup and ongoing reviews that help you stay
							on track.
						</p>
						<Link to='/contact' className='service-link'>
							Explore cleanup &amp; reviews <span aria-hidden='true'>↗</span>
						</Link>
					</article>
					<article className='service-card'>
						<p className='service-label'><span className='service-bullet' aria-hidden='true'><FaCheck /></span>Get confident</p>
						<h3>Learn it. Use it. Own it.</h3>
						<p className='service-body'>
							One-on-one and team training that turns everyday QuickBooks tasks into clear, repeatable
							habits.
						</p>
						<Link to='/contact' className='service-link'>
							Explore training &amp; support <span aria-hidden='true'>↗</span>
						</Link>
					</article>
				</div>
			</section>

			{/* ── About Roslyn ── */}
			<section className='meet-guide'>
				<div className='inner-container meet-grid'>
					<div className='guide-tile' aria-hidden='true'>
						<span className='guide-monogram'>RM</span>
					</div>
					<div className='meet-copy'>
						<p className='eyebrow meet-eyebrow'>Meet your guide · Roslyn Morgante</p>
						<h2>
							Experienced guidance.{' '}
							<br />
							A real person in your corner.
						</h2>
						<p>
							I bring a background in accounting and finance, hands-on bookkeeping expertise, and current
							experience onboarding QuickBooks Online Advanced customers as an Implementation Consultant.
						</p>
						<p>
							My goal is simple: help you understand your books, use your tools confidently, and get back
							to running your business.
						</p>
						<Link to='/about' className='link-underline'>
							Get to know Roslyn <span aria-hidden='true'>↗</span>
						</Link>
					</div>
				</div>
			</section>

			{/* ── Green approach ── */}
			<section className='green-band' id='green-approach'>
				<div className='inner-container green-grid'>
					<h2>
						Better bookkeeping.{' '}
						<br />
						Less paper.
					</h2>
					<p>
						I help you build simple digital routines that keep your records easier to find and reduce
						reliance on paper—so your bookkeeping supports the way you actually work. Practical for you,
						lighter on the planet.
					</p>
				</div>
			</section>

			{/* ── CTA panel ── */}
			<CtaPanel />

			<Footer />
		</div>
	);
}

export default Home;
