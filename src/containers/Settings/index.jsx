import React from 'react';
import styled from 'styled-components';
import { Header } from '../../components/Header';
import { Page } from '../Page';
import Form from './Form';

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const DescriptionTitle = styled.h4`
  margin: 0;
  font-size: 15px;
  font-weight: 700;
  line-height: 1.5;
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

const HeaderTitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 500;
  color: var(--blue-grey-500);
  margin: 0;
  @media(max-width: 50rem) {
    font-size: 18px;
  }
`;

export function Settings() {
    return (
        <Page>
            <Header>
                <HeaderTitle>School CI server</HeaderTitle>
            </Header>
            <>
                <Description>
                    <DescriptionTitle>
                        Settings
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
