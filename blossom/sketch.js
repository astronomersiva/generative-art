const canvasSketch = require('canvas-sketch');
const bSpline = require('b-spline');

const pointOnCircumference = require('../utils/pointOnCircumference');

const size = window.innerWidth / 4;
const dpr = window.devicePixelRatio;

const width = size * dpr * 2;
const height = width;

const settings = {
  dimensions: [width, height]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#140016';
    context.fillRect(0, 0, width, height);

    let xc = width / 2;
    let yc = height / 2;

    let runs = 300;
    while (runs--) {
      context.beginPath();
      let purple = `rgba(204, 0, 80, ${Math.random()/2})`;
      let gold = `rgba(249, 166, 2, ${Math.random()/2})`;

      let radius = 200 + Math.random() * 200 * (Math.random() > .5 ? -1 : 1);
      let color = Math.random() > 0.5 ? purple : gold;
      if (radius > 100) {
        color = purple;
      }
      context.strokeStyle = color;

      let points = [];
      for (let theta = 0; theta <= 2 * Math.PI; theta+=Math.PI/20) {
        let pointForTheta = pointOnCircumference(xc, yc, radius, theta);
        let point = [
          pointForTheta.x + Math.random() * 20 * (Math.random() > .5 ? -1 : 1),
          pointForTheta.y + Math.random() * 20 * (Math.random() > .5 ? -1 : 1)
        ];

        points.push(point);
      }

      let degree = 2;
      let splinePoints = [];
      for (let t = 0; t < 1; t += 0.01) {
        splinePoints.push(bSpline(t, degree, points));
      }
      splinePoints.push(splinePoints[0])

      context.moveTo(splinePoints[0][0], splinePoints[0][1]);
      for (index = 0; index < splinePoints.length - 1; index++) {
        let currentPoint = splinePoints[index];
        let nextPoint = splinePoints[index + 1];

        context.moveTo(currentPoint[0], currentPoint[1]);
        context.lineTo(nextPoint[0], nextPoint[1]);
      }

      context.stroke();
      context.closePath();
    }
  };
};

canvasSketch(sketch, settings);
