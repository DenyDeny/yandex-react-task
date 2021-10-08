import React from 'react';
import { Button } from '../../components/Button';
import {
    Description,
    SettingsIcon,
    StyledLink,
    Wrapper,
} from './styled';

export function Start() {
    return (
        <Wrapper>
            <SettingsIcon size={124} />
            <Description>
                Configure repository connection<br />
                and synchronization settings
            </Description>
            <StyledLink to='/settings'>
                <Button
                    side={20}
                    color='yellow'
                >
                    Open settings
                </Button>
            </StyledLink>
        </Wrapper>
    )
}
