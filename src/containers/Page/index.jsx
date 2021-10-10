import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  height: 100%;
  margin: 0 auto;
`;

const Content = styled.div`
  padding: 0 6.25rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
`;

const Footer = styled.footer`
  align-self: normal;
  padding: 0.5rem 6.25rem;
  background-color: var(--blue-grey-50);
  margin-top: auto;
`;

const FooterLinks = styled.div`
  display: flex;
`;

const FooterItem = styled.span`
  color: var(--blue-grey-500);
  margin-right: 0.75rem;
  cursor: pointer;

  &:hover {
    color: var(--red-600);
  }
`;

const FooterAddress = styled.span`
  color: var(--blue-grey-500);
  margin-left: auto;
`;

export function Page({ children }) {
    return (
        <Wrapper>
            {children[0]}
            <Content>{children[1]}</Content>
            <Footer>
                <FooterLinks>
                    <FooterItem>Support</FooterItem>
                    <FooterItem>Learning</FooterItem>
                    <FooterItem>Русская версия</FooterItem>
                    <FooterAddress>© 2020 Your Name</FooterAddress>
                </FooterLinks>
            </Footer>
        </Wrapper>
    )
}

Page.propTyps = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired
}

