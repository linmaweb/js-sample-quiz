import { data } from "./data";
import { game } from "./game";
import { start, response } from "./variables";

start.addEventListener("click", () => game.start(data), false);
response.addEventListener("click", (event) => game.check(event), false);
