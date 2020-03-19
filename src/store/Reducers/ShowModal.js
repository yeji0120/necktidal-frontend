import { SHOW_MODAL, CLOSE_MODAL } from "store/types";

export default function ShowModal(state = false, action) {
  switch (action.type) {
    case SHOW_MODAL:
      return action.showModal;
    case CLOSE_MODAL:
      return action.showModal;
    default:
      return state;
  }
}
