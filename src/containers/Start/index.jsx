import React from 'react';
import styled from 'styled-components';
import { MiniSettings } from '../../components/Icon';
import { Page } from '../Page';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { LinkButton } from '../../components/LinkButton';
import { Settings } from '../../components/Icon';

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

const Description = styled.p`
    margin: 0;
    font-family: var(--font-family);
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
`;

const SettingsIcon = styled(Settings)`
    margin-bottom: 2rem;
`;

const StyledLink = styled(LinkButton)`
    margin-top: 1.5rem;
    text-decoration: none;
`;

const StyledHeading = styled.div`
  color: var(--blue-grey-500);
  margin: 0;
  align-self: flex-start;
`;

const LinkButtonText = styled.span`
  margin-left: 0.5rem;
`;

export function Start() {
    return (
        <Page>
            <Header>
                <StyledHeading>
                    <Heading level={2}>School CI server</Heading>
                </StyledHeading>
                <LinkButton
                    linkTo='/settings'
                    icon={<MiniSettings size={12} />}
                    color='gray'
                    side={8}
                >
                    <LinkButtonText>Settings</LinkButtonText>
                </LinkButton>
            </Header>
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
        </Page>
    )
}
