import '../css/App.css';
import Navbar from './Navbar';
import Content from './Content'
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";
import { useState } from 'react';


function App() {
  const [nightMode, setNightMode] = useState(false);
  const [itemsSelect, setitemsSelect] = useState(false);
  const [isHome, setIsHome] = useState(true);
  const [isItems, setIsItems] = useState(false);

  const handleNightMode = (status) =>{
    setNightMode(status);
  }


  return (
    <div className="App" style={{backgroundColor: nightMode ? "var(--main-backgorund-nightmode)" : "var(--main-backgorund)"} }>
      <Navbar 
        nightMode={nightMode} 
        handleNightMode={handleNightMode} 
        
        isHome={isHome}
        setIsHome={setIsHome}
        
        isItems={isItems}
        setIsItems={setIsItems}

        itemsSelect={itemsSelect} 
        handleitemsSelect={(status) => {
          setitemsSelect(status)
        }        
        }/>
        
      {isHome && !isItems && <div style={{color : nightMode ? "black" : "white"}}> WELCOME </div>}
      {isItems && !isHome && <Content nightMode={nightMode} handleNightMode={handleNightMode}/>}
    </div>
    
  );
}

export default App;
