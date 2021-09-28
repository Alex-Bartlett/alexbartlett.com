function move() {
    var interval = setInterval(anim, 5);
    let stop = false;
    const elem = document.getElementById("rotate");
    function anim() {
        if (stop === true) {
            clearInterval(interval);
        }
        else {
            elem.style.translate = "rotate(5)";
        }
    }
}