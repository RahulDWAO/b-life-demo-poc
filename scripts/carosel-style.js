function getCarouselCreated() {
  const track = document.querySelector(".ban-why-choose-model > .cards-wrapper ul");
  const parentdiv = document.querySelector(".ban-why-choose-model > .cards-wrapper");

  if (!track || !parentdiv) return;

  // Create navigation buttons
  const nextButtoncreate = document.createElement("button");
  nextButtoncreate.classList.add("carousel-button", "next");
  nextButtoncreate.innerText = "›";

  const prevButtoncreate = document.createElement("button");
  prevButtoncreate.classList.add("carousel-button", "prev");
  prevButtoncreate.innerText = "‹";

  parentdiv.appendChild(prevButtoncreate);
  parentdiv.appendChild(nextButtoncreate);

  const slides = Array.from(track.children);
  let currentSlideGroup = 0;
  const slidesPerView = 2;

  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    const offset = slideWidth * slidesPerView * currentSlideGroup;
    track.style.transform = `translateX(-${offset}px)`;
  }

  nextButtoncreate.addEventListener("click", () => {
    const totalGroups = Math.ceil(slides.length / slidesPerView) - 1;
    if (currentSlideGroup < totalGroups) {
      currentSlideGroup++;
      updateSlidePosition();
    }
  });

  prevButtoncreate.addEventListener("click", () => {
    if (currentSlideGroup > 0) {
      currentSlideGroup--;
      updateSlidePosition();
    }
  });
}
