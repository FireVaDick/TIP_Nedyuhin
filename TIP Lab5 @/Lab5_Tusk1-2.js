const images = Array.from(document.images);

images.forEach((img) => {
    img.onmouseover = imgMouseoverHandler;
    img.onmouseout = imgMouseoutHandler;
    img.onclick = selectImgHandler;
});

function selectImgHandler(event) {
    document.querySelector(".images").append(event.target);
}

function imgMouseoverHandler(event) {
    event.target.width *= 1.3;
    event.target.heigth *= 1.3;
}

function imgMouseoutHandler(event) {
    event.target.width /= 1.3;
    event.target.heigth /= 1.3;
}