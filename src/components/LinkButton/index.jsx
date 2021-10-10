import React from 'react';
import { useHistory } from "react-router-dom";
import { Button } from '../Button';

export function LinkButton({ linkTo, ...other }) {
    const history = useHistory();
    const onClick = () => history.push(linkTo);
    return (
        <Button
            {...other}
            onClick={onClick}
        />
    )
}
