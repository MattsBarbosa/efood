import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink } from '../Button/styles'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`
export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const SideBar = styled.aside`
  z-index: 1;
  width: 360px;
  background-color: ${colors.lightPink};

  ${ButtonLink} {
    width: 344px;
    margin: 16px 8px 0px 8px;
  }
`

export const List = styled.ul`
  margin: 36px 8px 40px 8px;
`

export const ListItem = styled.li`
  position: relative;
  display: flex;
  margin-top: 16px;
  padding: 8px 8px 12px 8px;
  color: ${colors.lightPink};
  background-color: ${colors.whitePinkish};

  div {
    margin-left: 8px;
  }

  p {
    margin-top: 16px;
  }
`
export const Img = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
`

export const Delete = styled.img`
  position: absolute;
  bottom: 8px;
  right: 8px;
  width: 16px;
  height: 16px;
  cursor: pointer;
`
export const TotalPrice = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 8px;
  color: ${colors.whitePinkish};
`
