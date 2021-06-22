import React from 'react';
import styled from 'styled-components';
import {FaRegSadTear} from "react-icons/fa"
import { Link } from 'react-router-dom';
const Error = () => {
  return (
    <Wrapper>
      
      <h1>
      <FaRegSadTear/> Oops!
      </h1>
      <h3>sorry, the page can not be found</h3>
      <Link to="/" className="btn">
        back home
      </Link>
    </Wrapper>
  )
};

// Styles
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background: var(--clr-primary-10);
  h1 {
    font-size: 10rem;
    margin-bottom: 5rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
