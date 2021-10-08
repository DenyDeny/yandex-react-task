import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { RequiredSymbol, ClearField } from '../../components/Icon';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem
`;

const Field = styled.input`
  box-sizing: border-box;
  display: flex;
  border-radius: 4px;
  border: 2px solid var(--field-border-color);
  width: 100%;
  padding: 0.75rem;

  &input[type='number'] {
    -moz-appearance:textfield;
  }

  &[type=number]::-webkit-inner-spin-button,
  &[type=number]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
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
    const clearField = useCallback(() => {
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
                    id={name}
                    name={name}
                    placeholder={placeholder}
                    value={value}
                    {...other}
                />
                {canClear && <StyledClearField onClick={clearField} size={16} />}
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
