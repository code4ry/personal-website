const NavBar = () => {
  return (
    <div className="navbar">
      <a href="./index.html" className="logo">Ryan Lee</a>
      <div className="nav-links">
        <p>🡼 <a href="./index.html">Home</a></p>
        <p>🡼 <a href="">About</a></p>
        <p>🡼 <a href="">Portfolio</a></p>
        <p>🡼 <a href="">Contact</a></p>
      </div>
    </div>
  );
};

const Home = () => {
  const [typedText, setTypedText] = React.useState(''); 
  const [isTyping, setIsTyping] = React.useState(true);
  const txt = '  Welcome. '; 
  const speed = 100; 

  React.useEffect(() => {
    let i = 0; 

    const typeWriter = () => {
      if (i < txt.length) {
        setTypedText((prev) => prev + txt.charAt(i));
        i++;
        requestAnimationFrame(() => setTimeout(typeWriter, speed));
      }
      else {
        setIsTyping(false);
      }
    };

    typeWriter(); 
  }, []);

  return (
    <div className="container">
      <h2 id="welcome">
        {typedText}
        {isTyping && <span className="cursor">|</span>}
      </h2>
      <p>Inspired by Bruce.</p>
    </div>
  );
};

const Info = () => {
  return (
    <div className="info">
      <div className="block">
        <img src="./images/sample.jpg" alt="Description" />
        <div className="block-text">
          <h1 className="title">Projects</h1>
          <h2>Explore My Projects</h2>
          <p>Whatever</p>
        </div>
      </div>
      <div className="block">
        <img src="./images/sample.jpg" alt="Description" />
        <div className="block-text">
          <h1 className="title">What's going on?</h1>
          <h2>Discover</h2>
          <p>Whatever</p>
        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <div id="footer">
      <h2>Contact Me</h2>
      <div id="footer-links">
        <p>🡼 <a href="">GitHub</a></p>
        <p>🡼 <a href="">LinkedIn</a></p>
        <p>🡼 <a href="">Email</a></p>
        <p>🡼 <a href="">About</a></p>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <div>
      <NavBar />
      <Home />
      <Info />
      <Footer />
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
