class SpecialBar extends Bar {
    constructor (x, y, h, g, p) {
        super(x, y, h)
        this.g = g;
        this.p = p;
        // g = grade, p = percent
    }

    display() {
        fill(random(255), random(255), random(255));
        super.display();
        fill("black");
        textSize(20);
        text(this.g, this.x + 25, this.y + 40);
        text(this.p + "%", this.x + 25, this.y - this.h - 10);
    }
}