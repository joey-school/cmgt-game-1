import Game from "./game";

window.addEventListener("load", handleSave);

function handleSave(e: Event) {
    e.preventDefault();

    // Get the instance
    Game.getInstance();
}