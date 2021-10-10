import React, { useContext } from 'react';
import { useStore } from 'react-redux';
import { BuildHistory } from '../BuildHistory';
import { Start } from '../Start';
import { SettingsContext } from '../Context';

export function Home() {
    const store = useStore();
    const { settings: { settledSettings } } = store;
    // const { settings: { settledSettings } } = useContext(SettingsContext);
    return settledSettings? <BuildHistory /> : <Start />
}
