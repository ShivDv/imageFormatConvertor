const image = document.getElementById('upload');
const cnvrt = document.getElementById('cnvrt');
const result = document.getElementById('result');
// console.log(choice);



// UPLOAD THE IMAGE FILE 
var loadFile = function (event) {
    var image = document.getElementById('upload');
    image.src = URL.createObjectURL(event.target.files[0]);
};




// CONVERT IMAGE TO CANVAS
function ImageToCanvas(image) {
    var canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    canvas.getContext("2d").drawImage(image, 0, 0);
    return canvas;
}



// LISTENER FOR CONVERT BUTTON
cnvrt.addEventListener("click", function () {
    var canvas = ImageToCanvas(image);

    choice = document.getElementById('format').selectedIndex;
    var dataURI = canvas.toDataURL("image/png");

    // CONVERT CANVAS TO SELECTED IMAGE TYPE
    switch (choice) {
        case 1: dataURI = canvas.toDataURL("image/jpg"); break;
        case 2: dataURI = canvas.toDataURL("image/jpeg"); break;
        case 3: dataURI = canvas.toDataURL("image/gif"); break;
        case 4: dataURI = canvas.toDataURL("image/bmp"); break;
        case 5: dataURI = canvas.toDataURL("image/tiff"); break;
    }
    result.src = dataURI;

    // console.log(choice);
});


// DOWNLOAD BUTTON LISTENER
function downloadImage() {
    var a = document.createElement("a");
    a.href = result.src;
    switch (choice) {
        case 0:
        a.download = "formatted-image.png"; break;
        case 1:
        a.download = "formatted-image.jpg"; break;
        case 2:
        a.download = "formatted-image.jpeg"; break;
        case 3:
        a.download = "formatted-image.gif"; break;
        case 4:
        a.download = "formatted-image.bmp"; break;
        case 5:
        a.download = "formatted-image.tiff"; break;
    }
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
}