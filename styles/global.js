import { styled, ThemeProvider } from 'styled-components';

const theme = {
  main: {
    bg: '#fff',
    theme: '#129fa8',
    heading: '#0f5b46',
    subheading: '#13a895',
    text: '#292f2d',
    footer: theme.main.text,
    footerLink: '#aaacab',
    footerText: theme.main.altSecondaryText,
    secondaryBg: '#d5ede6',
    secondaryText: '#434b49',
    tertiaryBg: '#ecf7f2',
    tertiaryText: '#555a59',
    altMainBg: 'var(mainText)',
    altMainTheme: '#15bdc8',
    altSecondaryBg: '#334240',
    altSecondaryText: '#9fcfc8'
  }
}

export { theme, ThemeProvider };
