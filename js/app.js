//////////////////////////
// scroll slider stick
//////////////////////////

// const html = document.documentElement;
const html = document.getElementById("stick");
const canvas = document.getElementById("stick-canvas");
const context = canvas.getContext("2d");

const frameCount = 101;
const currentFrame = index => (
  `img/canvas/stick-jpg-2/${index.toString().padStart(4, '0')}.jpg`
)

const preloadImages = () => {
  for (let i = 1; i < frameCount; i++) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};

const img = new Image()
img.src = currentFrame(1);
canvas.width = 868;
canvas.height = 434;
img.onload = function () {
  context.drawImage(img, 0, 0);
}

const updateImage = index => {
  img.src = currentFrame(index);
  context.drawImage(img, 0, 0);
}


window.addEventListener('scroll', () => {
  const domRect = html.getBoundingClientRect();
  const scrollTop = window.innerHeight - domRect.top;
  const maxScrollTop = html.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / maxScrollTop;
  const frameIndex = Math.min(
    frameCount - 1,
    Math.ceil(scrollFraction * frameCount)
  );

  requestAnimationFrame(() => updateImage(frameIndex + 1))
});

preloadImages()

///////////////////

const htmlFilter = document.getElementById("filter");
const canvasFilter = document.getElementById("filter-canvas");
const contextFilter = canvasFilter.getContext("2d");

const frameCountFilter = 100;
const currentFrameFilter = index => (
  `img/canvas/filter-jpg/${index.toString().padStart(4, '0')}.jpg`
)

const preloadImagesFilter = () => {
  for (let i = 1; i < frameCountFilter; i++) {
    const imgFilter = new Image();
    imgFilter.src = currentFrameFilter(i);
  }
};

const imgFilter = new Image()
imgFilter.src = currentFrameFilter(1);
canvasFilter.width = 868;
canvasFilter.height = 434;
imgFilter.onload = function () {
  contextFilter.drawImage(imgFilter, 0, 0);
}

const updateImageFilter = index => {
  imgFilter.src = currentFrameFilter(index);
  contextFilter.drawImage(imgFilter, 0, 0);
}


window.addEventListener('scroll', () => {
  const domRectFilter = htmlFilter.getBoundingClientRect();
  const scrollTopFilter = window.innerHeight - domRectFilter.top;
  const maxScrollTopFilter = htmlFilter.scrollHeight - window.innerHeight;
  const scrollFractionFilter = scrollTopFilter / maxScrollTopFilter;
  const frameIndexFilter = Math.min(
    frameCountFilter - 1,
    Math.ceil(scrollFractionFilter * frameCountFilter)
  );

  requestAnimationFrame(() => updateImageFilter(frameIndexFilter + 1))
});

preloadImagesFilter()


var controller = new ScrollMagic.Controller({
  globalSceneOptions: {
    triggerHook: 'onLeave'
  }
});

$(function () { // wait for document ready
  // build scene
  var scene = new ScrollMagic.Scene({
    triggerElement: "#stick",
    duration: 3000,
    // triggerHook: 0.1
  })
    .setPin("#stick-pin")
    .addTo(controller);

    var scene = new ScrollMagic.Scene({
      triggerElement: "#filter",
      duration: 3000,
      // triggerHook: 0.1
    })
      .setPin("#filter-pin")
      .addTo(controller);


});
