const canvasSketch = require('canvas-sketch');

const size = window.innerWidth / 4;
const dpr = window.devicePixelRatio;

const width = size * dpr;
const height = (width / 9) * 16;

const settings = {
  dimensions: [width, height]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = 'black';
    context.fillRect(0, 0, width, height);

    let cx = width / 2;
    let cy = height / 1.5;
    let colors= [
      '#020611',
      '#343b57',
      '#494cd1',
      '#ab20fd',
      '#7d12ff'
    ];

    for (let i = 0; i <= 6000; i++) {
      context.beginPath();

      let angle = i * 4.424;
      let x = cx + Math.cos(angle) * i * Math.PI/75;
      let y = cy + Math.sin(angle) * i * Math.PI/75;

      context.arc(x, y, i * Math.random() / 1000, 0, 360, false);

      context.fillStyle = colors[i % 5]
      context.fill();
    }

    // secondary circle at the top right
    cx = width / 1.4;
    cy = height / 4;
    colors = [
      '#ff31f7',
      '#ba37f6',
      '#9239f6',
      '#903495',
      '#6f3460'
    ]
    for (let i = 0; i <= 2500; i++) {
      context.beginPath();
      let angle = i * 1.61;
      let x = cx + Math.cos(angle) * i * Math.PI/75;
      let y = cy + Math.sin(angle) * i * Math.PI/75;
      context.arc(x, y, i * Math.random() / 1000, 0, 360, false);

      context.fillStyle = colors[i % 5]
      context.fill();
    }

  };
};

canvasSketch(sketch, settings);
