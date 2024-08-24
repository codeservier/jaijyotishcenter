import React from 'react';

const testimonials = [
  {
    name: "Alice Johnson",
    text: "The astrology reading was spot-on! I felt like the insights provided were incredibly accurate and helped me navigate a tough decision.",
    image: "https://via.placeholder.com/150", 
  },
  {
    name: "Bob Smith",
    text: "I've never had such a detailed and personal reading. The predictions and guidance were clear and very helpful.",
    image: "https://via.placeholder.com/150", 
  },
  {
    name: "Carla Davis",
    text: "The astrologer really took the time to understand my situation. The reading was enlightening and provided valuable perspectives.",
    image: "https://via.placeholder.com/150", 
  },
  {
    name: "David Brown",
    text: "Exceptional experience! The reading resonated deeply with me and gave me confidence in the choices I need to make.",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "Eva White",
    text: "Highly recommend this astrology service. The readings are thorough and the guidance is truly transformative.",
    image: "https://via.placeholder.com/150", 
  },

];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>हमारे ग्राहक क्या कहते हैं








</h2>
      <div className="testimonials-scrollable">
        <div className="testimonials-wrapper">
          {testimonials.concat(testimonials).map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <img src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
              <div className="testimonial-content">
                <p className="testimonial-text">"{testimonial.text}"</p>
                <p className="testimonial-name">- {testimonial.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
