import "./App.css";

import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <h1>Dictionary</h1>

        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="text-center">
          <small>coded by Nina</small>
        </footer>
      </div>
    </div>
  );
}

export default App;
