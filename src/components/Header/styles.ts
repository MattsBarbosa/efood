import styled from 'styled-components'
import { colors } from '../../styles'

export const BackgroundImg = styled.div`
  width: 100%;
  height: 384px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
`

export const Logo = styled.img`
  margin-top: 64px;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  text-align: center;
  line-height: 42px;
  color: ${colors.lightPink};
  margin: 0 414px 40px 414px;
`

//Header da página Profile

export const BackgroundImgPro = styled.div`
  height: 164px;
  background-size: cover;
  background-repeat: no-repeat;
  font-size: 18px;
  font-weight: bold;
  color: ${colors.lightPink};
`

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 40px;
  align-items: center;
`
export const BackgroundProductImg = styled.div`
  height: 318px;
  background-size: cover;
  background-repeat: no-repeat;
`
