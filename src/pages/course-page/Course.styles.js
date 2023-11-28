import styled from 'styled-components'
import { ButtonPurple } from '../../App.styles'

export const CourseTop = styled.div`
  position: relative;
  width: 100%;
  height: 310px;
  overflow: hidden;
  border-radius: 30px;
  background: rgba(205, 205, 205, 0.1);
  backdrop-filter: blur(14.51865291595459px);
`

export const CourseImg = styled.img`
  position: absolute;
  top: -140px;
  right: 90px;
  width: 360px;
  height: 480px;
  object-fit: cover;
  margin: 0;
  background: rgba(255, 254, 254, 0);
`

export const CourseTitle = styled.h1`
  position: absolute;
  color: #000;
  font-size: 64px;
  line-height: 72px;
  letter-spacing: -0.8px;
  top: 30px;
  left: 30px;
`

export const CourseAdvantages = styled.section``

export const CourseHeaders = styled.h2`
  font-size: 40px;
  line-height: 48px;
  margin-top: 75px;
`

export const ListAdvantages = styled.div`
  display: flex;
  gap: 87px;
  margin-top: 40px;
`

export const ItemAdvantages = styled.div`
  width: 335px;
  height: 128px;
  display: flex;
  gap: 24px;
`

export const ItemCircle = styled.div`
  border-radius: 1202.287px;
  background: #c7e957;
  width: 67px;
  height: 67px;
  color: #000;
  font-size: 32px;
  line-height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ItemText = styled.p`
  font-size: 24px;
  line-height: 32px;
`

export const CourseDirections = styled.section``

export const ListDirections = styled.ul`
  margin-top: 22px;
  display: flex;
  flex-direction: column;
  height: 96px;
  flex-wrap: wrap;
`

export const ItemDirections = styled.li`
  list-style-type: disc;
  list-style-position: inside;
  font-size: 24px;
  line-height: 32px;
`

export const CourseDescription = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin-top: 75px;
  margin-bottom: 75px;
`

export const Footer = styled.footer`
  border-radius: 30px;
  background: #f9ebff;
  display: flex;
  margin-bottom: 95px;
`

export const FooterLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 46px;
  margin-left: 52px;
  margin-bottom: 48px;
`

export const FooterText = styled.p`
  font-size: 32px;
  line-height: 40px;
  margin-bottom: 34px;
`

export const FooterButton = styled(ButtonPurple)`
  width: 275px;
`
export const FooterImg = styled.img``

export const ModalSuccessHeader = styled.h2`
  font-size: 40px;
  line-height: 48px;
  text-align: center;
  margin-top: 41px;
`
export const ModalSuccessPicture = styled.div`
  max-width: 200px;
  height: 254px;
  display: flex;
`
export const ModalSuccessImg = styled.img`
  width: 100%;
  height: auto;
  justify-self: flex-end;
`
