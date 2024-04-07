
import Notification from '../Notifications/Notifications'
import Login from '../Login/Login'
import Footer from '../Footer/Footer'
import Header from '../Header/Header';
import CourseList from '../CourseList/CourseList';
import './App.css';

function App({ isLoggedIn = false }) {
  return (
    <>
      <Notification />
      <div className='App'>
        <Header />
        {isLoggedIn ? <CourseList /> : <Login />}
        <Footer />
      </div>
    </>
  );
}

export default App;
