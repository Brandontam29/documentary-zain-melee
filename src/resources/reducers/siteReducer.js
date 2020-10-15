import { SET_MENU_OPEN } from '../actions/siteActions';

const initialState = {
    menuOpen: true,
};

const siteReducer = (state = initialState, action) => {
    switch (action.type) {
    case SET_MENU_OPEN:
        return {
            ...state,
            menuOpen: action.payload,
        };
    default:
        // console.log(state);
        return state;
    }
};

export default siteReducer;
