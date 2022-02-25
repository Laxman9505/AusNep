// import axios from "axios";
// import { LOGIN_ERROR, LOGIN_SUCCESS, IS_FETCHING, LOGOUT } from "./types";

// export const login = (formData) => async (dispatch) => {
//   dispatch({
//     type: IS_FETCHING,
//   });
//   try {
//     const config = {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     };
//     const body = JSON.stringify(formData);
//     console.log(body);
//     const response = await axios.post(
//       "https://classibazaar.com.au/api/v2/authenticate",
//       body,
//       config
//     );

//     dispatch({
//       type: LOGIN_SUCCESS,
//       payload: response.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: LOGIN_ERROR,
//       payload: error.response.data.message,
//     });
//   }
// };
// export const logout = () => (dispatch) => {
//   dispatch({
//     type: IS_FETCHING,
//   });
//   dispatch({
//     type: LOGOUT,
//   });
// };
// export const login = (data) => {
//   return {
//     type: LOGIN_SUCCESS,
//     payload: data,
//   };
// };
