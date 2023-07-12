import { createGlobalStyle } from 'styled-components'

export const colors = {
  white: '#ffffff',
  whitePinkish: '#FFEBD9',
  lightPink: '#E66767',
  background: '#fff8f2'
}

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${colors.background};
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    }
`
