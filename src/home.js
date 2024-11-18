import chicken from "./chicken.jpeg";

export function pageLoad() {
  const content = document.querySelector('#content');
  const heading = document.createElement('h1');
  heading.innerText = "Uncle Billy's Chicken";
  const chickenImage = new Image();
  chickenImage.src = chicken;
  const quote = document.createElement('blockquote');
  quote.innerText = `
      I have never tasted chicken this good!
      Back in Louisiana by Mom used to cook 
      chicken gumbo, but golly gee this chicken
      is tasty! Elect Billy for president NOW!
  `;
  content.appendChild(heading);
  content.appendChild(chickenImage);
  content.appendChild(quote);
}