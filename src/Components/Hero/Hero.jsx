import "./index.css";
import { useEffect, useState } from "react";
import photo from "../../assets/avatar1.png";

function Hero({ myRef }) {
  const [isActive, setActive] = useState("");
  const [notActive, setNotActive] = useState("");

  useEffect(() => {
    setActive("active");
    setTimeout(() => {
      setActive("");
      setNotActive("notActive");
    }, 6000);
  }, []);

  return (
    <div className="Hero" id="Hero" ref={myRef.refHero}>
      <div className="box">
        <div className="textMain">
          <h3 className={`hi ${isActive}${notActive}`}>Hi, I'm</h3>
          <h1 className={`main_title ${isActive}${notActive}`}>
            Federica Schillaci
          </h1>
          <h2 className={`h2 ${isActive}${notActive}`}>
            Front-end web developer,
          </h2>
          <span></span>
          <p className={`p ${isActive}${notActive}`}>
            HTML/CSS/JAVASCRIPT/REACT
          </p>
        </div>
      </div>
      <div className="myphoto">
        <img className={`photo ${isActive}${notActive}`} src={photo} alt="" />
      </div>
    </div>
  );
}

export default Hero;
