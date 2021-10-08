import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 0 auto;
  justify-content: space-between;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 0.75rem 6.25rem;
`;

export const HeaderTitle = styled.h2`
  font-size: 1.75rem;
  color: var(--blue-grey-500);
  margin: 0;
`;

export const Content = styled.div`
  padding: 0 6.25rem;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Footer = styled.footer`
  align-self: normal;
  padding: 0.5rem 6.25rem;
  background-color: var(--blue-grey-50);
`;

export const FooterLinks = styled.div`
  display: flex;
`;

export const FooterItem = styled.span`
  color: var(--blue-grey-500);
  margin-right: 0.75rem;
  cursor: pointer;

  &:hover {
    color: var(--red-600);
  }
`;

export const FooterAddress = styled.span`
  color: var(--blue-grey-500);
  margin-left: auto;
`;

export const LinkButtonText = styled.span`
  margin-left: 0.5rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
  }
`;
