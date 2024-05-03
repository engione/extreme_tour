import { combineReducers, createStore } from "redux";
import { userMetadataReducer } from "./userMetadataReducer";
import { userIdReducer } from "./userIdReducer";
import { composeWithDevTools } from "@redux-devtools/extension";


const rootReducer = combineReducers({
  userData: userMetadataReducer,
  idUser: userIdReducer

})

export const store = createStore(rootReducer, composeWithDevTools());