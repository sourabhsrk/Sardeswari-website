import Image from "next/image"
import "./SeparationImageStyles.css";

export default function SeparationImage() {
  return (
    <div className="separationImage">
        <Image src="/contactbg.jpg" alt="foodimage" fill/>
    </div>
  )
}
