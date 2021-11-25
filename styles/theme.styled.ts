
export const theme = {
  colours: {
    body: '#ffffff',
    background: '#272626'
  }
}

declare module 'styled-components' {
  export interface ThemeType {
    colours: {
      body: string,
      background: string
    }
  }
}