import React from "react";
class App  extends React.Component {
 state = {
   Profession: "Developer"
 };
 render() {
   return <h5>{this.state.Profession}</h5>;
 }
}
export default App ;