// not very proud of this code

// need to modify this slightly to avoid
// the yellow line caused by an arc that appears in few images

const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 900*2, 1440*2 ]
};

const sketch = () => {
  return ({ context, width, height }) => {
    context.fillStyle = '#1C2833';
    context.fillRect(0, 0, width, height);

    // draw stars
    for (let i = 0; i <= 100; i++) {
      context.beginPath();

      context.fillStyle = '#ffc300';
      context.strokeStyle = "#ffc300";

      let rand_x = Math.random(i) * 900*2;
      let rand_y = Math.random(i) * 1600*2;

      context.arc(rand_x, rand_y, Math.random() * 10, 0, 2 * Math.PI);
      context.fill();
    }

    context.fillStyle = '#1C2833';

    context.globalCompositeOperation = "lighten";
    context.strokeStyle = "#ffc300";
    context.lineWidth = 1;

    // prepare points and the yellow spokes
    let points = [];
    for (let index = 400; index < 2000; index+=10) {
      let randomX = 100 + Math.random() * 100;
      let randomY = 100 + Math.random() * 100;
      let radius = 1200 + Math.random() * 250;
      let start = index + Math.random();
      let end = index / 2;

      context.scale(1, -1.00015);
      context.arc(randomX, randomY, radius, -start, -end);
      points.push({
        randomX,
        randomY,
        radius,
        start,
        end
      });
    }

    // draw yellow spokes
    context.stroke();

    // draw reddish circles near the spokes
    for (let index = 0; index < points.length; index+=1) {
      context.beginPath();
      context.scale(1, 0.9995);
      let colors = ["#fff", "#E74C3C", "#ff5733", "#c70039", "#571845"];
      context.strokeStyle = colors[index%5];

      context.lineWidth = 2;
      let point = points[index];

      context.moveTo(point.randomX + point.radius + 200, point.randomX);
      context.arc(point.randomX, point.randomY, point.radius + 200, 0, 2 * Math.PI + Math.random());

      context.stroke();
    }

    context.moveTo(1600, 2600);
    context.stroke();

    context.strokeStyle = "#1C2833";
    context.moveTo(1200, 2500);
    context.stroke();

    context.strokeStyle = "#ffc300";

    // draw the smaller blueish circle
    for (let index = 200; index < 300; index++) {
      context.beginPath();
      context.scale(0.9998, 0.9998);
      let colors = ["#fff", "#00f9ff", "#8ffcff", "#00b2b2", "#01ffff"];
      context.strokeStyle = colors[index%5];
      context.arc(1200, 2500, Math.random()*300, index, index * Math.random()/1.3);
      context.stroke();
    }
  };
};

canvasSketch(sketch, settings);
