import Landing from "@/Components/Landing/Landing";
import Owner from "@/Components/Owner/Owner";
import PopularItems from "@/Components/PopularItems/PopularItems";
import SeparationImage from "@/Components/SeparationImage/SeparationImage";
import Services from "@/Components/Services/Services";
import SocialMedia from "@/Components/SocialMedia/SocialMedia";
import Testimonials from "@/Components/Testimonials/Testimonials";

export default function Home() {
  return (
    <div className="container">
      <video 
        autoPlay
        loop
        muted
        disablePictureInPicture
        className="bgVideo"
      >
        <source src="/landingVideo.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="overlay"></div>
      <main className="content">
        <section id='hero'>
          <Landing />
        </section>
        <section id='popularItems'>
          <PopularItems />
        </section>
        <section id='owner'>
          <Owner/>
        </section>
        <section id='services'>
          <Services/>
        </section>
        <section>
          <SeparationImage/>
        </section>
        <section id='testimonials'>
          <Testimonials/>
        </section>
        <section id='socialMedia'>
          <SocialMedia/>
        </section>
      </main>
    </div>
  
  );
}
