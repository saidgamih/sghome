const home = document.getElementById("home");
const tm = document.getElementById("time");
const dt = document.getElementById("date");
const hello = document.getElementById("hello");
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
    console.log(hr);
    if(parseInt(hr) > 5 && parseInt(hr) < 12) {
        hello.innerText = "🔔 Good morning " + hello.getAttribute("data-user") + " !";
        home.style.backgroundImage = "/images/bg/morning.jpg";
    } else if (parseInt(hr) >= 12 && parseInt(hr) < 18){
        hello.innerText = "🔔 Good afternoon " + hello.getAttribute("data-user") + " !";
        home.style.backgroundImage = "url('/images/bg/morning.jpg')";
    } else if(parseInt(hr) >= 18 && parseInt(hr) < 9) {
        hello.innerText = "🔔 Good evening " + hello.getAttribute("data-user") + " !";
        home.style.backgroundImage = "url(/images/bg/night.jpg)";
    } else {
        hello.innerText = "🔔 Good night " + hello.getAttribute("data-user") + " !";
        home.style.backgroundImage = "/images/bg/night.jpg";
    }
}

showH();
sayHello();

setInterval(() => {
    showH();
}, 1000)


setTimeout(() => {
   hello.innerText = "";
}, 30000)

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
