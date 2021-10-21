import './css/App.css';
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import Main from './Main/Main'
import Footer from './Footer/Footer'

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
