import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import BookingForm from './components/BookingForm';
const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html {
  font-size: 10px;
}
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 1.6rem;
  color: var(--dark-color);
}
a {
  text-decoration: none;
  color: inherit;
}
ul {
  list-style: none;
}
`;
function App() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <main>
        <Hero />
        <BookingForm />
      </main>
    </>
  );
}

export default App;
