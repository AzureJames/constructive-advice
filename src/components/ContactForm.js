import React, { useState } from 'react';
import { useFormik } from 'formik';
import emailjs from '@emailjs/browser';

import '../scss/components/_form.scss';
import '../scss/components/_button.scss';

// Offers from the homepage, per the marketing plan
const SERVICE_OPTIONS = [
	'Setup & onboarding',
	'Bookkeeping cleanup & reviews',
	'Training & support',
	'Not sure yet — help me decide',
];

// A custom validation function. This must return an object which keys are symmetrical to our values/initialValues
const validate = (values) => {
	const errors = {};
	if (!values.name.trim()) {
		errors.name = 'Name required';
	}

	if (!values.email.trim()) {
		errors.email = 'Email required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Invalid email address';
	}

	return errors;
};

const ContactForm = () => {
	const [success, setSuccess] = useState(false);

	// Pass the useFormik() hook initial form values, a validate function that will be called when
	// form values change or fields are blurred, and a submit function that will
	// be called when the form is submitted

	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			service: '',
			message: '',
		},
		validate,
		onSubmit: (values) => {
			// https://dashboard.emailjs.com/admin/account
			emailjs
				.send(
					process.env.REACT_APP_EMAILJS_SERVICE_ID,
					process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
					values,
					process.env.REACT_APP_EMAILJS_USER_ID
				)
				.then(() => {
					// it worked
					formik.resetForm();
					setSuccess(true);
				})
				.catch((err) => {
					console.log(err.message);
				});
		},
	});

	return (
		<form className='contact-form' onSubmit={formik.handleSubmit}>
			<div className='form-row'>
				<div className='field'>
					<label htmlFor='name'>First &amp; last name *</label>
					<input
						type='text'
						id='name'
						name='name'
						required
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.name}
					/>
					{formik.touched.name && formik.errors.name ? (
						<div className='errors'>{formik.errors.name}</div>
					) : null}
				</div>
				<div className='field'>
					<label htmlFor='email'>Email *</label>
					<input
						type='email'
						id='email'
						name='email'
						required
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						value={formik.values.email}
					/>

					{formik.touched.email && formik.errors.email ? (
						<div className='errors'>{formik.errors.email}</div>
					) : null}
				</div>
			</div>

			<div className='field'>
				<label htmlFor='service'>I'm interested in</label>
				<select
					id='service'
					name='service'
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.service}
				>
					<option value=''>Choose a service (optional)</option>
					{SERVICE_OPTIONS.map((option) => (
						<option key={option} value={option}>
							{option}
						</option>
					))}
				</select>
			</div>

			<div className='field'>
				<label htmlFor='message'>Tell me about your books</label>
				<textarea
					name='message'
					id='message'
					placeholder="What's going on with your QuickBooks, and what would you like to improve?"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					value={formik.values.message}
				/>
			</div>

			<div className='btn-container'>
				<input
					className='btn btn--forest'
					type='submit'
					value='Book a 20-minute consultation ↗'
					name='contact'
				/>
			</div>
			<p className='contact-note smltxt'>
				Prefer email or a call? Reach me at ConstructiveAdvice1@gmail.com or 716-880-6069.
				I reply within one business day.
			</p>
			<div aria-live='polite'>
				<p className='success'>
					{success === true
						? "Thanks for reaching out! I'll reply within one business day to book your consultation."
						: ''}
				</p>
			</div>
		</form>
	);
};

export default ContactForm;
