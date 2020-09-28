import React from 'react';
import styled from 'styled-components';
import Section1 from './Section1';
import Section2 from './Section2';
import Section3 from './Section3';
import Section4 from './Section4';

const Main = () => {
  const MainStyle = styled.div`
    margin: 30px 80px;
  `;

  return (
    <MainStyle>
      <Section1 />

      <Section2 />

      <Section3 />

      <Section4 />
    </MainStyle>
  );
};

export default Main;
