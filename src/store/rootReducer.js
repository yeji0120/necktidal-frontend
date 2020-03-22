import { combineReducers } from "redux";
import ShowModal from "store/Reducers/ShowModal";
import PlayId from "store/Reducers/PlayId";

export const rootReducer = combineReducers({
  ShowModal,
  PlayId
});
