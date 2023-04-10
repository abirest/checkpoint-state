import React from "react";
class App  extends React.Component {
 state = {
   FullName: "Abir Ben El Haj"
 };
 render() {
   return <h2>{this.state.FullName}</h2>;
 }
}
export default App ;
