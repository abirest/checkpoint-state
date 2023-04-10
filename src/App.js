import "./App.css";
import React, { Component } from "react";
import { Button, Alert, Card } from "react-bootstrap";
import img from './profile.jpg'
import FullName from './Components/Person/FullName';
import Bio from './Components/Person/Bio';
import Profession from './Components/Person/Profession';
import ImgSrc from './Components/Person/ImgSrc';
import Countshow from './Components/Show/Countshow';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fullName: "Abir Ben El Haj",
      bio: "Web developer",
      profession: "Developer",
      imgSrc:img,
      hide: false,
      countshow: 0,
    };

    this.handleClick = () => {
      this.setState({ hide: !this.state.hide });
    };
  }
  render() {
    if (this.state.hide) {
      return (
        <div className="form">
          <div className="app">
            <Card style={{ width: "30rem" }}>
              <Card.Body>
                  <Alert key="danger" variant="danger">
                    Hidden ..
                  </Alert>
              </Card.Body>
              {/* When the show state is true, the person's profile will appear */}
              <Button variant="primary" onClick={this.handleClick}>
                {this.state.hide ? "Show Profile" : "Hide"}
              </Button>
            </Card>
          </div>
        </div>
      );
    }else {
      return (
        <Profil
          {...this.state}
          click={this.handleClick}
          changeCounter={this.setState}
        />
      );
    }
  }
}
class Profil extends Component {
  render() {
    return (
        <div className="header-app">
          <Card style={{ width: "30rem" }}>
              <ImgSrc/>
              <FullName />
              <Bio />
              <Profession/>
              <Countshow/>
              <Button variant="primary" onClick={this.props.click}>
                {this.props.hide ? "Show" : "Hide Profile"}
              </Button>
          </Card>
        </div>
    );
  }
}

export default App;
