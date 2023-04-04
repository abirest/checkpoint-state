
import "./App.css";
import React, { Component } from "react";
import { Button, Alert, Card } from "react-bootstrap";
import img from './profile.jpg'

// The App.js is transformed into a class-based component
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
                <>
                  <Alert key="danger" variant="danger">
                    Hidden ..
                  </Alert>
                </>
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
  constructor(props) {
    super(props);
    this.state = {
      countshow: 0
    };
  }
  render() {
    return (
      <div>
        <div className="header-app">
          <Card style={{ width: "30rem" }}>
            <Card.Img style={{ width: '200px', borderRadius: '50%' }}
              variant="top"
              src={this.props.imgSrc}
              alt="profilephoto"
            />
            <Card.Body>
              <Card.Title>
                <h2>{this.props.fullName}</h2>
              </Card.Title>
              <Card.Text>
                <h5>{this.props.profession}</h5>
                <h5>{this.props.bio}</h5>
                {/* A field that shows the time interval since the last component was mounted  */}
                <h5 style={{ color: "red" }}>
                  Mounted since: {this.state.countshow} s
                </h5>
              </Card.Text>

              <Button variant="primary" onClick={this.props.click}>
                {this.props.hide ? "Show" : "Hide Profile"}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
  // The setInterval method
  componentDidMount() {
    console.log("did mount");
    if (!this.props.hide) {
      setInterval(() => {
        this.setState({ countshow: this.state.countshow + 1 });
      }, 1000);
    }
  }
}

export default App;
