import { filter, tap, mapTo, mergeMap, catchError } from "rxjs/operators";
import { ofType } from "redux-observable";
import { merge, of, from } from "rxjs";
import { API } from "../BaseUrlProvider";

// export const authenticateUserEpic = (action$) =>
//   action$.pipe(
//     ofType("Authenticate_User_Request"),
//     merge((action) =>
//       from(API.post("/v1/authenticate", action.payload)).pipe(
//         tap((res) => console.log("The epic response", res.data)),
//         mergeMap((response) =>
//           of({ type: "Authenticate_User_Success", payload: response.data })
//         ),
//         catchError((error) =>
//           of({ type: "Authenticate_User_Failure", payload: error.response })
//         )
//       )
//     )
//   );
export const authenticateUserEpic = (action$) =>
  action$.pipe(
    ofType("Authenticate_User_Request"),
    mergeMap((action) =>
      from(API.post("/admin/login", action.payload)).pipe(
        mergeMap((response) =>
          of({
            type: "Authenticate_User_Success",
            payload: response.data,
          })
        ),
        catchError((error) =>
          of({
            type: "Authenticate_User_Failure",
            payload: error.response,
          })
        )
      )
    )
  );
