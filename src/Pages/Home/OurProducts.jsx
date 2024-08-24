import data from "../../data/index.json";
import rudra from '../../assets/rudrakshmala.png'
import ring from '../../assets/ring.jpg'
import mangal from '../../assets/haar.png'
import moon from '../../assets/moonstone.jpg'

const products = [
  {
    "id": "1",
    "src": rudra,
    "title": "रुद्राक्ष माला",
    "description": "प्राचीन रुद्राक्ष के बीजों से बनी माला, जो मानसिक शांति और आध्यात्मिक उन्नति के लिए उपयोगी है।"
  },
  {
    "id": "2",
    "src": ring,
    "title": "पुखराज अंगूठी",
    "description": "प्राचीन रुद्राक्ष के बीजों से बनी माला, जो मानसिक शांति और आध्यात्मिक उन्नति के लिए उपयोगी है।"
  },
  {
    "id": "3",
    "src": mangal,
    "title": "मंगलसूत्र पत्थर",
    "description": "प्राचीन रुद्राक्ष के बीजों से बनी माला, जो मानसिक शांति और आध्यात्मिक उन्नति के लिए उपयोगी है।"
  },
  {
    "id": "4",
    "src": moon,
    "title": "चंद्रमणि माला",
    "description": "प्राचीन रुद्राक्ष के बीजों से बनी माला, जो मानसिक शांति और आध्यात्मिक उन्नति के लिए उपयोगी है।"
  }
]

export default function OurProducts() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">Our Products</h2>
      </div>
      <div className="skills--section--container">
        {products?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img width={100} src={item.src} alt="Product Chain" />
            </div>
            <div className="skills--section--card--content">
              <h3 className="skills--section--title">{item.title}</h3>
              <p className="skills--section--description">{item.description}</p>
            </div>  
          </div>
        ))}
      </div>
    </section>
  );
}
