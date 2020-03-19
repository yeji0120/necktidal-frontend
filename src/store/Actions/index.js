import { SHOW_MODAL } from "store/types";
import { CLOSE_MODAL } from "store/types";
import { PLAY_ID } from "store/types";

export const ShowModalAction = () => {
  return { type: SHOW_MODAL, showModal: true };
};

export const CloseModalAction = () => {
  return { type: CLOSE_MODAL, showModal: false };
};

export const PlayIdAction = id => {
  return { type: PLAY_ID, playId: id };
};
