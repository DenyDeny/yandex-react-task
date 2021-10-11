import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Calendar } from '../Icon';
import { formatDate } from '../../utils';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledDate = styled.span`
  font-size: 13px;
  color: var(--black);
`;

const StyledCalendar = styled(Calendar)`
  color: var(--secondary);
    margin-right: 0.375rem;

`;

function getDate(timestamp) {
    return new Date(timestamp * 1000);
}

export function DateComponent({ date }) {
    const { day, month, hours, minutes } = formatDate(date);
    const title = getDate(date);
    return (
        <Wrapper title={title}>
            <StyledCalendar size={16} />
            <StyledDate>
                {`${day} ${month.slice(0, 3).toLocaleLowerCase()}, ${hours}:${minutes}`}
            </StyledDate>
        </Wrapper>
    )
}

DateComponent.propTypes = {
    date: PropTypes.number.isRequired,
}
