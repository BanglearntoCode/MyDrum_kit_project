var num_of_buttons = document.querySelectorAll(".drum").length;
for (var i = 0; i < num_of_buttons; i++) {
document.querySelectorAll("button")[i].addEventListener("click", function () {
    var button_pressed = this.innerHTML;
    makeSound(button_pressed);
    changeAnimation(button_pressed);

});
document.addEventListener("keydown", function(event) {
    makeSound(event.key);
    changeAnimation(event.key);
})

}
function makeSound (key) {
    switch (key) {
        case "w":
            var tom_1 = new Audio("sounds/tom-1.mp3");
            tom_1.play();
            break;
            case "a":
                var tom_2 = new Audio("sounds/tom-2.mp3");
                tom_2.play();
                break;
            case "s":
                var tom_3 = new Audio("sounds/tom-3.mp3");
                tom_3.play();
                break;
            case "d":
                var tom_4 = new Audio("sounds/tom-4.mp3");
                tom_4.play();
                break;
            case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                break;
            case "k":
                var crash = new Audio("sounds/crash.mp3");
                crash.play();
                break;
            case "l":
                var kick_bass = new Audio("sounds/kick-bass.mp3");
                kick_bass.play();
                break;
        default:
            break;
    }
}

function changeAnimation (key) {
    var button = document.querySelector("." + key);
    button.classList.add("pressed");
    setTimeout((function (){
        button.classList.remove("pressed");
    }), 0.1);
}

