class BetterGraph extends Graph {
    constructor (x, y, h, g, point) {
        super(x, y, h, g);
        this.w = 40;
        this.point = point;
    }
    display () {
        super.display();
        text(this.point, this.x + 25, this.y - 20)
    }
}