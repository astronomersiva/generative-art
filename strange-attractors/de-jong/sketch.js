const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.strokeStyle = 'rgba(255, 255, 255, 0.2)'
    context.fillRect(0, 0, width, height);

    let n = 200000;

    let a = -3;
    let b = -.7;
    let c = -1.2;
    let d = 2;

    // a = 2;
    // b = -7;
    // c = -1.2;
    // d = 2;

    // a = -2;
    // b = -2;
    // c = -1.2;
    // d = 2;

    // a = 1.42;
    // b = -2.28;
    // c = 2.42;
    // d = -2.17;

    context.translate(width / 2, height / 2);

    let previousPoint = { x: 1, y: 1 };
    for (let index = 1; index <= n; index++) {
      let point = {
        x: (Math.sin((a * previousPoint.y)) - Math.cos(b * previousPoint.x)),
        y: (Math.sin((c * previousPoint.x)) - Math.cos(d * previousPoint.y))
      };

      context.moveTo(point.x * 300, point.y * 300)
      context.arc(point.x * 300, point.y * 300, 1, 0, 2 * Math.PI);

      previousPoint = point;
    }

    context.stroke();

  };
};

canvasSketch(sketch, settings);
