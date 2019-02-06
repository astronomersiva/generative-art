const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 2048, 2048 ],
  animate: true,
  duration: 10,
};

const sketch = () => {
  return ({ context, width, height, playhead }) => {
    context.fillStyle = 'black';
    context.strokeStyle = 'rgba(143, 252, 255, 0.15)';
    context.fillRect(0, 0, width, height);

    let theta = 2;
    let n = playhead * 10;
    let r = 350;

    if (n < 50) {
      context.moveTo(width / 2, height / 2);

      for (let i = 0; i <= 2 * Math.PI; i += Math.PI / n / theta) {
        let x = r * Math.sin(theta * i);
        let y = r * Math.sin((theta + 1) * i);
        context.lineTo(width/2 + x, height/2 - y);
      }

      context.stroke();
    }

  };
};

canvasSketch(sketch, settings);
