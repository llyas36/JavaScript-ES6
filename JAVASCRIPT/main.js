// local reviews data
const reviews = [
  {
    id: 1,
    name: "anna johnson",
    job: "web designer",
    img: "/home/llyas/Documents/learn-git/JAVASCRIPT/anna.png",
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 2,
    name: "susan smith",
    job: "web developer",
    img: "/home/llyas/Documents/learn-git/JAVASCRIPT/susan.jpeg",
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },

  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img: "/home/llyas/Documents/learn-git/JAVASCRIPT/peter.png",
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img: "/home/llyas/Documents/learn-git/JAVASCRIPT/bill.png",
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];

let currentItem = 0;

const image = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");

const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");

addEventListener("DOMContentLoaded", function () {
  const item = reviews[currentItem];
  image.src = item.img;
  author.innerHTML = item.name;
  job.innerHTML = item.job;
  info.innerHTML = item.text;
});

const handleChange = (index) => {
  item = reviews[index];
  image.src = item.img;
  author.innerHTML = item.name;
  job.innerHTML = item.job;
  info.innerHTML = item.text;
};

prevBtn.addEventListener("click", () => {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  handleChange(currentItem);
});

nextBtn.addEventListener("click", () => {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  handleChange(currentItem);
});
