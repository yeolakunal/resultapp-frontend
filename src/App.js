import React from "react";
import "./App.css";
import ResultPage from "./ResultPage";
import NavBar from "./Navbar";
import About from "./About";
import { Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import ResultPageFunctional from "./ResultPageFunctional";

const App = () => {
    return (
        <Provider store={store}>
            <div>
                <NavBar />
                <Route exact path="/" render={() => <ResultPage />} />
                <Route
                    exact
                    path="/func"
                    render={() => <ResultPageFunctional />}
                />
                <Route exact path="/about" component={About} />
            </div>
        </Provider>
    );
};

export default App;
