import React from 'react';
import ImageSlider from './Components/Slider';
import image1 from './images/image1.jpg'
import image2 from './images/image2.jpg'
import image3 from './images/image3.jpg'
import image4 from './images/image4.jpg'
import image5 from './images/image5.jpg'
import MyImageList from './Components/MyImageList';
import Contacts from './Components/Contacts';
import MyNavBar from './Components/MyNavBar';



const IMAGES = [
    { url: image1, alt: "Car One" },
    { url: image2, alt: "Car Two" },
    { url: image3, alt: "Car Three" },
    { url: image4, alt: "Car Four" },
    { url: image5, alt: "Car Five" },
  ]

function Home() {
  return (
    <div>

      <Contacts/>
      <MyNavBar/>
      
      <div
          style={{
          width: "100%",
          aspectRatio: "10 / 6",
          margin: "0 auto"
        }}
      >
        <ImageSlider images={IMAGES} />
      </div>

      <div>
        <MyImageList/>
      </div>
      
    </div>
  );
}



export default Home;

