const NavBar = () => {
  return (
    <div className="navbar">
      <a href="./index.html" className="logo">Ryan Lee</a>
      <div className="nav-links">
        <p>
          <span className="arrow">🡼</span>
          <a href="./index.html">Home</a>
        </p>
        <p>
          <span className="arrow">🡼</span>
          <a href="">About</a>
        </p>
        <p>
          <span className="arrow">🡼</span>
          <a href="">Portfolio</a>
        </p>
        <p>
          <span className="arrow">🡼</span>
          <a href="">Contact</a>
        </p>
      </div>
    </div>
  );
};