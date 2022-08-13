import "./index.css";

function Footer() {
  return (
    <div className="Footer">
      <footer className="main-footer">
        <h4 id="Contact">Contact me on..</h4>
        <ul>
          <li>
            <a href="https://github.com/Federica129">
              <i className="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/federica.schilli/">
              <i className="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/federica-schillaci-b61199234/">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <div className="copy">
          <h6>Page created by Federica Schillaci.</h6>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
