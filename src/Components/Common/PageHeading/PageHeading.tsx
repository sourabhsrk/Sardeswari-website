import Image from "next/image"
import "./PageHeadingStyles.css";

interface headingProps {
    heading: string,
    src: string,
    altTxt: string
}

export default function PageHeading({heading, src, altTxt}: headingProps) {
  return (
    <div className="pageHeading">
        <Image
            src={src}
            alt={altTxt}
            fill
            style={{
            objectFit: "cover",
            }}
        />
        <h1>{heading}</h1>
    </div>
  )
}
