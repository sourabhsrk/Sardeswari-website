"use client";
import { Typewriter } from "react-simple-typewriter";
import landingStyles from "./Landing.module.css";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

export default function Landing() {
  return (
    <div className={landingStyles.container}>
      <h2 className={landingStyles.slogan}>&quot; Savoring</h2>
      <h2 className={landingStyles.slogan}>
        <Typewriter
          words={[
            'the Diversity of Indian Cuisine."',
            'Tradition, one Bite at a Time."',
          ]}
          loop={true}
          cursor
          cursorStyle="|"
          cursorColor="darkorange"
          typeSpeed={100}
          deleteSpeed={50}
          delaySpeed={2000}
        />
      </h2>
      <h1 className={landingStyles.restaurantName}> Sardeswari</h1>
      <p className={landingStyles.ratingContainer}>
        <span>105+</span>
        <span className={landingStyles.starContainer}>
          {Array.from({ length: 5 }).map((_, index) => {
            if (index === 4) {
              return <StarBorderIcon key={index} sx={{fontSize: '1em'}}/>;
            }
            return <StarIcon key={index} sx={{fontSize: '1em'}}/>;
          })}
        </span>
        <span>
          4.2 reviews 
          <a href="https://g.co/kgs/v9UhLeQ" target="_blank" className={landingStyles.googleReviewLink}>on google</a>
        </span>
      </p>
      <div className={landingStyles.addressContainer}>
        <p className={landingStyles.addressStyles}>Near Devlok Chowk, Across Nanda Devi</p>
        <p className={landingStyles.addressStyles}>Badrinath, Uttarakhand, PIN: 246422</p>
      </div>
      <button className={landingStyles.bookNowBtn} onClick={() => window.location.href = '/contact'}>Book a table now</button>
      
    </div>
  );
}
