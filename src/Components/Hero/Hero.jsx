import "./index.css";
import {useEffect, useState} from 'react'
import photo from "../../assets/_GGL8170.png";

function Hero() {
const [isActive, setActive] = useState('');

 useEffect(() => {
  setActive('active');
 }, [])

  return (
    <div className="Hero">
      <div className="box">
        <div className="textMain">
          {/* <span></span> */}
          <h3>Hi, I'm</h3>
          <h1 className={`main_title ${isActive}`}>Federica Schillaci</h1>
          <h2>Front-end web developer,</h2>
          <span></span>
          <ul>HTML/CSS/JAVASCRIPT/REACT</ul>
        </div>
      </div>
      <div className="myphoto">
        <img className="photo" src={photo} alt="photo" />
      </div>
    </div>
  );
}

export default Hero;
