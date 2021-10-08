import React from 'react';
import PropTypes from 'prop-types';
import Wrapper from './styled';

export default function SvgIcon({ children, ...other }) {
    return (
        <Wrapper focusable="false" aria-hidden="true" {...other}>
            {children}
        </Wrapper>
    )
}

SvgIcon.propTypes = {
    children: PropTypes.node.isRequired,
    size: PropTypes.number
}

SvgIcon.defaultProps = {
    size: null,
}
