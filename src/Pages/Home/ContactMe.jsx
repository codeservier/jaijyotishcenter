import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function ContactMe() {
  // State to handle form data and status
  const [form, setForm] = useState({
    firstName: '',
    birthDate: '',
    birthTime: '',
    birthPlace: '',
    mobileNumber: '',
    issues: '',
    topic: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simple validation to check if all fields are filled
    const isValid = Object.values(form).every((field) => field.trim() !== '');

    if (isValid) {
      emailjs.sendForm('service_0g97v9p', 'template_kq774f9', e.target, 'HK4mIkZI01IBPf94S')
        .then((result) => {
          setStatus('Message sent successfully!');
          setForm({
            firstName: '',
            birthDate: '',
            birthTime: '',
            birthPlace: '',
            mobileNumber: '',
            issues: '',
            topic: '',
            message: ''
          });
        }, (error) => {
          setStatus('Message failed to send.');
        });
    } else {
      setStatus('Please fill in all fields.');
    }
  };

  return (
    <section id="Contact" className="contact--section">
      <div>
        <p className="sub--title">Get In Touch</p>
        <h2>संपर्क करें</h2>
        <p className="text-lg">
          कृपया निम्नलिखित विवरण भेजें:<br />
          पहली मुलाकात की फीस Rs 501/- (30 मिनट) दूसरी मुलाकात की फीस Rs 1101/- (1 घंटा)
        </p>
      </div>
      <form className="contact--form--container" onSubmit={handleSubmit}>
        <div className="container">
          <label htmlFor="first-name" className="contact--label">
            <span className="text-md">पूरा नाम:</span>
            <input
              type="text"
              className="contact--input text-md"
              name="firstName"
              id="first-name"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="birth-date" className="contact--label">
            <span className="text-md">जन्म तिथि:</span>
            <input
              type="date"
              className="contact--input text-md"
              name="birthDate"
              id="birth-date"
              value={form.birthDate}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="birth-time" className="contact--label">
            <span className="text-md">जन्म समय:</span>
            <input
              type="text"
              className="contact--input text-md"
              name="birthTime"
              id="birth-time"
              value={form.birthTime}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="birth-place" className="contact--label">
            <span className="text-md">जन्म स्थान:</span>
            <input
              type="text"
              className="contact--input text-md"
              name="birthPlace"
              id="birth-place"
              value={form.birthPlace}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="mobile-number" className="contact--label">
            <span className="text-md">मोबाइल नंबर:</span>
            <input
              type="tel"
              className="contact--input text-md"
              name="mobileNumber"
              id="mobile-number"
              value={form.mobileNumber}
              onChange={handleChange}
              required
            />
          </label>
          <label htmlFor="issues" className="contact--label">
            <span className="text-md">समस्याएँ (यदि कोई हो)</span>
            <input
              type="text"
              className="contact--input text-md"
              name="issues"
              id="issues"
              value={form.issues}
              onChange={handleChange}
              required
            />
          </label>
        </div>
 
        <label htmlFor="message" className="contact--label">
          <span className="text-md">Message</span>
          <textarea
            className="contact--input text-md"
            id="message"
            name="message"
            rows="8"
            placeholder="Type your message..."
            value={form.message}
            onChange={handleChange}
            required
          />
        </label>
        <label htmlFor="checkbox" className="checkbox--label">
          <input
            type="checkbox"
            required
            name="checkbox"
            id="checkbox"
          />
          <span style={{color:'black'}} className="text-sm">मैं शर्तों को स्वीकार करता हूँ/करती हूँ</span>
        </label>
        <div>
          <button type="submit" className="btn btn-primary contact--form--btn">Submit</button>
        </div>
      </form>
      {status && <p className="status-message">{status}</p>}
    </section>
  );
}
