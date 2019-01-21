const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 960*2, 1280*2 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#111';
    context.fillRect(0, 0, width, height);

    context.strokeStyle = '#fff';
    for (let index = 0; index < 2 * Math.PI; index += Math.PI/360) {
      context.arc(width/2, height/1.6, 2000, index + Math.random(), index + 3.65);
    }

    context.stroke();
  };
};

canvasSketch(sketch, settings);
