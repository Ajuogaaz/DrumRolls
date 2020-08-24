
var numberOfButtons = document.querySelectorAll(".drum").length;

//document.querySelectorAll("button").forEach((button) => {

    //button.addEventListener("click", HandleClick);
//});

for (var i = 0; i < numberOfButtons; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){

        var buttonInnerHTML = this.innerHTML;

        switch (buttonInnerHTML){
            case "w":
                playAudio("sounds/tom-1.mp3");
                break;
            case "a":
                playAudio("sounds/tom-2.mp3");
                break;
            case "s":
                playAudio("sounds/tom-3.mp3");
                break;
            case "d":
                playAudio("sounds/tom-4.mp3");
                break;
            case "j":
                playAudio("sounds/snare.mp3");
                break;
            case "k":
                playAudio("sounds/crash.mp3");
                break;
            case "l":
                playAudio("sounds/kick-bass.mp3");
                break;

            default:
                console.log(buttonInnerHTML);
        }

    });
}

function playAudio(sound){
    var audio = new Audio(sound);
    audio.play()
}
