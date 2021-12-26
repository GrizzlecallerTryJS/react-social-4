import { setInitAC } from "../../appReducer";
import { getAuthTC } from "../authFunc/authThunkCreators";

export const setInitTC = (initState) => {
  return (dispatch) => {
    let promise = dispatch(getAuthTC());

    promise.then(() => {
      dispatch(setInitAC(initState));
    });
  };
};
