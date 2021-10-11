import React, { useContext, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { Page } from '../Page';
import { Button } from '../../components/Button';
import { LinkButton } from '../../components/LinkButton';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Card } from '../../components/Card';
import { MiniSettings, Run } from '../../components/Icon';
import { Modal } from '../../components/Modal';
import { RunBuildForm } from '../RunBuildForm';
import { useOutsideClick } from '../../hooks/useOutsideClick';
import { SettingsContext } from '../Context';
import { BUILDS } from './builds';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    margin-bottom: 0.5rem;
  }
`;

const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-bottom: 0;
`;

const LinkButtonText = styled.span`
  margin-left: 0.5rem;
`;

const GroupButtons = styled.div`
  display: flex;
  align-self: flex-start;
  & > :not(:last-child) {
    margin-right: 0.5rem;
  }
`;

const StyledHeading = styled.div`
  color: var(--black);
  align-self: flex-start;
  word-break: break-word;
  margin-right: 0.5rem;
`;

export function BuildHistory() {
    const { settings } = useContext(SettingsContext);
    const repository = settings?.repository;

    const [isModalOpened, setIsModalOpened] = useState(false);

    const modalComponent = useRef(null);

    const onModalClose = useCallback(() => {
        setIsModalOpened(false);
    }, [isModalOpened]);

    useOutsideClick(modalComponent, onModalClose);

    return (
        <>
            <Page>
                <Header>
                    <StyledHeading>
                        <Heading level={2}>{repository}</Heading>
                    </StyledHeading>
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
                </Header>
                <Wrapper>
                    { BUILDS.map((
                        {
                            id,
                            ...other
                        }
                    ) => (
                        <Card
                            key={id}
                            id={id}
                            {...other}
                        />
                    ))}
                    <StyledButton
                        side={12}
                        color="gray"
                    >
                        Show more
                    </StyledButton>
                </Wrapper>
            </Page>
            <Modal
                ref={modalComponent}
                isOpen={isModalOpened}
                onClose={onModalClose}
            >
                <RunBuildForm
                    onCancel={onModalClose}
                />
            </Modal>
        </>
    )
}
