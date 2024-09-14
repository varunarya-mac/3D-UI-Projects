import { colors } from "../shared/color";
import PropTypes from "prop-types";
import { logoArr } from "../shared/color";

const CustomisePage = (props) => {
  const { handleColor, setCustomise, setLogo } = props;

  const handleColorValue = (value) => {
    handleColor(value);
  };
  const handleBack = () => {
    setCustomise(false);
  };
  const handleLogo = (value) => {
    setLogo(value);
  };

  return (
    <div className="container">
      <div className="image-container">
        <span>
          <b>Choose Icon:</b>
        </span>
        <img
          onClick={() => handleLogo(logoArr[0])}
          className="logo"
          src="../../adidas_logo.png"
          id="adidas_icon"
          alt="Adidas Icon"
        />
        <img
          onClick={() => handleLogo(logoArr[1])}
          className="logo"
          src="../../nike_logo.png"
          id="nike_icon"
          alt="Nike Icon"
        />
      </div>
      <div className="color-container">
        <span>
          <b> Choose Color:</b>
        </span>
        <div style={{ display: "flex", gap: "3px" }}>
          {colors.map((color, index) => (
            <button
              className="color"
              style={{ backgroundColor: color }}
              key={index}
              onClick={() => handleColorValue(color)}
            />
          ))}
        </div>
      </div>
      <button
        className="btn"
        style={{ alignSelf: "center" }}
        onClick={() => handleBack()}
      >
        {" "}
        Back &#8592;{" "}
      </button>
    </div>
  );
};

CustomisePage.propTypes = {
  handleColor: PropTypes.func.isRequired,
  setCustomise: PropTypes.func.isRequired,
  setLogo: PropTypes.func.isRequired,
};

export default CustomisePage;
