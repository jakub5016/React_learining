import { useState, useEffect  } from 'react';
import '../css/Content.css';



const Content = () =>{

    var windowSize = 500;

    const [numColumns, setNumColumns] = useState(Math.floor(window.innerWidth / windowSize));
    
    const [windows, setWindows] = useState([
        {title: "Window 1", contnent: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ", id: 1}, 
        {title: "Window 2", contnent: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ", id: 2},
        {title: "Window 3", contnent: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ", id: 3},
        {title: "Window 4", contnent: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ", id: 4},
        {title: "Window 5", contnent: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. ", id: 5}


    ])

    const gridContainerStyle = {
        display: "grid",
        gridTemplateColumns: `repeat(${numColumns}, 1fr)`,
        padding: "10px",
        gap: "50px"
    };

    const handleResize = () => {
        setNumColumns(Math.floor(window.innerWidth / windowSize));
    };

    useEffect(() => {
        // Attach the event listener when the component mounts
        window.addEventListener("resize", handleResize);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []); // Empty dependency array means this effect runs once, similar to componentDidMount
    

    return(
        <div className="grid-container" style={gridContainerStyle}>
            {windows.map((window) => (
                <div className="grid-item" key={window.id}>
                    <h2 className="title">{window.title}</h2>
                    <p className="content">{window.contnent}</p>
                </div>
            ))}

        </div>
    );
}

export default Content;