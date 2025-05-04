document.addEventListener("DOMContentLoaded", () => {
  const observer = new MutationObserver((mutations, obs) => {
    const targetEl = document.querySelector(".ban-why-choose-model > .cards-wrapper ul");

    if (targetEl) {
      getCarouselCreated();    
      obs.disconnect();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true
  });
});

function getCarouselCreated() {
  const track = document.querySelector(".ban-why-choose-model > .cards-wrapper ul");
  const parentdiv = document.querySelector(".ban-why-choose-model > .cards-wrapper");

  if (!track || !parentdiv) return;

  // Create buttons
  const nextButtoncreate = document.createElement("button");
  nextButtoncreate.classList.add("carousel-button", "next");
  nextButtoncreate.innerText = "›";

  const prevButtoncreate = document.createElement("button");
  prevButtoncreate.classList.add("carousel-button", "prev");
  prevButtoncreate.innerText = "‹";

  parentdiv.appendChild(prevButtoncreate);
  parentdiv.appendChild(nextButtoncreate);

  const slides = Array.from(track.children);
  let currentIndex = 0;
  const slidesPerView = 2;
  const maxIndex = Math.ceil(slides.length / slidesPerView) - 1;

  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const offset = slideWidth * slidesPerView * currentIndex;
    track.style.transform = `translateX(-${offset}px)`;
  }

  nextButtoncreate.addEventListener("click", () => {
    if (currentIndex < maxIndex) {
      currentIndex++;
      updateSlidePosition();
    }
  });

  prevButtoncreate.addEventListener("click", () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlidePosition();
    }
  });
}
