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
  @media(max-width: 50rem) {
    padding: 0 1rem;
  }
`;

const Footer = styled.footer`
  align-self: normal;
  padding: 0.5rem 6.25rem;
  background-color: var(--blue-grey-50);
  margin-top: auto;
  @media(max-width: 50rem) {
    padding: 0.5rem 1rem;
  }
`;

const FooterItems = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FooterLink = styled.a`
  text-decoration: none;
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
  @media(max-width: 50rem) {
    flex: 1 1 100%;
    margin-top: 0.5rem;
  }
`;

export function Page({ children }) {
    return (
        <Wrapper>
            {children[0]}
            <Content>{children[1]}</Content>
            <Footer>
                <FooterItems>
                    <FooterLink
                        target="_blank"
                        href='/'
                        rel="noopener"
                    >
                        Support
                    </FooterLink>
                    <FooterLink
                        target="_blank"
                        href='/'
                        rel="noopener"
                    >
                        Learning
                    </FooterLink>
                    <FooterLink
                        target="_blank"
                        href='/'
                        rel="noopener"
                    >
                        Русская версия
                    </FooterLink>
                    <FooterAddress>© 2020 Your Name</FooterAddress>
                </FooterItems>
            </Footer>
        </Wrapper>
    )
}

Page.propTyps = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired
}

