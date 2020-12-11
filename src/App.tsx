import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// components
import Topnav from "./components/Topnav";
import Footer from "./components/Footer";
// screens
import Home from "./screens/Home";
import Blog from "./screens/Blog";
import Services from "./screens/Services";
import HowItWorks from "./screens/HowItWorks";
import Pricing from "./screens/Pricing";
import Careers from "./screens/Careers";
import SignUp from "./screens/SignUp";

const App: React.FC = () => {
  return (
    <Router>
      <div style={styles.container}>
        <Topnav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/blog">
            <Blog />
          </Route>
          <Route exact path="/services">
            <Services />
          </Route>
          <Route exact path="/pricing">
            <Pricing />
          </Route>
          <Route exact path="/howitworks">
            <HowItWorks />
          </Route>
          <Route exact path="/careers">
            <Careers />
          </Route>
          <Route exact path="/signup">
            <SignUp />
          </Route>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
};

const styles = {
  container: {
    display: "flex",
    height: "100%",
    flexDirection: "column" as "column", // getting an odd TSLint complaint. Pushing snooze on the problem for now.
    justifyContent: "space-between",
    background: "#F9F8F6",
  },
};

export default App;
