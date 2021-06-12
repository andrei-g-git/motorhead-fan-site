import * as actionTypes from './actionTypes';

export const picSwiperToggled = (visible) => {
    return {
        type: actionTypes.PIC_SWIPER_TOGGLED,
        payload: visible
    }
}

export const picIndexed = (index) => {
    return{
        type: actionTypes.PIC_INDEXED,
        payload: index
    }
}