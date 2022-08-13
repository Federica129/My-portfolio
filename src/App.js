import "./App.css";
import ListItem from "./Components/ListItem";
import Navbar from "./Components/Navbar";
import Logo from "./assets/logoFS.png";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Section from "./Components/Section";
import Gallery from "./Components/Gallery";
import { useState } from "react";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Navbar>
        <img className="Logo" src={Logo} alt="logo" />
        <ListItem setValue={setValue} />
      </Navbar>
      <Hero />
      <Section value={value} />
      <Gallery value={value} />
      <Footer />
    </div>
  );
}

export default App;
