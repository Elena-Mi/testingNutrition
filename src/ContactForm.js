import React from 'react'
import { useForm, ValidationError } from '@formspree/react';



function ContactForm() {
	const [state, handleSubmit] = useForm('xyyrjbeq')
	if (state.succeeded) {
		return <p>Thanks for joining!</p>
	}
	return (
		<div className='container_form'>
		

			<h1 className='container_form_title'>Contact us</h1>

			<form className='form' onSubmit={handleSubmit}>
				<label htmlFor='email' className='fill_form'>
					How we can help?
				</label>

				<input
					className='form_input'
					id='email'
					type='email'
					name='email'
					placeholder='Type your email......'
				/>

				<ValidationError prefix='Email' field='email' errors={state.errors} />

				<textarea
					id='message'
					name='message'
					placeholder='Type message....'
					className='form_message'
				/>

				<ValidationError
					prefix='Message'
					field='message'
					errors={state.errors}
				/>

				<button type='submit' disabled={state.submitting} className='form_btn'>
					Submit
				</button>
			</form>
		</div>
	)
}

export default ContactForm
