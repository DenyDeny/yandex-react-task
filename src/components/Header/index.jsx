import styled from 'styled-components';
import PropTypes from 'prop-types';

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 6.25rem;
`;

export function Header({ children }) {
    return (
        <StyledHeader>
            {children}
        </StyledHeader>
    )
}

Header.propTypes = {
    children: PropTypes.node.isRequired,
}
