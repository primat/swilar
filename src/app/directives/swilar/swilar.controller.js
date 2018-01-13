class SwilarController {
  constructor() {
    this.name = 'swilar';
  }

  $onInit() {
    this.initialSlide = parseInt(this.initialSlide);
    if (!isNaN(this.initialSlide)) {
      this.initialSlide = 0;
    }

    this.spaceBetween = parseInt(this.spaceBetween);
    if (!isNaN(this.spaceBetween)) {
      this.spaceBetween = 0;
    }

    this.speed = parseInt(this.speed);
    if (!isNaN(this.speed)) {
      this.speed = 400;
    }

    this.loop = (typeof this.loop !== "undefined" && this.loop === "true");
  }

  // $onDestroy() { }
}

export default SwilarController;
