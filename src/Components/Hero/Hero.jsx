import "./index.css";
import { useEffect, useState } from "react";
import photo from "../../assets/avatar.png";

function Hero({ myRef }) {
  const [isActive, setActive] = useState("");

  useEffect(() => {
    setActive("active");
  }, []);

  return (
    <div className="Hero" id="Hero" ref={myRef.refHero}>
      <div className="box">
        <div className="textMain">
          <h3 className={`hi ${isActive}`}>Hi, I'm</h3>
          <h1 className={`main_title ${isActive}`}>Federica Schillaci</h1>
          <h2 className={`h2 ${isActive}`}>Front-end web developer,</h2>
          <span></span>
          <p className={`p ${isActive}`}>HTML/CSS/JAVASCRIPT/REACT</p>
        </div>
      </div>
      <div className="myphoto">
        <img className={`photo ${isActive}`} src={photo} alt="" />
      </div>
    </div>
  );
}

export default Hero;
