import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const [categories, setCategories] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    axios.get('https://picsum.photos/v2/list?limit=10')
      .then(response => {
        setImages(response.data);
      })
      .catch(error => {
        console.error("Error", error);
      });
  }, []);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => setCategories(response.data))
      .catch(error => console.error('Error', error));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <div>
      <Slider {...settings} className='img'>
        {images.map((image, index) => (
          <div key={index}>
            <img className='sliderImage' src={image.download_url} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </Slider>
      
      <h1 className='category'>Categories:</h1>
      <div className='categories'>
        {categories.map((category, index) => (
          <div key={index}>{category}</div>
        ))}
      </div>
    </div>
  );
}

export default Home;
