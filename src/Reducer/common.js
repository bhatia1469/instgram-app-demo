import { REHYDRATE } from 'redux-persist';
import { CommonActionTypes } from '../Actions/types';

const CommonState = {
    loading: false,
    loadingMessage: '',
    toastVisible: false,
    toastMessage: '',
    userData: null,
    deviceToken: ''
};

export default CommonReducer = (state = { ...CommonState }, action) => {
    switch (action.type) {

        case CommonActionTypes.LOADING:
            return {
                ...state,
                loading: action.status,
                loadingMessage: action.message === null ? '' : action.message
            }

        case CommonActionTypes.UPDATE_USER_DATA:

            return {
                ...state,
                userData: action.userData
            };

        case CommonActionTypes.SHOW_TOAST_WITH_MESSAGE:
            return {
                ...state,
                toastVisible: action.status,
                toastMessage: action.message === null ? '' : action.message
            }

        case CommonActionTypes.SAVE_DEVICE_TOKEN:
            return {
                ...state,
                deviceToken: action.data
            }
        case CommonActionTypes.RESET_LOGOUT_DATA:
            return {
                ...state,
                loading: false,
                loadingMessage: '',
                userData: null,
                toastVisible: false,
                toastMessage: '',
                deviceToken: ''
            }

        case REHYDRATE:
            const data = action.payload;
            const CommonReducer = (data || {}).CommonReducer || {};
            return {
                ...state,
                ...CommonReducer,
                loading: false,
                loadingMessage: '',
                toastVisible: false,
                toastMessage: '',
            };

        default:
            return {
                ...state
            };
    }
}