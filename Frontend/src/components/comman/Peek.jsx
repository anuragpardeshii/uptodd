import { useRef } from "react";
import "./Peek.css";
import { cards } from "../../assets/data/card";

function Peek() {
  const carouselRef = useRef(null);

  const handlePrev = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".super-peek-card").offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const handleNext = () => {
    if (carouselRef.current) {
      const cardWidth =
        carouselRef.current.querySelector(".super-peek-card").offsetWidth;
      const gap = 20;
      const scrollAmount = cardWidth + gap;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Peek-A-Boo! See the Joy of Development */}
      <div className="super-peek">
        <h1>Peek-A-Boo! See the Joy of Development</h1>
        <div className="super-peek-wrapper">
          <button className="super-peek-button prev" onClick={handlePrev}>
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-prev.svg"
              alt="Previous"
            />
          </button>

          <div className="super-peek-cards" ref={carouselRef}>
            {cards.map((data) => (
              <div key={data.id} className="super-peek-card">
                <div className="super-peek-iframe-container">
                  <iframe
                    src={data.videoUrl}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  ></iframe>
                </div>
                <h2>{data.title}</h2>
                {data.description && <p>{data.description}</p>}
              </div>
            ))}
          </div>

          <button className="super-peek-button next" onClick={handleNext}>
            <img
              src="https://www.uptodd.com/images/newWebsite/slider-next.svg"
              alt="Next"
            />
          </button>
        </div>
      </div>
    </>
  );
}

export default Peek;
