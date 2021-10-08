import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Settings } from '../../components/Icon';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
`;

export const Description = styled.p`
    margin: 0;
    font-family: var(--font-family);
    font-size: 13px;
    line-height: 1.5;
    text-align: center;
`;

export const SettingsIcon = styled(Settings)`
    margin-bottom: 32px;
`;

export const StyledLink = styled(Link)`
    margin-top: 24px;
    text-decoration: none;
`;
