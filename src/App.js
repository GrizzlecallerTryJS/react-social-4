import React from "react";
import "./css/App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Sidebar from "./components/Sidebar/Sidebar";
import Navbar from "./components/Navbar/Navbar";
import { connect } from "react-redux";
import { getAuthTC } from "./redux/authFunc/authThunkCreators";
import { setInitTC } from "./redux/appFunc/appThunkCreators";
import Preloader from "./components/StandartComponent/Preloader/Preloader";

let mapStateToProps = (state) => {
  return {
    initState: state.appState.initState,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    getAuth: () => {
      dispatch(getAuthTC());
    },
    setInit: (initState) => {
      dispatch(setInitTC(initState));
    },
  };
};

class App extends React.Component<{}> {
  componentDidMount() {
    this.props.setInit(true);
  }
  componentWillUnmount() {
    this.props.setInit(false);
  }

  render() {
    if (!this.props.initState) {
      return <Preloader />;
    }

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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
