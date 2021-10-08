import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button';
import { MiniSettings } from '../../components/Icon';
import {
    Content,
    Header,
    HeaderTitle,
    Footer,
    FooterLinks,
    FooterItem,
    FooterAddress,
    LinkButtonText,
    StyledLink,
    Wrapper,
} from './styled';

export function Page({ children, location: { pathname } }) {
    const isShowedSettingsButton = !pathname.includes('settings');
    return (
        <Wrapper>
            <Header>
                <HeaderTitle>School CI server</HeaderTitle>
                {isShowedSettingsButton && (
                    <StyledLink to='/settings'>
                        <Button
                            icon={<MiniSettings size={12} />}
                            color='gray'
                            side={8}
                        >
                            <LinkButtonText>Settings</LinkButtonText>
                        </Button>
                    </StyledLink>
                )}
            </Header>
            <Content>{children}</Content>
            <Footer>
                <FooterLinks>
                    <FooterItem>Support</FooterItem>
                    <FooterItem>Learning</FooterItem>
                    <FooterItem>Русская версия</FooterItem>
                    <FooterAddress>© 2020 Your Name</FooterAddress>
                </FooterLinks>
            </Footer>
        </Wrapper>
    )
}

Page.propTyps = {
    children: PropTypes.node.isRequired
}

