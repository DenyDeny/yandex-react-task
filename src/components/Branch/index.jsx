import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Branch as BranchIcon } from '../Icon';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.75rem;
  @media(max-width: 50rem) {
    margin-right: 0;
    margin-bottom: 0.5rem;
  }
`;

const StyledName = styled.span`
  font-size: 13px;
  color: var(--black);
  margin-right: 0.25rem;
`;

const StyledHash = styled.span`
  font-size: 13px;
  color: var(--black);
  opacity: 0.65;
`;

const StyledBranch = styled(BranchIcon)`
  color: var(--secondary);
  margin-right: 0.375rem;
`;

export function Branch({ name, hash }) {
    return (
        <Wrapper>
            <StyledBranch size={16} />
            <StyledName>{name}</StyledName>
            <StyledHash>{hash}</StyledHash>
        </Wrapper>
    )
}

Branch.propTypes = {
    name: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
}
