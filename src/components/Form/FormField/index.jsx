import React, { useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RequiredSymbol, ClearField } from '../../../components/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem
`;

const Field = styled.input`
  box-sizing: border-box;
  display: flex;
  font-size: 13px;
  font-weight: 400;
  border-radius: 4px;
  border: 2px solid ${({ errorMessage }) =>
    errorMessage ? 'var(--red-500)' : 'var(--field-border-color)' };
  width: 100%;
  padding: 0.75rem 2rem 0.75rem 0.75rem;

  &[name="period"] {
    padding: 0.75rem;
  }

  &:focus {
    outline: none;
    border-color: var(--gray-border-color);
  }
`;

const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
`;

const StyledClearField = styled(ClearField)`
  position: absolute;
  right: 0.75rem;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  color: var(--color-text-second);

  &:hover {
    color: var(--gray-border-color);
  }
`;

const Label = styled.label`
  display: inline-block;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;
  color: var(--black);
  margin-bottom: 0.5rem;
`;

const StyledRequiredSymbol = styled(RequiredSymbol)`
  position: relative;
  top: -4px;
  color: var(--red-500);
  margin-left: 2px;
`;

const ErrorMessage = styled.span`
  color: var(--red-500);
  font-size: 13px;
  margin: 0.5rem 0;
`;

export function FormField({
    label,
    name,
    placeholder,
    isRequired,
    canClear,
    onClear,
    value,
    errorMessage,
    ...other
}) {
    const field = useRef(null);
    const clearField = useCallback(() => {
        field.current.focus();
        onClear(name)
    }, [name, onClear]);
    return (
        <Wrapper>
            {label && (
                <Label htmlFor={name}>
                    {label}
                    {isRequired && (
                        <StyledRequiredSymbol size={6} />
                    )}
                </Label>
            )}
            {errorMessage && (
                <ErrorMessage>{errorMessage}</ErrorMessage>
            )}
            <FieldWrapper>
                <Field
                    ref={field}
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    errorMessage={errorMessage}
                    {...other}
                />
                {canClear && value && <StyledClearField onClick={clearField} size={16} />}
            </FieldWrapper>
        </Wrapper>
    )
}

FormField.propTypes = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
    isRequired: PropTypes.bool,
    onChange: PropTypes.func,
    canClear: PropTypes.bool,
    type: PropTypes.string,
    errorMessage: PropTypes.string,
}

FormField.defaultProps = {
    label: '',
    placeholder: '',
    isRequired: false,
    onChange() {},
    canClear: false,
    type: 'text',
    errorMessage: '',
}
