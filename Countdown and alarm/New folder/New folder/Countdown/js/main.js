// var counter = setInterval(function() { saat() }, 1000);

// function saat() {
//     var data = new Date();
//     document.open();
//     document.write("Saat:" + " " + data.getHours() + ":" + data.getMinutes() + ":" + data.getSeconds());
//     document.close();
// }


// function div(deyer) {
//     value = deyer;
//     document.open();
//     if (value === true) {
//         reng = "orange";
//         document.write("<div class='main' style='height:100%;width100%;background:" + reng + "'><button onclick='div(false)'>CLICK HERE</button></div>");
//     } else {
//         reng = "black";
//         document.write("<div class='main' style='height:100%;width100%;background:" + reng + "'><button onclick='div(true)'>CLICK HERE</button></div>");
//     }

//     document.close();
// }



n = 0;

function pic(value) {
    source = ["https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png", "https://www.wired.com/wp-content/uploads/2014/06/breaking-bad-660x371.jpg", "http://www.unspoiledpodcast.com/wp-content/uploads/2014/09/Breaking-Bad.jpg", "https://upload.wikimedia.org/wikipedia/en/6/61/Breaking_Bad_title_card.png", "https://www.wired.com/wp-content/uploads/2014/06/breaking-bad-660x371.jpg"]
    if (value === true) {
        if (n == pic.length) {
            n = 0;
            n++;
            document.open();
            document.write("<div class='image' style=''><div class='childimage' style='width: 600px;height: 500px'><img src='" + source[n] + "' style='width:100%;height:100%'></div><button onclick='pic(true)'>Left</button><button onclick='pic(false)'>Right</button></div>");
            document.close();
        } else {
            n++;
            document.open();
            document.write("<div class='image'><div class='childimage' style='width: 600px;height: 500px'><img src='" + source[n] + "' style='width:100%;height:100%'></div><button onclick='pic(true)'>Left</button><button onclick='pic(false)'>Right</button></div>");
            document.close();
        }
    } else {
        if (n == 0) {
            n = source.length;
            n--;
            document.open();
            document.write("<div class='image'><div class='childimage' style='width: 600px;height: 500px'><img src='" + source[n] + "' style='width:100%;height:100%'></div><button onclick='pic(true)'>Left</button><button onclick='pic(false)'>Right</button></div>");
            document.close();
        } else {
            n--;
            document.open();
            document.write("<div class='image'><div class='childimage' style='width: 600px;height: 500px'><img src='" + source[n] + "' style='width:100%;height:100%'></div><button onclick='pic(true)'>Left</button><button onclick='pic(false)'>Right</button></div>");
            document.close();
        }

    }
}
