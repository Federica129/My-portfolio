import "./index.css";

function ListItem({ isModalVisible, setIsModalVisibility, setValue }) {
  const list = [
    { text: "Home", id: 1, idH: "#Hero" },
    { text: "About me and experiences", id: 2, idH: "#Aboutme" },
    { text: "My projects", id: 3, idH: "#Gallery" },
  ];
  const item = list.map((e) => (
    <li onClick={() => setValue(e.text)} key={e.id}>
      <a href={e.idH}>{e.text}</a>
    </li>
  ));

  return (
    <div className="ListItem">
      <ul className="ul">{item}</ul>
      <ul className="ulPhone">
        <li>
          <a href="#Aboutme">
            <i className="fa-solid fa-user"></i>
          </a>
        </li>
        <li>
          <a href="#Exp">
            <i className="fa-solid fa-briefcase"></i>
          </a>
        </li>
        <li>
          <a href="#Gallery">
            <i className="fa-solid fa-image"></i>
          </a>
        </li>
      </ul>
    </div>
  );
}

export default ListItem;
