
export const theme = {
  colours: {
    body: '#ffffff',
    bodyFaint: '#adadad',
    background: '#272626'
  },
}

declare module 'styled-components' {
  export interface ThemeType {
    colours: {
      body: string,
      background: string
    }
  }
}
