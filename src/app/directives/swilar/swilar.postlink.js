import Swiper from "swiper";

let swilarPostLink = function (scope, element, attrs, controller, transcludeFn) {

  let swiper = new Swiper(element.children(':first'), {
    speed: parseInt(controller.speed),
    spaceBetween: controller.spaceBetween,
    initialSlide: controller.initialSlide,
    effect: "slide",
    slidesPerView: 1,
    loop: true
  });

};

export default swilarPostLink;
