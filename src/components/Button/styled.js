import styled from 'styled-components';

function getColorName(color) {
    switch (color) {
        case 'yellow':
            return 'var(--yellow)';
        case 'gray':
            return 'var(--gray)';
        case 'ghost':
            return 'var(--white)';
        default: return 'var(--white)';
    }
}

function getBorderColor(color) {
    switch (color) {
        case 'yellow':
            return 'var(--yellow)';
        case 'gray':
            return 'var(--gray)';
        case 'ghost':
            return 'var(--field-border-color)';
        default: return 'var(--white)';
    }
}

function getHoveredColorName(color) {
    switch (color) {
        case 'yellow':
            return 'var(--yellow-hovered)';
        case 'gray':
            return 'var(--gray-hovered)';
        default: return 'var(--gray-hovered)';
    }
}

function getFocusedBorderColor(color) {
    switch (color) {
        case 'yellow':
            return 'var(--yellow-border-color)';
        case 'gray':
            return 'var(--gray-hovered)';
        default: return 'var(--gray-border-color)';
    }
}

export const Wrapper = styled.button`
    display: flex;
    outline: none;
    border-radius: 4px;
    padding: ${props => props.side === 8? 8 : 12}px ${props => props.side}px;
    background-color: ${({ color }) => getColorName(color)};
    border: 2px solid ${({ color }) => getBorderColor(color)};
    cursor: pointer;

    &:hover {
      background-color: ${({ color }) => getHoveredColorName(color)};
      border-color: ${({ color }) => getHoveredColorName(color)};
    }

    &:focus {
      border-color: ${({ color }) => getFocusedBorderColor(color)};
    }

    &:focus, &:active {
        outline: none;
    }

    &[disabled] {
        background-color: var(--disabled);
        border-color: var(--disabled);
        cursor: not-allowed;
    }

`;

export const WrapperIcon = styled.span`
  display: flex;
  margin: auto;
`;
