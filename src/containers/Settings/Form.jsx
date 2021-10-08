import React, { useState, useReducer, useCallback, useContext } from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import { validate } from '../../utils';
import { Button } from '../../components/Button';
import { FormField } from './FormField';
import formReducer, { HANDLE_INPUT_TEXT, CLEAR_FIELD, SET_ERRORS } from './reducers/formReducer';
import { SettingsContext } from '../Context';

const Wrapper = styled.div`
    width: 100%;
    max-width: 29.75rem;
    margin-bottom: 2rem;
`;

const FormElement = styled.form`
    display: flex;
    flex-direction: column;
`;

const SyncField = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;

    & > * {
        margin-bottom: 0;
        margin-right: 0.5rem;
    }
`;

const SyncFieldText = styled.span`
    font-size: 13px;
    line-height: 1.5;
`;

const StyledSyncFormField = styled(FormField)`
    width: 3.25rem;
    text-align: right;
    margin-bottom: 0;
`;

const ActionsButtonsGroup = styled.div`
    display: flex;

    & > :not(:last-child) {
        margin-right: 0.5rem;
    }
`;

const initialState = {
    repository: '',
    buildCommand: '',
    branch: '',
    period: 0,
    errors: {
        repository: '',
        buildCommand: '',
    }
};

export function Form() {
    const history = useHistory();

    const context = useContext(SettingsContext);
    const saveSettings = context?.saveSettings;

    const [saving, setSaving] = useState(false);

    const [{
        repository,
        buildCommand,
        branch,
        period,
        errors,
    }, dispatch] = useReducer(formReducer, initialState);

    const handleTextChange = useCallback((e) => {
        dispatch({
            type: HANDLE_INPUT_TEXT,
            field: e.target.name,
            payload: e.target.value,
        })
    }, []);

    const clearInput = useCallback((name) => {
        dispatch({
            type: CLEAR_FIELD,
            field: name,
        })
    }, []);

    const setErrors = (errors) => {
        dispatch({
            type: SET_ERRORS,
            payload: errors,
        })
    };

    const isFormValid = (errors) => {
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        const errors = validate({ repository, buildCommand, period });
        setErrors(errors);
        if (isFormValid(errors)) {
            setSaving(true);
            const { isSaved } = await saveSettings({
                repository,
                buildCommand,
                period,
                branch,
            })
            setSaving(false);
            if (isSaved) {
                history.push('/')
            }
        }
    }, [repository, buildCommand, branch, period]);

    const handleCancel = useCallback((e) => {
        e.preventDefault();
        history.push('/');
    }, []);

    return (
        <Wrapper>
            <FormElement>
                <FormField
                    name='repository'
                    label='GitHub repository'
                    placeholder='user-name/repo-name'
                    value={repository}
                    onChange={handleTextChange}
                    onClear={clearInput}
                    isRequired={true}
                    canClear={true}
                    errorMessage={errors.repository}
                />
                <FormField
                    name='buildCommand'
                    label='Build command'
                    placeholder='npm ci && npm run build'
                    value={buildCommand}
                    onChange={handleTextChange}
                    onClear={clearInput}
                    isRequired={true}
                    canClear={true}
                    errorMessage={errors.buildCommand}
                />
                <FormField
                    name='branch'
                    label='Main branch'
                    placeholder='master |'
                    value={branch}
                    onChange={handleTextChange}
                    onClear={clearInput}
                    canClear={true}
                />
                <SyncField>
                    <SyncFieldText>Synchronize every</SyncFieldText>
                    <StyledSyncFormField
                        name='period'
                        value={period}
                        onChange={handleTextChange}
                        type='number'
                    />
                    <SyncFieldText>minutes</SyncFieldText>
                </SyncField>
                <ActionsButtonsGroup>
                    <Button
                        onClick={handleSubmit}
                        color='yellow'
                        side={20}
                        disabled={saving}
                    >
                        Save
                    </Button>
                    <Button
                        onClick={handleCancel}
                        color='gray'
                        side={20}
                        disabled={saving}
                    >
                        Cancel
                    </Button>
                </ActionsButtonsGroup>
            </FormElement>
        </Wrapper>
    )
}
