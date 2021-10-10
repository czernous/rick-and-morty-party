import styled from "styled-components";

export const Wrapper = styled.div`
  margin: 100px 0 142px;
`;

export const Results = styled.div`
  display: flex;
  gap: 30px;
`;

export const Heading = styled.h1`
  font-size: 30px;
  font-weight: 700;
  text-align: center;
`;

export const Card = styled.div`
  width: 180px;
  height: 220px;
  background: #dadada;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CardText = styled.span`
  color: #fff;
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 28px;
`;
