import React, { useRef } from 'react'
import '../styles/Contact.css';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_9lj8mex', // Replace with your EmailJs Service ID
                'template_dpgnqli', // Replace with your EmailJS ID
                form.current,
                '2ZeHj5VOUeHYr7QGq' // Replace with your EmailJS Public Key
            )
            .then(
                (result) => {
                    console.log('Email send successfully:', result.text);
                    alert('Your message has been sent successfully!');
                    form.current.reset(); // Reset the form after successful submission
                },
                (error) => {
                    console.error('Email send error:', error.text);
                    alert('Failed to send message. Please try again later.');
                }
            );
    };

  return (
    <div id='contact' className='contact'>
      <div className="contact-content">
        <h1>Contact Us ...</h1>
        <span>
            Need to get in touch with us? Either fill out the 
            form with your inquiry or find the department email you'd 
            like to contact below.
        </span>
      </div>

      <div className='contact-form'>
        <form ref={form} className="form" onSubmit={sendEmail}>
            <div className="contact-field">
                <div className="form-group">
                    <input
                        type='text'
                        name='firstName'
                        placeholder='First Name'
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type='text'
                        name='lastName'
                        placeholder='Last Name'
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type='email'
                        name='email'
                        placeholder='Email'
                        required
                    />
                </div>
                <div className="form-group">
                    <input
                        type='number'
                        name='telephone'
                        placeholder='Telephone'
                    />
                </div>
                <div className="form-group">
                    <textarea
                        name='message'
                        placeholder='Write your message here...'
                        rows='5'
                        required
                    />
                </div>
            </div>

            <input type='submit' className='submit-button' value='Send Message' />
        </form>
      </div>
    </div>
  )
}
