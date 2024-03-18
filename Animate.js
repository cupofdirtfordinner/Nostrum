const interval = setInterval(function() {
    Animate()
}, 1);

var Frames = 0
var Letters = document.querySelectorAll(".lettter");
function Animate() {
    Frames++
    for (let i = 0; i < Letters.length; i++) {
        const Width = .01
        const Amplitude = 30;
        if (Frames < 500) {
        Letters[i].style.transform = "translate(0px, "+(((Math.sin((Frames*Width)+(i*51))*Amplitude)+Amplitude)+(Frames-500)) +"px)"
        } else {
        Letters[i].style.transform = "translate(0px, "+((Math.sin((Frames*Width)+(i*51))*Amplitude)+Amplitude) +"px)"
        }
    }
}