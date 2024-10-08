import React from 'react';
import img1 from '../../assets/1.png'
import img2 from '../../assets/2.png'
import img3 from '../../assets/3.png'
import img4 from '../../assets/4.png'
import img5 from '../../assets/5.png'

const testimonials = [
  {
    name: "अरुण शर्मा",
    text: "ज्योतिषीय पठन बेहद सूझ-बूझ भरा और सटीक था। इसने मुझे महत्वपूर्ण जीवन निर्णय लेने के लिए आवश्यक स्पष्टता प्रदान की।",
    image: img1,
  },
  {
    name: "राजेश पटेल",
    text: "पठन की गहराई ने मुझे प्रभावित किया। ज्योतिषी की मार्गदर्शिका बहुत व्यावहारिक और मेरे जीवन के लिए प्रासंगिक थी।",
    image: img2,
  },
  {
    name: "सुबोध राव",
    text: "यह पठन वास्तव में एक नई दृष्टि प्रदान करने वाला था। ज्योतिषी ने मेरी व्यक्तिगत स्थिति को समझने के लिए समय निकाला और मूल्यवान सलाह दी।",
    image: img3,
  },
  {
    name: "अमित वर्मा",
    text: "असाधारण सेवा! ज्योतिषी की भविष्यवाणियाँ सटीक थीं और इसने मुझे अपने जीवन के एक महत्वपूर्ण चरण को अधिक आत्मविश्वास के साथ नेविगेट करने में मदद की।",
    image: img4,
  },
  {
    name: "मितेश अय्यर",
    text: "मैं इस ज्योतिष सेवा की अत्यधिक सिफारिश करता हूँ। प्रदान की गई अंतर्दृष्टियाँ परिवर्तनीय थीं और मेरे जीवन पथ की बेहतर समझ प्राप्त करने में मदद की।",
    image: img5,
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
              <img width={40} src={testimonial.image} alt={testimonial.name} className="testimonial-image" />
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
