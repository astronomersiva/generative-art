module.exports = function(xc, yc, r, theta) {
  return {
    x: xc + r * Math.cos(theta),
    y: yc + r * Math.sin(theta)
  };
}
