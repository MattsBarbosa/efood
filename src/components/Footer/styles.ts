import styled from 'styled-components'
import { colors } from '../../styles'

export const SFooter = styled.footer`
  background-color: ${colors.whitePinkish};
  color: ${colors.lightPink};
  height: 298px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  p {
    margin-bottom: 40px;
  }
`

export const Logo = styled.img`
  margin-top: 40px;
  width: 128px;
  height: 58px;
`

export const Links = styled.ul`
  display: flex;
  margin-top: 32px;
  margin-bottom: 80px;

  li {
    margin-right: 8px;
  }
`
