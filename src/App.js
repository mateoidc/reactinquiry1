import "./App.css";
import React from "react";
import BasicInfo from "./components/BasicInfo";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      people: [
        {
          name: "yoda",
          age: 900,
          occupation: "jedi",
        },
        {
          name: "anakin",
          age: 20,
          occupation: "jedi",
        },
        {
          name: "Asohka",
          age: 15,
          occupation: "jedi",
        },
        {
          name: "Mace",
          age: 50,
          occupation: "jedi",
        },
      ],
    };
  }
  render() {
    return <BasicInfo people={this.state.people} />;
  }
}

export default App;

//HARD: Now that you have a basic react app to display one person’s worth of information, now modify the app to iterate over an array of people’s basic information, while still keeping the new list of contacts in the top-level of state. (Optional: add styling to space out each person’s info)
