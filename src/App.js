import './App.css';
import Navbar from './Navbar';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <p className="">Welcome to scheduler</p>
      </header>
    </div>
    
  );
}

export default App;
