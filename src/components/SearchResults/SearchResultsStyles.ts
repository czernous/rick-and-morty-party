import styled from "styled-components";

export const ResultsGrid = styled.div`
  display: grid;
  grid-gap: 30px;
  grid-template-columns: 1fr 1fr 1fr 1fr;
`;

export const ErrorMsg = styled.div`
  min-height: 460px;
  font-size: 2em;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled.div`
  height: 220px;
  width: 180px;
  position: relative;
  &:nth-last-child(2) {
    grid-column-start: 2;
  }
`;

export const CloseBtn = styled.button`
  background: rgba(255, 255, 255, 0.75);
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
`;

export const CardImage = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
`;
