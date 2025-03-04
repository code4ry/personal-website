const Footer = () => {
  return (
    <div id="footer">
      <h1>Ryan Lee</h1>
      <div id="footer-links">
        <p>
          <img src="./images/github-logo.png" alt="Github logo" width="20" height="20"/>
          <a href="https://github.com/code4ry/personal-website/" target="_blank">Github</a>
        </p>
        <p>
          <img src="./images/linkedin-logo.png" alt="LinkedIn logo" width="20" height="20"/>
          <a href="https://www.linkedin.com/in/ryan-lee100/" target="_blank">LinkedIn</a>
        </p>
        <p>
          <span className="arrow">🡼</span>
          <a href="">Email</a>
        </p>
        <p>
          <span className="arrow">🡼</span>
          <a href="#footer">Contact</a>
        </p>
      </div>

      <p>© Copyright 2025</p>
    </div>
  );
};