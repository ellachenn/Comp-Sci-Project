class Bar {
    constructor (x, y, h) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = 40;
    }
    
    display () {
        // fill(random(255), random(255), random(255));
        rect(this.x, this.y-this.h, this.w, this.h);
        // fill("black")
        // textSize(20)
        // text(this.g, this.x + 25, this.y + 40);
        // text(this.p + "%", this.x + 25, this.y - this.h - 10);
    }
}
