import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./MainImage.css";

const MainImage = ({ images, prevSlide, nextSlide, current }) => {
  
  return (
    <div className="main-image">
      {images.length > 1 && (
        <ArrowBackIosNewIcon className="left-arrow" onClick={prevSlide} />
      )}
      {images.map((slide, index) => {
        return (
          <div
            className={index === current ? "slide active" : "slide"}
            key={index}
          >
            {index === current && (
              <img src={slide} alt="image" className="image" />
            )}
          </div>
        );
      })}
      {images.length > 1 && (
        <ArrowForwardIosIcon className="right-arrow" onClick={nextSlide} />
      )}
    </div>
  );
};

export default MainImage;
