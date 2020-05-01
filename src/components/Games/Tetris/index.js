import Game from "./src/game.js";

export default function () {
    const game = new Game();

    console.log(game)

    window.game = game;
}