import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }
:root {
  --color-grey: #d5d5d5; 
  --color-grey-500: #9c9c9c;
  --color-grey-100: #fafafa
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

h4 {
  margin: 0;
  padding: 0;
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
  position: fixed;
  right: 10px;
  bottom: 60px;
  flex-flow: column wrap;
  border: black 2px solid;
  border-radius: 20px;
  margin: 10px;
}

.color {
  color: white;
  display: inline-block;
            width: 80px;
            height: 70px;
            background-color: grey;
            padding: 5px;
            margin: 5px;
  border-radius: 14px;
  border: black 2px solid;
  
}

form {
  border: black 1px solid;
  border-radius: 14px;
  background-color: var(--color-grey-100);
  display: flex;
  flex-flow: column wrap;
  padding: 20px;
  padding-bottom: 20px;
  margin-top: 20px;
  gap: 10px;
  width: 400px;

input {
  padding: 12px;
  font-size: large;
}

h4 {
    padding: 0;
    margin: 0;
    padding-left: 14px;
  }

  label {
    display: none;
  }
  
  button {
    width: fit-content;
    padding: 10px;
  }
}

.comments {
  border: black 2px solid;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;  

  h3 {
    padding: 0;
    margin: 0;
    padding-left: 34px;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }

  .comment {
    border: 1px solid black;
    border-radius: 14px;
    padding: 10px;
    margin: 20px 0 20px 0;
    padding-left: 36px;
    
    p {
      margin: 0;
    }
    
    .comment__date {
      font-size: small;
      color: var(--color-grey-500);
    }
  }
  
  .comment__empty {
    padding-left: 34px;
    color: var(--color-grey-500)
  }
}

  .button__back {
    position: fixed;
    top:20px;
    right: 20px;
    height: 50px;
    width: 60px;
  }

.button__favorite-details {
    position: fixed;
    top: 80px;
    right: 20px;
    height: 50px;
    width: 60px;
}

`;
