import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Form } from '../../components/Form';
import { Heading } from '../../components/Heading';
import { Button } from '../../components/Button';
import { FormField } from '../../components/Form/FormField';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const ActionButtons = styled.div`
  display: flex;

  & > :not(:last-child) {
    margin-right: 0.75rem;
  }
`;

const Title = styled.span`
  font-size: 15px;
`;

const Description = styled.p`
  font-size: 13px
`;

export function RunBuildForm({ onCancel }) {
    const [commitHash, setCommitHash] = useState('');
    const [error, setErrors] = useState('');

    const onChange = useCallback((e) => {
        setCommitHash(e.target.value);
    }, [commitHash, setCommitHash]);

    const onClear = useCallback(() => {
        setCommitHash('');
    }, [commitHash, setCommitHash]);

    const onSubmit = useCallback((e) => {
        e.preventDefault();
        const hashError = commitHash.length ? '' : 'Please fill this field';
        setErrors(hashError);
        if (!hashError) {
            alert('Success');
        }
    }, [commitHash, error]);

    return (
        <Wrapper>
            <Heading level={3}>New build</Heading>
            <Description>Enter the commit hash which you want to build.</Description>
            <Form>
                <FormField
                    placeholder='Commit hash'
                    canClear={true}
                    value={commitHash}
                    onChange={onChange}
                    onClear={onClear}
                    errorMessage={error}
                />
                <ActionButtons>
                    <Button
                        color='yellow'
                        onClick={onSubmit}
                    >
                        Run build
                    </Button>
                    <Button
                        color='ghost'
                        onClick={onCancel}
                    >
                        Cancel
                    </Button>
                </ActionButtons>
            </Form>
        </Wrapper>
    )
}

RunBuildForm.propTypes = {
    onCancel: PropTypes.func,
}

RunBuildForm.defaultProps = {
    onCancel() {},
}
