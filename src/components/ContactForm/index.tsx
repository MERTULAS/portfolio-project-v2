'use client';

import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './contactForm.scss';

const ContactForm = () => {
    const form = useRef<HTMLFormElement>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState("");

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!form.current) return;

        setIsSubmitting(true);
        setError("");

        emailjs.sendForm(
            process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
            form.current,
            process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
        )
            .then((result) => {
                setIsSubmitting(false);
                setIsSubmitted(true);
                form.current?.reset();
            }, (error) => {
                setIsSubmitting(false);
                setError("Failed to send your message. Please try again later.");
            });
    };

    return (
        <div className="contact-form-container">
            <div className="contact-header">
                <h1>Get in Touch</h1>
                <p>Have a question or want to work together? I'd love to hear from you.</p>
            </div>

            {isSubmitted ? (
                <div className="success-message">
                    <h2>Thank You!</h2>
                    <p>Your message has been successfully sent. I'll get back to you as soon as possible.</p>
                    <button onClick={() => setIsSubmitted(false)} className="reset-button">
                        Send Another Message
                    </button>
                </div>
            ) : (
                <form ref={form} onSubmit={sendEmail} className="contact-form">
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="from_name">Name</label>
                            <input
                                type="text"
                                id="from_name"
                                name="from_name"
                                placeholder="Your name"
                                required
                            />
                        </div>

                        <div className="form-group">
                            <label htmlFor="from_email">Email</label>
                            <input
                                type="email"
                                id="from_email"
                                name="from_email"
                                placeholder="Your email address"
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input
                            type="text"
                            id="subject"
                            name="subject"
                            placeholder="What is this regarding?"
                            required
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            placeholder="Write your message here..."
                            rows={5}
                            required
                        ></textarea>
                    </div>

                    {error && <div className="error-message">{error}</div>}

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            )}
        </div>
    );
};

export default ContactForm;