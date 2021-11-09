import { connect } from "react-redux";
import NavbarTitles from "./NavbarTitles";

let mapStateToProps = (state) => {
  return {
    navbarTitles: state.navbarState.title,
  };
};

let NavbarTitlesContainer = connect(mapStateToProps, {})(NavbarTitles);

export default NavbarTitlesContainer;
