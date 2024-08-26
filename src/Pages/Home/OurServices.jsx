import study from '../../assets/study.png'
import serviceschart from '../../assets/servicechart.png'
import personalrahsi from '../../assets/personalrashi.png'
import anuman from '../../assets/anuman.png'
const services = [
  {
    "id": "1",
    "src": study,
    "title": "ज्योतिष चार्ट विश्लेषण",
    "description": "ज्योतिष चार्टों की विस्तृत व्याख्या और ग्रहों के प्रभाव का विश्लेषण, जो आपके व्यक्तिगत और पेशेवर जीवन में संभावित प्रभाव को समझने में मदद करता है।"
  },
  {
    "id": "2",
    "src": serviceschart,
    "title": "व्यक्तिगत राशिफल",
    "description": "ज्योतिष चार्टों की विस्तृत व्याख्या और ग्रहों के प्रभाव का विश्लेषण, जो आपके व्यक्तिगत और पेशेवर जीवन में संभावित प्रभाव को समझने में मदद करता है।"
  },
  {
    "id": "3",
    "src": personalrahsi,
    "title": "भविष्यवाणी कार्ड अध्ययन",
    "description": "ज्योतिष चार्टों की विस्तृत व्याख्या और ग्रहों के प्रभाव का विश्लेषण, जो आपके व्यक्तिगत और पेशेवर जीवन में संभावित प्रभाव को समझने में मदद करता है।"
  },
  {
    "id": "4",
    "src": anuman,
    "title": "ज्योतिषीय पूर्वानुमान",
    "description": "ज्योतिष चार्टों की विस्तृत व्याख्या और ग्रहों के प्रभाव का विश्लेषण, जो आपके व्यक्तिगत और पेशेवर जीवन में संभावित प्रभाव को समझने में मदद करता है।"
  }
]



export default function MySkills() {
  return (
    <section className="skills--section" id="mySkills">
      <div className="portfolio--container">
        <h2 className="skills--section--heading">हमारी सेवाएँ</h2>
      </div>
      <div className="skills--section--container">
        {services?.map((item, index) => (
          <div key={index} className="skills--section--card">
            <div className="skills--section--img">
              <img width={80} src={item.src} alt="Product Chain" />
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
