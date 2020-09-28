import React from 'react';
import styled from 'styled-components';

const Section3 = () => {
  const Section3Style = styled.section``;
  const SectionTitleStyle = styled.section`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
    margin-top: 40px;
  `;
  const AdImgStyle = styled.div`
    background-image: url('images/ad2.png');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    height: 300px;
    margin: 30px 0px;
  `;
  return (
    <Section3Style>
      <SectionTitleStyle>에어비앤비 플러스를 만나보세요!</SectionTitleStyle>
      <div>퀄리티와 인테리어 디자인이 검증된 숙소 셀렉션</div>
      <AdImgStyle></AdImgStyle>
    </Section3Style>
  );
};

export default Section3;
