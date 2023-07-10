import styled from 'styled-components'
import { colors } from '../../styles'

export const Herobg = styled.div`
  position: relative;
  height: 318px;
  display: block;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &::after {
    position: absolute;
    background-color: #000;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    content: '';
    opacity: 0.5;
  }

  .container {
    z-index: 1;
    position: relative;
    height: 100%;
    font-size: 32px;
    color: ${colors.white};
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    p {
      font-weight: 100;
      padding-top: 24px;
    }

    h2 {
      font-weight: bold;
      padding-bottom: 32px;
    }
  }
`
