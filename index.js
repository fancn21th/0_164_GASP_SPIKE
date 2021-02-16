import { TweenMax } from "gsap";

TweenMax.set("#box", { xPercent: -50, yPercent: -50 });

document.addEventListener("click", (event) => {
  const { clientX: x, clientY: y } = event;
  console.log(x, ":", y);
  TweenMax.to("#box", 1, {
    x,
    y,
  });
});

// document.addEventListener("click", (event) => {
//   const { x, y } = event;
//   console.log(x, ":", y);
//   TweenMax.from("#box", 1, {
//     x,
//     y,
//   });
// });
