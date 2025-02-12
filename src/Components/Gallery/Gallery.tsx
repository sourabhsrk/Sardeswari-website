'use client';
import Image from "next/image";
import "./GalleryStyles.css";
import { useState } from "react";
import { Modal } from "@mui/material";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';

export default function Gallery() {
  const [currentItem, setCurrentItem] = useState({ src: '', class: ''});
  const [openModal, setOpenModal] = useState(false);
  const mediaArray = [
    ...Array.from(
      { length: 10 },
      (_, i) => `SocialMediaImages/media${i + 1}.jpg`
    ),
    "SocialMediaImages/video1.mp4",
    "SocialMediaImages/video2.mp4",
    ...Array.from(
      { length: 10 },
      (_, i) => `SocialMediaImages/media${i + 11}.jpg`
    ),
  ];
  const handleItemClick = (item: string, itemClass: string) => {
    setCurrentItem({ ...currentItem, src: item, class: itemClass});
    setOpenModal(true);
  }
    const showFullImage = (): JSX.Element => {
        return (
            <Modal
                open={openModal}
                onClose={()=> setOpenModal(false)}
                aria-labelledby="fullImage"
                aria-describedby="Social Media image is showing in full view"
                className="modal"
            >   
            <div className="modalImgContainer">
                {currentItem?.src?.endsWith(".mp4") ? (
                    <video src={currentItem?.src} controls width={currentItem?.src?.includes('video1') ? 700 : 312} height={currentItem?.src?.includes('video1') ? 450 : 550}/>
                ) : (
                    <Image
                        src={`/${currentItem?.src}`}
                        alt={currentItem?.src}
                        width={currentItem?.class?.includes('tall') ? 400 : 600}
                        height={currentItem?.class?.includes('tall') ? 600 : 450}
                        loading="lazy"
                    />
                )}
            </div>
            </Modal>)
    }
  return (
    <div className="galleryContent">
      <div className="gallery">
        {mediaArray.map((item, index) => {
          let itemClass = "gallery-item";
          if ([4, 10, 11].includes(index)) {
            itemClass = itemClass + " big";
          } else if ([1, 4, 5, 16, 21].includes(index)) {
            itemClass = itemClass + " wide";
          } else if ([12, 14, 7, 19].includes(index)) {
            itemClass = itemClass + " tall";
          }
          return (
            <div key={index} className={itemClass} onClick={() => handleItemClick(item, itemClass)}>
              {item.endsWith(".mp4") ? (
                <div className="gallery-video-container">
                    <video 
                        src={item} 
                        className="gallery-video" 
                    />
                    <PlayArrowIcon sx={{position: 'absolute', fontSize: '80px', color: 'white', top: '40%', left: '40%'}}/>
                </div>
              ) : (
                <Image
                  src={`/${item}`}
                  alt={item}
                  width={300}
                  height={300}
                  className="gallery-image"
                  loading="lazy"
                />
              )}
            </div>
          );
        })}
      </div>
      {openModal && showFullImage()}
    </div>
  );
}
