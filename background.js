const images =["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const frontImage = images[Math.floor(Math.random()*images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${frontImage}`;

document.body.appendChild(bgImage);
