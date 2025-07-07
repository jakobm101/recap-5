import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
:root {
  --color-grey: #d5d5d5; 
}

  body {
    max-width: 1000px;
    margin: auto;
    font-family: system-ui;
    padding-bottom: 60px;
  }
 #__next > div {
  display: flex;
   justify-content: center;
   flex-flow: column wrap;
 }

 a {
  text-decoration: none;
 }
 
 nav {
  position: fixed;
  bottom: 0;
   left: 0;
   width: 100%;
   padding: 10px;
   display: flex;
   justify-content: center;
   background-color: var(--color-grey);
   gap: 20px;
   button {
     margin: 5px;
     padding: 5px;
   }
 }

h1 {
  text-align: center;
}

main {
  display: flex;
  justify-content: center;
  flex-flow: column wrap;
align-items: center;
}

.gallery__list {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.gallery__image {
  border: black 2px solid;
  width: 400px;
}

.colors {
  display: flex;
  flex-flow: row wrap;
  border: black 2px solid;
  margin: 10px;
}

form {
  border: black 2px solid;
  display: flex;
  flex-flow: column wrap;
  margin: 10px;
  padding: 10px;
  gap: 10px;
  width: 400px;
  h3, h4 {
    text-align: center;
  }
}

.comments {
  border: black 2px solid;
padding: 10px;
margin: 10px;  
  .comment {
    border: 1px solid black;
    
  }
}
`;
