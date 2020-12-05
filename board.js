class Board {
    constructor() {
        this.x = width / 2;
        this.y = height - 20;
        this.w = 200;
        this.h = 15;
    }
    update() {
        this.x = mouseX;
        if (this.x > width - this.w * 0.5) {
            this.x = width - this.w * 0.5;
        } else if (this.x < this.w * 0.5) {
            this.x = this.w * 0.5;
        }
    }
    show() {
        noStroke();
        fill(255);
        rectMode(CENTER);
        rect(this.x, this.y, this.w, this.h);
    }
}