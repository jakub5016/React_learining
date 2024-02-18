import './Navbar.css';
import { useState } from 'react';


const Navbar = () => {
    const [opacity, setOpacity] = useState('100%')
    const [isButtonDisabled, setButtonDisabled] = useState(false);

    const buttonStyle = {
        opacity: opacity,
    };

    return (  

        <nav className="navBar">
            <div className="barContent">
                <button className='element' onClick={() => {
                    setOpacity("0%"); 
                    console.log(opacity);
                    setButtonDisabled(true);
                    }
                    }> Home</button>
                <button className='element' style={buttonStyle} disabled={isButtonDisabled}> Items</button>
                <button className='element' style={buttonStyle} disabled={isButtonDisabled}> Dates</button>

            </div>
        </nav>
    );
}
 

export default Navbar;