"use client";
import TestimonialCard from "../Common/TestimonialCard";
import "./TestimonialsStyles.css";
import reviewList from "../../../public/cms/UserReview.model.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function Testimonials() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 2.5,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 1050,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      }
    ],
  };
  return (
    <div className="tsection">
      <div className="tcontainer">
        <h2 className="theading">Testimonials</h2>
        <div className="tslider-container">
          <Slider {...settings}>
            {Object.entries(reviewList).map(([key, value]) => {
                return <TestimonialCard key={key} testimonial={value} />
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
}
