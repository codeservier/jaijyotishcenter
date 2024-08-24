import React from 'react';

const KnowYourSign = () => {
  return (
    <>
    <div  className="kys-container">
        <div>
            <h1 style={{color:"white"}}>संदेश के माध्यम से अपने हस्तरेखा चिन्ह को जानें</h1>
        </div>
        <div className='kys-input-fields-container'>
            <input placeholder='Date'/>
            <input placeholder='Date'/>
            <input placeholder='Date'/>
            <button className='btn btn-primary'>Submit</button>
        </div>
    </div>
    </>
  );
};

export default KnowYourSign;
