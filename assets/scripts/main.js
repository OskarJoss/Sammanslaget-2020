"use_strict";

const cardWrapper = document.querySelector(".carouselContainer_cardWrapper");

const addPadding = () => {
  if (window.innerWidth > 740) {
    const padding = (window.innerWidth - 4 * 270) / 2;
    cardWrapper.style.padding = `0 ${padding}px`;
  }

  if (window.innerWidth > 740 && window.innerWidth < 1080) {
    cardWrapper.style.padding = "0";
  }
};

addPadding();

window.addEventListener("resize", addPadding);
