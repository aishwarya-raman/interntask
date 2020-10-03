import React, { Component } from "react";
import { Button } from 'react-bootstrap';
import history from './../history';
import "./Home.css";




export default class Home extends Component {
  render() {
    return (
      <div className="Home">
        <div className="lander">
          <h1>Home page</h1>
          <p>Let's get started</p>
          <form>
            <Button variant="btn btn-success" onClick={() => history.push('/Contact')}>Start</Button>
          </form>
        </div>
      </div>
    );
  }
}
