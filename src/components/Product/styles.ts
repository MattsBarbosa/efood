import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  color: ${colors.white};
  background-color: ${colors.lightPink};

  ${ButtonLink} {
    width: 304px;
    margin: 16px 0 8px 8px;
  }
`
export const Img = styled.img`
  width: 304px;
  margin: 8px;
  height: 167px;
  object-fit: cover;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 8px;
`

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`
// Modal style ------------------------------------

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  position: relative;
  z-index: 1;
  background-color: ${colors.lightPink};
  width: 1024px;
  height: 344px;
  display: flex;
  color: ${colors.white};
  font-size: 14px;

  span {
    position: absolute;
    top: 8px;
    right: 8px;
    font-size: 16px;
    cursor: pointer;
  }

  img {
    height: 280px;
    width: 280px;
    object-fit: cover;
    margin: 32px 24px 32px 32px;
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
    margin: 32px 0 16px 0;
  }

  p {
    margin-bottom: 16px;
    margin-right: 32px;
  }

  button {
    background-color: ${colors.white};
    color: ${colors.lightPink};
    padding: 4px 8px;
    margin-bottom: 60px;
    font-size: 14px;
    font-weight: bold;
    border: none;
    cursor: pointer;
  }
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
