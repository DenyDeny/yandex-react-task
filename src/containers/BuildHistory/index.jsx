import React from 'react';
import styled from 'styled-components';
import { Card } from '../../components/Card';
import { BUILDS } from './builds';
import { Button } from '../../components/Button';

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

export function BuildHistory() {
    return (
        <Wrapper>
            { BUILDS.map((
                {
                    id,
                    user,
                    branch,
                    time,
                    date, status,
                    hashCommit,
                    name,
                }
            ) => (
                <Card
                    id={id}
                    key={id}
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
    )
}
