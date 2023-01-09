
class Graph {
  constructor(x, y, h) {
    this.x = x;
    this.y = y;
    this.h = h;
    this.w = 40;
    this.bars = [];
  }

  createBars(perc) {
    this.bars = [];
    for (let i = 0; i <= 5; i++) {
      this.bars.push(new SpecialBar(this.x + 40 * i, this.y, perc[i] / 100 * this.h, i + 1, perc[i]));
    }
  }

  display() {
    this.displayBars();
  }

  displayBars() {
    for (const bar of this.bars) {
      bar.display();
    }
  }
}
