import React, { useContext } from 'react';
import { BuildHistory } from '../BuildHistory';
import { Start } from '../Start';
import { SettingsContext } from '../Context';

export function Home(props) {
    const { settings: { settledSettings } } = useContext(SettingsContext);
    return settledSettings? <BuildHistory /> : <Start />
}
