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
    letter-spacing: 0.03rem;
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
   z-index: 11;
   backdrop-filter: blur(5px);
  position: fixed;
  bottom: 0;
   left: 0;
   width: 100%;
   padding: 20px;
   display: flex;
   justify-content: center;
   gap: 20px;
 }

h1 {
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
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
  gap: 20px;
}

.gallery__image {
  position: relative;
  border: black 2px solid;
  border-radius: 10px;
  overflow: hidden;
  width: 300px;
  height: 300px;
  cursor: pointer;
  gap: 20px;
  &:hover{
    box-shadow: 0 2px 0 black ;
  }
  img {
    object-fit: cover; //█
    width: 100%;
    height: auto;
    min-height: 100%;
    aspect-ratio: initial;
    z-index: 1;

 }
  .button-favorite {
    position: absolute;
    z-index: 5;
    top: 10px;
    right: 10px;
  }
}

.Gallery__Image--textbox {
  width: 100%;
  height: 80px;
  position: absolute;
  padding: 12px;
  bottom: 0;
  left: 0;
  background-color: rgba(255,255,255,1);
  backdrop-filter: blur(2px);
p {
  margin: 0;
  &:first-child{
    font-weight: bold;
  }
}
}

.Gallery__Image--buttons {
  display: none;
  flex-flow: column wrap;
  position: absolute;
  gap: 10px;
  right: 10px;
  bottom: 10px;
}

.colors {
  display: flex;
  position: fixed;
  right: 10px;
  bottom: 80px;
  flex-flow: column wrap;
  border: black 2px solid;
  border-radius: 20px;
  margin: 10px;
}

.color {
  color: white;
  display: inline-block;
            width: 80px;
            max-width: 10vw;
            height: 70px;
            background-color: grey;
            padding: 5px;
            margin: 5px;
  border-radius: 14px;
  border: black 2px solid;
  overflow: hidden;

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
  max-width: 60vw;

input {
  padding: 12px;
  font-size: large;
  max-width: 50vw;
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
    padding: 20px;
  }
}

.comments {
  border: black 2px solid;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  margin-right: 80px;
  max-width: 70vw;

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
    width: 100px;
  }

.button__favorite-details {
    position: fixed;
    top: 80px;
    right: 20px;
}

.button-favorite {
  border-radius: 100px;
  background-color: black;
  padding: 4px;
  padding-top: 5px;
  width: 40px;
  height: 40px;
}

.favorites__none {
  text-align: center;
  a {
    border: black 1px solid;
    padding: 10px;
    margin: 20px;
    border-radius: 5px;
    display: inline-block;
    &:hover {
      box-shadow: 0 2px 0 black;
    }
  }
}

button {
  padding: 10px;
  background-color: white;
  border-radius: 5px;
  font-size: large;
  font-weight: bold;
  letter-spacing: 0.4px;
  cursor: pointer;

  a {
    display: block;
    color: black;
  }

  &:disabled a {
    color: var(--color-grey-500);
    cursor: not-allowed;
  }

  &:hover {
    box-shadow: 0 2px 0 black;
    &:disabled {
      box-shadow: none;
      cursor: not-allowed;
      a:visited {
        cursor: not-allowed;
      }
    }
  }
}

.spotlight{
  position: relative;
  border: black 2px solid;
  border-radius: 20px;
  overflow: hidden;
  height: 80vh;
  &:hover{
    cursor: pointer;
    box-shadow: 0 4px 0 black;
  }
  img {
    width: 100%;
    height: auto;
    min-height: 100%;
    object-fit: cover; //█
  }
  button, svg{
    z-index: 3;
    position: absolute;
    top: 10px;
    right: 10px;
  }

}

.art-piece {
  .image-cage{
    border: black 2px solid;
    border-radius: 20px;
    overflow: hidden;
    width: 100%;
    
    max-width: 90vw;
    max-height: 80vh;

  }
    img {
    width: 100%;
    max-width: 90vw;
    height: auto;
    max-height: 80vh; //█
    object-fit: cover; //█
  }
}


`;
