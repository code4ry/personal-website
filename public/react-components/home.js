const Home = () => {
  const [typedText, setTypedText] = React.useState(''); 
  const [isTyping, setIsTyping] = React.useState(true);
  const txt = '  Welcome!'; 
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
      <div className="welcome-container">
        <h2 id="welcome">
          {typedText}
          <span className="cursor">|</span>
        </h2>
        <p>
          A software engineer with a passion for artificial intelligence and machine learning.
        </p>
      </div>
      <img src='../images/new-home-bkgrd.jpg' alt="Photo of Ryan Lee at Bruce Museum"/>
    </div>
  );
};

const Info = () => {
  return (
    <div className="info">
      <div className="exhibit">
        <img src="./images/exhibit1.jpg" alt="Photo of code from Unsplash." />
        <div className="exhibit-text">
          <h1 className="title">Code in my collection</h1>
          <p>
            Delve into a curated collection of my diverse software development projects.
            <br />
            Each piece represents a unique challenge, a crafted solution, and an evolution of creativity and technical skill.
            <br />
            Click to step inside and experience the intersection of innovation and code.
          </p>
          <a href="./portfolio.html" className="exhibit-button">Explore my collection</a>
        </div>
      </div>
      <div className="exhibit">
        <img src="./images/exhibit2.png" alt="Description" />
        <div className="exhibit-text">
          <h1 className="title">Meet the Creator</h1>
          <p>
            Every project tells a story, but behind each line of code lies the journey of the developer. 
            <br />
            Click to discover more about my background, my values, and the path that has shaped me into the software creator I am today.
          </p>
          <a href="./about.html" className="exhibit-button">Who am I?</a>
        </div>
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
