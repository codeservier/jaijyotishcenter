import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const KnowYourSign = () => {
  // State to handle form data and status
  const [form, setForm] = useState({
    name: '',
    birthDate: '',
    contactNumber: ''
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

    // Validate form
    const isValid = Object.values(form).every((field) => field.trim() !== '');

    if (isValid) {
      emailjs.sendForm('service_0g97v9p', 'template_kq774f9', e.target, 'HK4mIkZI01IBPf94S')
        .then((result) => {
          setStatus('Message sent successfully!');
          setForm({
            name: '',
            birthDate: '',
            contactNumber: ''
          });
        }, (error) => {
          setStatus('Message failed to send.');
        });
    } else {
      setStatus('Please fill in all fields.');
    }
  };

  return (
    <>
      <div className="kys-container">
        <div>
          <h1 style={{color:"white"}}>संदेश के माध्यम से अपने हस्तरेखा चिन्ह को जानें</h1>
        </div>
        <form className='kys-input-fields-container' onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder='नाम'
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="birthDate"
            placeholder='जन्मतिथि'
            value={form.birthDate}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="contactNumber"
            placeholder='सम्पर्क नंबर'
            value={form.contactNumber}
            onChange={handleChange}
            required
          />
          <button type="submit" className='btn btn-primary'>सबमिट करें</button>
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </>
  );
};

export default KnowYourSign;
