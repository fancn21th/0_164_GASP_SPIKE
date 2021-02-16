import { TweenMax, Elastic } from "gsap";

TweenMax.to(".box", 1, {
  scale: 1.25,
  repeat: -1,
  yoyo: true,
  ease: Elastic.easeInOut,
});
