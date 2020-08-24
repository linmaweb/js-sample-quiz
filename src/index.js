import { view, game } from "./quiz";
import { data } from "./data";

view.start.addEventListener("click", () => game.start(data), false);
view.response.addEventListener("click", (event) => game.check(event), false);
