import Image from "next/image";

type TestimonialCardProps = {
  testimonial: {
    userName: string;
    source: string;
    userComment: string;
  }
}

export default function TestimonialCard(props: TestimonialCardProps) {
  return (
    <div className="tcard">
      <div className="ticon-container"><Image src="/userIcon.png" alt="userIcon" width={90} height={90}/></div>
      <div className="tuser-review">
        <div className="tuser-detailbox">
            <p className="tuser-name"><strong>{props?.testimonial?.userName}</strong></p>
            <p className="review-source">{props?.testimonial?.source}</p>
        </div>
        <div className="tquotes-icon"><Image src="/testimonial-icon.png" alt="quotesIcon" width={60} height={60}/></div>
        <div className="tuser-comment">{props?.testimonial?.userComment}</div>
      </div>
    </div>
  )
}
