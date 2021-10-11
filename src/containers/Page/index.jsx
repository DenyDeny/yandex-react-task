import React from 'react';
import styled from "styled-components";
import PropTypes from 'prop-types';
import { Footer } from '../../components/Footer';

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

const LINKS = [
    {
        value: 'Support',
        to: '/',
    },
    {
        value: 'Learning',
        to: '/',
    },
    {
        value: 'Русская версия',
        to: '/',
    },
];

export function Page({ children }) {
    /**
     * children[0] - Header
     * children[1] - Content
     */
    return (
        <Wrapper>
            {children[0]}
            <Content>{children[1]}</Content>
            <Footer
                links={LINKS}
                copyright='Your Name'
            />
        </Wrapper>
    )
}

Page.propTyps = {
    children: PropTypes.arrayOf(PropTypes.node).isRequired
}

