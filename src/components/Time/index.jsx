import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Clock } from '../Icon';
import { getDuration } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTime = styled.span`
  font-size: 13px;
  color: var(--black);
`;

const StyledClock = styled(Clock)`
  color: var(--secondary);
  margin-right: 0.375rem;
`;

export function Time({ time }) {
    const { hours, minutes } = getDuration(time);
    return (
        <Wrapper>
            <StyledClock size={16} />
            <StyledTime>
                {`${hours} ч ${minutes} мин`}
            </StyledTime>
        </Wrapper>
    )
}

Time.propTypes = {
    time: PropTypes.number.isRequired,
}
