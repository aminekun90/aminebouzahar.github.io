import "./App.css";
import profile from "./img/profile.jpg";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profile} className="App-logo" alt="logo" />
        <p>
          AMINE BOUZAHAR
          <br />
          <code>Coming soon ...</code>
        </p>
        <a
          className="App-link"
          href="https://www.linkedin.com/in/amine-bouzahar/"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </header>
    </div>
  );
}

export default App;
