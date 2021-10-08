import styled, { css } from 'styled-components';

const getSize = ({ size }) => {
    if (typeof size === 'number') {
        return css`
            width: ${size}px;
            height: ${size}px;
        `;
    }
    return css`
        width: 100%;
        height: 100%;
    `;
};

export default styled.svg`
    display: inline-block;
    fill: ${({ fill }) => fill || 'currentColor'};
    stroke: currentColor;
    stroke-width: 0;
    user-select: none;
    flex-shrink: 0;
    ${getSize}
`;
