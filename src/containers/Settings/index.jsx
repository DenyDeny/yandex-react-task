import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Heading } from '../../components/Heading';
import { Page } from '../Page';
import { Form } from './Form';

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const DescriptionTitle = styled.div`
  margin: 0;
  color: var(--black);
  margin-bottom: 8px;
`;

const DescriptionText = styled.p`
  margin: 0;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--blue-grey-500);
`;

const StyledHeading = styled.div`
  color: var(--blue-grey-500);
  align-self: flex-start;
`;

export function Settings() {
    return (
        <Page>
            <Header>
                <StyledHeading>
                    <Heading level={2}>School CI server</Heading>
                </StyledHeading>
            </Header>
            <>
                <Description>
                    <DescriptionTitle>
                        <Heading level={4} weight={700}>Settings</Heading>
                    </DescriptionTitle>
                    <DescriptionText>
                        Configure repository connection and
                        synchronization settings.
                    </DescriptionText>
                </Description>
                <Form />
            </>
        </Page>
    )
}
