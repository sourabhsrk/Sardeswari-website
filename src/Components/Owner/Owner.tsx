import Image from "next/image";
import OwnerStyles from "./Owner.module.css";

export default function Owner() {
  return (
    <div className={OwnerStyles.ownerSection}>
        <div className={OwnerStyles.ownerContainer}>
            <div className={OwnerStyles.ownerDetailsBox}>
                <p>“We believe in creating an unmatched experience by maintaining the highest standard of quality, hygiene, service and customer satisfaction.”</p>
                <p className={OwnerStyles.ownerName}><strong>Mr. Virender Dutt Ranakoti,</strong></p>
                <p className={OwnerStyles.ownerDesignation}><strong>MahaMantri, VyaparSabha Badrinath</strong></p>
                <button className={OwnerStyles.readMoreBtn}>Read more</button>
            </div>
            <div className={OwnerStyles.imageDiv}>
                <Image src="/owner1.jpg" alt="owner" width={400} height={520}/>
            </div>
        </div>
    </div>
  )
}
