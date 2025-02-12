import './AboutStyles.css';

export default function About() {
  return (
    <div className='aboutContent'>
      <div className="contentBox">
        <h1 className="heading">
          Who we are
        </h1>
        <p>
          Sardeswari Restaurant was started in the year 1983 by Ranakoti Family. Named after owner&apos;s grandmother &apos;Sarda Devi&apos;, who is very fond of Mr.Virender Dutt Ranakoti (owner). 
          Our ancestors and Indian Culture believe&apos;s in hospitality, following which we have started this business.
        </p>
        <p>
        Welcome to our pure vegetarian restaurant, where we celebrate the vibrant flavors of India with a touch of global flair. From the rich and hearty dishes of Punjab to the 
        aromatic delicacies of South India, the authentic Marwari thalis, Gujrati thalis and the fusion delights of Indo-Chinese cuisine, we bring a wide variety to satisfy every palate. At the 
        heart of our service is a commitment to cleanliness and hygiene, ensuring every meal is prepared with the utmost care. Our warm and inviting ambiance makes it the perfect 
        place for family gatherings, casual dining, or celebrations. We believe in offering not just food but an experience filled with love and authenticity. Come, savor the taste 
        of tradition and innovation at its finest! Badrinath cities architecture is changing, it can be a little difficult to find us but worry not if you ask anyone where is 
        Sardeswari they will for sure tell you we are well known in badrinath. We have hordings also in different places. For exact location you can go to contact page.
        </p>
      </div>
      <div className="visionBox">
        <div className="vision">
          <div className="visionHeading">
            <img src="/vision.png" alt="visionLogo"/>
            <h3>Vision</h3>
          </div>
          <p>To offer the very best in quality cuisine and create an un-matched experience in family dining, maintaining the highest standard of quality, hygiene, service and customer satisfaction.</p>
        </div>
        <div className="vision">
          <div className="visionHeading">
            <img src="/mission.png" alt="missionLogo"/>
            <h3>Mission</h3>
          </div>
          <p>Our mission is to create a community and open other branches of Sardeswari to serve good food to people of all over India. This is the most demanded thing from our Customer.</p>
        </div>  
      </div>
    </div>
  )
}
