import Landing from "@/Components/Landing/Landing";
import Navbar from "@/Components/Navbar";
import PopularItems from "@/Components/PopularItems/PopularItems";

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
      <div className="content">
        <Navbar />
        <section id='hero'>
          <Landing />
        </section>
        <section id='popularItems'>
          <PopularItems />
        </section>
      </div>
      </div>
  
  );
}
