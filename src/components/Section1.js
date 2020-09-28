import React from 'react';
import styled from 'styled-components';

const Section1 = () => {
  const Section1Style = styled.section``;
  const SectionTitleStyle = styled.section`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
    margin-bottom: 20px;
  `;
  const CardBoxLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `;
  const CardBoxStyle = styled.div`
    border-radius: 6px;
    border: 1px solid rgb(202, 200, 200);
    height: 82px;
    display: grid;
    align-items: center;
    grid-template-columns: auto auto;
    margin: 10px 10px;
  `;
  const CardImgStyle = styled.img`
    width: 140px;
    height: 80px;
  `;
  const CardTextStyle = styled.div`
    font-weight: 800;
    font-size: 16px;
  `;
  const AdImgStyle = styled.div`
    background-image: url('images/ad1.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    height: 320px;
    margin: 20px 0px;
    border-radius: 16px;
  `;
  return (
    <Section1Style>
      <SectionTitleStyle>에어비앤비 둘러보기</SectionTitleStyle>
      <CardBoxLayout>
        <CardBoxStyle>
          <div>
            <CardImgStyle src="images/card1.jpg"></CardImgStyle>
          </div>
          <CardTextStyle>숙소 및 부티크 호텔</CardTextStyle>
        </CardBoxStyle>
        <CardBoxStyle>
          <div>
            <CardImgStyle src="images/card2.jpg"></CardImgStyle>
          </div>
          <CardTextStyle>트립</CardTextStyle>
        </CardBoxStyle>
        <CardBoxStyle>
          <div>
            <CardImgStyle src="images/card3.jpg"></CardImgStyle>
          </div>
          <CardTextStyle>어드벤쳐</CardTextStyle>
        </CardBoxStyle>
        <CardBoxStyle>
          <div>
            <CardImgStyle src="images/card4.jpg"></CardImgStyle>
          </div>
          <CardTextStyle>레스토랑</CardTextStyle>
        </CardBoxStyle>
      </CardBoxLayout>
      <AdImgStyle />
    </Section1Style>
  );
};

export default Section1;
