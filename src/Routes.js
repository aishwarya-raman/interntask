import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import About from "./Match/About";
import Contact from "./Choose/Contact";
import Products from "./Product/Products";
import Home from "./Home/Home";
import history from './history';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/About" component={About} />
                    <Route path="/Contact" component={Contact} />
                    <Route path="/Products" component={Products} />
                </Switch>
            </Router>
        )
    }
}
