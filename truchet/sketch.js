const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 1200, 1600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    const margin = 50;

    context.fillStyle = '#fff2e5';
    context.fillRect(0, 0, width, height);

    let size = 50;
    let actualWidth = width - margin;
    let actualHeight = height - margin;

    // draw triangles
    context.fillStyle = '#01a1ff';
    let circlePoints = [];

    context.beginPath();
    for (let y = margin; y < actualHeight; y += size) {
      for (let x = margin; x < actualWidth; x += size) {
        let random = Math.floor(Math.random() * 10) % 5;

        if (random === 0) {
          context.moveTo(x, y);
          context.lineTo(x + size, y);
          context.lineTo(x, y + size);
          context.lineTo(x, y);
        } else if (random === 1) {
          context.moveTo(x + size, y);
          context.lineTo(x + size, y + size);
          context.lineTo(x, y + size);
          context.lineTo(x + size, y);
        } else if (random === 2) {
          context.moveTo(x, y);
          context.lineTo(x + size, y + size);
          context.lineTo(x, y + size);
          context.lineTo(x, y);
        } else if (random === 3) {
          context.moveTo(x + size, y);
          context.lineTo(x + size, y + size);
          context.lineTo(x, y);
        } else {
          circlePoints.push({x, y});
        }
      }
    }

    context.fill();

    context.beginPath();
    context.fillStyle = '#D36E70';
    circlePoints.forEach(point => {
      let {x, y} = point;
      let xc = x + size/2;
      let yc = y + size/2;

      context.moveTo(xc, yc);
      context.arc(xc, yc, Math.random() * 20, 0, 2 * Math.PI);
    });
    context.fill();

    // draw the grid
    // for (let x = 0; x <= actualWidth; x += size) {
    //   context.moveTo(x, 0);
    //   context.lineTo(x, actualHeight);

    //   for (let y = 0; y <= actualHeight; y += size) {
    //     context.moveTo(0, y);
    //     context.lineTo(actualWidth, y);
    //   }
    // }

    // context.stroke();

  };
};

canvasSketch(sketch, settings);
