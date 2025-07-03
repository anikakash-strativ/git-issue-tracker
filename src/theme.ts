// Step 1: Define the interface manually
export interface Theme {
  background: string;
  text: string;
  card: string;
}

// Step 2: Type your theme objects with the interface
export const lightTheme: Theme = {
  background: '#ffffff',
  text: '#000000',
  card: '#f5f5f5',
};

export const darkTheme: Theme = {
  background: '#121212',
  text: '#ffffff',
  card: '#1e1e1e',
};

declare module 'styled-components' {
  export interface DefaultTheme extends Theme{}
}