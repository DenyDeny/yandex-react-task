import React from 'react';
import styled from 'styled-components';
import { LinkButton } from '../../components/LinkButton';
import { Settings } from '../../components/Icon';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Description = styled.p`
    margin: 0;
    font-family: var(--font-family);
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
`;

export const SettingsIcon = styled(Settings)`
    margin-bottom: 2rem;
`;

export const StyledLink = styled(LinkButton)`
    margin-top: 1.5rem;
    text-decoration: none;
`;

export function Start() {
    return (
        <Wrapper>
            <SettingsIcon size={124} />
            <Description>
                Configure repository connection<br />
                and synchronization settings
            </Description>
            <StyledLink
                linkTo='/settings'
                side={20}
                color='yellow'
            >
                Open settings
            </StyledLink>
        </Wrapper>
    )
}
