import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Countshow: 0
    };
  }
  render() {
    return (
      <div>
        <h5 style={{ color: "red" }}>
                  Mounted since: {this.state.Countshow} s
                </h5>
                </div>
    );
  }
  // The setInterval method
  componentDidMount() {
    console.log("did mount");
    if (!this.props.hide) {
      setInterval(() => {
        this.setState({ Countshow: this.state.Countshow + 1 });
      }, 1000);
    }
  }
}

export default App;