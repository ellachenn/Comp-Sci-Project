class Graph {
    constructor (x, y, h, g) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = 40;
        this.g = g;
    }
    
    display () {
        rect(this.x, this.y, this.w, this.h);
        textSize(20)
        text(this.g, this.x + 25, this.y + this.h + 40);
    }
}
