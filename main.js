const home = document.getElementById("home");
const tm = document.getElementById("time");
const dt = document.getElementById("date");
const msg = document.getElementById("msg");
const days   = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]

let per = "";

const showH = () => {
    
    let now = new Date();

    let hr = now.getHours().toString();
    let mn = now.getMinutes().toString();

    let dy = days[now.getDay()];
    let mt = months[now.getMonth()];
    let nm = now.getDate();

    if(hr.length < 2) {hr  = "0" + hr};
    if(mn.length < 2) {mn  = "0" + mn};
    
    tm.innerText = hr + ":" + mn;
    dt.innerText = dy + ", " + mt + " " + nm;
}
const sayHello = () => {
    const now = new Date();
    const hr  = now.getHours().toString();
    if(parseInt(hr) > 5 && parseInt(hr) < 12) {
        msg.innerText = "🔔 Good morning " + msg.getAttribute("data-user") + " !";
        home.style.backgroundImage = "url('/images/bg/morning.jpg')";
    } else if (parseInt(hr) >= 12 && parseInt(hr) < 18){
        msg.innerText = "🔔 Good afternoon " + msg.getAttribute("data-user") + " !";
        home.style.backgroundImage = "url('/images/bg/morning.jpg')";
    } else if(parseInt(hr) >= 18 && parseInt(hr) < 21) {
        msg.innerText = "🔔 Good evening " + msg.getAttribute("data-user") + " !";
        home.style.backgroundImage = "url('/images/bg/night.jpg')";
    } else {
        msg.innerText = "🔔 Good night " + msg.getAttribute("data-user") + " !";
        home.style.backgroundImage = "url('/images/bg/night.jpg')";
    }
}

showH();
sayHello();

setInterval(() => {
    showH();
}, 1000)


setTimeout(() => {
    msg.style.height = "0px";
    setTimeout(() => {
        msg.style.display = "none";
    }, 1000)
}, 5000)

// Get Favicon From Website Link
// var getFavicon = function(link){
//     var favicon = undefined;
//     var nodeList = document.getElementsByTagName(link);
//     for (var i = 0; i < nodeList.length; i++)
//     {
//         if((nodeList[i].getAttribute("rel") == "icon")||(nodeList[i].getAttribute("rel") == "shortcut icon"))
//         {
//             favicon = nodeList[i].getAttribute("href");
//         }
//     }
//     return favicon;        
// }

// alert(getFavicon("https://www.w3schools.com"));
