import './ContactStyles.css';
export default function Contact() {
  return (
    <div className="contactContent">
        <div className="addrsContainer">
            <div className="addrsBox">
                <h1> Address </h1>
                <address>
                    Near Devlok Chowk, Across Nanda Devi <br/>
                    Badrinath, Uttarakhand, PIN: 246422
                </address>
                <h2>Mobile Numbers</h2>
                <p>
                    9410122893 <br/>
                    9027877172 <br/>
                    7087792391 <br/>
                    9878332692 <br/>  
                </p>    
            </div>
            <div className="mapView">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.0675793047817!2d79.49118987537352!3d30.744603174578582!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39a78c2011ab2aef%3A0x4fd2a17039ce40ca!2sSardeshwari%20Restaurant!5e0!3m2!1sen!2sin!4v1739090917410!5m2!1sen!2sin" width="600" height="450" style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    </div>
  )
}
