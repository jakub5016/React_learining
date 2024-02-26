import '../css/Navbar.css';
import ToggleButton from './ToggleButton';
import { useEffect, useRef, useState } from 'react';


const Navbar = (props) => {
    const [opacity, setOpacity] = useState('100%')
    const [isButtonDisabled, setButtonDisabled] = useState(false);
    const [buttonSizeArray, setButtonSizeArray] = useState(0);
    const ref = useRef(null)

    const buttonStyle = {
        opacity: opacity,
    };

    useEffect(() =>{
        setButtonSizeArray(ref.current.clientWidth)
    })

    const backButtonStyle = {
        opacity: Math.abs(opacity.substring(0, opacity.length -1) - 100) + "%",
    };

    return (  

        <nav className="navBar" style={{backgroundColor : props.nightMode ? 'var(--main-nightmode)' : 'var(--main)'}}>
            <div className="barContent" style={{gap : (window.innerWidth/2) - buttonSizeArray}}>
                <div className="leftBar" ref={ref}>
                <button className='element' style={buttonStyle} disabled={isButtonDisabled} onClick={() => {                        
                        props.setIsHome(true)
                        props.setIsItems(false)

                        }
                        }
                    > Home</button>
                    <button className='element' style={buttonStyle} disabled={isButtonDisabled} onClick={() => {
                        props.setIsItems(true)
                        props.setIsHome(false)

                        }
                        }
                    > Items</button>
                    <button className='element' style={buttonStyle} disabled={isButtonDisabled} onClick={() => {
                        console.log(Math.abs(opacity.substring(0, opacity.length -1) - 100))
                        }
                        }
                    > Dates</button>
                </div>
                <div className="rightBar">
                    <ToggleButton nightMode={props.nightMode} handleNightMode={props.handleNightMode} />
                </div>
            </div>
        </nav>
    );
}
 

export default Navbar;