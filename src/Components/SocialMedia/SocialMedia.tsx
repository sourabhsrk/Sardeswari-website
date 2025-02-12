'use client';
import "./SocialMediaStyles.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

export default function SocialMedia() {
    const footerMedia = ['media7','media3','media8','media1','media4','media10'];
  return (
    <div className='mediaSection'>
      <h2 className="mediaHeading">Follow us on Instagram</h2>
      <div className="mediaLinks">
        <div className="insta1" onClick={()=>window.open('https://www.instagram.com/sardeswari/')}>
            <InstagramIcon sx={{fontSize: 40, color: "#BD3336"}}/>
            <p>sardeswari</p>    
        </div>
        <div className="insta2" onClick={()=>window.open('https://www.instagram.com/sardeswarirestaurent/')}>
            <InstagramIcon sx={{fontSize: 40, color: "#BD3336"}}/>
            <p>sardeswarirestaurant</p>
        </div>
        <div className="facebook" onClick={()=>window.open('https://www.facebook.com/sardeswari.sardeswari')}>
            <FacebookIcon sx={{fontSize: 40, color: "blue"}}/>
            <p>Sardeswari Sardeswari</p>
        </div>
      </div>
      <div className="mediaImages">
        {footerMedia?.map((filename,ind)=>{
            return <img key={ind} src={`/SocialMediaImages/${filename}.jpg`} alt="media"/>
        })}
      </div>
    </div>
  )
}
