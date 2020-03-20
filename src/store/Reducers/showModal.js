import {SHOW_MODAL, CLOSE_MODAL} from 'store/types'
export default function showModal(state = false, action) {
    switch (action.type) {
        case SHOW_MODAL:
            return {...state, showModal:true};
        case CLOSE_MODAL: 
            return {...state, showMdal:false};
        default:
            return state;    
    }
}