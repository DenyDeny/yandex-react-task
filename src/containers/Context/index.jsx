import React, { createContext, useEffect, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { SAVE_SETTINGS } from '../../reducers/settings';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const SettingsContext = createContext(null);

export function ContextComponent({ children }) {
    const dispatch = useDispatch();

    const [storageSettings, setStorageSettings] = useLocalStorage('settings', '');

    useEffect(() => {
        if (storageSettings) {
            dispatch({
                type: SAVE_SETTINGS,
                payload: storageSettings,
            })
        }
    }, []);

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
        return { saveSettings };
    }, [saveSettings]);

    return (
        <SettingsContext.Provider value={contextValue}>
            {children}
        </SettingsContext.Provider>
    )
}
