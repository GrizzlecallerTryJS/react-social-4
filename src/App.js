import './css/App.css';
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'
import Main from './components/Main/Profile/Profile'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div className='app-wrapper'>
      <div className='header'><Header /></div>
      <div className='sidebar'><Sidebar /></div>
      <div className='main'><Main /></div>
      <div className='footer'><Footer /></div>
    </div>
  );
}

export default App;
