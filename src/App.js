const Pet = ({ name, animal, breed }) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, name),
    React.createElement("h2", {}, animal),
    React.createElement("h2", {}, breed),
  ]);
};

const App = () => {
  return React.createElement("div", { id: "pets" }, [
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Apollo",
      animal: "dog",
      breed: "German Shepherd",
    }),
    React.createElement(Pet, {
      name: "Olive",
      animal: "cat",
      breed: "normal cat",
    }),
    React.createElement(Pet, {
      name: "Lula",
      animal: "turtle",
      breed: "that one",
    }),
  ]);
};
Pet;

ReactDOM.render(React.createElement(App), document.getElementById("root"));
