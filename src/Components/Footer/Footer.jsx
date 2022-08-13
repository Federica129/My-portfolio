import "./index.css";

function Footer() {
  return (
    <div className="Footer">
      <footer class="main-footer">
        <h4 id="Contact">Contact me on..</h4>
        <ul>
          <li>
            <a href="https://github.com/Federica129">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/federica.schilli/">
              <i class="fa-brands fa-instagram"></i>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/federica-schillaci-b61199234/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <div class="copy">
          <h6>Page created by Federica Schillaci.</h6>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
