import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Success, Error, Waiting } from '../Icon';
import { Date } from '../Date';
import { Time } from '../Time';
import { Branch } from '../Branch';
import { User } from '../User';
import { EXPECTED_STATUSES } from '../../constants';

function getIcon(status) {
    switch (status) {
        case EXPECTED_STATUSES.SUCCESS:
            return Success;
        case EXPECTED_STATUSES.ERROR:
            return Error;
        case EXPECTED_STATUSES.WAITING:
            return Waiting;
        default: return Success;
    }
}

function getMainColor(status) {
    switch (status) {
        case EXPECTED_STATUSES.SUCCESS:
            return 'var(--green)';
        case EXPECTED_STATUSES.ERROR:
            return 'var(--red-500)';
        case EXPECTED_STATUSES.WAITING:
            return 'var(--orange)';
        default: return 'var(--green)';
    }
}

const Column = styled.div`
  display: flex;
  flex-direction: column;
  &:nth-child(1) {
    grid-area: a;
  }
  &:nth-child(2) {
    grid-area: b;
  }
  &:nth-child(3) {
    grid-area: c;
  }
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-areas: "a b c";
  grid-template-columns: auto 1fr auto;
  column-gap: 0.5rem;
  border-radius: 6px;
  padding: 0.75rem 1.5rem;
  box-shadow: 0 0 1px rgba(67, 68, 69, 0.3), 0 1px 1px rgba(67, 68, 69, 0.3);
  &:hover {
    box-shadow: 0px 0px 1px rgba(67, 68, 69, 0.3), 0px 2px 8px rgba(67, 68, 69, 0.3);
  }
  @media(max-width: 50rem) {
    grid-template-areas:
    "a b"
    ". c";
    padding: 1rem 0.75rem;
  }
`;

const TaskId = styled.span`
  font-size: 18px;
  color: ${({ status }) => getMainColor(status)};
  margin-right: 0.25rem;
  @media(max-width: 50rem) {
    margin-bottom: 0.5rem;
  }
`;

const TaskName = styled.span`
  font-size: 15px;
`;

const TaskIdNameWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
  @media(max-width: 50rem) {
    flex-direction: column;
  }
`;

const BranchUserWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media(max-width: 50rem) {
    flex-direction: column;
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid var(--blue-grey-50);
  }
`;

const DateTimeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  & > *:not(:last-child) {
    margin-bottom: 0.75rem;
    @media(max-width: 50rem) {
      margin-right: 10px;
      margin-bottom: 0;
    }
  }
  @media(max-width: 50rem) {
    flex-direction: row;
  }
`;

export function Card({ id, branch, date, time, user, status, name, hashCommit }) {
    const Icon = useMemo(() => {
        return getIcon(status);
    }, [status]);

    const color = useMemo(() => {
        return getMainColor(status)
    }, [status]);

    return (
        <Wrapper>
            <Column>
                <Icon size={21} color={color} />
            </Column>
            <Column>
                <TaskIdNameWrapper>
                    <TaskId status={status}>#{id}</TaskId>
                    <TaskName>{name}</TaskName>
                </TaskIdNameWrapper>
                <BranchUserWrapper>
                    <Branch name={branch} hash={hashCommit} />
                    <User name={user} />
                </BranchUserWrapper>
            </Column>
            <Column>
                <DateTimeWrapper>
                    <Date date={date} />
                    <Time time={time} />
                </DateTimeWrapper>
            </Column>
        </Wrapper>
    )
}

Card.propTypes = {
    branch: PropTypes.string,
    date: PropTypes.number,
    time: PropTypes.number,
    user: PropTypes.string,
    status: PropTypes.oneOf(Object.values(EXPECTED_STATUSES)),
    hashCommit: PropTypes.string,
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
}

Card.defaultProps = {
    user: '',
    branch: 'master',
    hashCommit: '',
    status: EXPECTED_STATUSES.SUCCESS,
}
