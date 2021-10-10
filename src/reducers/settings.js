export const SAVE_SETTINGS = 'SAVE_SETTINGS';

export const initialState = {
    repository: '',
    buildCommand: '',
    branch: '',
    period: 0,
    settledSettings: false,
};

const settings = (state = initialState, action) => {
    switch (action.type) {
        case SAVE_SETTINGS:
            return {
                ...state,
                ...action.payload,
                settledSettings: true,
            }
        default: return state;
    }
};

export default settings;
