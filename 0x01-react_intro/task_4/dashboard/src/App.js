import './App.css';
import HolbertonLogo from '../src/HolbertonLogo.jpg'
import { getFooterCopy, getFullYear } from './utils';

function App() {
  return (
    <div className='App'>
      <div className='App-header'>
        <img src={HolbertonLogo} alt='Logo' width={100} />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form className='Form'>
          <div>
            <label>Email: </label>
            <input type='text' />
          </div>
          <div>
            <label>Password: </label>
            <input type='password' />
          </div>
          <button>OK</button>
        </form>
      </div>
      <div className='App-footer'>
        <p>{`Copyright ${getFullYear()} - ${getFooterCopy()}`}</p>
      </div>
    </div>
  );
}

export default App;
