class Bar {
    constructor (x, y, h) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = 40;
    }
    
    display () {
        rect(this.x, this.y-this.h, this.w, this.h);
    }
}
