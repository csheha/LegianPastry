import React from "react";
import "../styles/Testimonals.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Parallax, Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import testimonalsbg from "../assets/testimonalsbg.jpg";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";
import framelogo from "../assets/Frame.png";

const SlideData = [
  {
    name: "Michael Roberts",
    image: person1,
    jobPosition: "Chef",
    review:
      "As a chef, I'm always on the lookout for inspiration. Legian Pastry's creations are a testament to their skill and passion for baking. Every bite tells a story!",
  },
  {
    name: "Sophia Martinez",
    image: person2,
    jobPosition: "Catering Manager",
    review:
      "Legian Pastry has been our go-to for events. Their attention to detail and ability to customize desserts for any theme is unmatched. Guests always rave about their treats!",
  },
  {
    name: "Daniel Lee",
    image: person3,
    jobPosition: "Entrepreneur",
    review:
      "I was blown away by the quality and taste of Legian Pastry's baked goods. The croissants are better than anything I've had, even in Paris!",
  },
  {
    name: "Olivia Brown",
    image: person4,
    jobPosition: "Wedding Planner",
    review:
      "Legian Pastry made the wedding cake of my dreams for a client. The design was breathtaking, and the taste left everyone speechless. They're truly the best!",
  },
];

export default function Testimonals() {
  return (
    <>
      <div className="testimonial">
        <h3 className="heading-testimonials">Testimonials</h3>

        <Swiper
          style={{
            "--swiper-navigation-color": "#ffb319",
            "--swiper-pagination-color": "#ffb319",
          }}
          speed={600}
          parallax={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Parallax, Pagination, Navigation, Autoplay]}
          className="mySwiper"
        >
          <div
            slot="container-start"
            className="parallax-bg"
            style={{
              "background-image": `url(${testimonalsbg})`,
            }}
            data-swiper-parallax="-23%"
          ></div>
          {SlideData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="testimonial-container">
                <div className="testimonial-subcontainer">
                  <div className="testimonial-column">
                    <div className="testimonial-content">
                      <div className="testimonial-logo-placeholder">
                        <img src={framelogo} alt="Logo" />
                      </div>
                      <div className="review">{slide.review}</div>
                      <div className="avatar">
                        <div className="avatar-image">
                          <img src={slide.image} alt="Testimonial Avatar" />
                        </div>
                        <div className="avatar-content">
                          <div className="name">{slide.name}</div>
                          <div className="job-position">
                            {slide.jobPosition}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="testimonial-button-slidedots"></div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
}
