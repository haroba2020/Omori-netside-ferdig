// used to make the trailer controls only visible when hovering over
$('#trailer').hover(function toggleControls() {
    if (this.hasAttribute("controls")) {
        this.removeAttribute("controls")
    } else {
        this.setAttribute("controls", "controls")
    }
})
// used to fix the music autoplay 
var indexSave;
$("#lastResort").get(0).play()
$("button").click(function(){
    indexSave=1
})
$('#lastResort').volume = 0.1;


