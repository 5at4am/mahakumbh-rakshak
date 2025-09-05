import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../gallery/Gallery.css';

const Gallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: '/img/img1.png',
      title: 'Devotees Gathering',
      description: 'Millions of devotees gather for the sacred dip'
    },
    {
      id: 2,
      image: '/img/img2.png',
      title: 'Sacred Kshipra River',
      description: 'The holy river where the rituals take place'
    },
    {
      id: 3,
      image: '/img/img3.png',
      title: 'Mahakaleshwar Temple',
      description: 'The revered Jyotirlinga temple in Ujjain'
    },
    {
      id: 4,
      image: '/img/img4.png',
      title: 'Holy Dip Ceremony',
      description: 'Devotees taking the sacred dip during Shahi Snan'
    },
    {
      id: 5,
      image: '/img/img5.png',
      title: 'Sadhus at Kumbh',
      description: 'Holy men participating in the spiritual gathering'
    },
    {
      id: 6,
      image: '/img/img6.png',
      title: 'Ceremonial Activities',
      description: 'Traditional rituals and prayers'
    },
    {
      id: 7,
      image: '/img/img7.png',
      title: 'Ujjain Cityscape',
      description: 'The ancient city during Kumbh Mela'
    },
    {
      id: 8,
      image: '/img/img9.png',
      title: 'Kumbh Mela Activities',
      description: 'Various activities during the festival'
    },
    {
      id: 9,
      image: '/img/img3.3.png',
      title: 'Devotees in Prayer',
      description: 'Spiritual gatherings at the sacred river'
    },
    {
      id: 10,
      image: '/img/img2.2.png',
      title: 'Sacred Ceremonies',
      description: 'Traditional rituals and prayers'
    },
    {
      id: 11,
      image: '/img/img1.1.png',
      title: 'Holy Men',
      description: 'Sadhus and spiritual leaders'
    },
    {
      id: 12,
      image: '/img/4.4.png',
      title: 'Kumbh Mela Scene',
      description: 'General view of the massive gathering'
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    draggable: true,
    swipe: true,
    adaptiveHeight: false, // Keep consistent height
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      }
    ]
  };

  return (
    <div className="gallery-container ">
      <h2 className="gallery-title">Ujjain Kumbh Mela Gallery</h2>
      <p className="gallery-subtitle">Experience the divine atmosphere of the world's largest spiritual gathering</p>
      
      <Slider {...settings}>
        {galleryItems.map((item) => (
          <div key={item.id} className="gallery-item">
            <img 
              src={item.image} 
              alt={item.title} 
              className="gallery-image"
              onError={(e) => { e.target.src = '/img/img5.5.png'; }}
            />
            <div className="gallery-caption">
              <h3>{item.title}</h3>

              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Gallery;
