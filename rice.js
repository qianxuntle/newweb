var randomname = document.querySelector("#yuanpanyangshi2");
var name1 = ["豆花饭", "套餐饭", "卤肉饭", "炒饭", "称菜"];
var names = [];
var run = false;
function init() {
    for (var i = 0; i < name1.length; i++) {
        names.push(name1[Math.random() * name1.length | 0]);
    }
}
init();
for (var i in names) {
    let span = document.createElement("span");
    span.innerText = names[i];
    randomname.appendChild(span);
}
var spans = randomname.children;
var deg = 0;
var slow = 0;
function spinWheel() {
    run =! run;
}
function draw() {
    for (var i = 0; i < spans.length; i++) {
        var span = spans[i];
        span.style.transform = "rotate(" + (i / names.length * 360 + deg) + "deg)"
        span.style.color = "black"
    }
    var now = ((360 - deg) / 360 * names.length | 0) % names.length;
    randomname.setAttribute('data', names[now]);
    spans[now].style.color = "red";
    if (run) {
        slow = 6;
    } else {
        slow = slow * 0.995;
    }
    deg -= slow;
}
setInterval(draw, 10);