import React, { useState } from 'react';

function ViewMatches() {
  const imageUrls = [
    'https://img.buzzfeed.com/buzzfeed-static/static/2023-06/12/23/asset/899c84e520bc/sub-buzz-1901-1686611237-1.png?downsize=900:*&output-format=auto&output-quality=auto',
    'https://img.buzzfeed.com/buzzfeed-static/static/2023-06/13/16/asset/e9c2c4aacab7/sub-buzz-942-1686674699-1.png?downsize=900:*&output-format=auto&output-quality=auto',
    'https://img.buzzfeed.com/buzzfeed-static/static/2023-06/12/23/asset/7853632e460d/sub-buzz-1458-1686611337-1.png',
    'https://img.buzzfeed.com/buzzfeed-static/static/2023-06/12/23/asset/fae094e08f82/sub-buzz-2180-1686611333-4.png',
    'https://img.freepik.com/premium-photo/university-student-by-generative-ai_777078-785.jpg',
    'https://img.freepik.com/premium-photo/portrait-young-happy-latin-student-standing-classroom-looking-camera_562687-3027.jpg'
  ];

  const handleClick = (imageUrl) => {
    console.log('Image clicked:', imageUrl);
  };

  return (
    <>
    <div style={{marginLeft:215}}>
      <div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
          <h1>View Matches</h1>
          <p style={{ fontSize: 15 }}>View your top matches and find the perfect study buddy for you.</p>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', padding: '20px' }}>
        {imageUrls.map((imageUrl, index) => (
          <div key={index} style={{ cursor: 'pointer' }} onClick={() => handleClick(imageUrl)}>
            <img src={imageUrl} alt={`Image ${index}`} style={{ width: 300, height: 300 }} />
          </div>
        ))}
      </div>
      </div>
    </>
  );
}

export default ViewMatches;
