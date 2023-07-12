import styled from 'styled-components'
import { colors } from '../../styles'
import { Link } from 'react-router-dom'

export const ButtonLink = styled(Link)`
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: bold;
  padding: 4px 0;
  border: none;
  width: 100%;
  text-decoration: none;
  background-color: ${colors.whitePinkish};
  color: ${colors.lightPink};
`
