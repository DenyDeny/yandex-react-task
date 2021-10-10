export const HANDLE_INPUT_TEXT = 'HANDLE_INPUT_TEXT';
export const CLEAR_FIELD = 'CLEAR_FIELD';
export const SET_ERRORS = 'SET_ERRORS';

export const initialState = {
    repository: '',
    buildCommand: '',
    branch: '',
    period: 0,
    errors: {
        repository: '',
        buildCommand: '',
    }
};

const settings = (state, action) => {
    switch (action.type) {
        case HANDLE_INPUT_TEXT:
            return {
                ...state,
                [action.field]: action.payload,
            }
        case CLEAR_FIELD:
            return {
                ...state,
                [action.field]: '',
            }
        case SET_ERRORS:
            return {
                ...state,
                errors: action.payload,
            }
        default: return state;
    }
};

export default settings;
