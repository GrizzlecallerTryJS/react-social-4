import "./css/App.css";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";

const App = (props) => {
  return (
    <div className="app_wrapper">
      <div className="header">
        <Header />
      </div>
      <div className="navbar">
        <Navbar navbarState={props.state.navbarState} />
      </div>
      <div className="main">
        <Main
          profileState={props.state.profilePage}
          dialogsState={props.state.dialogsPage}
          dispatch={props.dispatch}
        />
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
