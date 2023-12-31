import { styled } from 'styled-components'

export const Card = styled.li`
  width: 360px;
  height: 480px;
  border-radius: 30px;
  background: #fff;
  box-shadow:
    -10px 10px 15.99882px 0px rgba(0, 0, 0, 0.1),
    10px -10px 16px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  position: relative;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.02);
  }
`
export const CardImg = styled.img``
export const CardLink = styled.div`
  width: 100%;
  height: 100%;
  padding: 30px;
  color: #000;
  font-size: 36px;
  font-weight: 800;
  line-height: 110%;
  letter-spacing: -0.5px;
  position: absolute;
  z-index: 2;
  top: 0;
`
export const RedirectButton = styled.span`
  border-radius: 80px;
  background: #c7e957;
  color: #000;
  font-size: 20px;
  padding: 10px 17px;
  position: absolute;
  left: 30px;
  bottom: 27px;
  cursor: pointer;
  &:hover {
    background: #daf289;
  }
  & active {
    background: #ebffab;
  }
  z-index: 3;
`
