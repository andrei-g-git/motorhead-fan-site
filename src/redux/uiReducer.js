import * as actionTypes from './actionTypes';

const initialState = {
    picSwiperVisible: false,
    picIndex: 0,
    navMenuVisible: false
}

export const uiReducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.PIC_SWIPER_TOGGLED:
            return{
                ...state,
                picSwiperVisible: action.payload
            }
        case actionTypes.PIC_INDEXED:
            return{
                ...state,
                picIndex: action.payload
            }     
        case actionTypes.HAMBURGER_CLICKED:
            return{
                ...state,
                navMenuVisible: action.payload
            }       
        default:
            return state;
    }
}