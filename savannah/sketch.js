const canvasSketch = require('canvas-sketch');

const size = window.innerWidth / 4;
const dpr = window.devicePixelRatio;

const width = size * dpr;
const height = (width / 3) * 4;

const settings = {
  dimensions: [width, height]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#d2c3cf';
    context.fillRect(0, 0, width, height);

    context.beginPath();

    context.fillStyle = '#fed270';
    context.strokeStyle = 'rgba(0,0,0,0)';

    context.arc(width / 2, height / 2.8, 110, 0, 2 * Math.PI);
    context.fill();
    context.closePath();

    context.strokeStyle = '#222222';

    function draw({ startX, startY, len, angle, thickness, isSmall }) {
      context.beginPath();

      context.save();
      context.lineWidth = thickness;

      context.translate(startX, startY);
      context.rotate(angle * Math.PI / 180 * Math.random() * 2);

      context.moveTo(0, 0);
      context.lineTo(0, -len);
      context.stroke();
      
      if (len < 26) {
        if (isSmall) {
          if (len < 20) {
            context.restore();
            return;
          }
        } else {
          context.restore();
          return;
        }
      }

      draw({
        startX: 0,
        startY: -len,
        len: len * 0.8,
        angle: -15 - (Math.random() * 3),
        thickness: thickness * 0.8,
        isSmall: isSmall
      });

      draw({
        startX: 0,
        startY: -len,
        len: len * 0.8,
        angle: 15 - (Math.random() * 3),
        thickness: thickness * 0.8,
        isSmall: isSmall
      });

      if (Math.random() < 0.5) {
        draw({
          startX: 0,
          startY: -len,
          len: len * 0.8,
          angle: 15 - (Math.random() * 3),
          thickness: thickness * 0.8,
          isSmall: isSmall
        });
      }
      
      context.restore();
    }

    draw({
      startX: width / 2,
      startY: height,
      len: 100,
      angle: Math.random() * 10,
      thickness: 5
    });

    draw({
      startX: width / 1.4,
      startY: height,
      len: 50,
      angle: Math.random() * 10,
      thickness: 2,
      isSmall: true
    });
  };
};

canvasSketch(sketch, settings);
