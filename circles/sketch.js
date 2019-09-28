const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2160, 3840 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    const background = '#111';
    context.fillStyle = background;
    context.fillRect(0, 0, width, height);

    const drawCircleGroup = (xc, yc) => {
      for (let i = 250; i >= 0; i -= 30) {
        context.beginPath();

        context.arc(xc, yc, i, 0, 2 * Math.PI, false);
        context.fill();

        context.lineWidth = 8;
        context.strokeStyle = '#333';
        context.stroke();
      }
    }

    let counter = 0;
    for (let y = 100; y < height + 500; y += 200) {
      for (let x = 0; x < width + 500; x += (255*2)) {
        if (counter % 2) {
          drawCircleGroup(x - 255, y);
        } else {
          drawCircleGroup(x, y);
        }
      }

      counter++;
    }
  };
};

canvasSketch(sketch, settings);
