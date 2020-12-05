class Ball {
    constructor() {
        this.x = width / 2;
        this.y = height - 50;
        this.r = 8;
        this.xSpeed = 4;
        this.ySpeed = -4;
    }
    update() {
        this.x += this.xSpeed;
        this.y += this.ySpeed;
        if (this.x > width - this.r) {
            this.xSpeed *= -1;
        } else if (this.x < this.r) {
            this.xSpeed *= -1;
        }
        if (this.y > height - this.r) {
            this.ySpeed *= -1;
        } else if (this.y < this.r) {
            this.ySpeed *= -1;
        }

        if (this.x >= board.x - board.w * 0.5 && this.x <= board.x + board.w * 0.5) {
            if (this.y >= board.y - board.h * 0.5 - 10) {
                this.ySpeed *= -1;
            }
        }

    }
    show() {
        noStroke();
        fill(255);
        ellipse(this.x, this.y, this.r * 2, this.r * 2);
    }
}