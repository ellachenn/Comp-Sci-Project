class Bar {
    constructor (x, y, h, g) {
        this.x = x;
        this.y = y;
        this.h = h;
        this.w = 40;
        this.g = g;
    }
    
    display () {
        // rect(this.x, this.h-this.y, this.w, this.h);
        rect(this.x, this.y-this.h, this.w, this.h);
        textSize(20)
        text(this.g, this.x + 25, this.y + 40);
    }
}

// before: rect(this.x, this.y, this.w, this.h);
