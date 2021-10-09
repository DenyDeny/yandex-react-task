import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { User as UserIcon } from '../Icon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledText = styled.span`
  color: var(--secondary)
`;

const StyledUser = styled(UserIcon)`
  color: var(--secondary);
  margin-right: 0.375rem;
`;

export function User({ name }) {
    return (
        <Wrapper>
            <StyledUser size={16} />
            <StyledText>{name}</StyledText>
        </Wrapper>
    )
}

User.propTypes = {
    name: PropTypes.string.isRequired,
}
