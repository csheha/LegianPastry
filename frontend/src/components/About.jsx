import React, { useEffect }  from 'react'
import '../styles/About.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function About() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <div id='about' className='about'>
      <div 
        className='about-header'
        data-aos="fade-right"
      >
        <h1>About Us</h1>
      </div>
      <div 
        className='about-content'
        data-aos="fade-up"
        data-aos-duration="1000"  
      >
        <p>
            Welcome to Legian Pastry, where passion meets perfection in every bite. We are a team of food lovers and baking enthusiasts committed to bringing you the finest selection of handcrafted pastries, baked goods, and desserts made with love and care.
           At Legian Pastry, we believe that food is more than just nourishment – it’s an experience. Inspired by the rich culinary culture of Legian and beyond, we combine traditional techniques with modern flavors to create unique, mouthwatering treats that delight your senses.
        </p>
        <p>
            Whether you're craving a buttery croissant, a flaky puff, a rich chocolate tart, or a custom-made cake for your special day, we’ve got you covered. All our products are made fresh using high-quality ingredients, ensuring every order delivers both taste and satisfaction.
        </p>
        <p>
          We don’t just sell pastries – we serve happiness. Browse our menu, place your order online, and enjoy the taste of joy delivered right to your doorstep.
        </p>
      </div>
    </div>
  )
}
