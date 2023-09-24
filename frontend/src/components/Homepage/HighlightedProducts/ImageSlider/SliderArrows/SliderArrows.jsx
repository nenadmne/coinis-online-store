import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import "./SliderArrows.css";

const SliderArrows = ({ slideLeft, slideRight, autoSlide }) => {
  return (
    <div className="arrow-wrapper">
      <ArrowBackIosNewIcon
        onClick={slideLeft}
        className={!autoSlide ? "activated" : "not-activated"}
      />
      <ArrowForwardIosIcon
        onClick={slideRight}
        className={autoSlide ? "activated" : "not-activated"}
      />
    </div>
  );
};

export default SliderArrows;
