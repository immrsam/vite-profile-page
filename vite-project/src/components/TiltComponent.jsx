import "../styles/TiltComponent.css";
import Tilt from "react-parallax-tilt";
import bg from "../images/backgrounds/pattern01.jpg";

const TiltComponent = () => {
  return (
    <Tilt
      className="tBox"
      glareEnable={true}
      tiltMaxAngleX={10}
      tiltMaxAngleY={10}
      perspective={800}
      scale={1.1}
      glareColor={"rgb(255,0,0)"}
      glareBorderRadius="20px"
    >
      <div className="tiltComponent">
        <div>React</div>
        <div>Parallax Tilt</div>
        <div>👀</div>
      </div>
    </Tilt>
  );
};

export default TiltComponent;
