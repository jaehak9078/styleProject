import React from 'react';
import styled from 'styled-components';

const Section4 = () => {
  const Section4Style = styled.section``;
  const SectionTitleStyle = styled.section`
    font-size: 25px;
    font-weight: 800;
    color: rgb(68, 66, 66);
    margin-top: 40px;
    margin-bottom: 20px;
  `;
  const CardSectionLayoutStyle = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
  `;
  const CardTitleStyle = styled.div`
    font-size: 13px;
    color: gray;
    margin-bottom: 10px;
  `;
  const CardTextStyle = styled.div`
    font-size: 18px;
    font-weight: 800;
  `;
  const ImageStyle = styled.img`
    width: 420px;
    height: 180px;
  `;
  const RatingStyle = styled.span`
    color: rgb(9, 122, 53);
    margin-right: 10px;
    font-size: 12px;
  `;
  const CountTypeStyle = styled.span`
    font-size: 12px;
  `;
  const CardStyle = styled.div`
    margin: 10px 10px 10px 0px;
  `;
  const CardSectionStyle = styled.div``;

  return (
    <Section4Style>
      <SectionTitleStyle>전세계 숙소</SectionTitleStyle>
      <CardSectionLayoutStyle>
        <CardStyle>
          <ImageStyle src="images/home1.png"></ImageStyle>
          <CardTitleStyle>오두막 · BALIAN BEACH, BALI</CardTitleStyle>
          <CardTextStyle>BALIAN TREEHOUSE w beautiful pool</CardTextStyle>
          <div>
            <RatingStyle>★★★★★</RatingStyle>
            <CountTypeStyle>185 슈퍼호스트</CountTypeStyle>
          </div>
        </CardStyle>
        <CardStyle>
          <ImageStyle src="images/home2.png"></ImageStyle>
          <CardTitleStyle>키클라데스 주택 · 이아(OIA)</CardTitleStyle>
          <CardTextStyle>Unique Architecture Cave House</CardTextStyle>
          <div>
            <RatingStyle>★★★★★</RatingStyle>
            <CountTypeStyle>188 슈퍼호스트</CountTypeStyle>
          </div>
        </CardStyle>
        <CardStyle>
          <ImageStyle src="images/home3.png"></ImageStyle>
          <CardTitleStyle>
            성 · 트웬티나인 팜스(TWENTYNINE PALMS)
          </CardTitleStyle>
          <CardTextStyle>Tile House</CardTextStyle>
          <div>
            <RatingStyle>★★★★★</RatingStyle>
            <CountTypeStyle>367 슈퍼호스트</CountTypeStyle>
          </div>
        </CardStyle>
        <CardStyle>
          <ImageStyle src="images/home4.png"></ImageStyle>
          <CardTitleStyle>검증됨 · 케이프타운</CardTitleStyle>
          <CardTextStyle>
            Modern, Chic Penthouse with Mountain, City & Sea Views
          </CardTextStyle>
          <div>
            <RatingStyle>★★★★★</RatingStyle>
            <CountTypeStyle>177 슈퍼호스트</CountTypeStyle>
          </div>
        </CardStyle>
        <CardStyle>
          <ImageStyle src="images/home5.png"></ImageStyle>
          <CardTitleStyle>아파트 전체 · 마드리드(MADRID)</CardTitleStyle>
          <CardTextStyle>솔광장에 위치한 개인 스튜디오</CardTextStyle>
          <div>
            <RatingStyle>★★★★★</RatingStyle>
            <CountTypeStyle>459 슈퍼호스트</CountTypeStyle>
          </div>
        </CardStyle>
        <CardStyle>
          <ImageStyle src="images/home6.png"></ImageStyle>
          <CardTitleStyle>집 전체 · HUMAC</CardTitleStyle>
          <CardTextStyle>
            Vacation house in etno-eco village Humac
          </CardTextStyle>
          <div>
            <RatingStyle>★★★★★</RatingStyle>
            <CountTypeStyle>119 슈퍼호스트</CountTypeStyle>
          </div>
        </CardStyle>
        <CardStyle>
          <ImageStyle src="images/home7.png"></ImageStyle>
          <CardTitleStyle>개인실 · 마라케시</CardTitleStyle>
          <CardTextStyle>The Cozy Palace</CardTextStyle>
          <div>
            <RatingStyle>★★★★★</RatingStyle>
            <CountTypeStyle>559 슈퍼호스트</CountTypeStyle>
          </div>
        </CardStyle>
        <CardStyle>
          <ImageStyle src="images/home8.png"></ImageStyle>
          <CardTitleStyle>게스트용 별채 전체 · 로스앤젤레스</CardTitleStyle>
          <CardTextStyle>Private Pool House with Amazing Views!</CardTextStyle>
          <div>
            <RatingStyle>★★★★★</RatingStyle>
            <CountTypeStyle>170 슈퍼호스트</CountTypeStyle>
          </div>
        </CardStyle>
      </CardSectionLayoutStyle>
    </Section4Style>
  );
};

export default Section4;
