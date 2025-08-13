const images = [
  "images/ninja-1.png",
  "images/ninja-2.png",
  "images/ninja-3.png",
];

class ImageSlider {
  constructor(images, imgElement) {
    this.images = images;
    this.currentIndex = 0;
    this.imgElement = imgElement;
  }

  showImage() {
    imageElement.src = images[this.currentIndex];
  }

  nextImage() {
    if (this.currentIndex < this.images.length - 1) {
      this.currentIndex++;
    } else {
      this.currentIndex = 0;
    }
    this.showImage();
  }
  prevImage() {
    if (this.currentIndex > 0) {
      this.currentIndex--;
    } else {
      this.currentIndex = this.images.length - 1;
    }
    this.showImage();
  }
}
const imageElement = document.getElementById("sliderImage");
const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");
const imageSlider = new ImageSlider(images, imageElement);
nextBtn.addEventListener("click", () => imageSlider.nextImage());
prevBtn.addEventListener("click", () => imageSlider.prevImage());

imageSlider.showImage();
