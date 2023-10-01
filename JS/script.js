// ******SELECT ELEMEMTS******
const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const navigation = document.querySelector(".navigation");

// ******SET INITIAL VALUES******
let newPos = -100;
let clicked = false;
let counter = 0;
let slideDistance;
let interval;
let threshold = 60;

// *******EVENT LISTENERS******
// INITIATE INTERVAL
document.addEventListener("DOMContentLoaded", () => {
  interval = setInterval(animate, 4000);
});

// MOUSE EVENTS
slider.addEventListener("mousedown", dragStart);

// ******FUNCTIONS******
function moveSlide() {
  slides.style.left = `${newPos * counter}%`;
  document.getElementById("radio" + (counter + 1)).checked = true;
}

// ******CALLBACK FUNCTIONS******
function animate() {
  if (clicked) return; //stop if dragging
  counter++;
  if (counter > 3) {
    counter = 0;
    slides.style.transition = "none";
  } else {
    slides.style.transition = "0.8s";
  }
  moveSlide();
}

function dragStart(e) {
  // handling manual navigation
  if (navigation.contains(e.target)) {
    // pause interval to avoid clashes
    clearInterval(interval);

    // update counter with manual btn id
    counter = parseInt(e.target.id) - 1;

    slides.style.transition = "0.8s";
    moveSlide();
    // resume interval
    interval = setInterval(animate, 4000);

    return; // to avoid mistaking manual navigation for drag intent
  }
  e.preventDefault(); // preventing touchscreen scroll defaults

  // sliding animation
  slides.style.transition = "0.5s";
  slider.style.cursor = "grabbing";
  document.body.style.cursor = "grabbing";

  // set initialX according to event type
  if (e.type == "touchstart") {
    initialX = e.touches[0].clientX;
  } else {
    initialX = e.clientX;
  }

  clicked = true; // to know that the user wants to drag
  clearInterval(interval); // stop interval

  // continue dragging even when outside the slider
  document.onmousemove = dragging;
  document.onmouseup = dragStop;
}

gsap.from(".card-2, .card-1",  {
    opacity: 0,
    duration: 3,
    // once: true,
    stagger: true,
    scrollTrigger: {
        trigger: ".section-3 .card-2",
        scroller: "body",
        start: "top bottom",
        end: "top 30%",
    }
})




