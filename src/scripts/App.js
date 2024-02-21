import '../css/App.css';
import Navbar from './Navbar';
import Content from './Content'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
    </div>
    
  );
}

export default App;
