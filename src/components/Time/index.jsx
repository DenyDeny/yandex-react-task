import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Clock } from '../Icon';
import { getDuration } from '../../utils';

const Wrapper = styled.time`
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

function getDate(timestamp) {
    return new Date(timestamp * 1000);
}

export function Time({ time }) {
    const { hours, minutes } = getDuration(time);
    const title = getDate(time);
    return (
        <Wrapper title={title}>
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
