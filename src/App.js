import "./App.css";
import ListItem from "./Components/ListItem";
import Navbar from "./Components/Navbar";
import Logo from "./assets/logoFS.png";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";
import Section from "./Components/Section";

function App() {
  return (
    <div className="App">
      <Navbar>
        <img className="Logo" src={Logo} alt="logo" />
        <ListItem />
      </Navbar>
      <Hero />
      <Section />
      <Footer />
    </div>
  );
}

export default App;
