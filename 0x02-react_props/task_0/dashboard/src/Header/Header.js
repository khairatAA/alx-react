import './Header.css';
import HolbertonLogo from '../assests/HolbertonLogo.jpg'

function Header() {
    return (
        <div className='App-header'>
            <img src={HolbertonLogo} alt='Logo' width={100} />
            <h1>School dashboard</h1>
        </div>
    );
}

export default Header;
