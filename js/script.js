gsap.from(".about .section1 h2", {
  y: "100%",
  opacity: 0,
  duration: 3,
  yoyo: true,
  scrollTrigger: {
    trigger: ".about .section1",
    scrub: 1,
    start: "center center",
    end: "center top",
    pin: true,
  },
});

gsap.from(".section2 .content", {
  x: "100%",
  opacity: 0,
  duration: 3,
  yoyo: true,
  scrollTrigger: {
    trigger: ".about .section2",
    scrub: 1,
    start: "center center",
    end: "center top",
    pin: true,
  },
});

gsap.to(".about", {
  background: "#FFCB00",
  duration: 5,
  yoyo: true,
  scrollTrigger: {
    trigger: ".about",
    scrub: 2,
    start: "center center",
    end: "center top",
  },
});

gsap.from(".services .section1 h2", {
  y: "100%",
  opacity: 0,
  duration: 3,
  yoyo: true,
  scrollTrigger: {
    trigger: ".services .section1",
    scrub: 1,
    start: "center center",
    end: "center top",
    pin: true,
  },
});

let tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".services .section2",
    start: "top top",
    end: "+=500%",
    scrub: 2,
    pin: true,
  },
});

tl.fromTo(
  ".services .content",
  { x: "100vw", autoAlpha: 0 },
  { x: "0vw", autoAlpha: 1, duration: 1, ease: "power1.out" }
)
  .to(".services .content", {
    x: "-83vw",
    duration: 2,
    ease: "power1.out",
    delay: 1,
  })
  .to(".services .content", {
    x: "-165vw",
    duration: 2,
    ease: "power1.out",
    delay: 2,
  });
