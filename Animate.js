const interval = setInterval(function() {
    Animate()
}, 1);

var Frames = 0
var Letters = document.querySelectorAll(".Letter");

var mousex = 0
var mousey = 0

function Animate() {
    Frames++
    for (let i = 0; i < Letters.length; i++) {
        const Width = .0075;
        const Amplitude = 30;
        const Sinewave = ((Math.sin((Frames*Width)+(i*51))*Amplitude)+Amplitude);
        const FallSpeed = 400;
        const ExponentialSlowFall = (((Frames-FallSpeed)**2)/FallSpeed);

        const mouseXpercent = mousex/window.innerWidth
        const mouseYpercent = mousey/window.innerHeight
        const LetterOffset = ((-20*i) + 20)+mouseXpercent*6;
        const LetterOffsetY = mouseYpercent*6-30;

        if (Frames < FallSpeed) {
        Letters[i].style.transform = "translate("+ LetterOffset +"px, "+ (( Sinewave - ExponentialSlowFall ) + LetterOffsetY ) +"px)"
        } else {
        Letters[i].style.transform = "translate("+ LetterOffset +"px, "+ ( Sinewave + LetterOffsetY ) +"px)"
        }

        Letters[i].style.background = "linear-gradient(45deg, rgba(48,0,0,1) 0%, rgb(112, 0, 0) " + 50*(mouseXpercent/2+0.5) +"%, rgb(112, 0, 0) "+ 55*(mouseXpercent/2+0.5) +"%, rgba(62,0,0,1) 90%)"
        Letters[i].style.backgroundClip = "text"
        Letters[i].style.color = "transparent"
    }
    

    window.addEventListener('mousemove', function(event) {
        mousey = event.clientY
        mousex = event.clientX
      })

}