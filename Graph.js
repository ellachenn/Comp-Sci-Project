class Graph {
  constructor(x, y, h, g, point) {
    super(x, y, h, g);
    this.w = 40;
    this.point = point;
    this.bars = [];
  }

  createBars(perc) {
    for (i = 0; i <= 5; i++) {
    //   this.bars.push(new Bar(100 + 40 * i, 450, perc[i] * 4, i + 1, perc[i]));
    }
  }

  display() {
    // super.display();
    // text(this.point + "%", this.x + 25, this.y - this.h - 10)
  }
}
