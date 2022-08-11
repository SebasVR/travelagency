import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Curso <code>ReactJS</code> por CoderHouse.
        </p>
        <a
          className="App-link"
          href="https://plataforma.coderhouse.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visita nuestro sitio y conoce todos nuestros cursos
        </a>
      </header>
    </div>
  );
}

export default App;
