import "./SmallImages.css";

const SmallImages = ({ images, current, switchImage }) => {

  return (
    <div className="small-image-box">
      {images[0].map((item, index) => (
        <img
          onClick={() => switchImage(index)}
          className={index === current ? "current-image" : ""}
          key={index}
          src={item}
        />
      ))}
    </div>
  );
};

export default SmallImages;
