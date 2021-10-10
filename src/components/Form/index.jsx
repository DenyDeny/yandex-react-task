import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const FormNode = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export function Form({ children }) {
    return (
        <FormNode>
            {children}
        </FormNode>
    )
}

Form.propTypes = {
    children: PropTypes.node.isRequired,
}
