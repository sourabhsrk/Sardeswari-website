'use client';
import ItemCard from "../Common/ItemCard";
import PopItemStyles from "./PopularItems.module.css";
import menuItems from "../../../public/cms/MenuItems.model.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

export default function PopularItems() {
  const settings = {
    dots: true,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1285,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2.2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 738,
        settings: {
          slidesToShow: 1.5,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 470,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className={PopItemStyles.popItemSection}>
      <div className={PopItemStyles.popItemContainer}>
        <div className={PopItemStyles.heading}>
          <div className={PopItemStyles.shortLine}></div>
          <div className={PopItemStyles.banner}>
            <div>
              <h3>Top Picks</h3>
              <p>Make sure you try out the most loved menu items.</p>
            </div>
            <div className={PopItemStyles.MoreItemBtn}>
              <button className={PopItemStyles['button-28']} onClick={()=>window.location.href="/menu"}>See More Items</button>
            </div>
          </div>
        </div>
        <div className={PopItemStyles.carousel}>
          <Slider {...settings}>
            {
              Object.entries(menuItems['PopItems'].value)?.map(([key,item])=>{
                return <ItemCard key={key} item={item}/>
              })
            }
            </Slider>
        </div>
      </div>
    </div>
  )
}
