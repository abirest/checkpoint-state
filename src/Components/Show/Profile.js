import React, { Component } from "react";
import { Card, Button, Alert } from "react-bootstrap";

class Profil extends Component {
  render() {
    return (
      <div className="form">
        <div className="app">
          <Card style={{ width: "30rem" }}>
            <Card.Img variant="top" src={this.props.imgSrc} />
            <Card.Body>
              <Card.Title>{this.props.fullName}</Card.Title>
              <Card.Text>{this.props.bio}</Card.Text>
              <Card.Text>{this.props.profession}</Card.Text>
              <Alert key="danger" variant="danger">
                {this.props.countshow} Views
              </Alert>
              <Button variant="primary" onClick={this.props.click}>
                {this.props.hide ? "Show Profile" : "Hide"}
              </Button>
            </Card.Body>
          </Card>
        </div>
      </div>
    );
  }
}

export default Profil;