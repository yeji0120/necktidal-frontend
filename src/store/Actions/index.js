<<<<<<< HEAD
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
=======
import {SHOW_MODAL} from 'store/types'
import {CLOSE_MODAL} from 'store/types'

export const showModalAction = () => {
    return {
        type: SHOW_MODAL,
        payload: {
            showModal: true
        }
    };
};

export const closeModalAction = () => {
    return {
        type: CLOSE_MODAL,
        payload: {
            showMdal: false
        }
    };
};
>>>>>>> a69a044ce24f0fb501be996c38d29c16e3d97e50
