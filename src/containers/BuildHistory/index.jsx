import React, { useState, useRef, useCallback } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { Page } from '../Page';
import { Button } from '../../components/Button';
import { LinkButton } from '../../components/LinkButton';
import { Header } from '../../components/Header';
import { Card } from '../../components/Card';
import { MiniSettings, Run } from '../../components/Icon';
import { Modal } from '../../components/Modal';
import { RunBuildForm } from '../RunBuildForm';
import { useOutsideClick } from '../../hooks/useOutsideClick';
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

const HeaderTitle = styled.h2`
  font-size: 1.75rem;
  color: var(--black);
  margin: 0;
  word-break: break-word;
  margin-right: 0.5rem;
  @media(max-width: 50rem) {
    font-size: 18px;
  }
`;

function BuildHistory({ settings }) {
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
                    <HeaderTitle>{repository}</HeaderTitle>
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
                            user,
                            branch,
                            time,
                            date,
                            status,
                            hashCommit,
                            name,
                        }
                    ) => (
                        <Card
                            key={id}
                            id={id}
                            name={name}
                            user={user}
                            status={status}
                            time={time}
                            date={date}
                            branch={branch}
                            hashCommit={hashCommit}
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

const mapStateToProps = (state) => ({
    settings: state.settings,
});

export default connect(mapStateToProps)(BuildHistory)
