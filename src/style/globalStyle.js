import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  --primary: #FF577F;
  --primary-focus: #FF427F;
  --primary-negative: #59323F;

  --white: #F8F9FA;

  --gray-1: #868E96;
  --gray-2: #343B41;
  --gray-3: #212529;
  --gray-4: #121214;

  --sucess: #3FE864;
  --negative: #E83F5B;
}

body{
  background-color: var(--gray-4);
  color: var(--white);
  
  font-family: 'Inter', sans-serif;
}

.title {
  color: var(--primary);
  
  font-size: 1rem;
  font-weight: bold;
}

button {
  font-family: 'Inter', sans-serif;
}
`;

export default GlobalStyle;
