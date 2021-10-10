import React, { createContext, useReducer, useMemo } from 'react';
import settingsReducer, { SAVE_SETTINGS } from './settingsReducer';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const SettingsContext = createContext(null);

const initialState = {
    repository: '',
    buildCommand: '',
    branch: '',
    period: 0,
    settledSettings: false,
};

export function ContextComponent({ children }) {
    const [storageSettings, setStorageSettings] = useLocalStorage('settings', '');
    const initSettings = (initial) => storageSettings || initial;
    const [settings, dispatch] = useReducer(settingsReducer, initialState, initSettings);

    const saveSettings = async (settings) => {
        return new Promise(((resolve, reject) => {
            setTimeout(() => {
                const random = Math.random();
                if (random > 0.5) {
                    dispatch({
                        type: SAVE_SETTINGS,
                        payload: settings,
                    });
                    setStorageSettings({ ...settings, settledSettings: true });
                    resolve({ isSaved: true });
                } else {
                    reject('Smth happened wrong')
                }
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
