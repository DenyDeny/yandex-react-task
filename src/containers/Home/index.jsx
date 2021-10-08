import React from 'react';
import { Page } from '../Page';
import { Start } from '../Start';

export function Home(props) {
    return (
        <Page {...props}>
            <Start />
        </Page>
    )
}
