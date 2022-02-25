import {
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  IS_FETCHING,
  LOGOUT,
} from "../../actions/types";
import { toast } from "react-toastify";
import { getCookie } from "../../FrontendHelper";

const initialState = {
  token: null,
  profile: {},
  loading: false,
  isLoggedIn: getCookie("token") ? true : false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case "Authenticate_User_Request":
      return {
        ...state,
        loading: true,
      };
    case "Authenticate_User_Success":
      toast.success("Login Successfull");
      console.log(payload);
      return {
        ...state,
        token: payload.accessToken,
        isLoggedIn: true,
        profile: payload.adminProfile,
        loading: false,
      };
    case "LOGOUT_USER":
      toast.success("Logout Successfull");
      return {
        ...state,
        isLoggedIn: false,
        loading: false,
      };
    case "Authenticate_User_Failure":
      // toast.error(payload);
      console.log("login error", payload);
      return {
        ...state,
        loading: false,
        isLoggedIn: false,
      };
    default:
      return state;
  }
}
