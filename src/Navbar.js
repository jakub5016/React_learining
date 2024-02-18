import './Navbar.css';

const Navbar = () => {
    const facebook_link = "www.facebook.com";

    return (  
        <nav className="navBar">
            <div className="barContent">
                <button className='element'> Home</button>
                <button className='element'> Items</button>
                <button className='element'> Dates</button>

            </div>
        </nav>
    );
}
 

export default Navbar;