







const RtoolKitTabs = document.querySelectorAll(".r-toolKit-tab");
const RtoolKitItems = document.querySelectorAll(".r-toolKit-item");

if (RtoolKitTabs.length && RtoolKitItems.length) {

  const RactivateToolKit = (id) => {
    
    RtoolKitTabs.forEach(tab => {
      tab.classList.toggle("active", tab.dataset.id === id);
    });

    RtoolKitItems.forEach(item => {
      item.classList.toggle("active", item.dataset.id === id);
    });
  };

  RtoolKitTabs.forEach(tab => {
    tab.addEventListener("click", () => {
      RactivateToolKit(tab.dataset.id);
    });
  });

  RactivateToolKit("1");
}




document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".animate-item");
  if (!items.length) return;

  const observer = new IntersectionObserver(
    (entries) =>
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const index = [...items].indexOf(entry.target);
        entry.target.style.transitionDelay = `${0.15}s`;
        entry.target.classList.add("visible");

        observer.unobserve(entry.target);
      }),
    { threshold: 0.1 }
  );

  items.forEach((item) => observer.observe(item));
});



document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  const fadeAnimations = [
    { selector: ".fade-left", from: { x: -40 } },
    { selector: ".fade-right", from: { x: 40 } },
    { selector: ".fade-top", from: { y: -40 } },
    { selector: ".fade-bottom", from: { y: 40 } },
  ];

  fadeAnimations.forEach(({ selector, from }) => {
    gsap.utils.toArray(selector).forEach((el) => {
      gsap.fromTo(
        el,
        { ...from, opacity: 0, visibility: "visible" },
        {
          x: 0,
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            end: "bottom 10%",
            once: true,
          },
        }
      );
    });
  });
});