import React, { useEffect, useState } from 'react';
import "./testimonials.css";

const testimonialsData = [
    {
        img: "https://iv1.lisimg.com/image/14942009/740full-jessica-clements.jpg",
        quote: "Quis ipsum suspendisse ultrices gravida risus comodo viverra maecenas.Ipsum dolor sit amet conseto",
        author: "- Tori Buckey, CEO Twitter"
    },
    {
        img: "https://68.media.tumblr.com/936f177b5700b18f96d51c4d69f4d4dc/tumblr_oqqtboORsd1sshchso1_500.jpg",
        quote: "Quis ipsum suspendisse ultrices gravida risus comodo viverra maecenas.Ipsum dolor sit amet conseto",
        author: "- Alexander Hills | CEO Twitter"
    }
    ,
    {
        img: "https://i.pinimg.com/736x/ec/c1/16/ecc116b5aab92919efc6f63f0959fb6d.jpg",
        quote: "Quis ipsum suspendisse ultrices gravida risus comodo viverra maecenas.Ipsum dolor sit amet conseto",
        author: "- Margaret Roth | CEO Waze"
    }
    ,
    {
        img: "https://i.pinimg.com/736x/d2/de/95/d2de9556e9eef282d01f208bfb8d5090.jpg",
        quote: "Quis ipsum suspendisse ultrices gravida risus comodo viverra maecenas.Ipsum dolor sit amet conseto",
        author: "- Lupita Sanchez | CEO TikTok"
    }
    ,
    {
        img: "https://cdn.greenvelope.com/blog/wp-content/uploads/AdobeStock_144839552.jpeg",
        quote: "Quis ipsum suspendisse ultrices gravida risus comodo viverra maecenas.Ipsum dolor sit amet conseto",
        author: "- Margaret Roth | CEO Waze"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
        }, 3000); // تغيير كل 3 ثوانٍ

        return () => clearInterval(interval);
    }, []);

    return (
        
        
        <div className="testimonials-container">
          <h4>Testimonials</h4>
            <div className="testimonials-grid">
            <div className="testimonial-image1">
    <img src="https://img.freepik.com/premium-photo/woman-caring-plants-home-spring-day_566707-2254.jpg" alt="Testimonial Image" />

<div className="testimonial-image2">
    <img src="https://thumbs.dreamstime.com/b/family-caring-plants-cute-child-girl-helping-her-mother-to-care-mom-daughter-engaging-gardening-home-happy-spring-246906086.jpg" alt="Testimonial Image" />
</div></div>

                <div className="testimonial">
                    <div className="testimonial-content">
                    <div className="testimonial-image">
                            <img src={testimonialsData[currentIndex].img} alt={`Testimonial ${currentIndex + 1}`} />
                        </div>
                        
                       <div className="testimonial-text">
                            <p>{testimonialsData[currentIndex].quote}</p>
                            <p>{testimonialsData[currentIndex].author}</p>
                          
                        </div>
                    </div>
                </div>
                </div>
                <p className="plant_logo_right">
        <img 
          src="https://i.pinimg.com/originals/ee/34/9f/ee349f7a8f7bf015c886d9efe673a3ec.gif" 
          height='50px' 
          width='50px' 
          alt="Plant Logo" 
        />
      </p>
        </div>
    );
};

export default Testimonials;