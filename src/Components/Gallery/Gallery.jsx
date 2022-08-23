import "./index.css";
import { ListPhoto } from "../../utils/ListPhoto";
import { AiFillCaretRight, AiOutlineLink } from "react-icons/ai";
import ImageGallery from "react-image-gallery";

function Gallery({ myRef, value }) {
  const listLinkProject = [
    {
      id: 1,
      description: "Calendar",
      link: "https://federica129.github.io/EG4/Codeweek",
      languages: "HTML/CSS/JS",
    },
    {
      id: 2,
      description: "Universe",
      link: "https://github.com/Federica129/EG4/tree/main/05-08-22",
      languages: "HTML/CSS/JS/REACT",
    },
    {
      id: 3,
      description: "Social Network",
      link: "https://github.com/Federica129/EG4/tree/main/faccialibro",
      languages: "HTML/CSS/JS/REACT",
    },
    {
      id: 4,
      description: "Old Portfolio",
      link: "https://federica129.github.io/myportfolio/",
      languages: "HTML/CSS",
    },
  ];

  const listRender = listLinkProject.map((obj) => (
    <li className="textContent" key={obj.id}>
      <div>
        <i>
          <AiFillCaretRight />
        </i>
        {obj.description}
        {` `}
        <a href={obj.link} target="_blank">
          <AiOutlineLink />
        </a>
      </div>

      {obj.languages}
    </li>
  ));

  return (
    <div
      ref={myRef.refGallery}
      // style={value === "My projects" ? { display: "block" } : null}
      className="Gallery"
      id="Gallery"
    >
      <h2 className="title">My projects</h2>
      <div className="Gallery__content">
        <ImageGallery
          items={ListPhoto}
          showFullscreenButton={true}
          showPlayButton={false}
          autoPlay={true}
          slideInterval={5000}
        />
      </div>
      <p>Project links on GitHub:</p>
      <div className="Gallery__linkProject">
        <ul className="ulLink">{listRender}</ul>
      </div>
    </div>
  );
}

export default Gallery;
