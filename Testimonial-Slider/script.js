const testimonials = [
  {
    name: "Ryan Hood",
    photoUrl:
      "https://images.unsplash.com/photo-1715646528665-2fb38daf27c6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw3MHx8fGVufDB8fHx8fA%3D%3D",
    text: "AI revolutionized our workflow! Its efficiency and insights surpassed our expectations, streamlining processes and boosting productivity beyond measure. A game-changer indeed!",
  },
  {
    name: "Sarah Johnson",
    photoUrl: "https://randomuser.me/api/portraits/women/25.jpg",
    text: "Incredible AI technology! It transformed our operations, providing invaluable insights and accelerating our growth. A true innovation driving success!",
  },
  {
    name: "Michael Smith",
    photoUrl: "https://randomuser.me/api/portraits/men/15.jpg",
    text: "AI exceeded our wildest expectations! Its seamless integration into our systems brought unparalleled efficiency and optimization. A must-have for any modern business!",
  },
  {
    name: "Emily Wilson",
    photoUrl: "https://randomuser.me/api/portraits/women/45.jpg",
    text: "Using AI was a game-changer! It simplified complex tasks, empowered decision-making, and propelled us towards unprecedented achievements. Truly transformative!",
  },
];

const imgEl = document.querySelector("img");
const textEl = document.querySelector(".text");
const usernameEl = document.querySelector(".username");

let idx = 0;
updateTestimonial();
function updateTestimonial() {
  const { name, photoUrl, text } = testimonials[idx];
  imgEl.src = photoUrl;
  textEl.innerText = text;
  usernameEl.innerText = name;
  idx++;
  if (idx === testimonials.length) {
    idx = 0;
  }
  setTimeout(() => {
    updateTestimonial();
  }, 10000);
}
