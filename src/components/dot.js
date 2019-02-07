import React from 'react';
import styled from 'styled-components';

const Dot = styled.li.attrs({
  children: ({ onClick }) => <button onClick={onClick}>•</button>, // eslint-disable-line react/prop-types
})`
  display: inline-block;
  pointer-events: none;
  button {
    pointer-events: all;
    border: 0;
    background: 0 0;
    cursor: pointer;
    font-size: 1.8em;
    line-height: 1.2em;
    margin: 0 5px;
    ${({ active }) => active ? 'color: #ffffff;' : 'color: #8eb8ff;'}
    :hover {
      color: #ffffff;
    }
    :focus {
      outline: none;
    }
  }
`;

export default Dot;