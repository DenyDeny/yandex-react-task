import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

function getFontSizeByLevel(level) {
    switch (level) {
        case 2:
            return 24;
        case 3:
            return 18;
        case 4:
            return 15;
        default: return 24;
    }
}

function getMobileFontSizeByLevel(level) {
    switch (level) {
        case 2:
            return 18;
        case 3:
            return 18;
        case 4:
            return 15;
        default: return 18;
    }
}

const Wrapper = styled.div`
  font-size: ${({ level }) => getFontSizeByLevel(level)}px;
  font-weight: ${({ weight }) => weight};
  margin: 0;
  line-height: 1.5;
  @media(max-width: 50rem) {
    font-size: ${({ level }) => getMobileFontSizeByLevel(level)}px;
  }
`;

export function Heading({ children, level, weight }) {
    return (
        <Wrapper weight={weight} level={level} as={`h${level}`}>
            {children}
        </Wrapper>
    )
}

Heading.propTypes = {
    children: PropTypes.node.isRequired,
    level: PropTypes.oneOf([2, 3, 4]),
    weight: PropTypes.oneOf([400, 500, 700]),
}

Heading.defaultProps = {
    level: 2,
    weight: 500,
}
