import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const SButton = styled.button`
  font-size: 14px;
  padding: 4px 6px;
  border: none;
  background-color: ${colors.lightPink};
`
export const ButtonLink = styled(Link)`
  text-decoration: none;
  color: ${colors.whitePinkish};
`
