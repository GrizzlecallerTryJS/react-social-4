import "./css/App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";

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
      <div className="sidebar">
        <Sidebar />
      </div>
    </div>
  );
};

export default App;
