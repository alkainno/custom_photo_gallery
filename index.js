const gallery_item = document.getElementsByClassName("gallery-item");
console.log(gallery_item);
const pop_container = document.createElement("div");
const pop_content = document.createElement("div");
const pop_BoxImg = document.createElement("img");
const pop_BoxPrev = document.createElement("div");
const pop_BoxNext = document.createElement("div");

pop_container.classList.add("pop-container");
pop_content.classList.add("pop-content");
pop_BoxImg.classList.add("pop-box-img");
pop_BoxPrev.classList.add("fa", "fa-angle-left", "pop-box-prev");
pop_BoxNext.classList.add("fa", "fa-angle-right", "pop-box-next");

pop_container.appendChild(pop_content);
pop_content.appendChild(pop_BoxPrev);
pop_content.appendChild(pop_BoxImg);
pop_content.appendChild(pop_BoxNext);
document.body.appendChild(pop_container);
let currentIndex = 1;

function showbox(n) {
  if (n > gallery_item.length) {
    index = 1;
  } else if (n < 1) {
    index = gallery_item.length;
  }
  let img_location = gallery_item[index - 1].children[0].getAttribute("src");
  pop_BoxImg.setAttribute("src", img_location);
}
console.log(showbox(n));

function currentImage() {
  pop_container.style.display = "block";
  let img_index = parseInt(this.getAttribute("data-index"));
  showbox((index = img_index));
}
for (let i = 0; i < gallery_item.length; i++) {
  gallery_item[i].addEventListener("click", currentImage);
}
function sliderImage(n) {
  showbox((index += n));
}
function prevImage() {
  sliderImage(-1);
}
function nexImage() {
  sliderImage(1);
}
pop_BoxPrev.addEventListener("click", prevImage);
pop_BoxNext.addEventListener("click", nexImage);

function closeBox() {
  if (this === event.target) {
    pop_container.style.display = "none";
  }
}
pop_container.addEventListener("click", closeBox);
