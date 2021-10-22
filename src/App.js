import "./css/App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Profile/Profile";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app_wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <Navbar />
      </div>
      <div className="main">
        <Main />
      </div>
      <div className="footer">
        <Footer />
      </div>
      <dib className="sidebar">
        <Sidebar />
      </dib>
    </div>
  );
};

export default App;
