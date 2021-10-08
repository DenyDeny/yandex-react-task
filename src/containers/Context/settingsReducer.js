export const SAVE_SETTINGS = 'SAVE_SETTINGS';

const settingsReducer = (state, action) => {
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

export default settingsReducer;
