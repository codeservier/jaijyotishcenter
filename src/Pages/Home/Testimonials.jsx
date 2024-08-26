import React from 'react';

const testimonials = [
  {
    name: "अनिता शर्मा",
    text: "ज्योतिषीय पठन बेहद सूझ-बूझ भरा और सटीक था। इसने मुझे महत्वपूर्ण जीवन निर्णय लेने के लिए आवश्यक स्पष्टता प्रदान की।",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "राजेश पटेल",
    text: "पठन की गहराई ने मुझे प्रभावित किया। ज्योतिषी की मार्गदर्शिका बहुत व्यावहारिक और मेरे जीवन के लिए प्रासंगिक थी।",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "सुनीता राव",
    text: "यह पठन वास्तव में एक नई दृष्टि प्रदान करने वाला था। ज्योतिषी ने मेरी व्यक्तिगत स्थिति को समझने के लिए समय निकाला और मूल्यवान सलाह दी।",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "अमित वर्मा",
    text: "असाधारण सेवा! ज्योतिषी की भविष्यवाणियाँ सटीक थीं और इसने मुझे अपने जीवन के एक महत्वपूर्ण चरण को अधिक आत्मविश्वास के साथ नेविगेट करने में मदद की।",
    image: "https://via.placeholder.com/150",
  },
  {
    name: "मीरा अय्यर",
    text: "मैं इस ज्योतिष सेवा की अत्यधिक सिफारिश करती हूँ। प्रदान की गई अंतर्दृष्टियाँ परिवर्तनीय थीं और मेरे जीवन पथ की बेहतर समझ प्राप्त करने में मदद की।",
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
