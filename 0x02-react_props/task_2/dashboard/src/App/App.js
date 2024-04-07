
import Notification from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import './App.css';

function App() {
  return (
    <>
      <Notification />
      <div className='App'>
        <Header />
        <Login />
        <Footer />
      </div>
    </>
  );
}

export default App;
