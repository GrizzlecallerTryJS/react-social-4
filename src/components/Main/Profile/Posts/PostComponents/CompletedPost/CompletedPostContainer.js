import { connect } from "react-redux";
import CompletedPost from "./CompletedPost";

let mapStateToProps = (state) => {
  return {
    postData: state.profilePage.postData,
  };
};

let mapDispatchToProps = () => {
  return {};
};

const CompletedPostContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CompletedPost);

export default CompletedPostContainer;
