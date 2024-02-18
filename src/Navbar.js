import './Navbar.css';

const Navbar = () => {
    const facebook_link = "www.facebook.com";

    return (  
        <nav className="navBar">
            <div className="barContent">
                <a className='element'> Home</a>
                <a className='element'> Items</a>
            </div>
        </nav>
    );
}
 

export default Navbar;