const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 4096, 4096 ]
};

let x = 1;
let y = 0;
let z = 0; 
let a = 10;
let b = 28;
let c = 2.667;
let t = 0.02;

let xt = x + t * a * (y - x);
let yt = y + t * (x * (b - z) - y);
let zt = z + t * (x * y - c * z);

let n = 75000;

const sketch = () => {
  return ({ context, width, height, playhead }) => {
    context.fillStyle = 'black';
    context.strokeStyle = 'rgba(255, 255, 255, 0.3)';
    context.fillRect(0, 0, width, height);

    context.translate(width/2, height/2);

    for (let i = 0; i < n; i++) {
      x = xt;
      y = yt;
      z = zt;

      context.moveTo(x * 50, y * 50);
      context.arc(x * 50, y * 50, 1, 0, 2 * Math.PI);

      xt = x + t * a * (y - x);
      yt = y + t * (x * (b - z) - y);
      zt = z + t * (x * y - c * z);
    }

    context.stroke();

    n *= 1.5;
  };
};

canvasSketch(sketch, settings);
