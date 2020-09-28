import React from 'react';
import styled from 'styled-components';

const Section2 = () => {
  const Section2Style = styled.section``;
  const SectionTitleStyle = styled.section`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
    margin-top: 40px;
    margin-bottom: 20px;
  `;
  const ImageLayoutStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  `;
  const ImageStyle = styled.img`
    width: 300px;
    height: 270px;
  `;
  return (
    <Section2Style>
      <SectionTitleStyle>추천 여행지</SectionTitleStyle>
      <ImageLayoutStyle>
        <ImageStyle src="images/choo1.png"></ImageStyle>
        <ImageStyle src="images/choo2.png"></ImageStyle>
        <ImageStyle src="images/choo3.png"></ImageStyle>
        <ImageStyle src="images/choo4.png"></ImageStyle>
        <ImageStyle src="images/choo5.png"></ImageStyle>
      </ImageLayoutStyle>
    </Section2Style>
  );
};

export default Section2;
