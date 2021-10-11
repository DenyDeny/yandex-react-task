import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Wrapper = styled.footer`
  align-self: normal;
  padding: 0.5rem 6.25rem;
  background-color: var(--blue-grey-50);
  margin-top: auto;
  @media(max-width: 50rem) {
    padding: 0.5rem 1rem;
  }
`;

const Items = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Link = styled.a`
  text-decoration: none;
  color: var(--blue-grey-500);
  margin-right: 0.75rem;
  cursor: pointer;

  &:hover {
    color: var(--red-600);
  }
`;

const Copyright = styled.span`
  color: var(--blue-grey-500);
  margin-left: auto;
  @media(max-width: 50rem) {
    flex: 1 1 100%;
    margin-top: 0.5rem;
  }
`;

export function Footer({ copyright, links }) {
    return (
        <Wrapper>
            <Items>
                {links.map(({ value, to }, key) =>
                    <Link key={key} target="_blank" rel="noopener" href={to}>{value}</Link>
                )}
                <Copyright>
                    {`© ${new Date().getFullYear()} ${copyright}`}
                </Copyright>
            </Items>
        </Wrapper>
    )
}

Footer.propTypes = {
    links: PropTypes.arrayOf(PropTypes.shape({
        value: PropTypes.string.isRequired,
        to: PropTypes.string.isRequired,
    })).isRequired,
    copyright: PropTypes.string.isRequired,
}
