const info = [
  {
    title: "Discover innovative ways to decorate",
    quote:
      "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  },
  {
    title: "We are available all across the globe ",
    quote:
      "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  },
  {
    title: " Manufactured with the best materials ",
    quote:
      "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office",
  },
];

let leftButton = document.querySelector(".left-direct");
let rightButton = document.querySelector(".right-direct");
let head = document.querySelector(".head");
let qoute = document.querySelector(".qoute");

let i = 0;
let j = info.length;
rightButton.addEventListener("click", () => {
  document.querySelector(".content" + (i + 1)).classList.remove("dis");

  i = (j + i + 1) % j;

  head.innerHTML = info[i].title;
  qoute.innerHTML = info[i].quote;
  document.querySelector(".content" + (i + 1)).classList.add("dis");
});
leftButton.addEventListener("click", () => {
  document.querySelector(".content" + (i + 1)).classList.remove("dis");

  i = (j + i - 1) % j;

  head.innerHTML = info[i].title;
  qoute.innerHTML = info[i].quote;
  document.querySelector(".content" + (i + 1)).classList.add("dis");
});

let ham = document.querySelector('#ham')
let close = document.querySelector('#close')
let nav = document.querySelector('.display')
let body = document.querySelector('main')

ham.addEventListener('click', ()=> {
  nav.style.top = '0'

  ham.style.display = 'none'
  
})
close.addEventListener('click', ()=> {
  nav.style.top = '-12vh'
  ham.style.display = 'block'

})
