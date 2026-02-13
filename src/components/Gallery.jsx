import { useState } from "react";
import "../styles/mobile.css";
import BackButton from "./BackButton";

import img1 from "../assets/images/image1.jpeg";
import img2 from "../assets/images/image2.jpeg";
import img3 from "../assets/images/image3.jpeg";
import img4 from "../assets/images/image4.jpeg";
import img5 from "../assets/images/image5.jpeg";
import img6 from "../assets/images/image6.jpeg";
import img7 from "../assets/images/image7.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Gallery = ({ goNext, goBack }) => {
  const [cards, setCards] = useState(
    images.map((img, i) => ({ img, x: 0, y: 0, z: i }))
  );

  const startDrag = (index, e) => {
    const startX = e.clientX ?? e.touches[0].clientX;
    const startY = e.clientY ?? e.touches[0].clientY;

    const move = (ev) => {
      const x = ev.clientX ?? ev.touches[0].clientX;
      const y = ev.clientY ?? ev.touches[0].clientY;

      setCards((prev) =>
        prev.map((c, i) =>
          i === index ? { ...c, x: x - startX, y: y - startY, z: 100 } : c
        )
      );
    };

    const stop = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move);
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
  };

  return (
    <div className="app-wrapper">
      <BackButton onBack={goBack} />
      <div className="love-card fade-in">
        

        <p className="fs-5 mb-4">
          These little moments…  
          they all mean so much to me 💗
        </p>

        <div className="gallery-area">
          {cards.map((card, i) => (
            <div
              key={i}
              className="photo-card"
              style={{
                transform: `translate(${card.x}px, ${card.y}px) rotate(${i % 2 ? 4 : -4}deg)`,
                zIndex: card.z
              }}
              onMouseDown={(e) => startDrag(i, e)}
              onTouchStart={(e) => startDrag(i, e)}
            >
              <img src={card.img} alt="memory" />
            </div>
          ))}
        </div>

        <button
          className="btn btn-outline-danger w-100 mt-4"
          onClick={goNext}
        >
          Read something for you 💌
        </button>
      </div>
    </div>
  );
};

export default Gallery;
