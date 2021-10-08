import React, { createContext, useReducer, useMemo } from 'react';
import settingsReducer, { SAVE_SETTINGS } from './settingsReducer';

export const SettingsContext = createContext(null);

const initialState = {
    repository: '',
    buildCommand: '',
    branch: '',
    period: 0,
    settledSettings: false,
};

export function ContextComponent({ children }) {
    const [settings, dispatch] = useReducer(settingsReducer, initialState);

    const saveSettings = async (settings) => {
        return new Promise((resolve => {
            setTimeout(() => {
                dispatch({
                    type: SAVE_SETTINGS,
                    payload: settings,
                });
                resolve({ isSaved: true });
            }, 500);
        }))
    };

    const contextValue = useMemo(() => {
        return { settings, saveSettings };
    }, [settings, saveSettings]);

    return (
        <SettingsContext.Provider value={contextValue}>
            {children}
        </SettingsContext.Provider>
    )
}
