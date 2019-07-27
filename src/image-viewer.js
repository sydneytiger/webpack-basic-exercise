// import smallImg from '../images/small.jpeg';
const appendImage = () => {
  const mainDiv = document.querySelector('#main');

  const image = document.createElement('img');
  image.src = "http://lorempixel.com/100/100/";
  mainDiv.appendChild(image);

  // const small = document.createElement('img');
  // small.src = smallImg;
  // mainDiv.appendChild(small);
}

module.exports = appendImage;