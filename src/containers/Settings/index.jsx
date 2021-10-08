import React from 'react';
import styled from 'styled-components';
import { Page } from '../Page';
import { Form } from './Form';

const Description = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1.5rem;
`;

const DescriptionTitle = styled.h4`
  margin: 0;
  font-size: 15px;
  line-height: 1.5;
  color: var(--black);
  margin-bottom: 8px;
`;

const DescriptionText = styled.p`
  margin: 0;
  font-size: 13px;
  line-height: 1.5;
  color: var(--blue-grey-500);
`;

export function Settings(props) {
    return (
        <Page {...props}>
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
        </Page>
    )
}
