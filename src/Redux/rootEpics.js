import { combineEpics } from "redux-observable";
import { authenticateUserEpic } from "./myEpics";

export const rootEpic = combineEpics(authenticateUserEpic);
