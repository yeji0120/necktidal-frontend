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