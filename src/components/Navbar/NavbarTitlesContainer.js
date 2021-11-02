import { connect } from "react-redux";
import NavbarTitles from "./NavbarTitles";

let mstp = (state) => {
  return {
    navbarTitles: state.navbarState.title,
  };
};

let NavbarTitlesContainer = connect(mstp, {})(NavbarTitles);

export default NavbarTitlesContainer;
