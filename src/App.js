import "./App.css";
import ListItem from "./Components/ListItem";
import Navbar from "./Components/Navbar";
import Logo from "./assets/logoFS.png";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import Gallery from "./Components/Gallery";
import { useState, useRef } from "react";

function App() {
  const [value, setValue] = useState("");

  const refHero = useRef(null);
  const refSection = useRef(null);
  const refExp = useRef(null);
  const refGallery = useRef(null);

  const allRef = {
    refHero,
    refSection,
    refGallery,
    refExp,
  };

  return (
    <div className="App">
      <Navbar>
        <img className="Logo" src={Logo} alt="logo" />
        <ListItem setValue={setValue} allRef={allRef} />
      </Navbar>
      <Hero myRef={allRef} />
      <Section value={value} myRef={allRef} />
      <Gallery value={value} myRef={allRef} />
      <Footer />
    </div>
  );
}

export default App;
