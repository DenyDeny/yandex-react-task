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

export function Date({ date }) {
    const { day, month, hours, minutes } = formatDate(date);
    return (
        <Wrapper>
            <StyledCalendar size={16} />
            <StyledDate>
                {`${day} ${month.slice(0, 3).toLocaleLowerCase()}, ${hours}:${minutes}`}
            </StyledDate>
        </Wrapper>
    )
}

Date.propTypes = {
    date: PropTypes.number.isRequired,
}
