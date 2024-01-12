import React from 'react';
import image1 from '../images/image1.jpg';
import image2 from '../images/image2.jpg';
import image3 from '../images/image3.jpg';
import image4 from '../images/image4.jpg';
import image5 from '../images/image5.jpg';
import './MyImageList.css';

const IMAGES = [
  {
    img: image1,
    price: 100,
    about: 'Cottage 01',
    target_link: ''
  },
  {
    img: image2,
    price: 200,
    about: 'Cottage 02',
    target_link: ''
  },
  {
    img: image3,
    price: 300,
    about: 'Cottage 03',
    target_link: ''
  },
  {
    img: image4,
    price: 400,
    about: 'Cottage 04',
    target_link: ''
  },
  {
    img: image1,
    price: 500,
    about: 'Cottage 05',
    target_link: ''
  }
];

function MyImageList() {
  return (
    <div className='main'>
      <div className="divider">{'\u00a0\u00a0\u00a0Cottages\u00a0\u00a0\u00a0'}</div>
      <div className='grid-container'>
        {IMAGES.map((item, index) => (
          <div className='image-component grow' key={index}>

            
            <a className='link' target={item.target_link} href={item.img}>
              <img  src={item.img} alt={`Image ${index + 1}`} />
            </a>


            <div className='description'> 
              <div className="desc-tag">{item.about}</div>
              <div className='price-tag'></div>           
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}

export default MyImageList;
