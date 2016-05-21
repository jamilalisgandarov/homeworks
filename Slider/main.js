images = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg", "07.jpg", "08.jpg", "09.jpg", "10.jpg", "11.jpg", "12.jpg"];
imagesLittle = ["thumb-01.jpg", "thumb-02.jpg", "thumb-03.jpg", "thumb-04.jpg", "thumb-05.jpg", "thumb-06.jpg", "thumb-07.jpg", "thumb-08.jpg", "thumb-09.jpg", "thumb-10.jpg", "thumb-11.jpg", "thumb-12.jpg"];
for (i = 0; i < images.length; i++) {
    var child = document.createElement("div");
    child.setAttribute("class", "img");
    document.body.getElementsByClassName("imageFoot")[0].appendChild(child);
    var pics = document.createElement("img");
    pics.setAttribute("src", imagesLittle[i])
    document.body.getElementsByClassName("img")[i].appendChild(pics);
}
for (j = 0; j < images.length; j++) {
    document.getElementsByClassName("img")[i].onclick = function() { myFunc(i) };
}

function myFunc(i) {

    document.getElementsByClassName("upSide")[0] =
}
