import "./index.css";
import { FaRegImages } from "react-icons/fa";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineWorkOutline } from "react-icons/md";

function ListItem({ setValue, allRef }) {
  const list = [
    { text: "Home", id: 1, idH: "#Hero", ref: allRef.refHero },
    {
      text: "About me and experiences",
      id: 2,
      idH: "#Aboutme",
      ref: allRef.refSection,
    },
    { text: "My projects", id: 3, idH: "#Gallery", ref: allRef.refGallery },
  ];

  const scrollToSection = (refValue) => {
    window.scrollTo({
      top: refValue.current.offsetTop - 50,
    });
    console.log(refValue.current.offsetTop);
  };

  const item = list.map((e) => (
    <li
      onClick={() => {
        setValue(e.text);
        scrollToSection(e.ref);
      }}
      key={e.id}
    >
      <p className="tasti">{e.text}</p>
    </li>
  ));

  return (
    <div className="ListItem">
      <ul className="ul">{item}</ul>
      <ul className="ulPhone">
        <li onClick={() => scrollToSection(allRef.refSection)}>
          <AiOutlineUser />
        </li>
        <li onClick={() => scrollToSection(allRef.refExp)}>
          <MdOutlineWorkOutline />
        </li>
        <li onClick={() => scrollToSection(allRef.refGallery)}>
          <FaRegImages />
        </li>
      </ul>
    </div>
  );
}

export default ListItem;
