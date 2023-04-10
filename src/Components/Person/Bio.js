import React from 'react'

class App extends React.Component {
    state = {
      Bio: "Web developer"
    };
    render() {
      return <h5>{this.state.Bio}</h5>;
    }
   }
   export default App;