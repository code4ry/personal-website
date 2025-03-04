const NavBar = () => {
  return (
    <div className="navbar">
      <a href="./" className="logo">Ryan Lee</a>
      <div className="nav-links">
        <p>
          <span className="arrow">🡼</span>
          <a href="./">Home</a>
        </p>
        <p>
          <span className="arrow">🡼</span>
          <a href="">About</a>
        </p>
        <p>
          <span className="arrow">🡼</span>
          <a href="./portfolio.html">Portfolio</a>
        </p>
        <p>
          <span className="arrow">🡼</span>
          <a href="#footer">Contact</a>
        </p>
      </div>
    </div>
  );
};