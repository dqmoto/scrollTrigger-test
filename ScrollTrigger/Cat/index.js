gsap.registerPlugin(ScrollTrigger);

// var M1 = TweenMax.to('.cat', 1, {
//   repeat: -1,
//   backgroundPosition: '-726px 0',
//   ease: SteppedEase.config(5),
// });

// () => '+=' + document.querySelector('.cat').offsetWidth

let sections = gsap.utils.toArray('.panel');

let tl = new TimelineMax({
  scrollTrigger: {
    trigger: '.cat',
    start: '20px 50%',
    end: '400',
    id: 'cat',
    // markers: true,
    scrub: true,
    pin: '.cat',
    toggleActions: 'restart none reverse pause',
  },
});

tl.to('.cat', {
  backgroundPositionX: '-1598px',
  ease: SteppedEase.config(11),
})
  .to('.cat', {
    css: { borderRadius: '20', scale: 2.5 },
  })
  .to('.cat', { autoAlpha: 0, y: '-=100' })
  .to('.section-c', { background: 'dodgerblue' }, { duration: -1 });

gsap.to('.page-title', {
  scrollTrigger: {
    trigger: '.cat',
    id: 'page title',
    start: 'top center',
    scrub: true,
    // markers: true,
    toggleActions: 'restart none reverse pause',
  },
  css: { color: '#FFC222' },
});
// gsap.defaults({ ease: 'none', duration: 2 });
// gsap.to(sections, {
//   xPercent: -100 * (sections.length - 1),
//   ease: 'none',
//   scrollTrigger: {
//     trigger: '.container',
//     start: 'top top',
//     pin: true,
//     scrub: 1,
//     snap: 1 / (sections.length - 1),
//     end: () => '+=' + document.querySelector('.container').offseWidth,
//     //base vertical scroling on how wide the container is so it feels more natural.
//   },
// });

// gsap.defaults({ ease: 'none', duration: 2 });

// //create sequence that moves 3 of the panels in from different directions

gsap.defaults({ ease: 'none', duration: 2 });
// const tl2 = gsap.timeline();
// tl2

//   .from('.panel--red', { xPercent: 100 })
//   .from('.panel--green', { xPercent: -100 })
//   .from('.panel--purple', { xPercent: 100 });

// ScrollTrigger.create({
//   animation: tl2,
//   trigger: '#container',
//   start: 'top top',
//   markers: true,
//   scrub: true,
//   pin: true,
//   pinSpacing: false,
//   anticipatePin: 1,
// });

gsap.utils.toArray('.panel').forEach((panel, i) => {
  ScrollTrigger.create({
    trigger: panel,
    start: 'top "-=1000"',
    pin: true,
    pinSpacing: false,
  });
});
