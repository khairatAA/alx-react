import './Footer.css';
import { getFooterCopy, getFullYear } from '../utils/utils';

function Header() {
    return (
        <div className='App-footer'>
            <p>{`Copyright ${getFullYear()} - ${getFooterCopy()}`}</p>
        </div>
    );
}

export default Header;
