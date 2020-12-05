class Box {
    constructor(x, y, color) {
        this.x = x;
        this.y = y;
        this.color = color;
        this.w = BOX_WIDTH;
        this.h = BOX_HEIGHT;
        this.alive = true;
    }

    collCheck() {
        if (this.alive) {
            let num = 10;
            if (ball.x >= this.x - this.w * 0.5 && ball.x <= this.x + this.w * 0.5) {
                if (abs(round(ball.y + ball.r) - round(this.y - this.h * 0.5)) < num) { // top
                    // if (round(ball.y + ball.r) == round(this.y - this.h * 0.5)) { // top
                    this.alive = false;
                    ball.ySpeed *= -1;
                } else if (abs(round(ball.y - ball.r) - round(this.y + this.h * 0.5)) < num) { // bottom
                    // } else if (round(ball.y - ball.r) == round(this.y + this.h * 0.5)) { // bottom
                    this.alive = false;
                    ball.ySpeed *= -1;
                }
            }

            if (ball.y >= this.y - this.h * 0.5 && ball.y <= this.h + this.y * 0.5) {
                if (abs(round(ball.x + ball.r) - round(this.x - this.w * 0.5)) < num) { // left
                    // if (round(ball.x + ball.r) == round(this.x - this.w * 0.5)) { // left
                    this.alive = false;
                    ball.xSpeed *= -1;
                } else if (abs(round(ball.x - ball.r) - round(this.x + this.w * 0.5)) < num) { // right
                    // } else if (round(ball.x - ball.r) == round(this.x + this.w * 0.5)) { // right
                    this.alive = false;
                    ball.xSpeed *= -1;
                }
            }


        }
    }
    show() {
        if (this.alive) {
            noStroke();
            fill(this.color);
            rectMode(CENTER);
            rect(this.x, this.y, this.w, this.h);
        }
    }
}