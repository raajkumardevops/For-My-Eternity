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
    images.map((img, i) => ({
      img,
      x: 0,
      y: 0,
      z: i
    }))
  );

  const [activeImage, setActiveImage] = useState(null);
  const [dragging, setDragging] = useState(false);

  const startDrag = (index, e) => {
    e.preventDefault();
    setDragging(false);

    const isTouch = e.type === "touchstart";
    const startX = isTouch ? e.touches[0].clientX : e.clientX;
    const startY = isTouch ? e.touches[0].clientY : e.clientY;

    const { x: initialX, y: initialY } = cards[index];

    let rafId = null;

    const move = (ev) => {
      const currentX = ev.touches ? ev.touches[0].clientX : ev.clientX;
      const currentY = ev.touches ? ev.touches[0].clientY : ev.clientY;

      // If finger moved enough → it's a drag, not a click
      if (Math.abs(currentX - startX) > 5 || Math.abs(currentY - startY) > 5) {
        setDragging(true);
      }

      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        setCards((prev) =>
          prev.map((c, i) =>
            i === index
              ? {
                  ...c,
                  x: initialX + (currentX - startX),
                  y: initialY + (currentY - startY),
                  z: 100
                }
              : c
          )
        );
        rafId = null;
      });
    };

    const stop = () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("touchmove", move);
      window.removeEventListener("mouseup", stop);
      window.removeEventListener("touchend", stop);
      if (rafId) cancelAnimationFrame(rafId);
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("mouseup", stop);
    window.addEventListener("touchend", stop);
  };

  const handleImageClick = (img) => {
    if (!dragging) {
      setActiveImage(img);
    }
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
              onClick={() => handleImageClick(card.img)}
            >
              <img src={card.img} alt="memory" draggable={false} />
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

      {/* 🌸 FULLSCREEN IMAGE VIEW */}
      {activeImage && (
        <div className="image-preview" onClick={() => setActiveImage(null)}>
          <img src={activeImage} alt="full memory" />
          <span className="close-preview">✕</span>
        </div>
      )}
    </div>
  );
};

export default Gallery;
