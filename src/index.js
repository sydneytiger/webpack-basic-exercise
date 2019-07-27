import './main.css';
const { sum, multiply } = require('./math');
const appendImage = require('./image-viewer');

console.log(sum(1, 2));
console.log(multiply(3, 4));
appendImage();