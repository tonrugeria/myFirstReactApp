import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: "abc123",
          name: "Charmander",
        },
        {
          id: "123abc",
          name: "Squirtle",
        },
        {
          id: "1a2b3c",
          name: "Bulbasur",
        },
        {
          id: "321cba",
          name: "Pikachu",
        },
      ],
    };
  }
  render() {
    return (
      <div className="App">
        {this.state.monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
