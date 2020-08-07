import { createElement } from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return createElement("div", { id: "pets" }, [
    createElement("h1", {}, "Adopt Me!"),
    createElement(Pet, {
      name: "Apollo",
      animal: "dog",
      breed: "German Shepherd",
    }),
    createElement(Pet, {
      name: "Olive",
      animal: "cat",
      breed: "normal cat",
    }),
    createElement(Pet, {
      name: "Lula",
      animal: "turtle",
      breed: "that one",
    }),
  ]);
};

render(createElement(App), document.getElementById("root"));
