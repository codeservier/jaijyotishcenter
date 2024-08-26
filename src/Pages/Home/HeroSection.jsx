import React, { useState, useEffect } from "react";
import img from "../../assets/img2.png"; // Adjust the path as necessary

// Custom Typing Effect Component
const TypingEffect = ({
  text = [""], // Default to an empty string if text is undefined
  speed = 150,
  eraseSpeed = 100,
  delay = 2000,
}) => {
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [typingCompleted, setTypingCompleted] = useState(false);

  useEffect(() => {
    if (text.length === 0) return; // Early return if text array is empty

    const currentText = text[index];
    const handleTyping = () => {
      if (isDeleting) {
        setDisplayText((prev) => prev.slice(0, -1));
        if (displayText === "") {
          setIsDeleting(false);
          setIndex((prevIndex) => (prevIndex + 1) % text.length);
        }
      } else {
        setDisplayText(currentText.slice(0, displayText.length + 1));
        if (displayText === currentText) {
          setTypingCompleted(true);
          setIsDeleting(true);
        }
      }
    };

    if (isTyping) {
      const timer = setTimeout(handleTyping, isDeleting ? eraseSpeed : speed);
      return () => clearTimeout(timer);
    }
  }, [displayText, isDeleting, index, text, speed, eraseSpeed, isTyping]);

  useEffect(() => {
    if (typingCompleted) {
      const delayTimer = setTimeout(() => {
        setIsTyping(true);
        setTypingCompleted(false);
      }, delay);
      return () => clearTimeout(delayTimer);
    }
  }, [typingCompleted, delay]);

  useEffect(() => {
    setIsTyping(true);
  }, [index]);

  return <span>{displayText}</span>;
};

// Hero Section Component
const HeroSection = () => {
  const texts = ["Pt. Jai Pratap Dixit"];

  return (
    <section id="heroSection" className="hero--section">
      <style>
        {`
          @keyframes blink {
            0% { border-right: 2px solid rgba(255, 255, 255, 0.75); }
            100% { border-right: 2px solid transparent; }
          }
          .typing-effect {
            white-space: normal; /* Allow text to wrap */
            overflow: hidden; /* Hide overflow if necessary */
            border-right: 2px solid rgba(255, 255, 255, 0.75);
            animation: blink 0.75s step-end infinite;
          }
          .hero--section--title {
            overflow-wrap: break-word; /* Handle long words */
          }
          .hero--section--content {
            width: 100%; /* Ensure content takes full width */
          }
        `}
      </style>
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">नमस्कार 🙏</p>
          <h1 className="hero--section--title">
            <span className="typing-effect">
              <TypingEffect
                text={texts}
                speed={150}         // Adjust speed here
                eraseSpeed={100}
                delay={2000}        // Adjust delay here
              />
            </span>
            <br />
            <p style={{ fontSize: "30px", color: "white" }}>
              यदि आप किसी समस्या का समाधान चाहते हैं, जैसे कि:
            </p>
          </h1>
          <p style={{ color: "white", fontSize: 30, textAlign: "justify" }}>
            जॉब या बिजनेस क्या करना चाहिए? सफलता कब मिलेगी? वैवाहिक जीवन कैसा
            होगा? लव मैरिज होगी या अरेंज मैरिज? कुंडली में कोई दोष या योग के
            बारे में जानकारी? और कोई भी समस्या?
            <br />
          </p>
          <p style={{ color: "white", textAlign: "justify" }}>
            तो सबसे पहले आपको Rs 251/- PhonePe, Google Pay (7376253763) के
            माध्यम से भुगतान करना होगा। इसके बाद आपको उस पेमेंट का स्क्रीनशॉट
            व्हाट्सएप पर भेजना होगा। हमारी टीम आपको अपॉइंटमेंट का समय देगी,
            जिसके बाद कॉल पर आपकी सभी समस्याओं का समाधान बताया जाएगा।
          </p>
          <button className="btn btn-primary">Contact Us</button>
        </div>
      </div>
      <div className="hero--section--img">
        <img src={img} alt="ज्योतिष हीरो सेक्शन" />
      </div>
    </section>
  );
};

export default HeroSection;
