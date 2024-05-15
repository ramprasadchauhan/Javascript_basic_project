const containerEl = document.querySelector(".container");

const careers = ["Youtuber", "Web Developer", "App Developer", "Freelancer"];

let careerIndex = 0;

let charecterIndex = 0;

updateText();

function updateText() {
  charecterIndex++;
  containerEl.innerHTML = `
 <h1>I am a ${careers[careerIndex].slice(0, charecterIndex)} </h1>
`;
  if (charecterIndex === careers[careerIndex].length) {
    careerIndex++;
    charecterIndex = 0;
  }
  if (careerIndex === careers.length) {
    careerIndex = 0;
  }
  setTimeout(updateText, 300);
}
