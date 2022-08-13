import "./index.css";

function ListItem() {
  const list = [
    { text: "About me", id: 1, idH: "#Aboutme" },
    { text: "Experiences", id: 2, idH: "#Exp" },
    { text: "My projects", id: 3 },
  ];
  const item = list.map((e) => (
    <li key={e.id}>
      <a href={e.idH}>{e.text}</a>
    </li>
  ));

  return (
    <div className="ListItem">
      <ul className="ul">{item}</ul>
    </div>
  );
}

export default ListItem;
