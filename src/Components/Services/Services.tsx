import './ServicesStyles.css'
import CheckIcon from '@mui/icons-material/Check';

export default function Services() {
    type ServCardPropstypes = {
        service: string;
    }
    const ServCard = ({ service}: ServCardPropstypes) => {
        return <div className='service'>
            <CheckIcon sx={{color: 'green'}}/>
            <p>{service}</p>
        </div>
    }
    const servicesArray = ['Neat and Tidy Space', 'Dine In', 'Take Away','Hygienic Food', 'Good for Family', 'Good for Friends', 'Emergency Washroom', 'Customizable Food', 'Reservation for Big Groups'];
  return (
    <div className='servicesSection'>
      <div className="servicesHeading">
        <div className="shortLine"></div>  
        <h1>What We Offer</h1>
      </div>  
      <div className="servicesContainer">
        {servicesArray.map((service,ind) => {
            return <ServCard key={ind} service={service}/>
        })}
      </div>
    </div>
  )
}
