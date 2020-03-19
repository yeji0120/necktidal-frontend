import { PLAY_ID } from "store/types";

export default function PlayId(state = "", action) {
  switch (action.type) {
    case PLAY_ID:
      return action.playId;
    default:
      return state;
  }
}
