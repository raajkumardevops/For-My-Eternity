import { useState } from "react";
import "../styles/mobile.css";

import img1 from "../assets/images/image1.jpeg";
import img2 from "../assets/images/image2.jpeg";
import img3 from "../assets/images/image3.jpeg";
import img4 from "../assets/images/image4.jpeg";
import img5 from "../assets/images/image5.jpeg";
import img6 from "../assets/images/image6.jpeg";
import img7 from "../assets/images/image7.jpeg";

const images = [img1, img2, img3, img4, img5, img6, img7];

const Gallery = () => {
  const [positions, setPositions] = useState(
    images.map(() => ({
      x: Math.random() * 40 - 20,
      y: Math.random() * 40 - 20
    }))
  );

  const handleDrag = (index, e) => {
    const newPositions = [...positions];
    newPositions[index] = {
      x: e.clientX / 15 - 20,
      y: e.clientY / 15 - 20
    };
    setPositions(newPositions);
  };

  return (
    <div className="app-wrapper">
      <div className="love-card fade-in">
        <p className="fs-5 mb-4">
          These little moments…  
          they all mean so much to me 💗
        </p>

        <div className="gallery-area">
          {images.map((img, i) => (
            <div
              key={i}
              className="photo-card"
              draggable
              onDrag={(e) => handleDrag(i, e)}
              style={{
                transform: `translate(${positions[i].x}px, ${positions[i].y}px) rotate(${i % 2 === 0 ? -4 : 4}deg)`
              }}
            >
              <img src={img} alt="memory" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
