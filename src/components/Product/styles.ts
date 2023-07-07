import styled from 'styled-components'
import { colors } from '../../styles'
import { ButtonLink, SButton } from '../Button/styles'

export const Card = styled.div`
  width: 320px;
  height: 338px;
  color: ${colors.white};
  background-color: ${colors.lightPink};

  ${SButton} {
    max-width: 100%;
    width: 95%;
    margin: 0 0 8px 8px;
    background-color: ${colors.whitePinkish};
    color: ${colors.lightPink};

    ${ButtonLink} {
      color: ${colors.lightPink};
    }
  }
`
export const Img = styled.img`
  margin: 8px;
`

export const Title = styled.h2`
  font-size: 16px;
  font-weight: bold;
  margin-left: 8px;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 22px;
  margin: 0 8px 8px 8px;
`
