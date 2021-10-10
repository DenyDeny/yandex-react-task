import React, { useContext, useState, useRef, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../components/Button';
import { LinkButton } from '../../components/LinkButton';
import { MiniSettings, Run } from '../../components/Icon';
import { Modal } from '../../components/Modal';
import { RunBuildForm } from '../RunBuildForm';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { SettingsContext } from '../Context';
import {
    Content,
    Header,
    HeaderTitle,
    Footer,
    FooterLinks,
    FooterItem,
    FooterAddress,
    LinkButtonText,
    RepoTitle,
    StyledLink,
    Wrapper,
    GroupButtons,
} from './styled';

export function Page({ children, location: { pathname } }) {
    const { settings } = useContext(SettingsContext);
    const settledSettings = settings?.settledSettings;
    const repository = settings?.repository;
    const isShowedSettingsButton = !pathname.includes('settings') && !settledSettings;
    const isShowedRunButton = !pathname.includes('settings');

    const [isModalOpened, setIsModalOpened] = useState(false);

    const modalComponent = useRef(null);

    const onModalClose = useCallback(() => {
        setIsModalOpened(false);
    }, [isModalOpened]);

    useOutsideClick(modalComponent, onModalClose);

    return (
        <Wrapper>
            <Header>
                {repository && isShowedRunButton ?
                    <RepoTitle>{repository}</RepoTitle> :
                    <HeaderTitle>School CI server</HeaderTitle>
                }
                {repository && isShowedRunButton && (
                    <GroupButtons>
                        <Button
                            icon={<Run size={12} />}
                            color='gray'
                            side={8}
                            onClick={setIsModalOpened}
                        >
                            <LinkButtonText>Run build</LinkButtonText>
                        </Button>
                        <LinkButton
                            linkTo='/settings'
                            icon={<MiniSettings size={12} />}
                            color='gray'
                            side={8}
                        />
                    </GroupButtons>
                )}
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
            <Modal
                ref={modalComponent}
                isOpen={isModalOpened}
                onClose={onModalClose}
            >
                <RunBuildForm
                    onCancel={onModalClose}
                />
            </Modal>
        </Wrapper>
    )
}

Page.propTyps = {
    children: PropTypes.node.isRequired
}

