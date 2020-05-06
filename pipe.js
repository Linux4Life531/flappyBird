function Pipe() {
    this.top = random(80, height/2 - 40);
    this.bottom = random(80, height/2 - 40);
    this.x = width;
    this.w = 20;
    this.speed = 6;
    
    this.white = 255;
    
    this.highlight = false;
    
    this.hits = function(bird) {
      if (bird.y < this.top || bird.y > height - this.bottom) {
        if (bird.x > this.x && bird.x < this.x + this.w) {
          this.highlight = true;
          return true;
        }
        this.highlight = false;
      } return false;
    }
    
    this.draw = function() {
        fill(this.white);
        if (this.highlight) {
            fill(255, 0, 0);
        }
        rect(this.x, 0, this.w, this.top, 10);
        rect(this.x, height-this.bottom, this.w, this.bottom, 10);
    }
        
    this.update = function() {
            this.x -= this.speed;
    }
        
    this.offscreen = function() {
        if (this.x < -this.w) {
            return true;
        } else {
            return false;
        }
    }
}
