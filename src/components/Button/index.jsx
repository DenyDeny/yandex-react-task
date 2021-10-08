import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper, WrapperIcon } from "./styled";

const SIDE_GUTTERS = [8, 12, 20];

export function Button({ children, icon, ...other }) {
    return (
        <Wrapper {...other}>
            { icon && <WrapperIcon>{icon}</WrapperIcon> }
            { children }
        </Wrapper>
    )
}

Button.propTypes = {
    color: PropTypes.oneOf(['yellow', 'gray', 'ghost']),
    children: PropTypes.node,
    className: PropTypes.string,
    icon: PropTypes.node,
    onClick: PropTypes.func,
    side: PropTypes.oneOfType(SIDE_GUTTERS),
    disabled: PropTypes.bool,
};

Button.defaultProps = {
    color: 'gray',
    children: null,
    className: '',
    icon: null,
    onClick() {},
    side: 12,
    disabled: false,
};
