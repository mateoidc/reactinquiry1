import React from "react";

class BasicInfo extends React.Component {
  render() {
    return (
      <>
        {this.props.people.map((person) => (
          <div className="App">
            name: {person.name} age: {person.age} occupation:{" "}
            {person.occupation}
          </div>
        ))}
      </>
    );
  }
}

export default BasicInfo;
